import{S as Ze,i as Ke,s as Ye,k as vt,q as Ys,a as lt,l as bt,m as Mt,r as Zs,h as Fe,c as ct,n as ot,b as je,J as St,L as hs,M as Mn,u as fu,N as ao,B as sn,D as du,g as gi,O as Eo,d as _i,f as ge,t as be,K as ft,P as Vt,Q as Jt,e as Hn,w as Re,x as Ie,y as Ue,R as Qt,z as Oe,T as hu,U as fi,V as Et,W as Un,A as Yr,X as jn,F as Wt,G as Ht,H as jt,I as Xt,Y as ff,o as mu,Z as In,_ as vr,$ as ke,C as df,a0 as Co,a1 as hf,a2 as nl,a3 as mf,a4 as pf}from"../../chunks/index-7e9fe5ef.js";import{w as Bt,d as gf,r as _f}from"../../chunks/index-e43361b6.js";const pu=function(s){return Object.fromEntries(Object.entries(s).map(([e,t])=>[e,t.default]))},gu=function(s,e){const t=JSON.parse(window.localStorage.getItem(s));if(t===null)return e;let n={};for(const i of Object.keys(e))t[i]!==void 0?n[i]=t[i]:n[i]=e[i];return n},oo={axesOverlay:{default:!1,name:"Axes"},darkMode:{default:!1,name:"Dark"},autoRotate:{default:!0,name:"Rotate"}},un={vertexSize:{default:.15,name:"Vertex Size",min:.05,max:1,step:"0.001"},edgeThickness:{default:.05,name:"Edge Thickness",min:.01,max:.5,step:.01}},Hs=Bt(gu("viewerSettings",pu(oo)));Hs.subscribe(s=>{window.localStorage.setItem("viewerSettings",JSON.stringify(s))});const Ri=Bt(gu("domeSettings",pu(un)));Ri.subscribe(s=>{window.localStorage.setItem("domeSettings",JSON.stringify(s))});const Ks=Bt({edges:[],vertices:[],faces:[]}),xa=function(s,e,t){const n=s*Math.sin(e)*Math.cos(t),i=s*Math.sin(e)*Math.sin(t),r=s*Math.cos(e);return[n,i,r]},vf=function(){return{sphericalVertices:[[1,Math.PI*.5,Math.PI*.5],[1,Math.PI*2/10*0,2],[1,Math.PI*2/10*1,1],[1,Math.PI*.5,Math.PI*1.5]],sphericalEdges:[],sphericalFaces:[]}};function bf(){const s=vf(),t=s.sphericalVertices.map(a=>xa(...a)),i=s.sphericalEdges.map(a=>a.map(l=>xa(...l))),o=s.sphericalFaces.map(a=>a.map(l=>xa(...l)));Ks.set({vertices:t,edges:i,faces:o})}function xf(s){let e,t,n,i,r,o,a,l,c,u;return{c(){e=vt("label"),t=vt("div"),n=vt("span"),i=Ys(s[1]),r=lt(),o=vt("input"),a=lt(),l=vt("input"),this.h()},l(f){e=bt(f,"LABEL",{class:!0});var d=Mt(e);t=bt(d,"DIV",{class:!0});var h=Mt(t);n=bt(h,"SPAN",{});var b=Mt(n);i=Zs(b,s[1]),b.forEach(Fe),r=ct(h),o=bt(h,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),h.forEach(Fe),a=ct(d),l=bt(d,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),d.forEach(Fe),this.h()},h(){ot(o,"type","number"),ot(o,"min",s[2]),ot(o,"max",s[3]),ot(o,"step",s[4]),ot(o,"class","svelte-fxjw1c"),ot(t,"class","svelte-fxjw1c"),ot(l,"type","range"),ot(l,"min",s[2]),ot(l,"max",s[3]),ot(l,"step",s[4]),ot(l,"class","svelte-fxjw1c"),ot(e,"class","svelte-fxjw1c")},m(f,d){je(f,e,d),St(e,t),St(t,n),St(n,i),St(t,r),St(t,o),hs(o,s[0]),St(e,a),St(e,l),hs(l,s[0]),c||(u=[Mn(o,"input",s[5]),Mn(l,"change",s[6]),Mn(l,"input",s[6])],c=!0)},p(f,[d]){d&2&&fu(i,f[1]),d&4&&ot(o,"min",f[2]),d&8&&ot(o,"max",f[3]),d&16&&ot(o,"step",f[4]),d&1&&ao(o.value)!==f[0]&&hs(o,f[0]),d&4&&ot(l,"min",f[2]),d&8&&ot(l,"max",f[3]),d&16&&ot(l,"step",f[4]),d&1&&hs(l,f[0])},i:sn,o:sn,d(f){f&&Fe(e),c=!1,du(u)}}}function yf(s,e,t){let{name:n}=e,{value:i}=e,{min:r}=e,{max:o}=e,{step:a}=e;function l(){i=ao(this.value),t(0,i)}function c(){i=ao(this.value),t(0,i)}return s.$$set=u=>{"name"in u&&t(1,n=u.name),"value"in u&&t(0,i=u.value),"min"in u&&t(2,r=u.min),"max"in u&&t(3,o=u.max),"step"in u&&t(4,a=u.step)},[i,n,r,o,a,l,c]}class _u extends Ze{constructor(e){super(),Ke(this,e,yf,xf,Ye,{name:1,value:0,min:2,max:3,step:4})}}function il(s,e,t){const n=s.slice();return n[2]=e[t][0],n[3]=e[t][1],n[4]=e,n[5]=t,n}function rl(s,e){let t,n,i,r;function o(l){e[1](l,e[2])}let a={name:e[3].name,min:e[3].min,max:e[3].max,step:e[3].step};return e[0][e[2]]!==void 0&&(a.value=e[0][e[2]]),n=new _u({props:a}),Vt.push(()=>Jt(n,"value",o)),{key:s,first:null,c(){t=Hn(),Re(n.$$.fragment),this.h()},l(l){t=Hn(),Ie(n.$$.fragment,l),this.h()},h(){this.first=t},m(l,c){je(l,t,c),Ue(n,l,c),r=!0},p(l,c){e=l;const u={};!i&&c&1&&(i=!0,u.value=e[0][e[2]],Qt(()=>i=!1)),n.$set(u)},i(l){r||(ge(n.$$.fragment,l),r=!0)},o(l){be(n.$$.fragment,l),r=!1},d(l){l&&Fe(t),Oe(n,l)}}}function wf(s){let e,t,n=[],i=new Map,r,o=Object.entries(un);const a=l=>l[2];for(let l=0;l<o.length;l+=1){let c=il(s,o,l),u=a(c);i.set(u,n[l]=rl(u,c))}return{c(){e=vt("div"),t=vt("div");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=bt(l,"DIV",{class:!0});var c=Mt(e);t=bt(c,"DIV",{class:!0});var u=Mt(t);for(let f=0;f<n.length;f+=1)n[f].l(u);u.forEach(Fe),c.forEach(Fe),this.h()},h(){ot(t,"class","inner svelte-1bn7qdr"),ot(e,"class","outer svelte-1bn7qdr")},m(l,c){je(l,e,c),St(e,t);for(let u=0;u<n.length;u+=1)n[u].m(t,null);r=!0},p(l,[c]){c&1&&(o=Object.entries(un),gi(),n=Eo(n,c,a,1,l,o,i,t,hu,rl,null,il),_i())},i(l){if(!r){for(let c=0;c<o.length;c+=1)ge(n[c]);r=!0}},o(l){for(let c=0;c<n.length;c+=1)be(n[c]);r=!1},d(l){l&&Fe(e);for(let c=0;c<n.length;c+=1)n[c].d()}}}function Sf(s,e,t){let n;ft(s,Ri,r=>t(0,n=r));function i(r,o){s.$$.not_equal(n[o],r)&&(n[o]=r,Ri.set(n))}return[n,i]}class Mf extends Ze{constructor(e){super(),Ke(this,e,Sf,wf,Ye,{})}}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Do="148",Xi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tf=0,sl=1,Af=2,vu=1,bu=2,Vr=3,hi=0,xn=1,br=2,ms=3,di=0,dr=1,al=2,ol=3,ll=4,Ef=5,cr=100,Cf=101,Df=102,cl=103,ul=104,Lf=200,Pf=201,Rf=202,If=203,xu=204,yu=205,Uf=206,Of=207,Ff=208,kf=209,zf=210,Nf=0,Bf=1,Gf=2,lo=3,Vf=4,Wf=5,Hf=6,jf=7,Lo=0,Xf=1,qf=2,Wn=0,Yf=1,Zf=2,Kf=3,wu=4,Jf=5,Su=300,mr=301,pr=302,co=303,uo=304,Js=306,fo=1e3,On=1001,ho=1002,rn=1003,fl=1004,ya=1005,fn=1006,Qf=1007,Zr=1008,Ii=1009,$f=1010,ed=1011,Mu=1012,td=1013,Ai=1014,Ei=1015,Kr=1016,nd=1017,id=1018,hr=1020,rd=1021,sd=1022,Fn=1023,ad=1024,od=1025,Di=1026,gr=1027,ld=1028,cd=1029,ud=1030,fd=1031,dd=1033,wa=33776,Sa=33777,Ma=33778,Ta=33779,dl=35840,hl=35841,ml=35842,pl=35843,hd=36196,gl=37492,_l=37496,vl=37808,bl=37809,xl=37810,yl=37811,wl=37812,Sl=37813,Ml=37814,Tl=37815,Al=37816,El=37817,Cl=37818,Dl=37819,Ll=37820,Pl=37821,Rl=36492,mi=3e3,gt=3001,md=3200,Tu=3201,Po=0,pd=1,Gn="srgb",Jr="srgb-linear",Aa=7680,gd=519,mo=35044,Il="300 es",po=1035;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ul=1234567;const Hr=Math.PI/180,js=180/Math.PI;function ei(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[s&255]+Yt[s>>8&255]+Yt[s>>16&255]+Yt[s>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Zt(s,e,t){return Math.max(e,Math.min(t,s))}function Ro(s,e){return(s%e+e)%e}function _d(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function vd(s,e,t){return s!==e?(t-s)/(e-s):0}function jr(s,e,t){return(1-t)*s+t*e}function bd(s,e,t,n){return jr(s,e,1-Math.exp(-t*n))}function xd(s,e=1){return e-Math.abs(Ro(s,e*2)-e)}function yd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function wd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Sd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Md(s,e){return s+Math.random()*(e-s)}function Td(s){return s*(.5-Math.random())}function Ad(s){s!==void 0&&(Ul=s);let e=Ul+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ed(s){return s*Hr}function Cd(s){return s*js}function go(s){return(s&s-1)===0&&s!==0}function Dd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Xs(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ld(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),h=r((n-e)/2),b=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*f,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*f,a*c);break;case"ZXZ":s.set(l*f,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*b,l*h,a*c);break;case"YXY":s.set(l*h,a*u,l*b,a*c);break;case"ZYZ":s.set(l*b,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function $n(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Pd=Object.freeze({__proto__:null,DEG2RAD:Hr,RAD2DEG:js,generateUUID:ei,clamp:Zt,euclideanModulo:Ro,mapLinear:_d,inverseLerp:vd,lerp:jr,damp:bd,pingpong:xd,smoothstep:yd,smootherstep:wd,randInt:Sd,randFloat:Md,randFloatSpread:Td,seededRandom:Ad,degToRad:Ed,radToDeg:Cd,isPowerOfTwo:go,ceilPowerOfTwo:Dd,floorPowerOfTwo:Xs,setQuaternionFromProperEuler:Ld,normalize:mt,denormalize:$n});class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hn{constructor(){hn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],b=n[8],p=i[0],m=i[3],g=i[6],_=i[1],x=i[4],v=i[7],w=i[2],M=i[5],P=i[8];return r[0]=o*p+a*_+l*w,r[3]=o*m+a*x+l*M,r[6]=o*g+a*v+l*P,r[1]=c*p+u*_+f*w,r[4]=c*m+u*x+f*M,r[7]=c*g+u*v+f*P,r[2]=d*p+h*_+b*w,r[5]=d*m+h*x+b*M,r[8]=d*g+h*v+b*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,h=c*r-o*l,b=t*f+n*d+i*h;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/b;return e[0]=f*p,e[1]=(i*c-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(u*t-i*l)*p,e[5]=(i*r-a*t)*p,e[6]=h*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ea.makeScale(e,t)),this}rotate(e){return this.premultiply(Ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ea.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ea=new hn;function Au(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Qr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ca={[Gn]:{[Jr]:Li},[Jr]:{[Gn]:Gs}},en={legacyMode:!0,get workingColorSpace(){return Jr},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Ca[e]&&Ca[e][t]!==void 0){const n=Ca[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dt={r:0,g:0,b:0},Ln={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Da(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function gs(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,en.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=en.workingColorSpace){return this.r=e,this.g=t,this.b=n,en.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=en.workingColorSpace){if(e=Ro(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Da(o,r,e+1/3),this.g=Da(o,r,e),this.b=Da(o,r,e-1/3)}return en.toWorkingColorSpace(this,i),this}setStyle(e,t=Gn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,en.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,en.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,en.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,en.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Gn){const n=Eu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return en.fromWorkingColorSpace(gs(this,Dt),e),Zt(Dt.r*255,0,255)<<16^Zt(Dt.g*255,0,255)<<8^Zt(Dt.b*255,0,255)<<0}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=en.workingColorSpace){en.fromWorkingColorSpace(gs(this,Dt),t);const n=Dt.r,i=Dt.g,r=Dt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=en.workingColorSpace){return en.fromWorkingColorSpace(gs(this,Dt),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Gn){return en.fromWorkingColorSpace(gs(this,Dt),e),e!==Gn?`color(${e} ${Dt.r} ${Dt.g} ${Dt.b})`:`rgb(${Dt.r*255|0},${Dt.g*255|0},${Dt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ln),Ln.h+=e,Ln.s+=t,Ln.l+=n,this.setHSL(Ln.h,Ln.s,Ln.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(ps);const n=jr(Ln.h,ps.h,t),i=jr(Ln.s,ps.s,t),r=jr(Ln.l,ps.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}tt.NAMES=Eu;let Yi;class Cu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=Qr("canvas")),Yi.width=e.width,Yi.height=e.height;const n=Yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Du{constructor(e=null){this.isSource=!0,this.uuid=ei(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(La(i[o].image)):r.push(La(i[o]))}else r=La(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function La(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Cu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rd=0;class an extends Oi{constructor(e=an.DEFAULT_IMAGE,t=an.DEFAULT_MAPPING,n=On,i=On,r=fn,o=Zr,a=Fn,l=Ii,c=an.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=ei(),this.name="",this.source=new Du(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new hn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fo:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fo:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Su;an.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,i=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],b=l[9],p=l[2],m=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-p)<.01&&Math.abs(b-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+p)<.1&&Math.abs(b+m)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(h+1)/2,w=(g+1)/2,M=(u+d)/4,P=(f+p)/4,y=(b+m)/4;return x>v&&x>w?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=M/n,r=P/n):v>w?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=M/i,r=y/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=P/r,i=y/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-b)*(m-b)+(f-p)*(f-p)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-b)/_,this.y=(f-p)/_,this.z=(d-u)/_,this.w=Math.acos((c+h+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pi extends Oi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new an(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:fn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Du(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lu extends an{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Id extends an{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=r[o+0],h=r[o+1],b=r[o+2],p=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=b,e[t+3]=p;return}if(f!==p||l!==d||c!==h||u!==b){let m=1-a;const g=l*d+c*h+u*b+f*p,_=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const w=Math.sqrt(x),M=Math.atan2(w,g*_);m=Math.sin(m*M)/w,a=Math.sin(a*M)/w}const v=a*_;if(l=l*m+d*v,c=c*m+h*v,u=u*m+b*v,f=f*m+p*v,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[o],d=r[o+1],h=r[o+2],b=r[o+3];return e[t]=a*b+u*f+l*h-c*d,e[t+1]=l*b+u*d+c*f-a*h,e[t+2]=c*b+u*h+a*d-l*f,e[t+3]=u*b-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(r/2),d=l(n/2),h=l(i/2),b=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*h*b,this._y=c*h*f-d*u*b,this._z=c*u*b+d*h*f,this._w=c*u*f-d*h*b;break;case"YXZ":this._x=d*u*f+c*h*b,this._y=c*h*f-d*u*b,this._z=c*u*b-d*h*f,this._w=c*u*f+d*h*b;break;case"ZXY":this._x=d*u*f-c*h*b,this._y=c*h*f+d*u*b,this._z=c*u*b+d*h*f,this._w=c*u*f-d*h*b;break;case"ZYX":this._x=d*u*f-c*h*b,this._y=c*h*f+d*u*b,this._z=c*u*b-d*h*f,this._w=c*u*f+d*h*b;break;case"YZX":this._x=d*u*f+c*h*b,this._y=c*h*f+d*u*b,this._z=c*u*b-d*h*f,this._w=c*u*f-d*h*b;break;case"XZY":this._x=d*u*f-c*h*b,this._y=c*h*f-d*u*b,this._z=c*u*b+d*h*f,this._w=c*u*f+d*h*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-i)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(i+o)/h,this._z=(r+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(r-c)/h,this._x=(i+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(o-i)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ol.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ol.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-r*i,f=l*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=c*l+d*-r+u*-a-f*-o,this.y=u*l+d*-o+f*-r-c*-a,this.z=f*l+d*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pa.copy(this).projectOnVector(e),this.sub(Pa)}reflect(e){return this.sub(Pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pa=new K,Ol=new Ui;class ni{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],d=e[l+2];u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>r&&(r=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),d=e.getZ(l);u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>r&&(r=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)bi.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(bi)}else n.boundingBox===null&&n.computeBoundingBox(),Ra.copy(n.boundingBox),Ra.applyMatrix4(e.matrixWorld),this.union(Ra);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),_s.subVectors(this.max,Ur),Zi.subVectors(e.a,Ur),Ki.subVectors(e.b,Ur),Ji.subVectors(e.c,Ur),ai.subVectors(Ki,Zi),oi.subVectors(Ji,Ki),xi.subVectors(Zi,Ji);let t=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-xi.z,xi.y,ai.z,0,-ai.x,oi.z,0,-oi.x,xi.z,0,-xi.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-xi.y,xi.x,0];return!Ia(t,Zi,Ki,Ji,_s)||(t=[1,0,0,0,1,0,0,0,1],!Ia(t,Zi,Ki,Ji,_s))?!1:(vs.crossVectors(ai,oi),t=[vs.x,vs.y,vs.z],Ia(t,Zi,Ki,Ji,_s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return bi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new K,new K,new K,new K,new K,new K,new K,new K],bi=new K,Ra=new ni,Zi=new K,Ki=new K,Ji=new K,ai=new K,oi=new K,xi=new K,Ur=new K,_s=new K,vs=new K,yi=new K;function Ia(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){yi.fromArray(s,r);const a=i.x*Math.abs(yi.x)+i.y*Math.abs(yi.y)+i.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),u=n.dot(yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ud=new ni,Or=new K,Ua=new K;class Fi{constructor(e=new K,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ud.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);const t=Or.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Or,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(Ua)),this.expandByPoint(Or.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new K,Oa=new K,bs=new K,li=new K,Fa=new K,xs=new K,ka=new K;class Io{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.direction).multiplyScalar(t).add(this.origin),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Oa.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Oa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(bs),a=li.dot(this.direction),l=-li.dot(bs),c=li.lengthSq(),u=Math.abs(1-o*o);let f,d,h,b;if(u>0)if(f=o*l-a,d=o*a-l,b=r*u,f>=0)if(d>=-b)if(d<=b){const p=1/u;f*=p,d*=p,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-b?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=b?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(bs).multiplyScalar(d).add(Oa),h}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,i,r){Fa.subVectors(t,e),xs.subVectors(n,e),ka.crossVectors(Fa,xs);let o=this.direction.dot(ka),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const l=a*this.direction.dot(xs.crossVectors(li,xs));if(l<0)return null;const c=a*this.direction.dot(Fa.cross(li));if(c<0||l+c>o)return null;const u=-a*li.dot(ka);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,l,c,u,f,d,h,b,p,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=d,g[3]=h,g[7]=b,g[11]=p,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,h=o*f,b=a*u,p=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+b*c,t[5]=d-p*c,t[9]=-a*l,t[2]=p-d*c,t[6]=b+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,b=c*u,p=c*f;t[0]=d+p*a,t[4]=b*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-b,t[6]=p+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,b=c*u,p=c*f;t[0]=d-p*a,t[4]=-o*f,t[8]=b+h*a,t[1]=h+b*a,t[5]=o*u,t[9]=p-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,b=a*u,p=a*f;t[0]=l*u,t[4]=b*c-h,t[8]=d*c+p,t[1]=l*f,t[5]=p*c+d,t[9]=h*c-b,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,b=a*l,p=a*c;t[0]=l*u,t[4]=p-d*f,t[8]=b*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+b,t[10]=d-p*f}else if(e.order==="XZY"){const d=o*l,h=o*c,b=a*l,p=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+p,t[5]=o*u,t[9]=h*f-b,t[2]=b*f-h,t[6]=a*u,t[10]=p*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Od,e,Fd)}lookAt(e,t,n){const i=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),ci.crossVectors(n,_n),ci.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),ci.crossVectors(n,_n)),ci.normalize(),ys.crossVectors(_n,ci),i[0]=ci.x,i[4]=ys.x,i[8]=_n.x,i[1]=ci.y,i[5]=ys.y,i[9]=_n.y,i[2]=ci.z,i[6]=ys.z,i[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],b=n[2],p=n[6],m=n[10],g=n[14],_=n[3],x=n[7],v=n[11],w=n[15],M=i[0],P=i[4],y=i[8],A=i[12],R=i[1],N=i[5],U=i[9],C=i[13],I=i[2],D=i[6],B=i[10],ee=i[14],J=i[3],W=i[7],H=i[11],S=i[15];return r[0]=o*M+a*R+l*I+c*J,r[4]=o*P+a*N+l*D+c*W,r[8]=o*y+a*U+l*B+c*H,r[12]=o*A+a*C+l*ee+c*S,r[1]=u*M+f*R+d*I+h*J,r[5]=u*P+f*N+d*D+h*W,r[9]=u*y+f*U+d*B+h*H,r[13]=u*A+f*C+d*ee+h*S,r[2]=b*M+p*R+m*I+g*J,r[6]=b*P+p*N+m*D+g*W,r[10]=b*y+p*U+m*B+g*H,r[14]=b*A+p*C+m*ee+g*S,r[3]=_*M+x*R+v*I+w*J,r[7]=_*P+x*N+v*D+w*W,r[11]=_*y+x*U+v*B+w*H,r[15]=_*A+x*C+v*ee+w*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],b=e[3],p=e[7],m=e[11],g=e[15];return b*(+r*l*f-i*c*f-r*a*d+n*c*d+i*a*h-n*l*h)+p*(+t*l*h-t*c*d+r*o*d-i*o*h+i*c*u-r*l*u)+m*(+t*c*f-t*a*h-r*o*f+n*o*h+r*a*u-n*c*u)+g*(-i*a*u-t*l*f+t*a*d+i*o*f-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],b=e[12],p=e[13],m=e[14],g=e[15],_=f*m*c-p*d*c+p*l*h-a*m*h-f*l*g+a*d*g,x=b*d*c-u*m*c-b*l*h+o*m*h+u*l*g-o*d*g,v=u*p*c-b*f*c+b*a*h-o*p*h-u*a*g+o*f*g,w=b*f*l-u*p*l-b*a*d+o*p*d+u*a*m-o*f*m,M=t*_+n*x+i*v+r*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/M;return e[0]=_*P,e[1]=(p*d*r-f*m*r-p*i*h+n*m*h+f*i*g-n*d*g)*P,e[2]=(a*m*r-p*l*r+p*i*c-n*m*c-a*i*g+n*l*g)*P,e[3]=(f*l*r-a*d*r-f*i*c+n*d*c+a*i*h-n*l*h)*P,e[4]=x*P,e[5]=(u*m*r-b*d*r+b*i*h-t*m*h-u*i*g+t*d*g)*P,e[6]=(b*l*r-o*m*r-b*i*c+t*m*c+o*i*g-t*l*g)*P,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*h+t*l*h)*P,e[8]=v*P,e[9]=(b*f*r-u*p*r-b*n*h+t*p*h+u*n*g-t*f*g)*P,e[10]=(o*p*r-b*a*r+b*n*c-t*p*c-o*n*g+t*a*g)*P,e[11]=(u*a*r-o*f*r-u*n*c+t*f*c+o*n*h-t*a*h)*P,e[12]=w*P,e[13]=(u*p*i-b*f*i+b*n*d-t*p*d-u*n*m+t*f*m)*P,e[14]=(b*a*i-o*p*i-b*n*l+t*p*l+o*n*m-t*a*m)*P,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*d+t*a*d)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,d=r*c,h=r*u,b=r*f,p=o*u,m=o*f,g=a*f,_=l*c,x=l*u,v=l*f,w=n.x,M=n.y,P=n.z;return i[0]=(1-(p+g))*w,i[1]=(h+v)*w,i[2]=(b-x)*w,i[3]=0,i[4]=(h-v)*M,i[5]=(1-(d+g))*M,i[6]=(m+_)*M,i[7]=0,i[8]=(b+x)*P,i[9]=(m-_)*P,i[10]=(1-(d+p))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Qi.set(i[0],i[1],i[2]).length();const o=Qi.set(i[4],i[5],i[6]).length(),a=Qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Pn.copy(this);const c=1/r,u=1/o,f=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,t.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d=-(o+r)/(o-r),h=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=h,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-r),f=(t+e)*l,d=(n+i)*c,h=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-h,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new K,Pn=new ht,Od=new K(0,0,0),Fd=new K(1,1,1),ci=new K,ys=new K,_n=new K,Fl=new ht,kl=new Ui;class $r{constructor(e=0,t=0,n=0,i=$r.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kl.setFromEuler(this),this.setFromQuaternion(kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}$r.DefaultOrder="XYZ";$r.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Uo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kd=0;const zl=new K,$i=new Ui,Zn=new ht,ws=new K,Fr=new K,zd=new K,Nd=new Ui,Nl=new K(1,0,0),Bl=new K(0,1,0),Gl=new K(0,0,1),Bd={type:"added"},Vl={type:"removed"};class pt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DefaultUp.clone();const e=new K,t=new $r,n=new Ui,i=new K(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new hn}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=pt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=pt.DefaultMatrixWorldAutoUpdate,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Nl,e)}rotateY(e){return this.rotateOnAxis(Bl,e)}rotateZ(e){return this.rotateOnAxis(Gl,e)}translateOnAxis(e,t){return zl.copy(e).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nl,e)}translateY(e){return this.translateOnAxis(Bl,e)}translateZ(e){return this.translateOnAxis(Gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ws.copy(e):ws.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Fr,ws,this.up):Zn.lookAt(ws,Fr,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(Zn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Vl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,zd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Nd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),b=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),b.length>0&&(n.nodes=b)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DefaultUp=new K(0,1,0);pt.DefaultMatrixAutoUpdate=!0;pt.DefaultMatrixWorldAutoUpdate=!0;const Rn=new K,Kn=new K,za=new K,Jn=new K,er=new K,tr=new K,Wl=new K,Na=new K,Ba=new K,Ga=new K;class Qn{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Rn.subVectors(e,t),i.cross(Rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Rn.subVectors(i,t),Kn.subVectors(n,t),za.subVectors(e,t);const o=Rn.dot(Rn),a=Rn.dot(Kn),l=Rn.dot(za),c=Kn.dot(Kn),u=Kn.dot(za),f=o*c-a*a;if(f===0)return r.set(-2,-1,-1);const d=1/f,h=(c*l-a*u)*d,b=(o*u-a*l)*d;return r.set(1-h-b,b,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Jn),Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Jn),l.set(0,0),l.addScaledVector(r,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l}static isFrontFacing(e,t,n,i){return Rn.subVectors(n,t),Kn.subVectors(e,t),Rn.cross(Kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Rn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Qn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;er.subVectors(i,n),tr.subVectors(r,n),Na.subVectors(e,n);const l=er.dot(Na),c=tr.dot(Na);if(l<=0&&c<=0)return t.copy(n);Ba.subVectors(e,i);const u=er.dot(Ba),f=tr.dot(Ba);if(u>=0&&f<=u)return t.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(er,o);Ga.subVectors(e,r);const h=er.dot(Ga),b=tr.dot(Ga);if(b>=0&&h<=b)return t.copy(r);const p=h*c-l*b;if(p<=0&&c>=0&&b<=0)return a=c/(c-b),t.copy(n).addScaledVector(tr,a);const m=u*b-h*f;if(m<=0&&f-u>=0&&h-b>=0)return Wl.subVectors(r,i),a=(f-u)/(f-u+(h-b)),t.copy(i).addScaledVector(Wl,a);const g=1/(m+p+d);return o=p*g,a=d*g,t.copy(n).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Gd=0;class ki extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=dr,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=xu,this.blendDst=yu,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Aa,this.stencilZFail=Aa,this.stencilZPass=Aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Oo extends ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new K,Ss=new Ve;class yn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$n(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$n(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$n(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Pu extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ru extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Vd=0;const Sn=new ht,Va=new pt,nr=new K,vn=new ni,kr=new ni,Ut=new K;class on extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Au(e)?Ru:Pu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new hn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Va.lookAt(e),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(vn.min,kr.min),vn.expandByPoint(Ut),Ut.addVectors(vn.max,kr.max),vn.expandByPoint(Ut)):(vn.expandByPoint(kr.min),vn.expandByPoint(kr.max))}vn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(nr.fromBufferAttribute(e,c),Ut.add(nr)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new K,u[R]=new K;const f=new K,d=new K,h=new K,b=new Ve,p=new Ve,m=new Ve,g=new K,_=new K;function x(R,N,U){f.fromArray(i,R*3),d.fromArray(i,N*3),h.fromArray(i,U*3),b.fromArray(o,R*2),p.fromArray(o,N*2),m.fromArray(o,U*2),d.sub(f),h.sub(f),p.sub(b),m.sub(b);const C=1/(p.x*m.y-m.x*p.y);isFinite(C)&&(g.copy(d).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(C),_.copy(h).multiplyScalar(p.x).addScaledVector(d,-m.x).multiplyScalar(C),c[R].add(g),c[N].add(g),c[U].add(g),u[R].add(_),u[N].add(_),u[U].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let R=0,N=v.length;R<N;++R){const U=v[R],C=U.start,I=U.count;for(let D=C,B=C+I;D<B;D+=3)x(n[D+0],n[D+1],n[D+2])}const w=new K,M=new K,P=new K,y=new K;function A(R){P.fromArray(r,R*3),y.copy(P);const N=c[R];w.copy(N),w.sub(P.multiplyScalar(P.dot(N))).normalize(),M.crossVectors(y,N);const C=M.dot(u[R])<0?-1:1;l[R*4]=w.x,l[R*4+1]=w.y,l[R*4+2]=w.z,l[R*4+3]=C}for(let R=0,N=v.length;R<N;++R){const U=v[R],C=U.start,I=U.count;for(let D=C,B=C+I;D<B;D+=3)A(n[D+0]),A(n[D+1]),A(n[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const i=new K,r=new K,o=new K,a=new K,l=new K,c=new K,u=new K,f=new K;if(e)for(let d=0,h=e.count;d<h;d+=3){const b=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,b),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),a.fromBufferAttribute(n,b),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(b,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,b=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?h=l[p]*a.data.stride+a.offset:h=l[p]*u;for(let g=0;g<u;g++)d[b++]=c[h++]}return new yn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hl=new ht,ir=new Io,Wa=new Fi,zr=new K,Nr=new K,Br=new K,Ha=new K,Ms=new K,Ts=new Ve,As=new Ve,Es=new Ve,ja=new K,Cs=new K;let Kt=class extends pt{constructor(e=new on,t=new Oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ms.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Ha.fromBufferAttribute(f,e),o?Ms.addScaledVector(Ha,u):Ms.addScaledVector(Ha.sub(t),u))}t.add(Ms)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(r),e.ray.intersectsSphere(Wa)===!1)||(Hl.copy(r).invert(),ir.copy(e.ray).applyMatrix4(Hl),n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let h=0,b=f.length;h<b;h++){const p=f[h],m=i[p.materialIndex],g=Math.max(p.start,d.start),_=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=g,v=_;x<v;x+=3){const w=a.getX(x),M=a.getX(x+1),P=a.getX(x+2);o=Ds(this,m,e,ir,c,u,w,M,P),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const h=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let p=h,m=b;p<m;p+=3){const g=a.getX(p),_=a.getX(p+1),x=a.getX(p+2);o=Ds(this,i,e,ir,c,u,g,_,x),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let h=0,b=f.length;h<b;h++){const p=f[h],m=i[p.materialIndex],g=Math.max(p.start,d.start),_=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=g,v=_;x<v;x+=3){const w=x,M=x+1,P=x+2;o=Ds(this,m,e,ir,c,u,w,M,P),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const h=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let p=h,m=b;p<m;p+=3){const g=p,_=p+1,x=p+2;o=Ds(this,i,e,ir,c,u,g,_,x),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}};function Wd(s,e,t,n,i,r,o,a){let l;if(e.side===xn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===hi,a),l===null)return null;Cs.copy(a),Cs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Cs);return c<t.near||c>t.far?null:{distance:c,point:Cs.clone(),object:s}}function Ds(s,e,t,n,i,r,o,a,l){s.getVertexPosition(o,zr),s.getVertexPosition(a,Nr),s.getVertexPosition(l,Br);const c=Wd(s,e,t,n,zr,Nr,Br,ja);if(c){i&&(Ts.fromBufferAttribute(i,o),As.fromBufferAttribute(i,a),Es.fromBufferAttribute(i,l),c.uv=Qn.getUV(ja,zr,Nr,Br,Ts,As,Es,new Ve)),r&&(Ts.fromBufferAttribute(r,o),As.fromBufferAttribute(r,a),Es.fromBufferAttribute(r,l),c.uv2=Qn.getUV(ja,zr,Nr,Br,Ts,As,Es,new Ve));const u={a:o,b:a,c:l,normal:new K,materialIndex:0};Qn.getNormal(zr,Nr,Br,u.normal),c.face=u}return c}class es extends on{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;b("z","y","x",-1,-1,n,t,e,o,r,0),b("z","y","x",1,-1,n,t,-e,o,r,1),b("x","z","y",1,1,e,n,t,i,o,2),b("x","z","y",1,-1,e,n,-t,i,o,3),b("x","y","z",1,-1,e,t,n,i,r,4),b("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(f,2));function b(p,m,g,_,x,v,w,M,P,y,A){const R=v/P,N=w/y,U=v/2,C=w/2,I=M/2,D=P+1,B=y+1;let ee=0,J=0;const W=new K;for(let H=0;H<B;H++){const S=H*N-C;for(let L=0;L<D;L++){const Q=L*R-U;W[p]=Q*_,W[m]=S*x,W[g]=I,c.push(W.x,W.y,W.z),W[p]=0,W[m]=0,W[g]=M>0?1:-1,u.push(W.x,W.y,W.z),f.push(L/P),f.push(1-H/y),ee+=1}}for(let H=0;H<y;H++)for(let S=0;S<P;S++){const L=d+S+D*H,Q=d+S+D*(H+1),X=d+(S+1)+D*(H+1),q=d+(S+1)+D*H;l.push(L,Q,q),l.push(Q,X,q),J+=6}a.addGroup(h,J,A),h+=J,d+=ee}}static fromJSON(e){return new es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function nn(s){const e={};for(let t=0;t<s.length;t++){const n=_r(s[t]);for(const i in n)e[i]=n[i]}return e}function Hd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Iu(s){return s.getRenderTarget()===null&&s.outputEncoding===gt?Gn:Jr}const ts={clone:_r,merge:nn};var jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=Xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=Hd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fo extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}let bn=class extends Fo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};const rr=-90,sr=1;class qd extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new bn(rr,sr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new bn(rr,sr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new bn(rr,sr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new bn(rr,sr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new bn(rr,sr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new bn(rr,sr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Wn,e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Uu extends an{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:mr,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yd extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Uu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new es(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:di});r.uniforms.tEquirect.value=t;const o=new Kt(i,r),a=t.minFilter;return t.minFilter===Zr&&(t.minFilter=fn),new qd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Xa=new K,Zd=new K,Kd=new hn;class Si{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Xa.subVectors(n,t).cross(Zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Xa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kd.getNormalMatrix(e),i=this.coplanarPoint(Xa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Fi,Ls=new K;class Qs{constructor(e=new Si,t=new Si,n=new Si,i=new Si,r=new Si,o=new Si){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],d=n[8],h=n[9],b=n[10],p=n[11],m=n[12],g=n[13],_=n[14],x=n[15];return t[0].setComponents(a-i,f-l,p-d,x-m).normalize(),t[1].setComponents(a+i,f+l,p+d,x+m).normalize(),t[2].setComponents(a+r,f+c,p+h,x+g).normalize(),t[3].setComponents(a-r,f-c,p-h,x-g).normalize(),t[4].setComponents(a-o,f-u,p-b,x-_).normalize(),t[5].setComponents(a+o,f+u,p+b,x+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ls.x=i.normal.x>0?e.max.x:e.min.x,Ls.y=i.normal.y>0?e.max.y:e.min.y,Ls.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ou(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Jd(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,d=c.usage,h=s.createBuffer();s.bindBuffer(u,h),s.bufferData(u,f,d),c.onUploadCallback();let b;if(f instanceof Float32Array)b=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)b=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=5123;else if(f instanceof Int16Array)b=5122;else if(f instanceof Uint32Array)b=5125;else if(f instanceof Int32Array)b=5124;else if(f instanceof Int8Array)b=5120;else if(f instanceof Uint8Array)b=5121;else if(f instanceof Uint8ClampedArray)b=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:h,type:b,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const d=u.array,h=u.updateRange;s.bindBuffer(f,c),h.count===-1?s.bufferSubData(f,0,d):(t?s.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count):s.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class $s extends on{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,d=t/l,h=[],b=[],p=[],m=[];for(let g=0;g<u;g++){const _=g*d-o;for(let x=0;x<c;x++){const v=x*f-r;b.push(v,-_,0),p.push(0,0,1),m.push(x/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const x=_+c*g,v=_+c*(g+1),w=_+1+c*(g+1),M=_+1+c*g;h.push(x,v,M),h.push(v,w,M)}this.setIndex(h),this.setAttribute("position",new Gt(b,3)),this.setAttribute("normal",new Gt(p,3)),this.setAttribute("uv",new Gt(m,2))}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,th=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ih=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rh="vec3 transformed = vec3( position );",sh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ah=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,oh=`#ifdef USE_IRIDESCENCE
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
#endif`,lh=`#ifdef USE_BUMPMAP
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
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_h=`#define PI 3.141592653589793
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
}`,vh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bh=`vec3 transformedNormal = objectNormal;
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
#endif`,xh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Th=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ah=`#ifdef USE_ENVMAP
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
#endif`,Eh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ch=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lh=`#ifdef USE_ENVMAP
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
#endif`,Ph=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ih=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oh=`#ifdef USE_GRADIENTMAP
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
}`,Fh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bh=`uniform bool receiveShadow;
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
#endif`,Gh=`#if defined( USE_ENVMAP )
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
#endif`,Vh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xh=`PhysicalMaterial material;
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
#endif`,qh=`struct PhysicalMaterial {
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
}`,Yh=`
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
#endif`,Zh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Jh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$h=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,om=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
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
#endif`,cm=`#ifdef USE_MORPHTARGETS
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
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,dm=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gm=`#ifdef USE_NORMALMAP
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
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rm=`float getShadowMask() {
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Hm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,jm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Xm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,qm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ym=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jm=`uniform sampler2D t2D;
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,np=`#include <common>
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
}`,ip=`#if DEPTH_PACKING == 3200
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
}`,rp=`#define DISTANCE
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
}`,sp=`#define DISTANCE
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
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lp=`uniform float scale;
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
}`,cp=`uniform vec3 diffuse;
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
}`,up=`#include <common>
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
}`,fp=`uniform vec3 diffuse;
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
}`,dp=`#define LAMBERT
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
}`,hp=`#define LAMBERT
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
}`,mp=`#define MATCAP
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
}`,pp=`#define MATCAP
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
}`,gp=`#define NORMAL
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
}`,_p=`#define NORMAL
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
}`,vp=`#define PHONG
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
}`,bp=`#define PHONG
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
}`,xp=`#define STANDARD
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
}`,yp=`#define STANDARD
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
}`,wp=`#define TOON
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
}`,Sp=`#define TOON
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
}`,Mp=`uniform float size;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ap=`#include <common>
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
}`,Ep=`uniform vec3 color;
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
}`,Cp=`uniform float rotation;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,et={alphamap_fragment:Qd,alphamap_pars_fragment:$d,alphatest_fragment:eh,alphatest_pars_fragment:th,aomap_fragment:nh,aomap_pars_fragment:ih,begin_vertex:rh,beginnormal_vertex:sh,bsdfs:ah,iridescence_fragment:oh,bumpmap_pars_fragment:lh,clipping_planes_fragment:ch,clipping_planes_pars_fragment:uh,clipping_planes_pars_vertex:fh,clipping_planes_vertex:dh,color_fragment:hh,color_pars_fragment:mh,color_pars_vertex:ph,color_vertex:gh,common:_h,cube_uv_reflection_fragment:vh,defaultnormal_vertex:bh,displacementmap_pars_vertex:xh,displacementmap_vertex:yh,emissivemap_fragment:wh,emissivemap_pars_fragment:Sh,encodings_fragment:Mh,encodings_pars_fragment:Th,envmap_fragment:Ah,envmap_common_pars_fragment:Eh,envmap_pars_fragment:Ch,envmap_pars_vertex:Dh,envmap_physical_pars_fragment:Gh,envmap_vertex:Lh,fog_vertex:Ph,fog_pars_vertex:Rh,fog_fragment:Ih,fog_pars_fragment:Uh,gradientmap_pars_fragment:Oh,lightmap_fragment:Fh,lightmap_pars_fragment:kh,lights_lambert_fragment:zh,lights_lambert_pars_fragment:Nh,lights_pars_begin:Bh,lights_toon_fragment:Vh,lights_toon_pars_fragment:Wh,lights_phong_fragment:Hh,lights_phong_pars_fragment:jh,lights_physical_fragment:Xh,lights_physical_pars_fragment:qh,lights_fragment_begin:Yh,lights_fragment_maps:Zh,lights_fragment_end:Kh,logdepthbuf_fragment:Jh,logdepthbuf_pars_fragment:Qh,logdepthbuf_pars_vertex:$h,logdepthbuf_vertex:em,map_fragment:tm,map_pars_fragment:nm,map_particle_fragment:im,map_particle_pars_fragment:rm,metalnessmap_fragment:sm,metalnessmap_pars_fragment:am,morphcolor_vertex:om,morphnormal_vertex:lm,morphtarget_pars_vertex:cm,morphtarget_vertex:um,normal_fragment_begin:fm,normal_fragment_maps:dm,normal_pars_fragment:hm,normal_pars_vertex:mm,normal_vertex:pm,normalmap_pars_fragment:gm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:vm,clearcoat_pars_fragment:bm,iridescence_pars_fragment:xm,output_fragment:ym,packing:wm,premultiplied_alpha_fragment:Sm,project_vertex:Mm,dithering_fragment:Tm,dithering_pars_fragment:Am,roughnessmap_fragment:Em,roughnessmap_pars_fragment:Cm,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:Lm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Rm,skinbase_vertex:Im,skinning_pars_vertex:Um,skinning_vertex:Om,skinnormal_vertex:Fm,specularmap_fragment:km,specularmap_pars_fragment:zm,tonemapping_fragment:Nm,tonemapping_pars_fragment:Bm,transmission_fragment:Gm,transmission_pars_fragment:Vm,uv_pars_fragment:Wm,uv_pars_vertex:Hm,uv_vertex:jm,uv2_pars_fragment:Xm,uv2_pars_vertex:qm,uv2_vertex:Ym,worldpos_vertex:Zm,background_vert:Km,background_frag:Jm,backgroundCube_vert:Qm,backgroundCube_frag:$m,cube_vert:ep,cube_frag:tp,depth_vert:np,depth_frag:ip,distanceRGBA_vert:rp,distanceRGBA_frag:sp,equirect_vert:ap,equirect_frag:op,linedashed_vert:lp,linedashed_frag:cp,meshbasic_vert:up,meshbasic_frag:fp,meshlambert_vert:dp,meshlambert_frag:hp,meshmatcap_vert:mp,meshmatcap_frag:pp,meshnormal_vert:gp,meshnormal_frag:_p,meshphong_vert:vp,meshphong_frag:bp,meshphysical_vert:xp,meshphysical_frag:yp,meshtoon_vert:wp,meshtoon_frag:Sp,points_vert:Mp,points_frag:Tp,shadow_vert:Ap,shadow_frag:Ep,sprite_vert:Cp,sprite_frag:Dp},Te={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new hn},uv2Transform:{value:new hn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}}},dn={basic:{uniforms:nn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:nn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new tt(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:nn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:nn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:nn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new tt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:nn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:nn([Te.points,Te.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:nn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:nn([Te.common,Te.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:nn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:nn([Te.sprite,Te.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new hn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:nn([Te.common,Te.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:nn([Te.lights,Te.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};dn.physical={uniforms:nn([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Ps={r:0,b:0,g:0};function Lp(s,e,t,n,i,r,o){const a=new tt(0);let l=r===!0?0:1,c,u,f=null,d=0,h=null;function b(m,g){let _=!1,x=g.isScene===!0?g.background:null;x&&x.isTexture&&(x=(g.backgroundBlurriness>0?t:e).get(x));const v=s.xr,w=v.getSession&&v.getSession();w&&w.environmentBlendMode==="additive"&&(x=null),x===null?p(a,l):x&&x.isColor&&(p(x,1),_=!0),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Js)?(u===void 0&&(u=new Kt(new es(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:_r(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,P,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=x.encoding!==gt,(f!==x||d!==x.version||h!==s.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,h=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Kt(new $s(2,2),new Xn({name:"BackgroundMaterial",uniforms:_r(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=x.encoding!==gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,h=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,g){m.getRGB(Ps,Iu(s)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(m,g=1){a.set(m),l=g,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(a,l)},render:b}}function Pp(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function f(I,D,B,ee,J){let W=!1;if(o){const H=p(ee,B,D);c!==H&&(c=H,h(c.object)),W=g(I,ee,B,J),W&&_(I,ee,B,J)}else{const H=D.wireframe===!0;(c.geometry!==ee.id||c.program!==B.id||c.wireframe!==H)&&(c.geometry=ee.id,c.program=B.id,c.wireframe=H,W=!0)}J!==null&&t.update(J,34963),(W||u)&&(u=!1,y(I,D,B,ee),J!==null&&s.bindBuffer(34963,t.get(J).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function h(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function b(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function p(I,D,B){const ee=B.wireframe===!0;let J=a[I.id];J===void 0&&(J={},a[I.id]=J);let W=J[D.id];W===void 0&&(W={},J[D.id]=W);let H=W[ee];return H===void 0&&(H=m(d()),W[ee]=H),H}function m(I){const D=[],B=[],ee=[];for(let J=0;J<i;J++)D[J]=0,B[J]=0,ee[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:ee,object:I,attributes:{},index:null}}function g(I,D,B,ee){const J=c.attributes,W=D.attributes;let H=0;const S=B.getAttributes();for(const L in S)if(S[L].location>=0){const X=J[L];let q=W[L];if(q===void 0&&(L==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),L==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),X===void 0||X.attribute!==q||q&&X.data!==q.data)return!0;H++}return c.attributesNum!==H||c.index!==ee}function _(I,D,B,ee){const J={},W=D.attributes;let H=0;const S=B.getAttributes();for(const L in S)if(S[L].location>=0){let X=W[L];X===void 0&&(L==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),L==="instanceColor"&&I.instanceColor&&(X=I.instanceColor));const q={};q.attribute=X,X&&X.data&&(q.data=X.data),J[L]=q,H++}c.attributes=J,c.attributesNum=H,c.index=ee}function x(){const I=c.newAttributes;for(let D=0,B=I.length;D<B;D++)I[D]=0}function v(I){w(I,0)}function w(I,D){const B=c.newAttributes,ee=c.enabledAttributes,J=c.attributeDivisors;B[I]=1,ee[I]===0&&(s.enableVertexAttribArray(I),ee[I]=1),J[I]!==D&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,D),J[I]=D)}function M(){const I=c.newAttributes,D=c.enabledAttributes;for(let B=0,ee=D.length;B<ee;B++)D[B]!==I[B]&&(s.disableVertexAttribArray(B),D[B]=0)}function P(I,D,B,ee,J,W){n.isWebGL2===!0&&(B===5124||B===5125)?s.vertexAttribIPointer(I,D,B,J,W):s.vertexAttribPointer(I,D,B,ee,J,W)}function y(I,D,B,ee){if(n.isWebGL2===!1&&(I.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const J=ee.attributes,W=B.getAttributes(),H=D.defaultAttributeValues;for(const S in W){const L=W[S];if(L.location>=0){let Q=J[S];if(Q===void 0&&(S==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),S==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){const X=Q.normalized,q=Q.itemSize,E=t.get(Q);if(E===void 0)continue;const Y=E.buffer,te=E.type,ae=E.bytesPerElement;if(Q.isInterleavedBufferAttribute){const oe=Q.data,he=oe.stride,G=Q.offset;if(oe.isInstancedInterleavedBuffer){for(let fe=0;fe<L.locationSize;fe++)w(L.location+fe,oe.meshPerAttribute);I.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let fe=0;fe<L.locationSize;fe++)v(L.location+fe);s.bindBuffer(34962,Y);for(let fe=0;fe<L.locationSize;fe++)P(L.location+fe,q/L.locationSize,te,X,he*ae,(G+q/L.locationSize*fe)*ae)}else{if(Q.isInstancedBufferAttribute){for(let oe=0;oe<L.locationSize;oe++)w(L.location+oe,Q.meshPerAttribute);I.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let oe=0;oe<L.locationSize;oe++)v(L.location+oe);s.bindBuffer(34962,Y);for(let oe=0;oe<L.locationSize;oe++)P(L.location+oe,q/L.locationSize,te,X,q*ae,q/L.locationSize*oe*ae)}}else if(H!==void 0){const X=H[S];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(L.location,X);break;case 3:s.vertexAttrib3fv(L.location,X);break;case 4:s.vertexAttrib4fv(L.location,X);break;default:s.vertexAttrib1fv(L.location,X)}}}}M()}function A(){U();for(const I in a){const D=a[I];for(const B in D){const ee=D[B];for(const J in ee)b(ee[J].object),delete ee[J];delete D[B]}delete a[I]}}function R(I){if(a[I.id]===void 0)return;const D=a[I.id];for(const B in D){const ee=D[B];for(const J in ee)b(ee[J].object),delete ee[J];delete D[B]}delete a[I.id]}function N(I){for(const D in a){const B=a[D];if(B[I.id]===void 0)continue;const ee=B[I.id];for(const J in ee)b(ee[J].object),delete ee[J];delete B[I.id]}}function U(){C(),u=!0,c!==l&&(c=l,h(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:U,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:v,disableUnusedAttributes:M}}function Rp(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let d,h;if(i)d=s,h="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[h](r,c,u,f),t.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Ip(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=s.getParameter(34930),d=s.getParameter(35660),h=s.getParameter(3379),b=s.getParameter(34076),p=s.getParameter(34921),m=s.getParameter(36347),g=s.getParameter(36348),_=s.getParameter(36349),x=d>0,v=o||e.has("OES_texture_float"),w=x&&v,M=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:b,maxAttributes:p,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:w,maxSamples:M}}function Up(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Si,a=new hn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,h){const b=f.length!==0||d||n!==0||i;return i=d,t=u(f,h,0),n=f.length,b},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(f,d,h){const b=f.clippingPlanes,p=f.clipIntersection,m=f.clipShadows,g=s.get(f);if(!i||b===null||b.length===0||r&&!m)r?u(null):c();else{const _=r?0:n,x=_*4;let v=g.clippingState||null;l.value=v,v=u(b,d,x,h);for(let w=0;w!==x;++w)v[w]=t[w];g.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,b){const p=f!==null?f.length:0;let m=null;if(p!==0){if(m=l.value,b!==!0||m===null){const g=h+p*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,v=h;x!==p;++x,v+=4)o.copy(f[x]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function Op(s){let e=new WeakMap;function t(o,a){return a===co?o.mapping=mr:a===uo&&(o.mapping=pr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===co||a===uo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yd(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ko extends Fo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ur=4,jl=[.125,.215,.35,.446,.526,.582],Ti=20,qa=new ko,Xl=new tt;let Ya=null;const Mi=(1+Math.sqrt(5))/2,or=1/Mi,ql=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,Mi,or),new K(0,Mi,-or),new K(or,0,Mi),new K(-or,0,Mi),new K(Mi,or,0),new K(-Mi,or,0)];class Yl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ya=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ya),e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ya=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Kr,format:Fn,encoding:mi,depthBuffer:!1},i=Zl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fp(r)),this._blurMaterial=kp(r,e,t)}return i}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,qa)}_sceneToCubeUV(e,t,n,i){const a=new bn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Xl),u.toneMapping=Wn,u.autoClear=!1;const h=new Oo({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),b=new Kt(new es,h);let p=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,p=!0):(h.color.copy(Xl),p=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):_===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const x=this._cubeSize;Rs(i,_*x,g>2?x:0,x,x),u.setRenderTarget(i),p&&u.render(b,a),u.render(e,a)}b.geometry.dispose(),b.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===mr||e.mapping===pr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Rs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,qa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ql[(i-1)%ql.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Kt(this._lodPlanes[i],c),d=c.uniforms,h=this._sizeLods[n]-1,b=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Ti-1),p=r/b,m=isFinite(r)?1+Math.floor(u*p):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const g=[];let _=0;for(let P=0;P<Ti;++P){const y=P/p,A=Math.exp(-y*y/2);g.push(A),P===0?_+=A:P<m&&(_+=2*A)}for(let P=0;P<g.length;P++)g[P]=g[P]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=b,d.mipInt.value=x-n;const v=this._sizeLods[i],w=3*v*(i>x-ur?i-x+ur:0),M=4*(this._cubeSize-v);Rs(t,w,M,3*v,2*v),l.setRenderTarget(t),l.render(f,qa)}}function Fp(s){const e=[],t=[],n=[];let i=s;const r=s-ur+1+jl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ur?l=jl[o-s+ur-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,b=6,p=3,m=2,g=1,_=new Float32Array(p*b*h),x=new Float32Array(m*b*h),v=new Float32Array(g*b*h);for(let M=0;M<h;M++){const P=M%3*2/3-1,y=M>2?0:-1,A=[P,y,0,P+2/3,y,0,P+2/3,y+1,0,P,y,0,P+2/3,y+1,0,P,y+1,0];_.set(A,p*b*M),x.set(d,m*b*M);const R=[M,M,M,M,M,M];v.set(R,g*b*M)}const w=new on;w.setAttribute("position",new yn(_,p)),w.setAttribute("uv",new yn(x,m)),w.setAttribute("faceIndex",new yn(v,g)),e.push(w),i>ur&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zl(s,e,t){const n=new pi(s,e,t);return n.texture.mapping=Js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function kp(s,e,t){const n=new Float32Array(Ti),i=new K(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zo(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Kl(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Jl(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function zo(){return`

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
	`}function zp(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===co||l===uo,u=l===mr||l===pr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Yl(s)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Yl(s));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Np(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Bp(s,e,t,n){const i={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const b in d.attributes)e.remove(d.attributes[b]);d.removeEventListener("dispose",o),delete i[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const b in d)e.update(d[b],34962);const h=f.morphAttributes;for(const b in h){const p=h[b];for(let m=0,g=p.length;m<g;m++)e.update(p[m],34962)}}function c(f){const d=[],h=f.index,b=f.attributes.position;let p=0;if(h!==null){const _=h.array;p=h.version;for(let x=0,v=_.length;x<v;x+=3){const w=_[x+0],M=_[x+1],P=_[x+2];d.push(w,M,M,P,P,w)}}else{const _=b.array;p=b.version;for(let x=0,v=_.length/3-1;x<v;x+=3){const w=x+0,M=x+1,P=x+2;d.push(w,M,M,P,P,w)}}const m=new(Au(d)?Ru:Pu)(d,1);m.version=p;const g=r.get(f);g&&e.remove(g),r.set(f,m)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Gp(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,h){s.drawElements(r,h,a,d*l),t.update(h,r,1)}function f(d,h,b){if(b===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,h,a,d*l,b),t.update(h,r,b)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Vp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wp(s,e){return s[0]-e[0]}function Hp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function jp(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new xt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const b=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=b!==void 0?b.length:0;let m=r.get(u);if(m===void 0||m.count!==p){let D=function(){C.dispose(),r.delete(u),u.removeEventListener("dispose",D)};m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let A=0;x===!0&&(A=1),v===!0&&(A=2),w===!0&&(A=3);let R=u.attributes.position.count*A,N=1;R>e.maxTextureSize&&(N=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const U=new Float32Array(R*N*4*p),C=new Lu(U,R,N,p);C.type=Ei,C.needsUpdate=!0;const I=A*4;for(let B=0;B<p;B++){const ee=M[B],J=P[B],W=y[B],H=R*N*4*B;for(let S=0;S<ee.count;S++){const L=S*I;x===!0&&(o.fromBufferAttribute(ee,S),U[H+L+0]=o.x,U[H+L+1]=o.y,U[H+L+2]=o.z,U[H+L+3]=0),v===!0&&(o.fromBufferAttribute(J,S),U[H+L+4]=o.x,U[H+L+5]=o.y,U[H+L+6]=o.z,U[H+L+7]=0),w===!0&&(o.fromBufferAttribute(W,S),U[H+L+8]=o.x,U[H+L+9]=o.y,U[H+L+10]=o.z,U[H+L+11]=W.itemSize===4?o.w:1)}}m={count:p,texture:C,size:new Ve(R,N)},r.set(u,m),u.addEventListener("dispose",D)}let g=0;for(let x=0;x<h.length;x++)g+=h[x];const _=u.morphTargetsRelative?1:1-g;d.getUniforms().setValue(s,"morphTargetBaseInfluence",_),d.getUniforms().setValue(s,"morphTargetInfluences",h),d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const b=h===void 0?0:h.length;let p=n[u.id];if(p===void 0||p.length!==b){p=[];for(let v=0;v<b;v++)p[v]=[v,0];n[u.id]=p}for(let v=0;v<b;v++){const w=p[v];w[0]=v,w[1]=h[v]}p.sort(Hp);for(let v=0;v<8;v++)v<b&&p[v][1]?(a[v][0]=p[v][0],a[v][1]=p[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Wp);const m=u.morphAttributes.position,g=u.morphAttributes.normal;let _=0;for(let v=0;v<8;v++){const w=a[v],M=w[0],P=w[1];M!==Number.MAX_SAFE_INTEGER&&P?(m&&u.getAttribute("morphTarget"+v)!==m[M]&&u.setAttribute("morphTarget"+v,m[M]),g&&u.getAttribute("morphNormal"+v)!==g[M]&&u.setAttribute("morphNormal"+v,g[M]),i[v]=P,_+=P):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Xp(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Fu=new an,ku=new Lu,zu=new Id,Nu=new Uu,Ql=[],$l=[],ec=new Float32Array(16),tc=new Float32Array(9),nc=new Float32Array(4);function xr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ql[i];if(r===void 0&&(r=new Float32Array(i),Ql[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Lt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ea(s,e){let t=$l[e];t===void 0&&(t=new Int32Array(e),$l[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function qp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Yp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2fv(this.addr,e),Pt(t,e)}}function Zp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;s.uniform3fv(this.addr,e),Pt(t,e)}}function Kp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4fv(this.addr,e),Pt(t,e)}}function Jp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,n))return;nc.set(n),s.uniformMatrix2fv(this.addr,!1,nc),Pt(t,n)}}function Qp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,n))return;tc.set(n),s.uniformMatrix3fv(this.addr,!1,tc),Pt(t,n)}}function $p(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,n))return;ec.set(n),s.uniformMatrix4fv(this.addr,!1,ec),Pt(t,n)}}function eg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function tg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2iv(this.addr,e),Pt(t,e)}}function ng(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;s.uniform3iv(this.addr,e),Pt(t,e)}}function ig(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4iv(this.addr,e),Pt(t,e)}}function rg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2uiv(this.addr,e),Pt(t,e)}}function ag(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;s.uniform3uiv(this.addr,e),Pt(t,e)}}function og(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4uiv(this.addr,e),Pt(t,e)}}function lg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Fu,i)}function cg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zu,i)}function ug(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nu,i)}function fg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ku,i)}function dg(s){switch(s){case 5126:return qp;case 35664:return Yp;case 35665:return Zp;case 35666:return Kp;case 35674:return Jp;case 35675:return Qp;case 35676:return $p;case 5124:case 35670:return eg;case 35667:case 35671:return tg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return rg;case 36294:return sg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return fg}}function hg(s,e){s.uniform1fv(this.addr,e)}function mg(s,e){const t=xr(e,this.size,2);s.uniform2fv(this.addr,t)}function pg(s,e){const t=xr(e,this.size,3);s.uniform3fv(this.addr,t)}function gg(s,e){const t=xr(e,this.size,4);s.uniform4fv(this.addr,t)}function _g(s,e){const t=xr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function vg(s,e){const t=xr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function bg(s,e){const t=xr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xg(s,e){s.uniform1iv(this.addr,e)}function yg(s,e){s.uniform2iv(this.addr,e)}function wg(s,e){s.uniform3iv(this.addr,e)}function Sg(s,e){s.uniform4iv(this.addr,e)}function Mg(s,e){s.uniform1uiv(this.addr,e)}function Tg(s,e){s.uniform2uiv(this.addr,e)}function Ag(s,e){s.uniform3uiv(this.addr,e)}function Eg(s,e){s.uniform4uiv(this.addr,e)}function Cg(s,e,t){const n=this.cache,i=e.length,r=ea(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Fu,r[o])}function Dg(s,e,t){const n=this.cache,i=e.length,r=ea(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||zu,r[o])}function Lg(s,e,t){const n=this.cache,i=e.length,r=ea(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Nu,r[o])}function Pg(s,e,t){const n=this.cache,i=e.length,r=ea(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ku,r[o])}function Rg(s){switch(s){case 5126:return hg;case 35664:return mg;case 35665:return pg;case 35666:return gg;case 35674:return _g;case 35675:return vg;case 35676:return bg;case 5124:case 35670:return xg;case 35667:case 35671:return yg;case 35668:case 35672:return wg;case 35669:case 35673:return Sg;case 5125:return Mg;case 36294:return Tg;case 36295:return Ag;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Pg}}class Ig{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=dg(t.type)}}class Ug{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Rg(t.type)}}class Og{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Za=/(\w+)(\])?(\[|\.)?/g;function ic(s,e){s.seq.push(e),s.map[e.id]=e}function Fg(s,e,t){const n=s.name,i=n.length;for(Za.lastIndex=0;;){const r=Za.exec(n),o=Za.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ic(t,c===void 0?new Ig(a,s,e):new Ug(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new Og(a),ic(t,f)),t=f}}}class Vs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Fg(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function rc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let kg=0;function zg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ng(s){switch(s){case mi:return["Linear","( value )"];case gt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function sc(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+zg(s.getShaderSource(e),o)}else return i}function Bg(s,e){const t=Ng(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Gg(s,e){let t;switch(e){case Yf:t="Linear";break;case Zf:t="Reinhard";break;case Kf:t="OptimizedCineon";break;case wu:t="ACESFilmic";break;case Jf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wr).join(`
`)}function Wg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hg(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Wr(s){return s!==""}function ac(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(s){return s.replace(jg,Xg)}function Xg(s,e){const t=et[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return _o(t)}const qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(s){return s.replace(qg,Yg)}function Yg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===bu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vr&&(e="SHADOWMAP_TYPE_VSM"),e}function Kg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case mr:case pr:e="ENVMAP_TYPE_CUBE";break;case Js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function Qg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Lo:e="ENVMAP_BLENDING_MULTIPLY";break;case Xf:e="ENVMAP_BLENDING_MIX";break;case qf:e="ENVMAP_BLENDING_ADD";break}return e}function $g(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function e0(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Zg(t),c=Kg(t),u=Jg(t),f=Qg(t),d=$g(t),h=t.isWebGL2?"":Vg(t),b=Wg(r),p=i.createProgram();let m,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[b].filter(Wr).join(`
`),m.length>0&&(m+=`
`),g=[h,b].filter(Wr).join(`
`),g.length>0&&(g+=`
`)):(m=[cc(t),"#define SHADER_NAME "+t.shaderName,b,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),g=[h,cc(t),"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?et.tonemapping_pars_fragment:"",t.toneMapping!==Wn?Gg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.encodings_pars_fragment,Bg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),o=_o(o),o=ac(o,t),o=oc(o,t),a=_o(a),a=ac(a,t),a=oc(a,t),o=lc(o),a=lc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=_+m+o,v=_+g+a,w=rc(i,35633,x),M=rc(i,35632,v);if(i.attachShader(p,w),i.attachShader(p,M),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(w).trim(),N=i.getShaderInfoLog(M).trim();let U=!0,C=!0;if(i.getProgramParameter(p,35714)===!1){U=!1;const I=sc(i,w,"vertex"),D=sc(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+I+`
`+D)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(R===""||N==="")&&(C=!1);C&&(this.diagnostics={runnable:U,programLog:A,vertexShader:{log:R,prefix:m},fragmentShader:{log:N,prefix:g}})}i.deleteShader(w),i.deleteShader(M);let P;this.getUniforms=function(){return P===void 0&&(P=new Vs(i,p)),P};let y;return this.getAttributes=function(){return y===void 0&&(y=Hg(i,p)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=kg++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=M,this}let t0=0;class n0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new i0(e),t.set(e,n)),n}}class i0{constructor(e){this.id=t0++,this.code=e,this.usedTimes=0}}function r0(s,e,t,n,i,r,o){const a=new Uo,l=new n0,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let h=i.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,A,R,N,U){const C=N.fog,I=U.geometry,D=y.isMeshStandardMaterial?N.environment:null,B=(y.isMeshStandardMaterial?t:e).get(y.envMap||D),ee=B&&B.mapping===Js?B.image.height:null,J=b[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const W=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,H=W!==void 0?W.length:0;let S=0;I.morphAttributes.position!==void 0&&(S=1),I.morphAttributes.normal!==void 0&&(S=2),I.morphAttributes.color!==void 0&&(S=3);let L,Q,X,q;if(J){const he=dn[J];L=he.vertexShader,Q=he.fragmentShader}else L=y.vertexShader,Q=y.fragmentShader,l.update(y),X=l.getVertexShaderID(y),q=l.getFragmentShaderID(y);const E=s.getRenderTarget(),Y=y.alphaTest>0,te=y.clearcoat>0,ae=y.iridescence>0;return{isWebGL2:u,shaderID:J,shaderName:y.type,vertexShader:L,fragmentShader:Q,defines:y.defines,customVertexShaderID:X,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,instancing:U.isInstancedMesh===!0,instancingColor:U.isInstancedMesh===!0&&U.instanceColor!==null,supportsVertexTextures:d,outputEncoding:E===null?s.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:mi,map:!!y.map,matcap:!!y.matcap,envMap:!!B,envMapMode:B&&B.mapping,envMapCubeUVHeight:ee,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===pd,tangentSpaceNormalMap:y.normalMapType===Po,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===gt,clearcoat:te,clearcoatMap:te&&!!y.clearcoatMap,clearcoatRoughnessMap:te&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:te&&!!y.clearcoatNormalMap,iridescence:ae,iridescenceMap:ae&&!!y.iridescenceMap,iridescenceThicknessMap:ae&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===dr,alphaMap:!!y.alphaMap,alphaTest:Y,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!I.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!C,useFog:y.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:S,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:Wn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===br,flipSided:y.side===xn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)A.push(R),A.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(g(A,y),_(A,y),A.push(s.outputEncoding)),A.push(y.customProgramCacheKey),A.join()}function g(y,A){y.push(A.precision),y.push(A.outputEncoding),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.combine),y.push(A.vertexUvs),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function _(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),y.push(a.mask)}function x(y){const A=b[y.type];let R;if(A){const N=dn[A];R=ts.clone(N.uniforms)}else R=y.uniforms;return R}function v(y,A){let R;for(let N=0,U=c.length;N<U;N++){const C=c[N];if(C.cacheKey===A){R=C,++R.usedTimes;break}}return R===void 0&&(R=new e0(s,A,y,r),c.push(R)),R}function w(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),y.destroy()}}function M(y){l.remove(y)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:v,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:P}}function s0(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function a0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function uc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function fc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,h,b,p,m){let g=s[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:h,groupOrder:b,renderOrder:f.renderOrder,z:p,group:m},s[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=h,g.groupOrder=b,g.renderOrder=f.renderOrder,g.z=p,g.group=m),e++,g}function a(f,d,h,b,p,m){const g=o(f,d,h,b,p,m);h.transmission>0?n.push(g):h.transparent===!0?i.push(g):t.push(g)}function l(f,d,h,b,p,m){const g=o(f,d,h,b,p,m);h.transmission>0?n.unshift(g):h.transparent===!0?i.unshift(g):t.unshift(g)}function c(f,d){t.length>1&&t.sort(f||a0),n.length>1&&n.sort(d||uc),i.length>1&&i.sort(d||uc)}function u(){for(let f=e,d=s.length;f<d;f++){const h=s[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function o0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new fc,s.set(n,[o])):i>=r.length?(o=new fc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function l0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new tt};break;case"SpotLight":t={position:new K,direction:new K,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=t,t}}}function c0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let u0=0;function f0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function d0(s,e){const t=new l0,n=c0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new K);const r=new K,o=new ht,a=new ht;function l(u,f){let d=0,h=0,b=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let p=0,m=0,g=0,_=0,x=0,v=0,w=0,M=0,P=0,y=0;u.sort(f0);const A=f!==!0?Math.PI:1;for(let N=0,U=u.length;N<U;N++){const C=u[N],I=C.color,D=C.intensity,B=C.distance,ee=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=I.r*D*A,h+=I.g*D*A,b+=I.b*D*A;else if(C.isLightProbe)for(let J=0;J<9;J++)i.probe[J].addScaledVector(C.sh.coefficients[J],D);else if(C.isDirectionalLight){const J=t.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity*A),C.castShadow){const W=C.shadow,H=n.get(C);H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=C.shadow.matrix,v++}i.directional[p]=J,p++}else if(C.isSpotLight){const J=t.get(C);J.position.setFromMatrixPosition(C.matrixWorld),J.color.copy(I).multiplyScalar(D*A),J.distance=B,J.coneCos=Math.cos(C.angle),J.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),J.decay=C.decay,i.spot[g]=J;const W=C.shadow;if(C.map&&(i.spotLightMap[P]=C.map,P++,W.updateMatrices(C),C.castShadow&&y++),i.spotLightMatrix[g]=W.matrix,C.castShadow){const H=n.get(C);H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,i.spotShadow[g]=H,i.spotShadowMap[g]=ee,M++}g++}else if(C.isRectAreaLight){const J=t.get(C);J.color.copy(I).multiplyScalar(D),J.halfWidth.set(C.width*.5,0,0),J.halfHeight.set(0,C.height*.5,0),i.rectArea[_]=J,_++}else if(C.isPointLight){const J=t.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity*A),J.distance=C.distance,J.decay=C.decay,C.castShadow){const W=C.shadow,H=n.get(C);H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,i.pointShadow[m]=H,i.pointShadowMap[m]=ee,i.pointShadowMatrix[m]=C.shadow.matrix,w++}i.point[m]=J,m++}else if(C.isHemisphereLight){const J=t.get(C);J.skyColor.copy(C.color).multiplyScalar(D*A),J.groundColor.copy(C.groundColor).multiplyScalar(D*A),i.hemi[x]=J,x++}}_>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=b;const R=i.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==g||R.rectAreaLength!==_||R.hemiLength!==x||R.numDirectionalShadows!==v||R.numPointShadows!==w||R.numSpotShadows!==M||R.numSpotMaps!==P)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=_,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+P-y,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=y,R.directionalLength=p,R.pointLength=m,R.spotLength=g,R.rectAreaLength=_,R.hemiLength=x,R.numDirectionalShadows=v,R.numPointShadows=w,R.numSpotShadows=M,R.numSpotMaps=P,i.version=u0++)}function c(u,f){let d=0,h=0,b=0,p=0,m=0;const g=f.matrixWorldInverse;for(let _=0,x=u.length;_<x;_++){const v=u[_];if(v.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),d++}else if(v.isSpotLight){const w=i.spot[b];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),b++}else if(v.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(g),a.identity(),o.copy(v.matrixWorld),o.premultiply(g),a.extractRotation(o),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){const w=i.point[h];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:l,setupView:c,state:i}}function dc(s,e){const t=new d0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function h0(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new dc(s,e),t.set(r,[l])):o>=a.length?(l=new dc(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Bu extends ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gu extends ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new K,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const m0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p0=`uniform sampler2D shadow_pass;
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
}`;function g0(s,e,t){let n=new Qs;const i=new Ve,r=new Ve,o=new xt,a=new Bu({depthPacking:Tu}),l=new Gu,c={},u=t.maxTextureSize,f={0:xn,1:hi,2:br},d=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:m0,fragmentShader:p0}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const b=new on;b.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Kt(b,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu,this.render=function(v,w,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const P=s.getRenderTarget(),y=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),R=s.state;R.setBlending(di),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let N=0,U=v.length;N<U;N++){const C=v[N],I=C.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const D=I.getFrameExtents();if(i.multiply(D),r.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/D.x),i.x=r.x*D.x,I.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/D.y),i.y=r.y*D.y,I.mapSize.y=r.y)),I.map===null){const ee=this.type!==Vr?{minFilter:rn,magFilter:rn}:{};I.map=new pi(i.x,i.y,ee),I.map.texture.name=C.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const B=I.getViewportCount();for(let ee=0;ee<B;ee++){const J=I.getViewport(ee);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),R.viewport(o),I.updateMatrices(C,ee),n=I.getFrustum(),x(w,M,I.camera,C,this.type)}I.isPointLightShadow!==!0&&this.type===Vr&&g(I,M),I.needsUpdate=!1}m.needsUpdate=!1,s.setRenderTarget(P,y,A)};function g(v,w){const M=e.update(p);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,h.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new pi(i.x,i.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(w,null,M,d,p,null),h.uniforms.shadow_pass.value=v.mapPass.texture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(w,null,M,h,p,null)}function _(v,w,M,P,y,A){let R=null;const N=M.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(N!==void 0)R=N;else if(R=M.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=R.uuid,C=w.uuid;let I=c[U];I===void 0&&(I={},c[U]=I);let D=I[C];D===void 0&&(D=R.clone(),I[C]=D),R=D}return R.visible=w.visible,R.wireframe=w.wireframe,A===Vr?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:f[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(M.matrixWorld),R.nearDistance=P,R.farDistance=y),R}function x(v,w,M,P,y){if(v.visible===!1)return;if(v.layers.test(w.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&y===Vr)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,v.matrixWorld);const N=e.update(v),U=v.material;if(Array.isArray(U)){const C=N.groups;for(let I=0,D=C.length;I<D;I++){const B=C[I],ee=U[B.materialIndex];if(ee&&ee.visible){const J=_(v,ee,P,M.near,M.far,y);s.renderBufferDirect(M,null,N,J,v,B)}}}else if(U.visible){const C=_(v,U,P,M.near,M.far,y);s.renderBufferDirect(M,null,N,C,v,null)}}const R=v.children;for(let N=0,U=R.length;N<U;N++)x(R[N],w,M,P,y)}}function _0(s,e,t){const n=t.isWebGL2;function i(){let V=!1;const re=new xt;let ve=null;const Le=new xt(0,0,0,0);return{setMask:function(De){ve!==De&&!V&&(s.colorMask(De,De,De,De),ve=De)},setLocked:function(De){V=De},setClear:function(De,st,Xe,We,_t){_t===!0&&(De*=We,st*=We,Xe*=We),re.set(De,st,Xe,We),Le.equals(re)===!1&&(s.clearColor(De,st,Xe,We),Le.copy(re))},reset:function(){V=!1,ve=null,Le.set(-1,0,0,0)}}}function r(){let V=!1,re=null,ve=null,Le=null;return{setTest:function(De){De?Y(2929):te(2929)},setMask:function(De){re!==De&&!V&&(s.depthMask(De),re=De)},setFunc:function(De){if(ve!==De){switch(De){case Nf:s.depthFunc(512);break;case Bf:s.depthFunc(519);break;case Gf:s.depthFunc(513);break;case lo:s.depthFunc(515);break;case Vf:s.depthFunc(514);break;case Wf:s.depthFunc(518);break;case Hf:s.depthFunc(516);break;case jf:s.depthFunc(517);break;default:s.depthFunc(515)}ve=De}},setLocked:function(De){V=De},setClear:function(De){Le!==De&&(s.clearDepth(De),Le=De)},reset:function(){V=!1,re=null,ve=null,Le=null}}}function o(){let V=!1,re=null,ve=null,Le=null,De=null,st=null,Xe=null,We=null,_t=null;return{setTest:function(nt){V||(nt?Y(2960):te(2960))},setMask:function(nt){re!==nt&&!V&&(s.stencilMask(nt),re=nt)},setFunc:function(nt,ut,dt){(ve!==nt||Le!==ut||De!==dt)&&(s.stencilFunc(nt,ut,dt),ve=nt,Le=ut,De=dt)},setOp:function(nt,ut,dt){(st!==nt||Xe!==ut||We!==dt)&&(s.stencilOp(nt,ut,dt),st=nt,Xe=ut,We=dt)},setLocked:function(nt){V=nt},setClear:function(nt){_t!==nt&&(s.clearStencil(nt),_t=nt)},reset:function(){V=!1,re=null,ve=null,Le=null,De=null,st=null,Xe=null,We=null,_t=null}}}const a=new i,l=new r,c=new o,u=new WeakMap,f=new WeakMap;let d={},h={},b=new WeakMap,p=[],m=null,g=!1,_=null,x=null,v=null,w=null,M=null,P=null,y=null,A=!1,R=null,N=null,U=null,C=null,I=null;const D=s.getParameter(35661);let B=!1,ee=0;const J=s.getParameter(7938);J.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(J)[1]),B=ee>=1):J.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),B=ee>=2);let W=null,H={};const S=s.getParameter(3088),L=s.getParameter(2978),Q=new xt().fromArray(S),X=new xt().fromArray(L);function q(V,re,ve){const Le=new Uint8Array(4),De=s.createTexture();s.bindTexture(V,De),s.texParameteri(V,10241,9728),s.texParameteri(V,10240,9728);for(let st=0;st<ve;st++)s.texImage2D(re+st,0,6408,1,1,0,6408,5121,Le);return De}const E={};E[3553]=q(3553,3553,1),E[34067]=q(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Y(2929),l.setFunc(lo),Ce(!1),Be(sl),Y(2884),Pe(di);function Y(V){d[V]!==!0&&(s.enable(V),d[V]=!0)}function te(V){d[V]!==!1&&(s.disable(V),d[V]=!1)}function ae(V,re){return h[V]!==re?(s.bindFramebuffer(V,re),h[V]=re,n&&(V===36009&&(h[36160]=re),V===36160&&(h[36009]=re)),!0):!1}function oe(V,re){let ve=p,Le=!1;if(V)if(ve=b.get(re),ve===void 0&&(ve=[],b.set(re,ve)),V.isWebGLMultipleRenderTargets){const De=V.texture;if(ve.length!==De.length||ve[0]!==36064){for(let st=0,Xe=De.length;st<Xe;st++)ve[st]=36064+st;ve.length=De.length,Le=!0}}else ve[0]!==36064&&(ve[0]=36064,Le=!0);else ve[0]!==1029&&(ve[0]=1029,Le=!0);Le&&(t.isWebGL2?s.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function he(V){return m!==V?(s.useProgram(V),m=V,!0):!1}const G={[cr]:32774,[Cf]:32778,[Df]:32779};if(n)G[cl]=32775,G[ul]=32776;else{const V=e.get("EXT_blend_minmax");V!==null&&(G[cl]=V.MIN_EXT,G[ul]=V.MAX_EXT)}const fe={[Lf]:0,[Pf]:1,[Rf]:768,[xu]:770,[zf]:776,[Ff]:774,[Uf]:772,[If]:769,[yu]:771,[kf]:775,[Of]:773};function Pe(V,re,ve,Le,De,st,Xe,We){if(V===di){g===!0&&(te(3042),g=!1);return}if(g===!1&&(Y(3042),g=!0),V!==Ef){if(V!==_||We!==A){if((x!==cr||M!==cr)&&(s.blendEquation(32774),x=cr,M=cr),We)switch(V){case dr:s.blendFuncSeparate(1,771,1,771);break;case al:s.blendFunc(1,1);break;case ol:s.blendFuncSeparate(0,769,0,1);break;case ll:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case dr:s.blendFuncSeparate(770,771,1,771);break;case al:s.blendFunc(770,1);break;case ol:s.blendFuncSeparate(0,769,0,1);break;case ll:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}v=null,w=null,P=null,y=null,_=V,A=We}return}De=De||re,st=st||ve,Xe=Xe||Le,(re!==x||De!==M)&&(s.blendEquationSeparate(G[re],G[De]),x=re,M=De),(ve!==v||Le!==w||st!==P||Xe!==y)&&(s.blendFuncSeparate(fe[ve],fe[Le],fe[st],fe[Xe]),v=ve,w=Le,P=st,y=Xe),_=V,A=!1}function Me(V,re){V.side===br?te(2884):Y(2884);let ve=V.side===xn;re&&(ve=!ve),Ce(ve),V.blending===dr&&V.transparent===!1?Pe(di):Pe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),a.setMask(V.colorWrite);const Le=V.stencilWrite;c.setTest(Le),Le&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Se(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Y(32926):te(32926)}function Ce(V){R!==V&&(V?s.frontFace(2304):s.frontFace(2305),R=V)}function Be(V){V!==Tf?(Y(2884),V!==N&&(V===sl?s.cullFace(1029):V===Af?s.cullFace(1028):s.cullFace(1032))):te(2884),N=V}function ue(V){V!==U&&(B&&s.lineWidth(V),U=V)}function Se(V,re,ve){V?(Y(32823),(C!==re||I!==ve)&&(s.polygonOffset(re,ve),C=re,I=ve)):te(32823)}function Ae(V){V?Y(3089):te(3089)}function me(V){V===void 0&&(V=33984+D-1),W!==V&&(s.activeTexture(V),W=V)}function O(V,re,ve){ve===void 0&&(W===null?ve=33984+D-1:ve=W);let Le=H[ve];Le===void 0&&(Le={type:void 0,texture:void 0},H[ve]=Le),(Le.type!==V||Le.texture!==re)&&(W!==ve&&(s.activeTexture(ve),W=ve),s.bindTexture(V,re||E[V]),Le.type=V,Le.texture=re)}function T(){const V=H[W];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function z(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function k(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function j(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(V){Q.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Q.copy(V))}function de(V){X.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),X.copy(V))}function Ne(V,re){let ve=f.get(re);ve===void 0&&(ve=new WeakMap,f.set(re,ve));let Le=ve.get(V);Le===void 0&&(Le=s.getUniformBlockIndex(re,V.name),ve.set(V,Le))}function ze(V,re){const Le=f.get(re).get(V);u.get(re)!==Le&&(s.uniformBlockBinding(re,Le,V.__bindingPointIndex),u.set(re,Le))}function qe(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},W=null,H={},h={},b=new WeakMap,p=[],m=null,g=!1,_=null,x=null,v=null,w=null,M=null,P=null,y=null,A=!1,R=null,N=null,U=null,C=null,I=null,Q.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Y,disable:te,bindFramebuffer:ae,drawBuffers:oe,useProgram:he,setBlending:Pe,setMaterial:Me,setFlipSided:Ce,setCullFace:Be,setLineWidth:ue,setPolygonOffset:Se,setScissorTest:Ae,activeTexture:me,bindTexture:O,unbindTexture:T,compressedTexImage2D:Z,compressedTexImage3D:ie,texImage2D:we,texImage3D:ye,updateUBOMapping:Ne,uniformBlockBinding:ze,texStorage2D:j,texStorage3D:xe,texSubImage2D:le,texSubImage3D:pe,compressedTexSubImage2D:z,compressedTexSubImage3D:k,scissor:_e,viewport:de,reset:qe}}function v0(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),b=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(O,T){return g?new OffscreenCanvas(O,T):Qr("canvas")}function x(O,T,Z,ie){let le=1;if((O.width>ie||O.height>ie)&&(le=ie/Math.max(O.width,O.height)),le<1||T===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const pe=T?Xs:Math.floor,z=pe(le*O.width),k=pe(le*O.height);p===void 0&&(p=_(z,k));const j=Z?_(z,k):p;return j.width=z,j.height=k,j.getContext("2d").drawImage(O,0,0,z,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+z+"x"+k+")."),j}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function v(O){return go(O.width)&&go(O.height)}function w(O){return a?!1:O.wrapS!==On||O.wrapT!==On||O.minFilter!==rn&&O.minFilter!==fn}function M(O,T){return O.generateMipmaps&&T&&O.minFilter!==rn&&O.minFilter!==fn}function P(O){s.generateMipmap(O)}function y(O,T,Z,ie,le=!1){if(a===!1)return T;if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let pe=T;return T===6403&&(Z===5126&&(pe=33326),Z===5131&&(pe=33325),Z===5121&&(pe=33321)),T===33319&&(Z===5126&&(pe=33328),Z===5131&&(pe=33327),Z===5121&&(pe=33323)),T===6408&&(Z===5126&&(pe=34836),Z===5131&&(pe=34842),Z===5121&&(pe=ie===gt&&le===!1?35907:32856),Z===32819&&(pe=32854),Z===32820&&(pe=32855)),(pe===33325||pe===33326||pe===33327||pe===33328||pe===34842||pe===34836)&&e.get("EXT_color_buffer_float"),pe}function A(O,T,Z){return M(O,Z)===!0||O.isFramebufferTexture&&O.minFilter!==rn&&O.minFilter!==fn?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function R(O){return O===rn||O===fl||O===ya?9728:9729}function N(O){const T=O.target;T.removeEventListener("dispose",N),C(T),T.isVideoTexture&&b.delete(T)}function U(O){const T=O.target;T.removeEventListener("dispose",U),D(T)}function C(O){const T=n.get(O);if(T.__webglInit===void 0)return;const Z=O.source,ie=m.get(Z);if(ie){const le=ie[T.__cacheKey];le.usedTimes--,le.usedTimes===0&&I(O),Object.keys(ie).length===0&&m.delete(Z)}n.remove(O)}function I(O){const T=n.get(O);s.deleteTexture(T.__webglTexture);const Z=O.source,ie=m.get(Z);delete ie[T.__cacheKey],o.memory.textures--}function D(O){const T=O.texture,Z=n.get(O),ie=n.get(T);if(ie.__webglTexture!==void 0&&(s.deleteTexture(ie.__webglTexture),o.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let le=0;le<6;le++)s.deleteFramebuffer(Z.__webglFramebuffer[le]),Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer[le]);else{if(s.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let le=0;le<Z.__webglColorRenderbuffer.length;le++)Z.__webglColorRenderbuffer[le]&&s.deleteRenderbuffer(Z.__webglColorRenderbuffer[le]);Z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let le=0,pe=T.length;le<pe;le++){const z=n.get(T[le]);z.__webglTexture&&(s.deleteTexture(z.__webglTexture),o.memory.textures--),n.remove(T[le])}n.remove(T),n.remove(O)}let B=0;function ee(){B=0}function J(){const O=B;return O>=l&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l),B+=1,O}function W(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.encoding),T.join()}function H(O,T){const Z=n.get(O);if(O.isVideoTexture&&Ae(O),O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){const ie=O.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(Z,O,T);return}}t.bindTexture(3553,Z.__webglTexture,33984+T)}function S(O,T){const Z=n.get(O);if(O.version>0&&Z.__version!==O.version){te(Z,O,T);return}t.bindTexture(35866,Z.__webglTexture,33984+T)}function L(O,T){const Z=n.get(O);if(O.version>0&&Z.__version!==O.version){te(Z,O,T);return}t.bindTexture(32879,Z.__webglTexture,33984+T)}function Q(O,T){const Z=n.get(O);if(O.version>0&&Z.__version!==O.version){ae(Z,O,T);return}t.bindTexture(34067,Z.__webglTexture,33984+T)}const X={[fo]:10497,[On]:33071,[ho]:33648},q={[rn]:9728,[fl]:9984,[ya]:9986,[fn]:9729,[Qf]:9985,[Zr]:9987};function E(O,T,Z){if(Z?(s.texParameteri(O,10242,X[T.wrapS]),s.texParameteri(O,10243,X[T.wrapT]),(O===32879||O===35866)&&s.texParameteri(O,32882,X[T.wrapR]),s.texParameteri(O,10240,q[T.magFilter]),s.texParameteri(O,10241,q[T.minFilter])):(s.texParameteri(O,10242,33071),s.texParameteri(O,10243,33071),(O===32879||O===35866)&&s.texParameteri(O,32882,33071),(T.wrapS!==On||T.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(O,10240,R(T.magFilter)),s.texParameteri(O,10241,R(T.minFilter)),T.minFilter!==rn&&T.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===rn||T.minFilter!==ya&&T.minFilter!==Zr||T.type===Ei&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Kr&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(s.texParameterf(O,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function Y(O,T){let Z=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",N));const ie=T.source;let le=m.get(ie);le===void 0&&(le={},m.set(ie,le));const pe=W(T);if(pe!==O.__cacheKey){le[pe]===void 0&&(le[pe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),le[pe].usedTimes++;const z=le[O.__cacheKey];z!==void 0&&(le[O.__cacheKey].usedTimes--,z.usedTimes===0&&I(T)),O.__cacheKey=pe,O.__webglTexture=le[pe].texture}return Z}function te(O,T,Z){let ie=3553;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=35866),T.isData3DTexture&&(ie=32879);const le=Y(O,T),pe=T.source;t.bindTexture(ie,O.__webglTexture,33984+Z);const z=n.get(pe);if(pe.version!==z.__version||le===!0){t.activeTexture(33984+Z),s.pixelStorei(37440,T.flipY),s.pixelStorei(37441,T.premultiplyAlpha),s.pixelStorei(3317,T.unpackAlignment),s.pixelStorei(37443,0);const k=w(T)&&v(T.image)===!1;let j=x(T.image,k,!1,u);j=me(T,j);const xe=v(j)||a,we=r.convert(T.format,T.encoding);let ye=r.convert(T.type),_e=y(T.internalFormat,we,ye,T.encoding,T.isVideoTexture);E(ie,T,xe);let de;const Ne=T.mipmaps,ze=a&&T.isVideoTexture!==!0,qe=z.__version===void 0||le===!0,V=A(T,j,xe);if(T.isDepthTexture)_e=6402,a?T.type===Ei?_e=36012:T.type===Ai?_e=33190:T.type===hr?_e=35056:_e=33189:T.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Di&&_e===6402&&T.type!==Mu&&T.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ai,ye=r.convert(T.type)),T.format===gr&&_e===6402&&(_e=34041,T.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=hr,ye=r.convert(T.type))),qe&&(ze?t.texStorage2D(3553,1,_e,j.width,j.height):t.texImage2D(3553,0,_e,j.width,j.height,0,we,ye,null));else if(T.isDataTexture)if(Ne.length>0&&xe){ze&&qe&&t.texStorage2D(3553,V,_e,Ne[0].width,Ne[0].height);for(let re=0,ve=Ne.length;re<ve;re++)de=Ne[re],ze?t.texSubImage2D(3553,re,0,0,de.width,de.height,we,ye,de.data):t.texImage2D(3553,re,_e,de.width,de.height,0,we,ye,de.data);T.generateMipmaps=!1}else ze?(qe&&t.texStorage2D(3553,V,_e,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,we,ye,j.data)):t.texImage2D(3553,0,_e,j.width,j.height,0,we,ye,j.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ze&&qe&&t.texStorage3D(35866,V,_e,Ne[0].width,Ne[0].height,j.depth);for(let re=0,ve=Ne.length;re<ve;re++)de=Ne[re],T.format!==Fn?we!==null?ze?t.compressedTexSubImage3D(35866,re,0,0,0,de.width,de.height,j.depth,we,de.data,0,0):t.compressedTexImage3D(35866,re,_e,de.width,de.height,j.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(35866,re,0,0,0,de.width,de.height,j.depth,we,ye,de.data):t.texImage3D(35866,re,_e,de.width,de.height,j.depth,0,we,ye,de.data)}else{ze&&qe&&t.texStorage2D(3553,V,_e,Ne[0].width,Ne[0].height);for(let re=0,ve=Ne.length;re<ve;re++)de=Ne[re],T.format!==Fn?we!==null?ze?t.compressedTexSubImage2D(3553,re,0,0,de.width,de.height,we,de.data):t.compressedTexImage2D(3553,re,_e,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(3553,re,0,0,de.width,de.height,we,ye,de.data):t.texImage2D(3553,re,_e,de.width,de.height,0,we,ye,de.data)}else if(T.isDataArrayTexture)ze?(qe&&t.texStorage3D(35866,V,_e,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,we,ye,j.data)):t.texImage3D(35866,0,_e,j.width,j.height,j.depth,0,we,ye,j.data);else if(T.isData3DTexture)ze?(qe&&t.texStorage3D(32879,V,_e,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,we,ye,j.data)):t.texImage3D(32879,0,_e,j.width,j.height,j.depth,0,we,ye,j.data);else if(T.isFramebufferTexture){if(qe)if(ze)t.texStorage2D(3553,V,_e,j.width,j.height);else{let re=j.width,ve=j.height;for(let Le=0;Le<V;Le++)t.texImage2D(3553,Le,_e,re,ve,0,we,ye,null),re>>=1,ve>>=1}}else if(Ne.length>0&&xe){ze&&qe&&t.texStorage2D(3553,V,_e,Ne[0].width,Ne[0].height);for(let re=0,ve=Ne.length;re<ve;re++)de=Ne[re],ze?t.texSubImage2D(3553,re,0,0,we,ye,de):t.texImage2D(3553,re,_e,we,ye,de);T.generateMipmaps=!1}else ze?(qe&&t.texStorage2D(3553,V,_e,j.width,j.height),t.texSubImage2D(3553,0,0,0,we,ye,j)):t.texImage2D(3553,0,_e,we,ye,j);M(T,xe)&&P(ie),z.__version=pe.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function ae(O,T,Z){if(T.image.length!==6)return;const ie=Y(O,T),le=T.source;t.bindTexture(34067,O.__webglTexture,33984+Z);const pe=n.get(le);if(le.version!==pe.__version||ie===!0){t.activeTexture(33984+Z),s.pixelStorei(37440,T.flipY),s.pixelStorei(37441,T.premultiplyAlpha),s.pixelStorei(3317,T.unpackAlignment),s.pixelStorei(37443,0);const z=T.isCompressedTexture||T.image[0].isCompressedTexture,k=T.image[0]&&T.image[0].isDataTexture,j=[];for(let re=0;re<6;re++)!z&&!k?j[re]=x(T.image[re],!1,!0,c):j[re]=k?T.image[re].image:T.image[re],j[re]=me(T,j[re]);const xe=j[0],we=v(xe)||a,ye=r.convert(T.format,T.encoding),_e=r.convert(T.type),de=y(T.internalFormat,ye,_e,T.encoding),Ne=a&&T.isVideoTexture!==!0,ze=pe.__version===void 0||ie===!0;let qe=A(T,xe,we);E(34067,T,we);let V;if(z){Ne&&ze&&t.texStorage2D(34067,qe,de,xe.width,xe.height);for(let re=0;re<6;re++){V=j[re].mipmaps;for(let ve=0;ve<V.length;ve++){const Le=V[ve];T.format!==Fn?ye!==null?Ne?t.compressedTexSubImage2D(34069+re,ve,0,0,Le.width,Le.height,ye,Le.data):t.compressedTexImage2D(34069+re,ve,de,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(34069+re,ve,0,0,Le.width,Le.height,ye,_e,Le.data):t.texImage2D(34069+re,ve,de,Le.width,Le.height,0,ye,_e,Le.data)}}}else{V=T.mipmaps,Ne&&ze&&(V.length>0&&qe++,t.texStorage2D(34067,qe,de,j[0].width,j[0].height));for(let re=0;re<6;re++)if(k){Ne?t.texSubImage2D(34069+re,0,0,0,j[re].width,j[re].height,ye,_e,j[re].data):t.texImage2D(34069+re,0,de,j[re].width,j[re].height,0,ye,_e,j[re].data);for(let ve=0;ve<V.length;ve++){const De=V[ve].image[re].image;Ne?t.texSubImage2D(34069+re,ve+1,0,0,De.width,De.height,ye,_e,De.data):t.texImage2D(34069+re,ve+1,de,De.width,De.height,0,ye,_e,De.data)}}else{Ne?t.texSubImage2D(34069+re,0,0,0,ye,_e,j[re]):t.texImage2D(34069+re,0,de,ye,_e,j[re]);for(let ve=0;ve<V.length;ve++){const Le=V[ve];Ne?t.texSubImage2D(34069+re,ve+1,0,0,ye,_e,Le.image[re]):t.texImage2D(34069+re,ve+1,de,ye,_e,Le.image[re])}}}M(T,we)&&P(34067),pe.__version=le.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function oe(O,T,Z,ie,le){const pe=r.convert(Z.format,Z.encoding),z=r.convert(Z.type),k=y(Z.internalFormat,pe,z,Z.encoding);n.get(T).__hasExternalTextures||(le===32879||le===35866?t.texImage3D(le,0,k,T.width,T.height,T.depth,0,pe,z,null):t.texImage2D(le,0,k,T.width,T.height,0,pe,z,null)),t.bindFramebuffer(36160,O),Se(T)?d.framebufferTexture2DMultisampleEXT(36160,ie,le,n.get(Z).__webglTexture,0,ue(T)):(le===3553||le>=34069&&le<=34074)&&s.framebufferTexture2D(36160,ie,le,n.get(Z).__webglTexture,0),t.bindFramebuffer(36160,null)}function he(O,T,Z){if(s.bindRenderbuffer(36161,O),T.depthBuffer&&!T.stencilBuffer){let ie=33189;if(Z||Se(T)){const le=T.depthTexture;le&&le.isDepthTexture&&(le.type===Ei?ie=36012:le.type===Ai&&(ie=33190));const pe=ue(T);Se(T)?d.renderbufferStorageMultisampleEXT(36161,pe,ie,T.width,T.height):s.renderbufferStorageMultisample(36161,pe,ie,T.width,T.height)}else s.renderbufferStorage(36161,ie,T.width,T.height);s.framebufferRenderbuffer(36160,36096,36161,O)}else if(T.depthBuffer&&T.stencilBuffer){const ie=ue(T);Z&&Se(T)===!1?s.renderbufferStorageMultisample(36161,ie,35056,T.width,T.height):Se(T)?d.renderbufferStorageMultisampleEXT(36161,ie,35056,T.width,T.height):s.renderbufferStorage(36161,34041,T.width,T.height),s.framebufferRenderbuffer(36160,33306,36161,O)}else{const ie=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let le=0;le<ie.length;le++){const pe=ie[le],z=r.convert(pe.format,pe.encoding),k=r.convert(pe.type),j=y(pe.internalFormat,z,k,pe.encoding),xe=ue(T);Z&&Se(T)===!1?s.renderbufferStorageMultisample(36161,xe,j,T.width,T.height):Se(T)?d.renderbufferStorageMultisampleEXT(36161,xe,j,T.width,T.height):s.renderbufferStorage(36161,j,T.width,T.height)}}s.bindRenderbuffer(36161,null)}function G(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),H(T.depthTexture,0);const ie=n.get(T.depthTexture).__webglTexture,le=ue(T);if(T.depthTexture.format===Di)Se(T)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,le):s.framebufferTexture2D(36160,36096,3553,ie,0);else if(T.depthTexture.format===gr)Se(T)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,le):s.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function fe(O){const T=n.get(O),Z=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");G(T.__webglFramebuffer,O)}else if(Z){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]=s.createRenderbuffer(),he(T.__webglDepthbuffer[ie],O,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),he(T.__webglDepthbuffer,O,!1);t.bindFramebuffer(36160,null)}function Pe(O,T,Z){const ie=n.get(O);T!==void 0&&oe(ie.__webglFramebuffer,O,O.texture,36064,3553),Z!==void 0&&fe(O)}function Me(O){const T=O.texture,Z=n.get(O),ie=n.get(T);O.addEventListener("dispose",U),O.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=T.version,o.memory.textures++);const le=O.isWebGLCubeRenderTarget===!0,pe=O.isWebGLMultipleRenderTargets===!0,z=v(O)||a;if(le){Z.__webglFramebuffer=[];for(let k=0;k<6;k++)Z.__webglFramebuffer[k]=s.createFramebuffer()}else{if(Z.__webglFramebuffer=s.createFramebuffer(),pe)if(i.drawBuffers){const k=O.texture;for(let j=0,xe=k.length;j<xe;j++){const we=n.get(k[j]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&O.samples>0&&Se(O)===!1){const k=pe?T:[T];Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let j=0;j<k.length;j++){const xe=k[j];Z.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[j]);const we=r.convert(xe.format,xe.encoding),ye=r.convert(xe.type),_e=y(xe.internalFormat,we,ye,xe.encoding,O.isXRRenderTarget===!0),de=ue(O);s.renderbufferStorageMultisample(36161,de,_e,O.width,O.height),s.framebufferRenderbuffer(36160,36064+j,36161,Z.__webglColorRenderbuffer[j])}s.bindRenderbuffer(36161,null),O.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),he(Z.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(36160,null)}}if(le){t.bindTexture(34067,ie.__webglTexture),E(34067,T,z);for(let k=0;k<6;k++)oe(Z.__webglFramebuffer[k],O,T,36064,34069+k);M(T,z)&&P(34067),t.unbindTexture()}else if(pe){const k=O.texture;for(let j=0,xe=k.length;j<xe;j++){const we=k[j],ye=n.get(we);t.bindTexture(3553,ye.__webglTexture),E(3553,we,z),oe(Z.__webglFramebuffer,O,we,36064+j,3553),M(we,z)&&P(3553)}t.unbindTexture()}else{let k=3553;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(a?k=O.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(k,ie.__webglTexture),E(k,T,z),oe(Z.__webglFramebuffer,O,T,36064,k),M(T,z)&&P(k),t.unbindTexture()}O.depthBuffer&&fe(O)}function Ce(O){const T=v(O)||a,Z=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let ie=0,le=Z.length;ie<le;ie++){const pe=Z[ie];if(M(pe,T)){const z=O.isWebGLCubeRenderTarget?34067:3553,k=n.get(pe).__webglTexture;t.bindTexture(z,k),P(z),t.unbindTexture()}}}function Be(O){if(a&&O.samples>0&&Se(O)===!1){const T=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],Z=O.width,ie=O.height;let le=16384;const pe=[],z=O.stencilBuffer?33306:36096,k=n.get(O),j=O.isWebGLMultipleRenderTargets===!0;if(j)for(let xe=0;xe<T.length;xe++)t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+xe,36161,null),t.bindFramebuffer(36160,k.__webglFramebuffer),s.framebufferTexture2D(36009,36064+xe,3553,null,0);t.bindFramebuffer(36008,k.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,k.__webglFramebuffer);for(let xe=0;xe<T.length;xe++){pe.push(36064+xe),O.depthBuffer&&pe.push(z);const we=k.__ignoreDepthValues!==void 0?k.__ignoreDepthValues:!1;if(we===!1&&(O.depthBuffer&&(le|=256),O.stencilBuffer&&(le|=1024)),j&&s.framebufferRenderbuffer(36008,36064,36161,k.__webglColorRenderbuffer[xe]),we===!0&&(s.invalidateFramebuffer(36008,[z]),s.invalidateFramebuffer(36009,[z])),j){const ye=n.get(T[xe]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,ye,0)}s.blitFramebuffer(0,0,Z,ie,0,0,Z,ie,le,9728),h&&s.invalidateFramebuffer(36008,pe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let xe=0;xe<T.length;xe++){t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+xe,36161,k.__webglColorRenderbuffer[xe]);const we=n.get(T[xe]).__webglTexture;t.bindFramebuffer(36160,k.__webglFramebuffer),s.framebufferTexture2D(36009,36064+xe,3553,we,0)}t.bindFramebuffer(36009,k.__webglMultisampledFramebuffer)}}function ue(O){return Math.min(f,O.samples)}function Se(O){const T=n.get(O);return a&&O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ae(O){const T=o.render.frame;b.get(O)!==T&&(b.set(O,T),O.update())}function me(O,T){const Z=O.encoding,ie=O.format,le=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===po||Z!==mi&&(Z===gt?a===!1?e.has("EXT_sRGB")===!0&&ie===Fn?(O.format=po,O.minFilter=fn,O.generateMipmaps=!1):T=Cu.sRGBToLinear(T):(ie!==Fn||le!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),T}this.allocateTextureUnit=J,this.resetTextureUnits=ee,this.setTexture2D=H,this.setTexture2DArray=S,this.setTexture3D=L,this.setTextureCube=Q,this.rebindTextures=Pe,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Se}function b0(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===Ii)return 5121;if(r===nd)return 32819;if(r===id)return 32820;if(r===$f)return 5120;if(r===ed)return 5122;if(r===Mu)return 5123;if(r===td)return 5124;if(r===Ai)return 5125;if(r===Ei)return 5126;if(r===Kr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===rd)return 6406;if(r===Fn)return 6408;if(r===ad)return 6409;if(r===od)return 6410;if(r===Di)return 6402;if(r===gr)return 34041;if(r===sd)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===po)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ld)return 6403;if(r===cd)return 36244;if(r===ud)return 33319;if(r===fd)return 33320;if(r===dd)return 36249;if(r===wa||r===Sa||r===Ma||r===Ta)if(o===gt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===wa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===wa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ma)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ta)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===dl||r===hl||r===ml||r===pl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===dl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ml)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===gl||r===_l)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===gl)return o===gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===_l)return o===gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===vl||r===bl||r===xl||r===yl||r===wl||r===Sl||r===Ml||r===Tl||r===Al||r===El||r===Cl||r===Dl||r===Ll||r===Pl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===vl)return o===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bl)return o===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xl)return o===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yl)return o===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wl)return o===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sl)return o===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ml)return o===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Tl)return o===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Al)return o===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===El)return o===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Cl)return o===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Dl)return o===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ll)return o===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Pl)return o===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Rl)return o===gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===hr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class x0 extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Is extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y0={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n),g=this._getHandJoint(c,p);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,b=.005;c.inputState.pinching&&d>h+b?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-b&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(y0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Is;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class w0 extends an{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:Di,u!==Di&&u!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Di&&(n=Ai),n===void 0&&u===gr&&(n=hr),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1}}class S0 extends Oi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,d=null,h=null;const b=t.getContextAttributes();let p=null,m=null;const g=[],_=[],x=new Set,v=new Map,w=new bn;w.layers.enable(1),w.viewport=new xt;const M=new bn;M.layers.enable(2),M.viewport=new xt;const P=[w,M],y=new x0;y.layers.enable(1),y.layers.enable(2);let A=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(S){let L=g[S];return L===void 0&&(L=new Ka,g[S]=L),L.getTargetRaySpace()},this.getControllerGrip=function(S){let L=g[S];return L===void 0&&(L=new Ka,g[S]=L),L.getGripSpace()},this.getHand=function(S){let L=g[S];return L===void 0&&(L=new Ka,g[S]=L),L.getHandSpace()};function N(S){const L=_.indexOf(S.inputSource);if(L===-1)return;const Q=g[L];Q!==void 0&&Q.dispatchEvent({type:S.type,data:S.inputSource})}function U(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",C);for(let S=0;S<g.length;S++){const L=_[S];L!==null&&(_[S]=null,g[S].disconnect(L))}A=null,R=null,e.setRenderTarget(p),d=null,f=null,u=null,i=null,m=null,H.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(S){r=S,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(S){a=S,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(S){l=S},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return h},this.getSession=function(){return i},this.setSession=async function(S){if(i=S,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",U),i.addEventListener("inputsourceschange",C),b.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const L={antialias:i.renderState.layers===void 0?b.antialias:!0,alpha:b.alpha,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,L),i.updateRenderState({baseLayer:d}),m=new pi(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:Ii,encoding:e.outputEncoding,stencilBuffer:b.stencil})}else{let L=null,Q=null,X=null;b.depth&&(X=b.stencil?35056:33190,L=b.stencil?gr:Di,Q=b.stencil?hr:Ai);const q={colorFormat:32856,depthFormat:X,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(q),i.updateRenderState({layers:[f]}),m=new pi(f.textureWidth,f.textureHeight,{format:Fn,type:Ii,depthTexture:new w0(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:b.stencil,encoding:e.outputEncoding,samples:b.antialias?4:0});const E=e.properties.get(m);E.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),H.setContext(i),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function C(S){for(let L=0;L<S.removed.length;L++){const Q=S.removed[L],X=_.indexOf(Q);X>=0&&(_[X]=null,g[X].disconnect(Q))}for(let L=0;L<S.added.length;L++){const Q=S.added[L];let X=_.indexOf(Q);if(X===-1){for(let E=0;E<g.length;E++)if(E>=_.length){_.push(Q),X=E;break}else if(_[E]===null){_[E]=Q,X=E;break}if(X===-1)break}const q=g[X];q&&q.connect(Q)}}const I=new K,D=new K;function B(S,L,Q){I.setFromMatrixPosition(L.matrixWorld),D.setFromMatrixPosition(Q.matrixWorld);const X=I.distanceTo(D),q=L.projectionMatrix.elements,E=Q.projectionMatrix.elements,Y=q[14]/(q[10]-1),te=q[14]/(q[10]+1),ae=(q[9]+1)/q[5],oe=(q[9]-1)/q[5],he=(q[8]-1)/q[0],G=(E[8]+1)/E[0],fe=Y*he,Pe=Y*G,Me=X/(-he+G),Ce=Me*-he;L.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(Ce),S.translateZ(Me),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert();const Be=Y+Me,ue=te+Me,Se=fe-Ce,Ae=Pe+(X-Ce),me=ae*te/ue*Be,O=oe*te/ue*Be;S.projectionMatrix.makePerspective(Se,Ae,me,O,Be,ue)}function ee(S,L){L===null?S.matrixWorld.copy(S.matrix):S.matrixWorld.multiplyMatrices(L.matrixWorld,S.matrix),S.matrixWorldInverse.copy(S.matrixWorld).invert()}this.updateCamera=function(S){if(i===null)return;y.near=M.near=w.near=S.near,y.far=M.far=w.far=S.far,(A!==y.near||R!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,R=y.far);const L=S.parent,Q=y.cameras;ee(y,L);for(let q=0;q<Q.length;q++)ee(Q[q],L);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),S.matrix.copy(y.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale);const X=S.children;for(let q=0,E=X.length;q<E;q++)X[q].updateMatrixWorld(!0);Q.length===2?B(y,w,M):y.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(S){f!==null&&(f.fixedFoveation=S),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=S)},this.getPlanes=function(){return x};let J=null;function W(S,L){if(c=L.getViewerPose(l||o),h=L,c!==null){const Q=c.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let X=!1;Q.length!==y.cameras.length&&(y.cameras.length=0,X=!0);for(let q=0;q<Q.length;q++){const E=Q[q];let Y=null;if(d!==null)Y=d.getViewport(E);else{const ae=u.getViewSubImage(f,E);Y=ae.viewport,q===0&&(e.setRenderTargetTextures(m,ae.colorTexture,f.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(m))}let te=P[q];te===void 0&&(te=new bn,te.layers.enable(q),te.viewport=new xt,P[q]=te),te.matrix.fromArray(E.transform.matrix),te.projectionMatrix.fromArray(E.projectionMatrix),te.viewport.set(Y.x,Y.y,Y.width,Y.height),q===0&&y.matrix.copy(te.matrix),X===!0&&y.cameras.push(te)}}for(let Q=0;Q<g.length;Q++){const X=_[Q],q=g[Q];X!==null&&q!==void 0&&q.update(X,L,l||o)}if(J&&J(S,L),L.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:L.detectedPlanes});let Q=null;for(const X of x)L.detectedPlanes.has(X)||(Q===null&&(Q=[]),Q.push(X));if(Q!==null)for(const X of Q)x.delete(X),v.delete(X),n.dispatchEvent({type:"planeremoved",data:X});for(const X of L.detectedPlanes)if(!x.has(X))x.add(X),v.set(X,L.lastChangedTime),n.dispatchEvent({type:"planeadded",data:X});else{const q=v.get(X);X.lastChangedTime>q&&(v.set(X,X.lastChangedTime),n.dispatchEvent({type:"planechanged",data:X}))}}h=null}const H=new Ou;H.setAnimationLoop(W),this.setAnimationLoop=function(S){J=S},this.dispose=function(){}}}function M0(s,e){function t(p,m){m.color.getRGB(p.fogColor.value,Iu(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,g,_,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),u(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(i(p,m),h(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),b(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,g,_):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===xn&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===xn&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const g=e.get(m).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let _;m.map?_=m.map:m.specularMap?_=m.specularMap:m.displacementMap?_=m.displacementMap:m.normalMap?_=m.normalMap:m.bumpMap?_=m.bumpMap:m.roughnessMap?_=m.roughnessMap:m.metalnessMap?_=m.metalnessMap:m.alphaMap?_=m.alphaMap:m.emissiveMap?_=m.emissiveMap:m.clearcoatMap?_=m.clearcoatMap:m.clearcoatNormalMap?_=m.clearcoatNormalMap:m.clearcoatRoughnessMap?_=m.clearcoatRoughnessMap:m.iridescenceMap?_=m.iridescenceMap:m.iridescenceThicknessMap?_=m.iridescenceThicknessMap:m.specularIntensityMap?_=m.specularIntensityMap:m.specularColorMap?_=m.specularColorMap:m.transmissionMap?_=m.transmissionMap:m.thicknessMap?_=m.thicknessMap:m.sheenColorMap?_=m.sheenColorMap:m.sheenRoughnessMap&&(_=m.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,g,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*g,p.scale.value=_*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let g;m.map?g=m.map:m.alphaMap&&(g=m.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,g){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===xn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function h(p,m){m.matcap&&(p.matcap.value=m.matcap)}function b(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function T0(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function l(_,x){const v=x.program;n.uniformBlockBinding(_,v)}function c(_,x){let v=i[_.id];v===void 0&&(b(_),v=u(_),i[_.id]=v,_.addEventListener("dispose",m));const w=x.program;n.updateUBOMapping(_,w);const M=e.render.frame;r[_.id]!==M&&(d(_),r[_.id]=M)}function u(_){const x=f();_.__bindingPointIndex=x;const v=s.createBuffer(),w=_.__size,M=_.usage;return s.bindBuffer(35345,v),s.bufferData(35345,w,M),s.bindBuffer(35345,null),s.bindBufferBase(35345,x,v),v}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=i[_.id],v=_.uniforms,w=_.__cache;s.bindBuffer(35345,x);for(let M=0,P=v.length;M<P;M++){const y=v[M];if(h(y,M,w)===!0){const A=y.__offset,R=Array.isArray(y.value)?y.value:[y.value];let N=0;for(let U=0;U<R.length;U++){const C=R[U],I=p(C);typeof C=="number"?(y.__data[0]=C,s.bufferSubData(35345,A+N,y.__data)):C.isMatrix3?(y.__data[0]=C.elements[0],y.__data[1]=C.elements[1],y.__data[2]=C.elements[2],y.__data[3]=C.elements[0],y.__data[4]=C.elements[3],y.__data[5]=C.elements[4],y.__data[6]=C.elements[5],y.__data[7]=C.elements[0],y.__data[8]=C.elements[6],y.__data[9]=C.elements[7],y.__data[10]=C.elements[8],y.__data[11]=C.elements[0]):(C.toArray(y.__data,N),N+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,A,y.__data)}}s.bindBuffer(35345,null)}function h(_,x,v){const w=_.value;if(v[x]===void 0){if(typeof w=="number")v[x]=w;else{const M=Array.isArray(w)?w:[w],P=[];for(let y=0;y<M.length;y++)P.push(M[y].clone());v[x]=P}return!0}else if(typeof w=="number"){if(v[x]!==w)return v[x]=w,!0}else{const M=Array.isArray(v[x])?v[x]:[v[x]],P=Array.isArray(w)?w:[w];for(let y=0;y<M.length;y++){const A=M[y];if(A.equals(P[y])===!1)return A.copy(P[y]),!0}}return!1}function b(_){const x=_.uniforms;let v=0;const w=16;let M=0;for(let P=0,y=x.length;P<y;P++){const A=x[P],R={boundary:0,storage:0},N=Array.isArray(A.value)?A.value:[A.value];for(let U=0,C=N.length;U<C;U++){const I=N[U],D=p(I);R.boundary+=D.boundary,R.storage+=D.storage}if(A.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=v,P>0){M=v%w;const U=w-M;M!==0&&U-R.boundary<0&&(v+=w-M,A.__offset=v)}v+=R.storage}return M=v%w,M>0&&(v+=w-M),_.__size=v,_.__cache={},this}function p(_){const x={boundary:0,storage:0};return typeof _=="number"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function g(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}function A0(){const s=Qr("canvas");return s.style.display="block",s}function Vu(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:A0(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let f=null,d=null;const h=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=mi,this.physicallyCorrectLights=!1,this.toneMapping=Wn,this.toneMappingExposure=1;const p=this;let m=!1,g=0,_=0,x=null,v=-1,w=null;const M=new xt,P=new xt;let y=null,A=e.width,R=e.height,N=1,U=null,C=null;const I=new xt(0,0,A,R),D=new xt(0,0,A,R);let B=!1;const ee=new Qs;let J=!1,W=!1,H=null;const S=new ht,L=new Ve,Q=new K,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function q(){return x===null?N:1}let E=t;function Y(F,ne){for(let se=0;se<F.length;se++){const $=F[se],ce=e.getContext($,ne);if(ce!==null)return ce}return null}try{const F={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Do}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),E===null){const ne=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&ne.shift(),E=Y(ne,F),E===null)throw Y(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}E.getShaderPrecisionFormat===void 0&&(E.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let te,ae,oe,he,G,fe,Pe,Me,Ce,Be,ue,Se,Ae,me,O,T,Z,ie,le,pe,z,k,j,xe;function we(){te=new Np(E),ae=new Ip(E,te,s),te.init(ae),k=new b0(E,te,ae),oe=new _0(E,te,ae),he=new Vp,G=new s0,fe=new v0(E,te,oe,G,ae,k,he),Pe=new Op(p),Me=new zp(p),Ce=new Jd(E,ae),j=new Pp(E,te,Ce,ae),Be=new Bp(E,Ce,he,j),ue=new Xp(E,Be,Ce,he),le=new jp(E,ae,fe),T=new Up(G),Se=new r0(p,Pe,Me,te,ae,j,T),Ae=new M0(p,G),me=new o0,O=new h0(te,ae),ie=new Lp(p,Pe,Me,oe,ue,u,o),Z=new g0(p,ue,ae),xe=new T0(E,he,ae,oe),pe=new Rp(E,te,he,ae),z=new Gp(E,te,he,ae),he.programs=Se.programs,p.capabilities=ae,p.extensions=te,p.properties=G,p.renderLists=me,p.shadowMap=Z,p.state=oe,p.info=he}we();const ye=new S0(p,E);this.xr=ye,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const F=te.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=te.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(F){F!==void 0&&(N=F,this.setSize(A,R,!1))},this.getSize=function(F){return F.set(A,R)},this.setSize=function(F,ne,se){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=F,R=ne,e.width=Math.floor(F*N),e.height=Math.floor(ne*N),se!==!1&&(e.style.width=F+"px",e.style.height=ne+"px"),this.setViewport(0,0,F,ne)},this.getDrawingBufferSize=function(F){return F.set(A*N,R*N).floor()},this.setDrawingBufferSize=function(F,ne,se){A=F,R=ne,N=se,e.width=Math.floor(F*se),e.height=Math.floor(ne*se),this.setViewport(0,0,F,ne)},this.getCurrentViewport=function(F){return F.copy(M)},this.getViewport=function(F){return F.copy(I)},this.setViewport=function(F,ne,se,$){F.isVector4?I.set(F.x,F.y,F.z,F.w):I.set(F,ne,se,$),oe.viewport(M.copy(I).multiplyScalar(N).floor())},this.getScissor=function(F){return F.copy(D)},this.setScissor=function(F,ne,se,$){F.isVector4?D.set(F.x,F.y,F.z,F.w):D.set(F,ne,se,$),oe.scissor(P.copy(D).multiplyScalar(N).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(F){oe.setScissorTest(B=F)},this.setOpaqueSort=function(F){U=F},this.setTransparentSort=function(F){C=F},this.getClearColor=function(F){return F.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(F=!0,ne=!0,se=!0){let $=0;F&&($|=16384),ne&&($|=256),se&&($|=1024),E.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),me.dispose(),O.dispose(),G.dispose(),Pe.dispose(),Me.dispose(),ue.dispose(),j.dispose(),xe.dispose(),Se.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Le),ye.removeEventListener("sessionend",De),H&&(H.dispose(),H=null),st.stop()};function _e(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const F=he.autoReset,ne=Z.enabled,se=Z.autoUpdate,$=Z.needsUpdate,ce=Z.type;we(),he.autoReset=F,Z.enabled=ne,Z.autoUpdate=se,Z.needsUpdate=$,Z.type=ce}function Ne(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function ze(F){const ne=F.target;ne.removeEventListener("dispose",ze),qe(ne)}function qe(F){V(F),G.remove(F)}function V(F){const ne=G.get(F).programs;ne!==void 0&&(ne.forEach(function(se){Se.releaseProgram(se)}),F.isShaderMaterial&&Se.releaseShaderCache(F))}this.renderBufferDirect=function(F,ne,se,$,ce,Ge){ne===null&&(ne=X);const He=ce.isMesh&&ce.matrixWorld.determinant()<0,Je=Ct(F,ne,se,$,ce);oe.setMaterial($,He);let Qe=se.index,rt=1;$.wireframe===!0&&(Qe=Be.getWireframeAttribute(se),rt=2);const it=se.drawRange,at=se.attributes.position;let yt=it.start*rt,Rt=(it.start+it.count)*rt;Ge!==null&&(yt=Math.max(yt,Ge.start*rt),Rt=Math.min(Rt,(Ge.start+Ge.count)*rt)),Qe!==null?(yt=Math.max(yt,0),Rt=Math.min(Rt,Qe.count)):at!=null&&(yt=Math.max(yt,0),Rt=Math.min(Rt,at.count));const pn=Rt-yt;if(pn<0||pn===1/0)return;j.setup(ce,$,Je,se,Qe);let En,Ee=pe;if(Qe!==null&&(En=Ce.get(Qe),Ee=z,Ee.setIndex(En)),ce.isMesh)$.wireframe===!0?(oe.setLineWidth($.wireframeLinewidth*q()),Ee.setMode(1)):Ee.setMode(4);else if(ce.isLine){let $e=$.linewidth;$e===void 0&&($e=1),oe.setLineWidth($e*q()),ce.isLineSegments?Ee.setMode(1):ce.isLineLoop?Ee.setMode(2):Ee.setMode(3)}else ce.isPoints?Ee.setMode(0):ce.isSprite&&Ee.setMode(4);if(ce.isInstancedMesh)Ee.renderInstances(yt,pn,ce.count);else if(se.isInstancedBufferGeometry){const $e=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Sr=Math.min(se.instanceCount,$e);Ee.renderInstances(yt,pn,Sr)}else Ee.render(yt,pn)},this.compile=function(F,ne){function se($,ce,Ge){$.transparent===!0&&$.side===ms?($.side=xn,$.needsUpdate=!0,dt($,ce,Ge),$.side=hi,$.needsUpdate=!0,dt($,ce,Ge),$.side=ms):dt($,ce,Ge)}d=O.get(F),d.init(),b.push(d),F.traverseVisible(function($){$.isLight&&$.layers.test(ne.layers)&&(d.pushLight($),$.castShadow&&d.pushShadow($))}),d.setupLights(p.physicallyCorrectLights),F.traverse(function($){const ce=$.material;if(ce)if(Array.isArray(ce))for(let Ge=0;Ge<ce.length;Ge++){const He=ce[Ge];se(He,F,$)}else se(ce,F,$)}),b.pop(),d=null};let re=null;function ve(F){re&&re(F)}function Le(){st.stop()}function De(){st.start()}const st=new Ou;st.setAnimationLoop(ve),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(F){re=F,ye.setAnimationLoop(F),F===null?st.stop():st.start()},ye.addEventListener("sessionstart",Le),ye.addEventListener("sessionend",De),this.render=function(F,ne){if(ne!==void 0&&ne.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(ne),ne=ye.getCamera()),F.isScene===!0&&F.onBeforeRender(p,F,ne,x),d=O.get(F,b.length),d.init(),b.push(d),S.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),ee.setFromProjectionMatrix(S),W=this.localClippingEnabled,J=T.init(this.clippingPlanes,W,ne),f=me.get(F,h.length),f.init(),h.push(f),Xe(F,ne,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(U,C),J===!0&&T.beginShadows();const se=d.state.shadowsArray;if(Z.render(se,F,ne),J===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(f,F),d.setupLights(p.physicallyCorrectLights),ne.isArrayCamera){const $=ne.cameras;for(let ce=0,Ge=$.length;ce<Ge;ce++){const He=$[ce];We(f,F,He,He.viewport)}}else We(f,F,ne);x!==null&&(fe.updateMultisampleRenderTarget(x),fe.updateRenderTargetMipmap(x)),F.isScene===!0&&F.onAfterRender(p,F,ne),j.resetDefaultState(),v=-1,w=null,b.pop(),b.length>0?d=b[b.length-1]:d=null,h.pop(),h.length>0?f=h[h.length-1]:f=null};function Xe(F,ne,se,$){if(F.visible===!1)return;if(F.layers.test(ne.layers)){if(F.isGroup)se=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(ne);else if(F.isLight)d.pushLight(F),F.castShadow&&d.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||ee.intersectsSprite(F)){$&&Q.setFromMatrixPosition(F.matrixWorld).applyMatrix4(S);const He=ue.update(F),Je=F.material;Je.visible&&f.push(F,He,Je,se,Q.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(F.isSkinnedMesh&&F.skeleton.frame!==he.render.frame&&(F.skeleton.update(),F.skeleton.frame=he.render.frame),!F.frustumCulled||ee.intersectsObject(F))){$&&Q.setFromMatrixPosition(F.matrixWorld).applyMatrix4(S);const He=ue.update(F),Je=F.material;if(Array.isArray(Je)){const Qe=He.groups;for(let rt=0,it=Qe.length;rt<it;rt++){const at=Qe[rt],yt=Je[at.materialIndex];yt&&yt.visible&&f.push(F,He,yt,se,Q.z,at)}}else Je.visible&&f.push(F,He,Je,se,Q.z,null)}}const Ge=F.children;for(let He=0,Je=Ge.length;He<Je;He++)Xe(Ge[He],ne,se,$)}function We(F,ne,se,$){const ce=F.opaque,Ge=F.transmissive,He=F.transparent;d.setupLightsView(se),Ge.length>0&&_t(ce,ne,se),$&&oe.viewport(M.copy($)),ce.length>0&&nt(ce,ne,se),Ge.length>0&&nt(Ge,ne,se),He.length>0&&nt(He,ne,se),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function _t(F,ne,se){const $=ae.isWebGL2;H===null&&(H=new pi(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?Kr:Ii,minFilter:Zr,samples:$&&r===!0?4:0})),p.getDrawingBufferSize(L),$?H.setSize(L.x,L.y):H.setSize(Xs(L.x),Xs(L.y));const ce=p.getRenderTarget();p.setRenderTarget(H),p.clear();const Ge=p.toneMapping;p.toneMapping=Wn,nt(F,ne,se),p.toneMapping=Ge,fe.updateMultisampleRenderTarget(H),fe.updateRenderTargetMipmap(H),p.setRenderTarget(ce)}function nt(F,ne,se){const $=ne.isScene===!0?ne.overrideMaterial:null;for(let ce=0,Ge=F.length;ce<Ge;ce++){const He=F[ce],Je=He.object,Qe=He.geometry,rt=$===null?He.material:$,it=He.group;Je.layers.test(se.layers)&&ut(Je,ne,se,Qe,rt,it)}}function ut(F,ne,se,$,ce,Ge){F.onBeforeRender(p,ne,se,$,ce,Ge),F.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ce.onBeforeRender(p,ne,se,$,F,Ge),ce.transparent===!0&&ce.side===ms?(ce.side=xn,ce.needsUpdate=!0,p.renderBufferDirect(se,ne,$,ce,F,Ge),ce.side=hi,ce.needsUpdate=!0,p.renderBufferDirect(se,ne,$,ce,F,Ge),ce.side=ms):p.renderBufferDirect(se,ne,$,ce,F,Ge),F.onAfterRender(p,ne,se,$,ce,Ge)}function dt(F,ne,se){ne.isScene!==!0&&(ne=X);const $=G.get(F),ce=d.state.lights,Ge=d.state.shadowsArray,He=ce.state.version,Je=Se.getParameters(F,ce.state,Ge,ne,se),Qe=Se.getProgramCacheKey(Je);let rt=$.programs;$.environment=F.isMeshStandardMaterial?ne.environment:null,$.fog=ne.fog,$.envMap=(F.isMeshStandardMaterial?Me:Pe).get(F.envMap||$.environment),rt===void 0&&(F.addEventListener("dispose",ze),rt=new Map,$.programs=rt);let it=rt.get(Qe);if(it!==void 0){if($.currentProgram===it&&$.lightsStateVersion===He)return mn(F,Je),it}else Je.uniforms=Se.getUniforms(F),F.onBuild(se,Je,p),F.onBeforeCompile(Je,p),it=Se.acquireProgram(Je,Qe),rt.set(Qe,it),$.uniforms=Je.uniforms;const at=$.uniforms;(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(at.clippingPlanes=T.uniform),mn(F,Je),$.needsLights=$t(F),$.lightsStateVersion=He,$.needsLights&&(at.ambientLightColor.value=ce.state.ambient,at.lightProbe.value=ce.state.probe,at.directionalLights.value=ce.state.directional,at.directionalLightShadows.value=ce.state.directionalShadow,at.spotLights.value=ce.state.spot,at.spotLightShadows.value=ce.state.spotShadow,at.rectAreaLights.value=ce.state.rectArea,at.ltc_1.value=ce.state.rectAreaLTC1,at.ltc_2.value=ce.state.rectAreaLTC2,at.pointLights.value=ce.state.point,at.pointLightShadows.value=ce.state.pointShadow,at.hemisphereLights.value=ce.state.hemi,at.directionalShadowMap.value=ce.state.directionalShadowMap,at.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,at.spotShadowMap.value=ce.state.spotShadowMap,at.spotLightMatrix.value=ce.state.spotLightMatrix,at.spotLightMap.value=ce.state.spotLightMap,at.pointShadowMap.value=ce.state.pointShadowMap,at.pointShadowMatrix.value=ce.state.pointShadowMatrix);const yt=it.getUniforms(),Rt=Vs.seqWithValue(yt.seq,at);return $.currentProgram=it,$.uniformsList=Rt,it}function mn(F,ne){const se=G.get(F);se.outputEncoding=ne.outputEncoding,se.instancing=ne.instancing,se.skinning=ne.skinning,se.morphTargets=ne.morphTargets,se.morphNormals=ne.morphNormals,se.morphColors=ne.morphColors,se.morphTargetsCount=ne.morphTargetsCount,se.numClippingPlanes=ne.numClippingPlanes,se.numIntersection=ne.numClipIntersection,se.vertexAlphas=ne.vertexAlphas,se.vertexTangents=ne.vertexTangents,se.toneMapping=ne.toneMapping}function Ct(F,ne,se,$,ce){ne.isScene!==!0&&(ne=X),fe.resetTextureUnits();const Ge=ne.fog,He=$.isMeshStandardMaterial?ne.environment:null,Je=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:mi,Qe=($.isMeshStandardMaterial?Me:Pe).get($.envMap||He),rt=$.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,it=!!$.normalMap&&!!se.attributes.tangent,at=!!se.morphAttributes.position,yt=!!se.morphAttributes.normal,Rt=!!se.morphAttributes.color,pn=$.toneMapped?p.toneMapping:Wn,En=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ee=En!==void 0?En.length:0,$e=G.get($),Sr=d.state.lights;if(J===!0&&(W===!0||F!==w)){const Ot=F===w&&$.id===v;T.setState($,F,Ot)}let wt=!1;$.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Sr.state.version||$e.outputEncoding!==Je||ce.isInstancedMesh&&$e.instancing===!1||!ce.isInstancedMesh&&$e.instancing===!0||ce.isSkinnedMesh&&$e.skinning===!1||!ce.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==Qe||$.fog===!0&&$e.fog!==Ge||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==T.numPlanes||$e.numIntersection!==T.numIntersection)||$e.vertexAlphas!==rt||$e.vertexTangents!==it||$e.morphTargets!==at||$e.morphNormals!==yt||$e.morphColors!==Rt||$e.toneMapping!==pn||ae.isWebGL2===!0&&$e.morphTargetsCount!==Ee)&&(wt=!0):(wt=!0,$e.__version=$.version);let kn=$e.currentProgram;wt===!0&&(kn=dt($,ne,ce));let zi=!1,zn=!1,ii=!1;const It=kn.getUniforms(),wn=$e.uniforms;if(oe.useProgram(kn.program)&&(zi=!0,zn=!0,ii=!0),$.id!==v&&(v=$.id,zn=!0),zi||w!==F){if(It.setValue(E,"projectionMatrix",F.projectionMatrix),ae.logarithmicDepthBuffer&&It.setValue(E,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),w!==F&&(w=F,zn=!0,ii=!0),$.isShaderMaterial||$.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshStandardMaterial||$.envMap){const Ot=It.map.cameraPosition;Ot!==void 0&&Ot.setValue(E,Q.setFromMatrixPosition(F.matrixWorld))}($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&It.setValue(E,"isOrthographic",F.isOrthographicCamera===!0),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial||$.isShadowMaterial||ce.isSkinnedMesh)&&It.setValue(E,"viewMatrix",F.matrixWorldInverse)}if(ce.isSkinnedMesh){It.setOptional(E,ce,"bindMatrix"),It.setOptional(E,ce,"bindMatrixInverse");const Ot=ce.skeleton;Ot&&(ae.floatVertexTextures?(Ot.boneTexture===null&&Ot.computeBoneTexture(),It.setValue(E,"boneTexture",Ot.boneTexture,fe),It.setValue(E,"boneTextureSize",Ot.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ni=se.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0&&ae.isWebGL2===!0)&&le.update(ce,se,$,kn),(zn||$e.receiveShadow!==ce.receiveShadow)&&($e.receiveShadow=ce.receiveShadow,It.setValue(E,"receiveShadow",ce.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(wn.envMap.value=Qe,wn.flipEnvMap.value=Qe.isCubeTexture&&Qe.isRenderTargetTexture===!1?-1:1),zn&&(It.setValue(E,"toneMappingExposure",p.toneMappingExposure),$e.needsLights&&Tt(wn,ii),Ge&&$.fog===!0&&Ae.refreshFogUniforms(wn,Ge),Ae.refreshMaterialUniforms(wn,$,N,R,H),Vs.upload(E,$e.uniformsList,wn,fe)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Vs.upload(E,$e.uniformsList,wn,fe),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&It.setValue(E,"center",ce.center),It.setValue(E,"modelViewMatrix",ce.modelViewMatrix),It.setValue(E,"normalMatrix",ce.normalMatrix),It.setValue(E,"modelMatrix",ce.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ot=$.uniformsGroups;for(let Bi=0,vi=Ot.length;Bi<vi;Bi++)if(ae.isWebGL2){const Gi=Ot[Bi];xe.update(Gi,kn),xe.bind(Gi,kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kn}function Tt(F,ne){F.ambientLightColor.needsUpdate=ne,F.lightProbe.needsUpdate=ne,F.directionalLights.needsUpdate=ne,F.directionalLightShadows.needsUpdate=ne,F.pointLights.needsUpdate=ne,F.pointLightShadows.needsUpdate=ne,F.spotLights.needsUpdate=ne,F.spotLightShadows.needsUpdate=ne,F.rectAreaLights.needsUpdate=ne,F.hemisphereLights.needsUpdate=ne}function $t(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(F,ne,se){G.get(F.texture).__webglTexture=ne,G.get(F.depthTexture).__webglTexture=se;const $=G.get(F);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=se===void 0,$.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,ne){const se=G.get(F);se.__webglFramebuffer=ne,se.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(F,ne=0,se=0){x=F,g=ne,_=se;let $=!0,ce=null,Ge=!1,He=!1;if(F){const Qe=G.get(F);Qe.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(36160,null),$=!1):Qe.__webglFramebuffer===void 0?fe.setupRenderTarget(F):Qe.__hasExternalTextures&&fe.rebindTextures(F,G.get(F.texture).__webglTexture,G.get(F.depthTexture).__webglTexture);const rt=F.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(He=!0);const it=G.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(ce=it[ne],Ge=!0):ae.isWebGL2&&F.samples>0&&fe.useMultisampledRTT(F)===!1?ce=G.get(F).__webglMultisampledFramebuffer:ce=it,M.copy(F.viewport),P.copy(F.scissor),y=F.scissorTest}else M.copy(I).multiplyScalar(N).floor(),P.copy(D).multiplyScalar(N).floor(),y=B;if(oe.bindFramebuffer(36160,ce)&&ae.drawBuffers&&$&&oe.drawBuffers(F,ce),oe.viewport(M),oe.scissor(P),oe.setScissorTest(y),Ge){const Qe=G.get(F.texture);E.framebufferTexture2D(36160,36064,34069+ne,Qe.__webglTexture,se)}else if(He){const Qe=G.get(F.texture),rt=ne||0;E.framebufferTextureLayer(36160,36064,Qe.__webglTexture,se||0,rt)}v=-1},this.readRenderTargetPixels=function(F,ne,se,$,ce,Ge,He){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=G.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&He!==void 0&&(Je=Je[He]),Je){oe.bindFramebuffer(36160,Je);try{const Qe=F.texture,rt=Qe.format,it=Qe.type;if(rt!==Fn&&k.convert(rt)!==E.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const at=it===Kr&&(te.has("EXT_color_buffer_half_float")||ae.isWebGL2&&te.has("EXT_color_buffer_float"));if(it!==Ii&&k.convert(it)!==E.getParameter(35738)&&!(it===Ei&&(ae.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!at){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=F.width-$&&se>=0&&se<=F.height-ce&&E.readPixels(ne,se,$,ce,k.convert(rt),k.convert(it),Ge)}finally{const Qe=x!==null?G.get(x).__webglFramebuffer:null;oe.bindFramebuffer(36160,Qe)}}},this.copyFramebufferToTexture=function(F,ne,se=0){const $=Math.pow(2,-se),ce=Math.floor(ne.image.width*$),Ge=Math.floor(ne.image.height*$);fe.setTexture2D(ne,0),E.copyTexSubImage2D(3553,se,0,0,F.x,F.y,ce,Ge),oe.unbindTexture()},this.copyTextureToTexture=function(F,ne,se,$=0){const ce=ne.image.width,Ge=ne.image.height,He=k.convert(se.format),Je=k.convert(se.type);fe.setTexture2D(se,0),E.pixelStorei(37440,se.flipY),E.pixelStorei(37441,se.premultiplyAlpha),E.pixelStorei(3317,se.unpackAlignment),ne.isDataTexture?E.texSubImage2D(3553,$,F.x,F.y,ce,Ge,He,Je,ne.image.data):ne.isCompressedTexture?E.compressedTexSubImage2D(3553,$,F.x,F.y,ne.mipmaps[0].width,ne.mipmaps[0].height,He,ne.mipmaps[0].data):E.texSubImage2D(3553,$,F.x,F.y,He,Je,ne.image),$===0&&se.generateMipmaps&&E.generateMipmap(3553),oe.unbindTexture()},this.copyTextureToTexture3D=function(F,ne,se,$,ce=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ge=F.max.x-F.min.x+1,He=F.max.y-F.min.y+1,Je=F.max.z-F.min.z+1,Qe=k.convert($.format),rt=k.convert($.type);let it;if($.isData3DTexture)fe.setTexture3D($,0),it=32879;else if($.isDataArrayTexture)fe.setTexture2DArray($,0),it=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(37440,$.flipY),E.pixelStorei(37441,$.premultiplyAlpha),E.pixelStorei(3317,$.unpackAlignment);const at=E.getParameter(3314),yt=E.getParameter(32878),Rt=E.getParameter(3316),pn=E.getParameter(3315),En=E.getParameter(32877),Ee=se.isCompressedTexture?se.mipmaps[0]:se.image;E.pixelStorei(3314,Ee.width),E.pixelStorei(32878,Ee.height),E.pixelStorei(3316,F.min.x),E.pixelStorei(3315,F.min.y),E.pixelStorei(32877,F.min.z),se.isDataTexture||se.isData3DTexture?E.texSubImage3D(it,ce,ne.x,ne.y,ne.z,Ge,He,Je,Qe,rt,Ee.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),E.compressedTexSubImage3D(it,ce,ne.x,ne.y,ne.z,Ge,He,Je,Qe,Ee.data)):E.texSubImage3D(it,ce,ne.x,ne.y,ne.z,Ge,He,Je,Qe,rt,Ee),E.pixelStorei(3314,at),E.pixelStorei(32878,yt),E.pixelStorei(3316,Rt),E.pixelStorei(3315,pn),E.pixelStorei(32877,En),ce===0&&$.generateMipmaps&&E.generateMipmap(it),oe.unbindTexture()},this.initTexture=function(F){F.isCubeTexture?fe.setTextureCube(F,0):F.isData3DTexture?fe.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?fe.setTexture2DArray(F,0):fe.setTexture2D(F,0),oe.unbindTexture()},this.resetState=function(){g=0,_=0,x=null,oe.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class E0 extends Vu{}E0.prototype.isWebGL1Renderer=!0;class C0 extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class D0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new K;class ui{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ui(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vo extends yn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hc=new ht,mc=new ht,Us=[],L0=new ht,Gr=new Kt;let pc=class extends Kt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,L0)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,hc),mc.multiplyMatrices(n,hc),Gr.matrixWorld=mc,Gr.raycast(e,Us);for(let o=0,a=Us.length;o<a;o++){const l=Us[o];l.instanceId=r,l.object=this,t.push(l)}Us.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};class bo extends ki{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gc=new K,_c=new K,vc=new ht,Ja=new Io,Os=new Fi;let P0=class extends pt{constructor(e=new on,t=new bo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)gc.fromBufferAttribute(t,i-1),_c.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=gc.distanceTo(_c);e.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(i),Os.radius+=r,e.ray.intersectsSphere(Os)===!1)return;vc.copy(i).invert(),Ja.copy(e.ray).applyMatrix4(vc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new K,u=new K,f=new K,d=new K,h=this.isLineSegments?2:1,b=n.index,m=n.attributes.position;if(b!==null){const g=Math.max(0,o.start),_=Math.min(b.count,o.start+o.count);for(let x=g,v=_-1;x<v;x+=h){const w=b.getX(x),M=b.getX(x+1);if(c.fromBufferAttribute(m,w),u.fromBufferAttribute(m,M),Ja.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let x=g,v=_-1;x<v;x+=h){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Ja.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};class No extends on{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new K,d=new K,h=[],b=[],p=[],m=[];for(let g=0;g<=n;g++){const _=[],x=g/n;let v=0;g==0&&o==0?v=.5/t:g==n&&l==Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const M=w/t;f.x=-e*Math.cos(i+M*r)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(i+M*r)*Math.sin(o+x*a),b.push(f.x,f.y,f.z),d.copy(f).normalize(),p.push(d.x,d.y,d.z),m.push(M+v,1-x),_.push(c++)}u.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){const x=u[g][_+1],v=u[g][_],w=u[g+1][_],M=u[g+1][_+1];(g!==0||o>0)&&h.push(x,v,M),(g!==n-1||l<Math.PI)&&h.push(v,w,M)}this.setIndex(h),this.setAttribute("position",new Gt(b,3)),this.setAttribute("normal",new Gt(p,3)),this.setAttribute("uv",new Gt(m,2))}static fromJSON(e){return new No(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class R0 extends on{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new K,r=new K;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],d=f.start,h=f.count;for(let b=d,p=d+h;b<p;b+=3)for(let m=0;m<3;m++){const g=a.getX(b+m),_=a.getX(b+(m+1)%3);i.fromBufferAttribute(o,g),r.fromBufferAttribute(o,_),bc(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,f=3*a+(c+1)%3;i.fromBufferAttribute(o,u),r.fromBufferAttribute(o,f),bc(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Gt(t,3))}}}function bc(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class I0 extends ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class U0 extends ki{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const xc={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class O0{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],b=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return b}return null}}}const Wu=new O0;class Hu{constructor(e){this.manager=e!==void 0?e:Wu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class F0 extends Hu{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=xc.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Qr("img");function l(){u(),xc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class yc extends Hu{constructor(e){super(e)}load(e,t,n,i){const r=new an,o=new F0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class k0 extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Qa=new ht,wc=new K,Sc=new K;class z0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(wc),Sc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sc),t.updateMatrixWorld(),Qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class N0 extends z0{constructor(){super(new ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}let B0=class extends k0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DefaultUp),this.updateMatrix(),this.target=new pt,this.shadow=new N0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};class ju extends on{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Xu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Mc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Mc(){return(typeof performance>"u"?Date:performance).now()}class xo extends D0{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class G0{constructor(e,t,n=0,i=1/0){this.ray=new Io(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return yo(e,this,n,t),n.sort(Tc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)yo(e[i],this,n,t);return n.sort(Tc),n}}function Tc(s,e){return s.distance-e.distance}function yo(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)yo(i[r],e,t,!0)}}class Ac{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ec=new K,Fs=new K;class V0{constructor(e=new K,t=new K){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ec.subVectors(e,this.start),Fs.subVectors(this.end,this.start);const n=Fs.dot(Fs);let r=Fs.dot(Ec)/n;return t&&(r=Zt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class wo extends $s{constructor(e,t,n,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);const W0={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ta{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const H0=new ko(-1,1,1,-1,0,1),Bo=new on;Bo.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3));Bo.setAttribute("uv",new Gt([0,2,0,0,2,0],2));class j0{constructor(e){this._mesh=new Kt(Bo,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,H0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class X0 extends ta{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Xn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ts.clone(e.uniforms),this.material=new Xn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new j0(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Cc extends ta{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class q0 extends ta{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Y0{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Ve);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new pi(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new X0(W0),this.clock=new Xu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Cc!==void 0&&(o instanceof Cc?n=!0:o instanceof q0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qu extends ta{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new tt}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Z0=(s,e,t)=>{s.renderer=new Vu({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),s.composer=new Y0(s.renderer),s.composer.addPass(new qu(s.scene,fi(s.camera)))},Dc=(s,e,t)=>{s.renderer&&(e?s.renderer.outputEncoding=mi:s.renderer.outputEncoding=gt,t?s.renderer.toneMapping=Wn:s.renderer.toneMapping=wu)},Lc=(s,e,t)=>{var n,i,r,o,a,l,c,u;!s.renderer||!s.composer||((i=(n=s.renderer).setSize)==null||i.call(n,e.width,e.height),(o=(r=s.renderer).setPixelRatio)==null||o.call(r,t),(l=(a=s.composer).setSize)==null||l.call(a,e.width,e.height),(u=(c=s.composer).setPixelRatio)==null||u.call(c,t))},Pc=(s,e,t)=>{s.renderer&&(s.renderer.shadowMap.enabled=e,s.renderer.shadowMap.type=t)},Tn=s=>s.userData,K0=(s,e)=>{s.pointer.update(t=>s.renderer?t.set(e.offsetX/s.renderer.domElement.clientWidth*2-1,-(e.offsetY/s.renderer.domElement.clientHeight)*2+1):t)},Yu=(s,e,t,n)=>(s.raycaster.setFromCamera(e,t),s.raycaster.intersectObjects(n,!1)),J0=(s,e)=>s.object.uuid!==e.object.uuid||s.instanceId!==e.instanceId,Q0=(s,e,t)=>{let n=fi(s.camera);const i=s.camera.subscribe(c=>n=c);Et(i);let r=fi(s.pointer);const o=s.pointer.subscribe(c=>r=c);Et(o);let a;const l=c=>{var d,h;c.preventDefault();const u=c.type;s.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,K0(s,c);const f=$0(e,r,n);if(u==="pointerdown"&&(a=f?{object:f.object,instanceId:f.instanceId}:null),u==="click"){if(!e_(f,a)){a=null;return}a=null}f&&((h=(d=Tn(f.object)).eventDispatcher)==null||h.call(d,u,{...f,event:c}))};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function $0(s,e,t){if(s.interactiveObjects.size===0||s.raycastableObjects.size===0)return null;const n=Yu(s,e,t,Array.from(s.raycastableObjects));return n.length===0||!s.interactiveObjects.has(n[0].object)?null:n[0]}function e_(s,e){return!s||!e?!1:s.object.uuid===e.object.uuid&&s.instanceId===e.instanceId}const t_=(s,e)=>{let t=fi(s.pointerOverCanvas);const n=s.pointerOverCanvas.subscribe(c=>t=c);Et(n);let i=fi(s.camera);const r=s.camera.subscribe(c=>i=c);Et(r);let o=fi(s.pointer);const a=s.pointer.subscribe(c=>o=c);return Et(a),{raycast:()=>{var f,d,h,b,p,m,g,_;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?Yu(e,o,i,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&J0(e.lastIntersection,u)&&((m=(p=Tn(e.lastIntersection.object)).eventDispatcher)==null||m.call(p,"pointerleave",e.lastIntersection),(_=(g=Tn(u.object)).eventDispatcher)==null||_.call(g,"pointerenter",u)):(b=(h=Tn(u.object)).eventDispatcher)==null||b.call(h,"pointerenter",u):e.lastIntersection&&((d=(f=Tn(e.lastIntersection.object)).eventDispatcher)==null||d.call(f,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},na=typeof window<"u",n_=s=>{if(!na)return;let e;const t=()=>{s(),e=requestAnimationFrame(t)};t(),Et(()=>{e&&cancelAnimationFrame(e)})},i_=(s,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(r=>{r.debugFrameloopMessage?e.invalidations[r.debugFrameloopMessage]=r.debugFrameloopMessage in e.invalidations?e.invalidations[r.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,r)=>r.order?!0:i,!1),n=s.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,r)=>(i.order??0)>(r.order??0)?1:-1).forEach(i=>i.fn(s,n)):e.frameHandlers.forEach(i=>i.fn(s,n))},r_=s=>{s.debugFrameloop&&(s.frame+=1,console.log(`frame: ${s.frame}${Object.keys(s.invalidations).length>0?", requested by ↴":""}`),Object.keys(s.invalidations).length>0&&console.table(s.invalidations),s.invalidations={})},s_=(s,e,t,n)=>{let i=fi(s.camera);const r=s.camera.subscribe(a=>i=a);Et(r);const{raycast:o}=t_(s,e);n_(()=>{n.dispose();const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),a&&(!i||!s.composer||!s.renderer||(i_(s,t),s.composer.passes.length>1?s.composer.render():s.renderer.render(s.scene,i),r_(t),t.frameInvalidated=!1,t.advance=!1))})},a_=()=>{const s=new bn(75,0,.1,1e3);return Tn(s).threlteDefaultCamera=!0,s.position.z=5,s.lookAt(0,0,0),s},o_=s=>{const e=s.size.subscribe(t=>{Tn(fi(s.camera)).threlteDefaultCamera&&s.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),s.invalidate("Default camera: aspect ratio changed"),i})});Et(e)},l_=(s,e,t,n,i,r,o)=>{const a={audioListeners:new Map,addAudioListener:(g,_)=>{if(_=_??"default",a.audioListeners.has(_)){console.warn(`An AudioListener with the id "${_}" has already been added, aborting.`);return}a.audioListeners.set(_,g)},removeAudioListener:g=>{if(g=g??"default",!a.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}a.audioListeners.delete(g)},getAudioListener:g=>{if(g=g??"default",!a.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}return a.audioListeners.get(g)}},l={debugFrameloop:r,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:gf([n,i],([g,_])=>g||_),pointer:Bt(new Ve),pointerOverCanvas:Bt(!1),clock:new Xu,camera:Bt(a_()),scene:new C0,renderer:void 0,composer:void 0,invalidate:g=>{l.frameInvalidated=!0,l.debugFrameloop&&g&&(l.invalidations[g]=l.invalidations[g]?l.invalidations[g]+1:1)},advance:()=>{l.advance=!0}},u={flat:Bt(e),linear:Bt(s),dpr:Bt(t),setCamera:g=>{c.camera.set(g),c.composer&&(c.composer.passes.forEach(_=>{_ instanceof qu&&(_.camera=g)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new G0,lastIntersection:null,addRaycastableObject:g=>{u.raycastableObjects.add(g)},removeRaycastableObject:g=>{u.raycastableObjects.delete(g)},addInteractiveObject:g=>{u.interactiveObjects.add(g)},removeInteractiveObject:g=>{u.interactiveObjects.delete(g)},addPass:g=>{c.composer&&(c.composer.addPass(g),c.invalidate("Canvas: adding pass"))},removePass:g=>{c.composer&&(c.composer.removePass(g),c.invalidate("Canvas: removing pass"))}},f={dispose:async(g=!1)=>{await Yr(),!(!f.shouldDispose&&!g)&&(f.disposableObjects.forEach((_,x)=>{var v;(_===0||g)&&((v=x==null?void 0:x.dispose)==null||v.call(x),f.disposableObjects.delete(x))}),f.shouldDispose=!1)},collectDisposableObjects:(g,_)=>{const x=_??[];return g&&(g!=null&&g.dispose&&typeof g.dispose=="function"&&g.type!=="Scene"&&x.push(g),Object.entries(g).forEach(([v,w])=>{if(v==="parent"||v==="children"||typeof w!="object")return;const M=w;M!=null&&M.dispose&&f.collectDisposableObjects(M,x)})),x},addDisposableObjects:g=>{g.forEach(_=>{const x=f.disposableObjects.get(_);x?f.disposableObjects.set(_,x+1):f.disposableObjects.set(_,1)})},removeDisposableObjects:g=>{g.length!==0&&(g.forEach(_=>{const x=f.disposableObjects.get(_);x&&x>0&&f.disposableObjects.set(_,x-1)}),f.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return Un("threlte",c),Un("threlte-root",u),Un("threlte-render-context",l),Un("threlte-audio-context",a),Un("threlte-disposal-context",f),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:a,disposalCtx:f,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>a,getDisposalCtx:()=>f}};function ia(s,e){const t=Bt(s);let n=s;const i=t.subscribe(a=>n=a);return Et(i),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(a),e==null||e(a,l)},update:a=>{const l=a(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const ln=()=>jn("threlte");function c_(s){let e;const t=s[8].default,n=Wt(t,s,s[7],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&128)&&Ht(n,t,i,i[7],e?Xt(t,i[7],r,null):jt(i[7]),null)},i(i){e||(ge(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}const u_=()=>({onChildMount:jn("threlte-hierarchical-object-on-mount"),onChildDestroy:jn("threlte-hierarchical-object-on-destroy")}),Zu=()=>jn("threlte-hierarchical-parent-context");function f_(s,e,t){var g;let n,{$$slots:i={},$$scope:r}=e,{object:o=void 0}=e,{children:a=[]}=e,{onChildMount:l=void 0}=e;const c=_=>{a.push(_),t(1,a),l==null||l(_)};let{onChildDestroy:u=void 0}=e;const f=_=>{const x=a.findIndex(v=>v.uuid===_.uuid);x!==-1&&a.splice(x,1),t(1,a),u==null||u(_)},{invalidate:d}=ln(),h=Zu();ft(s,h,_=>t(6,n=_));let{parent:b=n}=e;const p=u_();o&&((g=p.onChildMount)==null||g.call(p,o),d("HierarchicalObject: object added"));const m=ia(o,(_,x)=>{var v,w;x&&((v=p.onChildDestroy)==null||v.call(p,x),d("HierarchicalObject: object added")),_&&((w=p.onChildMount)==null||w.call(p,_),d("HierarchicalObject: object removed"))});return Et(()=>{var _;o&&((_=p.onChildDestroy)==null||_.call(p,o),d("HierarchicalObject: object removed"))}),Un("threlte-hierarchical-object-on-mount",c),Un("threlte-hierarchical-object-on-destroy",f),Un("threlte-hierarchical-parent-context",m),s.$$set=_=>{"object"in _&&t(3,o=_.object),"children"in _&&t(1,a=_.children),"onChildMount"in _&&t(4,l=_.onChildMount),"onChildDestroy"in _&&t(5,u=_.onChildDestroy),"parent"in _&&t(2,b=_.parent),"$$scope"in _&&t(7,r=_.$$scope)},s.$$.update=()=>{s.$$.dirty&64&&t(2,b=n),s.$$.dirty&8&&m.set(o)},[h,a,b,o,l,u,n,r,i]}class d_ extends Ze{constructor(e){super(),Ke(this,e,f_,c_,Ye,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function h_(s){let e;const t=s[1].default,n=Wt(t,s,s[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&16)&&Ht(n,t,i,i[4],e?Xt(t,i[4],r,null):jt(i[4]),null)},i(i){e||(ge(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function m_(s){let e,t;return e=new d_({props:{object:s[0],onChildMount:s[2],onChildDestroy:s[3],$$slots:{default:[h_]},$$scope:{ctx:s}}}),{c(){Re(e.$$.fragment)},l(n){Ie(e.$$.fragment,n)},m(n,i){Ue(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.object=n[0]),i&1&&(r.onChildMount=n[2]),i&1&&(r.onChildDestroy=n[3]),i&16&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(ge(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function p_(s,e,t){let{$$slots:n={},$$scope:i}=e,{object:r}=e;const o=l=>r.add(l),a=l=>r.remove(l);return s.$$set=l=>{"object"in l&&t(0,r=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[r,n,o,a,i]}class ra extends Ze{constructor(e){super(),Ke(this,e,p_,m_,Ye,{object:0})}}const g_=()=>{const s=Bt({width:0,height:0});let e={width:0,height:0};const t=s.subscribe(o=>e=o);Et(t);let n;const i=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:l}=n.parentElement;(a!==o.width||l!==o.height)&&s.set({width:a,height:l})},r=o=>{n=o,i(),window.addEventListener("resize",i)};return na?(Et(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:r,parentSize:s}):{parentSize:s,parentSizeAction:r}};function Rc(s){let e,t;return e=new ra({props:{object:s[0].scene,$$slots:{default:[__]},$$scope:{ctx:s}}}),{c(){Re(e.$$.fragment)},l(n){Ie(e.$$.fragment,n)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i[1]&4&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(ge(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function __(s){let e;const t=s[29].default,n=Wt(t,s,s[33],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&4)&&Ht(n,t,i,i[33],e?Xt(t,i[33],r,null):jt(i[33]),null)},i(i){e||(ge(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function v_(s){let e,t,n,i,r=s[2]&&Rc(s);return{c(){e=vt("canvas"),r&&r.c(),this.h()},l(o){e=bt(o,"CANVAS",{class:!0});var a=Mt(e);r&&r.l(a),a.forEach(Fe),this.h()},h(){ot(e,"class","svelte-o3oskp")},m(o,a){je(o,e,a),r&&r.m(e,null),s[30](e),t=!0,n||(i=[ff(s[3].call(null,e)),Mn(e,"click",s[9]),Mn(e,"contextmenu",s[10]),Mn(e,"pointerup",s[13]),Mn(e,"pointerdown",s[11]),Mn(e,"pointermove",s[12]),Mn(e,"pointerenter",s[31]),Mn(e,"pointerleave",s[32])],n=!0)},p(o,a){o[2]?r?(r.p(o,a),a[0]&4&&ge(r,1)):(r=Rc(o),r.c(),ge(r,1),r.m(e,null)):r&&(gi(),be(r,1,1,()=>{r=null}),_i())},i(o){t||(ge(r),t=!0)},o(o){be(r),t=!1},d(o){o&&Fe(e),r&&r.d(),s[30](null),n=!1,du(i)}}}const Ic=new Set;function b_(s,e,t){let n,i,r,o,{$$slots:a={},$$scope:l}=e,{dpr:c=na?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:f=!1}=e,{frameloop:d="demand"}=e,{debugFrameloop:h=!1}=e,{shadows:b=!0}=e,{shadowMapType:p=bu}=e,{size:m=void 0}=e,{rendererParameters:g=void 0}=e,_,x=!1;const v=Bt(m),{parentSize:w,parentSizeAction:M}=g_(),P=l_(f,u,c,v,w,h,d),{getCtx:y,renderCtx:A,disposalCtx:R}=P,{ctx:N,rootCtx:U,audioCtx:C}=P;o_(N),Ic.add(N.invalidate),Et(()=>{Ic.delete(N.invalidate)});const{size:I,scene:D}=N;ft(s,I,Y=>t(26,i=Y));const{flat:B,linear:ee,dpr:J}=U;ft(s,B,Y=>t(27,r=Y)),ft(s,ee,Y=>t(28,o=Y)),ft(s,J,Y=>t(25,n=Y)),Un("threlte-parent",Bt(D)),mu(()=>{_&&(Z0(N,_,g),Dc(N,o,r),Lc(N,i,n),Pc(N,b,p),t(2,x=!0))}),s_(N,U,A,R);const{onClick:W,onContextMenu:H,onPointerDown:S,onPointerMove:L,onPointerUp:Q}=Q0(N,U,A);Et(()=>{R.dispose(!0)});function X(Y){Vt[Y?"unshift":"push"](()=>{_=Y,t(1,_)})}const q=()=>y().pointerOverCanvas.set(!0),E=()=>y().pointerOverCanvas.set(!1);return s.$$set=Y=>{"dpr"in Y&&t(14,c=Y.dpr),"flat"in Y&&t(15,u=Y.flat),"linear"in Y&&t(16,f=Y.linear),"frameloop"in Y&&t(17,d=Y.frameloop),"debugFrameloop"in Y&&t(18,h=Y.debugFrameloop),"shadows"in Y&&t(19,b=Y.shadows),"shadowMapType"in Y&&t(20,p=Y.shadowMapType),"size"in Y&&t(21,m=Y.size),"rendererParameters"in Y&&t(22,g=Y.rendererParameters),"$$scope"in Y&&t(33,l=Y.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&2097152&&v.set(m),s.$$.dirty[0]&65536&&In(ee,o=f,o),s.$$.dirty[0]&32768&&In(B,r=u,r),s.$$.dirty[0]&16384&&In(J,n=c,n),s.$$.dirty[0]&402653184&&Dc(y(),o,r),s.$$.dirty[0]&100663296&&Lc(y(),i,n),s.$$.dirty[0]&1572864&&Pc(y(),b,p)},[N,_,x,M,y,I,B,ee,J,W,H,S,L,Q,c,u,f,d,h,b,p,m,g,U,C,n,i,r,o,a,X,q,E,l]}class x_ extends Ze{constructor(e){super(),Ke(this,e,b_,v_,Ye,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Go=()=>jn("threlte-root"),y_=()=>jn("threlte-disposal-context");function w_(s){let e;const t=s[9].default,n=Wt(t,s,s[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&256)&&Ht(n,t,i,i[8],e?Xt(t,i[8],r,null):jt(i[8]),null)},i(i){e||(ge(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}const Uc="threlte-disposable-object-context";function S_(s,e,t){let n,i,{$$slots:r={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:l,removeDisposableObjects:c}=y_();let{object:u=void 0}=e,f=u,{dispose:d=void 0}=e;const h=jn(Uc);ft(s,h,m=>t(7,i=m));const b=Bt(d??i??!0);ft(s,b,m=>t(6,n=m)),Un(Uc,b);let p=n?a(u):[];return l(p),Et(()=>{c(p)}),s.$$set=m=>{"object"in m&&t(2,u=m.object),"dispose"in m&&t(3,d=m.dispose),"$$scope"in m&&t(8,o=m.$$scope)},s.$$.update=()=>{s.$$.dirty&136&&b.set(d??i??!0),s.$$.dirty&116&&u!==f&&(c(p),t(5,p=n?a(u):[]),l(p),t(4,f=u))},[h,b,u,d,f,p,n,i,o,r]}class An extends Ze{constructor(e){super(),Ke(this,e,S_,w_,Ye,{object:2,dispose:3})}}function M_(s,e,t){let n,i,{object:r}=e;const o=ia(r);ft(s,o,c=>t(4,i=c));const a=jn("threlte-layers");ft(s,a,c=>t(3,n=c));const{invalidate:l}=ln();return s.$$set=c=>{"object"in c&&t(2,r=c.object)},s.$$.update=()=>{if(s.$$.dirty&4&&o.set(r),s.$$.dirty&24){if(n==="all")i.layers.enableAll();else if(n==="none")i.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const u=c;n.includes(u)?i.layers.enable(c):i.layers.disable(c)}else n!==void 0&&i.layers.set(n);l("LayerableObject")}},[o,a,r,n,i]}class T_ extends Ze{constructor(e){super(),Ke(this,e,M_,null,Ye,{object:2})}}const yr=(s,e)=>{if(!na)return{start:()=>{},stop:()=>{},started:_f(!1)};const t=jn("threlte-render-context"),n={fn:s,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=Bt(!1),r=()=>{t.frameHandlers.delete(n),i.set(!1)},o=()=>{t.frameHandlers.add(n),i.set(!0)};return((e==null?void 0:e.autostart)??!0)&&o(),Et(()=>{r()}),{start:o,stop:r,started:{subscribe:i.subscribe}}},Ku=()=>{const s=Bt(!1);return(async()=>{await Yr(),s.set(!0)})(),s};function A_(s,e,t){let n,i,{object:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new K,f=vr(),{invalidate:d}=ln(),h=Ku();ft(s,h,x=>t(8,i=x));const b=async()=>{i||await Yr(),f("transform")},p=async()=>{d("TransformableObject: transformed"),await b()};Tn(r).onTransform=p;const{start:m,stop:g}=yr(async()=>{c&&!l&&c instanceof pt&&(c.getWorldPosition(u),r.lookAt(u),await b())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),_=ia(r);return ft(s,_,x=>t(7,n=x)),s.$$set=x=>{"object"in x&&t(2,r=x.object),"position"in x&&t(3,o=x.position),"scale"in x&&t(4,a=x.scale),"rotation"in x&&t(5,l=x.rotation),"lookAt"in x&&t(6,c=x.lookAt)},s.$$.update=()=>{s.$$.dirty&4&&_.set(r),s.$$.dirty&232&&(o&&(n.position.set(o.x??0,o.y??0,o.z??0),p()),c&&!l&&(c instanceof pt?m():(g(),n.lookAt(c.x??0,c.y??0,c.z??0),p())),c||g()),s.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set(a.x??1,a.y??1,a.z??1),p()),s.$$.dirty&160&&l&&(n.rotation.set(l.x??0,l.y??0,l.z??0,l.order??"XYZ"),p())},[h,_,r,o,a,l,c,n]}class sa extends Ze{constructor(e){super(),Ke(this,e,A_,null,Ye,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function E_(s,e,t){let n,i,r,{object:o}=e,{viewportAware:a=!1}=e;const l=vr(),{camera:c,invalidate:u}=ln();ft(s,c,M=>t(8,r=M));const f=new Qs,d=new ht,h=M=>M.type==="Mesh",b=new K,p=()=>r?(d.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),f.setFromProjectionMatrix(d),h(o)?f.intersectsObject(o):(o.getWorldPosition(b),f.containsPoint(b))):!0,m=Ku();ft(s,m,M=>t(7,i=M));let{inViewport:g=p()}=e;const _=async M=>{M?(i||await Yr(),l("viewportenter",o)):(i||await Yr(),l("viewportleave",o))},{start:x,stop:v,started:w}=yr(()=>{const M=p();g===void 0?(t(3,g=p()),_(g)):M!==g&&(_(M),t(3,g=M))},{autostart:a,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return ft(s,w,M=>t(6,n=M)),u("ViewportAwareObject"),s.$$set=M=>{"object"in M&&t(4,o=M.object),"viewportAware"in M&&t(5,a=M.viewportAware),"inViewport"in M&&t(3,g=M.inViewport)},s.$$.update=()=>{s.$$.dirty&96&&(a&&!n?x():!a&&n&&v())},[c,m,w,g,o,a,n]}class C_ extends Ze{constructor(e){super(),Ke(this,e,E_,null,Ye,{object:4,viewportAware:5,inViewport:3})}}function D_(s){let e;const t=s[14].default,n=Wt(t,s,s[18],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&262144)&&Ht(n,t,i,i[18],e?Xt(t,i[18],r,null):jt(i[18]),null)},i(i){e||(ge(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function L_(s){let e,t;return e=new ra({props:{object:s[1],$$slots:{default:[D_]},$$scope:{ctx:s}}}),{c(){Re(e.$$.fragment)},l(n){Ie(e.$$.fragment,n)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&262144&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(ge(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function P_(s){let e,t,n,i,r,o,a,l,c;e=new T_({props:{object:s[1]}}),n=new sa({props:{object:s[1],position:s[2],rotation:s[4],scale:s[3],lookAt:s[5]}}),r=new An({props:{object:s[1],dispose:s[7],$$slots:{default:[L_]},$$scope:{ctx:s}}});function u(d){s[15](d)}let f={object:s[1],viewportAware:s[6]};return s[0]!==void 0&&(f.inViewport=s[0]),a=new C_({props:f}),Vt.push(()=>Jt(a,"inViewport",u)),a.$on("viewportenter",s[16]),a.$on("viewportleave",s[17]),{c(){Re(e.$$.fragment),t=lt(),Re(n.$$.fragment),i=lt(),Re(r.$$.fragment),o=lt(),Re(a.$$.fragment)},l(d){Ie(e.$$.fragment,d),t=ct(d),Ie(n.$$.fragment,d),i=ct(d),Ie(r.$$.fragment,d),o=ct(d),Ie(a.$$.fragment,d)},m(d,h){Ue(e,d,h),je(d,t,h),Ue(n,d,h),je(d,i,h),Ue(r,d,h),je(d,o,h),Ue(a,d,h),c=!0},p(d,[h]){const b={};h&2&&(b.object=d[1]),e.$set(b);const p={};h&2&&(p.object=d[1]),h&4&&(p.position=d[2]),h&16&&(p.rotation=d[4]),h&8&&(p.scale=d[3]),h&32&&(p.lookAt=d[5]),n.$set(p);const m={};h&2&&(m.object=d[1]),h&128&&(m.dispose=d[7]),h&262146&&(m.$$scope={dirty:h,ctx:d}),r.$set(m);const g={};h&2&&(g.object=d[1]),h&64&&(g.viewportAware=d[6]),!l&&h&1&&(l=!0,g.inViewport=d[0],Qt(()=>l=!1)),a.$set(g)},i(d){c||(ge(e.$$.fragment,d),ge(n.$$.fragment,d),ge(r.$$.fragment,d),ge(a.$$.fragment,d),c=!0)},o(d){be(e.$$.fragment,d),be(n.$$.fragment,d),be(r.$$.fragment,d),be(a.$$.fragment,d),c=!1},d(d){Oe(e,d),d&&Fe(t),Oe(n,d),d&&Fe(i),Oe(r,d),d&&Fe(o),Oe(a,d)}}}function R_(s,e,t){let{$$slots:n={},$$scope:i}=e,{object:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:h=void 0}=e,{frustumCulled:b=void 0}=e,{renderOrder:p=void 0}=e,{visible:m=void 0}=e,{dispose:g=void 0}=e,{userData:_=void 0}=e;const{invalidate:x}=ln(),v=()=>r;function w(y){f=y,t(0,f)}function M(y){ke.call(this,s,y)}function P(y){ke.call(this,s,y)}return s.$$set=y=>{"object"in y&&t(1,r=y.object),"position"in y&&t(2,o=y.position),"scale"in y&&t(3,a=y.scale),"rotation"in y&&t(4,l=y.rotation),"lookAt"in y&&t(5,c=y.lookAt),"viewportAware"in y&&t(6,u=y.viewportAware),"inViewport"in y&&t(0,f=y.inViewport),"castShadow"in y&&t(8,d=y.castShadow),"receiveShadow"in y&&t(9,h=y.receiveShadow),"frustumCulled"in y&&t(10,b=y.frustumCulled),"renderOrder"in y&&t(11,p=y.renderOrder),"visible"in y&&t(12,m=y.visible),"dispose"in y&&t(7,g=y.dispose),"userData"in y&&t(13,_=y.userData),"$$scope"in y&&t(18,i=y.$$scope)},s.$$.update=()=>{s.$$.dirty&16128&&(m!==void 0&&(v().visible=m),d!==void 0&&(v().castShadow=d),h!==void 0&&(v().receiveShadow=h),b!==void 0&&(v().frustumCulled=b),p!==void 0&&(v().renderOrder=p),_!==void 0&&(v().userData={...v().userData,..._}),x("Object3DInstance: props changed"))},[f,r,o,a,l,c,u,g,d,h,b,p,m,_,n,w,M,P,i]}class ns extends Ze{constructor(e){super(),Ke(this,e,R_,P_,Ye,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function I_(s){let e;const t=s[17].default,n=Wt(t,s,s[21],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2097152)&&Ht(n,t,i,i[21],e?Xt(t,i[21],r,null):jt(i[21]),null)},i(i){e||(ge(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function U_(s){let e,t,n;function i(o){s[18](o)}let r={object:s[1],lookAt:s[5],castShadow:s[7],receiveShadow:s[8],frustumCulled:s[9],renderOrder:s[10],position:s[2],scale:s[3],rotation:s[4],viewportAware:s[6],visible:s[11],userData:s[12],dispose:s[13],$$slots:{default:[I_]},$$scope:{ctx:s}};return s[0]!==void 0&&(r.inViewport=s[0]),e=new ns({props:r}),Vt.push(()=>Jt(e,"inViewport",i)),e.$on("viewportenter",s[19]),e.$on("viewportleave",s[20]),{c(){Re(e.$$.fragment)},l(o){Ie(e.$$.fragment,o)},m(o,a){Ue(e,o,a),n=!0},p(o,[a]){const l={};a&2&&(l.object=o[1]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&4096&&(l.userData=o[12]),a&8192&&(l.dispose=o[13]),a&2097152&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],Qt(()=>t=!1)),e.$set(l)},i(o){n||(ge(e.$$.fragment,o),n=!0)},o(o){be(e.$$.fragment,o),n=!1},d(o){Oe(e,o)}}}function O_(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{camera:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:f=!1}=e,{inViewport:d=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:b=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:m=void 0}=e,{visible:g=void 0}=e,{userData:_=void 0}=e,{dispose:x=void 0}=e,{useCamera:v=!1}=e;const w=ia(o);ft(s,w,R=>t(16,n=R));const{setCamera:M}=Go();function P(R){d=R,t(0,d)}function y(R){ke.call(this,s,R)}function A(R){ke.call(this,s,R)}return s.$$set=R=>{"camera"in R&&t(1,o=R.camera),"position"in R&&t(2,a=R.position),"scale"in R&&t(3,l=R.scale),"rotation"in R&&t(4,c=R.rotation),"lookAt"in R&&t(5,u=R.lookAt),"viewportAware"in R&&t(6,f=R.viewportAware),"inViewport"in R&&t(0,d=R.inViewport),"castShadow"in R&&t(7,h=R.castShadow),"receiveShadow"in R&&t(8,b=R.receiveShadow),"frustumCulled"in R&&t(9,p=R.frustumCulled),"renderOrder"in R&&t(10,m=R.renderOrder),"visible"in R&&t(11,g=R.visible),"userData"in R&&t(12,_=R.userData),"dispose"in R&&t(13,x=R.dispose),"useCamera"in R&&t(15,v=R.useCamera),"$$scope"in R&&t(21,r=R.$$scope)},s.$$.update=()=>{s.$$.dirty&2&&w.set(o),s.$$.dirty&98304&&v&&M(n)},[d,o,a,l,c,u,f,h,b,p,m,g,_,x,w,v,n,i,P,y,A,r]}class F_ extends Ze{constructor(e){super(),Ke(this,e,O_,U_,Ye,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function k_(s){let e;const t=s[20].default,n=Wt(t,s,s[24],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&16777216)&&Ht(n,t,i,i[24],e?Xt(t,i[24],r,null):jt(i[24]),null)},i(i){e||(ge(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function z_(s){let e,t,n;function i(o){s[21](o)}let r={camera:s[0],position:s[2],scale:s[3],rotation:s[4],castShadow:s[6],receiveShadow:s[7],frustumCulled:s[8],renderOrder:s[9],visible:s[10],userData:s[11],dispose:s[12],viewportAware:s[13],lookAt:s[5],useCamera:s[14],$$slots:{default:[k_]},$$scope:{ctx:s}};return s[1]!==void 0&&(r.inViewport=s[1]),e=new F_({props:r}),Vt.push(()=>Jt(e,"inViewport",i)),e.$on("viewportenter",s[22]),e.$on("viewportleave",s[23]),{c(){Re(e.$$.fragment)},l(o){Ie(e.$$.fragment,o)},m(o,a){Ue(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.camera=o[0]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.castShadow=o[6]),a&128&&(l.receiveShadow=o[7]),a&256&&(l.frustumCulled=o[8]),a&512&&(l.renderOrder=o[9]),a&1024&&(l.visible=o[10]),a&2048&&(l.userData=o[11]),a&4096&&(l.dispose=o[12]),a&8192&&(l.viewportAware=o[13]),a&32&&(l.lookAt=o[5]),a&16384&&(l.useCamera=o[14]),a&16777216&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],Qt(()=>t=!1)),e.$set(l)},i(o){n||(ge(e.$$.fragment,o),n=!0)},o(o){be(e.$$.fragment,o),n=!1},d(o){Oe(e,o)}}}function N_(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:h=void 0}=e,{visible:b=void 0}=e,{userData:p=void 0}=e,{dispose:m=void 0}=e,{viewportAware:g=!1}=e,{inViewport:_=!1}=e,{useCamera:x=!0}=e,{near:v=void 0}=e,{far:w=void 0}=e,{fov:M=void 0}=e;const{size:P,invalidate:y}=ln();ft(s,P,C=>t(19,n=C));const A=new bn(M,n.width/n.height,v,w);function R(C){_=C,t(1,_)}function N(C){ke.call(this,s,C)}function U(C){ke.call(this,s,C)}return s.$$set=C=>{"position"in C&&t(2,o=C.position),"scale"in C&&t(3,a=C.scale),"rotation"in C&&t(4,l=C.rotation),"lookAt"in C&&t(5,c=C.lookAt),"castShadow"in C&&t(6,u=C.castShadow),"receiveShadow"in C&&t(7,f=C.receiveShadow),"frustumCulled"in C&&t(8,d=C.frustumCulled),"renderOrder"in C&&t(9,h=C.renderOrder),"visible"in C&&t(10,b=C.visible),"userData"in C&&t(11,p=C.userData),"dispose"in C&&t(12,m=C.dispose),"viewportAware"in C&&t(13,g=C.viewportAware),"inViewport"in C&&t(1,_=C.inViewport),"useCamera"in C&&t(14,x=C.useCamera),"near"in C&&t(16,v=C.near),"far"in C&&t(17,w=C.far),"fov"in C&&t(18,M=C.fov),"$$scope"in C&&t(24,r=C.$$scope)},s.$$.update=()=>{s.$$.dirty&524289&&(t(0,A.aspect=n.width/n.height,A),A.updateProjectionMatrix(),y("PerspectiveCamera: aspect changed")),s.$$.dirty&458753&&(v!==void 0&&t(0,A.near=v,A),w!==void 0&&t(0,A.far=w,A),M!==void 0&&t(0,A.fov=M,A),A.updateProjectionMatrix(),y("PerspectiveCamera: props changed"))},[A,_,o,a,l,c,u,f,d,h,b,p,m,g,x,P,v,w,M,n,i,R,N,U,r]}class B_ extends Ze{constructor(e){super(),Ke(this,e,N_,z_,Ye,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const Oc=[],G_=(s,e)=>{const t=Oc.find(i=>i instanceof s);if(t)return t;const n=e();return Oc.push(n),n},Fc={type:"change"},$a={type:"start"},kc={type:"end"};let V_=class extends Oi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",me),this._domElementKeyEvents=k},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Fc),n.update(),r=i.NONE},this.update=function(){const k=new K,j=new Ui().setFromUnitVectors(e.up,new K(0,1,0)),xe=j.clone().invert(),we=new K,ye=new Ui,_e=2*Math.PI;return function(){const Ne=n.object.position;k.copy(Ne).sub(n.target),k.applyQuaternion(j),a.setFromVector3(k),n.autoRotate&&r===i.NONE&&A(P()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ze=n.minAzimuthAngle,qe=n.maxAzimuthAngle;return isFinite(ze)&&isFinite(qe)&&(ze<-Math.PI?ze+=_e:ze>Math.PI&&(ze-=_e),qe<-Math.PI?qe+=_e:qe>Math.PI&&(qe-=_e),ze<=qe?a.theta=Math.max(ze,Math.min(qe,a.theta)):a.theta=a.theta>(ze+qe)/2?Math.max(ze,a.theta):Math.min(qe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),k.setFromSpherical(a),k.applyQuaternion(xe),Ne.copy(n.target).add(k),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||we.distanceToSquared(n.object.position)>o||8*(1-ye.dot(n.object.quaternion))>o?(n.dispatchEvent(Fc),we.copy(n.object.position),ye.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Z),n.domElement.removeEventListener("pointerdown",Pe),n.domElement.removeEventListener("pointercancel",Be),n.domElement.removeEventListener("wheel",Ae),n.domElement.removeEventListener("pointermove",Me),n.domElement.removeEventListener("pointerup",Ce),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",me)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Ac,l=new Ac;let c=1;const u=new K;let f=!1;const d=new Ve,h=new Ve,b=new Ve,p=new Ve,m=new Ve,g=new Ve,_=new Ve,x=new Ve,v=new Ve,w=[],M={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function A(k){l.theta-=k}function R(k){l.phi-=k}const N=function(){const k=new K;return function(xe,we){k.setFromMatrixColumn(we,0),k.multiplyScalar(-xe),u.add(k)}}(),U=function(){const k=new K;return function(xe,we){n.screenSpacePanning===!0?k.setFromMatrixColumn(we,1):(k.setFromMatrixColumn(we,0),k.crossVectors(n.object.up,k)),k.multiplyScalar(xe),u.add(k)}}(),C=function(){const k=new K;return function(xe,we){const ye=n.domElement;if(n.object.isPerspectiveCamera){const _e=n.object.position;k.copy(_e).sub(n.target);let de=k.length();de*=Math.tan(n.object.fov/2*Math.PI/180),N(2*xe*de/ye.clientHeight,n.object.matrix),U(2*we*de/ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(xe*(n.object.right-n.object.left)/n.object.zoom/ye.clientWidth,n.object.matrix),U(we*(n.object.top-n.object.bottom)/n.object.zoom/ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(k){n.object.isPerspectiveCamera?c/=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*k)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(k){n.object.isPerspectiveCamera?c*=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/k)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(k){d.set(k.clientX,k.clientY)}function ee(k){_.set(k.clientX,k.clientY)}function J(k){p.set(k.clientX,k.clientY)}function W(k){h.set(k.clientX,k.clientY),b.subVectors(h,d).multiplyScalar(n.rotateSpeed);const j=n.domElement;A(2*Math.PI*b.x/j.clientHeight),R(2*Math.PI*b.y/j.clientHeight),d.copy(h),n.update()}function H(k){x.set(k.clientX,k.clientY),v.subVectors(x,_),v.y>0?I(y()):v.y<0&&D(y()),_.copy(x),n.update()}function S(k){m.set(k.clientX,k.clientY),g.subVectors(m,p).multiplyScalar(n.panSpeed),C(g.x,g.y),p.copy(m),n.update()}function L(k){k.deltaY<0?D(y()):k.deltaY>0&&I(y()),n.update()}function Q(k){let j=!1;switch(k.code){case n.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(-n.keyPanSpeed,0),j=!0;break}j&&(k.preventDefault(),n.update())}function X(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{const k=.5*(w[0].pageX+w[1].pageX),j=.5*(w[0].pageY+w[1].pageY);d.set(k,j)}}function q(){if(w.length===1)p.set(w[0].pageX,w[0].pageY);else{const k=.5*(w[0].pageX+w[1].pageX),j=.5*(w[0].pageY+w[1].pageY);p.set(k,j)}}function E(){const k=w[0].pageX-w[1].pageX,j=w[0].pageY-w[1].pageY,xe=Math.sqrt(k*k+j*j);_.set(0,xe)}function Y(){n.enableZoom&&E(),n.enablePan&&q()}function te(){n.enableZoom&&E(),n.enableRotate&&X()}function ae(k){if(w.length==1)h.set(k.pageX,k.pageY);else{const xe=z(k),we=.5*(k.pageX+xe.x),ye=.5*(k.pageY+xe.y);h.set(we,ye)}b.subVectors(h,d).multiplyScalar(n.rotateSpeed);const j=n.domElement;A(2*Math.PI*b.x/j.clientHeight),R(2*Math.PI*b.y/j.clientHeight),d.copy(h)}function oe(k){if(w.length===1)m.set(k.pageX,k.pageY);else{const j=z(k),xe=.5*(k.pageX+j.x),we=.5*(k.pageY+j.y);m.set(xe,we)}g.subVectors(m,p).multiplyScalar(n.panSpeed),C(g.x,g.y),p.copy(m)}function he(k){const j=z(k),xe=k.pageX-j.x,we=k.pageY-j.y,ye=Math.sqrt(xe*xe+we*we);x.set(0,ye),v.set(0,Math.pow(x.y/_.y,n.zoomSpeed)),I(v.y),_.copy(x)}function G(k){n.enableZoom&&he(k),n.enablePan&&oe(k)}function fe(k){n.enableZoom&&he(k),n.enableRotate&&ae(k)}function Pe(k){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",Me),n.domElement.addEventListener("pointerup",Ce)),ie(k),k.pointerType==="touch"?O(k):ue(k))}function Me(k){n.enabled!==!1&&(k.pointerType==="touch"?T(k):Se(k))}function Ce(k){le(k),w.length===0&&(n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",Me),n.domElement.removeEventListener("pointerup",Ce)),n.dispatchEvent(kc),r=i.NONE}function Be(k){le(k)}function ue(k){let j;switch(k.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case Xi.DOLLY:if(n.enableZoom===!1)return;ee(k),r=i.DOLLY;break;case Xi.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enablePan===!1)return;J(k),r=i.PAN}else{if(n.enableRotate===!1)return;B(k),r=i.ROTATE}break;case Xi.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enableRotate===!1)return;B(k),r=i.ROTATE}else{if(n.enablePan===!1)return;J(k),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent($a)}function Se(k){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;W(k);break;case i.DOLLY:if(n.enableZoom===!1)return;H(k);break;case i.PAN:if(n.enablePan===!1)return;S(k);break}}function Ae(k){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(k.preventDefault(),n.dispatchEvent($a),L(k),n.dispatchEvent(kc))}function me(k){n.enabled===!1||n.enablePan===!1||Q(k)}function O(k){switch(pe(k),w.length){case 1:switch(n.touches.ONE){case qi.ROTATE:if(n.enableRotate===!1)return;X(),r=i.TOUCH_ROTATE;break;case qi.PAN:if(n.enablePan===!1)return;q(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case qi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Y(),r=i.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;te(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent($a)}function T(k){switch(pe(k),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ae(k),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;oe(k),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(k),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;fe(k),n.update();break;default:r=i.NONE}}function Z(k){n.enabled!==!1&&k.preventDefault()}function ie(k){w.push(k)}function le(k){delete M[k.pointerId];for(let j=0;j<w.length;j++)if(w[j].pointerId==k.pointerId){w.splice(j,1);return}}function pe(k){let j=M[k.pointerId];j===void 0&&(j=new Ve,M[k.pointerId]=j),j.set(k.pageX,k.pageY)}function z(k){const j=k.pointerId===w[0].pointerId?w[1]:w[0];return M[j.pointerId]}n.domElement.addEventListener("contextmenu",Z),n.domElement.addEventListener("pointerdown",Pe),n.domElement.addEventListener("pointercancel",Be),n.domElement.addEventListener("wheel",Ae,{passive:!1}),this.update()}};function W_(s){let e,t,n,i;return e=new An({props:{dispose:s[2],object:s[0]}}),n=new sa({props:{object:s[4],position:s[1]}}),n.$on("transform",s[5]),{c(){Re(e.$$.fragment),t=lt(),Re(n.$$.fragment)},l(r){Ie(e.$$.fragment,r),t=ct(r),Ie(n.$$.fragment,r)},m(r,o){Ue(e,r,o),je(r,t,o),Ue(n,r,o),i=!0},p(r,o){const a={};o[0]&4&&(a.dispose=r[2]),o[0]&1&&(a.object=r[0]),e.$set(a);const l={};o[0]&2&&(l.position=r[1]),n.$set(l)},i(r){i||(ge(e.$$.fragment,r),ge(n.$$.fragment,r),i=!0)},o(r){be(e.$$.fragment,r),be(n.$$.fragment,r),i=!1},d(r){Oe(e,r),r&&Fe(t),Oe(n,r)}}}function H_(s,e,t){let n,{autoRotate:i=void 0}=e,{autoRotateSpeed:r=void 0}=e,{dampingFactor:o=void 0}=e,{enableDamping:a=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:f=void 0}=e,{keyPanSpeed:d=void 0}=e,{keys:h=void 0}=e,{maxAzimuthAngle:b=void 0}=e,{maxDistance:p=void 0}=e,{maxPolarAngle:m=void 0}=e,{maxZoom:g=void 0}=e,{minAzimuthAngle:_=void 0}=e,{minDistance:x=void 0}=e,{minPolarAngle:v=void 0}=e,{minZoom:w=void 0}=e,{mouseButtons:M=void 0}=e,{panSpeed:P=void 0}=e,{rotateSpeed:y=void 0}=e,{screenSpacePanning:A=void 0}=e,{touches:R=void 0}=e,{zoomSpeed:N=void 0}=e,{target:U=void 0}=e,{dispose:C=void 0}=e;const I=Zu();ft(s,I,E=>t(30,n=E));const{renderer:D,invalidate:B}=ln();if(!D)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof Fo))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const ee=vr(),J=()=>{B("Orbitcontrols: change event"),ee("change")},W=()=>ee("start"),H=()=>ee("end"),S=new V_(n,D.domElement);Tn(n).orbitControls=S,S.addEventListener("change",J),S.addEventListener("start",W),S.addEventListener("end",H),Et(()=>{n&&delete Tn(n).orbitControls,S.removeEventListener("change",J),S.removeEventListener("start",W),S.removeEventListener("end",H)});const{start:L,stop:Q}=yr(()=>S.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),X=new pt,q=()=>{t(0,S.target=X.position,S),S.update(),B("OrbitControls: target changed")};return s.$$set=E=>{"autoRotate"in E&&t(6,i=E.autoRotate),"autoRotateSpeed"in E&&t(7,r=E.autoRotateSpeed),"dampingFactor"in E&&t(8,o=E.dampingFactor),"enableDamping"in E&&t(9,a=E.enableDamping),"enabled"in E&&t(10,l=E.enabled),"enablePan"in E&&t(11,c=E.enablePan),"enableRotate"in E&&t(12,u=E.enableRotate),"enableZoom"in E&&t(13,f=E.enableZoom),"keyPanSpeed"in E&&t(14,d=E.keyPanSpeed),"keys"in E&&t(15,h=E.keys),"maxAzimuthAngle"in E&&t(16,b=E.maxAzimuthAngle),"maxDistance"in E&&t(17,p=E.maxDistance),"maxPolarAngle"in E&&t(18,m=E.maxPolarAngle),"maxZoom"in E&&t(19,g=E.maxZoom),"minAzimuthAngle"in E&&t(20,_=E.minAzimuthAngle),"minDistance"in E&&t(21,x=E.minDistance),"minPolarAngle"in E&&t(22,v=E.minPolarAngle),"minZoom"in E&&t(23,w=E.minZoom),"mouseButtons"in E&&t(24,M=E.mouseButtons),"panSpeed"in E&&t(25,P=E.panSpeed),"rotateSpeed"in E&&t(26,y=E.rotateSpeed),"screenSpacePanning"in E&&t(27,A=E.screenSpacePanning),"touches"in E&&t(28,R=E.touches),"zoomSpeed"in E&&t(29,N=E.zoomSpeed),"target"in E&&t(1,U=E.target),"dispose"in E&&t(2,C=E.dispose)},s.$$.update=()=>{s.$$.dirty[0]&1073741761&&(i!==void 0&&t(0,S.autoRotate=i,S),r!==void 0&&t(0,S.autoRotateSpeed=r,S),o!==void 0&&t(0,S.dampingFactor=o,S),a!==void 0&&t(0,S.enableDamping=a,S),l!==void 0&&t(0,S.enabled=l,S),c!==void 0&&t(0,S.enablePan=c,S),u!==void 0&&t(0,S.enableRotate=u,S),f!==void 0&&t(0,S.enableZoom=f,S),d!==void 0&&t(0,S.keyPanSpeed=d,S),h!==void 0&&t(0,S.keys=h,S),b!==void 0&&t(0,S.maxAzimuthAngle=b,S),p!==void 0&&t(0,S.maxDistance=p,S),m!==void 0&&t(0,S.maxPolarAngle=m,S),g!==void 0&&t(0,S.maxZoom=g,S),_!==void 0&&t(0,S.minAzimuthAngle=_,S),x!==void 0&&t(0,S.minDistance=x,S),v!==void 0&&t(0,S.minPolarAngle=v,S),w!==void 0&&t(0,S.minZoom=w,S),M!==void 0&&t(0,S.mouseButtons=M,S),P!==void 0&&t(0,S.panSpeed=P,S),y!==void 0&&t(0,S.rotateSpeed=y,S),A!==void 0&&t(0,S.screenSpacePanning=A,S),R!==void 0&&t(0,S.touches=R,S),N!==void 0&&t(0,S.zoomSpeed=N,S),S.update(),B("OrbitControls: props changed")),s.$$.dirty[0]&576&&(i||a?L():Q())},[S,U,C,I,X,q,i,r,o,a,l,c,u,f,d,h,b,p,m,g,_,x,v,w,M,P,y,A,R,N]}class j_ extends Ze{constructor(e){super(),Ke(this,e,H_,W_,Ye,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}const X_=(s,e)=>e?new tt(s):new tt().setHex(new tt(s).getHex()).convertSRGBToLinear();function q_(s){let e;const t=s[18].default,n=Wt(t,s,s[22],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&4194304)&&Ht(n,t,i,i[22],e?Xt(t,i[22],r,null):jt(i[22]),null)},i(i){e||(ge(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function Y_(s){let e,t,n;function i(o){s[19](o)}let r={object:s[0],lookAt:s[5],castShadow:s[7],receiveShadow:s[8],frustumCulled:s[9],renderOrder:s[10],position:s[2],scale:s[3],rotation:s[4],viewportAware:s[6],visible:s[11],userData:s[12],dispose:s[13],$$slots:{default:[q_]},$$scope:{ctx:s}};return s[1]!==void 0&&(r.inViewport=s[1]),e=new ns({props:r}),Vt.push(()=>Jt(e,"inViewport",i)),e.$on("viewportenter",s[20]),e.$on("viewportleave",s[21]),{c(){Re(e.$$.fragment)},l(o){Ie(e.$$.fragment,o)},m(o,a){Ue(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.object=o[0]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&4096&&(l.userData=o[12]),a&8192&&(l.dispose=o[13]),a&4194304&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],Qt(()=>t=!1)),e.$set(l)},i(o){n||(ge(e.$$.fragment,o),n=!0)},o(o){be(e.$$.fragment,o),n=!1},d(o){Oe(e,o)}}}function Z_(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{light:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:f=!1}=e,{inViewport:d=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:b=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:m=void 0}=e,{visible:g=void 0}=e,{userData:_=void 0}=e,{dispose:x=void 0}=e,{color:v=void 0}=e,{intensity:w=void 0}=e;const{invalidate:M}=ln(),{linear:P}=Go();ft(s,P,N=>t(17,n=N));function y(N){d=N,t(1,d)}function A(N){ke.call(this,s,N)}function R(N){ke.call(this,s,N)}return s.$$set=N=>{"light"in N&&t(0,o=N.light),"position"in N&&t(2,a=N.position),"scale"in N&&t(3,l=N.scale),"rotation"in N&&t(4,c=N.rotation),"lookAt"in N&&t(5,u=N.lookAt),"viewportAware"in N&&t(6,f=N.viewportAware),"inViewport"in N&&t(1,d=N.inViewport),"castShadow"in N&&t(7,h=N.castShadow),"receiveShadow"in N&&t(8,b=N.receiveShadow),"frustumCulled"in N&&t(9,p=N.frustumCulled),"renderOrder"in N&&t(10,m=N.renderOrder),"visible"in N&&t(11,g=N.visible),"userData"in N&&t(12,_=N.userData),"dispose"in N&&t(13,x=N.dispose),"color"in N&&t(15,v=N.color),"intensity"in N&&t(16,w=N.intensity),"$$scope"in N&&t(22,r=N.$$scope)},s.$$.update=()=>{s.$$.dirty&229376&&(w!==void 0&&t(0,o.intensity=w,o),v!==void 0&&t(0,o.color=X_(v,n),o),M("LightInstance: props changed"))},[o,d,a,l,c,u,f,h,b,p,m,g,_,x,P,v,w,n,i,y,A,R,r]}class K_ extends Ze{constructor(e){super(),Ke(this,e,Z_,Y_,Ye,{light:0,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:1,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,color:15,intensity:16})}}function zc(s){let e,t,n,i,r,o;return e=new ra({props:{object:s[16]}}),n=new sa({props:{object:s[16],position:s[15]}}),r=new An({props:{dispose:s[10],object:s[15]}}),{c(){Re(e.$$.fragment),t=lt(),Re(n.$$.fragment),i=lt(),Re(r.$$.fragment)},l(a){Ie(e.$$.fragment,a),t=ct(a),Ie(n.$$.fragment,a),i=ct(a),Ie(r.$$.fragment,a)},m(a,l){Ue(e,a,l),je(a,t,l),Ue(n,a,l),je(a,i,l),Ue(r,a,l),o=!0},p(a,l){const c={};l&32768&&(c.position=a[15]),n.$set(c);const u={};l&1024&&(u.dispose=a[10]),l&32768&&(u.object=a[15]),r.$set(u)},i(a){o||(ge(e.$$.fragment,a),ge(n.$$.fragment,a),ge(r.$$.fragment,a),o=!0)},o(a){be(e.$$.fragment,a),be(n.$$.fragment,a),be(r.$$.fragment,a),o=!1},d(a){Oe(e,a),a&&Fe(t),Oe(n,a),a&&Fe(i),Oe(r,a)}}}function J_(s){let e;const t=s[18].default,n=Wt(t,s,s[22],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&4194304)&&Ht(n,t,i,i[22],e?Xt(t,i[22],r,null):jt(i[22]),null)},i(i){e||(ge(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function Q_(s){let e,t,n,i,r=s[15]&&!(s[15]instanceof pt)&&zc(s);function o(l){s[19](l)}let a={light:s[1],position:s[2],scale:s[3],rotation:s[4],castShadow:!!s[14],receiveShadow:s[5],frustumCulled:s[6],renderOrder:s[7],visible:s[8],userData:s[9],dispose:s[10],viewportAware:s[11],color:s[12],intensity:s[13],$$slots:{default:[J_]},$$scope:{ctx:s}};return s[0]!==void 0&&(a.inViewport=s[0]),t=new K_({props:a}),Vt.push(()=>Jt(t,"inViewport",o)),t.$on("viewportenter",s[20]),t.$on("viewportleave",s[21]),{c(){r&&r.c(),e=lt(),Re(t.$$.fragment)},l(l){r&&r.l(l),e=ct(l),Ie(t.$$.fragment,l)},m(l,c){r&&r.m(l,c),je(l,e,c),Ue(t,l,c),i=!0},p(l,[c]){l[15]&&!(l[15]instanceof pt)?r?(r.p(l,c),c&32768&&ge(r,1)):(r=zc(l),r.c(),ge(r,1),r.m(e.parentNode,e)):r&&(gi(),be(r,1,1,()=>{r=null}),_i());const u={};c&2&&(u.light=l[1]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&16384&&(u.castShadow=!!l[14]),c&32&&(u.receiveShadow=l[5]),c&64&&(u.frustumCulled=l[6]),c&128&&(u.renderOrder=l[7]),c&256&&(u.visible=l[8]),c&512&&(u.userData=l[9]),c&1024&&(u.dispose=l[10]),c&2048&&(u.viewportAware=l[11]),c&4096&&(u.color=l[12]),c&8192&&(u.intensity=l[13]),c&4194304&&(u.$$scope={dirty:c,ctx:l}),!n&&c&1&&(n=!0,u.inViewport=l[0],Qt(()=>n=!1)),t.$set(u)},i(l){i||(ge(r),ge(t.$$.fragment,l),i=!0)},o(l){be(r),be(t.$$.fragment,l),i=!1},d(l){r&&r.d(l),l&&Fe(e),Oe(t,l)}}}function $_(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{receiveShadow:c=void 0}=e,{frustumCulled:u=void 0}=e,{renderOrder:f=void 0}=e,{visible:d=void 0}=e,{userData:h=void 0}=e,{dispose:b=void 0}=e,{viewportAware:p=!1}=e,{inViewport:m=!1}=e,{color:g=void 0}=e,{intensity:_=void 0}=e,{shadow:x=void 0}=e,{target:v=void 0}=e;const w=new B0(g,_),{invalidate:M}=ln(),P=w.target,{start:y,stop:A,started:R}=yr(()=>{},{autostart:!1,debugFrameloopMessage:"DirectionalLight: tracking target"});ft(s,R,B=>t(23,n=B));const N=B=>{B&&B instanceof pt&&!n?(t(1,w.target=B,w),y(),M("DirectionalLight: target changed")):(!B||!(B instanceof pt))&&n&&(t(1,w.target=P,w),A(),M("DirectionalLight: target changed"))},U=B=>{if(B){const{mapSize:ee=[512,512],camera:{left:J=-5,bottom:W=-5,right:H=5,top:S=5,near:L=.5,far:Q=500}={},bias:X=0,radius:q=1}=B===!0?{}:B;w.shadow.mapSize.set(ee[0],ee[1]),t(1,w.shadow.camera.left=J,w),t(1,w.shadow.camera.top=S,w),t(1,w.shadow.camera.right=H,w),t(1,w.shadow.camera.bottom=W,w),t(1,w.shadow.camera.near=L,w),t(1,w.shadow.camera.far=Q,w),t(1,w.shadow.bias=X,w),t(1,w.shadow.radius=q,w)}M("DirectionalLight: shadow changed")};function C(B){m=B,t(0,m)}function I(B){ke.call(this,s,B)}function D(B){ke.call(this,s,B)}return s.$$set=B=>{"position"in B&&t(2,o=B.position),"scale"in B&&t(3,a=B.scale),"rotation"in B&&t(4,l=B.rotation),"receiveShadow"in B&&t(5,c=B.receiveShadow),"frustumCulled"in B&&t(6,u=B.frustumCulled),"renderOrder"in B&&t(7,f=B.renderOrder),"visible"in B&&t(8,d=B.visible),"userData"in B&&t(9,h=B.userData),"dispose"in B&&t(10,b=B.dispose),"viewportAware"in B&&t(11,p=B.viewportAware),"inViewport"in B&&t(0,m=B.inViewport),"color"in B&&t(12,g=B.color),"intensity"in B&&t(13,_=B.intensity),"shadow"in B&&t(14,x=B.shadow),"target"in B&&t(15,v=B.target),"$$scope"in B&&t(22,r=B.$$scope)},s.$$.update=()=>{s.$$.dirty&32768&&N(v),s.$$.dirty&16384&&U(x)},[m,w,o,a,l,c,u,f,d,h,b,p,g,_,x,v,P,R,i,C,I,D,r]}class ev extends Ze{constructor(e){super(),Ke(this,e,$_,Q_,Ye,{position:2,scale:3,rotation:4,receiveShadow:5,frustumCulled:6,renderOrder:7,visible:8,userData:9,dispose:10,viewportAware:11,inViewport:0,color:12,intensity:13,shadow:14,target:15,light:1})}get light(){return this.$$.ctx[1]}}function tv(s,e,t){let{object:n}=e,i=n,{interactive:r=!1}=e,{ignorePointer:o=!1}=e;const a=vr(),{addInteractiveObject:l,removeInteractiveObject:c,addRaycastableObject:u,removeRaycastableObject:f}=Go(),{invalidate:d}=ln(),h=p=>{f(p),c(p),delete Tn(p).eventDispatcher},b=(p,m,g)=>{Tn(p).eventDispatcher=a,m?(f(p),c(p)):(u(p),g?l(p):c(p))};return Et(()=>{h(n),d("InteractiveObject: object removed")}),s.$$set=p=>{"object"in p&&t(0,n=p.object),"interactive"in p&&t(1,r=p.interactive),"ignorePointer"in p&&t(2,o=p.ignorePointer)},s.$$.update=()=>{s.$$.dirty&15&&(n!==i?(h(i),b(n,o,r),d("InteractiveObject: object changed"),t(3,i=n)):n===i&&(b(n,o,r),d("InteractiveObject: props changed")))},[n,r,o,i]}class Ju extends Ze{constructor(e){super(),Ke(this,e,tv,null,Ye,{object:0,interactive:1,ignorePointer:2})}}function nv(s){let e;const t=s[16].default,n=Wt(t,s,s[27],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&134217728)&&Ht(n,t,i,i[27],e?Xt(t,i[27],r,null):jt(i[27]),null)},i(i){e||(ge(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function iv(s){let e,t,n,i,r;function o(l){s[17](l)}let a={object:s[1],lookAt:s[5],position:s[2],scale:s[3],rotation:s[4],castShadow:s[7],receiveShadow:s[8],frustumCulled:s[9],renderOrder:s[10],visible:s[11],userData:s[12],dispose:s[13],viewportAware:s[6],$$slots:{default:[nv]},$$scope:{ctx:s}};return s[0]!==void 0&&(a.inViewport=s[0]),e=new ns({props:a}),Vt.push(()=>Jt(e,"inViewport",o)),e.$on("viewportenter",s[18]),e.$on("viewportleave",s[19]),i=new Ju({props:{object:s[1],interactive:s[14],ignorePointer:s[15]}}),i.$on("click",s[20]),i.$on("contextmenu",s[21]),i.$on("pointerup",s[22]),i.$on("pointerdown",s[23]),i.$on("pointerenter",s[24]),i.$on("pointerleave",s[25]),i.$on("pointermove",s[26]),{c(){Re(e.$$.fragment),n=lt(),Re(i.$$.fragment)},l(l){Ie(e.$$.fragment,l),n=ct(l),Ie(i.$$.fragment,l)},m(l,c){Ue(e,l,c),je(l,n,c),Ue(i,l,c),r=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&4096&&(u.userData=l[12]),c&8192&&(u.dispose=l[13]),c&64&&(u.viewportAware=l[6]),c&134217728&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],Qt(()=>t=!1)),e.$set(u);const f={};c&2&&(f.object=l[1]),c&16384&&(f.interactive=l[14]),c&32768&&(f.ignorePointer=l[15]),i.$set(f)},i(l){r||(ge(e.$$.fragment,l),ge(i.$$.fragment,l),r=!0)},o(l){be(e.$$.fragment,l),be(i.$$.fragment,l),r=!1},d(l){Oe(e,l),l&&Fe(n),Oe(i,l)}}}function rv(s,e,t){let{$$slots:n={},$$scope:i}=e,{mesh:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:h=void 0}=e,{frustumCulled:b=void 0}=e,{renderOrder:p=void 0}=e,{visible:m=void 0}=e,{userData:g=void 0}=e,{dispose:_=void 0}=e,{interactive:x=!1}=e,{ignorePointer:v=!1}=e;function w(D){f=D,t(0,f)}function M(D){ke.call(this,s,D)}function P(D){ke.call(this,s,D)}function y(D){ke.call(this,s,D)}function A(D){ke.call(this,s,D)}function R(D){ke.call(this,s,D)}function N(D){ke.call(this,s,D)}function U(D){ke.call(this,s,D)}function C(D){ke.call(this,s,D)}function I(D){ke.call(this,s,D)}return s.$$set=D=>{"mesh"in D&&t(1,r=D.mesh),"position"in D&&t(2,o=D.position),"scale"in D&&t(3,a=D.scale),"rotation"in D&&t(4,l=D.rotation),"lookAt"in D&&t(5,c=D.lookAt),"viewportAware"in D&&t(6,u=D.viewportAware),"inViewport"in D&&t(0,f=D.inViewport),"castShadow"in D&&t(7,d=D.castShadow),"receiveShadow"in D&&t(8,h=D.receiveShadow),"frustumCulled"in D&&t(9,b=D.frustumCulled),"renderOrder"in D&&t(10,p=D.renderOrder),"visible"in D&&t(11,m=D.visible),"userData"in D&&t(12,g=D.userData),"dispose"in D&&t(13,_=D.dispose),"interactive"in D&&t(14,x=D.interactive),"ignorePointer"in D&&t(15,v=D.ignorePointer),"$$scope"in D&&t(27,i=D.$$scope)},[f,r,o,a,l,c,u,d,h,b,p,m,g,_,x,v,n,w,M,P,y,A,R,N,U,C,I,i]}class aa extends Ze{constructor(e){super(),Ke(this,e,rv,iv,Ye,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}function sv(s){let e;const t=s[20].default,n=Wt(t,s,s[31],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&1)&&Ht(n,t,i,i[31],e?Xt(t,i[31],r,null):jt(i[31]),null)},i(i){e||(ge(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function av(s){let e,t,n,i,r,o,a;e=new An({props:{dispose:s[11],object:s[15]}}),n=new An({props:{dispose:s[11],object:s[16]}});function l(u){s[21](u)}let c={mesh:s[17],position:s[1],scale:s[2],rotation:s[3],lookAt:s[14],castShadow:s[5],receiveShadow:s[6],frustumCulled:s[7],renderOrder:s[8],visible:s[9],interactive:s[12],ignorePointer:s[13],userData:s[10],dispose:s[11],viewportAware:s[4],$$slots:{default:[sv]},$$scope:{ctx:s}};return s[0]!==void 0&&(c.inViewport=s[0]),r=new aa({props:c}),Vt.push(()=>Jt(r,"inViewport",l)),r.$on("click",s[22]),r.$on("contextmenu",s[23]),r.$on("pointerup",s[24]),r.$on("pointerdown",s[25]),r.$on("pointerenter",s[26]),r.$on("pointerleave",s[27]),r.$on("pointermove",s[28]),r.$on("viewportenter",s[29]),r.$on("viewportleave",s[30]),{c(){Re(e.$$.fragment),t=lt(),Re(n.$$.fragment),i=lt(),Re(r.$$.fragment)},l(u){Ie(e.$$.fragment,u),t=ct(u),Ie(n.$$.fragment,u),i=ct(u),Ie(r.$$.fragment,u)},m(u,f){Ue(e,u,f),je(u,t,f),Ue(n,u,f),je(u,i,f),Ue(r,u,f),a=!0},p(u,f){const d={};f[0]&2048&&(d.dispose=u[11]),f[0]&32768&&(d.object=u[15]),e.$set(d);const h={};f[0]&2048&&(h.dispose=u[11]),f[0]&65536&&(h.object=u[16]),n.$set(h);const b={};f[0]&2&&(b.position=u[1]),f[0]&4&&(b.scale=u[2]),f[0]&8&&(b.rotation=u[3]),f[0]&16384&&(b.lookAt=u[14]),f[0]&32&&(b.castShadow=u[5]),f[0]&64&&(b.receiveShadow=u[6]),f[0]&128&&(b.frustumCulled=u[7]),f[0]&256&&(b.renderOrder=u[8]),f[0]&512&&(b.visible=u[9]),f[0]&4096&&(b.interactive=u[12]),f[0]&8192&&(b.ignorePointer=u[13]),f[0]&1024&&(b.userData=u[10]),f[0]&2048&&(b.dispose=u[11]),f[0]&16&&(b.viewportAware=u[4]),f[1]&1&&(b.$$scope={dirty:f,ctx:u}),!o&&f[0]&1&&(o=!0,b.inViewport=u[0],Qt(()=>o=!1)),r.$set(b)},i(u){a||(ge(e.$$.fragment,u),ge(n.$$.fragment,u),ge(r.$$.fragment,u),a=!0)},o(u){be(e.$$.fragment,u),be(n.$$.fragment,u),be(r.$$.fragment,u),a=!1},d(u){Oe(e,u),u&&Fe(t),Oe(n,u),u&&Fe(i),Oe(r,u)}}}function ov(s,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:h=void 0}=e,{visible:b=void 0}=e,{userData:p=void 0}=e,{dispose:m=void 0}=e,{interactive:g=!1}=e,{ignorePointer:_=!1}=e,{lookAt:x=void 0}=e,{geometry:v}=e,{material:w}=e,M=w,P=v;const{invalidate:y}=ln(),A=new Kt(v,w),R=()=>A;function N(S){c=S,t(0,c)}function U(S){ke.call(this,s,S)}function C(S){ke.call(this,s,S)}function I(S){ke.call(this,s,S)}function D(S){ke.call(this,s,S)}function B(S){ke.call(this,s,S)}function ee(S){ke.call(this,s,S)}function J(S){ke.call(this,s,S)}function W(S){ke.call(this,s,S)}function H(S){ke.call(this,s,S)}return s.$$set=S=>{"position"in S&&t(1,r=S.position),"scale"in S&&t(2,o=S.scale),"rotation"in S&&t(3,a=S.rotation),"viewportAware"in S&&t(4,l=S.viewportAware),"inViewport"in S&&t(0,c=S.inViewport),"castShadow"in S&&t(5,u=S.castShadow),"receiveShadow"in S&&t(6,f=S.receiveShadow),"frustumCulled"in S&&t(7,d=S.frustumCulled),"renderOrder"in S&&t(8,h=S.renderOrder),"visible"in S&&t(9,b=S.visible),"userData"in S&&t(10,p=S.userData),"dispose"in S&&t(11,m=S.dispose),"interactive"in S&&t(12,g=S.interactive),"ignorePointer"in S&&t(13,_=S.ignorePointer),"lookAt"in S&&t(14,x=S.lookAt),"geometry"in S&&t(15,v=S.geometry),"material"in S&&t(16,w=S.material),"$$scope"in S&&t(31,i=S.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&327680&&(w!==M?(R().material=w,y("Mesh: material changed")):y("Mesh: material props changed"),t(18,M=w)),s.$$.dirty[0]&557056&&(v!==P?(R().geometry=v,y("Mesh: geometry changed")):y("Mesh: geometry props changed"),t(19,P=v))},[c,r,o,a,l,u,f,d,h,b,p,m,g,_,x,v,w,A,M,P,n,N,U,C,I,D,B,ee,J,W,H,i]}class lv extends Ze{constructor(e){super(),Ke(this,e,ov,av,Ye,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,geometry:15,material:16,mesh:17},null,[-1,-1])}get mesh(){return this.$$.ctx[17]}}const cv=(s,e)=>{let t=s;return{onChange:(i,r)=>{(e&&!e(i,t)||!e&&i!==t)&&(r(i,t),t=i)}}};function Nc(s){let e,t,n;function i(o){s[24](o)}let r={mesh:s[17],castShadow:s[5],receiveShadow:s[6],frustumCulled:void 0,renderOrder:s[7],visible:s[8],userData:s[9],dispose:s[10],interactive:s[11],ignorePointer:s[12],viewportAware:s[4]};return s[0]!==void 0&&(r.inViewport=s[0]),e=new aa({props:r}),Vt.push(()=>Jt(e,"inViewport",i)),e.$on("click",s[20]),e.$on("contextmenu",s[20]),e.$on("pointerup",s[20]),e.$on("pointerdown",s[20]),e.$on("pointerenter",s[20]),e.$on("pointerleave",s[20]),e.$on("pointermove",s[20]),e.$on("viewportenter",s[25]),e.$on("viewportleave",s[26]),{c(){Re(e.$$.fragment)},l(o){Ie(e.$$.fragment,o)},m(o,a){Ue(e,o,a),n=!0},p(o,a){const l={};a[0]&131072&&(l.mesh=o[17]),a[0]&32&&(l.castShadow=o[5]),a[0]&64&&(l.receiveShadow=o[6]),a[0]&128&&(l.renderOrder=o[7]),a[0]&256&&(l.visible=o[8]),a[0]&512&&(l.userData=o[9]),a[0]&1024&&(l.dispose=o[10]),a[0]&2048&&(l.interactive=o[11]),a[0]&4096&&(l.ignorePointer=o[12]),a[0]&16&&(l.viewportAware=o[4]),!t&&a[0]&1&&(t=!0,l.inViewport=o[0],Qt(()=>t=!1)),e.$set(l)},i(o){n||(ge(e.$$.fragment,o),n=!0)},o(o){be(e.$$.fragment,o),n=!1},d(o){Oe(e,o)}}}function uv(s){let e=s[17].uuid,t,n,i=Nc(s);const r=s[23].default,o=Wt(r,s,s[27],null);return{c(){i.c(),t=lt(),o&&o.c()},l(a){i.l(a),t=ct(a),o&&o.l(a)},m(a,l){i.m(a,l),je(a,t,l),o&&o.m(a,l),n=!0},p(a,l){l[0]&131072&&Ye(e,e=a[17].uuid)?(gi(),be(i,1,1,sn),_i(),i=Nc(a),i.c(),ge(i,1),i.m(t.parentNode,t)):i.p(a,l),o&&o.p&&(!n||l[0]&134217728)&&Ht(o,r,a,a[27],n?Xt(r,a[27],l,null):jt(a[27]),null)},i(a){n||(ge(i),ge(o,a),n=!0)},o(a){be(i),be(o,a),n=!1},d(a){i.d(a),a&&Fe(t),o&&o.d(a)}}}function fv(s){let e,t,n,i,r,o;return e=new An({props:{dispose:s[10],object:s[14]}}),n=new An({props:{dispose:s[10],object:s[15]}}),r=new ns({props:{object:s[18],position:s[1],scale:s[2],rotation:s[3],lookAt:s[13],$$slots:{default:[uv]},$$scope:{ctx:s}}}),{c(){Re(e.$$.fragment),t=lt(),Re(n.$$.fragment),i=lt(),Re(r.$$.fragment)},l(a){Ie(e.$$.fragment,a),t=ct(a),Ie(n.$$.fragment,a),i=ct(a),Ie(r.$$.fragment,a)},m(a,l){Ue(e,a,l),je(a,t,l),Ue(n,a,l),je(a,i,l),Ue(r,a,l),o=!0},p(a,l){const c={};l[0]&1024&&(c.dispose=a[10]),l[0]&16384&&(c.object=a[14]),e.$set(c);const u={};l[0]&1024&&(u.dispose=a[10]),l[0]&32768&&(u.object=a[15]),n.$set(u);const f={};l[0]&2&&(f.position=a[1]),l[0]&4&&(f.scale=a[2]),l[0]&8&&(f.rotation=a[3]),l[0]&8192&&(f.lookAt=a[13]),l[0]&134356977&&(f.$$scope={dirty:l,ctx:a}),r.$set(f)},i(a){o||(ge(e.$$.fragment,a),ge(n.$$.fragment,a),ge(r.$$.fragment,a),o=!0)},o(a){be(e.$$.fragment,a),be(n.$$.fragment,a),be(r.$$.fragment,a),o=!1},d(a){Oe(e,a),a&&Fe(t),Oe(n,a),a&&Fe(i),Oe(r,a)}}}const Qu=new pt;Qu.scale.set(0,0,0);const Bc={matrix:Qu.matrix,color:null},dv=new ht().fromArray(new Array(16).fill(0)),eo=new tt(16777215),$u="threlte-instanced-mesh-context",hv=s=>jn($u+s);function mv(s,e,t){let n,i=sn,r=()=>(i(),i=df(C,G=>t(17,n=G)),C),o;s.$$.on_destroy.push(()=>i());let{$$slots:a={},$$scope:l}=e,{position:c=void 0}=e,{scale:u=void 0}=e,{rotation:f=void 0}=e,{viewportAware:d=!1}=e,{inViewport:h=!1}=e,{castShadow:b=void 0}=e,{receiveShadow:p=void 0}=e,{renderOrder:m=void 0}=e,{visible:g=void 0}=e,{userData:_=void 0}=e,{dispose:x=void 0}=e,{interactive:v=!1}=e,{ignorePointer:w=!1}=e,{lookAt:M=void 0}=e,{geometry:P}=e,{material:y}=e,{count:A=void 0}=e,{id:R=""}=e;const{onChange:N}=cv(y),U=G=>G===void 0,C=Bt(new pc(P,y,U(A)?0:A));r();const I=new pt,D=[],{invalidate:B}=ln(),ee=(G,fe)=>{const Pe=D.findIndex(Me=>Me===G);if(Pe===-1){console.warn("Instanced Mesh: Instance not found");return}fe(Pe)},{start:J,stop:W,started:H}=yr(()=>{n.dispose(),In(C,n=new pc(P,y,D.length),n),D.forEach((G,fe)=>{q(G,fe),G.color?n.setColorAt(fe,G.color):n.setColorAt(fe,eo)}),In(C,n.instanceMatrix.needsUpdate=!0,n),n.instanceColor&&In(C,n.instanceColor.needsUpdate=!0,n),W()},{autostart:!1,debugFrameloopMessage:"Instanced Mesh: auto instance count change queued"});ft(s,H,G=>t(29,o=G));const S=G=>{if(U(A))D.push(G),o||J();else{const fe=D.findIndex(Pe=>Pe===Bc);fe!==-1?D[fe]=G:D.push(G),D.length>A&&console.warn("Instanced Mesh: More instances requested than allocated, increase count on <")}Q(G),B("Instanced Mesh: Instance added")},L=G=>{if(U(A)){const fe=D.findIndex(Pe=>Pe===G);D.splice(fe,1),o||J()}else{X(G);const fe=D.findIndex(Pe=>Pe===G);fe>=A?D.splice(fe,1):D.splice(fe,1,Bc)}B("Instanced Mesh: Instance removed")},Q=G=>{G.color||ee(G,fe=>{n.setColorAt(fe,eo),n.instanceColor&&In(C,n.instanceColor.needsUpdate=!0,n)})},X=G=>{ee(G,fe=>{n.setMatrixAt(fe,dv),In(C,n.instanceMatrix.needsUpdate=!0,n),B("Instanced Mesh: instance matrix resetted")})},q=(G,fe)=>{n.setMatrixAt(fe,G.matrix),In(C,n.instanceMatrix.needsUpdate=!0,n),B("Instanced Mesh: instance matrix set")},E=G=>{ee(G,fe=>{q(G,fe)})},Y=G=>{ee(G,fe=>{n.setColorAt(fe,G.color??eo),n.instanceColor&&In(C,n.instanceColor.needsUpdate=!0,n),B("Instanced Mesh: instance color set")})};Un($u+R,{registerInstance:S,removeInstance:L,setInstanceMatrix:E,setInstanceColor:Y,parentObject:I});const te=G=>{if(G.detail.instanceId===void 0)return;const fe=D[G.detail.instanceId];fe&&fe.pointerEventDispatcher&&fe.pointerEventDispatcher(G.type,G.detail)};function ae(G){h=G,t(0,h)}function oe(G){ke.call(this,s,G)}function he(G){ke.call(this,s,G)}return s.$$set=G=>{"position"in G&&t(1,c=G.position),"scale"in G&&t(2,u=G.scale),"rotation"in G&&t(3,f=G.rotation),"viewportAware"in G&&t(4,d=G.viewportAware),"inViewport"in G&&t(0,h=G.inViewport),"castShadow"in G&&t(5,b=G.castShadow),"receiveShadow"in G&&t(6,p=G.receiveShadow),"renderOrder"in G&&t(7,m=G.renderOrder),"visible"in G&&t(8,g=G.visible),"userData"in G&&t(9,_=G.userData),"dispose"in G&&t(10,x=G.dispose),"interactive"in G&&t(11,v=G.interactive),"ignorePointer"in G&&t(12,w=G.ignorePointer),"lookAt"in G&&t(13,M=G.lookAt),"geometry"in G&&t(14,P=G.geometry),"material"in G&&t(15,y=G.material),"count"in G&&t(21,A=G.count),"id"in G&&t(22,R=G.id),"$$scope"in G&&t(27,l=G.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&32768&&N(y,G=>{In(C,n.material=G,n)})},[h,c,u,f,d,b,p,m,g,_,x,v,w,M,P,y,C,n,I,H,te,A,R,a,ae,oe,he,l]}class pv extends Ze{constructor(e){super(),Ke(this,e,mv,fv,Ye,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,renderOrder:7,visible:8,userData:9,dispose:10,interactive:11,ignorePointer:12,lookAt:13,geometry:14,material:15,count:21,id:22,instancedMesh:16},null,[-1,-1])}get instancedMesh(){return this.$$.ctx[16]}}function gv(s){let e;const t=s[8].default,n=Wt(t,s,s[9],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&512)&&Ht(n,t,i,i[9],e?Xt(t,i[9],r,null):jt(i[9]),null)},i(i){e||(ge(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function _v(s){let e,t,n,i;return e=new ra({props:{object:s[4],$$slots:{default:[gv]},$$scope:{ctx:s}}}),n=new sa({props:{object:s[4],position:s[0],scale:s[1],rotation:s[2],lookAt:s[3]}}),n.$on("transform",s[5]),{c(){Re(e.$$.fragment),t=lt(),Re(n.$$.fragment)},l(r){Ie(e.$$.fragment,r),t=ct(r),Ie(n.$$.fragment,r)},m(r,o){Ue(e,r,o),je(r,t,o),Ue(n,r,o),i=!0},p(r,[o]){const a={};o&512&&(a.$$scope={dirty:o,ctx:r}),e.$set(a);const l={};o&1&&(l.position=r[0]),o&2&&(l.scale=r[1]),o&4&&(l.rotation=r[2]),o&8&&(l.lookAt=r[3]),n.$set(l)},i(r){i||(ge(e.$$.fragment,r),ge(n.$$.fragment,r),i=!0)},o(r){be(e.$$.fragment,r),be(n.$$.fragment,r),i=!1},d(r){Oe(e,r),r&&Fe(t),Oe(n,r)}}}function vv(s,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{lookAt:l=void 0}=e,{color:c=void 0}=e,{id:u=""}=e;const{registerInstance:f,setInstanceMatrix:d,removeInstance:h,setInstanceColor:b,parentObject:p}=hv(u),m=new pt,g=new ht,_=vr(),x=()=>{var U;return p.uuid===((U=m.parent)==null?void 0:U.uuid)},v=U=>U!==void 0?U instanceof tt?U:new tt(U):null,w={color:v(c),matrix:m.matrix,pointerEventDispatcher:_},M=U=>{w.color=v(U),b(w)},P=()=>{let U=m.parent;const C=[];for(;U&&p&&U.uuid!==p.uuid&&(C.push(U),!!U.parent);)U=U.parent;m.updateMatrix(),g.copy(m.matrix),C.forEach(I=>{I.updateMatrix(),g.premultiply(I.matrix)}),w.matrix=g},y=()=>{m.updateMatrix(),w.matrix=m.matrix},A=()=>{y(),d(w)},{start:R}=yr(()=>{P(),d(w)},{autostart:!1,debugFrameloopMessage:"Instance: tracking non-direct child instance"});f(w),mu(()=>{x()?A():R(),M(c)});const N=()=>{x()&&A()};return Et(()=>{h(w)}),s.$$set=U=>{"position"in U&&t(0,r=U.position),"scale"in U&&t(1,o=U.scale),"rotation"in U&&t(2,a=U.rotation),"lookAt"in U&&t(3,l=U.lookAt),"color"in U&&t(6,c=U.color),"id"in U&&t(7,u=U.id),"$$scope"in U&&t(9,i=U.$$scope)},s.$$.update=()=>{s.$$.dirty&64&&M(c)},[r,o,a,l,m,N,c,u,n,i]}class bv extends Ze{constructor(e){super(),Ke(this,e,vv,_v,Ye,{position:0,scale:1,rotation:2,lookAt:3,color:6,id:7})}}function xv(s){let e;const t=s[16].default,n=Wt(t,s,s[27],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&134217728)&&Ht(n,t,i,i[27],e?Xt(t,i[27],r,null):jt(i[27]),null)},i(i){e||(ge(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function yv(s){let e,t,n,i,r;function o(l){s[17](l)}let a={object:s[1],lookAt:s[5],position:s[2],scale:s[3],rotation:s[4],castShadow:s[7],receiveShadow:s[8],frustumCulled:s[9],renderOrder:s[10],visible:s[11],userData:s[12],dispose:s[13],viewportAware:s[6],$$slots:{default:[xv]},$$scope:{ctx:s}};return s[0]!==void 0&&(a.inViewport=s[0]),e=new ns({props:a}),Vt.push(()=>Jt(e,"inViewport",o)),e.$on("viewportenter",s[18]),e.$on("viewportleave",s[19]),i=new Ju({props:{object:s[1],interactive:s[14],ignorePointer:s[15]}}),i.$on("click",s[20]),i.$on("contextmenu",s[21]),i.$on("pointerup",s[22]),i.$on("pointerdown",s[23]),i.$on("pointerenter",s[24]),i.$on("pointerleave",s[25]),i.$on("pointermove",s[26]),{c(){Re(e.$$.fragment),n=lt(),Re(i.$$.fragment)},l(l){Ie(e.$$.fragment,l),n=ct(l),Ie(i.$$.fragment,l)},m(l,c){Ue(e,l,c),je(l,n,c),Ue(i,l,c),r=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&4096&&(u.userData=l[12]),c&8192&&(u.dispose=l[13]),c&64&&(u.viewportAware=l[6]),c&134217728&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],Qt(()=>t=!1)),e.$set(u);const f={};c&2&&(f.object=l[1]),c&16384&&(f.interactive=l[14]),c&32768&&(f.ignorePointer=l[15]),i.$set(f)},i(l){r||(ge(e.$$.fragment,l),ge(i.$$.fragment,l),r=!0)},o(l){be(e.$$.fragment,l),be(i.$$.fragment,l),r=!1},d(l){Oe(e,l),l&&Fe(n),Oe(i,l)}}}function wv(s,e,t){let{$$slots:n={},$$scope:i}=e,{line:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:h=void 0}=e,{frustumCulled:b=void 0}=e,{renderOrder:p=void 0}=e,{visible:m=void 0}=e,{userData:g=void 0}=e,{dispose:_=void 0}=e,{interactive:x=!1}=e,{ignorePointer:v=!1}=e;function w(D){f=D,t(0,f)}function M(D){ke.call(this,s,D)}function P(D){ke.call(this,s,D)}function y(D){ke.call(this,s,D)}function A(D){ke.call(this,s,D)}function R(D){ke.call(this,s,D)}function N(D){ke.call(this,s,D)}function U(D){ke.call(this,s,D)}function C(D){ke.call(this,s,D)}function I(D){ke.call(this,s,D)}return s.$$set=D=>{"line"in D&&t(1,r=D.line),"position"in D&&t(2,o=D.position),"scale"in D&&t(3,a=D.scale),"rotation"in D&&t(4,l=D.rotation),"lookAt"in D&&t(5,c=D.lookAt),"viewportAware"in D&&t(6,u=D.viewportAware),"inViewport"in D&&t(0,f=D.inViewport),"castShadow"in D&&t(7,d=D.castShadow),"receiveShadow"in D&&t(8,h=D.receiveShadow),"frustumCulled"in D&&t(9,b=D.frustumCulled),"renderOrder"in D&&t(10,p=D.renderOrder),"visible"in D&&t(11,m=D.visible),"userData"in D&&t(12,g=D.userData),"dispose"in D&&t(13,_=D.dispose),"interactive"in D&&t(14,x=D.interactive),"ignorePointer"in D&&t(15,v=D.ignorePointer),"$$scope"in D&&t(27,i=D.$$scope)},[f,r,o,a,l,c,u,d,h,b,p,m,g,_,x,v,n,w,M,P,y,A,R,N,U,C,I,i]}class Sv extends Ze{constructor(e){super(),Ke(this,e,wv,yv,Ye,{line:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}function Mv(s){let e;const t=s[23].default,n=Wt(t,s,s[34],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&8)&&Ht(n,t,i,i[34],e?Xt(t,i[34],r,null):jt(i[34]),null)},i(i){e||(ge(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function Tv(s){let e,t,n,i,r,o,a,l,c;e=new An({props:{dispose:s[11],object:s[15]}}),n=new An({props:{dispose:s[11],object:s[16]}}),r=new An({props:{dispose:!0,object:s[18]}});function u(d){s[24](d)}let f={line:s[17],position:s[1],scale:s[2],rotation:s[3],lookAt:s[14],castShadow:s[5],receiveShadow:s[6],frustumCulled:s[7],renderOrder:s[8],visible:s[9],userData:s[10],dispose:s[11],interactive:s[12],ignorePointer:s[13],viewportAware:s[4],$$slots:{default:[Mv]},$$scope:{ctx:s}};return s[0]!==void 0&&(f.inViewport=s[0]),a=new Sv({props:f}),Vt.push(()=>Jt(a,"inViewport",u)),a.$on("click",s[25]),a.$on("contextmenu",s[26]),a.$on("pointerup",s[27]),a.$on("pointerdown",s[28]),a.$on("pointerenter",s[29]),a.$on("pointerleave",s[30]),a.$on("pointermove",s[31]),a.$on("viewportenter",s[32]),a.$on("viewportleave",s[33]),{c(){Re(e.$$.fragment),t=lt(),Re(n.$$.fragment),i=lt(),Re(r.$$.fragment),o=lt(),Re(a.$$.fragment)},l(d){Ie(e.$$.fragment,d),t=ct(d),Ie(n.$$.fragment,d),i=ct(d),Ie(r.$$.fragment,d),o=ct(d),Ie(a.$$.fragment,d)},m(d,h){Ue(e,d,h),je(d,t,h),Ue(n,d,h),je(d,i,h),Ue(r,d,h),je(d,o,h),Ue(a,d,h),c=!0},p(d,h){const b={};h[0]&2048&&(b.dispose=d[11]),h[0]&32768&&(b.object=d[15]),e.$set(b);const p={};h[0]&2048&&(p.dispose=d[11]),h[0]&65536&&(p.object=d[16]),n.$set(p);const m={};h[0]&2&&(m.position=d[1]),h[0]&4&&(m.scale=d[2]),h[0]&8&&(m.rotation=d[3]),h[0]&16384&&(m.lookAt=d[14]),h[0]&32&&(m.castShadow=d[5]),h[0]&64&&(m.receiveShadow=d[6]),h[0]&128&&(m.frustumCulled=d[7]),h[0]&256&&(m.renderOrder=d[8]),h[0]&512&&(m.visible=d[9]),h[0]&1024&&(m.userData=d[10]),h[0]&2048&&(m.dispose=d[11]),h[0]&4096&&(m.interactive=d[12]),h[0]&8192&&(m.ignorePointer=d[13]),h[0]&16&&(m.viewportAware=d[4]),h[1]&8&&(m.$$scope={dirty:h,ctx:d}),!l&&h[0]&1&&(l=!0,m.inViewport=d[0],Qt(()=>l=!1)),a.$set(m)},i(d){c||(ge(e.$$.fragment,d),ge(n.$$.fragment,d),ge(r.$$.fragment,d),ge(a.$$.fragment,d),c=!0)},o(d){be(e.$$.fragment,d),be(n.$$.fragment,d),be(r.$$.fragment,d),be(a.$$.fragment,d),c=!1},d(d){Oe(e,d),d&&Fe(t),Oe(n,d),d&&Fe(i),Oe(r,d),d&&Fe(o),Oe(a,d)}}}function Av(s,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:h=void 0}=e,{visible:b=void 0}=e,{userData:p=void 0}=e,{dispose:m=void 0}=e,{interactive:g=!1}=e,{ignorePointer:_=!1}=e,{lookAt:x=void 0}=e,{geometry:v=void 0}=e,{points:w=[]}=e,{material:M}=e,P=M,y=v,A=w;const R=new on,{invalidate:N}=ln(),U=E=>{if(!E)return;const Y=E.map(te=>te instanceof K?te:new K().fromArray(te));R.setFromPoints(Y)},C=E=>!!E;v||U(w);const I=new P0(C(v)?v:R,M),D=()=>I;function B(E){c=E,t(0,c)}function ee(E){ke.call(this,s,E)}function J(E){ke.call(this,s,E)}function W(E){ke.call(this,s,E)}function H(E){ke.call(this,s,E)}function S(E){ke.call(this,s,E)}function L(E){ke.call(this,s,E)}function Q(E){ke.call(this,s,E)}function X(E){ke.call(this,s,E)}function q(E){ke.call(this,s,E)}return s.$$set=E=>{"position"in E&&t(1,r=E.position),"scale"in E&&t(2,o=E.scale),"rotation"in E&&t(3,a=E.rotation),"viewportAware"in E&&t(4,l=E.viewportAware),"inViewport"in E&&t(0,c=E.inViewport),"castShadow"in E&&t(5,u=E.castShadow),"receiveShadow"in E&&t(6,f=E.receiveShadow),"frustumCulled"in E&&t(7,d=E.frustumCulled),"renderOrder"in E&&t(8,h=E.renderOrder),"visible"in E&&t(9,b=E.visible),"userData"in E&&t(10,p=E.userData),"dispose"in E&&t(11,m=E.dispose),"interactive"in E&&t(12,g=E.interactive),"ignorePointer"in E&&t(13,_=E.ignorePointer),"lookAt"in E&&t(14,x=E.lookAt),"geometry"in E&&t(15,v=E.geometry),"points"in E&&t(19,w=E.points),"material"in E&&t(16,M=E.material),"$$scope"in E&&t(34,i=E.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&1114112&&(M!==P?(D().material=M,N("Line: material changed")):N("Line: material props changed"),t(20,P=M)),s.$$.dirty[0]&2129920&&(v!==y?C(v)&&(D().geometry=v,N("Line: geometry changed")):C(v)&&N("Line: geometry props changed"),t(21,y=v)),s.$$.dirty[0]&4751360&&A!==w&&(v||(U(w),D().geometry=R),t(22,A=w))},[c,r,o,a,l,u,f,d,h,b,p,m,g,_,x,v,M,I,R,w,P,y,A,n,B,ee,J,W,H,S,L,Q,X,q,i]}class Ev extends Ze{constructor(e){super(),Ke(this,e,Av,Tv,Ye,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,geometry:15,points:19,material:16,line:17},null,[-1,-1])}get line(){return this.$$.ctx[17]}}const Gc=new ni,ks=new K;class ef extends ju{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Gt(e,3)),this.setAttribute("uv",new Gt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new xo(t,6,1);return this.setAttribute("instanceStart",new ui(n,3,0)),this.setAttribute("instanceEnd",new ui(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new xo(t,6,1);return this.setAttribute("instanceColorStart",new ui(n,3,0)),this.setAttribute("instanceColorEnd",new ui(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new R0(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Gc.setFromBufferAttribute(t),this.boundingBox.union(Gc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ks.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ks)),ks.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ks));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}Te.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ve(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};dn.line={uniforms:ts.merge([Te.common,Te.fog,Te.line]),vertexShader:`
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
		`};class qs extends Xn{constructor(e){super({type:"LineMaterial",uniforms:ts.clone(dn.line.uniforms),vertexShader:dn.line.vertexShader,fragmentShader:dn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return Boolean("USE_DASH"in this.defines)},set(t){Boolean(t)!==Boolean("USE_DASH"in this.defines)&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)},set:function(t){Boolean(t)!==Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const Vc=new K,Wc=new K,Ft=new xt,kt=new xt,Nn=new xt,to=new K,no=new ht,Nt=new V0,Hc=new K,zs=new ni,Ns=new Fi,Bn=new xt;let Vn,Pi;function jc(s,e,t){return Bn.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),Bn.multiplyScalar(1/Bn.w),Bn.x=Pi/t.width,Bn.y=Pi/t.height,Bn.applyMatrix4(s.projectionMatrixInverse),Bn.multiplyScalar(1/Bn.w),Math.abs(Math.max(Bn.x,Bn.y))}function Cv(s,e){const t=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,l=o;a<l;a++){Nt.start.fromBufferAttribute(i,a),Nt.end.fromBufferAttribute(r,a),Nt.applyMatrix4(t);const c=new K,u=new K;Vn.distanceSqToSegment(Nt.start,Nt.end,u,c),u.distanceTo(c)<Pi*.5&&e.push({point:u,pointOnLine:c,distance:Vn.origin.distanceTo(u),object:s,face:null,faceIndex:a,uv:null,uv2:null})}}function Dv(s,e,t){const n=e.projectionMatrix,r=s.material.resolution,o=s.matrixWorld,a=s.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),f=-e.near;Vn.at(1,Nn),Nn.w=1,Nn.applyMatrix4(e.matrixWorldInverse),Nn.applyMatrix4(n),Nn.multiplyScalar(1/Nn.w),Nn.x*=r.x/2,Nn.y*=r.y/2,Nn.z=0,to.copy(Nn),no.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,h=u;d<h;d++){if(Ft.fromBufferAttribute(l,d),kt.fromBufferAttribute(c,d),Ft.w=1,kt.w=1,Ft.applyMatrix4(no),kt.applyMatrix4(no),Ft.z>f&&kt.z>f)continue;if(Ft.z>f){const x=Ft.z-kt.z,v=(Ft.z-f)/x;Ft.lerp(kt,v)}else if(kt.z>f){const x=kt.z-Ft.z,v=(kt.z-f)/x;kt.lerp(Ft,v)}Ft.applyMatrix4(n),kt.applyMatrix4(n),Ft.multiplyScalar(1/Ft.w),kt.multiplyScalar(1/kt.w),Ft.x*=r.x/2,Ft.y*=r.y/2,kt.x*=r.x/2,kt.y*=r.y/2,Nt.start.copy(Ft),Nt.start.z=0,Nt.end.copy(kt),Nt.end.z=0;const p=Nt.closestPointToPointParameter(to,!0);Nt.at(p,Hc);const m=Pd.lerp(Ft.z,kt.z,p),g=m>=-1&&m<=1,_=to.distanceTo(Hc)<Pi*.5;if(g&&_){Nt.start.fromBufferAttribute(l,d),Nt.end.fromBufferAttribute(c,d),Nt.start.applyMatrix4(o),Nt.end.applyMatrix4(o);const x=new K,v=new K;Vn.distanceSqToSegment(Nt.start,Nt.end,v,x),t.push({point:v,pointOnLine:x,distance:Vn.origin.distanceTo(v),object:s,face:null,faceIndex:d,uv:null,uv2:null})}}}class Lv extends Kt{constructor(e=new ef,t=new qs({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Vc.fromBufferAttribute(t,o),Wc.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Vc.distanceTo(Wc);const r=new xo(i,2,1);return e.setAttribute("instanceDistanceStart",new ui(r,1,0)),e.setAttribute("instanceDistanceEnd",new ui(r,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Vn=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;Pi=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Ns.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=Pi*.5;else{const f=Math.max(i.near,Ns.distanceToPoint(Vn.origin));c=jc(i,f,l.resolution)}if(Ns.radius+=c,Vn.intersectsSphere(Ns)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),zs.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=Pi*.5;else{const f=Math.max(i.near,zs.distanceToPoint(Vn.origin));u=jc(i,f,l.resolution)}zs.expandByScalar(u),Vn.intersectsBox(zs)!==!1&&(n?Cv(this,t):Dv(this,i,t))}}class So extends ef{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}let Pv=class extends Lv{constructor(e=new So,t=new qs({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};function Rv(s){let e;const t=s[21].default,n=Wt(t,s,s[32],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&2)&&Ht(n,t,i,i[32],e?Xt(t,i[32],r,null):jt(i[32]),null)},i(i){e||(ge(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function Iv(s){let e,t,n,i,r,o,a;e=new An({props:{dispose:s[12],object:s[16]}}),n=new An({props:{dispose:!0,object:s[17]}});function l(u){s[22](u)}let c={mesh:s[0],position:s[2],scale:s[3],rotation:s[4],lookAt:s[15],castShadow:s[6],receiveShadow:s[7],frustumCulled:s[8],renderOrder:s[9],visible:s[10],userData:s[11],dispose:s[12],interactive:s[13],ignorePointer:s[14],viewportAware:s[5],$$slots:{default:[Rv]},$$scope:{ctx:s}};return s[1]!==void 0&&(c.inViewport=s[1]),r=new aa({props:c}),Vt.push(()=>Jt(r,"inViewport",l)),r.$on("click",s[23]),r.$on("contextmenu",s[24]),r.$on("pointerup",s[25]),r.$on("pointerdown",s[26]),r.$on("pointerenter",s[27]),r.$on("pointerleave",s[28]),r.$on("pointermove",s[29]),r.$on("viewportenter",s[30]),r.$on("viewportleave",s[31]),{c(){Re(e.$$.fragment),t=lt(),Re(n.$$.fragment),i=lt(),Re(r.$$.fragment)},l(u){Ie(e.$$.fragment,u),t=ct(u),Ie(n.$$.fragment,u),i=ct(u),Ie(r.$$.fragment,u)},m(u,f){Ue(e,u,f),je(u,t,f),Ue(n,u,f),je(u,i,f),Ue(r,u,f),a=!0},p(u,f){const d={};f[0]&4096&&(d.dispose=u[12]),f[0]&65536&&(d.object=u[16]),e.$set(d);const h={};f[0]&1&&(h.mesh=u[0]),f[0]&4&&(h.position=u[2]),f[0]&8&&(h.scale=u[3]),f[0]&16&&(h.rotation=u[4]),f[0]&32768&&(h.lookAt=u[15]),f[0]&64&&(h.castShadow=u[6]),f[0]&128&&(h.receiveShadow=u[7]),f[0]&256&&(h.frustumCulled=u[8]),f[0]&512&&(h.renderOrder=u[9]),f[0]&1024&&(h.visible=u[10]),f[0]&2048&&(h.userData=u[11]),f[0]&4096&&(h.dispose=u[12]),f[0]&8192&&(h.interactive=u[13]),f[0]&16384&&(h.ignorePointer=u[14]),f[0]&32&&(h.viewportAware=u[5]),f[1]&2&&(h.$$scope={dirty:f,ctx:u}),!o&&f[0]&2&&(o=!0,h.inViewport=u[1],Qt(()=>o=!1)),r.$set(h)},i(u){a||(ge(e.$$.fragment,u),ge(n.$$.fragment,u),ge(r.$$.fragment,u),a=!0)},o(u){be(e.$$.fragment,u),be(n.$$.fragment,u),be(r.$$.fragment,u),a=!1},d(u){Oe(e,u),u&&Fe(t),Oe(n,u),u&&Fe(i),Oe(r,u)}}}function Uv(s,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:h=void 0}=e,{visible:b=void 0}=e,{userData:p=void 0}=e,{dispose:m=void 0}=e,{interactive:g=!1}=e,{ignorePointer:_=!1}=e,{lookAt:x=void 0}=e,{points:v=[]}=e,{material:w}=e,M=new So;M.setPositions([0,0,0]);let P;const y=new Pv(void 0,w);Et(()=>{M.dispose(),P==null||P.dispose()});const A=()=>y,{invalidate:R}=ln();let N=w;function U(L){c=L,t(1,c)}function C(L){ke.call(this,s,L)}function I(L){ke.call(this,s,L)}function D(L){ke.call(this,s,L)}function B(L){ke.call(this,s,L)}function ee(L){ke.call(this,s,L)}function J(L){ke.call(this,s,L)}function W(L){ke.call(this,s,L)}function H(L){ke.call(this,s,L)}function S(L){ke.call(this,s,L)}return s.$$set=L=>{"position"in L&&t(2,r=L.position),"scale"in L&&t(3,o=L.scale),"rotation"in L&&t(4,a=L.rotation),"viewportAware"in L&&t(5,l=L.viewportAware),"inViewport"in L&&t(1,c=L.inViewport),"castShadow"in L&&t(6,u=L.castShadow),"receiveShadow"in L&&t(7,f=L.receiveShadow),"frustumCulled"in L&&t(8,d=L.frustumCulled),"renderOrder"in L&&t(9,h=L.renderOrder),"visible"in L&&t(10,b=L.visible),"userData"in L&&t(11,p=L.userData),"dispose"in L&&t(12,m=L.dispose),"interactive"in L&&t(13,g=L.interactive),"ignorePointer"in L&&t(14,_=L.ignorePointer),"lookAt"in L&&t(15,x=L.lookAt),"points"in L&&t(18,v=L.points),"material"in L&&t(19,w=L.material),"$$scope"in L&&t(32,i=L.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&327681&&(P==null||P.dispose(),v.length?(t(16,P=new So),P.setPositions(v.map(L=>L instanceof K?L.toArray():L).flat()),t(0,y.geometry=P,y)):t(0,y.geometry=M,y),y.computeLineDistances(),R("Line2: points changed")),s.$$.dirty[0]&1572864&&(w!==N?(A().material=w,R("Line2: material changed")):R("Line2: material props changed"),t(20,N=w))},[y,c,r,o,a,l,u,f,d,h,b,p,m,g,_,x,P,M,v,w,N,n,U,C,I,D,B,ee,J,W,H,S,i]}class Ov extends Ze{constructor(e){super(),Ke(this,e,Uv,Iv,Ye,{position:2,scale:3,rotation:4,viewportAware:5,inViewport:1,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,interactive:13,ignorePointer:14,lookAt:15,points:18,material:19,line2:0},null,[-1,-1])}get line2(){return this.$$.ctx[0]}}function Fv(s){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class Xc extends Ze{constructor(e){super(),Ke(this,e,Fv,null,Ye,{})}}new Proxy(Xc,{get(s,e){return s[e]||Xc}});G_(yc,()=>new yc(Wu));function qc(s,e,t){const n=s.slice();return n[2]=e[t],n}function Yc(s){let e,t;return e=new Ov({props:{material:new qs({worldUnits:!0,linewidth:s[1].edgeThickness,color:5592405}),points:s[2]}}),{c(){Re(e.$$.fragment)},l(n){Ie(e.$$.fragment,n)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.material=new qs({worldUnits:!0,linewidth:n[1].edgeThickness,color:5592405})),i&1&&(r.points=n[2]),e.$set(r)},i(n){t||(ge(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function kv(s){let e,t,n=s[0].edges,i=[];for(let o=0;o<n.length;o+=1)i[o]=Yc(qc(s,n,o));const r=o=>be(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Hn()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=Hn()},m(o,a){for(let l=0;l<i.length;l+=1)i[l].m(o,a);je(o,e,a),t=!0},p(o,[a]){if(a&3){n=o[0].edges;let l;for(l=0;l<n.length;l+=1){const c=qc(o,n,l);i[l]?(i[l].p(c,a),ge(i[l],1)):(i[l]=Yc(c),i[l].c(),ge(i[l],1),i[l].m(e.parentNode,e))}for(gi(),l=n.length;l<i.length;l+=1)r(l);_i()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)ge(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)be(i[a]);t=!1},d(o){Co(i,o),o&&Fe(e)}}}function zv(s,e,t){let n,i;return ft(s,Ks,r=>t(0,n=r)),ft(s,Ri,r=>t(1,i=r)),[n,i]}class Nv extends Ze{constructor(e){super(),Ke(this,e,zv,kv,Ye,{})}}function Zc(s,e,t){const n=s.slice();return n[4]=e[t],n}function Kc(s){let e,t;return e=new bv({props:{position:new K(...s[4]),scale:s[1].vertexSize,color:4473924}}),{c(){Re(e.$$.fragment)},l(n){Ie(e.$$.fragment,n)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.position=new K(...n[4])),i&2&&(r.scale=n[1].vertexSize),e.$set(r)},i(n){t||(ge(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function Bv(s){let e,t,n=s[0].vertices,i=[];for(let o=0;o<n.length;o+=1)i[o]=Kc(Zc(s,n,o));const r=o=>be(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Hn()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=Hn()},m(o,a){for(let l=0;l<i.length;l+=1)i[l].m(o,a);je(o,e,a),t=!0},p(o,a){if(a&3){n=o[0].vertices;let l;for(l=0;l<n.length;l+=1){const c=Zc(o,n,l);i[l]?(i[l].p(c,a),ge(i[l],1)):(i[l]=Kc(c),i[l].c(),ge(i[l],1),i[l].m(e.parentNode,e))}for(gi(),l=n.length;l<i.length;l+=1)r(l);_i()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)ge(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)be(i[a]);t=!1},d(o){Co(i,o),o&&Fe(e)}}}function Gv(s){let e,t;return e=new pv({props:{geometry:s[2],material:s[3],$$slots:{default:[Bv]},$$scope:{ctx:s}}}),{c(){Re(e.$$.fragment)},l(n){Ie(e.$$.fragment,n)},m(n,i){Ue(e,n,i),t=!0},p(n,[i]){const r={};i&131&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(ge(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function Vv(s,e,t){let n,i;ft(s,Ks,a=>t(0,n=a)),ft(s,Ri,a=>t(1,i=a));const r=new No(.5),o=new I0;return[n,i,r,o]}class Wv extends Ze{constructor(e){super(),Ke(this,e,Vv,Gv,Ye,{})}}function Hv(s){let e,t;return e=new lv({props:{geometry:s[0],material:s[1]}}),{c(){Re(e.$$.fragment)},l(n){Ie(e.$$.fragment,n)},m(n,i){Ue(e,n,i),t=!0},p:sn,i(n){t||(ge(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function jv(s,e,t){let{face:n}=e;const i=new on,r=new Float32Array([...n[0],...n[1],...n[2]]);i.setAttribute("position",new yn(r,3));const o=new U0({color:3355443,opacity:.5,transparent:!0,side:br});return s.$$set=a=>{"face"in a&&t(2,n=a.face)},[i,o,n]}class Xv extends Ze{constructor(e){super(),Ke(this,e,jv,Hv,Ye,{face:2})}}function Jc(s,e,t){const n=s.slice();return n[1]=e[t],n}function Qc(s){let e,t;return e=new Xv({props:{face:s[1]}}),{c(){Re(e.$$.fragment)},l(n){Ie(e.$$.fragment,n)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.face=n[1]),e.$set(r)},i(n){t||(ge(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function qv(s){let e,t,n=s[0].faces,i=[];for(let o=0;o<n.length;o+=1)i[o]=Qc(Jc(s,n,o));const r=o=>be(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Hn()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=Hn()},m(o,a){for(let l=0;l<i.length;l+=1)i[l].m(o,a);je(o,e,a),t=!0},p(o,[a]){if(a&1){n=o[0].faces;let l;for(l=0;l<n.length;l+=1){const c=Jc(o,n,l);i[l]?(i[l].p(c,a),ge(i[l],1)):(i[l]=Qc(c),i[l].c(),ge(i[l],1),i[l].m(e.parentNode,e))}for(gi(),l=n.length;l<i.length;l+=1)r(l);_i()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)ge(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)be(i[a]);t=!1},d(o){Co(i,o),o&&Fe(e)}}}function Yv(s,e,t){let n;return ft(s,Ks,i=>t(0,n=i)),[n]}class Zv extends Ze{constructor(e){super(),Ke(this,e,Yv,qv,Ye,{})}}new K;new K;new K;function Vo(){var s=0,e=[],t,n=0,i=0;function r(g,_){var x=Vo();function v(){var w=s>0?g:_;if(p(w))try{var M=w(t);M===x&&b();var P=d(M);P?P.call(M,x.resolve,x.reject):x.resolve(M)}catch(y){x.reject(y)}else x[s>0?"resolve":"reject"](t)}return e.push(v),s&&c(),x}var o=h(function(g){i||l(1,g)}),a=h(function(g){i||l(-1,g)});function l(g,_){i++;var x=0;try{_===m&&b();var v=g>0&&d(_);v?v.call(_,h(function(w){x++,l(1,w)}),h(function(w){x++,l(-1,w)})):(s=g,t=_,c())}catch(w){!s&&!x&&l(-1,w)}}function c(){n||(setTimeout(u,0),n=1)}function u(){var g=e;n=0,e=[],g.forEach(f)}function f(g){g()}function d(g){var _=g&&(p(g)||typeof g=="object")&&g.then;return p(_)&&_}function h(g){var _=0;return function(){for(var x=[],v=arguments.length;v--;)x[v]=arguments[v];_++||g.apply(this,x)}}function b(){throw new TypeError("Chaining cycle detected")}var p=function(g){return typeof g=="function"},m={then:r,resolve:o,reject:a};return m}function tf(){var s,e,t=new Promise(function(n,i){s=n,e=i});return{then:t.then.bind(t),resolve:s,reject:e}}Vo.all=tf.all=function(s){var e=0,t=[],n=ti();return s.length===0?n.resolve([]):s.forEach(function(i,r){var o=ti();o.resolve(i),o.then(function(a){e++,t[r]=a,e===s.length&&n.resolve(t)},n.reject)}),n};var ti=typeof Promise=="function"?tf:Vo;function Kv(){var s=Object.create(null);function e(i,r){var o=i.id,a=i.name,l=i.dependencies;l===void 0&&(l=[]);var c=i.init;c===void 0&&(c=function(){});var u=i.getTransferables;if(u===void 0&&(u=null),!s[o])try{l=l.map(function(d){return d&&d.isWorkerModule&&(e(d,function(h){if(h instanceof Error)throw h}),d=s[d.id].value),d}),c=n("<"+a+">.init",c),u&&(u=n("<"+a+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[o]={id:o,value:f,getTransferables:u},r(f)}catch(d){d&&d.noLog||console.error(d),r(d)}}function t(i,r){var o,a=i.id,l=i.args;(!s[a]||typeof s[a].value!="function")&&r(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var c=(o=s[a]).value.apply(o,l);c&&typeof c.then=="function"?c.then(u,function(f){return r(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){r(f)}function u(f){try{var d=s[a].getTransferables&&s[a].getTransferables(f);(!d||!Array.isArray(d)||!d.length)&&(d=void 0),r(f,d)}catch(h){console.error(h),r(h)}}}function n(i,r){var o=void 0;self.troikaDefine=function(l){return o=l};var a=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(l){console.error(l)}return URL.revokeObjectURL(a),delete self.troikaDefine,o}self.addEventListener("message",function(i){var r=i.data,o=r.messageId,a=r.action,l=r.data;try{a==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof c=="function"}})}),a==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:o,success:!1,error:c.stack})}})}function Jv(s){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,n=s.init;t=Array.isArray(t)?t.map(function(r){return r&&r._getInitResult?r._getInitResult():r}):[];var i=ti.all(t).then(function(r){return n.apply(null,r)});return e._getInitResult=function(){return i},i},e}var nf=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return nf=function(){return s},s},Qv=0,$v=0,io=!1,Xr=Object.create(null),qr=Object.create(null),Mo=Object.create(null);function wr(s){if((!s||typeof s.init!="function")&&!io)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,n=s.getTransferables,i=s.workerId;if(!nf())return Jv(s);i==null&&(i="#default");var r="workerModule"+ ++Qv,o=s.name||r,a=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(io=!0,c=wr({workerId:i,name:"<"+o+"> function dependency: "+c.name,init:`function(){return (
`+Ws(c)+`
)}`}),io=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!a){a=$c(i,"registerModule",l.workerModuleData);var f=function(){a=null,qr[i].delete(f)};(qr[i]||(qr[i]=new Set)).add(f)}return a.then(function(d){var h=d.isCallable;if(h)return $c(i,"callModule",{id:r,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:r,name:o,dependencies:e,init:Ws(t),getTransferables:n&&Ws(n)},l}function e1(s){qr[s]&&qr[s].forEach(function(e){e()}),Xr[s]&&(Xr[s].terminate(),delete Xr[s])}function Ws(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function t1(s){var e=Xr[s];if(!e){var t=Ws(Kv);e=Xr[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(n){var i=n.data,r=i.messageId,o=Mo[r];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete Mo[r],o(i)}}return e}function $c(s,e,t){var n=ti(),i=++$v;return Mo[i]=function(r){r.success?n.resolve(r.result):n.reject(new Error("Error in worker "+e+" call: "+r.error))},t1(s).postMessage({messageId:i,action:e,data:t}),n}var n1=wr({name:"Thenable",dependencies:[ti],init:function(s){return s}});function rf(){var s=function(e){function t(W,H,S,L,Q,X,q,E){var Y=1-q;E.x=Y*Y*W+2*Y*q*S+q*q*Q,E.y=Y*Y*H+2*Y*q*L+q*q*X}function n(W,H,S,L,Q,X,q,E,Y,te){var ae=1-Y;te.x=ae*ae*ae*W+3*ae*ae*Y*S+3*ae*Y*Y*Q+Y*Y*Y*q,te.y=ae*ae*ae*H+3*ae*ae*Y*L+3*ae*Y*Y*X+Y*Y*Y*E}function i(W,H){for(var S=/([MLQCZ])([^MLQCZ]*)/g,L,Q,X,q,E;L=S.exec(W);){var Y=L[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(te){return parseFloat(te)});switch(L[1]){case"M":q=Q=Y[0],E=X=Y[1];break;case"L":(Y[0]!==q||Y[1]!==E)&&H("L",q,E,q=Y[0],E=Y[1]);break;case"Q":{H("Q",q,E,q=Y[2],E=Y[3],Y[0],Y[1]);break}case"C":{H("C",q,E,q=Y[4],E=Y[5],Y[0],Y[1],Y[2],Y[3]);break}case"Z":(q!==Q||E!==X)&&H("L",q,E,Q,X);break}}}function r(W,H,S){S===void 0&&(S=16);var L={x:0,y:0};i(W,function(Q,X,q,E,Y,te,ae,oe,he){switch(Q){case"L":H(X,q,E,Y);break;case"Q":{for(var G=X,fe=q,Pe=1;Pe<S;Pe++)t(X,q,te,ae,E,Y,Pe/(S-1),L),H(G,fe,L.x,L.y),G=L.x,fe=L.y;break}case"C":{for(var Me=X,Ce=q,Be=1;Be<S;Be++)n(X,q,te,ae,oe,he,E,Y,Be/(S-1),L),H(Me,Ce,L.x,L.y),Me=L.x,Ce=L.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(W,H){var S=W.getContext?W.getContext("webgl",c):W,L=l.get(S);if(!L){let ae=function(Me){var Ce=X[Me];if(!Ce&&(Ce=X[Me]=S.getExtension(Me),!Ce))throw new Error(Me+" not supported");return Ce},oe=function(Me,Ce){var Be=S.createShader(Ce);return S.shaderSource(Be,Me),S.compileShader(Be),Be},he=function(Me,Ce,Be,ue){if(!q[Me]){var Se={},Ae={},me=S.createProgram();S.attachShader(me,oe(Ce,S.VERTEX_SHADER)),S.attachShader(me,oe(Be,S.FRAGMENT_SHADER)),S.linkProgram(me),q[Me]={program:me,transaction:function(T){S.useProgram(me),T({setUniform:function(ie,le){for(var pe=[],z=arguments.length-2;z-- >0;)pe[z]=arguments[z+2];var k=Ae[le]||(Ae[le]=S.getUniformLocation(me,le));S["uniform"+ie].apply(S,[k].concat(pe))},setAttribute:function(ie,le,pe,z,k){var j=Se[ie];j||(j=Se[ie]={buf:S.createBuffer(),loc:S.getAttribLocation(me,ie),data:null}),S.bindBuffer(S.ARRAY_BUFFER,j.buf),S.vertexAttribPointer(j.loc,le,S.FLOAT,!1,0,0),S.enableVertexAttribArray(j.loc),Q?S.vertexAttribDivisor(j.loc,z):ae("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(j.loc,z),k!==j.data&&(S.bufferData(S.ARRAY_BUFFER,k,pe),j.data=k)}})}}}q[Me].transaction(ue)},G=function(Me,Ce){Y++;try{S.activeTexture(S.TEXTURE0+Y);var Be=E[Me];Be||(Be=E[Me]=S.createTexture(),S.bindTexture(S.TEXTURE_2D,Be),S.texParameteri(S.TEXTURE_2D,S.TEXTURE_MIN_FILTER,S.NEAREST),S.texParameteri(S.TEXTURE_2D,S.TEXTURE_MAG_FILTER,S.NEAREST)),S.bindTexture(S.TEXTURE_2D,Be),Ce(Be,Y)}finally{Y--}},fe=function(Me,Ce,Be){var ue=S.createFramebuffer();te.push(ue),S.bindFramebuffer(S.FRAMEBUFFER,ue),S.activeTexture(S.TEXTURE0+Ce),S.bindTexture(S.TEXTURE_2D,Me),S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Me,0);try{Be(ue)}finally{S.deleteFramebuffer(ue),S.bindFramebuffer(S.FRAMEBUFFER,te[--te.length-1]||null)}},Pe=function(){X={},q={},E={},Y=-1,te.length=0};var Q=typeof WebGL2RenderingContext<"u"&&S instanceof WebGL2RenderingContext,X={},q={},E={},Y=-1,te=[];S.canvas.addEventListener("webglcontextlost",function(Me){Pe(),Me.preventDefault()},!1),l.set(S,L={gl:S,isWebGL2:Q,getExtension:ae,withProgram:he,withTexture:G,withTextureFramebuffer:fe,handleContextLoss:Pe})}H(L)}function f(W,H,S,L,Q,X,q,E){q===void 0&&(q=15),E===void 0&&(E=null),u(W,function(Y){var te=Y.gl,ae=Y.withProgram,oe=Y.withTexture;oe("copy",function(he,G){te.texImage2D(te.TEXTURE_2D,0,te.RGBA,Q,X,0,te.RGBA,te.UNSIGNED_BYTE,H),ae("copy",o,a,function(fe){var Pe=fe.setUniform,Me=fe.setAttribute;Me("aUV",2,te.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Pe("1i","image",G),te.bindFramebuffer(te.FRAMEBUFFER,E||null),te.disable(te.BLEND),te.colorMask(q&8,q&4,q&2,q&1),te.viewport(S,L,Q,X),te.scissor(S,L,Q,X),te.drawArrays(te.TRIANGLES,0,3)})})})}function d(W,H,S){var L=W.width,Q=W.height;u(W,function(X){var q=X.gl,E=new Uint8Array(L*Q*4);q.readPixels(0,0,L,Q,q.RGBA,q.UNSIGNED_BYTE,E),W.width=H,W.height=S,f(q,E,0,0,L,Q)})}var h=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:d});function b(W,H,S,L,Q,X){X===void 0&&(X=1);var q=new Uint8Array(W*H),E=L[2]-L[0],Y=L[3]-L[1],te=[];r(S,function(Me,Ce,Be,ue){te.push({x1:Me,y1:Ce,x2:Be,y2:ue,minX:Math.min(Me,Be),minY:Math.min(Ce,ue),maxX:Math.max(Me,Be),maxY:Math.max(Ce,ue)})}),te.sort(function(Me,Ce){return Me.maxX-Ce.maxX});for(var ae=0;ae<W;ae++)for(var oe=0;oe<H;oe++){var he=fe(L[0]+E*(ae+.5)/W,L[1]+Y*(oe+.5)/H),G=Math.pow(1-Math.abs(he)/Q,X)/2;he<0&&(G=1-G),G=Math.max(0,Math.min(255,Math.round(G*255))),q[oe*W+ae]=G}return q;function fe(Me,Ce){for(var Be=1/0,ue=1/0,Se=te.length;Se--;){var Ae=te[Se];if(Ae.maxX+ue<=Me)break;if(Me+ue>Ae.minX&&Ce-ue<Ae.maxY&&Ce+ue>Ae.minY){var me=g(Me,Ce,Ae.x1,Ae.y1,Ae.x2,Ae.y2);me<Be&&(Be=me,ue=Math.sqrt(Be))}}return Pe(Me,Ce)&&(ue=-ue),ue}function Pe(Me,Ce){for(var Be=0,ue=te.length;ue--;){var Se=te[ue];if(Se.maxX<=Me)break;var Ae=Se.y1>Ce!=Se.y2>Ce&&Me<(Se.x2-Se.x1)*(Ce-Se.y1)/(Se.y2-Se.y1)+Se.x1;Ae&&(Be+=Se.y1<Se.y2?1:-1)}return Be!==0}}function p(W,H,S,L,Q,X,q,E,Y,te){X===void 0&&(X=1),E===void 0&&(E=0),Y===void 0&&(Y=0),te===void 0&&(te=0),m(W,H,S,L,Q,X,q,null,E,Y,te)}function m(W,H,S,L,Q,X,q,E,Y,te,ae){X===void 0&&(X=1),Y===void 0&&(Y=0),te===void 0&&(te=0),ae===void 0&&(ae=0);for(var oe=b(W,H,S,L,Q,X),he=new Uint8Array(oe.length*4),G=0;G<oe.length;G++)he[G*4+ae]=oe[G];f(q,he,Y,te,W,H,1<<3-ae,E)}function g(W,H,S,L,Q,X){var q=Q-S,E=X-L,Y=q*q+E*E,te=Y?Math.max(0,Math.min(1,((W-S)*q+(H-L)*E)/Y)):0,ae=W-(S+te*q),oe=H-(L+te*E);return ae*ae+oe*oe}var _=Object.freeze({__proto__:null,generate:b,generateIntoCanvas:p,generateIntoFramebuffer:m}),x="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",v="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",w="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",M=new Float32Array([0,0,2,0,0,2]),P=null,y=!1,A={},R=new WeakMap;function N(W){if(!y&&!D(W))throw new Error("WebGL generation not supported")}function U(W,H,S,L,Q,X,q){if(X===void 0&&(X=1),q===void 0&&(q=null),!q&&(q=P,!q)){var E=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!E)throw new Error("OffscreenCanvas or DOM canvas not supported");q=P=E.getContext("webgl",{depth:!1})}N(q);var Y=new Uint8Array(W*H*4);u(q,function(he){var G=he.gl,fe=he.withTexture,Pe=he.withTextureFramebuffer;fe("readable",function(Me,Ce){G.texImage2D(G.TEXTURE_2D,0,G.RGBA,W,H,0,G.RGBA,G.UNSIGNED_BYTE,null),Pe(Me,Ce,function(Be){I(W,H,S,L,Q,X,G,Be,0,0,0),G.readPixels(0,0,W,H,G.RGBA,G.UNSIGNED_BYTE,Y)})})});for(var te=new Uint8Array(W*H),ae=0,oe=0;ae<Y.length;ae+=4)te[oe++]=Y[ae];return te}function C(W,H,S,L,Q,X,q,E,Y,te){X===void 0&&(X=1),E===void 0&&(E=0),Y===void 0&&(Y=0),te===void 0&&(te=0),I(W,H,S,L,Q,X,q,null,E,Y,te)}function I(W,H,S,L,Q,X,q,E,Y,te,ae){X===void 0&&(X=1),Y===void 0&&(Y=0),te===void 0&&(te=0),ae===void 0&&(ae=0),N(q);var oe=[];r(S,function(he,G,fe,Pe){oe.push(he,G,fe,Pe)}),oe=new Float32Array(oe),u(q,function(he){var G=he.gl,fe=he.isWebGL2,Pe=he.getExtension,Me=he.withProgram,Ce=he.withTexture,Be=he.withTextureFramebuffer,ue=he.handleContextLoss;if(Ce("rawDistances",function(Se,Ae){(W!==Se._lastWidth||H!==Se._lastHeight)&&G.texImage2D(G.TEXTURE_2D,0,G.RGBA,Se._lastWidth=W,Se._lastHeight=H,0,G.RGBA,G.UNSIGNED_BYTE,null),Me("main",x,v,function(me){var O=me.setAttribute,T=me.setUniform,Z=!fe&&Pe("ANGLE_instanced_arrays"),ie=!fe&&Pe("EXT_blend_minmax");O("aUV",2,G.STATIC_DRAW,0,M),O("aLineSegment",4,G.DYNAMIC_DRAW,1,oe),T.apply(void 0,["4f","uGlyphBounds"].concat(L)),T("1f","uMaxDistance",Q),T("1f","uExponent",X),Be(Se,Ae,function(le){G.enable(G.BLEND),G.colorMask(!0,!0,!0,!0),G.viewport(0,0,W,H),G.scissor(0,0,W,H),G.blendFunc(G.ONE,G.ONE),G.blendEquationSeparate(G.FUNC_ADD,fe?G.MAX:ie.MAX_EXT),G.clear(G.COLOR_BUFFER_BIT),fe?G.drawArraysInstanced(G.TRIANGLES,0,3,oe.length/4):Z.drawArraysInstancedANGLE(G.TRIANGLES,0,3,oe.length/4)})}),Me("post",o,w,function(me){me.setAttribute("aUV",2,G.STATIC_DRAW,0,M),me.setUniform("1i","tex",Ae),G.bindFramebuffer(G.FRAMEBUFFER,E),G.disable(G.BLEND),G.colorMask(ae===0,ae===1,ae===2,ae===3),G.viewport(Y,te,W,H),G.scissor(Y,te,W,H),G.drawArrays(G.TRIANGLES,0,3)})}),G.isContextLost())throw ue(),new Error("webgl context lost")})}function D(W){var H=!W||W===P?A:W.canvas||W,S=R.get(H);if(S===void 0){y=!0;var L=null;try{var Q=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],X=U(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,W);S=X&&Q.length===X.length&&X.every(function(q,E){return q===Q[E]}),S||(L="bad trial run results",console.info(Q,X))}catch(q){S=!1,L=q.message}L&&console.warn("WebGL SDF generation not supported:",L),y=!1,R.set(H,S)}return S}var B=Object.freeze({__proto__:null,generate:U,generateIntoCanvas:C,generateIntoFramebuffer:I,isSupported:D});function ee(W,H,S,L,Q,X){Q===void 0&&(Q=Math.max(L[2]-L[0],L[3]-L[1])/2),X===void 0&&(X=1);try{return U.apply(B,arguments)}catch(q){return console.info("WebGL SDF generation failed, falling back to JS",q),b.apply(_,arguments)}}function J(W,H,S,L,Q,X,q,E,Y,te){Q===void 0&&(Q=Math.max(L[2]-L[0],L[3]-L[1])/2),X===void 0&&(X=1),E===void 0&&(E=0),Y===void 0&&(Y=0),te===void 0&&(te=0);try{return C.apply(B,arguments)}catch(ae){return console.info("WebGL SDF generation failed, falling back to JS",ae),p.apply(_,arguments)}}return e.forEachPathCommand=i,e.generate=ee,e.generateIntoCanvas=J,e.javascript=_,e.pathToLineSegments=r,e.webgl=B,e.webglUtils=h,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function i1(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},n={},i={};n.L=1,i[1]="L",Object.keys(t).forEach(function(ue,Se){n[ue]=1<<Se+1,i[n[ue]]=ue}),Object.freeze(n);var r=n.LRI|n.RLI|n.FSI,o=n.L|n.R|n.AL,a=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,l=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,c=n.S|n.WS|n.B|r|n.PDI|l,u=null;function f(){if(!u){u=new Map;var ue=function(Ae){if(t.hasOwnProperty(Ae)){var me=0;t[Ae].split(",").forEach(function(O){var T=O.split("+"),Z=T[0],ie=T[1];Z=parseInt(Z,36),ie=ie?parseInt(ie,36):0,u.set(me+=Z,n[Ae]);for(var le=0;le<ie;le++)u.set(++me,n[Ae])})}};for(var Se in t)ue(Se)}}function d(ue){return f(),u.get(ue.codePointAt(0))||n.L}function h(ue){return i[d(ue)]}var b={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function p(ue,Se){var Ae=36,me=0,O=new Map,T=Se&&new Map,Z;return ue.split(",").forEach(function ie(le){if(le.indexOf("+")!==-1)for(var pe=+le;pe--;)ie(Z);else{Z=le;var z=le.split(">"),k=z[0],j=z[1];k=String.fromCodePoint(me+=parseInt(k,Ae)),j=String.fromCodePoint(me+=parseInt(j,Ae)),O.set(k,j),Se&&T.set(j,k)}}),{map:O,reverseMap:T}}var m,g,_;function x(){if(!m){var ue=p(b.pairs,!0),Se=ue.map,Ae=ue.reverseMap;m=Se,g=Ae,_=p(b.canonical,!1).map}}function v(ue){return x(),m.get(ue)||null}function w(ue){return x(),g.get(ue)||null}function M(ue){return x(),_.get(ue)||null}var P=n.L,y=n.R,A=n.EN,R=n.ES,N=n.ET,U=n.AN,C=n.CS,I=n.B,D=n.S,B=n.ON,ee=n.BN,J=n.NSM,W=n.AL,H=n.LRO,S=n.RLO,L=n.LRE,Q=n.RLE,X=n.PDF,q=n.LRI,E=n.RLI,Y=n.FSI,te=n.PDI;function ae(ue,Se){for(var Ae=125,me=new Uint32Array(ue.length),O=0;O<ue.length;O++)me[O]=d(ue[O]);var T=new Map;function Z(qt,Dn){var cn=me[qt];me[qt]=Dn,T.set(cn,T.get(cn)-1),cn&a&&T.set(a,T.get(a)-1),T.set(Dn,(T.get(Dn)||0)+1),Dn&a&&T.set(a,(T.get(a)||0)+1)}for(var ie=new Uint8Array(ue.length),le=new Map,pe=[],z=null,k=0;k<ue.length;k++)z||pe.push(z={start:k,end:ue.length-1,level:Se==="rtl"?1:Se==="ltr"?0:el(k,!1)}),me[k]&I&&(z.end=k,z=null);for(var j=Q|L|S|H|r|te|X|I,xe=function(qt){return qt+(qt&1?1:2)},we=function(qt){return qt+(qt&1?2:1)},ye=0;ye<pe.length;ye++){z=pe[ye];var _e=[{_level:z.level,_override:0,_isolate:0}],de=void 0,Ne=0,ze=0,qe=0;T.clear();for(var V=z.start;V<=z.end;V++){var re=me[V];if(de=_e[_e.length-1],T.set(re,(T.get(re)||0)+1),re&a&&T.set(a,(T.get(a)||0)+1),re&j)if(re&(Q|L)){ie[V]=de._level;var ve=(re===Q?we:xe)(de._level);ve<=Ae&&!Ne&&!ze?_e.push({_level:ve,_override:0,_isolate:0}):Ne||ze++}else if(re&(S|H)){ie[V]=de._level;var Le=(re===S?we:xe)(de._level);Le<=Ae&&!Ne&&!ze?_e.push({_level:Le,_override:re&S?y:P,_isolate:0}):Ne||ze++}else if(re&r){re&Y&&(re=el(V+1,!0)===1?E:q),ie[V]=de._level,de._override&&Z(V,de._override);var De=(re===E?we:xe)(de._level);De<=Ae&&Ne===0&&ze===0?(qe++,_e.push({_level:De,_override:0,_isolate:1,_isolInitIndex:V})):Ne++}else if(re&te){if(Ne>0)Ne--;else if(qe>0){for(ze=0;!_e[_e.length-1]._isolate;)_e.pop();var st=_e[_e.length-1]._isolInitIndex;st!=null&&(le.set(st,V),le.set(V,st)),_e.pop(),qe--}de=_e[_e.length-1],ie[V]=de._level,de._override&&Z(V,de._override)}else re&X?(Ne===0&&(ze>0?ze--:!de._isolate&&_e.length>1&&(_e.pop(),de=_e[_e.length-1])),ie[V]=de._level):re&I&&(ie[V]=z.level);else ie[V]=de._level,de._override&&re!==ee&&Z(V,de._override)}for(var Xe=[],We=null,_t=z.start;_t<=z.end;_t++){var nt=me[_t];if(!(nt&l)){var ut=ie[_t],dt=nt&r,mn=nt===te;We&&ut===We._level?(We._end=_t,We._endsWithIsolInit=dt):Xe.push(We={_start:_t,_end:_t,_level:ut,_startsWithPDI:mn,_endsWithIsolInit:dt})}}for(var Ct=[],Tt=0;Tt<Xe.length;Tt++){var $t=Xe[Tt];if(!$t._startsWithPDI||$t._startsWithPDI&&!le.has($t._start)){for(var F=[We=$t],ne=void 0;We&&We._endsWithIsolInit&&(ne=le.get(We._end))!=null;)for(var se=Tt+1;se<Xe.length;se++)if(Xe[se]._start===ne){F.push(We=Xe[se]);break}for(var $=[],ce=0;ce<F.length;ce++)for(var Ge=F[ce],He=Ge._start;He<=Ge._end;He++)$.push(He);for(var Je=ie[$[0]],Qe=z.level,rt=$[0]-1;rt>=0;rt--)if(!(me[rt]&l)){Qe=ie[rt];break}var it=$[$.length-1],at=ie[it],yt=z.level;if(!(me[it]&r)){for(var Rt=it+1;Rt<=z.end;Rt++)if(!(me[Rt]&l)){yt=ie[Rt];break}}Ct.push({_seqIndices:$,_sosType:Math.max(Qe,Je)%2?y:P,_eosType:Math.max(yt,at)%2?y:P})}}for(var pn=0;pn<Ct.length;pn++){var En=Ct[pn],Ee=En._seqIndices,$e=En._sosType,Sr=En._eosType;if(T.get(J))for(var wt=0;wt<Ee.length;wt++){var kn=Ee[wt];if(me[kn]&J){for(var zi=$e,zn=wt-1;zn>=0;zn--)if(!(me[Ee[zn]]&l)){zi=me[Ee[zn]];break}Z(kn,zi&(r|te)?B:zi)}}if(T.get(A))for(var ii=0;ii<Ee.length;ii++){var It=Ee[ii];if(me[It]&A)for(var wn=ii-1;wn>=-1;wn--){var Ni=wn===-1?$e:me[Ee[wn]];if(Ni&o){Ni===W&&Z(It,U);break}}}if(T.get(W))for(var Ot=0;Ot<Ee.length;Ot++){var Bi=Ee[Ot];me[Bi]&W&&Z(Bi,y)}if(T.get(R)||T.get(C))for(var vi=1;vi<Ee.length-1;vi++){var Gi=Ee[vi];if(me[Gi]&(R|C)){for(var Vi=0,la=0,ca=vi-1;ca>=0&&(Vi=me[Ee[ca]],!!(Vi&l));ca--);for(var ua=vi+1;ua<Ee.length&&(la=me[Ee[ua]],!!(la&l));ua++);Vi===la&&(me[Gi]===R?Vi===A:Vi&(A|U))&&Z(Gi,Vi)}}if(T.get(A))for(var Mr=0;Mr<Ee.length;Mr++){var lf=Ee[Mr];if(me[lf]&A){for(var is=Mr-1;is>=0&&me[Ee[is]]&(N|l);is--)Z(Ee[is],A);for(var rs=Mr+1;rs<Ee.length&&me[Ee[rs]]&(N|l);rs++)Z(Ee[rs],A)}}if(T.get(N)||T.get(R)||T.get(C))for(var Tr=0;Tr<Ee.length;Tr++){var Wo=Ee[Tr];if(me[Wo]&(N|R|C)){Z(Wo,B);for(var ss=Tr-1;ss>=0&&me[Ee[ss]]&l;ss--)Z(Ee[ss],B);for(var as=Tr+1;as<Ee.length&&me[Ee[as]]&l;as++)Z(Ee[as],B)}}if(T.get(A))for(var fa=0,Ho=$e;fa<Ee.length;fa++){var jo=Ee[fa],da=me[jo];da&A?Ho===P&&Z(jo,P):da&o&&(Ho=da)}if(T.get(a)){var Ar=y|A|U,Xo=Ar|P,os=[];{for(var Wi=[],Hi=0;Hi<Ee.length;Hi++)if(me[Ee[Hi]]&a){var Er=ue[Ee[Hi]],qo=void 0;if(v(Er)!==null)if(Wi.length<63)Wi.push({char:Er,seqIndex:Hi});else break;else if((qo=w(Er))!==null)for(var Cr=Wi.length-1;Cr>=0;Cr--){var ha=Wi[Cr].char;if(ha===qo||ha===w(M(Er))||v(M(ha))===Er){os.push([Wi[Cr].seqIndex,Hi]),Wi.length=Cr;break}}}os.sort(function(qt,Dn){return qt[0]-Dn[0]})}for(var ma=0;ma<os.length;ma++){for(var Yo=os[ma],Dr=Yo[0],ls=Yo[1],Zo=!1,Cn=0,pa=Dr+1;pa<ls;pa++){var ga=Ee[pa];if(me[ga]&Xo){Zo=!0;var Ko=me[ga]&Ar?y:P;if(Ko===ji(ga)){Cn=Ko;break}}}if(Zo&&!Cn){Cn=$e;for(var _a=Dr-1;_a>=0;_a--){var cs=Ee[_a];if(me[cs]&Xo){var Jo=me[cs]&Ar?y:P;Jo!==ji(cs)?Cn=Jo:Cn=ji(cs);break}}}if(Cn){if(me[Ee[Dr]]=me[Ee[ls]]=Cn,Cn!==ji(Ee[Dr])){for(var Lr=Dr+1;Lr<Ee.length;Lr++)if(!(me[Ee[Lr]]&l)){d(ue[Ee[Lr]])&J&&(me[Ee[Lr]]=Cn);break}}if(Cn!==ji(Ee[ls])){for(var Pr=ls+1;Pr<Ee.length;Pr++)if(!(me[Ee[Pr]]&l)){d(ue[Ee[Pr]])&J&&(me[Ee[Pr]]=Cn);break}}}}for(var ri=0;ri<Ee.length;ri++)if(me[Ee[ri]]&a){for(var Qo=ri,va=ri,ba=$e,Rr=ri-1;Rr>=0;Rr--)if(me[Ee[Rr]]&l)Qo=Rr;else{ba=me[Ee[Rr]]&Ar?y:P;break}for(var $o=Sr,Ir=ri+1;Ir<Ee.length;Ir++)if(me[Ee[Ir]]&(a|l))va=Ir;else{$o=me[Ee[Ir]]&Ar?y:P;break}for(var us=Qo;us<=va;us++)me[Ee[us]]=ba===$o?ba:ji(Ee[us]);ri=va}}}for(var gn=z.start;gn<=z.end;gn++){var cf=ie[gn],fs=me[gn];if(cf&1?fs&(P|A|U)&&ie[gn]++:fs&y?ie[gn]++:fs&(U|A)&&(ie[gn]+=2),fs&l&&(ie[gn]=gn===0?z.level:ie[gn-1]),gn===z.end||d(ue[gn])&(D|I))for(var ds=gn;ds>=0&&d(ue[ds])&c;ds--)ie[ds]=z.level}}return{levels:ie,paragraphs:pe};function el(qt,Dn){for(var cn=qt;cn<ue.length;cn++){var si=me[cn];if(si&(y|W))return 1;if(si&(I|P)||Dn&&si===te)return 0;if(si&r){var tl=uf(cn);cn=tl===-1?ue.length:tl}}return 0}function uf(qt){for(var Dn=1,cn=qt+1;cn<ue.length;cn++){var si=me[cn];if(si&I)break;if(si&te){if(--Dn===0)return cn}else si&r&&Dn++}return-1}function ji(qt){return ie[qt]&1?y:P}}var oe="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",he;function G(){if(!he){var ue=p(oe,!0),Se=ue.map,Ae=ue.reverseMap;Ae.forEach(function(me,O){Se.set(O,me)}),he=Se}}function fe(ue){return G(),he.get(ue)||null}function Pe(ue,Se,Ae,me){var O=ue.length;Ae=Math.max(0,Ae==null?0:+Ae),me=Math.min(O-1,me==null?O-1:+me);for(var T=new Map,Z=Ae;Z<=me;Z++)if(Se[Z]&1){var ie=fe(ue[Z]);ie!==null&&T.set(Z,ie)}return T}function Me(ue,Se,Ae,me){var O=ue.length;Ae=Math.max(0,Ae==null?0:+Ae),me=Math.min(O-1,me==null?O-1:+me);var T=[];return Se.paragraphs.forEach(function(Z){var ie=Math.max(Ae,Z.start),le=Math.min(me,Z.end);if(ie<le){for(var pe=Se.levels.slice(ie,le+1),z=le;z>=ie&&d(ue[z])&c;z--)pe[z]=Z.level;for(var k=Z.level,j=1/0,xe=0;xe<pe.length;xe++){var we=pe[xe];we>k&&(k=we),we<j&&(j=we|1)}for(var ye=k;ye>=j;ye--)for(var _e=0;_e<pe.length;_e++)if(pe[_e]>=ye){for(var de=_e;_e+1<pe.length&&pe[_e+1]>=ye;)_e++;_e>de&&T.push([de+Ae,_e+Ae])}}}),T}function Ce(ue,Se,Ae,me){var O=Be(ue,Se,Ae,me),T=[].concat(ue);return O.forEach(function(Z,ie){T[ie]=(Se.levels[Z]&1?fe(ue[Z]):null)||ue[Z]}),T.join("")}function Be(ue,Se,Ae,me){for(var O=Me(ue,Se,Ae,me),T=[],Z=0;Z<ue.length;Z++)T[Z]=Z;return O.forEach(function(ie){for(var le=ie[0],pe=ie[1],z=T.slice(le,pe+1),k=z.length;k--;)T[pe-k]=z[k]}),T}return e.closingToOpeningBracket=w,e.getBidiCharType=d,e.getBidiCharTypeName=h,e.getCanonicalBracket=M,e.getEmbeddingLevels=ae,e.getMirroredCharacter=fe,e.getMirroredCharactersMap=Pe,e.getReorderSegments=Me,e.getReorderedIndices=Be,e.getReorderedString=Ce,e.openingToClosingBracket=v,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}const sf=/\bvoid\s+main\s*\(\s*\)\s*{/g;function To(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,i){let r=et[i];return r?To(r):n}return s.replace(e,t)}const zt=[];for(let s=0;s<256;s++)zt[s]=(s<16?"0":"")+s.toString(16);function r1(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[s&255]+zt[s>>8&255]+zt[s>>16&255]+zt[s>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toUpperCase()}const wi=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let i in n)n.hasOwnProperty(i)&&(s[i]=n[i])}return s},s1=Date.now(),eu=new WeakMap,tu=new Map;let a1=1e10;function Ao(s,e){const t=u1(e);let n=eu.get(s);if(n||eu.set(s,n=Object.create(null)),n[t])return new n[t];const i=`_onBeforeCompile${t}`,r=function(c){s.onBeforeCompile.call(this,c);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=tu[u];if(!f){const d=o1(c,e,t);f=tu[u]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,wi(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-s1}}),this[i]&&this[i](c)},o=function(){return a(e.chained?s:s.clone())},a=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:a1++}),u.uuid=r1(),u.uniforms=wi({},c.uniforms,e.uniforms),u.defines=wi({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=wi({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:o},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(wi(this.extensions,c.extensions),wi(this.defines,c.defines),wi(this.uniforms,ts.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return a(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Ao(s.isDerivedMaterial?s.getDepthMaterial():new Bu({depthPacking:Tu}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Ao(s.isDerivedMaterial?s.getDistanceMaterial():new Gu,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return n[t]=o,new o}function o1({vertexShader:s,fragmentShader:e},t,n){let{vertexDefs:i,vertexMainIntro:r,vertexMainOutro:o,vertexTransform:a,fragmentDefs:l,fragmentMainIntro:c,fragmentMainOutro:u,fragmentColorTransform:f,customRewriter:d,timeUniform:h}=t;if(i=i||"",r=r||"",o=o||"",l=l||"",c=c||"",u=u||"",(a||d)&&(s=To(s)),(f||d)&&(e=e.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),e=To(e)),d){let b=d({vertexShader:s,fragmentShader:e});s=b.vertexShader,e=b.fragmentShader}if(f){let b=[];e=e.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(b.push(p),"")),u=`${f}
${b.join(`
`)}
${u}`}if(h){const b=`
uniform float ${h};
`;i=b+i,l=b+l}return a&&(s=`vec3 troika_position_${n};
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
`,s=s.replace(/\b(position|normal|uv)\b/g,(b,p,m,g)=>/\battribute\s+vec[23]\s+$/.test(g.substr(0,m))?p:`troika_${p}_${n}`)),s=nu(s,n,i,r,o),e=nu(e,n,l,c,u),{vertexShader:s,fragmentShader:e}}function nu(s,e,t,n,i){return(n||i||t)&&(s=s.replace(sf,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`),s}function l1(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let c1=0;const iu=new Map;function u1(s){const e=JSON.stringify(s,l1);let t=iu.get(e);return t==null&&iu.set(e,t=++c1),t}function f1(s,e,t){const{defaultFontURL:n}=t,i=Object.create(null),r=1/0,o=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,a=/[\s\-\u007C\u00AD\u2010\u2012-\u2014\u2027\u2056\u2E17\u2E40]/;function l(g,_){function x(){const v=w=>{console.error(`Failure loading font ${g}${g===n?"":"; trying fallback"}`,w),g!==n&&(g=n,x())};try{const w=new XMLHttpRequest;w.open("get",g,!0),w.responseType="arraybuffer",w.onload=function(){if(w.status>=400)v(new Error(w.statusText));else if(w.status>0)try{const M=s(w.response);_(M)}catch(M){v(M)}},w.onerror=v,w.send()}catch(w){v(w)}}x()}function c(g,_){g||(g=n);let x=i[g];x?x.pending?x.pending.push(_):_(x):(i[g]={pending:[_]},l(g,v=>{let w=i[g].pending;i[g]=v,w.forEach(M=>M(v))}))}function u({text:g="",font:_=n,sdfGlyphSize:x=64,fontSize:v=1,letterSpacing:w=0,lineHeight:M="normal",maxWidth:P=r,direction:y,textAlign:A="left",textIndent:R=0,whiteSpace:N="normal",overflowWrap:U="normal",anchorX:C=0,anchorY:I=0,includeCaretPositions:D=!1,chunkedBoundsSize:B=8192,colorRanges:ee=null},J,W=!1){const H=b(),S={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),v=+v,w=+w,P=+P,M=M||"normal",R=+R,c(_,L=>{const Q=isFinite(P);let X=null,q=null,E=null,Y=null,te=null,ae=null,oe=null,he=0,G=0,fe=N!=="nowrap";const{ascender:Pe,descender:Me,unitsPerEm:Ce}=L;S.fontLoad=b()-H;const Be=b(),ue=v/Ce;M==="normal"&&(M=(Pe-Me)/Ce),M=M*v;const Se=(M-(Pe-Me)*ue)/2,Ae=-(Pe*ue+Se),me=Math.min(M,(Pe-Me)*ue),O=(Pe+Me)/2*ue-me/2;let T=R,Z=new p;const ie=[Z];L.forEachGlyph(g,v,w,(z,k,j)=>{const xe=g.charAt(j),we=z.advanceWidth*ue,ye=Z.count;let _e;if("isEmpty"in z||(z.isWhitespace=!!xe&&/\s/.test(xe),z.canBreakAfter=!!xe&&a.test(xe),z.isEmpty=z.xMin===z.xMax||z.yMin===z.yMax||o.test(xe)),!z.isWhitespace&&!z.isEmpty&&G++,fe&&Q&&!z.isWhitespace&&k+we+T>P&&ye){if(Z.glyphAt(ye-1).glyphObj.canBreakAfter)_e=new p,T=-k;else for(let Ne=ye;Ne--;)if(Ne===0&&U==="break-word"){_e=new p,T=-k;break}else if(Z.glyphAt(Ne).glyphObj.canBreakAfter){_e=Z.splitAt(Ne+1);const ze=_e.glyphAt(0).x;T-=ze;for(let qe=_e.count;qe--;)_e.glyphAt(qe).x-=ze;break}_e&&(Z.isSoftWrapped=!0,Z=_e,ie.push(Z),he=P)}let de=Z.glyphAt(Z.count);de.glyphObj=z,de.x=k+T,de.width=we,de.charIndex=j,xe===`
`&&(Z=new p,ie.push(Z),T=-(k+we+w*v)+R)}),ie.forEach(z=>{for(let k=z.count;k--;){let{glyphObj:j,x:xe,width:we}=z.glyphAt(k);if(!j.isWhitespace){z.width=xe+we,z.width>he&&(he=z.width);return}}});let le=0,pe=0;if(C&&(typeof C=="number"?le=-C:typeof C=="string"&&(le=-he*(C==="left"?0:C==="center"?.5:C==="right"?1:d(C)))),I){if(typeof I=="number")pe=-I;else if(typeof I=="string"){let z=ie.length*M;pe=I==="top"?0:I==="top-baseline"?-Ae:I==="middle"?z/2:I==="bottom"?z:I==="bottom-baseline"?z-Se+Me*ue:d(I)*z}}if(!W){const z=e.getEmbeddingLevels(g,y);X=new Uint16Array(G),q=new Float32Array(G*2),E={},ae=[r,r,-r,-r],oe=[];let k=Ae;D&&(te=new Float32Array(g.length*3)),ee&&(Y=new Uint8Array(G*3));let j=0,xe=-1,we=-1,ye,_e;if(ie.forEach((de,Ne)=>{let{count:ze,width:qe}=de;if(ze>0){let V=0;for(let Xe=ze;Xe--&&de.glyphAt(Xe).glyphObj.isWhitespace;)V++;let re=0,ve=0;if(A==="center")re=(he-qe)/2;else if(A==="right")re=he-qe;else if(A==="justify"&&de.isSoftWrapped){let Xe=0;for(let We=ze-V;We--;)de.glyphAt(We).glyphObj.isWhitespace&&Xe++;ve=(he-qe)/Xe}if(ve||re){let Xe=0;for(let We=0;We<ze;We++){let _t=de.glyphAt(We);const nt=_t.glyphObj;_t.x+=re+Xe,ve!==0&&nt.isWhitespace&&We<ze-V&&(Xe+=ve,_t.width+=ve)}}const Le=e.getReorderSegments(g,z,de.glyphAt(0).charIndex,de.glyphAt(de.count-1).charIndex);for(let Xe=0;Xe<Le.length;Xe++){const[We,_t]=Le[Xe];let nt=1/0,ut=-1/0;for(let dt=0;dt<ze;dt++)if(de.glyphAt(dt).charIndex>=We){let mn=dt,Ct=dt;for(;Ct<ze;Ct++){let Tt=de.glyphAt(Ct);if(Tt.charIndex>_t)break;Ct<ze-V&&(nt=Math.min(nt,Tt.x),ut=Math.max(ut,Tt.x+Tt.width))}for(let Tt=mn;Tt<Ct;Tt++){const $t=de.glyphAt(Tt);$t.x=ut-($t.x+$t.width-nt)}break}}let De;const st=Xe=>De=Xe;for(let Xe=0;Xe<ze;Xe++){let We=de.glyphAt(Xe);De=We.glyphObj;const _t=De.index,nt=z.levels[We.charIndex]&1;if(nt){const ut=e.getMirroredCharacter(g[We.charIndex]);ut&&L.forEachGlyph(ut,0,0,st)}if(D){const{charIndex:ut}=We,dt=We.x+le,mn=We.x+We.width+le;te[ut*3]=nt?mn:dt,te[ut*3+1]=nt?dt:mn,te[ut*3+2]=k+O+pe;const Ct=ut-xe;Ct>1&&h(te,xe,Ct),xe=ut}if(ee){const{charIndex:ut}=We;for(;ut>we;)we++,ee.hasOwnProperty(we)&&(_e=ee[we])}if(!De.isWhitespace&&!De.isEmpty){const ut=j++;E[_t]||(E[_t]={path:De.path,pathBounds:[De.xMin,De.yMin,De.xMax,De.yMax]});const dt=We.x+le,mn=k+pe;q[ut*2]=dt,q[ut*2+1]=mn;const Ct=dt+De.xMin*ue,Tt=mn+De.yMin*ue,$t=dt+De.xMax*ue,F=mn+De.yMax*ue;Ct<ae[0]&&(ae[0]=Ct),Tt<ae[1]&&(ae[1]=Tt),$t>ae[2]&&(ae[2]=$t),F>ae[3]&&(ae[3]=F),ut%B===0&&(ye={start:ut,end:ut,rect:[r,r,-r,-r]},oe.push(ye)),ye.end++;const ne=ye.rect;if(Ct<ne[0]&&(ne[0]=Ct),Tt<ne[1]&&(ne[1]=Tt),$t>ne[2]&&(ne[2]=$t),F>ne[3]&&(ne[3]=F),X[ut]=_t,ee){const se=ut*3;Y[se]=_e>>16&255,Y[se+1]=_e>>8&255,Y[se+2]=_e&255}}}}k-=M}),te){const de=g.length-xe;de>1&&h(te,xe,de)}}S.typesetting=b()-Be,J({glyphIds:X,glyphPositions:q,glyphData:E,caretPositions:te,caretHeight:me,glyphColors:Y,chunkedBounds:oe,fontSize:v,unitsPerEm:Ce,ascender:Pe*ue,descender:Me*ue,lineHeight:M,topBaseline:Ae,blockBounds:[le,pe-ie.length*M,le+he,pe],visibleBounds:ae,timings:S})})}function f(g,_){u(g,x=>{const[v,w,M,P]=x.blockBounds;_({width:M-v,height:P-w})},{metricsOnly:!0})}function d(g){let _=g.match(/^([\d.]+)%$/),x=_?parseFloat(_[1]):NaN;return isNaN(x)?0:x/100}function h(g,_,x){const v=g[_*3],w=g[_*3+1],M=g[_*3+2],P=(w-v)/x;for(let y=0;y<x;y++){const A=(_+y)*3;g[A]=v+P*y,g[A+1]=v+P*(y+1),g[A+2]=M}}function b(){return(self.performance||Date).now()}function p(){this.data=[]}const m=["glyphObj","x","width","charIndex"];return p.prototype={width:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/m.length)},glyphAt(g){let _=p.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new p;return _.data=this.data.splice(g*m.length),_}},p.flyweight=m.reduce((g,_,x,v)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*m.length+x]},set(w){this.data[this.index*m.length+x]=w}}),g),{data:null,index:0}),{typeset:u,measure:f,loadFont:c}}const Ci=()=>(self.performance||Date).now(),oa=rf();let ru;function d1(s,e,t,n,i,r,o,a,l,c,u=!0){return u?h1(s,e,t,n,i,r,o,a,l,c).then(null,f=>(ru||(console.warn("WebGL SDF generation failed, falling back to JS",f),ru=!0),su(s,e,t,n,i,r,o,a,l,c))):su(s,e,t,n,i,r,o,a,l,c)}const h1=function(){const s=[];let t=0;function n(){const i=Ci();for(;s.length&&Ci()-i<5;)s.shift()();t=s.length?setTimeout(n,0):0}return(...i)=>{const r=ti();return s.push(()=>{const o=Ci();try{oa.webgl.generateIntoCanvas(...i),r.resolve({timing:Ci()-o})}catch(a){r.reject(a)}}),t||(t=setTimeout(n,0)),r}}(),su=function(){const t={};let n=0;return function(i,r,o,a,l,c,u,f,d,h){const b="TroikaTextSDFGenerator_JS_"+n++%4;let p=t[b];return p||(p=t[b]={workerModule:wr({name:b,workerId:b,dependencies:[rf,Ci],init(m,g){const _=m().javascript.generate;return function(...x){const v=g();return{textureData:_(...x),timing:g()-v}}},getTransferables(m){return[m.textureData.buffer]}}),requests:0,idleTimer:null}),p.requests++,clearTimeout(p.idleTimer),p.workerModule(i,r,o,a,l,c).then(({textureData:m,timing:g})=>{const _=Ci(),x=new Uint8Array(m.length*4);for(let v=0;v<m.length;v++)x[v*4+h]=m[v];return oa.webglUtils.renderImageData(u,x,f,d,i,r,1<<3-h),g+=Ci()-_,--p.requests===0&&(p.idleTimer=setTimeout(()=>{e1(b)},2e3)),{timing:g}})}}();function m1(s){s._warm||(oa.webgl.isSupported(s),s._warm=!0)}const p1=oa.webglUtils.resizeWebGLCanvasWithoutClearing;/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function g1(){return typeof window>"u"&&(self.window=self),function(s){var e={parse:function(i){var r=e._bin,o=new Uint8Array(i);if(r.readASCII(o,0,4)=="ttcf"){var a=4;r.readUshort(o,a),a+=2,r.readUshort(o,a),a+=2;var l=r.readUint(o,a);a+=4;for(var c=[],u=0;u<l;u++){var f=r.readUint(o,a);a+=4,c.push(e._readFont(o,f))}return c}return[e._readFont(o,0)]},_readFont:function(i,r){var o=e._bin,a=r;o.readFixed(i,r),r+=4;var l=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GPOS","GSUB","SVG "],u={_data:i,_offset:a},f={},d=0;d<l;d++){var h=o.readASCII(i,r,4);r+=4,o.readUint(i,r),r+=4;var b=o.readUint(i,r);r+=4;var p=o.readUint(i,r);r+=4,f[h]={offset:b,length:p}}for(d=0;d<c.length;d++){var m=c[d];f[m]&&(u[m.trim()]=e[m.trim()].parse(i,f[m].offset,f[m].length,u))}return u},_tabOffset:function(i,r,o){for(var a=e._bin,l=a.readUshort(i,o+4),c=o+12,u=0;u<l;u++){var f=a.readASCII(i,c,4);c+=4,a.readUint(i,c),c+=4;var d=a.readUint(i,c);if(c+=4,a.readUint(i,c),c+=4,f==r)return d}return 0}};e._bin={readFixed:function(i,r){return(i[r]<<8|i[r+1])+(i[r+2]<<8|i[r+3])/65540},readF2dot14:function(i,r){return e._bin.readShort(i,r)/16384},readInt:function(i,r){return e._bin._view(i).getInt32(r)},readInt8:function(i,r){return e._bin._view(i).getInt8(r)},readShort:function(i,r){return e._bin._view(i).getInt16(r)},readUshort:function(i,r){return e._bin._view(i).getUint16(r)},readUshorts:function(i,r,o){for(var a=[],l=0;l<o;l++)a.push(e._bin.readUshort(i,r+2*l));return a},readUint:function(i,r){return e._bin._view(i).getUint32(r)},readUint64:function(i,r){return 4294967296*e._bin.readUint(i,r)+e._bin.readUint(i,r+4)},readASCII:function(i,r,o){for(var a="",l=0;l<o;l++)a+=String.fromCharCode(i[r+l]);return a},readUnicode:function(i,r,o){for(var a="",l=0;l<o;l++){var c=i[r++]<<8|i[r++];a+=String.fromCharCode(c)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,r,o){var a=e._bin._tdec;return a&&r==0&&o==i.length?a.decode(i):e._bin.readASCII(i,r,o)},readBytes:function(i,r,o){for(var a=[],l=0;l<o;l++)a.push(i[r+l]);return a},readASCIIArray:function(i,r,o){for(var a=[],l=0;l<o;l++)a.push(String.fromCharCode(i[r+l]));return a},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,r,o,a,l){var c=e._bin,u={},f=r;c.readFixed(i,r),r+=4;var d=c.readUshort(i,r);r+=2;var h=c.readUshort(i,r);r+=2;var b=c.readUshort(i,r);return r+=2,u.scriptList=e._lctf.readScriptList(i,f+d),u.featureList=e._lctf.readFeatureList(i,f+h),u.lookupList=e._lctf.readLookupList(i,f+b,l),u},e._lctf.readLookupList=function(i,r,o){var a=e._bin,l=r,c=[],u=a.readUshort(i,r);r+=2;for(var f=0;f<u;f++){var d=a.readUshort(i,r);r+=2;var h=e._lctf.readLookupTable(i,l+d,o);c.push(h)}return c},e._lctf.readLookupTable=function(i,r,o){var a=e._bin,l=r,c={tabs:[]};c.ltype=a.readUshort(i,r),r+=2,c.flag=a.readUshort(i,r),r+=2;var u=a.readUshort(i,r);r+=2;for(var f=c.ltype,d=0;d<u;d++){var h=a.readUshort(i,r);r+=2;var b=o(i,f,l+h,c);c.tabs.push(b)}return c},e._lctf.numOfOnes=function(i){for(var r=0,o=0;o<32;o++)i>>>o&1&&r++;return r},e._lctf.readClassDef=function(i,r){var o=e._bin,a=[],l=o.readUshort(i,r);if(r+=2,l==1){var c=o.readUshort(i,r);r+=2;var u=o.readUshort(i,r);r+=2;for(var f=0;f<u;f++)a.push(c+f),a.push(c+f),a.push(o.readUshort(i,r)),r+=2}if(l==2){var d=o.readUshort(i,r);for(r+=2,f=0;f<d;f++)a.push(o.readUshort(i,r)),r+=2,a.push(o.readUshort(i,r)),r+=2,a.push(o.readUshort(i,r)),r+=2}return a},e._lctf.getInterval=function(i,r){for(var o=0;o<i.length;o+=3){var a=i[o],l=i[o+1];if(i[o+2],a<=r&&r<=l)return o}return-1},e._lctf.readCoverage=function(i,r){var o=e._bin,a={};a.fmt=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);return r+=2,a.fmt==1&&(a.tab=o.readUshorts(i,r,l)),a.fmt==2&&(a.tab=o.readUshorts(i,r,3*l)),a},e._lctf.coverageIndex=function(i,r){var o=i.tab;if(i.fmt==1)return o.indexOf(r);if(i.fmt==2){var a=e._lctf.getInterval(o,r);if(a!=-1)return o[a+2]+(r-o[a])}return-1},e._lctf.readFeatureList=function(i,r){var o=e._bin,a=r,l=[],c=o.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=o.readASCII(i,r,4);r+=4;var d=o.readUshort(i,r);r+=2;var h=e._lctf.readFeatureTable(i,a+d);h.tag=f.trim(),l.push(h)}return l},e._lctf.readFeatureTable=function(i,r){var o=e._bin,a=r,l={},c=o.readUshort(i,r);r+=2,c>0&&(l.featureParams=a+c);var u=o.readUshort(i,r);r+=2,l.tab=[];for(var f=0;f<u;f++)l.tab.push(o.readUshort(i,r+2*f));return l},e._lctf.readScriptList=function(i,r){var o=e._bin,a=r,l={},c=o.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=o.readASCII(i,r,4);r+=4;var d=o.readUshort(i,r);r+=2,l[f.trim()]=e._lctf.readScriptTable(i,a+d)}return l},e._lctf.readScriptTable=function(i,r){var o=e._bin,a=r,l={},c=o.readUshort(i,r);r+=2,l.default=e._lctf.readLangSysTable(i,a+c);var u=o.readUshort(i,r);r+=2;for(var f=0;f<u;f++){var d=o.readASCII(i,r,4);r+=4;var h=o.readUshort(i,r);r+=2,l[d.trim()]=e._lctf.readLangSysTable(i,a+h)}return l},e._lctf.readLangSysTable=function(i,r){var o=e._bin,a={};o.readUshort(i,r),r+=2,a.reqFeature=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);return r+=2,a.features=o.readUshorts(i,r,l),a},e.CFF={},e.CFF.parse=function(i,r,o){var a=e._bin;(i=new Uint8Array(i.buffer,r,o))[r=0],i[++r],i[++r],i[++r],r++;var l=[];r=e.CFF.readIndex(i,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(a.readASCII(i,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var f=[];r=e.CFF.readIndex(i,r,f);var d=[];for(u=0;u<f.length-1;u++)d.push(e.CFF.readDict(i,r+f[u],r+f[u+1]));r+=f[f.length-1];var h=d[0],b=[];r=e.CFF.readIndex(i,r,b);var p=[];for(u=0;u<b.length-1;u++)p.push(a.readASCII(i,r+b[u],b[u+1]-b[u]));if(r+=b[b.length-1],e.CFF.readSubrs(i,r,h),h.CharStrings){r=h.CharStrings,b=[],r=e.CFF.readIndex(i,r,b);var m=[];for(u=0;u<b.length-1;u++)m.push(a.readBytes(i,r+b[u],b[u+1]-b[u]));h.CharStrings=m}if(h.ROS){r=h.FDArray;var g=[];for(r=e.CFF.readIndex(i,r,g),h.FDArray=[],u=0;u<g.length-1;u++){var _=e.CFF.readDict(i,r+g[u],r+g[u+1]);e.CFF._readFDict(i,_,p),h.FDArray.push(_)}r+=g[g.length-1],r=h.FDSelect,h.FDSelect=[];var x=i[r];if(r++,x!=3)throw x;var v=a.readUshort(i,r);for(r+=2,u=0;u<v+1;u++)h.FDSelect.push(a.readUshort(i,r),i[r+2]),r+=3}return h.Encoding&&(h.Encoding=e.CFF.readEncoding(i,h.Encoding,h.CharStrings.length)),h.charset&&(h.charset=e.CFF.readCharset(i,h.charset,h.CharStrings.length)),e.CFF._readFDict(i,h,p),h},e.CFF._readFDict=function(i,r,o){var a;for(var l in r.Private&&(a=r.Private[1],r.Private=e.CFF.readDict(i,a,a+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(i,a+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=o[r[l]-426+35])},e.CFF.readSubrs=function(i,r,o){var a=e._bin,l=[];r=e.CFF.readIndex(i,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var f=0;f<l.length-1;f++)o.Subrs.push(a.readBytes(i,r+l[f],l[f+1]-l[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,r){for(var o=0;o<i.charset.length;o++)if(i.charset[o]==r)return o;return-1},e.CFF.glyphBySE=function(i,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[r])},e.CFF.readEncoding=function(i,r,o){e._bin;var a=[".notdef"],l=i[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=i[r];r++;for(var u=0;u<c;u++)a.push(i[r+u]);return a},e.CFF.readCharset=function(i,r,o){var a=e._bin,l=[".notdef"],c=i[r];if(r++,c==0)for(var u=0;u<o;u++){var f=a.readUshort(i,r);r+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<o;){f=a.readUshort(i,r),r+=2;var d=0;for(c==1?(d=i[r],r++):(d=a.readUshort(i,r),r+=2),u=0;u<=d;u++)l.push(f),f++}}return l},e.CFF.readIndex=function(i,r,o){var a=e._bin,l=a.readUshort(i,r)+1,c=i[r+=2];if(r++,c==1)for(var u=0;u<l;u++)o.push(i[r+u]);else if(c==2)for(u=0;u<l;u++)o.push(a.readUshort(i,r+2*u));else if(c==3)for(u=0;u<l;u++)o.push(16777215&a.readUint(i,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(i,r,o){var a=e._bin,l=i[r],c=i[r+1];i[r+2],i[r+3],i[r+4];var u=1,f=null,d=null;l<=20&&(f=l,u=1),l==12&&(f=100*l+c,u=2),21<=l&&l<=27&&(f=l,u=1),l==28&&(d=a.readShort(i,r+1),u=3),29<=l&&l<=31&&(f=l,u=1),32<=l&&l<=246&&(d=l-139,u=1),247<=l&&l<=250&&(d=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(d=256*-(l-251)-c-108,u=2),l==255&&(d=a.readInt(i,r+1)/65535,u=5),o.val=d??"o"+f,o.size=u},e.CFF.readCharString=function(i,r,o){for(var a=r+o,l=e._bin,c=[];r<a;){var u=i[r],f=i[r+1];i[r+2],i[r+3],i[r+4];var d=1,h=null,b=null;u<=20&&(h=u,d=1),u==12&&(h=100*u+f,d=2),u!=19&&u!=20||(h=u,d=2),21<=u&&u<=27&&(h=u,d=1),u==28&&(b=l.readShort(i,r+1),d=3),29<=u&&u<=31&&(h=u,d=1),32<=u&&u<=246&&(b=u-139,d=1),247<=u&&u<=250&&(b=256*(u-247)+f+108,d=2),251<=u&&u<=254&&(b=256*-(u-251)-f-108,d=2),u==255&&(b=l.readInt(i,r+1)/65535,d=5),c.push(b??"o"+h),r+=d}return c},e.CFF.readDict=function(i,r,o){for(var a=e._bin,l={},c=[];r<o;){var u=i[r],f=i[r+1];i[r+2],i[r+3],i[r+4];var d=1,h=null,b=null;if(u==28&&(b=a.readShort(i,r+1),d=3),u==29&&(b=a.readInt(i,r+1),d=5),32<=u&&u<=246&&(b=u-139,d=1),247<=u&&u<=250&&(b=256*(u-247)+f+108,d=2),251<=u&&u<=254&&(b=256*-(u-251)-f-108,d=2),u==255)throw b=a.readInt(i,r+1)/65535,d=5,"unknown number";if(u==30){var p=[];for(d=1;;){var m=i[r+d];d++;var g=m>>4,_=15&m;if(g!=15&&p.push(g),_!=15&&p.push(_),_==15)break}for(var x="",v=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],w=0;w<p.length;w++)x+=v[p[w]];b=parseFloat(x)}u<=21&&(h=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],d=1,u==12&&(h=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],d=2)),h!=null?(l[h]=c.length==1?c[0]:c,c=[]):c.push(b),r+=d}return l},e.cmap={},e.cmap.parse=function(i,r,o){i=new Uint8Array(i.buffer,r,o),r=0;var a=e._bin,l={};a.readUshort(i,r),r+=2;var c=a.readUshort(i,r);r+=2;var u=[];l.tables=[];for(var f=0;f<c;f++){var d=a.readUshort(i,r);r+=2;var h=a.readUshort(i,r);r+=2;var b=a.readUint(i,r);r+=4;var p="p"+d+"e"+h,m=u.indexOf(b);if(m==-1){var g;m=l.tables.length,u.push(b);var _=a.readUshort(i,b);_==0?g=e.cmap.parse0(i,b):_==4?g=e.cmap.parse4(i,b):_==6?g=e.cmap.parse6(i,b):_==12?g=e.cmap.parse12(i,b):console.debug("unknown format: "+_,d,h,b),l.tables.push(g)}if(l[p]!=null)throw"multiple tables for one platform+encoding";l[p]=m}return l},e.cmap.parse0=function(i,r){var o=e._bin,a={};a.format=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2,a.map=[];for(var c=0;c<l-6;c++)a.map.push(i[r+c]);return a},e.cmap.parse4=function(i,r){var o=e._bin,a=r,l={};l.format=o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2;var u=o.readUshort(i,r);r+=2;var f=u/2;l.searchRange=o.readUshort(i,r),r+=2,l.entrySelector=o.readUshort(i,r),r+=2,l.rangeShift=o.readUshort(i,r),r+=2,l.endCount=o.readUshorts(i,r,f),r+=2*f,r+=2,l.startCount=o.readUshorts(i,r,f),r+=2*f,l.idDelta=[];for(var d=0;d<f;d++)l.idDelta.push(o.readShort(i,r)),r+=2;for(l.idRangeOffset=o.readUshorts(i,r,f),r+=2*f,l.glyphIdArray=[];r<a+c;)l.glyphIdArray.push(o.readUshort(i,r)),r+=2;return l},e.cmap.parse6=function(i,r){var o=e._bin,a={};a.format=o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,a.firstCode=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);r+=2,a.glyphIdArray=[];for(var c=0;c<l;c++)a.glyphIdArray.push(o.readUshort(i,r)),r+=2;return a},e.cmap.parse12=function(i,r){var o=e._bin,a={};a.format=o.readUshort(i,r),r+=2,r+=2,o.readUint(i,r),r+=4,o.readUint(i,r),r+=4;var l=o.readUint(i,r);r+=4,a.groups=[];for(var c=0;c<l;c++){var u=r+12*c,f=o.readUint(i,u+0),d=o.readUint(i,u+4),h=o.readUint(i,u+8);a.groups.push([f,d,h])}return a},e.glyf={},e.glyf.parse=function(i,r,o,a){for(var l=[],c=0;c<a.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(i,r){var o=e._bin,a=i._data,l=e._tabOffset(a,"glyf",i._offset)+i.loca[r];if(i.loca[r]==i.loca[r+1])return null;var c={};if(c.noc=o.readShort(a,l),l+=2,c.xMin=o.readShort(a,l),l+=2,c.yMin=o.readShort(a,l),l+=2,c.xMax=o.readShort(a,l),l+=2,c.yMax=o.readShort(a,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(o.readUshort(a,l)),l+=2;var f=o.readUshort(a,l);if(l+=2,a.length-l<f)return null;c.instructions=o.readBytes(a,l,f),l+=f;var d=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<d;u++){var h=a[l];if(l++,c.flags.push(h),(8&h)!=0){var b=a[l];l++;for(var p=0;p<b;p++)c.flags.push(h),u++}}for(c.xs=[],u=0;u<d;u++){var m=(2&c.flags[u])!=0,g=(16&c.flags[u])!=0;m?(c.xs.push(g?a[l]:-a[l]),l++):g?c.xs.push(0):(c.xs.push(o.readShort(a,l)),l+=2)}for(c.ys=[],u=0;u<d;u++)m=(4&c.flags[u])!=0,g=(32&c.flags[u])!=0,m?(c.ys.push(g?a[l]:-a[l]),l++):g?c.ys.push(0):(c.ys.push(o.readShort(a,l)),l+=2);var _=0,x=0;for(u=0;u<d;u++)_+=c.xs[u],x+=c.ys[u],c.xs[u]=_,c.ys[u]=x}else{var v;c.parts=[];do{v=o.readUshort(a,l),l+=2;var w={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(w),w.glyphIndex=o.readUshort(a,l),l+=2,1&v){var M=o.readShort(a,l);l+=2;var P=o.readShort(a,l);l+=2}else M=o.readInt8(a,l),l++,P=o.readInt8(a,l),l++;2&v?(w.m.tx=M,w.m.ty=P):(w.p1=M,w.p2=P),8&v?(w.m.a=w.m.d=o.readF2dot14(a,l),l+=2):64&v?(w.m.a=o.readF2dot14(a,l),l+=2,w.m.d=o.readF2dot14(a,l),l+=2):128&v&&(w.m.a=o.readF2dot14(a,l),l+=2,w.m.b=o.readF2dot14(a,l),l+=2,w.m.c=o.readF2dot14(a,l),l+=2,w.m.d=o.readF2dot14(a,l),l+=2)}while(32&v);if(256&v){var y=o.readUshort(a,l);for(l+=2,c.instr=[],u=0;u<y;u++)c.instr.push(a[l]),l++}}return c},e.GPOS={},e.GPOS.parse=function(i,r,o,a){return e._lctf.parse(i,r,o,a,e.GPOS.subt)},e.GPOS.subt=function(i,r,o,a){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(i,o),o+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var f=l.readUshort(i,o);o+=2,u.coverage=e._lctf.readCoverage(i,f+c)}if(r==1&&u.fmt==1){var d=l.readUshort(i,o);o+=2;var h=e._lctf.numOfOnes(d);d!=0&&(u.pos=e.GPOS.readValueRecord(i,o,d))}else if(r==2&&u.fmt>=1&&u.fmt<=2){d=l.readUshort(i,o),o+=2;var b=l.readUshort(i,o);o+=2,h=e._lctf.numOfOnes(d);var p=e._lctf.numOfOnes(b);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(i,o);o+=2;for(var g=0;g<m;g++){var _=c+l.readUshort(i,o);o+=2;var x=l.readUshort(i,_);_+=2;for(var v=[],w=0;w<x;w++){var M=l.readUshort(i,_);_+=2,d!=0&&(U=e.GPOS.readValueRecord(i,_,d),_+=2*h),b!=0&&(C=e.GPOS.readValueRecord(i,_,b),_+=2*p),v.push({gid2:M,val1:U,val2:C})}u.pairsets.push(v)}}if(u.fmt==2){var P=l.readUshort(i,o);o+=2;var y=l.readUshort(i,o);o+=2;var A=l.readUshort(i,o);o+=2;var R=l.readUshort(i,o);for(o+=2,u.classDef1=e._lctf.readClassDef(i,c+P),u.classDef2=e._lctf.readClassDef(i,c+y),u.matrix=[],g=0;g<A;g++){var N=[];for(w=0;w<R;w++){var U=null,C=null;d!=0&&(U=e.GPOS.readValueRecord(i,o,d),o+=2*h),b!=0&&(C=e.GPOS.readValueRecord(i,o,b),o+=2*p),N.push({val1:U,val2:C})}u.matrix.push(N)}}}else{if(r==9&&u.fmt==1){var I=l.readUshort(i,o);o+=2;var D=l.readUint(i,o);if(o+=4,a.ltype==9)a.ltype=I;else if(a.ltype!=I)throw"invalid extension substitution";return e.GPOS.subt(i,a.ltype,c+D)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(i,r,o){var a=e._bin,l=[];return l.push(1&o?a.readShort(i,r):0),r+=1&o?2:0,l.push(2&o?a.readShort(i,r):0),r+=2&o?2:0,l.push(4&o?a.readShort(i,r):0),r+=4&o?2:0,l.push(8&o?a.readShort(i,r):0),r+=8&o?2:0,l},e.GSUB={},e.GSUB.parse=function(i,r,o,a){return e._lctf.parse(i,r,o,a,e.GSUB.subt)},e.GSUB.subt=function(i,r,o,a){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(i,o),o+=2,r!=1&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var f=l.readUshort(i,o);o+=2,u.coverage=e._lctf.readCoverage(i,c+f)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(i,o),o+=2;else if(u.fmt==2){var d=l.readUshort(i,o);o+=2,u.newg=l.readUshorts(i,o,d),o+=2*u.newg.length}}else if(r==4){u.vals=[],d=l.readUshort(i,o),o+=2;for(var h=0;h<d;h++){var b=l.readUshort(i,o);o+=2,u.vals.push(e.GSUB.readLigatureSet(i,c+b))}}else if(r==5&&u.fmt==2){if(u.fmt==2){var p=l.readUshort(i,o);o+=2,u.cDef=e._lctf.readClassDef(i,c+p),u.scset=[];var m=l.readUshort(i,o);for(o+=2,h=0;h<m;h++){var g=l.readUshort(i,o);o+=2,u.scset.push(g==0?null:e.GSUB.readSubClassSet(i,c+g))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(h=0;h<3;h++){d=l.readUshort(i,o),o+=2;for(var _=[],x=0;x<d;x++)_.push(e._lctf.readCoverage(i,c+l.readUshort(i,o+2*x)));o+=2*d,h==0&&(u.backCvg=_),h==1&&(u.inptCvg=_),h==2&&(u.ahedCvg=_)}d=l.readUshort(i,o),o+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(i,o,d)}}else{if(r==7&&u.fmt==1){var v=l.readUshort(i,o);o+=2;var w=l.readUint(i,o);if(o+=4,a.ltype==9)a.ltype=v;else if(a.ltype!=v)throw"invalid extension substitution";return e.GSUB.subt(i,a.ltype,c+w)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(i,r){var o=e._bin.readUshort,a=r,l=[],c=o(i,r);r+=2;for(var u=0;u<c;u++){var f=o(i,r);r+=2,l.push(e.GSUB.readSubClassRule(i,a+f))}return l},e.GSUB.readSubClassRule=function(i,r){var o=e._bin.readUshort,a={},l=o(i,r),c=o(i,r+=2);r+=2,a.input=[];for(var u=0;u<l-1;u++)a.input.push(o(i,r)),r+=2;return a.substLookupRecords=e.GSUB.readSubstLookupRecords(i,r,c),a},e.GSUB.readSubstLookupRecords=function(i,r,o){for(var a=e._bin.readUshort,l=[],c=0;c<o;c++)l.push(a(i,r),a(i,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(i,r){var o=e._bin,a=r,l=[],c=o.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=o.readUshort(i,r);r+=2,l.push(e.GSUB.readChainSubClassRule(i,a+f))}return l},e.GSUB.readChainSubClassRule=function(i,r){for(var o=e._bin,a={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=o.readUshort(i,r);r+=2,c==1&&u--,a[l[c]]=o.readUshorts(i,r,u),r+=2*a[l[c]].length}return u=o.readUshort(i,r),r+=2,a.subst=o.readUshorts(i,r,2*u),r+=2*a.subst.length,a},e.GSUB.readLigatureSet=function(i,r){var o=e._bin,a=r,l=[],c=o.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=o.readUshort(i,r);r+=2,l.push(e.GSUB.readLigature(i,a+f))}return l},e.GSUB.readLigature=function(i,r){var o=e._bin,a={chain:[]};a.nglyph=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);r+=2;for(var c=0;c<l-1;c++)a.chain.push(o.readUshort(i,r)),r+=2;return a},e.head={},e.head.parse=function(i,r,o){var a=e._bin,l={};return a.readFixed(i,r),r+=4,l.fontRevision=a.readFixed(i,r),r+=4,a.readUint(i,r),r+=4,a.readUint(i,r),r+=4,l.flags=a.readUshort(i,r),r+=2,l.unitsPerEm=a.readUshort(i,r),r+=2,l.created=a.readUint64(i,r),r+=8,l.modified=a.readUint64(i,r),r+=8,l.xMin=a.readShort(i,r),r+=2,l.yMin=a.readShort(i,r),r+=2,l.xMax=a.readShort(i,r),r+=2,l.yMax=a.readShort(i,r),r+=2,l.macStyle=a.readUshort(i,r),r+=2,l.lowestRecPPEM=a.readUshort(i,r),r+=2,l.fontDirectionHint=a.readShort(i,r),r+=2,l.indexToLocFormat=a.readShort(i,r),r+=2,l.glyphDataFormat=a.readShort(i,r),r+=2,l},e.hhea={},e.hhea.parse=function(i,r,o){var a=e._bin,l={};return a.readFixed(i,r),r+=4,l.ascender=a.readShort(i,r),r+=2,l.descender=a.readShort(i,r),r+=2,l.lineGap=a.readShort(i,r),r+=2,l.advanceWidthMax=a.readUshort(i,r),r+=2,l.minLeftSideBearing=a.readShort(i,r),r+=2,l.minRightSideBearing=a.readShort(i,r),r+=2,l.xMaxExtent=a.readShort(i,r),r+=2,l.caretSlopeRise=a.readShort(i,r),r+=2,l.caretSlopeRun=a.readShort(i,r),r+=2,l.caretOffset=a.readShort(i,r),r+=2,r+=8,l.metricDataFormat=a.readShort(i,r),r+=2,l.numberOfHMetrics=a.readUshort(i,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(i,r,o,a){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,d=0;d<a.maxp.numGlyphs;d++)d<a.hhea.numberOfHMetrics&&(u=l.readUshort(i,r),r+=2,f=l.readShort(i,r),r+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(i,r,o,a){var l=e._bin,c=l.readUshort(i,r);if(r+=2,c==1)return e.kern.parseV1(i,r-2,o,a);var u=l.readUshort(i,r);r+=2;for(var f={glyph1:[],rval:[]},d=0;d<u;d++){r+=2,o=l.readUshort(i,r),r+=2;var h=l.readUshort(i,r);r+=2;var b=h>>>8;if((b&=15)!=0)throw"unknown kern table format: "+b;r=e.kern.readFormat0(i,r,f)}return f},e.kern.parseV1=function(i,r,o,a){var l=e._bin;l.readFixed(i,r),r+=4;var c=l.readUint(i,r);r+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(i,r),r+=4;var d=l.readUshort(i,r);r+=2,l.readUshort(i,r),r+=2;var h=d>>>8;if((h&=15)!=0)throw"unknown kern table format: "+h;r=e.kern.readFormat0(i,r,u)}return u},e.kern.readFormat0=function(i,r,o){var a=e._bin,l=-1,c=a.readUshort(i,r);r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2;for(var u=0;u<c;u++){var f=a.readUshort(i,r);r+=2;var d=a.readUshort(i,r);r+=2;var h=a.readShort(i,r);r+=2,f!=l&&(o.glyph1.push(f),o.rval.push({glyph2:[],vals:[]}));var b=o.rval[o.rval.length-1];b.glyph2.push(d),b.vals.push(h),l=f}return r},e.loca={},e.loca.parse=function(i,r,o,a){var l=e._bin,c=[],u=a.head.indexToLocFormat,f=a.maxp.numGlyphs+1;if(u==0)for(var d=0;d<f;d++)c.push(l.readUshort(i,r+(d<<1))<<1);if(u==1)for(d=0;d<f;d++)c.push(l.readUint(i,r+(d<<2)));return c},e.maxp={},e.maxp.parse=function(i,r,o){var a=e._bin,l={},c=a.readUint(i,r);return r+=4,l.numGlyphs=a.readUshort(i,r),r+=2,c==65536&&(l.maxPoints=a.readUshort(i,r),r+=2,l.maxContours=a.readUshort(i,r),r+=2,l.maxCompositePoints=a.readUshort(i,r),r+=2,l.maxCompositeContours=a.readUshort(i,r),r+=2,l.maxZones=a.readUshort(i,r),r+=2,l.maxTwilightPoints=a.readUshort(i,r),r+=2,l.maxStorage=a.readUshort(i,r),r+=2,l.maxFunctionDefs=a.readUshort(i,r),r+=2,l.maxInstructionDefs=a.readUshort(i,r),r+=2,l.maxStackElements=a.readUshort(i,r),r+=2,l.maxSizeOfInstructions=a.readUshort(i,r),r+=2,l.maxComponentElements=a.readUshort(i,r),r+=2,l.maxComponentDepth=a.readUshort(i,r),r+=2),l},e.name={},e.name.parse=function(i,r,o){var a=e._bin,l={};a.readUshort(i,r),r+=2;var c=a.readUshort(i,r);r+=2,a.readUshort(i,r);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],d=r+=2,h=0;h<c;h++){var b=a.readUshort(i,r);r+=2;var p=a.readUshort(i,r);r+=2;var m=a.readUshort(i,r);r+=2;var g=a.readUshort(i,r);r+=2;var _=a.readUshort(i,r);r+=2;var x=a.readUshort(i,r);r+=2;var v,w=f[g],M=d+12*c+x;if(b==0)v=a.readUnicode(i,M,_/2);else if(b==3&&p==0)v=a.readUnicode(i,M,_/2);else if(p==0)v=a.readASCII(i,M,_);else if(p==1)v=a.readUnicode(i,M,_/2);else if(p==3)v=a.readUnicode(i,M,_/2);else{if(b!=1)throw"unknown encoding "+p+", platformID: "+b;v=a.readASCII(i,M,_),console.debug("reading unknown MAC encoding "+p+" as ASCII")}var P="p"+b+","+m.toString(16);l[P]==null&&(l[P]={}),l[P][w!==void 0?w:g]=v,l[P]._lang=m}for(var y in l)if(l[y].postScriptName!=null&&l[y]._lang==1033)return l[y];for(var y in l)if(l[y].postScriptName!=null&&l[y]._lang==0)return l[y];for(var y in l)if(l[y].postScriptName!=null&&l[y]._lang==3084)return l[y];for(var y in l)if(l[y].postScriptName!=null)return l[y];for(var y in l){u=y;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(i,r,o){var a=e._bin.readUshort(i,r);r+=2;var l={};if(a==0)e["OS/2"].version0(i,r,l);else if(a==1)e["OS/2"].version1(i,r,l);else if(a==2||a==3||a==4)e["OS/2"].version2(i,r,l);else{if(a!=5)throw"unknown OS/2 table version: "+a;e["OS/2"].version5(i,r,l)}return l},e["OS/2"].version0=function(i,r,o){var a=e._bin;return o.xAvgCharWidth=a.readShort(i,r),r+=2,o.usWeightClass=a.readUshort(i,r),r+=2,o.usWidthClass=a.readUshort(i,r),r+=2,o.fsType=a.readUshort(i,r),r+=2,o.ySubscriptXSize=a.readShort(i,r),r+=2,o.ySubscriptYSize=a.readShort(i,r),r+=2,o.ySubscriptXOffset=a.readShort(i,r),r+=2,o.ySubscriptYOffset=a.readShort(i,r),r+=2,o.ySuperscriptXSize=a.readShort(i,r),r+=2,o.ySuperscriptYSize=a.readShort(i,r),r+=2,o.ySuperscriptXOffset=a.readShort(i,r),r+=2,o.ySuperscriptYOffset=a.readShort(i,r),r+=2,o.yStrikeoutSize=a.readShort(i,r),r+=2,o.yStrikeoutPosition=a.readShort(i,r),r+=2,o.sFamilyClass=a.readShort(i,r),r+=2,o.panose=a.readBytes(i,r,10),r+=10,o.ulUnicodeRange1=a.readUint(i,r),r+=4,o.ulUnicodeRange2=a.readUint(i,r),r+=4,o.ulUnicodeRange3=a.readUint(i,r),r+=4,o.ulUnicodeRange4=a.readUint(i,r),r+=4,o.achVendID=[a.readInt8(i,r),a.readInt8(i,r+1),a.readInt8(i,r+2),a.readInt8(i,r+3)],r+=4,o.fsSelection=a.readUshort(i,r),r+=2,o.usFirstCharIndex=a.readUshort(i,r),r+=2,o.usLastCharIndex=a.readUshort(i,r),r+=2,o.sTypoAscender=a.readShort(i,r),r+=2,o.sTypoDescender=a.readShort(i,r),r+=2,o.sTypoLineGap=a.readShort(i,r),r+=2,o.usWinAscent=a.readUshort(i,r),r+=2,o.usWinDescent=a.readUshort(i,r),r+=2},e["OS/2"].version1=function(i,r,o){var a=e._bin;return r=e["OS/2"].version0(i,r,o),o.ulCodePageRange1=a.readUint(i,r),r+=4,o.ulCodePageRange2=a.readUint(i,r),r+=4},e["OS/2"].version2=function(i,r,o){var a=e._bin;return r=e["OS/2"].version1(i,r,o),o.sxHeight=a.readShort(i,r),r+=2,o.sCapHeight=a.readShort(i,r),r+=2,o.usDefault=a.readUshort(i,r),r+=2,o.usBreak=a.readUshort(i,r),r+=2,o.usMaxContext=a.readUshort(i,r),r+=2},e["OS/2"].version5=function(i,r,o){var a=e._bin;return r=e["OS/2"].version2(i,r,o),o.usLowerOpticalPointSize=a.readUshort(i,r),r+=2,o.usUpperOpticalPointSize=a.readUshort(i,r),r+=2},e.post={},e.post.parse=function(i,r,o){var a=e._bin,l={};return l.version=a.readFixed(i,r),r+=4,l.italicAngle=a.readFixed(i,r),r+=4,l.underlinePosition=a.readShort(i,r),r+=2,l.underlineThickness=a.readShort(i,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,r){var o=i.cmap,a=-1;if(o.p0e4!=null?a=o.p0e4:o.p3e1!=null?a=o.p3e1:o.p1e0!=null?a=o.p1e0:o.p0e3!=null&&(a=o.p0e3),a==-1)throw"no familiar platform and encoding!";var l=o.tables[a];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var f=l.groups[u];if(f[0]<=r&&r<=f[1])return f[2]+(r-f[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(i,r){var o={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[r]){var a=i.SVG.entries[r];return a==null?o:(typeof a=="string"&&(a=e.SVG.toPath(a),i.SVG.entries[r]=a),a)}if(i.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},c=i.CFF,u=i.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=r;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(i.CFF.CharStrings[r],l,c,u,o)}else i.glyf&&e.U._drawGlyf(r,i,o);return o},e.U._drawGlyf=function(i,r,o){var a=r.glyf[i];a==null&&(a=r.glyf[i]=e.glyf._parseGlyf(r,i)),a!=null&&(a.noc>-1?e.U._simpleGlyph(a,o):e.U._compoGlyph(a,r,o))},e.U._simpleGlyph=function(i,r){for(var o=0;o<i.noc;o++){for(var a=o==0?0:i.endPts[o-1]+1,l=i.endPts[o],c=a;c<=l;c++){var u=c==a?l:c-1,f=c==l?a:c+1,d=1&i.flags[c],h=1&i.flags[u],b=1&i.flags[f],p=i.xs[c],m=i.ys[c];if(c==a)if(d){if(!h){e.U.P.moveTo(r,p,m);continue}e.U.P.moveTo(r,i.xs[u],i.ys[u])}else h?e.U.P.moveTo(r,i.xs[u],i.ys[u]):e.U.P.moveTo(r,(i.xs[u]+p)/2,(i.ys[u]+m)/2);d?h&&e.U.P.lineTo(r,p,m):b?e.U.P.qcurveTo(r,p,m,i.xs[f],i.ys[f]):e.U.P.qcurveTo(r,p,m,(p+i.xs[f])/2,(m+i.ys[f])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(i,r,o){for(var a=0;a<i.parts.length;a++){var l={cmds:[],crds:[]},c=i.parts[a];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,f=0;f<l.crds.length;f+=2){var d=l.crds[f],h=l.crds[f+1];o.crds.push(d*u.a+h*u.b+u.tx),o.crds.push(d*u.c+h*u.d+u.ty)}for(f=0;f<l.cmds.length;f++)o.cmds.push(l.cmds[f])}},e.U._getGlyphClass=function(i,r){var o=e._lctf.getInterval(r,i);return o==-1?0:r[o+2]},e.U.getPairAdjustment=function(i,r,o){var a=0,l=!1;if(i.GPOS)for(var c=i.GPOS,u=c.lookupList,f=c.featureList,d=[],h=0;h<f.length;h++){var b=f[h];if(b.tag=="kern"){l=!0;for(var p=0;p<b.tab.length;p++)if(!d[b.tab[p]]){d[b.tab[p]]=!0;for(var m=u[b.tab[p]],g=0;g<m.tabs.length;g++)if(m.tabs[g]!=null){var _,x=m.tabs[g];if((!x.coverage||(_=e._lctf.coverageIndex(x.coverage,r))!=-1)&&m.ltype!=1){if(m.ltype==2){var v;if(x.fmt==1){var w=x.pairsets[_];for(h=0;h<w.length;h++)w[h].gid2==o&&(v=w[h])}else if(x.fmt==2){var M=e.U._getGlyphClass(r,x.classDef1),P=e.U._getGlyphClass(o,x.classDef2);v=x.matrix[M][P]}v&&v.val1&&v.val1[2]&&(a+=v.val1[2]),v&&v.val2&&v.val2[0]&&(a+=v.val2[0])}}}}}}if(i.kern&&!l){var y=i.kern.glyph1.indexOf(r);if(y!=-1){var A=i.kern.rval[y].glyph2.indexOf(o);A!=-1&&(a+=i.kern.rval[y].vals[A])}}return a},e.U._applySubs=function(i,r,o,a){for(var l=i.length-r-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var u,f=o.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,i[r]))!=-1){if(o.ltype==1)i[r],f.fmt==1?i[r]=i[r]+f.delta:i[r]=f.newg[u];else if(o.ltype==4)for(var d=f.vals[u],h=0;h<d.length;h++){var b=d[h],p=b.chain.length;if(!(p>l)){for(var m=!0,g=0,_=0;_<p;_++){for(;i[r+g+(1+_)]==-1;)g++;b.chain[_]!=i[r+g+(1+_)]&&(m=!1)}if(m){for(i[r]=b.nglyph,_=0;_<p+g;_++)i[r+_+1]=-1;break}}}else if(o.ltype==5&&f.fmt==2)for(var x=e._lctf.getInterval(f.cDef,i[r]),v=f.cDef[x+2],w=f.scset[v],M=0;M<w.length;M++){var P=w[M],y=P.input;if(!(y.length>l)){for(m=!0,_=0;_<y.length;_++){var A=e._lctf.getInterval(f.cDef,i[r+1+_]);if(x==-1&&f.cDef[A+2]!=y[_]){m=!1;break}}if(m){var R=P.substLookupRecords;for(h=0;h<R.length;h+=2)R[h],R[h+1]}}}else if(o.ltype==6&&f.fmt==3){if(!e.U._glsCovered(i,f.backCvg,r-f.backCvg.length)||!e.U._glsCovered(i,f.inptCvg,r)||!e.U._glsCovered(i,f.ahedCvg,r+f.inptCvg.length))continue;var N=f.lookupRec;for(M=0;M<N.length;M+=2){x=N[M];var U=a[N[M+1]];e.U._applySubs(i,r+x,U,a)}}}}},e.U._glsCovered=function(i,r,o){for(var a=0;a<r.length;a++)if(e._lctf.coverageIndex(r[a],i[o+a])==-1)return!1;return!0},e.U.glyphsToPath=function(i,r,o){for(var a={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var f=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,d=e.U.glyphToPath(i,u),h=0;h<d.crds.length;h+=2)a.crds.push(d.crds[h]+l),a.crds.push(d.crds[h+1]);for(o&&a.cmds.push(o),h=0;h<d.cmds.length;h++)a.cmds.push(d.cmds[h]);o&&a.cmds.push("X"),l+=i.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(i,u,f))}}return a},e.U.P={},e.U.P.moveTo=function(i,r,o){i.cmds.push("M"),i.crds.push(r,o)},e.U.P.lineTo=function(i,r,o){i.cmds.push("L"),i.crds.push(r,o)},e.U.P.curveTo=function(i,r,o,a,l,c,u){i.cmds.push("C"),i.crds.push(r,o,a,l,c,u)},e.U.P.qcurveTo=function(i,r,o,a,l){i.cmds.push("Q"),i.crds.push(r,o,a,l)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,r,o,a,l){for(var c=r.stack,u=r.nStems,f=r.haveWidth,d=r.width,h=r.open,b=0,p=r.x,m=r.y,g=0,_=0,x=0,v=0,w=0,M=0,P=0,y=0,A=0,R=0,N={val:0,size:0};b<i.length;){e.CFF.getCharString(i,b,N);var U=N.val;if(b+=N.size,U=="o1"||U=="o18")c.length%2!=0&&!f&&(d=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(U=="o3"||U=="o23")c.length%2!=0&&!f&&(d=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(U=="o4")c.length>1&&!f&&(d=c.shift()+a.nominalWidthX,f=!0),h&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,p,m),h=!0;else if(U=="o5")for(;c.length>0;)p+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,p,m);else if(U=="o6"||U=="o7")for(var C=c.length,I=U=="o6",D=0;D<C;D++){var B=c.shift();I?p+=B:m+=B,I=!I,e.U.P.lineTo(l,p,m)}else if(U=="o8"||U=="o24"){C=c.length;for(var ee=0;ee+6<=C;)g=p+c.shift(),_=m+c.shift(),x=g+c.shift(),v=_+c.shift(),p=x+c.shift(),m=v+c.shift(),e.U.P.curveTo(l,g,_,x,v,p,m),ee+=6;U=="o24"&&(p+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,p,m))}else{if(U=="o11")break;if(U=="o1234"||U=="o1235"||U=="o1236"||U=="o1237")U=="o1234"&&(_=m,x=(g=p+c.shift())+c.shift(),R=v=_+c.shift(),M=v,y=m,p=(P=(w=(A=x+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,g,_,x,v,A,R),e.U.P.curveTo(l,w,M,P,y,p,m)),U=="o1235"&&(g=p+c.shift(),_=m+c.shift(),x=g+c.shift(),v=_+c.shift(),A=x+c.shift(),R=v+c.shift(),w=A+c.shift(),M=R+c.shift(),P=w+c.shift(),y=M+c.shift(),p=P+c.shift(),m=y+c.shift(),c.shift(),e.U.P.curveTo(l,g,_,x,v,A,R),e.U.P.curveTo(l,w,M,P,y,p,m)),U=="o1236"&&(g=p+c.shift(),_=m+c.shift(),x=g+c.shift(),R=v=_+c.shift(),M=v,P=(w=(A=x+c.shift())+c.shift())+c.shift(),y=M+c.shift(),p=P+c.shift(),e.U.P.curveTo(l,g,_,x,v,A,R),e.U.P.curveTo(l,w,M,P,y,p,m)),U=="o1237"&&(g=p+c.shift(),_=m+c.shift(),x=g+c.shift(),v=_+c.shift(),A=x+c.shift(),R=v+c.shift(),w=A+c.shift(),M=R+c.shift(),P=w+c.shift(),y=M+c.shift(),Math.abs(P-p)>Math.abs(y-m)?p=P+c.shift():m=y+c.shift(),e.U.P.curveTo(l,g,_,x,v,A,R),e.U.P.curveTo(l,w,M,P,y,p,m));else if(U=="o14"){if(c.length>0&&!f&&(d=c.shift()+o.nominalWidthX,f=!0),c.length==4){var J=c.shift(),W=c.shift(),H=c.shift(),S=c.shift(),L=e.CFF.glyphBySE(o,H),Q=e.CFF.glyphBySE(o,S);e.U._drawCFF(o.CharStrings[L],r,o,a,l),r.x=J,r.y=W,e.U._drawCFF(o.CharStrings[Q],r,o,a,l)}h&&(e.U.P.closePath(l),h=!1)}else if(U=="o19"||U=="o20")c.length%2!=0&&!f&&(d=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,b+=u+7>>3;else if(U=="o21")c.length>2&&!f&&(d=c.shift()+a.nominalWidthX,f=!0),m+=c.pop(),p+=c.pop(),h&&e.U.P.closePath(l),e.U.P.moveTo(l,p,m),h=!0;else if(U=="o22")c.length>1&&!f&&(d=c.shift()+a.nominalWidthX,f=!0),p+=c.pop(),h&&e.U.P.closePath(l),e.U.P.moveTo(l,p,m),h=!0;else if(U=="o25"){for(;c.length>6;)p+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,p,m);g=p+c.shift(),_=m+c.shift(),x=g+c.shift(),v=_+c.shift(),p=x+c.shift(),m=v+c.shift(),e.U.P.curveTo(l,g,_,x,v,p,m)}else if(U=="o26")for(c.length%2&&(p+=c.shift());c.length>0;)g=p,_=m+c.shift(),p=x=g+c.shift(),m=(v=_+c.shift())+c.shift(),e.U.P.curveTo(l,g,_,x,v,p,m);else if(U=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)_=m,x=(g=p+c.shift())+c.shift(),v=_+c.shift(),p=x+c.shift(),m=v,e.U.P.curveTo(l,g,_,x,v,p,m);else if(U=="o10"||U=="o29"){var X=U=="o10"?a:o;if(c.length==0)console.debug("error: empty stack");else{var q=c.pop(),E=X.Subrs[q+X.Bias];r.x=p,r.y=m,r.nStems=u,r.haveWidth=f,r.width=d,r.open=h,e.U._drawCFF(E,r,o,a,l),p=r.x,m=r.y,u=r.nStems,f=r.haveWidth,d=r.width,h=r.open}}else if(U=="o30"||U=="o31"){var Y=c.length,te=(ee=0,U=="o31");for(ee+=Y-(C=-3&Y);ee<C;)te?(_=m,x=(g=p+c.shift())+c.shift(),m=(v=_+c.shift())+c.shift(),C-ee==5?(p=x+c.shift(),ee++):p=x,te=!1):(g=p,_=m+c.shift(),x=g+c.shift(),v=_+c.shift(),p=x+c.shift(),C-ee==5?(m=v+c.shift(),ee++):m=v,te=!0),e.U.P.curveTo(l,g,_,x,v,p,m),ee+=4}else{if((U+"").charAt(0)=="o")throw console.debug("Unknown operation: "+U,i),U;c.push(U)}}}r.x=p,r.y=m,r.nStems=u,r.haveWidth=f,r.width=d,r.open=h};var t=e,n={Typr:t};return s.Typr=t,s.default=n,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function _1(){return function(s){var e=Uint8Array,t=Uint16Array,n=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(U,C){for(var I=new t(31),D=0;D<31;++D)I[D]=C+=1<<U[D-1];var B=new n(I[30]);for(D=1;D<30;++D)for(var ee=I[D];ee<I[D+1];++ee)B[ee]=ee-I[D]<<5|D;return[I,B]},l=a(i,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var f=a(r,0)[0],d=new t(32768),h=0;h<32768;++h){var b=(43690&h)>>>1|(21845&h)<<1;b=(61680&(b=(52428&b)>>>2|(13107&b)<<2))>>>4|(3855&b)<<4,d[h]=((65280&b)>>>8|(255&b)<<8)>>>1}var p=function(U,C,I){for(var D=U.length,B=0,ee=new t(C);B<D;++B)++ee[U[B]-1];var J,W=new t(C);for(B=0;B<C;++B)W[B]=W[B-1]+ee[B-1]<<1;if(I){J=new t(1<<C);var H=15-C;for(B=0;B<D;++B)if(U[B])for(var S=B<<4|U[B],L=C-U[B],Q=W[U[B]-1]++<<L,X=Q|(1<<L)-1;Q<=X;++Q)J[d[Q]>>>H]=S}else for(J=new t(D),B=0;B<D;++B)U[B]&&(J[B]=d[W[U[B]-1]++]>>>15-U[B]);return J},m=new e(288);for(h=0;h<144;++h)m[h]=8;for(h=144;h<256;++h)m[h]=9;for(h=256;h<280;++h)m[h]=7;for(h=280;h<288;++h)m[h]=8;var g=new e(32);for(h=0;h<32;++h)g[h]=5;var _=p(m,9,1),x=p(g,5,1),v=function(U){for(var C=U[0],I=1;I<U.length;++I)U[I]>C&&(C=U[I]);return C},w=function(U,C,I){var D=C/8|0;return(U[D]|U[D+1]<<8)>>(7&C)&I},M=function(U,C){var I=C/8|0;return(U[I]|U[I+1]<<8|U[I+2]<<16)>>(7&C)},P=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],y=function(U,C,I){var D=new Error(C||P[U]);if(D.code=U,Error.captureStackTrace&&Error.captureStackTrace(D,y),!I)throw D;return D},A=function(U,C,I){var D=U.length;if(!D||I&&!I.l&&D<5)return C||new e(0);var B=!C||I,ee=!I||I.i;I||(I={}),C||(C=new e(3*D));var J,W=function(de){var Ne=C.length;if(de>Ne){var ze=new e(Math.max(2*Ne,de));ze.set(C),C=ze}},H=I.f||0,S=I.p||0,L=I.b||0,Q=I.l,X=I.d,q=I.m,E=I.n,Y=8*D;do{if(!Q){I.f=H=w(U,S,1);var te=w(U,S+1,3);if(S+=3,!te){var ae=U[(Ae=((J=S)/8|0)+(7&J&&1)+4)-4]|U[Ae-3]<<8,oe=Ae+ae;if(oe>D){ee&&y(0);break}B&&W(L+ae),C.set(U.subarray(Ae,oe),L),I.b=L+=ae,I.p=S=8*oe;continue}if(te==1)Q=_,X=x,q=9,E=5;else if(te==2){var he=w(U,S,31)+257,G=w(U,S+10,15)+4,fe=he+w(U,S+5,31)+1;S+=14;for(var Pe=new e(fe),Me=new e(19),Ce=0;Ce<G;++Ce)Me[o[Ce]]=w(U,S+3*Ce,7);S+=3*G;var Be=v(Me),ue=(1<<Be)-1,Se=p(Me,Be,1);for(Ce=0;Ce<fe;){var Ae,me=Se[w(U,S,ue)];if(S+=15&me,(Ae=me>>>4)<16)Pe[Ce++]=Ae;else{var O=0,T=0;for(Ae==16?(T=3+w(U,S,3),S+=2,O=Pe[Ce-1]):Ae==17?(T=3+w(U,S,7),S+=3):Ae==18&&(T=11+w(U,S,127),S+=7);T--;)Pe[Ce++]=O}}var Z=Pe.subarray(0,he),ie=Pe.subarray(he);q=v(Z),E=v(ie),Q=p(Z,q,1),X=p(ie,E,1)}else y(1);if(S>Y){ee&&y(0);break}}B&&W(L+131072);for(var le=(1<<q)-1,pe=(1<<E)-1,z=S;;z=S){var k=(O=Q[M(U,S)&le])>>>4;if((S+=15&O)>Y){ee&&y(0);break}if(O||y(2),k<256)C[L++]=k;else{if(k==256){z=S,Q=null;break}var j=k-254;if(k>264){var xe=i[Ce=k-257];j=w(U,S,(1<<xe)-1)+c[Ce],S+=xe}var we=X[M(U,S)&pe],ye=we>>>4;if(we||y(3),S+=15&we,ie=f[ye],ye>3&&(xe=r[ye],ie+=M(U,S)&(1<<xe)-1,S+=xe),S>Y){ee&&y(0);break}B&&W(L+131072);for(var _e=L+j;L<_e;L+=4)C[L]=C[L-ie],C[L+1]=C[L+1-ie],C[L+2]=C[L+2-ie],C[L+3]=C[L+3-ie];L=_e}}I.l=Q,I.p=z,I.b=L,Q&&(H=1,I.m=q,I.d=X,I.n=E)}while(!H);return L==C.length?C:function(de,Ne,ze){(Ne==null||Ne<0)&&(Ne=0),(ze==null||ze>de.length)&&(ze=de.length);var qe=new(de instanceof t?t:de instanceof n?n:e)(ze-Ne);return qe.set(de.subarray(Ne,ze)),qe}(C,0,L)},R=new e(0),N=typeof TextDecoder<"u"&&new TextDecoder;try{N.decode(R,{stream:!0})}catch{}return s.convert_streams=function(U){var C=new DataView(U),I=0;function D(){var he=C.getUint16(I);return I+=2,he}function B(){var he=C.getUint32(I);return I+=4,he}function ee(he){ae.setUint16(oe,he),oe+=2}function J(he){ae.setUint32(oe,he),oe+=4}for(var W={signature:B(),flavor:B(),length:B(),numTables:D(),reserved:D(),totalSfntSize:B(),majorVersion:D(),minorVersion:D(),metaOffset:B(),metaLength:B(),metaOrigLength:B(),privOffset:B(),privLength:B()},H=0;Math.pow(2,H)<=W.numTables;)H++;H--;for(var S=16*Math.pow(2,H),L=16*W.numTables-S,Q=12,X=[],q=0;q<W.numTables;q++)X.push({tag:B(),offset:B(),compLength:B(),origLength:B(),origChecksum:B()}),Q+=16;var E,Y=new Uint8Array(12+16*X.length+X.reduce(function(he,G){return he+G.origLength+4},0)),te=Y.buffer,ae=new DataView(te),oe=0;return J(W.flavor),ee(W.numTables),ee(S),ee(H),ee(L),X.forEach(function(he){J(he.tag),J(he.origChecksum),J(Q),J(he.origLength),he.outOffset=Q,(Q+=he.origLength)%4!=0&&(Q+=4-Q%4)}),X.forEach(function(he){var G,fe=U.slice(he.offset,he.offset+he.compLength);if(he.compLength!=he.origLength){var Pe=new Uint8Array(he.origLength);G=new Uint8Array(fe,2),A(G,Pe)}else Pe=new Uint8Array(fe);Y.set(Pe,he.outOffset);var Me=0;(Q=he.outOffset+he.origLength)%4!=0&&(Me=4-Q%4),Y.set(new Uint8Array(Me).buffer,he.outOffset+he.origLength),E=Q+Me}),te.slice(0,E)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function v1(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},n={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,r=2,o=4,a=8,l=16,c=32;let u;function f(v){if(!u){const w={R:r,L:i,D:o,C:l,U:c,T:a};u=new Map;for(let M in n){let P=0;n[M].split(",").forEach(y=>{let[A,R]=y.split("+");A=parseInt(A,36),R=R?parseInt(R,36):0,u.set(P+=A,w[M]);for(let N=R;N--;)u.set(++P,w[M])})}}return u.get(v)||c}const d=1,h=2,b=3,p=4,m=[null,"isol","init","fina","medi"];function g(v){const w=new Uint8Array(v.length);let M=c,P=d,y=-1;for(let A=0;A<v.length;A++){const R=v.codePointAt(A);let N=f(R)|0,U=d;N&a||(M&(i|o|l)?N&(r|o|l)?(U=b,(P===d||P===b)&&w[y]++):N&(i|c)&&(P===h||P===p)&&w[y]--:M&(r|c)&&(P===h||P===p)&&w[y]--,P=w[A]=U,M=N,y=A,R>65535&&A++)}return w}function _(v,w){const M=[];for(let y=0;y<w.length;y++){const A=w.codePointAt(y);A>65535&&y++,M.push(s.U.codeToGlyph(v,A))}const P=v.GSUB;if(P){const{lookupList:y,featureList:A}=P;let R;const N=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws)$/,U=[];A.forEach(C=>{if(N.test(C.tag))for(let I=0;I<C.tab.length;I++){if(U[C.tab[I]])continue;U[C.tab[I]]=!0;const D=y[C.tab[I]],B=/^(isol|init|fina|medi)$/.test(C.tag);B&&!R&&(R=g(w));for(let ee=0;ee<M.length;ee++)(!R||!B||m[R[ee]]===C.tag)&&s.U._applySubs(M,ee,D,y)}})}return M}function x(v){const w=Object.create(null),M={unitsPerEm:v.head.unitsPerEm,ascender:v.hhea.ascender,descender:v.hhea.descender,forEachGlyph(P,y,A,R){let N=0;const U=1/M.unitsPerEm*y,C=_(v,P);let I=0,D=-1;return C.forEach((B,ee)=>{if(B!==-1){let J=w[B];if(!J){const{cmds:W,crds:H}=s.U.glyphToPath(v,B);let S="",L=0;for(let Y=0,te=W.length;Y<te;Y++){const ae=t[W[Y]];S+=W[Y];for(let oe=1;oe<=ae;oe++)S+=(oe>1?",":"")+H[L++]}let Q,X,q,E;if(H.length){Q=X=1/0,q=E=-1/0;for(let Y=0,te=H.length;Y<te;Y+=2){let ae=H[Y],oe=H[Y+1];ae<Q&&(Q=ae),oe<X&&(X=oe),ae>q&&(q=ae),oe>E&&(E=oe)}}else Q=q=X=E=0;J=w[B]={index:B,advanceWidth:v.hmtx.aWidth[B],xMin:Q,yMin:X,xMax:q,yMax:E,path:S,pathCommandCount:W.length}}D!==-1&&(N+=s.U.getPairAdjustment(v,D,B)*U),R.call(null,J,N,I),J.advanceWidth&&(N+=J.advanceWidth*U),A&&(N+=A*y),D=B}I+=P.codePointAt(I)>65535?2:1}),N}};return M}return function(w){const M=new Uint8Array(w,0,4),P=s._bin.readASCII(M,0,4);if(P==="wOFF")w=e(w);else if(P==="wOF2")throw new Error("woff2 fonts not supported");return x(s.parse(w)[0])}}const b1=wr({name:"Typr Font Parser",dependencies:[g1,_1,v1],init(s,e,t){const n=s(),i=e();return t(n,i)}}),fr={defaultFontURL:"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff",sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},x1=new tt;function lr(){return(self.performance||Date).now()}const au=Object.create(null);function y1(s,e){s=S1({},s);const t=lr();if(s.font=M1(s.font||fr.defaultFontURL),s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||fr.sdfGlyphSize,s.colorRanges!=null){let f={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let h=s.colorRanges[d];typeof h!="number"&&(h=x1.set(h).getHex()),f[d]=h}s.colorRanges=f}Object.freeze(s);const{textureWidth:n,sdfExponent:i}=fr,{sdfGlyphSize:r}=s,o=n/r*4;let a=au[r];if(!a){const f=document.createElement("canvas");f.width=n,f.height=r*256/o,a=au[r]={glyphCount:0,sdfGlyphSize:r,sdfCanvas:f,sdfTexture:new an(f,void 0,void 0,void 0,fn,fn),contextLost:!1,glyphsByFont:new Map},a.sdfTexture.generateMipmaps=!1,w1(a)}const{sdfTexture:l,sdfCanvas:c}=a;let u=a.glyphsByFont.get(s.font);u||a.glyphsByFont.set(s.font,u=new Map),A1(s).then(f=>{const{glyphIds:d,glyphPositions:h,fontSize:b,unitsPerEm:p,timings:m}=f,g=[],_=new Float32Array(d.length*4),x=b/p;let v=0,w=0;const M=lr();d.forEach((N,U)=>{let C=u.get(N);if(!C){const{path:ee,pathBounds:J}=f.glyphData[N],W=Math.max(J[2]-J[0],J[3]-J[1])/r*(fr.sdfMargin*r+.5),H=a.glyphCount++,S=[J[0]-W,J[1]-W,J[2]+W,J[3]+W];u.set(N,C={path:ee,atlasIndex:H,sdfViewBox:S}),g.push(C)}const{sdfViewBox:I}=C,D=h[w++],B=h[w++];_[v++]=D+I[0]*x,_[v++]=B+I[1]*x,_[v++]=D+I[2]*x,_[v++]=B+I[3]*x,d[U]=C.atlasIndex}),m.quads=(m.quads||0)+(lr()-M);const P=lr();m.sdf={};const y=c.height,A=Math.ceil(a.glyphCount/o),R=Math.pow(2,Math.ceil(Math.log2(A*r)));R>y&&(console.info(`Increasing SDF texture size ${y}->${R}`),p1(c,n,R),l.dispose()),ti.all(g.map(N=>af(N,a,s.gpuAccelerateSDF).then(({timing:U})=>{m.sdf[N.atlasIndex]=U}))).then(()=>{g.length&&!a.contextLost&&(of(a),l.needsUpdate=!0),m.sdfTotal=lr()-P,m.total=lr()-t,e(Object.freeze({parameters:s,sdfTexture:l,sdfGlyphSize:r,sdfExponent:i,glyphBounds:_,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,caretHeight:f.caretHeight,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings,get totalBounds(){return console.log("totalBounds deprecated, use blockBounds instead"),f.blockBounds},get totalBlockSize(){console.log("totalBlockSize deprecated, use blockBounds instead");const[N,U,C,I]=f.blockBounds;return[C-N,I-U]}}))})}),ti.all([]).then(()=>{a.contextLost||m1(c)})}function af({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:n,sdfCanvas:i,contextLost:r},o){if(r)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:l}=fr,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(a/n)*n,d=Math.floor(u/(a/n))*n,h=e%4;return d1(n,n,s,t,c,l,i,f,d,h,o)}function w1(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const n=[];s.glyphsByFont.forEach(i=>{i.forEach(r=>{n.push(af(r,s,!0))})}),ti.all(n).then(()=>{of(s),s.sdfTexture.needsUpdate=!0})})}function S1(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let Bs;function M1(s){return Bs||(Bs=typeof document>"u"?{}:document.createElement("a")),Bs.href=s,Bs.href}function of(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:n,height:i}=e,r=s.sdfCanvas.getContext("webgl");let o=t.image.data;(!o||o.length!==n*i*4)&&(o=new Uint8Array(n*i*4),t.image={width:n,height:i,data:o},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,n,i,r.RGBA,r.UNSIGNED_BYTE,o)}}const T1=wr({name:"Typesetter",dependencies:[fr,b1,f1,i1],init(s,e,t,n){const{defaultFontURL:i}=s;return t(e,n(),{defaultFontURL:i})}}),A1=wr({name:"Typesetter",dependencies:[T1,n1],init(s,e){return function(t){const n=new e;return s.typeset(t,n.resolve),n}},getTransferables(s){const e=[s.glyphPositions.buffer,s.glyphIds.buffer];return s.caretPositions&&e.push(s.caretPositions.buffer),s.glyphColors&&e.push(s.glyphColors.buffer),e}}),E1=(()=>{const s={};function e(l){let c=s[l];if(!c){const u=new wo(1,1,l,l),f=u.clone(),d=u.attributes,h=f.attributes,b=new on,p=d.uv.count;for(let m=0;m<p;m++)h.position.array[m*3]*=-1,h.normal.array[m*3+2]*=-1;["position","normal","uv"].forEach(m=>{b.setAttribute(m,new Gt([...d[m].array,...h[m].array],d[m].itemSize))}),b.setIndex([...u.index.array,...f.index.array.map(m=>m+p)]),b.translate(.5,.5,0),c=s[l]=b}return c}const t="aTroikaGlyphBounds",n="aTroikaGlyphIndex",i="aTroikaGlyphColor";class r extends ju{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Fi,this.boundingBox=new ni}computeBoundingSphere(){}computeBoundingBox(){}setSide(c){const u=this.getIndex().count;this.setDrawRange(c===xn?u/2:0,c===br?u:u/2)}set detail(c){if(c!==this._detail){this._detail=c,(typeof c!="number"||c<1)&&(c=1);let u=e(c);["position","normal","uv"].forEach(f=>{this.attributes[f]=u.attributes[f].clone()}),this.setIndex(u.getIndex().clone())}}get detail(){return this._detail}set curveRadius(c){c!==this._curveRadius&&(this._curveRadius=c,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(c,u,f,d,h){o(this,t,c,4),o(this,n,u,1),o(this,i,h,3),this._blockBounds=f,this._chunkedBounds=d,a(this,u.length),this._updateBounds()}_updateBounds(){const c=this._blockBounds;if(c){const{curveRadius:u,boundingBox:f}=this;if(u){const{PI:d,floor:h,min:b,max:p,sin:m,cos:g}=Math,_=d/2,x=d*2,v=Math.abs(u),w=c[0]/v,M=c[2]/v,P=h((w+_)/x)!==h((M+_)/x)?-v:b(m(w)*v,m(M)*v),y=h((w-_)/x)!==h((M-_)/x)?v:p(m(w)*v,m(M)*v),A=h((w+d)/x)!==h((M+d)/x)?v*2:p(v-g(w)*v,v-g(M)*v);f.min.set(P,c[1],u<0?-A:0),f.max.set(y,c[3],u<0?0:A)}else f.min.set(c[0],c[1],0),f.max.set(c[2],c[3],0);f.getBoundingSphere(this.boundingSphere)}}applyClipRect(c){let u=this.getAttribute(n).count,f=this._chunkedBounds;if(f)for(let d=f.length;d--;){u=f[d].end;let h=f[d].rect;if(h[1]<c.w&&h[3]>c.y&&h[0]<c.z&&h[2]>c.x)break}a(this,u)}}r.prototype.setAttribute||(r.prototype.setAttribute=function(l,c){return this.attributes[l]=c,this});function o(l,c,u,f){const d=l.getAttribute(c);u?d&&d.array.length===u.length?(d.array.set(u),d.needsUpdate=!0):(l.setAttribute(c,new vo(u,f)),delete l._maxInstanceCount,l.dispose()):d&&l.deleteAttribute(c)}function a(l,c){l[l.hasOwnProperty("instanceCount")?"instanceCount":"maxInstancedCount"]=c}return r})(),C1=`
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
`,D1=`
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
`,L1=`
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
`,P1=`
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
`;function R1(s){const e=Ao(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ve},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new xt(0,0,0,0)},uTroikaClipRect:{value:new xt(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ve},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new tt},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new hn},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:C1,vertexTransform:D1,fragmentDefs:L1,fragmentColorTransform:P1,customRewriter({vertexShader:t,fragmentShader:n}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(n)&&(n=n.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(sf,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:n}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const I1=(()=>{const s=new Oo({color:16777215,side:br,transparent:!0}),e=8421504,t=new ht,n=new K,i=new K,r=[],o=new K,a="+x+y";function l(g){return Array.isArray(g)?g[0]:g}let c=()=>{const g=new Kt(new wo(1,1),s);return c=()=>g,g},u=()=>{const g=new Kt(new wo(1,1,32,1),s);return u=()=>g,g};const f={type:"syncstart"},d={type:"synccomplete"},h=["font","fontSize","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],b=h.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class p extends Kt{constructor(){const _=new E1;super(_,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.fontSize=.1,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=e,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=a,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(_){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(_):(this._isSyncing=!0,this.dispatchEvent(f),y1({text:this.text,font:this.font,fontSize:this.fontSize||.1,letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF},x=>{this._isSyncing=!1,this._textRenderInfo=x,this.geometry.updateGlyphs(x.glyphBounds,x.glyphAtlasIndices,x.blockBounds,x.chunkedBounds,x.glyphColors);const v=this._queuedSyncs;v&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{v.forEach(w=>w&&w())})),this.dispatchEvent(d),_&&_()})))}onBeforeRender(_,x,v,w,M,P){this.sync(),M.isTroikaTextMaterial&&this._prepareForRender(M),M._hadOwnSide=M.hasOwnProperty("side"),this.geometry.setSide(M._actualSide=M.side),M.side=hi}onAfterRender(_,x,v,w,M,P){M._hadOwnSide?M.side=M._actualSide:delete M.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let _=this._derivedMaterial;const x=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=s.clone());if((!_||_.baseMaterial!==x)&&(_=this._derivedMaterial=R1(x),x.addEventListener("dispose",function v(){x.removeEventListener("dispose",v),_.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let v=_._outlineMtl;return v||(v=_._outlineMtl=Object.create(_,{id:{value:_.id+.1}}),v.isTextOutlineMaterial=!0,v.depthWrite=!1,v.map=null,_.addEventListener("dispose",function w(){_.removeEventListener("dispose",w),v.dispose()})),[v,_]}else return _}set material(_){_&&_.isTroikaTextMaterial?(this._derivedMaterial=_,this._baseMaterial=_.baseMaterial):this._baseMaterial=_}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(_){this.geometry.detail=_}get curveRadius(){return this.geometry.curveRadius}set curveRadius(_){this.geometry.curveRadius=_}get customDepthMaterial(){return l(this.material).getDepthMaterial()}get customDistanceMaterial(){return l(this.material).getDistanceMaterial()}_prepareForRender(_){const x=_.isTextOutlineMaterial,v=_.uniforms,w=this.textRenderInfo;if(w){const{sdfTexture:y,blockBounds:A}=w;v.uTroikaSDFTexture.value=y,v.uTroikaSDFTextureSize.value.set(y.image.width,y.image.height),v.uTroikaSDFGlyphSize.value=w.sdfGlyphSize,v.uTroikaSDFExponent.value=w.sdfExponent,v.uTroikaTotalBounds.value.fromArray(A),v.uTroikaUseGlyphColors.value=!x&&!!w.glyphColors;let R=0,N=0,U=0,C,I,D,B=0,ee=0;if(x){let{outlineWidth:W,outlineOffsetX:H,outlineOffsetY:S,outlineBlur:L,outlineOpacity:Q}=this;R=this._parsePercent(W)||0,N=Math.max(0,this._parsePercent(L)||0),C=Q,B=this._parsePercent(H)||0,ee=this._parsePercent(S)||0}else U=Math.max(0,this._parsePercent(this.strokeWidth)||0),U&&(D=this.strokeColor,v.uTroikaStrokeColor.value.set(D??e),I=this.strokeOpacity,I==null&&(I=1)),C=this.fillOpacity;v.uTroikaDistanceOffset.value=R,v.uTroikaPositionOffset.value.set(B,ee),v.uTroikaBlurRadius.value=N,v.uTroikaStrokeWidth.value=U,v.uTroikaStrokeOpacity.value=I,v.uTroikaFillOpacity.value=C??1,v.uTroikaCurveRadius.value=this.curveRadius||0;let J=this.clipRect;if(J&&Array.isArray(J)&&J.length===4)v.uTroikaClipRect.value.fromArray(J);else{const W=(this.fontSize||.1)*100;v.uTroikaClipRect.value.set(A[0]-W,A[1]-W,A[2]+W,A[3]+W)}this.geometry.applyClipRect(v.uTroikaClipRect.value)}v.uTroikaSDFDebug.value=!!this.debugSDF,_.polygonOffset=!!this.depthOffset,_.polygonOffsetFactor=_.polygonOffsetUnits=this.depthOffset||0;const M=x?this.outlineColor||0:this.color;if(M==null)delete _.color;else{const y=_.hasOwnProperty("color")?_.color:_.color=new tt;(M!==y._input||typeof M=="object")&&y.set(y._input=M)}let P=this.orientation||a;if(P!==_._orientation){let y=v.uTroikaOrient.value;P=P.replace(/[^-+xyz]/g,"");let A=P!==a&&P.match(/^([-+])([xyz])([-+])([xyz])$/);if(A){let[,R,N,U,C]=A;n.set(0,0,0)[N]=R==="-"?1:-1,i.set(0,0,0)[C]=U==="-"?-1:1,t.lookAt(o,n.cross(i),i),y.setFromMatrix4(t)}else y.identity();_._orientation=P}}_parsePercent(_){if(typeof _=="string"){let x=_.match(/^(-?[\d.]+)%$/),v=x?parseFloat(x[1]):NaN;_=(isNaN(v)?0:v/100)*this.fontSize}return _}localPositionToTextCoords(_,x=new Ve){x.copy(_);const v=this.curveRadius;return v&&(x.x=Math.atan2(_.x,Math.abs(v)-Math.abs(_.z))*Math.abs(v)),x}worldPositionToTextCoords(_,x=new Ve){return n.copy(_),this.localPositionToTextCoords(this.worldToLocal(n),x)}raycast(_,x){const{textRenderInfo:v,curveRadius:w}=this;if(v){const M=v.blockBounds,P=w?u():c(),y=P.geometry,{position:A,uv:R}=y.attributes;for(let N=0;N<R.count;N++){let U=M[0]+R.getX(N)*(M[2]-M[0]);const C=M[1]+R.getY(N)*(M[3]-M[1]);let I=0;w&&(I=w-Math.cos(U/w)*w,U=Math.sin(U/w)*w),A.setXYZ(N,U,C,I)}y.boundingSphere=this.geometry.boundingSphere,y.boundingBox=this.geometry.boundingBox,P.matrixWorld=this.matrixWorld,P.material.side=this.material.side,r.length=0,P.raycast(_,r);for(let N=0;N<r.length;N++)r[N].object=this,x.push(r[N])}}copy(_){const x=this.geometry;return super.copy(_),this.geometry=x,b.forEach(v=>{this[v]=_[v]}),this}clone(){return new this.constructor().copy(this)}}h.forEach(g=>{const _="_private_"+g;Object.defineProperty(p.prototype,g,{get(){return this[_]},set(x){x!==this[_]&&(this[_]=x,this._needsSync=!0)}})});let m=!1;return Object.defineProperty(p.prototype,"anchor",{get(){return this._deprecated_anchor},set(g){this._deprecated_anchor=g,m||(console.warn("TextMesh: `anchor` has been deprecated; use `anchorX` and `anchorY` instead."),m=!0),Array.isArray(g)?(this.anchorX=`${(+g[0]||0)*100}%`,this.anchorY=`${(+g[1]||0)*100}%`):this.anchorX=this.anchorY=0}}),p})();function U1(s){let e;const t=s[46].default,n=Wt(t,s,s[57],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&67108864)&&Ht(n,t,i,i[57],e?Xt(t,i[57],r,null):jt(i[57]),null)},i(i){e||(ge(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function O1(s){let e,t,n;function i(o){s[47](o)}let r={mesh:s[15],lookAt:s[14],position:s[1],scale:s[2],rotation:s[3],castShadow:s[5],receiveShadow:s[6],frustumCulled:s[7],renderOrder:s[8],visible:s[9],userData:s[10],dispose:s[11],interactive:s[12],ignorePointer:s[13],viewportAware:s[4],$$slots:{default:[U1]},$$scope:{ctx:s}};return s[0]!==void 0&&(r.inViewport=s[0]),e=new aa({props:r}),Vt.push(()=>Jt(e,"inViewport",i)),e.$on("click",s[48]),e.$on("contextmenu",s[49]),e.$on("pointerup",s[50]),e.$on("pointerdown",s[51]),e.$on("pointerenter",s[52]),e.$on("pointerleave",s[53]),e.$on("pointermove",s[54]),e.$on("viewportenter",s[55]),e.$on("viewportleave",s[56]),{c(){Re(e.$$.fragment)},l(o){Ie(e.$$.fragment,o)},m(o,a){Ue(e,o,a),n=!0},p(o,a){const l={};a[0]&16384&&(l.lookAt=o[14]),a[0]&2&&(l.position=o[1]),a[0]&4&&(l.scale=o[2]),a[0]&8&&(l.rotation=o[3]),a[0]&32&&(l.castShadow=o[5]),a[0]&64&&(l.receiveShadow=o[6]),a[0]&128&&(l.frustumCulled=o[7]),a[0]&256&&(l.renderOrder=o[8]),a[0]&512&&(l.visible=o[9]),a[0]&1024&&(l.userData=o[10]),a[0]&2048&&(l.dispose=o[11]),a[0]&4096&&(l.interactive=o[12]),a[0]&8192&&(l.ignorePointer=o[13]),a[0]&16&&(l.viewportAware=o[4]),a[1]&67108864&&(l.$$scope={dirty:a,ctx:o}),!t&&a[0]&1&&(t=!0,l.inViewport=o[0],Qt(()=>t=!1)),e.$set(l)},i(o){n||(ge(e.$$.fragment,o),n=!0)},o(o){be(e.$$.fragment,o),n=!1},d(o){Oe(e,o)}}}function F1(s,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:h=void 0}=e,{visible:b=void 0}=e,{userData:p=void 0}=e,{dispose:m=void 0}=e,{interactive:g=!1}=e,{ignorePointer:_=!1}=e,{lookAt:x=void 0}=e,{text:v=void 0}=e,{anchorX:w=void 0}=e,{anchorY:M=void 0}=e,{curveRadius:P=void 0}=e,{font:y=void 0}=e,{fontSize:A=void 0}=e,{letterSpacing:R=void 0}=e,{lineHeight:N=void 0}=e,{maxWidth:U=void 0}=e,{overflowWrap:C=void 0}=e,{textAlign:I=void 0}=e,{textIndent:D=void 0}=e,{whiteSpace:B=void 0}=e,{material:ee=void 0}=e,{color:J=void 0}=e,{depthOffset:W=void 0}=e,{clipRect:H=void 0}=e,{glyphGeometryDetail:S=void 0}=e,{sdfGlyphSize:L=void 0}=e,{outlineWidth:Q=void 0}=e,{outlineColor:X=void 0}=e,{outlineOpacity:q=void 0}=e,{outlineBlur:E=void 0}=e,{outlineOffsetX:Y=void 0}=e,{outlineOffsetY:te=void 0}=e,{strokeWidth:ae=void 0}=e,{strokeColor:oe=void 0}=e,{strokeOpacity:he=void 0}=e,{fillOpacity:G=void 0}=e,{direction:fe=void 0}=e;const Pe=new I1,Me=()=>Pe,{invalidate:Ce}=ln(),Be=vr();function ue(z){c=z,t(0,c)}function Se(z){ke.call(this,s,z)}function Ae(z){ke.call(this,s,z)}function me(z){ke.call(this,s,z)}function O(z){ke.call(this,s,z)}function T(z){ke.call(this,s,z)}function Z(z){ke.call(this,s,z)}function ie(z){ke.call(this,s,z)}function le(z){ke.call(this,s,z)}function pe(z){ke.call(this,s,z)}return s.$$set=z=>{"position"in z&&t(1,r=z.position),"scale"in z&&t(2,o=z.scale),"rotation"in z&&t(3,a=z.rotation),"viewportAware"in z&&t(4,l=z.viewportAware),"inViewport"in z&&t(0,c=z.inViewport),"castShadow"in z&&t(5,u=z.castShadow),"receiveShadow"in z&&t(6,f=z.receiveShadow),"frustumCulled"in z&&t(7,d=z.frustumCulled),"renderOrder"in z&&t(8,h=z.renderOrder),"visible"in z&&t(9,b=z.visible),"userData"in z&&t(10,p=z.userData),"dispose"in z&&t(11,m=z.dispose),"interactive"in z&&t(12,g=z.interactive),"ignorePointer"in z&&t(13,_=z.ignorePointer),"lookAt"in z&&t(14,x=z.lookAt),"text"in z&&t(16,v=z.text),"anchorX"in z&&t(17,w=z.anchorX),"anchorY"in z&&t(18,M=z.anchorY),"curveRadius"in z&&t(19,P=z.curveRadius),"font"in z&&t(20,y=z.font),"fontSize"in z&&t(21,A=z.fontSize),"letterSpacing"in z&&t(22,R=z.letterSpacing),"lineHeight"in z&&t(23,N=z.lineHeight),"maxWidth"in z&&t(24,U=z.maxWidth),"overflowWrap"in z&&t(25,C=z.overflowWrap),"textAlign"in z&&t(26,I=z.textAlign),"textIndent"in z&&t(27,D=z.textIndent),"whiteSpace"in z&&t(28,B=z.whiteSpace),"material"in z&&t(29,ee=z.material),"color"in z&&t(30,J=z.color),"depthOffset"in z&&t(31,W=z.depthOffset),"clipRect"in z&&t(32,H=z.clipRect),"glyphGeometryDetail"in z&&t(33,S=z.glyphGeometryDetail),"sdfGlyphSize"in z&&t(34,L=z.sdfGlyphSize),"outlineWidth"in z&&t(35,Q=z.outlineWidth),"outlineColor"in z&&t(36,X=z.outlineColor),"outlineOpacity"in z&&t(37,q=z.outlineOpacity),"outlineBlur"in z&&t(38,E=z.outlineBlur),"outlineOffsetX"in z&&t(39,Y=z.outlineOffsetX),"outlineOffsetY"in z&&t(40,te=z.outlineOffsetY),"strokeWidth"in z&&t(41,ae=z.strokeWidth),"strokeColor"in z&&t(42,oe=z.strokeColor),"strokeOpacity"in z&&t(43,he=z.strokeOpacity),"fillOpacity"in z&&t(44,G=z.fillOpacity),"direction"in z&&t(45,fe=z.direction),"$$scope"in z&&t(57,i=z.$$scope)},s.$$.update=()=>{if(s.$$.dirty[0]&2147418112|s.$$.dirty[1]&32767){const z=Me();v!==void 0&&(z.text=v),w!==void 0&&(z.anchorX=w),M!==void 0&&(z.anchorY=M),P!==void 0&&(z.curveRadius=P),y!==void 0&&(z.font=y),A!==void 0&&(z.fontSize=A),R!==void 0&&(z.letterSpacing=R),N!==void 0&&(z.lineHeight=N),U!==void 0&&(z.maxWidth=U),C!==void 0&&(z.overflowWrap=C),I!==void 0&&(z.textAlign=I),D!==void 0&&(z.textIndent=D),B!==void 0&&(z.whiteSpace=B),ee&&(z.material=ee),J!==void 0&&(z.color=J),W!==void 0&&(z.depthOffset=W),H!==void 0&&(z.clipRect=H),S!==void 0&&(z.glyphGeometryDetail=S),L!==void 0&&(z.sdfGlyphSize=L),Q!==void 0&&(z.outlineWidth=Q),X!==void 0&&(z.outlineColor=X),q!==void 0&&(z.outlineOpacity=q),E!==void 0&&(z.outlineBlur=E),Y!==void 0&&(z.outlineOffsetX=Y),te!==void 0&&(z.outlineOffsetY=te),ae!==void 0&&(z.strokeWidth=ae),oe!==void 0&&(z.strokeColor=oe),he!==void 0&&(z.strokeOpacity=he),G!==void 0&&(z.fillOpacity=G),fe!==void 0&&(z.direction=fe),z.sync(()=>{Ce("Text: sync finished"),Be("sync")})}},[c,r,o,a,l,u,f,d,h,b,p,m,g,_,x,Pe,v,w,M,P,y,A,R,N,U,C,I,D,B,ee,J,W,H,S,L,Q,X,q,E,Y,te,ae,oe,he,G,fe,n,ue,Se,Ae,me,O,T,Z,ie,le,pe,i]}class k1 extends Ze{constructor(e){super(),Ke(this,e,F1,O1,Ye,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,text:16,anchorX:17,anchorY:18,curveRadius:19,font:20,fontSize:21,letterSpacing:22,lineHeight:23,maxWidth:24,overflowWrap:25,textAlign:26,textIndent:27,whiteSpace:28,material:29,color:30,depthOffset:31,clipRect:32,glyphGeometryDetail:33,sdfGlyphSize:34,outlineWidth:35,outlineColor:36,outlineOpacity:37,outlineBlur:38,outlineOffsetX:39,outlineOffsetY:40,strokeWidth:41,strokeColor:42,strokeOpacity:43,fillOpacity:44,direction:45,textObject:15},null,[-1,-1])}get textObject(){return this.$$.ctx[15]}}function z1(s){let e,t,n,i;return e=new Ev({props:{visible:s[0],points:[[0,0,0],s[1]],material:new bo({color:s[3]})}}),n=new k1({props:{visible:s[0],position:new K(...s[1]),text:s[2],color:s[3],anchorY:"middle",fontSize:"0.2"}}),{c(){Re(e.$$.fragment),t=lt(),Re(n.$$.fragment)},l(r){Ie(e.$$.fragment,r),t=ct(r),Ie(n.$$.fragment,r)},m(r,o){Ue(e,r,o),je(r,t,o),Ue(n,r,o),i=!0},p(r,[o]){const a={};o&1&&(a.visible=r[0]),o&2&&(a.points=[[0,0,0],r[1]]),o&8&&(a.material=new bo({color:r[3]})),e.$set(a);const l={};o&1&&(l.visible=r[0]),o&2&&(l.position=new K(...r[1])),o&4&&(l.text=r[2]),o&8&&(l.color=r[3]),n.$set(l)},i(r){i||(ge(e.$$.fragment,r),ge(n.$$.fragment,r),i=!0)},o(r){be(e.$$.fragment,r),be(n.$$.fragment,r),i=!1},d(r){Oe(e,r),r&&Fe(t),Oe(n,r)}}}function N1(s,e,t){let{visible:n}=e,{endCoordinate:i}=e,{text:r}=e,{color:o}=e;return s.$$set=a=>{"visible"in a&&t(0,n=a.visible),"endCoordinate"in a&&t(1,i=a.endCoordinate),"text"in a&&t(2,r=a.text),"color"in a&&t(3,o=a.color)},[n,i,r,o]}class ro extends Ze{constructor(e){super(),Ke(this,e,N1,z1,Ye,{visible:0,endCoordinate:1,text:2,color:3})}}function B1(s){let e,t,n,i,r,o;return e=new ro({props:{visible:s[0],endCoordinate:[so,0,0],color:"#ff0000",text:"X"}}),n=new ro({props:{visible:s[0],endCoordinate:[0,so,0],color:"#00ff00",text:"Y"}}),r=new ro({props:{visible:s[0],endCoordinate:[0,0,so],color:"#0000ff",text:"Z"}}),{c(){Re(e.$$.fragment),t=lt(),Re(n.$$.fragment),i=lt(),Re(r.$$.fragment)},l(a){Ie(e.$$.fragment,a),t=ct(a),Ie(n.$$.fragment,a),i=ct(a),Ie(r.$$.fragment,a)},m(a,l){Ue(e,a,l),je(a,t,l),Ue(n,a,l),je(a,i,l),Ue(r,a,l),o=!0},p(a,[l]){const c={};l&1&&(c.visible=a[0]),e.$set(c);const u={};l&1&&(u.visible=a[0]),n.$set(u);const f={};l&1&&(f.visible=a[0]),r.$set(f)},i(a){o||(ge(e.$$.fragment,a),ge(n.$$.fragment,a),ge(r.$$.fragment,a),o=!0)},o(a){be(e.$$.fragment,a),be(n.$$.fragment,a),be(r.$$.fragment,a),o=!1},d(a){Oe(e,a),a&&Fe(t),Oe(n,a),a&&Fe(i),Oe(r,a)}}}const so=1.5;function G1(s,e,t){let{visible:n}=e;return s.$$set=i=>{"visible"in i&&t(0,n=i.visible)},[n]}class V1 extends Ze{constructor(e){super(),Ke(this,e,G1,B1,Ye,{visible:0})}}function W1(s){let e,t;return e=new j_({props:{autoRotate:s[0].autoRotate,enableZoom:!0}}),{c(){Re(e.$$.fragment)},l(n){Ie(e.$$.fragment,n)},m(n,i){Ue(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.autoRotate=n[0].autoRotate),e.$set(r)},i(n){t||(ge(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Oe(e,n)}}}function H1(s){let e,t,n,i,r,o,a,l,c,u,f,d;return e=new B_({props:{position:{y:4,x:4,z:4},$$slots:{default:[W1]},$$scope:{ctx:s}}}),n=new ev({props:{position:{y:10}}}),r=new Nv({}),a=new Wv({}),c=new Zv({}),f=new V1({props:{visible:s[0].axesOverlay}}),{c(){Re(e.$$.fragment),t=lt(),Re(n.$$.fragment),i=lt(),Re(r.$$.fragment),o=lt(),Re(a.$$.fragment),l=lt(),Re(c.$$.fragment),u=lt(),Re(f.$$.fragment)},l(h){Ie(e.$$.fragment,h),t=ct(h),Ie(n.$$.fragment,h),i=ct(h),Ie(r.$$.fragment,h),o=ct(h),Ie(a.$$.fragment,h),l=ct(h),Ie(c.$$.fragment,h),u=ct(h),Ie(f.$$.fragment,h)},m(h,b){Ue(e,h,b),je(h,t,b),Ue(n,h,b),je(h,i,b),Ue(r,h,b),je(h,o,b),Ue(a,h,b),je(h,l,b),Ue(c,h,b),je(h,u,b),Ue(f,h,b),d=!0},p(h,b){const p={};b&3&&(p.$$scope={dirty:b,ctx:h}),e.$set(p);const m={};b&1&&(m.visible=h[0].axesOverlay),f.$set(m)},i(h){d||(ge(e.$$.fragment,h),ge(n.$$.fragment,h),ge(r.$$.fragment,h),ge(a.$$.fragment,h),ge(c.$$.fragment,h),ge(f.$$.fragment,h),d=!0)},o(h){be(e.$$.fragment,h),be(n.$$.fragment,h),be(r.$$.fragment,h),be(a.$$.fragment,h),be(c.$$.fragment,h),be(f.$$.fragment,h),d=!1},d(h){Oe(e,h),h&&Fe(t),Oe(n,h),h&&Fe(i),Oe(r,h),h&&Fe(o),Oe(a,h),h&&Fe(l),Oe(c,h),h&&Fe(u),Oe(f,h)}}}function j1(s){let e,t,n;return t=new x_({props:{$$slots:{default:[H1]},$$scope:{ctx:s}}}),{c(){e=vt("div"),Re(t.$$.fragment),this.h()},l(i){e=bt(i,"DIV",{class:!0});var r=Mt(e);Ie(t.$$.fragment,r),r.forEach(Fe),this.h()},h(){ot(e,"class","svelte-moe61r")},m(i,r){je(i,e,r),Ue(t,e,null),n=!0},p(i,[r]){const o={};r&3&&(o.$$scope={dirty:r,ctx:i}),t.$set(o)},i(i){n||(ge(t.$$.fragment,i),n=!0)},o(i){be(t.$$.fragment,i),n=!1},d(i){i&&Fe(e),Oe(t)}}}function X1(s,e,t){let n;return ft(s,Hs,i=>t(0,n=i)),[n]}class q1 extends Ze{constructor(e){super(),Ke(this,e,X1,j1,Ye,{})}}function Y1(s){let e,t,n;return{c(){e=vt("div"),t=vt("span"),n=Ys("Geodesicraft"),this.h()},l(i){e=bt(i,"DIV",{class:!0});var r=Mt(e);t=bt(r,"SPAN",{class:!0});var o=Mt(t);n=Zs(o,"Geodesicraft"),o.forEach(Fe),r.forEach(Fe),this.h()},h(){ot(t,"class","clickthroughable svelte-1rb3ir3"),ot(e,"class","clickthroughable svelte-1rb3ir3")},m(i,r){je(i,e,r),St(e,t),St(t,n)},p:sn,i:sn,o:sn,d(i){i&&Fe(e)}}}class Z1 extends Ze{constructor(e){super(),Ke(this,e,null,Y1,Ye,{})}}function K1(s){let e,t,n,i,r,o;return{c(){e=vt("label"),t=Ys(s[1]),n=lt(),i=vt("input"),this.h()},l(a){e=bt(a,"LABEL",{class:!0});var l=Mt(e);t=Zs(l,s[1]),n=ct(l),i=bt(l,"INPUT",{type:!0,class:!0}),l.forEach(Fe),this.h()},h(){ot(i,"type","checkbox"),ot(i,"class","svelte-1vlh7zy"),ot(e,"class","svelte-1vlh7zy")},m(a,l){je(a,e,l),St(e,t),St(e,n),St(e,i),i.checked=s[0],r||(o=Mn(i,"change",s[2]),r=!0)},p(a,[l]){l&2&&fu(t,a[1]),l&1&&(i.checked=a[0])},i:sn,o:sn,d(a){a&&Fe(e),r=!1,o()}}}function J1(s,e,t){let{checked:n}=e,{name:i}=e;function r(){n=this.checked,t(0,n)}return s.$$set=o=>{"checked"in o&&t(0,n=o.checked),"name"in o&&t(1,i=o.name)},[n,i,r]}class Q1 extends Ze{constructor(e){super(),Ke(this,e,J1,K1,Ye,{checked:0,name:1})}}function ou(s,e,t){const n=s.slice();return n[2]=e[t][0],n[3]=e[t][1],n[4]=e,n[5]=t,n}function lu(s,e){let t,n,i,r;function o(l){e[1](l,e[2])}let a={name:e[3].name};return e[0][e[2]]!==void 0&&(a.checked=e[0][e[2]]),n=new Q1({props:a}),Vt.push(()=>Jt(n,"checked",o)),{key:s,first:null,c(){t=Hn(),Re(n.$$.fragment),this.h()},l(l){t=Hn(),Ie(n.$$.fragment,l),this.h()},h(){this.first=t},m(l,c){je(l,t,c),Ue(n,l,c),r=!0},p(l,c){e=l;const u={};!i&&c&1&&(i=!0,u.checked=e[0][e[2]],Qt(()=>i=!1)),n.$set(u)},i(l){r||(ge(n.$$.fragment,l),r=!0)},o(l){be(n.$$.fragment,l),r=!1},d(l){l&&Fe(t),Oe(n,l)}}}function $1(s){let e,t=[],n=new Map,i,r=Object.entries(oo);const o=a=>a[2];for(let a=0;a<r.length;a+=1){let l=ou(s,r,a),c=o(l);n.set(c,t[a]=lu(c,l))}return{c(){e=vt("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=bt(a,"DIV",{class:!0});var l=Mt(e);for(let c=0;c<t.length;c+=1)t[c].l(l);l.forEach(Fe),this.h()},h(){ot(e,"class","clickthroughable svelte-mpjsd9")},m(a,l){je(a,e,l);for(let c=0;c<t.length;c+=1)t[c].m(e,null);i=!0},p(a,[l]){l&1&&(r=Object.entries(oo),gi(),t=Eo(t,l,o,1,a,r,n,e,hu,lu,null,ou),_i())},i(a){if(!i){for(let l=0;l<r.length;l+=1)ge(t[l]);i=!0}},o(a){for(let l=0;l<t.length;l+=1)be(t[l]);i=!1},d(a){a&&Fe(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function eb(s,e,t){let n;ft(s,Hs,r=>t(0,n=r));function i(r,o){s.$$.not_equal(n[o],r)&&(n[o]=r,Hs.set(n))}return[n,i]}class tb extends Ze{constructor(e){super(),Ke(this,e,eb,$1,Ye,{})}}function nb(s){let e,t,n,i,r;return t=new Z1({}),i=new tb({}),{c(){e=vt("div"),Re(t.$$.fragment),n=lt(),Re(i.$$.fragment),this.h()},l(o){e=bt(o,"DIV",{class:!0});var a=Mt(e);Ie(t.$$.fragment,a),n=ct(a),Ie(i.$$.fragment,a),a.forEach(Fe),this.h()},h(){ot(e,"class","clickthroughable svelte-uekgqy")},m(o,a){je(o,e,a),Ue(t,e,null),St(e,n),Ue(i,e,null),r=!0},p:sn,i(o){r||(ge(t.$$.fragment,o),ge(i.$$.fragment,o),r=!0)},o(o){be(t.$$.fragment,o),be(i.$$.fragment,o),r=!1},d(o){o&&Fe(e),Oe(t),Oe(i)}}}class ib extends Ze{constructor(e){super(),Ke(this,e,null,nb,Ye,{})}}function rb(s){let e,t,n,i,r,o,a;return n=new q1({}),o=new ib({}),{c(){e=vt("div"),t=vt("div"),Re(n.$$.fragment),i=lt(),r=vt("div"),Re(o.$$.fragment),this.h()},l(l){e=bt(l,"DIV",{class:!0});var c=Mt(e);t=bt(c,"DIV",{class:!0});var u=Mt(t);Ie(n.$$.fragment,u),u.forEach(Fe),i=ct(c),r=bt(c,"DIV",{class:!0});var f=Mt(r);Ie(o.$$.fragment,f),f.forEach(Fe),c.forEach(Fe),this.h()},h(){ot(t,"class","child clickthroughable svelte-adjw6t"),ot(r,"class","child clickthroughable svelte-adjw6t"),ot(e,"class","parent clickthroughable svelte-adjw6t")},m(l,c){je(l,e,c),St(e,t),Ue(n,t,null),St(e,i),St(e,r),Ue(o,r,null),a=!0},p:sn,i(l){a||(ge(n.$$.fragment,l),ge(o.$$.fragment,l),a=!0)},o(l){be(n.$$.fragment,l),be(o.$$.fragment,l),a=!1},d(l){l&&Fe(e),Oe(n),Oe(o)}}}class sb extends Ze{constructor(e){super(),Ke(this,e,null,rb,Ye,{})}}function cu(s,e,t){const n=s.slice();return n[2]=e[t][0],n[3]=e[t][1],n}function uu(s,e){let t,n=e[3].name+"",i;return{key:s,first:null,c(){t=vt("option"),i=Ys(n),this.h()},l(r){t=bt(r,"OPTION",{});var o=Mt(t);i=Zs(o,n),o.forEach(Fe),this.h()},h(){t.__value=e[2],t.value=t.__value,this.first=t},m(r,o){je(r,t,o),St(t,i)},p(r,o){e=r},d(r){r&&Fe(t)}}}function ab(s){let e,t=[],n=new Map,i,r,o=Object.entries(un);const a=l=>l[2];for(let l=0;l<o.length;l+=1){let c=cu(s,o,l),u=a(c);n.set(u,t[l]=uu(u,c))}return{c(){e=vt("select");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=bt(l,"SELECT",{});var c=Mt(e);for(let u=0;u<t.length;u+=1)t[u].l(c);c.forEach(Fe),this.h()},h(){s[0]===void 0&&hf(()=>s[1].call(e))},m(l,c){je(l,e,c);for(let u=0;u<t.length;u+=1)t[u].m(e,null);nl(e,s[0]),i||(r=Mn(e,"change",s[1]),i=!0)},p(l,[c]){c&0&&(o=Object.entries(un),t=Eo(t,c,a,1,l,o,n,e,mf,uu,null,cu)),c&1&&nl(e,l[0])},i:sn,o:sn,d(l){l&&Fe(e);for(let c=0;c<t.length;c+=1)t[c].d();i=!1,r()}}}function ob(s,e,t){let{selected:n}=e;function i(){n=pf(this),t(0,n)}return s.$$set=r=>{"selected"in r&&t(0,n=r.selected)},[n,i]}class lb extends Ze{constructor(e){super(),Ke(this,e,ob,ab,Ye,{selected:0})}}function cb(s){let e,t,n;function i(o){s[2](o)}let r={name:un[s[0]].name,min:un[s[0]].min,max:un[s[0]].max,step:un[s[0]].step};return s[1][s[0]]!==void 0&&(r.value=s[1][s[0]]),e=new _u({props:r}),Vt.push(()=>Jt(e,"value",i)),{c(){Re(e.$$.fragment)},l(o){Ie(e.$$.fragment,o)},m(o,a){Ue(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.name=un[o[0]].name),a&1&&(l.min=un[o[0]].min),a&1&&(l.max=un[o[0]].max),a&1&&(l.step=un[o[0]].step),!t&&a&3&&(t=!0,l.value=o[1][o[0]],Qt(()=>t=!1)),e.$set(l)},i(o){n||(ge(e.$$.fragment,o),n=!0)},o(o){be(e.$$.fragment,o),n=!1},d(o){Oe(e,o)}}}function ub(s,e,t){let n;ft(s,Ri,o=>t(1,n=o));let{selected:i}=e;function r(o){s.$$.not_equal(n[i],o)&&(n[i]=o,Ri.set(n))}return s.$$set=o=>{"selected"in o&&t(0,i=o.selected)},[i,n,r]}class fb extends Ze{constructor(e){super(),Ke(this,e,ub,cb,Ye,{selected:0})}}function db(s){let e,t,n,i,r,o;function a(c){s[1](c)}let l={};return s[0]!==void 0&&(l.selected=s[0]),t=new lb({props:l}),Vt.push(()=>Jt(t,"selected",a)),r=new fb({props:{selected:s[0]}}),{c(){e=vt("div"),Re(t.$$.fragment),i=lt(),Re(r.$$.fragment),this.h()},l(c){e=bt(c,"DIV",{class:!0});var u=Mt(e);Ie(t.$$.fragment,u),i=ct(u),Ie(r.$$.fragment,u),u.forEach(Fe),this.h()},h(){ot(e,"class","svelte-1y2pke0")},m(c,u){je(c,e,u),Ue(t,e,null),St(e,i),Ue(r,e,null),o=!0},p(c,[u]){const f={};!n&&u&1&&(n=!0,f.selected=c[0],Qt(()=>n=!1)),t.$set(f);const d={};u&1&&(d.selected=c[0]),r.$set(d)},i(c){o||(ge(t.$$.fragment,c),ge(r.$$.fragment,c),o=!0)},o(c){be(t.$$.fragment,c),be(r.$$.fragment,c),o=!1},d(c){c&&Fe(e),Oe(t),Oe(r)}}}function hb(s,e,t){let n=Object.keys(un)[0];function i(r){n=r,t(0,n)}return[n,i]}class mb extends Ze{constructor(e){super(),Ke(this,e,hb,db,Ye,{})}}function pb(s){let e,t,n,i,r,o,a,l,c;return n=new Mf({}),r=new sb({}),l=new mb({}),{c(){e=vt("div"),t=vt("div"),Re(n.$$.fragment),i=lt(),Re(r.$$.fragment),o=lt(),a=vt("div"),Re(l.$$.fragment),this.h()},l(u){e=bt(u,"DIV",{class:!0});var f=Mt(e);t=bt(f,"DIV",{class:!0});var d=Mt(t);Ie(n.$$.fragment,d),d.forEach(Fe),i=ct(f),Ie(r.$$.fragment,f),o=ct(f),a=bt(f,"DIV",{class:!0});var h=Mt(a);Ie(l.$$.fragment,h),h.forEach(Fe),f.forEach(Fe),this.h()},h(){ot(t,"class","sidebar svelte-pffrn4"),ot(a,"class","footer svelte-pffrn4"),ot(e,"class","main svelte-pffrn4")},m(u,f){je(u,e,f),St(e,t),Ue(n,t,null),St(e,i),Ue(r,e,null),St(e,o),St(e,a),Ue(l,a,null),c=!0},p:sn,i(u){c||(ge(n.$$.fragment,u),ge(r.$$.fragment,u),ge(l.$$.fragment,u),c=!0)},o(u){be(n.$$.fragment,u),be(r.$$.fragment,u),be(l.$$.fragment,u),c=!1},d(u){u&&Fe(e),Oe(n),Oe(r),Oe(l)}}}function gb(s){return bf(),[]}class Ab extends Ze{constructor(e){super(),Ke(this,e,gb,pb,Ye,{})}}export{Ab as default};
