(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{55:function(e,n,t){"use strict";t.r(n);var r,o=t(1),i=t(34),a=t.n(i),c=t(35),d=t(6),s=Object(d.a)(r||(r=Object(c.a)(["\n    *, *:before, *:after {\n        box-sizing: border-box;\n    }\n    html, body {\n        height: 100%;\n        font-family: 'Roboto', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    #root {\n        height: 100%;\n        font-size: 1rem;\n\n        --main-dark: #1E212B;\n        --main-light: #FFFFFF;\n        --darken-dark: #07080A;\n        --accent: #43AA8B;\n        --darken-accent: #2e7560;\n        --additional: #FFC800;\n        \n        --error: #D63230;\n        --disabled: #E8E9EB;\n\n        --radius: 5px;\n\n        --transition: 0.2s ease-in-out;\n    }\n"]))),l=(t(47),t(16)),u=t(7),b="/",m="/signin",h="/dashboard",O=t(11),f=t(17),j=t(40),p=d.b.form.withConfig({displayName:"form__Base",componentId:"sc-1grfi8t-0"})(["display:flex;flex-direction:column;text-align:center;height:25em;width:25em;font-size:1rem;padding:0.625em 4em;border-radius:var(--radius);box-sizing:border-box;color:var(--main-light);background:var(--additional);background:linear-gradient(45deg,var(--additional) 0%,var(--accent) 88%);"]),g=d.b.h2.withConfig({displayName:"form__Title",componentId:"sc-1grfi8t-1"})(["text-transform:uppercase;font-size:1.8rem;margin:1em 0;white-space:nowrap;"]),_=d.b.input.withConfig({displayName:"form__Input",componentId:"sc-1grfi8t-2"})(["padding:0.625em;margin:0 0 0.625em 0;border:none;border-radius:var(--radius);font-size:1rem;"]),x=d.b.p.withConfig({displayName:"form__ErrorText",componentId:"sc-1grfi8t-3"})(["color:var(--error);word-wrap:break-word;margin:0 0 0.625em 0;"]),S=d.b.p.withConfig({displayName:"form__LoadingText",componentId:"sc-1grfi8t-4"})(["font-size:1.2rem;"]),v=d.b.button.withConfig({displayName:"button__Base",componentId:"sc-1caough-0"})(["cursor:pointer;padding:0.625em;border-radius:var(--radius);border:none;background-color:var(--main-dark);color:var(--main-light);font-weight:bold;font-size:1.1rem;box-sizing:border-box;transition:background-color var(--transition);&:hover{background-color:var(--darken-dark);}&:disabled{background-color:var(--disabled);cursor:default;}"]),E=t(2),C=function(e){var n=e.children,t=e.handleOnClick;return Object(E.jsx)(v,{onClick:t,children:n})},T=function(e){var n=e.formTitle,t=e.buttonTitle,r=e.onSubmit,o=e.errorText,i=Object(j.a)(),a=i.register,c=i.handleSubmit,d=i.formState,s=d.errors,l=d.isSubmitting;return Object(E.jsxs)(p,{onSubmit:c(r),children:[Object(E.jsx)(g,{children:n}),Object(E.jsx)(_,Object(f.a)(Object(f.a)({},a("email",{required:!0})),{},{placeholder:"Email"})),s.email&&Object(E.jsx)(x,{role:"alert",children:"Email is required"}),Object(E.jsx)(_,Object(f.a)(Object(f.a)({},a("password",{required:!0})),{},{placeholder:"Password",type:"password"})),s.password&&Object(E.jsx)(x,{role:"alert",children:"Password is required"}),Object(E.jsx)(C,{children:t}),o&&Object(E.jsx)(x,{role:"alert",children:o}),l&&Object(E.jsx)(S,{children:"Loading..."})]})},P=d.b.div.withConfig({displayName:"sigup__Container",componentId:"sc-1yxuy2q-0"})(["height:100%;display:flex;align-items:center;justify-content:center;"]),w=t(39),I=(t(56),t(50),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/trello-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/trello-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH_DOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/trello-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/trello-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/trello-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/trello-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APP_ID}),y=w.a.initializeApp(I),A=function(){var e=Object(u.g)(),n=Object(o.useState)(""),t=Object(O.a)(n,2),r=t[0],i=t[1],a=function(n){(function(e){var n=e.email,t=e.password;return new Promise((function(e,r){y.auth().createUserWithEmailAndPassword(n,t).then((function(t){var o=t.user.uid,i={email:n,uid:o};y.firestore().collection("users").doc(o).set(i).then((function(){e()})).catch((function(e){return r(e.message)}))})).catch((function(e){r(e.message)}))}))})(n).then((function(){return e.push(m)})).catch((function(e){return i(e)}))};return Object(E.jsx)(P,{children:Object(E.jsx)(T,{onSubmit:function(e,n){n.preventDefault(),a(e)},buttonTitle:"Sign Up",formTitle:"Create account",errorText:r.message})})},R=d.b.div.withConfig({displayName:"signin__Container",componentId:"sc-1tsapn2-0"})(["height:100%;display:flex;align-items:center;justify-content:center;"]),D=function(){var e=Object(u.g)(),n=Object(o.useState)(""),t=Object(O.a)(n,2),r=t[0],i=t[1],a=function(n){(function(e){var n=e.email,t=e.password;return new Promise((function(e,r){y.auth().signInWithEmailAndPassword(n,t).then((function(){e()})).catch((function(e){r(e.message)}))}))})(n).then((function(){return e.push(h)})).catch((function(e){return i(e)}))};return Object(E.jsx)(R,{children:Object(E.jsx)(T,{onSubmit:function(e,n){n.preventDefault(),a(e)},buttonTitle:"Sign In",formTitle:"Sign In",errorText:r})})},k=d.b.div.withConfig({displayName:"dashboard__Base",componentId:"sc-mp2rob-0"})(["margin:50px;"]),N=d.b.div.withConfig({displayName:"dashboard__Container",componentId:"sc-mp2rob-1"})(["display:flex;flex-direction:column;justify-content:space-between;min-height:100px;"]),K=d.b.div.withConfig({displayName:"card__Container",componentId:"sc-skby4-0"})(["display:flex;flex-direction:column;width:250px;padding:1.5em;border:0.065em solid var(--main-dark);border-radius:var(--radius);background-color:var(--main-light);font-size:1rem;"]),F=function(e){var n=e.children;return Object(E.jsx)(K,{children:n})},W=d.b.input.withConfig({displayName:"input__Base",componentId:"sc-1x97q6x-0"})(["font-size:0.9rem;padding:0.5em;border-radius:var(--radius);border:1px solid var(--main-dark);"]),H=function(e){var n=e.placeholder,t=e.type,r=void 0===t?"text":t,o=e.handleOnChange;return Object(E.jsx)(W,{onChange:function(e){return o(e.target.value)},type:r,placeholder:n})},U=function(){var e=Object(o.useState)(""),n=Object(O.a)(e,2),t=(n[0],n[1]);return Object(E.jsx)(k,{children:Object(E.jsx)(F,{children:Object(E.jsxs)(N,{children:[Object(E.jsx)(H,{placeholder:"Create dashboard",handleOnChange:t}),Object(E.jsx)(C,{handleOnClick:function(){},children:"Create dashboard"})]})})})},B=d.b.header.withConfig({displayName:"header__Base",componentId:"sc-tq4xmx-0"})(["display:flex;justify-content:space-between;align-items:center;padding:20px 50px;border-bottom:1px solid var(--main-dark);"]),L=Object(d.b)(l.b).withConfig({displayName:"header__Logo",componentId:"sc-tq4xmx-1"})(["color:var(--main-dark);font-size:2rem;text-decoration:none;"]),z=d.b.button.withConfig({displayName:"header__LogoutButton",componentId:"sc-tq4xmx-2"})(["background-color:var(--accent);color:var(--main-light);border:0;font-size:0.9rem;border-radius:3px;padding:0.5em 1.2em;text-decoration:none;transition:background-color var(--transition);cursor:pointer;&:hover{background:var(--darken-accent);}"]),q=function(){var e=Object(u.g)();return Object(E.jsxs)(B,{children:[Object(E.jsx)(L,{to:"/",children:"Trello clone"}),Object(E.jsx)(z,{onClick:function(){new Promise((function(e,n){y.auth().signOut().then((function(){return e()})).catch((function(e){return n(e.message)}))})).then((function(){return e.push(m)}))},children:"Logout"})]})},V=t(41),J=["user","children"],G=function(e){var n=e.user,t=e.children,r=Object(V.a)(e,J);return Object(E.jsx)(u.b,Object(f.a)(Object(f.a)({},r),{},{render:function(e){var r=e.location;return n?t:n?null:Object(E.jsx)(u.a,{to:{pathname:m,state:{from:r}}})}}))},M=Object(o.createContext)(null),Y=function(){var e=Object(o.useState)(JSON.parse(localStorage.getItem("authUser"))),n=Object(O.a)(e,2),t=n[0],r=n[1],i=Object(o.useContext)(M).firebase;return Object(o.useEffect)((function(){var e=i.auth().onAuthStateChanged((function(e){e?(localStorage.setItem("authUser",JSON.stringify(e)),r(e)):(localStorage.removeItem("authUser"),r(null))}));return function(){return e()}}),[]),{user:t}},Q=function(){var e=Y().user;return Object(E.jsxs)(l.a,{children:[Object(E.jsx)(q,{}),Object(E.jsxs)(u.d,{children:[Object(E.jsx)(u.b,{exact:!0,path:b,children:Object(E.jsx)(A,{})}),Object(E.jsx)(u.b,{exact:!0,path:m,children:Object(E.jsx)(D,{})}),Object(E.jsx)(G,{user:e,exact:!0,path:h,children:Object(E.jsx)(U,{})})]})]})};a.a.render(Object(E.jsxs)(M.Provider,{value:{firebase:y},children:[Object(E.jsx)(s,{}),Object(E.jsx)(Q,{})]}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.14c387ab.chunk.js.map