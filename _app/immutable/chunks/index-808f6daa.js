function v(){}function tt(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function W(){return Object.create(null)}function E(t){t.forEach(J)}function I(t){return typeof t=="function"}function xt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function et(t){return Object.keys(t).length===0}function K(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function $t(t){let e;return K(t,n=>e=n)(),e}function wt(t,e,n){t.$$.on_destroy.push(K(e,n))}function vt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?tt(n.ctx.slice(),t[1](i(e))):n.ctx}function kt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const a=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)a[o]=e.dirty[o]|r[o];return a}return e.dirty|r}return e.dirty}function Et(t,e,n,i,r,a){if(r){const s=Q(e,n,i,a);t.p(s,r)}}function St(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Nt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function jt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Ct(t,e,n){return t.set(n),e}function At(t){return t&&I(t.destroy)?t.destroy:v}let A=!1;function nt(){A=!0}function it(){A=!1}function rt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function st(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:rt(1,r,_=>e[n[_]].claim_order,u))-1;i[c]=n[f]+1;const d=f+1;n[d]=c,r=Math.max(d,r)}const a=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(a.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);a.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<a.length&&s[c].claim_order>=a[u].claim_order;)u++;const f=u<a.length?a[u]:null;t.insertBefore(s[c],f)}}function ct(t,e){if(A){for(st(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Mt(t,e,n){A&&!n?ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ot(t){t.parentNode&&t.parentNode.removeChild(t)}function Lt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ut(t){return document.createElement(t)}function at(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function Pt(){return z(" ")}function Tt(){return z("")}function Bt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function lt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Dt(t,e){for(const n in e)lt(t,n,e[n])}function Ot(t){return t===""?null:+t}function ft(t){return Array.from(t.childNodes)}function _t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,i,r=!1){_t(t);const a=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function U(t,e,n,i){return R(t,r=>r.nodeName===e,r=>{const a=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||a.push(o.name)}a.forEach(s=>r.removeAttribute(s))},()=>i(e))}function qt(t,e,n){return U(t,e,n,ut)}function It(t,e,n){return U(t,e,n,at)}function dt(t,e){return R(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function zt(t){return dt(t," ")}function Ft(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ht(t,e){t.value=e??""}function Wt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Gt(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function Jt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Kt(t,e,n){t.classList[n?"add":"remove"](e)}function ht(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Qt(t,e){return new t(e)}let k;function w(t){k=t}function $(){if(!k)throw new Error("Function called outside component initialization");return k}function Rt(t){$().$$.on_mount.push(t)}function Ut(t){$().$$.after_update.push(t)}function Vt(t){$().$$.on_destroy.push(t)}function Xt(){const t=$();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const a=ht(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,a)}),!a.defaultPrevented}return!0}}function Yt(t,e){return $().$$.context.set(t,e),e}function Zt(t){return $().$$.context.get(t)}function te(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const x=[],G=[],j=[],D=[],V=Promise.resolve();let O=!1;function X(){O||(O=!0,V.then(Y))}function ee(){return X(),V}function q(t){j.push(t)}function ne(t){D.push(t)}const B=new Set;let b=0;function Y(){if(b!==0)return;const t=k;do{try{for(;b<x.length;){const e=x[b];b++,w(e),mt(e.$$)}}catch(e){throw x.length=0,b=0,e}for(w(null),x.length=0,b=0;G.length;)G.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];B.has(n)||(B.add(n),n())}j.length=0}while(x.length);for(;D.length;)D.pop()();O=!1,B.clear(),w(t)}function mt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const C=new Set;let g;function ie(){g={r:0,c:[],p:g}}function re(){g.r||E(g.c),g=g.p}function Z(t,e){t&&t.i&&(C.delete(t),t.i(e))}function pt(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),g.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function se(t,e){t.d(1),e.delete(t.key)}function ce(t,e){pt(t,1,1,()=>{e.delete(t.key)})}function oe(t,e,n,i,r,a,s,o,c,u,f,d){let _=t.length,m=a.length,h=_;const M={};for(;h--;)M[t[h].key]=h;const S=[],L=new Map,P=new Map;for(h=m;h--;){const l=d(r,a,h),p=n(l);let y=s.get(p);y?i&&y.p(l,e):(y=u(p,l),y.c()),L.set(p,S[h]=y),p in M&&P.set(p,Math.abs(h-M[p]))}const F=new Set,H=new Set;function T(l){Z(l,1),l.m(o,f),s.set(l.key,l),f=l.first,m--}for(;_&&m;){const l=S[m-1],p=t[_-1],y=l.key,N=p.key;l===p?(f=l.first,_--,m--):L.has(N)?!s.has(y)||F.has(y)?T(l):H.has(N)?_--:P.get(y)>P.get(N)?(H.add(y),T(l)):(F.add(N),_--):(c(p,s),_--)}for(;_--;){const l=t[_];L.has(l.key)||c(l,s)}for(;m;)T(S[m-1]);return S}function ue(t,e){const n={},i={},r={$$scope:1};let a=t.length;for(;a--;){const s=t[a],o=e[a];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[a]=o}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function ae(t){return typeof t=="object"&&t!==null?t:{}}function le(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function fe(t){t&&t.c()}function _e(t,e){t&&t.l(e)}function yt(t,e,n,i){const{fragment:r,after_update:a}=t.$$;r&&r.m(e,n),i||q(()=>{const s=t.$$.on_mount.map(J).filter(I);t.$$.on_destroy?t.$$.on_destroy.push(...s):E(s),t.$$.on_mount=[]}),a.forEach(q)}function gt(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(x.push(t),X(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function de(t,e,n,i,r,a,s,o=[-1]){const c=k;w(t);const u=t.$$={fragment:null,ctx:[],props:a,update:v,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:W(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return u.ctx&&r(u.ctx[d],u.ctx[d]=h)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](h),f&&bt(t,d)),_}):[],u.update(),f=!0,E(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){nt();const d=ft(e.target);u.fragment&&u.fragment.l(d),d.forEach(ot)}else u.fragment&&u.fragment.c();e.intro&&Z(t.$$.fragment),yt(t,e.target,e.anchor,e.customElement),it(),Y()}w(c)}class he{$destroy(){gt(this,1),this.$destroy=v}$on(e,n){if(!I(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{oe as $,ee as A,v as B,K as C,E as D,I as E,vt as F,Et as G,St as H,kt as I,ct as J,wt as K,$t as L,Vt as M,Yt as N,Zt as O,At as P,Bt as Q,Ct as R,he as S,G as T,Xt as U,le as V,ne as W,te as X,Lt as Y,q as Z,Gt as _,Pt as a,se as a0,Jt as a1,Ht as a2,Ot as a3,tt as a4,at as a5,It as a6,Dt as a7,ue as a8,jt as a9,Nt as aa,ae as ab,Kt as ac,ce as ad,Mt as b,zt as c,re as d,Tt as e,Z as f,ie as g,ot as h,de as i,Ut as j,ut as k,qt as l,ft as m,lt as n,Rt as o,Wt as p,z as q,dt as r,xt as s,pt as t,Ft as u,Qt as v,fe as w,_e as x,yt as y,gt as z};
