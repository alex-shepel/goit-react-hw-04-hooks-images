(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{14:function(e,t,n){e.exports={item:"ImageGalleryItem_item__26F25",image:"ImageGalleryItem_image__32_jr"}},26:function(e,t,n){e.exports={gallery:"ImageGallery_gallery__gboaM"}},27:function(e,t,n){e.exports={button:"Button_button__3QF_k"}},29:function(e,t,n){e.exports={loader:"ModalLoader_loader__8XFZM"}},30:function(e,t,n){e.exports={App:"App_App__aOmNj"}},31:function(e,t,n){e.exports={overlay:"Overlay_overlay__3DDtl"}},32:function(e,t,n){e.exports={modal:"Modal_modal__P3_V5"}},39:function(e,t,n){},8:function(e,t,n){e.exports={searchbar:"Searchbar_searchbar__jo466",form:"Searchbar_form__XuKjc",button:"Searchbar_button__MhnaU",input:"Searchbar_input__2C4aO"}},81:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(5),c=n.n(a),o=(n(39),n(15)),i=n(4),u=n(7),s=n.n(u),l=n(16),f=n(13),m=n(25),j=n.n(m),b=n(34),p="https://pixabay.com/api",d={key:"24268385-a09efe65560efa0dec086fa93",image_type:"photo",orientation:"horizontal",editors_choice:"true",safesearch:"true",per_page:"12"},h=["webformatURL","largeImageURL"],O="There are no matching images.",g="You've reached the end of search results.",_={page:1,totalHits:null,query:null},x=function(){var e=Object(f.a)(s.a.mark((function e(){var t,n,r,a,c,o,i,u=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:"cat",n=u.length>1&&void 0!==u[1]?u[1]:1,_.page=n,r=Object(l.a)({q:t,page:n},d),e.next=6,j.a.get(p,{params:r});case 6:return a=e.sent,c=a.data,o=C(c),i=N(o),w(c.totalHits),_.totalHits=c.totalHits,_.query=t,e.abrupt("return",k(i));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(f.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(_.page),e.next=3,x(_.query,_.page+1);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e){if(e*d.per_page>=_.totalHits)throw new Error(g)},w=function(e){if(0===e)throw new Error(O)},k=function(e){return new Promise((function(t){return t(e)}))},C=function(e){return e.hits.map(S)},S=function(e){return h.reduce((function(t,n){return t[n]=e[n],t}),{})},N=function(e){return e.map((function(e){return Object(l.a)({id:Object(b.a)()},e)}))},I=n(8),E=n.n(I),L=n(33),q=n(1),M=function(e){var t=e.onSubmit,n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],o=a[1];return Object(q.jsx)("header",{className:E.a.searchbar,children:Object(q.jsxs)("form",{className:E.a.form,onSubmit:function(e){e.preventDefault(),t(c)},children:[Object(q.jsx)("button",{type:"submit",className:E.a.button,children:Object(q.jsx)(L.a,{size:20})}),Object(q.jsx)("input",{className:E.a.input,onChange:function(e){o(e.target.value)},value:c,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},H=n(14),U=n.n(H),A=function(e){var t=e.onClick,n=e.url;return Object(q.jsx)("li",{onClick:t,className:U.a.item,children:Object(q.jsx)("img",{className:U.a.image,src:n,alt:""})})},F=n(26),P=n.n(F);var R=function(e){var t=e.onItemClick,n=e.images;return Object(q.jsx)("ul",{className:P.a.gallery,children:n.map((function(e){var n=e.id,r=e.webformatURL;return Object(q.jsx)(A,{onClick:function(){return t(n)},url:r},n)}))})},D=n(27),G=n.n(D),T=function(e){var t=e.onClick;return Object(q.jsx)("button",{className:G.a.button,type:"button",onClick:t,children:"Load more"})},z=n(28),B=n.n(z),J=(n(80),n(29)),X=n.n(J),Y=document.querySelector("#loader"),K=function(e){var t=e.color,n=void 0===t?"#fff":t,r=Object(q.jsx)("div",{className:X.a.loader,children:Object(q.jsx)(B.a,{type:"Oval",color:n,height:100,width:100,timeout:0})});return Object(a.createPortal)(r,Y)},Q=n(30),V=n.n(Q),Z=n(31),W=n.n(Z),$=function(e){var t=e.onOverlayClick,n=e.component;return Object(q.jsx)("div",{onClick:function(e){e.target===e.currentTarget&&t()},className:W.a.overlay,children:n})},ee=n(32),te=n.n(ee),ne=document.querySelector("#modal"),re=function(e){var t=e.url,n=e.onClose;Object(r.useEffect)((function(){return window.addEventListener("keydown",c),function(){return window.removeEventListener("keydown",c)}}));var c=function(e){"Escape"===e.code&&n()},o=Object(q.jsxs)("div",{className:te.a.modal,children:[Object(q.jsx)(K,{}),Object(q.jsx)("img",{src:t,alt:""})]});return Object(a.createPortal)(Object(q.jsx)($,{onOverlayClick:n,component:o}),ne)},ae="empty",ce="loading",oe="normal",ie="end",ue="modal",se=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(ce),u=Object(i.a)(c,2),s=u[0],l=u[1],f=Object(r.useState)(""),m=Object(i.a)(f,2),j=m[0],b=m[1],p=Object(r.useState)(""),d=Object(i.a)(p,2),h=d[0],_=d[1];Object(r.useEffect)((function(){y((function(){return x()}),(function(e){a(e),l(oe)}))}),[]);var y=function(e,t){b(s),l(ce),e().then(t).then((function(){return l(oe)})).catch(w)},w=function(e){if(e.message!==g){if(e.message===O)return a([]),void l(ae);console.log(e.message),l(j)}else l(ie)};return Object(q.jsxs)("main",{className:V.a.App,children:[Object(q.jsx)(M,{onSubmit:function(e){y((function(){return x(e)}),(function(e){a(e),l(oe)}))}}),Object(q.jsx)(R,{onItemClick:function(e){b(s),_(n.find((function(t){return t.id===e})).largeImageURL),l(ue)},images:n}),s===ae&&Object(q.jsx)("p",{children:"There are no matching images."}),s===oe&&Object(q.jsx)(T,{onClick:function(){y(v,(function(e){a((function(t){return[].concat(Object(o.a)(t.images),Object(o.a)(e))})),l(oe)}))}}),s===ie&&Object(q.jsx)("p",{children:"You've reached the collection end."}),s===ce&&Object(q.jsx)(K,{color:"#3f51b5"}),s===ue&&Object(q.jsx)(re,{url:h,onClose:function(){l(j)}})]})};c.a.render(Object(q.jsx)(r.StrictMode,{children:Object(q.jsx)(se,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.67b63cd1.chunk.js.map