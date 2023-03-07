var Mf=Object.defineProperty;var Tf=(s,e,t)=>e in s?Mf(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ps=(s,e,t)=>(Tf(s,typeof e!="symbol"?e+"":e,t),t),_l=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var fi=(s,e,t)=>(_l(s,e,"read from private field"),t?t.call(s):e.get(s)),Ji=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},Rs=(s,e,t,n)=>(_l(s,e,"write to private field"),n?n.call(s,t):e.set(s,t),t);import{S as je,b as Xe,s as We,G as Rt,m as ft,c as nt,p as ht,q as dt,d as it,k as we,u as Ge,M as Is,f as Ve,L as gt,N as fn,H as It,I as Ut,J as Ot,j as fe,g as de,O as ln,P as ds,Q as ms,R as qn,T as ps,n as _t,U as Yn,A as Lt,V as zt,C as Ee,D as Ce,E as De,W as Bt,F as Le,K as pt,X as gr,Y as wo,r as Tu,z as Ar,Z as Au,h as Er,_ as Af,w as No,x as Go,$ as vi,a0 as Pt,a1 as Fn,t as is,a2 as Zn,a3 as Ef,o as Eu,a4 as On,a5 as Cr,a6 as ke,a as Cf,e as wr,a7 as Vo,a8 as Df,a9 as bl,aa as Lf,y as Pf,ab as Rf,ac as If}from"../chunks/index.d500fcfe.mjs";import{d as ma,v as Li,a as ki,b as ni}from"../chunks/stores.e3dcaa62.mjs";import{d as Uf,w as hn,r as Of}from"../chunks/index.2cb50596.mjs";function Ff([s,e,t]){return[Math.sqrt((s^2)+(e^2)+(t^2)),0,0]}function kf([s,e,t]){const n=s*Math.sin(e)*Math.sin(t),i=s*Math.cos(e),r=s*Math.sin(e)*Math.cos(t);return[n,i,r]}var ls,cs,us;class zf{constructor(){Ji(this,ls,0);Ji(this,cs,0);Ji(this,us,0)}getSpherical(){return[fi(this,ls),fi(this,cs),fi(this,us)]}setSpherical([e,t,n]){return Rs(this,ls,e),Rs(this,cs,t),Rs(this,us,n),this}getCartesian(){return kf(this.getSpherical())}setCartesian([e,t,n]){return this.setSpherical(Ff([e,t,n])),this}}ls=new WeakMap,cs=new WeakMap,us=new WeakMap;let An=class extends zf{};var fs,Su;let mt=(Su=class{constructor(){Ji(this,fs,[])}setVertices(e){for(let t of e)fi(this,fs).push(t);return this}getVertices(){return fi(this,fs)}},fs=new WeakMap,Su);var hs,Mu;let Ct=(Mu=class{constructor(){Ji(this,hs,[])}setVertices(e){for(let t of e)fi(this,hs).push(t);return this}getVertices(){return fi(this,hs)}},hs=new WeakMap,Mu);class Bf{constructor(){Ps(this,"vertices");Ps(this,"edges");Ps(this,"faces");this.vertices=[new An().setSpherical([1,Math.PI/2-Math.atan(1/2),Math.PI*2/10*0]),new An().setSpherical([1,Math.PI/2+Math.atan(1/2),Math.PI*2/10*1]),new An().setSpherical([1,Math.PI/2-Math.atan(1/2),Math.PI*2/10*2]),new An().setSpherical([1,Math.PI/2+Math.atan(1/2),Math.PI*2/10*3]),new An().setSpherical([1,Math.PI/2-Math.atan(1/2),Math.PI*2/10*4]),new An().setSpherical([1,Math.PI/2+Math.atan(1/2),Math.PI*2/10*5]),new An().setSpherical([1,Math.PI/2-Math.atan(1/2),Math.PI*2/10*6]),new An().setSpherical([1,Math.PI/2+Math.atan(1/2),Math.PI*2/10*7]),new An().setSpherical([1,Math.PI/2-Math.atan(1/2),Math.PI*2/10*8]),new An().setSpherical([1,Math.PI/2+Math.atan(1/2),Math.PI*2/10*9]),new An().setSpherical([1,0,0]),new An().setSpherical([1,Math.PI,0])],this.edges=[new mt().setVertices([this.vertices[0],this.vertices[1]]),new mt().setVertices([this.vertices[1],this.vertices[2]]),new mt().setVertices([this.vertices[2],this.vertices[3]]),new mt().setVertices([this.vertices[3],this.vertices[4]]),new mt().setVertices([this.vertices[4],this.vertices[5]]),new mt().setVertices([this.vertices[5],this.vertices[6]]),new mt().setVertices([this.vertices[6],this.vertices[7]]),new mt().setVertices([this.vertices[7],this.vertices[8]]),new mt().setVertices([this.vertices[8],this.vertices[9]]),new mt().setVertices([this.vertices[9],this.vertices[0]]),new mt().setVertices([this.vertices[0],this.vertices[2]]),new mt().setVertices([this.vertices[2],this.vertices[4]]),new mt().setVertices([this.vertices[4],this.vertices[6]]),new mt().setVertices([this.vertices[6],this.vertices[8]]),new mt().setVertices([this.vertices[8],this.vertices[0]]),new mt().setVertices([this.vertices[1],this.vertices[3]]),new mt().setVertices([this.vertices[3],this.vertices[5]]),new mt().setVertices([this.vertices[5],this.vertices[7]]),new mt().setVertices([this.vertices[7],this.vertices[9]]),new mt().setVertices([this.vertices[9],this.vertices[1]]),new mt().setVertices([this.vertices[10],this.vertices[0]]),new mt().setVertices([this.vertices[10],this.vertices[2]]),new mt().setVertices([this.vertices[10],this.vertices[4]]),new mt().setVertices([this.vertices[10],this.vertices[6]]),new mt().setVertices([this.vertices[10],this.vertices[8]]),new mt().setVertices([this.vertices[11],this.vertices[1]]),new mt().setVertices([this.vertices[11],this.vertices[3]]),new mt().setVertices([this.vertices[11],this.vertices[5]]),new mt().setVertices([this.vertices[11],this.vertices[7]]),new mt().setVertices([this.vertices[11],this.vertices[9]])],this.faces=[new Ct().setVertices([this.vertices[0],this.vertices[1],this.vertices[2]]),new Ct().setVertices([this.vertices[1],this.vertices[2],this.vertices[3]]),new Ct().setVertices([this.vertices[2],this.vertices[3],this.vertices[4]]),new Ct().setVertices([this.vertices[3],this.vertices[4],this.vertices[5]]),new Ct().setVertices([this.vertices[4],this.vertices[5],this.vertices[6]]),new Ct().setVertices([this.vertices[5],this.vertices[6],this.vertices[7]]),new Ct().setVertices([this.vertices[6],this.vertices[7],this.vertices[8]]),new Ct().setVertices([this.vertices[7],this.vertices[8],this.vertices[9]]),new Ct().setVertices([this.vertices[8],this.vertices[9],this.vertices[0]]),new Ct().setVertices([this.vertices[9],this.vertices[0],this.vertices[1]]),new Ct().setVertices([this.vertices[10],this.vertices[0],this.vertices[2]]),new Ct().setVertices([this.vertices[10],this.vertices[2],this.vertices[4]]),new Ct().setVertices([this.vertices[10],this.vertices[4],this.vertices[6]]),new Ct().setVertices([this.vertices[10],this.vertices[6],this.vertices[8]]),new Ct().setVertices([this.vertices[10],this.vertices[8],this.vertices[0]]),new Ct().setVertices([this.vertices[11],this.vertices[1],this.vertices[3]]),new Ct().setVertices([this.vertices[11],this.vertices[3],this.vertices[5]]),new Ct().setVertices([this.vertices[11],this.vertices[5],this.vertices[7]]),new Ct().setVertices([this.vertices[11],this.vertices[7],this.vertices[9]]),new Ct().setVertices([this.vertices[11],this.vertices[9],this.vertices[1]])]}}function Nf(){let s=new Bf;ma.set(s)}function Gf(s){let e,t,n,i,r,o;const a=s[3].default,l=Rt(a,s,s[2],null);return{c(){e=ft("label"),t=ft("input"),n=nt(),l&&l.c(),this.h()},l(c){e=ht(c,"LABEL",{title:!0,class:!0});var u=dt(e);t=ht(u,"INPUT",{type:!0,class:!0}),n=it(u),l&&l.l(u),u.forEach(we),this.h()},h(){Ge(t,"type","checkbox"),Ge(t,"class","cursor-pointer hidden"),Ge(e,"title",s[1]),Ge(e,"class","bg-zinc-400 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 cursor-pointer select-none rounded-lg p-3.5"),Is(e,"!bg-blue-500",s[0]),Is(e,"!text-zinc-100",s[0])},m(c,u){Ve(c,e,u),gt(e,t),t.checked=s[0],gt(e,n),l&&l.m(e,null),i=!0,r||(o=fn(t,"change",s[4]),r=!0)},p(c,[u]){u&1&&(t.checked=c[0]),l&&l.p&&(!i||u&4)&&It(l,a,c,c[2],i?Ot(a,c[2],u,null):Ut(c[2]),null),(!i||u&2)&&Ge(e,"title",c[1]),(!i||u&1)&&Is(e,"!bg-blue-500",c[0]),(!i||u&1)&&Is(e,"!text-zinc-100",c[0])},i(c){i||(fe(l,c),i=!0)},o(c){de(l,c),i=!1},d(c){c&&we(e),l&&l.d(c),r=!1,o()}}}function Vf(s,e,t){let{$$slots:n={},$$scope:i}=e,{checked:r}=e,{title:o}=e;function a(){r=this.checked,t(0,r)}return s.$$set=l=>{"checked"in l&&t(0,r=l.checked),"title"in l&&t(1,o=l.title),"$$scope"in l&&t(2,i=l.$$scope)},[r,o,i,n,a]}class Oa extends je{constructor(e){super(),Xe(this,e,Vf,Gf,We,{checked:0,title:1})}}function Wf(s){let e,t;const n=s[3].default,i=Rt(n,s,s[2],null);return{c(){e=ft("a"),i&&i.c(),this.h()},l(r){e=ht(r,"A",{title:!0,href:!0,class:!0});var o=dt(e);i&&i.l(o),o.forEach(we),this.h()},h(){Ge(e,"title",s[0]),Ge(e,"href",s[1]),Ge(e,"class","bg-zinc-400 dark:bg-zinc-800 hover:!bg-blue-500 text-zinc-900 dark:text-zinc-100 hover:!text-zinc-100 cursor-pointer select-none rounded-lg p-3.5")},m(r,o){Ve(r,e,o),i&&i.m(e,null),t=!0},p(r,[o]){i&&i.p&&(!t||o&4)&&It(i,n,r,r[2],t?Ot(n,r[2],o,null):Ut(r[2]),null),(!t||o&1)&&Ge(e,"title",r[0]),(!t||o&2)&&Ge(e,"href",r[1])},i(r){t||(fe(i,r),t=!0)},o(r){de(i,r),t=!1},d(r){r&&we(e),i&&i.d(r)}}}function Hf(s,e,t){let{$$slots:n={},$$scope:i}=e,{title:r}=e,{href:o}=e;return s.$$set=a=>{"title"in a&&t(0,r=a.title),"href"in a&&t(1,o=a.href),"$$scope"in a&&t(2,i=a.$$scope)},[r,o,i,n]}class jf extends je{constructor(e){super(),Xe(this,e,Hf,Wf,We,{title:0,href:1})}}function Xf(s){let e,t='<path fill="currentColor" d="M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44c.91-1.29.4-3.7-2.18-3.7c-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41c.7 1.15 1.11 3.3.03 4.9c-1.2 1.77-2.35 2.31-2.97 3.45c-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s[0]],i={};for(let r=0;r<n.length;r+=1)i=ln(i,n[r]);return{c(){e=ds("svg"),this.h()},l(r){e=ms(r,"svg",{viewBox:!0,width:!0,height:!0});var o=dt(e);o.forEach(we),this.h()},h(){qn(e,i)},m(r,o){Ve(r,e,o),e.innerHTML=t},p(r,[o]){qn(e,i=ps(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},o&1&&r[0]]))},i:_t,o:_t,d(r){r&&we(e)}}}function qf(s,e,t){return s.$$set=n=>{t(0,e=ln(ln({},e),Yn(n)))},e=Yn(e),[e]}class Yf extends je{constructor(e){super(),Xe(this,e,qf,Xf,We,{})}}function Zf(s){let e,t='<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 16h4v4"/><path d="M19.458 11.042c.86-2.366.722-4.58-.6-5.9c-2.272-2.274-7.185-1.045-10.973 2.743c-3.788 3.788-5.017 8.701-2.744 10.974c2.227 2.226 6.987 1.093 10.74-2.515"/></g>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s[0]],i={};for(let r=0;r<n.length;r+=1)i=ln(i,n[r]);return{c(){e=ds("svg"),this.h()},l(r){e=ms(r,"svg",{viewBox:!0,width:!0,height:!0});var o=dt(e);o.forEach(we),this.h()},h(){qn(e,i)},m(r,o){Ve(r,e,o),e.innerHTML=t},p(r,[o]){qn(e,i=ps(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},o&1&&r[0]]))},i:_t,o:_t,d(r){r&&we(e)}}}function Kf(s,e,t){return s.$$set=n=>{t(0,e=ln(ln({},e),Yn(n)))},e=Yn(e),[e]}class Jf extends je{constructor(e){super(),Xe(this,e,Kf,Zf,We,{})}}function Qf(s){let e,t='<path fill="currentColor" d="m12 2l4 4h-3v7.85l6.53 3.76L21 15.03l1.5 5.47l-5.5 1.46l1.53-2.61L12 15.58l-6.53 3.77L7 21.96L1.5 20.5L3 15.03l1.47 2.58L11 13.85V6H8l4-4Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s[0]],i={};for(let r=0;r<n.length;r+=1)i=ln(i,n[r]);return{c(){e=ds("svg"),this.h()},l(r){e=ms(r,"svg",{viewBox:!0,width:!0,height:!0});var o=dt(e);o.forEach(we),this.h()},h(){qn(e,i)},m(r,o){Ve(r,e,o),e.innerHTML=t},p(r,[o]){qn(e,i=ps(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},o&1&&r[0]]))},i:_t,o:_t,d(r){r&&we(e)}}}function $f(s,e,t){return s.$$set=n=>{t(0,e=ln(ln({},e),Yn(n)))},e=Yn(e),[e]}class eh extends je{constructor(e){super(),Xe(this,e,$f,Qf,We,{})}}function th(s){let e,t='<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 18h6m-5 4h4m1.09-8c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8A6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s[0]],i={};for(let r=0;r<n.length;r+=1)i=ln(i,n[r]);return{c(){e=ds("svg"),this.h()},l(r){e=ms(r,"svg",{viewBox:!0,width:!0,height:!0});var o=dt(e);o.forEach(we),this.h()},h(){qn(e,i)},m(r,o){Ve(r,e,o),e.innerHTML=t},p(r,[o]){qn(e,i=ps(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},o&1&&r[0]]))},i:_t,o:_t,d(r){r&&we(e)}}}function nh(s,e,t){return s.$$set=n=>{t(0,e=ln(ln({},e),Yn(n)))},e=Yn(e),[e]}class ih extends je{constructor(e){super(),Xe(this,e,nh,th,We,{})}}function rh(s){let e,t;return e=new Yf({}),{c(){Ee(e.$$.fragment)},l(n){Ce(e.$$.fragment,n)},m(n,i){De(e,n,i),t=!0},i(n){t||(fe(e.$$.fragment,n),t=!0)},o(n){de(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function sh(s){let e,t;return e=new Jf({}),{c(){Ee(e.$$.fragment)},l(n){Ce(e.$$.fragment,n)},m(n,i){De(e,n,i),t=!0},i(n){t||(fe(e.$$.fragment,n),t=!0)},o(n){de(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function ah(s){let e,t;return e=new eh({}),{c(){Ee(e.$$.fragment)},l(n){Ce(e.$$.fragment,n)},m(n,i){De(e,n,i),t=!0},i(n){t||(fe(e.$$.fragment,n),t=!0)},o(n){de(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function oh(s){let e,t;return e=new ih({}),{c(){Ee(e.$$.fragment)},l(n){Ce(e.$$.fragment,n)},m(n,i){De(e,n,i),t=!0},i(n){t||(fe(e.$$.fragment,n),t=!0)},o(n){de(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function lh(s){let e,t,n,i,r,o,a,l,c,u,f,h;t=new jf({props:{href:"https://github.com/geodesicraft",title:"About",$$slots:{default:[rh]},$$scope:{ctx:s}}});function d(b){s[1](b)}let _={title:"Auto Rotate",$$slots:{default:[sh]},$$scope:{ctx:s}};s[0].autoRotate!==void 0&&(_.checked=s[0].autoRotate),i=new Oa({props:_}),Lt.push(()=>zt(i,"checked",d));function p(b){s[2](b)}let m={title:"Axis Overlay",$$slots:{default:[ah]},$$scope:{ctx:s}};s[0].axisOverlay!==void 0&&(m.checked=s[0].axisOverlay),a=new Oa({props:m}),Lt.push(()=>zt(a,"checked",p));function g(b){s[3](b)}let x={title:"Light Mode",$$slots:{default:[oh]},$$scope:{ctx:s}};return s[0].lightMode!==void 0&&(x.checked=s[0].lightMode),u=new Oa({props:x}),Lt.push(()=>zt(u,"checked",g)),{c(){e=ft("div"),Ee(t.$$.fragment),n=nt(),Ee(i.$$.fragment),o=nt(),Ee(a.$$.fragment),c=nt(),Ee(u.$$.fragment),this.h()},l(b){e=ht(b,"DIV",{class:!0});var v=dt(e);Ce(t.$$.fragment,v),n=it(v),Ce(i.$$.fragment,v),o=it(v),Ce(a.$$.fragment,v),c=it(v),Ce(u.$$.fragment,v),v.forEach(we),this.h()},h(){Ge(e,"class","bg-zinc-300 dark:bg-zinc-700 py-3.5 flex flex-wrap justify-around")},m(b,v){Ve(b,e,v),De(t,e,null),gt(e,n),De(i,e,null),gt(e,o),De(a,e,null),gt(e,c),De(u,e,null),h=!0},p(b,[v]){const y={};v&16&&(y.$$scope={dirty:v,ctx:b}),t.$set(y);const M={};v&16&&(M.$$scope={dirty:v,ctx:b}),!r&&v&1&&(r=!0,M.checked=b[0].autoRotate,Bt(()=>r=!1)),i.$set(M);const L={};v&16&&(L.$$scope={dirty:v,ctx:b}),!l&&v&1&&(l=!0,L.checked=b[0].axisOverlay,Bt(()=>l=!1)),a.$set(L);const w={};v&16&&(w.$$scope={dirty:v,ctx:b}),!f&&v&1&&(f=!0,w.checked=b[0].lightMode,Bt(()=>f=!1)),u.$set(w)},i(b){h||(fe(t.$$.fragment,b),fe(i.$$.fragment,b),fe(a.$$.fragment,b),fe(u.$$.fragment,b),h=!0)},o(b){de(t.$$.fragment,b),de(i.$$.fragment,b),de(a.$$.fragment,b),de(u.$$.fragment,b),h=!1},d(b){b&&we(e),Le(t),Le(i),Le(a),Le(u)}}}function ch(s,e,t){let n;pt(s,Li,a=>t(0,n=a));function i(a){s.$$.not_equal(n.autoRotate,a)&&(n.autoRotate=a,Li.set(n))}function r(a){s.$$.not_equal(n.axisOverlay,a)&&(n.axisOverlay=a,Li.set(n))}function o(a){s.$$.not_equal(n.lightMode,a)&&(n.lightMode=a,Li.set(n))}return[n,i,r,o]}class Cu extends je{constructor(e){super(),Xe(this,e,ch,lh,We,{})}}function uh(s){let e,t,n,i,r,o,a,l,c,u;const f=s[6].default,h=Rt(f,s,s[5],null);return{c(){e=ft("label"),t=ft("div"),h&&h.c(),n=nt(),i=ft("input"),o=nt(),a=ft("input"),this.h()},l(d){e=ht(d,"LABEL",{class:!0});var _=dt(e);t=ht(_,"DIV",{class:!0});var p=dt(t);h&&h.l(p),n=it(p),i=ht(p,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),p.forEach(we),o=it(_),a=ht(_,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),_.forEach(we),this.h()},h(){Ge(i,"type","number"),Ge(i,"min",s[1]),Ge(i,"max",s[2]),Ge(i,"step",s[3]),Ge(i,"class",r="w-20 p-1.5 rounded font-mono "+s[4]),Ge(t,"class","flex justify-between items-center gap-4"),Ge(a,"type","range"),Ge(a,"min",s[1]),Ge(a,"max",s[2]),Ge(a,"step",s[3]),Ge(a,"class","cursor-pointer"),Ge(e,"class","grid p-3 gap-4 tracking-wide text-zinc-900 dark:text-zinc-100")},m(d,_){Ve(d,e,_),gt(e,t),h&&h.m(t,null),gt(t,n),gt(t,i),gr(i,s[0]),gt(e,o),gt(e,a),gr(a,s[0]),l=!0,c||(u=[fn(i,"input",s[7]),fn(a,"change",s[8]),fn(a,"input",s[8])],c=!0)},p(d,[_]){h&&h.p&&(!l||_&32)&&It(h,f,d,d[5],l?Ot(f,d[5],_,null):Ut(d[5]),null),(!l||_&2)&&Ge(i,"min",d[1]),(!l||_&4)&&Ge(i,"max",d[2]),(!l||_&8)&&Ge(i,"step",d[3]),(!l||_&16&&r!==(r="w-20 p-1.5 rounded font-mono "+d[4]))&&Ge(i,"class",r),_&1&&wo(i.value)!==d[0]&&gr(i,d[0]),(!l||_&2)&&Ge(a,"min",d[1]),(!l||_&4)&&Ge(a,"max",d[2]),(!l||_&8)&&Ge(a,"step",d[3]),_&1&&gr(a,d[0])},i(d){l||(fe(h,d),l=!0)},o(d){de(h,d),l=!1},d(d){d&&we(e),h&&h.d(d),c=!1,Tu(u)}}}function fh(s,e,t){let{$$slots:n={},$$scope:i}=e,{value:r}=e,{min:o}=e,{max:a}=e,{step:l}=e,{numberClasses:c}=e;function u(){r=wo(this.value),t(0,r)}function f(){r=wo(this.value),t(0,r)}return s.$$set=h=>{"value"in h&&t(0,r=h.value),"min"in h&&t(1,o=h.min),"max"in h&&t(2,a=h.max),"step"in h&&t(3,l=h.step),"numberClasses"in h&&t(4,c=h.numberClasses),"$$scope"in h&&t(5,i=h.$$scope)},[r,o,a,l,c,i,n,u,f]}class Du extends je{constructor(e){super(),Xe(this,e,fh,uh,We,{value:0,min:1,max:2,step:3,numberClasses:4})}}const hh=function(s){return Object.entries(s).map(([e,t])=>({id:e,title:t.title,min:t.min,max:t.max,step:t.step}))};function xl(s,e,t){const n=s.slice();return n[3]=e[t],n[4]=e,n[5]=t,n}function dh(s){let e=s[3].title+"",t;return{c(){t=No(e)},l(n){t=Go(n,e)},m(n,i){Ve(n,t,i)},p:_t,d(n){n&&we(t)}}}function wl(s,e){let t,n,i,r,o;function a(c){e[2](c,e[3])}let l={min:e[3].min,max:e[3].max,step:e[3].step,numberClasses:"bg-zinc-300 dark:bg-zinc-600",$$slots:{default:[dh]},$$scope:{ctx:e}};return e[0][e[3].id]!==void 0&&(l.value=e[0][e[3].id]),n=new Du({props:l}),Lt.push(()=>zt(n,"value",a)),{key:s,first:null,c(){t=ft("div"),Ee(n.$$.fragment),r=nt(),this.h()},l(c){t=ht(c,"DIV",{class:!0});var u=dt(t);Ce(n.$$.fragment,u),r=it(u),u.forEach(we),this.h()},h(){Ge(t,"class","bg-zinc-400 dark:bg-zinc-800 rounded-lg"),this.first=t},m(c,u){Ve(c,t,u),De(n,t,null),gt(t,r),o=!0},p(c,u){e=c;const f={};u&64&&(f.$$scope={dirty:u,ctx:e}),!i&&u&3&&(i=!0,f.value=e[0][e[3].id],Bt(()=>i=!1)),n.$set(f)},i(c){o||(fe(n.$$.fragment,c),o=!0)},o(c){de(n.$$.fragment,c),o=!1},d(c){c&&we(t),Le(n)}}}function mh(s){let e,t=[],n=new Map,i,r=s[1];const o=a=>a[3].id;for(let a=0;a<r.length;a+=1){let l=xl(s,r,a),c=o(l);n.set(c,t[a]=wl(c,l))}return{c(){e=ft("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=ht(a,"DIV",{class:!0});var l=dt(e);for(let c=0;c<t.length;c+=1)t[c].l(l);l.forEach(we),this.h()},h(){Ge(e,"class","bg-zinc-300 dark:bg-zinc-700 overflow-auto flex flex-col gap-3 p-3")},m(a,l){Ve(a,e,l);for(let c=0;c<t.length;c+=1)t[c].m(e,null);i=!0},p(a,[l]){l&3&&(r=a[1],Ar(),t=Au(t,l,o,1,a,r,n,e,Af,wl,null,xl),Er())},i(a){if(!i){for(let l=0;l<r.length;l+=1)fe(t[l]);i=!0}},o(a){for(let l=0;l<t.length;l+=1)de(t[l]);i=!1},d(a){a&&we(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function ph(s,e,t){let n;pt(s,ki,o=>t(0,n=o));let i=hh(ni);function r(o,a){s.$$.not_equal(n[a.id],o)&&(n[a.id]=o,ki.set(n))}return[n,i,r]}class gh extends je{constructor(e){super(),Xe(this,e,ph,mh,We,{})}}function vh(s){let e,t,n,i,r;return t=new Cu({}),i=new gh({}),{c(){e=ft("div"),Ee(t.$$.fragment),n=nt(),Ee(i.$$.fragment),this.h()},l(o){e=ht(o,"DIV",{class:!0});var a=dt(e);Ce(t.$$.fragment,a),n=it(a),Ce(i.$$.fragment,a),a.forEach(we),this.h()},h(){Ge(e,"class","h-full grid grid-rows-[auto_1fr] w-72 divide-y-4 divide-zinc-100 dark:divide-zinc-600")},m(o,a){Ve(o,e,a),De(t,e,null),gt(e,n),De(i,e,null),r=!0},p:_t,i(o){r||(fe(t.$$.fragment,o),fe(i.$$.fragment,o),r=!0)},o(o){de(t.$$.fragment,o),de(i.$$.fragment,o),r=!1},d(o){o&&we(e),Le(t),Le(i)}}}class _h extends je{constructor(e){super(),Xe(this,e,null,vh,We,{})}}function bh(s){let e,t,n;return t=new Cu({}),{c(){e=ft("div"),Ee(t.$$.fragment)},l(i){e=ht(i,"DIV",{});var r=dt(e);Ce(t.$$.fragment,r),r.forEach(we)},m(i,r){Ve(i,e,r),De(t,e,null),n=!0},p:_t,i(i){n||(fe(t.$$.fragment,i),n=!0)},o(i){de(t.$$.fragment,i),n=!1},d(i){i&&we(e),Le(t)}}}class xh extends je{constructor(e){super(),Xe(this,e,null,bh,We,{})}}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wo="148",Qi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wh=0,yl=1,yh=2,Lu=1,Pu=2,Jr=3,bi=0,Sn=1,Dr=2,Us=3,_i=0,br=1,Sl=2,Ml=3,Tl=4,Sh=5,pr=100,Mh=101,Th=102,Al=103,El=104,Ah=200,Eh=201,Ch=202,Dh=203,Ru=204,Iu=205,Lh=206,Ph=207,Rh=208,Ih=209,Uh=210,Oh=0,Fh=1,kh=2,yo=3,zh=4,Bh=5,Nh=6,Gh=7,Ho=0,Vh=1,Wh=2,Xn=0,Hh=1,jh=2,Xh=3,Uu=4,qh=5,Ou=300,yr=301,Sr=302,So=303,Mo=304,pa=306,To=1e3,kn=1001,Ao=1002,an=1003,Cl=1004,Fa=1005,dn=1006,Yh=1007,rs=1008,zi=1009,Zh=1010,Kh=1011,Fu=1012,Jh=1013,Pi=1014,Ri=1015,ss=1016,Qh=1017,$h=1018,xr=1020,ed=1021,td=1022,zn=1023,nd=1024,id=1025,Ui=1026,Mr=1027,rd=1028,sd=1029,ad=1030,od=1031,ld=1033,ka=33776,za=33777,Ba=33778,Na=33779,Dl=35840,Ll=35841,Pl=35842,Rl=35843,cd=36196,Il=37492,Ul=37496,Ol=37808,Fl=37809,kl=37810,zl=37811,Bl=37812,Nl=37813,Gl=37814,Vl=37815,Wl=37816,Hl=37817,jl=37818,Xl=37819,ql=37820,Yl=37821,Zl=36492,xi=3e3,xt=3001,ud=3200,ku=3201,jo=0,fd=1,Hn="srgb",as="srgb-linear",Ga=7680,hd=519,Eo=35044,Kl="300 es",Co=1035;class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jl=1234567;const $r=Math.PI/180,ua=180/Math.PI;function si(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[s&255]+Qt[s>>8&255]+Qt[s>>16&255]+Qt[s>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function $t(s,e,t){return Math.max(e,Math.min(t,s))}function Xo(s,e){return(s%e+e)%e}function dd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function md(s,e,t){return s!==e?(t-s)/(e-s):0}function es(s,e,t){return(1-t)*s+t*e}function pd(s,e,t,n){return es(s,e,1-Math.exp(-t*n))}function gd(s,e=1){return e-Math.abs(Xo(s,e*2)-e)}function vd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function _d(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function bd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function xd(s,e){return s+Math.random()*(e-s)}function wd(s){return s*(.5-Math.random())}function yd(s){s!==void 0&&(Jl=s);let e=Jl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sd(s){return s*$r}function Md(s){return s*ua}function Do(s){return(s&s-1)===0&&s!==0}function Td(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function fa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ad(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),d=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*f,l*h,a*c);break;case"YZY":s.set(l*h,a*u,l*f,a*c);break;case"ZXZ":s.set(l*f,l*h,a*u,a*c);break;case"XZX":s.set(a*u,l*_,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*_,a*c);break;case"ZYZ":s.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ri(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function bt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ed=Object.freeze({__proto__:null,DEG2RAD:$r,RAD2DEG:ua,generateUUID:si,clamp:$t,euclideanModulo:Xo,mapLinear:dd,inverseLerp:md,lerp:es,damp:pd,pingpong:gd,smoothstep:vd,smootherstep:_d,randInt:bd,randFloat:xd,randFloatSpread:wd,seededRandom:yd,degToRad:Sd,radToDeg:Md,isPowerOfTwo:Do,ceilPowerOfTwo:Td,floorPowerOfTwo:fa,setQuaternionFromProperEuler:Ad,normalize:bt,denormalize:ri});class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pn{constructor(){pn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],p=i[0],m=i[3],g=i[6],x=i[1],b=i[4],v=i[7],y=i[2],M=i[5],L=i[8];return r[0]=o*p+a*x+l*y,r[3]=o*m+a*b+l*M,r[6]=o*g+a*v+l*L,r[1]=c*p+u*x+f*y,r[4]=c*m+u*b+f*M,r[7]=c*g+u*v+f*L,r[2]=h*p+d*x+_*y,r[5]=h*m+d*b+_*M,r[8]=h*g+d*v+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,_=t*f+n*h+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=f*p,e[1]=(i*c-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=h*p,e[4]=(u*t-i*l)*p,e[5]=(i*r-a*t)*p,e[6]=d*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Va.makeScale(e,t)),this}rotate(e){return this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new pn;function zu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function os(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Oi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Wa={[Hn]:{[as]:Oi},[as]:{[Hn]:oa}},nn={legacyMode:!0,get workingColorSpace(){return as},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Wa[e]&&Wa[e][t]!==void 0){const n=Wa[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kt={r:0,g:0,b:0},Rn={h:0,s:0,l:0},Os={h:0,s:0,l:0};function Ha(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Fs(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=nn.workingColorSpace){return this.r=e,this.g=t,this.b=n,nn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=nn.workingColorSpace){if(e=Xo(e,1),t=$t(t,0,1),n=$t(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ha(o,r,e+1/3),this.g=Ha(o,r,e),this.b=Ha(o,r,e-1/3)}return nn.toWorkingColorSpace(this,i),this}setStyle(e,t=Hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,nn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,nn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,nn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,nn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Hn){const n=Bu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return nn.fromWorkingColorSpace(Fs(this,kt),e),$t(kt.r*255,0,255)<<16^$t(kt.g*255,0,255)<<8^$t(kt.b*255,0,255)<<0}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nn.workingColorSpace){nn.fromWorkingColorSpace(Fs(this,kt),t);const n=kt.r,i=kt.g,r=kt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nn.workingColorSpace){return nn.fromWorkingColorSpace(Fs(this,kt),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Hn){return nn.fromWorkingColorSpace(Fs(this,kt),e),e!==Hn?`color(${e} ${kt.r} ${kt.g} ${kt.b})`:`rgb(${kt.r*255|0},${kt.g*255|0},${kt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Rn),Rn.h+=e,Rn.s+=t,Rn.l+=n,this.setHSL(Rn.h,Rn.s,Rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(Os);const n=es(Rn.h,Os.h,t),i=es(Rn.s,Os.s,t),r=es(Rn.l,Os.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}rt.NAMES=Bu;let er;class Nu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=os("canvas")),er.width=e.width,er.height=e.height;const n=er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Gu{constructor(e=null){this.isSource=!0,this.uuid=si(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ja(i[o].image)):r.push(ja(i[o]))}else r=ja(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ja(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cd=0;class on extends Ni{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,n=kn,i=kn,r=dn,o=rs,a=zn,l=zi,c=on.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=si(),this.name="",this.source=new Gu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ou)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case To:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case To:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Ou;on.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,i=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],p=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,v=(d+1)/2,y=(g+1)/2,M=(u+h)/4,L=(f+p)/4,w=(_+m)/4;return b>v&&b>y?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=M/n,r=L/n):v>y?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=M/i,r=w/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=L/r,i=w/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-_)*(m-_)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(f-p)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wi extends Ni{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new on(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:dn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vu extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dd extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=r[o+0],d=r[o+1],_=r[o+2],p=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=p;return}if(f!==p||l!==h||c!==d||u!==_){let m=1-a;const g=l*h+c*d+u*_+f*p,x=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const y=Math.sqrt(b),M=Math.atan2(y,g*x);m=Math.sin(m*M)/y,a=Math.sin(a*M)/y}const v=a*x;if(l=l*m+h*v,c=c*m+d*v,u=u*m+_*v,f=f*m+p*v,m===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[o],h=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-a*d,e[t+2]=c*_+u*d+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(r/2),h=l(n/2),d=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-r*i,f=l*i+r*n-o*t,h=-r*t-o*n-a*i;return this.x=c*l+h*-r+u*-a-f*-o,this.y=u*l+h*-o+f*-r-c*-a,this.z=f*l+h*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xa.copy(this).projectOnVector(e),this.sub(Xa)}reflect(e){return this.sub(Xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xa=new K,Ql=new Bi;class oi{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Si.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Si)}else n.boundingBox===null&&n.computeBoundingBox(),qa.copy(n.boundingBox),qa.applyMatrix4(e.matrixWorld),this.union(qa);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),ks.subVectors(this.max,Wr),tr.subVectors(e.a,Wr),nr.subVectors(e.b,Wr),ir.subVectors(e.c,Wr),hi.subVectors(nr,tr),di.subVectors(ir,nr),Mi.subVectors(tr,ir);let t=[0,-hi.z,hi.y,0,-di.z,di.y,0,-Mi.z,Mi.y,hi.z,0,-hi.x,di.z,0,-di.x,Mi.z,0,-Mi.x,-hi.y,hi.x,0,-di.y,di.x,0,-Mi.y,Mi.x,0];return!Ya(t,tr,nr,ir,ks)||(t=[1,0,0,0,1,0,0,0,1],!Ya(t,tr,nr,ir,ks))?!1:(zs.crossVectors(hi,di),t=[zs.x,zs.y,zs.z],Ya(t,tr,nr,ir,ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Si.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new K,new K,new K,new K,new K,new K,new K,new K],Si=new K,qa=new oi,tr=new K,nr=new K,ir=new K,hi=new K,di=new K,Mi=new K,Wr=new K,ks=new K,zs=new K,Ti=new K;function Ya(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ti.fromArray(s,r);const a=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ld=new oi,Hr=new K,Za=new K;class Gi{constructor(e=new K,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ld.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Hr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(Za)),this.expandByPoint(Hr.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new K,Ka=new K,Bs=new K,mi=new K,Ja=new K,Ns=new K,Qa=new K;class qo{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.direction).multiplyScalar(t).add(this.origin),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ka.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Ka);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Bs),a=mi.dot(this.direction),l=-mi.dot(Bs),c=mi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const p=1/u;f*=p,h*=p,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Bs).multiplyScalar(h).add(Ka),d}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const n=Qn.dot(this.direction),i=Qn.dot(Qn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,i,r){Ja.subVectors(t,e),Ns.subVectors(n,e),Qa.crossVectors(Ja,Ns);let o=this.direction.dot(Qa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(Ns.crossVectors(mi,Ns));if(l<0)return null;const c=a*this.direction.dot(Ja.cross(mi));if(c<0||l+c>o)return null;const u=-a*mi.dot(Qa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,l,c,u,f,h,d,_,p,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=_,g[11]=p,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/rr.setFromMatrixColumn(e,0).length(),r=1/rr.setFromMatrixColumn(e,1).length(),o=1/rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,_=a*u,p=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-p*c,t[9]=-a*l,t[2]=p-h*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,p=c*f;t[0]=h+p*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=p+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,p=c*f;t[0]=h-p*a,t[4]=-o*f,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=p-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,_=a*u,p=a*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,_=a*l,p=a*c;t[0]=l*u,t[4]=p-h*f,t[8]=_*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-p*f}else if(e.order==="XZY"){const h=o*l,d=o*c,_=a*l,p=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=o*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=a*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pd,e,Rd)}lookAt(e,t,n){const i=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),pi.crossVectors(n,xn),pi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),pi.crossVectors(n,xn)),pi.normalize(),Gs.crossVectors(xn,pi),i[0]=pi.x,i[4]=Gs.x,i[8]=xn.x,i[1]=pi.y,i[5]=Gs.y,i[9]=xn.y,i[2]=pi.z,i[6]=Gs.z,i[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],p=n[6],m=n[10],g=n[14],x=n[3],b=n[7],v=n[11],y=n[15],M=i[0],L=i[4],w=i[8],A=i[12],R=i[1],B=i[5],U=i[9],C=i[13],I=i[2],D=i[6],H=i[10],te=i[14],J=i[3],V=i[7],W=i[11],S=i[15];return r[0]=o*M+a*R+l*I+c*J,r[4]=o*L+a*B+l*D+c*V,r[8]=o*w+a*U+l*H+c*W,r[12]=o*A+a*C+l*te+c*S,r[1]=u*M+f*R+h*I+d*J,r[5]=u*L+f*B+h*D+d*V,r[9]=u*w+f*U+h*H+d*W,r[13]=u*A+f*C+h*te+d*S,r[2]=_*M+p*R+m*I+g*J,r[6]=_*L+p*B+m*D+g*V,r[10]=_*w+p*U+m*H+g*W,r[14]=_*A+p*C+m*te+g*S,r[3]=x*M+b*R+v*I+y*J,r[7]=x*L+b*B+v*D+y*V,r[11]=x*w+b*U+v*H+y*W,r[15]=x*A+b*C+v*te+y*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],p=e[7],m=e[11],g=e[15];return _*(+r*l*f-i*c*f-r*a*h+n*c*h+i*a*d-n*l*d)+p*(+t*l*d-t*c*h+r*o*h-i*o*d+i*c*u-r*l*u)+m*(+t*c*f-t*a*d-r*o*f+n*o*d+r*a*u-n*c*u)+g*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],p=e[13],m=e[14],g=e[15],x=f*m*c-p*h*c+p*l*d-a*m*d-f*l*g+a*h*g,b=_*h*c-u*m*c-_*l*d+o*m*d+u*l*g-o*h*g,v=u*p*c-_*f*c+_*a*d-o*p*d-u*a*g+o*f*g,y=_*f*l-u*p*l-_*a*h+o*p*h+u*a*m-o*f*m,M=t*x+n*b+i*v+r*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/M;return e[0]=x*L,e[1]=(p*h*r-f*m*r-p*i*d+n*m*d+f*i*g-n*h*g)*L,e[2]=(a*m*r-p*l*r+p*i*c-n*m*c-a*i*g+n*l*g)*L,e[3]=(f*l*r-a*h*r-f*i*c+n*h*c+a*i*d-n*l*d)*L,e[4]=b*L,e[5]=(u*m*r-_*h*r+_*i*d-t*m*d-u*i*g+t*h*g)*L,e[6]=(_*l*r-o*m*r-_*i*c+t*m*c+o*i*g-t*l*g)*L,e[7]=(o*h*r-u*l*r+u*i*c-t*h*c-o*i*d+t*l*d)*L,e[8]=v*L,e[9]=(_*f*r-u*p*r-_*n*d+t*p*d+u*n*g-t*f*g)*L,e[10]=(o*p*r-_*a*r+_*n*c-t*p*c-o*n*g+t*a*g)*L,e[11]=(u*a*r-o*f*r-u*n*c+t*f*c+o*n*d-t*a*d)*L,e[12]=y*L,e[13]=(u*p*i-_*f*i+_*n*h-t*p*h-u*n*m+t*f*m)*L,e[14]=(_*a*i-o*p*i-_*n*l+t*p*l+o*n*m-t*a*m)*L,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,_=r*f,p=o*u,m=o*f,g=a*f,x=l*c,b=l*u,v=l*f,y=n.x,M=n.y,L=n.z;return i[0]=(1-(p+g))*y,i[1]=(d+v)*y,i[2]=(_-b)*y,i[3]=0,i[4]=(d-v)*M,i[5]=(1-(h+g))*M,i[6]=(m+x)*M,i[7]=0,i[8]=(_+b)*L,i[9]=(m-x)*L,i[10]=(1-(h+p))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=rr.set(i[0],i[1],i[2]).length();const o=rr.set(i[4],i[5],i[6]).length(),a=rr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],In.copy(this);const c=1/r,u=1/o,f=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,t.setFromRotationMatrix(In),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-r),f=(t+e)*l,h=(n+i)*c,d=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rr=new K,In=new wt,Pd=new K(0,0,0),Rd=new K(1,1,1),pi=new K,Gs=new K,xn=new K,$l=new wt,ec=new Bi;class gs{constructor(e=0,t=0,n=0,i=gs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $l.makeRotationFromQuaternion(e),this.setFromRotationMatrix($l,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ec.setFromEuler(this),this.setFromQuaternion(ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}gs.DefaultOrder="XYZ";gs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Yo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Id=0;const tc=new K,sr=new Bi,$n=new wt,Vs=new K,jr=new K,Ud=new K,Od=new Bi,nc=new K(1,0,0),ic=new K(0,1,0),rc=new K(0,0,1),Fd={type:"added"},sc={type:"removed"};class At extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DefaultUp.clone();const e=new K,t=new gs,n=new Bi,i=new K(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new wt},normalMatrix:{value:new pn}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=At.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=At.DefaultMatrixWorldAutoUpdate,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(nc,e)}rotateY(e){return this.rotateOnAxis(ic,e)}rotateZ(e){return this.rotateOnAxis(rc,e)}translateOnAxis(e,t){return tc.copy(e).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nc,e)}translateY(e){return this.translateOnAxis(ic,e)}translateZ(e){return this.translateOnAxis(rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vs.copy(e):Vs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(jr,Vs,this.up):$n.lookAt(Vs,jr,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),sr.setFromRotationMatrix($n),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Fd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(sc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,Ud),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,Od,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}At.DefaultUp=new K(0,1,0);At.DefaultMatrixAutoUpdate=!0;At.DefaultMatrixWorldAutoUpdate=!0;const Un=new K,ei=new K,$a=new K,ti=new K,ar=new K,or=new K,ac=new K,eo=new K,to=new K,no=new K;class ii{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Un.subVectors(e,t),i.cross(Un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Un.subVectors(i,t),ei.subVectors(n,t),$a.subVectors(e,t);const o=Un.dot(Un),a=Un.dot(ei),l=Un.dot($a),c=ei.dot(ei),u=ei.dot($a),f=o*c-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ti),ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,ti),l.set(0,0),l.addScaledVector(r,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l}static isFrontFacing(e,t,n,i){return Un.subVectors(n,t),ei.subVectors(e,t),Un.cross(ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Un.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ii.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ar.subVectors(i,n),or.subVectors(r,n),eo.subVectors(e,n);const l=ar.dot(eo),c=or.dot(eo);if(l<=0&&c<=0)return t.copy(n);to.subVectors(e,i);const u=ar.dot(to),f=or.dot(to);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ar,o);no.subVectors(e,r);const d=ar.dot(no),_=or.dot(no);if(_>=0&&d<=_)return t.copy(r);const p=d*c-l*_;if(p<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(or,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return ac.subVectors(r,i),a=(f-u)/(f-u+(d-_)),t.copy(i).addScaledVector(ac,a);const g=1/(m+p+h);return o=p*g,a=h*g,t.copy(n).addScaledVector(ar,o).addScaledVector(or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let kd=0;class Vi extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=si(),this.name="",this.type="Material",this.blending=br,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ru,this.blendDst=Iu,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zo extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new K,Ws=new Ze;class Mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Eo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Wu extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hu extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Kt extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zd=0;const En=new wt,io=new At,lr=new K,wn=new oi,Xr=new oi,Ht=new K;class cn extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zu(e)?Hu:Wu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new pn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return io.lookAt(e),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(wn.min,Xr.min),wn.expandByPoint(Ht),Ht.addVectors(wn.max,Xr.max),wn.expandByPoint(Ht)):(wn.expandByPoint(Xr.min),wn.expandByPoint(Xr.max))}wn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ht.fromBufferAttribute(a,c),l&&(lr.fromBufferAttribute(e,c),Ht.add(lr)),i=Math.max(i,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new K,u[R]=new K;const f=new K,h=new K,d=new K,_=new Ze,p=new Ze,m=new Ze,g=new K,x=new K;function b(R,B,U){f.fromArray(i,R*3),h.fromArray(i,B*3),d.fromArray(i,U*3),_.fromArray(o,R*2),p.fromArray(o,B*2),m.fromArray(o,U*2),h.sub(f),d.sub(f),p.sub(_),m.sub(_);const C=1/(p.x*m.y-m.x*p.y);isFinite(C)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(C),x.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(C),c[R].add(g),c[B].add(g),c[U].add(g),u[R].add(x),u[B].add(x),u[U].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let R=0,B=v.length;R<B;++R){const U=v[R],C=U.start,I=U.count;for(let D=C,H=C+I;D<H;D+=3)b(n[D+0],n[D+1],n[D+2])}const y=new K,M=new K,L=new K,w=new K;function A(R){L.fromArray(r,R*3),w.copy(L);const B=c[R];y.copy(B),y.sub(L.multiplyScalar(L.dot(B))).normalize(),M.crossVectors(w,B);const C=M.dot(u[R])<0?-1:1;l[R*4]=y.x,l[R*4+1]=y.y,l[R*4+2]=y.z,l[R*4+3]=C}for(let R=0,B=v.length;R<B;++R){const U=v[R],C=U.start,I=U.count;for(let D=C,H=C+I;D<H;D+=3)A(n[D+0]),A(n[D+1]),A(n[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new K,r=new K,o=new K,a=new K,l=new K,c=new K,u=new K,f=new K;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),p=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*u;for(let g=0;g<u;g++)h[_++]=c[d++]}return new Mn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const oc=new wt,cr=new qo,ro=new Gi,qr=new K,Yr=new K,Zr=new K,so=new K,Hs=new K,js=new Ze,Xs=new Ze,qs=new Ze,ao=new K,Ys=new K;let en=class extends At{constructor(e=new cn,t=new Zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Hs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(so.fromBufferAttribute(f,e),o?Hs.addScaledVector(so,u):Hs.addScaledVector(so.sub(t),u))}t.add(Hs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),e.ray.intersectsSphere(ro)===!1)||(oc.copy(r).invert(),cr.copy(e.ray).applyMatrix4(oc),n.boundingBox!==null&&cr.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(i))for(let d=0,_=f.length;d<_;d++){const p=f[d],m=i[p.materialIndex],g=Math.max(p.start,h.start),x=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let b=g,v=x;b<v;b+=3){const y=a.getX(b),M=a.getX(b+1),L=a.getX(b+2);o=Zs(this,m,e,cr,c,u,y,M,L),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=d,m=_;p<m;p+=3){const g=a.getX(p),x=a.getX(p+1),b=a.getX(p+2);o=Zs(this,i,e,cr,c,u,g,x,b),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,_=f.length;d<_;d++){const p=f[d],m=i[p.materialIndex],g=Math.max(p.start,h.start),x=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let b=g,v=x;b<v;b+=3){const y=b,M=b+1,L=b+2;o=Zs(this,m,e,cr,c,u,y,M,L),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=d,m=_;p<m;p+=3){const g=p,x=p+1,b=p+2;o=Zs(this,i,e,cr,c,u,g,x,b),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}};function Bd(s,e,t,n,i,r,o,a){let l;if(e.side===Sn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===bi,a),l===null)return null;Ys.copy(a),Ys.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ys);return c<t.near||c>t.far?null:{distance:c,point:Ys.clone(),object:s}}function Zs(s,e,t,n,i,r,o,a,l){s.getVertexPosition(o,qr),s.getVertexPosition(a,Yr),s.getVertexPosition(l,Zr);const c=Bd(s,e,t,n,qr,Yr,Zr,ao);if(c){i&&(js.fromBufferAttribute(i,o),Xs.fromBufferAttribute(i,a),qs.fromBufferAttribute(i,l),c.uv=ii.getUV(ao,qr,Yr,Zr,js,Xs,qs,new Ze)),r&&(js.fromBufferAttribute(r,o),Xs.fromBufferAttribute(r,a),qs.fromBufferAttribute(r,l),c.uv2=ii.getUV(ao,qr,Yr,Zr,js,Xs,qs,new Ze));const u={a:o,b:a,c:l,normal:new K,materialIndex:0};ii.getNormal(qr,Yr,Zr,u.normal),c.face=u}return c}class vs extends cn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(f,2));function _(p,m,g,x,b,v,y,M,L,w,A){const R=v/L,B=y/w,U=v/2,C=y/2,I=M/2,D=L+1,H=w+1;let te=0,J=0;const V=new K;for(let W=0;W<H;W++){const S=W*B-C;for(let P=0;P<D;P++){const Q=P*R-U;V[p]=Q*x,V[m]=S*b,V[g]=I,c.push(V.x,V.y,V.z),V[p]=0,V[m]=0,V[g]=M>0?1:-1,u.push(V.x,V.y,V.z),f.push(P/L),f.push(1-W/w),te+=1}}for(let W=0;W<w;W++)for(let S=0;S<L;S++){const P=h+S+D*W,Q=h+S+D*(W+1),X=h+(S+1)+D*(W+1),q=h+(S+1)+D*W;l.push(P,Q,q),l.push(Q,X,q),J+=6}a.addGroup(d,J,A),d+=J,h+=te}}static fromJSON(e){return new vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Tr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function sn(s){const e={};for(let t=0;t<s.length;t++){const n=Tr(s[t]);for(const i in n)e[i]=n[i]}return e}function Nd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ju(s){return s.getRenderTarget()===null&&s.outputEncoding===xt?Hn:as}const _s={clone:Tr,merge:sn};var Gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gd,this.fragmentShader=Vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=Nd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ko extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}let yn=class extends Ko{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ua*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($r*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};const ur=-90,fr=1;class Wd extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new yn(ur,fr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new yn(ur,fr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new yn(ur,fr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new yn(ur,fr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new yn(ur,fr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new yn(ur,fr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Xn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Xu extends on{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:yr,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hd extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new vs(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:_i});r.uniforms.tEquirect.value=t;const o=new en(i,r),a=t.minFilter;return t.minFilter===rs&&(t.minFilter=dn),new Wd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const oo=new K,jd=new K,Xd=new pn;class Ei{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=oo.subVectors(n,t).cross(jd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(oo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xd.getNormalMatrix(e),i=this.coplanarPoint(oo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Gi,Ks=new K;class Jo{constructor(e=new Ei,t=new Ei,n=new Ei,i=new Ei,r=new Ei,o=new Ei){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],d=n[9],_=n[10],p=n[11],m=n[12],g=n[13],x=n[14],b=n[15];return t[0].setComponents(a-i,f-l,p-h,b-m).normalize(),t[1].setComponents(a+i,f+l,p+h,b+m).normalize(),t[2].setComponents(a+r,f+c,p+d,b+g).normalize(),t[3].setComponents(a-r,f-c,p-d,b-g).normalize(),t[4].setComponents(a-o,f-u,p-_,b-x).normalize(),t[5].setComponents(a+o,f+u,p+_,b+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ks.x=i.normal.x>0?e.max.x:e.min.x,Ks.y=i.normal.y>0?e.max.y:e.min.y,Ks.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function qd(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const h=u.array,d=u.updateRange;s.bindBuffer(f,c),d.count===-1?s.bufferSubData(f,0,h):(t?s.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):s.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class ga extends cn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],_=[],p=[],m=[];for(let g=0;g<u;g++){const x=g*h-o;for(let b=0;b<c;b++){const v=b*f-r;_.push(v,-x,0),p.push(0,0,1),m.push(b/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const b=x+c*g,v=x+c*(g+1),y=x+1+c*(g+1),M=x+1+c*g;d.push(b,v,M),d.push(v,y,M)}this.setIndex(d),this.setAttribute("position",new Kt(_,3)),this.setAttribute("normal",new Kt(p,3)),this.setAttribute("uv",new Kt(m,2))}static fromJSON(e){return new ga(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,em="vec3 transformed = vec3( position );",tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,im=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,mm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ym=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,km=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Wm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,qm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Km=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,lp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ep=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,zp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Bp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Np=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Gp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Vp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Wp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Hp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$p=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,eg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ag=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Mg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,tt={alphamap_fragment:Yd,alphamap_pars_fragment:Zd,alphatest_fragment:Kd,alphatest_pars_fragment:Jd,aomap_fragment:Qd,aomap_pars_fragment:$d,begin_vertex:em,beginnormal_vertex:tm,bsdfs:nm,iridescence_fragment:im,bumpmap_pars_fragment:rm,clipping_planes_fragment:sm,clipping_planes_pars_fragment:am,clipping_planes_pars_vertex:om,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:um,color_pars_vertex:fm,color_vertex:hm,common:dm,cube_uv_reflection_fragment:mm,defaultnormal_vertex:pm,displacementmap_pars_vertex:gm,displacementmap_vertex:vm,emissivemap_fragment:_m,emissivemap_pars_fragment:bm,encodings_fragment:xm,encodings_pars_fragment:wm,envmap_fragment:ym,envmap_common_pars_fragment:Sm,envmap_pars_fragment:Mm,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:km,envmap_vertex:Am,fog_vertex:Em,fog_pars_vertex:Cm,fog_fragment:Dm,fog_pars_fragment:Lm,gradientmap_pars_fragment:Pm,lightmap_fragment:Rm,lightmap_pars_fragment:Im,lights_lambert_fragment:Um,lights_lambert_pars_fragment:Om,lights_pars_begin:Fm,lights_toon_fragment:zm,lights_toon_pars_fragment:Bm,lights_phong_fragment:Nm,lights_phong_pars_fragment:Gm,lights_physical_fragment:Vm,lights_physical_pars_fragment:Wm,lights_fragment_begin:Hm,lights_fragment_maps:jm,lights_fragment_end:Xm,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Km,map_fragment:Jm,map_pars_fragment:Qm,map_particle_fragment:$m,map_particle_pars_fragment:ep,metalnessmap_fragment:tp,metalnessmap_pars_fragment:np,morphcolor_vertex:ip,morphnormal_vertex:rp,morphtarget_pars_vertex:sp,morphtarget_vertex:ap,normal_fragment_begin:op,normal_fragment_maps:lp,normal_pars_fragment:cp,normal_pars_vertex:up,normal_vertex:fp,normalmap_pars_fragment:hp,clearcoat_normal_fragment_begin:dp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:pp,iridescence_pars_fragment:gp,output_fragment:vp,packing:_p,premultiplied_alpha_fragment:bp,project_vertex:xp,dithering_fragment:wp,dithering_pars_fragment:yp,roughnessmap_fragment:Sp,roughnessmap_pars_fragment:Mp,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Ap,shadowmap_vertex:Ep,shadowmask_pars_fragment:Cp,skinbase_vertex:Dp,skinning_pars_vertex:Lp,skinning_vertex:Pp,skinnormal_vertex:Rp,specularmap_fragment:Ip,specularmap_pars_fragment:Up,tonemapping_fragment:Op,tonemapping_pars_fragment:Fp,transmission_fragment:kp,transmission_pars_fragment:zp,uv_pars_fragment:Bp,uv_pars_vertex:Np,uv_vertex:Gp,uv2_pars_fragment:Vp,uv2_pars_vertex:Wp,uv2_vertex:Hp,worldpos_vertex:jp,background_vert:Xp,background_frag:qp,backgroundCube_vert:Yp,backgroundCube_frag:Zp,cube_vert:Kp,cube_frag:Jp,depth_vert:Qp,depth_frag:$p,distanceRGBA_vert:eg,distanceRGBA_frag:tg,equirect_vert:ng,equirect_frag:ig,linedashed_vert:rg,linedashed_frag:sg,meshbasic_vert:ag,meshbasic_frag:og,meshlambert_vert:lg,meshlambert_frag:cg,meshmatcap_vert:ug,meshmatcap_frag:fg,meshnormal_vert:hg,meshnormal_frag:dg,meshphong_vert:mg,meshphong_frag:pg,meshphysical_vert:gg,meshphysical_frag:vg,meshtoon_vert:_g,meshtoon_frag:bg,points_vert:xg,points_frag:wg,shadow_vert:yg,shadow_frag:Sg,sprite_vert:Mg,sprite_frag:Tg},Ae={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new pn},uv2Transform:{value:new pn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pn}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pn}}},mn={basic:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new rt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:sn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:sn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new rt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:sn([Ae.points,Ae.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:sn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:sn([Ae.common,Ae.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:sn([Ae.sprite,Ae.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new pn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:sn([Ae.common,Ae.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:sn([Ae.lights,Ae.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};mn.physical={uniforms:sn([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Js={r:0,b:0,g:0};function Ag(s,e,t,n,i,r,o){const a=new rt(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function _(m,g){let x=!1,b=g.isScene===!0?g.background:null;b&&b.isTexture&&(b=(g.backgroundBlurriness>0?t:e).get(b));const v=s.xr,y=v.getSession&&v.getSession();y&&y.environmentBlendMode==="additive"&&(b=null),b===null?p(a,l):b&&b.isColor&&(p(b,1),x=!0),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),b&&(b.isCubeTexture||b.mapping===pa)?(u===void 0&&(u=new en(new vs(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Tr(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,L,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=b.encoding!==xt,(f!==b||h!==b.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,d=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new en(new ga(2,2),new Kn({name:"BackgroundMaterial",uniforms:Tr(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=b.encoding!==xt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,d=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,g){m.getRGB(Js,ju(s)),n.buffers.color.setClear(Js.r,Js.g,Js.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(m,g=1){a.set(m),l=g,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(a,l)},render:_}}function Eg(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function f(I,D,H,te,J){let V=!1;if(o){const W=p(te,H,D);c!==W&&(c=W,d(c.object)),V=g(I,te,H,J),V&&x(I,te,H,J)}else{const W=D.wireframe===!0;(c.geometry!==te.id||c.program!==H.id||c.wireframe!==W)&&(c.geometry=te.id,c.program=H.id,c.wireframe=W,V=!0)}J!==null&&t.update(J,34963),(V||u)&&(u=!1,w(I,D,H,te),J!==null&&s.bindBuffer(34963,t.get(J).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function _(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function p(I,D,H){const te=H.wireframe===!0;let J=a[I.id];J===void 0&&(J={},a[I.id]=J);let V=J[D.id];V===void 0&&(V={},J[D.id]=V);let W=V[te];return W===void 0&&(W=m(h()),V[te]=W),W}function m(I){const D=[],H=[],te=[];for(let J=0;J<i;J++)D[J]=0,H[J]=0,te[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:te,object:I,attributes:{},index:null}}function g(I,D,H,te){const J=c.attributes,V=D.attributes;let W=0;const S=H.getAttributes();for(const P in S)if(S[P].location>=0){const X=J[P];let q=V[P];if(q===void 0&&(P==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),P==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),X===void 0||X.attribute!==q||q&&X.data!==q.data)return!0;W++}return c.attributesNum!==W||c.index!==te}function x(I,D,H,te){const J={},V=D.attributes;let W=0;const S=H.getAttributes();for(const P in S)if(S[P].location>=0){let X=V[P];X===void 0&&(P==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),P==="instanceColor"&&I.instanceColor&&(X=I.instanceColor));const q={};q.attribute=X,X&&X.data&&(q.data=X.data),J[P]=q,W++}c.attributes=J,c.attributesNum=W,c.index=te}function b(){const I=c.newAttributes;for(let D=0,H=I.length;D<H;D++)I[D]=0}function v(I){y(I,0)}function y(I,D){const H=c.newAttributes,te=c.enabledAttributes,J=c.attributeDivisors;H[I]=1,te[I]===0&&(s.enableVertexAttribArray(I),te[I]=1),J[I]!==D&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,D),J[I]=D)}function M(){const I=c.newAttributes,D=c.enabledAttributes;for(let H=0,te=D.length;H<te;H++)D[H]!==I[H]&&(s.disableVertexAttribArray(H),D[H]=0)}function L(I,D,H,te,J,V){n.isWebGL2===!0&&(H===5124||H===5125)?s.vertexAttribIPointer(I,D,H,J,V):s.vertexAttribPointer(I,D,H,te,J,V)}function w(I,D,H,te){if(n.isWebGL2===!1&&(I.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const J=te.attributes,V=H.getAttributes(),W=D.defaultAttributeValues;for(const S in V){const P=V[S];if(P.location>=0){let Q=J[S];if(Q===void 0&&(S==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),S==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){const X=Q.normalized,q=Q.itemSize,E=t.get(Q);if(E===void 0)continue;const Y=E.buffer,ee=E.type,ae=E.bytesPerElement;if(Q.isInterleavedBufferAttribute){const oe=Q.data,pe=oe.stride,N=Q.offset;if(oe.isInstancedInterleavedBuffer){for(let he=0;he<P.locationSize;he++)y(P.location+he,oe.meshPerAttribute);I.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let he=0;he<P.locationSize;he++)v(P.location+he);s.bindBuffer(34962,Y);for(let he=0;he<P.locationSize;he++)L(P.location+he,q/P.locationSize,ee,X,pe*ae,(N+q/P.locationSize*he)*ae)}else{if(Q.isInstancedBufferAttribute){for(let oe=0;oe<P.locationSize;oe++)y(P.location+oe,Q.meshPerAttribute);I.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let oe=0;oe<P.locationSize;oe++)v(P.location+oe);s.bindBuffer(34962,Y);for(let oe=0;oe<P.locationSize;oe++)L(P.location+oe,q/P.locationSize,ee,X,q*ae,q/P.locationSize*oe*ae)}}else if(W!==void 0){const X=W[S];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(P.location,X);break;case 3:s.vertexAttrib3fv(P.location,X);break;case 4:s.vertexAttrib4fv(P.location,X);break;default:s.vertexAttrib1fv(P.location,X)}}}}M()}function A(){U();for(const I in a){const D=a[I];for(const H in D){const te=D[H];for(const J in te)_(te[J].object),delete te[J];delete D[H]}delete a[I]}}function R(I){if(a[I.id]===void 0)return;const D=a[I.id];for(const H in D){const te=D[H];for(const J in te)_(te[J].object),delete te[J];delete D[H]}delete a[I.id]}function B(I){for(const D in a){const H=a[D];if(H[I.id]===void 0)continue;const te=H[I.id];for(const J in te)_(te[J].object),delete te[J];delete H[I.id]}}function U(){C(),u=!0,c!==l&&(c=l,d(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:U,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:v,disableUnusedAttributes:M}}function Cg(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let h,d;if(i)h=s,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](r,c,u,f),t.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Dg(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=s.getParameter(34930),h=s.getParameter(35660),d=s.getParameter(3379),_=s.getParameter(34076),p=s.getParameter(34921),m=s.getParameter(36347),g=s.getParameter(36348),x=s.getParameter(36349),b=h>0,v=o||e.has("OES_texture_float"),y=b&&v,M=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:x,vertexTextures:b,floatFragmentTextures:v,floatVertexTextures:y,maxSamples:M}}function Lg(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ei,a=new pn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,d){const _=f.length!==0||h||n!==0||i;return i=h,t=u(f,d,0),n=f.length,_},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(f,h,d){const _=f.clippingPlanes,p=f.clipIntersection,m=f.clipShadows,g=s.get(f);if(!i||_===null||_.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,b=x*4;let v=g.clippingState||null;l.value=v,v=u(_,h,b,d);for(let y=0;y!==b;++y)v[y]=t[y];g.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,_){const p=f!==null?f.length:0;let m=null;if(p!==0){if(m=l.value,_!==!0||m===null){const g=d+p*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,v=d;b!==p;++b,v+=4)o.copy(f[b]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function Pg(s){let e=new WeakMap;function t(o,a){return a===So?o.mapping=yr:a===Mo&&(o.mapping=Sr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===So||a===Mo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Hd(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Yu extends Ko{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vr=4,lc=[.125,.215,.35,.446,.526,.582],Di=20,lo=new Yu,cc=new rt;let co=null;const Ci=(1+Math.sqrt(5))/2,dr=1/Ci,uc=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,Ci,dr),new K(0,Ci,-dr),new K(dr,0,Ci),new K(-dr,0,Ci),new K(Ci,dr,0),new K(-Ci,dr,0)];class fc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){co=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(co),e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),co=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:ss,format:zn,encoding:xi,depthBuffer:!1},i=hc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rg(r)),this._blurMaterial=Ig(r,e,t)}return i}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,lo)}_sceneToCubeUV(e,t,n,i){const a=new yn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(cc),u.toneMapping=Xn,u.autoClear=!1;const d=new Zo({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),_=new en(new vs,d);let p=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(cc),p=!0);for(let g=0;g<6;g++){const x=g%3;x===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):x===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const b=this._cubeSize;Qs(i,x*b,g>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===yr||e.mapping===Sr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new en(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Qs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,lo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=uc[(i-1)%uc.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new en(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Di-1),p=r/_,m=isFinite(r)?1+Math.floor(u*p):Di;m>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const g=[];let x=0;for(let L=0;L<Di;++L){const w=L/p,A=Math.exp(-w*w/2);g.push(A),L===0?x+=A:L<m&&(x+=2*A)}for(let L=0;L<g.length;L++)g[L]=g[L]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=_,h.mipInt.value=b-n;const v=this._sizeLods[i],y=3*v*(i>b-vr?i-b+vr:0),M=4*(this._cubeSize-v);Qs(t,y,M,3*v,2*v),l.setRenderTarget(t),l.render(f,lo)}}function Rg(s){const e=[],t=[],n=[];let i=s;const r=s-vr+1+lc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-vr?l=lc[o-s+vr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,p=3,m=2,g=1,x=new Float32Array(p*_*d),b=new Float32Array(m*_*d),v=new Float32Array(g*_*d);for(let M=0;M<d;M++){const L=M%3*2/3-1,w=M>2?0:-1,A=[L,w,0,L+2/3,w,0,L+2/3,w+1,0,L,w,0,L+2/3,w+1,0,L,w+1,0];x.set(A,p*_*M),b.set(h,m*_*M);const R=[M,M,M,M,M,M];v.set(R,g*_*M)}const y=new cn;y.setAttribute("position",new Mn(x,p)),y.setAttribute("uv",new Mn(b,m)),y.setAttribute("faceIndex",new Mn(v,g)),e.push(y),i>vr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hc(s,e,t){const n=new wi(s,e,t);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ig(s,e,t){const n=new Float32Array(Di),i=new K(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function dc(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function mc(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ug(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===So||l===Mo,u=l===yr||l===Sr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new fc(s)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new fc(s));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Og(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Fg(s,e,t,n){const i={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete i[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],34962);const d=f.morphAttributes;for(const _ in d){const p=d[_];for(let m=0,g=p.length;m<g;m++)e.update(p[m],34962)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let p=0;if(d!==null){const x=d.array;p=d.version;for(let b=0,v=x.length;b<v;b+=3){const y=x[b+0],M=x[b+1],L=x[b+2];h.push(y,M,M,L,L,y)}}else{const x=_.array;p=_.version;for(let b=0,v=x.length/3-1;b<v;b+=3){const y=b+0,M=b+1,L=b+2;h.push(y,M,M,L,L,y)}}const m=new(zu(h)?Hu:Wu)(h,1);m.version=p;const g=r.get(f);g&&e.remove(g),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function kg(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,d){s.drawElements(r,d,a,h*l),t.update(d,r,1)}function f(h,d,_){if(_===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,d,a,h*l,_),t.update(d,r,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function zg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Bg(s,e){return s[0]-e[0]}function Ng(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Gg(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Tt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==p){let D=function(){C.dispose(),r.delete(u),u.removeEventListener("dispose",D)};m!==void 0&&m.texture.dispose();const b=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let A=0;b===!0&&(A=1),v===!0&&(A=2),y===!0&&(A=3);let R=u.attributes.position.count*A,B=1;R>e.maxTextureSize&&(B=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const U=new Float32Array(R*B*4*p),C=new Vu(U,R,B,p);C.type=Ri,C.needsUpdate=!0;const I=A*4;for(let H=0;H<p;H++){const te=M[H],J=L[H],V=w[H],W=R*B*4*H;for(let S=0;S<te.count;S++){const P=S*I;b===!0&&(o.fromBufferAttribute(te,S),U[W+P+0]=o.x,U[W+P+1]=o.y,U[W+P+2]=o.z,U[W+P+3]=0),v===!0&&(o.fromBufferAttribute(J,S),U[W+P+4]=o.x,U[W+P+5]=o.y,U[W+P+6]=o.z,U[W+P+7]=0),y===!0&&(o.fromBufferAttribute(V,S),U[W+P+8]=o.x,U[W+P+9]=o.y,U[W+P+10]=o.z,U[W+P+11]=V.itemSize===4?o.w:1)}}m={count:p,texture:C,size:new Ze(R,B)},r.set(u,m),u.addEventListener("dispose",D)}let g=0;for(let b=0;b<d.length;b++)g+=d[b];const x=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let p=n[u.id];if(p===void 0||p.length!==_){p=[];for(let v=0;v<_;v++)p[v]=[v,0];n[u.id]=p}for(let v=0;v<_;v++){const y=p[v];y[0]=v,y[1]=d[v]}p.sort(Ng);for(let v=0;v<8;v++)v<_&&p[v][1]?(a[v][0]=p[v][0],a[v][1]=p[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Bg);const m=u.morphAttributes.position,g=u.morphAttributes.normal;let x=0;for(let v=0;v<8;v++){const y=a[v],M=y[0],L=y[1];M!==Number.MAX_SAFE_INTEGER&&L?(m&&u.getAttribute("morphTarget"+v)!==m[M]&&u.setAttribute("morphTarget"+v,m[M]),g&&u.getAttribute("morphNormal"+v)!==g[M]&&u.setAttribute("morphNormal"+v,g[M]),i[v]=L,x+=L):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const b=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(s,"morphTargetBaseInfluence",b),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Vg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Zu=new on,Ku=new Vu,Ju=new Dd,Qu=new Xu,pc=[],gc=[],vc=new Float32Array(16),_c=new Float32Array(9),bc=new Float32Array(4);function Lr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=pc[i];if(r===void 0&&(r=new Float32Array(i),pc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Nt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Gt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function va(s,e){let t=gc[e];t===void 0&&(t=new Int32Array(e),gc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Wg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Hg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2fv(this.addr,e),Gt(t,e)}}function jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;s.uniform3fv(this.addr,e),Gt(t,e)}}function Xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4fv(this.addr,e),Gt(t,e)}}function qg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Nt(t,n))return;bc.set(n),s.uniformMatrix2fv(this.addr,!1,bc),Gt(t,n)}}function Yg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Nt(t,n))return;_c.set(n),s.uniformMatrix3fv(this.addr,!1,_c),Gt(t,n)}}function Zg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Nt(t,n))return;vc.set(n),s.uniformMatrix4fv(this.addr,!1,vc),Gt(t,n)}}function Kg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2iv(this.addr,e),Gt(t,e)}}function Qg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3iv(this.addr,e),Gt(t,e)}}function $g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4iv(this.addr,e),Gt(t,e)}}function e0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function t0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2uiv(this.addr,e),Gt(t,e)}}function n0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3uiv(this.addr,e),Gt(t,e)}}function i0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4uiv(this.addr,e),Gt(t,e)}}function r0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Zu,i)}function s0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ju,i)}function a0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qu,i)}function o0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ku,i)}function l0(s){switch(s){case 5126:return Wg;case 35664:return Hg;case 35665:return jg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return Zg;case 5124:case 35670:return Kg;case 35667:case 35671:return Jg;case 35668:case 35672:return Qg;case 35669:case 35673:return $g;case 5125:return e0;case 36294:return t0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return s0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return o0}}function c0(s,e){s.uniform1fv(this.addr,e)}function u0(s,e){const t=Lr(e,this.size,2);s.uniform2fv(this.addr,t)}function f0(s,e){const t=Lr(e,this.size,3);s.uniform3fv(this.addr,t)}function h0(s,e){const t=Lr(e,this.size,4);s.uniform4fv(this.addr,t)}function d0(s,e){const t=Lr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function m0(s,e){const t=Lr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function p0(s,e){const t=Lr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function g0(s,e){s.uniform1iv(this.addr,e)}function v0(s,e){s.uniform2iv(this.addr,e)}function _0(s,e){s.uniform3iv(this.addr,e)}function b0(s,e){s.uniform4iv(this.addr,e)}function x0(s,e){s.uniform1uiv(this.addr,e)}function w0(s,e){s.uniform2uiv(this.addr,e)}function y0(s,e){s.uniform3uiv(this.addr,e)}function S0(s,e){s.uniform4uiv(this.addr,e)}function M0(s,e,t){const n=this.cache,i=e.length,r=va(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Zu,r[o])}function T0(s,e,t){const n=this.cache,i=e.length,r=va(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ju,r[o])}function A0(s,e,t){const n=this.cache,i=e.length,r=va(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Qu,r[o])}function E0(s,e,t){const n=this.cache,i=e.length,r=va(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ku,r[o])}function C0(s){switch(s){case 5126:return c0;case 35664:return u0;case 35665:return f0;case 35666:return h0;case 35674:return d0;case 35675:return m0;case 35676:return p0;case 5124:case 35670:return g0;case 35667:case 35671:return v0;case 35668:case 35672:return _0;case 35669:case 35673:return b0;case 5125:return x0;case 36294:return w0;case 36295:return y0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return E0}}class D0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=l0(t.type)}}class L0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=C0(t.type)}}class P0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function xc(s,e){s.seq.push(e),s.map[e.id]=e}function R0(s,e,t){const n=s.name,i=n.length;for(uo.lastIndex=0;;){const r=uo.exec(n),o=uo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){xc(t,c===void 0?new D0(a,s,e):new L0(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new P0(a),xc(t,f)),t=f}}}class la{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);R0(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function wc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let I0=0;function U0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function O0(s){switch(s){case xi:return["Linear","( value )"];case xt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function yc(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+U0(s.getShaderSource(e),o)}else return i}function F0(s,e){const t=O0(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function k0(s,e){let t;switch(e){case Hh:t="Linear";break;case jh:t="Reinhard";break;case Xh:t="OptimizedCineon";break;case Uu:t="ACESFilmic";break;case qh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function z0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qr).join(`
`)}function B0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function N0(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Qr(s){return s!==""}function Sc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(s){return s.replace(G0,V0)}function V0(s,e){const t=tt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Lo(t)}const W0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(s){return s.replace(W0,H0)}function H0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ac(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Lu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Pu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Jr&&(e="SHADOWMAP_TYPE_VSM"),e}function X0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case yr:case Sr:e="ENVMAP_TYPE_CUBE";break;case pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function Y0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ho:e="ENVMAP_BLENDING_MULTIPLY";break;case Vh:e="ENVMAP_BLENDING_MIX";break;case Wh:e="ENVMAP_BLENDING_ADD";break}return e}function Z0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function K0(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=j0(t),c=X0(t),u=q0(t),f=Y0(t),h=Z0(t),d=t.isWebGL2?"":z0(t),_=B0(r),p=i.createProgram();let m,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[_].filter(Qr).join(`
`),m.length>0&&(m+=`
`),g=[d,_].filter(Qr).join(`
`),g.length>0&&(g+=`
`)):(m=[Ac(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),g=[d,Ac(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Xn?k0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.encodings_pars_fragment,F0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qr).join(`
`)),o=Lo(o),o=Sc(o,t),o=Mc(o,t),a=Lo(a),a=Sc(a,t),a=Mc(a,t),o=Tc(o),a=Tc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=x+m+o,v=x+g+a,y=wc(i,35633,b),M=wc(i,35632,v);if(i.attachShader(p,y),i.attachShader(p,M),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(y).trim(),B=i.getShaderInfoLog(M).trim();let U=!0,C=!0;if(i.getProgramParameter(p,35714)===!1){U=!1;const I=yc(i,y,"vertex"),D=yc(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+I+`
`+D)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(R===""||B==="")&&(C=!1);C&&(this.diagnostics={runnable:U,programLog:A,vertexShader:{log:R,prefix:m},fragmentShader:{log:B,prefix:g}})}i.deleteShader(y),i.deleteShader(M);let L;this.getUniforms=function(){return L===void 0&&(L=new la(i,p)),L};let w;return this.getAttributes=function(){return w===void 0&&(w=N0(i,p)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=I0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=M,this}let J0=0;class Q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $0(e),t.set(e,n)),n}}class $0{constructor(e){this.id=J0++,this.code=e,this.usedTimes=0}}function ev(s,e,t,n,i,r,o){const a=new Yo,l=new Q0,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(w,A,R,B,U){const C=B.fog,I=U.geometry,D=w.isMeshStandardMaterial?B.environment:null,H=(w.isMeshStandardMaterial?t:e).get(w.envMap||D),te=H&&H.mapping===pa?H.image.height:null,J=_[w.type];w.precision!==null&&(d=i.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const V=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,W=V!==void 0?V.length:0;let S=0;I.morphAttributes.position!==void 0&&(S=1),I.morphAttributes.normal!==void 0&&(S=2),I.morphAttributes.color!==void 0&&(S=3);let P,Q,X,q;if(J){const pe=mn[J];P=pe.vertexShader,Q=pe.fragmentShader}else P=w.vertexShader,Q=w.fragmentShader,l.update(w),X=l.getVertexShaderID(w),q=l.getFragmentShaderID(w);const E=s.getRenderTarget(),Y=w.alphaTest>0,ee=w.clearcoat>0,ae=w.iridescence>0;return{isWebGL2:u,shaderID:J,shaderName:w.type,vertexShader:P,fragmentShader:Q,defines:w.defines,customVertexShaderID:X,customFragmentShaderID:q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,instancing:U.isInstancedMesh===!0,instancingColor:U.isInstancedMesh===!0&&U.instanceColor!==null,supportsVertexTextures:h,outputEncoding:E===null?s.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:xi,map:!!w.map,matcap:!!w.matcap,envMap:!!H,envMapMode:H&&H.mapping,envMapCubeUVHeight:te,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===fd,tangentSpaceNormalMap:w.normalMapType===jo,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===xt,clearcoat:ee,clearcoatMap:ee&&!!w.clearcoatMap,clearcoatRoughnessMap:ee&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:ee&&!!w.clearcoatNormalMap,iridescence:ae,iridescenceMap:ae&&!!w.iridescenceMap,iridescenceThicknessMap:ae&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===br,alphaMap:!!w.alphaMap,alphaTest:Y,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!I.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.iridescenceMap||w.iridescenceThicknessMap||w.transmission>0||w.transmissionMap||w.thicknessMap||w.specularIntensityMap||w.specularColorMap||w.sheen>0||w.sheenColorMap||w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!C,useFog:w.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:S,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:w.toneMapped?s.toneMapping:Xn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Dr,flipSided:w.side===Sn,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function m(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)A.push(R),A.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(g(A,w),x(A,w),A.push(s.outputEncoding)),A.push(w.customProgramCacheKey),A.join()}function g(w,A){w.push(A.precision),w.push(A.outputEncoding),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.combine),w.push(A.vertexUvs),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function x(w,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),w.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),w.push(a.mask)}function b(w){const A=_[w.type];let R;if(A){const B=mn[A];R=_s.clone(B.uniforms)}else R=w.uniforms;return R}function v(w,A){let R;for(let B=0,U=c.length;B<U;B++){const C=c[B];if(C.cacheKey===A){R=C,++R.usedTimes;break}}return R===void 0&&(R=new K0(s,A,w,r),c.push(R)),R}function y(w){if(--w.usedTimes===0){const A=c.indexOf(w);c[A]=c[c.length-1],c.pop(),w.destroy()}}function M(w){l.remove(w)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:b,acquireProgram:v,releaseProgram:y,releaseShaderCache:M,programs:c,dispose:L}}function tv(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function nv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ec(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Cc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,d,_,p,m){let g=s[e];return g===void 0?(g={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:p,group:m},s[e]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=d,g.groupOrder=_,g.renderOrder=f.renderOrder,g.z=p,g.group=m),e++,g}function a(f,h,d,_,p,m){const g=o(f,h,d,_,p,m);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):t.push(g)}function l(f,h,d,_,p,m){const g=o(f,h,d,_,p,m);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):t.unshift(g)}function c(f,h){t.length>1&&t.sort(f||nv),n.length>1&&n.sort(h||Ec),i.length>1&&i.sort(h||Ec)}function u(){for(let f=e,h=s.length;f<h;f++){const d=s[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function iv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Cc,s.set(n,[o])):i>=r.length?(o=new Cc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function rv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new rt};break;case"SpotLight":t={position:new K,direction:new K,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=t,t}}}function sv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let av=0;function ov(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function lv(s,e){const t=new rv,n=sv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new K);const r=new K,o=new wt,a=new wt;function l(u,f){let h=0,d=0,_=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,m=0,g=0,x=0,b=0,v=0,y=0,M=0,L=0,w=0;u.sort(ov);const A=f!==!0?Math.PI:1;for(let B=0,U=u.length;B<U;B++){const C=u[B],I=C.color,D=C.intensity,H=C.distance,te=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=I.r*D*A,d+=I.g*D*A,_+=I.b*D*A;else if(C.isLightProbe)for(let J=0;J<9;J++)i.probe[J].addScaledVector(C.sh.coefficients[J],D);else if(C.isDirectionalLight){const J=t.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity*A),C.castShadow){const V=C.shadow,W=n.get(C);W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=C.shadow.matrix,v++}i.directional[p]=J,p++}else if(C.isSpotLight){const J=t.get(C);J.position.setFromMatrixPosition(C.matrixWorld),J.color.copy(I).multiplyScalar(D*A),J.distance=H,J.coneCos=Math.cos(C.angle),J.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),J.decay=C.decay,i.spot[g]=J;const V=C.shadow;if(C.map&&(i.spotLightMap[L]=C.map,L++,V.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[g]=V.matrix,C.castShadow){const W=n.get(C);W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,i.spotShadow[g]=W,i.spotShadowMap[g]=te,M++}g++}else if(C.isRectAreaLight){const J=t.get(C);J.color.copy(I).multiplyScalar(D),J.halfWidth.set(C.width*.5,0,0),J.halfHeight.set(0,C.height*.5,0),i.rectArea[x]=J,x++}else if(C.isPointLight){const J=t.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity*A),J.distance=C.distance,J.decay=C.decay,C.castShadow){const V=C.shadow,W=n.get(C);W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,W.shadowCameraNear=V.camera.near,W.shadowCameraFar=V.camera.far,i.pointShadow[m]=W,i.pointShadowMap[m]=te,i.pointShadowMatrix[m]=C.shadow.matrix,y++}i.point[m]=J,m++}else if(C.isHemisphereLight){const J=t.get(C);J.skyColor.copy(C.color).multiplyScalar(D*A),J.groundColor.copy(C.groundColor).multiplyScalar(D*A),i.hemi[b]=J,b++}}x>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=_;const R=i.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==g||R.rectAreaLength!==x||R.hemiLength!==b||R.numDirectionalShadows!==v||R.numPointShadows!==y||R.numSpotShadows!==M||R.numSpotMaps!==L)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=x,i.point.length=m,i.hemi.length=b,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+L-w,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=w,R.directionalLength=p,R.pointLength=m,R.spotLength=g,R.rectAreaLength=x,R.hemiLength=b,R.numDirectionalShadows=v,R.numPointShadows=y,R.numSpotShadows=M,R.numSpotMaps=L,i.version=av++)}function c(u,f){let h=0,d=0,_=0,p=0,m=0;const g=f.matrixWorldInverse;for(let x=0,b=u.length;x<b;x++){const v=u[x];if(v.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(v.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),_++}else if(v.isRectAreaLight){const y=i.rectArea[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),a.identity(),o.copy(v.matrixWorld),o.premultiply(g),a.extractRotation(o),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),m++}}}return{setup:l,setupView:c,state:i}}function Dc(s,e){const t=new lv(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cv(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Dc(s,e),t.set(r,[l])):o>=a.length?(l=new Dc(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class $u extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ef extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new K,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hv(s,e,t){let n=new Jo;const i=new Ze,r=new Ze,o=new Tt,a=new $u({depthPacking:ku}),l=new ef,c={},u=t.maxTextureSize,f={0:Sn,1:bi,2:Dr},h=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:uv,fragmentShader:fv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new cn;_.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new en(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu,this.render=function(v,y,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const L=s.getRenderTarget(),w=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),R=s.state;R.setBlending(_i),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let B=0,U=v.length;B<U;B++){const C=v[B],I=C.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const D=I.getFrameExtents();if(i.multiply(D),r.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/D.x),i.x=r.x*D.x,I.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/D.y),i.y=r.y*D.y,I.mapSize.y=r.y)),I.map===null){const te=this.type!==Jr?{minFilter:an,magFilter:an}:{};I.map=new wi(i.x,i.y,te),I.map.texture.name=C.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const H=I.getViewportCount();for(let te=0;te<H;te++){const J=I.getViewport(te);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),R.viewport(o),I.updateMatrices(C,te),n=I.getFrustum(),b(y,M,I.camera,C,this.type)}I.isPointLightShadow!==!0&&this.type===Jr&&g(I,M),I.needsUpdate=!1}m.needsUpdate=!1,s.setRenderTarget(L,w,A)};function g(v,y){const M=e.update(p);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new wi(i.x,i.y)),h.uniforms.shadow_pass.value=v.map.texture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(y,null,M,h,p,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(y,null,M,d,p,null)}function x(v,y,M,L,w,A){let R=null;const B=M.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(B!==void 0)R=B;else if(R=M.isPointLight===!0?l:a,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const U=R.uuid,C=y.uuid;let I=c[U];I===void 0&&(I={},c[U]=I);let D=I[C];D===void 0&&(D=R.clone(),I[C]=D),R=D}return R.visible=y.visible,R.wireframe=y.wireframe,A===Jr?R.side=y.shadowSide!==null?y.shadowSide:y.side:R.side=y.shadowSide!==null?y.shadowSide:f[y.side],R.alphaMap=y.alphaMap,R.alphaTest=y.alphaTest,R.map=y.map,R.clipShadows=y.clipShadows,R.clippingPlanes=y.clippingPlanes,R.clipIntersection=y.clipIntersection,R.displacementMap=y.displacementMap,R.displacementScale=y.displacementScale,R.displacementBias=y.displacementBias,R.wireframeLinewidth=y.wireframeLinewidth,R.linewidth=y.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(M.matrixWorld),R.nearDistance=L,R.farDistance=w),R}function b(v,y,M,L,w){if(v.visible===!1)return;if(v.layers.test(y.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&w===Jr)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,v.matrixWorld);const B=e.update(v),U=v.material;if(Array.isArray(U)){const C=B.groups;for(let I=0,D=C.length;I<D;I++){const H=C[I],te=U[H.materialIndex];if(te&&te.visible){const J=x(v,te,L,M.near,M.far,w);s.renderBufferDirect(M,null,B,J,v,H)}}}else if(U.visible){const C=x(v,U,L,M.near,M.far,w);s.renderBufferDirect(M,null,B,C,v,null)}}const R=v.children;for(let B=0,U=R.length;B<U;B++)b(R[B],y,M,L,w)}}function dv(s,e,t){const n=t.isWebGL2;function i(){let G=!1;const re=new Tt;let be=null;const Oe=new Tt(0,0,0,0);return{setMask:function(Ue){be!==Ue&&!G&&(s.colorMask(Ue,Ue,Ue,Ue),be=Ue)},setLocked:function(Ue){G=Ue},setClear:function(Ue,lt,Ke,qe,yt){yt===!0&&(Ue*=qe,lt*=qe,Ke*=qe),re.set(Ue,lt,Ke,qe),Oe.equals(re)===!1&&(s.clearColor(Ue,lt,Ke,qe),Oe.copy(re))},reset:function(){G=!1,be=null,Oe.set(-1,0,0,0)}}}function r(){let G=!1,re=null,be=null,Oe=null;return{setTest:function(Ue){Ue?Y(2929):ee(2929)},setMask:function(Ue){re!==Ue&&!G&&(s.depthMask(Ue),re=Ue)},setFunc:function(Ue){if(be!==Ue){switch(Ue){case Oh:s.depthFunc(512);break;case Fh:s.depthFunc(519);break;case kh:s.depthFunc(513);break;case yo:s.depthFunc(515);break;case zh:s.depthFunc(514);break;case Bh:s.depthFunc(518);break;case Nh:s.depthFunc(516);break;case Gh:s.depthFunc(517);break;default:s.depthFunc(515)}be=Ue}},setLocked:function(Ue){G=Ue},setClear:function(Ue){Oe!==Ue&&(s.clearDepth(Ue),Oe=Ue)},reset:function(){G=!1,re=null,be=null,Oe=null}}}function o(){let G=!1,re=null,be=null,Oe=null,Ue=null,lt=null,Ke=null,qe=null,yt=null;return{setTest:function(st){G||(st?Y(2960):ee(2960))},setMask:function(st){re!==st&&!G&&(s.stencilMask(st),re=st)},setFunc:function(st,ut,vt){(be!==st||Oe!==ut||Ue!==vt)&&(s.stencilFunc(st,ut,vt),be=st,Oe=ut,Ue=vt)},setOp:function(st,ut,vt){(lt!==st||Ke!==ut||qe!==vt)&&(s.stencilOp(st,ut,vt),lt=st,Ke=ut,qe=vt)},setLocked:function(st){G=st},setClear:function(st){yt!==st&&(s.clearStencil(st),yt=st)},reset:function(){G=!1,re=null,be=null,Oe=null,Ue=null,lt=null,Ke=null,qe=null,yt=null}}}const a=new i,l=new r,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},_=new WeakMap,p=[],m=null,g=!1,x=null,b=null,v=null,y=null,M=null,L=null,w=null,A=!1,R=null,B=null,U=null,C=null,I=null;const D=s.getParameter(35661);let H=!1,te=0;const J=s.getParameter(7938);J.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(J)[1]),H=te>=1):J.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),H=te>=2);let V=null,W={};const S=s.getParameter(3088),P=s.getParameter(2978),Q=new Tt().fromArray(S),X=new Tt().fromArray(P);function q(G,re,be){const Oe=new Uint8Array(4),Ue=s.createTexture();s.bindTexture(G,Ue),s.texParameteri(G,10241,9728),s.texParameteri(G,10240,9728);for(let lt=0;lt<be;lt++)s.texImage2D(re+lt,0,6408,1,1,0,6408,5121,Oe);return Ue}const E={};E[3553]=q(3553,3553,1),E[34067]=q(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Y(2929),l.setFunc(yo),Ie(!1),Ne(yl),Y(2884),Fe(_i);function Y(G){h[G]!==!0&&(s.enable(G),h[G]=!0)}function ee(G){h[G]!==!1&&(s.disable(G),h[G]=!1)}function ae(G,re){return d[G]!==re?(s.bindFramebuffer(G,re),d[G]=re,n&&(G===36009&&(d[36160]=re),G===36160&&(d[36009]=re)),!0):!1}function oe(G,re){let be=p,Oe=!1;if(G)if(be=_.get(re),be===void 0&&(be=[],_.set(re,be)),G.isWebGLMultipleRenderTargets){const Ue=G.texture;if(be.length!==Ue.length||be[0]!==36064){for(let lt=0,Ke=Ue.length;lt<Ke;lt++)be[lt]=36064+lt;be.length=Ue.length,Oe=!0}}else be[0]!==36064&&(be[0]=36064,Oe=!0);else be[0]!==1029&&(be[0]=1029,Oe=!0);Oe&&(t.isWebGL2?s.drawBuffers(be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(be))}function pe(G){return m!==G?(s.useProgram(G),m=G,!0):!1}const N={[pr]:32774,[Mh]:32778,[Th]:32779};if(n)N[Al]=32775,N[El]=32776;else{const G=e.get("EXT_blend_minmax");G!==null&&(N[Al]=G.MIN_EXT,N[El]=G.MAX_EXT)}const he={[Ah]:0,[Eh]:1,[Ch]:768,[Ru]:770,[Uh]:776,[Rh]:774,[Lh]:772,[Dh]:769,[Iu]:771,[Ih]:775,[Ph]:773};function Fe(G,re,be,Oe,Ue,lt,Ke,qe){if(G===_i){g===!0&&(ee(3042),g=!1);return}if(g===!1&&(Y(3042),g=!0),G!==Sh){if(G!==x||qe!==A){if((b!==pr||M!==pr)&&(s.blendEquation(32774),b=pr,M=pr),qe)switch(G){case br:s.blendFuncSeparate(1,771,1,771);break;case Sl:s.blendFunc(1,1);break;case Ml:s.blendFuncSeparate(0,769,0,1);break;case Tl:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case br:s.blendFuncSeparate(770,771,1,771);break;case Sl:s.blendFunc(770,1);break;case Ml:s.blendFuncSeparate(0,769,0,1);break;case Tl:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}v=null,y=null,L=null,w=null,x=G,A=qe}return}Ue=Ue||re,lt=lt||be,Ke=Ke||Oe,(re!==b||Ue!==M)&&(s.blendEquationSeparate(N[re],N[Ue]),b=re,M=Ue),(be!==v||Oe!==y||lt!==L||Ke!==w)&&(s.blendFuncSeparate(he[be],he[Oe],he[lt],he[Ke]),v=be,y=Oe,L=lt,w=Ke),x=G,A=!1}function Te(G,re){G.side===Dr?ee(2884):Y(2884);let be=G.side===Sn;re&&(be=!be),Ie(be),G.blending===br&&G.transparent===!1?Fe(_i):Fe(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),a.setMask(G.colorWrite);const Oe=G.stencilWrite;c.setTest(Oe),Oe&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Me(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Y(32926):ee(32926)}function Ie(G){R!==G&&(G?s.frontFace(2304):s.frontFace(2305),R=G)}function Ne(G){G!==wh?(Y(2884),G!==B&&(G===yl?s.cullFace(1029):G===yh?s.cullFace(1028):s.cullFace(1032))):ee(2884),B=G}function ue(G){G!==U&&(H&&s.lineWidth(G),U=G)}function Me(G,re,be){G?(Y(32823),(C!==re||I!==be)&&(s.polygonOffset(re,be),C=re,I=be)):ee(32823)}function Pe(G){G?Y(3089):ee(3089)}function ge(G){G===void 0&&(G=33984+D-1),V!==G&&(s.activeTexture(G),V=G)}function O(G,re,be){be===void 0&&(V===null?be=33984+D-1:be=V);let Oe=W[be];Oe===void 0&&(Oe={type:void 0,texture:void 0},W[be]=Oe),(Oe.type!==G||Oe.texture!==re)&&(V!==be&&(s.activeTexture(be),V=be),s.bindTexture(G,re||E[G]),Oe.type=G,Oe.texture=re)}function T(){const G=W[V];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function le(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function z(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function k(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function j(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(G){Q.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Q.copy(G))}function me(G){X.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),X.copy(G))}function Be(G,re){let be=f.get(re);be===void 0&&(be=new WeakMap,f.set(re,be));let Oe=be.get(G);Oe===void 0&&(Oe=s.getUniformBlockIndex(re,G.name),be.set(G,Oe))}function ze(G,re){const Oe=f.get(re).get(G);u.get(re)!==Oe&&(s.uniformBlockBinding(re,Oe,G.__bindingPointIndex),u.set(re,Oe))}function Je(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},V=null,W={},d={},_=new WeakMap,p=[],m=null,g=!1,x=null,b=null,v=null,y=null,M=null,L=null,w=null,A=!1,R=null,B=null,U=null,C=null,I=null,Q.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Y,disable:ee,bindFramebuffer:ae,drawBuffers:oe,useProgram:pe,setBlending:Fe,setMaterial:Te,setFlipSided:Ie,setCullFace:Ne,setLineWidth:ue,setPolygonOffset:Me,setScissorTest:Pe,activeTexture:ge,bindTexture:O,unbindTexture:T,compressedTexImage2D:Z,compressedTexImage3D:ie,texImage2D:Se,texImage3D:ye,updateUBOMapping:Be,uniformBlockBinding:ze,texStorage2D:j,texStorage3D:xe,texSubImage2D:le,texSubImage3D:ve,compressedTexSubImage2D:z,compressedTexSubImage3D:k,scissor:_e,viewport:me,reset:Je}}function mv(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,T){return g?new OffscreenCanvas(O,T):os("canvas")}function b(O,T,Z,ie){let le=1;if((O.width>ie||O.height>ie)&&(le=ie/Math.max(O.width,O.height)),le<1||T===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const ve=T?fa:Math.floor,z=ve(le*O.width),k=ve(le*O.height);p===void 0&&(p=x(z,k));const j=Z?x(z,k):p;return j.width=z,j.height=k,j.getContext("2d").drawImage(O,0,0,z,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+z+"x"+k+")."),j}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function v(O){return Do(O.width)&&Do(O.height)}function y(O){return a?!1:O.wrapS!==kn||O.wrapT!==kn||O.minFilter!==an&&O.minFilter!==dn}function M(O,T){return O.generateMipmaps&&T&&O.minFilter!==an&&O.minFilter!==dn}function L(O){s.generateMipmap(O)}function w(O,T,Z,ie,le=!1){if(a===!1)return T;if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ve=T;return T===6403&&(Z===5126&&(ve=33326),Z===5131&&(ve=33325),Z===5121&&(ve=33321)),T===33319&&(Z===5126&&(ve=33328),Z===5131&&(ve=33327),Z===5121&&(ve=33323)),T===6408&&(Z===5126&&(ve=34836),Z===5131&&(ve=34842),Z===5121&&(ve=ie===xt&&le===!1?35907:32856),Z===32819&&(ve=32854),Z===32820&&(ve=32855)),(ve===33325||ve===33326||ve===33327||ve===33328||ve===34842||ve===34836)&&e.get("EXT_color_buffer_float"),ve}function A(O,T,Z){return M(O,Z)===!0||O.isFramebufferTexture&&O.minFilter!==an&&O.minFilter!==dn?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function R(O){return O===an||O===Cl||O===Fa?9728:9729}function B(O){const T=O.target;T.removeEventListener("dispose",B),C(T),T.isVideoTexture&&_.delete(T)}function U(O){const T=O.target;T.removeEventListener("dispose",U),D(T)}function C(O){const T=n.get(O);if(T.__webglInit===void 0)return;const Z=O.source,ie=m.get(Z);if(ie){const le=ie[T.__cacheKey];le.usedTimes--,le.usedTimes===0&&I(O),Object.keys(ie).length===0&&m.delete(Z)}n.remove(O)}function I(O){const T=n.get(O);s.deleteTexture(T.__webglTexture);const Z=O.source,ie=m.get(Z);delete ie[T.__cacheKey],o.memory.textures--}function D(O){const T=O.texture,Z=n.get(O),ie=n.get(T);if(ie.__webglTexture!==void 0&&(s.deleteTexture(ie.__webglTexture),o.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let le=0;le<6;le++)s.deleteFramebuffer(Z.__webglFramebuffer[le]),Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer[le]);else{if(s.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let le=0;le<Z.__webglColorRenderbuffer.length;le++)Z.__webglColorRenderbuffer[le]&&s.deleteRenderbuffer(Z.__webglColorRenderbuffer[le]);Z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let le=0,ve=T.length;le<ve;le++){const z=n.get(T[le]);z.__webglTexture&&(s.deleteTexture(z.__webglTexture),o.memory.textures--),n.remove(T[le])}n.remove(T),n.remove(O)}let H=0;function te(){H=0}function J(){const O=H;return O>=l&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l),H+=1,O}function V(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.encoding),T.join()}function W(O,T){const Z=n.get(O);if(O.isVideoTexture&&Pe(O),O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){const ie=O.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(Z,O,T);return}}t.bindTexture(3553,Z.__webglTexture,33984+T)}function S(O,T){const Z=n.get(O);if(O.version>0&&Z.__version!==O.version){ee(Z,O,T);return}t.bindTexture(35866,Z.__webglTexture,33984+T)}function P(O,T){const Z=n.get(O);if(O.version>0&&Z.__version!==O.version){ee(Z,O,T);return}t.bindTexture(32879,Z.__webglTexture,33984+T)}function Q(O,T){const Z=n.get(O);if(O.version>0&&Z.__version!==O.version){ae(Z,O,T);return}t.bindTexture(34067,Z.__webglTexture,33984+T)}const X={[To]:10497,[kn]:33071,[Ao]:33648},q={[an]:9728,[Cl]:9984,[Fa]:9986,[dn]:9729,[Yh]:9985,[rs]:9987};function E(O,T,Z){if(Z?(s.texParameteri(O,10242,X[T.wrapS]),s.texParameteri(O,10243,X[T.wrapT]),(O===32879||O===35866)&&s.texParameteri(O,32882,X[T.wrapR]),s.texParameteri(O,10240,q[T.magFilter]),s.texParameteri(O,10241,q[T.minFilter])):(s.texParameteri(O,10242,33071),s.texParameteri(O,10243,33071),(O===32879||O===35866)&&s.texParameteri(O,32882,33071),(T.wrapS!==kn||T.wrapT!==kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(O,10240,R(T.magFilter)),s.texParameteri(O,10241,R(T.minFilter)),T.minFilter!==an&&T.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===an||T.minFilter!==Fa&&T.minFilter!==rs||T.type===Ri&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===ss&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(s.texParameterf(O,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function Y(O,T){let Z=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",B));const ie=T.source;let le=m.get(ie);le===void 0&&(le={},m.set(ie,le));const ve=V(T);if(ve!==O.__cacheKey){le[ve]===void 0&&(le[ve]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),le[ve].usedTimes++;const z=le[O.__cacheKey];z!==void 0&&(le[O.__cacheKey].usedTimes--,z.usedTimes===0&&I(T)),O.__cacheKey=ve,O.__webglTexture=le[ve].texture}return Z}function ee(O,T,Z){let ie=3553;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=35866),T.isData3DTexture&&(ie=32879);const le=Y(O,T),ve=T.source;t.bindTexture(ie,O.__webglTexture,33984+Z);const z=n.get(ve);if(ve.version!==z.__version||le===!0){t.activeTexture(33984+Z),s.pixelStorei(37440,T.flipY),s.pixelStorei(37441,T.premultiplyAlpha),s.pixelStorei(3317,T.unpackAlignment),s.pixelStorei(37443,0);const k=y(T)&&v(T.image)===!1;let j=b(T.image,k,!1,u);j=ge(T,j);const xe=v(j)||a,Se=r.convert(T.format,T.encoding);let ye=r.convert(T.type),_e=w(T.internalFormat,Se,ye,T.encoding,T.isVideoTexture);E(ie,T,xe);let me;const Be=T.mipmaps,ze=a&&T.isVideoTexture!==!0,Je=z.__version===void 0||le===!0,G=A(T,j,xe);if(T.isDepthTexture)_e=6402,a?T.type===Ri?_e=36012:T.type===Pi?_e=33190:T.type===xr?_e=35056:_e=33189:T.type===Ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Ui&&_e===6402&&T.type!==Fu&&T.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Pi,ye=r.convert(T.type)),T.format===Mr&&_e===6402&&(_e=34041,T.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=xr,ye=r.convert(T.type))),Je&&(ze?t.texStorage2D(3553,1,_e,j.width,j.height):t.texImage2D(3553,0,_e,j.width,j.height,0,Se,ye,null));else if(T.isDataTexture)if(Be.length>0&&xe){ze&&Je&&t.texStorage2D(3553,G,_e,Be[0].width,Be[0].height);for(let re=0,be=Be.length;re<be;re++)me=Be[re],ze?t.texSubImage2D(3553,re,0,0,me.width,me.height,Se,ye,me.data):t.texImage2D(3553,re,_e,me.width,me.height,0,Se,ye,me.data);T.generateMipmaps=!1}else ze?(Je&&t.texStorage2D(3553,G,_e,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,Se,ye,j.data)):t.texImage2D(3553,0,_e,j.width,j.height,0,Se,ye,j.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ze&&Je&&t.texStorage3D(35866,G,_e,Be[0].width,Be[0].height,j.depth);for(let re=0,be=Be.length;re<be;re++)me=Be[re],T.format!==zn?Se!==null?ze?t.compressedTexSubImage3D(35866,re,0,0,0,me.width,me.height,j.depth,Se,me.data,0,0):t.compressedTexImage3D(35866,re,_e,me.width,me.height,j.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(35866,re,0,0,0,me.width,me.height,j.depth,Se,ye,me.data):t.texImage3D(35866,re,_e,me.width,me.height,j.depth,0,Se,ye,me.data)}else{ze&&Je&&t.texStorage2D(3553,G,_e,Be[0].width,Be[0].height);for(let re=0,be=Be.length;re<be;re++)me=Be[re],T.format!==zn?Se!==null?ze?t.compressedTexSubImage2D(3553,re,0,0,me.width,me.height,Se,me.data):t.compressedTexImage2D(3553,re,_e,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(3553,re,0,0,me.width,me.height,Se,ye,me.data):t.texImage2D(3553,re,_e,me.width,me.height,0,Se,ye,me.data)}else if(T.isDataArrayTexture)ze?(Je&&t.texStorage3D(35866,G,_e,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,Se,ye,j.data)):t.texImage3D(35866,0,_e,j.width,j.height,j.depth,0,Se,ye,j.data);else if(T.isData3DTexture)ze?(Je&&t.texStorage3D(32879,G,_e,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,Se,ye,j.data)):t.texImage3D(32879,0,_e,j.width,j.height,j.depth,0,Se,ye,j.data);else if(T.isFramebufferTexture){if(Je)if(ze)t.texStorage2D(3553,G,_e,j.width,j.height);else{let re=j.width,be=j.height;for(let Oe=0;Oe<G;Oe++)t.texImage2D(3553,Oe,_e,re,be,0,Se,ye,null),re>>=1,be>>=1}}else if(Be.length>0&&xe){ze&&Je&&t.texStorage2D(3553,G,_e,Be[0].width,Be[0].height);for(let re=0,be=Be.length;re<be;re++)me=Be[re],ze?t.texSubImage2D(3553,re,0,0,Se,ye,me):t.texImage2D(3553,re,_e,Se,ye,me);T.generateMipmaps=!1}else ze?(Je&&t.texStorage2D(3553,G,_e,j.width,j.height),t.texSubImage2D(3553,0,0,0,Se,ye,j)):t.texImage2D(3553,0,_e,Se,ye,j);M(T,xe)&&L(ie),z.__version=ve.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function ae(O,T,Z){if(T.image.length!==6)return;const ie=Y(O,T),le=T.source;t.bindTexture(34067,O.__webglTexture,33984+Z);const ve=n.get(le);if(le.version!==ve.__version||ie===!0){t.activeTexture(33984+Z),s.pixelStorei(37440,T.flipY),s.pixelStorei(37441,T.premultiplyAlpha),s.pixelStorei(3317,T.unpackAlignment),s.pixelStorei(37443,0);const z=T.isCompressedTexture||T.image[0].isCompressedTexture,k=T.image[0]&&T.image[0].isDataTexture,j=[];for(let re=0;re<6;re++)!z&&!k?j[re]=b(T.image[re],!1,!0,c):j[re]=k?T.image[re].image:T.image[re],j[re]=ge(T,j[re]);const xe=j[0],Se=v(xe)||a,ye=r.convert(T.format,T.encoding),_e=r.convert(T.type),me=w(T.internalFormat,ye,_e,T.encoding),Be=a&&T.isVideoTexture!==!0,ze=ve.__version===void 0||ie===!0;let Je=A(T,xe,Se);E(34067,T,Se);let G;if(z){Be&&ze&&t.texStorage2D(34067,Je,me,xe.width,xe.height);for(let re=0;re<6;re++){G=j[re].mipmaps;for(let be=0;be<G.length;be++){const Oe=G[be];T.format!==zn?ye!==null?Be?t.compressedTexSubImage2D(34069+re,be,0,0,Oe.width,Oe.height,ye,Oe.data):t.compressedTexImage2D(34069+re,be,me,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(34069+re,be,0,0,Oe.width,Oe.height,ye,_e,Oe.data):t.texImage2D(34069+re,be,me,Oe.width,Oe.height,0,ye,_e,Oe.data)}}}else{G=T.mipmaps,Be&&ze&&(G.length>0&&Je++,t.texStorage2D(34067,Je,me,j[0].width,j[0].height));for(let re=0;re<6;re++)if(k){Be?t.texSubImage2D(34069+re,0,0,0,j[re].width,j[re].height,ye,_e,j[re].data):t.texImage2D(34069+re,0,me,j[re].width,j[re].height,0,ye,_e,j[re].data);for(let be=0;be<G.length;be++){const Ue=G[be].image[re].image;Be?t.texSubImage2D(34069+re,be+1,0,0,Ue.width,Ue.height,ye,_e,Ue.data):t.texImage2D(34069+re,be+1,me,Ue.width,Ue.height,0,ye,_e,Ue.data)}}else{Be?t.texSubImage2D(34069+re,0,0,0,ye,_e,j[re]):t.texImage2D(34069+re,0,me,ye,_e,j[re]);for(let be=0;be<G.length;be++){const Oe=G[be];Be?t.texSubImage2D(34069+re,be+1,0,0,ye,_e,Oe.image[re]):t.texImage2D(34069+re,be+1,me,ye,_e,Oe.image[re])}}}M(T,Se)&&L(34067),ve.__version=le.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function oe(O,T,Z,ie,le){const ve=r.convert(Z.format,Z.encoding),z=r.convert(Z.type),k=w(Z.internalFormat,ve,z,Z.encoding);n.get(T).__hasExternalTextures||(le===32879||le===35866?t.texImage3D(le,0,k,T.width,T.height,T.depth,0,ve,z,null):t.texImage2D(le,0,k,T.width,T.height,0,ve,z,null)),t.bindFramebuffer(36160,O),Me(T)?h.framebufferTexture2DMultisampleEXT(36160,ie,le,n.get(Z).__webglTexture,0,ue(T)):(le===3553||le>=34069&&le<=34074)&&s.framebufferTexture2D(36160,ie,le,n.get(Z).__webglTexture,0),t.bindFramebuffer(36160,null)}function pe(O,T,Z){if(s.bindRenderbuffer(36161,O),T.depthBuffer&&!T.stencilBuffer){let ie=33189;if(Z||Me(T)){const le=T.depthTexture;le&&le.isDepthTexture&&(le.type===Ri?ie=36012:le.type===Pi&&(ie=33190));const ve=ue(T);Me(T)?h.renderbufferStorageMultisampleEXT(36161,ve,ie,T.width,T.height):s.renderbufferStorageMultisample(36161,ve,ie,T.width,T.height)}else s.renderbufferStorage(36161,ie,T.width,T.height);s.framebufferRenderbuffer(36160,36096,36161,O)}else if(T.depthBuffer&&T.stencilBuffer){const ie=ue(T);Z&&Me(T)===!1?s.renderbufferStorageMultisample(36161,ie,35056,T.width,T.height):Me(T)?h.renderbufferStorageMultisampleEXT(36161,ie,35056,T.width,T.height):s.renderbufferStorage(36161,34041,T.width,T.height),s.framebufferRenderbuffer(36160,33306,36161,O)}else{const ie=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let le=0;le<ie.length;le++){const ve=ie[le],z=r.convert(ve.format,ve.encoding),k=r.convert(ve.type),j=w(ve.internalFormat,z,k,ve.encoding),xe=ue(T);Z&&Me(T)===!1?s.renderbufferStorageMultisample(36161,xe,j,T.width,T.height):Me(T)?h.renderbufferStorageMultisampleEXT(36161,xe,j,T.width,T.height):s.renderbufferStorage(36161,j,T.width,T.height)}}s.bindRenderbuffer(36161,null)}function N(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),W(T.depthTexture,0);const ie=n.get(T.depthTexture).__webglTexture,le=ue(T);if(T.depthTexture.format===Ui)Me(T)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,le):s.framebufferTexture2D(36160,36096,3553,ie,0);else if(T.depthTexture.format===Mr)Me(T)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,le):s.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function he(O){const T=n.get(O),Z=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");N(T.__webglFramebuffer,O)}else if(Z){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]=s.createRenderbuffer(),pe(T.__webglDepthbuffer[ie],O,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),pe(T.__webglDepthbuffer,O,!1);t.bindFramebuffer(36160,null)}function Fe(O,T,Z){const ie=n.get(O);T!==void 0&&oe(ie.__webglFramebuffer,O,O.texture,36064,3553),Z!==void 0&&he(O)}function Te(O){const T=O.texture,Z=n.get(O),ie=n.get(T);O.addEventListener("dispose",U),O.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=T.version,o.memory.textures++);const le=O.isWebGLCubeRenderTarget===!0,ve=O.isWebGLMultipleRenderTargets===!0,z=v(O)||a;if(le){Z.__webglFramebuffer=[];for(let k=0;k<6;k++)Z.__webglFramebuffer[k]=s.createFramebuffer()}else{if(Z.__webglFramebuffer=s.createFramebuffer(),ve)if(i.drawBuffers){const k=O.texture;for(let j=0,xe=k.length;j<xe;j++){const Se=n.get(k[j]);Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&O.samples>0&&Me(O)===!1){const k=ve?T:[T];Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let j=0;j<k.length;j++){const xe=k[j];Z.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[j]);const Se=r.convert(xe.format,xe.encoding),ye=r.convert(xe.type),_e=w(xe.internalFormat,Se,ye,xe.encoding,O.isXRRenderTarget===!0),me=ue(O);s.renderbufferStorageMultisample(36161,me,_e,O.width,O.height),s.framebufferRenderbuffer(36160,36064+j,36161,Z.__webglColorRenderbuffer[j])}s.bindRenderbuffer(36161,null),O.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),pe(Z.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(36160,null)}}if(le){t.bindTexture(34067,ie.__webglTexture),E(34067,T,z);for(let k=0;k<6;k++)oe(Z.__webglFramebuffer[k],O,T,36064,34069+k);M(T,z)&&L(34067),t.unbindTexture()}else if(ve){const k=O.texture;for(let j=0,xe=k.length;j<xe;j++){const Se=k[j],ye=n.get(Se);t.bindTexture(3553,ye.__webglTexture),E(3553,Se,z),oe(Z.__webglFramebuffer,O,Se,36064+j,3553),M(Se,z)&&L(3553)}t.unbindTexture()}else{let k=3553;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(a?k=O.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(k,ie.__webglTexture),E(k,T,z),oe(Z.__webglFramebuffer,O,T,36064,k),M(T,z)&&L(k),t.unbindTexture()}O.depthBuffer&&he(O)}function Ie(O){const T=v(O)||a,Z=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let ie=0,le=Z.length;ie<le;ie++){const ve=Z[ie];if(M(ve,T)){const z=O.isWebGLCubeRenderTarget?34067:3553,k=n.get(ve).__webglTexture;t.bindTexture(z,k),L(z),t.unbindTexture()}}}function Ne(O){if(a&&O.samples>0&&Me(O)===!1){const T=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],Z=O.width,ie=O.height;let le=16384;const ve=[],z=O.stencilBuffer?33306:36096,k=n.get(O),j=O.isWebGLMultipleRenderTargets===!0;if(j)for(let xe=0;xe<T.length;xe++)t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+xe,36161,null),t.bindFramebuffer(36160,k.__webglFramebuffer),s.framebufferTexture2D(36009,36064+xe,3553,null,0);t.bindFramebuffer(36008,k.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,k.__webglFramebuffer);for(let xe=0;xe<T.length;xe++){ve.push(36064+xe),O.depthBuffer&&ve.push(z);const Se=k.__ignoreDepthValues!==void 0?k.__ignoreDepthValues:!1;if(Se===!1&&(O.depthBuffer&&(le|=256),O.stencilBuffer&&(le|=1024)),j&&s.framebufferRenderbuffer(36008,36064,36161,k.__webglColorRenderbuffer[xe]),Se===!0&&(s.invalidateFramebuffer(36008,[z]),s.invalidateFramebuffer(36009,[z])),j){const ye=n.get(T[xe]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,ye,0)}s.blitFramebuffer(0,0,Z,ie,0,0,Z,ie,le,9728),d&&s.invalidateFramebuffer(36008,ve)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let xe=0;xe<T.length;xe++){t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+xe,36161,k.__webglColorRenderbuffer[xe]);const Se=n.get(T[xe]).__webglTexture;t.bindFramebuffer(36160,k.__webglFramebuffer),s.framebufferTexture2D(36009,36064+xe,3553,Se,0)}t.bindFramebuffer(36009,k.__webglMultisampledFramebuffer)}}function ue(O){return Math.min(f,O.samples)}function Me(O){const T=n.get(O);return a&&O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Pe(O){const T=o.render.frame;_.get(O)!==T&&(_.set(O,T),O.update())}function ge(O,T){const Z=O.encoding,ie=O.format,le=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===Co||Z!==xi&&(Z===xt?a===!1?e.has("EXT_sRGB")===!0&&ie===zn?(O.format=Co,O.minFilter=dn,O.generateMipmaps=!1):T=Nu.sRGBToLinear(T):(ie!==zn||le!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),T}this.allocateTextureUnit=J,this.resetTextureUnits=te,this.setTexture2D=W,this.setTexture2DArray=S,this.setTexture3D=P,this.setTextureCube=Q,this.rebindTextures=Fe,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Me}function pv(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===zi)return 5121;if(r===Qh)return 32819;if(r===$h)return 32820;if(r===Zh)return 5120;if(r===Kh)return 5122;if(r===Fu)return 5123;if(r===Jh)return 5124;if(r===Pi)return 5125;if(r===Ri)return 5126;if(r===ss)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ed)return 6406;if(r===zn)return 6408;if(r===nd)return 6409;if(r===id)return 6410;if(r===Ui)return 6402;if(r===Mr)return 34041;if(r===td)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Co)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===rd)return 6403;if(r===sd)return 36244;if(r===ad)return 33319;if(r===od)return 33320;if(r===ld)return 36249;if(r===ka||r===za||r===Ba||r===Na)if(o===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ka)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ka)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===za)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ba)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Na)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dl||r===Ll||r===Pl||r===Rl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Dl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ll)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Il||r===Ul)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Il)return o===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ul)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ol||r===Fl||r===kl||r===zl||r===Bl||r===Nl||r===Gl||r===Vl||r===Wl||r===Hl||r===jl||r===Xl||r===ql||r===Yl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ol)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fl)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kl)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zl)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bl)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nl)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gl)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vl)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wl)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hl)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jl)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xl)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ql)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yl)return o===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Zl)return o===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===xr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class gv extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $s extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vv={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n),g=this._getHandJoint(c,p);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $s;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _v extends on{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:Ui,u!==Ui&&u!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ui&&(n=Pi),n===void 0&&u===Mr&&(n=xr),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1}}class bv extends Ni{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,d=null;const _=t.getContextAttributes();let p=null,m=null;const g=[],x=[],b=new Set,v=new Map,y=new yn;y.layers.enable(1),y.viewport=new Tt;const M=new yn;M.layers.enable(2),M.viewport=new Tt;const L=[y,M],w=new gv;w.layers.enable(1),w.layers.enable(2);let A=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(S){let P=g[S];return P===void 0&&(P=new fo,g[S]=P),P.getTargetRaySpace()},this.getControllerGrip=function(S){let P=g[S];return P===void 0&&(P=new fo,g[S]=P),P.getGripSpace()},this.getHand=function(S){let P=g[S];return P===void 0&&(P=new fo,g[S]=P),P.getHandSpace()};function B(S){const P=x.indexOf(S.inputSource);if(P===-1)return;const Q=g[P];Q!==void 0&&Q.dispatchEvent({type:S.type,data:S.inputSource})}function U(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",C);for(let S=0;S<g.length;S++){const P=x[S];P!==null&&(x[S]=null,g[S].disconnect(P))}A=null,R=null,e.setRenderTarget(p),h=null,f=null,u=null,i=null,m=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(S){r=S,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(S){a=S,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(S){l=S},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(S){if(i=S,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",U),i.addEventListener("inputsourceschange",C),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const P={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,P),i.updateRenderState({baseLayer:h}),m=new wi(h.framebufferWidth,h.framebufferHeight,{format:zn,type:zi,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let P=null,Q=null,X=null;_.depth&&(X=_.stencil?35056:33190,P=_.stencil?Mr:Ui,Q=_.stencil?xr:Pi);const q={colorFormat:32856,depthFormat:X,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(q),i.updateRenderState({layers:[f]}),m=new wi(f.textureWidth,f.textureHeight,{format:zn,type:zi,depthTexture:new _v(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const E=e.properties.get(m);E.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),W.setContext(i),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function C(S){for(let P=0;P<S.removed.length;P++){const Q=S.removed[P],X=x.indexOf(Q);X>=0&&(x[X]=null,g[X].disconnect(Q))}for(let P=0;P<S.added.length;P++){const Q=S.added[P];let X=x.indexOf(Q);if(X===-1){for(let E=0;E<g.length;E++)if(E>=x.length){x.push(Q),X=E;break}else if(x[E]===null){x[E]=Q,X=E;break}if(X===-1)break}const q=g[X];q&&q.connect(Q)}}const I=new K,D=new K;function H(S,P,Q){I.setFromMatrixPosition(P.matrixWorld),D.setFromMatrixPosition(Q.matrixWorld);const X=I.distanceTo(D),q=P.projectionMatrix.elements,E=Q.projectionMatrix.elements,Y=q[14]/(q[10]-1),ee=q[14]/(q[10]+1),ae=(q[9]+1)/q[5],oe=(q[9]-1)/q[5],pe=(q[8]-1)/q[0],N=(E[8]+1)/E[0],he=Y*pe,Fe=Y*N,Te=X/(-pe+N),Ie=Te*-pe;P.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(Ie),S.translateZ(Te),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert();const Ne=Y+Te,ue=ee+Te,Me=he-Ie,Pe=Fe+(X-Ie),ge=ae*ee/ue*Ne,O=oe*ee/ue*Ne;S.projectionMatrix.makePerspective(Me,Pe,ge,O,Ne,ue)}function te(S,P){P===null?S.matrixWorld.copy(S.matrix):S.matrixWorld.multiplyMatrices(P.matrixWorld,S.matrix),S.matrixWorldInverse.copy(S.matrixWorld).invert()}this.updateCamera=function(S){if(i===null)return;w.near=M.near=y.near=S.near,w.far=M.far=y.far=S.far,(A!==w.near||R!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),A=w.near,R=w.far);const P=S.parent,Q=w.cameras;te(w,P);for(let q=0;q<Q.length;q++)te(Q[q],P);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),S.matrix.copy(w.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale);const X=S.children;for(let q=0,E=X.length;q<E;q++)X[q].updateMatrixWorld(!0);Q.length===2?H(w,y,M):w.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(S){f!==null&&(f.fixedFoveation=S),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=S)},this.getPlanes=function(){return b};let J=null;function V(S,P){if(c=P.getViewerPose(l||o),d=P,c!==null){const Q=c.views;h!==null&&(e.setRenderTargetFramebuffer(m,h.framebuffer),e.setRenderTarget(m));let X=!1;Q.length!==w.cameras.length&&(w.cameras.length=0,X=!0);for(let q=0;q<Q.length;q++){const E=Q[q];let Y=null;if(h!==null)Y=h.getViewport(E);else{const ae=u.getViewSubImage(f,E);Y=ae.viewport,q===0&&(e.setRenderTargetTextures(m,ae.colorTexture,f.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(m))}let ee=L[q];ee===void 0&&(ee=new yn,ee.layers.enable(q),ee.viewport=new Tt,L[q]=ee),ee.matrix.fromArray(E.transform.matrix),ee.projectionMatrix.fromArray(E.projectionMatrix),ee.viewport.set(Y.x,Y.y,Y.width,Y.height),q===0&&w.matrix.copy(ee.matrix),X===!0&&w.cameras.push(ee)}}for(let Q=0;Q<g.length;Q++){const X=x[Q],q=g[Q];X!==null&&q!==void 0&&q.update(X,P,l||o)}if(J&&J(S,P),P.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:P.detectedPlanes});let Q=null;for(const X of b)P.detectedPlanes.has(X)||(Q===null&&(Q=[]),Q.push(X));if(Q!==null)for(const X of Q)b.delete(X),v.delete(X),n.dispatchEvent({type:"planeremoved",data:X});for(const X of P.detectedPlanes)if(!b.has(X))b.add(X),v.set(X,P.lastChangedTime),n.dispatchEvent({type:"planeadded",data:X});else{const q=v.get(X);X.lastChangedTime>q&&(v.set(X,X.lastChangedTime),n.dispatchEvent({type:"planechanged",data:X}))}}d=null}const W=new qu;W.setAnimationLoop(V),this.setAnimationLoop=function(S){J=S},this.dispose=function(){}}}function xv(s,e){function t(p,m){m.color.getRGB(p.fogColor.value,ju(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,g,x,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),u(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,b)):m.isMeshMatcapMaterial?(i(p,m),d(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),_(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,g,x):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Sn&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Sn&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const g=e.get(m).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let x;m.map?x=m.map:m.specularMap?x=m.specularMap:m.displacementMap?x=m.displacementMap:m.normalMap?x=m.normalMap:m.bumpMap?x=m.bumpMap:m.roughnessMap?x=m.roughnessMap:m.metalnessMap?x=m.metalnessMap:m.alphaMap?x=m.alphaMap:m.emissiveMap?x=m.emissiveMap:m.clearcoatMap?x=m.clearcoatMap:m.clearcoatNormalMap?x=m.clearcoatNormalMap:m.clearcoatRoughnessMap?x=m.clearcoatRoughnessMap:m.iridescenceMap?x=m.iridescenceMap:m.iridescenceThicknessMap?x=m.iridescenceThicknessMap:m.specularIntensityMap?x=m.specularIntensityMap:m.specularColorMap?x=m.specularColorMap:m.transmissionMap?x=m.transmissionMap:m.thicknessMap?x=m.thicknessMap:m.sheenColorMap?x=m.sheenColorMap:m.sheenRoughnessMap&&(x=m.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix));let b;m.aoMap?b=m.aoMap:m.lightMap&&(b=m.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,g,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*g,p.scale.value=x*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b;m.map?b=m.map:m.alphaMap&&(b=m.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let g;m.map?g=m.map:m.alphaMap&&(g=m.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,g){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Sn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function wv(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function l(x,b){const v=b.program;n.uniformBlockBinding(x,v)}function c(x,b){let v=i[x.id];v===void 0&&(_(x),v=u(x),i[x.id]=v,x.addEventListener("dispose",m));const y=b.program;n.updateUBOMapping(x,y);const M=e.render.frame;r[x.id]!==M&&(h(x),r[x.id]=M)}function u(x){const b=f();x.__bindingPointIndex=b;const v=s.createBuffer(),y=x.__size,M=x.usage;return s.bindBuffer(35345,v),s.bufferData(35345,y,M),s.bindBuffer(35345,null),s.bindBufferBase(35345,b,v),v}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const b=i[x.id],v=x.uniforms,y=x.__cache;s.bindBuffer(35345,b);for(let M=0,L=v.length;M<L;M++){const w=v[M];if(d(w,M,y)===!0){const A=w.__offset,R=Array.isArray(w.value)?w.value:[w.value];let B=0;for(let U=0;U<R.length;U++){const C=R[U],I=p(C);typeof C=="number"?(w.__data[0]=C,s.bufferSubData(35345,A+B,w.__data)):C.isMatrix3?(w.__data[0]=C.elements[0],w.__data[1]=C.elements[1],w.__data[2]=C.elements[2],w.__data[3]=C.elements[0],w.__data[4]=C.elements[3],w.__data[5]=C.elements[4],w.__data[6]=C.elements[5],w.__data[7]=C.elements[0],w.__data[8]=C.elements[6],w.__data[9]=C.elements[7],w.__data[10]=C.elements[8],w.__data[11]=C.elements[0]):(C.toArray(w.__data,B),B+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,A,w.__data)}}s.bindBuffer(35345,null)}function d(x,b,v){const y=x.value;if(v[b]===void 0){if(typeof y=="number")v[b]=y;else{const M=Array.isArray(y)?y:[y],L=[];for(let w=0;w<M.length;w++)L.push(M[w].clone());v[b]=L}return!0}else if(typeof y=="number"){if(v[b]!==y)return v[b]=y,!0}else{const M=Array.isArray(v[b])?v[b]:[v[b]],L=Array.isArray(y)?y:[y];for(let w=0;w<M.length;w++){const A=M[w];if(A.equals(L[w])===!1)return A.copy(L[w]),!0}}return!1}function _(x){const b=x.uniforms;let v=0;const y=16;let M=0;for(let L=0,w=b.length;L<w;L++){const A=b[L],R={boundary:0,storage:0},B=Array.isArray(A.value)?A.value:[A.value];for(let U=0,C=B.length;U<C;U++){const I=B[U],D=p(I);R.boundary+=D.boundary,R.storage+=D.storage}if(A.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=v,L>0){M=v%y;const U=y-M;M!==0&&U-R.boundary<0&&(v+=y-M,A.__offset=v)}v+=R.storage}return M=v%y,M>0&&(v+=y-M),x.__size=v,x.__cache={},this}function p(x){const b={boundary:0,storage:0};return typeof x=="number"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function m(x){const b=x.target;b.removeEventListener("dispose",m);const v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function g(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}function yv(){const s=os("canvas");return s.style.display="block",s}function tf(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:yv(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let f=null,h=null;const d=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=xi,this.physicallyCorrectLights=!1,this.toneMapping=Xn,this.toneMappingExposure=1;const p=this;let m=!1,g=0,x=0,b=null,v=-1,y=null;const M=new Tt,L=new Tt;let w=null,A=e.width,R=e.height,B=1,U=null,C=null;const I=new Tt(0,0,A,R),D=new Tt(0,0,A,R);let H=!1;const te=new Jo;let J=!1,V=!1,W=null;const S=new wt,P=new Ze,Q=new K,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function q(){return b===null?B:1}let E=t;function Y(F,ne){for(let se=0;se<F.length;se++){const $=F[se],ce=e.getContext($,ne);if(ce!==null)return ce}return null}try{const F={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wo}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",Be,!1),E===null){const ne=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&ne.shift(),E=Y(ne,F),E===null)throw Y(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}E.getShaderPrecisionFormat===void 0&&(E.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let ee,ae,oe,pe,N,he,Fe,Te,Ie,Ne,ue,Me,Pe,ge,O,T,Z,ie,le,ve,z,k,j,xe;function Se(){ee=new Og(E),ae=new Dg(E,ee,s),ee.init(ae),k=new pv(E,ee,ae),oe=new dv(E,ee,ae),pe=new zg,N=new tv,he=new mv(E,ee,oe,N,ae,k,pe),Fe=new Pg(p),Te=new Ug(p),Ie=new qd(E,ae),j=new Eg(E,ee,Ie,ae),Ne=new Fg(E,Ie,pe,j),ue=new Vg(E,Ne,Ie,pe),le=new Gg(E,ae,he),T=new Lg(N),Me=new ev(p,Fe,Te,ee,ae,j,T),Pe=new xv(p,N),ge=new iv,O=new cv(ee,ae),ie=new Ag(p,Fe,Te,oe,ue,u,o),Z=new hv(p,ue,ae),xe=new wv(E,pe,ae,oe),ve=new Cg(E,ee,pe,ae),z=new kg(E,ee,pe,ae),pe.programs=Me.programs,p.capabilities=ae,p.extensions=ee,p.properties=N,p.renderLists=ge,p.shadowMap=Z,p.state=oe,p.info=pe}Se();const ye=new bv(p,E);this.xr=ye,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const F=ee.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=ee.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(F){F!==void 0&&(B=F,this.setSize(A,R,!1))},this.getSize=function(F){return F.set(A,R)},this.setSize=function(F,ne,se){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=F,R=ne,e.width=Math.floor(F*B),e.height=Math.floor(ne*B),se!==!1&&(e.style.width=F+"px",e.style.height=ne+"px"),this.setViewport(0,0,F,ne)},this.getDrawingBufferSize=function(F){return F.set(A*B,R*B).floor()},this.setDrawingBufferSize=function(F,ne,se){A=F,R=ne,B=se,e.width=Math.floor(F*se),e.height=Math.floor(ne*se),this.setViewport(0,0,F,ne)},this.getCurrentViewport=function(F){return F.copy(M)},this.getViewport=function(F){return F.copy(I)},this.setViewport=function(F,ne,se,$){F.isVector4?I.set(F.x,F.y,F.z,F.w):I.set(F,ne,se,$),oe.viewport(M.copy(I).multiplyScalar(B).floor())},this.getScissor=function(F){return F.copy(D)},this.setScissor=function(F,ne,se,$){F.isVector4?D.set(F.x,F.y,F.z,F.w):D.set(F,ne,se,$),oe.scissor(L.copy(D).multiplyScalar(B).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(F){oe.setScissorTest(H=F)},this.setOpaqueSort=function(F){U=F},this.setTransparentSort=function(F){C=F},this.getClearColor=function(F){return F.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(F=!0,ne=!0,se=!0){let $=0;F&&($|=16384),ne&&($|=256),se&&($|=1024),E.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Be,!1),ge.dispose(),O.dispose(),N.dispose(),Fe.dispose(),Te.dispose(),ue.dispose(),j.dispose(),xe.dispose(),Me.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Oe),ye.removeEventListener("sessionend",Ue),W&&(W.dispose(),W=null),lt.stop()};function _e(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const F=pe.autoReset,ne=Z.enabled,se=Z.autoUpdate,$=Z.needsUpdate,ce=Z.type;Se(),pe.autoReset=F,Z.enabled=ne,Z.autoUpdate=se,Z.needsUpdate=$,Z.type=ce}function Be(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function ze(F){const ne=F.target;ne.removeEventListener("dispose",ze),Je(ne)}function Je(F){G(F),N.remove(F)}function G(F){const ne=N.get(F).programs;ne!==void 0&&(ne.forEach(function(se){Me.releaseProgram(se)}),F.isShaderMaterial&&Me.releaseShaderCache(F))}this.renderBufferDirect=function(F,ne,se,$,ce,He){ne===null&&(ne=X);const Ye=ce.isMesh&&ce.matrixWorld.determinant()<0,Qe=Ft(F,ne,se,$,ce);oe.setMaterial($,Ye);let $e=se.index,ot=1;$.wireframe===!0&&($e=Ne.getWireframeAttribute(se),ot=2);const at=se.drawRange,ct=se.attributes.position;let St=at.start*ot,Vt=(at.start+at.count)*ot;He!==null&&(St=Math.max(St,He.start*ot),Vt=Math.min(Vt,(He.start+He.count)*ot)),$e!==null?(St=Math.max(St,0),Vt=Math.min(Vt,$e.count)):ct!=null&&(St=Math.max(St,0),Vt=Math.min(Vt,ct.count));const _n=Vt-St;if(_n<0||_n===1/0)return;j.setup(ce,$,Qe,se,$e);let Dn,Re=ve;if($e!==null&&(Dn=Ie.get($e),Re=z,Re.setIndex(Dn)),ce.isMesh)$.wireframe===!0?(oe.setLineWidth($.wireframeLinewidth*q()),Re.setMode(1)):Re.setMode(4);else if(ce.isLine){let et=$.linewidth;et===void 0&&(et=1),oe.setLineWidth(et*q()),ce.isLineSegments?Re.setMode(1):ce.isLineLoop?Re.setMode(2):Re.setMode(3)}else ce.isPoints?Re.setMode(0):ce.isSprite&&Re.setMode(4);if(ce.isInstancedMesh)Re.renderInstances(St,_n,ce.count);else if(se.isInstancedBufferGeometry){const et=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Rr=Math.min(se.instanceCount,et);Re.renderInstances(St,_n,Rr)}else Re.render(St,_n)},this.compile=function(F,ne){function se($,ce,He){$.transparent===!0&&$.side===Us?($.side=Sn,$.needsUpdate=!0,vt($,ce,He),$.side=bi,$.needsUpdate=!0,vt($,ce,He),$.side=Us):vt($,ce,He)}h=O.get(F),h.init(),_.push(h),F.traverseVisible(function($){$.isLight&&$.layers.test(ne.layers)&&(h.pushLight($),$.castShadow&&h.pushShadow($))}),h.setupLights(p.physicallyCorrectLights),F.traverse(function($){const ce=$.material;if(ce)if(Array.isArray(ce))for(let He=0;He<ce.length;He++){const Ye=ce[He];se(Ye,F,$)}else se(ce,F,$)}),_.pop(),h=null};let re=null;function be(F){re&&re(F)}function Oe(){lt.stop()}function Ue(){lt.start()}const lt=new qu;lt.setAnimationLoop(be),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(F){re=F,ye.setAnimationLoop(F),F===null?lt.stop():lt.start()},ye.addEventListener("sessionstart",Oe),ye.addEventListener("sessionend",Ue),this.render=function(F,ne){if(ne!==void 0&&ne.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(ne),ne=ye.getCamera()),F.isScene===!0&&F.onBeforeRender(p,F,ne,b),h=O.get(F,_.length),h.init(),_.push(h),S.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),te.setFromProjectionMatrix(S),V=this.localClippingEnabled,J=T.init(this.clippingPlanes,V,ne),f=ge.get(F,d.length),f.init(),d.push(f),Ke(F,ne,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(U,C),J===!0&&T.beginShadows();const se=h.state.shadowsArray;if(Z.render(se,F,ne),J===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(f,F),h.setupLights(p.physicallyCorrectLights),ne.isArrayCamera){const $=ne.cameras;for(let ce=0,He=$.length;ce<He;ce++){const Ye=$[ce];qe(f,F,Ye,Ye.viewport)}}else qe(f,F,ne);b!==null&&(he.updateMultisampleRenderTarget(b),he.updateRenderTargetMipmap(b)),F.isScene===!0&&F.onAfterRender(p,F,ne),j.resetDefaultState(),v=-1,y=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function Ke(F,ne,se,$){if(F.visible===!1)return;if(F.layers.test(ne.layers)){if(F.isGroup)se=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(ne);else if(F.isLight)h.pushLight(F),F.castShadow&&h.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||te.intersectsSprite(F)){$&&Q.setFromMatrixPosition(F.matrixWorld).applyMatrix4(S);const Ye=ue.update(F),Qe=F.material;Qe.visible&&f.push(F,Ye,Qe,se,Q.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(F.isSkinnedMesh&&F.skeleton.frame!==pe.render.frame&&(F.skeleton.update(),F.skeleton.frame=pe.render.frame),!F.frustumCulled||te.intersectsObject(F))){$&&Q.setFromMatrixPosition(F.matrixWorld).applyMatrix4(S);const Ye=ue.update(F),Qe=F.material;if(Array.isArray(Qe)){const $e=Ye.groups;for(let ot=0,at=$e.length;ot<at;ot++){const ct=$e[ot],St=Qe[ct.materialIndex];St&&St.visible&&f.push(F,Ye,St,se,Q.z,ct)}}else Qe.visible&&f.push(F,Ye,Qe,se,Q.z,null)}}const He=F.children;for(let Ye=0,Qe=He.length;Ye<Qe;Ye++)Ke(He[Ye],ne,se,$)}function qe(F,ne,se,$){const ce=F.opaque,He=F.transmissive,Ye=F.transparent;h.setupLightsView(se),He.length>0&&yt(ce,ne,se),$&&oe.viewport(M.copy($)),ce.length>0&&st(ce,ne,se),He.length>0&&st(He,ne,se),Ye.length>0&&st(Ye,ne,se),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function yt(F,ne,se){const $=ae.isWebGL2;W===null&&(W=new wi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")?ss:zi,minFilter:rs,samples:$&&r===!0?4:0})),p.getDrawingBufferSize(P),$?W.setSize(P.x,P.y):W.setSize(fa(P.x),fa(P.y));const ce=p.getRenderTarget();p.setRenderTarget(W),p.clear();const He=p.toneMapping;p.toneMapping=Xn,st(F,ne,se),p.toneMapping=He,he.updateMultisampleRenderTarget(W),he.updateRenderTargetMipmap(W),p.setRenderTarget(ce)}function st(F,ne,se){const $=ne.isScene===!0?ne.overrideMaterial:null;for(let ce=0,He=F.length;ce<He;ce++){const Ye=F[ce],Qe=Ye.object,$e=Ye.geometry,ot=$===null?Ye.material:$,at=Ye.group;Qe.layers.test(se.layers)&&ut(Qe,ne,se,$e,ot,at)}}function ut(F,ne,se,$,ce,He){F.onBeforeRender(p,ne,se,$,ce,He),F.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ce.onBeforeRender(p,ne,se,$,F,He),ce.transparent===!0&&ce.side===Us?(ce.side=Sn,ce.needsUpdate=!0,p.renderBufferDirect(se,ne,$,ce,F,He),ce.side=bi,ce.needsUpdate=!0,p.renderBufferDirect(se,ne,$,ce,F,He),ce.side=Us):p.renderBufferDirect(se,ne,$,ce,F,He),F.onAfterRender(p,ne,se,$,ce,He)}function vt(F,ne,se){ne.isScene!==!0&&(ne=X);const $=N.get(F),ce=h.state.lights,He=h.state.shadowsArray,Ye=ce.state.version,Qe=Me.getParameters(F,ce.state,He,ne,se),$e=Me.getProgramCacheKey(Qe);let ot=$.programs;$.environment=F.isMeshStandardMaterial?ne.environment:null,$.fog=ne.fog,$.envMap=(F.isMeshStandardMaterial?Te:Fe).get(F.envMap||$.environment),ot===void 0&&(F.addEventListener("dispose",ze),ot=new Map,$.programs=ot);let at=ot.get($e);if(at!==void 0){if($.currentProgram===at&&$.lightsStateVersion===Ye)return vn(F,Qe),at}else Qe.uniforms=Me.getUniforms(F),F.onBuild(se,Qe,p),F.onBeforeCompile(Qe,p),at=Me.acquireProgram(Qe,$e),ot.set($e,at),$.uniforms=Qe.uniforms;const ct=$.uniforms;(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(ct.clippingPlanes=T.uniform),vn(F,Qe),$.needsLights=tn(F),$.lightsStateVersion=Ye,$.needsLights&&(ct.ambientLightColor.value=ce.state.ambient,ct.lightProbe.value=ce.state.probe,ct.directionalLights.value=ce.state.directional,ct.directionalLightShadows.value=ce.state.directionalShadow,ct.spotLights.value=ce.state.spot,ct.spotLightShadows.value=ce.state.spotShadow,ct.rectAreaLights.value=ce.state.rectArea,ct.ltc_1.value=ce.state.rectAreaLTC1,ct.ltc_2.value=ce.state.rectAreaLTC2,ct.pointLights.value=ce.state.point,ct.pointLightShadows.value=ce.state.pointShadow,ct.hemisphereLights.value=ce.state.hemi,ct.directionalShadowMap.value=ce.state.directionalShadowMap,ct.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,ct.spotShadowMap.value=ce.state.spotShadowMap,ct.spotLightMatrix.value=ce.state.spotLightMatrix,ct.spotLightMap.value=ce.state.spotLightMap,ct.pointShadowMap.value=ce.state.pointShadowMap,ct.pointShadowMatrix.value=ce.state.pointShadowMatrix);const St=at.getUniforms(),Vt=la.seqWithValue(St.seq,ct);return $.currentProgram=at,$.uniformsList=Vt,at}function vn(F,ne){const se=N.get(F);se.outputEncoding=ne.outputEncoding,se.instancing=ne.instancing,se.skinning=ne.skinning,se.morphTargets=ne.morphTargets,se.morphNormals=ne.morphNormals,se.morphColors=ne.morphColors,se.morphTargetsCount=ne.morphTargetsCount,se.numClippingPlanes=ne.numClippingPlanes,se.numIntersection=ne.numClipIntersection,se.vertexAlphas=ne.vertexAlphas,se.vertexTangents=ne.vertexTangents,se.toneMapping=ne.toneMapping}function Ft(F,ne,se,$,ce){ne.isScene!==!0&&(ne=X),he.resetTextureUnits();const He=ne.fog,Ye=$.isMeshStandardMaterial?ne.environment:null,Qe=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:xi,$e=($.isMeshStandardMaterial?Te:Fe).get($.envMap||Ye),ot=$.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,at=!!$.normalMap&&!!se.attributes.tangent,ct=!!se.morphAttributes.position,St=!!se.morphAttributes.normal,Vt=!!se.morphAttributes.color,_n=$.toneMapped?p.toneMapping:Xn,Dn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Re=Dn!==void 0?Dn.length:0,et=N.get($),Rr=h.state.lights;if(J===!0&&(V===!0||F!==y)){const jt=F===y&&$.id===v;T.setState($,F,jt)}let Mt=!1;$.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Rr.state.version||et.outputEncoding!==Qe||ce.isInstancedMesh&&et.instancing===!1||!ce.isInstancedMesh&&et.instancing===!0||ce.isSkinnedMesh&&et.skinning===!1||!ce.isSkinnedMesh&&et.skinning===!0||et.envMap!==$e||$.fog===!0&&et.fog!==He||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==T.numPlanes||et.numIntersection!==T.numIntersection)||et.vertexAlphas!==ot||et.vertexTangents!==at||et.morphTargets!==ct||et.morphNormals!==St||et.morphColors!==Vt||et.toneMapping!==_n||ae.isWebGL2===!0&&et.morphTargetsCount!==Re)&&(Mt=!0):(Mt=!0,et.__version=$.version);let Nn=et.currentProgram;Mt===!0&&(Nn=vt($,ne,ce));let Wi=!1,Gn=!1,li=!1;const Wt=Nn.getUniforms(),Tn=et.uniforms;if(oe.useProgram(Nn.program)&&(Wi=!0,Gn=!0,li=!0),$.id!==v&&(v=$.id,Gn=!0),Wi||y!==F){if(Wt.setValue(E,"projectionMatrix",F.projectionMatrix),ae.logarithmicDepthBuffer&&Wt.setValue(E,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),y!==F&&(y=F,Gn=!0,li=!0),$.isShaderMaterial||$.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshStandardMaterial||$.envMap){const jt=Wt.map.cameraPosition;jt!==void 0&&jt.setValue(E,Q.setFromMatrixPosition(F.matrixWorld))}($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Wt.setValue(E,"isOrthographic",F.isOrthographicCamera===!0),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial||$.isShadowMaterial||ce.isSkinnedMesh)&&Wt.setValue(E,"viewMatrix",F.matrixWorldInverse)}if(ce.isSkinnedMesh){Wt.setOptional(E,ce,"bindMatrix"),Wt.setOptional(E,ce,"bindMatrixInverse");const jt=ce.skeleton;jt&&(ae.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),Wt.setValue(E,"boneTexture",jt.boneTexture,he),Wt.setValue(E,"boneTextureSize",jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Hi=se.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0&&ae.isWebGL2===!0)&&le.update(ce,se,$,Nn),(Gn||et.receiveShadow!==ce.receiveShadow)&&(et.receiveShadow=ce.receiveShadow,Wt.setValue(E,"receiveShadow",ce.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Tn.envMap.value=$e,Tn.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),Gn&&(Wt.setValue(E,"toneMappingExposure",p.toneMappingExposure),et.needsLights&&Et(Tn,li),He&&$.fog===!0&&Pe.refreshFogUniforms(Tn,He),Pe.refreshMaterialUniforms(Tn,$,B,R,W),la.upload(E,et.uniformsList,Tn,he)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(la.upload(E,et.uniformsList,Tn,he),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Wt.setValue(E,"center",ce.center),Wt.setValue(E,"modelViewMatrix",ce.modelViewMatrix),Wt.setValue(E,"normalMatrix",ce.normalMatrix),Wt.setValue(E,"modelMatrix",ce.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const jt=$.uniformsGroups;for(let ji=0,yi=jt.length;ji<yi;ji++)if(ae.isWebGL2){const Xi=jt[ji];xe.update(Xi,Nn),xe.bind(Xi,Nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nn}function Et(F,ne){F.ambientLightColor.needsUpdate=ne,F.lightProbe.needsUpdate=ne,F.directionalLights.needsUpdate=ne,F.directionalLightShadows.needsUpdate=ne,F.pointLights.needsUpdate=ne,F.pointLightShadows.needsUpdate=ne,F.spotLights.needsUpdate=ne,F.spotLightShadows.needsUpdate=ne,F.rectAreaLights.needsUpdate=ne,F.hemisphereLights.needsUpdate=ne}function tn(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(F,ne,se){N.get(F.texture).__webglTexture=ne,N.get(F.depthTexture).__webglTexture=se;const $=N.get(F);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=se===void 0,$.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,ne){const se=N.get(F);se.__webglFramebuffer=ne,se.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(F,ne=0,se=0){b=F,g=ne,x=se;let $=!0,ce=null,He=!1,Ye=!1;if(F){const $e=N.get(F);$e.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(36160,null),$=!1):$e.__webglFramebuffer===void 0?he.setupRenderTarget(F):$e.__hasExternalTextures&&he.rebindTextures(F,N.get(F.texture).__webglTexture,N.get(F.depthTexture).__webglTexture);const ot=F.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Ye=!0);const at=N.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(ce=at[ne],He=!0):ae.isWebGL2&&F.samples>0&&he.useMultisampledRTT(F)===!1?ce=N.get(F).__webglMultisampledFramebuffer:ce=at,M.copy(F.viewport),L.copy(F.scissor),w=F.scissorTest}else M.copy(I).multiplyScalar(B).floor(),L.copy(D).multiplyScalar(B).floor(),w=H;if(oe.bindFramebuffer(36160,ce)&&ae.drawBuffers&&$&&oe.drawBuffers(F,ce),oe.viewport(M),oe.scissor(L),oe.setScissorTest(w),He){const $e=N.get(F.texture);E.framebufferTexture2D(36160,36064,34069+ne,$e.__webglTexture,se)}else if(Ye){const $e=N.get(F.texture),ot=ne||0;E.framebufferTextureLayer(36160,36064,$e.__webglTexture,se||0,ot)}v=-1},this.readRenderTargetPixels=function(F,ne,se,$,ce,He,Ye){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=N.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ye!==void 0&&(Qe=Qe[Ye]),Qe){oe.bindFramebuffer(36160,Qe);try{const $e=F.texture,ot=$e.format,at=$e.type;if(ot!==zn&&k.convert(ot)!==E.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ct=at===ss&&(ee.has("EXT_color_buffer_half_float")||ae.isWebGL2&&ee.has("EXT_color_buffer_float"));if(at!==zi&&k.convert(at)!==E.getParameter(35738)&&!(at===Ri&&(ae.isWebGL2||ee.has("OES_texture_float")||ee.has("WEBGL_color_buffer_float")))&&!ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=F.width-$&&se>=0&&se<=F.height-ce&&E.readPixels(ne,se,$,ce,k.convert(ot),k.convert(at),He)}finally{const $e=b!==null?N.get(b).__webglFramebuffer:null;oe.bindFramebuffer(36160,$e)}}},this.copyFramebufferToTexture=function(F,ne,se=0){const $=Math.pow(2,-se),ce=Math.floor(ne.image.width*$),He=Math.floor(ne.image.height*$);he.setTexture2D(ne,0),E.copyTexSubImage2D(3553,se,0,0,F.x,F.y,ce,He),oe.unbindTexture()},this.copyTextureToTexture=function(F,ne,se,$=0){const ce=ne.image.width,He=ne.image.height,Ye=k.convert(se.format),Qe=k.convert(se.type);he.setTexture2D(se,0),E.pixelStorei(37440,se.flipY),E.pixelStorei(37441,se.premultiplyAlpha),E.pixelStorei(3317,se.unpackAlignment),ne.isDataTexture?E.texSubImage2D(3553,$,F.x,F.y,ce,He,Ye,Qe,ne.image.data):ne.isCompressedTexture?E.compressedTexSubImage2D(3553,$,F.x,F.y,ne.mipmaps[0].width,ne.mipmaps[0].height,Ye,ne.mipmaps[0].data):E.texSubImage2D(3553,$,F.x,F.y,Ye,Qe,ne.image),$===0&&se.generateMipmaps&&E.generateMipmap(3553),oe.unbindTexture()},this.copyTextureToTexture3D=function(F,ne,se,$,ce=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const He=F.max.x-F.min.x+1,Ye=F.max.y-F.min.y+1,Qe=F.max.z-F.min.z+1,$e=k.convert($.format),ot=k.convert($.type);let at;if($.isData3DTexture)he.setTexture3D($,0),at=32879;else if($.isDataArrayTexture)he.setTexture2DArray($,0),at=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(37440,$.flipY),E.pixelStorei(37441,$.premultiplyAlpha),E.pixelStorei(3317,$.unpackAlignment);const ct=E.getParameter(3314),St=E.getParameter(32878),Vt=E.getParameter(3316),_n=E.getParameter(3315),Dn=E.getParameter(32877),Re=se.isCompressedTexture?se.mipmaps[0]:se.image;E.pixelStorei(3314,Re.width),E.pixelStorei(32878,Re.height),E.pixelStorei(3316,F.min.x),E.pixelStorei(3315,F.min.y),E.pixelStorei(32877,F.min.z),se.isDataTexture||se.isData3DTexture?E.texSubImage3D(at,ce,ne.x,ne.y,ne.z,He,Ye,Qe,$e,ot,Re.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),E.compressedTexSubImage3D(at,ce,ne.x,ne.y,ne.z,He,Ye,Qe,$e,Re.data)):E.texSubImage3D(at,ce,ne.x,ne.y,ne.z,He,Ye,Qe,$e,ot,Re),E.pixelStorei(3314,ct),E.pixelStorei(32878,St),E.pixelStorei(3316,Vt),E.pixelStorei(3315,_n),E.pixelStorei(32877,Dn),ce===0&&$.generateMipmaps&&E.generateMipmap(at),oe.unbindTexture()},this.initTexture=function(F){F.isCubeTexture?he.setTextureCube(F,0):F.isData3DTexture?he.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?he.setTexture2DArray(F,0):he.setTexture2D(F,0),oe.unbindTexture()},this.resetState=function(){g=0,x=0,b=null,oe.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Sv extends tf{}Sv.prototype.isWebGL1Renderer=!0;class Mv extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Tv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Eo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new K;class gi{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Po extends Mn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Lc=new wt,Pc=new wt,ea=[],Av=new wt,Kr=new en;let Rc=class extends en{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Po(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,Av)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Lc),Pc.multiplyMatrices(n,Lc),Kr.matrixWorld=Pc,Kr.raycast(e,ea);for(let o=0,a=ea.length;o<a;o++){const l=ea[o];l.instanceId=r,l.object=this,t.push(l)}ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Po(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};class Ro extends Vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ic=new K,Uc=new K,Oc=new wt,ho=new qo,ta=new Gi;let Ev=class extends At{constructor(e=new cn,t=new Ro){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ic.fromBufferAttribute(t,i-1),Uc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ic.distanceTo(Uc);e.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(i),ta.radius+=r,e.ray.intersectsSphere(ta)===!1)return;Oc.copy(i).invert(),ho.copy(e.ray).applyMatrix4(Oc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new K,u=new K,f=new K,h=new K,d=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const g=Math.max(0,o.start),x=Math.min(_.count,o.start+o.count);for(let b=g,v=x-1;b<v;b+=d){const y=_.getX(b),M=_.getX(b+1);if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,M),ho.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let b=g,v=x-1;b<v;b+=d){if(c.fromBufferAttribute(m,b),u.fromBufferAttribute(m,b+1),ho.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(h);M<e.near||M>e.far||t.push({distance:M,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};class $o extends cn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new K,h=new K,d=[],_=[],p=[],m=[];for(let g=0;g<=n;g++){const x=[],b=g/n;let v=0;g==0&&o==0?v=.5/t:g==n&&l==Math.PI&&(v=-.5/t);for(let y=0;y<=t;y++){const M=y/t;f.x=-e*Math.cos(i+M*r)*Math.sin(o+b*a),f.y=e*Math.cos(o+b*a),f.z=e*Math.sin(i+M*r)*Math.sin(o+b*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),p.push(h.x,h.y,h.z),m.push(M+v,1-b),x.push(c++)}u.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){const b=u[g][x+1],v=u[g][x],y=u[g+1][x],M=u[g+1][x+1];(g!==0||o>0)&&d.push(b,v,M),(g!==n-1||l<Math.PI)&&d.push(v,y,M)}this.setIndex(d),this.setAttribute("position",new Kt(_,3)),this.setAttribute("normal",new Kt(p,3)),this.setAttribute("uv",new Kt(m,2))}static fromJSON(e){return new $o(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cv extends cn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new K,r=new K;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],h=f.start,d=f.count;for(let _=h,p=h+d;_<p;_+=3)for(let m=0;m<3;m++){const g=a.getX(_+m),x=a.getX(_+(m+1)%3);i.fromBufferAttribute(o,g),r.fromBufferAttribute(o,x),Fc(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,f=3*a+(c+1)%3;i.fromBufferAttribute(o,u),r.fromBufferAttribute(o,f),Fc(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Kt(t,3))}}}function Fc(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class Dv extends Vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jo,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lv extends Vi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jo,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const kc={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Pv{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const nf=new Pv;class rf{constructor(e){this.manager=e!==void 0?e:nf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Rv extends rf{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=kc.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=os("img");function l(){u(),kc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class zc extends rf{constructor(e){super(e)}load(e,t,n,i){const r=new on,o=new Rv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Iv extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}let Uv=class extends Iv{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};class sf extends cn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class af{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Bc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Bc(){return(typeof performance>"u"?Date:performance).now()}class Io extends Tv{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Ov{constructor(e,t,n=0,i=1/0){this.ray=new qo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Uo(e,this,n,t),n.sort(Nc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Uo(e[i],this,n,t);return n.sort(Nc),n}}function Nc(s,e){return s.distance-e.distance}function Uo(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)Uo(i[r],e,t,!0)}}class Gc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Vc=new K,na=new K;class Fv{constructor(e=new K,t=new K){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Vc.subVectors(e,this.start),na.subVectors(this.end,this.start);const n=na.dot(na);let r=na.dot(Vc)/n;return t&&(r=$t(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Oo extends ga{constructor(e,t,n,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);const kv={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class _a{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const zv=new Yu(-1,1,1,-1,0,1),el=new cn;el.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3));el.setAttribute("uv",new Kt([0,2,0,0,2,0],2));class Bv{constructor(e){this._mesh=new en(el,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,zv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Nv extends _a{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Kn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_s.clone(e.uniforms),this.material=new Kn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Bv(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Wc extends _a{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Gv extends _a{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Vv{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Ze);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new wi(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nv(kv),this.clock=new af}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Wc!==void 0&&(o instanceof Wc?n=!0:o instanceof Gv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class of extends _a{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Wv=(s,e,t)=>{s.renderer=new tf({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),s.composer=new Vv(s.renderer),s.composer.addPass(new of(s.scene,vi(s.camera)))},Hc=(s,e,t)=>{s.renderer&&(e?s.renderer.outputEncoding=xi:s.renderer.outputEncoding=xt,t?s.renderer.toneMapping=Xn:s.renderer.toneMapping=Uu)},jc=(s,e,t)=>{var n,i,r,o,a,l,c,u;!s.renderer||!s.composer||((i=(n=s.renderer).setSize)==null||i.call(n,e.width,e.height),(o=(r=s.renderer).setPixelRatio)==null||o.call(r,t),(l=(a=s.composer).setSize)==null||l.call(a,e.width,e.height),(u=(c=s.composer).setPixelRatio)==null||u.call(c,t))},Xc=(s,e,t)=>{s.renderer&&(s.renderer.shadowMap.enabled=e,s.renderer.shadowMap.type=t)},Cn=s=>s.userData,Hv=(s,e)=>{s.pointer.update(t=>s.renderer?t.set(e.offsetX/s.renderer.domElement.clientWidth*2-1,-(e.offsetY/s.renderer.domElement.clientHeight)*2+1):t)},lf=(s,e,t,n)=>(s.raycaster.setFromCamera(e,t),s.raycaster.intersectObjects(n,!1)),jv=(s,e)=>s.object.uuid!==e.object.uuid||s.instanceId!==e.instanceId,Xv=(s,e,t)=>{let n=vi(s.camera);const i=s.camera.subscribe(c=>n=c);Pt(i);let r=vi(s.pointer);const o=s.pointer.subscribe(c=>r=c);Pt(o);let a;const l=c=>{var h,d;c.preventDefault();const u=c.type;s.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,Hv(s,c);const f=qv(e,r,n);if(u==="pointerdown"&&(a=f?{object:f.object,instanceId:f.instanceId}:null),u==="click"){if(!Yv(f,a)){a=null;return}a=null}f&&((d=(h=Cn(f.object)).eventDispatcher)==null||d.call(h,u,{...f,event:c}))};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function qv(s,e,t){if(s.interactiveObjects.size===0||s.raycastableObjects.size===0)return null;const n=lf(s,e,t,Array.from(s.raycastableObjects));return n.length===0||!s.interactiveObjects.has(n[0].object)?null:n[0]}function Yv(s,e){return!s||!e?!1:s.object.uuid===e.object.uuid&&s.instanceId===e.instanceId}const Zv=(s,e)=>{let t=vi(s.pointerOverCanvas);const n=s.pointerOverCanvas.subscribe(c=>t=c);Pt(n);let i=vi(s.camera);const r=s.camera.subscribe(c=>i=c);Pt(r);let o=vi(s.pointer);const a=s.pointer.subscribe(c=>o=c);return Pt(a),{raycast:()=>{var f,h,d,_,p,m,g,x;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?lf(e,o,i,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&jv(e.lastIntersection,u)&&((m=(p=Cn(e.lastIntersection.object)).eventDispatcher)==null||m.call(p,"pointerleave",e.lastIntersection),(x=(g=Cn(u.object)).eventDispatcher)==null||x.call(g,"pointerenter",u)):(_=(d=Cn(u.object)).eventDispatcher)==null||_.call(d,"pointerenter",u):e.lastIntersection&&((h=(f=Cn(e.lastIntersection.object)).eventDispatcher)==null||h.call(f,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},ba=typeof window<"u",Kv=s=>{if(!ba)return;let e;const t=()=>{s(),e=requestAnimationFrame(t)};t(),Pt(()=>{e&&cancelAnimationFrame(e)})},Jv=(s,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(r=>{r.debugFrameloopMessage?e.invalidations[r.debugFrameloopMessage]=r.debugFrameloopMessage in e.invalidations?e.invalidations[r.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,r)=>r.order?!0:i,!1),n=s.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,r)=>(i.order??0)>(r.order??0)?1:-1).forEach(i=>i.fn(s,n)):e.frameHandlers.forEach(i=>i.fn(s,n))},Qv=s=>{s.debugFrameloop&&(s.frame+=1,console.log(`frame: ${s.frame}${Object.keys(s.invalidations).length>0?", requested by ↴":""}`),Object.keys(s.invalidations).length>0&&console.table(s.invalidations),s.invalidations={})},$v=(s,e,t,n)=>{let i=vi(s.camera);const r=s.camera.subscribe(a=>i=a);Pt(r);const{raycast:o}=Zv(s,e);Kv(()=>{n.dispose();const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),a&&(!i||!s.composer||!s.renderer||(Jv(s,t),s.composer.passes.length>1?s.composer.render():s.renderer.render(s.scene,i),Qv(t),t.frameInvalidated=!1,t.advance=!1))})},e_=()=>{const s=new yn(75,0,.1,1e3);return Cn(s).threlteDefaultCamera=!0,s.position.z=5,s.lookAt(0,0,0),s},t_=s=>{const e=s.size.subscribe(t=>{Cn(vi(s.camera)).threlteDefaultCamera&&s.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),s.invalidate("Default camera: aspect ratio changed"),i})});Pt(e)},n_=(s,e,t,n,i,r,o)=>{const a={audioListeners:new Map,addAudioListener:(g,x)=>{if(x=x??"default",a.audioListeners.has(x)){console.warn(`An AudioListener with the id "${x}" has already been added, aborting.`);return}a.audioListeners.set(x,g)},removeAudioListener:g=>{if(g=g??"default",!a.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}a.audioListeners.delete(g)},getAudioListener:g=>{if(g=g??"default",!a.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}return a.audioListeners.get(g)}},l={debugFrameloop:r,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:Uf([n,i],([g,x])=>g||x),pointer:hn(new Ze),pointerOverCanvas:hn(!1),clock:new af,camera:hn(e_()),scene:new Mv,renderer:void 0,composer:void 0,invalidate:g=>{l.frameInvalidated=!0,l.debugFrameloop&&g&&(l.invalidations[g]=l.invalidations[g]?l.invalidations[g]+1:1)},advance:()=>{l.advance=!0}},u={flat:hn(e),linear:hn(s),dpr:hn(t),setCamera:g=>{c.camera.set(g),c.composer&&(c.composer.passes.forEach(x=>{x instanceof of&&(x.camera=g)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Ov,lastIntersection:null,addRaycastableObject:g=>{u.raycastableObjects.add(g)},removeRaycastableObject:g=>{u.raycastableObjects.delete(g)},addInteractiveObject:g=>{u.interactiveObjects.add(g)},removeInteractiveObject:g=>{u.interactiveObjects.delete(g)},addPass:g=>{c.composer&&(c.composer.addPass(g),c.invalidate("Canvas: adding pass"))},removePass:g=>{c.composer&&(c.composer.removePass(g),c.invalidate("Canvas: removing pass"))}},f={dispose:async(g=!1)=>{await is(),!(!f.shouldDispose&&!g)&&(f.disposableObjects.forEach((x,b)=>{var v;(x===0||g)&&((v=b==null?void 0:b.dispose)==null||v.call(b),f.disposableObjects.delete(b))}),f.shouldDispose=!1)},collectDisposableObjects:(g,x)=>{const b=x??[];return g&&(g!=null&&g.dispose&&typeof g.dispose=="function"&&g.type!=="Scene"&&b.push(g),Object.entries(g).forEach(([v,y])=>{if(v==="parent"||v==="children"||typeof y!="object")return;const M=y;M!=null&&M.dispose&&f.collectDisposableObjects(M,b)})),b},addDisposableObjects:g=>{g.forEach(x=>{const b=f.disposableObjects.get(x);b?f.disposableObjects.set(x,b+1):f.disposableObjects.set(x,1)})},removeDisposableObjects:g=>{g.length!==0&&(g.forEach(x=>{const b=f.disposableObjects.get(x);b&&b>0&&f.disposableObjects.set(x,b-1)}),f.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return Fn("threlte",c),Fn("threlte-root",u),Fn("threlte-render-context",l),Fn("threlte-audio-context",a),Fn("threlte-disposal-context",f),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:a,disposalCtx:f,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>a,getDisposalCtx:()=>f}};function xa(s,e){const t=hn(s);let n=s;const i=t.subscribe(a=>n=a);return Pt(i),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(a),e==null||e(a,l)},update:a=>{const l=a(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const gn=()=>Zn("threlte");function i_(s){let e;const t=s[8].default,n=Rt(t,s,s[7],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&128)&&It(n,t,i,i[7],e?Ot(t,i[7],r,null):Ut(i[7]),null)},i(i){e||(fe(n,i),e=!0)},o(i){de(n,i),e=!1},d(i){n&&n.d(i)}}}const r_=()=>({onChildMount:Zn("threlte-hierarchical-object-on-mount"),onChildDestroy:Zn("threlte-hierarchical-object-on-destroy")}),cf=()=>Zn("threlte-hierarchical-parent-context");function s_(s,e,t){var g;let n,{$$slots:i={},$$scope:r}=e,{object:o=void 0}=e,{children:a=[]}=e,{onChildMount:l=void 0}=e;const c=x=>{a.push(x),t(1,a),l==null||l(x)};let{onChildDestroy:u=void 0}=e;const f=x=>{const b=a.findIndex(v=>v.uuid===x.uuid);b!==-1&&a.splice(b,1),t(1,a),u==null||u(x)},{invalidate:h}=gn(),d=cf();pt(s,d,x=>t(6,n=x));let{parent:_=n}=e;const p=r_();o&&((g=p.onChildMount)==null||g.call(p,o),h("HierarchicalObject: object added"));const m=xa(o,(x,b)=>{var v,y;b&&((v=p.onChildDestroy)==null||v.call(p,b),h("HierarchicalObject: object added")),x&&((y=p.onChildMount)==null||y.call(p,x),h("HierarchicalObject: object removed"))});return Pt(()=>{var x;o&&((x=p.onChildDestroy)==null||x.call(p,o),h("HierarchicalObject: object removed"))}),Fn("threlte-hierarchical-object-on-mount",c),Fn("threlte-hierarchical-object-on-destroy",f),Fn("threlte-hierarchical-parent-context",m),s.$$set=x=>{"object"in x&&t(3,o=x.object),"children"in x&&t(1,a=x.children),"onChildMount"in x&&t(4,l=x.onChildMount),"onChildDestroy"in x&&t(5,u=x.onChildDestroy),"parent"in x&&t(2,_=x.parent),"$$scope"in x&&t(7,r=x.$$scope)},s.$$.update=()=>{s.$$.dirty&64&&t(2,_=n),s.$$.dirty&8&&m.set(o)},[d,a,_,o,l,u,n,r,i]}class a_ extends je{constructor(e){super(),Xe(this,e,s_,i_,We,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function o_(s){let e;const t=s[1].default,n=Rt(t,s,s[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&16)&&It(n,t,i,i[4],e?Ot(t,i[4],r,null):Ut(i[4]),null)},i(i){e||(fe(n,i),e=!0)},o(i){de(n,i),e=!1},d(i){n&&n.d(i)}}}function l_(s){let e,t;return e=new a_({props:{object:s[0],onChildMount:s[2],onChildDestroy:s[3],$$slots:{default:[o_]},$$scope:{ctx:s}}}),{c(){Ee(e.$$.fragment)},l(n){Ce(e.$$.fragment,n)},m(n,i){De(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.object=n[0]),i&1&&(r.onChildMount=n[2]),i&1&&(r.onChildDestroy=n[3]),i&16&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(fe(e.$$.fragment,n),t=!0)},o(n){de(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function c_(s,e,t){let{$$slots:n={},$$scope:i}=e,{object:r}=e;const o=l=>r.add(l),a=l=>r.remove(l);return s.$$set=l=>{"object"in l&&t(0,r=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[r,n,o,a,i]}class tl extends je{constructor(e){super(),Xe(this,e,c_,l_,We,{object:0})}}const u_=()=>{const s=hn({width:0,height:0});let e={width:0,height:0};const t=s.subscribe(o=>e=o);Pt(t);let n;const i=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:l}=n.parentElement;(a!==o.width||l!==o.height)&&s.set({width:a,height:l})},r=o=>{n=o,i(),window.addEventListener("resize",i)};return ba?(Pt(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:r,parentSize:s}):{parentSize:s,parentSizeAction:r}};function qc(s){let e,t;return e=new tl({props:{object:s[0].scene,$$slots:{default:[f_]},$$scope:{ctx:s}}}),{c(){Ee(e.$$.fragment)},l(n){Ce(e.$$.fragment,n)},m(n,i){De(e,n,i),t=!0},p(n,i){const r={};i[1]&4&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(fe(e.$$.fragment,n),t=!0)},o(n){de(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function f_(s){let e;const t=s[29].default,n=Rt(t,s,s[33],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&4)&&It(n,t,i,i[33],e?Ot(t,i[33],r,null):Ut(i[33]),null)},i(i){e||(fe(n,i),e=!0)},o(i){de(n,i),e=!1},d(i){n&&n.d(i)}}}function h_(s){let e,t,n,i,r=s[2]&&qc(s);return{c(){e=ft("canvas"),r&&r.c(),this.h()},l(o){e=ht(o,"CANVAS",{class:!0});var a=dt(e);r&&r.l(a),a.forEach(we),this.h()},h(){Ge(e,"class","svelte-o3oskp")},m(o,a){Ve(o,e,a),r&&r.m(e,null),s[30](e),t=!0,n||(i=[Ef(s[3].call(null,e)),fn(e,"click",s[9]),fn(e,"contextmenu",s[10]),fn(e,"pointerup",s[13]),fn(e,"pointerdown",s[11]),fn(e,"pointermove",s[12]),fn(e,"pointerenter",s[31]),fn(e,"pointerleave",s[32])],n=!0)},p(o,a){o[2]?r?(r.p(o,a),a[0]&4&&fe(r,1)):(r=qc(o),r.c(),fe(r,1),r.m(e,null)):r&&(Ar(),de(r,1,1,()=>{r=null}),Er())},i(o){t||(fe(r),t=!0)},o(o){de(r),t=!1},d(o){o&&we(e),r&&r.d(),s[30](null),n=!1,Tu(i)}}}const Yc=new Set;function d_(s,e,t){let n,i,r,o,{$$slots:a={},$$scope:l}=e,{dpr:c=ba?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:f=!1}=e,{frameloop:h="demand"}=e,{debugFrameloop:d=!1}=e,{shadows:_=!0}=e,{shadowMapType:p=Pu}=e,{size:m=void 0}=e,{rendererParameters:g=void 0}=e,x,b=!1;const v=hn(m),{parentSize:y,parentSizeAction:M}=u_(),L=n_(f,u,c,v,y,d,h),{getCtx:w,renderCtx:A,disposalCtx:R}=L,{ctx:B,rootCtx:U,audioCtx:C}=L;t_(B),Yc.add(B.invalidate),Pt(()=>{Yc.delete(B.invalidate)});const{size:I,scene:D}=B;pt(s,I,Y=>t(26,i=Y));const{flat:H,linear:te,dpr:J}=U;pt(s,H,Y=>t(27,r=Y)),pt(s,te,Y=>t(28,o=Y)),pt(s,J,Y=>t(25,n=Y)),Fn("threlte-parent",hn(D)),Eu(()=>{x&&(Wv(B,x,g),Hc(B,o,r),jc(B,i,n),Xc(B,_,p),t(2,b=!0))}),$v(B,U,A,R);const{onClick:V,onContextMenu:W,onPointerDown:S,onPointerMove:P,onPointerUp:Q}=Xv(B,U,A);Pt(()=>{R.dispose(!0)});function X(Y){Lt[Y?"unshift":"push"](()=>{x=Y,t(1,x)})}const q=()=>w().pointerOverCanvas.set(!0),E=()=>w().pointerOverCanvas.set(!1);return s.$$set=Y=>{"dpr"in Y&&t(14,c=Y.dpr),"flat"in Y&&t(15,u=Y.flat),"linear"in Y&&t(16,f=Y.linear),"frameloop"in Y&&t(17,h=Y.frameloop),"debugFrameloop"in Y&&t(18,d=Y.debugFrameloop),"shadows"in Y&&t(19,_=Y.shadows),"shadowMapType"in Y&&t(20,p=Y.shadowMapType),"size"in Y&&t(21,m=Y.size),"rendererParameters"in Y&&t(22,g=Y.rendererParameters),"$$scope"in Y&&t(33,l=Y.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&2097152&&v.set(m),s.$$.dirty[0]&65536&&On(te,o=f,o),s.$$.dirty[0]&32768&&On(H,r=u,r),s.$$.dirty[0]&16384&&On(J,n=c,n),s.$$.dirty[0]&402653184&&Hc(w(),o,r),s.$$.dirty[0]&100663296&&jc(w(),i,n),s.$$.dirty[0]&1572864&&Xc(w(),_,p)},[B,x,b,M,w,I,H,te,J,V,W,S,P,Q,c,u,f,h,d,_,p,m,g,U,C,n,i,r,o,a,X,q,E,l]}class m_ extends je{constructor(e){super(),Xe(this,e,d_,h_,We,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const nl=()=>Zn("threlte-root"),p_=()=>Zn("threlte-disposal-context");function g_(s){let e;const t=s[9].default,n=Rt(t,s,s[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&256)&&It(n,t,i,i[8],e?Ot(t,i[8],r,null):Ut(i[8]),null)},i(i){e||(fe(n,i),e=!0)},o(i){de(n,i),e=!1},d(i){n&&n.d(i)}}}const Zc="threlte-disposable-object-context";function v_(s,e,t){let n,i,{$$slots:r={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:l,removeDisposableObjects:c}=p_();let{object:u=void 0}=e,f=u,{dispose:h=void 0}=e;const d=Zn(Zc);pt(s,d,m=>t(7,i=m));const _=hn(h??i??!0);pt(s,_,m=>t(6,n=m)),Fn(Zc,_);let p=n?a(u):[];return l(p),Pt(()=>{c(p)}),s.$$set=m=>{"object"in m&&t(2,u=m.object),"dispose"in m&&t(3,h=m.dispose),"$$scope"in m&&t(8,o=m.$$scope)},s.$$.update=()=>{s.$$.dirty&136&&_.set(h??i??!0),s.$$.dirty&116&&u!==f&&(c(p),t(5,p=n?a(u):[]),l(p),t(4,f=u))},[d,_,u,h,f,p,n,i,o,r]}class Bn extends je{constructor(e){super(),Xe(this,e,v_,g_,We,{object:2,dispose:3})}}function __(s,e,t){let n,i,{object:r}=e;const o=xa(r);pt(s,o,c=>t(4,i=c));const a=Zn("threlte-layers");pt(s,a,c=>t(3,n=c));const{invalidate:l}=gn();return s.$$set=c=>{"object"in c&&t(2,r=c.object)},s.$$.update=()=>{if(s.$$.dirty&4&&o.set(r),s.$$.dirty&24){if(n==="all")i.layers.enableAll();else if(n==="none")i.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const u=c;n.includes(u)?i.layers.enable(c):i.layers.disable(c)}else n!==void 0&&i.layers.set(n);l("LayerableObject")}},[o,a,r,n,i]}class b_ extends je{constructor(e){super(),Xe(this,e,__,null,We,{object:2})}}const bs=(s,e)=>{if(!ba)return{start:()=>{},stop:()=>{},started:Of(!1)};const t=Zn("threlte-render-context"),n={fn:s,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=hn(!1),r=()=>{t.frameHandlers.delete(n),i.set(!1)},o=()=>{t.frameHandlers.add(n),i.set(!0)};return((e==null?void 0:e.autostart)??!0)&&o(),Pt(()=>{r()}),{start:o,stop:r,started:{subscribe:i.subscribe}}},uf=()=>{const s=hn(!1);return(async()=>{await is(),s.set(!0)})(),s};function x_(s,e,t){let n,i,{object:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new K,f=Cr(),{invalidate:h}=gn(),d=uf();pt(s,d,b=>t(8,i=b));const _=async()=>{i||await is(),f("transform")},p=async()=>{h("TransformableObject: transformed"),await _()};Cn(r).onTransform=p;const{start:m,stop:g}=bs(async()=>{c&&!l&&c instanceof At&&(c.getWorldPosition(u),r.lookAt(u),await _())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),x=xa(r);return pt(s,x,b=>t(7,n=b)),s.$$set=b=>{"object"in b&&t(2,r=b.object),"position"in b&&t(3,o=b.position),"scale"in b&&t(4,a=b.scale),"rotation"in b&&t(5,l=b.rotation),"lookAt"in b&&t(6,c=b.lookAt)},s.$$.update=()=>{s.$$.dirty&4&&x.set(r),s.$$.dirty&232&&(o&&(n.position.set(o.x??0,o.y??0,o.z??0),p()),c&&!l&&(c instanceof At?m():(g(),n.lookAt(c.x??0,c.y??0,c.z??0),p())),c||g()),s.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set(a.x??1,a.y??1,a.z??1),p()),s.$$.dirty&160&&l&&(n.rotation.set(l.x??0,l.y??0,l.z??0,l.order??"XYZ"),p())},[d,x,r,o,a,l,c,n]}class il extends je{constructor(e){super(),Xe(this,e,x_,null,We,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function w_(s,e,t){let n,i,r,{object:o}=e,{viewportAware:a=!1}=e;const l=Cr(),{camera:c,invalidate:u}=gn();pt(s,c,M=>t(8,r=M));const f=new Jo,h=new wt,d=M=>M.type==="Mesh",_=new K,p=()=>r?(h.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),f.setFromProjectionMatrix(h),d(o)?f.intersectsObject(o):(o.getWorldPosition(_),f.containsPoint(_))):!0,m=uf();pt(s,m,M=>t(7,i=M));let{inViewport:g=p()}=e;const x=async M=>{M?(i||await is(),l("viewportenter",o)):(i||await is(),l("viewportleave",o))},{start:b,stop:v,started:y}=bs(()=>{const M=p();g===void 0?(t(3,g=p()),x(g)):M!==g&&(x(M),t(3,g=M))},{autostart:a,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return pt(s,y,M=>t(6,n=M)),u("ViewportAwareObject"),s.$$set=M=>{"object"in M&&t(4,o=M.object),"viewportAware"in M&&t(5,a=M.viewportAware),"inViewport"in M&&t(3,g=M.inViewport)},s.$$.update=()=>{s.$$.dirty&96&&(a&&!n?b():!a&&n&&v())},[c,m,y,g,o,a,n]}class y_ extends je{constructor(e){super(),Xe(this,e,w_,null,We,{object:4,viewportAware:5,inViewport:3})}}function S_(s){let e;const t=s[14].default,n=Rt(t,s,s[18],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&262144)&&It(n,t,i,i[18],e?Ot(t,i[18],r,null):Ut(i[18]),null)},i(i){e||(fe(n,i),e=!0)},o(i){de(n,i),e=!1},d(i){n&&n.d(i)}}}function M_(s){let e,t;return e=new tl({props:{object:s[1],$$slots:{default:[S_]},$$scope:{ctx:s}}}),{c(){Ee(e.$$.fragment)},l(n){Ce(e.$$.fragment,n)},m(n,i){De(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&262144&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(fe(e.$$.fragment,n),t=!0)},o(n){de(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function T_(s){let e,t,n,i,r,o,a,l,c;e=new b_({props:{object:s[1]}}),n=new il({props:{object:s[1],position:s[2],rotation:s[4],scale:s[3],lookAt:s[5]}}),r=new Bn({props:{object:s[1],dispose:s[7],$$slots:{default:[M_]},$$scope:{ctx:s}}});function u(h){s[15](h)}let f={object:s[1],viewportAware:s[6]};return s[0]!==void 0&&(f.inViewport=s[0]),a=new y_({props:f}),Lt.push(()=>zt(a,"inViewport",u)),a.$on("viewportenter",s[16]),a.$on("viewportleave",s[17]),{c(){Ee(e.$$.fragment),t=nt(),Ee(n.$$.fragment),i=nt(),Ee(r.$$.fragment),o=nt(),Ee(a.$$.fragment)},l(h){Ce(e.$$.fragment,h),t=it(h),Ce(n.$$.fragment,h),i=it(h),Ce(r.$$.fragment,h),o=it(h),Ce(a.$$.fragment,h)},m(h,d){De(e,h,d),Ve(h,t,d),De(n,h,d),Ve(h,i,d),De(r,h,d),Ve(h,o,d),De(a,h,d),c=!0},p(h,[d]){const _={};d&2&&(_.object=h[1]),e.$set(_);const p={};d&2&&(p.object=h[1]),d&4&&(p.position=h[2]),d&16&&(p.rotation=h[4]),d&8&&(p.scale=h[3]),d&32&&(p.lookAt=h[5]),n.$set(p);const m={};d&2&&(m.object=h[1]),d&128&&(m.dispose=h[7]),d&262146&&(m.$$scope={dirty:d,ctx:h}),r.$set(m);const g={};d&2&&(g.object=h[1]),d&64&&(g.viewportAware=h[6]),!l&&d&1&&(l=!0,g.inViewport=h[0],Bt(()=>l=!1)),a.$set(g)},i(h){c||(fe(e.$$.fragment,h),fe(n.$$.fragment,h),fe(r.$$.fragment,h),fe(a.$$.fragment,h),c=!0)},o(h){de(e.$$.fragment,h),de(n.$$.fragment,h),de(r.$$.fragment,h),de(a.$$.fragment,h),c=!1},d(h){Le(e,h),h&&we(t),Le(n,h),h&&we(i),Le(r,h),h&&we(o),Le(a,h)}}}function A_(s,e,t){let{$$slots:n={},$$scope:i}=e,{object:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:d=void 0}=e,{frustumCulled:_=void 0}=e,{renderOrder:p=void 0}=e,{visible:m=void 0}=e,{dispose:g=void 0}=e,{userData:x=void 0}=e;const{invalidate:b}=gn(),v=()=>r;function y(w){f=w,t(0,f)}function M(w){ke.call(this,s,w)}function L(w){ke.call(this,s,w)}return s.$$set=w=>{"object"in w&&t(1,r=w.object),"position"in w&&t(2,o=w.position),"scale"in w&&t(3,a=w.scale),"rotation"in w&&t(4,l=w.rotation),"lookAt"in w&&t(5,c=w.lookAt),"viewportAware"in w&&t(6,u=w.viewportAware),"inViewport"in w&&t(0,f=w.inViewport),"castShadow"in w&&t(8,h=w.castShadow),"receiveShadow"in w&&t(9,d=w.receiveShadow),"frustumCulled"in w&&t(10,_=w.frustumCulled),"renderOrder"in w&&t(11,p=w.renderOrder),"visible"in w&&t(12,m=w.visible),"dispose"in w&&t(7,g=w.dispose),"userData"in w&&t(13,x=w.userData),"$$scope"in w&&t(18,i=w.$$scope)},s.$$.update=()=>{s.$$.dirty&16128&&(m!==void 0&&(v().visible=m),h!==void 0&&(v().castShadow=h),d!==void 0&&(v().receiveShadow=d),_!==void 0&&(v().frustumCulled=_),p!==void 0&&(v().renderOrder=p),x!==void 0&&(v().userData={...v().userData,...x}),b("Object3DInstance: props changed"))},[f,r,o,a,l,c,u,g,h,d,_,p,m,x,n,y,M,L,i]}class xs extends je{constructor(e){super(),Xe(this,e,A_,T_,We,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function E_(s){let e;const t=s[17].default,n=Rt(t,s,s[21],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2097152)&&It(n,t,i,i[21],e?Ot(t,i[21],r,null):Ut(i[21]),null)},i(i){e||(fe(n,i),e=!0)},o(i){de(n,i),e=!1},d(i){n&&n.d(i)}}}function C_(s){let e,t,n;function i(o){s[18](o)}let r={object:s[1],lookAt:s[5],castShadow:s[7],receiveShadow:s[8],frustumCulled:s[9],renderOrder:s[10],position:s[2],scale:s[3],rotation:s[4],viewportAware:s[6],visible:s[11],userData:s[12],dispose:s[13],$$slots:{default:[E_]},$$scope:{ctx:s}};return s[0]!==void 0&&(r.inViewport=s[0]),e=new xs({props:r}),Lt.push(()=>zt(e,"inViewport",i)),e.$on("viewportenter",s[19]),e.$on("viewportleave",s[20]),{c(){Ee(e.$$.fragment)},l(o){Ce(e.$$.fragment,o)},m(o,a){De(e,o,a),n=!0},p(o,[a]){const l={};a&2&&(l.object=o[1]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&4096&&(l.userData=o[12]),a&8192&&(l.dispose=o[13]),a&2097152&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],Bt(()=>t=!1)),e.$set(l)},i(o){n||(fe(e.$$.fragment,o),n=!0)},o(o){de(e.$$.fragment,o),n=!1},d(o){Le(e,o)}}}function D_(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{camera:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:f=!1}=e,{inViewport:h=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:_=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:m=void 0}=e,{visible:g=void 0}=e,{userData:x=void 0}=e,{dispose:b=void 0}=e,{useCamera:v=!1}=e;const y=xa(o);pt(s,y,R=>t(16,n=R));const{setCamera:M}=nl();function L(R){h=R,t(0,h)}function w(R){ke.call(this,s,R)}function A(R){ke.call(this,s,R)}return s.$$set=R=>{"camera"in R&&t(1,o=R.camera),"position"in R&&t(2,a=R.position),"scale"in R&&t(3,l=R.scale),"rotation"in R&&t(4,c=R.rotation),"lookAt"in R&&t(5,u=R.lookAt),"viewportAware"in R&&t(6,f=R.viewportAware),"inViewport"in R&&t(0,h=R.inViewport),"castShadow"in R&&t(7,d=R.castShadow),"receiveShadow"in R&&t(8,_=R.receiveShadow),"frustumCulled"in R&&t(9,p=R.frustumCulled),"renderOrder"in R&&t(10,m=R.renderOrder),"visible"in R&&t(11,g=R.visible),"userData"in R&&t(12,x=R.userData),"dispose"in R&&t(13,b=R.dispose),"useCamera"in R&&t(15,v=R.useCamera),"$$scope"in R&&t(21,r=R.$$scope)},s.$$.update=()=>{s.$$.dirty&2&&y.set(o),s.$$.dirty&98304&&v&&M(n)},[h,o,a,l,c,u,f,d,_,p,m,g,x,b,y,v,n,i,L,w,A,r]}class L_ extends je{constructor(e){super(),Xe(this,e,D_,C_,We,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function P_(s){let e;const t=s[20].default,n=Rt(t,s,s[24],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&16777216)&&It(n,t,i,i[24],e?Ot(t,i[24],r,null):Ut(i[24]),null)},i(i){e||(fe(n,i),e=!0)},o(i){de(n,i),e=!1},d(i){n&&n.d(i)}}}function R_(s){let e,t,n;function i(o){s[21](o)}let r={camera:s[0],position:s[2],scale:s[3],rotation:s[4],castShadow:s[6],receiveShadow:s[7],frustumCulled:s[8],renderOrder:s[9],visible:s[10],userData:s[11],dispose:s[12],viewportAware:s[13],lookAt:s[5],useCamera:s[14],$$slots:{default:[P_]},$$scope:{ctx:s}};return s[1]!==void 0&&(r.inViewport=s[1]),e=new L_({props:r}),Lt.push(()=>zt(e,"inViewport",i)),e.$on("viewportenter",s[22]),e.$on("viewportleave",s[23]),{c(){Ee(e.$$.fragment)},l(o){Ce(e.$$.fragment,o)},m(o,a){De(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.camera=o[0]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.castShadow=o[6]),a&128&&(l.receiveShadow=o[7]),a&256&&(l.frustumCulled=o[8]),a&512&&(l.renderOrder=o[9]),a&1024&&(l.visible=o[10]),a&2048&&(l.userData=o[11]),a&4096&&(l.dispose=o[12]),a&8192&&(l.viewportAware=o[13]),a&32&&(l.lookAt=o[5]),a&16384&&(l.useCamera=o[14]),a&16777216&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],Bt(()=>t=!1)),e.$set(l)},i(o){n||(fe(e.$$.fragment,o),n=!0)},o(o){de(e.$$.fragment,o),n=!1},d(o){Le(e,o)}}}function I_(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:d=void 0}=e,{visible:_=void 0}=e,{userData:p=void 0}=e,{dispose:m=void 0}=e,{viewportAware:g=!1}=e,{inViewport:x=!1}=e,{useCamera:b=!0}=e,{near:v=void 0}=e,{far:y=void 0}=e,{fov:M=void 0}=e;const{size:L,invalidate:w}=gn();pt(s,L,C=>t(19,n=C));const A=new yn(M,n.width/n.height,v,y);function R(C){x=C,t(1,x)}function B(C){ke.call(this,s,C)}function U(C){ke.call(this,s,C)}return s.$$set=C=>{"position"in C&&t(2,o=C.position),"scale"in C&&t(3,a=C.scale),"rotation"in C&&t(4,l=C.rotation),"lookAt"in C&&t(5,c=C.lookAt),"castShadow"in C&&t(6,u=C.castShadow),"receiveShadow"in C&&t(7,f=C.receiveShadow),"frustumCulled"in C&&t(8,h=C.frustumCulled),"renderOrder"in C&&t(9,d=C.renderOrder),"visible"in C&&t(10,_=C.visible),"userData"in C&&t(11,p=C.userData),"dispose"in C&&t(12,m=C.dispose),"viewportAware"in C&&t(13,g=C.viewportAware),"inViewport"in C&&t(1,x=C.inViewport),"useCamera"in C&&t(14,b=C.useCamera),"near"in C&&t(16,v=C.near),"far"in C&&t(17,y=C.far),"fov"in C&&t(18,M=C.fov),"$$scope"in C&&t(24,r=C.$$scope)},s.$$.update=()=>{s.$$.dirty&524289&&(t(0,A.aspect=n.width/n.height,A),A.updateProjectionMatrix(),w("PerspectiveCamera: aspect changed")),s.$$.dirty&458753&&(v!==void 0&&t(0,A.near=v,A),y!==void 0&&t(0,A.far=y,A),M!==void 0&&t(0,A.fov=M,A),A.updateProjectionMatrix(),w("PerspectiveCamera: props changed"))},[A,x,o,a,l,c,u,f,h,d,_,p,m,g,b,L,v,y,M,n,i,R,B,U,r]}class U_ extends je{constructor(e){super(),Xe(this,e,I_,R_,We,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const Kc=[],O_=(s,e)=>{const t=Kc.find(i=>i instanceof s);if(t)return t;const n=e();return Kc.push(n),n},Jc={type:"change"},mo={type:"start"},Qc={type:"end"};let F_=class extends Ni{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qi.ROTATE,MIDDLE:Qi.DOLLY,RIGHT:Qi.PAN},this.touches={ONE:$i.ROTATE,TWO:$i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",ge),this._domElementKeyEvents=k},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Jc),n.update(),r=i.NONE},this.update=function(){const k=new K,j=new Bi().setFromUnitVectors(e.up,new K(0,1,0)),xe=j.clone().invert(),Se=new K,ye=new Bi,_e=2*Math.PI;return function(){const Be=n.object.position;k.copy(Be).sub(n.target),k.applyQuaternion(j),a.setFromVector3(k),n.autoRotate&&r===i.NONE&&A(L()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ze=n.minAzimuthAngle,Je=n.maxAzimuthAngle;return isFinite(ze)&&isFinite(Je)&&(ze<-Math.PI?ze+=_e:ze>Math.PI&&(ze-=_e),Je<-Math.PI?Je+=_e:Je>Math.PI&&(Je-=_e),ze<=Je?a.theta=Math.max(ze,Math.min(Je,a.theta)):a.theta=a.theta>(ze+Je)/2?Math.max(ze,a.theta):Math.min(Je,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),k.setFromSpherical(a),k.applyQuaternion(xe),Be.copy(n.target).add(k),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||Se.distanceToSquared(n.object.position)>o||8*(1-ye.dot(n.object.quaternion))>o?(n.dispatchEvent(Jc),Se.copy(n.object.position),ye.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Z),n.domElement.removeEventListener("pointerdown",Fe),n.domElement.removeEventListener("pointercancel",Ne),n.domElement.removeEventListener("wheel",Pe),n.domElement.removeEventListener("pointermove",Te),n.domElement.removeEventListener("pointerup",Ie),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ge)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Gc,l=new Gc;let c=1;const u=new K;let f=!1;const h=new Ze,d=new Ze,_=new Ze,p=new Ze,m=new Ze,g=new Ze,x=new Ze,b=new Ze,v=new Ze,y=[],M={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function w(){return Math.pow(.95,n.zoomSpeed)}function A(k){l.theta-=k}function R(k){l.phi-=k}const B=function(){const k=new K;return function(xe,Se){k.setFromMatrixColumn(Se,0),k.multiplyScalar(-xe),u.add(k)}}(),U=function(){const k=new K;return function(xe,Se){n.screenSpacePanning===!0?k.setFromMatrixColumn(Se,1):(k.setFromMatrixColumn(Se,0),k.crossVectors(n.object.up,k)),k.multiplyScalar(xe),u.add(k)}}(),C=function(){const k=new K;return function(xe,Se){const ye=n.domElement;if(n.object.isPerspectiveCamera){const _e=n.object.position;k.copy(_e).sub(n.target);let me=k.length();me*=Math.tan(n.object.fov/2*Math.PI/180),B(2*xe*me/ye.clientHeight,n.object.matrix),U(2*Se*me/ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(xe*(n.object.right-n.object.left)/n.object.zoom/ye.clientWidth,n.object.matrix),U(Se*(n.object.top-n.object.bottom)/n.object.zoom/ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(k){n.object.isPerspectiveCamera?c/=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*k)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(k){n.object.isPerspectiveCamera?c*=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/k)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(k){h.set(k.clientX,k.clientY)}function te(k){x.set(k.clientX,k.clientY)}function J(k){p.set(k.clientX,k.clientY)}function V(k){d.set(k.clientX,k.clientY),_.subVectors(d,h).multiplyScalar(n.rotateSpeed);const j=n.domElement;A(2*Math.PI*_.x/j.clientHeight),R(2*Math.PI*_.y/j.clientHeight),h.copy(d),n.update()}function W(k){b.set(k.clientX,k.clientY),v.subVectors(b,x),v.y>0?I(w()):v.y<0&&D(w()),x.copy(b),n.update()}function S(k){m.set(k.clientX,k.clientY),g.subVectors(m,p).multiplyScalar(n.panSpeed),C(g.x,g.y),p.copy(m),n.update()}function P(k){k.deltaY<0?D(w()):k.deltaY>0&&I(w()),n.update()}function Q(k){let j=!1;switch(k.code){case n.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(-n.keyPanSpeed,0),j=!0;break}j&&(k.preventDefault(),n.update())}function X(){if(y.length===1)h.set(y[0].pageX,y[0].pageY);else{const k=.5*(y[0].pageX+y[1].pageX),j=.5*(y[0].pageY+y[1].pageY);h.set(k,j)}}function q(){if(y.length===1)p.set(y[0].pageX,y[0].pageY);else{const k=.5*(y[0].pageX+y[1].pageX),j=.5*(y[0].pageY+y[1].pageY);p.set(k,j)}}function E(){const k=y[0].pageX-y[1].pageX,j=y[0].pageY-y[1].pageY,xe=Math.sqrt(k*k+j*j);x.set(0,xe)}function Y(){n.enableZoom&&E(),n.enablePan&&q()}function ee(){n.enableZoom&&E(),n.enableRotate&&X()}function ae(k){if(y.length==1)d.set(k.pageX,k.pageY);else{const xe=z(k),Se=.5*(k.pageX+xe.x),ye=.5*(k.pageY+xe.y);d.set(Se,ye)}_.subVectors(d,h).multiplyScalar(n.rotateSpeed);const j=n.domElement;A(2*Math.PI*_.x/j.clientHeight),R(2*Math.PI*_.y/j.clientHeight),h.copy(d)}function oe(k){if(y.length===1)m.set(k.pageX,k.pageY);else{const j=z(k),xe=.5*(k.pageX+j.x),Se=.5*(k.pageY+j.y);m.set(xe,Se)}g.subVectors(m,p).multiplyScalar(n.panSpeed),C(g.x,g.y),p.copy(m)}function pe(k){const j=z(k),xe=k.pageX-j.x,Se=k.pageY-j.y,ye=Math.sqrt(xe*xe+Se*Se);b.set(0,ye),v.set(0,Math.pow(b.y/x.y,n.zoomSpeed)),I(v.y),x.copy(b)}function N(k){n.enableZoom&&pe(k),n.enablePan&&oe(k)}function he(k){n.enableZoom&&pe(k),n.enableRotate&&ae(k)}function Fe(k){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",Te),n.domElement.addEventListener("pointerup",Ie)),ie(k),k.pointerType==="touch"?O(k):ue(k))}function Te(k){n.enabled!==!1&&(k.pointerType==="touch"?T(k):Me(k))}function Ie(k){le(k),y.length===0&&(n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",Te),n.domElement.removeEventListener("pointerup",Ie)),n.dispatchEvent(Qc),r=i.NONE}function Ne(k){le(k)}function ue(k){let j;switch(k.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case Qi.DOLLY:if(n.enableZoom===!1)return;te(k),r=i.DOLLY;break;case Qi.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enablePan===!1)return;J(k),r=i.PAN}else{if(n.enableRotate===!1)return;H(k),r=i.ROTATE}break;case Qi.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enableRotate===!1)return;H(k),r=i.ROTATE}else{if(n.enablePan===!1)return;J(k),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(mo)}function Me(k){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;V(k);break;case i.DOLLY:if(n.enableZoom===!1)return;W(k);break;case i.PAN:if(n.enablePan===!1)return;S(k);break}}function Pe(k){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(k.preventDefault(),n.dispatchEvent(mo),P(k),n.dispatchEvent(Qc))}function ge(k){n.enabled===!1||n.enablePan===!1||Q(k)}function O(k){switch(ve(k),y.length){case 1:switch(n.touches.ONE){case $i.ROTATE:if(n.enableRotate===!1)return;X(),r=i.TOUCH_ROTATE;break;case $i.PAN:if(n.enablePan===!1)return;q(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case $i.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Y(),r=i.TOUCH_DOLLY_PAN;break;case $i.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ee(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(mo)}function T(k){switch(ve(k),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ae(k),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;oe(k),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;N(k),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;he(k),n.update();break;default:r=i.NONE}}function Z(k){n.enabled!==!1&&k.preventDefault()}function ie(k){y.push(k)}function le(k){delete M[k.pointerId];for(let j=0;j<y.length;j++)if(y[j].pointerId==k.pointerId){y.splice(j,1);return}}function ve(k){let j=M[k.pointerId];j===void 0&&(j=new Ze,M[k.pointerId]=j),j.set(k.pageX,k.pageY)}function z(k){const j=k.pointerId===y[0].pointerId?y[1]:y[0];return M[j.pointerId]}n.domElement.addEventListener("contextmenu",Z),n.domElement.addEventListener("pointerdown",Fe),n.domElement.addEventListener("pointercancel",Ne),n.domElement.addEventListener("wheel",Pe,{passive:!1}),this.update()}};function k_(s){let e,t,n,i;return e=new Bn({props:{dispose:s[2],object:s[0]}}),n=new il({props:{object:s[4],position:s[1]}}),n.$on("transform",s[5]),{c(){Ee(e.$$.fragment),t=nt(),Ee(n.$$.fragment)},l(r){Ce(e.$$.fragment,r),t=it(r),Ce(n.$$.fragment,r)},m(r,o){De(e,r,o),Ve(r,t,o),De(n,r,o),i=!0},p(r,o){const a={};o[0]&4&&(a.dispose=r[2]),o[0]&1&&(a.object=r[0]),e.$set(a);const l={};o[0]&2&&(l.position=r[1]),n.$set(l)},i(r){i||(fe(e.$$.fragment,r),fe(n.$$.fragment,r),i=!0)},o(r){de(e.$$.fragment,r),de(n.$$.fragment,r),i=!1},d(r){Le(e,r),r&&we(t),Le(n,r)}}}function z_(s,e,t){let n,{autoRotate:i=void 0}=e,{autoRotateSpeed:r=void 0}=e,{dampingFactor:o=void 0}=e,{enableDamping:a=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:f=void 0}=e,{keyPanSpeed:h=void 0}=e,{keys:d=void 0}=e,{maxAzimuthAngle:_=void 0}=e,{maxDistance:p=void 0}=e,{maxPolarAngle:m=void 0}=e,{maxZoom:g=void 0}=e,{minAzimuthAngle:x=void 0}=e,{minDistance:b=void 0}=e,{minPolarAngle:v=void 0}=e,{minZoom:y=void 0}=e,{mouseButtons:M=void 0}=e,{panSpeed:L=void 0}=e,{rotateSpeed:w=void 0}=e,{screenSpacePanning:A=void 0}=e,{touches:R=void 0}=e,{zoomSpeed:B=void 0}=e,{target:U=void 0}=e,{dispose:C=void 0}=e;const I=cf();pt(s,I,E=>t(30,n=E));const{renderer:D,invalidate:H}=gn();if(!D)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof Ko))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const te=Cr(),J=()=>{H("Orbitcontrols: change event"),te("change")},V=()=>te("start"),W=()=>te("end"),S=new F_(n,D.domElement);Cn(n).orbitControls=S,S.addEventListener("change",J),S.addEventListener("start",V),S.addEventListener("end",W),Pt(()=>{n&&delete Cn(n).orbitControls,S.removeEventListener("change",J),S.removeEventListener("start",V),S.removeEventListener("end",W)});const{start:P,stop:Q}=bs(()=>S.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),X=new At,q=()=>{t(0,S.target=X.position,S),S.update(),H("OrbitControls: target changed")};return s.$$set=E=>{"autoRotate"in E&&t(6,i=E.autoRotate),"autoRotateSpeed"in E&&t(7,r=E.autoRotateSpeed),"dampingFactor"in E&&t(8,o=E.dampingFactor),"enableDamping"in E&&t(9,a=E.enableDamping),"enabled"in E&&t(10,l=E.enabled),"enablePan"in E&&t(11,c=E.enablePan),"enableRotate"in E&&t(12,u=E.enableRotate),"enableZoom"in E&&t(13,f=E.enableZoom),"keyPanSpeed"in E&&t(14,h=E.keyPanSpeed),"keys"in E&&t(15,d=E.keys),"maxAzimuthAngle"in E&&t(16,_=E.maxAzimuthAngle),"maxDistance"in E&&t(17,p=E.maxDistance),"maxPolarAngle"in E&&t(18,m=E.maxPolarAngle),"maxZoom"in E&&t(19,g=E.maxZoom),"minAzimuthAngle"in E&&t(20,x=E.minAzimuthAngle),"minDistance"in E&&t(21,b=E.minDistance),"minPolarAngle"in E&&t(22,v=E.minPolarAngle),"minZoom"in E&&t(23,y=E.minZoom),"mouseButtons"in E&&t(24,M=E.mouseButtons),"panSpeed"in E&&t(25,L=E.panSpeed),"rotateSpeed"in E&&t(26,w=E.rotateSpeed),"screenSpacePanning"in E&&t(27,A=E.screenSpacePanning),"touches"in E&&t(28,R=E.touches),"zoomSpeed"in E&&t(29,B=E.zoomSpeed),"target"in E&&t(1,U=E.target),"dispose"in E&&t(2,C=E.dispose)},s.$$.update=()=>{s.$$.dirty[0]&1073741761&&(i!==void 0&&t(0,S.autoRotate=i,S),r!==void 0&&t(0,S.autoRotateSpeed=r,S),o!==void 0&&t(0,S.dampingFactor=o,S),a!==void 0&&t(0,S.enableDamping=a,S),l!==void 0&&t(0,S.enabled=l,S),c!==void 0&&t(0,S.enablePan=c,S),u!==void 0&&t(0,S.enableRotate=u,S),f!==void 0&&t(0,S.enableZoom=f,S),h!==void 0&&t(0,S.keyPanSpeed=h,S),d!==void 0&&t(0,S.keys=d,S),_!==void 0&&t(0,S.maxAzimuthAngle=_,S),p!==void 0&&t(0,S.maxDistance=p,S),m!==void 0&&t(0,S.maxPolarAngle=m,S),g!==void 0&&t(0,S.maxZoom=g,S),x!==void 0&&t(0,S.minAzimuthAngle=x,S),b!==void 0&&t(0,S.minDistance=b,S),v!==void 0&&t(0,S.minPolarAngle=v,S),y!==void 0&&t(0,S.minZoom=y,S),M!==void 0&&t(0,S.mouseButtons=M,S),L!==void 0&&t(0,S.panSpeed=L,S),w!==void 0&&t(0,S.rotateSpeed=w,S),A!==void 0&&t(0,S.screenSpacePanning=A,S),R!==void 0&&t(0,S.touches=R,S),B!==void 0&&t(0,S.zoomSpeed=B,S),S.update(),H("OrbitControls: props changed")),s.$$.dirty[0]&576&&(i||a?P():Q())},[S,U,C,I,X,q,i,r,o,a,l,c,u,f,h,d,_,p,m,g,x,b,v,y,M,L,w,A,R,B]}class B_ extends je{constructor(e){super(),Xe(this,e,z_,k_,We,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}const N_=(s,e)=>e?new rt(s):new rt().setHex(new rt(s).getHex()).convertSRGBToLinear();function G_(s){let e;const t=s[18].default,n=Rt(t,s,s[22],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&4194304)&&It(n,t,i,i[22],e?Ot(t,i[22],r,null):Ut(i[22]),null)},i(i){e||(fe(n,i),e=!0)},o(i){de(n,i),e=!1},d(i){n&&n.d(i)}}}function V_(s){let e,t,n;function i(o){s[19](o)}let r={object:s[0],lookAt:s[5],castShadow:s[7],receiveShadow:s[8],frustumCulled:s[9],renderOrder:s[10],position:s[2],scale:s[3],rotation:s[4],viewportAware:s[6],visible:s[11],userData:s[12],dispose:s[13],$$slots:{default:[G_]},$$scope:{ctx:s}};return s[1]!==void 0&&(r.inViewport=s[1]),e=new xs({props:r}),Lt.push(()=>zt(e,"inViewport",i)),e.$on("viewportenter",s[20]),e.$on("viewportleave",s[21]),{c(){Ee(e.$$.fragment)},l(o){Ce(e.$$.fragment,o)},m(o,a){De(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.object=o[0]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&4096&&(l.userData=o[12]),a&8192&&(l.dispose=o[13]),a&4194304&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],Bt(()=>t=!1)),e.$set(l)},i(o){n||(fe(e.$$.fragment,o),n=!0)},o(o){de(e.$$.fragment,o),n=!1},d(o){Le(e,o)}}}function W_(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{light:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:f=!1}=e,{inViewport:h=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:_=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:m=void 0}=e,{visible:g=void 0}=e,{userData:x=void 0}=e,{dispose:b=void 0}=e,{color:v=void 0}=e,{intensity:y=void 0}=e;const{invalidate:M}=gn(),{linear:L}=nl();pt(s,L,B=>t(17,n=B));function w(B){h=B,t(1,h)}function A(B){ke.call(this,s,B)}function R(B){ke.call(this,s,B)}return s.$$set=B=>{"light"in B&&t(0,o=B.light),"position"in B&&t(2,a=B.position),"scale"in B&&t(3,l=B.scale),"rotation"in B&&t(4,c=B.rotation),"lookAt"in B&&t(5,u=B.lookAt),"viewportAware"in B&&t(6,f=B.viewportAware),"inViewport"in B&&t(1,h=B.inViewport),"castShadow"in B&&t(7,d=B.castShadow),"receiveShadow"in B&&t(8,_=B.receiveShadow),"frustumCulled"in B&&t(9,p=B.frustumCulled),"renderOrder"in B&&t(10,m=B.renderOrder),"visible"in B&&t(11,g=B.visible),"userData"in B&&t(12,x=B.userData),"dispose"in B&&t(13,b=B.dispose),"color"in B&&t(15,v=B.color),"intensity"in B&&t(16,y=B.intensity),"$$scope"in B&&t(22,r=B.$$scope)},s.$$.update=()=>{s.$$.dirty&229376&&(y!==void 0&&t(0,o.intensity=y,o),v!==void 0&&t(0,o.color=N_(v,n),o),M("LightInstance: props changed"))},[o,h,a,l,c,u,f,d,_,p,m,g,x,b,L,v,y,n,i,w,A,R,r]}class H_ extends je{constructor(e){super(),Xe(this,e,W_,V_,We,{light:0,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:1,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,color:15,intensity:16})}}function j_(s){let e;const t=s[16].default,n=Rt(t,s,s[20],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&1048576)&&It(n,t,i,i[20],e?Ot(t,i[20],r,null):Ut(i[20]),null)},i(i){e||(fe(n,i),e=!0)},o(i){de(n,i),e=!1},d(i){n&&n.d(i)}}}function X_(s){let e,t,n;function i(o){s[17](o)}let r={light:s[15],lookAt:s[4],position:s[1],scale:s[2],rotation:s[3],castShadow:s[5],receiveShadow:s[6],frustumCulled:s[7],renderOrder:s[8],visible:s[9],userData:s[10],dispose:s[11],viewportAware:s[12],color:s[13],intensity:s[14],$$slots:{default:[j_]},$$scope:{ctx:s}};return s[0]!==void 0&&(r.inViewport=s[0]),e=new H_({props:r}),Lt.push(()=>zt(e,"inViewport",i)),e.$on("viewportenter",s[18]),e.$on("viewportleave",s[19]),{c(){Ee(e.$$.fragment)},l(o){Ce(e.$$.fragment,o)},m(o,a){De(e,o,a),n=!0},p(o,[a]){const l={};a&16&&(l.lookAt=o[4]),a&2&&(l.position=o[1]),a&4&&(l.scale=o[2]),a&8&&(l.rotation=o[3]),a&32&&(l.castShadow=o[5]),a&64&&(l.receiveShadow=o[6]),a&128&&(l.frustumCulled=o[7]),a&256&&(l.renderOrder=o[8]),a&512&&(l.visible=o[9]),a&1024&&(l.userData=o[10]),a&2048&&(l.dispose=o[11]),a&4096&&(l.viewportAware=o[12]),a&8192&&(l.color=o[13]),a&16384&&(l.intensity=o[14]),a&1048576&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],Bt(()=>t=!1)),e.$set(l)},i(o){n||(fe(e.$$.fragment,o),n=!0)},o(o){de(e.$$.fragment,o),n=!1},d(o){Le(e,o)}}}function q_(s,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{lookAt:l=void 0}=e,{castShadow:c=void 0}=e,{receiveShadow:u=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:h=void 0}=e,{visible:d=void 0}=e,{userData:_=void 0}=e,{dispose:p=void 0}=e,{viewportAware:m=!1}=e,{inViewport:g=!1}=e,{color:x=void 0}=e,{intensity:b=void 0}=e;const v=new Uv(x,b);function y(w){g=w,t(0,g)}function M(w){ke.call(this,s,w)}function L(w){ke.call(this,s,w)}return s.$$set=w=>{"position"in w&&t(1,r=w.position),"scale"in w&&t(2,o=w.scale),"rotation"in w&&t(3,a=w.rotation),"lookAt"in w&&t(4,l=w.lookAt),"castShadow"in w&&t(5,c=w.castShadow),"receiveShadow"in w&&t(6,u=w.receiveShadow),"frustumCulled"in w&&t(7,f=w.frustumCulled),"renderOrder"in w&&t(8,h=w.renderOrder),"visible"in w&&t(9,d=w.visible),"userData"in w&&t(10,_=w.userData),"dispose"in w&&t(11,p=w.dispose),"viewportAware"in w&&t(12,m=w.viewportAware),"inViewport"in w&&t(0,g=w.inViewport),"color"in w&&t(13,x=w.color),"intensity"in w&&t(14,b=w.intensity),"$$scope"in w&&t(20,i=w.$$scope)},[g,r,o,a,l,c,u,f,h,d,_,p,m,x,b,v,n,y,M,L,i]}class Y_ extends je{constructor(e){super(),Xe(this,e,q_,X_,We,{position:1,scale:2,rotation:3,lookAt:4,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,viewportAware:12,inViewport:0,color:13,intensity:14,light:15})}get light(){return this.$$.ctx[15]}}function Z_(s,e,t){let{object:n}=e,i=n,{interactive:r=!1}=e,{ignorePointer:o=!1}=e;const a=Cr(),{addInteractiveObject:l,removeInteractiveObject:c,addRaycastableObject:u,removeRaycastableObject:f}=nl(),{invalidate:h}=gn(),d=p=>{f(p),c(p),delete Cn(p).eventDispatcher},_=(p,m,g)=>{Cn(p).eventDispatcher=a,m?(f(p),c(p)):(u(p),g?l(p):c(p))};return Pt(()=>{d(n),h("InteractiveObject: object removed")}),s.$$set=p=>{"object"in p&&t(0,n=p.object),"interactive"in p&&t(1,r=p.interactive),"ignorePointer"in p&&t(2,o=p.ignorePointer)},s.$$.update=()=>{s.$$.dirty&15&&(n!==i?(d(i),_(n,o,r),h("InteractiveObject: object changed"),t(3,i=n)):n===i&&(_(n,o,r),h("InteractiveObject: props changed")))},[n,r,o,i]}class ff extends je{constructor(e){super(),Xe(this,e,Z_,null,We,{object:0,interactive:1,ignorePointer:2})}}function K_(s){let e;const t=s[16].default,n=Rt(t,s,s[27],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&134217728)&&It(n,t,i,i[27],e?Ot(t,i[27],r,null):Ut(i[27]),null)},i(i){e||(fe(n,i),e=!0)},o(i){de(n,i),e=!1},d(i){n&&n.d(i)}}}function J_(s){let e,t,n,i,r;function o(l){s[17](l)}let a={object:s[1],lookAt:s[5],position:s[2],scale:s[3],rotation:s[4],castShadow:s[7],receiveShadow:s[8],frustumCulled:s[9],renderOrder:s[10],visible:s[11],userData:s[12],dispose:s[13],viewportAware:s[6],$$slots:{default:[K_]},$$scope:{ctx:s}};return s[0]!==void 0&&(a.inViewport=s[0]),e=new xs({props:a}),Lt.push(()=>zt(e,"inViewport",o)),e.$on("viewportenter",s[18]),e.$on("viewportleave",s[19]),i=new ff({props:{object:s[1],interactive:s[14],ignorePointer:s[15]}}),i.$on("click",s[20]),i.$on("contextmenu",s[21]),i.$on("pointerup",s[22]),i.$on("pointerdown",s[23]),i.$on("pointerenter",s[24]),i.$on("pointerleave",s[25]),i.$on("pointermove",s[26]),{c(){Ee(e.$$.fragment),n=nt(),Ee(i.$$.fragment)},l(l){Ce(e.$$.fragment,l),n=it(l),Ce(i.$$.fragment,l)},m(l,c){De(e,l,c),Ve(l,n,c),De(i,l,c),r=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&4096&&(u.userData=l[12]),c&8192&&(u.dispose=l[13]),c&64&&(u.viewportAware=l[6]),c&134217728&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],Bt(()=>t=!1)),e.$set(u);const f={};c&2&&(f.object=l[1]),c&16384&&(f.interactive=l[14]),c&32768&&(f.ignorePointer=l[15]),i.$set(f)},i(l){r||(fe(e.$$.fragment,l),fe(i.$$.fragment,l),r=!0)},o(l){de(e.$$.fragment,l),de(i.$$.fragment,l),r=!1},d(l){Le(e,l),l&&we(n),Le(i,l)}}}function Q_(s,e,t){let{$$slots:n={},$$scope:i}=e,{mesh:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:d=void 0}=e,{frustumCulled:_=void 0}=e,{renderOrder:p=void 0}=e,{visible:m=void 0}=e,{userData:g=void 0}=e,{dispose:x=void 0}=e,{interactive:b=!1}=e,{ignorePointer:v=!1}=e;function y(D){f=D,t(0,f)}function M(D){ke.call(this,s,D)}function L(D){ke.call(this,s,D)}function w(D){ke.call(this,s,D)}function A(D){ke.call(this,s,D)}function R(D){ke.call(this,s,D)}function B(D){ke.call(this,s,D)}function U(D){ke.call(this,s,D)}function C(D){ke.call(this,s,D)}function I(D){ke.call(this,s,D)}return s.$$set=D=>{"mesh"in D&&t(1,r=D.mesh),"position"in D&&t(2,o=D.position),"scale"in D&&t(3,a=D.scale),"rotation"in D&&t(4,l=D.rotation),"lookAt"in D&&t(5,c=D.lookAt),"viewportAware"in D&&t(6,u=D.viewportAware),"inViewport"in D&&t(0,f=D.inViewport),"castShadow"in D&&t(7,h=D.castShadow),"receiveShadow"in D&&t(8,d=D.receiveShadow),"frustumCulled"in D&&t(9,_=D.frustumCulled),"renderOrder"in D&&t(10,p=D.renderOrder),"visible"in D&&t(11,m=D.visible),"userData"in D&&t(12,g=D.userData),"dispose"in D&&t(13,x=D.dispose),"interactive"in D&&t(14,b=D.interactive),"ignorePointer"in D&&t(15,v=D.ignorePointer),"$$scope"in D&&t(27,i=D.$$scope)},[f,r,o,a,l,c,u,h,d,_,p,m,g,x,b,v,n,y,M,L,w,A,R,B,U,C,I,i]}class wa extends je{constructor(e){super(),Xe(this,e,Q_,J_,We,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}function $_(s){let e;const t=s[20].default,n=Rt(t,s,s[31],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&1)&&It(n,t,i,i[31],e?Ot(t,i[31],r,null):Ut(i[31]),null)},i(i){e||(fe(n,i),e=!0)},o(i){de(n,i),e=!1},d(i){n&&n.d(i)}}}function e1(s){let e,t,n,i,r,o,a;e=new Bn({props:{dispose:s[11],object:s[15]}}),n=new Bn({props:{dispose:s[11],object:s[16]}});function l(u){s[21](u)}let c={mesh:s[17],position:s[1],scale:s[2],rotation:s[3],lookAt:s[14],castShadow:s[5],receiveShadow:s[6],frustumCulled:s[7],renderOrder:s[8],visible:s[9],interactive:s[12],ignorePointer:s[13],userData:s[10],dispose:s[11],viewportAware:s[4],$$slots:{default:[$_]},$$scope:{ctx:s}};return s[0]!==void 0&&(c.inViewport=s[0]),r=new wa({props:c}),Lt.push(()=>zt(r,"inViewport",l)),r.$on("click",s[22]),r.$on("contextmenu",s[23]),r.$on("pointerup",s[24]),r.$on("pointerdown",s[25]),r.$on("pointerenter",s[26]),r.$on("pointerleave",s[27]),r.$on("pointermove",s[28]),r.$on("viewportenter",s[29]),r.$on("viewportleave",s[30]),{c(){Ee(e.$$.fragment),t=nt(),Ee(n.$$.fragment),i=nt(),Ee(r.$$.fragment)},l(u){Ce(e.$$.fragment,u),t=it(u),Ce(n.$$.fragment,u),i=it(u),Ce(r.$$.fragment,u)},m(u,f){De(e,u,f),Ve(u,t,f),De(n,u,f),Ve(u,i,f),De(r,u,f),a=!0},p(u,f){const h={};f[0]&2048&&(h.dispose=u[11]),f[0]&32768&&(h.object=u[15]),e.$set(h);const d={};f[0]&2048&&(d.dispose=u[11]),f[0]&65536&&(d.object=u[16]),n.$set(d);const _={};f[0]&2&&(_.position=u[1]),f[0]&4&&(_.scale=u[2]),f[0]&8&&(_.rotation=u[3]),f[0]&16384&&(_.lookAt=u[14]),f[0]&32&&(_.castShadow=u[5]),f[0]&64&&(_.receiveShadow=u[6]),f[0]&128&&(_.frustumCulled=u[7]),f[0]&256&&(_.renderOrder=u[8]),f[0]&512&&(_.visible=u[9]),f[0]&4096&&(_.interactive=u[12]),f[0]&8192&&(_.ignorePointer=u[13]),f[0]&1024&&(_.userData=u[10]),f[0]&2048&&(_.dispose=u[11]),f[0]&16&&(_.viewportAware=u[4]),f[1]&1&&(_.$$scope={dirty:f,ctx:u}),!o&&f[0]&1&&(o=!0,_.inViewport=u[0],Bt(()=>o=!1)),r.$set(_)},i(u){a||(fe(e.$$.fragment,u),fe(n.$$.fragment,u),fe(r.$$.fragment,u),a=!0)},o(u){de(e.$$.fragment,u),de(n.$$.fragment,u),de(r.$$.fragment,u),a=!1},d(u){Le(e,u),u&&we(t),Le(n,u),u&&we(i),Le(r,u)}}}function t1(s,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:d=void 0}=e,{visible:_=void 0}=e,{userData:p=void 0}=e,{dispose:m=void 0}=e,{interactive:g=!1}=e,{ignorePointer:x=!1}=e,{lookAt:b=void 0}=e,{geometry:v}=e,{material:y}=e,M=y,L=v;const{invalidate:w}=gn(),A=new en(v,y),R=()=>A;function B(S){c=S,t(0,c)}function U(S){ke.call(this,s,S)}function C(S){ke.call(this,s,S)}function I(S){ke.call(this,s,S)}function D(S){ke.call(this,s,S)}function H(S){ke.call(this,s,S)}function te(S){ke.call(this,s,S)}function J(S){ke.call(this,s,S)}function V(S){ke.call(this,s,S)}function W(S){ke.call(this,s,S)}return s.$$set=S=>{"position"in S&&t(1,r=S.position),"scale"in S&&t(2,o=S.scale),"rotation"in S&&t(3,a=S.rotation),"viewportAware"in S&&t(4,l=S.viewportAware),"inViewport"in S&&t(0,c=S.inViewport),"castShadow"in S&&t(5,u=S.castShadow),"receiveShadow"in S&&t(6,f=S.receiveShadow),"frustumCulled"in S&&t(7,h=S.frustumCulled),"renderOrder"in S&&t(8,d=S.renderOrder),"visible"in S&&t(9,_=S.visible),"userData"in S&&t(10,p=S.userData),"dispose"in S&&t(11,m=S.dispose),"interactive"in S&&t(12,g=S.interactive),"ignorePointer"in S&&t(13,x=S.ignorePointer),"lookAt"in S&&t(14,b=S.lookAt),"geometry"in S&&t(15,v=S.geometry),"material"in S&&t(16,y=S.material),"$$scope"in S&&t(31,i=S.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&327680&&(y!==M?(R().material=y,w("Mesh: material changed")):w("Mesh: material props changed"),t(18,M=y)),s.$$.dirty[0]&557056&&(v!==L?(R().geometry=v,w("Mesh: geometry changed")):w("Mesh: geometry props changed"),t(19,L=v))},[c,r,o,a,l,u,f,h,d,_,p,m,g,x,b,v,y,A,M,L,n,B,U,C,I,D,H,te,J,V,W,i]}class n1 extends je{constructor(e){super(),Xe(this,e,t1,e1,We,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,geometry:15,material:16,mesh:17},null,[-1,-1])}get mesh(){return this.$$.ctx[17]}}const i1=(s,e)=>{let t=s;return{onChange:(i,r)=>{(e&&!e(i,t)||!e&&i!==t)&&(r(i,t),t=i)}}};function $c(s){let e,t,n;function i(o){s[24](o)}let r={mesh:s[17],castShadow:s[5],receiveShadow:s[6],frustumCulled:void 0,renderOrder:s[7],visible:s[8],userData:s[9],dispose:s[10],interactive:s[11],ignorePointer:s[12],viewportAware:s[4]};return s[0]!==void 0&&(r.inViewport=s[0]),e=new wa({props:r}),Lt.push(()=>zt(e,"inViewport",i)),e.$on("click",s[20]),e.$on("contextmenu",s[20]),e.$on("pointerup",s[20]),e.$on("pointerdown",s[20]),e.$on("pointerenter",s[20]),e.$on("pointerleave",s[20]),e.$on("pointermove",s[20]),e.$on("viewportenter",s[25]),e.$on("viewportleave",s[26]),{c(){Ee(e.$$.fragment)},l(o){Ce(e.$$.fragment,o)},m(o,a){De(e,o,a),n=!0},p(o,a){const l={};a[0]&131072&&(l.mesh=o[17]),a[0]&32&&(l.castShadow=o[5]),a[0]&64&&(l.receiveShadow=o[6]),a[0]&128&&(l.renderOrder=o[7]),a[0]&256&&(l.visible=o[8]),a[0]&512&&(l.userData=o[9]),a[0]&1024&&(l.dispose=o[10]),a[0]&2048&&(l.interactive=o[11]),a[0]&4096&&(l.ignorePointer=o[12]),a[0]&16&&(l.viewportAware=o[4]),!t&&a[0]&1&&(t=!0,l.inViewport=o[0],Bt(()=>t=!1)),e.$set(l)},i(o){n||(fe(e.$$.fragment,o),n=!0)},o(o){de(e.$$.fragment,o),n=!1},d(o){Le(e,o)}}}function r1(s){let e=s[17].uuid,t,n,i=$c(s);const r=s[23].default,o=Rt(r,s,s[27],null);return{c(){i.c(),t=nt(),o&&o.c()},l(a){i.l(a),t=it(a),o&&o.l(a)},m(a,l){i.m(a,l),Ve(a,t,l),o&&o.m(a,l),n=!0},p(a,l){l[0]&131072&&We(e,e=a[17].uuid)?(Ar(),de(i,1,1,_t),Er(),i=$c(a),i.c(),fe(i,1),i.m(t.parentNode,t)):i.p(a,l),o&&o.p&&(!n||l[0]&134217728)&&It(o,r,a,a[27],n?Ot(r,a[27],l,null):Ut(a[27]),null)},i(a){n||(fe(i),fe(o,a),n=!0)},o(a){de(i),de(o,a),n=!1},d(a){i.d(a),a&&we(t),o&&o.d(a)}}}function s1(s){let e,t,n,i,r,o;return e=new Bn({props:{dispose:s[10],object:s[14]}}),n=new Bn({props:{dispose:s[10],object:s[15]}}),r=new xs({props:{object:s[18],position:s[1],scale:s[2],rotation:s[3],lookAt:s[13],$$slots:{default:[r1]},$$scope:{ctx:s}}}),{c(){Ee(e.$$.fragment),t=nt(),Ee(n.$$.fragment),i=nt(),Ee(r.$$.fragment)},l(a){Ce(e.$$.fragment,a),t=it(a),Ce(n.$$.fragment,a),i=it(a),Ce(r.$$.fragment,a)},m(a,l){De(e,a,l),Ve(a,t,l),De(n,a,l),Ve(a,i,l),De(r,a,l),o=!0},p(a,l){const c={};l[0]&1024&&(c.dispose=a[10]),l[0]&16384&&(c.object=a[14]),e.$set(c);const u={};l[0]&1024&&(u.dispose=a[10]),l[0]&32768&&(u.object=a[15]),n.$set(u);const f={};l[0]&2&&(f.position=a[1]),l[0]&4&&(f.scale=a[2]),l[0]&8&&(f.rotation=a[3]),l[0]&8192&&(f.lookAt=a[13]),l[0]&134356977&&(f.$$scope={dirty:l,ctx:a}),r.$set(f)},i(a){o||(fe(e.$$.fragment,a),fe(n.$$.fragment,a),fe(r.$$.fragment,a),o=!0)},o(a){de(e.$$.fragment,a),de(n.$$.fragment,a),de(r.$$.fragment,a),o=!1},d(a){Le(e,a),a&&we(t),Le(n,a),a&&we(i),Le(r,a)}}}const hf=new At;hf.scale.set(0,0,0);const eu={matrix:hf.matrix,color:null},a1=new wt().fromArray(new Array(16).fill(0)),po=new rt(16777215),df="threlte-instanced-mesh-context",o1=s=>Zn(df+s);function l1(s,e,t){let n,i=_t,r=()=>(i(),i=Cf(C,N=>t(17,n=N)),C),o;s.$$.on_destroy.push(()=>i());let{$$slots:a={},$$scope:l}=e,{position:c=void 0}=e,{scale:u=void 0}=e,{rotation:f=void 0}=e,{viewportAware:h=!1}=e,{inViewport:d=!1}=e,{castShadow:_=void 0}=e,{receiveShadow:p=void 0}=e,{renderOrder:m=void 0}=e,{visible:g=void 0}=e,{userData:x=void 0}=e,{dispose:b=void 0}=e,{interactive:v=!1}=e,{ignorePointer:y=!1}=e,{lookAt:M=void 0}=e,{geometry:L}=e,{material:w}=e,{count:A=void 0}=e,{id:R=""}=e;const{onChange:B}=i1(w),U=N=>N===void 0,C=hn(new Rc(L,w,U(A)?0:A));r();const I=new At,D=[],{invalidate:H}=gn(),te=(N,he)=>{const Fe=D.findIndex(Te=>Te===N);if(Fe===-1){console.warn("Instanced Mesh: Instance not found");return}he(Fe)},{start:J,stop:V,started:W}=bs(()=>{n.dispose(),On(C,n=new Rc(L,w,D.length),n),D.forEach((N,he)=>{q(N,he),N.color?n.setColorAt(he,N.color):n.setColorAt(he,po)}),On(C,n.instanceMatrix.needsUpdate=!0,n),n.instanceColor&&On(C,n.instanceColor.needsUpdate=!0,n),V()},{autostart:!1,debugFrameloopMessage:"Instanced Mesh: auto instance count change queued"});pt(s,W,N=>t(29,o=N));const S=N=>{if(U(A))D.push(N),o||J();else{const he=D.findIndex(Fe=>Fe===eu);he!==-1?D[he]=N:D.push(N),D.length>A&&console.warn("Instanced Mesh: More instances requested than allocated, increase count on <")}Q(N),H("Instanced Mesh: Instance added")},P=N=>{if(U(A)){const he=D.findIndex(Fe=>Fe===N);D.splice(he,1),o||J()}else{X(N);const he=D.findIndex(Fe=>Fe===N);he>=A?D.splice(he,1):D.splice(he,1,eu)}H("Instanced Mesh: Instance removed")},Q=N=>{N.color||te(N,he=>{n.setColorAt(he,po),n.instanceColor&&On(C,n.instanceColor.needsUpdate=!0,n)})},X=N=>{te(N,he=>{n.setMatrixAt(he,a1),On(C,n.instanceMatrix.needsUpdate=!0,n),H("Instanced Mesh: instance matrix resetted")})},q=(N,he)=>{n.setMatrixAt(he,N.matrix),On(C,n.instanceMatrix.needsUpdate=!0,n),H("Instanced Mesh: instance matrix set")},E=N=>{te(N,he=>{q(N,he)})},Y=N=>{te(N,he=>{n.setColorAt(he,N.color??po),n.instanceColor&&On(C,n.instanceColor.needsUpdate=!0,n),H("Instanced Mesh: instance color set")})};Fn(df+R,{registerInstance:S,removeInstance:P,setInstanceMatrix:E,setInstanceColor:Y,parentObject:I});const ee=N=>{if(N.detail.instanceId===void 0)return;const he=D[N.detail.instanceId];he&&he.pointerEventDispatcher&&he.pointerEventDispatcher(N.type,N.detail)};function ae(N){d=N,t(0,d)}function oe(N){ke.call(this,s,N)}function pe(N){ke.call(this,s,N)}return s.$$set=N=>{"position"in N&&t(1,c=N.position),"scale"in N&&t(2,u=N.scale),"rotation"in N&&t(3,f=N.rotation),"viewportAware"in N&&t(4,h=N.viewportAware),"inViewport"in N&&t(0,d=N.inViewport),"castShadow"in N&&t(5,_=N.castShadow),"receiveShadow"in N&&t(6,p=N.receiveShadow),"renderOrder"in N&&t(7,m=N.renderOrder),"visible"in N&&t(8,g=N.visible),"userData"in N&&t(9,x=N.userData),"dispose"in N&&t(10,b=N.dispose),"interactive"in N&&t(11,v=N.interactive),"ignorePointer"in N&&t(12,y=N.ignorePointer),"lookAt"in N&&t(13,M=N.lookAt),"geometry"in N&&t(14,L=N.geometry),"material"in N&&t(15,w=N.material),"count"in N&&t(21,A=N.count),"id"in N&&t(22,R=N.id),"$$scope"in N&&t(27,l=N.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&32768&&B(w,N=>{On(C,n.material=N,n)})},[d,c,u,f,h,_,p,m,g,x,b,v,y,M,L,w,C,n,I,W,ee,A,R,a,ae,oe,pe,l]}class c1 extends je{constructor(e){super(),Xe(this,e,l1,s1,We,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,renderOrder:7,visible:8,userData:9,dispose:10,interactive:11,ignorePointer:12,lookAt:13,geometry:14,material:15,count:21,id:22,instancedMesh:16},null,[-1,-1])}get instancedMesh(){return this.$$.ctx[16]}}function u1(s){let e;const t=s[8].default,n=Rt(t,s,s[9],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&512)&&It(n,t,i,i[9],e?Ot(t,i[9],r,null):Ut(i[9]),null)},i(i){e||(fe(n,i),e=!0)},o(i){de(n,i),e=!1},d(i){n&&n.d(i)}}}function f1(s){let e,t,n,i;return e=new tl({props:{object:s[4],$$slots:{default:[u1]},$$scope:{ctx:s}}}),n=new il({props:{object:s[4],position:s[0],scale:s[1],rotation:s[2],lookAt:s[3]}}),n.$on("transform",s[5]),{c(){Ee(e.$$.fragment),t=nt(),Ee(n.$$.fragment)},l(r){Ce(e.$$.fragment,r),t=it(r),Ce(n.$$.fragment,r)},m(r,o){De(e,r,o),Ve(r,t,o),De(n,r,o),i=!0},p(r,[o]){const a={};o&512&&(a.$$scope={dirty:o,ctx:r}),e.$set(a);const l={};o&1&&(l.position=r[0]),o&2&&(l.scale=r[1]),o&4&&(l.rotation=r[2]),o&8&&(l.lookAt=r[3]),n.$set(l)},i(r){i||(fe(e.$$.fragment,r),fe(n.$$.fragment,r),i=!0)},o(r){de(e.$$.fragment,r),de(n.$$.fragment,r),i=!1},d(r){Le(e,r),r&&we(t),Le(n,r)}}}function h1(s,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{lookAt:l=void 0}=e,{color:c=void 0}=e,{id:u=""}=e;const{registerInstance:f,setInstanceMatrix:h,removeInstance:d,setInstanceColor:_,parentObject:p}=o1(u),m=new At,g=new wt,x=Cr(),b=()=>{var U;return p.uuid===((U=m.parent)==null?void 0:U.uuid)},v=U=>U!==void 0?U instanceof rt?U:new rt(U):null,y={color:v(c),matrix:m.matrix,pointerEventDispatcher:x},M=U=>{y.color=v(U),_(y)},L=()=>{let U=m.parent;const C=[];for(;U&&p&&U.uuid!==p.uuid&&(C.push(U),!!U.parent);)U=U.parent;m.updateMatrix(),g.copy(m.matrix),C.forEach(I=>{I.updateMatrix(),g.premultiply(I.matrix)}),y.matrix=g},w=()=>{m.updateMatrix(),y.matrix=m.matrix},A=()=>{w(),h(y)},{start:R}=bs(()=>{L(),h(y)},{autostart:!1,debugFrameloopMessage:"Instance: tracking non-direct child instance"});f(y),Eu(()=>{b()?A():R(),M(c)});const B=()=>{b()&&A()};return Pt(()=>{d(y)}),s.$$set=U=>{"position"in U&&t(0,r=U.position),"scale"in U&&t(1,o=U.scale),"rotation"in U&&t(2,a=U.rotation),"lookAt"in U&&t(3,l=U.lookAt),"color"in U&&t(6,c=U.color),"id"in U&&t(7,u=U.id),"$$scope"in U&&t(9,i=U.$$scope)},s.$$.update=()=>{s.$$.dirty&64&&M(c)},[r,o,a,l,m,B,c,u,n,i]}class d1 extends je{constructor(e){super(),Xe(this,e,h1,f1,We,{position:0,scale:1,rotation:2,lookAt:3,color:6,id:7})}}function m1(s){let e;const t=s[16].default,n=Rt(t,s,s[27],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&134217728)&&It(n,t,i,i[27],e?Ot(t,i[27],r,null):Ut(i[27]),null)},i(i){e||(fe(n,i),e=!0)},o(i){de(n,i),e=!1},d(i){n&&n.d(i)}}}function p1(s){let e,t,n,i,r;function o(l){s[17](l)}let a={object:s[1],lookAt:s[5],position:s[2],scale:s[3],rotation:s[4],castShadow:s[7],receiveShadow:s[8],frustumCulled:s[9],renderOrder:s[10],visible:s[11],userData:s[12],dispose:s[13],viewportAware:s[6],$$slots:{default:[m1]},$$scope:{ctx:s}};return s[0]!==void 0&&(a.inViewport=s[0]),e=new xs({props:a}),Lt.push(()=>zt(e,"inViewport",o)),e.$on("viewportenter",s[18]),e.$on("viewportleave",s[19]),i=new ff({props:{object:s[1],interactive:s[14],ignorePointer:s[15]}}),i.$on("click",s[20]),i.$on("contextmenu",s[21]),i.$on("pointerup",s[22]),i.$on("pointerdown",s[23]),i.$on("pointerenter",s[24]),i.$on("pointerleave",s[25]),i.$on("pointermove",s[26]),{c(){Ee(e.$$.fragment),n=nt(),Ee(i.$$.fragment)},l(l){Ce(e.$$.fragment,l),n=it(l),Ce(i.$$.fragment,l)},m(l,c){De(e,l,c),Ve(l,n,c),De(i,l,c),r=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&4096&&(u.userData=l[12]),c&8192&&(u.dispose=l[13]),c&64&&(u.viewportAware=l[6]),c&134217728&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],Bt(()=>t=!1)),e.$set(u);const f={};c&2&&(f.object=l[1]),c&16384&&(f.interactive=l[14]),c&32768&&(f.ignorePointer=l[15]),i.$set(f)},i(l){r||(fe(e.$$.fragment,l),fe(i.$$.fragment,l),r=!0)},o(l){de(e.$$.fragment,l),de(i.$$.fragment,l),r=!1},d(l){Le(e,l),l&&we(n),Le(i,l)}}}function g1(s,e,t){let{$$slots:n={},$$scope:i}=e,{line:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:d=void 0}=e,{frustumCulled:_=void 0}=e,{renderOrder:p=void 0}=e,{visible:m=void 0}=e,{userData:g=void 0}=e,{dispose:x=void 0}=e,{interactive:b=!1}=e,{ignorePointer:v=!1}=e;function y(D){f=D,t(0,f)}function M(D){ke.call(this,s,D)}function L(D){ke.call(this,s,D)}function w(D){ke.call(this,s,D)}function A(D){ke.call(this,s,D)}function R(D){ke.call(this,s,D)}function B(D){ke.call(this,s,D)}function U(D){ke.call(this,s,D)}function C(D){ke.call(this,s,D)}function I(D){ke.call(this,s,D)}return s.$$set=D=>{"line"in D&&t(1,r=D.line),"position"in D&&t(2,o=D.position),"scale"in D&&t(3,a=D.scale),"rotation"in D&&t(4,l=D.rotation),"lookAt"in D&&t(5,c=D.lookAt),"viewportAware"in D&&t(6,u=D.viewportAware),"inViewport"in D&&t(0,f=D.inViewport),"castShadow"in D&&t(7,h=D.castShadow),"receiveShadow"in D&&t(8,d=D.receiveShadow),"frustumCulled"in D&&t(9,_=D.frustumCulled),"renderOrder"in D&&t(10,p=D.renderOrder),"visible"in D&&t(11,m=D.visible),"userData"in D&&t(12,g=D.userData),"dispose"in D&&t(13,x=D.dispose),"interactive"in D&&t(14,b=D.interactive),"ignorePointer"in D&&t(15,v=D.ignorePointer),"$$scope"in D&&t(27,i=D.$$scope)},[f,r,o,a,l,c,u,h,d,_,p,m,g,x,b,v,n,y,M,L,w,A,R,B,U,C,I,i]}class v1 extends je{constructor(e){super(),Xe(this,e,g1,p1,We,{line:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}function _1(s){let e;const t=s[23].default,n=Rt(t,s,s[34],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&8)&&It(n,t,i,i[34],e?Ot(t,i[34],r,null):Ut(i[34]),null)},i(i){e||(fe(n,i),e=!0)},o(i){de(n,i),e=!1},d(i){n&&n.d(i)}}}function b1(s){let e,t,n,i,r,o,a,l,c;e=new Bn({props:{dispose:s[11],object:s[15]}}),n=new Bn({props:{dispose:s[11],object:s[16]}}),r=new Bn({props:{dispose:!0,object:s[18]}});function u(h){s[24](h)}let f={line:s[17],position:s[1],scale:s[2],rotation:s[3],lookAt:s[14],castShadow:s[5],receiveShadow:s[6],frustumCulled:s[7],renderOrder:s[8],visible:s[9],userData:s[10],dispose:s[11],interactive:s[12],ignorePointer:s[13],viewportAware:s[4],$$slots:{default:[_1]},$$scope:{ctx:s}};return s[0]!==void 0&&(f.inViewport=s[0]),a=new v1({props:f}),Lt.push(()=>zt(a,"inViewport",u)),a.$on("click",s[25]),a.$on("contextmenu",s[26]),a.$on("pointerup",s[27]),a.$on("pointerdown",s[28]),a.$on("pointerenter",s[29]),a.$on("pointerleave",s[30]),a.$on("pointermove",s[31]),a.$on("viewportenter",s[32]),a.$on("viewportleave",s[33]),{c(){Ee(e.$$.fragment),t=nt(),Ee(n.$$.fragment),i=nt(),Ee(r.$$.fragment),o=nt(),Ee(a.$$.fragment)},l(h){Ce(e.$$.fragment,h),t=it(h),Ce(n.$$.fragment,h),i=it(h),Ce(r.$$.fragment,h),o=it(h),Ce(a.$$.fragment,h)},m(h,d){De(e,h,d),Ve(h,t,d),De(n,h,d),Ve(h,i,d),De(r,h,d),Ve(h,o,d),De(a,h,d),c=!0},p(h,d){const _={};d[0]&2048&&(_.dispose=h[11]),d[0]&32768&&(_.object=h[15]),e.$set(_);const p={};d[0]&2048&&(p.dispose=h[11]),d[0]&65536&&(p.object=h[16]),n.$set(p);const m={};d[0]&2&&(m.position=h[1]),d[0]&4&&(m.scale=h[2]),d[0]&8&&(m.rotation=h[3]),d[0]&16384&&(m.lookAt=h[14]),d[0]&32&&(m.castShadow=h[5]),d[0]&64&&(m.receiveShadow=h[6]),d[0]&128&&(m.frustumCulled=h[7]),d[0]&256&&(m.renderOrder=h[8]),d[0]&512&&(m.visible=h[9]),d[0]&1024&&(m.userData=h[10]),d[0]&2048&&(m.dispose=h[11]),d[0]&4096&&(m.interactive=h[12]),d[0]&8192&&(m.ignorePointer=h[13]),d[0]&16&&(m.viewportAware=h[4]),d[1]&8&&(m.$$scope={dirty:d,ctx:h}),!l&&d[0]&1&&(l=!0,m.inViewport=h[0],Bt(()=>l=!1)),a.$set(m)},i(h){c||(fe(e.$$.fragment,h),fe(n.$$.fragment,h),fe(r.$$.fragment,h),fe(a.$$.fragment,h),c=!0)},o(h){de(e.$$.fragment,h),de(n.$$.fragment,h),de(r.$$.fragment,h),de(a.$$.fragment,h),c=!1},d(h){Le(e,h),h&&we(t),Le(n,h),h&&we(i),Le(r,h),h&&we(o),Le(a,h)}}}function x1(s,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:d=void 0}=e,{visible:_=void 0}=e,{userData:p=void 0}=e,{dispose:m=void 0}=e,{interactive:g=!1}=e,{ignorePointer:x=!1}=e,{lookAt:b=void 0}=e,{geometry:v=void 0}=e,{points:y=[]}=e,{material:M}=e,L=M,w=v,A=y;const R=new cn,{invalidate:B}=gn(),U=E=>{if(!E)return;const Y=E.map(ee=>ee instanceof K?ee:new K().fromArray(ee));R.setFromPoints(Y)},C=E=>!!E;v||U(y);const I=new Ev(C(v)?v:R,M),D=()=>I;function H(E){c=E,t(0,c)}function te(E){ke.call(this,s,E)}function J(E){ke.call(this,s,E)}function V(E){ke.call(this,s,E)}function W(E){ke.call(this,s,E)}function S(E){ke.call(this,s,E)}function P(E){ke.call(this,s,E)}function Q(E){ke.call(this,s,E)}function X(E){ke.call(this,s,E)}function q(E){ke.call(this,s,E)}return s.$$set=E=>{"position"in E&&t(1,r=E.position),"scale"in E&&t(2,o=E.scale),"rotation"in E&&t(3,a=E.rotation),"viewportAware"in E&&t(4,l=E.viewportAware),"inViewport"in E&&t(0,c=E.inViewport),"castShadow"in E&&t(5,u=E.castShadow),"receiveShadow"in E&&t(6,f=E.receiveShadow),"frustumCulled"in E&&t(7,h=E.frustumCulled),"renderOrder"in E&&t(8,d=E.renderOrder),"visible"in E&&t(9,_=E.visible),"userData"in E&&t(10,p=E.userData),"dispose"in E&&t(11,m=E.dispose),"interactive"in E&&t(12,g=E.interactive),"ignorePointer"in E&&t(13,x=E.ignorePointer),"lookAt"in E&&t(14,b=E.lookAt),"geometry"in E&&t(15,v=E.geometry),"points"in E&&t(19,y=E.points),"material"in E&&t(16,M=E.material),"$$scope"in E&&t(34,i=E.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&1114112&&(M!==L?(D().material=M,B("Line: material changed")):B("Line: material props changed"),t(20,L=M)),s.$$.dirty[0]&2129920&&(v!==w?C(v)&&(D().geometry=v,B("Line: geometry changed")):C(v)&&B("Line: geometry props changed"),t(21,w=v)),s.$$.dirty[0]&4751360&&A!==y&&(v||(U(y),D().geometry=R),t(22,A=y))},[c,r,o,a,l,u,f,h,d,_,p,m,g,x,b,v,M,I,R,y,L,w,A,n,H,te,J,V,W,S,P,Q,X,q,i]}class w1 extends je{constructor(e){super(),Xe(this,e,x1,b1,We,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,geometry:15,points:19,material:16,line:17},null,[-1,-1])}get line(){return this.$$.ctx[17]}}const tu=new oi,ia=new K;class mf extends sf{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Kt(e,3)),this.setAttribute("uv",new Kt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Io(t,6,1);return this.setAttribute("instanceStart",new gi(n,3,0)),this.setAttribute("instanceEnd",new gi(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Io(t,6,1);return this.setAttribute("instanceColorStart",new gi(n,3,0)),this.setAttribute("instanceColorEnd",new gi(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Cv(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),tu.setFromBufferAttribute(t),this.boundingBox.union(tu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ia.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ia)),ia.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ia));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}Ae.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ze(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};mn.line={uniforms:_s.merge([Ae.common,Ae.fog,Ae.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class ha extends Kn{constructor(e){super({type:"LineMaterial",uniforms:_s.clone(mn.line.uniforms),vertexShader:mn.line.vertexShader,fragmentShader:mn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return Boolean("USE_DASH"in this.defines)},set(t){Boolean(t)!==Boolean("USE_DASH"in this.defines)&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)},set:function(t){Boolean(t)!==Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const nu=new K,iu=new K,Xt=new Tt,qt=new Tt,Vn=new Tt,go=new K,vo=new wt,Zt=new Fv,ru=new K,ra=new oi,sa=new Gi,Wn=new Tt;let jn,Fi;function su(s,e,t){return Wn.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),Wn.multiplyScalar(1/Wn.w),Wn.x=Fi/t.width,Wn.y=Fi/t.height,Wn.applyMatrix4(s.projectionMatrixInverse),Wn.multiplyScalar(1/Wn.w),Math.abs(Math.max(Wn.x,Wn.y))}function y1(s,e){const t=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,l=o;a<l;a++){Zt.start.fromBufferAttribute(i,a),Zt.end.fromBufferAttribute(r,a),Zt.applyMatrix4(t);const c=new K,u=new K;jn.distanceSqToSegment(Zt.start,Zt.end,u,c),u.distanceTo(c)<Fi*.5&&e.push({point:u,pointOnLine:c,distance:jn.origin.distanceTo(u),object:s,face:null,faceIndex:a,uv:null,uv2:null})}}function S1(s,e,t){const n=e.projectionMatrix,r=s.material.resolution,o=s.matrixWorld,a=s.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),f=-e.near;jn.at(1,Vn),Vn.w=1,Vn.applyMatrix4(e.matrixWorldInverse),Vn.applyMatrix4(n),Vn.multiplyScalar(1/Vn.w),Vn.x*=r.x/2,Vn.y*=r.y/2,Vn.z=0,go.copy(Vn),vo.multiplyMatrices(e.matrixWorldInverse,o);for(let h=0,d=u;h<d;h++){if(Xt.fromBufferAttribute(l,h),qt.fromBufferAttribute(c,h),Xt.w=1,qt.w=1,Xt.applyMatrix4(vo),qt.applyMatrix4(vo),Xt.z>f&&qt.z>f)continue;if(Xt.z>f){const b=Xt.z-qt.z,v=(Xt.z-f)/b;Xt.lerp(qt,v)}else if(qt.z>f){const b=qt.z-Xt.z,v=(qt.z-f)/b;qt.lerp(Xt,v)}Xt.applyMatrix4(n),qt.applyMatrix4(n),Xt.multiplyScalar(1/Xt.w),qt.multiplyScalar(1/qt.w),Xt.x*=r.x/2,Xt.y*=r.y/2,qt.x*=r.x/2,qt.y*=r.y/2,Zt.start.copy(Xt),Zt.start.z=0,Zt.end.copy(qt),Zt.end.z=0;const p=Zt.closestPointToPointParameter(go,!0);Zt.at(p,ru);const m=Ed.lerp(Xt.z,qt.z,p),g=m>=-1&&m<=1,x=go.distanceTo(ru)<Fi*.5;if(g&&x){Zt.start.fromBufferAttribute(l,h),Zt.end.fromBufferAttribute(c,h),Zt.start.applyMatrix4(o),Zt.end.applyMatrix4(o);const b=new K,v=new K;jn.distanceSqToSegment(Zt.start,Zt.end,v,b),t.push({point:v,pointOnLine:b,distance:jn.origin.distanceTo(v),object:s,face:null,faceIndex:h,uv:null,uv2:null})}}}class M1 extends en{constructor(e=new mf,t=new ha({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)nu.fromBufferAttribute(t,o),iu.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+nu.distanceTo(iu);const r=new Io(i,2,1);return e.setAttribute("instanceDistanceStart",new gi(r,1,0)),e.setAttribute("instanceDistanceEnd",new gi(r,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;jn=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;Fi=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),sa.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=Fi*.5;else{const f=Math.max(i.near,sa.distanceToPoint(jn.origin));c=su(i,f,l.resolution)}if(sa.radius+=c,jn.intersectsSphere(sa)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ra.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=Fi*.5;else{const f=Math.max(i.near,ra.distanceToPoint(jn.origin));u=su(i,f,l.resolution)}ra.expandByScalar(u),jn.intersectsBox(ra)!==!1&&(n?y1(this,t):S1(this,i,t))}}class Fo extends mf{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}let T1=class extends M1{constructor(e=new Fo,t=new ha({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};function A1(s){let e;const t=s[21].default,n=Rt(t,s,s[32],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&2)&&It(n,t,i,i[32],e?Ot(t,i[32],r,null):Ut(i[32]),null)},i(i){e||(fe(n,i),e=!0)},o(i){de(n,i),e=!1},d(i){n&&n.d(i)}}}function E1(s){let e,t,n,i,r,o,a;e=new Bn({props:{dispose:s[12],object:s[16]}}),n=new Bn({props:{dispose:!0,object:s[17]}});function l(u){s[22](u)}let c={mesh:s[0],position:s[2],scale:s[3],rotation:s[4],lookAt:s[15],castShadow:s[6],receiveShadow:s[7],frustumCulled:s[8],renderOrder:s[9],visible:s[10],userData:s[11],dispose:s[12],interactive:s[13],ignorePointer:s[14],viewportAware:s[5],$$slots:{default:[A1]},$$scope:{ctx:s}};return s[1]!==void 0&&(c.inViewport=s[1]),r=new wa({props:c}),Lt.push(()=>zt(r,"inViewport",l)),r.$on("click",s[23]),r.$on("contextmenu",s[24]),r.$on("pointerup",s[25]),r.$on("pointerdown",s[26]),r.$on("pointerenter",s[27]),r.$on("pointerleave",s[28]),r.$on("pointermove",s[29]),r.$on("viewportenter",s[30]),r.$on("viewportleave",s[31]),{c(){Ee(e.$$.fragment),t=nt(),Ee(n.$$.fragment),i=nt(),Ee(r.$$.fragment)},l(u){Ce(e.$$.fragment,u),t=it(u),Ce(n.$$.fragment,u),i=it(u),Ce(r.$$.fragment,u)},m(u,f){De(e,u,f),Ve(u,t,f),De(n,u,f),Ve(u,i,f),De(r,u,f),a=!0},p(u,f){const h={};f[0]&4096&&(h.dispose=u[12]),f[0]&65536&&(h.object=u[16]),e.$set(h);const d={};f[0]&1&&(d.mesh=u[0]),f[0]&4&&(d.position=u[2]),f[0]&8&&(d.scale=u[3]),f[0]&16&&(d.rotation=u[4]),f[0]&32768&&(d.lookAt=u[15]),f[0]&64&&(d.castShadow=u[6]),f[0]&128&&(d.receiveShadow=u[7]),f[0]&256&&(d.frustumCulled=u[8]),f[0]&512&&(d.renderOrder=u[9]),f[0]&1024&&(d.visible=u[10]),f[0]&2048&&(d.userData=u[11]),f[0]&4096&&(d.dispose=u[12]),f[0]&8192&&(d.interactive=u[13]),f[0]&16384&&(d.ignorePointer=u[14]),f[0]&32&&(d.viewportAware=u[5]),f[1]&2&&(d.$$scope={dirty:f,ctx:u}),!o&&f[0]&2&&(o=!0,d.inViewport=u[1],Bt(()=>o=!1)),r.$set(d)},i(u){a||(fe(e.$$.fragment,u),fe(n.$$.fragment,u),fe(r.$$.fragment,u),a=!0)},o(u){de(e.$$.fragment,u),de(n.$$.fragment,u),de(r.$$.fragment,u),a=!1},d(u){Le(e,u),u&&we(t),Le(n,u),u&&we(i),Le(r,u)}}}function C1(s,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:d=void 0}=e,{visible:_=void 0}=e,{userData:p=void 0}=e,{dispose:m=void 0}=e,{interactive:g=!1}=e,{ignorePointer:x=!1}=e,{lookAt:b=void 0}=e,{points:v=[]}=e,{material:y}=e,M=new Fo;M.setPositions([0,0,0]);let L;const w=new T1(void 0,y);Pt(()=>{M.dispose(),L==null||L.dispose()});const A=()=>w,{invalidate:R}=gn();let B=y;function U(P){c=P,t(1,c)}function C(P){ke.call(this,s,P)}function I(P){ke.call(this,s,P)}function D(P){ke.call(this,s,P)}function H(P){ke.call(this,s,P)}function te(P){ke.call(this,s,P)}function J(P){ke.call(this,s,P)}function V(P){ke.call(this,s,P)}function W(P){ke.call(this,s,P)}function S(P){ke.call(this,s,P)}return s.$$set=P=>{"position"in P&&t(2,r=P.position),"scale"in P&&t(3,o=P.scale),"rotation"in P&&t(4,a=P.rotation),"viewportAware"in P&&t(5,l=P.viewportAware),"inViewport"in P&&t(1,c=P.inViewport),"castShadow"in P&&t(6,u=P.castShadow),"receiveShadow"in P&&t(7,f=P.receiveShadow),"frustumCulled"in P&&t(8,h=P.frustumCulled),"renderOrder"in P&&t(9,d=P.renderOrder),"visible"in P&&t(10,_=P.visible),"userData"in P&&t(11,p=P.userData),"dispose"in P&&t(12,m=P.dispose),"interactive"in P&&t(13,g=P.interactive),"ignorePointer"in P&&t(14,x=P.ignorePointer),"lookAt"in P&&t(15,b=P.lookAt),"points"in P&&t(18,v=P.points),"material"in P&&t(19,y=P.material),"$$scope"in P&&t(32,i=P.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&327681&&(L==null||L.dispose(),v.length?(t(16,L=new Fo),L.setPositions(v.map(P=>P instanceof K?P.toArray():P).flat()),t(0,w.geometry=L,w)):t(0,w.geometry=M,w),w.computeLineDistances(),R("Line2: points changed")),s.$$.dirty[0]&1572864&&(y!==B?(A().material=y,R("Line2: material changed")):R("Line2: material props changed"),t(20,B=y))},[w,c,r,o,a,l,u,f,h,d,_,p,m,g,x,b,L,M,v,y,B,n,U,C,I,D,H,te,J,V,W,S,i]}class D1 extends je{constructor(e){super(),Xe(this,e,C1,E1,We,{position:2,scale:3,rotation:4,viewportAware:5,inViewport:1,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,interactive:13,ignorePointer:14,lookAt:15,points:18,material:19,line2:0},null,[-1,-1])}get line2(){return this.$$.ctx[0]}}function L1(s){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class au extends je{constructor(e){super(),Xe(this,e,L1,null,We,{})}}new Proxy(au,{get(s,e){return s[e]||au}});O_(zc,()=>new zc(nf));function P1(s){let e,t;return e=new D1({props:{material:new ha({worldUnits:!0,linewidth:s[0],color:5592405}),points:s[1]}}),{c(){Ee(e.$$.fragment)},l(n){Ce(e.$$.fragment,n)},m(n,i){De(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.material=new ha({worldUnits:!0,linewidth:n[0],color:5592405})),i&2&&(r.points=n[1]),e.$set(r)},i(n){t||(fe(e.$$.fragment,n),t=!0)},o(n){de(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function R1(s,e,t){let{edgeThickness:n}=e,{verticesCartesian:i}=e;return s.$$set=r=>{"edgeThickness"in r&&t(0,n=r.edgeThickness),"verticesCartesian"in r&&t(1,i=r.verticesCartesian)},[n,i]}class I1 extends je{constructor(e){super(),Xe(this,e,R1,P1,We,{edgeThickness:0,verticesCartesian:1})}}function da(s){return s.getVertices().map(e=>e.getCartesian())}function ou(s,e,t){const n=s.slice();return n[2]=e[t],n}function lu(s){let e,t;return e=new I1({props:{edgeThickness:s[1].edgeThickness,verticesCartesian:da(s[2])}}),{c(){Ee(e.$$.fragment)},l(n){Ce(e.$$.fragment,n)},m(n,i){De(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.edgeThickness=n[1].edgeThickness),i&1&&(r.verticesCartesian=da(n[2])),e.$set(r)},i(n){t||(fe(e.$$.fragment,n),t=!0)},o(n){de(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function U1(s){let e,t,n=s[0].edges,i=[];for(let o=0;o<n.length;o+=1)i[o]=lu(ou(s,n,o));const r=o=>de(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=wr()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=wr()},m(o,a){for(let l=0;l<i.length;l+=1)i[l].m(o,a);Ve(o,e,a),t=!0},p(o,[a]){if(a&3){n=o[0].edges;let l;for(l=0;l<n.length;l+=1){const c=ou(o,n,l);i[l]?(i[l].p(c,a),fe(i[l],1)):(i[l]=lu(c),i[l].c(),fe(i[l],1),i[l].m(e.parentNode,e))}for(Ar(),l=n.length;l<i.length;l+=1)r(l);Er()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)fe(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)de(i[a]);t=!1},d(o){Vo(i,o),o&&we(e)}}}function O1(s,e,t){let n,i;return pt(s,ma,r=>t(0,n=r)),pt(s,ki,r=>t(1,i=r)),[n,i]}class F1 extends je{constructor(e){super(),Xe(this,e,O1,U1,We,{})}}function k1(s){let e,t;return e=new d1({props:{position:new K(...s[0]),scale:s[1],color:4473924}}),{c(){Ee(e.$$.fragment)},l(n){Ce(e.$$.fragment,n)},m(n,i){De(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.position=new K(...n[0])),i&2&&(r.scale=n[1]),e.$set(r)},i(n){t||(fe(e.$$.fragment,n),t=!0)},o(n){de(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function z1(s,e,t){let{vertexCartesian:n}=e,{vertexSize:i}=e;return s.$$set=r=>{"vertexCartesian"in r&&t(0,n=r.vertexCartesian),"vertexSize"in r&&t(1,i=r.vertexSize)},[n,i]}class B1 extends je{constructor(e){super(),Xe(this,e,z1,k1,We,{vertexCartesian:0,vertexSize:1})}}function cu(s,e,t){const n=s.slice();return n[4]=e[t],n}function uu(s){let e,t;return e=new B1({props:{vertexCartesian:s[4].getCartesian(),vertexSize:s[1].vertexSize}}),{c(){Ee(e.$$.fragment)},l(n){Ce(e.$$.fragment,n)},m(n,i){De(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.vertexCartesian=n[4].getCartesian()),i&2&&(r.vertexSize=n[1].vertexSize),e.$set(r)},i(n){t||(fe(e.$$.fragment,n),t=!0)},o(n){de(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function N1(s){let e,t,n=s[0].vertices,i=[];for(let o=0;o<n.length;o+=1)i[o]=uu(cu(s,n,o));const r=o=>de(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=wr()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=wr()},m(o,a){for(let l=0;l<i.length;l+=1)i[l].m(o,a);Ve(o,e,a),t=!0},p(o,a){if(a&3){n=o[0].vertices;let l;for(l=0;l<n.length;l+=1){const c=cu(o,n,l);i[l]?(i[l].p(c,a),fe(i[l],1)):(i[l]=uu(c),i[l].c(),fe(i[l],1),i[l].m(e.parentNode,e))}for(Ar(),l=n.length;l<i.length;l+=1)r(l);Er()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)fe(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)de(i[a]);t=!1},d(o){Vo(i,o),o&&we(e)}}}function G1(s){let e,t;return e=new c1({props:{geometry:s[2],material:s[3],$$slots:{default:[N1]},$$scope:{ctx:s}}}),{c(){Ee(e.$$.fragment)},l(n){Ce(e.$$.fragment,n)},m(n,i){De(e,n,i),t=!0},p(n,[i]){const r={};i&131&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(fe(e.$$.fragment,n),t=!0)},o(n){de(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function V1(s,e,t){let n,i;pt(s,ma,a=>t(0,n=a)),pt(s,ki,a=>t(1,i=a));const r=new $o(.5),o=new Dv;return[n,i,r,o]}class W1 extends je{constructor(e){super(),Xe(this,e,V1,G1,We,{})}}function H1(s){let e,t;return e=new n1({props:{geometry:s[0],material:s[1]}}),{c(){Ee(e.$$.fragment)},l(n){Ce(e.$$.fragment,n)},m(n,i){De(e,n,i),t=!0},p:_t,i(n){t||(fe(e.$$.fragment,n),t=!0)},o(n){de(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function j1(s,e,t){let{verticesCartesian:n}=e;const i=new cn,r=new Float32Array(Array.prototype.concat(...n));i.setAttribute("position",new Mn(r,3));const o=new Lv({color:3355443,opacity:.5,transparent:!0,side:Dr});return s.$$set=a=>{"verticesCartesian"in a&&t(2,n=a.verticesCartesian)},[i,o,n]}class X1 extends je{constructor(e){super(),Xe(this,e,j1,H1,We,{verticesCartesian:2})}}function fu(s,e,t){const n=s.slice();return n[1]=e[t],n}function hu(s){let e,t;return e=new X1({props:{verticesCartesian:da(s[1])}}),{c(){Ee(e.$$.fragment)},l(n){Ce(e.$$.fragment,n)},m(n,i){De(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.verticesCartesian=da(n[1])),e.$set(r)},i(n){t||(fe(e.$$.fragment,n),t=!0)},o(n){de(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function q1(s){let e,t,n=s[0].faces,i=[];for(let o=0;o<n.length;o+=1)i[o]=hu(fu(s,n,o));const r=o=>de(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=wr()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=wr()},m(o,a){for(let l=0;l<i.length;l+=1)i[l].m(o,a);Ve(o,e,a),t=!0},p(o,[a]){if(a&1){n=o[0].faces;let l;for(l=0;l<n.length;l+=1){const c=fu(o,n,l);i[l]?(i[l].p(c,a),fe(i[l],1)):(i[l]=hu(c),i[l].c(),fe(i[l],1),i[l].m(e.parentNode,e))}for(Ar(),l=n.length;l<i.length;l+=1)r(l);Er()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)fe(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)de(i[a]);t=!1},d(o){Vo(i,o),o&&we(e)}}}function Y1(s,e,t){let n;return pt(s,ma,i=>t(0,n=i)),[n]}class Z1 extends je{constructor(e){super(),Xe(this,e,Y1,q1,We,{})}}new K;new K;new K;function rl(){var s=0,e=[],t,n=0,i=0;function r(g,x){var b=rl();function v(){var y=s>0?g:x;if(p(y))try{var M=y(t);M===b&&_();var L=h(M);L?L.call(M,b.resolve,b.reject):b.resolve(M)}catch(w){b.reject(w)}else b[s>0?"resolve":"reject"](t)}return e.push(v),s&&c(),b}var o=d(function(g){i||l(1,g)}),a=d(function(g){i||l(-1,g)});function l(g,x){i++;var b=0;try{x===m&&_();var v=g>0&&h(x);v?v.call(x,d(function(y){b++,l(1,y)}),d(function(y){b++,l(-1,y)})):(s=g,t=x,c())}catch(y){!s&&!b&&l(-1,y)}}function c(){n||(setTimeout(u,0),n=1)}function u(){var g=e;n=0,e=[],g.forEach(f)}function f(g){g()}function h(g){var x=g&&(p(g)||typeof g=="object")&&g.then;return p(x)&&x}function d(g){var x=0;return function(){for(var b=[],v=arguments.length;v--;)b[v]=arguments[v];x++||g.apply(this,b)}}function _(){throw new TypeError("Chaining cycle detected")}var p=function(g){return typeof g=="function"},m={then:r,resolve:o,reject:a};return m}function pf(){var s,e,t=new Promise(function(n,i){s=n,e=i});return{then:t.then.bind(t),resolve:s,reject:e}}rl.all=pf.all=function(s){var e=0,t=[],n=ai();return s.length===0?n.resolve([]):s.forEach(function(i,r){var o=ai();o.resolve(i),o.then(function(a){e++,t[r]=a,e===s.length&&n.resolve(t)},n.reject)}),n};var ai=typeof Promise=="function"?pf:rl;function K1(){var s=Object.create(null);function e(i,r){var o=i.id,a=i.name,l=i.dependencies;l===void 0&&(l=[]);var c=i.init;c===void 0&&(c=function(){});var u=i.getTransferables;if(u===void 0&&(u=null),!s[o])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(d){if(d instanceof Error)throw d}),h=s[h.id].value),h}),c=n("<"+a+">.init",c),u&&(u=n("<"+a+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[o]={id:o,value:f,getTransferables:u},r(f)}catch(h){h&&h.noLog||console.error(h),r(h)}}function t(i,r){var o,a=i.id,l=i.args;(!s[a]||typeof s[a].value!="function")&&r(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var c=(o=s[a]).value.apply(o,l);c&&typeof c.then=="function"?c.then(u,function(f){return r(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){r(f)}function u(f){try{var h=s[a].getTransferables&&s[a].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),r(f,h)}catch(d){console.error(d),r(d)}}}function n(i,r){var o=void 0;self.troikaDefine=function(l){return o=l};var a=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(l){console.error(l)}return URL.revokeObjectURL(a),delete self.troikaDefine,o}self.addEventListener("message",function(i){var r=i.data,o=r.messageId,a=r.action,l=r.data;try{a==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof c=="function"}})}),a==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:o,success:!1,error:c.stack})}})}function J1(s){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,n=s.init;t=Array.isArray(t)?t.map(function(r){return r&&r._getInitResult?r._getInitResult():r}):[];var i=ai.all(t).then(function(r){return n.apply(null,r)});return e._getInitResult=function(){return i},i},e}var gf=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return gf=function(){return s},s},Q1=0,$1=0,_o=!1,ts=Object.create(null),ns=Object.create(null),ko=Object.create(null);function Pr(s){if((!s||typeof s.init!="function")&&!_o)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,n=s.getTransferables,i=s.workerId;if(!gf())return J1(s);i==null&&(i="#default");var r="workerModule"+ ++Q1,o=s.name||r,a=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(_o=!0,c=Pr({workerId:i,name:"<"+o+"> function dependency: "+c.name,init:`function(){return (
`+ca(c)+`
)}`}),_o=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!a){a=du(i,"registerModule",l.workerModuleData);var f=function(){a=null,ns[i].delete(f)};(ns[i]||(ns[i]=new Set)).add(f)}return a.then(function(h){var d=h.isCallable;if(d)return du(i,"callModule",{id:r,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:r,name:o,dependencies:e,init:ca(t),getTransferables:n&&ca(n)},l}function eb(s){ns[s]&&ns[s].forEach(function(e){e()}),ts[s]&&(ts[s].terminate(),delete ts[s])}function ca(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function tb(s){var e=ts[s];if(!e){var t=ca(K1);e=ts[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(n){var i=n.data,r=i.messageId,o=ko[r];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete ko[r],o(i)}}return e}function du(s,e,t){var n=ai(),i=++$1;return ko[i]=function(r){r.success?n.resolve(r.result):n.reject(new Error("Error in worker "+e+" call: "+r.error))},tb(s).postMessage({messageId:i,action:e,data:t}),n}var nb=Pr({name:"Thenable",dependencies:[ai],init:function(s){return s}});function vf(){var s=function(e){function t(V,W,S,P,Q,X,q,E){var Y=1-q;E.x=Y*Y*V+2*Y*q*S+q*q*Q,E.y=Y*Y*W+2*Y*q*P+q*q*X}function n(V,W,S,P,Q,X,q,E,Y,ee){var ae=1-Y;ee.x=ae*ae*ae*V+3*ae*ae*Y*S+3*ae*Y*Y*Q+Y*Y*Y*q,ee.y=ae*ae*ae*W+3*ae*ae*Y*P+3*ae*Y*Y*X+Y*Y*Y*E}function i(V,W){for(var S=/([MLQCZ])([^MLQCZ]*)/g,P,Q,X,q,E;P=S.exec(V);){var Y=P[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ee){return parseFloat(ee)});switch(P[1]){case"M":q=Q=Y[0],E=X=Y[1];break;case"L":(Y[0]!==q||Y[1]!==E)&&W("L",q,E,q=Y[0],E=Y[1]);break;case"Q":{W("Q",q,E,q=Y[2],E=Y[3],Y[0],Y[1]);break}case"C":{W("C",q,E,q=Y[4],E=Y[5],Y[0],Y[1],Y[2],Y[3]);break}case"Z":(q!==Q||E!==X)&&W("L",q,E,Q,X);break}}}function r(V,W,S){S===void 0&&(S=16);var P={x:0,y:0};i(V,function(Q,X,q,E,Y,ee,ae,oe,pe){switch(Q){case"L":W(X,q,E,Y);break;case"Q":{for(var N=X,he=q,Fe=1;Fe<S;Fe++)t(X,q,ee,ae,E,Y,Fe/(S-1),P),W(N,he,P.x,P.y),N=P.x,he=P.y;break}case"C":{for(var Te=X,Ie=q,Ne=1;Ne<S;Ne++)n(X,q,ee,ae,oe,pe,E,Y,Ne/(S-1),P),W(Te,Ie,P.x,P.y),Te=P.x,Ie=P.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(V,W){var S=V.getContext?V.getContext("webgl",c):V,P=l.get(S);if(!P){let ae=function(Te){var Ie=X[Te];if(!Ie&&(Ie=X[Te]=S.getExtension(Te),!Ie))throw new Error(Te+" not supported");return Ie},oe=function(Te,Ie){var Ne=S.createShader(Ie);return S.shaderSource(Ne,Te),S.compileShader(Ne),Ne},pe=function(Te,Ie,Ne,ue){if(!q[Te]){var Me={},Pe={},ge=S.createProgram();S.attachShader(ge,oe(Ie,S.VERTEX_SHADER)),S.attachShader(ge,oe(Ne,S.FRAGMENT_SHADER)),S.linkProgram(ge),q[Te]={program:ge,transaction:function(T){S.useProgram(ge),T({setUniform:function(ie,le){for(var ve=[],z=arguments.length-2;z-- >0;)ve[z]=arguments[z+2];var k=Pe[le]||(Pe[le]=S.getUniformLocation(ge,le));S["uniform"+ie].apply(S,[k].concat(ve))},setAttribute:function(ie,le,ve,z,k){var j=Me[ie];j||(j=Me[ie]={buf:S.createBuffer(),loc:S.getAttribLocation(ge,ie),data:null}),S.bindBuffer(S.ARRAY_BUFFER,j.buf),S.vertexAttribPointer(j.loc,le,S.FLOAT,!1,0,0),S.enableVertexAttribArray(j.loc),Q?S.vertexAttribDivisor(j.loc,z):ae("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(j.loc,z),k!==j.data&&(S.bufferData(S.ARRAY_BUFFER,k,ve),j.data=k)}})}}}q[Te].transaction(ue)},N=function(Te,Ie){Y++;try{S.activeTexture(S.TEXTURE0+Y);var Ne=E[Te];Ne||(Ne=E[Te]=S.createTexture(),S.bindTexture(S.TEXTURE_2D,Ne),S.texParameteri(S.TEXTURE_2D,S.TEXTURE_MIN_FILTER,S.NEAREST),S.texParameteri(S.TEXTURE_2D,S.TEXTURE_MAG_FILTER,S.NEAREST)),S.bindTexture(S.TEXTURE_2D,Ne),Ie(Ne,Y)}finally{Y--}},he=function(Te,Ie,Ne){var ue=S.createFramebuffer();ee.push(ue),S.bindFramebuffer(S.FRAMEBUFFER,ue),S.activeTexture(S.TEXTURE0+Ie),S.bindTexture(S.TEXTURE_2D,Te),S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Te,0);try{Ne(ue)}finally{S.deleteFramebuffer(ue),S.bindFramebuffer(S.FRAMEBUFFER,ee[--ee.length-1]||null)}},Fe=function(){X={},q={},E={},Y=-1,ee.length=0};var Q=typeof WebGL2RenderingContext<"u"&&S instanceof WebGL2RenderingContext,X={},q={},E={},Y=-1,ee=[];S.canvas.addEventListener("webglcontextlost",function(Te){Fe(),Te.preventDefault()},!1),l.set(S,P={gl:S,isWebGL2:Q,getExtension:ae,withProgram:pe,withTexture:N,withTextureFramebuffer:he,handleContextLoss:Fe})}W(P)}function f(V,W,S,P,Q,X,q,E){q===void 0&&(q=15),E===void 0&&(E=null),u(V,function(Y){var ee=Y.gl,ae=Y.withProgram,oe=Y.withTexture;oe("copy",function(pe,N){ee.texImage2D(ee.TEXTURE_2D,0,ee.RGBA,Q,X,0,ee.RGBA,ee.UNSIGNED_BYTE,W),ae("copy",o,a,function(he){var Fe=he.setUniform,Te=he.setAttribute;Te("aUV",2,ee.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Fe("1i","image",N),ee.bindFramebuffer(ee.FRAMEBUFFER,E||null),ee.disable(ee.BLEND),ee.colorMask(q&8,q&4,q&2,q&1),ee.viewport(S,P,Q,X),ee.scissor(S,P,Q,X),ee.drawArrays(ee.TRIANGLES,0,3)})})})}function h(V,W,S){var P=V.width,Q=V.height;u(V,function(X){var q=X.gl,E=new Uint8Array(P*Q*4);q.readPixels(0,0,P,Q,q.RGBA,q.UNSIGNED_BYTE,E),V.width=W,V.height=S,f(q,E,0,0,P,Q)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function _(V,W,S,P,Q,X){X===void 0&&(X=1);var q=new Uint8Array(V*W),E=P[2]-P[0],Y=P[3]-P[1],ee=[];r(S,function(Te,Ie,Ne,ue){ee.push({x1:Te,y1:Ie,x2:Ne,y2:ue,minX:Math.min(Te,Ne),minY:Math.min(Ie,ue),maxX:Math.max(Te,Ne),maxY:Math.max(Ie,ue)})}),ee.sort(function(Te,Ie){return Te.maxX-Ie.maxX});for(var ae=0;ae<V;ae++)for(var oe=0;oe<W;oe++){var pe=he(P[0]+E*(ae+.5)/V,P[1]+Y*(oe+.5)/W),N=Math.pow(1-Math.abs(pe)/Q,X)/2;pe<0&&(N=1-N),N=Math.max(0,Math.min(255,Math.round(N*255))),q[oe*V+ae]=N}return q;function he(Te,Ie){for(var Ne=1/0,ue=1/0,Me=ee.length;Me--;){var Pe=ee[Me];if(Pe.maxX+ue<=Te)break;if(Te+ue>Pe.minX&&Ie-ue<Pe.maxY&&Ie+ue>Pe.minY){var ge=g(Te,Ie,Pe.x1,Pe.y1,Pe.x2,Pe.y2);ge<Ne&&(Ne=ge,ue=Math.sqrt(Ne))}}return Fe(Te,Ie)&&(ue=-ue),ue}function Fe(Te,Ie){for(var Ne=0,ue=ee.length;ue--;){var Me=ee[ue];if(Me.maxX<=Te)break;var Pe=Me.y1>Ie!=Me.y2>Ie&&Te<(Me.x2-Me.x1)*(Ie-Me.y1)/(Me.y2-Me.y1)+Me.x1;Pe&&(Ne+=Me.y1<Me.y2?1:-1)}return Ne!==0}}function p(V,W,S,P,Q,X,q,E,Y,ee){X===void 0&&(X=1),E===void 0&&(E=0),Y===void 0&&(Y=0),ee===void 0&&(ee=0),m(V,W,S,P,Q,X,q,null,E,Y,ee)}function m(V,W,S,P,Q,X,q,E,Y,ee,ae){X===void 0&&(X=1),Y===void 0&&(Y=0),ee===void 0&&(ee=0),ae===void 0&&(ae=0);for(var oe=_(V,W,S,P,Q,X),pe=new Uint8Array(oe.length*4),N=0;N<oe.length;N++)pe[N*4+ae]=oe[N];f(q,pe,Y,ee,V,W,1<<3-ae,E)}function g(V,W,S,P,Q,X){var q=Q-S,E=X-P,Y=q*q+E*E,ee=Y?Math.max(0,Math.min(1,((V-S)*q+(W-P)*E)/Y)):0,ae=V-(S+ee*q),oe=W-(P+ee*E);return ae*ae+oe*oe}var x=Object.freeze({__proto__:null,generate:_,generateIntoCanvas:p,generateIntoFramebuffer:m}),b="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",v="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",y="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",M=new Float32Array([0,0,2,0,0,2]),L=null,w=!1,A={},R=new WeakMap;function B(V){if(!w&&!D(V))throw new Error("WebGL generation not supported")}function U(V,W,S,P,Q,X,q){if(X===void 0&&(X=1),q===void 0&&(q=null),!q&&(q=L,!q)){var E=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!E)throw new Error("OffscreenCanvas or DOM canvas not supported");q=L=E.getContext("webgl",{depth:!1})}B(q);var Y=new Uint8Array(V*W*4);u(q,function(pe){var N=pe.gl,he=pe.withTexture,Fe=pe.withTextureFramebuffer;he("readable",function(Te,Ie){N.texImage2D(N.TEXTURE_2D,0,N.RGBA,V,W,0,N.RGBA,N.UNSIGNED_BYTE,null),Fe(Te,Ie,function(Ne){I(V,W,S,P,Q,X,N,Ne,0,0,0),N.readPixels(0,0,V,W,N.RGBA,N.UNSIGNED_BYTE,Y)})})});for(var ee=new Uint8Array(V*W),ae=0,oe=0;ae<Y.length;ae+=4)ee[oe++]=Y[ae];return ee}function C(V,W,S,P,Q,X,q,E,Y,ee){X===void 0&&(X=1),E===void 0&&(E=0),Y===void 0&&(Y=0),ee===void 0&&(ee=0),I(V,W,S,P,Q,X,q,null,E,Y,ee)}function I(V,W,S,P,Q,X,q,E,Y,ee,ae){X===void 0&&(X=1),Y===void 0&&(Y=0),ee===void 0&&(ee=0),ae===void 0&&(ae=0),B(q);var oe=[];r(S,function(pe,N,he,Fe){oe.push(pe,N,he,Fe)}),oe=new Float32Array(oe),u(q,function(pe){var N=pe.gl,he=pe.isWebGL2,Fe=pe.getExtension,Te=pe.withProgram,Ie=pe.withTexture,Ne=pe.withTextureFramebuffer,ue=pe.handleContextLoss;if(Ie("rawDistances",function(Me,Pe){(V!==Me._lastWidth||W!==Me._lastHeight)&&N.texImage2D(N.TEXTURE_2D,0,N.RGBA,Me._lastWidth=V,Me._lastHeight=W,0,N.RGBA,N.UNSIGNED_BYTE,null),Te("main",b,v,function(ge){var O=ge.setAttribute,T=ge.setUniform,Z=!he&&Fe("ANGLE_instanced_arrays"),ie=!he&&Fe("EXT_blend_minmax");O("aUV",2,N.STATIC_DRAW,0,M),O("aLineSegment",4,N.DYNAMIC_DRAW,1,oe),T.apply(void 0,["4f","uGlyphBounds"].concat(P)),T("1f","uMaxDistance",Q),T("1f","uExponent",X),Ne(Me,Pe,function(le){N.enable(N.BLEND),N.colorMask(!0,!0,!0,!0),N.viewport(0,0,V,W),N.scissor(0,0,V,W),N.blendFunc(N.ONE,N.ONE),N.blendEquationSeparate(N.FUNC_ADD,he?N.MAX:ie.MAX_EXT),N.clear(N.COLOR_BUFFER_BIT),he?N.drawArraysInstanced(N.TRIANGLES,0,3,oe.length/4):Z.drawArraysInstancedANGLE(N.TRIANGLES,0,3,oe.length/4)})}),Te("post",o,y,function(ge){ge.setAttribute("aUV",2,N.STATIC_DRAW,0,M),ge.setUniform("1i","tex",Pe),N.bindFramebuffer(N.FRAMEBUFFER,E),N.disable(N.BLEND),N.colorMask(ae===0,ae===1,ae===2,ae===3),N.viewport(Y,ee,V,W),N.scissor(Y,ee,V,W),N.drawArrays(N.TRIANGLES,0,3)})}),N.isContextLost())throw ue(),new Error("webgl context lost")})}function D(V){var W=!V||V===L?A:V.canvas||V,S=R.get(W);if(S===void 0){w=!0;var P=null;try{var Q=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],X=U(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,V);S=X&&Q.length===X.length&&X.every(function(q,E){return q===Q[E]}),S||(P="bad trial run results",console.info(Q,X))}catch(q){S=!1,P=q.message}P&&console.warn("WebGL SDF generation not supported:",P),w=!1,R.set(W,S)}return S}var H=Object.freeze({__proto__:null,generate:U,generateIntoCanvas:C,generateIntoFramebuffer:I,isSupported:D});function te(V,W,S,P,Q,X){Q===void 0&&(Q=Math.max(P[2]-P[0],P[3]-P[1])/2),X===void 0&&(X=1);try{return U.apply(H,arguments)}catch(q){return console.info("WebGL SDF generation failed, falling back to JS",q),_.apply(x,arguments)}}function J(V,W,S,P,Q,X,q,E,Y,ee){Q===void 0&&(Q=Math.max(P[2]-P[0],P[3]-P[1])/2),X===void 0&&(X=1),E===void 0&&(E=0),Y===void 0&&(Y=0),ee===void 0&&(ee=0);try{return C.apply(H,arguments)}catch(ae){return console.info("WebGL SDF generation failed, falling back to JS",ae),p.apply(x,arguments)}}return e.forEachPathCommand=i,e.generate=te,e.generateIntoCanvas=J,e.javascript=x,e.pathToLineSegments=r,e.webgl=H,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function ib(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},n={},i={};n.L=1,i[1]="L",Object.keys(t).forEach(function(ue,Me){n[ue]=1<<Me+1,i[n[ue]]=ue}),Object.freeze(n);var r=n.LRI|n.RLI|n.FSI,o=n.L|n.R|n.AL,a=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,l=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,c=n.S|n.WS|n.B|r|n.PDI|l,u=null;function f(){if(!u){u=new Map;var ue=function(Pe){if(t.hasOwnProperty(Pe)){var ge=0;t[Pe].split(",").forEach(function(O){var T=O.split("+"),Z=T[0],ie=T[1];Z=parseInt(Z,36),ie=ie?parseInt(ie,36):0,u.set(ge+=Z,n[Pe]);for(var le=0;le<ie;le++)u.set(++ge,n[Pe])})}};for(var Me in t)ue(Me)}}function h(ue){return f(),u.get(ue.codePointAt(0))||n.L}function d(ue){return i[h(ue)]}var _={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function p(ue,Me){var Pe=36,ge=0,O=new Map,T=Me&&new Map,Z;return ue.split(",").forEach(function ie(le){if(le.indexOf("+")!==-1)for(var ve=+le;ve--;)ie(Z);else{Z=le;var z=le.split(">"),k=z[0],j=z[1];k=String.fromCodePoint(ge+=parseInt(k,Pe)),j=String.fromCodePoint(ge+=parseInt(j,Pe)),O.set(k,j),Me&&T.set(j,k)}}),{map:O,reverseMap:T}}var m,g,x;function b(){if(!m){var ue=p(_.pairs,!0),Me=ue.map,Pe=ue.reverseMap;m=Me,g=Pe,x=p(_.canonical,!1).map}}function v(ue){return b(),m.get(ue)||null}function y(ue){return b(),g.get(ue)||null}function M(ue){return b(),x.get(ue)||null}var L=n.L,w=n.R,A=n.EN,R=n.ES,B=n.ET,U=n.AN,C=n.CS,I=n.B,D=n.S,H=n.ON,te=n.BN,J=n.NSM,V=n.AL,W=n.LRO,S=n.RLO,P=n.LRE,Q=n.RLE,X=n.PDF,q=n.LRI,E=n.RLI,Y=n.FSI,ee=n.PDI;function ae(ue,Me){for(var Pe=125,ge=new Uint32Array(ue.length),O=0;O<ue.length;O++)ge[O]=h(ue[O]);var T=new Map;function Z(Jt,Pn){var un=ge[Jt];ge[Jt]=Pn,T.set(un,T.get(un)-1),un&a&&T.set(a,T.get(a)-1),T.set(Pn,(T.get(Pn)||0)+1),Pn&a&&T.set(a,(T.get(a)||0)+1)}for(var ie=new Uint8Array(ue.length),le=new Map,ve=[],z=null,k=0;k<ue.length;k++)z||ve.push(z={start:k,end:ue.length-1,level:Me==="rtl"?1:Me==="ltr"?0:gl(k,!1)}),ge[k]&I&&(z.end=k,z=null);for(var j=Q|P|S|W|r|ee|X|I,xe=function(Jt){return Jt+(Jt&1?1:2)},Se=function(Jt){return Jt+(Jt&1?2:1)},ye=0;ye<ve.length;ye++){z=ve[ye];var _e=[{_level:z.level,_override:0,_isolate:0}],me=void 0,Be=0,ze=0,Je=0;T.clear();for(var G=z.start;G<=z.end;G++){var re=ge[G];if(me=_e[_e.length-1],T.set(re,(T.get(re)||0)+1),re&a&&T.set(a,(T.get(a)||0)+1),re&j)if(re&(Q|P)){ie[G]=me._level;var be=(re===Q?Se:xe)(me._level);be<=Pe&&!Be&&!ze?_e.push({_level:be,_override:0,_isolate:0}):Be||ze++}else if(re&(S|W)){ie[G]=me._level;var Oe=(re===S?Se:xe)(me._level);Oe<=Pe&&!Be&&!ze?_e.push({_level:Oe,_override:re&S?w:L,_isolate:0}):Be||ze++}else if(re&r){re&Y&&(re=gl(G+1,!0)===1?E:q),ie[G]=me._level,me._override&&Z(G,me._override);var Ue=(re===E?Se:xe)(me._level);Ue<=Pe&&Be===0&&ze===0?(Je++,_e.push({_level:Ue,_override:0,_isolate:1,_isolInitIndex:G})):Be++}else if(re&ee){if(Be>0)Be--;else if(Je>0){for(ze=0;!_e[_e.length-1]._isolate;)_e.pop();var lt=_e[_e.length-1]._isolInitIndex;lt!=null&&(le.set(lt,G),le.set(G,lt)),_e.pop(),Je--}me=_e[_e.length-1],ie[G]=me._level,me._override&&Z(G,me._override)}else re&X?(Be===0&&(ze>0?ze--:!me._isolate&&_e.length>1&&(_e.pop(),me=_e[_e.length-1])),ie[G]=me._level):re&I&&(ie[G]=z.level);else ie[G]=me._level,me._override&&re!==te&&Z(G,me._override)}for(var Ke=[],qe=null,yt=z.start;yt<=z.end;yt++){var st=ge[yt];if(!(st&l)){var ut=ie[yt],vt=st&r,vn=st===ee;qe&&ut===qe._level?(qe._end=yt,qe._endsWithIsolInit=vt):Ke.push(qe={_start:yt,_end:yt,_level:ut,_startsWithPDI:vn,_endsWithIsolInit:vt})}}for(var Ft=[],Et=0;Et<Ke.length;Et++){var tn=Ke[Et];if(!tn._startsWithPDI||tn._startsWithPDI&&!le.has(tn._start)){for(var F=[qe=tn],ne=void 0;qe&&qe._endsWithIsolInit&&(ne=le.get(qe._end))!=null;)for(var se=Et+1;se<Ke.length;se++)if(Ke[se]._start===ne){F.push(qe=Ke[se]);break}for(var $=[],ce=0;ce<F.length;ce++)for(var He=F[ce],Ye=He._start;Ye<=He._end;Ye++)$.push(Ye);for(var Qe=ie[$[0]],$e=z.level,ot=$[0]-1;ot>=0;ot--)if(!(ge[ot]&l)){$e=ie[ot];break}var at=$[$.length-1],ct=ie[at],St=z.level;if(!(ge[at]&r)){for(var Vt=at+1;Vt<=z.end;Vt++)if(!(ge[Vt]&l)){St=ie[Vt];break}}Ft.push({_seqIndices:$,_sosType:Math.max($e,Qe)%2?w:L,_eosType:Math.max(St,ct)%2?w:L})}}for(var _n=0;_n<Ft.length;_n++){var Dn=Ft[_n],Re=Dn._seqIndices,et=Dn._sosType,Rr=Dn._eosType;if(T.get(J))for(var Mt=0;Mt<Re.length;Mt++){var Nn=Re[Mt];if(ge[Nn]&J){for(var Wi=et,Gn=Mt-1;Gn>=0;Gn--)if(!(ge[Re[Gn]]&l)){Wi=ge[Re[Gn]];break}Z(Nn,Wi&(r|ee)?H:Wi)}}if(T.get(A))for(var li=0;li<Re.length;li++){var Wt=Re[li];if(ge[Wt]&A)for(var Tn=li-1;Tn>=-1;Tn--){var Hi=Tn===-1?et:ge[Re[Tn]];if(Hi&o){Hi===V&&Z(Wt,U);break}}}if(T.get(V))for(var jt=0;jt<Re.length;jt++){var ji=Re[jt];ge[ji]&V&&Z(ji,w)}if(T.get(R)||T.get(C))for(var yi=1;yi<Re.length-1;yi++){var Xi=Re[yi];if(ge[Xi]&(R|C)){for(var qi=0,Sa=0,Ma=yi-1;Ma>=0&&(qi=ge[Re[Ma]],!!(qi&l));Ma--);for(var Ta=yi+1;Ta<Re.length&&(Sa=ge[Re[Ta]],!!(Sa&l));Ta++);qi===Sa&&(ge[Xi]===R?qi===A:qi&(A|U))&&Z(Xi,qi)}}if(T.get(A))for(var Ir=0;Ir<Re.length;Ir++){var wf=Re[Ir];if(ge[wf]&A){for(var ws=Ir-1;ws>=0&&ge[Re[ws]]&(B|l);ws--)Z(Re[ws],A);for(var ys=Ir+1;ys<Re.length&&ge[Re[ys]]&(B|l);ys++)Z(Re[ys],A)}}if(T.get(B)||T.get(R)||T.get(C))for(var Ur=0;Ur<Re.length;Ur++){var sl=Re[Ur];if(ge[sl]&(B|R|C)){Z(sl,H);for(var Ss=Ur-1;Ss>=0&&ge[Re[Ss]]&l;Ss--)Z(Re[Ss],H);for(var Ms=Ur+1;Ms<Re.length&&ge[Re[Ms]]&l;Ms++)Z(Re[Ms],H)}}if(T.get(A))for(var Aa=0,al=et;Aa<Re.length;Aa++){var ol=Re[Aa],Ea=ge[ol];Ea&A?al===L&&Z(ol,L):Ea&o&&(al=Ea)}if(T.get(a)){var Or=w|A|U,ll=Or|L,Ts=[];{for(var Yi=[],Zi=0;Zi<Re.length;Zi++)if(ge[Re[Zi]]&a){var Fr=ue[Re[Zi]],cl=void 0;if(v(Fr)!==null)if(Yi.length<63)Yi.push({char:Fr,seqIndex:Zi});else break;else if((cl=y(Fr))!==null)for(var kr=Yi.length-1;kr>=0;kr--){var Ca=Yi[kr].char;if(Ca===cl||Ca===y(M(Fr))||v(M(Ca))===Fr){Ts.push([Yi[kr].seqIndex,Zi]),Yi.length=kr;break}}}Ts.sort(function(Jt,Pn){return Jt[0]-Pn[0]})}for(var Da=0;Da<Ts.length;Da++){for(var ul=Ts[Da],zr=ul[0],As=ul[1],fl=!1,Ln=0,La=zr+1;La<As;La++){var Pa=Re[La];if(ge[Pa]&ll){fl=!0;var hl=ge[Pa]&Or?w:L;if(hl===Ki(Pa)){Ln=hl;break}}}if(fl&&!Ln){Ln=et;for(var Ra=zr-1;Ra>=0;Ra--){var Es=Re[Ra];if(ge[Es]&ll){var dl=ge[Es]&Or?w:L;dl!==Ki(Es)?Ln=dl:Ln=Ki(Es);break}}}if(Ln){if(ge[Re[zr]]=ge[Re[As]]=Ln,Ln!==Ki(Re[zr])){for(var Br=zr+1;Br<Re.length;Br++)if(!(ge[Re[Br]]&l)){h(ue[Re[Br]])&J&&(ge[Re[Br]]=Ln);break}}if(Ln!==Ki(Re[As])){for(var Nr=As+1;Nr<Re.length;Nr++)if(!(ge[Re[Nr]]&l)){h(ue[Re[Nr]])&J&&(ge[Re[Nr]]=Ln);break}}}}for(var ci=0;ci<Re.length;ci++)if(ge[Re[ci]]&a){for(var ml=ci,Ia=ci,Ua=et,Gr=ci-1;Gr>=0;Gr--)if(ge[Re[Gr]]&l)ml=Gr;else{Ua=ge[Re[Gr]]&Or?w:L;break}for(var pl=Rr,Vr=ci+1;Vr<Re.length;Vr++)if(ge[Re[Vr]]&(a|l))Ia=Vr;else{pl=ge[Re[Vr]]&Or?w:L;break}for(var Cs=ml;Cs<=Ia;Cs++)ge[Re[Cs]]=Ua===pl?Ua:Ki(Re[Cs]);ci=Ia}}}for(var bn=z.start;bn<=z.end;bn++){var yf=ie[bn],Ds=ge[bn];if(yf&1?Ds&(L|A|U)&&ie[bn]++:Ds&w?ie[bn]++:Ds&(U|A)&&(ie[bn]+=2),Ds&l&&(ie[bn]=bn===0?z.level:ie[bn-1]),bn===z.end||h(ue[bn])&(D|I))for(var Ls=bn;Ls>=0&&h(ue[Ls])&c;Ls--)ie[Ls]=z.level}}return{levels:ie,paragraphs:ve};function gl(Jt,Pn){for(var un=Jt;un<ue.length;un++){var ui=ge[un];if(ui&(w|V))return 1;if(ui&(I|L)||Pn&&ui===ee)return 0;if(ui&r){var vl=Sf(un);un=vl===-1?ue.length:vl}}return 0}function Sf(Jt){for(var Pn=1,un=Jt+1;un<ue.length;un++){var ui=ge[un];if(ui&I)break;if(ui&ee){if(--Pn===0)return un}else ui&r&&Pn++}return-1}function Ki(Jt){return ie[Jt]&1?w:L}}var oe="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",pe;function N(){if(!pe){var ue=p(oe,!0),Me=ue.map,Pe=ue.reverseMap;Pe.forEach(function(ge,O){Me.set(O,ge)}),pe=Me}}function he(ue){return N(),pe.get(ue)||null}function Fe(ue,Me,Pe,ge){var O=ue.length;Pe=Math.max(0,Pe==null?0:+Pe),ge=Math.min(O-1,ge==null?O-1:+ge);for(var T=new Map,Z=Pe;Z<=ge;Z++)if(Me[Z]&1){var ie=he(ue[Z]);ie!==null&&T.set(Z,ie)}return T}function Te(ue,Me,Pe,ge){var O=ue.length;Pe=Math.max(0,Pe==null?0:+Pe),ge=Math.min(O-1,ge==null?O-1:+ge);var T=[];return Me.paragraphs.forEach(function(Z){var ie=Math.max(Pe,Z.start),le=Math.min(ge,Z.end);if(ie<le){for(var ve=Me.levels.slice(ie,le+1),z=le;z>=ie&&h(ue[z])&c;z--)ve[z]=Z.level;for(var k=Z.level,j=1/0,xe=0;xe<ve.length;xe++){var Se=ve[xe];Se>k&&(k=Se),Se<j&&(j=Se|1)}for(var ye=k;ye>=j;ye--)for(var _e=0;_e<ve.length;_e++)if(ve[_e]>=ye){for(var me=_e;_e+1<ve.length&&ve[_e+1]>=ye;)_e++;_e>me&&T.push([me+Pe,_e+Pe])}}}),T}function Ie(ue,Me,Pe,ge){var O=Ne(ue,Me,Pe,ge),T=[].concat(ue);return O.forEach(function(Z,ie){T[ie]=(Me.levels[Z]&1?he(ue[Z]):null)||ue[Z]}),T.join("")}function Ne(ue,Me,Pe,ge){for(var O=Te(ue,Me,Pe,ge),T=[],Z=0;Z<ue.length;Z++)T[Z]=Z;return O.forEach(function(ie){for(var le=ie[0],ve=ie[1],z=T.slice(le,ve+1),k=z.length;k--;)T[ve-k]=z[k]}),T}return e.closingToOpeningBracket=y,e.getBidiCharType=h,e.getBidiCharTypeName=d,e.getCanonicalBracket=M,e.getEmbeddingLevels=ae,e.getMirroredCharacter=he,e.getMirroredCharactersMap=Fe,e.getReorderSegments=Te,e.getReorderedIndices=Ne,e.getReorderedString=Ie,e.openingToClosingBracket=v,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}const _f=/\bvoid\s+main\s*\(\s*\)\s*{/g;function zo(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,i){let r=tt[i];return r?zo(r):n}return s.replace(e,t)}const Yt=[];for(let s=0;s<256;s++)Yt[s]=(s<16?"0":"")+s.toString(16);function rb(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[s&255]+Yt[s>>8&255]+Yt[s>>16&255]+Yt[s>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toUpperCase()}const Ai=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let i in n)n.hasOwnProperty(i)&&(s[i]=n[i])}return s},sb=Date.now(),mu=new WeakMap,pu=new Map;let ab=1e10;function Bo(s,e){const t=ub(e);let n=mu.get(s);if(n||mu.set(s,n=Object.create(null)),n[t])return new n[t];const i=`_onBeforeCompile${t}`,r=function(c){s.onBeforeCompile.call(this,c);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=pu[u];if(!f){const h=ob(c,e,t);f=pu[u]=h}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,Ai(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-sb}}),this[i]&&this[i](c)},o=function(){return a(e.chained?s:s.clone())},a=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:ab++}),u.uuid=rb(),u.uniforms=Ai({},c.uniforms,e.uniforms),u.defines=Ai({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=Ai({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:o},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(Ai(this.extensions,c.extensions),Ai(this.defines,c.defines),Ai(this.uniforms,_s.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return a(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Bo(s.isDerivedMaterial?s.getDepthMaterial():new $u({depthPacking:ku}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Bo(s.isDerivedMaterial?s.getDistanceMaterial():new ef,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return n[t]=o,new o}function ob({vertexShader:s,fragmentShader:e},t,n){let{vertexDefs:i,vertexMainIntro:r,vertexMainOutro:o,vertexTransform:a,fragmentDefs:l,fragmentMainIntro:c,fragmentMainOutro:u,fragmentColorTransform:f,customRewriter:h,timeUniform:d}=t;if(i=i||"",r=r||"",o=o||"",l=l||"",c=c||"",u=u||"",(a||h)&&(s=zo(s)),(f||h)&&(e=e.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),e=zo(e)),h){let _=h({vertexShader:s,fragmentShader:e});s=_.vertexShader,e=_.fragmentShader}if(f){let _=[];e=e.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(_.push(p),"")),u=`${f}
${_.join(`
`)}
${u}`}if(d){const _=`
uniform float ${d};
`;i=_+i,l=_+l}return a&&(s=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${s}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${a}
}
`,r=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${r}
`,s=s.replace(/\b(position|normal|uv)\b/g,(_,p,m,g)=>/\battribute\s+vec[23]\s+$/.test(g.substr(0,m))?p:`troika_${p}_${n}`)),s=gu(s,n,i,r,o),e=gu(e,n,l,c,u),{vertexShader:s,fragmentShader:e}}function gu(s,e,t,n,i){return(n||i||t)&&(s=s.replace(_f,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`),s}function lb(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let cb=0;const vu=new Map;function ub(s){const e=JSON.stringify(s,lb);let t=vu.get(e);return t==null&&vu.set(e,t=++cb),t}function fb(s,e,t){const{defaultFontURL:n}=t,i=Object.create(null),r=1/0,o=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,a=/[\s\-\u007C\u00AD\u2010\u2012-\u2014\u2027\u2056\u2E17\u2E40]/;function l(g,x){function b(){const v=y=>{console.error(`Failure loading font ${g}${g===n?"":"; trying fallback"}`,y),g!==n&&(g=n,b())};try{const y=new XMLHttpRequest;y.open("get",g,!0),y.responseType="arraybuffer",y.onload=function(){if(y.status>=400)v(new Error(y.statusText));else if(y.status>0)try{const M=s(y.response);x(M)}catch(M){v(M)}},y.onerror=v,y.send()}catch(y){v(y)}}b()}function c(g,x){g||(g=n);let b=i[g];b?b.pending?b.pending.push(x):x(b):(i[g]={pending:[x]},l(g,v=>{let y=i[g].pending;i[g]=v,y.forEach(M=>M(v))}))}function u({text:g="",font:x=n,sdfGlyphSize:b=64,fontSize:v=1,letterSpacing:y=0,lineHeight:M="normal",maxWidth:L=r,direction:w,textAlign:A="left",textIndent:R=0,whiteSpace:B="normal",overflowWrap:U="normal",anchorX:C=0,anchorY:I=0,includeCaretPositions:D=!1,chunkedBoundsSize:H=8192,colorRanges:te=null},J,V=!1){const W=_(),S={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),v=+v,y=+y,L=+L,M=M||"normal",R=+R,c(x,P=>{const Q=isFinite(L);let X=null,q=null,E=null,Y=null,ee=null,ae=null,oe=null,pe=0,N=0,he=B!=="nowrap";const{ascender:Fe,descender:Te,unitsPerEm:Ie}=P;S.fontLoad=_()-W;const Ne=_(),ue=v/Ie;M==="normal"&&(M=(Fe-Te)/Ie),M=M*v;const Me=(M-(Fe-Te)*ue)/2,Pe=-(Fe*ue+Me),ge=Math.min(M,(Fe-Te)*ue),O=(Fe+Te)/2*ue-ge/2;let T=R,Z=new p;const ie=[Z];P.forEachGlyph(g,v,y,(z,k,j)=>{const xe=g.charAt(j),Se=z.advanceWidth*ue,ye=Z.count;let _e;if("isEmpty"in z||(z.isWhitespace=!!xe&&/\s/.test(xe),z.canBreakAfter=!!xe&&a.test(xe),z.isEmpty=z.xMin===z.xMax||z.yMin===z.yMax||o.test(xe)),!z.isWhitespace&&!z.isEmpty&&N++,he&&Q&&!z.isWhitespace&&k+Se+T>L&&ye){if(Z.glyphAt(ye-1).glyphObj.canBreakAfter)_e=new p,T=-k;else for(let Be=ye;Be--;)if(Be===0&&U==="break-word"){_e=new p,T=-k;break}else if(Z.glyphAt(Be).glyphObj.canBreakAfter){_e=Z.splitAt(Be+1);const ze=_e.glyphAt(0).x;T-=ze;for(let Je=_e.count;Je--;)_e.glyphAt(Je).x-=ze;break}_e&&(Z.isSoftWrapped=!0,Z=_e,ie.push(Z),pe=L)}let me=Z.glyphAt(Z.count);me.glyphObj=z,me.x=k+T,me.width=Se,me.charIndex=j,xe===`
`&&(Z=new p,ie.push(Z),T=-(k+Se+y*v)+R)}),ie.forEach(z=>{for(let k=z.count;k--;){let{glyphObj:j,x:xe,width:Se}=z.glyphAt(k);if(!j.isWhitespace){z.width=xe+Se,z.width>pe&&(pe=z.width);return}}});let le=0,ve=0;if(C&&(typeof C=="number"?le=-C:typeof C=="string"&&(le=-pe*(C==="left"?0:C==="center"?.5:C==="right"?1:h(C)))),I){if(typeof I=="number")ve=-I;else if(typeof I=="string"){let z=ie.length*M;ve=I==="top"?0:I==="top-baseline"?-Pe:I==="middle"?z/2:I==="bottom"?z:I==="bottom-baseline"?z-Me+Te*ue:h(I)*z}}if(!V){const z=e.getEmbeddingLevels(g,w);X=new Uint16Array(N),q=new Float32Array(N*2),E={},ae=[r,r,-r,-r],oe=[];let k=Pe;D&&(ee=new Float32Array(g.length*3)),te&&(Y=new Uint8Array(N*3));let j=0,xe=-1,Se=-1,ye,_e;if(ie.forEach((me,Be)=>{let{count:ze,width:Je}=me;if(ze>0){let G=0;for(let Ke=ze;Ke--&&me.glyphAt(Ke).glyphObj.isWhitespace;)G++;let re=0,be=0;if(A==="center")re=(pe-Je)/2;else if(A==="right")re=pe-Je;else if(A==="justify"&&me.isSoftWrapped){let Ke=0;for(let qe=ze-G;qe--;)me.glyphAt(qe).glyphObj.isWhitespace&&Ke++;be=(pe-Je)/Ke}if(be||re){let Ke=0;for(let qe=0;qe<ze;qe++){let yt=me.glyphAt(qe);const st=yt.glyphObj;yt.x+=re+Ke,be!==0&&st.isWhitespace&&qe<ze-G&&(Ke+=be,yt.width+=be)}}const Oe=e.getReorderSegments(g,z,me.glyphAt(0).charIndex,me.glyphAt(me.count-1).charIndex);for(let Ke=0;Ke<Oe.length;Ke++){const[qe,yt]=Oe[Ke];let st=1/0,ut=-1/0;for(let vt=0;vt<ze;vt++)if(me.glyphAt(vt).charIndex>=qe){let vn=vt,Ft=vt;for(;Ft<ze;Ft++){let Et=me.glyphAt(Ft);if(Et.charIndex>yt)break;Ft<ze-G&&(st=Math.min(st,Et.x),ut=Math.max(ut,Et.x+Et.width))}for(let Et=vn;Et<Ft;Et++){const tn=me.glyphAt(Et);tn.x=ut-(tn.x+tn.width-st)}break}}let Ue;const lt=Ke=>Ue=Ke;for(let Ke=0;Ke<ze;Ke++){let qe=me.glyphAt(Ke);Ue=qe.glyphObj;const yt=Ue.index,st=z.levels[qe.charIndex]&1;if(st){const ut=e.getMirroredCharacter(g[qe.charIndex]);ut&&P.forEachGlyph(ut,0,0,lt)}if(D){const{charIndex:ut}=qe,vt=qe.x+le,vn=qe.x+qe.width+le;ee[ut*3]=st?vn:vt,ee[ut*3+1]=st?vt:vn,ee[ut*3+2]=k+O+ve;const Ft=ut-xe;Ft>1&&d(ee,xe,Ft),xe=ut}if(te){const{charIndex:ut}=qe;for(;ut>Se;)Se++,te.hasOwnProperty(Se)&&(_e=te[Se])}if(!Ue.isWhitespace&&!Ue.isEmpty){const ut=j++;E[yt]||(E[yt]={path:Ue.path,pathBounds:[Ue.xMin,Ue.yMin,Ue.xMax,Ue.yMax]});const vt=qe.x+le,vn=k+ve;q[ut*2]=vt,q[ut*2+1]=vn;const Ft=vt+Ue.xMin*ue,Et=vn+Ue.yMin*ue,tn=vt+Ue.xMax*ue,F=vn+Ue.yMax*ue;Ft<ae[0]&&(ae[0]=Ft),Et<ae[1]&&(ae[1]=Et),tn>ae[2]&&(ae[2]=tn),F>ae[3]&&(ae[3]=F),ut%H===0&&(ye={start:ut,end:ut,rect:[r,r,-r,-r]},oe.push(ye)),ye.end++;const ne=ye.rect;if(Ft<ne[0]&&(ne[0]=Ft),Et<ne[1]&&(ne[1]=Et),tn>ne[2]&&(ne[2]=tn),F>ne[3]&&(ne[3]=F),X[ut]=yt,te){const se=ut*3;Y[se]=_e>>16&255,Y[se+1]=_e>>8&255,Y[se+2]=_e&255}}}}k-=M}),ee){const me=g.length-xe;me>1&&d(ee,xe,me)}}S.typesetting=_()-Ne,J({glyphIds:X,glyphPositions:q,glyphData:E,caretPositions:ee,caretHeight:ge,glyphColors:Y,chunkedBounds:oe,fontSize:v,unitsPerEm:Ie,ascender:Fe*ue,descender:Te*ue,lineHeight:M,topBaseline:Pe,blockBounds:[le,ve-ie.length*M,le+pe,ve],visibleBounds:ae,timings:S})})}function f(g,x){u(g,b=>{const[v,y,M,L]=b.blockBounds;x({width:M-v,height:L-y})},{metricsOnly:!0})}function h(g){let x=g.match(/^([\d.]+)%$/),b=x?parseFloat(x[1]):NaN;return isNaN(b)?0:b/100}function d(g,x,b){const v=g[x*3],y=g[x*3+1],M=g[x*3+2],L=(y-v)/b;for(let w=0;w<b;w++){const A=(x+w)*3;g[A]=v+L*w,g[A+1]=v+L*(w+1),g[A+2]=M}}function _(){return(self.performance||Date).now()}function p(){this.data=[]}const m=["glyphObj","x","width","charIndex"];return p.prototype={width:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/m.length)},glyphAt(g){let x=p.flyweight;return x.data=this.data,x.index=g,x},splitAt(g){let x=new p;return x.data=this.data.splice(g*m.length),x}},p.flyweight=m.reduce((g,x,b,v)=>(Object.defineProperty(g,x,{get(){return this.data[this.index*m.length+b]},set(y){this.data[this.index*m.length+b]=y}}),g),{data:null,index:0}),{typeset:u,measure:f,loadFont:c}}const Ii=()=>(self.performance||Date).now(),ya=vf();let _u;function hb(s,e,t,n,i,r,o,a,l,c,u=!0){return u?db(s,e,t,n,i,r,o,a,l,c).then(null,f=>(_u||(console.warn("WebGL SDF generation failed, falling back to JS",f),_u=!0),bu(s,e,t,n,i,r,o,a,l,c))):bu(s,e,t,n,i,r,o,a,l,c)}const db=function(){const s=[];let t=0;function n(){const i=Ii();for(;s.length&&Ii()-i<5;)s.shift()();t=s.length?setTimeout(n,0):0}return(...i)=>{const r=ai();return s.push(()=>{const o=Ii();try{ya.webgl.generateIntoCanvas(...i),r.resolve({timing:Ii()-o})}catch(a){r.reject(a)}}),t||(t=setTimeout(n,0)),r}}(),bu=function(){const t={};let n=0;return function(i,r,o,a,l,c,u,f,h,d){const _="TroikaTextSDFGenerator_JS_"+n++%4;let p=t[_];return p||(p=t[_]={workerModule:Pr({name:_,workerId:_,dependencies:[vf,Ii],init(m,g){const x=m().javascript.generate;return function(...b){const v=g();return{textureData:x(...b),timing:g()-v}}},getTransferables(m){return[m.textureData.buffer]}}),requests:0,idleTimer:null}),p.requests++,clearTimeout(p.idleTimer),p.workerModule(i,r,o,a,l,c).then(({textureData:m,timing:g})=>{const x=Ii(),b=new Uint8Array(m.length*4);for(let v=0;v<m.length;v++)b[v*4+d]=m[v];return ya.webglUtils.renderImageData(u,b,f,h,i,r,1<<3-d),g+=Ii()-x,--p.requests===0&&(p.idleTimer=setTimeout(()=>{eb(_)},2e3)),{timing:g}})}}();function mb(s){s._warm||(ya.webgl.isSupported(s),s._warm=!0)}const pb=ya.webglUtils.resizeWebGLCanvasWithoutClearing;/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function gb(){return typeof window>"u"&&(self.window=self),function(s){var e={parse:function(i){var r=e._bin,o=new Uint8Array(i);if(r.readASCII(o,0,4)=="ttcf"){var a=4;r.readUshort(o,a),a+=2,r.readUshort(o,a),a+=2;var l=r.readUint(o,a);a+=4;for(var c=[],u=0;u<l;u++){var f=r.readUint(o,a);a+=4,c.push(e._readFont(o,f))}return c}return[e._readFont(o,0)]},_readFont:function(i,r){var o=e._bin,a=r;o.readFixed(i,r),r+=4;var l=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GPOS","GSUB","SVG "],u={_data:i,_offset:a},f={},h=0;h<l;h++){var d=o.readASCII(i,r,4);r+=4,o.readUint(i,r),r+=4;var _=o.readUint(i,r);r+=4;var p=o.readUint(i,r);r+=4,f[d]={offset:_,length:p}}for(h=0;h<c.length;h++){var m=c[h];f[m]&&(u[m.trim()]=e[m.trim()].parse(i,f[m].offset,f[m].length,u))}return u},_tabOffset:function(i,r,o){for(var a=e._bin,l=a.readUshort(i,o+4),c=o+12,u=0;u<l;u++){var f=a.readASCII(i,c,4);c+=4,a.readUint(i,c),c+=4;var h=a.readUint(i,c);if(c+=4,a.readUint(i,c),c+=4,f==r)return h}return 0}};e._bin={readFixed:function(i,r){return(i[r]<<8|i[r+1])+(i[r+2]<<8|i[r+3])/65540},readF2dot14:function(i,r){return e._bin.readShort(i,r)/16384},readInt:function(i,r){return e._bin._view(i).getInt32(r)},readInt8:function(i,r){return e._bin._view(i).getInt8(r)},readShort:function(i,r){return e._bin._view(i).getInt16(r)},readUshort:function(i,r){return e._bin._view(i).getUint16(r)},readUshorts:function(i,r,o){for(var a=[],l=0;l<o;l++)a.push(e._bin.readUshort(i,r+2*l));return a},readUint:function(i,r){return e._bin._view(i).getUint32(r)},readUint64:function(i,r){return 4294967296*e._bin.readUint(i,r)+e._bin.readUint(i,r+4)},readASCII:function(i,r,o){for(var a="",l=0;l<o;l++)a+=String.fromCharCode(i[r+l]);return a},readUnicode:function(i,r,o){for(var a="",l=0;l<o;l++){var c=i[r++]<<8|i[r++];a+=String.fromCharCode(c)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,r,o){var a=e._bin._tdec;return a&&r==0&&o==i.length?a.decode(i):e._bin.readASCII(i,r,o)},readBytes:function(i,r,o){for(var a=[],l=0;l<o;l++)a.push(i[r+l]);return a},readASCIIArray:function(i,r,o){for(var a=[],l=0;l<o;l++)a.push(String.fromCharCode(i[r+l]));return a},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,r,o,a,l){var c=e._bin,u={},f=r;c.readFixed(i,r),r+=4;var h=c.readUshort(i,r);r+=2;var d=c.readUshort(i,r);r+=2;var _=c.readUshort(i,r);return r+=2,u.scriptList=e._lctf.readScriptList(i,f+h),u.featureList=e._lctf.readFeatureList(i,f+d),u.lookupList=e._lctf.readLookupList(i,f+_,l),u},e._lctf.readLookupList=function(i,r,o){var a=e._bin,l=r,c=[],u=a.readUshort(i,r);r+=2;for(var f=0;f<u;f++){var h=a.readUshort(i,r);r+=2;var d=e._lctf.readLookupTable(i,l+h,o);c.push(d)}return c},e._lctf.readLookupTable=function(i,r,o){var a=e._bin,l=r,c={tabs:[]};c.ltype=a.readUshort(i,r),r+=2,c.flag=a.readUshort(i,r),r+=2;var u=a.readUshort(i,r);r+=2;for(var f=c.ltype,h=0;h<u;h++){var d=a.readUshort(i,r);r+=2;var _=o(i,f,l+d,c);c.tabs.push(_)}return c},e._lctf.numOfOnes=function(i){for(var r=0,o=0;o<32;o++)i>>>o&1&&r++;return r},e._lctf.readClassDef=function(i,r){var o=e._bin,a=[],l=o.readUshort(i,r);if(r+=2,l==1){var c=o.readUshort(i,r);r+=2;var u=o.readUshort(i,r);r+=2;for(var f=0;f<u;f++)a.push(c+f),a.push(c+f),a.push(o.readUshort(i,r)),r+=2}if(l==2){var h=o.readUshort(i,r);for(r+=2,f=0;f<h;f++)a.push(o.readUshort(i,r)),r+=2,a.push(o.readUshort(i,r)),r+=2,a.push(o.readUshort(i,r)),r+=2}return a},e._lctf.getInterval=function(i,r){for(var o=0;o<i.length;o+=3){var a=i[o],l=i[o+1];if(i[o+2],a<=r&&r<=l)return o}return-1},e._lctf.readCoverage=function(i,r){var o=e._bin,a={};a.fmt=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);return r+=2,a.fmt==1&&(a.tab=o.readUshorts(i,r,l)),a.fmt==2&&(a.tab=o.readUshorts(i,r,3*l)),a},e._lctf.coverageIndex=function(i,r){var o=i.tab;if(i.fmt==1)return o.indexOf(r);if(i.fmt==2){var a=e._lctf.getInterval(o,r);if(a!=-1)return o[a+2]+(r-o[a])}return-1},e._lctf.readFeatureList=function(i,r){var o=e._bin,a=r,l=[],c=o.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=o.readASCII(i,r,4);r+=4;var h=o.readUshort(i,r);r+=2;var d=e._lctf.readFeatureTable(i,a+h);d.tag=f.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(i,r){var o=e._bin,a=r,l={},c=o.readUshort(i,r);r+=2,c>0&&(l.featureParams=a+c);var u=o.readUshort(i,r);r+=2,l.tab=[];for(var f=0;f<u;f++)l.tab.push(o.readUshort(i,r+2*f));return l},e._lctf.readScriptList=function(i,r){var o=e._bin,a=r,l={},c=o.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=o.readASCII(i,r,4);r+=4;var h=o.readUshort(i,r);r+=2,l[f.trim()]=e._lctf.readScriptTable(i,a+h)}return l},e._lctf.readScriptTable=function(i,r){var o=e._bin,a=r,l={},c=o.readUshort(i,r);r+=2,l.default=e._lctf.readLangSysTable(i,a+c);var u=o.readUshort(i,r);r+=2;for(var f=0;f<u;f++){var h=o.readASCII(i,r,4);r+=4;var d=o.readUshort(i,r);r+=2,l[h.trim()]=e._lctf.readLangSysTable(i,a+d)}return l},e._lctf.readLangSysTable=function(i,r){var o=e._bin,a={};o.readUshort(i,r),r+=2,a.reqFeature=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);return r+=2,a.features=o.readUshorts(i,r,l),a},e.CFF={},e.CFF.parse=function(i,r,o){var a=e._bin;(i=new Uint8Array(i.buffer,r,o))[r=0],i[++r],i[++r],i[++r],r++;var l=[];r=e.CFF.readIndex(i,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(a.readASCII(i,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var f=[];r=e.CFF.readIndex(i,r,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(i,r+f[u],r+f[u+1]));r+=f[f.length-1];var d=h[0],_=[];r=e.CFF.readIndex(i,r,_);var p=[];for(u=0;u<_.length-1;u++)p.push(a.readASCII(i,r+_[u],_[u+1]-_[u]));if(r+=_[_.length-1],e.CFF.readSubrs(i,r,d),d.CharStrings){r=d.CharStrings,_=[],r=e.CFF.readIndex(i,r,_);var m=[];for(u=0;u<_.length-1;u++)m.push(a.readBytes(i,r+_[u],_[u+1]-_[u]));d.CharStrings=m}if(d.ROS){r=d.FDArray;var g=[];for(r=e.CFF.readIndex(i,r,g),d.FDArray=[],u=0;u<g.length-1;u++){var x=e.CFF.readDict(i,r+g[u],r+g[u+1]);e.CFF._readFDict(i,x,p),d.FDArray.push(x)}r+=g[g.length-1],r=d.FDSelect,d.FDSelect=[];var b=i[r];if(r++,b!=3)throw b;var v=a.readUshort(i,r);for(r+=2,u=0;u<v+1;u++)d.FDSelect.push(a.readUshort(i,r),i[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(i,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(i,d.charset,d.CharStrings.length)),e.CFF._readFDict(i,d,p),d},e.CFF._readFDict=function(i,r,o){var a;for(var l in r.Private&&(a=r.Private[1],r.Private=e.CFF.readDict(i,a,a+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(i,a+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=o[r[l]-426+35])},e.CFF.readSubrs=function(i,r,o){var a=e._bin,l=[];r=e.CFF.readIndex(i,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var f=0;f<l.length-1;f++)o.Subrs.push(a.readBytes(i,r+l[f],l[f+1]-l[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,r){for(var o=0;o<i.charset.length;o++)if(i.charset[o]==r)return o;return-1},e.CFF.glyphBySE=function(i,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[r])},e.CFF.readEncoding=function(i,r,o){e._bin;var a=[".notdef"],l=i[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=i[r];r++;for(var u=0;u<c;u++)a.push(i[r+u]);return a},e.CFF.readCharset=function(i,r,o){var a=e._bin,l=[".notdef"],c=i[r];if(r++,c==0)for(var u=0;u<o;u++){var f=a.readUshort(i,r);r+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<o;){f=a.readUshort(i,r),r+=2;var h=0;for(c==1?(h=i[r],r++):(h=a.readUshort(i,r),r+=2),u=0;u<=h;u++)l.push(f),f++}}return l},e.CFF.readIndex=function(i,r,o){var a=e._bin,l=a.readUshort(i,r)+1,c=i[r+=2];if(r++,c==1)for(var u=0;u<l;u++)o.push(i[r+u]);else if(c==2)for(u=0;u<l;u++)o.push(a.readUshort(i,r+2*u));else if(c==3)for(u=0;u<l;u++)o.push(16777215&a.readUint(i,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(i,r,o){var a=e._bin,l=i[r],c=i[r+1];i[r+2],i[r+3],i[r+4];var u=1,f=null,h=null;l<=20&&(f=l,u=1),l==12&&(f=100*l+c,u=2),21<=l&&l<=27&&(f=l,u=1),l==28&&(h=a.readShort(i,r+1),u=3),29<=l&&l<=31&&(f=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=a.readInt(i,r+1)/65535,u=5),o.val=h??"o"+f,o.size=u},e.CFF.readCharString=function(i,r,o){for(var a=r+o,l=e._bin,c=[];r<a;){var u=i[r],f=i[r+1];i[r+2],i[r+3],i[r+4];var h=1,d=null,_=null;u<=20&&(d=u,h=1),u==12&&(d=100*u+f,h=2),u!=19&&u!=20||(d=u,h=2),21<=u&&u<=27&&(d=u,h=1),u==28&&(_=l.readShort(i,r+1),h=3),29<=u&&u<=31&&(d=u,h=1),32<=u&&u<=246&&(_=u-139,h=1),247<=u&&u<=250&&(_=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(_=256*-(u-251)-f-108,h=2),u==255&&(_=l.readInt(i,r+1)/65535,h=5),c.push(_??"o"+d),r+=h}return c},e.CFF.readDict=function(i,r,o){for(var a=e._bin,l={},c=[];r<o;){var u=i[r],f=i[r+1];i[r+2],i[r+3],i[r+4];var h=1,d=null,_=null;if(u==28&&(_=a.readShort(i,r+1),h=3),u==29&&(_=a.readInt(i,r+1),h=5),32<=u&&u<=246&&(_=u-139,h=1),247<=u&&u<=250&&(_=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(_=256*-(u-251)-f-108,h=2),u==255)throw _=a.readInt(i,r+1)/65535,h=5,"unknown number";if(u==30){var p=[];for(h=1;;){var m=i[r+h];h++;var g=m>>4,x=15&m;if(g!=15&&p.push(g),x!=15&&p.push(x),x==15)break}for(var b="",v=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],y=0;y<p.length;y++)b+=v[p[y]];_=parseFloat(b)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(_),r+=h}return l},e.cmap={},e.cmap.parse=function(i,r,o){i=new Uint8Array(i.buffer,r,o),r=0;var a=e._bin,l={};a.readUshort(i,r),r+=2;var c=a.readUshort(i,r);r+=2;var u=[];l.tables=[];for(var f=0;f<c;f++){var h=a.readUshort(i,r);r+=2;var d=a.readUshort(i,r);r+=2;var _=a.readUint(i,r);r+=4;var p="p"+h+"e"+d,m=u.indexOf(_);if(m==-1){var g;m=l.tables.length,u.push(_);var x=a.readUshort(i,_);x==0?g=e.cmap.parse0(i,_):x==4?g=e.cmap.parse4(i,_):x==6?g=e.cmap.parse6(i,_):x==12?g=e.cmap.parse12(i,_):console.debug("unknown format: "+x,h,d,_),l.tables.push(g)}if(l[p]!=null)throw"multiple tables for one platform+encoding";l[p]=m}return l},e.cmap.parse0=function(i,r){var o=e._bin,a={};a.format=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2,a.map=[];for(var c=0;c<l-6;c++)a.map.push(i[r+c]);return a},e.cmap.parse4=function(i,r){var o=e._bin,a=r,l={};l.format=o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2;var u=o.readUshort(i,r);r+=2;var f=u/2;l.searchRange=o.readUshort(i,r),r+=2,l.entrySelector=o.readUshort(i,r),r+=2,l.rangeShift=o.readUshort(i,r),r+=2,l.endCount=o.readUshorts(i,r,f),r+=2*f,r+=2,l.startCount=o.readUshorts(i,r,f),r+=2*f,l.idDelta=[];for(var h=0;h<f;h++)l.idDelta.push(o.readShort(i,r)),r+=2;for(l.idRangeOffset=o.readUshorts(i,r,f),r+=2*f,l.glyphIdArray=[];r<a+c;)l.glyphIdArray.push(o.readUshort(i,r)),r+=2;return l},e.cmap.parse6=function(i,r){var o=e._bin,a={};a.format=o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,a.firstCode=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);r+=2,a.glyphIdArray=[];for(var c=0;c<l;c++)a.glyphIdArray.push(o.readUshort(i,r)),r+=2;return a},e.cmap.parse12=function(i,r){var o=e._bin,a={};a.format=o.readUshort(i,r),r+=2,r+=2,o.readUint(i,r),r+=4,o.readUint(i,r),r+=4;var l=o.readUint(i,r);r+=4,a.groups=[];for(var c=0;c<l;c++){var u=r+12*c,f=o.readUint(i,u+0),h=o.readUint(i,u+4),d=o.readUint(i,u+8);a.groups.push([f,h,d])}return a},e.glyf={},e.glyf.parse=function(i,r,o,a){for(var l=[],c=0;c<a.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(i,r){var o=e._bin,a=i._data,l=e._tabOffset(a,"glyf",i._offset)+i.loca[r];if(i.loca[r]==i.loca[r+1])return null;var c={};if(c.noc=o.readShort(a,l),l+=2,c.xMin=o.readShort(a,l),l+=2,c.yMin=o.readShort(a,l),l+=2,c.xMax=o.readShort(a,l),l+=2,c.yMax=o.readShort(a,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(o.readUshort(a,l)),l+=2;var f=o.readUshort(a,l);if(l+=2,a.length-l<f)return null;c.instructions=o.readBytes(a,l,f),l+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var d=a[l];if(l++,c.flags.push(d),(8&d)!=0){var _=a[l];l++;for(var p=0;p<_;p++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<h;u++){var m=(2&c.flags[u])!=0,g=(16&c.flags[u])!=0;m?(c.xs.push(g?a[l]:-a[l]),l++):g?c.xs.push(0):(c.xs.push(o.readShort(a,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)m=(4&c.flags[u])!=0,g=(32&c.flags[u])!=0,m?(c.ys.push(g?a[l]:-a[l]),l++):g?c.ys.push(0):(c.ys.push(o.readShort(a,l)),l+=2);var x=0,b=0;for(u=0;u<h;u++)x+=c.xs[u],b+=c.ys[u],c.xs[u]=x,c.ys[u]=b}else{var v;c.parts=[];do{v=o.readUshort(a,l),l+=2;var y={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(y),y.glyphIndex=o.readUshort(a,l),l+=2,1&v){var M=o.readShort(a,l);l+=2;var L=o.readShort(a,l);l+=2}else M=o.readInt8(a,l),l++,L=o.readInt8(a,l),l++;2&v?(y.m.tx=M,y.m.ty=L):(y.p1=M,y.p2=L),8&v?(y.m.a=y.m.d=o.readF2dot14(a,l),l+=2):64&v?(y.m.a=o.readF2dot14(a,l),l+=2,y.m.d=o.readF2dot14(a,l),l+=2):128&v&&(y.m.a=o.readF2dot14(a,l),l+=2,y.m.b=o.readF2dot14(a,l),l+=2,y.m.c=o.readF2dot14(a,l),l+=2,y.m.d=o.readF2dot14(a,l),l+=2)}while(32&v);if(256&v){var w=o.readUshort(a,l);for(l+=2,c.instr=[],u=0;u<w;u++)c.instr.push(a[l]),l++}}return c},e.GPOS={},e.GPOS.parse=function(i,r,o,a){return e._lctf.parse(i,r,o,a,e.GPOS.subt)},e.GPOS.subt=function(i,r,o,a){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(i,o),o+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var f=l.readUshort(i,o);o+=2,u.coverage=e._lctf.readCoverage(i,f+c)}if(r==1&&u.fmt==1){var h=l.readUshort(i,o);o+=2;var d=e._lctf.numOfOnes(h);h!=0&&(u.pos=e.GPOS.readValueRecord(i,o,h))}else if(r==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(i,o),o+=2;var _=l.readUshort(i,o);o+=2,d=e._lctf.numOfOnes(h);var p=e._lctf.numOfOnes(_);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(i,o);o+=2;for(var g=0;g<m;g++){var x=c+l.readUshort(i,o);o+=2;var b=l.readUshort(i,x);x+=2;for(var v=[],y=0;y<b;y++){var M=l.readUshort(i,x);x+=2,h!=0&&(U=e.GPOS.readValueRecord(i,x,h),x+=2*d),_!=0&&(C=e.GPOS.readValueRecord(i,x,_),x+=2*p),v.push({gid2:M,val1:U,val2:C})}u.pairsets.push(v)}}if(u.fmt==2){var L=l.readUshort(i,o);o+=2;var w=l.readUshort(i,o);o+=2;var A=l.readUshort(i,o);o+=2;var R=l.readUshort(i,o);for(o+=2,u.classDef1=e._lctf.readClassDef(i,c+L),u.classDef2=e._lctf.readClassDef(i,c+w),u.matrix=[],g=0;g<A;g++){var B=[];for(y=0;y<R;y++){var U=null,C=null;h!=0&&(U=e.GPOS.readValueRecord(i,o,h),o+=2*d),_!=0&&(C=e.GPOS.readValueRecord(i,o,_),o+=2*p),B.push({val1:U,val2:C})}u.matrix.push(B)}}}else{if(r==9&&u.fmt==1){var I=l.readUshort(i,o);o+=2;var D=l.readUint(i,o);if(o+=4,a.ltype==9)a.ltype=I;else if(a.ltype!=I)throw"invalid extension substitution";return e.GPOS.subt(i,a.ltype,c+D)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(i,r,o){var a=e._bin,l=[];return l.push(1&o?a.readShort(i,r):0),r+=1&o?2:0,l.push(2&o?a.readShort(i,r):0),r+=2&o?2:0,l.push(4&o?a.readShort(i,r):0),r+=4&o?2:0,l.push(8&o?a.readShort(i,r):0),r+=8&o?2:0,l},e.GSUB={},e.GSUB.parse=function(i,r,o,a){return e._lctf.parse(i,r,o,a,e.GSUB.subt)},e.GSUB.subt=function(i,r,o,a){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(i,o),o+=2,r!=1&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var f=l.readUshort(i,o);o+=2,u.coverage=e._lctf.readCoverage(i,c+f)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(i,o),o+=2;else if(u.fmt==2){var h=l.readUshort(i,o);o+=2,u.newg=l.readUshorts(i,o,h),o+=2*u.newg.length}}else if(r==4){u.vals=[],h=l.readUshort(i,o),o+=2;for(var d=0;d<h;d++){var _=l.readUshort(i,o);o+=2,u.vals.push(e.GSUB.readLigatureSet(i,c+_))}}else if(r==5&&u.fmt==2){if(u.fmt==2){var p=l.readUshort(i,o);o+=2,u.cDef=e._lctf.readClassDef(i,c+p),u.scset=[];var m=l.readUshort(i,o);for(o+=2,d=0;d<m;d++){var g=l.readUshort(i,o);o+=2,u.scset.push(g==0?null:e.GSUB.readSubClassSet(i,c+g))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){h=l.readUshort(i,o),o+=2;for(var x=[],b=0;b<h;b++)x.push(e._lctf.readCoverage(i,c+l.readUshort(i,o+2*b)));o+=2*h,d==0&&(u.backCvg=x),d==1&&(u.inptCvg=x),d==2&&(u.ahedCvg=x)}h=l.readUshort(i,o),o+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(i,o,h)}}else{if(r==7&&u.fmt==1){var v=l.readUshort(i,o);o+=2;var y=l.readUint(i,o);if(o+=4,a.ltype==9)a.ltype=v;else if(a.ltype!=v)throw"invalid extension substitution";return e.GSUB.subt(i,a.ltype,c+y)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(i,r){var o=e._bin.readUshort,a=r,l=[],c=o(i,r);r+=2;for(var u=0;u<c;u++){var f=o(i,r);r+=2,l.push(e.GSUB.readSubClassRule(i,a+f))}return l},e.GSUB.readSubClassRule=function(i,r){var o=e._bin.readUshort,a={},l=o(i,r),c=o(i,r+=2);r+=2,a.input=[];for(var u=0;u<l-1;u++)a.input.push(o(i,r)),r+=2;return a.substLookupRecords=e.GSUB.readSubstLookupRecords(i,r,c),a},e.GSUB.readSubstLookupRecords=function(i,r,o){for(var a=e._bin.readUshort,l=[],c=0;c<o;c++)l.push(a(i,r),a(i,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(i,r){var o=e._bin,a=r,l=[],c=o.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=o.readUshort(i,r);r+=2,l.push(e.GSUB.readChainSubClassRule(i,a+f))}return l},e.GSUB.readChainSubClassRule=function(i,r){for(var o=e._bin,a={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=o.readUshort(i,r);r+=2,c==1&&u--,a[l[c]]=o.readUshorts(i,r,u),r+=2*a[l[c]].length}return u=o.readUshort(i,r),r+=2,a.subst=o.readUshorts(i,r,2*u),r+=2*a.subst.length,a},e.GSUB.readLigatureSet=function(i,r){var o=e._bin,a=r,l=[],c=o.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=o.readUshort(i,r);r+=2,l.push(e.GSUB.readLigature(i,a+f))}return l},e.GSUB.readLigature=function(i,r){var o=e._bin,a={chain:[]};a.nglyph=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);r+=2;for(var c=0;c<l-1;c++)a.chain.push(o.readUshort(i,r)),r+=2;return a},e.head={},e.head.parse=function(i,r,o){var a=e._bin,l={};return a.readFixed(i,r),r+=4,l.fontRevision=a.readFixed(i,r),r+=4,a.readUint(i,r),r+=4,a.readUint(i,r),r+=4,l.flags=a.readUshort(i,r),r+=2,l.unitsPerEm=a.readUshort(i,r),r+=2,l.created=a.readUint64(i,r),r+=8,l.modified=a.readUint64(i,r),r+=8,l.xMin=a.readShort(i,r),r+=2,l.yMin=a.readShort(i,r),r+=2,l.xMax=a.readShort(i,r),r+=2,l.yMax=a.readShort(i,r),r+=2,l.macStyle=a.readUshort(i,r),r+=2,l.lowestRecPPEM=a.readUshort(i,r),r+=2,l.fontDirectionHint=a.readShort(i,r),r+=2,l.indexToLocFormat=a.readShort(i,r),r+=2,l.glyphDataFormat=a.readShort(i,r),r+=2,l},e.hhea={},e.hhea.parse=function(i,r,o){var a=e._bin,l={};return a.readFixed(i,r),r+=4,l.ascender=a.readShort(i,r),r+=2,l.descender=a.readShort(i,r),r+=2,l.lineGap=a.readShort(i,r),r+=2,l.advanceWidthMax=a.readUshort(i,r),r+=2,l.minLeftSideBearing=a.readShort(i,r),r+=2,l.minRightSideBearing=a.readShort(i,r),r+=2,l.xMaxExtent=a.readShort(i,r),r+=2,l.caretSlopeRise=a.readShort(i,r),r+=2,l.caretSlopeRun=a.readShort(i,r),r+=2,l.caretOffset=a.readShort(i,r),r+=2,r+=8,l.metricDataFormat=a.readShort(i,r),r+=2,l.numberOfHMetrics=a.readUshort(i,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(i,r,o,a){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<a.maxp.numGlyphs;h++)h<a.hhea.numberOfHMetrics&&(u=l.readUshort(i,r),r+=2,f=l.readShort(i,r),r+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(i,r,o,a){var l=e._bin,c=l.readUshort(i,r);if(r+=2,c==1)return e.kern.parseV1(i,r-2,o,a);var u=l.readUshort(i,r);r+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){r+=2,o=l.readUshort(i,r),r+=2;var d=l.readUshort(i,r);r+=2;var _=d>>>8;if((_&=15)!=0)throw"unknown kern table format: "+_;r=e.kern.readFormat0(i,r,f)}return f},e.kern.parseV1=function(i,r,o,a){var l=e._bin;l.readFixed(i,r),r+=4;var c=l.readUint(i,r);r+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(i,r),r+=4;var h=l.readUshort(i,r);r+=2,l.readUshort(i,r),r+=2;var d=h>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(i,r,u)}return u},e.kern.readFormat0=function(i,r,o){var a=e._bin,l=-1,c=a.readUshort(i,r);r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2;for(var u=0;u<c;u++){var f=a.readUshort(i,r);r+=2;var h=a.readUshort(i,r);r+=2;var d=a.readShort(i,r);r+=2,f!=l&&(o.glyph1.push(f),o.rval.push({glyph2:[],vals:[]}));var _=o.rval[o.rval.length-1];_.glyph2.push(h),_.vals.push(d),l=f}return r},e.loca={},e.loca.parse=function(i,r,o,a){var l=e._bin,c=[],u=a.head.indexToLocFormat,f=a.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(l.readUshort(i,r+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(l.readUint(i,r+(h<<2)));return c},e.maxp={},e.maxp.parse=function(i,r,o){var a=e._bin,l={},c=a.readUint(i,r);return r+=4,l.numGlyphs=a.readUshort(i,r),r+=2,c==65536&&(l.maxPoints=a.readUshort(i,r),r+=2,l.maxContours=a.readUshort(i,r),r+=2,l.maxCompositePoints=a.readUshort(i,r),r+=2,l.maxCompositeContours=a.readUshort(i,r),r+=2,l.maxZones=a.readUshort(i,r),r+=2,l.maxTwilightPoints=a.readUshort(i,r),r+=2,l.maxStorage=a.readUshort(i,r),r+=2,l.maxFunctionDefs=a.readUshort(i,r),r+=2,l.maxInstructionDefs=a.readUshort(i,r),r+=2,l.maxStackElements=a.readUshort(i,r),r+=2,l.maxSizeOfInstructions=a.readUshort(i,r),r+=2,l.maxComponentElements=a.readUshort(i,r),r+=2,l.maxComponentDepth=a.readUshort(i,r),r+=2),l},e.name={},e.name.parse=function(i,r,o){var a=e._bin,l={};a.readUshort(i,r),r+=2;var c=a.readUshort(i,r);r+=2,a.readUshort(i,r);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=r+=2,d=0;d<c;d++){var _=a.readUshort(i,r);r+=2;var p=a.readUshort(i,r);r+=2;var m=a.readUshort(i,r);r+=2;var g=a.readUshort(i,r);r+=2;var x=a.readUshort(i,r);r+=2;var b=a.readUshort(i,r);r+=2;var v,y=f[g],M=h+12*c+b;if(_==0)v=a.readUnicode(i,M,x/2);else if(_==3&&p==0)v=a.readUnicode(i,M,x/2);else if(p==0)v=a.readASCII(i,M,x);else if(p==1)v=a.readUnicode(i,M,x/2);else if(p==3)v=a.readUnicode(i,M,x/2);else{if(_!=1)throw"unknown encoding "+p+", platformID: "+_;v=a.readASCII(i,M,x),console.debug("reading unknown MAC encoding "+p+" as ASCII")}var L="p"+_+","+m.toString(16);l[L]==null&&(l[L]={}),l[L][y!==void 0?y:g]=v,l[L]._lang=m}for(var w in l)if(l[w].postScriptName!=null&&l[w]._lang==1033)return l[w];for(var w in l)if(l[w].postScriptName!=null&&l[w]._lang==0)return l[w];for(var w in l)if(l[w].postScriptName!=null&&l[w]._lang==3084)return l[w];for(var w in l)if(l[w].postScriptName!=null)return l[w];for(var w in l){u=w;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(i,r,o){var a=e._bin.readUshort(i,r);r+=2;var l={};if(a==0)e["OS/2"].version0(i,r,l);else if(a==1)e["OS/2"].version1(i,r,l);else if(a==2||a==3||a==4)e["OS/2"].version2(i,r,l);else{if(a!=5)throw"unknown OS/2 table version: "+a;e["OS/2"].version5(i,r,l)}return l},e["OS/2"].version0=function(i,r,o){var a=e._bin;return o.xAvgCharWidth=a.readShort(i,r),r+=2,o.usWeightClass=a.readUshort(i,r),r+=2,o.usWidthClass=a.readUshort(i,r),r+=2,o.fsType=a.readUshort(i,r),r+=2,o.ySubscriptXSize=a.readShort(i,r),r+=2,o.ySubscriptYSize=a.readShort(i,r),r+=2,o.ySubscriptXOffset=a.readShort(i,r),r+=2,o.ySubscriptYOffset=a.readShort(i,r),r+=2,o.ySuperscriptXSize=a.readShort(i,r),r+=2,o.ySuperscriptYSize=a.readShort(i,r),r+=2,o.ySuperscriptXOffset=a.readShort(i,r),r+=2,o.ySuperscriptYOffset=a.readShort(i,r),r+=2,o.yStrikeoutSize=a.readShort(i,r),r+=2,o.yStrikeoutPosition=a.readShort(i,r),r+=2,o.sFamilyClass=a.readShort(i,r),r+=2,o.panose=a.readBytes(i,r,10),r+=10,o.ulUnicodeRange1=a.readUint(i,r),r+=4,o.ulUnicodeRange2=a.readUint(i,r),r+=4,o.ulUnicodeRange3=a.readUint(i,r),r+=4,o.ulUnicodeRange4=a.readUint(i,r),r+=4,o.achVendID=[a.readInt8(i,r),a.readInt8(i,r+1),a.readInt8(i,r+2),a.readInt8(i,r+3)],r+=4,o.fsSelection=a.readUshort(i,r),r+=2,o.usFirstCharIndex=a.readUshort(i,r),r+=2,o.usLastCharIndex=a.readUshort(i,r),r+=2,o.sTypoAscender=a.readShort(i,r),r+=2,o.sTypoDescender=a.readShort(i,r),r+=2,o.sTypoLineGap=a.readShort(i,r),r+=2,o.usWinAscent=a.readUshort(i,r),r+=2,o.usWinDescent=a.readUshort(i,r),r+=2},e["OS/2"].version1=function(i,r,o){var a=e._bin;return r=e["OS/2"].version0(i,r,o),o.ulCodePageRange1=a.readUint(i,r),r+=4,o.ulCodePageRange2=a.readUint(i,r),r+=4},e["OS/2"].version2=function(i,r,o){var a=e._bin;return r=e["OS/2"].version1(i,r,o),o.sxHeight=a.readShort(i,r),r+=2,o.sCapHeight=a.readShort(i,r),r+=2,o.usDefault=a.readUshort(i,r),r+=2,o.usBreak=a.readUshort(i,r),r+=2,o.usMaxContext=a.readUshort(i,r),r+=2},e["OS/2"].version5=function(i,r,o){var a=e._bin;return r=e["OS/2"].version2(i,r,o),o.usLowerOpticalPointSize=a.readUshort(i,r),r+=2,o.usUpperOpticalPointSize=a.readUshort(i,r),r+=2},e.post={},e.post.parse=function(i,r,o){var a=e._bin,l={};return l.version=a.readFixed(i,r),r+=4,l.italicAngle=a.readFixed(i,r),r+=4,l.underlinePosition=a.readShort(i,r),r+=2,l.underlineThickness=a.readShort(i,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,r){var o=i.cmap,a=-1;if(o.p0e4!=null?a=o.p0e4:o.p3e1!=null?a=o.p3e1:o.p1e0!=null?a=o.p1e0:o.p0e3!=null&&(a=o.p0e3),a==-1)throw"no familiar platform and encoding!";var l=o.tables[a];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var f=l.groups[u];if(f[0]<=r&&r<=f[1])return f[2]+(r-f[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(i,r){var o={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[r]){var a=i.SVG.entries[r];return a==null?o:(typeof a=="string"&&(a=e.SVG.toPath(a),i.SVG.entries[r]=a),a)}if(i.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},c=i.CFF,u=i.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=r;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(i.CFF.CharStrings[r],l,c,u,o)}else i.glyf&&e.U._drawGlyf(r,i,o);return o},e.U._drawGlyf=function(i,r,o){var a=r.glyf[i];a==null&&(a=r.glyf[i]=e.glyf._parseGlyf(r,i)),a!=null&&(a.noc>-1?e.U._simpleGlyph(a,o):e.U._compoGlyph(a,r,o))},e.U._simpleGlyph=function(i,r){for(var o=0;o<i.noc;o++){for(var a=o==0?0:i.endPts[o-1]+1,l=i.endPts[o],c=a;c<=l;c++){var u=c==a?l:c-1,f=c==l?a:c+1,h=1&i.flags[c],d=1&i.flags[u],_=1&i.flags[f],p=i.xs[c],m=i.ys[c];if(c==a)if(h){if(!d){e.U.P.moveTo(r,p,m);continue}e.U.P.moveTo(r,i.xs[u],i.ys[u])}else d?e.U.P.moveTo(r,i.xs[u],i.ys[u]):e.U.P.moveTo(r,(i.xs[u]+p)/2,(i.ys[u]+m)/2);h?d&&e.U.P.lineTo(r,p,m):_?e.U.P.qcurveTo(r,p,m,i.xs[f],i.ys[f]):e.U.P.qcurveTo(r,p,m,(p+i.xs[f])/2,(m+i.ys[f])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(i,r,o){for(var a=0;a<i.parts.length;a++){var l={cmds:[],crds:[]},c=i.parts[a];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,f=0;f<l.crds.length;f+=2){var h=l.crds[f],d=l.crds[f+1];o.crds.push(h*u.a+d*u.b+u.tx),o.crds.push(h*u.c+d*u.d+u.ty)}for(f=0;f<l.cmds.length;f++)o.cmds.push(l.cmds[f])}},e.U._getGlyphClass=function(i,r){var o=e._lctf.getInterval(r,i);return o==-1?0:r[o+2]},e.U.getPairAdjustment=function(i,r,o){var a=0,l=!1;if(i.GPOS)for(var c=i.GPOS,u=c.lookupList,f=c.featureList,h=[],d=0;d<f.length;d++){var _=f[d];if(_.tag=="kern"){l=!0;for(var p=0;p<_.tab.length;p++)if(!h[_.tab[p]]){h[_.tab[p]]=!0;for(var m=u[_.tab[p]],g=0;g<m.tabs.length;g++)if(m.tabs[g]!=null){var x,b=m.tabs[g];if((!b.coverage||(x=e._lctf.coverageIndex(b.coverage,r))!=-1)&&m.ltype!=1){if(m.ltype==2){var v;if(b.fmt==1){var y=b.pairsets[x];for(d=0;d<y.length;d++)y[d].gid2==o&&(v=y[d])}else if(b.fmt==2){var M=e.U._getGlyphClass(r,b.classDef1),L=e.U._getGlyphClass(o,b.classDef2);v=b.matrix[M][L]}v&&v.val1&&v.val1[2]&&(a+=v.val1[2]),v&&v.val2&&v.val2[0]&&(a+=v.val2[0])}}}}}}if(i.kern&&!l){var w=i.kern.glyph1.indexOf(r);if(w!=-1){var A=i.kern.rval[w].glyph2.indexOf(o);A!=-1&&(a+=i.kern.rval[w].vals[A])}}return a},e.U._applySubs=function(i,r,o,a){for(var l=i.length-r-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var u,f=o.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,i[r]))!=-1){if(o.ltype==1)i[r],f.fmt==1?i[r]=i[r]+f.delta:i[r]=f.newg[u];else if(o.ltype==4)for(var h=f.vals[u],d=0;d<h.length;d++){var _=h[d],p=_.chain.length;if(!(p>l)){for(var m=!0,g=0,x=0;x<p;x++){for(;i[r+g+(1+x)]==-1;)g++;_.chain[x]!=i[r+g+(1+x)]&&(m=!1)}if(m){for(i[r]=_.nglyph,x=0;x<p+g;x++)i[r+x+1]=-1;break}}}else if(o.ltype==5&&f.fmt==2)for(var b=e._lctf.getInterval(f.cDef,i[r]),v=f.cDef[b+2],y=f.scset[v],M=0;M<y.length;M++){var L=y[M],w=L.input;if(!(w.length>l)){for(m=!0,x=0;x<w.length;x++){var A=e._lctf.getInterval(f.cDef,i[r+1+x]);if(b==-1&&f.cDef[A+2]!=w[x]){m=!1;break}}if(m){var R=L.substLookupRecords;for(d=0;d<R.length;d+=2)R[d],R[d+1]}}}else if(o.ltype==6&&f.fmt==3){if(!e.U._glsCovered(i,f.backCvg,r-f.backCvg.length)||!e.U._glsCovered(i,f.inptCvg,r)||!e.U._glsCovered(i,f.ahedCvg,r+f.inptCvg.length))continue;var B=f.lookupRec;for(M=0;M<B.length;M+=2){b=B[M];var U=a[B[M+1]];e.U._applySubs(i,r+b,U,a)}}}}},e.U._glsCovered=function(i,r,o){for(var a=0;a<r.length;a++)if(e._lctf.coverageIndex(r[a],i[o+a])==-1)return!1;return!0},e.U.glyphsToPath=function(i,r,o){for(var a={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var f=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,h=e.U.glyphToPath(i,u),d=0;d<h.crds.length;d+=2)a.crds.push(h.crds[d]+l),a.crds.push(h.crds[d+1]);for(o&&a.cmds.push(o),d=0;d<h.cmds.length;d++)a.cmds.push(h.cmds[d]);o&&a.cmds.push("X"),l+=i.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(i,u,f))}}return a},e.U.P={},e.U.P.moveTo=function(i,r,o){i.cmds.push("M"),i.crds.push(r,o)},e.U.P.lineTo=function(i,r,o){i.cmds.push("L"),i.crds.push(r,o)},e.U.P.curveTo=function(i,r,o,a,l,c,u){i.cmds.push("C"),i.crds.push(r,o,a,l,c,u)},e.U.P.qcurveTo=function(i,r,o,a,l){i.cmds.push("Q"),i.crds.push(r,o,a,l)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,r,o,a,l){for(var c=r.stack,u=r.nStems,f=r.haveWidth,h=r.width,d=r.open,_=0,p=r.x,m=r.y,g=0,x=0,b=0,v=0,y=0,M=0,L=0,w=0,A=0,R=0,B={val:0,size:0};_<i.length;){e.CFF.getCharString(i,_,B);var U=B.val;if(_+=B.size,U=="o1"||U=="o18")c.length%2!=0&&!f&&(h=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(U=="o3"||U=="o23")c.length%2!=0&&!f&&(h=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(U=="o4")c.length>1&&!f&&(h=c.shift()+a.nominalWidthX,f=!0),d&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,p,m),d=!0;else if(U=="o5")for(;c.length>0;)p+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,p,m);else if(U=="o6"||U=="o7")for(var C=c.length,I=U=="o6",D=0;D<C;D++){var H=c.shift();I?p+=H:m+=H,I=!I,e.U.P.lineTo(l,p,m)}else if(U=="o8"||U=="o24"){C=c.length;for(var te=0;te+6<=C;)g=p+c.shift(),x=m+c.shift(),b=g+c.shift(),v=x+c.shift(),p=b+c.shift(),m=v+c.shift(),e.U.P.curveTo(l,g,x,b,v,p,m),te+=6;U=="o24"&&(p+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,p,m))}else{if(U=="o11")break;if(U=="o1234"||U=="o1235"||U=="o1236"||U=="o1237")U=="o1234"&&(x=m,b=(g=p+c.shift())+c.shift(),R=v=x+c.shift(),M=v,w=m,p=(L=(y=(A=b+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,g,x,b,v,A,R),e.U.P.curveTo(l,y,M,L,w,p,m)),U=="o1235"&&(g=p+c.shift(),x=m+c.shift(),b=g+c.shift(),v=x+c.shift(),A=b+c.shift(),R=v+c.shift(),y=A+c.shift(),M=R+c.shift(),L=y+c.shift(),w=M+c.shift(),p=L+c.shift(),m=w+c.shift(),c.shift(),e.U.P.curveTo(l,g,x,b,v,A,R),e.U.P.curveTo(l,y,M,L,w,p,m)),U=="o1236"&&(g=p+c.shift(),x=m+c.shift(),b=g+c.shift(),R=v=x+c.shift(),M=v,L=(y=(A=b+c.shift())+c.shift())+c.shift(),w=M+c.shift(),p=L+c.shift(),e.U.P.curveTo(l,g,x,b,v,A,R),e.U.P.curveTo(l,y,M,L,w,p,m)),U=="o1237"&&(g=p+c.shift(),x=m+c.shift(),b=g+c.shift(),v=x+c.shift(),A=b+c.shift(),R=v+c.shift(),y=A+c.shift(),M=R+c.shift(),L=y+c.shift(),w=M+c.shift(),Math.abs(L-p)>Math.abs(w-m)?p=L+c.shift():m=w+c.shift(),e.U.P.curveTo(l,g,x,b,v,A,R),e.U.P.curveTo(l,y,M,L,w,p,m));else if(U=="o14"){if(c.length>0&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),c.length==4){var J=c.shift(),V=c.shift(),W=c.shift(),S=c.shift(),P=e.CFF.glyphBySE(o,W),Q=e.CFF.glyphBySE(o,S);e.U._drawCFF(o.CharStrings[P],r,o,a,l),r.x=J,r.y=V,e.U._drawCFF(o.CharStrings[Q],r,o,a,l)}d&&(e.U.P.closePath(l),d=!1)}else if(U=="o19"||U=="o20")c.length%2!=0&&!f&&(h=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,_+=u+7>>3;else if(U=="o21")c.length>2&&!f&&(h=c.shift()+a.nominalWidthX,f=!0),m+=c.pop(),p+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,p,m),d=!0;else if(U=="o22")c.length>1&&!f&&(h=c.shift()+a.nominalWidthX,f=!0),p+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,p,m),d=!0;else if(U=="o25"){for(;c.length>6;)p+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,p,m);g=p+c.shift(),x=m+c.shift(),b=g+c.shift(),v=x+c.shift(),p=b+c.shift(),m=v+c.shift(),e.U.P.curveTo(l,g,x,b,v,p,m)}else if(U=="o26")for(c.length%2&&(p+=c.shift());c.length>0;)g=p,x=m+c.shift(),p=b=g+c.shift(),m=(v=x+c.shift())+c.shift(),e.U.P.curveTo(l,g,x,b,v,p,m);else if(U=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)x=m,b=(g=p+c.shift())+c.shift(),v=x+c.shift(),p=b+c.shift(),m=v,e.U.P.curveTo(l,g,x,b,v,p,m);else if(U=="o10"||U=="o29"){var X=U=="o10"?a:o;if(c.length==0)console.debug("error: empty stack");else{var q=c.pop(),E=X.Subrs[q+X.Bias];r.x=p,r.y=m,r.nStems=u,r.haveWidth=f,r.width=h,r.open=d,e.U._drawCFF(E,r,o,a,l),p=r.x,m=r.y,u=r.nStems,f=r.haveWidth,h=r.width,d=r.open}}else if(U=="o30"||U=="o31"){var Y=c.length,ee=(te=0,U=="o31");for(te+=Y-(C=-3&Y);te<C;)ee?(x=m,b=(g=p+c.shift())+c.shift(),m=(v=x+c.shift())+c.shift(),C-te==5?(p=b+c.shift(),te++):p=b,ee=!1):(g=p,x=m+c.shift(),b=g+c.shift(),v=x+c.shift(),p=b+c.shift(),C-te==5?(m=v+c.shift(),te++):m=v,ee=!0),e.U.P.curveTo(l,g,x,b,v,p,m),te+=4}else{if((U+"").charAt(0)=="o")throw console.debug("Unknown operation: "+U,i),U;c.push(U)}}}r.x=p,r.y=m,r.nStems=u,r.haveWidth=f,r.width=h,r.open=d};var t=e,n={Typr:t};return s.Typr=t,s.default=n,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function vb(){return function(s){var e=Uint8Array,t=Uint16Array,n=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(U,C){for(var I=new t(31),D=0;D<31;++D)I[D]=C+=1<<U[D-1];var H=new n(I[30]);for(D=1;D<30;++D)for(var te=I[D];te<I[D+1];++te)H[te]=te-I[D]<<5|D;return[I,H]},l=a(i,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var f=a(r,0)[0],h=new t(32768),d=0;d<32768;++d){var _=(43690&d)>>>1|(21845&d)<<1;_=(61680&(_=(52428&_)>>>2|(13107&_)<<2))>>>4|(3855&_)<<4,h[d]=((65280&_)>>>8|(255&_)<<8)>>>1}var p=function(U,C,I){for(var D=U.length,H=0,te=new t(C);H<D;++H)++te[U[H]-1];var J,V=new t(C);for(H=0;H<C;++H)V[H]=V[H-1]+te[H-1]<<1;if(I){J=new t(1<<C);var W=15-C;for(H=0;H<D;++H)if(U[H])for(var S=H<<4|U[H],P=C-U[H],Q=V[U[H]-1]++<<P,X=Q|(1<<P)-1;Q<=X;++Q)J[h[Q]>>>W]=S}else for(J=new t(D),H=0;H<D;++H)U[H]&&(J[H]=h[V[U[H]-1]++]>>>15-U[H]);return J},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var g=new e(32);for(d=0;d<32;++d)g[d]=5;var x=p(m,9,1),b=p(g,5,1),v=function(U){for(var C=U[0],I=1;I<U.length;++I)U[I]>C&&(C=U[I]);return C},y=function(U,C,I){var D=C/8|0;return(U[D]|U[D+1]<<8)>>(7&C)&I},M=function(U,C){var I=C/8|0;return(U[I]|U[I+1]<<8|U[I+2]<<16)>>(7&C)},L=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],w=function(U,C,I){var D=new Error(C||L[U]);if(D.code=U,Error.captureStackTrace&&Error.captureStackTrace(D,w),!I)throw D;return D},A=function(U,C,I){var D=U.length;if(!D||I&&!I.l&&D<5)return C||new e(0);var H=!C||I,te=!I||I.i;I||(I={}),C||(C=new e(3*D));var J,V=function(me){var Be=C.length;if(me>Be){var ze=new e(Math.max(2*Be,me));ze.set(C),C=ze}},W=I.f||0,S=I.p||0,P=I.b||0,Q=I.l,X=I.d,q=I.m,E=I.n,Y=8*D;do{if(!Q){I.f=W=y(U,S,1);var ee=y(U,S+1,3);if(S+=3,!ee){var ae=U[(Pe=((J=S)/8|0)+(7&J&&1)+4)-4]|U[Pe-3]<<8,oe=Pe+ae;if(oe>D){te&&w(0);break}H&&V(P+ae),C.set(U.subarray(Pe,oe),P),I.b=P+=ae,I.p=S=8*oe;continue}if(ee==1)Q=x,X=b,q=9,E=5;else if(ee==2){var pe=y(U,S,31)+257,N=y(U,S+10,15)+4,he=pe+y(U,S+5,31)+1;S+=14;for(var Fe=new e(he),Te=new e(19),Ie=0;Ie<N;++Ie)Te[o[Ie]]=y(U,S+3*Ie,7);S+=3*N;var Ne=v(Te),ue=(1<<Ne)-1,Me=p(Te,Ne,1);for(Ie=0;Ie<he;){var Pe,ge=Me[y(U,S,ue)];if(S+=15&ge,(Pe=ge>>>4)<16)Fe[Ie++]=Pe;else{var O=0,T=0;for(Pe==16?(T=3+y(U,S,3),S+=2,O=Fe[Ie-1]):Pe==17?(T=3+y(U,S,7),S+=3):Pe==18&&(T=11+y(U,S,127),S+=7);T--;)Fe[Ie++]=O}}var Z=Fe.subarray(0,pe),ie=Fe.subarray(pe);q=v(Z),E=v(ie),Q=p(Z,q,1),X=p(ie,E,1)}else w(1);if(S>Y){te&&w(0);break}}H&&V(P+131072);for(var le=(1<<q)-1,ve=(1<<E)-1,z=S;;z=S){var k=(O=Q[M(U,S)&le])>>>4;if((S+=15&O)>Y){te&&w(0);break}if(O||w(2),k<256)C[P++]=k;else{if(k==256){z=S,Q=null;break}var j=k-254;if(k>264){var xe=i[Ie=k-257];j=y(U,S,(1<<xe)-1)+c[Ie],S+=xe}var Se=X[M(U,S)&ve],ye=Se>>>4;if(Se||w(3),S+=15&Se,ie=f[ye],ye>3&&(xe=r[ye],ie+=M(U,S)&(1<<xe)-1,S+=xe),S>Y){te&&w(0);break}H&&V(P+131072);for(var _e=P+j;P<_e;P+=4)C[P]=C[P-ie],C[P+1]=C[P+1-ie],C[P+2]=C[P+2-ie],C[P+3]=C[P+3-ie];P=_e}}I.l=Q,I.p=z,I.b=P,Q&&(W=1,I.m=q,I.d=X,I.n=E)}while(!W);return P==C.length?C:function(me,Be,ze){(Be==null||Be<0)&&(Be=0),(ze==null||ze>me.length)&&(ze=me.length);var Je=new(me instanceof t?t:me instanceof n?n:e)(ze-Be);return Je.set(me.subarray(Be,ze)),Je}(C,0,P)},R=new e(0),B=typeof TextDecoder<"u"&&new TextDecoder;try{B.decode(R,{stream:!0})}catch{}return s.convert_streams=function(U){var C=new DataView(U),I=0;function D(){var pe=C.getUint16(I);return I+=2,pe}function H(){var pe=C.getUint32(I);return I+=4,pe}function te(pe){ae.setUint16(oe,pe),oe+=2}function J(pe){ae.setUint32(oe,pe),oe+=4}for(var V={signature:H(),flavor:H(),length:H(),numTables:D(),reserved:D(),totalSfntSize:H(),majorVersion:D(),minorVersion:D(),metaOffset:H(),metaLength:H(),metaOrigLength:H(),privOffset:H(),privLength:H()},W=0;Math.pow(2,W)<=V.numTables;)W++;W--;for(var S=16*Math.pow(2,W),P=16*V.numTables-S,Q=12,X=[],q=0;q<V.numTables;q++)X.push({tag:H(),offset:H(),compLength:H(),origLength:H(),origChecksum:H()}),Q+=16;var E,Y=new Uint8Array(12+16*X.length+X.reduce(function(pe,N){return pe+N.origLength+4},0)),ee=Y.buffer,ae=new DataView(ee),oe=0;return J(V.flavor),te(V.numTables),te(S),te(W),te(P),X.forEach(function(pe){J(pe.tag),J(pe.origChecksum),J(Q),J(pe.origLength),pe.outOffset=Q,(Q+=pe.origLength)%4!=0&&(Q+=4-Q%4)}),X.forEach(function(pe){var N,he=U.slice(pe.offset,pe.offset+pe.compLength);if(pe.compLength!=pe.origLength){var Fe=new Uint8Array(pe.origLength);N=new Uint8Array(he,2),A(N,Fe)}else Fe=new Uint8Array(he);Y.set(Fe,pe.outOffset);var Te=0;(Q=pe.outOffset+pe.origLength)%4!=0&&(Te=4-Q%4),Y.set(new Uint8Array(Te).buffer,pe.outOffset+pe.origLength),E=Q+Te}),ee.slice(0,E)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function _b(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},n={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,r=2,o=4,a=8,l=16,c=32;let u;function f(v){if(!u){const y={R:r,L:i,D:o,C:l,U:c,T:a};u=new Map;for(let M in n){let L=0;n[M].split(",").forEach(w=>{let[A,R]=w.split("+");A=parseInt(A,36),R=R?parseInt(R,36):0,u.set(L+=A,y[M]);for(let B=R;B--;)u.set(++L,y[M])})}}return u.get(v)||c}const h=1,d=2,_=3,p=4,m=[null,"isol","init","fina","medi"];function g(v){const y=new Uint8Array(v.length);let M=c,L=h,w=-1;for(let A=0;A<v.length;A++){const R=v.codePointAt(A);let B=f(R)|0,U=h;B&a||(M&(i|o|l)?B&(r|o|l)?(U=_,(L===h||L===_)&&y[w]++):B&(i|c)&&(L===d||L===p)&&y[w]--:M&(r|c)&&(L===d||L===p)&&y[w]--,L=y[A]=U,M=B,w=A,R>65535&&A++)}return y}function x(v,y){const M=[];for(let w=0;w<y.length;w++){const A=y.codePointAt(w);A>65535&&w++,M.push(s.U.codeToGlyph(v,A))}const L=v.GSUB;if(L){const{lookupList:w,featureList:A}=L;let R;const B=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws)$/,U=[];A.forEach(C=>{if(B.test(C.tag))for(let I=0;I<C.tab.length;I++){if(U[C.tab[I]])continue;U[C.tab[I]]=!0;const D=w[C.tab[I]],H=/^(isol|init|fina|medi)$/.test(C.tag);H&&!R&&(R=g(y));for(let te=0;te<M.length;te++)(!R||!H||m[R[te]]===C.tag)&&s.U._applySubs(M,te,D,w)}})}return M}function b(v){const y=Object.create(null),M={unitsPerEm:v.head.unitsPerEm,ascender:v.hhea.ascender,descender:v.hhea.descender,forEachGlyph(L,w,A,R){let B=0;const U=1/M.unitsPerEm*w,C=x(v,L);let I=0,D=-1;return C.forEach((H,te)=>{if(H!==-1){let J=y[H];if(!J){const{cmds:V,crds:W}=s.U.glyphToPath(v,H);let S="",P=0;for(let Y=0,ee=V.length;Y<ee;Y++){const ae=t[V[Y]];S+=V[Y];for(let oe=1;oe<=ae;oe++)S+=(oe>1?",":"")+W[P++]}let Q,X,q,E;if(W.length){Q=X=1/0,q=E=-1/0;for(let Y=0,ee=W.length;Y<ee;Y+=2){let ae=W[Y],oe=W[Y+1];ae<Q&&(Q=ae),oe<X&&(X=oe),ae>q&&(q=ae),oe>E&&(E=oe)}}else Q=q=X=E=0;J=y[H]={index:H,advanceWidth:v.hmtx.aWidth[H],xMin:Q,yMin:X,xMax:q,yMax:E,path:S,pathCommandCount:V.length}}D!==-1&&(B+=s.U.getPairAdjustment(v,D,H)*U),R.call(null,J,B,I),J.advanceWidth&&(B+=J.advanceWidth*U),A&&(B+=A*w),D=H}I+=L.codePointAt(I)>65535?2:1}),B}};return M}return function(y){const M=new Uint8Array(y,0,4),L=s._bin.readASCII(M,0,4);if(L==="wOFF")y=e(y);else if(L==="wOF2")throw new Error("woff2 fonts not supported");return b(s.parse(y)[0])}}const bb=Pr({name:"Typr Font Parser",dependencies:[gb,vb,_b],init(s,e,t){const n=s(),i=e();return t(n,i)}}),_r={defaultFontURL:"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff",sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},xb=new rt;function mr(){return(self.performance||Date).now()}const xu=Object.create(null);function wb(s,e){s=Sb({},s);const t=mr();if(s.font=Mb(s.font||_r.defaultFontURL),s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||_r.sdfGlyphSize,s.colorRanges!=null){let f={};for(let h in s.colorRanges)if(s.colorRanges.hasOwnProperty(h)){let d=s.colorRanges[h];typeof d!="number"&&(d=xb.set(d).getHex()),f[h]=d}s.colorRanges=f}Object.freeze(s);const{textureWidth:n,sdfExponent:i}=_r,{sdfGlyphSize:r}=s,o=n/r*4;let a=xu[r];if(!a){const f=document.createElement("canvas");f.width=n,f.height=r*256/o,a=xu[r]={glyphCount:0,sdfGlyphSize:r,sdfCanvas:f,sdfTexture:new on(f,void 0,void 0,void 0,dn,dn),contextLost:!1,glyphsByFont:new Map},a.sdfTexture.generateMipmaps=!1,yb(a)}const{sdfTexture:l,sdfCanvas:c}=a;let u=a.glyphsByFont.get(s.font);u||a.glyphsByFont.set(s.font,u=new Map),Ab(s).then(f=>{const{glyphIds:h,glyphPositions:d,fontSize:_,unitsPerEm:p,timings:m}=f,g=[],x=new Float32Array(h.length*4),b=_/p;let v=0,y=0;const M=mr();h.forEach((B,U)=>{let C=u.get(B);if(!C){const{path:te,pathBounds:J}=f.glyphData[B],V=Math.max(J[2]-J[0],J[3]-J[1])/r*(_r.sdfMargin*r+.5),W=a.glyphCount++,S=[J[0]-V,J[1]-V,J[2]+V,J[3]+V];u.set(B,C={path:te,atlasIndex:W,sdfViewBox:S}),g.push(C)}const{sdfViewBox:I}=C,D=d[y++],H=d[y++];x[v++]=D+I[0]*b,x[v++]=H+I[1]*b,x[v++]=D+I[2]*b,x[v++]=H+I[3]*b,h[U]=C.atlasIndex}),m.quads=(m.quads||0)+(mr()-M);const L=mr();m.sdf={};const w=c.height,A=Math.ceil(a.glyphCount/o),R=Math.pow(2,Math.ceil(Math.log2(A*r)));R>w&&(console.info(`Increasing SDF texture size ${w}->${R}`),pb(c,n,R),l.dispose()),ai.all(g.map(B=>bf(B,a,s.gpuAccelerateSDF).then(({timing:U})=>{m.sdf[B.atlasIndex]=U}))).then(()=>{g.length&&!a.contextLost&&(xf(a),l.needsUpdate=!0),m.sdfTotal=mr()-L,m.total=mr()-t,e(Object.freeze({parameters:s,sdfTexture:l,sdfGlyphSize:r,sdfExponent:i,glyphBounds:x,glyphAtlasIndices:h,glyphColors:f.glyphColors,caretPositions:f.caretPositions,caretHeight:f.caretHeight,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings,get totalBounds(){return console.log("totalBounds deprecated, use blockBounds instead"),f.blockBounds},get totalBlockSize(){console.log("totalBlockSize deprecated, use blockBounds instead");const[B,U,C,I]=f.blockBounds;return[C-B,I-U]}}))})}),ai.all([]).then(()=>{a.contextLost||mb(c)})}function bf({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:n,sdfCanvas:i,contextLost:r},o){if(r)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:l}=_r,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(a/n)*n,h=Math.floor(u/(a/n))*n,d=e%4;return hb(n,n,s,t,c,l,i,f,h,d,o)}function yb(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const n=[];s.glyphsByFont.forEach(i=>{i.forEach(r=>{n.push(bf(r,s,!0))})}),ai.all(n).then(()=>{xf(s),s.sdfTexture.needsUpdate=!0})})}function Sb(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let aa;function Mb(s){return aa||(aa=typeof document>"u"?{}:document.createElement("a")),aa.href=s,aa.href}function xf(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:n,height:i}=e,r=s.sdfCanvas.getContext("webgl");let o=t.image.data;(!o||o.length!==n*i*4)&&(o=new Uint8Array(n*i*4),t.image={width:n,height:i,data:o},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,n,i,r.RGBA,r.UNSIGNED_BYTE,o)}}const Tb=Pr({name:"Typesetter",dependencies:[_r,bb,fb,ib],init(s,e,t,n){const{defaultFontURL:i}=s;return t(e,n(),{defaultFontURL:i})}}),Ab=Pr({name:"Typesetter",dependencies:[Tb,nb],init(s,e){return function(t){const n=new e;return s.typeset(t,n.resolve),n}},getTransferables(s){const e=[s.glyphPositions.buffer,s.glyphIds.buffer];return s.caretPositions&&e.push(s.caretPositions.buffer),s.glyphColors&&e.push(s.glyphColors.buffer),e}}),Eb=(()=>{const s={};function e(l){let c=s[l];if(!c){const u=new Oo(1,1,l,l),f=u.clone(),h=u.attributes,d=f.attributes,_=new cn,p=h.uv.count;for(let m=0;m<p;m++)d.position.array[m*3]*=-1,d.normal.array[m*3+2]*=-1;["position","normal","uv"].forEach(m=>{_.setAttribute(m,new Kt([...h[m].array,...d[m].array],h[m].itemSize))}),_.setIndex([...u.index.array,...f.index.array.map(m=>m+p)]),_.translate(.5,.5,0),c=s[l]=_}return c}const t="aTroikaGlyphBounds",n="aTroikaGlyphIndex",i="aTroikaGlyphColor";class r extends sf{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Gi,this.boundingBox=new oi}computeBoundingSphere(){}computeBoundingBox(){}setSide(c){const u=this.getIndex().count;this.setDrawRange(c===Sn?u/2:0,c===Dr?u:u/2)}set detail(c){if(c!==this._detail){this._detail=c,(typeof c!="number"||c<1)&&(c=1);let u=e(c);["position","normal","uv"].forEach(f=>{this.attributes[f]=u.attributes[f].clone()}),this.setIndex(u.getIndex().clone())}}get detail(){return this._detail}set curveRadius(c){c!==this._curveRadius&&(this._curveRadius=c,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(c,u,f,h,d){o(this,t,c,4),o(this,n,u,1),o(this,i,d,3),this._blockBounds=f,this._chunkedBounds=h,a(this,u.length),this._updateBounds()}_updateBounds(){const c=this._blockBounds;if(c){const{curveRadius:u,boundingBox:f}=this;if(u){const{PI:h,floor:d,min:_,max:p,sin:m,cos:g}=Math,x=h/2,b=h*2,v=Math.abs(u),y=c[0]/v,M=c[2]/v,L=d((y+x)/b)!==d((M+x)/b)?-v:_(m(y)*v,m(M)*v),w=d((y-x)/b)!==d((M-x)/b)?v:p(m(y)*v,m(M)*v),A=d((y+h)/b)!==d((M+h)/b)?v*2:p(v-g(y)*v,v-g(M)*v);f.min.set(L,c[1],u<0?-A:0),f.max.set(w,c[3],u<0?0:A)}else f.min.set(c[0],c[1],0),f.max.set(c[2],c[3],0);f.getBoundingSphere(this.boundingSphere)}}applyClipRect(c){let u=this.getAttribute(n).count,f=this._chunkedBounds;if(f)for(let h=f.length;h--;){u=f[h].end;let d=f[h].rect;if(d[1]<c.w&&d[3]>c.y&&d[0]<c.z&&d[2]>c.x)break}a(this,u)}}r.prototype.setAttribute||(r.prototype.setAttribute=function(l,c){return this.attributes[l]=c,this});function o(l,c,u,f){const h=l.getAttribute(c);u?h&&h.array.length===u.length?(h.array.set(u),h.needsUpdate=!0):(l.setAttribute(c,new Po(u,f)),delete l._maxInstanceCount,l.dispose()):h&&l.deleteAttribute(c)}function a(l,c){l[l.hasOwnProperty("instanceCount")?"instanceCount":"maxInstancedCount"]=c}return r})(),Cb=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,Db=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Lb=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,Pb=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function Rb(s){const e=Bo(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ze},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new Tt(0,0,0,0)},uTroikaClipRect:{value:new Tt(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ze},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new rt},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new pn},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Cb,vertexTransform:Db,fragmentDefs:Lb,fragmentColorTransform:Pb,customRewriter({vertexShader:t,fragmentShader:n}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(n)&&(n=n.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(_f,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:n}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Ib=(()=>{const s=new Zo({color:16777215,side:Dr,transparent:!0}),e=8421504,t=new wt,n=new K,i=new K,r=[],o=new K,a="+x+y";function l(g){return Array.isArray(g)?g[0]:g}let c=()=>{const g=new en(new Oo(1,1),s);return c=()=>g,g},u=()=>{const g=new en(new Oo(1,1,32,1),s);return u=()=>g,g};const f={type:"syncstart"},h={type:"synccomplete"},d=["font","fontSize","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],_=d.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class p extends en{constructor(){const x=new Eb;super(x,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.fontSize=.1,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=e,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=a,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(x){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(x):(this._isSyncing=!0,this.dispatchEvent(f),wb({text:this.text,font:this.font,fontSize:this.fontSize||.1,letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF},b=>{this._isSyncing=!1,this._textRenderInfo=b,this.geometry.updateGlyphs(b.glyphBounds,b.glyphAtlasIndices,b.blockBounds,b.chunkedBounds,b.glyphColors);const v=this._queuedSyncs;v&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{v.forEach(y=>y&&y())})),this.dispatchEvent(h),x&&x()})))}onBeforeRender(x,b,v,y,M,L){this.sync(),M.isTroikaTextMaterial&&this._prepareForRender(M),M._hadOwnSide=M.hasOwnProperty("side"),this.geometry.setSide(M._actualSide=M.side),M.side=bi}onAfterRender(x,b,v,y,M,L){M._hadOwnSide?M.side=M._actualSide:delete M.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let x=this._derivedMaterial;const b=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=s.clone());if((!x||x.baseMaterial!==b)&&(x=this._derivedMaterial=Rb(b),b.addEventListener("dispose",function v(){b.removeEventListener("dispose",v),x.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let v=x._outlineMtl;return v||(v=x._outlineMtl=Object.create(x,{id:{value:x.id+.1}}),v.isTextOutlineMaterial=!0,v.depthWrite=!1,v.map=null,x.addEventListener("dispose",function y(){x.removeEventListener("dispose",y),v.dispose()})),[v,x]}else return x}set material(x){x&&x.isTroikaTextMaterial?(this._derivedMaterial=x,this._baseMaterial=x.baseMaterial):this._baseMaterial=x}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(x){this.geometry.detail=x}get curveRadius(){return this.geometry.curveRadius}set curveRadius(x){this.geometry.curveRadius=x}get customDepthMaterial(){return l(this.material).getDepthMaterial()}get customDistanceMaterial(){return l(this.material).getDistanceMaterial()}_prepareForRender(x){const b=x.isTextOutlineMaterial,v=x.uniforms,y=this.textRenderInfo;if(y){const{sdfTexture:w,blockBounds:A}=y;v.uTroikaSDFTexture.value=w,v.uTroikaSDFTextureSize.value.set(w.image.width,w.image.height),v.uTroikaSDFGlyphSize.value=y.sdfGlyphSize,v.uTroikaSDFExponent.value=y.sdfExponent,v.uTroikaTotalBounds.value.fromArray(A),v.uTroikaUseGlyphColors.value=!b&&!!y.glyphColors;let R=0,B=0,U=0,C,I,D,H=0,te=0;if(b){let{outlineWidth:V,outlineOffsetX:W,outlineOffsetY:S,outlineBlur:P,outlineOpacity:Q}=this;R=this._parsePercent(V)||0,B=Math.max(0,this._parsePercent(P)||0),C=Q,H=this._parsePercent(W)||0,te=this._parsePercent(S)||0}else U=Math.max(0,this._parsePercent(this.strokeWidth)||0),U&&(D=this.strokeColor,v.uTroikaStrokeColor.value.set(D??e),I=this.strokeOpacity,I==null&&(I=1)),C=this.fillOpacity;v.uTroikaDistanceOffset.value=R,v.uTroikaPositionOffset.value.set(H,te),v.uTroikaBlurRadius.value=B,v.uTroikaStrokeWidth.value=U,v.uTroikaStrokeOpacity.value=I,v.uTroikaFillOpacity.value=C??1,v.uTroikaCurveRadius.value=this.curveRadius||0;let J=this.clipRect;if(J&&Array.isArray(J)&&J.length===4)v.uTroikaClipRect.value.fromArray(J);else{const V=(this.fontSize||.1)*100;v.uTroikaClipRect.value.set(A[0]-V,A[1]-V,A[2]+V,A[3]+V)}this.geometry.applyClipRect(v.uTroikaClipRect.value)}v.uTroikaSDFDebug.value=!!this.debugSDF,x.polygonOffset=!!this.depthOffset,x.polygonOffsetFactor=x.polygonOffsetUnits=this.depthOffset||0;const M=b?this.outlineColor||0:this.color;if(M==null)delete x.color;else{const w=x.hasOwnProperty("color")?x.color:x.color=new rt;(M!==w._input||typeof M=="object")&&w.set(w._input=M)}let L=this.orientation||a;if(L!==x._orientation){let w=v.uTroikaOrient.value;L=L.replace(/[^-+xyz]/g,"");let A=L!==a&&L.match(/^([-+])([xyz])([-+])([xyz])$/);if(A){let[,R,B,U,C]=A;n.set(0,0,0)[B]=R==="-"?1:-1,i.set(0,0,0)[C]=U==="-"?-1:1,t.lookAt(o,n.cross(i),i),w.setFromMatrix4(t)}else w.identity();x._orientation=L}}_parsePercent(x){if(typeof x=="string"){let b=x.match(/^(-?[\d.]+)%$/),v=b?parseFloat(b[1]):NaN;x=(isNaN(v)?0:v/100)*this.fontSize}return x}localPositionToTextCoords(x,b=new Ze){b.copy(x);const v=this.curveRadius;return v&&(b.x=Math.atan2(x.x,Math.abs(v)-Math.abs(x.z))*Math.abs(v)),b}worldPositionToTextCoords(x,b=new Ze){return n.copy(x),this.localPositionToTextCoords(this.worldToLocal(n),b)}raycast(x,b){const{textRenderInfo:v,curveRadius:y}=this;if(v){const M=v.blockBounds,L=y?u():c(),w=L.geometry,{position:A,uv:R}=w.attributes;for(let B=0;B<R.count;B++){let U=M[0]+R.getX(B)*(M[2]-M[0]);const C=M[1]+R.getY(B)*(M[3]-M[1]);let I=0;y&&(I=y-Math.cos(U/y)*y,U=Math.sin(U/y)*y),A.setXYZ(B,U,C,I)}w.boundingSphere=this.geometry.boundingSphere,w.boundingBox=this.geometry.boundingBox,L.matrixWorld=this.matrixWorld,L.material.side=this.material.side,r.length=0,L.raycast(x,r);for(let B=0;B<r.length;B++)r[B].object=this,b.push(r[B])}}copy(x){const b=this.geometry;return super.copy(x),this.geometry=b,_.forEach(v=>{this[v]=x[v]}),this}clone(){return new this.constructor().copy(this)}}d.forEach(g=>{const x="_private_"+g;Object.defineProperty(p.prototype,g,{get(){return this[x]},set(b){b!==this[x]&&(this[x]=b,this._needsSync=!0)}})});let m=!1;return Object.defineProperty(p.prototype,"anchor",{get(){return this._deprecated_anchor},set(g){this._deprecated_anchor=g,m||(console.warn("TextMesh: `anchor` has been deprecated; use `anchorX` and `anchorY` instead."),m=!0),Array.isArray(g)?(this.anchorX=`${(+g[0]||0)*100}%`,this.anchorY=`${(+g[1]||0)*100}%`):this.anchorX=this.anchorY=0}}),p})();function Ub(s){let e;const t=s[46].default,n=Rt(t,s,s[57],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&67108864)&&It(n,t,i,i[57],e?Ot(t,i[57],r,null):Ut(i[57]),null)},i(i){e||(fe(n,i),e=!0)},o(i){de(n,i),e=!1},d(i){n&&n.d(i)}}}function Ob(s){let e,t,n;function i(o){s[47](o)}let r={mesh:s[15],lookAt:s[14],position:s[1],scale:s[2],rotation:s[3],castShadow:s[5],receiveShadow:s[6],frustumCulled:s[7],renderOrder:s[8],visible:s[9],userData:s[10],dispose:s[11],interactive:s[12],ignorePointer:s[13],viewportAware:s[4],$$slots:{default:[Ub]},$$scope:{ctx:s}};return s[0]!==void 0&&(r.inViewport=s[0]),e=new wa({props:r}),Lt.push(()=>zt(e,"inViewport",i)),e.$on("click",s[48]),e.$on("contextmenu",s[49]),e.$on("pointerup",s[50]),e.$on("pointerdown",s[51]),e.$on("pointerenter",s[52]),e.$on("pointerleave",s[53]),e.$on("pointermove",s[54]),e.$on("viewportenter",s[55]),e.$on("viewportleave",s[56]),{c(){Ee(e.$$.fragment)},l(o){Ce(e.$$.fragment,o)},m(o,a){De(e,o,a),n=!0},p(o,a){const l={};a[0]&16384&&(l.lookAt=o[14]),a[0]&2&&(l.position=o[1]),a[0]&4&&(l.scale=o[2]),a[0]&8&&(l.rotation=o[3]),a[0]&32&&(l.castShadow=o[5]),a[0]&64&&(l.receiveShadow=o[6]),a[0]&128&&(l.frustumCulled=o[7]),a[0]&256&&(l.renderOrder=o[8]),a[0]&512&&(l.visible=o[9]),a[0]&1024&&(l.userData=o[10]),a[0]&2048&&(l.dispose=o[11]),a[0]&4096&&(l.interactive=o[12]),a[0]&8192&&(l.ignorePointer=o[13]),a[0]&16&&(l.viewportAware=o[4]),a[1]&67108864&&(l.$$scope={dirty:a,ctx:o}),!t&&a[0]&1&&(t=!0,l.inViewport=o[0],Bt(()=>t=!1)),e.$set(l)},i(o){n||(fe(e.$$.fragment,o),n=!0)},o(o){de(e.$$.fragment,o),n=!1},d(o){Le(e,o)}}}function Fb(s,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:d=void 0}=e,{visible:_=void 0}=e,{userData:p=void 0}=e,{dispose:m=void 0}=e,{interactive:g=!1}=e,{ignorePointer:x=!1}=e,{lookAt:b=void 0}=e,{text:v=void 0}=e,{anchorX:y=void 0}=e,{anchorY:M=void 0}=e,{curveRadius:L=void 0}=e,{font:w=void 0}=e,{fontSize:A=void 0}=e,{letterSpacing:R=void 0}=e,{lineHeight:B=void 0}=e,{maxWidth:U=void 0}=e,{overflowWrap:C=void 0}=e,{textAlign:I=void 0}=e,{textIndent:D=void 0}=e,{whiteSpace:H=void 0}=e,{material:te=void 0}=e,{color:J=void 0}=e,{depthOffset:V=void 0}=e,{clipRect:W=void 0}=e,{glyphGeometryDetail:S=void 0}=e,{sdfGlyphSize:P=void 0}=e,{outlineWidth:Q=void 0}=e,{outlineColor:X=void 0}=e,{outlineOpacity:q=void 0}=e,{outlineBlur:E=void 0}=e,{outlineOffsetX:Y=void 0}=e,{outlineOffsetY:ee=void 0}=e,{strokeWidth:ae=void 0}=e,{strokeColor:oe=void 0}=e,{strokeOpacity:pe=void 0}=e,{fillOpacity:N=void 0}=e,{direction:he=void 0}=e;const Fe=new Ib,Te=()=>Fe,{invalidate:Ie}=gn(),Ne=Cr();function ue(z){c=z,t(0,c)}function Me(z){ke.call(this,s,z)}function Pe(z){ke.call(this,s,z)}function ge(z){ke.call(this,s,z)}function O(z){ke.call(this,s,z)}function T(z){ke.call(this,s,z)}function Z(z){ke.call(this,s,z)}function ie(z){ke.call(this,s,z)}function le(z){ke.call(this,s,z)}function ve(z){ke.call(this,s,z)}return s.$$set=z=>{"position"in z&&t(1,r=z.position),"scale"in z&&t(2,o=z.scale),"rotation"in z&&t(3,a=z.rotation),"viewportAware"in z&&t(4,l=z.viewportAware),"inViewport"in z&&t(0,c=z.inViewport),"castShadow"in z&&t(5,u=z.castShadow),"receiveShadow"in z&&t(6,f=z.receiveShadow),"frustumCulled"in z&&t(7,h=z.frustumCulled),"renderOrder"in z&&t(8,d=z.renderOrder),"visible"in z&&t(9,_=z.visible),"userData"in z&&t(10,p=z.userData),"dispose"in z&&t(11,m=z.dispose),"interactive"in z&&t(12,g=z.interactive),"ignorePointer"in z&&t(13,x=z.ignorePointer),"lookAt"in z&&t(14,b=z.lookAt),"text"in z&&t(16,v=z.text),"anchorX"in z&&t(17,y=z.anchorX),"anchorY"in z&&t(18,M=z.anchorY),"curveRadius"in z&&t(19,L=z.curveRadius),"font"in z&&t(20,w=z.font),"fontSize"in z&&t(21,A=z.fontSize),"letterSpacing"in z&&t(22,R=z.letterSpacing),"lineHeight"in z&&t(23,B=z.lineHeight),"maxWidth"in z&&t(24,U=z.maxWidth),"overflowWrap"in z&&t(25,C=z.overflowWrap),"textAlign"in z&&t(26,I=z.textAlign),"textIndent"in z&&t(27,D=z.textIndent),"whiteSpace"in z&&t(28,H=z.whiteSpace),"material"in z&&t(29,te=z.material),"color"in z&&t(30,J=z.color),"depthOffset"in z&&t(31,V=z.depthOffset),"clipRect"in z&&t(32,W=z.clipRect),"glyphGeometryDetail"in z&&t(33,S=z.glyphGeometryDetail),"sdfGlyphSize"in z&&t(34,P=z.sdfGlyphSize),"outlineWidth"in z&&t(35,Q=z.outlineWidth),"outlineColor"in z&&t(36,X=z.outlineColor),"outlineOpacity"in z&&t(37,q=z.outlineOpacity),"outlineBlur"in z&&t(38,E=z.outlineBlur),"outlineOffsetX"in z&&t(39,Y=z.outlineOffsetX),"outlineOffsetY"in z&&t(40,ee=z.outlineOffsetY),"strokeWidth"in z&&t(41,ae=z.strokeWidth),"strokeColor"in z&&t(42,oe=z.strokeColor),"strokeOpacity"in z&&t(43,pe=z.strokeOpacity),"fillOpacity"in z&&t(44,N=z.fillOpacity),"direction"in z&&t(45,he=z.direction),"$$scope"in z&&t(57,i=z.$$scope)},s.$$.update=()=>{if(s.$$.dirty[0]&2147418112|s.$$.dirty[1]&32767){const z=Te();v!==void 0&&(z.text=v),y!==void 0&&(z.anchorX=y),M!==void 0&&(z.anchorY=M),L!==void 0&&(z.curveRadius=L),w!==void 0&&(z.font=w),A!==void 0&&(z.fontSize=A),R!==void 0&&(z.letterSpacing=R),B!==void 0&&(z.lineHeight=B),U!==void 0&&(z.maxWidth=U),C!==void 0&&(z.overflowWrap=C),I!==void 0&&(z.textAlign=I),D!==void 0&&(z.textIndent=D),H!==void 0&&(z.whiteSpace=H),te&&(z.material=te),J!==void 0&&(z.color=J),V!==void 0&&(z.depthOffset=V),W!==void 0&&(z.clipRect=W),S!==void 0&&(z.glyphGeometryDetail=S),P!==void 0&&(z.sdfGlyphSize=P),Q!==void 0&&(z.outlineWidth=Q),X!==void 0&&(z.outlineColor=X),q!==void 0&&(z.outlineOpacity=q),E!==void 0&&(z.outlineBlur=E),Y!==void 0&&(z.outlineOffsetX=Y),ee!==void 0&&(z.outlineOffsetY=ee),ae!==void 0&&(z.strokeWidth=ae),oe!==void 0&&(z.strokeColor=oe),pe!==void 0&&(z.strokeOpacity=pe),N!==void 0&&(z.fillOpacity=N),he!==void 0&&(z.direction=he),z.sync(()=>{Ie("Text: sync finished"),Ne("sync")})}},[c,r,o,a,l,u,f,h,d,_,p,m,g,x,b,Fe,v,y,M,L,w,A,R,B,U,C,I,D,H,te,J,V,W,S,P,Q,X,q,E,Y,ee,ae,oe,pe,N,he,n,ue,Me,Pe,ge,O,T,Z,ie,le,ve,i]}class kb extends je{constructor(e){super(),Xe(this,e,Fb,Ob,We,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,text:16,anchorX:17,anchorY:18,curveRadius:19,font:20,fontSize:21,letterSpacing:22,lineHeight:23,maxWidth:24,overflowWrap:25,textAlign:26,textIndent:27,whiteSpace:28,material:29,color:30,depthOffset:31,clipRect:32,glyphGeometryDetail:33,sdfGlyphSize:34,outlineWidth:35,outlineColor:36,outlineOpacity:37,outlineBlur:38,outlineOffsetX:39,outlineOffsetY:40,strokeWidth:41,strokeColor:42,strokeOpacity:43,fillOpacity:44,direction:45,textObject:15},null,[-1,-1])}get textObject(){return this.$$.ctx[15]}}function zb(s){let e,t,n,i;return e=new w1({props:{visible:s[0],points:[[0,0,0],s[1]],material:new Ro({color:s[3]})}}),n=new kb({props:{visible:s[0],position:new K(...s[1]),text:s[2],color:s[3],anchorY:"middle",fontSize:Bb}}),{c(){Ee(e.$$.fragment),t=nt(),Ee(n.$$.fragment)},l(r){Ce(e.$$.fragment,r),t=it(r),Ce(n.$$.fragment,r)},m(r,o){De(e,r,o),Ve(r,t,o),De(n,r,o),i=!0},p(r,[o]){const a={};o&1&&(a.visible=r[0]),o&2&&(a.points=[[0,0,0],r[1]]),o&8&&(a.material=new Ro({color:r[3]})),e.$set(a);const l={};o&1&&(l.visible=r[0]),o&2&&(l.position=new K(...r[1])),o&4&&(l.text=r[2]),o&8&&(l.color=r[3]),n.$set(l)},i(r){i||(fe(e.$$.fragment,r),fe(n.$$.fragment,r),i=!0)},o(r){de(e.$$.fragment,r),de(n.$$.fragment,r),i=!1},d(r){Le(e,r),r&&we(t),Le(n,r)}}}const Bb=.2;function Nb(s,e,t){let{visible:n}=e,{endCoordinate:i}=e,{text:r}=e,{color:o}=e;return s.$$set=a=>{"visible"in a&&t(0,n=a.visible),"endCoordinate"in a&&t(1,i=a.endCoordinate),"text"in a&&t(2,r=a.text),"color"in a&&t(3,o=a.color)},[n,i,r,o]}class bo extends je{constructor(e){super(),Xe(this,e,Nb,zb,We,{visible:0,endCoordinate:1,text:2,color:3})}}function Gb(s){let e,t,n,i,r,o;return e=new bo({props:{visible:s[0],endCoordinate:[xo,0,0],color:"#ff0000",text:"X"}}),n=new bo({props:{visible:s[0],endCoordinate:[0,xo,0],color:"#00ff00",text:"Y"}}),r=new bo({props:{visible:s[0],endCoordinate:[0,0,xo],color:"#0000ff",text:"Z"}}),{c(){Ee(e.$$.fragment),t=nt(),Ee(n.$$.fragment),i=nt(),Ee(r.$$.fragment)},l(a){Ce(e.$$.fragment,a),t=it(a),Ce(n.$$.fragment,a),i=it(a),Ce(r.$$.fragment,a)},m(a,l){De(e,a,l),Ve(a,t,l),De(n,a,l),Ve(a,i,l),De(r,a,l),o=!0},p(a,[l]){const c={};l&1&&(c.visible=a[0]),e.$set(c);const u={};l&1&&(u.visible=a[0]),n.$set(u);const f={};l&1&&(f.visible=a[0]),r.$set(f)},i(a){o||(fe(e.$$.fragment,a),fe(n.$$.fragment,a),fe(r.$$.fragment,a),o=!0)},o(a){de(e.$$.fragment,a),de(n.$$.fragment,a),de(r.$$.fragment,a),o=!1},d(a){Le(e,a),a&&we(t),Le(n,a),a&&we(i),Le(r,a)}}}const xo=1.5;function Vb(s,e,t){let{visible:n}=e;return s.$$set=i=>{"visible"in i&&t(0,n=i.visible)},[n]}class Wb extends je{constructor(e){super(),Xe(this,e,Vb,Gb,We,{visible:0})}}function Hb(s){let e,t;return e=new B_({props:{autoRotate:s[0].autoRotate,enableZoom:!0}}),{c(){Ee(e.$$.fragment)},l(n){Ce(e.$$.fragment,n)},m(n,i){De(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.autoRotate=n[0].autoRotate),e.$set(r)},i(n){t||(fe(e.$$.fragment,n),t=!0)},o(n){de(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function jb(s){let e,t,n,i,r,o,a,l,c,u,f,h;return e=new U_({props:{position:{y:3,x:3,z:3},$$slots:{default:[Hb]},$$scope:{ctx:s}}}),n=new Y_({props:{color:16777215,intensity:1}}),r=new F1({}),a=new W1({}),c=new Z1({}),f=new Wb({props:{visible:s[0].axisOverlay}}),{c(){Ee(e.$$.fragment),t=nt(),Ee(n.$$.fragment),i=nt(),Ee(r.$$.fragment),o=nt(),Ee(a.$$.fragment),l=nt(),Ee(c.$$.fragment),u=nt(),Ee(f.$$.fragment)},l(d){Ce(e.$$.fragment,d),t=it(d),Ce(n.$$.fragment,d),i=it(d),Ce(r.$$.fragment,d),o=it(d),Ce(a.$$.fragment,d),l=it(d),Ce(c.$$.fragment,d),u=it(d),Ce(f.$$.fragment,d)},m(d,_){De(e,d,_),Ve(d,t,_),De(n,d,_),Ve(d,i,_),De(r,d,_),Ve(d,o,_),De(a,d,_),Ve(d,l,_),De(c,d,_),Ve(d,u,_),De(f,d,_),h=!0},p(d,_){const p={};_&3&&(p.$$scope={dirty:_,ctx:d}),e.$set(p);const m={};_&1&&(m.visible=d[0].axisOverlay),f.$set(m)},i(d){h||(fe(e.$$.fragment,d),fe(n.$$.fragment,d),fe(r.$$.fragment,d),fe(a.$$.fragment,d),fe(c.$$.fragment,d),fe(f.$$.fragment,d),h=!0)},o(d){de(e.$$.fragment,d),de(n.$$.fragment,d),de(r.$$.fragment,d),de(a.$$.fragment,d),de(c.$$.fragment,d),de(f.$$.fragment,d),h=!1},d(d){Le(e,d),d&&we(t),Le(n,d),d&&we(i),Le(r,d),d&&we(o),Le(a,d),d&&we(l),Le(c,d),d&&we(u),Le(f,d)}}}function Xb(s){let e,t,n;return t=new m_({props:{$$slots:{default:[jb]},$$scope:{ctx:s}}}),{c(){e=ft("div"),Ee(t.$$.fragment),this.h()},l(i){e=ht(i,"DIV",{class:!0});var r=dt(e);Ce(t.$$.fragment,r),r.forEach(we),this.h()},h(){Ge(e,"class","h-full cursor-grab")},m(i,r){Ve(i,e,r),De(t,e,null),n=!0},p(i,[r]){const o={};r&3&&(o.$$scope={dirty:r,ctx:i}),t.$set(o)},i(i){n||(fe(t.$$.fragment,i),n=!0)},o(i){de(t.$$.fragment,i),n=!1},d(i){i&&we(e),Le(t)}}}function qb(s,e,t){let n;return pt(s,Li,i=>t(0,n=i)),[n]}class Yb extends je{constructor(e){super(),Xe(this,e,qb,Xb,We,{})}}function Zb(s){let e,t,n;return{c(){e=ft("div"),t=ft("span"),n=No("Geodesicraft"),this.h()},l(i){e=ht(i,"DIV",{class:!0});var r=dt(e);t=ht(r,"SPAN",{class:!0});var o=dt(t);n=Go(o,"Geodesicraft"),o.forEach(we),r.forEach(we),this.h()},h(){Ge(t,"class","clickthroughable text-zinc-500 dark:text-zinc-300 text-lg tracking-wide mx-5 my-3"),Ge(e,"class","clickthroughable flex justify-start")},m(i,r){Ve(i,e,r),gt(e,t),gt(t,n)},p:_t,i:_t,o:_t,d(i){i&&we(e)}}}class Kb extends je{constructor(e){super(),Xe(this,e,null,Zb,We,{})}}function Jb(s){let e,t,n;return t=new Kb({}),{c(){e=ft("div"),Ee(t.$$.fragment),this.h()},l(i){e=ht(i,"DIV",{class:!0});var r=dt(e);Ce(t.$$.fragment,r),r.forEach(we),this.h()},h(){Ge(e,"class","clickthroughable grid h-full content-between")},m(i,r){Ve(i,e,r),De(t,e,null),n=!0},p:_t,i(i){n||(fe(t.$$.fragment,i),n=!0)},o(i){de(t.$$.fragment,i),n=!1},d(i){i&&we(e),Le(t)}}}class Qb extends je{constructor(e){super(),Xe(this,e,null,Jb,We,{})}}function $b(s){let e,t,n,i,r,o,a;return n=new Yb({}),o=new Qb({}),{c(){e=ft("div"),t=ft("div"),Ee(n.$$.fragment),i=nt(),r=ft("div"),Ee(o.$$.fragment),this.h()},l(l){e=ht(l,"DIV",{class:!0});var c=dt(e);t=ht(c,"DIV",{class:!0});var u=dt(t);Ce(n.$$.fragment,u),u.forEach(we),i=it(c),r=ht(c,"DIV",{class:!0});var f=dt(r);Ce(o.$$.fragment,f),f.forEach(we),c.forEach(we),this.h()},h(){Ge(t,"class","overflow-hidden row-start-1 col-start-1"),Ge(r,"class","clickthroughable overflow-hidden row-start-1 col-start-1"),Ge(e,"class","clickthroughable grid grid-cols-1 overflow-hidden")},m(l,c){Ve(l,e,c),gt(e,t),De(n,t,null),gt(e,i),gt(e,r),De(o,r,null),a=!0},p:_t,i(l){a||(fe(n.$$.fragment,l),fe(o.$$.fragment,l),a=!0)},o(l){de(n.$$.fragment,l),de(o.$$.fragment,l),a=!1},d(l){l&&we(e),Le(n),Le(o)}}}class e2 extends je{constructor(e){super(),Xe(this,e,null,$b,We,{})}}function wu(s,e,t){const n=s.slice();return n[3]=e[t],n}function yu(s,e){let t,n=e[3].title+"",i,r;return{key:s,first:null,c(){t=ft("option"),i=No(n),this.h()},l(o){t=ht(o,"OPTION",{});var a=dt(t);i=Go(a,n),a.forEach(we),this.h()},h(){t.__value=r=e[3].id,t.value=t.__value,this.first=t},m(o,a){Ve(o,t,a),gt(t,i)},p(o,a){e=o,a&2&&n!==(n=e[3].title+"")&&Pf(i,n),a&2&&r!==(r=e[3].id)&&(t.__value=r,t.value=t.__value)},d(o){o&&we(t)}}}function t2(s){let e,t=[],n=new Map,i,r,o=s[1];const a=l=>l[3].id;for(let l=0;l<o.length;l+=1){let c=wu(s,o,l),u=a(c);n.set(u,t[l]=yu(u,c))}return{c(){e=ft("select");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=ht(l,"SELECT",{class:!0});var c=dt(e);for(let u=0;u<t.length;u+=1)t[u].l(c);c.forEach(we),this.h()},h(){Ge(e,"class","bg-zinc-400 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 cursor-pointer p-2 rounded-lg tracking-wide w-full"),s[0]===void 0&&Df(()=>s[2].call(e))},m(l,c){Ve(l,e,c);for(let u=0;u<t.length;u+=1)t[u].m(e,null);bl(e,s[0]),i||(r=fn(e,"change",s[2]),i=!0)},p(l,[c]){c&2&&(o=l[1],t=Au(t,c,a,1,l,o,n,e,Lf,yu,null,wu)),c&3&&bl(e,l[0])},i:_t,o:_t,d(l){l&&we(e);for(let c=0;c<t.length;c+=1)t[c].d();i=!1,r()}}}function n2(s,e,t){let{selected:n}=e,{options:i}=e;function r(){n=Rf(this),t(0,n),t(1,i)}return s.$$set=o=>{"selected"in o&&t(0,n=o.selected),"options"in o&&t(1,i=o.options)},[n,i,r]}class i2 extends je{constructor(e){super(),Xe(this,e,n2,t2,We,{selected:0,options:1})}}function r2(s){let e,t,n;function i(o){s[3](o)}let r={options:s[2]};return s[1].selectedDomeSetting!==void 0&&(r.selected=s[1].selectedDomeSetting),e=new i2({props:r}),Lt.push(()=>zt(e,"selected",i)),{c(){Ee(e.$$.fragment)},l(o){Ce(e.$$.fragment,o)},m(o,a){De(e,o,a),n=!0},p(o,a){const l={};!t&&a&2&&(t=!0,l.selected=o[1].selectedDomeSetting,Bt(()=>t=!1)),e.$set(l)},i(o){n||(fe(e.$$.fragment,o),n=!0)},o(o){de(e.$$.fragment,o),n=!1},d(o){Le(e,o)}}}function s2(s){let e,t,n,i;function r(a){s[4](a)}let o={min:ni[s[1].selectedDomeSetting].min,max:ni[s[1].selectedDomeSetting].max,step:ni[s[1].selectedDomeSetting].step,numberClasses:"bg-zinc-400 dark:bg-zinc-800",$$slots:{default:[r2]},$$scope:{ctx:s}};return s[0][s[1].selectedDomeSetting]!==void 0&&(o.value=s[0][s[1].selectedDomeSetting]),t=new Du({props:o}),Lt.push(()=>zt(t,"value",r)),{c(){e=ft("div"),Ee(t.$$.fragment),this.h()},l(a){e=ht(a,"DIV",{class:!0});var l=dt(e);Ce(t.$$.fragment,l),l.forEach(we),this.h()},h(){Ge(e,"class","bg-zinc-300 dark:bg-zinc-700 p-5")},m(a,l){Ve(a,e,l),De(t,e,null),i=!0},p(a,[l]){const c={};l&2&&(c.min=ni[a[1].selectedDomeSetting].min),l&2&&(c.max=ni[a[1].selectedDomeSetting].max),l&2&&(c.step=ni[a[1].selectedDomeSetting].step),l&34&&(c.$$scope={dirty:l,ctx:a}),!n&&l&3&&(n=!0,c.value=a[0][a[1].selectedDomeSetting],Bt(()=>n=!1)),t.$set(c)},i(a){i||(fe(t.$$.fragment,a),i=!0)},o(a){de(t.$$.fragment,a),i=!1},d(a){a&&we(e),Le(t)}}}function a2(s,e,t){let n,i;pt(s,ki,l=>t(0,n=l)),pt(s,Li,l=>t(1,i=l));const r=Object.entries(ni).map(([l,c])=>({id:l,title:c.title}));function o(l){s.$$.not_equal(i.selectedDomeSetting,l)&&(i.selectedDomeSetting=l,Li.set(i))}function a(l){s.$$.not_equal(n[i.selectedDomeSetting],l)&&(n[i.selectedDomeSetting]=l,ki.set(n))}return[n,i,r,o,a]}class o2 extends je{constructor(e){super(),Xe(this,e,a2,s2,We,{})}}function l2(s){let e,t,n;return t=new o2({}),{c(){e=ft("div"),Ee(t.$$.fragment)},l(i){e=ht(i,"DIV",{});var r=dt(e);Ce(t.$$.fragment,r),r.forEach(we)},m(i,r){Ve(i,e,r),De(t,e,null),n=!0},p:_t,i(i){n||(fe(t.$$.fragment,i),n=!0)},o(i){de(t.$$.fragment,i),n=!1},d(i){i&&we(e),Le(t)}}}class c2 extends je{constructor(e){super(),Xe(this,e,null,l2,We,{})}}function u2(s){let e,t,n;return{c(){e=ft("input"),this.h()},l(i){e=ht(i,"INPUT",{type:!0,placeholder:!0,class:!0}),this.h()},h(){Ge(e,"type","text"),Ge(e,"placeholder","//geo"),Ge(e,"class","px-2 bg-zinc-100 dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 rounded-r-lg"),e.readOnly=!0},m(i,r){Ve(i,e,r),gr(e,s[0]),t||(n=fn(e,"input",s[3]),t=!0)},p(i,[r]){r&1&&e.value!==i[0]&&gr(e,i[0])},i:_t,o:_t,d(i){i&&we(e),t=!1,n()}}}function f2(s,e,t){let n;pt(s,ki,l=>t(2,n=l));let i,{value:r}=e;const o=function(l,c){return Object.entries(l).map(([u,f])=>`${c[u].argument}=${f}`)};function a(){r=this.value,t(0,r),t(1,i),t(2,n)}return s.$$set=l=>{"value"in l&&t(0,r=l.value)},s.$$.update=()=>{s.$$.dirty&4&&t(1,i=o(n,ni)),s.$$.dirty&2&&t(0,r=`//geo ${i.join(" ")}`)},[r,i,n,a]}class h2 extends je{constructor(e){super(),Xe(this,e,f2,u2,We,{value:0})}}function d2(s){let e,t='<path fill="currentColor" d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z"/>',n=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},s[0]],i={};for(let r=0;r<n.length;r+=1)i=ln(i,n[r]);return{c(){e=ds("svg"),this.h()},l(r){e=ms(r,"svg",{viewBox:!0,width:!0,height:!0});var o=dt(e);o.forEach(we),this.h()},h(){qn(e,i)},m(r,o){Ve(r,e,o),e.innerHTML=t},p(r,[o]){qn(e,i=ps(n,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},o&1&&r[0]]))},i:_t,o:_t,d(r){r&&we(e)}}}function m2(s,e,t){return s.$$set=n=>{t(0,e=ln(ln({},e),Yn(n)))},e=Yn(e),[e]}class p2 extends je{constructor(e){super(),Xe(this,e,m2,d2,We,{})}}function g2(s){let e,t,n,i,r;return t=new p2({}),{c(){e=ft("button"),Ee(t.$$.fragment),this.h()},l(o){e=ht(o,"BUTTON",{title:!0,class:!0});var a=dt(e);Ce(t.$$.fragment,a),a.forEach(we),this.h()},h(){Ge(e,"title","Copy Command"),Ge(e,"class","cursor-pointer p-3 bg-zinc-100 dark:bg-zinc-600 hover:!bg-blue-500 text-zinc-900 dark:text-zinc-100 hover:!text-zinc-100 rounded-l-lg")},m(o,a){Ve(o,e,a),De(t,e,null),n=!0,i||(r=fn(e,"click",s[0]),i=!0)},p:_t,i(o){n||(fe(t.$$.fragment,o),n=!0)},o(o){de(t.$$.fragment,o),n=!1},d(o){o&&we(e),Le(t),i=!1,r()}}}function v2(s,e,t){let{value:n}=e;const i=()=>{navigator.clipboard.writeText(n)};return s.$$set=r=>{"value"in r&&t(1,n=r.value)},[i,n]}class _2 extends je{constructor(e){super(),Xe(this,e,v2,g2,We,{value:1})}}function b2(s){let e,t,n,i,r,o;t=new _2({props:{value:s[0]}});function a(c){s[1](c)}let l={};return s[0]!==void 0&&(l.value=s[0]),i=new h2({props:l}),Lt.push(()=>zt(i,"value",a)),{c(){e=ft("div"),Ee(t.$$.fragment),n=nt(),Ee(i.$$.fragment),this.h()},l(c){e=ht(c,"DIV",{class:!0});var u=dt(e);Ce(t.$$.fragment,u),n=it(u),Ce(i.$$.fragment,u),u.forEach(we),this.h()},h(){Ge(e,"class","bg-zinc-400 dark:bg-zinc-800 p-3 grid grid-cols-[auto_1fr] divide-x-4 divide-zinc-400 dark:divide-zinc-800")},m(c,u){Ve(c,e,u),De(t,e,null),gt(e,n),De(i,e,null),o=!0},p(c,[u]){const f={};u&1&&(f.value=c[0]),t.$set(f);const h={};!r&&u&1&&(r=!0,h.value=c[0],Bt(()=>r=!1)),i.$set(h)},i(c){o||(fe(t.$$.fragment,c),fe(i.$$.fragment,c),o=!0)},o(c){de(t.$$.fragment,c),de(i.$$.fragment,c),o=!1},d(c){c&&we(e),Le(t),Le(i)}}}function x2(s,e,t){let n;function i(r){n=r,t(0,n)}return[n,i]}class w2 extends je{constructor(e){super(),Xe(this,e,x2,b2,We,{})}}function y2(s){let e,t,n,i,r,o,a,l,c,u,f,h,d,_,p,m,g,x;return o=new _h({}),c=new xh({}),f=new e2({}),_=new c2({}),g=new w2({}),{c(){e=ft("meta"),t=nt(),n=ft("div"),i=ft("div"),r=ft("div"),Ee(o.$$.fragment),a=nt(),l=ft("div"),Ee(c.$$.fragment),u=nt(),Ee(f.$$.fragment),h=nt(),d=ft("div"),Ee(_.$$.fragment),p=nt(),m=ft("div"),Ee(g.$$.fragment),this.h()},l(b){const v=If("svelte-1idqgh6",document.head);e=ht(v,"META",{name:!0,content:!0}),v.forEach(we),t=it(b),n=ht(b,"DIV",{class:!0});var y=dt(n);i=ht(y,"DIV",{class:!0});var M=dt(i);r=ht(M,"DIV",{class:!0});var L=dt(r);Ce(o.$$.fragment,L),L.forEach(we),a=it(M),l=ht(M,"DIV",{class:!0});var w=dt(l);Ce(c.$$.fragment,w),w.forEach(we),u=it(M),Ce(f.$$.fragment,M),h=it(M),d=ht(M,"DIV",{class:!0});var A=dt(d);Ce(_.$$.fragment,A),A.forEach(we),M.forEach(we),p=it(y),m=ht(y,"DIV",{class:!0});var R=dt(m);Ce(g.$$.fragment,R),R.forEach(we),y.forEach(we),this.h()},h(){document.title="Geodesicraft",Ge(e,"name","description"),Ge(e,"content","Geodesicraft is a suite of tools for generating and understanding geodesic domes."),Ge(r,"class","min-h-0 max-md:hidden"),Ge(l,"class","md:hidden"),Ge(d,"class","md:hidden"),Ge(i,"class","bg-zinc-100 dark:bg-zinc-600 grid min-h-0 grid-cols-1 grid-rows-[auto_1fr_auto] md:grid-rows-[1fr] md:grid-cols-[auto_1fr]"),Ge(m,"class","max-md:hidden"),Ge(n,"class","h-screen grid md:grid-rows-[1fr_auto]")},m(b,v){gt(document.head,e),Ve(b,t,v),Ve(b,n,v),gt(n,i),gt(i,r),De(o,r,null),gt(i,a),gt(i,l),De(c,l,null),gt(i,u),De(f,i,null),gt(i,h),gt(i,d),De(_,d,null),gt(n,p),gt(n,m),De(g,m,null),x=!0},p:_t,i(b){x||(fe(o.$$.fragment,b),fe(c.$$.fragment,b),fe(f.$$.fragment,b),fe(_.$$.fragment,b),fe(g.$$.fragment,b),x=!0)},o(b){de(o.$$.fragment,b),de(c.$$.fragment,b),de(f.$$.fragment,b),de(_.$$.fragment,b),de(g.$$.fragment,b),x=!1},d(b){we(e),b&&we(t),b&&we(n),Le(o),Le(c),Le(f),Le(_),Le(g)}}}function S2(s){return Nf(),[]}class z2 extends je{constructor(e){super(),Xe(this,e,S2,y2,We,{})}}export{z2 as default};
