(this.webpackJsonplesson1=this.webpackJsonplesson1||[]).push([[10],{126:function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"a",(function(){return p})),e.d(t,"c",(function(){return l}));var r=e(10),c=e.n(r),a=e(22),i=e(28),s=e.n(i),o="https://appleshop-504a0-default-rtdb.firebaseio.com/",u=function(){var n=Object(a.a)(c.a.mark((function n(t){var e;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.a.get(o+"advertisements/".concat(t,".json"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=Object(a.a)(c.a.mark((function n(t,e){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.a.post(o+"advertisements/".concat(t,".json"),e);case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=Object(a.a)(c.a.mark((function n(t,e){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.a.get(o+"advertisements/".concat(t,"/").concat(e,".json"));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}()},132:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"a",(function(){return c})),e.d(t,"c",(function(){return a}));var r=function(n){return n.products.items.appleWatches},c=function(n){return n.products.items.airPods},a=function(n){return n.products.productWithId}},209:function(n,t,e){"use strict";e.r(t);var r,c,a=e(10),i=e.n(a),s=e(9),o=e(22),u=e(0),p=e(116),l=e(26),d=e(27),h=d.a.ul(r||(r=Object(l.a)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n\n"]))),x=d.a.li(c||(c=Object(l.a)(["\n width: 100%;\n padding: 20px;\n\n .content {\n  border-radius: 14px;\n  border: 1px solid #a8a8a8;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 330px;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n   1px 4px 6px rgba(0, 0, 0, 0.16);\n }\n\n .listItemTitle {\n  font-size: 16px;\n  text-align: center;\n }\n\n .imageWrapper {\n  height: 130px;\n  display: flex;\n  justify-content: center;\n  padding: 10px 0;\n }\n\n .listItemImage {\n  height: 100%;\n }\n .listItemImage:hover {\n  cursor: pointer;\n }\n .colorsList {\n  display: flex;\n  list-style: none;\n }\n .priceTitle {\n  text-align: center;\n  font-size: 20px;\n }\n .withSalePrice {\n  text-decoration: line-through;\n  color: #dc143c;\n }\n .withoutSalePrice {\n  font-weight: 600;\n  color: #819ff5;\n  font-size: 30px;\n }\n .options {\n  display: flex;\n  align-items: center;\n }\n .detailsButton {\n  width: 50%;\n  border-radius: 14px 0 0 14px;\n  margin-right: 1px;\n }\n .addToCartButton {\n  width: 50%;\n  border-radius: 0 14px 14px 0;\n  margin-right: 1px;\n }\n\n @media (min-width: 768px) {\n  width: 50%;\n }\n\n @media (min-width: 1024px) {\n  width: 25%;\n }\n"]))),f=e(24),b=e(21),j=e(6),m=e(19),O=e(1),g=Object(j.j)((function(n){var t=n.watch,e=Object(b.c)(),r=Object(j.h)(),c=Object(j.g)(),a=Object(j.i)(),i=function(){c.push({pathname:"".concat(a.path,"/").concat(t.id),state:{from:r.pathname}})};return Object(O.jsx)(x,{children:Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("h3",{className:"listItemTitle",children:t.name}),Object(O.jsx)("div",{className:"imageWrapper",children:Object(O.jsx)("img",{src:t.image,alt:t.name,className:"listItemImage",onClick:i})}),Object(O.jsxs)("p",{className:"priceTitle",children:[t.isSale?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{className:"withSalePrice",children:t.price})," ",Object(O.jsx)("span",{className:"withoutSalePrice",children:(t.price-10*t.price).toFixed(0)})]}):Object(O.jsx)("span",{className:"withoutSalePrice",children:t.price})," UAH"]}),Object(O.jsxs)("div",{className:"options",children:[Object(O.jsx)("button",{className:"detailsButton",onClick:i,children:"Details"}),Object(O.jsx)("button",{onClick:function(){e(Object(m.a)(t)),Object(f.a)("addProductToCartSuccess")},className:"addToCartButton",children:"Add to cart"})]})]})})})),v=e(126),w=e(20),y=e(132);t.default=function(){var n=Object(b.c)(),t=Object(b.d)(y.b);return Object(u.useEffect)((function(){(function(){var t=Object(o.a)(i.a.mark((function t(){var e,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(v.b)("appleWatch");case 2:(e=t.sent)&&(r=Object.keys(e).map((function(n){return Object(s.a)({id:n},e[n])})),n(Object(w.c)(r)));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[n]),Object(O.jsx)(h,{children:null===t||void 0===t?void 0:t.map((function(n){return Object(O.jsx)(g,{watch:n},Object(p.a)())}))})}}}]);
//# sourceMappingURL=10.ea685366.chunk.js.map