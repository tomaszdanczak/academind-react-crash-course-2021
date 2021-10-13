(this["webpackJsonpacademind-react-crash-course-2021"]=this["webpackJsonpacademind-react-crash-course-2021"]||[]).push([[0],{12:function(e,t,c){e.exports={item:"MeetupItem_item__16n8F",image:"MeetupItem_image__1NY8N",content:"MeetupItem_content__3JjUt",actions:"MeetupItem_actions__i7I9f"}},13:function(e,t,c){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft",active:"MainNavigation_active__oN3Ka",badge:"MainNavigation_badge__QYsXO"}},19:function(e,t,c){e.exports={card:"Card_card__3_jzl"}},20:function(e,t,c){e.exports={list:"MeetupList_list__3WMaa"}},23:function(e,t,c){e.exports={main:"Layout_main__auk_r"}},29:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(18),i=c.n(r),s=(c(29),c(2)),a=c(24),o=c(11),d=c(0),j=Object(n.createContext)();function l(e){var t=e.children,c=Object(n.useState)([]),r=Object(o.a)(c,2),i=r[0],s=r[1];var a={favorites:i,totalFavorites:i.length,addFavorite:function(e){s((function(t){return t.concat(e)}))},removeFavorite:function(e){s((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavorite:function(e){return i.some((function(t){return t.id===e}))}};return Object(d.jsx)(j.Provider,{value:a,children:t})}var u=j,b=c(19),h=c.n(b);function O(e){var t=e.children;return Object(d.jsx)("div",{className:h.a.card,children:t})}var x=c(12),p=c.n(x);function m(e){var t=e.id,c=e.image,r=e.title,i=e.address,s=e.description,a=Object(n.useContext)(u),o=a.removeFavorite,j=a.itemIsFavorite,l=a.addFavorite,b=j(t);return Object(d.jsx)("li",{className:p.a.item,children:Object(d.jsxs)(O,{children:[Object(d.jsx)("div",{className:p.a.image,children:Object(d.jsx)("img",{src:c,alt:r})}),Object(d.jsxs)("div",{className:p.a.content,children:[Object(d.jsx)("h3",{children:r}),Object(d.jsx)("address",{children:i}),Object(d.jsx)("p",{children:s})]}),Object(d.jsx)("div",{className:p.a.actions,children:Object(d.jsx)("button",{onClick:function(){b?o(t):l({id:t,title:r,description:s,image:c,address:i})},children:b?"Remove from favorites":"To Favorites"})})]})})}var v=c(20),f=c.n(v);function _(e){var t=e.meetups;return Object(d.jsx)("ul",{className:f.a.list,children:t.map((function(e){return Object(d.jsx)(m,{id:e.id,image:e.image,title:e.title,address:e.address,description:e.description},e.id)}))})}function g(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)([]),s=Object(o.a)(i,2),j=s[0],l=s[1];return Object(n.useEffect)((function(){fetch("https://react-getting-started-6ed28-default-rtdb.europe-west1.firebasedatabase.app/meetups.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var n=Object(a.a)({id:c},e[c]);t.push(n)}r(!1),l(t)}))}),[]),c?Object(d.jsx)("section",{children:Object(d.jsx)("p",{children:"Loading..."})}):Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"All Meetups"}),Object(d.jsx)(_,{meetups:j})]})}var N=c(9),M=c.n(N);function F(e){var t=e.onAddMeetup,c=Object(n.useRef)(),r=Object(n.useRef)(),i=Object(n.useRef)(),s=Object(n.useRef)();return Object(d.jsx)(O,{children:Object(d.jsxs)("form",{className:M.a.form,onSubmit:function(e){e.preventDefault();var n=c.current.value,a=r.current.value,o=i.current.value,d=s.current.value;t({title:n,image:a,address:o,description:d})},children:[Object(d.jsxs)("div",{className:M.a.control,children:[Object(d.jsx)("label",{htmlFor:"title",children:"Meetup Title"}),Object(d.jsx)("input",{type:"text",required:!0,id:"title",ref:c})]}),Object(d.jsxs)("div",{className:M.a.control,children:[Object(d.jsx)("label",{htmlFor:"image",children:"Meetup Image"}),Object(d.jsx)("input",{type:"url",required:!0,id:"image",ref:r})]}),Object(d.jsxs)("div",{className:M.a.control,children:[Object(d.jsx)("label",{htmlFor:"address",children:"Meetup Address"}),Object(d.jsx)("input",{type:"text",required:!0,id:"address",ref:i})]}),Object(d.jsxs)("div",{className:M.a.control,children:[Object(d.jsx)("label",{htmlFor:"description",children:"Meetup Description"}),Object(d.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:s})]}),Object(d.jsx)("div",{className:M.a.actions,children:Object(d.jsx)("button",{children:"Add Meetup"})})]})})}function w(){var e=Object(s.f)();return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"Add New Meetup"}),Object(d.jsx)(F,{onAddMeetup:function(t){fetch("https://react-getting-started-6ed28-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/")}))}})]})}function y(){var e,t=Object(n.useContext)(u),c=t.favorites;return e=0===t.totalFavorites?Object(d.jsx)("p",{children:"You got no afvorites yet. Start adding some"}):Object(d.jsx)(_,{meetups:c}),Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"Favorites Page"}),e]})}var I=c(23),A=c.n(I),C=c(7),S=c(13),R=c.n(S);function T(){var e=Object(n.useContext)(u).totalFavorites;return Object(d.jsxs)("header",{className:R.a.header,children:[Object(d.jsx)("div",{className:R.a.logo,children:"React Meetups"}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(C.b,{to:"/",children:"All Meetups"})}),"+",Object(d.jsx)("li",{children:Object(d.jsx)(C.b,{to:"/new-meetup",children:"Add New Meetup"})}),Object(d.jsx)("li",{children:Object(d.jsxs)(C.b,{to:"/favorites",children:["My Favorites",Object(d.jsx)("span",{className:R.a.badge,children:e})]})})]})})]})}function k(e){var t=e.children;return Object(d.jsxs)("div",{children:[Object(d.jsx)(T,{}),Object(d.jsx)("main",{className:A.a.main,children:t})]})}var q=function(){return Object(d.jsx)(k,{children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{path:"/",exact:!0,children:Object(d.jsx)(g,{})}),Object(d.jsx)(s.a,{path:"/new-meetup",children:Object(d.jsx)(w,{})}),Object(d.jsx)(s.a,{path:"/favorites",children:Object(d.jsx)(y,{})})]})})};i.a.render(Object(d.jsx)(l,{children:Object(d.jsx)(C.a,{children:Object(d.jsx)(q,{})})}),document.getElementById("root"))},9:function(e,t,c){e.exports={form:"NewMeetupForm_form__1Qsl3",control:"NewMeetupForm_control__xuwh5",actions:"NewMeetupForm_actions__tMvWn"}}},[[36,1,2]]]);
//# sourceMappingURL=main.d4c3a54b.chunk.js.map