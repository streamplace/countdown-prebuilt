(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(35),i=n.n(r),c=(n(55),n(19)),l=n(20),u=n(22),s=n(21),f=n(23),m=n(8),h=(n(57),n(9)),p=(n(64),n(11)),b=n(14),d=n(43),x=n.n(d);function v(){var t=Object(m.a)(["\n  margin: 0;\n  display: inline;\n  position: absolute;\n  width: 999999px;\n  height: 99999px;\n  top: ","px;\n  left: ","px;\n  font-size: ","px;\n  color: black;\n  text-shadow: ",";\n  opacity: 1;\n"]);return v=function(){return t},t}var w=function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];t||(t=200);var e=Math.floor(t/40);return"\n    ".concat(e,"px ").concat(e,"px 1px white,\n    -").concat(e,"px ").concat(e,"px 1px white,\n    ").concat(e,"px -").concat(e,"px 1px white,\n    -").concat(e,"px -").concat(e,"px 1px white\n  ")},g=(h.a.div(v(),function(t){return t.top},function(t){return t.left},function(t){return t.fontSize||200},function(t){return w(t.fontSize)}),n(25)),y=n.n(g);function E(){var t=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  margin: 1em auto;\n\n  @media (max-width: 570px) {\n    display: block;\n  }\n"]);return E=function(){return t},t}function j(){var t=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: 1em;\n"]);return j=function(){return t},t}function O(){var t=Object(m.a)(["\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1.5em;\n"]);return O=function(){return t},t}function k(){var t=Object(m.a)(["\n  text-shadow: ",';\n  position: relative;\n  font-family: "Helvetica Neue", Arial, sans-serif;\n  font-weight: 300;\n  font-size: 40px;\n  color: white;\n']);return k=function(){return t},t}function S(){var t=Object(m.a)(["\n  text-shadow: ",';\n  position: relative;\n  font-family: "Fira Code", monospace;\n  font-weight: 300;\n  border-bottom: 1px solid white;\n  line-height: 70px;\n  font-size: 70px;\n  color: white;\n']);return S=function(){return t},t}var M=h.a.span(S(),(w(70),"black")),T=h.a.span(k(),(w(40),"black")),D=h.a.div(O()),z=h.a.div(j()),A=h.a.div(E()),C=function(t){return o.a.createElement(D,null,o.a.createElement(M,null,x()(t.number,t.width,0)),o.a.createElement(T,null,t.label))},R=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).go=n.go.bind(Object(b.a)(Object(b.a)(n))),n.state={toText:"five minutes from now",to:y.a.parse("five minutes from now")},n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"componentWillMount",value:function(){this.componentWillReceiveProps(this.props)}},{key:"componentDidMount",value:function(){var t=this;setTimeout(function(){return t.go()})}},{key:"componentWillReceiveProps",value:function(t){if(t.from){if(this.state.fromText===t.from)return;this.setState({fromText:t.from,from:y.a.parseDate(t.from),to:null,toText:null})}else this.state.toText!==t.to&&this.setState({to:y.a.parseDate(t.to),toText:t.to,from:null,fromText:null})}},{key:"getDiff",value:function(){return this.state.from?Date.now()-this.state.from.getTime():this.state.to.getTime()-Date.now()}},{key:"go",value:function(){if(!this.done)if(this.state.to||this.state.from){var t=this.getDiff();if(t<0)return this.setState({ms:0,sec:0,min:0,hour:0,days:0,years:0});var e=t%1e3,n=(t=Math.floor(t/1e3))%60,a=(t=Math.floor(t/60))%60,o=(t=Math.floor(t/60))%24,r=(t=Math.floor(t/24))%365;t=Math.floor(t/365),this.setState({ms:e,sec:n,min:a,hour:o,days:r,years:t}),requestAnimationFrame(this.go)}else requestAnimationFrame(this.go)}},{key:"componentWillUnmount",value:function(){this.done=!0}},{key:"render",value:function(){return o.a.createElement(z,this.props,o.a.createElement(A,null,o.a.createElement(C,{label:"YEARS",number:this.state.years,width:4}),o.a.createElement(C,{label:"DAYS",number:this.state.days,width:3}),o.a.createElement(C,{label:"HRS",number:this.state.hour,width:2})),o.a.createElement(A,null,o.a.createElement(C,{label:"MIN",number:this.state.min,width:2}),o.a.createElement(C,{label:"SEC",number:this.state.sec,width:2}),o.a.createElement(C,{label:"MS",number:this.state.ms,width:3})))}}]),e}(a.Component);function W(){var t=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]);return W=function(){return t},t}function F(){var t=Object(m.a)(["\n  html,\n  body,\n  #root {\n    height: 100%;\n    background-color: transparent;\n    overflow: hidden;\n  }\n\n  body {\n    background-color: black;\n    color: white;\n  }\n"]);return F=function(){return t},t}R.defaultProps={to:"five minutes from now"},Object(h.b)(F());var P=h.a.div(W()),_=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement(P,null,o.a.createElement(p.a,null,o.a.createElement(p.d,null,o.a.createElement(p.c,{path:"/(.*) (.*)",component:function(t){return o.a.createElement(p.b,{to:t.match.url.replace(/ /g,"_")})}}),o.a.createElement(p.c,{path:"/from/:from",component:function(t){return o.a.createElement(R,{from:t.match.params.from.replace(/_/g," ")})}}),o.a.createElement(p.c,{path:"/:to",component:function(t){return o.a.createElement(R,{to:t.match.params.to.replace(/_/g," ")})}}),o.a.createElement(p.c,{component:function(t){return o.a.createElement(R,{to:""})}}))))}}]),e}(a.Component);i.a.render(o.a.createElement(_,null),document.getElementById("root"))},44:function(t,e,n){t.exports=n(127)},55:function(t,e,n){},57:function(t,e,n){},64:function(t,e,n){}},[[44,2,1]]]);
//# sourceMappingURL=main.32cb1419.chunk.js.map