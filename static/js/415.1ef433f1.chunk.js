"use strict";(self.webpackChunkgoit_react_hw_05_movies_v2=self.webpackChunkgoit_react_hw_05_movies_v2||[]).push([[415],{1454:function(n,t,e){e.d(t,{Z:function(){return d}});var r,o,i=e(5243),c=e(168),a=e(6444),u=a.ZP.div(r||(r=(0,c.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n"]))),s=a.ZP.div(o||(o=(0,c.Z)(["\n  transform: translate(-50%, -50%);\n"]))),l=e(4164),f=e(184),h=document.querySelector("#loader-root"),d=function(){return(0,l.createPortal)((0,f.jsx)(u,{children:(0,f.jsx)(s,{children:(0,f.jsx)(i.Z1,{height:"200",width:"200",color:"#FF0000",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}),h)}},4925:function(n,t,e){e.d(t,{Z:function(){return w}});var r,o,i,c,a,u,s=e(7689),l=e(1087),f=e(168),h=e(6444),d=h.ZP.ul(r||(r=(0,f.Z)(["\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),p=h.ZP.li(o||(o=(0,f.Z)(["\n  width: 225.5px;\n"]))),v=h.ZP.div(i||(i=(0,f.Z)(["\n  height: 339px;\n  width: 100;\n"]))),x=h.ZP.img(c||(c=(0,f.Z)(["\n  display: block;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n"]))),Z=(0,h.ZP)(l.OL)(a||(a=(0,f.Z)(["\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: calc(16 / 14);\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n\n  color: #212121;\n\n  :hover {\n    color: brown;\n  }\n"]))),m=h.ZP.div(u||(u=(0,f.Z)(["\n  padding-top: 10px;\n  padding-bottom: 10px;\n"]))),j=e(8754),g=e(184),w=function(n){var t=n.arrayOfMovies,e=(0,s.TH)();return(0,g.jsx)(d,{children:t.map((function(n){var t=null;t=n.title?n.title:n.name;var r=j;return n.poster_path&&(r="https://image.tmdb.org/t/p/w500".concat(n.poster_path)),(0,g.jsxs)(p,{children:[(0,g.jsx)(l.rU,{to:"/movies/".concat(n.id),state:{from:e},children:(0,g.jsx)(v,{children:(0,g.jsx)(x,{srcSet:r})})}),(0,g.jsx)(m,{children:(0,g.jsx)(Z,{to:"/movies/".concat(n.id),state:{from:e},children:t})})]},n.id)}))})}},1192:function(n,t,e){e.d(t,{Z:function(){return a}});var r,o=e(168),i=e(6444).ZP.h1(r||(r=(0,o.Z)(["\n  color: brown;\n"]))),c=e(184),a=function(n){var t=n.text;return(0,c.jsx)(i,{children:t})}},5415:function(n,t,e){e.r(t);var r=e(9439),o=e(9545),i=e(2791),c=e(4925),a=e(1192),u=e(1454),s=e(184);t.default=function(){var n=(0,i.useState)(null),t=(0,r.Z)(n,2),e=t[0],l=t[1],f=(0,i.useState)(!1),h=(0,r.Z)(f,2),d=h[0],p=h[1];return(0,i.useEffect)((function(){p(!0),(0,o.sz)().then((function(n){l(n.results)})).finally((function(){return p(!1)}))}),[]),(0,s.jsxs)(s.Fragment,{children:[d&&(0,s.jsx)(u.Z,{}),!e&&(0,s.jsx)("p",{children:"There is no results"}),e&&(0,s.jsx)(a.Z,{text:"Trending today"}),e&&(0,s.jsx)(c.Z,{arrayOfMovies:e})]})}},9545:function(n,t,e){e.d(t,{Mg:function(){return s},Tt:function(){return c},Uk:function(){return a},qX:function(){return u},sz:function(){return i}});var r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDUxYWM1MGQzYmZlMGMzZmQ3NWYwMmMxZmY3YjY4OCIsInN1YiI6IjY0MzU2NTAxZTYzNTcxMDExMTBlNjg0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iFa5GXSVBy7mOGv4-c6hZa7SvnNn7rZ6QbJ22iF5bgM"}},o="https://api.themoviedb.org/3/";function i(){var n="".concat(o,"movie/popular");return fetch(n,r).then((function(n){return n.json()}))}function c(n){var t="".concat(o,"movie/").concat(n);return fetch(t,r).then((function(n){return n.json()}))}function a(n){var t="".concat(o,"search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=1");return fetch(t,r).then((function(n){return n.json()}))}function u(n){var t="".concat(o,"movie/").concat(n,"/credits");return fetch(t,r).then((function(n){return n.json()}))}function s(n){var t="".concat(o,"movie/").concat(n,"/reviews");return fetch(t,r).then((function(n){return n.json()}))}},8754:function(n,t,e){n.exports=e.p+"static/media/no-photo-poster.8ed46971b44df70c2101.png"}}]);
//# sourceMappingURL=415.1ef433f1.chunk.js.map