import{L as In,M as ct,N as an,A as qi,O as mn,S as Ze,i as Ke,s as Xe,F as Gt,G as Ht,H as Wt,I as jt,f as de,t as ge,K as nt,w as Ae,x as Te,y as Ce,z as Le,k as Qi,l as $i,m as er,h as He,n as Ur,b as et,P as Xl,Q as jn,g as tr,d as nr,D as ql,o as $o,R as sn,T as Tn,U as ir,V as Un,a as ut,c as ft,W as Bn,X as Ge,B as On,C as Yl,e as zr,Y as el,q as Zl,r as Kl,J as Xs}from"../../chunks/index-ff3951ab.js";import{d as Jl,w as St,r as Ql}from"../../chunks/index-61eb7ed4.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qs="148",li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$l=0,la=1,ec=2,tl=1,nl=2,Hi=3,ii=0,Qt=1,Ys=2,lr=3,zn=0,Ai=1,ca=2,ua=3,fa=4,tc=5,wi=100,nc=101,ic=102,da=103,ha=104,rc=200,sc=201,ac=202,oc=203,il=204,rl=205,lc=206,cc=207,uc=208,fc=209,dc=210,hc=0,pc=1,mc=2,Os=3,gc=4,_c=5,vc=6,xc=7,sl=0,bc=1,Mc=2,pn=0,Sc=1,yc=2,wc=3,al=4,Ec=5,ol=300,Ci=301,Li=302,zs=303,Fs=304,Br=306,Ns=1e3,on=1001,Us=1002,Pt=1003,pa=1004,$r=1005,Zt=1006,Ac=1007,Yi=1008,ri=1009,Tc=1010,Cc=1011,ll=1012,Lc=1013,Qn=1014,$n=1015,Zi=1016,Dc=1017,Pc=1018,Ti=1020,Rc=1021,Ic=1022,ln=1023,Oc=1024,zc=1025,ei=1026,Di=1027,Fc=1028,Nc=1029,Uc=1030,Bc=1031,kc=1033,es=33776,ts=33777,ns=33778,is=33779,ma=35840,ga=35841,_a=35842,va=35843,Vc=36196,xa=37492,ba=37496,Ma=37808,Sa=37809,ya=37810,wa=37811,Ea=37812,Aa=37813,Ta=37814,Ca=37815,La=37816,Da=37817,Pa=37818,Ra=37819,Ia=37820,Oa=37821,za=36492,Fn=3e3,Je=3001,Gc=3200,Hc=3201,cl=0,Wc=1,dn="srgb",Ki="srgb-linear",rs=7680,jc=519,Bs=35044,Fa="300 es",ks=1035;class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Na=1234567;const ji=Math.PI/180,Fr=180/Math.PI;function An(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[r&255]+wt[r>>8&255]+wt[r>>16&255]+wt[r>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Et(r,e,t){return Math.max(e,Math.min(t,r))}function Zs(r,e){return(r%e+e)%e}function Xc(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function qc(r,e,t){return r!==e?(t-r)/(e-r):0}function Xi(r,e,t){return(1-t)*r+t*e}function Yc(r,e,t,n){return Xi(r,e,1-Math.exp(-t*n))}function Zc(r,e=1){return e-Math.abs(Zs(r,e*2)-e)}function Kc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Jc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Qc(r,e){return r+Math.floor(Math.random()*(e-r+1))}function $c(r,e){return r+Math.random()*(e-r)}function eu(r){return r*(.5-Math.random())}function tu(r){r!==void 0&&(Na=r);let e=Na+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nu(r){return r*ji}function iu(r){return r*Fr}function Vs(r){return(r&r-1)===0&&r!==0}function ru(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Nr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function su(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+n)/2),c=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),m=s((n-e)/2),v=o((n-e)/2);switch(i){case"XYX":r.set(a*c,l*f,l*d,a*u);break;case"YZY":r.set(l*d,a*c,l*f,a*u);break;case"ZXZ":r.set(l*f,l*d,a*c,a*u);break;case"XZX":r.set(a*c,l*v,l*m,a*u);break;case"YXY":r.set(l*m,a*c,l*v,a*u);break;case"ZYZ":r.set(l*v,l*m,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function En(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ye(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var au=Object.freeze({__proto__:null,DEG2RAD:ji,RAD2DEG:Fr,generateUUID:An,clamp:Et,euclideanModulo:Zs,mapLinear:Xc,inverseLerp:qc,lerp:Xi,damp:Yc,pingpong:Zc,smoothstep:Kc,smootherstep:Jc,randInt:Qc,randFloat:$c,randFloatSpread:eu,seededRandom:tu,degToRad:nu,radToDeg:iu,isPowerOfTwo:Vs,ceilPowerOfTwo:ru,floorPowerOfTwo:Nr,setQuaternionFromProperEuler:su,normalize:Ye,denormalize:En});class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=n,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],c=n[4],f=n[7],d=n[2],m=n[5],v=n[8],p=i[0],h=i[3],g=i[6],b=i[1],x=i[4],M=i[7],S=i[2],T=i[5],O=i[8];return s[0]=o*p+a*b+l*S,s[3]=o*h+a*x+l*T,s[6]=o*g+a*M+l*O,s[1]=u*p+c*b+f*S,s[4]=u*h+c*x+f*T,s[7]=u*g+c*M+f*O,s[2]=d*p+m*b+v*S,s[5]=d*h+m*x+v*T,s[8]=d*g+m*M+v*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-n*s*c+n*a*l+i*s*u-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,m=u*s-o*l,v=t*f+n*d+i*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return e[0]=f*p,e[1]=(i*u-c*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(c*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*l-u*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-i*u,i*l,-i*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ss.makeScale(e,t)),this}rotate(e){return this.premultiply(ss.makeRotation(-e)),this}translate(e,t){return this.premultiply(ss.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ss=new Vt;function ul(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ji(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ti(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ir(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const as={[dn]:{[Ki]:ti},[Ki]:{[dn]:Ir}},Ct={legacyMode:!0,get workingColorSpace(){return Ki},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(as[e]&&as[e][t]!==void 0){const n=as[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ht={r:0,g:0,b:0},tn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function os(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function ur(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ct.workingColorSpace){if(e=Zs(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=os(o,s,e+1/3),this.g=os(o,s,e),this.b=os(o,s,e-1/3)}return Ct.toWorkingColorSpace(this,i),this}setStyle(e,t=dn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ct.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ct.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,u,c,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ct.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ct.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=dn){const n=fl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return Ct.fromWorkingColorSpace(ur(this,ht),e),Et(ht.r*255,0,255)<<16^Et(ht.g*255,0,255)<<8^Et(ht.b*255,0,255)<<0}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(ur(this,ht),t);const n=ht.r,i=ht.g,s=ht.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(ur(this,ht),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=dn){return Ct.fromWorkingColorSpace(ur(this,ht),e),e!==dn?`color(${e} ${ht.r} ${ht.g} ${ht.b})`:`rgb(${ht.r*255|0},${ht.g*255|0},${ht.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(tn),tn.h+=e,tn.s+=t,tn.l+=n,this.setHSL(tn.h,tn.s,tn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(tn),e.getHSL(cr);const n=Xi(tn.h,cr.h,t),i=Xi(tn.s,cr.s,t),s=Xi(tn.l,cr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Be.NAMES=fl;let ui;class dl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ui===void 0&&(ui=Ji("canvas")),ui.width=e.width,ui.height=e.height;const n=ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ji("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ti(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class hl{constructor(e=null){this.isSource=!0,this.uuid=An(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ls(i[o].image)):s.push(ls(i[o]))}else s=ls(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ls(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?dl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ou=0;class zt extends oi{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=on,i=on,s=Zt,o=Yi,a=ln,l=ri,u=zt.DEFAULT_ANISOTROPY,c=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=An(),this.name="",this.source=new hl(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ns:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case Us:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ns:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case Us:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=ol;zt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],m=l[5],v=l[9],p=l[2],h=l[6],g=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-p)<.01&&Math.abs(v-h)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+p)<.1&&Math.abs(v+h)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,M=(m+1)/2,S=(g+1)/2,T=(c+d)/4,O=(f+p)/4,_=(v+h)/4;return x>M&&x>S?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=O/n):M>S?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=T/i,s=_/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=O/s,i=_/s),this.set(n,i,s,t),this}let b=Math.sqrt((h-v)*(h-v)+(f-p)*(f-p)+(d-c)*(d-c));return Math.abs(b)<.001&&(b=1),this.x=(h-v)/b,this.y=(f-p)/b,this.z=(d-c)/b,this.w=Math.acos((u+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nn extends oi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pl extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lu extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],u=n[i+1],c=n[i+2],f=n[i+3];const d=s[o+0],m=s[o+1],v=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=p;return}if(f!==p||l!==d||u!==m||c!==v){let h=1-a;const g=l*d+u*m+c*v+f*p,b=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const S=Math.sqrt(x),T=Math.atan2(S,g*b);h=Math.sin(h*T)/S,a=Math.sin(a*T)/S}const M=a*b;if(l=l*h+d*M,u=u*h+m*M,c=c*h+v*M,f=f*h+p*M,h===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=S,u*=S,c*=S,f*=S}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],u=n[i+2],c=n[i+3],f=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+c*f+l*m-u*d,e[t+1]=l*v+c*d+u*f-a*m,e[t+2]=u*v+c*m+a*d-l*f,e[t+3]=c*v-a*f-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),c=a(i/2),f=a(s/2),d=l(n/2),m=l(i/2),v=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*m*v,this._y=u*m*f-d*c*v,this._z=u*c*v+d*m*f,this._w=u*c*f-d*m*v;break;case"YXZ":this._x=d*c*f+u*m*v,this._y=u*m*f-d*c*v,this._z=u*c*v-d*m*f,this._w=u*c*f+d*m*v;break;case"ZXY":this._x=d*c*f-u*m*v,this._y=u*m*f+d*c*v,this._z=u*c*v+d*m*f,this._w=u*c*f-d*m*v;break;case"ZYX":this._x=d*c*f-u*m*v,this._y=u*m*f+d*c*v,this._z=u*c*v-d*m*f,this._w=u*c*f+d*m*v;break;case"YZX":this._x=d*c*f+u*m*v,this._y=u*m*f+d*c*v,this._z=u*c*v-d*m*f,this._w=u*c*f-d*m*v;break;case"XZY":this._x=d*c*f-u*m*v,this._y=u*m*f-d*c*v,this._z=u*c*v+d*m*f,this._w=u*c*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=n+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-i)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-u)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+o*a+i*u-s*l,this._y=i*c+o*l+s*a-n*u,this._z=s*c+o*u+n*l-i*a,this._w=o*c-n*a-i*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ua.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ua.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*i-a*n,c=l*n+a*t-s*i,f=l*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=u*l+d*-s+c*-a-f*-o,this.y=c*l+d*-o+f*-s-u*-a,this.z=f*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cs.copy(this).projectOnVector(e),this.sub(cs)}reflect(e){return this.sub(cs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cs=new B,Ua=new si;class kn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],f=e[l+1],d=e[l+2];c<t&&(t=c),f<n&&(n=f),d<i&&(i=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),f=e.getY(l),d=e.getZ(l);c<t&&(t=c),f<n&&(n=f),d<i&&(i=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Xn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Xn)}else n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox),us.applyMatrix4(e.matrixWorld),this.union(us);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),fr.subVectors(this.max,zi),fi.subVectors(e.a,zi),di.subVectors(e.b,zi),hi.subVectors(e.c,zi),Cn.subVectors(di,fi),Ln.subVectors(hi,di),qn.subVectors(fi,hi);let t=[0,-Cn.z,Cn.y,0,-Ln.z,Ln.y,0,-qn.z,qn.y,Cn.z,0,-Cn.x,Ln.z,0,-Ln.x,qn.z,0,-qn.x,-Cn.y,Cn.x,0,-Ln.y,Ln.x,0,-qn.y,qn.x,0];return!fs(t,fi,di,hi,fr)||(t=[1,0,0,0,1,0,0,0,1],!fs(t,fi,di,hi,fr))?!1:(dr.crossVectors(Cn,Ln),t=[dr.x,dr.y,dr.z],fs(t,fi,di,hi,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Xn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new B,new B,new B,new B,new B,new B,new B,new B],Xn=new B,us=new kn,fi=new B,di=new B,hi=new B,Cn=new B,Ln=new B,qn=new B,zi=new B,fr=new B,dr=new B,Yn=new B;function fs(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Yn.fromArray(r,s);const a=i.x*Math.abs(Yn.x)+i.y*Math.abs(Yn.y)+i.z*Math.abs(Yn.z),l=e.dot(Yn),u=t.dot(Yn),c=n.dot(Yn);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const cu=new kn,Fi=new B,ds=new B;class rr{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const t=Fi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ds.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(ds)),this.expandByPoint(Fi.copy(e.center).sub(ds))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new B,hs=new B,hr=new B,Dn=new B,ps=new B,pr=new B,ms=new B;class ml{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.direction).multiplyScalar(t).add(this.origin),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hs.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(hs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(hr),a=Dn.dot(this.direction),l=-Dn.dot(hr),u=Dn.lengthSq(),c=Math.abs(1-o*o);let f,d,m,v;if(c>0)if(f=o*l-a,d=o*a-l,v=s*c,f>=0)if(d>=-v)if(d<=v){const p=1/c;f*=p,d*=p,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(hr).multiplyScalar(d).add(hs),m}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const n=bn.dot(this.direction),i=bn.dot(bn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,i=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,i=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,i,s){ps.subVectors(t,e),pr.subVectors(n,e),ms.crossVectors(ps,pr);let o=this.direction.dot(ms),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,e);const l=a*this.direction.dot(pr.crossVectors(Dn,pr));if(l<0)return null;const u=a*this.direction.dot(ps.cross(Dn));if(u<0||l+u>o)return null;const c=-a*Dn.dot(ms);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,u,c,f,d,m,v,p,h){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=c,g[10]=f,g[14]=d,g[3]=m,g[7]=v,g[11]=p,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/pi.setFromMatrixColumn(e,0).length(),s=1/pi.setFromMatrixColumn(e,1).length(),o=1/pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),u=Math.sin(i),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,m=o*f,v=a*c,p=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=m+v*u,t[5]=d-p*u,t[9]=-a*l,t[2]=p-d*u,t[6]=v+m*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,m=l*f,v=u*c,p=u*f;t[0]=d+p*a,t[4]=v*a-m,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=m*a-v,t[6]=p+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,m=l*f,v=u*c,p=u*f;t[0]=d-p*a,t[4]=-o*f,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*c,t[9]=p-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,m=o*f,v=a*c,p=a*f;t[0]=l*c,t[4]=v*u-m,t[8]=d*u+p,t[1]=l*f,t[5]=p*u+d,t[9]=m*u-v,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,v=a*l,p=a*u;t[0]=l*c,t[4]=p-d*f,t[8]=v*f+m,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*f+v,t[10]=d-p*f}else if(e.order==="XZY"){const d=o*l,m=o*u,v=a*l,p=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+p,t[5]=o*c,t[9]=m*f-v,t[2]=v*f-m,t[6]=a*c,t[10]=p*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uu,e,fu)}lookAt(e,t,n){const i=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Pn.crossVectors(n,Ut),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Pn.crossVectors(n,Ut)),Pn.normalize(),mr.crossVectors(Ut,Pn),i[0]=Pn.x,i[4]=mr.x,i[8]=Ut.x,i[1]=Pn.y,i[5]=mr.y,i[9]=Ut.y,i[2]=Pn.z,i[6]=mr.z,i[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],c=n[1],f=n[5],d=n[9],m=n[13],v=n[2],p=n[6],h=n[10],g=n[14],b=n[3],x=n[7],M=n[11],S=n[15],T=i[0],O=i[4],_=i[8],A=i[12],L=i[1],z=i[5],W=i[9],D=i[13],U=i[2],R=i[6],k=i[10],Q=i[14],X=i[3],$=i[7],J=i[11],I=i[15];return s[0]=o*T+a*L+l*U+u*X,s[4]=o*O+a*z+l*R+u*$,s[8]=o*_+a*W+l*k+u*J,s[12]=o*A+a*D+l*Q+u*I,s[1]=c*T+f*L+d*U+m*X,s[5]=c*O+f*z+d*R+m*$,s[9]=c*_+f*W+d*k+m*J,s[13]=c*A+f*D+d*Q+m*I,s[2]=v*T+p*L+h*U+g*X,s[6]=v*O+p*z+h*R+g*$,s[10]=v*_+p*W+h*k+g*J,s[14]=v*A+p*D+h*Q+g*I,s[3]=b*T+x*L+M*U+S*X,s[7]=b*O+x*z+M*R+S*$,s[11]=b*_+x*W+M*k+S*J,s[15]=b*A+x*D+M*Q+S*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],m=e[14],v=e[3],p=e[7],h=e[11],g=e[15];return v*(+s*l*f-i*u*f-s*a*d+n*u*d+i*a*m-n*l*m)+p*(+t*l*m-t*u*d+s*o*d-i*o*m+i*u*c-s*l*c)+h*(+t*u*f-t*a*m-s*o*f+n*o*m+s*a*c-n*u*c)+g*(-i*a*c-t*l*f+t*a*d+i*o*f-n*o*d+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],m=e[11],v=e[12],p=e[13],h=e[14],g=e[15],b=f*h*u-p*d*u+p*l*m-a*h*m-f*l*g+a*d*g,x=v*d*u-c*h*u-v*l*m+o*h*m+c*l*g-o*d*g,M=c*p*u-v*f*u+v*a*m-o*p*m-c*a*g+o*f*g,S=v*f*l-c*p*l-v*a*d+o*p*d+c*a*h-o*f*h,T=t*b+n*x+i*M+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/T;return e[0]=b*O,e[1]=(p*d*s-f*h*s-p*i*m+n*h*m+f*i*g-n*d*g)*O,e[2]=(a*h*s-p*l*s+p*i*u-n*h*u-a*i*g+n*l*g)*O,e[3]=(f*l*s-a*d*s-f*i*u+n*d*u+a*i*m-n*l*m)*O,e[4]=x*O,e[5]=(c*h*s-v*d*s+v*i*m-t*h*m-c*i*g+t*d*g)*O,e[6]=(v*l*s-o*h*s-v*i*u+t*h*u+o*i*g-t*l*g)*O,e[7]=(o*d*s-c*l*s+c*i*u-t*d*u-o*i*m+t*l*m)*O,e[8]=M*O,e[9]=(v*f*s-c*p*s-v*n*m+t*p*m+c*n*g-t*f*g)*O,e[10]=(o*p*s-v*a*s+v*n*u-t*p*u-o*n*g+t*a*g)*O,e[11]=(c*a*s-o*f*s-c*n*u+t*f*u+o*n*m-t*a*m)*O,e[12]=S*O,e[13]=(c*p*i-v*f*i+v*n*d-t*p*d-c*n*h+t*f*h)*O,e[14]=(v*a*i-o*p*i-v*n*l+t*p*l+o*n*h-t*a*h)*O,e[15]=(o*f*i-c*a*i+c*n*l-t*f*l-o*n*d+t*a*d)*O,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+n,u*a-i*l,u*l+i*a,0,u*a+i*l,c*a+n,c*l-i*o,0,u*l-i*a,c*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,d=s*u,m=s*c,v=s*f,p=o*c,h=o*f,g=a*f,b=l*u,x=l*c,M=l*f,S=n.x,T=n.y,O=n.z;return i[0]=(1-(p+g))*S,i[1]=(m+M)*S,i[2]=(v-x)*S,i[3]=0,i[4]=(m-M)*T,i[5]=(1-(d+g))*T,i[6]=(h+b)*T,i[7]=0,i[8]=(v+x)*O,i[9]=(h-b)*O,i[10]=(1-(d+p))*O,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=pi.set(i[0],i[1],i[2]).length();const o=pi.set(i[4],i[5],i[6]).length(),a=pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],nn.copy(this);const u=1/s,c=1/o,f=1/a;return nn.elements[0]*=u,nn.elements[1]*=u,nn.elements[2]*=u,nn.elements[4]*=c,nn.elements[5]*=c,nn.elements[6]*=c,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,t.setFromRotationMatrix(nn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(n-i),c=(t+e)/(t-e),f=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),u=1/(n-i),c=1/(o-s),f=(t+e)*l,d=(n+i)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const pi=new B,nn=new Qe,uu=new B(0,0,0),fu=new B(1,1,1),Pn=new B,mr=new B,Ut=new B,Ba=new Qe,ka=new si;class sr{constructor(e=0,t=0,n=0,i=sr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],u=i[5],c=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ba.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ba,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ka.setFromEuler(this),this.setFromQuaternion(ka,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}sr.DefaultOrder="XYZ";sr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ks{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let du=0;const Va=new B,mi=new si,Mn=new Qe,gr=new B,Ni=new B,hu=new B,pu=new si,Ga=new B(1,0,0),Ha=new B(0,1,0),Wa=new B(0,0,1),mu={type:"added"},ja={type:"removed"};class $e extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DefaultUp.clone();const e=new B,t=new sr,n=new si,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Vt}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=$e.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=$e.DefaultMatrixWorldAutoUpdate,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(Ga,e)}rotateY(e){return this.rotateOnAxis(Ha,e)}rotateZ(e){return this.rotateOnAxis(Wa,e)}translateOnAxis(e,t){return Va.copy(e).applyQuaternion(this.quaternion),this.position.add(Va.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ga,e)}translateY(e){return this.translateOnAxis(Ha,e)}translateZ(e){return this.translateOnAxis(Wa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gr.copy(e):gr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Ni,gr,this.up):Mn.lookAt(gr,Ni,this.up),this.quaternion.setFromRotationMatrix(Mn),i&&(Mn.extractRotation(i.matrixWorld),mi.setFromRotationMatrix(Mn),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ja)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ja)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,hu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,pu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}$e.DefaultUp=new B(0,1,0);$e.DefaultMatrixAutoUpdate=!0;$e.DefaultMatrixWorldAutoUpdate=!0;const rn=new B,Sn=new B,gs=new B,yn=new B,gi=new B,_i=new B,Xa=new B,_s=new B,vs=new B,xs=new B;class wn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rn.subVectors(e,t),i.cross(rn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){rn.subVectors(i,t),Sn.subVectors(n,t),gs.subVectors(e,t);const o=rn.dot(rn),a=rn.dot(Sn),l=rn.dot(gs),u=Sn.dot(Sn),c=Sn.dot(gs),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(u*l-a*c)*d,v=(o*c-a*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yn),yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,yn),l.set(0,0),l.addScaledVector(s,yn.x),l.addScaledVector(o,yn.y),l.addScaledVector(a,yn.z),l}static isFrontFacing(e,t,n,i){return rn.subVectors(n,t),Sn.subVectors(e,t),rn.cross(Sn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),rn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return wn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;gi.subVectors(i,n),_i.subVectors(s,n),_s.subVectors(e,n);const l=gi.dot(_s),u=_i.dot(_s);if(l<=0&&u<=0)return t.copy(n);vs.subVectors(e,i);const c=gi.dot(vs),f=_i.dot(vs);if(c>=0&&f<=c)return t.copy(i);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(n).addScaledVector(gi,o);xs.subVectors(e,s);const m=gi.dot(xs),v=_i.dot(xs);if(v>=0&&m<=v)return t.copy(s);const p=m*u-l*v;if(p<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(n).addScaledVector(_i,a);const h=c*v-m*f;if(h<=0&&f-c>=0&&m-v>=0)return Xa.subVectors(s,i),a=(f-c)/(f-c+(m-v)),t.copy(i).addScaledVector(Xa,a);const g=1/(h+p+d);return o=p*g,a=d*g,t.copy(n).addScaledVector(gi,o).addScaledVector(_i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let gu=0;class ar extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=An(),this.name="",this.type="Material",this.blending=Ai,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=il,this.blendDst=rl,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gl extends ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new B,_r=new Ee;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bs,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix3(e),this.setXY(t,_r.x,_r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),s=Ye(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class _l extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vl extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _u=0;const Yt=new Qe,bs=new $e,vi=new B,Bt=new kn,Ui=new kn,vt=new B;class cn extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ul(e)?vl:_l)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return bs.lookAt(e),bs.updateMatrix(),this.applyMatrix4(bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ui.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Bt.min,Ui.min),Bt.expandByPoint(vt),vt.addVectors(Bt.max,Ui.max),Bt.expandByPoint(vt)):(Bt.expandByPoint(Ui.min),Bt.expandByPoint(Ui.max))}Bt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)vt.fromBufferAttribute(a,u),l&&(vi.fromBufferAttribute(e,u),vt.add(vi)),i=Math.max(i,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let L=0;L<a;L++)u[L]=new B,c[L]=new B;const f=new B,d=new B,m=new B,v=new Ee,p=new Ee,h=new Ee,g=new B,b=new B;function x(L,z,W){f.fromArray(i,L*3),d.fromArray(i,z*3),m.fromArray(i,W*3),v.fromArray(o,L*2),p.fromArray(o,z*2),h.fromArray(o,W*2),d.sub(f),m.sub(f),p.sub(v),h.sub(v);const D=1/(p.x*h.y-h.x*p.y);isFinite(D)&&(g.copy(d).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(D),b.copy(m).multiplyScalar(p.x).addScaledVector(d,-h.x).multiplyScalar(D),u[L].add(g),u[z].add(g),u[W].add(g),c[L].add(b),c[z].add(b),c[W].add(b))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let L=0,z=M.length;L<z;++L){const W=M[L],D=W.start,U=W.count;for(let R=D,k=D+U;R<k;R+=3)x(n[R+0],n[R+1],n[R+2])}const S=new B,T=new B,O=new B,_=new B;function A(L){O.fromArray(s,L*3),_.copy(O);const z=u[L];S.copy(z),S.sub(O.multiplyScalar(O.dot(z))).normalize(),T.crossVectors(_,z);const D=T.dot(c[L])<0?-1:1;l[L*4]=S.x,l[L*4+1]=S.y,l[L*4+2]=S.z,l[L*4+3]=D}for(let L=0,z=M.length;L<z;++L){const W=M[L],D=W.start,U=W.count;for(let R=D,k=D+U;R<k;R+=3)A(n[R+0]),A(n[R+1]),A(n[R+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new B,s=new B,o=new B,a=new B,l=new B,u=new B,c=new B,f=new B;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),p=e.getX(d+1),h=e.getX(d+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),c.subVectors(o,s),f.subVectors(i,s),c.cross(f),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),u.fromBufferAttribute(n,h),a.add(c),l.add(c),u.add(c),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(h,u.x,u.y,u.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),f.subVectors(i,s),c.cross(f),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let m=0,v=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*c;for(let g=0;g<c;g++)d[v++]=u[m++]}return new $t(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],u=e(l,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(i[l]=c,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const c=i[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,m=f.length;d<m;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const qa=new Qe,xi=new ml,Ms=new rr,Bi=new B,ki=new B,Vi=new B,Ss=new B,vr=new B,xr=new Ee,br=new Ee,Mr=new Ee,ys=new B,Sr=new B;class Kt extends $e{constructor(e=new cn,t=new gl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){vr.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Ss.fromBufferAttribute(f,e),o?vr.addScaledVector(Ss,c):vr.addScaledVector(Ss.sub(t),c))}t.add(vr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(s),e.ray.intersectsSphere(Ms)===!1)||(qa.copy(s).invert(),xi.copy(e.ray).applyMatrix4(qa),n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,u=n.attributes.uv,c=n.attributes.uv2,f=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,v=f.length;m<v;m++){const p=f[m],h=i[p.materialIndex],g=Math.max(p.start,d.start),b=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=g,M=b;x<M;x+=3){const S=a.getX(x),T=a.getX(x+1),O=a.getX(x+2);o=yr(this,h,e,xi,u,c,S,T,O),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=m,h=v;p<h;p+=3){const g=a.getX(p),b=a.getX(p+1),x=a.getX(p+2);o=yr(this,i,e,xi,u,c,g,b,x),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,v=f.length;m<v;m++){const p=f[m],h=i[p.materialIndex],g=Math.max(p.start,d.start),b=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=g,M=b;x<M;x+=3){const S=x,T=x+1,O=x+2;o=yr(this,h,e,xi,u,c,S,T,O),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=m,h=v;p<h;p+=3){const g=p,b=p+1,x=p+2;o=yr(this,i,e,xi,u,c,g,b,x),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function vu(r,e,t,n,i,s,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ii,a),l===null)return null;Sr.copy(a),Sr.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(Sr);return u<t.near||u>t.far?null:{distance:u,point:Sr.clone(),object:r}}function yr(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,Bi),r.getVertexPosition(a,ki),r.getVertexPosition(l,Vi);const u=vu(r,e,t,n,Bi,ki,Vi,ys);if(u){i&&(xr.fromBufferAttribute(i,o),br.fromBufferAttribute(i,a),Mr.fromBufferAttribute(i,l),u.uv=wn.getUV(ys,Bi,ki,Vi,xr,br,Mr,new Ee)),s&&(xr.fromBufferAttribute(s,o),br.fromBufferAttribute(s,a),Mr.fromBufferAttribute(s,l),u.uv2=wn.getUV(ys,Bi,ki,Vi,xr,br,Mr,new Ee));const c={a:o,b:a,c:l,normal:new B,materialIndex:0};wn.getNormal(Bi,ki,Vi,c.normal),u.face=c}return u}class or extends cn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(f,2));function v(p,h,g,b,x,M,S,T,O,_,A){const L=M/O,z=S/_,W=M/2,D=S/2,U=T/2,R=O+1,k=_+1;let Q=0,X=0;const $=new B;for(let J=0;J<k;J++){const I=J*z-D;for(let P=0;P<R;P++){const ie=P*L-W;$[p]=ie*b,$[h]=I*x,$[g]=U,u.push($.x,$.y,$.z),$[p]=0,$[h]=0,$[g]=T>0?1:-1,c.push($.x,$.y,$.z),f.push(P/O),f.push(1-J/_),Q+=1}}for(let J=0;J<_;J++)for(let I=0;I<O;I++){const P=d+I+R*J,ie=d+I+R*(J+1),ee=d+(I+1)+R*(J+1),se=d+(I+1)+R*J;l.push(P,ie,se),l.push(ie,ee,se),X+=6}a.addGroup(m,X,A),m+=X,d+=Q}}static fromJSON(e){return new or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dt(r){const e={};for(let t=0;t<r.length;t++){const n=Pi(r[t]);for(const i in n)e[i]=n[i]}return e}function xu(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function xl(r){return r.getRenderTarget()===null&&r.outputEncoding===Je?dn:Ki}const kr={clone:Pi,merge:Dt};var bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bu,this.fragmentShader=Mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pi(e.uniforms),this.uniformsGroups=xu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Js extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}let kt=class extends Js{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ji*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/u,i*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};const bi=-90,Mi=1;class Su extends $e{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new kt(bi,Mi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new kt(bi,Mi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new kt(bi,Mi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new kt(bi,Mi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new kt(bi,Mi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new kt(bi,Mi,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=pn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class bl extends zt{constructor(e,t,n,i,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Ci,super(e,t,n,i,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yu extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new bl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new or(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:zn});s.uniforms.tEquirect.value=t;const o=new Kt(i,s),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Zt),new Su(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const ws=new B,wu=new B,Eu=new Vt;class Zn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ws.subVectors(n,t).cross(wu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ws),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Eu.getNormalMatrix(e),i=this.coplanarPoint(ws).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new rr,wr=new B;class Vr{constructor(e=new Zn,t=new Zn,n=new Zn,i=new Zn,s=new Zn,o=new Zn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],u=n[5],c=n[6],f=n[7],d=n[8],m=n[9],v=n[10],p=n[11],h=n[12],g=n[13],b=n[14],x=n[15];return t[0].setComponents(a-i,f-l,p-d,x-h).normalize(),t[1].setComponents(a+i,f+l,p+d,x+h).normalize(),t[2].setComponents(a+s,f+u,p+m,x+g).normalize(),t[3].setComponents(a-s,f-u,p-m,x-g).normalize(),t[4].setComponents(a-o,f-c,p-v,x-b).normalize(),t[5].setComponents(a+o,f+c,p+v,x+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(wr.x=i.normal.x>0?e.max.x:e.min.x,wr.y=i.normal.y>0?e.max.y:e.min.y,wr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ml(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Au(r,e){const t=e.isWebGL2,n=new WeakMap;function i(u,c){const f=u.array,d=u.usage,m=r.createBuffer();r.bindBuffer(c,m),r.bufferData(c,f,d),u.onUploadCallback();let v;if(f instanceof Float32Array)v=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(f instanceof Int16Array)v=5122;else if(f instanceof Uint32Array)v=5125;else if(f instanceof Int32Array)v=5124;else if(f instanceof Int8Array)v=5120;else if(f instanceof Uint8Array)v=5121;else if(f instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,m=c.updateRange;r.bindBuffer(f,u),m.count===-1?r.bufferSubData(f,0,d):(t?r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);c&&(r.deleteBuffer(c.buffer),n.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);f===void 0?n.set(u,i(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class Qs extends cn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),u=a+1,c=l+1,f=e/a,d=t/l,m=[],v=[],p=[],h=[];for(let g=0;g<c;g++){const b=g*d-o;for(let x=0;x<u;x++){const M=x*f-s;v.push(M,-b,0),p.push(0,0,1),h.push(x/a),h.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){const x=b+u*g,M=b+u*(g+1),S=b+1+u*(g+1),T=b+1+u*g;m.push(x,M,T),m.push(M,S,T)}this.setIndex(m),this.setAttribute("position",new Rt(v,3)),this.setAttribute("normal",new Rt(p,3)),this.setAttribute("uv",new Rt(h,2))}static fromJSON(e){return new Qs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Cu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Du=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ru=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iu="vec3 transformed = vec3( position );",Ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Fu=`#ifdef USE_IRIDESCENCE
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
#endif`,Nu=`#ifdef USE_BUMPMAP
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
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xu=`#define PI 3.141592653589793
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
}`,qu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yu=`vec3 transformedNormal = objectNormal;
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
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$u="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tf=`#ifdef USE_ENVMAP
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
#endif`,nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ff=`#ifdef USE_GRADIENTMAP
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
}`,df=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gf=`uniform bool receiveShadow;
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
#endif`,_f=`#if defined( USE_ENVMAP )
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
#endif`,vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sf=`PhysicalMaterial material;
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
#endif`,yf=`struct PhysicalMaterial {
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
}`,wf=`
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
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
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
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Tf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Df=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,If=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uf=`#ifdef USE_MORPHNORMALS
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
#endif`,Bf=`#ifdef USE_MORPHTARGETS
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
#endif`,kf=`#ifdef USE_MORPHTARGETS
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
#endif`,Vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Gf=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xf=`#ifdef USE_NORMALMAP
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
#endif`,qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Yf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,od=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ld=`float getShadowMask() {
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
}`,cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ud=`#ifdef USE_SKINNING
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
#endif`,fd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dd=`#ifdef USE_SKINNING
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
#endif`,hd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_d=`#ifdef USE_TRANSMISSION
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
#endif`,vd=`#ifdef USE_TRANSMISSION
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
#endif`,xd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,bd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Md=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Sd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,yd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,wd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ed=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ad=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Td=`uniform sampler2D t2D;
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
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ld=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rd=`#include <common>
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
}`,Id=`#if DEPTH_PACKING == 3200
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
}`,Od=`#define DISTANCE
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
}`,zd=`#define DISTANCE
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
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ud=`uniform float scale;
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
}`,Bd=`uniform vec3 diffuse;
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
}`,kd=`#include <common>
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
}`,Vd=`uniform vec3 diffuse;
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
}`,Gd=`#define LAMBERT
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
}`,Hd=`#define LAMBERT
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
}`,Wd=`#define MATCAP
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
}`,jd=`#define MATCAP
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
}`,Xd=`#define NORMAL
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
}`,qd=`#define NORMAL
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
}`,Yd=`#define PHONG
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
}`,Zd=`#define PHONG
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
}`,Kd=`#define STANDARD
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
}`,Jd=`#define STANDARD
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
}`,Qd=`#define TOON
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
}`,$d=`#define TOON
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
}`,eh=`uniform float size;
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
}`,th=`uniform vec3 diffuse;
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
}`,nh=`#include <common>
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
}`,ih=`uniform vec3 color;
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
}`,rh=`uniform float rotation;
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
}`,sh=`uniform vec3 diffuse;
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
}`,De={alphamap_fragment:Tu,alphamap_pars_fragment:Cu,alphatest_fragment:Lu,alphatest_pars_fragment:Du,aomap_fragment:Pu,aomap_pars_fragment:Ru,begin_vertex:Iu,beginnormal_vertex:Ou,bsdfs:zu,iridescence_fragment:Fu,bumpmap_pars_fragment:Nu,clipping_planes_fragment:Uu,clipping_planes_pars_fragment:Bu,clipping_planes_pars_vertex:ku,clipping_planes_vertex:Vu,color_fragment:Gu,color_pars_fragment:Hu,color_pars_vertex:Wu,color_vertex:ju,common:Xu,cube_uv_reflection_fragment:qu,defaultnormal_vertex:Yu,displacementmap_pars_vertex:Zu,displacementmap_vertex:Ku,emissivemap_fragment:Ju,emissivemap_pars_fragment:Qu,encodings_fragment:$u,encodings_pars_fragment:ef,envmap_fragment:tf,envmap_common_pars_fragment:nf,envmap_pars_fragment:rf,envmap_pars_vertex:sf,envmap_physical_pars_fragment:_f,envmap_vertex:af,fog_vertex:of,fog_pars_vertex:lf,fog_fragment:cf,fog_pars_fragment:uf,gradientmap_pars_fragment:ff,lightmap_fragment:df,lightmap_pars_fragment:hf,lights_lambert_fragment:pf,lights_lambert_pars_fragment:mf,lights_pars_begin:gf,lights_toon_fragment:vf,lights_toon_pars_fragment:xf,lights_phong_fragment:bf,lights_phong_pars_fragment:Mf,lights_physical_fragment:Sf,lights_physical_pars_fragment:yf,lights_fragment_begin:wf,lights_fragment_maps:Ef,lights_fragment_end:Af,logdepthbuf_fragment:Tf,logdepthbuf_pars_fragment:Cf,logdepthbuf_pars_vertex:Lf,logdepthbuf_vertex:Df,map_fragment:Pf,map_pars_fragment:Rf,map_particle_fragment:If,map_particle_pars_fragment:Of,metalnessmap_fragment:zf,metalnessmap_pars_fragment:Ff,morphcolor_vertex:Nf,morphnormal_vertex:Uf,morphtarget_pars_vertex:Bf,morphtarget_vertex:kf,normal_fragment_begin:Vf,normal_fragment_maps:Gf,normal_pars_fragment:Hf,normal_pars_vertex:Wf,normal_vertex:jf,normalmap_pars_fragment:Xf,clearcoat_normal_fragment_begin:qf,clearcoat_normal_fragment_maps:Yf,clearcoat_pars_fragment:Zf,iridescence_pars_fragment:Kf,output_fragment:Jf,packing:Qf,premultiplied_alpha_fragment:$f,project_vertex:ed,dithering_fragment:td,dithering_pars_fragment:nd,roughnessmap_fragment:id,roughnessmap_pars_fragment:rd,shadowmap_pars_fragment:sd,shadowmap_pars_vertex:ad,shadowmap_vertex:od,shadowmask_pars_fragment:ld,skinbase_vertex:cd,skinning_pars_vertex:ud,skinning_vertex:fd,skinnormal_vertex:dd,specularmap_fragment:hd,specularmap_pars_fragment:pd,tonemapping_fragment:md,tonemapping_pars_fragment:gd,transmission_fragment:_d,transmission_pars_fragment:vd,uv_pars_fragment:xd,uv_pars_vertex:bd,uv_vertex:Md,uv2_pars_fragment:Sd,uv2_pars_vertex:yd,uv2_vertex:wd,worldpos_vertex:Ed,background_vert:Ad,background_frag:Td,backgroundCube_vert:Cd,backgroundCube_frag:Ld,cube_vert:Dd,cube_frag:Pd,depth_vert:Rd,depth_frag:Id,distanceRGBA_vert:Od,distanceRGBA_frag:zd,equirect_vert:Fd,equirect_frag:Nd,linedashed_vert:Ud,linedashed_frag:Bd,meshbasic_vert:kd,meshbasic_frag:Vd,meshlambert_vert:Gd,meshlambert_frag:Hd,meshmatcap_vert:Wd,meshmatcap_frag:jd,meshnormal_vert:Xd,meshnormal_frag:qd,meshphong_vert:Yd,meshphong_frag:Zd,meshphysical_vert:Kd,meshphysical_frag:Jd,meshtoon_vert:Qd,meshtoon_frag:$d,points_vert:eh,points_frag:th,shadow_vert:nh,shadow_frag:ih,sprite_vert:rh,sprite_frag:sh},ae={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Vt},uv2Transform:{value:new Vt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vt}}},Ot={basic:{uniforms:Dt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Dt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Be(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Dt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Dt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Dt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Be(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Dt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Dt([ae.points,ae.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Dt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Dt([ae.common,ae.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Dt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Dt([ae.sprite,ae.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Dt([ae.common,ae.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Dt([ae.lights,ae.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Ot.physical={uniforms:Dt([Ot.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Er={r:0,b:0,g:0};function ah(r,e,t,n,i,s,o){const a=new Be(0);let l=s===!0?0:1,u,c,f=null,d=0,m=null;function v(h,g){let b=!1,x=g.isScene===!0?g.background:null;x&&x.isTexture&&(x=(g.backgroundBlurriness>0?t:e).get(x));const M=r.xr,S=M.getSession&&M.getSession();S&&S.environmentBlendMode==="additive"&&(x=null),x===null?p(a,l):x&&x.isColor&&(p(x,1),b=!0),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Br)?(c===void 0&&(c=new Kt(new or(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Pi(Ot.backgroundCube.uniforms),vertexShader:Ot.backgroundCube.vertexShader,fragmentShader:Ot.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,O,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=x.encoding!==Je,(f!==x||d!==x.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,m=r.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Kt(new Qs(2,2),new gn({name:"BackgroundMaterial",uniforms:Pi(Ot.background.uniforms),vertexShader:Ot.background.vertexShader,fragmentShader:Ot.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=x.encoding!==Je,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,m=r.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null))}function p(h,g){h.getRGB(Er,xl(r)),n.buffers.color.setClear(Er.r,Er.g,Er.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(h,g=1){a.set(h),l=g,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,p(a,l)},render:v}}function oh(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=h(null);let u=l,c=!1;function f(U,R,k,Q,X){let $=!1;if(o){const J=p(Q,k,R);u!==J&&(u=J,m(u.object)),$=g(U,Q,k,X),$&&b(U,Q,k,X)}else{const J=R.wireframe===!0;(u.geometry!==Q.id||u.program!==k.id||u.wireframe!==J)&&(u.geometry=Q.id,u.program=k.id,u.wireframe=J,$=!0)}X!==null&&t.update(X,34963),($||c)&&(c=!1,_(U,R,k,Q),X!==null&&r.bindBuffer(34963,t.get(X).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(U){return n.isWebGL2?r.bindVertexArray(U):s.bindVertexArrayOES(U)}function v(U){return n.isWebGL2?r.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function p(U,R,k){const Q=k.wireframe===!0;let X=a[U.id];X===void 0&&(X={},a[U.id]=X);let $=X[R.id];$===void 0&&($={},X[R.id]=$);let J=$[Q];return J===void 0&&(J=h(d()),$[Q]=J),J}function h(U){const R=[],k=[],Q=[];for(let X=0;X<i;X++)R[X]=0,k[X]=0,Q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:Q,object:U,attributes:{},index:null}}function g(U,R,k,Q){const X=u.attributes,$=R.attributes;let J=0;const I=k.getAttributes();for(const P in I)if(I[P].location>=0){const ee=X[P];let se=$[P];if(se===void 0&&(P==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),P==="instanceColor"&&U.instanceColor&&(se=U.instanceColor)),ee===void 0||ee.attribute!==se||se&&ee.data!==se.data)return!0;J++}return u.attributesNum!==J||u.index!==Q}function b(U,R,k,Q){const X={},$=R.attributes;let J=0;const I=k.getAttributes();for(const P in I)if(I[P].location>=0){let ee=$[P];ee===void 0&&(P==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),P==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor));const se={};se.attribute=ee,ee&&ee.data&&(se.data=ee.data),X[P]=se,J++}u.attributes=X,u.attributesNum=J,u.index=Q}function x(){const U=u.newAttributes;for(let R=0,k=U.length;R<k;R++)U[R]=0}function M(U){S(U,0)}function S(U,R){const k=u.newAttributes,Q=u.enabledAttributes,X=u.attributeDivisors;k[U]=1,Q[U]===0&&(r.enableVertexAttribArray(U),Q[U]=1),X[U]!==R&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,R),X[U]=R)}function T(){const U=u.newAttributes,R=u.enabledAttributes;for(let k=0,Q=R.length;k<Q;k++)R[k]!==U[k]&&(r.disableVertexAttribArray(k),R[k]=0)}function O(U,R,k,Q,X,$){n.isWebGL2===!0&&(k===5124||k===5125)?r.vertexAttribIPointer(U,R,k,X,$):r.vertexAttribPointer(U,R,k,Q,X,$)}function _(U,R,k,Q){if(n.isWebGL2===!1&&(U.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=Q.attributes,$=k.getAttributes(),J=R.defaultAttributeValues;for(const I in $){const P=$[I];if(P.location>=0){let ie=X[I];if(ie===void 0&&(I==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),I==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor)),ie!==void 0){const ee=ie.normalized,se=ie.itemSize,N=t.get(ie);if(N===void 0)continue;const ce=N.buffer,_e=N.type,Se=N.bytesPerElement;if(ie.isInterleavedBufferAttribute){const pe=ie.data,Ue=pe.stride,j=ie.offset;if(pe.isInstancedInterleavedBuffer){for(let oe=0;oe<P.locationSize;oe++)S(P.location+oe,pe.meshPerAttribute);U.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let oe=0;oe<P.locationSize;oe++)M(P.location+oe);r.bindBuffer(34962,ce);for(let oe=0;oe<P.locationSize;oe++)O(P.location+oe,se/P.locationSize,_e,ee,Ue*Se,(j+se/P.locationSize*oe)*Se)}else{if(ie.isInstancedBufferAttribute){for(let pe=0;pe<P.locationSize;pe++)S(P.location+pe,ie.meshPerAttribute);U.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let pe=0;pe<P.locationSize;pe++)M(P.location+pe);r.bindBuffer(34962,ce);for(let pe=0;pe<P.locationSize;pe++)O(P.location+pe,se/P.locationSize,_e,ee,se*Se,se/P.locationSize*pe*Se)}}else if(J!==void 0){const ee=J[I];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(P.location,ee);break;case 3:r.vertexAttrib3fv(P.location,ee);break;case 4:r.vertexAttrib4fv(P.location,ee);break;default:r.vertexAttrib1fv(P.location,ee)}}}}T()}function A(){W();for(const U in a){const R=a[U];for(const k in R){const Q=R[k];for(const X in Q)v(Q[X].object),delete Q[X];delete R[k]}delete a[U]}}function L(U){if(a[U.id]===void 0)return;const R=a[U.id];for(const k in R){const Q=R[k];for(const X in Q)v(Q[X].object),delete Q[X];delete R[k]}delete a[U.id]}function z(U){for(const R in a){const k=a[R];if(k[U.id]===void 0)continue;const Q=k[U.id];for(const X in Q)v(Q[X].object),delete Q[X];delete k[U.id]}}function W(){D(),c=!0,u!==l&&(u=l,m(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:W,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:L,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:M,disableUnusedAttributes:T}}function lh(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,c){r.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,u,c,f),t.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function ch(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(O){if(O==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),v=r.getParameter(34076),p=r.getParameter(34921),h=r.getParameter(36347),g=r.getParameter(36348),b=r.getParameter(36349),x=d>0,M=o||e.has("OES_texture_float"),S=x&&M,T=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:T}}function uh(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Zn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const v=f.length!==0||d||n!==0||i;return i=d,t=c(f,m,0),n=f.length,v},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,d,m){const v=f.clippingPlanes,p=f.clipIntersection,h=f.clipShadows,g=r.get(f);if(!i||v===null||v.length===0||s&&!h)s?c(null):u();else{const b=s?0:n,x=b*4;let M=g.clippingState||null;l.value=M,M=c(v,d,x,m);for(let S=0;S!==x;++S)M[S]=t[S];g.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(f,d,m,v){const p=f!==null?f.length:0;let h=null;if(p!==0){if(h=l.value,v!==!0||h===null){const g=m+p*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(h===null||h.length<g)&&(h=new Float32Array(g));for(let x=0,M=m;x!==p;++x,M+=4)o.copy(f[x]).applyMatrix4(b,a),o.normal.toArray(h,M),h[M+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function fh(r){let e=new WeakMap;function t(o,a){return a===zs?o.mapping=Ci:a===Fs&&(o.mapping=Li),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===zs||a===Fs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new yu(l.height/2);return u.fromEquirectangularTexture(r,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class $s extends Js{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ei=4,Ya=[.125,.215,.35,.446,.526,.582],Jn=20,Es=new $s,Za=new Be;let As=null;const Kn=(1+Math.sqrt(5))/2,yi=1/Kn,Ka=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Kn,yi),new B(0,Kn,-yi),new B(yi,0,Kn),new B(-yi,0,Kn),new B(Kn,yi,0),new B(-Kn,yi,0)];class Ja{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){As=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$a(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(As),e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),As=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Zi,format:ln,encoding:Fn,depthBuffer:!1},i=Qa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dh(s)),this._blurMaterial=hh(s,e,t)}return i}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,Es)}_sceneToCubeUV(e,t,n,i){const a=new kt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Za),c.toneMapping=pn,c.autoClear=!1;const m=new gl({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),v=new Kt(new or,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(Za),p=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):b===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const x=this._cubeSize;Ar(i,b*x,g>2?x:0,x,x),c.setRenderTarget(i),p&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ci||e.mapping===Li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=eo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$a());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ar(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Es)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ka[(i-1)%Ka.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Kt(this._lodPlanes[i],u),d=u.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Jn-1),p=s/v,h=isFinite(s)?1+Math.floor(c*p):Jn;h>Jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Jn}`);const g=[];let b=0;for(let O=0;O<Jn;++O){const _=O/p,A=Math.exp(-_*_/2);g.push(A),O===0?b+=A:O<h&&(b+=2*A)}for(let O=0;O<g.length;O++)g[O]=g[O]/b;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-n;const M=this._sizeLods[i],S=3*M*(i>x-Ei?i-x+Ei:0),T=4*(this._cubeSize-M);Ar(t,S,T,3*M,2*M),l.setRenderTarget(t),l.render(f,Es)}}function dh(r){const e=[],t=[],n=[];let i=r;const s=r-Ei+1+Ya.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Ei?l=Ya[o-r+Ei-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,v=6,p=3,h=2,g=1,b=new Float32Array(p*v*m),x=new Float32Array(h*v*m),M=new Float32Array(g*v*m);for(let T=0;T<m;T++){const O=T%3*2/3-1,_=T>2?0:-1,A=[O,_,0,O+2/3,_,0,O+2/3,_+1,0,O,_,0,O+2/3,_+1,0,O,_+1,0];b.set(A,p*v*T),x.set(d,h*v*T);const L=[T,T,T,T,T,T];M.set(L,g*v*T)}const S=new cn;S.setAttribute("position",new $t(b,p)),S.setAttribute("uv",new $t(x,h)),S.setAttribute("faceIndex",new $t(M,g)),e.push(S),i>Ei&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qa(r,e,t){const n=new Nn(r,e,t);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function hh(r,e,t){const n=new Float32Array(Jn),i=new B(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ea(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function $a(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ea(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function eo(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ea(){return`

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
	`}function ph(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===zs||l===Fs,c=l===Ci||l===Li;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ja(r)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&i(f)){t===null&&(t=new Ja(r));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function mh(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gh(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],34962);const m=f.morphAttributes;for(const v in m){const p=m[v];for(let h=0,g=p.length;h<g;h++)e.update(p[h],34962)}}function u(f){const d=[],m=f.index,v=f.attributes.position;let p=0;if(m!==null){const b=m.array;p=m.version;for(let x=0,M=b.length;x<M;x+=3){const S=b[x+0],T=b[x+1],O=b[x+2];d.push(S,T,T,O,O,S)}}else{const b=v.array;p=v.version;for(let x=0,M=b.length/3-1;x<M;x+=3){const S=x+0,T=x+1,O=x+2;d.push(S,T,T,O,O,S)}}const h=new(ul(d)?vl:_l)(d,1);h.version=p;const g=s.get(f);g&&e.remove(g),s.set(f,h)}function c(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function _h(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,m){r.drawElements(s,m,a,d*l),t.update(m,s,1)}function f(d,m,v){if(v===0)return;let p,h;if(i)p=r,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,m,a,d*l,v),t.update(m,s,v)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function vh(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function xh(r,e){return r[0]-e[0]}function bh(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Mh(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new it,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f,d){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=v!==void 0?v.length:0;let h=s.get(c);if(h===void 0||h.count!==p){let R=function(){D.dispose(),s.delete(c),c.removeEventListener("dispose",R)};h!==void 0&&h.texture.dispose();const x=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],O=c.morphAttributes.normal||[],_=c.morphAttributes.color||[];let A=0;x===!0&&(A=1),M===!0&&(A=2),S===!0&&(A=3);let L=c.attributes.position.count*A,z=1;L>e.maxTextureSize&&(z=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const W=new Float32Array(L*z*4*p),D=new pl(W,L,z,p);D.type=$n,D.needsUpdate=!0;const U=A*4;for(let k=0;k<p;k++){const Q=T[k],X=O[k],$=_[k],J=L*z*4*k;for(let I=0;I<Q.count;I++){const P=I*U;x===!0&&(o.fromBufferAttribute(Q,I),W[J+P+0]=o.x,W[J+P+1]=o.y,W[J+P+2]=o.z,W[J+P+3]=0),M===!0&&(o.fromBufferAttribute(X,I),W[J+P+4]=o.x,W[J+P+5]=o.y,W[J+P+6]=o.z,W[J+P+7]=0),S===!0&&(o.fromBufferAttribute($,I),W[J+P+8]=o.x,W[J+P+9]=o.y,W[J+P+10]=o.z,W[J+P+11]=$.itemSize===4?o.w:1)}}h={count:p,texture:D,size:new Ee(L,z)},s.set(c,h),c.addEventListener("dispose",R)}let g=0;for(let x=0;x<m.length;x++)g+=m[x];const b=c.morphTargetsRelative?1:1-g;d.getUniforms().setValue(r,"morphTargetBaseInfluence",b),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}else{const v=m===void 0?0:m.length;let p=n[c.id];if(p===void 0||p.length!==v){p=[];for(let M=0;M<v;M++)p[M]=[M,0];n[c.id]=p}for(let M=0;M<v;M++){const S=p[M];S[0]=M,S[1]=m[M]}p.sort(bh);for(let M=0;M<8;M++)M<v&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(xh);const h=c.morphAttributes.position,g=c.morphAttributes.normal;let b=0;for(let M=0;M<8;M++){const S=a[M],T=S[0],O=S[1];T!==Number.MAX_SAFE_INTEGER&&O?(h&&c.getAttribute("morphTarget"+M)!==h[T]&&c.setAttribute("morphTarget"+M,h[T]),g&&c.getAttribute("morphNormal"+M)!==g[T]&&c.setAttribute("morphNormal"+M,g[T]),i[M]=O,b+=O):(h&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),g&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),i[M]=0)}const x=c.morphTargetsRelative?1:1-b;d.getUniforms().setValue(r,"morphTargetBaseInfluence",x),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Sh(r,e,t,n){let i=new WeakMap;function s(l){const u=n.render.frame,c=l.geometry,f=e.get(l,c);return i.get(f)!==u&&(e.update(f),i.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){i=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Sl=new zt,yl=new pl,wl=new lu,El=new bl,to=[],no=[],io=new Float32Array(16),ro=new Float32Array(9),so=new Float32Array(4);function Ri(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=to[i];if(s===void 0&&(s=new Float32Array(i),to[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function pt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function mt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Gr(r,e){let t=no[e];t===void 0&&(t=new Int32Array(e),no[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function yh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function wh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2fv(this.addr,e),mt(t,e)}}function Eh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;r.uniform3fv(this.addr,e),mt(t,e)}}function Ah(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4fv(this.addr,e),mt(t,e)}}function Th(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;so.set(n),r.uniformMatrix2fv(this.addr,!1,so),mt(t,n)}}function Ch(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;ro.set(n),r.uniformMatrix3fv(this.addr,!1,ro),mt(t,n)}}function Lh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;io.set(n),r.uniformMatrix4fv(this.addr,!1,io),mt(t,n)}}function Dh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ph(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2iv(this.addr,e),mt(t,e)}}function Rh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;r.uniform3iv(this.addr,e),mt(t,e)}}function Ih(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4iv(this.addr,e),mt(t,e)}}function Oh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function zh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2uiv(this.addr,e),mt(t,e)}}function Fh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;r.uniform3uiv(this.addr,e),mt(t,e)}}function Nh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4uiv(this.addr,e),mt(t,e)}}function Uh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Sl,i)}function Bh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wl,i)}function kh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||El,i)}function Vh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yl,i)}function Gh(r){switch(r){case 5126:return yh;case 35664:return wh;case 35665:return Eh;case 35666:return Ah;case 35674:return Th;case 35675:return Ch;case 35676:return Lh;case 5124:case 35670:return Dh;case 35667:case 35671:return Ph;case 35668:case 35672:return Rh;case 35669:case 35673:return Ih;case 5125:return Oh;case 36294:return zh;case 36295:return Fh;case 36296:return Nh;case 35678:case 36198:case 36298:case 36306:case 35682:return Uh;case 35679:case 36299:case 36307:return Bh;case 35680:case 36300:case 36308:case 36293:return kh;case 36289:case 36303:case 36311:case 36292:return Vh}}function Hh(r,e){r.uniform1fv(this.addr,e)}function Wh(r,e){const t=Ri(e,this.size,2);r.uniform2fv(this.addr,t)}function jh(r,e){const t=Ri(e,this.size,3);r.uniform3fv(this.addr,t)}function Xh(r,e){const t=Ri(e,this.size,4);r.uniform4fv(this.addr,t)}function qh(r,e){const t=Ri(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Yh(r,e){const t=Ri(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Zh(r,e){const t=Ri(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Kh(r,e){r.uniform1iv(this.addr,e)}function Jh(r,e){r.uniform2iv(this.addr,e)}function Qh(r,e){r.uniform3iv(this.addr,e)}function $h(r,e){r.uniform4iv(this.addr,e)}function ep(r,e){r.uniform1uiv(this.addr,e)}function tp(r,e){r.uniform2uiv(this.addr,e)}function np(r,e){r.uniform3uiv(this.addr,e)}function ip(r,e){r.uniform4uiv(this.addr,e)}function rp(r,e,t){const n=this.cache,i=e.length,s=Gr(t,i);pt(n,s)||(r.uniform1iv(this.addr,s),mt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Sl,s[o])}function sp(r,e,t){const n=this.cache,i=e.length,s=Gr(t,i);pt(n,s)||(r.uniform1iv(this.addr,s),mt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||wl,s[o])}function ap(r,e,t){const n=this.cache,i=e.length,s=Gr(t,i);pt(n,s)||(r.uniform1iv(this.addr,s),mt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||El,s[o])}function op(r,e,t){const n=this.cache,i=e.length,s=Gr(t,i);pt(n,s)||(r.uniform1iv(this.addr,s),mt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||yl,s[o])}function lp(r){switch(r){case 5126:return Hh;case 35664:return Wh;case 35665:return jh;case 35666:return Xh;case 35674:return qh;case 35675:return Yh;case 35676:return Zh;case 5124:case 35670:return Kh;case 35667:case 35671:return Jh;case 35668:case 35672:return Qh;case 35669:case 35673:return $h;case 5125:return ep;case 36294:return tp;case 36295:return np;case 36296:return ip;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return sp;case 35680:case 36300:case 36308:case 36293:return ap;case 36289:case 36303:case 36311:case 36292:return op}}class cp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Gh(t.type)}}class up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=lp(t.type)}}class fp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ts=/(\w+)(\])?(\[|\.)?/g;function ao(r,e){r.seq.push(e),r.map[e.id]=e}function dp(r,e,t){const n=r.name,i=n.length;for(Ts.lastIndex=0;;){const s=Ts.exec(n),o=Ts.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===i){ao(t,u===void 0?new cp(a,r,e):new up(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new fp(a),ao(t,f)),t=f}}}class Or{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);dp(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function oo(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let hp=0;function pp(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function mp(r){switch(r){case Fn:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function lo(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+pp(r.getShaderSource(e),o)}else return i}function gp(r,e){const t=mp(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function _p(r,e){let t;switch(e){case Sc:t="Linear";break;case yc:t="Reinhard";break;case wc:t="OptimizedCineon";break;case al:t="ACESFilmic";break;case Ec:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vp(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wi).join(`
`)}function xp(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bp(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Wi(r){return r!==""}function co(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gs(r){return r.replace(Mp,Sp)}function Sp(r,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Gs(t)}const yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fo(r){return r.replace(yp,wp)}function wp(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ho(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ep(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===tl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ap(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ci:case Li:e="ENVMAP_TYPE_CUBE";break;case Br:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Li:e="ENVMAP_MODE_REFRACTION";break}return e}function Cp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case sl:e="ENVMAP_BLENDING_MULTIPLY";break;case bc:e="ENVMAP_BLENDING_MIX";break;case Mc:e="ENVMAP_BLENDING_ADD";break}return e}function Lp(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Dp(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Ep(t),u=Ap(t),c=Tp(t),f=Cp(t),d=Lp(t),m=t.isWebGL2?"":vp(t),v=xp(s),p=i.createProgram();let h,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[v].filter(Wi).join(`
`),h.length>0&&(h+=`
`),g=[m,v].filter(Wi).join(`
`),g.length>0&&(g+=`
`)):(h=[ho(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),g=[m,ho(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?De.tonemapping_pars_fragment:"",t.toneMapping!==pn?_p("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,gp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wi).join(`
`)),o=Gs(o),o=co(o,t),o=uo(o,t),a=Gs(a),a=co(a,t),a=uo(a,t),o=fo(o),a=fo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,g=["#define varying in",t.glslVersion===Fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=b+h+o,M=b+g+a,S=oo(i,35633,x),T=oo(i,35632,M);if(i.attachShader(p,S),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(S).trim(),z=i.getShaderInfoLog(T).trim();let W=!0,D=!0;if(i.getProgramParameter(p,35714)===!1){W=!1;const U=lo(i,S,"vertex"),R=lo(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+U+`
`+R)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(L===""||z==="")&&(D=!1);D&&(this.diagnostics={runnable:W,programLog:A,vertexShader:{log:L,prefix:h},fragmentShader:{log:z,prefix:g}})}i.deleteShader(S),i.deleteShader(T);let O;this.getUniforms=function(){return O===void 0&&(O=new Or(i,p)),O};let _;return this.getAttributes=function(){return _===void 0&&(_=bp(i,p)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=hp++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=T,this}let Pp=0;class Rp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ip(e),t.set(e,n)),n}}class Ip{constructor(e){this.id=Pp++,this.code=e,this.usedTimes=0}}function Op(r,e,t,n,i,s,o){const a=new Ks,l=new Rp,u=[],c=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_,A,L,z,W){const D=z.fog,U=W.geometry,R=_.isMeshStandardMaterial?z.environment:null,k=(_.isMeshStandardMaterial?t:e).get(_.envMap||R),Q=k&&k.mapping===Br?k.image.height:null,X=v[_.type];_.precision!==null&&(m=i.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const $=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,J=$!==void 0?$.length:0;let I=0;U.morphAttributes.position!==void 0&&(I=1),U.morphAttributes.normal!==void 0&&(I=2),U.morphAttributes.color!==void 0&&(I=3);let P,ie,ee,se;if(X){const Ue=Ot[X];P=Ue.vertexShader,ie=Ue.fragmentShader}else P=_.vertexShader,ie=_.fragmentShader,l.update(_),ee=l.getVertexShaderID(_),se=l.getFragmentShaderID(_);const N=r.getRenderTarget(),ce=_.alphaTest>0,_e=_.clearcoat>0,Se=_.iridescence>0;return{isWebGL2:c,shaderID:X,shaderName:_.type,vertexShader:P,fragmentShader:ie,defines:_.defines,customVertexShaderID:ee,customFragmentShaderID:se,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:d,outputEncoding:N===null?r.outputEncoding:N.isXRRenderTarget===!0?N.texture.encoding:Fn,map:!!_.map,matcap:!!_.matcap,envMap:!!k,envMapMode:k&&k.mapping,envMapCubeUVHeight:Q,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Wc,tangentSpaceNormalMap:_.normalMapType===cl,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Je,clearcoat:_e,clearcoatMap:_e&&!!_.clearcoatMap,clearcoatRoughnessMap:_e&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!_.clearcoatNormalMap,iridescence:Se,iridescenceMap:Se&&!!_.iridescenceMap,iridescenceThicknessMap:Se&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===Ai,alphaMap:!!_.alphaMap,alphaTest:ce,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!U.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!D,useFog:_.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:I,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:_.toneMapped?r.toneMapping:pn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ys,flipSided:_.side===Qt,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function h(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)A.push(L),A.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(g(A,_),b(A,_),A.push(r.outputEncoding)),A.push(_.customProgramCacheKey),A.join()}function g(_,A){_.push(A.precision),_.push(A.outputEncoding),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.combine),_.push(A.vertexUvs),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function b(_,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),_.push(a.mask)}function x(_){const A=v[_.type];let L;if(A){const z=Ot[A];L=kr.clone(z.uniforms)}else L=_.uniforms;return L}function M(_,A){let L;for(let z=0,W=u.length;z<W;z++){const D=u[z];if(D.cacheKey===A){L=D,++L.usedTimes;break}}return L===void 0&&(L=new Dp(r,A,_,s),u.push(L)),L}function S(_){if(--_.usedTimes===0){const A=u.indexOf(_);u[A]=u[u.length-1],u.pop(),_.destroy()}}function T(_){l.remove(_)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:x,acquireProgram:M,releaseProgram:S,releaseShaderCache:T,programs:u,dispose:O}}function zp(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Fp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function po(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function mo(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,m,v,p,h){let g=r[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:p,group:h},r[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=m,g.groupOrder=v,g.renderOrder=f.renderOrder,g.z=p,g.group=h),e++,g}function a(f,d,m,v,p,h){const g=o(f,d,m,v,p,h);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function l(f,d,m,v,p,h){const g=o(f,d,m,v,p,h);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function u(f,d){t.length>1&&t.sort(f||Fp),n.length>1&&n.sort(d||po),i.length>1&&i.sort(d||po)}function c(){for(let f=e,d=r.length;f<d;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:c,sort:u}}function Np(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new mo,r.set(n,[o])):i>=s.length?(o=new mo,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Up(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Be};break;case"SpotLight":t={position:new B,direction:new B,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function Bp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let kp=0;function Vp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Gp(r,e){const t=new Up,n=Bp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,o=new Qe,a=new Qe;function l(c,f){let d=0,m=0,v=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,h=0,g=0,b=0,x=0,M=0,S=0,T=0,O=0,_=0;c.sort(Vp);const A=f!==!0?Math.PI:1;for(let z=0,W=c.length;z<W;z++){const D=c[z],U=D.color,R=D.intensity,k=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=U.r*R*A,m+=U.g*R*A,v+=U.b*R*A;else if(D.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],R);else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const $=D.shadow,J=n.get(D);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=D.shadow.matrix,M++}i.directional[p]=X,p++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(U).multiplyScalar(R*A),X.distance=k,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[g]=X;const $=D.shadow;if(D.map&&(i.spotLightMap[O]=D.map,O++,$.updateMatrices(D),D.castShadow&&_++),i.spotLightMatrix[g]=$.matrix,D.castShadow){const J=n.get(D);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,i.spotShadow[g]=J,i.spotShadowMap[g]=Q,T++}g++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(U).multiplyScalar(R),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[b]=X,b++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*A),X.distance=D.distance,X.decay=D.decay,D.castShadow){const $=D.shadow,J=n.get(D);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,J.shadowCameraNear=$.camera.near,J.shadowCameraFar=$.camera.far,i.pointShadow[h]=J,i.pointShadowMap[h]=Q,i.pointShadowMatrix[h]=D.shadow.matrix,S++}i.point[h]=X,h++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(R*A),X.groundColor.copy(D.groundColor).multiplyScalar(R*A),i.hemi[x]=X,x++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=v;const L=i.hash;(L.directionalLength!==p||L.pointLength!==h||L.spotLength!==g||L.rectAreaLength!==b||L.hemiLength!==x||L.numDirectionalShadows!==M||L.numPointShadows!==S||L.numSpotShadows!==T||L.numSpotMaps!==O)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=b,i.point.length=h,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=T+O-_,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=_,L.directionalLength=p,L.pointLength=h,L.spotLength=g,L.rectAreaLength=b,L.hemiLength=x,L.numDirectionalShadows=M,L.numPointShadows=S,L.numSpotShadows=T,L.numSpotMaps=O,i.version=kp++)}function u(c,f){let d=0,m=0,v=0,p=0,h=0;const g=f.matrixWorldInverse;for(let b=0,x=c.length;b<x;b++){const M=c[b];if(M.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(M.isSpotLight){const S=i.spot[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),v++}else if(M.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),a.identity(),o.copy(M.matrixWorld),o.premultiply(g),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),m++}else if(M.isHemisphereLight){const S=i.hemi[h];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(g),h++}}}return{setup:l,setupView:u,state:i}}function go(r,e){const t=new Gp(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function u(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Hp(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new go(r,e),t.set(s,[l])):o>=a.length?(l=new go(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Wp extends ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jp extends ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qp=`uniform sampler2D shadow_pass;
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
}`;function Yp(r,e,t){let n=new Vr;const i=new Ee,s=new Ee,o=new it,a=new Wp({depthPacking:Hc}),l=new jp,u={},c=t.maxTextureSize,f={0:Qt,1:ii,2:Ys},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Xp,fragmentShader:qp}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new cn;v.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Kt(v,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tl,this.render=function(M,S,T){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||M.length===0)return;const O=r.getRenderTarget(),_=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),L=r.state;L.setBlending(zn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let z=0,W=M.length;z<W;z++){const D=M[z],U=D.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const R=U.getFrameExtents();if(i.multiply(R),s.copy(U.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/R.x),i.x=s.x*R.x,U.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/R.y),i.y=s.y*R.y,U.mapSize.y=s.y)),U.map===null){const Q=this.type!==Hi?{minFilter:Pt,magFilter:Pt}:{};U.map=new Nn(i.x,i.y,Q),U.map.texture.name=D.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();const k=U.getViewportCount();for(let Q=0;Q<k;Q++){const X=U.getViewport(Q);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),L.viewport(o),U.updateMatrices(D,Q),n=U.getFrustum(),x(S,T,U.camera,D,this.type)}U.isPointLightShadow!==!0&&this.type===Hi&&g(U,T),U.needsUpdate=!1}h.needsUpdate=!1,r.setRenderTarget(O,_,A)};function g(M,S){const T=e.update(p);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Nn(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(S,null,T,d,p,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(S,null,T,m,p,null)}function b(M,S,T,O,_,A){let L=null;const z=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(z!==void 0)L=z;else if(L=T.isPointLight===!0?l:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const W=L.uuid,D=S.uuid;let U=u[W];U===void 0&&(U={},u[W]=U);let R=U[D];R===void 0&&(R=L.clone(),U[D]=R),L=R}return L.visible=S.visible,L.wireframe=S.wireframe,A===Hi?L.side=S.shadowSide!==null?S.shadowSide:S.side:L.side=S.shadowSide!==null?S.shadowSide:f[S.side],L.alphaMap=S.alphaMap,L.alphaTest=S.alphaTest,L.map=S.map,L.clipShadows=S.clipShadows,L.clippingPlanes=S.clippingPlanes,L.clipIntersection=S.clipIntersection,L.displacementMap=S.displacementMap,L.displacementScale=S.displacementScale,L.displacementBias=S.displacementBias,L.wireframeLinewidth=S.wireframeLinewidth,L.linewidth=S.linewidth,T.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(T.matrixWorld),L.nearDistance=O,L.farDistance=_),L}function x(M,S,T,O,_){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&_===Hi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const z=e.update(M),W=M.material;if(Array.isArray(W)){const D=z.groups;for(let U=0,R=D.length;U<R;U++){const k=D[U],Q=W[k.materialIndex];if(Q&&Q.visible){const X=b(M,Q,O,T.near,T.far,_);r.renderBufferDirect(T,null,z,X,M,k)}}}else if(W.visible){const D=b(M,W,O,T.near,T.far,_);r.renderBufferDirect(T,null,z,D,M,null)}}const L=M.children;for(let z=0,W=L.length;z<W;z++)x(L[z],S,T,O,_)}}function Zp(r,e,t){const n=t.isWebGL2;function i(){let F=!1;const Y=new it;let te=null;const he=new it(0,0,0,0);return{setMask:function(be){te!==be&&!F&&(r.colorMask(be,be,be,be),te=be)},setLocked:function(be){F=be},setClear:function(be,Ve,gt,yt,Vn){Vn===!0&&(be*=yt,Ve*=yt,gt*=yt),Y.set(be,Ve,gt,yt),he.equals(Y)===!1&&(r.clearColor(be,Ve,gt,yt),he.copy(Y))},reset:function(){F=!1,te=null,he.set(-1,0,0,0)}}}function s(){let F=!1,Y=null,te=null,he=null;return{setTest:function(be){be?ce(2929):_e(2929)},setMask:function(be){Y!==be&&!F&&(r.depthMask(be),Y=be)},setFunc:function(be){if(te!==be){switch(be){case hc:r.depthFunc(512);break;case pc:r.depthFunc(519);break;case mc:r.depthFunc(513);break;case Os:r.depthFunc(515);break;case gc:r.depthFunc(514);break;case _c:r.depthFunc(518);break;case vc:r.depthFunc(516);break;case xc:r.depthFunc(517);break;default:r.depthFunc(515)}te=be}},setLocked:function(be){F=be},setClear:function(be){he!==be&&(r.clearDepth(be),he=be)},reset:function(){F=!1,Y=null,te=null,he=null}}}function o(){let F=!1,Y=null,te=null,he=null,be=null,Ve=null,gt=null,yt=null,Vn=null;return{setTest:function(tt){F||(tt?ce(2960):_e(2960))},setMask:function(tt){Y!==tt&&!F&&(r.stencilMask(tt),Y=tt)},setFunc:function(tt,_n,qt){(te!==tt||he!==_n||be!==qt)&&(r.stencilFunc(tt,_n,qt),te=tt,he=_n,be=qt)},setOp:function(tt,_n,qt){(Ve!==tt||gt!==_n||yt!==qt)&&(r.stencilOp(tt,_n,qt),Ve=tt,gt=_n,yt=qt)},setLocked:function(tt){F=tt},setClear:function(tt){Vn!==tt&&(r.clearStencil(tt),Vn=tt)},reset:function(){F=!1,Y=null,te=null,he=null,be=null,Ve=null,gt=null,yt=null,Vn=null}}}const a=new i,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},m={},v=new WeakMap,p=[],h=null,g=!1,b=null,x=null,M=null,S=null,T=null,O=null,_=null,A=!1,L=null,z=null,W=null,D=null,U=null;const R=r.getParameter(35661);let k=!1,Q=0;const X=r.getParameter(7938);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=Q>=2);let $=null,J={};const I=r.getParameter(3088),P=r.getParameter(2978),ie=new it().fromArray(I),ee=new it().fromArray(P);function se(F,Y,te){const he=new Uint8Array(4),be=r.createTexture();r.bindTexture(F,be),r.texParameteri(F,10241,9728),r.texParameteri(F,10240,9728);for(let Ve=0;Ve<te;Ve++)r.texImage2D(Y+Ve,0,6408,1,1,0,6408,5121,he);return be}const N={};N[3553]=se(3553,3553,1),N[34067]=se(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ce(2929),l.setFunc(Os),dt(!1),At(la),ce(2884),qe(zn);function ce(F){d[F]!==!0&&(r.enable(F),d[F]=!0)}function _e(F){d[F]!==!1&&(r.disable(F),d[F]=!1)}function Se(F,Y){return m[F]!==Y?(r.bindFramebuffer(F,Y),m[F]=Y,n&&(F===36009&&(m[36160]=Y),F===36160&&(m[36009]=Y)),!0):!1}function pe(F,Y){let te=p,he=!1;if(F)if(te=v.get(Y),te===void 0&&(te=[],v.set(Y,te)),F.isWebGLMultipleRenderTargets){const be=F.texture;if(te.length!==be.length||te[0]!==36064){for(let Ve=0,gt=be.length;Ve<gt;Ve++)te[Ve]=36064+Ve;te.length=be.length,he=!0}}else te[0]!==36064&&(te[0]=36064,he=!0);else te[0]!==1029&&(te[0]=1029,he=!0);he&&(t.isWebGL2?r.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Ue(F){return h!==F?(r.useProgram(F),h=F,!0):!1}const j={[wi]:32774,[nc]:32778,[ic]:32779};if(n)j[da]=32775,j[ha]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(j[da]=F.MIN_EXT,j[ha]=F.MAX_EXT)}const oe={[rc]:0,[sc]:1,[ac]:768,[il]:770,[dc]:776,[uc]:774,[lc]:772,[oc]:769,[rl]:771,[fc]:775,[cc]:773};function qe(F,Y,te,he,be,Ve,gt,yt){if(F===zn){g===!0&&(_e(3042),g=!1);return}if(g===!1&&(ce(3042),g=!0),F!==tc){if(F!==b||yt!==A){if((x!==wi||T!==wi)&&(r.blendEquation(32774),x=wi,T=wi),yt)switch(F){case Ai:r.blendFuncSeparate(1,771,1,771);break;case ca:r.blendFunc(1,1);break;case ua:r.blendFuncSeparate(0,769,0,1);break;case fa:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ai:r.blendFuncSeparate(770,771,1,771);break;case ca:r.blendFunc(770,1);break;case ua:r.blendFuncSeparate(0,769,0,1);break;case fa:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,S=null,O=null,_=null,b=F,A=yt}return}be=be||Y,Ve=Ve||te,gt=gt||he,(Y!==x||be!==T)&&(r.blendEquationSeparate(j[Y],j[be]),x=Y,T=be),(te!==M||he!==S||Ve!==O||gt!==_)&&(r.blendFuncSeparate(oe[te],oe[he],oe[Ve],oe[gt]),M=te,S=he,O=Ve,_=gt),b=F,A=!1}function rt(F,Y){F.side===Ys?_e(2884):ce(2884);let te=F.side===Qt;Y&&(te=!te),dt(te),F.blending===Ai&&F.transparent===!1?qe(zn):qe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const he=F.stencilWrite;u.setTest(he),he&&(u.setMask(F.stencilWriteMask),u.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),u.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),We(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ce(32926):_e(32926)}function dt(F){L!==F&&(F?r.frontFace(2304):r.frontFace(2305),L=F)}function At(F){F!==$l?(ce(2884),F!==z&&(F===la?r.cullFace(1029):F===ec?r.cullFace(1028):r.cullFace(1032))):_e(2884),z=F}function st(F){F!==W&&(k&&r.lineWidth(F),W=F)}function We(F,Y,te){F?(ce(32823),(D!==Y||U!==te)&&(r.polygonOffset(Y,te),D=Y,U=te)):_e(32823)}function Xt(F){F?ce(3089):_e(3089)}function It(F){F===void 0&&(F=33984+R-1),$!==F&&(r.activeTexture(F),$=F)}function E(F,Y,te){te===void 0&&($===null?te=33984+R-1:te=$);let he=J[te];he===void 0&&(he={type:void 0,texture:void 0},J[te]=he),(he.type!==F||he.texture!==Y)&&($!==te&&(r.activeTexture(te),$=te),r.bindTexture(F,Y||N[F]),he.type=F,he.texture=Y)}function y(){const F=J[$];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function C(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(F){ie.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),ie.copy(F))}function ve(F){ee.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),ee.copy(F))}function Ie(F,Y){let te=f.get(Y);te===void 0&&(te=new WeakMap,f.set(Y,te));let he=te.get(F);he===void 0&&(he=r.getUniformBlockIndex(Y,F.name),te.set(F,he))}function Oe(F,Y){const he=f.get(Y).get(F);c.get(Y)!==he&&(r.uniformBlockBinding(Y,he,F.__bindingPointIndex),c.set(Y,he))}function je(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},$=null,J={},m={},v=new WeakMap,p=[],h=null,g=!1,b=null,x=null,M=null,S=null,T=null,O=null,_=null,A=!1,L=null,z=null,W=null,D=null,U=null,ie.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ce,disable:_e,bindFramebuffer:Se,drawBuffers:pe,useProgram:Ue,setBlending:qe,setMaterial:rt,setFlipSided:dt,setCullFace:At,setLineWidth:st,setPolygonOffset:We,setScissorTest:Xt,activeTexture:It,bindTexture:E,unbindTexture:y,compressedTexImage2D:q,compressedTexImage3D:ne,texImage2D:me,texImage3D:ue,updateUBOMapping:Ie,uniformBlockBinding:Oe,texStorage2D:V,texStorage3D:fe,texSubImage2D:re,texSubImage3D:le,compressedTexSubImage2D:ye,compressedTexSubImage3D:C,scissor:xe,viewport:ve,reset:je}}function Kp(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,u=i.maxCubemapSize,c=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let p;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,y){return g?new OffscreenCanvas(E,y):Ji("canvas")}function x(E,y,q,ne){let re=1;if((E.width>ne||E.height>ne)&&(re=ne/Math.max(E.width,E.height)),re<1||y===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const le=y?Nr:Math.floor,ye=le(re*E.width),C=le(re*E.height);p===void 0&&(p=b(ye,C));const V=q?b(ye,C):p;return V.width=ye,V.height=C,V.getContext("2d").drawImage(E,0,0,ye,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ye+"x"+C+")."),V}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function M(E){return Vs(E.width)&&Vs(E.height)}function S(E){return a?!1:E.wrapS!==on||E.wrapT!==on||E.minFilter!==Pt&&E.minFilter!==Zt}function T(E,y){return E.generateMipmaps&&y&&E.minFilter!==Pt&&E.minFilter!==Zt}function O(E){r.generateMipmap(E)}function _(E,y,q,ne,re=!1){if(a===!1)return y;if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le=y;return y===6403&&(q===5126&&(le=33326),q===5131&&(le=33325),q===5121&&(le=33321)),y===33319&&(q===5126&&(le=33328),q===5131&&(le=33327),q===5121&&(le=33323)),y===6408&&(q===5126&&(le=34836),q===5131&&(le=34842),q===5121&&(le=ne===Je&&re===!1?35907:32856),q===32819&&(le=32854),q===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function A(E,y,q){return T(E,q)===!0||E.isFramebufferTexture&&E.minFilter!==Pt&&E.minFilter!==Zt?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function L(E){return E===Pt||E===pa||E===$r?9728:9729}function z(E){const y=E.target;y.removeEventListener("dispose",z),D(y),y.isVideoTexture&&v.delete(y)}function W(E){const y=E.target;y.removeEventListener("dispose",W),R(y)}function D(E){const y=n.get(E);if(y.__webglInit===void 0)return;const q=E.source,ne=h.get(q);if(ne){const re=ne[y.__cacheKey];re.usedTimes--,re.usedTimes===0&&U(E),Object.keys(ne).length===0&&h.delete(q)}n.remove(E)}function U(E){const y=n.get(E);r.deleteTexture(y.__webglTexture);const q=E.source,ne=h.get(q);delete ne[y.__cacheKey],o.memory.textures--}function R(E){const y=E.texture,q=n.get(E),ne=n.get(y);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)r.deleteFramebuffer(q.__webglFramebuffer[re]),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer[re]);else{if(r.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let re=0;re<q.__webglColorRenderbuffer.length;re++)q.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(q.__webglColorRenderbuffer[re]);q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let re=0,le=y.length;re<le;re++){const ye=n.get(y[re]);ye.__webglTexture&&(r.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(y[re])}n.remove(y),n.remove(E)}let k=0;function Q(){k=0}function X(){const E=k;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),k+=1,E}function $(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.encoding),y.join()}function J(E,y){const q=n.get(E);if(E.isVideoTexture&&Xt(E),E.isRenderTargetTexture===!1&&E.version>0&&q.__version!==E.version){const ne=E.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(q,E,y);return}}t.bindTexture(3553,q.__webglTexture,33984+y)}function I(E,y){const q=n.get(E);if(E.version>0&&q.__version!==E.version){_e(q,E,y);return}t.bindTexture(35866,q.__webglTexture,33984+y)}function P(E,y){const q=n.get(E);if(E.version>0&&q.__version!==E.version){_e(q,E,y);return}t.bindTexture(32879,q.__webglTexture,33984+y)}function ie(E,y){const q=n.get(E);if(E.version>0&&q.__version!==E.version){Se(q,E,y);return}t.bindTexture(34067,q.__webglTexture,33984+y)}const ee={[Ns]:10497,[on]:33071,[Us]:33648},se={[Pt]:9728,[pa]:9984,[$r]:9986,[Zt]:9729,[Ac]:9985,[Yi]:9987};function N(E,y,q){if(q?(r.texParameteri(E,10242,ee[y.wrapS]),r.texParameteri(E,10243,ee[y.wrapT]),(E===32879||E===35866)&&r.texParameteri(E,32882,ee[y.wrapR]),r.texParameteri(E,10240,se[y.magFilter]),r.texParameteri(E,10241,se[y.minFilter])):(r.texParameteri(E,10242,33071),r.texParameteri(E,10243,33071),(E===32879||E===35866)&&r.texParameteri(E,32882,33071),(y.wrapS!==on||y.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(E,10240,L(y.magFilter)),r.texParameteri(E,10241,L(y.minFilter)),y.minFilter!==Pt&&y.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Pt||y.minFilter!==$r&&y.minFilter!==Yi||y.type===$n&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Zi&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(E,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function ce(E,y){let q=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",z));const ne=y.source;let re=h.get(ne);re===void 0&&(re={},h.set(ne,re));const le=$(y);if(le!==E.__cacheKey){re[le]===void 0&&(re[le]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),re[le].usedTimes++;const ye=re[E.__cacheKey];ye!==void 0&&(re[E.__cacheKey].usedTimes--,ye.usedTimes===0&&U(y)),E.__cacheKey=le,E.__webglTexture=re[le].texture}return q}function _e(E,y,q){let ne=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ne=35866),y.isData3DTexture&&(ne=32879);const re=ce(E,y),le=y.source;t.bindTexture(ne,E.__webglTexture,33984+q);const ye=n.get(le);if(le.version!==ye.__version||re===!0){t.activeTexture(33984+q),r.pixelStorei(37440,y.flipY),r.pixelStorei(37441,y.premultiplyAlpha),r.pixelStorei(3317,y.unpackAlignment),r.pixelStorei(37443,0);const C=S(y)&&M(y.image)===!1;let V=x(y.image,C,!1,c);V=It(y,V);const fe=M(V)||a,me=s.convert(y.format,y.encoding);let ue=s.convert(y.type),xe=_(y.internalFormat,me,ue,y.encoding,y.isVideoTexture);N(ne,y,fe);let ve;const Ie=y.mipmaps,Oe=a&&y.isVideoTexture!==!0,je=ye.__version===void 0||re===!0,F=A(y,V,fe);if(y.isDepthTexture)xe=6402,a?y.type===$n?xe=36012:y.type===Qn?xe=33190:y.type===Ti?xe=35056:xe=33189:y.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===ei&&xe===6402&&y.type!==ll&&y.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Qn,ue=s.convert(y.type)),y.format===Di&&xe===6402&&(xe=34041,y.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ti,ue=s.convert(y.type))),je&&(Oe?t.texStorage2D(3553,1,xe,V.width,V.height):t.texImage2D(3553,0,xe,V.width,V.height,0,me,ue,null));else if(y.isDataTexture)if(Ie.length>0&&fe){Oe&&je&&t.texStorage2D(3553,F,xe,Ie[0].width,Ie[0].height);for(let Y=0,te=Ie.length;Y<te;Y++)ve=Ie[Y],Oe?t.texSubImage2D(3553,Y,0,0,ve.width,ve.height,me,ue,ve.data):t.texImage2D(3553,Y,xe,ve.width,ve.height,0,me,ue,ve.data);y.generateMipmaps=!1}else Oe?(je&&t.texStorage2D(3553,F,xe,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,me,ue,V.data)):t.texImage2D(3553,0,xe,V.width,V.height,0,me,ue,V.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Oe&&je&&t.texStorage3D(35866,F,xe,Ie[0].width,Ie[0].height,V.depth);for(let Y=0,te=Ie.length;Y<te;Y++)ve=Ie[Y],y.format!==ln?me!==null?Oe?t.compressedTexSubImage3D(35866,Y,0,0,0,ve.width,ve.height,V.depth,me,ve.data,0,0):t.compressedTexImage3D(35866,Y,xe,ve.width,ve.height,V.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage3D(35866,Y,0,0,0,ve.width,ve.height,V.depth,me,ue,ve.data):t.texImage3D(35866,Y,xe,ve.width,ve.height,V.depth,0,me,ue,ve.data)}else{Oe&&je&&t.texStorage2D(3553,F,xe,Ie[0].width,Ie[0].height);for(let Y=0,te=Ie.length;Y<te;Y++)ve=Ie[Y],y.format!==ln?me!==null?Oe?t.compressedTexSubImage2D(3553,Y,0,0,ve.width,ve.height,me,ve.data):t.compressedTexImage2D(3553,Y,xe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage2D(3553,Y,0,0,ve.width,ve.height,me,ue,ve.data):t.texImage2D(3553,Y,xe,ve.width,ve.height,0,me,ue,ve.data)}else if(y.isDataArrayTexture)Oe?(je&&t.texStorage3D(35866,F,xe,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,me,ue,V.data)):t.texImage3D(35866,0,xe,V.width,V.height,V.depth,0,me,ue,V.data);else if(y.isData3DTexture)Oe?(je&&t.texStorage3D(32879,F,xe,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,me,ue,V.data)):t.texImage3D(32879,0,xe,V.width,V.height,V.depth,0,me,ue,V.data);else if(y.isFramebufferTexture){if(je)if(Oe)t.texStorage2D(3553,F,xe,V.width,V.height);else{let Y=V.width,te=V.height;for(let he=0;he<F;he++)t.texImage2D(3553,he,xe,Y,te,0,me,ue,null),Y>>=1,te>>=1}}else if(Ie.length>0&&fe){Oe&&je&&t.texStorage2D(3553,F,xe,Ie[0].width,Ie[0].height);for(let Y=0,te=Ie.length;Y<te;Y++)ve=Ie[Y],Oe?t.texSubImage2D(3553,Y,0,0,me,ue,ve):t.texImage2D(3553,Y,xe,me,ue,ve);y.generateMipmaps=!1}else Oe?(je&&t.texStorage2D(3553,F,xe,V.width,V.height),t.texSubImage2D(3553,0,0,0,me,ue,V)):t.texImage2D(3553,0,xe,me,ue,V);T(y,fe)&&O(ne),ye.__version=le.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Se(E,y,q){if(y.image.length!==6)return;const ne=ce(E,y),re=y.source;t.bindTexture(34067,E.__webglTexture,33984+q);const le=n.get(re);if(re.version!==le.__version||ne===!0){t.activeTexture(33984+q),r.pixelStorei(37440,y.flipY),r.pixelStorei(37441,y.premultiplyAlpha),r.pixelStorei(3317,y.unpackAlignment),r.pixelStorei(37443,0);const ye=y.isCompressedTexture||y.image[0].isCompressedTexture,C=y.image[0]&&y.image[0].isDataTexture,V=[];for(let Y=0;Y<6;Y++)!ye&&!C?V[Y]=x(y.image[Y],!1,!0,u):V[Y]=C?y.image[Y].image:y.image[Y],V[Y]=It(y,V[Y]);const fe=V[0],me=M(fe)||a,ue=s.convert(y.format,y.encoding),xe=s.convert(y.type),ve=_(y.internalFormat,ue,xe,y.encoding),Ie=a&&y.isVideoTexture!==!0,Oe=le.__version===void 0||ne===!0;let je=A(y,fe,me);N(34067,y,me);let F;if(ye){Ie&&Oe&&t.texStorage2D(34067,je,ve,fe.width,fe.height);for(let Y=0;Y<6;Y++){F=V[Y].mipmaps;for(let te=0;te<F.length;te++){const he=F[te];y.format!==ln?ue!==null?Ie?t.compressedTexSubImage2D(34069+Y,te,0,0,he.width,he.height,ue,he.data):t.compressedTexImage2D(34069+Y,te,ve,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+Y,te,0,0,he.width,he.height,ue,xe,he.data):t.texImage2D(34069+Y,te,ve,he.width,he.height,0,ue,xe,he.data)}}}else{F=y.mipmaps,Ie&&Oe&&(F.length>0&&je++,t.texStorage2D(34067,je,ve,V[0].width,V[0].height));for(let Y=0;Y<6;Y++)if(C){Ie?t.texSubImage2D(34069+Y,0,0,0,V[Y].width,V[Y].height,ue,xe,V[Y].data):t.texImage2D(34069+Y,0,ve,V[Y].width,V[Y].height,0,ue,xe,V[Y].data);for(let te=0;te<F.length;te++){const be=F[te].image[Y].image;Ie?t.texSubImage2D(34069+Y,te+1,0,0,be.width,be.height,ue,xe,be.data):t.texImage2D(34069+Y,te+1,ve,be.width,be.height,0,ue,xe,be.data)}}else{Ie?t.texSubImage2D(34069+Y,0,0,0,ue,xe,V[Y]):t.texImage2D(34069+Y,0,ve,ue,xe,V[Y]);for(let te=0;te<F.length;te++){const he=F[te];Ie?t.texSubImage2D(34069+Y,te+1,0,0,ue,xe,he.image[Y]):t.texImage2D(34069+Y,te+1,ve,ue,xe,he.image[Y])}}}T(y,me)&&O(34067),le.__version=re.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function pe(E,y,q,ne,re){const le=s.convert(q.format,q.encoding),ye=s.convert(q.type),C=_(q.internalFormat,le,ye,q.encoding);n.get(y).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,C,y.width,y.height,y.depth,0,le,ye,null):t.texImage2D(re,0,C,y.width,y.height,0,le,ye,null)),t.bindFramebuffer(36160,E),We(y)?d.framebufferTexture2DMultisampleEXT(36160,ne,re,n.get(q).__webglTexture,0,st(y)):(re===3553||re>=34069&&re<=34074)&&r.framebufferTexture2D(36160,ne,re,n.get(q).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ue(E,y,q){if(r.bindRenderbuffer(36161,E),y.depthBuffer&&!y.stencilBuffer){let ne=33189;if(q||We(y)){const re=y.depthTexture;re&&re.isDepthTexture&&(re.type===$n?ne=36012:re.type===Qn&&(ne=33190));const le=st(y);We(y)?d.renderbufferStorageMultisampleEXT(36161,le,ne,y.width,y.height):r.renderbufferStorageMultisample(36161,le,ne,y.width,y.height)}else r.renderbufferStorage(36161,ne,y.width,y.height);r.framebufferRenderbuffer(36160,36096,36161,E)}else if(y.depthBuffer&&y.stencilBuffer){const ne=st(y);q&&We(y)===!1?r.renderbufferStorageMultisample(36161,ne,35056,y.width,y.height):We(y)?d.renderbufferStorageMultisampleEXT(36161,ne,35056,y.width,y.height):r.renderbufferStorage(36161,34041,y.width,y.height),r.framebufferRenderbuffer(36160,33306,36161,E)}else{const ne=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let re=0;re<ne.length;re++){const le=ne[re],ye=s.convert(le.format,le.encoding),C=s.convert(le.type),V=_(le.internalFormat,ye,C,le.encoding),fe=st(y);q&&We(y)===!1?r.renderbufferStorageMultisample(36161,fe,V,y.width,y.height):We(y)?d.renderbufferStorageMultisampleEXT(36161,fe,V,y.width,y.height):r.renderbufferStorage(36161,V,y.width,y.height)}}r.bindRenderbuffer(36161,null)}function j(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J(y.depthTexture,0);const ne=n.get(y.depthTexture).__webglTexture,re=st(y);if(y.depthTexture.format===ei)We(y)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,re):r.framebufferTexture2D(36160,36096,3553,ne,0);else if(y.depthTexture.format===Di)We(y)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,re):r.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function oe(E){const y=n.get(E),q=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");j(y.__webglFramebuffer,E)}else if(q){y.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,y.__webglFramebuffer[ne]),y.__webglDepthbuffer[ne]=r.createRenderbuffer(),Ue(y.__webglDepthbuffer[ne],E,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),Ue(y.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function qe(E,y,q){const ne=n.get(E);y!==void 0&&pe(ne.__webglFramebuffer,E,E.texture,36064,3553),q!==void 0&&oe(E)}function rt(E){const y=E.texture,q=n.get(E),ne=n.get(y);E.addEventListener("dispose",W),E.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=y.version,o.memory.textures++);const re=E.isWebGLCubeRenderTarget===!0,le=E.isWebGLMultipleRenderTargets===!0,ye=M(E)||a;if(re){q.__webglFramebuffer=[];for(let C=0;C<6;C++)q.__webglFramebuffer[C]=r.createFramebuffer()}else{if(q.__webglFramebuffer=r.createFramebuffer(),le)if(i.drawBuffers){const C=E.texture;for(let V=0,fe=C.length;V<fe;V++){const me=n.get(C[V]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&We(E)===!1){const C=le?y:[y];q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let V=0;V<C.length;V++){const fe=C[V];q.__webglColorRenderbuffer[V]=r.createRenderbuffer(),r.bindRenderbuffer(36161,q.__webglColorRenderbuffer[V]);const me=s.convert(fe.format,fe.encoding),ue=s.convert(fe.type),xe=_(fe.internalFormat,me,ue,fe.encoding,E.isXRRenderTarget===!0),ve=st(E);r.renderbufferStorageMultisample(36161,ve,xe,E.width,E.height),r.framebufferRenderbuffer(36160,36064+V,36161,q.__webglColorRenderbuffer[V])}r.bindRenderbuffer(36161,null),E.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(q.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,ne.__webglTexture),N(34067,y,ye);for(let C=0;C<6;C++)pe(q.__webglFramebuffer[C],E,y,36064,34069+C);T(y,ye)&&O(34067),t.unbindTexture()}else if(le){const C=E.texture;for(let V=0,fe=C.length;V<fe;V++){const me=C[V],ue=n.get(me);t.bindTexture(3553,ue.__webglTexture),N(3553,me,ye),pe(q.__webglFramebuffer,E,me,36064+V,3553),T(me,ye)&&O(3553)}t.unbindTexture()}else{let C=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?C=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,ne.__webglTexture),N(C,y,ye),pe(q.__webglFramebuffer,E,y,36064,C),T(y,ye)&&O(C),t.unbindTexture()}E.depthBuffer&&oe(E)}function dt(E){const y=M(E)||a,q=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0,re=q.length;ne<re;ne++){const le=q[ne];if(T(le,y)){const ye=E.isWebGLCubeRenderTarget?34067:3553,C=n.get(le).__webglTexture;t.bindTexture(ye,C),O(ye),t.unbindTexture()}}}function At(E){if(a&&E.samples>0&&We(E)===!1){const y=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],q=E.width,ne=E.height;let re=16384;const le=[],ye=E.stencilBuffer?33306:36096,C=n.get(E),V=E.isWebGLMultipleRenderTargets===!0;if(V)for(let fe=0;fe<y.length;fe++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+fe,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),r.framebufferTexture2D(36009,36064+fe,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){le.push(36064+fe),E.depthBuffer&&le.push(ye);const me=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(me===!1&&(E.depthBuffer&&(re|=256),E.stencilBuffer&&(re|=1024)),V&&r.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[fe]),me===!0&&(r.invalidateFramebuffer(36008,[ye]),r.invalidateFramebuffer(36009,[ye])),V){const ue=n.get(y[fe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ue,0)}r.blitFramebuffer(0,0,q,ne,0,0,q,ne,re,9728),m&&r.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),V)for(let fe=0;fe<y.length;fe++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+fe,36161,C.__webglColorRenderbuffer[fe]);const me=n.get(y[fe]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),r.framebufferTexture2D(36009,36064+fe,3553,me,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function st(E){return Math.min(f,E.samples)}function We(E){const y=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Xt(E){const y=o.render.frame;v.get(E)!==y&&(v.set(E,y),E.update())}function It(E,y){const q=E.encoding,ne=E.format,re=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ks||q!==Fn&&(q===Je?a===!1?e.has("EXT_sRGB")===!0&&ne===ln?(E.format=ks,E.minFilter=Zt,E.generateMipmaps=!1):y=dl.sRGBToLinear(y):(ne!==ln||re!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),y}this.allocateTextureUnit=X,this.resetTextureUnits=Q,this.setTexture2D=J,this.setTexture2DArray=I,this.setTexture3D=P,this.setTextureCube=ie,this.rebindTextures=qe,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=We}function Jp(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===ri)return 5121;if(s===Dc)return 32819;if(s===Pc)return 32820;if(s===Tc)return 5120;if(s===Cc)return 5122;if(s===ll)return 5123;if(s===Lc)return 5124;if(s===Qn)return 5125;if(s===$n)return 5126;if(s===Zi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Rc)return 6406;if(s===ln)return 6408;if(s===Oc)return 6409;if(s===zc)return 6410;if(s===ei)return 6402;if(s===Di)return 34041;if(s===Ic)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ks)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Fc)return 6403;if(s===Nc)return 36244;if(s===Uc)return 33319;if(s===Bc)return 33320;if(s===kc)return 36249;if(s===es||s===ts||s===ns||s===is)if(o===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===es)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ts)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===es)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ts)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ns)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===is)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ma||s===ga||s===_a||s===va)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ma)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ga)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_a)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===va)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xa||s===ba)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===xa)return o===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ba)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ma||s===Sa||s===ya||s===wa||s===Ea||s===Aa||s===Ta||s===Ca||s===La||s===Da||s===Pa||s===Ra||s===Ia||s===Oa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ma)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sa)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ya)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wa)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ea)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Aa)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ta)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ca)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===La)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Da)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pa)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ra)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ia)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Oa)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===za)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===za)return o===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ti?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Qp extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tr extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $p={type:"move"};class Cs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,n),g=this._getHandJoint(u,p);h!==null&&(g.matrix.fromArray(h.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=h.radius),g.visible=h!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),m=.02,v=.005;u.inputState.pinching&&d>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($p)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Tr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class em extends zt{constructor(e,t,n,i,s,o,a,l,u,c){if(c=c!==void 0?c:ei,c!==ei&&c!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===ei&&(n=Qn),n===void 0&&c===Di&&(n=Ti),super(null,i,s,o,a,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1}}class tm extends oi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,f=null,d=null,m=null;const v=t.getContextAttributes();let p=null,h=null;const g=[],b=[],x=new Set,M=new Map,S=new kt;S.layers.enable(1),S.viewport=new it;const T=new kt;T.layers.enable(2),T.viewport=new it;const O=[S,T],_=new Qp;_.layers.enable(1),_.layers.enable(2);let A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let P=g[I];return P===void 0&&(P=new Cs,g[I]=P),P.getTargetRaySpace()},this.getControllerGrip=function(I){let P=g[I];return P===void 0&&(P=new Cs,g[I]=P),P.getGripSpace()},this.getHand=function(I){let P=g[I];return P===void 0&&(P=new Cs,g[I]=P),P.getHandSpace()};function z(I){const P=b.indexOf(I.inputSource);if(P===-1)return;const ie=g[P];ie!==void 0&&ie.dispatchEvent({type:I.type,data:I.inputSource})}function W(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",D);for(let I=0;I<g.length;I++){const P=b[I];P!==null&&(b[I]=null,g[I].disconnect(P))}A=null,L=null,e.setRenderTarget(p),d=null,f=null,c=null,i=null,h=null,J.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",W),i.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const P={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,P),i.updateRenderState({baseLayer:d}),h=new Nn(d.framebufferWidth,d.framebufferHeight,{format:ln,type:ri,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let P=null,ie=null,ee=null;v.depth&&(ee=v.stencil?35056:33190,P=v.stencil?Di:ei,ie=v.stencil?Ti:Qn);const se={colorFormat:32856,depthFormat:ee,scaleFactor:s};c=new XRWebGLBinding(i,t),f=c.createProjectionLayer(se),i.updateRenderState({layers:[f]}),h=new Nn(f.textureWidth,f.textureHeight,{format:ln,type:ri,depthTexture:new em(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const N=e.properties.get(h);N.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),J.setContext(i),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(I){for(let P=0;P<I.removed.length;P++){const ie=I.removed[P],ee=b.indexOf(ie);ee>=0&&(b[ee]=null,g[ee].disconnect(ie))}for(let P=0;P<I.added.length;P++){const ie=I.added[P];let ee=b.indexOf(ie);if(ee===-1){for(let N=0;N<g.length;N++)if(N>=b.length){b.push(ie),ee=N;break}else if(b[N]===null){b[N]=ie,ee=N;break}if(ee===-1)break}const se=g[ee];se&&se.connect(ie)}}const U=new B,R=new B;function k(I,P,ie){U.setFromMatrixPosition(P.matrixWorld),R.setFromMatrixPosition(ie.matrixWorld);const ee=U.distanceTo(R),se=P.projectionMatrix.elements,N=ie.projectionMatrix.elements,ce=se[14]/(se[10]-1),_e=se[14]/(se[10]+1),Se=(se[9]+1)/se[5],pe=(se[9]-1)/se[5],Ue=(se[8]-1)/se[0],j=(N[8]+1)/N[0],oe=ce*Ue,qe=ce*j,rt=ee/(-Ue+j),dt=rt*-Ue;P.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(dt),I.translateZ(rt),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const At=ce+rt,st=_e+rt,We=oe-dt,Xt=qe+(ee-dt),It=Se*_e/st*At,E=pe*_e/st*At;I.projectionMatrix.makePerspective(We,Xt,It,E,At,st)}function Q(I,P){P===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(P.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;_.near=T.near=S.near=I.near,_.far=T.far=S.far=I.far,(A!==_.near||L!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,L=_.far);const P=I.parent,ie=_.cameras;Q(_,P);for(let se=0;se<ie.length;se++)Q(ie[se],P);_.matrixWorld.decompose(_.position,_.quaternion,_.scale),I.matrix.copy(_.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);const ee=I.children;for(let se=0,N=ee.length;se<N;se++)ee[se].updateMatrixWorld(!0);ie.length===2?k(_,S,T):_.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return _},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(I){f!==null&&(f.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)},this.getPlanes=function(){return x};let X=null;function $(I,P){if(u=P.getViewerPose(l||o),m=P,u!==null){const ie=u.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let ee=!1;ie.length!==_.cameras.length&&(_.cameras.length=0,ee=!0);for(let se=0;se<ie.length;se++){const N=ie[se];let ce=null;if(d!==null)ce=d.getViewport(N);else{const Se=c.getViewSubImage(f,N);ce=Se.viewport,se===0&&(e.setRenderTargetTextures(h,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(h))}let _e=O[se];_e===void 0&&(_e=new kt,_e.layers.enable(se),_e.viewport=new it,O[se]=_e),_e.matrix.fromArray(N.transform.matrix),_e.projectionMatrix.fromArray(N.projectionMatrix),_e.viewport.set(ce.x,ce.y,ce.width,ce.height),se===0&&_.matrix.copy(_e.matrix),ee===!0&&_.cameras.push(_e)}}for(let ie=0;ie<g.length;ie++){const ee=b[ie],se=g[ie];ee!==null&&se!==void 0&&se.update(ee,P,l||o)}if(X&&X(I,P),P.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:P.detectedPlanes});let ie=null;for(const ee of x)P.detectedPlanes.has(ee)||(ie===null&&(ie=[]),ie.push(ee));if(ie!==null)for(const ee of ie)x.delete(ee),M.delete(ee),n.dispatchEvent({type:"planeremoved",data:ee});for(const ee of P.detectedPlanes)if(!x.has(ee))x.add(ee),M.set(ee,P.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ee});else{const se=M.get(ee);ee.lastChangedTime>se&&(M.set(ee,ee.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ee}))}}m=null}const J=new Ml;J.setAnimationLoop($),this.setAnimationLoop=function(I){X=I},this.dispose=function(){}}}function nm(r,e){function t(p,h){h.color.getRGB(p.fogColor.value,xl(r)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function n(p,h,g,b,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(p,h):h.isMeshToonMaterial?(i(p,h),c(p,h)):h.isMeshPhongMaterial?(i(p,h),u(p,h)):h.isMeshStandardMaterial?(i(p,h),f(p,h),h.isMeshPhysicalMaterial&&d(p,h,x)):h.isMeshMatcapMaterial?(i(p,h),m(p,h)):h.isMeshDepthMaterial?i(p,h):h.isMeshDistanceMaterial?(i(p,h),v(p,h)):h.isMeshNormalMaterial?i(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,g,b):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===Qt&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===Qt&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const g=e.get(h).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const M=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*M}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let b;h.map?b=h.map:h.specularMap?b=h.specularMap:h.displacementMap?b=h.displacementMap:h.normalMap?b=h.normalMap:h.bumpMap?b=h.bumpMap:h.roughnessMap?b=h.roughnessMap:h.metalnessMap?b=h.metalnessMap:h.alphaMap?b=h.alphaMap:h.emissiveMap?b=h.emissiveMap:h.clearcoatMap?b=h.clearcoatMap:h.clearcoatNormalMap?b=h.clearcoatNormalMap:h.clearcoatRoughnessMap?b=h.clearcoatRoughnessMap:h.iridescenceMap?b=h.iridescenceMap:h.iridescenceThicknessMap?b=h.iridescenceThicknessMap:h.specularIntensityMap?b=h.specularIntensityMap:h.specularColorMap?b=h.specularColorMap:h.transmissionMap?b=h.transmissionMap:h.thicknessMap?b=h.thicknessMap:h.sheenColorMap?b=h.sheenColorMap:h.sheenRoughnessMap&&(b=h.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let x;h.aoMap?x=h.aoMap:h.lightMap&&(x=h.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,g,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*g,p.scale.value=b*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let x;h.map?x=h.map:h.alphaMap&&(x=h.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let g;h.map?g=h.map:h.alphaMap&&(g=h.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function c(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function d(p,h,g){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Qt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function im(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(b,x){const M=x.program;n.uniformBlockBinding(b,M)}function u(b,x){let M=i[b.id];M===void 0&&(v(b),M=c(b),i[b.id]=M,b.addEventListener("dispose",h));const S=x.program;n.updateUBOMapping(b,S);const T=e.render.frame;s[b.id]!==T&&(d(b),s[b.id]=T)}function c(b){const x=f();b.__bindingPointIndex=x;const M=r.createBuffer(),S=b.__size,T=b.usage;return r.bindBuffer(35345,M),r.bufferData(35345,S,T),r.bindBuffer(35345,null),r.bindBufferBase(35345,x,M),M}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=i[b.id],M=b.uniforms,S=b.__cache;r.bindBuffer(35345,x);for(let T=0,O=M.length;T<O;T++){const _=M[T];if(m(_,T,S)===!0){const A=_.__offset,L=Array.isArray(_.value)?_.value:[_.value];let z=0;for(let W=0;W<L.length;W++){const D=L[W],U=p(D);typeof D=="number"?(_.__data[0]=D,r.bufferSubData(35345,A+z,_.__data)):D.isMatrix3?(_.__data[0]=D.elements[0],_.__data[1]=D.elements[1],_.__data[2]=D.elements[2],_.__data[3]=D.elements[0],_.__data[4]=D.elements[3],_.__data[5]=D.elements[4],_.__data[6]=D.elements[5],_.__data[7]=D.elements[0],_.__data[8]=D.elements[6],_.__data[9]=D.elements[7],_.__data[10]=D.elements[8],_.__data[11]=D.elements[0]):(D.toArray(_.__data,z),z+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,A,_.__data)}}r.bindBuffer(35345,null)}function m(b,x,M){const S=b.value;if(M[x]===void 0){if(typeof S=="number")M[x]=S;else{const T=Array.isArray(S)?S:[S],O=[];for(let _=0;_<T.length;_++)O.push(T[_].clone());M[x]=O}return!0}else if(typeof S=="number"){if(M[x]!==S)return M[x]=S,!0}else{const T=Array.isArray(M[x])?M[x]:[M[x]],O=Array.isArray(S)?S:[S];for(let _=0;_<T.length;_++){const A=T[_];if(A.equals(O[_])===!1)return A.copy(O[_]),!0}}return!1}function v(b){const x=b.uniforms;let M=0;const S=16;let T=0;for(let O=0,_=x.length;O<_;O++){const A=x[O],L={boundary:0,storage:0},z=Array.isArray(A.value)?A.value:[A.value];for(let W=0,D=z.length;W<D;W++){const U=z[W],R=p(U);L.boundary+=R.boundary,L.storage+=R.storage}if(A.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=M,O>0){T=M%S;const W=S-T;T!==0&&W-L.boundary<0&&(M+=S-T,A.__offset=M)}M+=L.storage}return T=M%S,T>0&&(M+=S-T),b.__size=M,b.__cache={},this}function p(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function h(b){const x=b.target;x.removeEventListener("dispose",h);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function g(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:u,dispose:g}}function rm(){const r=Ji("canvas");return r.style.display="block",r}function Al(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:rm(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=r.alpha!==void 0?r.alpha:!1;let f=null,d=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Fn,this.physicallyCorrectLights=!1,this.toneMapping=pn,this.toneMappingExposure=1;const p=this;let h=!1,g=0,b=0,x=null,M=-1,S=null;const T=new it,O=new it;let _=null,A=e.width,L=e.height,z=1,W=null,D=null;const U=new it(0,0,A,L),R=new it(0,0,A,L);let k=!1;const Q=new Vr;let X=!1,$=!1,J=null;const I=new Qe,P=new Ee,ie=new B,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return x===null?z:1}let N=t;function ce(w,H){for(let Z=0;Z<w.length;Z++){const G=w[Z],K=e.getContext(G,H);if(K!==null)return K}return null}try{const w={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qs}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Ie,!1),N===null){const H=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&H.shift(),N=ce(H,w),N===null)throw ce(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let _e,Se,pe,Ue,j,oe,qe,rt,dt,At,st,We,Xt,It,E,y,q,ne,re,le,ye,C,V,fe;function me(){_e=new mh(N),Se=new ch(N,_e,r),_e.init(Se),C=new Jp(N,_e,Se),pe=new Zp(N,_e,Se),Ue=new vh,j=new zp,oe=new Kp(N,_e,pe,j,Se,C,Ue),qe=new fh(p),rt=new ph(p),dt=new Au(N,Se),V=new oh(N,_e,dt,Se),At=new gh(N,dt,Ue,V),st=new Sh(N,At,dt,Ue),re=new Mh(N,Se,oe),y=new uh(j),We=new Op(p,qe,rt,_e,Se,V,y),Xt=new nm(p,j),It=new Np,E=new Hp(_e,Se),ne=new ah(p,qe,rt,pe,st,c,o),q=new Yp(p,st,Se),fe=new im(N,Ue,Se,pe),le=new lh(N,_e,Ue,Se),ye=new _h(N,_e,Ue,Se),Ue.programs=We.programs,p.capabilities=Se,p.extensions=_e,p.properties=j,p.renderLists=It,p.shadowMap=q,p.state=pe,p.info=Ue}me();const ue=new tm(p,N);this.xr=ue,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=_e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=_e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(A,L,!1))},this.getSize=function(w){return w.set(A,L)},this.setSize=function(w,H,Z){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=w,L=H,e.width=Math.floor(w*z),e.height=Math.floor(H*z),Z!==!1&&(e.style.width=w+"px",e.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(A*z,L*z).floor()},this.setDrawingBufferSize=function(w,H,Z){A=w,L=H,z=Z,e.width=Math.floor(w*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(U)},this.setViewport=function(w,H,Z,G){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,H,Z,G),pe.viewport(T.copy(U).multiplyScalar(z).floor())},this.getScissor=function(w){return w.copy(R)},this.setScissor=function(w,H,Z,G){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,H,Z,G),pe.scissor(O.copy(R).multiplyScalar(z).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(w){pe.setScissorTest(k=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){D=w},this.getClearColor=function(w){return w.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(w=!0,H=!0,Z=!0){let G=0;w&&(G|=16384),H&&(G|=256),Z&&(G|=1024),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Ie,!1),It.dispose(),E.dispose(),j.dispose(),qe.dispose(),rt.dispose(),st.dispose(),V.dispose(),fe.dispose(),We.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",he),ue.removeEventListener("sessionend",be),J&&(J.dispose(),J=null),Ve.stop()};function xe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const w=Ue.autoReset,H=q.enabled,Z=q.autoUpdate,G=q.needsUpdate,K=q.type;me(),Ue.autoReset=w,q.enabled=H,q.autoUpdate=Z,q.needsUpdate=G,q.type=K}function Ie(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Oe(w){const H=w.target;H.removeEventListener("dispose",Oe),je(H)}function je(w){F(w),j.remove(w)}function F(w){const H=j.get(w).programs;H!==void 0&&(H.forEach(function(Z){We.releaseProgram(Z)}),w.isShaderMaterial&&We.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,Z,G,K,Me){H===null&&(H=ee);const we=K.isMesh&&K.matrixWorld.determinant()<0,Pe=Gl(w,H,Z,G,K);pe.setMaterial(G,we);let Re=Z.index,ke=1;G.wireframe===!0&&(Re=At.getWireframeAttribute(Z),ke=2);const ze=Z.drawRange,Fe=Z.attributes.position;let at=ze.start*ke,Ft=(ze.start+ze.count)*ke;Me!==null&&(at=Math.max(at,Me.start*ke),Ft=Math.min(Ft,(Me.start+Me.count)*ke)),Re!==null?(at=Math.max(at,0),Ft=Math.min(Ft,Re.count)):Fe!=null&&(at=Math.max(at,0),Ft=Math.min(Ft,Fe.count));const vn=Ft-at;if(vn<0||vn===1/0)return;V.setup(K,G,Pe,Z,Re);let Gn,ot=le;if(Re!==null&&(Gn=dt.get(Re),ot=ye,ot.setIndex(Gn)),K.isMesh)G.wireframe===!0?(pe.setLineWidth(G.wireframeLinewidth*se()),ot.setMode(1)):ot.setMode(4);else if(K.isLine){let Ne=G.linewidth;Ne===void 0&&(Ne=1),pe.setLineWidth(Ne*se()),K.isLineSegments?ot.setMode(1):K.isLineLoop?ot.setMode(2):ot.setMode(3)}else K.isPoints?ot.setMode(0):K.isSprite&&ot.setMode(4);if(K.isInstancedMesh)ot.renderInstances(at,vn,K.count);else if(Z.isInstancedBufferGeometry){const Ne=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Zr=Math.min(Z.instanceCount,Ne);ot.renderInstances(at,vn,Zr)}else ot.render(at,vn)},this.compile=function(w,H){function Z(G,K,Me){G.transparent===!0&&G.side===lr?(G.side=Qt,G.needsUpdate=!0,qt(G,K,Me),G.side=ii,G.needsUpdate=!0,qt(G,K,Me),G.side=lr):qt(G,K,Me)}d=E.get(w),d.init(),v.push(d),w.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights(p.physicallyCorrectLights),w.traverse(function(G){const K=G.material;if(K)if(Array.isArray(K))for(let Me=0;Me<K.length;Me++){const we=K[Me];Z(we,w,G)}else Z(K,w,G)}),v.pop(),d=null};let Y=null;function te(w){Y&&Y(w)}function he(){Ve.stop()}function be(){Ve.start()}const Ve=new Ml;Ve.setAnimationLoop(te),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(w){Y=w,ue.setAnimationLoop(w),w===null?Ve.stop():Ve.start()},ue.addEventListener("sessionstart",he),ue.addEventListener("sessionend",be),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(H),H=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,H,x),d=E.get(w,v.length),d.init(),v.push(d),I.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Q.setFromProjectionMatrix(I),$=this.localClippingEnabled,X=y.init(this.clippingPlanes,$,H),f=It.get(w,m.length),f.init(),m.push(f),gt(w,H,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(W,D),X===!0&&y.beginShadows();const Z=d.state.shadowsArray;if(q.render(Z,w,H),X===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(f,w),d.setupLights(p.physicallyCorrectLights),H.isArrayCamera){const G=H.cameras;for(let K=0,Me=G.length;K<Me;K++){const we=G[K];yt(f,w,we,we.viewport)}}else yt(f,w,H);x!==null&&(oe.updateMultisampleRenderTarget(x),oe.updateRenderTargetMipmap(x)),w.isScene===!0&&w.onAfterRender(p,w,H),V.resetDefaultState(),M=-1,S=null,v.pop(),v.length>0?d=v[v.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function gt(w,H,Z,G){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){G&&ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(I);const we=st.update(w),Pe=w.material;Pe.visible&&f.push(w,we,Pe,Z,ie.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Ue.render.frame&&(w.skeleton.update(),w.skeleton.frame=Ue.render.frame),!w.frustumCulled||Q.intersectsObject(w))){G&&ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(I);const we=st.update(w),Pe=w.material;if(Array.isArray(Pe)){const Re=we.groups;for(let ke=0,ze=Re.length;ke<ze;ke++){const Fe=Re[ke],at=Pe[Fe.materialIndex];at&&at.visible&&f.push(w,we,at,Z,ie.z,Fe)}}else Pe.visible&&f.push(w,we,Pe,Z,ie.z,null)}}const Me=w.children;for(let we=0,Pe=Me.length;we<Pe;we++)gt(Me[we],H,Z,G)}function yt(w,H,Z,G){const K=w.opaque,Me=w.transmissive,we=w.transparent;d.setupLightsView(Z),Me.length>0&&Vn(K,H,Z),G&&pe.viewport(T.copy(G)),K.length>0&&tt(K,H,Z),Me.length>0&&tt(Me,H,Z),we.length>0&&tt(we,H,Z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Vn(w,H,Z){const G=Se.isWebGL2;J===null&&(J=new Nn(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Zi:ri,minFilter:Yi,samples:G&&s===!0?4:0})),p.getDrawingBufferSize(P),G?J.setSize(P.x,P.y):J.setSize(Nr(P.x),Nr(P.y));const K=p.getRenderTarget();p.setRenderTarget(J),p.clear();const Me=p.toneMapping;p.toneMapping=pn,tt(w,H,Z),p.toneMapping=Me,oe.updateMultisampleRenderTarget(J),oe.updateRenderTargetMipmap(J),p.setRenderTarget(K)}function tt(w,H,Z){const G=H.isScene===!0?H.overrideMaterial:null;for(let K=0,Me=w.length;K<Me;K++){const we=w[K],Pe=we.object,Re=we.geometry,ke=G===null?we.material:G,ze=we.group;Pe.layers.test(Z.layers)&&_n(Pe,H,Z,Re,ke,ze)}}function _n(w,H,Z,G,K,Me){w.onBeforeRender(p,H,Z,G,K,Me),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(p,H,Z,G,w,Me),K.transparent===!0&&K.side===lr?(K.side=Qt,K.needsUpdate=!0,p.renderBufferDirect(Z,H,G,K,w,Me),K.side=ii,K.needsUpdate=!0,p.renderBufferDirect(Z,H,G,K,w,Me),K.side=lr):p.renderBufferDirect(Z,H,G,K,w,Me),w.onAfterRender(p,H,Z,G,K,Me)}function qt(w,H,Z){H.isScene!==!0&&(H=ee);const G=j.get(w),K=d.state.lights,Me=d.state.shadowsArray,we=K.state.version,Pe=We.getParameters(w,K.state,Me,H,Z),Re=We.getProgramCacheKey(Pe);let ke=G.programs;G.environment=w.isMeshStandardMaterial?H.environment:null,G.fog=H.fog,G.envMap=(w.isMeshStandardMaterial?rt:qe).get(w.envMap||G.environment),ke===void 0&&(w.addEventListener("dispose",Oe),ke=new Map,G.programs=ke);let ze=ke.get(Re);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===we)return sa(w,Pe),ze}else Pe.uniforms=We.getUniforms(w),w.onBuild(Z,Pe,p),w.onBeforeCompile(Pe,p),ze=We.acquireProgram(Pe,Re),ke.set(Re,ze),G.uniforms=Pe.uniforms;const Fe=G.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Fe.clippingPlanes=y.uniform),sa(w,Pe),G.needsLights=Wl(w),G.lightsStateVersion=we,G.needsLights&&(Fe.ambientLightColor.value=K.state.ambient,Fe.lightProbe.value=K.state.probe,Fe.directionalLights.value=K.state.directional,Fe.directionalLightShadows.value=K.state.directionalShadow,Fe.spotLights.value=K.state.spot,Fe.spotLightShadows.value=K.state.spotShadow,Fe.rectAreaLights.value=K.state.rectArea,Fe.ltc_1.value=K.state.rectAreaLTC1,Fe.ltc_2.value=K.state.rectAreaLTC2,Fe.pointLights.value=K.state.point,Fe.pointLightShadows.value=K.state.pointShadow,Fe.hemisphereLights.value=K.state.hemi,Fe.directionalShadowMap.value=K.state.directionalShadowMap,Fe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Fe.spotShadowMap.value=K.state.spotShadowMap,Fe.spotLightMatrix.value=K.state.spotLightMatrix,Fe.spotLightMap.value=K.state.spotLightMap,Fe.pointShadowMap.value=K.state.pointShadowMap,Fe.pointShadowMatrix.value=K.state.pointShadowMatrix);const at=ze.getUniforms(),Ft=Or.seqWithValue(at.seq,Fe);return G.currentProgram=ze,G.uniformsList=Ft,ze}function sa(w,H){const Z=j.get(w);Z.outputEncoding=H.outputEncoding,Z.instancing=H.instancing,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function Gl(w,H,Z,G,K){H.isScene!==!0&&(H=ee),oe.resetTextureUnits();const Me=H.fog,we=G.isMeshStandardMaterial?H.environment:null,Pe=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Fn,Re=(G.isMeshStandardMaterial?rt:qe).get(G.envMap||we),ke=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ze=!!G.normalMap&&!!Z.attributes.tangent,Fe=!!Z.morphAttributes.position,at=!!Z.morphAttributes.normal,Ft=!!Z.morphAttributes.color,vn=G.toneMapped?p.toneMapping:pn,Gn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ot=Gn!==void 0?Gn.length:0,Ne=j.get(G),Zr=d.state.lights;if(X===!0&&($===!0||w!==S)){const Nt=w===S&&G.id===M;y.setState(G,w,Nt)}let _t=!1;G.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Zr.state.version||Ne.outputEncoding!==Pe||K.isInstancedMesh&&Ne.instancing===!1||!K.isInstancedMesh&&Ne.instancing===!0||K.isSkinnedMesh&&Ne.skinning===!1||!K.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Re||G.fog===!0&&Ne.fog!==Me||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==y.numPlanes||Ne.numIntersection!==y.numIntersection)||Ne.vertexAlphas!==ke||Ne.vertexTangents!==ze||Ne.morphTargets!==Fe||Ne.morphNormals!==at||Ne.morphColors!==Ft||Ne.toneMapping!==vn||Se.isWebGL2===!0&&Ne.morphTargetsCount!==ot)&&(_t=!0):(_t=!0,Ne.__version=G.version);let Hn=Ne.currentProgram;_t===!0&&(Hn=qt(G,H,K));let aa=!1,Oi=!1,Kr=!1;const Tt=Hn.getUniforms(),Wn=Ne.uniforms;if(pe.useProgram(Hn.program)&&(aa=!0,Oi=!0,Kr=!0),G.id!==M&&(M=G.id,Oi=!0),aa||S!==w){if(Tt.setValue(N,"projectionMatrix",w.projectionMatrix),Se.logarithmicDepthBuffer&&Tt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),S!==w&&(S=w,Oi=!0,Kr=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Nt=Tt.map.cameraPosition;Nt!==void 0&&Nt.setValue(N,ie.setFromMatrixPosition(w.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Tt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||K.isSkinnedMesh)&&Tt.setValue(N,"viewMatrix",w.matrixWorldInverse)}if(K.isSkinnedMesh){Tt.setOptional(N,K,"bindMatrix"),Tt.setOptional(N,K,"bindMatrixInverse");const Nt=K.skeleton;Nt&&(Se.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),Tt.setValue(N,"boneTexture",Nt.boneTexture,oe),Tt.setValue(N,"boneTextureSize",Nt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Jr=Z.morphAttributes;if((Jr.position!==void 0||Jr.normal!==void 0||Jr.color!==void 0&&Se.isWebGL2===!0)&&re.update(K,Z,G,Hn),(Oi||Ne.receiveShadow!==K.receiveShadow)&&(Ne.receiveShadow=K.receiveShadow,Tt.setValue(N,"receiveShadow",K.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Wn.envMap.value=Re,Wn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Oi&&(Tt.setValue(N,"toneMappingExposure",p.toneMappingExposure),Ne.needsLights&&Hl(Wn,Kr),Me&&G.fog===!0&&Xt.refreshFogUniforms(Wn,Me),Xt.refreshMaterialUniforms(Wn,G,z,L,J),Or.upload(N,Ne.uniformsList,Wn,oe)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Or.upload(N,Ne.uniformsList,Wn,oe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Tt.setValue(N,"center",K.center),Tt.setValue(N,"modelViewMatrix",K.modelViewMatrix),Tt.setValue(N,"normalMatrix",K.normalMatrix),Tt.setValue(N,"modelMatrix",K.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Nt=G.uniformsGroups;for(let Qr=0,jl=Nt.length;Qr<jl;Qr++)if(Se.isWebGL2){const oa=Nt[Qr];fe.update(oa,Hn),fe.bind(oa,Hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hn}function Hl(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Wl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(w,H,Z){j.get(w.texture).__webglTexture=H,j.get(w.depthTexture).__webglTexture=Z;const G=j.get(w);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=Z===void 0,G.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,H){const Z=j.get(w);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,Z=0){x=w,g=H,b=Z;let G=!0,K=null,Me=!1,we=!1;if(w){const Re=j.get(w);Re.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),G=!1):Re.__webglFramebuffer===void 0?oe.setupRenderTarget(w):Re.__hasExternalTextures&&oe.rebindTextures(w,j.get(w.texture).__webglTexture,j.get(w.depthTexture).__webglTexture);const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(we=!0);const ze=j.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(K=ze[H],Me=!0):Se.isWebGL2&&w.samples>0&&oe.useMultisampledRTT(w)===!1?K=j.get(w).__webglMultisampledFramebuffer:K=ze,T.copy(w.viewport),O.copy(w.scissor),_=w.scissorTest}else T.copy(U).multiplyScalar(z).floor(),O.copy(R).multiplyScalar(z).floor(),_=k;if(pe.bindFramebuffer(36160,K)&&Se.drawBuffers&&G&&pe.drawBuffers(w,K),pe.viewport(T),pe.scissor(O),pe.setScissorTest(_),Me){const Re=j.get(w.texture);N.framebufferTexture2D(36160,36064,34069+H,Re.__webglTexture,Z)}else if(we){const Re=j.get(w.texture),ke=H||0;N.framebufferTextureLayer(36160,36064,Re.__webglTexture,Z||0,ke)}M=-1},this.readRenderTargetPixels=function(w,H,Z,G,K,Me,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=j.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){pe.bindFramebuffer(36160,Pe);try{const Re=w.texture,ke=Re.format,ze=Re.type;if(ke!==ln&&C.convert(ke)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=ze===Zi&&(_e.has("EXT_color_buffer_half_float")||Se.isWebGL2&&_e.has("EXT_color_buffer_float"));if(ze!==ri&&C.convert(ze)!==N.getParameter(35738)&&!(ze===$n&&(Se.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-G&&Z>=0&&Z<=w.height-K&&N.readPixels(H,Z,G,K,C.convert(ke),C.convert(ze),Me)}finally{const Re=x!==null?j.get(x).__webglFramebuffer:null;pe.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(w,H,Z=0){const G=Math.pow(2,-Z),K=Math.floor(H.image.width*G),Me=Math.floor(H.image.height*G);oe.setTexture2D(H,0),N.copyTexSubImage2D(3553,Z,0,0,w.x,w.y,K,Me),pe.unbindTexture()},this.copyTextureToTexture=function(w,H,Z,G=0){const K=H.image.width,Me=H.image.height,we=C.convert(Z.format),Pe=C.convert(Z.type);oe.setTexture2D(Z,0),N.pixelStorei(37440,Z.flipY),N.pixelStorei(37441,Z.premultiplyAlpha),N.pixelStorei(3317,Z.unpackAlignment),H.isDataTexture?N.texSubImage2D(3553,G,w.x,w.y,K,Me,we,Pe,H.image.data):H.isCompressedTexture?N.compressedTexSubImage2D(3553,G,w.x,w.y,H.mipmaps[0].width,H.mipmaps[0].height,we,H.mipmaps[0].data):N.texSubImage2D(3553,G,w.x,w.y,we,Pe,H.image),G===0&&Z.generateMipmaps&&N.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(w,H,Z,G,K=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=w.max.x-w.min.x+1,we=w.max.y-w.min.y+1,Pe=w.max.z-w.min.z+1,Re=C.convert(G.format),ke=C.convert(G.type);let ze;if(G.isData3DTexture)oe.setTexture3D(G,0),ze=32879;else if(G.isDataArrayTexture)oe.setTexture2DArray(G,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,G.flipY),N.pixelStorei(37441,G.premultiplyAlpha),N.pixelStorei(3317,G.unpackAlignment);const Fe=N.getParameter(3314),at=N.getParameter(32878),Ft=N.getParameter(3316),vn=N.getParameter(3315),Gn=N.getParameter(32877),ot=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;N.pixelStorei(3314,ot.width),N.pixelStorei(32878,ot.height),N.pixelStorei(3316,w.min.x),N.pixelStorei(3315,w.min.y),N.pixelStorei(32877,w.min.z),Z.isDataTexture||Z.isData3DTexture?N.texSubImage3D(ze,K,H.x,H.y,H.z,Me,we,Pe,Re,ke,ot.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(ze,K,H.x,H.y,H.z,Me,we,Pe,Re,ot.data)):N.texSubImage3D(ze,K,H.x,H.y,H.z,Me,we,Pe,Re,ke,ot),N.pixelStorei(3314,Fe),N.pixelStorei(32878,at),N.pixelStorei(3316,Ft),N.pixelStorei(3315,vn),N.pixelStorei(32877,Gn),K===0&&G.generateMipmaps&&N.generateMipmap(ze),pe.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?oe.setTextureCube(w,0):w.isData3DTexture?oe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?oe.setTexture2DArray(w,0):oe.setTexture2D(w,0),pe.unbindTexture()},this.resetState=function(){g=0,b=0,x=null,pe.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class sm extends Al{}sm.prototype.isWebGL1Renderer=!0;class am extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class om{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new B;class Rn{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),s=Ye(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _o extends $t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vo=new Qe,xo=new Qe,Cr=[],lm=new Qe,Gi=new Kt;let bo=class extends Kt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _o(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,lm)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Gi.geometry=this.geometry,Gi.material=this.material,Gi.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,vo),xo.multiplyMatrices(n,vo),Gi.matrixWorld=xo,Gi.raycast(e,Cr);for(let o=0,a=Cr.length;o<a;o++){const l=Cr[o];l.instanceId=s,l.object=this,t.push(l)}Cr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _o(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};class ta extends cn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new B,d=new B,m=[],v=[],p=[],h=[];for(let g=0;g<=n;g++){const b=[],x=g/n;let M=0;g==0&&o==0?M=.5/t:g==n&&l==Math.PI&&(M=-.5/t);for(let S=0;S<=t;S++){const T=S/t;f.x=-e*Math.cos(i+T*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(i+T*s)*Math.sin(o+x*a),v.push(f.x,f.y,f.z),d.copy(f).normalize(),p.push(d.x,d.y,d.z),h.push(T+M,1-x),b.push(u++)}c.push(b)}for(let g=0;g<n;g++)for(let b=0;b<t;b++){const x=c[g][b+1],M=c[g][b],S=c[g+1][b],T=c[g+1][b+1];(g!==0||o>0)&&m.push(x,M,T),(g!==n-1||l<Math.PI)&&m.push(M,S,T)}this.setIndex(m),this.setAttribute("position",new Rt(v,3)),this.setAttribute("normal",new Rt(p,3)),this.setAttribute("uv",new Rt(h,2))}static fromJSON(e){return new ta(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cm extends cn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new B,s=new B;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let u=0,c=l.length;u<c;++u){const f=l[u],d=f.start,m=f.count;for(let v=d,p=d+m;v<p;v+=3)for(let h=0;h<3;h++){const g=a.getX(v+h),b=a.getX(v+(h+1)%3);i.fromBufferAttribute(o,g),s.fromBufferAttribute(o,b),Mo(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let u=0;u<3;u++){const c=3*a+u,f=3*a+(u+1)%3;i.fromBufferAttribute(o,c),s.fromBufferAttribute(o,f),Mo(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Rt(t,3))}}}function Mo(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class um extends ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const So={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class fm{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){a++,s===!1&&i.onStart!==void 0&&i.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,i.onProgress!==void 0&&i.onProgress(c,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const m=u[f],v=u[f+1];if(m.global&&(m.lastIndex=0),m.test(c))return v}return null}}}const Tl=new fm;class Cl{constructor(e){this.manager=e!==void 0?e:Tl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class dm extends Cl{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=So.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ji("img");function l(){c(),So.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class yo extends Cl{constructor(e){super(e)}load(e,t,n,i){const s=new zt,o=new dm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class hm extends $e{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ls=new Qe,wo=new B,Eo=new B;class pm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wo.setFromMatrixPosition(e.matrixWorld),t.position.copy(wo),Eo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eo),t.updateMatrixWorld(),Ls.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ls),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ls)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mm extends pm{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}let gm=class extends hm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DefaultUp),this.updateMatrix(),this.target=new $e,this.shadow=new mm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};class _m extends cn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ll{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ao(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ao();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ao(){return(typeof performance>"u"?Date:performance).now()}class Hs extends om{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class vm{constructor(e,t,n=0,i=1/0){this.ray=new ml(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ws(e,this,n,t),n.sort(To),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ws(e[i],this,n,t);return n.sort(To),n}}function To(r,e){return r.distance-e.distance}function Ws(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Ws(i[s],e,t,!0)}}class Co{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Lo=new B,Lr=new B;class xm{constructor(e=new B,t=new B){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Lo.subVectors(e,this.start),Lr.subVectors(this.end,this.start);const n=Lr.dot(Lr);let s=Lr.dot(Lo)/n;return t&&(s=Et(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qs);const bm={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Hr{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Mm=new $s(-1,1,1,-1,0,1),na=new cn;na.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3));na.setAttribute("uv",new Rt([0,2,0,0,2,0],2));class Sm{constructor(e){this._mesh=new Kt(na,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Mm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ym extends Hr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=kr.clone(e.uniforms),this.material=new gn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Sm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Do extends Hr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class wm extends Hr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Em{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Ee);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Nn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ym(bm),this.clock=new Ll}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Do!==void 0&&(o instanceof Do?n=!0:o instanceof wm&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Dl extends Hr{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Be}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Am=(r,e,t)=>{r.renderer=new Al({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),r.composer=new Em(r.renderer),r.composer.addPass(new Dl(r.scene,In(r.camera)))},Po=(r,e,t)=>{r.renderer&&(e?r.renderer.outputEncoding=Fn:r.renderer.outputEncoding=Je,t?r.renderer.toneMapping=pn:r.renderer.toneMapping=al)},Ro=(r,e,t)=>{var n,i,s,o,a,l,u,c;!r.renderer||!r.composer||((i=(n=r.renderer).setSize)==null||i.call(n,e.width,e.height),(o=(s=r.renderer).setPixelRatio)==null||o.call(s,t),(l=(a=r.composer).setSize)==null||l.call(a,e.width,e.height),(c=(u=r.composer).setPixelRatio)==null||c.call(u,t))},Io=(r,e,t)=>{r.renderer&&(r.renderer.shadowMap.enabled=e,r.renderer.shadowMap.type=t)},Jt=r=>r.userData,Tm=(r,e)=>{r.pointer.update(t=>r.renderer?t.set(e.offsetX/r.renderer.domElement.clientWidth*2-1,-(e.offsetY/r.renderer.domElement.clientHeight)*2+1):t)},Pl=(r,e,t,n)=>(r.raycaster.setFromCamera(e,t),r.raycaster.intersectObjects(n,!1)),Cm=(r,e)=>r.object.uuid!==e.object.uuid||r.instanceId!==e.instanceId,Lm=(r,e,t)=>{let n=In(r.camera);const i=r.camera.subscribe(u=>n=u);ct(i);let s=In(r.pointer);const o=r.pointer.subscribe(u=>s=u);ct(o);let a;const l=u=>{var d,m;u.preventDefault();const c=u.type;r.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,Tm(r,u);const f=Dm(e,s,n);if(c==="pointerdown"&&(a=f?{object:f.object,instanceId:f.instanceId}:null),c==="click"){if(!Pm(f,a)){a=null;return}a=null}f&&((m=(d=Jt(f.object)).eventDispatcher)==null||m.call(d,c,{...f,event:u}))};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function Dm(r,e,t){if(r.interactiveObjects.size===0||r.raycastableObjects.size===0)return null;const n=Pl(r,e,t,Array.from(r.raycastableObjects));return n.length===0||!r.interactiveObjects.has(n[0].object)?null:n[0]}function Pm(r,e){return!r||!e?!1:r.object.uuid===e.object.uuid&&r.instanceId===e.instanceId}const Rm=(r,e)=>{let t=In(r.pointerOverCanvas);const n=r.pointerOverCanvas.subscribe(u=>t=u);ct(n);let i=In(r.camera);const s=r.camera.subscribe(u=>i=u);ct(s);let o=In(r.pointer);const a=r.pointer.subscribe(u=>o=u);return ct(a),{raycast:()=>{var f,d,m,v,p,h,g,b;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const u=t?Pl(e,o,i,Array.from(e.raycastableObjects)):[],c=u.length&&e.interactiveObjects.has(u[0].object)?u[0]:null;c?e.lastIntersection?e.lastIntersection&&Cm(e.lastIntersection,c)&&((h=(p=Jt(e.lastIntersection.object)).eventDispatcher)==null||h.call(p,"pointerleave",e.lastIntersection),(b=(g=Jt(c.object)).eventDispatcher)==null||b.call(g,"pointerenter",c)):(v=(m=Jt(c.object)).eventDispatcher)==null||v.call(m,"pointerenter",c):e.lastIntersection&&((d=(f=Jt(e.lastIntersection.object)).eventDispatcher)==null||d.call(f,"pointerleave",e.lastIntersection)),e.lastIntersection=c}}},Wr=typeof window<"u",Im=r=>{if(!Wr)return;let e;const t=()=>{r(),e=requestAnimationFrame(t)};t(),ct(()=>{e&&cancelAnimationFrame(e)})},Om=(r,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,s)=>s.order?!0:i,!1),n=r.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,s)=>(i.order??0)>(s.order??0)?1:-1).forEach(i=>i.fn(r,n)):e.frameHandlers.forEach(i=>i.fn(r,n))},zm=r=>{r.debugFrameloop&&(r.frame+=1,console.log(`frame: ${r.frame}${Object.keys(r.invalidations).length>0?", requested by ↴":""}`),Object.keys(r.invalidations).length>0&&console.table(r.invalidations),r.invalidations={})},Fm=(r,e,t,n)=>{let i=In(r.camera);const s=r.camera.subscribe(a=>i=a);ct(s);const{raycast:o}=Rm(r,e);Im(()=>{n.dispose();const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),a&&(!i||!r.composer||!r.renderer||(Om(r,t),r.composer.passes.length>1?r.composer.render():r.renderer.render(r.scene,i),zm(t),t.frameInvalidated=!1,t.advance=!1))})},Nm=()=>{const r=new kt(75,0,.1,1e3);return Jt(r).threlteDefaultCamera=!0,r.position.z=5,r.lookAt(0,0,0),r},Um=r=>{const e=r.size.subscribe(t=>{Jt(In(r.camera)).threlteDefaultCamera&&r.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),r.invalidate("Default camera: aspect ratio changed"),i})});ct(e)},Bm=(r,e,t,n,i,s,o)=>{const a={audioListeners:new Map,addAudioListener:(g,b)=>{if(b=b??"default",a.audioListeners.has(b)){console.warn(`An AudioListener with the id "${b}" has already been added, aborting.`);return}a.audioListeners.set(b,g)},removeAudioListener:g=>{if(g=g??"default",!a.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}a.audioListeners.delete(g)},getAudioListener:g=>{if(g=g??"default",!a.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}return a.audioListeners.get(g)}},l={debugFrameloop:s,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},u={size:Jl([n,i],([g,b])=>g||b),pointer:St(new Ee),pointerOverCanvas:St(!1),clock:new Ll,camera:St(Nm()),scene:new am,renderer:void 0,composer:void 0,invalidate:g=>{l.frameInvalidated=!0,l.debugFrameloop&&g&&(l.invalidations[g]=l.invalidations[g]?l.invalidations[g]+1:1)},advance:()=>{l.advance=!0}},c={flat:St(e),linear:St(r),dpr:St(t),setCamera:g=>{u.camera.set(g),u.composer&&(u.composer.passes.forEach(b=>{b instanceof Dl&&(b.camera=g)}),u.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new vm,lastIntersection:null,addRaycastableObject:g=>{c.raycastableObjects.add(g)},removeRaycastableObject:g=>{c.raycastableObjects.delete(g)},addInteractiveObject:g=>{c.interactiveObjects.add(g)},removeInteractiveObject:g=>{c.interactiveObjects.delete(g)},addPass:g=>{u.composer&&(u.composer.addPass(g),u.invalidate("Canvas: adding pass"))},removePass:g=>{u.composer&&(u.composer.removePass(g),u.invalidate("Canvas: removing pass"))}},f={dispose:async(g=!1)=>{await qi(),!(!f.shouldDispose&&!g)&&(f.disposableObjects.forEach((b,x)=>{var M;(b===0||g)&&((M=x==null?void 0:x.dispose)==null||M.call(x),f.disposableObjects.delete(x))}),f.shouldDispose=!1)},collectDisposableObjects:(g,b)=>{const x=b??[];return g&&(g!=null&&g.dispose&&typeof g.dispose=="function"&&g.type!=="Scene"&&x.push(g),Object.entries(g).forEach(([M,S])=>{if(M==="parent"||M==="children"||typeof S!="object")return;const T=S;T!=null&&T.dispose&&f.collectDisposableObjects(T,x)})),x},addDisposableObjects:g=>{g.forEach(b=>{const x=f.disposableObjects.get(b);x?f.disposableObjects.set(b,x+1):f.disposableObjects.set(b,1)})},removeDisposableObjects:g=>{g.length!==0&&(g.forEach(b=>{const x=f.disposableObjects.get(b);x&&x>0&&f.disposableObjects.set(b,x-1)}),f.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return an("threlte",u),an("threlte-root",c),an("threlte-render-context",l),an("threlte-audio-context",a),an("threlte-disposal-context",f),{ctx:u,rootCtx:c,renderCtx:l,audioCtx:a,disposalCtx:f,getCtx:()=>u,getRootCtx:()=>c,getRenderCtx:()=>l,getAudioCtx:()=>a,getDisposalCtx:()=>f}};function jr(r,e){const t=St(r);let n=r;const i=t.subscribe(a=>n=a);return ct(i),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(a),e==null||e(a,l)},update:a=>{const l=a(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const u=n;t.set(l),e==null||e(l,u)}}}const en=()=>mn("threlte");function km(r){let e;const t=r[8].default,n=Gt(t,r,r[7],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&128)&&Ht(n,t,i,i[7],e?jt(t,i[7],s,null):Wt(i[7]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}const Vm=()=>({onChildMount:mn("threlte-hierarchical-object-on-mount"),onChildDestroy:mn("threlte-hierarchical-object-on-destroy")}),Rl=()=>mn("threlte-hierarchical-parent-context");function Gm(r,e,t){var g;let n,{$$slots:i={},$$scope:s}=e,{object:o=void 0}=e,{children:a=[]}=e,{onChildMount:l=void 0}=e;const u=b=>{a.push(b),t(1,a),l==null||l(b)};let{onChildDestroy:c=void 0}=e;const f=b=>{const x=a.findIndex(M=>M.uuid===b.uuid);x!==-1&&a.splice(x,1),t(1,a),c==null||c(b)},{invalidate:d}=en(),m=Rl();nt(r,m,b=>t(6,n=b));let{parent:v=n}=e;const p=Vm();o&&((g=p.onChildMount)==null||g.call(p,o),d("HierarchicalObject: object added"));const h=jr(o,(b,x)=>{var M,S;x&&((M=p.onChildDestroy)==null||M.call(p,x),d("HierarchicalObject: object added")),b&&((S=p.onChildMount)==null||S.call(p,b),d("HierarchicalObject: object removed"))});return ct(()=>{var b;o&&((b=p.onChildDestroy)==null||b.call(p,o),d("HierarchicalObject: object removed"))}),an("threlte-hierarchical-object-on-mount",u),an("threlte-hierarchical-object-on-destroy",f),an("threlte-hierarchical-parent-context",h),r.$$set=b=>{"object"in b&&t(3,o=b.object),"children"in b&&t(1,a=b.children),"onChildMount"in b&&t(4,l=b.onChildMount),"onChildDestroy"in b&&t(5,c=b.onChildDestroy),"parent"in b&&t(2,v=b.parent),"$$scope"in b&&t(7,s=b.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(2,v=n),r.$$.dirty&8&&h.set(o)},[m,a,v,o,l,c,n,s,i]}class Hm extends Ze{constructor(e){super(),Ke(this,e,Gm,km,Xe,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function Wm(r){let e;const t=r[1].default,n=Gt(t,r,r[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&Ht(n,t,i,i[4],e?jt(t,i[4],s,null):Wt(i[4]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function jm(r){let e,t;return e=new Hm({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[Wm]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Te(e.$$.fragment,n)},m(n,i){Ce(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function Xm(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const o=l=>s.add(l),a=l=>s.remove(l);return r.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[s,n,o,a,i]}class Xr extends Ze{constructor(e){super(),Ke(this,e,Xm,jm,Xe,{object:0})}}const qm=()=>{const r=St({width:0,height:0});let e={width:0,height:0};const t=r.subscribe(o=>e=o);ct(t);let n;const i=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:l}=n.parentElement;(a!==o.width||l!==o.height)&&r.set({width:a,height:l})},s=o=>{n=o,i(),window.addEventListener("resize",i)};return Wr?(ct(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:s,parentSize:r}):{parentSize:r,parentSizeAction:s}};function Oo(r){let e,t;return e=new Xr({props:{object:r[0].scene,$$slots:{default:[Ym]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Te(e.$$.fragment,n)},m(n,i){Ce(e,n,i),t=!0},p(n,i){const s={};i[1]&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function Ym(r){let e;const t=r[29].default,n=Gt(t,r,r[33],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&4)&&Ht(n,t,i,i[33],e?jt(t,i[33],s,null):Wt(i[33]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function Zm(r){let e,t,n,i,s=r[2]&&Oo(r);return{c(){e=Qi("canvas"),s&&s.c(),this.h()},l(o){e=$i(o,"CANVAS",{class:!0});var a=er(e);s&&s.l(a),a.forEach(He),this.h()},h(){Ur(e,"class","svelte-o3oskp")},m(o,a){et(o,e,a),s&&s.m(e,null),r[30](e),t=!0,n||(i=[Xl(r[3].call(null,e)),jn(e,"click",r[9]),jn(e,"contextmenu",r[10]),jn(e,"pointerup",r[13]),jn(e,"pointerdown",r[11]),jn(e,"pointermove",r[12]),jn(e,"pointerenter",r[31]),jn(e,"pointerleave",r[32])],n=!0)},p(o,a){o[2]?s?(s.p(o,a),a[0]&4&&de(s,1)):(s=Oo(o),s.c(),de(s,1),s.m(e,null)):s&&(tr(),ge(s,1,1,()=>{s=null}),nr())},i(o){t||(de(s),t=!0)},o(o){ge(s),t=!1},d(o){o&&He(e),s&&s.d(),r[30](null),n=!1,ql(i)}}}const zo=new Set;function Km(r,e,t){let n,i,s,o,{$$slots:a={},$$scope:l}=e,{dpr:u=Wr?window.devicePixelRatio:1}=e,{flat:c=!1}=e,{linear:f=!1}=e,{frameloop:d="demand"}=e,{debugFrameloop:m=!1}=e,{shadows:v=!0}=e,{shadowMapType:p=nl}=e,{size:h=void 0}=e,{rendererParameters:g=void 0}=e,b,x=!1;const M=St(h),{parentSize:S,parentSizeAction:T}=qm(),O=Bm(f,c,u,M,S,m,d),{getCtx:_,renderCtx:A,disposalCtx:L}=O,{ctx:z,rootCtx:W,audioCtx:D}=O;Um(z),zo.add(z.invalidate),ct(()=>{zo.delete(z.invalidate)});const{size:U,scene:R}=z;nt(r,U,ce=>t(26,i=ce));const{flat:k,linear:Q,dpr:X}=W;nt(r,k,ce=>t(27,s=ce)),nt(r,Q,ce=>t(28,o=ce)),nt(r,X,ce=>t(25,n=ce)),an("threlte-parent",St(R)),$o(()=>{b&&(Am(z,b,g),Po(z,o,s),Ro(z,i,n),Io(z,v,p),t(2,x=!0))}),Fm(z,W,A,L);const{onClick:$,onContextMenu:J,onPointerDown:I,onPointerMove:P,onPointerUp:ie}=Lm(z,W,A);ct(()=>{L.dispose(!0)});function ee(ce){Tn[ce?"unshift":"push"](()=>{b=ce,t(1,b)})}const se=()=>_().pointerOverCanvas.set(!0),N=()=>_().pointerOverCanvas.set(!1);return r.$$set=ce=>{"dpr"in ce&&t(14,u=ce.dpr),"flat"in ce&&t(15,c=ce.flat),"linear"in ce&&t(16,f=ce.linear),"frameloop"in ce&&t(17,d=ce.frameloop),"debugFrameloop"in ce&&t(18,m=ce.debugFrameloop),"shadows"in ce&&t(19,v=ce.shadows),"shadowMapType"in ce&&t(20,p=ce.shadowMapType),"size"in ce&&t(21,h=ce.size),"rendererParameters"in ce&&t(22,g=ce.rendererParameters),"$$scope"in ce&&t(33,l=ce.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2097152&&M.set(h),r.$$.dirty[0]&65536&&sn(Q,o=f,o),r.$$.dirty[0]&32768&&sn(k,s=c,s),r.$$.dirty[0]&16384&&sn(X,n=u,n),r.$$.dirty[0]&402653184&&Po(_(),o,s),r.$$.dirty[0]&100663296&&Ro(_(),i,n),r.$$.dirty[0]&1572864&&Io(_(),v,p)},[z,b,x,T,_,U,k,Q,X,$,J,I,P,ie,u,c,f,d,m,v,p,h,g,W,D,n,i,s,o,a,ee,se,N,l]}class Jm extends Ze{constructor(e){super(),Ke(this,e,Km,Zm,Xe,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const ia=()=>mn("threlte-root"),Qm=()=>mn("threlte-disposal-context");function $m(r){let e;const t=r[9].default,n=Gt(t,r,r[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&Ht(n,t,i,i[8],e?jt(t,i[8],s,null):Wt(i[8]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}const Fo="threlte-disposable-object-context";function eg(r,e,t){let n,i,{$$slots:s={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:l,removeDisposableObjects:u}=Qm();let{object:c=void 0}=e,f=c,{dispose:d=void 0}=e;const m=mn(Fo);nt(r,m,h=>t(7,i=h));const v=St(d??i??!0);nt(r,v,h=>t(6,n=h)),an(Fo,v);let p=n?a(c):[];return l(p),ct(()=>{u(p)}),r.$$set=h=>{"object"in h&&t(2,c=h.object),"dispose"in h&&t(3,d=h.dispose),"$$scope"in h&&t(8,o=h.$$scope)},r.$$.update=()=>{r.$$.dirty&136&&v.set(d??i??!0),r.$$.dirty&116&&c!==f&&(u(p),t(5,p=n?a(c):[]),l(p),t(4,f=c))},[m,v,c,d,f,p,n,i,o,s]}class ai extends Ze{constructor(e){super(),Ke(this,e,eg,$m,Xe,{object:2,dispose:3})}}function tg(r,e,t){let n,i,{object:s}=e;const o=jr(s);nt(r,o,u=>t(4,i=u));const a=mn("threlte-layers");nt(r,a,u=>t(3,n=u));const{invalidate:l}=en();return r.$$set=u=>{"object"in u&&t(2,s=u.object)},r.$$.update=()=>{if(r.$$.dirty&4&&o.set(s),r.$$.dirty&24){if(n==="all")i.layers.enableAll();else if(n==="none")i.layers.disableAll();else if(Array.isArray(n))for(let u=0;u<32;u+=1){const c=u;n.includes(c)?i.layers.enable(u):i.layers.disable(u)}else n!==void 0&&i.layers.set(n);l("LayerableObject")}},[o,a,s,n,i]}class ng extends Ze{constructor(e){super(),Ke(this,e,tg,null,Xe,{object:2})}}const Ii=(r,e)=>{if(!Wr)return{start:()=>{},stop:()=>{},started:Ql(!1)};const t=mn("threlte-render-context"),n={fn:r,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=St(!1),s=()=>{t.frameHandlers.delete(n),i.set(!1)},o=()=>{t.frameHandlers.add(n),i.set(!0)};return((e==null?void 0:e.autostart)??!0)&&o(),ct(()=>{s()}),{start:o,stop:s,started:{subscribe:i.subscribe}}},Il=()=>{const r=St(!1);return(async()=>{await qi(),r.set(!0)})(),r};function ig(r,e,t){let n,i,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:u=void 0}=e;const c=new B,f=ir(),{invalidate:d}=en(),m=Il();nt(r,m,x=>t(8,i=x));const v=async()=>{i||await qi(),f("transform")},p=async()=>{d("TransformableObject: transformed"),await v()};Jt(s).onTransform=p;const{start:h,stop:g}=Ii(async()=>{u&&!l&&u instanceof $e&&(u.getWorldPosition(c),s.lookAt(c),await v())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),b=jr(s);return nt(r,b,x=>t(7,n=x)),r.$$set=x=>{"object"in x&&t(2,s=x.object),"position"in x&&t(3,o=x.position),"scale"in x&&t(4,a=x.scale),"rotation"in x&&t(5,l=x.rotation),"lookAt"in x&&t(6,u=x.lookAt)},r.$$.update=()=>{r.$$.dirty&4&&b.set(s),r.$$.dirty&232&&(o&&(n.position.set(o.x??0,o.y??0,o.z??0),p()),u&&!l&&(u instanceof $e?h():(g(),n.lookAt(u.x??0,u.y??0,u.z??0),p())),u||g()),r.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set(a.x??1,a.y??1,a.z??1),p()),r.$$.dirty&160&&l&&(n.rotation.set(l.x??0,l.y??0,l.z??0,l.order??"XYZ"),p())},[m,b,s,o,a,l,u,n]}class qr extends Ze{constructor(e){super(),Ke(this,e,ig,null,Xe,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function rg(r,e,t){let n,i,s,{object:o}=e,{viewportAware:a=!1}=e;const l=ir(),{camera:u,invalidate:c}=en();nt(r,u,T=>t(8,s=T));const f=new Vr,d=new Qe,m=T=>T.type==="Mesh",v=new B,p=()=>s?(d.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),f.setFromProjectionMatrix(d),m(o)?f.intersectsObject(o):(o.getWorldPosition(v),f.containsPoint(v))):!0,h=Il();nt(r,h,T=>t(7,i=T));let{inViewport:g=p()}=e;const b=async T=>{T?(i||await qi(),l("viewportenter",o)):(i||await qi(),l("viewportleave",o))},{start:x,stop:M,started:S}=Ii(()=>{const T=p();g===void 0?(t(3,g=p()),b(g)):T!==g&&(b(T),t(3,g=T))},{autostart:a,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return nt(r,S,T=>t(6,n=T)),c("ViewportAwareObject"),r.$$set=T=>{"object"in T&&t(4,o=T.object),"viewportAware"in T&&t(5,a=T.viewportAware),"inViewport"in T&&t(3,g=T.inViewport)},r.$$.update=()=>{r.$$.dirty&96&&(a&&!n?x():!a&&n&&M())},[u,h,S,g,o,a,n]}class sg extends Ze{constructor(e){super(),Ke(this,e,rg,null,Xe,{object:4,viewportAware:5,inViewport:3})}}function ag(r){let e;const t=r[14].default,n=Gt(t,r,r[18],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&262144)&&Ht(n,t,i,i[18],e?jt(t,i[18],s,null):Wt(i[18]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function og(r){let e,t;return e=new Xr({props:{object:r[1],$$slots:{default:[ag]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Te(e.$$.fragment,n)},m(n,i){Ce(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&262144&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function lg(r){let e,t,n,i,s,o,a,l,u;e=new ng({props:{object:r[1]}}),n=new qr({props:{object:r[1],position:r[2],rotation:r[4],scale:r[3],lookAt:r[5]}}),s=new ai({props:{object:r[1],dispose:r[7],$$slots:{default:[og]},$$scope:{ctx:r}}});function c(d){r[15](d)}let f={object:r[1],viewportAware:r[6]};return r[0]!==void 0&&(f.inViewport=r[0]),a=new sg({props:f}),Tn.push(()=>Un(a,"inViewport",c)),a.$on("viewportenter",r[16]),a.$on("viewportleave",r[17]),{c(){Ae(e.$$.fragment),t=ut(),Ae(n.$$.fragment),i=ut(),Ae(s.$$.fragment),o=ut(),Ae(a.$$.fragment)},l(d){Te(e.$$.fragment,d),t=ft(d),Te(n.$$.fragment,d),i=ft(d),Te(s.$$.fragment,d),o=ft(d),Te(a.$$.fragment,d)},m(d,m){Ce(e,d,m),et(d,t,m),Ce(n,d,m),et(d,i,m),Ce(s,d,m),et(d,o,m),Ce(a,d,m),u=!0},p(d,[m]){const v={};m&2&&(v.object=d[1]),e.$set(v);const p={};m&2&&(p.object=d[1]),m&4&&(p.position=d[2]),m&16&&(p.rotation=d[4]),m&8&&(p.scale=d[3]),m&32&&(p.lookAt=d[5]),n.$set(p);const h={};m&2&&(h.object=d[1]),m&128&&(h.dispose=d[7]),m&262146&&(h.$$scope={dirty:m,ctx:d}),s.$set(h);const g={};m&2&&(g.object=d[1]),m&64&&(g.viewportAware=d[6]),!l&&m&1&&(l=!0,g.inViewport=d[0],Bn(()=>l=!1)),a.$set(g)},i(d){u||(de(e.$$.fragment,d),de(n.$$.fragment,d),de(s.$$.fragment,d),de(a.$$.fragment,d),u=!0)},o(d){ge(e.$$.fragment,d),ge(n.$$.fragment,d),ge(s.$$.fragment,d),ge(a.$$.fragment,d),u=!1},d(d){Le(e,d),d&&He(t),Le(n,d),d&&He(i),Le(s,d),d&&He(o),Le(a,d)}}}function cg(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:c=!1}=e,{inViewport:f=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:p=void 0}=e,{visible:h=void 0}=e,{dispose:g=void 0}=e,{userData:b=void 0}=e;const{invalidate:x}=en(),M=()=>s;function S(_){f=_,t(0,f)}function T(_){Ge.call(this,r,_)}function O(_){Ge.call(this,r,_)}return r.$$set=_=>{"object"in _&&t(1,s=_.object),"position"in _&&t(2,o=_.position),"scale"in _&&t(3,a=_.scale),"rotation"in _&&t(4,l=_.rotation),"lookAt"in _&&t(5,u=_.lookAt),"viewportAware"in _&&t(6,c=_.viewportAware),"inViewport"in _&&t(0,f=_.inViewport),"castShadow"in _&&t(8,d=_.castShadow),"receiveShadow"in _&&t(9,m=_.receiveShadow),"frustumCulled"in _&&t(10,v=_.frustumCulled),"renderOrder"in _&&t(11,p=_.renderOrder),"visible"in _&&t(12,h=_.visible),"dispose"in _&&t(7,g=_.dispose),"userData"in _&&t(13,b=_.userData),"$$scope"in _&&t(18,i=_.$$scope)},r.$$.update=()=>{r.$$.dirty&16128&&(h!==void 0&&(M().visible=h),d!==void 0&&(M().castShadow=d),m!==void 0&&(M().receiveShadow=m),v!==void 0&&(M().frustumCulled=v),p!==void 0&&(M().renderOrder=p),b!==void 0&&(M().userData={...M().userData,...b}),x("Object3DInstance: props changed"))},[f,s,o,a,l,u,c,g,d,m,v,p,h,b,n,S,T,O,i]}class Yr extends Ze{constructor(e){super(),Ke(this,e,cg,lg,Xe,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function ug(r){let e;const t=r[17].default,n=Gt(t,r,r[21],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2097152)&&Ht(n,t,i,i[21],e?jt(t,i[21],s,null):Wt(i[21]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function fg(r){let e,t,n;function i(o){r[18](o)}let s={object:r[1],lookAt:r[5],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],position:r[2],scale:r[3],rotation:r[4],viewportAware:r[6],visible:r[11],userData:r[12],dispose:r[13],$$slots:{default:[ug]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.inViewport=r[0]),e=new Yr({props:s}),Tn.push(()=>Un(e,"inViewport",i)),e.$on("viewportenter",r[19]),e.$on("viewportleave",r[20]),{c(){Ae(e.$$.fragment)},l(o){Te(e.$$.fragment,o)},m(o,a){Ce(e,o,a),n=!0},p(o,[a]){const l={};a&2&&(l.object=o[1]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&4096&&(l.userData=o[12]),a&8192&&(l.dispose=o[13]),a&2097152&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],Bn(()=>t=!1)),e.$set(l)},i(o){n||(de(e.$$.fragment,o),n=!0)},o(o){ge(e.$$.fragment,o),n=!1},d(o){Le(e,o)}}}function dg(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{camera:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:u=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:f=!1}=e,{inViewport:d=!1}=e,{castShadow:m=void 0}=e,{receiveShadow:v=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:h=void 0}=e,{visible:g=void 0}=e,{userData:b=void 0}=e,{dispose:x=void 0}=e,{useCamera:M=!1}=e;const S=jr(o);nt(r,S,L=>t(16,n=L));const{setCamera:T}=ia();function O(L){d=L,t(0,d)}function _(L){Ge.call(this,r,L)}function A(L){Ge.call(this,r,L)}return r.$$set=L=>{"camera"in L&&t(1,o=L.camera),"position"in L&&t(2,a=L.position),"scale"in L&&t(3,l=L.scale),"rotation"in L&&t(4,u=L.rotation),"lookAt"in L&&t(5,c=L.lookAt),"viewportAware"in L&&t(6,f=L.viewportAware),"inViewport"in L&&t(0,d=L.inViewport),"castShadow"in L&&t(7,m=L.castShadow),"receiveShadow"in L&&t(8,v=L.receiveShadow),"frustumCulled"in L&&t(9,p=L.frustumCulled),"renderOrder"in L&&t(10,h=L.renderOrder),"visible"in L&&t(11,g=L.visible),"userData"in L&&t(12,b=L.userData),"dispose"in L&&t(13,x=L.dispose),"useCamera"in L&&t(15,M=L.useCamera),"$$scope"in L&&t(21,s=L.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&S.set(o),r.$$.dirty&98304&&M&&T(n)},[d,o,a,l,u,c,f,m,v,p,h,g,b,x,S,M,n,i,O,_,A,s]}class hg extends Ze{constructor(e){super(),Ke(this,e,dg,fg,Xe,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function pg(r){let e;const t=r[20].default,n=Gt(t,r,r[24],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16777216)&&Ht(n,t,i,i[24],e?jt(t,i[24],s,null):Wt(i[24]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function mg(r){let e,t,n;function i(o){r[21](o)}let s={camera:r[0],position:r[2],scale:r[3],rotation:r[4],castShadow:r[6],receiveShadow:r[7],frustumCulled:r[8],renderOrder:r[9],visible:r[10],userData:r[11],dispose:r[12],viewportAware:r[13],lookAt:r[5],useCamera:r[14],$$slots:{default:[pg]},$$scope:{ctx:r}};return r[1]!==void 0&&(s.inViewport=r[1]),e=new hg({props:s}),Tn.push(()=>Un(e,"inViewport",i)),e.$on("viewportenter",r[22]),e.$on("viewportleave",r[23]),{c(){Ae(e.$$.fragment)},l(o){Te(e.$$.fragment,o)},m(o,a){Ce(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.camera=o[0]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.castShadow=o[6]),a&128&&(l.receiveShadow=o[7]),a&256&&(l.frustumCulled=o[8]),a&512&&(l.renderOrder=o[9]),a&1024&&(l.visible=o[10]),a&2048&&(l.userData=o[11]),a&4096&&(l.dispose=o[12]),a&8192&&(l.viewportAware=o[13]),a&32&&(l.lookAt=o[5]),a&16384&&(l.useCamera=o[14]),a&16777216&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],Bn(()=>t=!1)),e.$set(l)},i(o){n||(de(e.$$.fragment,o),n=!0)},o(o){ge(e.$$.fragment,o),n=!1},d(o){Le(e,o)}}}function gg(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:u=void 0}=e,{castShadow:c=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:m=void 0}=e,{visible:v=void 0}=e,{userData:p=void 0}=e,{dispose:h=void 0}=e,{viewportAware:g=!1}=e,{inViewport:b=!1}=e,{useCamera:x=!0}=e,{near:M=void 0}=e,{far:S=void 0}=e,{fov:T=void 0}=e;const{size:O,invalidate:_}=en();nt(r,O,D=>t(19,n=D));const A=new kt(T,n.width/n.height,M,S);function L(D){b=D,t(1,b)}function z(D){Ge.call(this,r,D)}function W(D){Ge.call(this,r,D)}return r.$$set=D=>{"position"in D&&t(2,o=D.position),"scale"in D&&t(3,a=D.scale),"rotation"in D&&t(4,l=D.rotation),"lookAt"in D&&t(5,u=D.lookAt),"castShadow"in D&&t(6,c=D.castShadow),"receiveShadow"in D&&t(7,f=D.receiveShadow),"frustumCulled"in D&&t(8,d=D.frustumCulled),"renderOrder"in D&&t(9,m=D.renderOrder),"visible"in D&&t(10,v=D.visible),"userData"in D&&t(11,p=D.userData),"dispose"in D&&t(12,h=D.dispose),"viewportAware"in D&&t(13,g=D.viewportAware),"inViewport"in D&&t(1,b=D.inViewport),"useCamera"in D&&t(14,x=D.useCamera),"near"in D&&t(16,M=D.near),"far"in D&&t(17,S=D.far),"fov"in D&&t(18,T=D.fov),"$$scope"in D&&t(24,s=D.$$scope)},r.$$.update=()=>{r.$$.dirty&524289&&(t(0,A.aspect=n.width/n.height,A),A.updateProjectionMatrix(),_("PerspectiveCamera: aspect changed")),r.$$.dirty&458753&&(M!==void 0&&t(0,A.near=M,A),S!==void 0&&t(0,A.far=S,A),T!==void 0&&t(0,A.fov=T,A),A.updateProjectionMatrix(),_("PerspectiveCamera: props changed"))},[A,b,o,a,l,u,c,f,d,m,v,p,h,g,x,O,M,S,T,n,i,L,z,W,s]}class _g extends Ze{constructor(e){super(),Ke(this,e,gg,mg,Xe,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const No=[],vg=(r,e)=>{const t=No.find(i=>i instanceof r);if(t)return t;const n=e();return No.push(n),n},Uo={type:"change"},Ds={type:"start"},Bo={type:"end"};let xg=class extends oi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:li.ROTATE,MIDDLE:li.DOLLY,RIGHT:li.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",It),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Uo),n.update(),s=i.NONE},this.update=function(){const C=new B,V=new si().setFromUnitVectors(e.up,new B(0,1,0)),fe=V.clone().invert(),me=new B,ue=new si,xe=2*Math.PI;return function(){const Ie=n.object.position;C.copy(Ie).sub(n.target),C.applyQuaternion(V),a.setFromVector3(C),n.autoRotate&&s===i.NONE&&A(O()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Oe=n.minAzimuthAngle,je=n.maxAzimuthAngle;return isFinite(Oe)&&isFinite(je)&&(Oe<-Math.PI?Oe+=xe:Oe>Math.PI&&(Oe-=xe),je<-Math.PI?je+=xe:je>Math.PI&&(je-=xe),Oe<=je?a.theta=Math.max(Oe,Math.min(je,a.theta)):a.theta=a.theta>(Oe+je)/2?Math.max(Oe,a.theta):Math.min(je,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),C.setFromSpherical(a),C.applyQuaternion(fe),Ie.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,f||me.distanceToSquared(n.object.position)>o||8*(1-ue.dot(n.object.quaternion))>o?(n.dispatchEvent(Uo),me.copy(n.object.position),ue.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",q),n.domElement.removeEventListener("pointerdown",qe),n.domElement.removeEventListener("pointercancel",At),n.domElement.removeEventListener("wheel",Xt),n.domElement.removeEventListener("pointermove",rt),n.domElement.removeEventListener("pointerup",dt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",It)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Co,l=new Co;let u=1;const c=new B;let f=!1;const d=new Ee,m=new Ee,v=new Ee,p=new Ee,h=new Ee,g=new Ee,b=new Ee,x=new Ee,M=new Ee,S=[],T={};function O(){return 2*Math.PI/60/60*n.autoRotateSpeed}function _(){return Math.pow(.95,n.zoomSpeed)}function A(C){l.theta-=C}function L(C){l.phi-=C}const z=function(){const C=new B;return function(fe,me){C.setFromMatrixColumn(me,0),C.multiplyScalar(-fe),c.add(C)}}(),W=function(){const C=new B;return function(fe,me){n.screenSpacePanning===!0?C.setFromMatrixColumn(me,1):(C.setFromMatrixColumn(me,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(fe),c.add(C)}}(),D=function(){const C=new B;return function(fe,me){const ue=n.domElement;if(n.object.isPerspectiveCamera){const xe=n.object.position;C.copy(xe).sub(n.target);let ve=C.length();ve*=Math.tan(n.object.fov/2*Math.PI/180),z(2*fe*ve/ue.clientHeight,n.object.matrix),W(2*me*ve/ue.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(fe*(n.object.right-n.object.left)/n.object.zoom/ue.clientWidth,n.object.matrix),W(me*(n.object.top-n.object.bottom)/n.object.zoom/ue.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(C){n.object.isPerspectiveCamera?u/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(C){n.object.isPerspectiveCamera?u*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(C){d.set(C.clientX,C.clientY)}function Q(C){b.set(C.clientX,C.clientY)}function X(C){p.set(C.clientX,C.clientY)}function $(C){m.set(C.clientX,C.clientY),v.subVectors(m,d).multiplyScalar(n.rotateSpeed);const V=n.domElement;A(2*Math.PI*v.x/V.clientHeight),L(2*Math.PI*v.y/V.clientHeight),d.copy(m),n.update()}function J(C){x.set(C.clientX,C.clientY),M.subVectors(x,b),M.y>0?U(_()):M.y<0&&R(_()),b.copy(x),n.update()}function I(C){h.set(C.clientX,C.clientY),g.subVectors(h,p).multiplyScalar(n.panSpeed),D(g.x,g.y),p.copy(h),n.update()}function P(C){C.deltaY<0?R(_()):C.deltaY>0&&U(_()),n.update()}function ie(C){let V=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),V=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),V=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),V=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),V=!0;break}V&&(C.preventDefault(),n.update())}function ee(){if(S.length===1)d.set(S[0].pageX,S[0].pageY);else{const C=.5*(S[0].pageX+S[1].pageX),V=.5*(S[0].pageY+S[1].pageY);d.set(C,V)}}function se(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const C=.5*(S[0].pageX+S[1].pageX),V=.5*(S[0].pageY+S[1].pageY);p.set(C,V)}}function N(){const C=S[0].pageX-S[1].pageX,V=S[0].pageY-S[1].pageY,fe=Math.sqrt(C*C+V*V);b.set(0,fe)}function ce(){n.enableZoom&&N(),n.enablePan&&se()}function _e(){n.enableZoom&&N(),n.enableRotate&&ee()}function Se(C){if(S.length==1)m.set(C.pageX,C.pageY);else{const fe=ye(C),me=.5*(C.pageX+fe.x),ue=.5*(C.pageY+fe.y);m.set(me,ue)}v.subVectors(m,d).multiplyScalar(n.rotateSpeed);const V=n.domElement;A(2*Math.PI*v.x/V.clientHeight),L(2*Math.PI*v.y/V.clientHeight),d.copy(m)}function pe(C){if(S.length===1)h.set(C.pageX,C.pageY);else{const V=ye(C),fe=.5*(C.pageX+V.x),me=.5*(C.pageY+V.y);h.set(fe,me)}g.subVectors(h,p).multiplyScalar(n.panSpeed),D(g.x,g.y),p.copy(h)}function Ue(C){const V=ye(C),fe=C.pageX-V.x,me=C.pageY-V.y,ue=Math.sqrt(fe*fe+me*me);x.set(0,ue),M.set(0,Math.pow(x.y/b.y,n.zoomSpeed)),U(M.y),b.copy(x)}function j(C){n.enableZoom&&Ue(C),n.enablePan&&pe(C)}function oe(C){n.enableZoom&&Ue(C),n.enableRotate&&Se(C)}function qe(C){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",rt),n.domElement.addEventListener("pointerup",dt)),ne(C),C.pointerType==="touch"?E(C):st(C))}function rt(C){n.enabled!==!1&&(C.pointerType==="touch"?y(C):We(C))}function dt(C){re(C),S.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",rt),n.domElement.removeEventListener("pointerup",dt)),n.dispatchEvent(Bo),s=i.NONE}function At(C){re(C)}function st(C){let V;switch(C.button){case 0:V=n.mouseButtons.LEFT;break;case 1:V=n.mouseButtons.MIDDLE;break;case 2:V=n.mouseButtons.RIGHT;break;default:V=-1}switch(V){case li.DOLLY:if(n.enableZoom===!1)return;Q(C),s=i.DOLLY;break;case li.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;X(C),s=i.PAN}else{if(n.enableRotate===!1)return;k(C),s=i.ROTATE}break;case li.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;k(C),s=i.ROTATE}else{if(n.enablePan===!1)return;X(C),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ds)}function We(C){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;$(C);break;case i.DOLLY:if(n.enableZoom===!1)return;J(C);break;case i.PAN:if(n.enablePan===!1)return;I(C);break}}function Xt(C){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(C.preventDefault(),n.dispatchEvent(Ds),P(C),n.dispatchEvent(Bo))}function It(C){n.enabled===!1||n.enablePan===!1||ie(C)}function E(C){switch(le(C),S.length){case 1:switch(n.touches.ONE){case ci.ROTATE:if(n.enableRotate===!1)return;ee(),s=i.TOUCH_ROTATE;break;case ci.PAN:if(n.enablePan===!1)return;se(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ce(),s=i.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ds)}function y(C){switch(le(C),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Se(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;pe(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;j(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;oe(C),n.update();break;default:s=i.NONE}}function q(C){n.enabled!==!1&&C.preventDefault()}function ne(C){S.push(C)}function re(C){delete T[C.pointerId];for(let V=0;V<S.length;V++)if(S[V].pointerId==C.pointerId){S.splice(V,1);return}}function le(C){let V=T[C.pointerId];V===void 0&&(V=new Ee,T[C.pointerId]=V),V.set(C.pageX,C.pageY)}function ye(C){const V=C.pointerId===S[0].pointerId?S[1]:S[0];return T[V.pointerId]}n.domElement.addEventListener("contextmenu",q),n.domElement.addEventListener("pointerdown",qe),n.domElement.addEventListener("pointercancel",At),n.domElement.addEventListener("wheel",Xt,{passive:!1}),this.update()}};function bg(r){let e,t,n,i;return e=new ai({props:{dispose:r[2],object:r[0]}}),n=new qr({props:{object:r[4],position:r[1]}}),n.$on("transform",r[5]),{c(){Ae(e.$$.fragment),t=ut(),Ae(n.$$.fragment)},l(s){Te(e.$$.fragment,s),t=ft(s),Te(n.$$.fragment,s)},m(s,o){Ce(e,s,o),et(s,t,o),Ce(n,s,o),i=!0},p(s,o){const a={};o[0]&4&&(a.dispose=s[2]),o[0]&1&&(a.object=s[0]),e.$set(a);const l={};o[0]&2&&(l.position=s[1]),n.$set(l)},i(s){i||(de(e.$$.fragment,s),de(n.$$.fragment,s),i=!0)},o(s){ge(e.$$.fragment,s),ge(n.$$.fragment,s),i=!1},d(s){Le(e,s),s&&He(t),Le(n,s)}}}function Mg(r,e,t){let n,{autoRotate:i=void 0}=e,{autoRotateSpeed:s=void 0}=e,{dampingFactor:o=void 0}=e,{enableDamping:a=void 0}=e,{enabled:l=void 0}=e,{enablePan:u=void 0}=e,{enableRotate:c=void 0}=e,{enableZoom:f=void 0}=e,{keyPanSpeed:d=void 0}=e,{keys:m=void 0}=e,{maxAzimuthAngle:v=void 0}=e,{maxDistance:p=void 0}=e,{maxPolarAngle:h=void 0}=e,{maxZoom:g=void 0}=e,{minAzimuthAngle:b=void 0}=e,{minDistance:x=void 0}=e,{minPolarAngle:M=void 0}=e,{minZoom:S=void 0}=e,{mouseButtons:T=void 0}=e,{panSpeed:O=void 0}=e,{rotateSpeed:_=void 0}=e,{screenSpacePanning:A=void 0}=e,{touches:L=void 0}=e,{zoomSpeed:z=void 0}=e,{target:W=void 0}=e,{dispose:D=void 0}=e;const U=Rl();nt(r,U,N=>t(30,n=N));const{renderer:R,invalidate:k}=en();if(!R)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof Js))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const Q=ir(),X=()=>{k("Orbitcontrols: change event"),Q("change")},$=()=>Q("start"),J=()=>Q("end"),I=new xg(n,R.domElement);Jt(n).orbitControls=I,I.addEventListener("change",X),I.addEventListener("start",$),I.addEventListener("end",J),ct(()=>{n&&delete Jt(n).orbitControls,I.removeEventListener("change",X),I.removeEventListener("start",$),I.removeEventListener("end",J)});const{start:P,stop:ie}=Ii(()=>I.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),ee=new $e,se=()=>{t(0,I.target=ee.position,I),I.update(),k("OrbitControls: target changed")};return r.$$set=N=>{"autoRotate"in N&&t(6,i=N.autoRotate),"autoRotateSpeed"in N&&t(7,s=N.autoRotateSpeed),"dampingFactor"in N&&t(8,o=N.dampingFactor),"enableDamping"in N&&t(9,a=N.enableDamping),"enabled"in N&&t(10,l=N.enabled),"enablePan"in N&&t(11,u=N.enablePan),"enableRotate"in N&&t(12,c=N.enableRotate),"enableZoom"in N&&t(13,f=N.enableZoom),"keyPanSpeed"in N&&t(14,d=N.keyPanSpeed),"keys"in N&&t(15,m=N.keys),"maxAzimuthAngle"in N&&t(16,v=N.maxAzimuthAngle),"maxDistance"in N&&t(17,p=N.maxDistance),"maxPolarAngle"in N&&t(18,h=N.maxPolarAngle),"maxZoom"in N&&t(19,g=N.maxZoom),"minAzimuthAngle"in N&&t(20,b=N.minAzimuthAngle),"minDistance"in N&&t(21,x=N.minDistance),"minPolarAngle"in N&&t(22,M=N.minPolarAngle),"minZoom"in N&&t(23,S=N.minZoom),"mouseButtons"in N&&t(24,T=N.mouseButtons),"panSpeed"in N&&t(25,O=N.panSpeed),"rotateSpeed"in N&&t(26,_=N.rotateSpeed),"screenSpacePanning"in N&&t(27,A=N.screenSpacePanning),"touches"in N&&t(28,L=N.touches),"zoomSpeed"in N&&t(29,z=N.zoomSpeed),"target"in N&&t(1,W=N.target),"dispose"in N&&t(2,D=N.dispose)},r.$$.update=()=>{r.$$.dirty[0]&1073741761&&(i!==void 0&&t(0,I.autoRotate=i,I),s!==void 0&&t(0,I.autoRotateSpeed=s,I),o!==void 0&&t(0,I.dampingFactor=o,I),a!==void 0&&t(0,I.enableDamping=a,I),l!==void 0&&t(0,I.enabled=l,I),u!==void 0&&t(0,I.enablePan=u,I),c!==void 0&&t(0,I.enableRotate=c,I),f!==void 0&&t(0,I.enableZoom=f,I),d!==void 0&&t(0,I.keyPanSpeed=d,I),m!==void 0&&t(0,I.keys=m,I),v!==void 0&&t(0,I.maxAzimuthAngle=v,I),p!==void 0&&t(0,I.maxDistance=p,I),h!==void 0&&t(0,I.maxPolarAngle=h,I),g!==void 0&&t(0,I.maxZoom=g,I),b!==void 0&&t(0,I.minAzimuthAngle=b,I),x!==void 0&&t(0,I.minDistance=x,I),M!==void 0&&t(0,I.minPolarAngle=M,I),S!==void 0&&t(0,I.minZoom=S,I),T!==void 0&&t(0,I.mouseButtons=T,I),O!==void 0&&t(0,I.panSpeed=O,I),_!==void 0&&t(0,I.rotateSpeed=_,I),A!==void 0&&t(0,I.screenSpacePanning=A,I),L!==void 0&&t(0,I.touches=L,I),z!==void 0&&t(0,I.zoomSpeed=z,I),I.update(),k("OrbitControls: props changed")),r.$$.dirty[0]&576&&(i||a?P():ie())},[I,W,D,U,ee,se,i,s,o,a,l,u,c,f,d,m,v,p,h,g,b,x,M,S,T,O,_,A,L,z]}class Sg extends Ze{constructor(e){super(),Ke(this,e,Mg,bg,Xe,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}const yg=(r,e)=>e?new Be(r):new Be().setHex(new Be(r).getHex()).convertSRGBToLinear();function wg(r){let e;const t=r[18].default,n=Gt(t,r,r[22],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&4194304)&&Ht(n,t,i,i[22],e?jt(t,i[22],s,null):Wt(i[22]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function Eg(r){let e,t,n;function i(o){r[19](o)}let s={object:r[0],lookAt:r[5],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],position:r[2],scale:r[3],rotation:r[4],viewportAware:r[6],visible:r[11],userData:r[12],dispose:r[13],$$slots:{default:[wg]},$$scope:{ctx:r}};return r[1]!==void 0&&(s.inViewport=r[1]),e=new Yr({props:s}),Tn.push(()=>Un(e,"inViewport",i)),e.$on("viewportenter",r[20]),e.$on("viewportleave",r[21]),{c(){Ae(e.$$.fragment)},l(o){Te(e.$$.fragment,o)},m(o,a){Ce(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.object=o[0]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&4096&&(l.userData=o[12]),a&8192&&(l.dispose=o[13]),a&4194304&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],Bn(()=>t=!1)),e.$set(l)},i(o){n||(de(e.$$.fragment,o),n=!0)},o(o){ge(e.$$.fragment,o),n=!1},d(o){Le(e,o)}}}function Ag(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{light:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:u=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:f=!1}=e,{inViewport:d=!1}=e,{castShadow:m=void 0}=e,{receiveShadow:v=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:h=void 0}=e,{visible:g=void 0}=e,{userData:b=void 0}=e,{dispose:x=void 0}=e,{color:M=void 0}=e,{intensity:S=void 0}=e;const{invalidate:T}=en(),{linear:O}=ia();nt(r,O,z=>t(17,n=z));function _(z){d=z,t(1,d)}function A(z){Ge.call(this,r,z)}function L(z){Ge.call(this,r,z)}return r.$$set=z=>{"light"in z&&t(0,o=z.light),"position"in z&&t(2,a=z.position),"scale"in z&&t(3,l=z.scale),"rotation"in z&&t(4,u=z.rotation),"lookAt"in z&&t(5,c=z.lookAt),"viewportAware"in z&&t(6,f=z.viewportAware),"inViewport"in z&&t(1,d=z.inViewport),"castShadow"in z&&t(7,m=z.castShadow),"receiveShadow"in z&&t(8,v=z.receiveShadow),"frustumCulled"in z&&t(9,p=z.frustumCulled),"renderOrder"in z&&t(10,h=z.renderOrder),"visible"in z&&t(11,g=z.visible),"userData"in z&&t(12,b=z.userData),"dispose"in z&&t(13,x=z.dispose),"color"in z&&t(15,M=z.color),"intensity"in z&&t(16,S=z.intensity),"$$scope"in z&&t(22,s=z.$$scope)},r.$$.update=()=>{r.$$.dirty&229376&&(S!==void 0&&t(0,o.intensity=S,o),M!==void 0&&t(0,o.color=yg(M,n),o),T("LightInstance: props changed"))},[o,d,a,l,u,c,f,m,v,p,h,g,b,x,O,M,S,n,i,_,A,L,s]}class Tg extends Ze{constructor(e){super(),Ke(this,e,Ag,Eg,Xe,{light:0,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:1,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,color:15,intensity:16})}}function ko(r){let e,t,n,i,s,o;return e=new Xr({props:{object:r[16]}}),n=new qr({props:{object:r[16],position:r[15]}}),s=new ai({props:{dispose:r[10],object:r[15]}}),{c(){Ae(e.$$.fragment),t=ut(),Ae(n.$$.fragment),i=ut(),Ae(s.$$.fragment)},l(a){Te(e.$$.fragment,a),t=ft(a),Te(n.$$.fragment,a),i=ft(a),Te(s.$$.fragment,a)},m(a,l){Ce(e,a,l),et(a,t,l),Ce(n,a,l),et(a,i,l),Ce(s,a,l),o=!0},p(a,l){const u={};l&32768&&(u.position=a[15]),n.$set(u);const c={};l&1024&&(c.dispose=a[10]),l&32768&&(c.object=a[15]),s.$set(c)},i(a){o||(de(e.$$.fragment,a),de(n.$$.fragment,a),de(s.$$.fragment,a),o=!0)},o(a){ge(e.$$.fragment,a),ge(n.$$.fragment,a),ge(s.$$.fragment,a),o=!1},d(a){Le(e,a),a&&He(t),Le(n,a),a&&He(i),Le(s,a)}}}function Cg(r){let e;const t=r[18].default,n=Gt(t,r,r[22],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&4194304)&&Ht(n,t,i,i[22],e?jt(t,i[22],s,null):Wt(i[22]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function Lg(r){let e,t,n,i,s=r[15]&&!(r[15]instanceof $e)&&ko(r);function o(l){r[19](l)}let a={light:r[1],position:r[2],scale:r[3],rotation:r[4],castShadow:!!r[14],receiveShadow:r[5],frustumCulled:r[6],renderOrder:r[7],visible:r[8],userData:r[9],dispose:r[10],viewportAware:r[11],color:r[12],intensity:r[13],$$slots:{default:[Cg]},$$scope:{ctx:r}};return r[0]!==void 0&&(a.inViewport=r[0]),t=new Tg({props:a}),Tn.push(()=>Un(t,"inViewport",o)),t.$on("viewportenter",r[20]),t.$on("viewportleave",r[21]),{c(){s&&s.c(),e=ut(),Ae(t.$$.fragment)},l(l){s&&s.l(l),e=ft(l),Te(t.$$.fragment,l)},m(l,u){s&&s.m(l,u),et(l,e,u),Ce(t,l,u),i=!0},p(l,[u]){l[15]&&!(l[15]instanceof $e)?s?(s.p(l,u),u&32768&&de(s,1)):(s=ko(l),s.c(),de(s,1),s.m(e.parentNode,e)):s&&(tr(),ge(s,1,1,()=>{s=null}),nr());const c={};u&2&&(c.light=l[1]),u&4&&(c.position=l[2]),u&8&&(c.scale=l[3]),u&16&&(c.rotation=l[4]),u&16384&&(c.castShadow=!!l[14]),u&32&&(c.receiveShadow=l[5]),u&64&&(c.frustumCulled=l[6]),u&128&&(c.renderOrder=l[7]),u&256&&(c.visible=l[8]),u&512&&(c.userData=l[9]),u&1024&&(c.dispose=l[10]),u&2048&&(c.viewportAware=l[11]),u&4096&&(c.color=l[12]),u&8192&&(c.intensity=l[13]),u&4194304&&(c.$$scope={dirty:u,ctx:l}),!n&&u&1&&(n=!0,c.inViewport=l[0],Bn(()=>n=!1)),t.$set(c)},i(l){i||(de(s),de(t.$$.fragment,l),i=!0)},o(l){ge(s),ge(t.$$.fragment,l),i=!1},d(l){s&&s.d(l),l&&He(e),Le(t,l)}}}function Dg(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{receiveShadow:u=void 0}=e,{frustumCulled:c=void 0}=e,{renderOrder:f=void 0}=e,{visible:d=void 0}=e,{userData:m=void 0}=e,{dispose:v=void 0}=e,{viewportAware:p=!1}=e,{inViewport:h=!1}=e,{color:g=void 0}=e,{intensity:b=void 0}=e,{shadow:x=void 0}=e,{target:M=void 0}=e;const S=new gm(g,b),{invalidate:T}=en(),O=S.target,{start:_,stop:A,started:L}=Ii(()=>{},{autostart:!1,debugFrameloopMessage:"DirectionalLight: tracking target"});nt(r,L,k=>t(23,n=k));const z=k=>{k&&k instanceof $e&&!n?(t(1,S.target=k,S),_(),T("DirectionalLight: target changed")):(!k||!(k instanceof $e))&&n&&(t(1,S.target=O,S),A(),T("DirectionalLight: target changed"))},W=k=>{if(k){const{mapSize:Q=[512,512],camera:{left:X=-5,bottom:$=-5,right:J=5,top:I=5,near:P=.5,far:ie=500}={},bias:ee=0,radius:se=1}=k===!0?{}:k;S.shadow.mapSize.set(Q[0],Q[1]),t(1,S.shadow.camera.left=X,S),t(1,S.shadow.camera.top=I,S),t(1,S.shadow.camera.right=J,S),t(1,S.shadow.camera.bottom=$,S),t(1,S.shadow.camera.near=P,S),t(1,S.shadow.camera.far=ie,S),t(1,S.shadow.bias=ee,S),t(1,S.shadow.radius=se,S)}T("DirectionalLight: shadow changed")};function D(k){h=k,t(0,h)}function U(k){Ge.call(this,r,k)}function R(k){Ge.call(this,r,k)}return r.$$set=k=>{"position"in k&&t(2,o=k.position),"scale"in k&&t(3,a=k.scale),"rotation"in k&&t(4,l=k.rotation),"receiveShadow"in k&&t(5,u=k.receiveShadow),"frustumCulled"in k&&t(6,c=k.frustumCulled),"renderOrder"in k&&t(7,f=k.renderOrder),"visible"in k&&t(8,d=k.visible),"userData"in k&&t(9,m=k.userData),"dispose"in k&&t(10,v=k.dispose),"viewportAware"in k&&t(11,p=k.viewportAware),"inViewport"in k&&t(0,h=k.inViewport),"color"in k&&t(12,g=k.color),"intensity"in k&&t(13,b=k.intensity),"shadow"in k&&t(14,x=k.shadow),"target"in k&&t(15,M=k.target),"$$scope"in k&&t(22,s=k.$$scope)},r.$$.update=()=>{r.$$.dirty&32768&&z(M),r.$$.dirty&16384&&W(x)},[h,S,o,a,l,u,c,f,d,m,v,p,g,b,x,M,O,L,i,D,U,R,s]}class Pg extends Ze{constructor(e){super(),Ke(this,e,Dg,Lg,Xe,{position:2,scale:3,rotation:4,receiveShadow:5,frustumCulled:6,renderOrder:7,visible:8,userData:9,dispose:10,viewportAware:11,inViewport:0,color:12,intensity:13,shadow:14,target:15,light:1})}get light(){return this.$$.ctx[1]}}function Rg(r,e,t){let{object:n}=e,i=n,{interactive:s=!1}=e,{ignorePointer:o=!1}=e;const a=ir(),{addInteractiveObject:l,removeInteractiveObject:u,addRaycastableObject:c,removeRaycastableObject:f}=ia(),{invalidate:d}=en(),m=p=>{f(p),u(p),delete Jt(p).eventDispatcher},v=(p,h,g)=>{Jt(p).eventDispatcher=a,h?(f(p),u(p)):(c(p),g?l(p):u(p))};return ct(()=>{m(n),d("InteractiveObject: object removed")}),r.$$set=p=>{"object"in p&&t(0,n=p.object),"interactive"in p&&t(1,s=p.interactive),"ignorePointer"in p&&t(2,o=p.ignorePointer)},r.$$.update=()=>{r.$$.dirty&15&&(n!==i?(m(i),v(n,o,s),d("InteractiveObject: object changed"),t(3,i=n)):n===i&&(v(n,o,s),d("InteractiveObject: props changed")))},[n,s,o,i]}class Ig extends Ze{constructor(e){super(),Ke(this,e,Rg,null,Xe,{object:0,interactive:1,ignorePointer:2})}}function Og(r){let e;const t=r[16].default,n=Gt(t,r,r[27],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&134217728)&&Ht(n,t,i,i[27],e?jt(t,i[27],s,null):Wt(i[27]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function zg(r){let e,t,n,i,s;function o(l){r[17](l)}let a={object:r[1],lookAt:r[5],position:r[2],scale:r[3],rotation:r[4],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],visible:r[11],userData:r[12],dispose:r[13],viewportAware:r[6],$$slots:{default:[Og]},$$scope:{ctx:r}};return r[0]!==void 0&&(a.inViewport=r[0]),e=new Yr({props:a}),Tn.push(()=>Un(e,"inViewport",o)),e.$on("viewportenter",r[18]),e.$on("viewportleave",r[19]),i=new Ig({props:{object:r[1],interactive:r[14],ignorePointer:r[15]}}),i.$on("click",r[20]),i.$on("contextmenu",r[21]),i.$on("pointerup",r[22]),i.$on("pointerdown",r[23]),i.$on("pointerenter",r[24]),i.$on("pointerleave",r[25]),i.$on("pointermove",r[26]),{c(){Ae(e.$$.fragment),n=ut(),Ae(i.$$.fragment)},l(l){Te(e.$$.fragment,l),n=ft(l),Te(i.$$.fragment,l)},m(l,u){Ce(e,l,u),et(l,n,u),Ce(i,l,u),s=!0},p(l,[u]){const c={};u&2&&(c.object=l[1]),u&32&&(c.lookAt=l[5]),u&4&&(c.position=l[2]),u&8&&(c.scale=l[3]),u&16&&(c.rotation=l[4]),u&128&&(c.castShadow=l[7]),u&256&&(c.receiveShadow=l[8]),u&512&&(c.frustumCulled=l[9]),u&1024&&(c.renderOrder=l[10]),u&2048&&(c.visible=l[11]),u&4096&&(c.userData=l[12]),u&8192&&(c.dispose=l[13]),u&64&&(c.viewportAware=l[6]),u&134217728&&(c.$$scope={dirty:u,ctx:l}),!t&&u&1&&(t=!0,c.inViewport=l[0],Bn(()=>t=!1)),e.$set(c);const f={};u&2&&(f.object=l[1]),u&16384&&(f.interactive=l[14]),u&32768&&(f.ignorePointer=l[15]),i.$set(f)},i(l){s||(de(e.$$.fragment,l),de(i.$$.fragment,l),s=!0)},o(l){ge(e.$$.fragment,l),ge(i.$$.fragment,l),s=!1},d(l){Le(e,l),l&&He(n),Le(i,l)}}}function Fg(r,e,t){let{$$slots:n={},$$scope:i}=e,{mesh:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:c=!1}=e,{inViewport:f=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:p=void 0}=e,{visible:h=void 0}=e,{userData:g=void 0}=e,{dispose:b=void 0}=e,{interactive:x=!1}=e,{ignorePointer:M=!1}=e;function S(R){f=R,t(0,f)}function T(R){Ge.call(this,r,R)}function O(R){Ge.call(this,r,R)}function _(R){Ge.call(this,r,R)}function A(R){Ge.call(this,r,R)}function L(R){Ge.call(this,r,R)}function z(R){Ge.call(this,r,R)}function W(R){Ge.call(this,r,R)}function D(R){Ge.call(this,r,R)}function U(R){Ge.call(this,r,R)}return r.$$set=R=>{"mesh"in R&&t(1,s=R.mesh),"position"in R&&t(2,o=R.position),"scale"in R&&t(3,a=R.scale),"rotation"in R&&t(4,l=R.rotation),"lookAt"in R&&t(5,u=R.lookAt),"viewportAware"in R&&t(6,c=R.viewportAware),"inViewport"in R&&t(0,f=R.inViewport),"castShadow"in R&&t(7,d=R.castShadow),"receiveShadow"in R&&t(8,m=R.receiveShadow),"frustumCulled"in R&&t(9,v=R.frustumCulled),"renderOrder"in R&&t(10,p=R.renderOrder),"visible"in R&&t(11,h=R.visible),"userData"in R&&t(12,g=R.userData),"dispose"in R&&t(13,b=R.dispose),"interactive"in R&&t(14,x=R.interactive),"ignorePointer"in R&&t(15,M=R.ignorePointer),"$$scope"in R&&t(27,i=R.$$scope)},[f,s,o,a,l,u,c,d,m,v,p,h,g,b,x,M,n,S,T,O,_,A,L,z,W,D,U,i]}class Ol extends Ze{constructor(e){super(),Ke(this,e,Fg,zg,Xe,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}const Ng=(r,e)=>{let t=r;return{onChange:(i,s)=>{(e&&!e(i,t)||!e&&i!==t)&&(s(i,t),t=i)}}};function Vo(r){let e,t,n;function i(o){r[24](o)}let s={mesh:r[17],castShadow:r[5],receiveShadow:r[6],frustumCulled:void 0,renderOrder:r[7],visible:r[8],userData:r[9],dispose:r[10],interactive:r[11],ignorePointer:r[12],viewportAware:r[4]};return r[0]!==void 0&&(s.inViewport=r[0]),e=new Ol({props:s}),Tn.push(()=>Un(e,"inViewport",i)),e.$on("click",r[20]),e.$on("contextmenu",r[20]),e.$on("pointerup",r[20]),e.$on("pointerdown",r[20]),e.$on("pointerenter",r[20]),e.$on("pointerleave",r[20]),e.$on("pointermove",r[20]),e.$on("viewportenter",r[25]),e.$on("viewportleave",r[26]),{c(){Ae(e.$$.fragment)},l(o){Te(e.$$.fragment,o)},m(o,a){Ce(e,o,a),n=!0},p(o,a){const l={};a[0]&131072&&(l.mesh=o[17]),a[0]&32&&(l.castShadow=o[5]),a[0]&64&&(l.receiveShadow=o[6]),a[0]&128&&(l.renderOrder=o[7]),a[0]&256&&(l.visible=o[8]),a[0]&512&&(l.userData=o[9]),a[0]&1024&&(l.dispose=o[10]),a[0]&2048&&(l.interactive=o[11]),a[0]&4096&&(l.ignorePointer=o[12]),a[0]&16&&(l.viewportAware=o[4]),!t&&a[0]&1&&(t=!0,l.inViewport=o[0],Bn(()=>t=!1)),e.$set(l)},i(o){n||(de(e.$$.fragment,o),n=!0)},o(o){ge(e.$$.fragment,o),n=!1},d(o){Le(e,o)}}}function Ug(r){let e=r[17].uuid,t,n,i=Vo(r);const s=r[23].default,o=Gt(s,r,r[27],null);return{c(){i.c(),t=ut(),o&&o.c()},l(a){i.l(a),t=ft(a),o&&o.l(a)},m(a,l){i.m(a,l),et(a,t,l),o&&o.m(a,l),n=!0},p(a,l){l[0]&131072&&Xe(e,e=a[17].uuid)?(tr(),ge(i,1,1,On),nr(),i=Vo(a),i.c(),de(i,1),i.m(t.parentNode,t)):i.p(a,l),o&&o.p&&(!n||l[0]&134217728)&&Ht(o,s,a,a[27],n?jt(s,a[27],l,null):Wt(a[27]),null)},i(a){n||(de(i),de(o,a),n=!0)},o(a){ge(i),ge(o,a),n=!1},d(a){i.d(a),a&&He(t),o&&o.d(a)}}}function Bg(r){let e,t,n,i,s,o;return e=new ai({props:{dispose:r[10],object:r[14]}}),n=new ai({props:{dispose:r[10],object:r[15]}}),s=new Yr({props:{object:r[18],position:r[1],scale:r[2],rotation:r[3],lookAt:r[13],$$slots:{default:[Ug]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment),t=ut(),Ae(n.$$.fragment),i=ut(),Ae(s.$$.fragment)},l(a){Te(e.$$.fragment,a),t=ft(a),Te(n.$$.fragment,a),i=ft(a),Te(s.$$.fragment,a)},m(a,l){Ce(e,a,l),et(a,t,l),Ce(n,a,l),et(a,i,l),Ce(s,a,l),o=!0},p(a,l){const u={};l[0]&1024&&(u.dispose=a[10]),l[0]&16384&&(u.object=a[14]),e.$set(u);const c={};l[0]&1024&&(c.dispose=a[10]),l[0]&32768&&(c.object=a[15]),n.$set(c);const f={};l[0]&2&&(f.position=a[1]),l[0]&4&&(f.scale=a[2]),l[0]&8&&(f.rotation=a[3]),l[0]&8192&&(f.lookAt=a[13]),l[0]&134356977&&(f.$$scope={dirty:l,ctx:a}),s.$set(f)},i(a){o||(de(e.$$.fragment,a),de(n.$$.fragment,a),de(s.$$.fragment,a),o=!0)},o(a){ge(e.$$.fragment,a),ge(n.$$.fragment,a),ge(s.$$.fragment,a),o=!1},d(a){Le(e,a),a&&He(t),Le(n,a),a&&He(i),Le(s,a)}}}const zl=new $e;zl.scale.set(0,0,0);const Go={matrix:zl.matrix,color:null},kg=new Qe().fromArray(new Array(16).fill(0)),Ps=new Be(16777215),Fl="threlte-instanced-mesh-context",Vg=r=>mn(Fl+r);function Gg(r,e,t){let n,i=On,s=()=>(i(),i=Yl(D,j=>t(17,n=j)),D),o;r.$$.on_destroy.push(()=>i());let{$$slots:a={},$$scope:l}=e,{position:u=void 0}=e,{scale:c=void 0}=e,{rotation:f=void 0}=e,{viewportAware:d=!1}=e,{inViewport:m=!1}=e,{castShadow:v=void 0}=e,{receiveShadow:p=void 0}=e,{renderOrder:h=void 0}=e,{visible:g=void 0}=e,{userData:b=void 0}=e,{dispose:x=void 0}=e,{interactive:M=!1}=e,{ignorePointer:S=!1}=e,{lookAt:T=void 0}=e,{geometry:O}=e,{material:_}=e,{count:A=void 0}=e,{id:L=""}=e;const{onChange:z}=Ng(_),W=j=>j===void 0,D=St(new bo(O,_,W(A)?0:A));s();const U=new $e,R=[],{invalidate:k}=en(),Q=(j,oe)=>{const qe=R.findIndex(rt=>rt===j);if(qe===-1){console.warn("Instanced Mesh: Instance not found");return}oe(qe)},{start:X,stop:$,started:J}=Ii(()=>{n.dispose(),sn(D,n=new bo(O,_,R.length),n),R.forEach((j,oe)=>{se(j,oe),j.color?n.setColorAt(oe,j.color):n.setColorAt(oe,Ps)}),sn(D,n.instanceMatrix.needsUpdate=!0,n),n.instanceColor&&sn(D,n.instanceColor.needsUpdate=!0,n),$()},{autostart:!1,debugFrameloopMessage:"Instanced Mesh: auto instance count change queued"});nt(r,J,j=>t(29,o=j));const I=j=>{if(W(A))R.push(j),o||X();else{const oe=R.findIndex(qe=>qe===Go);oe!==-1?R[oe]=j:R.push(j),R.length>A&&console.warn("Instanced Mesh: More instances requested than allocated, increase count on <")}ie(j),k("Instanced Mesh: Instance added")},P=j=>{if(W(A)){const oe=R.findIndex(qe=>qe===j);R.splice(oe,1),o||X()}else{ee(j);const oe=R.findIndex(qe=>qe===j);oe>=A?R.splice(oe,1):R.splice(oe,1,Go)}k("Instanced Mesh: Instance removed")},ie=j=>{j.color||Q(j,oe=>{n.setColorAt(oe,Ps),n.instanceColor&&sn(D,n.instanceColor.needsUpdate=!0,n)})},ee=j=>{Q(j,oe=>{n.setMatrixAt(oe,kg),sn(D,n.instanceMatrix.needsUpdate=!0,n),k("Instanced Mesh: instance matrix resetted")})},se=(j,oe)=>{n.setMatrixAt(oe,j.matrix),sn(D,n.instanceMatrix.needsUpdate=!0,n),k("Instanced Mesh: instance matrix set")},N=j=>{Q(j,oe=>{se(j,oe)})},ce=j=>{Q(j,oe=>{n.setColorAt(oe,j.color??Ps),n.instanceColor&&sn(D,n.instanceColor.needsUpdate=!0,n),k("Instanced Mesh: instance color set")})};an(Fl+L,{registerInstance:I,removeInstance:P,setInstanceMatrix:N,setInstanceColor:ce,parentObject:U});const _e=j=>{if(j.detail.instanceId===void 0)return;const oe=R[j.detail.instanceId];oe&&oe.pointerEventDispatcher&&oe.pointerEventDispatcher(j.type,j.detail)};function Se(j){m=j,t(0,m)}function pe(j){Ge.call(this,r,j)}function Ue(j){Ge.call(this,r,j)}return r.$$set=j=>{"position"in j&&t(1,u=j.position),"scale"in j&&t(2,c=j.scale),"rotation"in j&&t(3,f=j.rotation),"viewportAware"in j&&t(4,d=j.viewportAware),"inViewport"in j&&t(0,m=j.inViewport),"castShadow"in j&&t(5,v=j.castShadow),"receiveShadow"in j&&t(6,p=j.receiveShadow),"renderOrder"in j&&t(7,h=j.renderOrder),"visible"in j&&t(8,g=j.visible),"userData"in j&&t(9,b=j.userData),"dispose"in j&&t(10,x=j.dispose),"interactive"in j&&t(11,M=j.interactive),"ignorePointer"in j&&t(12,S=j.ignorePointer),"lookAt"in j&&t(13,T=j.lookAt),"geometry"in j&&t(14,O=j.geometry),"material"in j&&t(15,_=j.material),"count"in j&&t(21,A=j.count),"id"in j&&t(22,L=j.id),"$$scope"in j&&t(27,l=j.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&32768&&z(_,j=>{sn(D,n.material=j,n)})},[m,u,c,f,d,v,p,h,g,b,x,M,S,T,O,_,D,n,U,J,_e,A,L,a,Se,pe,Ue,l]}class Hg extends Ze{constructor(e){super(),Ke(this,e,Gg,Bg,Xe,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,renderOrder:7,visible:8,userData:9,dispose:10,interactive:11,ignorePointer:12,lookAt:13,geometry:14,material:15,count:21,id:22,instancedMesh:16},null,[-1,-1])}get instancedMesh(){return this.$$.ctx[16]}}function Wg(r){let e;const t=r[8].default,n=Gt(t,r,r[9],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&512)&&Ht(n,t,i,i[9],e?jt(t,i[9],s,null):Wt(i[9]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function jg(r){let e,t,n,i;return e=new Xr({props:{object:r[4],$$slots:{default:[Wg]},$$scope:{ctx:r}}}),n=new qr({props:{object:r[4],position:r[0],scale:r[1],rotation:r[2],lookAt:r[3]}}),n.$on("transform",r[5]),{c(){Ae(e.$$.fragment),t=ut(),Ae(n.$$.fragment)},l(s){Te(e.$$.fragment,s),t=ft(s),Te(n.$$.fragment,s)},m(s,o){Ce(e,s,o),et(s,t,o),Ce(n,s,o),i=!0},p(s,[o]){const a={};o&512&&(a.$$scope={dirty:o,ctx:s}),e.$set(a);const l={};o&1&&(l.position=s[0]),o&2&&(l.scale=s[1]),o&4&&(l.rotation=s[2]),o&8&&(l.lookAt=s[3]),n.$set(l)},i(s){i||(de(e.$$.fragment,s),de(n.$$.fragment,s),i=!0)},o(s){ge(e.$$.fragment,s),ge(n.$$.fragment,s),i=!1},d(s){Le(e,s),s&&He(t),Le(n,s)}}}function Xg(r,e,t){let{$$slots:n={},$$scope:i}=e,{position:s=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{lookAt:l=void 0}=e,{color:u=void 0}=e,{id:c=""}=e;const{registerInstance:f,setInstanceMatrix:d,removeInstance:m,setInstanceColor:v,parentObject:p}=Vg(c),h=new $e,g=new Qe,b=ir(),x=()=>{var W;return p.uuid===((W=h.parent)==null?void 0:W.uuid)},M=W=>W!==void 0?W instanceof Be?W:new Be(W):null,S={color:M(u),matrix:h.matrix,pointerEventDispatcher:b},T=W=>{S.color=M(W),v(S)},O=()=>{let W=h.parent;const D=[];for(;W&&p&&W.uuid!==p.uuid&&(D.push(W),!!W.parent);)W=W.parent;h.updateMatrix(),g.copy(h.matrix),D.forEach(U=>{U.updateMatrix(),g.premultiply(U.matrix)}),S.matrix=g},_=()=>{h.updateMatrix(),S.matrix=h.matrix},A=()=>{_(),d(S)},{start:L}=Ii(()=>{O(),d(S)},{autostart:!1,debugFrameloopMessage:"Instance: tracking non-direct child instance"});f(S),$o(()=>{x()?A():L(),T(u)});const z=()=>{x()&&A()};return ct(()=>{m(S)}),r.$$set=W=>{"position"in W&&t(0,s=W.position),"scale"in W&&t(1,o=W.scale),"rotation"in W&&t(2,a=W.rotation),"lookAt"in W&&t(3,l=W.lookAt),"color"in W&&t(6,u=W.color),"id"in W&&t(7,c=W.id),"$$scope"in W&&t(9,i=W.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&T(u)},[s,o,a,l,h,z,u,c,n,i]}class qg extends Ze{constructor(e){super(),Ke(this,e,Xg,jg,Xe,{position:0,scale:1,rotation:2,lookAt:3,color:6,id:7})}}const Ho=new kn,Dr=new B;class Nl extends _m{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Rt(e,3)),this.setAttribute("uv",new Rt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Hs(t,6,1);return this.setAttribute("instanceStart",new Rn(n,3,0)),this.setAttribute("instanceEnd",new Rn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Hs(t,6,1);return this.setAttribute("instanceColorStart",new Rn(n,3,0)),this.setAttribute("instanceColorEnd",new Rn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new cm(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Ho.setFromBufferAttribute(t),this.boundingBox.union(Ho))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Dr.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Dr)),Dr.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Dr));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}ae.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ee(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Ot.line={uniforms:kr.merge([ae.common,ae.fog,ae.line]),vertexShader:`
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
		`};class ra extends gn{constructor(e){super({type:"LineMaterial",uniforms:kr.clone(Ot.line.uniforms),vertexShader:Ot.line.vertexShader,fragmentShader:Ot.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return Boolean("USE_DASH"in this.defines)},set(t){Boolean(t)!==Boolean("USE_DASH"in this.defines)&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)},set:function(t){Boolean(t)!==Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const Wo=new B,jo=new B,xt=new it,bt=new it,un=new it,Rs=new B,Is=new Qe,Mt=new xm,Xo=new B,Pr=new kn,Rr=new rr,fn=new it;let hn,ni;function qo(r,e,t){return fn.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),fn.multiplyScalar(1/fn.w),fn.x=ni/t.width,fn.y=ni/t.height,fn.applyMatrix4(r.projectionMatrixInverse),fn.multiplyScalar(1/fn.w),Math.abs(Math.max(fn.x,fn.y))}function Yg(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,l=o;a<l;a++){Mt.start.fromBufferAttribute(i,a),Mt.end.fromBufferAttribute(s,a),Mt.applyMatrix4(t);const u=new B,c=new B;hn.distanceSqToSegment(Mt.start,Mt.end,c,u),c.distanceTo(u)<ni*.5&&e.push({point:c,pointOnLine:u,distance:hn.origin.distanceTo(c),object:r,face:null,faceIndex:a,uv:null,uv2:null})}}function Zg(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,o=r.matrixWorld,a=r.geometry,l=a.attributes.instanceStart,u=a.attributes.instanceEnd,c=Math.min(a.instanceCount,l.count),f=-e.near;hn.at(1,un),un.w=1,un.applyMatrix4(e.matrixWorldInverse),un.applyMatrix4(n),un.multiplyScalar(1/un.w),un.x*=s.x/2,un.y*=s.y/2,un.z=0,Rs.copy(un),Is.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,m=c;d<m;d++){if(xt.fromBufferAttribute(l,d),bt.fromBufferAttribute(u,d),xt.w=1,bt.w=1,xt.applyMatrix4(Is),bt.applyMatrix4(Is),xt.z>f&&bt.z>f)continue;if(xt.z>f){const x=xt.z-bt.z,M=(xt.z-f)/x;xt.lerp(bt,M)}else if(bt.z>f){const x=bt.z-xt.z,M=(bt.z-f)/x;bt.lerp(xt,M)}xt.applyMatrix4(n),bt.applyMatrix4(n),xt.multiplyScalar(1/xt.w),bt.multiplyScalar(1/bt.w),xt.x*=s.x/2,xt.y*=s.y/2,bt.x*=s.x/2,bt.y*=s.y/2,Mt.start.copy(xt),Mt.start.z=0,Mt.end.copy(bt),Mt.end.z=0;const p=Mt.closestPointToPointParameter(Rs,!0);Mt.at(p,Xo);const h=au.lerp(xt.z,bt.z,p),g=h>=-1&&h<=1,b=Rs.distanceTo(Xo)<ni*.5;if(g&&b){Mt.start.fromBufferAttribute(l,d),Mt.end.fromBufferAttribute(u,d),Mt.start.applyMatrix4(o),Mt.end.applyMatrix4(o);const x=new B,M=new B;hn.distanceSqToSegment(Mt.start,Mt.end,M,x),t.push({point:M,pointOnLine:x,distance:hn.origin.distanceTo(M),object:r,face:null,faceIndex:d,uv:null,uv2:null})}}}class Kg extends Kt{constructor(e=new Nl,t=new ra({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Wo.fromBufferAttribute(t,o),jo.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Wo.distanceTo(jo);const s=new Hs(i,2,1);return e.setAttribute("instanceDistanceStart",new Rn(s,1,0)),e.setAttribute("instanceDistanceEnd",new Rn(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;hn=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;ni=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Rr.copy(a.boundingSphere).applyMatrix4(o);let u;if(n)u=ni*.5;else{const f=Math.max(i.near,Rr.distanceToPoint(hn.origin));u=qo(i,f,l.resolution)}if(Rr.radius+=u,hn.intersectsSphere(Rr)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Pr.copy(a.boundingBox).applyMatrix4(o);let c;if(n)c=ni*.5;else{const f=Math.max(i.near,Pr.distanceToPoint(hn.origin));c=qo(i,f,l.resolution)}Pr.expandByScalar(c),hn.intersectsBox(Pr)!==!1&&(n?Yg(this,t):Zg(this,i,t))}}class js extends Nl{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}let Jg=class extends Kg{constructor(e=new js,t=new ra({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};function Qg(r){let e;const t=r[21].default,n=Gt(t,r,r[32],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&2)&&Ht(n,t,i,i[32],e?jt(t,i[32],s,null):Wt(i[32]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function $g(r){let e,t,n,i,s,o,a;e=new ai({props:{dispose:r[12],object:r[16]}}),n=new ai({props:{dispose:!0,object:r[17]}});function l(c){r[22](c)}let u={mesh:r[0],position:r[2],scale:r[3],rotation:r[4],lookAt:r[15],castShadow:r[6],receiveShadow:r[7],frustumCulled:r[8],renderOrder:r[9],visible:r[10],userData:r[11],dispose:r[12],interactive:r[13],ignorePointer:r[14],viewportAware:r[5],$$slots:{default:[Qg]},$$scope:{ctx:r}};return r[1]!==void 0&&(u.inViewport=r[1]),s=new Ol({props:u}),Tn.push(()=>Un(s,"inViewport",l)),s.$on("click",r[23]),s.$on("contextmenu",r[24]),s.$on("pointerup",r[25]),s.$on("pointerdown",r[26]),s.$on("pointerenter",r[27]),s.$on("pointerleave",r[28]),s.$on("pointermove",r[29]),s.$on("viewportenter",r[30]),s.$on("viewportleave",r[31]),{c(){Ae(e.$$.fragment),t=ut(),Ae(n.$$.fragment),i=ut(),Ae(s.$$.fragment)},l(c){Te(e.$$.fragment,c),t=ft(c),Te(n.$$.fragment,c),i=ft(c),Te(s.$$.fragment,c)},m(c,f){Ce(e,c,f),et(c,t,f),Ce(n,c,f),et(c,i,f),Ce(s,c,f),a=!0},p(c,f){const d={};f[0]&4096&&(d.dispose=c[12]),f[0]&65536&&(d.object=c[16]),e.$set(d);const m={};f[0]&1&&(m.mesh=c[0]),f[0]&4&&(m.position=c[2]),f[0]&8&&(m.scale=c[3]),f[0]&16&&(m.rotation=c[4]),f[0]&32768&&(m.lookAt=c[15]),f[0]&64&&(m.castShadow=c[6]),f[0]&128&&(m.receiveShadow=c[7]),f[0]&256&&(m.frustumCulled=c[8]),f[0]&512&&(m.renderOrder=c[9]),f[0]&1024&&(m.visible=c[10]),f[0]&2048&&(m.userData=c[11]),f[0]&4096&&(m.dispose=c[12]),f[0]&8192&&(m.interactive=c[13]),f[0]&16384&&(m.ignorePointer=c[14]),f[0]&32&&(m.viewportAware=c[5]),f[1]&2&&(m.$$scope={dirty:f,ctx:c}),!o&&f[0]&2&&(o=!0,m.inViewport=c[1],Bn(()=>o=!1)),s.$set(m)},i(c){a||(de(e.$$.fragment,c),de(n.$$.fragment,c),de(s.$$.fragment,c),a=!0)},o(c){ge(e.$$.fragment,c),ge(n.$$.fragment,c),ge(s.$$.fragment,c),a=!1},d(c){Le(e,c),c&&He(t),Le(n,c),c&&He(i),Le(s,c)}}}function e_(r,e,t){let{$$slots:n={},$$scope:i}=e,{position:s=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{viewportAware:l=!1}=e,{inViewport:u=!1}=e,{castShadow:c=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:m=void 0}=e,{visible:v=void 0}=e,{userData:p=void 0}=e,{dispose:h=void 0}=e,{interactive:g=!1}=e,{ignorePointer:b=!1}=e,{lookAt:x=void 0}=e,{points:M=[]}=e,{material:S}=e,T=new js;T.setPositions([0,0,0]);let O;const _=new Jg(void 0,S);ct(()=>{T.dispose(),O==null||O.dispose()});const A=()=>_,{invalidate:L}=en();let z=S;function W(P){u=P,t(1,u)}function D(P){Ge.call(this,r,P)}function U(P){Ge.call(this,r,P)}function R(P){Ge.call(this,r,P)}function k(P){Ge.call(this,r,P)}function Q(P){Ge.call(this,r,P)}function X(P){Ge.call(this,r,P)}function $(P){Ge.call(this,r,P)}function J(P){Ge.call(this,r,P)}function I(P){Ge.call(this,r,P)}return r.$$set=P=>{"position"in P&&t(2,s=P.position),"scale"in P&&t(3,o=P.scale),"rotation"in P&&t(4,a=P.rotation),"viewportAware"in P&&t(5,l=P.viewportAware),"inViewport"in P&&t(1,u=P.inViewport),"castShadow"in P&&t(6,c=P.castShadow),"receiveShadow"in P&&t(7,f=P.receiveShadow),"frustumCulled"in P&&t(8,d=P.frustumCulled),"renderOrder"in P&&t(9,m=P.renderOrder),"visible"in P&&t(10,v=P.visible),"userData"in P&&t(11,p=P.userData),"dispose"in P&&t(12,h=P.dispose),"interactive"in P&&t(13,g=P.interactive),"ignorePointer"in P&&t(14,b=P.ignorePointer),"lookAt"in P&&t(15,x=P.lookAt),"points"in P&&t(18,M=P.points),"material"in P&&t(19,S=P.material),"$$scope"in P&&t(32,i=P.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&327681&&(O==null||O.dispose(),M.length?(t(16,O=new js),O.setPositions(M.map(P=>P instanceof B?P.toArray():P).flat()),t(0,_.geometry=O,_)):t(0,_.geometry=T,_),_.computeLineDistances(),L("Line2: points changed")),r.$$.dirty[0]&1572864&&(S!==z?(A().material=S,L("Line2: material changed")):L("Line2: material props changed"),t(20,z=S))},[_,u,s,o,a,l,c,f,d,m,v,p,h,g,b,x,O,T,M,S,z,n,W,D,U,R,k,Q,X,$,J,I,i]}class t_ extends Ze{constructor(e){super(),Ke(this,e,e_,$g,Xe,{position:2,scale:3,rotation:4,viewportAware:5,inViewport:1,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,interactive:13,ignorePointer:14,lookAt:15,points:18,material:19,line2:0},null,[-1,-1])}get line2(){return this.$$.ctx[0]}}function n_(r){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class Yo extends Ze{constructor(e){super(),Ke(this,e,n_,null,Xe,{})}}new Proxy(Yo,{get(r,e){return r[e]||Yo}});vg(yo,()=>new yo(Tl));const Ul=St([]),Bl=St([]),kl=St([]),Vl=()=>`#${Math.floor(Math.random()*16777215).toString(16)}`;function Zo(r,e,t){const n=r.slice();return n[1]=e[t],n}function i_(r){let e,t;return e=new Sg({props:{autoRotate:!0,enableZoom:!0}}),{c(){Ae(e.$$.fragment)},l(n){Te(e.$$.fragment,n)},m(n,i){Ce(e,n,i),t=!0},p:On,i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function Ko(r){let e,t;return e=new t_({props:{material:new ra({worldUnits:!0,linewidth:.05,color:Vl()}),points:r[1]}}),{c(){Ae(e.$$.fragment)},l(n){Te(e.$$.fragment,n)},m(n,i){Ce(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.points=n[1]),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function r_(r){let e,t,n,i,s,o;e=new _g({props:{position:{y:3,x:3,z:3},$$slots:{default:[i_]},$$scope:{ctx:r}}}),n=new Pg({props:{position:{y:10}}});let a=r[0],l=[];for(let c=0;c<a.length;c+=1)l[c]=Ko(Zo(r,a,c));const u=c=>ge(l[c],1,1,()=>{l[c]=null});return{c(){Ae(e.$$.fragment),t=ut(),Ae(n.$$.fragment),i=ut();for(let c=0;c<l.length;c+=1)l[c].c();s=zr()},l(c){Te(e.$$.fragment,c),t=ft(c),Te(n.$$.fragment,c),i=ft(c);for(let f=0;f<l.length;f+=1)l[f].l(c);s=zr()},m(c,f){Ce(e,c,f),et(c,t,f),Ce(n,c,f),et(c,i,f);for(let d=0;d<l.length;d+=1)l[d].m(c,f);et(c,s,f),o=!0},p(c,[f]){const d={};if(f&16&&(d.$$scope={dirty:f,ctx:c}),e.$set(d),f&1){a=c[0];let m;for(m=0;m<a.length;m+=1){const v=Zo(c,a,m);l[m]?(l[m].p(v,f),de(l[m],1)):(l[m]=Ko(v),l[m].c(),de(l[m],1),l[m].m(s.parentNode,s))}for(tr(),m=a.length;m<l.length;m+=1)u(m);nr()}},i(c){if(!o){de(e.$$.fragment,c),de(n.$$.fragment,c);for(let f=0;f<a.length;f+=1)de(l[f]);o=!0}},o(c){ge(e.$$.fragment,c),ge(n.$$.fragment,c),l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)ge(l[f]);o=!1},d(c){Le(e,c),c&&He(t),Le(n,c),c&&He(i),el(l,c),c&&He(s)}}}function s_(r,e,t){let n;return nt(r,Ul,i=>t(0,n=i)),r.$$.update=()=>{r.$$.dirty&1&&console.log("lines:",n)},[n]}class a_ extends Ze{constructor(e){super(),Ke(this,e,s_,r_,Xe,{})}}function Jo(r,e,t){const n=r.slice();return n[3]=e[t],n}function Qo(r){let e,t;return e=new qg({props:{position:{x:r[3][0],y:r[3][1],z:r[3][2]},scale:.15,color:Vl()}}),{c(){Ae(e.$$.fragment)},l(n){Te(e.$$.fragment,n)},m(n,i){Ce(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.position={x:n[3][0],y:n[3][1],z:n[3][2]}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function o_(r){let e,t,n=r[0],i=[];for(let o=0;o<n.length;o+=1)i[o]=Qo(Jo(r,n,o));const s=o=>ge(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=zr()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=zr()},m(o,a){for(let l=0;l<i.length;l+=1)i[l].m(o,a);et(o,e,a),t=!0},p(o,a){if(a&1){n=o[0];let l;for(l=0;l<n.length;l+=1){const u=Jo(o,n,l);i[l]?(i[l].p(u,a),de(i[l],1)):(i[l]=Qo(u),i[l].c(),de(i[l],1),i[l].m(e.parentNode,e))}for(tr(),l=n.length;l<i.length;l+=1)s(l);nr()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)de(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)ge(i[a]);t=!1},d(o){el(i,o),o&&He(e)}}}function l_(r){let e,t;return e=new Hg({props:{geometry:r[1],material:r[2],$$slots:{default:[o_]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Te(e.$$.fragment,n)},m(n,i){Ce(e,n,i),t=!0},p(n,[i]){const s={};i&65&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Le(e,n)}}}function c_(r,e,t){let n;nt(r,Bl,o=>t(0,n=o));const i=new ta(.5),s=new um;return r.$$.update=()=>{r.$$.dirty&1&&console.log("vertices:",n)},[n,i,s]}class u_ extends Ze{constructor(e){super(),Ke(this,e,c_,l_,Xe,{})}}function f_(r,e,t){let n;return nt(r,kl,i=>t(0,n=i)),r.$$.update=()=>{r.$$.dirty&1&&console.log("faces:",n)},[n]}class d_ extends Ze{constructor(e){super(),Ke(this,e,f_,null,Xe,{})}}function h_(r){let e,t,n,i,s,o;return e=new a_({}),n=new u_({}),s=new d_({}),{c(){Ae(e.$$.fragment),t=ut(),Ae(n.$$.fragment),i=ut(),Ae(s.$$.fragment)},l(a){Te(e.$$.fragment,a),t=ft(a),Te(n.$$.fragment,a),i=ft(a),Te(s.$$.fragment,a)},m(a,l){Ce(e,a,l),et(a,t,l),Ce(n,a,l),et(a,i,l),Ce(s,a,l),o=!0},i(a){o||(de(e.$$.fragment,a),de(n.$$.fragment,a),de(s.$$.fragment,a),o=!0)},o(a){ge(e.$$.fragment,a),ge(n.$$.fragment,a),ge(s.$$.fragment,a),o=!1},d(a){Le(e,a),a&&He(t),Le(n,a),a&&He(i),Le(s,a)}}}function p_(r){let e,t,n;return t=new Jm({props:{$$slots:{default:[h_]},$$scope:{ctx:r}}}),{c(){e=Qi("div"),Ae(t.$$.fragment),this.h()},l(i){e=$i(i,"DIV",{class:!0});var s=er(e);Te(t.$$.fragment,s),s.forEach(He),this.h()},h(){Ur(e,"class","svelte-11stdqp")},m(i,s){et(i,e,s),Ce(t,e,null),n=!0},p(i,[s]){const o={};s&1&&(o.$$scope={dirty:s,ctx:i}),t.$set(o)},i(i){n||(de(t.$$.fragment,i),n=!0)},o(i){ge(t.$$.fragment,i),n=!1},d(i){i&&He(e),Le(t)}}}class m_ extends Ze{constructor(e){super(),Ke(this,e,null,p_,Xe,{})}}function g_(r){let e,t;return{c(){e=Qi("h1"),t=Zl("Geodesicraft")},l(n){e=$i(n,"H1",{});var i=er(e);t=Kl(i,"Geodesicraft"),i.forEach(He)},m(n,i){et(n,e,i),Xs(e,t)},p:On,i:On,o:On,d(n){n&&He(e)}}}class __ extends Ze{constructor(e){super(),Ke(this,e,null,g_,Xe,{})}}function v_(r){function e(){Ul.set([[[0,0,0],[1,1,1]],[[0,0,0],[1,-1,1]],[[0,0,0],[-1,-1,1]]])}function t(){Bl.set([[0,0,0],[1,1,1],[1,-1,1],[-1,-1,1]])}function n(){kl.set([])}return e(),t(),n(),[]}class x_ extends Ze{constructor(e){super(),Ke(this,e,v_,null,Xe,{})}}function b_(r){let e,t,n,i,s;return t=new __({}),i=new x_({}),{c(){e=Qi("div"),Ae(t.$$.fragment),n=ut(),Ae(i.$$.fragment),this.h()},l(o){e=$i(o,"DIV",{class:!0});var a=er(e);Te(t.$$.fragment,a),n=ft(a),Te(i.$$.fragment,a),a.forEach(He),this.h()},h(){Ur(e,"class","svelte-120pvx2")},m(o,a){et(o,e,a),Ce(t,e,null),Xs(e,n),Ce(i,e,null),s=!0},p:On,i(o){s||(de(t.$$.fragment,o),de(i.$$.fragment,o),s=!0)},o(o){ge(t.$$.fragment,o),ge(i.$$.fragment,o),s=!1},d(o){o&&He(e),Le(t),Le(i)}}}class M_ extends Ze{constructor(e){super(),Ke(this,e,null,b_,Xe,{})}}function S_(r){let e,t,n,i,s;return t=new M_({}),i=new m_({}),{c(){e=Qi("div"),Ae(t.$$.fragment),n=ut(),Ae(i.$$.fragment),this.h()},l(o){e=$i(o,"DIV",{class:!0});var a=er(e);Te(t.$$.fragment,a),n=ft(a),Te(i.$$.fragment,a),a.forEach(He),this.h()},h(){Ur(e,"class","svelte-1bj4wec")},m(o,a){et(o,e,a),Ce(t,e,null),Xs(e,n),Ce(i,e,null),s=!0},p:On,i(o){s||(de(t.$$.fragment,o),de(i.$$.fragment,o),s=!0)},o(o){ge(t.$$.fragment,o),ge(i.$$.fragment,o),s=!1},d(o){o&&He(e),Le(t),Le(i)}}}class D_ extends Ze{constructor(e){super(),Ke(this,e,null,S_,Xe,{})}}export{D_ as default};
