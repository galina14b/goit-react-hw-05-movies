"use strict";(self.webpackChunkMovies=self.webpackChunkMovies||[]).push([[835],{835:function(e,i,n){n.r(i);var s=n(439),r=n(791),t=n(689),c=n(87),l=n(184);i.default=function(){var e,i,n=(0,t.UO)().movieID,h=(0,r.useState)(null),a=(0,s.Z)(h,2),o=a[0],d=a[1],j=(0,t.TH)(),u=(0,r.useRef)(null!==(e=null===(i=j.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/movies");return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWQ3MmI4YmY3NzViNTQ2MGI4NWM1MTM3ZjdlYThiMCIsInN1YiI6IjY0Y2NjMzE3NzY0Yjk5MDEwMDg5ZmY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ThxIF28BeQiNBNVpfHRn1dS_7TjKdSPSguFk1068hc"}}).then((function(e){return e.json()})).then((function(e){return d(e)})).catch((function(e){return console.error(e)})),(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(c.rU,{to:u.current,children:(0,l.jsx)("button",{type:"button",className:"btn btn-primary my-4",children:"Go Back"})}),o&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"row align-items-start",children:[(0,l.jsx)("div",{className:"col",children:(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(o.poster_path),alt:"",width:400})}),(0,l.jsxs)("div",{className:"col",children:[(0,l.jsx)("h1",{children:o.title}),(0,l.jsxs)("p",{children:["User Score: ",Math.trunc(o.popularity),"%"]}),(0,l.jsx)("h2",{children:"Overview"}),(0,l.jsx)("p",{children:o.overview}),(0,l.jsx)("h2",{children:"Genres"}),(0,l.jsx)("ul",{children:o.genres.map((function(e){return(0,l.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("hr",{}),(0,l.jsx)("h3",{children:"Additional Information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]}),(0,l.jsx)("hr",{})]}),(0,l.jsx)(r.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsx)(t.j3,{})})]})]})}}}]);
//# sourceMappingURL=835.7510d555.chunk.js.map