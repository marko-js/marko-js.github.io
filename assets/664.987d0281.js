(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[664],{"../components/repl/index.marko":(e,t,n)=>{"use strict";n.d(t,{Z:()=>se});var o=n("../../node_modules/marko/dist/runtime/vdom/index.js"),s=n("../../node_modules/@marko/tags-api-preview/dist/util/replace-assignments/index.mjs"),a=n("../../node_modules/@marko/tags-api-preview/dist/transform/cached-values/index-browser.mjs"),l=(n("../../node_modules/marko/dist/runtime/helpers/tags-compat-dom.js"),n("../../node_modules/@marko/tags-api-preview/dist/transform/native-tag-var/index-browser.mjs")),r=n("../../node_modules/@marko/tags-api-preview/dist/components/lifecycle/index.mjs"),i=n("../../node_modules/@marko/tags-api-preview/dist/components/_instance/index.marko"),d=n("../../node_modules/marko/dist/runtime/helpers/render-tag.js"),c=n.n(d),u=n("../../node_modules/marko/dist/runtime/helpers/class-value.js"),m=n.n(u),p=n("../../node_modules/@marko/tags-api-preview/dist/chunk-5R2Z7TR6.mjs"),h=n("../../node_modules/marko/dist/runtime/components/renderer.js"),f=n.n(h),v=n("../../node_modules/marko/dist/runtime/components/registry.js"),g=n("../../node_modules/marko/dist/runtime/components/defineComponent.js"),y=n.n(g);const w="6o3N4O4f",b=(0,o.t)(w),k=b;(0,v.r)(w,(()=>b));const _={onCreate(){this.state={}}};b._=f()((function(e,t,n,o,d,u){(0,p.begin)();try{var h=o,f=d;const{selectedIndexChange:u,filesChange:p,files:v,selectedIndex:g}=e,y=p||(e=>h.setState("0",e)),w=p?v:"0"in f?f[0]:f[0]=v,b=u||(e=>h.setState("1",e)),k=u?g:"1"in f?f[1]:f[1]=g,_=w[k];t.be("div",{class:"file-tabs"},"0",o,null,1);{const e="2"in f?f[2]:f[2]=1,d=e=>h.setState("2",e);let u=0;for(const e of w||[]){let o=u++;const d=`[${o}]`;c()(i.default,{renderBody:(t,n,u,p)=>{var h=n,f=u;const v="0"in p?p[0]:p[0]=!1,g=e=>u.setState("0",e),j=_===e,x=o>0;t.be("div",{class:m()(["file-tab",{selected:j}])},"2"+d,f,null,1,{onclick:h.d("click",(function(){j?(0,s.default)(g,!0):((0,s.default)(g,!1),(0,s.default)(b,o))}),!1)}),v&&j&&x?c()(i.default,{renderBody:(t,n,i,d)=>{var c=n,u=i;const m="0"in d?d[0]:d[0]=e.name,p=(0,a.cache)((0,a.cached)(i,[m,w])||function(){const t={...e,name:m,path:e.path.replace(e.name,m)};(0,s.default)(y,[...w.slice(0,o),t,...w.slice(o+1)]),(0,s.default)(g,!1)}),h=(0,l.default)(i,"0");var f=e=>i.setState("0",e);t.e("input",{type:"text",size:m.length,value:m},"@0",u,0,0,{pa:[f&&"value"],onblur:c.d("blur",p,!1),onkeydown:c.d("keydown",(function(e){"Enter"===e.code&&p()}),!1),oninput:c.d("input",(e=>{f(e.target.value)}),!1)}),(0,r.default)(u,{onMount:(0,a.cache)((0,a.cached)(i,[m])||function(){h().focus(),h().setSelectionRange(0,m.indexOf("."))})})}},t,h,"3"+d):t.t(e.name,f),x&&(t.be("button",{class:"file-close"},"4"+d,f,null,1,{onclick:h.d("click",(function(t){window.confirm(`Delete ${e.path}?`)&&(k>=o&&(0,s.default)(b,k-1),(0,s.default)(y,[...w.slice(0,o),...w.slice(o+1)])),t.stopPropagation()}),!1)}),t.t("×",f),t.ee()),t.ee()}},t,n,"1"+d)}t.be("button",{class:"new-file"},"5",o,null,1,{onclick:n.d("click",(function(){const t={name:`Component${e}.marko`,path:`/components/Component${e}.marko`,content:""},n=w.length;(0,s.default)(y,w.concat(t)),(0,s.default)(b,n),(0,s.default)(d,e+1)}),!1)}),t.t("+",o),t.ee()}t.ee()}finally{(0,p.end)()}}),{t:w},_),b.Component=y()(_,b._);var j=n("../../node_modules/marko/dist/runtime/helpers/dynamic-tag.js"),x=n.n(j),C=n("../../node_modules/marko/dist/runtime/helpers/attr-tag.js"),S=n("../../node_modules/marko/dist/runtime/vdom/helpers/const-element.js"),L=n.n(S);const T="QAUP5peK",E=(0,o.t)(T),O=E,B=L()("div",{class:"pane-divider"},0);(0,v.r)(T,(()=>E));const M={};E._=f()((function(e,t,n,o,s,a){(0,p.begin)();try{const{actions:s,body:a}=e;t.be("div",{class:"pane"},"0",o,null,1),t.be("div",{class:"pane-actions"},"1",o,null,1),x()(t,s.renderBody,null,null,null,null,n,"2"),t.ee(),t.n(B,o),t.be("div",{class:"pane-body"},"4",o,null,1),x()(t,a.renderBody,null,null,null,null,n,"5"),t.ee(),t.ee()}finally{(0,p.end)()}}),{t:T,i:!0},M),E.Component=y()(M,E._);var H=n("../../node_modules/@marko/tags-api-preview/dist/components/effect/index.mjs");const R="rRMAwOPg",A=(0,o.t)(R),F=A;(0,v.r)(R,(()=>A));const I={onCreate(){this.state={}}};A._=f()((function(e,t,n,o,s,r){(0,p.begin)();try{var i=o;const{value:s,valueChange:r,renderBody:d,class:c}=e,u=(0,l.default)(i,"0");t.be("select",{class:m()(c)},"@0",o,null,1,{onchange:n.d("change",(function(e){r(e.target.value)}),!1)}),x()(t,d,null,null,null,null,n,"0"),t.ee(),(0,H.default)(o,(0,a.cache)((0,a.cached)(i,[s,d,r])||function(){u().value=s}))}finally{(0,p.end)()}}),{t:R},I),A.Component=y()(I,A._);var Z=n("../../node_modules/lz-string/libs/lz-string.js"),q=n("../../node_modules/@marko/tags-api-preview/dist/translate/native-tag-handlers/index-browser.mjs"),z=n("../../node_modules/marko/dist/runtime/vdom/helpers/attrs.js"),P=n.n(z);const U="ftG9dvL8",$=(0,o.t)(U),N=$,Y=L()("span",null,1).t("Open in playground ");(0,v.r)(U,(()=>$));const D={};$._=f()((function(e,t,n,o,s,a){(0,p.begin)();try{const{files:s,...a}=e;var l={};t.be("a",P()((0,q.default)({...a,href:`/playground/#${(0,Z.compressToEncodedURIComponent)(JSON.stringify(s))}`,target:"_top",class:"playground-link"},n,"a",l)),"0",o,null,4,{...l}),t.n(Y,o),t.t("↗",o),t.ee()}finally{(0,p.end)()}}),{t:U,i:!0},D),$.Component=y()(D,$._);var V=n("../../node_modules/@marko/tags-api-preview/dist/components/return/index-browser.mjs");const J="dL815V5K",K=(0,o.t)(J),Q=K;(0,v.r)(J,(()=>K));const W={onCreate(){this.state={}}};K._=f()((function(e,t,n,o,l,r){(0,p.begin)();try{var i=o,d=l;const{value:t,fallback:n}=e,r="0"in d?d[0]:d[0]=window.matchMedia(t).matches,c=e=>i.setState("0",e);(0,H.default)(o,(0,a.cache)((0,a.cached)(i,[t])||function(){const e=window.matchMedia(t),n=()=>(0,s.default)(c,!!e.matches);return e.addEventListener("change",n),(0,s.default)(c,!!e.matches),()=>e.removeEventListener("change",n)})),e._return&&e._return({value:r},1)}finally{(0,p.end)()}}),{t:J},W),K.Component=y()(W,K._);const X="V970f081",G=(0,o.t)(X),ee=G;(0,v.r)(X,(()=>G));const te={onCreate(){this.state={}}};G._=f()((function(e,t,n,o,r,d){(0,p.begin)();try{var u=o,h=r;const{left:d,right:p}=e,y="0"in h?h[0]:h[0]=.5,w=e=>u.setState("0",e),b="1"in h?h[1]:h[1]=!1,k=e=>u.setState("1",e);var f=(0,V.default)(u);x()(t,Q,(()=>({value:"(max-aspect-ratio: 1/1)",_return:f})),null,null,null,n,"0");const{value:_}=f(),j=(0,l.default)(u,"0");t.be("div",{class:m()(["panes",b&&"resizing"])},"@0",o,null,1);var v={};t.be("div",P()((0,q.default)({...d,style:`flex-grow:${y}`},n,"div",v)),"1",o,null,4,{...v}),x()(t,d.renderBody,null,null,null,null,n,"2"),t.ee(),t.be("div",{class:"divider"},"3",o,null,1),t.e("div",{class:"inner"},"4",o,0,1,{onmousedown:n.d("mousedown",(function(e){(0,s.default)(k,!0),e.preventDefault(),e.stopPropagation()}),!1)}),t.ee();var g={};t.be("div",P()((0,q.default)({...p,style:"flex-grow:"+(1-y)},n,"div",g)),"5",o,null,4,{...g}),x()(t,p.renderBody,null,null,null,null,n,"6"),t.ee(),t.ee(),b&&c()(i.default,{renderBody:(e,t,n,o)=>{var l=n;(0,H.default)(l,(0,a.cache)((0,a.cached)(n,[_])||function(){const e=e=>{if(e.buttons||e.which){const t=j().getBoundingClientRect(),n=_?(e.clientY-t.top)/t.height:(e.clientX-t.left)/t.width;n>0&&(0,s.default)(w,Math.min(.8,Math.max(.2,n)))}else(0,s.default)(k,!1)};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)}))}},t,n,"7")}finally{(0,p.end)()}}),{t:X},te),G.Component=y()(te,G._);const ne="Y/QiYO60",oe=(0,o.t)(ne),se=oe,ae=L()("option",{value:"preview"},1).t("App Preview"),le=L()("option",{value:"compiled-html"},1).t("Compiled (HTML)"),re=L()("option",{value:"compiled-vdom"},1).t("Compiled (DOM)");(0,v.r)(ne,(()=>oe));const ie={onCreate(){this.state={}}};oe._=f()((function(e,t,o,l,d,u){(0,p.begin)();try{var m=l,h=d;const{filesChange:u,getCompilerOptions:p,files:f}=e,v="0"in h?h[0]:h[0]=0,g=e=>m.setState("0",e),y="1"in h?h[1]:h[1]="preview",w=e=>m.setState("1",e),b="2"in h?h[2]:h[2]=!1,_=e=>m.setState("2",e),j=f[v];x()(t,ee,(()=>(0,C.i)((()=>{(0,C.a)("left",{class:"editor-container",renderBody:e=>{x()(e,O,(()=>(0,C.i)((()=>{(0,C.a)("actions",{renderBody:e=>{c()(i.default,{renderBody:(e,t,n,o)=>{var l=t;x()(e,k,(()=>({files:f,filesChange:u,selectedIndex:v,selectedIndexChange:(0,a.cache)((0,a.cached)(n,[])||(e=>(0,s.default)(g,e)))})),null,null,null,l,"3")}},e,o,"2")}}),(0,C.a)("body",{renderBody:e=>{c()(i.default,{renderBody:(e,t,o,l)=>{var d=t,m=o;const p="0"in l?l[0]:l[0]=null,h=e=>o.setState("0",e);p&&c()(i.default,{renderBody:(e,t,n,o)=>{var l=t;x()(e,p,(()=>({value:j.content,filename:j.path,valueChange:(0,a.cache)((0,a.cached)(n,[j,f,v])||function(e){const t={...j,content:e};(0,s.default)(u,[...f.slice(0,v),t,...f.slice(v+1)]),(0,s.default)(_,!0)})})),null,null,null,l,"6")}},e,d,"5"),(0,r.default)(m,{onMount:(0,a.cache)((0,a.cached)(o,[])||(async()=>{const e=await Promise.all([n.e(103),n.e(410),n.e(109),n.e(888),n.e(176)]).then(n.bind(n,"../components/repl/components/editor.marko"));await e.loading,(0,s.default)(h,e)}))})}},e,o,"4")}})}))),null,null,null,o,"1")}}),(0,C.a)("right",{renderBody:e=>{x()(e,O,(()=>(0,C.i)((()=>{(0,C.a)("actions",{renderBody:e=>{c()(i.default,{renderBody:(e,t,n,o)=>{var l=t,r=n;x()(e,F,(()=>({value:y,valueChange:(0,a.cache)((0,a.cached)(n,[])||function(e){(0,s.default)(w,e),(0,s.default)(_,!1)}),class:"preview-select"})),(e=>{e.n(ae,r),e.n(le,r),e.n(re,r)}),null,null,l,"9"),x()(e,N,(()=>({files:f})),null,null,null,l,"13")}},e,o,"8")}}),(0,C.a)("body",{renderBody:e=>{c()(i.default,{renderBody:(e,t,o,l)=>{var i=t,d=o;const c="0"in l?l[0]:l[0]=null,u=e=>o.setState("0",e);x()(e,c,(()=>({type:y,files:f,selectedFile:j,getCompilerOptions:p,debounce:b})),null,null,null,i,"15"),(0,r.default)(d,{onMount:(0,a.cache)((0,a.cached)(o,[])||(async()=>{(0,s.default)(u,await Promise.all([n.e(103),n.e(641),n.e(410),n.e(69),n.e(888),n.e(551),n.e(25)]).then(n.bind(n,"../components/repl/components/preview.marko")))}))})}},e,o,"14")}})}))),null,null,null,o,"7")}})}))),null,null,null,o,"0")}finally{(0,p.end)()}}),{t:ne},ie),oe.Component=y()(ie,oe._)},"./playground/components/hash-value.marko":(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var o=n("../../node_modules/marko/dist/runtime/vdom/index.js"),s=n("../../node_modules/lz-string/libs/lz-string.js"),a=n("../../node_modules/@marko/tags-api-preview/dist/transform/cached-values/index-browser.mjs"),l=n("../../node_modules/@marko/tags-api-preview/dist/util/replace-assignments/index.mjs"),r=n("../../node_modules/@marko/tags-api-preview/dist/components/lifecycle/index.mjs"),i=n("../../node_modules/@marko/tags-api-preview/dist/chunk-5R2Z7TR6.mjs"),d=n("../../node_modules/marko/dist/runtime/components/renderer.js"),c=n.n(d),u=n("../../node_modules/marko/dist/runtime/components/registry.js"),m=n("../../node_modules/marko/dist/runtime/components/defineComponent.js"),p=n.n(m);const h="41NMzc7K",f=(0,o.t)(h),v=f;(0,u.r)(h,(()=>f));const g={onCreate(){this.state={}}};f._=c()((function(e,t,n,o,d,c){(0,i.begin)();try{var u=o,m=d;const{value:t}=e,n="0"in m?m[0]:m[0]=function(){try{return JSON.parse((0,s.decompressFromEncodedURIComponent)(window.location.hash.slice(1)))}catch(e){console.error(e)}}()||t,i=e=>u.setState("0",e);(0,r.default)(o,{onMount:(0,a.cache)((0,a.cached)(u,[])||function(){window.addEventListener("hashchange",this.handler=()=>{try{this.isUpdating?this.isUpdating=!1:(0,l.default)(i,JSON.parse((0,s.decompressFromEncodedURIComponent)(window.location.hash.slice(1))))}catch(e){console.error(e)}})}),onUpdate:(0,a.cache)((0,a.cached)(u,[n])||function(){this.isUpdating=!0,window.location.hash=(0,s.compressToEncodedURIComponent)(JSON.stringify(n))}),onDestroy:(0,a.cache)((0,a.cached)(u,[])||function(){window.removeEventListener("hashchange",this.handler)})}),e._return&&e._return({value:n,valueChange:(0,a.cache)((0,a.cached)(u,[])||(e=>(0,l.default)(i,e)))},1)}finally{(0,i.end)()}}),{t:h},g),f.Component=p()(g,f._)},"./playground/v6/index.marko?browser-entry":(e,t,n)=>{"use strict";var o=n("../../node_modules/marko/dist/runtime/components/index.js"),s=(n("../components/app-layout/favicon.png"),n("../logos/marko.svg"),n("../logos/marko-uwu.png"),n("../components/app-layout/components/layout-search/component-browser.js")),a=n("../components/app-layout/components/layout-header/component-browser.js"),l=n.n(a),r=n("../components/app-layout/components/layout-sidebar/components/version-switcher/component-browser.js"),i=n.n(r),d=n("../components/app-layout/components/layout-sidebar/component-browser.js"),c=n.n(d),u=(n("../components/app-footer/openjsf.svg"),n("../components/app-footer/osi.svg"),n("../components/app-footer/ebay.svg"),n("../logos/discord.svg"),n("../../node_modules/marko/dist/runtime/vdom/index.js")),m=n("../../node_modules/@marko/translator-tags/dist/index.js"),p=n("../../node_modules/@marko/tags-api-preview/dist/transform/cached-values/index-browser.mjs"),h=n("../../node_modules/@marko/tags-api-preview/dist/components/return/index-browser.mjs"),f=(n("../../node_modules/marko/dist/runtime/helpers/tags-compat-dom.js"),n("./playground/components/hash-value.marko")),v=n("../../node_modules/marko/dist/runtime/helpers/dynamic-tag.js"),g=n.n(v),y=n("../components/repl/index.marko"),w=n("../../node_modules/@marko/tags-api-preview/dist/chunk-5R2Z7TR6.mjs"),b=n("../../node_modules/marko/dist/runtime/components/renderer.js"),k=n.n(b),_=n("../../node_modules/marko/dist/runtime/components/registry.js"),j=n("../../node_modules/marko/dist/runtime/components/defineComponent.js"),x=n.n(j);const C="Mtx/OLsr",S=(0,u.t)(C);(0,_.r)(C,(()=>S));const L={onCreate(){this.state={}}};S._=k()((function(e,t,n,o,s,a){(0,w.begin)();try{var l=o,r=(0,h.default)(l);g()(t,f.Z,(()=>({value:(0,p.cache)((0,p.cached)(l,[])||[{name:"index.marko",path:"/components/index.marko",content:"<let/count=0/>\n<button onClick() { count++ }>\n  ${count}\n</button>"}]),_return:r})),null,null,null,n,"0");const{valueChange:e,value:s}=r();g()(t,y.Z,(()=>({getCompilerOptions:(0,p.cache)((0,p.cached)(l,[])||function(){return{translator:m,optimize:!1}}),files:s,filesChange:e})),null,null,null,n,"1")}finally{(0,w.end)()}}),{t:C},L),S.Component=x()(L,S._),(0,o.register)("HkYzEWAp",s.Z),(0,o.register)("OIKmBXjW",l()),(0,o.register)("07hv1F0+",i()),(0,o.register)("mFesaajv",c()),(0,o.init)()},"../../browser-shims/compiler/dist/babel-types/index.js":(e,t,n)=>{e.exports=n("../../node_modules/@marko/compiler/dist/babel-types/index.js")},"../../browser-shims/compiler/index.js":(e,t,n)=>{t.types=n("../../browser-shims/compiler/dist/babel-types/index.js")},"../../browser-shims/fs.js":(e,t,n)=>{e.exports=n("../../node_modules/memfs/lib/index.js")},"../../browser-shims/module.js":(e,t,n)=>{const o=n("../../node_modules/path-browserify/index.js"),s=n("../../node_modules/resolve/index.js"),a=n("../../node_modules/resolve.exports/dist/index.js"),l={_nodeModulePaths:function(e){const t=[];for(;;){const n=o.dirname(e);if(t.push(o.join(e,"node_modules")),!n||n===e)break;e=n}return t},_resolveFilename:function(e,t){return s.sync(e,{basedir:o.dirname(t.filename),paths:t.paths,extensions:[".js",".json",".marko",".mjs"],pathFilter(e,t,n){if(/^index(\.[^/\\]+)?$/.test(n))try{return a.legacy(e,l._resolveExportsOptions)}catch{}else try{return a.resolve(e,n,l._resolveExportsOptions)}catch{}return n}})},_resolveExportsOptions:{browser:!0}};e.exports=l},"../../browser-shims/process.js":e=>{e.exports={env:{},browser:!0,versions:{node:"1000.0.0"},cwd:()=>"/"}},"../components/app-layout/components/layout-header/component-browser.js":(e,t,n)=>{var o=n("../components/app-layout/components/layout-header/events.js"),s="headspace--fixed",a="headspace--hidden";e.exports={onMount(){o.emit("create",this);var e,t=0,n=this.getEl("header").offsetHeight,s=(this.getEl("banner")||{offsetHeight:0}).offsetHeight,a=(e=()=>{var e=window.pageYOffset;e<=s?this.reset():!this.paused&&e>n&&(Math.abs(e-t)>=3||e>t&&t<=n)&&(e>t?this.hide():this.fix()),t=e},()=>window.requestAnimationFrame(e));a(),window.addEventListener("scroll",a)},reset(){this.removeClass(s),this.removeClass(a),o.emit("reset")},fix(){this.addClass(s),this.removeClass(a),o.emit("fix")},hide(){this.addClass(a),o.emit("hide")},addClass(e){this.getEl("header").classList.add(e)},removeClass(e){this.getEl("header").classList.remove(e)},pause(){this.paused=!0},resume(){setTimeout((()=>window.requestAnimationFrame((()=>{this.paused=!1}))))},toggleMenu(){o.emit("toggle-menu")}}},"../components/app-layout/components/layout-header/events.js":(e,t,n)=>{var o=n("../../node_modules/events/events.js");e.exports=new o},"../components/app-layout/components/layout-search/component-browser.js":(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=class{async onMount(){const{init:e}=await Promise.all([n.e(857),n.e(499)]).then(n.bind(n,"../components/app-layout/components/layout-search/doc-search.js"));e(this.getEl("container"))}}},"../components/app-layout/components/layout-sidebar/component-browser.js":(e,t,n)=>{var o,s=n("../components/app-layout/components/layout-header/events.js"),a=[].forEach,l=[].filter,r=[].slice;e.exports={onMount(){this.preventOverscroll(),this.listenForHeaderChanges(),this.initScrollSpy()},initScrollSpy(){var e=[1,2,3,4,5,6].map((e=>".doc-content h"+e)).join(","),t=r.call(document.querySelectorAll(e)),n=!1;t.length&&this.subscribeTo(window).on("scroll",(()=>{n||(n=!0,setTimeout((()=>{var e,o,s=window.innerHeight/3;t.map((t=>{var n=t.getBoundingClientRect().top;(null==o||n<s&&Math.abs(n)<Math.abs(o))&&(o=n,e=t)}));var r=e.id,i=this.el.querySelector('a[href="#'+r+'"]')||this.el.querySelector("a.selected"),d=i,c=d.nextSibling;for(c&&a.call(c.querySelectorAll("a[href^=\\#]"),(e=>e.classList.remove("selected")));d;){var u=d.closest("ul"),m=u&&l.call(u.querySelectorAll(":scope > li > a[href^=\\#]"),(e=>e!==d));m&&m.forEach((e=>e.classList.remove("selected"))),d.classList.add("selected"),d=u&&u.previousElementSibling}this.scrollAnchorIntoView(i),n=!1}),50))}))},listenForHeaderChanges(){a.call(this.el.querySelectorAll("a[href^=\\#]"),(e=>{this.subscribeTo(e).on("click",(()=>{o.hide(),o.pause(),o.resume(),this.hide()}))}));var e=r.call(this.el.querySelectorAll("a.selected")).pop();e&&this.subscribeTo(e).on("click",(e=>{window.scrollTo(0,0),o.reset(),e.preventDefault()})),this.subscribeTo(s).on("reset",(()=>{this.el.classList.remove("no-header"),this.el.classList.remove("fixed"),setTimeout((()=>this.el.classList.remove("transition")),0)})).on("fix",(()=>{this.el.classList.remove("no-header"),this.el.classList.add("fixed"),setTimeout((()=>this.el.classList.add("transition")),0)})).on("hide",(()=>{this.el.classList.add("no-header"),this.el.classList.add("fixed"),setTimeout((()=>this.el.classList.add("transition")),0)})).on("toggle-menu",(()=>{this.el.classList.contains("show")?(this.el.classList.remove("show"),document.body.style.overflow=""):this.el.classList.add("show")})).on("create",(e=>{o=e,window.pageYOffset>o.el.offsetHeight&&(this.el.classList.add("no-header"),this.el.classList.add("fixed"))}))},preventOverscroll(){var e=this.getEl("sidebar");this.subscribeTo(document.body).on("wheel",(t=>{var n=t.deltaY,o=e.scrollTop+n,s=e.scrollHeight-e.offsetHeight,a=o<=0,l=o>=s;(n<0&&a||n>0&&l)&&(t.target===e||e.contains(t.target))&&(a&&0!=e.scrollTop?e.scrollTop=0:l&&e.scrollTop!=s&&(e.scrollTop=s),t.preventDefault())}))},scrollAnchorIntoView(e){for(var t,n=this.getEl("sidebar"),o=(e.offsetTop,n.scrollTop),s=n.offsetHeight,a=o+s,l=e.closest("li");(t=l.parentNode.closest("ul"))&&t.offsetHeight<s;)l=t;var r=l.offsetTop,i=l.offsetHeight;r>o&&r+i<a||(n.scrollTop=r+i/2-s/2)},hide(){this.el.classList.remove("show"),document.body.style.overflow=""}}},"../components/app-layout/components/layout-sidebar/components/version-switcher/component-browser.js":e=>{e.exports={switchVersion(e){var t=e.target.value;"current"!==t&&(e.target.value="current",window.location.href=t)}}},"../components/app-footer/ebay.svg":(e,t,n)=>{"use strict";n.p},"../components/app-footer/openjsf.svg":(e,t,n)=>{"use strict";n.p},"../components/app-footer/osi.svg":(e,t,n)=>{"use strict";n.p},"../components/app-layout/favicon.png":(e,t,n)=>{"use strict";n.p},"../logos/discord.svg":(e,t,n)=>{"use strict";n.p},"../logos/marko-uwu.png":(e,t,n)=>{"use strict";n.p},"../logos/marko.svg":(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"91bc26e5.svg"},"?98fd":()=>{},"?2e65":()=>{},"?6a61":()=>{},"?e376":()=>{},"?7dc1":()=>{},"?f84f":()=>{},"?378b":()=>{},"?4c42":()=>{},"?c95a":()=>{},"?c86f":()=>{},"?d1e8":()=>{}},e=>{e.O(0,[323,903,103,508,641,136],(()=>("./playground/v6/index.marko?browser-entry",e(e.s="./playground/v6/index.marko?browser-entry")))),e.O()}]);
//# sourceMappingURL=664.987d0281.js.map