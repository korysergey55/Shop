(this.webpackJsonplesson1=this.webpackJsonplesson1||[]).push([[2],{111:function(t,e,n){"use strict";n.r(e);var a,r,c,i,o=n(0),s=n(32),u=n.n(s),d=(n(66),n(67),n(68),n(16)),l=n(33),p=n(34),b=n(36),f=n(35),j=n(23),h=n(24),m=h.a.header(a||(a=Object(j.a)(["\n height: 60px;\n padding: 0 20px;\n display: flex;\n align-items: center;\n justify-content: center;\n border-bottom: 2px solid #819ff5;\n background-color: #424242;\n\n .navigationList {\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n }\n .navigationListItem {\n  margin-top: 0;\n  margin-right: 20px;\n  list-style: none;\n }\n .navigationListItemAnchor {\n  text-decoration: none;\n  color: #819ff5;\n  font-weight: 700;\n  text-transform: uppercase;\n  &:hover {\n   color: #5f73a1;\n  }\n }\n .headerTitle {\n  margin-right: 50px;\n  font-size: 25px;\n  color: #819ff5;\n  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,\n   #ff2d95 0px 0px 20px, #ff2d95 0px 0px 30px, #ff2d95 0px 0px 40px,\n   #ff2d95 0px 0px 50px, #ff2d95 0px 0px 75px;\n }\n\n .headerIcon {\n  width: 40px;\n  height: 40px;\n  fill: #819ff5;\n  &:hover {\n   fill: #5f73a1;\n   cursor: pointer;\n  }\n }\n @media screen and (max-width: 768px) {\n  justify-content: space-between;\n }\n"]))),O=n.p+"static/media/symbol-defs.c7b3efa0.svg",g=h.a.nav(r||(r=Object(j.a)(["\n .navigationList {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: calc(100vh - 60px);\n  margin-top: 0;\n  margin-right: 20px;\n  background-color: #424242;\n  align-items: center;\n  padding-top: 30px;\n }\n .navigationListItem {\n  margin-top: 10px;\n }\n .navigationListItemAnchor {\n  text-decoration: none;\n  color: #819ff5;\n  text-transform: uppercase;\n  &:hover {\n   color: #5f73a1;\n  }\n }\n\n @media (min-width: 768px) {\n  .navigationList {\n   flex-direction: row;\n   width: 100%;\n   background-color: inherit;\n   margin-top: 0;\n   padding-top: 0;\n   align-items: center;\n  }\n  .navigationListItem {\n   position: relative;\n   margin-top: 0;\n  }\n  .navigationListItemAnchor {\n   color: #819ff5;\n   font-weight: 700;\n  }\n  .navigationListItemActive {\n   color: #5f73a1;\n  }\n\n  .navigationListItem:not(:last-child) {\n   margin-right: 20px;\n  }\n }\n"]))),x=n(6),v=n(21),y=n(44),w=n(1),C=Object(x.j)((function(t){var e=t.route,n=t.token,a=t.hideModal,r=Object(v.d)(y.a);return Object(w.jsxs)(g,{children:[!e.isPrivate&&!e.isRestricted&&Object(w.jsx)("li",{className:"navigationListItem",children:Object(w.jsxs)(d.b,{to:e.path,exact:e.exact,className:"navigationListItemAnchor",activeClassName:"navigationListItemActive",onClick:a,children:[e.name,"Cart"===e.name?Object(w.jsx)("span",{className:"cartLength",children:r}):""]})},e.path),e.isPrivate&&n&&Object(w.jsx)("li",{className:"navigationListItem",children:Object(w.jsxs)(d.b,{to:e.path,exact:e.exact,className:"navigationListItemAnchor",activeClassName:"navigationListItemActive",onClick:a,children:[e.name,"Cart"===e.name?Object(w.jsx)("span",{className:"cartLength",children:r}):""]})},e.path),!e.isPrivate&&e.isRestricted&&!n&&Object(w.jsx)("li",{className:"navigationListItem",children:Object(w.jsxs)(d.b,{to:e.path,exact:e.exact,className:"navigationListItemAnchor",activeClassName:"navigationListItemActive",onClick:a,children:[e.name,"Cart"===e.name?Object(w.jsx)("span",{className:"cartLength",children:r}):""]})},e.path)]})})),k=h.a.div(c||(c=Object(j.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #000000b2;\n  z-index: 1200;\n  overflow: auto;\n\n  .Modal {\n    position: relative;\n    background-color: #3d3d3d;\n    border-radius: 14px;\n    overflow: hidden;\n  }\n\n  .modalIcon {\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .modalBtn {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 40px;\n    height: 40px;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    fill: #504f4f;\n  }\n  .modalBtn:hover {\n    fill: #819ff5;\n  }\n"]))),_=function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).handleEsc=function(e){"Escape"===e.code&&t.props.hideModal()},t.onHandleClick=function(){t.props.hideModal()},t.handleBackdropClick=function(e){e.target===e.currentTarget&&t.props.hideModal()},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEsc),document.querySelector("body").style.overflow="hidden"}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEsc),document.querySelector("body").style.overflow="auto"}},{key:"render",value:function(){return Object(w.jsx)(k,{onClick:this.handleBackdropClick,children:Object(w.jsx)("div",{className:"modal",children:this.props.children})})}}]),n}(o.Component),I=n(56),L=n(60),A=n.n(L),S=["title","titleId"];function N(){return(N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function P(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function M(t,e){var n=t.title,a=t.titleId,r=P(t,S);return o.createElement("svg",N({fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16px",height:"16px",ref:e,"aria-labelledby":a},r),n?o.createElement("title",{id:a},n):null,i||(i=o.createElement("path",{d:"M 9.9960938 1 C 9.4850938 1 8.8925781 1.397375 8.5175781 1.984375 C 8.2245781 2.469375 7.9094375 3.2282813 8.0234375 3.9882812 C 8.5504375 4.0752812 9.1212656 3.6348281 9.4472656 3.0488281 C 9.8222656 2.5058281 10.029094 1.76 9.9960938 1 z M 5.8769531 4.0078125 C 3.706752 4.0078125 2 5.7651167 2 8.1386719 C 2 9.6716158 2.591368 11.100374 3.3671875 12.166016 C 4.143007 13.231657 5.0690196 14.001953 6.0625 14.001953 C 6.576439 14.001953 6.9533697 13.842333 7.2597656 13.724609 C 7.5661616 13.606886 7.8216173 13.513672 8.2910156 13.513672 C 8.7173906 13.513672 8.9543144 13.605042 9.2636719 13.724609 C 9.5730293 13.844178 9.9650432 14.001953 10.496094 14.001953 C 11.614877 14.001953 12.392508 13.086136 12.927734 12.265625 C 13.195348 11.855369 13.403856 11.446505 13.552734 11.125 C 13.627174 10.964248 13.687389 10.826432 13.730469 10.71875 C 13.773549 10.611068 13.792529 10.56928 13.818359 10.472656 A 0.50005 0.50005 0 0 0 13.519531 9.8789062 C 13.446614 9.8500661 13.105961 9.6877163 12.820312 9.3886719 C 12.534664 9.0896274 12.283203 8.6719067 12.283203 8.0039062 C 12.283203 7.3545587 12.516555 6.8982877 12.759766 6.5820312 C 12.881371 6.423903 13.006332 6.3036477 13.099609 6.2246094 C 13.192889 6.1455714 13.318385 6.0746927 13.230469 6.1230469 A 0.50005 0.50005 0 0 0 13.392578 5.3867188 C 12.494468 4.1742707 11.231633 4.0068793 10.669922 4.0078125 L 10.667969 4.0078125 C 10.040259 4.0081567 9.4770727 4.1575306 9.0195312 4.2949219 C 8.5614639 4.4324711 8.176519 4.5390625 8.0898438 4.5390625 C 7.9843498 4.5390625 7.6657259 4.4400455 7.2792969 4.3027344 C 6.8928678 4.1654232 6.4202165 4.0078125 5.8769531 4.0078125 z M 5.8769531 5.0078125 C 6.2196898 5.0078125 6.5817416 5.1149518 6.9453125 5.2441406 C 7.3088834 5.3733295 7.6553376 5.5390625 8.0898438 5.5390625 C 8.5201684 5.5390625 8.8772081 5.3809039 9.3066406 5.2519531 C 9.7360732 5.1230024 10.203548 5.0078125 10.669922 5.0078125 A 0.50005 0.50005 0 0 0 10.671875 5.0078125 C 10.987674 5.007142 11.632998 5.1731466 12.224609 5.7011719 C 12.137789 5.7894189 12.058357 5.8535971 11.966797 5.9726562 C 11.621507 6.4216498 11.283203 7.1072539 11.283203 8.0039062 C 11.283203 8.938906 11.674305 9.6368727 12.097656 10.080078 C 12.351161 10.345471 12.520463 10.396684 12.728516 10.515625 C 12.701516 10.578505 12.681704 10.629025 12.646484 10.705078 C 12.51305 10.99323 12.32198 11.362881 12.089844 11.71875 C 11.62557 12.430489 11.007311 13.001953 10.496094 13.001953 C 10.150144 13.001953 9.9456425 12.914943 9.625 12.791016 C 9.3043575 12.667085 8.8776407 12.513672 8.2910156 12.513672 C 7.6724139 12.513672 7.2296978 12.665239 6.9023438 12.791016 C 6.5749897 12.916792 6.381561 13.001953 6.0625 13.001953 C 5.6959804 13.001953 4.8414618 12.492483 4.1757812 11.578125 C 3.5100518 10.663767 3 9.409728 3 8.1386719 C 3 6.220227 4.2251542 5.0078125 5.8769531 5.0078125 z"})))}var R,z,E,W,U,B,F,T,q=o.forwardRef(M),D=(n.p,function(){return Object(w.jsx)(q,{className:A.a.logo})}),G=[{name:Object(w.jsx)(D,{}),path:"/",component:Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,195))})),exact:!0,isRestricted:!1,isPrivate:!1},{name:"Products",path:"/products",component:Object(o.lazy)((function(){return n.e(6).then(n.bind(null,198))})),exact:!1,isRestricted:!1,isPrivate:!1},{name:"Accessories",path:"/accessories",component:"",exact:!1,isRestricted:!1,isPrivate:!1},{name:"Service",path:"/service",component:Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,196))})),exact:!1,isRestricted:!1,isPrivate:!0},{name:"Contacts",path:"/contacts",component:"",exact:!1,isRestricted:!1,isPrivate:!1},{name:"Cart",path:"/cart",component:Object(o.lazy)((function(){return n.e(5).then(n.bind(null,200))})),exact:!0,isRestricted:!1,isPrivate:!1,cartLength:null},{name:"Administration",path:"/admin",component:Object(o.lazy)((function(){return n.e(9).then(n.bind(null,199))})),exact:!0,isRestricted:!1,isPrivate:!0},{name:"Registration",path:"/registration",component:Object(o.lazy)((function(){return n.e(1).then(n.bind(null,203))})),exact:!0,isRestricted:!0,isPrivate:!1},{name:"Login",path:"/login",component:Object(o.lazy)((function(){return n.e(1).then(n.bind(null,203))})),exact:!0,isRestricted:!0,isPrivate:!1},{name:"profile",path:"/profile",component:"",exact:!0,isRestricted:!1,isPrivate:!0}],J=function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={width:window.innerWidth,breakPoint:768,isModalOpen:!1},t.handleResizeWindow=function(){return t.setState({width:window.innerWidth})},t.setModalState=function(){return t.setState((function(t){return{isModalOpen:!t.isModalOpen}}))},t.goHome=function(){t.props.history.push("/")},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResizeWindow)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResizeWindow)}},{key:"render",value:function(){var t=this,e=this.state,n=e.width,a=e.breakPoint,r=e.isModalOpen;return Object(w.jsxs)(m,{children:[Object(w.jsx)("h2",{className:"headerTitle",children:" AppleMacShop"}),n<a?Object(w.jsx)("svg",{className:"headerIcon",onClick:this.goHome,children:Object(w.jsx)("use",{href:O+"#icon-home"})}):null,n<a?Object(w.jsx)("svg",{className:"headerIcon",onClick:this.setModalState,children:Object(w.jsx)("use",{href:O+"#icon-menu"})}):null,Object(w.jsxs)("ul",{className:"navigationList",children:[G.map((function(e){return Object(w.jsx)(C,{route:e,token:t.props.token},e.path)})),this.props.token&&Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("li",{className:"navigationListItem",children:Object(w.jsx)(d.b,{onClick:this.props.logoutUserOperation,to:"logout",className:"navigationListItemAnchor",activeClassName:"navigationListItemActive",children:"Logout"})})})]}),r&&Object(w.jsx)(_,{hideModal:this.setModalState,children:Object(w.jsx)(C,{hideModal:this.setModalState})})]})}}]),n}(o.Component),H={logoutUserOperation:I.b},Y=Object(v.b)((function(t,e){return{token:t.auth.token}}),H)(Object(x.j)(J)),X=h.a.main(R||(R=Object(j.a)(["\n  padding: 0 20px;\n"]))),K=function(t){var e=t.path,n=t.exact,a=t.component;return t.token?Object(w.jsx)(x.b,{path:e,exact:n,component:a},e):Object(w.jsx)(x.a,{to:"/login"})},Q=function(t){var e=t.path,n=t.exact,a=t.component,r=t.isRestricted;return t.token&&r?Object(w.jsx)(x.a,{to:"/"}):Object(w.jsx)(x.b,{path:e,exact:n,component:a},e)},V=function(t){return t.auth.token},Z=function(){var t=Object(v.d)(V);return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(X,{children:Object(w.jsx)(o.Suspense,{fallback:Object(w.jsx)("h2",{children:"...loading"}),children:Object(w.jsx)(x.d,{children:G.map((function(e){return e.isPrivate?Object(w.jsx)(K,{path:e.path,exact:e.exact,component:e.component,token:t},e.path):Object(w.jsx)(Q,{path:e.path,exact:e.exact,isRestricted:e.isRestricted,component:e.component,token:t},e.path)}))})})})})},$=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(Y,{}),Object(w.jsx)(Z,{})]})},tt=n(17),et=n(2),nt=n(7),at=n(3),rt=n(8),ct=Object(et.c)(null,Object(at.a)({},rt.e,(function(t,e){return e.payload}))),it=Object(et.c)(null,(z={},Object(at.a)(z,rt.a,(function(t,e){return e.payload.idToken})),Object(at.a)(z,rt.c,(function(t,e){return null})),z)),ot=Object(et.c)(null,(E={},Object(at.a)(E,rt.a,(function(t,e){return e.payload})),Object(at.a)(E,rt.c,(function(t,e){return null})),E)),st=Object(et.c)(null,(W={},Object(at.a)(W,rt.f,(function(t,e){return e.payload})),Object(at.a)(W,rt.b,(function(t,e){return e.payload})),Object(at.a)(W,rt.c,(function(t,e){return e.payload})),W)),ut=Object(nt.combineReducers)({token:it,user:ot,registration:ct,error:st}),dt=n(18),lt=Object(et.c)([],(U={},Object(at.a)(U,dt.a,(function(t,e){return[].concat(Object(tt.a)(t),[e.payload])})),Object(at.a)(U,dt.c,(function(t,e){return Object(tt.a)(t.filter((function(t){return t.id!==e.payload})))})),Object(at.a)(U,dt.d,(function(){return[]})),Object(at.a)(U,rt.c,(function(t,e){return[]})),U)),pt=Object(et.c)(!1,Object(at.a)({},dt.b,(function(t,e){return e.payload}))),bt=Object(et.c)(!1,Object(at.a)({},dt.b,(function(t,e){return e.payload.reduce((function(t,e){return t+=Number(e.price)}),0)}))),ft=Object(et.c)(!1,Object(at.a)({},dt.h,(function(t,e){return!t}))),jt=Object(et.c)(!1,Object(at.a)({},dt.g,(function(t){return!t}))),ht=Object(et.c)("",(B={},Object(at.a)(B,dt.f,(function(t,e){return e.payload})),Object(at.a)(B,dt.e,(function(){return""})),B)),mt=Object(nt.combineReducers)({items:lt,order:pt,total:bt,isModalOpen:ft,loader:jt,error:ht}),Ot=n(39),gt=Object(et.c)("",Object(at.a)({},Ot.a,(function(t,e){return e.payload}))),xt=Object(et.c)("",Object(at.a)({},Ot.b,(function(t,e){return e.payload}))),vt=Object(nt.combineReducers)({filter:gt,filterError:xt}),yt=n(9),wt=n(19),Ct=Object(et.c)({phones:[],laptops:[],ipads:[],appleWatches:[],airPods:[]},(F={},Object(at.a)(F,wt.h,(function(t,e){return Object(yt.a)(Object(yt.a)({},t),{},{phones:Object(tt.a)(e.payload)})})),Object(at.a)(F,wt.f,(function(t,e){return Object(yt.a)(Object(yt.a)({},t),{},{laptops:Object(tt.a)(e.payload)})})),Object(at.a)(F,wt.e,(function(t,e){return Object(yt.a)(Object(yt.a)({},t),{},{ipads:Object(tt.a)(e.payload)})})),Object(at.a)(F,wt.c,(function(t,e){return Object(yt.a)(Object(yt.a)({},t),{},{appleWatches:Object(tt.a)(e.payload)})})),Object(at.a)(F,wt.b,(function(t,e){return Object(yt.a)(Object(yt.a)({},t),{},{airPods:Object(tt.a)(e.payload)})})),F)),kt=Object(et.c)({setproductWithId:[]},Object(at.a)({},wt.i,(function(t,e){return Object(yt.a)({},e.payload)}))),_t=Object(et.c)("",(T={},Object(at.a)(T,wt.d,(function(t,e){return e.payload})),Object(at.a)(T,wt.a,(function(){return""})),T)),It=Object(et.c)(!1,Object(at.a)({},wt.g,(function(t){return!t}))),Lt=Object(nt.combineReducers)({items:Ct,productWithId:kt,error:_t,loader:It}),At=n(31),St=n(42),Nt=n.n(St),Pt={key:"cart",storage:Nt.a,whitelist:["items"]},Mt={key:"token",storage:Nt.a,whitelist:["token"]},Rt=Object(nt.combineReducers)({auth:Object(At.a)(Mt,ut),cart:Object(At.a)(Pt,mt),products:Lt,filter:vt}),zt=n(4),Et=Object(tt.a)(Object(et.d)({serializableCheck:{ignoredActions:[zt.b,zt.h,zt.d,zt.e,zt.f,zt.g]}})),Wt=Object(et.a)({reducer:Rt,middleware:Et}),Ut=Object(At.b)(Wt),Bt=n(61),Ft=n(20),Tt=n.n(Ft);u.a.render(Object(w.jsx)(v.a,{store:Wt,children:Object(w.jsx)(Bt.a,{loading:Object(w.jsx)("p",{children:"Loading..."}),persistor:Ut,children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(Tt.a,{}),Object(w.jsx)($,{})]})})}),document.getElementById("root"))},18:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"h",(function(){return s})),n.d(e,"g",(function(){return u})),n.d(e,"f",(function(){return d})),n.d(e,"e",(function(){return l}));var a=n(2),r=Object(a.b)("cart/addToCart"),c=Object(a.b)("cart/removeFromCartByID"),i=Object(a.b)("cart/createOrder"),o=Object(a.b)("cart/remuveAllFromCart"),s=Object(a.b)("cart/taggleModal"),u=Object(a.b)("cart/setLoader"),d=Object(a.b)("cart/setError"),l=Object(a.b)("cart/resetError")},19:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"i",(function(){return u})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return l})),n.d(e,"g",(function(){return p}));var a=n(2),r=Object(a.b)("@products/getPhones"),c=Object(a.b)("@products/getLaptops"),i=Object(a.b)("@products/getsetIpad"),o=Object(a.b)("@products/getAppleWatch"),s=Object(a.b)("@products/getAirPods"),u=Object(a.b)("@products/setproductWithId"),d=Object(a.b)("@products/setError"),l=Object(a.b)("@products/resetError"),p=Object(a.b)("@products/getPhones")},26:function(t,e,n){"use strict";var a=n(20);e.a=function(t){return"success"===t?a.store.addNotification({title:"Wonderful!",message:"\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443",type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!1}}):"loginSuccess"===t?a.store.addNotification({title:"Welcome",message:"You was secsesful Login in",type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!1}}):"registrationSuccess"===t?a.store.addNotification({title:"Welcome",message:"You was secsesful Registratered! Login in please",type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!1}}):"logoutSuccess"===t?a.store.addNotification({title:"Goodbay",message:"You was secsesful Logout! See you next time",type:"warning",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:4e3,onScreen:!1}}):"deleteAllFromCart"===t?a.store.addNotification({title:"deleted!",message:"All were deleted from cart",type:"danger",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!1}}):"error"===t?a.store.addNotification({title:"Error!",message:"Error",type:"danger",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!1}}):void 0}},39:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var a=n(2),r=Object(a.b)("@products/setFilter"),c=Object(a.b)("@products/setFilterError")},44:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return i}));var a=function(t){return t.cart.items},r=function(t){return t.cart.isModalOpen},c=function(t){return t.cart.total},i=function(t){var e;return null===(e=t.cart.items)||void 0===e?void 0:e.length}},56:function(t,e,n){"use strict";n.d(e,"c",(function(){return h})),n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return O}));var a=n(10),r=n.n(a),c=n(22),i=n(9),o=n(29),s=n.n(o),u="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat("AIzaSyBWUe5DycXWIqiLuoM_--zJGO5qLfUwhkU"),d="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyBWUe5DycXWIqiLuoM_--zJGO5qLfUwhkU"),l=function(){var t=Object(c.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.post(u,Object(i.a)(Object(i.a)({},e),{},{returnSecureToken:!0}));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.post(d,Object(i.a)(Object(i.a)({},e),{},{returnSecureToken:!0}));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.a.defaults.headers.common.Authorization="Bearer ".concat(e),t.prev=1,t.next=4,s.a.post(d,{returnSecureToken:!0});case 4:return n=t.sent,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),f=n(8),j=n(26),h=function(t,e){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l(t);case 3:c=n.sent,a(Object(f.e)(c.data)),e.push("/login"),Object(j.a)("registrationSuccess"),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),a(Object(f.f)(n.t0.message)),Object(j.a)("error");case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}()},m=function(t,e){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p(t);case 3:c=n.sent,a(Object(f.a)(c.data)),e.push("/"),Object(j.a)("loginSuccess"),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),a(Object(f.b)(n.t0.message)),Object(j.a)("error");case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}()},O=function(){return function(){var t=Object(c.a)(r.a.mark((function t(e,n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n().auth.token,t.prev=1,t.next=4,b(a);case 4:e(Object(f.c)()),Object(j.a)("logoutSuccess"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),e(Object(f.d)(t.t0.message)),Object(j.a)("error");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()}},60:function(t,e,n){t.exports={logo:"LogoStyled_logo__G5nz9"}},66:function(t,e,n){},8:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return c})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return u}));var a=n(2),r=Object(a.b)("auth/registerUserAction"),c=Object(a.b)("auth/registerUserActionError"),i=Object(a.b)("auth/loginUserAction"),o=Object(a.b)("auth/loginUserActionError"),s=Object(a.b)("auth/logoutUserAction"),u=Object(a.b)("auth/logoutUserActionError")}},[[111,3,4]]]);
//# sourceMappingURL=main.ad1f204f.chunk.js.map