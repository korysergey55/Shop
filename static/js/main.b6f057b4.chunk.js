(this.webpackJsonplesson1=this.webpackJsonplesson1||[]).push([[2],{114:function(t,e,n){"use strict";n.r(e);var a,r,c,i=n(0),o=n(31),s=n.n(o),u=(n(64),n(65),n(66),n(16)),d=n(116),l=n(26),p=n(27),b=p.a.header(a||(a=Object(l.a)(["\n display: flex;\n align-items: center;\n justify-content: center;\n height: 60px;\n padding: 0 20px;\n border-bottom: 2px solid #819ff5;\n background-color: #424242;\n\n .navigationList {\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   padding: 0 20px;\n }\n .navigationListItem {\n  margin-top: 0;\n  margin-right: 20px;\n  list-style: none;\n }\n .navigationListItemAnchor {\n   font-weight: 700;\n   text-transform: uppercase;\n   text-decoration: none;\n   color: #819ff5;\n\n  &:hover {\n   color: #5f73a1;\n  }\n }\n .headerTitle {\n  margin-right: 50px;\n  font-size: 25px;\n  color: #819ff5;\n  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,\n   #ff2d95 0px 0px 20px, #ff2d95 0px 0px 30px, #ff2d95 0px 0px 40px,\n   #ff2d95 0px 0px 50px, #ff2d95 0px 0px 75px;\n }\n\n .headerIcon {\n  width: 40px;\n  height: 40px;\n  fill: #819ff5;\n  \n  &:hover {\n   fill: #5f73a1;\n   cursor: pointer;\n  }\n }\n @media screen and (max-width: 768px) {\n  justify-content: space-between;\n }\n"]))),f=p.a.nav(r||(r=Object(l.a)(["\n .navigationList {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: calc(100vh - 60px);\n  margin-top: 0;\n  margin-right: 20px;\n  background-color: #424242;\n  align-items: center;\n  padding-top: 30px;\n }\n .navigationListItem {\n  margin-top: 10px;\n }\n .navigationListItemAnchor {\n  text-decoration: none;\n  color: #819ff5;\n  text-transform: uppercase;\n  &:hover {\n   color: #5f73a1;\n  }\n }\n\n @media (min-width: 768px) {\n  .navigationList {\n   flex-direction: row;\n   width: 100%;\n   background-color: inherit;\n   margin-top: 0;\n   padding-top: 0;\n   align-items: center;\n  }\n  .navigationListItem {\n   position: relative;\n   margin-top: 0;\n  }\n  .navigationListItemAnchor {\n   color: #819ff5;\n   font-weight: 700;\n  }\n  .navigationListItemActive {\n   color: #5f73a1;\n  }\n\n  .navigationListItem:not(:last-child) {\n   margin-right: 20px;\n  }\n }\n"]))),j=n(6),m=n(21),O=n(40),h=n(1),g=Object(j.j)((function(t){var e=t.route,n=t.token,a=t.hideModal,r=Object(m.d)(O.a);return Object(h.jsxs)(f,{children:[!e.isPrivate&&!e.isRestricted&&Object(h.jsx)("li",{className:"navigationListItem",children:Object(h.jsxs)(u.b,{to:e.path,exact:e.exact,className:"navigationListItemAnchor",activeClassName:"navigationListItemActive",onClick:a,children:[e.name,"/cart"===e.path?Object(h.jsx)("span",{className:"cartLength",children:r}):""]})},e.path),e.isPrivate&&n&&Object(h.jsx)("li",{className:"navigationListItem",children:Object(h.jsx)(u.b,{to:e.path,exact:e.exact,className:"navigationListItemAnchor",activeClassName:"navigationListItemActive",onClick:a,children:e.name})},e.path),!e.isPrivate&&e.isRestricted&&!n&&Object(h.jsx)("li",{className:"navigationListItem",children:Object(h.jsx)(u.b,{to:e.path,exact:e.exact,className:"navigationListItemAnchor",activeClassName:"navigationListItemActive",onClick:a,children:e.name})},e.path)]})})),x=n.p+"static/media/symbol-defs.ad42eec1.svg",v=n(57),y=n.n(v),_=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("svg",{className:y.a.cart,children:Object(h.jsx)("use",{href:x+"#icon-shopping-cart"})})})},C=n(58),I=n.n(C),w=["title","titleId"];function k(){return(k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function A(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function L(t,e){var n=t.title,a=t.titleId,r=A(t,w);return i.createElement("svg",k({fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16px",height:"16px",ref:e,"aria-labelledby":a},r),n?i.createElement("title",{id:a},n):null,c||(c=i.createElement("path",{d:"M 9.9960938 1 C 9.4850938 1 8.8925781 1.397375 8.5175781 1.984375 C 8.2245781 2.469375 7.9094375 3.2282813 8.0234375 3.9882812 C 8.5504375 4.0752812 9.1212656 3.6348281 9.4472656 3.0488281 C 9.8222656 2.5058281 10.029094 1.76 9.9960938 1 z M 5.8769531 4.0078125 C 3.706752 4.0078125 2 5.7651167 2 8.1386719 C 2 9.6716158 2.591368 11.100374 3.3671875 12.166016 C 4.143007 13.231657 5.0690196 14.001953 6.0625 14.001953 C 6.576439 14.001953 6.9533697 13.842333 7.2597656 13.724609 C 7.5661616 13.606886 7.8216173 13.513672 8.2910156 13.513672 C 8.7173906 13.513672 8.9543144 13.605042 9.2636719 13.724609 C 9.5730293 13.844178 9.9650432 14.001953 10.496094 14.001953 C 11.614877 14.001953 12.392508 13.086136 12.927734 12.265625 C 13.195348 11.855369 13.403856 11.446505 13.552734 11.125 C 13.627174 10.964248 13.687389 10.826432 13.730469 10.71875 C 13.773549 10.611068 13.792529 10.56928 13.818359 10.472656 A 0.50005 0.50005 0 0 0 13.519531 9.8789062 C 13.446614 9.8500661 13.105961 9.6877163 12.820312 9.3886719 C 12.534664 9.0896274 12.283203 8.6719067 12.283203 8.0039062 C 12.283203 7.3545587 12.516555 6.8982877 12.759766 6.5820312 C 12.881371 6.423903 13.006332 6.3036477 13.099609 6.2246094 C 13.192889 6.1455714 13.318385 6.0746927 13.230469 6.1230469 A 0.50005 0.50005 0 0 0 13.392578 5.3867188 C 12.494468 4.1742707 11.231633 4.0068793 10.669922 4.0078125 L 10.667969 4.0078125 C 10.040259 4.0081567 9.4770727 4.1575306 9.0195312 4.2949219 C 8.5614639 4.4324711 8.176519 4.5390625 8.0898438 4.5390625 C 7.9843498 4.5390625 7.6657259 4.4400455 7.2792969 4.3027344 C 6.8928678 4.1654232 6.4202165 4.0078125 5.8769531 4.0078125 z M 5.8769531 5.0078125 C 6.2196898 5.0078125 6.5817416 5.1149518 6.9453125 5.2441406 C 7.3088834 5.3733295 7.6553376 5.5390625 8.0898438 5.5390625 C 8.5201684 5.5390625 8.8772081 5.3809039 9.3066406 5.2519531 C 9.7360732 5.1230024 10.203548 5.0078125 10.669922 5.0078125 A 0.50005 0.50005 0 0 0 10.671875 5.0078125 C 10.987674 5.007142 11.632998 5.1731466 12.224609 5.7011719 C 12.137789 5.7894189 12.058357 5.8535971 11.966797 5.9726562 C 11.621507 6.4216498 11.283203 7.1072539 11.283203 8.0039062 C 11.283203 8.938906 11.674305 9.6368727 12.097656 10.080078 C 12.351161 10.345471 12.520463 10.396684 12.728516 10.515625 C 12.701516 10.578505 12.681704 10.629025 12.646484 10.705078 C 12.51305 10.99323 12.32198 11.362881 12.089844 11.71875 C 11.62557 12.430489 11.007311 13.001953 10.496094 13.001953 C 10.150144 13.001953 9.9456425 12.914943 9.625 12.791016 C 9.3043575 12.667085 8.8776407 12.513672 8.2910156 12.513672 C 7.6724139 12.513672 7.2296978 12.665239 6.9023438 12.791016 C 6.5749897 12.916792 6.381561 13.001953 6.0625 13.001953 C 5.6959804 13.001953 4.8414618 12.492483 4.1757812 11.578125 C 3.5100518 10.663767 3 9.409728 3 8.1386719 C 3 6.220227 4.2251542 5.0078125 5.8769531 5.0078125 z"})))}var N,S,P,R,z,E,F,W,M=i.forwardRef(L),T=(n.p,function(){return Object(h.jsx)(M,{className:I.a.logo})}),U=[{name:Object(h.jsx)(T,{}),path:"/shop",component:Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,200))})),exact:!0,isRestricted:!1,isPrivate:!1},{name:"Products",path:"/products",component:Object(i.lazy)((function(){return n.e(6).then(n.bind(null,203))})),exact:!1,isRestricted:!1,isPrivate:!1},{name:"Accessories",path:"/accessories",component:"",exact:!1,isRestricted:!1,isPrivate:!1},{name:"Service",path:"/service",component:Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,201))})),exact:!1,isRestricted:!1,isPrivate:!0},{name:"Contacts",path:"/contacts",component:"",exact:!1,isRestricted:!1,isPrivate:!1},{name:Object(h.jsx)(_,{}),path:"/cart",component:Object(i.lazy)((function(){return n.e(5).then(n.bind(null,205))})),exact:!0,isRestricted:!1,isPrivate:!1,cartLength:null},{name:"Administration",path:"/admin",component:Object(i.lazy)((function(){return n.e(9).then(n.bind(null,204))})),exact:!0,isRestricted:!1,isPrivate:!0},{name:"Registration",path:"/registration",component:Object(i.lazy)((function(){return n.e(1).then(n.bind(null,202))})),exact:!0,isRestricted:!0,isPrivate:!1},{name:"Login",path:"/login",component:Object(i.lazy)((function(){return n.e(1).then(n.bind(null,202))})),exact:!0,isRestricted:!0,isPrivate:!1},{name:"profile",path:"/profile",component:"",exact:!0,isRestricted:!1,isPrivate:!0}],D=n(52),Y=function(t){return t.auth.token},B=Object(j.j)((function(){var t=Object(j.g)(),e=Object(m.d)(Y),n=Object(m.c)();return Object(h.jsxs)(b,{children:[Object(h.jsx)("h2",{className:"headerTitle",children:" AppleMacShop"}),Object(h.jsxs)("ul",{className:"navigationList",children:[U.map((function(t){return Object(h.jsx)(g,{route:t,token:e},Object(d.a)())})),e&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("li",{className:"navigationListItem",children:Object(h.jsx)(u.b,{onClick:function(e){return n(Object(D.b)(e,t))},to:"login",className:"navigationListItemAnchor",activeClassName:"navigationListItemActive",children:"Logout"})})})]})]})})),H=p.a.main(N||(N=Object(l.a)(["\n  padding: 0 20px;\n"]))),G=function(t){var e=t.path,n=t.exact,a=t.component;return t.token?Object(h.jsx)(j.b,{path:e,exact:n,component:a},e):Object(h.jsx)(j.a,{to:"/login"})},J=function(t){var e=t.path,n=t.exact,a=t.component,r=t.isRestricted;return t.token&&r?Object(h.jsx)(j.a,{to:"/shop"}):Object(h.jsx)(j.b,{path:e,exact:n,component:a},e)},K=function(){var t=Object(m.d)(Y);return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(H,{children:Object(h.jsx)(i.Suspense,{fallback:Object(h.jsx)("h2",{children:"...loading"}),children:Object(h.jsx)(j.d,{children:U.map((function(e){return e.isPrivate?Object(h.jsx)(G,{path:e.path,exact:e.exact,component:e.component,token:t},e.path):Object(h.jsx)(J,{path:e.path,exact:e.exact,isRestricted:e.isRestricted,component:e.component,token:t},e.path)}))})})})})},q=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(B,{}),Object(h.jsx)(K,{})]})},Q=n(17),V=n(2),X=n(7),Z=n(3),$=n(8),tt=Object(V.c)(null,Object(Z.a)({},$.e,(function(t,e){return e.payload}))),et=Object(V.c)(null,(S={},Object(Z.a)(S,$.a,(function(t,e){return e.payload.idToken})),Object(Z.a)(S,$.c,(function(t,e){return null})),S)),nt=Object(V.c)(null,(P={},Object(Z.a)(P,$.a,(function(t,e){return e.payload})),Object(Z.a)(P,$.c,(function(t,e){return null})),P)),at=Object(V.c)(null,(R={},Object(Z.a)(R,$.f,(function(t,e){return e.payload})),Object(Z.a)(R,$.b,(function(t,e){return e.payload})),Object(Z.a)(R,$.c,(function(t,e){return e.payload})),R)),rt=Object(X.combineReducers)({token:et,user:nt,registration:tt,error:at}),ct=n(19),it=Object(V.c)([],(z={},Object(Z.a)(z,ct.a,(function(t,e){return[].concat(Object(Q.a)(t),[e.payload])})),Object(Z.a)(z,ct.c,(function(t,e){return Object(Q.a)(t.filter((function(t){return t.id!==e.payload})))})),Object(Z.a)(z,ct.d,(function(){return[]})),Object(Z.a)(z,$.c,(function(t,e){return[]})),z)),ot=Object(V.c)(!1,Object(Z.a)({},ct.b,(function(t,e){return e.payload}))),st=Object(V.c)(!1,Object(Z.a)({},ct.b,(function(t,e){return e.payload.reduce((function(t,e){return t+=Number(e.price)}),0)}))),ut=Object(V.c)(!1,Object(Z.a)({},ct.h,(function(t,e){return!t}))),dt=Object(V.c)(!1,Object(Z.a)({},ct.g,(function(t){return!t}))),lt=Object(V.c)("",(E={},Object(Z.a)(E,ct.f,(function(t,e){return e.payload})),Object(Z.a)(E,ct.e,(function(){return""})),E)),pt=Object(X.combineReducers)({items:it,order:ot,total:st,isModalOpen:ut,loader:dt,error:lt}),bt=n(34),ft=Object(V.c)("",Object(Z.a)({},bt.a,(function(t,e){return e.payload}))),jt=Object(V.c)("",Object(Z.a)({},bt.b,(function(t,e){return e.payload}))),mt=Object(X.combineReducers)({filter:ft,filterError:jt}),Ot=n(9),ht=n(20),gt=Object(V.c)({phones:[],laptops:[],ipads:[],appleWatches:[],airPods:[]},(F={},Object(Z.a)(F,ht.h,(function(t,e){return Object(Ot.a)(Object(Ot.a)({},t),{},{phones:Object(Q.a)(e.payload)})})),Object(Z.a)(F,ht.f,(function(t,e){return Object(Ot.a)(Object(Ot.a)({},t),{},{laptops:Object(Q.a)(e.payload)})})),Object(Z.a)(F,ht.e,(function(t,e){return Object(Ot.a)(Object(Ot.a)({},t),{},{ipads:Object(Q.a)(e.payload)})})),Object(Z.a)(F,ht.c,(function(t,e){return Object(Ot.a)(Object(Ot.a)({},t),{},{appleWatches:Object(Q.a)(e.payload)})})),Object(Z.a)(F,ht.b,(function(t,e){return Object(Ot.a)(Object(Ot.a)({},t),{},{airPods:Object(Q.a)(e.payload)})})),F)),xt=Object(V.c)([],Object(Z.a)({},ht.i,(function(t,e){return Object(Ot.a)({},e.payload)}))),vt=Object(V.c)("",(W={},Object(Z.a)(W,ht.d,(function(t,e){return e.payload})),Object(Z.a)(W,ht.a,(function(){return""})),W)),yt=Object(V.c)(!1,Object(Z.a)({},ht.g,(function(t){return!t}))),_t=Object(X.combineReducers)({items:gt,productWithId:xt,error:vt,loader:yt}),Ct=n(30),It=n(38),wt=n.n(It),kt={key:"cart",storage:wt.a,whitelist:["items"]},At={key:"token",storage:wt.a,whitelist:["token"]},Lt=Object(X.combineReducers)({auth:Object(Ct.a)(At,rt),cart:Object(Ct.a)(kt,pt),products:_t,filter:mt}),Nt=n(4),St=Object(Q.a)(Object(V.d)({serializableCheck:{ignoredActions:[Nt.b,Nt.h,Nt.d,Nt.e,Nt.f,Nt.g]}})),Pt=Object(V.a)({reducer:Lt,middleware:St}),Rt=Object(Ct.b)(Pt),zt=n(59),Et=n(18),Ft=n.n(Et);s.a.render(Object(h.jsx)(m.a,{store:Pt,children:Object(h.jsx)(zt.a,{loading:Object(h.jsx)("p",{children:"Loading..."}),persistor:Rt,children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(Ft.a,{}),Object(h.jsx)(q,{})]})})}),document.getElementById("root"))},19:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"h",(function(){return s})),n.d(e,"g",(function(){return u})),n.d(e,"f",(function(){return d})),n.d(e,"e",(function(){return l}));var a=n(2),r=Object(a.b)("cart/addToCart"),c=Object(a.b)("cart/removeFromCartByID"),i=Object(a.b)("cart/createOrder"),o=Object(a.b)("cart/remuveAllFromCart"),s=Object(a.b)("cart/taggleModal"),u=Object(a.b)("cart/setLoader"),d=Object(a.b)("cart/setError"),l=Object(a.b)("cart/resetError")},20:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"i",(function(){return u})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return l})),n.d(e,"g",(function(){return p}));var a=n(2),r=Object(a.b)("@products/getPhones"),c=Object(a.b)("@products/getLaptops"),i=Object(a.b)("@products/getIpad"),o=Object(a.b)("@products/getAppleWatch"),s=Object(a.b)("@products/getAirPods"),u=Object(a.b)("@products/setproductWithId"),d=Object(a.b)("@products/setError"),l=Object(a.b)("@products/resetError"),p=Object(a.b)("@products/getPhones")},24:function(t,e,n){"use strict";var a=n(18);e.a=function(t){return"success"===t?a.store.addNotification({title:"Wonderful!",message:"Wonderful!",type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!1}}):"addProductToCartSuccess"===t?a.store.addNotification({title:"Wonderful!",message:"\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443",type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!1}}):"removeFromCart"===t?a.store.addNotification({title:"\u0422\u043e\u0432\u0430\u0440 \u0443\u0434\u0430\u043b\u0435\u043d \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b",message:"\u0422\u043e\u0432\u0430\u0440 \u0443\u0434\u0430\u043b\u0435\u043d \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b",type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!1}}):"loginSuccess"===t?a.store.addNotification({title:"Welcome",message:"You was secsesful Login in",type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!1}}):"registrationSuccess"===t?a.store.addNotification({title:"Welcome",message:"You was secsesful Registratered! Login in please",type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!1}}):"logoutSuccess"===t?a.store.addNotification({title:"Goodbay",message:"You was secsesful Logout! See you next time",type:"warning",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:4e3,onScreen:!1}}):"deleteAllFromCart"===t?a.store.addNotification({title:"deleted!",message:"All were deleted from cart",type:"danger",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!1}}):"error"===t?a.store.addNotification({title:"Error!",message:"Error",type:"danger",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!1}}):void 0}},34:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var a=n(2),r=Object(a.b)("@products/setFilter"),c=Object(a.b)("@products/setFilterError")},40:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return i}));var a=function(t){return t.cart.items},r=function(t){return t.cart.isModalOpen},c=function(t){return t.cart.total},i=function(t){var e;return null===(e=t.cart.items)||void 0===e?void 0:e.length}},52:function(t,e,n){"use strict";n.d(e,"c",(function(){return m})),n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return h}));var a=n(10),r=n.n(a),c=n(22),i=n(9),o=n(28),s=n.n(o),u="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat("AIzaSyAADYypCDfRfFwciAHHzne5jN9KfL5j2d4"),d="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyAADYypCDfRfFwciAHHzne5jN9KfL5j2d4"),l=function(){var t=Object(c.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.post(u,Object(i.a)(Object(i.a)({},e),{},{returnSecureToken:!0}));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.post(d,Object(i.a)(Object(i.a)({},e),{},{returnSecureToken:!0}));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.a.defaults.headers.common.Authorization="Bearer ".concat(e),t.prev=1,t.next=4,s.a.post(d,{returnSecureToken:!0});case 4:return n=t.sent,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),f=n(8),j=n(24),m=function(t,e){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l(t);case 3:c=n.sent,a(Object(f.e)(c.data)),e.push("/login"),Object(j.a)("registrationSuccess"),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),a(Object(f.f)(n.t0.message)),Object(j.a)("error");case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}()},O=function(t,e){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p(t);case 3:c=n.sent,a(Object(f.a)(c.data)),e.push("/shop"),Object(j.a)("loginSuccess"),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),a(Object(f.b)(n.t0.message)),Object(j.a)("error");case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}()},h=function(t,e){return function(){var n=Object(c.a)(r.a.mark((function n(a,c){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b(t);case 3:a(Object(f.c)()),Object(j.a)("logoutSuccess"),e.push("login"),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),a(Object(f.d)(n.t0.message)),Object(j.a)("error");case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t,e){return n.apply(this,arguments)}}()}},57:function(t,e,n){t.exports={cart:"CartIconStyled_cart__1eGuk"}},58:function(t,e,n){t.exports={logo:"LogoStyled_logo__G5nz9"}},64:function(t,e,n){},8:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return c})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return u}));var a=n(2),r=Object(a.b)("auth/registerUserAction"),c=Object(a.b)("auth/registerUserActionError"),i=Object(a.b)("auth/loginUserAction"),o=Object(a.b)("auth/loginUserActionError"),s=Object(a.b)("auth/logoutUserAction"),u=Object(a.b)("auth/logoutUserActionError")}},[[114,3,4]]]);
//# sourceMappingURL=main.b6f057b4.chunk.js.map