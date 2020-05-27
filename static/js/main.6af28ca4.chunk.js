(this["webpackJsonpgithub-finder"]=this["webpackJsonpgithub-finder"]||[]).push([[0],{37:function(e,t,a){e.exports=a(65)},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),l=a.n(c),s=a(10),u=a.n(s),i=a(17),o=a(11),m=a(12),b=a(15),d=a(14),p=a(8),h=a(2),E=function(e){var t=e.icon,a=e.title;return r.a.createElement("nav",{className:"navbar bg-primary"},r.a.createElement("h1",null,r.a.createElement(p.b,{to:"/"}," ",r.a.createElement("i",{className:t})," ",a)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/about"},"About"))))};E.defaultProps={title:"Github Finder",icon:"fab fa-github"};var f=E,g=function(e){var t=e.user,a=t.login,n=t.avatar_url;t.html_url;return r.a.createElement("div",{className:"card text-center"},r.a.createElement(p.b,{to:"/user/".concat(a)},r.a.createElement("img",{src:n,alt:a,className:"round-img",style:{width:"60px"}})),r.a.createElement("h3",null,a),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/user/".concat(a),className:"btn btn-dark btn-sm my-1"},"More")))},v=function(e){var t=e.users;e.loading;return r.a.createElement("div",{className:"grid-3"},t&&t.map((function(e){return r.a.createElement(g,{user:e,key:e.id})})))},x=a(34),y=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={text:""},e.onSubmit=function(t){t.preventDefault(),e.props.searchUsers(e.state.text),e.setState({text:""})},e.onChange=function(t){return e.setState(Object(x.a)({},t.target.name,t.target.value))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.showClear,a=e.clearUsers;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit,className:"form"},r.a.createElement("input",{type:"text",name:"text",placeholder:"Search Users...",value:this.state.text,onChange:this.onChange}),r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-dark btn-block"})),t&&r.a.createElement("button",{className:"btn btn-light btn-block",onClick:a},"Clear"))}}]),a}(n.Component),k=a(13),N=function(){return r.a.createElement("div",null,r.a.createElement(n.Fragment,null,r.a.createElement(k.a,null,r.a.createElement("title",null,"Github Finder | About"),r.a.createElement("meta",{name:"description",content:"Learn more about us and our Webapp"})),r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"App to search Github users"),r.a.createElement("p",null,"Version 1.0.0")))},j=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.getUser(this.props.match.params.login)}},{key:"render",value:function(){var e=this.props.user,t=e.name,a=e.email,n=e.html_url,c=e.avatar_url,l=e.location,s=e.bio,u=e.blog,i=e.followers,o=e.following,m=e.public_repos,b=e.public_gists;return r.a.createElement("div",{className:"text-center"},r.a.createElement(k.a,null,r.a.createElement("title",null,"Github Finder | User Profile"),r.a.createElement("meta",{name:"description",content:"All the information about the user ".concat(t," on Github")})),r.a.createElement("img",{src:c,alt:t,className:"round-img",style:{maxWidth:"200px"}}),r.a.createElement("h1",null,t),a&&r.a.createElement("p",null,"Contact: ",a),r.a.createElement("p",null,"Github Page:"," ",r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},n)),l&&r.a.createElement("p",null,"Located at ",l),s&&r.a.createElement("p",null,"Bio: ",s),u&&r.a.createElement("p",null,"Blog:"," ",r.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},u)),r.a.createElement("div",{className:"text-center my-1"},r.a.createElement("div",{className:"badge badge-primary"},"followers: ",i),r.a.createElement("div",{className:"badge badge-success"},"following: ",o),r.a.createElement("div",{className:"badge badge-light"},"Public Repos: ",m),r.a.createElement("div",{className:"badge badge-danger"},"Public Gists: ",b)),r.a.createElement(p.b,{to:"/",className:"btn btn-dark btn-sm my-1"},"Back"))}}]),a}(n.Component),w=a(18),O=a.n(w),U=(a(64),function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={users:[],user:{},loading:!1},e.searchUsers=function(){var t=Object(i.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return t.next=3,O.a.get("https://api.github.com/search/users?q=".concat(a,"&client_id=").concat("5b80c1557c8b7786770d","&client_secret=").concat("65e887ec37ded292d05dd7b628c8eb347baf9370"));case 3:n=t.sent,e.setState({users:n.data.items,loading:!1}),t.next=8;break;case 7:alert("Please enter a user name");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getUser=function(){var t=Object(i.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://api.github.com/users/".concat(a,"?client_id=").concat("5b80c1557c8b7786770d","&client_secret=").concat("65e887ec37ded292d05dd7b628c8eb347baf9370"));case 2:n=t.sent,e.setState({user:n.data,loading:!1});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.clearUsers=function(){return e.setState({users:[]})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,O.a.get("https://api.github.com/users?client_id=".concat("5b80c1557c8b7786770d","&client_secret=").concat("65e887ec37ded292d05dd7b628c8eb347baf9370"));case 3:t=e.sent,this.setState({users:t.data,loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.users,c=t.loading,l=t.user;return r.a.createElement(p.a,{basename:"/github-finder"},r.a.createElement("div",{className:"App"},r.a.createElement(k.a,null,r.a.createElement("title",null,"Github Finder | Home")),r.a.createElement(f,null),r.a.createElement("div",{className:"container"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(n.Fragment,null,r.a.createElement(y,{searchUsers:e.searchUsers,clearUsers:e.clearUsers,showClear:a.length>0}),r.a.createElement(v,{users:a,loading:c}))}}),r.a.createElement(h.a,{exact:!0,path:"/about",component:N}),r.a.createElement(h.a,{exact:!0,path:"/user/:login",render:function(t){return r.a.createElement(j,Object.assign({},t,{getUser:e.getUser,user:l,loading:c}))}})))))}}]),a}(n.Component));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.6af28ca4.chunk.js.map