function v(){}function tt(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function R(){return Object.create(null)}function k(t){t.forEach(G)}function q(t){return typeof t=="function"}function $t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function et(t){return Object.keys(t).length===0}function J(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function bt(t){let e;return J(t,n=>e=n)(),e}function wt(t,e,n){t.$$.on_destroy.push(J(e,n))}function vt(t,e,n,i){if(t){const s=K(t,e,n,i);return t[0](s)}}function K(t,e,n,i){return t[1]&&i?tt(n.ctx.slice(),t[1](i(e))):n.ctx}function Et(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let u=0;u<r;u+=1)o[u]=e.dirty[u]|s[u];return o}return e.dirty|s}return e.dirty}function kt(t,e,n,i,s,o){if(s){const r=K(e,n,i,o);t.p(r,s)}}function Nt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function St(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function At(t,e,n){return t.set(n),e}function Ct(t){return t&&q(t.destroy)?t.destroy:v}let M=!1;function nt(){M=!0}function it(){M=!1}function st(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function rt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:st(1,s,d=>e[n[d]].claim_order,l))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,s=Math.max(_,s)}const o=[],r=[];let u=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);u>=c;u--)r.push(e[u]);u--}for(;u>=0;u--)r.push(e[u]);o.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<o.length&&r[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(r[c],f)}}function ct(t,e){if(M){for(rt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Mt(t,e,n){M&&!n?ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ot(t){t.parentNode&&t.parentNode.removeChild(t)}function jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ut(t){return document.createElement(t)}function lt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function Tt(){return z(" ")}function Dt(){return z("")}function Lt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function at(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Pt(t,e){for(const n in e)at(t,n,e[n])}function Bt(t){return t===""?null:+t}function ft(t){return Array.from(t.childNodes)}function dt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Q(t,e,n,i,s=!1){dt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const u=t[r];if(e(u)){const c=n(u);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),u}}for(let r=t.claim_info.last_index-1;r>=0;r--){const u=t[r];if(e(u)){const c=n(u);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function U(t,e,n,i){return Q(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const u=s.attributes[r];n[u.name]||o.push(u.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ht(t,e,n){return U(t,e,n,ut)}function Ot(t,e,n){return U(t,e,n,lt)}function _t(t,e){return Q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function qt(t){return _t(t," ")}function zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ft(t,e){t.value=e??""}function It(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Rt(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function Wt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Gt(t,e,n){t.classList[n?"add":"remove"](e)}function ht(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Jt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function Kt(t,e){return new t(e)}let E;function w(t){E=t}function b(){if(!E)throw new Error("Function called outside component initialization");return E}function Qt(t){b().$$.on_mount.push(t)}function Ut(t){b().$$.after_update.push(t)}function Vt(t){b().$$.on_destroy.push(t)}function Xt(){const t=b();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=ht(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function Yt(t,e){return b().$$.context.set(t,e),e}function Zt(t){return b().$$.context.get(t)}function te(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const $=[],W=[],A=[],B=[],V=Promise.resolve();let H=!1;function X(){H||(H=!0,V.then(Y))}function ee(){return X(),V}function O(t){A.push(t)}function ne(t){B.push(t)}const P=new Set;let x=0;function Y(){if(x!==0)return;const t=E;do{try{for(;x<$.length;){const e=$[x];x++,w(e),mt(e.$$)}}catch(e){throw $.length=0,x=0,e}for(w(null),$.length=0,x=0;W.length;)W.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];P.has(n)||(P.add(n),n())}A.length=0}while($.length);for(;B.length;)B.pop()();H=!1,P.clear(),w(t)}function mt(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const C=new Set;let g;function ie(){g={r:0,c:[],p:g}}function se(){g.r||k(g.c),g=g.p}function Z(t,e){t&&t.i&&(C.delete(t),t.i(e))}function pt(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),g.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function re(t,e){t.d(1),e.delete(t.key)}function ce(t,e){pt(t,1,1,()=>{e.delete(t.key)})}function oe(t,e,n,i,s,o,r,u,c,l,f,_){let d=t.length,m=o.length,h=d;const j={};for(;h--;)j[t[h].key]=h;const N=[],T=new Map,D=new Map;for(h=m;h--;){const a=_(s,o,h),p=n(a);let y=r.get(p);y?i&&y.p(a,e):(y=l(p,a),y.c()),T.set(p,N[h]=y),p in j&&D.set(p,Math.abs(h-j[p]))}const F=new Set,I=new Set;function L(a){Z(a,1),a.m(u,f),r.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=N[m-1],p=t[d-1],y=a.key,S=p.key;a===p?(f=a.first,d--,m--):T.has(S)?!r.has(y)||F.has(y)?L(a):I.has(S)?d--:D.get(y)>D.get(S)?(I.add(y),L(a)):(F.add(S),d--):(c(p,r),d--)}for(;d--;){const a=t[d];T.has(a.key)||c(a,r)}for(;m;)L(N[m-1]);return N}function ue(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],u=e[o];if(u){for(const c in r)c in u||(i[c]=1);for(const c in u)s[c]||(n[c]=u[c],s[c]=1);t[o]=u}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function le(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ae(t){t&&t.c()}function fe(t,e){t&&t.l(e)}function yt(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||O(()=>{const r=t.$$.on_mount.map(G).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...r):k(r),t.$$.on_mount=[]}),o.forEach(O)}function gt(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xt(t,e){t.$$.dirty[0]===-1&&($.push(t),X(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function de(t,e,n,i,s,o,r,u=[-1]){const c=E;w(t);const l=t.$$={fragment:null,ctx:[],props:o,update:v,not_equal:s,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:R(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&s(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),f&&xt(t,_)),d}):[],l.update(),f=!0,k(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){nt();const _=ft(e.target);l.fragment&&l.fragment.l(_),_.forEach(ot)}else l.fragment&&l.fragment.c();e.intro&&Z(t.$$.fragment),yt(t,e.target,e.anchor,e.customElement),it(),Y()}w(c)}class _e{$destroy(){gt(this,1),this.$destroy=v}$on(e,n){if(!q(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{bt as $,W as A,Kt as B,ae as C,fe as D,yt as E,gt as F,vt as G,kt as H,Nt as I,Et as J,wt as K,ct as L,Gt as M,Lt as N,tt as O,lt as P,Ot as Q,Pt as R,_e as S,ue as T,St as U,le as V,ne as W,Ft as X,Bt as Y,oe as Z,ce as _,J as a,Vt as a0,Yt as a1,Zt as a2,Ct as a3,At as a4,Xt as a5,te as a6,jt as a7,O as a8,Rt as a9,re as aa,Wt as ab,Jt as ac,de as b,Tt as c,qt as d,Dt as e,Mt as f,pt as g,se as h,q as i,Z as j,ot as k,Ut as l,ut as m,v as n,Qt as o,Ht as p,ft as q,k as r,$t as s,ee as t,at as u,It as v,z as w,_t as x,zt as y,ie as z};
