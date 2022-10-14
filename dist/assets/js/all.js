"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(n){var r={};function o(e){var t;return(r[e]||(t=r[e]={i:e,l:!1,exports:{}},n[e].call(t.exports,t,t.exports,o),t.l=!0,t)).exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=10)}([function(e,t,n){var o=n(1),r=Object.prototype.toString;function i(e){return"[object Array]"===r.call(e)}function a(e){return void 0===e}function s(e){return null!==e&&"object"==_typeof(e)}function u(e){return"[object Function]"===r.call(e)}function c(e,t){if(null!=e)if(i(e="object"!=_typeof(e)?[e]:e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:a,isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function n(){var r={};function e(e,t){"object"==_typeof(r[t])&&"object"==_typeof(e)?r[t]=n(r[t],e):r[t]=e}for(var t=0,o=arguments.length;t<o;t++)c(arguments[t],e);return r},deepMerge:function n(){var r={};function e(e,t){"object"==_typeof(r[t])&&"object"==_typeof(e)?r[t]=n(r[t],e):r[t]="object"==_typeof(e)?n({},e):e}for(var t=0,o=arguments.length;t<o;t++)c(arguments[t],e);return r},extend:function(n,e,r){return c(e,function(e,t){n[t]=r&&"function"==typeof e?o(e,r):e}),n},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){e.exports=function(n,r){return function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];return n.apply(r,e)}}},function(e,t,n){var o=n(0);function i(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){var r;return!t||(n=n?n(t):o.isURLSearchParams(t)?t.toString():(r=[],o.forEach(t,function(e,t){null!=e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),r.push(i(t)+"="+i(e))}))}),r.join("&")))&&(-1!==(t=e.indexOf("#"))&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+n),e}},function(e,t,n){e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(s,e,u){!function(e){var n=u(0),r=u(17),t={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,a={adapter:i="undefined"!=typeof XMLHttpRequest||void 0!==e&&"[object process]"===Object.prototype.toString.call(e)?u(5):i,transformRequest:[function(e,t){return r(t,"Accept"),r(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return 200<=e&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],function(e){a.headers[e]={}}),n.forEach(["post","put","patch"],function(e){a.headers[e]=n.merge(t)}),s.exports=a}.call(this,u(16))},function(e,t,u){var c=u(0),f=u(18),p=u(2),l=u(20),d=u(23),h=u(24),m=u(6);e.exports=function(s){return new Promise(function(t,n){var e,r=s.data,o=s.headers,i=(c.isFormData(r)&&delete o["Content-Type"],new XMLHttpRequest),a=(s.auth&&(a=s.auth.username||"",e=s.auth.password||"",o.Authorization="Basic "+btoa(a+":"+e)),l(s.baseURL,s.url));if(i.open(s.method.toUpperCase(),p(a,s.params,s.paramsSerializer),!0),i.timeout=s.timeout,i.onreadystatechange=function(){var e;i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))&&(e="getAllResponseHeaders"in i?d(i.getAllResponseHeaders()):null,e={data:s.responseType&&"text"!==s.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:e,config:s,request:i},f(t,n,e),i=null)},i.onabort=function(){i&&(n(m("Request aborted",s,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(m("Network Error",s,null,i)),i=null},i.ontimeout=function(){var e="timeout of "+s.timeout+"ms exceeded";s.timeoutErrorMessage&&(e=s.timeoutErrorMessage),n(m(e,s,"ECONNABORTED",i)),i=null},c.isStandardBrowserEnv()&&(e=u(25),(a=(s.withCredentials||h(a))&&s.xsrfCookieName?e.read(s.xsrfCookieName):void 0)&&(o[s.xsrfHeaderName]=a)),"setRequestHeader"in i&&c.forEach(o,function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:i.setRequestHeader(t,e)}),c.isUndefined(s.withCredentials)||(i.withCredentials=!!s.withCredentials),s.responseType)try{i.responseType=s.responseType}catch(t){if("json"!==s.responseType)throw t}"function"==typeof s.onDownloadProgress&&i.addEventListener("progress",s.onDownloadProgress),"function"==typeof s.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",s.onUploadProgress),s.cancelToken&&s.cancelToken.promise.then(function(e){i&&(i.abort(),n(e),i=null)}),void 0===r&&(r=null),i.send(r)})}},function(e,t,n){var i=n(19);e.exports=function(e,t,n,r,o){e=new Error(e);return i(e,t,n,r,o)}},function(e,t,n){var s=n(0);e.exports=function(t,n){n=n||{};var r={},e=["url","method","params","data"],o=["headers","auth","proxy"],i=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],a=(s.forEach(e,function(e){void 0!==n[e]&&(r[e]=n[e])}),s.forEach(o,function(e){s.isObject(n[e])?r[e]=s.deepMerge(t[e],n[e]):void 0!==n[e]?r[e]=n[e]:s.isObject(t[e])?r[e]=s.deepMerge(t[e]):void 0!==t[e]&&(r[e]=t[e])}),s.forEach(i,function(e){void 0!==n[e]?r[e]=n[e]:void 0!==t[e]&&(r[e]=t[e])}),e.concat(o).concat(i)),e=Object.keys(n).filter(function(e){return-1===a.indexOf(e)});return s.forEach(e,function(e){void 0!==n[e]?r[e]=n[e]:void 0!==t[e]&&(r[e]=t[e])}),r}},function(e,t,n){function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){e.exports=n(11)},function(e,t,n){n.r(t);var t=n(9),r=n.n(t);window.addEventListener("load",function(){var t=document.querySelector("body");function e(){r.a.get("http://www.colr.org/json/color/random").then(function(e){e=e.data.colors[0].hex;e||console.error("Random color could not be fetched."),t.style.backgroundColor="#"+e}).catch(function(){return console.error("Random color could not be fetched.")})}e(),setInterval(e,8e3)})},function(e,t,n){var r=n(0),o=n(1),i=n(12),a=n(7);function s(e){var e=new i(e),t=o(i.prototype.request,e);return r.extend(t,i.prototype,e),r.extend(t,e),t}var u=s(n(4));u.Axios=i,u.create=function(e){return s(a(u.defaults,e))},u.Cancel=n(8),u.CancelToken=n(26),u.isCancel=n(3),u.all=function(e){return Promise.all(e)},u.spread=n(27),e.exports=u,e.exports.default=u},function(e,t,n){var o=n(0),r=n(2),i=n(13),a=n(14),s=n(7);function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},u.prototype.getUri=function(e){return e=s(this.defaults,e),r(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(n){u.prototype[n]=function(e,t){return this.request(o.merge(t||{},{method:n,url:e}))}}),o.forEach(["post","put","patch"],function(r){u.prototype[r]=function(e,t,n){return this.request(o.merge(n||{},{method:r,url:e,data:t}))}}),e.exports=u},function(e,t,n){var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},e.exports=o},function(e,t,n){var r=n(0),o=n(15),i=n(3),a=n(4);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(t){return s(t),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return s(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(s(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(e,t,n){var r=n(0);e.exports=function(t,n,e){return r.forEach(e,function(e){t=e(t,n)}),t}},function(e,t){var n,r,e=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return(n=setTimeout)(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}var s,u=[],c=!1,f=-1;function p(){c&&s&&(c=!1,s.length?u=s.concat(u):f=-1,u.length&&l())}function l(){if(!c){var e=a(p);c=!0;for(var t=u.length;t;){for(s=u,u=[];++f<t;)s&&s[f].run();f=-1,t=u.length}s=null,c=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return(r=clearTimeout)(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}e.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new d(e,t)),1!==u.length||c||a(l)},d.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=h,e.addListener=h,e.once=h,e.off=h,e.removeListener=h,e.removeAllListeners=h,e.emit=h,e.prependListener=h,e.prependOnceListener=h,e.listeners=function(e){return[]},e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")},e.umask=function(){return 0}},function(e,t,n){var o=n(0);e.exports=function(n,r){o.forEach(n,function(e,t){t!==r&&t.toUpperCase()===r.toUpperCase()&&(n[r]=e,delete n[t])})}},function(e,t,n){var o=n(6);e.exports=function(e,t,n){var r=n.config.validateStatus;!r||r(n.status)?e(n):t(o("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){var r=n(21),o=n(22);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t,n){e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){var o=n(0),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,r={};return e&&o.forEach(e.split("\n"),function(e){n=e.indexOf(":"),t=o.trim(e.substr(0,n)).toLowerCase(),n=o.trim(e.substr(n+1)),!t||r[t]&&0<=i.indexOf(t)||(r[t]="set-cookie"===t?(r[t]||[]).concat([n]):r[t]?r[t]+", "+n:n)}),r}},function(e,t,n){var r,o,i,a=n(0);function s(e){return o&&(i.setAttribute("href",e),e=i.href),i.setAttribute("href",e),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:"/"===i.pathname.charAt(0)?i.pathname:"/"+i.pathname}}e.exports=a.isStandardBrowserEnv()?(o=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),r=s(window.location.href),function(e){e=a.isString(e)?s(e):e;return e.protocol===r.protocol&&e.host===r.host}):function(){return!0}},function(e,t,n){var s=n(0);e.exports=s.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),s.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),s.isString(r)&&a.push("path="+r),s.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){e=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){var r=n(8);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});var t,n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},e.exports=o},function(e,t,n){e.exports=function(t){return function(e){return t.apply(null,e)}}}]);
//# sourceMappingURL=all.js.map
