(this["webpackJsonpeng-app"]=this["webpackJsonpeng-app"]||[]).push([[9,10],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));n(1);var a=n(4);function r(){return Object(a.jsx)("div",{children:"Oopss ... Not found"})}},279:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(20),i=n(196),s=n(22),o=n(89),l=n(37),u=n(38),b=n(4);function d(e){var t=e.component,n=Object(o.a)(e,["component"]),a=Object(l.c)(u.b);return Object(b.jsx)(c.b,Object(s.a)(Object(s.a)({},n),{},{render:function(e){return a?Object(b.jsx)(t,Object(s.a)({},e)):Object(b.jsx)(c.a,{to:{pathname:"/sign-in",state:{from:e.location}}})}}))}var j=n(175),p=n(208),O=n(17),f=n.n(O),m=n(27),h=n(75),g=n(34),x=n(92),v=n(217),y=n(189),w=n(265),C=n(218),S=n(266),N=n(185),k=n(221),I=n.n(k),V=n(283),W=n(268),D=n(267);function P(){return(P=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new SpeechSynthesisUtterance(t)).lang="en-US",e.abrupt("return",window.speechSynthesis.speak(n));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=Object(j.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},chip:{padding:"5px 20px 0px 20px"},title:{fontSize:14},pos:{marginBottom:12}});function F(e){var t=e.phrase,n=e.isUpdate,a=e.categories,c=e.handleOpen,i=e.handleDelete,s=T(),o=r.a.useState(!1),l=Object(h.a)(o,2),u=l[0],d=l[1],j=function(){d(!1)},O=a.filter((function(e){return t.categories&&t.categories.includes(e.id)}));return Object(b.jsxs)(p.a,{item:!0,children:[Object(b.jsxs)(v.a,{className:s.root,children:[Object(b.jsx)(C.a,{className:s.chip,children:O.length?O.map((function(e){return Object(b.jsx)(y.a,{label:e.name,color:"primary"},e.id)})):"Word of the Day"}),Object(b.jsxs)(C.a,{children:[Object(b.jsx)(N.a,{variant:"h5",component:"h2",children:t.title}),Object(b.jsx)(N.a,{className:s.pos,color:"textSecondary"}),Object(b.jsxs)(N.a,{variant:"body2",component:"p",children:[t.meaning,Object(b.jsx)("br",{})]})]}),Object(b.jsxs)(w.a,{children:[Object(b.jsx)(S.a,{size:"small",type:"button",onClick:function(){return function(e){return P.apply(this,arguments)}(t.title)},children:Object(b.jsx)(I.a,{})}),n&&Object(b.jsx)(S.a,{size:"small",type:"button",onClick:function(){return c(t)},children:"Edit"}),n&&Object(b.jsx)(S.a,{size:"small",type:"button",onClick:function(){d(!0)},children:"Delete"})]})]}),Object(b.jsxs)(V.a,{open:u,onClose:j,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(b.jsx)(D.a,{id:"alert-dialog-title",children:"Are you sure to remove this phrase?"}),Object(b.jsxs)(W.a,{children:[Object(b.jsx)(S.a,{onClick:j,children:"Cancel"}),Object(b.jsx)(S.a,{onClick:function(){return i(t)},color:"secondary",autoFocus:!0,children:"Delete"})]})]})]})}var A=n(35),q=n(95),z=n(187),E=n(201),U=n(281),B=n(278),G=n(269),J=n(80),L=n.n(J);function M(e){var t=e.onChange,n=Object(o.a)(e,["onChange"]),a=Object(l.c)(x.b),c=Object(l.b)(),i=r.a.useState([]),u=Object(h.a)(i,2),d=u[0],j=u[1];return r.a.useEffect((function(){a.length||c(Object(g.b)()),j(a.map((function(e){return"".concat(e.name)})))}),[a]),Object(b.jsx)(U.a,Object(s.a)(Object(s.a)({},n),{},{fullWidth:!0,freeSolo:!0,onClose:function(e){return t(e)},disableClearable:!0,id:"category-input",options:d,renderInput:function(e){return Object(b.jsx)(B.a,Object(s.a)(Object(s.a)({},e),{},{label:"Name"}))}}))}var H=Object(j.a)((function(e){return{form:{width:"100%",margin:e.spacing(0,0,2)},input:{padding:e.spacing(1,0),margin:e.spacing(.2,0,0,0)}}}));function K(e){var t=e.onSubmit,n=e.category,a=H(),r=Object(E.b)(),c=r.handleSubmit,i=r.formState.errors,l=r.control,u=r.setValue,d=r.reset,j=function(){var e=Object(m.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(a,n),d({name:"",description:""});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("form",{onSubmit:function(e){e.stopPropagation(),c(j)(e)},className:a.form,children:Object(b.jsxs)(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:1,children:[Object(b.jsxs)(p.a,{container:!0,item:!0,xs:12,spacing:1,className:a.input,children:[Object(b.jsx)(E.a,{name:"name",fullWidth:!0,control:l,rules:{required:!0},defaultValue:n.name||"",placeholder:"Name",render:function(e){var t=e.field,n=(t.ref,Object(o.a)(t,["ref"])),a=e.fieldState;return Object(b.jsx)(M,Object(s.a)(Object(s.a)(Object(s.a)({},n),a),{},{error:i.name,onChange:function(e){u("name",e.currentTarget.value,{shouldValidate:!0})}}))}}),i.title&&Object(b.jsx)("span",{children:"Title is required"})]}),Object(b.jsx)(p.a,{container:!0,item:!0,xs:12,spacing:1,className:a.input,children:Object(b.jsx)(E.a,{name:"description",control:l,defaultValue:n.description||"",render:function(e){var t=e.field;return Object(b.jsx)(B.a,Object(s.a)(Object(s.a)({},t),{},{fullWidth:!0,label:"Description"}))}})}),Object(b.jsx)(p.a,{container:!0,item:!0,xs:12,spacing:1,className:a.input,children:Object(b.jsx)(S.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"})})]})})}var Q=Object(j.a)((function(e){return{form:{width:"100%",margin:e.spacing(0,0,2)},input:{padding:e.spacing(1,0),margin:e.spacing(.2,0,0,0)},paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function R(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(".concat(-50,"%, ").concat(-50,"%)")}}function X(e){var t=e.category,n=void 0===t?{}:t,r=e.open,c=void 0!==r&&r,i=e.handleClose,s=e.title,o=void 0===s?"Add new category":s,u=Q(),d=Object(l.b)(),j=Object(a.useState)(R),p=Object(h.a)(j,1)[0];return Object(b.jsx)(z.a,{open:c,onClose:i,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(b.jsxs)("div",{style:p,className:u.paper,children:[Object(b.jsx)("h2",{children:o}),Object(b.jsx)(K,{category:n,onSubmit:function(e){return d(Object(g.a)(e)),i(),d(Object(g.b)({limit:1e3}))}})]})})}function Y(e){var t=e.onChange,n=Object(o.a)(e,["onChange"]),a=Object(l.c)(q.c),c=Object(l.b)(),i=r.a.useState([]),u=Object(h.a)(i,2),d=u[0],j=u[1];return r.a.useEffect((function(){a.length||c(Object(A.b)()),j(a.map((function(e){return"".concat(e.title)})))}),[a]),Object(b.jsx)(U.a,Object(s.a)(Object(s.a)({},n),{},{fullWidth:!0,freeSolo:!0,onClose:function(e){return t(e)},disableClearable:!0,id:"phrase-input",options:d,renderInput:function(e){return Object(b.jsx)(B.a,Object(s.a)(Object(s.a)({},e),{},{label:"Title"}))}}))}var Z=Object(j.a)((function(e){return{form:{width:"100%",margin:e.spacing(0,0,2)},input:{padding:e.spacing(1,0),margin:e.spacing(.2,0,0,0)},inputGroup:{width:"100%","& > * + *":{marginTop:e.spacing(3)},display:"flex",flexDirection:"row"},dropdown:{width:"calc(100% - 56px)"},addBtn:{width:"56px",marginTop:0}}}));function $(e){var t=e.addPhrase,n=e.phrase,r=void 0===n?{}:n,c=Z(),i=Object(l.c)(x.b),d=Object(l.c)(u.b),j=Object(a.useState)(!1),O=Object(h.a)(j,2),g=O[0],v=O[1],y=Object(E.b)(),w=y.handleSubmit,C=y.setValue,N=y.formState.errors,k=y.control,I=y.reset,V=function(){var e=Object(m.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(Object(s.a)(Object(s.a)({},n),{},{userId:d.uid}),r),I({title:"",meaning:r.meaning||"",categories:r&&r.meaning||[]});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("form",{onSubmit:w(V),className:c.form,children:[Object(b.jsxs)(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:1,children:[Object(b.jsxs)(p.a,{container:!0,item:!0,xs:12,spacing:1,className:c.input,children:[Object(b.jsx)(E.a,{name:"title",fullWidth:!0,control:k,rules:{required:!0},defaultValue:r.title||"",placeholder:"Phrase",render:function(e){var t=e.field,n=(t.ref,Object(o.a)(t,["ref"])),a=e.fieldState;return Object(b.jsx)(Y,Object(s.a)(Object(s.a)(Object(s.a)({},n),a),{},{error:N.title,onChange:function(e){C("title",e.currentTarget.value,{shouldValidate:!0})}}))}}),N.title&&Object(b.jsx)("span",{children:"Title is required"})]}),Object(b.jsx)(p.a,{container:!0,item:!0,xs:12,spacing:1,className:c.input,children:Object(b.jsx)(E.a,{name:"meaning",control:k,defaultValue:r.meaning||"",render:function(e){var t=e.field;return Object(b.jsx)(B.a,Object(s.a)(Object(s.a)({},t),{},{fullWidth:!0,label:"Meaning"}))}})}),Object(b.jsxs)(p.a,{container:!0,item:!0,xs:12,spacing:1,className:c.inputGroup,children:[Object(b.jsx)(E.a,{name:"categories",render:function(e){var t=e.field;return Object(b.jsx)(U.a,Object(s.a)(Object(s.a)({},t),{},{multiple:!0,id:"categories-input",options:i.map((function(e){return e.id})),getOptionLabel:function(e){var t=i.find((function(t){return t.id===e}));return t&&t.name},className:c.dropdown,renderInput:function(e){return Object(b.jsx)(B.a,Object(s.a)(Object(s.a)({},e),{},{label:"Categories",placeholder:"Categories"}))},onChange:function(e,n){return t.onChange(n)}}))},control:k,defaultValue:r.categories||[]}),Object(b.jsx)(G.a,{color:"primary","aria-label":"add",className:c.addBtn,onClick:function(){v(!0)},children:Object(b.jsx)(L.a,{})})]}),Object(b.jsx)(p.a,{container:!0,item:!0,xs:12,spacing:1,className:c.input,children:Object(b.jsxs)(S.a,{type:"submit",variant:"contained",color:"primary",children:[" ","Submit"," "]})})]}),Object(b.jsx)(X,{open:g,handleClose:function(){v(!1)}})]})}var _=Object(j.a)((function(e){return{form:{width:"100%",margin:e.spacing(0,0,2)},input:{padding:e.spacing(1,0),margin:e.spacing(.2,0,0,0)},paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function ee(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(".concat(-50,"%, ").concat(-50,"%)")}}function te(e){var t=e.updatePhrase,n=e.phrase,r=void 0===n?{}:n,c=e.open,i=void 0!==c&&c,s=e.handleClose,o=_(),l=Object(a.useState)(ee),u=Object(h.a)(l,1)[0];return Object(b.jsx)(z.a,{open:i,onClose:s,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(b.jsx)("div",{style:u,className:o.paper,children:Object(b.jsx)($,{addPhrase:t,phrase:r})})})}var ne=Object(j.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},list:{flexGrow:1},gridList:{},icon:{color:"rgba(255, 255, 255, 0.54)"}}}));function ae(e){var t=e.limit,n=e.isFilter,r=void 0===n||n,c=Object(l.c)(q.c),i=Object(l.c)(u.b),o=Object(l.c)(q.b),d=Object(l.c)(x.b),j=Object(a.useState)(),O=Object(h.a)(j,2),v=O[0],y=O[1],w=ne(),C=Object(l.b)(),S=Object(a.useState)(!1),N=Object(h.a)(S,2),k=N[0],I=N[1],V=function(e){y(e),I(!0)},W=function(){var e=Object(m.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(Object(A.c)(n.id));case 2:return e.abrupt("return",C(Object(A.b)({isFilter:r,filteredCategories:o,limit:t||100,startAt:0})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(m.a)(f.a.mark((function e(n,a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(Object(A.d)(Object(s.a)(Object(s.a)({},a),n)));case 2:return I(!1),e.abrupt("return",C(Object(A.b)({isFilter:r,limit:t||100,startAt:0})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){c.length||C(Object(A.b)({isFilter:r,filteredCategories:o,limit:t||100,startAt:0})),d.length||C(Object(g.b)({limit:1e3}))}),[]),Object(b.jsxs)("div",{className:w.root,children:[Object(b.jsx)(p.a,{container:!0,className:w.list,spacing:2,children:Object(b.jsx)(p.a,{item:!0,xs:12,children:Object(b.jsx)(p.a,{container:!0,justify:"center",spacing:2,children:c.map((function(e){return Object(b.jsx)(F,{phrase:e,isUpdate:i&&(i.uid===e.userId||!e.userId),categories:d,handleOpen:V,handleDelete:W},e.id)}))})})}),Object(b.jsx)(te,{open:k,handleClose:function(){I(!1)},phrase:v,updatePhrase:D})]})}var re=Object(j.a)((function(e){return{body:{padding:e.spacing(1,0,0,0)},form:{width:"100%",padding:e.spacing(0,0,0,2)},input:{padding:e.spacing(1,0),margin:e.spacing(.2,0,0,0)}}}));function ce(){var e=re();return Object(b.jsx)(p.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start",className:e.body,children:Object(b.jsx)(ae,{limit:-1})})}var ie=Object(j.a)((function(e){return{body:{padding:e.spacing(1,0,0,0)},form:{width:"100%",padding:e.spacing(0,0,0,2)},input:{padding:e.spacing(1,0),margin:e.spacing(.2,0,0,0)}}}));function se(){var e=ie(),t=Object(l.b)(),n=function(){var e=Object(m.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t(Object(A.a)(n)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(p.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start",className:e.body,children:[Object(b.jsx)(p.a,{container:!0,item:!0,xs:12,className:e.form,children:Object(b.jsx)($,{addPhrase:n})}),Object(b.jsx)(p.a,{container:!0,item:!0,xs:12,className:e.form,children:Object(b.jsx)(ae,{limit:"-1",isFilter:!1})})]})}t.default=function(){var e=Object(c.h)();return Object(b.jsxs)(c.d,{children:[Object(b.jsx)(c.b,{exact:!0,path:e.url,component:ce}),Object(b.jsx)(d,{path:"".concat(e.url,"/new"),component:se}),Object(b.jsx)(c.b,{component:i.default})]})}}}]);
//# sourceMappingURL=9.2971ea9f.chunk.js.map