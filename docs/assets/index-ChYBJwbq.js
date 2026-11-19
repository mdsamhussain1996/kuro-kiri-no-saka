(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wa="169",mc=0,vo=1,gc=2,bl=1,wl=2,gi=3,ki=0,De=1,de=2,Di=0,wn=1,_o=2,yo=3,Mo=4,xc=5,Ki=100,vc=101,_c=102,yc=103,Mc=104,Sc=200,bc=201,wc=202,Ec=203,na=204,sa=205,Tc=206,Ac=207,Cc=208,Rc=209,Pc=210,Lc=211,Dc=212,Ic=213,Uc=214,ra=0,aa=1,oa=2,An=3,la=4,ca=5,ha=6,ua=7,El=0,Nc=1,kc=2,Ii=0,Fc=1,Oc=2,Bc=3,zc=4,Gc=5,Hc=6,Vc=7,Tl=300,Cn=301,Rn=302,da=303,fa=304,ar=306,pa=1e3,ji=1001,ma=1002,Ke=1003,Wc=1004,us=1005,ti=1006,_r=1007,Zi=1008,Mi=1009,Al=1010,Cl=1011,ss=1012,Xa=1013,Qi=1014,xi=1015,as=1016,Ya=1017,qa=1018,Pn=1020,Rl=35902,Pl=1021,Ll=1022,ii=1023,Dl=1024,Il=1025,En=1026,Ln=1027,Ul=1028,Ka=1029,Nl=1030,Ja=1031,$a=1033,Os=33776,Bs=33777,zs=33778,Gs=33779,ga=35840,xa=35841,va=35842,_a=35843,ya=36196,Ma=37492,Sa=37496,ba=37808,wa=37809,Ea=37810,Ta=37811,Aa=37812,Ca=37813,Ra=37814,Pa=37815,La=37816,Da=37817,Ia=37818,Ua=37819,Na=37820,ka=37821,Hs=36492,Fa=36494,Oa=36495,kl=36283,Ba=36284,za=36285,Ga=36286,Xc=3200,Yc=3201,Fl=0,qc=1,Li="",ni="srgb",Oi="srgb-linear",ja="display-p3",or="display-p3-linear",Ks="linear",ue="srgb",Js="rec709",$s="p3",rn=7680,So=519,Kc=512,Jc=513,$c=514,Ol=515,jc=516,Zc=517,Qc=518,th=519,Ha=35044,bo="300 es",vi=2e3,js=2001;class kn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wo=1234567;const $n=Math.PI/180,rs=180/Math.PI;function _i(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Te[s&255]+Te[s>>8&255]+Te[s>>16&255]+Te[s>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]).toLowerCase()}function Ee(s,t,e){return Math.max(t,Math.min(e,s))}function Za(s,t){return(s%t+t)%t}function eh(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function ih(s,t,e){return s!==t?(e-s)/(t-s):0}function jn(s,t,e){return(1-e)*s+e*t}function nh(s,t,e,i){return jn(s,t,1-Math.exp(-e*i))}function sh(s,t=1){return t-Math.abs(Za(s,t*2)-t)}function rh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ah(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function oh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function lh(s,t){return s+Math.random()*(t-s)}function ch(s){return s*(.5-Math.random())}function hh(s){s!==void 0&&(wo=s);let t=wo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uh(s){return s*$n}function dh(s){return s*rs}function fh(s){return(s&s-1)===0&&s!==0}function ph(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function mh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function gh(s,t,e,i,n){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),m=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":s.set(o*h,l*u,l*m,o*c);break;case"YZY":s.set(l*m,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*m,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ei(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const We={DEG2RAD:$n,RAD2DEG:rs,generateUUID:_i,clamp:Ee,euclideanModulo:Za,mapLinear:eh,inverseLerp:ih,lerp:jn,damp:nh,pingpong:sh,smoothstep:rh,smootherstep:ah,randInt:oh,randFloat:lh,randFloatSpread:ch,seededRandom:hh,degToRad:uh,radToDeg:dh,isPowerOfTwo:fh,ceilPowerOfTwo:ph,floorPowerOfTwo:mh,setQuaternionFromProperEuler:gh,normalize:se,denormalize:ei};class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,i,n,r,a,o,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],m=i[2],f=i[5],g=i[8],v=n[0],d=n[3],p=n[6],M=n[1],_=n[4],b=n[7],P=n[2],A=n[5],E=n[8];return r[0]=a*v+o*M+l*P,r[3]=a*d+o*_+l*A,r[6]=a*p+o*b+l*E,r[1]=c*v+h*M+u*P,r[4]=c*d+h*_+u*A,r[7]=c*p+h*b+u*E,r[2]=m*v+f*M+g*P,r[5]=m*d+f*_+g*A,r[8]=m*p+f*b+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,m=o*l-h*r,f=c*r-a*l,g=e*u+i*m+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(n*c-h*i)*v,t[2]=(o*i-n*a)*v,t[3]=m*v,t[4]=(h*e-n*l)*v,t[5]=(n*r-o*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(yr.makeScale(t,e)),this}rotate(t){return this.premultiply(yr.makeRotation(-t)),this}translate(t,e){return this.premultiply(yr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yr=new Bt;function Bl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xh(){const s=Zs("canvas");return s.style.display="block",s}const Eo={};function Vs(s){s in Eo||(Eo[s]=!0,console.warn(s))}function vh(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function _h(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const To=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ao=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bn={[Oi]:{transfer:Ks,primaries:Js,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[ni]:{transfer:ue,primaries:Js,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[or]:{transfer:Ks,primaries:$s,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Ao),fromReference:s=>s.applyMatrix3(To)},[ja]:{transfer:ue,primaries:$s,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ao),fromReference:s=>s.applyMatrix3(To).convertLinearToSRGB()}},Mh=new Set([Oi,or]),ie={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Mh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=Bn[t].toReference,n=Bn[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Bn[s].primaries},getTransfer:function(s){return s===Li?Ks:Bn[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(Bn[t].luminanceCoefficients)}};function Tn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Mr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let an;class Sh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{an===void 0&&(an=Zs("canvas")),an.width=t.width,an.height=t.height;const i=an.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=an}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Tn(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Tn(e[i]/255)*255):e[i]=Tn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bh=0;class zl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Sr(n[a].image)):r.push(Sr(n[a]))}else r=Sr(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function Sr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wh=0;class Ie extends kn{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,i=ji,n=ji,r=ti,a=Zi,o=ii,l=Mi,c=Ie.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=_i(),this.name="",this.source=new zl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pa:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pa:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=Tl;Ie.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,i=0,n=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],u=l[8],m=l[1],f=l[5],g=l[9],v=l[2],d=l[6],p=l[10];if(Math.abs(h-m)<.01&&Math.abs(u-v)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+m)<.1&&Math.abs(u+v)<.1&&Math.abs(g+d)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,b=(f+1)/2,P=(p+1)/2,A=(h+m)/4,E=(u+v)/4,R=(g+d)/4;return _>b&&_>P?_<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(_),n=A/i,r=E/i):b>P?b<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(b),i=A/n,r=R/n):P<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(P),i=E/r,n=R/r),this.set(i,n,r,e),this}let M=Math.sqrt((d-g)*(d-g)+(u-v)*(u-v)+(m-h)*(m-h));return Math.abs(M)<.001&&(M=1),this.x=(d-g)/M,this.y=(u-v)/M,this.z=(m-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eh extends kn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ie(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new zl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tn extends Eh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Gl extends Ie{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Th extends Ie{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const m=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=m,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==m||c!==f||h!==g){let d=1-o;const p=l*m+c*f+h*g+u*v,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const P=Math.sqrt(_),A=Math.atan2(P,p*M);d=Math.sin(d*A)/P,o=Math.sin(o*A)/P}const b=o*M;if(l=l*d+m*b,c=c*d+f*b,h=h*d+g*b,u=u*d+v*b,d===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],m=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*m,t[e+1]=l*g+h*m+c*u-o*f,t[e+2]=c*g+h*f+o*m-l*u,t[e+3]=h*g-o*u-l*m-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),m=l(i/2),f=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=m*h*u+c*f*g,this._y=c*f*u-m*h*g,this._z=c*h*g+m*f*u,this._w=c*h*u-m*f*g;break;case"YXZ":this._x=m*h*u+c*f*g,this._y=c*f*u-m*h*g,this._z=c*h*g-m*f*u,this._w=c*h*u+m*f*g;break;case"ZXY":this._x=m*h*u-c*f*g,this._y=c*f*u+m*h*g,this._z=c*h*g+m*f*u,this._w=c*h*u-m*f*g;break;case"ZYX":this._x=m*h*u-c*f*g,this._y=c*f*u+m*h*g,this._z=c*h*g-m*f*u,this._w=c*h*u+m*f*g;break;case"YZX":this._x=m*h*u+c*f*g,this._y=c*f*u+m*h*g,this._z=c*h*g-m*f*u,this._w=c*h*u-m*f*g;break;case"XZY":this._x=m*h*u-c*f*g,this._y=c*f*u-m*h*g,this._z=c*h*g+m*f*u,this._w=c*h*u+m*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],m=i+o+u;if(m>0){const f=.5/Math.sqrt(m+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,m=Math.sin(e*h)/c;return this._w=a*u+this._w*m,this._x=i*u+this._x*m,this._y=n*u+this._y*m,this._z=r*u+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Co.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Co.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return br.copy(this).projectOnVector(t),this.sub(br)}reflect(t){return this.sub(br.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const br=new C,Co=new os;class ls{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,$e):$e.fromBufferAttribute(r,a),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ds.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ds.copy(i.boundingBox)),ds.applyMatrix4(t.matrixWorld),this.union(ds)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zn),fs.subVectors(this.max,zn),on.subVectors(t.a,zn),ln.subVectors(t.b,zn),cn.subVectors(t.c,zn),Ei.subVectors(ln,on),Ti.subVectors(cn,ln),zi.subVectors(on,cn);let e=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-zi.z,zi.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,zi.z,0,-zi.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-zi.y,zi.x,0];return!wr(e,on,ln,cn,fs)||(e=[1,0,0,0,1,0,0,0,1],!wr(e,on,ln,cn,fs))?!1:(ps.crossVectors(Ei,Ti),e=[ps.x,ps.y,ps.z],wr(e,on,ln,cn,fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ui=[new C,new C,new C,new C,new C,new C,new C,new C],$e=new C,ds=new ls,on=new C,ln=new C,cn=new C,Ei=new C,Ti=new C,zi=new C,zn=new C,fs=new C,ps=new C,Gi=new C;function wr(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Gi.fromArray(s,r);const o=n.x*Math.abs(Gi.x)+n.y*Math.abs(Gi.y)+n.z*Math.abs(Gi.z),l=t.dot(Gi),c=e.dot(Gi),h=i.dot(Gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ah=new ls,Gn=new C,Er=new C;class lr{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ah.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gn.subVectors(t,this.center);const e=Gn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Gn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Er.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gn.copy(t.center).add(Er)),this.expandByPoint(Gn.copy(t.center).sub(Er))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new C,Tr=new C,ms=new C,Ai=new C,Ar=new C,gs=new C,Cr=new C;class Hl{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Tr.copy(t).add(e).multiplyScalar(.5),ms.copy(e).sub(t).normalize(),Ai.copy(this.origin).sub(Tr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ms),o=Ai.dot(this.direction),l=-Ai.dot(ms),c=Ai.lengthSq(),h=Math.abs(1-a*a);let u,m,f,g;if(h>0)if(u=a*l-o,m=a*o-l,g=r*h,u>=0)if(m>=-g)if(m<=g){const v=1/h;u*=v,m*=v,f=u*(u+a*m+2*o)+m*(a*u+m+2*l)+c}else m=r,u=Math.max(0,-(a*m+o)),f=-u*u+m*(m+2*l)+c;else m=-r,u=Math.max(0,-(a*m+o)),f=-u*u+m*(m+2*l)+c;else m<=-g?(u=Math.max(0,-(-a*r+o)),m=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+m*(m+2*l)+c):m<=g?(u=0,m=Math.min(Math.max(-r,-l),r),f=m*(m+2*l)+c):(u=Math.max(0,-(a*r+o)),m=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+m*(m+2*l)+c);else m=a>0?-r:r,u=Math.max(0,-(a*m+o)),f=-u*u+m*(m+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Tr).addScaledVector(ms,m),f}intersectSphere(t,e){di.subVectors(t.center,this.origin);const i=di.dot(this.direction),n=di.dot(di)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,m=this.origin;return c>=0?(i=(t.min.x-m.x)*c,n=(t.max.x-m.x)*c):(i=(t.max.x-m.x)*c,n=(t.min.x-m.x)*c),h>=0?(r=(t.min.y-m.y)*h,a=(t.max.y-m.y)*h):(r=(t.max.y-m.y)*h,a=(t.min.y-m.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-m.z)*u,l=(t.max.z-m.z)*u):(o=(t.max.z-m.z)*u,l=(t.min.z-m.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,i,n,r){Ar.subVectors(e,t),gs.subVectors(i,t),Cr.crossVectors(Ar,gs);let a=this.direction.dot(Cr),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ai.subVectors(this.origin,t);const l=o*this.direction.dot(gs.crossVectors(Ai,gs));if(l<0)return null;const c=o*this.direction.dot(Ar.cross(Ai));if(c<0||l+c>a)return null;const h=-o*Ai.dot(Cr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,n,r,a,o,l,c,h,u,m,f,g,v,d){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,u,m,f,g,v,d)}set(t,e,i,n,r,a,o,l,c,h,u,m,f,g,v,d){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=m,p[3]=f,p[7]=g,p[11]=v,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/hn.setFromMatrixColumn(t,0).length(),r=1/hn.setFromMatrixColumn(t,1).length(),a=1/hn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const m=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=m-v*c,e[9]=-o*l,e[2]=v-m*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const m=l*h,f=l*u,g=c*h,v=c*u;e[0]=m+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+m*o,e[10]=a*l}else if(t.order==="ZXY"){const m=l*h,f=l*u,g=c*h,v=c*u;e[0]=m-v*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-m*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const m=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=m*c+v,e[1]=l*u,e[5]=v*c+m,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const m=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-m*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=m-v*u}else if(t.order==="XZY"){const m=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=m*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=v*u+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ch,t,Rh)}lookAt(t,e,i){const n=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Ci.crossVectors(i,Ge),Ci.lengthSq()===0&&(Math.abs(i.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Ci.crossVectors(i,Ge)),Ci.normalize(),xs.crossVectors(Ge,Ci),n[0]=Ci.x,n[4]=xs.x,n[8]=Ge.x,n[1]=Ci.y,n[5]=xs.y,n[9]=Ge.y,n[2]=Ci.z,n[6]=xs.z,n[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],m=i[9],f=i[13],g=i[2],v=i[6],d=i[10],p=i[14],M=i[3],_=i[7],b=i[11],P=i[15],A=n[0],E=n[4],R=n[8],N=n[12],x=n[1],S=n[5],k=n[9],F=n[13],V=n[2],K=n[6],H=n[10],j=n[14],Y=n[3],ct=n[7],at=n[11],yt=n[15];return r[0]=a*A+o*x+l*V+c*Y,r[4]=a*E+o*S+l*K+c*ct,r[8]=a*R+o*k+l*H+c*at,r[12]=a*N+o*F+l*j+c*yt,r[1]=h*A+u*x+m*V+f*Y,r[5]=h*E+u*S+m*K+f*ct,r[9]=h*R+u*k+m*H+f*at,r[13]=h*N+u*F+m*j+f*yt,r[2]=g*A+v*x+d*V+p*Y,r[6]=g*E+v*S+d*K+p*ct,r[10]=g*R+v*k+d*H+p*at,r[14]=g*N+v*F+d*j+p*yt,r[3]=M*A+_*x+b*V+P*Y,r[7]=M*E+_*S+b*K+P*ct,r[11]=M*R+_*k+b*H+P*at,r[15]=M*N+_*F+b*j+P*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],m=t[10],f=t[14],g=t[3],v=t[7],d=t[11],p=t[15];return g*(+r*l*u-n*c*u-r*o*m+i*c*m+n*o*f-i*l*f)+v*(+e*l*f-e*c*m+r*a*m-n*a*f+n*c*h-r*l*h)+d*(+e*c*u-e*o*f-r*a*u+i*a*f+r*o*h-i*c*h)+p*(-n*o*h-e*l*u+e*o*m+n*a*u-i*a*m+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],m=t[10],f=t[11],g=t[12],v=t[13],d=t[14],p=t[15],M=u*d*c-v*m*c+v*l*f-o*d*f-u*l*p+o*m*p,_=g*m*c-h*d*c-g*l*f+a*d*f+h*l*p-a*m*p,b=h*v*c-g*u*c+g*o*f-a*v*f-h*o*p+a*u*p,P=g*u*l-h*v*l-g*o*m+a*v*m+h*o*d-a*u*d,A=e*M+i*_+n*b+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return t[0]=M*E,t[1]=(v*m*r-u*d*r-v*n*f+i*d*f+u*n*p-i*m*p)*E,t[2]=(o*d*r-v*l*r+v*n*c-i*d*c-o*n*p+i*l*p)*E,t[3]=(u*l*r-o*m*r-u*n*c+i*m*c+o*n*f-i*l*f)*E,t[4]=_*E,t[5]=(h*d*r-g*m*r+g*n*f-e*d*f-h*n*p+e*m*p)*E,t[6]=(g*l*r-a*d*r-g*n*c+e*d*c+a*n*p-e*l*p)*E,t[7]=(a*m*r-h*l*r+h*n*c-e*m*c-a*n*f+e*l*f)*E,t[8]=b*E,t[9]=(g*u*r-h*v*r-g*i*f+e*v*f+h*i*p-e*u*p)*E,t[10]=(a*v*r-g*o*r+g*i*c-e*v*c-a*i*p+e*o*p)*E,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*f-e*o*f)*E,t[12]=P*E,t[13]=(h*v*n-g*u*n+g*i*m-e*v*m-h*i*d+e*u*d)*E,t[14]=(g*o*n-a*v*n-g*i*l+e*v*l+a*i*d-e*o*d)*E,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*m+e*o*m)*E,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,m=r*c,f=r*h,g=r*u,v=a*h,d=a*u,p=o*u,M=l*c,_=l*h,b=l*u,P=i.x,A=i.y,E=i.z;return n[0]=(1-(v+p))*P,n[1]=(f+b)*P,n[2]=(g-_)*P,n[3]=0,n[4]=(f-b)*A,n[5]=(1-(m+p))*A,n[6]=(d+M)*A,n[7]=0,n[8]=(g+_)*E,n[9]=(d-M)*E,n[10]=(1-(m+v))*E,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=hn.set(n[0],n[1],n[2]).length();const a=hn.set(n[4],n[5],n[6]).length(),o=hn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],je.copy(this);const c=1/r,h=1/a,u=1/o;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=vi){const l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),m=(i+n)/(i-n);let f,g;if(o===vi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===js)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=vi){const l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(a-r),m=(e+t)*c,f=(i+n)*h;let g,v;if(o===vi)g=(a+r)*u,v=-2*u;else if(o===js)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const hn=new C,je=new le,Ch=new C(0,0,0),Rh=new C(1,1,1),Ci=new C,xs=new C,Ge=new C,Ro=new le,Po=new os;class ai{constructor(t=0,e=0,i=0,n=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],m=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ro.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ro,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Po.setFromEuler(this),this.setFromQuaternion(Po,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class Vl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ph=0;const Lo=new C,un=new os,fi=new le,vs=new C,Hn=new C,Lh=new C,Dh=new os,Do=new C(1,0,0),Io=new C(0,1,0),Uo=new C(0,0,1),No={type:"added"},Ih={type:"removed"},dn={type:"childadded",child:null},Rr={type:"childremoved",child:null};class be extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new C,e=new ai,i=new os,n=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new le},normalMatrix:{value:new Bt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return un.setFromAxisAngle(t,e),this.quaternion.multiply(un),this}rotateOnWorldAxis(t,e){return un.setFromAxisAngle(t,e),this.quaternion.premultiply(un),this}rotateX(t){return this.rotateOnAxis(Do,t)}rotateY(t){return this.rotateOnAxis(Io,t)}rotateZ(t){return this.rotateOnAxis(Uo,t)}translateOnAxis(t,e){return Lo.copy(t).applyQuaternion(this.quaternion),this.position.add(Lo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Do,t)}translateY(t){return this.translateOnAxis(Io,t)}translateZ(t){return this.translateOnAxis(Uo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?vs.copy(t):vs.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Hn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Hn,vs,this.up):fi.lookAt(vs,Hn,this.up),this.quaternion.setFromRotationMatrix(fi),n&&(fi.extractRotation(n.matrixWorld),un.setFromRotationMatrix(fi),this.quaternion.premultiply(un.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(No),dn.child=t,this.dispatchEvent(dn),dn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ih),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(No),dn.child=t,this.dispatchEvent(dn),dn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hn,t,Lh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hn,Dh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),m=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),m.length>0&&(i.skeletons=m),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}be.DEFAULT_UP=new C(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new C,pi=new C,Pr=new C,mi=new C,fn=new C,pn=new C,ko=new C,Lr=new C,Dr=new C,Ir=new C,Ur=new ae,Nr=new ae,kr=new ae;class qe{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ze.subVectors(t,e),n.cross(Ze);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Ze.subVectors(n,e),pi.subVectors(i,e),Pr.subVectors(t,e);const a=Ze.dot(Ze),o=Ze.dot(pi),l=Ze.dot(Pr),c=pi.dot(pi),h=pi.dot(Pr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const m=1/u,f=(c*l-o*h)*m,g=(a*h-o*l)*m;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(a,mi.y),l.addScaledVector(o,mi.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return Ur.setScalar(0),Nr.setScalar(0),kr.setScalar(0),Ur.fromBufferAttribute(t,e),Nr.fromBufferAttribute(t,i),kr.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Ur,r.x),a.addScaledVector(Nr,r.y),a.addScaledVector(kr,r.z),a}static isFrontFacing(t,e,i,n){return Ze.subVectors(i,e),pi.subVectors(t,e),Ze.cross(pi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Ze.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return qe.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;fn.subVectors(n,i),pn.subVectors(r,i),Lr.subVectors(t,i);const l=fn.dot(Lr),c=pn.dot(Lr);if(l<=0&&c<=0)return e.copy(i);Dr.subVectors(t,n);const h=fn.dot(Dr),u=pn.dot(Dr);if(h>=0&&u<=h)return e.copy(n);const m=l*u-h*c;if(m<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(fn,a);Ir.subVectors(t,r);const f=fn.dot(Ir),g=pn.dot(Ir);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(pn,o);const d=h*g-f*u;if(d<=0&&u-h>=0&&f-g>=0)return ko.subVectors(r,n),o=(u-h)/(u-h+(f-g)),e.copy(n).addScaledVector(ko,o);const p=1/(d+v+m);return a=v*p,o=m*p,e.copy(i).addScaledVector(fn,a).addScaledVector(pn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Fr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class nt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=ie.workingColorSpace){if(t=Za(t,1),e=Ee(e,0,1),i=Ee(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Fr(a,r,t+1/3),this.g=Fr(a,r,t),this.b=Fr(a,r,t-1/3)}return ie.toWorkingColorSpace(this,n),this}setStyle(t,e=ni){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ni){const i=Wl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ni){return ie.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Ee(Ae.r*255,0,255))*65536+Math.round(Ee(Ae.g*255,0,255))*256+Math.round(Ee(Ae.b*255,0,255))}getHexString(t=ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ae.copy(this),e);const i=Ae.r,n=Ae.g,r=Ae.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=ni){ie.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,i=Ae.g,n=Ae.b;return t!==ni?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(_s);const i=jn(Ri.h,_s.h,e),n=jn(Ri.s,_s.s,e),r=jn(Ri.l,_s.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new nt;nt.NAMES=Wl;let Uh=0;class nn extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=wn,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=sa,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=An,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=So,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rn,this.stencilZFail=rn,this.stencilZPass=rn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wn&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==na&&(i.blendSrc=this.blendSrc),this.blendDst!==sa&&(i.blendDst=this.blendDst),this.blendEquation!==Ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==An&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==So&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $t extends nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new C,ys=new vt;class Ce{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ha,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ei(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=se(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),i=se(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),i=se(i,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),i=se(i,this.array),n=se(n,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ha&&(t.usage=this.usage),t}}class Xl extends Ce{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Yl extends Ce{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class jt extends Ce{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Nh=0;const Ye=new le,Or=new be,mn=new C,He=new ls,Vn=new ls,Se=new C;class fe extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bl(t)?Yl:Xl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,i){return Ye.makeTranslation(t,e,i),this.applyMatrix4(Ye),this}scale(t,e,i){return Ye.makeScale(t,e,i),this.applyMatrix4(Ye),this}lookAt(t){return Or.lookAt(t),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mn).negate(),this.translate(mn.x,mn.y,mn.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];He.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Vn.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(He.min,Vn.min),He.expandByPoint(Se),Se.addVectors(He.max,Vn.max),He.expandByPoint(Se)):(He.expandByPoint(Vn.min),He.expandByPoint(Vn.max))}He.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Se.fromBufferAttribute(o,c),l&&(mn.fromBufferAttribute(t,c),Se.add(mn)),n=Math.max(n,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new C,l[R]=new C;const c=new C,h=new C,u=new C,m=new vt,f=new vt,g=new vt,v=new C,d=new C;function p(R,N,x){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,N),u.fromBufferAttribute(i,x),m.fromBufferAttribute(r,R),f.fromBufferAttribute(r,N),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),f.sub(m),g.sub(m);const S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),d.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),o[R].add(v),o[N].add(v),o[x].add(v),l[R].add(d),l[N].add(d),l[x].add(d))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,N=M.length;R<N;++R){const x=M[R],S=x.start,k=x.count;for(let F=S,V=S+k;F<V;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const _=new C,b=new C,P=new C,A=new C;function E(R){P.fromBufferAttribute(n,R),A.copy(P);const N=o[R];_.copy(N),_.sub(P.multiplyScalar(P.dot(N))).normalize(),b.crossVectors(A,N);const S=b.dot(l[R])<0?-1:1;a.setXYZW(R,_.x,_.y,_.z,S)}for(let R=0,N=M.length;R<N;++R){const x=M[R],S=x.start,k=x.count;for(let F=S,V=S+k;F<V;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,f=i.count;m<f;m++)i.setXYZ(m,0,0,0);const n=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let m=0,f=t.count;m<f;m+=3){const g=t.getX(m+0),v=t.getX(m+1),d=t.getX(m+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,d),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,d),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let m=0,f=e.count;m<f;m+=3)n.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),a.fromBufferAttribute(e,m+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,m=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,d=l.length;v<d;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)m[g++]=c[f++]}return new Ce(m,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fe,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const m=c[h],f=t(m,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,m=c.length;u<m;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let m=0,f=u.length;m<f;m++)h.push(u[m].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fo=new le,Hi=new Hl,Ms=new lr,Oo=new C,Ss=new C,bs=new C,ws=new C,Br=new C,Es=new C,Bo=new C,Ts=new C;class q extends be{constructor(t=new fe,e=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){Es.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Br.fromBufferAttribute(u,t),a?Es.addScaledVector(Br,h):Es.addScaledVector(Br.sub(e),h))}e.add(Es)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(r),Hi.copy(t.ray).recast(t.near),!(Ms.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Ms,Oo)===null||Hi.origin.distanceToSquared(Oo)>(t.far-t.near)**2))&&(Fo.copy(r).invert(),Hi.copy(t.ray).applyMatrix4(Fo),!(i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,m=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=m.length;g<v;g++){const d=m[g],p=a[d.materialIndex],M=Math.max(d.start,f.start),_=Math.min(o.count,Math.min(d.start+d.count,f.start+f.count));for(let b=M,P=_;b<P;b+=3){const A=o.getX(b),E=o.getX(b+1),R=o.getX(b+2);n=As(this,p,t,i,c,h,u,A,E,R),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=d.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let d=g,p=v;d<p;d+=3){const M=o.getX(d),_=o.getX(d+1),b=o.getX(d+2);n=As(this,a,t,i,c,h,u,M,_,b),n&&(n.faceIndex=Math.floor(d/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=m.length;g<v;g++){const d=m[g],p=a[d.materialIndex],M=Math.max(d.start,f.start),_=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let b=M,P=_;b<P;b+=3){const A=b,E=b+1,R=b+2;n=As(this,p,t,i,c,h,u,A,E,R),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=d.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let d=g,p=v;d<p;d+=3){const M=d,_=d+1,b=d+2;n=As(this,a,t,i,c,h,u,M,_,b),n&&(n.faceIndex=Math.floor(d/3),e.push(n))}}}}function kh(s,t,e,i,n,r,a,o){let l;if(t.side===De?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===ki,o),l===null)return null;Ts.copy(o),Ts.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ts);return c<e.near||c>e.far?null:{distance:c,point:Ts.clone(),object:s}}function As(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,Ss),s.getVertexPosition(l,bs),s.getVertexPosition(c,ws);const h=kh(s,t,e,i,Ss,bs,ws,Bo);if(h){const u=new C;qe.getBarycoord(Bo,Ss,bs,ws,u),n&&(h.uv=qe.getInterpolatedAttribute(n,o,l,c,u,new vt)),r&&(h.uv1=qe.getInterpolatedAttribute(r,o,l,c,u,new vt)),a&&(h.normal=qe.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const m={a:o,b:l,c,normal:new C,materialIndex:0};qe.getNormal(Ss,bs,ws,m.normal),h.face=m,h.barycoord=u}return h}class Jt extends fe{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let m=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function g(v,d,p,M,_,b,P,A,E,R,N){const x=b/E,S=P/R,k=b/2,F=P/2,V=A/2,K=E+1,H=R+1;let j=0,Y=0;const ct=new C;for(let at=0;at<H;at++){const yt=at*S-F;for(let Vt=0;Vt<K;Vt++){const Zt=Vt*x-k;ct[v]=Zt*M,ct[d]=yt*_,ct[p]=V,c.push(ct.x,ct.y,ct.z),ct[v]=0,ct[d]=0,ct[p]=A>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(Vt/E),u.push(1-at/R),j+=1}}for(let at=0;at<R;at++)for(let yt=0;yt<E;yt++){const Vt=m+yt+K*at,Zt=m+yt+K*(at+1),W=m+(yt+1)+K*(at+1),tt=m+(yt+1)+K*at;l.push(Vt,Zt,tt),l.push(Zt,W,tt),Y+=6}o.addGroup(f,Y,N),f+=Y,m+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Dn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Le(s){const t={};for(let e=0;e<s.length;e++){const i=Dn(s[e]);for(const n in i)t[n]=i[n]}return t}function Fh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ql(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Oh={clone:Dn,merge:Le};var Bh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bh,this.fragmentShader=zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dn(t.uniforms),this.uniformsGroups=Fh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Kl extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new C,zo=new vt,Go=new vt;class Ve extends Kl{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($n*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rs*2*Math.atan(Math.tan($n*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,zo,Go),e.subVectors(Go,zo)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($n*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gn=-90,xn=1;class Gh extends be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ve(gn,xn,t,e);n.layers=this.layers,this.add(n);const r=new Ve(gn,xn,t,e);r.layers=this.layers,this.add(r);const a=new Ve(gn,xn,t,e);a.layers=this.layers,this.add(a);const o=new Ve(gn,xn,t,e);o.layers=this.layers,this.add(o);const l=new Ve(gn,xn,t,e);l.layers=this.layers,this.add(l);const c=new Ve(gn,xn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===vi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===js)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),m=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,m,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Jl extends Ie{constructor(t,e,i,n,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Cn,super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hh extends tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Jl(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Jt(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:Dn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:De,blending:Di});r.uniforms.tEquirect.value=e;const a=new q(n,r),o=e.minFilter;return e.minFilter===Zi&&(e.minFilter=ti),new Gh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}const zr=new C,Vh=new C,Wh=new Bt;class Yi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=zr.subVectors(i,e).cross(Vh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(zr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Wh.getNormalMatrix(t),n=this.coplanarPoint(zr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new lr,Cs=new C;class Qa{constructor(t=new Yi,e=new Yi,i=new Yi,n=new Yi,r=new Yi,a=new Yi){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=vi){const i=this.planes,n=t.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],m=n[7],f=n[8],g=n[9],v=n[10],d=n[11],p=n[12],M=n[13],_=n[14],b=n[15];if(i[0].setComponents(l-r,m-c,d-f,b-p).normalize(),i[1].setComponents(l+r,m+c,d+f,b+p).normalize(),i[2].setComponents(l+a,m+h,d+g,b+M).normalize(),i[3].setComponents(l-a,m-h,d-g,b-M).normalize(),i[4].setComponents(l-o,m-u,d-v,b-_).normalize(),e===vi)i[5].setComponents(l+o,m+u,d+v,b+_).normalize();else if(e===js)i[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Cs.x=n.normal.x>0?t.max.x:t.min.x,Cs.y=n.normal.y>0?t.max.y:t.min.y,Cs.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $l(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Xh(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,m=s.createBuffer();s.bindBuffer(l,m),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let m=0;for(let f=1;f<u.length;f++){const g=u[m],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++m,u[m]=v)}u.length=m+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}class li extends fe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,m=e/l,f=[],g=[],v=[],d=[];for(let p=0;p<h;p++){const M=p*m-a;for(let _=0;_<c;_++){const b=_*u-r;g.push(b,-M,0),v.push(0,0,1),d.push(_/o),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const _=M+c*p,b=M+c*(p+1),P=M+1+c*(p+1),A=M+1+c*p;f.push(_,b,A),f.push(b,P,A)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.width,t.height,t.widthSegments,t.heightSegments)}}var Yh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$h=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,su=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ru=`#ifdef USE_IRIDESCENCE
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
#endif`,au=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mu=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,xu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Su="gl_FragColor = linearToOutputTexel( gl_FragColor );",bu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tu=`#ifdef USE_ENVMAP
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
#endif`,Au=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Du=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iu=`#ifdef USE_GRADIENTMAP
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
}`,Uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Ou=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Xu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ku=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ju=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ju=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,td=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ed=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,od=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dd=`#ifndef FLAT_SHADED
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
#endif`,pd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Md=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Td=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Pd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
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
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ud=`#ifdef USE_SKINNING
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
#endif`,Nd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Od=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zd=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yd=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Zd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,tf=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,af=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,of=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,cf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,uf=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ff=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,mf=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,xf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,_f=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Mf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Ef=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:Yh,alphahash_pars_fragment:qh,alphamap_fragment:Kh,alphamap_pars_fragment:Jh,alphatest_fragment:$h,alphatest_pars_fragment:jh,aomap_fragment:Zh,aomap_pars_fragment:Qh,batching_pars_vertex:tu,batching_vertex:eu,begin_vertex:iu,beginnormal_vertex:nu,bsdfs:su,iridescence_fragment:ru,bumpmap_pars_fragment:au,clipping_planes_fragment:ou,clipping_planes_pars_fragment:lu,clipping_planes_pars_vertex:cu,clipping_planes_vertex:hu,color_fragment:uu,color_pars_fragment:du,color_pars_vertex:fu,color_vertex:pu,common:mu,cube_uv_reflection_fragment:gu,defaultnormal_vertex:xu,displacementmap_pars_vertex:vu,displacementmap_vertex:_u,emissivemap_fragment:yu,emissivemap_pars_fragment:Mu,colorspace_fragment:Su,colorspace_pars_fragment:bu,envmap_fragment:wu,envmap_common_pars_fragment:Eu,envmap_pars_fragment:Tu,envmap_pars_vertex:Au,envmap_physical_pars_fragment:Ou,envmap_vertex:Cu,fog_vertex:Ru,fog_pars_vertex:Pu,fog_fragment:Lu,fog_pars_fragment:Du,gradientmap_pars_fragment:Iu,lightmap_pars_fragment:Uu,lights_lambert_fragment:Nu,lights_lambert_pars_fragment:ku,lights_pars_begin:Fu,lights_toon_fragment:Bu,lights_toon_pars_fragment:zu,lights_phong_fragment:Gu,lights_phong_pars_fragment:Hu,lights_physical_fragment:Vu,lights_physical_pars_fragment:Wu,lights_fragment_begin:Xu,lights_fragment_maps:Yu,lights_fragment_end:qu,logdepthbuf_fragment:Ku,logdepthbuf_pars_fragment:Ju,logdepthbuf_pars_vertex:$u,logdepthbuf_vertex:ju,map_fragment:Zu,map_pars_fragment:Qu,map_particle_fragment:td,map_particle_pars_fragment:ed,metalnessmap_fragment:id,metalnessmap_pars_fragment:nd,morphinstance_vertex:sd,morphcolor_vertex:rd,morphnormal_vertex:ad,morphtarget_pars_vertex:od,morphtarget_vertex:ld,normal_fragment_begin:cd,normal_fragment_maps:hd,normal_pars_fragment:ud,normal_pars_vertex:dd,normal_vertex:fd,normalmap_pars_fragment:pd,clearcoat_normal_fragment_begin:md,clearcoat_normal_fragment_maps:gd,clearcoat_pars_fragment:xd,iridescence_pars_fragment:vd,opaque_fragment:_d,packing:yd,premultiplied_alpha_fragment:Md,project_vertex:Sd,dithering_fragment:bd,dithering_pars_fragment:wd,roughnessmap_fragment:Ed,roughnessmap_pars_fragment:Td,shadowmap_pars_fragment:Ad,shadowmap_pars_vertex:Cd,shadowmap_vertex:Rd,shadowmask_pars_fragment:Pd,skinbase_vertex:Ld,skinning_pars_vertex:Dd,skinning_vertex:Id,skinnormal_vertex:Ud,specularmap_fragment:Nd,specularmap_pars_fragment:kd,tonemapping_fragment:Fd,tonemapping_pars_fragment:Od,transmission_fragment:Bd,transmission_pars_fragment:zd,uv_pars_fragment:Gd,uv_pars_vertex:Hd,uv_vertex:Vd,worldpos_vertex:Wd,background_vert:Xd,background_frag:Yd,backgroundCube_vert:qd,backgroundCube_frag:Kd,cube_vert:Jd,cube_frag:$d,depth_vert:jd,depth_frag:Zd,distanceRGBA_vert:Qd,distanceRGBA_frag:tf,equirect_vert:ef,equirect_frag:nf,linedashed_vert:sf,linedashed_frag:rf,meshbasic_vert:af,meshbasic_frag:of,meshlambert_vert:lf,meshlambert_frag:cf,meshmatcap_vert:hf,meshmatcap_frag:uf,meshnormal_vert:df,meshnormal_frag:ff,meshphong_vert:pf,meshphong_frag:mf,meshphysical_vert:gf,meshphysical_frag:xf,meshtoon_vert:vf,meshtoon_frag:_f,points_vert:yf,points_frag:Mf,shadow_vert:Sf,shadow_frag:bf,sprite_vert:wf,sprite_frag:Ef},st={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},si={basic:{uniforms:Le([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Le([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Le([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Le([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Le([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Le([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Le([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Le([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Le([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Le([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Le([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Le([st.common,st.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Le([st.lights,st.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};si.physical={uniforms:Le([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Rs={r:0,b:0,g:0},Wi=new ai,Tf=new le;function Af(s,t,e,i,n,r,a){const o=new nt(0);let l=r===!0?0:1,c,h,u=null,m=0,f=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function v(M){let _=!1;const b=g(M);b===null?p(o,l):b&&b.isColor&&(p(b,1),_=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function d(M,_){const b=g(_);b&&(b.isCubeTexture||b.mapping===ar)?(h===void 0&&(h=new q(new Jt(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Dn(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Wi.copy(_.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tf.makeRotationFromEuler(Wi)),h.material.toneMapped=ie.getTransfer(b.colorSpace)!==ue,(u!==b||m!==b.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,m=b.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new q(new li(2,2),new oi({name:"BackgroundMaterial",uniforms:Dn(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ie.getTransfer(b.colorSpace)!==ue,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||m!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,m=b.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,_){M.getRGB(Rs,ql(s)),i.buffers.color.setClear(Rs.r,Rs.g,Rs.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:v,addToRenderList:d}}function Cf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=m(null);let r=n,a=!1;function o(x,S,k,F,V){let K=!1;const H=u(F,k,S);r!==H&&(r=H,c(r.object)),K=f(x,F,k,V),K&&g(x,F,k,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,b(x,S,k,F),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,S,k){const F=k.wireframe===!0;let V=i[x.id];V===void 0&&(V={},i[x.id]=V);let K=V[S.id];K===void 0&&(K={},V[S.id]=K);let H=K[F];return H===void 0&&(H=m(l()),K[F]=H),H}function m(x){const S=[],k=[],F=[];for(let V=0;V<e;V++)S[V]=0,k[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:k,attributeDivisors:F,object:x,attributes:{},index:null}}function f(x,S,k,F){const V=r.attributes,K=S.attributes;let H=0;const j=k.getAttributes();for(const Y in j)if(j[Y].location>=0){const at=V[Y];let yt=K[Y];if(yt===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(yt=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(yt=x.instanceColor)),at===void 0||at.attribute!==yt||yt&&at.data!==yt.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function g(x,S,k,F){const V={},K=S.attributes;let H=0;const j=k.getAttributes();for(const Y in j)if(j[Y].location>=0){let at=K[Y];at===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(at=x.instanceColor));const yt={};yt.attribute=at,at&&at.data&&(yt.data=at.data),V[Y]=yt,H++}r.attributes=V,r.attributesNum=H,r.index=F}function v(){const x=r.newAttributes;for(let S=0,k=x.length;S<k;S++)x[S]=0}function d(x){p(x,0)}function p(x,S){const k=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;k[x]=1,F[x]===0&&(s.enableVertexAttribArray(x),F[x]=1),V[x]!==S&&(s.vertexAttribDivisor(x,S),V[x]=S)}function M(){const x=r.newAttributes,S=r.enabledAttributes;for(let k=0,F=S.length;k<F;k++)S[k]!==x[k]&&(s.disableVertexAttribArray(k),S[k]=0)}function _(x,S,k,F,V,K,H){H===!0?s.vertexAttribIPointer(x,S,k,V,K):s.vertexAttribPointer(x,S,k,F,V,K)}function b(x,S,k,F){v();const V=F.attributes,K=k.getAttributes(),H=S.defaultAttributeValues;for(const j in K){const Y=K[j];if(Y.location>=0){let ct=V[j];if(ct===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(ct=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(ct=x.instanceColor)),ct!==void 0){const at=ct.normalized,yt=ct.itemSize,Vt=t.get(ct);if(Vt===void 0)continue;const Zt=Vt.buffer,W=Vt.type,tt=Vt.bytesPerElement,gt=W===s.INT||W===s.UNSIGNED_INT||ct.gpuType===Xa;if(ct.isInterleavedBufferAttribute){const ht=ct.data,Lt=ht.stride,Ct=ct.offset;if(ht.isInstancedInterleavedBuffer){for(let Wt=0;Wt<Y.locationSize;Wt++)p(Y.location+Wt,ht.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Wt=0;Wt<Y.locationSize;Wt++)d(Y.location+Wt);s.bindBuffer(s.ARRAY_BUFFER,Zt);for(let Wt=0;Wt<Y.locationSize;Wt++)_(Y.location+Wt,yt/Y.locationSize,W,at,Lt*tt,(Ct+yt/Y.locationSize*Wt)*tt,gt)}else{if(ct.isInstancedBufferAttribute){for(let ht=0;ht<Y.locationSize;ht++)p(Y.location+ht,ct.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ht=0;ht<Y.locationSize;ht++)d(Y.location+ht);s.bindBuffer(s.ARRAY_BUFFER,Zt);for(let ht=0;ht<Y.locationSize;ht++)_(Y.location+ht,yt/Y.locationSize,W,at,yt*tt,yt/Y.locationSize*ht*tt,gt)}}else if(H!==void 0){const at=H[j];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(Y.location,at);break;case 3:s.vertexAttrib3fv(Y.location,at);break;case 4:s.vertexAttrib4fv(Y.location,at);break;default:s.vertexAttrib1fv(Y.location,at)}}}}M()}function P(){R();for(const x in i){const S=i[x];for(const k in S){const F=S[k];for(const V in F)h(F[V].object),delete F[V];delete S[k]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const S=i[x.id];for(const k in S){const F=S[k];for(const V in F)h(F[V].object),delete F[V];delete S[k]}delete i[x.id]}function E(x){for(const S in i){const k=i[S];if(k[x.id]===void 0)continue;const F=k[x.id];for(const V in F)h(F[V].object),delete F[V];delete k[x.id]}}function R(){N(),a=!0,r!==n&&(r=n,c(r.object))}function N(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:N,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:d,disableUnusedAttributes:M}}function Rf(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,m){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],m[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,m,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<m.length;v++)e.update(g,i,m[v])}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Pf(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(E){return!(E!==ii&&i.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const R=E===as&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Mi&&i.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==xi&&!R)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,m=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(m===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),d=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:m,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:P,maxSamples:A}}function Lf(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new Yi,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,m){const f=u.length!==0||m||i!==0||n;return n=m,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,m){e=h(u,m,0)},this.setState=function(u,m,f){const g=u.clippingPlanes,v=u.clipIntersection,d=u.clipShadows,p=s.get(u);if(!n||g===null||g.length===0||r&&!d)r?h(null):c();else{const M=r?0:i,_=M*4;let b=p.clippingState||null;l.value=b,b=h(g,m,_,f);for(let P=0;P!==_;++P)b[P]=e[P];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,m,f,g){const v=u!==null?u.length:0;let d=null;if(v!==0){if(d=l.value,g!==!0||d===null){const p=f+v*4,M=m.matrixWorldInverse;o.getNormalMatrix(M),(d===null||d.length<p)&&(d=new Float32Array(p));for(let _=0,b=f;_!==v;++_,b+=4)a.copy(u[_]).applyMatrix4(M,o),a.normal.toArray(d,b),d[b+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,d}}function Df(s){let t=new WeakMap;function e(a,o){return o===da?a.mapping=Cn:o===fa&&(a.mapping=Rn),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===da||o===fa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Hh(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class jl extends Kl{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const bn=4,Ho=[.125,.215,.35,.446,.526,.582],Ji=20,Gr=new jl,Vo=new nt;let Hr=null,Vr=0,Wr=0,Xr=!1;const qi=(1+Math.sqrt(5))/2,vn=1/qi,Wo=[new C(-qi,vn,0),new C(qi,vn,0),new C(-vn,0,qi),new C(vn,0,qi),new C(0,qi,-vn),new C(0,qi,vn),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Xo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Hr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hr,Vr,Wr),this._renderer.xr.enabled=Xr,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cn||t.mapping===Rn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:as,format:ii,colorSpace:Oi,depthBuffer:!1},n=Yo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yo(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=If(r)),this._blurMaterial=Uf(r,t,e)}return n}_compileMaterial(t){const e=new q(this._lodPlanes[0],t);this._renderer.compile(e,Gr)}_sceneToCubeUV(t,e,i,n){const o=new Ve(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,m=h.toneMapping;h.getClearColor(Vo),h.toneMapping=Ii,h.autoClear=!1;const f=new $t({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new q(new Jt,f);let v=!1;const d=t.background;d?d.isColor&&(f.color.copy(d),t.background=null,v=!0):(f.color.copy(Vo),v=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const _=this._cubeSize;Ps(n,M*_,p>2?_:0,_,_),h.setRenderTarget(n),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=m,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Cn||t.mapping===Rn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qo());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new q(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ps(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Gr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Wo[(n-r-1)%Wo.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new q(this._lodPlanes[n],c),m=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ji-1),v=r/g,d=isFinite(r)?1+Math.floor(h*v):Ji;d>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ji}`);const p=[];let M=0;for(let E=0;E<Ji;++E){const R=E/v,N=Math.exp(-R*R/2);p.push(N),E===0?M+=N:E<d&&(M+=2*N)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;m.envMap.value=t.texture,m.samples.value=d,m.weights.value=p,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:_}=this;m.dTheta.value=g,m.mipInt.value=_-i;const b=this._sizeLods[n],P=3*b*(n>_-bn?n-_+bn:0),A=4*(this._cubeSize-b);Ps(e,P,A,3*b,2*b),l.setRenderTarget(e),l.render(u,Gr)}}function If(s){const t=[],e=[],i=[];let n=s;const r=s-bn+1+Ho.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);e.push(o);let l=1/o;a>s-bn?l=Ho[a-s+bn-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,m=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,d=2,p=1,M=new Float32Array(v*g*f),_=new Float32Array(d*g*f),b=new Float32Array(p*g*f);for(let A=0;A<f;A++){const E=A%3*2/3-1,R=A>2?0:-1,N=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];M.set(N,v*g*A),_.set(m,d*g*A);const x=[A,A,A,A,A,A];b.set(x,p*g*A)}const P=new fe;P.setAttribute("position",new Ce(M,v)),P.setAttribute("uv",new Ce(_,d)),P.setAttribute("faceIndex",new Ce(b,p)),t.push(P),n>bn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Yo(s,t,e){const i=new tn(s,t,e);return i.texture.mapping=ar,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ps(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Uf(s,t,e){const i=new Float32Array(Ji),n=new C(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:to(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function qo(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:to(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Ko(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function to(){return`

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
	`}function Nf(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===da||l===fa,h=l===Cn||l===Rn;if(c||h){let u=t.get(o);const m=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return e===null&&(e=new Xo(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new Xo(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function kf(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Vs("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Ff(s,t,e,i){const n={},r=new WeakMap;function a(u){const m=u.target;m.index!==null&&t.remove(m.index);for(const g in m.attributes)t.remove(m.attributes[g]);for(const g in m.morphAttributes){const v=m.morphAttributes[g];for(let d=0,p=v.length;d<p;d++)t.remove(v[d])}m.removeEventListener("dispose",a),delete n[m.id];const f=r.get(m);f&&(t.remove(f),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function o(u,m){return n[m.id]===!0||(m.addEventListener("dispose",a),n[m.id]=!0,e.memory.geometries++),m}function l(u){const m=u.attributes;for(const g in m)t.update(m[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let d=0,p=v.length;d<p;d++)t.update(v[d],s.ARRAY_BUFFER)}}function c(u){const m=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let _=0,b=M.length;_<b;_+=3){const P=M[_+0],A=M[_+1],E=M[_+2];m.push(P,A,A,E,E,P)}}else if(g!==void 0){const M=g.array;v=g.version;for(let _=0,b=M.length/3-1;_<b;_+=3){const P=_+0,A=_+1,E=_+2;m.push(P,A,A,E,E,P)}}else return;const d=new(Bl(m)?Yl:Xl)(m,1);d.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,d)}function h(u){const m=r.get(u);if(m){const f=u.index;f!==null&&m.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Of(s,t,e){let i;function n(m){i=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,f){s.drawElements(i,f,r,m*a),e.update(f,i,1)}function c(m,f,g){g!==0&&(s.drawElementsInstanced(i,f,r,m*a,g),e.update(f,i,g))}function h(m,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,m,0,g);let d=0;for(let p=0;p<g;p++)d+=f[p];e.update(d,i,1)}function u(m,f,g,v){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<m.length;p++)c(m[p]/a,f[p],v[p]);else{d.multiDrawElementsInstancedWEBGL(i,f,0,r,m,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M];for(let M=0;M<v.length;M++)e.update(p,i,v[M])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Bf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function zf(s,t,e){const i=new WeakMap,n=new ae;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let m=i.get(o);if(m===void 0||m.count!==u){let x=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var f=x;m!==void 0&&m.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),d===!0&&(b=3);let P=o.attributes.position.count*b,A=1;P>t.maxTextureSize&&(A=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const E=new Float32Array(P*A*4*u),R=new Gl(E,P,A,u);R.type=xi,R.needsUpdate=!0;const N=b*4;for(let S=0;S<u;S++){const k=p[S],F=M[S],V=_[S],K=P*A*4*S;for(let H=0;H<k.count;H++){const j=H*N;g===!0&&(n.fromBufferAttribute(k,H),E[K+j+0]=n.x,E[K+j+1]=n.y,E[K+j+2]=n.z,E[K+j+3]=0),v===!0&&(n.fromBufferAttribute(F,H),E[K+j+4]=n.x,E[K+j+5]=n.y,E[K+j+6]=n.z,E[K+j+7]=0),d===!0&&(n.fromBufferAttribute(V,H),E[K+j+8]=n.x,E[K+j+9]=n.y,E[K+j+10]=n.z,E[K+j+11]=V.itemSize===4?n.w:1)}}m={count:u,texture:R,size:new vt(P,A)},i.set(o,m),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let d=0;d<c.length;d++)g+=c[d];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:r}}function Gf(s,t,e,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;n.get(m)!==c&&(m.update(),n.set(m,c))}return u}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Zl extends Ie{constructor(t,e,i,n,r,a,o,l,c,h=En){if(h!==En&&h!==Ln)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===En&&(i=Qi),i===void 0&&h===Ln&&(i=Pn),super(null,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ke,this.minFilter=l!==void 0?l:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ql=new Ie,Jo=new Zl(1,1),tc=new Gl,ec=new Th,ic=new Jl,$o=[],jo=[],Zo=new Float32Array(16),Qo=new Float32Array(9),tl=new Float32Array(4);function Fn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=$o[n];if(r===void 0&&(r=new Float32Array(n),$o[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ye(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Me(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function cr(s,t){let e=jo[t];e===void 0&&(e=new Int32Array(t),jo[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Hf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Vf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2fv(this.addr,t),Me(e,t)}}function Wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;s.uniform3fv(this.addr,t),Me(e,t)}}function Xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4fv(this.addr,t),Me(e,t)}}function Yf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,i))return;tl.set(i),s.uniformMatrix2fv(this.addr,!1,tl),Me(e,i)}}function qf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,i))return;Qo.set(i),s.uniformMatrix3fv(this.addr,!1,Qo),Me(e,i)}}function Kf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,i))return;Zo.set(i),s.uniformMatrix4fv(this.addr,!1,Zo),Me(e,i)}}function Jf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function $f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2iv(this.addr,t),Me(e,t)}}function jf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3iv(this.addr,t),Me(e,t)}}function Zf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4iv(this.addr,t),Me(e,t)}}function Qf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2uiv(this.addr,t),Me(e,t)}}function ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3uiv(this.addr,t),Me(e,t)}}function ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4uiv(this.addr,t),Me(e,t)}}function np(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Jo.compareFunction=Ol,r=Jo):r=Ql,e.setTexture2D(t||r,n)}function sp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||ec,n)}function rp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||ic,n)}function ap(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||tc,n)}function op(s){switch(s){case 5126:return Hf;case 35664:return Vf;case 35665:return Wf;case 35666:return Xf;case 35674:return Yf;case 35675:return qf;case 35676:return Kf;case 5124:case 35670:return Jf;case 35667:case 35671:return $f;case 35668:case 35672:return jf;case 35669:case 35673:return Zf;case 5125:return Qf;case 36294:return tp;case 36295:return ep;case 36296:return ip;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return sp;case 35680:case 36300:case 36308:case 36293:return rp;case 36289:case 36303:case 36311:case 36292:return ap}}function lp(s,t){s.uniform1fv(this.addr,t)}function cp(s,t){const e=Fn(t,this.size,2);s.uniform2fv(this.addr,e)}function hp(s,t){const e=Fn(t,this.size,3);s.uniform3fv(this.addr,e)}function up(s,t){const e=Fn(t,this.size,4);s.uniform4fv(this.addr,e)}function dp(s,t){const e=Fn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function fp(s,t){const e=Fn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function pp(s,t){const e=Fn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function mp(s,t){s.uniform1iv(this.addr,t)}function gp(s,t){s.uniform2iv(this.addr,t)}function xp(s,t){s.uniform3iv(this.addr,t)}function vp(s,t){s.uniform4iv(this.addr,t)}function _p(s,t){s.uniform1uiv(this.addr,t)}function yp(s,t){s.uniform2uiv(this.addr,t)}function Mp(s,t){s.uniform3uiv(this.addr,t)}function Sp(s,t){s.uniform4uiv(this.addr,t)}function bp(s,t,e){const i=this.cache,n=t.length,r=cr(e,n);ye(i,r)||(s.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||Ql,r[a])}function wp(s,t,e){const i=this.cache,n=t.length,r=cr(e,n);ye(i,r)||(s.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||ec,r[a])}function Ep(s,t,e){const i=this.cache,n=t.length,r=cr(e,n);ye(i,r)||(s.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||ic,r[a])}function Tp(s,t,e){const i=this.cache,n=t.length,r=cr(e,n);ye(i,r)||(s.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||tc,r[a])}function Ap(s){switch(s){case 5126:return lp;case 35664:return cp;case 35665:return hp;case 35666:return up;case 35674:return dp;case 35675:return fp;case 35676:return pp;case 5124:case 35670:return mp;case 35667:case 35671:return gp;case 35668:case 35672:return xp;case 35669:case 35673:return vp;case 5125:return _p;case 36294:return yp;case 36295:return Mp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return Tp}}class Cp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=op(e.type)}}class Rp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ap(e.type)}}class Pp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const Yr=/(\w+)(\])?(\[|\.)?/g;function el(s,t){s.seq.push(t),s.map[t.id]=t}function Lp(s,t,e){const i=s.name,n=i.length;for(Yr.lastIndex=0;;){const r=Yr.exec(i),a=Yr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){el(e,c===void 0?new Cp(o,s,t):new Rp(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Pp(o),el(e,u)),e=u}}}class Ws{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),a=t.getUniformLocation(e,r.name);Lp(r,a,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function il(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Dp=37297;let Ip=0;function Up(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function Np(s){const t=ie.getPrimaries(ie.workingColorSpace),e=ie.getPrimaries(s);let i;switch(t===e?i="":t===$s&&e===Js?i="LinearDisplayP3ToLinearSRGB":t===Js&&e===$s&&(i="LinearSRGBToLinearDisplayP3"),s){case Oi:case or:return[i,"LinearTransferOETF"];case ni:case ja:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function nl(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Up(s.getShaderSource(t),a)}else return n}function kp(s,t){const e=Np(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Fp(s,t){let e;switch(t){case Fc:e="Linear";break;case Oc:e="Reinhard";break;case Bc:e="Cineon";break;case zc:e="ACESFilmic";break;case Hc:e="AgX";break;case Vc:e="Neutral";break;case Gc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ls=new C;function Op(){ie.getLuminanceCoefficients(Ls);const s=Ls.x.toFixed(4),t=Ls.y.toFixed(4),e=Ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jn).join(`
`)}function zp(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Gp(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Jn(s){return s!==""}function sl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(s){return s.replace(Hp,Wp)}const Vp=new Map;function Wp(s,t){let e=Ot[t];if(e===void 0){const i=Vp.get(t);if(i!==void 0)e=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Va(e)}const Xp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(s){return s.replace(Xp,Yp)}function Yp(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function ol(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===bl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===wl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gi&&(t="SHADOWMAP_TYPE_VSM"),t}function Kp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Cn:case Rn:t="ENVMAP_TYPE_CUBE";break;case ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Rn:t="ENVMAP_MODE_REFRACTION";break}return t}function $p(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case El:t="ENVMAP_BLENDING_MULTIPLY";break;case Nc:t="ENVMAP_BLENDING_MIX";break;case kc:t="ENVMAP_BLENDING_ADD";break}return t}function jp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Zp(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=qp(e),c=Kp(e),h=Jp(e),u=$p(e),m=jp(e),f=Bp(e),g=zp(r),v=n.createProgram();let d,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Jn).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Jn).join(`
`),p.length>0&&(p+=`
`)):(d=[ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jn).join(`
`),p=[ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Ii?Fp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,kp("linearToOutputTexel",e.outputColorSpace),Op(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Jn).join(`
`)),a=Va(a),a=sl(a,e),a=rl(a,e),o=Va(o),o=sl(o,e),o=rl(o,e),a=al(a),o=al(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+d+a,b=M+p+o,P=il(n,n.VERTEX_SHADER,_),A=il(n,n.FRAGMENT_SHADER,b);n.attachShader(v,P),n.attachShader(v,A),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function E(S){if(s.debug.checkShaderErrors){const k=n.getProgramInfoLog(v).trim(),F=n.getShaderInfoLog(P).trim(),V=n.getShaderInfoLog(A).trim();let K=!0,H=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,P,A);else{const j=nl(n,P,"vertex"),Y=nl(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+k+`
`+j+`
`+Y)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||V==="")&&(H=!1);H&&(S.diagnostics={runnable:K,programLog:k,vertexShader:{log:F,prefix:d},fragmentShader:{log:V,prefix:p}})}n.deleteShader(P),n.deleteShader(A),R=new Ws(n,v),N=Gp(n,v)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let N;this.getAttributes=function(){return N===void 0&&E(this),N};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=n.getProgramParameter(v,Dp)),x},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ip++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=A,this}let Qp=0;class tm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new em(t),e.set(t,i)),i}}class em{constructor(t){this.id=Qp++,this.code=t,this.usedTimes=0}}function im(s,t,e,i,n,r,a){const o=new Vl,l=new tm,c=new Set,h=[],u=n.logarithmicDepthBuffer,m=n.reverseDepthBuffer,f=n.vertexTextures;let g=n.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,S,k,F,V){const K=F.fog,H=V.geometry,j=x.isMeshStandardMaterial?F.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||j),ct=Y&&Y.mapping===ar?Y.image.height:null,at=v[x.type];x.precision!==null&&(g=n.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const yt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Vt=yt!==void 0?yt.length:0;let Zt=0;H.morphAttributes.position!==void 0&&(Zt=1),H.morphAttributes.normal!==void 0&&(Zt=2),H.morphAttributes.color!==void 0&&(Zt=3);let W,tt,gt,ht;if(at){const Ne=si[at];W=Ne.vertexShader,tt=Ne.fragmentShader}else W=x.vertexShader,tt=x.fragmentShader,l.update(x),gt=l.getVertexShaderID(x),ht=l.getFragmentShaderID(x);const Lt=s.getRenderTarget(),Ct=V.isInstancedMesh===!0,Wt=V.isBatchedMesh===!0,re=!!x.map,Xt=!!x.matcap,L=!!Y,Oe=!!x.aoMap,Gt=!!x.lightMap,qt=!!x.bumpMap,Dt=!!x.normalMap,ce=!!x.displacementMap,kt=!!x.emissiveMap,T=!!x.metalnessMap,y=!!x.roughnessMap,O=x.anisotropy>0,$=x.clearcoat>0,Q=x.dispersion>0,J=x.iridescence>0,bt=x.sheen>0,rt=x.transmission>0,ft=O&&!!x.anisotropyMap,Kt=$&&!!x.clearcoatMap,et=$&&!!x.clearcoatNormalMap,pt=$&&!!x.clearcoatRoughnessMap,It=J&&!!x.iridescenceMap,Ut=J&&!!x.iridescenceThicknessMap,mt=bt&&!!x.sheenColorMap,Ht=bt&&!!x.sheenRoughnessMap,Ft=!!x.specularMap,oe=!!x.specularColorMap,D=!!x.specularIntensityMap,ut=rt&&!!x.transmissionMap,X=rt&&!!x.thicknessMap,Z=!!x.gradientMap,ot=!!x.alphaMap,dt=x.alphaTest>0,Yt=!!x.alphaHash,ge=!!x.extensions;let Ue=Ii;x.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(Ue=s.toneMapping);const Qt={shaderID:at,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:tt,defines:x.defines,customVertexShaderID:gt,customFragmentShaderID:ht,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Wt,batchingColor:Wt&&V._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&V.instanceColor!==null,instancingMorph:Ct&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Lt===null?s.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:Oi,alphaToCoverage:!!x.alphaToCoverage,map:re,matcap:Xt,envMap:L,envMapMode:L&&Y.mapping,envMapCubeUVHeight:ct,aoMap:Oe,lightMap:Gt,bumpMap:qt,normalMap:Dt,displacementMap:f&&ce,emissiveMap:kt,normalMapObjectSpace:Dt&&x.normalMapType===qc,normalMapTangentSpace:Dt&&x.normalMapType===Fl,metalnessMap:T,roughnessMap:y,anisotropy:O,anisotropyMap:ft,clearcoat:$,clearcoatMap:Kt,clearcoatNormalMap:et,clearcoatRoughnessMap:pt,dispersion:Q,iridescence:J,iridescenceMap:It,iridescenceThicknessMap:Ut,sheen:bt,sheenColorMap:mt,sheenRoughnessMap:Ht,specularMap:Ft,specularColorMap:oe,specularIntensityMap:D,transmission:rt,transmissionMap:ut,thicknessMap:X,gradientMap:Z,opaque:x.transparent===!1&&x.blending===wn&&x.alphaToCoverage===!1,alphaMap:ot,alphaTest:dt,alphaHash:Yt,combine:x.combine,mapUv:re&&d(x.map.channel),aoMapUv:Oe&&d(x.aoMap.channel),lightMapUv:Gt&&d(x.lightMap.channel),bumpMapUv:qt&&d(x.bumpMap.channel),normalMapUv:Dt&&d(x.normalMap.channel),displacementMapUv:ce&&d(x.displacementMap.channel),emissiveMapUv:kt&&d(x.emissiveMap.channel),metalnessMapUv:T&&d(x.metalnessMap.channel),roughnessMapUv:y&&d(x.roughnessMap.channel),anisotropyMapUv:ft&&d(x.anisotropyMap.channel),clearcoatMapUv:Kt&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:et&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&d(x.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&d(x.sheenRoughnessMap.channel),specularMapUv:Ft&&d(x.specularMap.channel),specularColorMapUv:oe&&d(x.specularColorMap.channel),specularIntensityMapUv:D&&d(x.specularIntensityMap.channel),transmissionMapUv:ut&&d(x.transmissionMap.channel),thicknessMapUv:X&&d(x.thicknessMap.channel),alphaMapUv:ot&&d(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Dt||O),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!H.attributes.uv&&(re||ot),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:m,skinning:V.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:Zt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ue,decodeVideoTexture:re&&x.map.isVideoTexture===!0&&ie.getTransfer(x.map.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===de,flipSided:x.side===De,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ge&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&x.extensions.multiDraw===!0||Wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function M(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)S.push(k),S.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(_(S,x),b(S,x),S.push(s.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function _(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function b(x,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),x.push(o.mask)}function P(x){const S=v[x.type];let k;if(S){const F=si[S];k=Oh.clone(F.uniforms)}else k=x.uniforms;return k}function A(x,S){let k;for(let F=0,V=h.length;F<V;F++){const K=h[F];if(K.cacheKey===S){k=K,++k.usedTimes;break}}return k===void 0&&(k=new Zp(s,S,x,r),h.push(k)),k}function E(x){if(--x.usedTimes===0){const S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),x.destroy()}}function R(x){l.remove(x)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:P,acquireProgram:A,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:N}}function nm(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function sm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ll(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function cl(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u,m,f,g,v,d){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:m,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:d},s[t]=p):(p.id=u.id,p.object=u,p.geometry=m,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=d),t++,p}function o(u,m,f,g,v,d){const p=a(u,m,f,g,v,d);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function l(u,m,f,g,v,d){const p=a(u,m,f,g,v,d);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,m){e.length>1&&e.sort(u||sm),i.length>1&&i.sort(m||ll),n.length>1&&n.sort(m||ll)}function h(){for(let u=t,m=s.length;u<m;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function rm(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new cl,s.set(i,[a])):n>=r.length?(a=new cl,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function am(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new nt};break;case"SpotLight":e={position:new C,direction:new C,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":e={color:new nt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function om(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let lm=0;function cm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function hm(s){const t=new am,e=om(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);const n=new C,r=new le,a=new le;function o(c){let h=0,u=0,m=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,g=0,v=0,d=0,p=0,M=0,_=0,b=0,P=0,A=0,E=0;c.sort(cm);for(let N=0,x=c.length;N<x;N++){const S=c[N],k=S.color,F=S.intensity,V=S.distance,K=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=k.r*F,u+=k.g*F,m+=k.b*F;else if(S.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(S.sh.coefficients[H],F);E++}else if(S.isDirectionalLight){const H=t.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const j=S.shadow,Y=e.get(S);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=K,i.directionalShadowMatrix[f]=S.shadow.matrix,M++}i.directional[f]=H,f++}else if(S.isSpotLight){const H=t.get(S);H.position.setFromMatrixPosition(S.matrixWorld),H.color.copy(k).multiplyScalar(F),H.distance=V,H.coneCos=Math.cos(S.angle),H.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),H.decay=S.decay,i.spot[v]=H;const j=S.shadow;if(S.map&&(i.spotLightMap[P]=S.map,P++,j.updateMatrices(S),S.castShadow&&A++),i.spotLightMatrix[v]=j.matrix,S.castShadow){const Y=e.get(S);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,i.spotShadow[v]=Y,i.spotShadowMap[v]=K,b++}v++}else if(S.isRectAreaLight){const H=t.get(S);H.color.copy(k).multiplyScalar(F),H.halfWidth.set(S.width*.5,0,0),H.halfHeight.set(0,S.height*.5,0),i.rectArea[d]=H,d++}else if(S.isPointLight){const H=t.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),H.distance=S.distance,H.decay=S.decay,S.castShadow){const j=S.shadow,Y=e.get(S);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=S.shadow.matrix,_++}i.point[g]=H,g++}else if(S.isHemisphereLight){const H=t.get(S);H.skyColor.copy(S.color).multiplyScalar(F),H.groundColor.copy(S.groundColor).multiplyScalar(F),i.hemi[p]=H,p++}}d>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=m;const R=i.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==d||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==_||R.numSpotShadows!==b||R.numSpotMaps!==P||R.numLightProbes!==E)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=d,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=b+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,R.directionalLength=f,R.pointLength=g,R.spotLength=v,R.rectAreaLength=d,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=_,R.numSpotShadows=b,R.numSpotMaps=P,R.numLightProbes=E,i.version=lm++)}function l(c,h){let u=0,m=0,f=0,g=0,v=0;const d=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const _=c[p];if(_.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(d),u++}else if(_.isSpotLight){const b=i.spot[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(d),f++}else if(_.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(_.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(d),m++}else if(_.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(d),v++}}}return{setup:o,setupView:l,state:i}}function hl(s){const t=new hm(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function um(s){let t=new WeakMap;function e(n,r=0){const a=t.get(n);let o;return a===void 0?(o=new hl(s),t.set(n,[o])):r>=a.length?(o=new hl(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class dm extends nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fm extends nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mm=`uniform sampler2D shadow_pass;
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
}`;function gm(s,t,e){let i=new Qa;const n=new vt,r=new vt,a=new ae,o=new dm({depthPacking:Yc}),l=new fm,c={},h=e.maxTextureSize,u={[ki]:De,[De]:ki,[de]:de},m=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:pm,fragmentShader:mm}),f=m.clone();f.defines.HORIZONTAL_PASS=1;const g=new fe;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new q(g,m),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bl;let p=this.type;this.render=function(A,E,R){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;const N=s.getRenderTarget(),x=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Di),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=p!==gi&&this.type===gi,V=p===gi&&this.type!==gi;for(let K=0,H=A.length;K<H;K++){const j=A[K],Y=j.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);const ct=Y.getFrameExtents();if(n.multiply(ct),r.copy(Y.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/ct.x),n.x=r.x*ct.x,Y.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/ct.y),n.y=r.y*ct.y,Y.mapSize.y=r.y)),Y.map===null||F===!0||V===!0){const yt=this.type!==gi?{minFilter:Ke,magFilter:Ke}:{};Y.map!==null&&Y.map.dispose(),Y.map=new tn(n.x,n.y,yt),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const at=Y.getViewportCount();for(let yt=0;yt<at;yt++){const Vt=Y.getViewport(yt);a.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),k.viewport(a),Y.updateMatrices(j,yt),i=Y.getFrustum(),b(E,R,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===gi&&M(Y,R),Y.needsUpdate=!1}p=this.type,d.needsUpdate=!1,s.setRenderTarget(N,x,S)};function M(A,E){const R=t.update(v);m.defines.VSM_SAMPLES!==A.blurSamples&&(m.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,m.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new tn(n.x,n.y)),m.uniforms.shadow_pass.value=A.map.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(E,null,R,m,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(E,null,R,f,v,null)}function _(A,E,R,N){let x=null;const S=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)x=S;else if(x=R.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const k=x.uuid,F=E.uuid;let V=c[k];V===void 0&&(V={},c[k]=V);let K=V[F];K===void 0&&(K=x.clone(),V[F]=K,E.addEventListener("dispose",P)),x=K}if(x.visible=E.visible,x.wireframe=E.wireframe,N===gi?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:u[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=s.properties.get(x);k.light=R}return x}function b(A,E,R,N,x){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===gi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const F=t.update(A),V=A.material;if(Array.isArray(V)){const K=F.groups;for(let H=0,j=K.length;H<j;H++){const Y=K[H],ct=V[Y.materialIndex];if(ct&&ct.visible){const at=_(A,ct,N,x);A.onBeforeShadow(s,A,E,R,F,at,Y),s.renderBufferDirect(R,null,F,at,A,Y),A.onAfterShadow(s,A,E,R,F,at,Y)}}}else if(V.visible){const K=_(A,V,N,x);A.onBeforeShadow(s,A,E,R,F,K,null),s.renderBufferDirect(R,null,F,K,A,null),A.onAfterShadow(s,A,E,R,F,K,null)}}const k=A.children;for(let F=0,V=k.length;F<V;F++)b(k[F],E,R,N,x)}function P(A){A.target.removeEventListener("dispose",P);for(const R in c){const N=c[R],x=A.target.uuid;x in N&&(N[x].dispose(),delete N[x])}}}const xm={[ra]:aa,[oa]:ha,[la]:ua,[An]:ca,[aa]:ra,[ha]:oa,[ua]:la,[ca]:An};function vm(s){function t(){let D=!1;const ut=new ae;let X=null;const Z=new ae(0,0,0,0);return{setMask:function(ot){X!==ot&&!D&&(s.colorMask(ot,ot,ot,ot),X=ot)},setLocked:function(ot){D=ot},setClear:function(ot,dt,Yt,ge,Ue){Ue===!0&&(ot*=ge,dt*=ge,Yt*=ge),ut.set(ot,dt,Yt,ge),Z.equals(ut)===!1&&(s.clearColor(ot,dt,Yt,ge),Z.copy(ut))},reset:function(){D=!1,X=null,Z.set(-1,0,0,0)}}}function e(){let D=!1,ut=!1,X=null,Z=null,ot=null;return{setReversed:function(dt){ut=dt},setTest:function(dt){dt?gt(s.DEPTH_TEST):ht(s.DEPTH_TEST)},setMask:function(dt){X!==dt&&!D&&(s.depthMask(dt),X=dt)},setFunc:function(dt){if(ut&&(dt=xm[dt]),Z!==dt){switch(dt){case ra:s.depthFunc(s.NEVER);break;case aa:s.depthFunc(s.ALWAYS);break;case oa:s.depthFunc(s.LESS);break;case An:s.depthFunc(s.LEQUAL);break;case la:s.depthFunc(s.EQUAL);break;case ca:s.depthFunc(s.GEQUAL);break;case ha:s.depthFunc(s.GREATER);break;case ua:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=dt}},setLocked:function(dt){D=dt},setClear:function(dt){ot!==dt&&(s.clearDepth(dt),ot=dt)},reset:function(){D=!1,X=null,Z=null,ot=null}}}function i(){let D=!1,ut=null,X=null,Z=null,ot=null,dt=null,Yt=null,ge=null,Ue=null;return{setTest:function(Qt){D||(Qt?gt(s.STENCIL_TEST):ht(s.STENCIL_TEST))},setMask:function(Qt){ut!==Qt&&!D&&(s.stencilMask(Qt),ut=Qt)},setFunc:function(Qt,Ne,hi){(X!==Qt||Z!==Ne||ot!==hi)&&(s.stencilFunc(Qt,Ne,hi),X=Qt,Z=Ne,ot=hi)},setOp:function(Qt,Ne,hi){(dt!==Qt||Yt!==Ne||ge!==hi)&&(s.stencilOp(Qt,Ne,hi),dt=Qt,Yt=Ne,ge=hi)},setLocked:function(Qt){D=Qt},setClear:function(Qt){Ue!==Qt&&(s.clearStencil(Qt),Ue=Qt)},reset:function(){D=!1,ut=null,X=null,Z=null,ot=null,dt=null,Yt=null,ge=null,Ue=null}}}const n=new t,r=new e,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,m=[],f=null,g=!1,v=null,d=null,p=null,M=null,_=null,b=null,P=null,A=new nt(0,0,0),E=0,R=!1,N=null,x=null,S=null,k=null,F=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=H>=1):j.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=H>=2);let Y=null,ct={};const at=s.getParameter(s.SCISSOR_BOX),yt=s.getParameter(s.VIEWPORT),Vt=new ae().fromArray(at),Zt=new ae().fromArray(yt);function W(D,ut,X,Z){const ot=new Uint8Array(4),dt=s.createTexture();s.bindTexture(D,dt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<X;Yt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ut,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,ot):s.texImage2D(ut+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ot);return dt}const tt={};tt[s.TEXTURE_2D]=W(s.TEXTURE_2D,s.TEXTURE_2D,1),tt[s.TEXTURE_CUBE_MAP]=W(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[s.TEXTURE_2D_ARRAY]=W(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),tt[s.TEXTURE_3D]=W(s.TEXTURE_3D,s.TEXTURE_3D,1,1),n.setClear(0,0,0,1),r.setClear(1),a.setClear(0),gt(s.DEPTH_TEST),r.setFunc(An),Gt(!1),qt(vo),gt(s.CULL_FACE),L(Di);function gt(D){c[D]!==!0&&(s.enable(D),c[D]=!0)}function ht(D){c[D]!==!1&&(s.disable(D),c[D]=!1)}function Lt(D,ut){return h[D]!==ut?(s.bindFramebuffer(D,ut),h[D]=ut,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ut),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ut),!0):!1}function Ct(D,ut){let X=m,Z=!1;if(D){X=u.get(ut),X===void 0&&(X=[],u.set(ut,X));const ot=D.textures;if(X.length!==ot.length||X[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,Yt=ot.length;dt<Yt;dt++)X[dt]=s.COLOR_ATTACHMENT0+dt;X.length=ot.length,Z=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,Z=!0);Z&&s.drawBuffers(X)}function Wt(D){return f!==D?(s.useProgram(D),f=D,!0):!1}const re={[Ki]:s.FUNC_ADD,[vc]:s.FUNC_SUBTRACT,[_c]:s.FUNC_REVERSE_SUBTRACT};re[yc]=s.MIN,re[Mc]=s.MAX;const Xt={[Sc]:s.ZERO,[bc]:s.ONE,[wc]:s.SRC_COLOR,[na]:s.SRC_ALPHA,[Pc]:s.SRC_ALPHA_SATURATE,[Cc]:s.DST_COLOR,[Tc]:s.DST_ALPHA,[Ec]:s.ONE_MINUS_SRC_COLOR,[sa]:s.ONE_MINUS_SRC_ALPHA,[Rc]:s.ONE_MINUS_DST_COLOR,[Ac]:s.ONE_MINUS_DST_ALPHA,[Lc]:s.CONSTANT_COLOR,[Dc]:s.ONE_MINUS_CONSTANT_COLOR,[Ic]:s.CONSTANT_ALPHA,[Uc]:s.ONE_MINUS_CONSTANT_ALPHA};function L(D,ut,X,Z,ot,dt,Yt,ge,Ue,Qt){if(D===Di){g===!0&&(ht(s.BLEND),g=!1);return}if(g===!1&&(gt(s.BLEND),g=!0),D!==xc){if(D!==v||Qt!==R){if((d!==Ki||_!==Ki)&&(s.blendEquation(s.FUNC_ADD),d=Ki,_=Ki),Qt)switch(D){case wn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _o:s.blendFunc(s.ONE,s.ONE);break;case yo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case wn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _o:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case yo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}p=null,M=null,b=null,P=null,A.set(0,0,0),E=0,v=D,R=Qt}return}ot=ot||ut,dt=dt||X,Yt=Yt||Z,(ut!==d||ot!==_)&&(s.blendEquationSeparate(re[ut],re[ot]),d=ut,_=ot),(X!==p||Z!==M||dt!==b||Yt!==P)&&(s.blendFuncSeparate(Xt[X],Xt[Z],Xt[dt],Xt[Yt]),p=X,M=Z,b=dt,P=Yt),(ge.equals(A)===!1||Ue!==E)&&(s.blendColor(ge.r,ge.g,ge.b,Ue),A.copy(ge),E=Ue),v=D,R=!1}function Oe(D,ut){D.side===de?ht(s.CULL_FACE):gt(s.CULL_FACE);let X=D.side===De;ut&&(X=!X),Gt(X),D.blending===wn&&D.transparent===!1?L(Di):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),n.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ce(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):ht(s.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(D){N!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),N=D)}function qt(D){D!==mc?(gt(s.CULL_FACE),D!==x&&(D===vo?s.cullFace(s.BACK):D===gc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ht(s.CULL_FACE),x=D}function Dt(D){D!==S&&(K&&s.lineWidth(D),S=D)}function ce(D,ut,X){D?(gt(s.POLYGON_OFFSET_FILL),(k!==ut||F!==X)&&(s.polygonOffset(ut,X),k=ut,F=X)):ht(s.POLYGON_OFFSET_FILL)}function kt(D){D?gt(s.SCISSOR_TEST):ht(s.SCISSOR_TEST)}function T(D){D===void 0&&(D=s.TEXTURE0+V-1),Y!==D&&(s.activeTexture(D),Y=D)}function y(D,ut,X){X===void 0&&(Y===null?X=s.TEXTURE0+V-1:X=Y);let Z=ct[X];Z===void 0&&(Z={type:void 0,texture:void 0},ct[X]=Z),(Z.type!==D||Z.texture!==ut)&&(Y!==X&&(s.activeTexture(X),Y=X),s.bindTexture(D,ut||tt[D]),Z.type=D,Z.texture=ut)}function O(){const D=ct[Y];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Kt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ut(D){Vt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Vt.copy(D))}function mt(D){Zt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Zt.copy(D))}function Ht(D,ut){let X=l.get(ut);X===void 0&&(X=new WeakMap,l.set(ut,X));let Z=X.get(D);Z===void 0&&(Z=s.getUniformBlockIndex(ut,D.name),X.set(D,Z))}function Ft(D,ut){const Z=l.get(ut).get(D);o.get(ut)!==Z&&(s.uniformBlockBinding(ut,Z,D.__bindingPointIndex),o.set(ut,Z))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},Y=null,ct={},h={},u=new WeakMap,m=[],f=null,g=!1,v=null,d=null,p=null,M=null,_=null,b=null,P=null,A=new nt(0,0,0),E=0,R=!1,N=null,x=null,S=null,k=null,F=null,Vt.set(0,0,s.canvas.width,s.canvas.height),Zt.set(0,0,s.canvas.width,s.canvas.height),n.reset(),r.reset(),a.reset()}return{buffers:{color:n,depth:r,stencil:a},enable:gt,disable:ht,bindFramebuffer:Lt,drawBuffers:Ct,useProgram:Wt,setBlending:L,setMaterial:Oe,setFlipSided:Gt,setCullFace:qt,setLineWidth:Dt,setPolygonOffset:ce,setScissorTest:kt,activeTexture:T,bindTexture:y,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:pt,texImage3D:It,updateUBOMapping:Ht,uniformBlockBinding:Ft,texStorage2D:Kt,texStorage3D:et,texSubImage2D:J,texSubImage3D:bt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ft,scissor:Ut,viewport:mt,reset:oe}}function ul(s,t,e,i){const n=_m(i);switch(e){case Pl:return s*t;case Dl:return s*t;case Il:return s*t*2;case Ul:return s*t/n.components*n.byteLength;case Ka:return s*t/n.components*n.byteLength;case Nl:return s*t*2/n.components*n.byteLength;case Ja:return s*t*2/n.components*n.byteLength;case Ll:return s*t*3/n.components*n.byteLength;case ii:return s*t*4/n.components*n.byteLength;case $a:return s*t*4/n.components*n.byteLength;case Os:case Bs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zs:case Gs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xa:case _a:return Math.max(s,16)*Math.max(t,8)/4;case ga:case va:return Math.max(s,8)*Math.max(t,8)/2;case ya:case Ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case La:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Da:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Na:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ka:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Hs:case Fa:case Oa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case kl:case Ba:return Math.ceil(s/4)*Math.ceil(t/4)*8;case za:case Ga:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _m(s){switch(s){case Mi:case Al:return{byteLength:1,components:1};case ss:case Cl:case as:return{byteLength:2,components:1};case Ya:case qa:return{byteLength:2,components:4};case Qi:case Xa:case xi:return{byteLength:4,components:1};case Rl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function ym(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap;let u;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return f?new OffscreenCanvas(T,y):Zs("canvas")}function v(T,y,O){let $=1;const Q=kt(T);if((Q.width>O||Q.height>O)&&($=O/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor($*Q.width),bt=Math.floor($*Q.height);u===void 0&&(u=g(J,bt));const rt=y?g(J,bt):u;return rt.width=J,rt.height=bt,rt.getContext("2d").drawImage(T,0,0,J,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+bt+")."),rt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function d(T){return T.generateMipmaps&&T.minFilter!==Ke&&T.minFilter!==ti}function p(T){s.generateMipmap(T)}function M(T,y,O,$,Q=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=y;if(y===s.RED&&(O===s.FLOAT&&(J=s.R32F),O===s.HALF_FLOAT&&(J=s.R16F),O===s.UNSIGNED_BYTE&&(J=s.R8)),y===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(J=s.R8UI),O===s.UNSIGNED_SHORT&&(J=s.R16UI),O===s.UNSIGNED_INT&&(J=s.R32UI),O===s.BYTE&&(J=s.R8I),O===s.SHORT&&(J=s.R16I),O===s.INT&&(J=s.R32I)),y===s.RG&&(O===s.FLOAT&&(J=s.RG32F),O===s.HALF_FLOAT&&(J=s.RG16F),O===s.UNSIGNED_BYTE&&(J=s.RG8)),y===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(J=s.RG8UI),O===s.UNSIGNED_SHORT&&(J=s.RG16UI),O===s.UNSIGNED_INT&&(J=s.RG32UI),O===s.BYTE&&(J=s.RG8I),O===s.SHORT&&(J=s.RG16I),O===s.INT&&(J=s.RG32I)),y===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(J=s.RGB8UI),O===s.UNSIGNED_SHORT&&(J=s.RGB16UI),O===s.UNSIGNED_INT&&(J=s.RGB32UI),O===s.BYTE&&(J=s.RGB8I),O===s.SHORT&&(J=s.RGB16I),O===s.INT&&(J=s.RGB32I)),y===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),O===s.UNSIGNED_INT&&(J=s.RGBA32UI),O===s.BYTE&&(J=s.RGBA8I),O===s.SHORT&&(J=s.RGBA16I),O===s.INT&&(J=s.RGBA32I)),y===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),y===s.RGBA){const bt=Q?Ks:ie.getTransfer($);O===s.FLOAT&&(J=s.RGBA32F),O===s.HALF_FLOAT&&(J=s.RGBA16F),O===s.UNSIGNED_BYTE&&(J=bt===ue?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(T,y){let O;return T?y===null||y===Qi||y===Pn?O=s.DEPTH24_STENCIL8:y===xi?O=s.DEPTH32F_STENCIL8:y===ss&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Qi||y===Pn?O=s.DEPTH_COMPONENT24:y===xi?O=s.DEPTH_COMPONENT32F:y===ss&&(O=s.DEPTH_COMPONENT16),O}function b(T,y){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ke&&T.minFilter!==ti?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function P(T){const y=T.target;y.removeEventListener("dispose",P),E(y),y.isVideoTexture&&h.delete(y)}function A(T){const y=T.target;y.removeEventListener("dispose",A),N(y)}function E(T){const y=i.get(T);if(y.__webglInit===void 0)return;const O=T.source,$=m.get(O);if($){const Q=$[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(T),Object.keys($).length===0&&m.delete(O)}i.remove(T)}function R(T){const y=i.get(T);s.deleteTexture(y.__webglTexture);const O=T.source,$=m.get(O);delete $[y.__cacheKey],a.memory.textures--}function N(T){const y=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let Q=0;Q<y.__webglFramebuffer[$].length;Q++)s.deleteFramebuffer(y.__webglFramebuffer[$][Q]);else s.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)s.deleteFramebuffer(y.__webglFramebuffer[$]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=T.textures;for(let $=0,Q=O.length;$<Q;$++){const J=i.get(O[$]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(O[$])}i.remove(T)}let x=0;function S(){x=0}function k(){const T=x;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),x+=1,T}function F(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function V(T,y){const O=i.get(T);if(T.isVideoTexture&&Dt(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Zt(O,T,y);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+y)}function K(T,y){const O=i.get(T);if(T.version>0&&O.__version!==T.version){Zt(O,T,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+y)}function H(T,y){const O=i.get(T);if(T.version>0&&O.__version!==T.version){Zt(O,T,y);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+y)}function j(T,y){const O=i.get(T);if(T.version>0&&O.__version!==T.version){W(O,T,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+y)}const Y={[pa]:s.REPEAT,[ji]:s.CLAMP_TO_EDGE,[ma]:s.MIRRORED_REPEAT},ct={[Ke]:s.NEAREST,[Wc]:s.NEAREST_MIPMAP_NEAREST,[us]:s.NEAREST_MIPMAP_LINEAR,[ti]:s.LINEAR,[_r]:s.LINEAR_MIPMAP_NEAREST,[Zi]:s.LINEAR_MIPMAP_LINEAR},at={[Kc]:s.NEVER,[th]:s.ALWAYS,[Jc]:s.LESS,[Ol]:s.LEQUAL,[$c]:s.EQUAL,[Qc]:s.GEQUAL,[jc]:s.GREATER,[Zc]:s.NOTEQUAL};function yt(T,y){if(y.type===xi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ti||y.magFilter===_r||y.magFilter===us||y.magFilter===Zi||y.minFilter===ti||y.minFilter===_r||y.minFilter===us||y.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,Y[y.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,Y[y.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,Y[y.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ct[y.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ct[y.minFilter]),y.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,at[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ke||y.minFilter!==us&&y.minFilter!==Zi||y.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Vt(T,y){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",P));const $=y.source;let Q=m.get($);Q===void 0&&(Q={},m.set($,Q));const J=F(y);if(J!==T.__cacheKey){Q[J]===void 0&&(Q[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[J].usedTimes++;const bt=Q[T.__cacheKey];bt!==void 0&&(Q[T.__cacheKey].usedTimes--,bt.usedTimes===0&&R(y)),T.__cacheKey=J,T.__webglTexture=Q[J].texture}return O}function Zt(T,y,O){let $=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=s.TEXTURE_3D);const Q=Vt(T,y),J=y.source;e.bindTexture($,T.__webglTexture,s.TEXTURE0+O);const bt=i.get(J);if(J.version!==bt.__version||Q===!0){e.activeTexture(s.TEXTURE0+O);const rt=ie.getPrimaries(ie.workingColorSpace),ft=y.colorSpace===Li?null:ie.getPrimaries(y.colorSpace),Kt=y.colorSpace===Li||rt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let et=v(y.image,!1,n.maxTextureSize);et=ce(y,et);const pt=r.convert(y.format,y.colorSpace),It=r.convert(y.type);let Ut=M(y.internalFormat,pt,It,y.colorSpace,y.isVideoTexture);yt($,y);let mt;const Ht=y.mipmaps,Ft=y.isVideoTexture!==!0,oe=bt.__version===void 0||Q===!0,D=J.dataReady,ut=b(y,et);if(y.isDepthTexture)Ut=_(y.format===Ln,y.type),oe&&(Ft?e.texStorage2D(s.TEXTURE_2D,1,Ut,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Ut,et.width,et.height,0,pt,It,null));else if(y.isDataTexture)if(Ht.length>0){Ft&&oe&&e.texStorage2D(s.TEXTURE_2D,ut,Ut,Ht[0].width,Ht[0].height);for(let X=0,Z=Ht.length;X<Z;X++)mt=Ht[X],Ft?D&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,It,mt.data):e.texImage2D(s.TEXTURE_2D,X,Ut,mt.width,mt.height,0,pt,It,mt.data);y.generateMipmaps=!1}else Ft?(oe&&e.texStorage2D(s.TEXTURE_2D,ut,Ut,et.width,et.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et.width,et.height,pt,It,et.data)):e.texImage2D(s.TEXTURE_2D,0,Ut,et.width,et.height,0,pt,It,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ft&&oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,Ut,Ht[0].width,Ht[0].height,et.depth);for(let X=0,Z=Ht.length;X<Z;X++)if(mt=Ht[X],y.format!==ii)if(pt!==null)if(Ft){if(D)if(y.layerUpdates.size>0){const ot=ul(mt.width,mt.height,y.format,y.type);for(const dt of y.layerUpdates){const Yt=mt.data.subarray(dt*ot/mt.data.BYTES_PER_ELEMENT,(dt+1)*ot/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,dt,mt.width,mt.height,1,pt,Yt,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,et.depth,pt,mt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Ut,mt.width,mt.height,et.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,et.depth,pt,It,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,Ut,mt.width,mt.height,et.depth,0,pt,It,mt.data)}else{Ft&&oe&&e.texStorage2D(s.TEXTURE_2D,ut,Ut,Ht[0].width,Ht[0].height);for(let X=0,Z=Ht.length;X<Z;X++)mt=Ht[X],y.format!==ii?pt!==null?Ft?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,X,Ut,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?D&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,It,mt.data):e.texImage2D(s.TEXTURE_2D,X,Ut,mt.width,mt.height,0,pt,It,mt.data)}else if(y.isDataArrayTexture)if(Ft){if(oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,Ut,et.width,et.height,et.depth),D)if(y.layerUpdates.size>0){const X=ul(et.width,et.height,y.format,y.type);for(const Z of y.layerUpdates){const ot=et.data.subarray(Z*X/et.data.BYTES_PER_ELEMENT,(Z+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,pt,It,ot)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,pt,It,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,et.width,et.height,et.depth,0,pt,It,et.data);else if(y.isData3DTexture)Ft?(oe&&e.texStorage3D(s.TEXTURE_3D,ut,Ut,et.width,et.height,et.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,pt,It,et.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,et.width,et.height,et.depth,0,pt,It,et.data);else if(y.isFramebufferTexture){if(oe)if(Ft)e.texStorage2D(s.TEXTURE_2D,ut,Ut,et.width,et.height);else{let X=et.width,Z=et.height;for(let ot=0;ot<ut;ot++)e.texImage2D(s.TEXTURE_2D,ot,Ut,X,Z,0,pt,It,null),X>>=1,Z>>=1}}else if(Ht.length>0){if(Ft&&oe){const X=kt(Ht[0]);e.texStorage2D(s.TEXTURE_2D,ut,Ut,X.width,X.height)}for(let X=0,Z=Ht.length;X<Z;X++)mt=Ht[X],Ft?D&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,pt,It,mt):e.texImage2D(s.TEXTURE_2D,X,Ut,pt,It,mt);y.generateMipmaps=!1}else if(Ft){if(oe){const X=kt(et);e.texStorage2D(s.TEXTURE_2D,ut,Ut,X.width,X.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,It,et)}else e.texImage2D(s.TEXTURE_2D,0,Ut,pt,It,et);d(y)&&p($),bt.__version=J.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function W(T,y,O){if(y.image.length!==6)return;const $=Vt(T,y),Q=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+O);const J=i.get(Q);if(Q.version!==J.__version||$===!0){e.activeTexture(s.TEXTURE0+O);const bt=ie.getPrimaries(ie.workingColorSpace),rt=y.colorSpace===Li?null:ie.getPrimaries(y.colorSpace),ft=y.colorSpace===Li||bt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Kt=y.isCompressedTexture||y.image[0].isCompressedTexture,et=y.image[0]&&y.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Kt&&!et?pt[Z]=v(y.image[Z],!0,n.maxCubemapSize):pt[Z]=et?y.image[Z].image:y.image[Z],pt[Z]=ce(y,pt[Z]);const It=pt[0],Ut=r.convert(y.format,y.colorSpace),mt=r.convert(y.type),Ht=M(y.internalFormat,Ut,mt,y.colorSpace),Ft=y.isVideoTexture!==!0,oe=J.__version===void 0||$===!0,D=Q.dataReady;let ut=b(y,It);yt(s.TEXTURE_CUBE_MAP,y);let X;if(Kt){Ft&&oe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Ht,It.width,It.height);for(let Z=0;Z<6;Z++){X=pt[Z].mipmaps;for(let ot=0;ot<X.length;ot++){const dt=X[ot];y.format!==ii?Ut!==null?Ft?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,0,0,dt.width,dt.height,Ut,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,Ht,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,0,0,dt.width,dt.height,Ut,mt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,Ht,dt.width,dt.height,0,Ut,mt,dt.data)}}}else{if(X=y.mipmaps,Ft&&oe){X.length>0&&ut++;const Z=kt(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Ht,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,Ut,mt,pt[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ht,pt[Z].width,pt[Z].height,0,Ut,mt,pt[Z].data);for(let ot=0;ot<X.length;ot++){const Yt=X[ot].image[Z].image;Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,0,0,Yt.width,Yt.height,Ut,mt,Yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,Ht,Yt.width,Yt.height,0,Ut,mt,Yt.data)}}else{Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ut,mt,pt[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ht,Ut,mt,pt[Z]);for(let ot=0;ot<X.length;ot++){const dt=X[ot];Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,0,0,Ut,mt,dt.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,Ht,Ut,mt,dt.image[Z])}}}d(y)&&p(s.TEXTURE_CUBE_MAP),J.__version=Q.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function tt(T,y,O,$,Q,J){const bt=r.convert(O.format,O.colorSpace),rt=r.convert(O.type),ft=M(O.internalFormat,bt,rt,O.colorSpace);if(!i.get(y).__hasExternalTextures){const et=Math.max(1,y.width>>J),pt=Math.max(1,y.height>>J);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,J,ft,et,pt,y.depth,0,bt,rt,null):e.texImage2D(Q,J,ft,et,pt,0,bt,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),qt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Q,i.get(O).__webglTexture,0,Gt(y)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Q,i.get(O).__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(T,y,O){if(s.bindRenderbuffer(s.RENDERBUFFER,T),y.depthBuffer){const $=y.depthTexture,Q=$&&$.isDepthTexture?$.type:null,J=_(y.stencilBuffer,Q),bt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=Gt(y);qt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,J,y.width,y.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,J,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,J,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,T)}else{const $=y.textures;for(let Q=0;Q<$.length;Q++){const J=$[Q],bt=r.convert(J.format,J.colorSpace),rt=r.convert(J.type),ft=M(J.internalFormat,bt,rt,J.colorSpace),Kt=Gt(y);O&&qt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,ft,y.width,y.height):qt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt,ft,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ft,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ht(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);const $=i.get(y.depthTexture).__webglTexture,Q=Gt(y);if(y.depthTexture.format===En)qt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(y.depthTexture.format===Ln)qt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Lt(T){const y=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=$}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ht(y.__webglFramebuffer,T)}else if(O){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=s.createRenderbuffer(),gt(y.__webglDepthbuffer[$],T,!1);else{const Q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),gt(y.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(T,y,O){const $=i.get(T);y!==void 0&&tt($.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Lt(T)}function Wt(T){const y=T.texture,O=i.get(T),$=i.get(y);T.addEventListener("dispose",A);const Q=T.textures,J=T.isWebGLCubeRenderTarget===!0,bt=Q.length>1;if(bt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=y.version,a.memory.textures++),J){O.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[rt]=[];for(let ft=0;ft<y.mipmaps.length;ft++)O.__webglFramebuffer[rt][ft]=s.createFramebuffer()}else O.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let rt=0;rt<y.mipmaps.length;rt++)O.__webglFramebuffer[rt]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(bt)for(let rt=0,ft=Q.length;rt<ft;rt++){const Kt=i.get(Q[rt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&qt(T)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let rt=0;rt<Q.length;rt++){const ft=Q[rt];O.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[rt]);const Kt=r.convert(ft.format,ft.colorSpace),et=r.convert(ft.type),pt=M(ft.internalFormat,Kt,et,ft.colorSpace,T.isXRRenderTarget===!0),It=Gt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,It,pt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,O.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),gt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),yt(s.TEXTURE_CUBE_MAP,y);for(let rt=0;rt<6;rt++)if(y.mipmaps&&y.mipmaps.length>0)for(let ft=0;ft<y.mipmaps.length;ft++)tt(O.__webglFramebuffer[rt][ft],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft);else tt(O.__webglFramebuffer[rt],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);d(y)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let rt=0,ft=Q.length;rt<ft;rt++){const Kt=Q[rt],et=i.get(Kt);e.bindTexture(s.TEXTURE_2D,et.__webglTexture),yt(s.TEXTURE_2D,Kt),tt(O.__webglFramebuffer,T,Kt,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,0),d(Kt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(rt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,$.__webglTexture),yt(rt,y),y.mipmaps&&y.mipmaps.length>0)for(let ft=0;ft<y.mipmaps.length;ft++)tt(O.__webglFramebuffer[ft],T,y,s.COLOR_ATTACHMENT0,rt,ft);else tt(O.__webglFramebuffer,T,y,s.COLOR_ATTACHMENT0,rt,0);d(y)&&p(rt),e.unbindTexture()}T.depthBuffer&&Lt(T)}function re(T){const y=T.textures;for(let O=0,$=y.length;O<$;O++){const Q=y[O];if(d(Q)){const J=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,bt=i.get(Q).__webglTexture;e.bindTexture(J,bt),p(J),e.unbindTexture()}}}const Xt=[],L=[];function Oe(T){if(T.samples>0){if(qt(T)===!1){const y=T.textures,O=T.width,$=T.height;let Q=s.COLOR_BUFFER_BIT;const J=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=i.get(T),rt=y.length>1;if(rt)for(let ft=0;ft<y.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let ft=0;ft<y.length;ft++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[ft]);const Kt=i.get(y[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Kt,0)}s.blitFramebuffer(0,0,O,$,0,0,O,$,Q,s.NEAREST),l===!0&&(Xt.length=0,L.length=0,Xt.push(s.COLOR_ATTACHMENT0+ft),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Xt.push(J),L.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let ft=0;ft<y.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,bt.__webglColorRenderbuffer[ft]);const Kt=i.get(y[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,Kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Gt(T){return Math.min(n.maxSamples,T.samples)}function qt(T){const y=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Dt(T){const y=a.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function ce(T,y){const O=T.colorSpace,$=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Oi&&O!==Li&&(ie.getTransfer(O)===ue?($!==ii||Q!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function kt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=S,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=H,this.setTextureCube=j,this.rebindTextures=Ct,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=qt}function Mm(s,t){function e(i,n=Li){let r;const a=ie.getTransfer(n);if(i===Mi)return s.UNSIGNED_BYTE;if(i===Ya)return s.UNSIGNED_SHORT_4_4_4_4;if(i===qa)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Rl)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Al)return s.BYTE;if(i===Cl)return s.SHORT;if(i===ss)return s.UNSIGNED_SHORT;if(i===Xa)return s.INT;if(i===Qi)return s.UNSIGNED_INT;if(i===xi)return s.FLOAT;if(i===as)return s.HALF_FLOAT;if(i===Pl)return s.ALPHA;if(i===Ll)return s.RGB;if(i===ii)return s.RGBA;if(i===Dl)return s.LUMINANCE;if(i===Il)return s.LUMINANCE_ALPHA;if(i===En)return s.DEPTH_COMPONENT;if(i===Ln)return s.DEPTH_STENCIL;if(i===Ul)return s.RED;if(i===Ka)return s.RED_INTEGER;if(i===Nl)return s.RG;if(i===Ja)return s.RG_INTEGER;if(i===$a)return s.RGBA_INTEGER;if(i===Os||i===Bs||i===zs||i===Gs)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Os)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Os)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ga||i===xa||i===va||i===_a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ya||i===Ma||i===Sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ya||i===Ma)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ba||i===wa||i===Ea||i===Ta||i===Aa||i===Ca||i===Ra||i===Pa||i===La||i===Da||i===Ia||i===Ua||i===Na||i===ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ba)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ea)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ta)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Aa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ca)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ra)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===La)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Da)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ia)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ua)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Na)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ka)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hs||i===Fa||i===Oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Hs)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kl||i===Ba||i===za||i===Ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Hs)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}class Sm extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Nt extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bm={type:"move"};class qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const d=e.getJointPose(v,i),p=this._getHandJoint(c,v);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],m=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&m>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Nt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const wm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Em=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Tm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new Ie,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new oi({vertexShader:wm,fragmentShader:Em,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new q(new li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Am extends kn{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,m=null,f=null,g=null;const v=new Tm,d=e.getContextAttributes();let p=null,M=null;const _=[],b=[],P=new vt;let A=null;const E=new Ve;E.layers.enable(1),E.viewport=new ae;const R=new Ve;R.layers.enable(2),R.viewport=new ae;const N=[E,R],x=new Sm;x.layers.enable(1),x.layers.enable(2);let S=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let tt=_[W];return tt===void 0&&(tt=new qr,_[W]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(W){let tt=_[W];return tt===void 0&&(tt=new qr,_[W]=tt),tt.getGripSpace()},this.getHand=function(W){let tt=_[W];return tt===void 0&&(tt=new qr,_[W]=tt),tt.getHandSpace()};function F(W){const tt=b.indexOf(W.inputSource);if(tt===-1)return;const gt=_[tt];gt!==void 0&&(gt.update(W.inputSource,W.frame,c||a),gt.dispatchEvent({type:W.type,data:W.inputSource}))}function V(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",K);for(let W=0;W<_.length;W++){const tt=b[W];tt!==null&&(b[W]=null,_[W].disconnect(tt))}S=null,k=null,v.reset(),t.setRenderTarget(p),f=null,m=null,u=null,n=null,M=null,Zt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return m!==null?m:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",V),n.addEventListener("inputsourceschange",K),d.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),n.renderState.layers===void 0){const tt={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,tt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new tn(f.framebufferWidth,f.framebufferHeight,{format:ii,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let tt=null,gt=null,ht=null;d.depth&&(ht=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=d.stencil?Ln:En,gt=d.stencil?Pn:Qi);const Lt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(n,e),m=u.createProjectionLayer(Lt),n.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),M=new tn(m.textureWidth,m.textureHeight,{format:ii,type:Mi,depthTexture:new Zl(m.textureWidth,m.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Zt.setContext(n),Zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(W){for(let tt=0;tt<W.removed.length;tt++){const gt=W.removed[tt],ht=b.indexOf(gt);ht>=0&&(b[ht]=null,_[ht].disconnect(gt))}for(let tt=0;tt<W.added.length;tt++){const gt=W.added[tt];let ht=b.indexOf(gt);if(ht===-1){for(let Ct=0;Ct<_.length;Ct++)if(Ct>=b.length){b.push(gt),ht=Ct;break}else if(b[Ct]===null){b[Ct]=gt,ht=Ct;break}if(ht===-1)break}const Lt=_[ht];Lt&&Lt.connect(gt)}}const H=new C,j=new C;function Y(W,tt,gt){H.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(gt.matrixWorld);const ht=H.distanceTo(j),Lt=tt.projectionMatrix.elements,Ct=gt.projectionMatrix.elements,Wt=Lt[14]/(Lt[10]-1),re=Lt[14]/(Lt[10]+1),Xt=(Lt[9]+1)/Lt[5],L=(Lt[9]-1)/Lt[5],Oe=(Lt[8]-1)/Lt[0],Gt=(Ct[8]+1)/Ct[0],qt=Wt*Oe,Dt=Wt*Gt,ce=ht/(-Oe+Gt),kt=ce*-Oe;if(tt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(kt),W.translateZ(ce),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Lt[10]===-1)W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const T=Wt+ce,y=re+ce,O=qt-kt,$=Dt+(ht-kt),Q=Xt*re/y*T,J=L*re/y*T;W.projectionMatrix.makePerspective(O,$,Q,J,T,y),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ct(W,tt){tt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(tt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;let tt=W.near,gt=W.far;v.texture!==null&&(v.depthNear>0&&(tt=v.depthNear),v.depthFar>0&&(gt=v.depthFar)),x.near=R.near=E.near=tt,x.far=R.far=E.far=gt,(S!==x.near||k!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,k=x.far);const ht=W.parent,Lt=x.cameras;ct(x,ht);for(let Ct=0;Ct<Lt.length;Ct++)ct(Lt[Ct],ht);Lt.length===2?Y(x,E,R):x.projectionMatrix.copy(E.projectionMatrix),at(W,x,ht)};function at(W,tt,gt){gt===null?W.matrix.copy(tt.matrixWorld):(W.matrix.copy(gt.matrixWorld),W.matrix.invert(),W.matrix.multiply(tt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=rs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(m===null&&f===null))return l},this.setFoveation=function(W){l=W,m!==null&&(m.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let yt=null;function Vt(W,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){const gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let ht=!1;gt.length!==x.cameras.length&&(x.cameras.length=0,ht=!0);for(let Ct=0;Ct<gt.length;Ct++){const Wt=gt[Ct];let re=null;if(f!==null)re=f.getViewport(Wt);else{const L=u.getViewSubImage(m,Wt);re=L.viewport,Ct===0&&(t.setRenderTargetTextures(M,L.colorTexture,m.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(M))}let Xt=N[Ct];Xt===void 0&&(Xt=new Ve,Xt.layers.enable(Ct),Xt.viewport=new ae,N[Ct]=Xt),Xt.matrix.fromArray(Wt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Wt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(re.x,re.y,re.width,re.height),Ct===0&&(x.matrix.copy(Xt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ht===!0&&x.cameras.push(Xt)}const Lt=n.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Ct=u.getDepthInformation(gt[0]);Ct&&Ct.isValid&&Ct.texture&&v.init(t,Ct,n.renderState)}}for(let gt=0;gt<_.length;gt++){const ht=b[gt],Lt=_[gt];ht!==null&&Lt!==void 0&&Lt.update(ht,tt,c||a)}yt&&yt(W,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Zt=new $l;Zt.setAnimationLoop(Vt),this.setAnimationLoop=function(W){yt=W},this.dispose=function(){}}}const Xi=new ai,Cm=new le;function Rm(s,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,ql(s)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,M,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),u(d,p)):p.isMeshPhongMaterial?(r(d,p),h(d,p)):p.isMeshStandardMaterial?(r(d,p),m(d,p),p.isMeshPhysicalMaterial&&f(d,p,b)):p.isMeshMatcapMaterial?(r(d,p),g(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),v(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?l(d,p,M,_):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===De&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===De&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const M=t.get(p),_=M.envMap,b=M.envMapRotation;_&&(d.envMap.value=_,Xi.copy(b),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),d.envMapRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(Xi)),d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,M,_){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*M,d.scale.value=_*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function m(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,M){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===De&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function v(d,p){const M=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Pm(s,t,e,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){const b=_.program;i.uniformBlockBinding(M,b)}function c(M,_){let b=n[M.id];b===void 0&&(g(M),b=h(M),n[M.id]=b,M.addEventListener("dispose",d));const P=_.program;i.updateUBOMapping(M,P);const A=t.render.frame;r[M.id]!==A&&(m(M),r[M.id]=A)}function h(M){const _=u();M.__bindingPointIndex=_;const b=s.createBuffer(),P=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,b),b}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(M){const _=n[M.id],b=M.uniforms,P=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let A=0,E=b.length;A<E;A++){const R=Array.isArray(b[A])?b[A]:[b[A]];for(let N=0,x=R.length;N<x;N++){const S=R[N];if(f(S,A,N,P)===!0){const k=S.__offset,F=Array.isArray(S.value)?S.value:[S.value];let V=0;for(let K=0;K<F.length;K++){const H=F[K],j=v(H);typeof H=="number"||typeof H=="boolean"?(S.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,k+V,S.__data)):H.isMatrix3?(S.__data[0]=H.elements[0],S.__data[1]=H.elements[1],S.__data[2]=H.elements[2],S.__data[3]=0,S.__data[4]=H.elements[3],S.__data[5]=H.elements[4],S.__data[6]=H.elements[5],S.__data[7]=0,S.__data[8]=H.elements[6],S.__data[9]=H.elements[7],S.__data[10]=H.elements[8],S.__data[11]=0):(H.toArray(S.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,_,b,P){const A=M.value,E=_+"_"+b;if(P[E]===void 0)return typeof A=="number"||typeof A=="boolean"?P[E]=A:P[E]=A.clone(),!0;{const R=P[E];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return P[E]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(M){const _=M.uniforms;let b=0;const P=16;for(let E=0,R=_.length;E<R;E++){const N=Array.isArray(_[E])?_[E]:[_[E]];for(let x=0,S=N.length;x<S;x++){const k=N[x],F=Array.isArray(k.value)?k.value:[k.value];for(let V=0,K=F.length;V<K;V++){const H=F[V],j=v(H),Y=b%P,ct=Y%j.boundary,at=Y+ct;b+=ct,at!==0&&P-at<j.storage&&(b+=P-at),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=j.storage}}}const A=b%P;return A>0&&(b+=P-A),M.__size=b,M.__cache={},this}function v(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function d(M){const _=M.target;_.removeEventListener("dispose",d);const b=a.indexOf(_.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete r[_.id]}function p(){for(const M in n)s.deleteBuffer(n[M]);a=[],n={},r={}}return{bind:l,update:c,dispose:p}}class Lm{constructor(t={}){const{canvas:e=xh(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,d=null;const p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=Ii,this.toneMappingExposure=1;const _=this;let b=!1,P=0,A=0,E=null,R=-1,N=null;const x=new ae,S=new ae;let k=null;const F=new nt(0);let V=0,K=e.width,H=e.height,j=1,Y=null,ct=null;const at=new ae(0,0,K,H),yt=new ae(0,0,K,H);let Vt=!1;const Zt=new Qa;let W=!1,tt=!1;const gt=new le,ht=new le,Lt=new C,Ct=new ae,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Xt(){return E===null?j:1}let L=i;function Oe(w,I){return e.getContext(w,I)}try{const w={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wa}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",dt,!1),L===null){const I="webgl2";if(L=Oe(I,w),L===null)throw Oe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Gt,qt,Dt,ce,kt,T,y,O,$,Q,J,bt,rt,ft,Kt,et,pt,It,Ut,mt,Ht,Ft,oe,D;function ut(){Gt=new kf(L),Gt.init(),Ft=new Mm(L,Gt),qt=new Pf(L,Gt,t,Ft),Dt=new vm(L),qt.reverseDepthBuffer&&Dt.buffers.depth.setReversed(!0),ce=new Bf(L),kt=new nm,T=new ym(L,Gt,Dt,kt,qt,Ft,ce),y=new Df(_),O=new Nf(_),$=new Xh(L),oe=new Cf(L,$),Q=new Ff(L,$,ce,oe),J=new Gf(L,Q,$,ce),Ut=new zf(L,qt,T),et=new Lf(kt),bt=new im(_,y,O,Gt,qt,oe,et),rt=new Rm(_,kt),ft=new rm,Kt=new um(Gt),It=new Af(_,y,O,Dt,J,m,l),pt=new gm(_,J,qt),D=new Pm(L,ce,qt,Dt),mt=new Rf(L,Gt,ce),Ht=new Of(L,Gt,ce),ce.programs=bt.programs,_.capabilities=qt,_.extensions=Gt,_.properties=kt,_.renderLists=ft,_.shadowMap=pt,_.state=Dt,_.info=ce}ut();const X=new Am(_,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Gt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Gt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(K,H,!1))},this.getSize=function(w){return w.set(K,H)},this.setSize=function(w,I,B=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,H=I,e.width=Math.floor(w*j),e.height=Math.floor(I*j),B===!0&&(e.style.width=w+"px",e.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(K*j,H*j).floor()},this.setDrawingBufferSize=function(w,I,B){K=w,H=I,j=B,e.width=Math.floor(w*B),e.height=Math.floor(I*B),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(at)},this.setViewport=function(w,I,B,G){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,I,B,G),Dt.viewport(x.copy(at).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(yt)},this.setScissor=function(w,I,B,G){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,I,B,G),Dt.scissor(S.copy(yt).multiplyScalar(j).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(w){Dt.setScissorTest(Vt=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){ct=w},this.getClearColor=function(w){return w.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(w=!0,I=!0,B=!0){let G=0;if(w){let U=!1;if(E!==null){const it=E.texture.format;U=it===$a||it===Ja||it===Ka}if(U){const it=E.texture.type,lt=it===Mi||it===Qi||it===ss||it===Pn||it===Ya||it===qa,_t=It.getClearColor(),Mt=It.getClearAlpha(),Rt=_t.r,Pt=_t.g,wt=_t.b;lt?(f[0]=Rt,f[1]=Pt,f[2]=wt,f[3]=Mt,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=Rt,g[1]=Pt,g[2]=wt,g[3]=Mt,L.clearBufferiv(L.COLOR,0,g))}else G|=L.COLOR_BUFFER_BIT}I&&(G|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),ft.dispose(),Kt.dispose(),kt.dispose(),y.dispose(),O.dispose(),J.dispose(),oe.dispose(),D.dispose(),bt.dispose(),X.dispose(),X.removeEventListener("sessionstart",co),X.removeEventListener("sessionend",ho),Bi.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=ce.autoReset,I=pt.enabled,B=pt.autoUpdate,G=pt.needsUpdate,U=pt.type;ut(),ce.autoReset=w,pt.enabled=I,pt.autoUpdate=B,pt.needsUpdate=G,pt.type=U}function dt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Yt(w){const I=w.target;I.removeEventListener("dispose",Yt),ge(I)}function ge(w){Ue(w),kt.remove(w)}function Ue(w){const I=kt.get(w).programs;I!==void 0&&(I.forEach(function(B){bt.releaseProgram(B)}),w.isShaderMaterial&&bt.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,B,G,U,it){I===null&&(I=Wt);const lt=U.isMesh&&U.matrixWorld.determinant()<0,_t=uc(w,I,B,G,U);Dt.setMaterial(G,lt);let Mt=B.index,Rt=1;if(G.wireframe===!0){if(Mt=Q.getWireframeAttribute(B),Mt===void 0)return;Rt=2}const Pt=B.drawRange,wt=B.attributes.position;let ne=Pt.start*Rt,he=(Pt.start+Pt.count)*Rt;it!==null&&(ne=Math.max(ne,it.start*Rt),he=Math.min(he,(it.start+it.count)*Rt)),Mt!==null?(ne=Math.max(ne,0),he=Math.min(he,Mt.count)):wt!=null&&(ne=Math.max(ne,0),he=Math.min(he,wt.count));const pe=he-ne;if(pe<0||pe===1/0)return;oe.setup(U,G,_t,B,Mt);let Be,te=mt;if(Mt!==null&&(Be=$.get(Mt),te=Ht,te.setIndex(Be)),U.isMesh)G.wireframe===!0?(Dt.setLineWidth(G.wireframeLinewidth*Xt()),te.setMode(L.LINES)):te.setMode(L.TRIANGLES);else if(U.isLine){let Et=G.linewidth;Et===void 0&&(Et=1),Dt.setLineWidth(Et*Xt()),U.isLineSegments?te.setMode(L.LINES):U.isLineLoop?te.setMode(L.LINE_LOOP):te.setMode(L.LINE_STRIP)}else U.isPoints?te.setMode(L.POINTS):U.isSprite&&te.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)te.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))te.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Et=U._multiDrawStarts,we=U._multiDrawCounts,ee=U._multiDrawCount,Je=Mt?$.get(Mt).bytesPerElement:1,sn=kt.get(G).currentProgram.getUniforms();for(let ze=0;ze<ee;ze++)sn.setValue(L,"_gl_DrawID",ze),te.render(Et[ze]/Je,we[ze])}else if(U.isInstancedMesh)te.renderInstances(ne,pe,U.count);else if(B.isInstancedBufferGeometry){const Et=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,we=Math.min(B.instanceCount,Et);te.renderInstances(ne,pe,we)}else te.render(ne,pe)};function Qt(w,I,B){w.transparent===!0&&w.side===de&&w.forceSinglePass===!1?(w.side=De,w.needsUpdate=!0,hs(w,I,B),w.side=ki,w.needsUpdate=!0,hs(w,I,B),w.side=de):hs(w,I,B)}this.compile=function(w,I,B=null){B===null&&(B=w),d=Kt.get(B),d.init(I),M.push(d),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),w!==B&&w.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const G=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const it=U.material;if(it)if(Array.isArray(it))for(let lt=0;lt<it.length;lt++){const _t=it[lt];Qt(_t,B,U),G.add(_t)}else Qt(it,B,U),G.add(it)}),M.pop(),d=null,G},this.compileAsync=function(w,I,B=null){const G=this.compile(w,I,B);return new Promise(U=>{function it(){if(G.forEach(function(lt){kt.get(lt).currentProgram.isReady()&&G.delete(lt)}),G.size===0){U(w);return}setTimeout(it,10)}Gt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Ne=null;function hi(w){Ne&&Ne(w)}function co(){Bi.stop()}function ho(){Bi.start()}const Bi=new $l;Bi.setAnimationLoop(hi),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(w){Ne=w,X.setAnimationLoop(w),w===null?Bi.stop():Bi.start()},X.addEventListener("sessionstart",co),X.addEventListener("sessionend",ho),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(I),I=X.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,I,E),d=Kt.get(w,M.length),d.init(I),M.push(d),ht.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Zt.setFromProjectionMatrix(ht),tt=this.localClippingEnabled,W=et.init(this.clippingPlanes,tt),v=ft.get(w,p.length),v.init(),p.push(v),X.enabled===!0&&X.isPresenting===!0){const it=_.xr.getDepthSensingMesh();it!==null&&mr(it,I,-1/0,_.sortObjects)}mr(w,I,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(Y,ct),re=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,re&&It.addToRenderList(v,w),this.info.render.frame++,W===!0&&et.beginShadows();const B=d.state.shadowsArray;pt.render(B,w,I),W===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,U=v.transmissive;if(d.setupLights(),I.isArrayCamera){const it=I.cameras;if(U.length>0)for(let lt=0,_t=it.length;lt<_t;lt++){const Mt=it[lt];fo(G,U,w,Mt)}re&&It.render(w);for(let lt=0,_t=it.length;lt<_t;lt++){const Mt=it[lt];uo(v,w,Mt,Mt.viewport)}}else U.length>0&&fo(G,U,w,I),re&&It.render(w),uo(v,w,I);E!==null&&(T.updateMultisampleRenderTarget(E),T.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(_,w,I),oe.resetDefaultState(),R=-1,N=null,M.pop(),M.length>0?(d=M[M.length-1],W===!0&&et.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function mr(w,I,B,G){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Zt.intersectsSprite(w)){G&&Ct.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ht);const lt=J.update(w),_t=w.material;_t.visible&&v.push(w,lt,_t,B,Ct.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Zt.intersectsObject(w))){const lt=J.update(w),_t=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ct.copy(w.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ct.copy(lt.boundingSphere.center)),Ct.applyMatrix4(w.matrixWorld).applyMatrix4(ht)),Array.isArray(_t)){const Mt=lt.groups;for(let Rt=0,Pt=Mt.length;Rt<Pt;Rt++){const wt=Mt[Rt],ne=_t[wt.materialIndex];ne&&ne.visible&&v.push(w,lt,ne,B,Ct.z,wt)}}else _t.visible&&v.push(w,lt,_t,B,Ct.z,null)}}const it=w.children;for(let lt=0,_t=it.length;lt<_t;lt++)mr(it[lt],I,B,G)}function uo(w,I,B,G){const U=w.opaque,it=w.transmissive,lt=w.transparent;d.setupLightsView(B),W===!0&&et.setGlobalState(_.clippingPlanes,B),G&&Dt.viewport(x.copy(G)),U.length>0&&cs(U,I,B),it.length>0&&cs(it,I,B),lt.length>0&&cs(lt,I,B),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function fo(w,I,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new tn(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?as:Mi,minFilter:Zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const it=d.state.transmissionRenderTarget[G.id],lt=G.viewport||x;it.setSize(lt.z,lt.w);const _t=_.getRenderTarget();_.setRenderTarget(it),_.getClearColor(F),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),re&&It.render(B);const Mt=_.toneMapping;_.toneMapping=Ii;const Rt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),W===!0&&et.setGlobalState(_.clippingPlanes,G),cs(w,B,G),T.updateMultisampleRenderTarget(it),T.updateRenderTargetMipmap(it),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let wt=0,ne=I.length;wt<ne;wt++){const he=I[wt],pe=he.object,Be=he.geometry,te=he.material,Et=he.group;if(te.side===de&&pe.layers.test(G.layers)){const we=te.side;te.side=De,te.needsUpdate=!0,po(pe,B,G,Be,te,Et),te.side=we,te.needsUpdate=!0,Pt=!0}}Pt===!0&&(T.updateMultisampleRenderTarget(it),T.updateRenderTargetMipmap(it))}_.setRenderTarget(_t),_.setClearColor(F,V),Rt!==void 0&&(G.viewport=Rt),_.toneMapping=Mt}function cs(w,I,B){const G=I.isScene===!0?I.overrideMaterial:null;for(let U=0,it=w.length;U<it;U++){const lt=w[U],_t=lt.object,Mt=lt.geometry,Rt=G===null?lt.material:G,Pt=lt.group;_t.layers.test(B.layers)&&po(_t,I,B,Mt,Rt,Pt)}}function po(w,I,B,G,U,it){w.onBeforeRender(_,I,B,G,U,it),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(_,I,B,G,w,it),U.transparent===!0&&U.side===de&&U.forceSinglePass===!1?(U.side=De,U.needsUpdate=!0,_.renderBufferDirect(B,I,G,U,w,it),U.side=ki,U.needsUpdate=!0,_.renderBufferDirect(B,I,G,U,w,it),U.side=de):_.renderBufferDirect(B,I,G,U,w,it),w.onAfterRender(_,I,B,G,U,it)}function hs(w,I,B){I.isScene!==!0&&(I=Wt);const G=kt.get(w),U=d.state.lights,it=d.state.shadowsArray,lt=U.state.version,_t=bt.getParameters(w,U.state,it,I,B),Mt=bt.getProgramCacheKey(_t);let Rt=G.programs;G.environment=w.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(w.isMeshStandardMaterial?O:y).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,Rt===void 0&&(w.addEventListener("dispose",Yt),Rt=new Map,G.programs=Rt);let Pt=Rt.get(Mt);if(Pt!==void 0){if(G.currentProgram===Pt&&G.lightsStateVersion===lt)return go(w,_t),Pt}else _t.uniforms=bt.getUniforms(w),w.onBeforeCompile(_t,_),Pt=bt.acquireProgram(_t,Mt),Rt.set(Mt,Pt),G.uniforms=_t.uniforms;const wt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(wt.clippingPlanes=et.uniform),go(w,_t),G.needsLights=fc(w),G.lightsStateVersion=lt,G.needsLights&&(wt.ambientLightColor.value=U.state.ambient,wt.lightProbe.value=U.state.probe,wt.directionalLights.value=U.state.directional,wt.directionalLightShadows.value=U.state.directionalShadow,wt.spotLights.value=U.state.spot,wt.spotLightShadows.value=U.state.spotShadow,wt.rectAreaLights.value=U.state.rectArea,wt.ltc_1.value=U.state.rectAreaLTC1,wt.ltc_2.value=U.state.rectAreaLTC2,wt.pointLights.value=U.state.point,wt.pointLightShadows.value=U.state.pointShadow,wt.hemisphereLights.value=U.state.hemi,wt.directionalShadowMap.value=U.state.directionalShadowMap,wt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,wt.spotShadowMap.value=U.state.spotShadowMap,wt.spotLightMatrix.value=U.state.spotLightMatrix,wt.spotLightMap.value=U.state.spotLightMap,wt.pointShadowMap.value=U.state.pointShadowMap,wt.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Pt,G.uniformsList=null,Pt}function mo(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=Ws.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function go(w,I){const B=kt.get(w);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function uc(w,I,B,G,U){I.isScene!==!0&&(I=Wt),T.resetTextureUnits();const it=I.fog,lt=G.isMeshStandardMaterial?I.environment:null,_t=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Oi,Mt=(G.isMeshStandardMaterial?O:y).get(G.envMap||lt),Rt=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pt=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),wt=!!B.morphAttributes.position,ne=!!B.morphAttributes.normal,he=!!B.morphAttributes.color;let pe=Ii;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(pe=_.toneMapping);const Be=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,te=Be!==void 0?Be.length:0,Et=kt.get(G),we=d.state.lights;if(W===!0&&(tt===!0||w!==N)){const Xe=w===N&&G.id===R;et.setState(G,w,Xe)}let ee=!1;G.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==we.state.version||Et.outputColorSpace!==_t||U.isBatchedMesh&&Et.batching===!1||!U.isBatchedMesh&&Et.batching===!0||U.isBatchedMesh&&Et.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Et.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Et.instancing===!1||!U.isInstancedMesh&&Et.instancing===!0||U.isSkinnedMesh&&Et.skinning===!1||!U.isSkinnedMesh&&Et.skinning===!0||U.isInstancedMesh&&Et.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Et.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Et.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Et.instancingMorph===!1&&U.morphTexture!==null||Et.envMap!==Mt||G.fog===!0&&Et.fog!==it||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==et.numPlanes||Et.numIntersection!==et.numIntersection)||Et.vertexAlphas!==Rt||Et.vertexTangents!==Pt||Et.morphTargets!==wt||Et.morphNormals!==ne||Et.morphColors!==he||Et.toneMapping!==pe||Et.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Et.__version=G.version);let Je=Et.currentProgram;ee===!0&&(Je=hs(G,I,U));let sn=!1,ze=!1,gr=!1;const me=Je.getUniforms(),wi=Et.uniforms;if(Dt.useProgram(Je.program)&&(sn=!0,ze=!0,gr=!0),G.id!==R&&(R=G.id,ze=!0),sn||N!==w){qt.reverseDepthBuffer?(gt.copy(w.projectionMatrix),_h(gt),yh(gt),me.setValue(L,"projectionMatrix",gt)):me.setValue(L,"projectionMatrix",w.projectionMatrix),me.setValue(L,"viewMatrix",w.matrixWorldInverse);const Xe=me.map.cameraPosition;Xe!==void 0&&Xe.setValue(L,Lt.setFromMatrixPosition(w.matrixWorld)),qt.logarithmicDepthBuffer&&me.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&me.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),N!==w&&(N=w,ze=!0,gr=!0)}if(U.isSkinnedMesh){me.setOptional(L,U,"bindMatrix"),me.setOptional(L,U,"bindMatrixInverse");const Xe=U.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),me.setValue(L,"boneTexture",Xe.boneTexture,T))}U.isBatchedMesh&&(me.setOptional(L,U,"batchingTexture"),me.setValue(L,"batchingTexture",U._matricesTexture,T),me.setOptional(L,U,"batchingIdTexture"),me.setValue(L,"batchingIdTexture",U._indirectTexture,T),me.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&me.setValue(L,"batchingColorTexture",U._colorsTexture,T));const xr=B.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&Ut.update(U,B,Je),(ze||Et.receiveShadow!==U.receiveShadow)&&(Et.receiveShadow=U.receiveShadow,me.setValue(L,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(wi.envMap.value=Mt,wi.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(wi.envMapIntensity.value=I.environmentIntensity),ze&&(me.setValue(L,"toneMappingExposure",_.toneMappingExposure),Et.needsLights&&dc(wi,gr),it&&G.fog===!0&&rt.refreshFogUniforms(wi,it),rt.refreshMaterialUniforms(wi,G,j,H,d.state.transmissionRenderTarget[w.id]),Ws.upload(L,mo(Et),wi,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ws.upload(L,mo(Et),wi,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&me.setValue(L,"center",U.center),me.setValue(L,"modelViewMatrix",U.modelViewMatrix),me.setValue(L,"normalMatrix",U.normalMatrix),me.setValue(L,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Xe=G.uniformsGroups;for(let vr=0,pc=Xe.length;vr<pc;vr++){const xo=Xe[vr];D.update(xo,Je),D.bind(xo,Je)}}return Je}function dc(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function fc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,I,B){kt.get(w.texture).__webglTexture=I,kt.get(w.depthTexture).__webglTexture=B;const G=kt.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const B=kt.get(w);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,B=0){E=w,P=I,A=B;let G=!0,U=null,it=!1,lt=!1;if(w){const Mt=kt.get(w);if(Mt.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(Mt.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Mt.__hasExternalTextures)T.rebindTextures(w,kt.get(w.texture).__webglTexture,kt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const wt=w.depthTexture;if(Mt.__boundDepthTexture!==wt){if(wt!==null&&kt.has(wt)&&(w.width!==wt.image.width||w.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const Rt=w.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);const Pt=kt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Pt[I])?U=Pt[I][B]:U=Pt[I],it=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?U=kt.get(w).__webglMultisampledFramebuffer:Array.isArray(Pt)?U=Pt[B]:U=Pt,x.copy(w.viewport),S.copy(w.scissor),k=w.scissorTest}else x.copy(at).multiplyScalar(j).floor(),S.copy(yt).multiplyScalar(j).floor(),k=Vt;if(Dt.bindFramebuffer(L.FRAMEBUFFER,U)&&G&&Dt.drawBuffers(w,U),Dt.viewport(x),Dt.scissor(S),Dt.setScissorTest(k),it){const Mt=kt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,Mt.__webglTexture,B)}else if(lt){const Mt=kt.get(w.texture),Rt=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.__webglTexture,B||0,Rt)}R=-1},this.readRenderTargetPixels=function(w,I,B,G,U,it,lt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=kt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){Dt.bindFramebuffer(L.FRAMEBUFFER,_t);try{const Mt=w.texture,Rt=Mt.format,Pt=Mt.type;if(!qt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-G&&B>=0&&B<=w.height-U&&L.readPixels(I,B,G,U,Ft.convert(Rt),Ft.convert(Pt),it)}finally{const Mt=E!==null?kt.get(E).__webglFramebuffer:null;Dt.bindFramebuffer(L.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(w,I,B,G,U,it,lt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=kt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){const Mt=w.texture,Rt=Mt.format,Pt=Mt.type;if(!qt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=w.width-G&&B>=0&&B<=w.height-U){Dt.bindFramebuffer(L.FRAMEBUFFER,_t);const wt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,wt),L.bufferData(L.PIXEL_PACK_BUFFER,it.byteLength,L.STREAM_READ),L.readPixels(I,B,G,U,Ft.convert(Rt),Ft.convert(Pt),0);const ne=E!==null?kt.get(E).__webglFramebuffer:null;Dt.bindFramebuffer(L.FRAMEBUFFER,ne);const he=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await vh(L,he,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,wt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,it),L.deleteBuffer(wt),L.deleteSync(he),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,I=null,B=0){w.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-B),U=Math.floor(w.image.width*G),it=Math.floor(w.image.height*G),lt=I!==null?I.x:0,_t=I!==null?I.y:0;T.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,lt,_t,U,it),Dt.unbindTexture()},this.copyTextureToTexture=function(w,I,B=null,G=null,U=0){w.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],I=arguments[2],U=arguments[3]||0,B=null);let it,lt,_t,Mt,Rt,Pt;B!==null?(it=B.max.x-B.min.x,lt=B.max.y-B.min.y,_t=B.min.x,Mt=B.min.y):(it=w.image.width,lt=w.image.height,_t=0,Mt=0),G!==null?(Rt=G.x,Pt=G.y):(Rt=0,Pt=0);const wt=Ft.convert(I.format),ne=Ft.convert(I.type);T.setTexture2D(I,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const he=L.getParameter(L.UNPACK_ROW_LENGTH),pe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Be=L.getParameter(L.UNPACK_SKIP_PIXELS),te=L.getParameter(L.UNPACK_SKIP_ROWS),Et=L.getParameter(L.UNPACK_SKIP_IMAGES),we=w.isCompressedTexture?w.mipmaps[U]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,we.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,we.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_t),L.pixelStorei(L.UNPACK_SKIP_ROWS,Mt),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Rt,Pt,it,lt,wt,ne,we.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Rt,Pt,we.width,we.height,wt,we.data):L.texSubImage2D(L.TEXTURE_2D,U,Rt,Pt,it,lt,wt,ne,we),L.pixelStorei(L.UNPACK_ROW_LENGTH,he),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Be),L.pixelStorei(L.UNPACK_SKIP_ROWS,te),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Et),U===0&&I.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Dt.unbindTexture()},this.copyTextureToTexture3D=function(w,I,B=null,G=null,U=0){w.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,G=arguments[1]||null,w=arguments[2],I=arguments[3],U=arguments[4]||0);let it,lt,_t,Mt,Rt,Pt,wt,ne,he;const pe=w.isCompressedTexture?w.mipmaps[U]:w.image;B!==null?(it=B.max.x-B.min.x,lt=B.max.y-B.min.y,_t=B.max.z-B.min.z,Mt=B.min.x,Rt=B.min.y,Pt=B.min.z):(it=pe.width,lt=pe.height,_t=pe.depth,Mt=0,Rt=0,Pt=0),G!==null?(wt=G.x,ne=G.y,he=G.z):(wt=0,ne=0,he=0);const Be=Ft.convert(I.format),te=Ft.convert(I.type);let Et;if(I.isData3DTexture)T.setTexture3D(I,0),Et=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)T.setTexture2DArray(I,0),Et=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const we=L.getParameter(L.UNPACK_ROW_LENGTH),ee=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Je=L.getParameter(L.UNPACK_SKIP_PIXELS),sn=L.getParameter(L.UNPACK_SKIP_ROWS),ze=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,pe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Rt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pt),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Et,U,wt,ne,he,it,lt,_t,Be,te,pe.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Et,U,wt,ne,he,it,lt,_t,Be,pe.data):L.texSubImage3D(Et,U,wt,ne,he,it,lt,_t,Be,te,pe),L.pixelStorei(L.UNPACK_ROW_LENGTH,we),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ee),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Je),L.pixelStorei(L.UNPACK_SKIP_ROWS,sn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ze),U===0&&I.generateMipmaps&&L.generateMipmap(Et),Dt.unbindTexture()},this.initRenderTarget=function(w){kt.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),Dt.unbindTexture()},this.resetState=function(){P=0,A=0,E=null,Dt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ja?"display-p3":"srgb",e.unpackColorSpace=ie.workingColorSpace===or?"display-p3":"srgb"}}class eo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new nt(t),this.density=e}clone(){return new eo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Dm extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Im{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ha,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pe=new C;class Qs{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ei(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=se(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ei(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ei(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ei(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ei(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),i=se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),i=se(i,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),i=se(i,this.array),n=se(n,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nc extends nn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let _n;const Wn=new C,yn=new C,Mn=new C,Sn=new vt,Xn=new vt,sc=new le,Ds=new C,Yn=new C,Is=new C,dl=new vt,Kr=new vt,fl=new vt;class Um extends be{constructor(t=new nc){if(super(),this.isSprite=!0,this.type="Sprite",_n===void 0){_n=new fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Im(e,5);_n.setIndex([0,1,2,0,2,3]),_n.setAttribute("position",new Qs(i,3,0,!1)),_n.setAttribute("uv",new Qs(i,2,3,!1))}this.geometry=_n,this.material=t,this.center=new vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yn.setFromMatrixScale(this.matrixWorld),sc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Mn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yn.multiplyScalar(-Mn.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;Us(Ds.set(-.5,-.5,0),Mn,a,yn,n,r),Us(Yn.set(.5,-.5,0),Mn,a,yn,n,r),Us(Is.set(.5,.5,0),Mn,a,yn,n,r),dl.set(0,0),Kr.set(1,0),fl.set(1,1);let o=t.ray.intersectTriangle(Ds,Yn,Is,!1,Wn);if(o===null&&(Us(Yn.set(-.5,.5,0),Mn,a,yn,n,r),Kr.set(0,1),o=t.ray.intersectTriangle(Ds,Is,Yn,!1,Wn),o===null))return;const l=t.ray.origin.distanceTo(Wn);l<t.near||l>t.far||e.push({distance:l,point:Wn.clone(),uv:qe.getInterpolation(Wn,Ds,Yn,Is,dl,Kr,fl,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Us(s,t,e,i,n,r){Sn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Xn.x=r*Sn.x-n*Sn.y,Xn.y=n*Sn.x+r*Sn.y):Xn.copy(Sn),s.copy(t),s.x+=Xn.x,s.y+=Xn.y,s.applyMatrix4(sc)}class In extends nn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const tr=new C,er=new C,pl=new le,qn=new Hl,Ns=new lr,Jr=new C,ml=new C;class hr extends be{constructor(t=new fe,e=new In){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)tr.fromBufferAttribute(e,n-1),er.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=tr.distanceTo(er);t.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(n),Ns.radius+=r,t.ray.intersectsSphere(Ns)===!1)return;pl.copy(n).invert(),qn.copy(t.ray).applyMatrix4(pl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,m=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,d=g-1;v<d;v+=c){const p=h.getX(v),M=h.getX(v+1),_=ks(this,t,qn,l,p,M);_&&e.push(_)}if(this.isLineLoop){const v=h.getX(g-1),d=h.getX(f),p=ks(this,t,qn,l,v,d);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count);for(let v=f,d=g-1;v<d;v+=c){const p=ks(this,t,qn,l,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=ks(this,t,qn,l,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ks(s,t,e,i,n,r){const a=s.geometry.attributes.position;if(tr.fromBufferAttribute(a,n),er.fromBufferAttribute(a,r),e.distanceSqToSegment(tr,er,Jr,ml)>i)return;Jr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Jr);if(!(l<t.near||l>t.far))return{distance:l,point:ml.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}const gl=new C,xl=new C;class rc extends hr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)gl.fromBufferAttribute(e,n),xl.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+gl.distanceTo(xl);t.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ir extends Ie{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);const h=i[n],m=i[n+1]-h,f=(a-h)/m;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new vt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new C,n=[],r=[],a=[],o=new C,l=new le;for(let f=0;f<=t;f++){const g=f/t;n[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),m=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),m<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ee(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(Ee(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ac extends bi{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new vt){const i=e,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),m=l-this.aX,f=c-this.aY;l=m*h-f*u+this.aX,c=m*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Nm extends ac{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function io(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let m=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;m*=h,f*=h,n(a,o,m,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+i*o}}}const Fs=new C,$r=new io,jr=new io,Zr=new io;class Xs extends bi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new C){const i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(Fs.subVectors(n[0],n[1]).add(n[0]),c=Fs);const u=n[o%r],m=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(Fs.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Fs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(m),f),d=Math.pow(m.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),d<1e-4&&(d=v),$r.initNonuniformCatmullRom(c.x,u.x,m.x,h.x,g,v,d),jr.initNonuniformCatmullRom(c.y,u.y,m.y,h.y,g,v,d),Zr.initNonuniformCatmullRom(c.z,u.z,m.z,h.z,g,v,d)}else this.curveType==="catmullrom"&&($r.initCatmullRom(c.x,u.x,m.x,h.x,this.tension),jr.initCatmullRom(c.y,u.y,m.y,h.y,this.tension),Zr.initCatmullRom(c.z,u.z,m.z,h.z,this.tension));return i.set($r.calc(l),jr.calc(l),Zr.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new C().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vl(s,t,e,i,n){const r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function km(s,t){const e=1-s;return e*e*t}function Fm(s,t){return 2*(1-s)*s*t}function Om(s,t){return s*s*t}function Zn(s,t,e,i){return km(s,t)+Fm(s,e)+Om(s,i)}function Bm(s,t){const e=1-s;return e*e*e*t}function zm(s,t){const e=1-s;return 3*e*e*s*t}function Gm(s,t){return 3*(1-s)*s*s*t}function Hm(s,t){return s*s*s*t}function Qn(s,t,e,i,n){return Bm(s,t)+zm(s,e)+Gm(s,i)+Hm(s,n)}class Vm extends bi{constructor(t=new vt,e=new vt,i=new vt,n=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new vt){const i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Qn(t,n.x,r.x,a.x,o.x),Qn(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wm extends bi{constructor(t=new C,e=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new C){const i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Qn(t,n.x,r.x,a.x,o.x),Qn(t,n.y,r.y,a.y,o.y),Qn(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xm extends bi{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ym extends bi{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qm extends bi{constructor(t=new vt,e=new vt,i=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new vt){const i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Zn(t,n.x,r.x,a.x),Zn(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class oc extends bi{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){const i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Zn(t,n.x,r.x,a.x),Zn(t,n.y,r.y,a.y),Zn(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Km extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(vl(o,l.x,c.x,h.x,u.x),vl(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new vt().fromArray(n))}return this}}var Jm=Object.freeze({__proto__:null,ArcCurve:Nm,CatmullRomCurve3:Xs,CubicBezierCurve:Vm,CubicBezierCurve3:Wm,EllipseCurve:ac,LineCurve:Xm,LineCurve3:Ym,QuadraticBezierCurve:qm,QuadraticBezierCurve3:oc,SplineCurve:Km});class Un extends fe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new C,h=new vt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,m=3;u<=e;u++,m+=3){const f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[m]/t+1)/2,h.y=(a[m+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(o,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class zt extends fe{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],u=[],m=[],f=[];let g=0;const v=[],d=i/2;let p=0;M(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(m,3)),this.setAttribute("uv",new jt(f,2));function M(){const b=new C,P=new C;let A=0;const E=(e-t)/i;for(let R=0;R<=r;R++){const N=[],x=R/r,S=x*(e-t)+t;for(let k=0;k<=n;k++){const F=k/n,V=F*l+o,K=Math.sin(V),H=Math.cos(V);P.x=S*K,P.y=-x*i+d,P.z=S*H,u.push(P.x,P.y,P.z),b.set(K,E,H).normalize(),m.push(b.x,b.y,b.z),f.push(F,1-x),N.push(g++)}v.push(N)}for(let R=0;R<n;R++)for(let N=0;N<r;N++){const x=v[N][R],S=v[N+1][R],k=v[N+1][R+1],F=v[N][R+1];t>0&&(h.push(x,S,F),A+=3),e>0&&(h.push(S,k,F),A+=3)}c.addGroup(p,A,0),p+=A}function _(b){const P=g,A=new vt,E=new C;let R=0;const N=b===!0?t:e,x=b===!0?1:-1;for(let k=1;k<=n;k++)u.push(0,d*x,0),m.push(0,x,0),f.push(.5,.5),g++;const S=g;for(let k=0;k<=n;k++){const V=k/n*l+o,K=Math.cos(V),H=Math.sin(V);E.x=N*H,E.y=d*x,E.z=N*K,u.push(E.x,E.y,E.z),m.push(0,x,0),A.x=K*.5+.5,A.y=H*.5*x+.5,f.push(A.x,A.y),g++}for(let k=0;k<n;k++){const F=P+k,V=S+k;b===!0?h.push(V,V+1,F):h.push(V+1,V,F),R+=3}c.addGroup(p,R,b===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ke extends zt{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ke(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ur extends fe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const _=new C,b=new C,P=new C;for(let A=0;A<e.length;A+=3)f(e[A+0],_),f(e[A+1],b),f(e[A+2],P),l(_,b,P,M)}function l(M,_,b,P){const A=P+1,E=[];for(let R=0;R<=A;R++){E[R]=[];const N=M.clone().lerp(b,R/A),x=_.clone().lerp(b,R/A),S=A-R;for(let k=0;k<=S;k++)k===0&&R===A?E[R][k]=N:E[R][k]=N.clone().lerp(x,k/S)}for(let R=0;R<A;R++)for(let N=0;N<2*(A-R)-1;N++){const x=Math.floor(N/2);N%2===0?(m(E[R][x+1]),m(E[R+1][x]),m(E[R][x])):(m(E[R][x+1]),m(E[R+1][x+1]),m(E[R+1][x]))}}function c(M){const _=new C;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(M),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function h(){const M=new C;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];const b=d(M)/2/Math.PI+.5,P=p(M)/Math.PI+.5;a.push(b,1-P)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const _=a[M+0],b=a[M+2],P=a[M+4],A=Math.max(_,b,P),E=Math.min(_,b,P);A>.9&&E<.1&&(_<.2&&(a[M+0]+=1),b<.2&&(a[M+2]+=1),P<.2&&(a[M+4]+=1))}}function m(M){r.push(M.x,M.y,M.z)}function f(M,_){const b=M*3;_.x=t[b+0],_.y=t[b+1],_.z=t[b+2]}function g(){const M=new C,_=new C,b=new C,P=new C,A=new vt,E=new vt,R=new vt;for(let N=0,x=0;N<r.length;N+=9,x+=6){M.set(r[N+0],r[N+1],r[N+2]),_.set(r[N+3],r[N+4],r[N+5]),b.set(r[N+6],r[N+7],r[N+8]),A.set(a[x+0],a[x+1]),E.set(a[x+2],a[x+3]),R.set(a[x+4],a[x+5]),P.copy(M).add(_).add(b).divideScalar(3);const S=d(P);v(A,x+0,M,S),v(E,x+2,_,S),v(R,x+4,b,S)}}function v(M,_,b,P){P<0&&M.x===1&&(a[_]=M.x-1),b.x===0&&b.z===0&&(a[_]=P/2/Math.PI+.5)}function d(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ur(t.vertices,t.indices,t.radius,t.details)}}class no extends ur{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new no(t.radius,t.detail)}}class so extends ur{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new so(t.radius,t.detail)}}class Fi extends fe{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let u=t;const m=(e-t)/n,f=new C,g=new vt;for(let v=0;v<=n;v++){for(let d=0;d<=i;d++){const p=r+d/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=m}for(let v=0;v<n;v++){const d=v*(i+1);for(let p=0;p<i;p++){const M=p+d,_=M,b=M+i+1,P=M+i+2,A=M+1;o.push(_,b,A),o.push(b,P,A)}}this.setIndex(o),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class yi extends fe{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new C,m=new C,f=[],g=[],v=[],d=[];for(let p=0;p<=i;p++){const M=[],_=p/i;let b=0;p===0&&a===0?b=.5/e:p===i&&l===Math.PI&&(b=-.5/e);for(let P=0;P<=e;P++){const A=P/e;u.x=-t*Math.cos(n+A*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(n+A*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),m.copy(u).normalize(),v.push(m.x,m.y,m.z),d.push(A+b,1-_),M.push(c++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const _=h[p][M+1],b=h[p][M],P=h[p+1][M],A=h[p+1][M+1];(p!==0||a>0)&&f.push(_,b,A),(p!==i-1||l<Math.PI)&&f.push(b,P,A)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dr extends fe{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],c=[],h=new C,u=new C,m=new C;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const v=g/n*r,d=f/i*Math.PI*2;u.x=(t+e*Math.cos(d))*Math.cos(v),u.y=(t+e*Math.cos(d))*Math.sin(v),u.z=e*Math.sin(d),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),m.subVectors(u,h).normalize(),l.push(m.x,m.y,m.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const v=(n+1)*f+g-1,d=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,M=(n+1)*f+g;a.push(v,d,M),a.push(d,p,M)}this.setIndex(a),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ts extends fe{constructor(t=new oc(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,l=new C,c=new vt;let h=new C;const u=[],m=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(m,3)),this.setAttribute("uv",new jt(f,2));function v(){for(let _=0;_<e;_++)d(_);d(r===!1?e:0),M(),p()}function d(_){h=t.getPointAt(_/e,h);const b=a.normals[_],P=a.binormals[_];for(let A=0;A<=n;A++){const E=A/n*Math.PI*2,R=Math.sin(E),N=-Math.cos(E);l.x=N*b.x+R*P.x,l.y=N*b.y+R*P.y,l.z=N*b.z+R*P.z,l.normalize(),m.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=e;_++)for(let b=1;b<=n;b++){const P=(n+1)*(_-1)+(b-1),A=(n+1)*_+(b-1),E=(n+1)*_+b,R=(n+1)*(_-1)+b;g.push(P,A,R),g.push(A,E,R)}}function M(){for(let _=0;_<=e;_++)for(let b=0;b<=n;b++)c.x=_/e,c.y=b/n,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ts(new Jm[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ve extends nn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fl,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $m extends In{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class ro extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Qr=new le,_l=new C,yl=new C;class lc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;_l.setFromMatrixPosition(t.matrixWorld),e.position.copy(_l),yl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yl),e.updateMatrixWorld(),Qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ml=new le,Kn=new C,ta=new C;class jm extends lc{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Kn.setFromMatrixPosition(t.matrixWorld),i.position.copy(Kn),ta.copy(i.position),ta.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ta),i.updateMatrixWorld(),n.makeTranslation(-Kn.x,-Kn.y,-Kn.z),Ml.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml)}}class fr extends ro{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new jm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Zm extends lc{constructor(){super(new jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qm extends ro{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Zm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class t0 extends ro{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);const z={TIME_STEP:1/60,MAX_DELTA:.1,PALETTE:{inkDark:"#141413",inkMid:"#5c5b57",inkLight:"#a8a59c",parchment:"#eae5d9",rimHighlight:"#f5f1e6",vermilion:"#b8292f",goldAccent:"#ffd43b",darkSky:"#171e2e",sentryBlue:"#4dabf7"},CAMERA:{fov:38,distanceZ:22,tiltDeg:7,horizontalDeadzone:2,lookAhead:2.5,followSpeedX:4.5,followSpeedY:3.5,shakeDecay:8},PLAYER:{width:.8,height:1.8,runSpeed:9,groundAccel:70,groundDecel:60,airAccel:70*.65,jumpVelocity:16,gravityRising:-42,gravityFalling:-62,maxFallSpeed:-28,jumpCutMultiplier:.45,coyoteTime:.12,jumpBuffer:.12,apexHangVelocity:2,apexGravityScale:.5,ledgeHandOffset:{x:.45,y:.8},ledgeHangOffset:{x:.4,y:.6},ledgeClimbDuration:.3,ledgeCooldown:.25,wallRunDuration:.45,wallRunSpeed:10,wallSlideSpeed:-4,wallJumpImpulse:{x:11,y:15},dashSpeed:30,dashDuration:.16,dashInvincibility:.12,dashSpeedDecay:.35,dashCooldown:.6,afterimageInterval:.03,afterimageLifetime:.25},COMBAT:{maxHealth:5,hurtInvincibility:.8,hurtKnockback:{x:7,y:6},hitStopMsNormal:40,hitStopMsHeavy:80,hitStopMsParry:60,parryPerfectWindow:.15,parryGuardWindow:.35,parryCooldown:.5,riposteMultiplier:2,backstabTimeScale:.2,backstabSlowMoDuration:.15,combo:[{windup:.08,active:.1,recovery:.18,damage:1,lunge:3,reach:1.6},{windup:.08,active:.1,recovery:.18,damage:1,lunge:3.5,reach:1.7},{windup:.1,active:.12,recovery:.24,damage:2,lunge:5,reach:2}],airAttack:{windup:.06,active:.12,recovery:.16,damage:1,reach:1.6}},ENEMIES:{ashigaru:{width:1,height:2,hp:3,patrolSpeed:2,patrolPause:1.5,visionRange:7,visionAngleDeg:25,attackTelegraph:.6,attackDuration:.25,attackRecovery:1,attackReach:4,attackDamage:1,staggerDuration:1.2},tengu:{width:1.2,height:1.4,hp:2,bobFrequency:1.8,bobAmplitude:.6,swoopTelegraph:.5,swoopSpeed:18,swoopDamage:1,swoopCooldown:2.5}},BOSS:{name:"Kurogane, the Gatekeeper",width:2.2,height:4.8,hpMax:40,weakPointMultiplier:2,staggerDuration:2,sweepSpeed:14,slamEmbedDuration:1.6,puddleLifetime:4,chargeSpeed:16},LEVEL:{pitY:-15,crumbleDelay:.6,crumbleRespawn:3,bambooSpringFreq:6,bambooDamping:.85,bambooLaunchBoost:1.5,lanternSwingDamping:.99},AUDIO:{masterVolume:.8,sfxVolume:.85,musicVolume:.65,pentatonicNotes:[164.81,174.61,220,246.94,261.63]}};class e0{constructor({onFixedUpdate:t,onRender:e,onInputUpdate:i}){this.onFixedUpdate=t,this.onRender=e,this.onInputUpdate=i,this.timeStep=z.TIME_STEP,this.maxDelta=z.MAX_DELTA,this.accumulator=0,this.lastTime=performance.now(),this.running=!1,this.paused=!1,this.hitStopRemaining=0,this.timeScale=1,this._rafId=null,this._tick=this.tick.bind(this)}start(){this.running||(this.running=!0,this.lastTime=performance.now(),this.accumulator=0,this._rafId=requestAnimationFrame(this._tick))}stop(){this.running=!1,this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null)}pause(){this.paused=!0}resume(){this.paused=!1,this.lastTime=performance.now()}triggerHitStop(t){this.hitStopRemaining=Math.max(this.hitStopRemaining,t/1e3)}setTimeScale(t){this.timeScale=Math.max(0,t)}tick(t){if(!this.running)return;let e=(t-this.lastTime)/1e3;if(this.lastTime=t,e>this.maxDelta&&(e=this.maxDelta),!this.paused){if(this.hitStopRemaining>0){this.hitStopRemaining-=e,this.onRender&&this.onRender(0),this._rafId=requestAnimationFrame(this._tick);return}const i=e*this.timeScale;this.accumulator+=i,this.onInputUpdate&&this.onInputUpdate(e);let n=0;const r=8;for(;this.accumulator>=this.timeStep&&n<r;)this.onFixedUpdate&&this.onFixedUpdate(this.timeStep),this.accumulator-=this.timeStep,n++;this.accumulator>=this.timeStep&&(this.accumulator=0);const a=this.accumulator/this.timeStep;this.onRender&&this.onRender(a)}this._rafId=requestAnimationFrame(this._tick)}}class i0{constructor(){this.keysDown=new Set,this.keysPressedThisStep=new Set,this.keysReleasedThisStep=new Set,this.jumpBufferTimer=0,this.attackBufferTimer=0,this.dashBufferTimer=0,this.parryBufferTimer=0,this.axisX=0,this.axisY=0,this.mouseButtonsDown=new Set,this._onKeyDown=this.onKeyDown.bind(this),this._onKeyUp=this.onKeyUp.bind(this),this._onMouseDown=this.onMouseDown.bind(this),this._onMouseUp=this.onMouseUp.bind(this),this._onContextMenu=t=>t.preventDefault(),this._onBlur=this.onBlur.bind(this),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),window.addEventListener("mousedown",this._onMouseDown),window.addEventListener("mouseup",this._onMouseUp),window.addEventListener("contextmenu",this._onContextMenu),window.addEventListener("blur",this._onBlur)}onKeyDown(t){if(t.repeat)return;const e=t.code;this.keysDown.add(e),this.keysPressedThisStep.add(e),e==="Space"&&(this.jumpBufferTimer=z.PLAYER.jumpBuffer),e==="KeyJ"&&(this.attackBufferTimer=.12),(e==="ShiftLeft"||e==="ShiftRight"||e==="KeyK")&&(this.dashBufferTimer=.12),e==="KeyL"&&(this.parryBufferTimer=.12)}onKeyUp(t){const e=t.code;this.keysDown.delete(e),this.keysReleasedThisStep.add(e)}onMouseDown(t){this.mouseButtonsDown.add(t.button),t.button===0?this.attackBufferTimer=.12:t.button===2&&(this.parryBufferTimer=.12)}onMouseUp(t){this.mouseButtonsDown.delete(t.button)}onBlur(){this.keysDown.clear(),this.keysPressedThisStep.clear(),this.keysReleasedThisStep.clear(),this.mouseButtonsDown.clear(),this.jumpBufferTimer=0,this.attackBufferTimer=0,this.dashBufferTimer=0,this.parryBufferTimer=0,this.axisX=0,this.axisY=0}update(t){this.jumpBufferTimer>0&&(this.jumpBufferTimer-=t),this.attackBufferTimer>0&&(this.attackBufferTimer-=t),this.dashBufferTimer>0&&(this.dashBufferTimer-=t),this.parryBufferTimer>0&&(this.parryBufferTimer-=t);let e=0,i=0;(this.isHeld("KeyD")||this.isHeld("ArrowRight"))&&(e+=1),(this.isHeld("KeyA")||this.isHeld("ArrowLeft"))&&(e-=1),(this.isHeld("KeyW")||this.isHeld("ArrowUp"))&&(i+=1),(this.isHeld("KeyS")||this.isHeld("ArrowDown"))&&(i-=1);const n=this.getGamepad();if(n){const r=n.axes[0]??0,a=-(n.axes[1]??0),o=.25;Math.abs(r)>o&&(e=r>0?1:-1),Math.abs(a)>o&&(i=a>0?1:-1),n.buttons[15]?.pressed&&(e=1),n.buttons[14]?.pressed&&(e=-1),n.buttons[12]?.pressed&&(i=1),n.buttons[13]?.pressed&&(i=-1),n.buttons[0]?.pressed&&(this.jumpBufferTimer=z.PLAYER.jumpBuffer),n.buttons[2]?.pressed&&(this.attackBufferTimer=.12),(n.buttons[5]?.pressed||n.buttons[7]?.pressed)&&(this.dashBufferTimer=.12),(n.buttons[4]?.pressed||n.buttons[3]?.pressed)&&(this.parryBufferTimer=.12)}this.axisX=e,this.axisY=i}postStep(){this.keysPressedThisStep.clear(),this.keysReleasedThisStep.clear()}getGamepad(){if(typeof navigator<"u"&&navigator.getGamepads){const t=navigator.getGamepads();for(let e=0;e<t.length;e++)if(t[e]&&t[e].connected)return t[e]}return null}isHeld(t){return this.keysDown.has(t)}isPressed(t){return this.keysPressedThisStep.has(t)}isReleased(t){return this.keysReleasedThisStep.has(t)}get jumpBuffered(){return this.jumpBufferTimer>0}consumeJump(){this.jumpBufferTimer=0}get jumpHeld(){const t=this.getGamepad();return this.isHeld("Space")||t&&t.buttons[0]?.pressed}get jumpReleased(){return this.isReleased("Space")}get attackBuffered(){return this.attackBufferTimer>0}consumeAttack(){this.attackBufferTimer=0}get dashBuffered(){return this.dashBufferTimer>0}consumeDash(){this.dashBufferTimer=0}get parryBuffered(){return this.parryBufferTimer>0}consumeParry(){this.parryBufferTimer=0}get pausePressed(){const t=this.getGamepad();return this.isPressed("Escape")||t&&t.buttons[9]?.pressed}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("mousedown",this._onMouseDown),window.removeEventListener("mouseup",this._onMouseUp),window.removeEventListener("contextmenu",this._onContextMenu),window.removeEventListener("blur",this._onBlur)}}class Re{constructor(t=0,e=0,i=1,n=1){this.x=t,this.y=e,this.width=i,this.height=n}get halfWidth(){return this.width*.5}get halfHeight(){return this.height*.5}get minX(){return this.x-this.halfWidth}get maxX(){return this.x+this.halfWidth}get minY(){return this.y-this.halfHeight}get maxY(){return this.y+this.halfHeight}overlaps(t){return this.minX<t.maxX&&this.maxX>t.minX&&this.minY<t.maxY&&this.maxY>t.minY}contains(t,e){return t>=this.minX&&t<=this.maxX&&e>=this.minY&&e<=this.maxY}}class n0{constructor(){this.solids=[],this.oneWays=[],this.triggers=[]}addSolid(t,e={}){const i={aabb:t,type:e.type||"solid",runnable:e.runnable??!1,crumbling:e.crumbling??!1,crumbleTimer:0,crumbleState:"idle",respawnTimer:0,entity:e.entity||null,id:e.id||Math.random().toString(36).substring(2)};return this.solids.push(i),i}addOneWay(t,e={}){const i={aabb:t,type:"oneWay",entity:e.entity||null};return this.oneWays.push(i),i}addTrigger(t,e,i={}){const n={aabb:t,type:i.type||"trigger",onEnter:e,active:!0,tag:i.tag||"",entity:i.entity||null};return this.triggers.push(n),n}clear(){this.solids.length=0,this.oneWays.length=0,this.triggers.length=0}update(t){for(let e=0;e<this.solids.length;e++){const i=this.solids[e];i.crumbling&&(i.crumbleState==="collapsing"?(i.crumbleTimer-=t,i.crumbleTimer<=0&&(i.crumbleState="collapsed",i.respawnTimer=3)):i.crumbleState==="collapsed"&&(i.respawnTimer-=t,i.respawnTimer<=0&&(i.crumbleState="idle")))}}moveAndSlide(t,e,i,n=!1){const a=t.minY,o={grounded:!1,ceiling:!1,wallLeft:!1,wallRight:!1,runnableWall:!1,groundSolid:null,hitHazard:!1},l=e.x*i;t.x+=l;for(let h=0;h<this.solids.length;h++){const u=this.solids[h];u.crumbleState!=="collapsed"&&t.overlaps(u.aabb)&&(e.x>0?(t.x=u.aabb.minX-t.halfWidth-.002,e.x=0,o.wallRight=!0,u.runnable&&(o.runnableWall=!0)):e.x<0&&(t.x=u.aabb.maxX+t.halfWidth+.002,e.x=0,o.wallLeft=!0,u.runnable&&(o.runnableWall=!0)))}const c=e.y*i;t.y+=c;for(let h=0;h<this.solids.length;h++){const u=this.solids[h];u.crumbleState!=="collapsed"&&t.overlaps(u.aabb)&&(e.y<=0?(t.y=u.aabb.maxY+t.halfHeight+.002,e.y=0,o.grounded=!0,o.groundSolid=u,u.crumbling&&u.crumbleState==="idle"&&(u.crumbleState="collapsing",u.crumbleTimer=.6)):e.y>0&&(t.y=u.aabb.minY-t.halfHeight-.002,e.y=0,o.ceiling=!0))}if(!n&&e.y<=0)for(let h=0;h<this.oneWays.length;h++){const u=this.oneWays[h];if(a>=u.aabb.maxY-.05&&t.minY<=u.aabb.maxY&&t.maxX>u.aabb.minX&&t.minX<u.aabb.maxX){t.y=u.aabb.maxY+t.halfHeight+.002,e.y=0,o.grounded=!0,o.groundSolid=u;break}}if(!o.grounded&&e.y<=0){const h=new Re(t.x,t.minY-.04,t.width*.9,.08);for(let u=0;u<this.solids.length;u++){const m=this.solids[u];if(m.crumbleState!=="collapsed"&&h.overlaps(m.aabb)){o.grounded=!0,o.groundSolid=m;break}}}return o}checkLedge(t,e){const i=t.x+e*(t.halfWidth+.15),n=t.maxY-.1;for(let r=0;r<this.solids.length;r++){const a=this.solids[r];if(a.crumbleState==="collapsed")continue;const o=e>0?a.aabb.minX:a.aabb.maxX,l=a.aabb.maxY;if((i-o)**2+(n-l)**2<.35*.35){const h=new Re(o+e*(t.halfWidth+.05),l+t.halfHeight+.1,t.width*.9,t.height);let u=!1;for(let m=0;m<this.solids.length;m++)if(m!==r&&h.overlaps(this.solids[m].aabb)){u=!0;break}if(!u)return{cornerX:o,cornerY:l,snapX:o-e*(t.halfWidth+.02),snapY:l-t.halfHeight+.25,climbTargetX:o+e*(t.halfWidth+.4),climbTargetY:l+t.halfHeight+.05}}}return null}checkTriggers(t,e=null){const i=[];for(let n=0;n<this.triggers.length;n++){const r=this.triggers[n];r.active&&r.aabb.overlaps(t)&&(i.push(r),r.onEnter&&r.onEnter(e||t,r))}return i}}class ci{constructor({owner:t,type:e,width:i,height:n,offsetX:r=0,offsetY:a=0,damage:o=1,isParry:l=!1}){this.owner=t,this.type=e,this.aabb=new Re(0,0,i,n),this.offsetX=r,this.offsetY=a,this.damage=o,this.isParry=l,this.active=!1,this.hitEntities=new Set}updatePosition(t,e,i=1){this.aabb.x=t+i*this.offsetX,this.aabb.y=e+this.offsetY}activate(){this.active=!0,this.hitEntities.clear()}deactivate(){this.active=!1,this.hitEntities.clear()}}class s0{constructor(){this.playerHurtboxes=[],this.playerAttacks=[],this.enemyHurtboxes=[],this.enemyAttacks=[]}registerPlayerHurtbox(t){this.playerHurtboxes.push(t)}registerPlayerAttack(t){this.playerAttacks.push(t)}registerEnemyHurtbox(t){this.enemyHurtboxes.push(t)}registerEnemyAttack(t){this.enemyAttacks.push(t)}unregisterEntity(t){this.playerHurtboxes=this.playerHurtboxes.filter(e=>e.owner!==t),this.playerAttacks=this.playerAttacks.filter(e=>e.owner!==t),this.enemyHurtboxes=this.enemyHurtboxes.filter(e=>e.owner!==t),this.enemyAttacks=this.enemyAttacks.filter(e=>e.owner!==t)}clear(){this.playerHurtboxes.length=0,this.playerAttacks.length=0,this.enemyHurtboxes.length=0,this.enemyAttacks.length=0}checkCollisions({onPlayerHitEnemy:t,onEnemyHitPlayer:e,onParrySuccess:i}){for(const n of this.playerAttacks)if(n.active)for(const r of this.enemyHurtboxes)r.active&&(n.hitEntities.has(r.owner)||n.aabb.overlaps(r.aabb)&&(n.hitEntities.add(r.owner),t&&t(n,r)));for(const n of this.enemyAttacks){if(!n.active)continue;const r=this.playerHurtboxes[0]?.owner;if(r&&r.isParrying){for(const a of this.playerHurtboxes)if(n.aabb.overlaps(a.aabb)&&i){const o=r.isPerfectParryWindow();i(n,r,o),n.active=!1;return}}for(const a of this.playerHurtboxes)a.active&&(n.hitEntities.has(a.owner)||n.aabb.overlaps(a.aabb)&&(n.hitEntities.add(a.owner),e&&e(n,a)))}}}const _e=new s0;class pr{constructor(t,e=""){this.owner=t,this.states=new Map,this.currentState=null,this.currentStateName="",this.previousStateName="",this.timeInState=0,e&&(this.initialName=e)}addState(t,e){return this.states.set(t,{enter:e.enter||(()=>{}),update:e.update||(()=>{}),fixedUpdate:e.fixedUpdate||(()=>{}),exit:e.exit||(()=>{})}),this}changeState(t,e=null){if(this.currentStateName!==t){if(!this.states.has(t)){console.warn(`StateMachine: state "${t}" not registered.`);return}this.currentState&&this.currentState.exit.call(this.owner),this.previousStateName=this.currentStateName,this.currentStateName=t,this.currentState=this.states.get(t),this.timeInState=0,this.currentState.enter.call(this.owner,e)}}update(t,...e){this.timeInState+=t,this.currentState&&this.currentState.update.call(this.owner,t,...e)}fixedUpdate(t,...e){this.currentState&&this.currentState.fixedUpdate.call(this.owner,t,...e)}isInState(t){return this.currentStateName===t}}class r0{constructor(){this.listeners=new Map}on(t,e){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(e),()=>this.off(t,e)}off(t,e){this.listeners.has(t)&&this.listeners.get(t).delete(e)}emit(t,e){if(this.listeners.has(t))for(const i of this.listeners.get(t))try{i(e)}catch(n){console.error(`Error in EventBus listener for "${t}":`,n)}}clear(){this.listeners.clear()}}const Tt=new r0;class a0{constructor(t,e,i){this.player=t,this.inkSplash=e,this.loop=i,this.comboIndex=0,this.comboWindowTimer=0,this.attackPhase=null,this.phaseTimer=0,this.isAirAttack=!1,this.isParrying=!1,this.parryTimer=0,this.parryCooldownTimer=0,this.slowMoTimer=0,this.hurtbox=new ci({owner:this.player,type:"player_hurtbox",width:z.PLAYER.width*.85,height:z.PLAYER.height*.95,offsetX:0,offsetY:0}),this.hurtbox.activate(),_e.registerPlayerHurtbox(this.hurtbox),this.attackHitbox=new ci({owner:this.player,type:"player_attack",width:1.6,height:1.4,offsetX:1,offsetY:0,damage:1}),_e.registerPlayerAttack(this.attackHitbox),this.player.isParrying=!1,this.player.isPerfectParryWindow=()=>this.isParrying&&this.parryTimer<=z.COMBAT.parryPerfectWindow}startAttack(t=!1){if(this.isAirAttack=t,t){const e=z.COMBAT.airAttack;this.attackPhase="windup",this.phaseTimer=e.windup,this.attackHitbox.damage=e.damage,this.attackHitbox.aabb.width=e.reach,this.attackHitbox.offsetX=e.reach*.55,this.player.velocity.y<0&&(this.player.velocity.y=Math.max(this.player.velocity.y*.2,-2))}else{this.comboWindowTimer>0||this.attackPhase==="recovery"?this.comboIndex=(this.comboIndex+1)%z.COMBAT.combo.length:this.comboIndex=0;const e=z.COMBAT.combo[this.comboIndex];this.attackPhase="windup",this.phaseTimer=e.windup,this.attackHitbox.damage=e.damage,this.attackHitbox.aabb.width=e.reach,this.attackHitbox.offsetX=e.reach*.55,this.player.velocity.x+=this.player.facing*e.lunge}this.attackHitbox.deactivate()}updateAttack(t){if(this.attackPhase&&(this.phaseTimer-=t,this.phaseTimer<=0))if(this.attackPhase==="windup"){this.attackPhase="active";const e=this.isAirAttack?z.COMBAT.airAttack:z.COMBAT.combo[this.comboIndex];this.phaseTimer=e.active,this.attackHitbox.activate(),this.inkSplash&&this.inkSplash.spawnSlashArc(this.player.aabb.x,this.player.aabb.y,this.player.facing,this.comboIndex,this.isAirAttack),Tt.emit("player_attack_swing",{comboIndex:this.comboIndex,isAir:this.isAirAttack})}else if(this.attackPhase==="active"){this.attackPhase="recovery";const e=this.isAirAttack?z.COMBAT.airAttack:z.COMBAT.combo[this.comboIndex];this.phaseTimer=e.recovery,this.attackHitbox.deactivate()}else this.attackPhase==="recovery"&&(this.attackPhase=null,this.attackHitbox.deactivate(),this.isAirAttack||(this.comboWindowTimer=.35),this.player.coyoteTimer>0?this.player.fsm.changeState(this.player.input.axisX!==0?"Run":"Idle"):this.player.fsm.changeState("Fall"))}startParry(){this.isParrying=!0,this.player.isParrying=!0,this.parryTimer=0,this.parryCooldownTimer=z.COMBAT.parryCooldown}updateParry(t){this.isParrying&&(this.parryTimer+=t,this.parryTimer>=z.COMBAT.parryGuardWindow&&(this.endParry(),this.player.coyoteTimer>0?this.player.fsm.changeState(this.player.input.axisX!==0?"Run":"Idle"):this.player.fsm.changeState("Fall")))}endParry(){this.isParrying=!1,this.player.isParrying=!1}onParrySuccess(t,e){if(e){const i=t.owner;i&&i.stagger&&i.stagger(z.ENEMIES.ashigaru.staggerDuration),this.inkSplash&&this.inkSplash.spawnParryBurst(this.player.aabb.x+this.player.facing*.8,this.player.aabb.y,!0),this.loop&&this.loop.triggerHitStop(z.COMBAT.hitStopMsParry),Tt.emit("camera_shake",{amount:.35}),Tt.emit("parry_perfect",{enemy:i}),this.endParry(),this.player.fsm.changeState("Idle")}else this.inkSplash&&this.inkSplash.spawnParryBurst(this.player.aabb.x+this.player.facing*.6,this.player.aabb.y,!1),this.loop&&this.loop.triggerHitStop(z.COMBAT.hitStopMsNormal),Tt.emit("camera_shake",{amount:.15}),this.player.velocity.x=-this.player.facing*3.5}onHitEnemy(t){const e=t.owner;if(!e||e.isDead)return;if((e.isUnaware||e.isStaggered)&&this.player.facing===e.facing){e.takeDamage(999,!0,this.player.aabb.x),this.loop&&(this.loop.setTimeScale(z.COMBAT.backstabTimeScale),this.slowMoTimer=z.COMBAT.backstabSlowMoDuration,this.loop.triggerHitStop(120)),this.inkSplash&&this.inkSplash.spawnBackstabBurst(e.aabb.x,e.aabb.y),Tt.emit("camera_shake",{amount:.45}),Tt.emit("backstab_kill",{enemy:e});return}const n=this.comboIndex===2&&!this.isAirAttack,r=n?2:1,a=n?z.COMBAT.hitStopMsHeavy:z.COMBAT.hitStopMsNormal,o=e.isStaggered?r*z.COMBAT.riposteMultiplier:r;e.takeDamage(o,!1,this.player.aabb.x),!this.player.wasGroundedLastFrame&&e.isAirborne&&(this.player.hasAirDash=!0,Tt.emit("air_dash_refreshed")),this.inkSplash&&this.inkSplash.spawnHitImpact(e.aabb.x,e.aabb.y,this.player.facing,n?18:8,n),this.loop&&this.loop.triggerHitStop(a),Tt.emit("camera_shake",{amount:n?.25:.12})}takeDamage(t=1,e=0){if(this.player.invincibilityTimer>0||this.player.fsm.currentStateName==="Dead")return;this.player.health=Math.max(0,this.player.health-t),this.player.invincibilityTimer=z.COMBAT.hurtInvincibility;const i=this.player.aabb.x>=e?1:-1;this.player.velocity.x=i*z.COMBAT.hurtKnockback.x,this.player.velocity.y=z.COMBAT.hurtKnockback.y,this.inkSplash&&this.inkSplash.spawnHitImpact(this.player.aabb.x,this.player.aabb.y,-i,12,!0,!0),this.loop&&this.loop.triggerHitStop(z.COMBAT.hitStopMsHeavy),Tt.emit("camera_shake",{amount:.35}),Tt.emit("player_damaged",{health:this.player.health}),this.player.health<=0?this.player.fsm.changeState("Dead"):this.player.fsm.changeState("Hurt")}fixedUpdate(t){this.comboWindowTimer>0&&(this.comboWindowTimer-=t,this.comboWindowTimer<=0&&(this.comboIndex=0)),this.parryCooldownTimer>0&&(this.parryCooldownTimer-=t),this.slowMoTimer>0&&(this.slowMoTimer-=t,this.slowMoTimer<=0&&this.loop&&this.loop.setTimeScale(1)),this.attackPhase&&this.updateAttack(t),this.isParrying&&this.updateParry(t),this.hurtbox.updatePosition(this.player.aabb.x,this.player.aabb.y,this.player.facing),this.attackHitbox.updatePosition(this.player.aabb.x,this.player.aabb.y,this.player.facing)}}const o0=`
  varying vec3 vNormal;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;
  varying vec3 vLocalPosition;
  varying vec2 vUv;
  varying vec3 vViewPosition;

  void main() {
    vUv = uv;
    vLocalPosition = position;
    vNormal = normalize(normalMatrix * normal);
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`,l0=`
  uniform vec3 uInkDark;
  uniform vec3 uInkMid;
  uniform vec3 uInkLight;
  uniform vec3 uParchment;
  uniform vec3 uRimHighlight;
  uniform vec3 uVermilion;
  uniform vec3 uLightDirection;
  uniform float uHasRedSeal;
  uniform float uSealPulse;
  uniform float uNoiseScale;
  uniform float uFogDensity;
  uniform vec3 uFogColor;
  uniform float uInkContourStrength;
  uniform float uDarkBias;

  varying vec3 vNormal;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;
  varying vec3 vLocalPosition;
  varying vec2 vUv;
  varying vec3 vViewPosition;

  // Smooth gradient value noise for natural paper & brush wash (no blocky artifacts)
  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0); // Quintic C2 continuous interpolation
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float amp = 0.5;
    mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
    for (int i = 0; i < 4; i++) {
      v += amp * noise(p);
      p = rot * p * 2.05;
      amp *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 worldNormal = normalize(vWorldNormal);
    vec3 lightDir = normalize(uLightDirection);
    vec3 viewDir = normalize(vViewPosition);

    // Realistic half-Lambert diffuse lighting + sky-ground hemisphere ambient occlusion
    float NdotL = dot(worldNormal, lightDir);
    float halfLambert = clamp(NdotL * 0.5 + 0.5, 0.0, 1.0);
    float hemiAO = clamp(worldNormal.y * 0.35 + 0.65, 0.25, 1.0);
    float baseLight = clamp(halfLambert * hemiAO * 1.15 - uDarkBias * 0.4, 0.0, 1.0);

    // Fine directional brush & stone strata texture (subtle, realistic, non-blotchy)
    vec2 strataCoord = vec2(vWorldPosition.x * 0.45, vWorldPosition.y * 1.8) * uNoiseScale;
    float washVariation = (fbm(strataCoord) - 0.5) * 0.14;
    float paperGrain = (noise(vWorldPosition.xy * 18.0) - 0.5) * 0.045;
    float lit = clamp(baseLight + washVariation + paperGrain, 0.0, 1.0);

    // Painterly Sumi-e Continuous Multi-Tone Wash with soft wet-ink transitions
    vec3 tone;
    if (lit < 0.32) {
      tone = mix(uInkDark, uInkMid, smoothstep(0.08, 0.32, lit));
    } else if (lit < 0.66) {
      tone = mix(uInkMid, uInkLight, smoothstep(0.32, 0.66, lit));
    } else {
      tone = mix(uInkLight, uParchment, smoothstep(0.66, 0.96, lit));
    }

    // Subtle specular sheen on upper edges (moonlight / sunlight graze)
    vec3 halfVec = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normal, halfVec), 0.0), 24.0) * 0.18;
    tone = mix(tone, uRimHighlight, spec * (1.0 - uDarkBias));

    // Fine Calligraphic Ink Edge Contour (Fresnel silhouette darkening)
    float NdotV = abs(dot(normal, viewDir));
    float brushWobble = (fbm(vWorldPosition.xy * 3.0) - 0.5) * 0.08;
    float inkEdge = 1.0 - smoothstep(0.12, 0.32 + brushWobble, NdotV);
    vec3 finalColor = mix(tone, uInkDark, inkEdge * uInkContourStrength * 0.85);

    // Top-ledge paper highlight
    if (worldNormal.y > 0.75) {
      float topLight = smoothstep(0.75, 0.98, worldNormal.y) * 0.25;
      finalColor = mix(finalColor, uRimHighlight, topLight * (1.0 - uDarkBias));
    }

    // Vermilion Seal Accent
    if (uHasRedSeal > 0.5) {
      float pulse = 0.84 + 0.16 * sin(uSealPulse);
      finalColor = mix(finalColor, uVermilion * pulse, 0.88);
    }

    // Atmospheric Depth Mist
    float zDist = max(0.0, length(vViewPosition) - 28.0);
    float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * zDist * zDist);
    finalColor = mix(finalColor, uFogColor, clamp(fogFactor, 0.0, 0.65));

    gl_FragColor = vec4(finalColor, 1.0);
  }
`,c0=`
  uniform float uOutlineThickness;
  varying vec3 vWorldPos;

  void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPos.xyz;
    float pressure = 0.8 + 0.35 * sin(worldPos.x * 2.9 + worldPos.y * 4.1);
    vec3 extruded = position + normalize(normal) * (uOutlineThickness * pressure);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(extruded, 1.0);
  }
`,h0=`
  uniform vec3 uOutlineColor;
  void main() {
    gl_FragColor = vec4(uOutlineColor, 1.0);
  }
`;function ri(s={}){const e={...{inkDark:z.PALETTE.inkDark,inkMid:z.PALETTE.inkMid,inkLight:z.PALETTE.inkLight,parchment:z.PALETTE.parchment,rimHighlight:z.PALETTE.rimHighlight,vermilion:z.PALETTE.vermilion,lightDirection:new C(.45,.82,.62).normalize(),hasRedSeal:0,noiseScale:1.8,fogDensity:.004,fogColor:new nt(z.PALETTE.parchment),inkContourStrength:.75,darkBias:0},...s};return new oi({vertexShader:o0,fragmentShader:l0,uniforms:{uInkDark:{value:new nt(e.inkDark)},uInkMid:{value:new nt(e.inkMid)},uInkLight:{value:new nt(e.inkLight)},uParchment:{value:new nt(e.parchment)},uRimHighlight:{value:new nt(e.rimHighlight)},uVermilion:{value:new nt(e.vermilion)},uLightDirection:{value:e.lightDirection},uHasRedSeal:{value:e.hasRedSeal},uSealPulse:{value:0},uNoiseScale:{value:e.noiseScale},uFogDensity:{value:e.fogDensity},uFogColor:{value:e.fogColor},uInkContourStrength:{value:e.inkContourStrength},uDarkBias:{value:e.darkBias}}})}function u0(s=.024,t=1315859){return new oi({vertexShader:c0,fragmentShader:h0,side:De,uniforms:{uOutlineThickness:{value:s},uOutlineColor:{value:new nt(t)}}})}function xt(s,t=.024,e=1315859){if(!s||!s.geometry)return s;const i=u0(t*.65,e),n=new q(s.geometry,i);return n.name="ink_outline",s.add(n),s}class d0{constructor(){this.root=new Nt,this.bodyRoot=new Nt,this.bodyRoot.position.y=-1.8*.5,this.root.add(this.bodyRoot);const t=ri({inkDark:1184273,inkMid:2894632,inkLight:5591885,noiseScale:5.5,darkBias:.22}),e=ri({inkDark:1841945,inkMid:4736577,inkLight:8223346,noiseScale:5,darkBias:.08}),i=ri({inkDark:1118480,inkMid:3354925,inkLight:7039072,noiseScale:7,darkBias:.15});this.torsoGroup=new Nt,this.torsoGroup.position.set(0,.96,0),this.bodyRoot.add(this.torsoGroup);const n=new zt(.24,.2,.62,10),r=new q(n,e);r.castShadow=!0,xt(r,.032),this.torsoGroup.add(r);const a=new zt(.27,.34,.28,12),o=new q(a,t);o.position.y=.22,xt(o,.035),this.torsoGroup.add(o);const l=new zt(.22,.23,.15,10),c=new q(l,t);c.position.y=-.24,xt(c,.028),this.torsoGroup.add(c),this.headGroup=new Nt,this.headGroup.position.set(.03,.46,0),this.torsoGroup.add(this.headGroup);const h=new yi(.21,12,10),u=new q(h,t);xt(u,.028),this.headGroup.add(u);const m=new Jt(.08,.035,.24),f=new $t({color:16118246}),g=new q(m,f);g.position.set(.16,.03,0),this.headGroup.add(g);const v=this.generateKasaTexture(),d=v?new ve({map:v,roughness:.85,metalness:.05,bumpMap:v,bumpScale:.02}):e,p=new ke(.88,.3,24);this.hat=new q(p,d),this.hat.position.set(.02,.19,0),this.hat.rotation.z=-.06,this.hat.castShadow=!0,xt(this.hat,.036),this.headGroup.add(this.hat);const M=new dr(.88,.024,6,24);M.rotateX(Math.PI/2);const _=new $t({color:1315859}),b=new q(M,_);b.position.y=-.14,this.hat.add(b),this.leftArm=this.buildArm(e,i),this.leftArm.position.set(0,.22,-.25),this.torsoGroup.add(this.leftArm),this.rightArm=this.buildArm(e,i),this.rightArm.position.set(0,.22,.25),this.torsoGroup.add(this.rightArm),this.leftLeg=this.buildLeg(e,i,t),this.leftLeg.position.set(0,.72,-.13),this.bodyRoot.add(this.leftLeg),this.rightLeg=this.buildLeg(e,i,t),this.rightLeg.position.set(0,.72,.13),this.bodyRoot.add(this.rightLeg),this.sayaGroup=new Nt,this.sayaGroup.position.set(-.05,-.2,.24),this.sayaGroup.rotation.z=.48,this.torsoGroup.add(this.sayaGroup);const P=new zt(.032,.026,1.15,8);P.rotateZ(Math.PI/2);const A=new q(P,t);A.position.x=-.35,xt(A,.022),this.sayaGroup.add(A);const E=new zt(.08,.08,.025,10);E.rotateZ(Math.PI/2);const R=new q(E,i);R.position.x=.22,this.sayaGroup.add(R);const N=new zt(.03,.028,.34,8);N.rotateZ(Math.PI/2),this.sheathedHilt=new q(N,e),this.sheathedHilt.position.x=.4,xt(this.sheathedHilt,.02),this.sayaGroup.add(this.sheathedHilt),this.drawnSword=new Nt,this.drawnSword.position.set(.08,-.26,0);const x=new Jt(1.35,.055,.02),S=new $t({color:16118246}),k=new q(x,S);k.position.x=.72,xt(k,.028,1315859),this.drawnSword.add(k);const F=new q(N,t);this.drawnSword.add(F),this.drawnSword.visible=!1,this.rightArm.userData.forearm.add(this.drawnSword),this.cloakNodeCount=12,this.cloakSpacing=.17,this.cloakNodes=[];for(let W=0;W<this.cloakNodeCount;W++)this.cloakNodes.push({x:-W*this.cloakSpacing,y:1.25-W*.03,prevX:-W*this.cloakSpacing,prevY:1.25-W*.03});const V=new fe,K=new Float32Array(this.cloakNodeCount*2*3),H=new Float32Array(this.cloakNodeCount*2*2),j=[];for(let W=0;W<this.cloakNodeCount;W++){const tt=W/(this.cloakNodeCount-1);if(H[W*4+0]=tt,H[W*4+1]=0,H[W*4+2]=tt,H[W*4+3]=1,W<this.cloakNodeCount-1){const gt=W*2,ht=W*2+1,Lt=(W+1)*2,Ct=(W+1)*2+1;j.push(gt,ht,Lt,ht,Ct,Lt)}}V.setAttribute("position",new Ce(K,3)),V.setAttribute("uv",new Ce(H,2)),V.setIndex(j);const Y=this.generateCloakBrushTexture(),ct=new $t({map:Y,color:1447444,side:de,transparent:!0,opacity:.96,depthWrite:!1});this.cloakMesh=new q(V,ct),this.bodyRoot.add(this.cloakMesh);const at=new fe,yt=new Float32Array(this.cloakNodeCount*2*3);at.setAttribute("position",new Ce(yt,3)),at.setAttribute("uv",new Ce(H,2)),at.setIndex(j),this.sashMesh=new q(at,ct),this.bodyRoot.add(this.sashMesh),this.inkMotes=[];const Vt=new Un(.04,6),Zt=new $t({color:1315859,side:de});for(let W=0;W<8;W++){const tt=new q(Vt,Zt);this.bodyRoot.add(tt),this.inkMotes.push({mesh:tt,phase:W*.85,radius:.12+W%3*.08})}}buildArm(t,e){const i=new Nt,n=new zt(.085,.075,.28,8),r=new q(n,t);r.position.y=-.12,xt(r,.024),i.add(r);const a=new Nt;a.position.set(0,-.25,0),i.add(a);const o=new zt(.072,.055,.28,8),l=new q(o,e);l.position.y=-.12,xt(l,.024),a.add(l);const c=new yi(.058,8,8),h=new q(c,e);return h.position.y=-.27,a.add(h),i.userData.forearm=a,i}buildLeg(t,e,i){const n=new Nt,r=new zt(.14,.19,.38,8),a=new q(r,t);a.position.y=-.17,xt(a,.028),n.add(a);const o=new Nt;o.position.set(0,-.35,0),n.add(o);const l=new zt(.085,.062,.32,8),c=new q(l,e);c.position.y=-.15,xt(c,.024),o.add(c);const h=new Jt(.26,.1,.14),u=new q(h,i);return u.position.set(.05,-.32,0),xt(u,.024),o.add(u),n.userData.knee=o,n}generateKasaTexture(){if(typeof document>"u")return null;const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#2a2621"),i.addColorStop(.35,"#787163"),i.addColorStop(.85,"#b0a795"),i.addColorStop(1,"#1c1a17"),e.fillStyle=i,e.fillRect(0,0,512,512),e.strokeStyle="#1a1815",e.lineWidth=3;for(let n=0;n<512;n+=16)e.beginPath(),e.moveTo(n,0),e.lineTo(n,512),e.stroke();e.lineWidth=4;for(let n=40;n<512;n+=52)e.beginPath(),e.moveTo(0,n),e.lineTo(512,n),e.stroke();return new ir(t)}generateCloakBrushTexture(){if(typeof document>"u")return null;const t=document.createElement("canvas");t.width=512,t.height=256;const e=t.getContext("2d");e.clearRect(0,0,512,256);for(let i=8;i<248;i+=6){const n=360+Math.sin(i*.27)*90+Math.cos(i*.73)*55,r=e.createLinearGradient(0,i,n,i);r.addColorStop(0,"rgba(18, 18, 17, 1.0)"),r.addColorStop(.65,"rgba(28, 27, 25, 0.94)"),r.addColorStop(.88,"rgba(45, 43, 40, 0.55)"),r.addColorStop(1,"rgba(20, 20, 19, 0.0)"),e.strokeStyle=r,e.lineWidth=7+i%5,e.lineCap="round",e.beginPath(),e.moveTo(0,i),e.lineTo(n,i+Math.sin(i)*8),e.stroke()}return new ir(t)}update(t,e){const i=e.velocity.x,n=e.velocity.y,r=Math.abs(i),a=e.fsm.currentStateName,o=performance.now()*.001;if(a==="Run"){const f=o*14;this.torsoGroup.rotation.z=-.24,this.torsoGroup.position.y=.94+Math.abs(Math.sin(f))*.07,this.headGroup.rotation.z=.14;const g=Math.sin(f)*.85;this.rightLeg.rotation.z=g,this.rightLeg.userData.knee.rotation.z=Math.min(0,-Math.cos(f)*.75-.25),this.leftLeg.rotation.z=-g,this.leftLeg.userData.knee.rotation.z=Math.min(0,Math.cos(f)*.75-.25),this.rightArm.rotation.z=-g*.75,this.rightArm.userData.forearm.rotation.z=.55,this.leftArm.rotation.z=g*.75,this.leftArm.userData.forearm.rotation.z=.55}else if(a==="JumpRise"||a==="Fall"||a==="WallRun")this.torsoGroup.rotation.z=-.28,this.torsoGroup.position.y=.98,this.headGroup.rotation.z=.18,this.rightLeg.rotation.z=.95,this.rightLeg.userData.knee.rotation.z=-1.15,this.leftLeg.rotation.z=-.68,this.leftLeg.userData.knee.rotation.z=-.35,this.rightArm.rotation.z=-.65,this.rightArm.userData.forearm.rotation.z=.4,this.leftArm.rotation.z=-.95,this.leftArm.userData.forearm.rotation.z=.25;else if(a==="LedgeHang"||a==="LedgeClimb")this.torsoGroup.rotation.z=-.05,this.rightArm.rotation.z=2.4,this.leftArm.rotation.z=2.2,this.rightLeg.rotation.z=.2,this.leftLeg.rotation.z=-.15;else{const f=Math.sin(o*2.6)*.025;this.torsoGroup.rotation.z=-.08,this.torsoGroup.position.y=.95+f,this.headGroup.rotation.z=.05,this.rightLeg.rotation.z=.22,this.rightLeg.userData.knee.rotation.z=-.18,this.leftLeg.rotation.z=-.22,this.leftLeg.userData.knee.rotation.z=-.12,this.rightArm.rotation.z=.25,this.rightArm.userData.forearm.rotation.z=.45,this.leftArm.rotation.z=-.18,this.leftArm.userData.forearm.rotation.z=.35}const l=a==="Attack"||a==="AirAttack"||a==="Parry";if(this.drawnSword.visible=l,this.sheathedHilt.visible=!l,a==="Attack"||a==="AirAttack"){const f=e.combat?e.combat.comboIndex:0,g=[1.45,-.55,1.95];this.rightArm.rotation.z=g[f%3],this.rightArm.userData.forearm.rotation.z=.25,this.torsoGroup.rotation.z=-.35}else a==="Parry"&&(this.rightArm.rotation.z=1.15,this.rightArm.userData.forearm.rotation.z=.85);this.cloakNodes[0].x=-.12,this.cloakNodes[0].y=1.24,this.cloakNodes[0].prevX=-.12,this.cloakNodes[0].prevY=1.24;const c=-(4.8+r*.65),h=o*7.5;for(let f=1;f<this.cloakNodeCount;f++){const g=this.cloakNodes[f],v=(g.x-g.prevX)*.88,d=(g.y-g.prevY)*.88;g.prevX=g.x,g.prevY=g.y;const p=Math.sin(h-f*.65)*(1.8+r*.22),M=Math.min(2.5,r*.16)-n*.08;g.x+=v+c*t,g.y+=d+(p+M-2.2)*t}for(let f=0;f<3;f++)for(let g=0;g<this.cloakNodeCount-1;g++){const v=this.cloakNodes[g],d=this.cloakNodes[g+1],p=d.x-v.x,M=d.y-v.y,_=Math.hypot(p,M)||.001,b=(_-this.cloakSpacing)/_;g===0?(d.x-=p*b,d.y-=M*b):(v.x+=p*b*.5,v.y+=M*b*.5,d.x-=p*b*.5,d.y-=M*b*.5)}const u=this.cloakMesh.geometry.attributes.position.array,m=this.sashMesh.geometry.attributes.position.array;for(let f=0;f<this.cloakNodeCount;f++){const g=this.cloakNodes[f],v=f/(this.cloakNodeCount-1),d=.16+v*.28+Math.sin(h-f*.5)*.04,p=Math.sin(v*Math.PI)*.12,M=f*6;u[M+0]=g.x,u[M+1]=g.y+d*.45,u[M+2]=-.06+p,u[M+3]=g.x,u[M+4]=g.y-d*.85,u[M+5]=.06+p;const _=1.44+(g.y-1.24)*.55+Math.cos(h-f*.8)*.06,b=.045*(1-v*.5);m[M+0]=g.x*.78,m[M+1]=_+b,m[M+2]=.02,m[M+3]=g.x*.78,m[M+4]=_-b,m[M+5]=-.02}this.cloakMesh.geometry.attributes.position.needsUpdate=!0,this.sashMesh.geometry.attributes.position.needsUpdate=!0;for(let f=0;f<this.inkMotes.length;f++){const g=this.inkMotes[f],v=Math.min(this.cloakNodeCount-1,3+f),d=this.cloakNodes[v],p=o*4.5+g.phase;g.mesh.position.set(d.x-.15+Math.cos(p)*g.radius,d.y+Math.sin(p*1.3)*g.radius,.15);const M=.6+.5*Math.sin(p);g.mesh.scale.set(M,M,1)}}}class f0{constructor({scene:t,collision:e,input:i,afterimages:n,ripples:r,inkSplash:a,loop:o,spawnX:l=0,spawnY:c=2}){this.scene=t,this.collision=e,this.input=i,this.afterimages=n,this.ripples=r,this.inkSplash=a,this.loop=o,this.aabb=new Re(l??0,c??2,z.PLAYER.width,z.PLAYER.height),this.velocity={x:0,y:0},this.facing=1,this.turnTween=0,this.maxHealth=z.COMBAT.maxHealth,this.health=this.maxHealth,this.invincibilityTimer=0,this.hurtTimer=0,this.respawnTimer=0,this.coyoteTimer=0,this.isJumpingRise=!1,this.hasAirDash=!0,this.dashTimer=0,this.dashCooldownTimer=0,this.dashDirection={x:1,y:0},this.afterimageTimer=0,this.hasInkStepUnlocked=!0,this.wallRunTimer=0,this.activeWallNormal=0,this.ledgeGrabCooldown=0,this.ledgeCorner=null,this.ledgeClimbProgress=0,this.ledgeClimbStart={x:0,y:0},this.ledgeClimbEnd={x:0,y:0},this.groundRef=null,this.wasGroundedLastFrame=!1,this.lastCheckpoint={x:l,y:c},this.meshGroup=new Nt,this.meshGroup.position.set(this.aabb.x,this.aabb.y,0),this.kuroModel=new d0,this.meshGroup.add(this.kuroModel.root),this.scene.add(this.meshGroup),this.combat=new a0(this,this.inkSplash,this.loop),this.fsm=new pr(this,"Idle"),this.setupFSM(),this.fsm.changeState("Idle")}setupFSM(){this.fsm.addState("Idle",{enter:()=>{this.isJumpingRise=!1,this.hasAirDash=!0},fixedUpdate:t=>{if(this.applyGroundMovement(t,0),!this.checkAttackTrigger()&&!this.checkParryTrigger()&&!this.checkJumpTrigger()&&!this.checkDashTrigger()){if(this.input.axisX!==0){this.fsm.changeState("Run");return}this.coyoteTimer<=0&&this.fsm.changeState("Fall")}}}),this.fsm.addState("Run",{enter:()=>{this.hasAirDash=!0},fixedUpdate:t=>{if(!this.checkAttackTrigger()&&!this.checkParryTrigger()&&!this.checkJumpTrigger()&&!this.checkDashTrigger()){if(this.input.axisX===0){this.fsm.changeState("Idle");return}this.applyGroundMovement(t,this.input.axisX*z.PLAYER.runSpeed),this.coyoteTimer<=0&&this.fsm.changeState("Fall")}}}),this.fsm.addState("JumpRise",{enter:()=>{this.velocity.y=z.PLAYER.jumpVelocity,this.isJumpingRise=!0,this.coyoteTimer=0},fixedUpdate:t=>{if(!this.checkAttackTrigger()&&!this.checkDashTrigger()){if(this.applyAirMovement(t),this.applyGravity(t),this.isJumpingRise&&this.input.jumpReleased&&this.velocity.y>0&&(this.velocity.y*=z.PLAYER.jumpCutMultiplier,this.isJumpingRise=!1),this.velocity.y<=0){this.fsm.changeState("Fall");return}this.checkWallContact()}}}),this.fsm.addState("Fall",{fixedUpdate:t=>{if(!this.checkAttackTrigger()&&!this.checkDashTrigger()&&(this.applyAirMovement(t),this.applyGravity(t),!this.checkJumpTrigger())){if(this.velocity.y<0&&this.ledgeGrabCooldown<=0){const e=this.collision.checkLedge(this.aabb,this.facing);if(e){this.fsm.changeState("LedgeHang",e);return}}if(!this.checkWallContact()&&this.coyoteTimer>0){this.input.axisX!==0?this.fsm.changeState("Run"):this.fsm.changeState("Idle");return}}}}),this.fsm.addState("WallRun",{enter:()=>{this.wallRunTimer=z.PLAYER.wallRunDuration,this.velocity.y=z.PLAYER.wallRunSpeed,this.velocity.x=0,this.hasAirDash=!0},fixedUpdate:t=>{if(this.wallRunTimer-=t,this.input.jumpBuffered){this.executeWallJump();return}if(this.activeWallNormal===-1&&this.input.axisX>=0||this.activeWallNormal===1&&this.input.axisX<=0){this.fsm.changeState("Fall");return}if(this.wallRunTimer<=0){this.fsm.changeState("WallSlide");return}}}),this.fsm.addState("WallSlide",{enter:()=>{this.velocity.y=z.PLAYER.wallSlideSpeed,this.velocity.x=0},fixedUpdate:t=>{if(this.velocity.y=z.PLAYER.wallSlideSpeed,this.input.jumpBuffered){this.executeWallJump();return}if(this.activeWallNormal===-1&&this.input.axisX>=0||this.activeWallNormal===1&&this.input.axisX<=0){this.fsm.changeState("Fall");return}this.coyoteTimer>0&&this.fsm.changeState("Idle")}}),this.fsm.addState("LedgeHang",{enter:t=>{this.ledgeCorner=t,this.velocity.x=0,this.velocity.y=0,this.hasAirDash=!0,t.side==="left"?(this.aabb.x=t.x-this.aabb.width*.5,this.facing=1):(this.aabb.x=t.x+this.aabb.width*.5,this.facing=-1),this.aabb.y=t.y-this.aabb.height*.5},fixedUpdate:t=>{if(this.input.axisY>0||this.input.jumpBuffered){this.input.consumeJump(),this.fsm.changeState("LedgeClimb");return}if(this.input.axisY<0){this.ledgeGrabCooldown=.3,this.fsm.changeState("Fall");return}}}),this.fsm.addState("LedgeClimb",{enter:()=>{this.ledgeClimbProgress=0,this.ledgeClimbStart={x:this.aabb.x,y:this.aabb.y},this.ledgeClimbEnd={x:this.ledgeCorner.side==="left"?this.ledgeCorner.x+.6:this.ledgeCorner.x-.6,y:this.ledgeCorner.y+this.aabb.height*.5+.05}},fixedUpdate:t=>{this.ledgeClimbProgress+=t/z.PLAYER.ledgeClimbDuration;const e=Math.min(1,this.ledgeClimbProgress);this.aabb.x=We.lerp(this.ledgeClimbStart.x,this.ledgeClimbEnd.x,e),this.aabb.y=We.lerp(this.ledgeClimbStart.y,this.ledgeClimbEnd.y,e),this.ledgeClimbProgress>=1&&(this.aabb.x=this.ledgeClimbEnd.x,this.aabb.y=this.ledgeClimbEnd.y,this.fsm.changeState("Idle"))}}),this.fsm.addState("InkStep",{enter:()=>{this.dashTimer=z.PLAYER.dashDuration,this.dashCooldownTimer=z.PLAYER.dashCooldown,this.hasAirDash=!1,this.invincibilityTimer=z.PLAYER.dashInvincibility,this.afterimageTimer=0;let t=this.input.axisX,e=this.input.axisY;t===0&&e===0&&(t=this.facing,e=0);const i=Math.hypot(t,e)||1;this.dashDirection={x:t/i,y:e/i},this.velocity.x=this.dashDirection.x*z.PLAYER.dashSpeed,this.velocity.y=this.dashDirection.y*z.PLAYER.dashSpeed,Tt.emit("player:dash",{x:this.aabb.x,y:this.aabb.y})},fixedUpdate:t=>{this.dashTimer-=t,this.afterimageTimer-=t,this.afterimageTimer<=0&&(this.afterimages.spawn(this.aabb.x,this.aabb.y,0,this.facing),this.afterimageTimer=z.PLAYER.afterimageInterval),this.dashTimer<=0&&(this.velocity.x*=z.PLAYER.dashSpeedDecay,this.velocity.y*=.5,this.coyoteTimer>0?this.fsm.changeState("Run"):this.fsm.changeState("Fall"))}}),this.fsm.addState("Attack",{enter:()=>{this.combat.startAttack(!1)},fixedUpdate:t=>{if(this.applyGroundMovement(t,0),this.input.attackBuffered&&this.combat.attackPhase==="recovery"){this.input.consumeAttack(),this.combat.startAttack(!1);return}this.checkParryTrigger()||this.combat.attackPhase==="recovery"&&this.checkDashTrigger()}}),this.fsm.addState("AirAttack",{enter:()=>{this.combat.startAttack(!0)},fixedUpdate:t=>{const e=this.velocity.y>0?z.PLAYER.gravityRising:z.PLAYER.gravityFalling;this.velocity.y+=e*.35*t,this.velocity.x*=.94,this.coyoteTimer>0&&this.fsm.changeState("Idle")}}),this.fsm.addState("Parry",{enter:()=>{this.combat.startParry()},fixedUpdate:t=>{this.applyGroundMovement(t,0),this.applyGravity(t)}}),this.fsm.addState("Hurt",{enter:()=>{this.hurtTimer=.28},fixedUpdate:t=>{this.hurtTimer-=t,this.applyAirMovement(t),this.applyGravity(t),this.hurtTimer<=0&&(this.coyoteTimer>0?this.fsm.changeState(this.input.axisX!==0?"Run":"Idle"):this.fsm.changeState("Fall"))}}),this.fsm.addState("Dead",{enter:()=>{this.velocity.x=0,this.velocity.y=0,this.respawnTimer=1,Tt.emit("player_died")},fixedUpdate:t=>{this.respawnTimer-=t,this.respawnTimer<=0&&this.respawnAtCheckpoint()}})}checkAttackTrigger(){return this.input.attackBuffered?(this.input.consumeAttack(),this.coyoteTimer>0?this.fsm.changeState("Attack"):this.fsm.changeState("AirAttack"),!0):!1}checkParryTrigger(){return this.input.parryBuffered&&this.combat.parryCooldownTimer<=0?(this.input.consumeParry(),this.fsm.changeState("Parry"),!0):!1}checkJumpTrigger(){return this.input.jumpBuffered&&this.coyoteTimer>0?(this.input.consumeJump(),this.fsm.changeState("JumpRise"),!0):!1}checkDashTrigger(){return this.hasInkStepUnlocked&&this.input.dashBuffered&&this.dashCooldownTimer<=0&&this.hasAirDash?(this.input.consumeDash(),this.fsm.changeState("InkStep"),!0):!1}checkWallContact(){if(this.activeWallNormal!==0){if(this.activeWallNormal===-1&&this.input.axisX<0)return this.facing=1,this.fsm.changeState("WallRun"),!0;if(this.activeWallNormal===1&&this.input.axisX>0)return this.facing=-1,this.fsm.changeState("WallRun"),!0}return!1}executeWallJump(){this.input.consumeJump();const t=-this.activeWallNormal;this.facing=t,this.velocity.x=t*z.PLAYER.wallJumpImpulse.x,this.velocity.y=z.PLAYER.wallJumpImpulse.y,this.isJumpingRise=!0,this.activeWallNormal=0,this.fsm.changeState("JumpRise"),Tt.emit("player:walljump",{kickDir:t})}applyGroundMovement(t,e){const i=Math.abs(e)>.01?z.PLAYER.groundAccel:z.PLAYER.groundDecel,n=1-Math.exp(-i*t);this.velocity.x+=(e-this.velocity.x)*n}applyAirMovement(t){if(this.input.axisX!==0){const e=this.input.axisX*z.PLAYER.runSpeed,i=1-Math.exp(-45.5*t);this.velocity.x+=(e-this.velocity.x)*i}else{const e=1-Math.exp(-18*t);this.velocity.x+=(0-this.velocity.x)*e}}applyGravity(t){let e=this.velocity.y>0?z.PLAYER.gravityRising:z.PLAYER.gravityFalling;Math.abs(this.velocity.y)<z.PLAYER.apexHangVelocity&&(e*=z.PLAYER.apexGravityScale),this.velocity.y+=e*t,this.velocity.y<z.PLAYER.maxFallSpeed&&(this.velocity.y=z.PLAYER.maxFallSpeed)}fixedUpdate(t){this.dashCooldownTimer>0&&(this.dashCooldownTimer-=t),this.ledgeGrabCooldown>0&&(this.ledgeGrabCooldown-=t),this.invincibilityTimer>0&&(this.invincibilityTimer-=t);const e=this.input.axisY<0&&this.input.jumpBuffered;if(this.fsm.fixedUpdate(t),this.combat.fixedUpdate(t),!this.fsm.isInState("LedgeClimb")&&!this.fsm.isInState("LedgeHang")&&!this.fsm.isInState("Dead")){const r=this.collision.moveAndSlide(this.aabb,this.velocity,t,e);r.grounded?(this.coyoteTimer=z.PLAYER.coyoteTime,this.groundRef=r.groundSolid,this.hasAirDash=!0,!this.wasGroundedLastFrame&&Math.abs(this.velocity.y)>2&&(this.ripples.spawn(this.aabb.x,this.aabb.minY,0,Math.min(1.5,Math.abs(this.velocity.y)/12)),Tt.emit("player:land",{yVel:this.velocity.y})),this.wasGroundedLastFrame=!0):(this.coyoteTimer=Math.max(0,this.coyoteTimer-t),this.wasGroundedLastFrame=!1),r.runnableWall?r.wallLeft?this.activeWallNormal=-1:r.wallRight&&(this.activeWallNormal=1):this.activeWallNormal=0}const i=!this.fsm.isInState("WallRun")&&!this.fsm.isInState("WallSlide")&&!this.fsm.isInState("LedgeHang")&&!this.fsm.isInState("Attack")&&!this.fsm.isInState("Parry");this.input.axisX!==0&&i&&(this.facing=this.input.axisX>0?1:-1);const n=this.collision.checkTriggers(this.aabb,this);for(const r of n)r.type==="pit"&&this.takeDamage(1,0,!0)}takeDamage(t=1,e=0,i=!1){if(i){this.health=Math.max(0,this.health-t),this.health<=0?this.respawnAtCheckpoint():this.respawnAtCheckpoint(this.lastCheckpoint);return}this.combat.takeDamage(t,e)}setCheckpoint(t,e){this.lastCheckpoint={x:t,y:e}}respawnAtCheckpoint(t=this.lastCheckpoint){this.aabb.x=t.x,this.aabb.y=t.y,this.velocity.x=0,this.velocity.y=0,this.health=this.maxHealth,this.invincibilityTimer=1,this.fsm.changeState("Idle"),Tt.emit("player:respawn",{x:t.x,y:t.y})}render(t){this.meshGroup.position.x=this.aabb.x,this.meshGroup.position.y=this.aabb.y;const e=this.facing;this.meshGroup.scale.x+=(e-this.meshGroup.scale.x)*.35;const i=this.velocity.y,n=We.clamp(1+i*.015,.75,1.3),r=1/Math.sqrt(n);this.kuroModel.root.scale.set(r,n,1),this.kuroModel.update(1/60,this)}dispose(){this.meshGroup.clear(),this.scene.remove(this.meshGroup)}}class Ui{constructor(t,e,i=16){this.createFn=t,this.resetFn=e,this.freeList=[],this.activeList=[];for(let n=0;n<i;n++)this.freeList.push(this.createFn())}obtain(...t){let e;return this.freeList.length>0?e=this.freeList.pop():e=this.createFn(),this.resetFn&&this.resetFn(e,...t),this.activeList.push(e),e}release(t){const e=this.activeList.indexOf(t);e!==-1&&(this.activeList.splice(e,1),this.freeList.push(t))}releaseAll(){for(;this.activeList.length>0;){const t=this.activeList.pop();this.freeList.push(t)}}update(t,e){for(let i=this.activeList.length-1;i>=0;i--){const n=this.activeList[i];e(n,t)||(this.activeList.splice(i,1),this.freeList.push(n))}}get activeCount(){return this.activeList.length}}class p0{constructor(t){this.scene=t,this.sharedGeometry=new Jt(z.PLAYER.width,z.PLAYER.height,.4),this.sharedMaterial=new $t({color:new nt(z.PALETTE.inkDark),transparent:!0,opacity:.6,depthWrite:!1}),this.pool=new Ui(()=>{const e=new q(this.sharedGeometry,this.sharedMaterial.clone());return e.visible=!1,this.scene.add(e),{mesh:e,age:0,maxAge:z.PLAYER.afterimageLifetime,scale:1}},(e,i,n,r,a,o=1)=>{e.mesh.position.set(i,n,r),e.mesh.scale.set(1,o,1),e.mesh.material.opacity=.55,e.mesh.visible=!0,e.age=0,e.maxAge=z.PLAYER.afterimageLifetime},20)}spawn(t,e,i=0,n=1,r=1){return this.pool.obtain(t,e,i,n,r)}update(t){this.pool.update(t,(e,i)=>{e.age+=i;const n=e.age/e.maxAge;if(n>=1)return e.mesh.visible=!1,!1;const r=1-n;return e.mesh.material.opacity=r*.55,e.mesh.scale.x=1-n*.25,e.mesh.scale.y=1-n*.25,!0})}dispose(){this.pool.releaseAll(),this.sharedGeometry.dispose(),this.sharedMaterial.dispose()}}class m0{constructor(t){this.scene=t,this.sharedGeometry=new Fi(.1,.45,24),this.sharedGeometry.rotateX(-Math.PI/2),this.sharedMaterial=new $t({color:new nt(z.PALETTE.inkDark),transparent:!0,opacity:.7,depthWrite:!1,side:de}),this.pool=new Ui(()=>{const e=new q(this.sharedGeometry,this.sharedMaterial.clone());return e.visible=!1,this.scene.add(e),{mesh:e,age:0,maxAge:.6,baseScale:1}},(e,i,n,r=0,a=1)=>{e.mesh.position.set(i,n+.02,r),e.mesh.scale.set(a,a,a),e.mesh.material.opacity=.65,e.mesh.visible=!0,e.age=0,e.maxAge=.55,e.baseScale=a},16)}spawn(t,e,i=0,n=1){const r=We.lerp(.8,1.8,Math.min(1,n));return this.pool.obtain(t,e,i,r)}update(t){this.pool.update(t,(e,i)=>{e.age+=i;const n=e.age/e.maxAge;if(n>=1)return e.mesh.visible=!1,!1;const r=e.baseScale*(1+n*.8);return e.mesh.scale.set(r,r,r),e.mesh.material.opacity=(1-n)*.65,!0})}dispose(){this.pool.releaseAll(),this.sharedGeometry.dispose(),this.sharedMaterial.dispose()}}class g0{constructor(t){this.scene=t;const e=new Un(.12,8),i=new $t({color:new nt(z.PALETTE.inkDark),transparent:!0,opacity:.9,depthWrite:!1,side:de});new $t({color:new nt(z.PALETTE.vermilion),transparent:!0,opacity:.95,depthWrite:!1,side:de}),this.dropletPool=new Ui(()=>{const l=new q(e,i.clone());return l.visible=!1,this.scene.add(l),{mesh:l,vx:0,vy:0,vz:0,gravity:-20,drag:.96,life:0,maxLife:.4,initialScale:1,isVermilion:!1}},(l,c,h,u,m,f,g,v=.4,d=1,p=!1)=>{l.mesh.position.set(c,h,u),l.vx=m,l.vy=f,l.vz=g,l.life=0,l.maxLife=v,l.initialScale=d,l.isVermilion=p,l.mesh.material.color.set(p?z.PALETTE.vermilion:z.PALETTE.inkDark),l.mesh.material.opacity=p?.95:.88,l.mesh.scale.set(d,d,d),l.mesh.visible=!0},80);const n=new Fi(.8,1.4,16,1,0,Math.PI*.7),r=new $t({color:new nt(z.PALETTE.inkDark),transparent:!0,opacity:.85,depthWrite:!1,side:de});this.slashPool=new Ui(()=>{const l=new q(n,r.clone());return l.visible=!1,this.scene.add(l),{mesh:l,life:0,maxLife:.12,initialScale:1}},(l,c,h,u,m,f=1,g=!1)=>{l.mesh.position.set(c,h,u+.05),l.mesh.rotation.z=m,l.mesh.scale.set(f,f,1),l.mesh.material.color.set(g?z.PALETTE.vermilion:z.PALETTE.inkDark),l.mesh.material.opacity=.9,l.mesh.visible=!0,l.life=0,l.maxLife=.14,l.initialScale=f},12);const a=new Fi(.1,.35,24),o=new $t({color:new nt(z.PALETTE.vermilion),transparent:!0,opacity:.95,depthWrite:!1,side:de});this.ringPool=new Ui(()=>{const l=new q(a,o.clone());return l.visible=!1,this.scene.add(l),{mesh:l,life:0,maxLife:.25,startRadius:.5,endRadius:2.2}},(l,c,h,u,m=.25,f=2,g=z.PALETTE.vermilion)=>{l.mesh.position.set(c,h,u+.1),l.mesh.scale.set(.2,.2,1),l.mesh.material.color.set(g),l.mesh.material.opacity=.95,l.mesh.visible=!0,l.life=0,l.maxLife=m,l.endRadius=f},8)}spawnSlashArc(t,e,i=1,n=0,r=!1){let a=i>0?-.4:Math.PI-.4,o=1;n===1?(a=i>0?.4:Math.PI+.4,o=1.15):n===2&&(a=i>0?-.2:Math.PI-.2,o=1.4),r&&(a=i>0?-.8:Math.PI-.8,o=1.2),this.slashPool.obtain(t+i*.4,e,.05,a,o,!1)}spawnHitImpact(t,e,i=1,n=8,r=!1,a=!1){const o=n,l=r?14:9;for(let c=0;c<o;c++){const h=(i>0?0:Math.PI)+(Math.random()-.5)*1.5,u=l*(.5+Math.random()*.8),m=Math.cos(h)*u,f=Math.sin(h)*u+3,g=(Math.random()-.5)*2,v=.25+Math.random()*.25,d=(r?1.4:1)*(.6+Math.random()*.8);this.dropletPool.obtain(t,e,.02,m,f,g,v,d,a)}}spawnParryBurst(t,e,i=!0){this.ringPool.obtain(t,e,.1,.25,i?2.5:1.5,z.PALETTE.vermilion);const n=i?18:8;for(let r=0;r<n;r++){const a=Math.random()*Math.PI*2,o=12+Math.random()*8,l=Math.cos(a)*o,c=Math.sin(a)*o;this.dropletPool.obtain(t,e,.05,l,c,0,.2+Math.random()*.15,.8,!0)}for(let r=0;r<10;r++){const a=Math.random()*Math.PI*2,o=6+Math.random()*6,l=Math.cos(a)*o,c=Math.sin(a)*o;this.dropletPool.obtain(t,e,.02,l,c,0,.3+Math.random()*.2,1,!1)}}spawnBackstabBurst(t,e){this.ringPool.obtain(t,e,.1,.35,3,z.PALETTE.vermilion);for(let i=0;i<30;i++){const n=(Math.random()-.5)*8,r=12+Math.random()*12,a=.4+Math.random()*.3,o=.8+Math.random()*1;this.dropletPool.obtain(t,e,.05,n,r,0,a,o,i%3===0)}}spawnDeathDissolve(t,e,i=1,n=2){for(let a=0;a<35;a++){const o=t+(Math.random()-.5)*i,l=e+(Math.random()-.5)*n,c=(Math.random()-.5)*5,h=(Math.random()-.2)*6,u=.5+Math.random()*.4,m=1+Math.random()*1.5;this.dropletPool.obtain(o,l,.02,c,h,0,u,m,!1)}}update(t){this.dropletPool.update(t,(e,i)=>{if(e.life+=i,e.life>=e.maxLife)return e.mesh.visible=!1,!1;e.vy+=e.gravity*i,e.vx*=e.drag,e.vy*=e.drag,e.mesh.position.x+=e.vx*i,e.mesh.position.y+=e.vy*i,e.mesh.position.z+=e.vz*i;const n=e.life/e.maxLife,r=1-n;e.mesh.material.opacity=r*(e.isVermilion?.95:.85);const a=e.initialScale*(1-n*.5);return e.mesh.scale.set(a,a,1),!0}),this.slashPool.update(t,(e,i)=>{if(e.life+=i,e.life>=e.maxLife)return e.mesh.visible=!1,!1;const n=e.life/e.maxLife;e.mesh.material.opacity=(1-n)*.9;const r=e.initialScale*(1+n*.3);return e.mesh.scale.set(r,r,1),!0}),this.ringPool.update(t,(e,i)=>{if(e.life+=i,e.life>=e.maxLife)return e.mesh.visible=!1,!1;const n=e.life/e.maxLife;e.mesh.material.opacity=(1-n)*.95;const r=We.lerp(.2,e.endRadius,n);return e.mesh.scale.set(r,r,1),!0})}}class x0{constructor(t){this.scene=t,this.dropCount=350,this.active=!1,this.lightningTimer=0,this.lightningFlash=0;const e=new fe,i=new Float32Array(this.dropCount*6);this.drops=[];for(let r=0;r<this.dropCount;r++){const a=(Math.random()-.5)*60,o=(Math.random()-.5)*35,l=(Math.random()-.5)*10,c=32+Math.random()*16,h=1.2+Math.random()*.8;this.drops.push({x:a,y:o,z:l,speed:c,length:h}),i[r*6+0]=a,i[r*6+1]=o,i[r*6+2]=l,i[r*6+3]=a-.3,i[r*6+4]=o-h,i[r*6+5]=l}e.setAttribute("position",new Ce(i,3));const n=new In({color:new nt(z.PALETTE.inkMid),transparent:!0,opacity:.45,depthWrite:!1});this.lineSegments=new rc(e,n),this.lineSegments.visible=!1,this.scene.add(this.lineSegments)}update(t,e,i){if(this.active=e>=105&&e<=232,this.lineSegments.visible=this.active,!this.active)return;this.lineSegments.position.set(e,i,0);const n=this.lineSegments.geometry.attributes.position.array;for(let r=0;r<this.dropCount;r++){const a=this.drops[r];a.y-=a.speed*t,a.x-=a.speed*.25*t,a.y<-18&&(a.y=18,a.x=(Math.random()-.5)*60),n[r*6+0]=a.x,n[r*6+1]=a.y,n[r*6+2]=a.z,n[r*6+3]=a.x-.3,n[r*6+4]=a.y-a.length,n[r*6+5]=a.z}this.lineSegments.geometry.attributes.position.needsUpdate=!0,this.lightningTimer-=t,this.lightningTimer<=0&&(this.lightningTimer=6+Math.random()*8,this.triggerLightning()),this.lightningFlash>0&&(this.lightningFlash-=t)}triggerLightning(){this.lightningFlash=.12,Tt.emit("lightning_flash"),Tt.emit("camera_shake",{amount:.3})}dispose(){this.scene.remove(this.lineSegments),this.lineSegments.geometry.dispose(),this.lineSegments.material.dispose()}}class v0{constructor(t){this.scene=t,this.petalCount=65;const e=new li(.18,.28),i=new $t({color:new nt(z.PALETTE.inkDark),side:de,transparent:!0,opacity:.75,depthWrite:!1});this.group=new Nt,this.petals=[];for(let n=0;n<this.petalCount;n++){const r=new q(e,i.clone()),a={mesh:r,x:(Math.random()-.5)*50,y:Math.random()*25,z:(Math.random()-.5)*6,vx:1.5+Math.random()*2,vy:-1-Math.random()*1.5,rotSpeed:(Math.random()-.5)*4,swayPhase:Math.random()*Math.PI*2};r.position.set(a.x,a.y,a.z),this.group.add(r),this.petals.push(a)}this.scene.add(this.group)}update(t,e,i){this.group.position.set(e,i,0);for(let n=0;n<this.petalCount;n++){const r=this.petals[n];r.swayPhase+=t*3,r.x+=(r.vx+Math.sin(r.swayPhase)*1.5)*t,r.y+=r.vy*t,r.mesh.rotation.z+=r.rotSpeed*t,r.mesh.rotation.y+=r.rotSpeed*.7*t,r.y<-15&&(r.y=15,r.x=(Math.random()-.5)*50),r.x>28&&(r.x=-28),r.mesh.position.set(r.x,r.y,r.z)}}dispose(){this.group.clear(),this.scene.remove(this.group)}}class _0{constructor(t){this.scene=t,this.layers=[],this.mistClouds=[];const e=new nt(z.PALETTE.parchment);[{depth:-92,factor:.05,litColor:"#b5b0a3",shadowColor:"#7d7970",ridgeColor:"#5e5b54",peaks:14,amp:26,baseY:-3,seed:17},{depth:-64,factor:.1,litColor:"#999488",shadowColor:"#59564f",ridgeColor:"#3d3b36",peaks:18,amp:21,baseY:-5,seed:31},{depth:-38,factor:.16,litColor:"#7a766c",shadowColor:"#383631",ridgeColor:"#22211e",peaks:22,amp:16,baseY:-6,seed:53},{depth:-20,factor:.24,litColor:"#5c5951",shadowColor:"#21201d",ridgeColor:"#141413",peaks:26,amp:11,baseY:-7,seed:79}].forEach(n=>{const r=this.build3DFacetedMountainRange(n,e);r.position.set(150,n.baseY,n.depth),this.scene.add(r),this.layers.push({mesh:r,baseX:150,baseY:n.baseY,factor:n.factor})}),this.buildDriftingMistClouds()}seededRandom(t){let e=t;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}ridgeHeight(t,e,i,n,r){const a=Math.pow(1-Math.abs(Math.sin(t*Math.PI*e+n)),1.35)*i,o=Math.pow(1-Math.abs(Math.sin(t*Math.PI*e*2.17+n*1.7)),1.5)*(i*.45),l=Math.sin(t*Math.PI*e*.5+n*.4)*(i*.35),c=Math.cos(t*Math.PI*e*5.3+n*2.3)*(i*.12),h=(r()-.5)*(i*.05);return Math.max(1.5,3+a+o+l+c+h)}build3DFacetedMountainRange(t,e){const i=new Nt,n=this.seededRandom(t.seed),r=480,a=480,o=-26,l=new nt(t.litColor),c=new nt(t.shadowColor),h=new nt(t.ridgeColor),u=[];for(let b=0;b<=a;b++){const P=b/a,A=-240+P*r,E=this.ridgeHeight(P,t.peaks,t.amp,t.seed,n);u.push({x:A,y:E})}const m=[],f=[],g=[],v=[];for(let b=0;b<a;b++){const P=u[b],A=u[b+1];g.push(new C(P.x,P.y,.08));const E=A.y-P.y,R=E>=0,N=We.clamp(Math.abs(E)/1.2,.15,1),x=R?l.clone().lerp(e,.18*N):c.clone().lerp(h,.45*N),S=x.clone(),k=(P.x+A.x)*.5+(E>=0?-.35:.35),F=(P.y+A.y)*.5-t.amp*.55,V=x.clone().lerp(e,.52);m.push(P.x,P.y,0,k,F,.25,A.x,A.y,0),f.push(x.r,x.g,x.b,V.r,V.g,V.b,S.r,S.g,S.b);const K=P.x,H=A.x;m.push(P.x,P.y,0,K,o,0,k,F,.25,k,F,.25,K,o,0,H,o,0,k,F,.25,H,o,0,A.x,A.y,0),f.push(x.r,x.g,x.b,e.r,e.g,e.b,V.r,V.g,V.b,V.r,V.g,V.b,e.r,e.g,e.b,e.r,e.g,e.b,V.r,V.g,V.b,e.r,e.g,e.b,S.r,S.g,S.b),b>1&&b<a-1&&P.y>u[b-1].y&&P.y>A.y&&v.push(new C(P.x,P.y,.12),new C(k+(n()-.5)*1.8,F+1.5,.28))}const d=new fe;d.setAttribute("position",new jt(m,3)),d.setAttribute("color",new jt(f,3));const p=new $t({vertexColors:!0,side:de,depthWrite:!1,fog:!1});i.add(new q(d,p));const M=new fe().setFromPoints(g),_=new In({color:h,fog:!1});if(i.add(new hr(M,_)),v.length>0){const b=new fe().setFromPoints(v),P=new In({color:h,transparent:!0,opacity:.55,fog:!1});i.add(new rc(b,P))}return i}buildDriftingMistClouds(){if(typeof document>"u")return;const t=document.createElement("canvas");t.width=256,t.height=128;const e=t.getContext("2d"),i=e.createRadialGradient(128,64,10,128,64,115);i.addColorStop(0,"rgba(234, 229, 217, 0.82)"),i.addColorStop(.55,"rgba(234, 229, 217, 0.42)"),i.addColorStop(1,"rgba(234, 229, 217, 0.0)"),e.fillStyle=i,e.fillRect(0,0,256,128);const n=new ir(t),r=new $t({map:n,transparent:!0,depthWrite:!1,fog:!1}),a=new li(42,14);for(let o=0;o<18;o++){const l=new q(a,r),c=-15-o%4*18,h=-20+o*22,u=2+o%5*9;l.position.set(h,u,c),this.scene.add(l),this.mistClouds.push({mesh:l,baseX:h,baseY:u,speed:.6+o%3*.4,phase:o*1.1})}}update(t,e){const i=performance.now()*.001;for(let n=0;n<this.layers.length;n++){const r=this.layers[n];r.mesh.position.x=t-(t-150)*r.factor,r.mesh.position.y=e+r.baseY-(e-12)*(r.factor*.25)}for(let n=0;n<this.mistClouds.length;n++){const r=this.mistClouds[n],a=Math.sin(i*.25+r.phase)*6;r.mesh.position.x=r.baseX+a+(t-150)*.15}}dispose(){this.layers.forEach(t=>this.scene.remove(t.mesh)),this.mistClouds.forEach(t=>this.scene.remove(t.mesh))}}class y0{constructor(t,e,i){this.renderer=t,this.scene=e,this.camera=i,this.enabled=!0,this.overlayCanvas=document.createElement("canvas"),this.overlayCanvas.id="post-fx-overlay",this.overlayCanvas.style.position="absolute",this.overlayCanvas.style.top="0",this.overlayCanvas.style.left="0",this.overlayCanvas.style.width="100%",this.overlayCanvas.style.height="100%",this.overlayCanvas.style.pointerEvents="none",this.overlayCanvas.style.zIndex="5",this.overlayCanvas.style.mixBlendMode="multiply",(document.getElementById("game-container")||document.body).appendChild(this.overlayCanvas),this.ctx=this.overlayCanvas.getContext("2d"),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){const t=window.innerWidth,e=window.innerHeight;this.overlayCanvas.width=t,this.overlayCanvas.height=e,this.renderOverlay(t,e)}renderOverlay(t,e){if(!this.ctx)return;this.ctx.clearRect(0,0,t,e),this.ctx.fillStyle="#eae5d9",this.ctx.fillRect(0,0,t,e),this.ctx.fillStyle="#141413";for(let r=0;r<240;r++){const a=Math.random()*t,o=Math.random()*e,l=4+Math.random()*12,c=Math.random()*Math.PI;this.ctx.save(),this.ctx.translate(a,o),this.ctx.rotate(c),this.ctx.globalAlpha=.04+Math.random()*.05,this.ctx.fillRect(0,0,l,.8),this.ctx.restore()}const i=Math.hypot(t,e)*.55,n=this.ctx.createRadialGradient(t*.5,e*.5,i*.45,t*.5,e*.5,i);n.addColorStop(0,"rgba(234, 229, 217, 0.0)"),n.addColorStop(.7,"rgba(92, 91, 87, 0.12)"),n.addColorStop(1,"rgba(20, 20, 19, 0.35)"),this.ctx.fillStyle=n,this.ctx.fillRect(0,0,t,e)}flashLightning(){if(!this.ctx)return;const t=this.overlayCanvas.width,e=this.overlayCanvas.height;this.ctx.save(),this.ctx.fillStyle="rgba(255, 255, 255, 0.85)",this.ctx.fillRect(0,0,t,e),this.ctx.restore(),setTimeout(()=>{this.renderOverlay(t,e)},70)}dispose(){this.overlayCanvas&&this.overlayCanvas.parentNode&&this.overlayCanvas.parentNode.removeChild(this.overlayCanvas)}}const nr={fogPitY:-12,spawn:{x:0,y:1.5},act1:{solids:[{x:4,y:-.5,w:16,h:1,color:6052695},{x:15,y:1.5,w:5,h:.8,color:7236708},{x:22,y:3.5,w:4,h:.8,color:7236708},{x:28,y:5.5,w:4,h:.8,color:7236708},{x:35,y:7,w:3,h:.8,color:8026224,crumbling:!0},{x:40,y:8.5,w:3,h:.8,color:8026224,crumbling:!0},{x:49,y:11,w:7,h:1.2,color:6052695},{x:57,y:12,w:8,h:1,color:6052695},{x:74,y:12.5,w:8,h:1,color:6052695},{x:89,y:13,w:22,h:1.2,color:5394506},{x:104,y:14.5,w:8,h:1,color:6052695}],oneWays:[{x:85,y:16.5,w:5,h:.3},{x:93,y:17.5,w:6,h:.3}],shrine:{x:57,y:12.5},checkpoints:[{id:1,x:74,y:13}],enemies:[{type:"ashigaru",x:86,y:14.5,facing:1,isStationary:!0},{type:"ashigaru",x:96,y:14.5,facing:-1,patrolMinX:92,patrolMaxX:101}]},act2:{solids:[{x:112,y:15,w:6,h:1,color:4736576},{x:128,y:12,w:32,h:1.5,color:4011310},{x:151,y:25,w:2,h:14,color:1315859,runnable:!0},{x:157,y:27,w:2,h:14,color:1315859,runnable:!0},{x:163,y:32,w:6,h:1,color:6052695},{x:196,y:34,w:6,h:1,color:6052695},{x:206,y:38,w:6,h:1,color:6052695},{x:216,y:42.5,w:6,h:1,color:6052695},{x:226,y:46.5,w:8,h:1,color:6052695}],bambooStalks:[{x:118,y:12.5,height:6.5},{x:126,y:12.5,height:7.5},{x:134,y:12.5,height:8.5},{x:142,y:12.5,height:9.5}],suspensionBridge:{startX:166,startY:32,totalWidth:26,gapWidth:6.5},swingingLanterns:[{pivotX:179,pivotY:41,ropeLength:6.5},{pivotX:201,pivotY:46,ropeLength:5.5}],checkpoints:[{id:2,x:163,y:32.5},{id:3,x:226,y:47}],enemies:[{type:"tengu",x:179,y:36.5},{type:"tengu",x:206,y:42},{type:"tengu",x:218,y:46}]},act3:{solids:[{x:234,y:47.5,w:6,h:.8,color:6052695},{x:260,y:48,w:36,h:2,color:4012597},{x:241,y:55,w:1,h:14,color:0,invisible:!0},{x:279,y:55,w:1,h:14,color:0,invisible:!0}],checkpoints:[{id:4,x:243,y:49}],toriiGate:{x:260,y:49},scroll:{x:274,y:53}}};class M0{constructor({scene:t,collision:e,x:i=0,y:n=0,height:r=7,width:a=.6}){this.scene=t,this.collision=e,this.baseX=i,this.baseY=n,this.height=r,this.width=a,this.deflection=0,this.velocity=0,this.angularStiffness=55,this.damping=.88,this.maxDeflection=1.6,this.playerOnTop=!1,this.topAABB=new Re(this.baseX,this.baseY+this.height,1.2,.4),this.solidRef=this.collision.addOneWay(this.topAABB),this.solidRef.isBamboo=!0,this.solidRef.stalk=this,this.group=new Nt,this.group.position.set(this.baseX,this.baseY,0),this.segmentCount=6,this.segments=[];const o=this.height/this.segmentCount,l=new ve({color:4737853,roughness:.7,metalness:.1}),c=new ve({color:new nt(z.PALETTE.inkDark),roughness:.9});let h=this.group;for(let u=0;u<this.segmentCount;u++){const m=new Nt;u>0&&(m.position.y=o);const f=We.lerp(.18,.1,u/this.segmentCount),g=new zt(f*.9,f,o,8);g.translate(0,o*.5,0);const v=new q(g,l);v.castShadow=!0,m.add(v);const d=new dr(f*1.05,.03,6,12);d.rotateX(Math.PI/2);const p=new q(d,c);m.add(p),h.add(m),this.segments.push(m),h=m}this.scene.add(this.group)}fixedUpdate(t,e){if(e&&e.groundRef===this.solidRef){this.playerOnTop=!0;const l=e.facing*.8+e.input.axisX*.5,c=We.clamp(l,-this.maxDeflection,this.maxDeflection);if(this.velocity+=(c-this.deflection)*40*t,this.deflection+=this.velocity*t,this.velocity*=Math.pow(this.damping,t*60),e.input.jumpBuffered&&this.deflection!==0){const u=1+Math.abs(this.deflection)/this.maxDeflection*.5;e.velocity.y=z.PLAYER.jumpVelocity*u,e.velocity.x+=-Math.sign(this.deflection)*4,this.velocity=-Math.sign(this.deflection)*18,Tt.emit("bamboo_launch",{multiplier:u})}}else{this.playerOnTop=!1;const l=-this.angularStiffness*this.deflection;this.velocity+=l*t,this.deflection+=this.velocity*t,this.velocity*=Math.pow(this.damping,t*60)}this.deflection=We.clamp(this.deflection,-this.maxDeflection,this.maxDeflection);const n=this.deflection/this.height,r=this.baseX+Math.sin(n)*this.height,a=this.baseY+Math.cos(n)*this.height;this.topAABB.x=r,this.topAABB.y=a;const o=n/this.segmentCount;for(let l=0;l<this.segments.length;l++)this.segments[l].rotation.z=-o}dispose(){this.collision.removeSolid(this.solidRef),this.group.clear(),this.scene.remove(this.group)}}class S0{constructor({scene:t,collision:e,pivotX:i=0,pivotY:n=12,ropeLength:r=5}){this.scene=t,this.collision=e,this.pivotX=i,this.pivotY=n,this.ropeLength=r,this.angle=.25,this.angularVelocity=0,this.gravity=9.8,this.damping=.994,this.maxAngle=.65,this.grabbedPlayer=null,this.grabCooldown=0,this.grabRadius=1.2,this.lanternPos={x:i,y:n-r},this.group=new Nt,this.group.position.set(i,n,0);const a=new In({color:4011310,linewidth:2}),o=new fe().setFromPoints([new C(0,0,0),new C(0,-r,0)]);this.ropeLine=new hr(o,a),this.group.add(this.ropeLine),this.lanternMesh=new Nt,this.lanternMesh.position.set(0,-r,0);const l=new zt(.35,.45,.8,6),c=new ve({color:new nt(z.PALETTE.inkDark),roughness:.8}),h=new q(l,c);this.lanternMesh.add(h);const u=new zt(.25,.32,.6,6),m=new $t({color:new nt(z.PALETTE.vermilion)}),f=new q(u,m);this.lanternMesh.add(f),this.pointLight=new fr(12069167,1.8,8,1.5),this.lanternMesh.add(this.pointLight);const g=new zt(.04,.04,.8,6);g.rotateZ(Math.PI/2);const v=new ve({color:2236962}),d=new q(g,v);d.position.y=.45,this.lanternMesh.add(d),this.group.add(this.lanternMesh),this.scene.add(this.group)}fixedUpdate(t,e){this.grabCooldown>0&&(this.grabCooldown-=t);const i=-(this.gravity/this.ropeLength)*Math.sin(this.angle);this.angularVelocity+=i*t;const n=Math.sin(performance.now()*.0015)*.4;this.angularVelocity+=n*t,this.angle+=this.angularVelocity*t,this.angularVelocity*=Math.pow(this.damping,t*60),this.group.rotation.z=this.angle;const r=this.pivotX+Math.sin(this.angle)*this.ropeLength,a=this.pivotY-Math.cos(this.angle)*this.ropeLength;if(this.lanternPos.x=r,this.lanternPos.y=a,e&&!e.fsm.isInState("Dead")){if(this.grabbedPlayer)e.aabb.x=r,e.aabb.y=a-e.aabb.height*.4,e.velocity.x=this.angularVelocity*this.ropeLength*Math.cos(this.angle),e.velocity.y=this.angularVelocity*this.ropeLength*Math.sin(this.angle),e.input.jumpBuffered&&(e.input.consumeJump(),this.releasePlayer(e));else if(this.grabCooldown<=0){const o=e.aabb.x-r,l=e.aabb.y-a;Math.hypot(o,l)<=this.grabRadius&&!e.wasGroundedLastFrame&&e.velocity.y<2&&this.grabPlayer(e)}}}grabPlayer(t){this.grabbedPlayer=t,t.hasAirDash=!0,t.fsm.changeState("LedgeHang",{side:"lantern",x:this.lanternPos.x,y:this.lanternPos.y}),Tt.emit("lantern_grabbed",{x:this.lanternPos.x,y:this.lanternPos.y})}releasePlayer(t){const e=this.angularVelocity*this.ropeLength,i=Math.cos(this.angle)*e+t.facing*5,n=Math.max(8,z.PLAYER.jumpVelocity*.9);t.velocity.x=i,t.velocity.y=n,t.fsm.changeState("JumpRise"),this.grabbedPlayer=null,this.grabCooldown=.5,this.angularVelocity-=Math.sign(i)*.6,Tt.emit("lantern_released")}dispose(){this.group.clear(),this.scene.remove(this.group)}}class b0{constructor({scene:t,collision:e,startX:i=145,startY:n=32,totalWidth:r=26,gapWidth:a=6}){this.scene=t,this.collision=e,this.startX=i,this.startY=n,this.totalWidth=r,this.gapWidth=a,this.group=new Nt,this.group.position.set(i,n,0);const o=(r-a)*.5,l=new Re(i+o*.5,n,o,.4);this.leftSolid=this.collision.addOneWay(l);const c=i+o+a,h=new Re(c+o*.5,n+1.2,o,.4);this.rightSolid=this.collision.addOneWay(h);const u=new ve({color:5918017,roughness:.9}),m=new ve({color:4011310,roughness:.95}),f=7;for(let M=0;M<f;M++){const _=M/(f-1),b=_*o,P=-Math.sin(_*Math.PI)*.6,A=new Jt(.8,.15,2.2),E=new q(A,u);E.position.set(b,P,0),E.rotation.z=Math.cos(_*Math.PI)*-.12,E.castShadow=!0,this.group.add(E)}for(let M=0;M<f;M++){const _=M/(f-1),b=o+a+_*o,P=1.2-Math.sin(_*Math.PI)*.6,A=new Jt(.8,.15,2.2),E=new q(A,u);E.position.set(b,P,0),E.rotation.z=Math.cos(_*Math.PI)*-.12,E.castShadow=!0,this.group.add(E)}const g=new zt(.04,.02,3.5,6);g.translate(0,-1.75,0);const v=new q(g,m);v.position.set(o,-.4,.9),v.rotation.z=.2,this.group.add(v);const d=new zt(.04,.02,4,6);d.translate(0,-2,0);const p=new q(d,m);p.position.set(o+a,.8,-.9),p.rotation.z=-.25,this.group.add(p),this.scene.add(this.group)}dispose(){this.collision.removeSolid(this.leftSolid),this.collision.removeSolid(this.rightSolid),this.group.clear(),this.scene.remove(this.group)}}class w0{constructor({scene:t,collision:e,inkSplash:i,x:n=55,y:r=10}){this.scene=t,this.collision=e,this.inkSplash=i,this.x=n,this.y=r,this.isUnlocked=!1,this.aabb=new Re(n,r+1.2,2.4,2.6),this.triggerRef=this.collision.addTrigger(this.aabb,f=>{this.activate(f)},{type:"shrine"}),this.group=new Nt,this.group.position.set(n,r,0);const a=new Jt(2,.8,1.8),o=new ve({color:new nt(z.PALETTE.inkMid),roughness:.85}),l=new q(a,o);l.position.y=.4,l.castShadow=!0,this.group.add(l);const c=new ke(1.6,.7,4);c.rotateY(Math.PI/4);const h=new ve({color:new nt(z.PALETTE.inkDark),roughness:.7}),u=new q(c,h);u.position.y=2.2,u.castShadow=!0,this.group.add(u);const m=new Jt(.6,.9,.1);this.sealMat=new $t({color:new nt(z.PALETTE.vermilion)}),this.sealMesh=new q(m,this.sealMat),this.sealMesh.position.set(0,1.3,.4),this.group.add(this.sealMesh),this.light=new fr(12069167,1.5,6),this.light.position.set(0,1.4,.6),this.group.add(this.light),this.scene.add(this.group)}activate(t){this.isUnlocked||(this.isUnlocked=!0,t.hasInkStepUnlocked=!0,this.inkSplash&&(this.inkSplash.spawnParryBurst(this.x,this.y+1.4,!0),this.inkSplash.spawnHitImpact(this.x,this.y+1.4,1,16,!0,!0)),Tt.emit("shrine_unlocked",{title:"Ink Step Unlocked",description:"Press Shift or K to dash through the air. Grants invincibility and clears wide gaps."}),Tt.emit("camera_shake",{amount:.3}))}fixedUpdate(t){if(this.isUnlocked)this.light.intensity=.5;else{const e=1+Math.sin(performance.now()*.005)*.4;this.light.intensity=1.5*e}}dispose(){this.collision.removeTrigger(this.triggerRef),this.group.clear(),this.scene.remove(this.group)}}const ea="KURO_KIRI_SAVE_V1";class E0{static getInitialData(){return{checkpoint:{x:5,y:1},hasInkStep:!1,deaths:0,parries:0,startTime:Date.now(),levelTime:0,volumeMaster:.8,volumeMusic:.65,volumeSFX:.85,quality:"high"}}static _memSave=null;static load(){try{if(typeof localStorage<"u"){const t=localStorage.getItem(ea);if(t)return{...this.getInitialData(),...JSON.parse(t)}}}catch(t){console.warn("SaveSystem: localStorage unavailable, using in-memory save",t)}return this._memSave||this.getInitialData()}static save(t){try{return this._memSave={...t},typeof localStorage<"u"&&localStorage.setItem(ea,JSON.stringify(t)),!0}catch(e){return console.warn("SaveSystem: failed to write to localStorage",e),!1}}static saveCheckpoint(t,e){const i=this.load();i.checkpoint=e,i.lastCheckpointId=t,this.save(i)}static reset(){this._memSave=null;try{typeof localStorage<"u"&&localStorage.removeItem(ea)}catch{}return this.getInitialData()}}const sr=E0;class T0{constructor({scene:t,collision:e,inkSplash:i,x:n=0,y:r=0,id:a=1}){this.scene=t,this.collision=e,this.inkSplash=i,this.x=n,this.y=r,this.id=a,this.isLit=!1,this.aabb=new Re(n,r+1.2,1.8,2.4),this.triggerRef=this.collision.addTrigger(this.aabb,p=>{this.activate(p)},{type:"checkpoint"}),this.group=new Nt,this.group.position.set(n,r,0);const o=new ve({color:new nt(z.PALETTE.inkMid),roughness:.85}),l=new zt(.5,.7,.4,6),c=new q(l,o);c.position.y=.2,this.group.add(c);const h=new zt(.25,.3,1.2,6),u=new q(h,o);u.position.y=1,this.group.add(u);const m=new Jt(.8,.7,.8),f=new q(m,o);f.position.y=1.8,this.group.add(f);const g=new ke(.9,.5,6),v=new q(g,o);v.position.y=2.4,this.group.add(v);const d=new yi(.2,8,8);this.flameMat=new $t({color:new nt(z.PALETTE.inkDark),transparent:!0,opacity:.4}),this.flame=new q(d,this.flameMat),this.flame.position.y=1.8,this.group.add(this.flame),this.pointLight=new fr(12069167,0,8,1.5),this.pointLight.position.y=1.8,this.group.add(this.pointLight),this.scene.add(this.group)}activate(t){this.isLit||(this.isLit=!0,this.flameMat.color.setHex(12069167),this.flameMat.opacity=1,this.pointLight.intensity=2,t.health=z.COMBAT.maxHealth,t.setCheckpoint(this.x,this.y+.5),sr.saveCheckpoint(this.id,{x:this.x,y:this.y+.5}),this.inkSplash&&this.inkSplash.spawnParryBurst(this.x,this.y+1.8,!1),Tt.emit("checkpoint_activated",{id:this.id,x:this.x,y:this.y}))}fixedUpdate(t){if(this.isLit){const e=1.8+Math.sin(performance.now()*.008)*.4;this.pointLight.intensity=e;const i=1+Math.sin(performance.now()*.012)*.15;this.flame.scale.set(i,i*1.2,i)}}dispose(){this.collision.removeTrigger(this.triggerRef),this.group.clear(),this.scene.remove(this.group)}}class A0{constructor({scene:t,collision:e,inkSplash:i,x:n=0,y:r=0,facing:a=-1,patrolMinX:o=-5,patrolMaxX:l=5,isStationary:c=!1}){this.scene=t,this.collision=e,this.inkSplash=i;const h=z.ENEMIES.ashigaru;this.aabb=new Re(n,r,h.width,h.height),this.velocity={x:0,y:0},this.facing=a,this.patrolMinX=o,this.patrolMaxX=l,this.isStationary=c,this.maxHp=h.hp,this.hp=this.maxHp,this.isDead=!1,this.isStaggered=!1,this.isAirborne=!1,this.stateTimer=0,this.staggerTimer=0,this.patrolPauseTimer=0,this.flashTimer=0,this.hurtbox=new ci({owner:this,type:"enemy_hurtbox",width:h.width*.9,height:h.height*.95,offsetX:0,offsetY:0}),this.hurtbox.activate(),_e.registerEnemyHurtbox(this.hurtbox),this.attackHitbox=new ci({owner:this,type:"enemy_attack",width:h.attackReach,height:.6,offsetX:h.attackReach*.5,offsetY:0,damage:h.attackDamage}),_e.registerEnemyAttack(this.attackHitbox),this.meshGroup=new Nt,this.meshGroup.position.set(this.aabb.x,this.aabb.y,0);const u=new zt(.28,.34,.78,8);this.bodyMat=new ve({color:new nt(z.PALETTE.inkMid),roughness:.7,transparent:!0,opacity:1}),this.bodyMesh=new q(u,this.bodyMat),this.bodyMesh.position.y=.05,this.bodyMesh.castShadow=!0,xt(this.bodyMesh,.032),this.meshGroup.add(this.bodyMesh);const m=new zt(.11,.08,.65,8),f=new q(m,this.bodyMat);f.position.set(-.1,-2*.5+.32,-.1),xt(f,.025),this.meshGroup.add(f);const g=new q(m,this.bodyMat);g.position.set(.12,-2*.5+.32,.1),xt(g,.025),this.meshGroup.add(g);const v=new yi(.19,8,8),d=new q(v,this.bodyMat);d.position.y=.55,xt(d,.025),this.meshGroup.add(d);const p=new ke(.75,.28,14);this.hatMat=new ve({color:new nt(z.PALETTE.inkDark),roughness:.9}),this.hatMesh=new q(p,this.hatMat),this.hatMesh.position.y=.72,this.hatMesh.castShadow=!0,xt(this.hatMesh,.035),this.meshGroup.add(this.hatMesh),this.spearGroup=new Nt,this.spearGroup.position.set(.25,.05,.28);const M=new zt(.04,.04,h.attackReach,6);M.rotateZ(Math.PI/2);const _=new ve({color:2499102,roughness:.8}),b=new q(M,_);b.position.x=h.attackReach*.45,xt(b,.022),this.spearGroup.add(b);const P=new ke(.13,.65,6);P.rotateZ(-Math.PI/2),this.spearTipMat=new ve({color:new nt(z.PALETTE.vermilion),roughness:.3,metalness:.8});const A=new q(P,this.spearTipMat);if(A.position.x=h.attackReach+.15,xt(A,.025),this.spearGroup.add(A),this.meshGroup.add(this.spearGroup),typeof document<"u"){const E=document.createElement("canvas");E.width=64,E.height=64;const R=E.getContext("2d");R.fillStyle="#b8292f",R.font="bold 52px serif",R.textAlign="center",R.textBaseline="middle",R.fillText("!",32,32);const N=new ir(E),x=new nc({map:N,transparent:!0,opacity:0});this.alertSprite=new Um(x),this.alertSprite.position.set(0,h.height*.5+.8,0),this.alertSprite.scale.set(.8,.8,1),this.meshGroup.add(this.alertSprite)}else this.alertSprite={material:{opacity:0}};this.scene.add(this.meshGroup),this.fsm=new pr(this,"Patrol"),this.setupFSM(),this.fsm.changeState("Patrol")}get isUnaware(){return this.fsm.isInState("Patrol")||this.fsm.isInState("Alert")}setupFSM(){const t=z.ENEMIES.ashigaru;this.fsm.addState("Patrol",{enter:()=>{this.alertSprite.material.opacity=0,this.attackHitbox.deactivate(),this.isStaggered=!1},fixedUpdate:(e,i)=>{if(this.isStationary||(this.patrolPauseTimer>0?(this.patrolPauseTimer-=e,this.velocity.x=0):(this.velocity.x=this.facing*t.patrolSpeed,this.facing>0&&this.aabb.x>=this.patrolMaxX?(this.facing=-1,this.patrolPauseTimer=t.patrolPause):this.facing<0&&this.aabb.x<=this.patrolMinX&&(this.facing=1,this.patrolPauseTimer=t.patrolPause))),this.canSeePlayer(i)){this.fsm.changeState("Alert");return}}}),this.fsm.addState("Alert",{enter:()=>{this.velocity.x=0,this.stateTimer=.38,this.alertSprite.material.opacity=1,Tt.emit("enemy_alert",{enemy:this})},fixedUpdate:(e,i)=>{this.stateTimer-=e,i&&(this.facing=i.aabb.x>=this.aabb.x?1:-1),this.stateTimer<=0&&(Math.abs(i.aabb.x-this.aabb.x)<=t.attackReach+1.2?this.fsm.changeState("Telegraph"):this.fsm.changeState("Chase"))}}),this.fsm.addState("Chase",{enter:()=>{this.alertSprite.material.opacity=.8},fixedUpdate:(e,i)=>{if(!i)return;const n=Math.abs(i.aabb.x-this.aabb.x);if(this.facing=i.aabb.x>=this.aabb.x?1:-1,n<=t.attackReach+.4){this.fsm.changeState("Telegraph");return}this.velocity.x=this.facing*(t.patrolSpeed*1.5),n>t.visionRange*1.5&&this.fsm.changeState("Patrol")}}),this.fsm.addState("Telegraph",{enter:()=>{this.velocity.x=0,this.stateTimer=t.attackTelegraph,this.spearTipMat.color.setHex(16777215)},fixedUpdate:e=>{this.stateTimer-=e;const i=1-this.stateTimer/t.attackTelegraph;this.spearGroup.position.x=.3-i*.6,this.spearGroup.rotation.z=Math.sin(i*Math.PI)*.15,this.stateTimer<=0&&this.fsm.changeState("Thrust")}}),this.fsm.addState("Thrust",{enter:()=>{this.stateTimer=t.attackDuration,this.attackHitbox.activate(),this.spearTipMat.color.setHex(12069167),this.velocity.x=this.facing*3.5},fixedUpdate:e=>{this.stateTimer-=e;const i=1-this.stateTimer/t.attackDuration;this.spearGroup.position.x=.3+Math.sin(i*Math.PI)*.8,this.stateTimer<=0&&(this.attackHitbox.deactivate(),this.fsm.changeState("Recovery"))}}),this.fsm.addState("Recovery",{enter:()=>{this.stateTimer=t.attackRecovery,this.velocity.x=0,this.spearTipMat.color.setHex(6052695)},fixedUpdate:(e,i)=>{this.stateTimer-=e,this.spearGroup.position.x=.3,this.spearGroup.rotation.z=0,this.stateTimer<=0&&(i&&this.canSeePlayer(i)?this.fsm.changeState("Alert"):this.fsm.changeState("Patrol"))}}),this.fsm.addState("Staggered",{enter:()=>{this.isStaggered=!0,this.attackHitbox.deactivate(),this.alertSprite.material.opacity=0,this.spearGroup.rotation.z=-Math.PI*.4,this.bodyMesh.rotation.z=-.3},fixedUpdate:e=>{this.staggerTimer-=e,this.velocity.x*=.85;const i=Math.floor(performance.now()/90)%2===0;this.bodyMat.color.setHex(i?12069167:6052695),this.staggerTimer<=0&&(this.isStaggered=!1,this.bodyMesh.rotation.z=0,this.spearGroup.rotation.z=0,this.bodyMat.color.setHex(z.PALETTE.inkMid),this.fsm.changeState("Recovery"))}}),this.fsm.addState("Hurt",{enter:()=>{this.stateTimer=.22,this.attackHitbox.deactivate()},fixedUpdate:e=>{this.stateTimer-=e,this.velocity.x*=.9,this.stateTimer<=0&&(this.isStaggered?this.fsm.changeState("Staggered"):this.fsm.changeState("Alert"))}}),this.fsm.addState("Dead",{enter:()=>{this.isDead=!0,this.hurtbox.deactivate(),this.attackHitbox.deactivate(),_e.unregisterEntity(this),this.inkSplash&&this.inkSplash.spawnDeathDissolve(this.aabb.x,this.aabb.y,t.width,t.height),this.meshGroup.visible=!1,Tt.emit("enemy_killed",{enemy:this})},fixedUpdate:()=>{}})}canSeePlayer(t){if(!t||t.health<=0)return!1;const e=z.ENEMIES.ashigaru,i=t.aabb.x-this.aabb.x,n=t.aabb.y-this.aabb.y;if(Math.hypot(i,n)>e.visionRange||this.facing>0&&i<0||this.facing<0&&i>0)return!1;const a=Math.atan2(Math.abs(n),Math.abs(i)),o=e.visionAngleDeg*Math.PI/180;return a<=o}stagger(t=1.2){this.staggerTimer=t,this.fsm.changeState("Staggered")}takeDamage(t=1,e=!1,i=0){if(this.isDead)return;this.hp-=t;const n=this.aabb.x>=i?1:-1;this.velocity.x=n*(e?6:4),this.velocity.y=3,this.hp<=0||e?this.fsm.changeState("Dead"):this.fsm.changeState("Hurt")}fixedUpdate(t,e){if(this.isDead)return;const i=this.velocity.y>0?z.PLAYER.gravityRising:z.PLAYER.gravityFalling;this.velocity.y+=i*t,this.velocity.y<z.PLAYER.maxFallSpeed&&(this.velocity.y=z.PLAYER.maxFallSpeed),this.fsm.fixedUpdate(t,e),this.collision.moveAndSlide(this.aabb,this.velocity,t,!1).grounded&&(this.velocity.y=0),this.hurtbox.updatePosition(this.aabb.x,this.aabb.y,this.facing),this.attackHitbox.updatePosition(this.aabb.x,this.aabb.y,this.facing)}render(t){this.isDead||(this.meshGroup.position.x=this.aabb.x,this.meshGroup.position.y=this.aabb.y,this.meshGroup.scale.x=this.facing)}dispose(){this.hurtbox.deactivate(),this.attackHitbox.deactivate(),_e.unregisterEntity(this),this.meshGroup.clear(),this.scene.remove(this.meshGroup)}}class C0{constructor({scene:t,collision:e,inkSplash:i,x:n=0,y:r=5,facing:a=-1}){this.scene=t,this.collision=e,this.inkSplash=i;const o=z.ENEMIES.tengu;this.aabb=new Re(n,r,o.width,o.height),this.velocity={x:0,y:0},this.facing=a,this.homeX=n,this.homeY=r,this.hoverTime=Math.random()*10,this.maxHp=o.hp,this.hp=this.maxHp,this.isDead=!1,this.isAirborne=!0,this.isStaggered=!1,this.swoopTarget={x:0,y:0},this.swoopDir={x:0,y:0},this.stateTimer=0,this.cooldownTimer=1,this.hurtbox=new ci({owner:this,type:"enemy_hurtbox",width:o.width*.95,height:o.height*.95,offsetX:0,offsetY:0}),this.hurtbox.activate(),_e.registerEnemyHurtbox(this.hurtbox),this.attackHitbox=new ci({owner:this,type:"enemy_attack",width:o.width*1.2,height:o.height*1.2,offsetX:0,offsetY:0,damage:o.swoopDamage}),_e.registerEnemyAttack(this.attackHitbox),this.meshGroup=new Nt,this.meshGroup.position.set(this.aabb.x,this.aabb.y,0);const l=new ke(.5,o.height*.8,6);this.bodyMat=new ve({color:new nt(z.PALETTE.inkDark),roughness:.6}),this.bodyMesh=new q(l,this.bodyMat),this.bodyMesh.rotation.x=Math.PI,this.meshGroup.add(this.bodyMesh);const c=new ke(.18,.5,4);c.rotateZ(-Math.PI/2);const h=new ve({color:new nt(z.PALETTE.vermilion),roughness:.3});this.beakMesh=new q(c,h),this.beakMesh.position.set(.35,.2,0),this.meshGroup.add(this.beakMesh);const u=new li(1.4,.6);this.wingMat=new ve({color:new nt(z.PALETTE.inkDark),side:de,roughness:.7,transparent:!0,opacity:.9}),this.wingL=new q(u,this.wingMat),this.wingL.position.set(-.6,.2,-.2),this.meshGroup.add(this.wingL),this.wingR=new q(u,this.wingMat),this.wingR.position.set(-.6,.2,.2),this.meshGroup.add(this.wingR);const m=new $m({color:12069167,dashSize:.4,gapSize:.2,linewidth:2}),f=new fe().setFromPoints([new C(0,0,0),new C(1,0,0)]);this.telegraphLine=new hr(f,m),this.telegraphLine.visible=!1,this.scene.add(this.telegraphLine),this.scene.add(this.meshGroup),this.fsm=new pr(this,"Hover"),this.setupFSM(),this.fsm.changeState("Hover")}get isUnaware(){return!1}setupFSM(){const t=z.ENEMIES.tengu;this.fsm.addState("Hover",{enter:()=>{this.telegraphLine.visible=!1,this.attackHitbox.deactivate()},fixedUpdate:(e,i)=>{this.hoverTime+=e,this.cooldownTimer-=e;const n=this.homeY+Math.sin(this.hoverTime*t.bobFrequency)*t.bobAmplitude;if(this.aabb.y+=(n-this.aabb.y)*.1,this.aabb.x+=(this.homeX-this.aabb.x)*.05,this.wingL.rotation.z=Math.sin(this.hoverTime*8)*.4,this.wingR.rotation.z=Math.sin(this.hoverTime*8)*.4,i){this.facing=i.aabb.x>=this.aabb.x?1:-1;const r=i.aabb.x-this.aabb.x,a=i.aabb.y-this.aabb.y;if(Math.hypot(r,a)<10&&this.cooldownTimer<=0&&a<1){this.swoopTarget={x:i.aabb.x+i.facing*1.5,y:i.aabb.y};const l=this.swoopTarget.x-this.aabb.x,c=this.swoopTarget.y-this.aabb.y,h=Math.hypot(l,c)||1;this.swoopDir={x:l/h,y:c/h},this.fsm.changeState("Telegraph")}}}}),this.fsm.addState("Telegraph",{enter:()=>{this.stateTimer=t.swoopTelegraph,this.telegraphLine.visible=!0;const e=[new C(this.aabb.x,this.aabb.y,0),new C(this.swoopTarget.x+this.swoopDir.x*4,this.swoopTarget.y+this.swoopDir.y*4,0)];this.telegraphLine.geometry.setFromPoints(e),this.telegraphLine.computeLineDistances()},fixedUpdate:e=>{this.stateTimer-=e,this.wingL.rotation.z=.8,this.wingR.rotation.z=.8,this.stateTimer<=0&&(this.telegraphLine.visible=!1,this.fsm.changeState("Swoop"))}}),this.fsm.addState("Swoop",{enter:()=>{this.stateTimer=.55,this.attackHitbox.activate(),this.velocity.x=this.swoopDir.x*t.swoopSpeed,this.velocity.y=this.swoopDir.y*t.swoopSpeed},fixedUpdate:e=>{this.stateTimer-=e,this.aabb.x+=this.velocity.x*e,this.aabb.y+=this.velocity.y*e,this.inkSplash&&Math.random()<.6&&this.inkSplash.spawnHitImpact(this.aabb.x,this.aabb.y,-this.facing,2,!1),(this.stateTimer<=0||this.aabb.y<=this.swoopTarget.y-1)&&(this.attackHitbox.deactivate(),this.fsm.changeState("Ascend"))}}),this.fsm.addState("Ascend",{enter:()=>{this.attackHitbox.deactivate(),this.cooldownTimer=t.swoopCooldown},fixedUpdate:e=>{const i=this.homeX-this.aabb.x,n=this.homeY-this.aabb.y;this.velocity.x+=(i*2.5-this.velocity.x)*.08,this.velocity.y+=(n*3.5-this.velocity.y)*.08,this.aabb.x+=this.velocity.x*e,this.aabb.y+=this.velocity.y*e,Math.hypot(i,n)<.8&&this.fsm.changeState("Hover")}}),this.fsm.addState("Hurt",{enter:()=>{this.stateTimer=.2,this.attackHitbox.deactivate(),this.telegraphLine.visible=!1},fixedUpdate:e=>{this.stateTimer-=e,this.aabb.x+=this.velocity.x*e,this.aabb.y+=this.velocity.y*e,this.velocity.x*=.85,this.velocity.y*=.85,this.stateTimer<=0&&this.fsm.changeState("Ascend")}}),this.fsm.addState("Dead",{enter:()=>{this.isDead=!0,this.telegraphLine.visible=!1,this.hurtbox.deactivate(),this.attackHitbox.deactivate(),_e.unregisterEntity(this),this.inkSplash&&this.inkSplash.spawnDeathDissolve(this.aabb.x,this.aabb.y,t.width,t.height),this.meshGroup.visible=!1,Tt.emit("enemy_killed",{enemy:this})},fixedUpdate:()=>{}})}takeDamage(t=1,e=!1,i=0){if(this.isDead)return;this.hp-=t;const n=this.aabb.x>=i?1:-1;this.velocity.x=n*8,this.velocity.y=5,this.hp<=0||e?this.fsm.changeState("Dead"):this.fsm.changeState("Hurt")}fixedUpdate(t,e){this.isDead||(this.fsm.fixedUpdate(t,e),this.hurtbox.updatePosition(this.aabb.x,this.aabb.y,this.facing),this.attackHitbox.updatePosition(this.aabb.x,this.aabb.y,this.facing))}render(t){this.isDead||(this.meshGroup.position.x=this.aabb.x,this.meshGroup.position.y=this.aabb.y,this.meshGroup.scale.x=this.facing)}dispose(){this.telegraphLine.visible=!1,this.scene.remove(this.telegraphLine),this.hurtbox.deactivate(),this.attackHitbox.deactivate(),_e.unregisterEntity(this),this.meshGroup.clear(),this.scene.remove(this.meshGroup)}}class R0{constructor(t){this.scene=t;const e=new li(1.4,.9),i=new $t({color:new nt(z.PALETTE.inkDark),side:de,transparent:!0,opacity:.95,depthWrite:!1});this.wavePool=new Ui(()=>{const l=new q(e,i.clone());l.visible=!1,this.scene.add(l);const c=new ci({owner:{aabb:{x:0,y:0}},type:"enemy_attack",width:1.4,height:.9,damage:1});return _e.registerEnemyAttack(c),{mesh:l,hitbox:c,vx:0,lifetime:0,maxLife:2.5,active:!1}},(l,c,h,u=1,m=14)=>{l.mesh.position.set(c,h+.45,.05),l.mesh.scale.set(u,1,1),l.mesh.visible=!0,l.vx=u*m,l.lifetime=0,l.maxLife=2.4,l.active=!0,l.hitbox.activate(),l.hitbox.owner.aabb.x=c,l.hitbox.owner.aabb.y=h+.45,l.hitbox.updatePosition(c,h+.45,1)},8);const n=new li(2.4,.3),r=new $t({color:new nt(z.PALETTE.inkDark),side:de,transparent:!0,opacity:.85,depthWrite:!1});this.puddlePool=new Ui(()=>{const l=new q(n,r.clone());l.rotation.x=-Math.PI/2,l.visible=!1,this.scene.add(l);const c=new ci({owner:{aabb:{x:0,y:0}},type:"enemy_attack",width:2.4,height:.4,damage:1});return _e.registerEnemyAttack(c),{mesh:l,hitbox:c,lifetime:0,maxLife:z.BOSS.puddleLifetime,active:!1}},(l,c,h)=>{l.mesh.position.set(c,h+.02,0),l.mesh.visible=!0,l.lifetime=0,l.maxLife=z.BOSS.puddleLifetime,l.active=!0,l.hitbox.activate(),l.hitbox.owner.aabb.x=c,l.hitbox.owner.aabb.y=h+.2,l.hitbox.updatePosition(c,h+.2,1)},12);const a=new Fi(.2,.6,24),o=new $t({color:new nt(z.PALETTE.inkDark),side:de,transparent:!0,opacity:.9,depthWrite:!1});this.ringPool=new Ui(()=>{const l=new q(a,o.clone());return l.visible=!1,this.scene.add(l),{mesh:l,life:0,maxLife:.45,maxRadius:8}},(l,c,h)=>{l.mesh.position.set(c,h+.05,.02),l.mesh.scale.set(.1,.1,1),l.mesh.visible=!0,l.life=0,l.maxLife=.45,l.maxRadius=7.5},6)}spawnFloorWave(t,e,i=1,n=14){this.wavePool.obtain(t,e,i,n)}spawnPuddle(t,e){this.puddlePool.obtain(t,e)}spawnRingShockwave(t,e){this.ringPool.obtain(t,e),this.spawnFloorWave(t-.5,e,-1,14),this.spawnFloorWave(t+.5,e,1,14)}update(t){this.wavePool.update(t,(e,i)=>{if(e.lifetime+=i,e.lifetime>=e.maxLife)return e.hitbox.deactivate(),e.mesh.visible=!1,!1;e.mesh.position.x+=e.vx*i,e.hitbox.updatePosition(e.mesh.position.x,e.mesh.position.y,1);const n=e.lifetime/e.maxLife;return n>.8&&(e.mesh.material.opacity=(1-n)*5*.95),!0}),this.puddlePool.update(t,(e,i)=>{if(e.lifetime+=i,e.lifetime>=e.maxLife)return e.hitbox.deactivate(),e.mesh.visible=!1,!1;const n=e.lifetime/e.maxLife;return n>.8&&(e.mesh.material.opacity=(1-n)*5*.85),!0}),this.ringPool.update(t,(e,i)=>{if(e.life+=i,e.life>=e.maxLife)return e.mesh.visible=!1,!1;const n=e.life/e.maxLife,r=We.lerp(.5,e.maxRadius,n);return e.mesh.scale.set(r,r,1),e.mesh.material.opacity=(1-n)*.9,!0})}dispose(){this.wavePool.forEach(t=>_e.unregisterEntity(t.hitbox.owner)),this.puddlePool.forEach(t=>_e.unregisterEntity(t.hitbox.owner))}}class P0{constructor({scene:t,collision:e,inkSplash:i,shockwaves:n,x:r=260,y:a=50}){this.scene=t,this.collision=e,this.inkSplash=i,this.shockwaves=n;const o=z.BOSS;this.aabb=new Re(r,a+o.height*.5,o.width,o.height),this.velocity={x:0,y:0},this.facing=-1,this.arenaMinX=243,this.arenaMaxX=277,this.groundY=a,this.maxHp=o.hpMax,this.hp=this.maxHp,this.phase=1,this.isDead=!1,this.isVulnerable=!1,this.isStaggered=!1,this.canBeParried=!1,this.stateTimer=0,this.decisionTimer=1,this.farDistanceTimer=0,this.vulnerableTimer=0,this.staggerTimer=0,this.bodyHurtbox=new ci({owner:this,type:"enemy_hurtbox",width:o.width*.9,height:o.height*.95,offsetX:0,offsetY:0}),this.bodyHurtbox.activate(),_e.registerEnemyHurtbox(this.bodyHurtbox),this.attackHitbox=new ci({owner:this,type:"enemy_attack",width:4.5,height:1.8,offsetX:2.5,offsetY:0,damage:1}),_e.registerEnemyAttack(this.attackHitbox),this.meshGroup=new Nt,this.meshGroup.position.set(this.aabb.x,this.aabb.y,0),this.buildBossModel(),this.scene.add(this.meshGroup),this.fsm=new pr(this,"Dormant"),this.setupFSM(),this.fsm.changeState("Dormant")}buildBossModel(){const e=ri({inkDark:1118480,inkMid:2894632,inkLight:6118228,noiseScale:2.2,darkBias:.14}),i=ri({inkDark:1644566,inkMid:4736576,inkLight:8749688,noiseScale:2,darkBias:.04}),n=(E,R)=>{const N=new Nt;N.position.set(R,-2.4+1.85,E);const x=new zt(.42,.54,1,12),S=new q(x,e);S.position.y=-.45,xt(S,.036),N.add(S);const k=new yi(.3,10,10),F=new q(k,i);F.position.set(.16,-.92,0),xt(F,.03),N.add(F);const V=new zt(.28,.21,.9,12),K=new q(V,i);K.position.y=-1.35,xt(K,.032),N.add(K);const H=new Jt(.72,.22,.38),j=new q(H,e);return j.position.set(.16,-1.78,0),xt(j,.03),N.add(j),this.meshGroup.add(N),N};this.leftLeg=n(-.4,-.24),this.rightLeg=n(.4,.28),this.torso=new Nt,this.torso.position.y=.32,this.meshGroup.add(this.torso);const r=new zt(.88,.74,1.65,14),a=new q(r,e);a.castShadow=!0,xt(a,.042),this.torso.add(a);for(let E=0;E<4;E++){const R=new zt(.92-E*.03,.9-E*.03,.22,14),N=new q(R,i);N.position.y=.52-E*.34,xt(N,.028),this.torso.add(N)}for(let E=-1;E<=1;E++){const R=new Nt;R.position.set(E*.42,-.58,0),R.rotation.z=E*.18;for(let N=0;N<3;N++){const x=new Jt(.52,.28,1.38),S=new q(x,N%2===0?i:e);S.position.y=-N*.26,xt(S,.03),R.add(S)}this.meshGroup.add(R)}const o=E=>{const R=new Nt;R.position.set(0,1.05,E*.86);for(let F=0;F<3;F++){const V=new Jt(.82,.26,.28),K=new q(V,F%2===0?i:e);K.position.set(-.04*F,.18-F*.24,E*F*.05),K.rotation.x=E*.28,xt(K,.032),R.add(K)}const N=new zt(.24,.22,.72,10),x=new q(N,e);x.position.set(.18,-.45,-E*.12),x.rotation.z=.42,xt(x,.03),R.add(x);const S=new zt(.21,.17,.78,10),k=new q(S,i);k.position.set(.56,-.78,-E*.24),k.rotation.z=1.05,xt(k,.03),R.add(k),this.meshGroup.add(R)};o(-1),o(1);const l=new zt(.38,1.35,2.85,12,4,!0,-Math.PI*.45,Math.PI*.9),c=ri({inkDark:986894,inkMid:2499874,inkLight:4868162,darkBias:.25});c.side=de,this.bossCape=new q(l,c),this.bossCape.position.set(-.78,-.15,0),this.bossCape.rotation.z=-.36,xt(this.bossCape,.032),this.meshGroup.add(this.bossCape),this.helmet=new Nt,this.helmet.position.set(.08,1.58,0),this.meshGroup.add(this.helmet);const h=new yi(.62,14,12,0,Math.PI*2,0,Math.PI*.62),u=new q(h,e);u.position.y=.05,u.castShadow=!0,xt(u,.038),this.helmet.add(u);for(let E=0;E<3;E++){const R=new zt(.62+E*.12,.74+E*.15,.16,14,1,!0,Math.PI*.35,Math.PI*1.3),N=new q(R,E%2===0?i:e);N.position.set(-.06,-.02-E*.14,0),xt(N,.028),this.helmet.add(N)}this.horns=new Nt,this.horns.position.set(.52,.25,0),this.helmet.add(this.horns);for(const E of[-.18,.18]){const R=new ke(.11,.95,5),N=new q(R,i);N.position.set(.12,.42,E),N.rotation.z=-.28,N.rotation.x=E*.65,xt(N,.028),this.horns.add(N)}const m=new zt(.42,.34,.52,10);this.mask=new q(m,e),this.mask.position.set(.24,1.32,0),xt(this.mask,.032),this.meshGroup.add(this.mask);const f=new Jt(.28,.95,.85);this.weakMat=new $t({color:new nt(z.PALETTE.inkDark)}),this.weakMesh=new q(f,this.weakMat),this.weakMesh.position.set(-2.2*.42,.35,0),this.meshGroup.add(this.weakMesh),this.swordGroup=new Nt,this.swordGroup.position.set(.62,-.05,.58),this.swordGroup.rotation.z=-.24;const g=new zt(.085,.075,1.45,10);g.rotateZ(Math.PI/2);const v=new q(g,e);v.position.x=-.45,xt(v,.028),this.swordGroup.add(v);const d=new zt(.28,.28,.09,12);d.rotateZ(Math.PI/2);const p=new q(d,i);p.position.x=.28,xt(p,.028),this.swordGroup.add(p);const M=6,_=.78;for(let E=0;E<M;E++){const R=E/M,N=.24*(1-R*.22),x=new Jt(_+.04,N,.06),S=new q(x,i),k=Math.pow(R,1.8)*.38,F=Math.pow(R,1.4)*.14;S.position.set(.68+E*_,k,0),S.rotation.z=F,xt(S,.03),this.swordGroup.add(S)}const b=new ke(.11,.55,5);b.rotateZ(-Math.PI/2+.16),this.tipMat=new $t({color:new nt(z.PALETTE.inkDark)});const P=new q(b,this.tipMat);P.position.set(.68+M*_,.44,0),xt(P,.028),this.swordGroup.add(P),this.inkDrops=[];const A=new $t({color:1118480});for(let E=0;E<9;E++){const R=new yi(.055,7,7);R.scale(.65,1.85,.65);const N=new q(R,A),x=.95+E*.48,S=Math.pow(E/9,1.8)*.32-.12;N.position.set(x,S,0),this.swordGroup.add(N),this.inkDrops.push({mesh:N,baseX:x,baseY:S,phase:E*.73,speed:1.4+E%3*.45})}this.meshGroup.add(this.swordGroup)}setupFSM(){const t=z.BOSS;this.fsm.addState("Dormant",{enter:()=>{this.aabb.y=this.groundY+5.5,this.meshGroup.position.y=this.groundY+5.5,this.attackHitbox.deactivate()},fixedUpdate:(e,i)=>{i&&i.aabb.x>=246&&this.fsm.changeState("Intro")}}),this.fsm.addState("Intro",{enter:()=>{this.stateTimer=2,this.velocity.y=-45,Tt.emit("boss_intro_start",{name:t.name})},fixedUpdate:e=>{this.stateTimer-=e,this.aabb.y>this.groundY+t.height*.5&&(this.aabb.y+=this.velocity.y*e,this.aabb.y<=this.groundY+t.height*.5&&(this.aabb.y=this.groundY+t.height*.5,this.velocity.y=0,Tt.emit("camera_shake",{amount:.65}),this.shockwaves.spawnRingShockwave(this.aabb.x,this.groundY),this.inkSplash&&(this.inkSplash.spawnHitImpact(this.aabb.x,this.groundY,1,24,!0),this.inkSplash.spawnHitImpact(this.aabb.x,this.groundY,-1,24,!0)))),this.stateTimer<=0&&this.fsm.changeState("Decide")}}),this.fsm.addState("Decide",{enter:()=>{this.decisionTimer=this.phase===3?.35:.65,this.isVulnerable=!1,this.canBeParried=!1,this.attackHitbox.deactivate()},fixedUpdate:(e,i)=>{if(!i||i.health<=0)return;if(this.decisionTimer-=e,this.facing=i.aabb.x>=this.aabb.x?1:-1,Math.abs(i.aabb.x-this.aabb.x)>9?this.farDistanceTimer+=e:this.farDistanceTimer=0,this.decisionTimer<=0){if(this.farDistanceTimer>=2.5){this.farDistanceTimer=0,this.fsm.changeState("Telegraph_Charge");return}if(this.phase>=2&&Math.random()<.3){this.fsm.changeState("CrossbarLeap");return}Math.random()<.55?this.fsm.changeState("Telegraph_Sweep"):this.fsm.changeState("Telegraph_Slam")}}}),this.fsm.addState("Telegraph_Sweep",{enter:()=>{const e=this.phase>=2?.85:1;this.stateTimer=.7*e,this.swordGroup.rotation.z=.8,this.tipMat.color.setHex(12069167)},fixedUpdate:e=>{this.stateTimer-=e,this.stateTimer<=0&&this.fsm.changeState("Action_Sweep")}}),this.fsm.addState("Action_Sweep",{enter:()=>{this.stateTimer=.3,this.attackHitbox.damage=1,this.attackHitbox.activate(),this.phase===3&&(this.canBeParried=!0),this.shockwaves.spawnFloorWave(this.aabb.x+this.facing*1.5,this.groundY,this.facing,t.sweepSpeed),this.phase>=2&&setTimeout(()=>{this.isDead||this.shockwaves.spawnFloorWave(this.aabb.x+this.facing*2,this.groundY,this.facing,t.sweepSpeed*1.1)},180),this.swordGroup.rotation.z=-.5,Tt.emit("camera_shake",{amount:.25})},fixedUpdate:e=>{this.stateTimer-=e,this.stateTimer<=0&&(this.attackHitbox.deactivate(),this.canBeParried=!1,this.fsm.changeState("Decide"))}}),this.fsm.addState("Telegraph_Slam",{enter:()=>{const e=this.phase>=2?.85:1;this.stateTimer=.9*e,this.swordGroup.rotation.z=Math.PI*.7},fixedUpdate:e=>{this.stateTimer-=e,this.stateTimer<=0&&this.fsm.changeState("Action_Slam")}}),this.fsm.addState("Action_Slam",{enter:()=>{this.vulnerableTimer=t.slamEmbedDuration,this.isVulnerable=!0,this.attackHitbox.damage=2,this.attackHitbox.activate(),this.swordGroup.rotation.z=-Math.PI*.45,this.swordGroup.position.set(1.2,-.6,.7),Tt.emit("camera_shake",{amount:.55}),this.inkSplash&&this.inkSplash.spawnHitImpact(this.aabb.x+this.facing*2,this.groundY,1,20,!0),this.phase===3&&this.shockwaves.spawnPuddle(this.aabb.x+this.facing*2,this.groundY)},fixedUpdate:e=>{this.vulnerableTimer-=e;const i=Math.floor(performance.now()/80)%2===0;this.weakMat.color.setHex(i?12069167:1315859),this.vulnerableTimer<=t.slamEmbedDuration-.15&&this.attackHitbox.deactivate(),this.vulnerableTimer<=0&&(this.isVulnerable=!1,this.weakMat.color.setHex(1315859),this.swordGroup.position.set(.6,.2,.7),this.swordGroup.rotation.z=0,this.fsm.changeState("Decide"))}}),this.fsm.addState("Telegraph_Charge",{enter:()=>{this.stateTimer=.5,this.torso.rotation.z=this.facing*.2},fixedUpdate:e=>{this.stateTimer-=e,this.stateTimer<=0&&this.fsm.changeState("Action_Charge")}}),this.fsm.addState("Action_Charge",{enter:()=>{this.stateTimer=.8,this.attackHitbox.damage=1,this.attackHitbox.activate(),this.velocity.x=this.facing*t.chargeSpeed},fixedUpdate:e=>{this.stateTimer-=e,this.aabb.x+=this.velocity.x*e,(this.aabb.x<=this.arenaMinX+2||this.aabb.x>=this.arenaMaxX-2)&&(this.stateTimer=0),this.stateTimer<=0&&(this.attackHitbox.deactivate(),this.velocity.x=0,this.torso.rotation.z=0,this.fsm.changeState("Decide"))}}),this.fsm.addState("CrossbarLeap",{enter:()=>{this.stateTimer=1,this.aabb.y=this.groundY+14,this.velocity.y=0,this.attackHitbox.deactivate(),Tt.emit("camera_shake",{amount:.2})},fixedUpdate:(e,i)=>{this.stateTimer-=e,i&&(this.aabb.x+=(i.aabb.x-this.aabb.x)*.08),this.stateTimer<=0&&this.fsm.changeState("CrossbarSlam")}}),this.fsm.addState("CrossbarSlam",{enter:()=>{this.velocity.y=-28,this.attackHitbox.damage=2,this.attackHitbox.activate()},fixedUpdate:e=>{this.aabb.y+=this.velocity.y*e,this.aabb.y<=this.groundY+t.height*.5&&(this.aabb.y=this.groundY+t.height*.5,this.velocity.y=0,this.attackHitbox.deactivate(),Tt.emit("camera_shake",{amount:.6}),this.shockwaves.spawnRingShockwave(this.aabb.x,this.groundY),this.vulnerableTimer=1.2,this.isVulnerable=!0,this.fsm.changeState("CrossbarRecovery"))}}),this.fsm.addState("CrossbarRecovery",{enter:()=>{this.weakMat.color.setHex(12069167)},fixedUpdate:e=>{this.vulnerableTimer-=e;const i=Math.floor(performance.now()/80)%2===0;this.weakMat.color.setHex(i?12069167:1315859),this.vulnerableTimer<=0&&(this.isVulnerable=!1,this.weakMat.color.setHex(1315859),this.fsm.changeState("Decide"))}}),this.fsm.addState("Staggered",{enter:()=>{this.isStaggered=!0,this.isVulnerable=!0,this.staggerTimer=t.staggerDuration,this.attackHitbox.deactivate(),this.weakMat.color.setHex(12069167),this.swordGroup.rotation.z=-Math.PI*.5,this.torso.rotation.z=-.3},fixedUpdate:e=>{this.staggerTimer-=e;const i=Math.floor(performance.now()/70)%2===0;this.weakMat.color.setHex(i?12069167:1315859),this.staggerTimer<=0&&(this.isStaggered=!1,this.isVulnerable=!1,this.weakMat.color.setHex(1315859),this.torso.rotation.z=0,this.swordGroup.rotation.z=0,this.fsm.changeState("Decide"))}}),this.fsm.addState("PhaseTransition",{enter:()=>{this.stateTimer=1.4,this.attackHitbox.deactivate(),Tt.emit("camera_shake",{amount:.5}),this.inkSplash&&this.inkSplash.spawnParryBurst(this.aabb.x,this.aabb.y,!0)},fixedUpdate:e=>{this.stateTimer-=e,this.stateTimer<=0&&this.fsm.changeState("Decide")}}),this.fsm.addState("Dying",{enter:()=>{this.isDead=!0,this.bodyHurtbox.deactivate(),this.attackHitbox.deactivate(),_e.unregisterEntity(this),this.stateTimer=3,this.inkSplash&&(this.inkSplash.spawnDeathDissolve(this.aabb.x,this.aabb.y,t.width,t.height),this.inkSplash.spawnBackstabBurst(this.aabb.x,this.aabb.y)),Tt.emit("boss_defeated",{boss:this})},fixedUpdate:e=>{this.stateTimer-=e,this.meshGroup.position.y-=e*.6,this.stateTimer<=0&&(this.meshGroup.visible=!1,this.fsm.changeState("Dead"))}}),this.fsm.addState("Dead",{fixedUpdate:()=>{}})}takeDamage(t=1,e=!1,i=0){if(this.isDead||this.fsm.isInState("Intro")||this.fsm.isInState("PhaseTransition"))return;if(!this.isVulnerable&&!e){this.inkSplash&&this.inkSplash.spawnHitImpact(i,this.aabb.y,this.facing,4,!1),Tt.emit("boss_clink");return}const n=this.isVulnerable||e?z.BOSS.weakPointMultiplier:1,r=t*n;if(this.hp=Math.max(0,this.hp-r),Tt.emit("boss_damaged",{hp:this.hp,maxHp:this.maxHp}),this.hp<=0){this.fsm.changeState("Dying");return}const a=this.hp/this.maxHp;this.phase===1&&a<=.6?(this.phase=2,this.fsm.changeState("PhaseTransition")):this.phase===2&&a<=.25&&(this.phase=3,this.fsm.changeState("PhaseTransition"))}stagger(t=2){this.phase===3&&this.canBeParried&&this.fsm.changeState("Staggered")}fixedUpdate(t,e){this.isDead||(this.fsm.fixedUpdate(t,e),this.bodyHurtbox.updatePosition(this.aabb.x,this.aabb.y,this.facing),this.attackHitbox.updatePosition(this.aabb.x,this.aabb.y,this.facing))}render(t){if(this.isDead&&this.fsm.isInState("Dead"))return;this.meshGroup.position.x=this.aabb.x,this.meshGroup.position.y=this.aabb.y,this.meshGroup.scale.x=this.facing;const e=performance.now()*.001;if(this.inkDrops)for(const i of this.inkDrops){const n=(e*i.speed+i.phase)%1;if(n<.35){i.mesh.position.set(i.baseX,i.baseY-n*.15,0);const r=.5+n/.35*.7;i.mesh.scale.set(r,r,r)}else{const r=(n-.35)/.65,a=r*r*1.95;i.mesh.position.set(i.baseX,i.baseY-.05-a,0),i.mesh.scale.set(.85,1.35*(1-r*.35),.85)}}this.bossCape&&(this.bossCape.rotation.z=-.22+Math.sin(e*3.8)*.07,this.bossCape.rotation.y=.18+Math.cos(e*2.9)*.06)}dispose(){this.bodyHurtbox.deactivate(),this.attackHitbox.deactivate(),_e.unregisterEntity(this),this.meshGroup.clear(),this.scene.remove(this.meshGroup)}}class L0{constructor({scene:t,collision:e,inkSplash:i}){this.scene=t,this.collision=e,this.inkSplash=i,this.shockwaves=new R0(t),this.solidMeshes=[],this.bambooStalks=[],this.swingingLanterns=[],this.checkpoints=[],this.enemies=[],this.shrine=null,this.bridge=null,this.boss=null,this.templeBell=null,this.paintedBridges=[],this.bellRings=[],this.stoneMat=ri({inkDark:1578773,inkMid:5723213,inkLight:10065291,noiseScale:3.8,darkBias:.04}),this.cliffMat=ri({inkDark:1184272,inkMid:3683890,inkLight:7039072,noiseScale:2.5,darkBias:.24}),this.woodMat=ri({inkDark:1315601,inkMid:3880238,inkLight:7234906,noiseScale:6,darkBias:.18}),this.pineFoliageMat=ri({inkDark:1118480,inkMid:2829608,inkLight:5198409,noiseScale:7.5,darkBias:.3}),this.buildLevel()}buildLevel(){const t=nr,e=new Re(150,t.fogPitY,400,4);this.collision.addTrigger(e,null,{type:"pit"});const i=new $t({color:new nt(z.PALETTE.parchment),transparent:!0,opacity:.9,fog:!1}),n=new q(new li(600,14),i);n.position.set(150,t.fogPitY-6,1.5),this.scene.add(n),this.buildSolids(t.act1.solids),this.buildOneWays(t.act1.oneWays),this.shrine=new w0({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,x:t.act1.shrine.x,y:t.act1.shrine.y}),this.buildCheckpoints(t.act1.checkpoints),this.buildEnemies(t.act1.enemies),this.buildSolids(t.act2.solids),this.buildCheckpoints(t.act2.checkpoints),this.buildEnemies(t.act2.enemies);for(const a of t.act2.bambooStalks){const o=new M0({scene:this.scene,collision:this.collision,x:a.x,y:a.y,height:a.height});this.bambooStalks.push(o)}const r=t.act2.suspensionBridge;this.bridge=new b0({scene:this.scene,collision:this.collision,startX:r.startX,startY:r.startY,totalWidth:r.totalWidth,gapWidth:r.gapWidth});for(const a of t.act2.swingingLanterns){const o=new S0({scene:this.scene,collision:this.collision,pivotX:a.pivotX,pivotY:a.pivotY,ropeLength:a.ropeLength});this.swingingLanterns.push(o)}this.buildSolids(t.act3.solids),this.buildCheckpoints(t.act3.checkpoints),this.buildToriiGate(t.act3.toriiGate.x,t.act3.toriiGate.y),this.buildPaleMoon(t.act3.toriiGate.x,t.act3.toriiGate.y+8.5),this.buildFloatingScroll(t.act3.scroll.x,t.act3.scroll.y),this.buildScenicEnvironment(),this.boss=new P0({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,shockwaves:this.shockwaves,x:t.act3.toriiGate.x+3.2,y:t.act3.toriiGate.y})}buildSolids(t){if(t)for(const e of t){const i=new Re(e.x,e.y,e.w,e.h),n=this.collision.addSolid(i,{runnable:e.runnable??!1,crumbling:e.crumbling??!1});if(!e.invisible){const r=new Nt;r.position.set(e.x,e.y,0);const a=new Jt(e.w,e.h,3),o=e.crumbling?new ve({color:e.color,roughness:.85}):this.stoneMat,l=new q(a,o);if(l.castShadow=!0,l.receiveShadow=!0,xt(l,.045),r.add(l),!e.crumbling&&e.w>=3){const h=Math.min(28,Math.max(2,Math.floor(e.w/2.2))),u=e.w/h,m=e.h*.5;for(let f=0;f<h;f++){const g=-e.w*.5+u*(f+.5),v=.24+f*7%3*.05,d=3.18+f*13%3*.12,p=new Jt(u*.94,v,d),M=new q(p,this.stoneMat);if(M.position.set(g,m-v*.35,0),xt(M,.036),r.add(M),(f+Math.floor(e.x))%3===0){const _=new ke(.18,.42,4),b=new q(_,this.pineFoliageMat);b.position.set(g+.2,m+.16,1.35),b.rotation.z=(f%2-.5)*.35,r.add(b)}}if(e.h<=4.5){const f=new Jt(e.w*.9,.72,2.7),g=new q(f,this.stoneMat);g.position.set(0,-e.h*.5-.36,-.05),xt(g,.032),r.add(g);const v=Math.min(14,Math.max(3,Math.floor(e.w/2.6))),d=e.w*.82/v;for(let p=0;p<v;p++){const M=-e.w*.41+d*(p+.5),_=1-Math.abs(M)/(e.w*.5),b=.85+_*.85+p*11%3*.18,P=new no(b,0),A=new q(P,this.cliffMat);A.position.set(M,-e.h*.5-.85-_*.55,(p%2-.5)*.3),A.scale.set(1.35,.95,1.05),A.rotation.set(p*.7,p*1.1,p*.4),xt(A,.035),r.add(A)}}}this.scene.add(r),this.solidMeshes.push({mesh:l,group:r,solidRef:n,originalColor:e.color})}}}buildOneWays(t){if(t)for(const e of t){const i=new Re(e.x,e.y,e.w,e.h);this.collision.addOneWay(i);const n=new Nt;n.position.set(e.x,e.y,0);const r=new Jt(e.w,e.h,2.4),a=new q(r,this.woodMat);a.castShadow=!0,xt(a,.038),n.add(a);const o=new Jt(.22,1.1,2.1);for(const l of[-1,1]){const c=new q(o,this.woodMat);c.position.set(l*(e.w*.38),-.55,0),c.rotation.z=l*.42,xt(c,.028),n.add(c)}this.scene.add(n)}}buildPineTree(t,e,i=-1.8,n=1,r=1){const a=new Nt;a.position.set(t,e,i),a.scale.set(n,n,n);const o=new Xs([new C(0,0,0),new C(r*.25,1.15,.08),new C(r*.85,2.35,-.1),new C(r*1.45,3.45,.05),new C(r*1.15,4.35,0)]),l=new ts(o,14,.22,7,!1),c=new q(l,this.woodMat);xt(c,.032),a.add(c);const h=new ke(.45,.75,7),u=new q(h,this.woodMat);u.position.set(0,.3,0),xt(u,.032),a.add(u);const m=[[new C(r*.35,1.6,0),new C(r*1.35,1.95,.15),new C(r*2.15,2.15,.1)],[new C(r*.75,2.3,0),new C(-r*.25,2.75,-.15),new C(-r*.95,3.05,0)],[new C(r*1.25,3.1,0),new C(r*2.15,3.45,-.1),new C(r*2.75,3.65,.05)]];for(const g of m){const v=new Xs(g),d=new ts(v,8,.11,6,!1),p=new q(d,this.woodMat);xt(p,.025),a.add(p)}const f=[{x:r*2.1,y:2.2,z:.1,r:.65,count:5},{x:-r*.9,y:3.1,z:0,r:.62,count:5},{x:r*2.7,y:3.7,z:.05,r:.68,count:5},{x:r*1.2,y:4.45,z:0,r:.82,count:7}];for(const g of f)for(let v=0;v<g.count;v++){const d=v/g.count*Math.PI*2,p=v===0?0:g.r*.62,M=g.x+Math.cos(d)*p,_=g.y+Math.sin(d)*(p*.28)+(v===0?.14:0),b=g.z+Math.sin(d)*.22,P=g.r*(v===0?.85:.62),A=new so(P,1);A.scale(1.35,.42,.95);const E=new q(A,this.pineFoliageMat);E.position.set(M,_,b),E.rotation.y=v*.9,xt(E,.028),a.add(E)}return this.scene.add(a),a}buildScenicEnvironment(){this.buildPineTree(3.5,0,-1.8,1.15,1),this.buildPineTree(17.5,2,-2,.95,-1),this.buildPineTree(36,8,-1.8,1.1,1),this.buildPineTree(52.5,10,-2.2,1.25,1),this.buildPineTree(61.5,10,-2.2,1.15,-1),this.buildPineTree(91,15,-2,1.2,-1),this.buildPineTree(110,15,-2,1.3,1),this.buildPineTree(137,17.5,-1.8,1.1,1),this.buildPineTree(163,17.5,-1.8,1.15,-1),this.buildTempleBellPavilion(183,21),this.buildPineTree(191,21,-2,1.25,-1),this.buildPineTree(218,39,-2,1.15,1),this.buildPineTree(230,45,-2,1.2,-1),this.buildPineTree(243.5,48,-1.6,1.55,1),this.buildPineTree(276.5,48,-1.6,1.55,-1);for(let t=-7;t<=7;t++){const e=new Jt(1.9,.35,3.6),i=new q(e,this.stoneMat);i.position.set(260+t*2.1,47.92,0),i.rotation.z=(t%2===0?1:-1)*.03,xt(i,.035),this.scene.add(i)}}buildTempleBellPavilion(t,e){const i=new Nt;i.position.set(t,e,-1.8);const n=new zt(.22,.26,5.2,8);for(const c of[-2.4,2.4]){const h=new q(n,this.woodMat);h.position.set(c,2.6,0),xt(h,.035),i.add(h)}const r=new ke(4.2,1.6,4);r.rotateY(Math.PI/4);const a=new q(r,this.cliffMat);a.position.set(0,5.8,0),a.scale.set(1.25,1,.75),xt(a,.048),i.add(a),this.templeBell=new Nt,this.templeBell.position.set(0,4.6,0);const o=new zt(.52,.72,1.55,12),l=new q(o,this.cliffMat);l.position.y=-.9,xt(l,.04),this.templeBell.add(l),i.add(this.templeBell),this.scene.add(i)}buildCheckpoints(t){if(t)for(const e of t){const i=new T0({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,x:e.x,y:e.y,id:e.id});this.checkpoints.push(i)}}buildEnemies(t){if(t){for(const e of t)if(e.type==="ashigaru"){const i=new A0({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,x:e.x,y:e.y,facing:e.facing??-1,isStationary:e.isStationary??!1,patrolMinX:e.patrolMinX??e.x-4,patrolMaxX:e.patrolMaxX??e.x+4});this.enemies.push(i)}else if(e.type==="tengu"){const i=new C0({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,x:e.x,y:e.y,facing:e.facing??-1});this.enemies.push(i)}}}buildToriiGate(t,e){const i=new Nt;i.position.set(t,e-2,-3.2);const n=new zt(.68,.86,14.5,14),r=new zt(1.05,1.25,1.1,12);for(const g of[-1,1]){const v=g*6.4,d=new q(n,this.woodMat);d.position.set(v,7.2,0),d.rotation.z=-g*.025,d.castShadow=!0,xt(d,.055),i.add(d);const p=new q(r,this.cliffMat);p.position.set(v,.55,0),xt(p,.048),i.add(p)}const a=new Jt(16.5,.82,.95),o=new q(a,this.woodMat);o.position.set(0,10.8,0),xt(o,.048),i.add(o);const l=new Jt(17.8,.72,1.15),c=new q(l,this.woodMat);c.position.set(0,13.4,0),xt(c,.048),i.add(c);const h=new Jt(14,1.05,1.45),u=new q(h,this.cliffMat);u.position.set(0,14.15,0),xt(u,.055),i.add(u);for(const g of[-1,1]){const v=new Jt(4.2,1.05,1.45),d=new q(v,this.cliffMat);d.position.set(g*8.4,14.45,0),d.rotation.z=g*.16,xt(d,.055),i.add(d)}const m=new Jt(1.55,2.5,.85),f=new q(m,this.cliffMat);f.position.set(0,12.1,.15),xt(f,.045),i.add(f),this.scene.add(i)}buildPaleMoon(t,e){const i=new Nt;i.position.set(t,e,-14);const n=new Un(14.5,40),r=new $t({color:16250091,transparent:!0,opacity:.45,depthWrite:!1,fog:!1});i.add(new q(n,r));const a=new Un(11.2,40),o=new $t({color:16645109,transparent:!0,opacity:.96,depthWrite:!1,fog:!1});this.moon=new q(a,o),i.add(this.moon),this.scene.add(i)}buildFloatingScroll(t,e){this.scrollGroup=new Nt,this.scrollGroup.position.set(t,e,0);const i=new zt(.25,.25,1.6,12),n=new ve({color:new nt(z.PALETTE.rimHighlight),roughness:.6}),r=new q(i,n);r.rotateZ(Math.PI/2),xt(r,.032),this.scrollGroup.add(r);const a=new Jt(.3,.8,.55),o=new $t({color:new nt(z.PALETTE.vermilion)}),l=new q(a,o);this.scrollGroup.add(l),this.scrollLight=new fr(12069167,2,8),this.scrollGroup.add(this.scrollLight),this.scene.add(this.scrollGroup)}paintInkBridge(t,e,i=1){if(this.paintedBridges.length>=3){const p=this.paintedBridges.shift();this.collision.removeSolid(p.solidRef),this.scene.remove(p.group)}const n=4.6,r=.44,a=t+i*2.5,o=e-.55,l=new Re(a,o,n,r),c=this.collision.addSolid(l,{runnable:!1,crumbling:!1}),h=new Nt;h.position.set(a,o,0);const u=new Xs([new C(-n*.5,-.05,0),new C(-n*.2,.08,.06),new C(n*.2,-.04,-.06),new C(n*.5,.06,0)]),m=new ts(u,16,.26,8,!1);m.scale(1,.72,3.8);const f=new q(m,this.cliffMat);xt(f,.035),h.add(f);const g=new Jt(.42,.42,.42),v=new $t({color:12069167}),d=new q(g,v);d.position.set(i*(n*.46),.14,.65),h.add(d),this.inkSplash&&this.inkSplash.spawnHitImpact(a,o,i,14,!0),this.scene.add(h),this.paintedBridges.push({group:h,solidRef:c,timer:7.5,maxTime:7.5,x:a,y:o})}triggerBellResonance(t){const e=t?t.aabb.x:183,i=t?t.aabb.y:23;this.templeBell&&(this.templeBell.rotation.z=.45);const n=new Nt;n.position.set(e,i,.4);const r=new Fi(.85,1.05,36),a=new $t({color:12069167,side:de,transparent:!0,opacity:.9}),o=new Fi(.55,.68,36),l=new $t({color:1315859,side:de,transparent:!0,opacity:.85});n.add(new q(r,a)),n.add(new q(o,l)),this.scene.add(n),this.bellRings.push({group:n,r1Mat:a,r2Mat:l,timer:.75,maxTime:.75}),t&&(t.hasAirDash=!0);for(const c of this.enemies)!c.isDead&&Math.hypot(c.aabb.x-e,c.aabb.y-i)<15&&typeof c.onParried=="function"&&c.onParried(!0)}fixedUpdate(t,e){for(const i of this.solidMeshes)if(i.solidRef.crumbling){const n=i.group||i.mesh;i.solidRef.crumbleState==="collapsing"?(n.visible=!0,n.position.y=i.solidRef.aabb.y-(1-i.solidRef.crumbleTimer/.6)*.2,i.mesh.material&&i.mesh.material.color&&i.mesh.material.color.setHex(12069167)):i.solidRef.crumbleState==="collapsed"?n.visible=!1:(n.visible=!0,n.position.y=i.solidRef.aabb.y,i.mesh.material&&i.mesh.material.color&&i.mesh.material.color.setHex(i.originalColor))}this.shrine&&this.shrine.fixedUpdate(t);for(const i of this.checkpoints)i.fixedUpdate(t);for(const i of this.bambooStalks)i.fixedUpdate(t,e);for(const i of this.swingingLanterns)i.fixedUpdate(t,e);for(const i of this.enemies)i.fixedUpdate(t,e);this.shockwaves.update(t),this.boss&&this.boss.fixedUpdate(t,e),this.templeBell&&(this.templeBell.rotation.z=Math.sin(performance.now()*.0018)*.09);for(let i=this.paintedBridges.length-1;i>=0;i--){const n=this.paintedBridges[i];n.timer-=t,n.timer<1.2&&(n.group.scale.y=Math.max(.1,n.timer/1.2)),n.timer<=0&&(this.collision.removeSolid(n.solidRef),this.scene.remove(n.group),this.paintedBridges.splice(i,1))}for(let i=this.bellRings.length-1;i>=0;i--){const n=this.bellRings[i];n.timer-=t;const r=1-n.timer/n.maxTime,a=1+r*12;n.group.scale.set(a,a,1),n.r1Mat.opacity=Math.max(0,(1-r)*.9),n.r2Mat.opacity=Math.max(0,(1-r)*.85),n.timer<=0&&(this.scene.remove(n.group),this.bellRings.splice(i,1))}if(this.scrollGroup){const i=performance.now()*.003;this.scrollGroup.position.y=nr.act3.scroll.y+Math.sin(i)*.35,this.scrollGroup.rotation.y=i*.8,this.scrollLight.intensity=1.8+Math.sin(i*2)*.6}}render(t){for(const e of this.enemies)e.render(t);this.boss&&this.boss.render(t)}dispose(){for(const t of this.solidMeshes)this.collision.removeSolid(t.solidRef),this.scene.remove(t.group||t.mesh);for(const t of this.bambooStalks)t.dispose();for(const t of this.swingingLanterns)t.dispose();for(const t of this.checkpoints)t.dispose();for(const t of this.enemies)t.dispose();this.shrine&&this.shrine.dispose(),this.bridge&&this.bridge.dispose(),this.boss&&this.boss.dispose(),this.shockwaves&&this.shockwaves.dispose()}}class D0{constructor(){this.ctx=null,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.initialized=!1,this.isMuted=!1,this.windNode=null,this.rainNode=null,this.shamisenScale=[329.63,349.23,440,493.88,523.25,659.25],this.ambientMelodyTimer=4,this.setupEventListeners()}init(){if(!this.initialized)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=z.AUDIO.masterVolume??.8,this.masterGain.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=z.AUDIO.musicVolume??.65,this.musicGain.connect(this.masterGain),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=z.AUDIO.sfxVolume??.85,this.sfxGain.connect(this.masterGain),this.startAmbientWind(),this.startAmbientRain(),this.initialized=!0,console.log("AudioEngine: WebAudio synthesized successfully.")}catch(t){console.warn("AudioEngine: WebAudio not supported or blocked",t)}}ensureContext(){this.initialized||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playShamisenPluck(t=440,e=1.8,i=.8){if(!this.ctx||this.ctx.state!=="running")return;const n=this.ctx.sampleRate,r=Math.round(n/t),a=this.ctx.createBuffer(1,r,n),o=a.getChannelData(0);for(let g=0;g<r;g++)o[g]=(Math.random()*2-1)*.9;const l=this.ctx.createBufferSource();l.buffer=a;const c=this.ctx.createDelay();c.delayTime.value=1/t;const h=this.ctx.createGain();h.gain.value=.965;const u=this.ctx.createBiquadFilter();u.type="lowpass",u.frequency.value=t*3.5;const m=this.ctx.createGain(),f=this.ctx.currentTime;m.gain.setValueAtTime(i*.7,f),m.gain.exponentialRampToValueAtTime(.001,f+e),l.connect(c),c.connect(u),u.connect(h),h.connect(c),u.connect(m),m.connect(this.musicGain),l.start(f),l.stop(f+1/t)}playTaikoDrum(t=!1){if(!this.ctx||this.ctx.state!=="running")return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),n=this.ctx.createGain(),r=t?140:180,a=t?35:45;i.frequency.setValueAtTime(r,e),i.frequency.exponentialRampToValueAtTime(a,e+.35),n.gain.setValueAtTime(t?1:.75,e),n.gain.exponentialRampToValueAtTime(.001,e+.65),i.connect(n),n.connect(this.sfxGain),i.start(e),i.stop(e+.7),this.playNoiseBurst(.12,350,.4)}playKatanaSlash(t=!1){!this.ctx||this.ctx.state!=="running"||this.playNoiseBurst(t?.22:.15,t?1200:1800,.45)}playParryPing(t=!0){if(!this.ctx||this.ctx.state!=="running")return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),n=this.ctx.createOscillator(),r=this.ctx.createGain();i.frequency.value=t?2600:2100,n.frequency.value=t?5200:4200,r.gain.setValueAtTime(.65,e),r.gain.exponentialRampToValueAtTime(.001,e+(t?.75:.4)),i.connect(r),n.connect(r),r.connect(this.sfxGain),i.start(e),n.start(e),i.stop(e+.8),n.stop(e+.8)}playInkSplash(){this.playNoiseBurst(.18,600,.4)}playDashWhoosh(){if(!this.ctx||this.ctx.state!=="running")return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.frequency.setValueAtTime(600,t),e.frequency.exponentialRampToValueAtTime(150,t+.16),i.gain.setValueAtTime(.4,t),i.gain.exponentialRampToValueAtTime(.001,t+.18),e.connect(i),i.connect(this.sfxGain),e.start(t),e.stop(t+.2)}playNoiseBurst(t,e,i=.5){if(!this.ctx||this.ctx.state!=="running")return;const n=this.ctx.sampleRate*t,r=this.ctx.createBuffer(1,n,this.ctx.sampleRate),a=r.getChannelData(0);for(let u=0;u<n;u++)a[u]=Math.random()*2-1;const o=this.ctx.createBufferSource();o.buffer=r;const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.value=e,l.Q.value=1.8;const c=this.ctx.createGain(),h=this.ctx.currentTime;c.gain.setValueAtTime(i,h),c.gain.exponentialRampToValueAtTime(.001,h+t),o.connect(l),l.connect(c),c.connect(this.sfxGain),o.start(h)}startAmbientWind(){if(!this.ctx)return;const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=e.getChannelData(0);for(let a=0;a<t;a++)i[a]=Math.random()*2-1;const n=this.ctx.createBufferSource();n.buffer=e,n.loop=!0;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=350,this.windGain=this.ctx.createGain(),this.windGain.gain.value=.18,n.connect(r),r.connect(this.windGain),this.windGain.connect(this.masterGain),n.start()}startAmbientRain(){if(!this.ctx)return;const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=e.getChannelData(0);for(let a=0;a<t;a++)i[a]=Math.random()*2-1;const n=this.ctx.createBufferSource();n.buffer=e,n.loop=!0;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.value=1200,r.Q.value=.8,this.rainGain=this.ctx.createGain(),this.rainGain.gain.value=0,n.connect(r),r.connect(this.rainGain),this.rainGain.connect(this.masterGain),n.start()}setRainIntensity(t=0){this.rainGain&&this.ctx&&this.rainGain.gain.setTargetAtTime(t*.28,this.ctx.currentTime,.4)}update(t,e){if(this.initialized&&(e>=105&&e<=232?this.setRainIntensity(1):this.setRainIntensity(0),this.ambientMelodyTimer-=t,this.ambientMelodyTimer<=0)){this.ambientMelodyTimer=7+Math.random()*8;const i=this.shamisenScale[Math.floor(Math.random()*this.shamisenScale.length)];this.playShamisenPluck(i,2.2,.65)}}setupEventListeners(){Tt.on("player_attack_swing",({isHeavy:e})=>this.playKatanaSlash(e)),Tt.on("player:dash",()=>this.playDashWhoosh()),Tt.on("parry_perfect",()=>this.playParryPing(!0)),Tt.on("boss_clink",()=>this.playParryPing(!1)),Tt.on("checkpoint_activated",()=>{this.playShamisenPluck(523.25,2.5,.9),setTimeout(()=>this.playShamisenPluck(659.25,2.8,.8),220)}),Tt.on("shrine_unlocked",()=>{this.playTaikoDrum(!0),setTimeout(()=>this.playShamisenPluck(440,3,1),300)}),Tt.on("boss_intro_start",()=>{this.playTaikoDrum(!0),setTimeout(()=>this.playTaikoDrum(!0),350)}),Tt.on("lightning_flash",()=>{this.playNoiseBurst(.8,180,.85)});const t=()=>{this.ensureContext(),window.removeEventListener("keydown",t),window.removeEventListener("mousedown",t)};window.addEventListener("keydown",t),window.addEventListener("mousedown",t)}}const Ys=[{id:1,num:"I",title:"The Climb",kanji:"霧の登坂",minX:-20,maxX:45,spawnX:2,spawnY:2.5,dash:!1},{id:2,num:"II",title:"The Broken Pass",kanji:"断崖の道",minX:45,maxX:102,spawnX:49,spawnY:12.5,dash:!0},{id:3,num:"III",title:"Hanging Pines",kanji:"懸崖の松",minX:102,maxX:164,spawnX:105,spawnY:17.5,dash:!0},{id:4,num:"IV",title:"Temple of Silent Bells",kanji:"無音の鐘寺",minX:164,maxX:194,spawnX:172,spawnY:23,dash:!0},{id:5,num:"V",title:"Sea of Ink",kanji:"墨の海",minX:194,maxX:238,spawnX:195,spawnY:26,dash:!0},{id:6,num:"VI",title:"The Last Brushstroke",kanji:"最後の筆致",minX:238,maxX:999,spawnX:255,spawnY:50,dash:!0}];class I0{constructor(t=null){this.onSelectChapter=t,this.currentChapterId=0,this.container=document.createElement("div"),this.container.id="kuro-hud",this.container.style.cssText=`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 12;
      font-family: 'Cinzel', serif;
    `,this.healthContainer=document.createElement("div"),this.healthContainer.style.cssText=`
      position: absolute;
      top: 22px;
      left: 28px;
      display: flex;
      align-items: center;
      gap: 12px;
    `,this.inkDrops=[];for(let n=0;n<z.COMBAT.maxHealth;n++){const r=document.createElement("div");r.style.cssText=`
        width: 18px;
        height: 26px;
        background-color: #141413;
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        transform: rotate(45deg);
        box-shadow: 0 2px 6px rgba(20,20,19,0.35);
        transition: transform 0.25s ease, opacity 0.25s ease, background-color 0.25s ease;
      `,this.healthContainer.appendChild(r),this.inkDrops.push(r)}this.container.appendChild(this.healthContainer),this.dashMeter=document.createElement("div"),this.dashMeter.style.cssText=`
      position: absolute;
      top: 58px;
      left: 28px;
      font-size: 11px;
      letter-spacing: 1.6px;
      color: #3d3b37;
      text-transform: uppercase;
      font-weight: 700;
    `,this.dashMeter.innerText="INK STEP: READY",this.container.appendChild(this.dashMeter),this.chapterNav=document.createElement("div"),this.chapterNav.style.cssText=`
      position: absolute;
      top: 20px;
      right: 24px;
      display: flex;
      gap: 6px;
      pointer-events: auto;
      flex-wrap: wrap;
      justify-content: flex-end;
    `,this.chapterBtns=[],Ys.forEach(n=>{const r=document.createElement("button");r.innerText=`${n.num}. ${n.title}`,r.title=`${n.kanji} — Click to jump to Chapter ${n.num}`,r.style.cssText=`
        background: rgba(234, 229, 217, 0.85);
        color: #141413;
        border: 1px solid rgba(20, 20, 19, 0.45);
        padding: 5px 10px;
        font-family: 'Cinzel', serif;
        font-size: 10.5px;
        font-weight: 700;
        letter-spacing: 0.6px;
        cursor: pointer;
        border-radius: 3px;
        transition: all 0.18s ease;
        box-shadow: 0 2px 5px rgba(20,20,19,0.1);
      `,r.addEventListener("click",()=>{this.onSelectChapter&&this.onSelectChapter(n),r.blur()}),this.chapterNav.appendChild(r),this.chapterBtns.push({id:n.id,btn:r})}),this.container.appendChild(this.chapterNav),this.chapterBanner=document.createElement("div"),this.chapterBanner.style.cssText=`
      position: absolute;
      top: 18%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.8s ease;
    `,this.chapterKanji=document.createElement("div"),this.chapterKanji.style.cssText=`
      font-family: 'Yuji Syuku', 'Kaisei Decol', serif;
      font-size: 34px;
      color: #141413;
      letter-spacing: 8px;
      text-shadow: 0 2px 12px rgba(234,229,217,0.95);
    `,this.chapterTitleText=document.createElement("div"),this.chapterTitleText.style.cssText=`
      font-family: 'Cinzel', serif;
      font-size: 14px;
      font-weight: 700;
      color: #b8292f;
      letter-spacing: 4px;
      text-transform: uppercase;
      margin-top: 4px;
    `,this.chapterBanner.appendChild(this.chapterKanji),this.chapterBanner.appendChild(this.chapterTitleText),this.container.appendChild(this.chapterBanner),this.controlsHint=document.createElement("div"),this.controlsHint.style.cssText=`
      position: absolute;
      bottom: 16px;
      left: 24px;
      font-size: 11px;
      color: #2b2926;
      background: rgba(234, 229, 217, 0.85);
      border-left: 3px solid #b8292f;
      padding: 6px 12px;
      letter-spacing: 0.6px;
      font-weight: 600;
    `,this.controlsHint.innerHTML='<b>A/D</b> Move &nbsp;·&nbsp; <b>SPACE</b> Jump &nbsp;·&nbsp; <b>J/Click</b> Katana &nbsp;·&nbsp; <b>K/R-Click</b> Parry &nbsp;·&nbsp; <b>L/Shift</b> Dash &nbsp;·&nbsp; <span style="color:#b8292f;"><b>E</b> Paint Ink Bridge &nbsp;·&nbsp; <b>F</b> Bell Wave &nbsp;·&nbsp; <b>V</b> 3D Camera</span>',this.container.appendChild(this.controlsHint),this.powerBar=document.createElement("div"),this.powerBar.style.cssText=`
      position: absolute;
      bottom: 14px;
      right: 24px;
      display: flex;
      gap: 8px;
      pointer-events: auto;
    `;const e=(n,r)=>{const a=document.createElement("button");a.innerHTML=n,a.style.cssText=`
        background: #141413;
        color: #f5f1e6;
        border: 1px solid #b8292f;
        padding: 6px 11px;
        font-family: 'Cinzel', serif;
        font-size: 10.5px;
        font-weight: 700;
        cursor: pointer;
        border-radius: 3px;
        box-shadow: 0 2px 6px rgba(20,20,19,0.25);
      `,a.addEventListener("click",()=>{window.dispatchEvent(new KeyboardEvent("keydown",{code:r})),a.blur()}),this.powerBar.appendChild(a)};e("🖌️ Paint Bridge [E]","KeyE"),e("🔔 Bell Wave [F]","KeyF"),e("🎥 3D Perspective [V]","KeyV"),this.container.appendChild(this.powerBar),this.bossBarContainer=document.createElement("div"),this.bossBarContainer.style.cssText=`
      position: absolute;
      bottom: 48px;
      left: 50%;
      transform: translateX(-50%);
      width: 520px;
      max-width: 90vw;
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    `,this.bossTitle=document.createElement("div"),this.bossTitle.style.cssText=`
      font-family: 'Yuji Syuku', 'Kaisei Decol', serif;
      font-size: 21px;
      font-weight: 700;
      color: #141413;
      letter-spacing: 2px;
      text-shadow: 0 1px 4px rgba(234,229,217,0.95);
    `,this.bossTitle.innerText="黒鉄 — Kurogane, the Gatekeeper",this.bossBarContainer.appendChild(this.bossTitle),this.barFrame=document.createElement("div"),this.barFrame.style.cssText=`
      width: 100%;
      height: 13px;
      background: rgba(20, 20, 19, 0.22);
      border: 2px solid #141413;
      border-radius: 3px;
      overflow: hidden;
      position: relative;
    `,this.bossFill=document.createElement("div"),this.bossFill.style.cssText=`
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #141413, #b8292f);
      transition: width 0.2s ease-out;
    `,this.barFrame.appendChild(this.bossFill),this.bossBarContainer.appendChild(this.barFrame),this.container.appendChild(this.bossBarContainer),(document.getElementById("ui-root")||document.body).appendChild(this.container),this.bannerTimeout=null,this.setupListeners()}showChapterBanner(t){this.chapterKanji.innerText=t.kanji,this.chapterTitleText.innerText=`Chapter ${t.num} — ${t.title}`,this.chapterBanner.style.opacity="1",this.bannerTimeout&&clearTimeout(this.bannerTimeout),this.bannerTimeout=setTimeout(()=>{this.chapterBanner.style.opacity="0"},3200)}setupListeners(){Tt.on("boss_intro_start",({name:t})=>{this.bossBarContainer.style.display="flex",this.bossTitle.innerText=`黒鉄 — ${t}`,this.bossFill.style.width="100%"}),Tt.on("boss_damaged",({hp:t,maxHp:e})=>{const i=Math.max(0,t/e*100);this.bossFill.style.width=`${i}%`}),Tt.on("boss_defeated",()=>{setTimeout(()=>{this.bossBarContainer.style.display="none"},2e3)})}update(t){if(!t)return;const e=t.health;for(let a=0;a<this.inkDrops.length;a++){const o=this.inkDrops[a];a<e?(o.style.opacity="1.0",o.style.transform="rotate(45deg) scale(1.0)",o.style.backgroundColor="#141413"):(o.style.opacity="0.25",o.style.transform="rotate(45deg) scale(0.75)",o.style.backgroundColor="#a8a59c")}const i=t.aabb.x;let n=Ys[0];for(const a of Ys)if(i>=a.minX&&i<a.maxX){n=a;break}if(n.id!==this.currentChapterId){this.currentChapterId=n.id,this.showChapterBanner(n);for(const a of this.chapterBtns)a.id===n.id?(a.btn.style.background="#141413",a.btn.style.color="#f5f1e6",a.btn.style.borderColor="#b8292f"):(a.btn.style.background="rgba(234, 229, 217, 0.85)",a.btn.style.color="#141413",a.btn.style.borderColor="rgba(20, 20, 19, 0.45)")}const r=t.hasInkStepUnlocked?t.dashCooldownTimer>0?"INK STEP: CHARGING":"INK STEP: READY":"INK STEP: SHRINE AHEAD";this.dashMeter.innerText=`CH. ${n.num}: ${n.title.toUpperCase()}  ·  ${r}`}dispose(){this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}class U0{constructor(){this.container=document.createElement("div"),this.container.id="dialogue-card",this.container.style.cssText=`
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translateX(-50%) translateY(-20px);
      width: 440px;
      max-width: 88vw;
      background: #eae5d9;
      border: 2px solid #141413;
      box-shadow: 0 10px 30px rgba(20,20,19,0.35);
      border-radius: 8px;
      padding: 24px 28px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      text-align: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
      z-index: 25;
      font-family: 'Cinzel', serif;
    `,this.title=document.createElement("div"),this.title.style.cssText=`
      font-family: 'Yuji Syuku', 'Kaisei Decol', serif;
      font-size: 24px;
      font-weight: 700;
      color: #b8292f;
      letter-spacing: 2px;
    `,this.container.appendChild(this.title),this.body=document.createElement("div"),this.body.style.cssText=`
      font-size: 13px;
      line-height: 1.6;
      color: #141413;
      letter-spacing: 0.5px;
    `,this.container.appendChild(this.body),(document.getElementById("ui-root")||document.body).appendChild(this.container),this.hideTimeout=null,Tt.on("shrine_unlocked",({title:e,description:i})=>{this.show(e,i,4500)})}show(t,e,i=3500){this.hideTimeout&&clearTimeout(this.hideTimeout),this.title.innerText=t,this.body.innerText=e,this.container.style.opacity="1",this.container.style.transform="translateX(-50%) translateY(0)",this.hideTimeout=setTimeout(()=>{this.hide()},i)}hide(){this.container.style.opacity="0",this.container.style.transform="translateX(-50%) translateY(-20px)"}dispose(){this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}class N0{constructor(t,e){this.loop=t,this.audioEngine=e,this.isOpen=!1,this.container=document.createElement("div"),this.container.id="pause-menu",this.container.style.cssText=`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(20, 20, 19, 0.75);
      backdrop-filter: blur(4px);
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 35;
      font-family: 'Cinzel', serif;
      color: #eae5d9;
    `,this.card=document.createElement("div"),this.card.style.cssText=`
      background: #eae5d9;
      color: #141413;
      border: 2px solid #141413;
      box-shadow: 0 12px 40px rgba(0,0,0,0.5);
      border-radius: 8px;
      padding: 32px 40px;
      width: 440px;
      max-width: 90vw;
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      pointer-events: auto;
    `,this.container.appendChild(this.card),this.title=document.createElement("h2"),this.title.style.cssText=`
      font-family: 'Yuji Syuku', serif;
      font-size: 30px;
      margin: 0;
      letter-spacing: 2px;
    `,this.title.innerText="PAUSED",this.card.appendChild(this.title);const i=`
      width: 100%;
      padding: 10px;
      background: #141413;
      color: #eae5d9;
      border: none;
      border-radius: 4px;
      font-family: 'Cinzel', serif;
      font-size: 13px;
      letter-spacing: 2px;
      cursor: pointer;
      transition: background 0.15s ease;
    `;this.resumeBtn=document.createElement("button"),this.resumeBtn.style.cssText=i,this.resumeBtn.innerText="RESUME",this.resumeBtn.onclick=()=>this.toggle(),this.card.appendChild(this.resumeBtn);const n=document.createElement("div");n.style.cssText=`
      width: 100%;
      background: rgba(92, 91, 87, 0.1);
      padding: 12px;
      border-radius: 4px;
      font-size: 12px;
      line-height: 1.7;
      color: #3d3b36;
    `,n.innerHTML=`
      <strong>CONTROLS:</strong><br>
      • <strong>Move:</strong> A / D or Left / Right Arrows<br>
      • <strong>Jump:</strong> Spacebar (hold for height, variable cut)<br>
      • <strong>Attack:</strong> J or Left Click (3-hit combo & air slash)<br>
      • <strong>Parry:</strong> L or Right Click (0.15s perfect parry window)<br>
      • <strong>Ink Step (Dash):</strong> Shift or K (grants i-frames)<br>
      • <strong>Wall-Run:</strong> Hold toward wall -> Space to kick
    `,this.card.appendChild(n);const r=document.createElement("div");r.style.cssText="width: 100%; display: flex; flex-direction: column; gap: 8px; font-size: 12px;",r.innerHTML=`
      <div style="display:flex; justify-content:space-between;">
        <span>Master Volume</span>
        <input type="range" id="vol-master" min="0" max="1" step="0.05" value="0.8" style="width: 160px;">
      </div>
    `,this.card.appendChild(r),(document.getElementById("ui-root")||document.body).appendChild(this.container),window.addEventListener("keydown",o=>{o.code==="Escape"&&this.toggle()}),setTimeout(()=>{const o=document.getElementById("vol-master");o&&this.audioEngine&&o.addEventListener("input",l=>{this.audioEngine.masterGain&&(this.audioEngine.masterGain.gain.value=parseFloat(l.target.value))})},100)}toggle(){this.isOpen=!this.isOpen,this.container.style.display=this.isOpen?"flex":"none",this.isOpen?this.loop.pause():this.loop.resume()}dispose(){this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}class k0{constructor(){this.container=document.createElement("div"),this.container.id="end-card",this.container.style.cssText=`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(234, 229, 217, 0.95);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 1.5s ease;
      z-index: 40;
      font-family: 'Cinzel', serif;
    `,this.wrapper=document.createElement("div"),this.wrapper.style.cssText=`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      text-align: center;
      max-width: 500px;
      padding: 32px;
    `,this.container.appendChild(this.wrapper),this.title=document.createElement("h1"),this.title.style.cssText=`
      font-family: 'Yuji Syuku', 'Kaisei Decol', serif;
      font-size: 38px;
      color: #141413;
      margin-bottom: 4px;
    `,this.title.innerText="Scroll 1 of 7 Recovered",this.wrapper.appendChild(this.title),this.subtitle=document.createElement("div"),this.subtitle.style.cssText=`
      font-size: 15px;
      letter-spacing: 2px;
      color: #5c5b57;
      text-transform: uppercase;
    `,this.subtitle.innerText="The Whispering Ascent Cleared",this.wrapper.appendChild(this.subtitle),this.seal=document.createElement("div"),this.seal.style.cssText=`
      width: 85px;
      height: 85px;
      border: 4px solid #b8292f;
      color: #b8292f;
      font-family: 'Yuji Syuku', serif;
      font-size: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 16px 0;
      transform: scale(3.0) rotate(-15deg);
      opacity: 0;
      transition: transform 0.35s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity 0.35s ease;
    `,this.seal.innerText="墨",this.wrapper.appendChild(this.seal),this.stats=document.createElement("div"),this.stats.style.cssText=`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px 24px;
      font-size: 14px;
      color: #141413;
      margin-top: 8px;
    `,this.wrapper.appendChild(this.stats),this.next=document.createElement("div"),this.next.style.cssText=`
      font-size: 14px;
      letter-spacing: 3px;
      color: #7a7870;
      margin-top: 14px;
    `,this.next.innerText="— To be continued: Level 2 (The Ink Lake) —",this.wrapper.appendChild(this.next),this.replayBtn=document.createElement("button"),this.replayBtn.style.cssText=`
      margin-top: 18px;
      padding: 10px 24px;
      background: #141413;
      color: #eae5d9;
      border: none;
      border-radius: 4px;
      font-family: 'Cinzel', serif;
      font-size: 13px;
      letter-spacing: 2px;
      cursor: pointer;
      pointer-events: auto;
      transition: background 0.2s ease;
    `,this.replayBtn.innerText="PLAY AGAIN",this.replayBtn.addEventListener("click",()=>{sr.reset(),window.location.reload()}),this.wrapper.appendChild(this.replayBtn),(document.getElementById("ui-root")||document.body).appendChild(this.container),Tt.on("boss_defeated",()=>{setTimeout(()=>this.show(),4e3)})}show(){this.container.style.opacity="1",this.container.style.pointerEvents="auto",setTimeout(()=>{this.seal.style.opacity="1",this.seal.style.transform="scale(1.0) rotate(-6deg)",Tt.emit("camera_shake",{amount:.3})},800)}dispose(){this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}class F0{constructor(t,e){this.audioEngine=t,this.onComplete=e,this.canSkip=!0,this.completed=!1,this.container=document.createElement("div"),this.container.id="intro-cinematic",this.container.style.cssText=`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #eae5d9;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 50;
      font-family: 'Cinzel', serif;
      transition: opacity 1.2s ease-out;
      pointer-events: auto;
    `,this.canvas=document.createElement("canvas"),this.canvas.width=600,this.canvas.height=400,this.canvas.style.cssText="max-width: 90vw; max-height: 50vh;",this.ctx=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.textContainer=document.createElement("div"),this.textContainer.style.cssText=`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-top: 20px;
      opacity: 0;
      transition: opacity 1.0s ease;
      padding: 0 24px;
    `,this.title=document.createElement("h1"),this.title.style.cssText=`
      font-family: 'Yuji Syuku', 'Kaisei Decol', serif;
      font-size: 34px;
      color: #141413;
      margin: 0 0 8px 0;
      letter-spacing: 2px;
    `,this.title.innerText="Kiri-no-Saka",this.textContainer.appendChild(this.title),this.subtitle=document.createElement("div"),this.subtitle.style.cssText=`
      font-size: 14px;
      letter-spacing: 3px;
      color: #5c5b57;
      text-transform: uppercase;
      margin-bottom: 12px;
    `,this.subtitle.innerText="The Whispering Ascent",this.textContainer.appendChild(this.subtitle),this.story=document.createElement("div"),this.story.style.cssText=`
      font-size: 13px;
      font-style: italic;
      color: #7a7870;
      max-width: 420px;
      line-height: 1.6;
    `,this.story.innerText="“Seven scrolls of Sumi-Jutsu, stolen by the Iron Brush Clan. Climb before the ink dries.”",this.textContainer.appendChild(this.story),this.skipHint=document.createElement("div"),this.skipHint.style.cssText=`
      margin-top: 18px;
      font-size: 11px;
      letter-spacing: 1px;
      color: #a8a59c;
      text-transform: uppercase;
      opacity: 0;
      transition: opacity 0.5s ease;
    `,this.skipHint.innerText="Press any key to begin",this.textContainer.appendChild(this.skipHint),this.container.appendChild(this.textContainer),(document.getElementById("ui-root")||document.body).appendChild(this.container),this.startAnimation(),this.skipHandler=n=>{this.canSkip&&!this.completed&&this.finish()},window.addEventListener("keydown",this.skipHandler),window.addEventListener("mousedown",this.skipHandler)}startAnimation(){let t=performance.now(),e=0,i=!1,n=0;const r=a=>{if(this.completed)return;const o=(a-t)/1e3,l=this.ctx,c=this.canvas.width,h=this.canvas.height;if(l.clearRect(0,0,c,h),o<1.4?(e=o/1.4*(h*.55),l.fillStyle="#141413",l.beginPath(),l.ellipse(c*.5,e,6,9,0,0,Math.PI*2),l.fill()):i?(n=Math.min(140,(o-1.4)*85),l.fillStyle="#141413",l.beginPath(),l.arc(c*.5,h*.55,n,0,Math.PI*2),l.fill(),l.beginPath(),l.moveTo(c*.5-n*1.5,h*.55+n*.5),l.lineTo(c*.5,h*.55-n*1.2),l.lineTo(c*.5+n*1.5,h*.55+n*.5),l.closePath(),l.fill()):(i=!0,this.audioEngine&&(this.audioEngine.ensureContext(),this.audioEngine.playShamisenPluck(329.63,2.5,1)),Tt.emit("camera_shake",{amount:.25})),o>=2&&(this.textContainer.style.opacity="1",this.canSkip=!0,this.skipHint.style.opacity="0.8"),o>=7.5){this.finish();return}requestAnimationFrame(r)};requestAnimationFrame(r)}finish(){if(!this.completed){this.completed=!0;try{const t=sr.load();t.hasSeenIntro=!0,sr.save(t)}catch{}this.container.style.opacity="0",setTimeout(()=>{this.dispose(),this.onComplete&&this.onComplete()},1200)}}dispose(){window.removeEventListener("keydown",this.skipHandler),window.removeEventListener("mousedown",this.skipHandler),this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}const O0=document.getElementById("game-canvas"),Sl=document.getElementById("debug-overlay"),Si=new Lm({canvas:O0,antialias:!0,alpha:!1,powerPreference:"high-performance"});Si.setSize(window.innerWidth,window.innerHeight);Si.setPixelRatio(Math.min(window.devicePixelRatio,2));Si.setClearColor(new nt(z.PALETTE.parchment));Si.shadowMap.enabled=!0;Si.shadowMap.type=wl;const Fe=new Dm;Fe.background=new nt(z.PALETTE.parchment);Fe.fog=new eo(new nt(z.PALETTE.parchment).getHex(),.004);const St=new Ve(z.CAMERA.fov,window.innerWidth/window.innerHeight,.1,1e3);St.position.set(0,4,z.CAMERA.distanceZ);St.rotation.x=-We.degToRad(z.CAMERA.tiltDeg);let $i=0;Tt.on("camera_shake",({amount:s})=>{$i=Math.max($i,s)});const B0=new t0(16776176,.75);Fe.add(B0);const On=new Qm(16772565,.85);On.position.set(12,28,16);On.castShadow=!0;On.shadow.mapSize.width=1024;On.shadow.mapSize.height=1024;On.shadow.bias=-.001;Fe.add(On);const rr=new i0,ao=new n0,cc=new p0(Fe),hc=new m0(Fe),oo=new g0(Fe),z0=new x0(Fe),G0=new v0(Fe),H0=new _0(Fe),V0=new y0(Si,Fe,St),lo=new D0;Tt.on("lightning_flash",()=>{V0.flashLightning()});let en;const Qe=new L0({scene:Fe,collision:ao,inkSplash:oo}),es=new URLSearchParams(window.location.search);let Ni=nr.spawn.x,is=nr.spawn.y,qs=!1;const ia=parseInt(es.get("chapter")||"0",10);if(ia>=1&&ia<=6){const s=Ys[ia-1];Ni=s.spawnX,is=s.spawnY,qs=s.dash}else es.get("act")==="2"?(Ni=105,is=17.5,qs=!0):(es.get("act")==="3"||es.get("boss")==="1")&&(Ni=255,is=50,qs=!0);const At=new f0({scene:Fe,collision:ao,input:rr,afterimages:cc,ripples:hc,inkSplash:oo,loop:null,spawnX:Ni,spawnY:is});At.hasInkStepUnlocked=qs;let Nn=Ni>=244?53.5:is+2.5;St.position.x=Ni>=244?259:Ni;St.position.y=Nn;St.position.z=Ni>=244?27.5:z.CAMERA.distanceZ;const W0=new I0(s=>{At.aabb.x=s.spawnX,At.aabb.y=s.spawnY,At.velocity.x=0,At.velocity.y=0,At.hasInkStepUnlocked=s.dash,At.setCheckpoint(s.spawnX,s.spawnY),At.health=At.maxHealth;const t=s.spawnX>=244;Nn=t?53.5:s.spawnY+2.5,St.position.x=t?259:s.spawnX,St.position.y=Nn,St.position.z=t?27.5:z.CAMERA.distanceZ});new U0;new k0;let ns=es.get("cam")==="3d"?1:0;window.addEventListener("keydown",s=>{s.code==="KeyE"?(Qe.paintInkBridge(At.aabb.x,At.aabb.y,At.facing),Tt.emit("camera_shake",{amount:.14})):s.code==="KeyF"?(Qe.triggerBellResonance(At),Tt.emit("camera_shake",{amount:.32})):s.code==="KeyV"&&(ns=(ns+1)%3)});window.addEventListener("resize",()=>{St.aspect=window.innerWidth/window.innerHeight,St.updateProjectionMatrix(),Si.setSize(window.innerWidth,window.innerHeight),Si.setPixelRatio(Math.min(window.devicePixelRatio,2))});document.addEventListener("visibilitychange",()=>{document.hidden?(en.pause(),rr.onBlur()):en.resume()});function X0(s){rr.update(s),ao.update(s),At.fixedUpdate(s),Qe.fixedUpdate(s,At),z0.update(s,At.aabb.x,At.aabb.y),G0.update(s,At.aabb.x,At.aabb.y),lo.update(s,At.aabb.x),W0.update(At),_e.checkCollisions({onPlayerHitEnemy:(t,e)=>{At.combat.onHitEnemy(e)},onEnemyHitPlayer:(t,e)=>{At.combat.takeDamage(t.damage,t.owner.aabb.x)},onParrySuccess:(t,e,i)=>{At.combat.onParrySuccess(t,i)}}),cc.update(s),hc.update(s),oo.update(s),At.aabb.x>=244?Nn=53.5:At.coyoteTimer>0&&(Nn=At.aabb.y+2.5),rr.postStep()}function Y0(s){if(At.render(s),Qe.render(s),At.aabb.x>=244&&ns===0)St.position.x+=(259-St.position.x)*.08,St.position.y+=(53.5-St.position.y)*.08,St.position.z+=(27.5-St.position.z)*.08,St.rotation.y+=(0-St.rotation.y)*.08,St.rotation.x+=(-We.degToRad(z.CAMERA.tiltDeg)-St.rotation.x)*.08;else if(ns===1){const e=At.aabb.x-At.facing*4.2,i=At.aabb.y+3.2,n=14.5;St.position.x+=(e-St.position.x)*.08,St.position.y+=(i-St.position.y)*.08,St.position.z+=(n-St.position.z)*.08,St.rotation.y+=(-At.facing*.34-St.rotation.y)*.08,St.rotation.x+=(-.12-St.rotation.x)*.08}else if(ns===2){const e=At.aabb.x+At.facing*1.4,i=At.aabb.y+1.6,n=14;St.position.x+=(e-St.position.x)*.09,St.position.y+=(i-St.position.y)*.08,St.position.z+=(n-St.position.z)*.08,St.rotation.y+=(0-St.rotation.y)*.08,St.rotation.x+=(-.06-St.rotation.x)*.08}else{const e=At.aabb.x+At.facing*z.CAMERA.lookAhead,i=e-St.position.x;Math.abs(i)>z.CAMERA.horizontalDeadzone&&(St.position.x+=(e-St.position.x)*.08),St.position.y+=(Nn-St.position.y)*.045,St.position.z+=(z.CAMERA.distanceZ-St.position.z)*.08,St.rotation.y+=(0-St.rotation.y)*.08,St.rotation.x+=(-We.degToRad(z.CAMERA.tiltDeg)-St.rotation.x)*.08}if(H0.update(St.position.x,St.position.y),$i>.001?(St.position.x+=(Math.random()-.5)*$i,St.position.y+=(Math.random()-.5)*$i,$i*=Math.exp(-8*(1/60))):$i=0,Si.render(Fe,St),Sl){let e="Act I: The Awakening Mist";At.aabb.x>=110&&At.aabb.x<230?e="Act II: The Bamboo Ravine":At.aabb.x>=230&&(e="Act III: The Torii Plateau");const i="● ".repeat(At.health)+"○ ".repeat(Math.max(0,z.COMBAT.maxHealth-At.health)),n=Qe.enemies.filter(a=>!a.isDead).length,r=Qe.boss&&At.aabb.x>=235?`
      <div style="margin-top:4px; padding-top:4px; border-top:1px solid rgba(255,255,255,0.2);">
        <strong style="color:#ffd43b;">BOSS: Kurogane</strong> (Phase ${Qe.boss.phase})<br>
        HP: <span style="color:#b8292f; font-weight:bold;">${Qe.boss.hp}/40</span> |
        Status: <span style="color:${Qe.boss.isVulnerable?"#ff6b6b; font-weight:bold;":"#aaa;"}">${Qe.boss.isVulnerable?"VULNERABLE (×2 Weak Point)":"Armored"}</span>
      </div>
    `:"";Sl.innerHTML=`
      <strong>KURO: Kiri-no-Saka [${e}]</strong><br>
      HP: <span style="color:#b8292f; font-weight:bold; font-size:16px;">${i}</span> (${At.health}/${z.COMBAT.maxHealth})<br>
      State: <span style="color:#ffd43b; font-weight:bold;">${At.fsm.currentStateName}</span> | Ink Step: ${At.hasInkStepUnlocked?'<span style="color:#4dabf7;">UNLOCKED</span>':"Locked"}<br>
      Pos: (${At.aabb.x.toFixed(1)}, ${At.aabb.y.toFixed(1)}) | Enemies Alive: ${n}/${Qe.enemies.length}<br>
      ${r}
      <small style="color:#aaa;">
        A/D: Move | Space: Jump | J / L-Click: Katana | L / R-Click: Parry<br>
        Shift/K: Ink Step (Unlocked at Shrine x:57) | ESC: Pause Menu<br>
        Bamboo: Bounce & Jump to Launch | Lanterns: Touch to Swing, Jump to Release
      </small>
    `}}en=new e0({onFixedUpdate:X0,onRender:Y0});At.loop=en;At.combat.loop=en;new N0(en,lo);const q0=window.location.search.includes("skipIntro")||window.location.search.includes("debug");q0||new F0(lo,()=>{console.log("Intro complete.")});en.start();console.log("KURO: Complete vertical slice active.");
