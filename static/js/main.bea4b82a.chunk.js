(this["webpackJsonpgithub-finder"]=this["webpackJsonpgithub-finder"]||[]).push([[0],{34:function(e,t,a){e.exports=a(62)},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),u=a(10),s=a.n(u),i=a(14),o=a(12),m=a(8),b=a(2),d=function(e){var t=e.icon,a=e.title;return r.a.createElement("nav",{className:"navbar bg-primary"},r.a.createElement("h1",null,r.a.createElement(m.b,{to:"/"}," ",r.a.createElement("i",{className:t})," ",a)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/about"},"About"))))};d.defaultProps={title:"Github Finder",icon:"fab fa-github"};var E=d,p=function(e){var t=e.user,a=t.login,n=t.avatar_url;t.html_url;return r.a.createElement("div",{className:"card text-center"},r.a.createElement(m.b,{to:"/user/".concat(a)},r.a.createElement("img",{src:n,alt:a,className:"round-img",style:{width:"60px"}})),r.a.createElement("h3",null,a),r.a.createElement("div",null,r.a.createElement(m.b,{to:"/user/".concat(a),className:"btn btn-dark btn-sm my-1"},"More")))},f=function(e){var t=e.users;e.loading;return r.a.createElement("div",{className:"grid-3"},t&&t.map((function(e){return r.a.createElement(p,{user:e,key:e.id})})))},h=function(e){var t=e.showClear,a=e.clearUsers,c=e.searchUsers,l=Object(n.useState)(""),u=Object(o.a)(l,2),s=u[0],i=u[1];return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(s),i("")},className:"form"},r.a.createElement("input",{type:"text",name:"text",placeholder:"Search Users...",value:s,onChange:function(e){return i(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-dark btn-block"})),t&&r.a.createElement("button",{className:"btn btn-light btn-block",onClick:a},"Clear"))},g=a(11),v=function(){return r.a.createElement("div",null,r.a.createElement(n.Fragment,null,r.a.createElement(g.a,null,r.a.createElement("title",null,"Github Finder | About"),r.a.createElement("meta",{name:"description",content:"Learn more about us and our Webapp"})),r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"App to search Github users"),r.a.createElement("p",null,"Version 1.0.0")))},x=a(33),N=function(e){var t=e.user,a=e.getUser,c=Object(x.a)(e,["user","getUser"]);Object(n.useEffect)((function(){a(c.match.params.login)}),[a,c.match.params.login]);var l=t.name,u=t.email,s=t.html_url,i=t.avatar_url,o=t.location,b=t.bio,d=t.blog,E=t.followers,p=t.following,f=t.public_repos,h=t.public_gists;return r.a.createElement("div",{className:"text-center"},r.a.createElement(g.a,null,r.a.createElement("title",null,"Github Finder | User Profile"),r.a.createElement("meta",{name:"description",content:"All the information about the user ".concat(l," on Github")})),r.a.createElement("img",{src:i,alt:l,className:"round-img",style:{maxWidth:"200px"}}),r.a.createElement("h1",null,l),u&&r.a.createElement("p",null,"Contact: ",u),r.a.createElement("p",null,"Github Page:"," ",r.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},s)),o&&r.a.createElement("p",null,"Located at ",o),b&&r.a.createElement("p",null,"Bio: ",b),d&&r.a.createElement("p",null,"Blog:"," ",r.a.createElement("a",{href:d,target:"_blank",rel:"noopener noreferrer"},d)),r.a.createElement("div",{className:"text-center my-1"},r.a.createElement("div",{className:"badge badge-primary"},"followers: ",E),r.a.createElement("div",{className:"badge badge-success"},"following: ",p),r.a.createElement("div",{className:"badge badge-light"},"Public Repos: ",f),r.a.createElement("div",{className:"badge badge-danger"},"Public Gists: ",h)),r.a.createElement(m.b,{to:"/",className:"btn btn-dark btn-sm my-1"},"Back"))},k=a(15),j=a.n(k),w=(a(61),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),u=Object(o.a)(l,2),d=u[0],p=u[1],x=Object(n.useState)(!1),k=Object(o.a)(x,2),w=k[0],O=k[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,j.a.get("https://api.github.com/users?client_id=".concat("5b80c1557c8b7786770d","&client_secret=").concat("65e887ec37ded292d05dd7b628c8eb347baf9370"));case 3:t=e.sent,c(t.data),O(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var y=function(){var e=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}return e.next=3,j.a.get("https://api.github.com/search/users?q=".concat(t,"&client_id=").concat("5b80c1557c8b7786770d","&client_secret=").concat("65e887ec37ded292d05dd7b628c8eb347baf9370"));case 3:a=e.sent,c(a.data.items),O(!1),e.next=9;break;case 8:alert("Please enter a user name");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://api.github.com/users/".concat(t,"?client_id=").concat("5b80c1557c8b7786770d","&client_secret=").concat("65e887ec37ded292d05dd7b628c8eb347baf9370"));case 2:a=e.sent,p(a.data),O(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){return c([])};return r.a.createElement(m.a,{basename:"/github-finder"},r.a.createElement("div",{className:"App"},r.a.createElement(g.a,null,r.a.createElement("title",null,"Github Finder | Home")),r.a.createElement(E,null),r.a.createElement("div",{className:"container"},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(h,{searchUsers:y,clearUsers:U,showClear:a.length>0}),r.a.createElement(f,{users:a,loading:w}))}}),r.a.createElement(b.a,{exact:!0,path:"/about",component:v}),r.a.createElement(b.a,{exact:!0,path:"/user/:login",render:function(e){return r.a.createElement(N,Object.assign({},e,{getUser:_,user:d,loading:w}))}})))))});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.bea4b82a.chunk.js.map