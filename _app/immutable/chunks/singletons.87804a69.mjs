import{w as c}from"./index.2cb50596.mjs";const E="",h=__sveltekit_1j7mdi5.assets,g="1679688570104",k="sveltekit:snapshot",w="sveltekit:scroll",A="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function R(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function I(){return{x:pageXOffset,y:pageYOffset}}function l(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function _(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function S(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=_(e)}}function y(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!n||!!a||v(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:s,target:a}}function T(e){let t=null,n=null,a=null,s=null,o=e;for(;o&&o!==document.documentElement;)n===null&&(n=l(o,"preload-code")),a===null&&(a=l(o,"preload-data")),t===null&&(t=l(o,"noscroll")),s===null&&(s=l(o,"reload")),o=_(o);return{preload_code:d[n??"off"],preload_data:d[a??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:s==="off"?!1:s===""?!0:null}}function p(e){const t=c(e);let n=!0;function a(){n=!0,t.update(r=>r)}function s(r){n=!1,t.set(r)}function o(r){let i;return t.subscribe(u=>{(i===void 0||n&&u!==i)&&r(i=u)})}return{notify:a,set:s,subscribe:o}}function b(){const{set:e,subscribe:t}=c(!1);let n;async function a(){clearTimeout(n);const s=await fetch(`${h}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const r=(await s.json()).version!==g;return r&&(e(!0),clearTimeout(n)),r}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:t,check:a}}function v(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function x(e){e.client}const O={url:p({}),page:p({}),navigating:c(null),updated:b()};export{A as I,f as P,w as S,k as a,y as b,T as c,I as d,E as e,S as f,R as g,x as h,v as i,O as s};
