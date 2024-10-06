/*! For license information please see 73.js.LICENSE.txt */
"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[73,690],{1613:(e,t,r)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}var a;r.d(t,{HS:()=>k,Oi:()=>l,Rr:()=>d,pX:()=>B,pb:()=>U,rc:()=>a,tH:()=>T,ue:()=>f,zR:()=>i}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(a||(a={}));const o="popstate";function i(e){return void 0===e&&(e={}),function(e,t,r,i){void 0===i&&(i={});let{window:s=document.defaultView,v5Compat:d=!1}=i,h=s.history,f=a.Pop,m=null,v=g();function g(){return(h.state||{idx:null}).idx}function y(){f=a.Pop;let e=g(),t=null==e?null:e-v;v=e,m&&m({action:f,location:x.location,delta:t})}function b(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,r="string"==typeof e?e:p(e);return r=r.replace(/ $/,"%20"),l(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}null==v&&(v=0,h.replaceState(n({},h.state,{idx:v}),""));let x={get action(){return f},get location(){return e(s,h)},listen(e){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(o,y),m=e,()=>{s.removeEventListener(o,y),m=null}},createHref:e=>t(s,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){f=a.Push;let n=u(x.location,e,t);r&&r(n,e),v=g()+1;let o=c(n,v),i=x.createHref(n);try{h.pushState(o,"",i)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;s.location.assign(i)}d&&m&&m({action:f,location:x.location,delta:1})},replace:function(e,t){f=a.Replace;let n=u(x.location,e,t);r&&r(n,e),v=g();let o=c(n,v),i=x.createHref(n);h.replaceState(o,"",i),d&&m&&m({action:f,location:x.location,delta:0})},go:e=>h.go(e)};return x}((function(e,t){let{pathname:r,search:n,hash:a}=e.location;return u("",{pathname:r,search:n,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:p(t)}),null,e)}function l(e,t){if(!1===e||null==e)throw new Error(t)}function s(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function c(e,t){return{usr:e.state,key:e.key,idx:t}}function u(e,t,r,a){return void 0===r&&(r=null),n({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?d(t):t,{state:r,key:t&&t.key||a||Math.random().toString(36).substr(2,8)})}function p(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function d(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}var h;function f(e,t,r){return void 0===r&&(r="/"),function(e,t,r,n){let a=U(("string"==typeof t?d(t):t).pathname||"/",r);if(null==a)return null;let o=m(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let i=null;for(let e=0;null==i&&e<o.length;++e){let t=O(a);i=R(o[e],t,n)}return i}(e,t,r,!1)}function m(e,t,r,n){void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n="");let a=(e,a,o)=>{let i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(l(i.relativePath.startsWith(n),'Absolute route path "'+i.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(n.length));let s=k([n,i.relativePath]),c=r.concat(i);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),m(e.children,t,c,s)),(null!=e.path||e.index)&&t.push({path:s,score:C(s,e.index),routesMeta:c})};return e.forEach(((e,t)=>{var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?"))for(let r of v(e.path))a(e,t,r);else a(e,t)})),t}function v(e){let t=e.split("/");if(0===t.length)return[];let[r,...n]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(0===n.length)return a?[o,""]:[o];let i=v(n.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(h||(h={})),new Set(["lazy","caseSensitive","path","id","index","children"]);const g=/^:[\w-]+$/,y=3,b=2,x=1,w=10,E=-2,S=e=>"*"===e;function C(e,t){let r=e.split("/"),n=r.length;return r.some(S)&&(n+=E),t&&(n+=b),r.filter((e=>!S(e))).reduce(((e,t)=>e+(g.test(t)?y:""===t?x:w)),n)}function R(e,t,r){void 0===r&&(r=!1);let{routesMeta:n}=e,a={},o="/",i=[];for(let e=0;e<n.length;++e){let l=n[e],s=e===n.length-1,c="/"===o?t:t.slice(o.length)||"/",u=P({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c),p=l.route;if(!u&&s&&r&&!n[n.length-1].route.index&&(u=P({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!u)return null;Object.assign(a,u.params),i.push({params:a,pathname:k([o,u.pathname]),pathnameBase:L(k([o,u.pathnameBase])),route:p}),"/"!==u.pathnameBase&&(o=k([o,u.pathnameBase]))}return i}function P(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!0),s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,r)=>(n.push({paramName:t,isOptional:null!=r}),r?"/?([^\\/]+)?":"/([^\\/]+)")));return e.endsWith("*")?(n.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:n.reduce(((e,t,r)=>{let{paramName:n,isOptional:a}=t;if("*"===n){let e=l[r]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[r];return e[n]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function O(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function U(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}const k=e=>e.join("/").replace(/\/\/+/g,"/"),L=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");class T extends Error{}function B(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const F=["post","put","patch","delete"],M=(new Set(F),["get",...F]);new Set(M),new Set([301,302,303,307,308]),new Set([307,308]),Symbol("deferred")},935:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},6758:e=>{e.exports=function(e){return e[1]}},5873:(e,t,r)=>{var n=r(9163);t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},3657:(e,t,r)=>{r.d(t,{Kd:()=>s});var n=r(5641),a=r(9163),o=r(8690),i=r(1613);new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(e){}new Map;const l=n.startTransition;function s(e){let{basename:t,children:r,future:a,window:s}=e,c=n.useRef();null==c.current&&(c.current=(0,i.zR)({window:s,v5Compat:!0}));let u=c.current,[p,d]=n.useState({action:u.action,location:u.location}),{v7_startTransition:h}=a||{},f=n.useCallback((e=>{h&&l?l((()=>d(e))):d(e)}),[d,h]);return n.useLayoutEffect((()=>u.listen(f)),[u,f]),n.createElement(o.Ix,{basename:t,children:r,location:p.location,navigationType:p.action,navigator:u,future:a})}var c,u;a.flushSync,n.useId,"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"}(c||(c={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(u||(u={}))},8690:(e,t,r)=>{r.d(t,{BV:()=>C,Ix:()=>S,qh:()=>E,sv:()=>w});var n=r(5641),a=r(1613);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}const i=n.createContext(null),l=n.createContext(null),s=n.createContext(null),c=n.createContext(null),u=n.createContext({outlet:null,matches:[],isDataRoute:!1}),p=n.createContext(null);function d(){return null!=n.useContext(c)}const h=n.createContext(null);function f(e,t,r,i){d()||(0,a.Oi)(!1);let{navigator:l}=n.useContext(s),{matches:p}=n.useContext(u),h=p[p.length-1],f=h?h.params:{},m=(h&&h.pathname,h?h.pathnameBase:"/");h&&h.route;let b,w=(d()||(0,a.Oi)(!1),n.useContext(c).location);if(t){var E;let e="string"==typeof t?(0,a.Rr)(t):t;"/"===m||(null==(E=e.pathname)?void 0:E.startsWith(m))||(0,a.Oi)(!1),b=e}else b=w;let S=b.pathname||"/",C=S;if("/"!==m){let e=m.replace(/^\//,"").split("/");C="/"+S.replace(/^\//,"").split("/").slice(e.length).join("/")}let R=(0,a.ue)(e,{pathname:C}),P=function(e,t,r,o){var i;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===o&&(o=null),null==e){var l;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(l=o)&&l.v7_partialHydration&&0===t.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let s=e,c=null==(i=r)?void 0:i.errors;if(null!=c){let e=s.findIndex((e=>e.route.id&&void 0!==(null==c?void 0:c[e.route.id])));e>=0||(0,a.Oi)(!1),s=s.slice(0,Math.min(s.length,e+1))}let u=!1,p=-1;if(r&&o&&o.v7_partialHydration)for(let e=0;e<s.length;e++){let t=s[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(p=e),t.route.id){let{loaderData:e,errors:n}=r,a=t.route.loader&&void 0===e[t.route.id]&&(!n||void 0===n[t.route.id]);if(t.route.lazy||a){u=!0,s=p>=0?s.slice(0,p+1):[s[0]];break}}}return s.reduceRight(((e,a,o)=>{let i,l=!1,d=null,h=null;var f;r&&(i=c&&a.route.id?c[a.route.id]:void 0,d=a.route.errorElement||v,u&&(p<0&&0===o?(x[f="route-fallback"]||(x[f]=!0),l=!0,h=null):p===o&&(l=!0,h=a.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,o+1)),b=()=>{let t;return t=i?d:l?h:a.route.Component?n.createElement(a.route.Component,null):a.route.element?a.route.element:e,n.createElement(y,{match:a,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:t})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?n.createElement(g,{location:r.location,revalidation:r.revalidation,component:d,error:i,children:b(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):b()}),null)}(R&&R.map((e=>Object.assign({},e,{params:Object.assign({},f,e.params),pathname:(0,a.HS)([m,l.encodeLocation?l.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:(0,a.HS)([m,l.encodeLocation?l.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),p,r,i);return t&&P?n.createElement(c.Provider,{value:{location:o({pathname:"/",search:"",hash:"",state:null,key:"default"},b),navigationType:a.rc.Pop}},P):P}function m(){let e=function(){var e;let t=n.useContext(p),r=function(){let e=n.useContext(l);return e||(0,a.Oi)(!1),e}(b.UseRouteError),o=function(){let e=function(){let e=n.useContext(u);return e||(0,a.Oi)(!1),e}(),t=e.matches[e.matches.length-1];return t.route.id||(0,a.Oi)(!1),t.route.id}(b.UseRouteError);return void 0!==t?t:null==(e=r.errors)?void 0:e[o]}(),t=(0,a.pX)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},t),r?n.createElement("pre",{style:o},r):null,null)}const v=n.createElement(m,null);class g extends n.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?n.createElement(u.Provider,{value:this.props.routeContext},n.createElement(p.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function y(e){let{routeContext:t,match:r,children:a}=e,o=n.useContext(i);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(u.Provider,{value:t},a)}var b=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(b||{});const x={};function w(e){return function(e){let t=n.useContext(u).outlet;return t?n.createElement(h.Provider,{value:e},t):t}(e.context)}function E(e){(0,a.Oi)(!1)}function S(e){let{basename:t="/",children:r=null,location:i,navigationType:l=a.rc.Pop,navigator:u,static:p=!1,future:h}=e;d()&&(0,a.Oi)(!1);let f=t.replace(/^\/*/,"/"),m=n.useMemo((()=>({basename:f,navigator:u,static:p,future:o({v7_relativeSplatPath:!1},h)})),[f,h,u,p]);"string"==typeof i&&(i=(0,a.Rr)(i));let{pathname:v="/",search:g="",hash:y="",state:b=null,key:x="default"}=i,w=n.useMemo((()=>{let e=(0,a.pb)(v,f);return null==e?null:{location:{pathname:e,search:g,hash:y,state:b,key:x},navigationType:l}}),[f,v,g,y,b,x,l]);return null==w?null:n.createElement(s.Provider,{value:m},n.createElement(c.Provider,{children:r,value:w}))}function C(e){let{children:t,location:r}=e;return f(R(t),r)}function R(e,t){void 0===t&&(t=[]);let r=[];return n.Children.forEach(e,((e,o)=>{if(!n.isValidElement(e))return;let i=[...t,o];if(e.type===n.Fragment)return void r.push.apply(r,R(e.props.children,i));e.type!==E&&(0,a.Oi)(!1),e.props.index&&e.props.children&&(0,a.Oi)(!1);let l={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(l.children=R(e.props.children,i)),r.push(l)})),r}n.startTransition,new Promise((()=>{})),n.Component},2591:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},i=[],l=0;l<e.length;l++){var s=e[l],c=n.base?s[0]+n.base:s[0],u=o[c]||0,p="".concat(c," ").concat(u);o[c]=u+1;var d=r(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(h);else{var f=a(h,n);n.byIndex=l,t.splice(l,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var l=r(o[i]);t[l].references--}for(var s=n(e,a),c=0;c<o.length;c++){var u=r(o[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=s}}},8128:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},3051:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},855:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},1740:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},3656:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);