const mongoose = require("mongoose");
const GameSave = mongoose.model("GameSave");
const User = mongoose.model("User");
const notificationHandler = require("../handlers/notificationHandler");
const linkify = require("linkifyjs");
require("linkifyjs/plugins/hashtag")(linkify);
require("linkifyjs/plugins/mention")(linkify);

exports.addGameSave= (req, res) => {
  //notificationHandler.sendCommentMentionNotification(req, values);
  new GameSave({
    author: req.userData.userId,
    data: req.body.gameSave
  })
    .save()
    .then(gameSave => {
      res.status(200).json({ gameSaveId: gameSave._id });
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

exports.getGameSave = (req, res, next) => {
  let q;
  q = [
    { $match: { _id: mongoose.Types.ObjectId(req.body.gameSaveId) } },
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
      },
    },
  ];

  GameSave.findOne({ _id: mongoose.Types.ObjectId(req.body.gameSaveId) })
    .select("data")
    .then(({ data }) => {
      res.status(200).json({ gameSave: data })
    });
};
