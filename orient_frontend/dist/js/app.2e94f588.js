(function(e){function t(t){for(var n,o,c=t[0],s=t[1],i=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(u.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function c(e){return s.p+"js/"+({home:"home",score:"score"}[e]||e)+"."+{home:"ac9a8954",score:"afb5d88e","chunk-cee49d32":"606b8764"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={home:1,score:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({home:"home",score:"score"}[e]||e)+"."+{home:"e48e93d0",score:"ea3a636c","chunk-cee49d32":"31d6cfe0"}[e]+".css",a=s.p+n,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){i=f[c],l=i.getAttribute("data-href");if(l===n||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],d.parentNode.removeChild(d),r(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("e792"),r("0cdd");var n=r("2b0e"),o=r("5f5b");r("ab8b"),r("2dd8");n["default"].use(o["a"]);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app","align-v":"center"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Select")]),e._v(" | "),r("router-link",{attrs:{to:"/home?group="+e.$route.query.group}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/score?group="+e.$route.query.group}},[e._v("Scoreboard")])],1),r("router-view")],1)},u=[],c=(r("5c0b"),r("2877")),s={},i=Object(c["a"])(s,a,u,!1,null,null,null),l=i.exports,f=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-form-select",{staticClass:"w-50",attrs:{options:e.options},scopedSlots:e._u([{key:"first",fn:function(){return[r("b-form-select-option",{staticClass:"justify-content-center",attrs:{value:null,disabled:""}},[e._v(" -- Select your team -- ")])]},proxy:!0}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),r("div",{staticClass:"mt-3"},[e._v(" Selected: "),r("strong",[e._v(e._s(e.selected))])]),r("b-button",{attrs:{squared:"",variant:"primary",to:"/home?group="+e.selected}},[e._v(" confirm ")])],1)},p=[],m=r("1da1"),h=(r("96cf"),r("b0c0"),{name:"Select",components:{},mounted:function(){this.fetchData()},data:function(){return{selected:null,options:[],groups:[]}},methods:{fetchData:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r,n,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("groups.json");case 2:return r=t.sent,t.next=5,r.json();case 5:for(n=t.sent,console.log(n),o=0;o<n.length;o++)a={},a["value"]=n[o]["id"],a["text"]=n[o]["name"],e.options.push(a);case 8:case"end":return t.stop()}}),t)})))()}}}),v=h,b=Object(c["a"])(v,d,p,!1,null,"078644af",null),g=b.exports;n["default"].use(f["a"]);var y=[{path:"/home",name:"Home",component:function(){return r.e("home").then(r.bind(null,"bb51"))},props:function(e){return{from:e.query.group}}},{path:"/",name:"Select",component:g},{path:"/score",name:"Score",component:function(){return r.e("score").then(r.bind(null,"15e3"))},props:function(e){return{from:e.query.group}}}],_=new f["a"]({mode:"history",base:"/",routes:y}),w=_,S=r("2f62");n["default"].use(S["a"]);var j=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}}),k=r("bc3a"),x=r.n(k),O=r("2106"),E=r.n(O);n["default"].use(E.a,x.a),n["default"].config.productionTip=!1,new n["default"]({router:w,store:j,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.2e94f588.js.map