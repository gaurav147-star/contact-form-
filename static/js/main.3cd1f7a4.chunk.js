(this["webpackJsonpcontact-form"]=this["webpackJsonpcontact-form"]||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(7),r=a.n(s),o=(a(13),a(4)),l=a.n(o),m=a(8),i=a(2),j=a(5),d=a(6),u=a(0);var b=function(e){return Object(u.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(u.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(u.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})},f=(a(16),function(){var e,t,a=Object(c.useState)(null),n=Object(d.a)(a,2),s=n[0],r=n[1],o=function(e,t){r({msg:e,type:t}),setTimeout((function(){r(null)}),1500)},f=Object(c.useState)({Fname:"",Lname:"",email:"",message:""}),h=Object(d.a)(f,2),p=h[0],O=h[1],x=function(a){e=a.target.name,t=a.target.value,O(Object(j.a)(Object(j.a)({},p),{},Object(i.a)({},e,t)))},v=function(){var e=Object(m.a)(l.a.mark((function e(t){var a,c,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=p.Fname,c=p.Lname,n=p.email,s=p.message,!(a&&c&&n&&s)){e.next=9;break}return e.next=5,fetch("https://practice-9d614-default-rtdb.firebaseio.com/contactform.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Fname:a,Lname:c,email:n,message:s})});case 5:e.sent&&(O({Fname:"",Lname:"",email:"",message:""}),o("Thanks","success")),e.next=10;break;case 9:o("Please Fill the form","danger");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{alert:s}),Object(u.jsxs)("form",{className:"f",method:"POST",children:[Object(u.jsx)("div",{className:"form-row m-4",children:Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("h1",{className:"text-center",children:"React Contact Form"})})}),Object(u.jsxs)("div",{className:"form-row m-4",children:[Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("input",{type:"text",className:"form-control py-3",name:"Fname",placeholder:"First name",value:p.Fname,onChange:x,autoComplete:"off",required:!0})}),Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("input",{type:"text",className:"form-control py-3",name:"Lname",placeholder:"Last name",value:p.Lname,onChange:x,autoComplete:"off",required:!0})})]}),Object(u.jsx)("div",{className:"form-row m-4",children:Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("input",{type:"email",className:"form-control py-3",name:"email",placeholder:"Enter your email",value:p.email,onChange:x,autoComplete:"off",required:!0})})}),Object(u.jsx)("div",{className:"form-row m-4",children:Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("textarea",{className:"form-control py-3",rows:"5",id:"comment",name:"message",placeholder:"Enter your message",value:p.message,onChange:x,autoComplete:"off",required:!0})})}),Object(u.jsx)("div",{className:"form-row m-4",children:Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("button",{type:"submit",className:"btn btn-dark py-2  px-5",onClick:v,children:"Submit"})})})]})]})});var h=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(f,{})})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3cd1f7a4.chunk.js.map