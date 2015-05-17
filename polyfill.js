/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.1.1/LICENSE
 */
(function(t,e){"use strict";if(typeof define==="function"&&define.amd){define(e)}else if(typeof exports==="object"){module.exports=e()}else{t.returnExports=e()}})(this,function(){var t=Array.prototype;var e=Object.prototype;var r=Function.prototype;var n=String.prototype;var i=Number.prototype;var a=t.slice;var o=t.splice;var u=t.push;var l=t.unshift;var f=r.call;var s=e.toString;var c=Array.isArray||function gt(t){return s.call(t)==="[object Array]"};var p=typeof Symbol==="function"&&typeof Symbol.toStringTag==="symbol";var h;var v=Function.prototype.toString,g=function yt(t){try{v.call(t);return true}catch(e){return false}},y="[object Function]",d="[object GeneratorFunction]";h=function dt(t){if(typeof t!=="function"){return false}if(p){return g(t)}var e=s.call(t);return e===y||e===d};var m;var b=RegExp.prototype.exec,w=function mt(t){try{b.call(t);return true}catch(e){return false}},T="[object RegExp]";m=function bt(t){if(typeof t!=="object"){return false}return p?w(t):s.call(t)===T};var x;var O=String.prototype.valueOf,j=function wt(t){try{O.call(t);return true}catch(e){return false}},S="[object String]";x=function Tt(t){if(typeof t==="string"){return true}if(typeof t!=="object"){return false}return p?j(t):s.call(t)===S};var E=function xt(t){var e=s.call(t);var r=e==="[object Arguments]";if(!r){r=!c(t)&&t!==null&&typeof t==="object"&&typeof t.length==="number"&&t.length>=0&&h(t.callee)}return r};var N=function(t){var e=Object.defineProperty&&function(){try{Object.defineProperty({},"x",{});return true}catch(t){return false}}();var r;if(e){r=function(t,e,r,n){if(!n&&e in t){return}Object.defineProperty(t,e,{configurable:true,enumerable:false,writable:true,value:r})}}else{r=function(t,e,r,n){if(!n&&e in t){return}t[e]=r}}return function n(e,i,a){for(var o in i){if(t.call(i,o)){r(e,o,i[o],a)}}}}(e.hasOwnProperty);function I(t){var e=typeof t;return t===null||e==="undefined"||e==="boolean"||e==="number"||e==="string"}var D={ToInteger:function Ot(t){var e=+t;if(e!==e){e=0}else if(e!==0&&e!==1/0&&e!==-(1/0)){e=(e>0||-1)*Math.floor(Math.abs(e))}return e},ToPrimitive:function jt(t){var e,r,n;if(I(t)){return t}r=t.valueOf;if(h(r)){e=r.call(t);if(I(e)){return e}}n=t.toString;if(h(n)){e=n.call(t);if(I(e)){return e}}throw new TypeError},ToObject:function(t){if(t==null){throw new TypeError("can't convert "+t+" to object")}return Object(t)},ToUint32:function St(t){return t>>>0}};var M=function Et(){};N(r,{bind:function Nt(t){var e=this;if(!h(e)){throw new TypeError("Function.prototype.bind called on incompatible "+e)}var r=a.call(arguments,1);var n;var i=function(){if(this instanceof n){var i=e.apply(this,r.concat(a.call(arguments)));if(Object(i)===i){return i}return this}else{return e.apply(t,r.concat(a.call(arguments)))}};var o=Math.max(0,e.length-r.length);var u=[];for(var l=0;l<o;l++){u.push("$"+l)}n=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this, arguments); }")(i);if(e.prototype){M.prototype=e.prototype;n.prototype=new M;M.prototype=null}return n}});var F=f.bind(e.hasOwnProperty);var R=function(){var t=[1,2];var e=t.splice();return t.length===2&&c(e)&&e.length===0}();N(t,{splice:function It(t,e){if(arguments.length===0){return[]}else{return o.apply(this,arguments)}}},!R);var U=function(){var e={};t.splice.call(e,0,0,1);return e.length===1}();N(t,{splice:function Dt(t,e){if(arguments.length===0){return[]}var r=arguments;this.length=Math.max(D.ToInteger(this.length),0);if(arguments.length>0&&typeof e!=="number"){r=a.call(arguments);if(r.length<2){r.push(this.length-t)}else{r[1]=D.ToInteger(e)}}return o.apply(this,r)}},!U);var k=[].unshift(0)!==1;N(t,{unshift:function(){l.apply(this,arguments);return this.length}},k);N(Array,{isArray:c});var A=Object("a");var C=A[0]!=="a"||!(0 in A);var P=function Mt(t){var e=true;var r=true;if(t){t.call("foo",function(t,r,n){if(typeof n!=="object"){e=false}});t.call([1],function(){"use strict";r=typeof this==="string"},"x")}return!!t&&e&&r};N(t,{forEach:function Ft(t){var e=D.ToObject(this),r=C&&x(this)?this.split(""):e,n=arguments[1],i=-1,a=r.length>>>0;if(!h(t)){throw new TypeError}while(++i<a){if(i in r){t.call(n,r[i],i,e)}}}},!P(t.forEach));N(t,{map:function Rt(t){var e=D.ToObject(this),r=C&&x(this)?this.split(""):e,n=r.length>>>0,i=Array(n),a=arguments[1];if(!h(t)){throw new TypeError(t+" is not a function")}for(var o=0;o<n;o++){if(o in r){i[o]=t.call(a,r[o],o,e)}}return i}},!P(t.map));N(t,{filter:function Ut(t){var e=D.ToObject(this),r=C&&x(this)?this.split(""):e,n=r.length>>>0,i=[],a,o=arguments[1];if(!h(t)){throw new TypeError(t+" is not a function")}for(var u=0;u<n;u++){if(u in r){a=r[u];if(t.call(o,a,u,e)){i.push(a)}}}return i}},!P(t.filter));N(t,{every:function kt(t){var e=D.ToObject(this),r=C&&x(this)?this.split(""):e,n=r.length>>>0,i=arguments[1];if(!h(t)){throw new TypeError(t+" is not a function")}for(var a=0;a<n;a++){if(a in r&&!t.call(i,r[a],a,e)){return false}}return true}},!P(t.every));N(t,{some:function At(t){var e=D.ToObject(this),r=C&&x(this)?this.split(""):e,n=r.length>>>0,i=arguments[1];if(!h(t)){throw new TypeError(t+" is not a function")}for(var a=0;a<n;a++){if(a in r&&t.call(i,r[a],a,e)){return true}}return false}},!P(t.some));var Z=false;if(t.reduce){Z=typeof t.reduce.call("es5",function(t,e,r,n){return n})==="object"}N(t,{reduce:function Ct(t){var e=D.ToObject(this),r=C&&x(this)?this.split(""):e,n=r.length>>>0;if(!h(t)){throw new TypeError(t+" is not a function")}if(!n&&arguments.length===1){throw new TypeError("reduce of empty array with no initial value")}var i=0;var a;if(arguments.length>=2){a=arguments[1]}else{do{if(i in r){a=r[i++];break}if(++i>=n){throw new TypeError("reduce of empty array with no initial value")}}while(true)}for(;i<n;i++){if(i in r){a=t.call(void 0,a,r[i],i,e)}}return a}},!Z);var J=false;if(t.reduceRight){J=typeof t.reduceRight.call("es5",function(t,e,r,n){return n})==="object"}N(t,{reduceRight:function Pt(t){var e=D.ToObject(this),r=C&&x(this)?this.split(""):e,n=r.length>>>0;if(!h(t)){throw new TypeError(t+" is not a function")}if(!n&&arguments.length===1){throw new TypeError("reduceRight of empty array with no initial value")}var i,a=n-1;if(arguments.length>=2){i=arguments[1]}else{do{if(a in r){i=r[a--];break}if(--a<0){throw new TypeError("reduceRight of empty array with no initial value")}}while(true)}if(a<0){return i}do{if(a in r){i=t.call(void 0,i,r[a],a,e)}}while(a--);return i}},!J);var z=Array.prototype.indexOf&&[0,1].indexOf(1,2)!==-1;N(t,{indexOf:function Zt(t){var e=C&&x(this)?this.split(""):D.ToObject(this),r=e.length>>>0;if(!r){return-1}var n=0;if(arguments.length>1){n=D.ToInteger(arguments[1])}n=n>=0?n:Math.max(0,r+n);for(;n<r;n++){if(n in e&&e[n]===t){return n}}return-1}},z);var $=Array.prototype.lastIndexOf&&[0,1].lastIndexOf(0,-3)!==-1;N(t,{lastIndexOf:function Jt(t){var e=C&&x(this)?this.split(""):D.ToObject(this),r=e.length>>>0;if(!r){return-1}var n=r-1;if(arguments.length>1){n=Math.min(n,D.ToInteger(arguments[1]))}n=n>=0?n:r-Math.abs(n);for(;n>=0;n--){if(n in e&&t===e[n]){return n}}return-1}},$);var B=!{toString:null}.propertyIsEnumerable("toString"),G=function(){}.propertyIsEnumerable("prototype"),H=!F("x","0"),L=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],X=L.length;N(Object,{keys:function zt(t){var e=h(t),r=E(t),n=t!==null&&typeof t==="object",i=n&&x(t);if(!n&&!e&&!r){throw new TypeError("Object.keys called on a non-object")}var a=[];var o=G&&e;if(i&&H||r){for(var u=0;u<t.length;++u){a.push(String(u))}}if(!r){for(var l in t){if(!(o&&l==="prototype")&&F(t,l)){a.push(String(l))}}}if(B){var f=t.constructor,s=f&&f.prototype===t;for(var c=0;c<X;c++){var p=L[c];if(!(s&&p==="constructor")&&F(t,p)){a.push(p)}}}return a}});var Y=Object.keys&&function(){return Object.keys(arguments).length===2}(1,2);var q=Object.keys;N(Object,{keys:function $t(e){if(E(e)){return q(t.slice.call(e))}else{return q(e)}}},!Y);var K=-621987552e5;var Q="-000001";var V=Date.prototype.toISOString&&new Date(K).toISOString().indexOf(Q)===-1;N(Date.prototype,{toISOString:function Bt(){var t,e,r,n,i;if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")}n=this.getUTCFullYear();i=this.getUTCMonth();n+=Math.floor(i/12);i=(i%12+12)%12;t=[i+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];n=(n<0?"-":n>9999?"+":"")+("00000"+Math.abs(n)).slice(0<=n&&n<=9999?-4:-6);e=t.length;while(e--){r=t[e];if(r<10){t[e]="0"+r}}return n+"-"+t.slice(0,2).join("-")+"T"+t.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}},V);var W=function(){try{return Date.prototype.toJSON&&new Date(NaN).toJSON()===null&&new Date(K).toJSON().indexOf(Q)!==-1&&Date.prototype.toJSON.call({toISOString:function(){return true}})}catch(t){return false}}();if(!W){Date.prototype.toJSON=function Gt(t){var e=Object(this);var r=D.ToPrimitive(e);if(typeof r==="number"&&!isFinite(r)){return null}var n=e.toISOString;if(!h(n)){throw new TypeError("toISOString property is not callable")}return n.call(e)}}var _=Date.parse("+033658-09-27T01:46:40.000Z")===1e15;var tt=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"));var et=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));if(!Date.parse||et||tt||!_){Date=function(t){function e(r,n,i,a,o,u,l){var f=arguments.length;if(this instanceof t){var s=f===1&&String(r)===r?new t(e.parse(r)):f>=7?new t(r,n,i,a,o,u,l):f>=6?new t(r,n,i,a,o,u):f>=5?new t(r,n,i,a,o):f>=4?new t(r,n,i,a):f>=3?new t(r,n,i):f>=2?new t(r,n):f>=1?new t(r):new t;N(s,{constructor:e},true);return s}return t.apply(this,arguments)}var r=new RegExp("^"+"(\\d{4}|[+-]\\d{6})"+"(?:-(\\d{2})"+"(?:-(\\d{2})"+"(?:"+"T(\\d{2})"+":(\\d{2})"+"(?:"+":(\\d{2})"+"(?:(\\.\\d{1,}))?"+")?"+"("+"Z|"+"(?:"+"([-+])"+"(\\d{2})"+":(\\d{2})"+")"+")?)?)?)?"+"$");var n=[0,31,59,90,120,151,181,212,243,273,304,334,365];function i(t,e){var r=e>1?1:0;return n[e]+Math.floor((t-1969+r)/4)-Math.floor((t-1901+r)/100)+Math.floor((t-1601+r)/400)+365*(t-1970)}function a(e){return Number(new t(1970,0,1,0,0,0,e))}for(var o in t){e[o]=t[o]}e.now=t.now;e.UTC=t.UTC;e.prototype=t.prototype;e.prototype.constructor=e;e.parse=function u(e){var n=r.exec(e);if(n){var o=Number(n[1]),u=Number(n[2]||1)-1,l=Number(n[3]||1)-1,f=Number(n[4]||0),s=Number(n[5]||0),c=Number(n[6]||0),p=Math.floor(Number(n[7]||0)*1e3),h=Boolean(n[4]&&!n[8]),v=n[9]==="-"?1:-1,g=Number(n[10]||0),y=Number(n[11]||0),d;if(f<(s>0||c>0||p>0?24:25)&&s<60&&c<60&&p<1e3&&u>-1&&u<12&&g<24&&y<60&&l>-1&&l<i(o,u+1)-i(o,u)){d=((i(o,u)+l)*24+f+g*v)*60;d=((d+s+y*v)*60+c)*1e3+p;if(h){d=a(d)}if(-864e13<=d&&d<=864e13){return d}}return NaN}return t.parse.apply(this,arguments)};return e}(Date)}if(!Date.now){Date.now=function Ht(){return(new Date).getTime()}}var rt=i.toFixed&&(8e-5.toFixed(3)!=="0.000"||.9.toFixed(0)!=="1"||1.255.toFixed(2)!=="1.25"||0xde0b6b3a7640080.toFixed(0)!=="1000000000000000128");var nt={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function Lt(t,e){var r=-1;var n=e;while(++r<nt.size){n+=t*nt.data[r];nt.data[r]=n%nt.base;n=Math.floor(n/nt.base)}},divide:function Xt(t){var e=nt.size,r=0;while(--e>=0){r+=nt.data[e];nt.data[e]=Math.floor(r/t);r=r%t*nt.base}},numToString:function Yt(){var t=nt.size;var e="";while(--t>=0){if(e!==""||t===0||nt.data[t]!==0){var r=String(nt.data[t]);if(e===""){e=r}else{e+="0000000".slice(0,7-r.length)+r}}}return e},pow:function qt(t,e,r){return e===0?r:e%2===1?qt(t,e-1,r*t):qt(t*t,e/2,r)},log:function Kt(t){var e=0;var r=t;while(r>=4096){e+=12;r/=4096}while(r>=2){e+=1;r/=2}return e}};N(i,{toFixed:function Qt(t){var e,r,n,i,a,o,u,l;e=Number(t);e=e!==e?0:Math.floor(e);if(e<0||e>20){throw new RangeError("Number.toFixed called with invalid number of decimals")}r=Number(this);if(r!==r){return"NaN"}if(r<=-1e21||r>=1e21){return String(r)}n="";if(r<0){n="-";r=-r}i="0";if(r>1e-21){a=nt.log(r*nt.pow(2,69,1))-69;o=a<0?r*nt.pow(2,-a,1):r/nt.pow(2,a,1);o*=4503599627370496;a=52-a;if(a>0){nt.multiply(0,o);u=e;while(u>=7){nt.multiply(1e7,0);u-=7}nt.multiply(nt.pow(10,u,1),0);u=a-1;while(u>=23){nt.divide(1<<23);u-=23}nt.divide(1<<u);nt.multiply(1,1);nt.divide(2);i=nt.numToString()}else{nt.multiply(0,o);nt.multiply(1<<-a,0);i=nt.numToString()+"0.00000000000000000000".slice(2,2+e)}}if(e>0){l=i.length;if(l<=e){i=n+"0.0000000000000000000".slice(0,e-l+2)+i}else{i=n+i.slice(0,l-e)+"."+i.slice(l-e)}}else{i=n+i}return i}},rt);var it=n.split;if("ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||"tesst".split(/(s)*/)[1]==="t"||"test".split(/(?:)/,-1).length!==4||"".split(/.?/).length||".".split(/()()/).length>1){(function(){var t=typeof/()??/.exec("")[1]==="undefined";n.split=function(e,r){var n=this;if(typeof e==="undefined"&&r===0){return[]}if(!m(e)){return it.call(this,e,r)}var i=[];var a=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.extended?"x":"")+(e.sticky?"y":""),o=0,l,f,s,c;var p=new RegExp(e.source,a+"g");n+="";if(!t){l=new RegExp("^"+p.source+"$(?!\\s)",a)}var h=typeof r==="undefined"?-1>>>0:D.ToUint32(r);f=p.exec(n);while(f){s=f.index+f[0].length;if(s>o){i.push(n.slice(o,f.index));if(!t&&f.length>1){f[0].replace(l,function(){for(var t=1;t<arguments.length-2;t++){if(typeof arguments[t]==="undefined"){f[t]=void 0}}})}if(f.length>1&&f.index<n.length){u.apply(i,f.slice(1))}c=f[0].length;o=s;if(i.length>=h){break}}if(p.lastIndex===f.index){p.lastIndex++}f=p.exec(n)}if(o===n.length){if(c||!p.test("")){i.push("")}}else{i.push(n.slice(o))}return i.length>h?i.slice(0,h):i}})()}else if("0".split(void 0,0).length){n.split=function Vt(t,e){if(typeof t==="undefined"&&e===0){return[]}return it.call(this,t,e)}}var at=n.replace;var ot=function(){var t=[];"x".replace(/x(.)?/g,function(e,r){t.push(r)});return t.length===1&&typeof t[0]==="undefined"}();if(!ot){n.replace=function Wt(t,e){var r=h(e);var n=m(t)&&/\)[*?]/.test(t.source);if(!r||!n){return at.call(this,t,e)}else{var i=function(r){var n=arguments.length;var i=t.lastIndex;t.lastIndex=0;var a=t.exec(r)||[];t.lastIndex=i;a.push(arguments[n-2],arguments[n-1]);return e.apply(this,a)};return at.call(this,t,i)}}}var ut=n.substr;var lt="".substr&&"0b".substr(-1)!=="b";N(n,{substr:function _t(t,e){var r=t;if(t<0){r=Math.max(this.length+t,0)}return ut.call(this,r,e)}},lt);var ft="	\n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003"+"\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028"+"\u2029\ufeff";var st="\u200b";var ct="["+ft+"]";var pt=new RegExp("^"+ct+ct+"*");var ht=new RegExp(ct+ct+"*$");var vt=n.trim&&(ft.trim()||!st.trim());N(n,{trim:function te(){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}return String(this).replace(pt,"").replace(ht,"")}},vt);if(parseInt(ft+"08")!==8||parseInt(ft+"0x16")!==22){parseInt=function(t){var e=/^0[xX]/;return function r(n,i){var a=String(n).trim();var o=Number(i)||(e.test(a)?16:10);return t(a,o)}}(parseInt)}});
//# sourceMappingURL=es5-shim.map;
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.1.1/LICENSE
 */
(function(e,t){"use strict";if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.returnExports=t()}})(this,function(){var e=Function.prototype.call;var t=Object.prototype;var r=e.bind(t.hasOwnProperty);var n;var o;var c;var i;var f=r(t,"__defineGetter__");if(f){n=e.bind(t.__defineGetter__);o=e.bind(t.__defineSetter__);c=e.bind(t.__lookupGetter__);i=e.bind(t.__lookupSetter__)}if(!Object.getPrototypeOf){Object.getPrototypeOf=function E(e){var r=e.__proto__;if(r||r===null){return r}else if(e.constructor){return e.constructor.prototype}else{return t}}}function l(e){try{e.sentinel=0;return Object.getOwnPropertyDescriptor(e,"sentinel").value===0}catch(t){return false}}if(Object.defineProperty){var u=l({});var a=typeof document==="undefined"||l(document.createElement("div"));if(!a||!u){var p=Object.getOwnPropertyDescriptor}}if(!Object.getOwnPropertyDescriptor||p){var b="Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor=function g(e,n){if(typeof e!=="object"&&typeof e!=="function"||e===null){throw new TypeError(b+e)}if(p){try{return p.call(Object,e,n)}catch(o){}}var l;if(!r(e,n)){return l}l={enumerable:true,configurable:true};if(f){var u=e.__proto__;var a=e!==t;if(a){e.__proto__=t}var s=c(e,n);var O=i(e,n);if(a){e.__proto__=u}if(s||O){if(s){l.get=s}if(O){l.set=O}return l}}l.value=e[n];l.writable=true;return l}}if(!Object.getOwnPropertyNames){Object.getOwnPropertyNames=function T(e){return Object.keys(e)}}if(!Object.create){var s;var O=!({__proto__:null}instanceof Object);if(O||typeof document==="undefined"){s=function(){return{__proto__:null}}}else{s=function(){var e=document.createElement("iframe");var t=document.body||document.documentElement;e.style.display="none";t.appendChild(e);e.src="javascript:";var r=e.contentWindow.Object.prototype;t.removeChild(e);e=null;delete r.constructor;delete r.hasOwnProperty;delete r.propertyIsEnumerable;delete r.isPrototypeOf;delete r.toLocaleString;delete r.toString;delete r.valueOf;r.__proto__=null;function n(){}n.prototype=r;s=function(){return new n};return new n}}Object.create=function x(e,t){var r;function n(){}if(e===null){r=s()}else{if(typeof e!=="object"&&typeof e!=="function"){throw new TypeError("Object prototype may only be an Object or null")}n.prototype=e;r=new n;r.__proto__=e}if(t!==void 0){Object.defineProperties(r,t)}return r}}function j(e){try{Object.defineProperty(e,"sentinel",{});return"sentinel"in e}catch(t){return false}}if(Object.defineProperty){var d=j({});var y=typeof document==="undefined"||j(document.createElement("div"));if(!d||!y){var _=Object.defineProperty,v=Object.defineProperties}}if(!Object.defineProperty||_){var w="Property description must be an object: ";var P="Object.defineProperty called on non-object: ";var h="getters & setters can not be defined on this javascript engine";Object.defineProperty=function z(e,r,l){if(typeof e!=="object"&&typeof e!=="function"||e===null){throw new TypeError(P+e)}if(typeof l!=="object"&&typeof l!=="function"||l===null){throw new TypeError(w+l)}if(_){try{return _.call(Object,e,r,l)}catch(u){}}if("value"in l){if(f&&(c(e,r)||i(e,r))){var a=e.__proto__;e.__proto__=t;delete e[r];e[r]=l.value;e.__proto__=a}else{e[r]=l.value}}else{if(!f){throw new TypeError(h)}if("get"in l){n(e,r,l.get)}if("set"in l){o(e,r,l.set)}}return e}}if(!Object.defineProperties||v){Object.defineProperties=function S(e,t){if(v){try{return v.call(Object,e,t)}catch(n){}}for(var o in t){if(r(t,o)&&o!=="__proto__"){Object.defineProperty(e,o,t[o])}}return e}}if(!Object.seal){Object.seal=function D(e){if(Object(e)!==e){throw new TypeError("Object.seal can only be called on Objects.")}return e}}if(!Object.freeze){Object.freeze=function F(e){if(Object(e)!==e){throw new TypeError("Object.freeze can only be called on Objects.")}return e}}try{Object.freeze(function(){})}catch(m){Object.freeze=function k(e){return function t(r){if(typeof r==="function"){return r}else{return e(r)}}}(Object.freeze)}if(!Object.preventExtensions){Object.preventExtensions=function G(e){if(Object(e)!==e){throw new TypeError("Object.preventExtensions can only be called on Objects.")}return e}}if(!Object.isSealed){Object.isSealed=function C(e){if(Object(e)!==e){throw new TypeError("Object.isSealed can only be called on Objects.")}return false}}if(!Object.isFrozen){Object.isFrozen=function N(e){if(Object(e)!==e){throw new TypeError("Object.isFrozen can only be called on Objects.")}return false}}if(!Object.isExtensible){Object.isExtensible=function I(e){if(Object(e)!==e){throw new TypeError("Object.isExtensible can only be called on Objects.")}var t="";while(r(e,t)){t+="?"}e[t]=true;var n=r(e,t);delete e[t];return n}}});
//# sourceMappingURL=es5-sham.map;
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   2.1.1
 */

(function(){"use strict";function lib$es6$promise$utils$$objectOrFunction(x){return typeof x==="function"||typeof x==="object"&&x!==null}function lib$es6$promise$utils$$isFunction(x){return typeof x==="function"}function lib$es6$promise$utils$$isMaybeThenable(x){return typeof x==="object"&&x!==null}var lib$es6$promise$utils$$_isArray;if(!Array.isArray){lib$es6$promise$utils$$_isArray=function(x){return Object.prototype.toString.call(x)==="[object Array]"}}else{lib$es6$promise$utils$$_isArray=Array.isArray}var lib$es6$promise$utils$$isArray=lib$es6$promise$utils$$_isArray;var lib$es6$promise$asap$$len=0;var lib$es6$promise$asap$$toString={}.toString;var lib$es6$promise$asap$$vertxNext;function lib$es6$promise$asap$$asap(callback,arg){lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len]=callback;lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len+1]=arg;lib$es6$promise$asap$$len+=2;if(lib$es6$promise$asap$$len===2){lib$es6$promise$asap$$scheduleFlush()}}var lib$es6$promise$asap$$default=lib$es6$promise$asap$$asap;var lib$es6$promise$asap$$browserWindow=typeof window!=="undefined"?window:undefined;var lib$es6$promise$asap$$browserGlobal=lib$es6$promise$asap$$browserWindow||{};var lib$es6$promise$asap$$BrowserMutationObserver=lib$es6$promise$asap$$browserGlobal.MutationObserver||lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;var lib$es6$promise$asap$$isNode=typeof process!=="undefined"&&{}.toString.call(process)==="[object process]";var lib$es6$promise$asap$$isWorker=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function lib$es6$promise$asap$$useNextTick(){var nextTick=process.nextTick;var version=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);if(Array.isArray(version)&&version[1]==="0"&&version[2]==="10"){nextTick=setImmediate}return function(){nextTick(lib$es6$promise$asap$$flush)}}function lib$es6$promise$asap$$useVertxTimer(){return function(){lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush)}}function lib$es6$promise$asap$$useMutationObserver(){var iterations=0;var observer=new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);var node=document.createTextNode("");observer.observe(node,{characterData:true});return function(){node.data=iterations=++iterations%2}}function lib$es6$promise$asap$$useMessageChannel(){var channel=new MessageChannel;channel.port1.onmessage=lib$es6$promise$asap$$flush;return function(){channel.port2.postMessage(0)}}function lib$es6$promise$asap$$useSetTimeout(){return function(){setTimeout(lib$es6$promise$asap$$flush,1)}}var lib$es6$promise$asap$$queue=new Array(1e3);function lib$es6$promise$asap$$flush(){for(var i=0;i<lib$es6$promise$asap$$len;i+=2){var callback=lib$es6$promise$asap$$queue[i];var arg=lib$es6$promise$asap$$queue[i+1];callback(arg);lib$es6$promise$asap$$queue[i]=undefined;lib$es6$promise$asap$$queue[i+1]=undefined}lib$es6$promise$asap$$len=0}function lib$es6$promise$asap$$attemptVertex(){try{var r=require;var vertx=r("vertx");lib$es6$promise$asap$$vertxNext=vertx.runOnLoop||vertx.runOnContext;return lib$es6$promise$asap$$useVertxTimer()}catch(e){return lib$es6$promise$asap$$useSetTimeout()}}var lib$es6$promise$asap$$scheduleFlush;if(lib$es6$promise$asap$$isNode){lib$es6$promise$asap$$scheduleFlush=lib$es6$promise$asap$$useNextTick()}else if(lib$es6$promise$asap$$BrowserMutationObserver){lib$es6$promise$asap$$scheduleFlush=lib$es6$promise$asap$$useMutationObserver()}else if(lib$es6$promise$asap$$isWorker){lib$es6$promise$asap$$scheduleFlush=lib$es6$promise$asap$$useMessageChannel()}else if(lib$es6$promise$asap$$browserWindow===undefined&&typeof require==="function"){lib$es6$promise$asap$$scheduleFlush=lib$es6$promise$asap$$attemptVertex()}else{lib$es6$promise$asap$$scheduleFlush=lib$es6$promise$asap$$useSetTimeout()}function lib$es6$promise$$internal$$noop(){}var lib$es6$promise$$internal$$PENDING=void 0;var lib$es6$promise$$internal$$FULFILLED=1;var lib$es6$promise$$internal$$REJECTED=2;var lib$es6$promise$$internal$$GET_THEN_ERROR=new lib$es6$promise$$internal$$ErrorObject;function lib$es6$promise$$internal$$selfFullfillment(){return new TypeError("You cannot resolve a promise with itself")}function lib$es6$promise$$internal$$cannotReturnOwn(){return new TypeError("A promises callback cannot return that same promise.")}function lib$es6$promise$$internal$$getThen(promise){try{return promise.then}catch(error){lib$es6$promise$$internal$$GET_THEN_ERROR.error=error;return lib$es6$promise$$internal$$GET_THEN_ERROR}}function lib$es6$promise$$internal$$tryThen(then,value,fulfillmentHandler,rejectionHandler){try{then.call(value,fulfillmentHandler,rejectionHandler)}catch(e){return e}}function lib$es6$promise$$internal$$handleForeignThenable(promise,thenable,then){lib$es6$promise$asap$$default(function(promise){var sealed=false;var error=lib$es6$promise$$internal$$tryThen(then,thenable,function(value){if(sealed){return}sealed=true;if(thenable!==value){lib$es6$promise$$internal$$resolve(promise,value)}else{lib$es6$promise$$internal$$fulfill(promise,value)}},function(reason){if(sealed){return}sealed=true;lib$es6$promise$$internal$$reject(promise,reason)},"Settle: "+(promise._label||" unknown promise"));if(!sealed&&error){sealed=true;lib$es6$promise$$internal$$reject(promise,error)}},promise)}function lib$es6$promise$$internal$$handleOwnThenable(promise,thenable){if(thenable._state===lib$es6$promise$$internal$$FULFILLED){lib$es6$promise$$internal$$fulfill(promise,thenable._result)}else if(thenable._state===lib$es6$promise$$internal$$REJECTED){lib$es6$promise$$internal$$reject(promise,thenable._result)}else{lib$es6$promise$$internal$$subscribe(thenable,undefined,function(value){lib$es6$promise$$internal$$resolve(promise,value)},function(reason){lib$es6$promise$$internal$$reject(promise,reason)})}}function lib$es6$promise$$internal$$handleMaybeThenable(promise,maybeThenable){if(maybeThenable.constructor===promise.constructor){lib$es6$promise$$internal$$handleOwnThenable(promise,maybeThenable)}else{var then=lib$es6$promise$$internal$$getThen(maybeThenable);if(then===lib$es6$promise$$internal$$GET_THEN_ERROR){lib$es6$promise$$internal$$reject(promise,lib$es6$promise$$internal$$GET_THEN_ERROR.error)}else if(then===undefined){lib$es6$promise$$internal$$fulfill(promise,maybeThenable)}else if(lib$es6$promise$utils$$isFunction(then)){lib$es6$promise$$internal$$handleForeignThenable(promise,maybeThenable,then)}else{lib$es6$promise$$internal$$fulfill(promise,maybeThenable)}}}function lib$es6$promise$$internal$$resolve(promise,value){if(promise===value){lib$es6$promise$$internal$$reject(promise,lib$es6$promise$$internal$$selfFullfillment())}else if(lib$es6$promise$utils$$objectOrFunction(value)){lib$es6$promise$$internal$$handleMaybeThenable(promise,value)}else{lib$es6$promise$$internal$$fulfill(promise,value)}}function lib$es6$promise$$internal$$publishRejection(promise){if(promise._onerror){promise._onerror(promise._result)}lib$es6$promise$$internal$$publish(promise)}function lib$es6$promise$$internal$$fulfill(promise,value){if(promise._state!==lib$es6$promise$$internal$$PENDING){return}promise._result=value;promise._state=lib$es6$promise$$internal$$FULFILLED;if(promise._subscribers.length!==0){lib$es6$promise$asap$$default(lib$es6$promise$$internal$$publish,promise)}}function lib$es6$promise$$internal$$reject(promise,reason){if(promise._state!==lib$es6$promise$$internal$$PENDING){return}promise._state=lib$es6$promise$$internal$$REJECTED;promise._result=reason;lib$es6$promise$asap$$default(lib$es6$promise$$internal$$publishRejection,promise)}function lib$es6$promise$$internal$$subscribe(parent,child,onFulfillment,onRejection){var subscribers=parent._subscribers;var length=subscribers.length;parent._onerror=null;subscribers[length]=child;subscribers[length+lib$es6$promise$$internal$$FULFILLED]=onFulfillment;subscribers[length+lib$es6$promise$$internal$$REJECTED]=onRejection;if(length===0&&parent._state){lib$es6$promise$asap$$default(lib$es6$promise$$internal$$publish,parent)}}function lib$es6$promise$$internal$$publish(promise){var subscribers=promise._subscribers;var settled=promise._state;if(subscribers.length===0){return}var child,callback,detail=promise._result;for(var i=0;i<subscribers.length;i+=3){child=subscribers[i];callback=subscribers[i+settled];if(child){lib$es6$promise$$internal$$invokeCallback(settled,child,callback,detail)}else{callback(detail)}}promise._subscribers.length=0}function lib$es6$promise$$internal$$ErrorObject(){this.error=null}var lib$es6$promise$$internal$$TRY_CATCH_ERROR=new lib$es6$promise$$internal$$ErrorObject;function lib$es6$promise$$internal$$tryCatch(callback,detail){try{return callback(detail)}catch(e){lib$es6$promise$$internal$$TRY_CATCH_ERROR.error=e;return lib$es6$promise$$internal$$TRY_CATCH_ERROR}}function lib$es6$promise$$internal$$invokeCallback(settled,promise,callback,detail){var hasCallback=lib$es6$promise$utils$$isFunction(callback),value,error,succeeded,failed;if(hasCallback){value=lib$es6$promise$$internal$$tryCatch(callback,detail);if(value===lib$es6$promise$$internal$$TRY_CATCH_ERROR){failed=true;error=value.error;value=null}else{succeeded=true}if(promise===value){lib$es6$promise$$internal$$reject(promise,lib$es6$promise$$internal$$cannotReturnOwn());return}}else{value=detail;succeeded=true}if(promise._state!==lib$es6$promise$$internal$$PENDING){}else if(hasCallback&&succeeded){lib$es6$promise$$internal$$resolve(promise,value)}else if(failed){lib$es6$promise$$internal$$reject(promise,error)}else if(settled===lib$es6$promise$$internal$$FULFILLED){lib$es6$promise$$internal$$fulfill(promise,value)}else if(settled===lib$es6$promise$$internal$$REJECTED){lib$es6$promise$$internal$$reject(promise,value)}}function lib$es6$promise$$internal$$initializePromise(promise,resolver){try{resolver(function resolvePromise(value){lib$es6$promise$$internal$$resolve(promise,value)},function rejectPromise(reason){lib$es6$promise$$internal$$reject(promise,reason)})}catch(e){lib$es6$promise$$internal$$reject(promise,e)}}function lib$es6$promise$enumerator$$Enumerator(Constructor,input){var enumerator=this;enumerator._instanceConstructor=Constructor;enumerator.promise=new Constructor(lib$es6$promise$$internal$$noop);if(enumerator._validateInput(input)){enumerator._input=input;enumerator.length=input.length;enumerator._remaining=input.length;enumerator._init();if(enumerator.length===0){lib$es6$promise$$internal$$fulfill(enumerator.promise,enumerator._result)}else{enumerator.length=enumerator.length||0;enumerator._enumerate();if(enumerator._remaining===0){lib$es6$promise$$internal$$fulfill(enumerator.promise,enumerator._result)}}}else{lib$es6$promise$$internal$$reject(enumerator.promise,enumerator._validationError())}}lib$es6$promise$enumerator$$Enumerator.prototype._validateInput=function(input){return lib$es6$promise$utils$$isArray(input)};lib$es6$promise$enumerator$$Enumerator.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")};lib$es6$promise$enumerator$$Enumerator.prototype._init=function(){this._result=new Array(this.length)};var lib$es6$promise$enumerator$$default=lib$es6$promise$enumerator$$Enumerator;lib$es6$promise$enumerator$$Enumerator.prototype._enumerate=function(){var enumerator=this;var length=enumerator.length;var promise=enumerator.promise;var input=enumerator._input;for(var i=0;promise._state===lib$es6$promise$$internal$$PENDING&&i<length;i++){enumerator._eachEntry(input[i],i)}};lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry=function(entry,i){var enumerator=this;var c=enumerator._instanceConstructor;if(lib$es6$promise$utils$$isMaybeThenable(entry)){if(entry.constructor===c&&entry._state!==lib$es6$promise$$internal$$PENDING){entry._onerror=null;enumerator._settledAt(entry._state,i,entry._result)}else{enumerator._willSettleAt(c.resolve(entry),i)}}else{enumerator._remaining--;enumerator._result[i]=entry}};lib$es6$promise$enumerator$$Enumerator.prototype._settledAt=function(state,i,value){var enumerator=this;var promise=enumerator.promise;if(promise._state===lib$es6$promise$$internal$$PENDING){enumerator._remaining--;if(state===lib$es6$promise$$internal$$REJECTED){lib$es6$promise$$internal$$reject(promise,value)}else{enumerator._result[i]=value}}if(enumerator._remaining===0){lib$es6$promise$$internal$$fulfill(promise,enumerator._result)}};lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt=function(promise,i){var enumerator=this;lib$es6$promise$$internal$$subscribe(promise,undefined,function(value){enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED,i,value)},function(reason){enumerator._settledAt(lib$es6$promise$$internal$$REJECTED,i,reason)})};function lib$es6$promise$promise$all$$all(entries){return new lib$es6$promise$enumerator$$default(this,entries).promise}var lib$es6$promise$promise$all$$default=lib$es6$promise$promise$all$$all;function lib$es6$promise$promise$race$$race(entries){var Constructor=this;var promise=new Constructor(lib$es6$promise$$internal$$noop);if(!lib$es6$promise$utils$$isArray(entries)){lib$es6$promise$$internal$$reject(promise,new TypeError("You must pass an array to race."));return promise}var length=entries.length;function onFulfillment(value){lib$es6$promise$$internal$$resolve(promise,value)}function onRejection(reason){lib$es6$promise$$internal$$reject(promise,reason)}for(var i=0;promise._state===lib$es6$promise$$internal$$PENDING&&i<length;i++){lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]),undefined,onFulfillment,onRejection)}return promise}var lib$es6$promise$promise$race$$default=lib$es6$promise$promise$race$$race;function lib$es6$promise$promise$resolve$$resolve(object){var Constructor=this;if(object&&typeof object==="object"&&object.constructor===Constructor){return object}var promise=new Constructor(lib$es6$promise$$internal$$noop);lib$es6$promise$$internal$$resolve(promise,object);return promise}var lib$es6$promise$promise$resolve$$default=lib$es6$promise$promise$resolve$$resolve;function lib$es6$promise$promise$reject$$reject(reason){var Constructor=this;var promise=new Constructor(lib$es6$promise$$internal$$noop);lib$es6$promise$$internal$$reject(promise,reason);return promise}var lib$es6$promise$promise$reject$$default=lib$es6$promise$promise$reject$$reject;var lib$es6$promise$promise$$counter=0;function lib$es6$promise$promise$$needsResolver(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function lib$es6$promise$promise$$needsNew(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var lib$es6$promise$promise$$default=lib$es6$promise$promise$$Promise;function lib$es6$promise$promise$$Promise(resolver){this._id=lib$es6$promise$promise$$counter++;this._state=undefined;this._result=undefined;this._subscribers=[];if(lib$es6$promise$$internal$$noop!==resolver){if(!lib$es6$promise$utils$$isFunction(resolver)){lib$es6$promise$promise$$needsResolver()}if(!(this instanceof lib$es6$promise$promise$$Promise)){lib$es6$promise$promise$$needsNew()}lib$es6$promise$$internal$$initializePromise(this,resolver)}}lib$es6$promise$promise$$Promise.all=lib$es6$promise$promise$all$$default;lib$es6$promise$promise$$Promise.race=lib$es6$promise$promise$race$$default;lib$es6$promise$promise$$Promise.resolve=lib$es6$promise$promise$resolve$$default;lib$es6$promise$promise$$Promise.reject=lib$es6$promise$promise$reject$$default;lib$es6$promise$promise$$Promise.prototype={constructor:lib$es6$promise$promise$$Promise,then:function(onFulfillment,onRejection){var parent=this;var state=parent._state;if(state===lib$es6$promise$$internal$$FULFILLED&&!onFulfillment||state===lib$es6$promise$$internal$$REJECTED&&!onRejection){return this}var child=new this.constructor(lib$es6$promise$$internal$$noop);var result=parent._result;if(state){var callback=arguments[state-1];lib$es6$promise$asap$$default(function(){lib$es6$promise$$internal$$invokeCallback(state,child,callback,result)})}else{lib$es6$promise$$internal$$subscribe(parent,child,onFulfillment,onRejection)}return child},"catch":function(onRejection){return this.then(null,onRejection)}};function lib$es6$promise$polyfill$$polyfill(){var local;if(typeof global!=="undefined"){local=global}else if(typeof self!=="undefined"){local=self}else{try{local=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}}var P=local.Promise;if(P&&Object.prototype.toString.call(P.resolve())==="[object Promise]"&&!P.cast){return}local.Promise=lib$es6$promise$promise$$default}var lib$es6$promise$polyfill$$default=lib$es6$promise$polyfill$$polyfill;var lib$es6$promise$umd$$ES6Promise={Promise:lib$es6$promise$promise$$default,polyfill:lib$es6$promise$polyfill$$default};if(typeof define==="function"&&define["amd"]){define(function(){return lib$es6$promise$umd$$ES6Promise})}else if(typeof module!=="undefined"&&module["exports"]){module["exports"]=lib$es6$promise$umd$$ES6Promise}else if(typeof this!=="undefined"){this["ES6Promise"]=lib$es6$promise$umd$$ES6Promise}lib$es6$promise$polyfill$$default()}).call(this);;
(function() {
  'use strict';

  if (self.fetch) {
    return
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = name.toString();
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = value.toString();
    }
    return value
  }

  function Headers(headers) {
    this.map = {}

    var self = this
    if (headers instanceof Headers) {
      headers.forEach(function(name, values) {
        values.forEach(function(value) {
          self.append(name, value)
        })
      })

    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        self.append(name, headers[name])
      })
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var list = this.map[name]
    if (!list) {
      list = []
      this.map[name] = list
    }
    list.push(value)
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    var values = this.map[normalizeName(name)]
    return values ? values[0] : null
  }

  Headers.prototype.getAll = function(name) {
    return this.map[normalizeName(name)] || []
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = [normalizeValue(value)]
  }

  // Instead of iterable for now.
  Headers.prototype.forEach = function(callback) {
    var self = this
    Object.getOwnPropertyNames(this.map).forEach(function(name) {
      callback(name, self.map[name])
    })
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return fetch.Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new fetch.Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    reader.readAsArrayBuffer(blob)
    return fileReaderReady(reader)
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    reader.readAsText(blob)
    return fileReaderReady(reader)
  }

  var support = {
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self
  }

  function Body() {
    this.bodyUsed = false


    this._initBody = function(body) {
      this._bodyInit = body
      if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (!body) {
        this._bodyText = ''
      } else {
        throw new Error('unsupported BodyInit type')
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return fetch.Promise.resolve(this._bodyBlob)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return fetch.Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        return this.blob().then(readBlobAsArrayBuffer)
      }

      this.text = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text')
        } else {
          return fetch.Promise.resolve(this._bodyText)
        }
      }
    } else {
      this.text = function() {
        var rejected = consumed(this)
        return rejected ? rejected : fetch.Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(function (text) {
          return JSON.parse(text);
      });
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(url, options) {
    options = options || {}
    this.url = url

    this.credentials = options.credentials || 'omit'
    this.headers = new Headers(options.headers)
    this.method = normalizeMethod(options.method || 'GET')
    this.mode = options.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(options.body)
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function headers(xhr) {
    var head = new Headers()
    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
    pairs.forEach(function(header) {
      var split = header.trim().split(':')
      var key = split.shift().trim()
      var value = split.join(':').trim()
      head.append(key, value)
    })
    return head
  }

  var noXhrPatch =
    typeof window !== 'undefined' && !!window.ActiveXObject &&
      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

  function getXhr() {
    // from backbone.js 1.1.2
    // https://github.com/jashkenas/backbone/blob/1.1.2/backbone.js#L1181
    if (noXhrPatch && !(/^(get|post|head|put|delete|options)$/i.test(this.method))) {
      this.usingActiveXhr = true;
      return new ActiveXObject("Microsoft.XMLHTTP");
    }
    return new XMLHttpRequest();
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this._initBody(bodyInit)
    this.type = 'default'
    this.url = null
    this.status = options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = options.statusText
    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
    this.url = options.url || ''
  }

  Body.call(Response.prototype)

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    // TODO: Request constructor should accept input, init
    var request
    if (Request.prototype.isPrototypeOf(input) && !init) {
      request = input
    } else {
      request = new Request(input, init)
    }

    return new fetch.Promise(function(resolve, reject) {
      var xhr = getXhr();
      if (request.credentials === 'cors') {
        xhr.withCredentials = true;
      }

      function responseURL() {
        if ('responseURL' in xhr) {
          return xhr.responseURL
        }

        // Avoid security warnings on getResponseHeader when not allowed by CORS
        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
          return xhr.getResponseHeader('X-Request-URL')
        }

        return;
      }

      function onload() {
        if (xhr.readyState !== 4) {
          return
        }
        var status = (xhr.status === 1223) ? 204 : xhr.status
        if (status < 100 || status > 599) {
          reject(new TypeError('Network request failed'))
          return
        }
        var options = {
          status: status,
          statusText: xhr.statusText,
          headers: headers(xhr),
          url: responseURL()
        }
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options))
      }
      xhr.onreadystatechange = onload;
      if (!self.usingActiveXhr) {
        xhr.onload = onload;
        xhr.onerror = function() {
          reject(new TypeError('Network request failed'))
        }
      }

      xhr.open(request.method, request.url, true)

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(name, values) {
        values.forEach(function(value) {
          xhr.setRequestHeader(name, value)
        })
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  fetch.Promise = self.Promise; // you could change it to your favorite alternative
  self.fetch.polyfill = true
})();
