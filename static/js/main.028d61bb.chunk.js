(this.webpackJsonpsnapshot=this.webpackJsonpsnapshot||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),i=n(4),s=n.n(i),a=(n(9),n(10),n(2)),o=n(0),j=Object(c.createContext)();var u=function(t){var e=t.children,n=Object(c.useState)(!0),r=Object(a.a)(n,2),i=r[0],s=r[1],u=Object(c.useState)("girl"),l=Object(a.a)(u,2),b=l[0],d=l[1],h=Object(c.useState)([]),O=Object(a.a)(h,2),f=O[0],x=O[1];return Object(c.useEffect)((function(){s(!0),fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat("636e1481b4f3c446d26b8eb6ebfe7127","&tags=").concat(b,"&per_page=24&format=json&nojsoncallback=1")).then((function(t){return t.json()})).then((function(t){x(t.photos.photo),s(!1)}))}),[b]),Object(o.jsx)(j.Provider,{value:[f,d,b,i],children:e})};var l=function(){var t=Object(c.useContext)(j),e=Object(c.useState)(""),n=Object(a.a)(e,2),r=n[0],i=n[1];return Object(o.jsxs)("div",{className:"form",children:[Object(o.jsx)("input",{value:r,placeholder:"Nh\u1eadp n\u1ed9i dung t\xecm ki\u1ebfm...",onChange:function(t){return i(t.target.value)}}),Object(o.jsx)("button",{className:"button",onClick:function(){t[1](r),i("")},children:"T\xecm Ki\u1ebfm"})]})};var b=function(){var t=Object(c.useContext)(j),e=function(e){t[1](e)};return Object(o.jsx)("div",{className:"navigation",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{id:"girl",onClick:function(t){return e(t.target.id)},children:"Girls"}),Object(o.jsx)("li",{id:"animal",onClick:function(t){return e(t.target.id)},children:"Animals"}),Object(o.jsx)("li",{id:"nature",onClick:function(t){return e(t.target.id)},children:"Nature"}),Object(o.jsx)("li",{id:"food",onClick:function(t){return e(t.target.id)},children:"Foods"})]})})};var d=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Search Photos"}),Object(o.jsx)(l,{}),Object(o.jsx)(b,{})]})};var h=function(t){var e=t.url,n=t.id,c=t.alt;return Object(o.jsx)("li",{children:Object(o.jsx)("img",{src:e,alt:c,width:"1200",height:"813"})},n)};var O=function(){return Object(o.jsx)("h2",{children:"Loading..."})};var f=function(){var t,e=Object(c.useContext)(j),n=Object(a.a)(e,1)[0],r=Object(c.useContext)(j)[3];return n.length>0&&(t=n.map((function(t){var e=t.farm,n=t.server,c=t.id,r=t.secret,i=t.title,s="https://farm".concat(e,".staticflickr.com/").concat(n,"/").concat(c,"_").concat(r,"_m.jpg");return Object(o.jsx)(h,{url:s,alt:i},c)}))),Object(o.jsx)("div",{className:"gallery",children:r?Object(o.jsx)(O,{}):Object(o.jsxs)("ul",{children:["   ",t," "]})})};var x=function(){var t=Object(c.useContext)(j)[2];return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("h2",{children:[t," photos"]}),Object(o.jsx)(f,{})]})};var v=function(){return Object(o.jsx)("p",{className:"footer",children:"@ by C\xf4ng Hi\u1ebfu"})};var g=function(){return Object(o.jsx)(u,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{}),Object(o.jsx)(x,{}),Object(o.jsx)(v,{})]})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),i(t),s(t)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),m()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.028d61bb.chunk.js.map