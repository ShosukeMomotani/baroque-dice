(function(n){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(n[r]=l[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,i=1;i<t.length;i++){var l=t[i];0!==o[l]&&(r=!1)}r&&(a.splice(e--,1),n=s(s.s=t[0]))}return n}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=n,s.c=r,s.d=function(n,e,t){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},s.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)s.d(t,r,function(e){return n[e]}.bind(null,r));return t},s.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="/baroque-dice/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var r=t("85ec"),o=t.n(r);o.a},"1d54":function(n,e,t){n.exports=t.p+"img/coin.bbb57795.png"},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");for(var r=t("2b0e"),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{style:{backgroundColor:n.backgroundColor},attrs:{id:"app"}},[t("HelloWorld",{on:{setBackgroundColor:n.setBackgroundColor}})],1)},a=[],s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"hello"},[t("b-container",[t("b-nav",{staticClass:"nav-tabs justify-content-center"},n._l(n.players,(function(e){return t("b-nav-item",{directives:[{name:"long-press",rawName:"v-long-press",value:1e3,expression:"1000"}],key:e.name,class:{"name-active":n.player===e,"name-enabled":!e.enabled},attrs:{active:n.player===e},on:{click:function(t){n.player=e},"long-press-start":n.onLongPressStart,"long-press-stop":n.onLongPressStop}},[n._v(n._s(e.name))])})),1),n._l(n.players,(function(e){return t("div",{directives:[{name:"show",rawName:"v-show",value:n.player===e,expression:"player === p"}],key:e.name,staticClass:"my-5"},[t("label",{staticClass:"mx-2",attrs:{for:"num-ratio"}},[n._v("ハンデ：")]),t("b-form-spinbutton",{attrs:{id:"num-ratio",min:"-10",max:"10",inline:""},model:{value:e.ratio,callback:function(t){n.$set(e,"ratio",t)},expression:"p.ratio"}})],1)})),t("button",{staticClass:"btn btn-primary my-5",attrs:{type:"button"},on:{click:function(e){return n.start()}}},[n._v("スタート")])],2),t("div",{staticClass:"container mt-4"},[t("p",{staticClass:"h1 p-item",class:{"dice-number":n.animation},style:{"background-image":"url("+n.assetsImage+")"}},[n._v(n._s(n.number))])])],1)},i=[],l=(t("7db0"),t("c975"),t("d81d"),t("b64b"),t("07ac"),t("5530")),c=t("2909"),u=t("5383"),p=t.n(u),f=t("722e"),d=t.n(f),b=t("1d54"),m=t.n(b),g=t("98c1"),v=t.n(g),y=t("5bd0"),h=t.n(y),w=t("6c8d"),x=t.n(w),k=t("f5a9"),O=t.n(k),_={1:d.a,2:m.a,3:v.a,4:h.a,5:x.a,6:O.a},j=function(n){n=n||0;for(var e={},t=0,r=[1,2,3,4,5,6];t<r.length;t++){var o=r[t];e[o]=n>=0?Math.random()*(1+.01*(o-1)*n):Math.random()*(1-.01*(6-o)*n)}var a=Math.max.apply(Math,Object(c["a"])(Object.values(e)));return parseInt(Object.keys(e).find((function(n){return e[n]===a})))},C=function(n){return 1/(6*(1+5*n)*(1+4*n)*(1+3*n)*(1+2*n)*(1+1*n))},M=function(n){return(1/(6*(1+4*n)*(1+3*n)*(1+2*n)*(1+1*n))+(Math.pow(1+1*n,5)-1)/(5*(1+4*n)*(1+3*n)*(1+2*n)*(1+1*n))+(Math.pow(1+2*n,4)-Math.pow(1+1*n,4))/(4*(1+4*n)*(1+3*n)*(1+2*n))+(Math.pow(1+3*n,3)-Math.pow(1+2*n,3))/(3*(1+4*n)*(1+3*n))+(Math.pow(1+4*n,2)-Math.pow(1+3*n,2))/(2*(1+4*n))+n)/(1+5*n)},P=0,S=[0,1,2,3,4,5,6,7,8,9,10];P<S.length;P++){var I=S[P];console.log(.01*I,{1:C(.01*I),6:M(.01*I)})}var L=null,$=new Audio(t("70b5")),B=[{name:"はやと",color:"#ddffff"},{name:"さき",color:"#ffddff"},{name:"パパ",color:"#ddffdd"},{name:"ママ",color:"#ffdddd"}],T=B.map((function(n){return Object(l["a"])(Object(l["a"])({},n),{},{ratio:0,enabled:!0})})),H={name:"HelloWorld",props:{},data:function(){return{players:T,player:T[0],assetsImage:d.a,number:1,animation:!1}},watch:{number:function(){this.assetsImage=_[this.number]},player:function(){this.$emit("setBackgroundColor",this.player.color||"#ffffff")}},methods:{start:function(){var n=this;$.currentTime=0,$.play(),L&&clearInterval(L),this.animation=!1;var e=Date.now();L=setInterval((function(){console.log(n.player.ratio),n.number=j(n.player.ratio),Date.now()-e>3e3&&(clearInterval(L),n.animation=!0,n.player=n.players[(n.players.indexOf(n.player)+1)%n.players.length])}),10)},onLongPressStart:function(){console.log("onLongPressStart()")},onLongPressStop:function(){console.log("onLongPressStop()")}},directives:{"long-press":p.a}},W=H,A=(t("8783"),t("2877")),D=Object(A["a"])(W,s,i,!1,null,"22f986df",null),E=D.exports,J={name:"App",components:{HelloWorld:E},data:function(){return{backgroundColor:"#ffffff"}},methods:{setBackgroundColor:function(n){this.backgroundColor=n}}},N=J,q=(t("034f"),Object(A["a"])(N,o,a,!1,null,null,null)),z=q.exports,F=t("5f5b");t("ab8b"),t("2dd8");r["default"].config.productionTip=!1,r["default"].use(F["a"]),new r["default"]({render:function(n){return n(z)}}).$mount("#app")},"5bd0":function(n,e,t){n.exports=t.p+"img/flower.bc150376.png"},"6c8d":function(n,e,t){n.exports=t.p+"img/star.23db6de3.png"},"70b5":function(n,e,t){n.exports=t.p+"media/drumroll.7ce99e49.mp3"},"722e":function(n,e,t){n.exports=t.p+"img/koura.bf18b6c1.png"},"85ec":function(n,e,t){},8783:function(n,e,t){"use strict";var r=t("ae27"),o=t.n(r);o.a},"98c1":function(n,e,t){n.exports=t.p+"img/kinoko.27261b22.png"},ae27:function(n,e,t){},f5a9:function(n,e,t){n.exports=t.p+"img/1up.2ae59e33.png"}});
//# sourceMappingURL=app.44847b98.js.map