!function(){function r(r,n){var t=new Error('Cannot find module "'+r+'"'+(n?' from "'+n+'"':""));return t.code="MODULE_NOT_FOUND",t}function n(r){this.id=this.filename=r,this.loaded=!1}function t(r,n,t){var i=t&&t.globals;if(O[r]=n,i)for(var e=x||global,o=0;o<i.length;o++){var a=i[o];F[r]=e[a]=d(r)}}function i(r,n){j[r]=n}function e(r,n){D[r]=n}function o(r,n){$[r]=n}function a(r,n,t){I[r+"/"+n]=t}function u(r){var n,t=0,i=r.length;for(n=0;i>n;n++){var e=r[n];"."===e||(".."===e?t--:(r[t]=e,t++))}return 1===t?"/":(t>2&&0===r[t-1].length&&t--,r.length=t,r.join("/"))}function f(r,n){var t=n.split("/"),i="/"==r?[""]:r.split("/");return u(i.concat(t))}function s(r){var n,t=r.lastIndexOf(".");return-1===t||-1!==(n=r.lastIndexOf("/"))&&n>t?null:r.substring(0,t)}function v(r){r=r.substring(1);var n=r.indexOf("/");"@"===r.charAt(1)&&(n=r.indexOf("/",n+1));var t=-1===n?r.length:n;return[r.substring(0,t),r.substring(t)]}function l(r,n){"/"===r.charAt(r.length-1)&&(r=r.slice(0,-1));var t=$[r];if(t)return t;var i,e,o=v(n),a=o[0],u=r.indexOf("/");0>u?(i=r,e=""):("@"===r.charAt(0)&&(u=r.indexOf("/",u+1)),i=r.substring(0,u),e=r.substring(u));var f=I[a+"/"+i];if(f){var s="/"+i+"$"+f;return e&&(s+=e),s}}function c(r,n){var t;if("."===r.charAt(0))t=f(n,r);else if("/"===r.charAt(0))t=u(r.split("/"));else{for(var i=m.length,e=0;i>e;e++){var o=m[e]+r,a=c(o,n);if(a)return a}t=l(r,n)}if(!t)return void 0;var v;void 0!==(v=j[t])&&(v||(v="index"),t=f(t,v));var d=D[t];d&&(t=d);var h=O[t];if(void 0===h){var g;if(null===(g=s(t))||void 0===(h=O[g]))return void 0;t=g}return[t,h]}function d(t,i){if(!t)throw r("");var e=c(t,i);if(!e)throw r(t,i);var o=e[0],a=_[o];if(void 0!==a)return a.exports;if(F.hasOwnProperty(o))return F[o];var u=e[1];return a=new n(o),_[o]=a,a.load(u),a.exports}function h(r,n){var t=!n||n.wait!==!1;return t&&!A?y.push([r,n]):void d(r,"/")}function g(){A=!0;for(var r;r=y.length;){var n=y;y=[];for(var t=0;r>t;t++){var i=n[t];h(i[0],i[1])}if(!A)break}}function p(r){m.push(r)}var x;if("undefined"!=typeof window){if(x=window,x.$_mod)return;x.global=x}var b,w,O={},m=[],A=!1,y=[],_={},I={},$={},j={},D={},E={},F={};n.cache=_,w=n.prototype,w.load=function(n){var t=this.id;if(n&&n.constructor===Function){var i=t.lastIndexOf("/"),e=t.substring(0,i),o=E[e]||(E[e]={}),a=function(r){return o[r]||(o[r]=d(r,e))};a.resolve=function(n){if(!n)throw r("");var t=c(n,e);if(!t)throw r(n,e);return t[0]},a.cache=_,a.runtime=b,this.exports={},n.call(this,a,this.exports,this,t,e)}else this.exports=n;this.loaded=!0};var N=0,P=function(){N--,N||g()};b={def:t,installed:a,run:h,main:i,remap:e,builtin:o,require:d,resolve:c,join:f,ready:g,searchPath:p,pending:function(){return A=!1,N++,{done:P}}},x?x.$_mod=b:module.exports=b}();
$_mod.searchPath("/markojs.com$1.0.0/");
$_mod.main("/markojs.com$1.0.0/src/components/app-header","");
$_mod.installed("markojs.com$1.0.0","marko-widgets","6.1.2");
$_mod.remap("/marko-widgets$6.1.2/lib/index","/marko-widgets$6.1.2/lib/index-browser");
$_mod.remap("/marko-widgets$6.1.2/lib/init-widgets","/marko-widgets$6.1.2/lib/init-widgets-browser");
$_mod.installed("marko-widgets$6.1.2","raptor-polyfill","1.0.2");
$_mod.def("/raptor-polyfill$1.0.2/array/_toObject",function(t,r,o,e,n){var a="a"!="a"[0];o.exports=function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return a&&"string"==typeof t&&t?t.split(""):Object(t)}});
$_mod.def("/raptor-polyfill$1.0.2/array/forEach",function(r,o,t,a,f){if(!Array.prototype.forEach){var p=r("/raptor-polyfill$1.0.2/array/_toObject");Array.prototype.forEach=function(r,o){var t=p(this),a=-1,f=t.length>>>0;if("function"!=typeof r)throw new TypeError;for(;++a<f;)a in t&&r.call(o,t[a],a,t)}}});
$_mod.def("/raptor-polyfill$1.0.2/string/endsWith",function(t,n,i,e,r){String.prototype.endsWith||(String.prototype.endsWith=function(t,n){var i=this;return n&&(i=i.substring(n)),i.length<t.length?!1:i.slice(0-t.length)==t})});
$_mod.installed("marko-widgets$6.1.2","raptor-logging","1.1.2");
$_mod.main("/raptor-logging$1.1.2","lib/index");
$_mod.builtin("process","/process$0.6.0/browser");
$_mod.def("/process$0.6.0/browser",function(n,e,o,t,i){function r(){}var s=o.exports={};s.nextTick=function(){var n="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(n)return function(n){return window.setImmediate(n)};if(e){var o=[];return window.addEventListener("message",function(n){var e=n.source;if((e===window||null===e)&&"process-tick"===n.data&&(n.stopPropagation(),o.length>0)){var t=o.shift();t()}},!0),function(n){o.push(n),window.postMessage("process-tick","*")}}return function(n){setTimeout(n,0)}}(),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.on=r,s.once=r,s.off=r,s.emit=r,s.binding=function(n){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(n){throw new Error("process.chdir is not supported")}});
$_mod.def("/raptor-logging$1.1.2/lib/raptor-logging",function(r,e,n,o,a){var i=r("process"),g=function(){return!1},l={isTraceEnabled:g,isDebugEnabled:g,isInfoEnabled:g,isWarnEnabled:g,isErrorEnabled:g,isFatalEnabled:g,dump:g,trace:g,debug:g,info:g,warn:g,error:g,fatal:g},t={logger:function(){return l},configure:g,voidLogger:l};n.exports=t;var d="./raptor-logging-impl";if(!i.browser){var s;try{s=r.resolve(d)}catch(b){}s&&r(s)}});
$_mod.def("/raptor-logging$1.1.2/lib/index",function(o,g,i,n,r){var d="undefined"==typeof window?global:window;i.exports=d.__RAPTOR_LOGGING||(d.__RAPTOR_LOGGING=o("/raptor-logging$1.1.2/lib/raptor-logging"))});
$_mod.installed("marko-widgets$6.1.2","raptor-pubsub","1.0.5");
$_mod.main("/raptor-pubsub$1.0.5","lib/index");
$_mod.installed("raptor-pubsub$1.0.5","events","1.1.1");
$_mod.main("/events$1.1.1","events");
$_mod.def("/events$1.1.1/events",function(e,t,s,n,r){function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(e){return"function"==typeof e}function h(e){return"number"==typeof e}function v(e){return"object"===("undefined"==typeof e?"undefined":l(e))&&null!==e}function u(e){return void 0===e}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};s.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(e){if(!h(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},i.prototype.emit=function(e){var t,s,n,r,i,h;if(this._events||(this._events={}),"error"===e&&(!this._events.error||v(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}if(s=this._events[e],u(s))return!1;if(o(s))switch(arguments.length){case 1:s.call(this);break;case 2:s.call(this,arguments[1]);break;case 3:s.call(this,arguments[1],arguments[2]);break;default:r=Array.prototype.slice.call(arguments,1),s.apply(this,r)}else if(v(s))for(r=Array.prototype.slice.call(arguments,1),h=s.slice(),n=h.length,i=0;n>i;i++)h[i].apply(this,r);return!0},i.prototype.addListener=function(e,t){var s;if(!o(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?v(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,v(this._events[e])&&!this._events[e].warned&&(s=u(this._maxListeners)?i.defaultMaxListeners:this._maxListeners,s&&s>0&&this._events[e].length>s&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(e,t){function s(){this.removeListener(e,s),n||(n=!0,t.apply(this,arguments))}if(!o(t))throw TypeError("listener must be a function");var n=!1;return s.listener=t,this.on(e,s),this},i.prototype.removeListener=function(e,t){var s,n,r,i;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(s=this._events[e],r=s.length,n=-1,s===t||o(s.listener)&&s.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(v(s)){for(i=r;i-->0;)if(s[i]===t||s[i].listener&&s[i].listener===t){n=i;break}if(0>n)return this;1===s.length?(s.length=0,delete this._events[e]):s.splice(n,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},i.prototype.removeAllListeners=function(e){var t,s;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(s=this._events[e],o(s))this.removeListener(e,s);else if(s)for(;s.length;)this.removeListener(e,s[s.length-1]);return delete this._events[e],this},i.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?o(this._events[e])?[this._events[e]]:this._events[e].slice():[]},i.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(o(t))return 1;if(t)return t.length}return 0},i.listenerCount=function(e,t){return e.listenerCount(t)}});
$_mod.def("/raptor-pubsub$1.0.5/lib/raptor-pubsub",function(e,n,t,r,o){var u=e("/events$1.1.1/events").EventEmitter,a={},v=new u;v.channel=function(e){var n;return n=e?a[e]||(a[e]=new u):new u},v.removeChannel=function(e){delete a[e]},t.exports=v});
$_mod.def("/raptor-pubsub$1.0.5/lib/index",function(o,b,p,r,u){var d="undefined"==typeof window?global:window;p.exports=d.__RAPTOR_PUBSUB||(d.__RAPTOR_PUBSUB=o("/raptor-pubsub$1.0.5/lib/raptor-pubsub"))});
$_mod.installed("marko-widgets$6.1.2","raptor-dom","1.1.1");
$_mod.main("/raptor-dom$1.1.1","raptor-dom-server");
$_mod.remap("/raptor-dom$1.1.1/raptor-dom-server","/raptor-dom$1.1.1/raptor-dom-client");
$_mod.installed("raptor-dom$1.1.1","raptor-pubsub","1.0.5");
$_mod.def("/raptor-dom$1.1.1/ready",function(e,t,n,o,a){function d(){for(var e=0,t=s.length;t>e;e++){var n=s[e];n[0].call(n[1])}s=null}function r(){if(!u){if(!m.body)return setTimeout(r,1);u=!0,d()}}function c(){m.addEventListener?m.removeEventListener("DOMContentLoaded",c,!1):m.detachEvent("onreadystatechange",c),r()}function i(){if(!u){try{m.documentElement.doScroll("left")}catch(e){return void setTimeout(i,1)}r()}}function l(){var e=!1;if(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)r();else if(m.addEventListener)m.addEventListener("DOMContentLoaded",c,!1),v.addEventListener("load",c,!1);else if(m.attachEvent){m.attachEvent("onreadystatechange",c),v.attachEvent("onload",c);try{e=null==v.frameElement}catch(t){}m.documentElement.doScroll&&e&&i()}}var u=!1,f=!1,v=window,m=document,s=[];n.exports=function(e,t){return u?e.call(t):(s.push([e,t]),void(f||(f=!0,l())))}});
$_mod.def("/raptor-dom$1.1.1/raptor-dom-client",function(e,n,r,o,t){function i(e){if("string"==typeof e){var n=e;if(e=document.getElementById(n),!e)throw new Error('Target element not found: "'+n+'"')}return e}function d(e){f&&f.emit("dom/beforeRemove",{el:e})}var f=e("/raptor-pubsub$1.0.5/lib/index"),l={forEachChildEl:function(e,n,r){l.forEachChild(e,n,r,1)},forEachChild:function(e,n,r,o){if(e)for(var t=0,i=e.childNodes,d=i.length;d>t;t++){var f=i[t];!f||null!=o&&o!=f.nodeType||n.call(r,f)}},detach:function(e){e=i(e),e.parentNode.removeChild(e)},appendTo:function(e,n){i(n).appendChild(i(e))},remove:function(e){e=i(e),d(e),e.parentNode&&e.parentNode.removeChild(e)},removeChildren:function(e){e=i(e);for(var n=0,r=e.childNodes,o=r.length;o>n;n++){var t=r[n];t&&1===t.nodeType&&d(t)}e.innerHTML=""},replace:function(e,n){n=i(n),d(n),n.parentNode.replaceChild(i(e),n)},replaceChildrenOf:function(e,n){n=i(n),l.forEachChildEl(n,function(e){d(e)}),n.innerHTML="",n.appendChild(i(e))},insertBefore:function(e,n){n=i(n),n.parentNode.insertBefore(i(e),n)},insertAfter:function(e,n){n=i(n),e=i(e);var r=n.nextSibling,o=n.parentNode;r?o.insertBefore(e,r):o.appendChild(e)},prependTo:function(e,n){n=i(n),n.insertBefore(i(e),n.firstChild||null)}};l.ready=e("/raptor-dom$1.1.1/ready"),r.exports=l});
$_mod.remap("/marko-widgets$6.1.2/lib/defineWidget","/marko-widgets$6.1.2/lib/defineWidget-browser");
$_mod.installed("marko-widgets$6.1.2","raptor-util","1.0.10");
$_mod.def("/raptor-util$1.0.10/extend",function(r,n,t,o,e){t.exports=function(r,n){if(r||(r={}),n)for(var t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r}});
$_mod.def("/raptor-util$1.0.10/inherit",function(t,o,r,e,p){function n(t,o,r){var e=t.prototype,p=function(){};return p.prototype=o.prototype,t.prototype=new p,t.$super=o,r!==!1&&u(t.prototype,e),t.prototype.constructor=t,t}function i(t,o){return n(t,o,!0)}var u=t("/raptor-util$1.0.10/extend");r.exports=i,i._inherit=n});
$_mod.installed("marko-widgets$6.1.2","raptor-renderer","1.4.4");
$_mod.main("/raptor-renderer$1.4.4","lib/raptor-renderer");
$_mod.installed("raptor-renderer$1.4.4","async-writer","1.4.2");
$_mod.main("/async-writer$1.4.2","src/index");
$_mod.installed("async-writer$1.4.2","events","1.1.1");
$_mod.def("/async-writer$1.4.2/src/AsyncWriter",function(t,i,e,n,s){"use strict";function r(t){this.str="",this.events=t,this.finished=!1}function h(t){this._buffer="",this._wrapped=t}function a(t){this.asyncWriter=t,this.writer=t.writer,this.finished=!1,this.flushed=!1,this.next=null,this.ready=!0}function u(t,i){var e=t.next;e&&(e.ready=!0,e.writer=e.asyncWriter.writer=i,e.flush())}function f(t,i){a.call(this,t),this.buffer=i}function o(t){a.call(this,t)}function c(t,i,e,n,s){this.data={},this.global=this.attributes=i||(i={}),this._af=this._prevAF=this._parentAF=null,this._isSync=!1,this._last=null,n||(n=t&&t.on?t:new d),this._events=i.events=n,e||(e={remaining:0,ended:!1,last:0,finished:!1}),this._async=e;var a;t?s&&(a=t,t=new h(t)):t=new r(this._events),this.stream=a||t,this.writer=this._stream=t}var l=t("process");r.prototype={end:function(){this.finished=!0,this.events&&this.events.emit("finish")},write:function(t){return this.str+=t,this},toString:function(){return this.str}},h.prototype={write:function(t){this._buffer+=t},flush:function(){0!==this._buffer.length&&(this._wrapped.write(this._buffer),this._buffer="",this._wrapped.flush&&this._wrapped.flush())},end:function(){this.flush(),this._wrapped.isTTY||this._wrapped.end()},on:function(t,i){return this._wrapped.on(t,i)},once:function(t,i){return this._wrapped.once(t,i)},clear:function(){this._buffer=""}};var d=t("/events$1.1.1/events").EventEmitter,p="undefined"!=typeof l&&"development"===l.env.NODE_ENV,_={write:function(){}};f.prototype={flush:function(){var t=this.writer,i=this.buffer.toString();0!==i.length&&t.write(i),this.flushed=!0,u(this,t)}},o.prototype={end:function(){this.finished||(this.finished=!0,this.ready&&this.flush())},flush:function(){if(this.finished){this.flushed=!0;var t=this.writer;this.writer=this.asyncWriter.writer=_,u(this,t)}}},c.DEFAULT_TIMEOUT=1e4,c.prototype={constructor:c,isAsyncWriter:c,sync:function(){this._isSync=!0},getAttributes:function(){return this.global},getAttribute:function(t){return this.global[t]},write:function(t){return null!=t&&this.writer.write(t.toString()),this},getOutput:function(){return this.writer.toString()},captureString:function(t,i){var e=new r;return this.swapWriter(e,t,i),e.toString()},swapWriter:function(t,i,e){var n=this.writer;this.writer=t,i.call(e),this.writer=n},createNestedWriter:function(t){var i=this,e=new c(t,i.global,this._async,this._events);return e._stream=i._stream,e.stream=i.stream,e},beginAsync:function(t){if(this._isSync)throw new Error("beginAsync() not allowed when using renderSync()");var i=!0,e=this.createNestedWriter(this.writer),n=this.writer=new r,s=new o(e),h=new f(this,n);s.next=h,e._af=s,e._parentAF=s;var a=this._prevAF||this._parentAF;return a&&(h.next=a.next,a.next=s,a.flushed||(i=!1)),s.ready=i,this._prevAF=h,e.handleBeginAsync(t,this),e},handleBeginAsync:function(t,i){var e,n,s=this,r=s._async;r.remaining++,null!=t&&("number"==typeof t?e=t:(e=t.timeout,t.last===!0&&(null==e&&(e=0),r.last++),n=t.name)),null==e&&(e=c.DEFAULT_TIMEOUT),s.stack=p?(new Error).stack:null,s.name=n,e>0&&(s._timeoutId=setTimeout(function(){s.error(new Error("Async fragment "+(n?"("+n+") ":"")+"timed out after "+e+"ms"))},e)),this._events.emit("beginAsync",{writer:this,parentWriter:i})},on:function(t,i){return"finish"===t&&this.writer.finished?(i(),this):(this._events.on(t,i),this)},once:function(t,i){return"finish"===t&&this.writer.finished?(i(),this):(this._events.once(t,i),this)},onLast:function(t){var i=this._last;if(!i){i=this._last=[];var e=0,n=function s(){if(e!==i.length){var t=i[e++];t(s)}};this.once("last",function(){n()})}i.push(t)},emit:function(t,i){var e=this._events;switch(arguments.length){case 1:e.emit(t);break;case 2:e.emit(t,i);break;default:e.emit.apply(e,arguments)}return this},removeListener:function(){var t=this._events;return t.removeListener.apply(t,arguments),this},prependListener:function(){var t=this._events;return t.prependListener.apply(t,arguments),this},pipe:function(t){return this._stream.pipe(t),this},error:function(t){var i=this.stack,e=this.name,n="Async fragment failed"+(e?" ("+e+")":"")+". Exception: "+(t.stack||t)+(i?"\nCreation stack trace: "+i:"");t=new Error(n);try{this.emit("error",t)}finally{this.end()}console&&console.error(n)},end:function(t){t&&this.write(t);var i=this._af;return i?(i.end(),this.handleEnd(!0)):this.handleEnd(!1),this},handleEnd:function(t){var i=this._async;if(!i.finished){var e;if(t){var n=this._timeoutId;n&&clearTimeout(n),e=--i.remaining}else e=i.remaining,i.ended=!0;i.ended&&(i.lastFired||i.remaining-i.last!==0||(i.lastFired=!0,i.last=0,this._events.emit("last")),0===e&&(i.finished=!0,this._finish()))}},_finish:function(){this._stream.end?this._stream.end():this._events.emit("finish")},flush:function(){if(!this._async.finished){var t=this._stream;t&&t.flush&&t.flush()}}},c.prototype.w=c.prototype.write,c.enableAsyncStackTrace=function(){p=!0},e.exports=c});
$_mod.def("/async-writer$1.4.2/src/index",function(r,n,e,c,t){"use strict";var a=r("/async-writer$1.4.2/src/AsyncWriter");n.create=function(r,n){var e,c;n&&(e=n.global,c=n.buffer===!0);var t=new a(r,e,null,null,c);return t},n.enableAsyncStackTrace=function(){a.INCLUDE_STACK=!0},n.AsyncWriter=a});
$_mod.remap("/raptor-renderer$1.4.4/lib/RenderResult","/raptor-renderer$1.4.4/lib/RenderResult-browser");
$_mod.installed("raptor-renderer$1.4.4","raptor-dom","1.1.1");
$_mod.installed("raptor-renderer$1.4.4","raptor-pubsub","1.0.5");
$_mod.def("/raptor-renderer$1.4.4/lib/RenderResult-browser",function(e,t,r,n,i){"use strict";function o(e,t){if(!e._added)throw new Error("Cannot call "+t+"() until after HTML fragment is added to DOM.")}function d(e,t){this.html=e,this.out=t,this._node=void 0;var r=t.global.widgets;this._widgetDefs=r?r.widgets:null}var s=e("/raptor-dom$1.1.1/raptor-dom-client"),h=e("/raptor-pubsub$1.0.5/lib/index");d.prototype={getWidget:function(){o(this,"getWidget");var e=this.out.__rerenderWidget;if(e)return e;var t=this._widgetDefs;if(!t)throw new Error("No widget rendered");return t.length?t[0].widget:void 0},getWidgets:function(e){o(this,"getWidgets");var t=this._widgetDefs;if(!t)throw new Error("No widget rendered");var r,n;if(e)for(r=[],n=0;n<t.length;n++){var i=t[n].widget;e(i)&&r.push(i)}else for(r=new Array(t.length),n=0;n<t.length;n++)r[n]=t[n].widget;return r},afterInsert:function(e){var t=this.getNode(e);return this._added=!0,h.emit("raptor-renderer/renderedToDOM",{node:t,context:this.out,out:this.out,document:t.ownerDocument}),this},appendTo:function(e){return s.appendTo(this.getNode(e.ownerDocument),e),this.afterInsert()},replace:function(e){return s.replace(this.getNode(e.ownerDocument),e),this.afterInsert()},replaceChildrenOf:function(e){return s.replaceChildrenOf(this.getNode(e.ownerDocument),e),this.afterInsert()},insertBefore:function(e){return s.insertBefore(this.getNode(e.ownerDocument),e),this.afterInsert()},insertAfter:function(e){return s.insertAfter(this.getNode(e.ownerDocument),e),this.afterInsert()},prependTo:function(e){return s.prependTo(this.getNode(e.ownerDocument),e),this.afterInsert()},getNode:function(e){var t,r,n=this._node;if(e=e||window.document,void 0===n){if(this.html)if(r=e.createElement("body"),r.innerHTML=this.html,1==r.childNodes.length)n=r.childNodes[0];else for(n=e.createDocumentFragment();t=r.firstChild;)n.appendChild(t);else n=e.createDocumentFragment();this._node=n}return n},toString:function(){return this.html}},r.exports=d});
$_mod.installed("raptor-renderer$1.4.4","raptor-util","1.0.10");
$_mod.def("/raptor-renderer$1.4.4/lib/raptor-renderer",function(e,r,n,t,o){"use strict";function u(e){return function(n,t,o){switch(arguments.length){case 0:return r.render(e);case 1:return r.render(e,n);case 2:return r.render(e,n,t);case 3:return r.render(e,n,t,o);default:throw new Error("Illegal arguments")}}}var a=e("/async-writer$1.4.2/src/index"),d=e("/raptor-renderer$1.4.4/lib/RenderResult-browser"),l=e("/raptor-util$1.0.10/extend");r.render=function(e,r,n){var t,o=arguments.length;o>1&&(t=arguments[o-1]);var u=n,c=r||{};"function"==typeof t?3===o&&(u=a.create()):(t=null,u||(u=a.create()));var i=c.$global;if(i&&(l(u.global,i),delete c.$global),"function"!=typeof e){var s=e.renderer||e.render||e.process;if("function"!=typeof s)throw new Error("Invalid renderer");s.call(e,c,u)}else e(c,u);return t?(u.on("finish",function(){t(null,new d(u.getOutput(),u))}).on("error",t),void u.end()):(u.end(),new d(u.getOutput(),u))},r.renderable=function(e,r){e.renderer=r,e.render=u(r)},r.createRenderFunc=u});
$_mod.installed("marko-widgets$6.1.2","raptor-async","1.1.2");
$_mod.def("/raptor-async$1.1.2/AsyncValue",function(t,i,s,e,o){function a(t){this.data=void 0,this.error=void 0,this._callbacks=void 0,this._state=d,this._timestamp=void 0,t&&(this._loader=t.loader,this._scope=t.scope,this._ttl=t.ttl||void 0)}function n(t,i,s){var e=t._callbacks;if(void 0!==e){t._callbacks=void 0;for(var o=0;o<e.length;o++){var a=e[o];a.callback.call(a.scope,i,s)}}}function r(t){t._state=u,t._loader.call(t._scope||t,function(i,s){i?t.reject(i):t.resolve(s)})}function c(t,i,s){void 0===t._callbacks&&(t._callbacks=[]),t._callbacks.push({callback:i,scope:s||t._scope||t})}function l(t){var i=t._ttl;return void 0!==i&&f()-t._timestamp>i?(t.unsettle(),!0):!1}var h=t("process"),d=0,u=1,_=2,v=3,f=Date.now||function(){return(new Date).getTime()};a.prototype={isResolved:function(){return this._state===_&&!l(this)},isRejected:function(){return this._state===v&&!l(this)},isLoading:function(){return this._state===u},isSettled:function(){return this._state>u&&!l(this)},load:function(t,i){if(!this._loader)throw new Error("Cannot call load when loader is not configured");return this.isSettled()&&this.unsettle(),t&&c(this,t,i),this._state!==u&&r(this),this.data},done:function(t,i){if(!t||t.constructor!==Function)throw new Error("Invalid callback: "+t);return this.isSettled()?t.call(i||this._scope||this,this.error,this.data):(h.domain&&(t=h.domain.bind(t)),c(this,t,i),void(this._loader&&this._state!==u&&r(this)))},reject:function(t){this.error=t,this.data=void 0,void 0!==this._ttl&&(this._timestamp=f()),this._state=this._loader?d:v,n(this,t,null)},resolve:function(t){this.error=void 0,this.data=t,void 0!==this._ttl&&(this._timestamp=f()),this._state=_,n(this,null,t)},reset:function(){this.unsettle(),this.callbacks=void 0},unsettle:function(){this._state=d,this.error=void 0,this.data=void 0,this._timestamp=void 0}},a.create=function(t){return new a(t)},s.exports=a});
$_mod.remap("/marko-widgets$6.1.2/lib/uniqueId","/marko-widgets$6.1.2/lib/uniqueId-browser");
$_mod.installed("marko-widgets$6.1.2","events","1.1.1");
$_mod.installed("marko-widgets$6.1.2","marko","3.9.3");
$_mod.installed("marko$3.9.3","async-writer","1.4.2");
$_mod.installed("marko$3.9.3","raptor-util","2.0.0");
$_mod.def("/raptor-util$2.0.0/escapeXml",function(t,n,r,e,o){function u(t){return g[t]}function i(t){return"string"==typeof t?p.test(t)?t.replace(a,u):t:null==t?"":t.toString()}function l(t){return"string"==typeof t?c.test(t)?t.replace(f,u):t:null==t?"":t.toString()}var p=/[&<]/,a=/[&<]/g,c=/[&<>\"\'\n]/,f=/[&<>\"\'\n]/g,g={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;","\n":"&#10;"};r.exports=i,i.attr=l});
$_mod.def("/raptor-util$2.0.0/extend",function(r,n,t,o,e){t.exports=function(r,n){if(r||(r={}),n)for(var t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r}});
$_mod.def("/raptor-util$2.0.0/inherit",function(t,o,r,e,p){function n(t,o,r){var e=t.prototype,p=function(){};return p.prototype=o.prototype,t.prototype=new p,t.$super=o,r!==!1&&u(t.prototype,e),t.prototype.constructor=t,t}function i(t,o){return n(t,o,!0)}var u=t("/raptor-util$2.0.0/extend");r.exports=i,i._inherit=n});
$_mod.remap("/marko$3.9.3/runtime/loader","/marko$3.9.3/runtime/loader_browser");
$_mod.def("/raptor-util$2.0.0/attr",function(t,r,e,n,u){var a=t("/raptor-util$2.0.0/escapeXml").attr;e.exports=function(t,r,e){if(r===!0)r="";else{if(null==r||r===!1)return"";r='="'+(e===!1?r:a(r))+'"'}return" "+t+r}});
$_mod.installed("marko-widgets$6.1.2","listener-tracker","1.1.0");
$_mod.main("/listener-tracker$1.1.0","lib/listener-tracker");
$_mod.def("/listener-tracker$1.1.0/lib/listener-tracker",function(e,t,r,n,i){function s(e){this._target=e,this._listeners=[],this._subscribeTo=null}function o(e){this._target=e}function u(){this._subscribeToList=[]}var h=0,c=1,l=2;s.prototype={_remove:function(e,t){var r=this._target,n=this._listeners;this._listeners=n.filter(function(n){var i=n[h],s=n[c],o=n[l];if(t){if(o&&e(i,o))return r.removeListener(i,o),!1}else if(e(i,s))return r.removeListener(i,o||s),!1;return!0});var i=this._subscribeTo;if(0===this._listeners.length&&i){var s=this,o=i._subscribeToList;i._subscribeToList=o.filter(function(e){return e!==s})}},on:function(e,t){return this._target.on(e,t),this._listeners.push([e,t]),this},once:function(e,t){var r=this,n=function(){r._remove(function(e,t){return n===t},!0),t.apply(this,arguments)};return this._target.once(e,n),this._listeners.push([e,t,n]),this},removeListener:function(e,t){return"function"==typeof e&&(t=e,e=null),t&&e?this._remove(function(r,n){return e===r&&t===n}):t?this._remove(function(e,r){return t===r}):e&&this.removeAllListeners(e),this},removeAllListeners:function(e){var t=this._listeners,r=this._target;if(e)this._remove(function(t,r){return e===t});else{for(var n=t.length-1;n>=0;n--){var i=t[n];r.removeListener(i[h],i[c])}this._listeners.length=0}return this}},s.prototype.addListener=s.prototype.on,o.prototype={on:function(e,t){return this._target.addEventListener(e,t),this},once:function(e,t){var r=this,n=function(){r._target.removeEventListener(e,n),t()};return this._target.addEventListener(e,n),this},removeListener:function(e,t){return this._target.removeEventListener(e,t),this}},u.prototype={subscribeTo:function(e,t){for(var r,n=!t||t.addDestroyListener!==!1,i=this._subscribeToList,o=0,u=i.length;u>o;o++){var h=i[o];if(h._target===e){r=h;break}}return r||(r=new s(e),n&&r.once("destroy",function(){r.removeAllListeners();for(var t=i.length-1;t>=0;t--)if(i[t]._target===e){i.splice(t,1);break}}),r._subscribeTo=this,i.push(r)),r},removeAllListeners:function(e,t){var r,n=this._subscribeToList;if(e)for(r=n.length-1;r>=0;r--){var i=n[r];if(i._target===e){i.removeAllListeners(t),i._listeners.length||n.splice(r,1);break}}else{for(r=n.length-1;r>=0;r--)n[r].removeAllListeners();n.length=0}}},t.wrap=function(e){var t,r;if(e.once||(t=new o(e)),r=new s(t||e),t){var n=function(){r._listeners.length=0,e.removeEventListener("DOMNodeRemovedFromDocument",n)};e.addEventListener("DOMNodeRemovedFromDocument",n)}else e.once("destroy",function(){r._listeners.length=0});return r},t.createTracker=function(){return new u}});
$_mod.def("/raptor-util$1.0.10/arrayFromArguments",function(r,t,l,n,a){var e=[].slice;l.exports=function(r,t){return r?t?t<r.length?e.call(r,t):[]:e.call(r):[]}});
$_mod.installed("marko-widgets$6.1.2","morphdom","1.4.3");
$_mod.main("/morphdom$1.4.3","lib/index");
$_mod.def("/morphdom$1.4.3/lib/index",function(e,t,n,r,i){function o(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function d(e){!m&&document.createRange&&(m=document.createRange(),m.selectNode(document.body));var t;return m&&m.createContextualFragment?t=m.createContextualFragment(e):(t=document.createElement("body"),t.innerHTML=e),t.childNodes[0]}function a(){}function u(e,t){return t&&t!==p?document.createElementNS(t,e):document.createElement(e)}function l(e,t){var n,r,i,o,d,a,u=t.attributes;for(n=u.length-1;n>=0;n--)r=u[n],i=r.name,d=r.value,o=r.namespaceURI,o?(i=r.localName||i,a=e.getAttributeNS(o,i)):a=e.getAttribute(i),a!==d&&(o?e.setAttributeNS(o,i,d):e.setAttribute(i,d));for(u=e.attributes,n=u.length-1;n>=0;n--)r=u[n],r.specified!==!1&&(i=r.name,o=r.namespaceURI,v(t,o,o?i=r.localName||i:i)||e.removeAttributeNode(r))}function f(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}function c(e){return e.id}function s(e,t,n){function r(e,t){var n=y(e);if(n?h[n]=e:t||U(e),e.nodeType===b)for(var i=e.firstChild;i;)r(i,t||n),i=i.nextSibling}function i(e){if(e.nodeType===b)for(var t=e.firstChild;t;)y(t)||(U(t),i(t)),t=t.nextSibling}function s(e,t,n){R(e)!==!1&&(t.removeChild(e),n?y(e)||(U(e),i(e)):r(e))}function m(e,t,n,r){var i=y(t);if(i&&delete h[i],!r){if(x(e,t)===!1)return;if(l(e,t),S(e),I(e,t)===!1)return}if("TEXTAREA"!==e.nodeName){var o,d,a,u,f,c=t.firstChild,v=e.firstChild;e:for(;c;){for(a=c.nextSibling,o=y(c);v;){var R=y(v);if(d=v.nextSibling,!n&&R&&(f=p[R]))f.parentNode.replaceChild(v,f),m(v,f,n),v=d;else{var U=v.nodeType;if(U===c.nodeType){var k=!1;if(U===b?(C(v,c)&&(R||o?o===R&&(k=!0):k=!0),k&&m(v,c,n)):(U===N||U==A)&&(k=!0,v.nodeValue=c.nodeValue),k){c=a,v=d;continue e}}s(v,e,n),v=d}}o&&((u=h[o])?(m(u,c,!0),c=u):p[o]=c),T(c)!==!1&&(e.appendChild(c),E(c)),c.nodeType===b&&(o||c.firstChild)&&w.push(c),c=a,v=d}for(;v;)d=v.nextSibling,s(v,e,n),v=d}var B=g[e.nodeName];B&&B(e,t)}if(n||(n={}),"string"==typeof t)if("#document"===e.nodeName||"HTML"===e.nodeName){var v=t;t=document.createElement("html"),t.innerHTML=v}else t=d(t);var h={},p={},y=n.getNodeKey||c,T=n.onBeforeNodeAdded||a,E=n.onNodeAdded||a,x=n.onBeforeElUpdated||n.onBeforeMorphEl||a,S=n.onElUpdated||a,R=n.onBeforeNodeDiscarded||a,U=n.onNodeDiscarded||a,I=n.onBeforeElChildrenUpdated||n.onBeforeMorphElChildren||a,k=n.childrenOnly===!0,w=[],B=e,M=B.nodeType,O=t.nodeType;if(!k)if(M===b)O===b?C(e,t)||(U(e),B=f(e,u(t.nodeName,t.namespaceURI))):B=t;else if(M===N||M===A){if(O===M)return B.nodeValue=t.nodeValue,B;B=t}if(B===t)U(e);else{m(B,t,!1,k);var V=function(e){for(var t=e.firstChild;t;){var n=t.nextSibling,r=y(t);if(r){var i=h[r];if(i&&C(t,i)){if(t.parentNode.replaceChild(i,t),m(i,t,!0),t=n,o(h))return!1;continue}}t.nodeType===b&&V(t),t=n}};if(!o(h))e:for(;w.length;){var P=w;w=[];for(var H=0;H<P.length;H++)if(V(P[H])===!1)break e}for(var L in h)if(h.hasOwnProperty(L)){var D=h[L];U(D),i(D)}}return!k&&B!==e&&e.parentNode&&e.parentNode.replaceChild(B,e),B}var m,v,h="undefined"!=typeof document?document.body||document.createElement("div"):{},p="http://www.w3.org/1999/xhtml",b=1,N=3,A=8;v=h.hasAttributeNS?function(e,t,n){return e.hasAttributeNS(t,n)}:h.hasAttribute?function(e,t,n){return e.hasAttribute(n)}:function(e,t,n){return!!e.getAttributeNode(n)};var g={OPTION:function(e,t){e.selected=t.selected,e.selected?e.setAttribute("selected",""):e.removeAttribute("selected","")},INPUT:function(e,t){e.checked=t.checked,e.checked?e.setAttribute("checked",""):e.removeAttribute("checked"),e.value!==t.value&&(e.value=t.value),v(t,null,"value")||e.removeAttribute("value"),e.disabled=t.disabled,e.disabled?e.setAttribute("disabled",""):e.removeAttribute("disabled")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n),e.firstChild&&(e.firstChild.nodeValue=n)}},C=function(e,t){return e.nodeName===t.nodeName&&e.namespaceURI===t.namespaceURI};n.exports=s});
$_mod.run("/marko-widgets$6.1.2/lib/client-init");
$_mod.def("/marko-widgets$6.1.2/lib/widget-args-id",function(r,i,t,e,d){var a=r("/marko-widgets$6.1.2/lib/repeated-id");t.exports=function(r){var i=r.id;if(i){var t=r.out,e=r.scope;if("#"===i.charAt(0))return i.substring(1);var d;return d=i.endsWith("[]")?a.nextId(t,e,i):e+"-"+i}}});
$_mod.def("/raptor-util$1.0.10/escapeXml",function(t,n,r,e,o){function u(t){return g[t]}function i(t){return"string"==typeof t?p.test(t)?t.replace(a,u):t:null==t?"":t.toString()}function l(t){return"string"==typeof t?c.test(t)?t.replace(f,u):t:null==t?"":t.toString()}var p=/[&<]/,a=/[&<]/g,c=/[&<>\"\'\n]/,f=/[&<>\"\'\n]/g,g={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;","\n":"&#10;"};r.exports=i,i.attr=l});
$_mod.def("/marko-widgets$6.1.2/taglib/helpers/widgetBody",function(e,t,i,d,o){var n=e("/marko-widgets$6.1.2/lib/index-browser"),r=e("/raptor-util$1.0.10/escapeXml"),f="undefined"!=typeof window;i.exports=function(e,t,i,d){if(null!=t&&null==i){if(f){var o=document.getElementById(t);if(o){var l=n.getWidgetsContext(e);l.addPreservedDOMNode(o,!0)}}}else"function"==typeof i?i(e,d):("string"==typeof i&&(i=r(i)),e.write(i))}});
$_mod.def("/marko-widgets$6.1.2/taglib/widget-tag",function(e,t,d,r,i){"use strict";function n(e,t){var d,r=document.getElementById(e);return r&&(d=r.__widget)&&d.__type===t?d:null}function a(e){e.registered||(e.registered=!0,s.registerWidget(e))}function g(e,t,d,r){var i=e.el.tagName;t.write("<"+i+' id="'+e.id+'">');var n=!1;r&&e.bodyEl&&(n=!0,c(t,e.bodyEl.id,r,e)),t.write("</"+i+">"),e._reset(),d.addPreservedDOMNode(e.el,null,n)}var s=e("/marko-widgets$6.1.2/lib/index-browser"),o=e("/raptor-util$1.0.10/extend"),l=e("/marko-widgets$6.1.2/lib/widget-args-id"),c=e("/marko-widgets$6.1.2/taglib/helpers/widgetBody"),w={elId:function(){}};d.exports=function(e,t){var d=t.global;d.__widgetsBeginAsyncAdded||(d.__widgetsBeginAsyncAdded=!0,t.on("beginAsync",function(e){var r,i=e.parentWriter,n=e.writer,a=d.widgets;if(a&&(r=a.widgetStack).length){var g=new s.WidgetsContext(t);g.widgetStack=[r[r.length-1]],n.data.widgets=g}n.data.widgetArgs=i.data.widgetArgs}));var r,i,c,f,v,_=e.type,u=e.config||e._cfg,p=e.state||e._state,y=e.props||e._props,m=t.data.widgetArgs,b=e.body,E=e._body,x=_&&_.name,W=e.id,A=e.hasDomEvents;m&&(delete t.data.widgetArgs,c=m.scope,W=W||l(m),r=m.extend,i=m.customEvents,r&&(r=r.map(function(e){return a(e),e.name})),(f=m.extendState)&&(p?o(p,f):p=f),(v=m.extendConfig)&&(u?o(u,v):u=v));var h=d.__rerenderWidget,k=d.__rerender===!0,B=s.getWidgetsContext(t);if(!W){var D=B.getCurrentWidget();D&&(W=D.nextId())}var I;if(h?(I=h,W=h.id,delete d.__rerenderWidget):k&&(I=n(W,x)),!W&&e.hasOwnProperty("id"))throw new Error('Invalid widget ID for "'+x+'"');if(x){a(_);var $=!0;if(I&&!h){if(p&&(I._replaceState(p),I._processUpdateHandlers()===!0))return $=!1,void g(I,t,B,E);if(!I.isDirty()&&!I.shouldUpdate(y,p))return $=!1,void g(I,t,B,E)}I&&I._emitLifecycleEvent("beforeUpdate");var C=B.beginWidget({type:x,id:W,config:u,state:p,hasDomEvents:A,customEvents:i,scope:c,createWidget:e.createWidget,extend:r,existingWidget:I,bodyElId:b});$&&(e.renderBody(t,C),s.writeDomEventsEl(C,t)),C.end()}else e.renderBody(t,w)}});
$_mod.installed("markojs.com$1.0.0","marko","3.9.3");
$_mod.def("/markojs.com$1.0.0/src/components/app-header/template.marko",function(e,a,i,t,o){function n(a){var i={name:"/markojs.com$1.0.0/src/components/app-header/index",def:function(){return e("/markojs.com$1.0.0/src/components/app-header/index")}},t=e("/marko-widgets$6.1.2/lib/index-browser"),o=t.attrs,n=(a.s,a.e,a.ne,a.x),r=a.t,s=r(e("/marko-widgets$6.1.2/taglib/widget-tag")),c=a.a,d=a.as,l=a.f,m=a.ca,g=a.xa;return function(e,a){s({type:i,id:"header",_cfg:e.widgetConfig,_state:e.widgetState,_props:e.widgetProps,_body:e.widgetBody,renderBody:function(a,i){a.w("<header"+c("id",i.id)+d(o(i))+'><div class="container"><div id="logo">'),e.site.logo&&a.w('<a href="/"><img src="/images/logo-header.png"'+c("alt",e.site.title)+"></a>"),a.w('</div><nav role="navigation" id="nav" class="mobile-hidden"><ul class="main-navigation">'),l(e.site.navLinks,function(i){a.w("<li><a"+c("href",i.url)+m(i.name===e.activeSection?"active":"")+">"+n(i.title)+"</a></li>")}),a.w('<li class="nav-search"><i class="fa fa-search" data-w-onclick="handleToggleSearchClick|'+g(i.id)+'"></i><form action="https://google.com/search" method="get" class="search-form"><input type="hidden" name="as_sitesearch"'+c("value",e.site.searchUrl||e.site.url)+'><input type="text" name="q" results="0" placeholder class="search-input"></form></li></ul></nav><div style="clear: both"></div></div></header>')}},a)}}(i.exports=e("/marko$3.9.3/runtime/marko-runtime").c(t)).c(n)});
$_mod.def("/markojs.com$1.0.0/src/components/app-header/index",function(e,a,s,n,t){s.exports=e("/marko-widgets$6.1.2/lib/index-browser").defineComponent({template:e("/markojs.com$1.0.0/src/components/app-header/template.marko"),init:function(){this.searchExpanded=!1},handleToggleSearchClick:function(){var e="search-input--expanded",a=document.getElementsByClassName("search-input")[0];this.searchExpanded=!this.searchExpanded,this.searchExpanded?(a.classList.add(e),a.focus()):a.classList.remove(e)}})});