(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{121:function(e,t,n){"use strict";var r=n(0),a=n(4),o=n(5),s={login:function(e,t){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})};return fetch("/api/user/login",n).then(c).then(function(e){return localStorage.setItem("user",JSON.stringify({token:e.user.token})),e.user})},logout:i,sendVerificationEmail:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})};return fetch("/api/user/sendVerificationEmail/",t).then(c)},sendforgotPasswordEmail:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})};return fetch("/api/user/sendforgotPasswordEmail/",t).then(c)},register:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("/api/user/signup/",t).then(c)},getUserData:function(e){var t={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token,"Content-Type":"application/json"},body:JSON.stringify(Object(r.a)({},e))};return fetch("/api/user/getUserData",t).then(c).then(function(e){return e})},resetPassword:function(e){var t={method:"POST",headers:{Authorization:"Bearer "+e.jwt,"Content-Type":"application/json"},body:JSON.stringify(Object(r.a)({},e))};return fetch("/api/user/passwordreset",t).then(u).then(function(e){return e})},updateUser:function(e){delete e.isDisabled;var t={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token,"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("/api/user/updateUser",t).then(c).then(function(e){return localStorage.setItem("user",JSON.stringify({token:e.token})),e})},followUser:function(e){var t={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token,"Content-Type":"application/json"},body:JSON.stringify({userId:e})};return fetch("/api/user/followUser",t).then(c).then(function(e){return e})},getUserProfileData:function(e){var t={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token,"Content-Type":"application/json"},body:JSON.stringify({username:e.trim(),profilePage:!0})};return fetch("/api/user/getProfilePageData",t).then(c).then(function(e){return e})},getPosts:function(e){var t={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token,"Content-Type":"application/json"},body:JSON.stringify(Object(r.a)({},e))};return fetch("/api/user/getPosts",t).then(c).then(function(e){return e})},getUserProfileFollowers:function(e){var t={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token,"Content-Type":"application/json"},body:JSON.stringify({userId:e})};return fetch("/api/user/getUserProfileFollowers",t).then(c).then(function(e){return e})},getUserProfileFollowings:function(e){var t={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token,"Content-Type":"application/json"},body:JSON.stringify({userId:e})};return fetch("/api/user/getUserProfileFollowings",t).then(c).then(function(e){return e})},getNewUsers:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(r.a)({},e))};return fetch("/api/user/getNewUsers",t).then(c).then(function(e){return e})}};function i(){localStorage.removeItem("user")}function c(e){return e.text().then(function(t){var n=t&&JSON.parse(t);if(!e.ok){401===e.status&&(i(),window.location.reload(!0));var r=n&&n.message||e.statusText;return Promise.reject(r)}return n})}function u(e){return e.text().then(function(t){var n=t&&JSON.parse(t);if(!e.ok){e.status;var r=n&&n.message||e.statusText;return Promise.reject(r)}return n})}var l=n(31),f=n(16);n.d(t,"a",function(){return p});var p={login:function(e,t){return function(n){var r;n((r={email:e},{type:a.a.LOGIN_REQUEST,user:r})),s.login(e,t).then(function(e){n(function(e){return{type:a.a.LOGIN_SUCCESS,user:e}}(e.token)),n({type:a.a.GETUSER_SUCCESS,user:e}),f.a.push("/")},function(e){n(function(e){return{type:a.a.LOGIN_FAILURE,error:e}}(e.toString())),n(l.a.error(e.toString()))})}},logout:function(){return s.logout(),function(e){e({type:a.a.LOGOUT})}},register:function(e){return function(t){t(function(e){return{type:a.a.REGISTER_REQUEST,user:e}}(e)),s.register(e).then(function(e){var n;t({type:a.a.REGISTER_SUCCESS,user:n}),f.a.push("/login"),t(l.a.success(e.message))},function(e){t(function(e){return{type:a.a.REGISTER_FAILURE,error:e}}(e.toString())),t(l.a.error(e.toString()))})}},sendVerificationEmail:function(e){return function(t){s.sendVerificationEmail(e).then(function(e){t(l.a.success(e.message))},function(e){t(l.a.error(e))})}},getUserData:function(e){return function(t){t({type:a.a.GETUSER_REQUEST}),s.getUserData(e).then(function(e){var n;e.user.posts&&e.user.posts.forEach(function(e){return t({type:o.a.INIT_COMMENT,postId:e._id})}),t((n=e.user,{type:a.a.GETUSER_SUCCESS,user:n}))},function(e){t(function(e){return{type:a.a.GETUSER_FAILURE,error:e}}(e.toString())),t(l.a.error(e.toString()))})}},getUserProfileFollowers:function(e){return function(t){s.getUserProfileFollowers(e).then(function(e){var n;t((n=e.users[0].followers,{type:a.a.GET_USER_PROFILE_FOLLOWERS,users:n}))},function(e){console.log(e)})}},getUserProfileFollowings:function(e){return function(t){s.getUserProfileFollowings(e).then(function(e){var n;t((n=e.users[0].following,{type:a.a.GET_USER_PROFILE_FOLLOWINGS,users:n}))},function(e){console.log(e)})}},getFollowers:function(e){return function(t){s.getUserProfileFollowers(e).then(function(e){var n;t((n=e.users[0].followers,{type:a.a.GET_USER_FOLLOWERS,users:n}))},function(e){console.log(e)})}},getPosts:function(e){return function(t){s.getPosts(e).then(function(e){var n;e.posts.forEach(function(e){return t({type:o.a.INIT_COMMENT,postId:e._id})}),t((n=e.posts,{type:a.a.GET_POSTS,posts:n}))},function(e){t(l.a.error(e))})}},getUserPosts:function(e){return function(t){s.getPosts(e).then(function(e){var n;e.posts.forEach(function(e){return t({type:o.a.INIT_COMMENT,postId:e._id})}),t((n=e.posts,{type:a.a.GET_USER_PROFILE_POSTS,posts:n}))},function(e){t(l.a.error(e))})}},getFollowings:function(e){return function(t){s.getUserProfileFollowings(e).then(function(e){var n;t((n=e.users[0].following,{type:a.a.GET_USER_FOLLOWINGS,users:n}))},function(e){console.log(e)})}},updateUserData:function(e){return function(t){t({type:a.a.USER_UPDATE_REQUEST}),s.updateUser(e).then(function(e){var n;t((n=e.user,{type:a.a.USER_UPDATE_SUCCESS,user:n}))},function(e){t(function(e){return{type:a.a.USER_UPDATE_FAILURE,error:e}}(e.toString()))})}},followUser:function(e){return function(t){s.followUser(e).then(function(e){"followed"===e.action?t({type:a.a.FOLLOW_USER,user:e}):t({type:a.a.UNFOLLOW_USER,user:e})},function(e){console.log(e)})}},sendforgotPasswordEmail:function(e){return function(t){s.sendforgotPasswordEmail(e).then(function(e){t(l.a.success(e.message))},function(e){t(l.a.error(e))})}},getUserProfileData:function(e){return function(t){t({type:a.a.GET_USERPROFILE_DATA_REQUEST}),s.getUserProfileData(e).then(function(e){if(e.user.loggedInUser)return f.a.push("/profile");var n;document.title="@"+e.user.username+" | Homemade Arcade",t((n=e,{type:a.a.GET_USERPROFILE_DATA,user:n})),e.user.posts&&e.user.posts.forEach(function(e){return t({type:o.a.INIT_COMMENT,postId:e._id})})},function(e){console.log(e),t({type:a.a.GET_USERPROFILE_DATA_FAILURE}),t(l.a.error(e.toString()))})}},getNewUsers:function(e){return function(t){e.initialFetch||t({type:a.a.GET_NEW_USERS_REQUEST}),s.getNewUsers(e).then(function(n){var o;t((o=Object(r.a)({},n,e),{type:a.a.GET_NEW_USERS_SUCCESS,data:o}))},function(e){console.log(e)})}},resetPassword:function(e){return function(n){n({type:a.a.PASSWORD_RESET_REQUEST}),s.resetPassword(e).then(function(e){n(l.a.success(e.message)),n(t())},function(e){n(l.a.error(e)),n(t())})};function t(){return{type:a.a.PASSWORD_RESET_RESPONSE}}}}},126:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(1),a=n.n(r),o=n(271);function s(e){var t=e.alert,n=t.type,r=t.message;return"success"===n?a.a.createElement(o.a,{success:!0,header:"Success",content:r}):"error"===n?a.a.createElement(o.a,{error:!0,header:"Error",content:r}):null}},271:function(e,t,n){"use strict";var r=n(61),a=n.n(r),o=n(67),s=n.n(o),i=n(70),c=n.n(i),u=n(71),l=n.n(u),f=n(68),p=n.n(f),h=n(72),d=n.n(h),m=n(74),g=n.n(m),E=n(66),y=n.n(E),S=n(91),O=n.n(S),b=(n(84),n(62)),v=n.n(b),w=(n(2),n(1)),T=n.n(w),P=n(259),U=n(460),N=n(461),j=n(60),R=n(476),_=n(305);function C(e){var t=e.children,n=e.className,r=e.content,o=v()("content",n),s=Object(U.a)(C,e),i=Object(N.a)(C,e);return T.a.createElement(i,a()({},s,{className:o}),j.a.isNil(t)?r:t)}C.handledProps=["as","children","className","content"],C.propTypes={};var I=C;function F(e){var t=e.children,n=e.className,r=e.content,o=v()("header",n),s=Object(U.a)(F,e),i=Object(N.a)(F,e);return T.a.createElement(i,a()({},s,{className:o}),j.a.isNil(t)?r:t)}F.handledProps=["as","children","className","content"],F.propTypes={},F.create=Object(R.f)(F,function(e){return{content:e}});var k=F,L=n(83),D=n.n(L);function G(e){var t=e.children,n=e.className,r=e.content,o=v()("content",n),s=Object(U.a)(G,e),i=Object(N.a)(G,e);return T.a.createElement(i,a()({},s,{className:o}),j.a.isNil(t)?r:t)}G.handledProps=["as","children","className","content"],G.propTypes={},G.defaultProps={as:"li"},G.create=Object(R.f)(G,function(e){return{content:e}});var A=G;function J(e){var t=e.children,n=e.className,r=e.items,o=v()("list",n),s=Object(U.a)(J,e),i=Object(N.a)(J,e);return T.a.createElement(i,a()({},s,{className:o}),j.a.isNil(t)?D()(r,A.create):t)}J.handledProps=["as","children","className","items"],J.propTypes={},J.defaultProps={as:"ul"},J.create=Object(R.f)(J,function(e){return{items:e}});var z=J;n.d(t,"a",function(){return x});var x=function(e){function t(){var e,n;s()(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=l()(this,(e=p()(t)).call.apply(e,[this].concat(a))),y()(g()(g()(n)),"handleDismiss",function(e){var t=n.props.onDismiss;t&&t(e,n.props)}),n}return d()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,n=e.attached,r=e.children,o=e.className,s=e.color,i=e.compact,c=e.content,u=e.error,l=e.floating,f=e.header,p=e.hidden,h=e.icon,d=e.info,m=e.list,g=e.negative,E=e.onDismiss,y=e.positive,S=e.size,b=e.success,w=e.visible,C=e.warning,F=v()("ui",s,S,Object(P.a)(i,"compact"),Object(P.a)(u,"error"),Object(P.a)(l,"floating"),Object(P.a)(p,"hidden"),Object(P.a)(h,"icon"),Object(P.a)(d,"info"),Object(P.a)(g,"negative"),Object(P.a)(y,"positive"),Object(P.a)(b,"success"),Object(P.a)(w,"visible"),Object(P.a)(C,"warning"),Object(P.b)(n,"attached"),"message",o),L=E&&T.a.createElement(_.a,{name:"close",onClick:this.handleDismiss}),D=Object(U.a)(t,this.props),G=Object(N.a)(t,this.props);return j.a.isNil(r)?T.a.createElement(G,a()({},D,{className:F}),L,_.a.create(h,{autoGenerateKey:!1}),(!O()(f)||!O()(c)||!O()(m))&&T.a.createElement(I,null,k.create(f,{autoGenerateKey:!1}),z.create(m,{autoGenerateKey:!1}),Object(R.d)(c,{autoGenerateKey:!1}))):T.a.createElement(G,a()({},D,{className:F}),L,r)}}]),t}(w.Component);y()(x,"Content",I),y()(x,"Header",k),y()(x,"List",z),y()(x,"Item",A),y()(x,"handledProps",["as","attached","children","className","color","compact","content","error","floating","header","hidden","icon","info","list","negative","onDismiss","positive","size","success","visible","warning"]),x.propTypes={}},292:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(2),s=n.n(o),i=n(11),c=n.n(i),u=n(13),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),s=0;s<a;s++)o[s]=arguments[s];return n=r=f(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!p(e)){e.preventDefault();var t=r.context.router.history,n=r.props,a=n.replace,o=n.to;a?t.replace(o):t.push(o)}},f(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);c()(this.context.router,"You should not use <Link> outside a <Router>"),c()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,s="string"===typeof t?Object(u.b)(t,null,null,o.location):t,i=o.createHref(s);return a.a.createElement("a",l({},r,{onClick:this.handleClick,href:i,ref:n}))},t}(a.a.Component);h.propTypes={onClick:s.a.func,target:s.a.string,replace:s.a.bool,to:s.a.oneOfType([s.a.string,s.a.object]).isRequired,innerRef:s.a.oneOfType([s.a.string,s.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:s.a.shape({history:s.a.shape({push:s.a.func.isRequired,replace:s.a.func.isRequired,createHref:s.a.func.isRequired}).isRequired}).isRequired},t.a=h},807:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var r=n(6),a=n(24),o=n(25),s=n(27),i=n(26),c=n(28),u=n(34),l=n(1),f=n.n(l),p=n(292),h=n(18),d=n(271),m=n(817),g=n(821),E=n(305),y=n(121),S=n(126),O=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).componentDidMount=function(){document.title="Login | Homemade Arcade"},n.resendEmailVerification=function(){n.props.dispatch(y.a.sendVerificationEmail(n.state.emailToVerify))},n.forgotPasswordEmail=function(){n.props.dispatch(y.a.sendforgotPasswordEmail(n.state.forgotPasswordEmail))},n.toggleEmailVerification=function(){n.setState({showForm:!n.state.showForm})},n.toggleForgotPasswordForm=function(){n.setState({forgotPasswordForm:!n.state.forgotPasswordForm})},n.props.dispatch(y.a.logout()),n.state={email:"",password:"",emailToVerify:"",forgotPasswordEmail:"",submitted:!1,showForm:!1,forgotPasswordForm:!1},n.handleChange=n.handleChange.bind(Object(u.a)(Object(u.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(Object(u.a)(n))),n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(r.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state,n=t.email,r=t.password,a=this.props.dispatch;n&&r&&a(y.a.login(n,r))}},{key:"render",value:function(){var e=this.props,t=e.loggingIn,n=e.alert,r=this.state,a=r.email,o=r.password,s=r.submitted,i=r.showForm,c=r.forgotPasswordForm;return f.a.createElement("div",{className:"form-centered"},f.a.createElement(d.a,{size:"large",attached:!0,header:"Homemade Arcade",content:"Fill out the form below to log-in"}),f.a.createElement(m.a,{className:"attached fluid segment",size:"large",name:"form",success:"success"===n.type,error:"error"===n.type,onSubmit:this.handleSubmit},f.a.createElement(m.a.Group,{widths:"equal"},f.a.createElement(m.a.Input,{autoCapitalize:"none",label:"Email",placeholder:"Email or username",type:"text",name:"email",value:a,error:!(!s||a),onChange:this.handleChange}),f.a.createElement(m.a.Input,{label:"Password",placeholder:"Password",type:"password",name:"password",value:o,error:!(!s||o),onChange:this.handleChange})),f.a.createElement(g.a,{size:"large",fluid:!0,content:"Login",primary:!0,disabled:""===a||""===o,loading:!!t}),n.type?f.a.createElement(S.a,{alert:n}):null),f.a.createElement(d.a,{size:"large",attached:"bottom",warning:!0},f.a.createElement(E.a,{name:"help"}),"Don't have an account?\xa0",f.a.createElement(p.a,{to:"/register"},"Create one now"),f.a.createElement("br",null),f.a.createElement(E.a,{name:"help"}),"Forgot password?\xa0",f.a.createElement("span",{onClick:this.toggleForgotPasswordForm,style:{textDecoration:"underline",fontWeight:"900",cursor:"pointer"}},"reset password"),f.a.createElement("br",null),f.a.createElement(E.a,{name:"envelope"}),"Resend verification email.\xa0",f.a.createElement("span",{onClick:this.toggleEmailVerification,style:{textDecoration:"underline",fontWeight:"900",cursor:"pointer"}},"resend")),i?f.a.createElement(m.a,{className:"segment",size:"large",name:"form"},f.a.createElement(m.a.Field,null,f.a.createElement("label",null,"Email"),f.a.createElement("input",{name:"emailToVerify",placeholder:"Email",type:"email",onChange:this.handleChange})),f.a.createElement(g.a,{fluid:!0,type:"submit",onClick:this.resendEmailVerification},"Resend")):null,c?f.a.createElement(m.a,{className:"segment",size:"large",name:"form"},f.a.createElement(m.a.Field,null,f.a.createElement("label",null,"Email"),f.a.createElement("input",{name:"forgotPasswordEmail",placeholder:"Email",type:"email",onChange:this.handleChange})),f.a.createElement(g.a,{fluid:!0,type:"submit",onClick:this.forgotPasswordEmail},"Send")):null,f.a.createElement(d.a,null,f.a.createElement(d.a.Header,null,f.a.createElement("a",{href:"https://github.com/misa-j/Homemade Arcade",target:"_blank",rel:"noopener noreferrer"},"Link to a github repo"))))}}]),t}(f.a.Component),b=Object(h.b)(function(e){return{loggingIn:e.authentication.loggingIn,alert:e.alert}})(O)}}]);