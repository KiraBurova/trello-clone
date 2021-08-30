(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{57:function(e,t,n){"use strict";n.r(t);var r,i=n(1),o=n(37),a=n.n(o),c=n(38),s=n(5),d=Object(s.a)(r||(r=Object(c.a)(["\n    *, *:before, *:after {\n        box-sizing: border-box;\n    }\n    html, body {\n        height: 100%;\n        font-family: 'Roboto', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    #root {\n        height: 100%;\n        font-size: 1rem;\n        display: flex;\n        flex-direction: column;\n\n        --main-dark: #1E212B;\n        --main-light: #FFFFFF;\n        --darken-dark: #07080A;\n        --accent: #43AA8B;\n        --darken-accent: #2e7560;\n        --additional: #FFC800;\n        \n        --error: #D63230;\n        --disabled: #E8E9EB;\n\n        --radius: 5px;\n\n        --transition: 0.2s ease-in-out;\n    }\n"]))),l=(n(49),n(17)),u=n(8),b=s.b.footer.withConfig({displayName:"Appstyles__Container",componentId:"sc-9arsbd-0"})(["flex:1;"]),h="/",f="/signin",m="/boards",j="/boards",p=n(7),O=n(18),g=n(42),x=s.b.form.withConfig({displayName:"form__Base",componentId:"sc-1grfi8t-0"})(["display:flex;flex-direction:column;text-align:center;height:25em;width:25em;font-size:1rem;padding:0.625em 4em;border-radius:var(--radius);box-sizing:border-box;color:var(--main-light);background:var(--additional);background:linear-gradient(45deg,var(--additional) 0%,var(--accent) 88%);"]),_=s.b.h2.withConfig({displayName:"form__Title",componentId:"sc-1grfi8t-1"})(["text-transform:uppercase;font-size:1.8rem;margin:1em 0;white-space:nowrap;"]),v=s.b.input.withConfig({displayName:"form__Input",componentId:"sc-1grfi8t-2"})(["padding:0.625em;margin:0 0 0.625em 0;border:none;border-radius:var(--radius);font-size:1rem;"]),S=s.b.p.withConfig({displayName:"form__ErrorText",componentId:"sc-1grfi8t-3"})(["color:var(--error);word-wrap:break-word;margin:0 0 0.625em 0;"]),C=s.b.p.withConfig({displayName:"form__LoadingText",componentId:"sc-1grfi8t-4"})(["font-size:1.2rem;"]),E=n(29),w=s.b.button.withConfig({displayName:"button__Base",componentId:"sc-1caough-0"})(["cursor:pointer;padding:0.625em;border-radius:var(--radius);border:none;background-color:var(--main-dark);color:var(--main-light);font-weight:bold;font-size:1.1rem;box-sizing:border-box;transition:background-color var(--transition);&:hover{background-color:var(--darken-dark);}&:disabled{background-color:var(--disabled);cursor:default;}"]),T=n(2),y=["children","handleOnClick"],I=function(e){var t=e.children,n=e.handleOnClick,r=Object(E.a)(e,y);return Object(T.jsx)(w,Object(O.a)(Object(O.a)({onClick:n},r),{},{children:t}))},P=function(e){var t=e.formTitle,n=e.buttonTitle,r=e.onSubmit,i=e.errorText,o=Object(g.a)(),a=o.register,c=o.handleSubmit,s=o.formState,d=s.errors,l=s.isSubmitting;return Object(T.jsxs)(x,{onSubmit:c(r),children:[Object(T.jsx)(_,{children:t}),Object(T.jsx)(v,Object(O.a)(Object(O.a)({},a("email",{required:!0})),{},{placeholder:"Email"})),d.email&&Object(T.jsx)(S,{role:"alert",children:"Email is required"}),Object(T.jsx)(v,Object(O.a)(Object(O.a)({},a("password",{required:!0})),{},{placeholder:"Password",type:"password"})),d.password&&Object(T.jsx)(S,{role:"alert",children:"Password is required"}),Object(T.jsx)(I,{children:n}),i&&Object(T.jsx)(S,{role:"alert",children:i}),l&&Object(T.jsx)(C,{children:"Loading..."})]})},k=s.b.div.withConfig({displayName:"sigup__Container",componentId:"sc-1yxuy2q-0"})(["height:100%;display:flex;align-items:center;justify-content:center;"]),N=n(6),A=n.n(N),R=n(12),D=n(28),F=(n(58),n(52),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/trello-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/trello-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH_DOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/trello-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/trello-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/trello-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/trello-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APP_ID}),B=D.a.initializeApp(F),K=function(){var e=Object(R.a)(A.a.mark((function e(t){var n,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.name,e.abrupt("return",new Promise((function(e,i){B.firestore().collection("boards").where("name","==",r).get().then((function(r){r.docs.length?i("Board with this name already exists"):B.firestore().collection("boards").doc(n).set(t).then((function(){e()})).catch((function(e){return i(e.message)}))}))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(R.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.boardId,e.abrupt("return",new Promise((function(e,r){B.firestore().collection("boards").where("id","==",n).get().then((function(i){i.docs.length&&B.firestore().collection("boards").doc(n).update({lists:D.a.firestore.FieldValue.arrayUnion(t)}).then((function(){e()})).catch((function(e){return r(e.message)}))})).catch((function(e){return r(e.message)}))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.g)(),t=Object(i.useState)(""),n=Object(p.a)(t,2),r=n[0],o=n[1],a=function(t){(function(e){var t=e.email,n=e.password;return new Promise((function(e,r){B.auth().createUserWithEmailAndPassword(t,n).then((function(n){var i=n.user.uid,o={email:t,uid:i};B.firestore().collection("users").doc(i).set(o).then((function(){e()})).catch((function(e){return r(e.message)}))})).catch((function(e){r(e.message)}))}))})(t).then((function(){return e.push(f)})).catch((function(e){return o(e)}))};return Object(T.jsx)(k,{children:Object(T.jsx)(P,{onSubmit:function(e,t){t.preventDefault(),a(e)},buttonTitle:"Sign Up",formTitle:"Create account",errorText:r.message})})},W=s.b.div.withConfig({displayName:"signin__Container",componentId:"sc-1tsapn2-0"})(["height:100%;display:flex;align-items:center;justify-content:center;"]),H=function(){var e=Object(u.g)(),t=Object(i.useState)(""),n=Object(p.a)(t,2),r=n[0],o=n[1],a=function(t){(function(e){var t=e.email,n=e.password;return new Promise((function(e,r){B.auth().signInWithEmailAndPassword(t,n).then((function(){e()})).catch((function(e){r(e.message)}))}))})(t).then((function(){return e.push(m)})).catch((function(e){return o(e)}))};return Object(T.jsx)(W,{children:Object(T.jsx)(P,{onSubmit:function(e,t){t.preventDefault(),a(e)},buttonTitle:"Sign In",formTitle:"Sign In",errorText:r})})},z=n(59),q=s.b.div.withConfig({displayName:"boards__Base",componentId:"sc-fg38gg-0"})(["margin:50px;"]),V=s.b.div.withConfig({displayName:"boards__Container",componentId:"sc-fg38gg-1"})(["display:flex;flex-direction:column;justify-content:space-between;min-height:100px;"]),J=Object(s.b)(l.b).withConfig({displayName:"boards__BoardName",componentId:"sc-fg38gg-2"})(["display:flex;font-weight:bold;font-size:1.1rem;text-decoration:none;justify-content:center;"]),G=s.b.div.withConfig({displayName:"boards__BoardsList",componentId:"sc-fg38gg-3"})(["display:flex;gap:15px;margin-bottom:15px;"]),M=s.b.div.withConfig({displayName:"boards__Error",componentId:"sc-fg38gg-4"})(["color:var(--error);text-align:center;margin-top:15px;"]),Y=s.b.div.withConfig({displayName:"card__Container",componentId:"sc-skby4-0"})(["display:flex;flex-direction:column;width:250px;padding:1.5em;border:0.065em solid var(--main-dark);border-radius:var(--radius);background-color:var(--main-light);font-size:1rem;"]),Q=function(e){var t=e.children;return Object(T.jsx)(Y,{children:t})},X=s.b.input.withConfig({displayName:"input__Base",componentId:"sc-1x97q6x-0"})(["font-size:0.9rem;padding:0.5em;border-radius:var(--radius);border:1px solid var(--main-dark);"]),Z=function(e){var t=e.placeholder,n=e.type,r=void 0===n?"text":n,i=e.handleOnChange,o=e.value;return Object(T.jsx)(X,{value:o,onChange:function(e){return i(e.target.value)},type:r,placeholder:t})},$=Object(i.createContext)(null),ee=function(){var e=Object(i.useState)(JSON.parse(localStorage.getItem("authUser"))),t=Object(p.a)(e,2),n=t[0],r=t[1],o=Object(i.useContext)($).firebase;return Object(i.useEffect)((function(){var e=o.auth().onAuthStateChanged((function(e){e?(localStorage.setItem("authUser",JSON.stringify(e)),r(e)):(localStorage.removeItem("authUser"),r(null))}));return function(){return e()}}),[]),{user:n}},te=function(){var e=ee().user,t=Object(i.useState)(""),n=Object(p.a)(t,2),r=n[0],o=n[1],a=Object(i.useState)(""),c=Object(p.a)(a,2),s=c[0],d=c[1],l=Object(i.useState)([]),u=Object(p.a)(l,2),b=u[0],h=u[1];Object(i.useEffect)((function(){f()}),[]);var f=function(){(function(e){var t=[];return new Promise((function(n,r){B.firestore().collection("boards").where("userId","==",e).get().then((function(e){e.forEach((function(e){t.push(e.data()),n(t)}))})).catch((function(e){r(e.message)}))}))})(e.uid).then((function(e){return h(e)})).catch((function(e){return d(e)}))};return Object(T.jsxs)(q,{children:[Object(T.jsx)(G,{children:!!b.length&&b.map((function(e){return Object(T.jsx)(Q,{children:Object(T.jsx)(J,{to:"".concat(j,"/").concat(e.id),children:e.name})},e.id)}))}),Object(T.jsx)(Q,{children:Object(T.jsxs)(V,{children:[Object(T.jsx)(Z,{placeholder:"Create board",handleOnChange:o,value:r}),Object(T.jsx)(I,{type:"sumbit",handleOnClick:function(){if(r){var t={userId:e.uid,name:r,id:Object(z.a)(),lists:[]};K(t).then((function(){o(""),f()})).catch((function(e){d(e)}))}},children:"Create board"}),Object(T.jsx)(M,{children:s})]})})]})},ne=s.b.div.withConfig({displayName:"board__Base",componentId:"sc-1m1wiv-0"})(["margin:50px;height:100vh;overflow-x:auto;"]),re=s.b.div.withConfig({displayName:"board__Lists",componentId:"sc-1m1wiv-1"})(["display:flex;"]),ie=s.b.div.withConfig({displayName:"board__List",componentId:"sc-1m1wiv-2"})(["background:pink;margin-right:10px;flex-basis:25%;min-width:250px;min-height:250px;"]),oe=function(){var e=Object(u.h)().id,t=Object(i.useState)(!1),n=Object(p.a)(t,2),r=n[0],o=n[1],a=Object(i.useState)(""),c=Object(p.a)(a,2),s=c[0],d=c[1],l=Object(i.useState)(""),b=Object(p.a)(l,2),h=b[0],f=b[1],m=Object(i.useState)([]),j=Object(p.a)(m,2),O=j[0],g=j[1];Object(i.useEffect)((function(){x()}),[]);var x=function(){var t;(t=e,new Promise((function(e,n){B.firestore().collection("boards").where("id","==",t).get().then((function(t){t.forEach((function(t){e(t.data().lists)}))})).catch((function(e){n(e.message)}))}))).then((function(e){return g(e)})).catch((function(e){return f(e)}))};return Object(T.jsxs)(ne,{children:[Object(T.jsx)(I,{handleOnClick:function(){o(!0)},children:"Create new list"}),Object(T.jsx)(re,{children:O.length&&O.map((function(e){return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(ie,{children:[e.name,Object(T.jsx)(Z,{placeholder:"Enter new task"})]},e.id)})}))}),r&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(Z,{placeholder:"Enter list name",value:s,handleOnChange:d}),Object(T.jsx)(I,{handleOnClick:function(){var t={name:s,id:Object(z.a)(),boardId:e,tasks:[]};L(t).then((function(e){return x()})).catch((function(e){return f(e)}))},children:"Add list"})]}),Object(T.jsx)(T.Fragment,{children:h})]})},ae=s.b.header.withConfig({displayName:"header__Base",componentId:"sc-tq4xmx-0"})(["display:flex;justify-content:space-between;align-items:center;padding:20px 50px;background-color:var(--main-dark);"]),ce=Object(s.b)(l.b).withConfig({displayName:"header__Logo",componentId:"sc-tq4xmx-1"})(["color:var(--main-light);font-size:2rem;text-decoration:none;"]),se=s.b.button.withConfig({displayName:"header__LogoutButton",componentId:"sc-tq4xmx-2"})(["background-color:var(--accent);color:var(--main-light);border:0;font-size:0.9rem;border-radius:3px;padding:0.5em 1.2em;text-decoration:none;transition:background-color var(--transition);cursor:pointer;&:hover{background:var(--darken-accent);}"]),de=function(){var e=Object(u.g)(),t=ee().user;return Object(T.jsxs)(ae,{children:[Object(T.jsx)(ce,{to:"/",children:"Trello clone"}),t&&Object(T.jsx)(se,{onClick:function(){new Promise((function(e,t){B.auth().signOut().then((function(){return e()})).catch((function(e){return t(e.message)}))})).then((function(){return e.push(f)}))},children:"Logout"})]})},le=s.b.footer.withConfig({displayName:"footer__Base",componentId:"sc-13hwv09-0"})(["font-size:1.1rem;padding:1.5em;text-align:center;background-color:var(--main-dark);color:var(--main-light);"]),ue=function(){return Object(T.jsx)(le,{children:"2021"})},be=["user","children"],he=function(e){var t=e.user,n=e.children,r=Object(E.a)(e,be);return Object(T.jsx)(u.b,Object(O.a)(Object(O.a)({},r),{},{render:function(e){var r=e.location;return t?n:t?null:Object(T.jsx)(u.a,{to:{pathname:f,state:{from:r}}})}}))},fe=function(){var e=ee().user;return Object(T.jsxs)(l.a,{children:[Object(T.jsx)(de,{}),Object(T.jsx)(b,{children:Object(T.jsxs)(u.d,{children:[Object(T.jsx)(u.b,{exact:!0,path:h,children:Object(T.jsx)(U,{})}),Object(T.jsx)(u.b,{exact:!0,path:f,children:Object(T.jsx)(H,{})}),Object(T.jsx)(he,{user:e,exact:!0,path:m,children:Object(T.jsx)(te,{})}),Object(T.jsx)(he,{user:e,exact:!0,path:"".concat(j,"/:id"),children:Object(T.jsx)(oe,{})})]})}),Object(T.jsx)(ue,{})]})};a.a.render(Object(T.jsxs)($.Provider,{value:{firebase:B},children:[Object(T.jsx)(d,{}),Object(T.jsx)(fe,{})]}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.4648927b.chunk.js.map