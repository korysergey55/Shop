(this.webpackJsonplesson1=this.webpackJsonplesson1||[]).push([[9],{122:function(n,e,t){"use strict";t.d(e,"b",(function(){return l})),t.d(e,"a",(function(){return u})),t.d(e,"c",(function(){return d}));var a=t(10),r=t.n(a),i=t(21),c=t(29),o=t.n(c),s="https://criptoshop-62529-default-rtdb.firebaseio.com/",l=function(){var n=Object(i.a)(r.a.mark((function n(e){var t;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.a.get(s+"advertisements/".concat(e,".json"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=Object(i.a)(r.a.mark((function n(e,t){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.a.post(s+"advertisements/".concat(e,".json"),t);case 3:return a=n.sent,n.abrupt("return",a);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=Object(i.a)(r.a.mark((function n(e,t){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.a.get(s+"advertisements/".concat(e,"/").concat(t,".json"));case 3:return a=n.sent,n.abrupt("return",a.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()},137:function(n,e,t){"use strict";t(0);var a,r=t(22),i=t(23).a.div(a||(a=Object(r.a)(["\n padding: 10px 0 20px 0;\n &:not(:last-child) {\n  border-bottom: 2px solid #819ff5;\n }\n\n .sectionTitle {\n  color: #819ff5;\n  font-size: 20px;\n  text-align: center;\n  margin-bottom: 10px;\n }\n\n @media (min-width: 768px) {\n  .sectionTitle {\n   padding-left: 10px;\n   text-align: start;\n  }\n }\n"]))),c=t(1),o=function(n){var e=n.children,t=n.title;n.isMobiles;return Object(c.jsxs)(i,{children:[Object(c.jsx)("h2",{className:"sectionTitle",children:t.toUpperCase()}),e]})};e.a=o;o.defaultProps={isMobiles:!1}},199:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t(137),i=t(3),c=t(9);var o=t(55);function s(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],a=!0,r=!1,i=void 0;try{for(var c,o=n[Symbol.iterator]();!(a=(c=o.next()).done)&&(t.push(c.value),!e||t.length!==e);a=!0);}catch(s){r=!0,i=s}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}return t}}(n,e)||Object(o.a)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l,u=t(22),d=t(23).a.div(l||(l=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 20px 10px 0 10px;\n\n  .advFormLabel {\n    display: flex;\n    flex-direction: column;\n    font-size: 16px;\n  }\n  .advFormInput {\n    border: 1px solid #819ff5;\n    height: 30px;\n    border-radius: 14px;\n    padding-left: 10px;\n    margin: 5px 0;\n    font-size: 14px;\n    outline: none;\n    &:hover {\n      border: 2px solid #5f73a1;\n      cursor: pointer;\n    }\n  }\n  .advFormLabelCheckBox {\n    display: flex;\n    align-items: center;\n    margin-top: 10px;\n    font-size: 16px;\n  }\n  .advFormCheckBox {\n    margin-left: 10px;\n  }\n  .submitButton {\n    display: block;\n    margin: 0 auto;\n    margin-top: 20px;\n  }\n\n  @media (min-width: 768px) {\n    .advFormContent {\n      display: flex;\n      flex-direction: row;\n    }\n    .leftColumn,\n    .rightColumn {\n      width: 50%;\n      padding: 0 5px;\n    }\n    .advFormLabelCheckBox {\n      margin-top: 30px;\n    }\n    .submitButton {\n      margin-top: 20px;\n    }\n  }\n\n  @media (min-width: 1024px) {\n    .advFormContent {\n      justify-content: center;\n    }\n    .leftColumn,\n    .rightColumn {\n      width: 30%;\n      padding: 0 10px;\n    }\n  }\n"]))),p=t(122),m=t(25),b=t(1),x=["phones","laptops","ipad","appleWatch","airPods"],f=function(){var n={category:x[0],name:"",price:"",description:"",isSale:!1,image:""},e=s(Object(a.useState)(n),2),t=e[0],r=e[1],o=function(n){var e=n.target,t=e.name,a=e.value,o=e.type,s=e.checked;r("checkbox"!==o?function(n){return Object(c.a)(Object(c.a)({},n),{},Object(i.a)({},t,a))}:function(n){return Object(c.a)(Object(c.a)({},n),{},Object(i.a)({},t,s))})};return Object(b.jsx)(d,{children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Object(p.a)(t.category,Object(c.a)({},t)),m.store.addNotification({title:"Wonderful!",message:"\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443",type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3,onScreen:!1}}),r(Object(c.a)({},n))},className:"advForm",children:[Object(b.jsxs)("div",{className:"advFormContent",children:[Object(b.jsxs)("div",{className:"leftColumn",children:[Object(b.jsxs)("label",{className:"advFormLabel",children:["Category",Object(b.jsx)("select",{value:t.category,name:"category",className:"advFormInput",onChange:o,children:x.map((function(n){return Object(b.jsx)("option",{value:n,children:n},n)}))})]}),Object(b.jsxs)("label",{className:"advFormLabel",children:["Name",Object(b.jsx)("input",{type:"text",name:"name",value:t.name,className:"advFormInput",onChange:o})]}),Object(b.jsxs)("label",{className:"advFormLabel",children:["Picture",Object(b.jsx)("input",{type:"text",name:"image",value:t.image,className:"advFormInput",onChange:o})]})]}),Object(b.jsxs)("div",{className:"rightColumn",children:[Object(b.jsxs)("label",{className:"advFormLabel",children:["Description",Object(b.jsx)("input",{type:"text",name:"description",value:t.description,className:"advFormInput",onChange:o})]}),Object(b.jsxs)("label",{className:"advFormLabel",children:["Price",Object(b.jsx)("input",{type:"text",name:"price",value:t.price,className:"advFormInput",onChange:o})]}),Object(b.jsxs)("label",{className:"advFormLabelCheckBox",children:["In sale",Object(b.jsx)("input",{type:"checkbox",name:"isSale",checked:t.isSale,className:"advFormCheckBox",onChange:o})]})]})]}),Object(b.jsx)("button",{type:"submit",className:"submitButton",children:"Add product"})]})})};e.default=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(r.a,{title:"Administration",children:Object(b.jsx)(f,{})})})}}}]);
//# sourceMappingURL=9.95c5d53d.chunk.js.map