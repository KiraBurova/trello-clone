(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{54:function(e,t,n){"use strict";n.r(t);var o,r=n(1),i=n(34),a=n.n(i),c=n(35),d=n(7),s=Object(d.a)(o||(o=Object(c.a)(["\n    *, *:before, *:after {\n        box-sizing: border-box;\n    }\n    html, body {\n        height: 100%;\n        font-family: 'Roboto', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    #root {\n        height: 100%;\n        font-size: 1rem;\n\n        --main-dark: #1E212B;\n        --main-light: #FFFFFF;\n        --darken-dark: #07080A;\n        --accent: #43AA8B;\n        --darken-accent: #2e7560;\n        --additional: #FFC800;\n        \n        --error: #D63230;\n        --disabled: #E8E9EB;\n\n        --radius: 5px;\n\n        --transition: 0.2s ease-in-out;\n    }\n"]))),l=(n(46),n(16)),b=n(6),m="/",u="/signin",_="/dashboard",O=n(14),h=n(25),j=n(40),p=d.b.form.withConfig({displayName:"form__Base",componentId:"sc-1grfi8t-0"})(["display:flex;flex-direction:column;text-align:center;height:25em;width:25em;font-size:1rem;padding:0.625em 4em;border-radius:var(--radius);box-sizing:border-box;color:var(--main-light);background:var(--additional);background:linear-gradient(45deg,var(--additional) 0%,var(--accent) 88%);"]),g=d.b.h2.withConfig({displayName:"form__Title",componentId:"sc-1grfi8t-1"})(["text-transform:uppercase;font-size:1.8rem;margin:1em 0;white-space:nowrap;"]),f=d.b.input.withConfig({displayName:"form__Input",componentId:"sc-1grfi8t-2"})(["padding:0.625em;border:none;border-radius:var(--radius);font-size:1rem;"]),S=d.b.button.withConfig({displayName:"form__Button",componentId:"sc-1grfi8t-3"})(["cursor:pointer;padding:0.625em;border-radius:var(--radius);border:none;background-color:var(--main-dark);color:var(--main-light);font-weight:bold;font-size:1.1rem;box-sizing:border-box;transition:background-color var(--transition);&:hover{background-color:var(--darken-dark);}&:disabled{background-color:var(--disabled);cursor:default;}"]),x=d.b.p.withConfig({displayName:"form__ErrorText",componentId:"sc-1grfi8t-4"})(["color:var(--error);word-wrap:break-word;"]),E=d.b.p.withConfig({displayName:"form__LoadingText",componentId:"sc-1grfi8t-5"})(["font-size:1.2rem;"]),T=n(4),v=function(e){var t=e.formTitle,n=e.buttonTitle,o=e.onSubmit,r=(e.handleOnChange,e.errorText),i=Object(j.a)(),a=i.register,c=i.handleSubmit,d=i.formState,s=d.errors,l=d.isSubmitting;return Object(T.jsxs)(p,{onSubmit:c(o),children:[Object(T.jsx)(g,{children:t}),Object(T.jsx)(f,Object(h.a)(Object(h.a)({},a("email",{required:!0})),{},{placeholder:"Email"})),s.email&&Object(T.jsx)(x,{role:"alert",children:"Email is required"}),Object(T.jsx)(f,Object(h.a)(Object(h.a)({},a("password",{required:!0})),{},{placeholder:"Password",type:"password"})),s.password&&Object(T.jsx)(x,{role:"alert",children:"Password is required"}),Object(T.jsx)(S,{children:n}),r&&Object(T.jsx)(x,{role:"alert",children:r}),l&&Object(T.jsx)(E,{children:"Loading..."})]})},C=d.b.div.withConfig({displayName:"sigup__Container",componentId:"sc-1yxuy2q-0"})(["height:100%;display:flex;align-items:center;justify-content:center;"]),P=n(39),A=(n(55),n(49),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/trello-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/trello-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH_DOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/trello-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/trello-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/trello-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/trello-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APP_ID}),R=P.a.initializeApp(A),w=function(){var e=Object(b.f)(),t=Object(r.useState)(""),n=Object(O.a)(t,2),o=n[0],i=n[1];return Object(T.jsx)(C,{children:Object(T.jsx)(v,{onSubmit:function(t,n){n.preventDefault(),function(t){var n=t.email,o=t.password;R.auth().createUserWithEmailAndPassword(n,o).then((function(t){var o=t.user.uid,r={email:n,uid:o};R.firestore().collection("users").doc(o).set(r).then((function(){e.push(u)})).catch((function(e){return i(e.message)}))})).catch((function(e){i(e.message)}))}(t)},buttonTitle:"Sign Up",formTitle:"Create account",errorText:o.message})})},D=d.b.div.withConfig({displayName:"signin__Container",componentId:"sc-1tsapn2-0"})(["height:100%;display:flex;align-items:center;justify-content:center;"]),I=function(){var e=Object(b.f)(),t=Object(r.useState)(""),n=Object(O.a)(t,2),o=n[0],i=n[1];return Object(T.jsx)(D,{children:Object(T.jsx)(v,{onSubmit:function(t,n){n.preventDefault(),function(t){var n=t.email,o=t.password;R.auth().signInWithEmailAndPassword(n,o).then((function(){e.push(_)})).catch((function(e){i(e.message)}))}(t)},buttonTitle:"Sign In",formTitle:"Sign In",errorText:o})})},y=d.b.button.withConfig({displayName:"button__Base",componentId:"sc-1caough-0"})(["font-size:2rem;"]),N=function(e){var t=e.children;return Object(T.jsx)(y,{children:t})},k=d.b.div.withConfig({displayName:"dashboard__Container",componentId:"sc-mp2rob-0"})([""]),F=function(){return Object(T.jsx)(k,{children:Object(T.jsx)(N,{children:"Create dashboard"})})},K=d.b.header.withConfig({displayName:"header__Base",componentId:"sc-tq4xmx-0"})(["display:flex;justify-content:space-between;align-items:center;padding:20px 50px;border-bottom:1px solid var(--main-dark);"]),W=Object(d.b)(l.b).withConfig({displayName:"header__Logo",componentId:"sc-tq4xmx-1"})(["color:var(--main-dark);font-size:2rem;text-decoration:none;"]),H=Object(d.b)(l.b).withConfig({displayName:"header__LogoutButton",componentId:"sc-tq4xmx-2"})(["background-color:var(--accent);color:var(--main-light);border:0;font-size:0.9rem;border-radius:3px;padding:0.5em 1.2em;text-decoration:none;transition:background-color var(--transition);&:hover{background:var(--darken-accent);}"]),B=function(){return Object(T.jsxs)(K,{children:[Object(T.jsx)(W,{children:"Trello clone"}),Object(T.jsx)(H,{children:"Logout"})]})},L=function(){return Object(T.jsxs)(l.a,{children:[Object(T.jsx)(B,{}),Object(T.jsxs)(b.c,{children:[Object(T.jsx)(b.a,{exact:!0,path:m,children:Object(T.jsx)(w,{})}),Object(T.jsx)(b.a,{exact:!0,path:u,children:Object(T.jsx)(I,{})}),Object(T.jsx)(b.a,{exact:!0,path:_,children:Object(T.jsx)(F,{})})]})]})};a.a.render(Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(s,{}),Object(T.jsx)(L,{})]}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.dc3d682d.chunk.js.map