(this["webpackJsonpcontact-form"]=this["webpackJsonpcontact-form"]||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(7),r=a.n(s),o=(a(13),a(4)),l=a.n(o),m=a(8),i=a(2),j=a(5),d=a(6),u=a(0);var b=function(e){return Object(u.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(u.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(u.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})},f=(a(16),function(e){var t,a,n=Object(c.useState)(null),s=Object(d.a)(n,2),r=s[0],o=s[1],f=function(e,t){o({msg:e,type:t}),setTimeout((function(){o(null)}),1500)},h=Object(c.useState)({Fname:"",Lname:"",email:"",message:""}),p=Object(d.a)(h,2),O=p[0],x=p[1],v=function(e){t=e.target.name,a=e.target.value,x(Object(j.a)(Object(j.a)({},O),{},Object(i.a)({},t,a)))},g=function(){var t=Object(m.a)(l.a.mark((function t(a){var c,n,s,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),c=O.Fname,n=O.Lname,s=O.email,r=O.message,!(c&&n&&s&&r)){t.next=9;break}return t.next=5,fetch("".concat(e.url),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Fname:c,Lname:n,email:s,message:r})});case 5:t.sent&&(x({Fname:"",Lname:"",email:"",message:""}),f("Thanks","success")),t.next=10;break;case 9:f("Please Fill the form","danger");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{alert:r}),Object(u.jsxs)("form",{className:"f",method:"POST",children:[Object(u.jsx)("div",{className:"form-row m-4",children:Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("h1",{className:"text-center",children:"React Contact Form"})})}),Object(u.jsxs)("div",{className:"form-row m-4",children:[Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("input",{type:"text",className:"form-control py-3",name:"Fname",placeholder:"First name",value:O.Fname,onChange:v,autoComplete:"off",required:!0})}),Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("input",{type:"text",className:"form-control py-3",name:"Lname",placeholder:"Last name",value:O.Lname,onChange:v,autoComplete:"off",required:!0})})]}),Object(u.jsx)("div",{className:"form-row m-4",children:Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("input",{type:"email",className:"form-control py-3",name:"email",placeholder:"Enter your email",value:O.email,onChange:v,autoComplete:"off",required:!0})})}),Object(u.jsx)("div",{className:"form-row m-4",children:Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("textarea",{className:"form-control py-3",rows:"5",id:"comment",name:"message",placeholder:"Enter your message",value:O.message,onChange:v,autoComplete:"off",required:!0})})}),Object(u.jsx)("div",{className:"form-row m-4",children:Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("button",{type:"submit",className:"btn btn-dark py-2  px-5",onClick:g,children:"Submit"})})})]})]})});var h=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(f,{url:"https://practice-9d614-default-rtdb.firebaseio.com/contactform.json"})})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ef7aa0f9.chunk.js.map