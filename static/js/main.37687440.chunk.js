(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/background_black_code_trim.82cfc3e6.mov"},35:function(e,t,a){e.exports=a.p+"static/media/background_white_code.6bfb4896.mov"},38:function(e,t,a){e.exports=a(65)},43:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){e.exports=a.p+"static/media/profile_pic.b37d3891.jpg"},57:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),l=a.n(r),o=(a(43),a(4)),i=a(5),m=a(7),s=a(6),u=a(8),p=a(12),d=a(13),E=a(25),b=a(14),v=(a(48),a(34)),h=a.n(v),f=a(35),k=a.n(f),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).changeName=function(e){return a.props.changeName(e.target.value)},a.toggleDarkMode=function(){a.props.toggleDarkMode(a.props.isDarkMode)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.name,t=this.props.isDarkMode;return c.a.createElement("div",{className:"Home"},c.a.createElement(c.a.Fragment,{key:this.props.isDarkMode},c.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:t?"darkmode":"brightmode",id:"background-video"},c.a.createElement("source",{src:t?h.a:k.a,type:"video/mp4"}))),c.a.createElement("div",null,c.a.createElement("h1",null,e),c.a.createElement("p",null,"This is my personal website"),c.a.createElement("input",{type:"text",name:"newName",onChange:this.changeName}),c.a.createElement("label",{className:"switch"},c.a.createElement("input",{type:"checkbox",name:"isDarkMode",onChange:this.toggleDarkMode,className:"checkbox"}),c.a.createElement("span",{class:"slider round"}))))}}]),t}(n.Component),O=Object(b.b)(function(e){return{isDarkMode:e.isDarkMode,name:e.name}},function(e){return{changeName:function(t){e({type:"CHANGE_NAME",name:t})},toggleDarkMode:function(t){e({type:"TOGGLE_DARK_MODE",isDarkMode:t})}}})(j),y=(a(49),a(16)),g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).expandMenu=function(){e.setState(function(e){return{menuActive:!e.menuActive}})},e.state={menuActive:!1},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"menu"},c.a.createElement("button",{className:this.props.isDarkMode?"toggle-darkmode toggle":"toggle",onClick:this.expandMenu},this.state.menuActive?"-":"+"),c.a.createElement("div",{className:this.state.menuActive?"cn-wrapper opened-nav":"cn-wrapper inactive"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(p.b,{to:"/my_web/Profile",onClick:this.expandMenu},c.a.createElement("span",null,c.a.createElement(y.e,null)))),c.a.createElement("li",null,c.a.createElement(p.b,{to:"/my_web/Project",onClick:this.expandMenu},c.a.createElement("span",null,c.a.createElement(y.c,null)))),c.a.createElement("li",null,c.a.createElement(p.b,{to:"/my_web/",onClick:this.expandMenu},c.a.createElement("span",null,c.a.createElement(y.d,null)))),c.a.createElement("li",null,c.a.createElement(p.b,{to:"/my_web/Game",onClick:this.expandMenu},c.a.createElement("span",null,c.a.createElement(y.b,null)))),c.a.createElement("li",null,c.a.createElement(p.b,{to:"/my_web/Contact",onClick:this.expandMenu},c.a.createElement("span",null,c.a.createElement(y.a,null)))))),c.a.createElement("div",{className:this.state.menuActive?"overlay-inactive overlay-active":"overlay-inactive"}))}}]),t}(c.a.Component),w=Object(b.b)(function(e){return{isDarkMode:e.isDarkMode}})(g),N=(a(55),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Profile"},c.a.createElement("h1",null,"Profile"),c.a.createElement("div",null,c.a.createElement("div",{className:"profile-pic"},c.a.createElement("img",{src:a(56)})),c.a.createElement("div",{className:"profile-content"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"label"},"Name"),c.a.createElement("div",{className:"value"},"Alpha Lau")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"label"},"Birthday"),c.a.createElement("div",{className:"value"},"16",c.a.createElement("sup",null,"th")," November, 1998")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"label"},"Title"),c.a.createElement("div",{className:"value"},"App developer",c.a.createElement("br",null),"Backend developer",c.a.createElement("br",null),"Frontend developer",c.a.createElement("br",null))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"label"},"Location"),c.a.createElement("div",{className:"value"},"Hong Kong")))))}}]),t}(c.a.Component)),M=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"This is profile page")}}]),t}(c.a.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"This is project page")}}]),t}(c.a.Component),D=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"This is contact page")}}]),t}(c.a.Component),C=(a(57),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,{basename:"/my_web"},c.a.createElement(d.a,{render:function(e){var t=e.location;return c.a.createElement("div",null,c.a.createElement(E.TransitionGroup,null,c.a.createElement(E.CSSTransition,{timeout:300,classNames:"pageSlider",key:t.key},c.a.createElement("div",null,c.a.createElement(w,null),c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/",component:O}),c.a.createElement(d.a,{exact:!0,path:"/my_web",component:O}),c.a.createElement(d.a,{path:"/my_web/Profile",component:N}),c.a.createElement(d.a,{path:"/my_web/Game",component:M}),c.a.createElement(d.a,{path:"/my_web/Project",component:_}),c.a.createElement(d.a,{path:"/my_web/Contact",component:D}))))))}}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(20),A=a(26),G={name:"Alpha Lau",isDarkMode:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NAME":return Object(A.a)({},e,{name:t.name});case"TOGGLE_DARK_MODE":return Object(A.a)({},e,{isDarkMode:!t.isDarkMode});default:return e}},P=Object(x.b)(T);l.a.render(c.a.createElement(b.a,{store:P},c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.37687440.chunk.js.map