/*! For license information please see 838.js.LICENSE.txt */
"use strict";(self.webpackChunkaccount=self.webpackChunkaccount||[]).push([[838],{838:(e,t,r)=>{r.d(t,{d4:()=>m});var n=r(641),o=r.n(n),c=r(919),u="default"in n?o():n,a=Symbol.for("react-redux-context"),i="undefined"!=typeof globalThis?globalThis:{};function l(){if(!u.createContext)return{};const e=i[a]??(i[a]=new Map);let t=e.get(u.createContext);return t||(t=u.createContext(null),e.set(u.createContext,t)),t}var f=l();function s(e=f){return function(){return u.useContext(e)}}var y=s(),b=()=>{throw new Error("uSES not initialized!")},S=(e,t)=>e===t;function d(e=f){const t=e===f?y:s(e),r=(e,r={})=>{const{equalityFn:n=S,devModeChecks:o={}}="function"==typeof r?{equalityFn:r}:r,{store:c,subscription:a,getServerState:i,stabilityCheck:l,identityFunctionCheck:f}=t(),s=(u.useRef(!0),u.useCallback({[e.name]:t=>e(t)}[e.name],[e,l,o.stabilityCheck])),y=b(a.addNestedSub,c.getState,i||c.getState,s,n);return u.useDebugValue(y),y};return Object.assign(r,{withTypes:()=>r}),r}var m=d();Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.client.reference");var v,p=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),g="undefined"!=typeof navigator&&"ReactNative"===navigator.product;p||g?u.useLayoutEffect:u.useEffect,Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype,v=c.useSyncExternalStoreWithSelector,b=v,n.useSyncExternalStore},969:(e,t,r)=>{var n=r(641),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},c=n.useSyncExternalStore,u=n.useRef,a=n.useEffect,i=n.useMemo,l=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,f){var s=u(null);if(null===s.current){var y={hasValue:!1,value:null};s.current=y}else y=s.current;s=i((function(){function e(e){if(!a){if(a=!0,c=e,e=n(e),void 0!==f&&y.hasValue){var t=y.value;if(f(t,e))return u=t}return u=e}if(t=u,o(c,e))return t;var r=n(e);return void 0!==f&&f(t,r)?t:(c=e,u=r)}var c,u,a=!1,i=void 0===r?null:r;return[function(){return e(t())},null===i?void 0:function(){return e(i())}]}),[t,r,n,f]);var b=c(e,s[0],s[1]);return a((function(){y.hasValue=!0,y.value=b}),[b]),l(b),b}},919:(e,t,r)=>{e.exports=r(969)}}]);