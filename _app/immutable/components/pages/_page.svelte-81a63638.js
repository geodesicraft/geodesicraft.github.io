import{S as He,i as We,s as Ue,F as Pt,k as gt,a as Ze,q as di,l as _t,m as Tt,c as Ke,r as hi,h as Me,n as nt,b as Oe,J as dt,L as va,M as Mn,G as Rt,H as It,I as Ot,u as nc,f as ie,t as le,D as pl,N as ic,O as $t,P as cn,w as Se,x as we,y as ye,Q as un,z as Ee,K as Qe,R as Hn,T as ht,U as gn,A as sr,V as En,W as rc,g as Vi,d as Gi,o as ml,X as mn,Y as ur,Z as Re,B as on,C as sc,e as Fi,_ as ta}from"../../chunks/index-457f8e28.js";import{w as At,d as ac,r as oc}from"../../chunks/index-2b0cc2db.js";const gl=function(r){return Object.fromEntries(Object.entries(r).map(([e,t])=>[e,t.default]))},_l=function(r,e){const t=JSON.parse(window.localStorage.getItem(r));if(t===null)return e;let n={};for(const i of Object.keys(e))t[i]!==void 0?n[i]=t[i]:n[i]=e[i];return n},lc={autoRotate:{default:!0}},cc={vertexSize:{default:.15},edgeThickness:{default:.05}},Vr=At(_l("viewerSettings",gl(lc)));Vr.subscribe(r=>{window.localStorage.setItem("viewerSettings",JSON.stringify(r))});const Ii=At(_l("domeSettings",gl(cc)));Ii.subscribe(r=>{window.localStorage.setItem("domeSettings",JSON.stringify(r))});const jr=At({edges:[],vertices:[],faces:[]}),os=function(r,e,t){const n=r*Math.sin(e)*Math.cos(t),i=r*Math.sin(e)*Math.sin(t),s=r*Math.cos(e);return[n,i,s]},uc=function(){return{sphericalVertices:[[1,Math.PI*.5,Math.PI*.5],[1,Math.PI*2/10*0,2],[1,Math.PI*2/10*1,1],[1,Math.PI*.5,Math.PI*1.5]],sphericalEdges:[],sphericalFaces:[]}};function fc(){const r=uc(),t=r.sphericalVertices.map(a=>os(...a)),i=r.sphericalEdges.map(a=>a.map(l=>os(...l))),o=r.sphericalFaces.map(a=>a.map(l=>os(...l)));jr.set({vertices:t,edges:i,faces:o})}function dc(r){let e,t,n,i,s,o,a,l;const u=r[5].default,c=Pt(u,r,r[4],null);return{c(){e=gt("label"),c&&c.c(),t=Ze(),n=gt("input"),i=Ze(),s=di(r[0]),this.h()},l(f){e=_t(f,"LABEL",{class:!0});var d=Tt(e);c&&c.l(d),t=Ke(d),n=_t(d,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),i=Ke(d),s=hi(d,r[0]),d.forEach(Me),this.h()},h(){nt(n,"type","range"),nt(n,"min",r[1]),nt(n,"max",r[2]),nt(n,"step",r[3]),nt(n,"class","svelte-tegp1b"),nt(e,"class","svelte-tegp1b")},m(f,d){Oe(f,e,d),c&&c.m(e,null),dt(e,t),dt(e,n),va(n,r[0]),dt(e,i),dt(e,s),o=!0,a||(l=[Mn(n,"change",r[6]),Mn(n,"input",r[6])],a=!0)},p(f,[d]){c&&c.p&&(!o||d&16)&&Rt(c,u,f,f[4],o?Ot(u,f[4],d,null):It(f[4]),null),(!o||d&2)&&nt(n,"min",f[1]),(!o||d&4)&&nt(n,"max",f[2]),(!o||d&8)&&nt(n,"step",f[3]),d&1&&va(n,f[0]),(!o||d&1)&&nc(s,f[0])},i(f){o||(ie(c,f),o=!0)},o(f){le(c,f),o=!1},d(f){f&&Me(e),c&&c.d(f),a=!1,pl(l)}}}function hc(r,e,t){let{$$slots:n={},$$scope:i}=e,{value:s}=e,{min:o}=e,{max:a}=e,{step:l}=e;function u(){s=ic(this.value),t(0,s)}return r.$$set=c=>{"value"in c&&t(0,s=c.value),"min"in c&&t(1,o=c.min),"max"in c&&t(2,a=c.max),"step"in c&&t(3,l=c.step),"$$scope"in c&&t(4,i=c.$$scope)},[s,o,a,l,i,n,u]}class xa extends He{constructor(e){super(),We(this,e,hc,dc,Ue,{value:0,min:1,max:2,step:3})}}function pc(r){let e;return{c(){e=di("Vertex Size")},l(t){e=hi(t,"Vertex Size")},m(t,n){Oe(t,e,n)},d(t){t&&Me(e)}}}function mc(r){let e;return{c(){e=di("Edge Thickness")},l(t){e=hi(t,"Edge Thickness")},m(t,n){Oe(t,e,n)},d(t){t&&Me(e)}}}function gc(r){let e,t,n,i,s,o,a,l;function u(m){r[1](m)}let c={min:"0",max:"1",step:"0.05",$$slots:{default:[pc]},$$scope:{ctx:r}};r[0].vertexSize!==void 0&&(c.value=r[0].vertexSize),n=new xa({props:c}),$t.push(()=>cn(n,"value",u));function f(m){r[2](m)}let d={min:"0.01",max:"0.5",step:"0.01",$$slots:{default:[mc]},$$scope:{ctx:r}};return r[0].edgeThickness!==void 0&&(d.value=r[0].edgeThickness),o=new xa({props:d}),$t.push(()=>cn(o,"value",f)),{c(){e=gt("div"),t=gt("div"),Se(n.$$.fragment),s=Ze(),Se(o.$$.fragment),this.h()},l(m){e=_t(m,"DIV",{class:!0});var _=Tt(e);t=_t(_,"DIV",{class:!0});var p=Tt(t);we(n.$$.fragment,p),s=Ke(p),we(o.$$.fragment,p),p.forEach(Me),_.forEach(Me),this.h()},h(){nt(t,"class","inner svelte-1bn7qdr"),nt(e,"class","outer svelte-1bn7qdr")},m(m,_){Oe(m,e,_),dt(e,t),ye(n,t,null),dt(t,s),ye(o,t,null),l=!0},p(m,[_]){const p={};_&8&&(p.$$scope={dirty:_,ctx:m}),!i&&_&1&&(i=!0,p.value=m[0].vertexSize,un(()=>i=!1)),n.$set(p);const h={};_&8&&(h.$$scope={dirty:_,ctx:m}),!a&&_&1&&(a=!0,h.value=m[0].edgeThickness,un(()=>a=!1)),o.$set(h)},i(m){l||(ie(n.$$.fragment,m),ie(o.$$.fragment,m),l=!0)},o(m){le(n.$$.fragment,m),le(o.$$.fragment,m),l=!1},d(m){m&&Me(e),Ee(n),Ee(o)}}}function _c(r,e,t){let n;Qe(r,Ii,o=>t(0,n=o));function i(o){r.$$.not_equal(n.vertexSize,o)&&(n.vertexSize=o,Ii.set(n))}function s(o){r.$$.not_equal(n.edgeThickness,o)&&(n.edgeThickness=o,Ii.set(n))}return[n,i,s]}class vc extends He{constructor(e){super(),We(this,e,_c,gc,Ue,{})}}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const na="148",mi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xc=0,ba=1,bc=2,vl=1,xl=2,tr=3,ci=0,ln=1,Xr=2,pr=3,Wn=0,Oi=1,Ma=2,Sa=3,wa=4,Mc=5,Pi=100,Sc=101,wc=102,ya=103,Ea=104,yc=200,Ec=201,Ac=202,Tc=203,bl=204,Ml=205,Cc=206,Lc=207,Dc=208,Pc=209,Rc=210,Ic=0,Oc=1,zc=2,Hs=3,Fc=4,Nc=5,Uc=6,Bc=7,ia=0,kc=1,Vc=2,yn=0,Gc=1,Hc=2,Wc=3,Sl=4,jc=5,wl=300,Ni=301,Ui=302,Ws=303,js=304,qr=306,Xs=1e3,_n=1001,qs=1002,kt=1003,Aa=1004,ls=1005,sn=1006,Xc=1007,ar=1008,ui=1009,qc=1010,Yc=1011,yl=1012,Zc=1013,ri=1014,si=1015,or=1016,Kc=1017,Jc=1018,zi=1020,Qc=1021,$c=1022,vn=1023,eu=1024,tu=1025,ai=1026,Bi=1027,nu=1028,iu=1029,ru=1030,su=1031,au=1033,cs=33776,us=33777,fs=33778,ds=33779,Ta=35840,Ca=35841,La=35842,Da=35843,ou=36196,Pa=37492,Ra=37496,Ia=37808,Oa=37809,za=37810,Fa=37811,Na=37812,Ua=37813,Ba=37814,ka=37815,Va=37816,Ga=37817,Ha=37818,Wa=37819,ja=37820,Xa=37821,qa=36492,jn=3e3,tt=3001,lu=3200,cu=3201,ra=0,uu=1,Sn="srgb",lr="srgb-linear",hs=7680,fu=519,Ys=35044,Ya="300 es",Zs=1035;class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Za=1234567;const ir=Math.PI/180,Gr=180/Math.PI;function Fn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[r&255]+Lt[r>>8&255]+Lt[r>>16&255]+Lt[r>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Dt(r,e,t){return Math.max(e,Math.min(t,r))}function sa(r,e){return(r%e+e)%e}function du(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function hu(r,e,t){return r!==e?(t-r)/(e-r):0}function rr(r,e,t){return(1-t)*r+t*e}function pu(r,e,t,n){return rr(r,e,1-Math.exp(-t*n))}function mu(r,e=1){return e-Math.abs(sa(r,e*2)-e)}function gu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function _u(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function vu(r,e){return r+Math.floor(Math.random()*(e-r+1))}function xu(r,e){return r+Math.random()*(e-r)}function bu(r){return r*(.5-Math.random())}function Mu(r){r!==void 0&&(Za=r);let e=Za+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Su(r){return r*ir}function wu(r){return r*Gr}function Ks(r){return(r&r-1)===0&&r!==0}function yu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Hr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Eu(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+n)/2),c=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),m=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*c,l*f,l*d,a*u);break;case"YZY":r.set(l*d,a*c,l*f,a*u);break;case"ZXZ":r.set(l*f,l*d,a*c,a*u);break;case"XZX":r.set(a*c,l*_,l*m,a*u);break;case"YXY":r.set(l*m,a*c,l*_,a*u);break;case"ZYZ":r.set(l*_,l*m,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Au=Object.freeze({__proto__:null,DEG2RAD:ir,RAD2DEG:Gr,generateUUID:Fn,clamp:Dt,euclideanModulo:sa,mapLinear:du,inverseLerp:hu,lerp:rr,damp:pu,pingpong:mu,smoothstep:gu,smootherstep:_u,randInt:vu,randFloat:xu,randFloatSpread:bu,seededRandom:Mu,degToRad:Su,radToDeg:wu,isPowerOfTwo:Ks,ceilPowerOfTwo:yu,floorPowerOfTwo:Hr,setQuaternionFromProperEuler:Eu,normalize:et,denormalize:zn});class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=n,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],c=n[4],f=n[7],d=n[2],m=n[5],_=n[8],p=i[0],h=i[3],g=i[6],b=i[1],x=i[4],M=i[7],S=i[2],C=i[5],O=i[8];return s[0]=o*p+a*b+l*S,s[3]=o*h+a*x+l*C,s[6]=o*g+a*M+l*O,s[1]=u*p+c*b+f*S,s[4]=u*h+c*x+f*C,s[7]=u*g+c*M+f*O,s[2]=d*p+m*b+_*S,s[5]=d*h+m*x+_*C,s[8]=d*g+m*M+_*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-n*s*c+n*a*l+i*s*u-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,m=u*s-o*l,_=t*f+n*d+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=f*p,e[1]=(i*u-c*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(c*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*l-u*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-i*u,i*l,-i*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ps.makeScale(e,t)),this}rotate(e){return this.premultiply(ps.makeRotation(-e)),this}translate(e,t){return this.premultiply(ps.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ps=new Kt;function El(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function cr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function oi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Br(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const ms={[Sn]:{[lr]:oi},[lr]:{[Sn]:Br}},Nt={legacyMode:!0,get workingColorSpace(){return lr},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(ms[e]&&ms[e][t]!==void 0){const n=ms[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mt={r:0,g:0,b:0},dn={h:0,s:0,l:0},mr={h:0,s:0,l:0};function gs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function gr(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Nt.workingColorSpace){if(e=sa(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=gs(o,s,e+1/3),this.g=gs(o,s,e),this.b=gs(o,s,e-1/3)}return Nt.toWorkingColorSpace(this,i),this}setStyle(e,t=Sn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Nt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Nt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,u,c,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Nt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Nt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Sn){const n=Al[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return Nt.fromWorkingColorSpace(gr(this,mt),e),Dt(mt.r*255,0,255)<<16^Dt(mt.g*255,0,255)<<8^Dt(mt.b*255,0,255)<<0}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.fromWorkingColorSpace(gr(this,mt),t);const n=mt.r,i=mt.g,s=mt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(gr(this,mt),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=Sn){return Nt.fromWorkingColorSpace(gr(this,mt),e),e!==Sn?`color(${e} ${mt.r} ${mt.g} ${mt.b})`:`rgb(${mt.r*255|0},${mt.g*255|0},${mt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(dn),dn.h+=e,dn.s+=t,dn.l+=n,this.setHSL(dn.h,dn.s,dn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dn),e.getHSL(mr);const n=rr(dn.h,mr.h,t),i=rr(dn.s,mr.s,t),s=rr(dn.l,mr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ne.NAMES=Al;let _i;class Tl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_i===void 0&&(_i=cr("canvas")),_i.width=e.width,_i.height=e.height;const n=_i.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=oi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Cl{constructor(e=null){this.isSource=!0,this.uuid=Fn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(_s(i[o].image)):s.push(_s(i[o]))}else s=_s(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function _s(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Tl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tu=0;class Wt extends pi{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=_n,i=_n,s=sn,o=ar,a=vn,l=ui,u=Wt.DEFAULT_ANISOTROPY,c=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Fn(),this.name="",this.source=new Cl(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xs:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xs:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=wl;Wt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,i=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],m=l[5],_=l[9],p=l[2],h=l[6],g=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-p)<.01&&Math.abs(_-h)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+p)<.1&&Math.abs(_+h)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,M=(m+1)/2,S=(g+1)/2,C=(c+d)/4,O=(f+p)/4,v=(_+h)/4;return x>M&&x>S?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=C/n,s=O/n):M>S?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=C/i,s=v/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=O/s,i=v/s),this.set(n,i,s,t),this}let b=Math.sqrt((h-_)*(h-_)+(f-p)*(f-p)+(d-c)*(d-c));return Math.abs(b)<.001&&(b=1),this.x=(h-_)/b,this.y=(f-p)/b,this.z=(d-c)/b,this.w=Math.acos((u+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xn extends pi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:sn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ll extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cu extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],u=n[i+1],c=n[i+2],f=n[i+3];const d=s[o+0],m=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(f!==p||l!==d||u!==m||c!==_){let h=1-a;const g=l*d+u*m+c*_+f*p,b=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const S=Math.sqrt(x),C=Math.atan2(S,g*b);h=Math.sin(h*C)/S,a=Math.sin(a*C)/S}const M=a*b;if(l=l*h+d*M,u=u*h+m*M,c=c*h+_*M,f=f*h+p*M,h===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=S,u*=S,c*=S,f*=S}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],u=n[i+2],c=n[i+3],f=s[o],d=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+c*f+l*m-u*d,e[t+1]=l*_+c*d+u*f-a*m,e[t+2]=u*_+c*m+a*d-l*f,e[t+3]=c*_-a*f-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),c=a(i/2),f=a(s/2),d=l(n/2),m=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*m*_,this._y=u*m*f-d*c*_,this._z=u*c*_+d*m*f,this._w=u*c*f-d*m*_;break;case"YXZ":this._x=d*c*f+u*m*_,this._y=u*m*f-d*c*_,this._z=u*c*_-d*m*f,this._w=u*c*f+d*m*_;break;case"ZXY":this._x=d*c*f-u*m*_,this._y=u*m*f+d*c*_,this._z=u*c*_+d*m*f,this._w=u*c*f-d*m*_;break;case"ZYX":this._x=d*c*f-u*m*_,this._y=u*m*f+d*c*_,this._z=u*c*_-d*m*f,this._w=u*c*f+d*m*_;break;case"YZX":this._x=d*c*f+u*m*_,this._y=u*m*f+d*c*_,this._z=u*c*_-d*m*f,this._w=u*c*f-d*m*_;break;case"XZY":this._x=d*c*f-u*m*_,this._y=u*m*f-d*c*_,this._z=u*c*_+d*m*f,this._w=u*c*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=n+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-i)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-u)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+o*a+i*u-s*l,this._y=i*c+o*l+s*a-n*u,this._z=s*c+o*u+n*l-i*a,this._w=o*c-n*a-i*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ka.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ka.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*i-a*n,c=l*n+a*t-s*i,f=l*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=u*l+d*-s+c*-a-f*-o,this.y=c*l+d*-o+f*-s-u*-a,this.z=f*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vs.copy(this).projectOnVector(e),this.sub(vs)}reflect(e){return this.sub(vs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vs=new B,Ka=new fi;class qn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],f=e[l+1],d=e[l+2];c<t&&(t=c),f<n&&(n=f),d<i&&(i=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),f=e.getY(l),d=e.getZ(l);c<t&&(t=c),f<n&&(n=f),d<i&&(i=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Qn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Qn)}else n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox),xs.applyMatrix4(e.matrixWorld),this.union(xs);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qi),_r.subVectors(this.max,qi),vi.subVectors(e.a,qi),xi.subVectors(e.b,qi),bi.subVectors(e.c,qi),Un.subVectors(xi,vi),Bn.subVectors(bi,xi),$n.subVectors(vi,bi);let t=[0,-Un.z,Un.y,0,-Bn.z,Bn.y,0,-$n.z,$n.y,Un.z,0,-Un.x,Bn.z,0,-Bn.x,$n.z,0,-$n.x,-Un.y,Un.x,0,-Bn.y,Bn.x,0,-$n.y,$n.x,0];return!bs(t,vi,xi,bi,_r)||(t=[1,0,0,0,1,0,0,0,1],!bs(t,vi,xi,bi,_r))?!1:(vr.crossVectors(Un,Bn),t=[vr.x,vr.y,vr.z],bs(t,vi,xi,bi,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Qn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ln=[new B,new B,new B,new B,new B,new B,new B,new B],Qn=new B,xs=new qn,vi=new B,xi=new B,bi=new B,Un=new B,Bn=new B,$n=new B,qi=new B,_r=new B,vr=new B,ei=new B;function bs(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ei.fromArray(r,s);const a=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),l=e.dot(ei),u=t.dot(ei),c=n.dot(ei);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Lu=new qn,Yi=new B,Ms=new B;class fr{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yi.subVectors(e,this.center);const t=Yi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Yi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ms.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yi.copy(e.center).add(Ms)),this.expandByPoint(Yi.copy(e.center).sub(Ms))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new B,Ss=new B,xr=new B,kn=new B,ws=new B,br=new B,ys=new B;class Dl{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.direction).multiplyScalar(t).add(this.origin),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ss.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(Ss);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xr),a=kn.dot(this.direction),l=-kn.dot(xr),u=kn.lengthSq(),c=Math.abs(1-o*o);let f,d,m,_;if(c>0)if(f=o*l-a,d=o*a-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const p=1/c;f*=p,d*=p,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(xr).multiplyScalar(d).add(Ss),m}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,i=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,i=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,i,s){ws.subVectors(t,e),br.subVectors(n,e),ys.crossVectors(ws,br);let o=this.direction.dot(ys),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,e);const l=a*this.direction.dot(br.crossVectors(kn,br));if(l<0)return null;const u=a*this.direction.dot(ws.cross(kn));if(u<0||l+u>o)return null;const c=-a*kn.dot(ys);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,u,c,f,d,m,_,p,h){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=c,g[10]=f,g[14]=d,g[3]=m,g[7]=_,g[11]=p,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Mi.setFromMatrixColumn(e,0).length(),s=1/Mi.setFromMatrixColumn(e,1).length(),o=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),u=Math.sin(i),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,m=o*f,_=a*c,p=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=m+_*u,t[5]=d-p*u,t[9]=-a*l,t[2]=p-d*u,t[6]=_+m*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,m=l*f,_=u*c,p=u*f;t[0]=d+p*a,t[4]=_*a-m,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=m*a-_,t[6]=p+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,m=l*f,_=u*c,p=u*f;t[0]=d-p*a,t[4]=-o*f,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*c,t[9]=p-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,m=o*f,_=a*c,p=a*f;t[0]=l*c,t[4]=_*u-m,t[8]=d*u+p,t[1]=l*f,t[5]=p*u+d,t[9]=m*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,_=a*l,p=a*u;t[0]=l*c,t[4]=p-d*f,t[8]=_*f+m,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*f+_,t[10]=d-p*f}else if(e.order==="XZY"){const d=o*l,m=o*u,_=a*l,p=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+p,t[5]=o*c,t[9]=m*f-_,t[2]=_*f-m,t[6]=a*c,t[10]=p*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Du,e,Pu)}lookAt(e,t,n){const i=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Vn.crossVectors(n,qt),Vn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Vn.crossVectors(n,qt)),Vn.normalize(),Mr.crossVectors(qt,Vn),i[0]=Vn.x,i[4]=Mr.x,i[8]=qt.x,i[1]=Vn.y,i[5]=Mr.y,i[9]=qt.y,i[2]=Vn.z,i[6]=Mr.z,i[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],c=n[1],f=n[5],d=n[9],m=n[13],_=n[2],p=n[6],h=n[10],g=n[14],b=n[3],x=n[7],M=n[11],S=n[15],C=i[0],O=i[4],v=i[8],T=i[12],D=i[1],z=i[5],W=i[9],P=i[13],U=i[2],R=i[6],k=i[10],Q=i[14],j=i[3],$=i[7],J=i[11],E=i[15];return s[0]=o*C+a*D+l*U+u*j,s[4]=o*O+a*z+l*R+u*$,s[8]=o*v+a*W+l*k+u*J,s[12]=o*T+a*P+l*Q+u*E,s[1]=c*C+f*D+d*U+m*j,s[5]=c*O+f*z+d*R+m*$,s[9]=c*v+f*W+d*k+m*J,s[13]=c*T+f*P+d*Q+m*E,s[2]=_*C+p*D+h*U+g*j,s[6]=_*O+p*z+h*R+g*$,s[10]=_*v+p*W+h*k+g*J,s[14]=_*T+p*P+h*Q+g*E,s[3]=b*C+x*D+M*U+S*j,s[7]=b*O+x*z+M*R+S*$,s[11]=b*v+x*W+M*k+S*J,s[15]=b*T+x*P+M*Q+S*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],m=e[14],_=e[3],p=e[7],h=e[11],g=e[15];return _*(+s*l*f-i*u*f-s*a*d+n*u*d+i*a*m-n*l*m)+p*(+t*l*m-t*u*d+s*o*d-i*o*m+i*u*c-s*l*c)+h*(+t*u*f-t*a*m-s*o*f+n*o*m+s*a*c-n*u*c)+g*(-i*a*c-t*l*f+t*a*d+i*o*f-n*o*d+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],m=e[11],_=e[12],p=e[13],h=e[14],g=e[15],b=f*h*u-p*d*u+p*l*m-a*h*m-f*l*g+a*d*g,x=_*d*u-c*h*u-_*l*m+o*h*m+c*l*g-o*d*g,M=c*p*u-_*f*u+_*a*m-o*p*m-c*a*g+o*f*g,S=_*f*l-c*p*l-_*a*d+o*p*d+c*a*h-o*f*h,C=t*b+n*x+i*M+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/C;return e[0]=b*O,e[1]=(p*d*s-f*h*s-p*i*m+n*h*m+f*i*g-n*d*g)*O,e[2]=(a*h*s-p*l*s+p*i*u-n*h*u-a*i*g+n*l*g)*O,e[3]=(f*l*s-a*d*s-f*i*u+n*d*u+a*i*m-n*l*m)*O,e[4]=x*O,e[5]=(c*h*s-_*d*s+_*i*m-t*h*m-c*i*g+t*d*g)*O,e[6]=(_*l*s-o*h*s-_*i*u+t*h*u+o*i*g-t*l*g)*O,e[7]=(o*d*s-c*l*s+c*i*u-t*d*u-o*i*m+t*l*m)*O,e[8]=M*O,e[9]=(_*f*s-c*p*s-_*n*m+t*p*m+c*n*g-t*f*g)*O,e[10]=(o*p*s-_*a*s+_*n*u-t*p*u-o*n*g+t*a*g)*O,e[11]=(c*a*s-o*f*s-c*n*u+t*f*u+o*n*m-t*a*m)*O,e[12]=S*O,e[13]=(c*p*i-_*f*i+_*n*d-t*p*d-c*n*h+t*f*h)*O,e[14]=(_*a*i-o*p*i-_*n*l+t*p*l+o*n*h-t*a*h)*O,e[15]=(o*f*i-c*a*i+c*n*l-t*f*l-o*n*d+t*a*d)*O,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+n,u*a-i*l,u*l+i*a,0,u*a+i*l,c*a+n,c*l-i*o,0,u*l-i*a,c*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,d=s*u,m=s*c,_=s*f,p=o*c,h=o*f,g=a*f,b=l*u,x=l*c,M=l*f,S=n.x,C=n.y,O=n.z;return i[0]=(1-(p+g))*S,i[1]=(m+M)*S,i[2]=(_-x)*S,i[3]=0,i[4]=(m-M)*C,i[5]=(1-(d+g))*C,i[6]=(h+b)*C,i[7]=0,i[8]=(_+x)*O,i[9]=(h-b)*O,i[10]=(1-(d+p))*O,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Mi.set(i[0],i[1],i[2]).length();const o=Mi.set(i[4],i[5],i[6]).length(),a=Mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],hn.copy(this);const u=1/s,c=1/o,f=1/a;return hn.elements[0]*=u,hn.elements[1]*=u,hn.elements[2]*=u,hn.elements[4]*=c,hn.elements[5]*=c,hn.elements[6]*=c,hn.elements[8]*=f,hn.elements[9]*=f,hn.elements[10]*=f,t.setFromRotationMatrix(hn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(n-i),c=(t+e)/(t-e),f=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),u=1/(n-i),c=1/(o-s),f=(t+e)*l,d=(n+i)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Mi=new B,hn=new it,Du=new B(0,0,0),Pu=new B(1,1,1),Vn=new B,Mr=new B,qt=new B,Ja=new it,Qa=new fi;class dr{constructor(e=0,t=0,n=0,i=dr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],u=i[5],c=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ja.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ja,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qa.setFromEuler(this),this.setFromQuaternion(Qa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}dr.DefaultOrder="XYZ";dr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class aa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ru=0;const $a=new B,Si=new fi,Pn=new it,Sr=new B,Zi=new B,Iu=new B,Ou=new fi,eo=new B(1,0,0),to=new B(0,1,0),no=new B(0,0,1),zu={type:"added"},io={type:"removed"};class rt extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DefaultUp.clone();const e=new B,t=new dr,n=new fi,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new Kt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=rt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=rt.DefaultMatrixWorldAutoUpdate,this.layers=new aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(eo,e)}rotateY(e){return this.rotateOnAxis(to,e)}rotateZ(e){return this.rotateOnAxis(no,e)}translateOnAxis(e,t){return $a.copy(e).applyQuaternion(this.quaternion),this.position.add($a.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eo,e)}translateY(e){return this.translateOnAxis(to,e)}translateZ(e){return this.translateOnAxis(no,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Zi,Sr,this.up):Pn.lookAt(Sr,Zi,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),Si.setFromRotationMatrix(Pn),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(io)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(io)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,Iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,Ou,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}rt.DefaultUp=new B(0,1,0);rt.DefaultMatrixAutoUpdate=!0;rt.DefaultMatrixWorldAutoUpdate=!0;const pn=new B,Rn=new B,Es=new B,In=new B,wi=new B,yi=new B,ro=new B,As=new B,Ts=new B,Cs=new B;class On{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pn.subVectors(e,t),i.cross(pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){pn.subVectors(i,t),Rn.subVectors(n,t),Es.subVectors(e,t);const o=pn.dot(pn),a=pn.dot(Rn),l=pn.dot(Es),u=Rn.dot(Rn),c=Rn.dot(Es),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(u*l-a*c)*d,_=(o*c-a*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,In),In.x>=0&&In.y>=0&&In.x+In.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,In),l.set(0,0),l.addScaledVector(s,In.x),l.addScaledVector(o,In.y),l.addScaledVector(a,In.z),l}static isFrontFacing(e,t,n,i){return pn.subVectors(n,t),Rn.subVectors(e,t),pn.cross(Rn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),pn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return On.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;wi.subVectors(i,n),yi.subVectors(s,n),As.subVectors(e,n);const l=wi.dot(As),u=yi.dot(As);if(l<=0&&u<=0)return t.copy(n);Ts.subVectors(e,i);const c=wi.dot(Ts),f=yi.dot(Ts);if(c>=0&&f<=c)return t.copy(i);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(n).addScaledVector(wi,o);Cs.subVectors(e,s);const m=wi.dot(Cs),_=yi.dot(Cs);if(_>=0&&m<=_)return t.copy(s);const p=m*u-l*_;if(p<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(n).addScaledVector(yi,a);const h=c*_-m*f;if(h<=0&&f-c>=0&&m-_>=0)return ro.subVectors(s,i),a=(f-c)/(f-c+(m-_)),t.copy(i).addScaledVector(ro,a);const g=1/(h+p+d);return o=p*g,a=d*g,t.copy(n).addScaledVector(wi,o).addScaledVector(yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Fu=0;class Hi extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=Oi,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=bl,this.blendDst=Ml,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pl extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new B,wr=new Le;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ys,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ys&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Rl extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Il extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vt extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nu=0;const rn=new it,Ls=new rt,Ei=new B,Yt=new qn,Ki=new qn,St=new B;class fn extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(El(e)?Il:Rl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Kt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return Ls.lookAt(e),Ls.updateMatrix(),this.applyMatrix4(Ls.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ki.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(Yt.min,Ki.min),Yt.expandByPoint(St),St.addVectors(Yt.max,Ki.max),Yt.expandByPoint(St)):(Yt.expandByPoint(Ki.min),Yt.expandByPoint(Ki.max))}Yt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(St));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)St.fromBufferAttribute(a,u),l&&(Ei.fromBufferAttribute(e,u),St.add(Ei)),i=Math.max(i,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let D=0;D<a;D++)u[D]=new B,c[D]=new B;const f=new B,d=new B,m=new B,_=new Le,p=new Le,h=new Le,g=new B,b=new B;function x(D,z,W){f.fromArray(i,D*3),d.fromArray(i,z*3),m.fromArray(i,W*3),_.fromArray(o,D*2),p.fromArray(o,z*2),h.fromArray(o,W*2),d.sub(f),m.sub(f),p.sub(_),h.sub(_);const P=1/(p.x*h.y-h.x*p.y);isFinite(P)&&(g.copy(d).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(P),b.copy(m).multiplyScalar(p.x).addScaledVector(d,-h.x).multiplyScalar(P),u[D].add(g),u[z].add(g),u[W].add(g),c[D].add(b),c[z].add(b),c[W].add(b))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let D=0,z=M.length;D<z;++D){const W=M[D],P=W.start,U=W.count;for(let R=P,k=P+U;R<k;R+=3)x(n[R+0],n[R+1],n[R+2])}const S=new B,C=new B,O=new B,v=new B;function T(D){O.fromArray(s,D*3),v.copy(O);const z=u[D];S.copy(z),S.sub(O.multiplyScalar(O.dot(z))).normalize(),C.crossVectors(v,z);const P=C.dot(c[D])<0?-1:1;l[D*4]=S.x,l[D*4+1]=S.y,l[D*4+2]=S.z,l[D*4+3]=P}for(let D=0,z=M.length;D<z;++D){const W=M[D],P=W.start,U=W.count;for(let R=P,k=P+U;R<k;R+=3)T(n[R+0]),T(n[R+1]),T(n[R+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new B,s=new B,o=new B,a=new B,l=new B,u=new B,c=new B,f=new B;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),p=e.getX(d+1),h=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),c.subVectors(o,s),f.subVectors(i,s),c.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),u.fromBufferAttribute(n,h),a.add(c),l.add(c),u.add(c),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(h,u.x,u.y,u.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),f.subVectors(i,s),c.cross(f),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let m=0,_=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*c;for(let g=0;g<c;g++)d[_++]=u[m++]}return new Qt(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],u=e(l,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(i[l]=c,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const c=i[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,m=f.length;d<m;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const so=new it,Ai=new Dl,Ds=new fr,Ji=new B,Qi=new B,$i=new B,Ps=new B,yr=new B,Er=new Le,Ar=new Le,Tr=new Le,Rs=new B,Cr=new B;let Jt=class extends rt{constructor(e=new fn,t=new Pl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){yr.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Ps.fromBufferAttribute(f,e),o?yr.addScaledVector(Ps,c):yr.addScaledVector(Ps.sub(t),c))}t.add(yr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),e.ray.intersectsSphere(Ds)===!1)||(so.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(so),n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,u=n.attributes.uv,c=n.attributes.uv2,f=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,_=f.length;m<_;m++){const p=f[m],h=i[p.materialIndex],g=Math.max(p.start,d.start),b=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=g,M=b;x<M;x+=3){const S=a.getX(x),C=a.getX(x+1),O=a.getX(x+2);o=Lr(this,h,e,Ai,u,c,S,C,O),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=m,h=_;p<h;p+=3){const g=a.getX(p),b=a.getX(p+1),x=a.getX(p+2);o=Lr(this,i,e,Ai,u,c,g,b,x),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,_=f.length;m<_;m++){const p=f[m],h=i[p.materialIndex],g=Math.max(p.start,d.start),b=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=g,M=b;x<M;x+=3){const S=x,C=x+1,O=x+2;o=Lr(this,h,e,Ai,u,c,S,C,O),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=m,h=_;p<h;p+=3){const g=p,b=p+1,x=p+2;o=Lr(this,i,e,Ai,u,c,g,b,x),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}};function Uu(r,e,t,n,i,s,o,a){let l;if(e.side===ln?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ci,a),l===null)return null;Cr.copy(a),Cr.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(Cr);return u<t.near||u>t.far?null:{distance:u,point:Cr.clone(),object:r}}function Lr(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,Ji),r.getVertexPosition(a,Qi),r.getVertexPosition(l,$i);const u=Uu(r,e,t,n,Ji,Qi,$i,Rs);if(u){i&&(Er.fromBufferAttribute(i,o),Ar.fromBufferAttribute(i,a),Tr.fromBufferAttribute(i,l),u.uv=On.getUV(Rs,Ji,Qi,$i,Er,Ar,Tr,new Le)),s&&(Er.fromBufferAttribute(s,o),Ar.fromBufferAttribute(s,a),Tr.fromBufferAttribute(s,l),u.uv2=On.getUV(Rs,Ji,Qi,$i,Er,Ar,Tr,new Le));const c={a:o,b:a,c:l,normal:new B,materialIndex:0};On.getNormal(Ji,Qi,$i,c.normal),u.face=c}return u}class hr extends fn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(f,2));function _(p,h,g,b,x,M,S,C,O,v,T){const D=M/O,z=S/v,W=M/2,P=S/2,U=C/2,R=O+1,k=v+1;let Q=0,j=0;const $=new B;for(let J=0;J<k;J++){const E=J*z-P;for(let I=0;I<R;I++){const re=I*D-W;$[p]=re*b,$[h]=E*x,$[g]=U,u.push($.x,$.y,$.z),$[p]=0,$[h]=0,$[g]=C>0?1:-1,c.push($.x,$.y,$.z),f.push(I/O),f.push(1-J/v),Q+=1}}for(let J=0;J<v;J++)for(let E=0;E<O;E++){const I=d+E+R*J,re=d+E+R*(J+1),ee=d+(E+1)+R*(J+1),ae=d+(E+1)+R*J;l.push(I,re,ae),l.push(re,ee,ae),j+=6}a.addGroup(m,j,T),m+=j,d+=Q}}static fromJSON(e){return new hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(r){const e={};for(let t=0;t<r.length;t++){const n=ki(r[t]);for(const i in n)e[i]=n[i]}return e}function Bu(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ol(r){return r.getRenderTarget()===null&&r.outputEncoding===tt?Sn:lr}const Yr={clone:ki,merge:Bt};var ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ku,this.fragmentShader=Vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=Bu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oa extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}let Zt=class extends oa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/u,i*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};const Ti=-90,Ci=1;class Gu extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Zt(Ti,Ci,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Zt(Ti,Ci,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Zt(Ti,Ci,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Zt(Ti,Ci,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Zt(Ti,Ci,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new Zt(Ti,Ci,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=yn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class zl extends Wt{constructor(e,t,n,i,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Ni,super(e,t,n,i,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hu extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new hr(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Wn});s.uniforms.tEquirect.value=t;const o=new Jt(i,s),a=t.minFilter;return t.minFilter===ar&&(t.minFilter=sn),new Gu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Is=new B,Wu=new B,ju=new Kt;class ti{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Is.subVectors(n,t).cross(Wu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Is),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ju.getNormalMatrix(e),i=this.coplanarPoint(Is).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new fr,Dr=new B;class Zr{constructor(e=new ti,t=new ti,n=new ti,i=new ti,s=new ti,o=new ti){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],u=n[5],c=n[6],f=n[7],d=n[8],m=n[9],_=n[10],p=n[11],h=n[12],g=n[13],b=n[14],x=n[15];return t[0].setComponents(a-i,f-l,p-d,x-h).normalize(),t[1].setComponents(a+i,f+l,p+d,x+h).normalize(),t[2].setComponents(a+s,f+u,p+m,x+g).normalize(),t[3].setComponents(a-s,f-u,p-m,x-g).normalize(),t[4].setComponents(a-o,f-c,p-_,x-b).normalize(),t[5].setComponents(a+o,f+c,p+_,x+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Dr.x=i.normal.x>0?e.max.x:e.min.x,Dr.y=i.normal.y>0?e.max.y:e.min.y,Dr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fl(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Xu(r,e){const t=e.isWebGL2,n=new WeakMap;function i(u,c){const f=u.array,d=u.usage,m=r.createBuffer();r.bindBuffer(c,m),r.bufferData(c,f,d),u.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,m=c.updateRange;r.bindBuffer(f,u),m.count===-1?r.bufferSubData(f,0,d):(t?r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);c&&(r.deleteBuffer(c.buffer),n.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);f===void 0?n.set(u,i(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class la extends fn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),u=a+1,c=l+1,f=e/a,d=t/l,m=[],_=[],p=[],h=[];for(let g=0;g<c;g++){const b=g*d-o;for(let x=0;x<u;x++){const M=x*f-s;_.push(M,-b,0),p.push(0,0,1),h.push(x/a),h.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){const x=b+u*g,M=b+u*(g+1),S=b+1+u*(g+1),C=b+1+u*g;m.push(x,M,C),m.push(M,S,C)}this.setIndex(m),this.setAttribute("position",new Vt(_,3)),this.setAttribute("normal",new Vt(p,3)),this.setAttribute("uv",new Vt(h,2))}static fromJSON(e){return new la(e.width,e.height,e.widthSegments,e.heightSegments)}}var qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ju=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$u="vec3 transformed = vec3( position );",ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,nf=`#ifdef USE_IRIDESCENCE
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
#endif`,rf=`#ifdef USE_BUMPMAP
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hf=`#define PI 3.141592653589793
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
}`,pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mf=`vec3 transformedNormal = objectNormal;
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
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pf=`#ifdef USE_GRADIENTMAP
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
}`,Rf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,If=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
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
#endif`,Nf=`#if defined( USE_ENVMAP )
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
#endif`,Uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gf=`PhysicalMaterial material;
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
#endif`,Hf=`struct PhysicalMaterial {
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
}`,Wf=`
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
#endif`,jf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,qf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,id=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rd=`#ifdef USE_MORPHNORMALS
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
#endif`,sd=`#ifdef USE_MORPHTARGETS
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
#endif`,ad=`#ifdef USE_MORPHTARGETS
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
#endif`,od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,ld=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dd=`#ifdef USE_NORMALMAP
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
#endif`,hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Td=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cd=`float getShadowMask() {
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
}`,Ld=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dd=`#ifdef USE_SKINNING
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
#endif`,Pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rd=`#ifdef USE_SKINNING
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
#endif`,Id=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nd=`#ifdef USE_TRANSMISSION
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
#endif`,Ud=`#ifdef USE_TRANSMISSION
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
#endif`,Bd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,kd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Vd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Gd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Hd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Wd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qd=`uniform sampler2D t2D;
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
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qd=`#include <common>
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
}`,$d=`#if DEPTH_PACKING == 3200
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
}`,eh=`#define DISTANCE
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
}`,th=`#define DISTANCE
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
}`,nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ih=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rh=`uniform float scale;
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
}`,sh=`uniform vec3 diffuse;
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
}`,ah=`#include <common>
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
}`,oh=`uniform vec3 diffuse;
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
}`,lh=`#define LAMBERT
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
}`,ch=`#define LAMBERT
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
}`,uh=`#define MATCAP
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
}`,fh=`#define MATCAP
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
}`,dh=`#define NORMAL
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
}`,hh=`#define NORMAL
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
}`,ph=`#define PHONG
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
}`,mh=`#define PHONG
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
}`,gh=`#define STANDARD
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
}`,_h=`#define STANDARD
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
}`,vh=`#define TOON
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
}`,xh=`#define TOON
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
}`,bh=`uniform float size;
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
}`,Mh=`uniform vec3 diffuse;
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
}`,Sh=`#include <common>
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
}`,wh=`uniform vec3 color;
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
}`,yh=`uniform float rotation;
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
}`,Eh=`uniform vec3 diffuse;
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
}`,Pe={alphamap_fragment:qu,alphamap_pars_fragment:Yu,alphatest_fragment:Zu,alphatest_pars_fragment:Ku,aomap_fragment:Ju,aomap_pars_fragment:Qu,begin_vertex:$u,beginnormal_vertex:ef,bsdfs:tf,iridescence_fragment:nf,bumpmap_pars_fragment:rf,clipping_planes_fragment:sf,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:of,clipping_planes_vertex:lf,color_fragment:cf,color_pars_fragment:uf,color_pars_vertex:ff,color_vertex:df,common:hf,cube_uv_reflection_fragment:pf,defaultnormal_vertex:mf,displacementmap_pars_vertex:gf,displacementmap_vertex:_f,emissivemap_fragment:vf,emissivemap_pars_fragment:xf,encodings_fragment:bf,encodings_pars_fragment:Mf,envmap_fragment:Sf,envmap_common_pars_fragment:wf,envmap_pars_fragment:yf,envmap_pars_vertex:Ef,envmap_physical_pars_fragment:Nf,envmap_vertex:Af,fog_vertex:Tf,fog_pars_vertex:Cf,fog_fragment:Lf,fog_pars_fragment:Df,gradientmap_pars_fragment:Pf,lightmap_fragment:Rf,lightmap_pars_fragment:If,lights_lambert_fragment:Of,lights_lambert_pars_fragment:zf,lights_pars_begin:Ff,lights_toon_fragment:Uf,lights_toon_pars_fragment:Bf,lights_phong_fragment:kf,lights_phong_pars_fragment:Vf,lights_physical_fragment:Gf,lights_physical_pars_fragment:Hf,lights_fragment_begin:Wf,lights_fragment_maps:jf,lights_fragment_end:Xf,logdepthbuf_fragment:qf,logdepthbuf_pars_fragment:Yf,logdepthbuf_pars_vertex:Zf,logdepthbuf_vertex:Kf,map_fragment:Jf,map_pars_fragment:Qf,map_particle_fragment:$f,map_particle_pars_fragment:ed,metalnessmap_fragment:td,metalnessmap_pars_fragment:nd,morphcolor_vertex:id,morphnormal_vertex:rd,morphtarget_pars_vertex:sd,morphtarget_vertex:ad,normal_fragment_begin:od,normal_fragment_maps:ld,normal_pars_fragment:cd,normal_pars_vertex:ud,normal_vertex:fd,normalmap_pars_fragment:dd,clearcoat_normal_fragment_begin:hd,clearcoat_normal_fragment_maps:pd,clearcoat_pars_fragment:md,iridescence_pars_fragment:gd,output_fragment:_d,packing:vd,premultiplied_alpha_fragment:xd,project_vertex:bd,dithering_fragment:Md,dithering_pars_fragment:Sd,roughnessmap_fragment:wd,roughnessmap_pars_fragment:yd,shadowmap_pars_fragment:Ed,shadowmap_pars_vertex:Ad,shadowmap_vertex:Td,shadowmask_pars_fragment:Cd,skinbase_vertex:Ld,skinning_pars_vertex:Dd,skinning_vertex:Pd,skinnormal_vertex:Rd,specularmap_fragment:Id,specularmap_pars_fragment:Od,tonemapping_fragment:zd,tonemapping_pars_fragment:Fd,transmission_fragment:Nd,transmission_pars_fragment:Ud,uv_pars_fragment:Bd,uv_pars_vertex:kd,uv_vertex:Vd,uv2_pars_fragment:Gd,uv2_pars_vertex:Hd,uv2_vertex:Wd,worldpos_vertex:jd,background_vert:Xd,background_frag:qd,backgroundCube_vert:Yd,backgroundCube_frag:Zd,cube_vert:Kd,cube_frag:Jd,depth_vert:Qd,depth_frag:$d,distanceRGBA_vert:eh,distanceRGBA_frag:th,equirect_vert:nh,equirect_frag:ih,linedashed_vert:rh,linedashed_frag:sh,meshbasic_vert:ah,meshbasic_frag:oh,meshlambert_vert:lh,meshlambert_frag:ch,meshmatcap_vert:uh,meshmatcap_frag:fh,meshnormal_vert:dh,meshnormal_frag:hh,meshphong_vert:ph,meshphong_frag:mh,meshphysical_vert:gh,meshphysical_frag:_h,meshtoon_vert:vh,meshtoon_frag:xh,points_vert:bh,points_frag:Mh,shadow_vert:Sh,shadow_frag:wh,sprite_vert:yh,sprite_frag:Eh},oe={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Kt},uv2Transform:{value:new Kt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Kt}}},Ht={basic:{uniforms:Bt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Bt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Bt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Bt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Bt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Bt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Bt([oe.points,oe.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Bt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Bt([oe.common,oe.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Bt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Bt([oe.sprite,oe.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:Bt([oe.common,oe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:Bt([oe.lights,oe.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Ht.physical={uniforms:Bt([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Le(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const Pr={r:0,b:0,g:0};function Ah(r,e,t,n,i,s,o){const a=new Ne(0);let l=s===!0?0:1,u,c,f=null,d=0,m=null;function _(h,g){let b=!1,x=g.isScene===!0?g.background:null;x&&x.isTexture&&(x=(g.backgroundBlurriness>0?t:e).get(x));const M=r.xr,S=M.getSession&&M.getSession();S&&S.environmentBlendMode==="additive"&&(x=null),x===null?p(a,l):x&&x.isColor&&(p(x,1),b=!0),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===qr)?(c===void 0&&(c=new Jt(new hr(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:ki(Ht.backgroundCube.uniforms),vertexShader:Ht.backgroundCube.vertexShader,fragmentShader:Ht.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,O,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=x.encoding!==tt,(f!==x||d!==x.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,m=r.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Jt(new la(2,2),new An({name:"BackgroundMaterial",uniforms:ki(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=x.encoding!==tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,m=r.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null))}function p(h,g){h.getRGB(Pr,Ol(r)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(h,g=1){a.set(h),l=g,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,p(a,l)},render:_}}function Th(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=h(null);let u=l,c=!1;function f(U,R,k,Q,j){let $=!1;if(o){const J=p(Q,k,R);u!==J&&(u=J,m(u.object)),$=g(U,Q,k,j),$&&b(U,Q,k,j)}else{const J=R.wireframe===!0;(u.geometry!==Q.id||u.program!==k.id||u.wireframe!==J)&&(u.geometry=Q.id,u.program=k.id,u.wireframe=J,$=!0)}j!==null&&t.update(j,34963),($||c)&&(c=!1,v(U,R,k,Q),j!==null&&r.bindBuffer(34963,t.get(j).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(U){return n.isWebGL2?r.bindVertexArray(U):s.bindVertexArrayOES(U)}function _(U){return n.isWebGL2?r.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function p(U,R,k){const Q=k.wireframe===!0;let j=a[U.id];j===void 0&&(j={},a[U.id]=j);let $=j[R.id];$===void 0&&($={},j[R.id]=$);let J=$[Q];return J===void 0&&(J=h(d()),$[Q]=J),J}function h(U){const R=[],k=[],Q=[];for(let j=0;j<i;j++)R[j]=0,k[j]=0,Q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:Q,object:U,attributes:{},index:null}}function g(U,R,k,Q){const j=u.attributes,$=R.attributes;let J=0;const E=k.getAttributes();for(const I in E)if(E[I].location>=0){const ee=j[I];let ae=$[I];if(ae===void 0&&(I==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),I==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor)),ee===void 0||ee.attribute!==ae||ae&&ee.data!==ae.data)return!0;J++}return u.attributesNum!==J||u.index!==Q}function b(U,R,k,Q){const j={},$=R.attributes;let J=0;const E=k.getAttributes();for(const I in E)if(E[I].location>=0){let ee=$[I];ee===void 0&&(I==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),I==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor));const ae={};ae.attribute=ee,ee&&ee.data&&(ae.data=ee.data),j[I]=ae,J++}u.attributes=j,u.attributesNum=J,u.index=Q}function x(){const U=u.newAttributes;for(let R=0,k=U.length;R<k;R++)U[R]=0}function M(U){S(U,0)}function S(U,R){const k=u.newAttributes,Q=u.enabledAttributes,j=u.attributeDivisors;k[U]=1,Q[U]===0&&(r.enableVertexAttribArray(U),Q[U]=1),j[U]!==R&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,R),j[U]=R)}function C(){const U=u.newAttributes,R=u.enabledAttributes;for(let k=0,Q=R.length;k<Q;k++)R[k]!==U[k]&&(r.disableVertexAttribArray(k),R[k]=0)}function O(U,R,k,Q,j,$){n.isWebGL2===!0&&(k===5124||k===5125)?r.vertexAttribIPointer(U,R,k,j,$):r.vertexAttribPointer(U,R,k,Q,j,$)}function v(U,R,k,Q){if(n.isWebGL2===!1&&(U.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const j=Q.attributes,$=k.getAttributes(),J=R.defaultAttributeValues;for(const E in $){const I=$[E];if(I.location>=0){let re=j[E];if(re===void 0&&(E==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),E==="instanceColor"&&U.instanceColor&&(re=U.instanceColor)),re!==void 0){const ee=re.normalized,ae=re.itemSize,N=t.get(re);if(N===void 0)continue;const fe=N.buffer,_e=N.type,Te=N.bytesPerElement;if(re.isInterleavedBufferAttribute){const me=re.data,je=me.stride,X=re.offset;if(me.isInstancedInterleavedBuffer){for(let ce=0;ce<I.locationSize;ce++)S(I.location+ce,me.meshPerAttribute);U.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ce=0;ce<I.locationSize;ce++)M(I.location+ce);r.bindBuffer(34962,fe);for(let ce=0;ce<I.locationSize;ce++)O(I.location+ce,ae/I.locationSize,_e,ee,je*Te,(X+ae/I.locationSize*ce)*Te)}else{if(re.isInstancedBufferAttribute){for(let me=0;me<I.locationSize;me++)S(I.location+me,re.meshPerAttribute);U.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let me=0;me<I.locationSize;me++)M(I.location+me);r.bindBuffer(34962,fe);for(let me=0;me<I.locationSize;me++)O(I.location+me,ae/I.locationSize,_e,ee,ae*Te,ae/I.locationSize*me*Te)}}else if(J!==void 0){const ee=J[E];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(I.location,ee);break;case 3:r.vertexAttrib3fv(I.location,ee);break;case 4:r.vertexAttrib4fv(I.location,ee);break;default:r.vertexAttrib1fv(I.location,ee)}}}}C()}function T(){W();for(const U in a){const R=a[U];for(const k in R){const Q=R[k];for(const j in Q)_(Q[j].object),delete Q[j];delete R[k]}delete a[U]}}function D(U){if(a[U.id]===void 0)return;const R=a[U.id];for(const k in R){const Q=R[k];for(const j in Q)_(Q[j].object),delete Q[j];delete R[k]}delete a[U.id]}function z(U){for(const R in a){const k=a[R];if(k[U.id]===void 0)continue;const Q=k[U.id];for(const j in Q)_(Q[j].object),delete Q[j];delete k[U.id]}}function W(){P(),c=!0,u!==l&&(u=l,m(u.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:W,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:M,disableUnusedAttributes:C}}function Ch(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,c){r.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,u,c,f),t.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Lh(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(O){if(O==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),_=r.getParameter(34076),p=r.getParameter(34921),h=r.getParameter(36347),g=r.getParameter(36348),b=r.getParameter(36349),x=d>0,M=o||e.has("OES_texture_float"),S=x&&M,C=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:C}}function Dh(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ti,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const _=f.length!==0||d||n!==0||i;return i=d,t=c(f,m,0),n=f.length,_},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,d,m){const _=f.clippingPlanes,p=f.clipIntersection,h=f.clipShadows,g=r.get(f);if(!i||_===null||_.length===0||s&&!h)s?c(null):u();else{const b=s?0:n,x=b*4;let M=g.clippingState||null;l.value=M,M=c(_,d,x,m);for(let S=0;S!==x;++S)M[S]=t[S];g.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(f,d,m,_){const p=f!==null?f.length:0;let h=null;if(p!==0){if(h=l.value,_!==!0||h===null){const g=m+p*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(h===null||h.length<g)&&(h=new Float32Array(g));for(let x=0,M=m;x!==p;++x,M+=4)o.copy(f[x]).applyMatrix4(b,a),o.normal.toArray(h,M),h[M+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function Ph(r){let e=new WeakMap;function t(o,a){return a===Ws?o.mapping=Ni:a===js&&(o.mapping=Ui),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ws||a===js)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Hu(l.height/2);return u.fromEquirectangularTexture(r,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ca extends oa{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ri=4,ao=[.125,.215,.35,.446,.526,.582],ii=20,Os=new ca,oo=new Ne;let zs=null;const ni=(1+Math.sqrt(5))/2,Di=1/ni,lo=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,ni,Di),new B(0,ni,-Di),new B(Di,0,ni),new B(-Di,0,ni),new B(ni,Di,0),new B(-ni,Di,0)];class co{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){zs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ho(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zs),e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:or,format:vn,encoding:jn,depthBuffer:!1},i=uo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rh(s)),this._blurMaterial=Ih(s,e,t)}return i}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,Os)}_sceneToCubeUV(e,t,n,i){const a=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(oo),c.toneMapping=yn,c.autoClear=!1;const m=new Pl({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new Jt(new hr,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(oo),p=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):b===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const x=this._cubeSize;Rr(i,b*x,g>2?x:0,x,x),c.setRenderTarget(i),p&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ni||e.mapping===Ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ho()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fo());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Os)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=lo[(i-1)%lo.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Jt(this._lodPlanes[i],u),d=u.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ii-1),p=s/_,h=isFinite(s)?1+Math.floor(c*p):ii;h>ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${ii}`);const g=[];let b=0;for(let O=0;O<ii;++O){const v=O/p,T=Math.exp(-v*v/2);g.push(T),O===0?b+=T:O<h&&(b+=2*T)}for(let O=0;O<g.length;O++)g[O]=g[O]/b;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const M=this._sizeLods[i],S=3*M*(i>x-Ri?i-x+Ri:0),C=4*(this._cubeSize-M);Rr(t,S,C,3*M,2*M),l.setRenderTarget(t),l.render(f,Os)}}function Rh(r){const e=[],t=[],n=[];let i=r;const s=r-Ri+1+ao.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Ri?l=ao[o-r+Ri-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,_=6,p=3,h=2,g=1,b=new Float32Array(p*_*m),x=new Float32Array(h*_*m),M=new Float32Array(g*_*m);for(let C=0;C<m;C++){const O=C%3*2/3-1,v=C>2?0:-1,T=[O,v,0,O+2/3,v,0,O+2/3,v+1,0,O,v,0,O+2/3,v+1,0,O,v+1,0];b.set(T,p*_*C),x.set(d,h*_*C);const D=[C,C,C,C,C,C];M.set(D,g*_*C)}const S=new fn;S.setAttribute("position",new Qt(b,p)),S.setAttribute("uv",new Qt(x,h)),S.setAttribute("faceIndex",new Qt(M,g)),e.push(S),i>Ri&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uo(r,e,t){const n=new Xn(r,e,t);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ih(r,e,t){const n=new Float32Array(ii),i=new B(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ua(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function fo(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ua(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ho(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ua(){return`

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
	`}function Oh(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ws||l===js,c=l===Ni||l===Ui;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new co(r)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&i(f)){t===null&&(t=new co(r));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function zh(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Fh(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],34962);const m=f.morphAttributes;for(const _ in m){const p=m[_];for(let h=0,g=p.length;h<g;h++)e.update(p[h],34962)}}function u(f){const d=[],m=f.index,_=f.attributes.position;let p=0;if(m!==null){const b=m.array;p=m.version;for(let x=0,M=b.length;x<M;x+=3){const S=b[x+0],C=b[x+1],O=b[x+2];d.push(S,C,C,O,O,S)}}else{const b=_.array;p=_.version;for(let x=0,M=b.length/3-1;x<M;x+=3){const S=x+0,C=x+1,O=x+2;d.push(S,C,C,O,O,S)}}const h=new(El(d)?Il:Rl)(d,1);h.version=p;const g=s.get(f);g&&e.remove(g),s.set(f,h)}function c(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function Nh(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,m){r.drawElements(s,m,a,d*l),t.update(m,s,1)}function f(d,m,_){if(_===0)return;let p,h;if(i)p=r,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,m,a,d*l,_),t.update(m,s,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function Uh(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Bh(r,e){return r[0]-e[0]}function kh(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Vh(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new at,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f,d){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=_!==void 0?_.length:0;let h=s.get(c);if(h===void 0||h.count!==p){let R=function(){P.dispose(),s.delete(c),c.removeEventListener("dispose",R)};h!==void 0&&h.texture.dispose();const x=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,C=c.morphAttributes.position||[],O=c.morphAttributes.normal||[],v=c.morphAttributes.color||[];let T=0;x===!0&&(T=1),M===!0&&(T=2),S===!0&&(T=3);let D=c.attributes.position.count*T,z=1;D>e.maxTextureSize&&(z=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const W=new Float32Array(D*z*4*p),P=new Ll(W,D,z,p);P.type=si,P.needsUpdate=!0;const U=T*4;for(let k=0;k<p;k++){const Q=C[k],j=O[k],$=v[k],J=D*z*4*k;for(let E=0;E<Q.count;E++){const I=E*U;x===!0&&(o.fromBufferAttribute(Q,E),W[J+I+0]=o.x,W[J+I+1]=o.y,W[J+I+2]=o.z,W[J+I+3]=0),M===!0&&(o.fromBufferAttribute(j,E),W[J+I+4]=o.x,W[J+I+5]=o.y,W[J+I+6]=o.z,W[J+I+7]=0),S===!0&&(o.fromBufferAttribute($,E),W[J+I+8]=o.x,W[J+I+9]=o.y,W[J+I+10]=o.z,W[J+I+11]=$.itemSize===4?o.w:1)}}h={count:p,texture:P,size:new Le(D,z)},s.set(c,h),c.addEventListener("dispose",R)}let g=0;for(let x=0;x<m.length;x++)g+=m[x];const b=c.morphTargetsRelative?1:1-g;d.getUniforms().setValue(r,"morphTargetBaseInfluence",b),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}else{const _=m===void 0?0:m.length;let p=n[c.id];if(p===void 0||p.length!==_){p=[];for(let M=0;M<_;M++)p[M]=[M,0];n[c.id]=p}for(let M=0;M<_;M++){const S=p[M];S[0]=M,S[1]=m[M]}p.sort(kh);for(let M=0;M<8;M++)M<_&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Bh);const h=c.morphAttributes.position,g=c.morphAttributes.normal;let b=0;for(let M=0;M<8;M++){const S=a[M],C=S[0],O=S[1];C!==Number.MAX_SAFE_INTEGER&&O?(h&&c.getAttribute("morphTarget"+M)!==h[C]&&c.setAttribute("morphTarget"+M,h[C]),g&&c.getAttribute("morphNormal"+M)!==g[C]&&c.setAttribute("morphNormal"+M,g[C]),i[M]=O,b+=O):(h&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),g&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),i[M]=0)}const x=c.morphTargetsRelative?1:1-b;d.getUniforms().setValue(r,"morphTargetBaseInfluence",x),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Gh(r,e,t,n){let i=new WeakMap;function s(l){const u=n.render.frame,c=l.geometry,f=e.get(l,c);return i.get(f)!==u&&(e.update(f),i.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){i=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Nl=new Wt,Ul=new Ll,Bl=new Cu,kl=new zl,po=[],mo=[],go=new Float32Array(16),_o=new Float32Array(9),vo=new Float32Array(4);function Wi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=po[i];if(s===void 0&&(s=new Float32Array(i),po[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function vt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function xt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Kr(r,e){let t=mo[e];t===void 0&&(t=new Int32Array(e),mo[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Hh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Wh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;r.uniform2fv(this.addr,e),xt(t,e)}}function jh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;r.uniform3fv(this.addr,e),xt(t,e)}}function Xh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;r.uniform4fv(this.addr,e),xt(t,e)}}function qh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;vo.set(n),r.uniformMatrix2fv(this.addr,!1,vo),xt(t,n)}}function Yh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;_o.set(n),r.uniformMatrix3fv(this.addr,!1,_o),xt(t,n)}}function Zh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;go.set(n),r.uniformMatrix4fv(this.addr,!1,go),xt(t,n)}}function Kh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Jh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;r.uniform2iv(this.addr,e),xt(t,e)}}function Qh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;r.uniform3iv(this.addr,e),xt(t,e)}}function $h(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;r.uniform4iv(this.addr,e),xt(t,e)}}function ep(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function tp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;r.uniform2uiv(this.addr,e),xt(t,e)}}function np(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;r.uniform3uiv(this.addr,e),xt(t,e)}}function ip(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;r.uniform4uiv(this.addr,e),xt(t,e)}}function rp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Nl,i)}function sp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Bl,i)}function ap(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kl,i)}function op(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ul,i)}function lp(r){switch(r){case 5126:return Hh;case 35664:return Wh;case 35665:return jh;case 35666:return Xh;case 35674:return qh;case 35675:return Yh;case 35676:return Zh;case 5124:case 35670:return Kh;case 35667:case 35671:return Jh;case 35668:case 35672:return Qh;case 35669:case 35673:return $h;case 5125:return ep;case 36294:return tp;case 36295:return np;case 36296:return ip;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return sp;case 35680:case 36300:case 36308:case 36293:return ap;case 36289:case 36303:case 36311:case 36292:return op}}function cp(r,e){r.uniform1fv(this.addr,e)}function up(r,e){const t=Wi(e,this.size,2);r.uniform2fv(this.addr,t)}function fp(r,e){const t=Wi(e,this.size,3);r.uniform3fv(this.addr,t)}function dp(r,e){const t=Wi(e,this.size,4);r.uniform4fv(this.addr,t)}function hp(r,e){const t=Wi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function pp(r,e){const t=Wi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function mp(r,e){const t=Wi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function gp(r,e){r.uniform1iv(this.addr,e)}function _p(r,e){r.uniform2iv(this.addr,e)}function vp(r,e){r.uniform3iv(this.addr,e)}function xp(r,e){r.uniform4iv(this.addr,e)}function bp(r,e){r.uniform1uiv(this.addr,e)}function Mp(r,e){r.uniform2uiv(this.addr,e)}function Sp(r,e){r.uniform3uiv(this.addr,e)}function wp(r,e){r.uniform4uiv(this.addr,e)}function yp(r,e,t){const n=this.cache,i=e.length,s=Kr(t,i);vt(n,s)||(r.uniform1iv(this.addr,s),xt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Nl,s[o])}function Ep(r,e,t){const n=this.cache,i=e.length,s=Kr(t,i);vt(n,s)||(r.uniform1iv(this.addr,s),xt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Bl,s[o])}function Ap(r,e,t){const n=this.cache,i=e.length,s=Kr(t,i);vt(n,s)||(r.uniform1iv(this.addr,s),xt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||kl,s[o])}function Tp(r,e,t){const n=this.cache,i=e.length,s=Kr(t,i);vt(n,s)||(r.uniform1iv(this.addr,s),xt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ul,s[o])}function Cp(r){switch(r){case 5126:return cp;case 35664:return up;case 35665:return fp;case 35666:return dp;case 35674:return hp;case 35675:return pp;case 35676:return mp;case 5124:case 35670:return gp;case 35667:case 35671:return _p;case 35668:case 35672:return vp;case 35669:case 35673:return xp;case 5125:return bp;case 36294:return Mp;case 36295:return Sp;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Tp}}class Lp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=lp(t.type)}}class Dp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Cp(t.type)}}class Pp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Fs=/(\w+)(\])?(\[|\.)?/g;function xo(r,e){r.seq.push(e),r.map[e.id]=e}function Rp(r,e,t){const n=r.name,i=n.length;for(Fs.lastIndex=0;;){const s=Fs.exec(n),o=Fs.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===i){xo(t,u===void 0?new Lp(a,r,e):new Dp(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Pp(a),xo(t,f)),t=f}}}class kr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Rp(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function bo(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Ip=0;function Op(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function zp(r){switch(r){case jn:return["Linear","( value )"];case tt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Mo(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Op(r.getShaderSource(e),o)}else return i}function Fp(r,e){const t=zp(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Np(r,e){let t;switch(e){case Gc:t="Linear";break;case Hc:t="Reinhard";break;case Wc:t="OptimizedCineon";break;case Sl:t="ACESFilmic";break;case jc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Up(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(nr).join(`
`)}function Bp(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kp(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function nr(r){return r!==""}function So(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Js(r){return r.replace(Vp,Gp)}function Gp(r,e){const t=Pe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Js(t)}const Hp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yo(r){return r.replace(Hp,Wp)}function Wp(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Eo(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jp(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===vl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===xl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===tr&&(e="SHADOWMAP_TYPE_VSM"),e}function Xp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ni:case Ui:e="ENVMAP_TYPE_CUBE";break;case qr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ui:e="ENVMAP_MODE_REFRACTION";break}return e}function Yp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ia:e="ENVMAP_BLENDING_MULTIPLY";break;case kc:e="ENVMAP_BLENDING_MIX";break;case Vc:e="ENVMAP_BLENDING_ADD";break}return e}function Zp(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Kp(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=jp(t),u=Xp(t),c=qp(t),f=Yp(t),d=Zp(t),m=t.isWebGL2?"":Up(t),_=Bp(s),p=i.createProgram();let h,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[_].filter(nr).join(`
`),h.length>0&&(h+=`
`),g=[m,_].filter(nr).join(`
`),g.length>0&&(g+=`
`)):(h=[Eo(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),g=[m,Eo(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?Pe.tonemapping_pars_fragment:"",t.toneMapping!==yn?Np("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,Fp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nr).join(`
`)),o=Js(o),o=So(o,t),o=wo(o,t),a=Js(a),a=So(a,t),a=wo(a,t),o=yo(o),a=yo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,g=["#define varying in",t.glslVersion===Ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=b+h+o,M=b+g+a,S=bo(i,35633,x),C=bo(i,35632,M);if(i.attachShader(p,S),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(S).trim(),z=i.getShaderInfoLog(C).trim();let W=!0,P=!0;if(i.getProgramParameter(p,35714)===!1){W=!1;const U=Mo(i,S,"vertex"),R=Mo(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+U+`
`+R)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(D===""||z==="")&&(P=!1);P&&(this.diagnostics={runnable:W,programLog:T,vertexShader:{log:D,prefix:h},fragmentShader:{log:z,prefix:g}})}i.deleteShader(S),i.deleteShader(C);let O;this.getUniforms=function(){return O===void 0&&(O=new kr(i,p)),O};let v;return this.getAttributes=function(){return v===void 0&&(v=kp(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Ip++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=C,this}let Jp=0;class Qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $p(e),t.set(e,n)),n}}class $p{constructor(e){this.id=Jp++,this.code=e,this.usedTimes=0}}function em(r,e,t,n,i,s,o){const a=new aa,l=new Qp,u=[],c=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,T,D,z,W){const P=z.fog,U=W.geometry,R=v.isMeshStandardMaterial?z.environment:null,k=(v.isMeshStandardMaterial?t:e).get(v.envMap||R),Q=k&&k.mapping===qr?k.image.height:null,j=_[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const $=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,J=$!==void 0?$.length:0;let E=0;U.morphAttributes.position!==void 0&&(E=1),U.morphAttributes.normal!==void 0&&(E=2),U.morphAttributes.color!==void 0&&(E=3);let I,re,ee,ae;if(j){const je=Ht[j];I=je.vertexShader,re=je.fragmentShader}else I=v.vertexShader,re=v.fragmentShader,l.update(v),ee=l.getVertexShaderID(v),ae=l.getFragmentShaderID(v);const N=r.getRenderTarget(),fe=v.alphaTest>0,_e=v.clearcoat>0,Te=v.iridescence>0;return{isWebGL2:c,shaderID:j,shaderName:v.type,vertexShader:I,fragmentShader:re,defines:v.defines,customVertexShaderID:ee,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:d,outputEncoding:N===null?r.outputEncoding:N.isXRRenderTarget===!0?N.texture.encoding:jn,map:!!v.map,matcap:!!v.matcap,envMap:!!k,envMapMode:k&&k.mapping,envMapCubeUVHeight:Q,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===uu,tangentSpaceNormalMap:v.normalMapType===ra,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===tt,clearcoat:_e,clearcoatMap:_e&&!!v.clearcoatMap,clearcoatRoughnessMap:_e&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!v.clearcoatNormalMap,iridescence:Te,iridescenceMap:Te&&!!v.iridescenceMap,iridescenceThicknessMap:Te&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Oi,alphaMap:!!v.alphaMap,alphaTest:fe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!U.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:E,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:yn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Xr,flipSided:v.side===ln,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function h(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)T.push(D),T.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(g(T,v),b(T,v),T.push(r.outputEncoding)),T.push(v.customProgramCacheKey),T.join()}function g(v,T){v.push(T.precision),v.push(T.outputEncoding),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.combine),v.push(T.vertexUvs),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function b(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),v.push(a.mask)}function x(v){const T=_[v.type];let D;if(T){const z=Ht[T];D=Yr.clone(z.uniforms)}else D=v.uniforms;return D}function M(v,T){let D;for(let z=0,W=u.length;z<W;z++){const P=u[z];if(P.cacheKey===T){D=P,++D.usedTimes;break}}return D===void 0&&(D=new Kp(r,T,v,s),u.push(D)),D}function S(v){if(--v.usedTimes===0){const T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function C(v){l.remove(v)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:x,acquireProgram:M,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:O}}function tm(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function nm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ao(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function To(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,m,_,p,h){let g=r[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:p,group:h},r[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=m,g.groupOrder=_,g.renderOrder=f.renderOrder,g.z=p,g.group=h),e++,g}function a(f,d,m,_,p,h){const g=o(f,d,m,_,p,h);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function l(f,d,m,_,p,h){const g=o(f,d,m,_,p,h);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function u(f,d){t.length>1&&t.sort(f||nm),n.length>1&&n.sort(d||Ao),i.length>1&&i.sort(d||Ao)}function c(){for(let f=e,d=r.length;f<d;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:c,sort:u}}function im(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new To,r.set(n,[o])):i>=s.length?(o=new To,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function rm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ne};break;case"SpotLight":t={position:new B,direction:new B,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function sm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let am=0;function om(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lm(r,e){const t=new rm,n=sm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,o=new it,a=new it;function l(c,f){let d=0,m=0,_=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,h=0,g=0,b=0,x=0,M=0,S=0,C=0,O=0,v=0;c.sort(om);const T=f!==!0?Math.PI:1;for(let z=0,W=c.length;z<W;z++){const P=c[z],U=P.color,R=P.intensity,k=P.distance,Q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=U.r*R*T,m+=U.g*R*T,_+=U.b*R*T;else if(P.isLightProbe)for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],R);else if(P.isDirectionalLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const $=P.shadow,J=n.get(P);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=P.shadow.matrix,M++}i.directional[p]=j,p++}else if(P.isSpotLight){const j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(U).multiplyScalar(R*T),j.distance=k,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[g]=j;const $=P.shadow;if(P.map&&(i.spotLightMap[O]=P.map,O++,$.updateMatrices(P),P.castShadow&&v++),i.spotLightMatrix[g]=$.matrix,P.castShadow){const J=n.get(P);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,i.spotShadow[g]=J,i.spotShadowMap[g]=Q,C++}g++}else if(P.isRectAreaLight){const j=t.get(P);j.color.copy(U).multiplyScalar(R),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[b]=j,b++}else if(P.isPointLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*T),j.distance=P.distance,j.decay=P.decay,P.castShadow){const $=P.shadow,J=n.get(P);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,J.shadowCameraNear=$.camera.near,J.shadowCameraFar=$.camera.far,i.pointShadow[h]=J,i.pointShadowMap[h]=Q,i.pointShadowMatrix[h]=P.shadow.matrix,S++}i.point[h]=j,h++}else if(P.isHemisphereLight){const j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(R*T),j.groundColor.copy(P.groundColor).multiplyScalar(R*T),i.hemi[x]=j,x++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=_;const D=i.hash;(D.directionalLength!==p||D.pointLength!==h||D.spotLength!==g||D.rectAreaLength!==b||D.hemiLength!==x||D.numDirectionalShadows!==M||D.numPointShadows!==S||D.numSpotShadows!==C||D.numSpotMaps!==O)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=b,i.point.length=h,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+O-v,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=v,D.directionalLength=p,D.pointLength=h,D.spotLength=g,D.rectAreaLength=b,D.hemiLength=x,D.numDirectionalShadows=M,D.numPointShadows=S,D.numSpotShadows=C,D.numSpotMaps=O,i.version=am++)}function u(c,f){let d=0,m=0,_=0,p=0,h=0;const g=f.matrixWorldInverse;for(let b=0,x=c.length;b<x;b++){const M=c[b];if(M.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(M.isSpotLight){const S=i.spot[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),_++}else if(M.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),a.identity(),o.copy(M.matrixWorld),o.premultiply(g),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),m++}else if(M.isHemisphereLight){const S=i.hemi[h];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(g),h++}}}return{setup:l,setupView:u,state:i}}function Co(r,e){const t=new lm(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function u(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function cm(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Co(r,e),t.set(s,[l])):o>=a.length?(l=new Co(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class um extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fm extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hm=`uniform sampler2D shadow_pass;
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
}`;function pm(r,e,t){let n=new Zr;const i=new Le,s=new Le,o=new at,a=new um({depthPacking:cu}),l=new fm,u={},c=t.maxTextureSize,f={0:ln,1:ci,2:Xr},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:dm,fragmentShader:hm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new fn;_.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Jt(_,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl,this.render=function(M,S,C){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||M.length===0)return;const O=r.getRenderTarget(),v=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Wn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let z=0,W=M.length;z<W;z++){const P=M[z],U=P.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const R=U.getFrameExtents();if(i.multiply(R),s.copy(U.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/R.x),i.x=s.x*R.x,U.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/R.y),i.y=s.y*R.y,U.mapSize.y=s.y)),U.map===null){const Q=this.type!==tr?{minFilter:kt,magFilter:kt}:{};U.map=new Xn(i.x,i.y,Q),U.map.texture.name=P.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();const k=U.getViewportCount();for(let Q=0;Q<k;Q++){const j=U.getViewport(Q);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),D.viewport(o),U.updateMatrices(P,Q),n=U.getFrustum(),x(S,C,U.camera,P,this.type)}U.isPointLightShadow!==!0&&this.type===tr&&g(U,C),U.needsUpdate=!1}h.needsUpdate=!1,r.setRenderTarget(O,v,T)};function g(M,S){const C=e.update(p);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Xn(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(S,null,C,d,p,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(S,null,C,m,p,null)}function b(M,S,C,O,v,T){let D=null;const z=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(z!==void 0)D=z;else if(D=C.isPointLight===!0?l:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const W=D.uuid,P=S.uuid;let U=u[W];U===void 0&&(U={},u[W]=U);let R=U[P];R===void 0&&(R=D.clone(),U[P]=R),D=R}return D.visible=S.visible,D.wireframe=S.wireframe,T===tr?D.side=S.shadowSide!==null?S.shadowSide:S.side:D.side=S.shadowSide!==null?S.shadowSide:f[S.side],D.alphaMap=S.alphaMap,D.alphaTest=S.alphaTest,D.map=S.map,D.clipShadows=S.clipShadows,D.clippingPlanes=S.clippingPlanes,D.clipIntersection=S.clipIntersection,D.displacementMap=S.displacementMap,D.displacementScale=S.displacementScale,D.displacementBias=S.displacementBias,D.wireframeLinewidth=S.wireframeLinewidth,D.linewidth=S.linewidth,C.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(C.matrixWorld),D.nearDistance=O,D.farDistance=v),D}function x(M,S,C,O,v){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===tr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const z=e.update(M),W=M.material;if(Array.isArray(W)){const P=z.groups;for(let U=0,R=P.length;U<R;U++){const k=P[U],Q=W[k.materialIndex];if(Q&&Q.visible){const j=b(M,Q,O,C.near,C.far,v);r.renderBufferDirect(C,null,z,j,M,k)}}}else if(W.visible){const P=b(M,W,O,C.near,C.far,v);r.renderBufferDirect(C,null,z,P,M,null)}}const D=M.children;for(let z=0,W=D.length;z<W;z++)x(D[z],S,C,O,v)}}function mm(r,e,t){const n=t.isWebGL2;function i(){let F=!1;const Y=new at;let te=null;const pe=new at(0,0,0,0);return{setMask:function(be){te!==be&&!F&&(r.colorMask(be,be,be,be),te=be)},setLocked:function(be){F=be},setClear:function(be,qe,bt,Ct,Yn){Yn===!0&&(be*=Ct,qe*=Ct,bt*=Ct),Y.set(be,qe,bt,Ct),pe.equals(Y)===!1&&(r.clearColor(be,qe,bt,Ct),pe.copy(Y))},reset:function(){F=!1,te=null,pe.set(-1,0,0,0)}}}function s(){let F=!1,Y=null,te=null,pe=null;return{setTest:function(be){be?fe(2929):_e(2929)},setMask:function(be){Y!==be&&!F&&(r.depthMask(be),Y=be)},setFunc:function(be){if(te!==be){switch(be){case Ic:r.depthFunc(512);break;case Oc:r.depthFunc(519);break;case zc:r.depthFunc(513);break;case Hs:r.depthFunc(515);break;case Fc:r.depthFunc(514);break;case Nc:r.depthFunc(518);break;case Uc:r.depthFunc(516);break;case Bc:r.depthFunc(517);break;default:r.depthFunc(515)}te=be}},setLocked:function(be){F=be},setClear:function(be){pe!==be&&(r.clearDepth(be),pe=be)},reset:function(){F=!1,Y=null,te=null,pe=null}}}function o(){let F=!1,Y=null,te=null,pe=null,be=null,qe=null,bt=null,Ct=null,Yn=null;return{setTest:function(st){F||(st?fe(2960):_e(2960))},setMask:function(st){Y!==st&&!F&&(r.stencilMask(st),Y=st)},setFunc:function(st,Tn,nn){(te!==st||pe!==Tn||be!==nn)&&(r.stencilFunc(st,Tn,nn),te=st,pe=Tn,be=nn)},setOp:function(st,Tn,nn){(qe!==st||bt!==Tn||Ct!==nn)&&(r.stencilOp(st,Tn,nn),qe=st,bt=Tn,Ct=nn)},setLocked:function(st){F=st},setClear:function(st){Yn!==st&&(r.clearStencil(st),Yn=st)},reset:function(){F=!1,Y=null,te=null,pe=null,be=null,qe=null,bt=null,Ct=null,Yn=null}}}const a=new i,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},m={},_=new WeakMap,p=[],h=null,g=!1,b=null,x=null,M=null,S=null,C=null,O=null,v=null,T=!1,D=null,z=null,W=null,P=null,U=null;const R=r.getParameter(35661);let k=!1,Q=0;const j=r.getParameter(7938);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=Q>=2);let $=null,J={};const E=r.getParameter(3088),I=r.getParameter(2978),re=new at().fromArray(E),ee=new at().fromArray(I);function ae(F,Y,te){const pe=new Uint8Array(4),be=r.createTexture();r.bindTexture(F,be),r.texParameteri(F,10241,9728),r.texParameteri(F,10240,9728);for(let qe=0;qe<te;qe++)r.texImage2D(Y+qe,0,6408,1,1,0,6408,5121,pe);return be}const N={};N[3553]=ae(3553,3553,1),N[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),fe(2929),l.setFunc(Hs),pt(!1),zt(ba),fe(2884),$e(Wn);function fe(F){d[F]!==!0&&(r.enable(F),d[F]=!0)}function _e(F){d[F]!==!1&&(r.disable(F),d[F]=!1)}function Te(F,Y){return m[F]!==Y?(r.bindFramebuffer(F,Y),m[F]=Y,n&&(F===36009&&(m[36160]=Y),F===36160&&(m[36009]=Y)),!0):!1}function me(F,Y){let te=p,pe=!1;if(F)if(te=_.get(Y),te===void 0&&(te=[],_.set(Y,te)),F.isWebGLMultipleRenderTargets){const be=F.texture;if(te.length!==be.length||te[0]!==36064){for(let qe=0,bt=be.length;qe<bt;qe++)te[qe]=36064+qe;te.length=be.length,pe=!0}}else te[0]!==36064&&(te[0]=36064,pe=!0);else te[0]!==1029&&(te[0]=1029,pe=!0);pe&&(t.isWebGL2?r.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function je(F){return h!==F?(r.useProgram(F),h=F,!0):!1}const X={[Pi]:32774,[Sc]:32778,[wc]:32779};if(n)X[ya]=32775,X[Ea]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(X[ya]=F.MIN_EXT,X[Ea]=F.MAX_EXT)}const ce={[yc]:0,[Ec]:1,[Ac]:768,[bl]:770,[Rc]:776,[Dc]:774,[Cc]:772,[Tc]:769,[Ml]:771,[Pc]:775,[Lc]:773};function $e(F,Y,te,pe,be,qe,bt,Ct){if(F===Wn){g===!0&&(_e(3042),g=!1);return}if(g===!1&&(fe(3042),g=!0),F!==Mc){if(F!==b||Ct!==T){if((x!==Pi||C!==Pi)&&(r.blendEquation(32774),x=Pi,C=Pi),Ct)switch(F){case Oi:r.blendFuncSeparate(1,771,1,771);break;case Ma:r.blendFunc(1,1);break;case Sa:r.blendFuncSeparate(0,769,0,1);break;case wa:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Oi:r.blendFuncSeparate(770,771,1,771);break;case Ma:r.blendFunc(770,1);break;case Sa:r.blendFuncSeparate(0,769,0,1);break;case wa:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,S=null,O=null,v=null,b=F,T=Ct}return}be=be||Y,qe=qe||te,bt=bt||pe,(Y!==x||be!==C)&&(r.blendEquationSeparate(X[Y],X[be]),x=Y,C=be),(te!==M||pe!==S||qe!==O||bt!==v)&&(r.blendFuncSeparate(ce[te],ce[pe],ce[qe],ce[bt]),M=te,S=pe,O=qe,v=bt),b=F,T=!1}function ot(F,Y){F.side===Xr?_e(2884):fe(2884);let te=F.side===ln;Y&&(te=!te),pt(te),F.blending===Oi&&F.transparent===!1?$e(Wn):$e(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const pe=F.stencilWrite;u.setTest(pe),pe&&(u.setMask(F.stencilWriteMask),u.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),u.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ye(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(32926):_e(32926)}function pt(F){D!==F&&(F?r.frontFace(2304):r.frontFace(2305),D=F)}function zt(F){F!==xc?(fe(2884),F!==z&&(F===ba?r.cullFace(1029):F===bc?r.cullFace(1028):r.cullFace(1032))):_e(2884),z=F}function lt(F){F!==W&&(k&&r.lineWidth(F),W=F)}function Ye(F,Y,te){F?(fe(32823),(P!==Y||U!==te)&&(r.polygonOffset(Y,te),P=Y,U=te)):_e(32823)}function tn(F){F?fe(3089):_e(3089)}function Gt(F){F===void 0&&(F=33984+R-1),$!==F&&(r.activeTexture(F),$=F)}function A(F,Y,te){te===void 0&&($===null?te=33984+R-1:te=$);let pe=J[te];pe===void 0&&(pe={type:void 0,texture:void 0},J[te]=pe),(pe.type!==F||pe.texture!==Y)&&($!==te&&(r.activeTexture(te),$=te),r.bindTexture(F,Y||N[F]),pe.type=F,pe.texture=Y)}function w(){const F=J[$];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function L(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(F){re.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),re.copy(F))}function ve(F){ee.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),ee.copy(F))}function Fe(F,Y){let te=f.get(Y);te===void 0&&(te=new WeakMap,f.set(Y,te));let pe=te.get(F);pe===void 0&&(pe=r.getUniformBlockIndex(Y,F.name),te.set(F,pe))}function Be(F,Y){const pe=f.get(Y).get(F);c.get(Y)!==pe&&(r.uniformBlockBinding(Y,pe,F.__bindingPointIndex),c.set(Y,pe))}function Je(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},$=null,J={},m={},_=new WeakMap,p=[],h=null,g=!1,b=null,x=null,M=null,S=null,C=null,O=null,v=null,T=!1,D=null,z=null,W=null,P=null,U=null,re.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:fe,disable:_e,bindFramebuffer:Te,drawBuffers:me,useProgram:je,setBlending:$e,setMaterial:ot,setFlipSided:pt,setCullFace:zt,setLineWidth:lt,setPolygonOffset:Ye,setScissorTest:tn,activeTexture:Gt,bindTexture:A,unbindTexture:w,compressedTexImage2D:q,compressedTexImage3D:ne,texImage2D:ge,texImage3D:de,updateUBOMapping:Fe,uniformBlockBinding:Be,texStorage2D:V,texStorage3D:he,texSubImage2D:se,texSubImage3D:ue,compressedTexSubImage2D:Ce,compressedTexSubImage3D:L,scissor:xe,viewport:ve,reset:Je}}function gm(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,u=i.maxCubemapSize,c=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,w){return g?new OffscreenCanvas(A,w):cr("canvas")}function x(A,w,q,ne){let se=1;if((A.width>ne||A.height>ne)&&(se=ne/Math.max(A.width,A.height)),se<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ue=w?Hr:Math.floor,Ce=ue(se*A.width),L=ue(se*A.height);p===void 0&&(p=b(Ce,L));const V=q?b(Ce,L):p;return V.width=Ce,V.height=L,V.getContext("2d").drawImage(A,0,0,Ce,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ce+"x"+L+")."),V}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function M(A){return Ks(A.width)&&Ks(A.height)}function S(A){return a?!1:A.wrapS!==_n||A.wrapT!==_n||A.minFilter!==kt&&A.minFilter!==sn}function C(A,w){return A.generateMipmaps&&w&&A.minFilter!==kt&&A.minFilter!==sn}function O(A){r.generateMipmap(A)}function v(A,w,q,ne,se=!1){if(a===!1)return w;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ue=w;return w===6403&&(q===5126&&(ue=33326),q===5131&&(ue=33325),q===5121&&(ue=33321)),w===33319&&(q===5126&&(ue=33328),q===5131&&(ue=33327),q===5121&&(ue=33323)),w===6408&&(q===5126&&(ue=34836),q===5131&&(ue=34842),q===5121&&(ue=ne===tt&&se===!1?35907:32856),q===32819&&(ue=32854),q===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function T(A,w,q){return C(A,q)===!0||A.isFramebufferTexture&&A.minFilter!==kt&&A.minFilter!==sn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function D(A){return A===kt||A===Aa||A===ls?9728:9729}function z(A){const w=A.target;w.removeEventListener("dispose",z),P(w),w.isVideoTexture&&_.delete(w)}function W(A){const w=A.target;w.removeEventListener("dispose",W),R(w)}function P(A){const w=n.get(A);if(w.__webglInit===void 0)return;const q=A.source,ne=h.get(q);if(ne){const se=ne[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&U(A),Object.keys(ne).length===0&&h.delete(q)}n.remove(A)}function U(A){const w=n.get(A);r.deleteTexture(w.__webglTexture);const q=A.source,ne=h.get(q);delete ne[w.__cacheKey],o.memory.textures--}function R(A){const w=A.texture,q=n.get(A),ne=n.get(w);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)r.deleteFramebuffer(q.__webglFramebuffer[se]),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer[se]);else{if(r.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let se=0;se<q.__webglColorRenderbuffer.length;se++)q.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(q.__webglColorRenderbuffer[se]);q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let se=0,ue=w.length;se<ue;se++){const Ce=n.get(w[se]);Ce.__webglTexture&&(r.deleteTexture(Ce.__webglTexture),o.memory.textures--),n.remove(w[se])}n.remove(w),n.remove(A)}let k=0;function Q(){k=0}function j(){const A=k;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),k+=1,A}function $(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function J(A,w){const q=n.get(A);if(A.isVideoTexture&&tn(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(q,A,w);return}}t.bindTexture(3553,q.__webglTexture,33984+w)}function E(A,w){const q=n.get(A);if(A.version>0&&q.__version!==A.version){_e(q,A,w);return}t.bindTexture(35866,q.__webglTexture,33984+w)}function I(A,w){const q=n.get(A);if(A.version>0&&q.__version!==A.version){_e(q,A,w);return}t.bindTexture(32879,q.__webglTexture,33984+w)}function re(A,w){const q=n.get(A);if(A.version>0&&q.__version!==A.version){Te(q,A,w);return}t.bindTexture(34067,q.__webglTexture,33984+w)}const ee={[Xs]:10497,[_n]:33071,[qs]:33648},ae={[kt]:9728,[Aa]:9984,[ls]:9986,[sn]:9729,[Xc]:9985,[ar]:9987};function N(A,w,q){if(q?(r.texParameteri(A,10242,ee[w.wrapS]),r.texParameteri(A,10243,ee[w.wrapT]),(A===32879||A===35866)&&r.texParameteri(A,32882,ee[w.wrapR]),r.texParameteri(A,10240,ae[w.magFilter]),r.texParameteri(A,10241,ae[w.minFilter])):(r.texParameteri(A,10242,33071),r.texParameteri(A,10243,33071),(A===32879||A===35866)&&r.texParameteri(A,32882,33071),(w.wrapS!==_n||w.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,10240,D(w.magFilter)),r.texParameteri(A,10241,D(w.minFilter)),w.minFilter!==kt&&w.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===kt||w.minFilter!==ls&&w.minFilter!==ar||w.type===si&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===or&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(A,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function fe(A,w){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",z));const ne=w.source;let se=h.get(ne);se===void 0&&(se={},h.set(ne,se));const ue=$(w);if(ue!==A.__cacheKey){se[ue]===void 0&&(se[ue]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),se[ue].usedTimes++;const Ce=se[A.__cacheKey];Ce!==void 0&&(se[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&U(w)),A.__cacheKey=ue,A.__webglTexture=se[ue].texture}return q}function _e(A,w,q){let ne=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=35866),w.isData3DTexture&&(ne=32879);const se=fe(A,w),ue=w.source;t.bindTexture(ne,A.__webglTexture,33984+q);const Ce=n.get(ue);if(ue.version!==Ce.__version||se===!0){t.activeTexture(33984+q),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const L=S(w)&&M(w.image)===!1;let V=x(w.image,L,!1,c);V=Gt(w,V);const he=M(V)||a,ge=s.convert(w.format,w.encoding);let de=s.convert(w.type),xe=v(w.internalFormat,ge,de,w.encoding,w.isVideoTexture);N(ne,w,he);let ve;const Fe=w.mipmaps,Be=a&&w.isVideoTexture!==!0,Je=Ce.__version===void 0||se===!0,F=T(w,V,he);if(w.isDepthTexture)xe=6402,a?w.type===si?xe=36012:w.type===ri?xe=33190:w.type===zi?xe=35056:xe=33189:w.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ai&&xe===6402&&w.type!==yl&&w.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ri,de=s.convert(w.type)),w.format===Bi&&xe===6402&&(xe=34041,w.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=zi,de=s.convert(w.type))),Je&&(Be?t.texStorage2D(3553,1,xe,V.width,V.height):t.texImage2D(3553,0,xe,V.width,V.height,0,ge,de,null));else if(w.isDataTexture)if(Fe.length>0&&he){Be&&Je&&t.texStorage2D(3553,F,xe,Fe[0].width,Fe[0].height);for(let Y=0,te=Fe.length;Y<te;Y++)ve=Fe[Y],Be?t.texSubImage2D(3553,Y,0,0,ve.width,ve.height,ge,de,ve.data):t.texImage2D(3553,Y,xe,ve.width,ve.height,0,ge,de,ve.data);w.generateMipmaps=!1}else Be?(Je&&t.texStorage2D(3553,F,xe,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,ge,de,V.data)):t.texImage2D(3553,0,xe,V.width,V.height,0,ge,de,V.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Be&&Je&&t.texStorage3D(35866,F,xe,Fe[0].width,Fe[0].height,V.depth);for(let Y=0,te=Fe.length;Y<te;Y++)ve=Fe[Y],w.format!==vn?ge!==null?Be?t.compressedTexSubImage3D(35866,Y,0,0,0,ve.width,ve.height,V.depth,ge,ve.data,0,0):t.compressedTexImage3D(35866,Y,xe,ve.width,ve.height,V.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(35866,Y,0,0,0,ve.width,ve.height,V.depth,ge,de,ve.data):t.texImage3D(35866,Y,xe,ve.width,ve.height,V.depth,0,ge,de,ve.data)}else{Be&&Je&&t.texStorage2D(3553,F,xe,Fe[0].width,Fe[0].height);for(let Y=0,te=Fe.length;Y<te;Y++)ve=Fe[Y],w.format!==vn?ge!==null?Be?t.compressedTexSubImage2D(3553,Y,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(3553,Y,xe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,Y,0,0,ve.width,ve.height,ge,de,ve.data):t.texImage2D(3553,Y,xe,ve.width,ve.height,0,ge,de,ve.data)}else if(w.isDataArrayTexture)Be?(Je&&t.texStorage3D(35866,F,xe,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,ge,de,V.data)):t.texImage3D(35866,0,xe,V.width,V.height,V.depth,0,ge,de,V.data);else if(w.isData3DTexture)Be?(Je&&t.texStorage3D(32879,F,xe,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,ge,de,V.data)):t.texImage3D(32879,0,xe,V.width,V.height,V.depth,0,ge,de,V.data);else if(w.isFramebufferTexture){if(Je)if(Be)t.texStorage2D(3553,F,xe,V.width,V.height);else{let Y=V.width,te=V.height;for(let pe=0;pe<F;pe++)t.texImage2D(3553,pe,xe,Y,te,0,ge,de,null),Y>>=1,te>>=1}}else if(Fe.length>0&&he){Be&&Je&&t.texStorage2D(3553,F,xe,Fe[0].width,Fe[0].height);for(let Y=0,te=Fe.length;Y<te;Y++)ve=Fe[Y],Be?t.texSubImage2D(3553,Y,0,0,ge,de,ve):t.texImage2D(3553,Y,xe,ge,de,ve);w.generateMipmaps=!1}else Be?(Je&&t.texStorage2D(3553,F,xe,V.width,V.height),t.texSubImage2D(3553,0,0,0,ge,de,V)):t.texImage2D(3553,0,xe,ge,de,V);C(w,he)&&O(ne),Ce.__version=ue.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Te(A,w,q){if(w.image.length!==6)return;const ne=fe(A,w),se=w.source;t.bindTexture(34067,A.__webglTexture,33984+q);const ue=n.get(se);if(se.version!==ue.__version||ne===!0){t.activeTexture(33984+q),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const Ce=w.isCompressedTexture||w.image[0].isCompressedTexture,L=w.image[0]&&w.image[0].isDataTexture,V=[];for(let Y=0;Y<6;Y++)!Ce&&!L?V[Y]=x(w.image[Y],!1,!0,u):V[Y]=L?w.image[Y].image:w.image[Y],V[Y]=Gt(w,V[Y]);const he=V[0],ge=M(he)||a,de=s.convert(w.format,w.encoding),xe=s.convert(w.type),ve=v(w.internalFormat,de,xe,w.encoding),Fe=a&&w.isVideoTexture!==!0,Be=ue.__version===void 0||ne===!0;let Je=T(w,he,ge);N(34067,w,ge);let F;if(Ce){Fe&&Be&&t.texStorage2D(34067,Je,ve,he.width,he.height);for(let Y=0;Y<6;Y++){F=V[Y].mipmaps;for(let te=0;te<F.length;te++){const pe=F[te];w.format!==vn?de!==null?Fe?t.compressedTexSubImage2D(34069+Y,te,0,0,pe.width,pe.height,de,pe.data):t.compressedTexImage2D(34069+Y,te,ve,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(34069+Y,te,0,0,pe.width,pe.height,de,xe,pe.data):t.texImage2D(34069+Y,te,ve,pe.width,pe.height,0,de,xe,pe.data)}}}else{F=w.mipmaps,Fe&&Be&&(F.length>0&&Je++,t.texStorage2D(34067,Je,ve,V[0].width,V[0].height));for(let Y=0;Y<6;Y++)if(L){Fe?t.texSubImage2D(34069+Y,0,0,0,V[Y].width,V[Y].height,de,xe,V[Y].data):t.texImage2D(34069+Y,0,ve,V[Y].width,V[Y].height,0,de,xe,V[Y].data);for(let te=0;te<F.length;te++){const be=F[te].image[Y].image;Fe?t.texSubImage2D(34069+Y,te+1,0,0,be.width,be.height,de,xe,be.data):t.texImage2D(34069+Y,te+1,ve,be.width,be.height,0,de,xe,be.data)}}else{Fe?t.texSubImage2D(34069+Y,0,0,0,de,xe,V[Y]):t.texImage2D(34069+Y,0,ve,de,xe,V[Y]);for(let te=0;te<F.length;te++){const pe=F[te];Fe?t.texSubImage2D(34069+Y,te+1,0,0,de,xe,pe.image[Y]):t.texImage2D(34069+Y,te+1,ve,de,xe,pe.image[Y])}}}C(w,ge)&&O(34067),ue.__version=se.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function me(A,w,q,ne,se){const ue=s.convert(q.format,q.encoding),Ce=s.convert(q.type),L=v(q.internalFormat,ue,Ce,q.encoding);n.get(w).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,L,w.width,w.height,w.depth,0,ue,Ce,null):t.texImage2D(se,0,L,w.width,w.height,0,ue,Ce,null)),t.bindFramebuffer(36160,A),Ye(w)?d.framebufferTexture2DMultisampleEXT(36160,ne,se,n.get(q).__webglTexture,0,lt(w)):(se===3553||se>=34069&&se<=34074)&&r.framebufferTexture2D(36160,ne,se,n.get(q).__webglTexture,0),t.bindFramebuffer(36160,null)}function je(A,w,q){if(r.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let ne=33189;if(q||Ye(w)){const se=w.depthTexture;se&&se.isDepthTexture&&(se.type===si?ne=36012:se.type===ri&&(ne=33190));const ue=lt(w);Ye(w)?d.renderbufferStorageMultisampleEXT(36161,ue,ne,w.width,w.height):r.renderbufferStorageMultisample(36161,ue,ne,w.width,w.height)}else r.renderbufferStorage(36161,ne,w.width,w.height);r.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const ne=lt(w);q&&Ye(w)===!1?r.renderbufferStorageMultisample(36161,ne,35056,w.width,w.height):Ye(w)?d.renderbufferStorageMultisampleEXT(36161,ne,35056,w.width,w.height):r.renderbufferStorage(36161,34041,w.width,w.height),r.framebufferRenderbuffer(36160,33306,36161,A)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let se=0;se<ne.length;se++){const ue=ne[se],Ce=s.convert(ue.format,ue.encoding),L=s.convert(ue.type),V=v(ue.internalFormat,Ce,L,ue.encoding),he=lt(w);q&&Ye(w)===!1?r.renderbufferStorageMultisample(36161,he,V,w.width,w.height):Ye(w)?d.renderbufferStorageMultisampleEXT(36161,he,V,w.width,w.height):r.renderbufferStorage(36161,V,w.width,w.height)}}r.bindRenderbuffer(36161,null)}function X(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J(w.depthTexture,0);const ne=n.get(w.depthTexture).__webglTexture,se=lt(w);if(w.depthTexture.format===ai)Ye(w)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,se):r.framebufferTexture2D(36160,36096,3553,ne,0);else if(w.depthTexture.format===Bi)Ye(w)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,se):r.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function ce(A){const w=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");X(w.__webglFramebuffer,A)}else if(q){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=r.createRenderbuffer(),je(w.__webglDepthbuffer[ne],A,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),je(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function $e(A,w,q){const ne=n.get(A);w!==void 0&&me(ne.__webglFramebuffer,A,A.texture,36064,3553),q!==void 0&&ce(A)}function ot(A){const w=A.texture,q=n.get(A),ne=n.get(w);A.addEventListener("dispose",W),A.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=w.version,o.memory.textures++);const se=A.isWebGLCubeRenderTarget===!0,ue=A.isWebGLMultipleRenderTargets===!0,Ce=M(A)||a;if(se){q.__webglFramebuffer=[];for(let L=0;L<6;L++)q.__webglFramebuffer[L]=r.createFramebuffer()}else{if(q.__webglFramebuffer=r.createFramebuffer(),ue)if(i.drawBuffers){const L=A.texture;for(let V=0,he=L.length;V<he;V++){const ge=n.get(L[V]);ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ye(A)===!1){const L=ue?w:[w];q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let V=0;V<L.length;V++){const he=L[V];q.__webglColorRenderbuffer[V]=r.createRenderbuffer(),r.bindRenderbuffer(36161,q.__webglColorRenderbuffer[V]);const ge=s.convert(he.format,he.encoding),de=s.convert(he.type),xe=v(he.internalFormat,ge,de,he.encoding,A.isXRRenderTarget===!0),ve=lt(A);r.renderbufferStorageMultisample(36161,ve,xe,A.width,A.height),r.framebufferRenderbuffer(36160,36064+V,36161,q.__webglColorRenderbuffer[V])}r.bindRenderbuffer(36161,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),je(q.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,ne.__webglTexture),N(34067,w,Ce);for(let L=0;L<6;L++)me(q.__webglFramebuffer[L],A,w,36064,34069+L);C(w,Ce)&&O(34067),t.unbindTexture()}else if(ue){const L=A.texture;for(let V=0,he=L.length;V<he;V++){const ge=L[V],de=n.get(ge);t.bindTexture(3553,de.__webglTexture),N(3553,ge,Ce),me(q.__webglFramebuffer,A,ge,36064+V,3553),C(ge,Ce)&&O(3553)}t.unbindTexture()}else{let L=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?L=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,ne.__webglTexture),N(L,w,Ce),me(q.__webglFramebuffer,A,w,36064,L),C(w,Ce)&&O(L),t.unbindTexture()}A.depthBuffer&&ce(A)}function pt(A){const w=M(A)||a,q=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0,se=q.length;ne<se;ne++){const ue=q[ne];if(C(ue,w)){const Ce=A.isWebGLCubeRenderTarget?34067:3553,L=n.get(ue).__webglTexture;t.bindTexture(Ce,L),O(Ce),t.unbindTexture()}}}function zt(A){if(a&&A.samples>0&&Ye(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],q=A.width,ne=A.height;let se=16384;const ue=[],Ce=A.stencilBuffer?33306:36096,L=n.get(A),V=A.isWebGLMultipleRenderTargets===!0;if(V)for(let he=0;he<w.length;he++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+he,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),r.framebufferTexture2D(36009,36064+he,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let he=0;he<w.length;he++){ue.push(36064+he),A.depthBuffer&&ue.push(Ce);const ge=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(ge===!1&&(A.depthBuffer&&(se|=256),A.stencilBuffer&&(se|=1024)),V&&r.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[he]),ge===!0&&(r.invalidateFramebuffer(36008,[Ce]),r.invalidateFramebuffer(36009,[Ce])),V){const de=n.get(w[he]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,de,0)}r.blitFramebuffer(0,0,q,ne,0,0,q,ne,se,9728),m&&r.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),V)for(let he=0;he<w.length;he++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+he,36161,L.__webglColorRenderbuffer[he]);const ge=n.get(w[he]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),r.framebufferTexture2D(36009,36064+he,3553,ge,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function lt(A){return Math.min(f,A.samples)}function Ye(A){const w=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function tn(A){const w=o.render.frame;_.get(A)!==w&&(_.set(A,w),A.update())}function Gt(A,w){const q=A.encoding,ne=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Zs||q!==jn&&(q===tt?a===!1?e.has("EXT_sRGB")===!0&&ne===vn?(A.format=Zs,A.minFilter=sn,A.generateMipmaps=!1):w=Tl.sRGBToLinear(w):(ne!==vn||se!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),w}this.allocateTextureUnit=j,this.resetTextureUnits=Q,this.setTexture2D=J,this.setTexture2DArray=E,this.setTexture3D=I,this.setTextureCube=re,this.rebindTextures=$e,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ye}function _m(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===ui)return 5121;if(s===Kc)return 32819;if(s===Jc)return 32820;if(s===qc)return 5120;if(s===Yc)return 5122;if(s===yl)return 5123;if(s===Zc)return 5124;if(s===ri)return 5125;if(s===si)return 5126;if(s===or)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Qc)return 6406;if(s===vn)return 6408;if(s===eu)return 6409;if(s===tu)return 6410;if(s===ai)return 6402;if(s===Bi)return 34041;if(s===$c)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Zs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===nu)return 6403;if(s===iu)return 36244;if(s===ru)return 33319;if(s===su)return 33320;if(s===au)return 36249;if(s===cs||s===us||s===fs||s===ds)if(o===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===cs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===cs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===us)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ds)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ta||s===Ca||s===La||s===Da)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ta)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ca)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===La)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Da)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ou)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Pa||s===Ra)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Pa)return o===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ra)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ia||s===Oa||s===za||s===Fa||s===Na||s===Ua||s===Ba||s===ka||s===Va||s===Ga||s===Ha||s===Wa||s===ja||s===Xa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ia)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Oa)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===za)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fa)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Na)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ua)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ba)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ka)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Va)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ga)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ha)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wa)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ja)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xa)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===qa)return o===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===zi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class vm extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ir extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xm={type:"move"};class Ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,n),g=this._getHandJoint(u,p);h!==null&&(g.matrix.fromArray(h.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=h.radius),g.visible=h!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),m=.02,_=.005;u.inputState.pinching&&d>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ir;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class bm extends Wt{constructor(e,t,n,i,s,o,a,l,u,c){if(c=c!==void 0?c:ai,c!==ai&&c!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===ai&&(n=ri),n===void 0&&c===Bi&&(n=zi),super(null,i,s,o,a,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1}}class Mm extends pi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,f=null,d=null,m=null;const _=t.getContextAttributes();let p=null,h=null;const g=[],b=[],x=new Set,M=new Map,S=new Zt;S.layers.enable(1),S.viewport=new at;const C=new Zt;C.layers.enable(2),C.viewport=new at;const O=[S,C],v=new vm;v.layers.enable(1),v.layers.enable(2);let T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let I=g[E];return I===void 0&&(I=new Ns,g[E]=I),I.getTargetRaySpace()},this.getControllerGrip=function(E){let I=g[E];return I===void 0&&(I=new Ns,g[E]=I),I.getGripSpace()},this.getHand=function(E){let I=g[E];return I===void 0&&(I=new Ns,g[E]=I),I.getHandSpace()};function z(E){const I=b.indexOf(E.inputSource);if(I===-1)return;const re=g[I];re!==void 0&&re.dispatchEvent({type:E.type,data:E.inputSource})}function W(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",P);for(let E=0;E<g.length;E++){const I=b[E];I!==null&&(b[E]=null,g[E].disconnect(I))}T=null,D=null,e.setRenderTarget(p),d=null,f=null,c=null,i=null,h=null,J.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(E){s=E,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){a=E,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(E){l=E},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(E){if(i=E,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",W),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const I={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,I),i.updateRenderState({baseLayer:d}),h=new Xn(d.framebufferWidth,d.framebufferHeight,{format:vn,type:ui,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let I=null,re=null,ee=null;_.depth&&(ee=_.stencil?35056:33190,I=_.stencil?Bi:ai,re=_.stencil?zi:ri);const ae={colorFormat:32856,depthFormat:ee,scaleFactor:s};c=new XRWebGLBinding(i,t),f=c.createProjectionLayer(ae),i.updateRenderState({layers:[f]}),h=new Xn(f.textureWidth,f.textureHeight,{format:vn,type:ui,depthTexture:new bm(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const N=e.properties.get(h);N.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),J.setContext(i),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function P(E){for(let I=0;I<E.removed.length;I++){const re=E.removed[I],ee=b.indexOf(re);ee>=0&&(b[ee]=null,g[ee].disconnect(re))}for(let I=0;I<E.added.length;I++){const re=E.added[I];let ee=b.indexOf(re);if(ee===-1){for(let N=0;N<g.length;N++)if(N>=b.length){b.push(re),ee=N;break}else if(b[N]===null){b[N]=re,ee=N;break}if(ee===-1)break}const ae=g[ee];ae&&ae.connect(re)}}const U=new B,R=new B;function k(E,I,re){U.setFromMatrixPosition(I.matrixWorld),R.setFromMatrixPosition(re.matrixWorld);const ee=U.distanceTo(R),ae=I.projectionMatrix.elements,N=re.projectionMatrix.elements,fe=ae[14]/(ae[10]-1),_e=ae[14]/(ae[10]+1),Te=(ae[9]+1)/ae[5],me=(ae[9]-1)/ae[5],je=(ae[8]-1)/ae[0],X=(N[8]+1)/N[0],ce=fe*je,$e=fe*X,ot=ee/(-je+X),pt=ot*-je;I.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(pt),E.translateZ(ot),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert();const zt=fe+ot,lt=_e+ot,Ye=ce-pt,tn=$e+(ee-pt),Gt=Te*_e/lt*zt,A=me*_e/lt*zt;E.projectionMatrix.makePerspective(Ye,tn,Gt,A,zt,lt)}function Q(E,I){I===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(I.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(i===null)return;v.near=C.near=S.near=E.near,v.far=C.far=S.far=E.far,(T!==v.near||D!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,D=v.far);const I=E.parent,re=v.cameras;Q(v,I);for(let ae=0;ae<re.length;ae++)Q(re[ae],I);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),E.matrix.copy(v.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale);const ee=E.children;for(let ae=0,N=ee.length;ae<N;ae++)ee[ae].updateMatrixWorld(!0);re.length===2?k(v,S,C):v.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(E){f!==null&&(f.fixedFoveation=E),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=E)},this.getPlanes=function(){return x};let j=null;function $(E,I){if(u=I.getViewerPose(l||o),m=I,u!==null){const re=u.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let ee=!1;re.length!==v.cameras.length&&(v.cameras.length=0,ee=!0);for(let ae=0;ae<re.length;ae++){const N=re[ae];let fe=null;if(d!==null)fe=d.getViewport(N);else{const Te=c.getViewSubImage(f,N);fe=Te.viewport,ae===0&&(e.setRenderTargetTextures(h,Te.colorTexture,f.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(h))}let _e=O[ae];_e===void 0&&(_e=new Zt,_e.layers.enable(ae),_e.viewport=new at,O[ae]=_e),_e.matrix.fromArray(N.transform.matrix),_e.projectionMatrix.fromArray(N.projectionMatrix),_e.viewport.set(fe.x,fe.y,fe.width,fe.height),ae===0&&v.matrix.copy(_e.matrix),ee===!0&&v.cameras.push(_e)}}for(let re=0;re<g.length;re++){const ee=b[re],ae=g[re];ee!==null&&ae!==void 0&&ae.update(ee,I,l||o)}if(j&&j(E,I),I.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:I.detectedPlanes});let re=null;for(const ee of x)I.detectedPlanes.has(ee)||(re===null&&(re=[]),re.push(ee));if(re!==null)for(const ee of re)x.delete(ee),M.delete(ee),n.dispatchEvent({type:"planeremoved",data:ee});for(const ee of I.detectedPlanes)if(!x.has(ee))x.add(ee),M.set(ee,I.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ee});else{const ae=M.get(ee);ee.lastChangedTime>ae&&(M.set(ee,ee.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ee}))}}m=null}const J=new Fl;J.setAnimationLoop($),this.setAnimationLoop=function(E){j=E},this.dispose=function(){}}}function Sm(r,e){function t(p,h){h.color.getRGB(p.fogColor.value,Ol(r)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function n(p,h,g,b,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(p,h):h.isMeshToonMaterial?(i(p,h),c(p,h)):h.isMeshPhongMaterial?(i(p,h),u(p,h)):h.isMeshStandardMaterial?(i(p,h),f(p,h),h.isMeshPhysicalMaterial&&d(p,h,x)):h.isMeshMatcapMaterial?(i(p,h),m(p,h)):h.isMeshDepthMaterial?i(p,h):h.isMeshDistanceMaterial?(i(p,h),_(p,h)):h.isMeshNormalMaterial?i(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,g,b):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===ln&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===ln&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const g=e.get(h).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const M=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*M}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let b;h.map?b=h.map:h.specularMap?b=h.specularMap:h.displacementMap?b=h.displacementMap:h.normalMap?b=h.normalMap:h.bumpMap?b=h.bumpMap:h.roughnessMap?b=h.roughnessMap:h.metalnessMap?b=h.metalnessMap:h.alphaMap?b=h.alphaMap:h.emissiveMap?b=h.emissiveMap:h.clearcoatMap?b=h.clearcoatMap:h.clearcoatNormalMap?b=h.clearcoatNormalMap:h.clearcoatRoughnessMap?b=h.clearcoatRoughnessMap:h.iridescenceMap?b=h.iridescenceMap:h.iridescenceThicknessMap?b=h.iridescenceThicknessMap:h.specularIntensityMap?b=h.specularIntensityMap:h.specularColorMap?b=h.specularColorMap:h.transmissionMap?b=h.transmissionMap:h.thicknessMap?b=h.thicknessMap:h.sheenColorMap?b=h.sheenColorMap:h.sheenRoughnessMap&&(b=h.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let x;h.aoMap?x=h.aoMap:h.lightMap&&(x=h.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,g,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*g,p.scale.value=b*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let x;h.map?x=h.map:h.alphaMap&&(x=h.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let g;h.map?g=h.map:h.alphaMap&&(g=h.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function c(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function d(p,h,g){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===ln&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function wm(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(b,x){const M=x.program;n.uniformBlockBinding(b,M)}function u(b,x){let M=i[b.id];M===void 0&&(_(b),M=c(b),i[b.id]=M,b.addEventListener("dispose",h));const S=x.program;n.updateUBOMapping(b,S);const C=e.render.frame;s[b.id]!==C&&(d(b),s[b.id]=C)}function c(b){const x=f();b.__bindingPointIndex=x;const M=r.createBuffer(),S=b.__size,C=b.usage;return r.bindBuffer(35345,M),r.bufferData(35345,S,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,x,M),M}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=i[b.id],M=b.uniforms,S=b.__cache;r.bindBuffer(35345,x);for(let C=0,O=M.length;C<O;C++){const v=M[C];if(m(v,C,S)===!0){const T=v.__offset,D=Array.isArray(v.value)?v.value:[v.value];let z=0;for(let W=0;W<D.length;W++){const P=D[W],U=p(P);typeof P=="number"?(v.__data[0]=P,r.bufferSubData(35345,T+z,v.__data)):P.isMatrix3?(v.__data[0]=P.elements[0],v.__data[1]=P.elements[1],v.__data[2]=P.elements[2],v.__data[3]=P.elements[0],v.__data[4]=P.elements[3],v.__data[5]=P.elements[4],v.__data[6]=P.elements[5],v.__data[7]=P.elements[0],v.__data[8]=P.elements[6],v.__data[9]=P.elements[7],v.__data[10]=P.elements[8],v.__data[11]=P.elements[0]):(P.toArray(v.__data,z),z+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,T,v.__data)}}r.bindBuffer(35345,null)}function m(b,x,M){const S=b.value;if(M[x]===void 0){if(typeof S=="number")M[x]=S;else{const C=Array.isArray(S)?S:[S],O=[];for(let v=0;v<C.length;v++)O.push(C[v].clone());M[x]=O}return!0}else if(typeof S=="number"){if(M[x]!==S)return M[x]=S,!0}else{const C=Array.isArray(M[x])?M[x]:[M[x]],O=Array.isArray(S)?S:[S];for(let v=0;v<C.length;v++){const T=C[v];if(T.equals(O[v])===!1)return T.copy(O[v]),!0}}return!1}function _(b){const x=b.uniforms;let M=0;const S=16;let C=0;for(let O=0,v=x.length;O<v;O++){const T=x[O],D={boundary:0,storage:0},z=Array.isArray(T.value)?T.value:[T.value];for(let W=0,P=z.length;W<P;W++){const U=z[W],R=p(U);D.boundary+=R.boundary,D.storage+=R.storage}if(T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,O>0){C=M%S;const W=S-C;C!==0&&W-D.boundary<0&&(M+=S-C,T.__offset=M)}M+=D.storage}return C=M%S,C>0&&(M+=S-C),b.__size=M,b.__cache={},this}function p(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function h(b){const x=b.target;x.removeEventListener("dispose",h);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function g(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:u,dispose:g}}function ym(){const r=cr("canvas");return r.style.display="block",r}function Vl(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:ym(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=r.alpha!==void 0?r.alpha:!1;let f=null,d=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=jn,this.physicallyCorrectLights=!1,this.toneMapping=yn,this.toneMappingExposure=1;const p=this;let h=!1,g=0,b=0,x=null,M=-1,S=null;const C=new at,O=new at;let v=null,T=e.width,D=e.height,z=1,W=null,P=null;const U=new at(0,0,T,D),R=new at(0,0,T,D);let k=!1;const Q=new Zr;let j=!1,$=!1,J=null;const E=new it,I=new Le,re=new B,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return x===null?z:1}let N=t;function fe(y,H){for(let Z=0;Z<y.length;Z++){const G=y[Z],K=e.getContext(G,H);if(K!==null)return K}return null}try{const y={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${na}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Fe,!1),N===null){const H=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&H.shift(),N=fe(H,y),N===null)throw fe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let _e,Te,me,je,X,ce,$e,ot,pt,zt,lt,Ye,tn,Gt,A,w,q,ne,se,ue,Ce,L,V,he;function ge(){_e=new zh(N),Te=new Lh(N,_e,r),_e.init(Te),L=new _m(N,_e,Te),me=new mm(N,_e,Te),je=new Uh,X=new tm,ce=new gm(N,_e,me,X,Te,L,je),$e=new Ph(p),ot=new Oh(p),pt=new Xu(N,Te),V=new Th(N,_e,pt,Te),zt=new Fh(N,pt,je,V),lt=new Gh(N,zt,pt,je),se=new Vh(N,Te,ce),w=new Dh(X),Ye=new em(p,$e,ot,_e,Te,V,w),tn=new Sm(p,X),Gt=new im,A=new cm(_e,Te),ne=new Ah(p,$e,ot,me,lt,c,o),q=new pm(p,lt,Te),he=new wm(N,je,Te,me),ue=new Ch(N,_e,je,Te),Ce=new Nh(N,_e,je,Te),je.programs=Ye.programs,p.capabilities=Te,p.extensions=_e,p.properties=X,p.renderLists=Gt,p.shadowMap=q,p.state=me,p.info=je}ge();const de=new Mm(p,N);this.xr=de,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=_e.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=_e.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(y){y!==void 0&&(z=y,this.setSize(T,D,!1))},this.getSize=function(y){return y.set(T,D)},this.setSize=function(y,H,Z){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=y,D=H,e.width=Math.floor(y*z),e.height=Math.floor(H*z),Z!==!1&&(e.style.width=y+"px",e.style.height=H+"px"),this.setViewport(0,0,y,H)},this.getDrawingBufferSize=function(y){return y.set(T*z,D*z).floor()},this.setDrawingBufferSize=function(y,H,Z){T=y,D=H,z=Z,e.width=Math.floor(y*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,y,H)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(U)},this.setViewport=function(y,H,Z,G){y.isVector4?U.set(y.x,y.y,y.z,y.w):U.set(y,H,Z,G),me.viewport(C.copy(U).multiplyScalar(z).floor())},this.getScissor=function(y){return y.copy(R)},this.setScissor=function(y,H,Z,G){y.isVector4?R.set(y.x,y.y,y.z,y.w):R.set(y,H,Z,G),me.scissor(O.copy(R).multiplyScalar(z).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(y){me.setScissorTest(k=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){P=y},this.getClearColor=function(y){return y.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(y=!0,H=!0,Z=!0){let G=0;y&&(G|=16384),H&&(G|=256),Z&&(G|=1024),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Fe,!1),Gt.dispose(),A.dispose(),X.dispose(),$e.dispose(),ot.dispose(),lt.dispose(),V.dispose(),he.dispose(),Ye.dispose(),de.dispose(),de.removeEventListener("sessionstart",pe),de.removeEventListener("sessionend",be),J&&(J.dispose(),J=null),qe.stop()};function xe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const y=je.autoReset,H=q.enabled,Z=q.autoUpdate,G=q.needsUpdate,K=q.type;ge(),je.autoReset=y,q.enabled=H,q.autoUpdate=Z,q.needsUpdate=G,q.type=K}function Fe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Be(y){const H=y.target;H.removeEventListener("dispose",Be),Je(H)}function Je(y){F(y),X.remove(y)}function F(y){const H=X.get(y).programs;H!==void 0&&(H.forEach(function(Z){Ye.releaseProgram(Z)}),y.isShaderMaterial&&Ye.releaseShaderCache(y))}this.renderBufferDirect=function(y,H,Z,G,K,Ae){H===null&&(H=ee);const De=K.isMesh&&K.matrixWorld.determinant()<0,Ie=Ql(y,H,Z,G,K);me.setMaterial(G,De);let ze=Z.index,Xe=1;G.wireframe===!0&&(ze=zt.getWireframeAttribute(Z),Xe=2);const ke=Z.drawRange,Ve=Z.attributes.position;let ct=ke.start*Xe,jt=(ke.start+ke.count)*Xe;Ae!==null&&(ct=Math.max(ct,Ae.start*Xe),jt=Math.min(jt,(Ae.start+Ae.count)*Xe)),ze!==null?(ct=Math.max(ct,0),jt=Math.min(jt,ze.count)):Ve!=null&&(ct=Math.max(ct,0),jt=Math.min(jt,Ve.count));const Cn=jt-ct;if(Cn<0||Cn===1/0)return;V.setup(K,G,Ie,Z,ze);let Zn,ut=ue;if(ze!==null&&(Zn=pt.get(ze),ut=Ce,ut.setIndex(Zn)),K.isMesh)G.wireframe===!0?(me.setLineWidth(G.wireframeLinewidth*ae()),ut.setMode(1)):ut.setMode(4);else if(K.isLine){let Ge=G.linewidth;Ge===void 0&&(Ge=1),me.setLineWidth(Ge*ae()),K.isLineSegments?ut.setMode(1):K.isLineLoop?ut.setMode(2):ut.setMode(3)}else K.isPoints?ut.setMode(0):K.isSprite&&ut.setMode(4);if(K.isInstancedMesh)ut.renderInstances(ct,Cn,K.count);else if(Z.isInstancedBufferGeometry){const Ge=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,is=Math.min(Z.instanceCount,Ge);ut.renderInstances(ct,Cn,is)}else ut.render(ct,Cn)},this.compile=function(y,H){function Z(G,K,Ae){G.transparent===!0&&G.side===pr?(G.side=ln,G.needsUpdate=!0,nn(G,K,Ae),G.side=ci,G.needsUpdate=!0,nn(G,K,Ae),G.side=pr):nn(G,K,Ae)}d=A.get(y),d.init(),_.push(d),y.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights(p.physicallyCorrectLights),y.traverse(function(G){const K=G.material;if(K)if(Array.isArray(K))for(let Ae=0;Ae<K.length;Ae++){const De=K[Ae];Z(De,y,G)}else Z(K,y,G)}),_.pop(),d=null};let Y=null;function te(y){Y&&Y(y)}function pe(){qe.stop()}function be(){qe.start()}const qe=new Fl;qe.setAnimationLoop(te),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(y){Y=y,de.setAnimationLoop(y),y===null?qe.stop():qe.start()},de.addEventListener("sessionstart",pe),de.addEventListener("sessionend",be),this.render=function(y,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(H),H=de.getCamera()),y.isScene===!0&&y.onBeforeRender(p,y,H,x),d=A.get(y,_.length),d.init(),_.push(d),E.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Q.setFromProjectionMatrix(E),$=this.localClippingEnabled,j=w.init(this.clippingPlanes,$,H),f=Gt.get(y,m.length),f.init(),m.push(f),bt(y,H,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(W,P),j===!0&&w.beginShadows();const Z=d.state.shadowsArray;if(q.render(Z,y,H),j===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(f,y),d.setupLights(p.physicallyCorrectLights),H.isArrayCamera){const G=H.cameras;for(let K=0,Ae=G.length;K<Ae;K++){const De=G[K];Ct(f,y,De,De.viewport)}}else Ct(f,y,H);x!==null&&(ce.updateMultisampleRenderTarget(x),ce.updateRenderTargetMipmap(x)),y.isScene===!0&&y.onAfterRender(p,y,H),V.resetDefaultState(),M=-1,S=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function bt(y,H,Z,G){if(y.visible===!1)return;if(y.layers.test(H.layers)){if(y.isGroup)Z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(H);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Q.intersectsSprite(y)){G&&re.setFromMatrixPosition(y.matrixWorld).applyMatrix4(E);const De=lt.update(y),Ie=y.material;Ie.visible&&f.push(y,De,Ie,Z,re.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==je.render.frame&&(y.skeleton.update(),y.skeleton.frame=je.render.frame),!y.frustumCulled||Q.intersectsObject(y))){G&&re.setFromMatrixPosition(y.matrixWorld).applyMatrix4(E);const De=lt.update(y),Ie=y.material;if(Array.isArray(Ie)){const ze=De.groups;for(let Xe=0,ke=ze.length;Xe<ke;Xe++){const Ve=ze[Xe],ct=Ie[Ve.materialIndex];ct&&ct.visible&&f.push(y,De,ct,Z,re.z,Ve)}}else Ie.visible&&f.push(y,De,Ie,Z,re.z,null)}}const Ae=y.children;for(let De=0,Ie=Ae.length;De<Ie;De++)bt(Ae[De],H,Z,G)}function Ct(y,H,Z,G){const K=y.opaque,Ae=y.transmissive,De=y.transparent;d.setupLightsView(Z),Ae.length>0&&Yn(K,H,Z),G&&me.viewport(C.copy(G)),K.length>0&&st(K,H,Z),Ae.length>0&&st(Ae,H,Z),De.length>0&&st(De,H,Z),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Yn(y,H,Z){const G=Te.isWebGL2;J===null&&(J=new Xn(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?or:ui,minFilter:ar,samples:G&&s===!0?4:0})),p.getDrawingBufferSize(I),G?J.setSize(I.x,I.y):J.setSize(Hr(I.x),Hr(I.y));const K=p.getRenderTarget();p.setRenderTarget(J),p.clear();const Ae=p.toneMapping;p.toneMapping=yn,st(y,H,Z),p.toneMapping=Ae,ce.updateMultisampleRenderTarget(J),ce.updateRenderTargetMipmap(J),p.setRenderTarget(K)}function st(y,H,Z){const G=H.isScene===!0?H.overrideMaterial:null;for(let K=0,Ae=y.length;K<Ae;K++){const De=y[K],Ie=De.object,ze=De.geometry,Xe=G===null?De.material:G,ke=De.group;Ie.layers.test(Z.layers)&&Tn(Ie,H,Z,ze,Xe,ke)}}function Tn(y,H,Z,G,K,Ae){y.onBeforeRender(p,H,Z,G,K,Ae),y.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),K.onBeforeRender(p,H,Z,G,y,Ae),K.transparent===!0&&K.side===pr?(K.side=ln,K.needsUpdate=!0,p.renderBufferDirect(Z,H,G,K,y,Ae),K.side=ci,K.needsUpdate=!0,p.renderBufferDirect(Z,H,G,K,y,Ae),K.side=pr):p.renderBufferDirect(Z,H,G,K,y,Ae),y.onAfterRender(p,H,Z,G,K,Ae)}function nn(y,H,Z){H.isScene!==!0&&(H=ee);const G=X.get(y),K=d.state.lights,Ae=d.state.shadowsArray,De=K.state.version,Ie=Ye.getParameters(y,K.state,Ae,H,Z),ze=Ye.getProgramCacheKey(Ie);let Xe=G.programs;G.environment=y.isMeshStandardMaterial?H.environment:null,G.fog=H.fog,G.envMap=(y.isMeshStandardMaterial?ot:$e).get(y.envMap||G.environment),Xe===void 0&&(y.addEventListener("dispose",Be),Xe=new Map,G.programs=Xe);let ke=Xe.get(ze);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===De)return ma(y,Ie),ke}else Ie.uniforms=Ye.getUniforms(y),y.onBuild(Z,Ie,p),y.onBeforeCompile(Ie,p),ke=Ye.acquireProgram(Ie,ze),Xe.set(ze,ke),G.uniforms=Ie.uniforms;const Ve=G.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ve.clippingPlanes=w.uniform),ma(y,Ie),G.needsLights=ec(y),G.lightsStateVersion=De,G.needsLights&&(Ve.ambientLightColor.value=K.state.ambient,Ve.lightProbe.value=K.state.probe,Ve.directionalLights.value=K.state.directional,Ve.directionalLightShadows.value=K.state.directionalShadow,Ve.spotLights.value=K.state.spot,Ve.spotLightShadows.value=K.state.spotShadow,Ve.rectAreaLights.value=K.state.rectArea,Ve.ltc_1.value=K.state.rectAreaLTC1,Ve.ltc_2.value=K.state.rectAreaLTC2,Ve.pointLights.value=K.state.point,Ve.pointLightShadows.value=K.state.pointShadow,Ve.hemisphereLights.value=K.state.hemi,Ve.directionalShadowMap.value=K.state.directionalShadowMap,Ve.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ve.spotShadowMap.value=K.state.spotShadowMap,Ve.spotLightMatrix.value=K.state.spotLightMatrix,Ve.spotLightMap.value=K.state.spotLightMap,Ve.pointShadowMap.value=K.state.pointShadowMap,Ve.pointShadowMatrix.value=K.state.pointShadowMatrix);const ct=ke.getUniforms(),jt=kr.seqWithValue(ct.seq,Ve);return G.currentProgram=ke,G.uniformsList=jt,ke}function ma(y,H){const Z=X.get(y);Z.outputEncoding=H.outputEncoding,Z.instancing=H.instancing,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function Ql(y,H,Z,G,K){H.isScene!==!0&&(H=ee),ce.resetTextureUnits();const Ae=H.fog,De=G.isMeshStandardMaterial?H.environment:null,Ie=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:jn,ze=(G.isMeshStandardMaterial?ot:$e).get(G.envMap||De),Xe=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ke=!!G.normalMap&&!!Z.attributes.tangent,Ve=!!Z.morphAttributes.position,ct=!!Z.morphAttributes.normal,jt=!!Z.morphAttributes.color,Cn=G.toneMapped?p.toneMapping:yn,Zn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ut=Zn!==void 0?Zn.length:0,Ge=X.get(G),is=d.state.lights;if(j===!0&&($===!0||y!==S)){const Xt=y===S&&G.id===M;w.setState(G,y,Xt)}let Mt=!1;G.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==is.state.version||Ge.outputEncoding!==Ie||K.isInstancedMesh&&Ge.instancing===!1||!K.isInstancedMesh&&Ge.instancing===!0||K.isSkinnedMesh&&Ge.skinning===!1||!K.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==ze||G.fog===!0&&Ge.fog!==Ae||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==w.numPlanes||Ge.numIntersection!==w.numIntersection)||Ge.vertexAlphas!==Xe||Ge.vertexTangents!==ke||Ge.morphTargets!==Ve||Ge.morphNormals!==ct||Ge.morphColors!==jt||Ge.toneMapping!==Cn||Te.isWebGL2===!0&&Ge.morphTargetsCount!==ut)&&(Mt=!0):(Mt=!0,Ge.__version=G.version);let Kn=Ge.currentProgram;Mt===!0&&(Kn=nn(G,H,K));let ga=!1,Xi=!1,rs=!1;const Ft=Kn.getUniforms(),Jn=Ge.uniforms;if(me.useProgram(Kn.program)&&(ga=!0,Xi=!0,rs=!0),G.id!==M&&(M=G.id,Xi=!0),ga||S!==y){if(Ft.setValue(N,"projectionMatrix",y.projectionMatrix),Te.logarithmicDepthBuffer&&Ft.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),S!==y&&(S=y,Xi=!0,rs=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Xt=Ft.map.cameraPosition;Xt!==void 0&&Xt.setValue(N,re.setFromMatrixPosition(y.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ft.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||K.isSkinnedMesh)&&Ft.setValue(N,"viewMatrix",y.matrixWorldInverse)}if(K.isSkinnedMesh){Ft.setOptional(N,K,"bindMatrix"),Ft.setOptional(N,K,"bindMatrixInverse");const Xt=K.skeleton;Xt&&(Te.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),Ft.setValue(N,"boneTexture",Xt.boneTexture,ce),Ft.setValue(N,"boneTextureSize",Xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ss=Z.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0&&Te.isWebGL2===!0)&&se.update(K,Z,G,Kn),(Xi||Ge.receiveShadow!==K.receiveShadow)&&(Ge.receiveShadow=K.receiveShadow,Ft.setValue(N,"receiveShadow",K.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Jn.envMap.value=ze,Jn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Xi&&(Ft.setValue(N,"toneMappingExposure",p.toneMappingExposure),Ge.needsLights&&$l(Jn,rs),Ae&&G.fog===!0&&tn.refreshFogUniforms(Jn,Ae),tn.refreshMaterialUniforms(Jn,G,z,D,J),kr.upload(N,Ge.uniformsList,Jn,ce)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(kr.upload(N,Ge.uniformsList,Jn,ce),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ft.setValue(N,"center",K.center),Ft.setValue(N,"modelViewMatrix",K.modelViewMatrix),Ft.setValue(N,"normalMatrix",K.normalMatrix),Ft.setValue(N,"modelMatrix",K.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Xt=G.uniformsGroups;for(let as=0,tc=Xt.length;as<tc;as++)if(Te.isWebGL2){const _a=Xt[as];he.update(_a,Kn),he.bind(_a,Kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kn}function $l(y,H){y.ambientLightColor.needsUpdate=H,y.lightProbe.needsUpdate=H,y.directionalLights.needsUpdate=H,y.directionalLightShadows.needsUpdate=H,y.pointLights.needsUpdate=H,y.pointLightShadows.needsUpdate=H,y.spotLights.needsUpdate=H,y.spotLightShadows.needsUpdate=H,y.rectAreaLights.needsUpdate=H,y.hemisphereLights.needsUpdate=H}function ec(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(y,H,Z){X.get(y.texture).__webglTexture=H,X.get(y.depthTexture).__webglTexture=Z;const G=X.get(y);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=Z===void 0,G.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,H){const Z=X.get(y);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(y,H=0,Z=0){x=y,g=H,b=Z;let G=!0,K=null,Ae=!1,De=!1;if(y){const ze=X.get(y);ze.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),G=!1):ze.__webglFramebuffer===void 0?ce.setupRenderTarget(y):ze.__hasExternalTextures&&ce.rebindTextures(y,X.get(y.texture).__webglTexture,X.get(y.depthTexture).__webglTexture);const Xe=y.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(De=!0);const ke=X.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(K=ke[H],Ae=!0):Te.isWebGL2&&y.samples>0&&ce.useMultisampledRTT(y)===!1?K=X.get(y).__webglMultisampledFramebuffer:K=ke,C.copy(y.viewport),O.copy(y.scissor),v=y.scissorTest}else C.copy(U).multiplyScalar(z).floor(),O.copy(R).multiplyScalar(z).floor(),v=k;if(me.bindFramebuffer(36160,K)&&Te.drawBuffers&&G&&me.drawBuffers(y,K),me.viewport(C),me.scissor(O),me.setScissorTest(v),Ae){const ze=X.get(y.texture);N.framebufferTexture2D(36160,36064,34069+H,ze.__webglTexture,Z)}else if(De){const ze=X.get(y.texture),Xe=H||0;N.framebufferTextureLayer(36160,36064,ze.__webglTexture,Z||0,Xe)}M=-1},this.readRenderTargetPixels=function(y,H,Z,G,K,Ae,De){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&De!==void 0&&(Ie=Ie[De]),Ie){me.bindFramebuffer(36160,Ie);try{const ze=y.texture,Xe=ze.format,ke=ze.type;if(Xe!==vn&&L.convert(Xe)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=ke===or&&(_e.has("EXT_color_buffer_half_float")||Te.isWebGL2&&_e.has("EXT_color_buffer_float"));if(ke!==ui&&L.convert(ke)!==N.getParameter(35738)&&!(ke===si&&(Te.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=y.width-G&&Z>=0&&Z<=y.height-K&&N.readPixels(H,Z,G,K,L.convert(Xe),L.convert(ke),Ae)}finally{const ze=x!==null?X.get(x).__webglFramebuffer:null;me.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(y,H,Z=0){const G=Math.pow(2,-Z),K=Math.floor(H.image.width*G),Ae=Math.floor(H.image.height*G);ce.setTexture2D(H,0),N.copyTexSubImage2D(3553,Z,0,0,y.x,y.y,K,Ae),me.unbindTexture()},this.copyTextureToTexture=function(y,H,Z,G=0){const K=H.image.width,Ae=H.image.height,De=L.convert(Z.format),Ie=L.convert(Z.type);ce.setTexture2D(Z,0),N.pixelStorei(37440,Z.flipY),N.pixelStorei(37441,Z.premultiplyAlpha),N.pixelStorei(3317,Z.unpackAlignment),H.isDataTexture?N.texSubImage2D(3553,G,y.x,y.y,K,Ae,De,Ie,H.image.data):H.isCompressedTexture?N.compressedTexSubImage2D(3553,G,y.x,y.y,H.mipmaps[0].width,H.mipmaps[0].height,De,H.mipmaps[0].data):N.texSubImage2D(3553,G,y.x,y.y,De,Ie,H.image),G===0&&Z.generateMipmaps&&N.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(y,H,Z,G,K=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=y.max.x-y.min.x+1,De=y.max.y-y.min.y+1,Ie=y.max.z-y.min.z+1,ze=L.convert(G.format),Xe=L.convert(G.type);let ke;if(G.isData3DTexture)ce.setTexture3D(G,0),ke=32879;else if(G.isDataArrayTexture)ce.setTexture2DArray(G,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,G.flipY),N.pixelStorei(37441,G.premultiplyAlpha),N.pixelStorei(3317,G.unpackAlignment);const Ve=N.getParameter(3314),ct=N.getParameter(32878),jt=N.getParameter(3316),Cn=N.getParameter(3315),Zn=N.getParameter(32877),ut=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;N.pixelStorei(3314,ut.width),N.pixelStorei(32878,ut.height),N.pixelStorei(3316,y.min.x),N.pixelStorei(3315,y.min.y),N.pixelStorei(32877,y.min.z),Z.isDataTexture||Z.isData3DTexture?N.texSubImage3D(ke,K,H.x,H.y,H.z,Ae,De,Ie,ze,Xe,ut.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(ke,K,H.x,H.y,H.z,Ae,De,Ie,ze,ut.data)):N.texSubImage3D(ke,K,H.x,H.y,H.z,Ae,De,Ie,ze,Xe,ut),N.pixelStorei(3314,Ve),N.pixelStorei(32878,ct),N.pixelStorei(3316,jt),N.pixelStorei(3315,Cn),N.pixelStorei(32877,Zn),K===0&&G.generateMipmaps&&N.generateMipmap(ke),me.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?ce.setTextureCube(y,0):y.isData3DTexture?ce.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ce.setTexture2DArray(y,0):ce.setTexture2D(y,0),me.unbindTexture()},this.resetState=function(){g=0,b=0,x=null,me.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Em extends Vl{}Em.prototype.isWebGL1Renderer=!0;class Am extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Tm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ys,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new B;class Gn{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Lo extends Qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Do=new it,Po=new it,Or=[],Cm=new it,er=new Jt;let Ro=class extends Jt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,Cm)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Do),Po.multiplyMatrices(n,Do),er.matrixWorld=Po,er.raycast(e,Or);for(let o=0,a=Or.length;o<a;o++){const l=Or[o];l.instanceId=s,l.object=this,t.push(l)}Or.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Lo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};class fa extends fn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new B,d=new B,m=[],_=[],p=[],h=[];for(let g=0;g<=n;g++){const b=[],x=g/n;let M=0;g==0&&o==0?M=.5/t:g==n&&l==Math.PI&&(M=-.5/t);for(let S=0;S<=t;S++){const C=S/t;f.x=-e*Math.cos(i+C*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(i+C*s)*Math.sin(o+x*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),p.push(d.x,d.y,d.z),h.push(C+M,1-x),b.push(u++)}c.push(b)}for(let g=0;g<n;g++)for(let b=0;b<t;b++){const x=c[g][b+1],M=c[g][b],S=c[g+1][b],C=c[g+1][b+1];(g!==0||o>0)&&m.push(x,M,C),(g!==n-1||l<Math.PI)&&m.push(M,S,C)}this.setIndex(m),this.setAttribute("position",new Vt(_,3)),this.setAttribute("normal",new Vt(p,3)),this.setAttribute("uv",new Vt(h,2))}static fromJSON(e){return new fa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lm extends fn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new B,s=new B;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let u=0,c=l.length;u<c;++u){const f=l[u],d=f.start,m=f.count;for(let _=d,p=d+m;_<p;_+=3)for(let h=0;h<3;h++){const g=a.getX(_+h),b=a.getX(_+(h+1)%3);i.fromBufferAttribute(o,g),s.fromBufferAttribute(o,b),Io(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let u=0;u<3;u++){const c=3*a+u,f=3*a+(u+1)%3;i.fromBufferAttribute(o,c),s.fromBufferAttribute(o,f),Io(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Vt(t,3))}}}function Io(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class Dm extends Hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pm extends Hi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Oo={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Rm{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){a++,s===!1&&i.onStart!==void 0&&i.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,i.onProgress!==void 0&&i.onProgress(c,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const m=u[f],_=u[f+1];if(m.global&&(m.lastIndex=0),m.test(c))return _}return null}}}const Gl=new Rm;class Hl{constructor(e){this.manager=e!==void 0?e:Gl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Im extends Hl{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Oo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=cr("img");function l(){c(),Oo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class zo extends Hl{constructor(e){super(e)}load(e,t,n,i){const s=new Wt,o=new Im(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Om extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Us=new it,Fo=new B,No=new B;class zm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fo),No.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(No),t.updateMatrixWorld(),Us.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Us),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Us)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fm extends zm{constructor(){super(new ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}let Nm=class extends Om{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DefaultUp),this.updateMatrix(),this.target=new rt,this.shadow=new Fm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};class Um extends fn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Wl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Uo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Uo(){return(typeof performance>"u"?Date:performance).now()}class Qs extends Tm{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Bm{constructor(e,t,n=0,i=1/0){this.ray=new Dl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new aa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return $s(e,this,n,t),n.sort(Bo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)$s(e[i],this,n,t);return n.sort(Bo),n}}function Bo(r,e){return r.distance-e.distance}function $s(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)$s(i[s],e,t,!0)}}class ko{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Vo=new B,zr=new B;class km{constructor(e=new B,t=new B){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Vo.subVectors(e,this.start),zr.subVectors(this.end,this.start);const n=zr.dot(zr);let s=zr.dot(Vo)/n;return t&&(s=Dt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=na);const Vm={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Jr{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Gm=new ca(-1,1,1,-1,0,1),da=new fn;da.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3));da.setAttribute("uv",new Vt([0,2,0,0,2,0],2));class Hm{constructor(e){this._mesh=new Jt(da,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Wm extends Jr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof An?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yr.clone(e.uniforms),this.material=new An({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Hm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Go extends Jr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class jm extends Jr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Xm{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Le);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Xn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wm(Vm),this.clock=new Wl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Go!==void 0&&(o instanceof Go?n=!0:o instanceof jm&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jl extends Jr{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const qm=(r,e,t)=>{r.renderer=new Vl({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),r.composer=new Xm(r.renderer),r.composer.addPass(new jl(r.scene,Hn(r.camera)))},Ho=(r,e,t)=>{r.renderer&&(e?r.renderer.outputEncoding=jn:r.renderer.outputEncoding=tt,t?r.renderer.toneMapping=yn:r.renderer.toneMapping=Sl)},Wo=(r,e,t)=>{var n,i,s,o,a,l,u,c;!r.renderer||!r.composer||((i=(n=r.renderer).setSize)==null||i.call(n,e.width,e.height),(o=(s=r.renderer).setPixelRatio)==null||o.call(s,t),(l=(a=r.composer).setSize)==null||l.call(a,e.width,e.height),(c=(u=r.composer).setPixelRatio)==null||c.call(u,t))},jo=(r,e,t)=>{r.renderer&&(r.renderer.shadowMap.enabled=e,r.renderer.shadowMap.type=t)},an=r=>r.userData,Ym=(r,e)=>{r.pointer.update(t=>r.renderer?t.set(e.offsetX/r.renderer.domElement.clientWidth*2-1,-(e.offsetY/r.renderer.domElement.clientHeight)*2+1):t)},Xl=(r,e,t,n)=>(r.raycaster.setFromCamera(e,t),r.raycaster.intersectObjects(n,!1)),Zm=(r,e)=>r.object.uuid!==e.object.uuid||r.instanceId!==e.instanceId,Km=(r,e,t)=>{let n=Hn(r.camera);const i=r.camera.subscribe(u=>n=u);ht(i);let s=Hn(r.pointer);const o=r.pointer.subscribe(u=>s=u);ht(o);let a;const l=u=>{var d,m;u.preventDefault();const c=u.type;r.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,Ym(r,u);const f=Jm(e,s,n);if(c==="pointerdown"&&(a=f?{object:f.object,instanceId:f.instanceId}:null),c==="click"){if(!Qm(f,a)){a=null;return}a=null}f&&((m=(d=an(f.object)).eventDispatcher)==null||m.call(d,c,{...f,event:u}))};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function Jm(r,e,t){if(r.interactiveObjects.size===0||r.raycastableObjects.size===0)return null;const n=Xl(r,e,t,Array.from(r.raycastableObjects));return n.length===0||!r.interactiveObjects.has(n[0].object)?null:n[0]}function Qm(r,e){return!r||!e?!1:r.object.uuid===e.object.uuid&&r.instanceId===e.instanceId}const $m=(r,e)=>{let t=Hn(r.pointerOverCanvas);const n=r.pointerOverCanvas.subscribe(u=>t=u);ht(n);let i=Hn(r.camera);const s=r.camera.subscribe(u=>i=u);ht(s);let o=Hn(r.pointer);const a=r.pointer.subscribe(u=>o=u);return ht(a),{raycast:()=>{var f,d,m,_,p,h,g,b;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const u=t?Xl(e,o,i,Array.from(e.raycastableObjects)):[],c=u.length&&e.interactiveObjects.has(u[0].object)?u[0]:null;c?e.lastIntersection?e.lastIntersection&&Zm(e.lastIntersection,c)&&((h=(p=an(e.lastIntersection.object)).eventDispatcher)==null||h.call(p,"pointerleave",e.lastIntersection),(b=(g=an(c.object)).eventDispatcher)==null||b.call(g,"pointerenter",c)):(_=(m=an(c.object)).eventDispatcher)==null||_.call(m,"pointerenter",c):e.lastIntersection&&((d=(f=an(e.lastIntersection.object)).eventDispatcher)==null||d.call(f,"pointerleave",e.lastIntersection)),e.lastIntersection=c}}},Qr=typeof window<"u",eg=r=>{if(!Qr)return;let e;const t=()=>{r(),e=requestAnimationFrame(t)};t(),ht(()=>{e&&cancelAnimationFrame(e)})},tg=(r,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,s)=>s.order?!0:i,!1),n=r.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,s)=>(i.order??0)>(s.order??0)?1:-1).forEach(i=>i.fn(r,n)):e.frameHandlers.forEach(i=>i.fn(r,n))},ng=r=>{r.debugFrameloop&&(r.frame+=1,console.log(`frame: ${r.frame}${Object.keys(r.invalidations).length>0?", requested by ↴":""}`),Object.keys(r.invalidations).length>0&&console.table(r.invalidations),r.invalidations={})},ig=(r,e,t,n)=>{let i=Hn(r.camera);const s=r.camera.subscribe(a=>i=a);ht(s);const{raycast:o}=$m(r,e);eg(()=>{n.dispose();const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),a&&(!i||!r.composer||!r.renderer||(tg(r,t),r.composer.passes.length>1?r.composer.render():r.renderer.render(r.scene,i),ng(t),t.frameInvalidated=!1,t.advance=!1))})},rg=()=>{const r=new Zt(75,0,.1,1e3);return an(r).threlteDefaultCamera=!0,r.position.z=5,r.lookAt(0,0,0),r},sg=r=>{const e=r.size.subscribe(t=>{an(Hn(r.camera)).threlteDefaultCamera&&r.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),r.invalidate("Default camera: aspect ratio changed"),i})});ht(e)},ag=(r,e,t,n,i,s,o)=>{const a={audioListeners:new Map,addAudioListener:(g,b)=>{if(b=b??"default",a.audioListeners.has(b)){console.warn(`An AudioListener with the id "${b}" has already been added, aborting.`);return}a.audioListeners.set(b,g)},removeAudioListener:g=>{if(g=g??"default",!a.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}a.audioListeners.delete(g)},getAudioListener:g=>{if(g=g??"default",!a.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}return a.audioListeners.get(g)}},l={debugFrameloop:s,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},u={size:ac([n,i],([g,b])=>g||b),pointer:At(new Le),pointerOverCanvas:At(!1),clock:new Wl,camera:At(rg()),scene:new Am,renderer:void 0,composer:void 0,invalidate:g=>{l.frameInvalidated=!0,l.debugFrameloop&&g&&(l.invalidations[g]=l.invalidations[g]?l.invalidations[g]+1:1)},advance:()=>{l.advance=!0}},c={flat:At(e),linear:At(r),dpr:At(t),setCamera:g=>{u.camera.set(g),u.composer&&(u.composer.passes.forEach(b=>{b instanceof jl&&(b.camera=g)}),u.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Bm,lastIntersection:null,addRaycastableObject:g=>{c.raycastableObjects.add(g)},removeRaycastableObject:g=>{c.raycastableObjects.delete(g)},addInteractiveObject:g=>{c.interactiveObjects.add(g)},removeInteractiveObject:g=>{c.interactiveObjects.delete(g)},addPass:g=>{u.composer&&(u.composer.addPass(g),u.invalidate("Canvas: adding pass"))},removePass:g=>{u.composer&&(u.composer.removePass(g),u.invalidate("Canvas: removing pass"))}},f={dispose:async(g=!1)=>{await sr(),!(!f.shouldDispose&&!g)&&(f.disposableObjects.forEach((b,x)=>{var M;(b===0||g)&&((M=x==null?void 0:x.dispose)==null||M.call(x),f.disposableObjects.delete(x))}),f.shouldDispose=!1)},collectDisposableObjects:(g,b)=>{const x=b??[];return g&&(g!=null&&g.dispose&&typeof g.dispose=="function"&&g.type!=="Scene"&&x.push(g),Object.entries(g).forEach(([M,S])=>{if(M==="parent"||M==="children"||typeof S!="object")return;const C=S;C!=null&&C.dispose&&f.collectDisposableObjects(C,x)})),x},addDisposableObjects:g=>{g.forEach(b=>{const x=f.disposableObjects.get(b);x?f.disposableObjects.set(b,x+1):f.disposableObjects.set(b,1)})},removeDisposableObjects:g=>{g.length!==0&&(g.forEach(b=>{const x=f.disposableObjects.get(b);x&&x>0&&f.disposableObjects.set(b,x-1)}),f.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return gn("threlte",u),gn("threlte-root",c),gn("threlte-render-context",l),gn("threlte-audio-context",a),gn("threlte-disposal-context",f),{ctx:u,rootCtx:c,renderCtx:l,audioCtx:a,disposalCtx:f,getCtx:()=>u,getRootCtx:()=>c,getRenderCtx:()=>l,getAudioCtx:()=>a,getDisposalCtx:()=>f}};function $r(r,e){const t=At(r);let n=r;const i=t.subscribe(a=>n=a);return ht(i),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(a),e==null||e(a,l)},update:a=>{const l=a(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const u=n;t.set(l),e==null||e(l,u)}}}const en=()=>En("threlte");function og(r){let e;const t=r[8].default,n=Pt(t,r,r[7],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&128)&&Rt(n,t,i,i[7],e?Ot(t,i[7],s,null):It(i[7]),null)},i(i){e||(ie(n,i),e=!0)},o(i){le(n,i),e=!1},d(i){n&&n.d(i)}}}const lg=()=>({onChildMount:En("threlte-hierarchical-object-on-mount"),onChildDestroy:En("threlte-hierarchical-object-on-destroy")}),ql=()=>En("threlte-hierarchical-parent-context");function cg(r,e,t){var g;let n,{$$slots:i={},$$scope:s}=e,{object:o=void 0}=e,{children:a=[]}=e,{onChildMount:l=void 0}=e;const u=b=>{a.push(b),t(1,a),l==null||l(b)};let{onChildDestroy:c=void 0}=e;const f=b=>{const x=a.findIndex(M=>M.uuid===b.uuid);x!==-1&&a.splice(x,1),t(1,a),c==null||c(b)},{invalidate:d}=en(),m=ql();Qe(r,m,b=>t(6,n=b));let{parent:_=n}=e;const p=lg();o&&((g=p.onChildMount)==null||g.call(p,o),d("HierarchicalObject: object added"));const h=$r(o,(b,x)=>{var M,S;x&&((M=p.onChildDestroy)==null||M.call(p,x),d("HierarchicalObject: object added")),b&&((S=p.onChildMount)==null||S.call(p,b),d("HierarchicalObject: object removed"))});return ht(()=>{var b;o&&((b=p.onChildDestroy)==null||b.call(p,o),d("HierarchicalObject: object removed"))}),gn("threlte-hierarchical-object-on-mount",u),gn("threlte-hierarchical-object-on-destroy",f),gn("threlte-hierarchical-parent-context",h),r.$$set=b=>{"object"in b&&t(3,o=b.object),"children"in b&&t(1,a=b.children),"onChildMount"in b&&t(4,l=b.onChildMount),"onChildDestroy"in b&&t(5,c=b.onChildDestroy),"parent"in b&&t(2,_=b.parent),"$$scope"in b&&t(7,s=b.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(2,_=n),r.$$.dirty&8&&h.set(o)},[m,a,_,o,l,c,n,s,i]}class ug extends He{constructor(e){super(),We(this,e,cg,og,Ue,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function fg(r){let e;const t=r[1].default,n=Pt(t,r,r[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&Rt(n,t,i,i[4],e?Ot(t,i[4],s,null):It(i[4]),null)},i(i){e||(ie(n,i),e=!0)},o(i){le(n,i),e=!1},d(i){n&&n.d(i)}}}function dg(r){let e,t;return e=new ug({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[fg]},$$scope:{ctx:r}}}),{c(){Se(e.$$.fragment)},l(n){we(e.$$.fragment,n)},m(n,i){ye(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){le(e.$$.fragment,n),t=!1},d(n){Ee(e,n)}}}function hg(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const o=l=>s.add(l),a=l=>s.remove(l);return r.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[s,n,o,a,i]}class es extends He{constructor(e){super(),We(this,e,hg,dg,Ue,{object:0})}}const pg=()=>{const r=At({width:0,height:0});let e={width:0,height:0};const t=r.subscribe(o=>e=o);ht(t);let n;const i=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:l}=n.parentElement;(a!==o.width||l!==o.height)&&r.set({width:a,height:l})},s=o=>{n=o,i(),window.addEventListener("resize",i)};return Qr?(ht(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:s,parentSize:r}):{parentSize:r,parentSizeAction:s}};function Xo(r){let e,t;return e=new es({props:{object:r[0].scene,$$slots:{default:[mg]},$$scope:{ctx:r}}}),{c(){Se(e.$$.fragment)},l(n){we(e.$$.fragment,n)},m(n,i){ye(e,n,i),t=!0},p(n,i){const s={};i[1]&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){le(e.$$.fragment,n),t=!1},d(n){Ee(e,n)}}}function mg(r){let e;const t=r[29].default,n=Pt(t,r,r[33],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&4)&&Rt(n,t,i,i[33],e?Ot(t,i[33],s,null):It(i[33]),null)},i(i){e||(ie(n,i),e=!0)},o(i){le(n,i),e=!1},d(i){n&&n.d(i)}}}function gg(r){let e,t,n,i,s=r[2]&&Xo(r);return{c(){e=gt("canvas"),s&&s.c(),this.h()},l(o){e=_t(o,"CANVAS",{class:!0});var a=Tt(e);s&&s.l(a),a.forEach(Me),this.h()},h(){nt(e,"class","svelte-o3oskp")},m(o,a){Oe(o,e,a),s&&s.m(e,null),r[30](e),t=!0,n||(i=[rc(r[3].call(null,e)),Mn(e,"click",r[9]),Mn(e,"contextmenu",r[10]),Mn(e,"pointerup",r[13]),Mn(e,"pointerdown",r[11]),Mn(e,"pointermove",r[12]),Mn(e,"pointerenter",r[31]),Mn(e,"pointerleave",r[32])],n=!0)},p(o,a){o[2]?s?(s.p(o,a),a[0]&4&&ie(s,1)):(s=Xo(o),s.c(),ie(s,1),s.m(e,null)):s&&(Vi(),le(s,1,1,()=>{s=null}),Gi())},i(o){t||(ie(s),t=!0)},o(o){le(s),t=!1},d(o){o&&Me(e),s&&s.d(),r[30](null),n=!1,pl(i)}}}const qo=new Set;function _g(r,e,t){let n,i,s,o,{$$slots:a={},$$scope:l}=e,{dpr:u=Qr?window.devicePixelRatio:1}=e,{flat:c=!1}=e,{linear:f=!1}=e,{frameloop:d="demand"}=e,{debugFrameloop:m=!1}=e,{shadows:_=!0}=e,{shadowMapType:p=xl}=e,{size:h=void 0}=e,{rendererParameters:g=void 0}=e,b,x=!1;const M=At(h),{parentSize:S,parentSizeAction:C}=pg(),O=ag(f,c,u,M,S,m,d),{getCtx:v,renderCtx:T,disposalCtx:D}=O,{ctx:z,rootCtx:W,audioCtx:P}=O;sg(z),qo.add(z.invalidate),ht(()=>{qo.delete(z.invalidate)});const{size:U,scene:R}=z;Qe(r,U,fe=>t(26,i=fe));const{flat:k,linear:Q,dpr:j}=W;Qe(r,k,fe=>t(27,s=fe)),Qe(r,Q,fe=>t(28,o=fe)),Qe(r,j,fe=>t(25,n=fe)),gn("threlte-parent",At(R)),ml(()=>{b&&(qm(z,b,g),Ho(z,o,s),Wo(z,i,n),jo(z,_,p),t(2,x=!0))}),ig(z,W,T,D);const{onClick:$,onContextMenu:J,onPointerDown:E,onPointerMove:I,onPointerUp:re}=Km(z,W,T);ht(()=>{D.dispose(!0)});function ee(fe){$t[fe?"unshift":"push"](()=>{b=fe,t(1,b)})}const ae=()=>v().pointerOverCanvas.set(!0),N=()=>v().pointerOverCanvas.set(!1);return r.$$set=fe=>{"dpr"in fe&&t(14,u=fe.dpr),"flat"in fe&&t(15,c=fe.flat),"linear"in fe&&t(16,f=fe.linear),"frameloop"in fe&&t(17,d=fe.frameloop),"debugFrameloop"in fe&&t(18,m=fe.debugFrameloop),"shadows"in fe&&t(19,_=fe.shadows),"shadowMapType"in fe&&t(20,p=fe.shadowMapType),"size"in fe&&t(21,h=fe.size),"rendererParameters"in fe&&t(22,g=fe.rendererParameters),"$$scope"in fe&&t(33,l=fe.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2097152&&M.set(h),r.$$.dirty[0]&65536&&mn(Q,o=f,o),r.$$.dirty[0]&32768&&mn(k,s=c,s),r.$$.dirty[0]&16384&&mn(j,n=u,n),r.$$.dirty[0]&402653184&&Ho(v(),o,s),r.$$.dirty[0]&100663296&&Wo(v(),i,n),r.$$.dirty[0]&1572864&&jo(v(),_,p)},[z,b,x,C,v,U,k,Q,j,$,J,E,I,re,u,c,f,d,m,_,p,h,g,W,P,n,i,s,o,a,ee,ae,N,l]}class vg extends He{constructor(e){super(),We(this,e,_g,gg,Ue,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const ha=()=>En("threlte-root"),xg=()=>En("threlte-disposal-context");function bg(r){let e;const t=r[9].default,n=Pt(t,r,r[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&Rt(n,t,i,i[8],e?Ot(t,i[8],s,null):It(i[8]),null)},i(i){e||(ie(n,i),e=!0)},o(i){le(n,i),e=!1},d(i){n&&n.d(i)}}}const Yo="threlte-disposable-object-context";function Mg(r,e,t){let n,i,{$$slots:s={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:l,removeDisposableObjects:u}=xg();let{object:c=void 0}=e,f=c,{dispose:d=void 0}=e;const m=En(Yo);Qe(r,m,h=>t(7,i=h));const _=At(d??i??!0);Qe(r,_,h=>t(6,n=h)),gn(Yo,_);let p=n?a(c):[];return l(p),ht(()=>{u(p)}),r.$$set=h=>{"object"in h&&t(2,c=h.object),"dispose"in h&&t(3,d=h.dispose),"$$scope"in h&&t(8,o=h.$$scope)},r.$$.update=()=>{r.$$.dirty&136&&_.set(d??i??!0),r.$$.dirty&116&&c!==f&&(u(p),t(5,p=n?a(c):[]),l(p),t(4,f=c))},[m,_,c,d,f,p,n,i,o,s]}class Nn extends He{constructor(e){super(),We(this,e,Mg,bg,Ue,{object:2,dispose:3})}}function Sg(r,e,t){let n,i,{object:s}=e;const o=$r(s);Qe(r,o,u=>t(4,i=u));const a=En("threlte-layers");Qe(r,a,u=>t(3,n=u));const{invalidate:l}=en();return r.$$set=u=>{"object"in u&&t(2,s=u.object)},r.$$.update=()=>{if(r.$$.dirty&4&&o.set(s),r.$$.dirty&24){if(n==="all")i.layers.enableAll();else if(n==="none")i.layers.disableAll();else if(Array.isArray(n))for(let u=0;u<32;u+=1){const c=u;n.includes(c)?i.layers.enable(u):i.layers.disable(u)}else n!==void 0&&i.layers.set(n);l("LayerableObject")}},[o,a,s,n,i]}class wg extends He{constructor(e){super(),We(this,e,Sg,null,Ue,{object:2})}}const ji=(r,e)=>{if(!Qr)return{start:()=>{},stop:()=>{},started:oc(!1)};const t=En("threlte-render-context"),n={fn:r,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=At(!1),s=()=>{t.frameHandlers.delete(n),i.set(!1)},o=()=>{t.frameHandlers.add(n),i.set(!0)};return((e==null?void 0:e.autostart)??!0)&&o(),ht(()=>{s()}),{start:o,stop:s,started:{subscribe:i.subscribe}}},Yl=()=>{const r=At(!1);return(async()=>{await sr(),r.set(!0)})(),r};function yg(r,e,t){let n,i,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:u=void 0}=e;const c=new B,f=ur(),{invalidate:d}=en(),m=Yl();Qe(r,m,x=>t(8,i=x));const _=async()=>{i||await sr(),f("transform")},p=async()=>{d("TransformableObject: transformed"),await _()};an(s).onTransform=p;const{start:h,stop:g}=ji(async()=>{u&&!l&&u instanceof rt&&(u.getWorldPosition(c),s.lookAt(c),await _())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),b=$r(s);return Qe(r,b,x=>t(7,n=x)),r.$$set=x=>{"object"in x&&t(2,s=x.object),"position"in x&&t(3,o=x.position),"scale"in x&&t(4,a=x.scale),"rotation"in x&&t(5,l=x.rotation),"lookAt"in x&&t(6,u=x.lookAt)},r.$$.update=()=>{r.$$.dirty&4&&b.set(s),r.$$.dirty&232&&(o&&(n.position.set(o.x??0,o.y??0,o.z??0),p()),u&&!l&&(u instanceof rt?h():(g(),n.lookAt(u.x??0,u.y??0,u.z??0),p())),u||g()),r.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set(a.x??1,a.y??1,a.z??1),p()),r.$$.dirty&160&&l&&(n.rotation.set(l.x??0,l.y??0,l.z??0,l.order??"XYZ"),p())},[m,b,s,o,a,l,u,n]}class ts extends He{constructor(e){super(),We(this,e,yg,null,Ue,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function Eg(r,e,t){let n,i,s,{object:o}=e,{viewportAware:a=!1}=e;const l=ur(),{camera:u,invalidate:c}=en();Qe(r,u,C=>t(8,s=C));const f=new Zr,d=new it,m=C=>C.type==="Mesh",_=new B,p=()=>s?(d.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),f.setFromProjectionMatrix(d),m(o)?f.intersectsObject(o):(o.getWorldPosition(_),f.containsPoint(_))):!0,h=Yl();Qe(r,h,C=>t(7,i=C));let{inViewport:g=p()}=e;const b=async C=>{C?(i||await sr(),l("viewportenter",o)):(i||await sr(),l("viewportleave",o))},{start:x,stop:M,started:S}=ji(()=>{const C=p();g===void 0?(t(3,g=p()),b(g)):C!==g&&(b(C),t(3,g=C))},{autostart:a,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return Qe(r,S,C=>t(6,n=C)),c("ViewportAwareObject"),r.$$set=C=>{"object"in C&&t(4,o=C.object),"viewportAware"in C&&t(5,a=C.viewportAware),"inViewport"in C&&t(3,g=C.inViewport)},r.$$.update=()=>{r.$$.dirty&96&&(a&&!n?x():!a&&n&&M())},[u,h,S,g,o,a,n]}class Ag extends He{constructor(e){super(),We(this,e,Eg,null,Ue,{object:4,viewportAware:5,inViewport:3})}}function Tg(r){let e;const t=r[14].default,n=Pt(t,r,r[18],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&262144)&&Rt(n,t,i,i[18],e?Ot(t,i[18],s,null):It(i[18]),null)},i(i){e||(ie(n,i),e=!0)},o(i){le(n,i),e=!1},d(i){n&&n.d(i)}}}function Cg(r){let e,t;return e=new es({props:{object:r[1],$$slots:{default:[Tg]},$$scope:{ctx:r}}}),{c(){Se(e.$$.fragment)},l(n){we(e.$$.fragment,n)},m(n,i){ye(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&262144&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){le(e.$$.fragment,n),t=!1},d(n){Ee(e,n)}}}function Lg(r){let e,t,n,i,s,o,a,l,u;e=new wg({props:{object:r[1]}}),n=new ts({props:{object:r[1],position:r[2],rotation:r[4],scale:r[3],lookAt:r[5]}}),s=new Nn({props:{object:r[1],dispose:r[7],$$slots:{default:[Cg]},$$scope:{ctx:r}}});function c(d){r[15](d)}let f={object:r[1],viewportAware:r[6]};return r[0]!==void 0&&(f.inViewport=r[0]),a=new Ag({props:f}),$t.push(()=>cn(a,"inViewport",c)),a.$on("viewportenter",r[16]),a.$on("viewportleave",r[17]),{c(){Se(e.$$.fragment),t=Ze(),Se(n.$$.fragment),i=Ze(),Se(s.$$.fragment),o=Ze(),Se(a.$$.fragment)},l(d){we(e.$$.fragment,d),t=Ke(d),we(n.$$.fragment,d),i=Ke(d),we(s.$$.fragment,d),o=Ke(d),we(a.$$.fragment,d)},m(d,m){ye(e,d,m),Oe(d,t,m),ye(n,d,m),Oe(d,i,m),ye(s,d,m),Oe(d,o,m),ye(a,d,m),u=!0},p(d,[m]){const _={};m&2&&(_.object=d[1]),e.$set(_);const p={};m&2&&(p.object=d[1]),m&4&&(p.position=d[2]),m&16&&(p.rotation=d[4]),m&8&&(p.scale=d[3]),m&32&&(p.lookAt=d[5]),n.$set(p);const h={};m&2&&(h.object=d[1]),m&128&&(h.dispose=d[7]),m&262146&&(h.$$scope={dirty:m,ctx:d}),s.$set(h);const g={};m&2&&(g.object=d[1]),m&64&&(g.viewportAware=d[6]),!l&&m&1&&(l=!0,g.inViewport=d[0],un(()=>l=!1)),a.$set(g)},i(d){u||(ie(e.$$.fragment,d),ie(n.$$.fragment,d),ie(s.$$.fragment,d),ie(a.$$.fragment,d),u=!0)},o(d){le(e.$$.fragment,d),le(n.$$.fragment,d),le(s.$$.fragment,d),le(a.$$.fragment,d),u=!1},d(d){Ee(e,d),d&&Me(t),Ee(n,d),d&&Me(i),Ee(s,d),d&&Me(o),Ee(a,d)}}}function Dg(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:c=!1}=e,{inViewport:f=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:_=void 0}=e,{renderOrder:p=void 0}=e,{visible:h=void 0}=e,{dispose:g=void 0}=e,{userData:b=void 0}=e;const{invalidate:x}=en(),M=()=>s;function S(v){f=v,t(0,f)}function C(v){Re.call(this,r,v)}function O(v){Re.call(this,r,v)}return r.$$set=v=>{"object"in v&&t(1,s=v.object),"position"in v&&t(2,o=v.position),"scale"in v&&t(3,a=v.scale),"rotation"in v&&t(4,l=v.rotation),"lookAt"in v&&t(5,u=v.lookAt),"viewportAware"in v&&t(6,c=v.viewportAware),"inViewport"in v&&t(0,f=v.inViewport),"castShadow"in v&&t(8,d=v.castShadow),"receiveShadow"in v&&t(9,m=v.receiveShadow),"frustumCulled"in v&&t(10,_=v.frustumCulled),"renderOrder"in v&&t(11,p=v.renderOrder),"visible"in v&&t(12,h=v.visible),"dispose"in v&&t(7,g=v.dispose),"userData"in v&&t(13,b=v.userData),"$$scope"in v&&t(18,i=v.$$scope)},r.$$.update=()=>{r.$$.dirty&16128&&(h!==void 0&&(M().visible=h),d!==void 0&&(M().castShadow=d),m!==void 0&&(M().receiveShadow=m),_!==void 0&&(M().frustumCulled=_),p!==void 0&&(M().renderOrder=p),b!==void 0&&(M().userData={...M().userData,...b}),x("Object3DInstance: props changed"))},[f,s,o,a,l,u,c,g,d,m,_,p,h,b,n,S,C,O,i]}class ns extends He{constructor(e){super(),We(this,e,Dg,Lg,Ue,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function Pg(r){let e;const t=r[17].default,n=Pt(t,r,r[21],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2097152)&&Rt(n,t,i,i[21],e?Ot(t,i[21],s,null):It(i[21]),null)},i(i){e||(ie(n,i),e=!0)},o(i){le(n,i),e=!1},d(i){n&&n.d(i)}}}function Rg(r){let e,t,n;function i(o){r[18](o)}let s={object:r[1],lookAt:r[5],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],position:r[2],scale:r[3],rotation:r[4],viewportAware:r[6],visible:r[11],userData:r[12],dispose:r[13],$$slots:{default:[Pg]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.inViewport=r[0]),e=new ns({props:s}),$t.push(()=>cn(e,"inViewport",i)),e.$on("viewportenter",r[19]),e.$on("viewportleave",r[20]),{c(){Se(e.$$.fragment)},l(o){we(e.$$.fragment,o)},m(o,a){ye(e,o,a),n=!0},p(o,[a]){const l={};a&2&&(l.object=o[1]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&4096&&(l.userData=o[12]),a&8192&&(l.dispose=o[13]),a&2097152&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],un(()=>t=!1)),e.$set(l)},i(o){n||(ie(e.$$.fragment,o),n=!0)},o(o){le(e.$$.fragment,o),n=!1},d(o){Ee(e,o)}}}function Ig(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{camera:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:u=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:f=!1}=e,{inViewport:d=!1}=e,{castShadow:m=void 0}=e,{receiveShadow:_=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:h=void 0}=e,{visible:g=void 0}=e,{userData:b=void 0}=e,{dispose:x=void 0}=e,{useCamera:M=!1}=e;const S=$r(o);Qe(r,S,D=>t(16,n=D));const{setCamera:C}=ha();function O(D){d=D,t(0,d)}function v(D){Re.call(this,r,D)}function T(D){Re.call(this,r,D)}return r.$$set=D=>{"camera"in D&&t(1,o=D.camera),"position"in D&&t(2,a=D.position),"scale"in D&&t(3,l=D.scale),"rotation"in D&&t(4,u=D.rotation),"lookAt"in D&&t(5,c=D.lookAt),"viewportAware"in D&&t(6,f=D.viewportAware),"inViewport"in D&&t(0,d=D.inViewport),"castShadow"in D&&t(7,m=D.castShadow),"receiveShadow"in D&&t(8,_=D.receiveShadow),"frustumCulled"in D&&t(9,p=D.frustumCulled),"renderOrder"in D&&t(10,h=D.renderOrder),"visible"in D&&t(11,g=D.visible),"userData"in D&&t(12,b=D.userData),"dispose"in D&&t(13,x=D.dispose),"useCamera"in D&&t(15,M=D.useCamera),"$$scope"in D&&t(21,s=D.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&S.set(o),r.$$.dirty&98304&&M&&C(n)},[d,o,a,l,u,c,f,m,_,p,h,g,b,x,S,M,n,i,O,v,T,s]}class Og extends He{constructor(e){super(),We(this,e,Ig,Rg,Ue,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function zg(r){let e;const t=r[20].default,n=Pt(t,r,r[24],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16777216)&&Rt(n,t,i,i[24],e?Ot(t,i[24],s,null):It(i[24]),null)},i(i){e||(ie(n,i),e=!0)},o(i){le(n,i),e=!1},d(i){n&&n.d(i)}}}function Fg(r){let e,t,n;function i(o){r[21](o)}let s={camera:r[0],position:r[2],scale:r[3],rotation:r[4],castShadow:r[6],receiveShadow:r[7],frustumCulled:r[8],renderOrder:r[9],visible:r[10],userData:r[11],dispose:r[12],viewportAware:r[13],lookAt:r[5],useCamera:r[14],$$slots:{default:[zg]},$$scope:{ctx:r}};return r[1]!==void 0&&(s.inViewport=r[1]),e=new Og({props:s}),$t.push(()=>cn(e,"inViewport",i)),e.$on("viewportenter",r[22]),e.$on("viewportleave",r[23]),{c(){Se(e.$$.fragment)},l(o){we(e.$$.fragment,o)},m(o,a){ye(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.camera=o[0]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.castShadow=o[6]),a&128&&(l.receiveShadow=o[7]),a&256&&(l.frustumCulled=o[8]),a&512&&(l.renderOrder=o[9]),a&1024&&(l.visible=o[10]),a&2048&&(l.userData=o[11]),a&4096&&(l.dispose=o[12]),a&8192&&(l.viewportAware=o[13]),a&32&&(l.lookAt=o[5]),a&16384&&(l.useCamera=o[14]),a&16777216&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],un(()=>t=!1)),e.$set(l)},i(o){n||(ie(e.$$.fragment,o),n=!0)},o(o){le(e.$$.fragment,o),n=!1},d(o){Ee(e,o)}}}function Ng(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:u=void 0}=e,{castShadow:c=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:m=void 0}=e,{visible:_=void 0}=e,{userData:p=void 0}=e,{dispose:h=void 0}=e,{viewportAware:g=!1}=e,{inViewport:b=!1}=e,{useCamera:x=!0}=e,{near:M=void 0}=e,{far:S=void 0}=e,{fov:C=void 0}=e;const{size:O,invalidate:v}=en();Qe(r,O,P=>t(19,n=P));const T=new Zt(C,n.width/n.height,M,S);function D(P){b=P,t(1,b)}function z(P){Re.call(this,r,P)}function W(P){Re.call(this,r,P)}return r.$$set=P=>{"position"in P&&t(2,o=P.position),"scale"in P&&t(3,a=P.scale),"rotation"in P&&t(4,l=P.rotation),"lookAt"in P&&t(5,u=P.lookAt),"castShadow"in P&&t(6,c=P.castShadow),"receiveShadow"in P&&t(7,f=P.receiveShadow),"frustumCulled"in P&&t(8,d=P.frustumCulled),"renderOrder"in P&&t(9,m=P.renderOrder),"visible"in P&&t(10,_=P.visible),"userData"in P&&t(11,p=P.userData),"dispose"in P&&t(12,h=P.dispose),"viewportAware"in P&&t(13,g=P.viewportAware),"inViewport"in P&&t(1,b=P.inViewport),"useCamera"in P&&t(14,x=P.useCamera),"near"in P&&t(16,M=P.near),"far"in P&&t(17,S=P.far),"fov"in P&&t(18,C=P.fov),"$$scope"in P&&t(24,s=P.$$scope)},r.$$.update=()=>{r.$$.dirty&524289&&(t(0,T.aspect=n.width/n.height,T),T.updateProjectionMatrix(),v("PerspectiveCamera: aspect changed")),r.$$.dirty&458753&&(M!==void 0&&t(0,T.near=M,T),S!==void 0&&t(0,T.far=S,T),C!==void 0&&t(0,T.fov=C,T),T.updateProjectionMatrix(),v("PerspectiveCamera: props changed"))},[T,b,o,a,l,u,c,f,d,m,_,p,h,g,x,O,M,S,C,n,i,D,z,W,s]}class Ug extends He{constructor(e){super(),We(this,e,Ng,Fg,Ue,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const Zo=[],Bg=(r,e)=>{const t=Zo.find(i=>i instanceof r);if(t)return t;const n=e();return Zo.push(n),n},Ko={type:"change"},Bs={type:"start"},Jo={type:"end"};let kg=class extends pi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mi.ROTATE,MIDDLE:mi.DOLLY,RIGHT:mi.PAN},this.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Gt),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ko),n.update(),s=i.NONE},this.update=function(){const L=new B,V=new fi().setFromUnitVectors(e.up,new B(0,1,0)),he=V.clone().invert(),ge=new B,de=new fi,xe=2*Math.PI;return function(){const Fe=n.object.position;L.copy(Fe).sub(n.target),L.applyQuaternion(V),a.setFromVector3(L),n.autoRotate&&s===i.NONE&&T(O()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Be=n.minAzimuthAngle,Je=n.maxAzimuthAngle;return isFinite(Be)&&isFinite(Je)&&(Be<-Math.PI?Be+=xe:Be>Math.PI&&(Be-=xe),Je<-Math.PI?Je+=xe:Je>Math.PI&&(Je-=xe),Be<=Je?a.theta=Math.max(Be,Math.min(Je,a.theta)):a.theta=a.theta>(Be+Je)/2?Math.max(Be,a.theta):Math.min(Je,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),L.setFromSpherical(a),L.applyQuaternion(he),Fe.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,f||ge.distanceToSquared(n.object.position)>o||8*(1-de.dot(n.object.quaternion))>o?(n.dispatchEvent(Ko),ge.copy(n.object.position),de.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",q),n.domElement.removeEventListener("pointerdown",$e),n.domElement.removeEventListener("pointercancel",zt),n.domElement.removeEventListener("wheel",tn),n.domElement.removeEventListener("pointermove",ot),n.domElement.removeEventListener("pointerup",pt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Gt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new ko,l=new ko;let u=1;const c=new B;let f=!1;const d=new Le,m=new Le,_=new Le,p=new Le,h=new Le,g=new Le,b=new Le,x=new Le,M=new Le,S=[],C={};function O(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function T(L){l.theta-=L}function D(L){l.phi-=L}const z=function(){const L=new B;return function(he,ge){L.setFromMatrixColumn(ge,0),L.multiplyScalar(-he),c.add(L)}}(),W=function(){const L=new B;return function(he,ge){n.screenSpacePanning===!0?L.setFromMatrixColumn(ge,1):(L.setFromMatrixColumn(ge,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(he),c.add(L)}}(),P=function(){const L=new B;return function(he,ge){const de=n.domElement;if(n.object.isPerspectiveCamera){const xe=n.object.position;L.copy(xe).sub(n.target);let ve=L.length();ve*=Math.tan(n.object.fov/2*Math.PI/180),z(2*he*ve/de.clientHeight,n.object.matrix),W(2*ge*ve/de.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(he*(n.object.right-n.object.left)/n.object.zoom/de.clientWidth,n.object.matrix),W(ge*(n.object.top-n.object.bottom)/n.object.zoom/de.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(L){n.object.isPerspectiveCamera?u/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(L){n.object.isPerspectiveCamera?u*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(L){d.set(L.clientX,L.clientY)}function Q(L){b.set(L.clientX,L.clientY)}function j(L){p.set(L.clientX,L.clientY)}function $(L){m.set(L.clientX,L.clientY),_.subVectors(m,d).multiplyScalar(n.rotateSpeed);const V=n.domElement;T(2*Math.PI*_.x/V.clientHeight),D(2*Math.PI*_.y/V.clientHeight),d.copy(m),n.update()}function J(L){x.set(L.clientX,L.clientY),M.subVectors(x,b),M.y>0?U(v()):M.y<0&&R(v()),b.copy(x),n.update()}function E(L){h.set(L.clientX,L.clientY),g.subVectors(h,p).multiplyScalar(n.panSpeed),P(g.x,g.y),p.copy(h),n.update()}function I(L){L.deltaY<0?R(v()):L.deltaY>0&&U(v()),n.update()}function re(L){let V=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,n.keyPanSpeed),V=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,-n.keyPanSpeed),V=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(n.keyPanSpeed,0),V=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(-n.keyPanSpeed,0),V=!0;break}V&&(L.preventDefault(),n.update())}function ee(){if(S.length===1)d.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),V=.5*(S[0].pageY+S[1].pageY);d.set(L,V)}}function ae(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),V=.5*(S[0].pageY+S[1].pageY);p.set(L,V)}}function N(){const L=S[0].pageX-S[1].pageX,V=S[0].pageY-S[1].pageY,he=Math.sqrt(L*L+V*V);b.set(0,he)}function fe(){n.enableZoom&&N(),n.enablePan&&ae()}function _e(){n.enableZoom&&N(),n.enableRotate&&ee()}function Te(L){if(S.length==1)m.set(L.pageX,L.pageY);else{const he=Ce(L),ge=.5*(L.pageX+he.x),de=.5*(L.pageY+he.y);m.set(ge,de)}_.subVectors(m,d).multiplyScalar(n.rotateSpeed);const V=n.domElement;T(2*Math.PI*_.x/V.clientHeight),D(2*Math.PI*_.y/V.clientHeight),d.copy(m)}function me(L){if(S.length===1)h.set(L.pageX,L.pageY);else{const V=Ce(L),he=.5*(L.pageX+V.x),ge=.5*(L.pageY+V.y);h.set(he,ge)}g.subVectors(h,p).multiplyScalar(n.panSpeed),P(g.x,g.y),p.copy(h)}function je(L){const V=Ce(L),he=L.pageX-V.x,ge=L.pageY-V.y,de=Math.sqrt(he*he+ge*ge);x.set(0,de),M.set(0,Math.pow(x.y/b.y,n.zoomSpeed)),U(M.y),b.copy(x)}function X(L){n.enableZoom&&je(L),n.enablePan&&me(L)}function ce(L){n.enableZoom&&je(L),n.enableRotate&&Te(L)}function $e(L){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",ot),n.domElement.addEventListener("pointerup",pt)),ne(L),L.pointerType==="touch"?A(L):lt(L))}function ot(L){n.enabled!==!1&&(L.pointerType==="touch"?w(L):Ye(L))}function pt(L){se(L),S.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",ot),n.domElement.removeEventListener("pointerup",pt)),n.dispatchEvent(Jo),s=i.NONE}function zt(L){se(L)}function lt(L){let V;switch(L.button){case 0:V=n.mouseButtons.LEFT;break;case 1:V=n.mouseButtons.MIDDLE;break;case 2:V=n.mouseButtons.RIGHT;break;default:V=-1}switch(V){case mi.DOLLY:if(n.enableZoom===!1)return;Q(L),s=i.DOLLY;break;case mi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;j(L),s=i.PAN}else{if(n.enableRotate===!1)return;k(L),s=i.ROTATE}break;case mi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;k(L),s=i.ROTATE}else{if(n.enablePan===!1)return;j(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Bs)}function Ye(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;$(L);break;case i.DOLLY:if(n.enableZoom===!1)return;J(L);break;case i.PAN:if(n.enablePan===!1)return;E(L);break}}function tn(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(Bs),I(L),n.dispatchEvent(Jo))}function Gt(L){n.enabled===!1||n.enablePan===!1||re(L)}function A(L){switch(ue(L),S.length){case 1:switch(n.touches.ONE){case gi.ROTATE:if(n.enableRotate===!1)return;ee(),s=i.TOUCH_ROTATE;break;case gi.PAN:if(n.enablePan===!1)return;ae(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case gi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;fe(),s=i.TOUCH_DOLLY_PAN;break;case gi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Bs)}function w(L){switch(ue(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Te(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;me(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;X(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ce(L),n.update();break;default:s=i.NONE}}function q(L){n.enabled!==!1&&L.preventDefault()}function ne(L){S.push(L)}function se(L){delete C[L.pointerId];for(let V=0;V<S.length;V++)if(S[V].pointerId==L.pointerId){S.splice(V,1);return}}function ue(L){let V=C[L.pointerId];V===void 0&&(V=new Le,C[L.pointerId]=V),V.set(L.pageX,L.pageY)}function Ce(L){const V=L.pointerId===S[0].pointerId?S[1]:S[0];return C[V.pointerId]}n.domElement.addEventListener("contextmenu",q),n.domElement.addEventListener("pointerdown",$e),n.domElement.addEventListener("pointercancel",zt),n.domElement.addEventListener("wheel",tn,{passive:!1}),this.update()}};function Vg(r){let e,t,n,i;return e=new Nn({props:{dispose:r[2],object:r[0]}}),n=new ts({props:{object:r[4],position:r[1]}}),n.$on("transform",r[5]),{c(){Se(e.$$.fragment),t=Ze(),Se(n.$$.fragment)},l(s){we(e.$$.fragment,s),t=Ke(s),we(n.$$.fragment,s)},m(s,o){ye(e,s,o),Oe(s,t,o),ye(n,s,o),i=!0},p(s,o){const a={};o[0]&4&&(a.dispose=s[2]),o[0]&1&&(a.object=s[0]),e.$set(a);const l={};o[0]&2&&(l.position=s[1]),n.$set(l)},i(s){i||(ie(e.$$.fragment,s),ie(n.$$.fragment,s),i=!0)},o(s){le(e.$$.fragment,s),le(n.$$.fragment,s),i=!1},d(s){Ee(e,s),s&&Me(t),Ee(n,s)}}}function Gg(r,e,t){let n,{autoRotate:i=void 0}=e,{autoRotateSpeed:s=void 0}=e,{dampingFactor:o=void 0}=e,{enableDamping:a=void 0}=e,{enabled:l=void 0}=e,{enablePan:u=void 0}=e,{enableRotate:c=void 0}=e,{enableZoom:f=void 0}=e,{keyPanSpeed:d=void 0}=e,{keys:m=void 0}=e,{maxAzimuthAngle:_=void 0}=e,{maxDistance:p=void 0}=e,{maxPolarAngle:h=void 0}=e,{maxZoom:g=void 0}=e,{minAzimuthAngle:b=void 0}=e,{minDistance:x=void 0}=e,{minPolarAngle:M=void 0}=e,{minZoom:S=void 0}=e,{mouseButtons:C=void 0}=e,{panSpeed:O=void 0}=e,{rotateSpeed:v=void 0}=e,{screenSpacePanning:T=void 0}=e,{touches:D=void 0}=e,{zoomSpeed:z=void 0}=e,{target:W=void 0}=e,{dispose:P=void 0}=e;const U=ql();Qe(r,U,N=>t(30,n=N));const{renderer:R,invalidate:k}=en();if(!R)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof oa))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const Q=ur(),j=()=>{k("Orbitcontrols: change event"),Q("change")},$=()=>Q("start"),J=()=>Q("end"),E=new kg(n,R.domElement);an(n).orbitControls=E,E.addEventListener("change",j),E.addEventListener("start",$),E.addEventListener("end",J),ht(()=>{n&&delete an(n).orbitControls,E.removeEventListener("change",j),E.removeEventListener("start",$),E.removeEventListener("end",J)});const{start:I,stop:re}=ji(()=>E.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),ee=new rt,ae=()=>{t(0,E.target=ee.position,E),E.update(),k("OrbitControls: target changed")};return r.$$set=N=>{"autoRotate"in N&&t(6,i=N.autoRotate),"autoRotateSpeed"in N&&t(7,s=N.autoRotateSpeed),"dampingFactor"in N&&t(8,o=N.dampingFactor),"enableDamping"in N&&t(9,a=N.enableDamping),"enabled"in N&&t(10,l=N.enabled),"enablePan"in N&&t(11,u=N.enablePan),"enableRotate"in N&&t(12,c=N.enableRotate),"enableZoom"in N&&t(13,f=N.enableZoom),"keyPanSpeed"in N&&t(14,d=N.keyPanSpeed),"keys"in N&&t(15,m=N.keys),"maxAzimuthAngle"in N&&t(16,_=N.maxAzimuthAngle),"maxDistance"in N&&t(17,p=N.maxDistance),"maxPolarAngle"in N&&t(18,h=N.maxPolarAngle),"maxZoom"in N&&t(19,g=N.maxZoom),"minAzimuthAngle"in N&&t(20,b=N.minAzimuthAngle),"minDistance"in N&&t(21,x=N.minDistance),"minPolarAngle"in N&&t(22,M=N.minPolarAngle),"minZoom"in N&&t(23,S=N.minZoom),"mouseButtons"in N&&t(24,C=N.mouseButtons),"panSpeed"in N&&t(25,O=N.panSpeed),"rotateSpeed"in N&&t(26,v=N.rotateSpeed),"screenSpacePanning"in N&&t(27,T=N.screenSpacePanning),"touches"in N&&t(28,D=N.touches),"zoomSpeed"in N&&t(29,z=N.zoomSpeed),"target"in N&&t(1,W=N.target),"dispose"in N&&t(2,P=N.dispose)},r.$$.update=()=>{r.$$.dirty[0]&1073741761&&(i!==void 0&&t(0,E.autoRotate=i,E),s!==void 0&&t(0,E.autoRotateSpeed=s,E),o!==void 0&&t(0,E.dampingFactor=o,E),a!==void 0&&t(0,E.enableDamping=a,E),l!==void 0&&t(0,E.enabled=l,E),u!==void 0&&t(0,E.enablePan=u,E),c!==void 0&&t(0,E.enableRotate=c,E),f!==void 0&&t(0,E.enableZoom=f,E),d!==void 0&&t(0,E.keyPanSpeed=d,E),m!==void 0&&t(0,E.keys=m,E),_!==void 0&&t(0,E.maxAzimuthAngle=_,E),p!==void 0&&t(0,E.maxDistance=p,E),h!==void 0&&t(0,E.maxPolarAngle=h,E),g!==void 0&&t(0,E.maxZoom=g,E),b!==void 0&&t(0,E.minAzimuthAngle=b,E),x!==void 0&&t(0,E.minDistance=x,E),M!==void 0&&t(0,E.minPolarAngle=M,E),S!==void 0&&t(0,E.minZoom=S,E),C!==void 0&&t(0,E.mouseButtons=C,E),O!==void 0&&t(0,E.panSpeed=O,E),v!==void 0&&t(0,E.rotateSpeed=v,E),T!==void 0&&t(0,E.screenSpacePanning=T,E),D!==void 0&&t(0,E.touches=D,E),z!==void 0&&t(0,E.zoomSpeed=z,E),E.update(),k("OrbitControls: props changed")),r.$$.dirty[0]&576&&(i||a?I():re())},[E,W,P,U,ee,ae,i,s,o,a,l,u,c,f,d,m,_,p,h,g,b,x,M,S,C,O,v,T,D,z]}class Hg extends He{constructor(e){super(),We(this,e,Gg,Vg,Ue,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}const Wg=(r,e)=>e?new Ne(r):new Ne().setHex(new Ne(r).getHex()).convertSRGBToLinear();function jg(r){let e;const t=r[18].default,n=Pt(t,r,r[22],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&4194304)&&Rt(n,t,i,i[22],e?Ot(t,i[22],s,null):It(i[22]),null)},i(i){e||(ie(n,i),e=!0)},o(i){le(n,i),e=!1},d(i){n&&n.d(i)}}}function Xg(r){let e,t,n;function i(o){r[19](o)}let s={object:r[0],lookAt:r[5],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],position:r[2],scale:r[3],rotation:r[4],viewportAware:r[6],visible:r[11],userData:r[12],dispose:r[13],$$slots:{default:[jg]},$$scope:{ctx:r}};return r[1]!==void 0&&(s.inViewport=r[1]),e=new ns({props:s}),$t.push(()=>cn(e,"inViewport",i)),e.$on("viewportenter",r[20]),e.$on("viewportleave",r[21]),{c(){Se(e.$$.fragment)},l(o){we(e.$$.fragment,o)},m(o,a){ye(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.object=o[0]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&4096&&(l.userData=o[12]),a&8192&&(l.dispose=o[13]),a&4194304&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],un(()=>t=!1)),e.$set(l)},i(o){n||(ie(e.$$.fragment,o),n=!0)},o(o){le(e.$$.fragment,o),n=!1},d(o){Ee(e,o)}}}function qg(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{light:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:u=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:f=!1}=e,{inViewport:d=!1}=e,{castShadow:m=void 0}=e,{receiveShadow:_=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:h=void 0}=e,{visible:g=void 0}=e,{userData:b=void 0}=e,{dispose:x=void 0}=e,{color:M=void 0}=e,{intensity:S=void 0}=e;const{invalidate:C}=en(),{linear:O}=ha();Qe(r,O,z=>t(17,n=z));function v(z){d=z,t(1,d)}function T(z){Re.call(this,r,z)}function D(z){Re.call(this,r,z)}return r.$$set=z=>{"light"in z&&t(0,o=z.light),"position"in z&&t(2,a=z.position),"scale"in z&&t(3,l=z.scale),"rotation"in z&&t(4,u=z.rotation),"lookAt"in z&&t(5,c=z.lookAt),"viewportAware"in z&&t(6,f=z.viewportAware),"inViewport"in z&&t(1,d=z.inViewport),"castShadow"in z&&t(7,m=z.castShadow),"receiveShadow"in z&&t(8,_=z.receiveShadow),"frustumCulled"in z&&t(9,p=z.frustumCulled),"renderOrder"in z&&t(10,h=z.renderOrder),"visible"in z&&t(11,g=z.visible),"userData"in z&&t(12,b=z.userData),"dispose"in z&&t(13,x=z.dispose),"color"in z&&t(15,M=z.color),"intensity"in z&&t(16,S=z.intensity),"$$scope"in z&&t(22,s=z.$$scope)},r.$$.update=()=>{r.$$.dirty&229376&&(S!==void 0&&t(0,o.intensity=S,o),M!==void 0&&t(0,o.color=Wg(M,n),o),C("LightInstance: props changed"))},[o,d,a,l,u,c,f,m,_,p,h,g,b,x,O,M,S,n,i,v,T,D,s]}class Yg extends He{constructor(e){super(),We(this,e,qg,Xg,Ue,{light:0,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:1,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,color:15,intensity:16})}}function Qo(r){let e,t,n,i,s,o;return e=new es({props:{object:r[16]}}),n=new ts({props:{object:r[16],position:r[15]}}),s=new Nn({props:{dispose:r[10],object:r[15]}}),{c(){Se(e.$$.fragment),t=Ze(),Se(n.$$.fragment),i=Ze(),Se(s.$$.fragment)},l(a){we(e.$$.fragment,a),t=Ke(a),we(n.$$.fragment,a),i=Ke(a),we(s.$$.fragment,a)},m(a,l){ye(e,a,l),Oe(a,t,l),ye(n,a,l),Oe(a,i,l),ye(s,a,l),o=!0},p(a,l){const u={};l&32768&&(u.position=a[15]),n.$set(u);const c={};l&1024&&(c.dispose=a[10]),l&32768&&(c.object=a[15]),s.$set(c)},i(a){o||(ie(e.$$.fragment,a),ie(n.$$.fragment,a),ie(s.$$.fragment,a),o=!0)},o(a){le(e.$$.fragment,a),le(n.$$.fragment,a),le(s.$$.fragment,a),o=!1},d(a){Ee(e,a),a&&Me(t),Ee(n,a),a&&Me(i),Ee(s,a)}}}function Zg(r){let e;const t=r[18].default,n=Pt(t,r,r[22],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&4194304)&&Rt(n,t,i,i[22],e?Ot(t,i[22],s,null):It(i[22]),null)},i(i){e||(ie(n,i),e=!0)},o(i){le(n,i),e=!1},d(i){n&&n.d(i)}}}function Kg(r){let e,t,n,i,s=r[15]&&!(r[15]instanceof rt)&&Qo(r);function o(l){r[19](l)}let a={light:r[1],position:r[2],scale:r[3],rotation:r[4],castShadow:!!r[14],receiveShadow:r[5],frustumCulled:r[6],renderOrder:r[7],visible:r[8],userData:r[9],dispose:r[10],viewportAware:r[11],color:r[12],intensity:r[13],$$slots:{default:[Zg]},$$scope:{ctx:r}};return r[0]!==void 0&&(a.inViewport=r[0]),t=new Yg({props:a}),$t.push(()=>cn(t,"inViewport",o)),t.$on("viewportenter",r[20]),t.$on("viewportleave",r[21]),{c(){s&&s.c(),e=Ze(),Se(t.$$.fragment)},l(l){s&&s.l(l),e=Ke(l),we(t.$$.fragment,l)},m(l,u){s&&s.m(l,u),Oe(l,e,u),ye(t,l,u),i=!0},p(l,[u]){l[15]&&!(l[15]instanceof rt)?s?(s.p(l,u),u&32768&&ie(s,1)):(s=Qo(l),s.c(),ie(s,1),s.m(e.parentNode,e)):s&&(Vi(),le(s,1,1,()=>{s=null}),Gi());const c={};u&2&&(c.light=l[1]),u&4&&(c.position=l[2]),u&8&&(c.scale=l[3]),u&16&&(c.rotation=l[4]),u&16384&&(c.castShadow=!!l[14]),u&32&&(c.receiveShadow=l[5]),u&64&&(c.frustumCulled=l[6]),u&128&&(c.renderOrder=l[7]),u&256&&(c.visible=l[8]),u&512&&(c.userData=l[9]),u&1024&&(c.dispose=l[10]),u&2048&&(c.viewportAware=l[11]),u&4096&&(c.color=l[12]),u&8192&&(c.intensity=l[13]),u&4194304&&(c.$$scope={dirty:u,ctx:l}),!n&&u&1&&(n=!0,c.inViewport=l[0],un(()=>n=!1)),t.$set(c)},i(l){i||(ie(s),ie(t.$$.fragment,l),i=!0)},o(l){le(s),le(t.$$.fragment,l),i=!1},d(l){s&&s.d(l),l&&Me(e),Ee(t,l)}}}function Jg(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{receiveShadow:u=void 0}=e,{frustumCulled:c=void 0}=e,{renderOrder:f=void 0}=e,{visible:d=void 0}=e,{userData:m=void 0}=e,{dispose:_=void 0}=e,{viewportAware:p=!1}=e,{inViewport:h=!1}=e,{color:g=void 0}=e,{intensity:b=void 0}=e,{shadow:x=void 0}=e,{target:M=void 0}=e;const S=new Nm(g,b),{invalidate:C}=en(),O=S.target,{start:v,stop:T,started:D}=ji(()=>{},{autostart:!1,debugFrameloopMessage:"DirectionalLight: tracking target"});Qe(r,D,k=>t(23,n=k));const z=k=>{k&&k instanceof rt&&!n?(t(1,S.target=k,S),v(),C("DirectionalLight: target changed")):(!k||!(k instanceof rt))&&n&&(t(1,S.target=O,S),T(),C("DirectionalLight: target changed"))},W=k=>{if(k){const{mapSize:Q=[512,512],camera:{left:j=-5,bottom:$=-5,right:J=5,top:E=5,near:I=.5,far:re=500}={},bias:ee=0,radius:ae=1}=k===!0?{}:k;S.shadow.mapSize.set(Q[0],Q[1]),t(1,S.shadow.camera.left=j,S),t(1,S.shadow.camera.top=E,S),t(1,S.shadow.camera.right=J,S),t(1,S.shadow.camera.bottom=$,S),t(1,S.shadow.camera.near=I,S),t(1,S.shadow.camera.far=re,S),t(1,S.shadow.bias=ee,S),t(1,S.shadow.radius=ae,S)}C("DirectionalLight: shadow changed")};function P(k){h=k,t(0,h)}function U(k){Re.call(this,r,k)}function R(k){Re.call(this,r,k)}return r.$$set=k=>{"position"in k&&t(2,o=k.position),"scale"in k&&t(3,a=k.scale),"rotation"in k&&t(4,l=k.rotation),"receiveShadow"in k&&t(5,u=k.receiveShadow),"frustumCulled"in k&&t(6,c=k.frustumCulled),"renderOrder"in k&&t(7,f=k.renderOrder),"visible"in k&&t(8,d=k.visible),"userData"in k&&t(9,m=k.userData),"dispose"in k&&t(10,_=k.dispose),"viewportAware"in k&&t(11,p=k.viewportAware),"inViewport"in k&&t(0,h=k.inViewport),"color"in k&&t(12,g=k.color),"intensity"in k&&t(13,b=k.intensity),"shadow"in k&&t(14,x=k.shadow),"target"in k&&t(15,M=k.target),"$$scope"in k&&t(22,s=k.$$scope)},r.$$.update=()=>{r.$$.dirty&32768&&z(M),r.$$.dirty&16384&&W(x)},[h,S,o,a,l,u,c,f,d,m,_,p,g,b,x,M,O,D,i,P,U,R,s]}class Qg extends He{constructor(e){super(),We(this,e,Jg,Kg,Ue,{position:2,scale:3,rotation:4,receiveShadow:5,frustumCulled:6,renderOrder:7,visible:8,userData:9,dispose:10,viewportAware:11,inViewport:0,color:12,intensity:13,shadow:14,target:15,light:1})}get light(){return this.$$.ctx[1]}}function $g(r,e,t){let{object:n}=e,i=n,{interactive:s=!1}=e,{ignorePointer:o=!1}=e;const a=ur(),{addInteractiveObject:l,removeInteractiveObject:u,addRaycastableObject:c,removeRaycastableObject:f}=ha(),{invalidate:d}=en(),m=p=>{f(p),u(p),delete an(p).eventDispatcher},_=(p,h,g)=>{an(p).eventDispatcher=a,h?(f(p),u(p)):(c(p),g?l(p):u(p))};return ht(()=>{m(n),d("InteractiveObject: object removed")}),r.$$set=p=>{"object"in p&&t(0,n=p.object),"interactive"in p&&t(1,s=p.interactive),"ignorePointer"in p&&t(2,o=p.ignorePointer)},r.$$.update=()=>{r.$$.dirty&15&&(n!==i?(m(i),_(n,o,s),d("InteractiveObject: object changed"),t(3,i=n)):n===i&&(_(n,o,s),d("InteractiveObject: props changed")))},[n,s,o,i]}class e_ extends He{constructor(e){super(),We(this,e,$g,null,Ue,{object:0,interactive:1,ignorePointer:2})}}function t_(r){let e;const t=r[16].default,n=Pt(t,r,r[27],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&134217728)&&Rt(n,t,i,i[27],e?Ot(t,i[27],s,null):It(i[27]),null)},i(i){e||(ie(n,i),e=!0)},o(i){le(n,i),e=!1},d(i){n&&n.d(i)}}}function n_(r){let e,t,n,i,s;function o(l){r[17](l)}let a={object:r[1],lookAt:r[5],position:r[2],scale:r[3],rotation:r[4],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],visible:r[11],userData:r[12],dispose:r[13],viewportAware:r[6],$$slots:{default:[t_]},$$scope:{ctx:r}};return r[0]!==void 0&&(a.inViewport=r[0]),e=new ns({props:a}),$t.push(()=>cn(e,"inViewport",o)),e.$on("viewportenter",r[18]),e.$on("viewportleave",r[19]),i=new e_({props:{object:r[1],interactive:r[14],ignorePointer:r[15]}}),i.$on("click",r[20]),i.$on("contextmenu",r[21]),i.$on("pointerup",r[22]),i.$on("pointerdown",r[23]),i.$on("pointerenter",r[24]),i.$on("pointerleave",r[25]),i.$on("pointermove",r[26]),{c(){Se(e.$$.fragment),n=Ze(),Se(i.$$.fragment)},l(l){we(e.$$.fragment,l),n=Ke(l),we(i.$$.fragment,l)},m(l,u){ye(e,l,u),Oe(l,n,u),ye(i,l,u),s=!0},p(l,[u]){const c={};u&2&&(c.object=l[1]),u&32&&(c.lookAt=l[5]),u&4&&(c.position=l[2]),u&8&&(c.scale=l[3]),u&16&&(c.rotation=l[4]),u&128&&(c.castShadow=l[7]),u&256&&(c.receiveShadow=l[8]),u&512&&(c.frustumCulled=l[9]),u&1024&&(c.renderOrder=l[10]),u&2048&&(c.visible=l[11]),u&4096&&(c.userData=l[12]),u&8192&&(c.dispose=l[13]),u&64&&(c.viewportAware=l[6]),u&134217728&&(c.$$scope={dirty:u,ctx:l}),!t&&u&1&&(t=!0,c.inViewport=l[0],un(()=>t=!1)),e.$set(c);const f={};u&2&&(f.object=l[1]),u&16384&&(f.interactive=l[14]),u&32768&&(f.ignorePointer=l[15]),i.$set(f)},i(l){s||(ie(e.$$.fragment,l),ie(i.$$.fragment,l),s=!0)},o(l){le(e.$$.fragment,l),le(i.$$.fragment,l),s=!1},d(l){Ee(e,l),l&&Me(n),Ee(i,l)}}}function i_(r,e,t){let{$$slots:n={},$$scope:i}=e,{mesh:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:c=!1}=e,{inViewport:f=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:_=void 0}=e,{renderOrder:p=void 0}=e,{visible:h=void 0}=e,{userData:g=void 0}=e,{dispose:b=void 0}=e,{interactive:x=!1}=e,{ignorePointer:M=!1}=e;function S(R){f=R,t(0,f)}function C(R){Re.call(this,r,R)}function O(R){Re.call(this,r,R)}function v(R){Re.call(this,r,R)}function T(R){Re.call(this,r,R)}function D(R){Re.call(this,r,R)}function z(R){Re.call(this,r,R)}function W(R){Re.call(this,r,R)}function P(R){Re.call(this,r,R)}function U(R){Re.call(this,r,R)}return r.$$set=R=>{"mesh"in R&&t(1,s=R.mesh),"position"in R&&t(2,o=R.position),"scale"in R&&t(3,a=R.scale),"rotation"in R&&t(4,l=R.rotation),"lookAt"in R&&t(5,u=R.lookAt),"viewportAware"in R&&t(6,c=R.viewportAware),"inViewport"in R&&t(0,f=R.inViewport),"castShadow"in R&&t(7,d=R.castShadow),"receiveShadow"in R&&t(8,m=R.receiveShadow),"frustumCulled"in R&&t(9,_=R.frustumCulled),"renderOrder"in R&&t(10,p=R.renderOrder),"visible"in R&&t(11,h=R.visible),"userData"in R&&t(12,g=R.userData),"dispose"in R&&t(13,b=R.dispose),"interactive"in R&&t(14,x=R.interactive),"ignorePointer"in R&&t(15,M=R.ignorePointer),"$$scope"in R&&t(27,i=R.$$scope)},[f,s,o,a,l,u,c,d,m,_,p,h,g,b,x,M,n,S,C,O,v,T,D,z,W,P,U,i]}class pa extends He{constructor(e){super(),We(this,e,i_,n_,Ue,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}function r_(r){let e;const t=r[20].default,n=Pt(t,r,r[31],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&1)&&Rt(n,t,i,i[31],e?Ot(t,i[31],s,null):It(i[31]),null)},i(i){e||(ie(n,i),e=!0)},o(i){le(n,i),e=!1},d(i){n&&n.d(i)}}}function s_(r){let e,t,n,i,s,o,a;e=new Nn({props:{dispose:r[11],object:r[15]}}),n=new Nn({props:{dispose:r[11],object:r[16]}});function l(c){r[21](c)}let u={mesh:r[17],position:r[1],scale:r[2],rotation:r[3],lookAt:r[14],castShadow:r[5],receiveShadow:r[6],frustumCulled:r[7],renderOrder:r[8],visible:r[9],interactive:r[12],ignorePointer:r[13],userData:r[10],dispose:r[11],viewportAware:r[4],$$slots:{default:[r_]},$$scope:{ctx:r}};return r[0]!==void 0&&(u.inViewport=r[0]),s=new pa({props:u}),$t.push(()=>cn(s,"inViewport",l)),s.$on("click",r[22]),s.$on("contextmenu",r[23]),s.$on("pointerup",r[24]),s.$on("pointerdown",r[25]),s.$on("pointerenter",r[26]),s.$on("pointerleave",r[27]),s.$on("pointermove",r[28]),s.$on("viewportenter",r[29]),s.$on("viewportleave",r[30]),{c(){Se(e.$$.fragment),t=Ze(),Se(n.$$.fragment),i=Ze(),Se(s.$$.fragment)},l(c){we(e.$$.fragment,c),t=Ke(c),we(n.$$.fragment,c),i=Ke(c),we(s.$$.fragment,c)},m(c,f){ye(e,c,f),Oe(c,t,f),ye(n,c,f),Oe(c,i,f),ye(s,c,f),a=!0},p(c,f){const d={};f[0]&2048&&(d.dispose=c[11]),f[0]&32768&&(d.object=c[15]),e.$set(d);const m={};f[0]&2048&&(m.dispose=c[11]),f[0]&65536&&(m.object=c[16]),n.$set(m);const _={};f[0]&2&&(_.position=c[1]),f[0]&4&&(_.scale=c[2]),f[0]&8&&(_.rotation=c[3]),f[0]&16384&&(_.lookAt=c[14]),f[0]&32&&(_.castShadow=c[5]),f[0]&64&&(_.receiveShadow=c[6]),f[0]&128&&(_.frustumCulled=c[7]),f[0]&256&&(_.renderOrder=c[8]),f[0]&512&&(_.visible=c[9]),f[0]&4096&&(_.interactive=c[12]),f[0]&8192&&(_.ignorePointer=c[13]),f[0]&1024&&(_.userData=c[10]),f[0]&2048&&(_.dispose=c[11]),f[0]&16&&(_.viewportAware=c[4]),f[1]&1&&(_.$$scope={dirty:f,ctx:c}),!o&&f[0]&1&&(o=!0,_.inViewport=c[0],un(()=>o=!1)),s.$set(_)},i(c){a||(ie(e.$$.fragment,c),ie(n.$$.fragment,c),ie(s.$$.fragment,c),a=!0)},o(c){le(e.$$.fragment,c),le(n.$$.fragment,c),le(s.$$.fragment,c),a=!1},d(c){Ee(e,c),c&&Me(t),Ee(n,c),c&&Me(i),Ee(s,c)}}}function a_(r,e,t){let{$$slots:n={},$$scope:i}=e,{position:s=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{viewportAware:l=!1}=e,{inViewport:u=!1}=e,{castShadow:c=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:m=void 0}=e,{visible:_=void 0}=e,{userData:p=void 0}=e,{dispose:h=void 0}=e,{interactive:g=!1}=e,{ignorePointer:b=!1}=e,{lookAt:x=void 0}=e,{geometry:M}=e,{material:S}=e,C=S,O=M;const{invalidate:v}=en(),T=new Jt(M,S),D=()=>T;function z(E){u=E,t(0,u)}function W(E){Re.call(this,r,E)}function P(E){Re.call(this,r,E)}function U(E){Re.call(this,r,E)}function R(E){Re.call(this,r,E)}function k(E){Re.call(this,r,E)}function Q(E){Re.call(this,r,E)}function j(E){Re.call(this,r,E)}function $(E){Re.call(this,r,E)}function J(E){Re.call(this,r,E)}return r.$$set=E=>{"position"in E&&t(1,s=E.position),"scale"in E&&t(2,o=E.scale),"rotation"in E&&t(3,a=E.rotation),"viewportAware"in E&&t(4,l=E.viewportAware),"inViewport"in E&&t(0,u=E.inViewport),"castShadow"in E&&t(5,c=E.castShadow),"receiveShadow"in E&&t(6,f=E.receiveShadow),"frustumCulled"in E&&t(7,d=E.frustumCulled),"renderOrder"in E&&t(8,m=E.renderOrder),"visible"in E&&t(9,_=E.visible),"userData"in E&&t(10,p=E.userData),"dispose"in E&&t(11,h=E.dispose),"interactive"in E&&t(12,g=E.interactive),"ignorePointer"in E&&t(13,b=E.ignorePointer),"lookAt"in E&&t(14,x=E.lookAt),"geometry"in E&&t(15,M=E.geometry),"material"in E&&t(16,S=E.material),"$$scope"in E&&t(31,i=E.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&327680&&(S!==C?(D().material=S,v("Mesh: material changed")):v("Mesh: material props changed"),t(18,C=S)),r.$$.dirty[0]&557056&&(M!==O?(D().geometry=M,v("Mesh: geometry changed")):v("Mesh: geometry props changed"),t(19,O=M))},[u,s,o,a,l,c,f,d,m,_,p,h,g,b,x,M,S,T,C,O,n,z,W,P,U,R,k,Q,j,$,J,i]}class o_ extends He{constructor(e){super(),We(this,e,a_,s_,Ue,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,geometry:15,material:16,mesh:17},null,[-1,-1])}get mesh(){return this.$$.ctx[17]}}const l_=(r,e)=>{let t=r;return{onChange:(i,s)=>{(e&&!e(i,t)||!e&&i!==t)&&(s(i,t),t=i)}}};function $o(r){let e,t,n;function i(o){r[24](o)}let s={mesh:r[17],castShadow:r[5],receiveShadow:r[6],frustumCulled:void 0,renderOrder:r[7],visible:r[8],userData:r[9],dispose:r[10],interactive:r[11],ignorePointer:r[12],viewportAware:r[4]};return r[0]!==void 0&&(s.inViewport=r[0]),e=new pa({props:s}),$t.push(()=>cn(e,"inViewport",i)),e.$on("click",r[20]),e.$on("contextmenu",r[20]),e.$on("pointerup",r[20]),e.$on("pointerdown",r[20]),e.$on("pointerenter",r[20]),e.$on("pointerleave",r[20]),e.$on("pointermove",r[20]),e.$on("viewportenter",r[25]),e.$on("viewportleave",r[26]),{c(){Se(e.$$.fragment)},l(o){we(e.$$.fragment,o)},m(o,a){ye(e,o,a),n=!0},p(o,a){const l={};a[0]&131072&&(l.mesh=o[17]),a[0]&32&&(l.castShadow=o[5]),a[0]&64&&(l.receiveShadow=o[6]),a[0]&128&&(l.renderOrder=o[7]),a[0]&256&&(l.visible=o[8]),a[0]&512&&(l.userData=o[9]),a[0]&1024&&(l.dispose=o[10]),a[0]&2048&&(l.interactive=o[11]),a[0]&4096&&(l.ignorePointer=o[12]),a[0]&16&&(l.viewportAware=o[4]),!t&&a[0]&1&&(t=!0,l.inViewport=o[0],un(()=>t=!1)),e.$set(l)},i(o){n||(ie(e.$$.fragment,o),n=!0)},o(o){le(e.$$.fragment,o),n=!1},d(o){Ee(e,o)}}}function c_(r){let e=r[17].uuid,t,n,i=$o(r);const s=r[23].default,o=Pt(s,r,r[27],null);return{c(){i.c(),t=Ze(),o&&o.c()},l(a){i.l(a),t=Ke(a),o&&o.l(a)},m(a,l){i.m(a,l),Oe(a,t,l),o&&o.m(a,l),n=!0},p(a,l){l[0]&131072&&Ue(e,e=a[17].uuid)?(Vi(),le(i,1,1,on),Gi(),i=$o(a),i.c(),ie(i,1),i.m(t.parentNode,t)):i.p(a,l),o&&o.p&&(!n||l[0]&134217728)&&Rt(o,s,a,a[27],n?Ot(s,a[27],l,null):It(a[27]),null)},i(a){n||(ie(i),ie(o,a),n=!0)},o(a){le(i),le(o,a),n=!1},d(a){i.d(a),a&&Me(t),o&&o.d(a)}}}function u_(r){let e,t,n,i,s,o;return e=new Nn({props:{dispose:r[10],object:r[14]}}),n=new Nn({props:{dispose:r[10],object:r[15]}}),s=new ns({props:{object:r[18],position:r[1],scale:r[2],rotation:r[3],lookAt:r[13],$$slots:{default:[c_]},$$scope:{ctx:r}}}),{c(){Se(e.$$.fragment),t=Ze(),Se(n.$$.fragment),i=Ze(),Se(s.$$.fragment)},l(a){we(e.$$.fragment,a),t=Ke(a),we(n.$$.fragment,a),i=Ke(a),we(s.$$.fragment,a)},m(a,l){ye(e,a,l),Oe(a,t,l),ye(n,a,l),Oe(a,i,l),ye(s,a,l),o=!0},p(a,l){const u={};l[0]&1024&&(u.dispose=a[10]),l[0]&16384&&(u.object=a[14]),e.$set(u);const c={};l[0]&1024&&(c.dispose=a[10]),l[0]&32768&&(c.object=a[15]),n.$set(c);const f={};l[0]&2&&(f.position=a[1]),l[0]&4&&(f.scale=a[2]),l[0]&8&&(f.rotation=a[3]),l[0]&8192&&(f.lookAt=a[13]),l[0]&134356977&&(f.$$scope={dirty:l,ctx:a}),s.$set(f)},i(a){o||(ie(e.$$.fragment,a),ie(n.$$.fragment,a),ie(s.$$.fragment,a),o=!0)},o(a){le(e.$$.fragment,a),le(n.$$.fragment,a),le(s.$$.fragment,a),o=!1},d(a){Ee(e,a),a&&Me(t),Ee(n,a),a&&Me(i),Ee(s,a)}}}const Zl=new rt;Zl.scale.set(0,0,0);const el={matrix:Zl.matrix,color:null},f_=new it().fromArray(new Array(16).fill(0)),ks=new Ne(16777215),Kl="threlte-instanced-mesh-context",d_=r=>En(Kl+r);function h_(r,e,t){let n,i=on,s=()=>(i(),i=sc(P,X=>t(17,n=X)),P),o;r.$$.on_destroy.push(()=>i());let{$$slots:a={},$$scope:l}=e,{position:u=void 0}=e,{scale:c=void 0}=e,{rotation:f=void 0}=e,{viewportAware:d=!1}=e,{inViewport:m=!1}=e,{castShadow:_=void 0}=e,{receiveShadow:p=void 0}=e,{renderOrder:h=void 0}=e,{visible:g=void 0}=e,{userData:b=void 0}=e,{dispose:x=void 0}=e,{interactive:M=!1}=e,{ignorePointer:S=!1}=e,{lookAt:C=void 0}=e,{geometry:O}=e,{material:v}=e,{count:T=void 0}=e,{id:D=""}=e;const{onChange:z}=l_(v),W=X=>X===void 0,P=At(new Ro(O,v,W(T)?0:T));s();const U=new rt,R=[],{invalidate:k}=en(),Q=(X,ce)=>{const $e=R.findIndex(ot=>ot===X);if($e===-1){console.warn("Instanced Mesh: Instance not found");return}ce($e)},{start:j,stop:$,started:J}=ji(()=>{n.dispose(),mn(P,n=new Ro(O,v,R.length),n),R.forEach((X,ce)=>{ae(X,ce),X.color?n.setColorAt(ce,X.color):n.setColorAt(ce,ks)}),mn(P,n.instanceMatrix.needsUpdate=!0,n),n.instanceColor&&mn(P,n.instanceColor.needsUpdate=!0,n),$()},{autostart:!1,debugFrameloopMessage:"Instanced Mesh: auto instance count change queued"});Qe(r,J,X=>t(29,o=X));const E=X=>{if(W(T))R.push(X),o||j();else{const ce=R.findIndex($e=>$e===el);ce!==-1?R[ce]=X:R.push(X),R.length>T&&console.warn("Instanced Mesh: More instances requested than allocated, increase count on <")}re(X),k("Instanced Mesh: Instance added")},I=X=>{if(W(T)){const ce=R.findIndex($e=>$e===X);R.splice(ce,1),o||j()}else{ee(X);const ce=R.findIndex($e=>$e===X);ce>=T?R.splice(ce,1):R.splice(ce,1,el)}k("Instanced Mesh: Instance removed")},re=X=>{X.color||Q(X,ce=>{n.setColorAt(ce,ks),n.instanceColor&&mn(P,n.instanceColor.needsUpdate=!0,n)})},ee=X=>{Q(X,ce=>{n.setMatrixAt(ce,f_),mn(P,n.instanceMatrix.needsUpdate=!0,n),k("Instanced Mesh: instance matrix resetted")})},ae=(X,ce)=>{n.setMatrixAt(ce,X.matrix),mn(P,n.instanceMatrix.needsUpdate=!0,n),k("Instanced Mesh: instance matrix set")},N=X=>{Q(X,ce=>{ae(X,ce)})},fe=X=>{Q(X,ce=>{n.setColorAt(ce,X.color??ks),n.instanceColor&&mn(P,n.instanceColor.needsUpdate=!0,n),k("Instanced Mesh: instance color set")})};gn(Kl+D,{registerInstance:E,removeInstance:I,setInstanceMatrix:N,setInstanceColor:fe,parentObject:U});const _e=X=>{if(X.detail.instanceId===void 0)return;const ce=R[X.detail.instanceId];ce&&ce.pointerEventDispatcher&&ce.pointerEventDispatcher(X.type,X.detail)};function Te(X){m=X,t(0,m)}function me(X){Re.call(this,r,X)}function je(X){Re.call(this,r,X)}return r.$$set=X=>{"position"in X&&t(1,u=X.position),"scale"in X&&t(2,c=X.scale),"rotation"in X&&t(3,f=X.rotation),"viewportAware"in X&&t(4,d=X.viewportAware),"inViewport"in X&&t(0,m=X.inViewport),"castShadow"in X&&t(5,_=X.castShadow),"receiveShadow"in X&&t(6,p=X.receiveShadow),"renderOrder"in X&&t(7,h=X.renderOrder),"visible"in X&&t(8,g=X.visible),"userData"in X&&t(9,b=X.userData),"dispose"in X&&t(10,x=X.dispose),"interactive"in X&&t(11,M=X.interactive),"ignorePointer"in X&&t(12,S=X.ignorePointer),"lookAt"in X&&t(13,C=X.lookAt),"geometry"in X&&t(14,O=X.geometry),"material"in X&&t(15,v=X.material),"count"in X&&t(21,T=X.count),"id"in X&&t(22,D=X.id),"$$scope"in X&&t(27,l=X.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&32768&&z(v,X=>{mn(P,n.material=X,n)})},[m,u,c,f,d,_,p,h,g,b,x,M,S,C,O,v,P,n,U,J,_e,T,D,a,Te,me,je,l]}class p_ extends He{constructor(e){super(),We(this,e,h_,u_,Ue,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,renderOrder:7,visible:8,userData:9,dispose:10,interactive:11,ignorePointer:12,lookAt:13,geometry:14,material:15,count:21,id:22,instancedMesh:16},null,[-1,-1])}get instancedMesh(){return this.$$.ctx[16]}}function m_(r){let e;const t=r[8].default,n=Pt(t,r,r[9],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&512)&&Rt(n,t,i,i[9],e?Ot(t,i[9],s,null):It(i[9]),null)},i(i){e||(ie(n,i),e=!0)},o(i){le(n,i),e=!1},d(i){n&&n.d(i)}}}function g_(r){let e,t,n,i;return e=new es({props:{object:r[4],$$slots:{default:[m_]},$$scope:{ctx:r}}}),n=new ts({props:{object:r[4],position:r[0],scale:r[1],rotation:r[2],lookAt:r[3]}}),n.$on("transform",r[5]),{c(){Se(e.$$.fragment),t=Ze(),Se(n.$$.fragment)},l(s){we(e.$$.fragment,s),t=Ke(s),we(n.$$.fragment,s)},m(s,o){ye(e,s,o),Oe(s,t,o),ye(n,s,o),i=!0},p(s,[o]){const a={};o&512&&(a.$$scope={dirty:o,ctx:s}),e.$set(a);const l={};o&1&&(l.position=s[0]),o&2&&(l.scale=s[1]),o&4&&(l.rotation=s[2]),o&8&&(l.lookAt=s[3]),n.$set(l)},i(s){i||(ie(e.$$.fragment,s),ie(n.$$.fragment,s),i=!0)},o(s){le(e.$$.fragment,s),le(n.$$.fragment,s),i=!1},d(s){Ee(e,s),s&&Me(t),Ee(n,s)}}}function __(r,e,t){let{$$slots:n={},$$scope:i}=e,{position:s=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{lookAt:l=void 0}=e,{color:u=void 0}=e,{id:c=""}=e;const{registerInstance:f,setInstanceMatrix:d,removeInstance:m,setInstanceColor:_,parentObject:p}=d_(c),h=new rt,g=new it,b=ur(),x=()=>{var W;return p.uuid===((W=h.parent)==null?void 0:W.uuid)},M=W=>W!==void 0?W instanceof Ne?W:new Ne(W):null,S={color:M(u),matrix:h.matrix,pointerEventDispatcher:b},C=W=>{S.color=M(W),_(S)},O=()=>{let W=h.parent;const P=[];for(;W&&p&&W.uuid!==p.uuid&&(P.push(W),!!W.parent);)W=W.parent;h.updateMatrix(),g.copy(h.matrix),P.forEach(U=>{U.updateMatrix(),g.premultiply(U.matrix)}),S.matrix=g},v=()=>{h.updateMatrix(),S.matrix=h.matrix},T=()=>{v(),d(S)},{start:D}=ji(()=>{O(),d(S)},{autostart:!1,debugFrameloopMessage:"Instance: tracking non-direct child instance"});f(S),ml(()=>{x()?T():D(),C(u)});const z=()=>{x()&&T()};return ht(()=>{m(S)}),r.$$set=W=>{"position"in W&&t(0,s=W.position),"scale"in W&&t(1,o=W.scale),"rotation"in W&&t(2,a=W.rotation),"lookAt"in W&&t(3,l=W.lookAt),"color"in W&&t(6,u=W.color),"id"in W&&t(7,c=W.id),"$$scope"in W&&t(9,i=W.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&C(u)},[s,o,a,l,h,z,u,c,n,i]}class v_ extends He{constructor(e){super(),We(this,e,__,g_,Ue,{position:0,scale:1,rotation:2,lookAt:3,color:6,id:7})}}const tl=new qn,Fr=new B;class Jl extends Um{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Vt(e,3)),this.setAttribute("uv",new Vt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Qs(t,6,1);return this.setAttribute("instanceStart",new Gn(n,3,0)),this.setAttribute("instanceEnd",new Gn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Qs(t,6,1);return this.setAttribute("instanceColorStart",new Gn(n,3,0)),this.setAttribute("instanceColorEnd",new Gn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Lm(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),tl.setFromBufferAttribute(t),this.boundingBox.union(tl))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Fr.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Fr)),Fr.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Fr));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}oe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Le(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Ht.line={uniforms:Yr.merge([oe.common,oe.fog,oe.line]),vertexShader:`
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
		`};class Wr extends An{constructor(e){super({type:"LineMaterial",uniforms:Yr.clone(Ht.line.uniforms),vertexShader:Ht.line.vertexShader,fragmentShader:Ht.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return Boolean("USE_DASH"in this.defines)},set(t){Boolean(t)!==Boolean("USE_DASH"in this.defines)&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)},set:function(t){Boolean(t)!==Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const nl=new B,il=new B,wt=new at,yt=new at,xn=new at,Vs=new B,Gs=new it,Et=new km,rl=new B,Nr=new qn,Ur=new fr,bn=new at;let wn,li;function sl(r,e,t){return bn.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),bn.multiplyScalar(1/bn.w),bn.x=li/t.width,bn.y=li/t.height,bn.applyMatrix4(r.projectionMatrixInverse),bn.multiplyScalar(1/bn.w),Math.abs(Math.max(bn.x,bn.y))}function x_(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,l=o;a<l;a++){Et.start.fromBufferAttribute(i,a),Et.end.fromBufferAttribute(s,a),Et.applyMatrix4(t);const u=new B,c=new B;wn.distanceSqToSegment(Et.start,Et.end,c,u),c.distanceTo(u)<li*.5&&e.push({point:c,pointOnLine:u,distance:wn.origin.distanceTo(c),object:r,face:null,faceIndex:a,uv:null,uv2:null})}}function b_(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,o=r.matrixWorld,a=r.geometry,l=a.attributes.instanceStart,u=a.attributes.instanceEnd,c=Math.min(a.instanceCount,l.count),f=-e.near;wn.at(1,xn),xn.w=1,xn.applyMatrix4(e.matrixWorldInverse),xn.applyMatrix4(n),xn.multiplyScalar(1/xn.w),xn.x*=s.x/2,xn.y*=s.y/2,xn.z=0,Vs.copy(xn),Gs.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,m=c;d<m;d++){if(wt.fromBufferAttribute(l,d),yt.fromBufferAttribute(u,d),wt.w=1,yt.w=1,wt.applyMatrix4(Gs),yt.applyMatrix4(Gs),wt.z>f&&yt.z>f)continue;if(wt.z>f){const x=wt.z-yt.z,M=(wt.z-f)/x;wt.lerp(yt,M)}else if(yt.z>f){const x=yt.z-wt.z,M=(yt.z-f)/x;yt.lerp(wt,M)}wt.applyMatrix4(n),yt.applyMatrix4(n),wt.multiplyScalar(1/wt.w),yt.multiplyScalar(1/yt.w),wt.x*=s.x/2,wt.y*=s.y/2,yt.x*=s.x/2,yt.y*=s.y/2,Et.start.copy(wt),Et.start.z=0,Et.end.copy(yt),Et.end.z=0;const p=Et.closestPointToPointParameter(Vs,!0);Et.at(p,rl);const h=Au.lerp(wt.z,yt.z,p),g=h>=-1&&h<=1,b=Vs.distanceTo(rl)<li*.5;if(g&&b){Et.start.fromBufferAttribute(l,d),Et.end.fromBufferAttribute(u,d),Et.start.applyMatrix4(o),Et.end.applyMatrix4(o);const x=new B,M=new B;wn.distanceSqToSegment(Et.start,Et.end,M,x),t.push({point:M,pointOnLine:x,distance:wn.origin.distanceTo(M),object:r,face:null,faceIndex:d,uv:null,uv2:null})}}}class M_ extends Jt{constructor(e=new Jl,t=new Wr({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)nl.fromBufferAttribute(t,o),il.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+nl.distanceTo(il);const s=new Qs(i,2,1);return e.setAttribute("instanceDistanceStart",new Gn(s,1,0)),e.setAttribute("instanceDistanceEnd",new Gn(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;wn=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;li=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Ur.copy(a.boundingSphere).applyMatrix4(o);let u;if(n)u=li*.5;else{const f=Math.max(i.near,Ur.distanceToPoint(wn.origin));u=sl(i,f,l.resolution)}if(Ur.radius+=u,wn.intersectsSphere(Ur)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Nr.copy(a.boundingBox).applyMatrix4(o);let c;if(n)c=li*.5;else{const f=Math.max(i.near,Nr.distanceToPoint(wn.origin));c=sl(i,f,l.resolution)}Nr.expandByScalar(c),wn.intersectsBox(Nr)!==!1&&(n?x_(this,t):b_(this,i,t))}}class ea extends Jl{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}let S_=class extends M_{constructor(e=new ea,t=new Wr({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};function w_(r){let e;const t=r[21].default,n=Pt(t,r,r[32],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&2)&&Rt(n,t,i,i[32],e?Ot(t,i[32],s,null):It(i[32]),null)},i(i){e||(ie(n,i),e=!0)},o(i){le(n,i),e=!1},d(i){n&&n.d(i)}}}function y_(r){let e,t,n,i,s,o,a;e=new Nn({props:{dispose:r[12],object:r[16]}}),n=new Nn({props:{dispose:!0,object:r[17]}});function l(c){r[22](c)}let u={mesh:r[0],position:r[2],scale:r[3],rotation:r[4],lookAt:r[15],castShadow:r[6],receiveShadow:r[7],frustumCulled:r[8],renderOrder:r[9],visible:r[10],userData:r[11],dispose:r[12],interactive:r[13],ignorePointer:r[14],viewportAware:r[5],$$slots:{default:[w_]},$$scope:{ctx:r}};return r[1]!==void 0&&(u.inViewport=r[1]),s=new pa({props:u}),$t.push(()=>cn(s,"inViewport",l)),s.$on("click",r[23]),s.$on("contextmenu",r[24]),s.$on("pointerup",r[25]),s.$on("pointerdown",r[26]),s.$on("pointerenter",r[27]),s.$on("pointerleave",r[28]),s.$on("pointermove",r[29]),s.$on("viewportenter",r[30]),s.$on("viewportleave",r[31]),{c(){Se(e.$$.fragment),t=Ze(),Se(n.$$.fragment),i=Ze(),Se(s.$$.fragment)},l(c){we(e.$$.fragment,c),t=Ke(c),we(n.$$.fragment,c),i=Ke(c),we(s.$$.fragment,c)},m(c,f){ye(e,c,f),Oe(c,t,f),ye(n,c,f),Oe(c,i,f),ye(s,c,f),a=!0},p(c,f){const d={};f[0]&4096&&(d.dispose=c[12]),f[0]&65536&&(d.object=c[16]),e.$set(d);const m={};f[0]&1&&(m.mesh=c[0]),f[0]&4&&(m.position=c[2]),f[0]&8&&(m.scale=c[3]),f[0]&16&&(m.rotation=c[4]),f[0]&32768&&(m.lookAt=c[15]),f[0]&64&&(m.castShadow=c[6]),f[0]&128&&(m.receiveShadow=c[7]),f[0]&256&&(m.frustumCulled=c[8]),f[0]&512&&(m.renderOrder=c[9]),f[0]&1024&&(m.visible=c[10]),f[0]&2048&&(m.userData=c[11]),f[0]&4096&&(m.dispose=c[12]),f[0]&8192&&(m.interactive=c[13]),f[0]&16384&&(m.ignorePointer=c[14]),f[0]&32&&(m.viewportAware=c[5]),f[1]&2&&(m.$$scope={dirty:f,ctx:c}),!o&&f[0]&2&&(o=!0,m.inViewport=c[1],un(()=>o=!1)),s.$set(m)},i(c){a||(ie(e.$$.fragment,c),ie(n.$$.fragment,c),ie(s.$$.fragment,c),a=!0)},o(c){le(e.$$.fragment,c),le(n.$$.fragment,c),le(s.$$.fragment,c),a=!1},d(c){Ee(e,c),c&&Me(t),Ee(n,c),c&&Me(i),Ee(s,c)}}}function E_(r,e,t){let{$$slots:n={},$$scope:i}=e,{position:s=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{viewportAware:l=!1}=e,{inViewport:u=!1}=e,{castShadow:c=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:m=void 0}=e,{visible:_=void 0}=e,{userData:p=void 0}=e,{dispose:h=void 0}=e,{interactive:g=!1}=e,{ignorePointer:b=!1}=e,{lookAt:x=void 0}=e,{points:M=[]}=e,{material:S}=e,C=new ea;C.setPositions([0,0,0]);let O;const v=new S_(void 0,S);ht(()=>{C.dispose(),O==null||O.dispose()});const T=()=>v,{invalidate:D}=en();let z=S;function W(I){u=I,t(1,u)}function P(I){Re.call(this,r,I)}function U(I){Re.call(this,r,I)}function R(I){Re.call(this,r,I)}function k(I){Re.call(this,r,I)}function Q(I){Re.call(this,r,I)}function j(I){Re.call(this,r,I)}function $(I){Re.call(this,r,I)}function J(I){Re.call(this,r,I)}function E(I){Re.call(this,r,I)}return r.$$set=I=>{"position"in I&&t(2,s=I.position),"scale"in I&&t(3,o=I.scale),"rotation"in I&&t(4,a=I.rotation),"viewportAware"in I&&t(5,l=I.viewportAware),"inViewport"in I&&t(1,u=I.inViewport),"castShadow"in I&&t(6,c=I.castShadow),"receiveShadow"in I&&t(7,f=I.receiveShadow),"frustumCulled"in I&&t(8,d=I.frustumCulled),"renderOrder"in I&&t(9,m=I.renderOrder),"visible"in I&&t(10,_=I.visible),"userData"in I&&t(11,p=I.userData),"dispose"in I&&t(12,h=I.dispose),"interactive"in I&&t(13,g=I.interactive),"ignorePointer"in I&&t(14,b=I.ignorePointer),"lookAt"in I&&t(15,x=I.lookAt),"points"in I&&t(18,M=I.points),"material"in I&&t(19,S=I.material),"$$scope"in I&&t(32,i=I.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&327681&&(O==null||O.dispose(),M.length?(t(16,O=new ea),O.setPositions(M.map(I=>I instanceof B?I.toArray():I).flat()),t(0,v.geometry=O,v)):t(0,v.geometry=C,v),v.computeLineDistances(),D("Line2: points changed")),r.$$.dirty[0]&1572864&&(S!==z?(T().material=S,D("Line2: material changed")):D("Line2: material props changed"),t(20,z=S))},[v,u,s,o,a,l,c,f,d,m,_,p,h,g,b,x,O,C,M,S,z,n,W,P,U,R,k,Q,j,$,J,E,i]}class A_ extends He{constructor(e){super(),We(this,e,E_,y_,Ue,{position:2,scale:3,rotation:4,viewportAware:5,inViewport:1,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,interactive:13,ignorePointer:14,lookAt:15,points:18,material:19,line2:0},null,[-1,-1])}get line2(){return this.$$.ctx[0]}}function T_(r){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class al extends He{constructor(e){super(),We(this,e,T_,null,Ue,{})}}new Proxy(al,{get(r,e){return r[e]||al}});Bg(zo,()=>new zo(Gl));function ol(r,e,t){const n=r.slice();return n[2]=e[t],n}function ll(r){let e,t;return e=new A_({props:{material:new Wr({worldUnits:!0,linewidth:r[1].edgeThickness,color:5592405}),points:r[2]}}),{c(){Se(e.$$.fragment)},l(n){we(e.$$.fragment,n)},m(n,i){ye(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.material=new Wr({worldUnits:!0,linewidth:n[1].edgeThickness,color:5592405})),i&1&&(s.points=n[2]),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){le(e.$$.fragment,n),t=!1},d(n){Ee(e,n)}}}function C_(r){let e,t,n=r[0].edges,i=[];for(let o=0;o<n.length;o+=1)i[o]=ll(ol(r,n,o));const s=o=>le(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Fi()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=Fi()},m(o,a){for(let l=0;l<i.length;l+=1)i[l].m(o,a);Oe(o,e,a),t=!0},p(o,[a]){if(a&3){n=o[0].edges;let l;for(l=0;l<n.length;l+=1){const u=ol(o,n,l);i[l]?(i[l].p(u,a),ie(i[l],1)):(i[l]=ll(u),i[l].c(),ie(i[l],1),i[l].m(e.parentNode,e))}for(Vi(),l=n.length;l<i.length;l+=1)s(l);Gi()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)ie(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)le(i[a]);t=!1},d(o){ta(i,o),o&&Me(e)}}}function L_(r,e,t){let n,i;return Qe(r,jr,s=>t(0,n=s)),Qe(r,Ii,s=>t(1,i=s)),[n,i]}class D_ extends He{constructor(e){super(),We(this,e,L_,C_,Ue,{})}}function cl(r,e,t){const n=r.slice();return n[4]=e[t],n}function ul(r){let e,t;return e=new v_({props:{position:new B(...r[4]),scale:r[1].vertexSize,color:4473924}}),{c(){Se(e.$$.fragment)},l(n){we(e.$$.fragment,n)},m(n,i){ye(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.position=new B(...n[4])),i&2&&(s.scale=n[1].vertexSize),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){le(e.$$.fragment,n),t=!1},d(n){Ee(e,n)}}}function P_(r){let e,t,n=r[0].vertices,i=[];for(let o=0;o<n.length;o+=1)i[o]=ul(cl(r,n,o));const s=o=>le(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Fi()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=Fi()},m(o,a){for(let l=0;l<i.length;l+=1)i[l].m(o,a);Oe(o,e,a),t=!0},p(o,a){if(a&3){n=o[0].vertices;let l;for(l=0;l<n.length;l+=1){const u=cl(o,n,l);i[l]?(i[l].p(u,a),ie(i[l],1)):(i[l]=ul(u),i[l].c(),ie(i[l],1),i[l].m(e.parentNode,e))}for(Vi(),l=n.length;l<i.length;l+=1)s(l);Gi()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)ie(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)le(i[a]);t=!1},d(o){ta(i,o),o&&Me(e)}}}function R_(r){let e,t;return e=new p_({props:{geometry:r[2],material:r[3],$$slots:{default:[P_]},$$scope:{ctx:r}}}),{c(){Se(e.$$.fragment)},l(n){we(e.$$.fragment,n)},m(n,i){ye(e,n,i),t=!0},p(n,[i]){const s={};i&131&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){le(e.$$.fragment,n),t=!1},d(n){Ee(e,n)}}}function I_(r,e,t){let n,i;Qe(r,jr,a=>t(0,n=a)),Qe(r,Ii,a=>t(1,i=a));const s=new fa(.5),o=new Dm;return[n,i,s,o]}class O_ extends He{constructor(e){super(),We(this,e,I_,R_,Ue,{})}}function z_(r){let e,t;return e=new o_({props:{geometry:r[0],material:r[1]}}),{c(){Se(e.$$.fragment)},l(n){we(e.$$.fragment,n)},m(n,i){ye(e,n,i),t=!0},p:on,i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){le(e.$$.fragment,n),t=!1},d(n){Ee(e,n)}}}function F_(r,e,t){let{face:n}=e;const i=new fn,s=new Float32Array([...n[0],...n[1],...n[2]]);i.setAttribute("position",new Qt(s,3));const o=new Pm({color:3355443,opacity:.5,transparent:!0,side:Xr});return r.$$set=a=>{"face"in a&&t(2,n=a.face)},[i,o,n]}class N_ extends He{constructor(e){super(),We(this,e,F_,z_,Ue,{face:2})}}function fl(r,e,t){const n=r.slice();return n[1]=e[t],n}function dl(r){let e,t;return e=new N_({props:{face:r[1]}}),{c(){Se(e.$$.fragment)},l(n){we(e.$$.fragment,n)},m(n,i){ye(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.face=n[1]),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){le(e.$$.fragment,n),t=!1},d(n){Ee(e,n)}}}function U_(r){let e,t,n=r[0].faces,i=[];for(let o=0;o<n.length;o+=1)i[o]=dl(fl(r,n,o));const s=o=>le(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Fi()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=Fi()},m(o,a){for(let l=0;l<i.length;l+=1)i[l].m(o,a);Oe(o,e,a),t=!0},p(o,[a]){if(a&1){n=o[0].faces;let l;for(l=0;l<n.length;l+=1){const u=fl(o,n,l);i[l]?(i[l].p(u,a),ie(i[l],1)):(i[l]=dl(u),i[l].c(),ie(i[l],1),i[l].m(e.parentNode,e))}for(Vi(),l=n.length;l<i.length;l+=1)s(l);Gi()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)ie(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)le(i[a]);t=!1},d(o){ta(i,o),o&&Me(e)}}}function B_(r,e,t){let n;return Qe(r,jr,i=>t(0,n=i)),[n]}class k_ extends He{constructor(e){super(),We(this,e,B_,U_,Ue,{})}}function V_(r){let e,t;return e=new Hg({props:{autoRotate:r[0].autoRotate,enableZoom:!0}}),{c(){Se(e.$$.fragment)},l(n){we(e.$$.fragment,n)},m(n,i){ye(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.autoRotate=n[0].autoRotate),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){le(e.$$.fragment,n),t=!1},d(n){Ee(e,n)}}}function G_(r){let e,t,n,i,s,o,a,l,u,c;return e=new Ug({props:{position:{y:3,x:3,z:3},$$slots:{default:[V_]},$$scope:{ctx:r}}}),n=new Qg({props:{position:{y:10}}}),s=new D_({}),a=new O_({}),u=new k_({}),{c(){Se(e.$$.fragment),t=Ze(),Se(n.$$.fragment),i=Ze(),Se(s.$$.fragment),o=Ze(),Se(a.$$.fragment),l=Ze(),Se(u.$$.fragment)},l(f){we(e.$$.fragment,f),t=Ke(f),we(n.$$.fragment,f),i=Ke(f),we(s.$$.fragment,f),o=Ke(f),we(a.$$.fragment,f),l=Ke(f),we(u.$$.fragment,f)},m(f,d){ye(e,f,d),Oe(f,t,d),ye(n,f,d),Oe(f,i,d),ye(s,f,d),Oe(f,o,d),ye(a,f,d),Oe(f,l,d),ye(u,f,d),c=!0},p(f,d){const m={};d&3&&(m.$$scope={dirty:d,ctx:f}),e.$set(m)},i(f){c||(ie(e.$$.fragment,f),ie(n.$$.fragment,f),ie(s.$$.fragment,f),ie(a.$$.fragment,f),ie(u.$$.fragment,f),c=!0)},o(f){le(e.$$.fragment,f),le(n.$$.fragment,f),le(s.$$.fragment,f),le(a.$$.fragment,f),le(u.$$.fragment,f),c=!1},d(f){Ee(e,f),f&&Me(t),Ee(n,f),f&&Me(i),Ee(s,f),f&&Me(o),Ee(a,f),f&&Me(l),Ee(u,f)}}}function H_(r){let e,t,n;return t=new vg({props:{$$slots:{default:[G_]},$$scope:{ctx:r}}}),{c(){e=gt("div"),Se(t.$$.fragment),this.h()},l(i){e=_t(i,"DIV",{class:!0});var s=Tt(e);we(t.$$.fragment,s),s.forEach(Me),this.h()},h(){nt(e,"class","svelte-moe61r")},m(i,s){Oe(i,e,s),ye(t,e,null),n=!0},p(i,[s]){const o={};s&3&&(o.$$scope={dirty:s,ctx:i}),t.$set(o)},i(i){n||(ie(t.$$.fragment,i),n=!0)},o(i){le(t.$$.fragment,i),n=!1},d(i){i&&Me(e),Ee(t)}}}function W_(r,e,t){let n;return Qe(r,Vr,i=>t(0,n=i)),[n]}class j_ extends He{constructor(e){super(),We(this,e,W_,H_,Ue,{})}}function X_(r){let e,t,n;return{c(){e=gt("div"),t=gt("span"),n=di("Geodesicraft"),this.h()},l(i){e=_t(i,"DIV",{class:!0});var s=Tt(e);t=_t(s,"SPAN",{class:!0});var o=Tt(t);n=hi(o,"Geodesicraft"),o.forEach(Me),s.forEach(Me),this.h()},h(){nt(t,"class","clickthroughable svelte-1rb3ir3"),nt(e,"class","clickthroughable svelte-1rb3ir3")},m(i,s){Oe(i,e,s),dt(e,t),dt(t,n)},p:on,i:on,o:on,d(i){i&&Me(e)}}}class q_ extends He{constructor(e){super(),We(this,e,null,X_,Ue,{})}}function Y_(r){let e,t,n,i,s,o;const a=r[2].default,l=Pt(a,r,r[1],null);return{c(){e=gt("label"),l&&l.c(),t=Ze(),n=gt("input"),this.h()},l(u){e=_t(u,"LABEL",{class:!0});var c=Tt(e);l&&l.l(c),t=Ke(c),n=_t(c,"INPUT",{type:!0}),c.forEach(Me),this.h()},h(){nt(n,"type","checkbox"),nt(e,"class","svelte-hmqrx4")},m(u,c){Oe(u,e,c),l&&l.m(e,null),dt(e,t),dt(e,n),n.checked=r[0],i=!0,s||(o=Mn(n,"change",r[3]),s=!0)},p(u,[c]){l&&l.p&&(!i||c&2)&&Rt(l,a,u,u[1],i?Ot(a,u[1],c,null):It(u[1]),null),c&1&&(n.checked=u[0])},i(u){i||(ie(l,u),i=!0)},o(u){le(l,u),i=!1},d(u){u&&Me(e),l&&l.d(u),s=!1,o()}}}function Z_(r,e,t){let{$$slots:n={},$$scope:i}=e,{checked:s=!1}=e;function o(){s=this.checked,t(0,s)}return r.$$set=a=>{"checked"in a&&t(0,s=a.checked),"$$scope"in a&&t(1,i=a.$$scope)},[s,i,n,o]}class hl extends He{constructor(e){super(),We(this,e,Z_,Y_,Ue,{checked:0})}}function K_(r){let e;return{c(){e=di("Dark Mode")},l(t){e=hi(t,"Dark Mode")},m(t,n){Oe(t,e,n)},d(t){t&&Me(e)}}}function J_(r){let e;return{c(){e=di("Rotate")},l(t){e=hi(t,"Rotate")},m(t,n){Oe(t,e,n)},d(t){t&&Me(e)}}}function Q_(r){let e,t,n,i,s,o;t=new hl({props:{$$slots:{default:[K_]},$$scope:{ctx:r}}});function a(u){r[1](u)}let l={$$slots:{default:[J_]},$$scope:{ctx:r}};return r[0].autoRotate!==void 0&&(l.checked=r[0].autoRotate),i=new hl({props:l}),$t.push(()=>cn(i,"checked",a)),{c(){e=gt("div"),Se(t.$$.fragment),n=Ze(),Se(i.$$.fragment),this.h()},l(u){e=_t(u,"DIV",{class:!0});var c=Tt(e);we(t.$$.fragment,c),n=Ke(c),we(i.$$.fragment,c),c.forEach(Me),this.h()},h(){nt(e,"class","clickthroughable svelte-mpjsd9")},m(u,c){Oe(u,e,c),ye(t,e,null),dt(e,n),ye(i,e,null),o=!0},p(u,[c]){const f={};c&4&&(f.$$scope={dirty:c,ctx:u}),t.$set(f);const d={};c&4&&(d.$$scope={dirty:c,ctx:u}),!s&&c&1&&(s=!0,d.checked=u[0].autoRotate,un(()=>s=!1)),i.$set(d)},i(u){o||(ie(t.$$.fragment,u),ie(i.$$.fragment,u),o=!0)},o(u){le(t.$$.fragment,u),le(i.$$.fragment,u),o=!1},d(u){u&&Me(e),Ee(t),Ee(i)}}}function $_(r,e,t){let n;Qe(r,Vr,s=>t(0,n=s));function i(s){r.$$.not_equal(n.autoRotate,s)&&(n.autoRotate=s,Vr.set(n))}return[n,i]}class e0 extends He{constructor(e){super(),We(this,e,$_,Q_,Ue,{})}}function t0(r){let e,t,n,i,s;return t=new q_({}),i=new e0({}),{c(){e=gt("div"),Se(t.$$.fragment),n=Ze(),Se(i.$$.fragment),this.h()},l(o){e=_t(o,"DIV",{class:!0});var a=Tt(e);we(t.$$.fragment,a),n=Ke(a),we(i.$$.fragment,a),a.forEach(Me),this.h()},h(){nt(e,"class","clickthroughable svelte-uekgqy")},m(o,a){Oe(o,e,a),ye(t,e,null),dt(e,n),ye(i,e,null),s=!0},p:on,i(o){s||(ie(t.$$.fragment,o),ie(i.$$.fragment,o),s=!0)},o(o){le(t.$$.fragment,o),le(i.$$.fragment,o),s=!1},d(o){o&&Me(e),Ee(t),Ee(i)}}}class n0 extends He{constructor(e){super(),We(this,e,null,t0,Ue,{})}}function i0(r){let e,t,n,i,s,o,a;return n=new j_({}),o=new n0({}),{c(){e=gt("div"),t=gt("div"),Se(n.$$.fragment),i=Ze(),s=gt("div"),Se(o.$$.fragment),this.h()},l(l){e=_t(l,"DIV",{class:!0});var u=Tt(e);t=_t(u,"DIV",{class:!0});var c=Tt(t);we(n.$$.fragment,c),c.forEach(Me),i=Ke(u),s=_t(u,"DIV",{class:!0});var f=Tt(s);we(o.$$.fragment,f),f.forEach(Me),u.forEach(Me),this.h()},h(){nt(t,"class","child clickthroughable svelte-adjw6t"),nt(s,"class","child clickthroughable svelte-adjw6t"),nt(e,"class","parent clickthroughable svelte-adjw6t")},m(l,u){Oe(l,e,u),dt(e,t),ye(n,t,null),dt(e,i),dt(e,s),ye(o,s,null),a=!0},p:on,i(l){a||(ie(n.$$.fragment,l),ie(o.$$.fragment,l),a=!0)},o(l){le(n.$$.fragment,l),le(o.$$.fragment,l),a=!1},d(l){l&&Me(e),Ee(n),Ee(o)}}}class r0 extends He{constructor(e){super(),We(this,e,null,i0,Ue,{})}}function s0(r){let e,t;return{c(){e=gt("div"),t=di("Dome Controls Footer"),this.h()},l(n){e=_t(n,"DIV",{class:!0});var i=Tt(e);t=hi(i,"Dome Controls Footer"),i.forEach(Me),this.h()},h(){nt(e,"class","svelte-1sp437l")},m(n,i){Oe(n,e,i),dt(e,t)},p:on,i:on,o:on,d(n){n&&Me(e)}}}class a0 extends He{constructor(e){super(),We(this,e,null,s0,Ue,{})}}function o0(r){let e,t,n,i,s,o,a,l,u;return n=new vc({}),s=new r0({}),l=new a0({}),{c(){e=gt("div"),t=gt("div"),Se(n.$$.fragment),i=Ze(),Se(s.$$.fragment),o=Ze(),a=gt("div"),Se(l.$$.fragment),this.h()},l(c){e=_t(c,"DIV",{class:!0});var f=Tt(e);t=_t(f,"DIV",{class:!0});var d=Tt(t);we(n.$$.fragment,d),d.forEach(Me),i=Ke(f),we(s.$$.fragment,f),o=Ke(f),a=_t(f,"DIV",{class:!0});var m=Tt(a);we(l.$$.fragment,m),m.forEach(Me),f.forEach(Me),this.h()},h(){nt(t,"class","sidebar svelte-pffrn4"),nt(a,"class","footer svelte-pffrn4"),nt(e,"class","main svelte-pffrn4")},m(c,f){Oe(c,e,f),dt(e,t),ye(n,t,null),dt(e,i),ye(s,e,null),dt(e,o),dt(e,a),ye(l,a,null),u=!0},p:on,i(c){u||(ie(n.$$.fragment,c),ie(s.$$.fragment,c),ie(l.$$.fragment,c),u=!0)},o(c){le(n.$$.fragment,c),le(s.$$.fragment,c),le(l.$$.fragment,c),u=!1},d(c){c&&Me(e),Ee(n),Ee(s),Ee(l)}}}function l0(r){return fc(),[]}class _0 extends He{constructor(e){super(),We(this,e,l0,o0,Ue,{})}}export{_0 as default};
