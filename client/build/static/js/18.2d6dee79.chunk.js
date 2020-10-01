(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{107:function(t,e,n){"use strict";var a=n(5),o=n(4),r=n(0),s={fetchPosts:function(t){var e={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify(Object(r.a)({},t))};return fetch("/api/post/getPosts/",e).then(c).then(function(t){return t.data})},getPostsByHashtag:function(t,e){var n={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify(Object(r.a)({hashtag:t},e))};return fetch("/api/post/getPostsByHashtag/",n).then(c).then(function(t){return t.data})},getPostsByLocation:function(t,e){var n={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify(Object(r.a)({coordinates:t},e))};return fetch("/api/post/getPostsByLocation/",n).then(c).then(function(t){return t.data})},addPost:function(t){var e={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token},body:t};return fetch("/api/post/addPost/",e).then(c).then(function(t){return t.post})},addProfiePicture:function(t){var e={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token},body:t};return fetch("/api/user/addProfiePicture/",e).then(c).then(function(t){return t})},deletePost:function(t){var e={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify({postId:t})};return fetch("/api/post/delete/",e).then(c).then(function(t){return t})},likePost:function(t,e){var n={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify({postId:t,authorId:e})};return fetch("/api/post/likePost/",n).then(c).then(function(t){return t})},getPostLikes:function(t){var e={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify({postId:t})};return fetch("/api/post/getPostLikes/",e).then(c).then(function(t){return t})},getPost:function(t){var e={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify({postId:t})};return fetch("/api/post/getPost/",e).then(c).then(function(t){return t})},logout:i};function i(){localStorage.removeItem("user")}function c(t){return t.text().then(function(e){var n=e&&JSON.parse(e);if(!t.ok){401===t.status&&(console.log(t),i(),window.location.reload(!0));var a=n&&n.message||t.statusText;return Promise.reject(a)}return n})}var l=n(31);n.d(e,"a",function(){return u});var u={mapLoactionSelect:function(t){return function(e){e({type:a.a.MAP_LOCATION_SELECT,location:t})}},changeTextareaValue:function(t){return function(e){e({type:a.a.TEXTAREA_VALUE_CAHNGE,value:t})}},canvasHasValue:function(t){return function(e){e({type:a.a.CANVAS_HAS_VALUE,hasValue:t})}},getCroppedSrc:function(t){return function(e){e({type:a.a.IMAGE_CROP_SELECT,imgSrc:t})}},selectImage:function(t,e){return function(n){n({type:a.a.IMAGE_SELECT,imgSrc:t,imgSrcExt:e})}},fetchPosts:function(t){return function(n){s.fetchPosts(t).then(function(o){if(t.initialFetch){var r=o[0],s=r.posts,i=r.total;s.forEach(function(t){return n({type:a.a.INIT_COMMENT,postId:t._id})}),n(e(s,i[0],t.initialFetch))}else n(e(o)),o.forEach(function(t){return n({type:a.a.INIT_COMMENT,postId:t._id})})},function(t){n(l.a.error(t))})};function e(t,e,n){return{type:a.a.POSTS_SUCCESS,posts:t,total:e,initialFetch:n}}},getPostsByHashtag:function(t,e){return function(o){var r;o((r=e.initialFetch,{type:a.a.HASHTAG_POSTS_REQUEST,initialFetch:r})),s.getPostsByHashtag(t,e).then(function(a){if(e.initialFetch){var r=a[0],s=r.posts,i=r.total;o(n(s,i[0],e.initialFetch,t))}else o(n(a))},function(t){o(l.a.error(t))})};function n(t,e,n,o){return{type:a.a.HASHTAG_POSTS_SUCCESS,posts:t,total:e,initialFetch:n,hashtag:o}}},getPostsByLocation:function(t,e){return function(o){var r;o((r=e.initialFetch,{type:a.a.LOCATION_POSTS_REQUEST,initialFetch:r})),s.getPostsByLocation(t,e).then(function(a){if(e.initialFetch){var r=a[0],s=r.posts,i=r.total;o(n(s,i[0],e.initialFetch,t))}else o(n(a))},function(t){o(l.a.error(t))})};function n(t,e,n,o){return{type:a.a.LOCATION_POSTS_SUCCESS,posts:t,total:e,initialFetch:n,coordinates:o}}},deletePost:function(t){return function(e){e({type:a.a.POST_DELETE_REQUEST}),s.deletePost(t).then(function(t){var n;e((n=t,{type:a.a.POST_DELETE_SUCCESS,result:n})),e(l.a.success(t.message))},function(t){console.log(t)})}},addPost:function(t){return function(e){e({type:a.a.ADD_POST_REQUEST}),s.addPost(t).then(function(t){e(function(t){return{type:a.a.ADD_POST_SUCCESS,post:t}}(t)),e(l.a.success("Post uploaded")),e({type:a.a.INIT_COMMENT,postId:t._id})},function(t){e(l.a.error(t))})}},addProfiePicture:function(t){return function(e){e({type:o.a.GETUSER_REQUEST}),s.addProfiePicture(t).then(function(t){var n;e((n=t.user,{type:o.a.USER_UPDATE_PROFILEPICTURE_SUCCESS,user:n}))},function(t){console.log(t)})}},likePost:function(t,e,n){return function(r){n.some(function(e){return e===t})?r(o(a.a.DISLIKE_POST,{postId:t})):r(o(a.a.LIKE_POST,{postId:t})),s.likePost(t,e).then(function(){},function(t){console.log(t)})};function o(t,e){return{type:t,post:e}}},getPostLikes:function(t){return function(e){s.getPostLikes(t).then(function(t){var n;e((n=t.users[0].users_likes,{type:a.a.GET_POST_LIKES,postLikes:n}))},function(t){console.log(t)})}},getPost:function(t){return function(e){s.getPost(t).then(function(t){var n,o;document.title=t.post[0].author[0].username+"'s post | Homemade Arcade",e((n=a.a.GET_POST,o=t.post,{type:n,post:o})),e({type:a.a.INIT_COMMENT,postId:t.post[0]._id})},function(t){e(l.a.error(t)),console.log(t)})}}}},126:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n(1),o=n.n(a),r=n(271);function s(t){var e=t.alert,n=e.type,a=e.message;return"success"===n?o.a.createElement(r.a,{success:!0,header:"Success",content:a}):"error"===n?o.a.createElement(r.a,{error:!0,header:"Error",content:a}):null}},271:function(t,e,n){"use strict";var a=n(61),o=n.n(a),r=n(67),s=n.n(r),i=n(70),c=n.n(i),l=n(71),u=n.n(l),h=n(68),p=n.n(h),d=n(72),f=n.n(d),m=n(74),g=n.n(m),S=n(66),y=n.n(S),O=n(91),E=n.n(O),P=(n(84),n(62)),v=n.n(P),T=(n(2),n(1)),N=n.n(T),b=n(259),_=n(460),j=n(461),I=n(60),C=n(476),A=n(305);function k(t){var e=t.children,n=t.className,a=t.content,r=v()("content",n),s=Object(_.a)(k,t),i=Object(j.a)(k,t);return N.a.createElement(i,o()({},s,{className:r}),I.a.isNil(e)?a:e)}k.handledProps=["as","children","className","content"],k.propTypes={};var L=k;function J(t){var e=t.children,n=t.className,a=t.content,r=v()("header",n),s=Object(_.a)(J,t),i=Object(j.a)(J,t);return N.a.createElement(i,o()({},s,{className:r}),I.a.isNil(e)?a:e)}J.handledProps=["as","children","className","content"],J.propTypes={},J.create=Object(C.f)(J,function(t){return{content:t}});var H=J,U=n(83),D=n.n(U);function F(t){var e=t.children,n=t.className,a=t.content,r=v()("content",n),s=Object(_.a)(F,t),i=Object(j.a)(F,t);return N.a.createElement(i,o()({},s,{className:r}),I.a.isNil(e)?a:e)}F.handledProps=["as","children","className","content"],F.propTypes={},F.defaultProps={as:"li"},F.create=Object(C.f)(F,function(t){return{content:t}});var w=F;function B(t){var e=t.children,n=t.className,a=t.items,r=v()("list",n),s=Object(_.a)(B,t),i=Object(j.a)(B,t);return N.a.createElement(i,o()({},s,{className:r}),I.a.isNil(e)?D()(a,w.create):e)}B.handledProps=["as","children","className","items"],B.propTypes={},B.defaultProps={as:"ul"},B.create=Object(C.f)(B,function(t){return{items:t}});var M=B;n.d(e,"a",function(){return z});var z=function(t){function e(){var t,n;s()(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=u()(this,(t=p()(e)).call.apply(t,[this].concat(o))),y()(g()(g()(n)),"handleDismiss",function(t){var e=n.props.onDismiss;e&&e(t,n.props)}),n}return f()(e,t),c()(e,[{key:"render",value:function(){var t=this.props,n=t.attached,a=t.children,r=t.className,s=t.color,i=t.compact,c=t.content,l=t.error,u=t.floating,h=t.header,p=t.hidden,d=t.icon,f=t.info,m=t.list,g=t.negative,S=t.onDismiss,y=t.positive,O=t.size,P=t.success,T=t.visible,k=t.warning,J=v()("ui",s,O,Object(b.a)(i,"compact"),Object(b.a)(l,"error"),Object(b.a)(u,"floating"),Object(b.a)(p,"hidden"),Object(b.a)(d,"icon"),Object(b.a)(f,"info"),Object(b.a)(g,"negative"),Object(b.a)(y,"positive"),Object(b.a)(P,"success"),Object(b.a)(T,"visible"),Object(b.a)(k,"warning"),Object(b.b)(n,"attached"),"message",r),U=S&&N.a.createElement(A.a,{name:"close",onClick:this.handleDismiss}),D=Object(_.a)(e,this.props),F=Object(j.a)(e,this.props);return I.a.isNil(a)?N.a.createElement(F,o()({},D,{className:J}),U,A.a.create(d,{autoGenerateKey:!1}),(!E()(h)||!E()(c)||!E()(m))&&N.a.createElement(L,null,H.create(h,{autoGenerateKey:!1}),M.create(m,{autoGenerateKey:!1}),Object(C.d)(c,{autoGenerateKey:!1}))):N.a.createElement(F,o()({},D,{className:J}),U,a)}}]),e}(T.Component);y()(z,"Content",L),y()(z,"Header",H),y()(z,"List",M),y()(z,"Item",w),y()(z,"handledProps",["as","attached","children","className","color","compact","content","error","floating","header","hidden","icon","info","list","negative","onDismiss","positive","size","success","visible","warning"]),z.propTypes={}},814:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return O});var a=n(24),o=n(25),r=n(27),s=n(26),i=n(28),c=n(1),l=n.n(c),u=n(18),h=n(305),p=n(336),d=n(292),f=n(107),m=n(126),g=n(247),S=n.n(g),y=function(t){function e(){var t,n;Object(a.a)(this,e);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(n=Object(r.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(i)))).componentDidMount=function(){var t=n.props,e=t.dispatch,a=t.match;t.data.hashtag!==a.params.hashtag&&e(f.a.getPostsByHashtag(a.params.hashtag,{initialFetch:!0})),document.title="Hashtag Page | Homemade Arcade"},n.fetchData=function(){var t=n.props,e=t.dispatch,a=t.data.postsByHashtag,o=t.match,r=a[a.length-1]._id;e(f.a.getPostsByHashtag(o.params.hashtag,{initialFetch:!1,lastId:r}))},n}return Object(i.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this.props,e=t.data,n=e.postsByHashtag,a=e.totalPostsByHashtag,o=t.alert,r=t.match,s=n.length!==a,i=n.map(function(t){return l.a.createElement(d.a,{to:"/p/"+t._id,key:t._id},l.a.createElement("div",{className:"gallery-item"},l.a.createElement("img",{src:"/images/post-images/thumbnail/".concat(t.photo),className:"gallery-image",alt:""}),l.a.createElement("div",{className:"gallery-item-info"},l.a.createElement("ul",null,l.a.createElement("li",{className:"gallery-item-likes"},l.a.createElement("span",{className:"visually-hidden"},"Likes:"),l.a.createElement(h.a,{name:"heart"})," ",t.likes),l.a.createElement("li",{className:"gallery-item-comments"},l.a.createElement("span",{className:"visually-hidden"},"Comments:"),l.a.createElement(h.a,{name:"comment"})," ",t.comments)))))});return o.type?l.a.createElement("div",{className:"container"},l.a.createElement(m.a,{alert:o})):l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"hashtag"},"#",r.params.hashtag),l.a.createElement("div",null,l.a.createElement("p",{style:{fontSize:"2rem",paddingBottom:"1%"}}," ",a," posts"),l.a.createElement(p.a,null),l.a.createElement(S.a,{className:"gallery",dataLength:i.length,next:this.fetchData,hasMore:s,loader:l.a.createElement("h4",null,"Loading...")},i)),l.a.createElement(p.a,{hidden:!0}))}}]),e}(c.Component),O=Object(u.b)(function(t){return{data:t.post,alert:t.alert}})(y)}}]);