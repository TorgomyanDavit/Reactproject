(this.webpackJsonpfirstproject=this.webpackJsonpfirstproject||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,n){},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(6),o=n.n(i),s=(n(17),n(2)),r=n(4),l=n(3),d=n(12),h=[{id:Math.random(),text:"learn JS",isCompleted:!1},{id:Math.random(),text:"learn Node",isCompleted:!1},{id:Math.random(),text:"learn Css",isCompleted:!1}];function u(t){return t.todos}var j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return"Add"===e.type?[].concat(Object(d.a)(t),[{id:Math.random(),text:e.payload.text,isCompleted:!1}]):"Clear Completed"===e.type?t.filter((function(t){return!1===t.isCompleted})):"onChecked"===e.type?t.map((function(t){return t.id===e.payload.id?e.payload:t})):"onDelete"===e.type?t.filter((function(t){return t.id!==e.payload.todo.id})):t},b=n(0);function m(){var t=Object(l.c)(u),e=Object(l.b)();return Object(b.jsx)("div",{className:"TodoList",children:t.map((function(t){return Object(b.jsx)("div",{children:Object(b.jsxs)("label",{className:"TodoLabel",children:[Object(b.jsx)("input",{className:"listinput",type:"checkbox",checked:t.isCompleted,onChange:function(n){e({type:"onChecked",payload:Object(r.a)(Object(r.a)({},t),{},{isCompleted:n.target.checked})})}}),Object(b.jsx)("span",{className:"listSpan",children:t.text}),Object(b.jsx)("button",{className:"listButton",onClick:function(){e({type:"onDelete",payload:{todo:t}})},children:"X"})]})},t.id)}))})}function f(){var t=Object(a.useState)(""),e=Object(s.a)(t,2),n=e[0],c=e[1],i=Object(l.b)();return Object(b.jsxs)("div",{className:"formDiv",children:[Object(b.jsx)("span",{className:"TodoProgramSpan",children:"Programm todo"}),Object(b.jsxs)("form",{className:"formMain",onSubmit:function(t){t.preventDefault(),""!==n&&(i({type:"Add",payload:{text:n}}),c(""))},children:[Object(b.jsx)("input",{className:"inputForm",type:"text",value:n,onChange:function(t){c(t.target.value)}}),Object(b.jsx)("button",{className:"inputButton",children:"Add"})]})]})}function p(){var t=Object(l.c)(u),e=t.filter((function(t){return!0===t.isCompleted})).length,n=Object(l.b)();return Object(b.jsxs)("div",{className:"footerMain",children:[Object(b.jsxs)("span",{className:"footerSpan",children:[e," / ",t.length,"Completed"]}),Object(b.jsx)("button",{onClick:function(){n({type:"Clear Completed"})},children:"Clear Completed"})]})}function O(t){return t.CoronaVirus[0]}function x(){var t=function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(a.useEffect)((function(){fetch("https://corona-api.com/countries").then((function(t){return t.json()})).then((function(t){c(t.data)}))}),[]),n}(),e=Object(a.useState)(""),n=Object(s.a)(e,2),c=n[0],i=n[1],o=Object(a.useState)(!0),r=Object(s.a)(o,2),d=r[0],h=r[1],u=Object(a.useState)(!0),j=Object(s.a)(u,2),m=j[0],f=j[1],p=Object(a.useState)(!0),x=Object(s.a)(p,2),C=x[0],v=x[1],y=Object(a.useState)(!0),g=Object(s.a)(y,2),T=g[0],N=g[1],M=Object(l.c)(O),S=M.name,A=M.code,w=M.population,k=M.today,D=M.latest_data,R=Object(l.b)();return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"ShowCoronaApi",onClick:function(){return h(!d)},children:d?"show Corona Virus Data":"close Corona Virus Data"}),Object(b.jsxs)("div",{className:d?"closeMain":"CoronaMain",children:[Object(b.jsxs)("form",{className:"CoronaLabel",onSubmit:function(e){e.preventDefault(),setTimeout((function(){0!==t.filter((function(t){return t.name.toLowerCase()===c.toLowerCase()})).length&&0!==t.filter((function(t){return t.name.length===c.length})).length&&R({type:"searchApi",payload:{Data:t,value:c}})}),1e3)},children:[Object(b.jsx)("input",{className:"CoronaInput",placeholder:"Search Country",type:"text",value:c,onChange:function(t){i(t.target.value)}}),Object(b.jsx)("button",{children:"Search"}),Object(b.jsx)("select",{className:"select",value:c,onChange:function(e){i(e.target.value),R({type:"searchApi",payload:{Data:t,value:e.target.value}})},children:t.map((function(t){return Object(b.jsx)("option",{children:t.name},Math.random())}))})]}),Object(b.jsx)("button",{className:"buttoninter",onClick:function(){return f(!m)},children:"Country Statistic"}),Object(b.jsxs)("div",{className:m?"":"closeCountryData",children:[Object(b.jsxs)("p",{children:["Country: ",S]}),Object(b.jsxs)("p",{children:["Country code: ",A]}),Object(b.jsxs)("p",{children:["Population: ",w]})]}),Object(b.jsx)("button",{className:"buttoninter",onClick:function(){return v(!C)},children:"today Statistic"}),Object(b.jsxs)("div",{className:C?"closeTodayStats":"",children:[Object(b.jsxs)("p",{children:["deaths: ",k.deaths]}),Object(b.jsxs)("p",{children:["confirmed: ",k.confirmed]})]}),Object(b.jsx)("button",{className:"buttoninter",onClick:function(){return N(!T)},children:"Corona Statistics latest data"}),Object(b.jsxs)("div",{className:T?"showLatestData":"",children:[Object(b.jsxs)("p",{children:["confirmed: ",D.confirmed]}),Object(b.jsxs)("p",{children:["critical: ",D.critical]}),Object(b.jsxs)("p",{children:["deaths: ",D.deaths]}),Object(b.jsxs)("p",{children:["recovered: ",D.recovered]})]})]})]})}n(23),n(24),n(25);var C=[{id:0,text:" Tic TAc Toe",isCompleted:!1},{id:1,text:" Tic TAc Toe",isCompleted:!1},{id:2,text:" Tic TAc Toe",isCompleted:!1},{id:3,text:" Tic TAc Toe",isCompleted:!1},{id:4,text:" Tic TAc Toe",isCompleted:!1},{id:5,text:" Tic TAc Toe",isCompleted:!1},{id:6,text:" Tic TAc Toe",isCompleted:!1},{id:7,text:" Tic TAc Toe",isCompleted:!1},{id:8,text:" Tic TAc Toe",isCompleted:!1}];function v(t){return t.TicTacToe}var y=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function g(){return{type:"startNow",payload:{initialStateticTacToe:C}}}var T=function(t){var e=t.player,n=t.gameAnd,a=t.setGameAnd,c=t.None,i=t.setNone,o=Object(l.b)();return Object(b.jsxs)("div",{className:n?"null":"TheEnd",children:[c?Object(b.jsxs)("p",{children:[" Win player : ","X"===e?"O":"X"]}):Object(b.jsx)("p",{children:"Game Finish ,And No Ona Didnot finish"}),Object(b.jsx)("button",{onClick:function(){a(!n),o(g()),i(!0)},children:"Start Now"})]})};var N=function(t){var e=t.index;console.log("TicTacToe");var n=Object(l.c)(v),c=Object(l.b)(),i=Object(a.useState)("X"),o=Object(s.a)(i,2),d=o[0],h=o[1],u=Object(a.useState)(!0),j=Object(s.a)(u,2),m=j[0],f=j[1],p=Object(a.useState)(!0),O=Object(s.a)(p,2),x=O[0],C=O[1],N=Object(a.useState)(0),M=Object(s.a)(N,2),S=M[0],A=M[1],w=Object(a.useState)(0),k=Object(s.a)(w,2),D=k[0],R=k[1];return setTimeout((function(){!function(t,e,n,a,c,i,o,s,r,l,d,h,u){function j(t,e,n){return t.filter((function(t){return t.text===n})).map((function(t){return t.id})).filter((function(t){for(var n=0,c=0;n<e[a].length;){if(t===e[a][c])return!0;n++,c++}return!1}))}for(;3!==j(t,e,n).length&&a<e.length-1;)a++;3===j(t,e,n).length&&("X"===n?d(l+=1):u(h+=1),i(!c)),9===t.filter((function(t){return!0===t.isCompleted})).length&&(o(g()),i(!c),s(!r))}(n,y,d,e,m,f,c,C,x,S,A,D,R)}),100),Object(b.jsxs)("div",{className:"TicTacToeMAin",children:[Object(b.jsx)(T,{player:d,gameAnd:m,setGameAnd:f,None:x,setNone:C}),n.map((function(t){return Object(b.jsxs)("button",{onClick:function(){!0!==t.isCompleted&&(c(function(t,e){return{type:"ticTac",payload:Object(r.a)(Object(r.a)({},e),{},{text:t,isCompleted:!0})}}(d,t)),setTimeout((function(){h("X"===d?"O":"X")}),100))},className:"block",children:[" ",t.text," "]},t.id)})),Object(b.jsxs)("p",{className:"Score",children:["Score:  X:",S,"   O:",D," ",Object(b.jsxs)("span",{children:["Player:",d]})]})]})};n(26);var M=function(t){var e=t.showDiamonds;function n(t){for(var e="",n=0;n<t;n++)e+="_";return e}function a(t){for(var e="",n=0;n<t;n++)e+="*";return e}return Object(b.jsx)("button",{className:e?"syuner":"closeDiamonds",onClick:function(){alert(function(t){for(var e="",c=14,i=1;i<=t;i++)e+=a(i)+n(c)+a(i)+"\n",c-=2;return e}(7))},children:"Click To Alert Syuner"})};var S=function(){var t=Object(a.useState)(!1),e=Object(s.a)(t,2),n=e[0],c=e[1];function i(t){for(var e="",n=0;n<t;n++)e+="_";return e}function o(t){for(var e="",n=0;n<t;n++)e+="*";return e}function r(t){for(var e="",n=t/2-1,a=1;a<=t;a+=2)e+=i(n)+o(a)+"\n",n--;for(var c=1,s=t-2;s>0;s-=2)e+=i(c)+o(s)+"\n",c++;return e}return Object(b.jsxs)("div",{className:"mainDiamonds",children:[Object(b.jsx)("button",{className:"showButton",onClick:function(){c(!n)},children:n?"closeDiamonds":"Show Diamonds"}),Object(b.jsx)("button",{className:n?"Diamonds":"closeDiamonds",onClick:function(){alert(r(9)),console.log(r(9))},children:"Click To Alert Diamonds"}),Object(b.jsx)(M,{showDiamonds:n})]})};n(27);function A(){this.x=Math.ceil(644*Math.random()),this.y=Math.ceil(450*Math.random()),this.width=Math.ceil(30*Math.random())+40,this.height=Math.ceil(1*Math.random())+40,this.color="rgb("+Math.round(255*Math.random())+","+Math.round(255*Math.random())+","+Math.round(255*Math.random())+")",this.colorRect="rgb("+Math.round(255*Math.random())+","+Math.round(255*Math.random())+","+Math.round(255*Math.random())+")",this.Xdelta=Math.ceil(-10*Math.random())+5,this.Ydelta=Math.ceil(-10*Math.random())+5}function w(t){(this.x>=t.width-this.width||this.x<=0)&&(this.Xdelta*=-1),(this.y<=0||this.y>=t.height-this.height)&&(this.Ydelta*=-1),this.x+=this.Xdelta,this.y+=this.Ydelta}function k(t){t.lineWidth=15,t.strokeStyle=this.colorRect,t.strokeRect(this.x,this.y,this.width,this.height),t.fillStyle=this.color,t.fillRect(this.x,this.y,this.width,this.height)}function D(){this.radius=Math.ceil(30*Math.random())+20,this.x=Math.ceil(600*Math.random())+this.radius,this.y=Math.ceil(400*Math.random())+this.radius,this.color="rgb("+Math.round(255*Math.random())+","+Math.round(255*Math.random())+","+Math.round(255*Math.random())+")",this.Xdelta=Math.ceil(-10*Math.random())+5,this.Ydelta=Math.ceil(-10*Math.random())+5}function R(t){(this.x+this.radius>t.width||this.x-this.radius<=0)&&(this.Xdelta*=-1),(this.y+this.radius>=t.height||this.y-this.radius<0)&&(this.Ydelta*=-1),this.x+=this.Xdelta,this.y+=this.Ydelta}function X(t){t.beginPath(),t.fillStyle="rgba("+Math.round(255*Math.random())+","+Math.round(255*Math.random())+","+Math.round(255*Math.random())+","+1*Math.random()+")",t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.fill(),t.lineWidth=25,t.strokeStyle=this.color,t.stroke()}var I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return"addRect"===e.type?(t.rectangle.push(e.payload.rect),t):"clearState"===e.type?e.payload:"addCircle"===e.type?(t.circle.push(e.payload.circl),t):"AddIcon"===e.type?(t.icon.push(e.payload.icon),t):t};var B=function(){var t=Object(a.useState)(!1),e=Object(s.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)("changeAdd"),o=Object(s.a)(i,2),r=o[0],d=o[1],h=Object(a.useRef)(null),u=Object(l.b)(),j=Object(l.c)((function(t){return t.CanvasAnimation}));console.log(j);var m=j.rectangle,f=j.circle,p=j.icon;function O(t){var e=new Image;e.src="https://toppng.com/uploads/preview/soccer-ball-11547030791eh59fn2utb.png",t.drawImage(e,this.x,this.y,this.width,this.height)}function x(t){this.x+=this.Xdelta,this.y+=this.Ydelta,(this.x+this.width>t.width||this.x<=0)&&(this.Xdelta*=-1),(this.y+this.height>=t.height||this.y<=0)&&(this.Ydelta*=-1)}return Object(a.useEffect)((function(){var t,e=h.current,a=e.getContext("2d");return n&&function n(){t=requestAnimationFrame(n),a.clearRect(0,0,a.canvas.width,a.canvas.height),"changeAdd"===r?m.forEach((function(t){k.call(t,a),w.call(t,e)})):"changeCircle"===r?f.forEach((function(t){X.call(t,a),R.call(t,e)})):"changeIcon"===r&&p.forEach((function(t){O.call(t,a),x.call(t,e)}))}(),function(){cancelAnimationFrame(t)}}),[n,r]),Object(b.jsxs)("div",{className:"mainDivCanvas",children:[Object(b.jsx)("canvas",{ref:h,className:"canvas",width:"700",height:"500",onClick:function(){"changeAdd"===r?u({type:"addRect",payload:{rect:new A}}):"changeCircle"===r?u({type:"addCircle",payload:{circl:new D}}):"changeIcon"===r&&u({type:"AddIcon",payload:{icon:(new Object).prototype=new A}})}}),Object(b.jsx)("button",{className:"AddButton",onClick:function(){return d("changeAdd")},children:"Add Rectangle"}),Object(b.jsx)("button",{className:"AddButton",onClick:function(){return d("changeCircle")},children:"Add Circle"}),Object(b.jsx)("button",{className:"AddButton",onClick:function(){return d("changeIcon")},children:"Add Icon"}),Object(b.jsx)("button",{className:"AddButton",onClick:function(){return c(!n)},children:n?"Stop":"play"})]})};n(28);var L=function(){var t=Object(a.useState)(!0),e=Object(s.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)(!0),o=Object(s.a)(i,2),r=o[0],l=o[1],d=Object(a.useState)(!1),h=Object(s.a)(d,2),u=h[0],j=h[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("button",{className:"ButtonShowTodo",onClick:function(){c(!n)},children:[n?"ShowTodo":"CloseTodo"," "]}),Object(b.jsxs)("div",{className:n?"TodoDisplayNone":"TodoMain",children:[Object(b.jsx)(f,{}),Object(b.jsx)(m,{}),Object(b.jsx)(p,{})]}),Object(b.jsx)(x,{}),Object(b.jsx)("button",{className:"button",onClick:function(){l(!r)},children:r?"ShowTicTacToe":"CloseTicTacToe"}),Object(b.jsx)("div",{className:r?"CloseTicTacMAin":"",children:Object(b.jsx)(N,{index:0})}),Object(b.jsx)(S,{}),Object(b.jsx)("button",{className:"ShowCloseAnimation",onClick:function(){j(!u)},children:u?"CloseCanvas":"Show Canvas"}),u?Object(b.jsx)(B,{shoeCanvas:u}):null]})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),i(t),o(t)}))},P=n(11);console.log("createStore");var Y=Object(P.b)(Object(P.a)({todos:j,CoronaVirus:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return"searchApi"===e.type?e.payload.Data.filter((function(t){return t.name.toLowerCase()===e.payload.value.toLowerCase()})):t},TicTacToe:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return"ticTac"===e.type?t.map((function(t){return t.id===e.payload.id?e.payload:t})):"startNow"===e.type?e.payload.initialStateticTacToe:t},CanvasAnimation:I}),{todos:h,CoronaVirus:[{name:"No Results",code:"No Results",population:"No Results",updated_at:"No Results",today:{deaths:"No Results",confirmed:"No Results"},latest_data:{confirmed:"No Results",critical:"No Results",deaths:"No Results",recovered:"No Results"}}],TicTacToe:C,CanvasAnimation:{rectangle:[],circle:[],icon:[]}});o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(l.a,{store:Y,children:Object(b.jsx)(L,{})})}),document.getElementById("root")),F()}],[[29,1,2]]]);
//# sourceMappingURL=main.afb5ec10.chunk.js.map