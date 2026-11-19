(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qr="169",_c=0,bo=1,yc=2,Ah=1,Ch=2,gi=3,Oi=0,ke=1,se=2,Ni=0,En=1,Mo=2,So=3,wo=4,bc=5,Ji=100,Mc=101,Sc=102,wc=103,Tc=104,Ec=200,Ac=201,Cc=202,Rc=203,ar=204,rr=205,Pc=206,Lc=207,Dc=208,Ic=209,Uc=210,kc=211,Nc=212,Fc=213,Oc=214,or=0,hr=1,cr=2,Pn=3,lr=4,ur=5,dr=6,fr=7,Rh=0,Bc=1,Gc=2,Fi=0,zc=1,Hc=2,Vc=3,Wc=4,Xc=5,Yc=6,qc=7,Ph=300,Ln=301,Dn=302,pr=303,mr=304,aa=306,gr=1e3,Qi=1001,xr=1002,Je=1003,Kc=1004,fs=1005,ei=1006,xa=1007,tn=1008,Mi=1009,Lh=1010,Dh=1011,as=1012,Kr=1013,en=1014,xi=1015,hs=1016,jr=1017,Jr=1018,In=1020,Ih=35902,Uh=1021,kh=1022,ni=1023,Nh=1024,Fh=1025,An=1026,Un=1027,Oh=1028,Zr=1029,Bh=1030,$r=1031,Qr=1033,Gs=33776,zs=33777,Hs=33778,Vs=33779,vr=35840,_r=35841,yr=35842,br=35843,Mr=36196,Sr=37492,wr=37496,Tr=37808,Er=37809,Ar=37810,Cr=37811,Rr=37812,Pr=37813,Lr=37814,Dr=37815,Ir=37816,Ur=37817,kr=37818,Nr=37819,Fr=37820,Or=37821,Ws=36492,Br=36494,Gr=36495,Gh=36283,zr=36284,Hr=36285,Vr=36286,jc=3200,Jc=3201,zh=0,Zc=1,ki="",ai="srgb",Bi="srgb-linear",to="display-p3",ra="display-p3-linear",qs="linear",de="srgb",Ks="rec709",js="p3",on=7680,To=519,$c=512,Qc=513,tl=514,Hh=515,el=516,il=517,nl=518,sl=519,Wr=35044,Eo="300 es",vi=2e3,Js=2001;class On{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const a=n.indexOf(e);a!==-1&&n.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let a=0,r=n.length;a<r;a++)n[a].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ao=1234567;const Qn=Math.PI/180,rs=180/Math.PI;function yi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Re[s&255]+Re[s>>8&255]+Re[s>>16&255]+Re[s>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]).toLowerCase()}function Ae(s,t,e){return Math.max(t,Math.min(e,s))}function eo(s,t){return(s%t+t)%t}function al(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function rl(s,t,e){return s!==t?(e-s)/(t-s):0}function ts(s,t,e){return(1-e)*s+e*t}function ol(s,t,e,i){return ts(s,t,1-Math.exp(-e*i))}function hl(s,t=1){return t-Math.abs(eo(s,t*2)-t)}function cl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ll(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function ul(s,t){return s+Math.floor(Math.random()*(t-s+1))}function dl(s,t){return s+Math.random()*(t-s)}function fl(s){return s*(.5-Math.random())}function pl(s){s!==void 0&&(Ao=s);let t=Ao+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ml(s){return s*Qn}function gl(s){return s*rs}function xl(s){return(s&s-1)===0&&s!==0}function vl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function _l(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yl(s,t,e,i,n){const a=Math.cos,r=Math.sin,o=a(e/2),h=r(e/2),l=a((t+i)/2),c=r((t+i)/2),u=a((t-i)/2),f=r((t-i)/2),d=a((i-t)/2),g=r((i-t)/2);switch(n){case"XYX":s.set(o*c,h*u,h*f,o*l);break;case"YZY":s.set(h*f,o*c,h*u,o*l);break;case"ZXZ":s.set(h*u,h*f,o*c,o*l);break;case"XZX":s.set(o*c,h*g,h*d,o*l);break;case"YXY":s.set(h*d,o*c,h*g,o*l);break;case"ZYZ":s.set(h*g,h*d,o*c,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ii(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ue={DEG2RAD:Qn,RAD2DEG:rs,generateUUID:yi,clamp:Ae,euclideanModulo:eo,mapLinear:al,inverseLerp:rl,lerp:ts,damp:ol,pingpong:hl,smoothstep:cl,smootherstep:ll,randInt:ul,randFloat:dl,randFloatSpread:fl,seededRandom:pl,degToRad:ml,radToDeg:gl,isPowerOfTwo:xl,ceilPowerOfTwo:vl,floorPowerOfTwo:_l,setQuaternionFromProperEuler:yl,normalize:ne,denormalize:ii};class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*n+t.x,this.y=a*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,i,n,a,r,o,h,l){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,h,l)}set(t,e,i,n,a,r,o,h,l){const c=this.elements;return c[0]=t,c[1]=n,c[2]=o,c[3]=e,c[4]=a,c[5]=h,c[6]=i,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[3],h=i[6],l=i[1],c=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=n[0],p=n[3],m=n[6],y=n[1],_=n[4],b=n[7],P=n[2],E=n[5],T=n[8];return a[0]=r*x+o*y+h*P,a[3]=r*p+o*_+h*E,a[6]=r*m+o*b+h*T,a[1]=l*x+c*y+u*P,a[4]=l*p+c*_+u*E,a[7]=l*m+c*b+u*T,a[2]=f*x+d*y+g*P,a[5]=f*p+d*_+g*E,a[8]=f*m+d*b+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],h=t[6],l=t[7],c=t[8];return e*r*c-e*o*l-i*a*c+i*o*h+n*a*l-n*r*h}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],h=t[6],l=t[7],c=t[8],u=c*r-o*l,f=o*h-c*a,d=l*a-r*h,g=e*u+i*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(n*l-c*i)*x,t[2]=(o*i-n*r)*x,t[3]=f*x,t[4]=(c*e-n*h)*x,t[5]=(n*a-o*e)*x,t[6]=d*x,t[7]=(i*h-l*e)*x,t[8]=(r*e-i*a)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,r,o){const h=Math.cos(a),l=Math.sin(a);return this.set(i*h,i*l,-i*(h*r+l*o)+r+t,-n*l,n*h,-n*(-l*r+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(va.makeScale(t,e)),this}rotate(t){return this.premultiply(va.makeRotation(-t)),this}translate(t,e){return this.premultiply(va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const va=new Bt;function Vh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bl(){const s=Zs("canvas");return s.style.display="block",s}const Co={};function Xs(s){s in Co||(Co[s]=!0,console.warn(s))}function Ml(s,t,e){return new Promise(function(i,n){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}function Sl(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wl(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ro=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Po=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hn={[Bi]:{transfer:qs,primaries:Ks,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[ai]:{transfer:de,primaries:Ks,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ra]:{transfer:qs,primaries:js,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Po),fromReference:s=>s.applyMatrix3(Ro)},[to]:{transfer:de,primaries:js,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Po),fromReference:s=>s.applyMatrix3(Ro).convertLinearToSRGB()}},Tl=new Set([Bi,ra]),ee={enabled:!0,_workingColorSpace:Bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Tl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=Hn[t].toReference,n=Hn[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Hn[s].primaries},getTransfer:function(s){return s===ki?qs:Hn[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(Hn[t].luminanceCoefficients)}};function Cn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _a(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hn;class El{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hn===void 0&&(hn=Zs("canvas")),hn.width=t.width,hn.height=t.height;const i=hn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=hn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let r=0;r<a.length;r++)a[r]=Cn(a[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Cn(e[i]/255)*255):e[i]=Cn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Al=0;class Wh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Al++}),this.uuid=yi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?a.push(ya(n[r].image)):a.push(ya(n[r]))}else a=ya(n);i.url=a}return e||(t.images[this.uuid]=i),i}}function ya(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?El.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cl=0;class Ne extends On{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,i=Qi,n=Qi,a=ei,r=tn,o=ni,h=Mi,l=Ne.DEFAULT_ANISOTROPY,c=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cl++}),this.uuid=yi(),this.name="",this.source=new Wh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=h,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ph)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gr:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case xr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gr:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case xr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Ph;Ne.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,i=0,n=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a;const h=t.elements,l=h[0],c=h[4],u=h[8],f=h[1],d=h[5],g=h[9],x=h[2],p=h[6],m=h[10];if(Math.abs(c-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,b=(d+1)/2,P=(m+1)/2,E=(c+f)/4,T=(u+x)/4,R=(g+p)/4;return _>b&&_>P?_<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(_),n=E/i,a=T/i):b>P?b<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(b),i=E/n,a=R/n):P<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(P),i=T/a,n=R/a),this.set(i,n,a,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-c)*(f-c));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-x)/y,this.z=(f-c)/y,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rl extends On{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Ne(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nn extends Rl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Xh extends Ne{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Je,this.minFilter=Je,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pl extends Ne{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Je,this.minFilter=Je,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,r,o){let h=i[n+0],l=i[n+1],c=i[n+2],u=i[n+3];const f=a[r+0],d=a[r+1],g=a[r+2],x=a[r+3];if(o===0){t[e+0]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||h!==f||l!==d||c!==g){let p=1-o;const m=h*f+l*d+c*g+u*x,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const P=Math.sqrt(_),E=Math.atan2(P,m*y);p=Math.sin(p*E)/P,o=Math.sin(o*E)/P}const b=o*y;if(h=h*p+f*b,l=l*p+d*b,c=c*p+g*b,u=u*p+x*b,p===1-o){const P=1/Math.sqrt(h*h+l*l+c*c+u*u);h*=P,l*=P,c*=P,u*=P}}t[e]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,a,r){const o=i[n],h=i[n+1],l=i[n+2],c=i[n+3],u=a[r],f=a[r+1],d=a[r+2],g=a[r+3];return t[e]=o*g+c*u+h*d-l*f,t[e+1]=h*g+c*f+l*u-o*d,t[e+2]=l*g+c*d+o*f-h*u,t[e+3]=c*g-o*u-h*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,a=t._z,r=t._order,o=Math.cos,h=Math.sin,l=o(i/2),c=o(n/2),u=o(a/2),f=h(i/2),d=h(n/2),g=h(a/2);switch(r){case"XYZ":this._x=f*c*u+l*d*g,this._y=l*d*u-f*c*g,this._z=l*c*g+f*d*u,this._w=l*c*u-f*d*g;break;case"YXZ":this._x=f*c*u+l*d*g,this._y=l*d*u-f*c*g,this._z=l*c*g-f*d*u,this._w=l*c*u+f*d*g;break;case"ZXY":this._x=f*c*u-l*d*g,this._y=l*d*u+f*c*g,this._z=l*c*g+f*d*u,this._w=l*c*u-f*d*g;break;case"ZYX":this._x=f*c*u-l*d*g,this._y=l*d*u+f*c*g,this._z=l*c*g-f*d*u,this._w=l*c*u+f*d*g;break;case"YZX":this._x=f*c*u+l*d*g,this._y=l*d*u+f*c*g,this._z=l*c*g-f*d*u,this._w=l*c*u-f*d*g;break;case"XZY":this._x=f*c*u-l*d*g,this._y=l*d*u-f*c*g,this._z=l*c*g+f*d*u,this._w=l*c*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],a=e[8],r=e[1],o=e[5],h=e[9],l=e[2],c=e[6],u=e[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(c-h)*d,this._y=(a-l)*d,this._z=(r-n)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(c-h)/d,this._x=.25*d,this._y=(n+r)/d,this._z=(a+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(a-l)/d,this._x=(n+r)/d,this._y=.25*d,this._z=(h+c)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(r-n)/d,this._x=(a+l)/d,this._y=(h+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,a=t._z,r=t._w,o=e._x,h=e._y,l=e._z,c=e._w;return this._x=i*c+r*o+n*l-a*h,this._y=n*c+r*h+a*o-i*l,this._z=a*c+r*l+i*h-n*o,this._w=r*c-i*o-n*h-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,a=this._z,r=this._w;let o=r*t._w+i*t._x+n*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=n,this._z=a,this;const h=1-o*o;if(h<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*i+e*this._x,this._y=d*n+e*this._y,this._z=d*a+e*this._z,this.normalize(),this}const l=Math.sqrt(h),c=Math.atan2(l,o),u=Math.sin((1-e)*c)/l,f=Math.sin(e*c)/l;return this._w=r*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=a*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,a=t.x,r=t.y,o=t.z,h=t.w,l=2*(r*n-o*i),c=2*(o*e-a*n),u=2*(a*i-r*e);return this.x=e+h*l+r*u-o*c,this.y=i+h*c+o*l-a*u,this.z=n+h*u+a*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,a=t.z,r=e.x,o=e.y,h=e.z;return this.x=n*h-a*o,this.y=a*r-i*h,this.z=i*o-n*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ba.copy(this).projectOnVector(t),this.sub(ba)}reflect(t){return this.sub(ba.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ba=new C,Lo=new cs;class ls{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,$e):$e.fromBufferAttribute(a,r),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ps.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ps.copy(i.boundingBox)),ps.applyMatrix4(t.matrixWorld),this.union(ps)}const n=t.children;for(let a=0,r=n.length;a<r;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vn),ms.subVectors(this.max,Vn),cn.subVectors(t.a,Vn),ln.subVectors(t.b,Vn),un.subVectors(t.c,Vn),Ai.subVectors(ln,cn),Ci.subVectors(un,ln),zi.subVectors(cn,un);let e=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-zi.z,zi.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,zi.z,0,-zi.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-zi.y,zi.x,0];return!Ma(e,cn,ln,un,ms)||(e=[1,0,0,0,1,0,0,0,1],!Ma(e,cn,ln,un,ms))?!1:(gs.crossVectors(Ai,Ci),e=[gs.x,gs.y,gs.z],Ma(e,cn,ln,un,ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ui=[new C,new C,new C,new C,new C,new C,new C,new C],$e=new C,ps=new ls,cn=new C,ln=new C,un=new C,Ai=new C,Ci=new C,zi=new C,Vn=new C,ms=new C,gs=new C,Hi=new C;function Ma(s,t,e,i,n){for(let a=0,r=s.length-3;a<=r;a+=3){Hi.fromArray(s,a);const o=n.x*Math.abs(Hi.x)+n.y*Math.abs(Hi.y)+n.z*Math.abs(Hi.z),h=t.dot(Hi),l=e.dot(Hi),c=i.dot(Hi);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>o)return!1}return!0}const Ll=new ls,Wn=new C,Sa=new C;class oa{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ll.setFromPoints(t).getCenter(i);let n=0;for(let a=0,r=t.length;a<r;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wn.subVectors(t,this.center);const e=Wn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Wn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wn.copy(t.center).add(Sa)),this.expandByPoint(Wn.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new C,wa=new C,xs=new C,Ri=new C,Ta=new C,vs=new C,Ea=new C;class Yh{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){wa.copy(t).add(e).multiplyScalar(.5),xs.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(wa);const a=t.distanceTo(e)*.5,r=-this.direction.dot(xs),o=Ri.dot(this.direction),h=-Ri.dot(xs),l=Ri.lengthSq(),c=Math.abs(1-r*r);let u,f,d,g;if(c>0)if(u=r*h-o,f=r*o-h,g=a*c,u>=0)if(f>=-g)if(f<=g){const x=1/c;u*=x,f*=x,d=u*(u+r*f+2*o)+f*(r*u+f+2*h)+l}else f=a,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*h)+l;else f=-a,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*h)+l;else f<=-g?(u=Math.max(0,-(-r*a+o)),f=u>0?-a:Math.min(Math.max(-a,-h),a),d=-u*u+f*(f+2*h)+l):f<=g?(u=0,f=Math.min(Math.max(-a,-h),a),d=f*(f+2*h)+l):(u=Math.max(0,-(r*a+o)),f=u>0?a:Math.min(Math.max(-a,-h),a),d=-u*u+f*(f+2*h)+l);else f=r>0?-a:a,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(wa).addScaledVector(xs,f),d}intersectSphere(t,e){di.subVectors(t.center,this.origin);const i=di.dot(this.direction),n=di.dot(di)-i*i,a=t.radius*t.radius;if(n>a)return null;const r=Math.sqrt(a-n),o=i-r,h=i+r;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,r,o,h;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,n=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,n=(t.min.x-f.x)*l),c>=0?(a=(t.min.y-f.y)*c,r=(t.max.y-f.y)*c):(a=(t.max.y-f.y)*c,r=(t.min.y-f.y)*c),i>r||a>n||((a>i||isNaN(i))&&(i=a),(r<n||isNaN(n))&&(n=r),u>=0?(o=(t.min.z-f.z)*u,h=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,h=(t.min.z-f.z)*u),i>h||o>n)||((o>i||i!==i)&&(i=o),(h<n||n!==n)&&(n=h),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,i,n,a){Ta.subVectors(e,t),vs.subVectors(i,t),Ea.crossVectors(Ta,vs);let r=this.direction.dot(Ea),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Ri.subVectors(this.origin,t);const h=o*this.direction.dot(vs.crossVectors(Ri,vs));if(h<0)return null;const l=o*this.direction.dot(Ta.cross(Ri));if(l<0||h+l>r)return null;const c=-o*Ri.dot(Ea);return c<0?null:this.at(c/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,i,n,a,r,o,h,l,c,u,f,d,g,x,p){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,h,l,c,u,f,d,g,x,p)}set(t,e,i,n,a,r,o,h,l,c,u,f,d,g,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=a,m[5]=r,m[9]=o,m[13]=h,m[2]=l,m[6]=c,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/dn.setFromMatrixColumn(t,0).length(),a=1/dn.setFromMatrixColumn(t,1).length(),r=1/dn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),h=Math.cos(n),l=Math.sin(n),c=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const f=r*c,d=r*u,g=o*c,x=o*u;e[0]=h*c,e[4]=-h*u,e[8]=l,e[1]=d+g*l,e[5]=f-x*l,e[9]=-o*h,e[2]=x-f*l,e[6]=g+d*l,e[10]=r*h}else if(t.order==="YXZ"){const f=h*c,d=h*u,g=l*c,x=l*u;e[0]=f+x*o,e[4]=g*o-d,e[8]=r*l,e[1]=r*u,e[5]=r*c,e[9]=-o,e[2]=d*o-g,e[6]=x+f*o,e[10]=r*h}else if(t.order==="ZXY"){const f=h*c,d=h*u,g=l*c,x=l*u;e[0]=f-x*o,e[4]=-r*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=r*c,e[9]=x-f*o,e[2]=-r*l,e[6]=o,e[10]=r*h}else if(t.order==="ZYX"){const f=r*c,d=r*u,g=o*c,x=o*u;e[0]=h*c,e[4]=g*l-d,e[8]=f*l+x,e[1]=h*u,e[5]=x*l+f,e[9]=d*l-g,e[2]=-l,e[6]=o*h,e[10]=r*h}else if(t.order==="YZX"){const f=r*h,d=r*l,g=o*h,x=o*l;e[0]=h*c,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=r*c,e[9]=-o*c,e[2]=-l*c,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){const f=r*h,d=r*l,g=o*h,x=o*l;e[0]=h*c,e[4]=-u,e[8]=l*c,e[1]=f*u+x,e[5]=r*c,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*c,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dl,t,Il)}lookAt(t,e,i){const n=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Pi.crossVectors(i,Ve),Pi.lengthSq()===0&&(Math.abs(i.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Pi.crossVectors(i,Ve)),Pi.normalize(),_s.crossVectors(Ve,Pi),n[0]=Pi.x,n[4]=_s.x,n[8]=Ve.x,n[1]=Pi.y,n[5]=_s.y,n[9]=Ve.y,n[2]=Pi.z,n[6]=_s.z,n[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[4],h=i[8],l=i[12],c=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],p=i[10],m=i[14],y=i[3],_=i[7],b=i[11],P=i[15],E=n[0],T=n[4],R=n[8],N=n[12],v=n[1],S=n[5],F=n[9],O=n[13],W=n[2],K=n[6],V=n[10],Z=n[14],q=n[3],ut=n[7],ht=n[11],bt=n[15];return a[0]=r*E+o*v+h*W+l*q,a[4]=r*T+o*S+h*K+l*ut,a[8]=r*R+o*F+h*V+l*ht,a[12]=r*N+o*O+h*Z+l*bt,a[1]=c*E+u*v+f*W+d*q,a[5]=c*T+u*S+f*K+d*ut,a[9]=c*R+u*F+f*V+d*ht,a[13]=c*N+u*O+f*Z+d*bt,a[2]=g*E+x*v+p*W+m*q,a[6]=g*T+x*S+p*K+m*ut,a[10]=g*R+x*F+p*V+m*ht,a[14]=g*N+x*O+p*Z+m*bt,a[3]=y*E+_*v+b*W+P*q,a[7]=y*T+_*S+b*K+P*ut,a[11]=y*R+_*F+b*V+P*ht,a[15]=y*N+_*O+b*Z+P*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],r=t[1],o=t[5],h=t[9],l=t[13],c=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+a*h*u-n*l*u-a*o*f+i*l*f+n*o*d-i*h*d)+x*(+e*h*d-e*l*f+a*r*f-n*r*d+n*l*c-a*h*c)+p*(+e*l*u-e*o*d-a*r*u+i*r*d+a*o*c-i*l*c)+m*(-n*o*c-e*h*u+e*o*f+n*r*u-i*r*f+i*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],h=t[6],l=t[7],c=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],p=t[14],m=t[15],y=u*p*l-x*f*l+x*h*d-o*p*d-u*h*m+o*f*m,_=g*f*l-c*p*l-g*h*d+r*p*d+c*h*m-r*f*m,b=c*x*l-g*u*l+g*o*d-r*x*d-c*o*m+r*u*m,P=g*u*h-c*x*h-g*o*f+r*x*f+c*o*p-r*u*p,E=e*y+i*_+n*b+a*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=y*T,t[1]=(x*f*a-u*p*a-x*n*d+i*p*d+u*n*m-i*f*m)*T,t[2]=(o*p*a-x*h*a+x*n*l-i*p*l-o*n*m+i*h*m)*T,t[3]=(u*h*a-o*f*a-u*n*l+i*f*l+o*n*d-i*h*d)*T,t[4]=_*T,t[5]=(c*p*a-g*f*a+g*n*d-e*p*d-c*n*m+e*f*m)*T,t[6]=(g*h*a-r*p*a-g*n*l+e*p*l+r*n*m-e*h*m)*T,t[7]=(r*f*a-c*h*a+c*n*l-e*f*l-r*n*d+e*h*d)*T,t[8]=b*T,t[9]=(g*u*a-c*x*a-g*i*d+e*x*d+c*i*m-e*u*m)*T,t[10]=(r*x*a-g*o*a+g*i*l-e*x*l-r*i*m+e*o*m)*T,t[11]=(c*o*a-r*u*a-c*i*l+e*u*l+r*i*d-e*o*d)*T,t[12]=P*T,t[13]=(c*x*n-g*u*n+g*i*f-e*x*f-c*i*p+e*u*p)*T,t[14]=(g*o*n-r*x*n-g*i*h+e*x*h+r*i*p-e*o*p)*T,t[15]=(r*u*n-c*o*n+c*i*h-e*u*h-r*i*f+e*o*f)*T,this}scale(t){const e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),a=1-i,r=t.x,o=t.y,h=t.z,l=a*r,c=a*o;return this.set(l*r+i,l*o-n*h,l*h+n*o,0,l*o+n*h,c*o+i,c*h-n*r,0,l*h-n*o,c*h+n*r,a*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,r){return this.set(1,i,a,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,a=e._x,r=e._y,o=e._z,h=e._w,l=a+a,c=r+r,u=o+o,f=a*l,d=a*c,g=a*u,x=r*c,p=r*u,m=o*u,y=h*l,_=h*c,b=h*u,P=i.x,E=i.y,T=i.z;return n[0]=(1-(x+m))*P,n[1]=(d+b)*P,n[2]=(g-_)*P,n[3]=0,n[4]=(d-b)*E,n[5]=(1-(f+m))*E,n[6]=(p+y)*E,n[7]=0,n[8]=(g+_)*T,n[9]=(p-y)*T,n[10]=(1-(f+x))*T,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let a=dn.set(n[0],n[1],n[2]).length();const r=dn.set(n[4],n[5],n[6]).length(),o=dn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],Qe.copy(this);const l=1/a,c=1/r,u=1/o;return Qe.elements[0]*=l,Qe.elements[1]*=l,Qe.elements[2]*=l,Qe.elements[4]*=c,Qe.elements[5]*=c,Qe.elements[6]*=c,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),i.x=a,i.y=r,i.z=o,this}makePerspective(t,e,i,n,a,r,o=vi){const h=this.elements,l=2*a/(e-t),c=2*a/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n);let d,g;if(o===vi)d=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===Js)d=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=c,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=d,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,n,a,r,o=vi){const h=this.elements,l=1/(e-t),c=1/(i-n),u=1/(r-a),f=(e+t)*l,d=(i+n)*c;let g,x;if(o===vi)g=(r+a)*u,x=-2*u;else if(o===Js)g=a*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=2*l,h[4]=0,h[8]=0,h[12]=-f,h[1]=0,h[5]=2*c,h[9]=0,h[13]=-d,h[2]=0,h[6]=0,h[10]=x,h[14]=-g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const dn=new C,Qe=new ce,Dl=new C(0,0,0),Il=new C(1,1,1),Pi=new C,_s=new C,Ve=new C,Do=new ce,Io=new cs;class oi{constructor(t=0,e=0,i=0,n=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,a=n[0],r=n[4],o=n[8],h=n[1],l=n[5],c=n[9],u=n[2],f=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ae(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Do.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Do,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Io.setFromEuler(this),this.setFromQuaternion(Io,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class qh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ul=0;const Uo=new C,fn=new cs,fi=new ce,ys=new C,Xn=new C,kl=new C,Nl=new cs,ko=new C(1,0,0),No=new C(0,1,0),Fo=new C(0,0,1),Oo={type:"added"},Fl={type:"removed"},pn={type:"childadded",child:null},Aa={type:"childremoved",child:null};class Te extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new C,e=new oi,i=new cs,n=new C(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ce},normalMatrix:{value:new Bt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fn.setFromAxisAngle(t,e),this.quaternion.multiply(fn),this}rotateOnWorldAxis(t,e){return fn.setFromAxisAngle(t,e),this.quaternion.premultiply(fn),this}rotateX(t){return this.rotateOnAxis(ko,t)}rotateY(t){return this.rotateOnAxis(No,t)}rotateZ(t){return this.rotateOnAxis(Fo,t)}translateOnAxis(t,e){return Uo.copy(t).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ko,t)}translateY(t){return this.translateOnAxis(No,t)}translateZ(t){return this.translateOnAxis(Fo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ys.copy(t):ys.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Xn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Xn,ys,this.up):fi.lookAt(ys,Xn,this.up),this.quaternion.setFromRotationMatrix(fi),n&&(fi.extractRotation(n.matrixWorld),fn.setFromRotationMatrix(fi),this.quaternion.premultiply(fn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oo),pn.child=t,this.dispatchEvent(pn),pn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fl),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oo),pn.child=t,this.dispatchEvent(pn),pn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xn,t,kl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xn,Nl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){const u=h[l];a(t.shapes,u)}else a(t.shapes,h)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,l=this.material.length;h<l;h++)o.push(a(t.materials,this.material[h]));n.material=o}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];n.animations.push(a(t.animations,h))}}if(e){const o=r(t.geometries),h=r(t.materials),l=r(t.textures),c=r(t.images),u=r(t.shapes),f=r(t.skeletons),d=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(o){const h=[];for(const l in o){const c=o[l];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Te.DEFAULT_UP=new C(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new C,pi=new C,Ca=new C,mi=new C,mn=new C,gn=new C,Bo=new C,Ra=new C,Pa=new C,La=new C,Da=new oe,Ia=new oe,Ua=new oe;class je{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ti.subVectors(t,e),n.cross(ti);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){ti.subVectors(n,e),pi.subVectors(i,e),Ca.subVectors(t,e);const r=ti.dot(ti),o=ti.dot(pi),h=ti.dot(Ca),l=pi.dot(pi),c=pi.dot(Ca),u=r*l-o*o;if(u===0)return a.set(0,0,0),null;const f=1/u,d=(l*h-o*c)*f,g=(r*c-o*h)*f;return a.set(1-d-g,g,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,i,n,a,r,o,h){return this.getBarycoord(t,e,i,n,mi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,mi.x),h.addScaledVector(r,mi.y),h.addScaledVector(o,mi.z),h)}static getInterpolatedAttribute(t,e,i,n,a,r){return Da.setScalar(0),Ia.setScalar(0),Ua.setScalar(0),Da.fromBufferAttribute(t,e),Ia.fromBufferAttribute(t,i),Ua.fromBufferAttribute(t,n),r.setScalar(0),r.addScaledVector(Da,a.x),r.addScaledVector(Ia,a.y),r.addScaledVector(Ua,a.z),r}static isFrontFacing(t,e,i,n){return ti.subVectors(i,e),pi.subVectors(t,e),ti.cross(pi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),ti.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,a){return je.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,a=this.c;let r,o;mn.subVectors(n,i),gn.subVectors(a,i),Ra.subVectors(t,i);const h=mn.dot(Ra),l=gn.dot(Ra);if(h<=0&&l<=0)return e.copy(i);Pa.subVectors(t,n);const c=mn.dot(Pa),u=gn.dot(Pa);if(c>=0&&u<=c)return e.copy(n);const f=h*u-c*l;if(f<=0&&h>=0&&c<=0)return r=h/(h-c),e.copy(i).addScaledVector(mn,r);La.subVectors(t,a);const d=mn.dot(La),g=gn.dot(La);if(g>=0&&d<=g)return e.copy(a);const x=d*l-h*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(gn,o);const p=c*g-d*u;if(p<=0&&u-c>=0&&d-g>=0)return Bo.subVectors(a,n),o=(u-c)/(u-c+(d-g)),e.copy(n).addScaledVector(Bo,o);const m=1/(p+x+f);return r=x*m,o=f*m,e.copy(i).addScaledVector(mn,r).addScaledVector(gn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},bs={h:0,s:0,l:0};function ka(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class st{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=ee.workingColorSpace){if(t=eo(t,1),e=Ae(e,0,1),i=Ae(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=ka(r,a,t+1/3),this.g=ka(r,a,t),this.b=ka(r,a,t-1/3)}return ee.toWorkingColorSpace(this,n),this}setStyle(t,e=ai){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ai){const i=Kh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ai){return ee.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Ae(Pe.r*255,0,255))*65536+Math.round(Ae(Pe.g*255,0,255))*256+Math.round(Ae(Pe.b*255,0,255))}getHexString(t=ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Pe.copy(this),e);const i=Pe.r,n=Pe.g,a=Pe.b,r=Math.max(i,n,a),o=Math.min(i,n,a);let h,l;const c=(o+r)/2;if(o===r)h=0,l=0;else{const u=r-o;switch(l=c<=.5?u/(r+o):u/(2-r-o),r){case i:h=(n-a)/u+(n<a?6:0);break;case n:h=(a-i)/u+2;break;case a:h=(i-n)/u+4;break}h/=6}return t.h=h,t.s=l,t.l=c,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=ai){ee.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,i=Pe.g,n=Pe.b;return t!==ai?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(bs);const i=ts(Li.h,bs.h,e),n=ts(Li.s,bs.s,e),a=ts(Li.l,bs.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new st;st.NAMES=Kh;let Ol=0;class an extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=En,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ar,this.blendDst=rr,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Pn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=To,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=on,this.stencilZFail=on,this.stencilZPass=on,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==En&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ar&&(i.blendSrc=this.blendSrc),this.blendDst!==rr&&(i.blendDst=this.blendDst),this.blendEquation!==Ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==To&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==on&&(i.stencilFail=this.stencilFail),this.stencilZFail!==on&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==on&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const r=[];for(const o in a){const h=a[o];delete h.metadata,r.push(h)}return r}if(e){const a=n(t.textures),r=n(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nt extends an{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new C,Ms=new _t;class Ce{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Wr,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ms.fromBufferAttribute(this,e),Ms.applyMatrix3(t),this.setXY(e,Ms.x,Ms.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ii(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array),a=ne(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wr&&(t.usage=this.usage),t}}class jh extends Ce{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Jh extends Ce{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Jt extends Ce{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Bl=0;const Ke=new ce,Na=new Te,xn=new C,We=new ls,Yn=new ls,Me=new C;class fe extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vh(t)?Jh:jh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Bt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,i){return Ke.makeTranslation(t,e,i),this.applyMatrix4(Ke),this}scale(t,e,i){return Ke.makeScale(t,e,i),this.applyMatrix4(Ke),this}lookAt(t){return Na.lookAt(t),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xn).negate(),this.translate(xn.x,xn.y,xn.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const a=e[i];We.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Yn.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(We.min,Yn.min),We.expandByPoint(Me),Me.addVectors(We.max,Yn.max),We.expandByPoint(Me)):(We.expandByPoint(Yn.min),We.expandByPoint(Yn.max))}We.getCenter(i);let n=0;for(let a=0,r=t.count;a<r;a++)Me.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(Me));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],h=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)Me.fromBufferAttribute(o,l),h&&(xn.fromBufferAttribute(t,l),Me.add(xn)),n=Math.max(n,i.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],h=[];for(let R=0;R<i.count;R++)o[R]=new C,h[R]=new C;const l=new C,c=new C,u=new C,f=new _t,d=new _t,g=new _t,x=new C,p=new C;function m(R,N,v){l.fromBufferAttribute(i,R),c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,v),f.fromBufferAttribute(a,R),d.fromBufferAttribute(a,N),g.fromBufferAttribute(a,v),c.sub(l),u.sub(l),d.sub(f),g.sub(f);const S=1/(d.x*g.y-g.x*d.y);isFinite(S)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(S),p.copy(u).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(S),o[R].add(x),o[N].add(x),o[v].add(x),h[R].add(p),h[N].add(p),h[v].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,N=y.length;R<N;++R){const v=y[R],S=v.start,F=v.count;for(let O=S,W=S+F;O<W;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const _=new C,b=new C,P=new C,E=new C;function T(R){P.fromBufferAttribute(n,R),E.copy(P);const N=o[R];_.copy(N),_.sub(P.multiplyScalar(P.dot(N))).normalize(),b.crossVectors(E,N);const S=b.dot(h[R])<0?-1:1;r.setXYZW(R,_.x,_.y,_.z,S)}for(let R=0,N=y.length;R<N;++R){const v=y[R],S=v.start,F=v.count;for(let O=S,W=S+F;O<W;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const n=new C,a=new C,r=new C,o=new C,h=new C,l=new C,c=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);n.fromBufferAttribute(e,g),a.fromBufferAttribute(e,x),r.fromBufferAttribute(e,p),c.subVectors(r,a),u.subVectors(n,a),c.cross(u),o.fromBufferAttribute(i,g),h.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),o.add(c),h.add(c),l.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,h.x,h.y,h.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)n.fromBufferAttribute(e,f+0),a.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),c.subVectors(r,a),u.subVectors(n,a),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,h){const l=o.array,c=o.itemSize,u=o.normalized,f=new l.constructor(h.length*c);let d=0,g=0;for(let x=0,p=h.length;x<p;x++){o.isInterleavedBufferAttribute?d=h[x]*o.data.stride+o.offset:d=h[x]*c;for(let m=0;m<c;m++)f[g++]=l[d++]}return new Ce(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fe,i=this.index.array,n=this.attributes;for(const o in n){const h=n[o],l=t(h,i);e.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const h=[],l=a[o];for(let c=0,u=l.length;c<u;c++){const f=l[c],d=t(f,i);h.push(d)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,h=r.length;o<h;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const h in i){const l=i[h];t.data.attributes[h]=l.toJSON(t.data)}const n={};let a=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],c=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];c.push(d.toJSON(t.data))}c.length>0&&(n[h]=c,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const l in n){const c=n[l];this.setAttribute(l,c.clone(e))}const a=t.morphAttributes;for(const l in a){const c=[],u=a[l];for(let f=0,d=u.length;f<d;f++)c.push(u[f].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,c=r.length;l<c;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Go=new ce,Vi=new Yh,Ss=new oa,zo=new C,ws=new C,Ts=new C,Es=new C,Fa=new C,As=new C,Ho=new C,Cs=new C;class k extends Te{constructor(t=new fe,e=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(a&&o){As.set(0,0,0);for(let h=0,l=a.length;h<l;h++){const c=o[h],u=a[h];c!==0&&(Fa.fromBufferAttribute(u,t),r?As.addScaledVector(Fa,c):As.addScaledVector(Fa.sub(e),c))}e.add(As)}return e}raycast(t,e){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ss.copy(i.boundingSphere),Ss.applyMatrix4(a),Vi.copy(t.ray).recast(t.near),!(Ss.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Ss,zo)===null||Vi.origin.distanceToSquared(zo)>(t.far-t.near)**2))&&(Go.copy(a).invert(),Vi.copy(t.ray).applyMatrix4(Go),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,i){let n;const a=this.geometry,r=this.material,o=a.index,h=a.attributes.position,l=a.attributes.uv,c=a.attributes.uv1,u=a.attributes.normal,f=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const p=f[g],m=r[p.materialIndex],y=Math.max(p.start,d.start),_=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let b=y,P=_;b<P;b+=3){const E=o.getX(b),T=o.getX(b+1),R=o.getX(b+2);n=Rs(this,m,t,i,l,c,u,E,T,R),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const y=o.getX(p),_=o.getX(p+1),b=o.getX(p+2);n=Rs(this,r,t,i,l,c,u,y,_,b),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(h!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const p=f[g],m=r[p.materialIndex],y=Math.max(p.start,d.start),_=Math.min(h.count,Math.min(p.start+p.count,d.start+d.count));for(let b=y,P=_;b<P;b+=3){const E=b,T=b+1,R=b+2;n=Rs(this,m,t,i,l,c,u,E,T,R),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,d.start),x=Math.min(h.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const y=p,_=p+1,b=p+2;n=Rs(this,r,t,i,l,c,u,y,_,b),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}}function Gl(s,t,e,i,n,a,r,o){let h;if(t.side===ke?h=i.intersectTriangle(r,a,n,!0,o):h=i.intersectTriangle(n,a,r,t.side===Oi,o),h===null)return null;Cs.copy(o),Cs.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Cs);return l<e.near||l>e.far?null:{distance:l,point:Cs.clone(),object:s}}function Rs(s,t,e,i,n,a,r,o,h,l){s.getVertexPosition(o,ws),s.getVertexPosition(h,Ts),s.getVertexPosition(l,Es);const c=Gl(s,t,e,i,ws,Ts,Es,Ho);if(c){const u=new C;je.getBarycoord(Ho,ws,Ts,Es,u),n&&(c.uv=je.getInterpolatedAttribute(n,o,h,l,u,new _t)),a&&(c.uv1=je.getInterpolatedAttribute(a,o,h,l,u,new _t)),r&&(c.normal=je.getInterpolatedAttribute(r,o,h,l,u,new C),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:h,c:l,normal:new C,materialIndex:0};je.getNormal(ws,Ts,Es,f.normal),c.face=f,c.barycoord=u}return c}class Gt extends fe{constructor(t=1,e=1,i=1,n=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:r};const o=this;n=Math.floor(n),a=Math.floor(a),r=Math.floor(r);const h=[],l=[],c=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,r,a,0),g("z","y","x",1,-1,i,e,-t,r,a,1),g("x","z","y",1,1,t,i,e,n,r,2),g("x","z","y",1,-1,t,i,-e,n,r,3),g("x","y","z",1,-1,t,e,i,n,a,4),g("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(h),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(u,2));function g(x,p,m,y,_,b,P,E,T,R,N){const v=b/T,S=P/R,F=b/2,O=P/2,W=E/2,K=T+1,V=R+1;let Z=0,q=0;const ut=new C;for(let ht=0;ht<V;ht++){const bt=ht*S-O;for(let Wt=0;Wt<K;Wt++){const Zt=Wt*v-F;ut[x]=Zt*y,ut[p]=bt*_,ut[m]=W,l.push(ut.x,ut.y,ut.z),ut[x]=0,ut[p]=0,ut[m]=E>0?1:-1,c.push(ut.x,ut.y,ut.z),u.push(Wt/T),u.push(1-ht/R),Z+=1}}for(let ht=0;ht<R;ht++)for(let bt=0;bt<T;bt++){const Wt=f+bt+K*ht,Zt=f+bt+K*(ht+1),X=f+(bt+1)+K*(ht+1),et=f+(bt+1)+K*ht;h.push(Wt,Zt,et),h.push(Zt,X,et),q+=6}o.addGroup(d,q,N),d+=q,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function kn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ie(s){const t={};for(let e=0;e<s.length;e++){const i=kn(s[e]);for(const n in i)t[n]=i[n]}return t}function zl(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Hl={clone:kn,merge:Ie};var Vl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends an{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vl,this.fragmentShader=Wl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kn(t.uniforms),this.uniformsGroups=zl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class $h extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new C,Vo=new _t,Wo=new _t;class Xe extends $h{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qn*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Qn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,Vo,Wo),e.subVectors(Wo,Vo)}setViewOffset(t,e,i,n,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qn*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const h=r.fullWidth,l=r.fullHeight;a+=r.offsetX*n/h,e-=r.offsetY*i/l,n*=r.width/h,i*=r.height/l}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vn=-90,_n=1;class Xl extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Xe(vn,_n,t,e);n.layers=this.layers,this.add(n);const a=new Xe(vn,_n,t,e);a.layers=this.layers,this.add(a);const r=new Xe(vn,_n,t,e);r.layers=this.layers,this.add(r);const o=new Xe(vn,_n,t,e);o.layers=this.layers,this.add(o);const h=new Xe(vn,_n,t,e);h.layers=this.layers,this.add(h);const l=new Xe(vn,_n,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,a,r,o,h]=e;for(const l of e)this.remove(l);if(t===vi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Js)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,h,l,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,a),t.setRenderTarget(i,1,n),t.render(e,r),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,h),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,c),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Qh extends Ne{constructor(t,e,i,n,a,r,o,h,l,c){t=t!==void 0?t:[],e=e!==void 0?e:Ln,super(t,e,i,n,a,r,o,h,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yl extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Qh(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ei}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Gt(5,5,5),a=new hi({name:"CubemapFromEquirect",uniforms:kn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ke,blending:Ni});a.uniforms.tEquirect.value=e;const r=new k(n,a),o=e.minFilter;return e.minFilter===tn&&(e.minFilter=ei),new Xl(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,n){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(a)}}const Oa=new C,ql=new C,Kl=new Bt;class qi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Oa.subVectors(i,e).cross(ql.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Oa),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Kl.getNormalMatrix(t),n=this.coplanarPoint(Oa).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new oa,Ps=new C;class io{constructor(t=new qi,e=new qi,i=new qi,n=new qi,a=new qi,r=new qi){this.planes=[t,e,i,n,a,r]}set(t,e,i,n,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=vi){const i=this.planes,n=t.elements,a=n[0],r=n[1],o=n[2],h=n[3],l=n[4],c=n[5],u=n[6],f=n[7],d=n[8],g=n[9],x=n[10],p=n[11],m=n[12],y=n[13],_=n[14],b=n[15];if(i[0].setComponents(h-a,f-l,p-d,b-m).normalize(),i[1].setComponents(h+a,f+l,p+d,b+m).normalize(),i[2].setComponents(h+r,f+c,p+g,b+y).normalize(),i[3].setComponents(h-r,f-c,p-g,b-y).normalize(),i[4].setComponents(h-o,f-u,p-x,b-_).normalize(),e===vi)i[5].setComponents(h+o,f+u,p+x,b+_).normalize();else if(e===Js)i[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Ps.x=n.normal.x>0?t.max.x:t.min.x,Ps.y=n.normal.y>0?t.max.y:t.min.y,Ps.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tc(){let s=null,t=!1,e=null,i=null;function n(a,r){e(a,r),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function jl(s){const t=new WeakMap;function e(o,h){const l=o.array,c=o.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,l,c),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,h,l){const c=h.array,u=h.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,c);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const x=u[d];s.bufferSubData(l,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}h.clearUpdateRanges()}h.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const h=t.get(o);h&&(s.deleteBuffer(h.buffer),t.delete(o))}function r(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,h));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,h),l.version=o.version}}return{get:n,remove:a,update:r}}class si extends fe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const a=t/2,r=e/2,o=Math.floor(i),h=Math.floor(n),l=o+1,c=h+1,u=t/o,f=e/h,d=[],g=[],x=[],p=[];for(let m=0;m<c;m++){const y=m*f-r;for(let _=0;_<l;_++){const b=_*u-a;g.push(b,-y,0),x.push(0,0,1),p.push(_/o),p.push(1-m/h)}}for(let m=0;m<h;m++)for(let y=0;y<o;y++){const _=y+l*m,b=y+l*(m+1),P=y+1+l*(m+1),E=y+1+l*m;d.push(_,b,E),d.push(b,P,E)}this.setIndex(d),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zl=`#ifdef USE_ALPHAHASH
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
#endif`,$l=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ql=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iu=`#ifdef USE_AOMAP
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
#endif`,nu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,su=`#ifdef USE_BATCHING
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
#endif`,au=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ru=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cu=`#ifdef USE_IRIDESCENCE
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
#endif`,lu=`#ifdef USE_BUMPMAP
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
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_u=`#define PI 3.141592653589793
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
} // validated`,yu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bu=`vec3 transformedNormal = objectNormal;
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
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Su=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Au=`
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
}`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
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
#endif`,Iu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ku=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fu=`#ifdef USE_GRADIENTMAP
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
}`,Ou=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zu=`uniform bool receiveShadow;
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
#endif`,Hu=`#ifdef USE_ENVMAP
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
#endif`,Vu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qu=`PhysicalMaterial material;
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
#endif`,Ku=`struct PhysicalMaterial {
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
}`,ju=`
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
#endif`,Ju=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$u=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,td=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,id=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ad=`#if defined( USE_POINTS_UV )
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
#endif`,rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ud=`#ifdef USE_MORPHTARGETS
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
#endif`,dd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vd=`#ifdef USE_NORMALMAP
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
#endif`,_d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Td=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Id=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ud=`float getShadowMask() {
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
}`,kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nd=`#ifdef USE_SKINNING
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
#endif`,Fd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Od=`#ifdef USE_SKINNING
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
#endif`,Bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vd=`#ifdef USE_TRANSMISSION
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
#endif`,Wd=`#ifdef USE_TRANSMISSION
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jd=`uniform sampler2D t2D;
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
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`#include <common>
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
}`,nf=`#if DEPTH_PACKING == 3200
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
}`,sf=`#define DISTANCE
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
}`,af=`#define DISTANCE
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
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`uniform float scale;
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
}`,cf=`uniform vec3 diffuse;
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
}`,lf=`#include <common>
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
}`,uf=`uniform vec3 diffuse;
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
}`,df=`#define LAMBERT
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
}`,ff=`#define LAMBERT
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
}`,pf=`#define MATCAP
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
}`,mf=`#define MATCAP
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
}`,gf=`#define NORMAL
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
}`,xf=`#define NORMAL
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
}`,vf=`#define PHONG
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
}`,_f=`#define PHONG
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
}`,yf=`#define STANDARD
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
}`,bf=`#define STANDARD
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
}`,Mf=`#define TOON
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
}`,Sf=`#define TOON
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
}`,wf=`uniform float size;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,Ef=`#include <common>
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
}`,Af=`uniform vec3 color;
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
}`,Cf=`uniform float rotation;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:Jl,alphahash_pars_fragment:Zl,alphamap_fragment:$l,alphamap_pars_fragment:Ql,alphatest_fragment:tu,alphatest_pars_fragment:eu,aomap_fragment:iu,aomap_pars_fragment:nu,batching_pars_vertex:su,batching_vertex:au,begin_vertex:ru,beginnormal_vertex:ou,bsdfs:hu,iridescence_fragment:cu,bumpmap_pars_fragment:lu,clipping_planes_fragment:uu,clipping_planes_pars_fragment:du,clipping_planes_pars_vertex:fu,clipping_planes_vertex:pu,color_fragment:mu,color_pars_fragment:gu,color_pars_vertex:xu,color_vertex:vu,common:_u,cube_uv_reflection_fragment:yu,defaultnormal_vertex:bu,displacementmap_pars_vertex:Mu,displacementmap_vertex:Su,emissivemap_fragment:wu,emissivemap_pars_fragment:Tu,colorspace_fragment:Eu,colorspace_pars_fragment:Au,envmap_fragment:Cu,envmap_common_pars_fragment:Ru,envmap_pars_fragment:Pu,envmap_pars_vertex:Lu,envmap_physical_pars_fragment:Hu,envmap_vertex:Du,fog_vertex:Iu,fog_pars_vertex:Uu,fog_fragment:ku,fog_pars_fragment:Nu,gradientmap_pars_fragment:Fu,lightmap_pars_fragment:Ou,lights_lambert_fragment:Bu,lights_lambert_pars_fragment:Gu,lights_pars_begin:zu,lights_toon_fragment:Vu,lights_toon_pars_fragment:Wu,lights_phong_fragment:Xu,lights_phong_pars_fragment:Yu,lights_physical_fragment:qu,lights_physical_pars_fragment:Ku,lights_fragment_begin:ju,lights_fragment_maps:Ju,lights_fragment_end:Zu,logdepthbuf_fragment:$u,logdepthbuf_pars_fragment:Qu,logdepthbuf_pars_vertex:td,logdepthbuf_vertex:ed,map_fragment:id,map_pars_fragment:nd,map_particle_fragment:sd,map_particle_pars_fragment:ad,metalnessmap_fragment:rd,metalnessmap_pars_fragment:od,morphinstance_vertex:hd,morphcolor_vertex:cd,morphnormal_vertex:ld,morphtarget_pars_vertex:ud,morphtarget_vertex:dd,normal_fragment_begin:fd,normal_fragment_maps:pd,normal_pars_fragment:md,normal_pars_vertex:gd,normal_vertex:xd,normalmap_pars_fragment:vd,clearcoat_normal_fragment_begin:_d,clearcoat_normal_fragment_maps:yd,clearcoat_pars_fragment:bd,iridescence_pars_fragment:Md,opaque_fragment:Sd,packing:wd,premultiplied_alpha_fragment:Td,project_vertex:Ed,dithering_fragment:Ad,dithering_pars_fragment:Cd,roughnessmap_fragment:Rd,roughnessmap_pars_fragment:Pd,shadowmap_pars_fragment:Ld,shadowmap_pars_vertex:Dd,shadowmap_vertex:Id,shadowmask_pars_fragment:Ud,skinbase_vertex:kd,skinning_pars_vertex:Nd,skinning_vertex:Fd,skinnormal_vertex:Od,specularmap_fragment:Bd,specularmap_pars_fragment:Gd,tonemapping_fragment:zd,tonemapping_pars_fragment:Hd,transmission_fragment:Vd,transmission_pars_fragment:Wd,uv_pars_fragment:Xd,uv_pars_vertex:Yd,uv_vertex:qd,worldpos_vertex:Kd,background_vert:jd,background_frag:Jd,backgroundCube_vert:Zd,backgroundCube_frag:$d,cube_vert:Qd,cube_frag:tf,depth_vert:ef,depth_frag:nf,distanceRGBA_vert:sf,distanceRGBA_frag:af,equirect_vert:rf,equirect_frag:of,linedashed_vert:hf,linedashed_frag:cf,meshbasic_vert:lf,meshbasic_frag:uf,meshlambert_vert:df,meshlambert_frag:ff,meshmatcap_vert:pf,meshmatcap_frag:mf,meshnormal_vert:gf,meshnormal_frag:xf,meshphong_vert:vf,meshphong_frag:_f,meshphysical_vert:yf,meshphysical_frag:bf,meshtoon_vert:Mf,meshtoon_frag:Sf,points_vert:wf,points_frag:Tf,shadow_vert:Ef,shadow_frag:Af,sprite_vert:Cf,sprite_frag:Rf},rt={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},ri={basic:{uniforms:Ie([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ie([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new st(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ie([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ie([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ie([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new st(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ie([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ie([rt.points,rt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ie([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ie([rt.common,rt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ie([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ie([rt.sprite,rt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ie([rt.common,rt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ie([rt.lights,rt.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};ri.physical={uniforms:Ie([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Ls={r:0,b:0,g:0},Xi=new oi,Pf=new ce;function Lf(s,t,e,i,n,a,r){const o=new st(0);let h=a===!0?0:1,l,c,u=null,f=0,d=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function x(y){let _=!1;const b=g(y);b===null?m(o,h):b&&b.isColor&&(m(b,1),_=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(s.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(y,_){const b=g(_);b&&(b.isCubeTexture||b.mapping===aa)?(c===void 0&&(c=new k(new Gt(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:kn(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Xi.copy(_.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Pf.makeRotationFromEuler(Xi)),c.material.toneMapped=ee.getTransfer(b.colorSpace)!==de,(u!==b||f!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new k(new si(2,2),new hi({name:"BackgroundMaterial",uniforms:kn(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ee.getTransfer(b.colorSpace)!==de,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,_){y.getRGB(Ls,Zh(s)),i.buffers.color.setClear(Ls.r,Ls.g,Ls.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),h=_,m(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(y){h=y,m(o,h)},render:x,addToRenderList:p}}function Df(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null);let a=n,r=!1;function o(v,S,F,O,W){let K=!1;const V=u(O,F,S);a!==V&&(a=V,l(a.object)),K=d(v,O,F,W),K&&g(v,O,F,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,b(v,S,F,O),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function h(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function c(v){return s.deleteVertexArray(v)}function u(v,S,F){const O=F.wireframe===!0;let W=i[v.id];W===void 0&&(W={},i[v.id]=W);let K=W[S.id];K===void 0&&(K={},W[S.id]=K);let V=K[O];return V===void 0&&(V=f(h()),K[O]=V),V}function f(v){const S=[],F=[],O=[];for(let W=0;W<e;W++)S[W]=0,F[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:F,attributeDivisors:O,object:v,attributes:{},index:null}}function d(v,S,F,O){const W=a.attributes,K=S.attributes;let V=0;const Z=F.getAttributes();for(const q in Z)if(Z[q].location>=0){const ht=W[q];let bt=K[q];if(bt===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(bt=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(bt=v.instanceColor)),ht===void 0||ht.attribute!==bt||bt&&ht.data!==bt.data)return!0;V++}return a.attributesNum!==V||a.index!==O}function g(v,S,F,O){const W={},K=S.attributes;let V=0;const Z=F.getAttributes();for(const q in Z)if(Z[q].location>=0){let ht=K[q];ht===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor));const bt={};bt.attribute=ht,ht&&ht.data&&(bt.data=ht.data),W[q]=bt,V++}a.attributes=W,a.attributesNum=V,a.index=O}function x(){const v=a.newAttributes;for(let S=0,F=v.length;S<F;S++)v[S]=0}function p(v){m(v,0)}function m(v,S){const F=a.newAttributes,O=a.enabledAttributes,W=a.attributeDivisors;F[v]=1,O[v]===0&&(s.enableVertexAttribArray(v),O[v]=1),W[v]!==S&&(s.vertexAttribDivisor(v,S),W[v]=S)}function y(){const v=a.newAttributes,S=a.enabledAttributes;for(let F=0,O=S.length;F<O;F++)S[F]!==v[F]&&(s.disableVertexAttribArray(F),S[F]=0)}function _(v,S,F,O,W,K,V){V===!0?s.vertexAttribIPointer(v,S,F,W,K):s.vertexAttribPointer(v,S,F,O,W,K)}function b(v,S,F,O){x();const W=O.attributes,K=F.getAttributes(),V=S.defaultAttributeValues;for(const Z in K){const q=K[Z];if(q.location>=0){let ut=W[Z];if(ut===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor)),ut!==void 0){const ht=ut.normalized,bt=ut.itemSize,Wt=t.get(ut);if(Wt===void 0)continue;const Zt=Wt.buffer,X=Wt.type,et=Wt.bytesPerElement,vt=X===s.INT||X===s.UNSIGNED_INT||ut.gpuType===Kr;if(ut.isInterleavedBufferAttribute){const dt=ut.data,Lt=dt.stride,Ct=ut.offset;if(dt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<q.locationSize;Xt++)m(q.location+Xt,dt.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Xt=0;Xt<q.locationSize;Xt++)p(q.location+Xt);s.bindBuffer(s.ARRAY_BUFFER,Zt);for(let Xt=0;Xt<q.locationSize;Xt++)_(q.location+Xt,bt/q.locationSize,X,ht,Lt*et,(Ct+bt/q.locationSize*Xt)*et,vt)}else{if(ut.isInstancedBufferAttribute){for(let dt=0;dt<q.locationSize;dt++)m(q.location+dt,ut.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let dt=0;dt<q.locationSize;dt++)p(q.location+dt);s.bindBuffer(s.ARRAY_BUFFER,Zt);for(let dt=0;dt<q.locationSize;dt++)_(q.location+dt,bt/q.locationSize,X,ht,bt*et,bt/q.locationSize*dt*et,vt)}}else if(V!==void 0){const ht=V[Z];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(q.location,ht);break;case 3:s.vertexAttrib3fv(q.location,ht);break;case 4:s.vertexAttrib4fv(q.location,ht);break;default:s.vertexAttrib1fv(q.location,ht)}}}}y()}function P(){R();for(const v in i){const S=i[v];for(const F in S){const O=S[F];for(const W in O)c(O[W].object),delete O[W];delete S[F]}delete i[v]}}function E(v){if(i[v.id]===void 0)return;const S=i[v.id];for(const F in S){const O=S[F];for(const W in O)c(O[W].object),delete O[W];delete S[F]}delete i[v.id]}function T(v){for(const S in i){const F=i[S];if(F[v.id]===void 0)continue;const O=F[v.id];for(const W in O)c(O[W].object),delete O[W];delete F[v.id]}}function R(){N(),r=!0,a!==n&&(a=n,l(a.object))}function N(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:N,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function If(s,t,e){let i;function n(l){i=l}function a(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function r(l,c,u){u!==0&&(s.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let g=0;g<u;g++)d+=c[g];e.update(d,i,1)}function h(l,c,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)r(l[g],c[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,c,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=c[x];for(let x=0;x<f.length;x++)e.update(g,i,f[x])}}this.setMode=n,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=h}function Uf(s,t,e,i){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){return!(T!==ni&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===hs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Mi&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==xi&&!R)}function h(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const c=h(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:P,maxSamples:E}}function kf(s){const t=this;let e=null,i=0,n=!1,a=!1;const r=new qi,o=new Bt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,f){e=c(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!n||g===null||g.length===0||a&&!p)a?c(null):l();else{const y=a?0:i,_=y*4;let b=m.clippingState||null;h.value=b,b=c(g,f,_,d);for(let P=0;P!==_;++P)b[P]=e[P];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,f,d,g){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=h.value,g!==!0||p===null){const m=d+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,b=d;_!==x;++_,b+=4)r.copy(u[_]).applyMatrix4(y,o),r.normal.toArray(p,b),p[b+3]=r.constant}h.value=p,h.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Nf(s){let t=new WeakMap;function e(r,o){return o===pr?r.mapping=Ln:o===mr&&(r.mapping=Dn),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===pr||o===mr)if(t.has(r)){const h=t.get(r).texture;return e(h,r.mapping)}else{const h=r.image;if(h&&h.height>0){const l=new Yl(h.height);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",n),e(l.texture,r.mapping)}else return null}}return r}function n(r){const o=r.target;o.removeEventListener("dispose",n);const h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class ec extends $h{constructor(t=-1,e=1,i=1,n=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-t,r=i+t,o=n+e,h=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=c*this.view.offsetY,h=o-c*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Tn=4,Xo=[.125,.215,.35,.446,.526,.582],Zi=20,Ba=new ec,Yo=new st;let Ga=null,za=0,Ha=0,Va=!1;const Ki=(1+Math.sqrt(5))/2,yn=1/Ki,qo=[new C(-Ki,yn,0),new C(Ki,yn,0),new C(-yn,0,Ki),new C(yn,0,Ki),new C(0,Ki,-yn),new C(0,Ki,yn),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Ko{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Ga=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,n,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ga,za,Ha),this._renderer.xr.enabled=Va,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ln||t.mapping===Dn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ga=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:hs,format:ni,colorSpace:Bi,depthBuffer:!1},n=jo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jo(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ff(a)),this._blurMaterial=Of(a,t,e)}return n}_compileMaterial(t){const e=new k(this._lodPlanes[0],t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,i,n){const o=new Xe(90,1,e,i),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,f=c.toneMapping;c.getClearColor(Yo),c.toneMapping=Fi,c.autoClear=!1;const d=new Nt({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new k(new Gt,d);let x=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,x=!0):(d.color.copy(Yo),x=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,h[m],0),o.lookAt(l[m],0,0)):y===1?(o.up.set(0,0,h[m]),o.lookAt(0,l[m],0)):(o.up.set(0,h[m],0),o.lookAt(0,0,l[m]));const _=this._cubeSize;Ds(n,y*_,m>2?_:0,_,_),c.setRenderTarget(n),x&&c.render(g,o),c.render(t,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=u,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Ln||t.mapping===Dn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());const a=n?this._cubemapMaterial:this._equirectMaterial,r=new k(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const h=this._cubeSize;Ds(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(r,Ba)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=qo[(n-a-1)%qo.length];this._blur(t,a-1,a,r,o)}e.autoClear=i}_blur(t,e,i,n,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,n,"latitudinal",a),this._halfBlur(r,t,i,i,n,"longitudinal",a)}_halfBlur(t,e,i,n,a,r,o){const h=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new k(this._lodPlanes[n],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Zi-1),x=a/g,p=isFinite(a)?1+Math.floor(c*x):Zi;p>Zi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zi}`);const m=[];let y=0;for(let T=0;T<Zi;++T){const R=T/x,N=Math.exp(-R*R/2);m.push(N),T===0?y+=N:T<p&&(y+=2*N)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;const b=this._sizeLods[n],P=3*b*(n>_-Tn?n-_+Tn:0),E=4*(this._cubeSize-b);Ds(e,P,E,3*b,2*b),h.setRenderTarget(e),h.render(u,Ba)}}function Ff(s){const t=[],e=[],i=[];let n=s;const a=s-Tn+1+Xo.length;for(let r=0;r<a;r++){const o=Math.pow(2,n);e.push(o);let h=1/o;r>s-Tn?h=Xo[r-s+Tn-1]:r===0&&(h=0),i.push(h);const l=1/(o-2),c=-l,u=1+l,f=[c,c,u,c,u,u,c,c,u,u,c,u],d=6,g=6,x=3,p=2,m=1,y=new Float32Array(x*g*d),_=new Float32Array(p*g*d),b=new Float32Array(m*g*d);for(let E=0;E<d;E++){const T=E%3*2/3-1,R=E>2?0:-1,N=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];y.set(N,x*g*E),_.set(f,p*g*E);const v=[E,E,E,E,E,E];b.set(v,m*g*E)}const P=new fe;P.setAttribute("position",new Ce(y,x)),P.setAttribute("uv",new Ce(_,p)),P.setAttribute("faceIndex",new Ce(b,m)),t.push(P),n>Tn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function jo(s,t,e){const i=new nn(s,t,e);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Of(s,t,e){const i=new Float32Array(Zi),n=new C(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:no(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Jo(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:no(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Zo(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function no(){return`

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
	`}function Bf(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const h=o.mapping,l=h===pr||h===mr,c=h===Ln||h===Dn;if(l||c){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ko(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||c&&d&&n(d)?(e===null&&(e=new Ko(s)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function n(o){let h=0;const l=6;for(let c=0;c<l;c++)o[c]!==void 0&&h++;return h===l}function a(o){const h=o.target;h.removeEventListener("dispose",a);const l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Gf(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Xs("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function zf(s,t,e,i){const n={},a=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}f.removeEventListener("dispose",r),delete n[f.id];const d=a.get(f);d&&(t.remove(d),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return n[f.id]===!0||(f.addEventListener("dispose",r),n[f.id]=!0,e.memory.geometries++),f}function h(u){const f=u.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const x=d[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],s.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,g=u.attributes.position;let x=0;if(d!==null){const y=d.array;x=d.version;for(let _=0,b=y.length;_<b;_+=3){const P=y[_+0],E=y[_+1],T=y[_+2];f.push(P,E,E,T,T,P)}}else if(g!==void 0){const y=g.array;x=g.version;for(let _=0,b=y.length/3-1;_<b;_+=3){const P=_+0,E=_+1,T=_+2;f.push(P,E,E,T,T,P)}}else return;const p=new(Vh(f)?Jh:jh)(f,1);p.version=x;const m=a.get(u);m&&t.remove(m),a.set(u,p)}function c(u){const f=a.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return a.get(u)}return{get:o,update:h,getWireframeAttribute:c}}function Hf(s,t,e){let i;function n(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function h(f,d){s.drawElements(i,d,a,f*r),e.update(d,i,1)}function l(f,d,g){g!==0&&(s.drawElementsInstanced(i,d,a,f*r,g),e.update(d,i,g))}function c(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,a,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,i,1)}function u(f,d,g,x){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/r,d[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,a,f,0,x,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y];for(let y=0;y<x.length;y++)e.update(m,i,x[y])}}this.setMode=n,this.setIndex=o,this.render=h,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Vf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Wf(s,t,e){const i=new WeakMap,n=new oe;function a(r,o,h){const l=r.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let v=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),x===!0&&(b=2),p===!0&&(b=3);let P=o.attributes.position.count*b,E=1;P>t.maxTextureSize&&(E=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const T=new Float32Array(P*E*4*u),R=new Xh(T,P,E,u);R.type=xi,R.needsUpdate=!0;const N=b*4;for(let S=0;S<u;S++){const F=m[S],O=y[S],W=_[S],K=P*E*4*S;for(let V=0;V<F.count;V++){const Z=V*N;g===!0&&(n.fromBufferAttribute(F,V),T[K+Z+0]=n.x,T[K+Z+1]=n.y,T[K+Z+2]=n.z,T[K+Z+3]=0),x===!0&&(n.fromBufferAttribute(O,V),T[K+Z+4]=n.x,T[K+Z+5]=n.y,T[K+Z+6]=n.z,T[K+Z+7]=0),p===!0&&(n.fromBufferAttribute(W,V),T[K+Z+8]=n.x,T[K+Z+9]=n.y,T[K+Z+10]=n.z,T[K+Z+11]=W.itemSize===4?n.w:1)}}f={count:u,texture:R,size:new _t(P,E)},i.set(o,f),o.addEventListener("dispose",v)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const x=o.morphTargetsRelative?1:1-g;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",l)}h.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:a}}function Xf(s,t,e,i){let n=new WeakMap;function a(h){const l=i.render.frame,c=h.geometry,u=t.get(h,c);if(n.get(u)!==l&&(t.update(u),n.set(u,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),n.get(h)!==l&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),n.set(h,l))),h.isSkinnedMesh){const f=h.skeleton;n.get(f)!==l&&(f.update(),n.set(f,l))}return u}function r(){n=new WeakMap}function o(h){const l=h.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:r}}class ic extends Ne{constructor(t,e,i,n,a,r,o,h,l,c=An){if(c!==An&&c!==Un)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===An&&(i=en),i===void 0&&c===Un&&(i=In),super(null,n,a,r,o,h,c,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Je,this.minFilter=h!==void 0?h:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const nc=new Ne,$o=new ic(1,1),sc=new Xh,ac=new Pl,rc=new Qh,Qo=[],th=[],eh=new Float32Array(16),ih=new Float32Array(9),nh=new Float32Array(4);function Bn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let a=Qo[n];if(a===void 0&&(a=new Float32Array(n),Qo[n]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function ye(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function be(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function ha(s,t){let e=th[t];e===void 0&&(e=new Int32Array(t),th[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Yf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function qf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2fv(this.addr,t),be(e,t)}}function Kf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;s.uniform3fv(this.addr,t),be(e,t)}}function jf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4fv(this.addr,t),be(e,t)}}function Jf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(ye(e,i))return;nh.set(i),s.uniformMatrix2fv(this.addr,!1,nh),be(e,i)}}function Zf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(ye(e,i))return;ih.set(i),s.uniformMatrix3fv(this.addr,!1,ih),be(e,i)}}function $f(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(ye(e,i))return;eh.set(i),s.uniformMatrix4fv(this.addr,!1,eh),be(e,i)}}function Qf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2iv(this.addr,t),be(e,t)}}function ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3iv(this.addr,t),be(e,t)}}function ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4iv(this.addr,t),be(e,t)}}function np(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function sp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2uiv(this.addr,t),be(e,t)}}function ap(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3uiv(this.addr,t),be(e,t)}}function rp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4uiv(this.addr,t),be(e,t)}}function op(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let a;this.type===s.SAMPLER_2D_SHADOW?($o.compareFunction=Hh,a=$o):a=nc,e.setTexture2D(t||a,n)}function hp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||ac,n)}function cp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||rc,n)}function lp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||sc,n)}function up(s){switch(s){case 5126:return Yf;case 35664:return qf;case 35665:return Kf;case 35666:return jf;case 35674:return Jf;case 35675:return Zf;case 35676:return $f;case 5124:case 35670:return Qf;case 35667:case 35671:return tp;case 35668:case 35672:return ep;case 35669:case 35673:return ip;case 5125:return np;case 36294:return sp;case 36295:return ap;case 36296:return rp;case 35678:case 36198:case 36298:case 36306:case 35682:return op;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return cp;case 36289:case 36303:case 36311:case 36292:return lp}}function dp(s,t){s.uniform1fv(this.addr,t)}function fp(s,t){const e=Bn(t,this.size,2);s.uniform2fv(this.addr,e)}function pp(s,t){const e=Bn(t,this.size,3);s.uniform3fv(this.addr,e)}function mp(s,t){const e=Bn(t,this.size,4);s.uniform4fv(this.addr,e)}function gp(s,t){const e=Bn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function xp(s,t){const e=Bn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function vp(s,t){const e=Bn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function _p(s,t){s.uniform1iv(this.addr,t)}function yp(s,t){s.uniform2iv(this.addr,t)}function bp(s,t){s.uniform3iv(this.addr,t)}function Mp(s,t){s.uniform4iv(this.addr,t)}function Sp(s,t){s.uniform1uiv(this.addr,t)}function wp(s,t){s.uniform2uiv(this.addr,t)}function Tp(s,t){s.uniform3uiv(this.addr,t)}function Ep(s,t){s.uniform4uiv(this.addr,t)}function Ap(s,t,e){const i=this.cache,n=t.length,a=ha(e,n);ye(i,a)||(s.uniform1iv(this.addr,a),be(i,a));for(let r=0;r!==n;++r)e.setTexture2D(t[r]||nc,a[r])}function Cp(s,t,e){const i=this.cache,n=t.length,a=ha(e,n);ye(i,a)||(s.uniform1iv(this.addr,a),be(i,a));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||ac,a[r])}function Rp(s,t,e){const i=this.cache,n=t.length,a=ha(e,n);ye(i,a)||(s.uniform1iv(this.addr,a),be(i,a));for(let r=0;r!==n;++r)e.setTextureCube(t[r]||rc,a[r])}function Pp(s,t,e){const i=this.cache,n=t.length,a=ha(e,n);ye(i,a)||(s.uniform1iv(this.addr,a),be(i,a));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||sc,a[r])}function Lp(s){switch(s){case 5126:return dp;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return xp;case 35676:return vp;case 5124:case 35670:return _p;case 35667:case 35671:return yp;case 35668:case 35672:return bp;case 35669:case 35673:return Mp;case 5125:return Sp;case 36294:return wp;case 36295:return Tp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Pp}}class Dp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=up(e.type)}}class Ip{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lp(e.type)}}class Up{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let a=0,r=n.length;a!==r;++a){const o=n[a];o.setValue(t,e[o.id],i)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function sh(s,t){s.seq.push(t),s.map[t.id]=t}function kp(s,t,e){const i=s.name,n=i.length;for(Wa.lastIndex=0;;){const a=Wa.exec(i),r=Wa.lastIndex;let o=a[1];const h=a[2]==="]",l=a[3];if(h&&(o=o|0),l===void 0||l==="["&&r+2===n){sh(e,l===void 0?new Dp(o,s,t):new Ip(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Up(o),sh(e,u)),e=u}}}class Ys{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=t.getActiveUniform(e,n),r=t.getUniformLocation(e,a.name);kp(a,r,this)}}setValue(t,e,i,n){const a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,r=e.length;a!==r;++a){const o=e[a],h=i[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,a=t.length;n!==a;++n){const r=t[n];r.id in e&&i.push(r)}return i}}function ah(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Np=37297;let Fp=0;function Op(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=n;r<a;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}function Bp(s){const t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(s);let i;switch(t===e?i="":t===js&&e===Ks?i="LinearDisplayP3ToLinearSRGB":t===Ks&&e===js&&(i="LinearSRGBToLinearDisplayP3"),s){case Bi:case ra:return[i,"LinearTransferOETF"];case ai:case to:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function rh(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+n+`

`+Op(s.getShaderSource(t),r)}else return n}function Gp(s,t){const e=Bp(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function zp(s,t){let e;switch(t){case zc:e="Linear";break;case Hc:e="Reinhard";break;case Vc:e="Cineon";break;case Wc:e="ACESFilmic";break;case Yc:e="AgX";break;case qc:e="Neutral";break;case Xc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Is=new C;function Hp(){ee.getLuminanceCoefficients(Is);const s=Is.x.toFixed(4),t=Is.y.toFixed(4),e=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($n).join(`
`)}function Wp(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Xp(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(t,n),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function $n(s){return s!==""}function oh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xr(s){return s.replace(Yp,Kp)}const qp=new Map;function Kp(s,t){let e=Ot[t];if(e===void 0){const i=qp.get(t);if(i!==void 0)e=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Xr(e)}const jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ch(s){return s.replace(jp,Jp)}function Jp(s,t,e,i){let n="";for(let a=parseInt(t);a<parseInt(e);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function lh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Zp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ah?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ch?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gi&&(t="SHADOWMAP_TYPE_VSM"),t}function $p(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ln:case Dn:t="ENVMAP_TYPE_CUBE";break;case aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Dn:t="ENVMAP_MODE_REFRACTION";break}return t}function tm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Rh:t="ENVMAP_BLENDING_MULTIPLY";break;case Bc:t="ENVMAP_BLENDING_MIX";break;case Gc:t="ENVMAP_BLENDING_ADD";break}return t}function em(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function im(s,t,e,i){const n=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const h=Zp(e),l=$p(e),c=Qp(e),u=tm(e),f=em(e),d=Vp(e),g=Wp(a),x=n.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($n).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($n).join(`
`),m.length>0&&(m+=`
`)):(p=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($n).join(`
`),m=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fi?"#define TONE_MAPPING":"",e.toneMapping!==Fi?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Fi?zp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Gp("linearToOutputTexel",e.outputColorSpace),Hp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($n).join(`
`)),r=Xr(r),r=oh(r,e),r=hh(r,e),o=Xr(o),o=oh(o,e),o=hh(o,e),r=ch(r),o=ch(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=y+p+r,b=y+m+o,P=ah(n,n.VERTEX_SHADER,_),E=ah(n,n.FRAGMENT_SHADER,b);n.attachShader(x,P),n.attachShader(x,E),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function T(S){if(s.debug.checkShaderErrors){const F=n.getProgramInfoLog(x).trim(),O=n.getShaderInfoLog(P).trim(),W=n.getShaderInfoLog(E).trim();let K=!0,V=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,P,E);else{const Z=rh(n,P,"vertex"),q=rh(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+F+`
`+Z+`
`+q)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||W==="")&&(V=!1);V&&(S.diagnostics={runnable:K,programLog:F,vertexShader:{log:O,prefix:p},fragmentShader:{log:W,prefix:m}})}n.deleteShader(P),n.deleteShader(E),R=new Ys(n,x),N=Xp(n,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let N;this.getAttributes=function(){return N===void 0&&T(this),N};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=n.getProgramParameter(x,Np)),v},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=E,this}let nm=0;class sm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new am(t),e.set(t,i)),i}}class am{constructor(t){this.id=nm++,this.code=t,this.usedTimes=0}}function rm(s,t,e,i,n,a,r){const o=new qh,h=new sm,l=new Set,c=[],u=n.logarithmicDepthBuffer,f=n.reverseDepthBuffer,d=n.vertexTextures;let g=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,S,F,O,W){const K=O.fog,V=W.geometry,Z=v.isMeshStandardMaterial?O.environment:null,q=(v.isMeshStandardMaterial?e:t).get(v.envMap||Z),ut=q&&q.mapping===aa?q.image.height:null,ht=x[v.type];v.precision!==null&&(g=n.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const bt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Wt=bt!==void 0?bt.length:0;let Zt=0;V.morphAttributes.position!==void 0&&(Zt=1),V.morphAttributes.normal!==void 0&&(Zt=2),V.morphAttributes.color!==void 0&&(Zt=3);let X,et,vt,dt;if(ht){const Be=ri[ht];X=Be.vertexShader,et=Be.fragmentShader}else X=v.vertexShader,et=v.fragmentShader,h.update(v),vt=h.getVertexShaderID(v),dt=h.getFragmentShaderID(v);const Lt=s.getRenderTarget(),Ct=W.isInstancedMesh===!0,Xt=W.isBatchedMesh===!0,re=!!v.map,Yt=!!v.matcap,L=!!q,Ge=!!v.aoMap,Ht=!!v.lightMap,Kt=!!v.bumpMap,Dt=!!v.normalMap,le=!!v.displacementMap,kt=!!v.emissiveMap,A=!!v.metalnessMap,M=!!v.roughnessMap,B=v.anisotropy>0,J=v.clearcoat>0,tt=v.dispersion>0,j=v.iridescence>0,wt=v.sheen>0,ot=v.transmission>0,mt=B&&!!v.anisotropyMap,jt=J&&!!v.clearcoatMap,it=J&&!!v.clearcoatNormalMap,gt=J&&!!v.clearcoatRoughnessMap,It=j&&!!v.iridescenceMap,Ut=j&&!!v.iridescenceThicknessMap,xt=wt&&!!v.sheenColorMap,Vt=wt&&!!v.sheenRoughnessMap,Ft=!!v.specularMap,he=!!v.specularColorMap,D=!!v.specularIntensityMap,ft=ot&&!!v.transmissionMap,Y=ot&&!!v.thicknessMap,$=!!v.gradientMap,ct=!!v.alphaMap,pt=v.alphaTest>0,qt=!!v.alphaHash,xe=!!v.extensions;let Oe=Fi;v.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(Oe=s.toneMapping);const $t={shaderID:ht,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:et,defines:v.defines,customVertexShaderID:vt,customFragmentShaderID:dt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Xt,batchingColor:Xt&&W._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&W.instanceColor!==null,instancingMorph:Ct&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Lt===null?s.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:Bi,alphaToCoverage:!!v.alphaToCoverage,map:re,matcap:Yt,envMap:L,envMapMode:L&&q.mapping,envMapCubeUVHeight:ut,aoMap:Ge,lightMap:Ht,bumpMap:Kt,normalMap:Dt,displacementMap:d&&le,emissiveMap:kt,normalMapObjectSpace:Dt&&v.normalMapType===Zc,normalMapTangentSpace:Dt&&v.normalMapType===zh,metalnessMap:A,roughnessMap:M,anisotropy:B,anisotropyMap:mt,clearcoat:J,clearcoatMap:jt,clearcoatNormalMap:it,clearcoatRoughnessMap:gt,dispersion:tt,iridescence:j,iridescenceMap:It,iridescenceThicknessMap:Ut,sheen:wt,sheenColorMap:xt,sheenRoughnessMap:Vt,specularMap:Ft,specularColorMap:he,specularIntensityMap:D,transmission:ot,transmissionMap:ft,thicknessMap:Y,gradientMap:$,opaque:v.transparent===!1&&v.blending===En&&v.alphaToCoverage===!1,alphaMap:ct,alphaTest:pt,alphaHash:qt,combine:v.combine,mapUv:re&&p(v.map.channel),aoMapUv:Ge&&p(v.aoMap.channel),lightMapUv:Ht&&p(v.lightMap.channel),bumpMapUv:Kt&&p(v.bumpMap.channel),normalMapUv:Dt&&p(v.normalMap.channel),displacementMapUv:le&&p(v.displacementMap.channel),emissiveMapUv:kt&&p(v.emissiveMap.channel),metalnessMapUv:A&&p(v.metalnessMap.channel),roughnessMapUv:M&&p(v.roughnessMap.channel),anisotropyMapUv:mt&&p(v.anisotropyMap.channel),clearcoatMapUv:jt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:it&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&p(v.sheenRoughnessMap.channel),specularMapUv:Ft&&p(v.specularMap.channel),specularColorMapUv:he&&p(v.specularColorMap.channel),specularIntensityMapUv:D&&p(v.specularIntensityMap.channel),transmissionMapUv:ft&&p(v.transmissionMap.channel),thicknessMapUv:Y&&p(v.thicknessMap.channel),alphaMapUv:ct&&p(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Dt||B),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!V.attributes.uv&&(re||ct),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Wt,morphTextureStride:Zt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,decodeVideoTexture:re&&v.map.isVideoTexture===!0&&ee.getTransfer(v.map.colorSpace)===de,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===se,flipSided:v.side===ke,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&v.extensions.multiDraw===!0||Xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return $t.vertexUv1s=l.has(1),$t.vertexUv2s=l.has(2),$t.vertexUv3s=l.has(3),l.clear(),$t}function y(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)S.push(F),S.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(_(S,v),b(S,v),S.push(s.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function _(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function b(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),v.push(o.mask)}function P(v){const S=x[v.type];let F;if(S){const O=ri[S];F=Hl.clone(O.uniforms)}else F=v.uniforms;return F}function E(v,S){let F;for(let O=0,W=c.length;O<W;O++){const K=c[O];if(K.cacheKey===S){F=K,++F.usedTimes;break}}return F===void 0&&(F=new im(s,S,v,a),c.push(F)),F}function T(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),v.destroy()}}function R(v){h.remove(v)}function N(){h.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:P,acquireProgram:E,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:N}}function om(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function i(r){s.delete(r)}function n(r,o,h){s.get(r)[o]=h}function a(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:a}}function hm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function uh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function dh(){const s=[];let t=0;const e=[],i=[],n=[];function a(){t=0,e.length=0,i.length=0,n.length=0}function r(u,f,d,g,x,p){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},s[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function o(u,f,d,g,x,p){const m=r(u,f,d,g,x,p);d.transmission>0?i.push(m):d.transparent===!0?n.push(m):e.push(m)}function h(u,f,d,g,x,p){const m=r(u,f,d,g,x,p);d.transmission>0?i.unshift(m):d.transparent===!0?n.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||hm),i.length>1&&i.sort(f||uh),n.length>1&&n.sort(f||uh)}function c(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:n,init:a,push:o,unshift:h,finish:c,sort:l}}function cm(){let s=new WeakMap;function t(i,n){const a=s.get(i);let r;return a===void 0?(r=new dh,s.set(i,[r])):n>=a.length?(r=new dh,a.push(r)):r=a[n],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function lm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new st};break;case"SpotLight":e={position:new C,direction:new C,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new st,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new st,groundColor:new st};break;case"RectAreaLight":e={color:new st,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function um(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let dm=0;function fm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function pm(s){const t=new lm,e=um(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new C);const n=new C,a=new ce,r=new ce;function o(l){let c=0,u=0,f=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,y=0,_=0,b=0,P=0,E=0,T=0;l.sort(fm);for(let N=0,v=l.length;N<v;N++){const S=l[N],F=S.color,O=S.intensity,W=S.distance,K=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)c+=F.r*O,u+=F.g*O,f+=F.b*O;else if(S.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(S.sh.coefficients[V],O);T++}else if(S.isDirectionalLight){const V=t.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const Z=S.shadow,q=e.get(S);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,i.directionalShadow[d]=q,i.directionalShadowMap[d]=K,i.directionalShadowMatrix[d]=S.shadow.matrix,y++}i.directional[d]=V,d++}else if(S.isSpotLight){const V=t.get(S);V.position.setFromMatrixPosition(S.matrixWorld),V.color.copy(F).multiplyScalar(O),V.distance=W,V.coneCos=Math.cos(S.angle),V.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),V.decay=S.decay,i.spot[x]=V;const Z=S.shadow;if(S.map&&(i.spotLightMap[P]=S.map,P++,Z.updateMatrices(S),S.castShadow&&E++),i.spotLightMatrix[x]=Z.matrix,S.castShadow){const q=e.get(S);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,i.spotShadow[x]=q,i.spotShadowMap[x]=K,b++}x++}else if(S.isRectAreaLight){const V=t.get(S);V.color.copy(F).multiplyScalar(O),V.halfWidth.set(S.width*.5,0,0),V.halfHeight.set(0,S.height*.5,0),i.rectArea[p]=V,p++}else if(S.isPointLight){const V=t.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),V.distance=S.distance,V.decay=S.decay,S.castShadow){const Z=S.shadow,q=e.get(S);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=S.shadow.matrix,_++}i.point[g]=V,g++}else if(S.isHemisphereLight){const V=t.get(S);V.skyColor.copy(S.color).multiplyScalar(O),V.groundColor.copy(S.groundColor).multiplyScalar(O),i.hemi[m]=V,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==p||R.hemiLength!==m||R.numDirectionalShadows!==y||R.numPointShadows!==_||R.numSpotShadows!==b||R.numSpotMaps!==P||R.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=b+P-E,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,R.directionalLength=d,R.pointLength=g,R.spotLength=x,R.rectAreaLength=p,R.hemiLength=m,R.numDirectionalShadows=y,R.numPointShadows=_,R.numSpotShadows=b,R.numSpotMaps=P,R.numLightProbes=T,i.version=dm++)}function h(l,c){let u=0,f=0,d=0,g=0,x=0;const p=c.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){const _=l[m];if(_.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(p),u++}else if(_.isSpotLight){const b=i.spot[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(p),d++}else if(_.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),r.identity(),a.copy(_.matrixWorld),a.premultiply(p),r.extractRotation(a),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const b=i.hemi[x];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),x++}}}return{setup:o,setupView:h,state:i}}function fh(s){const t=new pm(s),e=[],i=[];function n(c){l.camera=c,e.length=0,i.length=0}function a(c){e.push(c)}function r(c){i.push(c)}function o(){t.setup(e)}function h(c){t.setupView(e,c)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:l,setupLights:o,setupLightsView:h,pushLight:a,pushShadow:r}}function mm(s){let t=new WeakMap;function e(n,a=0){const r=t.get(n);let o;return r===void 0?(o=new fh(s),t.set(n,[o])):a>=r.length?(o=new fh(s),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class gm extends an{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xm extends an{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_m=`uniform sampler2D shadow_pass;
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
}`;function ym(s,t,e){let i=new io;const n=new _t,a=new _t,r=new oe,o=new gm({depthPacking:Jc}),h=new xm,l={},c=e.maxTextureSize,u={[Oi]:ke,[ke]:Oi,[se]:se},f=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:vm,fragmentShader:_m}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new fe;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new k(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ah;let m=this.type;this.render=function(E,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const N=s.getRenderTarget(),v=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Ni),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=m!==gi&&this.type===gi,W=m===gi&&this.type!==gi;for(let K=0,V=E.length;K<V;K++){const Z=E[K],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;n.copy(q.mapSize);const ut=q.getFrameExtents();if(n.multiply(ut),a.copy(q.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(a.x=Math.floor(c/ut.x),n.x=a.x*ut.x,q.mapSize.x=a.x),n.y>c&&(a.y=Math.floor(c/ut.y),n.y=a.y*ut.y,q.mapSize.y=a.y)),q.map===null||O===!0||W===!0){const bt=this.type!==gi?{minFilter:Je,magFilter:Je}:{};q.map!==null&&q.map.dispose(),q.map=new nn(n.x,n.y,bt),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const ht=q.getViewportCount();for(let bt=0;bt<ht;bt++){const Wt=q.getViewport(bt);r.set(a.x*Wt.x,a.y*Wt.y,a.x*Wt.z,a.y*Wt.w),F.viewport(r),q.updateMatrices(Z,bt),i=q.getFrustum(),b(T,R,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===gi&&y(q,R),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(N,v,S)};function y(E,T){const R=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new nn(n.x,n.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,R,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,R,d,x,null)}function _(E,T,R,N){let v=null;const S=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)v=S;else if(v=R.isPointLight===!0?h:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=v.uuid,O=T.uuid;let W=l[F];W===void 0&&(W={},l[F]=W);let K=W[O];K===void 0&&(K=v.clone(),W[O]=K,T.addEventListener("dispose",P)),v=K}if(v.visible=T.visible,v.wireframe=T.wireframe,N===gi?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:u[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=s.properties.get(v);F.light=R}return v}function b(E,T,R,N,v){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===gi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const O=t.update(E),W=E.material;if(Array.isArray(W)){const K=O.groups;for(let V=0,Z=K.length;V<Z;V++){const q=K[V],ut=W[q.materialIndex];if(ut&&ut.visible){const ht=_(E,ut,N,v);E.onBeforeShadow(s,E,T,R,O,ht,q),s.renderBufferDirect(R,null,O,ht,E,q),E.onAfterShadow(s,E,T,R,O,ht,q)}}}else if(W.visible){const K=_(E,W,N,v);E.onBeforeShadow(s,E,T,R,O,K,null),s.renderBufferDirect(R,null,O,K,E,null),E.onAfterShadow(s,E,T,R,O,K,null)}}const F=E.children;for(let O=0,W=F.length;O<W;O++)b(F[O],T,R,N,v)}function P(E){E.target.removeEventListener("dispose",P);for(const R in l){const N=l[R],v=E.target.uuid;v in N&&(N[v].dispose(),delete N[v])}}}const bm={[or]:hr,[cr]:dr,[lr]:fr,[Pn]:ur,[hr]:or,[dr]:cr,[fr]:lr,[ur]:Pn};function Mm(s){function t(){let D=!1;const ft=new oe;let Y=null;const $=new oe(0,0,0,0);return{setMask:function(ct){Y!==ct&&!D&&(s.colorMask(ct,ct,ct,ct),Y=ct)},setLocked:function(ct){D=ct},setClear:function(ct,pt,qt,xe,Oe){Oe===!0&&(ct*=xe,pt*=xe,qt*=xe),ft.set(ct,pt,qt,xe),$.equals(ft)===!1&&(s.clearColor(ct,pt,qt,xe),$.copy(ft))},reset:function(){D=!1,Y=null,$.set(-1,0,0,0)}}}function e(){let D=!1,ft=!1,Y=null,$=null,ct=null;return{setReversed:function(pt){ft=pt},setTest:function(pt){pt?vt(s.DEPTH_TEST):dt(s.DEPTH_TEST)},setMask:function(pt){Y!==pt&&!D&&(s.depthMask(pt),Y=pt)},setFunc:function(pt){if(ft&&(pt=bm[pt]),$!==pt){switch(pt){case or:s.depthFunc(s.NEVER);break;case hr:s.depthFunc(s.ALWAYS);break;case cr:s.depthFunc(s.LESS);break;case Pn:s.depthFunc(s.LEQUAL);break;case lr:s.depthFunc(s.EQUAL);break;case ur:s.depthFunc(s.GEQUAL);break;case dr:s.depthFunc(s.GREATER);break;case fr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=pt}},setLocked:function(pt){D=pt},setClear:function(pt){ct!==pt&&(s.clearDepth(pt),ct=pt)},reset:function(){D=!1,Y=null,$=null,ct=null}}}function i(){let D=!1,ft=null,Y=null,$=null,ct=null,pt=null,qt=null,xe=null,Oe=null;return{setTest:function($t){D||($t?vt(s.STENCIL_TEST):dt(s.STENCIL_TEST))},setMask:function($t){ft!==$t&&!D&&(s.stencilMask($t),ft=$t)},setFunc:function($t,Be,li){(Y!==$t||$!==Be||ct!==li)&&(s.stencilFunc($t,Be,li),Y=$t,$=Be,ct=li)},setOp:function($t,Be,li){(pt!==$t||qt!==Be||xe!==li)&&(s.stencilOp($t,Be,li),pt=$t,qt=Be,xe=li)},setLocked:function($t){D=$t},setClear:function($t){Oe!==$t&&(s.clearStencil($t),Oe=$t)},reset:function(){D=!1,ft=null,Y=null,$=null,ct=null,pt=null,qt=null,xe=null,Oe=null}}}const n=new t,a=new e,r=new i,o=new WeakMap,h=new WeakMap;let l={},c={},u=new WeakMap,f=[],d=null,g=!1,x=null,p=null,m=null,y=null,_=null,b=null,P=null,E=new st(0,0,0),T=0,R=!1,N=null,v=null,S=null,F=null,O=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,V=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=V>=2);let q=null,ut={};const ht=s.getParameter(s.SCISSOR_BOX),bt=s.getParameter(s.VIEWPORT),Wt=new oe().fromArray(ht),Zt=new oe().fromArray(bt);function X(D,ft,Y,$){const ct=new Uint8Array(4),pt=s.createTexture();s.bindTexture(D,pt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<Y;qt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ct):s.texImage2D(ft+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ct);return pt}const et={};et[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),r.setClear(0),vt(s.DEPTH_TEST),a.setFunc(Pn),Ht(!1),Kt(bo),vt(s.CULL_FACE),L(Ni);function vt(D){l[D]!==!0&&(s.enable(D),l[D]=!0)}function dt(D){l[D]!==!1&&(s.disable(D),l[D]=!1)}function Lt(D,ft){return c[D]!==ft?(s.bindFramebuffer(D,ft),c[D]=ft,D===s.DRAW_FRAMEBUFFER&&(c[s.FRAMEBUFFER]=ft),D===s.FRAMEBUFFER&&(c[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function Ct(D,ft){let Y=f,$=!1;if(D){Y=u.get(ft),Y===void 0&&(Y=[],u.set(ft,Y));const ct=D.textures;if(Y.length!==ct.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,qt=ct.length;pt<qt;pt++)Y[pt]=s.COLOR_ATTACHMENT0+pt;Y.length=ct.length,$=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,$=!0);$&&s.drawBuffers(Y)}function Xt(D){return d!==D?(s.useProgram(D),d=D,!0):!1}const re={[Ji]:s.FUNC_ADD,[Mc]:s.FUNC_SUBTRACT,[Sc]:s.FUNC_REVERSE_SUBTRACT};re[wc]=s.MIN,re[Tc]=s.MAX;const Yt={[Ec]:s.ZERO,[Ac]:s.ONE,[Cc]:s.SRC_COLOR,[ar]:s.SRC_ALPHA,[Uc]:s.SRC_ALPHA_SATURATE,[Dc]:s.DST_COLOR,[Pc]:s.DST_ALPHA,[Rc]:s.ONE_MINUS_SRC_COLOR,[rr]:s.ONE_MINUS_SRC_ALPHA,[Ic]:s.ONE_MINUS_DST_COLOR,[Lc]:s.ONE_MINUS_DST_ALPHA,[kc]:s.CONSTANT_COLOR,[Nc]:s.ONE_MINUS_CONSTANT_COLOR,[Fc]:s.CONSTANT_ALPHA,[Oc]:s.ONE_MINUS_CONSTANT_ALPHA};function L(D,ft,Y,$,ct,pt,qt,xe,Oe,$t){if(D===Ni){g===!0&&(dt(s.BLEND),g=!1);return}if(g===!1&&(vt(s.BLEND),g=!0),D!==bc){if(D!==x||$t!==R){if((p!==Ji||_!==Ji)&&(s.blendEquation(s.FUNC_ADD),p=Ji,_=Ji),$t)switch(D){case En:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mo:s.blendFunc(s.ONE,s.ONE);break;case So:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case En:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case So:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,y=null,b=null,P=null,E.set(0,0,0),T=0,x=D,R=$t}return}ct=ct||ft,pt=pt||Y,qt=qt||$,(ft!==p||ct!==_)&&(s.blendEquationSeparate(re[ft],re[ct]),p=ft,_=ct),(Y!==m||$!==y||pt!==b||qt!==P)&&(s.blendFuncSeparate(Yt[Y],Yt[$],Yt[pt],Yt[qt]),m=Y,y=$,b=pt,P=qt),(xe.equals(E)===!1||Oe!==T)&&(s.blendColor(xe.r,xe.g,xe.b,Oe),E.copy(xe),T=Oe),x=D,R=!1}function Ge(D,ft){D.side===se?dt(s.CULL_FACE):vt(s.CULL_FACE);let Y=D.side===ke;ft&&(Y=!Y),Ht(Y),D.blending===En&&D.transparent===!1?L(Ni):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),n.setMask(D.colorWrite);const $=D.stencilWrite;r.setTest($),$&&(r.setMask(D.stencilWriteMask),r.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),r.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),le(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?vt(s.SAMPLE_ALPHA_TO_COVERAGE):dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(D){N!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),N=D)}function Kt(D){D!==_c?(vt(s.CULL_FACE),D!==v&&(D===bo?s.cullFace(s.BACK):D===yc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):dt(s.CULL_FACE),v=D}function Dt(D){D!==S&&(K&&s.lineWidth(D),S=D)}function le(D,ft,Y){D?(vt(s.POLYGON_OFFSET_FILL),(F!==ft||O!==Y)&&(s.polygonOffset(ft,Y),F=ft,O=Y)):dt(s.POLYGON_OFFSET_FILL)}function kt(D){D?vt(s.SCISSOR_TEST):dt(s.SCISSOR_TEST)}function A(D){D===void 0&&(D=s.TEXTURE0+W-1),q!==D&&(s.activeTexture(D),q=D)}function M(D,ft,Y){Y===void 0&&(q===null?Y=s.TEXTURE0+W-1:Y=q);let $=ut[Y];$===void 0&&($={type:void 0,texture:void 0},ut[Y]=$),($.type!==D||$.texture!==ft)&&(q!==Y&&(s.activeTexture(Y),q=Y),s.bindTexture(D,ft||et[D]),$.type=D,$.texture=ft)}function B(){const D=ut[q];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function jt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ut(D){Wt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Wt.copy(D))}function xt(D){Zt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Zt.copy(D))}function Vt(D,ft){let Y=h.get(ft);Y===void 0&&(Y=new WeakMap,h.set(ft,Y));let $=Y.get(D);$===void 0&&($=s.getUniformBlockIndex(ft,D.name),Y.set(D,$))}function Ft(D,ft){const $=h.get(ft).get(D);o.get(ft)!==$&&(s.uniformBlockBinding(ft,$,D.__bindingPointIndex),o.set(ft,$))}function he(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},q=null,ut={},c={},u=new WeakMap,f=[],d=null,g=!1,x=null,p=null,m=null,y=null,_=null,b=null,P=null,E=new st(0,0,0),T=0,R=!1,N=null,v=null,S=null,F=null,O=null,Wt.set(0,0,s.canvas.width,s.canvas.height),Zt.set(0,0,s.canvas.width,s.canvas.height),n.reset(),a.reset(),r.reset()}return{buffers:{color:n,depth:a,stencil:r},enable:vt,disable:dt,bindFramebuffer:Lt,drawBuffers:Ct,useProgram:Xt,setBlending:L,setMaterial:Ge,setFlipSided:Ht,setCullFace:Kt,setLineWidth:Dt,setPolygonOffset:le,setScissorTest:kt,activeTexture:A,bindTexture:M,unbindTexture:B,compressedTexImage2D:J,compressedTexImage3D:tt,texImage2D:gt,texImage3D:It,updateUBOMapping:Vt,uniformBlockBinding:Ft,texStorage2D:jt,texStorage3D:it,texSubImage2D:j,texSubImage3D:wt,compressedTexSubImage2D:ot,compressedTexSubImage3D:mt,scissor:Ut,viewport:xt,reset:he}}function ph(s,t,e,i){const n=Sm(i);switch(e){case Uh:return s*t;case Nh:return s*t;case Fh:return s*t*2;case Oh:return s*t/n.components*n.byteLength;case Zr:return s*t/n.components*n.byteLength;case Bh:return s*t*2/n.components*n.byteLength;case $r:return s*t*2/n.components*n.byteLength;case kh:return s*t*3/n.components*n.byteLength;case ni:return s*t*4/n.components*n.byteLength;case Qr:return s*t*4/n.components*n.byteLength;case Gs:case zs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hs:case Vs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _r:case br:return Math.max(s,16)*Math.max(t,8)/4;case vr:case yr:return Math.max(s,8)*Math.max(t,8)/2;case Mr:case Sr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Tr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Er:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ar:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Cr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Rr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Pr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Lr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Dr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ir:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case kr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Nr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Fr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Or:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ws:case Br:case Gr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Gh:case zr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Hr:case Vr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sm(s){switch(s){case Mi:case Lh:return{byteLength:1,components:1};case as:case Dh:case hs:return{byteLength:2,components:1};case jr:case Jr:return{byteLength:2,components:4};case en:case Kr:case xi:return{byteLength:4,components:1};case Ih:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function wm(s,t,e,i,n,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _t,c=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return d?new OffscreenCanvas(A,M):Zs("canvas")}function x(A,M,B){let J=1;const tt=kt(A);if((tt.width>B||tt.height>B)&&(J=B/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(J*tt.width),wt=Math.floor(J*tt.height);u===void 0&&(u=g(j,wt));const ot=M?g(j,wt):u;return ot.width=j,ot.height=wt,ot.getContext("2d").drawImage(A,0,0,j,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+j+"x"+wt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==Je&&A.minFilter!==ei}function m(A){s.generateMipmap(A)}function y(A,M,B,J,tt=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=M;if(M===s.RED&&(B===s.FLOAT&&(j=s.R32F),B===s.HALF_FLOAT&&(j=s.R16F),B===s.UNSIGNED_BYTE&&(j=s.R8)),M===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(j=s.R8UI),B===s.UNSIGNED_SHORT&&(j=s.R16UI),B===s.UNSIGNED_INT&&(j=s.R32UI),B===s.BYTE&&(j=s.R8I),B===s.SHORT&&(j=s.R16I),B===s.INT&&(j=s.R32I)),M===s.RG&&(B===s.FLOAT&&(j=s.RG32F),B===s.HALF_FLOAT&&(j=s.RG16F),B===s.UNSIGNED_BYTE&&(j=s.RG8)),M===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(j=s.RG8UI),B===s.UNSIGNED_SHORT&&(j=s.RG16UI),B===s.UNSIGNED_INT&&(j=s.RG32UI),B===s.BYTE&&(j=s.RG8I),B===s.SHORT&&(j=s.RG16I),B===s.INT&&(j=s.RG32I)),M===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(j=s.RGB8UI),B===s.UNSIGNED_SHORT&&(j=s.RGB16UI),B===s.UNSIGNED_INT&&(j=s.RGB32UI),B===s.BYTE&&(j=s.RGB8I),B===s.SHORT&&(j=s.RGB16I),B===s.INT&&(j=s.RGB32I)),M===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),B===s.UNSIGNED_INT&&(j=s.RGBA32UI),B===s.BYTE&&(j=s.RGBA8I),B===s.SHORT&&(j=s.RGBA16I),B===s.INT&&(j=s.RGBA32I)),M===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),M===s.RGBA){const wt=tt?qs:ee.getTransfer(J);B===s.FLOAT&&(j=s.RGBA32F),B===s.HALF_FLOAT&&(j=s.RGBA16F),B===s.UNSIGNED_BYTE&&(j=wt===de?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function _(A,M){let B;return A?M===null||M===en||M===In?B=s.DEPTH24_STENCIL8:M===xi?B=s.DEPTH32F_STENCIL8:M===as&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===en||M===In?B=s.DEPTH_COMPONENT24:M===xi?B=s.DEPTH_COMPONENT32F:M===as&&(B=s.DEPTH_COMPONENT16),B}function b(A,M){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Je&&A.minFilter!==ei?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function P(A){const M=A.target;M.removeEventListener("dispose",P),T(M),M.isVideoTexture&&c.delete(M)}function E(A){const M=A.target;M.removeEventListener("dispose",E),N(M)}function T(A){const M=i.get(A);if(M.__webglInit===void 0)return;const B=A.source,J=f.get(B);if(J){const tt=J[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&R(A),Object.keys(J).length===0&&f.delete(B)}i.remove(A)}function R(A){const M=i.get(A);s.deleteTexture(M.__webglTexture);const B=A.source,J=f.get(B);delete J[M.__cacheKey],r.memory.textures--}function N(A){const M=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let tt=0;tt<M.__webglFramebuffer[J].length;tt++)s.deleteFramebuffer(M.__webglFramebuffer[J][tt]);else s.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)s.deleteFramebuffer(M.__webglFramebuffer[J]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=A.textures;for(let J=0,tt=B.length;J<tt;J++){const j=i.get(B[J]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),r.memory.textures--),i.remove(B[J])}i.remove(A)}let v=0;function S(){v=0}function F(){const A=v;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),v+=1,A}function O(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function W(A,M){const B=i.get(A);if(A.isVideoTexture&&Dt(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Zt(B,A,M);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+M)}function K(A,M){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Zt(B,A,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+M)}function V(A,M){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Zt(B,A,M);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+M)}function Z(A,M){const B=i.get(A);if(A.version>0&&B.__version!==A.version){X(B,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+M)}const q={[gr]:s.REPEAT,[Qi]:s.CLAMP_TO_EDGE,[xr]:s.MIRRORED_REPEAT},ut={[Je]:s.NEAREST,[Kc]:s.NEAREST_MIPMAP_NEAREST,[fs]:s.NEAREST_MIPMAP_LINEAR,[ei]:s.LINEAR,[xa]:s.LINEAR_MIPMAP_NEAREST,[tn]:s.LINEAR_MIPMAP_LINEAR},ht={[$c]:s.NEVER,[sl]:s.ALWAYS,[Qc]:s.LESS,[Hh]:s.LEQUAL,[tl]:s.EQUAL,[nl]:s.GEQUAL,[el]:s.GREATER,[il]:s.NOTEQUAL};function bt(A,M){if(M.type===xi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ei||M.magFilter===xa||M.magFilter===fs||M.magFilter===tn||M.minFilter===ei||M.minFilter===xa||M.minFilter===fs||M.minFilter===tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,q[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,q[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,q[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ut[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ut[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ht[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Je||M.minFilter!==fs&&M.minFilter!==tn||M.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Wt(A,M){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",P));const J=M.source;let tt=f.get(J);tt===void 0&&(tt={},f.set(J,tt));const j=O(M);if(j!==A.__cacheKey){tt[j]===void 0&&(tt[j]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,B=!0),tt[j].usedTimes++;const wt=tt[A.__cacheKey];wt!==void 0&&(tt[A.__cacheKey].usedTimes--,wt.usedTimes===0&&R(M)),A.__cacheKey=j,A.__webglTexture=tt[j].texture}return B}function Zt(A,M,B){let J=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=s.TEXTURE_3D);const tt=Wt(A,M),j=M.source;e.bindTexture(J,A.__webglTexture,s.TEXTURE0+B);const wt=i.get(j);if(j.version!==wt.__version||tt===!0){e.activeTexture(s.TEXTURE0+B);const ot=ee.getPrimaries(ee.workingColorSpace),mt=M.colorSpace===ki?null:ee.getPrimaries(M.colorSpace),jt=M.colorSpace===ki||ot===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let it=x(M.image,!1,n.maxTextureSize);it=le(M,it);const gt=a.convert(M.format,M.colorSpace),It=a.convert(M.type);let Ut=y(M.internalFormat,gt,It,M.colorSpace,M.isVideoTexture);bt(J,M);let xt;const Vt=M.mipmaps,Ft=M.isVideoTexture!==!0,he=wt.__version===void 0||tt===!0,D=j.dataReady,ft=b(M,it);if(M.isDepthTexture)Ut=_(M.format===Un,M.type),he&&(Ft?e.texStorage2D(s.TEXTURE_2D,1,Ut,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,Ut,it.width,it.height,0,gt,It,null));else if(M.isDataTexture)if(Vt.length>0){Ft&&he&&e.texStorage2D(s.TEXTURE_2D,ft,Ut,Vt[0].width,Vt[0].height);for(let Y=0,$=Vt.length;Y<$;Y++)xt=Vt[Y],Ft?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,xt.width,xt.height,gt,It,xt.data):e.texImage2D(s.TEXTURE_2D,Y,Ut,xt.width,xt.height,0,gt,It,xt.data);M.generateMipmaps=!1}else Ft?(he&&e.texStorage2D(s.TEXTURE_2D,ft,Ut,it.width,it.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it.width,it.height,gt,It,it.data)):e.texImage2D(s.TEXTURE_2D,0,Ut,it.width,it.height,0,gt,It,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ft&&he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Ut,Vt[0].width,Vt[0].height,it.depth);for(let Y=0,$=Vt.length;Y<$;Y++)if(xt=Vt[Y],M.format!==ni)if(gt!==null)if(Ft){if(D)if(M.layerUpdates.size>0){const ct=ph(xt.width,xt.height,M.format,M.type);for(const pt of M.layerUpdates){const qt=xt.data.subarray(pt*ct/xt.data.BYTES_PER_ELEMENT,(pt+1)*ct/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,pt,xt.width,xt.height,1,gt,qt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,it.depth,gt,xt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Ut,xt.width,xt.height,it.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,it.depth,gt,It,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Ut,xt.width,xt.height,it.depth,0,gt,It,xt.data)}else{Ft&&he&&e.texStorage2D(s.TEXTURE_2D,ft,Ut,Vt[0].width,Vt[0].height);for(let Y=0,$=Vt.length;Y<$;Y++)xt=Vt[Y],M.format!==ni?gt!==null?Ft?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Ut,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,xt.width,xt.height,gt,It,xt.data):e.texImage2D(s.TEXTURE_2D,Y,Ut,xt.width,xt.height,0,gt,It,xt.data)}else if(M.isDataArrayTexture)if(Ft){if(he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Ut,it.width,it.height,it.depth),D)if(M.layerUpdates.size>0){const Y=ph(it.width,it.height,M.format,M.type);for(const $ of M.layerUpdates){const ct=it.data.subarray($*Y/it.data.BYTES_PER_ELEMENT,($+1)*Y/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,it.width,it.height,1,gt,It,ct)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,gt,It,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,it.width,it.height,it.depth,0,gt,It,it.data);else if(M.isData3DTexture)Ft?(he&&e.texStorage3D(s.TEXTURE_3D,ft,Ut,it.width,it.height,it.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,gt,It,it.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,it.width,it.height,it.depth,0,gt,It,it.data);else if(M.isFramebufferTexture){if(he)if(Ft)e.texStorage2D(s.TEXTURE_2D,ft,Ut,it.width,it.height);else{let Y=it.width,$=it.height;for(let ct=0;ct<ft;ct++)e.texImage2D(s.TEXTURE_2D,ct,Ut,Y,$,0,gt,It,null),Y>>=1,$>>=1}}else if(Vt.length>0){if(Ft&&he){const Y=kt(Vt[0]);e.texStorage2D(s.TEXTURE_2D,ft,Ut,Y.width,Y.height)}for(let Y=0,$=Vt.length;Y<$;Y++)xt=Vt[Y],Ft?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,gt,It,xt):e.texImage2D(s.TEXTURE_2D,Y,Ut,gt,It,xt);M.generateMipmaps=!1}else if(Ft){if(he){const Y=kt(it);e.texStorage2D(s.TEXTURE_2D,ft,Ut,Y.width,Y.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,It,it)}else e.texImage2D(s.TEXTURE_2D,0,Ut,gt,It,it);p(M)&&m(J),wt.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function X(A,M,B){if(M.image.length!==6)return;const J=Wt(A,M),tt=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);const j=i.get(tt);if(tt.version!==j.__version||J===!0){e.activeTexture(s.TEXTURE0+B);const wt=ee.getPrimaries(ee.workingColorSpace),ot=M.colorSpace===ki?null:ee.getPrimaries(M.colorSpace),mt=M.colorSpace===ki||wt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const jt=M.isCompressedTexture||M.image[0].isCompressedTexture,it=M.image[0]&&M.image[0].isDataTexture,gt=[];for(let $=0;$<6;$++)!jt&&!it?gt[$]=x(M.image[$],!0,n.maxCubemapSize):gt[$]=it?M.image[$].image:M.image[$],gt[$]=le(M,gt[$]);const It=gt[0],Ut=a.convert(M.format,M.colorSpace),xt=a.convert(M.type),Vt=y(M.internalFormat,Ut,xt,M.colorSpace),Ft=M.isVideoTexture!==!0,he=j.__version===void 0||J===!0,D=tt.dataReady;let ft=b(M,It);bt(s.TEXTURE_CUBE_MAP,M);let Y;if(jt){Ft&&he&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,Vt,It.width,It.height);for(let $=0;$<6;$++){Y=gt[$].mipmaps;for(let ct=0;ct<Y.length;ct++){const pt=Y[ct];M.format!==ni?Ut!==null?Ft?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,pt.width,pt.height,Ut,pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Vt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,pt.width,pt.height,Ut,xt,pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Vt,pt.width,pt.height,0,Ut,xt,pt.data)}}}else{if(Y=M.mipmaps,Ft&&he){Y.length>0&&ft++;const $=kt(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,Vt,$.width,$.height)}for(let $=0;$<6;$++)if(it){Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,gt[$].width,gt[$].height,Ut,xt,gt[$].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,gt[$].width,gt[$].height,0,Ut,xt,gt[$].data);for(let ct=0;ct<Y.length;ct++){const qt=Y[ct].image[$].image;Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,qt.width,qt.height,Ut,xt,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Vt,qt.width,qt.height,0,Ut,xt,qt.data)}}else{Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ut,xt,gt[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,Ut,xt,gt[$]);for(let ct=0;ct<Y.length;ct++){const pt=Y[ct];Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Ut,xt,pt.image[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Vt,Ut,xt,pt.image[$])}}}p(M)&&m(s.TEXTURE_CUBE_MAP),j.__version=tt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function et(A,M,B,J,tt,j){const wt=a.convert(B.format,B.colorSpace),ot=a.convert(B.type),mt=y(B.internalFormat,wt,ot,B.colorSpace);if(!i.get(M).__hasExternalTextures){const it=Math.max(1,M.width>>j),gt=Math.max(1,M.height>>j);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,j,mt,it,gt,M.depth,0,wt,ot,null):e.texImage2D(tt,j,mt,it,gt,0,wt,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Kt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,tt,i.get(B).__webglTexture,0,Ht(M)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,tt,i.get(B).__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(A,M,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){const J=M.depthTexture,tt=J&&J.isDepthTexture?J.type:null,j=_(M.stencilBuffer,tt),wt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=Ht(M);Kt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,j,M.width,M.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,j,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,j,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,A)}else{const J=M.textures;for(let tt=0;tt<J.length;tt++){const j=J[tt],wt=a.convert(j.format,j.colorSpace),ot=a.convert(j.type),mt=y(j.internalFormat,wt,ot,j.colorSpace),jt=Ht(M);B&&Kt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,mt,M.width,M.height):Kt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt,mt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,mt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function dt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const J=i.get(M.depthTexture).__webglTexture,tt=Ht(M);if(M.depthTexture.format===An)Kt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(M.depthTexture.format===Un)Kt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Lt(A){const M=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=J}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");dt(M.__webglFramebuffer,A)}else if(B){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=s.createRenderbuffer(),vt(M.__webglDepthbuffer[J],A,!1);else{const tt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),vt(M.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,tt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(A,M,B){const J=i.get(A);M!==void 0&&et(J.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Lt(A)}function Xt(A){const M=A.texture,B=i.get(A),J=i.get(M);A.addEventListener("dispose",E);const tt=A.textures,j=A.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=M.version,r.memory.textures++),j){B.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ot]=[];for(let mt=0;mt<M.mipmaps.length;mt++)B.__webglFramebuffer[ot][mt]=s.createFramebuffer()}else B.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ot=0;ot<M.mipmaps.length;ot++)B.__webglFramebuffer[ot]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(wt)for(let ot=0,mt=tt.length;ot<mt;ot++){const jt=i.get(tt[ot]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),r.memory.textures++)}if(A.samples>0&&Kt(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ot=0;ot<tt.length;ot++){const mt=tt[ot];B.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[ot]);const jt=a.convert(mt.format,mt.colorSpace),it=a.convert(mt.type),gt=y(mt.internalFormat,jt,it,mt.colorSpace,A.isXRRenderTarget===!0),It=Ht(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,It,gt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,B.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),vt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),bt(s.TEXTURE_CUBE_MAP,M);for(let ot=0;ot<6;ot++)if(M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)et(B.__webglFramebuffer[ot][mt],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,mt);else et(B.__webglFramebuffer[ot],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(M)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ot=0,mt=tt.length;ot<mt;ot++){const jt=tt[ot],it=i.get(jt);e.bindTexture(s.TEXTURE_2D,it.__webglTexture),bt(s.TEXTURE_2D,jt),et(B.__webglFramebuffer,A,jt,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,0),p(jt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,J.__webglTexture),bt(ot,M),M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)et(B.__webglFramebuffer[mt],A,M,s.COLOR_ATTACHMENT0,ot,mt);else et(B.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,ot,0);p(M)&&m(ot),e.unbindTexture()}A.depthBuffer&&Lt(A)}function re(A){const M=A.textures;for(let B=0,J=M.length;B<J;B++){const tt=M[B];if(p(tt)){const j=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,wt=i.get(tt).__webglTexture;e.bindTexture(j,wt),m(j),e.unbindTexture()}}}const Yt=[],L=[];function Ge(A){if(A.samples>0){if(Kt(A)===!1){const M=A.textures,B=A.width,J=A.height;let tt=s.COLOR_BUFFER_BIT;const j=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=i.get(A),ot=M.length>1;if(ot)for(let mt=0;mt<M.length;mt++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let mt=0;mt<M.length;mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[mt]);const jt=i.get(M[mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,jt,0)}s.blitFramebuffer(0,0,B,J,0,0,B,J,tt,s.NEAREST),h===!0&&(Yt.length=0,L.length=0,Yt.push(s.COLOR_ATTACHMENT0+mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Yt.push(j),L.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Yt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let mt=0;mt<M.length;mt++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,wt.__webglColorRenderbuffer[mt]);const jt=i.get(M[mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&h){const M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Ht(A){return Math.min(n.maxSamples,A.samples)}function Kt(A){const M=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Dt(A){const M=r.render.frame;c.get(A)!==M&&(c.set(A,M),A.update())}function le(A,M){const B=A.colorSpace,J=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Bi&&B!==ki&&(ee.getTransfer(B)===de?(J!==ni||tt!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function kt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=S,this.setTexture2D=W,this.setTexture2DArray=K,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=Ct,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Kt}function Tm(s,t){function e(i,n=ki){let a;const r=ee.getTransfer(n);if(i===Mi)return s.UNSIGNED_BYTE;if(i===jr)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Jr)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Ih)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Lh)return s.BYTE;if(i===Dh)return s.SHORT;if(i===as)return s.UNSIGNED_SHORT;if(i===Kr)return s.INT;if(i===en)return s.UNSIGNED_INT;if(i===xi)return s.FLOAT;if(i===hs)return s.HALF_FLOAT;if(i===Uh)return s.ALPHA;if(i===kh)return s.RGB;if(i===ni)return s.RGBA;if(i===Nh)return s.LUMINANCE;if(i===Fh)return s.LUMINANCE_ALPHA;if(i===An)return s.DEPTH_COMPONENT;if(i===Un)return s.DEPTH_STENCIL;if(i===Oh)return s.RED;if(i===Zr)return s.RED_INTEGER;if(i===Bh)return s.RG;if(i===$r)return s.RG_INTEGER;if(i===Qr)return s.RGBA_INTEGER;if(i===Gs||i===zs||i===Hs||i===Vs)if(r===de)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Gs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Gs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vr||i===_r||i===yr||i===br)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===vr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_r)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===br)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mr||i===Sr||i===wr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Mr||i===Sr)return r===de?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===wr)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Tr||i===Er||i===Ar||i===Cr||i===Rr||i===Pr||i===Lr||i===Dr||i===Ir||i===Ur||i===kr||i===Nr||i===Fr||i===Or)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Tr)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Er)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ar)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cr)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rr)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pr)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lr)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dr)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ir)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ur)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kr)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nr)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fr)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Or)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ws||i===Br||i===Gr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Ws)return r===de?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Br)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gh||i===zr||i===Hr||i===Vr)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Ws)return a.COMPRESSED_RED_RGTC1_EXT;if(i===zr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===In?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}class Em extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class St extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Am={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,r=null;const o=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=c.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Am)))}return o!==null&&(o.visible=n!==null),h!==null&&(h.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new St;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Cm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rm=`
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

}`;class Pm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new Ne,a=t.properties.get(n);a.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new hi({vertexShader:Cm,fragmentShader:Rm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new k(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lm extends On{constructor(t,e){super();const i=this;let n=null,a=1,r=null,o="local-floor",h=1,l=null,c=null,u=null,f=null,d=null,g=null;const x=new Pm,p=e.getContextAttributes();let m=null,y=null;const _=[],b=[],P=new _t;let E=null;const T=new Xe;T.layers.enable(1),T.viewport=new oe;const R=new Xe;R.layers.enable(2),R.viewport=new oe;const N=[T,R],v=new Em;v.layers.enable(1),v.layers.enable(2);let S=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=_[X];return et===void 0&&(et=new Xa,_[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=_[X];return et===void 0&&(et=new Xa,_[X]=et),et.getGripSpace()},this.getHand=function(X){let et=_[X];return et===void 0&&(et=new Xa,_[X]=et),et.getHandSpace()};function O(X){const et=b.indexOf(X.inputSource);if(et===-1)return;const vt=_[et];vt!==void 0&&(vt.update(X.inputSource,X.frame,l||r),vt.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",K);for(let X=0;X<_.length;X++){const et=b[X];et!==null&&(b[X]=null,_[X].disconnect(et))}S=null,F=null,x.reset(),t.setRenderTarget(m),d=null,f=null,u=null,n=null,y=null,Zt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",W),n.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(P),n.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(n,e,et),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new nn(d.framebufferWidth,d.framebufferHeight,{format:ni,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,vt=null,dt=null;p.depth&&(dt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?Un:An,vt=p.stencil?In:en);const Lt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:a};u=new XRWebGLBinding(n,e),f=u.createProjectionLayer(Lt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new nn(f.textureWidth,f.textureHeight,{format:ni,type:Mi,depthTexture:new ic(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(h),l=null,r=await n.requestReferenceSpace(o),Zt.setContext(n),Zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(X){for(let et=0;et<X.removed.length;et++){const vt=X.removed[et],dt=b.indexOf(vt);dt>=0&&(b[dt]=null,_[dt].disconnect(vt))}for(let et=0;et<X.added.length;et++){const vt=X.added[et];let dt=b.indexOf(vt);if(dt===-1){for(let Ct=0;Ct<_.length;Ct++)if(Ct>=b.length){b.push(vt),dt=Ct;break}else if(b[Ct]===null){b[Ct]=vt,dt=Ct;break}if(dt===-1)break}const Lt=_[dt];Lt&&Lt.connect(vt)}}const V=new C,Z=new C;function q(X,et,vt){V.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(vt.matrixWorld);const dt=V.distanceTo(Z),Lt=et.projectionMatrix.elements,Ct=vt.projectionMatrix.elements,Xt=Lt[14]/(Lt[10]-1),re=Lt[14]/(Lt[10]+1),Yt=(Lt[9]+1)/Lt[5],L=(Lt[9]-1)/Lt[5],Ge=(Lt[8]-1)/Lt[0],Ht=(Ct[8]+1)/Ct[0],Kt=Xt*Ge,Dt=Xt*Ht,le=dt/(-Ge+Ht),kt=le*-Ge;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(kt),X.translateZ(le),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Lt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const A=Xt+le,M=re+le,B=Kt-kt,J=Dt+(dt-kt),tt=Yt*re/M*A,j=L*re/M*A;X.projectionMatrix.makePerspective(B,J,tt,j,A,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ut(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;let et=X.near,vt=X.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(vt=x.depthFar)),v.near=R.near=T.near=et,v.far=R.far=T.far=vt,(S!==v.near||F!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,F=v.far);const dt=X.parent,Lt=v.cameras;ut(v,dt);for(let Ct=0;Ct<Lt.length;Ct++)ut(Lt[Ct],dt);Lt.length===2?q(v,T,R):v.projectionMatrix.copy(T.projectionMatrix),ht(X,v,dt)};function ht(X,et,vt){vt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(vt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=rs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return h},this.setFoveation=function(X){h=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let bt=null;function Wt(X,et){if(c=et.getViewerPose(l||r),g=et,c!==null){const vt=c.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let dt=!1;vt.length!==v.cameras.length&&(v.cameras.length=0,dt=!0);for(let Ct=0;Ct<vt.length;Ct++){const Xt=vt[Ct];let re=null;if(d!==null)re=d.getViewport(Xt);else{const L=u.getViewSubImage(f,Xt);re=L.viewport,Ct===0&&(t.setRenderTargetTextures(y,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(y))}let Yt=N[Ct];Yt===void 0&&(Yt=new Xe,Yt.layers.enable(Ct),Yt.viewport=new oe,N[Ct]=Yt),Yt.matrix.fromArray(Xt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Xt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(re.x,re.y,re.width,re.height),Ct===0&&(v.matrix.copy(Yt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),dt===!0&&v.cameras.push(Yt)}const Lt=n.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Ct=u.getDepthInformation(vt[0]);Ct&&Ct.isValid&&Ct.texture&&x.init(t,Ct,n.renderState)}}for(let vt=0;vt<_.length;vt++){const dt=b[vt],Lt=_[vt];dt!==null&&Lt!==void 0&&Lt.update(dt,et,l||r)}bt&&bt(X,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}const Zt=new tc;Zt.setAnimationLoop(Wt),this.setAnimationLoop=function(X){bt=X},this.dispose=function(){}}}const Yi=new oi,Dm=new ce;function Im(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Zh(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,y,_,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(p,m):m.isMeshToonMaterial?(a(p,m),u(p,m)):m.isMeshPhongMaterial?(a(p,m),c(p,m)):m.isMeshStandardMaterial?(a(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,b)):m.isMeshMatcapMaterial?(a(p,m),g(p,m)):m.isMeshDepthMaterial?a(p,m):m.isMeshDistanceMaterial?(a(p,m),x(p,m)):m.isMeshNormalMaterial?a(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?h(p,m,y,_):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ke&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ke&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),_=y.envMap,b=y.envMapRotation;_&&(p.envMap.value=_,Yi.copy(b),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),p.envMapRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(Yi)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function h(p,m,y,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ke&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Um(s,t,e,i){let n={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(y,_){const b=_.program;i.uniformBlockBinding(y,b)}function l(y,_){let b=n[y.id];b===void 0&&(g(y),b=c(y),n[y.id]=b,y.addEventListener("dispose",p));const P=_.program;i.updateUBOMapping(y,P);const E=t.render.frame;a[y.id]!==E&&(f(y),a[y.id]=E)}function c(y){const _=u();y.__bindingPointIndex=_;const b=s.createBuffer(),P=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,P,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,b),b}function u(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const _=n[y.id],b=y.uniforms,P=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let E=0,T=b.length;E<T;E++){const R=Array.isArray(b[E])?b[E]:[b[E]];for(let N=0,v=R.length;N<v;N++){const S=R[N];if(d(S,E,N,P)===!0){const F=S.__offset,O=Array.isArray(S.value)?S.value:[S.value];let W=0;for(let K=0;K<O.length;K++){const V=O[K],Z=x(V);typeof V=="number"||typeof V=="boolean"?(S.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,F+W,S.__data)):V.isMatrix3?(S.__data[0]=V.elements[0],S.__data[1]=V.elements[1],S.__data[2]=V.elements[2],S.__data[3]=0,S.__data[4]=V.elements[3],S.__data[5]=V.elements[4],S.__data[6]=V.elements[5],S.__data[7]=0,S.__data[8]=V.elements[6],S.__data[9]=V.elements[7],S.__data[10]=V.elements[8],S.__data[11]=0):(V.toArray(S.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,_,b,P){const E=y.value,T=_+"_"+b;if(P[T]===void 0)return typeof E=="number"||typeof E=="boolean"?P[T]=E:P[T]=E.clone(),!0;{const R=P[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return P[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(y){const _=y.uniforms;let b=0;const P=16;for(let T=0,R=_.length;T<R;T++){const N=Array.isArray(_[T])?_[T]:[_[T]];for(let v=0,S=N.length;v<S;v++){const F=N[v],O=Array.isArray(F.value)?F.value:[F.value];for(let W=0,K=O.length;W<K;W++){const V=O[W],Z=x(V),q=b%P,ut=q%Z.boundary,ht=q+ut;b+=ut,ht!==0&&P-ht<Z.storage&&(b+=P-ht),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=Z.storage}}}const E=b%P;return E>0&&(b+=P-E),y.__size=b,y.__cache={},this}function x(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){const _=y.target;_.removeEventListener("dispose",p);const b=r.indexOf(_.__bindingPointIndex);r.splice(b,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete a[_.id]}function m(){for(const y in n)s.deleteBuffer(n[y]);r=[],n={},a={}}return{bind:h,update:l,dispose:m}}class km{constructor(t={}){const{canvas:e=bl(),context:i=null,depth:n=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;const d=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ai,this.toneMapping=Fi,this.toneMappingExposure=1;const _=this;let b=!1,P=0,E=0,T=null,R=-1,N=null;const v=new oe,S=new oe;let F=null;const O=new st(0);let W=0,K=e.width,V=e.height,Z=1,q=null,ut=null;const ht=new oe(0,0,K,V),bt=new oe(0,0,K,V);let Wt=!1;const Zt=new io;let X=!1,et=!1;const vt=new ce,dt=new ce,Lt=new C,Ct=new oe,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Yt(){return T===null?Z:1}let L=i;function Ge(w,I){return e.getContext(w,I)}try{const w={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qr}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",pt,!1),L===null){const I="webgl2";if(L=Ge(I,w),L===null)throw Ge(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ht,Kt,Dt,le,kt,A,M,B,J,tt,j,wt,ot,mt,jt,it,gt,It,Ut,xt,Vt,Ft,he,D;function ft(){Ht=new Gf(L),Ht.init(),Ft=new Tm(L,Ht),Kt=new Uf(L,Ht,t,Ft),Dt=new Mm(L),Kt.reverseDepthBuffer&&Dt.buffers.depth.setReversed(!0),le=new Vf(L),kt=new om,A=new wm(L,Ht,Dt,kt,Kt,Ft,le),M=new Nf(_),B=new Bf(_),J=new jl(L),he=new Df(L,J),tt=new zf(L,J,le,he),j=new Xf(L,tt,J,le),Ut=new Wf(L,Kt,A),it=new kf(kt),wt=new rm(_,M,B,Ht,Kt,he,it),ot=new Im(_,kt),mt=new cm,jt=new mm(Ht),It=new Lf(_,M,B,Dt,j,f,h),gt=new ym(_,j,Kt),D=new Um(L,le,Kt,Dt),xt=new If(L,Ht,le),Vt=new Hf(L,Ht,le),le.programs=wt.programs,_.capabilities=Kt,_.extensions=Ht,_.properties=kt,_.renderLists=mt,_.shadowMap=gt,_.state=Dt,_.info=le}ft();const Y=new Lm(_,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(K,V,!1))},this.getSize=function(w){return w.set(K,V)},this.setSize=function(w,I,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,V=I,e.width=Math.floor(w*Z),e.height=Math.floor(I*Z),G===!0&&(e.style.width=w+"px",e.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(K*Z,V*Z).floor()},this.setDrawingBufferSize=function(w,I,G){K=w,V=I,Z=G,e.width=Math.floor(w*G),e.height=Math.floor(I*G),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(v)},this.getViewport=function(w){return w.copy(ht)},this.setViewport=function(w,I,G,H){w.isVector4?ht.set(w.x,w.y,w.z,w.w):ht.set(w,I,G,H),Dt.viewport(v.copy(ht).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(bt)},this.setScissor=function(w,I,G,H){w.isVector4?bt.set(w.x,w.y,w.z,w.w):bt.set(w,I,G,H),Dt.scissor(S.copy(bt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(w){Dt.setScissorTest(Wt=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){ut=w},this.getClearColor=function(w){return w.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(w=!0,I=!0,G=!0){let H=0;if(w){let U=!1;if(T!==null){const nt=T.texture.format;U=nt===Qr||nt===$r||nt===Zr}if(U){const nt=T.texture.type,lt=nt===Mi||nt===en||nt===as||nt===In||nt===jr||nt===Jr,yt=It.getClearColor(),Mt=It.getClearAlpha(),Rt=yt.r,Pt=yt.g,Tt=yt.b;lt?(d[0]=Rt,d[1]=Pt,d[2]=Tt,d[3]=Mt,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=Rt,g[1]=Pt,g[2]=Tt,g[3]=Mt,L.clearBufferiv(L.COLOR,0,g))}else H|=L.COLOR_BUFFER_BIT}I&&(H|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),mt.dispose(),jt.dispose(),kt.dispose(),M.dispose(),B.dispose(),j.dispose(),he.dispose(),D.dispose(),wt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",fo),Y.removeEventListener("sessionend",po),Gi.stop()};function $(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=le.autoReset,I=gt.enabled,G=gt.autoUpdate,H=gt.needsUpdate,U=gt.type;ft(),le.autoReset=w,gt.enabled=I,gt.autoUpdate=G,gt.needsUpdate=H,gt.type=U}function pt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function qt(w){const I=w.target;I.removeEventListener("dispose",qt),xe(I)}function xe(w){Oe(w),kt.remove(w)}function Oe(w){const I=kt.get(w).programs;I!==void 0&&(I.forEach(function(G){wt.releaseProgram(G)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,G,H,U,nt){I===null&&(I=Xt);const lt=U.isMesh&&U.matrixWorld.determinant()<0,yt=mc(w,I,G,H,U);Dt.setMaterial(H,lt);let Mt=G.index,Rt=1;if(H.wireframe===!0){if(Mt=tt.getWireframeAttribute(G),Mt===void 0)return;Rt=2}const Pt=G.drawRange,Tt=G.attributes.position;let ie=Pt.start*Rt,ue=(Pt.start+Pt.count)*Rt;nt!==null&&(ie=Math.max(ie,nt.start*Rt),ue=Math.min(ue,(nt.start+nt.count)*Rt)),Mt!==null?(ie=Math.max(ie,0),ue=Math.min(ue,Mt.count)):Tt!=null&&(ie=Math.max(ie,0),ue=Math.min(ue,Tt.count));const me=ue-ie;if(me<0||me===1/0)return;he.setup(U,H,yt,G,Mt);let ze,Qt=xt;if(Mt!==null&&(ze=J.get(Mt),Qt=Vt,Qt.setIndex(ze)),U.isMesh)H.wireframe===!0?(Dt.setLineWidth(H.wireframeLinewidth*Yt()),Qt.setMode(L.LINES)):Qt.setMode(L.TRIANGLES);else if(U.isLine){let At=H.linewidth;At===void 0&&(At=1),Dt.setLineWidth(At*Yt()),U.isLineSegments?Qt.setMode(L.LINES):U.isLineLoop?Qt.setMode(L.LINE_LOOP):Qt.setMode(L.LINE_STRIP)}else U.isPoints?Qt.setMode(L.POINTS):U.isSprite&&Qt.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Qt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Qt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const At=U._multiDrawStarts,Ee=U._multiDrawCounts,te=U._multiDrawCount,Ze=Mt?J.get(Mt).bytesPerElement:1,rn=kt.get(H).currentProgram.getUniforms();for(let He=0;He<te;He++)rn.setValue(L,"_gl_DrawID",He),Qt.render(At[He]/Ze,Ee[He])}else if(U.isInstancedMesh)Qt.renderInstances(ie,me,U.count);else if(G.isInstancedBufferGeometry){const At=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ee=Math.min(G.instanceCount,At);Qt.renderInstances(ie,me,Ee)}else Qt.render(ie,me)};function $t(w,I,G){w.transparent===!0&&w.side===se&&w.forceSinglePass===!1?(w.side=ke,w.needsUpdate=!0,ds(w,I,G),w.side=Oi,w.needsUpdate=!0,ds(w,I,G),w.side=se):ds(w,I,G)}this.compile=function(w,I,G=null){G===null&&(G=w),p=jt.get(G),p.init(I),y.push(p),G.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),w!==G&&w.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const H=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const nt=U.material;if(nt)if(Array.isArray(nt))for(let lt=0;lt<nt.length;lt++){const yt=nt[lt];$t(yt,G,U),H.add(yt)}else $t(nt,G,U),H.add(nt)}),y.pop(),p=null,H},this.compileAsync=function(w,I,G=null){const H=this.compile(w,I,G);return new Promise(U=>{function nt(){if(H.forEach(function(lt){kt.get(lt).currentProgram.isReady()&&H.delete(lt)}),H.size===0){U(w);return}setTimeout(nt,10)}Ht.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Be=null;function li(w){Be&&Be(w)}function fo(){Gi.stop()}function po(){Gi.start()}const Gi=new tc;Gi.setAnimationLoop(li),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(w){Be=w,Y.setAnimationLoop(w),w===null?Gi.stop():Gi.start()},Y.addEventListener("sessionstart",fo),Y.addEventListener("sessionend",po),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(I),I=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,I,T),p=jt.get(w,y.length),p.init(I),y.push(p),dt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Zt.setFromProjectionMatrix(dt),et=this.localClippingEnabled,X=it.init(this.clippingPlanes,et),x=mt.get(w,m.length),x.init(),m.push(x),Y.enabled===!0&&Y.isPresenting===!0){const nt=_.xr.getDepthSensingMesh();nt!==null&&fa(nt,I,-1/0,_.sortObjects)}fa(w,I,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(q,ut),re=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,re&&It.addToRenderList(x,w),this.info.render.frame++,X===!0&&it.beginShadows();const G=p.state.shadowsArray;gt.render(G,w,I),X===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=x.opaque,U=x.transmissive;if(p.setupLights(),I.isArrayCamera){const nt=I.cameras;if(U.length>0)for(let lt=0,yt=nt.length;lt<yt;lt++){const Mt=nt[lt];go(H,U,w,Mt)}re&&It.render(w);for(let lt=0,yt=nt.length;lt<yt;lt++){const Mt=nt[lt];mo(x,w,Mt,Mt.viewport)}}else U.length>0&&go(H,U,w,I),re&&It.render(w),mo(x,w,I);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(_,w,I),he.resetDefaultState(),R=-1,N=null,y.pop(),y.length>0?(p=y[y.length-1],X===!0&&it.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function fa(w,I,G,H){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Zt.intersectsSprite(w)){H&&Ct.setFromMatrixPosition(w.matrixWorld).applyMatrix4(dt);const lt=j.update(w),yt=w.material;yt.visible&&x.push(w,lt,yt,G,Ct.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Zt.intersectsObject(w))){const lt=j.update(w),yt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ct.copy(w.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ct.copy(lt.boundingSphere.center)),Ct.applyMatrix4(w.matrixWorld).applyMatrix4(dt)),Array.isArray(yt)){const Mt=lt.groups;for(let Rt=0,Pt=Mt.length;Rt<Pt;Rt++){const Tt=Mt[Rt],ie=yt[Tt.materialIndex];ie&&ie.visible&&x.push(w,lt,ie,G,Ct.z,Tt)}}else yt.visible&&x.push(w,lt,yt,G,Ct.z,null)}}const nt=w.children;for(let lt=0,yt=nt.length;lt<yt;lt++)fa(nt[lt],I,G,H)}function mo(w,I,G,H){const U=w.opaque,nt=w.transmissive,lt=w.transparent;p.setupLightsView(G),X===!0&&it.setGlobalState(_.clippingPlanes,G),H&&Dt.viewport(v.copy(H)),U.length>0&&us(U,I,G),nt.length>0&&us(nt,I,G),lt.length>0&&us(lt,I,G),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function go(w,I,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new nn(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?hs:Mi,minFilter:tn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const nt=p.state.transmissionRenderTarget[H.id],lt=H.viewport||v;nt.setSize(lt.z,lt.w);const yt=_.getRenderTarget();_.setRenderTarget(nt),_.getClearColor(O),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),re&&It.render(G);const Mt=_.toneMapping;_.toneMapping=Fi;const Rt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),X===!0&&it.setGlobalState(_.clippingPlanes,H),us(w,G,H),A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Tt=0,ie=I.length;Tt<ie;Tt++){const ue=I[Tt],me=ue.object,ze=ue.geometry,Qt=ue.material,At=ue.group;if(Qt.side===se&&me.layers.test(H.layers)){const Ee=Qt.side;Qt.side=ke,Qt.needsUpdate=!0,xo(me,G,H,ze,Qt,At),Qt.side=Ee,Qt.needsUpdate=!0,Pt=!0}}Pt===!0&&(A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt))}_.setRenderTarget(yt),_.setClearColor(O,W),Rt!==void 0&&(H.viewport=Rt),_.toneMapping=Mt}function us(w,I,G){const H=I.isScene===!0?I.overrideMaterial:null;for(let U=0,nt=w.length;U<nt;U++){const lt=w[U],yt=lt.object,Mt=lt.geometry,Rt=H===null?lt.material:H,Pt=lt.group;yt.layers.test(G.layers)&&xo(yt,I,G,Mt,Rt,Pt)}}function xo(w,I,G,H,U,nt){w.onBeforeRender(_,I,G,H,U,nt),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(_,I,G,H,w,nt),U.transparent===!0&&U.side===se&&U.forceSinglePass===!1?(U.side=ke,U.needsUpdate=!0,_.renderBufferDirect(G,I,H,U,w,nt),U.side=Oi,U.needsUpdate=!0,_.renderBufferDirect(G,I,H,U,w,nt),U.side=se):_.renderBufferDirect(G,I,H,U,w,nt),w.onAfterRender(_,I,G,H,U,nt)}function ds(w,I,G){I.isScene!==!0&&(I=Xt);const H=kt.get(w),U=p.state.lights,nt=p.state.shadowsArray,lt=U.state.version,yt=wt.getParameters(w,U.state,nt,I,G),Mt=wt.getProgramCacheKey(yt);let Rt=H.programs;H.environment=w.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(w.isMeshStandardMaterial?B:M).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,Rt===void 0&&(w.addEventListener("dispose",qt),Rt=new Map,H.programs=Rt);let Pt=Rt.get(Mt);if(Pt!==void 0){if(H.currentProgram===Pt&&H.lightsStateVersion===lt)return _o(w,yt),Pt}else yt.uniforms=wt.getUniforms(w),w.onBeforeCompile(yt,_),Pt=wt.acquireProgram(yt,Mt),Rt.set(Mt,Pt),H.uniforms=yt.uniforms;const Tt=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Tt.clippingPlanes=it.uniform),_o(w,yt),H.needsLights=xc(w),H.lightsStateVersion=lt,H.needsLights&&(Tt.ambientLightColor.value=U.state.ambient,Tt.lightProbe.value=U.state.probe,Tt.directionalLights.value=U.state.directional,Tt.directionalLightShadows.value=U.state.directionalShadow,Tt.spotLights.value=U.state.spot,Tt.spotLightShadows.value=U.state.spotShadow,Tt.rectAreaLights.value=U.state.rectArea,Tt.ltc_1.value=U.state.rectAreaLTC1,Tt.ltc_2.value=U.state.rectAreaLTC2,Tt.pointLights.value=U.state.point,Tt.pointLightShadows.value=U.state.pointShadow,Tt.hemisphereLights.value=U.state.hemi,Tt.directionalShadowMap.value=U.state.directionalShadowMap,Tt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Tt.spotShadowMap.value=U.state.spotShadowMap,Tt.spotLightMatrix.value=U.state.spotLightMatrix,Tt.spotLightMap.value=U.state.spotLightMap,Tt.pointShadowMap.value=U.state.pointShadowMap,Tt.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Pt,H.uniformsList=null,Pt}function vo(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=Ys.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function _o(w,I){const G=kt.get(w);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function mc(w,I,G,H,U){I.isScene!==!0&&(I=Xt),A.resetTextureUnits();const nt=I.fog,lt=H.isMeshStandardMaterial?I.environment:null,yt=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Bi,Mt=(H.isMeshStandardMaterial?B:M).get(H.envMap||lt),Rt=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Pt=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Tt=!!G.morphAttributes.position,ie=!!G.morphAttributes.normal,ue=!!G.morphAttributes.color;let me=Fi;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(me=_.toneMapping);const ze=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qt=ze!==void 0?ze.length:0,At=kt.get(H),Ee=p.state.lights;if(X===!0&&(et===!0||w!==N)){const qe=w===N&&H.id===R;it.setState(H,w,qe)}let te=!1;H.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Ee.state.version||At.outputColorSpace!==yt||U.isBatchedMesh&&At.batching===!1||!U.isBatchedMesh&&At.batching===!0||U.isBatchedMesh&&At.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&At.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&At.instancing===!1||!U.isInstancedMesh&&At.instancing===!0||U.isSkinnedMesh&&At.skinning===!1||!U.isSkinnedMesh&&At.skinning===!0||U.isInstancedMesh&&At.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&At.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&At.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&At.instancingMorph===!1&&U.morphTexture!==null||At.envMap!==Mt||H.fog===!0&&At.fog!==nt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==it.numPlanes||At.numIntersection!==it.numIntersection)||At.vertexAlphas!==Rt||At.vertexTangents!==Pt||At.morphTargets!==Tt||At.morphNormals!==ie||At.morphColors!==ue||At.toneMapping!==me||At.morphTargetsCount!==Qt)&&(te=!0):(te=!0,At.__version=H.version);let Ze=At.currentProgram;te===!0&&(Ze=ds(H,I,U));let rn=!1,He=!1,pa=!1;const ge=Ze.getUniforms(),Ei=At.uniforms;if(Dt.useProgram(Ze.program)&&(rn=!0,He=!0,pa=!0),H.id!==R&&(R=H.id,He=!0),rn||N!==w){Kt.reverseDepthBuffer?(vt.copy(w.projectionMatrix),Sl(vt),wl(vt),ge.setValue(L,"projectionMatrix",vt)):ge.setValue(L,"projectionMatrix",w.projectionMatrix),ge.setValue(L,"viewMatrix",w.matrixWorldInverse);const qe=ge.map.cameraPosition;qe!==void 0&&qe.setValue(L,Lt.setFromMatrixPosition(w.matrixWorld)),Kt.logarithmicDepthBuffer&&ge.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ge.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),N!==w&&(N=w,He=!0,pa=!0)}if(U.isSkinnedMesh){ge.setOptional(L,U,"bindMatrix"),ge.setOptional(L,U,"bindMatrixInverse");const qe=U.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),ge.setValue(L,"boneTexture",qe.boneTexture,A))}U.isBatchedMesh&&(ge.setOptional(L,U,"batchingTexture"),ge.setValue(L,"batchingTexture",U._matricesTexture,A),ge.setOptional(L,U,"batchingIdTexture"),ge.setValue(L,"batchingIdTexture",U._indirectTexture,A),ge.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&ge.setValue(L,"batchingColorTexture",U._colorsTexture,A));const ma=G.morphAttributes;if((ma.position!==void 0||ma.normal!==void 0||ma.color!==void 0)&&Ut.update(U,G,Ze),(He||At.receiveShadow!==U.receiveShadow)&&(At.receiveShadow=U.receiveShadow,ge.setValue(L,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ei.envMap.value=Mt,Ei.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(Ei.envMapIntensity.value=I.environmentIntensity),He&&(ge.setValue(L,"toneMappingExposure",_.toneMappingExposure),At.needsLights&&gc(Ei,pa),nt&&H.fog===!0&&ot.refreshFogUniforms(Ei,nt),ot.refreshMaterialUniforms(Ei,H,Z,V,p.state.transmissionRenderTarget[w.id]),Ys.upload(L,vo(At),Ei,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ys.upload(L,vo(At),Ei,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ge.setValue(L,"center",U.center),ge.setValue(L,"modelViewMatrix",U.modelViewMatrix),ge.setValue(L,"normalMatrix",U.normalMatrix),ge.setValue(L,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const qe=H.uniformsGroups;for(let ga=0,vc=qe.length;ga<vc;ga++){const yo=qe[ga];D.update(yo,Ze),D.bind(yo,Ze)}}return Ze}function gc(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function xc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,I,G){kt.get(w.texture).__webglTexture=I,kt.get(w.depthTexture).__webglTexture=G;const H=kt.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const G=kt.get(w);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,G=0){T=w,P=I,E=G;let H=!0,U=null,nt=!1,lt=!1;if(w){const Mt=kt.get(w);if(Mt.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(Mt.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Mt.__hasExternalTextures)A.rebindTextures(w,kt.get(w.texture).__webglTexture,kt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Tt=w.depthTexture;if(Mt.__boundDepthTexture!==Tt){if(Tt!==null&&kt.has(Tt)&&(w.width!==Tt.image.width||w.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const Rt=w.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);const Pt=kt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Pt[I])?U=Pt[I][G]:U=Pt[I],nt=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?U=kt.get(w).__webglMultisampledFramebuffer:Array.isArray(Pt)?U=Pt[G]:U=Pt,v.copy(w.viewport),S.copy(w.scissor),F=w.scissorTest}else v.copy(ht).multiplyScalar(Z).floor(),S.copy(bt).multiplyScalar(Z).floor(),F=Wt;if(Dt.bindFramebuffer(L.FRAMEBUFFER,U)&&H&&Dt.drawBuffers(w,U),Dt.viewport(v),Dt.scissor(S),Dt.setScissorTest(F),nt){const Mt=kt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,Mt.__webglTexture,G)}else if(lt){const Mt=kt.get(w.texture),Rt=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.__webglTexture,G||0,Rt)}R=-1},this.readRenderTargetPixels=function(w,I,G,H,U,nt,lt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=kt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(yt=yt[lt]),yt){Dt.bindFramebuffer(L.FRAMEBUFFER,yt);try{const Mt=w.texture,Rt=Mt.format,Pt=Mt.type;if(!Kt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-H&&G>=0&&G<=w.height-U&&L.readPixels(I,G,H,U,Ft.convert(Rt),Ft.convert(Pt),nt)}finally{const Mt=T!==null?kt.get(T).__webglFramebuffer:null;Dt.bindFramebuffer(L.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(w,I,G,H,U,nt,lt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=kt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(yt=yt[lt]),yt){const Mt=w.texture,Rt=Mt.format,Pt=Mt.type;if(!Kt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=w.width-H&&G>=0&&G<=w.height-U){Dt.bindFramebuffer(L.FRAMEBUFFER,yt);const Tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.bufferData(L.PIXEL_PACK_BUFFER,nt.byteLength,L.STREAM_READ),L.readPixels(I,G,H,U,Ft.convert(Rt),Ft.convert(Pt),0);const ie=T!==null?kt.get(T).__webglFramebuffer:null;Dt.bindFramebuffer(L.FRAMEBUFFER,ie);const ue=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ml(L,ue,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,nt),L.deleteBuffer(Tt),L.deleteSync(ue),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,I=null,G=0){w.isTexture!==!0&&(Xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-G),U=Math.floor(w.image.width*H),nt=Math.floor(w.image.height*H),lt=I!==null?I.x:0,yt=I!==null?I.y:0;A.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,lt,yt,U,nt),Dt.unbindTexture()},this.copyTextureToTexture=function(w,I,G=null,H=null,U=0){w.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],I=arguments[2],U=arguments[3]||0,G=null);let nt,lt,yt,Mt,Rt,Pt;G!==null?(nt=G.max.x-G.min.x,lt=G.max.y-G.min.y,yt=G.min.x,Mt=G.min.y):(nt=w.image.width,lt=w.image.height,yt=0,Mt=0),H!==null?(Rt=H.x,Pt=H.y):(Rt=0,Pt=0);const Tt=Ft.convert(I.format),ie=Ft.convert(I.type);A.setTexture2D(I,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const ue=L.getParameter(L.UNPACK_ROW_LENGTH),me=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ze=L.getParameter(L.UNPACK_SKIP_PIXELS),Qt=L.getParameter(L.UNPACK_SKIP_ROWS),At=L.getParameter(L.UNPACK_SKIP_IMAGES),Ee=w.isCompressedTexture?w.mipmaps[U]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ee.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ee.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,yt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Mt),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Rt,Pt,nt,lt,Tt,ie,Ee.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Rt,Pt,Ee.width,Ee.height,Tt,Ee.data):L.texSubImage2D(L.TEXTURE_2D,U,Rt,Pt,nt,lt,Tt,ie,Ee),L.pixelStorei(L.UNPACK_ROW_LENGTH,ue),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,At),U===0&&I.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Dt.unbindTexture()},this.copyTextureToTexture3D=function(w,I,G=null,H=null,U=0){w.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,w=arguments[2],I=arguments[3],U=arguments[4]||0);let nt,lt,yt,Mt,Rt,Pt,Tt,ie,ue;const me=w.isCompressedTexture?w.mipmaps[U]:w.image;G!==null?(nt=G.max.x-G.min.x,lt=G.max.y-G.min.y,yt=G.max.z-G.min.z,Mt=G.min.x,Rt=G.min.y,Pt=G.min.z):(nt=me.width,lt=me.height,yt=me.depth,Mt=0,Rt=0,Pt=0),H!==null?(Tt=H.x,ie=H.y,ue=H.z):(Tt=0,ie=0,ue=0);const ze=Ft.convert(I.format),Qt=Ft.convert(I.type);let At;if(I.isData3DTexture)A.setTexture3D(I,0),At=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)A.setTexture2DArray(I,0),At=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Ee=L.getParameter(L.UNPACK_ROW_LENGTH),te=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ze=L.getParameter(L.UNPACK_SKIP_PIXELS),rn=L.getParameter(L.UNPACK_SKIP_ROWS),He=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,me.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Rt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pt),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(At,U,Tt,ie,ue,nt,lt,yt,ze,Qt,me.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(At,U,Tt,ie,ue,nt,lt,yt,ze,me.data):L.texSubImage3D(At,U,Tt,ie,ue,nt,lt,yt,ze,Qt,me),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ee),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,te),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,rn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,He),U===0&&I.generateMipmaps&&L.generateMipmap(At),Dt.unbindTexture()},this.initRenderTarget=function(w){kt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Dt.unbindTexture()},this.resetState=function(){P=0,E=0,T=null,Dt.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===to?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===ra?"display-p3":"srgb"}}class so{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new st(t),this.density=e}clone(){return new so(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Nm extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Fm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wr,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,a=this.stride;n<a;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const De=new C;class $s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ii(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ii(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array),a=ne(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[n+a])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new $s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[n+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class oc extends an{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let bn;const qn=new C,Mn=new C,Sn=new C,wn=new _t,Kn=new _t,hc=new ce,Us=new C,jn=new C,ks=new C,mh=new _t,Ya=new _t,gh=new _t;class Om extends Te{constructor(t=new oc){if(super(),this.isSprite=!0,this.type="Sprite",bn===void 0){bn=new fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Fm(e,5);bn.setIndex([0,1,2,0,2,3]),bn.setAttribute("position",new $s(i,3,0,!1)),bn.setAttribute("uv",new $s(i,2,3,!1))}this.geometry=bn,this.material=t,this.center=new _t(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mn.setFromMatrixScale(this.matrixWorld),hc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Sn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mn.multiplyScalar(-Sn.z);const i=this.material.rotation;let n,a;i!==0&&(a=Math.cos(i),n=Math.sin(i));const r=this.center;Ns(Us.set(-.5,-.5,0),Sn,r,Mn,n,a),Ns(jn.set(.5,-.5,0),Sn,r,Mn,n,a),Ns(ks.set(.5,.5,0),Sn,r,Mn,n,a),mh.set(0,0),Ya.set(1,0),gh.set(1,1);let o=t.ray.intersectTriangle(Us,jn,ks,!1,qn);if(o===null&&(Ns(jn.set(-.5,.5,0),Sn,r,Mn,n,a),Ya.set(0,1),o=t.ray.intersectTriangle(Us,ks,jn,!1,qn),o===null))return;const h=t.ray.origin.distanceTo(qn);h<t.near||h>t.far||e.push({distance:h,point:qn.clone(),uv:je.getInterpolation(qn,Us,jn,ks,mh,Ya,gh,new _t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ns(s,t,e,i,n,a){wn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Kn.x=a*wn.x-n*wn.y,Kn.y=n*wn.x+a*wn.y):Kn.copy(wn),s.copy(t),s.x+=Kn.x,s.y+=Kn.y,s.applyMatrix4(hc)}class Nn extends an{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qs=new C,ta=new C,xh=new ce,Jn=new Yh,Fs=new oa,qa=new C,vh=new C;class ca extends Te{constructor(t=new fe,e=new Nn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,a=e.count;n<a;n++)Qs.fromBufferAttribute(e,n-1),ta.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Qs.distanceTo(ta);t.setAttribute("lineDistance",new Jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere),Fs.applyMatrix4(n),Fs.radius+=a,t.ray.intersectsSphere(Fs)===!1)return;xh.copy(n).invert(),Jn.copy(t.ray).applyMatrix4(xh);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,l=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,r.start),g=Math.min(c.count,r.start+r.count);for(let x=d,p=g-1;x<p;x+=l){const m=c.getX(x),y=c.getX(x+1),_=Os(this,t,Jn,h,m,y);_&&e.push(_)}if(this.isLineLoop){const x=c.getX(g-1),p=c.getX(d),m=Os(this,t,Jn,h,x,p);m&&e.push(m)}}else{const d=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let x=d,p=g-1;x<p;x+=l){const m=Os(this,t,Jn,h,x,x+1);m&&e.push(m)}if(this.isLineLoop){const x=Os(this,t,Jn,h,g-1,d);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Os(s,t,e,i,n,a){const r=s.geometry.attributes.position;if(Qs.fromBufferAttribute(r,n),ta.fromBufferAttribute(r,a),e.distanceSqToSegment(Qs,ta,qa,vh)>i)return;qa.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(qa);if(!(h<t.near||h>t.far))return{distance:h,point:vh.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}const _h=new C,yh=new C;class cc extends ca{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,a=e.count;n<a;n+=2)_h.fromBufferAttribute(e,n),yh.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+_h.distanceTo(yh);t.setAttribute("lineDistance",new Jt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ea extends Ne{constructor(t,e,i,n,a,r,o,h,l){super(t,e,i,n,a,r,o,h,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ti{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(n),e.push(a),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const a=i.length;let r;e?r=e:r=t*i[a-1];let o=0,h=a-1,l;for(;o<=h;)if(n=Math.floor(o+(h-o)/2),l=i[n]-r,l<0)o=n+1;else if(l>0)h=n-1;else{h=n;break}if(n=h,i[n]===r)return n/(a-1);const c=i[n],f=i[n+1]-c,d=(r-c)/f;return(n+d)/(a-1)}getTangent(t,e){let n=t-1e-4,a=t+1e-4;n<0&&(n=0),a>1&&(a=1);const r=this.getPoint(n),o=this.getPoint(a),h=e||(r.isVector2?new _t:new C);return h.copy(o).sub(r).normalize(),h}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new C,n=[],a=[],r=[],o=new C,h=new ce;for(let d=0;d<=t;d++){const g=d/t;n[d]=this.getTangentAt(g,new C)}a[0]=new C,r[0]=new C;let l=Number.MAX_VALUE;const c=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);c<=l&&(l=c,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),a[0].crossVectors(n[0],o),r[0].crossVectors(n[0],a[0]);for(let d=1;d<=t;d++){if(a[d]=a[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ae(n[d-1].dot(n[d]),-1,1));a[d].applyMatrix4(h.makeRotationAxis(o,g))}r[d].crossVectors(n[d],a[d])}if(e===!0){let d=Math.acos(Ae(a[0].dot(a[t]),-1,1));d/=t,n[0].dot(o.crossVectors(a[0],a[t]))>0&&(d=-d);for(let g=1;g<=t;g++)a[g].applyMatrix4(h.makeRotationAxis(n[g],d*g)),r[g].crossVectors(n[g],a[g])}return{tangents:n,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class lc extends Ti{constructor(t=0,e=0,i=1,n=1,a=0,r=Math.PI*2,o=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=h}getPoint(t,e=new _t){const i=e,n=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=n;for(;a>n;)a-=n;a<Number.EPSILON&&(r?a=0:a=n),this.aClockwise===!0&&!r&&(a===n?a=-n:a=a-n);const o=this.aStartAngle+t*a;let h=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=h-this.aX,d=l-this.aY;h=f*c-d*u+this.aX,l=f*u+d*c+this.aY}return i.set(h,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bm extends lc{constructor(t,e,i,n,a,r){super(t,e,i,i,n,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ao(){let s=0,t=0,e=0,i=0;function n(a,r,o,h){s=a,t=o,e=-3*a+3*r-2*o-h,i=2*a-2*r+o+h}return{initCatmullRom:function(a,r,o,h,l){n(r,o,l*(o-a),l*(h-r))},initNonuniformCatmullRom:function(a,r,o,h,l,c,u){let f=(r-a)/l-(o-a)/(l+c)+(o-r)/c,d=(o-r)/c-(h-r)/(c+u)+(h-o)/u;f*=c,d*=c,n(r,o,f,d)},calc:function(a){const r=a*a,o=r*a;return s+t*a+e*r+i*o}}}const Bs=new C,Ka=new ao,ja=new ao,Ja=new ao;class es extends Ti{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new C){const i=e,n=this.points,a=n.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),h=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:h===0&&o===a-1&&(o=a-2,h=1);let l,c;this.closed||o>0?l=n[(o-1)%a]:(Bs.subVectors(n[0],n[1]).add(n[0]),l=Bs);const u=n[o%a],f=n[(o+1)%a];if(this.closed||o+2<a?c=n[(o+2)%a]:(Bs.subVectors(n[a-1],n[a-2]).add(n[a-1]),c=Bs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(c),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Ka.initNonuniformCatmullRom(l.x,u.x,f.x,c.x,g,x,p),ja.initNonuniformCatmullRom(l.y,u.y,f.y,c.y,g,x,p),Ja.initNonuniformCatmullRom(l.z,u.z,f.z,c.z,g,x,p)}else this.curveType==="catmullrom"&&(Ka.initCatmullRom(l.x,u.x,f.x,c.x,this.tension),ja.initCatmullRom(l.y,u.y,f.y,c.y,this.tension),Ja.initCatmullRom(l.z,u.z,f.z,c.z,this.tension));return i.set(Ka.calc(h),ja.calc(h),Ja.calc(h)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new C().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bh(s,t,e,i,n){const a=(i-t)*.5,r=(n-e)*.5,o=s*s,h=s*o;return(2*e-2*i+a+r)*h+(-3*e+3*i-2*a-r)*o+a*s+e}function Gm(s,t){const e=1-s;return e*e*t}function zm(s,t){return 2*(1-s)*s*t}function Hm(s,t){return s*s*t}function is(s,t,e,i){return Gm(s,t)+zm(s,e)+Hm(s,i)}function Vm(s,t){const e=1-s;return e*e*e*t}function Wm(s,t){const e=1-s;return 3*e*e*s*t}function Xm(s,t){return 3*(1-s)*s*s*t}function Ym(s,t){return s*s*s*t}function ns(s,t,e,i,n){return Vm(s,t)+Wm(s,e)+Xm(s,i)+Ym(s,n)}class qm extends Ti{constructor(t=new _t,e=new _t,i=new _t,n=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new _t){const i=e,n=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(ns(t,n.x,a.x,r.x,o.x),ns(t,n.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Km extends Ti{constructor(t=new C,e=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new C){const i=e,n=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(ns(t,n.x,a.x,r.x,o.x),ns(t,n.y,a.y,r.y,o.y),ns(t,n.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jm extends Ti{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jm extends Ti{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zm extends Ti{constructor(t=new _t,e=new _t,i=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new _t){const i=e,n=this.v0,a=this.v1,r=this.v2;return i.set(is(t,n.x,a.x,r.x),is(t,n.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uc extends Ti{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){const i=e,n=this.v0,a=this.v1,r=this.v2;return i.set(is(t,n.x,a.x,r.x),is(t,n.y,a.y,r.y),is(t,n.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $m extends Ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const i=e,n=this.points,a=(n.length-1)*t,r=Math.floor(a),o=a-r,h=n[r===0?r:r-1],l=n[r],c=n[r>n.length-2?n.length-1:r+1],u=n[r>n.length-3?n.length-1:r+2];return i.set(bh(o,h.x,l.x,c.x,u.x),bh(o,h.y,l.y,c.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new _t().fromArray(n))}return this}}var Qm=Object.freeze({__proto__:null,ArcCurve:Bm,CatmullRomCurve3:es,CubicBezierCurve:qm,CubicBezierCurve3:Km,EllipseCurve:lc,LineCurve:jm,LineCurve3:Jm,QuadraticBezierCurve:Zm,QuadraticBezierCurve3:uc,SplineCurve:$m});class Si extends fe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const a=[],r=[],o=[],h=[],l=new C,c=new _t;r.push(0,0,0),o.push(0,0,1),h.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=i+u/e*n;l.x=t*Math.cos(d),l.y=t*Math.sin(d),r.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(r[f]/t+1)/2,c.y=(r[f+1]/t+1)/2,h.push(c.x,c.y)}for(let u=1;u<=e;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(o,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Et extends fe{constructor(t=1,e=1,i=1,n=32,a=1,r=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:h};const l=this;n=Math.floor(n),a=Math.floor(a);const c=[],u=[],f=[],d=[];let g=0;const x=[],p=i/2;let m=0;y(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(d,2));function y(){const b=new C,P=new C;let E=0;const T=(e-t)/i;for(let R=0;R<=a;R++){const N=[],v=R/a,S=v*(e-t)+t;for(let F=0;F<=n;F++){const O=F/n,W=O*h+o,K=Math.sin(W),V=Math.cos(W);P.x=S*K,P.y=-v*i+p,P.z=S*V,u.push(P.x,P.y,P.z),b.set(K,T,V).normalize(),f.push(b.x,b.y,b.z),d.push(O,1-v),N.push(g++)}x.push(N)}for(let R=0;R<n;R++)for(let N=0;N<a;N++){const v=x[N][R],S=x[N+1][R],F=x[N+1][R+1],O=x[N][R+1];t>0&&(c.push(v,S,O),E+=3),e>0&&(c.push(S,F,O),E+=3)}l.addGroup(m,E,0),m+=E}function _(b){const P=g,E=new _t,T=new C;let R=0;const N=b===!0?t:e,v=b===!0?1:-1;for(let F=1;F<=n;F++)u.push(0,p*v,0),f.push(0,v,0),d.push(.5,.5),g++;const S=g;for(let F=0;F<=n;F++){const W=F/n*h+o,K=Math.cos(W),V=Math.sin(W);T.x=N*V,T.y=p*v,T.z=N*K,u.push(T.x,T.y,T.z),f.push(0,v,0),E.x=K*.5+.5,E.y=V*.5*v+.5,d.push(E.x,E.y),g++}for(let F=0;F<n;F++){const O=P+F,W=S+F;b===!0?c.push(W,W+1,O):c.push(W+1,W,O),R+=3}l.addGroup(m,R,b===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Et(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pe extends Et{constructor(t=1,e=1,i=32,n=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,i,n,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new pe(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class la extends fe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const a=[],r=[];o(n),l(i),c(),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(a.slice(),3)),this.setAttribute("uv",new Jt(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const _=new C,b=new C,P=new C;for(let E=0;E<e.length;E+=3)d(e[E+0],_),d(e[E+1],b),d(e[E+2],P),h(_,b,P,y)}function h(y,_,b,P){const E=P+1,T=[];for(let R=0;R<=E;R++){T[R]=[];const N=y.clone().lerp(b,R/E),v=_.clone().lerp(b,R/E),S=E-R;for(let F=0;F<=S;F++)F===0&&R===E?T[R][F]=N:T[R][F]=N.clone().lerp(v,F/S)}for(let R=0;R<E;R++)for(let N=0;N<2*(E-R)-1;N++){const v=Math.floor(N/2);N%2===0?(f(T[R][v+1]),f(T[R+1][v]),f(T[R][v])):(f(T[R][v+1]),f(T[R+1][v+1]),f(T[R+1][v]))}}function l(y){const _=new C;for(let b=0;b<a.length;b+=3)_.x=a[b+0],_.y=a[b+1],_.z=a[b+2],_.normalize().multiplyScalar(y),a[b+0]=_.x,a[b+1]=_.y,a[b+2]=_.z}function c(){const y=new C;for(let _=0;_<a.length;_+=3){y.x=a[_+0],y.y=a[_+1],y.z=a[_+2];const b=p(y)/2/Math.PI+.5,P=m(y)/Math.PI+.5;r.push(b,1-P)}g(),u()}function u(){for(let y=0;y<r.length;y+=6){const _=r[y+0],b=r[y+2],P=r[y+4],E=Math.max(_,b,P),T=Math.min(_,b,P);E>.9&&T<.1&&(_<.2&&(r[y+0]+=1),b<.2&&(r[y+2]+=1),P<.2&&(r[y+4]+=1))}}function f(y){a.push(y.x,y.y,y.z)}function d(y,_){const b=y*3;_.x=t[b+0],_.y=t[b+1],_.z=t[b+2]}function g(){const y=new C,_=new C,b=new C,P=new C,E=new _t,T=new _t,R=new _t;for(let N=0,v=0;N<a.length;N+=9,v+=6){y.set(a[N+0],a[N+1],a[N+2]),_.set(a[N+3],a[N+4],a[N+5]),b.set(a[N+6],a[N+7],a[N+8]),E.set(r[v+0],r[v+1]),T.set(r[v+2],r[v+3]),R.set(r[v+4],r[v+5]),P.copy(y).add(_).add(b).divideScalar(3);const S=p(P);x(E,v+0,y,S),x(T,v+2,_,S),x(R,v+4,b,S)}}function x(y,_,b,P){P<0&&y.x===1&&(r[_]=y.x-1),b.x===0&&b.z===0&&(r[_]=P/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.vertices,t.indices,t.radius,t.details)}}class ro extends la{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ro(t.radius,t.detail)}}class oo extends la{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oo(t.radius,t.detail)}}class wi extends fe{constructor(t=.5,e=1,i=32,n=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:a,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const o=[],h=[],l=[],c=[];let u=t;const f=(e-t)/n,d=new C,g=new _t;for(let x=0;x<=n;x++){for(let p=0;p<=i;p++){const m=a+p/i*r;d.x=u*Math.cos(m),d.y=u*Math.sin(m),h.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,c.push(g.x,g.y)}u+=f}for(let x=0;x<n;x++){const p=x*(i+1);for(let m=0;m<i;m++){const y=m+p,_=y,b=y+i+1,P=y+i+2,E=y+1;o.push(_,b,E),o.push(b,P,E)}}this.setIndex(o),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ye extends fe{constructor(t=1,e=32,i=16,n=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const h=Math.min(r+o,Math.PI);let l=0;const c=[],u=new C,f=new C,d=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){const y=[],_=m/i;let b=0;m===0&&r===0?b=.5/e:m===i&&h===Math.PI&&(b=-.5/e);for(let P=0;P<=e;P++){const E=P/e;u.x=-t*Math.cos(n+E*a)*Math.sin(r+_*o),u.y=t*Math.cos(r+_*o),u.z=t*Math.sin(n+E*a)*Math.sin(r+_*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(E+b,1-_),y.push(l++)}c.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){const _=c[m][y+1],b=c[m][y],P=c[m+1][y],E=c[m+1][y+1];(m!==0||r>0)&&d.push(_,b,E),(m!==i-1||h<Math.PI)&&d.push(b,P,E)}this.setIndex(d),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Gn extends fe{constructor(t=1,e=.4,i=12,n=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:a},i=Math.floor(i),n=Math.floor(n);const r=[],o=[],h=[],l=[],c=new C,u=new C,f=new C;for(let d=0;d<=i;d++)for(let g=0;g<=n;g++){const x=g/n*a,p=d/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),c.x=t*Math.cos(x),c.y=t*Math.sin(x),f.subVectors(u,c).normalize(),h.push(f.x,f.y,f.z),l.push(g/n),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=n;g++){const x=(n+1)*d+g-1,p=(n+1)*(d-1)+g-1,m=(n+1)*(d-1)+g,y=(n+1)*d+g;r.push(x,p,y),r.push(p,m,y)}this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Rn extends fe{constructor(t=new uc(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,i=1,n=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:a};const r=t.computeFrenetFrames(e,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new C,h=new C,l=new _t;let c=new C;const u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(d,2));function x(){for(let _=0;_<e;_++)p(_);p(a===!1?e:0),y(),m()}function p(_){c=t.getPointAt(_/e,c);const b=r.normals[_],P=r.binormals[_];for(let E=0;E<=n;E++){const T=E/n*Math.PI*2,R=Math.sin(T),N=-Math.cos(T);h.x=N*b.x+R*P.x,h.y=N*b.y+R*P.y,h.z=N*b.z+R*P.z,h.normalize(),f.push(h.x,h.y,h.z),o.x=c.x+i*h.x,o.y=c.y+i*h.y,o.z=c.z+i*h.z,u.push(o.x,o.y,o.z)}}function m(){for(let _=1;_<=e;_++)for(let b=1;b<=n;b++){const P=(n+1)*(_-1)+(b-1),E=(n+1)*_+(b-1),T=(n+1)*_+b,R=(n+1)*(_-1)+b;g.push(P,E,R),g.push(E,T,R)}}function y(){for(let _=0;_<=e;_++)for(let b=0;b<=n;b++)l.x=_/e,l.y=b/n,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Rn(new Qm[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Se extends an{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zh,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class t0 extends Nn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class ho extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new st(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Za=new ce,Mh=new C,Sh=new C;class dc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mh),Sh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sh),e.updateMatrixWorld(),Za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const wh=new ce,Zn=new C,$a=new C;class e0 extends dc{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Zn.setFromMatrixPosition(t.matrixWorld),i.position.copy(Zn),$a.copy(i.position),$a.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt($a),i.updateMatrixWorld(),n.makeTranslation(-Zn.x,-Zn.y,-Zn.z),wh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh)}}class ua extends ho{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new e0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class i0 extends dc{constructor(){super(new ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class n0 extends ho{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new i0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class s0 extends ho{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qr);const z={TIME_STEP:1/60,MAX_DELTA:.1,PALETTE:{inkDark:"#141413",inkMid:"#5c5b57",inkLight:"#a8a59c",parchment:"#eae5d9",rimHighlight:"#f5f1e6",vermilion:"#b8292f",goldAccent:"#ffd43b",darkSky:"#171e2e",sentryBlue:"#4dabf7"},CAMERA:{fov:38,distanceZ:22,tiltDeg:7,horizontalDeadzone:2,lookAhead:2.5,followSpeedX:4.5,followSpeedY:3.5,shakeDecay:8},PLAYER:{width:.8,height:1.8,runSpeed:9,groundAccel:70,groundDecel:60,airAccel:70*.65,jumpVelocity:16,gravityRising:-42,gravityFalling:-62,maxFallSpeed:-28,jumpCutMultiplier:.45,coyoteTime:.12,jumpBuffer:.12,apexHangVelocity:2,apexGravityScale:.5,ledgeHandOffset:{x:.45,y:.8},ledgeHangOffset:{x:.4,y:.6},ledgeClimbDuration:.3,ledgeCooldown:.25,wallRunDuration:.45,wallRunSpeed:10,wallSlideSpeed:-4,wallJumpImpulse:{x:11,y:15},dashSpeed:30,dashDuration:.16,dashInvincibility:.12,dashSpeedDecay:.35,dashCooldown:.6,afterimageInterval:.03,afterimageLifetime:.25},COMBAT:{maxHealth:5,hurtInvincibility:.8,hurtKnockback:{x:7,y:6},hitStopMsNormal:40,hitStopMsHeavy:80,hitStopMsParry:60,parryPerfectWindow:.15,parryGuardWindow:.35,parryCooldown:.5,riposteMultiplier:2,backstabTimeScale:.2,backstabSlowMoDuration:.15,combo:[{windup:.08,active:.1,recovery:.18,damage:1,lunge:3,reach:1.6},{windup:.08,active:.1,recovery:.18,damage:1,lunge:3.5,reach:1.7},{windup:.1,active:.12,recovery:.24,damage:2,lunge:5,reach:2}],airAttack:{windup:.06,active:.12,recovery:.16,damage:1,reach:1.6}},ENEMIES:{ashigaru:{width:1,height:2,hp:3,patrolSpeed:2,patrolPause:1.5,visionRange:7,visionAngleDeg:25,attackTelegraph:.6,attackDuration:.25,attackRecovery:1,attackReach:4,attackDamage:1,staggerDuration:1.2},tengu:{width:1.2,height:1.4,hp:2,bobFrequency:1.8,bobAmplitude:.6,swoopTelegraph:.5,swoopSpeed:18,swoopDamage:1,swoopCooldown:2.5}},BOSS:{name:"Kurogane, the Gatekeeper",width:2.2,height:4.8,hpMax:40,weakPointMultiplier:2,staggerDuration:2,sweepSpeed:14,slamEmbedDuration:1.6,puddleLifetime:4,chargeSpeed:16},LEVEL:{pitY:-15,crumbleDelay:.6,crumbleRespawn:3,bambooSpringFreq:6,bambooDamping:.85,bambooLaunchBoost:1.5,lanternSwingDamping:.99},AUDIO:{masterVolume:.8,sfxVolume:.85,musicVolume:.65,pentatonicNotes:[164.81,174.61,220,246.94,261.63]}};class a0{constructor({onFixedUpdate:t,onRender:e,onInputUpdate:i}){this.onFixedUpdate=t,this.onRender=e,this.onInputUpdate=i,this.timeStep=z.TIME_STEP,this.maxDelta=z.MAX_DELTA,this.accumulator=0,this.lastTime=performance.now(),this.running=!1,this.paused=!1,this.hitStopRemaining=0,this.timeScale=1,this._rafId=null,this._tick=this.tick.bind(this)}start(){this.running||(this.running=!0,this.lastTime=performance.now(),this.accumulator=0,this._rafId=requestAnimationFrame(this._tick))}stop(){this.running=!1,this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null)}pause(){this.paused=!0}resume(){this.paused=!1,this.lastTime=performance.now()}triggerHitStop(t){this.hitStopRemaining=Math.max(this.hitStopRemaining,t/1e3)}setTimeScale(t){this.timeScale=Math.max(0,t)}tick(t){if(!this.running)return;let e=(t-this.lastTime)/1e3;if(this.lastTime=t,e>this.maxDelta&&(e=this.maxDelta),!this.paused){if(this.hitStopRemaining>0){this.hitStopRemaining-=e,this.onRender&&this.onRender(0),this._rafId=requestAnimationFrame(this._tick);return}const i=e*this.timeScale;this.accumulator+=i,this.onInputUpdate&&this.onInputUpdate(e);let n=0;const a=8;for(;this.accumulator>=this.timeStep&&n<a;)this.onFixedUpdate&&this.onFixedUpdate(this.timeStep),this.accumulator-=this.timeStep,n++;this.accumulator>=this.timeStep&&(this.accumulator=0);const r=this.accumulator/this.timeStep;this.onRender&&this.onRender(r)}this._rafId=requestAnimationFrame(this._tick)}}class r0{constructor(){this.keysDown=new Set,this.keysPressedThisStep=new Set,this.keysReleasedThisStep=new Set,this.jumpBufferTimer=0,this.attackBufferTimer=0,this.dashBufferTimer=0,this.parryBufferTimer=0,this.axisX=0,this.axisY=0,this.mouseButtonsDown=new Set,this._onKeyDown=this.onKeyDown.bind(this),this._onKeyUp=this.onKeyUp.bind(this),this._onMouseDown=this.onMouseDown.bind(this),this._onMouseUp=this.onMouseUp.bind(this),this._onContextMenu=t=>t.preventDefault(),this._onBlur=this.onBlur.bind(this),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),window.addEventListener("mousedown",this._onMouseDown),window.addEventListener("mouseup",this._onMouseUp),window.addEventListener("contextmenu",this._onContextMenu),window.addEventListener("blur",this._onBlur)}onKeyDown(t){if(t.repeat)return;const e=t.code;this.keysDown.add(e),this.keysPressedThisStep.add(e),e==="Space"&&(this.jumpBufferTimer=z.PLAYER.jumpBuffer),e==="KeyJ"&&(this.attackBufferTimer=.12),(e==="ShiftLeft"||e==="ShiftRight"||e==="KeyK")&&(this.dashBufferTimer=.12),e==="KeyL"&&(this.parryBufferTimer=.12)}onKeyUp(t){const e=t.code;this.keysDown.delete(e),this.keysReleasedThisStep.add(e)}onMouseDown(t){this.mouseButtonsDown.add(t.button),t.button===0?this.attackBufferTimer=.12:t.button===2&&(this.parryBufferTimer=.12)}onMouseUp(t){this.mouseButtonsDown.delete(t.button)}onBlur(){this.keysDown.clear(),this.keysPressedThisStep.clear(),this.keysReleasedThisStep.clear(),this.mouseButtonsDown.clear(),this.jumpBufferTimer=0,this.attackBufferTimer=0,this.dashBufferTimer=0,this.parryBufferTimer=0,this.axisX=0,this.axisY=0}update(t){this.jumpBufferTimer>0&&(this.jumpBufferTimer-=t),this.attackBufferTimer>0&&(this.attackBufferTimer-=t),this.dashBufferTimer>0&&(this.dashBufferTimer-=t),this.parryBufferTimer>0&&(this.parryBufferTimer-=t);let e=0,i=0;(this.isHeld("KeyD")||this.isHeld("ArrowRight"))&&(e+=1),(this.isHeld("KeyA")||this.isHeld("ArrowLeft"))&&(e-=1),(this.isHeld("KeyW")||this.isHeld("ArrowUp"))&&(i+=1),(this.isHeld("KeyS")||this.isHeld("ArrowDown"))&&(i-=1);const n=this.getGamepad();if(n){const a=n.axes[0]??0,r=-(n.axes[1]??0),o=.25;Math.abs(a)>o&&(e=a>0?1:-1),Math.abs(r)>o&&(i=r>0?1:-1),n.buttons[15]?.pressed&&(e=1),n.buttons[14]?.pressed&&(e=-1),n.buttons[12]?.pressed&&(i=1),n.buttons[13]?.pressed&&(i=-1),n.buttons[0]?.pressed&&(this.jumpBufferTimer=z.PLAYER.jumpBuffer),n.buttons[2]?.pressed&&(this.attackBufferTimer=.12),(n.buttons[5]?.pressed||n.buttons[7]?.pressed)&&(this.dashBufferTimer=.12),(n.buttons[4]?.pressed||n.buttons[3]?.pressed)&&(this.parryBufferTimer=.12)}this.axisX=e,this.axisY=i}postStep(){this.keysPressedThisStep.clear(),this.keysReleasedThisStep.clear()}getGamepad(){if(typeof navigator<"u"&&navigator.getGamepads){const t=navigator.getGamepads();for(let e=0;e<t.length;e++)if(t[e]&&t[e].connected)return t[e]}return null}isHeld(t){return this.keysDown.has(t)}isPressed(t){return this.keysPressedThisStep.has(t)}isReleased(t){return this.keysReleasedThisStep.has(t)}get jumpBuffered(){return this.jumpBufferTimer>0}consumeJump(){this.jumpBufferTimer=0}get jumpHeld(){const t=this.getGamepad();return this.isHeld("Space")||t&&t.buttons[0]?.pressed}get jumpReleased(){return this.isReleased("Space")}get attackBuffered(){return this.attackBufferTimer>0}consumeAttack(){this.attackBufferTimer=0}get dashBuffered(){return this.dashBufferTimer>0}consumeDash(){this.dashBufferTimer=0}get parryBuffered(){return this.parryBufferTimer>0}consumeParry(){this.parryBufferTimer=0}get pausePressed(){const t=this.getGamepad();return this.isPressed("Escape")||t&&t.buttons[9]?.pressed}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("mousedown",this._onMouseDown),window.removeEventListener("mouseup",this._onMouseUp),window.removeEventListener("contextmenu",this._onContextMenu),window.removeEventListener("blur",this._onBlur)}}class o0{constructor(){this.listeners=new Map}on(t,e){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(e),()=>this.off(t,e)}off(t,e){this.listeners.has(t)&&this.listeners.get(t).delete(e)}emit(t,e){if(this.listeners.has(t))for(const i of this.listeners.get(t))try{i(e)}catch(n){console.error(`Error in EventBus listener for "${t}":`,n)}}clear(){this.listeners.clear()}}const at=new o0;class h0{constructor(t,e=0){this.camera=t,this.mode=e,this.targetCameraY=4.5,this.shakeAmount=0,this.isOrbitDragging=!1,this.orbitYaw=0,this.orbitPitch=0,this.lastMouseX=0,this.lastMouseY=0,at.on("camera_shake",({amount:i})=>{this.shakeAmount=Math.max(this.shakeAmount,i)}),typeof window<"u"&&(window.addEventListener("mousedown",i=>{(i.button===1||i.button===0&&i.altKey)&&(this.isOrbitDragging=!0,this.lastMouseX=i.clientX,this.lastMouseY=i.clientY)}),window.addEventListener("mousemove",i=>{if(this.isOrbitDragging){const n=i.clientX-this.lastMouseX,a=i.clientY-this.lastMouseY;this.lastMouseX=i.clientX,this.lastMouseY=i.clientY,this.orbitYaw=Ue.clamp(this.orbitYaw-n*.004,-.55,.55),this.orbitPitch=Ue.clamp(this.orbitPitch-a*.003,-.35,.35)}}),window.addEventListener("mouseup",()=>{this.isOrbitDragging=!1}))}cyclePerspective(){return this.mode=(this.mode+1)%3,this.orbitYaw=0,this.orbitPitch=0,this.mode}snapTo(t,e){const i=this.getBossArenaFraming(t);i&&this.mode===0?(this.targetCameraY=i.y,this.camera.position.set(i.x,i.y,i.z)):(this.targetCameraY=e+2.5,this.camera.position.set(t,this.targetCameraY,z.CAMERA.distanceZ))}getBossArenaFraming(t){return t>=244&&t<=292?{x:259,y:53.5,z:27.5}:t>=502&&t<=558?{x:525,y:78.5,z:27.5}:t>=774&&t<=845?{x:800,y:102.5,z:28.5}:null}fixedUpdate(t,e){if(!e)return;const i=this.getBossArenaFraming(e.aabb.x);i?this.targetCameraY=i.y:e.coyoteTimer>0&&(this.targetCameraY=e.aabb.y+2.5),this.isOrbitDragging||(this.orbitYaw*=.92,this.orbitPitch*=.92)}render(t){if(!t)return;const e=t.aabb.x,i=t.aabb.y,n=this.getBossArenaFraming(e);if(n&&this.mode===0)this.camera.position.x+=(n.x-this.camera.position.x)*.08,this.camera.position.y+=(n.y-this.camera.position.y)*.08,this.camera.position.z+=(n.z-this.camera.position.z)*.08,this.camera.rotation.y+=(this.orbitYaw-this.camera.rotation.y)*.08,this.camera.rotation.x+=(-Ue.degToRad(z.CAMERA.tiltDeg)+this.orbitPitch-this.camera.rotation.x)*.08;else if(this.mode===1){const a=e-t.facing*4.2,r=i+3.2,o=14.5;this.camera.position.x+=(a-this.camera.position.x)*.08,this.camera.position.y+=(r-this.camera.position.y)*.08,this.camera.position.z+=(o-this.camera.position.z)*.08,this.camera.rotation.y+=(-t.facing*.34+this.orbitYaw-this.camera.rotation.y)*.08,this.camera.rotation.x+=(-.12+this.orbitPitch-this.camera.rotation.x)*.08}else if(this.mode===2){const a=e+t.facing*1.4,r=i+1.6,o=14;this.camera.position.x+=(a-this.camera.position.x)*.09,this.camera.position.y+=(r-this.camera.position.y)*.08,this.camera.position.z+=(o-this.camera.position.z)*.08,this.camera.rotation.y+=(this.orbitYaw-this.camera.rotation.y)*.08,this.camera.rotation.x+=(-.06+this.orbitPitch-this.camera.rotation.x)*.08}else{const a=e+t.facing*z.CAMERA.lookAhead,r=a-this.camera.position.x;Math.abs(r)>z.CAMERA.horizontalDeadzone&&(this.camera.position.x+=(a-this.camera.position.x)*.08),this.camera.position.y+=(this.targetCameraY-this.camera.position.y)*.05,this.camera.position.z+=(z.CAMERA.distanceZ-this.camera.position.z)*.08,this.camera.rotation.y+=(this.orbitYaw-this.camera.rotation.y)*.08,this.camera.rotation.x+=(-Ue.degToRad(z.CAMERA.tiltDeg)+this.orbitPitch-this.camera.rotation.x)*.08}this.shakeAmount>.001?(this.camera.position.x+=(Math.random()-.5)*this.shakeAmount,this.camera.position.y+=(Math.random()-.5)*this.shakeAmount,this.shakeAmount*=Math.exp(-8*(1/60))):this.shakeAmount=0}}class _e{constructor(t=0,e=0,i=1,n=1){this.x=t,this.y=e,this.width=i,this.height=n}get halfWidth(){return this.width*.5}get halfHeight(){return this.height*.5}get minX(){return this.x-this.halfWidth}get maxX(){return this.x+this.halfWidth}get minY(){return this.y-this.halfHeight}get maxY(){return this.y+this.halfHeight}overlaps(t){return this.minX<t.maxX&&this.maxX>t.minX&&this.minY<t.maxY&&this.maxY>t.minY}contains(t,e){return t>=this.minX&&t<=this.maxX&&e>=this.minY&&e<=this.maxY}}class c0{constructor(){this.solids=[],this.oneWays=[],this.triggers=[]}addSolid(t,e={}){const i={aabb:t,type:e.type||"solid",runnable:e.runnable??!1,crumbling:e.crumbling??!1,crumbleTimer:0,crumbleState:"idle",respawnTimer:0,entity:e.entity||null,id:e.id||Math.random().toString(36).substring(2)};return this.solids.push(i),i}addOneWay(t,e={}){const i={aabb:t,type:"oneWay",entity:e.entity||null};return this.oneWays.push(i),i}addTrigger(t,e,i={}){const n={aabb:t,type:i.type||"trigger",onEnter:e,active:!0,tag:i.tag||"",entity:i.entity||null};return this.triggers.push(n),n}clear(){this.solids.length=0,this.oneWays.length=0,this.triggers.length=0}update(t){for(let e=0;e<this.solids.length;e++){const i=this.solids[e];i.crumbling&&(i.crumbleState==="collapsing"?(i.crumbleTimer-=t,i.crumbleTimer<=0&&(i.crumbleState="collapsed",i.respawnTimer=3)):i.crumbleState==="collapsed"&&(i.respawnTimer-=t,i.respawnTimer<=0&&(i.crumbleState="idle")))}}moveAndSlide(t,e,i,n=!1){const r=t.minY,o={grounded:!1,ceiling:!1,wallLeft:!1,wallRight:!1,runnableWall:!1,groundSolid:null,hitHazard:!1},h=e.x*i;t.x+=h;for(let c=0;c<this.solids.length;c++){const u=this.solids[c];u.crumbleState!=="collapsed"&&t.overlaps(u.aabb)&&(e.x>0?(t.x=u.aabb.minX-t.halfWidth-.002,e.x=0,o.wallRight=!0,u.runnable&&(o.runnableWall=!0)):e.x<0&&(t.x=u.aabb.maxX+t.halfWidth+.002,e.x=0,o.wallLeft=!0,u.runnable&&(o.runnableWall=!0)))}const l=e.y*i;t.y+=l;for(let c=0;c<this.solids.length;c++){const u=this.solids[c];u.crumbleState!=="collapsed"&&t.overlaps(u.aabb)&&(e.y<=0?(t.y=u.aabb.maxY+t.halfHeight+.002,e.y=0,o.grounded=!0,o.groundSolid=u,u.crumbling&&u.crumbleState==="idle"&&(u.crumbleState="collapsing",u.crumbleTimer=.6)):e.y>0&&(t.y=u.aabb.minY-t.halfHeight-.002,e.y=0,o.ceiling=!0))}if(!n&&e.y<=0)for(let c=0;c<this.oneWays.length;c++){const u=this.oneWays[c];if(r>=u.aabb.maxY-.05&&t.minY<=u.aabb.maxY&&t.maxX>u.aabb.minX&&t.minX<u.aabb.maxX){t.y=u.aabb.maxY+t.halfHeight+.002,e.y=0,o.grounded=!0,o.groundSolid=u;break}}if(!o.grounded&&e.y<=0){const c=new _e(t.x,t.minY-.04,t.width*.9,.08);for(let u=0;u<this.solids.length;u++){const f=this.solids[u];if(f.crumbleState!=="collapsed"&&c.overlaps(f.aabb)){o.grounded=!0,o.groundSolid=f;break}}}return o}checkLedge(t,e){const i=t.x+e*(t.halfWidth+.15),n=t.maxY-.1;for(let a=0;a<this.solids.length;a++){const r=this.solids[a];if(r.crumbleState==="collapsed")continue;const o=e>0?r.aabb.minX:r.aabb.maxX,h=r.aabb.maxY;if((i-o)**2+(n-h)**2<.35*.35){const c=new _e(o+e*(t.halfWidth+.05),h+t.halfHeight+.1,t.width*.9,t.height);let u=!1;for(let f=0;f<this.solids.length;f++)if(f!==a&&c.overlaps(this.solids[f].aabb)){u=!0;break}if(!u)return{cornerX:o,cornerY:h,snapX:o-e*(t.halfWidth+.02),snapY:h-t.halfHeight+.25,climbTargetX:o+e*(t.halfWidth+.4),climbTargetY:h+t.halfHeight+.05}}}return null}checkTriggers(t,e=null){const i=[];for(let n=0;n<this.triggers.length;n++){const a=this.triggers[n];a.active&&a.aabb.overlaps(t)&&(i.push(a),a.onEnter&&a.onEnter(e||t,a))}return i}}class Le{constructor({owner:t,type:e,width:i,height:n,offsetX:a=0,offsetY:r=0,damage:o=1,isParry:h=!1}){this.owner=t,this.type=e,this.aabb=new _e(0,0,i,n),this.offsetX=a,this.offsetY=r,this.damage=o,this.isParry=h,this.active=!1,this.hitEntities=new Set}updatePosition(t,e,i=1){this.aabb.x=t+i*this.offsetX,this.aabb.y=e+this.offsetY}activate(){this.active=!0,this.hitEntities.clear()}deactivate(){this.active=!1,this.hitEntities.clear()}}class l0{constructor(){this.playerHurtboxes=[],this.playerAttacks=[],this.enemyHurtboxes=[],this.enemyAttacks=[]}registerPlayerHurtbox(t){this.playerHurtboxes.push(t)}registerPlayerAttack(t){this.playerAttacks.push(t)}registerEnemyHurtbox(t){this.enemyHurtboxes.push(t)}registerEnemyAttack(t){this.enemyAttacks.push(t)}unregisterEntity(t){this.playerHurtboxes=this.playerHurtboxes.filter(e=>e.owner!==t),this.playerAttacks=this.playerAttacks.filter(e=>e.owner!==t),this.enemyHurtboxes=this.enemyHurtboxes.filter(e=>e.owner!==t),this.enemyAttacks=this.enemyAttacks.filter(e=>e.owner!==t)}clear(){this.playerHurtboxes.length=0,this.playerAttacks.length=0,this.enemyHurtboxes.length=0,this.enemyAttacks.length=0}checkCollisions({onPlayerHitEnemy:t,onEnemyHitPlayer:e,onParrySuccess:i}){for(const n of this.playerAttacks)if(n.active)for(const a of this.enemyHurtboxes)a.active&&(n.hitEntities.has(a.owner)||n.aabb.overlaps(a.aabb)&&(n.hitEntities.add(a.owner),t&&t(n,a)));for(const n of this.enemyAttacks){if(!n.active)continue;const a=this.playerHurtboxes[0]?.owner;if(a&&a.isParrying){for(const r of this.playerHurtboxes)if(n.aabb.overlaps(r.aabb)&&i){const o=a.isPerfectParryWindow();i(n,a,o),n.active=!1;return}}for(const r of this.playerHurtboxes)r.active&&(n.hitEntities.has(r.owner)||n.aabb.overlaps(r.aabb)&&(n.hitEntities.add(r.owner),e&&e(n,r)))}}}const ae=new l0;class da{constructor(t,e=""){this.owner=t,this.states=new Map,this.currentState=null,this.currentStateName="",this.previousStateName="",this.timeInState=0,e&&(this.initialName=e)}addState(t,e){return this.states.set(t,{enter:e.enter||(()=>{}),update:e.update||(()=>{}),fixedUpdate:e.fixedUpdate||(()=>{}),exit:e.exit||(()=>{})}),this}changeState(t,e=null){if(this.currentStateName!==t){if(!this.states.has(t)){console.warn(`StateMachine: state "${t}" not registered.`);return}this.currentState&&this.currentState.exit.call(this.owner),this.previousStateName=this.currentStateName,this.currentStateName=t,this.currentState=this.states.get(t),this.timeInState=0,this.currentState.enter.call(this.owner,e)}}update(t,...e){this.timeInState+=t,this.currentState&&this.currentState.update.call(this.owner,t,...e)}fixedUpdate(t,...e){this.currentState&&this.currentState.fixedUpdate.call(this.owner,t,...e)}isInState(t){return this.currentStateName===t}}class u0{constructor(t,e,i){this.player=t,this.inkSplash=e,this.loop=i,this.comboIndex=0,this.comboWindowTimer=0,this.attackPhase=null,this.phaseTimer=0,this.isAirAttack=!1,this.isParrying=!1,this.parryTimer=0,this.parryCooldownTimer=0,this.slowMoTimer=0,this.hurtbox=new Le({owner:this.player,type:"player_hurtbox",width:z.PLAYER.width*.85,height:z.PLAYER.height*.95,offsetX:0,offsetY:0}),this.hurtbox.activate(),ae.registerPlayerHurtbox(this.hurtbox),this.attackHitbox=new Le({owner:this.player,type:"player_attack",width:1.6,height:1.4,offsetX:1,offsetY:0,damage:1}),ae.registerPlayerAttack(this.attackHitbox),this.player.isParrying=!1,this.player.isPerfectParryWindow=()=>this.isParrying&&this.parryTimer<=z.COMBAT.parryPerfectWindow}startAttack(t=!1){if(this.isAirAttack=t,t){const e=z.COMBAT.airAttack;this.attackPhase="windup",this.phaseTimer=e.windup,this.attackHitbox.damage=e.damage,this.attackHitbox.aabb.width=e.reach,this.attackHitbox.offsetX=e.reach*.55,this.player.velocity.y<0&&(this.player.velocity.y=Math.max(this.player.velocity.y*.2,-2))}else{this.comboWindowTimer>0||this.attackPhase==="recovery"?this.comboIndex=(this.comboIndex+1)%z.COMBAT.combo.length:this.comboIndex=0;const e=z.COMBAT.combo[this.comboIndex];this.attackPhase="windup",this.phaseTimer=e.windup,this.attackHitbox.damage=e.damage,this.attackHitbox.aabb.width=e.reach,this.attackHitbox.offsetX=e.reach*.55,this.player.velocity.x+=this.player.facing*e.lunge}this.attackHitbox.deactivate()}updateAttack(t){if(this.attackPhase&&(this.phaseTimer-=t,this.phaseTimer<=0))if(this.attackPhase==="windup"){this.attackPhase="active";const e=this.isAirAttack?z.COMBAT.airAttack:z.COMBAT.combo[this.comboIndex];this.phaseTimer=e.active,this.attackHitbox.activate(),this.inkSplash&&this.inkSplash.spawnSlashArc(this.player.aabb.x,this.player.aabb.y,this.player.facing,this.comboIndex,this.isAirAttack),at.emit("player_attack_swing",{comboIndex:this.comboIndex,isAir:this.isAirAttack})}else if(this.attackPhase==="active"){this.attackPhase="recovery";const e=this.isAirAttack?z.COMBAT.airAttack:z.COMBAT.combo[this.comboIndex];this.phaseTimer=e.recovery,this.attackHitbox.deactivate()}else this.attackPhase==="recovery"&&(this.attackPhase=null,this.attackHitbox.deactivate(),this.isAirAttack||(this.comboWindowTimer=.35),this.player.coyoteTimer>0?this.player.fsm.changeState(this.player.input.axisX!==0?"Run":"Idle"):this.player.fsm.changeState("Fall"))}startParry(){this.isParrying=!0,this.player.isParrying=!0,this.parryTimer=0,this.parryCooldownTimer=z.COMBAT.parryCooldown}updateParry(t){this.isParrying&&(this.parryTimer+=t,this.parryTimer>=z.COMBAT.parryGuardWindow&&(this.endParry(),this.player.coyoteTimer>0?this.player.fsm.changeState(this.player.input.axisX!==0?"Run":"Idle"):this.player.fsm.changeState("Fall")))}endParry(){this.isParrying=!1,this.player.isParrying=!1}onParrySuccess(t,e){if(e){const i=t.owner;i&&i.stagger&&i.stagger(z.ENEMIES.ashigaru.staggerDuration),this.inkSplash&&this.inkSplash.spawnParryBurst(this.player.aabb.x+this.player.facing*.8,this.player.aabb.y,!0),this.loop&&this.loop.triggerHitStop(z.COMBAT.hitStopMsParry),at.emit("camera_shake",{amount:.35}),at.emit("parry_perfect",{enemy:i}),this.endParry(),this.player.fsm.changeState("Idle")}else this.inkSplash&&this.inkSplash.spawnParryBurst(this.player.aabb.x+this.player.facing*.6,this.player.aabb.y,!1),this.loop&&this.loop.triggerHitStop(z.COMBAT.hitStopMsNormal),at.emit("camera_shake",{amount:.15}),this.player.velocity.x=-this.player.facing*3.5}onHitEnemy(t){const e=t.owner;if(!e||e.isDead)return;if((e.isUnaware||e.isStaggered)&&this.player.facing===e.facing){e.takeDamage(999,!0,this.player.aabb.x),this.loop&&(this.loop.setTimeScale(z.COMBAT.backstabTimeScale),this.slowMoTimer=z.COMBAT.backstabSlowMoDuration,this.loop.triggerHitStop(120)),this.inkSplash&&this.inkSplash.spawnBackstabBurst(e.aabb.x,e.aabb.y),at.emit("camera_shake",{amount:.45}),at.emit("backstab_kill",{enemy:e});return}const n=this.comboIndex===2&&!this.isAirAttack,a=n?2:1,r=n?z.COMBAT.hitStopMsHeavy:z.COMBAT.hitStopMsNormal,o=e.isStaggered?a*z.COMBAT.riposteMultiplier:a;e.takeDamage(o,!1,this.player.aabb.x),!this.player.wasGroundedLastFrame&&e.isAirborne&&(this.player.hasAirDash=!0,at.emit("air_dash_refreshed")),this.inkSplash&&this.inkSplash.spawnHitImpact(e.aabb.x,e.aabb.y,this.player.facing,n?18:8,n),this.loop&&this.loop.triggerHitStop(r),at.emit("camera_shake",{amount:n?.25:.12})}takeDamage(t=1,e=0){if(this.player.invincibilityTimer>0||this.player.fsm.currentStateName==="Dead")return;this.player.health=Math.max(0,this.player.health-t),this.player.invincibilityTimer=z.COMBAT.hurtInvincibility;const i=this.player.aabb.x>=e?1:-1;this.player.velocity.x=i*z.COMBAT.hurtKnockback.x,this.player.velocity.y=z.COMBAT.hurtKnockback.y,this.inkSplash&&this.inkSplash.spawnHitImpact(this.player.aabb.x,this.player.aabb.y,-i,12,!0,!0),this.loop&&this.loop.triggerHitStop(z.COMBAT.hitStopMsHeavy),at.emit("camera_shake",{amount:.35}),at.emit("player_damaged",{health:this.player.health}),this.player.health<=0?this.player.fsm.changeState("Dead"):this.player.fsm.changeState("Hurt")}fixedUpdate(t){this.comboWindowTimer>0&&(this.comboWindowTimer-=t,this.comboWindowTimer<=0&&(this.comboIndex=0)),this.parryCooldownTimer>0&&(this.parryCooldownTimer-=t),this.slowMoTimer>0&&(this.slowMoTimer-=t,this.slowMoTimer<=0&&this.loop&&this.loop.setTimeScale(1)),this.attackPhase&&this.updateAttack(t),this.isParrying&&this.updateParry(t),this.hurtbox.updatePosition(this.player.aabb.x,this.player.aabb.y,this.player.facing),this.attackHitbox.updatePosition(this.player.aabb.x,this.player.aabb.y,this.player.facing)}}const d0=`
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
`,f0=`
  uniform vec3 uInkDark;
  uniform vec3 uInkMid;
  uniform vec3 uInkLight;
  uniform vec3 uPaperLight;
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

  // Quintic C2 continuous paper-fiber noise
  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
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

    // Half-Lambert diffuse + hemisphere ambient occlusion
    float NdotL = dot(worldNormal, lightDir);
    float halfLambert = clamp(NdotL * 0.5 + 0.5, 0.0, 1.0);
    float hemiAO = clamp(worldNormal.y * 0.35 + 0.65, 0.25, 1.0);
    float baseLight = clamp(halfLambert * hemiAO * 1.15 - uDarkBias * 0.4, 0.0, 1.0);

    // Procedural paper-fiber & brush-stroke noise
    vec2 fiberCoord = vec2(vWorldPosition.x * 0.48, vWorldPosition.y * 1.75) * uNoiseScale;
    float brushFiber = (fbm(fiberCoord) - 0.5) * 0.15;
    float fineFiber = (noise(vWorldPosition.xy * 18.0) - 0.5) * 0.05;
    float lit = clamp(baseLight + brushFiber + fineFiber, 0.0, 1.0);

    // 3-Band Ink-Wash Quantization (uInkDark #141413, uInkMid #5c5b57, uPaperLight #eae5d9)
    vec3 tone;
    if (lit < 0.33) {
      tone = mix(uInkDark, uInkMid, smoothstep(0.10, 0.33, lit));
    } else if (lit < 0.68) {
      tone = mix(uInkMid, uInkLight, smoothstep(0.33, 0.68, lit));
    } else {
      tone = mix(uInkLight, uPaperLight, smoothstep(0.68, 0.95, lit));
    }

    // Rim-light edge separation & calligraphic Fresnel contour
    float NdotV = abs(dot(normal, viewDir));
    float fresnelRim = pow(1.0 - clamp(NdotV, 0.0, 1.0), 3.0);
    float topRimMask = clamp(worldNormal.y + 0.3, 0.0, 1.0);
    tone = mix(tone, uRimHighlight, fresnelRim * topRimMask * 0.28 * (1.0 - uDarkBias));

    float brushWobble = (fbm(vWorldPosition.xy * 3.2) - 0.5) * 0.08;
    float inkEdge = 1.0 - smoothstep(0.12, 0.31 + brushWobble, NdotV);
    vec3 finalColor = mix(tone, uInkDark, inkEdge * uInkContourStrength * 0.85);

    // Top-ledge paper wash highlight
    if (worldNormal.y > 0.75) {
      float topLight = smoothstep(0.75, 0.98, worldNormal.y) * 0.24;
      finalColor = mix(finalColor, uRimHighlight, topLight * (1.0 - uDarkBias));
    }

    // Vermilion Seal Accent (#b8292f)
    if (uHasRedSeal > 0.5) {
      float pulse = 0.84 + 0.16 * sin(uSealPulse);
      finalColor = mix(finalColor, uVermilion * pulse, 0.88);
    }

    // Multi-layer Parchment FogExp2 blending
    float zDist = max(0.0, length(vViewPosition) - 28.0);
    float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * zDist * zDist);
    finalColor = mix(finalColor, uFogColor, clamp(fogFactor, 0.0, 0.65));

    gl_FragColor = vec4(finalColor, 1.0);
  }
`,p0=`
  uniform float uOutlineThickness;
  varying vec3 vWorldPos;

  void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPos.xyz;
    // Sinusoidal brush-taper thickness modulation
    float taper = 0.75 + 0.40 * sin(worldPos.x * 3.1 + worldPos.y * 4.7 + worldPos.z * 2.3);
    vec3 extruded = position + normalize(normal) * (uOutlineThickness * taper);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(extruded, 1.0);
  }
`,m0=`
  uniform vec3 uOutlineColor;
  void main() {
    gl_FragColor = vec4(uOutlineColor, 1.0);
  }
`;function we(s={}){const e={...{inkDark:z.PALETTE.inkDark,inkMid:z.PALETTE.inkMid,inkLight:z.PALETTE.inkLight,paperLight:z.PALETTE.parchment,parchment:z.PALETTE.parchment,rimHighlight:z.PALETTE.rimHighlight,vermilion:z.PALETTE.vermilion,lightDirection:new C(.45,.82,.62).normalize(),hasRedSeal:0,noiseScale:1.8,fogDensity:.004,fogColor:new st(z.PALETTE.parchment),inkContourStrength:.75,darkBias:0},...s};return new hi({vertexShader:d0,fragmentShader:f0,uniforms:{uInkDark:{value:new st(e.inkDark)},uInkMid:{value:new st(e.inkMid)},uInkLight:{value:new st(e.inkLight)},uPaperLight:{value:new st(e.paperLight||e.parchment)},uParchment:{value:new st(e.parchment)},uRimHighlight:{value:new st(e.rimHighlight)},uVermilion:{value:new st(e.vermilion)},uLightDirection:{value:e.lightDirection},uHasRedSeal:{value:e.hasRedSeal},uSealPulse:{value:0},uNoiseScale:{value:e.noiseScale},uFogDensity:{value:e.fogDensity},uFogColor:{value:e.fogColor},uInkContourStrength:{value:e.inkContourStrength},uDarkBias:{value:e.darkBias}}})}function g0(s=.024,t=1315859){return new hi({vertexShader:p0,fragmentShader:m0,side:ke,uniforms:{uOutlineThickness:{value:s},uOutlineColor:{value:new st(t)}}})}function Q(s,t=.024,e=1315859){if(!s||!s.geometry)return s;const i=g0(t*.65,e),n=new k(s.geometry,i);return n.name="ink_outline",s.add(n),s}class x0{constructor(){this.root=new St,this.bodyRoot=new St,this.bodyRoot.position.y=-1.8*.5,this.root.add(this.bodyRoot);const t=we({inkDark:1184273,inkMid:2894632,inkLight:5591885,noiseScale:5.5,darkBias:.22}),e=we({inkDark:1841945,inkMid:4736577,inkLight:8223346,noiseScale:5,darkBias:.08}),i=we({inkDark:1118480,inkMid:3354925,inkLight:7039072,noiseScale:7,darkBias:.15});this.torsoGroup=new St,this.torsoGroup.position.set(0,.96,0),this.bodyRoot.add(this.torsoGroup);const n=new Et(.24,.2,.62,10),a=new k(n,e);a.castShadow=!0,Q(a,.032),this.torsoGroup.add(a);const r=new Et(.27,.34,.28,12),o=new k(r,t);o.position.y=.22,Q(o,.035),this.torsoGroup.add(o);const h=new Et(.22,.23,.15,10),l=new k(h,t);l.position.y=-.24,Q(l,.028),this.torsoGroup.add(l),this.headGroup=new St,this.headGroup.position.set(.03,.46,0),this.torsoGroup.add(this.headGroup);const c=new Ye(.21,12,10),u=new k(c,t);Q(u,.028),this.headGroup.add(u);const f=new Gt(.08,.035,.24),d=new Nt({color:16118246}),g=new k(f,d);g.position.set(.16,.03,0),this.headGroup.add(g);const x=this.generateKasaTexture(),p=x?new Se({map:x,roughness:.85,metalness:.05,bumpMap:x,bumpScale:.02}):e,m=new pe(.88,.3,24);this.hat=new k(m,p),this.hat.position.set(.02,.19,0),this.hat.rotation.z=-.06,this.hat.castShadow=!0,Q(this.hat,.036),this.headGroup.add(this.hat);const y=new Gn(.88,.024,6,24);y.rotateX(Math.PI/2);const _=new Nt({color:1315859}),b=new k(y,_);b.position.y=-.14,this.hat.add(b),this.leftArm=this.buildArm(e,i),this.leftArm.position.set(0,.22,-.25),this.torsoGroup.add(this.leftArm),this.rightArm=this.buildArm(e,i),this.rightArm.position.set(0,.22,.25),this.torsoGroup.add(this.rightArm),this.leftLeg=this.buildLeg(e,i,t),this.leftLeg.position.set(0,.72,-.13),this.bodyRoot.add(this.leftLeg),this.rightLeg=this.buildLeg(e,i,t),this.rightLeg.position.set(0,.72,.13),this.bodyRoot.add(this.rightLeg),this.sayaGroup=new St,this.sayaGroup.position.set(-.05,-.2,.24),this.sayaGroup.rotation.z=.48,this.torsoGroup.add(this.sayaGroup);const P=new Et(.032,.026,1.15,8);P.rotateZ(Math.PI/2);const E=new k(P,t);E.position.x=-.35,Q(E,.022),this.sayaGroup.add(E);const T=new Et(.08,.08,.025,10);T.rotateZ(Math.PI/2);const R=new k(T,i);R.position.x=.22,this.sayaGroup.add(R);const N=new Et(.03,.028,.34,8);N.rotateZ(Math.PI/2),this.sheathedHilt=new k(N,e),this.sheathedHilt.position.x=.4,Q(this.sheathedHilt,.02),this.sayaGroup.add(this.sheathedHilt),this.drawnSword=new St,this.drawnSword.position.set(.08,-.26,0);const v=new Gt(1.35,.055,.02),S=new Nt({color:16118246}),F=new k(v,S);F.position.x=.72,Q(F,.028,1315859),this.drawnSword.add(F);const O=new k(N,t);this.drawnSword.add(O),this.drawnSword.visible=!1,this.rightArm.userData.forearm.add(this.drawnSword),this.cloakNodeCount=12,this.cloakSpacing=.17,this.cloakNodes=[];for(let X=0;X<this.cloakNodeCount;X++)this.cloakNodes.push({x:-X*this.cloakSpacing,y:1.25-X*.03,prevX:-X*this.cloakSpacing,prevY:1.25-X*.03});const W=new fe,K=new Float32Array(this.cloakNodeCount*2*3),V=new Float32Array(this.cloakNodeCount*2*2),Z=[];for(let X=0;X<this.cloakNodeCount;X++){const et=X/(this.cloakNodeCount-1);if(V[X*4+0]=et,V[X*4+1]=0,V[X*4+2]=et,V[X*4+3]=1,X<this.cloakNodeCount-1){const vt=X*2,dt=X*2+1,Lt=(X+1)*2,Ct=(X+1)*2+1;Z.push(vt,dt,Lt,dt,Ct,Lt)}}W.setAttribute("position",new Ce(K,3)),W.setAttribute("uv",new Ce(V,2)),W.setIndex(Z);const q=this.generateCloakBrushTexture(),ut=new Nt({map:q,color:1447444,side:se,transparent:!0,opacity:.96,depthWrite:!1});this.cloakMesh=new k(W,ut),this.bodyRoot.add(this.cloakMesh);const ht=new fe,bt=new Float32Array(this.cloakNodeCount*2*3);ht.setAttribute("position",new Ce(bt,3)),ht.setAttribute("uv",new Ce(V,2)),ht.setIndex(Z),this.sashMesh=new k(ht,ut),this.bodyRoot.add(this.sashMesh),this.inkMotes=[];const Wt=new Si(.04,6),Zt=new Nt({color:1315859,side:se});for(let X=0;X<8;X++){const et=new k(Wt,Zt);this.bodyRoot.add(et),this.inkMotes.push({mesh:et,phase:X*.85,radius:.12+X%3*.08})}}buildArm(t,e){const i=new St,n=new Et(.085,.075,.28,8),a=new k(n,t);a.position.y=-.12,Q(a,.024),i.add(a);const r=new St;r.position.set(0,-.25,0),i.add(r);const o=new Et(.072,.055,.28,8),h=new k(o,e);h.position.y=-.12,Q(h,.024),r.add(h);const l=new Ye(.058,8,8),c=new k(l,e);return c.position.y=-.27,r.add(c),i.userData.forearm=r,i}buildLeg(t,e,i){const n=new St,a=new Et(.14,.19,.38,8),r=new k(a,t);r.position.y=-.17,Q(r,.028),n.add(r);const o=new St;o.position.set(0,-.35,0),n.add(o);const h=new Et(.085,.062,.32,8),l=new k(h,e);l.position.y=-.15,Q(l,.024),o.add(l);const c=new Gt(.26,.1,.14),u=new k(c,i);return u.position.set(.05,-.32,0),Q(u,.024),o.add(u),n.userData.knee=o,n}generateKasaTexture(){if(typeof document>"u")return null;const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#2a2621"),i.addColorStop(.35,"#787163"),i.addColorStop(.85,"#b0a795"),i.addColorStop(1,"#1c1a17"),e.fillStyle=i,e.fillRect(0,0,512,512),e.strokeStyle="#1a1815",e.lineWidth=3;for(let n=0;n<512;n+=16)e.beginPath(),e.moveTo(n,0),e.lineTo(n,512),e.stroke();e.lineWidth=4;for(let n=40;n<512;n+=52)e.beginPath(),e.moveTo(0,n),e.lineTo(512,n),e.stroke();return new ea(t)}generateCloakBrushTexture(){if(typeof document>"u")return null;const t=document.createElement("canvas");t.width=512,t.height=256;const e=t.getContext("2d");e.clearRect(0,0,512,256);for(let i=8;i<248;i+=6){const n=360+Math.sin(i*.27)*90+Math.cos(i*.73)*55,a=e.createLinearGradient(0,i,n,i);a.addColorStop(0,"rgba(18, 18, 17, 1.0)"),a.addColorStop(.65,"rgba(28, 27, 25, 0.94)"),a.addColorStop(.88,"rgba(45, 43, 40, 0.55)"),a.addColorStop(1,"rgba(20, 20, 19, 0.0)"),e.strokeStyle=a,e.lineWidth=7+i%5,e.lineCap="round",e.beginPath(),e.moveTo(0,i),e.lineTo(n,i+Math.sin(i)*8),e.stroke()}return new ea(t)}update(t,e){const i=e.velocity.x,n=e.velocity.y,a=Math.abs(i),r=e.fsm.currentStateName,o=performance.now()*.001;if(r==="Run"){const d=o*14;this.torsoGroup.rotation.z=-.24,this.torsoGroup.position.y=.94+Math.abs(Math.sin(d))*.07,this.headGroup.rotation.z=.14;const g=Math.sin(d)*.85;this.rightLeg.rotation.z=g,this.rightLeg.userData.knee.rotation.z=Math.min(0,-Math.cos(d)*.75-.25),this.leftLeg.rotation.z=-g,this.leftLeg.userData.knee.rotation.z=Math.min(0,Math.cos(d)*.75-.25),this.rightArm.rotation.z=-g*.75,this.rightArm.userData.forearm.rotation.z=.55,this.leftArm.rotation.z=g*.75,this.leftArm.userData.forearm.rotation.z=.55}else if(r==="JumpRise"||r==="Fall"||r==="WallRun")this.torsoGroup.rotation.z=-.28,this.torsoGroup.position.y=.98,this.headGroup.rotation.z=.18,this.rightLeg.rotation.z=.95,this.rightLeg.userData.knee.rotation.z=-1.15,this.leftLeg.rotation.z=-.68,this.leftLeg.userData.knee.rotation.z=-.35,this.rightArm.rotation.z=-.65,this.rightArm.userData.forearm.rotation.z=.4,this.leftArm.rotation.z=-.95,this.leftArm.userData.forearm.rotation.z=.25;else if(r==="LedgeHang"||r==="LedgeClimb")this.torsoGroup.rotation.z=-.05,this.rightArm.rotation.z=2.4,this.leftArm.rotation.z=2.2,this.rightLeg.rotation.z=.2,this.leftLeg.rotation.z=-.15;else{const d=Math.sin(o*2.6)*.025;this.torsoGroup.rotation.z=-.08,this.torsoGroup.position.y=.95+d,this.headGroup.rotation.z=.05,this.rightLeg.rotation.z=.22,this.rightLeg.userData.knee.rotation.z=-.18,this.leftLeg.rotation.z=-.22,this.leftLeg.userData.knee.rotation.z=-.12,this.rightArm.rotation.z=.25,this.rightArm.userData.forearm.rotation.z=.45,this.leftArm.rotation.z=-.18,this.leftArm.userData.forearm.rotation.z=.35}const h=r==="Attack"||r==="AirAttack"||r==="Parry";if(this.drawnSword.visible=h,this.sheathedHilt.visible=!h,r==="Attack"||r==="AirAttack"){const d=e.combat?e.combat.comboIndex:0,g=[1.45,-.55,1.95];this.rightArm.rotation.z=g[d%3],this.rightArm.userData.forearm.rotation.z=.25,this.torsoGroup.rotation.z=-.35}else r==="Parry"&&(this.rightArm.rotation.z=1.15,this.rightArm.userData.forearm.rotation.z=.85);this.cloakNodes[0].x=-.12,this.cloakNodes[0].y=1.24,this.cloakNodes[0].prevX=-.12,this.cloakNodes[0].prevY=1.24;const l=-(4.8+a*.65),c=o*7.5;for(let d=1;d<this.cloakNodeCount;d++){const g=this.cloakNodes[d],x=(g.x-g.prevX)*.88,p=(g.y-g.prevY)*.88;g.prevX=g.x,g.prevY=g.y;const m=Math.sin(c-d*.65)*(1.8+a*.22),y=Math.min(2.5,a*.16)-n*.08;g.x+=x+l*t,g.y+=p+(m+y-2.2)*t}for(let d=0;d<3;d++)for(let g=0;g<this.cloakNodeCount-1;g++){const x=this.cloakNodes[g],p=this.cloakNodes[g+1],m=p.x-x.x,y=p.y-x.y,_=Math.hypot(m,y)||.001,b=(_-this.cloakSpacing)/_;g===0?(p.x-=m*b,p.y-=y*b):(x.x+=m*b*.5,x.y+=y*b*.5,p.x-=m*b*.5,p.y-=y*b*.5)}const u=this.cloakMesh.geometry.attributes.position.array,f=this.sashMesh.geometry.attributes.position.array;for(let d=0;d<this.cloakNodeCount;d++){const g=this.cloakNodes[d],x=d/(this.cloakNodeCount-1),p=.16+x*.28+Math.sin(c-d*.5)*.04,m=Math.sin(x*Math.PI)*.12,y=d*6;u[y+0]=g.x,u[y+1]=g.y+p*.45,u[y+2]=-.06+m,u[y+3]=g.x,u[y+4]=g.y-p*.85,u[y+5]=.06+m;const _=1.44+(g.y-1.24)*.55+Math.cos(c-d*.8)*.06,b=.045*(1-x*.5);f[y+0]=g.x*.78,f[y+1]=_+b,f[y+2]=.02,f[y+3]=g.x*.78,f[y+4]=_-b,f[y+5]=-.02}this.cloakMesh.geometry.attributes.position.needsUpdate=!0,this.sashMesh.geometry.attributes.position.needsUpdate=!0;for(let d=0;d<this.inkMotes.length;d++){const g=this.inkMotes[d],x=Math.min(this.cloakNodeCount-1,3+d),p=this.cloakNodes[x],m=o*4.5+g.phase;g.mesh.position.set(p.x-.15+Math.cos(m)*g.radius,p.y+Math.sin(m*1.3)*g.radius,.15);const y=.6+.5*Math.sin(m);g.mesh.scale.set(y,y,1)}}}class v0{constructor({scene:t,collision:e,input:i,afterimages:n,ripples:a,inkSplash:r,loop:o,spawnX:h=0,spawnY:l=2}){this.scene=t,this.collision=e,this.input=i,this.afterimages=n,this.ripples=a,this.inkSplash=r,this.loop=o,this.aabb=new _e(h??0,l??2,z.PLAYER.width,z.PLAYER.height),this.velocity={x:0,y:0},this.facing=1,this.turnTween=0,this.maxHealth=z.COMBAT.maxHealth,this.health=this.maxHealth,this.invincibilityTimer=0,this.hurtTimer=0,this.respawnTimer=0,this.coyoteTimer=0,this.isJumpingRise=!1,this.hasAirDash=!0,this.hasDoubleJump=!0,this.dashTimer=0,this.dashCooldownTimer=0,this.dashDirection={x:1,y:0},this.afterimageTimer=0,this.hasInkStepUnlocked=!0,this.scrollOfFlowUnlocked=!1,this.swingingLanternsRef=[],this.targetGrappleLantern=null,at.on("scroll_unlocked",({scrollId:c})=>{c>=1&&(this.scrollOfFlowUnlocked=!0,this.hasInkStepUnlocked=!0)}),this.wallRunTimer=0,this.activeWallNormal=0,this.ledgeGrabCooldown=0,this.ledgeCorner=null,this.ledgeClimbProgress=0,this.ledgeClimbStart={x:0,y:0},this.ledgeClimbEnd={x:0,y:0},this.groundRef=null,this.wasGroundedLastFrame=!1,this.lastCheckpoint={x:h,y:l},this.meshGroup=new St,this.meshGroup.position.set(this.aabb.x,this.aabb.y,0),this.kuroModel=new x0,this.meshGroup.add(this.kuroModel.root),this.scene.add(this.meshGroup),this.combat=new u0(this,this.inkSplash,this.loop),this.fsm=new da(this,"Idle"),this.setupFSM(),this.fsm.changeState("Idle")}setupFSM(){this.fsm.addState("Idle",{enter:()=>{this.isJumpingRise=!1,this.hasAirDash=!0,this.hasDoubleJump=!0},fixedUpdate:t=>{if(this.applyGroundMovement(t,0),!this.checkAttackTrigger()&&!this.checkParryTrigger()&&!this.checkJumpTrigger()&&!this.checkDashTrigger()){if(this.input.axisX!==0){this.fsm.changeState("Run");return}this.coyoteTimer<=0&&this.fsm.changeState("Fall")}}}),this.fsm.addState("Run",{enter:()=>{this.hasAirDash=!0,this.hasDoubleJump=!0},fixedUpdate:t=>{if(!this.checkAttackTrigger()&&!this.checkParryTrigger()&&!this.checkJumpTrigger()&&!this.checkDashTrigger()){if(this.input.axisX===0){this.fsm.changeState("Idle");return}this.applyGroundMovement(t,this.input.axisX*z.PLAYER.runSpeed),this.coyoteTimer<=0&&this.fsm.changeState("Fall")}}}),this.fsm.addState("JumpRise",{enter:()=>{this.velocity.y=z.PLAYER.jumpVelocity,this.isJumpingRise=!0,this.coyoteTimer=0},fixedUpdate:t=>{if(!this.checkAttackTrigger()&&!this.checkDashTrigger()&&!this.checkJumpTrigger()){if(this.applyAirMovement(t),this.applyGravity(t),this.isJumpingRise&&this.input.jumpReleased&&this.velocity.y>0&&(this.velocity.y*=z.PLAYER.jumpCutMultiplier,this.isJumpingRise=!1),this.velocity.y<=0){this.fsm.changeState("Fall");return}this.checkWallContact()}}}),this.fsm.addState("Fall",{fixedUpdate:t=>{if(!this.checkAttackTrigger()&&!this.checkDashTrigger()&&(this.applyAirMovement(t),this.applyGravity(t),!this.checkJumpTrigger())){if(this.velocity.y<0&&this.ledgeGrabCooldown<=0){const e=this.collision.checkLedge(this.aabb,this.facing);if(e){this.fsm.changeState("LedgeHang",e);return}}if(!this.checkWallContact()&&this.coyoteTimer>0){this.input.axisX!==0?this.fsm.changeState("Run"):this.fsm.changeState("Idle");return}}}}),this.fsm.addState("WallRun",{enter:()=>{this.wallRunTimer=z.PLAYER.wallRunDuration,this.velocity.y=z.PLAYER.wallRunSpeed,this.velocity.x=0,this.hasAirDash=!0},fixedUpdate:t=>{if(this.wallRunTimer-=t,this.input.jumpBuffered){this.executeWallJump();return}if(this.activeWallNormal===-1&&this.input.axisX>=0||this.activeWallNormal===1&&this.input.axisX<=0){this.fsm.changeState("Fall");return}if(this.wallRunTimer<=0){this.fsm.changeState("WallSlide");return}}}),this.fsm.addState("WallSlide",{enter:()=>{this.velocity.y=z.PLAYER.wallSlideSpeed,this.velocity.x=0},fixedUpdate:t=>{if(this.velocity.y=z.PLAYER.wallSlideSpeed,this.input.jumpBuffered){this.executeWallJump();return}if(this.activeWallNormal===-1&&this.input.axisX>=0||this.activeWallNormal===1&&this.input.axisX<=0){this.fsm.changeState("Fall");return}this.coyoteTimer>0&&this.fsm.changeState("Idle")}}),this.fsm.addState("LedgeHang",{enter:t=>{this.ledgeCorner=t,this.velocity.x=0,this.velocity.y=0,this.hasAirDash=!0,t.side==="left"?(this.aabb.x=t.x-this.aabb.width*.5,this.facing=1):(this.aabb.x=t.x+this.aabb.width*.5,this.facing=-1),this.aabb.y=t.y-this.aabb.height*.5},fixedUpdate:t=>{if(this.input.axisY>0||this.input.jumpBuffered){this.input.consumeJump(),this.fsm.changeState("LedgeClimb");return}if(this.input.axisY<0){this.ledgeGrabCooldown=.3,this.fsm.changeState("Fall");return}}}),this.fsm.addState("LedgeClimb",{enter:()=>{this.ledgeClimbProgress=0,this.ledgeClimbStart={x:this.aabb.x,y:this.aabb.y},this.ledgeClimbEnd={x:this.ledgeCorner.side==="left"?this.ledgeCorner.x+.6:this.ledgeCorner.x-.6,y:this.ledgeCorner.y+this.aabb.height*.5+.05}},fixedUpdate:t=>{this.ledgeClimbProgress+=t/z.PLAYER.ledgeClimbDuration;const e=Math.min(1,this.ledgeClimbProgress);this.aabb.x=Ue.lerp(this.ledgeClimbStart.x,this.ledgeClimbEnd.x,e),this.aabb.y=Ue.lerp(this.ledgeClimbStart.y,this.ledgeClimbEnd.y,e),this.ledgeClimbProgress>=1&&(this.aabb.x=this.ledgeClimbEnd.x,this.aabb.y=this.ledgeClimbEnd.y,this.fsm.changeState("Idle"))}}),this.fsm.addState("InkStep",{enter:()=>{this.dashTimer=z.PLAYER.dashDuration,this.dashCooldownTimer=z.PLAYER.dashCooldown,this.hasAirDash=!1,this.invincibilityTimer=z.PLAYER.dashInvincibility,this.afterimageTimer=0;let t=this.input.axisX,e=this.input.axisY;t===0&&e===0&&(t=this.facing,e=0);const i=Math.hypot(t,e)||1;this.dashDirection={x:t/i,y:e/i},this.velocity.x=this.dashDirection.x*z.PLAYER.dashSpeed,this.velocity.y=this.dashDirection.y*z.PLAYER.dashSpeed,at.emit("player:dash",{x:this.aabb.x,y:this.aabb.y})},fixedUpdate:t=>{this.dashTimer-=t,this.afterimageTimer-=t,this.afterimageTimer<=0&&(this.afterimages.spawn(this.aabb.x,this.aabb.y,0,this.facing),this.afterimageTimer=z.PLAYER.afterimageInterval),this.dashTimer<=0&&(this.velocity.x*=z.PLAYER.dashSpeedDecay,this.velocity.y*=.5,this.coyoteTimer>0?this.fsm.changeState("Run"):this.fsm.changeState("Fall"))}}),this.fsm.addState("Attack",{enter:()=>{this.combat.startAttack(!1)},fixedUpdate:t=>{if(this.applyGroundMovement(t,0),this.input.attackBuffered&&this.combat.attackPhase==="recovery"){this.input.consumeAttack(),this.combat.startAttack(!1);return}this.checkParryTrigger()||this.combat.attackPhase==="recovery"&&this.checkDashTrigger()}}),this.fsm.addState("AirAttack",{enter:()=>{this.combat.startAttack(!0)},fixedUpdate:t=>{const e=this.velocity.y>0?z.PLAYER.gravityRising:z.PLAYER.gravityFalling;this.velocity.y+=e*.35*t,this.velocity.x*=.94,this.coyoteTimer>0&&this.fsm.changeState("Idle")}}),this.fsm.addState("Parry",{enter:()=>{this.combat.startParry()},fixedUpdate:t=>{this.applyGroundMovement(t,0),this.applyGravity(t)}}),this.fsm.addState("Hurt",{enter:()=>{this.hurtTimer=.28},fixedUpdate:t=>{this.hurtTimer-=t,this.applyAirMovement(t),this.applyGravity(t),this.hurtTimer<=0&&(this.coyoteTimer>0?this.fsm.changeState(this.input.axisX!==0?"Run":"Idle"):this.fsm.changeState("Fall"))}}),this.fsm.addState("Dead",{enter:()=>{this.velocity.x=0,this.velocity.y=0,this.respawnTimer=1,at.emit("player_died")},fixedUpdate:t=>{this.respawnTimer-=t,this.respawnTimer<=0&&this.respawnAtCheckpoint()}})}checkAttackTrigger(){return this.input.attackBuffered?(this.input.consumeAttack(),this.coyoteTimer>0?this.fsm.changeState("Attack"):this.fsm.changeState("AirAttack"),!0):!1}checkParryTrigger(){return this.input.parryBuffered&&this.combat.parryCooldownTimer<=0?(this.input.consumeParry(),this.fsm.changeState("Parry"),!0):!1}checkJumpTrigger(){return this.input.jumpBuffered?this.coyoteTimer>0?(this.input.consumeJump(),this.fsm.changeState("JumpRise"),!0):this.hasDoubleJump?(this.input.consumeJump(),this.hasDoubleJump=!1,this.ripples&&this.ripples.spawn(this.aabb.x,this.aabb.y-this.aabb.halfH,1.1),this.fsm.changeState("JumpRise"),!0):!1:!1}updateLanternGrappleTarget(){if(this.targetGrappleLantern=null,this.coyoteTimer>0||!this.swingingLanternsRef||!this.swingingLanternsRef.length)return;let t=11.5;for(const e of this.swingingLanternsRef){const i=e.bobX??e.pivotX,n=e.bobY??e.pivotY-e.ropeLength,a=Math.hypot(i-this.aabb.x,n-this.aabb.y);a<t&&a>1.2&&(t=a,this.targetGrappleLantern={lantern:e,x:i,y:n})}}checkDashTrigger(){if(this.updateLanternGrappleTarget(),this.input.dashBuffered&&this.targetGrappleLantern){this.input.consumeDash();const t=this.targetGrappleLantern;return this.afterimages&&this.afterimages.spawn(this.aabb.x,this.aabb.y,this.facing),this.aabb.x=t.x,this.aabb.y=t.y+.6,this.velocity.x=this.facing*9.5,this.velocity.y=14.5,this.hasAirDash=!0,this.hasDoubleJump=!0,this.dashCooldownTimer=.15,this.inkSplash&&this.inkSplash.spawnParryBurst(t.x,t.y,!0),at.emit("lantern_grapple",{x:t.x,y:t.y}),this.fsm.changeState("JumpRise"),!0}return this.hasInkStepUnlocked&&this.input.dashBuffered&&this.dashCooldownTimer<=0&&this.hasAirDash?(this.input.consumeDash(),this.fsm.changeState("InkStep"),!0):!1}checkWallContact(){if(this.activeWallNormal!==0){if(this.activeWallNormal===-1&&this.input.axisX<0)return this.facing=1,this.fsm.changeState("WallRun"),!0;if(this.activeWallNormal===1&&this.input.axisX>0)return this.facing=-1,this.fsm.changeState("WallRun"),!0}return!1}executeWallJump(){this.input.consumeJump();const t=-this.activeWallNormal;this.facing=t,this.velocity.x=t*z.PLAYER.wallJumpImpulse.x,this.velocity.y=z.PLAYER.wallJumpImpulse.y,this.isJumpingRise=!0,this.activeWallNormal=0,this.fsm.changeState("JumpRise"),at.emit("player:walljump",{kickDir:t})}applyGroundMovement(t,e){const i=Math.abs(e)>.01?z.PLAYER.groundAccel:z.PLAYER.groundDecel,n=1-Math.exp(-i*t);this.velocity.x+=(e-this.velocity.x)*n}applyAirMovement(t){if(this.input.axisX!==0){const e=this.input.axisX*z.PLAYER.runSpeed,i=1-Math.exp(-45.5*t);this.velocity.x+=(e-this.velocity.x)*i}else{const e=1-Math.exp(-18*t);this.velocity.x+=(0-this.velocity.x)*e}}applyGravity(t){let e=this.velocity.y>0?z.PLAYER.gravityRising:z.PLAYER.gravityFalling;Math.abs(this.velocity.y)<z.PLAYER.apexHangVelocity&&(e*=z.PLAYER.apexGravityScale),this.velocity.y+=e*t,this.velocity.y<z.PLAYER.maxFallSpeed&&(this.velocity.y=z.PLAYER.maxFallSpeed)}fixedUpdate(t){this.dashCooldownTimer>0&&(this.dashCooldownTimer-=t),this.ledgeGrabCooldown>0&&(this.ledgeGrabCooldown-=t),this.invincibilityTimer>0&&(this.invincibilityTimer-=t);const e=this.input.axisY<0&&this.input.jumpBuffered;if(this.fsm.fixedUpdate(t),this.combat.fixedUpdate(t),!this.fsm.isInState("LedgeClimb")&&!this.fsm.isInState("LedgeHang")&&!this.fsm.isInState("Dead")){const a=this.collision.moveAndSlide(this.aabb,this.velocity,t,e);a.grounded?(this.coyoteTimer=z.PLAYER.coyoteTime,this.groundRef=a.groundSolid,this.hasAirDash=!0,!this.wasGroundedLastFrame&&Math.abs(this.velocity.y)>2&&(this.ripples.spawn(this.aabb.x,this.aabb.minY,0,Math.min(1.5,Math.abs(this.velocity.y)/12)),at.emit("player:land",{yVel:this.velocity.y})),this.wasGroundedLastFrame=!0):(this.coyoteTimer=Math.max(0,this.coyoteTimer-t),this.wasGroundedLastFrame=!1),a.runnableWall?a.wallLeft?this.activeWallNormal=-1:a.wallRight&&(this.activeWallNormal=1):this.activeWallNormal=0}const i=!this.fsm.isInState("WallRun")&&!this.fsm.isInState("WallSlide")&&!this.fsm.isInState("LedgeHang")&&!this.fsm.isInState("Attack")&&!this.fsm.isInState("Parry");this.input.axisX!==0&&i&&(this.facing=this.input.axisX>0?1:-1);const n=this.collision.checkTriggers(this.aabb,this);for(const a of n)a.type==="pit"&&this.takeDamage(1,0,!0)}takeDamage(t=1,e=0,i=!1){if(i){this.health=Math.max(0,this.health-t),this.health<=0?this.respawnAtCheckpoint():this.respawnAtCheckpoint(this.lastCheckpoint);return}this.combat.takeDamage(t,e)}setCheckpoint(t,e){this.lastCheckpoint={x:t,y:e}}respawnAtCheckpoint(t=this.lastCheckpoint){this.aabb.x=t.x,this.aabb.y=t.y,this.velocity.x=0,this.velocity.y=0,this.health=this.maxHealth,this.invincibilityTimer=1,this.fsm.changeState("Idle"),at.emit("player:respawn",{x:t.x,y:t.y})}render(t){this.meshGroup.position.x=this.aabb.x,this.meshGroup.position.y=this.aabb.y;const e=this.facing;this.meshGroup.scale.x+=(e-this.meshGroup.scale.x)*.35;const i=this.velocity.y,n=Ue.clamp(1+i*.015,.75,1.3),a=1/Math.sqrt(n);this.kuroModel.root.scale.set(a,n,1),this.kuroModel.update(1/60,this)}dispose(){this.meshGroup.clear(),this.scene.remove(this.meshGroup)}}class _i{constructor(t,e,i=16){this.createFn=t,this.resetFn=e,this.freeList=[],this.activeList=[];for(let n=0;n<i;n++)this.freeList.push(this.createFn())}obtain(...t){let e;return this.freeList.length>0?e=this.freeList.pop():e=this.createFn(),this.resetFn&&this.resetFn(e,...t),this.activeList.push(e),e}release(t){const e=this.activeList.indexOf(t);e!==-1&&(this.activeList.splice(e,1),this.freeList.push(t))}releaseAll(){for(;this.activeList.length>0;){const t=this.activeList.pop();this.freeList.push(t)}}update(t,e){for(let i=this.activeList.length-1;i>=0;i--){const n=this.activeList[i];e(n,t)||(this.activeList.splice(i,1),this.freeList.push(n))}}get activeCount(){return this.activeList.length}}class _0{constructor(t){this.scene=t,this.sharedGeometry=new Gt(z.PLAYER.width,z.PLAYER.height,.4),this.sharedMaterial=new Nt({color:new st(z.PALETTE.inkDark),transparent:!0,opacity:.6,depthWrite:!1}),this.pool=new _i(()=>{const e=new k(this.sharedGeometry,this.sharedMaterial.clone());return e.visible=!1,this.scene.add(e),{mesh:e,age:0,maxAge:z.PLAYER.afterimageLifetime,scale:1}},(e,i,n,a,r,o=1)=>{e.mesh.position.set(i,n,a),e.mesh.scale.set(1,o,1),e.mesh.material.opacity=.55,e.mesh.visible=!0,e.age=0,e.maxAge=z.PLAYER.afterimageLifetime},20)}spawn(t,e,i=0,n=1,a=1){return this.pool.obtain(t,e,i,n,a)}update(t){this.pool.update(t,(e,i)=>{e.age+=i;const n=e.age/e.maxAge;if(n>=1)return e.mesh.visible=!1,!1;const a=1-n;return e.mesh.material.opacity=a*.55,e.mesh.scale.x=1-n*.25,e.mesh.scale.y=1-n*.25,!0})}dispose(){this.pool.releaseAll(),this.sharedGeometry.dispose(),this.sharedMaterial.dispose()}}class y0{constructor(t){this.scene=t,this.sharedGeometry=new wi(.1,.45,24),this.sharedGeometry.rotateX(-Math.PI/2),this.sharedMaterial=new Nt({color:new st(z.PALETTE.inkDark),transparent:!0,opacity:.7,depthWrite:!1,side:se}),this.pool=new _i(()=>{const e=new k(this.sharedGeometry,this.sharedMaterial.clone());return e.visible=!1,this.scene.add(e),{mesh:e,age:0,maxAge:.6,baseScale:1}},(e,i,n,a=0,r=1)=>{e.mesh.position.set(i,n+.02,a),e.mesh.scale.set(r,r,r),e.mesh.material.opacity=.65,e.mesh.visible=!0,e.age=0,e.maxAge=.55,e.baseScale=r},16)}spawn(t,e,i=0,n=1){const a=Ue.lerp(.8,1.8,Math.min(1,n));return this.pool.obtain(t,e,i,a)}update(t){this.pool.update(t,(e,i)=>{e.age+=i;const n=e.age/e.maxAge;if(n>=1)return e.mesh.visible=!1,!1;const a=e.baseScale*(1+n*.8);return e.mesh.scale.set(a,a,a),e.mesh.material.opacity=(1-n)*.65,!0})}dispose(){this.pool.releaseAll(),this.sharedGeometry.dispose(),this.sharedMaterial.dispose()}}class b0{constructor(t){this.scene=t;const e=new Si(.12,8),i=new Nt({color:new st(z.PALETTE.inkDark),transparent:!0,opacity:.9,depthWrite:!1,side:se});this.dropletPool=new _i(()=>{const c=new k(e,i.clone());return c.visible=!1,this.scene.add(c),{mesh:c,vx:0,vy:0,vz:0,gravity:-20,drag:.96,life:0,maxLife:.4,initialScale:1,isVermilion:!1}},(c,u,f,d,g,x,p,m=.4,y=1,_=!1)=>{c.mesh.position.set(u,f,d),c.vx=g,c.vy=x,c.vz=p,c.life=0,c.maxLife=m,c.initialScale=y,c.isVermilion=_,c.mesh.material.color.set(_?z.PALETTE.vermilion:z.PALETTE.inkDark),c.mesh.material.opacity=_?.95:.88,c.mesh.scale.set(y,y,y),c.mesh.visible=!0},96);const n=this.createTaperedCalligraphyRibbonGeo(1.35,.42,24),a=new Nt({color:new st(z.PALETTE.inkDark),transparent:!0,opacity:.92,depthWrite:!1,side:se});this.slashPool=new _i(()=>{const c=new k(n,a.clone());return c.visible=!1,this.scene.add(c),{mesh:c,life:0,maxLife:.16,initialScale:1}},(c,u,f,d,g,x=1,p=!1)=>{c.mesh.position.set(u,f,d+.08),c.mesh.rotation.z=g,c.mesh.scale.set(x,x,1),c.mesh.material.color.set(p?z.PALETTE.vermilion:z.PALETTE.inkDark),c.mesh.material.opacity=.94,c.mesh.visible=!0,c.life=0,c.maxLife=.16,c.initialScale=x},16);const r=new wi(.1,.35,28),o=new Nt({color:new st(z.PALETTE.vermilion),transparent:!0,opacity:.95,depthWrite:!1,side:se});this.ringPool=new _i(()=>{const c=new k(r,o.clone());return c.visible=!1,this.scene.add(c),{mesh:c,life:0,maxLife:.28,startRadius:.5,endRadius:2.4}},(c,u,f,d,g=.28,x=2.2,p=z.PALETTE.vermilion)=>{c.mesh.position.set(u,f,d+.1),c.mesh.scale.set(.2,.2,1),c.mesh.material.color.set(p),c.mesh.material.opacity=.95,c.mesh.visible=!0,c.life=0,c.maxLife=g,c.endRadius=x},12);const h=new Si(.75,14);h.scale(1.8,.32,1);const l=new Nt({color:1315859,transparent:!0,opacity:.78,depthWrite:!1,side:se});this.decalPool=new _i(()=>{const c=new k(h,l.clone());return c.visible=!1,this.scene.add(c),{mesh:c,life:0,maxLife:6.5}},(c,u,f,d=1,g=!1)=>{c.mesh.position.set(u,f,.55),c.mesh.scale.set(d,d,1),c.mesh.material.color.set(g?z.PALETTE.vermilion:1315859),c.mesh.material.opacity=.78,c.mesh.visible=!0,c.life=0,c.maxLife=6.5},24)}createTaperedCalligraphyRibbonGeo(t=1.35,e=.42,i=24){const n=new fe,a=new Float32Array((i+1)*2*3),r=[],o=Math.PI*.85;for(let h=0;h<=i;h++){const l=h/i,c=-o*.5+l*o,u=Math.sin(l*Math.PI)*(1-.3*l),f=e*u*.5,d=t-f,g=t+f,x=Math.cos(c),p=Math.sin(c),m=h*6;if(a[m+0]=x*d,a[m+1]=p*d,a[m+2]=0,a[m+3]=x*g,a[m+4]=p*g,a[m+5]=0,h<i){const y=h*2,_=h*2+1,b=(h+1)*2,P=(h+1)*2+1;r.push(y,_,b,_,P,b)}}return n.setAttribute("position",new Ce(a,3)),n.setIndex(r),n}spawnSlashArc(t,e,i=1,n=0,a=!1){let r=i>0?-.35:Math.PI-.35,o=1;n===1?(r=i>0?.42:Math.PI+.42,o=1.18):n===2&&(r=i>0?-.15:Math.PI-.15,o=1.48,this.slashPool.obtain(t+i*.48,e,.08,r,o*.88,!0)),a&&(r=i>0?-.82:Math.PI-.82,o=1.25),this.slashPool.obtain(t+i*.45,e,.05,r,o,!1)}spawnGroundDecal(t,e,i=1,n=!1){this.decalPool.obtain(t,e,i,n)}spawnHitImpact(t,e,i=1,n=8,a=!1,r=!1){const o=n,h=a?14:9;for(let l=0;l<o;l++){const c=(i>0?0:Math.PI)+(Math.random()-.5)*1.5,u=h*(.5+Math.random()*.8),f=Math.cos(c)*u,d=Math.sin(c)*u+3,g=(Math.random()-.5)*2,x=.25+Math.random()*.25,p=(a?1.4:1)*(.6+Math.random()*.8);this.dropletPool.obtain(t,e,.02,f,d,g,x,p,r)}a&&this.spawnGroundDecal(t,e-.6,1.15,r)}spawnParryBurst(t,e,i=!0){this.ringPool.obtain(t,e,.1,.25,i?2.6:1.5,z.PALETTE.vermilion);const n=i?18:8;for(let a=0;a<n;a++){const r=Math.random()*Math.PI*2,o=12+Math.random()*8,h=Math.cos(r)*o,l=Math.sin(r)*o;this.dropletPool.obtain(t,e,.05,h,l,0,.2+Math.random()*.15,.8,!0)}for(let a=0;a<10;a++){const r=Math.random()*Math.PI*2,o=6+Math.random()*6,h=Math.cos(r)*o,l=Math.sin(r)*o;this.dropletPool.obtain(t,e,.02,h,l,0,.3+Math.random()*.2,1,!1)}}spawnBackstabBurst(t,e){this.ringPool.obtain(t,e,.1,.35,3,z.PALETTE.vermilion),this.spawnGroundDecal(t,e-.8,1.4,!0);for(let i=0;i<30;i++){const n=(Math.random()-.5)*8,a=12+Math.random()*12,r=.4+Math.random()*.3,o=.8+Math.random()*1;this.dropletPool.obtain(t,e,.05,n,a,0,r,o,i%3===0)}}spawnDeathDissolve(t,e,i=1,n=2){this.spawnGroundDecal(t,e-n*.45,1.3,!1);const a=35;for(let r=0;r<a;r++){const o=t+(Math.random()-.5)*i,h=e+(Math.random()-.5)*n,l=(Math.random()-.5)*5,c=(Math.random()-.2)*6,u=.5+Math.random()*.4,f=1+Math.random()*1.5;this.dropletPool.obtain(o,h,.02,l,c,0,u,f,!1)}}update(t){this.dropletPool.update(t,(e,i)=>{if(e.life+=i,e.life>=e.maxLife)return e.mesh.visible=!1,!1;e.vy+=e.gravity*i,e.vx*=e.drag,e.vy*=e.drag,e.mesh.position.x+=e.vx*i,e.mesh.position.y+=e.vy*i,e.mesh.position.z+=e.vz*i;const n=e.life/e.maxLife,a=1-n;e.mesh.material.opacity=a*(e.isVermilion?.95:.85);const r=e.initialScale*(1-n*.5);return e.mesh.scale.set(r,r,1),!0}),this.slashPool.update(t,(e,i)=>{if(e.life+=i,e.life>=e.maxLife)return e.mesh.visible=!1,!1;const n=e.life/e.maxLife;e.mesh.material.opacity=(1-n)*.92;const a=e.initialScale*(1+n*.28);return e.mesh.scale.set(a,a,1),!0}),this.ringPool.update(t,(e,i)=>{if(e.life+=i,e.life>=e.maxLife)return e.mesh.visible=!1,!1;const n=e.life/e.maxLife;e.mesh.material.opacity=(1-n)*.95;const a=Ue.lerp(.2,e.endRadius,n);return e.mesh.scale.set(a,a,1),!0}),this.decalPool.update(t,(e,i)=>{if(e.life+=i,e.life>=e.maxLife)return e.mesh.visible=!1,!1;const n=e.life/e.maxLife;return e.mesh.material.opacity=(1-n*n)*.78,!0})}}class M0{constructor(t){this.scene=t,this.dropCount=350,this.active=!1,this.lightningTimer=0,this.lightningFlash=0;const e=new fe,i=new Float32Array(this.dropCount*6);this.drops=[];for(let a=0;a<this.dropCount;a++){const r=(Math.random()-.5)*60,o=(Math.random()-.5)*35,h=(Math.random()-.5)*10,l=32+Math.random()*16,c=1.2+Math.random()*.8;this.drops.push({x:r,y:o,z:h,speed:l,length:c}),i[a*6+0]=r,i[a*6+1]=o,i[a*6+2]=h,i[a*6+3]=r-.3,i[a*6+4]=o-c,i[a*6+5]=h}e.setAttribute("position",new Ce(i,3));const n=new Nn({color:new st(z.PALETTE.inkMid),transparent:!0,opacity:.45,depthWrite:!1});this.lineSegments=new cc(e,n),this.lineSegments.visible=!1,this.scene.add(this.lineSegments)}update(t,e,i){if(this.active=e>=105&&e<=232,this.lineSegments.visible=this.active,!this.active)return;this.lineSegments.position.set(e,i,0);const n=this.lineSegments.geometry.attributes.position.array;for(let a=0;a<this.dropCount;a++){const r=this.drops[a];r.y-=r.speed*t,r.x-=r.speed*.25*t,r.y<-18&&(r.y=18,r.x=(Math.random()-.5)*60),n[a*6+0]=r.x,n[a*6+1]=r.y,n[a*6+2]=r.z,n[a*6+3]=r.x-.3,n[a*6+4]=r.y-r.length,n[a*6+5]=r.z}this.lineSegments.geometry.attributes.position.needsUpdate=!0,this.lightningTimer-=t,this.lightningTimer<=0&&(this.lightningTimer=6+Math.random()*8,this.triggerLightning()),this.lightningFlash>0&&(this.lightningFlash-=t)}triggerLightning(){this.lightningFlash=.12,at.emit("lightning_flash"),at.emit("camera_shake",{amount:.3})}dispose(){this.scene.remove(this.lineSegments),this.lineSegments.geometry.dispose(),this.lineSegments.material.dispose()}}class S0{constructor(t){this.scene=t,this.petalCount=65;const e=new si(.18,.28),i=new Nt({color:new st(z.PALETTE.inkDark),side:se,transparent:!0,opacity:.75,depthWrite:!1});this.group=new St,this.petals=[];for(let n=0;n<this.petalCount;n++){const a=new k(e,i.clone()),r={mesh:a,x:(Math.random()-.5)*50,y:Math.random()*25,z:(Math.random()-.5)*6,vx:1.5+Math.random()*2,vy:-1-Math.random()*1.5,rotSpeed:(Math.random()-.5)*4,swayPhase:Math.random()*Math.PI*2};a.position.set(r.x,r.y,r.z),this.group.add(a),this.petals.push(r)}this.scene.add(this.group)}update(t,e,i){this.group.position.set(e,i,0);for(let n=0;n<this.petalCount;n++){const a=this.petals[n];a.swayPhase+=t*3,a.x+=(a.vx+Math.sin(a.swayPhase)*1.5)*t,a.y+=a.vy*t,a.mesh.rotation.z+=a.rotSpeed*t,a.mesh.rotation.y+=a.rotSpeed*.7*t,a.y<-15&&(a.y=15,a.x=(Math.random()-.5)*50),a.x>28&&(a.x=-28),a.mesh.position.set(a.x,a.y,a.z)}}dispose(){this.group.clear(),this.scene.remove(this.group)}}class w0{constructor(t){this.scene=t,this.layers=[],this.mistClouds=[];const e=new st(z.PALETTE.parchment);[{depth:-92,factor:.05,litColor:"#b5b0a3",shadowColor:"#7d7970",ridgeColor:"#5e5b54",peaks:14,amp:26,baseY:-3,seed:17},{depth:-64,factor:.1,litColor:"#999488",shadowColor:"#59564f",ridgeColor:"#3d3b36",peaks:18,amp:21,baseY:-5,seed:31},{depth:-38,factor:.16,litColor:"#7a766c",shadowColor:"#383631",ridgeColor:"#22211e",peaks:22,amp:16,baseY:-6,seed:53},{depth:-20,factor:.24,litColor:"#5c5951",shadowColor:"#21201d",ridgeColor:"#141413",peaks:26,amp:11,baseY:-7,seed:79}].forEach(n=>{const a=this.build3DFacetedMountainRange(n,e);a.position.set(150,n.baseY,n.depth),this.scene.add(a),this.layers.push({mesh:a,baseX:150,baseY:n.baseY,factor:n.factor})}),this.buildDriftingMistClouds()}seededRandom(t){let e=t;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}ridgeHeight(t,e,i,n,a){const r=Math.pow(1-Math.abs(Math.sin(t*Math.PI*e+n)),1.35)*i,o=Math.pow(1-Math.abs(Math.sin(t*Math.PI*e*2.17+n*1.7)),1.5)*(i*.45),h=Math.sin(t*Math.PI*e*.5+n*.4)*(i*.35),l=Math.cos(t*Math.PI*e*5.3+n*2.3)*(i*.12),c=(a()-.5)*(i*.05);return Math.max(1.5,3+r+o+h+l+c)}build3DFacetedMountainRange(t,e){const i=new St,n=this.seededRandom(t.seed),a=480,r=480,o=-26,h=new st(t.litColor),l=new st(t.shadowColor),c=new st(t.ridgeColor),u=[];for(let b=0;b<=r;b++){const P=b/r,E=-240+P*a,T=this.ridgeHeight(P,t.peaks,t.amp,t.seed,n);u.push({x:E,y:T})}const f=[],d=[],g=[],x=[];for(let b=0;b<r;b++){const P=u[b],E=u[b+1];g.push(new C(P.x,P.y,.08));const T=E.y-P.y,R=T>=0,N=Ue.clamp(Math.abs(T)/1.2,.15,1),v=R?h.clone().lerp(e,.18*N):l.clone().lerp(c,.45*N),S=v.clone(),F=(P.x+E.x)*.5+(T>=0?-.35:.35),O=(P.y+E.y)*.5-t.amp*.55,W=v.clone().lerp(e,.52);f.push(P.x,P.y,0,F,O,.25,E.x,E.y,0),d.push(v.r,v.g,v.b,W.r,W.g,W.b,S.r,S.g,S.b);const K=P.x,V=E.x;f.push(P.x,P.y,0,K,o,0,F,O,.25,F,O,.25,K,o,0,V,o,0,F,O,.25,V,o,0,E.x,E.y,0),d.push(v.r,v.g,v.b,e.r,e.g,e.b,W.r,W.g,W.b,W.r,W.g,W.b,e.r,e.g,e.b,e.r,e.g,e.b,W.r,W.g,W.b,e.r,e.g,e.b,S.r,S.g,S.b),b>1&&b<r-1&&P.y>u[b-1].y&&P.y>E.y&&x.push(new C(P.x,P.y,.12),new C(F+(n()-.5)*1.8,O+1.5,.28))}const p=new fe;p.setAttribute("position",new Jt(f,3)),p.setAttribute("color",new Jt(d,3));const m=new Nt({vertexColors:!0,side:se,depthWrite:!1,fog:!1});i.add(new k(p,m));const y=new fe().setFromPoints(g),_=new Nn({color:c,fog:!1});if(i.add(new ca(y,_)),x.length>0){const b=new fe().setFromPoints(x),P=new Nn({color:c,transparent:!0,opacity:.55,fog:!1});i.add(new cc(b,P))}return i}buildDriftingMistClouds(){if(typeof document>"u")return;const t=document.createElement("canvas");t.width=256,t.height=128;const e=t.getContext("2d"),i=e.createRadialGradient(128,64,10,128,64,115);i.addColorStop(0,"rgba(234, 229, 217, 0.82)"),i.addColorStop(.55,"rgba(234, 229, 217, 0.42)"),i.addColorStop(1,"rgba(234, 229, 217, 0.0)"),e.fillStyle=i,e.fillRect(0,0,256,128);const n=new ea(t),a=new Nt({map:n,transparent:!0,depthWrite:!1,fog:!1}),r=new si(42,14);for(let o=0;o<18;o++){const h=new k(r,a),l=-15-o%4*18,c=-20+o*22,u=2+o%5*9;h.position.set(c,u,l),this.scene.add(h),this.mistClouds.push({mesh:h,baseX:c,baseY:u,speed:.6+o%3*.4,phase:o*1.1})}}update(t,e){const i=performance.now()*.001;for(let n=0;n<this.layers.length;n++){const a=this.layers[n];a.mesh.position.x=t-(t-150)*a.factor,a.mesh.position.y=e+a.baseY-(e-12)*(a.factor*.25)}for(let n=0;n<this.mistClouds.length;n++){const a=this.mistClouds[n],r=Math.sin(i*.25+a.phase)*6;a.mesh.position.x=a.baseX+r+(t-150)*.15}}dispose(){this.layers.forEach(t=>this.scene.remove(t.mesh)),this.mistClouds.forEach(t=>this.scene.remove(t.mesh))}}class T0{constructor(t,e,i){this.renderer=t,this.scene=e,this.camera=i,this.enabled=!0,this.overlayCanvas=document.createElement("canvas"),this.overlayCanvas.id="post-fx-overlay",this.overlayCanvas.style.position="absolute",this.overlayCanvas.style.top="0",this.overlayCanvas.style.left="0",this.overlayCanvas.style.width="100%",this.overlayCanvas.style.height="100%",this.overlayCanvas.style.pointerEvents="none",this.overlayCanvas.style.zIndex="5",this.overlayCanvas.style.mixBlendMode="multiply",(document.getElementById("game-container")||document.body).appendChild(this.overlayCanvas),this.ctx=this.overlayCanvas.getContext("2d"),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){const t=window.innerWidth,e=window.innerHeight;this.overlayCanvas.width=t,this.overlayCanvas.height=e,this.renderOverlay(t,e)}renderOverlay(t,e){if(!this.ctx)return;this.ctx.clearRect(0,0,t,e),this.ctx.fillStyle="#eae5d9",this.ctx.fillRect(0,0,t,e),this.ctx.fillStyle="#141413";for(let a=0;a<240;a++){const r=Math.random()*t,o=Math.random()*e,h=4+Math.random()*12,l=Math.random()*Math.PI;this.ctx.save(),this.ctx.translate(r,o),this.ctx.rotate(l),this.ctx.globalAlpha=.04+Math.random()*.05,this.ctx.fillRect(0,0,h,.8),this.ctx.restore()}const i=Math.hypot(t,e)*.55,n=this.ctx.createRadialGradient(t*.5,e*.5,i*.45,t*.5,e*.5,i);n.addColorStop(0,"rgba(234, 229, 217, 0.0)"),n.addColorStop(.7,"rgba(92, 91, 87, 0.12)"),n.addColorStop(1,"rgba(20, 20, 19, 0.35)"),this.ctx.fillStyle=n,this.ctx.fillRect(0,0,t,e)}flashLightning(){if(!this.ctx)return;const t=this.overlayCanvas.width,e=this.overlayCanvas.height;this.ctx.save(),this.ctx.fillStyle="rgba(255, 255, 255, 0.85)",this.ctx.fillRect(0,0,t,e),this.ctx.restore(),setTimeout(()=>{this.renderOverlay(t,e)},70)}dispose(){this.overlayCanvas&&this.overlayCanvas.parentNode&&this.overlayCanvas.parentNode.removeChild(this.overlayCanvas)}}const ia={fogPitY:-12,spawn:{x:0,y:1.5},act1:{solids:[{x:4,y:-.5,w:16,h:1,color:6052695},{x:15,y:1.5,w:5,h:.8,color:7236708},{x:22,y:3.5,w:4,h:.8,color:7236708},{x:28,y:5.5,w:4,h:.8,color:7236708},{x:35,y:7,w:3,h:.8,color:8026224,crumbling:!0},{x:40,y:8.5,w:3,h:.8,color:8026224,crumbling:!0},{x:49,y:11,w:7,h:1.2,color:6052695},{x:57,y:12,w:8,h:1,color:6052695},{x:74,y:12.5,w:8,h:1,color:6052695},{x:89,y:13,w:22,h:1.2,color:5394506},{x:104,y:14.5,w:8,h:1,color:6052695}],oneWays:[{x:85,y:16.5,w:5,h:.3},{x:93,y:17.5,w:6,h:.3}],shrine:{x:57,y:12.5},checkpoints:[{id:1,x:74,y:13}],enemies:[{type:"ashigaru",x:86,y:14.5,facing:1,isStationary:!0},{type:"ashigaru",x:96,y:14.5,facing:-1,patrolMinX:92,patrolMaxX:101}]},act2:{solids:[{x:112,y:15,w:6,h:1,color:4736576},{x:128,y:12,w:32,h:1.5,color:4011310},{x:151,y:25,w:2,h:14,color:1315859,runnable:!0},{x:157,y:27,w:2,h:14,color:1315859,runnable:!0},{x:163,y:32,w:6,h:1,color:6052695},{x:196,y:34,w:6,h:1,color:6052695},{x:206,y:38,w:6,h:1,color:6052695},{x:216,y:42.5,w:6,h:1,color:6052695},{x:226,y:46.5,w:8,h:1,color:6052695}],bambooStalks:[{x:118,y:12.5,height:6.5},{x:126,y:12.5,height:7.5},{x:134,y:12.5,height:8.5},{x:142,y:12.5,height:9.5}],suspensionBridge:{startX:166,startY:32,totalWidth:26,gapWidth:6.5},swingingLanterns:[{pivotX:179,pivotY:41,ropeLength:6.5},{pivotX:201,pivotY:46,ropeLength:5.5}],checkpoints:[{id:2,x:163,y:32.5},{id:3,x:226,y:47}],enemies:[{type:"tengu",x:179,y:36.5},{type:"tengu",x:206,y:42},{type:"tengu",x:218,y:46}]},act3:{solids:[{x:234,y:47.5,w:6,h:.8,color:6052695},{x:260,y:48,w:36,h:2,color:4012597},{x:241,y:55,w:1,h:14,color:0,invisible:!0},{x:279,y:55,w:1,h:14,color:0,invisible:!0}],checkpoints:[{id:4,x:243,y:49}],toriiGate:{x:260,y:49},scroll:{x:274,y:53}}};class E0{constructor({scene:t,collision:e,x:i=0,y:n=0,height:a=7,width:r=.6}){this.scene=t,this.collision=e,this.baseX=i,this.baseY=n,this.height=a,this.width=r,this.deflection=0,this.velocity=0,this.angularStiffness=55,this.damping=.88,this.maxDeflection=1.6,this.playerOnTop=!1,this.topAABB=new _e(this.baseX,this.baseY+this.height,1.2,.4),this.solidRef=this.collision.addOneWay(this.topAABB),this.solidRef.isBamboo=!0,this.solidRef.stalk=this,this.group=new St,this.group.position.set(this.baseX,this.baseY,0),this.segmentCount=6,this.segments=[];const o=this.height/this.segmentCount,h=new Se({color:4737853,roughness:.7,metalness:.1}),l=new Se({color:new st(z.PALETTE.inkDark),roughness:.9});let c=this.group;for(let u=0;u<this.segmentCount;u++){const f=new St;u>0&&(f.position.y=o);const d=Ue.lerp(.18,.1,u/this.segmentCount),g=new Et(d*.9,d,o,8);g.translate(0,o*.5,0);const x=new k(g,h);x.castShadow=!0,f.add(x);const p=new Gn(d*1.05,.03,6,12);p.rotateX(Math.PI/2);const m=new k(p,l);f.add(m),c.add(f),this.segments.push(f),c=f}this.scene.add(this.group)}fixedUpdate(t,e){if(e&&e.groundRef===this.solidRef){this.playerOnTop=!0;const h=e.facing*.8+e.input.axisX*.5,l=Ue.clamp(h,-this.maxDeflection,this.maxDeflection);if(this.velocity+=(l-this.deflection)*40*t,this.deflection+=this.velocity*t,this.velocity*=Math.pow(this.damping,t*60),e.input.jumpBuffered&&this.deflection!==0){const u=1+Math.abs(this.deflection)/this.maxDeflection*.5;e.velocity.y=z.PLAYER.jumpVelocity*u,e.velocity.x+=-Math.sign(this.deflection)*4,this.velocity=-Math.sign(this.deflection)*18,at.emit("bamboo_launch",{multiplier:u})}}else{this.playerOnTop=!1;const h=-this.angularStiffness*this.deflection;this.velocity+=h*t,this.deflection+=this.velocity*t,this.velocity*=Math.pow(this.damping,t*60)}this.deflection=Ue.clamp(this.deflection,-this.maxDeflection,this.maxDeflection);const n=this.deflection/this.height,a=this.baseX+Math.sin(n)*this.height,r=this.baseY+Math.cos(n)*this.height;this.topAABB.x=a,this.topAABB.y=r;const o=n/this.segmentCount;for(let h=0;h<this.segments.length;h++)this.segments[h].rotation.z=-o}dispose(){this.collision.removeSolid(this.solidRef),this.group.clear(),this.scene.remove(this.group)}}class Qa{constructor({scene:t,collision:e,pivotX:i=0,pivotY:n=12,ropeLength:a=5}){this.scene=t,this.collision=e,this.pivotX=i,this.pivotY=n,this.ropeLength=a,this.angle=.25,this.angularVelocity=0,this.gravity=9.8,this.damping=.994,this.maxAngle=.65,this.grabbedPlayer=null,this.grabCooldown=0,this.grabRadius=1.2,this.lanternPos={x:i,y:n-a},this.group=new St,this.group.position.set(i,n,0);const r=new Nn({color:4011310,linewidth:2}),o=new fe().setFromPoints([new C(0,0,0),new C(0,-a,0)]);this.ropeLine=new ca(o,r),this.group.add(this.ropeLine),this.lanternMesh=new St,this.lanternMesh.position.set(0,-a,0);const h=new Et(.35,.45,.8,6),l=new Se({color:new st(z.PALETTE.inkDark),roughness:.8}),c=new k(h,l);this.lanternMesh.add(c);const u=new Et(.25,.32,.6,6),f=new Nt({color:new st(z.PALETTE.vermilion)}),d=new k(u,f);this.lanternMesh.add(d),this.pointLight=new ua(12069167,1.8,8,1.5),this.lanternMesh.add(this.pointLight);const g=new Et(.04,.04,.8,6);g.rotateZ(Math.PI/2);const x=new Se({color:2236962}),p=new k(g,x);p.position.y=.45,this.lanternMesh.add(p),this.group.add(this.lanternMesh),this.scene.add(this.group)}fixedUpdate(t,e){this.grabCooldown>0&&(this.grabCooldown-=t);const i=-(this.gravity/this.ropeLength)*Math.sin(this.angle);this.angularVelocity+=i*t;const n=Math.sin(performance.now()*.0015)*.4;this.angularVelocity+=n*t,this.angle+=this.angularVelocity*t,this.angularVelocity*=Math.pow(this.damping,t*60),this.group.rotation.z=this.angle;const a=this.pivotX+Math.sin(this.angle)*this.ropeLength,r=this.pivotY-Math.cos(this.angle)*this.ropeLength;if(this.lanternPos.x=a,this.lanternPos.y=r,e&&!e.fsm.isInState("Dead")){if(this.grabbedPlayer)e.aabb.x=a,e.aabb.y=r-e.aabb.height*.4,e.velocity.x=this.angularVelocity*this.ropeLength*Math.cos(this.angle),e.velocity.y=this.angularVelocity*this.ropeLength*Math.sin(this.angle),e.input.jumpBuffered&&(e.input.consumeJump(),this.releasePlayer(e));else if(this.grabCooldown<=0){const o=e.aabb.x-a,h=e.aabb.y-r;Math.hypot(o,h)<=this.grabRadius&&!e.wasGroundedLastFrame&&e.velocity.y<2&&this.grabPlayer(e)}}}grabPlayer(t){this.grabbedPlayer=t,t.hasAirDash=!0,t.fsm.changeState("LedgeHang",{side:"lantern",x:this.lanternPos.x,y:this.lanternPos.y}),at.emit("lantern_grabbed",{x:this.lanternPos.x,y:this.lanternPos.y})}releasePlayer(t){const e=this.angularVelocity*this.ropeLength,i=Math.cos(this.angle)*e+t.facing*5,n=Math.max(8,z.PLAYER.jumpVelocity*.9);t.velocity.x=i,t.velocity.y=n,t.fsm.changeState("JumpRise"),this.grabbedPlayer=null,this.grabCooldown=.5,this.angularVelocity-=Math.sign(i)*.6,at.emit("lantern_released")}dispose(){this.group.clear(),this.scene.remove(this.group)}}class A0{constructor({scene:t,collision:e,startX:i=145,startY:n=32,totalWidth:a=26,gapWidth:r=6}){this.scene=t,this.collision=e,this.startX=i,this.startY=n,this.totalWidth=a,this.gapWidth=r,this.group=new St,this.group.position.set(i,n,0);const o=(a-r)*.5,h=new _e(i+o*.5,n,o,.4);this.leftSolid=this.collision.addOneWay(h);const l=i+o+r,c=new _e(l+o*.5,n+1.2,o,.4);this.rightSolid=this.collision.addOneWay(c);const u=new Se({color:5918017,roughness:.9}),f=new Se({color:4011310,roughness:.95}),d=7;for(let y=0;y<d;y++){const _=y/(d-1),b=_*o,P=-Math.sin(_*Math.PI)*.6,E=new Gt(.8,.15,2.2),T=new k(E,u);T.position.set(b,P,0),T.rotation.z=Math.cos(_*Math.PI)*-.12,T.castShadow=!0,this.group.add(T)}for(let y=0;y<d;y++){const _=y/(d-1),b=o+r+_*o,P=1.2-Math.sin(_*Math.PI)*.6,E=new Gt(.8,.15,2.2),T=new k(E,u);T.position.set(b,P,0),T.rotation.z=Math.cos(_*Math.PI)*-.12,T.castShadow=!0,this.group.add(T)}const g=new Et(.04,.02,3.5,6);g.translate(0,-1.75,0);const x=new k(g,f);x.position.set(o,-.4,.9),x.rotation.z=.2,this.group.add(x);const p=new Et(.04,.02,4,6);p.translate(0,-2,0);const m=new k(p,f);m.position.set(o+r,.8,-.9),m.rotation.z=-.25,this.group.add(m),this.scene.add(this.group)}dispose(){this.collision.removeSolid(this.leftSolid),this.collision.removeSolid(this.rightSolid),this.group.clear(),this.scene.remove(this.group)}}class C0{constructor({scene:t,collision:e,inkSplash:i,x:n=55,y:a=10}){this.scene=t,this.collision=e,this.inkSplash=i,this.x=n,this.y=a,this.isUnlocked=!1,this.aabb=new _e(n,a+1.2,2.4,2.6),this.triggerRef=this.collision.addTrigger(this.aabb,d=>{this.activate(d)},{type:"shrine"}),this.group=new St,this.group.position.set(n,a,0);const r=new Gt(2,.8,1.8),o=new Se({color:new st(z.PALETTE.inkMid),roughness:.85}),h=new k(r,o);h.position.y=.4,h.castShadow=!0,this.group.add(h);const l=new pe(1.6,.7,4);l.rotateY(Math.PI/4);const c=new Se({color:new st(z.PALETTE.inkDark),roughness:.7}),u=new k(l,c);u.position.y=2.2,u.castShadow=!0,this.group.add(u);const f=new Gt(.6,.9,.1);this.sealMat=new Nt({color:new st(z.PALETTE.vermilion)}),this.sealMesh=new k(f,this.sealMat),this.sealMesh.position.set(0,1.3,.4),this.group.add(this.sealMesh),this.light=new ua(12069167,1.5,6),this.light.position.set(0,1.4,.6),this.group.add(this.light),this.scene.add(this.group)}activate(t){this.isUnlocked||(this.isUnlocked=!0,t.hasInkStepUnlocked=!0,this.inkSplash&&(this.inkSplash.spawnParryBurst(this.x,this.y+1.4,!0),this.inkSplash.spawnHitImpact(this.x,this.y+1.4,1,16,!0,!0)),at.emit("shrine_unlocked",{title:"Ink Step Unlocked",description:"Press Shift or K to dash through the air. Grants invincibility and clears wide gaps."}),at.emit("camera_shake",{amount:.3}))}fixedUpdate(t){if(this.isUnlocked)this.light.intensity=.5;else{const e=1+Math.sin(performance.now()*.005)*.4;this.light.intensity=1.5*e}}dispose(){this.collision.removeTrigger(this.triggerRef),this.group.clear(),this.scene.remove(this.group)}}const tr="KURO_KIRI_SAVE_V1";class R0{static getInitialData(){return{checkpoint:{x:5,y:1},hasInkStep:!1,deaths:0,parries:0,startTime:Date.now(),levelTime:0,volumeMaster:.8,volumeMusic:.65,volumeSFX:.85,quality:"high"}}static _memSave=null;static load(){try{if(typeof localStorage<"u"){const t=localStorage.getItem(tr);if(t)return{...this.getInitialData(),...JSON.parse(t)}}}catch(t){console.warn("SaveSystem: localStorage unavailable, using in-memory save",t)}return this._memSave||this.getInitialData()}static save(t){try{return this._memSave={...t},typeof localStorage<"u"&&localStorage.setItem(tr,JSON.stringify(t)),!0}catch(e){return console.warn("SaveSystem: failed to write to localStorage",e),!1}}static saveCheckpoint(t,e){const i=this.load();i.checkpoint=e,i.lastCheckpointId=t,this.save(i)}static reset(){this._memSave=null;try{typeof localStorage<"u"&&localStorage.removeItem(tr)}catch{}return this.getInitialData()}}const na=R0;class er{constructor({scene:t,collision:e,inkSplash:i,x:n=0,y:a=0,id:r=1}){this.scene=t,this.collision=e,this.inkSplash=i,this.x=n,this.y=a,this.id=r,this.isLit=!1,this.aabb=new _e(n,a+1.2,2.2,2.4),this.triggerRef=this.collision.addTrigger(this.aabb,v=>{this.activate(v)},{type:"checkpoint"}),this.group=new St,this.group.position.set(n,a,-.4);const o=we({inkDark:1710359,inkMid:6052695,inkLight:10262670,noiseScale:2.5}),h=new St;h.position.set(-.55,0,.25);const l=new Et(.38,.46,.28,8),c=new k(l,o);c.position.y=.14,Q(c,.024),h.add(c);const u=new Et(.24,.32,.82,10),f=new k(u,o);f.position.y=.65,Q(f,.025),h.add(f);const d=new Ye(.22,10,10),g=new k(d,o);g.position.y=1.22,Q(g,.025),h.add(g);const x=new pe(.29,.36,8,1,!0);this.bibMat=new Nt({color:8004648,side:se});const p=new k(x,this.bibMat);p.position.y=.96,Q(p,.02),h.add(p),this.group.add(h);const m=new Et(.45,.65,.38,6),y=new k(m,o);y.position.set(.35,.19,0),Q(y,.025),this.group.add(y);const _=new Et(.22,.28,1.15,6),b=new k(_,o);b.position.set(.35,.95,0),Q(b,.025),this.group.add(b);const P=new Gt(.75,.65,.75),E=new k(P,o);E.position.set(.35,1.75,0),Q(E,.025),this.group.add(E);const T=new pe(.88,.48,6),R=new k(T,o);R.position.set(.35,2.35,0),Q(R,.028),this.group.add(R);const N=new Ye(.2,8,8);this.flameMat=new Nt({color:new st(z.PALETTE.inkDark),transparent:!0,opacity:.4}),this.flame=new k(N,this.flameMat),this.flame.position.set(.35,1.75,0),this.group.add(this.flame),this.pointLight=new ua(12069167,0,8,1.5),this.pointLight.position.set(.35,1.75,0),this.group.add(this.pointLight),this.scene.add(this.group)}activate(t){this.isLit||(this.isLit=!0,this.flameMat.color.setHex(12069167),this.flameMat.opacity=1,this.bibMat.color.setHex(12069167),this.pointLight.intensity=2,t.health=z.COMBAT.maxHealth,t.setCheckpoint(this.x,this.y+.5),na.saveCheckpoint(this.id,{x:this.x,y:this.y+.5}),this.inkSplash&&this.inkSplash.spawnParryBurst(this.x,this.y+1.5,!1),at.emit("checkpoint_activated",{id:this.id,x:this.x,y:this.y}))}fixedUpdate(t){if(this.isLit){const e=1.8+Math.sin(performance.now()*.008)*.4;this.pointLight.intensity=e;const i=1+Math.sin(performance.now()*.012)*.15;this.flame.scale.set(i,i*1.2,i)}}dispose(){this.collision.removeTrigger(this.triggerRef),this.group.clear(),this.scene.remove(this.group)}}class P0{constructor({scene:t,collision:e,inkSplash:i,x:n=0,y:a=0,facing:r=-1,patrolMinX:o=-5,patrolMaxX:h=5,isStationary:l=!1}){this.scene=t,this.collision=e,this.inkSplash=i;const c=z.ENEMIES.ashigaru;this.aabb=new _e(n,a,c.width,c.height),this.velocity={x:0,y:0},this.facing=r,this.patrolMinX=o,this.patrolMaxX=h,this.isStationary=l,this.maxHp=c.hp,this.hp=this.maxHp,this.isDead=!1,this.isStaggered=!1,this.isAirborne=!1,this.stateTimer=0,this.staggerTimer=0,this.patrolPauseTimer=0,this.flashTimer=0,this.hurtbox=new Le({owner:this,type:"enemy_hurtbox",width:c.width*.9,height:c.height*.95,offsetX:0,offsetY:0}),this.hurtbox.activate(),ae.registerEnemyHurtbox(this.hurtbox),this.attackHitbox=new Le({owner:this,type:"enemy_attack",width:c.attackReach,height:.6,offsetX:c.attackReach*.5,offsetY:0,damage:c.attackDamage}),ae.registerEnemyAttack(this.attackHitbox),this.meshGroup=new St,this.meshGroup.position.set(this.aabb.x,this.aabb.y,0);const u=new Et(.28,.34,.78,8);this.bodyMat=new Se({color:new st(z.PALETTE.inkMid),roughness:.7,transparent:!0,opacity:1}),this.bodyMesh=new k(u,this.bodyMat),this.bodyMesh.position.y=.05,this.bodyMesh.castShadow=!0,Q(this.bodyMesh,.032),this.meshGroup.add(this.bodyMesh);const f=new Et(.11,.08,.65,8),d=new k(f,this.bodyMat);d.position.set(-.1,-2*.5+.32,-.1),Q(d,.025),this.meshGroup.add(d);const g=new k(f,this.bodyMat);g.position.set(.12,-2*.5+.32,.1),Q(g,.025),this.meshGroup.add(g);const x=new Ye(.19,8,8),p=new k(x,this.bodyMat);p.position.y=.55,Q(p,.025),this.meshGroup.add(p);const m=new pe(.75,.28,14);this.hatMat=new Se({color:new st(z.PALETTE.inkDark),roughness:.9}),this.hatMesh=new k(m,this.hatMat),this.hatMesh.position.y=.72,this.hatMesh.castShadow=!0,Q(this.hatMesh,.035),this.meshGroup.add(this.hatMesh),this.spearGroup=new St,this.spearGroup.position.set(.25,.05,.28);const y=new Et(.04,.04,c.attackReach,6);y.rotateZ(Math.PI/2);const _=new Se({color:2499102,roughness:.8}),b=new k(y,_);b.position.x=c.attackReach*.45,Q(b,.022),this.spearGroup.add(b);const P=new pe(.13,.65,6);P.rotateZ(-Math.PI/2),this.spearTipMat=new Se({color:new st(z.PALETTE.vermilion),roughness:.3,metalness:.8});const E=new k(P,this.spearTipMat);if(E.position.x=c.attackReach+.15,Q(E,.025),this.spearGroup.add(E),this.meshGroup.add(this.spearGroup),typeof document<"u"){const T=document.createElement("canvas");T.width=64,T.height=64;const R=T.getContext("2d");R.fillStyle="#b8292f",R.font="bold 52px serif",R.textAlign="center",R.textBaseline="middle",R.fillText("!",32,32);const N=new ea(T),v=new oc({map:N,transparent:!0,opacity:0});this.alertSprite=new Om(v),this.alertSprite.position.set(0,c.height*.5+.8,0),this.alertSprite.scale.set(.8,.8,1),this.meshGroup.add(this.alertSprite)}else this.alertSprite={material:{opacity:0}};this.scene.add(this.meshGroup),this.fsm=new da(this,"Patrol"),this.setupFSM(),this.fsm.changeState("Patrol")}get isUnaware(){return this.fsm.isInState("Patrol")||this.fsm.isInState("Alert")}setupFSM(){const t=z.ENEMIES.ashigaru;this.fsm.addState("Patrol",{enter:()=>{this.alertSprite.material.opacity=0,this.attackHitbox.deactivate(),this.isStaggered=!1},fixedUpdate:(e,i)=>{if(this.isStationary||(this.patrolPauseTimer>0?(this.patrolPauseTimer-=e,this.velocity.x=0):(this.velocity.x=this.facing*t.patrolSpeed,this.facing>0&&this.aabb.x>=this.patrolMaxX?(this.facing=-1,this.patrolPauseTimer=t.patrolPause):this.facing<0&&this.aabb.x<=this.patrolMinX&&(this.facing=1,this.patrolPauseTimer=t.patrolPause))),this.canSeePlayer(i)){this.fsm.changeState("Alert");return}}}),this.fsm.addState("Alert",{enter:()=>{this.velocity.x=0,this.stateTimer=.38,this.alertSprite.material.opacity=1,at.emit("enemy_alert",{enemy:this})},fixedUpdate:(e,i)=>{this.stateTimer-=e,i&&(this.facing=i.aabb.x>=this.aabb.x?1:-1),this.stateTimer<=0&&(Math.abs(i.aabb.x-this.aabb.x)<=t.attackReach+1.2?this.fsm.changeState("Telegraph"):this.fsm.changeState("Chase"))}}),this.fsm.addState("Chase",{enter:()=>{this.alertSprite.material.opacity=.8},fixedUpdate:(e,i)=>{if(!i)return;const n=Math.abs(i.aabb.x-this.aabb.x);if(this.facing=i.aabb.x>=this.aabb.x?1:-1,n<=t.attackReach+.4){this.fsm.changeState("Telegraph");return}this.velocity.x=this.facing*(t.patrolSpeed*1.5),n>t.visionRange*1.5&&this.fsm.changeState("Patrol")}}),this.fsm.addState("Telegraph",{enter:()=>{this.velocity.x=0,this.stateTimer=t.attackTelegraph,this.spearTipMat.color.setHex(16777215)},fixedUpdate:e=>{this.stateTimer-=e;const i=1-this.stateTimer/t.attackTelegraph;this.spearGroup.position.x=.3-i*.6,this.spearGroup.rotation.z=Math.sin(i*Math.PI)*.15,this.stateTimer<=0&&this.fsm.changeState("Thrust")}}),this.fsm.addState("Thrust",{enter:()=>{this.stateTimer=t.attackDuration,this.attackHitbox.activate(),this.spearTipMat.color.setHex(12069167),this.velocity.x=this.facing*3.5},fixedUpdate:e=>{this.stateTimer-=e;const i=1-this.stateTimer/t.attackDuration;this.spearGroup.position.x=.3+Math.sin(i*Math.PI)*.8,this.stateTimer<=0&&(this.attackHitbox.deactivate(),this.fsm.changeState("Recovery"))}}),this.fsm.addState("Recovery",{enter:()=>{this.stateTimer=t.attackRecovery,this.velocity.x=0,this.spearTipMat.color.setHex(6052695)},fixedUpdate:(e,i)=>{this.stateTimer-=e,this.spearGroup.position.x=.3,this.spearGroup.rotation.z=0,this.stateTimer<=0&&(i&&this.canSeePlayer(i)?this.fsm.changeState("Alert"):this.fsm.changeState("Patrol"))}}),this.fsm.addState("Staggered",{enter:()=>{this.isStaggered=!0,this.attackHitbox.deactivate(),this.alertSprite.material.opacity=0,this.spearGroup.rotation.z=-Math.PI*.4,this.bodyMesh.rotation.z=-.3},fixedUpdate:e=>{this.staggerTimer-=e,this.velocity.x*=.85;const i=Math.floor(performance.now()/90)%2===0;this.bodyMat.color.setHex(i?12069167:6052695),this.staggerTimer<=0&&(this.isStaggered=!1,this.bodyMesh.rotation.z=0,this.spearGroup.rotation.z=0,this.bodyMat.color.setHex(z.PALETTE.inkMid),this.fsm.changeState("Recovery"))}}),this.fsm.addState("Hurt",{enter:()=>{this.stateTimer=.22,this.attackHitbox.deactivate()},fixedUpdate:e=>{this.stateTimer-=e,this.velocity.x*=.9,this.stateTimer<=0&&(this.isStaggered?this.fsm.changeState("Staggered"):this.fsm.changeState("Alert"))}}),this.fsm.addState("Dead",{enter:()=>{this.isDead=!0,this.hurtbox.deactivate(),this.attackHitbox.deactivate(),ae.unregisterEntity(this),this.inkSplash&&this.inkSplash.spawnDeathDissolve(this.aabb.x,this.aabb.y,t.width,t.height),this.meshGroup.visible=!1,at.emit("enemy_killed",{enemy:this})},fixedUpdate:()=>{}})}canSeePlayer(t){if(!t||t.health<=0)return!1;const e=z.ENEMIES.ashigaru,i=t.aabb.x-this.aabb.x,n=t.aabb.y-this.aabb.y;if(Math.hypot(i,n)>e.visionRange||this.facing>0&&i<0||this.facing<0&&i>0)return!1;const r=Math.atan2(Math.abs(n),Math.abs(i)),o=e.visionAngleDeg*Math.PI/180;return r<=o}stagger(t=1.2){this.staggerTimer=t,this.fsm.changeState("Staggered")}takeDamage(t=1,e=!1,i=0){if(this.isDead)return;this.hp-=t;const n=this.aabb.x>=i?1:-1;this.velocity.x=n*(e?6:4),this.velocity.y=3,this.hp<=0||e?this.fsm.changeState("Dead"):this.fsm.changeState("Hurt")}fixedUpdate(t,e){if(this.isDead)return;const i=this.velocity.y>0?z.PLAYER.gravityRising:z.PLAYER.gravityFalling;this.velocity.y+=i*t,this.velocity.y<z.PLAYER.maxFallSpeed&&(this.velocity.y=z.PLAYER.maxFallSpeed),this.fsm.fixedUpdate(t,e),this.collision.moveAndSlide(this.aabb,this.velocity,t,!1).grounded&&(this.velocity.y=0),this.hurtbox.updatePosition(this.aabb.x,this.aabb.y,this.facing),this.attackHitbox.updatePosition(this.aabb.x,this.aabb.y,this.facing)}render(t){this.isDead||(this.meshGroup.position.x=this.aabb.x,this.meshGroup.position.y=this.aabb.y,this.meshGroup.scale.x=this.facing)}dispose(){this.hurtbox.deactivate(),this.attackHitbox.deactivate(),ae.unregisterEntity(this),this.meshGroup.clear(),this.scene.remove(this.meshGroup)}}class ir{constructor({scene:t,collision:e,inkSplash:i,x:n=0,y:a=5,facing:r=-1}){this.scene=t,this.collision=e,this.inkSplash=i;const o=z.ENEMIES.tengu;this.aabb=new _e(n,a,o.width,o.height),this.velocity={x:0,y:0},this.facing=r,this.homeX=n,this.homeY=a,this.hoverTime=Math.random()*10,this.maxHp=o.hp,this.hp=this.maxHp,this.isDead=!1,this.isAirborne=!0,this.isStaggered=!1,this.swoopTarget={x:0,y:0},this.swoopDir={x:0,y:0},this.stateTimer=0,this.cooldownTimer=1,this.hurtbox=new Le({owner:this,type:"enemy_hurtbox",width:o.width*.95,height:o.height*.95,offsetX:0,offsetY:0}),this.hurtbox.activate(),ae.registerEnemyHurtbox(this.hurtbox),this.attackHitbox=new Le({owner:this,type:"enemy_attack",width:o.width*1.2,height:o.height*1.2,offsetX:0,offsetY:0,damage:o.swoopDamage}),ae.registerEnemyAttack(this.attackHitbox),this.meshGroup=new St,this.meshGroup.position.set(this.aabb.x,this.aabb.y,0);const h=new pe(.5,o.height*.8,6);this.bodyMat=new Se({color:new st(z.PALETTE.inkDark),roughness:.6}),this.bodyMesh=new k(h,this.bodyMat),this.bodyMesh.rotation.x=Math.PI,this.meshGroup.add(this.bodyMesh);const l=new pe(.18,.5,4);l.rotateZ(-Math.PI/2);const c=new Se({color:new st(z.PALETTE.vermilion),roughness:.3});this.beakMesh=new k(l,c),this.beakMesh.position.set(.35,.2,0),this.meshGroup.add(this.beakMesh);const u=new si(1.4,.6);this.wingMat=new Se({color:new st(z.PALETTE.inkDark),side:se,roughness:.7,transparent:!0,opacity:.9}),this.wingL=new k(u,this.wingMat),this.wingL.position.set(-.6,.2,-.2),this.meshGroup.add(this.wingL),this.wingR=new k(u,this.wingMat),this.wingR.position.set(-.6,.2,.2),this.meshGroup.add(this.wingR);const f=new t0({color:12069167,dashSize:.4,gapSize:.2,linewidth:2}),d=new fe().setFromPoints([new C(0,0,0),new C(1,0,0)]);this.telegraphLine=new ca(d,f),this.telegraphLine.visible=!1,this.scene.add(this.telegraphLine),this.scene.add(this.meshGroup),this.fsm=new da(this,"Hover"),this.setupFSM(),this.fsm.changeState("Hover")}get isUnaware(){return!1}setupFSM(){const t=z.ENEMIES.tengu;this.fsm.addState("Hover",{enter:()=>{this.telegraphLine.visible=!1,this.attackHitbox.deactivate()},fixedUpdate:(e,i)=>{this.hoverTime+=e,this.cooldownTimer-=e;const n=this.homeY+Math.sin(this.hoverTime*t.bobFrequency)*t.bobAmplitude;if(this.aabb.y+=(n-this.aabb.y)*.1,this.aabb.x+=(this.homeX-this.aabb.x)*.05,this.wingL.rotation.z=Math.sin(this.hoverTime*8)*.4,this.wingR.rotation.z=Math.sin(this.hoverTime*8)*.4,i){this.facing=i.aabb.x>=this.aabb.x?1:-1;const a=i.aabb.x-this.aabb.x,r=i.aabb.y-this.aabb.y;if(Math.hypot(a,r)<10&&this.cooldownTimer<=0&&r<1){this.swoopTarget={x:i.aabb.x+i.facing*1.5,y:i.aabb.y};const h=this.swoopTarget.x-this.aabb.x,l=this.swoopTarget.y-this.aabb.y,c=Math.hypot(h,l)||1;this.swoopDir={x:h/c,y:l/c},this.fsm.changeState("Telegraph")}}}}),this.fsm.addState("Telegraph",{enter:()=>{this.stateTimer=t.swoopTelegraph,this.telegraphLine.visible=!0;const e=[new C(this.aabb.x,this.aabb.y,0),new C(this.swoopTarget.x+this.swoopDir.x*4,this.swoopTarget.y+this.swoopDir.y*4,0)];this.telegraphLine.geometry.setFromPoints(e),this.telegraphLine.computeLineDistances()},fixedUpdate:e=>{this.stateTimer-=e,this.wingL.rotation.z=.8,this.wingR.rotation.z=.8,this.stateTimer<=0&&(this.telegraphLine.visible=!1,this.fsm.changeState("Swoop"))}}),this.fsm.addState("Swoop",{enter:()=>{this.stateTimer=.55,this.attackHitbox.activate(),this.velocity.x=this.swoopDir.x*t.swoopSpeed,this.velocity.y=this.swoopDir.y*t.swoopSpeed},fixedUpdate:e=>{this.stateTimer-=e,this.aabb.x+=this.velocity.x*e,this.aabb.y+=this.velocity.y*e,this.inkSplash&&Math.random()<.6&&this.inkSplash.spawnHitImpact(this.aabb.x,this.aabb.y,-this.facing,2,!1),(this.stateTimer<=0||this.aabb.y<=this.swoopTarget.y-1)&&(this.attackHitbox.deactivate(),this.fsm.changeState("Ascend"))}}),this.fsm.addState("Ascend",{enter:()=>{this.attackHitbox.deactivate(),this.cooldownTimer=t.swoopCooldown},fixedUpdate:e=>{const i=this.homeX-this.aabb.x,n=this.homeY-this.aabb.y;this.velocity.x+=(i*2.5-this.velocity.x)*.08,this.velocity.y+=(n*3.5-this.velocity.y)*.08,this.aabb.x+=this.velocity.x*e,this.aabb.y+=this.velocity.y*e,Math.hypot(i,n)<.8&&this.fsm.changeState("Hover")}}),this.fsm.addState("Hurt",{enter:()=>{this.stateTimer=.2,this.attackHitbox.deactivate(),this.telegraphLine.visible=!1},fixedUpdate:e=>{this.stateTimer-=e,this.aabb.x+=this.velocity.x*e,this.aabb.y+=this.velocity.y*e,this.velocity.x*=.85,this.velocity.y*=.85,this.stateTimer<=0&&this.fsm.changeState("Ascend")}}),this.fsm.addState("Dead",{enter:()=>{this.isDead=!0,this.telegraphLine.visible=!1,this.hurtbox.deactivate(),this.attackHitbox.deactivate(),ae.unregisterEntity(this),this.inkSplash&&this.inkSplash.spawnDeathDissolve(this.aabb.x,this.aabb.y,t.width,t.height),this.meshGroup.visible=!1,at.emit("enemy_killed",{enemy:this})},fixedUpdate:()=>{}})}takeDamage(t=1,e=!1,i=0){if(this.isDead)return;this.hp-=t;const n=this.aabb.x>=i?1:-1;this.velocity.x=n*8,this.velocity.y=5,this.hp<=0||e?this.fsm.changeState("Dead"):this.fsm.changeState("Hurt")}fixedUpdate(t,e){this.isDead||(this.fsm.fixedUpdate(t,e),this.hurtbox.updatePosition(this.aabb.x,this.aabb.y,this.facing),this.attackHitbox.updatePosition(this.aabb.x,this.aabb.y,this.facing))}render(t){this.isDead||(this.meshGroup.position.x=this.aabb.x,this.meshGroup.position.y=this.aabb.y,this.meshGroup.scale.x=this.facing)}dispose(){this.telegraphLine.visible=!1,this.scene.remove(this.telegraphLine),this.hurtbox.deactivate(),this.attackHitbox.deactivate(),ae.unregisterEntity(this),this.meshGroup.clear(),this.scene.remove(this.meshGroup)}}class Th{constructor({scene:t,collision:e,inkSplash:i,projectiles:n,x:a=0,y:r=0,facing:o=-1}){this.scene=t,this.collision=e,this.inkSplash=i,this.projectiles=n,this.width=.85,this.height=1.85,this.aabb=new _e(a,r,this.width,this.height),this.facing=o,this.maxHp=2,this.hp=this.maxHp,this.isDead=!1,this.isStaggered=!1,this.isAirborne=!1,this.cooldownTimer=1.6,this.aimTimer=0,this.isAiming=!1,this.hurtbox=new Le({owner:this,type:"enemy_hurtbox",width:this.width*.9,height:this.height*.95,offsetX:0,offsetY:0}),this.hurtbox.activate(),ae.registerEnemyHurtbox(this.hurtbox),this.meshGroup=new St,this.meshGroup.position.set(a,r,0);const h=we({inkDark:1315859,inkMid:4539198,inkLight:8157552,darkBias:.16}),l=new Et(.24,.34,1.05,8),c=new k(l,h);c.position.y=-.05,Q(c,.028),this.meshGroup.add(c);const u=new Et(.1,.08,.55,8);for(const _ of[-.11,.11]){const b=new k(u,h);b.position.set(0,-this.height*.5+.28,_),Q(b,.022),this.meshGroup.add(b)}const f=new Ye(.18,8,8),d=new k(f,h);d.position.y=.58,Q(d,.022),this.meshGroup.add(d);const g=new pe(.62,.32,10),x=new k(g,h);x.position.y=.78,Q(x,.028),this.meshGroup.add(x);const p=new Gn(.78,.032,6,16,Math.PI*.92);p.rotateZ(-Math.PI*.46);const m=new k(p,h);m.position.set(.25,.15,.22),Q(m,.022),this.meshGroup.add(m);const y=new Et(.015,.015,1.45,4);this.stringMat=new Nt({color:4012855}),this.bowString=new k(y,this.stringMat),this.bowString.position.set(.22,.15,.22),this.meshGroup.add(this.bowString),this.scene.add(this.meshGroup)}takeDamage(t=1,e=0){this.isDead||(this.hp-=t,this.inkSplash&&this.inkSplash.spawnHitImpact(this.aabb.x,this.aabb.y,this.facing,12,!0,!0),this.hp<=0&&this.die())}onParried(){this.isAiming=!1,this.cooldownTimer=2,this.stringMat.color.setHex(4012855)}die(){this.isDead=!0,this.hurtbox.deactivate(),this.meshGroup.visible=!1,this.inkSplash&&this.inkSplash.spawnDeathDissolve(this.aabb.x,this.aabb.y,this.width,this.height)}fixedUpdate(t,e){if(this.isDead||!e)return;this.hurtbox.updatePosition(this.aabb.x,this.aabb.y,this.facing);const i=e.aabb.x-this.aabb.x,n=e.aabb.y-this.aabb.y,a=Math.hypot(i,n);if(this.facing=i>=0?1:-1,a<18){if(!this.isAiming)this.cooldownTimer-=t,this.cooldownTimer<=0&&(this.isAiming=!0,this.aimTimer=.72,this.stringMat.color.setHex(12069167));else if(this.aimTimer-=t,this.aimTimer<=0&&(this.isAiming=!1,this.cooldownTimer=1.95,this.stringMat.color.setHex(4012855),this.projectiles)){const r=Math.hypot(i,n)||1,o=15.5;this.projectiles.spawnProjectile({x:this.aabb.x+this.facing*.65,y:this.aabb.y+.15,vx:i/r*o,vy:n/r*o,owner:this,type:"arrow",damage:1})}}else this.isAiming=!1,this.stringMat.color.setHex(4012855)}render(){this.isDead||(this.meshGroup.position.set(this.aabb.x,this.aabb.y,0),this.meshGroup.scale.x=this.facing)}dispose(){this.hurtbox.deactivate(),ae.unregisterEntity(this),this.scene.remove(this.meshGroup)}}class L0{constructor({scene:t,collision:e,inkSplash:i,x:n=0,y:a=0,facing:r=-1,patrolMinX:o=-4,patrolMaxX:h=4}){this.scene=t,this.collision=e,this.inkSplash=i,this.width=1.45,this.height=2.75,this.aabb=new _e(n,a,this.width,this.height),this.facing=r,this.patrolMinX=o,this.patrolMaxX=h,this.maxHp=5,this.hp=this.maxHp,this.isDead=!1,this.isStaggered=!1,this.isAirborne=!1,this.staggerTimer=0,this.attackCooldown=1.5,this.hurtbox=new Le({owner:this,type:"enemy_hurtbox",width:this.width*.95,height:this.height*.95,offsetX:0,offsetY:0}),this.hurtbox.activate(),ae.registerEnemyHurtbox(this.hurtbox),this.attackHitbox=new Le({owner:this,type:"enemy_attack",width:2.2,height:1.8,offsetX:1.1,offsetY:0,damage:1}),ae.registerEnemyAttack(this.attackHitbox),this.meshGroup=new St,this.meshGroup.position.set(n,a,0);const l=we({inkDark:1118480,inkMid:3354925,inkLight:7039072,darkBias:.22}),c=new Et(.62,.52,1.45,10),u=new k(c,l);u.position.y=.15,Q(u,.036),this.meshGroup.add(u);const f=new Et(.22,.18,.85,8);for(const b of[-.24,.24]){const P=new k(f,l);P.position.set(0,-this.height*.5+.42,b),Q(P,.028),this.meshGroup.add(P)}const d=new pe(.55,.65,8),g=new k(d,l);g.position.y=1.12,Q(g,.032),this.meshGroup.add(g);const x=new Gt(.26,2.25,1.35),p=new k(x,l);p.position.set(.68,0,0),Q(p,.038),this.meshGroup.add(p);const m=new Gt(.22,.85,.55),y=new Nt({color:12069167}),_=new k(m,y);_.position.set(-.56,.2,0),this.meshGroup.add(_),this.scene.add(this.meshGroup)}takeDamage(t=1,e=0){if(this.isDead)return;if((e-this.aabb.x)*this.facing>0&&!this.isStaggered){this.inkSplash&&this.inkSplash.spawnHitImpact(this.aabb.x+this.facing*.7,this.aabb.y,this.facing,6,!1,!1),at.emit("boss_clink");return}this.hp-=t*2,this.inkSplash&&this.inkSplash.spawnHitImpact(this.aabb.x,this.aabb.y,-this.facing,18,!0,!0),this.hp<=0&&this.die()}onParried(){this.isStaggered=!0,this.staggerTimer=2.2,this.attackHitbox.deactivate()}die(){this.isDead=!0,this.hurtbox.deactivate(),this.attackHitbox.deactivate(),this.meshGroup.visible=!1,this.inkSplash&&this.inkSplash.spawnDeathDissolve(this.aabb.x,this.aabb.y,this.width,this.height)}fixedUpdate(t,e){if(this.isDead||!e)return;if(this.staggerTimer>0){this.staggerTimer-=t,this.staggerTimer<=0&&(this.isStaggered=!1);return}const i=e.aabb.x-this.aabb.x,n=Math.abs(i);n<10?(this.attackCooldown-=t,this.attackCooldown<=0?(this.facing=i>=0?1:-1,this.attackHitbox.activate(),this.attackCooldown=1.65,setTimeout(()=>{this.isDead||this.attackHitbox.deactivate()},240)):n>1.8&&(this.aabb.x+=this.facing*2.2*t)):(this.aabb.x+=this.facing*1.6*t,this.aabb.x<=this.patrolMinX&&(this.facing=1),this.aabb.x>=this.patrolMaxX&&(this.facing=-1)),this.hurtbox.updatePosition(this.aabb.x,this.aabb.y,this.facing),this.attackHitbox.updatePosition(this.aabb.x,this.aabb.y,this.facing)}render(){this.isDead||(this.meshGroup.position.set(this.aabb.x,this.aabb.y,0),this.meshGroup.scale.x=this.facing)}dispose(){this.hurtbox.deactivate(),this.attackHitbox.deactivate(),ae.unregisterEntity(this),this.scene.remove(this.meshGroup)}}class D0{constructor(t,e){this.scene=t,this.inkSplash=e,this.projectiles=[],this.scrollOfReflectionUnlocked=!1,at.on("scroll_unlocked",({scrollId:i})=>{i>=2&&(this.scrollOfReflectionUnlocked=!0)})}spawnProjectile({x:t,y:e,vx:i,vy:n,owner:a,type:r="arrow",damage:o=1}){const h=new St;h.position.set(t,e,.15);let l;if(r==="needle"){const c=new pe(.08,.95,6);c.rotateZ(-Math.PI/2);const u=new Nt({color:12069167});l=new k(c,u),Q(l,.025,1315859)}else{const c=new Et(.03,.03,1.25,6);c.rotateZ(Math.PI/2);const u=new Nt({color:1315859});l=new k(c,u);const f=new pe(.09,.35,5);f.rotateZ(-Math.PI/2);const d=new Nt({color:12069167}),g=new k(f,d);g.position.x=.65,l.add(g)}h.add(l),h.rotation.z=Math.atan2(n,i),this.scene.add(h),this.projectiles.push({group:h,mesh:l,x:t,y:e,vx:i,vy:n,owner:a,type:r,damage:o,reflected:!1,life:0,maxLife:4})}fixedUpdate(t,e,i=[],n=[]){if(e)for(let a=this.projectiles.length-1;a>=0;a--){const r=this.projectiles[a];if(r.life+=t,r.life>=r.maxLife){this.removeProjectile(a);continue}if(r.x+=r.vx*t,r.y+=r.vy*t,r.group.position.set(r.x,r.y,.15),r.group.rotation.z=Math.atan2(r.vy,r.vx),r.reflected){let o=null;for(const h of i)if(h&&!h.isDead&&Math.abs(r.x-h.aabb.x)<1.1&&Math.abs(r.y-h.aabb.y)<1.3){o=h;break}if(!o){for(const h of n)if(h&&!h.isDead&&Math.abs(r.x-h.aabb.x)<1.8&&Math.abs(r.y-h.aabb.y)<2.4){o=h;break}}if(o){if(o.takeDamage(3,r.x,!0),this.inkSplash&&(this.inkSplash.spawnParryBurst(r.x,r.y,!0),this.inkSplash.spawnHitImpact(r.x,r.y,Math.sign(r.vx)||1,22,!0,!0)),this.scrollOfReflectionUnlocked)for(const h of i)h&&!h.isDead&&h!==o&&Math.hypot(h.aabb.x-r.x,h.aabb.y-r.y)<5&&h.takeDamage(2,r.x);at.emit("camera_shake",{amount:.35}),this.removeProjectile(a);continue}}else{const o=r.x-e.aabb.x,h=r.y-e.aabb.y,l=Math.hypot(o,h),c=e.fsm.isInState("Parry")||e.combat&&e.combat.parryTimer>0,u=e.fsm.isInState("Attack")||e.fsm.isInState("AirAttack");if(l<1.65&&(c||u)){if(r.reflected=!0,r.life=0,r.owner&&r.owner.aabb){const f=r.owner.aabb.x-r.x,d=r.owner.aabb.y-r.y,g=Math.hypot(f,d)||1,x=Math.hypot(r.vx,r.vy)*2.2;r.vx=f/g*x,r.vy=d/g*x}else r.vx=-r.vx*2.2,r.vy=-r.vy*2.2;this.inkSplash&&this.inkSplash.spawnParryBurst(r.x,r.y,!0),at.emit("parry_perfect",{x:r.x,y:r.y,reflectedProjectile:!0}),at.emit("camera_shake",{amount:.22});continue}if(Math.abs(o)<.65&&Math.abs(h)<.95){e.takeDamage(r.damage,r.x),this.inkSplash&&this.inkSplash.spawnHitImpact(r.x,r.y,Math.sign(r.vx)||1,10,!1,!0),this.removeProjectile(a);continue}}}}removeProjectile(t){const e=this.projectiles[t];e&&e.group&&this.scene.remove(e.group),this.projectiles.splice(t,1)}dispose(){for(const t of this.projectiles)this.scene.remove(t.group);this.projectiles=[]}}class I0{constructor(t){this.scene=t;const e=new si(1.4,.9),i=new Nt({color:new st(z.PALETTE.inkDark),side:se,transparent:!0,opacity:.95,depthWrite:!1});this.wavePool=new _i(()=>{const h=new k(e,i.clone());h.visible=!1,this.scene.add(h);const l=new Le({owner:{aabb:{x:0,y:0}},type:"enemy_attack",width:1.4,height:.9,damage:1});return ae.registerEnemyAttack(l),{mesh:h,hitbox:l,vx:0,lifetime:0,maxLife:2.5,active:!1}},(h,l,c,u=1,f=14)=>{h.mesh.position.set(l,c+.45,.05),h.mesh.scale.set(u,1,1),h.mesh.visible=!0,h.vx=u*f,h.lifetime=0,h.maxLife=2.4,h.active=!0,h.hitbox.activate(),h.hitbox.owner.aabb.x=l,h.hitbox.owner.aabb.y=c+.45,h.hitbox.updatePosition(l,c+.45,1)},8);const n=new si(2.4,.3),a=new Nt({color:new st(z.PALETTE.inkDark),side:se,transparent:!0,opacity:.85,depthWrite:!1});this.puddlePool=new _i(()=>{const h=new k(n,a.clone());h.rotation.x=-Math.PI/2,h.visible=!1,this.scene.add(h);const l=new Le({owner:{aabb:{x:0,y:0}},type:"enemy_attack",width:2.4,height:.4,damage:1});return ae.registerEnemyAttack(l),{mesh:h,hitbox:l,lifetime:0,maxLife:z.BOSS.puddleLifetime,active:!1}},(h,l,c)=>{h.mesh.position.set(l,c+.02,0),h.mesh.visible=!0,h.lifetime=0,h.maxLife=z.BOSS.puddleLifetime,h.active=!0,h.hitbox.activate(),h.hitbox.owner.aabb.x=l,h.hitbox.owner.aabb.y=c+.2,h.hitbox.updatePosition(l,c+.2,1)},12);const r=new wi(.2,.6,24),o=new Nt({color:new st(z.PALETTE.inkDark),side:se,transparent:!0,opacity:.9,depthWrite:!1});this.ringPool=new _i(()=>{const h=new k(r,o.clone());return h.visible=!1,this.scene.add(h),{mesh:h,life:0,maxLife:.45,maxRadius:8}},(h,l,c)=>{h.mesh.position.set(l,c+.05,.02),h.mesh.scale.set(.1,.1,1),h.mesh.visible=!0,h.life=0,h.maxLife=.45,h.maxRadius=7.5},6)}spawnFloorWave(t,e,i=1,n=14){this.wavePool.obtain(t,e,i,n)}spawnPuddle(t,e){this.puddlePool.obtain(t,e)}spawnRingShockwave(t,e){this.ringPool.obtain(t,e),this.spawnFloorWave(t-.5,e,-1,14),this.spawnFloorWave(t+.5,e,1,14)}update(t){this.wavePool.update(t,(e,i)=>{if(e.lifetime+=i,e.lifetime>=e.maxLife)return e.hitbox.deactivate(),e.mesh.visible=!1,!1;e.mesh.position.x+=e.vx*i,e.hitbox.updatePosition(e.mesh.position.x,e.mesh.position.y,1);const n=e.lifetime/e.maxLife;return n>.8&&(e.mesh.material.opacity=(1-n)*5*.95),!0}),this.puddlePool.update(t,(e,i)=>{if(e.lifetime+=i,e.lifetime>=e.maxLife)return e.hitbox.deactivate(),e.mesh.visible=!1,!1;const n=e.lifetime/e.maxLife;return n>.8&&(e.mesh.material.opacity=(1-n)*5*.85),!0}),this.ringPool.update(t,(e,i)=>{if(e.life+=i,e.life>=e.maxLife)return e.mesh.visible=!1,!1;const n=e.life/e.maxLife,a=Ue.lerp(.5,e.maxRadius,n);return e.mesh.scale.set(a,a,1),e.mesh.material.opacity=(1-n)*.9,!0})}dispose(){this.wavePool.forEach(t=>ae.unregisterEntity(t.hitbox.owner)),this.puddlePool.forEach(t=>ae.unregisterEntity(t.hitbox.owner))}}class U0{constructor({scene:t,collision:e,inkSplash:i,shockwaves:n,x:a=260,y:r=50}){this.scene=t,this.collision=e,this.inkSplash=i,this.shockwaves=n;const o=z.BOSS;this.aabb=new _e(a,r+o.height*.5,o.width,o.height),this.velocity={x:0,y:0},this.facing=-1,this.arenaMinX=243,this.arenaMaxX=277,this.groundY=r,this.maxHp=o.hpMax,this.hp=this.maxHp,this.phase=1,this.isDead=!1,this.isVulnerable=!1,this.isStaggered=!1,this.canBeParried=!1,this.stateTimer=0,this.decisionTimer=1,this.farDistanceTimer=0,this.vulnerableTimer=0,this.staggerTimer=0,this.bodyHurtbox=new Le({owner:this,type:"enemy_hurtbox",width:o.width*.9,height:o.height*.95,offsetX:0,offsetY:0}),this.bodyHurtbox.activate(),ae.registerEnemyHurtbox(this.bodyHurtbox),this.attackHitbox=new Le({owner:this,type:"enemy_attack",width:4.5,height:1.8,offsetX:2.5,offsetY:0,damage:1}),ae.registerEnemyAttack(this.attackHitbox),this.meshGroup=new St,this.meshGroup.position.set(this.aabb.x,this.aabb.y,0),this.buildBossModel(),this.scene.add(this.meshGroup),this.fsm=new da(this,"Dormant"),this.setupFSM(),this.fsm.changeState("Dormant")}buildBossModel(){const e=we({inkDark:1118480,inkMid:2894632,inkLight:6118228,noiseScale:2.2,darkBias:.14}),i=we({inkDark:1644566,inkMid:4736576,inkLight:8749688,noiseScale:2,darkBias:.04}),n=(T,R)=>{const N=new St;N.position.set(R,-2.4+1.85,T);const v=new Et(.42,.54,1,12),S=new k(v,e);S.position.y=-.45,Q(S,.036),N.add(S);const F=new Ye(.3,10,10),O=new k(F,i);O.position.set(.16,-.92,0),Q(O,.03),N.add(O);const W=new Et(.28,.21,.9,12),K=new k(W,i);K.position.y=-1.35,Q(K,.032),N.add(K);const V=new Gt(.72,.22,.38),Z=new k(V,e);return Z.position.set(.16,-1.78,0),Q(Z,.03),N.add(Z),this.meshGroup.add(N),N};this.leftLeg=n(-.4,-.24),this.rightLeg=n(.4,.28),this.torso=new St,this.torso.position.y=.32,this.meshGroup.add(this.torso);const a=new Et(.88,.74,1.65,14),r=new k(a,e);r.castShadow=!0,Q(r,.042),this.torso.add(r);for(let T=0;T<4;T++){const R=new Et(.92-T*.03,.9-T*.03,.22,14),N=new k(R,i);N.position.y=.52-T*.34,Q(N,.028),this.torso.add(N)}for(let T=-1;T<=1;T++){const R=new St;R.position.set(T*.42,-.58,0),R.rotation.z=T*.18;for(let N=0;N<3;N++){const v=new Gt(.52,.28,1.38),S=new k(v,N%2===0?i:e);S.position.y=-N*.26,Q(S,.03),R.add(S)}this.meshGroup.add(R)}const o=T=>{const R=new St;R.position.set(0,1.05,T*.86);for(let O=0;O<3;O++){const W=new Gt(.82,.26,.28),K=new k(W,O%2===0?i:e);K.position.set(-.04*O,.18-O*.24,T*O*.05),K.rotation.x=T*.28,Q(K,.032),R.add(K)}const N=new Et(.24,.22,.72,10),v=new k(N,e);v.position.set(.18,-.45,-T*.12),v.rotation.z=.42,Q(v,.03),R.add(v);const S=new Et(.21,.17,.78,10),F=new k(S,i);F.position.set(.56,-.78,-T*.24),F.rotation.z=1.05,Q(F,.03),R.add(F),this.meshGroup.add(R)};o(-1),o(1);const h=new Et(.38,1.35,2.85,12,4,!0,-Math.PI*.45,Math.PI*.9),l=we({inkDark:986894,inkMid:2499874,inkLight:4868162,darkBias:.25});l.side=se,this.bossCape=new k(h,l),this.bossCape.position.set(-.78,-.15,0),this.bossCape.rotation.z=-.36,Q(this.bossCape,.032),this.meshGroup.add(this.bossCape),this.helmet=new St,this.helmet.position.set(.08,1.58,0),this.meshGroup.add(this.helmet);const c=new Ye(.62,14,12,0,Math.PI*2,0,Math.PI*.62),u=new k(c,e);u.position.y=.05,u.castShadow=!0,Q(u,.038),this.helmet.add(u);for(let T=0;T<3;T++){const R=new Et(.62+T*.12,.74+T*.15,.16,14,1,!0,Math.PI*.35,Math.PI*1.3),N=new k(R,T%2===0?i:e);N.position.set(-.06,-.02-T*.14,0),Q(N,.028),this.helmet.add(N)}this.horns=new St,this.horns.position.set(.52,.25,0),this.helmet.add(this.horns);for(const T of[-.18,.18]){const R=new pe(.11,.95,5),N=new k(R,i);N.position.set(.12,.42,T),N.rotation.z=-.28,N.rotation.x=T*.65,Q(N,.028),this.horns.add(N)}const f=new Et(.42,.34,.52,10);this.mask=new k(f,e),this.mask.position.set(.24,1.32,0),Q(this.mask,.032),this.meshGroup.add(this.mask);const d=new Gt(.28,.95,.85);this.weakMat=new Nt({color:new st(z.PALETTE.inkDark)}),this.weakMesh=new k(d,this.weakMat),this.weakMesh.position.set(-2.2*.42,.35,0),this.meshGroup.add(this.weakMesh),this.swordGroup=new St,this.swordGroup.position.set(.62,-.05,.58),this.swordGroup.rotation.z=-.24;const g=new Et(.085,.075,1.45,10);g.rotateZ(Math.PI/2);const x=new k(g,e);x.position.x=-.45,Q(x,.028),this.swordGroup.add(x);const p=new Et(.28,.28,.09,12);p.rotateZ(Math.PI/2);const m=new k(p,i);m.position.x=.28,Q(m,.028),this.swordGroup.add(m);const y=6,_=.78;for(let T=0;T<y;T++){const R=T/y,N=.24*(1-R*.22),v=new Gt(_+.04,N,.06),S=new k(v,i),F=Math.pow(R,1.8)*.38,O=Math.pow(R,1.4)*.14;S.position.set(.68+T*_,F,0),S.rotation.z=O,Q(S,.03),this.swordGroup.add(S)}const b=new pe(.11,.55,5);b.rotateZ(-Math.PI/2+.16),this.tipMat=new Nt({color:new st(z.PALETTE.inkDark)});const P=new k(b,this.tipMat);P.position.set(.68+y*_,.44,0),Q(P,.028),this.swordGroup.add(P),this.inkDrops=[];const E=new Nt({color:1118480});for(let T=0;T<9;T++){const R=new Ye(.055,7,7);R.scale(.65,1.85,.65);const N=new k(R,E),v=.95+T*.48,S=Math.pow(T/9,1.8)*.32-.12;N.position.set(v,S,0),this.swordGroup.add(N),this.inkDrops.push({mesh:N,baseX:v,baseY:S,phase:T*.73,speed:1.4+T%3*.45})}this.meshGroup.add(this.swordGroup)}setupFSM(){const t=z.BOSS;this.fsm.addState("Dormant",{enter:()=>{this.aabb.y=this.groundY+5.5,this.meshGroup.position.y=this.groundY+5.5,this.attackHitbox.deactivate()},fixedUpdate:(e,i)=>{i&&i.aabb.x>=246&&this.fsm.changeState("Intro")}}),this.fsm.addState("Intro",{enter:()=>{this.stateTimer=2,this.velocity.y=-45,at.emit("boss_intro_start",{name:t.name})},fixedUpdate:e=>{this.stateTimer-=e,this.aabb.y>this.groundY+t.height*.5&&(this.aabb.y+=this.velocity.y*e,this.aabb.y<=this.groundY+t.height*.5&&(this.aabb.y=this.groundY+t.height*.5,this.velocity.y=0,at.emit("camera_shake",{amount:.65}),this.shockwaves.spawnRingShockwave(this.aabb.x,this.groundY),this.inkSplash&&(this.inkSplash.spawnHitImpact(this.aabb.x,this.groundY,1,24,!0),this.inkSplash.spawnHitImpact(this.aabb.x,this.groundY,-1,24,!0)))),this.stateTimer<=0&&this.fsm.changeState("Decide")}}),this.fsm.addState("Decide",{enter:()=>{this.decisionTimer=this.phase===3?.35:.65,this.isVulnerable=!1,this.canBeParried=!1,this.attackHitbox.deactivate()},fixedUpdate:(e,i)=>{if(!i||i.health<=0)return;if(this.decisionTimer-=e,this.facing=i.aabb.x>=this.aabb.x?1:-1,Math.abs(i.aabb.x-this.aabb.x)>9?this.farDistanceTimer+=e:this.farDistanceTimer=0,this.decisionTimer<=0){if(this.farDistanceTimer>=2.5){this.farDistanceTimer=0,this.fsm.changeState("Telegraph_Charge");return}if(this.phase>=2&&Math.random()<.3){this.fsm.changeState("CrossbarLeap");return}Math.random()<.55?this.fsm.changeState("Telegraph_Sweep"):this.fsm.changeState("Telegraph_Slam")}}}),this.fsm.addState("Telegraph_Sweep",{enter:()=>{const e=this.phase>=2?.85:1;this.stateTimer=.7*e,this.swordGroup.rotation.z=.8,this.tipMat.color.setHex(12069167)},fixedUpdate:e=>{this.stateTimer-=e,this.stateTimer<=0&&this.fsm.changeState("Action_Sweep")}}),this.fsm.addState("Action_Sweep",{enter:()=>{this.stateTimer=.3,this.attackHitbox.damage=1,this.attackHitbox.activate(),this.phase===3&&(this.canBeParried=!0),this.shockwaves.spawnFloorWave(this.aabb.x+this.facing*1.5,this.groundY,this.facing,t.sweepSpeed),this.phase>=2&&setTimeout(()=>{this.isDead||this.shockwaves.spawnFloorWave(this.aabb.x+this.facing*2,this.groundY,this.facing,t.sweepSpeed*1.1)},180),this.swordGroup.rotation.z=-.5,at.emit("camera_shake",{amount:.25})},fixedUpdate:e=>{this.stateTimer-=e,this.stateTimer<=0&&(this.attackHitbox.deactivate(),this.canBeParried=!1,this.fsm.changeState("Decide"))}}),this.fsm.addState("Telegraph_Slam",{enter:()=>{const e=this.phase>=2?.85:1;this.stateTimer=.9*e,this.swordGroup.rotation.z=Math.PI*.7},fixedUpdate:e=>{this.stateTimer-=e,this.stateTimer<=0&&this.fsm.changeState("Action_Slam")}}),this.fsm.addState("Action_Slam",{enter:()=>{this.vulnerableTimer=t.slamEmbedDuration,this.isVulnerable=!0,this.attackHitbox.damage=2,this.attackHitbox.activate(),this.swordGroup.rotation.z=-Math.PI*.45,this.swordGroup.position.set(1.2,-.6,.7),at.emit("camera_shake",{amount:.55}),this.inkSplash&&this.inkSplash.spawnHitImpact(this.aabb.x+this.facing*2,this.groundY,1,20,!0),this.phase===3&&this.shockwaves.spawnPuddle(this.aabb.x+this.facing*2,this.groundY)},fixedUpdate:e=>{this.vulnerableTimer-=e;const i=Math.floor(performance.now()/80)%2===0;this.weakMat.color.setHex(i?12069167:1315859),this.vulnerableTimer<=t.slamEmbedDuration-.15&&this.attackHitbox.deactivate(),this.vulnerableTimer<=0&&(this.isVulnerable=!1,this.weakMat.color.setHex(1315859),this.swordGroup.position.set(.6,.2,.7),this.swordGroup.rotation.z=0,this.fsm.changeState("Decide"))}}),this.fsm.addState("Telegraph_Charge",{enter:()=>{this.stateTimer=.5,this.torso.rotation.z=this.facing*.2},fixedUpdate:e=>{this.stateTimer-=e,this.stateTimer<=0&&this.fsm.changeState("Action_Charge")}}),this.fsm.addState("Action_Charge",{enter:()=>{this.stateTimer=.8,this.attackHitbox.damage=1,this.attackHitbox.activate(),this.velocity.x=this.facing*t.chargeSpeed},fixedUpdate:e=>{this.stateTimer-=e,this.aabb.x+=this.velocity.x*e,(this.aabb.x<=this.arenaMinX+2||this.aabb.x>=this.arenaMaxX-2)&&(this.stateTimer=0),this.stateTimer<=0&&(this.attackHitbox.deactivate(),this.velocity.x=0,this.torso.rotation.z=0,this.fsm.changeState("Decide"))}}),this.fsm.addState("CrossbarLeap",{enter:()=>{this.stateTimer=1,this.aabb.y=this.groundY+14,this.velocity.y=0,this.attackHitbox.deactivate(),at.emit("camera_shake",{amount:.2})},fixedUpdate:(e,i)=>{this.stateTimer-=e,i&&(this.aabb.x+=(i.aabb.x-this.aabb.x)*.08),this.stateTimer<=0&&this.fsm.changeState("CrossbarSlam")}}),this.fsm.addState("CrossbarSlam",{enter:()=>{this.velocity.y=-28,this.attackHitbox.damage=2,this.attackHitbox.activate()},fixedUpdate:e=>{this.aabb.y+=this.velocity.y*e,this.aabb.y<=this.groundY+t.height*.5&&(this.aabb.y=this.groundY+t.height*.5,this.velocity.y=0,this.attackHitbox.deactivate(),at.emit("camera_shake",{amount:.6}),this.shockwaves.spawnRingShockwave(this.aabb.x,this.groundY),this.vulnerableTimer=1.2,this.isVulnerable=!0,this.fsm.changeState("CrossbarRecovery"))}}),this.fsm.addState("CrossbarRecovery",{enter:()=>{this.weakMat.color.setHex(12069167)},fixedUpdate:e=>{this.vulnerableTimer-=e;const i=Math.floor(performance.now()/80)%2===0;this.weakMat.color.setHex(i?12069167:1315859),this.vulnerableTimer<=0&&(this.isVulnerable=!1,this.weakMat.color.setHex(1315859),this.fsm.changeState("Decide"))}}),this.fsm.addState("Staggered",{enter:()=>{this.isStaggered=!0,this.isVulnerable=!0,this.staggerTimer=t.staggerDuration,this.attackHitbox.deactivate(),this.weakMat.color.setHex(12069167),this.swordGroup.rotation.z=-Math.PI*.5,this.torso.rotation.z=-.3},fixedUpdate:e=>{this.staggerTimer-=e;const i=Math.floor(performance.now()/70)%2===0;this.weakMat.color.setHex(i?12069167:1315859),this.staggerTimer<=0&&(this.isStaggered=!1,this.isVulnerable=!1,this.weakMat.color.setHex(1315859),this.torso.rotation.z=0,this.swordGroup.rotation.z=0,this.fsm.changeState("Decide"))}}),this.fsm.addState("PhaseTransition",{enter:()=>{this.stateTimer=1.4,this.attackHitbox.deactivate(),at.emit("camera_shake",{amount:.5}),this.inkSplash&&this.inkSplash.spawnParryBurst(this.aabb.x,this.aabb.y,!0)},fixedUpdate:e=>{this.stateTimer-=e,this.stateTimer<=0&&this.fsm.changeState("Decide")}}),this.fsm.addState("Dying",{enter:()=>{this.isDead=!0,this.bodyHurtbox.deactivate(),this.attackHitbox.deactivate(),ae.unregisterEntity(this),this.stateTimer=3,this.inkSplash&&(this.inkSplash.spawnDeathDissolve(this.aabb.x,this.aabb.y,t.width,t.height),this.inkSplash.spawnBackstabBurst(this.aabb.x,this.aabb.y)),at.emit("boss_defeated",{boss:this})},fixedUpdate:e=>{this.stateTimer-=e,this.meshGroup.position.y-=e*.6,this.stateTimer<=0&&(this.meshGroup.visible=!1,this.fsm.changeState("Dead"))}}),this.fsm.addState("Dead",{fixedUpdate:()=>{}})}takeDamage(t=1,e=!1,i=0){if(this.isDead||this.fsm.isInState("Intro")||this.fsm.isInState("PhaseTransition"))return;if(!this.isVulnerable&&!e){this.inkSplash&&this.inkSplash.spawnHitImpact(i,this.aabb.y,this.facing,4,!1),at.emit("boss_clink");return}const n=this.isVulnerable||e?z.BOSS.weakPointMultiplier:1,a=t*n;if(this.hp=Math.max(0,this.hp-a),at.emit("boss_damaged",{hp:this.hp,maxHp:this.maxHp}),this.hp<=0){this.fsm.changeState("Dying");return}const r=this.hp/this.maxHp;this.phase===1&&r<=.6?(this.phase=2,this.fsm.changeState("PhaseTransition")):this.phase===2&&r<=.25&&(this.phase=3,this.fsm.changeState("PhaseTransition"))}stagger(t=2){this.phase===3&&this.canBeParried&&this.fsm.changeState("Staggered")}fixedUpdate(t,e){this.isDead||(this.fsm.fixedUpdate(t,e),this.bodyHurtbox.updatePosition(this.aabb.x,this.aabb.y,this.facing),this.attackHitbox.updatePosition(this.aabb.x,this.aabb.y,this.facing))}render(t){if(this.isDead&&this.fsm.isInState("Dead"))return;this.meshGroup.position.x=this.aabb.x,this.meshGroup.position.y=this.aabb.y,this.meshGroup.scale.x=this.facing;const e=performance.now()*.001;if(this.inkDrops)for(const i of this.inkDrops){const n=(e*i.speed+i.phase)%1;if(n<.35){i.mesh.position.set(i.baseX,i.baseY-n*.15,0);const a=.5+n/.35*.7;i.mesh.scale.set(a,a,a)}else{const a=(n-.35)/.65,r=a*a*1.95;i.mesh.position.set(i.baseX,i.baseY-.05-r,0),i.mesh.scale.set(.85,1.35*(1-a*.35),.85)}}this.bossCape&&(this.bossCape.rotation.z=-.22+Math.sin(e*3.8)*.07,this.bossCape.rotation.y=.18+Math.cos(e*2.9)*.06)}dispose(){this.bodyHurtbox.deactivate(),this.attackHitbox.deactivate(),ae.unregisterEntity(this),this.meshGroup.clear(),this.scene.remove(this.meshGroup)}}class k0{constructor({scene:t,collision:e,inkSplash:i,projectiles:n,x:a=528,y:r=74}){this.scene=t,this.collision=e,this.inkSplash=i,this.projectiles=n,this.name="Lady Shirayuki, the Mist Weaver",this.width=1.3,this.height=3.2,this.groundY=r,this.aabb=new _e(a,r+3,this.width,this.height),this.facing=-1,this.maxHp=32,this.hp=this.maxHp,this.phase=1,this.isDead=!1,this.isActive=!1,this.isVulnerable=!0,this.actionTimer=1.6,this.teleportPoints=[{x:515,y:r+2.8},{x:525,y:r+4.2},{x:535,y:r+2.8}],this.bodyHurtbox=new Le({owner:this,type:"enemy_hurtbox",width:this.width,height:this.height,offsetX:0,offsetY:0}),this.bodyHurtbox.activate(),ae.registerEnemyHurtbox(this.bodyHurtbox),this.meshGroup=new St,this.meshGroup.position.set(this.aabb.x,this.aabb.y,0),this.buildModel(),this.scene.add(this.meshGroup),this.clones=[];for(let o=0;o<2;o++){const h=this.buildCloneMesh();h.visible=!1,this.scene.add(h),this.clones.push({mesh:h,active:!1,angle:o*Math.PI})}}buildModel(){const t=we({inkDark:1710359,inkMid:7039072,inkLight:14209989,darkBias:-.08}),e=we({inkDark:1184272,inkMid:3354925,inkLight:6710107,darkBias:.2}),i=new pe(.75,1.9,12),n=new k(i,e);n.position.y=-.55,Q(n,.032),this.meshGroup.add(n);const a=new Et(.32,.45,1.05,10),r=new k(a,t);r.position.y=.45,Q(r,.03),this.meshGroup.add(r);for(const c of[-.45,.45]){const u=new Gt(.45,.85,.25),f=new k(u,t);f.position.set(.1,.35,c),f.rotation.x=c*.35,Q(f,.026),this.meshGroup.add(f)}const o=new Ye(.24,10,10),h=new k(o,t);h.position.y=1.15,Q(h,.025),this.meshGroup.add(h);const l=new wi(.55,.72,24);this.auraMat=new Nt({color:12069167,side:se,transparent:!0,opacity:.78}),this.auraRing=new k(l,this.auraMat),this.auraRing.position.set(0,.55,-.35),this.meshGroup.add(this.auraRing)}buildCloneMesh(){const t=new St,e=we({inkDark:1315859,inkMid:3881269,inkLight:7236451,darkBias:.25}),i=new k(new pe(.68,2.5,10),e);return Q(i,.028),t.add(i),t}takeDamage(t=1,e=0,i=!1){if(this.isDead)return;const n=i?1.5:1;this.hp=Math.max(0,this.hp-t*n),this.inkSplash&&this.inkSplash.spawnHitImpact(this.aabb.x,this.aabb.y,this.facing,16,!0,!0),at.emit("boss_damaged",{hp:this.hp,maxHp:this.maxHp}),this.hp<=this.maxHp*.55&&this.phase===1&&(this.phase=2,this.summonMirrorClones()),this.hp<=0&&this.die()}summonMirrorClones(){for(const t of this.clones)t.active=!0,t.mesh.visible=!0}fireNeedleFan(t){if(!this.projectiles||!t)return;const e=t.aabb.x-this.aabb.x,i=t.aabb.y-this.aabb.y,n=Math.atan2(i,e),a=this.phase===2?5:3,r=.22;for(let o=0;o<a;o++){const h=(o-(a-1)*.5)*r,l=n+h,c=13.5;this.projectiles.spawnProjectile({x:this.aabb.x+this.facing*.6,y:this.aabb.y+.3,vx:Math.cos(l)*c,vy:Math.sin(l)*c,owner:this,type:"needle",damage:1})}}die(){this.isDead=!0,this.bodyHurtbox.deactivate(),this.meshGroup.visible=!1;for(const t of this.clones)t.mesh.visible=!1;this.inkSplash&&this.inkSplash.spawnDeathDissolve(this.aabb.x,this.aabb.y,2,3.2),at.emit("scroll_unlocked",{scrollId:2,title:"Second Scroll of Reflection",desc:"Deflected projectiles now explode in an AoE vermilion ink burst!"}),at.emit("act2_boss_defeated")}fixedUpdate(t,e){if(this.isDead||!e||(!this.isActive&&e.aabb.x>=504&&e.aabb.x<=558&&(this.isActive=!0,at.emit("boss_intro_start",{name:this.name})),!this.isActive))return;const i=performance.now()*.001;if(this.aabb.y+=Math.sin(i*2.8)*.025,this.facing=e.aabb.x>=this.aabb.x?1:-1,this.actionTimer-=t,this.actionTimer<=0){this.inkSplash&&this.inkSplash.spawnDeathDissolve(this.aabb.x,this.aabb.y,1.2,2.2);const n=this.teleportPoints[Math.floor(Math.random()*this.teleportPoints.length)];this.aabb.x=n.x,this.aabb.y=n.y,this.fireNeedleFan(e),this.actionTimer=this.phase===2?2.1:2.6}for(let n=0;n<this.clones.length;n++){const a=this.clones[n];if(a.active){a.angle+=t*1.8;const r=this.aabb.x+Math.cos(a.angle)*5.5,o=this.aabb.y+Math.sin(a.angle*2)*1.4;a.mesh.position.set(r,o,-.3)}}this.bodyHurtbox.updatePosition(this.aabb.x,this.aabb.y,this.facing)}render(){this.isDead||(this.meshGroup.position.set(this.aabb.x,this.aabb.y,0),this.meshGroup.scale.x=this.facing,this.auraRing&&(this.auraRing.rotation.z=performance.now()*.002))}dispose(){this.bodyHurtbox.deactivate(),ae.unregisterEntity(this),this.scene.remove(this.meshGroup);for(const t of this.clones)this.scene.remove(t.mesh)}}class N0{constructor({scene:t,collision:e,inkSplash:i,shockwaves:n,x:a=805,y:r=98}){this.scene=t,this.collision=e,this.inkSplash=i,this.shockwaves=n,this.name="Lord Sumi-Ou, Warlord of the Iron Brush",this.width=2,this.height=5.2,this.groundY=r,this.aabb=new _e(a,r+this.height*.5,this.width,this.height),this.facing=-1,this.maxHp=48,this.hp=this.maxHp,this.phase=1,this.isDead=!1,this.isActive=!1,this.isVulnerable=!0,this.actionTimer=2,this.inkPillars=[],this.bodyHurtbox=new Le({owner:this,type:"enemy_hurtbox",width:this.width*.9,height:this.height*.95,offsetX:0,offsetY:0}),this.bodyHurtbox.activate(),ae.registerEnemyHurtbox(this.bodyHurtbox),this.attackHitbox=new Le({owner:this,type:"enemy_attack",width:4.8,height:2.2,offsetX:2.4,offsetY:0,damage:1}),ae.registerEnemyAttack(this.attackHitbox),this.meshGroup=new St,this.meshGroup.position.set(this.aabb.x,this.aabb.y,0),this.buildModel(),this.scene.add(this.meshGroup)}buildModel(){const t=-this.height*.5,e=we({inkDark:986894,inkMid:2696996,inkLight:6051920,darkBias:.22}),i=we({inkDark:2492683,inkMid:8002592,inkLight:12069167,hasRedSeal:1});for(const[c,u]of[[-.45,-.25],[.45,.28]]){const f=new Et(.45,.35,1.9,10),d=new k(f,e);d.position.set(u,t+.95,c),Q(d,.036),this.meshGroup.add(d)}const n=new Et(1.05,.85,2,14),a=new k(n,e);a.position.y=.35,Q(a,.045),this.meshGroup.add(a);const r=new Ye(.68,12,10),o=new k(r,e);o.position.set(.05,1.85,0),Q(o,.038),this.meshGroup.add(o);const h=new wi(.45,.92,16,1,0,Math.PI),l=new k(h,i);l.position.set(.25,2.25,0),Q(l,.03),this.meshGroup.add(l),this.leftBrush=this.buildGiantIronBrush(e,i),this.leftBrush.position.set(.6,.35,-.82),this.leftBrush.rotation.z=-.35,this.meshGroup.add(this.leftBrush),this.rightBrush=this.buildGiantIronBrush(e,i),this.rightBrush.position.set(.75,.25,.82),this.rightBrush.rotation.z=-.18,this.meshGroup.add(this.rightBrush),this.calligraphyRing=new St,this.calligraphyRing.position.set(0,.8,-.6);for(let c=0;c<6;c++){const u=c/6*Math.PI*2,f=new Gt(.42,.58,.12),d=new k(f,i);d.position.set(Math.cos(u)*2.2,Math.sin(u)*2.2,0),Q(d,.025),this.calligraphyRing.add(d)}this.calligraphyRing.visible=!1,this.meshGroup.add(this.calligraphyRing)}buildGiantIronBrush(t,e){const i=new St,n=new Et(.11,.13,3.2,10);n.rotateZ(Math.PI/2);const a=new k(n,t);a.position.x=1.2,Q(a,.032),i.add(a);const r=new pe(.36,1.35,10);r.rotateZ(-Math.PI/2);const o=new k(r,e);return o.position.x=3.35,Q(o,.035),i.add(o),i}takeDamage(t=1,e=0,i=!1){if(this.isDead)return;const n=i?1.5:1;this.hp=Math.max(0,this.hp-t*n),this.inkSplash&&this.inkSplash.spawnHitImpact(this.aabb.x,this.aabb.y,this.facing,18,!0,!0),at.emit("boss_damaged",{hp:this.hp,maxHp:this.maxHp}),this.hp<=this.maxHp*.5&&this.phase===1&&(this.phase=2,this.calligraphyRing.visible=!0,at.emit("camera_shake",{amount:.55}),this.shockwaves&&this.shockwaves.spawnRingShockwave(this.aabb.x,this.groundY)),this.hp<=0&&this.die()}summonInkPillar(t){const e=new St;e.position.set(t,this.groundY,0);const i=new Si(1.2,20);i.rotateX(-Math.PI/2);const n=new Nt({color:12069167,side:se,transparent:!0,opacity:.85}),a=new k(i,n);a.position.y=.08,e.add(a);const r=new Et(.75,1.05,8.5,10),o=new Nt({color:1315859}),h=new k(r,o);h.position.y=4.25,h.visible=!1,Q(h,.04,12069167),e.add(h),this.scene.add(e),this.inkPillars.push({group:e,colMesh:h,x:t,timer:0,eruptTime:1,maxTime:1.65,erupted:!1})}die(){this.isDead=!0,this.bodyHurtbox.deactivate(),this.attackHitbox.deactivate(),this.meshGroup.visible=!1,this.inkSplash&&this.inkSplash.spawnDeathDissolve(this.aabb.x,this.aabb.y,2.5,5),at.emit("campaign_sunrise_victory"),at.emit("boss_defeated")}fixedUpdate(t,e){if(!(this.isDead||!e)&&(!this.isActive&&e.aabb.x>=776&&(this.isActive=!0,at.emit("boss_intro_start",{name:this.name})),!!this.isActive)){this.facing=e.aabb.x>=this.aabb.x?1:-1,this.actionTimer-=t,this.actionTimer<=0&&(this.summonInkPillar(e.aabb.x),this.phase===2&&(this.summonInkPillar(e.aabb.x-4.5),this.summonInkPillar(e.aabb.x+4.5)),this.shockwaves&&this.shockwaves.spawnFloorWave(this.aabb.x+this.facing*1.6,this.groundY,this.facing,13.5),this.leftBrush.rotation.z=-.85,this.rightBrush.rotation.z=.45,setTimeout(()=>{this.isDead||(this.leftBrush.rotation.z=-.35,this.rightBrush.rotation.z=-.18)},450),this.actionTimer=this.phase===2?2.2:2.8);for(let i=this.inkPillars.length-1;i>=0;i--){const n=this.inkPillars[i];n.timer+=t,!n.erupted&&n.timer>=n.eruptTime&&(n.erupted=!0,n.colMesh.visible=!0,at.emit("camera_shake",{amount:.25}),Math.abs(e.aabb.x-n.x)<1.1&&e.aabb.y<this.groundY+7.5&&e.takeDamage(1,n.x)),n.timer>=n.maxTime&&(this.scene.remove(n.group),this.inkPillars.splice(i,1))}this.bodyHurtbox.updatePosition(this.aabb.x,this.aabb.y,this.facing),this.attackHitbox.updatePosition(this.aabb.x,this.aabb.y,this.facing)}}render(){this.isDead||(this.meshGroup.position.set(this.aabb.x,this.aabb.y,0),this.meshGroup.scale.x=this.facing,this.calligraphyRing&&this.calligraphyRing.visible&&(this.calligraphyRing.rotation.z=performance.now()*.0025))}dispose(){this.bodyHurtbox.deactivate(),this.attackHitbox.deactivate(),ae.unregisterEntity(this),this.scene.remove(this.meshGroup);for(const t of this.inkPillars)this.scene.remove(t.group)}}const Eh={act2Sanctuary:{solids:[{x:292,y:50,w:12,h:1.2,color:6052695},{x:316,y:51.5,w:22,h:1.8,color:4868163},{x:344,y:55.5,w:18,h:1.4,color:4012855},{x:372,y:59.5,w:16,h:1.4,color:4868163},{x:402,y:63,w:10,h:1.4,color:6052695},{x:432,y:66.5,w:12,h:1.4,color:6052695},{x:464,y:70,w:22,h:1.8,color:4868163},{x:492,y:72,w:14,h:1.4,color:6052695},{x:525,y:72.5,w:38,h:2,color:4012597}],lanterns:[{pivotX:390,pivotY:70,ropeLength:5.5},{pivotX:417,pivotY:73.5,ropeLength:5.5},{pivotX:447,pivotY:76.5,ropeLength:5.5}],checkpoints:[{id:5,x:310,y:52.4},{id:6,x:508,y:73.5}],archers:[{x:348,y:57.2,facing:-1},{x:376,y:61.2,facing:-1},{x:468,y:71.8,facing:-1}],tengus:[{x:392,y:67.5},{x:446,y:72}],pagodas:[{x:344,y:56.2,tiers:3},{x:464,y:70.9,tiers:4},{x:510,y:73.5,tiers:3},{x:540,y:73.5,tiers:3}],willows:[{x:322,y:52.4,lean:1},{x:456,y:70.9,lean:-1},{x:525,y:73.5,lean:1}],boss:{x:530,y:73.5}},act3Foundry:{solids:[{x:558,y:74,w:12,h:1.2,color:4536373},{x:584,y:76,w:26,h:2,color:3353385},{x:622,y:80.5,w:22,h:1.8,color:3024420},{x:658,y:85,w:22,h:1.8,color:3353385},{x:696,y:89.5,w:24,h:1.8,color:3024420},{x:736,y:94,w:24,h:1.8,color:3353385},{x:764,y:96,w:14,h:1.4,color:4010544},{x:800,y:96.5,w:44,h:2.2,color:2695712}],lanterns:[{pivotX:605,pivotY:85,ropeLength:5.5},{pivotX:640,pivotY:89.5,ropeLength:5.5},{pivotX:677,pivotY:94,ropeLength:5.5},{pivotX:716,pivotY:98.5,ropeLength:5.5}],checkpoints:[{id:7,x:575,y:77},{id:8,x:780,y:97.6}],juggernauts:[{x:588,y:78.4,patrolMinX:576,patrolMaxX:594},{x:660,y:87.3,patrolMinX:650,patrolMaxX:666},{x:738,y:96.3,patrolMinX:727,patrolMaxX:745}],archers:[{x:626,y:82.3,facing:-1},{x:700,y:91.3,facing:-1}],tengus:[{x:640,y:86},{x:716,y:95}],forgeWheels:[{x:585,y:81,radius:5.2,speed:.45},{x:658,y:90,radius:5.8,speed:-.55},{x:736,y:99,radius:5.5,speed:.5},{x:786,y:103,radius:6.5,speed:.4},{x:814,y:103,radius:6.5,speed:-.4}],boss:{x:806,y:97.6}}};function F0(s,t,e,i=3,n,a){const r=new St;r.position.set(t,e,-3.5);for(let l=0;l<i;l++){const c=1-l*.18,u=l*3.1,f=new Gt(3.8*c,2.2,2.8*c),d=new k(f,n);d.position.y=u+1.1,Q(d,.035),r.add(d);const g=new pe(4.2*c,1.35,4);g.rotateY(Math.PI/4);const x=new k(g,a);x.position.y=u+2.65,x.scale.set(1.25,1,.85),Q(x,.042),r.add(x)}const o=new Et(.06,.16,2.4,8),h=new k(o,a);return h.position.y=i*3.1+1.2,Q(h,.025),r.add(h),s.add(r),r}function O0(s,t,e,i=1,n,a){const r=new St;r.position.set(t,e,-2.2);const o=new es([new C(0,0,0),new C(i*.4,1.8,0),new C(i*1.1,3.6,0),new C(i*1.6,4.8,0)]),h=new Rn(o,12,.25,7,!1),l=new k(h,n);Q(l,.032),r.add(l);for(let c=0;c<14;c++){const u=i*.4+(c-6)*.36,f=3.6+Math.sin(c)*.65,d=2.2+c%3*.65,g=new Et(.03,.08,d,5),x=new k(g,a);x.position.set(u,f-d*.5,(c%2-.5)*.4),Q(x,.02),r.add(x)}return s.add(r),r}function B0(s,t,e,i=5.5,n){const a=new St;a.position.set(t,e,-4.2);const r=new Gn(i,.38,8,24),o=new k(r,n);Q(o,.045),a.add(o);const h=new Et(1.1,1.1,.7,12);h.rotateX(Math.PI/2);const l=new k(h,n);Q(l,.035),a.add(l);for(let d=0;d<8;d++){const g=d/8*Math.PI*2,x=new Gt(i*1.95,.28,.35),p=new k(x,n);p.rotation.z=g,Q(p,.03),a.add(p)}const c=new Si(.75,16),u=new Nt({color:12069167,side:se}),f=new k(c,u);return f.position.z=.38,a.add(f),s.add(a),a}class G0{constructor({scene:t,collision:e,inkSplash:i}){this.scene=t,this.collision=e,this.inkSplash=i,this.shockwaves=new I0(t),this.solidMeshes=[],this.bambooStalks=[],this.swingingLanterns=[],this.checkpoints=[],this.campaignCheckpoints=[],this.enemies=[],this.shrine=null,this.bridge=null,this.boss=null,this.bossShirayuki=null,this.bossSumiOu=null,this.templeBell=null,this.paintedBridges=[],this.bellRings=[],this.forgeWheels=[],this.projectiles=new D0(t,i),this.stoneMat=we({inkDark:1578773,inkMid:5723213,inkLight:10065291,noiseScale:3.8,darkBias:.04}),this.cliffMat=we({inkDark:1184272,inkMid:3683890,inkLight:7039072,noiseScale:2.5,darkBias:.24}),this.woodMat=we({inkDark:1315601,inkMid:3880238,inkLight:7234906,noiseScale:6,darkBias:.18}),this.pineFoliageMat=we({inkDark:1118480,inkMid:2829608,inkLight:5198409,noiseScale:7.5,darkBias:.3}),this.buildLevel()}buildLevel(){const t=ia,e=new _e(150,t.fogPitY,400,4);this.collision.addTrigger(e,null,{type:"pit"});const i=new Nt({color:new st(z.PALETTE.parchment),transparent:!0,opacity:.9,fog:!1}),n=new k(new si(600,14),i);n.position.set(150,t.fogPitY-6,1.5),this.scene.add(n),this.buildSolids(t.act1.solids),this.buildOneWays(t.act1.oneWays),this.shrine=new C0({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,x:t.act1.shrine.x,y:t.act1.shrine.y}),this.buildCheckpoints(t.act1.checkpoints),this.buildEnemies(t.act1.enemies),this.buildSolids(t.act2.solids),this.buildCheckpoints(t.act2.checkpoints),this.buildEnemies(t.act2.enemies);for(const r of t.act2.bambooStalks){const o=new E0({scene:this.scene,collision:this.collision,x:r.x,y:r.y,height:r.height});this.bambooStalks.push(o)}const a=t.act2.suspensionBridge;this.bridge=new A0({scene:this.scene,collision:this.collision,startX:a.startX,startY:a.startY,totalWidth:a.totalWidth,gapWidth:a.gapWidth});for(const r of t.act2.swingingLanterns){const o=new Qa({scene:this.scene,collision:this.collision,pivotX:r.pivotX,pivotY:r.pivotY,ropeLength:r.ropeLength});this.swingingLanterns.push(o)}this.buildSolids(t.act3.solids),this.buildCheckpoints(t.act3.checkpoints),this.buildToriiGate(t.act3.toriiGate.x,t.act3.toriiGate.y),this.buildPaleMoon(t.act3.toriiGate.x,t.act3.toriiGate.y+8.5),this.buildFloatingScroll(t.act3.scroll.x,t.act3.scroll.y),this.buildScenicEnvironment(),this.boss=new U0({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,shockwaves:this.shockwaves,x:t.act3.toriiGate.x+3.2,y:t.act3.toriiGate.y}),this.buildExtendedCampaignActs()}buildExtendedCampaignActs(){const t=Eh.act2Sanctuary,e=Eh.act3Foundry;this.buildSolids(t.solids);for(const r of t.lanterns)this.swingingLanterns.push(new Qa({scene:this.scene,collision:this.collision,pivotX:r.pivotX,pivotY:r.pivotY,ropeLength:r.ropeLength}));for(const r of t.checkpoints)this.campaignCheckpoints.push(new er({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,x:r.x,y:r.y,id:r.id}));for(const r of t.archers)this.enemies.push(new Th({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,projectiles:this.projectiles,x:r.x,y:r.y,facing:r.facing}));for(const r of t.tengus)this.enemies.push(new ir({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,x:r.x,y:r.y}));for(const r of t.pagodas)F0(this.scene,r.x,r.y,r.tiers,this.woodMat,this.cliffMat);for(const r of t.willows)O0(this.scene,r.x,r.y,r.lean,this.woodMat,this.pineFoliageMat);this.bossShirayuki=new k0({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,projectiles:this.projectiles,x:t.boss.x,y:t.boss.y}),this.buildSolids(e.solids);for(const r of e.lanterns)this.swingingLanterns.push(new Qa({scene:this.scene,collision:this.collision,pivotX:r.pivotX,pivotY:r.pivotY,ropeLength:r.ropeLength}));for(const r of e.checkpoints)this.campaignCheckpoints.push(new er({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,x:r.x,y:r.y,id:r.id}));for(const r of e.juggernauts)this.enemies.push(new L0({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,x:r.x,y:r.y,patrolMinX:r.patrolMinX,patrolMaxX:r.patrolMaxX}));for(const r of e.archers)this.enemies.push(new Th({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,projectiles:this.projectiles,x:r.x,y:r.y,facing:r.facing}));for(const r of e.tengus)this.enemies.push(new ir({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,x:r.x,y:r.y}));for(const r of e.forgeWheels){const o=B0(this.scene,r.x,r.y,r.radius,this.cliffMat);this.forgeWheels.push({mesh:o,speed:r.speed})}const i=new si(310,4.5),n=new Nt({color:12069167,transparent:!0,opacity:.72,fog:!1}),a=new k(i,n);a.position.set(700,68.5,-1.5),this.scene.add(a),this.buildToriiGate(800,97.6),this.bossSumiOu=new N0({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,shockwaves:this.shockwaves,x:e.boss.x,y:e.boss.y})}buildSolids(t){if(t)for(const e of t){const i=new _e(e.x,e.y,e.w,e.h),n=this.collision.addSolid(i,{runnable:e.runnable??!1,crumbling:e.crumbling??!1});if(!e.invisible){const a=new St;a.position.set(e.x,e.y,0);const r=new Gt(e.w,e.h,3),o=e.crumbling?new Se({color:e.color,roughness:.85}):this.stoneMat,h=new k(r,o);if(h.castShadow=!0,h.receiveShadow=!0,Q(h,.045),a.add(h),!e.crumbling&&e.w>=3){const c=Math.min(28,Math.max(2,Math.floor(e.w/2.2))),u=e.w/c,f=e.h*.5;for(let d=0;d<c;d++){const g=-e.w*.5+u*(d+.5),x=.24+d*7%3*.05,p=3.18+d*13%3*.12,m=new Gt(u*.94,x,p),y=new k(m,this.stoneMat);if(y.position.set(g,f-x*.35,0),Q(y,.036),a.add(y),(d+Math.floor(e.x))%3===0){const _=new pe(.18,.42,4),b=new k(_,this.pineFoliageMat);b.position.set(g+.2,f+.16,1.35),b.rotation.z=(d%2-.5)*.35,a.add(b)}}if(e.h<=4.5){const d=new Gt(e.w*.9,.72,2.7),g=new k(d,this.stoneMat);g.position.set(0,-e.h*.5-.36,-.05),Q(g,.032),a.add(g);const x=Math.min(14,Math.max(3,Math.floor(e.w/2.6))),p=e.w*.82/x;for(let m=0;m<x;m++){const y=-e.w*.41+p*(m+.5),_=1-Math.abs(y)/(e.w*.5),b=.85+_*.85+m*11%3*.18,P=new ro(b,0),E=new k(P,this.cliffMat);E.position.set(y,-e.h*.5-.85-_*.55,(m%2-.5)*.3),E.scale.set(1.35,.95,1.05),E.rotation.set(m*.7,m*1.1,m*.4),Q(E,.035),a.add(E)}}}this.scene.add(a),this.solidMeshes.push({mesh:h,group:a,solidRef:n,originalColor:e.color})}}}buildOneWays(t){if(t)for(const e of t){const i=new _e(e.x,e.y,e.w,e.h);this.collision.addOneWay(i);const n=new St;n.position.set(e.x,e.y,0);const a=new Gt(e.w,e.h,2.4),r=new k(a,this.woodMat);r.castShadow=!0,Q(r,.038),n.add(r);const o=new Gt(.22,1.1,2.1);for(const h of[-1,1]){const l=new k(o,this.woodMat);l.position.set(h*(e.w*.38),-.55,0),l.rotation.z=h*.42,Q(l,.028),n.add(l)}this.scene.add(n)}}buildPineTree(t,e,i=-1.8,n=1,a=1){const r=new St;r.position.set(t,e,i),r.scale.set(n,n,n);const o=new es([new C(0,0,0),new C(a*.25,1.15,.08),new C(a*.85,2.35,-.1),new C(a*1.45,3.45,.05),new C(a*1.15,4.35,0)]),h=new Rn(o,14,.22,7,!1),l=new k(h,this.woodMat);Q(l,.032),r.add(l);const c=new pe(.45,.75,7),u=new k(c,this.woodMat);u.position.set(0,.3,0),Q(u,.032),r.add(u);const f=[[new C(a*.35,1.6,0),new C(a*1.35,1.95,.15),new C(a*2.15,2.15,.1)],[new C(a*.75,2.3,0),new C(-a*.25,2.75,-.15),new C(-a*.95,3.05,0)],[new C(a*1.25,3.1,0),new C(a*2.15,3.45,-.1),new C(a*2.75,3.65,.05)]];for(const g of f){const x=new es(g),p=new Rn(x,8,.11,6,!1),m=new k(p,this.woodMat);Q(m,.025),r.add(m)}const d=[{x:a*2.1,y:2.2,z:.1,r:.65,count:5},{x:-a*.9,y:3.1,z:0,r:.62,count:5},{x:a*2.7,y:3.7,z:.05,r:.68,count:5},{x:a*1.2,y:4.45,z:0,r:.82,count:7}];for(const g of d)for(let x=0;x<g.count;x++){const p=x/g.count*Math.PI*2,m=x===0?0:g.r*.62,y=g.x+Math.cos(p)*m,_=g.y+Math.sin(p)*(m*.28)+(x===0?.14:0),b=g.z+Math.sin(p)*.22,P=g.r*(x===0?.85:.62),E=new oo(P,1);E.scale(1.35,.42,.95);const T=new k(E,this.pineFoliageMat);T.position.set(y,_,b),T.rotation.y=x*.9,Q(T,.028),r.add(T)}return this.scene.add(r),r}buildScenicEnvironment(){this.buildPineTree(3.5,0,-1.8,1.15,1),this.buildPineTree(17.5,2,-2,.95,-1),this.buildPineTree(36,8,-1.8,1.1,1),this.buildPineTree(52.5,10,-2.2,1.25,1),this.buildPineTree(61.5,10,-2.2,1.15,-1),this.buildPineTree(91,15,-2,1.2,-1),this.buildPineTree(110,15,-2,1.3,1),this.buildPineTree(137,17.5,-1.8,1.1,1),this.buildPineTree(163,17.5,-1.8,1.15,-1),this.buildTempleBellPavilion(183,21),this.buildPineTree(191,21,-2,1.25,-1),this.buildPineTree(218,39,-2,1.15,1),this.buildPineTree(230,45,-2,1.2,-1),this.buildPineTree(243.5,48,-1.6,1.55,1),this.buildPineTree(276.5,48,-1.6,1.55,-1);for(let t=-7;t<=7;t++){const e=new Gt(1.9,.35,3.6),i=new k(e,this.stoneMat);i.position.set(260+t*2.1,47.92,0),i.rotation.z=(t%2===0?1:-1)*.03,Q(i,.035),this.scene.add(i)}}buildTempleBellPavilion(t,e){const i=new St;i.position.set(t,e,-1.8);const n=new Et(.22,.26,5.2,8);for(const l of[-2.4,2.4]){const c=new k(n,this.woodMat);c.position.set(l,2.6,0),Q(c,.035),i.add(c)}const a=new pe(4.2,1.6,4);a.rotateY(Math.PI/4);const r=new k(a,this.cliffMat);r.position.set(0,5.8,0),r.scale.set(1.25,1,.75),Q(r,.048),i.add(r),this.templeBell=new St,this.templeBell.position.set(0,4.6,0);const o=new Et(.52,.72,1.55,12),h=new k(o,this.cliffMat);h.position.y=-.9,Q(h,.04),this.templeBell.add(h),i.add(this.templeBell),this.scene.add(i)}buildCheckpoints(t){if(t)for(const e of t){const i=new er({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,x:e.x,y:e.y,id:e.id});this.checkpoints.push(i)}}buildEnemies(t){if(t){for(const e of t)if(e.type==="ashigaru"){const i=new P0({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,x:e.x,y:e.y,facing:e.facing??-1,isStationary:e.isStationary??!1,patrolMinX:e.patrolMinX??e.x-4,patrolMaxX:e.patrolMaxX??e.x+4});this.enemies.push(i)}else if(e.type==="tengu"){const i=new ir({scene:this.scene,collision:this.collision,inkSplash:this.inkSplash,x:e.x,y:e.y,facing:e.facing??-1});this.enemies.push(i)}}}buildToriiGate(t,e){const i=new St;i.position.set(t,e-2,-3.2);const n=new Et(.68,.86,14.5,14),a=new Et(1.05,1.25,1.1,12);for(const g of[-1,1]){const x=g*6.4,p=new k(n,this.woodMat);p.position.set(x,7.2,0),p.rotation.z=-g*.025,p.castShadow=!0,Q(p,.055),i.add(p);const m=new k(a,this.cliffMat);m.position.set(x,.55,0),Q(m,.048),i.add(m)}const r=new Gt(16.5,.82,.95),o=new k(r,this.woodMat);o.position.set(0,10.8,0),Q(o,.048),i.add(o);const h=new Gt(17.8,.72,1.15),l=new k(h,this.woodMat);l.position.set(0,13.4,0),Q(l,.048),i.add(l);const c=new Gt(14,1.05,1.45),u=new k(c,this.cliffMat);u.position.set(0,14.15,0),Q(u,.055),i.add(u);for(const g of[-1,1]){const x=new Gt(4.2,1.05,1.45),p=new k(x,this.cliffMat);p.position.set(g*8.4,14.45,0),p.rotation.z=g*.16,Q(p,.055),i.add(p)}const f=new Gt(1.55,2.5,.85),d=new k(f,this.cliffMat);d.position.set(0,12.1,.15),Q(d,.045),i.add(d),this.scene.add(i)}buildPaleMoon(t,e){const i=new St;i.position.set(t,e,-14);const n=new Si(14.5,40),a=new Nt({color:16250091,transparent:!0,opacity:.45,depthWrite:!1,fog:!1});i.add(new k(n,a));const r=new Si(11.2,40),o=new Nt({color:16645109,transparent:!0,opacity:.96,depthWrite:!1,fog:!1});this.moon=new k(r,o),i.add(this.moon),this.scene.add(i)}buildFloatingScroll(t,e){this.scrollGroup=new St,this.scrollGroup.position.set(t,e,0);const i=new Et(.25,.25,1.6,12),n=new Se({color:new st(z.PALETTE.rimHighlight),roughness:.6}),a=new k(i,n);a.rotateZ(Math.PI/2),Q(a,.032),this.scrollGroup.add(a);const r=new Gt(.3,.8,.55),o=new Nt({color:new st(z.PALETTE.vermilion)}),h=new k(r,o);this.scrollGroup.add(h),this.scrollLight=new ua(12069167,2,8),this.scrollGroup.add(this.scrollLight),this.scene.add(this.scrollGroup)}paintInkBridge(t,e,i=1){if(this.paintedBridges.length>=3){const m=this.paintedBridges.shift();this.collision.removeSolid(m.solidRef),this.scene.remove(m.group)}const n=4.6,a=.44,r=t+i*2.5,o=e-.55,h=new _e(r,o,n,a),l=this.collision.addSolid(h,{runnable:!1,crumbling:!1}),c=new St;c.position.set(r,o,0);const u=new es([new C(-n*.5,-.05,0),new C(-n*.2,.08,.06),new C(n*.2,-.04,-.06),new C(n*.5,.06,0)]),f=new Rn(u,16,.26,8,!1);f.scale(1,.72,3.8);const d=new k(f,this.cliffMat);Q(d,.035),c.add(d);const g=new Gt(.42,.42,.42),x=new Nt({color:12069167}),p=new k(g,x);p.position.set(i*(n*.46),.14,.65),c.add(p),this.inkSplash&&this.inkSplash.spawnHitImpact(r,o,i,14,!0),this.scene.add(c),this.paintedBridges.push({group:c,solidRef:l,timer:7.5,maxTime:7.5,x:r,y:o})}triggerBellResonance(t){const e=t?t.aabb.x:183,i=t?t.aabb.y:23;this.templeBell&&(this.templeBell.rotation.z=.45);const n=new St;n.position.set(e,i,.4);const a=new wi(.85,1.05,36),r=new Nt({color:12069167,side:se,transparent:!0,opacity:.9}),o=new wi(.55,.68,36),h=new Nt({color:1315859,side:se,transparent:!0,opacity:.85});n.add(new k(a,r)),n.add(new k(o,h)),this.scene.add(n),this.bellRings.push({group:n,r1Mat:r,r2Mat:h,timer:.75,maxTime:.75}),t&&(t.hasAirDash=!0);for(const l of this.enemies)!l.isDead&&Math.hypot(l.aabb.x-e,l.aabb.y-i)<15&&typeof l.onParried=="function"&&l.onParried(!0)}fixedUpdate(t,e){for(const i of this.solidMeshes)if(i.solidRef.crumbling){const n=i.group||i.mesh;i.solidRef.crumbleState==="collapsing"?(n.visible=!0,n.position.y=i.solidRef.aabb.y-(1-i.solidRef.crumbleTimer/.6)*.2,i.mesh.material&&i.mesh.material.color&&i.mesh.material.color.setHex(12069167)):i.solidRef.crumbleState==="collapsed"?n.visible=!1:(n.visible=!0,n.position.y=i.solidRef.aabb.y,i.mesh.material&&i.mesh.material.color&&i.mesh.material.color.setHex(i.originalColor))}this.shrine&&this.shrine.fixedUpdate(t);for(const i of this.checkpoints)i.fixedUpdate(t);for(const i of this.campaignCheckpoints)i.fixedUpdate(t);for(const i of this.bambooStalks)i.fixedUpdate(t,e);for(const i of this.swingingLanterns)i.fixedUpdate(t,e);for(const i of this.enemies)i.fixedUpdate(t,e);this.shockwaves.update(t),this.boss&&this.boss.fixedUpdate(t,e),this.bossShirayuki&&this.bossShirayuki.fixedUpdate(t,e),this.bossSumiOu&&this.bossSumiOu.fixedUpdate(t,e),this.projectiles&&this.projectiles.fixedUpdate(t,e,this.enemies,[this.boss,this.bossShirayuki,this.bossSumiOu]);for(const i of this.forgeWheels)i.mesh.rotation.z+=i.speed*t;this.templeBell&&(this.templeBell.rotation.z=Math.sin(performance.now()*.0018)*.09);for(let i=this.paintedBridges.length-1;i>=0;i--){const n=this.paintedBridges[i];n.timer-=t,n.timer<1.2&&(n.group.scale.y=Math.max(.1,n.timer/1.2)),n.timer<=0&&(this.collision.removeSolid(n.solidRef),this.scene.remove(n.group),this.paintedBridges.splice(i,1))}for(let i=this.bellRings.length-1;i>=0;i--){const n=this.bellRings[i];n.timer-=t;const a=1-n.timer/n.maxTime,r=1+a*12;n.group.scale.set(r,r,1),n.r1Mat.opacity=Math.max(0,(1-a)*.9),n.r2Mat.opacity=Math.max(0,(1-a)*.85),n.timer<=0&&(this.scene.remove(n.group),this.bellRings.splice(i,1))}if(this.scrollGroup){const i=performance.now()*.003;this.scrollGroup.position.y=ia.act3.scroll.y+Math.sin(i)*.35,this.scrollGroup.rotation.y=i*.8,this.scrollLight.intensity=1.8+Math.sin(i*2)*.6}}render(t){for(const e of this.enemies)e.render(t);this.boss&&this.boss.render(t),this.bossShirayuki&&this.bossShirayuki.render(t),this.bossSumiOu&&this.bossSumiOu.render(t)}dispose(){for(const t of this.solidMeshes)this.collision.removeSolid(t.solidRef),this.scene.remove(t.group||t.mesh);for(const t of this.bambooStalks)t.dispose();for(const t of this.swingingLanterns)t.dispose();for(const t of this.checkpoints)t.dispose();for(const t of this.enemies)t.dispose();this.shrine&&this.shrine.dispose(),this.bridge&&this.bridge.dispose(),this.boss&&this.boss.dispose(),this.shockwaves&&this.shockwaves.dispose()}}class z0{constructor(){this.ctx=null,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.initialized=!1,this.isMuted=!1,this.windNode=null,this.rainNode=null,this.shamisenScale=[329.63,349.23,440,493.88,523.25,659.25],this.ambientMelodyTimer=4,this.setupEventListeners()}init(){if(!this.initialized)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=z.AUDIO.masterVolume??.8,this.masterGain.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=z.AUDIO.musicVolume??.65,this.musicGain.connect(this.masterGain),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=z.AUDIO.sfxVolume??.85,this.sfxGain.connect(this.masterGain),this.startAmbientWind(),this.startAmbientRain(),this.initialized=!0,console.log("AudioEngine: WebAudio synthesized successfully.")}catch(t){console.warn("AudioEngine: WebAudio not supported or blocked",t)}}ensureContext(){this.initialized||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playShamisenPluck(t=440,e=1.8,i=.8){if(!this.ctx||this.ctx.state!=="running")return;const n=this.ctx.sampleRate,a=Math.round(n/t),r=this.ctx.createBuffer(1,a,n),o=r.getChannelData(0);for(let g=0;g<a;g++)o[g]=(Math.random()*2-1)*.9;const h=this.ctx.createBufferSource();h.buffer=r;const l=this.ctx.createDelay();l.delayTime.value=1/t;const c=this.ctx.createGain();c.gain.value=.965;const u=this.ctx.createBiquadFilter();u.type="lowpass",u.frequency.value=t*3.5;const f=this.ctx.createGain(),d=this.ctx.currentTime;f.gain.setValueAtTime(i*.7,d),f.gain.exponentialRampToValueAtTime(.001,d+e),h.connect(l),l.connect(u),u.connect(c),c.connect(l),u.connect(f),f.connect(this.musicGain),h.start(d),h.stop(d+1/t)}playTaikoDrum(t=!1){if(!this.ctx||this.ctx.state!=="running")return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),n=this.ctx.createGain(),a=t?140:180,r=t?35:45;i.frequency.setValueAtTime(a,e),i.frequency.exponentialRampToValueAtTime(r,e+.35),n.gain.setValueAtTime(t?1:.75,e),n.gain.exponentialRampToValueAtTime(.001,e+.65),i.connect(n),n.connect(this.sfxGain),i.start(e),i.stop(e+.7),this.playNoiseBurst(.12,350,.4)}playKatanaSlash(t=!1){!this.ctx||this.ctx.state!=="running"||this.playNoiseBurst(t?.22:.15,t?1200:1800,.45)}playParryPing(t=!0){if(!this.ctx||this.ctx.state!=="running")return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),n=this.ctx.createOscillator(),a=this.ctx.createGain();i.frequency.value=t?2600:2100,n.frequency.value=t?5200:4200,a.gain.setValueAtTime(.65,e),a.gain.exponentialRampToValueAtTime(.001,e+(t?.75:.4)),i.connect(a),n.connect(a),a.connect(this.sfxGain),i.start(e),n.start(e),i.stop(e+.8),n.stop(e+.8)}playInkSplash(){this.playNoiseBurst(.18,600,.4)}playDashWhoosh(){if(!this.ctx||this.ctx.state!=="running")return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.frequency.setValueAtTime(600,t),e.frequency.exponentialRampToValueAtTime(150,t+.16),i.gain.setValueAtTime(.4,t),i.gain.exponentialRampToValueAtTime(.001,t+.18),e.connect(i),i.connect(this.sfxGain),e.start(t),e.stop(t+.2)}playNoiseBurst(t,e,i=.5){if(!this.ctx||this.ctx.state!=="running")return;const n=this.ctx.sampleRate*t,a=this.ctx.createBuffer(1,n,this.ctx.sampleRate),r=a.getChannelData(0);for(let u=0;u<n;u++)r[u]=Math.random()*2-1;const o=this.ctx.createBufferSource();o.buffer=a;const h=this.ctx.createBiquadFilter();h.type="bandpass",h.frequency.value=e,h.Q.value=1.8;const l=this.ctx.createGain(),c=this.ctx.currentTime;l.gain.setValueAtTime(i,c),l.gain.exponentialRampToValueAtTime(.001,c+t),o.connect(h),h.connect(l),l.connect(this.sfxGain),o.start(c)}startAmbientWind(){if(!this.ctx)return;const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=e.getChannelData(0);for(let r=0;r<t;r++)i[r]=Math.random()*2-1;const n=this.ctx.createBufferSource();n.buffer=e,n.loop=!0;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=350,this.windGain=this.ctx.createGain(),this.windGain.gain.value=.18,n.connect(a),a.connect(this.windGain),this.windGain.connect(this.masterGain),n.start()}startAmbientRain(){if(!this.ctx)return;const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=e.getChannelData(0);for(let r=0;r<t;r++)i[r]=Math.random()*2-1;const n=this.ctx.createBufferSource();n.buffer=e,n.loop=!0;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=1200,a.Q.value=.8,this.rainGain=this.ctx.createGain(),this.rainGain.gain.value=0,n.connect(a),a.connect(this.rainGain),this.rainGain.connect(this.masterGain),n.start()}setRainIntensity(t=0){this.rainGain&&this.ctx&&this.rainGain.gain.setTargetAtTime(t*.28,this.ctx.currentTime,.4)}playBambooFlute(t=440,e=2.8){if(!this.ctx||this.ctx.state!=="running")return;const i=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="triangle",n.frequency.setValueAtTime(t*.98,i),n.frequency.exponentialRampToValueAtTime(t,i+.25);const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=t*2.2;const r=this.ctx.createGain();r.gain.setValueAtTime(.001,i),r.gain.linearRampToValueAtTime(.18,i+.45),r.gain.exponentialRampToValueAtTime(.001,i+e),n.connect(a),a.connect(r),r.connect(this.musicGain),n.start(i),n.stop(i+e)}update(t,e){if(this.initialized&&(e>=105&&e<=232?this.setRainIntensity(1):this.setRainIntensity(0),this.ambientMelodyTimer-=t,this.ambientMelodyTimer<=0)){this.ambientMelodyTimer=6.5+Math.random()*7.5;const i=this.shamisenScale[Math.floor(Math.random()*this.shamisenScale.length)];this.playShamisenPluck(i,2.2,.65),Math.random()>.45&&setTimeout(()=>this.playBambooFlute(i,2.6),450)}}setupEventListeners(){at.on("player_attack_swing",({isHeavy:e})=>this.playKatanaSlash(e)),at.on("player:dash",()=>this.playDashWhoosh()),at.on("parry_perfect",()=>this.playParryPing(!0)),at.on("boss_clink",()=>this.playParryPing(!1)),at.on("checkpoint_activated",()=>{this.playShamisenPluck(523.25,2.5,.9),setTimeout(()=>this.playShamisenPluck(659.25,2.8,.8),220)}),at.on("shrine_unlocked",()=>{this.playTaikoDrum(!0),setTimeout(()=>this.playShamisenPluck(440,3,1),300)}),at.on("boss_intro_start",()=>{this.playTaikoDrum(!0),setTimeout(()=>this.playTaikoDrum(!0),350)}),at.on("lightning_flash",()=>{this.playNoiseBurst(.8,180,.85)}),at.on("lantern_grapple",()=>{this.playShamisenPluck(659.25,1.8,.95)}),at.on("scroll_unlocked",()=>{this.playTaikoDrum(!0),setTimeout(()=>this.playBambooFlute(523.25,3.2),250)}),at.on("campaign_sunrise_victory",()=>{this.playTaikoDrum(!0),setTimeout(()=>this.playShamisenPluck(523.25,3.5,1),200),setTimeout(()=>this.playBambooFlute(659.25,4),500)});const t=()=>{this.ensureContext(),window.removeEventListener("keydown",t),window.removeEventListener("mousedown",t)};window.addEventListener("keydown",t),window.addEventListener("mousedown",t)}}const ss=[{id:1,num:"I",act:"Act I",title:"The Climb",kanji:"霧の登坂",minX:-20,maxX:45,spawnX:2,spawnY:2.5,dash:!1},{id:2,num:"II",act:"Act I",title:"The Broken Pass",kanji:"断崖の道",minX:45,maxX:102,spawnX:49,spawnY:12.5,dash:!0},{id:3,num:"III",act:"Act I",title:"Temple of Silent Bells",kanji:"無音の鐘寺",minX:102,maxX:238,spawnX:172,spawnY:23,dash:!0},{id:4,num:"IV",act:"Act I",title:"Boss: Kurogane",kanji:"黒鉄・門番",minX:238,maxX:295,spawnX:255,spawnY:50,dash:!0},{id:5,num:"V",act:"Act II",title:"Silent Sanctuary",kanji:"静寂の伽藍",minX:295,maxX:502,spawnX:312,spawnY:53,dash:!0},{id:6,num:"VI",act:"Act II",title:"Boss: Lady Shirayuki",kanji:"白雪・霧織",minX:502,maxX:558,spawnX:512,spawnY:74.5,dash:!0},{id:7,num:"VII",act:"Act III",title:"Crimson Foundry",kanji:"朱の鍛冶屋",minX:558,maxX:774,spawnX:576,spawnY:78,dash:!0},{id:8,num:"VIII",act:"Act III",title:"Final Boss: Sumi-Ou",kanji:"墨王・鉄筆",minX:774,maxX:999,spawnX:786,spawnY:98.5,dash:!0}];class H0{constructor(t=null){this.onSelectChapter=t,this.currentChapterId=0,this.speedrunStartTime=performance.now(),this.container=document.createElement("div"),this.container.id="kuro-hud",this.container.style.cssText=`
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
      top: 20px;
      left: 28px;
      display: flex;
      align-items: center;
      gap: 12px;
    `,this.inkDrops=[];for(let n=0;n<z.COMBAT.maxHealth;n++){const a=document.createElement("div");a.style.cssText=`
        width: 18px;
        height: 26px;
        background-color: #141413;
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        transform: rotate(45deg);
        box-shadow: 0 2px 6px rgba(20,20,19,0.35);
        transition: transform 0.25s ease, opacity 0.25s ease, background-color 0.25s ease;
      `,this.healthContainer.appendChild(a),this.inkDrops.push(a)}this.timerBadge=document.createElement("div"),this.timerBadge.style.cssText=`
      margin-left: 14px;
      padding: 3px 10px;
      background: rgba(20, 20, 19, 0.85);
      color: #f5f1e6;
      font-family: monospace;
      font-size: 12px;
      font-weight: 700;
      border-left: 3px solid #b8292f;
      letter-spacing: 1px;
    `,this.timerBadge.innerText="00:00.00",this.healthContainer.appendChild(this.timerBadge),this.container.appendChild(this.healthContainer),this.dashMeter=document.createElement("div"),this.dashMeter.style.cssText=`
      position: absolute;
      top: 56px;
      left: 28px;
      font-size: 11px;
      letter-spacing: 1.4px;
      color: #2b2926;
      text-transform: uppercase;
      font-weight: 700;
    `,this.dashMeter.innerText="INK STEP: READY · DOUBLE JUMP: READY",this.container.appendChild(this.dashMeter),this.chapterNav=document.createElement("div"),this.chapterNav.style.cssText=`
      position: absolute;
      top: 18px;
      right: 22px;
      display: flex;
      gap: 5px;
      pointer-events: auto;
      flex-wrap: wrap;
      justify-content: flex-end;
      max-width: 68vw;
    `,this.chapterBtns=[],ss.forEach(n=>{const a=document.createElement("button");a.innerText=`${n.num}. ${n.title}`,a.title=`${n.act}: ${n.kanji} — Click to jump`,a.style.cssText=`
        background: rgba(234, 229, 217, 0.88);
        color: #141413;
        border: 1px solid rgba(20, 20, 19, 0.48);
        padding: 4px 8px;
        font-family: 'Cinzel', serif;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.5px;
        cursor: pointer;
        border-radius: 3px;
        transition: all 0.18s ease;
        box-shadow: 0 2px 5px rgba(20,20,19,0.12);
      `,a.addEventListener("click",()=>{this.onSelectChapter&&this.onSelectChapter(n),a.blur()}),this.chapterNav.appendChild(a),this.chapterBtns.push({id:n.id,btn:a})}),this.container.appendChild(this.chapterNav),this.chapterBanner=document.createElement("div"),this.chapterBanner.style.cssText=`
      position: absolute;
      top: 19%;
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
      font-size: 13.5px;
      font-weight: 700;
      color: #b8292f;
      letter-spacing: 3.5px;
      text-transform: uppercase;
      margin-top: 4px;
    `,this.chapterBanner.appendChild(this.chapterKanji),this.chapterBanner.appendChild(this.chapterTitleText),this.container.appendChild(this.chapterBanner),this.grappleBadge=document.createElement("div"),this.grappleBadge.style.cssText=`
      position: absolute;
      top: 32%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(184, 41, 47, 0.92);
      color: #f5f1e6;
      padding: 5px 14px;
      border-radius: 20px;
      font-size: 11.5px;
      font-weight: 700;
      letter-spacing: 1.5px;
      display: none;
      box-shadow: 0 0 12px rgba(184,41,47,0.6);
    `,this.grappleBadge.innerText="🏮 [SHIFT / L] LANTERN GRAPPLE DASH",this.container.appendChild(this.grappleBadge),this.controlsHint=document.createElement("div"),this.controlsHint.style.cssText=`
      position: absolute;
      bottom: 16px;
      left: 24px;
      font-size: 10.5px;
      color: #2b2926;
      background: rgba(234, 229, 217, 0.88);
      border-left: 3px solid #b8292f;
      padding: 6px 12px;
      letter-spacing: 0.5px;
      font-weight: 600;
    `,this.controlsHint.innerHTML='<b>A/D</b> Move · <b>SPACE×2</b> Double Jump · <b>J/Click</b> Katana · <b>K/R-Click</b> Parry/Reflect · <b>L/Shift</b> Ink Dash & Grapple · <span style="color:#b8292f;"><b>E</b> Paint Bridge · <b>F</b> Bell Wave · <b>V</b> 3D Cam</span>',this.container.appendChild(this.controlsHint),this.powerBar=document.createElement("div"),this.powerBar.style.cssText=`
      position: absolute;
      bottom: 14px;
      right: 24px;
      display: flex;
      gap: 8px;
      pointer-events: auto;
    `;const e=(n,a)=>{const r=document.createElement("button");r.innerHTML=n,r.style.cssText=`
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
      `,r.addEventListener("click",()=>{window.dispatchEvent(new KeyboardEvent("keydown",{code:a})),r.blur()}),this.powerBar.appendChild(r)};e("🖌️ Paint Bridge [E]","KeyE"),e("🔔 Bell Wave [F]","KeyF"),e("🎥 3D Perspective [V]","KeyV"),this.container.appendChild(this.powerBar),this.bossBarContainer=document.createElement("div"),this.bossBarContainer.style.cssText=`
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
    `,this.barFrame.appendChild(this.bossFill),this.bossBarContainer.appendChild(this.barFrame),this.container.appendChild(this.bossBarContainer),(document.getElementById("ui-root")||document.body).appendChild(this.container),this.bannerTimeout=null,this.setupListeners()}showChapterBanner(t){this.chapterKanji.innerText=t.kanji,this.chapterTitleText.innerText=`${t.act} · Stage ${t.num} — ${t.title}`,this.chapterBanner.style.opacity="1",this.bannerTimeout&&clearTimeout(this.bannerTimeout),this.bannerTimeout=setTimeout(()=>{this.chapterBanner.style.opacity="0"},3200)}setupListeners(){at.on("boss_intro_start",({name:t})=>{this.bossBarContainer.style.display="flex",this.bossTitle.innerText=t,this.bossFill.style.width="100%"}),at.on("boss_damaged",({hp:t,maxHp:e})=>{const i=Math.max(0,t/e*100);this.bossFill.style.width=`${i}%`}),at.on("scroll_unlocked",({title:t,desc:e})=>{this.chapterKanji.innerText="秘伝之巻",this.chapterTitleText.innerText=`${t} — ${e}`,this.chapterBanner.style.opacity="1",this.bannerTimeout&&clearTimeout(this.bannerTimeout),this.bannerTimeout=setTimeout(()=>{this.chapterBanner.style.opacity="0"},4e3)}),at.on("act2_boss_defeated",()=>{setTimeout(()=>{this.bossBarContainer.style.display="none"},1500)}),at.on("boss_defeated",()=>{setTimeout(()=>{this.bossBarContainer.style.display="none"},2e3)})}update(t){if(!t)return;const e=(performance.now()-this.speedrunStartTime)*.001,i=Math.floor(e/60).toString().padStart(2,"0"),n=(e%60).toFixed(2).padStart(5,"0");this.timerBadge.innerText=`${i}:${n}`;const a=t.health;for(let c=0;c<this.inkDrops.length;c++){const u=this.inkDrops[c];c<a?(u.style.opacity="1.0",u.style.transform="rotate(45deg) scale(1.0)",u.style.backgroundColor="#141413"):(u.style.opacity="0.25",u.style.transform="rotate(45deg) scale(0.75)",u.style.backgroundColor="#a8a59c")}t.targetGrappleLantern?this.grappleBadge.style.display="block":this.grappleBadge.style.display="none";const r=t.aabb.x;let o=ss[0];for(const c of ss)if(r>=c.minX&&r<c.maxX){o=c;break}if(o.id!==this.currentChapterId){this.currentChapterId=o.id,this.showChapterBanner(o);for(const c of this.chapterBtns)c.id===o.id?(c.btn.style.background="#141413",c.btn.style.color="#f5f1e6",c.btn.style.borderColor="#b8292f"):(c.btn.style.background="rgba(234, 229, 217, 0.88)",c.btn.style.color="#141413",c.btn.style.borderColor="rgba(20, 20, 19, 0.48)")}const h=t.hasInkStepUnlocked?t.dashCooldownTimer>0?"INK STEP: CHARGING":"INK STEP: READY":"INK STEP: SHRINE AHEAD",l=t.hasDoubleJump?"2× JUMP: READY":"2× JUMP: USED";this.dashMeter.innerText=`${o.act.toUpperCase()} (${o.title.toUpperCase()})  ·  ${h}  ·  ${l}`}dispose(){this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}class V0{constructor(){this.container=document.createElement("div"),this.container.id="dialogue-card",this.container.style.cssText=`
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
    `,this.container.appendChild(this.body),(document.getElementById("ui-root")||document.body).appendChild(this.container),this.hideTimeout=null,at.on("shrine_unlocked",({title:e,description:i})=>{this.show(e,i,4500)})}show(t,e,i=3500){this.hideTimeout&&clearTimeout(this.hideTimeout),this.title.innerText=t,this.body.innerText=e,this.container.style.opacity="1",this.container.style.transform="translateX(-50%) translateY(0)",this.hideTimeout=setTimeout(()=>{this.hide()},i)}hide(){this.container.style.opacity="0",this.container.style.transform="translateX(-50%) translateY(-20px)"}dispose(){this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}class W0{constructor(t,e){this.loop=t,this.audioEngine=e,this.isOpen=!1,this.container=document.createElement("div"),this.container.id="pause-menu",this.container.style.cssText=`
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
    `,this.card.appendChild(n);const a=document.createElement("div");a.style.cssText="width: 100%; display: flex; flex-direction: column; gap: 8px; font-size: 12px;",a.innerHTML=`
      <div style="display:flex; justify-content:space-between;">
        <span>Master Volume</span>
        <input type="range" id="vol-master" min="0" max="1" step="0.05" value="0.8" style="width: 160px;">
      </div>
    `,this.card.appendChild(a),(document.getElementById("ui-root")||document.body).appendChild(this.container),window.addEventListener("keydown",o=>{o.code==="Escape"&&this.toggle()}),setTimeout(()=>{const o=document.getElementById("vol-master");o&&this.audioEngine&&o.addEventListener("input",h=>{this.audioEngine.masterGain&&(this.audioEngine.masterGain.gain.value=parseFloat(h.target.value))})},100)}toggle(){this.isOpen=!this.isOpen,this.container.style.display=this.isOpen?"flex":"none",this.isOpen?this.loop.pause():this.loop.resume()}dispose(){this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}class X0{constructor(){this.container=document.createElement("div"),this.container.id="end-card",this.container.style.cssText=`
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
    `,this.replayBtn.innerText="PLAY AGAIN",this.replayBtn.addEventListener("click",()=>{na.reset(),window.location.reload()}),this.wrapper.appendChild(this.replayBtn),(document.getElementById("ui-root")||document.body).appendChild(this.container),at.on("boss_defeated",()=>{setTimeout(()=>this.show(),4e3)})}show(){this.container.style.opacity="1",this.container.style.pointerEvents="auto",setTimeout(()=>{this.seal.style.opacity="1",this.seal.style.transform="scale(1.0) rotate(-6deg)",at.emit("camera_shake",{amount:.3})},800)}dispose(){this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}class Y0{constructor(t,e){this.audioEngine=t,this.onComplete=e,this.canSkip=!0,this.completed=!1,this.container=document.createElement("div"),this.container.id="intro-cinematic",this.container.style.cssText=`
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
    `,this.skipHint.innerText="Press any key to begin",this.textContainer.appendChild(this.skipHint),this.container.appendChild(this.textContainer),(document.getElementById("ui-root")||document.body).appendChild(this.container),this.startAnimation(),this.skipHandler=n=>{this.canSkip&&!this.completed&&this.finish()},window.addEventListener("keydown",this.skipHandler),window.addEventListener("mousedown",this.skipHandler)}startAnimation(){let t=performance.now(),e=0,i=!1,n=0;const a=r=>{if(this.completed)return;const o=(r-t)/1e3,h=this.ctx,l=this.canvas.width,c=this.canvas.height;if(h.clearRect(0,0,l,c),o<1.4?(e=o/1.4*(c*.55),h.fillStyle="#141413",h.beginPath(),h.ellipse(l*.5,e,6,9,0,0,Math.PI*2),h.fill()):i?(n=Math.min(140,(o-1.4)*85),h.fillStyle="#141413",h.beginPath(),h.arc(l*.5,c*.55,n,0,Math.PI*2),h.fill(),h.beginPath(),h.moveTo(l*.5-n*1.5,c*.55+n*.5),h.lineTo(l*.5,c*.55-n*1.2),h.lineTo(l*.5+n*1.5,c*.55+n*.5),h.closePath(),h.fill()):(i=!0,this.audioEngine&&(this.audioEngine.ensureContext(),this.audioEngine.playShamisenPluck(329.63,2.5,1)),at.emit("camera_shake",{amount:.25})),o>=2&&(this.textContainer.style.opacity="1",this.canSkip=!0,this.skipHint.style.opacity="0.8"),o>=7.5){this.finish();return}requestAnimationFrame(a)};requestAnimationFrame(a)}finish(){if(!this.completed){this.completed=!0;try{const t=na.load();t.hasSeenIntro=!0,na.save(t)}catch{}this.container.style.opacity="0",setTimeout(()=>{this.dispose(),this.onComplete&&this.onComplete()},1200)}}dispose(){window.removeEventListener("keydown",this.skipHandler),window.removeEventListener("mousedown",this.skipHandler),this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}const q0=document.getElementById("game-canvas"),nr=document.getElementById("debug-overlay"),ci=new km({canvas:q0,antialias:!0,alpha:!1,powerPreference:"high-performance"});ci.setSize(window.innerWidth,window.innerHeight);ci.setPixelRatio(Math.min(window.devicePixelRatio,2));ci.setClearColor(new st(z.PALETTE.parchment));ci.shadowMap.enabled=!0;ci.shadowMap.type=Ch;const Fe=new Nm;Fe.background=new st(z.PALETTE.parchment);Fe.fog=new so(new st(z.PALETTE.parchment).getHex(),.004);const bi=new Xe(z.CAMERA.fov,window.innerWidth/window.innerHeight,.1,1e3);bi.position.set(0,4,z.CAMERA.distanceZ);bi.rotation.x=-Ue.degToRad(z.CAMERA.tiltDeg);const $i=new URLSearchParams(window.location.search),Fn=new h0(bi,$i.get("cam")==="3d"?1:0),Yr=new s0(16776176,.78);Fe.add(Yr);const zn=new n0(16772565,.88);zn.position.set(12,28,16);zn.castShadow=!0;zn.shadow.mapSize.width=1024;zn.shadow.mapSize.height=1024;zn.shadow.bias=-.001;Fe.add(zn);const sa=new r0,co=new c0,fc=new _0(Fe),pc=new y0(Fe),lo=new b0(Fe),K0=new M0(Fe),j0=new S0(Fe),J0=new w0(Fe),Z0=new T0(ci,Fe,bi),uo=new z0;at.on("lightning_flash",()=>{Z0.flashLightning()});at.on("campaign_sunrise_victory",()=>{Fe.background=new st(16774107),ci.setClearColor(new st(16774107)),Yr.color.setHex(16770229),Yr.intensity=1.05});let sn;const os=new G0({scene:Fe,collision:co,inkSplash:lo});let Ii=ia.spawn.x,Ui=ia.spawn.y,ji=!1;const sr=parseInt($i.get("chapter")||"0",10);if(sr>=1&&sr<=ss.length){const s=ss[sr-1];Ii=s.spawnX,Ui=s.spawnY,ji=s.dash}else $i.get("act")==="2"?(Ii=312,Ui=53,ji=!0):$i.get("act")==="3"?(Ii=576,Ui=78,ji=!0):$i.get("boss")==="1"?(Ii=255,Ui=50,ji=!0):$i.get("boss")==="2"?(Ii=512,Ui=74.5,ji=!0):$i.get("boss")==="3"&&(Ii=786,Ui=98.5,ji=!0);const zt=new v0({scene:Fe,collision:co,input:sa,afterimages:fc,ripples:pc,inkSplash:lo,loop:null,spawnX:Ii,spawnY:Ui});zt.hasInkStepUnlocked=ji;zt.swingingLanternsRef=os.swingingLanterns;Fn.snapTo(Ii,Ui);const $0=new H0(s=>{zt.aabb.x=s.spawnX,zt.aabb.y=s.spawnY,zt.velocity.x=0,zt.velocity.y=0,zt.hasInkStepUnlocked=s.dash,zt.hasAirDash=!0,zt.hasDoubleJump=!0,zt.setCheckpoint(s.spawnX,s.spawnY),zt.health=zt.maxHealth,Fn.snapTo(s.spawnX,s.spawnY)});new V0;new X0;window.addEventListener("keydown",s=>{s.code==="KeyE"?(os.paintInkBridge(zt.aabb.x,zt.aabb.y,zt.facing),at.emit("camera_shake",{amount:.14})):s.code==="KeyF"?(os.triggerBellResonance(zt),at.emit("camera_shake",{amount:.32})):s.code==="KeyV"&&Fn.cyclePerspective()});window.addEventListener("resize",()=>{bi.aspect=window.innerWidth/window.innerHeight,bi.updateProjectionMatrix(),ci.setSize(window.innerWidth,window.innerHeight),ci.setPixelRatio(Math.min(window.devicePixelRatio,2))});document.addEventListener("visibilitychange",()=>{document.hidden?(sn.pause(),sa.onBlur()):sn.resume()});function Q0(s){sa.update(s),co.update(s),zt.fixedUpdate(s),os.fixedUpdate(s,zt),Fn.fixedUpdate(s,zt),K0.update(s,zt.aabb.x,zt.aabb.y),j0.update(s,zt.aabb.x,zt.aabb.y),uo.update(s,zt.aabb.x),$0.update(zt),ae.checkCollisions({onPlayerHitEnemy:(t,e)=>{zt.combat.onHitEnemy(e)},onEnemyHitPlayer:(t,e)=>{zt.combat.takeDamage(t.damage,t.owner.aabb.x)},onParrySuccess:(t,e,i)=>{zt.combat.onParrySuccess(t,i)}}),fc.update(s),pc.update(s),lo.update(s),sa.postStep()}function tg(s){if(zt.render(s),os.render(s),Fn.render(zt),J0.update(bi.position.x,bi.position.y),ci.render(Fe,bi),nr&&window.location.search.includes("debug")){nr.style.display="block";const t="● ".repeat(zt.health)+"○ ".repeat(Math.max(0,z.COMBAT.maxHealth-zt.health));nr.innerHTML=`
      <strong>KURO: Kiri-no-Saka [3-Act Campaign]</strong><br>
      HP: <span style="color:#b8292f;">${t}</span> | State: <span style="color:#ffd43b;">${zt.fsm.currentStateName}</span><br>
      Pos: (${zt.aabb.x.toFixed(1)}, ${zt.aabb.y.toFixed(1)}) | Cam Mode: ${Fn.mode}
    `}}sn=new a0({onFixedUpdate:Q0,onRender:tg});zt.loop=sn;zt.combat.loop=sn;new W0(sn,uo);const eg=window.location.search.includes("skipIntro")||window.location.search.includes("debug");eg||new Y0(uo,()=>{console.log("Intro complete.")});sn.start();console.log("KURO: Complete 3-Act Campaign active.");
