(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(11),a=c(5),r=(c(21),c(22),c(2)),s=(c(23),c(6)),j=c.n(s),i=c(0),l=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(i.jsx)(a.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})})},o=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},b=c(8),h=c(9),d=c(12),u=c(4),O=c(1);function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(25);var p=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},m=function(e){var t=e.person,c=t.name,n=t.sex,r=t.slug;return Object(i.jsx)(a.b,{to:"/people/".concat(r),className:j()({"has-text-danger":"f"===n}),children:c})},f=function(e){var t=e.people,c=e.slug;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":c===e.slug}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(m,{person:e})}),Object(i.jsx)("td",{children:e.sex}),Object(i.jsx)("td",{children:e.born}),Object(i.jsx)("td",{children:e.died}),Object(i.jsx)("td",{children:e.mother?Object(i.jsx)(m,{person:e.mother}):e.motherName||"-"}),Object(i.jsx)("td",{children:e.father?Object(i.jsx)(m,{person:e.father}):e.fatherName||"-"})]},e.slug)}))})]})},v=function(){var e=Object(O.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],a=Object(O.useState)(!1),s=Object(u.a)(a,2),j=s[0],l=s[1],o=Object(O.useState)(!1),m=Object(u.a)(o,2),v=m[0],g=m[1],N=Object(O.useCallback)((function(e,t){return t.find((function(t){return t.name===e}))}),[]);Object(O.useEffect)((function(){var e=function(){var e=Object(d.a)(Object(b.a)().mark((function e(){var t,c;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v&&g(!1),l(!0),e.prev=2,e.next=5,x();case 5:t=e.sent,c=t.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{mother:e.motherName?N(e.motherName,t):null,father:e.fatherName?N(e.fatherName,t):null})})),n(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),g(!0);case 13:return e.prev=13,l(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var y=Object(r.h)().slug,w=!v&&!j&&!c.length;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[j&&Object(i.jsx)(p,{}),v&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),w&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),c.length>0&&Object(i.jsx)(f,{people:c,slug:y})]})})]})},g=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},N=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(l,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(r.d,{children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(o,{})}),Object(i.jsx)(r.b,{path:"home",element:Object(i.jsx)(r.a,{to:"/",replace:!0})}),Object(i.jsx)(r.b,{path:"people",element:Object(i.jsx)(v,{}),children:Object(i.jsx)(r.b,{path:":slug",element:Object(i.jsx)(v,{})})}),Object(i.jsx)(r.b,{path:"*",element:Object(i.jsx)(g,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(N,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.417262c2.chunk.js.map