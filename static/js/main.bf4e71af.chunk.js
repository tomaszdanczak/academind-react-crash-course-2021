(this["webpackJsonpacademind-react-crash-course-2021"]=this["webpackJsonpacademind-react-crash-course-2021"]||[]).push([[0],{12:function(e,t,c){e.exports={item:"MeetupItem_item__16n8F",image:"MeetupItem_image__1NY8N",content:"MeetupItem_content__3JjUt",actions:"MeetupItem_actions__i7I9f"}},13:function(e,t,c){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft",active:"MainNavigation_active__oN3Ka",badge:"MainNavigation_badge__QYsXO"}},19:function(e,t,c){e.exports={card:"Card_card__3_jzl"}},20:function(e,t,c){e.exports={list:"MeetupList_list__3WMaa"}},23:function(e,t,c){e.exports={main:"Layout_main__auk_r"}},29:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c(18),a=c.n(n),i=(c(29),c(2)),s=c(24),o=c(11),d=c(0),j=Object(r.createContext)();function l(e){var t=e.children,c=Object(r.useState)([]),n=Object(o.a)(c,2),a=n[0],i=n[1];var s={favorites:a,totalFavorites:a.length,addFavorite:function(e){i((function(t){return t.concat(e)}))},removeFavorite:function(e){i((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavorite:function(e){return a.some((function(t){return t.id===e}))}};return Object(d.jsx)(j.Provider,{value:s,children:t})}var u=j,b=c(19),h=c.n(b);function O(e){var t=e.children;return Object(d.jsx)("div",{className:h.a.card,children:t})}var x=c(12),m=c.n(x);function p(e){var t=e.id,c=e.image,n=e.title,a=e.address,i=e.description,s=Object(r.useContext)(u),o=s.removeFavorite,j=s.itemIsFavorite,l=s.addFavorite,b=j(t);return Object(d.jsx)("li",{className:m.a.item,children:Object(d.jsxs)(O,{children:[Object(d.jsx)("div",{className:m.a.image,children:Object(d.jsx)("img",{src:c,alt:n})}),Object(d.jsxs)("div",{className:m.a.content,children:[Object(d.jsx)("h3",{children:n}),Object(d.jsx)("address",{children:a}),Object(d.jsx)("p",{children:i})]}),Object(d.jsx)("div",{className:m.a.actions,children:Object(d.jsx)("button",{onClick:function(){b?o(t):l({id:t,title:n,description:i,image:c,address:a})},children:b?"Remove from favorites":"To Favorites"})})]})})}var v=c(20),f=c.n(v);function _(e){var t=e.meetups;return Object(d.jsx)("ul",{className:f.a.list,children:t.map((function(e){return Object(d.jsx)(p,{id:e.id,image:e.image,title:e.title,address:e.address,description:e.description},e.id)}))})}function g(){var e=Object(r.useState)(!0),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)([]),i=Object(o.a)(a,2),j=i[0],l=i[1];return Object(r.useEffect)((function(){fetch("https://react-getting-started-6ed28-default-rtdb.europe-west1.firebasedatabase.app/meetups.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var r=Object(s.a)({id:c},e[c]);t.push(r)}n(!1),l(t)}))}),[]),c?Object(d.jsx)("section",{children:Object(d.jsx)("p",{children:"Loading..."})}):Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"All Meetups"}),Object(d.jsx)(_,{meetups:j})]})}var N=c(9),M=c.n(N);function F(e){var t=e.onAddMeetup,c=Object(r.useRef)(),n=Object(r.useRef)(),a=Object(r.useRef)(),i=Object(r.useRef)();return Object(d.jsx)(O,{children:Object(d.jsxs)("form",{className:M.a.form,onSubmit:function(e){e.preventDefault();var r=c.current.value,s=n.current.value,o=a.current.value,d=i.current.value;t({title:r,image:s,address:o,description:d})},children:[Object(d.jsxs)("div",{className:M.a.control,children:[Object(d.jsx)("label",{htmlFor:"title",children:"Meetup Title"}),Object(d.jsx)("input",{type:"text",required:!0,id:"title",ref:c})]}),Object(d.jsxs)("div",{className:M.a.control,children:[Object(d.jsx)("label",{htmlFor:"image",children:"Meetup Image"}),Object(d.jsx)("input",{type:"url",required:!0,id:"image",ref:n})]}),Object(d.jsxs)("div",{className:M.a.control,children:[Object(d.jsx)("label",{htmlFor:"address",children:"Meetup Address"}),Object(d.jsx)("input",{type:"text",required:!0,id:"address",ref:a})]}),Object(d.jsxs)("div",{className:M.a.control,children:[Object(d.jsx)("label",{htmlFor:"description",children:"Meetup Description"}),Object(d.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:i})]}),Object(d.jsx)("div",{className:M.a.actions,children:Object(d.jsx)("button",{children:"Add Meetup"})})]})})}function w(){var e=Object(i.f)();return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"Add New Meetup"}),Object(d.jsx)(F,{onAddMeetup:function(t){fetch("https://react-getting-started-6ed28-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/")}))}})]})}function y(){var e,t=Object(r.useContext)(u),c=t.favorites;return e=0===t.totalFavorites?Object(d.jsx)("p",{children:"You got no afvorites yet. Start adding some"}):Object(d.jsx)(_,{meetups:c}),Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"Favorites Page"}),e]})}var I=c(23),A=c.n(I),C=c(7),S=c(13),R=c.n(S);function T(){var e=Object(r.useContext)(u).totalFavorites;return Object(d.jsxs)("header",{className:R.a.header,children:[Object(d.jsx)("div",{className:R.a.logo,children:"React Meetups"}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(C.b,{to:"".concat("/academind-react-crash-course-2021","/"),children:"All Meetups"})}),"+",Object(d.jsx)("li",{children:Object(d.jsx)(C.b,{to:"".concat("/academind-react-crash-course-2021","/new-meetup"),children:"Add New Meetup"})}),Object(d.jsx)("li",{children:Object(d.jsxs)(C.b,{to:"".concat("/academind-react-crash-course-2021","/favorites"),children:["My Favorites",Object(d.jsx)("span",{className:R.a.badge,children:e})]})})]})})]})}function k(e){var t=e.children;return Object(d.jsxs)("div",{children:[Object(d.jsx)(T,{}),Object(d.jsx)("main",{className:A.a.main,children:t})]})}var q=function(){return Object(d.jsx)(k,{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"".concat("/academind-react-crash-course-2021","/"),exact:!0,children:Object(d.jsx)(g,{})}),Object(d.jsx)(i.a,{path:"".concat("/academind-react-crash-course-2021","/new-meetup"),children:Object(d.jsx)(w,{})}),Object(d.jsx)(i.a,{path:"".concat("/academind-react-crash-course-2021","/favorites"),children:Object(d.jsx)(y,{})})]})})};a.a.render(Object(d.jsx)(l,{children:Object(d.jsx)(C.a,{children:Object(d.jsx)(q,{})})}),document.getElementById("root"))},9:function(e,t,c){e.exports={form:"NewMeetupForm_form__1Qsl3",control:"NewMeetupForm_control__xuwh5",actions:"NewMeetupForm_actions__tMvWn"}}},[[36,1,2]]]);
//# sourceMappingURL=main.bf4e71af.chunk.js.map