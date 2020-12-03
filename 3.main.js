(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{770:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(52),a=function(e){return{type:r.b,options:e}}},821:function(e,t,n){var r=n(822);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(122)(r,a);r.locals&&(e.exports=r.locals)},822:function(e,t,n){(e.exports=n(121)(!1)).push([e.i,".list-inline li{display:inline}",""])},829:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(15),c=n(165),i=n(17),u=n(2),s=n.n(u),l=function(e){return{type:"FETCH_POST",post:e}},f=n(770),p=n(804),m=n(824),b=n(826),y=n(827),d=n(828);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e){var t=e.field,n=e.form,r=e.options,o=e.label,c=e.placeholder,i=e.disabled,u=t.name,s=t.value,l=n.errors,f=n.touched,v=l[u]&&f[u],g=r.find((function(e){return e.value===s}));return a.a.createElement(b.a,null,o&&a.a.createElement(y.a,{for:u},o),a.a.createElement(m.a,h({id:u},t,{value:g,onChange:function(e){var n=e?e.value:e,r={target:{name:u,value:n}};t.onChange(r)},placeholder:c,isDisabled:i,options:r,className:v?"is-invalid":""})),a.a.createElement(p.a,{name:u,component:d.a}))}v.propTypes={field:s.a.object.isRequired,form:s.a.object.isRequired,label:s.a.string,placeholder:s.a.string,disabled:s.a.bool,options:s.a.array},v.defaultProps={label:"",placeholder:"",disabled:!1,options:[]};var g=v,E=n(823),O=n(65),P=n.n(O),j=E.a().shape({title:E.b().min(10,"Your title is too short!").max(127,"Your title is too long!").required("Please enter your title"),content:E.b().min(300,"Your content is too short!").max(1e6,"Your title is too long!").required("Please enter your content"),category_id:E.b().required("Please select your category")});function w(e){var t=e.onSubmit,n=e.post,r=e.categories,o={title:n?n.title:"",content:n?n.content:"",category_id:n?n.category_id:null};return a.a.createElement(p.e,{enableReinitialize:!0,initialValues:o,validationSchema:j,onSubmit:t},(function(e){var t=e.errors;return a.a.createElement(p.d,null,a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"title"},"Title"),a.a.createElement(p.c,{name:"title",className:P()({"form-control":!0,"is-invalid":t.title})}),a.a.createElement("div",{className:"invalid-feedback"},a.a.createElement(p.a,{name:"title"}))),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"content"},"Content"),a.a.createElement(p.c,{name:"content",as:"textarea",rows:"16",cols:"80",className:P()({"form-control":!0,"is-invalid":t.content})}),a.a.createElement("div",{className:"invalid-feedback"},a.a.createElement(p.a,{name:"content"}))),a.a.createElement(p.b,{name:"category_id",component:g,label:"Category",placeholder:"What's your post category?",options:r}),a.a.createElement("button",{type:"submit",className:"btn btn-info"},"Submit"))}))}w.propTypes={onSubmit:s.a.func,post:s.a.object,categories:s.a.array};var _=w;function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=T(e);if(t){var a=T(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return k(this,n)}}function k(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(c,e);var t,n,r,o=R(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).handleSubmit=t.handleSubmit.bind(N(t)),t}return t=c,(n=[{key:"UNSAFE_componentWillMount",value:function(){this.props.fetchCategories()}},{key:"handleSubmit",value:function(e){this.props.createPost(e)}},{key:"render",value:function(){var e=this,t=this.props.categories;return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-12"},a.a.createElement(_,{onSubmit:function(t){return e.handleSubmit(t)},categories:t})))}}])&&S(t.prototype,n),r&&S(t,r),c}(r.Component);D.propTypes={createPost:s.a.func,fetchCategories:s.a.func,categories:s.a.array};var x=Object(i.b)((function(e){return{categories:e.categories.items.map((function(e){return{value:e.id,label:e.title}}))}}),(function(e){return{createPost:function(t){return e(function(e){return{type:"CREATE_POST",post:e}}(t))},fetchCategories:function(){return e(Object(f.a)())}}}))(D);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){Y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=W(e);if(t){var a=W(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return H(this,n)}}function H(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?U(e):t}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(c,e);var t,n,r,o=I(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).handleSubmit=t.handleSubmit.bind(U(t)),t}return t=c,(n=[{key:"handleSubmit",value:function(e){this.props.updatePost(F(F({},e),{},{id:this.props.post.id}))}},{key:"UNSAFE_componentWillMount",value:function(){this.props.fetchCategories(),this.props.getPost(this.props.match.params.id)}},{key:"render",value:function(){var e=this,t=this.props,n=t.post,r=t.categories;return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-12"},a.a.createElement(_,{post:n,onSubmit:function(t){return e.handleSubmit(t)},categories:r})))}}])&&q(t.prototype,n),r&&q(t,r),c}(r.Component);L.propTypes={post:s.a.object,updatePost:s.a.func,getPost:s.a.func,fetchCategories:s.a.func,categories:s.a.array,match:s.a.shape({params:s.a.shape({id:s.a.string.isRequired})})};var J=Object(i.b)((function(e){return{post:e.posts.post,categories:e.categories.items.map((function(e){return{value:e.id,label:e.title}}))}}),(function(e){return{updatePost:function(t){return e(function(e){return{type:"UPDATE_POST",post:e}}(t))},getPost:function(t){return e(l(t))},fetchCategories:function(){return e(Object(f.a)())}}}))(L),V=n(9),z=function(e){var t=e.posts,n=e.removePost,r=["no","title","content","view","action"],o=t.map((function(e,t){return a.a.createElement("tr",{key:e.id},r.map((function(r,o){return"no"===r?a.a.createElement("td",{key:o},t+1):"action"===r?a.a.createElement("td",{key:o},a.a.createElement("div",{className:"btn-group"},a.a.createElement(V.a,{to:"/me/posts/"+e.id+"/edit",className:"btn btn-default btn-xs"},a.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})),a.a.createElement("button",{className:"btn btn-danger btn-xs",onClick:function(){return function(e){window.confirm("Are you sure to remove this post?")&&n(e)}(e)}},a.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"})))):"title"===r?a.a.createElement("td",{key:o},a.a.createElement(V.a,{to:"/me/posts/"+e.id},e.title)):"content"===r?a.a.createElement("td",{key:o},e.content.slice(0,200)):a.a.createElement("td",{key:o},e[r])})))})),c=r.map((function(e,t){return a.a.createElement("td",{key:t},e)}));return a.a.createElement("table",{className:"table table-hover"},a.a.createElement("thead",null,a.a.createElement("tr",null,c)),a.a.createElement("tbody",null,o))};z.propTypes={posts:s.a.array,removePost:s.a.func};var B=z,G=n(169),K=n.n(G);function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=te(e);if(t){var a=te(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return $(this,n)}}function $(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?ee(e):t}function ee(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ne=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(c,e);var t,n,r,o=Z(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).state={page:1,limit:10},t.handlePageChange=t.handlePageChange.bind(ee(t)),t}return t=c,(n=[{key:"UNSAFE_componentWillMount",value:function(){this.props.getMyPosts(this.state)}},{key:"handlePageChange",value:function(e){this.setState({page:e}),this.props.getMyPosts(this.state)}},{key:"render",value:function(){var e=this.props,t=e.posts,n=e.pageInfo,r=e.removePost,o=this.state.limit;return a.a.createElement(a.a.Fragment,null,t&&a.a.createElement(B,{posts:t,removePost:r}),n&&a.a.createElement(K.a,{itemClass:"page-item",linkClass:"page-link",activePage:n.page,itemsCountPerPage:o,totalItemsCount:n.count,pageRangeDisplayed:5,onChange:this.handlePageChange}))}}])&&Q(t.prototype,n),r&&Q(t,r),c}(a.a.Component);ne.propTypes={posts:s.a.array,pageInfo:s.a.object,removePost:s.a.func,getMyPosts:s.a.func};var re=Object(i.b)((function(e){return{posts:e.posts.items,pageInfo:e.posts.pageInfo}}),(function(e){return{removePost:function(t){return e(function(e){return{type:"FETCH_REMOVE_POST",post:e}}(t))},getMyPosts:function(t,n,r){return e({type:"FETCH_MY_POSTS",options:t})}}}))(ne),ae=n(1),oe=n.n(ae),ce=n(792);n(821);function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ue(e,t){return(ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function se(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=fe(e);if(t){var a=fe(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return le(this,n)}}function le(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function fe(e){return(fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var pe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t)}(c,e);var t,n,r,o=se(c);function c(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),o.call(this,e)}return t=c,(n=[{key:"componentDidMount",value:function(){this.props.getPost(this.props.match.params.id)}},{key:"render",value:function(){var e=this.props.post;return e?a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card-header"},a.a.createElement("h2",null,a.a.createElement(V.a,{to:"/posts/".concat(e.slug)},e.title))),a.a.createElement("div",{className:"card-body",dangerouslySetInnerHTML:{__html:ce.markdown.toHTML(e.content)}}),a.a.createElement("div",{className:"card-footer"},a.a.createElement("ul",{className:"list-inline"},a.a.createElement("li",null,a.a.createElement("i",{className:"fa fa-user"})," By:"," ",e.user&&a.a.createElement(V.a,{to:"/users/".concat(e.user.id,"/posts")},e.user.fullName)),a.a.createElement("li",null,"| ",a.a.createElement("i",{className:"fa fa-calendar"})," ",oe()(e.createdAt).format("DD-MMM-YYYY")),a.a.createElement("li",null,"| ",a.a.createElement("i",{className:"fa fa-comments"})," ",a.a.createElement("a",{href:"#"}," ",e.view," viewer")),e.category&&a.a.createElement("li",null,"| Categories:"," ",a.a.createElement(V.a,{to:"/categories/".concat(e.category.id,"/posts")},e.category.title)))))):a.a.createElement("div",null,"Loading")}}])&&ie(t.prototype,n),r&&ie(t,r),c}(a.a.Component);pe.propTypes={getPost:s.a.func,post:s.a.object,match:s.a.shape({params:s.a.shape({id:s.a.string.isRequired})})};var me=Object(i.b)((function(e){return{post:e.posts.post}}),(function(e){return{getPost:function(t){return e(l(t))}}}))(pe),be=n(75);function ye(){var e=Object(o.g)();return a.a.createElement(o.d,null,a.a.createElement(o.b,{exact:!0,path:e.url,component:Object(be.a)(re)}),a.a.createElement(o.b,{exact:!0,path:"".concat(e.url,"/create"),component:Object(be.a)(x)}),a.a.createElement(o.b,{path:"".concat(e.url,"/:id/edit"),component:Object(be.a)(J)}),a.a.createElement(o.b,{path:"".concat(e.url,"/:id"),component:Object(be.a)(me)}),a.a.createElement(o.b,{component:Object(be.a)(c.a)}))}ye.propTypes={};t.default=ye}}]);