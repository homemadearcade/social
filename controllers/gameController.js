const mongoose = require("mongoose");
const GameSave = mongoose.model("GameSave");
const User = mongoose.model("User");
const notificationHandler = require("../handlers/notificationHandler");
const linkify = require("linkifyjs");
require("linkifyjs/plugins/hashtag")(linkify);
require("linkifyjs/plugins/mention")(linkify);

function arrayRemove(array, value) {
  return array.filter(item => {
    return item._id.toString() !== value.toString();
  });
}

exports.addGameSave= (req, res) => {
  //notificationHandler.sendCommentMentionNotification(req, values);
  new GameSave({
    author: req.userData.userId,
    data: req.body.gameSave
  })
    .save()
    .then(gameSave => {
      res.status(200).json({ gameSave });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: err.message });
    });
};

exports.getGameSavesForUser = (req, res) => {
  let query;

  query = {
    $match: { author: mongoose.Types.ObjectId(req.userData.userId) },
  };
  GameSave.aggregate([
    query,
    { $sort: { createdAt: -1 } },
    { $limit: 15 },
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "author"
      }
    },
    {
      $project: {
        data: 1,
        createdAt: 1,
        "author._id": 1,
        "author.firstName": 1,
        "author.lastName": 1,
        "author.username": 1,
        "author.profilePicture": 1
      }
    }
  ])
    .then(gameSaves => {
      res.status(200).json({ gameSaves });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: err.message });
    });
};

exports.addCommentReply = (req, res) => {
  Comment.findById({ _id: req.body.commentId })
    .then(comment => {
      if (!comment) {
        return res.status(400).json({ message: "No comment with that id" });
      }
      new CommentReply({
        commentAt: comment._id,
        author: req.userData.userId,
        text: req.body.text
      })
        .save()
        .then(comment => {
          comment.populate("author", err => {
            if (err) {
              return res.status(400).json({ message: err.message });
            }

            let notification;

            if (req.userData.userId !== req.body.authorId) {
              notification = new Notification({
                sender: req.userData.userId,
                receiver: req.body.authorId,
                comment: req.body.commentId,
                post: req.body.postId,
                reply: comment._id,
                type: "comment_reply"
              })
                .save()
                .then(notification => {
                  return notification
                    .populate("comment", "text")
                    .populate("reply", "text")
                    .populate("post", "photo")
                    .execPopulate();
                })
                .then(notification => {
                  return notification.toObject();
                });
            }
            const commentReplyLike = new CommentReplyLike({
              comment: comment._id
            }).save();

            const user = User.findById(req.userData.userId).select(
              "profilePicture username"
            );

            Promise.all([user, notification, commentReplyLike])
              .then(values => {
                notificationHandler.sendAddCommentReplyNotification(
                  req,
                  values
                );
                const data = {
                  _id: comment._id,
                  author: [
                    {
                      _id: comment.author._id,
                      firstName: comment.author.firstName,
                      lastName: comment.author.lastName,
                      username: comment.author.username,
                      profilePicture: comment.author.profilePicture
                    }
                  ],
                  text: comment.text,
                  createdAt: comment.createdAt,
                  commentAt: comment.commentAt,
                  likes: 0
                };
                res.status(200).json({ comment: data });
              })
              .catch(err => {
                console.log(err);
                res.status(400).json({ message: err.message });
              });
          });
        })
        .catch(err => {
          console.log(err);
          res.status(400).json({ message: err.message });
        });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: err.message });
    });
};

exports.getRepliesForComment = (req, res) => {
  let query;

  if (req.body.initialFetch) {
    query = {
      $match: {
        commentAt: mongoose.Types.ObjectId(req.body.commentId)
      }
    };
  } else {
    query = {
      $match: {
        $and: [
          {
            _id: {
              $lt: mongoose.Types.ObjectId(req.body.lastId)
            },
            commentAt: mongoose.Types.ObjectId(req.body.commentId)
          }
        ]
      }
    };
  }

  CommentReply.aggregate([
    query,
    { $sort: { createdAt: -1 } },
    { $limit: 1 },
    {
      $project: {
        text: 1,
        createdAt: 1,
        author: 1,
        commentAt: 1
      }
    },
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "author"
      }
    },
    {
      $lookup: {
        from: "commentreplylikes",
        localField: "_id",
        foreignField: "comment",
        as: "likes"
      }
    },
    {
      $project: {
        text: 1,
        createdAt: 1,
        commentAt: 1,
        likes: {
          $size: { $arrayElemAt: ["$likes.users_likes", 0] }
        },
        "author._id": 1,
        "author.firstName": 1,
        "author.lastName": 1,
        "author.username": 1,
        "author.profilePicture": 1
      }
    }
  ])
    .then(comments => {
      res.status(200).json({ comments, commentId: req.body.commentId });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: err.message });
    });
};

exports.likeComment = (req, res) => {
  CommentLike.updateOne(
    {
      comment: req.body.commentId,
      "users_likes.author": { $ne: req.userData.userId }
    },
    {
      $addToSet: { users_likes: { author: req.userData.userId } }
    }
  ).then(document => {
    if (document.nModified === 1) {
      let notification;
      if (req.userData.userId !== req.body.authorId) {
        notification = new Notification({
          sender: req.userData.userId,
          receiver: req.body.authorId,
          comment: req.body.commentId,
          post: req.body.postId,
          type: "like_comment"
        })
          .save()
          .then(notification => {
            return notification
              .populate("post", "photo ")
              .populate("comment", "text ")
              .execPopulate();
          })
          .then(notification => {
            return notification.toObject();
          });
      }

      const user = User.findByIdAndUpdate(
        req.userData.userId,
        { $push: { commentLikes: { comment: req.body.commentId } } },
        { new: true, upsert: true }
      );
      Promise.all([user, notification])
        .then(values => {
          notificationHandler.sendLikeCommenNotification(req, values);

          return res.status(200).json({
            commentId: req.body.commentId,
            postId: req.body.postId,
            action: "liked"
          });
        })
        .catch(err => {
          console.log(err);
          res.status(400).json({ message: err.message });
        });
    } else {
      const commentLike = CommentLike.updateOne(
        { comment: req.body.commentId },
        {
          $pull: { users_likes: { author: req.userData.userId } }
        },
        { new: true, upsert: true }
      );

      const user = User.findByIdAndUpdate(
        req.userData.userId,
        { $pull: { commentLikes: { comment: req.body.commentId } } },
        { new: true, upsert: true }
      );

      Promise.all([commentLike, user])
        .then(values => {
          return res.status(200).json({
            commentId: req.body.commentId,
            postId: req.body.postId,
            action: "disliked"
          });
        })
        .catch(err => {
          console.log(err);
          res.status(400).json({ message: err.message });
        });
    }
  });
};

exports.likeCommentReply = (req, res) => {
  CommentReplyLike.updateOne(
    {
      comment: req.body.commentId,
      "users_likes.author": { $ne: req.userData.userId }
    },
    {
      $addToSet: { users_likes: { author: req.userData.userId } }
    }
  ).then(document => {
    if (document.nModified === 1) {
      let notification;
      if (req.userData.userId !== req.body.authorId) {
        notification = new Notification({
          sender: req.userData.userId,
          receiver: req.body.authorId,
          reply: req.body.commentId,
          post: req.body.postId,
          type: "like_commentReply"
        })
          .save()
          .then(notification => {
            return notification
              .populate("post", "photo")
              .populate("reply", "text")
              .execPopulate();
          })
          .then(notification => {
            return notification.toObject();
          });
      }

      const user = User.findByIdAndUpdate(
        req.userData.userId,
        { $push: { commentReplyLikes: { comment: req.body.commentId } } },
        { new: true, upsert: true }
      );
      Promise.all([user, notification])
        .then(values => {
          notificationHandler.sendLikeCommenReplyNotification(req, values);
          return res.status(200).json({
            commentId: req.body.commentId,
            parentId: req.body.commentAt,
            action: "liked"
          });
        })
        .catch(err => {
          console.log(err);
          res.status(400).json({ message: err.message });
        });
    } else {
      const commentReplyLike = CommentReplyLike.updateOne(
        { comment: req.body.commentId },
        {
          $pull: { users_likes: { author: req.userData.userId } }
        },
        { new: true, upsert: true }
      );

      const user = User.findByIdAndUpdate(
        req.userData.userId,
        { $pull: { commentReplyLikes: { comment: req.body.commentId } } },
        { new: true, upsert: true }
      );

      Promise.all([commentReplyLike, user])
        .then(values => {
          return res.status(200).json({
            commentId: req.body.commentId,
            parentId: req.body.commentAt,
            action: "disliked"
          });
        })
        .catch(err => {
          console.log(err);
          res.status(400).json({ message: err.message });
        });
    }
  });
};

exports.getCommentLikes = (req, res) => {
  CommentLike.find({ comment: req.body.commentId })
    .populate("users_likes.author", "username profilePicture")
    .then(users => {
      res.status(200).json({ users });
    });
};

exports.getCommentReplyLikes = (req, res) => {
  CommentReplyLike.find({ comment: req.body.commentId })
    .populate("users_likes.author", "username profilePicture")
    .then(users => {
      res.status(200).json({ users });
    });
};
