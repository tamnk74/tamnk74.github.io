(this["webpackJsonpeng-app"]=this["webpackJsonpeng-app"]||[]).push([[1],{125:function(e,t,r){},126:function(e,t,r){},135:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(14),i=r.n(c),o=r(37),u=(r(125),r(126),r(186)),s=r(28),l=r(75),d=r(11),p=r(175),b=r(16),j=r(183),h=r(184),f=r(181),g=r(185),O=r(188),m=r(182),v=r(180),x=r(154),I=r(109),y=r.n(I),w=r(110),q=r.n(w),R=r(108),k=r.n(R),C=r(86),S=r.n(C),N=r(111),z=r.n(N),W=r(85),A=r.n(W),B=r(80),L=r.n(B),P=r(25),V=r(36),F=r(38),D=r(190),E=r(189),M=r(4),U=Object(p.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(d.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(b.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(b.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(d.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(d.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(d.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),menuItem:{display:"flex","text-decoration":"none"}}}));function T(e){var t=e.user,r=U(),c=Object(o.b)(),i=a.a.useState(null),u=Object(l.a)(i,2),d=u[0],p=u[1],b=a.a.useState(null),I=Object(l.a)(b,2),w=I[0],R=I[1],C=Boolean(d),N=Boolean(w),W=function(e){p(e.currentTarget)},B=function(){R(null)},T=function(){p(null),B()};Object(n.useEffect)((function(){P.a.onAuthStateChanged((function(e){e&&c(Object(F.c)({uid:e.uid,email:e.email,displayName:e.displayName,photoURL:e.photoURL}))}))}),[]);var J="primary-search-account-menu",G=Object(M.jsxs)(x.a,{anchorEl:d,anchorOrigin:{vertical:"top",horizontal:"right"},id:J,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:C,onClose:T,children:[Object(M.jsx)(v.a,{onClick:T,children:"Profile"}),Object(M.jsx)(v.a,{onClick:function(){return c(Object(V.b)())},children:"Sign Out"})]}),H="primary-search-account-menu-mobile",K=Object(M.jsxs)(x.a,{anchorEl:w,anchorOrigin:{vertical:"top",horizontal:"right"},id:H,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:N,onClose:B,children:[t&&Object(M.jsx)(v.a,{children:Object(M.jsxs)(s.b,{to:"/phrases/new",color:"inherit",className:r.menuItem,children:[Object(M.jsx)(f.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(M.jsx)(L.a,{})}),Object(M.jsx)("p",{children:"New Phrase"})]})}),Object(M.jsx)(v.a,{children:Object(M.jsxs)(s.b,{to:"/categories",color:"inherit",className:r.menuItem,children:[Object(M.jsx)(f.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(M.jsx)(m.a,{badgeContent:4,color:"secondary",children:Object(M.jsx)(A.a,{})})}),Object(M.jsx)("p",{children:"Categories"})]})}),t?Object(M.jsxs)(v.a,{onClick:W,children:[Object(M.jsx)(f.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(M.jsx)(k.a,{})}),Object(M.jsx)("p",{children:t.email})]}):Object(M.jsx)(v.a,{children:Object(M.jsxs)(s.b,{to:"/sign-in",className:r.menuItem,children:[Object(M.jsx)(f.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(M.jsx)(S.a,{})}),Object(M.jsx)("p",{children:"Sign In"})]})})]});return Object(M.jsxs)("div",{className:r.grow,children:[Object(M.jsx)(j.a,{position:"static",children:Object(M.jsxs)(h.a,{children:[Object(M.jsx)(f.a,{edge:"start",className:r.menuButton,color:"inherit","aria-label":"open drawer",children:Object(M.jsx)(s.b,{to:"/",color:"inherit",children:Object(M.jsx)(y.a,{})})}),Object(M.jsx)(g.a,{className:r.title,variant:"h6",noWrap:!0,children:"Memos"}),Object(M.jsxs)("div",{className:r.search,children:[Object(M.jsx)("div",{className:r.searchIcon,children:Object(M.jsx)(q.a,{})}),Object(M.jsx)(O.a,{placeholder:"Search\u2026",classes:{root:r.inputRoot,input:r.inputInput},inputProps:{"aria-label":"search"}})]}),Object(M.jsx)("div",{className:r.grow}),Object(M.jsxs)("div",{className:r.sectionDesktop,children:[t&&Object(M.jsx)(f.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(M.jsx)(s.b,{to:"/phrases/new",color:"inherit",children:Object(M.jsx)(L.a,{style:{color:"white"}})})}),Object(M.jsx)(f.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(M.jsx)(s.b,{to:"/categories",color:"inherit",children:Object(M.jsx)(m.a,{badgeContent:4,color:"secondary",children:Object(M.jsx)(A.a,{})})})}),!1,t?Object(M.jsx)(f.a,{edge:"end","aria-label":"account of current user","aria-controls":J,"aria-haspopup":"true",onClick:W,color:"inherit",children:Object(M.jsx)(E.a,{avatar:Object(M.jsx)(D.a,{children:t.email[0].toUpperCase()}),label:t.displayName||t.email})}):Object(M.jsx)(f.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(M.jsx)(s.b,{to:"/sign-in",children:Object(M.jsx)(S.a,{style:{color:"white"}})})})]}),Object(M.jsx)("div",{className:r.sectionMobile,children:Object(M.jsx)(f.a,{"aria-label":"show more","aria-controls":H,"aria-haspopup":"true",onClick:function(e){R(e.currentTarget)},color:"inherit",children:Object(M.jsx)(z.a,{})})})]})}),K,G]})}var J=r(20),G=r(22),H=r(89);function K(e){var t=e.component,r=Object(H.a)(e,["component"]),n=Object(o.c)(F.b);return Object(M.jsx)(J.b,Object(G.a)(Object(G.a)({},r),{},{render:function(e){return n?Object(M.jsx)(J.a,{to:{pathname:"/",state:{from:e.location}}}):Object(M.jsx)(t,Object(G.a)({},e))}}))}var X=a.a.lazy((function(){return Promise.all([r.e(4),r.e(13)]).then(r.bind(null,280))})),Y=a.a.lazy((function(){return Promise.all([r.e(0),r.e(5),r.e(9)]).then(r.bind(null,279))})),Q=a.a.lazy((function(){return Promise.all([r.e(7),r.e(8)]).then(r.bind(null,282))})),Z=a.a.lazy((function(){return Promise.all([r.e(0),r.e(6),r.e(11)]).then(r.bind(null,272))})),$=a.a.lazy((function(){return r.e(10).then(r.bind(null,196))})),_=function(){return Object(M.jsxs)(J.d,{children:[Object(M.jsx)(J.a,{exact:!0,from:"/",to:"/phrases"}),Object(M.jsx)(K,{path:"/sign-in",component:Z}),Object(M.jsx)(J.b,{exact:!0,path:"/cv",component:X}),Object(M.jsx)(J.b,{path:"/phrases",component:Y}),Object(M.jsx)(J.b,{path:"/categories",component:Q}),Object(M.jsx)(J.b,{component:$})]})};var ee=function(){var e=Object(o.c)(F.b);return Object(M.jsx)(n.Suspense,{fallback:Object(M.jsx)(u.a,{}),children:Object(M.jsxs)(s.a,{children:[Object(M.jsx)(T,{user:e}),Object(M.jsx)(_,{})]})})},te=function(e){e&&e instanceof Function&&r.e(14).then(r.bind(null,276)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),c(e),i(e)}))},re=r(21),ne=r(95),ae=r(92),ce=Object(re.a)({reducer:{phrase:ne.a,category:ae.a,auth:F.a}});i.a.render(Object(M.jsx)(o.a,{store:ce,children:Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(ee,{})})}),document.getElementById("root")),te()},25:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(74);r(129);n.a.initializeApp({apiKey:"AIzaSyAqaF-6pe6wxykLHyB7CkG4TxYXsu3a6zg",authDomain:"my-spa-1ae0e.firebaseapp.com",databaseURL:"https://my-spa-1ae0e.firebaseio.com",projectId:"my-spa-1ae0e",storageBucket:"my-spa-1ae0e.appspot.com",messagingSenderId:"535290719088",appId:"1:535290719088:web:1cf171d8d605a11cadfdb5"});var a=n.a.auth();t.b=n.a.firestore()},34:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return l})),r.d(t,"d",(function(){return d})),r.d(t,"c",(function(){return p}));var n=r(17),a=r.n(n),c=r(22),i=r(27),o=r(21),u=r(25),s=Object(o.b)("category/list",function(){var e=Object(i.a)(a.a.mark((function e(t,r){var n,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,u.b.collection("categories").orderBy("createdAt","desc").get().then((function(e){return e.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{id:e.id})}))}));case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}()),l=Object(o.b)("category/create",function(){var e=Object(i.a)(a.a.mark((function e(t,r){var n,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,u.b.collection("categories").add(Object(c.a)(Object(c.a)({},t),{},{createdAt:(new Date).toISOString()}));case 4:return i=e.sent,e.next=7,i.get();case 7:return o=e.sent,e.abrupt("return",Object(c.a)({id:i.id},o.data()));case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",n(e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,r){return e.apply(this,arguments)}}()),d=Object(o.b)("category/update",function(){var e=Object(i.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,u.b.collection("categories").doc(t.id).set(t,{merge:!0});case 4:return e.abrupt("return",t.id);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",n(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}()),p=Object(o.b)("category/remove",function(){var e=Object(i.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,u.b.collection("categories").doc(t).delete();case 4:return e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",n(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}())},35:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return l})),r.d(t,"d",(function(){return d})),r.d(t,"c",(function(){return p}));var n=r(17),a=r.n(n),c=r(22),i=r(27),o=r(21),u=r(25),s=Object(o.b)("phrase/getList",Object(i.a)(a.a.mark((function e(){var t,r,n,i,o=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:{},r=o.length>1?o[1]:void 0,n=r.rejectWithValue,e.prev=2,e.next=5,u.b.collection("phrases");case 5:return i=e.sent,t.isFilter&&Array.isArray(t.filteredCategories)&&t.filteredCategories.length&&(i=i.where("categories","array-contains-any",t.filteredCategories)),i=i.orderBy("createdAt","desc"),-1!==+t.limit&&(i=i.limit(t.limit||100)),e.abrupt("return",i.get().then((function(e){return e.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{id:e.id})}))})));case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",n(e.t0));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))),l=Object(o.b)("phrase/create",function(){var e=Object(i.a)(a.a.mark((function e(t,r){var n,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,u.b.collection("phrases").add(Object(c.a)(Object(c.a)({},t),{},{createdAt:(new Date).toISOString()}));case 4:return i=e.sent,e.next=7,i.get();case 7:return o=e.sent,e.abrupt("return",Object(c.a)({id:i.id},o.data()));case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",n(e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,r){return e.apply(this,arguments)}}()),d=Object(o.b)("phrase/update",function(){var e=Object(i.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,u.b.collection("phrases").doc(t.id).set(t,{merge:!0});case 4:return e.abrupt("return",t.id);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",n(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}()),p=Object(o.b)("phrase/remove",function(){var e=Object(i.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,u.b.collection("phrases").doc(t).delete();case 4:return e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",n(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}())},36:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=r(17),a=r.n(n),c=r(27),i=r(21),o=r(25),u=Object(i.b)("auth/signin",function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n,c,i,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,c=t.password,i=r.rejectWithValue,e.prev=2,e.next=5,o.a.signInWithEmailAndPassword(n,c);case 5:return u=e.sent,e.abrupt("return",u);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",i(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,r){return e.apply(this,arguments)}}()),s=Object(i.b)("auth/signout",function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.abrupt("return",o.a.signOut());case 5:return e.prev=5,e.t0=e.catch(1),e.abrupt("return",n(e.t0));case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t,r){return e.apply(this,arguments)}}())},38:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return s}));var n,a=r(11),c=r(21),i=r(36),o=Object(c.c)({name:"auth",initialState:{loading:"idle",user:null,currentRequestId:void 0,error:null},reducers:{setUser:function(e,t){e.user=t.payload}},extraReducers:(n={},Object(a.a)(n,i.a.pending,(function(e,t){"idle"===e.loading&&(e.loading="pending",e.currentRequestId=t.meta.requestId)})),Object(a.a)(n,i.a.fulfilled,(function(e,t){var r=t.meta.requestId;"pending"===e.loading&&e.currentRequestId===r&&(e.loading="idle",e.currentRequestId=void 0)})),Object(a.a)(n,i.a.rejected,(function(e,t){var r=t.meta.requestId;"pending"===e.loading&&e.currentRequestId===r&&(e.loading="idle",e.error=t.error,e.currentRequestId=void 0)})),Object(a.a)(n,i.b.pending,(function(e,t){"idle"===e.loading&&(e.loading="pending",e.currentRequestId=t.meta.requestId)})),Object(a.a)(n,i.b.fulfilled,(function(e,t){var r=t.meta.requestId;"pending"===e.loading&&e.currentRequestId===r&&(e.loading="idle",e.user=null,e.currentRequestId=void 0)})),Object(a.a)(n,i.b.rejected,(function(e,t){var r=t.meta.requestId;"pending"===e.loading&&e.currentRequestId===r&&(e.loading="idle",e.error=t.error,e.currentRequestId=void 0)})),n)}),u=function(e){return e.auth.user},s=o.actions.setUser;t.a=o.reducer},92:function(e,t,r){"use strict";r.d(t,"b",(function(){return s}));var n,a=r(11),c=r(62),i=r(21),o=r(34),u=Object(i.c)({name:"category",initialState:{loading:"idle",items:[],currentRequestId:void 0,error:null},reducers:{},extraReducers:(n={},Object(a.a)(n,o.a.pending,(function(e,t){"idle"===e.loading&&(e.loading="pending",e.currentRequestId=t.meta.requestId)})),Object(a.a)(n,o.a.fulfilled,(function(e,t){var r=t.meta.requestId;"pending"===e.loading&&e.currentRequestId===r&&(e.loading="idle",e.items.push(t.payload),e.currentRequestId=void 0)})),Object(a.a)(n,o.a.rejected,(function(e,t){var r=t.meta.requestId;"pending"===e.loading&&e.currentRequestId===r&&(e.loading="idle",e.error=t.error,e.currentRequestId=void 0)})),Object(a.a)(n,o.b.pending,(function(e,t){"idle"===e.loading&&(e.loading="pending",e.currentRequestId=t.meta.requestId)})),Object(a.a)(n,o.b.fulfilled,(function(e,t){var r,n=t.meta.requestId;"pending"===e.loading&&e.currentRequestId===n&&(e.loading="idle",e.items.splice(0),(r=e.items).push.apply(r,Object(c.a)(t.payload)),e.currentRequestId=void 0)})),Object(a.a)(n,o.b.rejected,(function(e,t){var r=t.meta.requestId;"pending"===e.loading&&e.currentRequestId===r&&(e.loading="idle",e.error=t.error,e.currentRequestId=void 0)})),Object(a.a)(n,o.d.fulfilled,(function(e,t){e.items=e.items.filter((function(e){return e.id!==t.payload.categoryId}))})),Object(a.a)(n,o.c.fulfilled,(function(e,t){e.items=e.items.filter((function(e){return e.id!==t.payload.categoryId}))})),n)}),s=function(e){return e.category.items};t.a=u.reducer},95:function(e,t,r){"use strict";r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return d}));var n,a=r(11),c=r(62),i=r(21),o=r(35),u=Object(i.c)({name:"phrase",initialState:{loading:"idle",items:[],filteredCategories:JSON.parse(localStorage.getItem("filter-categories"))||[],currentRequestId:void 0,error:null},reducers:{setFilteredCategories:function(e,t){localStorage.setItem("filter-categories",JSON.stringify(t.payload)),e.filteredCategories=t.payload}},extraReducers:(n={},Object(a.a)(n,o.a.pending,(function(e,t){"idle"===e.loading&&(e.loading="pending",e.currentRequestId=t.meta.requestId)})),Object(a.a)(n,o.a.fulfilled,(function(e,t){var r=t.meta.requestId;"pending"===e.loading&&e.currentRequestId===r&&(e.loading="idle",e.items.unshift(t.payload),e.currentRequestId=void 0)})),Object(a.a)(n,o.a.rejected,(function(e,t){var r=t.meta.requestId;"pending"===e.loading&&e.currentRequestId===r&&(e.loading="idle",e.error=t.error,e.currentRequestId=void 0)})),Object(a.a)(n,o.b.pending,(function(e,t){"idle"===e.loading&&(e.loading="pending",e.currentRequestId=t.meta.requestId)})),Object(a.a)(n,o.b.fulfilled,(function(e,t){var r,n=t.meta.requestId;"pending"===e.loading&&e.currentRequestId===n&&(e.loading="idle",e.items.splice(0),(r=e.items).push.apply(r,Object(c.a)(t.payload)),e.currentRequestId=void 0)})),Object(a.a)(n,o.b.rejected,(function(e,t){var r=t.meta.requestId;"pending"===e.loading&&e.currentRequestId===r&&(e.loading="idle",e.error=t.error,e.currentRequestId=void 0)})),Object(a.a)(n,o.d.fulfilled,(function(e,t){e.items=e.items.filter((function(e){return e.id!==t.payload.phraseId}))})),Object(a.a)(n,o.c.fulfilled,(function(e,t){e.items=e.items.filter((function(e){return e.id!==t.payload.phraseId}))})),n)}),s=u.actions.setFilteredCategories,l=function(e){return e.phrase.items},d=function(e){return e.phrase.filteredCategories};t.a=u.reducer}},[[135,2,3]]]);
//# sourceMappingURL=main.2f6c12e7.chunk.js.map