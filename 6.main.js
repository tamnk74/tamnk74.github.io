(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{832:function(e){e.exports=JSON.parse('{"clientId":"995609965286-2t2v10bi557b39o7qlaeqse9b4crr1av.apps.googleusercontent.com","apiKey":"AIzaSyCU2eNVcFY5gFjj_39LECUrsUKz7MVtHnw","scope":"https://www.googleapis.com/auth/calendar","discoveryDocs":["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]}')},845:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),l=n(165),c=n(835),i=n(807),s=n(836),u=n(837),m=n(831),d=n.n(m);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var p=function(){var e=g(Object(a.useState)([]),2),t=e[0],n=e[1],o=g(Object(a.useState)({}),2),l=o[0],m=o[1],f=g(Object(a.useState)(!1),2),p=f[0],b=f[1];function y(){d.a.listUpcomingEvents(10).then((function(e){var t=e.result;console.log(t.items);var a=t.items.map((function(e){return{title:e.summary,date:e.start.dateTime,start:e.start.dateTime,end:e.end.dateTime}}));m({name:t.summary,email:t.summary}),n(a)}))}return Object(a.useEffect)((function(){d.a.onLoad((function(){console.log(d.a),d.a.sign&&(b(d.a.sign),y())}))}),[]),r.a.createElement(r.a.Fragment,null,p?r.a.createElement("div",{className:"d-flex justify-content-between mb-1"},r.a.createElement("div",{className:"p-0 alert alert-success align-items-stretch"},l.name," - ",l.email),r.a.createElement("div",{className:"p-0"},r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return b(!1),n([]),void d.a.handleSignoutClick()}},"Sign out"))):r.a.createElement("button",{className:"btn btn-success",onClick:function(){d.a.sign?(b(d.a.sign),y()):(d.a.handleAuthClick(),d.a.listenSign((function(e){console.log(d.a.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse()),y(),b(e)})))}},r.a.createElement("i",{className:"fa fa-calendar",style:{color:"white",marginRight:"10px"}}),"Sign in with google"),r.a.createElement(c.a,{plugins:[i.b,s.a,u.a],headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},initialView:"dayGridMonth",weekends:!0,events:t,editable:!0,selectable:!0,select:function(e){console.log(e);var t=prompt("Please enter a new title for your event"),n=e.view.calendar;n.unselect(),t&&n.addEvent({id:Math.random().toString(36).substring(7),title:t,start:e.startStr,end:e.endStr,allDay:e.allDay})},eventClick:function(e){console.log(e),console.log(e.event.title)},eventsSet:function(e){console.log(e)}}))},b=n(9),y=function(){return r.a.createElement(b.a,{to:"/samples/google-calendar",className:"nav-link"},r.a.createElement("i",{className:"fa fa-calendar",style:{color:"blue",marginRight:"10px"}})," ","Google Calendar")},v=n(75);function h(){var e=Object(o.g)();return console.log(e),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:e.url,component:Object(v.a)(y)}),r.a.createElement(o.b,{path:"".concat(e.url,"/google-calendar"),component:Object(v.a)(p)}),r.a.createElement(o.b,{component:Object(v.a)(l.a)}))}h.propTypes={};t.default=h}}]);