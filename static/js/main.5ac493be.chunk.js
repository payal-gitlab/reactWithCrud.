(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(t,e,r){},19:function(t,e,r){},27:function(t,e,r){"use strict";r.r(e);var n=r(0),c=r.n(n),a=r(6),o=r.n(a),s=(r(18),r.p,r(19),r(3)),i=r(4),l=r(13),d=r(2),u="LoadTableSuccess",j="LoadTableFail",b="LoadFormSuccess",p="LoadFormFail",f="LoadUpdateSuccess",O="LoadUpadteFail",h="CreateDataSucess",y="CreateDataFail",g={resultapi:null,formdata:null,error:null},m=[l.a],x=Object(i.d)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0,r=e.type;switch(console.log(e),r){case u:return Object(d.a)(Object(d.a)({},t),{},{resultapi:e.payload,error:!1});case j:return Object(d.a)(Object(d.a)({},t),{},{message:e.payload,error:!0});case b:return Object(d.a)(Object(d.a)({},t),{},{formdata:e.payload,error:!1});case p:return Object(d.a)(Object(d.a)({},t),{},{message:e.payload,error:!0});case f:return Object(d.a)(Object(d.a)({},t),{},{updatedata:e.payload,error:!1});case O:return Object(d.a)(Object(d.a)({},t),{},{message:e.payload,error:!0});case h:return console.log("vcx"),Object(d.a)(Object(d.a)({},t),{},{finaldata:e.payload,error:!1});case y:return Object(d.a)(Object(d.a)({},t),{},{message:e.payload,error:!0});default:return t}}),Object(i.c)(i.a.apply(void 0,m))),S=function(){return function(t){return console.log("fdgd"),new Promise((function(e,r){return t({type:b,payload:null}),e()}))}},I=r(7),v=r(5),L=r(1),J=Object(s.b)((function(t){return t}))((function(t){var e=Object(n.useState)({userId:"",id:"",title:"",body:""}),r=Object(v.a)(e,2),c=r[0],a=r[1],o=Object(n.useState)({}),s=Object(v.a)(o,2),i=s[0],l=s[1];Object(n.useEffect)((function(){console.log(t.formdata),t.formdata&&a({userId:t.formdata[0].userId,id:t.formdata[0].id,title:t.formdata[0].title,body:t.formdata[0].body})}),[t.formdata]);var j=function(t){var e=t.target.name;a(Object(d.a)(Object(d.a)({},c),{},Object(I.a)({},e,t.target.value)))},b=function(e){var r,n;p()?t.formdata?t.dispatch((n=c,function(t){console.log("dsfsd");var e=JSON.parse(localStorage.getItem("productsList")).filter((function(t){return n.id==t.id?(t.userId=n.userId,t.id=n.id,t.title=n.title,t.body=n.body,t):t}));return localStorage.setItem("productsList",JSON.stringify(e)),t({type:u,payload:JSON.parse(localStorage.getItem("productsList"))}),t(S()),!0})):t.dispatch((r=c,function(t){var e=JSON.parse(localStorage.getItem("productsList"));return r.id=null==e?e=[]:parseInt(e[e.length-1].id)+1,e.push(r),localStorage.setItem("productsList",JSON.stringify(e)),t({type:u,payload:JSON.parse(localStorage.getItem("productsList"))})})):alert("Form has errors."),e.preventDefault()},p=function(){var t=c,e={},r=!0;return console.log(t.userId),t.userId||(r=!1,e.userId="Cannot be empty"),t.title||(r=!1,e.title="Cannot be empty"),t.body||(r=!1,e.body="Cannot be empty"),console.log(t.title),l(e),r};return Object(L.jsxs)("form",{onSubmit:function(t){return b(t)},onReset:function(e){return function(e){t.dispatch(S()).then((function(){console.log("fgdf"),a({userId:"",id:"",title:"",body:""})})),e.preventDefault()}(e)},children:[Object(L.jsx)("label",{children:"User Id"}),Object(L.jsx)("input",{className:"form-control",type:"number",name:"userId",value:c.userId,onChange:function(t){return j(t)},onBlur:function(){return p}}),i.userId?Object(L.jsx)("span",{style:{color:"red"},children:i.userId}):"",Object(L.jsx)("br",{}),Object(L.jsx)("label",{children:"Title"}),Object(L.jsx)("input",{type:"text",name:"title",value:c.title,onChange:function(t){return j(t)},onBlur:function(){return p}}),i.title?Object(L.jsx)("span",{style:{color:"red"},children:i.title}):"",Object(L.jsx)("br",{}),Object(L.jsx)("label",{children:"Body"}),Object(L.jsx)("input",{type:"text",name:"body",value:c.body,onChange:function(t){return j(t)},onBlur:function(){return p}}),i.body?Object(L.jsx)("span",{style:{color:"red"},children:i.body}):"",Object(L.jsx)("br",{}),Object(L.jsx)("button",{type:"submit",children:t.formdata?"Update":"Submit"}),Object(L.jsx)("button",{type:"reset",children:"Reset"})]})})),C=Object(s.b)((function(t){return t}))((function(t){var e=Object(n.useState)(t.resultapi),r=Object(v.a)(e,2),c=r[0],a=r[1];Object(n.useEffect)((function(){t.resultapi&&a(t.resultapi)}),[t.resultapi]);var o=function(e){t.dispatch(function(t){return function(e){var r=JSON.parse(localStorage.getItem("productsList")).filter((function(e){return t!==e.id}));return localStorage.setItem("productsList",JSON.stringify(r)),e({type:u,payload:JSON.parse(localStorage.getItem("productsList"))})}}(e))},s=function(e){t.dispatch(function(t){return function(e){var r=JSON.parse(localStorage.getItem("productsList")).filter((function(e){return t==e.id}));return e({type:b,payload:r})}}(e))};return t?Object(L.jsxs)("table",{id:"customers",children:[Object(L.jsx)("thead",{children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{children:"id"}),Object(L.jsx)("th",{children:"userId"}),Object(L.jsx)("th",{children:"title"}),Object(L.jsx)("th",{children:"body"})]})}),Object(L.jsx)("tbody",{children:c?c.map((function(t,e){return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{children:t.id}),Object(L.jsx)("td",{children:t.userId}),Object(L.jsx)("td",{children:t.title}),Object(L.jsx)("td",{children:t.body}),Object(L.jsx)("td",{children:Object(L.jsx)("button",{onClick:function(){return s(t.id)},children:"Edit"})}),Object(L.jsx)("td",{children:Object(L.jsx)("button",{onClick:function(){return o(t.id)},children:"Delete"})})]},e)})):""})]}):Object(L.jsx)("h4",{children:"There is no data"})}));var N=function(){return x.dispatch((function(t){fetch("https://jsonplaceholder.typicode.com/posts").then((function(t){return t.json()})).then((function(e){return e=e.slice(0,5),localStorage.setItem("productsList",JSON.stringify(e)),t({type:u,payload:JSON.parse(localStorage.getItem("productsList"))}),Promise.resolve()})).catch((function(e){console.log(e);var r=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return t({type:j,payload:r}),Promise.reject()}))})),Object(L.jsxs)(s.a,{store:x,children:[Object(L.jsx)(J,{}),Object(L.jsx)(C,{})]})},F=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,28)).then((function(e){var r=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;r(t),n(t),c(t),a(t),o(t)}))};o.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(N,{})}),document.getElementById("root")),F()}},[[27,1,2]]]);
//# sourceMappingURL=main.5ac493be.chunk.js.map