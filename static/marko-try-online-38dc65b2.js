!function(){function r(r,n){var t=new Error('Cannot find module "'+r+'"'+(n?' from "'+n+'"':""));return t.code="MODULE_NOT_FOUND",t}function n(r){this.id=this.filename=r[0],this.loaded=!1}function t(r,n,t){var i=t&&t.globals;if($[r]=n,i)for(var e=b||global,o=0;o<i.length;o++){var u=i[o];F[r]=e[u]=h(r,r)}}function i(r,n){k[r]=n}function e(r,n){D[r]=n}function o(r,n,t,i){if(n===!1)return void(j[r+"/$/"+i]=null);var e="."===n.charAt(0)?r+n.substring(1):r+"/$/"+n;j[e]=[t],void 0!==i&&(j[r+"/$/"+i]=[t,n,e])}function u(r){var n,t=0,i=r.length;for(n=0;i>n;n++){var e=r[n];"."===e||(".."===e?t--:(r[t]=e,t++))}return 1===t?"/":(t>2&&0===r[t-1].length&&t--,r.length=t,r.join("/"))}function a(r,n){var t=n.split("/"),i="/"==r?[""]:r.split("/");return u(i.concat(t))}function f(r){var n,t=r.lastIndexOf(".");return-1===t||-1!==(n=r.lastIndexOf("/"))&&n>t?null:r.substring(0,t)}function s(r,n){return r.substring(0,r.length-n)}function v(r,n,t,i){var e=i&&"/"+n+"@"+i+t;return r+=t,[r,e,void 0]}function d(r,n){var t=r.lastIndexOf("$");if(-1===t)return[r,r,void 0];t+=2;var i,e,o,u=r.indexOf("/",t+3);-1===u?(i=r,e="",o=r.substring(t)):("@"===r.charAt(t)&&(u=r.indexOf("/",u+1)),i=r.substring(0,u),e=r.substring(u),o=r.substring(t,u));var a=j[i];return void 0===a?void 0:null===a?[]:v(a[2]||i,a[1]||o,e,a[0])}function l(r,n){"/"===r.charAt(r.length-1)&&(r=r.slice(0,-1));for(var t=m.length,i=0;t>i;i++){var e=m[i]+r,o=c(e,n);if(o)return o}var u,a,f=r.indexOf("/");-1!==f&&"@"===r.charAt(0)&&(f=r.indexOf("/",f+1)),-1===f?(u=r,a=""):(u=r.substring(0,f),a=r.substring(f));var s=n+"/$/"+u,d=j[s];if(void 0!==d)return null===d?[]:v(d[2]||s,d[1]||u,a,d[0]);for(var l=n.lastIndexOf("/");-1!==l;){var h=-1;if(l>0&&(h=n.lastIndexOf("/",l-1),-1!==h&&l-h===2&&"$"===n.charAt(h+1)))l=h;else{if(s=n.substring(0,l)+"/$/"+u,d=j[s],void 0!==d)return null===d?[]:v(d[2]||s,d[1]||u,a,d[0]);if(-1===h)break;l=h}}return void 0}function c(r,n){var t,i;if("."===r.charAt(0))t=d(a(n,r),r);else if("/"===r.charAt(0))t=d(u(r.split("/")));else{if(i=D[r])return c(i);t=l(r,n)}if(!t)return void 0;var e=t[0],o=t[1];if(void 0===e)return["$","$",{}];if(!o)return c(e);var v;void 0!==(v=k[o])&&(e=a(e,v),o=a(o,v)),i=D[o],void 0!==i&&(e=a(e+"/..",i),o=a(o+"/..",i));var h=$[o];if(void 0===h){var g;if(null===(g=f(o))||void 0===(h=$[g]))return void 0;e=s(e,o.length-g.length),o=g}return t[0]=e,t[1]=o,t[2]=h,t}function h(t,i){if(!t)throw r("");var e=c(t,i);if(!e)throw r(t,i);var o=e[0],u=y[o];if(void 0!==u)return u.exports;var a=e[1];if(F.hasOwnProperty(a))return F[a];var f=e[2];return u=new n(e),y[o]=u,u.load(f),u.exports}function g(r,n){var t=!n||n.wait!==!1;return t&&!A?I.push([r,n]):void h(r,"/")}function p(){A=!0;for(var r;r=I.length;){var n=I;I=[];for(var t=0;r>t;t++){var i=n[t];g(i[0],i[1])}if(!A)break}}function x(r){m.push(r)}var b="undefined"==typeof window?null:window;if(!b||!b.$rmod){var O,w,$={},m=[],A=!1,I=[],y={},j={},k={},D={},E={},F={};n.cache=y,w=n.prototype,w.load=function(n){var t=this.id;if(n&&n.constructor===Function){var i=t.lastIndexOf("/"),e=t.substring(0,i),o=t,u=E[e]||(E[e]={}),a=function(r){return u[r]||(u[r]=h(r,e))};a.resolve=function(n){if(!n)throw r("");var t=c(n,e);if(!t)throw r(n,e);return t[0]},a.cache=y,a.runtime=O,this.exports={},n.call(this,a,this.exports,this,o,e)}else this.exports=n;this.loaded=!0};var N=0,P=function(){N--,N||p()};O={def:t,dep:o,run:g,main:i,remap:e,require:h,resolve:c,join:a,ready:p,addSearchPath:x,pending:function(){return A=!1,N++,{done:P}}},b?b.$rmod=O:module.exports=O}}();
$rmod.main("/src/components/app-try-marko-app","index");
$rmod.main("/change-case@2.3.1","change-case");
$rmod.dep("","change-case","2.3.1");
$rmod.main("/dot-case@1.1.2","dot-case");
$rmod.dep("/$/change-case","dot-case","1.1.2");
$rmod.def("/dot-case@1.1.2/dot-case",function(e,c,n,t,a){var o=e("/$/change-case/$/sentence-case");n.exports=function(e,c){return o(e,c,".")}});
$rmod.main("/swap-case@1.1.2","swap-case");
$rmod.dep("/$/change-case","swap-case","1.1.2");
$rmod.def("/swap-case@1.1.2/swap-case",function(e,a,r,c,n){var s=e("/$/change-case/$/upper-case"),o=e("/$/change-case/$/lower-case");r.exports=function(e,a){if(null==e)return"";for(var r="",c=0;c<e.length;c++){var n=e[c],t=s(n,a);r+=t===n?o(n,a):t}return r}});
$rmod.main("/path-case@1.1.2","path-case");
$rmod.dep("/$/change-case","path-case","1.1.2");
$rmod.def("/path-case@1.1.2/path-case",function(e,a,c,n,t){var s=e("/$/change-case/$/sentence-case");c.exports=function(e,a){return s(e,a,"/")}});
$rmod.main("/upper-case@1.1.3","upper-case");
$rmod.dep("/$/change-case","upper-case","1.1.3");
$rmod.def("/upper-case@1.1.3/upper-case",function(e,u,r,p,a){var i={tr:{regexp:/[\u0069]/g,map:{i:"İ"}},az:{regexp:/[\u0069]/g,map:{i:"İ"}},lt:{regexp:/[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,map:{"i̇":"I","j̇":"J","į̇":"Į","i̇̀":"Ì","i̇́":"Í","i̇̃":"Ĩ"}}};r.exports=function(e,u){var r=i[u];return e=null==e?"":String(e),r&&(e=e.replace(r.regexp,function(e){return r.map[e]})),e.toUpperCase()}});
$rmod.main("/lower-case@1.1.3","lower-case");
$rmod.dep("/$/change-case","lower-case","1.1.3");
$rmod.def("/lower-case@1.1.3/lower-case",function(e,r,u,i,a){var n={tr:{regexp:/\u0130|\u0049|\u0049\u0307/g,map:{"İ":"i",I:"ı","İ":"i"}},az:{regexp:/[\u0130]/g,map:{"İ":"i",I:"ı","İ":"i"}},lt:{regexp:/[\u0049\u004A\u012E\u00CC\u00CD\u0128]/g,map:{I:"i̇",J:"j̇","Į":"į̇","Ì":"i̇̀","Í":"i̇́","Ĩ":"i̇̃"}}};u.exports=function(e,r){var u=n[r];return e=null==e?"":String(e),u&&(e=e.replace(u.regexp,function(e){return u.map[e]})),e.toLowerCase()}});
$rmod.main("/camel-case@1.2.2","camel-case");
$rmod.dep("/$/change-case","camel-case","1.2.2");
$rmod.def("/camel-case@1.2.2/camel-case",function(e,c,a,n,r){var s=e("/$/change-case/$/upper-case"),t=e("/$/change-case/$/sentence-case");a.exports=function(e,c,a){var n=t(e,c);return a||(n=n.replace(/(\d) (?=\d)/g,"$1_")),n.replace(/ (.)/g,function(e,a){return s(a,c)})}});
$rmod.main("/snake-case@1.1.2","snake-case");
$rmod.dep("/$/change-case","snake-case","1.1.2");
$rmod.def("/snake-case@1.1.2/snake-case",function(e,n,a,c,s){var r=e("/$/change-case/$/sentence-case");a.exports=function(e,n){return r(e,n,"_")}});
$rmod.main("/title-case@1.1.2","title-case");
$rmod.dep("/$/change-case","title-case","1.1.2");
$rmod.def("/title-case@1.1.2/title-case",function(e,c,n,t,a){var r=e("/$/change-case/$/upper-case"),s=e("/$/change-case/$/sentence-case");n.exports=function(e,c){return s(e,c).replace(/^.| ./g,function(e){return r(e,c)})}});
$rmod.main("/param-case@1.1.2","param-case");
$rmod.dep("/$/change-case","param-case","1.1.2");
$rmod.def("/param-case@1.1.2/param-case",function(e,a,c,n,r){var s=e("/$/change-case/$/sentence-case");c.exports=function(e,a){return s(e,a,"-")}});
$rmod.main("/pascal-case@1.1.2","pascal-case");
$rmod.dep("/$/change-case","pascal-case","1.1.2");
$rmod.def("/pascal-case@1.1.2/pascal-case",function(a,c,e,s,n){var r=a("/$/change-case/$/camel-case"),p=a("/$/change-case/$/upper-case-first");e.exports=function(a,c){return p(r(a,c),c)}});
$rmod.main("/constant-case@1.1.2","constant-case");
$rmod.dep("/$/change-case","constant-case","1.1.2");
$rmod.def("/constant-case@1.1.2/constant-case",function(e,a,c,n,s){var t=e("/$/change-case/$/upper-case"),o=e("/$/change-case/$/snake-case");c.exports=function(e,a){return t(o(e,a),a)}});
$rmod.main("/sentence-case@1.1.3","sentence-case");
$rmod.dep("/$/change-case","sentence-case","1.1.3");
$rmod.def("/sentence-case@1.1.3/vendor/non-word-regexp",function(u,A,F,B,C){F.exports=/[^\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u0030-\u0039\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]+/g});
$rmod.def("/sentence-case@1.1.3/vendor/camel-case-regexp",function(u,E,A,C,F){A.exports=/([\u0061-\u007A\u00B5\u00DF-\u00F6\u00F8-\u00FF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0561-\u0587\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7FA\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A])([\u0041-\u005A\u00C0-\u00D6\u00D8-\u00DE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA\uFF21-\uFF3A\u0030-\u0039\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])/g});
$rmod.def("/sentence-case@1.1.3/vendor/trailing-digit-regexp",function(u,F,A,B,E){A.exports=/([\u0030-\u0039\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])([^\u0030-\u0039\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])/g});
$rmod.def("/sentence-case@1.1.3/sentence-case",function(e,n,r,c,t){var a=e("/$/change-case/$/lower-case"),o=e("./vendor/non-word-regexp"),l=e("./vendor/camel-case-regexp"),g=e("./vendor/trailing-digit-regexp");r.exports=function(e,n,r){function c(e,n,c){return 0===n||n===c.length-e.length?"":r}return null==e?"":(r=r||" ",e=String(e).replace(l,"$1 $2").replace(g,"$1 $2").replace(o,c),a(e,n))}});
$rmod.main("/is-upper-case@1.1.2","is-upper-case");
$rmod.dep("/$/change-case","is-upper-case","1.1.2");
$rmod.def("/is-upper-case@1.1.2/is-upper-case",function(e,r,c,p,s){var a=e("/$/change-case/$/upper-case");c.exports=function(e,r){return a(e,r)===e}});
$rmod.main("/is-lower-case@1.1.3","is-lower-case");
$rmod.dep("/$/change-case","is-lower-case","1.1.3");
$rmod.def("/is-lower-case@1.1.3/is-lower-case",function(e,r,c,o,s){var a=e("/$/change-case/$/lower-case");c.exports=function(e,r){return a(e,r)===e}});
$rmod.main("/upper-case-first@1.1.2","upper-case-first");
$rmod.dep("/$/change-case","upper-case-first","1.1.2");
$rmod.def("/upper-case-first@1.1.2/upper-case-first",function(r,e,s,t,c){var n=r("/$/change-case/$/upper-case");s.exports=function(r,e){return null==r?"":(r=String(r),n(r.charAt(0),e)+r.substr(1))}});
$rmod.main("/lower-case-first@1.0.2","lower-case-first");
$rmod.dep("/$/change-case","lower-case-first","1.0.2");
$rmod.def("/lower-case-first@1.0.2/lower-case-first",function(r,e,s,t,c){var n=r("/$/change-case/$/lower-case");s.exports=function(r,e){return null==r?"":(r=String(r),n(r.charAt(0),e)+r.substr(1))}});
$rmod.def("/change-case@2.3.1/change-case",function(e,a,s,c,n){a.dot=a.dotCase=e("/$/change-case/$/dot-case"),a.swap=a.swapCase=e("/$/change-case/$/swap-case"),a.path=a.pathCase=e("/$/change-case/$/path-case"),a.upper=a.upperCase=e("/$/change-case/$/upper-case"),a.lower=a.lowerCase=e("/$/change-case/$/lower-case"),a.camel=a.camelCase=e("/$/change-case/$/camel-case"),a.snake=a.snakeCase=e("/$/change-case/$/snake-case"),a.title=a.titleCase=e("/$/change-case/$/title-case"),a.param=a.paramCase=e("/$/change-case/$/param-case"),a.pascal=a.pascalCase=e("/$/change-case/$/pascal-case"),a.constant=a.constantCase=e("/$/change-case/$/constant-case"),a.sentence=a.sentenceCase=e("/$/change-case/$/sentence-case"),a.isUpper=a.isUpperCase=e("/$/change-case/$/is-upper-case"),a.isLower=a.isLowerCase=e("/$/change-case/$/is-lower-case"),a.ucFirst=a.upperCaseFirst=e("/$/change-case/$/upper-case-first"),a.lcFirst=a.lowerCaseFirst=e("/$/change-case/$/lower-case-first")});
$rmod.main("/dom-classes@0.0.1","index");
$rmod.dep("","dom-classes","0.0.1");
$rmod.main("/indexof@0.0.1","index");
$rmod.dep("/$/dom-classes","indexof","0.0.1");
$rmod.def("/indexof@0.0.1/index",function(n,r,e,f,i){var t=[].indexOf;e.exports=function(n,r){if(t)return n.indexOf(r);for(var e=0;e<n.length;++e)if(n[e]===r)return e;return-1}});
$rmod.def("/dom-classes@0.0.1/index",function(s,t,e,o,r){function i(s){if(s.classList)return s.classList;var t=s.className.replace(/^\s+|\s+$/g,""),e=t.split(u);return""===e[0]&&e.shift(),e}function a(s,t){if(s.classList)return void s.classList.add(t);var e=i(s),o=f(e,t);~o||e.push(t),s.className=e.join(" ")}function c(s,t){return s.classList?s.classList.contains(t):!!~f(i(s),t)}function n(s,t){if("[object RegExp]"==d.call(t))return l(s,t);if(s.classList)return void s.classList.remove(t);var e=i(s),o=f(e,t);~o&&e.splice(o,1),s.className=e.join(" ")}function l(s,t,e){for(var o=Array.prototype.slice.call(i(s)),r=0;r<o.length;r++)t.test(o[r])&&n(s,o[r])}function p(s,t){return s.classList?s.classList.toggle(t):void(c(s,t)?n(s,t):a(s,t))}var f=s("/$/dom-classes/$/indexof"),u=/\s+/,d=Object.prototype.toString;e.exports=i,e.exports.add=a,e.exports.contains=c,e.exports.has=c,e.exports.toggle=p,e.exports.remove=n,e.exports.removeMatching=l});
$rmod.remap("/src/components/app-try-marko-app/samples-loader","samples-loader-browser");
$rmod.def("/src/components/app-try-marko-app/samples-loader-browser",function(o,r,a,n,p){r.load=function(){}});
$rmod.main("/async-writer@1.4.1","lib/async-writer");
$rmod.dep("/$/marko","async-writer","1.4.1");
$rmod.main("/process@0.6.0","index");
$rmod.dep("","process","0.6.0");
$rmod.remap("/process@0.6.0/index","browser");
$rmod.def("/process@0.6.0/browser",function(n,e,o,t,r){function i(){}var s=o.exports={};s.nextTick=function(){var n="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(n)return function(n){return window.setImmediate(n)};if(e){var o=[];return window.addEventListener("message",function(n){var e=n.source;if((e===window||null===e)&&"process-tick"===n.data&&(n.stopPropagation(),o.length>0)){var t=o.shift();t()}},!0),function(n){o.push(n),window.postMessage("process-tick","*")}}return function(n){setTimeout(n,0)}}(),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.on=i,s.once=i,s.off=i,s.emit=i,s.binding=function(n){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(n){throw new Error("process.chdir is not supported")}});
$rmod.main("/events@1.1.0","events");
$rmod.dep("/$/marko","events","1.1.0");
$rmod.def("/events@1.1.0/events",function(e,t,s,n,r){function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(e){return"function"==typeof e}function h(e){return"number"==typeof e}function v(e){return"object"==typeof e&&null!==e}function l(e){return void 0===e}s.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(e){if(!h(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},i.prototype.emit=function(e){var t,s,n,r,i,h;if(this._events||(this._events={}),"error"===e&&(!this._events.error||v(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(s=this._events[e],l(s))return!1;if(o(s))switch(arguments.length){case 1:s.call(this);break;case 2:s.call(this,arguments[1]);break;case 3:s.call(this,arguments[1],arguments[2]);break;default:r=Array.prototype.slice.call(arguments,1),s.apply(this,r)}else if(v(s))for(r=Array.prototype.slice.call(arguments,1),h=s.slice(),n=h.length,i=0;n>i;i++)h[i].apply(this,r);return!0},i.prototype.addListener=function(e,t){var s;if(!o(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?v(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,v(this._events[e])&&!this._events[e].warned&&(s=l(this._maxListeners)?i.defaultMaxListeners:this._maxListeners,s&&s>0&&this._events[e].length>s&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(e,t){function s(){this.removeListener(e,s),n||(n=!0,t.apply(this,arguments))}if(!o(t))throw TypeError("listener must be a function");var n=!1;return s.listener=t,this.on(e,s),this},i.prototype.removeListener=function(e,t){var s,n,r,i;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(s=this._events[e],r=s.length,n=-1,s===t||o(s.listener)&&s.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(v(s)){for(i=r;i-->0;)if(s[i]===t||s[i].listener&&s[i].listener===t){n=i;break}if(0>n)return this;1===s.length?(s.length=0,delete this._events[e]):s.splice(n,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},i.prototype.removeAllListeners=function(e){var t,s;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(s=this._events[e],o(s))this.removeListener(e,s);else if(s)for(;s.length;)this.removeListener(e,s[s.length-1]);return delete this._events[e],this},i.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?o(this._events[e])?[this._events[e]]:this._events[e].slice():[]},i.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(o(t))return 1;if(t)return t.length}return 0},i.listenerCount=function(e,t){return e.listenerCount(t)}});
$rmod.def("/async-writer@1.4.1/lib/AsyncWriter",function(t,i,e,n,s){"use strict";function r(t){this.str="",this.events=t,this.finished=!1}function h(t){this._buffer="",this._wrapped=t}function a(t){this.asyncWriter=t,this.writer=t.writer,this.finished=!1,this.flushed=!1,this.next=null,this.ready=!0}function u(t,i){var e=t.next;e&&(e.ready=!0,e.writer=e.asyncWriter.writer=i,e.flush())}function f(t,i){a.call(this,t),this.buffer=i}function o(t){a.call(this,t)}function c(t,i,e,n){this.data={},this.global=this.attributes=i||(i={}),this._af=this._prevAF=this._parentAF=null,this._isSync=!1,this._last=null,i.events||(i.events=t&&t.on?t:new d),this._events=i.events,e?this._async=e:this._async=i.async||(i.async={remaining:0,ended:!1,last:0,finished:!1});var s;t?n&&(s=t,t=new h(t)):t=new r(this._events),this.stream=s||t,this.writer=this._stream=t}var l=t("process");r.prototype={end:function(){this.finished=!0,this.events&&this.events.emit("finish")},write:function(t){return this.str+=t,this},toString:function(){return this.str}},h.prototype={write:function(t){this._buffer+=t},flush:function(){0!==this._buffer.length&&(this._wrapped.write(this._buffer),this._buffer="",this._wrapped.flush&&this._wrapped.flush())},end:function(){this.flush(),this._wrapped.isTTY||this._wrapped.end()},on:function(t,i){return this._wrapped.on(t,i)},once:function(t,i){return this._wrapped.once(t,i)},clear:function(){this._buffer=""}};var d=t("/$/marko/$/events").EventEmitter,_="undefined"!=typeof l&&"development"===l.env.NODE_ENV,p={write:function(){}};f.prototype={flush:function(){var t=this.writer,i=this.buffer.toString();0!==i.length&&t.write(i),this.flushed=!0,u(this,t)}},o.prototype={end:function(){this.finished||(this.finished=!0,this.ready&&this.flush())},flush:function(){if(this.finished){this.flushed=!0;var t=this.writer;this.writer=this.asyncWriter.writer=p,u(this,t)}}},c.DEFAULT_TIMEOUT=1e4,c.prototype={constructor:c,isAsyncWriter:c,sync:function(){this._isSync=!0},getAttributes:function(){return this.global},getAttribute:function(t){return this.global[t]},write:function(t){return null!=t&&this.writer.write(t.toString()),this},getOutput:function(){return this.writer.toString()},captureString:function(t,i){var e=new r;return this.swapWriter(e,t,i),e.toString()},swapWriter:function(t,i,e){var n=this.writer;this.writer=t,i.call(e),this.writer=n},createNestedWriter:function(t){var i=this,e=new c(t,i.global);return e._stream=i._stream,e.stream=i.stream,e},beginAsync:function(t){if(this._isSync)throw new Error("beginAsync() not allowed when using renderSync()");var i=!0,e=this.createNestedWriter(this.writer),n=this.writer=new r,s=new o(e),h=new f(this,n);s.next=h,e._af=s,e._parentAF=s;var a=this._prevAF||this._parentAF;return a&&(h.next=a.next,a.next=s,a.flushed||(i=!1)),s.ready=i,this._prevAF=h,e.handleBeginAsync(t,this),e},handleBeginAsync:function(t,i){var e,n,s=this,r=s._async;r.remaining++,null!=t&&("number"==typeof t?e=t:(e=t.timeout,t.last===!0&&(null==e&&(e=0),r.last++),n=t.name)),null==e&&(e=c.DEFAULT_TIMEOUT),s.stack=_?(new Error).stack:null,s.name=n,e>0&&(s._timeoutId=setTimeout(function(){s.error(new Error("Async fragment "+(n?"("+n+") ":"")+"timed out after "+e+"ms"))},e)),this._events.emit("beginAsync",{writer:this,parentWriter:i})},on:function(t,i){return"finish"===t&&this.writer.finished?(i(),this):(this._events.on(t,i),this)},once:function(t,i){return"finish"===t&&this.writer.finished?(i(),this):(this._events.once(t,i),this)},onLast:function(t){var i=this._last;if(!i){i=this._last=[];var e=0,n=function s(){if(e!==i.length){var t=i[e++];t(s)}};this.once("last",function(){n()})}i.push(t)},emit:function(t){var i=this._events;switch(arguments.length){case 0:i.emit();break;case 1:i.emit(t);break;default:i.emit.apply(i,arguments)}return this},removeListener:function(){var t=this._events;return t.removeListener.apply(t,arguments),this},pipe:function(t){return this._stream.pipe(t),this},error:function(t){try{var i=this.stack,e=this.name;t=new Error("Async fragment failed"+(e?" ("+e+")":"")+". Exception: "+(t.stack||t)+(i?"\nCreation stack trace: "+i:"")),this.emit("error",t)}finally{this.end()}},end:function(t){t&&this.write(t);var i=this._af;return i?(i.end(),this.handleEnd(!0)):this.handleEnd(!1),this},handleEnd:function(t){var i=this._async;if(!i.finished){var e;if(t){var n=this._timeoutId;n&&clearTimeout(n),e=--i.remaining}else e=i.remaining,i.ended=!0;i.ended&&(i.lastFired||i.remaining-i.last!==0||(i.lastFired=!0,i.last=0,this._events.emit("last")),0===e&&(i.finished=!0,this._finish()))}},_finish:function(){this._stream.end?this._stream.end():this._events.emit("finish")},flush:function(){if(!this._async.finished){var t=this._stream;t&&t.flush&&t.flush()}}},c.prototype.w=c.prototype.write,c.enableAsyncStackTrace=function(){_=!0},e.exports=c});
$rmod.def("/async-writer@1.4.1/lib/async-writer",function(r,n,e,t,a){"use strict";var c=r("./AsyncWriter");n.create=function(r,n){var e,t;n&&(e=n.global,t=n.buffer===!0);var a=new c(r,null,null,t);return e&&(a.global=a.attributes=e),a},n.enableAsyncStackTrace=function(){c.INCLUDE_STACK=!0},n.AsyncWriter=c});
$rmod.dep("/$/marko","raptor-util","1.0.10");
$rmod.def("/raptor-util@1.0.10/escapeXml",function(t,n,r,e,o){function u(t){return g[t]}function i(t){return"string"==typeof t?p.test(t)?t.replace(a,u):t:null==t?"":t.toString()}function l(t){return"string"==typeof t?c.test(t)?t.replace(f,u):t:null==t?"":t.toString()}var p=/[&<]/,a=/[&<]/g,c=/[&<>\"\'\n]/,f=/[&<>\"\'\n]/g,g={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;","\n":"&#10;"};r.exports=i,i.attr=l});
$rmod.def("/raptor-util@1.0.10/attr",function(r,t,e,n,u){var a=r("./escapeXml").attr;e.exports=function(r,t,e){if(t===!0)t="";else{if(null==t||""===t||t===!1)return"";t='="'+(e===!1?t:a(t))+'"'}return" "+r+t}});
$rmod.def("/raptor-util@1.0.10/extend",function(r,n,t,o,e){t.exports=function(r,n){if(r||(r={}),n)for(var t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r}});
$rmod.def("/raptor-util@1.0.10/inherit",function(t,o,r,e,n){function p(t,o,r){var e=t.prototype,n=function(){};return n.prototype=o.prototype,t.prototype=new n,t.$super=o,r!==!1&&u(t.prototype,e),t.prototype.constructor=t,t}function i(t,o){return p(t,o,!0)}var u=t("./extend");r.exports=i,i._inherit=p});
$rmod.def("/src/components/app-try-marko-app/include-target.marko",function(e,n,o,r,a){function t(e){var n=(e.s,e.e,e.ne,e.x);return function(e,o){o.w("Hello "+n(e.name)+" You have "+n(e.count)+" new messages!")}}(o.exports=e("/$/marko").c(r)).c(t)});
$rmod.def("/marko@3.0.0/taglibs/layout/put-tag",function(t,a,o,u,n){o.exports=function(t,a){var o=t.layout,u=o.handlePutTag;u(t)}});
$rmod.def("/marko@3.0.0/taglibs/layout/use-tag-transformer",function(t,e,a,r,u){"use strict";a.exports=function(t,e){var a=t.argument;if(!a)return void e.addError(t,"Invalid <layout-use> tag. Expected: <layout-use(template[, data]) ...>");var r=e.builder,u=r.parseJavaScriptArgs(a),l=u[0];"Literal"===l.type&&(l=e.importTemplate(l.value)),u[1]&&t.setAttributeValue("__data",u[1]),t.argument=null,t.setAttributeValue("__template",l)}});
$rmod.def("/marko@3.0.0/taglibs/layout/use-tag",function(t,n,a,e,o){a.exports=function(t,n){var a={};t.getContent&&t.getContent({handlePutTag:function(t){a[t.into]=t}});var e=t.__data,o=t["*"]||{};if(e)for(var r in e)e.hasOwnProperty(r)&&!o.hasOwnProperty(r)&&(o[r]=e[r]);o.layoutContent=a,t.__template.render(o,n)}});
$rmod.def("/marko@3.0.0/taglibs/layout/placeholder-tag",function(e,r,n,o,d){n.exports=function(e,r){var n=e.content,o=n?n[e.name]:null;o?o.value?r.write(o.value):o.renderBody&&o.renderBody(r):e.renderBody&&e.renderBody(r)}});
$rmod.def("/src/components/app-try-marko-app/layout-use-target.marko",function(t,n,o,e,a){function r(n){var o=(n.s,n.e,n.ne,n.x,n.t),e=o(t("/$/marko/taglibs/layout/placeholder-tag"));return function(t,n){n.w('<div class="notification"><h1>'),e({name:"title",content:t.layoutContent,renderBody:function(t){t.w("DEFAULT TITLE")}},n),n.w("</h1><div>"),e({name:"body",content:t.layoutContent,renderBody:function(t){t.w("DEFAULT BODY")}},n),n.w("</div></div>")}}(o.exports=t("/$/marko").c(e)).c(r)});
$rmod.main("/raptor-pubsub@1.0.5","lib/index");
$rmod.dep("/$/marko-widgets","raptor-pubsub","1.0.5");
$rmod.dep("/$/marko-widgets","events","1.1.0");
$rmod.def("/raptor-pubsub@1.0.5/lib/raptor-pubsub",function(e,n,r,t,o){var u=e("/$/marko-widgets/$/events").EventEmitter,a={},i=new u;i.channel=function(e){var n;return n=e?a[e]||(a[e]=new u):new u},i.removeChannel=function(e){delete a[e]},r.exports=i});
$rmod.def("/raptor-pubsub@1.0.5/lib/index",function(o,d,n,r,b){var e="undefined"==typeof window?global:window;n.exports=e.__RAPTOR_PUBSUB||(e.__RAPTOR_PUBSUB=o("./raptor-pubsub"))});
$rmod.main("/raptor-dom@1.1.1","raptor-dom-server");
$rmod.dep("/$/marko-widgets","raptor-dom","1.1.1");
$rmod.def("/raptor-dom@1.1.1/ready",function(e,t,n,o,a){function d(){for(var e=0,t=s.length;t>e;e++){var n=s[e];n[0].call(n[1])}s=null}function r(){if(!u){if(!m.body)return setTimeout(r,1);u=!0,d()}}function c(){m.addEventListener?m.removeEventListener("DOMContentLoaded",c,!1):m.detachEvent("onreadystatechange",c),r()}function i(){if(!u){try{m.documentElement.doScroll("left")}catch(e){return void setTimeout(i,1)}r()}}function l(){var e=!1;if(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)r();else if(m.addEventListener)m.addEventListener("DOMContentLoaded",c,!1),v.addEventListener("load",c,!1);else if(m.attachEvent){m.attachEvent("onreadystatechange",c),v.attachEvent("onload",c);try{e=null==v.frameElement}catch(t){}m.documentElement.doScroll&&e&&i()}}var u=!1,f=!1,v=window,m=document,s=[];n.exports=function(e,t){return u?e.call(t):(s.push([e,t]),void(f||(f=!0,l())))}});
$rmod.remap("/raptor-dom@1.1.1/raptor-dom-server","raptor-dom-client");
$rmod.def("/raptor-dom@1.1.1/raptor-dom-client",function(e,n,r,o,t){function i(e){if("string"==typeof e){var n=e;if(e=document.getElementById(n),!e)throw new Error('Target element not found: "'+n+'"')}return e}function d(e){f&&f.emit("dom/beforeRemove",{el:e})}var f=e("/$/marko-widgets/$/raptor-pubsub"),a={forEachChildEl:function(e,n,r){a.forEachChild(e,n,r,1)},forEachChild:function(e,n,r,o){if(e)for(var t=0,i=e.childNodes,d=i.length;d>t;t++){var f=i[t];!f||null!=o&&o!=f.nodeType||n.call(r,f)}},detach:function(e){e=i(e),e.parentNode.removeChild(e)},appendTo:function(e,n){i(n).appendChild(i(e))},remove:function(e){e=i(e),d(e),e.parentNode&&e.parentNode.removeChild(e)},removeChildren:function(e){e=i(e);for(var n=0,r=e.childNodes,o=r.length;o>n;n++){var t=r[n];t&&1===t.nodeType&&d(t)}e.innerHTML=""},replace:function(e,n){n=i(n),d(n),n.parentNode.replaceChild(i(e),n)},replaceChildrenOf:function(e,n){n=i(n),a.forEachChildEl(n,function(e){d(e)}),n.innerHTML="",n.appendChild(i(e))},insertBefore:function(e,n){n=i(n),n.parentNode.insertBefore(i(e),n)},insertAfter:function(e,n){n=i(n),e=i(e);var r=n.nextSibling,o=n.parentNode;r?o.insertBefore(e,r):o.appendChild(e)},prependTo:function(e,n){n=i(n),n.insertBefore(i(e),n.firstChild||null)}};a.ready=e("./ready"),r.exports=a});
$rmod.dep("/$/marko-widgets","raptor-util","1.0.10");
$rmod.main("/listener-tracker@1.0.5","lib/listener-tracker");
$rmod.dep("/$/marko-widgets","listener-tracker","1.0.5");
$rmod.def("/listener-tracker@1.0.5/lib/listener-tracker",function(e,t,r,n,i){function s(e){this._target=e,this._listeners=[],this._subscribeTo=null}function o(){this._subscribeToList=[]}var u=0,l=1,h=2;s.prototype={_onProxy:function(e,t,r){return this._target[e](t,r),this._listeners.push([t,r]),this},_remove:function(e,t){var r=this._target,n=this._listeners;this._listeners=n.filter(function(n){var i=n[u],s=n[l],o=n[h];if(t){if(o&&e(i,o))return r.removeListener(i,o),!1}else if(e(i,s))return r.removeListener(i,o||s),!1;return!0});var i=this._subscribeTo;if(0===this._listeners.length&&i){var s=this,o=i._subscribeToList;i._subscribeToList=o.filter(function(e){return e!==s})}},on:function(e,t){return this._onProxy("on",e,t)},once:function(e,t){var r=this,n=function(){r._remove(function(e,t){return n===t},!0),t.apply(this,arguments)};return this._target.once(e,n),this._listeners.push([e,t,n]),this},removeListener:function(e,t){return"function"==typeof e&&(t=e,e=null),t&&e?this._remove(function(r,n){return e===r&&t===n}):t?this._remove(function(e,r){return t===r}):e&&this.removeAllListeners(e),this},removeAllListeners:function(e){var t=this._listeners,r=this._target;if(e)this._remove(function(t,r){return e===t});else{for(var n=t.length-1;n>=0;n--){var i=t[n];r.removeListener(i[u],i[l])}this._listeners.length=0}return this}},s.prototype.addListener=s.prototype.on,o.prototype={subscribeTo:function(e,t){for(var r,n=!t||t.addDestroyListener!==!1,i=this._subscribeToList,o=0,u=i.length;u>o;o++){var l=i[o];if(l._target===e){r=l;break}}return r||(r=new s(e),n&&r.once("destroy",function(){r.removeAllListeners();for(var t=i.length-1;t>=0;t--)if(i[t]._target===e){i.splice(t,1);break}}),r._subscribeTo=this,i.push(r)),r},removeAllListeners:function(e,t){var r,n=this._subscribeToList;if(e)for(r=n.length-1;r>=0;r--){var i=n[r];if(i._target===e){i.removeAllListeners(t),i._listeners.length||n.splice(r,1);break}}else{for(r=n.length-1;r>=0;r--)n[r].removeAllListeners();n.length=0}}},t.wrap=function(e){var t=new s(e);return e.once("destroy",function(){t._listeners.length=0}),t},t.createTracker=function(){return new o}});
$rmod.def("/raptor-util@1.0.10/arrayFromArguments",function(r,t,l,n,a){var e=[].slice;l.exports=function(r,t){return r?t?t<r.length?e.call(r,t):[]:e.call(r):[]}});
$rmod.main("/morphdom@1.1.2","lib/index");
$rmod.dep("/$/marko-widgets","morphdom","1.1.2");
$rmod.def("/morphdom@1.1.2/lib/index",function(e,t,n,r,i){function a(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function o(e){!v&&document.createRange&&(v=document.createRange(),v.selectNode(document.body));var t;return v&&v.createContextualFragment?t=v.createContextualFragment(e):(t=document.createElement("body"),t.innerHTML=e),t.childNodes[0]}function d(){}function u(e,t){var n,r,i,a,o=t.attributes,d={};for(n=o.length-1;n>=0;n--)r=o[n],r.specified!==!1&&(i=r.name,a=r.value,d[i]=!0,e.getAttribute(i)!==a&&e.setAttribute(i,a));for(o=e.attributes,n=o.length-1;n>=0;n--)r=o[n],r.specified!==!1&&(i=r.name,d.hasOwnProperty(i)||e.removeAttribute(i))}function f(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}function l(e){return e.id}function c(e,t,n){function r(e,t){var n=p(e);if(n?h[n]=e:t||g(e),1===e.nodeType)for(var i=e.firstChild;i;)r(i,t||n),i=i.nextSibling}function i(e){if(1===e.nodeType)for(var t=e.firstChild;t;)p(t)||(g(t),i(t)),t=t.nextSibling}function c(e,t,n){y(e)!==!1&&(t.removeChild(e),n?p(e)||(g(e),i(e)):r(e))}function v(e,t,n,r){var i=p(t);if(i&&delete h[i],!r){if(b(e,t)===!1)return;if(u(e,t),N(e,t)===!1)return}if("TEXTAREA"!=e.tagName){var a,o,d,f,l,g=t.firstChild,y=e.firstChild;e:for(;g;){for(d=g.nextSibling,a=p(g);y;){var C=p(y);if(o=y.nextSibling,!n&&C&&(l=s[C]))l.parentNode.replaceChild(y,l),v(y,l,n),y=o;else{var A=y.nodeType;if(A===g.nodeType){var x=!1;if(1===A?(y.tagName===g.tagName&&(C||a?a===C&&(x=!0):x=!0),x&&v(y,g,n)):3===A&&(x=!0,y.nodeValue=g.nodeValue),x){g=d,y=o;continue e}}c(y,e,n),y=o}}a&&((f=h[a])?(v(f,g,!0),g=f):s[a]=g),e.appendChild(g),1===g.nodeType&&(a||g.firstChild)&&T.push(g),g=d,y=o}for(;y;)o=y.nextSibling,c(y,e,n),y=o}var E=m[e.tagName];E&&E(e,t)}n||(n={}),"string"==typeof t&&(t=o(t));var h={},s={},p=n.getNodeKey||l,g=n.onNodeDiscarded||d,b=n.onBeforeMorphEl||d,N=n.onBeforeMorphElChildren||d,y=n.onBeforeNodeDiscarded||d,C=n.childrenOnly===!0,T=[],A=e,x=A.nodeType,E=t.nodeType;if(!C)if(1===x)1===E?e.tagName!==t.tagName&&(g(e),A=f(e,document.createElement(t.tagName))):A=t;else if(3===x){if(3===E)return A.nodeValue=t.nodeValue,A;A=t}if(A===t)g(e);else{v(A,t,!1,C);var S=function(e){for(var t=e.firstChild;t;){var n=t.nextSibling,r=p(t);if(r){var i=h[r];if(i&&t.tagName===i.tagName){if(t.parentNode.replaceChild(i,t),v(i,t,!0),t=n,a(h))return!1;continue}}1===t.nodeType&&S(t),t=n}};if(!a(h))e:for(;T.length;){var O=T;T=[];for(var k=0;k<O.length;k++)if(S(O[k])===!1)break e}for(var P in h)if(h.hasOwnProperty(P)){var V=h[P];g(V),i(V)}}return!C&&A!==e&&e.parentNode&&e.parentNode.replaceChild(A,e),A}var v,h,s="undefined"!=typeof document?document.body||document.createElement("div"):{};h=s.hasAttribute?function(e,t){return e.hasAttribute(t)}:function(e,t){return e.getAttributeNode(t)};var m={OPTION:function(e,t){(e.selected=t.selected)?e.setAttribute("selected",""):e.removeAttribute("selected","")},INPUT:function(e,t){e.checked=t.checked,e.value!=t.value&&(e.value=t.value),h(t,"checked")||e.removeAttribute("checked"),h(t,"value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!=n&&(e.value=n),e.firstChild&&(e.firstChild.nodeValue=n)}};n.exports=c});
$rmod.def("/raptor-polyfill@1.0.2/array/_toObject",function(t,r,o,e,n){var a="a"!="a"[0];o.exports=function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return a&&"string"==typeof t&&t?t.split(""):Object(t)}});
$rmod.dep("/$/marko-widgets","raptor-polyfill","1.0.2");
$rmod.def("/raptor-polyfill@1.0.2/array/forEach",function(r,o,t,f,a){if(!Array.prototype.forEach){var n=r("./_toObject");Array.prototype.forEach=function(r,o){var t=n(this),f=-1,a=t.length>>>0;if("function"!=typeof r)throw new TypeError;for(;++f<a;)f in t&&r.call(o,t[f],f,t)}}});
$rmod.def("/raptor-polyfill@1.0.2/string/endsWith",function(t,n,i,r,e){String.prototype.endsWith||(String.prototype.endsWith=function(t,n){var i=this;return n&&(i=i.substring(n)),i.length<t.length?!1:i.slice(0-t.length)==t})});
$rmod.main("/raptor-logging@1.0.8","lib/index");
$rmod.dep("/$/marko-widgets","raptor-logging","1.0.8");
$rmod.def("/raptor-polyfill@1.0.2/string/startsWith",function(t,r,n,i,s){String.prototype.startsWith||(String.prototype.startsWith=function(t,r){var n=this;return r&&(n=n.substring(r)),n.length<t.length?!1:n.substring(0,t.length)==t})});
$rmod.def("/raptor-logging@1.0.8/lib/Logger",function(e,t,i,n,l){function s(e,t,i){this.logger=e,this.logLevel=t,this.args=a.call(i)}function o(e,t,i){this._loggingModifiedFlag=g._modifiedFlag,this._loggerName=t,this._level=e.logLevel.level,this._appenders=i}var g,r,a=[].slice;s.prototype.getLoggerName=function(){return this.logger._loggerName},o.setLogging=function(e){g=e},o.setLogLevel=function(e){r=e},o.prototype={_loggerName:void 0,_level:void 0,_appenders:void 0,_update:function(){this._loggingModifiedFlag!==g._modifiedFlag&&o.call(this,g.getLoggerConfig(this._loggerName),this._loggerName,g.getAppenders())},getLogLevel:function(){return r.toLogLevel(this._level)},getLevel:function(){return this._update(),this._level},isTraceEnabled:function(){return this._update(),0===this._level},isDebugEnabled:function(){return this._update(),this._level<=1},isInfoEnabled:function(){return this._update(),this._level<=2},isWarnEnabled:function(){return this._update(),this._level<=3},isErrorEnabled:function(){return this._update(),this._level<=4},isFatalEnabled:function(){return this._update(),this._level<=5},dump:function(e,t,i){if(this._update(),!(this._level>1))for(var n=0,l=this._appenders.length;l>n;n++){var s=this._appenders[n];s&&s.dump&&s.dump(e,t,i)}},trace:function(){this._update(),this._level>0||this._log(new s(this,r.TRACE,arguments))},debug:function(){this._update(),this._level>1||this._log(new s(this,r.DEBUG,arguments))},info:function(){this._update(),this._level>2||this._log(new s(this,r.INFO,arguments))},warn:function(){this._update(),this._level>3||this._log(new s(this,r.WARN,arguments))},error:function(){this._update(),this._level>4||this._log(new s(this,r.ERROR,arguments))},fatal:function(){this._update(),this._level>5||this._log(new s(this,r.FATAL,arguments))},_log:function(e){for(var t=0,i=this._appenders.length;i>t;t++)this._appenders[t].log(e)}},i.exports=o});
$rmod.main("/raptor-stacktraces@1.0.1","lib/raptor-stacktraces");
$rmod.dep("/$/marko-widgets/$/raptor-logging","raptor-stacktraces","1.0.1");
$rmod.def("/raptor-stacktraces@1.0.1/lib/raptor-stacktraces",function(r,t,a,s,n){t.trace=function(r){for(var t=[];r;)t.push((r.stack||r.message||r).toString()),r=r._cause,r&&t.push("\n\nCaused by:\n");return t.join("")}});
$rmod.def("/raptor-logging@1.0.8/lib/ConsoleAppender",function(o,e,r,l,n){"use strict";function a(){return"undefined"==typeof console?null:console.log.apply&&console.log.call?console:null}function t(e){var r=o("/$/marko-widgets/$/raptor-logging/$/raptor-stacktraces");return r&&r.trace?r.trace(e):e||""}function c(){}var g=a(),s=g?null:function(){};c.prototype={log:g?function(o){var e=o.logLevel,r=g[e.methodName]||g.log;if(r)try{for(var l,n=o.args.slice(0),a=n.length,c=0;a-1>c;c++){var s=n[c];s instanceof Error&&(n[c]=t(s))}var i=n[a-1];i instanceof Error&&(l=i,n[a-1]="");var u=[e.name+" "+o.getLoggerName()+":"].concat(n);if(r.apply(g,u),l){r.call(g,l.stack||l.toString());for(var f=l._cause;f;)r.call(g,"Caused by:"),r.call(g,f.stack||f.toString()),f=f._cause}if(0===e.level)if(g.trace)g.trace();else{var p=t();p&&g.log&&g.log(p)}}catch(d){r=g.error||r,r.call(g,d)}}:s,dump:g?function(o,e){console.debug&&(console.log((e?"DUMP "+e:"DUMP")+":"),console.debug(o))}:s},r.exports=c});
$rmod.remap("/raptor-logging@1.0.8/lib/resolveLoggerName","resolveLoggerName-browser");
$rmod.def("/raptor-logging@1.0.8/lib/resolveLoggerName-browser",function(r,o,e,t,n){e.exports=function(r){return r?"string"==typeof r?r:r.id||r.toString():""}});
$rmod.def("/raptor-logging@1.0.8/lib/raptor-logging-impl",function(e,r,n,o,g){function t(e){return e&&e.toUpperCase?d[e.toUpperCase()]||d.TRACE:d.TRACE}function i(e,r){return{name:e,level:r,methodName:e.toLowerCase(),toString:function(){return e}}}function l(e,r){var n;n="string"==typeof r?r:r.levelName||r.level;var o={levelName:n,loggerName:e.replace(/\./g,"/"),logLevel:t(n)};m[e]=o,"ROOT"===e&&(s=o)}function a(e,r){return r.loggerName.length-e.loggerName.length}function f(){u=[];for(var e in m)m.hasOwnProperty(e)&&u.push(m[e]);u.sort(a)}e("/$/marko-widgets/$/raptor-polyfill/string/startsWith");for(var u,s,p=e("./Logger"),c=["TRACE","DEBUG","INFO","WARN","ERROR","FATAL","OFF"],d={},v=[],m={},L=e("./ConsoleAppender"),h=e("./resolveLoggerName"),A=0;A<c.length;A++){var O=c[A];d[O]=i(O,A)}d.toLogLevel=function(e){return e.constructor===String?this[e]:this[c[e]]},p.setLogLevel(d);var R={_modifiedFlag:0,LogLevel:d,getLoggerConfig:function(e){for(var r,n,o=0,g=u.length;g>o;o++)if(r=u[o],n=r.loggerName,e.startsWith(n))return r;return s},getLoggerConfigs:function(){return u},getAppenders:function(){return v},addAppender:function(e){v.push(e)},configureAppenders:function(e){v=e,R._modifiedFlag++},logger:function(e){return"object"==typeof e&&e.filename&&(e=h(e.filename)),new p(this.getLoggerConfig(e),e,v)},configureLogger:function(e,r){l(e,r),f(),R._modifiedFlag++},configureLoggers:function(e){var r=m;m={};var n=!1;for(var o in e)e.hasOwnProperty(o)&&("ROOT"===o&&(n=!0),l(o,e[o]));return n||l("ROOT","WARN"),f(),R._modifiedFlag++,r},configure:function(e){e&&(e.appenders&&this.configureAppenders(e.appenders),e.loggers&&this.configureLoggers(e.loggers))},ConsoleAppender:L,toString:function(){return"[raptor-logging]"}};p.setLogging(R),R.configure({loggers:{ROOT:{level:"WARN"}}}),"undefined"!=typeof console&&R.addAppender(new L);var N=e("./raptor-logging");for(var C in R)R.hasOwnProperty(C)&&(N[C]=R[C])});
$rmod.def("/raptor-logging@1.0.8/lib/raptor-logging",function(r,e,n,o,a){var i=r("process"),g=function(){return!1},l={isTraceEnabled:g,isDebugEnabled:g,isInfoEnabled:g,isWarnEnabled:g,isErrorEnabled:g,isFatalEnabled:g,dump:g,trace:g,debug:g,info:g,warn:g,error:g,fatal:g},t={logger:function(){return l},configure:g,voidLogger:l};if(n.exports=t,!i.browser){var d;try{d=r.resolve("./raptor-logging-impl")}catch(s){}d&&r(d)}});
$rmod.def("/raptor-logging@1.0.8/lib/index",function(o,n,i,d,g){var r="undefined"==typeof window?global:window;i.exports=r.__RAPTOR_LOGGING||(r.__RAPTOR_LOGGING=o("./raptor-logging"))});
$rmod.main("/raptor-renderer@1.4.4","lib/raptor-renderer");
$rmod.dep("/$/marko-widgets","raptor-renderer","1.4.4");
$rmod.dep("/$/marko-widgets/$/raptor-renderer","async-writer","1.4.1");
$rmod.remap("/raptor-renderer@1.4.4/lib/RenderResult","RenderResult-browser");
$rmod.def("/raptor-renderer@1.4.4/lib/RenderResult-browser",function(e,t,r,n,i){"use strict";function o(e,t){if(!e._added)throw new Error("Cannot call "+t+"() until after HTML fragment is added to DOM.")}function d(e,t){this.html=e,this.out=t,this._node=void 0;var r=t.global.widgets;this._widgetDefs=r?r.widgets:null}var s=e("/$/marko-widgets/$/raptor-dom"),h=e("/$/marko-widgets/$/raptor-pubsub");d.prototype={getWidget:function(){o(this,"getWidget");var e=this.out.__rerenderWidget;if(e)return e;var t=this._widgetDefs;if(!t)throw new Error("No widget rendered");return t.length?t[0].widget:void 0},getWidgets:function(e){o(this,"getWidgets");var t=this._widgetDefs;if(!t)throw new Error("No widget rendered");var r,n;if(e)for(r=[],n=0;n<t.length;n++){var i=t[n].widget;e(i)&&r.push(i)}else for(r=new Array(t.length),n=0;n<t.length;n++)r[n]=t[n].widget;return r},afterInsert:function(e){var t=this.getNode(e);return this._added=!0,h.emit("raptor-renderer/renderedToDOM",{node:t,context:this.out,out:this.out,document:t.ownerDocument}),this},appendTo:function(e){return s.appendTo(this.getNode(e.ownerDocument),e),this.afterInsert()},replace:function(e){return s.replace(this.getNode(e.ownerDocument),e),this.afterInsert()},replaceChildrenOf:function(e){return s.replaceChildrenOf(this.getNode(e.ownerDocument),e),this.afterInsert()},insertBefore:function(e){return s.insertBefore(this.getNode(e.ownerDocument),e),this.afterInsert()},insertAfter:function(e){return s.insertAfter(this.getNode(e.ownerDocument),e),this.afterInsert()},prependTo:function(e){return s.prependTo(this.getNode(e.ownerDocument),e),this.afterInsert()},getNode:function(e){var t,r,n=this._node;if(e=e||window.document,void 0===n){if(this.html)if(r=e.createElement("body"),r.innerHTML=this.html,1==r.childNodes.length)n=r.childNodes[0];else for(n=e.createDocumentFragment();t=r.firstChild;)n.appendChild(t);else n=e.createDocumentFragment();this._node=n}return n},toString:function(){return this.html}},r.exports=d});
$rmod.def("/raptor-renderer@1.4.4/lib/raptor-renderer",function(e,r,n,t,o){"use strict";function a(e){return function(n,t,o){switch(arguments.length){case 0:return r.render(e);case 1:return r.render(e,n);case 2:return r.render(e,n,t);case 3:return r.render(e,n,t,o);default:throw new Error("Illegal arguments")}}}var u=(e("process"),e("/$/marko-widgets/$/raptor-renderer/$/async-writer")),d=e("./RenderResult"),l=e("/$/marko-widgets/$/raptor-util/extend");r.render=function(e,r,n){var t,o=arguments.length;o>1&&(t=arguments[o-1]);var a=n,c=r||{};"function"==typeof t?3===o&&(a=u.create()):(t=null,a||(a=u.create()));var i=c.$global;if(i&&(l(a.global,i),delete c.$global),"function"!=typeof e){var s=e.renderer||e.render||e.process;if("function"!=typeof s)throw new Error("Invalid renderer");s.call(e,c,a)}else e(c,a);return t?(a.on("finish",function(){t(null,new d(a.getOutput(),a))}).on("error",t),void a.end()):(a.end(),new d(a.getOutput(),a))},r.renderable=function(e,r){e.renderer=r,e.render=a(r)},r.createRenderFunc=a});
$rmod.dep("/$/marko-widgets","raptor-async","1.1.2");
$rmod.def("/raptor-async@1.1.2/AsyncValue",function(t,i,s,e,o){function a(t){this.data=void 0,this.error=void 0,this._callbacks=void 0,this._state=d,this._timestamp=void 0,t&&(this._loader=t.loader,this._scope=t.scope,this._ttl=t.ttl||void 0)}function n(t,i,s){var e=t._callbacks;if(void 0!==e){t._callbacks=void 0;for(var o=0;o<e.length;o++){var a=e[o];a.callback.call(a.scope,i,s)}}}function r(t){t._state=u,t._loader.call(t._scope||t,function(i,s){i?t.reject(i):t.resolve(s)})}function c(t,i,s){void 0===t._callbacks&&(t._callbacks=[]),t._callbacks.push({callback:i,scope:s||t._scope||t})}function l(t){var i=t._ttl;return void 0!==i&&f()-t._timestamp>i?(t.unsettle(),!0):!1}var h=t("process"),d=0,u=1,_=2,v=3,f=Date.now||function(){return(new Date).getTime()};a.prototype={isResolved:function(){return this._state===_&&!l(this)},isRejected:function(){return this._state===v&&!l(this)},isLoading:function(){return this._state===u},isSettled:function(){return this._state>u&&!l(this)},load:function(t,i){if(!this._loader)throw new Error("Cannot call load when loader is not configured");return this.isSettled()&&this.unsettle(),t&&c(this,t,i),this._state!==u&&r(this),this.data},done:function(t,i){if(!t||t.constructor!==Function)throw new Error("Invalid callback: "+t);return this.isSettled()?t.call(i||this._scope||this,this.error,this.data):(h.domain&&(t=h.domain.bind(t)),c(this,t,i),void(this._loader&&this._state!==u&&r(this)))},reject:function(t){this.error=t,this.data=void 0,void 0!==this._ttl&&(this._timestamp=f()),this._state=this._loader?d:v,n(this,t,null)},resolve:function(t){this.error=void 0,this.data=t,void 0!==this._ttl&&(this._timestamp=f()),this._state=_,n(this,null,t)},reset:function(){this.unsettle(),this.callbacks=void 0},unsettle:function(){this._state=d,this.error=void 0,this.data=void 0,this._timestamp=void 0}},a.create=function(t){return new a(t)},s.exports=a});
$rmod.dep("/$/marko-widgets","marko","3.0.2");
$rmod.dep("/$/marko-widgets/$/marko","async-writer","1.4.1");
$rmod.dep("/$/marko-widgets/$/marko","events","1.1.0");
$rmod.dep("/$/marko-widgets/$/marko","raptor-util","1.0.10");
$rmod.def("/marko-widgets@6.0.0/taglib/helpers/widgetArgs",function(e,t,n,d,i){var g=e("/$/marko-widgets/$/raptor-util/extend"),o=n.exports=function(e,t,n,d,i,o,a){var r,s=e.data,x=s.widgetArgs;x||(null!=n&&(r=n.toString()),x=s.widgetArgs={out:e,id:r,scope:t,customEvents:d}),i&&(x.extend?x.extend.push(i):x.extend=[i]),o&&(x.extendConfig=x.extendConfig?g(o,x.extendConfig):o),a&&(x.extendState=x.extendState?g(a,x.extendState):a)};o.cleanup=function(e){delete e.data.widgetArgs}});
$rmod.def("/marko-widgets@6.0.0/lib/widget-args-id",function(r,i,t,e,d){var n=r("../lib/repeated-id");t.exports=function(r){var i=r.id;if(i){var t=r.out,e=r.scope;if("#"===i.charAt(0))return i.substring(1);var d;return d=i.endsWith("[]")?n.nextId(t,e,i):e+"-"+i}}});
$rmod.def("/marko-widgets@6.0.0/taglib/helpers/widgetBody",function(e,t,d,i,o){var n=e("../../"),r=e("/$/marko-widgets/$/raptor-util/escapeXml"),f="undefined"!=typeof window;d.exports=function(e,t,d,i){if(null!=t&&null==d){if(f){var o=document.getElementById(t);if(o){var l=n.getWidgetsContext(e);l.addPreservedDOMNode(o,!0)}}}else"function"==typeof d?d(e,i):("string"==typeof d&&(d=r(d)),e.write(d))}});
$rmod.def("/marko-widgets@6.0.0/taglib/widget-tag",function(e,t,d,r,i){"use strict";function n(e,t){var d,r=document.getElementById(e);return r&&(d=r.__widget)&&d.__type===t?d:null}function a(e){e.registered||(e.registered=!0,s.registerWidget(e))}function g(e,t,d,r){var i=e.el.tagName;t.write("<"+i+' id="'+e.id+'">');var n=!1;r&&e.bodyEl&&(n=!0,l(t,e.bodyEl.id,r,e)),t.write("</"+i+">"),e._reset(),d.addPreservedDOMNode(e.el,null,n)}var s=e("../"),o=e("/$/marko-widgets/$/raptor-util/extend"),c=e("../lib/widget-args-id"),l=e("./helpers/widgetBody"),w={elId:function(){}};d.exports=function(e,t){var d=t.global;d.__widgetsBeginAsyncAdded||(d.__widgetsBeginAsyncAdded=!0,t.on("beginAsync",function(e){var r,i=e.parentWriter,n=e.writer,a=d.widgets;if(a&&(r=a.widgetStack).length){var g=new s.WidgetsContext(t);g.widgetStack=[r[r.length-1]],n.data.widgets=g}n.data.widgetArgs=i.data.widgetArgs}));var r,i,l,f,v,_=e.type,u=e.config||e._cfg,p=e.state||e._state,y=e.props||e._props,m=t.data.widgetArgs,E=e.body,b=e._body,W=_&&_.name,x=e.id,A=e.hasDomEvents;m&&(delete t.data.widgetArgs,l=m.scope,x=x||c(m),r=m.extend,i=m.customEvents,r&&(r=r.map(function(e){return a(e),e.name})),(f=m.extendState)&&(p?o(p,f):p=f),(v=m.extendConfig)&&(u?o(u,v):u=v));var h=d.__rerenderWidget,B=d.__rerender===!0,D=s.getWidgetsContext(t);if(!x){var I=D.getCurrentWidget();I&&(x=I.nextId())}var k;if(h?(k=h,x=h.id,delete d.__rerenderWidget):B&&(k=n(x,W)),!x&&e.hasOwnProperty("id"))throw new Error('Invalid widget ID for "'+W+'"');if(W){a(_);var C=!0;if(k&&!h){if(p&&(k._replaceState(p),k._processUpdateHandlers()===!0))return C=!1,void g(k,t,D,b);if(!k.isDirty()&&!k.shouldUpdate(y,p))return C=!1,void g(k,t,D,b)}k&&k._emitLifecycleEvent("beforeUpdate");var S=D.beginWidget({type:W,id:x,config:u,state:p,hasDomEvents:A,customEvents:i,scope:l,createWidget:e.createWidget,extend:r,existingWidget:k,bodyElId:E});C&&(e.renderBody(t,S),s.writeDomEventsEl(S,t)),S.end()}else e.renderBody(t,w)}});
$rmod.main("/src/components/app-try-marko","index");
$rmod.main("/src/components/app-codemirror","index");
$rmod.main("/html@0.0.10","lib/html");
$rmod.dep("","html","0.0.10");
$rmod.def("/html@0.0.10/lib/html",function(t,i,e,n,s){function h(t,i){function e(){return this.pos=0,this.token="",this.current_mode="CONTENT",this.tags={parent:"parent1",parentcount:1,parent1:""},this.tag_type="",this.token_text=this.last_token=this.last_text=this.token_type="",this.Utils={whitespace:"\n\r	 ".split(""),single_token:"br,input,link,meta,!doctype,basefont,base,area,hr,wbr,param,img,isindex,?xml,embed,?php,?,?=".split(","),extra_liners:"head,body,/html".split(","),in_array:function(t,i){for(var e=0;e<i.length;e++)if(t===i[e])return!0;return!1}},this.get_content=function(){for(var t="",i=[],e=!1;"<"!==this.input.charAt(this.pos);){if(this.pos>=this.input.length)return i.length?i.join(""):["","TK_EOF"];if(t=this.input.charAt(this.pos),this.pos++,this.line_char_count++,this.Utils.in_array(t,this.Utils.whitespace))i.length&&(e=!0),this.line_char_count--;else{if(e){if(this.line_char_count>=this.max_char){i.push("\n");for(var n=0;n<this.indent_level;n++)i.push(this.indent_string);this.line_char_count=0}else i.push(" "),this.line_char_count++;e=!1}i.push(t)}}return i.length?i.join(""):""},this.get_contents_to=function(t){if(this.pos==this.input.length)return["","TK_EOF"];var i="",e=new RegExp("</"+t+"\\s*>","igm");e.lastIndex=this.pos;var n=e.exec(this.input),s=n?n.index:this.input.length;return this.pos<s&&(i=this.input.substring(this.pos,s),this.pos=s),i},this.record_tag=function(t){this.tags[t+"count"]?(this.tags[t+"count"]++,this.tags[t+this.tags[t+"count"]]=this.indent_level):(this.tags[t+"count"]=1,this.tags[t+this.tags[t+"count"]]=this.indent_level),this.tags[t+this.tags[t+"count"]+"parent"]=this.tags.parent,this.tags.parent=t+this.tags[t+"count"]},this.retrieve_tag=function(t){if(this.tags[t+"count"]){for(var i=this.tags.parent;i&&t+this.tags[t+"count"]!==i;)i=this.tags[i+"parent"];i&&(this.indent_level=this.tags[t+this.tags[t+"count"]],this.tags.parent=this.tags[i+"parent"]),delete this.tags[t+this.tags[t+"count"]+"parent"],delete this.tags[t+this.tags[t+"count"]],1==this.tags[t+"count"]?delete this.tags[t+"count"]:this.tags[t+"count"]--}},this.get_tag=function(){var t,i,e="",n=[],s=!1;do{if(this.pos>=this.input.length)return n.length?n.join(""):["","TK_EOF"];e=this.input.charAt(this.pos),this.pos++,this.line_char_count++,this.Utils.in_array(e,this.Utils.whitespace)?(s=!0,this.line_char_count--):(("'"===e||'"'===e)&&(n[1]&&"!"===n[1]||(e+=this.get_unformatted(e),s=!0)),"="===e&&(s=!1),n.length&&"="!==n[n.length-1]&&">"!==e&&s&&(this.line_char_count>=this.max_char?(this.print_newline(!1,n),this.line_char_count=0):(n.push(" "),this.line_char_count++),s=!1),"<"===e&&(t=this.pos-1),n.push(e))}while(">"!==e);var h,r=n.join("");h=-1!=r.indexOf(" ")?r.indexOf(" "):r.indexOf(">");var a=r.substring(1,h).toLowerCase();if("/"===r.charAt(r.length-2)||this.Utils.in_array(a,this.Utils.single_token))this.tag_type="SINGLE";else if("script"===a)this.record_tag(a),this.tag_type="SCRIPT";else if("style"===a)this.record_tag(a),this.tag_type="STYLE";else if(this.Utils.in_array(a,_)){var o=this.get_unformatted("</"+a+">",r);n.push(o),t>0&&this.Utils.in_array(this.input.charAt(t-1),this.Utils.whitespace)&&n.splice(0,0,this.input.charAt(t-1)),i=this.pos-1,this.Utils.in_array(this.input.charAt(i+1),this.Utils.whitespace)&&n.push(this.input.charAt(i+1)),this.tag_type="SINGLE"}else if("!"===a.charAt(0))if(-1!=a.indexOf("[if")){if(-1!=r.indexOf("!IE")){var o=this.get_unformatted("-->",r);n.push(o)}this.tag_type="START"}else if(-1!=a.indexOf("[endif"))this.tag_type="END",this.unindent();else if(-1!=a.indexOf("[cdata[")){var o=this.get_unformatted("]]>",r);n.push(o),this.tag_type="SINGLE"}else{var o=this.get_unformatted("-->",r);n.push(o),this.tag_type="SINGLE"}else"/"===a.charAt(0)?(this.retrieve_tag(a.substring(1)),this.tag_type="END"):(this.record_tag(a),this.tag_type="START"),this.Utils.in_array(a,this.Utils.extra_liners)&&this.print_newline(!0,this.output);return n.join("")},this.get_unformatted=function(t,i){if(i&&-1!=i.toLowerCase().indexOf(t))return"";var e="",n="",s=!0;do{if(this.pos>=this.input.length)return n;if(e=this.input.charAt(this.pos),this.pos++,this.Utils.in_array(e,this.Utils.whitespace)){if(!s){this.line_char_count--;continue}if("\n"===e||"\r"===e){n+="\n",this.line_char_count=0;continue}}n+=e,this.line_char_count++,s=!0}while(-1==n.toLowerCase().indexOf(t));return n},this.get_token=function(){var t;if("TK_TAG_SCRIPT"===this.last_token||"TK_TAG_STYLE"===this.last_token){var i=this.last_token.substr(7);return t=this.get_contents_to(i),"string"!=typeof t?t:[t,"TK_"+i]}if("CONTENT"===this.current_mode)return t=this.get_content(),"string"!=typeof t?t:[t,"TK_CONTENT"];if("TAG"===this.current_mode){if(t=this.get_tag(),"string"!=typeof t)return t;var e="TK_TAG_"+this.tag_type;return[t,e]}},this.get_full_indent=function(t){return t=this.indent_level+t||0,1>t?"":Array(t+1).join(this.indent_string)},this.printer=function(t,i,e,n,s){this.input=t||"",this.output=[],this.indent_character=i,this.indent_string="",this.indent_size=e,this.brace_style=s,this.indent_level=0,this.max_char=n,this.line_char_count=0;for(var h=0;h<this.indent_size;h++)this.indent_string+=this.indent_character;this.print_newline=function(t,i){if(this.line_char_count=0,i&&i.length){if(!t)for(;this.Utils.in_array(i[i.length-1],this.Utils.whitespace);)i.pop();i.push("\n");for(var e=0;e<this.indent_level;e++)i.push(this.indent_string)}},this.print_token=function(t){this.output.push(t)},this.indent=function(){this.indent_level++},this.unindent=function(){this.indent_level>0&&this.indent_level--}},this}var n,s,h,r,a,_;for(i=i||{},s=i.indent_size||4,h=i.indent_char||" ",a=i.brace_style||"collapse",r=0==i.max_char?1/0:i.max_char||70,_=i.unformatted||["a","span","bdo","em","strong","dfn","code","samp","kbd","var","cite","abbr","acronym","q","sub","sup","tt","i","b","big","small","u","s","strike","font","ins","del","pre","address","dt","h1","h2","h3","h4","h5","h6"],n=new e,n.printer(t,h,s,r,a);;){var o=n.get_token();if(n.token_text=o[0],n.token_type=o[1],"TK_EOF"===n.token_type)break;switch(n.token_type){case"TK_TAG_START":n.print_newline(!1,n.output),n.print_token(n.token_text),n.indent(),n.current_mode="CONTENT";break;case"TK_TAG_STYLE":case"TK_TAG_SCRIPT":n.print_newline(!1,n.output),n.print_token(n.token_text),n.current_mode="CONTENT";break;case"TK_TAG_END":if("TK_CONTENT"===n.last_token&&""===n.last_text){var u=n.token_text.match(/\w+/)[0],p=n.output[n.output.length-1].match(/<\s*(\w+)/);(null===p||p[1]!==u)&&n.print_newline(!0,n.output)}n.print_token(n.token_text),n.current_mode="CONTENT";break;case"TK_TAG_SINGLE":var c=n.token_text.match(/^\s*<([a-z]+)/i);c&&n.Utils.in_array(c[1],_)||n.print_newline(!1,n.output),n.print_token(n.token_text),n.current_mode="CONTENT";break;case"TK_CONTENT":""!==n.token_text&&n.print_token(n.token_text),n.current_mode="TAG";break;case"TK_STYLE":case"TK_SCRIPT":if(""!==n.token_text){n.output.push("\n");var l=n.token_text;if("TK_SCRIPT"==n.token_type)var g="function"==typeof js_beautify&&js_beautify;else if("TK_STYLE"==n.token_type)var g="function"==typeof css_beautify&&css_beautify;if("keep"==i.indent_scripts)var f=0;else if("separate"==i.indent_scripts)var f=-n.indent_level;else var f=1;var d=n.get_full_indent(f);if(g)l=g(l.replace(/^\s*/,d),i);else{var T=l.match(/^\s*/)[0],k=T.match(/[^\n\r]*$/)[0].split(n.indent_string).length-1,y=n.get_full_indent(f-k);l=l.replace(/^\s*/,d).replace(/\r\n|\r|\n/g,"\n"+y).replace(/\s*$/,"")}l&&(n.print_token(l),n.print_newline(!0,n.output))}n.current_mode="TAG"}n.last_token=n.token_type,n.last_text=n.token_text}return n.output.join("")}e.exports={prettyPrint:h}});
$rmod.main("/codemirror-atom-modes@1.0.0","src/index");
$rmod.dep("","codemirror-atom-modes","1.0.0");
$rmod.main("/first-mate@5.1.1","lib/first-mate");
$rmod.dep("/$/codemirror-atom-modes","first-mate","5.1.1");
$rmod.def("/first-mate@5.1.1/lib/scope-selector-matchers",function(t,e,r,n,o){(function(){var t,e,n,o,s,c,i,h;i=function(){function t(t){this.segment=t[0].join("")+t[1].join("")}return t.prototype.matches=function(t){return t===this.segment},t.prototype.toCssSelector=function(){return this.segment.split(".").map(function(t){return"."+t.replace(/\+/g,"\\+")}).join("")},t}(),h=function(){function t(){}return t.prototype.matches=function(){return!0},t.prototype.toCssSelector=function(){return"*"},t}(),c=function(){function t(t,e){var r,n,o;for(this.segments=[t],n=0,o=e.length;o>n;n++)r=e[n],this.segments.push(r[1])}return t.prototype.matches=function(t){var e,r,n,o,s,c;if(r=t.split("."),r.length<this.segments.length)return!1;for(c=this.segments,e=o=0,s=c.length;s>o;e=++o)if(n=c[e],!n.matches(r[e]))return!1;return!0},t.prototype.toCssSelector=function(){return this.segments.map(function(t){return t.toCssSelector()}).join("")},t}(),s=function(){function t(t,e){var r,n,o;for(this.matchers=[t],n=0,o=e.length;o>n;n++)r=e[n],this.matchers.push(r[1])}return t.prototype.matches=function(t){var e,r,n,o,s;for(e=0,r=this.matchers[e],o=0,s=t.length;s>o;o++)if(n=t[o],r.matches(n)&&(r=this.matchers[++e]),null==r)return!0;return!1},t.prototype.toCssSelector=function(){return this.matchers.map(function(t){return t.toCssSelector()}).join(" ")},t}(),o=function(){function t(t,e){this.left=t,this.right=e}return t.prototype.matches=function(t){return this.left.matches(t)||this.right.matches(t)},t.prototype.toCssSelector=function(){return""+this.left.toCssSelector()+", "+this.right.toCssSelector()},t}(),t=function(){function t(t,e){this.left=t,this.right=e}return t.prototype.matches=function(t){return this.left.matches(t)&&this.right.matches(t)},t.prototype.toCssSelector=function(){return this.right instanceof n?""+this.left.toCssSelector()+this.right.toCssSelector():""+this.left.toCssSelector()+" "+this.right.toCssSelector()},t}(),n=function(){function t(t){this.matcher=t}return t.prototype.matches=function(t){return!this.matcher.matches(t)},t.prototype.toCssSelector=function(){return":not("+this.matcher.toCssSelector()+")"},t}(),e=function(){function e(e,r,s){switch(r){case"|":this.matcher=new o(e,s);break;case"&":this.matcher=new t(e,s);break;case"-":this.matcher=new t(e,new n(s))}}return e.prototype.matches=function(t){return this.matcher.matches(t)},e.prototype.toCssSelector=function(){return this.matcher.toCssSelector()},e}(),r.exports={AndMatcher:t,CompositeMatcher:e,NegateMatcher:n,OrMatcher:o,PathMatcher:s,ScopeMatcher:c,SegmentMatcher:i,TrueMatcher:h}}).call(this)});
$rmod.def("/first-mate@5.1.1/lib/scope-selector-parser",function(t,e,r,n,c){r.exports=function(){function e(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}function r(t,e,r,n,c,u){this.message=t,this.expected=e,this.found=r,this.offset=n,this.line=c,this.column=u,this.name="SyntaxError"}function n(e){function n(t){function r(t,r,n){var c,u;for(c=r;n>c;c++)u=e.charAt(c),"\n"===u?(t.seenCR||t.line++,t.column=1,t.seenCR=!1):"\r"===u||"\u2028"===u||"\u2029"===u?(t.line++,t.column=1,t.seenCR=!0):(t.column++,t.seenCR=!1)}return it!==t&&(it>t&&(it=0,st={line:1,column:1,seenCR:!1}),r(st,it,t),it=t),st}function c(t){lt>at||(at>lt&&(lt=at,ft=[]),ft.push(t))}function u(t,c,u){function a(t){var e=1;for(t.sort(function(t,e){return t.description<e.description?-1:t.description>e.description?1:0});e<t.length;)t[e-1]===t[e]?t.splice(e,1):e++}function o(t,e){function r(t){function e(t){return t.charCodeAt(0).toString(16).toUpperCase()}return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(t){return"\\x0"+e(t)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(t){return"\\x"+e(t)}).replace(/[\u0180-\u0FFF]/g,function(t){return"\\u0"+e(t)}).replace(/[\u1080-\uFFFF]/g,function(t){return"\\u"+e(t)})}var n,c,u,a=new Array(t.length);for(u=0;u<t.length;u++)a[u]=t[u].description;return n=t.length>1?a.slice(0,-1).join(", ")+" or "+a[t.length-1]:a[0],c=e?'"'+r(e)+'"':"end of input","Expected "+n+" but "+c+" found."}var i=n(u),s=u<e.length?e.charAt(u):null;return null!==c&&a(c),new r(null!==t?t:o(c,s),c,s,u,i.line,i.column)}function a(){var t,e,r,n;return t=at,e=d(),e!==C?(r=A(),r!==C?(n=d(),n!==C?(ot=t,e=w(r),t=e):(at=t,t=x)):(at=t,t=x)):(at=t,t=x),t}function o(){var t,r,n,u,a,o;if(t=at,r=d(),r!==C){if(n=at,u=[],R.test(e.charAt(at))?(a=e.charAt(at),at++):(a=C,0===ht&&c(F)),a!==C)for(;a!==C;)u.push(a),R.test(e.charAt(at))?(a=e.charAt(at),at++):(a=C,0===ht&&c(F));else u=x;if(u!==C){for(a=[],M.test(e.charAt(at))?(o=e.charAt(at),at++):(o=C,0===ht&&c(z));o!==C;)a.push(o),M.test(e.charAt(at))?(o=e.charAt(at),at++):(o=C,0===ht&&c(z));a!==C?(u=[u,a],n=u):(at=n,n=x)}else at=n,n=x;n!==C?(u=d(),u!==C?(ot=t,r=E(n),t=r):(at=t,t=x)):(at=t,t=x)}else at=t,t=x;return t===C&&(t=at,r=d(),r!==C?(Z.test(e.charAt(at))?(n=e.charAt(at),at++):(n=C,0===ht&&c(_)),n!==C?(u=d(),u!==C?(ot=t,r=S(n),t=r):(at=t,t=x)):(at=t,t=x)):(at=t,t=x)),t}function i(){var t,r,n,u,a,i;if(t=at,r=o(),r!==C){for(n=[],u=at,46===e.charCodeAt(at)?(a=B,at++):(a=C,0===ht&&c(b)),a!==C?(i=o(),i!==C?(a=[a,i],u=a):(at=u,u=x)):(at=u,u=x);u!==C;)n.push(u),u=at,46===e.charCodeAt(at)?(a=B,at++):(a=C,0===ht&&c(b)),a!==C?(i=o(),i!==C?(a=[a,i],u=a):(at=u,u=x)):(at=u,u=x);n!==C?(ot=t,r=L(r,n),t=r):(at=t,t=x)}else at=t,t=x;return t}function s(){var t,e,r,n,c,u;if(t=at,e=i(),e!==C){for(r=[],n=at,c=d(),c!==C?(u=i(),u!==C?(c=[c,u],n=c):(at=n,n=x)):(at=n,n=x);n!==C;)r.push(n),n=at,c=d(),c!==C?(u=i(),u!==C?(c=[c,u],n=c):(at=n,n=x)):(at=n,n=x);r!==C?(ot=t,e=N(e,r),t=e):(at=t,t=x)}else at=t,t=x;return t}function l(){var t,r,n,u,a,o;return t=at,40===e.charCodeAt(at)?(r=j,at++):(r=C,0===ht&&c(O)),r!==C?(n=d(),n!==C?(u=A(),u!==C?(a=d(),a!==C?(41===e.charCodeAt(at)?(o=P,at++):(o=C,0===ht&&c(T)),o!==C?(ot=t,r=U(u),t=r):(at=t,t=x)):(at=t,t=x)):(at=t,t=x)):(at=t,t=x)):(at=t,t=x),t}function f(){var t,r,n,u;return t=at,r=at,$.test(e.charAt(at))?(n=e.charAt(at),at++):(n=C,0===ht&&c(k)),n!==C?(58===e.charCodeAt(at)?(u=q,at++):(u=C,0===ht&&c(D)),u!==C?(n=[n,u],r=n):(at=r,r=x)):(at=r,r=x),r!==C?(n=d(),n!==C?(u=l(),u!==C?(ot=t,r=G(r,u),t=r):(at=t,t=x)):(at=t,t=x)):(at=t,t=x),t===C&&(t=at,r=at,$.test(e.charAt(at))?(n=e.charAt(at),at++):(n=C,0===ht&&c(k)),n!==C?(58===e.charCodeAt(at)?(u=q,at++):(u=C,0===ht&&c(D)),u!==C?(n=[n,u],r=n):(at=r,r=x)):(at=r,r=x),r!==C?(n=d(),n!==C?(u=s(),u!==C?(ot=t,r=H(r,u),t=r):(at=t,t=x)):(at=t,t=x)):(at=t,t=x)),t}function h(){var t,r,n,u,a;return t=at,45===e.charCodeAt(at)?(r=I,at++):(r=C,0===ht&&c(J)),r!==C?(n=d(),n!==C?(u=f(),u!==C?(a=d(),a!==C?(ot=t,r=K(u),t=r):(at=t,t=x)):(at=t,t=x)):(at=t,t=x)):(at=t,t=x),t===C&&(t=at,45===e.charCodeAt(at)?(r=I,at++):(r=C,0===ht&&c(J)),r!==C?(n=d(),n!==C?(u=l(),u!==C?(a=d(),a!==C?(ot=t,r=Q(u),t=r):(at=t,t=x)):(at=t,t=x)):(at=t,t=x)):(at=t,t=x),t===C&&(t=at,45===e.charCodeAt(at)?(r=I,at++):(r=C,0===ht&&c(J)),r!==C?(n=d(),n!==C?(u=s(),u!==C?(a=d(),a!==C?(ot=t,r=V(u),t=r):(at=t,t=x)):(at=t,t=x)):(at=t,t=x)):(at=t,t=x),t===C&&(t=f(),t===C&&(t=l(),t===C&&(t=s()))))),t}function p(){var t,r,n,u,a,o;return t=at,r=h(),r!==C?(n=d(),n!==C?(W.test(e.charAt(at))?(u=e.charAt(at),at++):(u=C,0===ht&&c(X)),u!==C?(a=d(),a!==C?(o=p(),o!==C?(ot=t,r=Y(r,u,o),t=r):(at=t,t=x)):(at=t,t=x)):(at=t,t=x)):(at=t,t=x)):(at=t,t=x),t===C&&(t=h()),t}function A(){var t,r,n,u,a,o;return t=at,r=p(),r!==C?(n=d(),n!==C?(44===e.charCodeAt(at)?(u=tt,at++):(u=C,0===ht&&c(et)),u!==C?(a=d(),a!==C?(o=A(),o===C&&(o=rt),o!==C?(ot=t,r=nt(r,o),t=r):(at=t,t=x)):(at=t,t=x)):(at=t,t=x)):(at=t,t=x)):(at=t,t=x),t===C&&(t=p()),t}function d(){var t,r;for(t=[],ct.test(e.charAt(at))?(r=e.charAt(at),at++):(r=C,0===ht&&c(ut));r!==C;)t.push(r),ct.test(e.charAt(at))?(r=e.charAt(at),at++):(r=C,0===ht&&c(ut));return t}var g,v=arguments.length>1?arguments[1]:{},C={},y={start:a},m=a,x=C,w=function(t){return t},R=/^[a-zA-Z0-9+_]/,F={type:"class",value:"[a-zA-Z0-9+_]",description:"[a-zA-Z0-9+_]"},M=/^[a-zA-Z0-9\-+_]/,z={type:"class",value:"[a-zA-Z0-9\\-+_]",description:"[a-zA-Z0-9\\-+_]"},E=function(t){return new pt.SegmentMatcher(t)},Z=/^[*]/,_={type:"class",value:"[*]",description:"[*]"},S=function(t){return new pt.TrueMatcher},B=".",b={type:"literal",value:".",description:'"."'},L=function(t,e){return new pt.ScopeMatcher(t,e)},N=function(t,e){return new pt.PathMatcher(t,e)},j="(",O={type:"literal",value:"(",description:'"("'},P=")",T={type:"literal",value:")",description:'")"'},U=function(t){return t},$=/^[LRB]/,k={type:"class",value:"[LRB]",description:"[LRB]"},q=":",D={type:"literal",value:":",description:'":"'},G=function(t,e){return e},H=function(t,e){return e},I="-",J={type:"literal",value:"-",description:'"-"'},K=function(t){return new pt.NegateMatcher(t)},Q=function(t){return new pt.NegateMatcher(t)},V=function(t){return new pt.NegateMatcher(t)},W=/^[|&\-]/,X={type:"class",value:"[|&\\-]",description:"[|&\\-]"},Y=function(t,e,r){return new pt.CompositeMatcher(t,e,r)},tt=",",et={type:"literal",value:",",description:'","'},rt=null,nt=function(t,e){return e?new pt.OrMatcher(t,e):t},ct=/^[ \t]/,ut={type:"class",value:"[ \\t]",description:"[ \\t]"},at=0,ot=0,it=0,st={line:1,column:1,seenCR:!1},lt=0,ft=[],ht=0;if("startRule"in v){if(!(v.startRule in y))throw new Error("Can't start parsing from rule \""+v.startRule+'".');m=y[v.startRule]}var pt=t("./scope-selector-matchers");if(g=m(),g!==C&&at===e.length)return g;throw g!==C&&at<e.length&&c({type:"end",description:"end of input"}),u(null,ft,lt)}return e(r,Error),{SyntaxError:r,parse:n}}()});
$rmod.def("/first-mate@5.1.1/lib/scope-selector",function(t,e,r,o,s){(function(){var e,o;o=t("./scope-selector-parser"),r.exports=e=function(){function t(t){this.matcher=o.parse(t)}return t.prototype.matches=function(t){return"string"==typeof t&&(t=[t]),this.matcher.matches(t)},t.prototype.toCssSelector=function(){return this.matcher.toCssSelector()},t}()}).call(this)});
$rmod.main("/underscore-plus@1.6.6","lib/underscore-plus");
$rmod.dep("/$/codemirror-atom-modes/$/first-mate","underscore-plus","1.6.6");
$rmod.main("/underscore@1.6.0","underscore");
$rmod.dep("/$/codemirror-atom-modes/$/first-mate/$/underscore-plus","underscore","1.6.0");
$rmod.def("/underscore@1.6.0/underscore",function(n,t,r,e,u){(function(){var n=this,e=n._,u={},i=Array.prototype,a=Object.prototype,o=Function.prototype,c=i.push,l=i.slice,f=i.concat,s=a.toString,p=a.hasOwnProperty,h=i.forEach,v=i.map,g=i.reduce,d=i.reduceRight,y=i.filter,m=i.every,b=i.some,w=i.indexOf,_=i.lastIndexOf,x=Array.isArray,j=Object.keys,A=o.bind,O=function(n){return n instanceof O?n:this instanceof O?void(this._wrapped=n):new O(n)};"undefined"!=typeof t?("undefined"!=typeof r&&r.exports&&(t=r.exports=O),t._=O):n._=O,O.VERSION="1.6.0";var k=O.each=O.forEach=function(n,t,r){if(null==n)return n;if(h&&n.forEach===h)n.forEach(t,r);else if(n.length===+n.length){for(var e=0,i=n.length;i>e;e++)if(t.call(r,n[e],e,n)===u)return}else for(var a=O.keys(n),e=0,i=a.length;i>e;e++)if(t.call(r,n[a[e]],a[e],n)===u)return;return n};O.map=O.collect=function(n,t,r){var e=[];return null==n?e:v&&n.map===v?n.map(t,r):(k(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";O.reduce=O.foldl=O.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),g&&n.reduce===g)return e&&(t=O.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(k(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},O.reduceRight=O.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),d&&n.reduceRight===d)return e&&(t=O.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=O.keys(n);i=a.length}if(k(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},O.find=O.detect=function(n,t,r){var e;return F(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},O.filter=O.select=function(n,t,r){var e=[];return null==n?e:y&&n.filter===y?n.filter(t,r):(k(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},O.reject=function(n,t,r){return O.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},O.every=O.all=function(n,t,r){t||(t=O.identity);var e=!0;return null==n?e:m&&n.every===m?n.every(t,r):(k(n,function(n,i,a){return(e=e&&t.call(r,n,i,a))?void 0:u}),!!e)};var F=O.some=O.any=function(n,t,r){t||(t=O.identity);var e=!1;return null==n?e:b&&n.some===b?n.some(t,r):(k(n,function(n,i,a){return e||(e=t.call(r,n,i,a))?u:void 0}),!!e)};O.contains=O.include=function(n,t){return null==n?!1:w&&n.indexOf===w?-1!=n.indexOf(t):F(n,function(n){return n===t})},O.invoke=function(n,t){var r=l.call(arguments,2),e=O.isFunction(t);return O.map(n,function(n){return(e?t:n[t]).apply(n,r)})},O.pluck=function(n,t){return O.map(n,O.property(t))},O.where=function(n,t){return O.filter(n,O.matches(t))},O.findWhere=function(n,t){return O.find(n,O.matches(t))},O.max=function(n,t,r){if(!t&&O.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);var e=-(1/0),u=-(1/0);return k(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;o>u&&(e=n,u=o)}),e},O.min=function(n,t,r){if(!t&&O.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);var e=1/0,u=1/0;return k(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;u>o&&(e=n,u=o)}),e},O.shuffle=function(n){var t,r=0,e=[];return k(n,function(n){t=O.random(r++),e[r-1]=e[t],e[t]=n}),e},O.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=O.values(n)),n[O.random(n.length-1)]):O.shuffle(n).slice(0,Math.max(0,t))};var M=function(n){return null==n?O.identity:O.isFunction(n)?n:O.property(n)};O.sortBy=function(n,t,r){return t=M(t),O.pluck(O.map(n,function(n,e,u){return{value:n,index:e,criteria:t.call(r,n,e,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(e>r||void 0===e)return-1}return n.index-t.index}),"value")};var R=function(n){return function(t,r,e){var u={};return r=M(r),k(t,function(i,a){var o=r.call(e,i,a,t);n(u,o,i)}),u}};O.groupBy=R(function(n,t,r){O.has(n,t)?n[t].push(r):n[t]=[r]}),O.indexBy=R(function(n,t,r){n[t]=r}),O.countBy=R(function(n,t){O.has(n,t)?n[t]++:n[t]=1}),O.sortedIndex=function(n,t,r,e){r=M(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},O.toArray=function(n){return n?O.isArray(n)?l.call(n):n.length===+n.length?O.map(n,O.identity):O.values(n):[]},O.size=function(n){return null==n?0:n.length===+n.length?n.length:O.keys(n).length},O.first=O.head=O.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:l.call(n,0,t)},O.initial=function(n,t,r){return l.call(n,0,n.length-(null==t||r?1:t))},O.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:l.call(n,Math.max(n.length-t,0))},O.rest=O.tail=O.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},O.compact=function(n){return O.filter(n,O.identity)};var S=function(n,t,r){return t&&O.every(n,O.isArray)?f.apply(r,n):(k(n,function(n){O.isArray(n)||O.isArguments(n)?t?c.apply(r,n):S(n,t,r):r.push(n)}),r)};O.flatten=function(n,t){return S(n,t,[])},O.without=function(n){return O.difference(n,l.call(arguments,1))},O.partition=function(n,t){var r=[],e=[];return k(n,function(n){(t(n)?r:e).push(n)}),[r,e]},O.uniq=O.unique=function(n,t,r,e){O.isFunction(t)&&(e=r,r=t,t=!1);var u=r?O.map(n,r,e):n,i=[],a=[];return k(u,function(r,e){(t?e&&a[a.length-1]===r:O.contains(a,r))||(a.push(r),i.push(n[e]))}),i},O.union=function(){return O.uniq(O.flatten(arguments,!0))},O.intersection=function(n){var t=l.call(arguments,1);return O.filter(O.uniq(n),function(n){return O.every(t,function(t){return O.contains(t,n)})})},O.difference=function(n){var t=f.apply(i,l.call(arguments,1));return O.filter(n,function(n){return!O.contains(t,n)})},O.zip=function(){for(var n=O.max(O.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=O.pluck(arguments,""+r);return t},O.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},O.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=O.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(w&&n.indexOf===w)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},O.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(_&&n.lastIndexOf===_)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},O.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var T=function(){};O.bind=function(n,t){var r,e;if(A&&n.bind===A)return A.apply(n,l.call(arguments,1));if(!O.isFunction(n))throw new TypeError;return r=l.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(l.call(arguments)));T.prototype=n.prototype;var u=new T;T.prototype=null;var i=n.apply(u,r.concat(l.call(arguments)));return Object(i)===i?i:u}},O.partial=function(n){var t=l.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===O&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},O.bindAll=function(n){var t=l.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return k(t,function(t){n[t]=O.bind(n[t],n)}),n},O.memoize=function(n,t){var r={};return t||(t=O.identity),function(){var e=t.apply(this,arguments);return O.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},O.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},O.defer=function(n){return O.delay.apply(O,[n,1].concat(l.call(arguments,1)))},O.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:O.now(),a=null,i=n.apply(e,u),e=u=null};return function(){var l=O.now();o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u),e=u=null):a||r.trailing===!1||(a=setTimeout(c,f)),i}},O.debounce=function(n,t,r){var e,u,i,a,o,c=function(){var l=O.now()-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u),i=u=null))};return function(){i=this,u=arguments,a=O.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u),i=u=null),o}},O.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},O.wrap=function(n,t){return O.partial(t,n)},O.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},O.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},O.keys=function(n){if(!O.isObject(n))return[];if(j)return j(n);var t=[];for(var r in n)O.has(n,r)&&t.push(r);return t},O.values=function(n){for(var t=O.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},O.pairs=function(n){for(var t=O.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},O.invert=function(n){for(var t={},r=O.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},O.functions=O.methods=function(n){var t=[];for(var r in n)O.isFunction(n[r])&&t.push(r);return t.sort()},O.extend=function(n){return k(l.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},O.pick=function(n){var t={},r=f.apply(i,l.call(arguments,1));return k(r,function(r){r in n&&(t[r]=n[r])}),t},O.omit=function(n){var t={},r=f.apply(i,l.call(arguments,1));for(var e in n)O.contains(r,e)||(t[e]=n[e]);return t},O.defaults=function(n){return k(l.call(arguments,1),function(t){if(t)for(var r in t)void 0===n[r]&&(n[r]=t[r])}),n},O.clone=function(n){return O.isObject(n)?O.isArray(n)?n.slice():O.extend({},n):n},O.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof O&&(n=n._wrapped),t instanceof O&&(t=t._wrapped);var u=s.call(n);if(u!=s.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(O.isFunction(a)&&a instanceof a&&O.isFunction(o)&&o instanceof o)&&"constructor"in n&&"constructor"in t)return!1;r.push(n),e.push(t);var c=0,l=!0;if("[object Array]"==u){if(c=n.length,l=c==t.length)for(;c--&&(l=I(n[c],t[c],r,e)););}else{for(var f in n)if(O.has(n,f)&&(c++,!(l=O.has(t,f)&&I(n[f],t[f],r,e))))break;if(l){for(f in t)if(O.has(t,f)&&!c--)break;l=!c}}return r.pop(),e.pop(),l};O.isEqual=function(n,t){return I(n,t,[],[])},O.isEmpty=function(n){if(null==n)return!0;if(O.isArray(n)||O.isString(n))return 0===n.length;for(var t in n)if(O.has(n,t))return!1;return!0},O.isElement=function(n){return!(!n||1!==n.nodeType)},O.isArray=x||function(n){return"[object Array]"==s.call(n)},O.isObject=function(n){return n===Object(n)},k(["Arguments","Function","String","Number","Date","RegExp"],function(n){O["is"+n]=function(t){return s.call(t)=="[object "+n+"]"}}),O.isArguments(arguments)||(O.isArguments=function(n){return!(!n||!O.has(n,"callee"))}),"function"!=typeof/./&&(O.isFunction=function(n){return"function"==typeof n}),O.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},O.isNaN=function(n){return O.isNumber(n)&&n!=+n},O.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==s.call(n)},O.isNull=function(n){return null===n},O.isUndefined=function(n){return void 0===n},O.has=function(n,t){return p.call(n,t)},O.noConflict=function(){return n._=e,this},O.identity=function(n){return n},O.constant=function(n){return function(){return n}},O.property=function(n){return function(t){return t[n]}},O.matches=function(n){return function(t){if(t===n)return!0;for(var r in n)if(n[r]!==t[r])return!1;return!0}},O.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},O.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},O.now=Date.now||function(){return(new Date).getTime()};var N={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};N.unescape=O.invert(N.escape);var q={escape:new RegExp("["+O.keys(N.escape).join("")+"]","g"),unescape:new RegExp("("+O.keys(N.unescape).join("|")+")","g")};O.each(["escape","unescape"],function(n){O[n]=function(t){return null==t?"":(""+t).replace(q[n],function(t){return N[n][t]})}}),O.result=function(n,t){if(null==n)return void 0;var r=n[t];return O.isFunction(r)?r.call(n):r},O.mixin=function(n){k(O.functions(n),function(t){var r=O[t]=n[t];O.prototype[t]=function(){var n=[this._wrapped];return c.apply(n,arguments),$.call(this,r.apply(O,n))}})};var B=0;O.uniqueId=function(n){var t=++B+"";return n?n+t:t},O.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var D=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},C=/\\|'|\r|\n|\t|\u2028|\u2029/g;O.template=function(n,t,r){var e;r=O.defaults({},r,O.templateSettings);var u=new RegExp([(r.escape||D).source,(r.interpolate||D).source,(r.evaluate||D).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(C,function(n){return"\\"+z[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,O);var c=function(n){return e.call(this,n,O)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},O.chain=function(n){return O(n).chain()};var $=function(n){return this._chain?O(n).chain():n};O.mixin(O),k(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=i[n];O.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],$.call(this,r)}}),k(["concat","join","slice"],function(n){var t=i[n];O.prototype[n]=function(){return $.call(this,t.apply(this._wrapped,arguments))}}),O.extend(O.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return O})}).call(this)});
$rmod.def("/underscore-plus@1.6.6/lib/underscore-plus",function(e,n,r,t,i){var u=e("process");(function(){var n,t,i,l,s,o,a,c,f=[].slice;c=e("/$/codemirror-atom-modes/$/first-mate/$/underscore-plus/$/underscore"),i={cmd:"⌘",ctrl:"⌃",alt:"⌥",option:"⌥",shift:"⇧",enter:"⏎",left:"←",right:"→",up:"↑",down:"↓"},l={cmd:"Cmd",ctrl:"Ctrl",alt:"Alt",option:"Alt",shift:"Shift",enter:"Enter",left:"Left",right:"Right",up:"Up",down:"Down"},o={"~":"`",_:"-","+":"=","|":"\\","{":"[","}":"]",":":";",'"':"'","<":",",">":".","?":"/"},a=function(e){var n,r,t,i,u,l;if(i=0,t=[],null==e)return t;for(r=u=0,l=e.length;l>u;r=++u)n=e[r],"."!==n||0!==r&&"\\"===e[r-1]||(t.push(e.substring(i,r)),i=r+1);return t.push(e.substr(i,e.length)),t},t=function(e){return c.isObject(e)&&!c.isArray(e)},s={adviseBefore:function(e,n,r){var t;return t=e[n],e[n]=function(){var e;return e=1<=arguments.length?f.call(arguments,0):[],r.apply(this,e)!==!1?t.apply(this,e):void 0}},camelize:function(e){return e?e.replace(/[_-]+(\w)/g,function(e){return e[1].toUpperCase()}):""},capitalize:function(e){return e?"github"===e.toLowerCase()?"GitHub":e[0].toUpperCase()+e.slice(1):""},compactObject:function(e){var n,r,t;r={};for(n in e)t=e[n],null!=t&&(r[n]=t);return r},dasherize:function(e){return e?(e=e[0].toLowerCase()+e.slice(1),e.replace(/([A-Z])|(_)/g,function(e,n){return n?"-"+n.toLowerCase():"-"})):""},deepClone:function(e){return c.isArray(e)?e.map(function(e){return s.deepClone(e)}):c.isObject(e)&&!c.isFunction(e)?s.mapObject(e,function(e){return function(e,n){return[e,s.deepClone(n)]}}(this)):e},deepExtend:function(e){var n,r,i,u,l,o,a;for(u=e,n=0;++n<arguments.length;)if(i=arguments[n],t(u)&&t(i))for(a=Object.keys(i),l=0,o=a.length;o>l;l++)r=a[l],u[r]=s.deepExtend(u[r],i[r]);else u=s.deepClone(i);return u},deepContains:function(e,n){var r,t,i;if(null==e)return!1;for(t=0,i=e.length;i>t;t++)if(r=e[t],c.isEqual(r,n))return!0;return!1},endsWith:function(e,n){return null==n&&(n=""),e?-1!==e.indexOf(n,e.length-n.length):!1},escapeAttribute:function(e){return e?e.replace(/"/g,"&quot;").replace(/\n/g,"").replace(/\\/g,"-"):""},escapeRegExp:function(e){return e?e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"):""},humanizeEventName:function(e,n){var r,t,i,u;return u=e.split(":"),t=u[0],r=u[1],null==r?s.undasherize(t):(i=s.undasherize(t),null==n&&(n=s.undasherize(r)),""+i+": "+n)},humanizeKey:function(e,n){var r;return null==n&&(n=u.platform),e?(r="darwin"===n?i:l,r[e]?r[e]:1===e.length&&null!=o[e]?[r.shift,o[e]]:1===e.length&&e===e.toUpperCase()&&e.toUpperCase()!==e.toLowerCase()?[r.shift,e.toUpperCase()]:1===e.length||/f[0-9]{1,2}/.test(e)?e.toUpperCase():"darwin"===n?e:s.capitalize(e)):e},humanizeKeystroke:function(e,n){var r,t,i,l,o,a,f,p,h,g;if(null==n&&(n=u.platform),!e)return e;for(o=e.split(" "),r=[],f=0,h=o.length;h>f;f++){for(e=o[f],l=[],a=e.split("-"),t=p=0,g=a.length;g>p;t=++p)i=a[t],""===i&&""===a[t-1]&&(i="-"),i&&l.push(s.humanizeKey(i,n));l=c.uniq(c.flatten(l)),l="darwin"===n?l.join(""):l.join("+"),r.push(l)}return r.join(" ")},isSubset:function(e,n){return c.every(e,function(e){return c.include(n,e)})},losslessInvert:function(e){var n,r,t;n={};for(r in e)t=e[r],null==n[t]&&(n[t]=[]),n[t].push(r);return n},mapObject:function(e,n){var r,t,i,u,l,s,o;for(t={},s=Object.keys(e),u=0,l=s.length;l>u;u++)r=s[u],o=n(r,e[r]),r=o[0],i=o[1],t[r]=i;return t},multiplyString:function(e,n){var r,t;for(r="",t=0;n>t;)r+=e,t++;return r},pluralize:function(e,n,r){return null==e&&(e=0),null==r&&(r=n+"s"),1===e?""+e+" "+n:""+e+" "+r},remove:function(e,n){var r;return r=e.indexOf(n),r>=0&&e.splice(r,1),e},setValueForKeyPath:function(e,n,r){var t,i;for(i=a(n);i.length>1;)t=i.shift(),null==e[t]&&(e[t]={}),e=e[t];return null!=r?e[i.shift()]=r:delete e[i.shift()]},hasKeyPath:function(e,n){var r,t,i,u;for(t=a(n),i=0,u=t.length;u>i;i++){if(r=t[i],!e.hasOwnProperty(r))return!1;e=e[r]}return!0},spliceWithArray:function(e,n,r,t,i){var u,l,s,o;if(null==i&&(i=1e5),t.length<i)return e.splice.apply(e,[n,r].concat(f.call(t)));for(e.splice(n,r),o=[],u=l=0,s=t.length;i>0?s>=l:l>=s;u=l+=i)o.push(e.splice.apply(e,[n+u,0].concat(f.call(t.slice(u,u+i)))));return o},sum:function(e){var n,r,t,i;for(r=0,t=0,i=e.length;i>t;t++)n=e[t],r+=n;return r},uncamelcase:function(e){var n;return e?(n=e.replace(/([A-Z])|_+/g,function(e,n){return null==n&&(n="")," "+n}),s.capitalize(n.trim())):""},undasherize:function(e){return e?e.split("-").map(s.capitalize).join(" "):""},underscore:function(e){return e?(e=e[0].toLowerCase()+e.slice(1),e.replace(/([A-Z])|-+/g,function(e,n){return null==n&&(n=""),"_"+n.toLowerCase()})):""},valueForKeyPath:function(e,n){var r,t,i,u;for(t=a(n),i=0,u=t.length;u>i;i++)if(r=t[i],e=e[r],null==e)return;return e},isEqual:function(e,r,t,i){return c.isArray(t)&&c.isArray(i)?n(e,r,t,i):n(e,r)},isEqualForProperties:function(){var e,n,r,t,i,u;for(e=arguments[0],n=arguments[1],r=3<=arguments.length?f.call(arguments,2):[],i=0,u=r.length;u>i;i++)if(t=r[i],!c.isEqual(e[t],n[t]))return!1;return!0}},n=function(e,r,t,i){var u,l,s,o,a,f,p,h,g,d,m,v,y,E,C;if(null==t&&(t=[]),null==i&&(i=[]),e===r)return c.isEqual(e,r);if(c.isFunction(e)||c.isFunction(r))return c.isEqual(e,r);for(y=t.length;y--;)if(t[y]===e)return i[y]===r;if(t.push(e),i.push(r),d=!1,c.isFunction(null!=e?e.isEqual:void 0))d=e.isEqual(r,t,i);else if(c.isFunction(null!=r?r.isEqual:void 0))d=r.isEqual(e,i,t);else if(c.isArray(e)&&c.isArray(r)&&e.length===r.length){for(d=!0,m=E=0,C=e.length;C>E;m=++E)if(s=e[m],!n(s,r[m],t,i)){d=!1;break}}else if(c.isRegExp(e)&&c.isRegExp(r))d=c.isEqual(e,r);else if(c.isElement(e)&&c.isElement(r))d=e===r;else if(c.isObject(e)&&c.isObject(r))if(u=e.constructor,f=r.constructor,l=c.isFunction(u)&&u instanceof u,p=c.isFunction(f)&&f instanceof f,u===f||l&&p){o=0,d=!0;for(v in e)if(a=e[v],c.has(e,v)&&(o++,!c.has(r,v)||!n(a,r[v],t,i))){d=!1;break}if(d){h=0;for(v in r)g=r[v],c.has(r,v)&&h++;d=o===h}}else d=!1;else d=c.isEqual(e,r);return t.pop(),i.pop(),d},r.exports=c.extend({},c,s)}).call(this)});
$rmod.main("/event-kit@2.0.0","lib/event-kit");
$rmod.dep("/$/codemirror-atom-modes/$/first-mate","event-kit","2.0.0");
$rmod.def("/event-kit@2.0.0/lib/emitter",function(t,e,n,i,s){(function(){var e,i;e=t("./disposable"),n.exports=i=function(){function t(){this.clear()}return t.exceptionHandlers=[],t.onEventHandlerException=function(t){return 0===this.exceptionHandlers.length&&(this.dispatch=this.exceptionHandlingDispatch),this.exceptionHandlers.push(t),new e(function(e){return function(){return e.exceptionHandlers.splice(e.exceptionHandlers.indexOf(t),1),0===e.exceptionHandlers.length?e.dispatch=e.simpleDispatch:void 0}}(this))},t.simpleDispatch=function(t,e){return t(e)},t.exceptionHandlingDispatch=function(t,e){var n,i,s,r,o,h;try{return t(e)}catch(a){for(n=a,o=this.exceptionHandlers,h=[],s=0,r=o.length;r>s;s++)i=o[s],h.push(i(n));return h}},t.dispatch=t.simpleDispatch,t.prototype.disposed=!1,t.prototype.clear=function(){return this.handlersByEventName={}},t.prototype.dispose=function(){return this.handlersByEventName=null,this.disposed=!0},t.prototype.on=function(t,n,i){var s;if(null==i&&(i=!1),this.disposed)throw new Error("Emitter has been disposed");if("function"!=typeof n)throw new Error("Handler must be a function");return(s=this.handlersByEventName[t])?i?this.handlersByEventName[t]=[n].concat(s):this.handlersByEventName[t]=s.concat(n):this.handlersByEventName[t]=[n],new e(this.off.bind(this,t,n))},t.prototype.preempt=function(t,e){return this.on(t,e,!0)},t.prototype.off=function(t,e){var n,i,s,r,o;if(!this.disposed&&(s=this.handlersByEventName[t])){for(i=[],r=0,o=s.length;o>r;r++)n=s[r],n!==e&&i.push(n);this.handlersByEventName[t]=i}},t.prototype.emit=function(t,e){var n,i,s,r,o;if(i=null!=(o=this.handlersByEventName)?o[t]:void 0)for(s=0,r=i.length;r>s;s++)n=i[s],this.constructor.dispatch(n,e)},t}()}).call(this)});
$rmod.def("/event-kit@2.0.0/lib/disposable",function(i,o,s,t,n){(function(){var i;s.exports=i=function(){function i(i){this.disposalAction=i}return i.prototype.disposed=!1,i.isDisposable=function(i){return"function"==typeof(null!=i?i.dispose:void 0)},i.prototype.dispose=function(){this.disposed||(this.disposed=!0,"function"==typeof this.disposalAction&&this.disposalAction(),this.disposalAction=null)},i}()}).call(this)});
$rmod.def("/event-kit@2.0.0/lib/composite-disposable",function(s,t,e,o,i){(function(){var s;e.exports=s=function(){function s(){var s,t,e;for(this.disposables=new Set,t=0,e=arguments.length;e>t;t++)s=arguments[t],this.add(s)}return s.prototype.disposed=!1,s.prototype.dispose=function(){this.disposed||(this.disposed=!0,this.disposables.forEach(function(s){return s.dispose()}),this.disposables=null)},s.prototype.add=function(){var s,t,e;if(!this.disposed)for(t=0,e=arguments.length;e>t;t++)s=arguments[t],this.disposables.add(s)},s.prototype.remove=function(s){this.disposed||this.disposables["delete"](s)},s.prototype.clear=function(){this.disposed||this.disposables.clear()},s}()}).call(this)});
$rmod.def("/event-kit@2.0.0/lib/event-kit",function(e,i,t,o,s){(function(){i.Emitter=e("./emitter"),i.Disposable=e("./disposable"),i.CompositeDisposable=e("./composite-disposable")}).call(this)});
$rmod.def("/first-mate@5.1.1/lib/null-grammar",function(r,t,o,n,e){(function(){var t,n,e={}.hasOwnProperty,a=function(r,t){function o(){this.constructor=r}for(var n in t)e.call(t,n)&&(r[n]=t[n]);return o.prototype=t.prototype,r.prototype=new o,r.__super__=t.prototype,r};t=r("./grammar"),o.exports=n=function(r){function t(r){var o,n;o="Null Grammar",n="text.plain.null-grammar",t.__super__.constructor.call(this,r,{name:o,scopeName:n})}return a(t,r),t.prototype.getScore=function(){return 0},t}(t)}).call(this)});
$rmod.def("/first-mate@5.1.1/lib/grammar-registry",function(r,e,t,o,a){(function(){var e,o,a,n,i,m,s,p;s=r("/$/codemirror-atom-modes/$/first-mate/$/underscore-plus"),e=null,p=r("/$/codemirror-atom-modes/$/first-mate/$/event-kit"),a=p.Emitter,o=p.Disposable,n=r("./grammar"),m=r("./null-grammar"),t.exports=i=function(){function r(r){var e;null==r&&(r={}),this.maxTokensPerLine=null!=(e=r.maxTokensPerLine)?e:1/0,this.nullGrammar=new m(this),this.clear()}return r.prototype.clear=function(){return this.emitter=new a,this.grammars=[],this.grammarsByScopeName={},this.injectionGrammars=[],this.grammarOverridesByPath={},this.scopeIdCounter=-1,this.idsByScope={},this.scopesById={},this.addGrammar(this.nullGrammar)},r.prototype.onDidAddGrammar=function(r){return this.emitter.on("did-add-grammar",r)},r.prototype.onDidUpdateGrammar=function(r){return this.emitter.on("did-update-grammar",r)},r.prototype.getGrammars=function(){return s.clone(this.grammars)},r.prototype.grammarForScopeName=function(r){return this.grammarsByScopeName[r]},r.prototype.addGrammar=function(r){return this.grammars.push(r),this.grammarsByScopeName[r.scopeName]=r,null!=r.injectionSelector&&this.injectionGrammars.push(r),this.grammarUpdated(r.scopeName),n.includeDeprecatedAPIs&&this.emit("grammar-added",r),this.emitter.emit("did-add-grammar",r),new o(function(e){return function(){return e.removeGrammar(r)}}(this))},r.prototype.removeGrammar=function(r){return s.remove(this.grammars,r),delete this.grammarsByScopeName[r.scopeName],s.remove(this.injectionGrammars,r),void this.grammarUpdated(r.scopeName)},r.prototype.removeGrammarForScopeName=function(r){var e;return e=this.grammarForScopeName(r),null!=e&&this.removeGrammar(e),e},r.prototype.readGrammarSync=function(r){var t,o;if(t=null!=(o=e.readFileSync(r))?o:{},"string"==typeof t.scopeName&&t.scopeName.length>0)return this.createGrammar(r,t);throw new Error("Grammar missing required scopeName property: "+r)},r.prototype.readGrammar=function(r,t){return void e.readFile(r,function(e){return function(o,a){return null==a&&(a={}),null!=o?"function"==typeof t?t(o):void 0:"string"==typeof a.scopeName&&a.scopeName.length>0?"function"==typeof t?t(null,e.createGrammar(r,a)):void 0:"function"==typeof t?t(new Error("Grammar missing required scopeName property: "+r)):void 0}}(this))},r.prototype.loadGrammarSync=function(r){var e;return e=this.readGrammarSync(r),this.addGrammar(e),e},r.prototype.loadGrammar=function(r,e){return void this.readGrammar(r,function(r){return function(t,o){return null!=t?"function"==typeof e?e(t):void 0:(r.addGrammar(o),"function"==typeof e?e(null,o):void 0)}}(this))},r.prototype.startIdForScope=function(r){var e;return(e=this.idsByScope[r])||(e=this.scopeIdCounter,this.scopeIdCounter-=2,this.idsByScope[r]=e,this.scopesById[e]=r),e},r.prototype.endIdForScope=function(r){return this.startIdForScope(r)-1},r.prototype.scopeForId=function(r){return r%2===-1?this.scopesById[r]:this.scopesById[r+1]},r.prototype.grammarUpdated=function(r){var e,t,o,a;for(a=this.grammars,t=0,o=a.length;o>t;t++)e=a[t],e.scopeName!==r&&e.grammarUpdated(r)&&(n.includeDeprecatedAPIs&&this.emit("grammar-updated",e),this.emitter.emit("did-update-grammar",e))},r.prototype.createGrammar=function(r,e){var t;return null==e.maxTokensPerLine&&(e.maxTokensPerLine=this.maxTokensPerLine),t=new n(this,e),t.path=r,t},r.prototype.decodeTokens=function(r,e,t,o){var a,n,i,m,s,p,c,u,d,h;for(null==t&&(t=[]),i=0,s=t.map(function(r){return function(e){return r.scopeForId(e)}}(this)),u=[],n=d=0,h=e.length;h>d;n=++d)if(p=e[n],p>=0)c={value:r.substring(i,i+p),scopes:s.slice()},null!=o&&(c=o(c,n)),u.push(c),i+=p;else if(p%2===-1)t.push(p),s.push(this.scopeForId(p));else if(t.pop(),a=this.scopeForId(p+1),m=s.pop(),m!==a)throw new Error("Expected popped scope to be "+a+", but it was "+m);return u},r}()}).call(this)});
$rmod.main("/path-browserify@0.0.0","index");
$rmod.dep("","path-browserify","0.0.0","path");
$rmod.dep("/$/lasso/$/lasso-require","path-browserify","0.0.0");
$rmod.def("/path-browserify@0.0.0/index",function(r,t,n,e,i){function s(r,t){for(var n=0,e=r.length-1;e>=0;e--){var i=r[e];"."===i?r.splice(e,1):".."===i?(r.splice(e,1),n++):n&&(r.splice(e,1),n--)}if(t)for(;n--;n)r.unshift("..");return r}function u(r,t){if(r.filter)return r.filter(t);for(var n=[],e=0;e<r.length;e++)t(r[e],e,r)&&n.push(r[e]);return n}var o=r("process"),f=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,l=function(r){return f.exec(r).slice(1)};t.resolve=function(){for(var r="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var e=n>=0?arguments[n]:o.cwd();if("string"!=typeof e)throw new TypeError("Arguments to path.resolve must be strings");e&&(r=e+"/"+r,t="/"===e.charAt(0))}return r=s(u(r.split("/"),function(r){return!!r}),!t).join("/"),(t?"/":"")+r||"."},t.normalize=function(r){var n=t.isAbsolute(r),e="/"===a(r,-1);return r=s(u(r.split("/"),function(r){return!!r}),!n).join("/"),r||n||(r="."),r&&e&&(r+="/"),(n?"/":"")+r},t.isAbsolute=function(r){return"/"===r.charAt(0)},t.join=function(){var r=Array.prototype.slice.call(arguments,0);return t.normalize(u(r,function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r}).join("/"))},t.relative=function(r,n){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var n=r.length-1;n>=0&&""===r[n];n--);return t>n?[]:r.slice(t,n-t+1)}r=t.resolve(r).substr(1),n=t.resolve(n).substr(1);for(var i=e(r.split("/")),s=e(n.split("/")),u=Math.min(i.length,s.length),o=u,f=0;u>f;f++)if(i[f]!==s[f]){o=f;break}for(var l=[],f=o;f<i.length;f++)l.push("..");return l=l.concat(s.slice(o)),l.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(r){var t=l(r),n=t[0],e=t[1];return n||e?(e&&(e=e.substr(0,e.length-1)),n+e):"."},t.basename=function(r,t){var n=l(r)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(r){return l(r)[3]};var a="b"==="ab".substr(-1)?function(r,t,n){return r.substr(t,n)}:function(r,t,n){return 0>t&&(t=r.length+t),r.substr(t,n)}});
$rmod.main("/onigurumajs@1.0.0","index");
$rmod.dep("/$/codemirror-atom-modes/$/first-mate","onigurumajs","1.0.0","oniguruma");
$rmod.main("/lodash@3.10.1","index");
$rmod.dep("/$/codemirror-atom-modes/$/first-mate/$/onigurumajs","lodash","3.10.1");
$rmod.def("/lodash@3.10.1/index",function(n,t,r,e,u){(function(){function n(n,t){if(n!==t){var r=null===n,e=n===j,u=n===n,i=null===t,o=t===j,f=t===t;if(n>t&&!i||!u||r&&!o&&f||e&&f)return 1;if(t>n&&!r||!f||i&&!e&&u||o&&u)return-1}return 0}function e(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function u(n,t,r){if(t!==t)return _(n,r);for(var e=r-1,u=n.length;++e<u;)if(n[e]===t)return e;return-1}function i(n){return"function"==typeof n||!1}function o(n){return null==n?"":n+""}function f(n,t){for(var r=-1,e=n.length;++r<e&&t.indexOf(n.charAt(r))>-1;);return r}function a(n,t){for(var r=n.length;r--&&t.indexOf(n.charAt(r))>-1;);return r}function c(t,r){return n(t.criteria,r.criteria)||t.index-r.index}function l(t,r,e){for(var u=-1,i=t.criteria,o=r.criteria,f=i.length,a=e.length;++u<f;){var c=n(i[u],o[u]);if(c){if(u>=a)return c;var l=e[u];return c*("asc"===l||l===!0?1:-1)}}return t.index-r.index}function s(n){return Pn[n]}function p(n){return Kn[n]}function h(n,t,r){return t?n=Gn[n]:r&&(n=Jn[n]),"\\"+n}function v(n){return"\\"+Jn[n]}function _(n,t,r){for(var e=n.length,u=t+(r?0:-1);r?u--:++u<e;){var i=n[u];if(i!==i)return u}return-1}function g(n){return!!n&&"object"==typeof n}function y(n){return 160>=n&&n>=9&&13>=n||32==n||160==n||5760==n||6158==n||n>=8192&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n)}function d(n,t){for(var r=-1,e=n.length,u=-1,i=[];++r<e;)n[r]===t&&(n[r]=M,i[++u]=r);return i}function m(n,t){for(var r,e=-1,u=n.length,i=-1,o=[];++e<u;){var f=n[e],a=t?t(f,e,n):f;e&&r===a||(r=a,o[++i]=f)}return o}function w(n){for(var t=-1,r=n.length;++t<r&&y(n.charCodeAt(t)););return t}function x(n){for(var t=n.length;t--&&y(n.charCodeAt(t)););return t}function b(n){return Vn[n]}function A(t){function r(n){if(g(n)&&!Cf(n)&&!(n instanceof nn)){if(n instanceof X)return n;if(no.call(n,"__chain__")&&no.call(n,"__wrapped__"))return he(n)}return new X(n)}function y(){}function X(n,t,r){this.__wrapped__=n,this.__actions__=r||[],this.__chain__=!!t}function nn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Oo,this.__views__=[]}function rn(){var n=new nn(this.__wrapped__);return n.__actions__=tt(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=tt(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=tt(this.__views__),n}function Pn(){if(this.__filtered__){var n=new nn(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Kn(){var n=this.__wrapped__.value(),t=this.__dir__,r=Cf(n),e=0>t,u=r?n.length:0,i=Vr(0,u,this.__views__),o=i.start,f=i.end,a=f-o,c=e?f:o-1,l=this.__iteratees__,s=l.length,p=0,h=Ao(a,this.__takeCount__);if(!r||B>u||u==a&&h==a)return er(e&&r?n.reverse():n,this.__actions__);var v=[];n:for(;a--&&h>p;){c+=t;for(var _=-1,g=n[c];++_<s;){var y=l[_],d=y.iteratee,m=y.type,w=d(g);if(m==D)g=w;else if(!w){if(m==z)continue n;break n}}v[p++]=g}return v}function Vn(){this.__data__={}}function Yn(n){return this.has(n)&&delete this.__data__[n]}function Gn(n){return"__proto__"==n?j:this.__data__[n]}function Jn(n){return"__proto__"!=n&&no.call(this.__data__,n)}function Xn(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this}function Zn(n){var t=n?n.length:0;for(this.data={hash:go(null),set:new lo};t--;)this.push(n[t])}function Hn(n,t){var r=n.data,e="string"==typeof t||Wu(t)?r.set.has(t):r.hash[t];return e?0:-1}function Qn(n){var t=this.data;"string"==typeof n||Wu(n)?t.set.add(n):t.hash[n]=!0}function nt(n,t){for(var r=-1,e=n.length,u=-1,i=t.length,o=zi(e+i);++r<e;)o[r]=n[r];for(;++u<i;)o[r++]=t[u];return o}function tt(n,t){var r=-1,e=n.length;for(t||(t=zi(e));++r<e;)t[r]=n[r];return t}function ut(n,t){for(var r=-1,e=n.length;++r<e&&t(n[r],r,n)!==!1;);return n}function it(n,t){for(var r=n.length;r--&&t(n[r],r,n)!==!1;);return n}function ot(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return!1;return!0}function ft(n,t,r,e){for(var u=-1,i=n.length,o=e,f=o;++u<i;){var a=n[u],c=+t(a);r(c,o)&&(o=c,f=a)}return f}function at(n,t){for(var r=-1,e=n.length,u=-1,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[++u]=o)}return i}function ct(n,t){for(var r=-1,e=n.length,u=zi(e);++r<e;)u[r]=t(n[r],r,n);return u}function lt(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function st(n,t,r,e){var u=-1,i=n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);return r}function pt(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function ht(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}function vt(n,t){for(var r=n.length,e=0;r--;)e+=+t(n[r])||0;return e}function _t(n,t){return n===j?t:n}function gt(n,t,r,e){return n!==j&&no.call(e,r)?n:t}function yt(n,t,r){for(var e=-1,u=Df(t),i=u.length;++e<i;){var o=u[e],f=n[o],a=r(f,t[o],o,n,t);(a===a?a===f:f!==f)&&(f!==j||o in n)||(n[o]=a)}return n}function dt(n,t){return null==t?n:wt(t,Df(t),n)}function mt(n,t){for(var r=-1,e=null==n,u=!e&&Zr(n),i=u?n.length:0,o=t.length,f=zi(o);++r<o;){var a=t[r];u?f[r]=Hr(a,i)?n[a]:j:f[r]=e?j:n[a]}return f}function wt(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var i=t[e];r[i]=n[i]}return r}function xt(n,t,r){var e=typeof n;return"function"==e?t===j?n:or(n,t,r):null==n?Ri:"object"==e?zt(n):t===j?Si(n):Dt(n,t)}function bt(n,t,r,e,u,i,o){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==j)return f;if(!Wu(n))return n;var a=Cf(n);if(a){if(f=Yr(n),!t)return tt(n,f)}else{var c=ro.call(n),l=c==J;if(c!=H&&c!=P&&(!l||u))return Mn[c]?Jr(n,c,t):u?n:{};if(f=Gr(l?{}:n),!t)return dt(f,n)}i||(i=[]),o||(o=[]);for(var s=i.length;s--;)if(i[s]==n)return o[s];return i.push(n),o.push(f),(a?ut:Ut)(n,function(e,u){f[u]=bt(e,t,r,u,n,i,o)}),f}function At(n,t,r){if("function"!=typeof n)throw new Ji(q);return so(function(){n.apply(j,r)},t)}function jt(n,t){var r=n?n.length:0,e=[];if(!r)return e;var i=-1,o=Mr(),f=o==u,a=f&&t.length>=B?_r(t):null,c=t.length;a&&(o=Hn,f=!1,t=a);n:for(;++i<r;){var l=n[i];if(f&&l===l){for(var s=c;s--;)if(t[s]===l)continue n;e.push(l)}else o(t,l,0)<0&&e.push(l)}return e}function kt(n,t){var r=!0;return No(n,function(n,e,u){return r=!!t(n,e,u)}),r}function It(n,t,r,e){var u=e,i=u;return No(n,function(n,o,f){var a=+t(n,o,f);(r(a,u)||a===e&&a===i)&&(u=a,i=n)}),i}function Rt(n,t,r,e){var u=n.length;for(r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===j||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;u>r;)n[r++]=t;return n}function Ot(n,t){var r=[];return No(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function Et(n,t,r,e){var u;return r(n,function(n,r,i){return t(n,r,i)?(u=e?r:n,!1):void 0}),u}function Ct(n,t,r,e){e||(e=[]);for(var u=-1,i=n.length;++u<i;){var o=n[u];g(o)&&Zr(o)&&(r||Cf(o)||ku(o))?t?Ct(o,t,r,e):lt(e,o):r||(e[e.length]=o)}return e}function $t(n,t){return Lo(n,t,ni)}function Ut(n,t){return Lo(n,t,Df)}function St(n,t){return Bo(n,t,Df)}function Wt(n,t){for(var r=-1,e=t.length,u=-1,i=[];++r<e;){var o=t[r];Su(n[o])&&(i[++u]=o)}return i}function Ft(n,t,r){if(null!=n){r!==j&&r in se(n)&&(t=[r]);for(var e=0,u=t.length;null!=n&&u>e;)n=n[t[e++]];return e&&e==u?n:j}}function Nt(n,t,r,e,u,i){return n===t?!0:null==n||null==t||!Wu(n)&&!g(t)?n!==n&&t!==t:Tt(n,t,Nt,r,e,u,i)}function Tt(n,t,r,e,u,i,o){var f=Cf(n),a=Cf(t),c=K,l=K;f||(c=ro.call(n),c==P?c=H:c!=H&&(f=Mu(n))),a||(l=ro.call(t),l==P?l=H:l!=H&&(a=Mu(t)));var s=c==H,p=l==H,h=c==l;if(h&&!f&&!s)return Br(n,t,c);if(!u){var v=s&&no.call(n,"__wrapped__"),_=p&&no.call(t,"__wrapped__");if(v||_)return r(v?n.value():n,_?t.value():t,e,u,i,o)}if(!h)return!1;i||(i=[]),o||(o=[]);for(var g=i.length;g--;)if(i[g]==n)return o[g]==t;i.push(n),o.push(t);var y=(f?Lr:zr)(n,t,r,e,u,i,o);return i.pop(),o.pop(),y}function Lt(n,t,r){var e=t.length,u=e,i=!r;if(null==n)return!u;for(n=se(n);e--;){var o=t[e];if(i&&o[2]?o[1]!==n[o[0]]:!(o[0]in n))return!1}for(;++e<u;){o=t[e];var f=o[0],a=n[f],c=o[1];if(i&&o[2]){if(a===j&&!(f in n))return!1}else{var l=r?r(a,c,f):j;if(!(l===j?Nt(c,a,r,!0):l))return!1}}return!0}function Bt(n,t){var r=-1,e=Zr(n)?zi(n.length):[];return No(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function zt(n){var t=Pr(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?!1:n[r]===e&&(e!==j||r in se(n))}}return function(n){return Lt(n,t)}}function Dt(n,t){var r=Cf(n),e=ne(n)&&ee(t),u=n+"";return n=pe(n),function(i){if(null==i)return!1;var o=u;if(i=se(i),(r||!e)&&!(o in i)){if(i=1==n.length?i:Ft(i,Jt(n,0,-1)),null==i)return!1;o=Ie(n),i=se(i)}return i[o]===t?t!==j||o in i:Nt(t,i[o],j,!0)}}function qt(n,t,r,e,u){if(!Wu(n))return n;var i=Zr(t)&&(Cf(t)||Mu(t)),o=i?j:Df(t);return ut(o||t,function(f,a){if(o&&(a=f,f=t[a]),g(f))e||(e=[]),u||(u=[]),Mt(n,t,a,qt,r,e,u);else{var c=n[a],l=r?r(c,f,a,n,t):j,s=l===j;s&&(l=f),l===j&&(!i||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l)}}),n}function Mt(n,t,r,e,u,i,o){for(var f=i.length,a=t[r];f--;)if(i[f]==a)return void(n[r]=o[f]);var c=n[r],l=u?u(c,a,r,n,t):j,s=l===j;s&&(l=a,Zr(a)&&(Cf(a)||Mu(a))?l=Cf(c)?c:Zr(c)?tt(c):[]:zu(a)||ku(a)?l=ku(c)?Gu(c):zu(c)?c:{}:s=!1),i.push(a),o.push(l),s?n[r]=e(l,a,u,i,o):(l===l?l!==c:c===c)&&(n[r]=l)}function Pt(n){return function(t){return null==t?j:t[n]}}function Kt(n){var t=n+"";return n=pe(n),function(r){return Ft(r,n,t)}}function Vt(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Hr(e)){var u=e;po.call(n,e,1)}}return n}function Yt(n,t){return n+yo(Io()*(t-n+1))}function Gt(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)}),r}function Jt(n,t,r){var e=-1,u=n.length;t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=r===j||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=zi(u);++e<u;)i[e]=n[e+t];return i}function Xt(n,t){var r;return No(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Zt(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}function Ht(n,t,r){var e=Dr(),u=-1;t=ct(t,function(n){return e(n)});var i=Bt(n,function(n){var r=ct(t,function(t){return t(n)});return{criteria:r,index:++u,value:n}});return Zt(i,function(n,t){return l(n,t,r)})}function Qt(n,t){var r=0;return No(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function nr(n,t){var r=-1,e=Mr(),i=n.length,o=e==u,f=o&&i>=B,a=f?_r():null,c=[];a?(e=Hn,o=!1):(f=!1,a=t?[]:c);n:for(;++r<i;){var l=n[r],s=t?t(l,r,n):l;if(o&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else e(a,s,0)<0&&((t||f)&&a.push(s),c.push(l))}return c}function tr(n,t){for(var r=-1,e=t.length,u=zi(e);++r<e;)u[r]=n[t[r]];return u}function rr(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?Jt(n,e?0:i,e?i+1:u):Jt(n,e?i+1:0,e?u:i)}function er(n,t){var r=n;r instanceof nn&&(r=r.value());for(var e=-1,u=t.length;++e<u;){var i=t[e];r=i.func.apply(i.thisArg,lt([r],i.args))}return r}function ur(n,t,r){var e=0,u=n?n.length:e;if("number"==typeof t&&t===t&&$o>=u){for(;u>e;){var i=e+u>>>1,o=n[i];(r?t>=o:t>o)&&null!==o?e=i+1:u=i}return u}return ir(n,t,Ri,r)}function ir(n,t,r,e){t=r(t);for(var u=0,i=n?n.length:0,o=t!==t,f=null===t,a=t===j;i>u;){var c=yo((u+i)/2),l=r(n[c]),s=l!==j,p=l===l;if(o)var h=p||e;else h=f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?!1:e?t>=l:t>l;h?u=c+1:i=c}return Ao(i,Co)}function or(n,t,r){if("function"!=typeof n)return Ri;if(t===j)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)};case 5:return function(r,e,u,i,o){return n.call(t,r,e,u,i,o)}}return function(){return n.apply(t,arguments)}}function fr(n){var t=new io(n.byteLength),r=new ho(t);return r.set(new ho(n)),t}function ar(n,t,r){for(var e=r.length,u=-1,i=bo(n.length-e,0),o=-1,f=t.length,a=zi(f+i);++o<f;)a[o]=t[o];for(;++u<e;)a[r[u]]=n[u];for(;i--;)a[o++]=n[u++];return a}function cr(n,t,r){for(var e=-1,u=r.length,i=-1,o=bo(n.length-u,0),f=-1,a=t.length,c=zi(o+a);++i<o;)c[i]=n[i];for(var l=i;++f<a;)c[l+f]=t[f];for(;++e<u;)c[l+r[e]]=n[i++];return c}function lr(n,t){return function(r,e,u){var i=t?t():{};if(e=Dr(e,u,3),Cf(r))for(var o=-1,f=r.length;++o<f;){var a=r[o];n(i,a,e(a,o,r),r)}else No(r,function(t,r,u){n(i,t,e(t,r,u),u)});return i}}function sr(n){return yu(function(t,r){var e=-1,u=null==t?0:r.length,i=u>2?r[u-2]:j,o=u>2?r[2]:j,f=u>1?r[u-1]:j;for("function"==typeof i?(i=or(i,f,5),u-=2):(i="function"==typeof f?f:j,u-=i?1:0),o&&Qr(r[0],r[1],o)&&(i=3>u?j:i,u=1);++e<u;){var a=r[e];a&&n(t,a,i)}return t})}function pr(n,t){return function(r,e){var u=r?qo(r):0;if(!re(u))return n(r,e);for(var i=t?u:-1,o=se(r);(t?i--:++i<u)&&e(o[i],i,o)!==!1;);return r}}function hr(n){return function(t,r,e){for(var u=se(t),i=e(t),o=i.length,f=n?o:-1;n?f--:++f<o;){var a=i[f];if(r(u[a],a,u)===!1)break}return t}}function vr(n,t){function r(){var u=this&&this!==rt&&this instanceof r?e:n;return u.apply(t,arguments)}var e=yr(n);return r}function _r(n){return go&&lo?new Zn(n):null}function gr(n){return function(t){for(var r=-1,e=ji(li(t)),u=e.length,i="";++r<u;)i=n(i,e[r],r);return i}}function yr(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Fo(n.prototype),e=n.apply(r,t);return Wu(e)?e:r}}function dr(n){function t(r,e,u){u&&Qr(r,e,u)&&(e=j);var i=Tr(r,n,j,j,j,j,j,e);return i.placeholder=t.placeholder,i}return t}function mr(n,t){return yu(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(j,r))})}function wr(n,t){return function(r,e,u){if(u&&Qr(r,e,u)&&(e=j),e=Dr(e,u,3),1==e.length){r=Cf(r)?r:le(r);var i=ft(r,e,n,t);if(!r.length||i!==t)return i}return It(r,e,n,t)}}function xr(n,t){return function(r,u,i){if(u=Dr(u,i,3),Cf(r)){var o=e(r,u,t);return o>-1?r[o]:j}return Et(r,u,n)}}function br(n){return function(t,r,u){return t&&t.length?(r=Dr(r,u,3),e(t,r,n)):-1}}function Ar(n){return function(t,r,e){return r=Dr(r,e,3),Et(t,r,n,!0)}}function jr(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,i=zi(r);n?e--:++e<r;){var o=i[u++]=arguments[e];if("function"!=typeof o)throw new Ji(q);!t&&X.prototype.thru&&"wrapper"==qr(o)&&(t=new X([],!0))}for(e=t?-1:r;++e<r;){o=i[e];var f=qr(o),a="wrapper"==f?Do(o):j;t=a&&te(a[0])&&a[1]==(S|E|$|W)&&!a[4].length&&1==a[9]?t[qr(a[0])].apply(t,a[3]):1==o.length&&te(o)?t[f]():t.thru(o)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Cf(e)&&e.length>=B)return t.plant(e).value();for(var u=0,o=r?i[u].apply(this,n):e;++u<r;)o=i[u].call(this,o);return o}}}function kr(n,t){return function(r,e,u){return"function"==typeof e&&u===j&&Cf(r)?n(r,e):t(r,or(e,u,3))}}function Ir(n){return function(t,r,e){return("function"!=typeof r||e!==j)&&(r=or(r,e,3)),n(t,r,ni)}}function Rr(n){return function(t,r,e){return("function"!=typeof r||e!==j)&&(r=or(r,e,3)),n(t,r)}}function Or(n){return function(t,r,e){var u={};return r=Dr(r,e,3),Ut(t,function(t,e,i){var o=r(t,e,i);e=n?o:e,t=n?t:o,u[e]=t}),u}}function Er(n){return function(t,r,e){return t=o(t),(n?t:"")+Sr(t,r,e)+(n?"":t)}}function Cr(n){var t=yu(function(r,e){var u=d(e,t.placeholder);return Tr(r,n,j,e,u)});return t}function $r(n,t){return function(r,e,u,i){var o=arguments.length<3;return"function"==typeof e&&i===j&&Cf(r)?n(r,e,u,o):Gt(r,Dr(e,i,4),u,o,t)}}function Ur(n,t,r,e,u,i,o,f,a,c){function l(){for(var m=arguments.length,w=m,x=zi(m);w--;)x[w]=arguments[w];if(e&&(x=ar(x,e,u)),i&&(x=cr(x,i,o)),v||g){var b=l.placeholder,A=d(x,b);if(m-=A.length,c>m){var k=f?tt(f):j,O=bo(c-m,0),E=v?A:j,C=v?j:A,S=v?x:j,W=v?j:x;t|=v?$:U,t&=~(v?U:$),_||(t&=~(I|R));var F=[n,t,r,S,E,W,C,k,a,O],N=Ur.apply(j,F);return te(n)&&Mo(N,F),N.placeholder=b,N}}var T=p?r:this,L=h?T[n]:n;return f&&(x=ae(x,f)),s&&a<x.length&&(x.length=a),this&&this!==rt&&this instanceof l&&(L=y||yr(n)),L.apply(T,x)}var s=t&S,p=t&I,h=t&R,v=t&E,_=t&O,g=t&C,y=h?j:yr(n);return l}function Sr(n,t,r){var e=n.length;if(t=+t,e>=t||!wo(t))return"";var u=t-e;return r=null==r?" ":r+"",gi(r,_o(u/r.length)).slice(0,u)}function Wr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=zi(c+f);++a<c;)l[a]=e[a];for(;f--;)l[a++]=arguments[++t];var s=this&&this!==rt&&this instanceof u?o:n;return s.apply(i?r:this,l)}var i=t&I,o=yr(n);return u}function Fr(n){var t=Pi[n];return function(n,r){return r=r===j?0:+r||0,r?(r=ao(10,r),t(n*r)/r):t(n)}}function Nr(n){return function(t,r,e,u){var i=Dr(e);return null==e&&i===xt?ur(t,r,n):ir(t,r,i(e,u,1),n)}}function Tr(n,t,r,e,u,i,o,f){var a=t&R;if(!a&&"function"!=typeof n)throw new Ji(q);var c=e?e.length:0;if(c||(t&=~($|U),e=u=j),c-=u?u.length:0,t&U){var l=e,s=u;e=u=j}var p=a?j:Do(n),h=[n,t,r,e,u,l,s,i,o,f];if(p&&(ue(h,p),t=h[1],f=h[9]),h[9]=null==f?a?0:n.length:bo(f-c,0)||0,t==I)var v=vr(h[0],h[2]);else v=t!=$&&t!=(I|$)||h[4].length?Ur.apply(j,h):Wr.apply(j,h);var _=p?zo:Mo;return _(v,h)}function Lr(n,t,r,e,u,i,o){var f=-1,a=n.length,c=t.length;if(a!=c&&!(u&&c>a))return!1;for(;++f<a;){var l=n[f],s=t[f],p=e?e(u?s:l,u?l:s,f):j;if(p!==j){if(p)continue;return!1}if(u){if(!ht(t,function(n){return l===n||r(l,n,e,u,i,o)}))return!1}else if(l!==s&&!r(l,s,e,u,i,o))return!1}return!0}function Br(n,t,r){switch(r){case V:case Y:return+n==+t;case G:return n.name==t.name&&n.message==t.message;case Z:return n!=+n?t!=+t:n==+t;case Q:case tn:return n==t+""}return!1}function zr(n,t,r,e,u,i,o){var f=Df(n),a=f.length,c=Df(t),l=c.length;if(a!=l&&!u)return!1;for(var s=a;s--;){var p=f[s];if(!(u?p in t:no.call(t,p)))return!1}for(var h=u;++s<a;){p=f[s];var v=n[p],_=t[p],g=e?e(u?_:v,u?v:_,p):j;if(!(g===j?r(v,_,e,u,i,o):g))return!1;h||(h="constructor"==p)}if(!h){var y=n.constructor,d=t.constructor;if(y!=d&&"constructor"in n&&"constructor"in t&&!("function"==typeof y&&y instanceof y&&"function"==typeof d&&d instanceof d))return!1}return!0}function Dr(n,t,e){var u=r.callback||ki;return u=u===ki?xt:u,e?u(n,t,e):u}function qr(n){for(var t=n.name,r=Wo[t],e=r?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function Mr(n,t,e){var i=r.indexOf||je;return i=i===je?u:i,n?i(n,t,e):i}function Pr(n){for(var t=ti(n),r=t.length;r--;)t[r][2]=ee(t[r][1]);return t}function Kr(n,t){var r=null==n?j:n[t];return Tu(r)?r:j}function Vr(n,t,r){for(var e=-1,u=r.length;++e<u;){var i=r[e],o=i.size;switch(i.type){case"drop":n+=o;break;case"dropRight":t-=o;break;case"take":t=Ao(t,n+o);break;case"takeRight":n=bo(n,t-o)}}return{start:n,end:t}}function Yr(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&no.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Gr(n){var t=n.constructor;return"function"==typeof t&&t instanceof t||(t=Vi),new t}function Jr(n,t,r){var e=n.constructor;switch(t){case en:return fr(n);case V:case Y:return new e(+n);case un:case on:case fn:case an:case cn:case ln:case sn:case pn:case hn:var u=n.buffer;return new e(r?fr(u):u,n.byteOffset,n.length);case Z:case tn:return new e(n);case Q:var i=new e(n.source,Un.exec(n));i.lastIndex=n.lastIndex}return i}function Xr(n,t,r){null==n||ne(t,n)||(t=pe(t),n=1==t.length?n:Ft(n,Jt(t,0,-1)),t=Ie(t));var e=null==n?n:n[t];return null==e?j:e.apply(n,r)}function Zr(n){return null!=n&&re(qo(n))}function Hr(n,t){return n="number"==typeof n||Fn.test(n)?+n:-1,t=null==t?Uo:t,n>-1&&n%1==0&&t>n}function Qr(n,t,r){if(!Wu(r))return!1;var e=typeof t;if("number"==e?Zr(r)&&Hr(t,r.length):"string"==e&&t in r){var u=r[t];return n===n?n===u:u!==u}return!1}function ne(n,t){var r=typeof n;if("string"==r&&kn.test(n)||"number"==r)return!0;if(Cf(n))return!1;var e=!jn.test(n);return e||null!=t&&n in se(t)}function te(n){var t=qr(n);if(!(t in nn.prototype))return!1;var e=r[t];if(n===e)return!0;var u=Do(e);return!!u&&n===u[0]}function re(n){return"number"==typeof n&&n>-1&&n%1==0&&Uo>=n}function ee(n){return n===n&&!Wu(n)}function ue(n,t){var r=n[1],e=t[1],u=r|e,i=S>u,o=e==S&&r==E||e==S&&r==W&&n[7].length<=t[8]||e==(S|W)&&r==E;if(!i&&!o)return n;e&I&&(n[2]=t[2],u|=r&I?0:O);var f=t[3];if(f){var a=n[3];n[3]=a?ar(a,f,t[4]):tt(f),n[4]=a?d(n[3],M):tt(t[4])}return f=t[5],f&&(a=n[5],n[5]=a?cr(a,f,t[6]):tt(f),n[6]=a?d(n[5],M):tt(t[6])),f=t[7],f&&(n[7]=tt(f)),e&S&&(n[8]=null==n[8]?t[8]:Ao(n[8],t[8])),null==n[9]&&(n[9]=t[9]),n[0]=t[0],n[1]=u,n}function ie(n,t){return n===j?t:$f(n,t,ie)}function oe(n,t){n=se(n);for(var r=-1,e=t.length,u={};++r<e;){var i=t[r];i in n&&(u[i]=n[i])}return u}function fe(n,t){var r={};return $t(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function ae(n,t){for(var r=n.length,e=Ao(t.length,r),u=tt(n);e--;){var i=t[e];n[e]=Hr(i,r)?u[i]:j}return n}function ce(n){for(var t=ni(n),r=t.length,e=r&&n.length,u=!!e&&re(e)&&(Cf(n)||ku(n)),i=-1,o=[];++i<r;){var f=t[i];(u&&Hr(f,e)||no.call(n,f))&&o.push(f)}return o}function le(n){return null==n?[]:Zr(n)?Wu(n)?n:Vi(n):ii(n)}function se(n){return Wu(n)?n:Vi(n)}function pe(n){if(Cf(n))return n;var t=[];return o(n).replace(In,function(n,r,e,u){t.push(e?u.replace(Cn,"$1"):r||n)}),t}function he(n){return n instanceof nn?n.clone():new X(n.__wrapped__,n.__chain__,tt(n.__actions__))}function ve(n,t,r){t=(r?Qr(n,t,r):null==t)?1:bo(yo(t)||1,1);for(var e=0,u=n?n.length:0,i=-1,o=zi(_o(u/t));u>e;)o[++i]=Jt(n,e,e+=t);return o}function _e(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var i=n[t];i&&(u[++e]=i)}return u}function ge(n,t,r){var e=n?n.length:0;return e?((r?Qr(n,t,r):null==t)&&(t=1),Jt(n,0>t?0:t)):[]}function ye(n,t,r){var e=n?n.length:0;return e?((r?Qr(n,t,r):null==t)&&(t=1),t=e-(+t||0),Jt(n,0,0>t?0:t)):[]}function de(n,t,r){return n&&n.length?rr(n,Dr(t,r,3),!0,!0):[]}function me(n,t,r){return n&&n.length?rr(n,Dr(t,r,3),!0):[]}function we(n,t,r,e){var u=n?n.length:0;return u?(r&&"number"!=typeof r&&Qr(n,t,r)&&(r=0,e=u),Rt(n,t,r,e)):[]}function xe(n){return n?n[0]:j}function be(n,t,r){var e=n?n.length:0;return r&&Qr(n,t,r)&&(t=!1),e?Ct(n,t):[]}function Ae(n){var t=n?n.length:0;return t?Ct(n,!0):[]}function je(n,t,r){var e=n?n.length:0;if(!e)return-1;if("number"==typeof r)r=0>r?bo(e+r,0):r;else if(r){var i=ur(n,t);return e>i&&(t===t?t===n[i]:n[i]!==n[i])?i:-1}return u(n,t,r||0)}function ke(n){return ye(n,1)}function Ie(n){var t=n?n.length:0;return t?n[t-1]:j}function Re(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if("number"==typeof r)u=(0>r?bo(e+r,0):Ao(r||0,e-1))+1;else if(r){u=ur(n,t,!0)-1;var i=n[u];return(t===t?t===i:i!==i)?u:-1}if(t!==t)return _(n,u,!0);for(;u--;)if(n[u]===t)return u;return-1}function Oe(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=Mr(),u=n.length;++r<u;)for(var i=0,o=n[r];(i=e(t,o,i))>-1;)po.call(t,i,1);return t}function Ee(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,i=[],o=n.length;for(t=Dr(t,r,3);++u<o;){var f=n[u];t(f,u,n)&&(e.push(f),i.push(u))}return Vt(n,i),e}function Ce(n){return ge(n,1)}function $e(n,t,r){var e=n?n.length:0;return e?(r&&"number"!=typeof r&&Qr(n,t,r)&&(t=0,r=e),Jt(n,t,r)):[]}function Ue(n,t,r){var e=n?n.length:0;return e?((r?Qr(n,t,r):null==t)&&(t=1),Jt(n,0,0>t?0:t)):[]}function Se(n,t,r){var e=n?n.length:0;return e?((r?Qr(n,t,r):null==t)&&(t=1),t=e-(+t||0),Jt(n,0>t?0:t)):[]}function We(n,t,r){return n&&n.length?rr(n,Dr(t,r,3),!1,!0):[]}function Fe(n,t,r){return n&&n.length?rr(n,Dr(t,r,3)):[]}function Ne(n,t,r,e){var i=n?n.length:0;if(!i)return[];null!=t&&"boolean"!=typeof t&&(e=r,r=Qr(n,t,e)?j:t,t=!1);var o=Dr();return(null!=r||o!==xt)&&(r=o(r,e,3)),t&&Mr()==u?m(n,r):nr(n,r)}function Te(n){if(!n||!n.length)return[];var t=-1,r=0;n=at(n,function(n){return Zr(n)?(r=bo(n.length,r),!0):void 0});for(var e=zi(r);++t<r;)e[t]=ct(n,Pt(t));return e}function Le(n,t,r){var e=n?n.length:0;if(!e)return[];var u=Te(n);return null==t?u:(t=or(t,r,4),ct(u,function(n){return st(n,t,j,!0)}))}function Be(){for(var n=-1,t=arguments.length;++n<t;){var r=arguments[n];if(Zr(r))var e=e?lt(jt(e,r),jt(r,e)):r}return e?nr(e):[]}function ze(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Cf(n[0])||(t=[]);++r<e;){var i=n[r];t?u[i]=t[r]:i&&(u[i[0]]=i[1])}return u}function De(n){var t=r(n);return t.__chain__=!0,t}function qe(n,t,r){return t.call(r,n),n}function Me(n,t,r){return t.call(r,n)}function Pe(){return De(this)}function Ke(){return new X(this.value(),this.__chain__)}function Ve(n){for(var t,r=this;r instanceof y;){var e=he(r);t?u.__wrapped__=e:t=e;var u=e;r=r.__wrapped__}return u.__wrapped__=n,t}function Ye(){var n=this.__wrapped__,t=function(n){return r&&r.__dir__<0?n:n.reverse()};if(n instanceof nn){var r=n;return this.__actions__.length&&(r=new nn(this)),r=r.reverse(),r.__actions__.push({func:Me,args:[t],thisArg:j}),new X(r,this.__chain__)}return this.thru(t)}function Ge(){return this.value()+""}function Je(){return er(this.__wrapped__,this.__actions__)}function Xe(n,t,r){var e=Cf(n)?ot:kt;return r&&Qr(n,t,r)&&(t=j),("function"!=typeof t||r!==j)&&(t=Dr(t,r,3)),e(n,t)}function Ze(n,t,r){var e=Cf(n)?at:Ot;return t=Dr(t,r,3),e(n,t)}function He(n,t){return uf(n,zt(t))}function Qe(n,t,r,e){var u=n?qo(n):0;return re(u)||(n=ii(n),u=n.length),r="number"!=typeof r||e&&Qr(t,r,e)?0:0>r?bo(u+r,0):r||0,"string"==typeof n||!Cf(n)&&qu(n)?u>=r&&n.indexOf(t,r)>-1:!!u&&Mr(n,t,r)>-1}function nu(n,t,r){var e=Cf(n)?ct:Bt;return t=Dr(t,r,3),e(n,t)}function tu(n,t){return nu(n,Si(t))}function ru(n,t,r){var e=Cf(n)?at:Ot;return t=Dr(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})}function eu(n,t,r){if(r?Qr(n,t,r):null==t){n=le(n);var e=n.length;return e>0?n[Yt(0,e-1)]:j}var u=-1,i=Yu(n),e=i.length,o=e-1;for(t=Ao(0>t?0:+t||0,e);++u<t;){var f=Yt(u,o),a=i[f];i[f]=i[u],i[u]=a}return i.length=t,i}function uu(n){return eu(n,Oo)}function iu(n){var t=n?qo(n):0;return re(t)?t:Df(n).length}function ou(n,t,r){var e=Cf(n)?ht:Xt;return r&&Qr(n,t,r)&&(t=j),("function"!=typeof t||r!==j)&&(t=Dr(t,r,3)),e(n,t)}function fu(n,t,r){if(null==n)return[];r&&Qr(n,t,r)&&(t=j);var e=-1;t=Dr(t,r,3);var u=Bt(n,function(n,r,u){return{criteria:t(n,r,u),index:++e,value:n}});return Zt(u,c)}function au(n,t,r,e){return null==n?[]:(e&&Qr(t,r,e)&&(r=j),Cf(t)||(t=null==t?[]:[t]),Cf(r)||(r=null==r?[]:[r]),Ht(n,t,r))}function cu(n,t){return Ze(n,zt(t))}function lu(n,t){if("function"!=typeof t){if("function"!=typeof n)throw new Ji(q);var r=n;n=t,t=r}return n=wo(n=+n)?n:0,function(){return--n<1?t.apply(this,arguments):void 0}}function su(n,t,r){return r&&Qr(n,t,r)&&(t=j),t=n&&null==t?n.length:bo(+t||0,0),Tr(n,S,j,j,j,j,t)}function pu(n,t){var r;if("function"!=typeof t){if("function"!=typeof n)throw new Ji(q);var e=n;n=t,t=e}return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=j),r}}function hu(n,t,r){function e(){h&&oo(h),c&&oo(c),_=0,c=h=v=j}function u(t,r){r&&oo(r),c=h=v=j,t&&(_=gf(),l=n.apply(p,a),h||c||(a=p=j))}function i(){var n=t-(gf()-s);0>=n||n>t?u(v,c):h=so(i,n)}function o(){u(y,h)}function f(){if(a=arguments,s=gf(),p=this,v=y&&(h||!d),g===!1)var r=d&&!h;else{c||d||(_=s);var e=g-(s-_),u=0>=e||e>g;u?(c&&(c=oo(c)),_=s,l=n.apply(p,a)):c||(c=so(o,e))}return u&&h?h=oo(h):h||t===g||(h=so(i,t)),r&&(u=!0,l=n.apply(p,a)),!u||h||c||(a=p=j),l}var a,c,l,s,p,h,v,_=0,g=!1,y=!0;if("function"!=typeof n)throw new Ji(q);if(t=0>t?0:+t||0,r===!0){var d=!0;y=!1}else Wu(r)&&(d=!!r.leading,g="maxWait"in r&&bo(+r.maxWait||0,t),y="trailing"in r?!!r.trailing:y);return f.cancel=e,f}function vu(n,t){if("function"!=typeof n||t&&"function"!=typeof t)throw new Ji(q);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o),o};return r.cache=new vu.Cache,r}function _u(n){if("function"!=typeof n)throw new Ji(q);return function(){return!n.apply(this,arguments)}}function gu(n){return pu(2,n)}function yu(n,t){if("function"!=typeof n)throw new Ji(q);return t=bo(t===j?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=bo(r.length-t,0),i=zi(u);++e<u;)i[e]=r[t+e];switch(t){case 0:return n.call(this,i);case 1:return n.call(this,r[0],i);case 2:return n.call(this,r[0],r[1],i)}var o=zi(t+1);for(e=-1;++e<t;)o[e]=r[e];return o[t]=i,n.apply(this,o)}}function du(n){if("function"!=typeof n)throw new Ji(q);return function(t){return n.apply(this,t)}}function mu(n,t,r){var e=!0,u=!0;if("function"!=typeof n)throw new Ji(q);return r===!1?e=!1:Wu(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),hu(n,t,{leading:e,maxWait:+t,trailing:u})}function wu(n,t){return t=null==t?Ri:t,Tr(t,$,j,[n],[])}function xu(n,t,r,e){return t&&"boolean"!=typeof t&&Qr(n,t,r)?t=!1:"function"==typeof t&&(e=r,r=t,t=!1),"function"==typeof r?bt(n,t,or(r,e,1)):bt(n,t)}function bu(n,t,r){return"function"==typeof t?bt(n,!0,or(t,r,1)):bt(n,!0)}function Au(n,t){return n>t}function ju(n,t){return n>=t}function ku(n){return g(n)&&Zr(n)&&no.call(n,"callee")&&!co.call(n,"callee")}function Iu(n){return n===!0||n===!1||g(n)&&ro.call(n)==V}function Ru(n){return g(n)&&ro.call(n)==Y}function Ou(n){return!!n&&1===n.nodeType&&g(n)&&!zu(n)}function Eu(n){return null==n?!0:Zr(n)&&(Cf(n)||qu(n)||ku(n)||g(n)&&Su(n.splice))?!n.length:!Df(n).length}function Cu(n,t,r,e){r="function"==typeof r?or(r,e,3):j;var u=r?r(n,t):j;return u===j?Nt(n,t,r):!!u}function $u(n){return g(n)&&"string"==typeof n.message&&ro.call(n)==G}function Uu(n){return"number"==typeof n&&wo(n)}function Su(n){return Wu(n)&&ro.call(n)==J}function Wu(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function Fu(n,t,r,e){return r="function"==typeof r?or(r,e,3):j,Lt(n,Pr(t),r)}function Nu(n){return Bu(n)&&n!=+n}function Tu(n){return null==n?!1:Su(n)?uo.test(Qi.call(n)):g(n)&&Wn.test(n)}function Lu(n){return null===n}function Bu(n){return"number"==typeof n||g(n)&&ro.call(n)==Z}function zu(n){var t;if(!g(n)||ro.call(n)!=H||ku(n)||!no.call(n,"constructor")&&(t=n.constructor,"function"==typeof t&&!(t instanceof t)))return!1;var r;return $t(n,function(n,t){r=t}),r===j||no.call(n,r)}function Du(n){return Wu(n)&&ro.call(n)==Q}function qu(n){return"string"==typeof n||g(n)&&ro.call(n)==tn}function Mu(n){return g(n)&&re(n.length)&&!!qn[ro.call(n)]}function Pu(n){return n===j}function Ku(n,t){return t>n}function Vu(n,t){return t>=n}function Yu(n){var t=n?qo(n):0;return re(t)?t?tt(n):[]:ii(n)}function Gu(n){return wt(n,ni(n))}function Ju(n,t,r){var e=Fo(n);return r&&Qr(n,t,r)&&(t=j),t?dt(e,t):e}function Xu(n){return Wt(n,ni(n))}function Zu(n,t,r){var e=null==n?j:Ft(n,pe(t),t+"");return e===j?r:e}function Hu(n,t){if(null==n)return!1;var r=no.call(n,t);if(!r&&!ne(t)){if(t=pe(t),n=1==t.length?n:Ft(n,Jt(t,0,-1)),null==n)return!1;t=Ie(t),r=no.call(n,t)}return r||re(n.length)&&Hr(t,n.length)&&(Cf(n)||ku(n))}function Qu(n,t,r){r&&Qr(n,t,r)&&(t=j);for(var e=-1,u=Df(n),i=u.length,o={};++e<i;){var f=u[e],a=n[f];t?no.call(o,a)?o[a].push(f):o[a]=[f]:o[a]=f}return o}function ni(n){if(null==n)return[];Wu(n)||(n=Vi(n));var t=n.length;t=t&&re(t)&&(Cf(n)||ku(n))&&t||0;for(var r=n.constructor,e=-1,u="function"==typeof r&&r.prototype===n,i=zi(t),o=t>0;++e<t;)i[e]=e+"";for(var f in n)o&&Hr(f,t)||"constructor"==f&&(u||!no.call(n,f))||i.push(f);return i}function ti(n){n=se(n);for(var t=-1,r=Df(n),e=r.length,u=zi(e);++t<e;){var i=r[t];u[t]=[i,n[i]]}return u}function ri(n,t,r){var e=null==n?j:n[t];return e===j&&(null==n||ne(t,n)||(t=pe(t),n=1==t.length?n:Ft(n,Jt(t,0,-1)),e=null==n?j:n[Ie(t)]),e=e===j?r:e),Su(e)?e.call(n):e}function ei(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||ne(t,n)?[e]:pe(t);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var a=t[u];Wu(f)&&(u==o?f[a]=r:null==f[a]&&(f[a]=Hr(t[u+1])?[]:{})),f=f[a]}return n}function ui(n,t,r,e){var u=Cf(n)||Mu(n);if(t=Dr(t,e,4),null==r)if(u||Wu(n)){var i=n.constructor;r=u?Cf(n)?new i:[]:Fo(Su(i)?i.prototype:j)}else r={};return(u?ut:Ut)(n,function(n,e,u){return t(r,n,e,u)}),r}function ii(n){return tr(n,Df(n))}function oi(n){return tr(n,ni(n))}function fi(n,t,r){return t=+t||0,r===j?(r=t,t=0):r=+r||0,n>=Ao(t,r)&&n<bo(t,r)}function ai(n,t,r){r&&Qr(n,t,r)&&(t=r=j);var e=null==n,u=null==t;if(null==r&&(u&&"boolean"==typeof n?(r=n,n=1):"boolean"==typeof t&&(r=t,u=!0)),e&&u&&(t=1,u=!1),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1){var i=Io();return Ao(n+i*(t-n+fo("1e-"+((i+"").length-1))),t)}return Yt(n,t)}function ci(n){return n=o(n),n&&n.charAt(0).toUpperCase()+n.slice(1);
}function li(n){return n=o(n),n&&n.replace(Nn,s).replace(En,"")}function si(n,t,r){n=o(n),t+="";var e=n.length;return r=r===j?e:Ao(0>r?0:+r||0,e),r-=t.length,r>=0&&n.indexOf(t,r)==r}function pi(n){return n=o(n),n&&wn.test(n)?n.replace(dn,p):n}function hi(n){return n=o(n),n&&On.test(n)?n.replace(Rn,h):n||"(?:)"}function vi(n,t,r){n=o(n),t=+t;var e=n.length;if(e>=t||!wo(t))return n;var u=(t-e)/2,i=yo(u),f=_o(u);return r=Sr("",f,r),r.slice(0,i)+n+r}function _i(n,t,r){return(r?Qr(n,t,r):null==t)?t=0:t&&(t=+t),n=mi(n),ko(n,t||(Sn.test(n)?16:10))}function gi(n,t){var r="";if(n=o(n),t=+t,1>t||!n||!wo(t))return r;do t%2&&(r+=n),t=yo(t/2),n+=n;while(t);return r}function yi(n,t,r){return n=o(n),r=null==r?0:Ao(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r}function di(n,t,e){var u=r.templateSettings;e&&Qr(n,t,e)&&(t=e=j),n=o(n),t=yt(dt({},e||t),u,gt);var i,f,a=yt(dt({},t.imports),u.imports,gt),c=Df(a),l=tr(a,c),s=0,p=t.interpolate||Tn,h="__p += '",_=Yi((t.escape||Tn).source+"|"+p.source+"|"+(p===An?$n:Tn).source+"|"+(t.evaluate||Tn).source+"|$","g"),g="//# sourceURL="+("sourceURL"in t?t.sourceURL:"lodash.templateSources["+ ++Dn+"]")+"\n";n.replace(_,function(t,r,e,u,o,a){return e||(e=u),h+=n.slice(s,a).replace(Ln,v),r&&(i=!0,h+="' +\n__e("+r+") +\n'"),o&&(f=!0,h+="';\n"+o+";\n__p += '"),e&&(h+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),s=a+t.length,t}),h+="';\n";var y=t.variable;y||(h="with (obj) {\n"+h+"\n}\n"),h=(f?h.replace(vn,""):h).replace(_n,"$1").replace(gn,"$1;"),h="function("+(y||"obj")+") {\n"+(y?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(f?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var d=Hf(function(){return Mi(c,g+"return "+h).apply(j,l)});if(d.source=h,$u(d))throw d;return d}function mi(n,t,r){var e=n;return(n=o(n))?(r?Qr(e,t,r):null==t)?n.slice(w(n),x(n)+1):(t+="",n.slice(f(n,t),a(n,t)+1)):n}function wi(n,t,r){var e=n;return n=o(n),n?(r?Qr(e,t,r):null==t)?n.slice(w(n)):n.slice(f(n,t+"")):n}function xi(n,t,r){var e=n;return n=o(n),n?(r?Qr(e,t,r):null==t)?n.slice(0,x(n)+1):n.slice(0,a(n,t+"")+1):n}function bi(n,t,r){r&&Qr(n,t,r)&&(t=j);var e=F,u=N;if(null!=t)if(Wu(t)){var i="separator"in t?t.separator:i;e="length"in t?+t.length||0:e,u="omission"in t?o(t.omission):u}else e=+t||0;if(n=o(n),e>=n.length)return n;var f=e-u.length;if(1>f)return u;var a=n.slice(0,f);if(null==i)return a+u;if(Du(i)){if(n.slice(f).search(i)){var c,l,s=n.slice(0,f);for(i.global||(i=Yi(i.source,(Un.exec(i)||"")+"g")),i.lastIndex=0;c=i.exec(s);)l=c.index;a=a.slice(0,null==l?f:l)}}else if(n.indexOf(i,f)!=f){var p=a.lastIndexOf(i);p>-1&&(a=a.slice(0,p))}return a+u}function Ai(n){return n=o(n),n&&mn.test(n)?n.replace(yn,b):n}function ji(n,t,r){return r&&Qr(n,t,r)&&(t=j),n=o(n),n.match(t||Bn)||[]}function ki(n,t,r){return r&&Qr(n,t,r)&&(t=j),g(n)?Oi(n):xt(n,t)}function Ii(n){return function(){return n}}function Ri(n){return n}function Oi(n){return zt(bt(n,!0))}function Ei(n,t){return Dt(n,bt(t,!0))}function Ci(n,t,r){if(null==r){var e=Wu(t),u=e?Df(t):j,i=u&&u.length?Wt(t,u):j;(i?i.length:e)||(i=!1,r=t,t=n,n=this)}i||(i=Wt(t,Df(t)));var o=!0,f=-1,a=Su(n),c=i.length;r===!1?o=!1:Wu(r)&&"chain"in r&&(o=r.chain);for(;++f<c;){var l=i[f],s=t[l];n[l]=s,a&&(n.prototype[l]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__),u=e.__actions__=tt(this.__actions__);return u.push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,lt([this.value()],arguments))}}(s))}return n}function $i(){return rt._=eo,this}function Ui(){}function Si(n){return ne(n)?Pt(n):Kt(n)}function Wi(n){return function(t){return Ft(n,pe(t),t+"")}}function Fi(n,t,r){r&&Qr(n,t,r)&&(t=r=j),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;for(var e=-1,u=bo(_o((t-n)/(r||1)),0),i=zi(u);++e<u;)i[e]=n,n+=r;return i}function Ni(n,t,r){if(n=yo(n),1>n||!wo(n))return[];var e=-1,u=zi(Ao(n,Eo));for(t=or(t,r,1);++e<n;)Eo>e?u[e]=t(e):t(e);return u}function Ti(n){var t=++to;return o(n)+t}function Li(n,t){return(+n||0)+(+t||0)}function Bi(n,t,r){return r&&Qr(n,t,r)&&(t=j),t=Dr(t,r,3),1==t.length?vt(Cf(n)?n:le(n),t):Qt(n,t)}t=t?et.defaults(rt.Object(),t,et.pick(rt,zn)):rt;var zi=t.Array,Di=t.Date,qi=t.Error,Mi=t.Function,Pi=t.Math,Ki=t.Number,Vi=t.Object,Yi=t.RegExp,Gi=t.String,Ji=t.TypeError,Xi=zi.prototype,Zi=Vi.prototype,Hi=Gi.prototype,Qi=Mi.prototype.toString,no=Zi.hasOwnProperty,to=0,ro=Zi.toString,eo=rt._,uo=Yi("^"+Qi.call(no).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),io=t.ArrayBuffer,oo=t.clearTimeout,fo=t.parseFloat,ao=Pi.pow,co=Zi.propertyIsEnumerable,lo=Kr(t,"Set"),so=t.setTimeout,po=Xi.splice,ho=t.Uint8Array,vo=Kr(t,"WeakMap"),_o=Pi.ceil,go=Kr(Vi,"create"),yo=Pi.floor,mo=Kr(zi,"isArray"),wo=t.isFinite,xo=Kr(Vi,"keys"),bo=Pi.max,Ao=Pi.min,jo=Kr(Di,"now"),ko=t.parseInt,Io=Pi.random,Ro=Ki.NEGATIVE_INFINITY,Oo=Ki.POSITIVE_INFINITY,Eo=4294967295,Co=Eo-1,$o=Eo>>>1,Uo=9007199254740991,So=vo&&new vo,Wo={};r.support={};r.templateSettings={escape:xn,evaluate:bn,interpolate:An,variable:"",imports:{_:r}};var Fo=function(){function n(){}return function(t){if(Wu(t)){n.prototype=t;var r=new n;n.prototype=j}return r||{}}}(),No=pr(Ut),To=pr(St,!0),Lo=hr(),Bo=hr(!0),zo=So?function(n,t){return So.set(n,t),n}:Ri,Do=So?function(n){return So.get(n)}:Ui,qo=Pt("length"),Mo=function(){var n=0,t=0;return function(r,e){var u=gf(),i=L-(u-t);if(t=u,i>0){if(++n>=T)return r}else n=0;return zo(r,e)}}(),Po=yu(function(n,t){return g(n)&&Zr(n)?jt(n,Ct(t,!1,!0)):[]}),Ko=br(),Vo=br(!0),Yo=yu(function(n){for(var t=n.length,r=t,e=zi(s),i=Mr(),o=i==u,f=[];r--;){var a=n[r]=Zr(a=n[r])?a:[];e[r]=o&&a.length>=120?_r(r&&a):null}var c=n[0],l=-1,s=c?c.length:0,p=e[0];n:for(;++l<s;)if(a=c[l],(p?Hn(p,a):i(f,a,0))<0){for(var r=t;--r;){var h=e[r];if((h?Hn(h,a):i(n[r],a,0))<0)continue n}p&&p.push(a),f.push(a)}return f}),Go=yu(function(t,r){r=Ct(r);var e=mt(t,r);return Vt(t,r.sort(n)),e}),Jo=Nr(),Xo=Nr(!0),Zo=yu(function(n){return nr(Ct(n,!1,!0))}),Ho=yu(function(n,t){return Zr(n)?jt(n,t):[]}),Qo=yu(Te),nf=yu(function(n){var t=n.length,r=t>2?n[t-2]:j,e=t>1?n[t-1]:j;return t>2&&"function"==typeof r?t-=2:(r=t>1&&"function"==typeof e?(--t,e):j,e=j),n.length=t,Le(n,r,e)}),tf=yu(function(n){return n=Ct(n),this.thru(function(t){return nt(Cf(t)?t:[se(t)],n)})}),rf=yu(function(n,t){return mt(n,Ct(t))}),ef=lr(function(n,t,r){no.call(n,r)?++n[r]:n[r]=1}),uf=xr(No),of=xr(To,!0),ff=kr(ut,No),af=kr(it,To),cf=lr(function(n,t,r){no.call(n,r)?n[r].push(t):n[r]=[t]}),lf=lr(function(n,t,r){n[r]=t}),sf=yu(function(n,t,r){var e=-1,u="function"==typeof t,i=ne(t),o=Zr(n)?zi(n.length):[];return No(n,function(n){var f=u?t:i&&null!=n?n[t]:j;o[++e]=f?f.apply(n,r):Xr(n,t,r)}),o}),pf=lr(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),hf=$r(st,No),vf=$r(pt,To),_f=yu(function(n,t){if(null==n)return[];var r=t[2];return r&&Qr(t[0],t[1],r)&&(t.length=1),Ht(n,Ct(t),[])}),gf=jo||function(){return(new Di).getTime()},yf=yu(function(n,t,r){var e=I;if(r.length){var u=d(r,yf.placeholder);e|=$}return Tr(n,e,t,r,u)}),df=yu(function(n,t){t=t.length?Ct(t):Xu(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=Tr(n[u],I,n)}return n}),mf=yu(function(n,t,r){var e=I|R;if(r.length){var u=d(r,mf.placeholder);e|=$}return Tr(t,e,n,r,u)}),wf=dr(E),xf=dr(C),bf=yu(function(n,t){return At(n,1,t)}),Af=yu(function(n,t,r){return At(n,t,r)}),jf=jr(),kf=jr(!0),If=yu(function(n,t){if(t=Ct(t),"function"!=typeof n||!ot(t,i))throw new Ji(q);var r=t.length;return yu(function(e){for(var u=Ao(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),Rf=Cr($),Of=Cr(U),Ef=yu(function(n,t){return Tr(n,W,j,j,j,Ct(t))}),Cf=mo||function(n){return g(n)&&re(n.length)&&ro.call(n)==K},$f=sr(qt),Uf=sr(function(n,t,r){return r?yt(n,t,r):dt(n,t)}),Sf=mr(Uf,_t),Wf=mr($f,ie),Ff=Ar(Ut),Nf=Ar(St),Tf=Ir(Lo),Lf=Ir(Bo),Bf=Rr(Ut),zf=Rr(St),Df=xo?function(n){var t=null==n?j:n.constructor;return"function"==typeof t&&t.prototype===n||"function"!=typeof n&&Zr(n)?ce(n):Wu(n)?xo(n):[]}:ce,qf=Or(!0),Mf=Or(),Pf=yu(function(n,t){if(null==n)return{};if("function"!=typeof t[0]){var t=ct(Ct(t),Gi);return oe(n,jt(ni(n),t))}var r=or(t[0],t[1],3);return fe(n,function(n,t,e){return!r(n,t,e)})}),Kf=yu(function(n,t){return null==n?{}:"function"==typeof t[0]?fe(n,or(t[0],t[1],3)):oe(n,Ct(t))}),Vf=gr(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t)}),Yf=gr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Gf=Er(),Jf=Er(!0),Xf=gr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Zf=gr(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Hf=yu(function(n,t){try{return n.apply(j,t)}catch(r){return $u(r)?r:new qi(r)}}),Qf=yu(function(n,t){return function(r){return Xr(r,n,t)}}),na=yu(function(n,t){return function(r){return Xr(n,r,t)}}),ta=Fr("ceil"),ra=Fr("floor"),ea=wr(Au,Ro),ua=wr(Ku,Oo),ia=Fr("round");return r.prototype=y.prototype,X.prototype=Fo(y.prototype),X.prototype.constructor=X,nn.prototype=Fo(y.prototype),nn.prototype.constructor=nn,Vn.prototype["delete"]=Yn,Vn.prototype.get=Gn,Vn.prototype.has=Jn,Vn.prototype.set=Xn,Zn.prototype.push=Qn,vu.Cache=Vn,r.after=lu,r.ary=su,r.assign=Uf,r.at=rf,r.before=pu,r.bind=yf,r.bindAll=df,r.bindKey=mf,r.callback=ki,r.chain=De,r.chunk=ve,r.compact=_e,r.constant=Ii,r.countBy=ef,r.create=Ju,r.curry=wf,r.curryRight=xf,r.debounce=hu,r.defaults=Sf,r.defaultsDeep=Wf,r.defer=bf,r.delay=Af,r.difference=Po,r.drop=ge,r.dropRight=ye,r.dropRightWhile=de,r.dropWhile=me,r.fill=we,r.filter=Ze,r.flatten=be,r.flattenDeep=Ae,r.flow=jf,r.flowRight=kf,r.forEach=ff,r.forEachRight=af,r.forIn=Tf,r.forInRight=Lf,r.forOwn=Bf,r.forOwnRight=zf,r.functions=Xu,r.groupBy=cf,r.indexBy=lf,r.initial=ke,r.intersection=Yo,r.invert=Qu,r.invoke=sf,r.keys=Df,r.keysIn=ni,r.map=nu,r.mapKeys=qf,r.mapValues=Mf,r.matches=Oi,r.matchesProperty=Ei,r.memoize=vu,r.merge=$f,r.method=Qf,r.methodOf=na,r.mixin=Ci,r.modArgs=If,r.negate=_u,r.omit=Pf,r.once=gu,r.pairs=ti,r.partial=Rf,r.partialRight=Of,r.partition=pf,r.pick=Kf,r.pluck=tu,r.property=Si,r.propertyOf=Wi,r.pull=Oe,r.pullAt=Go,r.range=Fi,r.rearg=Ef,r.reject=ru,r.remove=Ee,r.rest=Ce,r.restParam=yu,r.set=ei,r.shuffle=uu,r.slice=$e,r.sortBy=fu,r.sortByAll=_f,r.sortByOrder=au,r.spread=du,r.take=Ue,r.takeRight=Se,r.takeRightWhile=We,r.takeWhile=Fe,r.tap=qe,r.throttle=mu,r.thru=Me,r.times=Ni,r.toArray=Yu,r.toPlainObject=Gu,r.transform=ui,r.union=Zo,r.uniq=Ne,r.unzip=Te,r.unzipWith=Le,r.values=ii,r.valuesIn=oi,r.where=cu,r.without=Ho,r.wrap=wu,r.xor=Be,r.zip=Qo,r.zipObject=ze,r.zipWith=nf,r.backflow=kf,r.collect=nu,r.compose=kf,r.each=ff,r.eachRight=af,r.extend=Uf,r.iteratee=ki,r.methods=Xu,r.object=ze,r.select=Ze,r.tail=Ce,r.unique=Ne,Ci(r,r),r.add=Li,r.attempt=Hf,r.camelCase=Vf,r.capitalize=ci,r.ceil=ta,r.clone=xu,r.cloneDeep=bu,r.deburr=li,r.endsWith=si,r.escape=pi,r.escapeRegExp=hi,r.every=Xe,r.find=uf,r.findIndex=Ko,r.findKey=Ff,r.findLast=of,r.findLastIndex=Vo,r.findLastKey=Nf,r.findWhere=He,r.first=xe,r.floor=ra,r.get=Zu,r.gt=Au,r.gte=ju,r.has=Hu,r.identity=Ri,r.includes=Qe,r.indexOf=je,r.inRange=fi,r.isArguments=ku,r.isArray=Cf,r.isBoolean=Iu,r.isDate=Ru,r.isElement=Ou,r.isEmpty=Eu,r.isEqual=Cu,r.isError=$u,r.isFinite=Uu,r.isFunction=Su,r.isMatch=Fu,r.isNaN=Nu,r.isNative=Tu,r.isNull=Lu,r.isNumber=Bu,r.isObject=Wu,r.isPlainObject=zu,r.isRegExp=Du,r.isString=qu,r.isTypedArray=Mu,r.isUndefined=Pu,r.kebabCase=Yf,r.last=Ie,r.lastIndexOf=Re,r.lt=Ku,r.lte=Vu,r.max=ea,r.min=ua,r.noConflict=$i,r.noop=Ui,r.now=gf,r.pad=vi,r.padLeft=Gf,r.padRight=Jf,r.parseInt=_i,r.random=ai,r.reduce=hf,r.reduceRight=vf,r.repeat=gi,r.result=ri,r.round=ia,r.runInContext=A,r.size=iu,r.snakeCase=Xf,r.some=ou,r.sortedIndex=Jo,r.sortedLastIndex=Xo,r.startCase=Zf,r.startsWith=yi,r.sum=Bi,r.template=di,r.trim=mi,r.trimLeft=wi,r.trimRight=xi,r.trunc=bi,r.unescape=Ai,r.uniqueId=Ti,r.words=ji,r.all=Xe,r.any=ou,r.contains=Qe,r.eq=Cu,r.detect=uf,r.foldl=hf,r.foldr=vf,r.head=xe,r.include=Qe,r.inject=hf,Ci(r,function(){var n={};return Ut(r,function(t,e){r.prototype[e]||(n[e]=t)}),n}(),!1),r.sample=eu,r.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return eu(t,n)}):eu(this.value())},r.VERSION=k,ut(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){r[n].placeholder=r}),ut(["drop","take"],function(n,t){nn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new nn(this);r=null==r?1:bo(yo(r)||0,0);var u=this.clone();return e?u.__takeCount__=Ao(u.__takeCount__,r):u.__views__.push({size:r,type:n+(u.__dir__<0?"Right":"")}),u},nn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),ut(["filter","map","takeWhile"],function(n,t){var r=t+1,e=r!=D;nn.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:Dr(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),ut(["first","last"],function(n,t){var r="take"+(t?"Right":"");nn.prototype[n]=function(){return this[r](1).value()[0]}}),ut(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");nn.prototype[n]=function(){return this.__filtered__?new nn(this):this[r](1)}}),ut(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?zt:Si;nn.prototype[n]=function(n){return this[r](e(n))}}),nn.prototype.compact=function(){return this.filter(Ri)},nn.prototype.reject=function(n,t){return n=Dr(n,t,1),this.filter(function(t){return!n(t)})},nn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(n>0||0>t)?new nn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==j&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},nn.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},nn.prototype.toArray=function(){return this.take(Oo)},Ut(nn.prototype,function(n,t){var e=/^(?:filter|map|reject)|While$/.test(t),u=/^(?:first|last)$/.test(t),i=r[u?"take"+("last"==t?"Right":""):t];i&&(r.prototype[t]=function(){var t=u?[1]:arguments,r=this.__chain__,o=this.__wrapped__,f=!!this.__actions__.length,a=o instanceof nn,c=t[0],l=a||Cf(o);l&&e&&"function"==typeof c&&1!=c.length&&(a=l=!1);var s=function(n){return u&&r?i(n,1)[0]:i.apply(j,lt([n],t))},p={func:Me,args:[s],thisArg:j},h=a&&!f;if(u&&!r)return h?(o=o.clone(),o.__actions__.push(p),n.call(o)):i.call(j,this.value())[0];if(!u&&l){o=h?o:new nn(this);var v=n.apply(o,t);return v.__actions__.push(p),new X(v,r)}return this.thru(s)})}),ut(["join","pop","push","replace","shift","sort","splice","split","unshift"],function(n){var t=(/^(?:replace|split)$/.test(n)?Hi:Xi)[n],e=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",u=/^(?:join|pop|replace|shift)$/.test(n);r.prototype[n]=function(){var n=arguments;return u&&!this.__chain__?t.apply(this.value(),n):this[e](function(r){return t.apply(r,n)})}}),Ut(nn.prototype,function(n,t){var e=r[t];if(e){var u=e.name,i=Wo[u]||(Wo[u]=[]);i.push({name:t,func:e})}}),Wo[Ur(j,R).name]=[{name:"wrapper",func:j}],nn.prototype.clone=rn,nn.prototype.reverse=Pn,nn.prototype.value=Kn,r.prototype.chain=Pe,r.prototype.commit=Ke,r.prototype.concat=tf,r.prototype.plant=Ve,r.prototype.reverse=Ye,r.prototype.toString=Ge,r.prototype.run=r.prototype.toJSON=r.prototype.valueOf=r.prototype.value=Je,r.prototype.collect=r.prototype.map,r.prototype.head=r.prototype.first,r.prototype.select=r.prototype.filter,r.prototype.tail=r.prototype.rest,r}var j,k="3.10.1",I=1,R=2,O=4,E=8,C=16,$=32,U=64,S=128,W=256,F=30,N="...",T=150,L=16,B=200,z=1,D=2,q="Expected a function",M="__lodash_placeholder__",P="[object Arguments]",K="[object Array]",V="[object Boolean]",Y="[object Date]",G="[object Error]",J="[object Function]",X="[object Map]",Z="[object Number]",H="[object Object]",Q="[object RegExp]",nn="[object Set]",tn="[object String]",rn="[object WeakMap]",en="[object ArrayBuffer]",un="[object Float32Array]",on="[object Float64Array]",fn="[object Int8Array]",an="[object Int16Array]",cn="[object Int32Array]",ln="[object Uint8Array]",sn="[object Uint8ClampedArray]",pn="[object Uint16Array]",hn="[object Uint32Array]",vn=/\b__p \+= '';/g,_n=/\b(__p \+=) '' \+/g,gn=/(__e\(.*?\)|\b__t\)) \+\n'';/g,yn=/&(?:amp|lt|gt|quot|#39|#96);/g,dn=/[&<>"'`]/g,mn=RegExp(yn.source),wn=RegExp(dn.source),xn=/<%-([\s\S]+?)%>/g,bn=/<%([\s\S]+?)%>/g,An=/<%=([\s\S]+?)%>/g,jn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,kn=/^\w*$/,In=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,Rn=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,On=RegExp(Rn.source),En=/[\u0300-\u036f\ufe20-\ufe23]/g,Cn=/\\(\\)?/g,$n=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Un=/\w*$/,Sn=/^0[xX]/,Wn=/^\[object .+?Constructor\]$/,Fn=/^\d+$/,Nn=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Tn=/($^)/,Ln=/['\n\r\u2028\u2029\\]/g,Bn=function(){var n="[A-Z\\xc0-\\xd6\\xd8-\\xde]",t="[a-z\\xdf-\\xf6\\xf8-\\xff]+";return RegExp(n+"+(?="+n+t+")|"+n+"?"+t+"|"+n+"+|[0-9]+","g")}(),zn=["Array","ArrayBuffer","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Math","Number","Object","RegExp","Set","String","_","clearTimeout","isFinite","parseFloat","parseInt","setTimeout","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap"],Dn=-1,qn={};qn[un]=qn[on]=qn[fn]=qn[an]=qn[cn]=qn[ln]=qn[sn]=qn[pn]=qn[hn]=!0,qn[P]=qn[K]=qn[en]=qn[V]=qn[Y]=qn[G]=qn[J]=qn[X]=qn[Z]=qn[H]=qn[Q]=qn[nn]=qn[tn]=qn[rn]=!1;var Mn={};Mn[P]=Mn[K]=Mn[en]=Mn[V]=Mn[Y]=Mn[un]=Mn[on]=Mn[fn]=Mn[an]=Mn[cn]=Mn[Z]=Mn[H]=Mn[Q]=Mn[tn]=Mn[ln]=Mn[sn]=Mn[pn]=Mn[hn]=!0,Mn[G]=Mn[J]=Mn[X]=Mn[nn]=Mn[rn]=!1;var Pn={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss"},Kn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Vn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},Yn={"function":!0,object:!0},Gn={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Jn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Xn=Yn[typeof t]&&t&&!t.nodeType&&t,Zn=Yn[typeof r]&&r&&!r.nodeType&&r,Hn=Xn&&Zn&&"object"==typeof global&&global&&global.Object&&global,Qn=Yn[typeof self]&&self&&self.Object&&self,nt=Yn[typeof window]&&window&&window.Object&&window,tt=Zn&&Zn.exports===Xn&&Xn,rt=Hn||nt!==(this&&this.window)&&nt||Qn||this,et=A();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(rt._=et,define(function(){return et})):Xn&&Zn?tt?(Zn.exports=et)._=et:Xn._=et:rt._=et}).call(this)});
$rmod.main("/xregexp@3.1.0","src/index");
$rmod.dep("/$/codemirror-atom-modes/$/first-mate/$/onigurumajs","xregexp","3.1.0");
$rmod.def("/xregexp@3.1.0/src/xregexp",function(e,n,t,r,a){"use strict";function l(e){var n=!0;try{new RegExp("",e)}catch(t){n=!1}return n}function o(e,n,t,r,a){var l;if(e[N]={captureNames:n},a)return e;if(e.__proto__)e.__proto__=k.prototype;else for(l in k.prototype)e[l]=k.prototype[l];return e[N].source=t,e[N].flags=r?r.split("").sort().join(""):r,e}function i(e){return R.replace.call(e,/([\s\S])(?=[\s\S]*\1)/g,"")}function s(e,n){if(!k.isRegExp(e))throw new TypeError("Type RegExp expected");var t=e[N]||{},r=u(e),a="",l="",s=null,c=null;return n=n||{},n.removeG&&(l+="g"),n.removeY&&(l+="y"),l&&(r=R.replace.call(r,new RegExp("["+l+"]+","g"),"")),n.addG&&(a+="g"),n.addY&&(a+="y"),a&&(r=i(r+a)),n.isInternalOnly||(void 0!==t.source&&(s=t.source),null!=t.flags&&(c=a?i(t.flags+a):t.flags)),e=o(new RegExp(e.source,r),p(e)?t.captureNames.slice(0):null,s,c,n.isInternalOnly)}function c(e){return parseInt(e,16)}function u(e){return z?e.flags:R.exec.call(/\/([a-z]*)$/i,RegExp.prototype.toString.call(e))[1]}function p(e){return!(!e[N]||!e[N].captureNames)}function f(e){return parseInt(e,10).toString(16)}function g(e,n){var t,r=e.length;for(t=0;r>t;++t)if(e[t]===n)return t;return-1}function d(e,n){return B.call(e)==="[object "+n+"]"}function h(e,n,t){return R.test.call(t.indexOf("x")>-1?/^(?:\s+|#.*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/:/^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/,e.slice(n))}function x(e){for(;e.length<4;)e="0"+e;return e}function y(e,n){var t;if(i(n)!==n)throw new SyntaxError("Invalid duplicate regex flag "+n);for(e=R.replace.call(e,/^\(\?([\w$]+)\)/,function(e,t){if(R.test.call(/[gy]/,t))throw new SyntaxError("Cannot use flag g or y in mode modifier "+e);return n=i(n+t),""}),t=0;t<n.length;++t)if(!U[n.charAt(t)])throw new SyntaxError("Unknown regex flag "+n.charAt(t));return{pattern:e,flags:n}}function v(e){var n={};return d(e,"String")?(k.forEach(e,/[^\s,]+/,function(e){n[e]=!0}),n):e}function w(e){if(!/^[\w$]$/.test(e))throw new Error("Flag must be a single character A-Za-z0-9_$");U[e]=!0}function m(e,n,t,r,a){for(var l,o,i=T.length,s=e.charAt(t),c=null;i--;)if(o=T[i],!(o.leadChar&&o.leadChar!==s||o.scope!==r&&"all"!==o.scope||o.flag&&-1===n.indexOf(o.flag))&&(l=k.exec(e,o.regex,t,"sticky"))){c={matchLength:l[0].length,output:o.handler.call(a,l,r,n),reparse:o.reparse};break}return c}function E(e){C.astral=e}function S(e){RegExp.prototype.exec=(e?b:R).exec,RegExp.prototype.test=(e?b:R).test,String.prototype.match=(e?b:R).match,String.prototype.replace=(e?b:R).replace,String.prototype.split=(e?b:R).split,C.natives=e}function I(e){if(null==e)throw new TypeError("Cannot convert null or undefined to object");return e}function k(e,n){var t,r,a,l,i,c={hasNamedCapture:!1,captureNames:[]},u=$,p="",f=0;if(k.isRegExp(e)){if(void 0!==n)throw new TypeError("Cannot supply flags when copying a RegExp");return s(e)}if(e=void 0===e?"":String(e),n=void 0===n?"":String(n),k.isInstalled("astral")&&-1===n.indexOf("A")&&(n+="A"),F[e]||(F[e]={}),!F[e][n]){for(t=y(e,n),l=t.pattern,i=t.flags;f<l.length;){do t=m(l,i,f,u,c),t&&t.reparse&&(l=l.slice(0,f)+t.output+l.slice(f+t.matchLength));while(t&&t.reparse);t?(p+=t.output,f+=t.matchLength||1):(r=k.exec(l,O[u],f,"sticky")[0],p+=r,f+=r.length,"["===r&&u===$?u=_:"]"===r&&u===_&&(u=$))}F[e][n]={pattern:p,flags:R.replace.call(i,/[^gimuy]+/g,""),captures:c.hasNamedCapture?c.captureNames:null}}return a=F[e][n],o(new RegExp(a.pattern,a.flags),a.captures,e,n)}var N="xregexp",C={astral:!1,natives:!1},R={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},b={},A={},F={},T=[],$="default",_="class",O={"default":/\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,"class":/\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/},G=/\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g,Y=void 0===R.exec.call(/()??/,"")[1],z=void 0!==/x/.flags,B={}.toString,j=l("u"),Z=l("y"),U={g:!0,i:!0,m:!0,u:j,y:Z};k.prototype=new RegExp,k.version="3.1.0",k._hasNativeFlag=l,k.addToken=function(e,n,t){t=t||{};var r,a=t.optionalFlags;if(t.flag&&w(t.flag),a)for(a=R.split.call(a,""),r=0;r<a.length;++r)w(a[r]);T.push({regex:s(e,{addG:!0,addY:Z,isInternalOnly:!0}),handler:n,scope:t.scope||$,flag:t.flag,reparse:t.reparse,leadChar:t.leadChar}),k.cache.flush("patterns")},k.cache=function(e,n){return A[e]||(A[e]={}),A[e][n]||(A[e][n]=k(e,n))},k.cache.flush=function(e){"patterns"===e?F={}:A={}},k.escape=function(e){return R.replace.call(I(e),/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},k.exec=function(e,n,t,r){var a,l,o="g",i=!1;return i=Z&&!!(r||n.sticky&&r!==!1),i&&(o+="y"),n[N]=n[N]||{},l=n[N][o]||(n[N][o]=s(n,{addG:!0,addY:i,removeY:r===!1,isInternalOnly:!0})),l.lastIndex=t=t||0,a=b.exec.call(l,e),r&&a&&a.index!==t&&(a=null),n.global&&(n.lastIndex=a?l.lastIndex:0),a},k.forEach=function(e,n,t){for(var r,a=0,l=-1;r=k.exec(e,n,a);)t(r,++l,e,n),a=r.index+(r[0].length||1)},k.globalize=function(e){return s(e,{addG:!0})},k.install=function(e){e=v(e),!C.astral&&e.astral&&E(!0),!C.natives&&e.natives&&S(!0)},k.isInstalled=function(e){return!!C[e]},k.isRegExp=function(e){return"[object RegExp]"===B.call(e)},k.match=function(e,n,t){var r,a,l=n.global&&"one"!==t||"all"===t,o=(l?"g":"")+(n.sticky?"y":"")||"noGY";return n[N]=n[N]||{},a=n[N][o]||(n[N][o]=s(n,{addG:!!l,removeG:"one"===t,isInternalOnly:!0})),r=R.match.call(I(e),a),n.global&&(n.lastIndex="one"===t&&r?r.index+r[0].length:0),l?r||[]:r&&r[0]},k.matchChain=function(e,n){return function t(e,r){var a,l=n[r].regex?n[r]:{regex:n[r]},o=[],i=function(e){if(l.backref){if(!(e.hasOwnProperty(l.backref)||+l.backref<e.length))throw new ReferenceError("Backreference to undefined group: "+l.backref);o.push(e[l.backref]||"")}else o.push(e[0])};for(a=0;a<e.length;++a)k.forEach(e[a],l.regex,i);return r!==n.length-1&&o.length?t(o,r+1):o}([e],0)},k.replace=function(e,n,t,r){var a,l=k.isRegExp(n),o=n.global&&"one"!==r||"all"===r,i=(o?"g":"")+(n.sticky?"y":"")||"noGY",c=n;return l?(n[N]=n[N]||{},c=n[N][i]||(n[N][i]=s(n,{addG:!!o,removeG:"one"===r,isInternalOnly:!0}))):o&&(c=new RegExp(k.escape(String(n)),"g")),a=b.replace.call(I(e),c,t),l&&n.global&&(n.lastIndex=0),a},k.replaceEach=function(e,n){var t,r;for(t=0;t<n.length;++t)r=n[t],e=k.replace(e,r[0],r[1],r[2]);return e},k.split=function(e,n,t){return b.split.call(I(e),n,t)},k.test=function(e,n,t,r){return!!k.exec(e,n,t,r)},k.uninstall=function(e){e=v(e),C.astral&&e.astral&&E(!1),C.natives&&e.natives&&S(!1)},k.union=function(e,n){var t,r,a,l,o=/(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g,i=[],s=0,c=function(e,n,a){var l=r[s-t];if(n){if(++s,l)return"(?<"+l+">"}else if(a)return"\\"+(+a+t);return e};if(!d(e,"Array")||!e.length)throw new TypeError("Must provide a nonempty array of patterns to merge");for(l=0;l<e.length;++l)a=e[l],k.isRegExp(a)?(t=s,r=a[N]&&a[N].captureNames||[],i.push(R.replace.call(k(a.source).source,o,c))):i.push(k.escape(a));return k(i.join("|"),n)},b.exec=function(e){var n,t,r,a=this.lastIndex,l=R.exec.apply(this,arguments);if(l){if(!Y&&l.length>1&&g(l,"")>-1&&(t=s(this,{removeG:!0,isInternalOnly:!0}),R.replace.call(String(e).slice(l.index),t,function(){var e,n=arguments.length;for(e=1;n-2>e;++e)void 0===arguments[e]&&(l[e]=void 0)})),this[N]&&this[N].captureNames)for(r=1;r<l.length;++r)n=this[N].captureNames[r-1],n&&(l[n]=l[r]);this.global&&!l[0].length&&this.lastIndex>l.index&&(this.lastIndex=l.index)}return this.global||(this.lastIndex=a),l},b.test=function(e){return!!b.exec.call(this,e)},b.match=function(e){var n;if(k.isRegExp(e)){if(e.global)return n=R.match.apply(this,arguments),e.lastIndex=0,n}else e=new RegExp(e);return b.exec.call(e,I(this))},b.replace=function(e,n){var t,r,a,l=k.isRegExp(e);return l?(e[N]&&(r=e[N].captureNames),t=e.lastIndex):e+="",a=d(n,"Function")?R.replace.call(String(this),e,function(){var t,a=arguments;if(r)for(a[0]=new String(a[0]),t=0;t<r.length;++t)r[t]&&(a[0][r[t]]=a[t+1]);return l&&e.global&&(e.lastIndex=a[a.length-2]+a[0].length),n.apply(void 0,a)}):R.replace.call(null==this?this:String(this),e,function(){var e=arguments;return R.replace.call(String(n),G,function(n,t,a){var l;if(t){if(l=+t,l<=e.length-3)return e[l]||"";if(l=r?g(r,t):-1,0>l)throw new SyntaxError("Backreference to undefined group "+n);return e[l+1]||""}if("$"===a)return"$";if("&"===a||0===+a)return e[0];if("`"===a)return e[e.length-1].slice(0,e[e.length-2]);if("'"===a)return e[e.length-1].slice(e[e.length-2]+e[0].length);if(a=+a,!isNaN(a)){if(a>e.length-3)throw new SyntaxError("Backreference to undefined group "+n);return e[a]||""}throw new SyntaxError("Invalid token "+n)})}),l&&(e.global?e.lastIndex=0:e.lastIndex=t),a},b.split=function(e,n){if(!k.isRegExp(e))return R.split.apply(this,arguments);var t,r=String(this),a=[],l=e.lastIndex,o=0;return n=(void 0===n?-1:n)>>>0,k.forEach(r,e,function(e){e.index+e[0].length>o&&(a.push(r.slice(o,e.index)),e.length>1&&e.index<r.length&&Array.prototype.push.apply(a,e.slice(1)),t=e[0].length,o=e.index+t)}),o===r.length?(!R.test.call(e,"")||t)&&a.push(""):a.push(r.slice(o)),e.lastIndex=l,a.length>n?a.slice(0,n):a},k.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,function(e,n){if("B"===e[1]&&n===$)return e[0];throw new SyntaxError("Invalid escape "+e[0])},{scope:"all",leadChar:"\\"}),k.addToken(/\\u{([\dA-Fa-f]+)}/,function(e,n,t){var r=c(e[1]);if(r>1114111)throw new SyntaxError("Invalid Unicode code point "+e[0]);if(65535>=r)return"\\u"+x(f(r));if(j&&t.indexOf("u")>-1)return e[0];throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u")},{scope:"all",leadChar:"\\"}),k.addToken(/\[(\^?)]/,function(e){return e[1]?"[\\s\\S]":"\\b\\B"},{leadChar:"["}),k.addToken(/\(\?#[^)]*\)/,function(e,n,t){return h(e.input,e.index+e[0].length,t)?"":"(?:)"},{leadChar:"("}),k.addToken(/\s+|#.*/,function(e,n,t){return h(e.input,e.index+e[0].length,t)?"":"(?:)"},{flag:"x"}),k.addToken(/\./,function(){return"[\\s\\S]"},{flag:"s",leadChar:"."}),k.addToken(/\\k<([\w$]+)>/,function(e){var n=isNaN(e[1])?g(this.captureNames,e[1])+1:+e[1],t=e.index+e[0].length;if(!n||n>this.captureNames.length)throw new SyntaxError("Backreference to undefined group "+e[0]);return"\\"+n+(t===e.input.length||isNaN(e.input.charAt(t))?"":"(?:)")},{leadChar:"\\"}),k.addToken(/\\(\d+)/,function(e,n){if(!(n===$&&/^[1-9]/.test(e[1])&&+e[1]<=this.captureNames.length)&&"0"!==e[1])throw new SyntaxError("Cannot use octal escape or backreference to undefined group "+e[0]);return e[0]},{scope:"all",leadChar:"\\"}),k.addToken(/\(\?P?<([\w$]+)>/,function(e){if(!isNaN(e[1]))throw new SyntaxError("Cannot use integer as capture name "+e[0]);if("length"===e[1]||"__proto__"===e[1])throw new SyntaxError("Cannot use reserved word as capture name "+e[0]);if(g(this.captureNames,e[1])>-1)throw new SyntaxError("Cannot use same name for multiple groups "+e[0]);return this.captureNames.push(e[1]),this.hasNamedCapture=!0,"("},{leadChar:"("}),k.addToken(/\((?!\?)/,function(e,n,t){return t.indexOf("n")>-1?"(?:":(this.captureNames.push(null),"(")},{optionalFlags:"n",leadChar:"("}),t.exports=k});
$rmod.def("/xregexp@3.1.0/src/addons/build",function(e,r,n,t,u){n.exports=function(e){"use strict";function r(e){var r=/^(?:\(\?:\))*\^/,n=/\$(?:\(\?:\))*$/;return r.test(e)&&n.test(e)&&n.test(e.replace(/\\[\s\S]/g,""))?e.replace(r,"").replace(n,""):e}function n(r){return e.isRegExp(r)?r[t]&&r[t].captureNames?r:e(r.source):e(r)}var t="xregexp",u=/(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g,s=e.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/,u],"g");e.build=function(a,c,i){var f,o,p,d,l=/^\(\?([\w$]+)\)/.exec(a),m={},x=0,g=0,w=[0];l&&(i=i||"",l[1].replace(/./g,function(e){i+=i.indexOf(e)>-1?"":e}));for(d in c)c.hasOwnProperty(d)&&(p=n(c[d]),m[d]={pattern:r(p.source),names:p[t].captureNames||[]});return a=n(a),o=a[t].captureNames||[],a=a.source.replace(s,function(e,r,n,t,s){var a,c,i,p=r||n;if(p){if(!m.hasOwnProperty(p))throw new ReferenceError("Undefined property "+e);return r?(a=o[g],w[++g]=++x,c="(?<"+(a||p)+">"):c="(?:",f=x,c+m[p].pattern.replace(u,function(e,r,n){if(r){if(a=m[p].names[x-f],++x,a)return"(?<"+a+">"}else if(n)return i=+n-1,m[p].names[i]?"\\k<"+m[p].names[i]+">":"\\"+(+n+f);return e})+")"}if(t){if(a=o[g],w[++g]=++x,a)return"(?<"+a+">"}else if(s)return i=+s-1,o[i]?"\\k<"+o[i]+">":"\\"+w[+s];return e}),e(a,i)}}});
$rmod.def("/xregexp@3.1.0/src/addons/matchrecursive",function(e,n,r,i,s){r.exports=function(e){"use strict";function n(e,n,r,i){return{name:e,value:n,start:r,end:i}}e.matchRecursive=function(r,i,s,c,t){c=c||"",t=t||{};var a,u,l,h,o,f=c.indexOf("g")>-1,p=c.indexOf("y")>-1,d=c.replace(/y/g,""),x=t.escapeChar,g=t.valueNames,m=[],v=0,w=0,b=0,k=0;if(i=e(i,d),s=e(s,d),x){if(x.length>1)throw new Error("Cannot use more than one escape character");x=e.escape(x),o=new RegExp("(?:"+x+"[\\S\\s]|(?:(?!"+e.union([i,s]).source+")[^"+x+"])+)+",c.replace(/[^imu]+/g,""))}for(;;){if(x&&(b+=(e.exec(r,o,b,"sticky")||[""])[0].length),l=e.exec(r,i,b),h=e.exec(r,s,b),l&&h&&(l.index<=h.index?h=null:l=null),l||h)w=(l||h).index,b=w+(l||h)[0].length;else if(!v)break;if(p&&!v&&w>k)break;if(l)v||(a=w,u=b),++v;else{if(!h||!v)throw new Error("Unbalanced delimiter found in string");if(!--v&&(g?(g[0]&&a>k&&m.push(n(g[0],r.slice(k,a),k,a)),g[1]&&m.push(n(g[1],r.slice(a,u),a,u)),g[2]&&m.push(n(g[2],r.slice(u,w),u,w)),g[3]&&m.push(n(g[3],r.slice(w,b),w,b))):m.push(r.slice(u,w)),k=b,!f))break}w===b&&++b}return f&&!p&&g&&g[0]&&r.length>k&&m.push(n(g[0],r.slice(k),k,r.length)),m}}});
$rmod.def("/xregexp@3.1.0/src/addons/unicode-base",function(r,n,e,t,a){e.exports=function(r){"use strict";function n(r){return r.replace(/[- _]+/g,"").toLowerCase()}function e(r){for(;r.length<4;)r="0"+r;return r}function t(r){return parseInt(r,16)}function a(r){return parseInt(r,10).toString(16)}function o(r){var n=/^\\[xu](.+)/.exec(r);return n?t(n[1]):r.charCodeAt("\\"===r.charAt(0)?1:0)}function i(n){var t,i="",s=-1;return r.forEach(n,/(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/,function(r){t=o(r[1]),t>s+1&&(i+="\\u"+e(a(s+1)),t>s+2&&(i+="-\\u"+e(a(t-1)))),s=o(r[2]||r[1])}),65535>s&&(i+="\\u"+e(a(s+1)),65534>s&&(i+="-\\uFFFF")),i}function s(r){var n="b!";return f[r][n]||(f[r][n]=i(f[r].bmp))}function c(r,n){var e=f[r],t="";return e.bmp&&!e.isBmpLast&&(t="["+e.bmp+"]"+(e.astral?"|":"")),e.astral&&(t+=e.astral),e.isBmpLast&&e.bmp&&(t+=(e.astral?"|":"")+"["+e.bmp+"]"),n?"(?:(?!"+t+")(?:[�-�][�-�]|[\x00-￿]))":"(?:"+t+")"}function u(r,n){var e=n?"a!":"a=";return f[r][e]||(f[r][e]=c(r,n))}var f={};r.addToken(/\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/,function(r,e,t){var a="Invalid double negation ",o="Unknown Unicode token ",i="Unicode token missing data ",c="Astral mode required for Unicode token ",d="Astral mode does not support Unicode tokens within character classes",p="P"===r[1]||!!r[2],l=t.indexOf("A")>-1,h=n(r[4]||r[3]),m=f[h];if("P"===r[1]&&r[2])throw new SyntaxError(a+r[0]);if(!f.hasOwnProperty(h))throw new SyntaxError(o+r[0]);if(m.inverseOf){if(h=n(m.inverseOf),!f.hasOwnProperty(h))throw new ReferenceError(i+r[0]+" -> "+m.inverseOf);m=f[h],p=!p}if(!m.bmp&&!l)throw new SyntaxError(c+r[0]);if(l){if("class"===e)throw new SyntaxError(d);return u(h,p)}return"class"===e?p?s(h):m.bmp:(p?"[^":"[")+m.bmp+"]"},{scope:"all",optionalFlags:"A",leadChar:"\\"}),r.addUnicodeData=function(e){var t,a,o="Unicode token requires name",i="Unicode token has no character data ";for(a=0;a<e.length;++a){if(t=e[a],!t.name)throw new Error(o);if(!(t.inverseOf||t.bmp||t.astral))throw new Error(i+t.name);f[n(t.name)]=t,t.alias&&(f[n(t.alias)]=t)}r.cache.flush("patterns")}}});
$rmod.def("/xregexp@3.1.0/src/addons/unicode-blocks",function(a,n,e,m,t){e.exports=function(a){"use strict";if(!a.addUnicodeData)throw new ReferenceError("Unicode Base must be loaded before Unicode Blocks");a.addUnicodeData([{name:"InAegean_Numbers",astral:"�[�-�]"},{name:"InAhom",astral:"�[�-�]"},{name:"InAlchemical_Symbols",astral:"�[�-�]"},{name:"InAlphabetic_Presentation_Forms",bmp:"ﬀ-ﭏ"},{name:"InAnatolian_Hieroglyphs",astral:"�[�-�]"},{name:"InAncient_Greek_Musical_Notation",astral:"�[�-�]"},{name:"InAncient_Greek_Numbers",astral:"�[�-�]"},{name:"InAncient_Symbols",astral:"�[�-�]"},{name:"InArabic",bmp:"؀-ۿ"},{name:"InArabic_Extended_A",bmp:"ࢠ-ࣿ"},{name:"InArabic_Mathematical_Alphabetic_Symbols",astral:"�[�-�]"},{name:"InArabic_Presentation_Forms_A",bmp:"ﭐ-﷿"},{name:"InArabic_Presentation_Forms_B",bmp:"ﹰ-\ufeff"},{name:"InArabic_Supplement",bmp:"ݐ-ݿ"},{name:"InArmenian",bmp:"԰-֏"},{name:"InArrows",bmp:"←-⇿"},{name:"InAvestan",astral:"�[�-�]"},{name:"InBalinese",bmp:"ᬀ-᭿"},{name:"InBamum",bmp:"ꚠ-꛿"},{name:"InBamum_Supplement",astral:"�[�-�]"},{name:"InBasic_Latin",bmp:"\x00-"},{name:"InBassa_Vah",astral:"�[�-�]"},{name:"InBatak",bmp:"ᯀ-᯿"},{name:"InBengali",bmp:"ঀ-৿"},{name:"InBlock_Elements",bmp:"▀-▟"},{name:"InBopomofo",bmp:"㄀-ㄯ"},{name:"InBopomofo_Extended",bmp:"ㆠ-ㆿ"},{name:"InBox_Drawing",bmp:"─-╿"},{name:"InBrahmi",astral:"�[�-�]"},{name:"InBraille_Patterns",bmp:"⠀-⣿"},{name:"InBuginese",bmp:"ᨀ-᨟"},{name:"InBuhid",bmp:"ᝀ-᝟"},{name:"InByzantine_Musical_Symbols",astral:"�[�-�]"},{name:"InCJK_Compatibility",bmp:"㌀-㏿"},{name:"InCJK_Compatibility_Forms",bmp:"︰-﹏"},{name:"InCJK_Compatibility_Ideographs",bmp:"豈-﫿"},{name:"InCJK_Compatibility_Ideographs_Supplement",astral:"�[�-�]"},{name:"InCJK_Radicals_Supplement",bmp:"⺀-⻿"},{name:"InCJK_Strokes",bmp:"㇀-㇯"},{name:"InCJK_Symbols_and_Punctuation",bmp:"　-〿"},{name:"InCJK_Unified_Ideographs",bmp:"一-鿿"},{name:"InCJK_Unified_Ideographs_Extension_A",bmp:"㐀-䶿"},{name:"InCJK_Unified_Ideographs_Extension_B",astral:"[�-�][�-�]|�[�-�]"},{name:"InCJK_Unified_Ideographs_Extension_C",astral:"�[�-�]|[�-�][�-�]|�[�-�]"},{name:"InCJK_Unified_Ideographs_Extension_D",astral:"�[�-�]|�[�-�]"},{name:"InCJK_Unified_Ideographs_Extension_E",astral:"[�-�][�-�]|�[�-�]|�[�-�]"},{name:"InCarian",astral:"�[�-�]"},{name:"InCaucasian_Albanian",astral:"�[�-�]"},{name:"InChakma",astral:"�[�-�]"},{name:"InCham",bmp:"ꨀ-꩟"},{name:"InCherokee",bmp:"Ꭰ-᏿"},{name:"InCherokee_Supplement",bmp:"ꭰ-ꮿ"},{name:"InCombining_Diacritical_Marks",bmp:"̀-ͯ"},{name:"InCombining_Diacritical_Marks_Extended",bmp:"᪰-᫿"},{name:"InCombining_Diacritical_Marks_Supplement",bmp:"᷀-᷿"},{name:"InCombining_Diacritical_Marks_for_Symbols",bmp:"⃐-⃿"},{name:"InCombining_Half_Marks",bmp:"︠-︯"},{name:"InCommon_Indic_Number_Forms",bmp:"꠰-꠿"},{name:"InControl_Pictures",bmp:"␀-␿"},{name:"InCoptic",bmp:"Ⲁ-⳿"},{name:"InCoptic_Epact_Numbers",astral:"�[�-�]"},{name:"InCounting_Rod_Numerals",astral:"�[�-�]"},{name:"InCuneiform",astral:"�[�-�]"},{name:"InCuneiform_Numbers_and_Punctuation",astral:"�[�-�]"},{name:"InCurrency_Symbols",bmp:"₠-⃏"},{name:"InCypriot_Syllabary",astral:"�[�-�]"},{name:"InCyrillic",bmp:"Ѐ-ӿ"},{name:"InCyrillic_Extended_A",bmp:"ⷠ-ⷿ"},{name:"InCyrillic_Extended_B",bmp:"Ꙁ-ꚟ"},{name:"InCyrillic_Supplement",bmp:"Ԁ-ԯ"},{name:"InDeseret",astral:"�[�-�]"},{name:"InDevanagari",bmp:"ऀ-ॿ"},{name:"InDevanagari_Extended",bmp:"꣠-ꣿ"},{name:"InDingbats",bmp:"✀-➿"},{name:"InDomino_Tiles",astral:"�[�-�]"},{name:"InDuployan",astral:"�[�-�]"},{name:"InEarly_Dynastic_Cuneiform",astral:"�[�-�]"},{name:"InEgyptian_Hieroglyphs",astral:"�[�-�]|�[�-�]"},{name:"InElbasan",astral:"�[�-�]"},{name:"InEmoticons",astral:"�[�-�]"},{name:"InEnclosed_Alphanumeric_Supplement",astral:"�[�-�]"},{name:"InEnclosed_Alphanumerics",bmp:"①-⓿"},{name:"InEnclosed_CJK_Letters_and_Months",bmp:"㈀-㋿"},{name:"InEnclosed_Ideographic_Supplement",astral:"�[�-�]"},{name:"InEthiopic",bmp:"ሀ-፿"},{name:"InEthiopic_Extended",bmp:"ⶀ-⷟"},{name:"InEthiopic_Extended_A",bmp:"꬀-꬯"},{name:"InEthiopic_Supplement",bmp:"ᎀ-᎟"},{name:"InGeneral_Punctuation",bmp:" -⁯"},{name:"InGeometric_Shapes",bmp:"■-◿"},{name:"InGeometric_Shapes_Extended",astral:"�[�-�]"},{name:"InGeorgian",bmp:"Ⴀ-ჿ"},{name:"InGeorgian_Supplement",bmp:"ⴀ-⴯"},{name:"InGlagolitic",bmp:"Ⰰ-ⱟ"},{name:"InGothic",astral:"�[�-�]"},{name:"InGrantha",astral:"�[�-�]"},{name:"InGreek_Extended",bmp:"ἀ-῿"},{name:"InGreek_and_Coptic",bmp:"Ͱ-Ͽ"},{name:"InGujarati",bmp:"઀-૿"},{name:"InGurmukhi",bmp:"਀-੿"},{name:"InHalfwidth_and_Fullwidth_Forms",bmp:"＀-￯"},{name:"InHangul_Compatibility_Jamo",bmp:"㄰-㆏"},{name:"InHangul_Jamo",bmp:"ᄀ-ᇿ"},{name:"InHangul_Jamo_Extended_A",bmp:"ꥠ-꥿"},{name:"InHangul_Jamo_Extended_B",bmp:"ힰ-퟿"},{name:"InHangul_Syllables",bmp:"가-힯"},{name:"InHanunoo",bmp:"ᜠ-᜿"},{name:"InHatran",astral:"�[�-�]"},{name:"InHebrew",bmp:"֐-׿"},{name:"InHigh_Private_Use_Surrogates",bmp:"�-�"},{name:"InHigh_Surrogates",bmp:"�-�"},{name:"InHiragana",bmp:"぀-ゟ"},{name:"InIPA_Extensions",bmp:"ɐ-ʯ"},{name:"InIdeographic_Description_Characters",bmp:"⿰-⿿"},{name:"InImperial_Aramaic",astral:"�[�-�]"},{name:"InInscriptional_Pahlavi",astral:"�[�-�]"},{name:"InInscriptional_Parthian",astral:"�[�-�]"},{name:"InJavanese",bmp:"ꦀ-꧟"},{name:"InKaithi",astral:"�[�-�]"},{name:"InKana_Supplement",astral:"�[�-�]"},{name:"InKanbun",bmp:"㆐-㆟"},{name:"InKangxi_Radicals",bmp:"⼀-⿟"},{name:"InKannada",bmp:"ಀ-೿"},{name:"InKatakana",bmp:"゠-ヿ"},{name:"InKatakana_Phonetic_Extensions",bmp:"ㇰ-ㇿ"},{name:"InKayah_Li",bmp:"꤀-꤯"},{name:"InKharoshthi",astral:"�[�-�]"},{name:"InKhmer",bmp:"ក-៿"},{name:"InKhmer_Symbols",bmp:"᧠-᧿"},{name:"InKhojki",astral:"�[�-�]"},{name:"InKhudawadi",astral:"�[�-�]"},{name:"InLao",bmp:"຀-໿"},{name:"InLatin_Extended_Additional",bmp:"Ḁ-ỿ"},{name:"InLatin_Extended_A",bmp:"Ā-ſ"},{name:"InLatin_Extended_B",bmp:"ƀ-ɏ"},{name:"InLatin_Extended_C",bmp:"Ⱡ-Ɀ"},{name:"InLatin_Extended_D",bmp:"꜠-ꟿ"},{name:"InLatin_Extended_E",bmp:"ꬰ-꭯"},{name:"InLatin_1_Supplement",bmp:"-ÿ"},{name:"InLepcha",bmp:"ᰀ-ᱏ"},{name:"InLetterlike_Symbols",bmp:"℀-⅏"},{name:"InLimbu",bmp:"ᤀ-᥏"},{name:"InLinear_A",astral:"�[�-�]"},{name:"InLinear_B_Ideograms",astral:"�[�-�]"},{name:"InLinear_B_Syllabary",astral:"�[�-�]"},{name:"InLisu",bmp:"ꓐ-꓿"},{name:"InLow_Surrogates",bmp:"�-�"},{name:"InLycian",astral:"�[�-�]"},{name:"InLydian",astral:"�[�-�]"},{name:"InMahajani",astral:"�[�-�]"},{name:"InMahjong_Tiles",astral:"�[�-�]"},{name:"InMalayalam",bmp:"ഀ-ൿ"},{name:"InMandaic",bmp:"ࡀ-࡟"},{name:"InManichaean",astral:"�[�-�]"},{name:"InMathematical_Alphanumeric_Symbols",astral:"�[�-�]"},{name:"InMathematical_Operators",bmp:"∀-⋿"},{name:"InMeetei_Mayek",bmp:"ꯀ-꯿"},{name:"InMeetei_Mayek_Extensions",bmp:"ꫠ-꫿"},{name:"InMende_Kikakui",astral:"�[�-�]"},{name:"InMeroitic_Cursive",astral:"�[�-�]"},{name:"InMeroitic_Hieroglyphs",astral:"�[�-�]"},{name:"InMiao",astral:"�[�-�]"},{name:"InMiscellaneous_Mathematical_Symbols_A",bmp:"⟀-⟯"},{name:"InMiscellaneous_Mathematical_Symbols_B",bmp:"⦀-⧿"},{name:"InMiscellaneous_Symbols",bmp:"☀-⛿"},{name:"InMiscellaneous_Symbols_and_Arrows",bmp:"⬀-⯿"},{name:"InMiscellaneous_Symbols_and_Pictographs",astral:"�[�-�]|�[�-�]"},{name:"InMiscellaneous_Technical",bmp:"⌀-⏿"},{name:"InModi",astral:"�[�-�]"},{name:"InModifier_Tone_Letters",bmp:"꜀-ꜟ"},{name:"InMongolian",bmp:"᠀-᢯"},{name:"InMro",astral:"�[�-�]"},{name:"InMultani",astral:"�[�-�]"},{name:"InMusical_Symbols",astral:"�[�-�]"},{name:"InMyanmar",bmp:"က-႟"},{name:"InMyanmar_Extended_A",bmp:"ꩠ-ꩿ"},{name:"InMyanmar_Extended_B",bmp:"ꧠ-꧿"},{name:"InNKo",bmp:"߀-߿"},{name:"InNabataean",astral:"�[�-�]"},{name:"InNew_Tai_Lue",bmp:"ᦀ-᧟"},{name:"InNumber_Forms",bmp:"⅐-↏"},{name:"InOgham",bmp:" -᚟"},{name:"InOl_Chiki",bmp:"᱐-᱿"},{name:"InOld_Hungarian",astral:"�[�-�]"},{name:"InOld_Italic",astral:"�[�-�]"},{name:"InOld_North_Arabian",astral:"�[�-�]"},{name:"InOld_Permic",astral:"�[�-�]"},{name:"InOld_Persian",astral:"�[�-�]"},{name:"InOld_South_Arabian",astral:"�[�-�]"},{name:"InOld_Turkic",astral:"�[�-�]"},{name:"InOptical_Character_Recognition",bmp:"⑀-⑟"},{name:"InOriya",bmp:"଀-୿"},{name:"InOrnamental_Dingbats",astral:"�[�-�]"},{name:"InOsmanya",astral:"�[�-�]"},{name:"InPahawh_Hmong",astral:"�[�-�]"},{name:"InPalmyrene",astral:"�[�-�]"},{name:"InPau_Cin_Hau",astral:"�[�-�]"},{name:"InPhags_pa",bmp:"ꡀ-꡿"},{name:"InPhaistos_Disc",astral:"�[�-�]"},{name:"InPhoenician",astral:"�[�-�]"},{name:"InPhonetic_Extensions",bmp:"ᴀ-ᵿ"},{name:"InPhonetic_Extensions_Supplement",bmp:"ᶀ-ᶿ"},{name:"InPlaying_Cards",astral:"�[�-�]"},{name:"InPrivate_Use_Area",bmp:"-"},{name:"InPsalter_Pahlavi",astral:"�[�-�]"},{name:"InRejang",bmp:"ꤰ-꥟"},{name:"InRumi_Numeral_Symbols",astral:"�[�-�]"},{name:"InRunic",bmp:"ᚠ-᛿"},{name:"InSamaritan",bmp:"ࠀ-࠿"},{name:"InSaurashtra",bmp:"ꢀ-꣟"},{name:"InSharada",astral:"�[�-�]"},{name:"InShavian",astral:"�[�-�]"},{name:"InShorthand_Format_Controls",astral:"�[�-�]"},{name:"InSiddham",astral:"�[�-�]"},{name:"InSinhala",bmp:"඀-෿"},{name:"InSinhala_Archaic_Numbers",astral:"�[�-�]"},{name:"InSmall_Form_Variants",bmp:"﹐-﹯"},{name:"InSora_Sompeng",astral:"�[�-�]"},{name:"InSpacing_Modifier_Letters",bmp:"ʰ-˿"},{name:"InSpecials",bmp:"￰-￿"},{name:"InSundanese",bmp:"ᮀ-ᮿ"},{name:"InSundanese_Supplement",bmp:"᳀-᳏"},{name:"InSuperscripts_and_Subscripts",bmp:"⁰-₟"},{name:"InSupplemental_Arrows_A",bmp:"⟰-⟿"},{name:"InSupplemental_Arrows_B",bmp:"⤀-⥿"},{name:"InSupplemental_Arrows_C",astral:"�[�-�]"},{name:"InSupplemental_Mathematical_Operators",bmp:"⨀-⫿"},{name:"InSupplemental_Punctuation",bmp:"⸀-⹿"},{name:"InSupplemental_Symbols_and_Pictographs",astral:"�[�-�]"},{name:"InSupplementary_Private_Use_Area_A",astral:"[�-�][�-�]"},{name:"InSupplementary_Private_Use_Area_B",astral:"[�-�][�-�]"},{name:"InSutton_SignWriting",astral:"�[�-�]"},{name:"InSyloti_Nagri",bmp:"ꠀ-꠯"},{name:"InSyriac",bmp:"܀-ݏ"},{name:"InTagalog",bmp:"ᜀ-ᜟ"},{name:"InTagbanwa",bmp:"ᝠ-᝿"},{name:"InTags",astral:"�[�-�]"},{name:"InTai_Le",bmp:"ᥐ-᥿"},{name:"InTai_Tham",bmp:"ᨠ-᪯"},{name:"InTai_Viet",bmp:"ꪀ-꫟"},{name:"InTai_Xuan_Jing_Symbols",astral:"�[�-�]"},{name:"InTakri",astral:"�[�-�]"},{name:"InTamil",bmp:"஀-௿"},{name:"InTelugu",bmp:"ఀ-౿"},{name:"InThaana",bmp:"ހ-޿"},{name:"InThai",bmp:"฀-๿"},{name:"InTibetan",bmp:"ༀ-࿿"},{name:"InTifinagh",bmp:"ⴰ-⵿"},{name:"InTirhuta",astral:"�[�-�]"},{name:"InTransport_and_Map_Symbols",astral:"�[�-�]"},{name:"InUgaritic",astral:"�[�-�]"},{name:"InUnified_Canadian_Aboriginal_Syllabics",bmp:"᐀-ᙿ"},{name:"InUnified_Canadian_Aboriginal_Syllabics_Extended",bmp:"ᢰ-᣿"},{name:"InVai",bmp:"ꔀ-꘿"},{name:"InVariation_Selectors",bmp:"︀-️"},{name:"InVariation_Selectors_Supplement",astral:"�[�-�]"},{name:"InVedic_Extensions",bmp:"᳐-᳿"},{name:"InVertical_Forms",bmp:"︐-︟"},{name:"InWarang_Citi",astral:"�[�-�]"},{name:"InYi_Radicals",bmp:"꒐-꓏"},{name:"InYi_Syllables",bmp:"ꀀ-꒏"},{name:"InYijing_Hexagram_Symbols",bmp:"䷀-䷿"}])}});
$rmod.def("/xregexp@3.1.0/src/addons/unicode-categories",function(a,e,m,s,n){m.exports=function(a){"use strict";if(!a.addUnicodeData)throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");a.addUnicodeData([{name:"C",alias:"Other",isBmpLast:!0,bmp:"\x00--­͸͹΀-΃΋΍΢԰՗՘ՠֈ֋֌֐׈-׏׫-ׯ׵-؅؜؝۝܎܏݋݌޲-޿߻-߿࠮࠯࠿࡜࡝࡟-࢟ࢵ-࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥ৼ-਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੶-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸ૺ-଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୕୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿ఄ఍఑఩఺-఼౅౉౎-౔౗౛-౟౤౥౰-౷ಀ಄಍಑಩಴಺಻೅೉೎-೔೗-ೝ೟೤೥೰ೳ-ഀഄ഍഑഻഼൅൉൏-ൖ൘-൞൤൥൶-൸඀ඁ඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅ຆຉ຋ຌຎ-ຓຘຠ຤຦ຨຩຬ຺຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿ᜍ᜕-ᜟ᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠎᠏᠚-᠟ᡸ-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯ᪿ-᫿ᭌ-᭏᭽-᭿᯴-᯻᰸-᰺᱊-᱌ᲀ-Ჿ᳈-᳏᳷ᳺ-᳿᷶-᷻἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿​-‏‪-‮⁠-⁯⁲⁳₏₝-₟₿-⃏⃱-⃿↌-↏⏻-⏿␧-␿⑋-⑟⭴⭵⮖⮗⮺-⮼⯉⯒-⯫⯰-⯿Ⱟⱟ⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹃-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄ㄮ-㄰㆏ㆻ-ㆿ㇤-㇯㈟㋿䶶-䶿鿖-鿿꒍-꒏꓇-꓏꘬-꘿꛸-꛿ꞮꞯꞸ-ꟶ꠬-꠯꠺-꠿꡸-꡿ꣅ-꣍꣚-꣟ꣾꣿ꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯ꭦ-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯂-﯒﵀-﵏﶐﶑﷈-﷯﷾﷿︚-︟﹓﹧﹬-﹯﹵﻽-＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￻￾￿",astral:"�[�-����-��-��-��-��-�]|�[�-���-�]|�[�-��-������-��-���-��-��-��-��-��-�]|�[�-���-��-����-��-����-��-�]|�[��-��-�]|�[�-��-��-��-�]|�[��]|�[���-��-��-��-��-�]|�[���-��-��-��-��-��-��-�]|�[�������-��-��-��-��-��-��-��-��-��-��-��-��-��-���-��-�]|�[�-�]|�[�-�����������-��-�����������������������-����-��-�]|�[�-�]|�[�-��-�]|�[�-��-���-��-��-���-��-�����-���-������-��-��-������������������-��-����-��-�]|�[���-�]|�[�-�]|�[�-�]|[����-��-��-����-��-���-��-��-�][�-�]|�[�-��-��-��-�]|�[�-��-��-��-��-�]|�[���������������������-������]|�[�-��-��-����-��-��-��-��-��-��-��-�]|�[�����-�����-��-���-��-��-��-��-�����-����-��-��-��-��-��-��-��-����-��-��-��-�]|�[�-�]|�[�-��-��-����-�]|�[�-�]|�[�-�]|�[�-��-��-��-��-��-��-��-�]|�[�-�]"},{name:"Cc",alias:"Control",bmp:"\x00--"},{name:"Cf",alias:"Format",bmp:"­؀-؅؜۝܏᠎​-‏‪-‮⁠-⁤⁦-⁯\ufeff￹-￻",astral:"�[��-�]|�[�-�]|�[�-�]|𑂽"},{name:"Cn",alias:"Unassigned",bmp:"͸͹΀-΃΋΍΢԰՗՘ՠֈ֋֌֐׈-׏׫-ׯ׵-׿؝܎݋݌޲-޿߻-߿࠮࠯࠿࡜࡝࡟-࢟ࢵ-࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥ৼ-਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੶-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸ૺ-଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୕୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿ఄ఍఑఩఺-఼౅౉౎-౔౗౛-౟౤౥౰-౷ಀ಄಍಑಩಴಺಻೅೉೎-೔೗-ೝ೟೤೥೰ೳ-ഀഄ഍഑഻഼൅൉൏-ൖ൘-൞൤൥൶-൸඀ඁ඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅ຆຉ຋ຌຎ-ຓຘຠ຤຦ຨຩຬ຺຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿ᜍ᜕-ᜟ᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠏᠚-᠟ᡸ-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯ᪿ-᫿ᭌ-᭏᭽-᭿᯴-᯻᰸-᰺᱊-᱌ᲀ-Ჿ᳈-᳏᳷ᳺ-᳿᷶-᷻἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿⁥⁲⁳₏₝-₟₿-⃏⃱-⃿↌-↏⏻-⏿␧-␿⑋-⑟⭴⭵⮖⮗⮺-⮼⯉⯒-⯫⯰-⯿Ⱟⱟ⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹃-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄ㄮ-㄰㆏ㆻ-ㆿ㇤-㇯㈟㋿䶶-䶿鿖-鿿꒍-꒏꓇-꓏꘬-꘿꛸-꛿ꞮꞯꞸ-ꟶ꠬-꠯꠺-꠿꡸-꡿ꣅ-꣍꣚-꣟ꣾꣿ꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯ꭦ-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-퟿﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯂-﯒﵀-﵏﶐﶑﷈-﷯﷾﷿︚-︟﹓﹧﹬-﹯﹵﻽﻾＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￸￾￿",astral:"�[��-��-��-�]|�[�-����-��-��-��-�]|�[�-��-������-��-���-��-��-��-��-��-�]|�[�-���-��-����-��-����-��-�]|�[��-��-�]|�[�-��-��-��-�]|�[��]|�[���-��-��-��-��-�]|�[���-��-��-��-��-��-��-�]|�[�������-��-��-��-��-��-��-��-��-��-��-��-��-��-���-��-�]|�[�-�]|�[�-�����������-��-�����������������������-����-��-�]|[��][��]|�[�-�]|�[�-��-��-����-�]|�[���-�]|�[�-�]|�[�-�]|[����-��-��-����-��-���-��-��-�][�-�]|�[�-��-��-��-�]|�[�-��-��-��-��-�]|�[���������������������-������]|�[�-���-�]|�[�-��-��-����-��-��-��-��-��-��-��-�]|�[�����-�����-��-���-��-��-��-��-�����-����-��-��-��-��-��-��-��-����-��-��-��-�]|�[�-�]|�[�-��-��-��-��-���-��-�����-���-������-��-��-������������������-��-����-��-�]|�[�-�]|�[�-�]|�[�-��-��-��-��-��-��-��-�]|�[�-�]"},{name:"Co",alias:"Private_Use",bmp:"-",astral:"[�-��-�][�-�]|[��][�-�]"},{name:"Cs",alias:"Surrogate",bmp:"�-�"},{name:"L",alias:"Letter",bmp:"A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞭꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",astral:"�[�-��-�]|�[�-��-�]|�[�-��-�]|�[�-��-��-�]|�[�-�]|�[�-��-��-��-��-��-�]|�[�-��-��-����-��-��-��-��-��-��-��-��-��-��-��-�]|�[�-�]|�[�-�]|�[�-���-�]|[��-��-��-�][�-�]|�[�-�����-��-��-���-��-�]|�[�-��-��-��-��-��-��-�]|�[�-�]|�[�-���-�����-��-��-��-����-��-��-�����-��-��-��-��-��-��-��-��-��-��-�]|�[�-��-�������-��-���-��-��-��-��-��-��-��-���-��-��-��-��-��-��-��-��-��-��-��-��-�]|�[�-��-��-��-��-���-��-����-��-��-���-��-��-��-��-����-��-����-����-�]|�[�-�]|�[�-��-������-��-��������-�������������-��-��-��-���-��-��-��-��-�]|�[�-���-�]|�[�-�]|�[�-��-��-��-�]|�[��]|�[�-�]"},{name:"Ll",alias:"Lowercase_Letter",bmp:"a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯա-ևᏸ-ᏽᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞵꞷꟺꬰ-ꭚꭠ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",astral:"�[�-�]|�[�-��-��-��-��-���-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��]|�[�-�]|�[�-�]"},{name:"Lm",alias:"Modifier_Letter",bmp:"ʰ-ˁˆ-ˑˠ-ˤˬˮʹͺՙـۥۦߴߵߺࠚࠤࠨॱๆໆჼៗᡃᪧᱸ-ᱽᴬ-ᵪᵸᶛ-ᶿⁱⁿₐ-ₜⱼⱽⵯⸯ々〱-〵〻ゝゞー-ヾꀕꓸ-ꓽꘌꙿꚜꚝꜗ-ꜟꝰꞈꟸꟹꧏꧦꩰꫝꫳꫴꭜ-ꭟｰﾞﾟ",astral:"�[�-�]|�[�-�]"},{name:"Lo",alias:"Other_Letter",bmp:"ªºƻǀ-ǃʔא-תװ-ײؠ-ؿف-يٮٯٱ-ۓەۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪࠀ-ࠕࡀ-ࡘࢠ-ࢴऄ-हऽॐक़-ॡॲ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๅກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎა-ჺჽ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៜᠠ-ᡂᡄ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱷᳩ-ᳬᳮ-ᳱᳵᳶℵ-ℸⴰ-ⵧⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ〆〼ぁ-ゖゟァ-ヺヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꀔꀖ-ꒌꓐ-ꓷꔀ-ꘋꘐ-ꘟꘪꘫꙮꚠ-ꛥꞏꟷꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧠ-ꧤꧧ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩯꩱ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛꫜꫠ-ꫪꫲꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎יִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼｦ-ｯｱ-ﾝﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",astral:"�[�-��-�]|�[�-��-�]|�[�-��-�]|�[�-�]|�[�-�]|�[�-��-��-����-��-��-��-��-��-��-��-��-��-��-��-�]|�[�-�]|�[�-�]|�[�-��]|[��-��-��-�][�-�]|�[�-�����-��-��-���-��-�]|�[��-�]|�[�-�]|�[�-���-�����-��-��-��-����-��-��-�����-��-��-��-��-��-��-��-��-��-��-�]|�[�-��-��-��-��-���-��-����-��-��-���-��-��-��-��-����-��-����-����-�]|�[�-�]|�[�-��-������-��-��������-�������������-��-��-��-���-��-��-��-��-�]|�[�-��-��-��-��-��-�]|�[�-��-��-��-��-��-�]|�[�-�]|�[�-��-��-��-�]|�[��]|�[�-�]"},{name:"Lt",alias:"Titlecase_Letter",bmp:"ǅǈǋǲᾈ-ᾏᾘ-ᾟᾨ-ᾯᾼῌῼ"},{name:"Lu",alias:"Uppercase_Letter",bmp:"A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞭꞰ-ꞴꞶＡ-Ｚ",astral:"�[�-�]|�[�-�]|�[�-�]|�[�-��-��-��������-��-��-����-��-��-����-��-���-��-��-��-��-��-��-��-��-��-��-��-��]"},{name:"M",alias:"Mark",bmp:"̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఃా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഁ-ഃാ-ൄെ-ൈൊ-്ൗൢൣංඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ູົຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍ᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-᪾ᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭ᳲ-᳴᳸᳹᷀-᷵᷼-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-꣄꣠-꣱ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯",astral:"�[�-��-��-����-��-��-�]|�[�-��-��-��-��-��-�]|�[�-��-��-��-��-��-���-��-��-��-��-��-���-����-�����-��-�]|�[�-��-�]|�[�-��-�]|�[��]|�[���-�]|�[�-��-����-��-�]|�[�-����-��-����]|�[�-�]|�[�-�]"},{name:"Mc",alias:"Spacing_Mark",bmp:"ःऻा-ीॉ-ौॎॏংঃা-ীেৈোৌৗਃਾ-ੀઃા-ીૉોૌଂଃାୀେୈୋୌୗாிுூெ-ைொ-ௌௗఁ-ఃు-ౄಂಃಾೀ-ೄೇೈೊೋೕೖംഃാ-ീെ-ൈൊ-ൌൗංඃා-ෑෘ-ෟෲෳ༾༿ཿါာေးျြၖၗၢ-ၤၧ-ၭႃႄႇ-ႌႏႚ-ႜាើ-ៅះៈᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸᨙᨚᩕᩗᩡᩣᩤᩭ-ᩲᬄᬵᬻᬽ-ᭁᭃ᭄ᮂᮡᮦᮧ᮪ᯧᯪ-ᯬᯮ᯲᯳ᰤ-ᰫᰴᰵ᳡ᳲᳳ〮〯ꠣꠤꠧꢀꢁꢴ-ꣃꥒ꥓ꦃꦴꦵꦺꦻꦽ-꧀ꨯꨰꨳꨴꩍꩻꩽꫫꫮꫯꫵꯣꯤꯦꯧꯩꯪ꯬",astral:"�[���-�]|�[����-������-����-�����-������-����-����]|�[�-���-���-��-���-�����������]|�[�-�]"},{name:"Me",alias:"Enclosing_Mark",bmp:"҈҉᪾⃝-⃠⃢-⃤꙰-꙲"},{name:"Mn",alias:"Nonspacing_Mark",bmp:"̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣଁ଼ିୁ-ୄ୍ୖୢୣஂீ்ఀా-ీె-ైొ-్ౕౖౢౣಁ಼ಿೆೌ್ೢೣഁു-ൄ്ൢൣ්ි-ුූัิ-ฺ็-๎ັິ-ູົຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᮫-ᮭ᯦ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷵᷼-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱꨲꨵꨶꩃꩌꩼꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯",astral:"�[�-�������-��������-�������-���-��-��-�]|�[�-��-��-��-��-�]|�[�-��-�]|�[�-�]|�[��]|�[���-�]|�[�-��-����-��-�]|�[�-����-��-����]|�[��-��-��-����-��-��-�����-��-��-������-������-��-�]|�[�-�]|�[�-�]"},{name:"N",alias:"Number",bmp:"0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൦-൵෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",astral:"�[�-��-����-��-����-�]|�[�-�]|�[�-��-�]|�[�-�]|�[�-�]|�[�-��-��-�]|�[�-�]|�[�-��-��-��-��-��-�]|�[�-�]|�[�-�]|�[�-�]|�[�-��-��-��-��-����-��-��-����-��-��-��-��-�]|�[�-��-��-��-�]"},{name:"Nd",alias:"Decimal_Number",bmp:"0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",astral:"�[�-�]|�[�-�]|�[�-��-��-��-�]|�[�-�]|�[�-��-��-��-��-�]|�[�-��-�]"},{name:"Nl",alias:"Letter_Number",bmp:"ᛮ-ᛰⅠ-ↂↅ-ↈ〇〡-〩〸-〺ꛦ-ꛯ",astral:"�[�-�]|�[�-����-�]"},{name:"No",alias:"Other_Number",bmp:"²³¹¼-¾৴-৹୲-୷௰-௲౸-౾൰-൵༪-༳፩-፼៰-៹᧚⁰⁴-⁹₀-₉⅐-⅟↉①-⒛⓪-⓿❶-➓⳽㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꠰-꠵",astral:"�[�-��-�]|�[�-��-�]|�[�-�]|�[�-�]|�[�-�]|�[�-��-��-��-��-����-��-��-����-��-��-��-��-�]|�[��]|�[�-�]|�[�-�]|�[�-��-����-��-�]"},{name:"P",alias:"Punctuation",bmp:"!-#%-\\x2A,-/:;\\x3F@\\x5B-\\x5D_\\x7B}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰૰෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹂、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･",astral:"�[����-���-��-��-�]|�[�-�]|�[��-��-��-�]|�[�-�]|𐕯|𛲟|�[�-����-��-����-����-��-��]|�[�-���]|�[����-��]"},{name:"Pc",alias:"Connector_Punctuation",bmp:"_‿⁀⁔︳︴﹍-﹏＿"},{name:"Pd",alias:"Dash_Punctuation",bmp:"\\x2D֊־᐀᠆‐-―⸗⸚⸺⸻⹀〜〰゠︱︲﹘﹣－"},{name:"Pe",alias:"Close_Punctuation",bmp:"\\x29\\x5D}༻༽᚜⁆⁾₎⌉⌋〉❩❫❭❯❱❳❵⟆⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽⸣⸥⸧⸩〉》」』】〕〗〙〛〞〟﴾︘︶︸︺︼︾﹀﹂﹄﹈﹚﹜﹞）］｝｠｣"},{name:"Pf",alias:"Final_Punctuation",bmp:"»’”›⸃⸅⸊⸍⸝⸡"},{name:"Pi",alias:"Initial_Punctuation",bmp:"«‘‛“‟‹⸂⸄⸉⸌⸜⸠"},{name:"Po",alias:"Other_Punctuation",bmp:"!-#%-'\\x2A,\\x2E/:;\\x3F@\\x5C¡§¶·¿;·՚-՟։׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰૰෴๏๚๛༄-༒༔྅࿐-࿔࿙࿚၊-၏჻፠-፨᙭᙮᛫-᛭᜵᜶។-៖៘-៚᠀-᠅᠇-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‖‗†-‧‰-‸※-‾⁁-⁃⁇-⁑⁓⁕-⁞⳹-⳼⳾⳿⵰⸀⸁⸆-⸈⸋⸎-⸖⸘⸙⸛⸞⸟⸪-⸮⸰-⸹⸼-⸿⹁、-〃〽・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫︐-︖︙︰﹅﹆﹉-﹌﹐-﹒﹔-﹗﹟-﹡﹨﹪﹫！-＃％-＇＊，．／：；？＠＼｡､･",astral:"�[����-���-��-��-�]|�[�-�]|�[��-��-��-�]|�[�-�]|𐕯|𛲟|�[�-����-��-����-����-��-��]|�[�-���]|�[����-��]"},{name:"Ps",alias:"Open_Punctuation",bmp:"\\x28\\x5B\\x7B༺༼᚛‚„⁅⁽₍⌈⌊〈❨❪❬❮❰❲❴⟅⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼⸢⸤⸦⸨⹂〈《「『【〔〖〘〚〝﴿︗︵︷︹︻︽︿﹁﹃﹇﹙﹛﹝（［｛｟｢"},{name:"S",alias:"Symbol",bmp:"\\x24\\x2B<->\\x5E`\\x7C~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶৲৳৺৻૱୰௳-௺౿൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-₾℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-⏺␀-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮘-⮹⮽-⯈⯊-⯑⯬-⯯⳥-⳪⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛﬩﮲-﯁﷼﷽﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�",astral:"�[�-��-��-��-��-��-��-��]|�[�-��-��-��-��-��-��-��-��-��-��-��-����-�]|�[�-��-��-��-��-��-��-�]|�[����������]|�[�-��-���-���-�]|𛲜|𑜿|�[���]|�[�-��]|�[�-��-��-��-���]|�[�-��-��-��-����-��-��-���-�]|�[��]"},{name:"Sc",alias:"Currency_Symbol",bmp:"\\x24¢-¥֏؋৲৳৻૱௹฿៛₠-₾꠸﷼﹩＄￠￡￥￦"},{name:"Sk",alias:"Modifier_Symbol",bmp:"\\x5E`¨¯´¸˂-˅˒-˟˥-˫˭˯-˿͵΄΅᾽᾿-῁῍-῏῝-῟῭-`´῾゛゜꜀-꜖꜠꜡꞉꞊꭛﮲-﯁＾｀￣",astral:"�[�-�]"},{name:"Sm",alias:"Math_Symbol",bmp:"\\x2B<->\\x7C~¬±×÷϶؆-؈⁄⁒⁺-⁼₊-₌℘⅀-⅄⅋←-↔↚↛↠↣↦↮⇎⇏⇒⇔⇴-⋿⌠⌡⍼⎛-⎳⏜-⏡▷◁◸-◿♯⟀-⟄⟇-⟥⟰-⟿⤀-⦂⦙-⧗⧜-⧻⧾-⫿⬰-⭄⭇-⭌﬩﹢﹤-﹦＋＜-＞｜～￢￩-￬",astral:"�[��]|�[����������]"},{name:"So",alias:"Other_Symbol",bmp:"¦©®°҂֍֎؎؏۞۩۽۾߶৺୰௳-௸௺౿൹༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᥀᧞-᧿᭡-᭪᭴-᭼℀℁℃-℆℈℉℔№℗℞-℣℥℧℩℮℺℻⅊⅌⅍⅏↊↋↕-↙↜-↟↡↢↤↥↧-↭↯-⇍⇐⇑⇓⇕-⇳⌀-⌇⌌-⌟⌢-⌨⌫-⍻⍽-⎚⎴-⏛⏢-⏺␀-␦⑀-⑊⒜-ⓩ─-▶▸-◀◂-◷☀-♮♰-❧➔-➿⠀-⣿⬀-⬯⭅⭆⭍-⭳⭶-⮕⮘-⮹⮽-⯈⯊-⯑⯬-⯯⳥-⳪⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꠨-꠫꠶꠷꠹꩷-꩹﷽￤￨￭￮￼�",astral:"�[�-��-��-��-��-��-��-��]|�[�-��-��-��-��-��-��-�]|�[�-��-��-��-��-��-��-��-��-��-��-��-����-�]|�[�-��-���-���-�]|𛲜|𑜿|�[���]|�[�-��]|�[�-��-��-��-���]|�[�-��-��-��-����-��-��-���-�]"},{name:"Z",alias:"Separator",bmp:"    - \u2028\u2029  　"},{name:"Zl",alias:"Line_Separator",bmp:"\u2028"},{name:"Zp",alias:"Paragraph_Separator",bmp:"\u2029"},{name:"Zs",alias:"Space_Separator",bmp:"    -   　"}])}});
$rmod.def("/xregexp@3.1.0/src/addons/unicode-properties",function(e,a,n,r,t){n.exports=function(e){"use strict";if(!e.addUnicodeData)throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");var a=[{name:"ASCII",bmp:"\x00-"},{name:"Alphabetic",bmp:"A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևְ-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࢠ-ࢴࣣ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౠ-ౣಁ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೞೠ-ೣೱೲഁ-ഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൗൟ-ൣൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ၢၥ-ၨၮ-ႆႎႜႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፟ᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜓᜠ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᬀ-ᬳᬵ-ᭃᭅ-ᭋᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰵᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳳᳵᳶᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞭꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠧꡀ-ꡳꢀ-ꣃꣲ-ꣷꣻꣽꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺꩾ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",astral:"�[�-��-�]|�[�-��-��-��-��-���-��-����-��-���-���-��-��-��-��-��-����-��-����-��-��������-�]|�[�-��-�]|�[�-��-�]|�[�-��-��-�]|�[�-�]|�[�-��-��-��-��-��-��-�]|�[�-��-��-��-��-��-�]|�[�-��-��-�]|�[�-�]|�[�-�]|[��-��-��-�][�-�]|�[�-��-�������-��-���-��-��-��-��-��-��-��-���-��-��-��-��-��-��-��-��-��-��-��-��-�]|�[�-��-��-��-��]|�[�-�]|�[�-��-������-��-��������-�������������-��-��-��-���-��-��-��-��-�]|�[�-�����-��-��-��-����-��-��-�]|�[�-��-�]|�[�-���-�]|�[�-��-��-����-��-��-��-��-��-��-��-��-��-��-��-��-�]|�[�-���-�����-��-��-��-����-��-��-����-����-��-��-��-��-��-��-��-��-��-��-�]|�[�-�]|�[��]|�[�-��-��-�]|�[�-�]"},{name:"Any",isBmpLast:!0,bmp:"\x00-￿",astral:"[�-�][�-�]"},{name:"Default_Ignorable_Code_Point",bmp:"­͏؜ᅟᅠ឴឵᠋-᠎​-‏‪-‮⁠-⁯ㅤ︀-️\ufeffﾠ￰-￸",astral:"[�-�][�-�]|�[�-�]|�[�-�]"},{name:"Lowercase",bmp:"a-zªµºß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʸˀˁˠ-ˤͅͱͳͷͺ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯա-ևᏸ-ᏽᴀ-ᶿḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷⁱⁿₐ-ₜℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎⅰ-ⅿↄⓐ-ⓩⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱽⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛ-ꚝꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞵꞷꟸ-ꟺꬰ-ꭚꭜ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",astral:"�[�-�]|�[�-��-��-��-��-���-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��-��]|�[�-�]|�[�-�]"},{name:"Noncharacter_Code_Point",bmp:"﷐-﷯￾￿",astral:"[����������������][��]"},{name:"Uppercase",bmp:"A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅⅠ-ⅯↃⒶ-ⓏⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞭꞰ-ꞴꞶＡ-Ｚ",astral:"�[�-�]|�[�-�]|�[�-��-��-��������-��-��-����-��-��-����-��-���-��-��-��-��-��-��-��-��-��-��-��-��]|�[�-�]|�[�-��-��-�]"},{name:"White_Space",bmp:"	-\r    - \u2028\u2029  　"}];a.push({name:"Assigned",inverseOf:"Cn"}),e.addUnicodeData(a)}});
$rmod.def("/xregexp@3.1.0/src/addons/unicode-scripts",function(a,m,n,e,r){n.exports=function(a){"use strict";if(!a.addUnicodeData)throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");a.addUnicodeData([{name:"Ahom",astral:"�[�-��-��-�]"},{name:"Anatolian_Hieroglyphs",astral:"�[�-�]"},{name:"Arabic",bmp:"؀-؄؆-؋؍-ؚ؞ؠ-ؿف-يٖ-ٯٱ-ۜ۞-ۿݐ-ݿࢠ-ࢴࣣ-ࣿﭐ-﯁ﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-﷽ﹰ-ﹴﹶ-ﻼ",astral:"�[�-�]|�[�-��-������-��-��������-�������������-��-��-��-���-��-��-��-��-���]"},{name:"Armenian",bmp:"Ա-Ֆՙ-՟ա-և֊֍-֏ﬓ-ﬗ"},{name:"Avestan",astral:"�[�-��-�]"},{name:"Balinese",bmp:"ᬀ-ᭋ᭐-᭼"},{name:"Bamum",bmp:"ꚠ-꛷",astral:"�[�-�]"},{name:"Bassa_Vah",astral:"�[�-��-�]"},{name:"Batak",bmp:"ᯀ-᯳᯼-᯿"},{name:"Bengali",bmp:"ঀ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-৻"},{name:"Bopomofo",bmp:"˪˫ㄅ-ㄭㆠ-ㆺ"},{name:"Brahmi",astral:"�[�-��-��]"},{name:"Braille",bmp:"⠀-⣿"},{name:"Buginese",bmp:"ᨀ-ᨛ᨞᨟"},{name:"Buhid",bmp:"ᝀ-ᝓ"},{name:"Canadian_Aboriginal",bmp:"᐀-ᙿᢰ-ᣵ"},{name:"Carian",astral:"�[�-�]"},{name:"Caucasian_Albanian",astral:"�[�-��]"},{name:"Chakma",astral:"�[�-��-�]"},{name:"Cham",bmp:"ꨀ-ꨶꩀ-ꩍ꩐-꩙꩜-꩟"},{name:"Cherokee",bmp:"Ꭰ-Ᏽᏸ-ᏽꭰ-ꮿ"},{name:"Common",bmp:"\x00-@\\x5B-`\\x7B-©«-¹»-¿×÷ʹ-˟˥-˩ˬ-˿ʹ;΅·։؅،؛؜؟ـ۝।॥฿࿕-࿘჻᛫-᛭᜵᜶᠂᠃᠅᳓᳡ᳩ-ᳬᳮ-ᳳᳵᳶ -​‎-⁤⁦-⁰⁴-⁾₀-₎₠-₾℀-℥℧-℩ℬ-ℱℳ-⅍⅏-⅟↉-↋←-⏺␀-␦⑀-⑊①-⟿⤀-⭳⭶-⮕⮘-⮹⮽-⯈⯊-⯑⯬-⯯⸀-⹂⿰-⿻　-〄〆〈-〠〰-〷〼-〿゛゜゠・ー㆐-㆟㇀-㇣㈠-㉟㉿-㋏㍘-㏿䷀-䷿꜀-꜡ꞈ-꞊꠰-꠹꤮ꧏ꭛﴾﴿︐-︙︰-﹒﹔-﹦﹨-﹫\ufeff！-＠［-｀｛-･ｰﾞﾟ￠-￦￨-￮￹-�",astral:"�[�-��-��-��-��-��-��-��]|�[�-�]|�[�-��-�������-��-���-��-��-��-��-��-��-��-���-��-��-��-�]|�[��-�]|�[�-��-��-��-��-��-��-�]|�[�-��-��-��-��-��-�]|�[�-��-��-��-����-��-��-��-�]|�[�-��-��-��-��-��-��-��-��-��-��-����-��-����-�]"},{name:"Coptic",bmp:"Ϣ-ϯⲀ-ⳳ⳹-⳿"},{name:"Cuneiform",astral:"�[�-��-��-�]|�[�-�]"},{name:"Cypriot",astral:"�[�-���-�����]"},{name:"Cyrillic",bmp:"Ѐ-҄҇-ԯᴫᵸⷠ-ⷿꙀ-ꚟ︮︯"},{name:"Deseret",astral:"�[�-�]"},{name:"Devanagari",bmp:"ऀ-ॐ॓-ॣ०-ॿ꣠-ꣽ"},{name:"Duployan",astral:"�[�-��-��-��-��-�]"},{name:"Egyptian_Hieroglyphs",astral:"�[�-�]|�[�-�]"},{name:"Elbasan",astral:"�[�-�]"},{name:"Ethiopic",bmp:"ሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፼ᎀ-᎙ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ"},{name:"Georgian",bmp:"Ⴀ-ჅჇჍა-ჺჼ-ჿⴀ-ⴥⴧⴭ"},{name:"Glagolitic",bmp:"Ⰰ-Ⱞⰰ-ⱞ"},{name:"Gothic",astral:"�[�-�]"},{name:"Grantha",astral:"�[�-��-����-��-����-��-����-����-��-��-�]"},{name:"Greek",bmp:"Ͱ-ͳ͵-ͷͺ-ͽͿ΄ΆΈ-ΊΌΎ-ΡΣ-ϡϰ-Ͽᴦ-ᴪᵝ-ᵡᵦ-ᵪᶿἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ῄῆ-ΐῖ-Ί῝-`ῲ-ῴῶ-῾Ωꭥ",astral:"�[�-��]|�[�-�]"},{name:"Gujarati",bmp:"ઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૱ૹ"},{name:"Gurmukhi",bmp:"ਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵ"},{name:"Han",bmp:"⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶵一-鿕豈-舘並-龎",astral:"�[�-��-�]|[�-��-��-�][�-�]|�[�-��-�]|�[�-�]|�[�-��-�]|�[�-�]"},{name:"Hangul",bmp:"ᄀ-ᇿ〮〯ㄱ-ㆎ㈀-㈞㉠-㉾ꥠ-ꥼ가-힣ힰ-ퟆퟋ-ퟻﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ"},{name:"Hanunoo",bmp:"ᜠ-᜴"},{name:"Hatran",astral:"�[�-����-�]"},{name:"Hebrew",bmp:"֑-ׇא-תװ-״יִ-זּטּ-לּמּנּסּףּפּצּ-ﭏ"},{name:"Hiragana",bmp:"ぁ-ゖゝ-ゟ",astral:"𛀁|🈀"},{name:"Imperial_Aramaic",astral:"�[�-��-�]"},{name:"Inherited",bmp:"̀-ًͯ҅҆-ٰٕ॒॑᪰-᪾᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷵᷼-᷿‌‍⃐-〪⃰-゙゚〭︀-️︠-︭",astral:"�[�-��-��-��-�]|�[��]|�[�-�]"},{name:"Inscriptional_Pahlavi",astral:"�[�-��-�]"},{name:"Inscriptional_Parthian",astral:"�[�-��-�]"},{name:"Javanese",bmp:"ꦀ-꧍꧐-꧙꧞꧟"},{name:"Kaithi",astral:"�[�-�]"},{name:"Kannada",bmp:"ಁ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲ"},{name:"Katakana",bmp:"ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ",astral:"𛀀"},{name:"Kayah_Li",bmp:"꤀-꤭꤯"},{name:"Kharoshthi",astral:"�[�-����-��-��-��-��-��-�]"},{name:"Khmer",bmp:"ក-៝០-៩៰-៹᧠-᧿"},{name:"Khojki",astral:"�[�-��-�]"},{name:"Khudawadi",astral:"�[�-��-�]"},{name:"Lao",bmp:"ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟ"},{name:"Latin",bmp:"A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ"},{name:"Lepcha",bmp:"ᰀ-᰷᰻-᱉ᱍ-ᱏ"},{name:"Limbu",bmp:"ᤀ-ᤞᤠ-ᤫᤰ-᤻᥀᥄-᥏"},{name:"Linear_A",astral:"�[�-��-��-�]"},{name:"Linear_B",astral:"�[�-��-��-����-��-��-�]"},{name:"Lisu",bmp:"ꓐ-꓿"},{name:"Lycian",astral:"�[�-�]"},{name:"Lydian",astral:"�[�-��]"},{name:"Mahajani",astral:"�[�-�]"},{name:"Malayalam",bmp:"ഁ-ഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൟ-ൣ൦-൵൹-ൿ"},{name:"Mandaic",bmp:"ࡀ-࡛࡞"},{name:"Manichaean",astral:"�[�-��-�]"},{name:"Meetei_Mayek",bmp:"ꫠ-꫶ꯀ-꯭꯰-꯹"},{name:"Mende_Kikakui",astral:"�[�-��-�]"},{name:"Meroitic_Cursive",astral:"�[�-��-��-�]"},{name:"Meroitic_Hieroglyphs",astral:"�[�-�]"},{name:"Miao",astral:"�[�-��-��-�]"},{name:"Modi",astral:"�[�-��-�]"},{name:"Mongolian",bmp:"᠀᠁᠄᠆-᠎᠐-᠙ᠠ-ᡷᢀ-ᢪ"},{name:"Mro",astral:"�[�-��-���]"},{name:"Multani",astral:"�[�-���-��-��-�]"},{name:"Myanmar",bmp:"က-႟ꧠ-ꧾꩠ-ꩿ"},{name:"Nabataean",astral:"�[�-��-�]"},{name:"New_Tai_Lue",bmp:"ᦀ-ᦫᦰ-ᧉ᧐-᧚᧞᧟"},{name:"Nko",bmp:"߀-ߺ"},{name:"Ogham",bmp:" -᚜"},{name:"Ol_Chiki",bmp:"᱐-᱿"},{name:"Old_Hungarian",astral:"�[�-��-��-�]"},{name:"Old_Italic",astral:"�[�-�]"},{name:"Old_North_Arabian",astral:"�[�-�]"},{name:"Old_Permic",astral:"�[�-�]"},{name:"Old_Persian",astral:"�[�-��-�]"},{name:"Old_South_Arabian",astral:"�[�-�]"},{name:"Old_Turkic",astral:"�[�-�]"},{name:"Oriya",bmp:"ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୷"},{name:"Osmanya",astral:"�[�-��-�]"},{name:"Pahawh_Hmong",astral:"�[�-��-��-��-��-�]"},{name:"Palmyrene",astral:"�[�-�]"},{name:"Pau_Cin_Hau",astral:"�[�-�]"},{name:"Phags_Pa",bmp:"ꡀ-꡷"},{name:"Phoenician",astral:"�[�-��]"},{name:"Psalter_Pahlavi",astral:"�[�-��-��-�]"},{name:"Rejang",bmp:"ꤰ-꥓꥟"},{name:"Runic",bmp:"ᚠ-ᛪᛮ-ᛸ"},{name:"Samaritan",bmp:"ࠀ-࠭࠰-࠾"},{name:"Saurashtra",bmp:"ꢀ-꣄꣎-꣙"},{name:"Sharada",astral:"�[�-��-�]"},{name:"Shavian",astral:"�[�-�]"},{name:"Siddham",astral:"�[�-��-�]"},{name:"SignWriting",astral:"�[�-��-��-�]"},{name:"Sinhala",bmp:"ංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲ-෴",astral:"�[�-�]"},{name:"Sora_Sompeng",astral:"�[�-��-�]"},{name:"Sundanese",bmp:"ᮀ-ᮿ᳀-᳇"},{name:"Syloti_Nagri",bmp:"ꠀ-꠫"},{name:"Syriac",bmp:"܀-܍܏-݊ݍ-ݏ"},{name:"Tagalog",bmp:"ᜀ-ᜌᜎ-᜔"},{name:"Tagbanwa",bmp:"ᝠ-ᝬᝮ-ᝰᝲᝳ"},{name:"Tai_Le",bmp:"ᥐ-ᥭᥰ-ᥴ"},{name:"Tai_Tham",bmp:"ᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪠-᪭"},{name:"Tai_Viet",bmp:"ꪀ-ꫂꫛ-꫟"},{name:"Takri",astral:"�[�-��-�]"},{name:"Tamil",bmp:"ஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௺"},{name:"Telugu",bmp:"ఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-్ౕౖౘ-ౚౠ-ౣ౦-౯౸-౿"},{name:"Thaana",bmp:"ހ-ޱ"},{name:"Thai",bmp:"ก-ฺเ-๛"},{name:"Tibetan",bmp:"ༀ-ཇཉ-ཬཱ-ྗྙ-ྼ྾-࿌࿎-࿔࿙࿚"},{name:"Tifinagh",bmp:"ⴰ-ⵧⵯ⵰⵿"},{name:"Tirhuta",astral:"�[�-��-�]"},{name:"Ugaritic",astral:"�[�-��]"},{name:"Vai",bmp:"ꔀ-ꘫ"},{name:"Warang_Citi",astral:"�[�-��]"},{name:"Yi",bmp:"ꀀ-ꒌ꒐-꓆"}])}});
$rmod.def("/xregexp@3.1.0/src/index",function(d,e,o,s,n){var c=d("./xregexp");d("./addons/build")(c),d("./addons/matchrecursive")(c),d("./addons/unicode-base")(c),d("./addons/unicode-blocks")(c),d("./addons/unicode-categories")(c),d("./addons/unicode-properties")(c),d("./addons/unicode-scripts")(c),o.exports=c});
$rmod.def("/onigurumajs@1.0.0/lib/xregexp-lookbehind",function(e,n,r,l,t){r.exports=function(e){function n(n,r){var l,t,i;if(r=r||"",n=n.replace(/^\(\?([\w$]+)\)/,function(e,n){return r+=n,""}),l=/^\(\?<([=!])/.exec(n),!l)throw new Error("lookbehind not at start of pattern");return t=e.matchRecursive(n,/\((?:[^()[\\]|\\.|\[(?:[^\\\]]|\\.)*])*/.source,"\\)","s",{valueNames:[null,null,null,"right"],escapeChar:"\\"})[0].end,i=n.slice("(?<=".length,t-1),{lb:e("(?:"+i+")$(?!\\s)",r.replace(/[gy]/g,"")),lbType:"="===l[1],main:e(n.slice(("(?<=)"+i).length),r)}}e.execLb=function(r,l,t){t=t||0;var i,o;for(l=n(l);;){if(i=e.exec(r,l.main,t),!i)break;if(o=r.slice(0,i.index),l.lbType===l.lb.test(o))return i;t=i.index+1}return null}}});
$rmod.def("/onigurumajs@1.0.0/lib/xregexp-xescape",function(n,r,e,o,t){function i(n){return parseInt(n,16)}function u(n){for(;n.length<4;)n="0"+n;return n}function a(n){return parseInt(n,10).toString(16)}e.exports=function(n){n.addToken(/\\x{([\dA-Fa-f]+)}/,function(n,r,e){var o=i(n[1]);if(o>1114111)throw new SyntaxError("Invalid Unicode code point "+n[0]);if(65535>=o)return"\\u"+u(a(o));if(e.indexOf("x")>-1)return n[0];throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u")},{scope:"all",leadChar:"\\"})}});
$rmod.dep("/$/codemirror-atom-modes/$/first-mate","onigurumajs","1.0.0");
$rmod.def("/onigurumajs@1.0.0/index",function(n,t,e,r,i){function o(n){n=l(n);try{this.pattern=h(n),this.pattern.original=n}catch(t){this.pattern={original:n}}}function c(n){this.patterns=[];for(var t,e,r=0;void 0!==(t=n[r]);r++)try{t=l(t),e=h(t),e.original=t,this.patterns.push(e)}catch(i){this.patterns.push({original:t})}}function u(n,t,e){var r=null;if(t.xregexp)r=h.exec(n,t,e);else if(/^\(\?[><][=!]?/.exec(t.original))r=h.execLb(n,t.original,e);else if(/\(\?[><][=!]?/.exec(t.original)){var i=t.original.split(/\|(\(\?[><][=!][^|]*)/g);i.length>1&&(r=a(n,i,e))}return r}function a(n,t,e){for(var r,i=[],o="",c=null,u=0;void 0!==(r=t[u]);u++)/\(\?[><][=!]?/.exec(r)&&(i.push(o),o=""),o+=r;for(i.push(o),u=0,r;void 0!==(r=i[u]);u++)try{if(c=/\(\?[><][=!]?/.exec(r)?h.execLb(n,r,e):h.exec(n,h(r),e))return c}catch(a){return null}return null}function l(n){return n=n.replace(/\\h/g,"[	p{Zs}]"),n=n.replace(/\\A/g,"^"),n=n.replace(/\\G/,""),n=n.replace(/\$$/,"[\r\n]?$")}function f(n,t,e){var r=0,i=t.slice(e),o=t.length-i.length,c=[];return n.forEach(function(t,e){r=o+i.indexOf(t);var u=t?r:n.index,a=t?r+t.length:n.index;"undefined"==typeof t&&(u=a=0),c.push({index:e,start:u,end:a,match:t,length:t?t.length:0})}),c}var s=n("/$/codemirror-atom-modes/$/first-mate/$/onigurumajs/$/lodash"),h=n("/$/codemirror-atom-modes/$/first-mate/$/onigurumajs/$/xregexp");n("./lib/xregexp-lookbehind")(h),n("./lib/xregexp-xescape")(h),o.prototype.search=function(n,t,e){var r=null;"function"==typeof t&&(e=t,t=0),t=t||0;try{r=u(n,this.pattern,t)}catch(i){e(null,null)}r?e(null,f(r,n,t)):e(null,null)},o.prototype.searchSync=function(n,t){var e=null;return this.search(n,t,function(n,t){if(n)throw n;e=t}),e},o.prototype.test=function(n,t){this.search(n,function(n,e){return t(n,!!e)})},o.prototype.testSync=function(n){var t=!1;return this.test(n,function(n,e){if(n)throw n;t=e}),t},c.prototype.findNextMatch=function(n,t,e){var r=null,i=1,o=null;"function"==typeof t&&(e=t,t=0),t=t||0;for(var c,a=0;void 0!==(c=this.patterns[a]);a++)try{if(o=u(n,c,t),!o)continue;(!r||o.index<r.index)&&(r=o,i=a)}catch(l){}r?e(null,{captureIndices:f(r,n,t).map(function(n){return s.omit(n,"match")}),index:i,scanner:{}}):e(null,null)},c.prototype.findNextMatchSync=function(n,t){var e=null;return this.findNextMatch(n,t,function(n,t){if(n)throw n;e=t}),e},t.OnigRegExp=o,t.OnigScanner=c});
$rmod.def("/first-mate@5.1.1/lib/scanner",function(n,e,t,r,i){(function(){var e,r;e=n("/$/codemirror-atom-modes/$/first-mate/$/onigurumajs").OnigScanner,t.exports=r=function(){function n(n){var e,t,r,i;for(this.patterns=null!=n?n:[],this.anchored=!1,i=this.patterns,t=0,r=i.length;r>t;t++)if(e=i[t],e.anchored){this.anchored=!0;break}this.anchoredScanner=null,this.firstLineAnchoredScanner=null,this.firstLineScanner=null,this.scanner=null}return n.prototype.createScanner=function(n,t,r){var i,a;return i=this.patterns.map(function(e){return e.getRegex(n,t,r)}),a=new e(i)},n.prototype.getScanner=function(n,e,t){return this.anchored?n?e===t?null!=this.firstLineAnchoredScanner?this.firstLineAnchoredScanner:this.firstLineAnchoredScanner=this.createScanner(n,e,t):null!=this.firstLineScanner?this.firstLineScanner:this.firstLineScanner=this.createScanner(n,e,t):e===t?null!=this.anchoredScanner?this.anchoredScanner:this.anchoredScanner=this.createScanner(n,e,t):null!=this.scanner?this.scanner:this.scanner=this.createScanner(n,e,t):(null==this.scanner&&(this.scanner=this.createScanner(n,e,t)),this.scanner)},n.prototype.findNextMatch=function(n,e,t,r){var i,a;return a=this.getScanner(e,t,r),i=a.findNextMatchSync(n,t),null!=i&&(i.scanner=this),i},n.prototype.handleMatch=function(n,e,t,r,i){var a;return a=this.patterns[n.index],a.handleMatch(e,t,n.captureIndices,r,i)},n}()}).call(this)});
$rmod.def("/first-mate@5.1.1/lib/injections",function(n,t,e,r,s){(function(){var t,r,s,i;i=n("/$/codemirror-atom-modes/$/first-mate/$/underscore-plus"),r=n("./scanner"),s=n("./scope-selector"),e.exports=t=function(){function n(n,t){var e,r,i,a,o,c,l,u,h;this.grammar=n,null==t&&(t={}),this.injections=[],this.scanners={};for(a in t)if(o=t[a],(null!=o&&null!=(u=o.patterns)?u.length:void 0)>0){for(r=[],h=o.patterns,c=0,l=h.length;l>c;c++)i=h[c],e=this.grammar.createPattern(i),r.push.apply(r,e.getIncludedPatterns(n,r));this.injections.push({selector:new s(a),patterns:r})}}return n.prototype.getScanner=function(n){var t;return null!=n.scanner?n.scanner:(t=new r(n.patterns),n.scanner=t,t)},n.prototype.getScanners=function(n){var t,e,r,s,i,a,o;if(0===this.injections.length)return[];for(r=[],s=this.grammar.scopesFromStack(n),o=this.injections,i=0,a=o.length;a>i;i++)t=o[i],t.selector.matches(s)&&(e=this.getScanner(t),r.push(e));return r},n}()}).call(this)});
$rmod.def("/first-mate@5.1.1/lib/pattern",function(e,t,r,s,a){(function(){var t,s,a,n,o,i=[].slice;o=e("/$/codemirror-atom-modes/$/first-mate/$/underscore-plus"),t=/\\\d+/g,s=/\$(\d+)|\${(\d+):\/(downcase|upcase)}/,a=/\\\d+/,r.exports=n=function(){function e(e,t,r){var s,n,o,i,u,p,c,h,l,d,m,g,f,R,S;if(this.grammar=e,this.registry=t,null==r&&(r={}),g=r.name,p=r.contentName,m=r.match,n=r.begin,c=r.end,f=r.patterns,u=r.captures,o=r.beginCaptures,h=r.endCaptures,s=r.applyEndPatternLast,this.include=r.include,this.popRule=r.popRule,this.hasBackReferences=r.hasBackReferences,this.pushRule=null,this.backReferences=null,this.scopeName=g,this.contentScopeName=p,m?((c||this.popRule)&&(null!=this.hasBackReferences?this.hasBackReferences:this.hasBackReferences=a.test(m))?this.match=m:this.regexSource=m,this.captures=u):n&&(this.regexSource=n,this.captures=null!=o?o:u,l=this.grammar.createPattern({match:c,captures:null!=h?h:u,popRule:!0}),this.pushRule=this.grammar.createRule({scopeName:this.scopeName,contentScopeName:this.contentScopeName,patterns:f,endPattern:l,applyEndPatternLast:s})),null!=this.captures){R=this.captures;for(d in R)i=R[d],(null!=(S=i.patterns)?S.length:void 0)>0&&!i.rule&&(i.scopeName=this.scopeName,i.rule=this.grammar.createRule(i))}this.anchored=this.hasAnchor()}return e.prototype.getRegex=function(e,t,r){return this.anchored?this.replaceAnchor(e,t,r):this.regexSource},e.prototype.hasAnchor=function(){var e,t,r,s,a;if(!this.regexSource)return!1;for(t=!1,a=this.regexSource,r=0,s=a.length;s>r;r++){if(e=a[r],t&&("A"===e||"G"===e||"z"===e))return!0;t=!t&&"\\"===e}return!1},e.prototype.replaceAnchor=function(e,t,r){var s,a,n,o,i,u,p;for(n=[],o="￿",a=!1,p=this.regexSource,i=0,u=p.length;u>i;i++)if(s=p[i],a){switch(s){case"A":e?n.push("\\"+s):n.push(o);break;case"G":t===r?n.push("\\"+s):n.push(o);break;case"z":n.push("$(?!\n)(?<!\n)");break;default:n.push("\\"+s)}a=!1}else"\\"===s?a=!0:n.push(s);return n.join("")},e.prototype.resolveBackReferences=function(e,r){var s,a,n,i,u,p,c;for(s=[],u=0,p=r.length;p>u;u++)c=r[u],i=c.start,a=c.end,s.push(e.slice(i,a));return n=this.match.replace(t,function(e){var t;return t=parseInt(e.slice(1)),null!=s[t]?o.escapeRegExp(s[t]):"\\"+t}),this.grammar.createPattern({hasBackReferences:!1,match:n,captures:this.captures,popRule:this.popRule})},e.prototype.ruleForInclude=function(e,t){var r,s,a,n,o;return s=t.indexOf("#"),0===s?this.grammar.getRepository()[t.slice(1)]:s>=1?(r=t.slice(0,+(s-1)+1||9e9),a=t.slice(s+1),this.grammar.addIncludedGrammarScope(r),null!=(n=this.registry.grammarForScopeName(r))?n.getRepository()[a]:void 0):"$self"===t?this.grammar.getInitialRule():"$base"===t?e.getInitialRule():(this.grammar.addIncludedGrammarScope(t),null!=(o=this.registry.grammarForScopeName(t))?o.getInitialRule():void 0)},e.prototype.getIncludedPatterns=function(e,t){var r,s;return this.include?(r=this.ruleForInclude(e,this.include),null!=(s=null!=r?r.getIncludedPatterns(e,t):void 0)?s:[]):[this]},e.prototype.resolveScopeName=function(e,t,r){var a;return a=e.replace(s,function(e,s,a,n){var o,i;if(o=r[parseInt(null!=s?s:a)],null==o)return e;for(i=t.substring(o.start,o.end);"."===i[0];)i=i.substring(1);switch(n){case"downcase":return i.toLowerCase();case"upcase":return i.toUpperCase();default:return i}})},e.prototype.handleMatch=function(e,t,r,s,a){var n,i,u,p,c,h,l,d;if(h=[],l=r[0].start===r[0].end,this.popRule){if(l&&o.last(e).zeroWidthMatch&&o.last(e).rule.anchorPosition===r[0].end)return!1;n=o.last(e).contentScopeName,n&&h.push(this.grammar.endIdForScope(n))}else this.scopeName&&(p=this.resolveScopeName(this.scopeName,t,r),h.push(this.grammar.startIdForScope(p)));return this.captures?h.push.apply(h,this.tagsForCaptureIndices(t,o.clone(r),r,e)):(d=r[0],c=d.start,i=d.end,i!==c&&h.push(i-c)),this.pushRule?(u=this.pushRule.getRuleToPush(t,r),u.anchorPosition=r[0].end,n=u.contentScopeName,e.push({rule:u,scopeName:p,contentScopeName:n,zeroWidthMatch:l}),n&&h.push(this.grammar.startIdForScope(n))):(this.popRule&&(p=e.pop().scopeName),p&&h.push(this.grammar.endIdForScope(p))),h},e.prototype.tagsForCaptureRule=function(e,t,r,s,a){var n,o,u,p,c,h,l,d;for(o=t.substring(r,s),h=e.grammar.tokenizeLine(o,i.call(a).concat([{rule:e}])).tags,p=[],n=[],u=0,l=0,d=h.length;d>l;l++)c=h[l],(0>c||c>0&&s>u)&&(n.push(c),c>=0?u+=c:c%2===0?p.pop():p.push(c));for(;p.length>0;)n.push(p.pop()-1);return n},e.prototype.tagsForCaptureIndices=function(e,t,r,s){var a,n,o,i,u,p,c,h,l,d,m,g;if(p=t.shift(),d=[],(l=null!=(m=this.captures[p.index])?m.name:void 0)&&(c=this.resolveScopeName(l,e,r),d.push(this.grammar.startIdForScope(c))),n=null!=(g=this.captures[p.index])?g.rule:void 0)for(o=this.tagsForCaptureRule(n,e,p.start,p.end,s),d.push.apply(d,o);t.length&&t[0].start<p.end;)t.shift();else{for(h=p.start;t.length&&t[0].start<p.end;)i=t[0],u=i.end-i.start===0,a=!this.captures[i.index],u||a?t.shift():(i.start>h&&d.push(i.start-h),o=this.tagsForCaptureIndices(e,t,r,s),d.push.apply(d,o),h=i.end);p.end>h&&d.push(p.end-h)}return c&&(d.length>1?d.push(this.grammar.endIdForScope(c)):d.pop()),d},e}()}).call(this)});
$rmod.def("/first-mate@5.1.1/lib/rule",function(t,e,n,r,a){(function(){var e,r,a,s=[].slice;a=t("/$/codemirror-atom-modes/$/first-mate/$/underscore-plus"),r=t("./scanner"),n.exports=e=function(){function t(t,e,n){var r,a,s,i,c,o;for(this.grammar=t,this.registry=e,c=null!=n?n:{},this.scopeName=c.scopeName,this.contentScopeName=c.contentScopeName,a=c.patterns,this.endPattern=c.endPattern,this.applyEndPatternLast=c.applyEndPatternLast,this.patterns=[],o=null!=a?a:[],s=0,i=o.length;i>s;s++)r=o[s],r.disabled||this.patterns.push(this.grammar.createPattern(r));this.endPattern&&!this.endPattern.hasBackReferences&&(this.applyEndPatternLast?this.patterns.push(this.endPattern):this.patterns.unshift(this.endPattern)),this.scannersByBaseGrammarName={},this.createEndPattern=null,this.anchorPosition=-1}return t.prototype.getIncludedPatterns=function(t,e){var n,r,s,i,c;if(null==e&&(e=[]),a.include(e,this))return[];for(e=e.concat([this]),n=[],c=this.patterns,s=0,i=c.length;i>s;s++)r=c[s],n.push.apply(n,r.getIncludedPatterns(t,e));return n},t.prototype.clearAnchorPosition=function(){return this.anchorPosition=-1},t.prototype.getScanner=function(t){var e,n;return(n=this.scannersByBaseGrammarName[t.name])?n:(e=this.getIncludedPatterns(t),n=new r(e),this.scannersByBaseGrammarName[t.name]=n,n)},t.prototype.scanInjections=function(t,e,n,r){var a,s,i,c,o,h,u;if(a=t[0].rule.grammar,s=a.injections)for(u=s.getScanners(t),o=0,h=u.length;h>o;o++)if(c=u[o],i=c.findNextMatch(e,r,n,this.anchorPosition),null!=i)return i},t.prototype.normalizeCaptureIndices=function(t,e){var n,r,a,s;for(r=t.length,a=0,s=e.length;s>a;a++)n=e[a],n.end=Math.min(n.end,r),n.start=Math.min(n.start,r)},t.prototype.findNextMatch=function(t,e,n,r){var s,i,c,o,h,u,p,l,d,m;for(c=""+e+"\n",s=t[0].rule.grammar,h=[],u=this.getScanner(s),(o=u.findNextMatch(c,r,n,this.anchorPosition))&&h.push(o),(o=this.scanInjections(t,c,n,r))&&h.push(o),p=null,m=this.registry.injectionGrammars,l=0,d=m.length;d>l;l++)i=m[l],i!==this.grammar&&i!==s&&(null==p&&(p=this.grammar.scopesFromStack(t)),i.injectionSelector.matches(p)&&(u=i.getInitialRule().getScanner(i,n,r),(o=u.findNextMatch(c,r,n,this.anchorPosition))&&h.push(o)));return h.length>1?a.min(h,function(t){return function(e){return t.normalizeCaptureIndices(c,e.captureIndices),e.captureIndices[0].start}}(this)):1===h.length?(o=h[0],this.normalizeCaptureIndices(c,o.captureIndices),o):void 0},t.prototype.getNextTags=function(t,e,n,r){var a,s,i,c,o,h,u;return h=this.findNextMatch(t,e,n,r),null==h?null:(c=h.index,a=h.captureIndices,u=h.scanner,i=a[0],s=this.endPattern===u.patterns[c],(o=u.handleMatch(h,t,e,this,s))?{nextTags:o,tagsStart:i.start,tagsEnd:i.end}:void 0)},t.prototype.getRuleToPush=function(t,e){var n;return this.endPattern.hasBackReferences?(n=this.grammar.createRule({scopeName:this.scopeName,contentScopeName:this.contentScopeName}),n.endPattern=this.endPattern.resolveBackReferences(t,e),n.patterns=[n.endPattern].concat(s.call(this.patterns)),n):this},t}()}).call(this)});
$rmod.def("/first-mate@5.1.1/lib/grammar",function(e,t,r,i,n){(function(){var t,i,n,o,s,p,a,l,c,u,h;u=e("path-browserify"),h=e("/$/codemirror-atom-modes/$/first-mate/$/underscore-plus"),c=null,o=e("/$/codemirror-atom-modes/$/first-mate/$/onigurumajs").OnigRegExp,t=e("/$/codemirror-atom-modes/$/first-mate/$/event-kit").Emitter,n=e("./injections"),s=e("./pattern"),p=e("./rule"),a=e("./scope-selector"),r.exports=i=function(){function e(e,r){var i,s,p,l,c;this.registry=e,null==r&&(r={}),this.name=r.name,this.fileTypes=r.fileTypes,this.scopeName=r.scopeName,this.foldingStopMarker=r.foldingStopMarker,this.maxTokensPerLine=r.maxTokensPerLine,p=r.injections,s=r.injectionSelector,l=r.patterns,c=r.repository,i=r.firstLineMatch,this.emitter=new t,this.repository=null,this.initialRule=null,this.rawPatterns=l,this.rawRepository=c,null!=s?this.injectionSelector=new a(s):this.injectionSelector=null,i?this.firstLineRegex=new o(i):this.firstLineRegex=null,null==this.fileTypes&&(this.fileTypes=[]),this.includedGrammarScopes=[],this.injections=new n(this,p)}return e.prototype.registration=null,e.prototype.onDidUpdate=function(e){return this.emitter.on("did-update",e)},e.prototype.tokenizeLines=function(e){var t,r,i,n,o,s,p,a,l,c;for(i=e.split("\n"),n=null,o=[],c=[],r=p=0,a=i.length;a>p;r=++p)t=i[r],l=this.tokenizeLine(t,n,0===r),s=l.tags,n=l.ruleStack,c.push(this.registry.decodeTokens(t,s,o));return c},e.prototype.tokenizeLine=function(e,t,r,i){var n,o,s,p,a,c,u,m,d,g,f,y,S,N,k,I,R,F,T,v,w,P,x,L,b,$,j,G,M,z,E,U;if(null==r&&(r=!1),null==i&&(i=!0),R=[],null!=t){if(t=t.slice(),i)for(m=[],w=0,L=t.length;L>w;w++)j=t[w],k=j.scopeName,n=j.contentScopeName,k&&m.push(this.registry.startIdForScope(k)),n&&m.push(this.registry.startIdForScope(n))}else i&&(m=[]),o=this.getInitialRule(),k=o.scopeName,n=o.contentScopeName,t=[{rule:o,scopeName:k,contentScopeName:n}],k&&R.push(this.startIdForScope(o.scopeName)),n&&R.push(this.startIdForScope(o.contentScopeName));for(s=t.length,f=0,v=0;;){if(S=t.length,y=f,f===e.length+1)break;if(v>=this.getMaxTokensPerLine()-1){for(R.push(e.length-f);t.length>s;)G=t.pop(),k=G.scopeName,n=G.contentScopeName,n&&R.push(this.endIdForScope(n)),k&&R.push(this.endIdForScope(k));break}if(!(c=h.last(t).rule.getNextTags(t,e,f,r))){(f<e.length||0===e.length)&&R.push(e.length-f);break}for(u=c.nextTags,T=c.tagsStart,F=c.tagsEnd,T>f&&(R.push(T-f),v++),R.push.apply(R,u),P=0,b=u.length;b>P;P++)I=u[P],I>=0&&v++;if(f=F,f===y)if(t.length===S){if(console.error("Popping rule because it loops at column "+f+" of line '"+e+"'",h.clone(t)),!(t.length>1)){(f<e.length||0===e.length&&0===R.length)&&R.push(e.length-f);break}M=t.pop(),k=M.scopeName,n=M.contentScopeName,n&&R.push(this.endIdForScope(n)),k&&R.push(this.endIdForScope(k))}else if(t.length>S&&(z=t.slice(-2),E=z[0],d=E.rule,U=z[1],p=U.rule,null!=p&&p===d&&(g=!0),null!=(null!=p?p.scopeName:void 0)&&d.scopeName===p.scopeName&&(g=!0),g)){t.pop(),a=h.last(R),0>a&&a===this.startIdForScope(p.scopeName)&&R.pop(),R.push(e.length-f);break}}for(x=0,$=t.length;$>x;x++)N=t[x].rule,N.clearAnchorPosition();return i?new l(e,m,R,t,this.registry):{line:e,tags:R,ruleStack:t}},e.prototype.activate=function(){return this.registration=this.registry.addGrammar(this)},e.prototype.deactivate=function(){var e;return this.emitter=new t,null!=(e=this.registration)&&e.dispose(),this.registration=null},e.prototype.clearRules=function(){return this.initialRule=null,this.repository=null},e.prototype.getInitialRule=function(){return null!=this.initialRule?this.initialRule:this.initialRule=this.createRule({scopeName:this.scopeName,patterns:this.rawPatterns})},e.prototype.getRepository=function(){return null!=this.repository?this.repository:this.repository=function(e){return function(){var t,r,i,n;i={},n=e.rawRepository;for(r in n)t=n[r],(null!=t.begin||null!=t.match)&&(t={patterns:[t],tempName:r}),i[r]=e.createRule(t);return i}}(this)()},e.prototype.addIncludedGrammarScope=function(e){return h.include(this.includedGrammarScopes,e)?void 0:this.includedGrammarScopes.push(e)},e.prototype.grammarUpdated=function(e){return h.include(this.includedGrammarScopes,e)?(this.clearRules(),this.registry.grammarUpdated(this.scopeName),Grim.includeDeprecatedAPIs&&this.emit("grammar-updated"),this.emitter.emit("did-update"),!0):!1},e.prototype.startIdForScope=function(e){return this.registry.startIdForScope(e)},e.prototype.endIdForScope=function(e){return this.registry.endIdForScope(e)},e.prototype.scopeForId=function(e){return this.registry.scopeForId(e)},e.prototype.createRule=function(e){return new p(this,this.registry,e)},e.prototype.createPattern=function(e){return new s(this,this.registry,e)},e.prototype.getMaxTokensPerLine=function(){return this.maxTokensPerLine},e.prototype.scopesFromStack=function(e,t,r){var i,n,o,s,p,a;for(o=[],s=0,p=e.length;p>s;s++)a=e[s],n=a.scopeName,i=a.contentScopeName,n&&o.push(n),i&&o.push(i);return r&&(null!=t?t.contentScopeName:void 0)&&t===e[e.length-1]&&o.pop(),o},e}(),l=function(){function e(e,t,r,i,n){this.line=e,this.openScopeTags=t,this.tags=r,this.ruleStack=i,this.registry=n}return Object.defineProperty(e.prototype,"tokens",{get:function(){return this.registry.decodeTokens(this.line,this.tags,this.openScopeTags)}}),e}()}).call(this)});
$rmod.def("/first-mate@5.1.1/lib/first-mate",function(r,e,t,a,m){(function(){t.exports={ScopeSelector:r("./scope-selector"),GrammarRegistry:r("./grammar-registry"),Grammar:r("./grammar")}}).call(this)});
$rmod.def("/codemirror-atom-modes@1.0.0/src/index",function(t,r,e,n,a){"use strict";function i(t){for(var r=t.length,e=r;e>=1;e--){var n=t.slice(0,e).join("."),a=g[n];if(a)return a}return t.join(".")}function o(t){return t.map(function(t){var r=t.split(/['.']/);return i(r)})}function u(t){var r={};return t.filter(function(t){return r.hasOwnProperty(t)?!1:(r[t]=!0,!0)})}function s(t,r){for(var e=t.tokens[t.nextTokenIndex++],n=e.value,a=0;a<n.length;a++)r.next();var i=u(o(e.scopes)).join(" ");return i}function c(t,r){var e=t.name,n=e,a=f.createGrammar(e,t);f.addGrammar(a),r.defineMode(n,function(t,r){return{startState:function(){return{ruleStack:null,lines:[],scopes:[]}},token:function(t,r){var e;if(0===t.pos){var n=r.lines.length,i=t.string,o=0===n,u=r.scopes,c=a.tokenizeLine(i,r.ruleStack,o),m=c.tags;r.ruleStack=c.ruleStack;var l=f.decodeTokens(i,m,u);e={tokens:l,nextTokenIndex:0},r.lines.push(e)}else e=r.lines[r.lines.length-1];return s(e,t)}}})}var m=t("/$/codemirror-atom-modes/$/first-mate"),l=m.GrammarRegistry,f=new l,g={keyword:"keyword",atom:"atom",number:"number",def:"def",variable:"variable",punctuation:"punctuation",property:"property",operator:"operator","variable-2":"variable-2","variable-3":"variable-3",comment:"comment",string:"string","string-2":"string-2",meta:"meta",qualifier:"qualifier",builtin:"builtin",bracket:"bracket",tag:"tag","entity.name.tag":"tag",attribute:"attribute","entity.other.attribute-name.html":"attribute",hr:"hr",link:"link","meta.section.marko-placeholder":"strong","meta.section.marko-attribute":"strong","meta.brace":"bracket","support.function.marko-tag":"strong tag","support.function.marko-attribute":"strong attribute"};r.registerGrammar=c});
$rmod.def("/src/atom-grammars/css.cson",{scopeName:"source.css",name:"CSS",fileTypes:["css","css.erb"],patterns:[{include:"#comment-block"},{include:"#selector"},{begin:"(@)charset\\b",captures:{0:{name:"keyword.control.at-rule.charset.css"},1:{name:"punctuation.definition.keyword.css"}},end:"\\s*((?=;|$))",name:"meta.at-rule.charset.css",patterns:[{include:"#string-double"},{include:"#string-single"},{include:"#comment-block"}]},{begin:"(@)import\\b",captures:{0:{name:"keyword.control.at-rule.import.css"},1:{name:"punctuation.definition.keyword.css"}},end:"\\s*((?=;|\\}))",name:"meta.at-rule.import.css",patterns:[{include:"#string-double"},{include:"#string-single"},{include:"#comment-block"},{begin:"\\s*(url)\\s*(\\()\\s*",beginCaptures:{1:{name:"support.function.url.css"},2:{name:"punctuation.section.function.css"}},end:"\\s*(\\))\\s*",endCaptures:{1:{name:"punctuation.section.function.css"}},patterns:[{match:"[^'\") \\t]+",name:"variable.parameter.url.css"},{include:"#string-single"},{include:"#string-double"},{include:"#comment-block"}]},{include:"#media-query-list"}]},{begin:"((@)font-face)\\s*(?=\\{)",beginCaptures:{1:{name:"keyword.control.at-rule.font-face.css"},2:{name:"punctuation.definition.keyword.css"}},end:"(?!\\G)",name:"meta.at-rule.font-face.css",patterns:[{include:"#rule-list"}]},{begin:"(?=@media\\b)",end:"\\s*(\\})",endCaptures:{1:{name:"punctuation.section.property-list.end.css"}},patterns:[{begin:"((@)media)\\b",beginCaptures:{1:{name:"keyword.control.at-rule.media.css"},2:{name:"punctuation.definition.keyword.css"}},end:"\\s*(?=\\{)",name:"meta.at-rule.media.css",patterns:[{include:"#media-query-list"}]},{begin:"\\s*(\\{)",beginCaptures:{1:{name:"punctuation.section.property-list.begin.css"}},end:"(?=\\})",patterns:[{include:"$self"}]}]},{begin:"(@)page\\b",captures:{0:{name:"keyword.control.at-rule.page.css"},1:{name:"punctuation.definition.keyword.css"}},end:"\\s*((?=[{:]|$))",name:"meta.at-rule.page.css",patterns:[{include:"#rule-list"}]},{begin:"((@)namespace\\b)\\s*(?=url)",captures:{1:{name:"keyword.control.at-rule.namespace.css"},2:{name:"punctuation.definition.keyword.css"},3:{name:"support.function.misc.css"}},comment:"Namespace without prefix",end:"\\s*((?=;|$))",name:"meta.at-rule.namespace.css",patterns:[{include:"#property-values"},{include:"#string-double"},{include:"#string-single"}]},{begin:"((@)namespace) ([\\w-]*)",captures:{1:{name:"keyword.control.at-rule.namespace.scss"},2:{name:"punctuation.definition.keyword.scss"},3:{name:"entity.name.function.scss"}},comment:"Namespace",end:"\\s*((?=;|$))",name:"meta.at-rule.namespace.scss",patterns:[{match:"\\s*(\\$[A-Za-z0-9_-]+\\b)\\s*",name:"variable.scss"},{include:"#property-values"},{include:"#string-double"},{include:"#string-single"}]},{begin:"(?=\\{)",end:"(?!\\G)",patterns:[{include:"#rule-list"}]}],repository:{"color-values":{patterns:[{comment:"http://www.w3.org/TR/CSS21/syndata.html#value-def-color",match:"\\b(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)\\b",name:"support.constant.color.w3c-standard-color-name.css"},{comment:"http://www.w3.org/TR/css3-color/#svg-color",match:"\\b(aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|gold|goldenrod|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|magenta|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|violet|wheat|whitesmoke|yellowgreen)\\b",name:"support.constant.color.w3c-extended-color-name.css"},{begin:"(hsla?|rgba?)\\s*(\\()",beginCaptures:{1:{name:"support.function.misc.css"},2:{name:"punctuation.section.function.css"}},end:"(\\))",endCaptures:{1:{name:"punctuation.section.function.css"}},patterns:[{match:"(?x)\\b\n							    (0*((1?[0-9]{1,2})|(2([0-4][0-9]|5[0-5])))\\s*,\\s*){2}\n							    (0*((1?[0-9]{1,2})|(2([0-4][0-9]|5[0-5])))\\b)\n							    (\\s*,\\s*((0?\\.[0-9]+)|[0-1]))?\n							",name:"constant.other.color.rgb-value.css"},{match:"\\b([0-9]{1,2}|100)\\s*%,\\s*([0-9]{1,2}|100)\\s*%,\\s*([0-9]{1,2}|100)\\s*%",name:"constant.other.color.rgb-percentage.css"},{include:"#numeric-values"}]}]},"comment-block":{begin:"/\\*",captures:{0:{name:"punctuation.definition.comment.css"}},end:"\\*/",name:"comment.block.css"},"media-query":{begin:"(?i)\\s*(only|not)?\\s*(all|aural|braille|embossed|handheld|print|projection|screen|tty|tv)?",beginCaptures:{1:{name:"keyword.operator.logic.media.css"},2:{name:"support.constant.media.css"}},end:"\\s*(?:(,)|(?=[{;]))",endCaptures:{1:{name:"punctuation.definition.arbitrary-repetition.css"}},patterns:[{include:"#comment-block"},{begin:"\\s*(and)?\\s*(\\()\\s*",beginCaptures:{1:{name:"keyword.operator.logic.media.css"}},end:"\\)",patterns:[{begin:"(?x)\n	                            (\n	                                ((min|max)-)?\n	                                (\n	                                    ((device-)?(height|width|aspect-ratio))|\n	                                    (color(-index)?)|monochrome|resolution\n	                                )\n	                            )|grid|scan|orientation\n	                            \\s*(?=[:)])",beginCaptures:{0:{name:"support.type.property-name.media.css"}},end:"(:)|(?=\\))",endCaptures:{1:{name:"punctuation.separator.key-value.css"}}},{match:"\\b(portrait|landscape|progressive|interlace)",name:"support.constant.property-value.css"},{captures:{1:{name:"constant.numeric.css"},2:{name:"keyword.operator.arithmetic.css"},3:{name:"constant.numeric.css"}},match:"\\s*(\\d+)(/)(\\d+)"},{include:"#numeric-values"},{include:"#comment-block"}]}]},"media-query-list":{begin:"\\s*(?=[^{;])",end:"\\s*(?=[{;])",patterns:[{include:"#media-query"}]},"numeric-values":{patterns:[{captures:{1:{name:"punctuation.definition.constant.css"}},match:"(#)([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\b",name:"constant.other.color.rgb-value.css"},{captures:{1:{name:"keyword.other.unit.css"}},match:"(?x) (?<!\\w|-)(?:(?:-|\\+)?(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+)) ((?:px|pt|ch|cm|mm|in|r?em|ex|pc|deg|g?rad|dpi|dpcm|dppx|fr|ms|s|turn|vh|vmax|vmin|vw)\\b|%)?",name:"constant.numeric.css"}]},"property-values":{patterns:[{begin:"(var)\\(",end:"\\)",captures:{1:{name:"support.function.misc.css"}},patterns:[{name:"variable.argument.css",match:"."}]},{begin:"(calc|cubic-bezier|steps)\\(",end:"\\)",captures:{1:{name:"support.function.misc.css"}},patterns:[{include:"#property-values"}]},{match:"\\b(absolute|all(-scroll)?|alternate-reverse|alternate|always|armenian|auto|avoid|backwards|baseline|below|bidi-override|block|bold|bolder|border(-(box|top|right|bottom|left))?|both|bottom|break-all|break-word|capitalize|center|char|circle|cjk-ideographic|col-resize|column|column-reverse|collapse|content-box|crosshair|dashed|decimal-leading-zero|decimal|default|disabled|disc|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|ease-in-out|ease-in|ease-out|ease|e-resize|ellipsis|fixed|flex|flex-end|flex-start|forwards|geometricPrecision|georgian|groove|hand|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|inactive|infinite|inherit|inline-block|inline|inset|inside|inter-ideograph|inter-word|italic|justify|katakana-iroha|katakana|keep-all|left|lighter|line-edge|line-through|line|list-item|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|main-size|margin(-(left|right|top|bottom))?|manipulation|medium|middle|move|n-resize|ne-resize|newspaper|no-drop|no-repeat|nw-resize|none|normal|not-allowed|nowrap|oblique|optimize(Legibility|Quality|Speed)|outset|outside|overline|padding-box|padding(-(left|right|top|bottom))?|pan-(x|y|left|right|up|down)|pointer|pre(-(wrap|line))?|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|reverse|right|ridge|row-resize|row-severse|rtl|running|s-resize|scroll|se-resize|separate|small-caps|solid|space-around|space-between|square|start|static|step-end|step-start|stretch|strict|sub|super|sw-resize|table-footer-group|table-header-group|tb-rl|text-bottom|text-top|text|thick|thin|top|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|vertical(-(ideographic|text))?|visible(Painted|Fill|Stroke)?|w-resize|wait|whitespace|wrap|wrap-reverse|zero|smaller|larger|((xx?-)?(small|large))|painted|paused|fill|end|stroke)\\b",name:"support.constant.property-value.css"},{match:"(\\b(?i:arial|century|comic|courier|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace)\\b)",name:"support.constant.font-name.css"},{include:"#numeric-values"},{include:"#color-values"},{include:"#string-double"},{include:"#string-single"},{begin:"(rect)\\s*(\\()",beginCaptures:{1:{name:"support.function.misc.css"},2:{name:"punctuation.section.function.css"}},end:"(\\))",endCaptures:{1:{name:"punctuation.section.function.css"}},patterns:[{include:"#numeric-values"}]},{begin:"(format|local|url|attr|counter|counters)\\s*(\\()",beginCaptures:{1:{name:"support.function.misc.css"},2:{name:"punctuation.section.function.css"}},end:"(\\))",endCaptures:{1:{name:"punctuation.section.function.css"}},patterns:[{include:"#string-single"},{include:"#string-double"},{match:"[^'\") \\t]+",name:"variable.parameter.misc.css"}]},{match:"\\!\\s*important",name:"keyword.other.important.css"}]},"rule-list":{begin:"\\{",beginCaptures:{0:{name:"punctuation.section.property-list.begin.css"}},end:"(\\})|(?<=\\})",endCaptures:{0:{name:"punctuation.section.property-list.end.css"}},name:"meta.property-list.css",patterns:[{include:"#comment-block"},{begin:"(?<![-a-z])(?=[-a-z])",end:"$|(?![-a-z])",name:"meta.property-name.css",patterns:[{match:"(?<![-a-z])(-webkit-[-A-Za-z]+|-moz-[-A-Za-z]+|-o-[-A-Za-z]+|-ms-[-A-Za-z]+|-khtml-[-A-Za-z]+|zoom|z-index|y|x|wrap|word-wrap|word-spacing|word-break|word|width|widows|white-space-collapse|white-space|white|weight|volume|voice-volume|voice-stress|voice-rate|voice-pitch-range|voice-pitch|voice-family|voice-duration|voice-balance|voice|visibility|vertical-align|variant|user-select|up|unicode-bidi|unicode|trim|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform(-style)?|touch-action|top-width|top-style|top-right-radius|top-left-radius|top-color|top|timing-function|text-wrap|text-transform|text-shadow|text-replace|text-rendering|text-outline|text-justify|text-indent|text-height|text-emphasis|text-decoration|text-align-last|text-align|text|target-position|target-new|target-name|target|table-layout|tab-size|style-type|style-position|style-image|style|string-set|stretch|stress|stacking-strategy|stacking-shift|stacking-ruby|stacking|src|speed|speech-rate|speech|speak-punctuation|speak-numeral|speak-header|speak|span|spacing|space-collapse|space|sizing|size-adjust|size|shadow|respond-to|rule-width|rule-style|rule-color|rule|ruby-span|ruby-position|ruby-overhang|ruby-align|ruby|rows|rotation-point|rotation|role|right-width|right-style|right-color|right|richness|rest-before|rest-after|rest|resource|resolution|resize|reset|replace|repeat|rendering-intent|rate|radius|quotes|punctuation-trim|punctuation|property|profile|presentation-level|presentation|position|pointer-events|point|play-state|play-during|play-count|pitch-range|pitch|phonemes|pause-before|pause-after|pause|page-policy|page-break-inside|page-break-before|page-break-after|page|padding-top|padding-right|padding-left|padding-bottom|padding|pack|overhang|overflow-y|overflow-x|overflow-style|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|origin|orientation|orient|ordinal-group|order|opacity|offset|numeral|new|nav-up|nav-right|nav-left|nav-index|nav-down|nav|name|move-to|model|min-width|min-height|min|max-width|max-height|max|marquee-style|marquee-speed|marquee-play-count|marquee-direction|marquee|marks|mark-before|mark-after|mark|margin-top|margin-right|margin-left|margin-bottom|margin|mask-image|list-style-type|list-style-position|list-style-image|list-style|list|lines|line-stacking-strategy|line-stacking-shift|line-stacking-ruby|line-stacking|line-height|line|level|letter-spacing|length|left-width|left-style|left-color|left|label|justify-content|justify|iteration-count|inline-box-align|initial-value|initial-size|initial-before-align|initial-before-adjust|initial-after-align|initial-after-adjust|index|indent|increment|image-resolution|image-orientation|image|icon|hyphens|hyphenate-resource|hyphenate-lines|hyphenate-character|hyphenate-before|hyphenate-after|hyphenate|height|header|hanging-punctuation|grid-rows|grid-columns|grid|gap|font-weight|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-family|font|float-offset|float|flex-wrap|flex-shrink|flex-grow|flex-group|flex-flow|flex-direction|flex-basis|flex|fit-position|fit|fill|filter|family|empty-cells|emphasis|elevation|duration|drop-initial-value|drop-initial-size|drop-initial-before-align|drop-initial-before-adjust|drop-initial-after-align|drop-initial-after-adjust|drop|down|dominant-baseline|display-role|display-model|display|direction|delay|decoration-break|decoration|cursor|cue-before|cue-after|cue|crop|counter-reset|counter-increment|counter|count|content|columns|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|column-break-before|column-break-after|column|color-profile|color|collapse|clip|clear|character|caption-side|break-inside|break-before|break-after|break|box-sizing|box-shadow|box-pack|box-orient|box-ordinal-group|box-lines|box-flex-group|box-flex|box-direction|box-decoration-break|box-align|box|bottom-width|bottom-style|bottom-right-radius|bottom-left-radius|bottom-color|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-length|border-left-width|border-left-style|border-left-color|border-left|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|bookmark-target|bookmark-level|bookmark-label|bookmark|binding|bidi|before|baseline-shift|baseline|balance|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-break|background-attachment|background|azimuth|attachment|appearance|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-duration|animation-direction|animation-delay|animation-fill-mode|animation|alignment-baseline|alignment-adjust|alignment|align-self|align-last|align-items|align-content|align|after|adjust|will-change)(?![-a-z])",name:"support.type.property-name.css"}]},{begin:"(:)\\s*",beginCaptures:{1:{name:"punctuation.separator.key-value.css"}},end:"\\s*(;)|(\\})",endCaptures:{1:{name:"punctuation.terminator.rule.css"},2:{name:"punctuation.section.property-list.end.css"}},name:"meta.property-value.css",patterns:[{include:"#property-values"}]}]},selector:{begin:"\\s*(?=[\\[:.*#a-zA-Z])",end:"(?=[/@{)])",name:"meta.selector.css",patterns:[{match:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|bdi|bdo|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|data|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|eventsource|fieldset|figure|figcaption|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|main|map|mark|math|menu|menuitem|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|rb|rp|rt|rtc|ruby|s|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|svg|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video|wbr)\\b",name:"entity.name.tag.css"},{match:"\\b([a-zA-Z0-9]+(-[a-zA-Z0-9]+)+)(?=\\.|\\s++[^:]|\\s*[,{]|:(link|visited|hover|active|focus|target|lang|disabled|enabled|checked|indeterminate|root|nth-child()|nth-last-child()|nth-of-type()|nth-last-of-type()|first-child|last-child|first-of-type|last-of-type|only-child|only-of-type|empty|not|valid|invalid|:shadow)(\\([0-9A-Za-z]*\\))?)",name:"entity.name.tag.custom.css"},{captures:{1:{name:"punctuation.definition.entity.css"}},match:"(\\.)[a-zA-Z0-9_-]+",name:"entity.other.attribute-name.class.css"},{captures:{1:{name:"punctuation.definition.entity.css"}},match:"(#)[a-zA-Z][a-zA-Z0-9_-]*",name:"entity.other.attribute-name.id.css"},{match:"\\*",name:"entity.name.tag.wildcard.css"},{captures:{1:{name:"punctuation.definition.entity.css"}},match:"(:+)(after|before|content|first-letter|first-line|host|(-(moz|webkit|ms)-)?selection)\\b",name:"entity.other.attribute-name.pseudo-element.css"},{captures:{1:{name:"punctuation.definition.entity.css"}},match:"(:)((first|last)-child|(first|last|only)-of-type|empty|root|target|first|left|right)\\b",name:"entity.other.attribute-name.pseudo-class.css"},{captures:{1:{name:"punctuation.definition.entity.css"}},match:"(:)(checked|enabled|default|disabled|indeterminate|invalid|optional|required|valid)\\b",name:"entity.other.attribute-name.pseudo-class.ui-state.css"},{begin:"((:)not)(\\()",beginCaptures:{1:{name:"entity.other.attribute-name.pseudo-class.css"},2:{name:"punctuation.definition.entity.css"},3:{name:"punctuation.section.function.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.css"}},patterns:[{include:"#selector"}]},{captures:{1:{name:"entity.other.attribute-name.pseudo-class.css"},2:{name:"punctuation.definition.entity.css"},3:{name:"punctuation.section.function.css"},4:{name:"constant.numeric.css"},5:{name:"punctuation.section.function.css"}},match:"((:)nth-(?:(?:last-)?child|(?:last-)?of-type))(\\()(\\-?(?:\\d+n?|n)(?:\\+\\d+)?|even|odd)(\\))"},{captures:{1:{name:"punctuation.definition.entity.css"}},match:"(:)(active|hover|link|visited|focus)\\b",name:"entity.other.attribute-name.pseudo-class.css"},{captures:{1:{name:"punctuation.definition.entity.css"}},match:"(::)(shadow)\\b",name:"entity.other.attribute-name.pseudo-class.css"},{captures:{1:{name:"punctuation.definition.entity.css"},2:{name:"entity.other.attribute-name.attribute.css"},3:{name:"punctuation.separator.operator.css"},4:{name:"string.unquoted.attribute-value.css"},5:{name:"string.quoted.double.attribute-value.css"},6:{name:"punctuation.definition.string.begin.css"},7:{name:"punctuation.definition.string.end.css"},8:{name:"punctuation.definition.entity.css"}},match:"(?i)(\\[)\\s*(-?[_a-z\\\\[[:^ascii:]]][_a-z0-9\\-\\\\[[:^ascii:]]]*)(?:\\s*([~|^$*]?=)\\s*(?:(-?[_a-z\\\\[[:^ascii:]]][_a-z0-9\\-\\\\[[:^ascii:]]]*)|((?>(['\"])(?:[^\\\\]|\\\\.)*?(\\6)))))?\\s*(\\])",name:"meta.attribute-selector.css"}]},"string-double":{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.css"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.css"}},name:"string.quoted.double.css",patterns:[{match:"\\\\([a-fA-F0-9]{1,6}|.)",name:"constant.character.escape.css"}]},"string-single":{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.css"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.css"}},name:"string.quoted.single.css",patterns:[{match:"\\\\([a-fA-F0-9]{1,6}|.)",name:"constant.character.escape.css"}]}}});
$rmod.def("/src/atom-grammars/javascript.cson",{scopeName:"source.js",fileTypes:["js","_js","es","es6","gs","htc","jscad","jsm","json5","pac","pjs","xsjs","xsjslib"],firstLineMatch:"^#!.*\\b(node|iojs|JavaScript)",name:"JavaScript",patterns:[{comment:"ES6 import",begin:"(?<!\\.)\\b(import)(?!\\s*:)\\b",beginCaptures:{1:{name:"keyword.control.js"}},patterns:[{comment:"{ member1 , member2 as alias2 , [...] }",begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.modules.begin.js"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.modules.end.js"}},patterns:[{comment:"(default|name) as alias",captures:{1:{name:"variable.language.default.js"},2:{name:"variable.other.module.js"},3:{name:"keyword.control.js"},4:{name:"invalid.illegal.js"},5:{name:"variable.other.module-alias.js"}},match:"(?x) (?: \\b(default)\\b | \\b([a-zA-Z_$][a-zA-Z_$0-9]*)\\b) \\s* (\\b as \\b) \\s* (?: (\\b default \\b | \\*) | \\b([a-zA-Z_$][a-zA-Z_$0-9]*)\\b)"},{match:",",name:"meta.delimiter.object.comma.js"},{include:"#comments"},{match:"\\b([a-zA-Z_$][a-zA-Z_$0-9]*)\\b",name:"variable.other.module.js"}]},{comment:"(default|*|name) as alias",captures:{1:{name:"variable.language.default.js"},2:{name:"variable.language.import-all.js"},3:{name:"variable.other.module.js"},4:{name:"keyword.control.js"},5:{name:"invalid.illegal.js"},6:{name:"variable.other.module-alias.js"}},match:"(?x) (?: \\b(default)\\b | (\\*) | \\b([a-zA-Z_$][a-zA-Z_$0-9]*)\\b) \\s* (\\b as \\b) \\s* (?: (\\b default \\b | \\*) | \\b([a-zA-Z_$][a-zA-Z_$0-9]*)\\b)"},{match:"\\*",name:"variable.language.import-all.js"},{match:"\\b(default)\\b",name:"variable.language.default.js"},{include:"#strings"},{include:"#comments"},{match:"\\b(from)\\b",name:"keyword.control.js"},{match:"\\b([a-zA-Z_$][a-zA-Z_$0-9]*)\\b(?=.*\\bfrom\\b)",name:"variable.other.module.js"},{match:",",name:"meta.delimiter.object.comma.js"}],end:"(?=;|$)",name:"meta.import.js"},{comment:"ES6 export: `export default (variable|class|function, etc.)`",match:"(?x) \\b(export)\\b \\s* \\b(default)\\b (?:\\s*) \\b((?!\\bfunction\\b|\\bclass\\b|\\blet\\b|\\bvar\\b|\\bconst\\b)[a-zA-Z_$][a-zA-Z_$0-9]*)?\\b",captures:{0:{name:"meta.export.js"},1:{name:"keyword.control.js"},2:{name:"variable.language.default.js"},3:{name:"variable.other.module.js"}}},{comment:"ES6 export, re-export: `export {member as alias, [...]} [from ...]`",begin:"(?<!\\.)\\b(export)(?!\\s*:)\\b",beginCaptures:{1:{name:"keyword.control.js"}},patterns:[{include:"#numbers"},{comment:"`{ member1 , member2 as alias2 , [...] }` inside re-export",begin:"\\{(?=.*\\bfrom\\b)",beginCaptures:{0:{name:"punctuation.definition.modules.begin.js"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.modules.end.js"}},patterns:[{comment:"(default|name) as alias",captures:{1:{name:"variable.language.default.js"},2:{name:"variable.other.module.js"},3:{name:"keyword.control.js"},4:{name:"variable.language.default.js"},5:{name:"invalid.illegal.js"},6:{name:"variable.other.module-alias.js"}},match:"(?x) (?: \\b(default)\\b | \\b([a-zA-Z_$][a-zA-Z_$0-9]*)\\b) \\s* (\\b as \\b) \\s* (?: \\b(default)\\b | (\\*) | \\b([a-zA-Z_$][a-zA-Z_$0-9]*)\\b)"},{match:",",name:"meta.delimiter.object.comma.js"},{include:"#comments"},{match:"\\b([a-zA-Z_$][a-zA-Z_$0-9]*)\\b",name:"variable.other.module.js"}]},{comment:"{ member1 , member2 as alias2 , [...] }",begin:"(?![a-zA-Z_$0-9])\\{",beginCaptures:{0:{name:"punctuation.definition.modules.begin.js"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.modules.end.js"}},patterns:[{comment:"name as (default|alias)",captures:{1:{name:"invalid.illegal.js"},2:{name:"variable.other.module.js"},3:{name:"keyword.control.js"},4:{name:"variable.language.default.js"},5:{name:"invalid.illegal.js"},6:{name:"variable.other.module-alias.js"}},match:"(?x) (?: \\b(default)\\b | \\b([a-zA-Z_$][a-zA-Z_$0-9]*)\\b) \\s* (\\b as \\b) \\s* (?: \\b(default)\\b | (\\*) | \\b([a-zA-Z_$][a-zA-Z_$0-9]*)\\b)"},{include:"#comments"},{match:",",name:"meta.delimiter.object.comma.js"},{match:"\\b([a-zA-Z_$][a-zA-Z_$0-9]*)\\b",name:"variable.other.module.js"}]},{match:"\\*(?=.*\\bfrom\\b)",name:"variable.language.import-all.js"},{match:"\\b(default)\\b",name:"variable.language.default.js"},{include:"#strings"},{include:"#comments"},{match:"\\b(from)\\b",name:"keyword.control.js"},{match:"\\b([a-zA-Z_$][a-zA-Z_$0-9]*)\\b",name:"variable.other.module.js"},{match:",",name:"meta.delimiter.object.comma.js"},{include:"#operators"}],end:"(?=;|\\bfunction\\b|\\bclass\\b|\\blet\\b|\\bvar\\b|\\bconst\\b|$)",name:"meta.export.js"},{match:"(?<!\\.)\\b(super|this)(?!\\s*:)\\b|(?<=\\?)(?:\\s*)(super|this)(?=\\s*:)",captures:{1:{name:"variable.language.js"},2:{name:"variable.language.js"}}},{begin:"(?=(\\basync\\b\\s*)?\\bfunction\\b)",end:"(?<=})",patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?<=\\))",name:"meta.function.js",patterns:[{include:"#function_innards"}]}]},{begin:"(?=(\\.)?[a-zA-Z_$][\\w$]*\\s*=\\s*(\\basync\\b\\s*)?\\bfunction\\b)",end:"(?<=})",patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?<=\\))",name:"meta.function.js",patterns:[{match:"(\\.)?([a-zA-Z_$][\\w$]*)\\s*(=)\\s*",captures:{1:{name:"meta.delimiter.method.period.js"},2:{name:"entity.name.function.js"},3:{name:"keyword.operator.assignment.js"}}},{include:"#function_innards"}]}]},{begin:"(?=\\b[a-zA-Z_$][\\w$]*\\s*:\\s*(\\basync\\b\\s*)?\\bfunction\\b)",end:"(?<=})",patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?<=\\))",name:"meta.function.json.js",patterns:[{match:"\\b([a-zA-Z_$][\\w$]*)\\s*(:)\\s*",captures:{1:{name:"entity.name.function.js"},2:{name:"keyword.operator.assignment.js"}}},{include:"#function_innards"}]}]},{begin:"(?=(('[^']*?')|(\"[^\"]*?\"))\\s*:\\s*(\\basync\\b\\s*)?\\bfunction\\b)",end:"(?<=})",patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?<=\\))",name:"meta.function.json.js",patterns:[{match:"(?:((')([^']*?)('))|((\")([^\"]*?)(\")))\\s*(:)",captures:{1:{name:"string.quoted.single.js"},2:{name:"punctuation.definition.string.begin.js"},3:{name:"entity.name.function.js"},4:{name:"punctuation.definition.string.end.js"},5:{name:"string.quoted.double.js"},6:{name:"punctuation.definition.string.begin.js"},7:{name:"entity.name.function.js"},8:{name:"punctuation.definition.string.end.js"},9:{name:"keyword.operator.assignment.js"}}},{include:"#function_innards"}]}]},{begin:"(?x)\n(?=\n  (?!\n    (break|case|catch|continue|do|else|finally|for|function|if|export|\n    import|package|return|switch|throw|try|while|with)\n    [\\s\\(]\n  )\n  \\b[a-zA-Z_$][\\w$]*\n  \\s*\\(\\s*\n     ((\"[^\"]*\")|(\\'[^\\']*\\')|((?!\"|\\'|\\(|\\)).))*\n  \\)\\s*\\{\n)",end:"(?<=})",patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?<=\\))",name:"meta.function.method.definition.js",patterns:[{match:"\\b([a-zA-Z_$][\\w$]*)",name:"entity.name.function.js"},{include:"#function_params"}]}]},{begin:"(?x)\n(?=\n  (?<![A-Za-z0-9])\n  ((\\(([^\\(\\)]*)?\\))|[\\w$]+)\n  \\s*=>\n)",end:"(?x)\n(?<=})|\n((?!\n  \\s*{|\n  \\G\\(|\n  \\G[\\w$]+|\n  \\s*/\\*|\\s*//\n)(?=\\s*\\S))",patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?<=(=>))",name:"meta.function.arrow.js",patterns:[{include:"#arrow_function_innards"}]}]},{begin:"(?x)\n(?=\n  (\\.)?[a-zA-Z_$][\\w$]*\n  \\s*(=)\\s*\n  ((\\(([^\\(\\)]*)?\\))|[\\w$]+)\n  \\s*=>\n)",end:"(?x)\n(?<=})|\n((?!\n  \\s*{|\n  \\G(\\.)?[a-zA-Z_$][\\w$]*\\s*(=)\\s*\\(|\n  \\G(\\.)?[a-zA-Z_$][\\w$]*\\s*(=)\\s*[\\w$]+|\n  \\s*/\\*|\\s*//\n)(?=\\s*\\S))",patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?<=(=>))",name:"meta.function.arrow.js",patterns:[{match:"\\G(\\.)?([a-zA-Z_$][\\w$]*)\\s*(=)",captures:{1:{name:"meta.delimiter.method.period.js"},2:{name:"entity.name.function.js"},3:{name:"keyword.operator.assignment.js"}}},{include:"#arrow_function_innards"}]}]},{begin:"(?x)\n(?=\n  \\b[a-zA-Z_$][\\w$]*\n  \\s*:\\s*\n  ((\\(([^\\(\\)]*)?\\))|[\\w$]+)\n  \\s*=>\n)",end:"(?x)\n(?<=})|\n((?!\n  \\s*{|\n  \\G[\\w$]+:|\n  \\s*/\\*|\\s*//\n)(?=\\s*\\S))",patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?<=(=>))",name:"meta.function.arrow.json.js",patterns:[{match:"\\b([a-zA-Z_$][\\w$]*)\\s*(:)\\s*",captures:{1:{name:"entity.name.function.js"},2:{name:"keyword.operator.assignment.js"}}},{include:"#arrow_function_innards"}]}]},{begin:"(?x)\n(?=\n  (('[^']*?')|(\"[^\"]*?\"))\n  \\s*:\\s*\n  ((\\(([^\\(\\)]*)?\\))|[\\w$]+)\n  \\s*=>\n)",end:"(?x)\n(?<=})|\n((?!\n  \\G(('[^']*?')|(\"[^\"]*?\"))|\n  \\s*{|\n  \\s*/\\*|\\s*//\n)(?=\\s*\\S))",patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?<=(=>))",name:"meta.function.arrow.json.js",patterns:[{match:"(?:((')([^']*?)('))|((\")([^\"]*?)(\")))\\s*(:)",captures:{1:{name:"string.quoted.single.js"},2:{name:"punctuation.definition.string.begin.js"},3:{name:"entity.name.function.js"},4:{name:"punctuation.definition.string.end.js"},5:{name:"string.quoted.double.js"},6:{name:"punctuation.definition.string.begin.js"},7:{name:"entity.name.function.js"},8:{name:"punctuation.definition.string.end.js"},9:{name:"keyword.operator.assignment.js"}}},{include:"#arrow_function_innards"}]}]},{match:"(=>)",captures:{0:{name:"meta.function.arrow.js"},1:{name:"storage.type.function.arrow.js"}}},{begin:"\\b(constructor)\\s*(?=\\()",beginCaptures:{1:{name:"entity.name.function.constructor.js"}},end:"(?<=\\})",patterns:[{include:"#function_params"}]},{match:"(?x)\n\\b(class)\n(?:\n  (?:\\s+(extends)\\s+([a-zA-Z_$][\\w$]*))\n  |\n  (?:\n    (?:\\s+([a-zA-Z_$][\\w$]*))\n    (?:\\s+(extends)\\s+([a-zA-Z_$][\\w$]*))?\n  )\n)",captures:{1:{name:"storage.type.class.js"},2:{name:"storage.modifier.js"},3:{name:"entity.name.type.js"},4:{name:"entity.name.type.js"},5:{name:"storage.modifier.js"},6:{name:"entity.name.type.js"}},name:"meta.class.js"},{captures:{1:{name:"keyword.operator.new.js"},2:{name:"entity.name.type.instance.js"}},match:"(new)\\s+(\\$?\\w+(?:\\.\\w*)?)",name:"meta.class.instance.constructor"},{begin:"\\bconsole\\b",beginCaptures:{0:{name:"entity.name.type.object.console.js"}},end:"(?!\\G)",patterns:[{begin:"\\s*(\\.)\\s*(assert|clear|debug|error|info|log|profile|profileEnd|time|timeEnd|warn)\\s*(?=\\()",beginCaptures:{1:{name:"meta.delimiter.method.period.js"},2:{name:"support.function.console.js"}},end:"(?<=\\))",name:"meta.method-call.js",patterns:[{include:"#arguments"}]}]},{include:"#strings"},{include:"#comments"},{captures:{0:{name:"punctuation.definition.comment.html.js"},2:{name:"punctuation.definition.comment.html.js"}},match:"(<!--|-->)",name:"comment.block.html.js"},{match:"(?<!\\.)\\b(class|enum|function|interface)(?!\\s*:)\\b",name:"storage.type.js"},{match:"(?<!\\.)\\b(async|export|extends|implements|private|protected|public|static)(?!\\s*:)\\b",name:"storage.modifier.js"},{match:"(?<!\\.)\\b(let|var)(?!\\s*:)\\b",name:"storage.type.var.js"},{begin:"(?<!\\.)\\b(const)(?!\\s*:)\\b",beginCaptures:{1:{name:"storage.modifier.js"}},end:"(\\bof\\b|\\bin\\b)|(;)|(=)|(?<!,)\\n",endCaptures:{1:{name:"keyword.operator.$1.js"},2:{name:"punctuation.terminator.statement.js"},3:{name:"keyword.operator.assignment.js"}},patterns:[{match:"([$_a-zA-Z][$_a-zA-Z0-9]*)\\s*(:)\\s*([$_a-zA-Z][$_a-zA-Z0-9]*)?",captures:{2:{name:"keyword.operator.assignment.js"},3:{name:"constant.other.js"}}},{match:"([$_a-zA-Z][$_a-zA-Z0-9]*)",captures:{1:{name:"constant.other.js"}}},{match:"\\.\\.\\.",name:"keyword.operator.spread.js"},{match:",",name:"meta.delimiter.object.comma.js"},{match:"\\(|\\)",name:"meta.brace.round.js"},{match:"{|}",name:"meta.brace.curly.js"},{match:"\\[|\\]",name:"meta.brace.square.js"},{include:"#comments"}]},{match:"(?<!\\.)\\b(yield)(?!\\s*:)\\b(?:\\s*(\\*))?|(?<=\\?)(?:\\s*)(yield)(?=\\s*:)",captures:{1:{name:"keyword.control.js"},2:{name:"storage.modifier.js"},3:{name:"keyword.control.js"},4:{name:"storage.modifier.js"}},name:"meta.control.yield.js"},{match:"(?<!\\.)\\b(await|break|case|catch|continue|do|else|finally|for|if|import|from|package|return|switch|throw|try|while|with)(?!\\s*:)\\b",name:"keyword.control.js"},{match:"(?<!\\.)\\b(default)\\b",name:"keyword.control.js"},{match:"(?<!\\.)\\b(delete|in|of|instanceof|new|typeof|void)(?!\\s*:)\\b",name:"keyword.operator.$1.js"},{match:"\\.\\.\\.",name:"keyword.operator.spread.js"},{match:"(?<!\\.)\\b(true|false)(?!\\s*:)\\b|(?<=\\?)(?:\\s*)(true|false)(?=\\s*:)",captures:{1:{name:"constant.language.boolean.$1.js"},2:{name:"constant.language.boolean.$2.js"}}},{match:"(?<!\\.)\\b(null)(?!\\s*:)\\b|(?<=\\?)(?:\\s*)(null)(?=\\s*:)",captures:{1:{name:"constant.language.null.js"},2:{name:"constant.language.null.js"}}},{match:"(?<!\\.)\\b([A-Z][A-Z0-9_]+)(?!\\s*:)\\b|(?<=\\?)(?:\\s*)([A-Z][A-Z0-9_]+)(?=\\s*:)",captures:{1:{name:"constant.other.js"},2:{name:"constant.other.js"}}},{match:"(?<!\\.)\\b(debugger)(?!\\s*:)\\b|(?<=\\?)(?:\\s*)(debugger)(?=\\s*:)",captures:{1:{name:"keyword.other.js"},2:{name:"keyword.other.js"}}},{match:"(?<!\\$)\\b(Anchor|Applet|Area|Array|Boolean|Button|Checkbox|Date|document|event|FileUpload|Form|Frame|Function|Hidden|History|Image|JavaArray|JavaClass|JavaObject|JavaPackage|java|Layer|Link|Location|Map|Math|MimeType|Number|navigator|netscape|Object|Option|Packages|Password|Plugin|Radio|RegExp|Reset|Select|Set|String|Style|Submit|Symbol|screen|sun|Text|Textarea|WeakMap|WeakSet|window|XMLHttpRequest)\\b",name:"support.class.js"},{match:"(\\.)(systemLanguage|scripts|scrollbars|screenX|screenY|screenTop|screenLeft|style|styleSheets|status|statusText|statusbar|siblingBelow|siblingAbove|source|suffixes|security|securityPolicy|selection|self|history|host|hostname|hash|hasFocus|XMLDocument|XSLDocument|next|namespaces|namespaceURI|nameProp|MIN_VALUE|MAX_VALUE|characterSet|constructor|controllers|cookieEnabled|colorDepth|components|complete|current|cpuClass|clip|clipBoardData|clientInformation|closed|classes|callee|caller|crypto|toolbar|top|textTransform|textIndent|textDecoration|textAlign|tags|SQRT1_2|SQRT2|innerHeight|innerWidth|input|ids|ignoreCase|zIndex|oscpu|onreadystatechange|onLine|outerHeight|outerWidth|opsProfile|opener|offscreenBuffering|NEGATIVE_INFINITY|display|dialogHeight|dialogTop|dialogWidth|dialogLeft|dialogArguments|directories|description|defaultStatus|defaultChecked|defaultCharset|defaultView|userProfile|userLanguage|userAgent|uniqueID|undefined|updateInterval|_content|pixelDepth|port|personalbar|pkcs11|plugins|platform|pathname|paddingRight|paddingBottom|paddingTop|paddingLeft|parent|parentWindow|parentLayer|pageX|pageXOffset|pageY|pageYOffset|protocol|prototype|product|productSub|prompter|previous|prefix|encoding|enabledPlugin|external|expando|embeds|visiblity|vendor|vendorSub|vLinkcolor|URLUnencoded|PI|POSITIVE_INFINITY|filename|fontSize|fontFamily|fontWeight|formName|frames|frameElement|fgColor|E|whiteSpace|listStyleType|lineHeight|linkColor|location|locationbar|localName|lowsrc|length|left|leftContext|lastModified|lastMatch|lastIndex|lastParen|layers|layerX|language|appMinorVersion|appName|appCodeName|appCore|appVersion|availHeight|availTop|availWidth|availLeft|all|arity|arguments|aLinkcolor|above|right|rightContext|responseXML|responeText|readyState|global|x|y|z|mimeTypes|multiline|menubar|marginRight|marginBottom|marginTop|marginLeft|LN10|LN2|LOG10E|LOG2E|bottom|border(Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth)|bufferDepth|below|backgroundColor|backgroundImage)\\b",captures:{1:{name:"meta.delimiter.property.period.js"},2:{name:"support.constant.js"}}},{match:"(\\.)(shape|systemId|scheme|scope|scrolling|standby|start|size|summary|specified|sectionRowIndex|selected|selectedIndex|hspace|httpEquiv|htmlFor|height|headers|href|hreflang|noResize|notations|notationName|noShade|noHref|nodeName|nodeType|nodeValue|noWrap|nextSibling|name|ch|childNodes|chOff|checked|charset|cite|content|cookie|cords|code|codeBase|codeType|cols|colSpan|color|compact|cells|cellSpacing|cellPadding|clear|className|caption|type|tBodies|title|tHead|text|target|tagName|tFoot|isMap|index|id|implementation|images|options|ownerDocument|object|disabled|dir|doctype|documentElement|docmain|declare|defer|defaultSelected|defaultChecked|defaultValue|dateTime|data|useMap|publicId|parentNode|profile|profileend|prompt|previousDibling|enctype|entities|event|elements|vspace|version|value|valueType|vLink|vAlign|URL|firstChild|form|forms|face|frame|frameBorder|width|link|links|longDesc|lowSrc|lastChild|lang|label|anchors|accessKey|accept|acceptCharset|action|attributes|applets|alt|align|archive|areas|axis|aLink|abbr|rows|rowSpan|rowIndex|rules|rev|referrer|rel|readOnly|multiple|method|media|marginHeight|marginWidth|maxLength|body|border|background|bgColor)\\b",captures:{1:{name:"meta.delimiter.property.period.js"},2:{name:"support.constant.dom.js"}}},{match:"\\b(ELEMENT_NODE|ATTRIBUTE_NODE|TEXT_NODE|CDATA_SECTION_NODE|ENTITY_REFERENCE_NODE|ENTITY_NODE|PROCESSING_INSTRUCTION_NODE|COMMENT_NODE|DOCUMENT_NODE|DOCUMENT_TYPE_NODE|DOCUMENT_FRAGMENT_NODE|NOTATION_NODE|INDEX_SIZE_ERR|DOMSTRING_SIZE_ERR|HIERARCHY_REQUEST_ERR|WRONG_DOCUMENT_ERR|INVALID_CHARACTER_ERR|NO_DATA_ALLOWED_ERR|NO_MODIFICATION_ALLOWED_ERR|NOT_FOUND_ERR|NOT_SUPPORTED_ERR|INUSE_ATTRIBUTE_ERR)\\b",name:"support.constant.dom.js"},{match:"(?<!\\.)\\b(module|exports|__filename|__dirname|global|process)(?!\\s*:)\\b|(?<=\\?)(?:\\s*)(module|exports|__filename|__dirname|global|process)(?=\\s*:)",captures:{1:{name:"support.variable.js"},2:{name:"support.variable.js"}}},{match:"\\b(Infinity|NaN|undefined)\\b",name:"constant.language.js"},{begin:"(?<=[\\[=(?:+,!]|^|return|=>|&&|\\|\\|)\\s*(/)(?![/*+{}?])(?=.*/)",beginCaptures:{1:{name:"punctuation.definition.string.begin.js"}},end:"(/)[gimuy]*",endCaptures:{1:{name:"punctuation.definition.string.end.js"}},name:"string.regexp.js",patterns:[{include:"source.js.regexp"}]},{include:"#operators"},{include:"#method_calls"},{include:"#function_calls"},{include:"#numbers"},{include:"#object_variable"},{include:"#properties"},{match:"(?<!\\$)\\b[0-9]+[\\w$]*",name:"invalid.illegal.identifier.js"},{match:"\\;",name:"punctuation.terminator.statement.js"},{match:",",name:"meta.delimiter.object.comma.js"},{match:"\\.",name:"meta.delimiter.method.period.js"},{captures:{1:{name:"punctuation.section.scope.begin.js"},2:{name:"punctuation.section.scope.end.js"}},comment:"Allows the special return snippet to fire.",match:"({)(})"},{begin:"{",beginCaptures:{0:{name:"meta.brace.curly.js"}},end:"}",endCaptures:{0:{name:"meta.brace.curly.js"}},patterns:[{include:"$self"}]},{begin:"\\(",beginCaptures:{0:{name:"meta.brace.round.js"}},end:"\\)",endCaptures:{0:{name:"meta.brace.round.js"}},patterns:[{include:"$self"}]},{match:"\\[|\\]",name:"meta.brace.square.js"},{match:"\\A#!.*$",name:"comment.line.shebang.js"}],repository:{numbers:{patterns:[{match:"\\b(?<!\\$)0(x|X)[0-9a-fA-F]+\\b(?!\\$)",name:"constant.numeric.hex.js"},{match:"\\b(?<!\\$)0(b|B)[01]+\\b(?!\\$)",name:"constant.numeric.binary.js"},{match:"\\b(?<!\\$)0(o|O)?[0-7]+\\b(?!\\$)",name:"constant.numeric.octal.js"},{match:"(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+(\\.)[eE][+-]?[0-9]+\\b)|       # 1.E+3\n  (?:\\B(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|       # .1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+(\\.)\\B)|                      # 1.\n  (?:\\B(\\.)[0-9]+\\b)|                      # .1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)",captures:{0:{name:"constant.numeric.decimal.js"},1:{name:"meta.delimiter.decimal.period.js"},2:{name:"meta.delimiter.decimal.period.js"},3:{name:"meta.delimiter.decimal.period.js"},4:{name:"meta.delimiter.decimal.period.js"},5:{name:"meta.delimiter.decimal.period.js"},6:{name:"meta.delimiter.decimal.period.js"}}}]},operators:{patterns:[{match:"%=|\\+=|-=|\\*=|(?<!\\()/=",name:"keyword.operator.assignment.compound.js"},{match:"&=|\\^=|<<=|>>=|>>>=|\\|=",name:"keyword.operator.assignment.compound.bitwise.js"},{match:"!==|!=|<=|>=|===|==|<|>",name:"keyword.operator.comparison.js"},{match:"&&|!|\\|\\|",name:"keyword.operator.logical.js"},{match:"&|\\||\\^|~",name:"keyword.operator.bitwise.js"},{match:"\\?|:",name:"keyword.operator.js"},{match:"=",name:"keyword.operator.assignment.js"},{match:"--",name:"keyword.operator.decrement.js"},{match:"\\+\\+",name:"keyword.operator.increment.js"},{match:"%|\\*|/|-|\\+",name:"keyword.operator.js"}]},strings:{patterns:[{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.js"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.js"}},name:"string.quoted.single.js",patterns:[{match:"\\\\(x\\h{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)",name:"constant.character.escape.js"},{match:"[^']*[^\\n\\r'\\\\]$",name:"invalid.illegal.string.js"}]},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.js"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.js"}},name:"string.quoted.double.js",patterns:[{match:"\\\\(x\\h{2}|[0-2][0-7]{0,2}|3[0-6][0-7]|37[0-7]?|[4-7][0-7]?|.)",name:"constant.character.escape.js"},{match:'[^"]*[^\\n\\r"\\\\]$',name:"invalid.illegal.string.js"}]},{begin:"((\\w+)?(html|HTML|Html))\\s*(`)",beginCaptures:{1:{name:"entity.name.function.js"},4:{name:"punctuation.definition.string.begin.js"}},end:"`",endCaptures:{0:{name:"punctuation.definition.string.end.js"}},name:"string.quoted.template.html.js",patterns:[{match:"\\\\(x\\h{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)",name:"constant.character.escape.js"},{include:"#interpolated_js"},{include:"text.html.basic"}]},{begin:"((\\w+)?(css|CSS|Css))\\s*(`)",beginCaptures:{1:{name:"entity.name.function.js"},4:{name:"punctuation.definition.string.begin.js"}},end:"`",endCaptures:{0:{name:"punctuation.definition.string.end.js"}},name:"string.quoted.template.css.js",patterns:[{match:"\\\\(x\\h{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)",name:"constant.character.escape.js"},{include:"#interpolated_js"},{include:"source.css"}]},{begin:"`",beginCaptures:{0:{name:"punctuation.definition.string.begin.js"}},end:"`",endCaptures:{0:{name:"punctuation.definition.string.end.js"}},name:"string.quoted.template.js",patterns:[{match:"\\\\(x\\h{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)",name:"constant.character.escape.js"},{include:"#interpolated_js"}]}]},function_params:{patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.parameters.begin.bracket.round.js"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.parameters.end.bracket.round.js"}},name:"meta.parameters.js",patterns:[{match:"(\\.\\.\\.)([a-zA-Z_$][\\w$]*)",captures:{1:{name:"keyword.operator.spread.js"},2:{name:"variable.parameter.rest.function.js"}}},{include:"$self"},{match:"[a-zA-Z_$][\\w$]*",name:"variable.parameter.function.js"}]}]},function_body:{patterns:[{begin:"{",beginCaptures:{0:{name:"punctuation.definition.function.body.begin.bracket.curly.js"}},end:"}",endCaptures:{0:{name:"punctuation.definition.function.body.end.bracket.curly.js"}},patterns:[{include:"$self"}]}]},function_innards:{patterns:[{match:"(?:\\b(async)\\b\\s*)?\\b(function)\\b(?:\\s*(\\*))?",captures:{1:{name:"storage.modifier.async.js"},2:{name:"storage.type.function.js"},3:{name:"storage.modifier.generator.js"}}},{match:"[a-zA-Z_$][\\w$]*(?=\\s*\\()",name:"entity.name.function.js"},{include:"#function_params"},{include:"#comments"}]},arrow_function_innards:{patterns:[{match:"=>",name:"storage.type.function.arrow.js"},{include:"#function_params"},{match:"([a-zA-Z_$][\\w$]*)(?=\\s*=>)",captures:{0:{name:"meta.parameters.js"},1:{name:"variable.parameter.function.js"}}},{match:"(\\d[\\w$]*)",captures:{0:{name:"meta.parameters.js"},1:{name:"invalid.illegal.identifier.js"}}}]},arguments:{patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.arguments.begin.bracket.round.js"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.arguments.end.bracket.round.js"}},name:"meta.arguments.js",patterns:[{include:"$self"}]}]},method_calls:{patterns:[{begin:"(\\.)\\s*([\\w$]+)\\s*(?=\\()",beginCaptures:{1:{name:"meta.delimiter.method.period.js"},2:{patterns:[{match:"(?x)\n\\bon(Rowsinserted|Rowsdelete|Rowenter|Rowexit|Resize|Resizestart|Resizeend|Reset|\nReadystatechange|Mouseout|Mouseover|Mousedown|Mouseup|Mousemove|\nBefore(cut|deactivate|unload|update|paste|print|editfocus|activate)|\nBlur|Scrolltop|Submit|Select|Selectstart|Selectionchange|Hover|Help|\nChange|Contextmenu|Controlselect|Cut|Cellchange|Clock|Close|Deactivate|\nDatasetchanged|Datasetcomplete|Dataavailable|Drop|Drag|Dragstart|Dragover|\nDragdrop|Dragenter|Dragend|Dragleave|Dblclick|Unload|Paste|Propertychange|Error|\nErrorupdate|Keydown|Keyup|Keypress|Focus|Load|Activate|Afterupdate|Afterprint|Abort)\\b",name:"support.function.event-handler.js"},{match:"(?x)\n\\b(shift|showModelessDialog|showModalDialog|showHelp|scroll|scrollX|scrollByPages|\nscrollByLines|scrollY|scrollTo|stop|strike|sin|sizeToContent|sidebar|signText|sort|\nsup|sub|substr|substring|splice|split|send|set(Milliseconds|Seconds|Minutes|Hours|\nMonth|Year|FullYear|Date|UTC(Milliseconds|Seconds|Minutes|Hours|Month|FullYear|Date)|\nTime|Hotkeys|Cursor|ZOptions|Active|Resizable|RequestHeader)|search|sqrt|slice|\nsavePreferences|small|home|handleEvent|navigate|char|charCodeAt|charAt|cos|concat|\ncontextual|confirm|compile|ceil|clear|captureEvents|call|createStyleSheet|createPopup|\ncreateEventObject|to(GMTString|UTCString|String|Source|UpperCase|LowerCase|LocaleString)|\ntest|tan|taint|taintEnabled|indexOf|italics|disableExternalCapture|dump|detachEvent|unshift|\nuntaint|unwatch|updateCommands|join|javaEnabled|pop|pow|push|plugins.refresh|paddings|parse|\nprint|prompt|preference|enableExternalCapture|elementFromPoint|exp|exec|execScript|\nexecCommand|valueOf|UTC|queryCommandState|queryCommandIndeterm|queryCommandEnabled|\nqueryCommandValue|find|file|fileModifiedDate|fileSize|fileCreatedDate|fileUpdatedDate|\nfixed|fontsize|fontcolor|forward|floor|fromCharCode|watch|link|load|log|lastIndexOf|\nasin|anchor|acos|attachEvent|atob|atan|atan2|apply|alert|abs|abort|round|routeEvents|\nresize|resizeBy|resizeTo|recalc|returnValue|replace|reverse|reload|releaseCapture|\nreleaseEvents|random|go|get(Milliseconds|Seconds|Minutes|Hours|Month|Day|Year|FullYear|\nTime|Date|TimezoneOffset|UTC(Milliseconds|Seconds|Minutes|Hours|Day|Month|FullYear|Date)|\nAttention|Selection|ResponseHeader|AllResponseHeaders)|min|moveBy|moveBelow|moveTo|\nmoveToAbsolute|moveAbove|mergeAttributes|match|margins|max|btoa|big|bold|borderWidths|blink|back)\\b",name:"support.function.js"},{match:"(?x)\n\\b(substringData|submit|splitText|setNamedItem|setAttribute|setAttributeNode|select|\nhasChildNodes|hasFeature|namedItem|click|close|cloneNode|createComment|createCDATASection|\ncreateCaption|createTHead|createTextNode|createTFoot|createDocumentFragment|\ncreateProcessingInstruction|createEntityReference|createElement|createAttribute|\ntabIndex|insertRow|insertBefore|insertCell|insertData|item|open|deleteRow|deleteCell|\ndeleteCaption|deleteTHead|deleteTFoot|deleteData|focus|write|writeln|add|appendChild|\nappendData|reset|replaceChild|replaceData|move|moveNamedItem|moveChild|moveAttribute|\nmoveAttributeNode|getNamedItem|getElementsByName|getElementsByTagName|getElementById|\ngetAttribute|getAttributeNode|blur)\\b",name:"support.function.dom.js"},{match:"[a-zA-Z_$][\\w$]*",name:"entity.name.function.js"},{match:"\\d[\\w$]*",name:"invalid.illegal.identifier.js"}]}},end:"(?<=\\))",name:"meta.method-call.js",patterns:[{include:"#arguments"}]}]},function_calls:{patterns:[{begin:"([\\w$]+)\\s*(?=\\()",beginCaptures:{1:{patterns:[{match:"(?x)\n\\b(isNaN|isFinite|eval|uneval|parseInt|parseFloat|decodeURI|\ndecodeURIComponent|encodeURI|encodeURIComponent|escape|unescape|\nrequire|set(Interval|Timeout)|clear(Interval|Timeout))\\b",name:"support.function.js"},{match:"[a-zA-Z_$][\\w$]*",name:"entity.name.function.js"},{match:"\\d[\\w$]*",name:"invalid.illegal.identifier.js"}]}},end:"(?<=\\))",name:"meta.function-call.js",patterns:[{include:"#arguments"}]}]},object_variable:{patterns:[{comment:"`obj` in `obj.prop`, `obj.methodCall()`",match:"(?:([a-zA-Z_$][\\w$]*)|(\\d\\w*))(?=\\s*\\.\\s*[a-zA-Z_$]\\w*)",captures:{1:{name:"variable.other.object.js"},2:{name:"invalid.illegal.identifier.js"}}}]},properties:{patterns:[{comment:"`prop` in `obj.prop`, `func().prop`",match:"(\\.)\\s*(?:([0-9]+[\\w$]*)|([A-Z][A-Z0-9_$]*\\b\\$*)|(\\$*[a-zA-Z_$][\\w$]*))",captures:{1:{name:"meta.delimiter.property.period.js"},2:{name:"invalid.illegal.identifier.js"},3:{name:"constant.other.property.js"},4:{name:"variable.other.property.js"}}}]},interpolated_js:{patterns:[{begin:"\\$\\{",captures:{0:{name:"punctuation.section.embedded.js"}},end:"\\}",name:"source.js.embedded.source",patterns:[{begin:"{",beginCaptures:{0:{name:"meta.brace.curly.js"}},end:"}",endCaptures:{0:{name:"meta.brace.curly.js"}},patterns:[{include:"$self"}]},{include:"$self"}]}]},docblock:{patterns:[{match:"(?<!\\w)@(abstract|access|alias|augments|author|async|attribute|arg|argument|beta|borrows|bubbes|callback|class|classdesc|config|const|constant|constructs|constructor|copyright|chainable|default|defaultvalue|deprecated|desc|description|enum|emits|event|example|exports|external|extends|extension|extensionfor|extension_for|for|file|fileoverview|fires|final|function|global|host|ignore|implements|inheritdoc|inner|instance|interface|kind|lends|license|listens|main|member|memberof|method|mixex|mixin(?:s|)|module|name|namespace|override|overview|param|private|prop|property|protected|readonly|readOnly|requires|required|return|returns|see|since|static|summary|submodule|this|throws|todo|tutorial|type|typedef|var|variation|version|virtual|uses|writeOnce)\\b",name:"storage.type.class.jsdoc"},{match:"({\\b(?:[a-zA-Z_$][a-zA-Z_$0-9]*)\\b})\\s\\b([a-zA-Z_$][a-zA-Z_$0-9]*)\\b\\s*((?:(?!\\*\\/).)*)",captures:{0:{name:"other.meta.jsdoc"},1:{name:"entity.name.type.instance.jsdoc"},2:{name:"variable.other.jsdoc"},3:{name:"other.description.jsdoc"}}}]},comments:{patterns:[{begin:"/\\*\\*(?!/)",captures:{0:{name:"punctuation.definition.comment.js"}},patterns:[{include:"#docblock"}],end:"\\*/",name:"comment.block.documentation.js"},{begin:"/\\*",captures:{0:{name:"punctuation.definition.comment.js"}},end:"\\*/",name:"comment.block.js"},{begin:"(^[ \\t]+)?(?=//)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.js"}},end:"(?!\\G)",patterns:[{begin:"//",beginCaptures:{0:{name:"punctuation.definition.comment.js"}},end:"\\n",name:"comment.line.double-slash.js"}]}]}}});
$rmod.def("/src/atom-grammars/marko.cson",{fileTypes:["marko"],name:"Marko",patterns:[{include:"#comment-concise"},{include:"#comment-html"},{include:"#html-block-concise"},{include:"#html-line-concise"},{include:"#cdata"},{include:"#doctype"},{include:"#tag-script-concise"},{include:"#tag-style-concise"},{include:"#tag-concise"},{include:"#tag-html"},{include:"#placeholder-patterns"},{include:"#scriptlet"}],repository:{"attr-stuff":{patterns:[{begin:"\\s[\\[]",end:"[\\]]",patterns:[{include:"#attr-stuff"}]},{captures:{1:{name:"support.function.marko-attribute"}},match:"\\s(for|if|else-if|unless)(?=([(]))"},{captures:{1:{name:"support.function.marko-attribute"}},match:"\\s(else|w-[a-zA-Z0-9:_-]+|marko-[a-zA-Z0-9:_.-]+)(?=(\\s|$|[>(]|/>))"},{captures:{1:{name:"support.function.marko-attribute"}},match:"\\s(w-[a-zA-Z0-9:_-]+|lasso-[a-zA-Z0-9:_.-]+)(?=(\\s|$|[>(=]|/>))"},{captures:{1:{name:"entity.other.attribute-name.html"}},match:"\\s([a-zA-Z0-9:_.][a-zA-Z0-9:_.-]*)"},{captures:{0:{name:"punctuation.separator.key-value.html"}},match:"[=]"},{include:"#expression-common"},{include:"#expression-operator-no-gt"},{include:"#placeholder"}]},cdata:{begin:"<!\\[CDATA\\[",beginCaptures:{0:{name:"punctuation.definition.string.begin.xml"}},end:"]]>",endCaptures:{0:{name:"punctuation.definition.string.end.xml"}},name:"string.unquoted.cdata.xml"},"comment-concise":{begin:"^(\\s*)//",comment:"Single line comment (concise)",end:"$",name:"comment.line.double-slash.marko"},"comment-html":{begin:"\\s*<!--",captures:{0:{name:"punctuation.definition.comment.html"}},end:"-->",name:"comment.block.html"},doctype:{begin:"<!",captures:{0:{name:"punctuation.definition.tag.html"}},end:">",name:"meta.tag.sgml.html",patterns:[{begin:"(?i:DOCTYPE)",captures:{1:{name:"entity.name.tag.doctype.html"}},end:"(?=>)",name:"meta.tag.sgml.doctype.html",patterns:[{match:'"[^">]*"',name:"string.quoted.double.doctype.identifiers-and-DTDs.html"}]}]},expression:{comment:"A JavaScript expression",patterns:[{include:"#expression-common"},{include:"#expression-operator"}]},"expression-common":{comment:"A JavaScript expression",patterns:[{include:"#expression-string-single"},{include:"#expression-string-double"},{include:"#expression-group-parens"},{include:"#expression-group-brackets"},{include:"#expression-group-braces"},{include:"#expression-constant"},{include:"#expression-hex"},{include:"#expression-numeric"},{include:"#expression-special-class"},{include:"#expression-special-operator"}]},"expression-constant":{captures:{1:{name:"constant.language.boolean.true.js"},2:{name:"constant.language.boolean.false.js"},3:{name:"constant.language.infinity.js"},4:{name:"constant.language.nan.js"},5:{name:"constant.language.null.js"},6:{name:"constant.language.undefined.js"}},match:"(true)|(false)|(Infinity)|(NaN)|(null)|(undefined)"},"expression-group-braces":{begin:"\\[",beginCaptures:{0:{name:"meta.brace.curly.js"}},end:"\\]",endCaptures:{0:{name:"meta.brace.curly.js"}},patterns:[{include:"#expression"}]},"expression-group-brackets":{begin:"\\[",beginCaptures:{0:{name:"meta.brace.square.js"}},end:"\\]",endCaptures:{0:{name:"meta.brace.square.js"}},patterns:[{include:"#expression"}]},"expression-group-parens":{begin:"\\(",beginCaptures:{0:{name:"meta.brace.round.js"}},end:"\\)",endCaptures:{0:{name:"meta.brace.round.js"}},patterns:[{include:"#expression"}]},"expression-hex":{match:"\\b0[xX]\\h+\\b",name:"constant.numeric.hex.js"},"expression-numeric":{match:"(?x)\n				(?<!\\w)									# Ensure word boundry\n				(?>\n					(\n						(0|[1-9][0-9]*)(\\.[0-9]*)?		# 0 or 1 or 1. or 1.0\n					  | \\.[0-9]+						# .1\n					)\n					([eE][+-]?[0-9]+)?					# Exponent\n				)\n				(?!\\w)									# Ensure word boundry\n",name:"constant.numeric.js"},"expression-operator":{match:"!|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|(?<!\\()/=|%=|\\+=|\\-=|&=|\\^=",name:"keyword.operator.js"},"expression-operator-no-gt":{match:"!|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|<<=|<>|<|!|&&|\\|\\||\\?\\:|\\*=|(?<!\\()/=|%=|\\+=|\\-=|&=|\\^=",name:"keyword.operator.js"},"expression-special-class":{match:"(?<!\\.|\\$)\\b(Array|Boolean|Date|Error|EvalError|Function|Number|Object|RangeError|ReferenceError|RegExp|String|SyntaxError|TypeError|URIError)\\b(?!\\$)",name:"support.class.js"},"expression-special-operator":{match:"(?<!\\.|\\$)\\b(delete|in|instanceof|new|typeof|void|with)\\b(?!\\$)",name:"keyword.operator.js"},"expression-string-double":{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.js"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.js"}},name:"string.quoted.double.js",patterns:[{match:"\\\\(x\\h{2}|[0-2][0-7]{0,2}|3[0-6][0-7]|37[0-7]?|[4-7][0-7]?|.)",name:"constant.character.escape.js"},{include:"#placeholder-patterns"}]},"expression-string-single":{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.js"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.js"}},name:"string.quoted.single.js",patterns:[{match:"\\\\(x\\h{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)",name:"constant.character.escape.js"},{include:"#placeholder-patterns"}]},"expression-ternary-if":{begin:"\\?",end:":",name:"meta.ternary-if.js",patterns:[{include:"$self"}]},"html-block-concise":{begin:"(\\s*-[-]+)",captures:{1:{name:"punctuation.separator"}},end:"(\\1)[.]*$",name:"meta.section.marko-html-block",patterns:[{include:"#cdata"},{include:"#tag-html"},{include:"#comment-html"},{include:"#placeholder-patterns"}]},"html-line-concise":{begin:"\\s*(-)",beginCaptures:{1:{name:"punctuation.separator"}},end:"$",patterns:[{include:"#cdata"},{include:"#tag-html"},{include:"#comment-html"},{include:"#placeholder-patterns"}]},"open-tag-end":{begin:">",comment:"Concise style tag with CSS code.",end:"(?=</)",patterns:[{include:"#cdata"},{include:"#comment-html"},{include:"#tag-html"},{include:"#placeholder-patterns"},{include:"#scriptlet"}]},"open-tag-end-script":{begin:">",comment:"Concise style tag with CSS code.",end:"(?=</)",patterns:[{include:"#placeholder-patterns"},{include:"source.js"}]},"open-tag-end-style":{begin:">",comment:"Concise style tag with CSS code.",end:"(?=</)",patterns:[{include:"#placeholder-patterns"},{include:"source.css"}]},placeholder:{begin:"[$][!]?\\{",captures:{0:{name:"keyword.operator.js"}},comment:"${ } placeholder note: should be punctuation.section.embedded.js",end:"\\}",name:"meta.section.marko-placeholder",patterns:[{include:"#expression"}]},"placeholder-escaped":{comment:"\\${",match:"\\\\[$][!]?[{]"},"placeholder-escaped-escaped":{comment:"\\\\${",match:"\\\\\\\\(?=[$][!]?[{])"},"placeholder-patterns":{patterns:[{include:"#placeholder-escaped-escaped"},{include:"#placeholder-escaped"},{include:"#placeholder"}]},scriptlet:{begin:"<%",captures:{0:{name:"keyword.operator.scriptlet.marko"}},comment:"Scriptlet block",end:"%>",patterns:[{include:"source.js"}]},"self-closed-end":{begin:">",comment:"Concise style tag with CSS code.",end:"(?=</)",patterns:[{include:"#tag-custom-html"},{include:"#tag-html"}]},"tag-concise":{patterns:[{include:"#tag-name-custom-concise"},{include:"#tag-name-concise"}]},"tag-html":{comment:"HTML tag within the non-concise syntax",patterns:[{include:"#tag-name-open-tag-only-html"},{include:"#tag-name-script-html"},{include:"#tag-name-style-html"},{include:"#tag-name-shorthand-no-tag-name-html"},{include:"#tag-name-shorthand-html"},{include:"#tag-name-custom-html"},{include:"#tag-name-html"}]},"tag-name-concise":{begin:"^\\s*([a-zA-Z0-9_.#-]+)(?=(\\s|$|\\())",beginCaptures:{1:{name:"entity.name.tag"}},comment:"A concise tag name",end:"$",patterns:[{include:"#html-line-concise"},{include:"#attr-stuff"}]},"tag-name-custom-concise":{begin:"^\\s*(for|if|unless|else-if|else|var|assign|macro|invoke|include|app|[#.][a-zA-Z0-9_#.-]+|[a-zA-Z0-9_#.]+([:-])[a-zA-Z0-9_:-]+)(?=(\\s|$|[(]))",beginCaptures:{1:{name:"support.function.marko-tag"}},comment:"A concise custom tag name",end:"$",patterns:[{include:"#html-line-concise"},{include:"#attr-stuff"}]},"tag-name-custom-html":{begin:"<(for|if|unless|else-if|else|var|assign|macro|invoke|include|app|[a-zA-Z0-9_]+[-:][a-zA-Z0-9\\-_:]+)(?=(>|/>|\\s|\\())",beginCaptures:{1:{name:"support.function.marko-tag"}},comment:"The beginning of a custom/special HTML tag",end:"</(\\1)>|</>|/>",endCaptures:{1:{name:"support.function.marko-tag"}},patterns:[{include:"#attr-stuff"},{include:"#open-tag-end"}]},"tag-name-html":{begin:"<([a-zA-Z0-9]+)(?=(>|/>|\\s|\\())",beginCaptures:{1:{name:"entity.name.tag"}},comment:"The beginning of a regular HTML tag in non-concise mode",end:"</(\\1)>|</>|/>",endCaptures:{1:{name:"entity.name.tag"}},patterns:[{include:"#attr-stuff"},{include:"#open-tag-end"}]},"tag-name-open-tag-only-html":{begin:"<(base|br|col|hr|embed|img|input|keygen|link|meta|param|source|track|wbr|lasso-img)(?=(>|/>|\\s|\\())",beginCaptures:{1:{name:"entity.name.tag"}},comment:"HTML tags that are open tag only",end:">|/>",endCaptures:{1:{name:"entity.name.tag"}},patterns:[{include:"#attr-stuff"}]},"tag-name-script-html":{begin:"<(script)(?=(>|/>|\\s|\\())",beginCaptures:{1:{name:"entity.name.tag.script"}},comment:"HTML style tag",end:"</(script)>|</>|/>",endCaptures:{1:{name:"entity.name.tag.script"}},patterns:[{include:"#attr-stuff"},{include:"#open-tag-end-script"}]},"tag-name-shorthand-html":{begin:"<(([a-zA-Z0-9_-]+)[#.][a-zA-Z0-9_#.:-]+)(?=(>|/>|\\s|\\())",beginCaptures:{1:{name:"support.function.marko-tag"}},comment:"HTML style tag",end:"</(\\1)>|</(\\2)>|</>|/>",endCaptures:{1:{name:"support.function.marko-tag"},2:{name:"support.function.marko-tag"}},patterns:[{include:"#attr-stuff"},{include:"#open-tag-end"}]},"tag-name-shorthand-no-tag-name-html":{begin:"<([#.][a-zA-Z0-9_#.:-]+)(?=(>|/>|\\s|\\())",beginCaptures:{1:{name:"support.function.marko-tag"}},comment:"HTML style tag",end:"</(\\1)>|</>|</(div)>|/>",endCaptures:{1:{name:"support.function.marko-tag"},2:{name:"support.function.marko-tag"}},patterns:[{include:"#attr-stuff"},{include:"#open-tag-end"}]},"tag-name-style-html":{begin:"<(style)(?=(>|/>|\\s|\\())",beginCaptures:{1:{name:"entity.name.tag.style"}},comment:"HTML style tag",end:"</(style)>|</>|/>",endCaptures:{1:{name:"entity.name.tag.style"}},patterns:[{include:"#attr-stuff"},{include:"#open-tag-end-style"}]},"tag-script-body-block":{begin:"(\\s*-[-]+)",comment:"HTML script tag with nested JavaScript code",end:"(\\1)[.]*$",patterns:[{include:"source.js"}]},"tag-script-body-line":{begin:"\\s-\\s",comment:"HTML script tag with nested JavaScript code",end:"$",patterns:[{include:"source.js"}]},"tag-script-concise":{begin:"^(\\s*)(script)(?=(\\s|$|\\())",beginCaptures:{2:{name:"entity.name.tag.script.marko"}},comment:"HTML script tag with nested JavaScript code",end:"^(?!(\\1\\s)|\\s*$)",name:"meta.tag.other",patterns:[{include:"#attr-stuff"},{include:"#tag-script-body-line"},{include:"#tag-script-body-block"}]},"tag-style-body-block":{begin:"(\\s*-[-]+)",comment:"HTML script tag with nested JavaScript code",end:"(\\1)[.]*$",patterns:[{include:"source.css"}]},"tag-style-body-line":{begin:"\\s-\\s",comment:"HTML script tag with nested JavaScript code",end:"$",patterns:[{include:"source.css"}]},"tag-style-concise":{begin:"^(\\s*)(style)(?=(\\s|$|\\())",beginCaptures:{2:{name:"entity.name.tag.style.marko"}},comment:"style tag with CSS code.",end:"^(?!(\\1\\s)|\\s*$)",name:"meta.tag.other",patterns:[{include:"#attr-stuff"},{include:"#tag-style-body-line"},{include:"#tag-style-body-block"}]}},scopeName:"text.marko"});
$rmod.def("/src/components/app-codemirror/template.marko",function(e,r,o,t,i){function d(r){var o={name:"/src/components/app-codemirror/index",def:function(){return e("./index")}},t=e("/$/marko-widgets"),i=t.attrs,d=(r.s,r.e,r.ne,r.x,r.t),n=d(e("/$/marko-widgets/taglib/widget-tag")),a=r.ca,c=r.a,p=r.as;return function(e,r){n({type:o,_cfg:e.widgetConfig,_state:e.widgetState,_props:e.widgetProps,_body:e.widgetBody,renderBody:function(r,o){r.w("<div"+a(["app-codemirror",e.autoResize&&"app-codemirror-auto-resize",e.fullscreen&&"app-codemirror-fullscreen"])+c("id",o.id)+p(i(o))+"></div>")}},r)}}(o.exports=e("/$/marko").c(t)).c(d)});
$rmod.def("/src/components/app-codemirror/index",function(e,t,r,o,a){var i,n=e("/$/dom-classes").remove,m=e("/$/dom-classes").add,s=e("/$/html");if("undefined"!=typeof window){i=e("/$/codemirror");var u=e("/$/codemirror-atom-modes");u.registerGrammar(e("/src/atom-grammars/css.cson"),i),u.registerGrammar(e("/src/atom-grammars/javascript.cson"),i),u.registerGrammar(e("/src/atom-grammars/marko.cson"),i)}r.exports=e("/$/marko-widgets").defineComponent({template:e("./template.marko"),getInitialProps:function(e){return e.autoResize=e.autoResize===!0,e},getWidgetConfig:function(e){var t=e.mode;return"marko"===t&&(t="Marko"),{code:e.code,mode:t,autoResize:e.autoResize,readOnly:e.readOnly===!0,autoFormat:e.autoFormat===!0,theme:e.theme,lineNumbers:!1}},getTemplateData:function(e,t){return{autoResize:t.autoResize,fullscreen:t.fullscreen===!0}},init:function(e){this.autoFormat=e.autoFormat===!0;var t=this;this.mode=e.mode;var r=e.code;r&&this.autoFormat&&(r=this.format(r));var o={value:r||"",mode:e.mode,lineNumbers:e.lineNumbers!==!1,readOnly:e.readOnly===!0,indentUnit:4};e.autoResize&&(o.viewportMargin=1/0),e.theme&&(o.theme=e.theme),this.codeMirror=i(this.el,o),this.codeMirror.on("change",function(e){t.emit("change",{codeEditor:t,value:e.getValue()})})},getTextArea:function(){return this.codeMirror.getTextArea()},getValue:function(){return this.codeMirror.getValue()},setValue:function(e){this.autoFormat&&(e=this.format(e)),this.codeMirror.setValue(e)},setAutoFormat:function(e){this.autoFormat!==e&&(this.autoFormat=e===!0,this.autoFormat&&this.setValue(this.format(this.getValue())))},isAutoFormat:function(){return this.autoFormat===!0},format:function(e){return"htmlmixed"!==this.mode?e:e=s.prettyPrint(e)},show:function(){n(this.el,"hidden")},hide:function(){m(this.el,"hidden")}})});
$rmod.def("/codemirror@5.12.0/mode/javascript/javascript",function(e,t,r,n,a){!function(n){"object"==typeof t&&"object"==typeof r?n(e("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],n):n(CodeMirror)}(function(e){"use strict";function t(e,t,r){return/^(?:operator|sof|keyword c|case|new|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)))}e.defineMode("javascript",function(r,n){function a(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return;"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}function i(e,t,r){return he=e,ge=r,t}function o(e,r){var n=e.next();if('"'==n||"'"==n)return r.tokenize=c(n),r.tokenize(e,r);if("."==n&&e.match(/^\d+(?:[eE][+\-]?\d+)?/))return i("number","number");if("."==n&&e.match(".."))return i("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(n))return i(n);if("="==n&&e.eat(">"))return i("=>","operator");if("0"==n&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),i("number","number");if("0"==n&&e.eat(/o/i))return e.eatWhile(/[0-7]/i),i("number","number");if("0"==n&&e.eat(/b/i))return e.eatWhile(/[01]/i),i("number","number");if(/\d/.test(n))return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),i("number","number");if("/"==n)return e.eat("*")?(r.tokenize=u,u(e,r)):e.eat("/")?(e.skipToEnd(),i("comment","comment")):t(e,r,1)?(a(e),e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),i("regexp","string-2")):(e.eatWhile(Ae),i("operator","operator",e.current()));if("`"==n)return r.tokenize=l,l(e,r);if("#"==n)return e.skipToEnd(),i("error","error");if(Ae.test(n))return e.eatWhile(Ae),i("operator","operator",e.current());if(Ie.test(n)){e.eatWhile(Ie);var o=e.current(),s=ze.propertyIsEnumerable(o)&&ze[o];return s&&"."!=r.lastType?i(s.type,s.style,o):i("variable","variable",o)}}function c(e){return function(t,r){var n,a=!1;if(Me&&"@"==t.peek()&&t.match(Te))return r.tokenize=o,i("jsonld-keyword","meta");for(;null!=(n=t.next())&&(n!=e||a);)a=!a&&"\\"==n;return a||(r.tokenize=o),i("string","string")}}function u(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=o;break}n="*"==r}return i("comment","comment")}function l(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=o;break}n=!n&&"\\"==r}return i("quasi","string-2",e.current())}function s(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(0>r)){for(var n=0,a=!1,i=r-1;i>=0;--i){var o=e.string.charAt(i),c=$e.indexOf(o);if(c>=0&&3>c){if(!n){++i;break}if(0==--n)break}else if(c>=3&&6>c)++n;else if(Ie.test(o))a=!0;else{if(/["'\/]/.test(o))return;if(a&&!n){++i;break}}}a&&!n&&(t.fatArrowAt=i)}}function f(e,t,r,n,a,i){this.indented=e,this.column=t,this.type=r,this.prev=a,this.info=i,null!=n&&(this.align=n)}function d(e,t){for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0;for(var n=e.context;n;n=n.prev)for(var r=n.vars;r;r=r.next)if(r.name==t)return!0}function p(e,t,r,n,a){var i=e.cc;for(We.state=e,We.stream=a,We.marked=null,We.cc=i,We.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;){var o=i.length?i.pop():Ve?j:w;if(o(r,n)){for(;i.length&&i[i.length-1].lex;)i.pop()();return We.marked?We.marked:"variable"==r&&d(e,n)?"variable-2":t}}}function m(){for(var e=arguments.length-1;e>=0;e--)We.cc.push(arguments[e])}function v(){return m.apply(null,arguments),!0}function y(e){function t(t){for(var r=t;r;r=r.next)if(r.name==e)return!0;return!1}var r=We.state;if(We.marked="def",r.context){if(t(r.localVars))return;r.localVars={name:e,next:r.localVars}}else{if(t(r.globalVars))return;n.globalVars&&(r.globalVars={name:e,next:r.globalVars})}}function k(){We.state.context={prev:We.state.context,vars:We.state.localVars},We.state.localVars=qe}function b(){We.state.localVars=We.state.context.vars,We.state.context=We.state.context.prev}function x(e,t){var r=function(){var r=We.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var a=r.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented;r.lexical=new f(n,We.stream.column(),e,null,r.lexical,t)};return r.lex=!0,r}function h(){var e=We.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function g(e){function t(r){return r==e?v():";"==e?m():v(t)}return t}function w(e,t){return"var"==e?v(x("vardef",t.length),Q,g(";"),h):"keyword a"==e?v(x("form"),j,w,h):"keyword b"==e?v(x("form"),w,h):"{"==e?v(x("}"),G,h):";"==e?v():"if"==e?("else"==We.state.lexical.info&&We.state.cc[We.state.cc.length-1]==h&&We.state.cc.pop()(),v(x("form"),j,w,h,_)):"function"==e?v(ie):"for"==e?v(x("form"),ee,w,h):"variable"==e?v(x("stat"),S):"switch"==e?v(x("form"),j,x("}","switch"),g("{"),G,h,h):"case"==e?v(j,g(":")):"default"==e?v(g(":")):"catch"==e?v(x("form"),k,g("("),oe,g(")"),w,h,b):"class"==e?v(x("form"),ce,h):"export"==e?v(x("stat"),fe,h):"import"==e?v(x("stat"),de,h):"module"==e?v(x("form"),R,x("}"),g("{"),G,h,h):m(x("stat"),j,g(";"),h)}function j(e){return V(e,!1)}function M(e){return V(e,!0)}function V(e,t){if(We.state.fatArrowAt==We.stream.start){var r=t?W:C;if("("==e)return v(k,x(")"),D(R,")"),h,g("=>"),r,b);if("variable"==e)return m(k,R,g("=>"),r,b)}var n=t?A:z;return Ce.hasOwnProperty(e)?v(n):"function"==e?v(ie,n):"keyword c"==e?v(t?I:E):"("==e?v(x(")"),E,be,g(")"),h,n):"operator"==e||"spread"==e?v(t?M:j):"["==e?v(x("]"),ye,h,n):"{"==e?F(B,"}",null,n):"quasi"==e?m(T,n):"new"==e?v(q(t)):v()}function E(e){return e.match(/[;\}\)\],]/)?m():m(j)}function I(e){return e.match(/[;\}\)\],]/)?m():m(M)}function z(e,t){return","==e?v(j):A(e,t,!1)}function A(e,t,r){var n=0==r?z:A,a=0==r?j:M;return"=>"==e?v(k,r?W:C,b):"operator"==e?/\+\+|--/.test(t)?v(n):"?"==t?v(j,g(":"),a):v(a):"quasi"==e?m(T,n):";"!=e?"("==e?F(M,")","call",n):"."==e?v(N,n):"["==e?v(x("]"),E,g("]"),h,n):void 0:void 0}function T(e,t){return"quasi"!=e?m():"${"!=t.slice(t.length-2)?v(T):v(j,$)}function $(e){return"}"==e?(We.marked="string-2",We.state.tokenize=l,v(T)):void 0}function C(e){return s(We.stream,We.state),m("{"==e?w:j)}function W(e){return s(We.stream,We.state),m("{"==e?w:M)}function q(e){return function(t){return"."==t?v(e?P:O):m(e?M:j)}}function O(e,t){return"target"==t?(We.marked="keyword",v(z)):void 0}function P(e,t){return"target"==t?(We.marked="keyword",v(A)):void 0}function S(e){return":"==e?v(h,w):m(z,g(";"),h)}function N(e){return"variable"==e?(We.marked="property",v()):void 0}function B(e,t){return"variable"==e||"keyword"==We.style?(We.marked="property",v("get"==t||"set"==t?H:U)):"number"==e||"string"==e?(We.marked=Me?"property":We.style+" property",v(U)):"jsonld-keyword"==e?v(U):"modifier"==e?v(B):"["==e?v(j,g("]"),U):"spread"==e?v(j):void 0}function H(e){return"variable"!=e?m(U):(We.marked="property",v(ie))}function U(e){return":"==e?v(M):"("==e?m(ie):void 0}function D(e,t){function r(n){if(","==n){var a=We.state.lexical;return"call"==a.info&&(a.pos=(a.pos||0)+1),v(e,r)}return n==t?v():v(g(t))}return function(n){return n==t?v():m(e,r)}}function F(e,t,r){for(var n=3;n<arguments.length;n++)We.cc.push(arguments[n]);return v(x(t,r),D(e,t),h)}function G(e){return"}"==e?v():m(w,G)}function J(e){return Ee&&":"==e?v(L):void 0}function K(e,t){return"="==t?v(M):void 0}function L(e){return"variable"==e?(We.marked="variable-3",v()):void 0}function Q(){return m(R,J,Y,Z)}function R(e,t){return"modifier"==e?v(R):"variable"==e?(y(t),v()):"spread"==e?v(R):"["==e?F(R,"]"):"{"==e?F(X,"}"):void 0}function X(e,t){return"variable"!=e||We.stream.match(/^\s*:/,!1)?("variable"==e&&(We.marked="property"),"spread"==e?v(R):"}"==e?m():v(g(":"),R,Y)):(y(t),v(Y))}function Y(e,t){return"="==t?v(M):void 0}function Z(e){return","==e?v(Q):void 0}function _(e,t){return"keyword b"==e&&"else"==t?v(x("form","else"),w,h):void 0}function ee(e){return"("==e?v(x(")"),te,g(")"),h):void 0}function te(e){return"var"==e?v(Q,g(";"),ne):";"==e?v(ne):"variable"==e?v(re):m(j,g(";"),ne)}function re(e,t){return"in"==t||"of"==t?(We.marked="keyword",v(j)):v(z,ne)}function ne(e,t){return";"==e?v(ae):"in"==t||"of"==t?(We.marked="keyword",v(j)):m(j,g(";"),ae)}function ae(e){")"!=e&&v(j)}function ie(e,t){return"*"==t?(We.marked="keyword",v(ie)):"variable"==e?(y(t),v(ie)):"("==e?v(k,x(")"),D(oe,")"),h,w,b):void 0}function oe(e){return"spread"==e?v(oe):m(R,J,K)}function ce(e,t){return"variable"==e?(y(t),v(ue)):void 0}function ue(e,t){return"extends"==t?v(j,ue):"{"==e?v(x("}"),le,h):void 0}function le(e,t){return"variable"==e||"keyword"==We.style?"static"==t?(We.marked="keyword",v(le)):(We.marked="property","get"==t||"set"==t?v(se,ie,le):v(ie,le)):"*"==t?(We.marked="keyword",v(le)):";"==e?v(le):"}"==e?v():void 0}function se(e){return"variable"!=e?m():(We.marked="property",v())}function fe(e,t){return"*"==t?(We.marked="keyword",v(ve,g(";"))):"default"==t?(We.marked="keyword",v(j,g(";"))):m(w)}function de(e){return"string"==e?v():m(pe,ve)}function pe(e,t){return"{"==e?F(pe,"}"):("variable"==e&&y(t),"*"==t&&(We.marked="keyword"),v(me))}function me(e,t){return"as"==t?(We.marked="keyword",v(pe)):void 0}function ve(e,t){return"from"==t?(We.marked="keyword",v(j)):void 0}function ye(e){return"]"==e?v():m(M,ke)}function ke(e){return"for"==e?m(be,g("]")):","==e?v(D(I,"]")):m(D(M,"]"))}function be(e){return"for"==e?v(ee,be):"if"==e?v(j,be):void 0}function xe(e,t){return"operator"==e.lastType||","==e.lastType||Ae.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}var he,ge,we=r.indentUnit,je=n.statementIndent,Me=n.jsonld,Ve=n.json||Me,Ee=n.typescript,Ie=n.wordCharacters||/[\w$\xa1-\uffff]/,ze=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),a=e("operator"),i={type:"atom",style:"atom"},o={"if":e("if"),"while":t,"with":t,"else":r,"do":r,"try":r,"finally":r,"return":n,"break":n,"continue":n,"new":e("new"),"delete":n,"throw":n,"debugger":n,"var":e("var"),"const":e("var"),let:e("var"),"function":e("function"),"catch":e("catch"),"for":e("for"),"switch":e("switch"),"case":e("case"),"default":e("default"),"in":a,"typeof":a,"instanceof":a,"true":i,"false":i,"null":i,undefined:i,NaN:i,Infinity:i,"this":e("this"),"class":e("class"),"super":e("atom"),"yield":n,"export":e("export"),"import":e("import"),"extends":n};if(Ee){var c={type:"variable",style:"variable-3"},u={"interface":e("class"),"implements":n,namespace:n,module:e("module"),"enum":e("module"),"public":e("modifier"),"private":e("modifier"),"protected":e("modifier"),"abstract":e("modifier"),as:a,string:c,number:c,"boolean":c,any:c};for(var l in u)o[l]=u[l]}return o}(),Ae=/[+\-*&%=<>!?|~^]/,Te=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,$e="([{}])",Ce={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,"this":!0,"jsonld-keyword":!0},We={state:null,column:null,marked:null,cc:null},qe={name:"this",next:{name:"arguments"}};return h.lex=!0,{startState:function(e){var t={tokenize:o,lastType:"sof",cc:[],lexical:new f((e||0)-we,0,"block",!1),localVars:n.localVars,context:n.localVars&&{vars:n.localVars},indented:e||0};return n.globalVars&&"object"==typeof n.globalVars&&(t.globalVars=n.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),s(e,t)),t.tokenize!=u&&e.eatSpace())return null;var r=t.tokenize(e,t);return"comment"==he?r:(t.lastType="operator"!=he||"++"!=ge&&"--"!=ge?he:"incdec",p(t,r,he,ge,e))},indent:function(t,r){if(t.tokenize==u)return e.Pass;if(t.tokenize!=o)return 0;var a=r&&r.charAt(0),i=t.lexical;if(!/^\s*else\b/.test(r))for(var c=t.cc.length-1;c>=0;--c){var l=t.cc[c];if(l==h)i=i.prev;else if(l!=_)break}"stat"==i.type&&"}"==a&&(i=i.prev),je&&")"==i.type&&"stat"==i.prev.type&&(i=i.prev);var s=i.type,f=a==s;return"vardef"==s?i.indented+("operator"==t.lastType||","==t.lastType?i.info+1:0):"form"==s&&"{"==a?i.indented:"form"==s?i.indented+we:"stat"==s?i.indented+(xe(t,r)?je||we:0):"switch"!=i.info||f||0==n.doubleIndentSwitch?i.align?i.column+(f?0:1):i.indented+(f?0:we):i.indented+(/^(?:case|default)\b/.test(r)?we:2*we)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:Ve?null:"/*",blockCommentEnd:Ve?null:"*/",lineComment:Ve?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:Ve?"json":"javascript",jsonldMode:Me,jsonMode:Ve,expressionAllowed:t,skipExpression:function(e){var t=e.cc[e.cc.length-1];(t==j||t==M)&&e.cc.pop()}}}),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})})});
$rmod.run("/$/codemirror/mode/javascript/javascript");
$rmod.def("/codemirror@5.12.0/mode/xml/xml",function(t,e,n,r,o){!function(r){"object"==typeof e&&"object"==typeof n?r(t("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],r):r(CodeMirror)}(function(t){"use strict";var e={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},n={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,caseFold:!1};t.defineMode("xml",function(r,o){function a(t,e){function n(n){return e.tokenize=n,n(t,e)}var r=t.next();if("<"==r)return t.eat("!")?t.eat("[")?t.match("CDATA[")?n(u("atom","]]>")):null:t.match("--")?n(u("comment","-->")):t.match("DOCTYPE",!0,!0)?(t.eatWhile(/[\w\._\-]/),n(d(1))):null:t.eat("?")?(t.eatWhile(/[\w\._\-]/),e.tokenize=u("meta","?>"),"meta"):(C=t.eat("/")?"closeTag":"openTag",e.tokenize=i,"tag bracket");if("&"==r){var o;return o=t.eat("#")?t.eat("x")?t.eatWhile(/[a-fA-F\d]/)&&t.eat(";"):t.eatWhile(/[\d]/)&&t.eat(";"):t.eatWhile(/[\w\.\-:]/)&&t.eat(";"),o?"atom":"error"}return t.eatWhile(/[^&<]/),null}function i(t,e){var n=t.next();if(">"==n||"/"==n&&t.eat(">"))return e.tokenize=a,C=">"==n?"endTag":"selfcloseTag","tag bracket";if("="==n)return C="equals",null;if("<"==n){e.tokenize=a,e.state=m,e.tagName=e.tagStart=null;var r=e.tokenize(t,e);return r?r+" tag error":"tag error"}return/[\'\"]/.test(n)?(e.tokenize=l(n),e.stringStartCol=t.column(),e.tokenize(t,e)):(t.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function l(t){var e=function(e,n){for(;!e.eol();)if(e.next()==t){n.tokenize=i;break}return"string"};return e.isInAttribute=!0,e}function u(t,e){return function(n,r){for(;!n.eol();){if(n.match(e)){r.tokenize=a;break}n.next()}return t}}function d(t){return function(e,n){for(var r;null!=(r=e.next());){if("<"==r)return n.tokenize=d(t+1),n.tokenize(e,n);if(">"==r){if(1==t){n.tokenize=a;break}return n.tokenize=d(t-1),n.tokenize(e,n)}}return"meta"}}function c(t,e,n){this.prev=t.context,this.tagName=e,this.indent=t.indented,this.startOfLine=n,(z.doNotIndent.hasOwnProperty(e)||t.context&&t.context.noIndent)&&(this.noIndent=!0)}function f(t){t.context&&(t.context=t.context.prev)}function s(t,e){for(var n;;){if(!t.context)return;if(n=t.context.tagName,!z.contextGrabbers.hasOwnProperty(n)||!z.contextGrabbers[n].hasOwnProperty(e))return;f(t)}}function m(t,e,n){return"openTag"==t?(n.tagStart=e.column(),g):"closeTag"==t?p:m}function g(t,e,n){return"word"==t?(n.tagName=e.current(),I="tag",b):(I="error",g)}function p(t,e,n){if("word"==t){var r=e.current();return n.context&&n.context.tagName!=r&&z.implicitlyClosed.hasOwnProperty(n.context.tagName)&&f(n),n.context&&n.context.tagName==r||z.matchClosing===!1?(I="tag",h):(I="tag error",x)}return I="error",x}function h(t,e,n){return"endTag"!=t?(I="error",h):(f(n),m)}function x(t,e,n){return I="error",h(t,e,n)}function b(t,e,n){if("word"==t)return I="attribute",k;if("endTag"==t||"selfcloseTag"==t){var r=n.tagName,o=n.tagStart;return n.tagName=n.tagStart=null,"selfcloseTag"==t||z.autoSelfClosers.hasOwnProperty(r)?s(n,r):(s(n,r),n.context=new c(n,r,o==n.indented)),m}return I="error",b}function k(t,e,n){return"equals"==t?v:(z.allowMissing||(I="error"),b(t,e,n))}function v(t,e,n){return"string"==t?w:"word"==t&&z.allowUnquoted?(I="string",b):(I="error",b(t,e,n))}function w(t,e,n){return"string"==t?w:b(t,e,n)}var y=r.indentUnit,z={},N=o.htmlMode?e:n;for(var T in N)z[T]=N[T];for(var T in o)z[T]=o[T];var C,I;return a.isInText=!0,{startState:function(t){var e={tokenize:a,state:m,indented:t||0,tagName:null,tagStart:null,context:null};return null!=t&&(e.baseIndent=t),e},token:function(t,e){if(!e.tagName&&t.sol()&&(e.indented=t.indentation()),t.eatSpace())return null;C=null;var n=e.tokenize(t,e);return(n||C)&&"comment"!=n&&(I=null,e.state=e.state(C||n,t,e),I&&(n="error"==I?n+" error":I)),n},indent:function(e,n,r){var o=e.context;if(e.tokenize.isInAttribute)return e.tagStart==e.indented?e.stringStartCol+1:e.indented+y;if(o&&o.noIndent)return t.Pass;if(e.tokenize!=i&&e.tokenize!=a)return r?r.match(/^(\s*)/)[0].length:0;if(e.tagName)return z.multilineTagIndentPastTag!==!1?e.tagStart+e.tagName.length+2:e.tagStart+y*(z.multilineTagIndentFactor||1);if(z.alignCDATA&&/<!\[CDATA\[/.test(n))return 0;var l=n&&/^<(\/)?([\w_:\.-]*)/.exec(n);if(l&&l[1])for(;o;){if(o.tagName==l[2]){o=o.prev;break}if(!z.implicitlyClosed.hasOwnProperty(o.tagName))break;o=o.prev}else if(l)for(;o;){var u=z.contextGrabbers[o.tagName];if(!u||!u.hasOwnProperty(l[2]))break;o=o.prev}for(;o&&o.prev&&!o.startOfLine;)o=o.prev;return o?o.indent+y:e.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:z.htmlMode?"html":"xml",helperType:z.htmlMode?"html":"xml",skipAttribute:function(t){t.state==v&&(t.state=b)}}}),t.defineMIME("text/xml","xml"),t.defineMIME("application/xml","xml"),t.mimeModes.hasOwnProperty("text/html")||t.defineMIME("text/html",{name:"xml",htmlMode:!0})})});
$rmod.def("/codemirror@5.12.0/mode/css/css",function(e,t,r,o,a){!function(o){"object"==typeof t&&"object"==typeof r?o(e("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],o):o(CodeMirror)}(function(e){"use strict";function t(e){for(var t={},r=0;r<e.length;++r)t[e[r]]=!0;return t}function r(e,t){for(var r,o=!1;null!=(r=e.next());){if(o&&"/"==r){t.tokenize=null;break}o="*"==r}return["comment","comment"]}e.defineMode("css",function(t,r){function o(e,t){return h=t,e}function a(e,t){var r=e.next();if(f[r]){var a=f[r](e,t);if(a!==!1)return a}return"@"==r?(e.eatWhile(/[\w\\\-]/),o("def",e.current())):"="==r||("~"==r||"|"==r)&&e.eat("=")?o(null,"compare"):'"'==r||"'"==r?(t.tokenize=i(r),t.tokenize(e,t)):"#"==r?(e.eatWhile(/[\w\\\-]/),o("atom","hash")):"!"==r?(e.match(/^\s*\w*/),o("keyword","important")):/\d/.test(r)||"."==r&&e.eat(/\d/)?(e.eatWhile(/[\w.%]/),o("number","unit")):"-"!==r?/[,+>*\/]/.test(r)?o(null,"select-op"):"."==r&&e.match(/^-?[_a-z][_a-z0-9-]*/i)?o("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(r)?o(null,r):"u"==r&&e.match(/rl(-prefix)?\(/)||"d"==r&&e.match("omain(")||"r"==r&&e.match("egexp(")?(e.backUp(1),t.tokenize=n,o("property","word")):/[\w\\\-]/.test(r)?(e.eatWhile(/[\w\\\-]/),o("property","word")):o(null,null):/[\d.]/.test(e.peek())?(e.eatWhile(/[\w.%]/),o("number","unit")):e.match(/^-[\w\\\-]+/)?(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?o("variable-2","variable-definition"):o("variable-2","variable")):e.match(/^\w+-/)?o("meta","meta"):void 0}function i(e){return function(t,r){for(var a,i=!1;null!=(a=t.next());){if(a==e&&!i){")"==e&&t.backUp(1);break}i=!i&&"\\"==a}return(a==e||!i&&")"!=e)&&(r.tokenize=null),o("string","string")}}function n(e,t){return e.next(),e.match(/\s*[\"\')]/,!1)?t.tokenize=null:t.tokenize=i(")"),o(null,"(")}function l(e,t,r){this.type=e,this.indent=t,this.prev=r}function s(e,t,r,o){return e.context=new l(r,t.indentation()+(o===!1?0:b),e.context),r}function c(e){return e.context.prev&&(e.context=e.context.prev),e.context.type}function d(e,t,r){return _[r.context.type](e,t,r)}function p(e,t,r,o){for(var a=o||1;a>0;a--)r.context=r.context.prev;return d(e,t,r)}function u(e){var t=e.current().toLowerCase();g=K.hasOwnProperty(t)?"atom":q.hasOwnProperty(t)?"keyword":"variable"}var m=r.inline;r.propertyKeywords||(r=e.resolveMode("text/css"));var h,g,b=t.indentUnit,f=r.tokenHooks,y=r.documentTypes||{},w=r.mediaTypes||{},k=r.mediaFeatures||{},v=r.mediaValueKeywords||{},x=r.propertyKeywords||{},z=r.nonStandardPropertyKeywords||{},P=r.fontProperties||{},j=r.counterDescriptors||{},q=r.colorKeywords||{},K=r.valueKeywords||{},B=r.allowNested,T=r.supportsAtComponent===!0,_={};return _.top=function(e,t,r){if("{"==e)return s(r,t,"block");if("}"==e&&r.context.prev)return c(r);if(T&&/@component/.test(e))return s(r,t,"atComponentBlock");if(/^@(-moz-)?document$/.test(e))return s(r,t,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/.test(e))return s(r,t,"atBlock");if(/^@(font-face|counter-style)/.test(e))return r.stateArg=e,"restricted_atBlock_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(e))return"keyframes";if(e&&"@"==e.charAt(0))return s(r,t,"at");if("hash"==e)g="builtin";else if("word"==e)g="tag";else{if("variable-definition"==e)return"maybeprop";if("interpolation"==e)return s(r,t,"interpolation");if(":"==e)return"pseudo";if(B&&"("==e)return s(r,t,"parens")}return r.context.type},_.block=function(e,t,r){if("word"==e){var o=t.current().toLowerCase();return x.hasOwnProperty(o)?(g="property","maybeprop"):z.hasOwnProperty(o)?(g="string-2","maybeprop"):B?(g=t.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(g+=" error","maybeprop")}return"meta"==e?"block":B||"hash"!=e&&"qualifier"!=e?_.top(e,t,r):(g="error","block")},_.maybeprop=function(e,t,r){return":"==e?s(r,t,"prop"):d(e,t,r)},_.prop=function(e,t,r){if(";"==e)return c(r);if("{"==e&&B)return s(r,t,"propBlock");if("}"==e||"{"==e)return p(e,t,r);if("("==e)return s(r,t,"parens");if("hash"!=e||/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())){if("word"==e)u(t);else if("interpolation"==e)return s(r,t,"interpolation")}else g+=" error";return"prop"},_.propBlock=function(e,t,r){return"}"==e?c(r):"word"==e?(g="property","maybeprop"):r.context.type},_.parens=function(e,t,r){return"{"==e||"}"==e?p(e,t,r):")"==e?c(r):"("==e?s(r,t,"parens"):"interpolation"==e?s(r,t,"interpolation"):("word"==e&&u(t),"parens")},_.pseudo=function(e,t,r){return"word"==e?(g="variable-3",r.context.type):d(e,t,r)},_.documentTypes=function(e,t,r){return"word"==e&&y.hasOwnProperty(t.current())?(g="tag",r.context.type):_.atBlock(e,t,r)},_.atBlock=function(e,t,r){if("("==e)return s(r,t,"atBlock_parens");if("}"==e||";"==e)return p(e,t,r);if("{"==e)return c(r)&&s(r,t,B?"block":"top");if("interpolation"==e)return s(r,t,"interpolation");if("word"==e){var o=t.current().toLowerCase();g="only"==o||"not"==o||"and"==o||"or"==o?"keyword":w.hasOwnProperty(o)?"attribute":k.hasOwnProperty(o)?"property":v.hasOwnProperty(o)?"keyword":x.hasOwnProperty(o)?"property":z.hasOwnProperty(o)?"string-2":K.hasOwnProperty(o)?"atom":q.hasOwnProperty(o)?"keyword":"error"}return r.context.type},_.atComponentBlock=function(e,t,r){return"}"==e?p(e,t,r):"{"==e?c(r)&&s(r,t,B?"block":"top",!1):("word"==e&&(g="error"),r.context.type)},_.atBlock_parens=function(e,t,r){return")"==e?c(r):"{"==e||"}"==e?p(e,t,r,2):_.atBlock(e,t,r)},_.restricted_atBlock_before=function(e,t,r){return"{"==e?s(r,t,"restricted_atBlock"):"word"==e&&"@counter-style"==r.stateArg?(g="variable","restricted_atBlock_before"):d(e,t,r)},_.restricted_atBlock=function(e,t,r){return"}"==e?(r.stateArg=null,c(r)):"word"==e?(g="@font-face"==r.stateArg&&!P.hasOwnProperty(t.current().toLowerCase())||"@counter-style"==r.stateArg&&!j.hasOwnProperty(t.current().toLowerCase())?"error":"property","maybeprop"):"restricted_atBlock"},_.keyframes=function(e,t,r){return"word"==e?(g="variable","keyframes"):"{"==e?s(r,t,"top"):d(e,t,r)},_.at=function(e,t,r){return";"==e?c(r):"{"==e||"}"==e?p(e,t,r):("word"==e?g="tag":"hash"==e&&(g="builtin"),"at")},_.interpolation=function(e,t,r){return"}"==e?c(r):"{"==e||";"==e?p(e,t,r):("word"==e?g="variable":"variable"!=e&&"("!=e&&")"!=e&&(g="error"),"interpolation")},{startState:function(e){return{tokenize:null,state:m?"block":"top",stateArg:null,context:new l(m?"block":"top",e||0,null)}},token:function(e,t){if(!t.tokenize&&e.eatSpace())return null;var r=(t.tokenize||a)(e,t);return r&&"object"==typeof r&&(h=r[1],r=r[0]),g=r,t.state=_[t.state](h,e,t),g},indent:function(e,t){var r=e.context,o=t&&t.charAt(0),a=r.indent;return"prop"!=r.type||"}"!=o&&")"!=o||(r=r.prev),r.prev&&("}"!=o||"block"!=r.type&&"top"!=r.type&&"interpolation"!=r.type&&"restricted_atBlock"!=r.type?(")"==o&&("parens"==r.type||"atBlock_parens"==r.type)||"{"==o&&("at"==r.type||"atBlock"==r.type))&&(a=Math.max(0,r.indent-b),r=r.prev):(r=r.prev,a=r.indent)),a},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",fold:"brace"}});var o=["domain","regexp","url","url-prefix"],a=t(o),i=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],n=t(i),l=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover"],s=t(l),c=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive"],d=t(c),p=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","binding","bleed","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-feature-settings","font-family","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-position","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","justify-content","left","letter-spacing","line-break","line-height","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marker-offset","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","max-height","max-width","min-height","min-width","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotation","rotation-point","ruby-align","ruby-overhang","ruby-position","ruby-span","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-outline","text-overflow","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","word-break","word-spacing","word-wrap","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],u=t(p),m=["scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-3d-light-color","scrollbar-track-color","shape-inside","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","zoom"],h=t(m),g=["font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],b=t(g),f=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],y=t(f),w=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],k=t(w),v=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","avoid","avoid-column","avoid-page","avoid-region","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","bullets","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","contain","content","content-box","context-menu","continuous","copy","counter","counters","cover","crop","cross","crosshair","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","graytext","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","match","matrix","matrix3d","media-controls-background","media-current-time-display","media-fullscreen-button","media-mute-button","media-play-button","media-return-to-realtime-button","media-rewind-button","media-seek-back-button","media-seek-forward-button","media-slider","media-sliderthumb","media-time-remaining-display","media-volume-slider","media-volume-slider-container","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menulist-text","menulist-textfield","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","semi-condensed","semi-expanded","separate","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","spell-out","square","square-button","start","static","status-bar","stretch","stroke","sub","subpixel-antialiased","super","sw-resize","symbolic","symbols","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],x=t(v),z=o.concat(i).concat(l).concat(c).concat(p).concat(m).concat(w).concat(v);e.registerHelper("hintWords","css",z),e.defineMIME("text/css",{documentTypes:a,mediaTypes:n,mediaFeatures:s,mediaValueKeywords:d,propertyKeywords:u,nonStandardPropertyKeywords:h,fontProperties:b,counterDescriptors:y,colorKeywords:k,valueKeywords:x,tokenHooks:{"/":function(e,t){return e.eat("*")?(t.tokenize=r,r(e,t)):!1}},name:"css"}),e.defineMIME("text/x-scss",{mediaTypes:n,mediaFeatures:s,mediaValueKeywords:d,propertyKeywords:u,nonStandardPropertyKeywords:h,colorKeywords:k,valueKeywords:x,fontProperties:b,allowNested:!0,tokenHooks:{"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=r,r(e,t)):["operator","operator"]},":":function(e){return e.match(/\s*\{/)?[null,"{"]:!1},$:function(e){return e.match(/^[\w-]+/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(e){return e.eat("{")?[null,"interpolation"]:!1}},name:"css",helperType:"scss"}),e.defineMIME("text/x-less",{mediaTypes:n,mediaFeatures:s,mediaValueKeywords:d,propertyKeywords:u,nonStandardPropertyKeywords:h,colorKeywords:k,valueKeywords:x,fontProperties:b,allowNested:!0,tokenHooks:{"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=r,r(e,t)):["operator","operator"]},"@":function(e){return e.eat("{")?[null,"interpolation"]:e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/,!1)?!1:(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),e.defineMIME("text/x-gss",{documentTypes:a,mediaTypes:n,mediaFeatures:s,propertyKeywords:u,nonStandardPropertyKeywords:h,fontProperties:b,counterDescriptors:y,colorKeywords:k,valueKeywords:x,supportsAtComponent:!0,tokenHooks:{"/":function(e,t){return e.eat("*")?(t.tokenize=r,r(e,t)):!1}},name:"css",helperType:"gss"})})});
$rmod.def("/codemirror@5.12.0/mode/htmlmixed/htmlmixed",function(t,e,a,n,l){!function(n){"object"==typeof e&&"object"==typeof a?n(t("../../lib/codemirror"),t("../xml/xml"),t("../javascript/javascript"),t("../css/css")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../javascript/javascript","../css/css"],n):n(CodeMirror)}(function(t){"use strict";function e(t,e,a){var n=t.current(),l=n.search(e);return l>-1?t.backUp(n.length-l):n.match(/<\/?$/)&&(t.backUp(n.length),t.match(e,!1)||t.match(n)),a}function a(t){var e=i[t];return e?e:i[t]=new RegExp("\\s+"+t+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*")}function n(t,e){var n=t.match(a(e));return n?n[2]:""}function l(t,e){return new RegExp((e?"^":"")+"</s*"+t+"s*>","i")}function o(t,e){for(var a in t)for(var n=e[a]||(e[a]=[]),l=t[a],o=l.length-1;o>=0;o--)n.unshift(l[o])}function r(t,e){for(var a=0;a<t.length;a++){var l=t[a];if(!l[0]||l[1].test(n(e,l[0])))return l[2]}}var c={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]},i={};t.defineMode("htmlmixed",function(a,n){function i(n,o){var c,m=s.token(n,o.htmlState),d=/\btag\b/.test(m);if(d&&!/[<>\s\/]/.test(n.current())&&(c=o.htmlState.tagName&&o.htmlState.tagName.toLowerCase())&&u.hasOwnProperty(c))o.inTag=c+" ";else if(o.inTag&&d&&/>$/.test(n.current())){var f=/^([\S]+) (.*)/.exec(o.inTag);o.inTag=null;var p=">"==n.current()&&r(u[f[1]],f[2]),g=t.getMode(a,p),h=l(f[1],!0),v=l(f[1],!1);o.token=function(t,a){return t.match(h,!1)?(a.token=i,a.localState=a.localMode=null,null):e(t,v,a.localMode.token(t,a.localState))},o.localMode=g,o.localState=t.startState(g,s.indent(o.htmlState,""))}else o.inTag&&(o.inTag+=n.current(),n.eol()&&(o.inTag+=" "));return m}var s=t.getMode(a,{name:"xml",htmlMode:!0,multilineTagIndentFactor:n.multilineTagIndentFactor,multilineTagIndentPastTag:n.multilineTagIndentPastTag}),u={},m=n&&n.tags,d=n&&n.scriptTypes;if(o(c,u),m&&o(m,u),d)for(var f=d.length-1;f>=0;f--)u.script.unshift(["type",d[f].matches,d[f].mode]);return{startState:function(){var t=s.startState();return{token:i,inTag:null,localMode:null,localState:null,htmlState:t}},copyState:function(e){var a;return e.localState&&(a=t.copyState(e.localMode,e.localState)),{token:e.token,inTag:e.inTag,localMode:e.localMode,localState:a,htmlState:t.copyState(s,e.htmlState)}},token:function(t,e){return e.token(t,e)},indent:function(e,a){return!e.localMode||/^\s*<\//.test(a)?s.indent(e.htmlState,a):e.localMode.indent?e.localMode.indent(e.localState,a):t.Pass},innerMode:function(t){return{state:t.localState||t.htmlState,mode:t.localMode||s}}}},"xml","javascript","css"),t.defineMIME("text/html","htmlmixed")})});
$rmod.run("/$/codemirror/mode/htmlmixed/htmlmixed");
$rmod.def("/src/components/app-try-marko/test-taglib/button.marko",function(t,e,n,o,r){function a(t){var e=(t.s,t.e,t.ne,t.x),n=t.a,o=t.as;return function(t,r){r.w('<button type="button"'+n("disabled",t.disabled)+o(t.attrs)+">"),t.label?r.w(e(t.label)):t.renderBody&&t.renderBody(r),r.w("</button>")}}(n.exports=t("/$/marko").c(o)).c(a)});
$rmod.def("/src/components/app-try-marko/test-taglib/button-renderer",function(r,o,e,t,a){var d=r("./button.marko");e.exports=function(r,o){var e={};r.color&&(e.style="background-color: "+r.color+";");var t={label:r.label,attrs:e,renderBody:r.renderBody,disabled:r.disabled===!0};d.render(t,o)}});
$rmod.def("/src/components/app-try-marko/test-taglib/tab-renderer",function(r,t,e,n,a){t.render=function(r,t){r.tabs.addTab(r)}});
$rmod.def("/src/components/app-try-marko/test-taglib/tabs.marko",function(a,t,n,s,i){function c(a){var t=(a.s,a.e,a.ne,a.x),n=a.f,s=a.xa,i=a.a;return function(a,c){c.w('<div class="tabs"><ul class="nav nav-tabs">'),n(a.tabs,function(a){c.w('<li class="tab"><a href="#'+s(a.id)+'" data-toggle="tab">'+t(a.title)+"</a></li>")}),c.w('</ul><div class="tab-content">'),n(a.tabs,function(a){c.w("<div"+i("id",a.id)+' class="tab-pane">'),a.renderBody(c),c.w("</div>")}),c.w("</div></div>")}}(n.exports=a("/$/marko").c(s)).c(c)});
$rmod.def("/src/components/app-try-marko/test-taglib/tabs-renderer",function(a,r,t,e,n){var o=a.resolve("./tabs.marko"),s=a("/$/marko").load(o);r.render=function(a,r){var t;a.getTabs?(t=[],a.getTabs({addTab:function(a){a.id=a.id||"tab"+t.length,t.push(a)}})):t=a.tabs||[],s.render({tabs:t},r)}});
$rmod.dep("","raptor-async","1.1.2");
$rmod.main("/marko-prettyprint@1.0.3","src/index");
$rmod.dep("","marko-prettyprint","1.0.3");
$rmod.def("/marko@3.0.0/taglibs/async/async-fragment-nested-tag-transformer",function(e,r,a,t,n){"use strict";a.exports=function(e,r){var a=e.parentNode;if("async-fragment"!==a.tagName)return void r.addError(e,"The <"+e.tagName+"> should be nested within an <async-fragment> tag.");var t;"async-fragment-error"===e.tagName?t="renderError":"async-fragment-timeout"===e.tagName?t="renderTimeout":"async-fragment-placeholder"===e.tagName&&(t="renderPlaceholder");var n=r.builder;a.setAttributeValue(t,n.renderBodyFunction(e.body)),e.detach()}});
$rmod.def("/raptor-util@1.0.10/isObjectEmpty",function(r,t,n,e,i){n.exports=function(r){if(!r)return!0;for(var t in r)if(r.hasOwnProperty(t))return!1;return!0}});
$rmod.def("/marko@3.0.0/taglibs/async/async-fragment-tag-transformer", function(require, exports, module, __filename, __dirname) { 'use strict';

var isObjectEmpty = require('/$/marko/$/raptor-util/isObjectEmpty'/*'raptor-util/isObjectEmpty'*/);

module.exports = function transform(el, context) {
    var varName = el.getAttributeValue('var');
    if (varName) {
        if (varName.type !== 'Literal' || typeof varName.value !== 'string') {
            context.addError(el, 'The "var" attribute value should be a string');
            return;
        }

        varName = varName.value;

        if (!context.util.isValidJavaScriptIdentifier(varName)) {
            context.addError(el, 'The "var" attribute value should be a valid JavaScript identifier');
            return;
        }
    } else {
        context.addError(el, 'The "var" attribute is required');
        return;
    }

    var attrs = el.getAttributes().concat([]);
    var arg = {};
    var builder = context.builder;

    attrs.forEach((attr) => {
        var attrName = attr.name;
        if (attrName.startsWith('arg-')) {
            let argName = attrName.substring('arg-'.length);
            arg[argName] = attr.value;
            el.removeAttribute(attrName);
        }
    });

    var dataProviderAttr = el.getAttribute('data-provider');
    if (!dataProviderAttr) {
        context.addError(el, 'The "data-provider" attribute is required');
        return;
    }

    if (dataProviderAttr.value == null) {
        context.addError(el, 'A value is required for the "data-provider" attribute');
        return;
    }

    if (dataProviderAttr.value.type == 'Literal') {
        context.addError(el, 'The "data-provider" attribute value should not be a literal ' + (typeof dataProviderAttr.value.value));
        return;
    }

    var name = el.getAttributeValue('name');
    if (name == null) {
        el.setAttributeValue('_name', builder.literal(dataProviderAttr.rawValue));
    }

    if (el.hasAttribute('arg')) {
        if (isObjectEmpty(arg)) {
            arg = el.getAttributeValue('arg');
        } else {
            let mergeVar = context.addStaticVar('__merge', '__helpers.m');
            arg = builder.functionCall(mergeVar, [
                builder.literal(arg), // Input props from the attributes take precedence
                el.getAttributeValue('arg')
            ]);
        }
    } else {
        if (isObjectEmpty(arg)) {
            arg = null;
        } else {
            arg = builder.literal(arg);
        }
    }

    if (arg) {
        el.setAttributeValue('arg', arg);
    }

    var timeoutMessage = el.getAttributeValue('timeout-message');
    if (timeoutMessage) {
        el.removeAttribute('timeout-message');
        el.setAttributeValue('renderTimeout', builder.renderBodyFunction([
            builder.text(timeoutMessage)
        ]));
    }

    var errorMessage = el.getAttributeValue('error-message');
    if (errorMessage) {
        el.removeAttribute('error-message');
        el.setAttributeValue('renderError', builder.renderBodyFunction([
            builder.text(errorMessage)
        ]));
    }

    var placeholder = el.getAttributeValue('placeholder');
    if (placeholder) {
        el.removeAttribute('placeholder');
        el.setAttributeValue('renderPlaceholder', builder.renderBodyFunction([
            builder.text(placeholder)
        ]));
    }
};

});
$rmod.dep("/$/marko","raptor-logging","1.0.8");
$rmod.dep("/$/marko","raptor-polyfill","1.0.2");
$rmod.dep("/$/marko/$/raptor-logging","raptor-stacktraces","1.0.1");
$rmod.dep("/$/marko","raptor-async","1.1.2");
$rmod.remap("/marko@3.0.2/taglibs/async/client-reorder","client-reorder-browser");
$rmod.def("/marko@3.0.0/taglibs/async/client-reorder-browser",function(r,e,o,d,i){e.isSupported=!1});
$rmod.def("/marko@3.0.0/taglibs/async/async-fragment-tag",function(e,n,r,t,o){"use strict";function a(e){return e&&"function"==typeof e.then}function l(e,n,r){if(n){var t=e.then(function(e){n(null,e)});"function"==typeof e["catch"]?t=t["catch"](function(e){n(e)}):"function"==typeof e.fail&&(t=t.fail(function(e){n(e)})),t.done&&t.done()}return e}function i(e,n,r,t){if(a(e))return void l(e,r);if("function"==typeof e){var o=1===e.length?e.call(t,r):e.call(t,n,r);void 0!==o&&(a(o)?l(o,r):r(null,o))}else r(null,e)}var u=e("/$/marko/$/raptor-logging").logger(r),c=e("/$/marko/$/async-writer"),f=e("/$/marko/$/raptor-async/AsyncValue"),s=e("./client-reorder").isSupported;r.exports=function(e,n){function r(r,t,o){g&&(clearTimeout(g),g=null),d=!0;var i=a||n;l.emit("asyncFragmentBeforeRender",{clientReorder:m,out:i,name:y}),r?e.renderError?(console.error("Async fragment ("+y+") failed. Error:",r.stack||r),e.renderError(i)):i.error(r):o?o(a):e.renderBody&&e.renderBody(i,t),m||l.emit("asyncFragmentFinish",{clientReorder:!1,out:i}),a&&(a.end(),m||n.flush())}var t=e.dataProvider,o=e.arg||{};o.out=n;var a,l=n.global.events,m=s&&e.clientReorder===!0,d=!1,g=null,y=e.name||e._name,p=e.scope||this,v=e.method;if(v&&(t=t[v].bind(t)),i(t,o,r,p),!d){var h=e.timeout,b=e.renderTimeout;if(null==h?h=1e4:0>=h&&(h=null),null!=h&&(g=setTimeout(function(){var e="Async fragment ("+y+") timed out after "+h+"ms";b?(u.error(e),r(null,null,b)):r(new Error(e))},h)),m){var $=n.global.__asyncFragments||($=n.global.__asyncFragments={fragments:[],nextId:0}),F=e.name||$.nextId++;n.write('<span id="afph'+F+'">'+(e.placeholder||"")+"</span>");var k=new f;a=c.create(null,{global:n.global}),a.on("finish",function(){k.resolve(a.getOutput())}).on("error",function(e){k.reject(e)});var w={id:F,asyncValue:k,out:a,after:e.showAfter};$.fragments?$.fragments.push(w):l.emit("asyncFragmentBegin",w)}else n.flush(),a=n.beginAsync({timeout:0,name:y})}}});
$rmod.def("/marko@3.0.0/taglibs/async/async-fragments-tag",function(e,t,n,r,a){var i=e("./client-reorder");n.exports=function(e,t){var n=t.global,r=n.events;t.flush();var a=t.beginAsync({last:!0,timeout:-1});t.onLast(function(e){function s(s){s.asyncValue.done(function(f,d){if(!c){if(f)return c=!0,a.error(f);n._afRuntime||(a.write(i.getCode()),n._afRuntime=!0),a.write('<div id="af'+s.id+'" style="display:none">'+d+'</div><script type="text/javascript">$af('+("number"==typeof s.id?s.id:'"'+s.id+'"')+(s.after?',"'+s.after+'"':"")+")</script>"),s.out.writer=a.writer,r.emit("asyncFragmentFinish",{clientReorder:!0,out:s.out}),t.flush(),0===--o&&(c=!0,a.end(),e())}})}var f=n.__asyncFragments;if(!f||!f.fragments.length)return a.end(),void e();var o=f.fragments.length,c=!1;f.fragments.forEach(s),r.on("asyncFragmentBegin",function(e){o++,s(e)}),delete f.fragments})}});
$rmod.def("/marko@3.0.0/taglibs/async/client-reorder-runtime",function(r,e,n,i,o){});
$rmod.def("/marko@3.0.0/taglibs/async/client-reorder-runtime.min",function(n,r,e,i,m){});
$rmod.def("/marko@3.0.0/taglibs/core/assign-tag", function(require, exports, module, __filename, __dirname) { module.exports = function codeGenerator(elNode, generator) {
    var attributes = elNode.attributes;

    if (!attributes) {
        generator.addError('Invalid <assign> tag. Argument is missing. Example; <assign x=123 />');
        return elNode;
    }

    var builder = generator.builder;

    return attributes.map((attr) => {
        return builder.assignment(attr.name, attr.value);
    });
};
});
$rmod.def("/marko@3.0.0/compiler/util/removeComments", function(require, exports, module, __filename, __dirname) { 'use strict';
var tokenizer = require('./tokenizer').create([
    {
        name: 'stringDouble',
        pattern: /"(?:[^"]|\\")*"/,
    },
    {
        name: 'stringSingle',
        pattern: /'(?:[^']|\\')*'/
    },
    {
        name: 'singleLineComment',
        pattern: /\/\/.*/
    },
    {
        name: 'multiLineComment',
        pattern: /\/\*(?:[\s\S]*?)\*\//
    }
]);

/**
 * Parses a for loop string in the following forms:
 *
 * <varName> in <expression>
 * <varName> in <expression> | status-var=<varName> separator=<expression>
 * <varName> from <expression> to <expression>
 * <varName> from <expression> to <expression> step <expression>
 * <init>; <test>; <update>
 */
module.exports = function removeComments(str) {

    var comments = [];

    tokenizer.forEachToken(str, (token) => {
        switch(token.name) {
            case 'singleLineComment':
            case 'multiLineComment':
                comments.push(token);
                break;
        }
    });

    var len = comments.length;

    if (len) {
        for (var i=len-1; i>=0; i--) {
            var comment = comments[i];
            str = str.substring(0, comment.start) + str.substring(comment.end);
        }
    }

    return str;
};
});
$rmod.def("/marko@3.0.0/compiler/util/tokenizer", function(require, exports, module, __filename, __dirname) { 'use strict';

function create(tokens) {
    function getToken(matches) {
        for (var i=0; i<tokens.length; i++) {
            let tokenValue = matches[i + 1];
            if (tokenValue != null) {
                var tokenDef = tokens[i];
                return {
                    start: matches.index,
                    end: matches.index + matches[0].length,
                    name: tokenDef.name,
                    value: tokenValue
                };
            }
        }
    }

    var tokensRegExp = new RegExp(tokens
        .map((token) => {
            return '(' + token.pattern.source + ')';
        })
        .join('|'), 'g');

    return {
        forEachToken: function(value, callback, thisObj) {
            tokensRegExp.lastIndex = 0; // Start searching from the beginning again
            var matches;
            while ((matches = tokensRegExp.exec(value))) {
                let token = getToken(matches);
                callback.call(this, token);
            }
        }
    };
}

exports.create = create;
});
$rmod.def("/marko@3.0.0/taglibs/core/util/parseFor", function(require, exports, module, __filename, __dirname) { 'use strict';
var removeComments = require('../../../compiler/util/removeComments');
var compiler = require('../../../compiler');

var integerRegExp = /^-?\d+$/;
var numberRegExp = /^-?(?:\d+|\d+\.\d*|\d*\.\d+|\d+\.\d+)$/;

var tokenizer = require('../../../compiler/util/tokenizer').create([
    {
        name: 'stringDouble',
        pattern: /"(?:[^"]|\\")*"/,
    },
    {
        name: 'stringSingle',
        pattern: /'(?:[^']|\\')*'/
    },
    {
        name: 'in',
        pattern: /\s+in\s+/,
    },
    {
        name: 'from',
        pattern: /\s+from\s+/
    },
    {
        name: 'to',
        pattern: /\s+to\s+/,
    },
    {
        name: 'step',
        pattern: /\s+step\s+/,
    },
    {
        name: 'semicolon',
        pattern: /[;]/,
    },
    {
        name: 'separator',
        pattern: /separator=/
    },
    {
        name: 'status-var',
        pattern: /status\-var=/
    },
    {
        name: 'iterator',
        pattern: /iterator=/
    },
    {
        name: 'pipe',
        pattern: /\s+\|\s+/
    },
    {
        name: 'groupOpen',
        pattern: /[\{\(\[]/
    },
    {
        name: 'groupClose',
        pattern: /[\}\)\]]/
    }
]);

function throwError(message) {
    var error = new Error(message);
    error.code = 'INVALID_FOR';
    throw error;
}

function buildIdentifier(name, errorMessage) {
    try {
        return compiler.builder.identifier(name);
    } catch(e) {
        throwError(errorMessage + ': ' + e.message);
    }
}

function parseExpression(str, errorMessage) {
    try {
        return compiler.builder.parseExpression(str);
    } catch(e) {
        throwError(errorMessage + ': ' + e.message);
    }
}

function parseStatement(str, errorMessage) {
    try {
        return compiler.builder.parseStatement(str);
    } catch(e) {
        throwError(errorMessage + ': ' + e.message);
    }
}

function createNumberExpression(str, errorMessage) {
    if (str == null) {
        return null;
    }

    if (integerRegExp.test(str)) {
        return compiler.builder.literal(parseInt(str, 10));
    } else if (numberRegExp.test(str)) {
        return compiler.builder.literal(parseFloat(str));
    } else {
        return parseExpression(str, errorMessage);
    }
}

/**
 * Parses a for loop string in the following forms:
 *
 * <varName> in <expression>
 * <varName> in <expression> | status-var=<varName> separator=<expression>
 * <varName> from <expression> to <expression>
 * <varName> from <expression> to <expression> step <expression>
 * <init>; <test>; <update>
 */
module.exports = function(str) {
    str = removeComments(str);

    let depth = 0;
    var prevToken;
    var loopType;
    var pipeFound = false;

    var varName;
    var nameVarName;
    var valueVarName;
    var inExpression;
    var statusVarName;
    var separatorExpression;
    var fromExpression;
    var toExpression;
    var stepExpression;
    var iteratorExpression;

    var forInit;
    var forTest;
    var forUpdate;

    function finishVarName(end) {
        varName = str.substring(0, end).trim();
    }

    function finishPrevPart(end) {
        if (!prevToken) {
            return;
        }

        var start = prevToken.end;
        var part = str.substring(start, end).trim();

        switch(prevToken.name) {
            case 'from':
                fromExpression = part;
                break;
            case 'to':
                toExpression = part;
                break;
            case 'in':
                inExpression = part;
                break;
            case 'step':
                stepExpression = part;
                break;
            case 'status-var':
                statusVarName = part;
                break;
            case 'separator':
                separatorExpression = part;
                break;
            case 'iterator':
                iteratorExpression = part;
                break;
            case 'pipe':
                if (part.length !== 0) {
                    throwError('Unexpected input: ' + part);
                    return;
                }
                break;
        }
    }

    tokenizer.forEachToken(str, (token) => {
        switch(token.name) {
            case 'groupOpen':
                depth++;
                break;
            case 'groupClose':
                depth--;
                break;
            case 'in':
                if (depth === 0 && !loopType) {
                    loopType = 'ForEach';
                    finishVarName(token.start);
                    prevToken = token;
                }
                break;
            case 'from':
                if (depth === 0 && !loopType) {
                    loopType = 'ForRange';
                    finishVarName(token.start);
                    prevToken = token;
                }
                break;
            case 'to':
                if (depth === 0 && prevToken && prevToken.name === 'from') {
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
            case 'step':
                if (depth === 0 && prevToken && prevToken.name === 'to') {
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
            case 'semicolon':
                if (depth === 0) {
                    loopType = 'For';

                    if (forInit == null) {
                        forInit = str.substring(0, token.start);
                    } else if (forTest == null) {
                        forTest = str.substring(prevToken.end, token.start);
                        forUpdate = str.substring(token.end);
                    } else {
                        throwError('Invalid native for loop. Expected format: <init>; <test>; <update>');
                    }

                    prevToken = token;
                }
                break;
            case 'pipe':
                if (depth === 0) {
                    pipeFound = true;
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
            case 'status-var':
                if (depth === 0 && pipeFound && str.charAt(token.start-1) === ' ') {
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
            case 'separator':
                if (depth === 0 && pipeFound && str.charAt(token.start-1) === ' ') {
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
            case 'iterator':
                if (depth === 0 && pipeFound && str.charAt(token.start-1) === ' ') {
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
        }
    });

    finishPrevPart(str.length);

    if (loopType === 'ForEach') {
        var nameValue = varName.split(/\s*,\s*/);
        if (nameValue.length === 2) {
            nameVarName = buildIdentifier(nameValue[0], 'Invalid name variable');
            valueVarName = buildIdentifier(nameValue[1], 'Invalid value variable');
            varName = null;
            loopType = 'ForEachProp';
        }
    }

    if (inExpression) {
        inExpression = parseExpression(inExpression, 'Invalid "in" expression');
    }

    if (separatorExpression) {
        separatorExpression = parseExpression(separatorExpression, 'Invalid "separator" expression');
    }

    if (iteratorExpression) {
        iteratorExpression = parseExpression(iteratorExpression, 'Invalid "iterator" expression');
    }

    if (fromExpression) {
        fromExpression = createNumberExpression(fromExpression, 'Invalid "from" expression');
    }

    if (toExpression) {
        toExpression = createNumberExpression(toExpression, 'Invalid "to" expression');
    }

    if (stepExpression) {
        stepExpression = createNumberExpression(stepExpression, 'Invalid "step" expression');
    }

    if (varName != null) {
        varName = buildIdentifier(varName, 'Invalid variable name');
    }

    if (statusVarName) {
        statusVarName = parseExpression(statusVarName, 'Invalid status-var option');
        if (statusVarName.type === 'Literal') {
            statusVarName = compiler.builder.identifier(statusVarName.value);
        } else  if (statusVarName.type !== 'Identifier') {
            throwError('Invalid status-var option');
        }
    }

    if (forInit) {
        forInit = parseStatement(forInit, 'Invalid for loop init');
    }

    if (forTest) {
        forTest = parseExpression(forTest, 'Invalid for loop test');
    }

    if (forUpdate) {
        forUpdate = parseExpression(forUpdate, 'Invalid for loop update');
    }

    // No more tokens... now we need to sort out what happened
    if (loopType === 'ForEach') {
        return {
            'loopType': loopType,
            'varName': varName,
            'in': inExpression,
            'separator': separatorExpression,
            'statusVarName': statusVarName,
            'iterator': iteratorExpression
        };
    } else if (loopType === 'ForEachProp') {
        return {
            'loopType': loopType,
            'nameVarName': nameVarName,
            'valueVarName': valueVarName,
            'in': inExpression
        };
    } else if (loopType === 'ForRange') {
        return {
            'loopType': loopType,
            'varName': varName,
            'from': fromExpression,
            'to': toExpression,
            'step': stepExpression
        };
    } else if (loopType === 'For') {
        if (forTest == null) {
            throwError('Invalid native for loop. Expected format: <init>; <test>; <update>');
        }
        return {
            'loopType': loopType,
            'init': forInit,
            'test': forTest,
            'update': forUpdate
        };
    } else {
        throwError('Invalid for loop');
    }
};
});
$rmod.def("/marko@3.0.0/taglibs/core/util/createLoopNode",function(o,r,e,p,t){function a(o,r,e){var p=n(o);if(p.body=r,"ForEach"===p.loopType)return e.forEach(p);if("ForRange"===p.loopType)return e.forRange(p);if("ForEachProp"===p.loopType)return e.forEachProp(p);if("For"===p.loopType)return e.forStatement(p);throw new Error("Unsupported loop type: "+p.loopType)}var n=o("./parseFor");e.exports=a});
$rmod.def("/marko@3.0.0/taglibs/core/core-transformer", function(require, exports, module, __filename, __dirname) { 'use strict';

var createLoopNode = require('./util/createLoopNode');

var coreAttrHandlers = [
    [
        'while', function(attr, node) {
            var whileArgument = attr.argument;
            if (!whileArgument) {
                return false;
            }

            var whileNode = this.builder.whileStatement(whileArgument);
            node.wrapWith(whileNode);
        }
    ],
    [
        'for', function(attr, node) {
            var forArgument = attr.argument;
            if (!forArgument) {
                return false;
            }

            var loopNode;

            try {
                loopNode = createLoopNode(forArgument, null, this.builder);
            } catch(e) {
                if (e.code === 'INVALID_FOR') {
                    this.addError(e.message);
                    return;
                } else {
                    throw e;
                }
            }


            //Surround the existing node with the newly created loop node
            // NOTE: The loop node will be one of the following:
            //       ForEach, ForRange, ForEachProp or ForStatement
            node.wrapWith(loopNode);
        }
    ],
    [
        'if', function(attr, node) {
            var ifArgument = attr.argument;
            if (!ifArgument) {
                return false;
            }

            var test;
            try {
                test = this.builder.parseExpression(ifArgument);
            } catch(e) {
                test = this.builder.literalFalse();
                this.addError('Invalid expression for if statement:\n' + e.message);
            }

            var ifNode = this.builder.ifStatement(test);
            //Surround the existing node with an "If" node
            node.wrapWith(ifNode);
        }
    ],
    [
        'unless', function(attr, node) {
            var ifArgument = attr.argument;
            if (!ifArgument) {
                return false;
            }

            var test;
            try {
                test = this.builder.parseExpression(ifArgument);
            } catch(e) {
                test = this.builder.literalFalse();
                this.addError('Invalid expression for unless statement:\n' + e.message);
            }

            test = this.builder.negate(test);
            var ifNode = this.builder.ifStatement(test);
            //Surround the existing node with an "if" node
            node.wrapWith(ifNode);
        }
    ],
    [
        'else-if', function(attr, node) {
            var elseIfArgument = attr.argument;
            if (!elseIfArgument) {
                return false;
            }

            var test;
            try {
                test = this.builder.parseExpression(elseIfArgument);
            } catch(e) {
                test = this.builder.literalFalse();
                this.addError('Invalid expression for else-if statement:\n' + e.message);
            }

            var elseIfNode = this.builder.elseIfStatement(test);
            //Surround the existing node with an "ElseIf" node
            node.wrapWith(elseIfNode);
        }
    ],
    [
        'else', function(attr, node) {
            var elseNode = this.builder.elseStatement();
            //Surround the existing node with an "Else" node
            node.wrapWith(elseNode);
        }
    ],
    [
        'body-only-if', function(attr, node, el) {
            var argument = attr.argument;
            if (!argument) {
                return false;
            }

            var test;
            try {
                test = this.builder.parseExpression(argument);
            } catch(e) {
                test = this.builder.literalFalse();
                this.addError('Invalid expression for body-only-if statement:\n' + e.message);
            }

            el.setBodyOnlyIf(test);
        }
    ],
    [
        'marko-preserve-whitespace', function(attr, node, el) {
            el.setPreserveWhitespace(true);
        }
    ],
    [
        'marko-init', function(attr, node, el) {
            if (el.tagName !== 'script') {
                this.addError('The "marko-init" attribute should only be used on the <script> tag');
                return;
            }
            var bodyText = el.bodyText;
            el.noOutput = true;
            this.context.addStaticCode(bodyText);
            el.detach();
            return null;
        }
    ]
];

class AttributeTransformer {
    constructor(context, el) {
        this.context = context;
        this.builder = context.builder;
        this.el = el;
    }

    addError(message) {
        this.context.addError({
            node: this.el,
            message: message
        });
    }
}

coreAttrHandlers.forEach(function(attrHandler) {
    var name = attrHandler[0];
    var func = attrHandler[1];
    AttributeTransformer.prototype[name] = func;
});

var attributeTransformers = AttributeTransformer.prototype;

module.exports = function transform(el, context) {
    el.removeAttribute('marko-body'); // This attribute is handled at parse time. We can just remove it now

    var attributeTransfomer;
    var node = el;

    el.forEachAttribute((attr) => {
        let attrName = attr.name;
        if (!attrName) {
            if (!node.addDynamicAttributes) {
                context.addError(el, 'Node does not support the "attrs" attribute');
            } else {
                node.addDynamicAttributes(attr.value);
            }
            return;
        }
        var attrTransformerFunc = attributeTransformers[attrName];
        if (attrTransformerFunc) {
            if (!attributeTransfomer) {
                attributeTransfomer = new AttributeTransformer(context, el);
            }
            var newNode = attributeTransfomer[attrName](attr, node, el);
            if (newNode !== false) {
                el.removeAttribute(attrName);
                if (newNode !== undefined) {
                    if (newNode) {
                        newNode.pos = node.pos;
                    }

                    node = newNode;
                }
            }
        }
    });
};
});
$rmod.def("/marko@3.0.0/taglibs/core/else-if-tag",function(e,r,t,a,i){t.exports=function(e,r){var t=e.argument,a=e.attributes;if(!t)return r.addError(e,"Invalid <else-if> tag. Argument is missing. Example; <if(foo === true)>"),e;if(a.length)return r.addError(e,"Invalid <else-if> tag. Attributes not allowed."),e;var i;try{i=r.builder.parseExpression(t)}catch(s){i=r.builder.literalFalse(),r.addError(e,"Invalid expression for else-if statement:\n"+s.message)}var n=r.builder.elseIfStatement(i);return n}});
$rmod.def("/marko@3.0.0/taglibs/core/else-tag", function(require, exports, module, __filename, __dirname) { 'use strict';

module.exports = function nodeFactory(el, context) {

    var elseStatement = context.builder.elseStatement();

    var argument = el.argument;
    if (argument) {
        context.addError(elseStatement, 'Invalid <else> tag. Argument is not allowed');
    }

    if (el.hasAttribute('if')) {
        let ifAttr = el.getAttribute('if');
        el.removeAttribute('if');

        if (el.attributes.length) {
            context.addError(elseStatement, 'Invalid <else if> tag. Only the "if" attribute is allowed.');
            return el;
        }

        var testExpression = ifAttr.argument;
        if (!testExpression) {
            context.addError(elseStatement, 'Invalid <else if> tag. Invalid "if" attribute. Expected: <else if(<test>)>');
            return el;
        }
        var elseIfStatement = context.builder.elseIfStatement(testExpression);
        return elseIfStatement;
    }

    if (el.attributes.length) {
        context.addError(elseStatement, 'Invalid <else> tag. Attributes not allowed.');
        return el;
    }

    return elseStatement;
};
});
$rmod.def("/marko@3.0.0/taglibs/core/for-tag",function(r,o,a,e,t){var i=r("./util/createLoopNode");a.exports=function(r,o){var a=r.argument;if(!a)return o.addError("Invalid <for> tag. Argument is missing. Example: <for(color in colors)>"),r;var e=o.builder;try{var t=i(a,r.body,e);return t}catch(d){if("INVALID_FOR"!==d.code)throw d;o.addError(d.message)}}});
$rmod.def("/marko@3.0.0/taglibs/core/if-tag",function(r,t,e,i,a){e.exports=function(r,t){var e=r.argument;if(!e)return t.addError(r,"Invalid <if> tag. Argument is missing. Example; <if(foo === true)>"),r;var i=r.attributes;if(i.length)return void t.addError(r,"Invalid <if> tag. Attributes not allowed.");var a;try{a=t.builder.parseExpression(e)}catch(n){a=t.builder.literalFalse(),t.addError(r,"Invalid expression for if statement:\n"+n.message)}return t.builder.ifStatement(a)}});
$rmod.def("/marko@3.0.0/taglibs/core/include-tag", function(require, exports, module, __filename, __dirname) { 'use strict';

module.exports = function codeGenerator(el, codegen) {
    let argument = el.argument;
    if (!argument) {
        return;
    }

    let builder = codegen.builder;
    let args = builder.parseJavaScriptArgs(argument);
    if (args.length === 0) {
        codegen.addError('Template path is required for the <include(templatePath[, templateData])> tag');
        return;
    } else if (args.length > 2) {
        codegen.addError('Wrong number of arguments passed to the <include> tag. Expected: <include(templatePath[, templateData])> tag');
        return;
    }

    let templatePath = args[0];
    let templateVar;

    if (templatePath.type === 'Literal') {
        templateVar = codegen.context.importTemplate(templatePath.value);
    } else {
        templateVar = templatePath;
    }

    let templateData = {};
    let attrs = el.getAttributes();
    attrs.forEach((attr) => {
        templateData[attr.name] = attr.value;
    });

    if (el.body && el.body.length) {
        templateData.renderBody = builder.renderBodyFunction(el.body);
    }

    if (args.length === 2) {
        if (Object.keys(templateData).length === 0) {
            templateData = args[1];
        } else {
            let mergeVar = codegen.addStaticVar('__merge', '__helpers.m');
            templateData = builder.functionCall(mergeVar, [
                builder.literal(templateData), // Input props from the attributes take precedence
                args[1] // The template data object is passed as the second argument: <include("./foo.marko", { ... })/>
            ]);
        }
    } else {
        templateData = builder.literal(templateData);
    }

    let renderMethod = builder.memberExpression(templateVar, builder.identifier('render'));
    let renderArgs = [ templateData, 'out' ];
    let renderFunctionCall = builder.functionCall(renderMethod, renderArgs);
    return renderFunctionCall;
};
});
$rmod.def("/marko@3.0.0/taglibs/core/include-text-tag-browser", function(require, exports, module, __filename, __dirname) { 'use strict';
module.exports = function codeGenerator(el, codegen) {
    let argument = el.argument;
    if (!argument) {
        return;
    }

    let builder = codegen.builder;
    let pathExpression = builder.parseExpression(argument);
    if (pathExpression.type !== 'Literal' || typeof pathExpression.value !== 'string') {
        codegen.addError('Argument to the <include-text> tag should be a string value: <include-text("./foo.txt")/>');
        return;
    }

    var path = pathExpression.value;
    return builder.text(builder.literal('<include-text> cannot be compiled in the browser (path="' + path + '")'));
};
});
$rmod.def("/marko@3.0.0/taglibs/core/invoke-tag",function(o,r,e,n,i){e.exports=function(o,r){var e=o.attributes[0];if(!e)return void r.addError('Invalid <invoke> tag. Missing function attribute. Expected: <invoke console.log("Hello World")');var n=e.argument;if(void 0===n)return void r.addError('Invalid <invoke> tag. Missing function arguments. Expected: <invoke console.log("Hello World")');var i=e.name,t=i+"("+n+")";return r.builder.parseExpression(t)}});
$rmod.def("/marko@3.0.0/taglibs/core/macro-body-tag",function(r,e,o,t,n){o.exports=function(r,e){var o=e.builder;return o.ifStatement(o.identifier("renderBody"),[o.functionCall("renderBody",["out"])])}});
$rmod.def("/marko@3.0.0/taglibs/core/macro-tag",function(r,a,t,e,n){t.exports=function(r,a){var t=r.attributes;if(t.length){var e=t[0];if(null!=e.argument){var n,o=r.body,i=e.name,u=e.argument;n=u?u.split(/\s*,\s*/):[];var m=a.builder;return m.macro(i,n,o)}}}});
$rmod.def("/marko@3.0.0/taglibs/core/unless-tag",function(e,r,t,a,n){t.exports=function(e,r){var t=e.argument;if(!t)return r.addError(e,"Invalid <unless> tag. Argument is missing. Example; <unless(foo === true)>"),e;var a=e.attributes;if(a.length)return void r.addError(e,"Invalid <unless> tag. Attributes not allowed.");var n,s=r.builder;try{n=s.parseExpression(t)}catch(i){n=s.literalFalse(),r.addError(e,"Invalid expression for unless statement:\n"+i.message)}return r.builder.ifStatement(s.negate(n))}});
$rmod.def("/marko@3.0.0/taglibs/core/var-tag", function(require, exports, module, __filename, __dirname) { var isValidJavaScriptVarName = require('../../compiler/util/isValidJavaScriptVarName');

module.exports = function nodeFactory(el, context) {
    var builder = context.builder;
    var hasError = false;

    var declarations = el.attributes.map((attr) => {
        var varName = attr.name;

        if (!isValidJavaScriptVarName(varName)) {
            context.addError(el, 'Invalid JavaScript variable name: ' + varName, 'INVALID_VAR_NAME');
            hasError = true;
            return;
        }

        var id = builder.identifier(varName);
        var init = attr.value;

        return {
            id: id,
            init
        };
    });

    if (hasError) {
        return el;
    }

    return context.builder.vars(declarations);
};
});
$rmod.def("/marko@3.0.0/taglibs/core/while-tag",function(r,e,i,t,a){i.exports=function(r,e){var i=r.argument;if(!i)return e.addError("Invalid <while> tag. Argument is missing. Example: <while(i < 4)>"),r;var t=e.builder;return t.whileStatement(t.parseExpression(i),r.body)}});
$rmod.def("/marko@3.0.0/taglibs/html/html-comment-tag",function(t,e,r,o,n){"use strict";r.exports=function(t,e){e.write("<!--"),t.renderBody&&t.renderBody(e),e.write("-->")}});
$rmod.main("/assert@1.3.0","assert");
$rmod.dep("","assert","1.3.0");
$rmod.main("/util@0.10.3","util");
$rmod.dep("","util","0.10.3");
$rmod.remap("/util@0.10.3/support/isBuffer","isBufferBrowser");
$rmod.def("/util@0.10.3/support/isBufferBrowser",function(o,t,f,n,e){f.exports=function(o){return o&&"object"==typeof o&&"function"==typeof o.copy&&"function"==typeof o.fill&&"function"==typeof o.readUInt8}});
$rmod.main("/inherits@2.0.1","inherits");
$rmod.dep("","inherits","2.0.1");
$rmod.dep("/$/lasso/$/lasso-require/$/util","inherits","2.0.1");
$rmod.remap("/inherits@2.0.1/inherits","inherits_browser");
$rmod.def("/inherits@2.0.1/inherits_browser",function(t,e,o,r,n){"function"==typeof Object.create?o.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:o.exports=function(t,e){t.super_=e;var o=function(){};o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t}});
$rmod.dep("/$/lasso/$/lasso-require","util","0.10.3");
$rmod.def("/util@0.10.3/util",function(e,t,n,r,i){function o(e,n){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),m(n)?r.showHidden=n:n&&t._extend(r,n),j(r.showHidden)&&(r.showHidden=!1),j(r.depth)&&(r.depth=2),j(r.colors)&&(r.colors=!1),j(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),l(r,e,r.depth)}function u(e,t){var n=o.styles[t];return n?"["+o.colors[n][0]+"m"+e+"["+o.colors[n][1]+"m":e}function s(e,t){return e}function c(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}function l(e,n,r){if(e.customInspect&&n&&D(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,e);return O(i)||(i=l(e,i,r)),i}var o=a(e,n);if(o)return o;var u=Object.keys(n),s=c(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(n)),E(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return f(n);if(0===u.length){if(D(n)){var m=n.name?": "+n.name:"";return e.stylize("[Function"+m+"]","special")}if(z(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(x(n))return e.stylize(Date.prototype.toString.call(n),"date");if(E(n))return f(n)}var h="",b=!1,v=["{","}"];if(d(n)&&(b=!0,v=["[","]"]),D(n)){var S=n.name?": "+n.name:"";h=" [Function"+S+"]"}if(z(n)&&(h=" "+RegExp.prototype.toString.call(n)),x(n)&&(h=" "+Date.prototype.toUTCString.call(n)),E(n)&&(h=" "+f(n)),0===u.length&&(!b||0==n.length))return v[0]+h+v[1];if(0>r)return z(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special");e.seen.push(n);var j;return j=b?p(e,n,r,s,u):u.map(function(t){return g(e,n,r,s,t,b)}),e.seen.pop(),y(j,h,v)}function a(e,t){if(j(t))return e.stylize("undefined","undefined");if(O(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return v(t)?e.stylize(""+t,"number"):m(t)?e.stylize(""+t,"boolean"):h(t)?e.stylize("null","null"):void 0}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,i){for(var o=[],u=0,s=t.length;s>u;++u)$(t,String(u))?o.push(g(e,t,n,r,String(u),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(g(e,t,n,r,i,!0))}),o}function g(e,t,n,r,i,o){var u,s,c;if(c=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]},c.get?s=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(s=e.stylize("[Setter]","special")),$(r,i)||(u="["+i+"]"),s||(e.seen.indexOf(c.value)<0?(s=h(n)?l(e,c.value,null):l(e,c.value,n-1),s.indexOf("\n")>-1&&(s=o?s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n"))):s=e.stylize("[Circular]","special")),j(u)){if(o&&i.match(/^\d+$/))return s;u=JSON.stringify(""+i),u.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+s}function y(e,t,n){var r=0,i=e.reduce(function(e,t){return r++,t.indexOf("\n")>=0&&r++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0);return i>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function d(e){return Array.isArray(e)}function m(e){return"boolean"==typeof e}function h(e){return null===e}function b(e){return null==e}function v(e){return"number"==typeof e}function O(e){return"string"==typeof e}function S(e){return"symbol"==typeof e}function j(e){return void 0===e}function z(e){return w(e)&&"[object RegExp]"===A(e)}function w(e){return"object"==typeof e&&null!==e}function x(e){return w(e)&&"[object Date]"===A(e)}function E(e){return w(e)&&("[object Error]"===A(e)||e instanceof Error)}function D(e){return"function"==typeof e}function N(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||"undefined"==typeof e}function A(e){return Object.prototype.toString.call(e)}function J(e){return 10>e?"0"+e.toString(10):e.toString(10)}function R(){var e=new Date,t=[J(e.getHours()),J(e.getMinutes()),J(e.getSeconds())].join(":");return[e.getDate(),C[e.getMonth()],t].join(" ")}function $(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var H=e("process"),U=/%[sdj%]/g;t.format=function(e){if(!O(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(o(arguments[n]));return t.join(" ")}for(var n=1,r=arguments,i=r.length,u=String(e).replace(U,function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return e}}),s=r[n];i>n;s=r[++n])u+=h(s)||!w(s)?" "+s:" "+o(s);return u},t.deprecate=function(e,n){function r(){if(!i){if(H.throwDeprecation)throw new Error(n);H.traceDeprecation?console.trace(n):console.error(n),i=!0}return e.apply(this,arguments)}if(j(global.process))return function(){return t.deprecate(e,n).apply(this,arguments)};if(H.noDeprecation===!0)return e;var i=!1;return r};var _,B={};t.debuglog=function(e){if(j(_)&&(_=H.env.NODE_DEBUG||""),e=e.toUpperCase(),!B[e])if(new RegExp("\\b"+e+"\\b","i").test(_)){var n=H.pid;B[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else B[e]=function(){};return B[e]},t.inspect=o,o.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},o.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=d,t.isBoolean=m,t.isNull=h,t.isNullOrUndefined=b,t.isNumber=v,t.isString=O,t.isSymbol=S,t.isUndefined=j,t.isRegExp=z,t.isObject=w,t.isDate=x,t.isError=E,t.isFunction=D,t.isPrimitive=N,t.isBuffer=e("./support/isBuffer");var C=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];t.log=function(){console.log("%s - %s",R(),t.format.apply(t,arguments))},t.inherits=e("inherits"),t._extend=function(e,t){if(!t||!w(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}});
$rmod.dep("/$/lasso/$/lasso-require","assert","1.3.0");
$rmod.def("/assert@1.3.0/assert",function(t,e,r,n,i){function o(t,e){return E.isUndefined(e)?""+e:E.isNumber(e)&&!isFinite(e)?e.toString():E.isFunction(e)||E.isRegExp(e)?e.toString():e}function a(t,e){return E.isString(t)?t.length<e?t:t.slice(0,e):t}function s(t){return a(JSON.stringify(t.actual,o),128)+" "+t.operator+" "+a(JSON.stringify(t.expected,o),128)}function u(t,e,r,n,i){throw new x.AssertionError({message:r,actual:t,expected:e,operator:n,stackStartFunction:i})}function c(t,e){t||u(t,!0,e,"==",x.ok)}function l(t,e){if(t===e)return!0;if(E.isBuffer(t)&&E.isBuffer(e)){if(t.length!=e.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}return E.isDate(t)&&E.isDate(e)?t.getTime()===e.getTime():E.isRegExp(t)&&E.isRegExp(e)?t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase:E.isObject(t)||E.isObject(e)?p(t,e):t==e}function f(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function p(t,e){if(E.isNullOrUndefined(t)||E.isNullOrUndefined(e))return!1;if(t.prototype!==e.prototype)return!1;if(E.isPrimitive(t)||E.isPrimitive(e))return t===e;var r=f(t),n=f(e);if(r&&!n||!r&&n)return!1;if(r)return t=d.call(t),e=d.call(e),l(t,e);var i,o,a=q(t),s=q(e);if(a.length!=s.length)return!1;for(a.sort(),s.sort(),o=a.length-1;o>=0;o--)if(a[o]!=s[o])return!1;for(o=a.length-1;o>=0;o--)if(i=a[o],!l(t[i],e[i]))return!1;return!0}function g(t,e){return t&&e?"[object RegExp]"==Object.prototype.toString.call(e)?e.test(t):t instanceof e?!0:e.call({},t)===!0?!0:!1:!1}function h(t,e,r,n){var i;E.isString(r)&&(n=r,r=null);try{e()}catch(o){i=o}if(n=(r&&r.name?" ("+r.name+").":".")+(n?" "+n:"."),t&&!i&&u(i,r,"Missing expected exception"+n),!t&&g(i,r)&&u(i,r,"Got unwanted exception"+n),t&&i&&r&&!g(i,r)||!t&&i)throw i}var E=t("util"),d=Array.prototype.slice,m=Object.prototype.hasOwnProperty,x=r.exports=c;x.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=s(this),this.generatedMessage=!0);var e=t.stackStartFunction||u;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var r=new Error;if(r.stack){var n=r.stack,i=e.name,o=n.indexOf("\n"+i);if(o>=0){var a=n.indexOf("\n",o+1);n=n.substring(a+1)}this.stack=n}}},E.inherits(x.AssertionError,Error),x.fail=u,x.ok=c,x.equal=function(t,e,r){t!=e&&u(t,e,r,"==",x.equal)},x.notEqual=function(t,e,r){t==e&&u(t,e,r,"!=",x.notEqual)},x.deepEqual=function(t,e,r){l(t,e)||u(t,e,r,"deepEqual",x.deepEqual)},x.notDeepEqual=function(t,e,r){l(t,e)&&u(t,e,r,"notDeepEqual",x.notDeepEqual)},x.strictEqual=function(t,e,r){t!==e&&u(t,e,r,"===",x.strictEqual)},x.notStrictEqual=function(t,e,r){t===e&&u(t,e,r,"!==",x.notStrictEqual)},x["throws"]=function(t,e,r){h.apply(this,[!0].concat(d.call(arguments)))},x.doesNotThrow=function(t,e){h.apply(this,[!1].concat(d.call(arguments)))},x.ifError=function(t){if(t)throw t};var q=Object.keys||function(t){var e=[];for(var r in t)m.call(t,r)&&e.push(r);return e}});
$rmod.def("/raptor-util@1.0.10/createError",function(r,n,t,e,a){t.exports=function(r,n){var t,e=arguments.length,a=Error;return 2==e?(t=r instanceof a?r:new a(r),t.stack?t.stack+="\nCaused by: "+(n.stack||n):t._cause=n):1==e&&(t=r instanceof a?r:new a(r)),t}});
$rmod.main("/htmljs-parser@1.5.5","index");
$rmod.dep("/$/marko","htmljs-parser","1.5.5");
$rmod.def("/htmljs-parser@1.5.5/BaseParser", function(require, exports, module, __filename, __dirname) { 'use strict';

var CODE_NEWLINE = 10;
var CODE_CARRIAGE_RETURN = 13;

class Parser {
    static createState(mixins) {
        return mixins;
    }

    constructor(options) {
        this.reset();
    }

    reset() {
        // current absolute character position
        this.pos = -1;

        // The maxPos property is the last absolute character position that is
        // readable based on the currently received chunks
        this.maxPos = -1;

        // the current parser state
        this.state = null;

        // The raw string that we are parsing
        this.data = null;
    }

    setInitialState(initialState) {
        this.initialState = initialState;
    }

    enterState(state) {
        if (this.state === state) {
            // Re-entering the same state can lead to unexpected behavior
            // so we should throw error to catch these types of mistakes
            throw new Error('Re-entering the current state is illegal - ' + state.name);
        }

        var oldState;
        if ((oldState = this.state) && oldState.leave) {
            // console.log('Leaving state ' + oldState.name);
            oldState.leave.call(this, state);
        }

        // console.log('Entering state ' + state.name);

        this.state = state;

        if (state.enter) {
            state.enter.call(this, oldState);
        }
    }

    /**
     * Look ahead to see if the given str matches the substring sequence
     * beyond
     */
    lookAheadFor(str, startPos) {
        // Have we read enough chunks to read the string that we need?
        if (startPos == null) {
            startPos = this.pos + 1;
        }
        var len = str.length;
        var endPos = startPos + len;

        if (endPos > this.maxPos + 1) {
            return undefined;
        }

        var found = this.data.substring(startPos, endPos);
        return (found === str) ? str : undefined;
    }

    /**
     * Look ahead to a character at a specific offset.
     * The callback will be invoked with the character
     * at the given position.
     */
    lookAtCharAhead(offset, startPos) {
        if (startPos == null) {
            startPos = this.pos;
        }
        return this.data.charAt(startPos + offset);
    }

    lookAtCharCodeAhead(offset, startPos) {
        if (startPos == null) {
            startPos = this.pos;
        }
        return this.data.charCodeAt(startPos + offset);
    }

    rewind(offset) {
        this.pos -= offset;
    }

    skip(offset) {
        // console.log('-- ' + JSON.stringify(this.data.substring(this.pos, this.pos + offset)) + ' --  ' + 'SKIPPED'.gray);
        this.pos += offset;
    }

    end() {
        this.pos = this.maxPos + 1;
    }

    substring(pos, endPos) {
        return this.data.substring(pos, endPos);
    }

    parse(data) {
        if (data == null) {
            return;
        }

        // call the constructor function again because we have a contract that
        // it will fully reset the parser
        this.reset();

        if (Array.isArray(data)) {
            data = data.join('');
        }

        this.data = data;
        this.maxPos = data.length - 1;

        // Enter initial state
        if (this.initialState) {
            this.enterState(this.initialState);
        }

        // Move to first position
        this.pos = 0;

        if (!this.state) {
            // Cannot resume when parser has no state
            return;
        }

        var pos;
        while ((pos = this.pos) <= this.maxPos) {
            let ch = data[pos];
            let code = ch.charCodeAt(0);
            let state = this.state;

            if (code === CODE_NEWLINE) {
                if (state.eol) {
                    state.eol.call(this, ch);
                }
                this.pos++;
                continue;
            } else if (code === CODE_CARRIAGE_RETURN) {
                let nextPos = pos + 1;
                if (nextPos < data.length && data.charCodeAt(nextPos) === CODE_NEWLINE) {
                    if (state.eol) {
                        state.eol.call(this, '\r\n');
                    }
                    this.pos+=2;
                    continue;
                }
            }

            // console.log('-- ' + JSON.stringify(ch) + ' --  ' + this.state.name.gray);

            // We assume that every state will have "char" function
            state.char.call(this, ch, code);

            // move to next position
            this.pos++;
        }

        let state = this.state;
        if (state && state.eof) {
            state.eof.call(this);
        }
    }
}

module.exports = Parser;

});
$rmod.def("/htmljs-parser@1.5.5/notify-util", function(require, exports, module, __filename, __dirname) { exports.createNotifiers = function(parser, listeners) {
    var hasError = false;

    return {
        notifyText(value) {
            if (hasError) {
                return;
            }

            var eventFunc = listeners.onText;

            if (eventFunc && (value.length > 0)) {
                eventFunc.call(parser, {
                    type: 'text',
                    value: value
                }, parser);
            }
        },

        notifyCDATA(value, pos, endPos) {
            if (hasError) {
                return;
            }

            var eventFunc = listeners.onCDATA;

            if (eventFunc && value) {
                eventFunc.call(parser, {
                    type: 'cdata',
                    value: value,
                    pos: pos,
                    endPos: endPos
                }, parser);
            }
        },

        notifyError(pos, errorCode, message) {
            if (hasError) {
                return;
            }

            hasError = true;

            var eventFunc = listeners.onError;

            if (eventFunc) {
                eventFunc.call(parser, {
                    type: 'error',
                    code: errorCode,
                    message: message,
                    pos: pos,
                    endPos: parser.pos
                }, parser);
            }
        },

        notifyOpenTag(tagInfo) {
            if (hasError) {
                return;
            }

            var eventFunc = listeners.onOpenTag;

            if (eventFunc) {
                // set the literalValue property for attributes that are simple
                // string simple values or simple literal values

                var event = {
                    type: 'openTag',
                    tagName: tagInfo.tagName,
                    tagNameExpression: tagInfo.tagNameExpression,
                    argument: tagInfo.argument,
                    pos: tagInfo.pos,
                    endPos: tagInfo.endPos,
                    openTagOnly: tagInfo.openTagOnly,
                    selfClosed: tagInfo.selfClosed,
                    concise: tagInfo.concise
                };

                if (tagInfo.shorthandId) {
                    event.shorthandId = tagInfo.shorthandId;
                }

                if (tagInfo.shorthandClassNames) {
                    event.shorthandClassNames = tagInfo.shorthandClassNames;
                }

                event.attributes = tagInfo.attributes.map((attr) => {
                    var newAttr = {
                        name: attr.name,
                        value: attr.value,
                        pos: attr.pos,
                        endPos: attr.endPos,
                        argument: attr.argument
                    };

                    if (attr.hasOwnProperty('literalValue')) {
                        newAttr.literalValue = attr.literalValue;
                    }

                    return newAttr;
                });

                eventFunc.call(parser, event, parser);
            }
        },

        notifyCloseTag(tagName, pos, endPos) {
            if (hasError) {
                return;
            }

            var eventFunc = listeners.onCloseTag;

            if (eventFunc) {
                var event = {
                    type: 'closeTag',
                    tagName: tagName,
                    pos: pos,
                    endPos: endPos
                };

                eventFunc.call(parser, event, parser);
            }
        },

        notifyDocumentType(documentType) {
            if (hasError) {
                return;
            }

            var eventFunc = listeners.onDocumentType;

            if (eventFunc) {
                eventFunc.call(this, {
                    type: 'documentType',
                    value: documentType.value,
                    pos: documentType.pos,
                    endPos: documentType.endPos
                }, parser);
            }
        },

        notifyDeclaration(declaration) {
            if (hasError) {
                return;
            }

            var eventFunc = listeners.onDeclaration;

            if (eventFunc) {
                eventFunc.call(parser, {
                    type: 'declaration',
                    value: declaration.value,
                    pos: declaration.pos,
                    endPos: declaration.endPos
                }, parser);
            }
        },

        notifyComment(comment) {
            if (hasError) {
                return;
            }

            var eventFunc = listeners.onComment;

            if (eventFunc && comment.value) {
                eventFunc.call(parser, {
                    type: 'comment',
                    value: comment.value,
                    pos: comment.pos,
                    endPos: comment.endPos
                }, parser);
            }
        },

        notifyScriptlet(scriptlet) {
            if (hasError) {
                return;
            }

            var eventFunc = listeners.onScriptlet;

            if (eventFunc && scriptlet.value) {
                eventFunc.call(parser, {
                    type: 'scriptlet',
                    value: scriptlet.value,
                    pos: scriptlet.pos,
                    endPos: scriptlet.endPos
                }, parser);
            }
        },

        notifyPlaceholder(placeholder) {
            if (hasError) {
                return;
            }

            var eventFunc = listeners.onPlaceholder;
            if (eventFunc) {
                var placeholderEvent = {
                    type: 'placeholder',
                    value: placeholder.value,
                    pos: placeholder.pos,
                    endPos: placeholder.endPos,
                    escape: placeholder.escape !== false,
                    withinBody: placeholder.withinBody === true,
                    withinAttribute: placeholder.withinAttribute === true,
                    withinString: placeholder.withinString === true,
                    withinOpenTag: placeholder.withinOpenTag === true,
                    withinTagName: placeholder.withinTagName === true
                };

                eventFunc.call(parser, placeholderEvent, parser);
                return placeholderEvent.value;
            }

            return placeholder.value;
        },

        notifyFinish() {
            if (listeners.onfinish) {
                listeners.onfinish.call(parser, {}, parser);
            }
        }
    };
};
});
$rmod.def("/htmljs-parser@1.5.5/html-tags",function(r,n,e,a,t){var o={};["base","br","col","hr","embed","img","input","keygen","link","meta","param","source","track","wbr"].forEach(function(r){o[r]=!0}),n.isOpenTagOnly=function(r){return o.hasOwnProperty(r)}});
$rmod.def("/htmljs-parser@1.5.5/Parser", function(require, exports, module, __filename, __dirname) { 'use strict';
var BaseParser = require('./BaseParser');

var notifyUtil = require('./notify-util');

function isWhitespaceCode(code) {
    // For all practical purposes, the space character (32) and all the
    // control characters below it are whitespace. We simplify this
    // condition for performance reasons.
    // NOTE: This might be slightly non-conforming.
    return (code <= 32);
}

var NUMBER_REGEX = /^[\-\+]?\d*(?:\.\d+)?(?:e[\-\+]?\d+)?$/;

/**
 * Takes a string expression such as `"foo"` or `'foo "bar"'`
 * and returns the literal String value.
 */
function evaluateStringExpression(expression) {
    // We could just use eval(expression) to get the literal String value,
    // but there is a small chance we could be introducing a security threat
    // by accidently running malicous code. Instead, we will use
    // JSON.parse(expression). JSON.parse() only allows strings
    // that use double quotes so we have to do extra processing if
    // we detect that the String uses single quotes

    if (expression.charAt(0) === "'") {
        expression = expression.substring(1, expression.length - 1);

        // Make sure there are no unescaped double quotes in the string expression...
        expression = expression.replace(/\\\\|\\["]|["]/g, function(match) {
            if (match === '"'){
                // Return an escaped double quote if we encounter an
                // unescaped double quote
                return '\\"';
            } else {
                // Return the escape sequence
                return match;
            }
        });

        expression = '"' + expression + '"';
    }

    return JSON.parse(expression);
}


function peek(array) {
    var len = array.length;
    if (!len) {
        return undefined;
    }
    return array[len - 1];
}

const MODE_HTML = 1;
const MODE_CONCISE = 2;

const CODE_NEWLINE = 10;
const CODE_CARRIAGE_RETURN = 13;
const CODE_BACK_SLASH = 92;
const CODE_FORWARD_SLASH = 47;
const CODE_OPEN_ANGLE_BRACKET = 60;
const CODE_CLOSE_ANGLE_BRACKET = 62;
const CODE_EXCLAMATION = 33;
const CODE_QUESTION = 63;
const CODE_OPEN_SQUARE_BRACKET = 91;
const CODE_CLOSE_SQUARE_BRACKET = 93;
const CODE_EQUAL = 61;
const CODE_SINGLE_QUOTE = 39;
const CODE_DOUBLE_QUOTE = 34;
const CODE_BACKTICK = 96;
const CODE_OPEN_PAREN = 40;
const CODE_CLOSE_PAREN = 41;
const CODE_OPEN_CURLY_BRACE = 123;
const CODE_CLOSE_CURLY_BRACE = 125;
const CODE_ASTERISK = 42;
const CODE_HYPHEN = 45;
const CODE_HTML_BLOCK_DELIMITER = CODE_HYPHEN;
const CODE_DOLLAR = 36;
const CODE_SPACE = 32;
const CODE_PERCENT = 37;
const CODE_PERIOD = 46;
const CODE_NUMBER_SIGN = 35;

const BODY_PARSED_TEXT = 1; // Body of a tag is treated as text, but placeholders will be parsed
const BODY_STATIC_TEXT = 2;// Body of a tag is treated as text and placeholders will *not* be parsed

const EMPTY_ATTRIBUTES = [];
const htmlTags = require('./html-tags');

class Parser extends BaseParser {
    constructor(listeners, options) {
        super(options);

        var parser = this;

        var notifiers = notifyUtil.createNotifiers(parser, listeners);
        this.notifiers = notifiers;

        var defaultMode = options && options.concise === false ? MODE_HTML : MODE_CONCISE;
        var userIsOpenTagOnly = options && options.isOpenTagOnly;
        var ignorePlaceholders = options && options.ignorePlaceholders;

        var currentOpenTag; // Used to reference the current open tag that is being parsed
        var currentAttribute; // Used to reference the current attribute that is being parsed
        var closeTagName; // Used to keep track of the current close tag name as it is being parsed
        var closeTagPos; // Used to keep track of the position of the current closing tag
        var expectedCloseTagName; // Used to figure out when a text block has been ended (HTML tags are ignored)
        var text; // Used to buffer text that is found within the body of a tag
        var withinOpenTag;// Set to true if the parser is within the open tag
        var blockStack; // Used to keep track of HTML tags and HTML blocks
        var partStack; // Used to keep track of parts such as CDATA, expressions, declarations, etc.
        var currentPart; // The current part at the top of the part stack
        var indent; // Used to build the indent for the current concise line
        var isConcise; // Set to true if parser is currently in concise mode
        var isWithinSingleLineHtmlBlock; // Set to true if the current block is for a single line HTML block
        var htmlBlockDelimiter; // Current delimiter for multiline HTML blocks nested within a concise tag. e.g. "--"
        var htmlBlockIndent; // Used to hold the indentation for a delimited, multiline HTML block
        var beginMixedMode; // Used as a flag to mark that the next HTML block should enter the parser into HTML mode
        var endingMixedModeAtEOL; // Used as a flag to record that the next EOL to exit HTML mode and go back to concise
        var placeholderDepth; // Used as an easy way to know if an exptression is within a placeholder

        this.reset = function() {
            BaseParser.prototype.reset.call(this);
            text = '';
            currentOpenTag = undefined;
            currentAttribute = undefined;
            closeTagName = undefined;
            closeTagPos = undefined;
            expectedCloseTagName = undefined;
            withinOpenTag = false;
            blockStack = [];
            partStack = [];
            currentPart = undefined;
            indent = '';
            isConcise = defaultMode === MODE_CONCISE;
            isWithinSingleLineHtmlBlock = false;
            htmlBlockDelimiter = null;
            htmlBlockIndent = null;
            beginMixedMode = false;
            endingMixedModeAtEOL = false;
            placeholderDepth = 0;
        };

        this.reset();

        /**
         * This function is called to determine if a tag is an "open only tag". Open only tags such as <img>
         * are immediately closed.
         * @param  {String}  tagName The name of the tag (e.g. "img")
         */
        function isOpenTagOnly(tagName) {
            tagName = tagName.toLowerCase();

            var openTagOnly = userIsOpenTagOnly && userIsOpenTagOnly(tagName);
            if (openTagOnly == null) {
                openTagOnly = htmlTags.isOpenTagOnly(tagName);
            }

            return openTagOnly;
        }

        /**
         * Clear out any buffered body text and notify any listeners
         */
        function endText(txt) {
            if (arguments.length === 0) {
                txt = text;
            }

            notifiers.notifyText(txt);

            // always clear text buffer...
            text =  '';
        }


        function openTagEOL() {
            if (isConcise && !currentOpenTag.withinAttrGroup) {
                // In concise mode we always end the open tag
                finishOpenTag();
            }
        }

        /**
         * This function is used to enter into "HTML" parsing mode instead
         * of concise HTML. We push a block on to the stack so that we know when
         * return back to the previous parsing mode and to ensure that all
         * tags within a block are properly closed.
         */
        function beginHtmlBlock(delimiter) {
            htmlBlockIndent = indent;
            htmlBlockDelimiter = delimiter;

            var parent = peek(blockStack);
            blockStack.push({
                type: 'html',
                delimiter: delimiter,
                indent: indent
            });

            if (parent && parent.body) {
                if (parent.body === BODY_PARSED_TEXT) {
                    parser.enterState(STATE_PARSED_TEXT_CONTENT);
                } else if (parent.body === BODY_STATIC_TEXT) {
                    parser.enterState(STATE_STATIC_TEXT_CONTENT);
                } else {
                    throw new Error('Illegal value for parent.body: ' + parent.body);
                }
            } else {
                return parser.enterState(STATE_HTML_CONTENT);
            }
        }

        /**
         * This method gets called when we are in non-concise mode
         * and we are exiting out of non-concise mode.
         */
        function endHtmlBlock() {
            // End any text
            endText();

            // Make sure all tags in this HTML block are closed
            for (let i=blockStack.length-1; i>=0; i--) {
                var curBlock = blockStack[i];
                if (curBlock.type === 'html') {
                    // Remove the HTML block from the stack since it has ended
                    blockStack.pop();
                    // We have reached the point where the HTML block started
                    // so we can stop
                    break;
                } else {
                    // The current block is for an HTML tag and it still open. When a tag is tag is closed
                    // it is removed from the stack
                    notifyError(curBlock.pos,
                        'MISSING_END_TAG',
                        'Missing ending "' + curBlock.tagName + '" tag');
                    return;
                }
            }

            // Resert variables associated with parsing an HTML block
            htmlBlockIndent = null;
            htmlBlockDelimiter = null;
            isWithinSingleLineHtmlBlock = false;

            if (parser.state !== STATE_CONCISE_HTML_CONTENT) {
                parser.enterState(STATE_CONCISE_HTML_CONTENT);
            }
        }

        /**
         * This function gets called when we reach EOF outside of a tag.
         */
        function htmlEOF() {
            endText();

            while(blockStack.length) {
                var curBlock = peek(blockStack);
                if (curBlock.type === 'tag') {
                    if (curBlock.concise) {
                        closeTag(curBlock.expectedCloseTagName);
                    } else {
                        // We found an unclosed tag on the stack that is not for a concise tag. That means
                        // there is a problem with the template because all open tags should have a closing
                        // tag
                        //
                        // NOTE: We have already closed tags that are open tag only or self-closed
                        notifyError(curBlock.pos,
                            'MISSING_END_TAG',
                            'Missing ending "' + curBlock.tagName + '" tag');
                        return;
                    }
                } else if (curBlock.type === 'html') {
                    if (curBlock.delimiter) {
                        // We reached the end of the file and there is still a delimited HTML block on the stack.
                        // That means we never found the ending delimiter and should emit a parse error
                        notifyError(curBlock.pos,
                            'MISSING_END_DELIMITER',
                            'End of file reached before finding the ending "' + curBlock.delimiter + '" delimiter');
                        return;
                    } else {
                        // We reached the end of file while still within a single line HTML block. That's okay
                        // though since we know the line is completely. We'll continue ending all open concise tags.
                        blockStack.pop();
                    }
                } else {
                    // There is a bug in our parser...
                    throw new Error('Illegal state. There should not be any non-concise tags on the stack when in concise mode');
                }
            }
        }

        function openTagEOF() {
            if (isConcise) {
                if (currentOpenTag.withinAttrGroup) {
                    notifyError(currentOpenTag.pos,
                        'MALFORMED_OPEN_TAG',
                        'EOF reached while within an attribute group (e.g. "[ ... ]").');
                    return;
                }

                // If we reach EOF inside an open tag when in concise-mode
                // then we just end the tag and all other open tags on the stack
                finishOpenTag();
                htmlEOF();
            } else {
                // Otherwise, in non-concise mode we consider this malformed input
                // since the end '>' was not found.
                notifyError(currentOpenTag.pos,
                    'MALFORMED_OPEN_TAG',
                    'EOF reached while parsing open tag');
            }
        }

        var notifyCDATA = notifiers.notifyCDATA;
        var notifyComment = notifiers.notifyComment;
        var notifyOpenTag = notifiers.notifyOpenTag;
        var notifyCloseTag = notifiers.notifyCloseTag;
        var notifyDocumentType = notifiers.notifyDocumentType;
        var notifyDeclaration = notifiers.notifyDeclaration;
        var notifyPlaceholder = notifiers.notifyPlaceholder;
        var notifyScriptlet = notifiers.notifyScriptlet;

        function notifyError(pos, errorCode, message) {
            parser.end();
            notifiers.notifyError(pos, errorCode, message);
        }

        function beginAttribute() {
            currentAttribute = {};
            if (currentOpenTag.attributes === EMPTY_ATTRIBUTES) {
                currentOpenTag.attributes = [currentAttribute];
            } else {
                currentOpenTag.attributes.push(currentAttribute);
            }
            parser.enterState(STATE_ATTRIBUTE_NAME);
            return currentAttribute;
        }

        function endAttribute() {
            currentAttribute = null;
            if (parser.state !== STATE_WITHIN_OPEN_TAG) {
                parser.enterState(STATE_WITHIN_OPEN_TAG);
            }
        }

        function beginOpenTag() {
            endText();

            var tagInfo = {
                type: 'tag',
                tagName: '',
                tagNameParts: null,
                attributes: [],
                argument: undefined,
                pos: parser.pos,
                indent: indent,
                nestedIndent: null, // This will get set when we know what hte nested indent is
                concise: isConcise
            };

            withinOpenTag = true;

            if (beginMixedMode) {
                tagInfo.beginMixedMode = true;
                beginMixedMode = false;
            }

            blockStack.push(tagInfo);

            currentOpenTag = tagInfo;

            parser.enterState(STATE_TAG_NAME);

            return currentOpenTag;
        }

        function finishOpenTag(selfClosed) {
            var tagName = currentOpenTag.tagName;

            currentOpenTag.expectedCloseTagName = expectedCloseTagName =
                parser.substring(currentOpenTag.tagNameStart, currentOpenTag.tagNameEnd);

            var openTagOnly = currentOpenTag.openTagOnly = isOpenTagOnly(tagName);
            var endPos = parser.pos;

            if (!isConcise) {
                if (selfClosed) {
                    endPos += 2; // Skip past '/>'
                } else {
                    endPos += 1;
                }
            }

            if (currentOpenTag.tagNameParts) {
                currentOpenTag.tagNameExpression = currentOpenTag.tagNameParts.join('+');
            }

            currentOpenTag.endPos = endPos;
            currentOpenTag.selfClosed = selfClosed === true;

            if (!currentOpenTag.tagName) {
                tagName = currentOpenTag.tagName = 'div';
            }

            var origState = parser.state;
            notifyOpenTag(currentOpenTag);

            var shouldClose = false;

            if (selfClosed) {
                shouldClose = true;
            } else if (openTagOnly) {
                if (!isConcise) {
                    // Only close the tag if we are not in concise mode. In concise mode
                    // we want to keep the tag on the stack to make sure nothing is nested below it
                    shouldClose = true;
                }
            }

            if (shouldClose) {
                closeTag(expectedCloseTagName);
            }

            withinOpenTag = false;

            // Did the parser stay in the same state after
            // notifying listeners about openTag?
            if (parser.state === origState) {
                // The listener didn't transition the parser to a new state
                // so we use some simple rules to find the appropriate state.
                if (tagName === 'script') {
                    parser.enterJsContentState();
                } else if (tagName === 'style') {
                    parser.enterCssContentState();
                } else {
                    if (isConcise) {
                        parser.enterConciseHtmlContentState();
                    } else {
                        parser.enterHtmlContentState();
                    }

                }
            }

            // We need to record the "expected close tag name" if we transition into
            // either STATE_STATIC_TEXT_CONTENT or STATE_PARSED_TEXT_CONTENT
            currentOpenTag = undefined;
        }

        function closeTag(tagName, pos, endPos) {
            if (!tagName) {
                throw new Error('Illegal state. Invalid tag name');
            }
            var lastTag = blockStack.length ? blockStack.pop() : undefined;

            if (pos == null && closeTagPos != null) {
                pos = closeTagPos;
                endPos = parser.pos + 1;
            }

            if (!lastTag || lastTag.type !== 'tag') {
                return notifyError(pos,
                    'EXTRA_CLOSING_TAG',
                    'The closing "' + tagName + '" tag was not expected');
            }

            if (!lastTag || (lastTag.expectedCloseTagName !== tagName && lastTag.tagName !== tagName)) {
                return notifyError(pos,
                    'MISMATCHED_CLOSING_TAG',
                    'The closing "' + tagName + '" tag does not match the corresponding opening "' + lastTag.expectedCloseTagName + '" tag');
            }

            tagName = lastTag.tagName;

            notifyCloseTag(tagName, pos, endPos);

            if (lastTag.beginMixedMode) {
                endingMixedModeAtEOL = true;
            }

            closeTagName = null;
            closeTagPos = null;

            lastTag = peek(blockStack);
            expectedCloseTagName = lastTag && lastTag.expectedCloseTagName;
        }

        function beginPart() {
            currentPart = {
                pos: parser.pos,
                parentState: parser.state
            };

            partStack.push(currentPart);

            return currentPart;
        }

        function endPart() {
            var last = partStack.pop();
            parser.endPos = parser.pos;
            parser.enterState(last.parentState);
            currentPart = partStack.length ? peek(partStack) : undefined;
            return last;
        }

        // Expression

        function beginExpression(endAfterGroup) {
            var expression = beginPart();
            expression.value = '';
            expression.groupStack = [];
            expression.endAfterGroup = endAfterGroup === true;
            expression.isStringLiteral = null;
            parser.enterState(STATE_EXPRESSION);
            return expression;
        }

        function endExpression() {
            var expression = endPart();
            expression.parentState.expression(expression);
        }

        // --------------------------

        // String

        function beginString(quoteChar, quoteCharCode) {
            var string = beginPart();
            string.stringParts = [];
            string.currentText = '';
            string.quoteChar = quoteChar;
            string.quoteCharCode = quoteCharCode;
            string.isStringLiteral = true;
            parser.enterState(STATE_STRING);
            return string;
        }

        function endString() {
            var string = endPart();
            string.parentState.string(string);
        }

        // --------------------------

        // Template String

        function beginTemplateString() {
            var templateString = beginPart();
            templateString.value = '`';
            parser.enterState(STATE_TEMPLATE_STRING);
            return templateString;
        }

        function endTemplateString() {
            var templateString = endPart();
            templateString.parentState.templateString(templateString);
        }

        // --------------------------


        // Scriptlet

        function beginScriptlet() {
            endText();

            var scriptlet = beginPart();
            scriptlet.value = '';
            scriptlet.quoteCharCode = null;
            parser.enterState(STATE_SCRIPTLET);
            return scriptlet;
        }

        function endScriptlet(endPos) {
            var scriptlet = endPart();
            scriptlet.endPos = endPos;
            notifyScriptlet(scriptlet);
        }

        // --------------------------


        // DTD

        function beginDocumentType() {
            endText();

            var documentType = beginPart();
            documentType.value = '';

            parser.enterState(STATE_DTD);
            return documentType;
        }

        function endDocumentType() {
            var documentType = endPart();
            notifyDocumentType(documentType);
        }

        // --------------------------

        // Declaration
        function beginDeclaration() {
            endText();

            var declaration = beginPart();
            declaration.value = '';
            parser.enterState(STATE_DECLARATION);
            return declaration;
        }

        function endDeclaration() {
            var declaration = endPart();
            notifyDeclaration(declaration);
        }

        // --------------------------

        // CDATA

        function beginCDATA() {
            endText();

            var cdata = beginPart();
            cdata.value = '';
            parser.enterState(STATE_CDATA);
            return cdata;
        }

        function endCDATA() {
            var cdata = endPart();
            notifyCDATA(cdata.value, cdata.pos, parser.pos + 3);
        }

        // --------------------------

        // JavaScript Comments
        function beginLineComment() {
            var comment = beginPart();
            comment.value = '';
            comment.type = 'line';
            parser.enterState(STATE_JS_COMMENT_LINE);
            return comment;
        }

        function beginBlockComment() {
            var comment = beginPart();
            comment.value = '';
            comment.type = 'block';
            parser.enterState(STATE_JS_COMMENT_BLOCK);
            return comment;
        }

        function endJavaScriptComment() {
            var comment = endPart();
            comment.rawValue = comment.type === 'line' ?
                '//' + comment.value :
                '/*' + comment.value + '*/';
            comment.parentState.comment(comment);
        }
        // --------------------------

        // HTML Comment

        function beginHtmlComment() {
            endText();
            var comment = beginPart();
            comment.value = '';
            parser.enterState(STATE_HTML_COMMENT);
            return comment;
        }

        function endHtmlComment() {
            var comment = endPart();
            comment.endPos = parser.pos + 3;
            notifyComment(comment);
        }

        // --------------------------

        // Trailing whitespace

        function beginCheckTrailingWhitespace(handler) {
            var part = beginPart();
            part.handler = handler;
            if (typeof handler !== 'function') {
                throw new Error('Invalid handler');
            }
            parser.enterState(STATE_CHECK_TRAILING_WHITESPACE);
        }

        function endCheckTrailingWhitespace(err, eof) {
            var part = endPart();
            part.handler(err, eof);
        }

        function handleTrailingWhitespaceJavaScriptComment(err) {
            if (err) {
                // This is a non-whitespace! We don't allow non-whitespace
                // after matching two or more hyphens. This is user error...
                notifyError(parser.pos,
                    'INVALID_CHARACTER',
                    'A non-whitespace of "' + err.ch + '" was found after a JavaScript block comment.');
            }

            return;
        }

        function handleTrailingWhitespaceMultilineHtmlBlcok(err, eof) {
            if (err) {
                // This is a non-whitespace! We don't allow non-whitespace
                // after matching two or more hyphens. This is user error...
                notifyError(parser.pos,
                    'INVALID_CHARACTER',
                    'A non-whitespace of "' + err.ch + '" was found on the same line as the ending delimiter ("' + htmlBlockDelimiter + '") for a multiline HTML block');
                return;
            }

            endHtmlBlock();

            if (eof) {
                htmlEOF();
            }

            return;
        }

        // --------------------------

        // Placeholder

        function beginPlaceholder(escape, withinTagName) {
            var placeholder = beginPart();
            placeholder.value = '';
            placeholder.escape = escape !== false;
            placeholder.type = 'placeholder';
            placeholder.withinBody = withinOpenTag !== true;
            placeholder.withinAttribute = currentAttribute != null;
            placeholder.withinString = placeholder.parentState === STATE_STRING;
            placeholder.withinOpenTag = withinOpenTag === true && currentAttribute == null;
            placeholder.withinTagName = withinTagName;
            placeholderDepth++;
            parser.enterState(STATE_PLACEHOLDER);
            return placeholder;
        }

        function endPlaceholder() {
            var placeholder = endPart();
            placeholderDepth--;

            var newExpression = notifyPlaceholder(placeholder);
            placeholder.value = newExpression;
            placeholder.parentState.placeholder(placeholder);
        }

        // --------------------------

        // Placeholder

        function beginTagNameShorthand(escape, withinTagName) {
            var shorthand = beginPart();
            shorthand.currentPart = null;
            shorthand.hasId = false;
            shorthand.beginPart = function(type) {
                shorthand.currentPart = {
                    type: type,
                    stringParts: [],
                    text: '',
                    _endText() {
                        if (this.text) {
                            this.stringParts.push(JSON.stringify(this.text));
                        }
                        this.text = '';
                    },
                    addPlaceholder(placeholder) {
                        this._endText();
                        this.stringParts.push('(' + placeholder.value + ')');
                    },
                    end() {
                        this._endText();

                        var expression = this.stringParts.join('+');

                        if (type === 'id') {
                            currentOpenTag.shorthandId = {
                                value: expression
                            };
                        } else if (type === 'class') {
                            if (!currentOpenTag.shorthandClassNames) {
                                currentOpenTag.shorthandClassNames = [];
                            }

                            currentOpenTag.shorthandClassNames.push({
                                value: expression
                            });


                        }
                    }
                };
            };
            parser.enterState(STATE_TAG_NAME_SHORTHAND);
            return shorthand;
        }

        function endTagNameShorthand() {
            var shorthand = endPart();
            if (shorthand.currentPart) {
                shorthand.currentPart.end();
            }
            parser.enterState(STATE_WITHIN_OPEN_TAG);
        }

        // --------------------------

        function getAndRemoveArgument(expression) {
            let start = expression.lastLeftParenPos;
            if (start != null) {
                // The tag has an argument that we need to slice off
                let end = expression.lastRightParenPos;
                if (end === expression.value.length - 1) {
                    var argument = {
                        value: expression.value.substring(start+1, end),
                        pos: expression.pos + start,
                        endPos: expression.pos + end + 1
                    };

                    // Chop off the argument from the expression
                    expression.value = expression.value.substring(0, start);
                    // Fix the end position for the expression
                    expression.endPos = expression.pos + expression.value.length;

                    return argument;
                }
            }

            return undefined;
        }

        // --------------------------

        function checkForPlaceholder(ch, code) {
            if (code === CODE_DOLLAR) {
                var nextCode = parser.lookAtCharCodeAhead(1);
                if (nextCode === CODE_OPEN_CURLY_BRACE) {
                    // We expect to start a placeholder at the first curly brace (the next character)
                    beginPlaceholder(true);
                    return true;
                } else if (nextCode === CODE_EXCLAMATION) {
                    var afterExclamationCode = parser.lookAtCharCodeAhead(2);
                    if (afterExclamationCode === CODE_OPEN_CURLY_BRACE) {
                        // We expect to start a placeholder at the first curly brace so skip
                        // past the exclamation point
                        beginPlaceholder(false);
                        parser.skip(1);
                        return true;
                    }
                }
            }

            return false;
        }

        function checkForEscapedPlaceholder(ch, code) {
            // Look for \${ and \$!{
            if (code === CODE_BACK_SLASH) {
                if (parser.lookAtCharCodeAhead(1) === CODE_DOLLAR) {
                    if (parser.lookAtCharCodeAhead(2) === CODE_OPEN_CURLY_BRACE) {
                        return true;
                    } else if (parser.lookAtCharCodeAhead(2) === CODE_EXCLAMATION) {
                        if (parser.lookAtCharCodeAhead(3) === CODE_OPEN_CURLY_BRACE) {
                            return true;
                        }
                    }
                }
            }

            return false;
        }

        function checkForEscapedEscapedPlaceholder(ch, code) {
            // Look for \\${ and \\$!{
            if (code === CODE_BACK_SLASH) {
                if (parser.lookAtCharCodeAhead(1) === CODE_BACK_SLASH) {
                    if (parser.lookAtCharCodeAhead(2) === CODE_DOLLAR) {
                        if (parser.lookAtCharCodeAhead(3) === CODE_OPEN_CURLY_BRACE) {
                            return true;
                        } else if (parser.lookAtCharCodeAhead(3) === CODE_EXCLAMATION) {
                            if (parser.lookAtCharCodeAhead(4) === CODE_OPEN_CURLY_BRACE) {
                                return true;
                            }
                        }
                    }
                }
            }

            return false;
        }

        function checkForClosingTag() {
            // Look ahead to see if we found the closing tag that will
            // take us out of the EXPRESSION state...
            var lookAhead = '/' + expectedCloseTagName + '>';
            var match = parser.lookAheadFor(lookAhead);
            if (match) {
                endText();
                closeTag(expectedCloseTagName, parser.pos, parser.pos + 1 + lookAhead.length);
                parser.skip(match.length);
                parser.enterState(STATE_HTML_CONTENT);
                return true;
            }

            return false;
        }

        function checkForCDATA() {
            if (parser.lookAheadFor('![CDATA[')) {
                beginCDATA();
                parser.skip(8);
                return true;
            }

            return false;
        }

        function handleDelimitedBlockEOL(newLine) {
            // If we are within a delimited HTML block then we want to check if the next line is the end
            // delimiter. Since we are currently positioned at the start of the new line character our lookahead
            // will need to include the new line character, followed by the expected indentation, followed by
            // the delimiter.
            let endHtmlBlockLookahead = htmlBlockIndent + htmlBlockDelimiter;

            if (parser.lookAheadFor(endHtmlBlockLookahead, parser.pos + newLine.length)) {
                parser.skip(htmlBlockIndent.length);
                parser.skip(htmlBlockDelimiter.length);

                parser.enterState(STATE_CONCISE_HTML_CONTENT);

                beginCheckTrailingWhitespace(handleTrailingWhitespaceMultilineHtmlBlcok);
                return;
            } else if (parser.lookAheadFor(htmlBlockIndent, parser.pos + newLine.length)) {
                // We know the next line does not end the multiline HTML block, but we need to check if there
                // is any indentation that we need to skip over as we continue parsing the HTML in this
                // multiline HTML block

                parser.skip(htmlBlockIndent.length);
                // We stay in the same state since we are still parsing a multiline, delimited HTML block
            }
        }

        // In STATE_HTML_CONTENT we are looking for tags and placeholders but
        // everything in between is treated as text.
        var STATE_HTML_CONTENT = Parser.createState({
            name: 'STATE_HTML_CONTENT',

            placeholder(placeholder) {
                // We found a placeholder while parsing the HTML content. This function is called
                // from endPlaceholder(). We have already notified the listener of the placeholder so there is
                // nothing to do here
            },

            eol(newLine) {
                text += newLine;

                if (beginMixedMode) {
                    beginMixedMode = false;
                    endHtmlBlock();
                } else if (endingMixedModeAtEOL) {
                    endingMixedModeAtEOL = false;
                    endHtmlBlock();
                } else if (isWithinSingleLineHtmlBlock) {
                    // We are parsing "HTML" and we reached the end of the line. If we are within a single
                    // line HTML block then we should return back to the state to parse concise HTML.
                    // A single line HTML block can be at the end of the tag or on its own line:
                    //
                    // span class="hello" - This is an HTML block at the end of a tag
                    //     - This is an HTML block on its own line
                    //
                    endHtmlBlock();
                } else if (htmlBlockDelimiter) {
                    handleDelimitedBlockEOL(newLine);
                }
            },

            eof: htmlEOF,

            enter() {
                isConcise = false; // Back into non-concise HTML parsing
            },

            char(ch, code) {
                if (code === CODE_OPEN_ANGLE_BRACKET) {
                    if (checkForCDATA()) {
                        return;
                    }

                    var nextCode = parser.lookAtCharCodeAhead(1);

                    if (nextCode === CODE_PERCENT) {
                        beginScriptlet();
                        parser.skip(1);
                    } else if (parser.lookAheadFor('!--')) {
                        beginHtmlComment();
                        parser.skip(3);
                    } else if (nextCode === CODE_EXCLAMATION) {
                        // something like:
                        // <!DOCTYPE html>
                        // NOTE: We already checked for CDATA earlier and <!--
                        beginDocumentType();
                        parser.skip(1);
                    } else if (nextCode === CODE_QUESTION) {
                        // something like:
                        // <?xml version="1.0"?>
                        beginDeclaration();
                        parser.skip(1);
                    } else if (nextCode === CODE_FORWARD_SLASH) {
                        closeTagPos = parser.pos;
                        closeTagName = null;

                        parser.skip(1);
                        // something like:
                        // </html>
                        endText();

                        parser.enterState(STATE_CLOSE_TAG);
                    } else if (nextCode === CODE_CLOSE_ANGLE_BRACKET ||
                               nextCode === CODE_OPEN_ANGLE_BRACKET ||
                               isWhitespaceCode(nextCode)) {
                        // something like:
                        // "<>"
                        // "<<"
                        // "< "
                        // We'll treat this left angle brakect as text
                        text += '<';
                    } else {
                        beginOpenTag();
                        currentOpenTag.tagNameStart = parser.pos+1;
                    }
                } else if (!ignorePlaceholders && checkForEscapedEscapedPlaceholder(ch, code)) {
                    text += '\\';
                    parser.skip(1);
                }  else if (!ignorePlaceholders && checkForEscapedPlaceholder(ch, code)) {
                    text += '$';
                    parser.skip(1);
                } else if (!ignorePlaceholders && checkForPlaceholder(ch, code)) {
                    // We went into placeholder state...
                    endText();
                } else {
                    text += ch;
                }
            }
        });

        // In STATE_CONCISE_HTML_CONTENT we are looking for concise tags and text blocks based on indent
        var STATE_CONCISE_HTML_CONTENT = Parser.createState({
            name: 'STATE_CONCISE_HTML_CONTENT',

            eof: htmlEOF,

            enter() {
                isConcise = true;
                indent = '';
            },

            comment(comment) {
                var value = comment.value;

                value = value.trim();

                notifyComment({
                    value: value,
                    pos: comment.pos,
                    endPos: comment.endPos
                });

                if (comment.type === 'block') {
                    // Make sure there is only whitespace on the line
                    // after the ending "*/" sequence
                    beginCheckTrailingWhitespace(handleTrailingWhitespaceJavaScriptComment);
                }
            },

            endTrailingWhitespace(eof) {
                endHtmlBlock();

                if (eof) {
                    htmlEOF();
                }
            },

            char(ch, code) {
                if (isWhitespaceCode(code)) {
                    indent += ch;
                } else  {
                    while(true) {
                        let len = blockStack.length;
                        if (len) {
                            let curBlock = blockStack[len - 1];
                            if (curBlock.indent.length >= indent.length) {
                                closeTag(curBlock.expectedCloseTagName);
                            } else {
                                // Indentation is greater than the last tag so we are starting a
                                // nested tag and there are no more tags to end
                                break;
                            }
                        } else {
                            if (indent) {
                                notifyError(parser.pos,
                                    'BAD_INDENTATION',
                                    'Line has extra indentation at the beginning');
                                return;
                            }
                            break;
                        }
                    }

                    var parent = blockStack.length && blockStack[blockStack.length - 1];
                    var body;

                    if (parent) {
                        body = parent.body;
                        if (parent.openTagOnly) {
                            notifyError(parser.pos,
                                'INVALID_BODY',
                                'The "' + parent.tagName + '" tag does not allow nested body content');
                            return;
                        }

                        if (parent.nestedIndent) {
                            if (parent.nestedIndent.length !== indent.length) {
                                notifyError(parser.pos,
                                    'BAD_INDENTATION',
                                    'Line indentation does match indentation of previous line');
                                return;
                            }
                        } else {
                            parent.nestedIndent = indent;
                        }
                    }

                    if (body && code !== CODE_HTML_BLOCK_DELIMITER) {
                        notifyError(parser.pos,
                            'ILLEGAL_LINE_START',
                            'A line within a tag that only allows text content must begin with a "-" character');
                        return;
                    }

                    if (code === CODE_OPEN_ANGLE_BRACKET || code === CODE_DOLLAR) {
                        beginMixedMode = true;
                        parser.rewind(1);
                        beginHtmlBlock();
                        return;
                    }

                    if (code === CODE_HTML_BLOCK_DELIMITER) {
                        if (parser.lookAtCharCodeAhead(1) === CODE_HTML_BLOCK_DELIMITER) {
                            // Two or more HTML block delimiters means we are starting a multiline, delimited HTML block
                            htmlBlockDelimiter = ch;
                            // We enter the following state to read in the full delimiter
                            return parser.enterState(STATE_BEGIN_DELIMITED_HTML_BLOCK);
                        } else {

                            if (parser.lookAtCharCodeAhead(1) === CODE_SPACE) {
                                // We skip over the first space
                                parser.skip(1);
                            }
                            isWithinSingleLineHtmlBlock = true;
                            beginHtmlBlock();
                        }
                    } else if (code === CODE_FORWARD_SLASH) {
                        // Check next character to see if we are in a comment
                        var nextCode = parser.lookAtCharCodeAhead(1);
                        if (nextCode === CODE_FORWARD_SLASH) {
                            beginLineComment();
                            parser.skip(1);
                            return;
                        } else if (nextCode === CODE_ASTERISK) {
                            beginBlockComment();
                            parser.skip(1);
                            return;
                        } else {
                            notifyError(parser.pos,
                                'ILLEGAL_LINE_START',
                                'A line in concise mode cannot start with "/" unless it starts a "//" or "/*" comment');
                            return;
                        }
                    } else {
                        beginOpenTag();
                        currentOpenTag.tagNameStart = parser.pos;
                        parser.rewind(1); // START_TAG_NAME expects to start at the first character
                    }
                }
            }
        });

        // In STATE_BEGIN_DELIMITED_HTML_BLOCK we have already found two consecutive hyphens. We expect
        // to reach the end of the line with only whitespace characters
        var STATE_BEGIN_DELIMITED_HTML_BLOCK = Parser.createState({
            name: 'STATE_BEGIN_DELIMITED_HTML_BLOCK',

            eol: function(newLine) {
                // We have reached the end of the first delimiter... we need to skip over any indentation on the next
                // line and we might also find that the multi-line, delimited block is immediately ended
                beginHtmlBlock(htmlBlockDelimiter);
                handleDelimitedBlockEOL(newLine);
            },

            eof: htmlEOF,

            char(ch, code) {
                if (code === CODE_HTML_BLOCK_DELIMITER) {
                    htmlBlockDelimiter += ch;
                } else if (isWhitespaceCode(code)) {
                    // Just whitespace... we are still good
                } else {
                    // This is a non-whitespace! We don't allow non-whitespace
                    // after matching two or more hyphens. This is user error...
                    notifyError(parser.pos,
                        'MALFORMED_MULTILINE_HTML_BLOCK',
                        'A non-whitespace of "' + ch + '" was found on the same line as a multiline HTML block delimiter ("' + htmlBlockDelimiter + '")');
                }
            }
        });

        var STATE_CHECK_TRAILING_WHITESPACE = Parser.createState({
            name: 'STATE_CHECK_TRAILING_WHITESPACE',

            eol: function() {
                endCheckTrailingWhitespace(null /* no error */, false /* not EOF */);
            },

            eof: function() {
                endCheckTrailingWhitespace(null /* no error */, true /* EOF */);
            },

            char(ch, code) {
                if (isWhitespaceCode(code)) {
                    // Just whitespace... we are still good
                } else {
                    endCheckTrailingWhitespace({
                        ch: ch
                    });
                }
            }
        });

        // We enter STATE_STATIC_TEXT_CONTENT when a listener manually chooses
        // to enter this state after seeing an openTag event for a tag
        // whose content should not be parsed at all (except for the purpose
        // of looking for the end tag).
        var STATE_STATIC_TEXT_CONTENT = Parser.createState({
            name: 'STATE_STATIC_TEXT_CONTENT',

            eol(newLine) {
                text += newLine;

                if (isWithinSingleLineHtmlBlock) {
                    // We are parsing "HTML" and we reached the end of the line. If we are within a single
                    // line HTML block then we should return back to the state to parse concise HTML.
                    // A single line HTML block can be at the end of the tag or on its own line:
                    //
                    // span class="hello" - This is an HTML block at the end of a tag
                    //     - This is an HTML block on its own line
                    //
                    endHtmlBlock();
                } else if (htmlBlockDelimiter) {
                    handleDelimitedBlockEOL(newLine);
                }
            },

            eof: htmlEOF,

            char(ch, code) {
                // See if we need to see if we reached the closing tag...
                if (!isConcise && code === CODE_OPEN_ANGLE_BRACKET) {
                    if (checkForClosingTag()) {
                        return;
                    }
                }

                text += ch;
            }
        });

        // We enter STATE_PARSED_TEXT_CONTENT when we are parsing
        // the body of a tag does not contain HTML tags but may contains
        // placeholders
        var STATE_PARSED_TEXT_CONTENT = Parser.createState({
            name: 'STATE_PARSED_TEXT_CONTENT',

            placeholder: STATE_HTML_CONTENT.placeholder,

            eol(newLine) {
                text += newLine;

                if (isWithinSingleLineHtmlBlock) {
                    // We are parsing "HTML" and we reached the end of the line. If we are within a single
                    // line HTML block then we should return back to the state to parse concise HTML.
                    // A single line HTML block can be at the end of the tag or on its own line:
                    //
                    // span class="hello" - This is an HTML block at the end of a tag
                    //     - This is an HTML block on its own line
                    //
                    endHtmlBlock();
                } else if (htmlBlockDelimiter) {
                    handleDelimitedBlockEOL(newLine);
                }
            },

            eof: htmlEOF,

            char(ch, code) {
                if (!isConcise && code === CODE_OPEN_ANGLE_BRACKET) {
                    // First, see if we need to see if we reached the closing tag
                    // and then check if we encountered CDATA
                    if (checkForClosingTag()) {
                        return;
                    } else if (checkForCDATA()) {
                        return;
                    } else if (parser.lookAtCharCodeAhead(1) === CODE_PERCENT) {
                        beginScriptlet();
                        parser.skip(1);
                        return;
                    }
                } else if (!ignorePlaceholders && checkForEscapedEscapedPlaceholder(ch, code)) {
                    text += '\\';
                    parser.skip(1);
                }  else if (!ignorePlaceholders && checkForEscapedPlaceholder(ch, code)) {
                    text += '$';
                    parser.skip(1);
                } else if (!ignorePlaceholders && checkForPlaceholder(ch, code)) {
                    // We went into placeholder state...
                    endText();
                    return;
                }

                text += ch;
            }
        });

        // We enter STATE_TAG_NAME after we encounter a "<"
        // followed by a non-special character
        var STATE_TAG_NAME = Parser.createState({
            name: 'STATE_TAG_NAME',

            eol: openTagEOL,

            eof: openTagEOF,

            expression(expression) {
                var argument = getAndRemoveArgument(expression);

                if (argument) {
                    // The tag has an argument that we need to slice off

                    if (currentOpenTag.argument != null) {
                        notifyError(expression.endPos,
                            'ILLEGAL_TAG_ARGUMENT',
                            'A tag can only have one argument');
                    }

                    currentOpenTag.argument = argument;
                    currentOpenTag.tagNameEnd = expression.pos + expression.lastLeftParenPos + 1;
                } else {
                    currentOpenTag.tagNameEnd = expression.endPos;
                }


                if (expression.value) {
                    currentOpenTag.tagName += expression.value;

                    if (currentOpenTag.tagNameParts) {
                        currentOpenTag.tagNameParts.push(JSON.stringify(expression.value));
                    }
                }
            },

            placeholder(placeholder) {
                if (!currentOpenTag.tagNameParts) {
                    currentOpenTag.tagNameParts = [];

                    if (currentOpenTag.tagName) {
                        currentOpenTag.tagNameParts.push(JSON.stringify(currentOpenTag.tagName));
                    }
                }

                currentOpenTag.tagName += parser.substring(placeholder.pos, placeholder.endPos);
                currentOpenTag.tagNameParts.push('(' + placeholder.value + ')');
                currentOpenTag.tagNameEnd = placeholder.endPos;
            },

            enter(oldState) {
                if (oldState !== STATE_EXPRESSION) {
                    beginExpression();
                }
            },

            char(ch, code) {
                throw new Error('Illegal state');
            }
        });



        // We enter STATE_CDATA after we see "<![CDATA["
        var STATE_CDATA = Parser.createState({
            name: 'STATE_CDATA',

            eof() {
                notifyError(currentPart.pos,
                    'MALFORMED_CDATA',
                    'EOF reached while parsing CDATA');
            },

            char(ch, code) {
                if (code === CODE_CLOSE_SQUARE_BRACKET) {
                    var match = parser.lookAheadFor(']>');
                    if (match) {
                        endCDATA();
                        parser.skip(match.length);
                        return;
                    }
                }

                currentPart.value += ch;
            }
        });

        // We enter STATE_CLOSE_TAG after we see "</"
        var STATE_CLOSE_TAG = Parser.createState({
            name: 'STATE_CLOSE_TAG',
            eof() {
                notifyError(closeTag.pos,
                    'MALFORMED_CLOSE_TAG',
                    'EOF reached while parsing closing tag');
            },

            enter() {
                closeTagName = '';
            },

            char(ch, code) {
                if (code === CODE_CLOSE_ANGLE_BRACKET) {
                    if (closeTagName.length > 0) {
                        closeTag(closeTagName, closeTagPos, parser.pos + 1);
                    } else {
                        closeTag(expectedCloseTagName, closeTagPos, parser.pos + 1);
                    }

                    parser.enterState(STATE_HTML_CONTENT);
                } else {
                    closeTagName += ch;
                }
            }
        });

        // We enter STATE_WITHIN_OPEN_TAG after we have fully
        // read in the tag name and encountered a whitespace character
        var STATE_WITHIN_OPEN_TAG = Parser.createState({
            name: 'STATE_WITHIN_OPEN_TAG',

            eol: openTagEOL,

            eof: openTagEOF,

            expression(expression) {
                var argument = getAndRemoveArgument(expression);

                if (argument) {
                    // We found an argument... the argument could be for an attribute or the tag
                    if (currentOpenTag.attributes.length === 0) {
                        if (currentOpenTag.argument != null) {
                            notifyError(expression.endPos,
                                'ILLEGAL_TAG_ARGUMENT',
                                'A tag can only have one argument');
                            return;
                        }
                        currentOpenTag.argument = argument;
                    } else {
                        let targetAttribute = currentAttribute || peek(currentOpenTag.attributes);

                        if (targetAttribute.argument != null) {
                            notifyError(expression.endPos,
                                'ILLEGAL_ATTRIBUTE_ARGUMENT',
                                'An attribute can only have one argument');
                            return;
                        }
                        targetAttribute.argument = argument;
                    }
                }
            },

            placeholder(placeholder) {
                var attr = beginAttribute();
                attr.value = placeholder.value;
                endAttribute();

                parser.enterState(STATE_AFTER_PLACEHOLDER_WITHIN_TAG);
            },

            comment(comment) {
                /* Ignore comments within an open tag */
            },

            char(ch, code) {

                if (isConcise) {
                    if (code === CODE_HTML_BLOCK_DELIMITER) {
                        if (currentOpenTag.withinAttrGroup) {
                            notifyError(currentOpenTag.pos,
                                'MALFORMED_OPEN_TAG',
                                'Attribute group was not properly ended');
                            return;
                        }

                        // The open tag is complete
                        finishOpenTag();

                        let nextCode = parser.lookAtCharCodeAhead(1);
                        if (nextCode !== CODE_NEWLINE && nextCode !== CODE_CARRIAGE_RETURN &&
                            isWhitespaceCode(nextCode)) {
                            // We want to remove the first whitespace character after the `-` symbol
                            parser.skip(1);
                        }

                        isWithinSingleLineHtmlBlock = true;
                        beginHtmlBlock();
                        return;
                    } else if (code === CODE_OPEN_SQUARE_BRACKET) {
                        if (currentOpenTag.withinAttrGroup) {
                            notifyError(parser.pos,
                                'MALFORMED_OPEN_TAG',
                                'Unexpected "[" character within open tag.');
                            return;
                        }

                        currentOpenTag.withinAttrGroup = true;
                        return;
                    } else if (code === CODE_CLOSE_SQUARE_BRACKET) {
                        if (!currentOpenTag.withinAttrGroup) {
                            notifyError(parser.pos,
                                'MALFORMED_OPEN_TAG',
                                'Unexpected "]" character within open tag.');
                            return;
                        }

                        currentOpenTag.withinAttrGroup = false;
                        return;
                    }
                } else {
                    if (code === CODE_CLOSE_ANGLE_BRACKET) {
                        finishOpenTag();
                        return;
                    } else if (code === CODE_FORWARD_SLASH) {
                        let nextCode = parser.lookAtCharCodeAhead(1);
                        if (nextCode === CODE_CLOSE_ANGLE_BRACKET) {
                            finishOpenTag(true /* self closed */);
                            parser.skip(1);
                            return;
                        }
                    }
                }

                if (checkForEscapedEscapedPlaceholder(ch, code)) {
                    let attr = beginAttribute();
                    attr.name = '\\';
                    parser.skip(1);
                    return;
                }  else if (checkForEscapedPlaceholder(ch, code)) {
                    let attr = beginAttribute();
                    attr.name = '$';
                    parser.skip(1);
                    return;
                } else if (checkForPlaceholder(ch, code)) {
                    return;
                }

                if (code === CODE_OPEN_ANGLE_BRACKET) {
                    return notifyError(parser.pos,
                        'ILLEGAL_ATTRIBUTE_NAME',
                        'Invalid attribute name. Attribute name cannot begin with the "<" character.');
                }

                if (code === CODE_FORWARD_SLASH && parser.lookAtCharCodeAhead(1) === CODE_ASTERISK) {
                    // Skip over code inside a JavaScript block comment
                    beginBlockComment();
                    parser.skip(1);
                    return;
                }

                if (isWhitespaceCode(code)) {
                    // ignore whitespace within element...
                } else if (code === CODE_OPEN_PAREN) {
                    parser.rewind(1);
                    beginExpression();
                    // encountered something like:
                    // <for (var i = 0; i < len; i++)>
                } else {
                    parser.rewind(1);
                    // attribute name is initially the first non-whitespace
                    // character that we found
                    beginAttribute();
                }
            }
        });

        // We enter STATE_ATTRIBUTE_NAME when we see a non-whitespace
        // character after reading the tag name
        var STATE_ATTRIBUTE_NAME = Parser.createState({
            name: 'STATE_ATTRIBUTE_NAME',

            eol: openTagEOL,

            eof: openTagEOF,

            expression(expression) {
                var argument = getAndRemoveArgument(expression);
                if (argument) {
                    // The tag has an argument that we need to slice off
                    currentAttribute.argument = argument;
                }

                currentAttribute.name = currentAttribute.name ? currentAttribute.name + expression.value : expression.value;
                currentAttribute.pos = expression.pos;
                currentAttribute.endPos = expression.endPos;
            },

            enter(oldState) {
                if (oldState !== STATE_EXPRESSION) {
                    beginExpression();
                }
            },

            char(ch, code) {
                throw new Error('Illegal state');
            }
        });

        // We enter STATE_ATTRIBUTE_VALUE when we see a "=" while in
        // the ATTRIBUTE_NAME state.
        var STATE_ATTRIBUTE_VALUE = Parser.createState({
            name: 'STATE_ATTRIBUTE_VALUE',

            expression(expression) {
                var value = expression.value;

                if (value === '') {

                    return notifyError(expression.pos,
                        'ILLEGAL_ATTRIBUTE_VALUE',
                        'No attribute value found after "="');
                }
                currentAttribute.value = value;
                currentAttribute.pos = expression.pos;
                currentAttribute.endPos = expression.endPos;

                // If the expression evaluates to a literal value then add the
                // `literalValue` property to the attribute
                if (expression.isStringLiteral) {
                    currentAttribute.literalValue = evaluateStringExpression(value);
                } else if (value === 'true') {
                    currentAttribute.literalValue = true;
                } else if (value === 'false') {
                    currentAttribute.literalValue = false;
                } else if (value === 'null') {
                    currentAttribute.literalValue = null;
                } else if (value === 'undefined') {
                    currentAttribute.literalValue = undefined;
                } else if (NUMBER_REGEX.test(value)) {
                    currentAttribute.literalValue = Number(value);
                }

                // We encountered a whitespace character while parsing the attribute name. That
                // means the attribute name has ended and we should continue parsing within the
                // open tag
                endAttribute();
            },

            eol: openTagEOL,

            eof: openTagEOF,

            enter(oldState) {
                if (oldState !== STATE_EXPRESSION) {
                    beginExpression();
                }
            },

            char(ch, code) {
                throw new Error('Illegal state');
            }
        });

        var STATE_EXPRESSION = Parser.createState({
            name: 'STATE_EXPRESSION',

            eol(str) {
                let depth = currentPart.groupStack.length;

                if (depth === 0) {
                    if (currentPart.parentState === STATE_ATTRIBUTE_NAME || currentPart.parentState === STATE_ATTRIBUTE_VALUE) {
                        currentPart.endPos = parser.pos;
                        endExpression();
                        // We encountered a whitespace character while parsing the attribute name. That
                        // means the attribute name has ended and we should continue parsing within the
                        // open tag
                        endAttribute();

                        if (isConcise) {
                            openTagEOL();
                        }
                        return;
                    } else if (currentPart.parentState === STATE_TAG_NAME) {
                        currentPart.endPos = parser.pos;
                        endExpression();

                        // We encountered a whitespace character while parsing the attribute name. That
                        // means the attribute name has ended and we should continue parsing within the
                        // open tag
                        if (parser.state !== STATE_WITHIN_OPEN_TAG) {
                            // Make sure we transition into parsing within the open tag
                            parser.enterState(STATE_WITHIN_OPEN_TAG);
                        }

                        if (isConcise) {
                            openTagEOL();
                        }

                        return;
                    }
                }

                currentPart.value += str;
            },

            eof() {
                if (isConcise && currentPart.groupStack.length === 0) {
                    currentPart.endPos = parser.pos;
                    endExpression();
                    openTagEOF();
                } else {
                    let parentState = currentPart.parentState;

                    if (parentState === STATE_ATTRIBUTE_NAME) {
                        return notifyError(currentPart.pos,
                            'MALFORMED_OPEN_TAG',
                            'EOF reached while parsing attribute name for the "' + currentOpenTag.tagName + '" tag');
                    } else if (parentState === STATE_ATTRIBUTE_VALUE) {
                        return notifyError(currentPart.pos,
                            'MALFORMED_OPEN_TAG',
                            'EOF reached while parsing attribute value for the "' + currentAttribute.name + '" attribute');
                    } else if (parentState === STATE_TAG_NAME) {
                        return notifyError(currentPart.pos,
                            'MALFORMED_OPEN_TAG',
                            'EOF reached while parsing tag name');
                    } else if (parentState === STATE_PLACEHOLDER) {
                        return notifyError(currentPart.pos,
                            'MALFORMED_PLACEHOLDER',
                            'EOF reached while parsing placeholder');
                    }

                    return notifyError(currentPart.pos,
                        'INVALID_EXPRESSION',
                        'EOF reached will parsing expression');
                }
            },

            string(string) {
                if (currentPart.value === '') {
                    currentPart.isStringLiteral = string.isStringLiteral === true;
                } else {
                    // More than one strings means it is for sure not a string literal...
                    currentPart.isStringLiteral = false;
                }

                currentPart.value += string.value;
            },

            comment(comment) {
                currentPart.isStringLiteral = false;
                currentPart.value += comment.rawValue;
            },

            templateString(templateString) {
                currentPart.isStringLiteral = false;
                currentPart.value += templateString.value;
            },

            char(ch, code) {
                let depth = currentPart.groupStack.length;
                let parentState = currentPart.parentState;

                if (code === CODE_SINGLE_QUOTE) {
                    return beginString("'", CODE_SINGLE_QUOTE);
                } else if (code === CODE_DOUBLE_QUOTE) {
                    return beginString('"', CODE_DOUBLE_QUOTE);
                } else if (code === CODE_BACKTICK) {
                    return beginTemplateString();
                } else if (code === CODE_FORWARD_SLASH) {
                    // Check next character to see if we are in a comment
                    var nextCode = parser.lookAtCharCodeAhead(1);
                    if (nextCode === CODE_FORWARD_SLASH) {
                        beginLineComment();
                        parser.skip(1);
                        return;
                    } else if (nextCode === CODE_ASTERISK) {

                        beginBlockComment();
                        parser.skip(1);
                        return;
                    } else if (depth === 0 && !isConcise && nextCode === CODE_CLOSE_ANGLE_BRACKET) {
                        // Let the STATE_WITHIN_OPEN_TAG state deal with the ending tag sequence
                        currentPart.endPos = parser.pos;
                        endExpression();
                        parser.rewind(1);

                        if (parser.state !== STATE_WITHIN_OPEN_TAG) {
                            // Make sure we transition into parsing within the open tag
                            parser.enterState(STATE_WITHIN_OPEN_TAG);
                        }
                        return;
                    }
                } else if (code === CODE_OPEN_PAREN ||
                           code === CODE_OPEN_SQUARE_BRACKET ||
                           code === CODE_OPEN_CURLY_BRACE) {

                    if (depth === 0 && code === CODE_OPEN_PAREN) {
                        currentPart.lastLeftParenPos = currentPart.value.length;
                    }

                    currentPart.groupStack.push(code);
                    currentPart.isStringLiteral = false;
                    currentPart.value += ch;
                    return;
                } else if (code === CODE_CLOSE_PAREN ||
                           code === CODE_CLOSE_SQUARE_BRACKET ||
                           code === CODE_CLOSE_CURLY_BRACE) {

                    if (depth === 0) {
                        if (code === CODE_CLOSE_SQUARE_BRACKET) {
                            // We are ending the attribute group so end this expression and let the
                            // STATE_WITHIN_OPEN_TAG state deal with the ending attribute group
                            if (currentOpenTag.withinAttrGroup) {
                                currentPart.endPos = parser.pos + 1;
                                endExpression();
                                // Let the STATE_WITHIN_OPEN_TAG state deal with the ending tag sequence
                                parser.rewind(1);
                                if (parser.state !== STATE_WITHIN_OPEN_TAG) {
                                    // Make sure we transition into parsing within the open tag
                                    parser.enterState(STATE_WITHIN_OPEN_TAG);
                                }
                                return;
                            }
                        } else {
                            return notifyError(currentPart.pos,
                                'INVALID_EXPRESSION',
                                'Mismatched group. A closing "' + ch + '" character was found but it is not matched with a corresponding opening character.');
                        }
                    }


                    let matchingGroupCharCode = currentPart.groupStack.pop();

                    if ((code === CODE_CLOSE_PAREN && matchingGroupCharCode !== CODE_OPEN_PAREN) ||
                        (code === CODE_CLOSE_SQUARE_BRACKET && matchingGroupCharCode !== CODE_OPEN_SQUARE_BRACKET) ||
                        (code === CODE_CLOSE_CURLY_BRACE && matchingGroupCharCode !== CODE_OPEN_CURLY_BRACE)) {
                            return notifyError(currentPart.pos,
                                'INVALID_EXPRESSION',
                                'Mismatched group. A "' + ch + '" character was found when "' + String.fromCharCode(matchingGroupCharCode) + '" was expected.');
                    }

                    currentPart.value += ch;

                    if (currentPart.groupStack.length === 0) {
                        if (code === CODE_CLOSE_PAREN) {
                            currentPart.lastRightParenPos = currentPart.value.length - 1;
                        } else if (code === CODE_CLOSE_CURLY_BRACE && parentState === STATE_PLACEHOLDER) {
                            currentPart.endPos = parser.pos + 1;
                            endExpression();
                            return;
                        }
                    }

                    return;
                } else if (depth === 0) {
                    if (!isConcise) {
                        if (code === CODE_CLOSE_ANGLE_BRACKET &&
                            (parentState === STATE_TAG_NAME ||
                             parentState === STATE_ATTRIBUTE_NAME ||
                             parentState === STATE_ATTRIBUTE_VALUE ||
                             parentState === STATE_WITHIN_OPEN_TAG)) {
                            currentPart.endPos = parser.pos;
                            endExpression();
                            endAttribute();
                            // Let the STATE_WITHIN_OPEN_TAG state deal with the ending tag sequence
                            parser.rewind(1);
                            if (parser.state !== STATE_WITHIN_OPEN_TAG) {
                                // Make sure we transition into parsing within the open tag
                                parser.enterState(STATE_WITHIN_OPEN_TAG);
                            }
                            return;
                        }
                    }

                    if (isWhitespaceCode(code)) {
                        currentPart.endPos = parser.pos;
                        endExpression();
                        endAttribute();
                        if (parser.state !== STATE_WITHIN_OPEN_TAG) {
                            // Make sure we transition into parsing within the open tag
                            parser.enterState(STATE_WITHIN_OPEN_TAG);
                        }
                        return;
                    } else if (code === CODE_EQUAL && parentState === STATE_ATTRIBUTE_NAME) {
                        currentPart.endPos = parser.pos;
                        endExpression();
                        // We encountered "=" which means we need to start reading
                        // the attribute value.
                        parser.enterState(STATE_ATTRIBUTE_VALUE);
                        return;
                    }

                    if (currentPart.parentState === STATE_TAG_NAME) {
                        if (checkForEscapedEscapedPlaceholder(ch, code)) {
                            currentPart.value += '\\';
                            parser.skip(1);
                            return;
                        }  else if (checkForEscapedPlaceholder(ch, code)) {
                            currentPart.value += '$';
                            parser.skip(1);
                            return;
                        } else if (code === CODE_DOLLAR && parser.lookAtCharCodeAhead(1) === CODE_OPEN_CURLY_BRACE) {
                            currentPart.endPos = parser.pos;
                            endExpression();
                            // We expect to start a placeholder at the first curly brace (the next character)
                            beginPlaceholder(true, true /* tag name */);
                            return;
                        } else if (code === CODE_PERIOD || code === CODE_NUMBER_SIGN) {
                            endExpression();
                            parser.rewind(1);
                            beginTagNameShorthand();
                            return;
                        }
                    }
                }

                currentPart.value += ch;
            }
        });

        var STATE_TAG_NAME_SHORTHAND = Parser.createState({
            name: 'STATE_TAG_NAME_SHORTHAND',

            placeholder(placeholder) {
                var shorthand = currentPart;
                shorthand.currentPart.addPlaceholder(placeholder);
            },

            eol(str) {
                currentOpenTag.tagNameEnd = parser.pos;
                endTagNameShorthand();

                if (parser.state !== STATE_WITHIN_OPEN_TAG) {
                    // Make sure we transition into parsing within the open tag
                    parser.enterState(STATE_WITHIN_OPEN_TAG);
                }

                if (isConcise) {
                    openTagEOL();
                }
            },

            eof() {
                endTagNameShorthand();

                if (isConcise) {
                    openTagEOF();
                } else {
                    return notifyError(currentPart.pos,
                        'INVALID_TAG_SHORTHAND',
                        'EOF reached will parsing id/class shorthand in tag name');
                }
            },

            char(ch, code) {
                var shorthand = currentPart;
                if (!isConcise) {
                    if (code === CODE_CLOSE_ANGLE_BRACKET) {
                        currentOpenTag.tagNameEnd = parser.pos;
                        endTagNameShorthand();
                        parser.rewind(1);
                        return;
                    }
                }

                if (isWhitespaceCode(code)) {
                    endTagNameShorthand();
                    currentOpenTag.tagNameEnd = parser.pos;
                    if (parser.state !== STATE_WITHIN_OPEN_TAG) {
                        parser.enterState(STATE_WITHIN_OPEN_TAG);
                    }
                    return;
                }

                if (code === CODE_PERIOD) {
                    if (shorthand.currentPart) {
                        shorthand.currentPart.end();
                    }

                    shorthand.beginPart('class');
                } else if (code === CODE_NUMBER_SIGN) {
                    if (shorthand.hasId) {
                        return notifyError(currentPart.pos,
                            'INVALID_TAG_SHORTHAND',
                            'Multiple shorthand ID parts are not allowed on the same tag');
                    }

                    shorthand.hasId = true;

                    if (shorthand.currentPart) {
                        shorthand.currentPart.end();
                    }

                    shorthand.beginPart('id');
                }

                else if (!ignorePlaceholders && checkForEscapedEscapedPlaceholder(ch, code)) {
                    shorthand.currentPart.text += '\\';
                    parser.skip(1);
                }  else if (!ignorePlaceholders && checkForEscapedPlaceholder(ch, code)) {
                    shorthand.currentPart.text += '$';
                    parser.skip(1);
                } else if (!ignorePlaceholders && checkForPlaceholder(ch, code)) {
                    // We went into placeholder state...
                } else {
                    shorthand.currentPart.text += ch;
                }
            }
        });

        // We enter STATE_WITHIN_OPEN_TAG after we have fully
        // read in the tag name and encountered a whitespace character
        var STATE_AFTER_PLACEHOLDER_WITHIN_TAG = Parser.createState({
            name: 'STATE_AFTER_PLACEHOLDER_WITHIN_TAG',

            eol: openTagEOL,

            eof: openTagEOF,

            char(ch, code) {

                if (!isConcise) {
                    if (code === CODE_CLOSE_ANGLE_BRACKET) {
                        finishOpenTag();
                        return;
                    } else if (code === CODE_FORWARD_SLASH) {
                        let nextCode = parser.lookAtCharCodeAhead(1);
                        if (nextCode === CODE_CLOSE_ANGLE_BRACKET) {
                            finishOpenTag(true /* self closed */);
                            parser.skip(1);
                            return;
                        }
                    }
                }

                if (isWhitespaceCode(code)) {
                    parser.enterState(STATE_WITHIN_OPEN_TAG);
                } else {
                    notifyError(parser.pos,
                        'UNEXPECTED_TEXT_AFTER_PLACEHOLDER_IN_TAG',
                        `An unexpected "${ch}" character was found after a placeoholder within the open tag.`);
                    return;
                }
            }
        });

        var STATE_PLACEHOLDER = Parser.createState({
            name: 'STATE_PLACEHOLDER',

            expression(expression) {
                currentPart.value = expression.value.slice(1, -1); // Chop off the curly braces
                currentPart.endPos = expression.endPos;
                endPlaceholder();
            },

            eol(str) {
                throw new Error('Illegal state. EOL not expected');
            },

            eof() {
                throw new Error('Illegal state. EOF not expected');
            },

            enter(oldState) {
                if (oldState !== STATE_EXPRESSION) {
                    beginExpression();
                }
            }
        });

        var STATE_STRING = Parser.createState({
            name: 'STATE_STRING',

            placeholder(placeholder) {
                if (currentPart.currentText) {
                    currentPart.stringParts.push(currentPart.currentText);
                    currentPart.currentText = '';
                }
                currentPart.isStringLiteral = false;
                currentPart.stringParts.push(placeholder);
            },

            eol(str) {
                // New line characters are not allowed in JavaScript string expressions. We need to use
                // a different character sequence, but we don't want to through off positions so we need
                // to use a replacement sequence with the same number of characters.
                if (str.length === 2) {
                    currentPart.currentText += '\\r\\n';
                } else {
                    currentPart.currentText += '\\n';
                }

            },

            eof() {
                if (placeholderDepth > 0) {
                    notifyError(parser.pos,
                        'INVALID_STRING',
                        'EOF reached while parsing string expression found inside placeholder');
                    return;
                }
                notifyError(parser.pos,
                    'INVALID_STRING',
                    'EOF reached while parsing string expression');
            },

            char(ch, code) {
                var stringParts = currentPart.stringParts;

                var nextCh;
                var quoteCharCode = currentPart.quoteCharCode;

                if (code === CODE_BACK_SLASH) {
                    if (!ignorePlaceholders && checkForEscapedEscapedPlaceholder(ch, code)) {
                        currentPart.currentText += '\\';
                    }  else if (!ignorePlaceholders && checkForEscapedPlaceholder(ch, code)) {
                        currentPart.currentText += '$';
                    } else {
                        // Handle string escape sequence
                        nextCh = parser.lookAtCharAhead(1);
                        currentPart.currentText += ch + nextCh;
                    }

                    parser.skip(1);
                } else if (code === quoteCharCode) {
                    // We encountered the end delimiter
                    if (currentPart.currentText) {
                        stringParts.push(currentPart.currentText);
                    }

                    let stringExpr = '';
                    let quoteChar =  currentPart.quoteChar;

                    if (stringParts.length) {
                        for (let i=0; i<stringParts.length; i++) {
                            let part = stringParts[i];
                            if (i !== 0) {
                                stringExpr += '+';
                            }

                            if (typeof part === 'string') {
                                stringExpr += quoteChar + part + quoteChar;
                            } else {
                                stringExpr += '(' + part.value + ')';
                            }
                        }
                    } else {
                        // Just an empty string...
                        stringExpr = quoteChar + quoteChar;
                    }

                    if (stringParts.length > 1) {
                        stringExpr = '(' + stringExpr + ')';
                    }

                    currentPart.value = stringExpr;
                    endString();
                } else if (!ignorePlaceholders && checkForPlaceholder(ch, code)) {
                    if (currentPart.currentText) {
                        stringParts.push(currentPart.currentText);
                    }

                    currentPart.currentText = '';
                    // We encountered nested placeholder...
                    currentPart.isStringLiteral = false;
                } else {
                    currentPart.currentText += ch;
                }
            }
        });

        var STATE_TEMPLATE_STRING = Parser.createState({
            name: 'STATE_TEMPLATE_STRING',

            placeholder: function(placeholder) {
                if (currentPart.currentText) {
                    currentPart.stringParts.push(currentPart.currentText);
                    currentPart.currentText = '';
                }
                currentPart.isStringLiteral = false;
                currentPart.stringParts.push(placeholder);
            },

            eol(str) {
                // Convert the EOL sequence ot the equivalent string escape sequences... Not necessary
                // for template strings but it is equivalent.
                if (str.length === 2) {
                    currentPart.value += '\\r\\n';
                } else {
                    currentPart.value += '\\n';
                }
            },

            eof() {
                notifyError(parser.pos,
                    'INVALID_TEMPLATE_STRING',
                    'EOF reached while parsing template string expression');
            },

            char(ch, code) {
                var nextCh;
                currentPart.value += ch;
                if (code === CODE_BACK_SLASH) {
                    // Handle string escape sequence
                    nextCh = parser.lookAtCharAhead(1);
                    parser.skip(1);

                    currentPart.value += nextCh;
                } else if (code === CODE_BACKTICK) {
                    endTemplateString();
                }
            }
        });

        // We enter STATE_JS_COMMENT_BLOCK after we encounter a "/*" sequence
        // while in STATE_ATTRIBUTE_VALUE or STATE_DELIMITED_EXPRESSION.
        // We leave STATE_JS_COMMENT_BLOCK when we see a "*/" sequence.
        var STATE_JS_COMMENT_BLOCK = Parser.createState({
            name: 'STATE_JS_COMMENT_BLOCK',

            eol(str) {
                currentPart.value += str;
            },

            eof() {
                notifyError(currentPart.pos,
                    'MALFORMED_COMMENT',
                    'EOF reached while parsing multi-line JavaScript comment');
            },

            char(ch, code) {


                if (code === CODE_ASTERISK) {
                    var nextCode = parser.lookAtCharCodeAhead(1);
                    if (nextCode === CODE_FORWARD_SLASH) {
                        currentPart.endPos = parser.pos + 2;
                        endJavaScriptComment();
                        parser.skip(1);
                        return;
                    }
                }

                currentPart.value += ch;
            }
        });

        // We enter STATE_JS_COMMENT_LINE after we encounter a "//" sequence
        // when parsing JavaScript code.
        // We leave STATE_JS_COMMENT_LINE when we see a newline character.
        var STATE_JS_COMMENT_LINE = Parser.createState({
            name: 'STATE_JS_COMMENT_LINE',

            eol(str) {
                currentPart.value += str;
                currentPart.endPos = parser.pos;
                endJavaScriptComment();
            },

            eof() {
                currentPart.endPos = parser.pos;
                endJavaScriptComment();
            },

            char(ch, code) {
                currentPart.value += ch;
            }
        });

        // We enter STATE_DTD after we encounter a "<!" while in the STATE_HTML_CONTENT.
        // We leave STATE_DTD if we see a ">".
        var STATE_DTD = Parser.createState({
            name: 'STATE_DTD',

            eol(str) {
                currentPart.value += str;
            },

            eof() {
                notifyError(currentPart.pos,
                    'MALFORMED_DOCUMENT_TYPE',
                    'EOF reached while parsing document type');
            },

            char(ch, code) {
                if (code === CODE_CLOSE_ANGLE_BRACKET) {
                    currentPart.endPos = parser.pos + 1;
                    endDocumentType();
                } else {
                    currentPart.value += ch;
                }
            }
        });

        // We enter STATE_DECLARATION after we encounter a "<?"
        // while in the STATE_HTML_CONTENT.
        // We leave STATE_DECLARATION if we see a "?>" or ">".
        var STATE_DECLARATION = Parser.createState({
            name: 'STATE_DECLARATION',

            eol(str) {
                currentPart.value += str;
            },

            eof() {
                notifyError(currentPart.pos,
                    'MALFORMED_DECLARATION',
                    'EOF reached while parsing declaration');
            },

            char(ch, code) {
                if (code === CODE_QUESTION) {
                    var nextCode = parser.lookAtCharCodeAhead(1);
                    if (nextCode === CODE_CLOSE_ANGLE_BRACKET) {
                        currentPart.endPos = parser.pos + 2;
                        endDeclaration();
                        parser.skip(1);
                    }
                } else if (code === CODE_CLOSE_ANGLE_BRACKET) {
                    currentPart.endPos = parser.pos + 1;
                    endDeclaration();
                } else {
                    currentPart.value += ch;
                }
            }
        });

        // We enter STATE_HTML_COMMENT after we encounter a "<--"
        // while in the STATE_HTML_CONTENT.
        // We leave STATE_HTML_COMMENT when we see a "-->".
        var STATE_HTML_COMMENT = Parser.createState({
            name: 'STATE_HTML_COMMENT',

            eol(newLineChars) {
                currentPart.value += newLineChars;
            },

            eof() {
                notifyError(currentPart.pos,
                    'MALFORMED_COMMENT',
                    'EOF reached while parsing comment');
            },

            char(ch, code) {
                if (code === CODE_HYPHEN) {
                    var match = parser.lookAheadFor('->');
                    if (match) {
                        currentPart.endPos = parser.pos + 3;
                        endHtmlComment();
                        parser.skip(match.length);
                    } else {
                        currentPart.value += ch;
                    }
                } else {
                    currentPart.value += ch;
                }
            }
        });

        // We enter STATE_SCRIPTLET after we encounter a "<%" while in STATE_HTML_CONTENT.
        // We leave STATE_SCRIPTLET if we see a "%>".
        var STATE_SCRIPTLET = Parser.createState({
            name: 'STATE_SCRIPTLET',

            eol(str) {
                currentPart.value += str;
            },

            eof() {
                notifyError(currentPart.pos,
                    'MALFORMED_SCRIPTLET',
                    'EOF reached while parsing scriptlet');
            },

            comment(comment) {
                currentPart.value += comment.rawValue;
            },

            char(ch, code) {
                if (currentPart.quoteCharCode) {
                    currentPart.value += ch;

                    // We are within a string... only look for ending string code
                    if (code === CODE_BACK_SLASH) {
                        // Handle string escape sequence
                        currentPart.value += parser.lookAtCharAhead(1);
                        parser.skip(1);
                    } else if (code === currentPart.quoteCharCode) {
                        currentPart.quoteCharCode = null;
                    }
                    return;
                } else if (code === CODE_FORWARD_SLASH) {
                    if (parser.lookAtCharCodeAhead(1) === CODE_ASTERISK) {
                        // Skip over code inside a JavaScript block comment
                        beginBlockComment();
                        parser.skip(1);
                        return;
                    }
                } else if (code === CODE_SINGLE_QUOTE || code === CODE_DOUBLE_QUOTE) {
                    currentPart.quoteCharCode = code;
                } else if (code === CODE_PERCENT) {
                    if (parser.lookAtCharCodeAhead(1) === CODE_CLOSE_ANGLE_BRACKET) {
                        endScriptlet(parser.pos + 2 /* end pos */);
                        parser.skip(1); // Skip over the closing right angle bracket
                        return;
                    }
                }

                currentPart.value += ch;
            }
        });

        parser.enterHtmlContentState = function() {
            parser.enterState(STATE_HTML_CONTENT);
        };

        parser.enterConciseHtmlContentState = function() {
            parser.enterState(STATE_CONCISE_HTML_CONTENT);
        };

        parser.enterParsedTextContentState = function() {
            var last = blockStack.length && blockStack[blockStack.length - 1];

            if (!last || !last.tagName) {
                throw new Error('The "parsed text content" parser state is only allowed within a tag');
            }

            if (isConcise) {
                // We will transition into the STATE_PARSED_TEXT_CONTENT state
                // for each of the nested HTML blocks
                last.body = BODY_PARSED_TEXT;
                parser.enterState(STATE_CONCISE_HTML_CONTENT);
            } else {
                parser.enterState(STATE_PARSED_TEXT_CONTENT);
            }
        };

        parser.enterJsContentState = parser.enterParsedTextContentState;
        parser.enterCssContentState = parser.enterParsedTextContentState;

        parser.enterStaticTextContentState = function() {
            var last = blockStack.length && blockStack[blockStack.length - 1];

            if (!last || !last.tagName) {
                throw new Error('The "static text content" parser state is only allowed within a tag');
            }

            if (isConcise) {
                // We will transition into the STATE_STATIC_TEXT_CONTENT state
                // for each of the nested HTML blocks
                last.body = BODY_STATIC_TEXT;
                parser.enterState(STATE_CONCISE_HTML_CONTENT);
            } else {
                parser.enterState(STATE_STATIC_TEXT_CONTENT);
            }
        };


        if (defaultMode === MODE_CONCISE) {
            parser.setInitialState(STATE_CONCISE_HTML_CONTENT);
            parser.enterDefaultState = function() {
                parser.enterState(STATE_CONCISE_HTML_CONTENT);
            };
        } else {
            parser.setInitialState(STATE_HTML_CONTENT);
            parser.enterDefaultState = function() {
                parser.enterState(STATE_HTML_CONTENT);
            };
        }
    }

    parse(data) {
        super.parse(data);
        this.notifiers.notifyFinish();
    }
}

module.exports = Parser;
});
$rmod.def("/htmljs-parser@1.5.5/index",function(r,e,n,a,t){var s=r("./Parser");e.createParser=function(r,e){var n=new s(r,e);return n}});
$rmod.main("/esprima@2.7.2","esprima");
$rmod.dep("/$/marko","esprima","2.7.2");
$rmod.def("/esprima@2.7.2/esprima",function(e,u,t,n,i){!function(e,t){"use strict";"function"==typeof define&&define.amd?define(["exports"],t):t("undefined"!=typeof u?u:e.esprima={})}(this,function(e){"use strict";function u(e,u){if(!e)throw new Error("ASSERT: "+u)}function t(e){return e>=48&&57>=e}function n(e){return"0123456789abcdefABCDEF".indexOf(e)>=0}function i(e){return"01234567".indexOf(e)>=0}function r(e){var u="0"!==e,t="01234567".indexOf(e);return Et>st&&i(rt[st])&&(u=!0,t=8*t+"01234567".indexOf(rt[st++]),"0123".indexOf(e)>=0&&Et>st&&i(rt[st])&&(t=8*t+"01234567".indexOf(rt[st++]))),{code:t,octal:u}}function a(e){return 32===e||9===e||11===e||12===e||160===e||e>=5760&&[5760,6158,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279].indexOf(e)>=0}function s(e){return 10===e||13===e||8232===e||8233===e}function o(e){return 65536>e?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10))+String.fromCharCode(56320+(e-65536&1023))}function l(e){return 36===e||95===e||e>=65&&90>=e||e>=97&&122>=e||92===e||e>=128&&it.NonAsciiIdentifierStart.test(o(e))}function D(e){return 36===e||95===e||e>=65&&90>=e||e>=97&&122>=e||e>=48&&57>=e||92===e||e>=128&&it.NonAsciiIdentifierPart.test(o(e))}function c(e){switch(e){case"enum":case"export":case"import":case"super":return!0;default:return!1}}function f(e){switch(e){case"implements":case"interface":case"package":case"private":case"protected":case"public":case"static":case"yield":case"let":return!0;default:return!1}}function h(e){return"eval"===e||"arguments"===e}function p(e){switch(e.length){case 2:return"if"===e||"in"===e||"do"===e;case 3:return"var"===e||"for"===e||"new"===e||"try"===e||"let"===e;case 4:return"this"===e||"else"===e||"case"===e||"void"===e||"with"===e||"enum"===e;case 5:return"while"===e||"break"===e||"catch"===e||"throw"===e||"const"===e||"yield"===e||"class"===e||"super"===e;case 6:return"return"===e||"typeof"===e||"delete"===e||"switch"===e||"export"===e||"import"===e;case 7:return"default"===e||"finally"===e||"extends"===e;case 8:return"function"===e||"continue"===e||"debugger"===e;case 10:return"instanceof"===e;default:return!1}}function C(e,t,n,i,r){var a;u("number"==typeof n,"Comment must have valid position"),mt.lastCommentStart=n,a={type:e,value:t},Bt.range&&(a.range=[n,i]),Bt.loc&&(a.loc=r),Bt.comments.push(a),Bt.attachComment&&(Bt.leadingComments.push(a),Bt.trailingComments.push(a)),Bt.tokenize&&(a.type=a.type+"Comment",Bt.delegate&&(a=Bt.delegate(a)),Bt.tokens.push(a))}function F(e){var u,t,n,i;for(u=st-e,t={start:{line:ot,column:st-lt-e}};Et>st;)if(n=rt.charCodeAt(st),++st,s(n))return Dt=!0,Bt.comments&&(i=rt.slice(u+e,st-1),t.end={line:ot,column:st-lt-1},C("Line",i,u,st-1,t)),13===n&&10===rt.charCodeAt(st)&&++st,++ot,void(lt=st);Bt.comments&&(i=rt.slice(u+e,st),t.end={line:ot,column:st-lt},C("Line",i,u,st,t))}function A(){var e,u,t,n;for(Bt.comments&&(e=st-2,u={start:{line:ot,column:st-lt-2}});Et>st;)if(t=rt.charCodeAt(st),s(t))13===t&&10===rt.charCodeAt(st+1)&&++st,Dt=!0,++ot,++st,lt=st;else if(42===t){if(47===rt.charCodeAt(st+1))return++st,++st,void(Bt.comments&&(n=rt.slice(e+2,st-2),u.end={line:ot,column:st-lt},C("Block",n,e,st,u)));++st}else++st;Bt.comments&&(u.end={line:ot,column:st-lt},n=rt.slice(e+2,st),C("Block",n,e,st,u)),te()}function E(){var e,u;for(Dt=!1,u=0===st;Et>st;)if(e=rt.charCodeAt(st),a(e))++st;else if(s(e))Dt=!0,++st,13===e&&10===rt.charCodeAt(st)&&++st,++ot,lt=st,u=!0;else if(47===e)if(e=rt.charCodeAt(st+1),47===e)++st,++st,F(2),u=!0;else{if(42!==e)break;++st,++st,A()}else if(u&&45===e){if(45!==rt.charCodeAt(st+1)||62!==rt.charCodeAt(st+2))break;st+=3,F(3)}else{if(60!==e)break;if("!--"!==rt.slice(st+1,st+4))break;++st,++st,++st,++st,F(4)}}function d(e){var u,t,i,r=0;for(t="u"===e?4:2,u=0;t>u;++u){if(!(Et>st&&n(rt[st])))return"";i=rt[st++],r=16*r+"0123456789abcdef".indexOf(i.toLowerCase())}return String.fromCharCode(r)}function m(){var e,u;for(e=rt[st],u=0,"}"===e&&ue();Et>st&&(e=rt[st++],n(e));)u=16*u+"0123456789abcdef".indexOf(e.toLowerCase());return(u>1114111||"}"!==e)&&ue(),o(u)}function B(e){var u,t,n;return u=rt.charCodeAt(e),u>=55296&&56319>=u&&(n=rt.charCodeAt(e+1),n>=56320&&57343>=n&&(t=u,u=1024*(t-55296)+n-56320+65536)),u}function y(){var e,u,t;for(e=B(st),t=o(e),st+=t.length,92===e&&(117!==rt.charCodeAt(st)&&ue(),++st,"{"===rt[st]?(++st,u=m()):(u=d("u"),e=u.charCodeAt(0),u&&"\\"!==u&&l(e)||ue()),t=u);Et>st&&(e=B(st),D(e));)u=o(e),t+=u,st+=u.length,92===e&&(t=t.substr(0,t.length-1),117!==rt.charCodeAt(st)&&ue(),++st,"{"===rt[st]?(++st,u=m()):(u=d("u"),e=u.charCodeAt(0),u&&"\\"!==u&&D(e)||ue()),t+=u);return t}function g(){var e,u;for(e=st++;Et>st;){if(u=rt.charCodeAt(st),92===u)return st=e,y();if(u>=55296&&57343>u)return st=e,y();if(!D(u))break;++st}return rt.slice(e,st)}function S(){var e,u,t;return e=st,u=92===rt.charCodeAt(st)?y():g(),t=1===u.length?Qu.Identifier:p(u)?Qu.Keyword:"null"===u?Qu.NullLiteral:"true"===u||"false"===u?Qu.BooleanLiteral:Qu.Identifier,{type:t,value:u,lineNumber:ot,lineStart:lt,start:e,end:st}}function v(){var e,u;switch(e={type:Qu.Punctuator,value:"",lineNumber:ot,lineStart:lt,start:st,end:st},u=rt[st]){case"(":Bt.tokenize&&(Bt.openParenToken=Bt.tokenValues.length),++st;break;case"{":Bt.tokenize&&(Bt.openCurlyToken=Bt.tokenValues.length),mt.curlyStack.push("{"),++st;break;case".":++st,"."===rt[st]&&"."===rt[st+1]&&(st+=2,u="...");break;case"}":++st,mt.curlyStack.pop();break;case")":case";":case",":case"[":case"]":case":":case"?":case"~":++st;break;default:u=rt.substr(st,4),">>>="===u?st+=4:(u=u.substr(0,3),"==="===u||"!=="===u||">>>"===u||"<<="===u||">>="===u?st+=3:(u=u.substr(0,2),"&&"===u||"||"===u||"=="===u||"!="===u||"+="===u||"-="===u||"*="===u||"/="===u||"++"===u||"--"===u||"<<"===u||">>"===u||"&="===u||"|="===u||"^="===u||"%="===u||"<="===u||">="===u||"=>"===u?st+=2:(u=rt[st],"<>=!+-*%&|^/".indexOf(u)>=0&&++st)))}return st===e.start&&ue(),e.end=st,e.value=u,e}function w(e){for(var u="";Et>st&&n(rt[st]);)u+=rt[st++];return 0===u.length&&ue(),l(rt.charCodeAt(st))&&ue(),{type:Qu.NumericLiteral,value:parseInt("0x"+u,16),lineNumber:ot,lineStart:lt,start:e,end:st}}function x(e){var u,n;for(n="";Et>st&&(u=rt[st],"0"===u||"1"===u);)n+=rt[st++];return 0===n.length&&ue(),Et>st&&(u=rt.charCodeAt(st),(l(u)||t(u))&&ue()),{type:Qu.NumericLiteral,value:parseInt(n,2),lineNumber:ot,lineStart:lt,start:e,end:st}}function b(e,u){var n,r;for(i(e)?(r=!0,n="0"+rt[st++]):(r=!1,++st,n="");Et>st&&i(rt[st]);)n+=rt[st++];return r||0!==n.length||ue(),(l(rt.charCodeAt(st))||t(rt.charCodeAt(st)))&&ue(),{type:Qu.NumericLiteral,value:parseInt(n,8),octal:r,lineNumber:ot,lineStart:lt,start:u,end:st}}function k(){var e,u;for(e=st+1;Et>e;++e){if(u=rt[e],"8"===u||"9"===u)return!1;if(!i(u))return!0}return!0}function I(){var e,n,r;if(r=rt[st],u(t(r.charCodeAt(0))||"."===r,"Numeric literal must start with a decimal digit or a decimal point"),n=st,e="","."!==r){if(e=rt[st++],r=rt[st],"0"===e){if("x"===r||"X"===r)return++st,w(n);if("b"===r||"B"===r)return++st,x(n);if("o"===r||"O"===r)return b(r,n);if(i(r)&&k())return b(r,n)}for(;t(rt.charCodeAt(st));)e+=rt[st++];r=rt[st]}if("."===r){for(e+=rt[st++];t(rt.charCodeAt(st));)e+=rt[st++];r=rt[st]}if("e"===r||"E"===r)if(e+=rt[st++],r=rt[st],("+"===r||"-"===r)&&(e+=rt[st++]),t(rt.charCodeAt(st)))for(;t(rt.charCodeAt(st));)e+=rt[st++];else ue();return l(rt.charCodeAt(st))&&ue(),{type:Qu.NumericLiteral,value:parseFloat(e),lineNumber:ot,lineStart:lt,start:n,end:st}}function P(){var e,t,n,a,o,l="",D=!1;for(e=rt[st],u("'"===e||'"'===e,"String literal must starts with a quote"),t=st,++st;Et>st;){if(n=rt[st++],n===e){e="";break}if("\\"===n)if(n=rt[st++],n&&s(n.charCodeAt(0)))++ot,"\r"===n&&"\n"===rt[st]&&++st,lt=st;else switch(n){case"u":case"x":if("{"===rt[st])++st,l+=m();else{if(a=d(n),!a)throw ue();l+=a}break;case"n":l+="\n";break;case"r":l+="\r";break;case"t":l+="	";break;case"b":l+="\b";break;case"f":l+="\f";break;case"v":l+="";break;case"8":case"9":l+=n,te();break;default:i(n)?(o=r(n),D=o.octal||D,l+=String.fromCharCode(o.code)):l+=n}else{if(s(n.charCodeAt(0)))break;l+=n}}return""!==e&&(st=t,ue()),{type:Qu.StringLiteral,value:l,octal:D,lineNumber:Ct,lineStart:Ft,start:t,end:st}}function L(){var e,u,n,r,a,o,l,D,c="";for(r=!1,o=!1,u=st,a="`"===rt[st],n=2,++st;Et>st;){if(e=rt[st++],"`"===e){n=1,o=!0,r=!0;break}if("$"===e){if("{"===rt[st]){mt.curlyStack.push("${"),++st,r=!0;break}c+=e}else if("\\"===e)if(e=rt[st++],s(e.charCodeAt(0)))++ot,"\r"===e&&"\n"===rt[st]&&++st,lt=st;else switch(e){case"n":c+="\n";break;case"r":c+="\r";break;case"t":c+="	";break;case"u":case"x":"{"===rt[st]?(++st,c+=m()):(l=st,D=d(e),D?c+=D:(st=l,c+=e));break;case"b":c+="\b";break;case"f":c+="\f";break;case"v":c+="";break;default:"0"===e?(t(rt.charCodeAt(st))&&Q(nt.TemplateOctalLiteral),c+="\x00"):i(e)?Q(nt.TemplateOctalLiteral):c+=e}else s(e.charCodeAt(0))?(++ot,"\r"===e&&"\n"===rt[st]&&++st,lt=st,c+="\n"):c+=e}return r||ue(),a||mt.curlyStack.pop(),{type:Qu.Template,value:{cooked:c,raw:rt.slice(u+1,st-n)},head:a,tail:o,lineNumber:ot,lineStart:lt,start:u,end:st}}function T(e,u){var t="￿",n=e;u.indexOf("u")>=0&&(n=n.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,function(e,u,n){var i=parseInt(u||n,16);return i>1114111&&ue(null,nt.InvalidRegExp),65535>=i?String.fromCharCode(i):t}).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,t));try{RegExp(n)}catch(i){ue(null,nt.InvalidRegExp)}try{return new RegExp(e,u)}catch(r){return null}}function N(){var e,t,n,i,r;for(e=rt[st],u("/"===e,"Regular expression literal must start with a slash"),t=rt[st++],n=!1,i=!1;Et>st;)if(e=rt[st++],t+=e,"\\"===e)e=rt[st++],s(e.charCodeAt(0))&&ue(null,nt.UnterminatedRegExp),t+=e;else if(s(e.charCodeAt(0)))ue(null,nt.UnterminatedRegExp);else if(n)"]"===e&&(n=!1);else{if("/"===e){i=!0;break}"["===e&&(n=!0)}return i||ue(null,nt.UnterminatedRegExp),r=t.substr(1,t.length-2),{value:r,literal:t}}function O(){var e,u,t,n;for(u="",t="";Et>st&&(e=rt[st],D(e.charCodeAt(0)));)if(++st,"\\"===e&&Et>st)if(e=rt[st],"u"===e){if(++st,n=st,e=d("u"))for(t+=e,u+="\\u";st>n;++n)u+=rt[n];else st=n,t+="u",u+="\\u";te()}else u+="\\",te();else t+=e,u+=e;return{value:t,literal:u}}function R(){var e,u,t,n;return At=!0,dt=null,E(),e=st,u=N(),t=O(),n=T(u.value,t.value),At=!1,Bt.tokenize?{type:Qu.RegularExpression,value:n,regex:{pattern:u.value,flags:t.value},lineNumber:ot,lineStart:lt,start:e,end:st}:{literal:u.literal+t.literal,value:n,regex:{pattern:u.value,flags:t.value},start:e,end:st}}function U(){var e,u,t,n;return E(),e=st,u={start:{line:ot,column:st-lt}},t=R(),u.end={line:ot,column:st-lt},Bt.tokenize||(Bt.tokens.length>0&&(n=Bt.tokens[Bt.tokens.length-1],n.range[0]===e&&"Punctuator"===n.type&&("/"===n.value||"/="===n.value)&&Bt.tokens.pop()),Bt.tokens.push({type:"RegularExpression",value:t.literal,regex:t.regex,range:[e,st],loc:u})),t}function Y(e){return e.type===Qu.Identifier||e.type===Qu.Keyword||e.type===Qu.BooleanLiteral||e.type===Qu.NullLiteral}function M(){function e(e){return e&&e.length>1&&e[0]>="a"&&e[0]<="z"}var u,t,n;switch(t=Bt.tokenValues[Bt.tokens.length-1],u=null!==t,t){case"this":case"]":u=!1;break;case")":n=Bt.tokenValues[Bt.openParenToken-1],u="if"===n||"while"===n||"for"===n||"with"===n;break;case"}":u=!1,e(Bt.tokenValues[Bt.openCurlyToken-3])?(n=Bt.tokenValues[Bt.openCurlyToken-4],u=n?et.indexOf(n)<0:!1):e(Bt.tokenValues[Bt.openCurlyToken-4])&&(n=Bt.tokenValues[Bt.openCurlyToken-5],u=n?et.indexOf(n)<0:!0)}return u?U():v()}function j(){var e,u;return st>=Et?{type:Qu.EOF,lineNumber:ot,lineStart:lt,start:st,end:st}:(e=rt.charCodeAt(st),l(e)?(u=S(),at&&f(u.value)&&(u.type=Qu.Keyword),u):40===e||41===e||59===e?v():39===e||34===e?P():46===e?t(rt.charCodeAt(st+1))?I():v():t(e)?I():Bt.tokenize&&47===e?M():96===e||125===e&&"${"===mt.curlyStack[mt.curlyStack.length-1]?L():e>=55296&&57343>e&&(e=B(st),l(e))?S():v())}function V(){var e,u,t,n;return e={start:{line:ot,column:st-lt}},u=j(),e.end={line:ot,column:st-lt},u.type!==Qu.EOF&&(t=rt.slice(u.start,u.end),n={type:Zu[u.type],value:t,range:[u.start,u.end],loc:e},u.regex&&(n.regex={pattern:u.regex.pattern,flags:u.regex.flags}),Bt.tokenValues&&Bt.tokenValues.push("Punctuator"===n.type||"Keyword"===n.type?n.value:null),Bt.tokenize&&(Bt.range||delete n.range,Bt.loc||delete n.loc,Bt.delegate&&(n=Bt.delegate(n))),Bt.tokens.push(n)),u}function W(){var e;return At=!0,ct=st,ft=ot,ht=lt,E(),e=dt,pt=st,Ct=ot,Ft=lt,dt="undefined"!=typeof Bt.tokens?V():j(),At=!1,e}function H(){At=!0,E(),ct=st,ft=ot,ht=lt,pt=st,Ct=ot,Ft=lt,dt="undefined"!=typeof Bt.tokens?V():j(),At=!1}function K(){this.line=Ct,this.column=pt-Ft}function q(){this.start=new K,this.end=null}function z(e){this.start={line:e.lineNumber,column:e.start-e.lineStart},this.end=null}function _(){Bt.range&&(this.range=[pt,0]),Bt.loc&&(this.loc=new q)}function $(e){Bt.range&&(this.range=[e.start,0]),Bt.loc&&(this.loc=new z(e))}function G(e){var u,t;for(u=0;u<Bt.errors.length;u++)if(t=Bt.errors[u],t.index===e.index&&t.message===e.message)return;Bt.errors.push(e)}function X(e,u){var t=new Error(e);try{throw t}catch(n){Object.create&&Object.defineProperty&&(t=Object.create(n),Object.defineProperty(t,"column",{value:u}))}finally{return t}}function J(e,u,t){var n,i,r;return n="Line "+e+": "+t,i=u-(At?lt:ht)+1,r=X(n,i),r.lineNumber=e,r.description=t,r.index=u,r}function Q(e){var t,n;throw t=Array.prototype.slice.call(arguments,1),n=e.replace(/%(\d)/g,function(e,n){return u(n<t.length,"Message reference must be in range"),t[n]}),J(ft,ct,n)}function Z(e){var t,n,i;if(t=Array.prototype.slice.call(arguments,1),n=e.replace(/%(\d)/g,function(e,n){return u(n<t.length,"Message reference must be in range"),t[n]}),i=J(ot,ct,n),!Bt.errors)throw i;G(i)}function ee(e,u){var t,n=u||nt.UnexpectedToken;return e?(u||(n=e.type===Qu.EOF?nt.UnexpectedEOS:e.type===Qu.Identifier?nt.UnexpectedIdentifier:e.type===Qu.NumericLiteral?nt.UnexpectedNumber:e.type===Qu.StringLiteral?nt.UnexpectedString:e.type===Qu.Template?nt.UnexpectedTemplate:nt.UnexpectedToken,e.type===Qu.Keyword&&(c(e.value)?n=nt.UnexpectedReserved:at&&f(e.value)&&(n=nt.StrictReservedWord))),t=e.type===Qu.Template?e.value.raw:e.value):t="ILLEGAL",n=n.replace("%0",t),e&&"number"==typeof e.lineNumber?J(e.lineNumber,e.start,n):J(At?ot:ft,At?st:ct,n)}function ue(e,u){throw ee(e,u)}function te(e,u){var t=ee(e,u);if(!Bt.errors)throw t;G(t)}function ne(e){var u=W();(u.type!==Qu.Punctuator||u.value!==e)&&ue(u)}function ie(){var e;Bt.errors?(e=dt,e.type===Qu.Punctuator&&","===e.value?W():e.type===Qu.Punctuator&&";"===e.value?(W(),te(e)):te(e,nt.UnexpectedToken)):ne(",")}function re(e){var u=W();(u.type!==Qu.Keyword||u.value!==e)&&ue(u)}function ae(e){return dt.type===Qu.Punctuator&&dt.value===e}function se(e){return dt.type===Qu.Keyword&&dt.value===e}function oe(e){return dt.type===Qu.Identifier&&dt.value===e}function le(){var e;return dt.type!==Qu.Punctuator?!1:(e=dt.value,"="===e||"*="===e||"/="===e||"%="===e||"+="===e||"-="===e||"<<="===e||">>="===e||">>>="===e||"&="===e||"^="===e||"|="===e)}function De(){return 59===rt.charCodeAt(pt)||ae(";")?void W():void(Dt||(ct=pt,ft=Ct,ht=Ft,dt.type===Qu.EOF||ae("}")||ue(dt)))}function ce(e){var u,t=yt,n=gt,i=St;return yt=!0,gt=!0,St=null,u=e(),null!==St&&ue(St),yt=t,gt=n,St=i,u}function fe(e){var u,t=yt,n=gt,i=St;return yt=!0,gt=!0,St=null,u=e(),yt=yt&&t,gt=gt&&n,St=i||St,u}function he(e,u){var t,n,i=new _,r=[];for(ne("[");!ae("]");)if(ae(","))W(),r.push(null);else{if(ae("...")){n=new _,W(),e.push(dt),t=Ze(u),r.push(n.finishRestElement(t));break}r.push(Ae(e,u)),ae("]")||ne(",")}return ne("]"),i.finishArrayPattern(r)}function pe(e,u){var t,n,i,r=new _,a=ae("[");if(dt.type===Qu.Identifier){if(n=dt,t=Ze(),ae("="))return e.push(n),W(),i=$e(),r.finishProperty("init",t,!1,new $(n).finishAssignmentPattern(t,i),!1,!0);if(!ae(":"))return e.push(n),r.finishProperty("init",t,!1,t,!1,!0)}else t=Be();return ne(":"),i=Ae(e,u),r.finishProperty("init",t,a,i,!1,!1)}function Ce(e,u){var t=new _,n=[];for(ne("{");!ae("}");)n.push(pe(e,u)),ae("}")||ne(",");return W(),t.finishObjectPattern(n)}function Fe(e,u){return ae("[")?he(e,u):ae("{")?Ce(e,u):(se("let")&&("const"===u||"let"===u)&&te(dt,nt.UnexpectedToken),e.push(dt),Ze(u))}function Ae(e,u){var t,n,i,r=dt;return t=Fe(e,u),ae("=")&&(W(),n=mt.allowYield,mt.allowYield=!0,i=ce($e),mt.allowYield=n,t=new $(r).finishAssignmentPattern(t,i)),t}function Ee(){var e,u=[],t=new _;for(ne("[");!ae("]");)ae(",")?(W(),u.push(null)):ae("...")?(e=new _,W(),e.finishSpreadElement(fe($e)),ae("]")||(gt=yt=!1,ne(",")),u.push(e)):(u.push(fe($e)),ae("]")||ne(","));return W(),t.finishArrayExpression(u)}function de(e,u,t){var n,i;return gt=yt=!1,n=at,i=ce(xu),at&&u.firstRestricted&&te(u.firstRestricted,u.message),at&&u.stricted&&te(u.stricted,u.message),at=n,e.finishFunctionExpression(null,u.params,u.defaults,i,t)}function me(){var e,u,t=new _,n=mt.allowYield;return mt.allowYield=!1,e=Iu(),mt.allowYield=n,mt.allowYield=!1,u=de(t,e,!1),mt.allowYield=n,u}function Be(){var e,u,t=new _;switch(e=W(),e.type){case Qu.StringLiteral:case Qu.NumericLiteral:return at&&e.octal&&te(e,nt.StrictOctalLiteral),t.finishLiteral(e);case Qu.Identifier:case Qu.BooleanLiteral:case Qu.NullLiteral:case Qu.Keyword:return t.finishIdentifier(e.value);case Qu.Punctuator:if("["===e.value)return u=ce($e),ne("]"),u}ue(e)}function ye(){switch(dt.type){case Qu.Identifier:case Qu.StringLiteral:case Qu.BooleanLiteral:case Qu.NullLiteral:case Qu.NumericLiteral:case Qu.Keyword:return!0;case Qu.Punctuator:return"["===dt.value}return!1}function ge(e,u,t,n){var i,r,a,s,o=mt.allowYield;if(e.type===Qu.Identifier){if("get"===e.value&&ye())return t=ae("["),u=Be(),a=new _,ne("("),ne(")"),mt.allowYield=!1,i=de(a,{params:[],defaults:[],stricted:null,firstRestricted:null,message:null},!1),mt.allowYield=o,n.finishProperty("get",u,t,i,!1,!1);if("set"===e.value&&ye())return t=ae("["),u=Be(),a=new _,ne("("),r={params:[],defaultCount:0,defaults:[],firstRestricted:null,paramSet:{}},ae(")")?te(dt):(mt.allowYield=!1,ku(r),mt.allowYield=o,0===r.defaultCount&&(r.defaults=[])),ne(")"),mt.allowYield=!1,i=de(a,r,!1),mt.allowYield=o,n.finishProperty("set",u,t,i,!1,!1)}else if(e.type===Qu.Punctuator&&"*"===e.value&&ye())return t=ae("["),u=Be(),a=new _,mt.allowYield=!0,s=Iu(),mt.allowYield=o,mt.allowYield=!1,i=de(a,s,!0),mt.allowYield=o,n.finishProperty("init",u,t,i,!0,!1);return u&&ae("(")?(i=me(),n.finishProperty("init",u,t,i,!0,!1)):null}function Se(e){var u,t,n,i,r,a=dt,s=new _;return u=ae("["),ae("*")?W():t=Be(),(n=ge(a,t,u,s))?n:(t||ue(dt),u||(i=t.type===ut.Identifier&&"__proto__"===t.name||t.type===ut.Literal&&"__proto__"===t.value,e.value&&i&&Z(nt.DuplicateProtoProperty),e.value|=i),ae(":")?(W(),r=fe($e),s.finishProperty("init",t,u,r,!1,!1)):a.type===Qu.Identifier?ae("=")?(St=dt,W(),r=ce($e),s.finishProperty("init",t,u,new $(a).finishAssignmentPattern(t,r),!1,!0)):s.finishProperty("init",t,u,t,!1,!0):void ue(dt))}function ve(){var e=[],u={value:!1},t=new _;for(ne("{");!ae("}");)e.push(Se(u)),ae("}")||ie();return ne("}"),t.finishObjectExpression(e)}function we(e){var u;switch(e.type){case ut.Identifier:case ut.MemberExpression:case ut.RestElement:case ut.AssignmentPattern:break;case ut.SpreadElement:e.type=ut.RestElement,we(e.argument);break;case ut.ArrayExpression:for(e.type=ut.ArrayPattern,u=0;u<e.elements.length;u++)null!==e.elements[u]&&we(e.elements[u]);break;case ut.ObjectExpression:for(e.type=ut.ObjectPattern,u=0;u<e.properties.length;u++)we(e.properties[u].value);break;case ut.AssignmentExpression:e.type=ut.AssignmentPattern,we(e.left)}}function xe(e){var u,t;return(dt.type!==Qu.Template||e.head&&!dt.head)&&ue(),u=new _,t=W(),u.finishTemplateElement({raw:t.value.raw,cooked:t.value.cooked},t.tail)}function be(){var e,u,t,n=new _;for(e=xe({head:!0}),u=[e],t=[];!e.tail;)t.push(Ge()),e=xe({head:!1}),u.push(e);return n.finishTemplateLiteral(u,t)}function ke(){var e,u,t,n,i=[];if(ne("("),ae(")"))return W(),ae("=>")||ne("=>"),{type:tt.ArrowParameterPlaceHolder,params:[],rawParams:[]};if(t=dt,ae("..."))return e=lu(i),ne(")"),ae("=>")||ne("=>"),{type:tt.ArrowParameterPlaceHolder,params:[e]};if(yt=!0,e=fe($e),ae(",")){for(gt=!1,u=[e];Et>pt&&ae(",");){if(W(),ae("...")){for(yt||ue(dt),u.push(lu(i)),ne(")"),ae("=>")||ne("=>"),yt=!1,n=0;n<u.length;n++)we(u[n]);return{type:tt.ArrowParameterPlaceHolder,params:u}}u.push(fe($e))}e=new $(t).finishSequenceExpression(u)}if(ne(")"),ae("=>")){if(e.type===ut.Identifier&&"yield"===e.name)return{type:tt.ArrowParameterPlaceHolder,params:[e]};if(yt||ue(dt),e.type===ut.SequenceExpression)for(n=0;n<e.expressions.length;n++)we(e.expressions[n]);else we(e);e={type:tt.ArrowParameterPlaceHolder,params:e.type===ut.SequenceExpression?e.expressions:[e]}}return yt=!1,e}function Ie(){var e,u,t,n;if(ae("("))return yt=!1,fe(ke);if(ae("["))return fe(Ee);if(ae("{"))return fe(ve);if(e=dt.type,n=new _,e===Qu.Identifier)"module"===mt.sourceType&&"await"===dt.value&&te(dt),t=n.finishIdentifier(W().value);else if(e===Qu.StringLiteral||e===Qu.NumericLiteral)gt=yt=!1,at&&dt.octal&&te(dt,nt.StrictOctalLiteral),t=n.finishLiteral(W());else if(e===Qu.Keyword){if(!at&&mt.allowYield&&se("yield"))return Le();if(!at&&se("let"))return n.finishIdentifier(W().value);if(gt=yt=!1,se("function"))return Lu();if(se("this"))return W(),n.finishThisExpression();if(se("class"))return Ou();ue(W())}else e===Qu.BooleanLiteral?(gt=yt=!1,u=W(),u.value="true"===u.value,t=n.finishLiteral(u)):e===Qu.NullLiteral?(gt=yt=!1,u=W(),u.value=null,t=n.finishLiteral(u)):ae("/")||ae("/=")?(gt=yt=!1,st=pt,u="undefined"!=typeof Bt.tokens?U():R(),W(),t=n.finishLiteral(u)):e===Qu.Template?t=be():ue(W());return t}function Pe(){var e,u=[];if(ne("("),!ae(")"))for(;Et>pt&&(ae("...")?(e=new _,W(),e.finishSpreadElement(ce($e))):e=ce($e),u.push(e),!ae(")"));)ie();return ne(")"),u}function Le(){var e,u=new _;return e=W(),Y(e)||ue(e),u.finishIdentifier(e.value)}function Te(){return ne("."),Le()}function Ne(){var e;return ne("["),e=ce(Ge),ne("]"),e}function Oe(){var e,u,t=new _;if(re("new"),ae(".")){if(W(),dt.type===Qu.Identifier&&"target"===dt.value&&mt.inFunctionBody)return W(),t.finishMetaProperty("new","target");ue(dt)}return e=ce(Ue),u=ae("(")?Pe():[],gt=yt=!1,t.finishNewExpression(e,u)}function Re(){var e,u,t,n,i,r=mt.allowIn;for(i=dt,mt.allowIn=!0,se("super")&&mt.inFunctionBody?(u=new _,W(),u=u.finishSuper(),ae("(")||ae(".")||ae("[")||ue(dt)):u=fe(se("new")?Oe:Ie);;)if(ae("."))yt=!1,gt=!0,n=Te(),u=new $(i).finishMemberExpression(".",u,n);else if(ae("("))yt=!1,gt=!1,t=Pe(),u=new $(i).finishCallExpression(u,t);else if(ae("["))yt=!1,gt=!0,n=Ne(),u=new $(i).finishMemberExpression("[",u,n);else{if(dt.type!==Qu.Template||!dt.head)break;e=be(),u=new $(i).finishTaggedTemplateExpression(u,e)}return mt.allowIn=r,u}function Ue(){var e,t,n,i;for(u(mt.allowIn,"callee of new expression always allow in keyword."),i=dt,se("super")&&mt.inFunctionBody?(t=new _,W(),t=t.finishSuper(),ae("[")||ae(".")||ue(dt)):t=fe(se("new")?Oe:Ie);;)if(ae("["))yt=!1,gt=!0,n=Ne(),t=new $(i).finishMemberExpression("[",t,n);else if(ae("."))yt=!1,gt=!0,n=Te(),t=new $(i).finishMemberExpression(".",t,n);else{if(dt.type!==Qu.Template||!dt.head)break;e=be(),t=new $(i).finishTaggedTemplateExpression(t,e)}return t}function Ye(){var e,u,t=dt;return e=fe(Re),Dt||dt.type!==Qu.Punctuator||(ae("++")||ae("--"))&&(at&&e.type===ut.Identifier&&h(e.name)&&Z(nt.StrictLHSPostfix),gt||Z(nt.InvalidLHSInAssignment),gt=yt=!1,u=W(),e=new $(t).finishPostfixExpression(u.value,e)),e}function Me(){var e,u,t;return dt.type!==Qu.Punctuator&&dt.type!==Qu.Keyword?u=Ye():ae("++")||ae("--")?(t=dt,e=W(),u=fe(Me),at&&u.type===ut.Identifier&&h(u.name)&&Z(nt.StrictLHSPrefix),gt||Z(nt.InvalidLHSInAssignment),u=new $(t).finishUnaryExpression(e.value,u),gt=yt=!1):ae("+")||ae("-")||ae("~")||ae("!")?(t=dt,e=W(),u=fe(Me),u=new $(t).finishUnaryExpression(e.value,u),gt=yt=!1):se("delete")||se("void")||se("typeof")?(t=dt,e=W(),u=fe(Me),u=new $(t).finishUnaryExpression(e.value,u),at&&"delete"===u.operator&&u.argument.type===ut.Identifier&&Z(nt.StrictDelete),gt=yt=!1):u=Ye(),u}function je(e,u){var t=0;if(e.type!==Qu.Punctuator&&e.type!==Qu.Keyword)return 0;switch(e.value){case"||":t=1;break;case"&&":t=2;break;case"|":t=3;break;case"^":t=4;break;case"&":t=5;break;case"==":case"!=":case"===":case"!==":t=6;break;case"<":case">":case"<=":case">=":case"instanceof":t=7;break;case"in":t=u?7:0;break;case"<<":case">>":case">>>":t=8;break;case"+":case"-":t=9;break;case"*":case"/":case"%":t=11}return t}function Ve(){var e,u,t,n,i,r,a,s,o,l;if(e=dt,o=fe(Me),n=dt,i=je(n,mt.allowIn),0===i)return o;for(gt=yt=!1,n.prec=i,W(),u=[e,dt],a=ce(Me),r=[o,n,a];(i=je(dt,mt.allowIn))>0;){for(;r.length>2&&i<=r[r.length-2].prec;)a=r.pop(),s=r.pop().value,o=r.pop(),u.pop(),t=new $(u[u.length-1]).finishBinaryExpression(s,o,a),r.push(t);n=W(),n.prec=i,r.push(n),u.push(dt),t=ce(Me),r.push(t)}for(l=r.length-1,t=r[l],u.pop();l>1;)t=new $(u.pop()).finishBinaryExpression(r[l-1].value,r[l-2],t),l-=2;return t}function We(){var e,u,t,n,i;return i=dt,e=fe(Ve),ae("?")&&(W(),u=mt.allowIn,mt.allowIn=!0,t=ce($e),mt.allowIn=u,ne(":"),n=ce($e),e=new $(i).finishConditionalExpression(e,t,n),gt=yt=!1),e}function He(){return ae("{")?xu():ce($e)}function Ke(e,t){var n;switch(t.type){case ut.Identifier:bu(e,t,t.name);break;case ut.RestElement:Ke(e,t.argument);break;case ut.AssignmentPattern:Ke(e,t.left);break;case ut.ArrayPattern:for(n=0;n<t.elements.length;n++)null!==t.elements[n]&&Ke(e,t.elements[n]);break;case ut.YieldExpression:break;default:for(u(t.type===ut.ObjectPattern,"Invalid type"),n=0;n<t.properties.length;n++)Ke(e,t.properties[n].value)}}function qe(e){var u,t,n,i,r,a,s,o;switch(r=[],a=0,i=[e],e.type){case ut.Identifier:break;case tt.ArrowParameterPlaceHolder:i=e.params;break;default:return null}for(s={paramSet:{}},u=0,t=i.length;t>u;u+=1)switch(n=i[u],n.type){case ut.AssignmentPattern:i[u]=n.left,n.right.type===ut.YieldExpression&&(n.right.argument&&ue(dt),n.right.type=ut.Identifier,n.right.name="yield",delete n.right.argument,delete n.right.delegate),r.push(n.right),++a,Ke(s,n.left);break;default:Ke(s,n),i[u]=n,r.push(null)}if(at||!mt.allowYield)for(u=0,t=i.length;t>u;u+=1)n=i[u],n.type===ut.YieldExpression&&ue(dt);return s.message===nt.StrictParamDupe&&(o=at?s.stricted:s.firstRestricted,ue(o,s.message)),0===a&&(r=[]),{params:i,defaults:r,stricted:s.stricted,firstRestricted:s.firstRestricted,message:s.message}}function ze(e,u){var t,n,i;return Dt&&te(dt),ne("=>"),t=at,n=mt.allowYield,mt.allowYield=!0,i=He(),at&&e.firstRestricted&&ue(e.firstRestricted,e.message),at&&e.stricted&&te(e.stricted,e.message),at=t,mt.allowYield=n,u.finishArrowFunctionExpression(e.params,e.defaults,i,i.type!==ut.BlockStatement)}function _e(){var e,u,t,n;return e=null,u=new _,t=!1,re("yield"),Dt||(n=mt.allowYield,mt.allowYield=!1,t=ae("*"),t?(W(),e=$e()):ae(";")||ae("}")||ae(")")||dt.type===Qu.EOF||(e=$e()),mt.allowYield=n),u.finishYieldExpression(e,t)}function $e(){var e,u,t,n,i;return i=dt,e=dt,!mt.allowYield&&se("yield")?_e():(u=We(),u.type===tt.ArrowParameterPlaceHolder||ae("=>")?(gt=yt=!1,n=qe(u),n?(St=null,ze(n,new $(i))):u):(le()&&(gt||Z(nt.InvalidLHSInAssignment),at&&u.type===ut.Identifier&&(h(u.name)&&te(e,nt.StrictLHSAssignment),f(u.name)&&te(e,nt.StrictReservedWord)),ae("=")?we(u):gt=yt=!1,e=W(),t=ce($e),u=new $(i).finishAssignmentExpression(e.value,u,t),St=null),u))}function Ge(){var e,u,t=dt;if(e=ce($e),ae(",")){for(u=[e];Et>pt&&ae(",");)W(),u.push(ce($e));e=new $(t).finishSequenceExpression(u)}return e}function Xe(){if(dt.type===Qu.Keyword)switch(dt.value){case"export":return"module"!==mt.sourceType&&te(dt,nt.IllegalExportDeclaration),Vu();case"import":return"module"!==mt.sourceType&&te(dt,nt.IllegalImportDeclaration),zu();case"const":return ou({inFor:!1});case"function":return Pu(new _);case"class":return Nu()}return se("let")&&su()?ou({inFor:!1}):wu()}function Je(){for(var e=[];Et>pt&&!ae("}");)e.push(Xe());return e}function Qe(){var e,u=new _;return ne("{"),e=Je(),ne("}"),u.finishBlockStatement(e)}function Ze(e){var u,t=new _;return u=W(),u.type===Qu.Keyword&&"yield"===u.value?(at&&te(u,nt.StrictReservedWord),mt.allowYield||ue(u)):u.type!==Qu.Identifier?at&&u.type===Qu.Keyword&&f(u.value)?te(u,nt.StrictReservedWord):(at||"let"!==u.value||"var"!==e)&&ue(u):"module"===mt.sourceType&&u.type===Qu.Identifier&&"await"===u.value&&te(u),t.finishIdentifier(u.value)}function eu(e){var u,t=null,n=new _,i=[];return u=Fe(i,"var"),at&&h(u.name)&&Z(nt.StrictVarName),ae("=")?(W(),t=ce($e)):u.type===ut.Identifier||e.inFor||ne("="),n.finishVariableDeclarator(u,t)}function uu(e){var u,t;for(u={inFor:e.inFor},t=[eu(u)];ae(",");)W(),t.push(eu(u));return t}function tu(e){var u;return re("var"),u=uu({inFor:!1}),De(),e.finishVariableDeclaration(u)}function nu(e,u){var t,n=null,i=new _,r=[];return t=Fe(r,e),at&&t.type===ut.Identifier&&h(t.name)&&Z(nt.StrictVarName),"const"===e?se("in")||oe("of")||(ne("="),n=ce($e)):(!u.inFor&&t.type!==ut.Identifier||ae("="))&&(ne("="),n=ce($e)),i.finishVariableDeclarator(t,n)}function iu(e,u){for(var t=[nu(e,u)];ae(",");)W(),t.push(nu(e,u));return t}function ru(){return{index:st,lineNumber:ot,lineStart:lt,hasLineTerminator:Dt,lastIndex:ct,lastLineNumber:ft,lastLineStart:ht,startIndex:pt,startLineNumber:Ct,startLineStart:Ft,lookahead:dt,tokenCount:Bt.tokens?Bt.tokens.length:0}}function au(e){st=e.index,ot=e.lineNumber,lt=e.lineStart,Dt=e.hasLineTerminator,ct=e.lastIndex,ft=e.lastLineNumber,ht=e.lastLineStart,pt=e.startIndex,Ct=e.startLineNumber,Ft=e.startLineStart,dt=e.lookahead,Bt.tokens&&Bt.tokens.splice(e.tokenCount,Bt.tokens.length)}function su(){var e,u;return u=ru(),W(),e=dt.type===Qu.Identifier||ae("[")||ae("{")||se("let")||se("yield"),au(u),e}function ou(e){var t,n,i=new _;return t=W().value,u("let"===t||"const"===t,"Lexical declaration must be either let or const"),n=iu(t,e),De(),i.finishLexicalDeclaration(n,t)}function lu(e){var u,t=new _;return W(),ae("{")&&Q(nt.ObjectPatternAsRestParameter),e.push(dt),u=Ze(),ae("=")&&Q(nt.DefaultRestParameter),ae(")")||Q(nt.ParameterAfterRestParameter),t.finishRestElement(u)}function Du(e){return ne(";"),e.finishEmptyStatement()}function cu(e){var u=Ge();return De(),e.finishExpressionStatement(u)}function fu(e){var u,t,n;return re("if"),ne("("),u=Ge(),ne(")"),t=wu(),se("else")?(W(),n=wu()):n=null,e.finishIfStatement(u,t,n)}function hu(e){var u,t,n;return re("do"),n=mt.inIteration,mt.inIteration=!0,u=wu(),mt.inIteration=n,re("while"),ne("("),t=Ge(),ne(")"),ae(";")&&W(),e.finishDoWhileStatement(u,t)}function pu(e){var u,t,n;return re("while"),ne("("),u=Ge(),ne(")"),n=mt.inIteration,mt.inIteration=!0,t=wu(),mt.inIteration=n,e.finishWhileStatement(u,t)}function Cu(e){var u,t,n,i,r,a,s,o,l,D,c,f,h=mt.allowIn;if(u=r=a=null,t=!0,re("for"),ne("("),ae(";"))W();else if(se("var"))u=new _,W(),mt.allowIn=!1,D=uu({inFor:!0}),mt.allowIn=h,1===D.length&&se("in")?(u=u.finishVariableDeclaration(D),W(),s=u,o=Ge(),u=null):1===D.length&&null===D[0].init&&oe("of")?(u=u.finishVariableDeclaration(D),W(),s=u,o=$e(),u=null,t=!1):(u=u.finishVariableDeclaration(D),ne(";"));else if(se("const")||se("let"))u=new _,l=W().value,at||"in"!==dt.value?(mt.allowIn=!1,D=iu(l,{inFor:!0}),mt.allowIn=h,1===D.length&&null===D[0].init&&se("in")?(u=u.finishLexicalDeclaration(D,l),W(),s=u,o=Ge(),u=null):1===D.length&&null===D[0].init&&oe("of")?(u=u.finishLexicalDeclaration(D,l),W(),s=u,o=$e(),u=null,t=!1):(De(),u=u.finishLexicalDeclaration(D,l))):(u=u.finishIdentifier(l),W(),s=u,o=Ge(),u=null);else if(i=dt,mt.allowIn=!1,u=fe($e),mt.allowIn=h,se("in"))gt||Z(nt.InvalidLHSInForIn),W(),we(u),s=u,o=Ge(),u=null;else if(oe("of"))gt||Z(nt.InvalidLHSInForLoop),W(),we(u),s=u,o=$e(),u=null,t=!1;else{if(ae(",")){for(n=[u];ae(",");)W(),n.push(ce($e));u=new $(i).finishSequenceExpression(n)}ne(";")}return"undefined"==typeof s&&(ae(";")||(r=Ge()),ne(";"),ae(")")||(a=Ge())),ne(")"),f=mt.inIteration,mt.inIteration=!0,c=ce(wu),mt.inIteration=f,"undefined"==typeof s?e.finishForStatement(u,r,a,c):t?e.finishForInStatement(s,o,c):e.finishForOfStatement(s,o,c)}function Fu(e){
var u,t=null;return re("continue"),59===rt.charCodeAt(pt)?(W(),mt.inIteration||Q(nt.IllegalContinue),e.finishContinueStatement(null)):Dt?(mt.inIteration||Q(nt.IllegalContinue),e.finishContinueStatement(null)):(dt.type===Qu.Identifier&&(t=Ze(),u="$"+t.name,Object.prototype.hasOwnProperty.call(mt.labelSet,u)||Q(nt.UnknownLabel,t.name)),De(),null!==t||mt.inIteration||Q(nt.IllegalContinue),e.finishContinueStatement(t))}function Au(e){var u,t=null;return re("break"),59===rt.charCodeAt(ct)?(W(),mt.inIteration||mt.inSwitch||Q(nt.IllegalBreak),e.finishBreakStatement(null)):(Dt?mt.inIteration||mt.inSwitch||Q(nt.IllegalBreak):dt.type===Qu.Identifier&&(t=Ze(),u="$"+t.name,Object.prototype.hasOwnProperty.call(mt.labelSet,u)||Q(nt.UnknownLabel,t.name)),De(),null!==t||mt.inIteration||mt.inSwitch||Q(nt.IllegalBreak),e.finishBreakStatement(t))}function Eu(e){var u=null;return re("return"),mt.inFunctionBody||Z(nt.IllegalReturn),32===rt.charCodeAt(ct)&&l(rt.charCodeAt(ct+1))?(u=Ge(),De(),e.finishReturnStatement(u)):Dt?e.finishReturnStatement(null):(ae(";")||ae("}")||dt.type===Qu.EOF||(u=Ge()),De(),e.finishReturnStatement(u))}function du(e){var u,t;return at&&Z(nt.StrictModeWith),re("with"),ne("("),u=Ge(),ne(")"),t=wu(),e.finishWithStatement(u,t)}function mu(){var e,u,t=[],n=new _;for(se("default")?(W(),e=null):(re("case"),e=Ge()),ne(":");Et>pt&&!(ae("}")||se("default")||se("case"));)u=Xe(),t.push(u);return n.finishSwitchCase(e,t)}function Bu(e){var u,t,n,i,r;if(re("switch"),ne("("),u=Ge(),ne(")"),ne("{"),t=[],ae("}"))return W(),e.finishSwitchStatement(u,t);for(i=mt.inSwitch,mt.inSwitch=!0,r=!1;Et>pt&&!ae("}");)n=mu(),null===n.test&&(r&&Q(nt.MultipleDefaultsInSwitch),r=!0),t.push(n);return mt.inSwitch=i,ne("}"),e.finishSwitchStatement(u,t)}function yu(e){var u;return re("throw"),Dt&&Q(nt.NewlineAfterThrow),u=Ge(),De(),e.finishThrowStatement(u)}function gu(){var e,u,t,n,i=[],r={},a=new _;for(re("catch"),ne("("),ae(")")&&ue(dt),e=Fe(i),t=0;t<i.length;t++)u="$"+i[t].value,Object.prototype.hasOwnProperty.call(r,u)&&Z(nt.DuplicateBinding,i[t].value),r[u]=!0;return at&&h(e.name)&&Z(nt.StrictCatchVariable),ne(")"),n=Qe(),a.finishCatchClause(e,n)}function Su(e){var u,t=null,n=null;return re("try"),u=Qe(),se("catch")&&(t=gu()),se("finally")&&(W(),n=Qe()),t||n||Q(nt.NoCatchOrFinally),e.finishTryStatement(u,t,n)}function vu(e){return re("debugger"),De(),e.finishDebuggerStatement()}function wu(){var e,u,t,n,i=dt.type;if(i===Qu.EOF&&ue(dt),i===Qu.Punctuator&&"{"===dt.value)return Qe();if(gt=yt=!0,n=new _,i===Qu.Punctuator)switch(dt.value){case";":return Du(n);case"(":return cu(n)}else if(i===Qu.Keyword)switch(dt.value){case"break":return Au(n);case"continue":return Fu(n);case"debugger":return vu(n);case"do":return hu(n);case"for":return Cu(n);case"function":return Pu(n);case"if":return fu(n);case"return":return Eu(n);case"switch":return Bu(n);case"throw":return yu(n);case"try":return Su(n);case"var":return tu(n);case"while":return pu(n);case"with":return du(n)}return e=Ge(),e.type===ut.Identifier&&ae(":")?(W(),t="$"+e.name,Object.prototype.hasOwnProperty.call(mt.labelSet,t)&&Q(nt.Redeclaration,"Label",e.name),mt.labelSet[t]=!0,u=wu(),delete mt.labelSet[t],n.finishLabeledStatement(e,u)):(De(),n.finishExpressionStatement(e))}function xu(){var e,u,t,n,i,r,a,s,o=[],l=new _;for(ne("{");Et>pt&&dt.type===Qu.StringLiteral&&(u=dt,e=Xe(),o.push(e),e.expression.type===ut.Literal);)t=rt.slice(u.start+1,u.end-1),"use strict"===t?(at=!0,n&&te(n,nt.StrictOctalLiteral)):!n&&u.octal&&(n=u);for(i=mt.labelSet,r=mt.inIteration,a=mt.inSwitch,s=mt.inFunctionBody,mt.labelSet={},mt.inIteration=!1,mt.inSwitch=!1,mt.inFunctionBody=!0;Et>pt&&!ae("}");)o.push(Xe());return ne("}"),mt.labelSet=i,mt.inIteration=r,mt.inSwitch=a,mt.inFunctionBody=s,l.finishBlockStatement(o)}function bu(e,u,t){var n="$"+t;at?(h(t)&&(e.stricted=u,e.message=nt.StrictParamName),Object.prototype.hasOwnProperty.call(e.paramSet,n)&&(e.stricted=u,e.message=nt.StrictParamDupe)):e.firstRestricted||(h(t)?(e.firstRestricted=u,e.message=nt.StrictParamName):f(t)?(e.firstRestricted=u,e.message=nt.StrictReservedWord):Object.prototype.hasOwnProperty.call(e.paramSet,n)&&(e.stricted=u,e.message=nt.StrictParamDupe)),e.paramSet[n]=!0}function ku(e){var u,t,n,i,r=[];if(u=dt,"..."===u.value)return t=lu(r),bu(e,t.argument,t.argument.name),e.params.push(t),e.defaults.push(null),!1;for(t=Ae(r),n=0;n<r.length;n++)bu(e,r[n],r[n].value);return t.type===ut.AssignmentPattern&&(i=t.right,t=t.left,++e.defaultCount),e.params.push(t),e.defaults.push(i),!ae(")")}function Iu(e){var u;if(u={params:[],defaultCount:0,defaults:[],firstRestricted:e},ne("("),!ae(")"))for(u.paramSet={};Et>pt&&ku(u);)ne(",");return ne(")"),0===u.defaultCount&&(u.defaults=[]),{params:u.params,defaults:u.defaults,stricted:u.stricted,firstRestricted:u.firstRestricted,message:u.message}}function Pu(e,u){var t,n,i,r,a,s,o,l,D,c=null,p=[],C=[];return D=mt.allowYield,re("function"),l=ae("*"),l&&W(),u&&ae("(")||(n=dt,c=Ze(),at?h(n.value)&&te(n,nt.StrictFunctionName):h(n.value)?(a=n,s=nt.StrictFunctionName):f(n.value)&&(a=n,s=nt.StrictReservedWord)),mt.allowYield=!l,r=Iu(a),p=r.params,C=r.defaults,i=r.stricted,a=r.firstRestricted,r.message&&(s=r.message),o=at,t=xu(),at&&a&&ue(a,s),at&&i&&te(i,s),at=o,mt.allowYield=D,e.finishFunctionDeclaration(c,p,C,t,l)}function Lu(){var e,u,t,n,i,r,a,s,o,l=null,D=[],c=[],p=new _;return o=mt.allowYield,re("function"),s=ae("*"),s&&W(),mt.allowYield=!s,ae("(")||(e=dt,l=at||s||!se("yield")?Ze():Le(),at?h(e.value)&&te(e,nt.StrictFunctionName):h(e.value)?(t=e,n=nt.StrictFunctionName):f(e.value)&&(t=e,n=nt.StrictReservedWord)),i=Iu(t),D=i.params,c=i.defaults,u=i.stricted,t=i.firstRestricted,i.message&&(n=i.message),a=at,r=xu(),at&&t&&ue(t,n),at&&u&&te(u,n),at=a,mt.allowYield=o,p.finishFunctionExpression(l,D,c,r,s)}function Tu(){var e,u,t,n,i,r,a,s=!1;for(e=new _,ne("{"),n=[];!ae("}");)ae(";")?W():(i=new _,u=dt,t=!1,r=ae("["),ae("*")?W():(a=Be(),"static"===a.name&&(ye()||ae("*"))&&(u=dt,t=!0,r=ae("["),ae("*")?W():a=Be())),i=ge(u,a,r,i),i?(i["static"]=t,"init"===i.kind&&(i.kind="method"),t?i.computed||"prototype"!==(i.key.name||i.key.value.toString())||ue(u,nt.StaticPrototype):i.computed||"constructor"!==(i.key.name||i.key.value.toString())||(("method"!==i.kind||!i.method||i.value.generator)&&ue(u,nt.ConstructorSpecialMethod),s?ue(u,nt.DuplicateConstructor):s=!0,i.kind="constructor"),i.type=ut.MethodDefinition,delete i.method,delete i.shorthand,n.push(i)):ue(dt));return W(),e.finishClassBody(n)}function Nu(e){var u,t=null,n=null,i=new _,r=at;return at=!0,re("class"),e&&dt.type!==Qu.Identifier||(t=Ze()),se("extends")&&(W(),n=ce(Re)),u=Tu(),at=r,i.finishClassDeclaration(t,n,u)}function Ou(){var e,u=null,t=null,n=new _,i=at;return at=!0,re("class"),dt.type===Qu.Identifier&&(u=Ze()),se("extends")&&(W(),t=ce(Re)),e=Tu(),at=i,n.finishClassExpression(u,t,e)}function Ru(){var e=new _;return dt.type!==Qu.StringLiteral&&Q(nt.InvalidModuleSpecifier),e.finishLiteral(W())}function Uu(){var e,u,t,n=new _;return se("default")?(t=new _,W(),u=t.finishIdentifier("default")):u=Ze(),oe("as")&&(W(),e=Le()),n.finishExportSpecifier(u,e)}function Yu(e){var u,t=null,n=null,i=[];if(dt.type===Qu.Keyword)switch(dt.value){case"let":case"const":return t=ou({inFor:!1}),e.finishExportNamedDeclaration(t,i,null);case"var":case"class":case"function":return t=Xe(),e.finishExportNamedDeclaration(t,i,null)}for(ne("{");!ae("}")&&(u=u||se("default"),i.push(Uu()),ae("}")||(ne(","),!ae("}"))););return ne("}"),oe("from")?(W(),n=Ru(),De()):u?Q(dt.value?nt.UnexpectedToken:nt.MissingFromClause,dt.value):De(),e.finishExportNamedDeclaration(t,i,n)}function Mu(e){var u=null,t=null;return re("default"),se("function")?(u=Pu(new _,!0),e.finishExportDefaultDeclaration(u)):se("class")?(u=Nu(!0),e.finishExportDefaultDeclaration(u)):(oe("from")&&Q(nt.UnexpectedToken,dt.value),t=ae("{")?ve():ae("[")?Ee():$e(),De(),e.finishExportDefaultDeclaration(t))}function ju(e){var u;return ne("*"),oe("from")||Q(dt.value?nt.UnexpectedToken:nt.MissingFromClause,dt.value),W(),u=Ru(),De(),e.finishExportAllDeclaration(u)}function Vu(){var e=new _;return mt.inFunctionBody&&Q(nt.IllegalExportDeclaration),re("export"),se("default")?Mu(e):ae("*")?ju(e):Yu(e)}function Wu(){var e,u,t=new _;return u=Le(),oe("as")&&(W(),e=Ze()),t.finishImportSpecifier(e,u)}function Hu(){var e=[];for(ne("{");!ae("}")&&(e.push(Wu()),ae("}")||(ne(","),!ae("}"))););return ne("}"),e}function Ku(){var e,u=new _;return e=Le(),u.finishImportDefaultSpecifier(e)}function qu(){var e,u=new _;return ne("*"),oe("as")||Q(nt.NoAsAfterImportNamespace),W(),e=Le(),u.finishImportNamespaceSpecifier(e)}function zu(){var e,u=[],t=new _;return mt.inFunctionBody&&Q(nt.IllegalImportDeclaration),re("import"),dt.type===Qu.StringLiteral?e=Ru():(ae("{")?u=u.concat(Hu()):ae("*")?u.push(qu()):Y(dt)&&!se("default")?(u.push(Ku()),ae(",")&&(W(),ae("*")?u.push(qu()):ae("{")?u=u.concat(Hu()):ue(dt))):ue(W()),oe("from")||Q(dt.value?nt.UnexpectedToken:nt.MissingFromClause,dt.value),W(),e=Ru()),De(),t.finishImportDeclaration(u,e)}function _u(){for(var e,u,t,n,i=[];Et>pt&&(u=dt,u.type===Qu.StringLiteral)&&(e=Xe(),i.push(e),e.expression.type===ut.Literal);)t=rt.slice(u.start+1,u.end-1),"use strict"===t?(at=!0,n&&te(n,nt.StrictOctalLiteral)):!n&&u.octal&&(n=u);for(;Et>pt&&(e=Xe(),"undefined"!=typeof e);)i.push(e);return i}function $u(){var e,u;return H(),u=new _,e=_u(),u.finishProgram(e,mt.sourceType)}function Gu(){var e,u,t,n=[];for(e=0;e<Bt.tokens.length;++e)u=Bt.tokens[e],t={type:u.type,value:u.value},u.regex&&(t.regex={pattern:u.regex.pattern,flags:u.regex.flags}),Bt.range&&(t.range=u.range),Bt.loc&&(t.loc=u.loc),n.push(t);Bt.tokens=n}function Xu(e,u,t){var n,i;n=String,"string"==typeof e||e instanceof String||(e=n(e)),rt=e,st=0,ot=rt.length>0?1:0,lt=0,pt=st,Ct=ot,Ft=lt,Et=rt.length,dt=null,mt={allowIn:!0,allowYield:!0,labelSet:{},inFunctionBody:!1,inIteration:!1,inSwitch:!1,lastCommentStart:-1,curlyStack:[]},Bt={},u=u||{},u.tokens=!0,Bt.tokens=[],Bt.tokenValues=[],Bt.tokenize=!0,Bt.delegate=t,Bt.openParenToken=-1,Bt.openCurlyToken=-1,Bt.range="boolean"==typeof u.range&&u.range,Bt.loc="boolean"==typeof u.loc&&u.loc,"boolean"==typeof u.comment&&u.comment&&(Bt.comments=[]),"boolean"==typeof u.tolerant&&u.tolerant&&(Bt.errors=[]);try{if(H(),dt.type===Qu.EOF)return Bt.tokens;for(W();dt.type!==Qu.EOF;)try{W()}catch(r){if(Bt.errors){G(r);break}throw r}i=Bt.tokens,"undefined"!=typeof Bt.errors&&(i.errors=Bt.errors)}catch(a){throw a}finally{Bt={}}return i}function Ju(e,u){var t,n;n=String,"string"==typeof e||e instanceof String||(e=n(e)),rt=e,st=0,ot=rt.length>0?1:0,lt=0,pt=st,Ct=ot,Ft=lt,Et=rt.length,dt=null,mt={allowIn:!0,allowYield:!0,labelSet:{},inFunctionBody:!1,inIteration:!1,inSwitch:!1,lastCommentStart:-1,curlyStack:[],sourceType:"script"},at=!1,Bt={},"undefined"!=typeof u&&(Bt.range="boolean"==typeof u.range&&u.range,Bt.loc="boolean"==typeof u.loc&&u.loc,Bt.attachComment="boolean"==typeof u.attachComment&&u.attachComment,Bt.loc&&null!==u.source&&void 0!==u.source&&(Bt.source=n(u.source)),"boolean"==typeof u.tokens&&u.tokens&&(Bt.tokens=[]),"boolean"==typeof u.comment&&u.comment&&(Bt.comments=[]),"boolean"==typeof u.tolerant&&u.tolerant&&(Bt.errors=[]),Bt.attachComment&&(Bt.range=!0,Bt.comments=[],Bt.bottomRightStack=[],Bt.trailingComments=[],Bt.leadingComments=[]),"module"===u.sourceType&&(mt.sourceType=u.sourceType,at=!0));try{t=$u(),"undefined"!=typeof Bt.comments&&(t.comments=Bt.comments),"undefined"!=typeof Bt.tokens&&(Gu(),t.tokens=Bt.tokens),"undefined"!=typeof Bt.errors&&(t.errors=Bt.errors)}catch(i){throw i}finally{Bt={}}return t}var Qu,Zu,et,ut,tt,nt,it,rt,at,st,ot,lt,Dt,ct,ft,ht,pt,Ct,Ft,At,Et,dt,mt,Bt,yt,gt,St;Qu={BooleanLiteral:1,EOF:2,Identifier:3,Keyword:4,NullLiteral:5,NumericLiteral:6,Punctuator:7,StringLiteral:8,RegularExpression:9,Template:10},Zu={},Zu[Qu.BooleanLiteral]="Boolean",Zu[Qu.EOF]="<end>",Zu[Qu.Identifier]="Identifier",Zu[Qu.Keyword]="Keyword",Zu[Qu.NullLiteral]="Null",Zu[Qu.NumericLiteral]="Numeric",Zu[Qu.Punctuator]="Punctuator",Zu[Qu.StringLiteral]="String",Zu[Qu.RegularExpression]="RegularExpression",Zu[Qu.Template]="Template",et=["(","{","[","in","typeof","instanceof","new","return","case","delete","throw","void","=","+=","-=","*=","/=","%=","<<=",">>=",">>>=","&=","|=","^=",",","+","-","*","/","%","++","--","<<",">>",">>>","&","|","^","!","~","&&","||","?",":","===","==",">=","<=","<",">","!=","!=="],ut={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DoWhileStatement:"DoWhileStatement",DebuggerStatement:"DebuggerStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForOfStatement:"ForOfStatement",ForInStatement:"ForInStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",Program:"Program",Property:"Property",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchCase:"SwitchCase",SwitchStatement:"SwitchStatement",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"},tt={ArrowParameterPlaceHolder:"ArrowParameterPlaceHolder"},nt={UnexpectedToken:"Unexpected token %0",UnexpectedNumber:"Unexpected number",UnexpectedString:"Unexpected string",UnexpectedIdentifier:"Unexpected identifier",UnexpectedReserved:"Unexpected reserved word",UnexpectedTemplate:"Unexpected quasi %0",UnexpectedEOS:"Unexpected end of input",NewlineAfterThrow:"Illegal newline after throw",InvalidRegExp:"Invalid regular expression",UnterminatedRegExp:"Invalid regular expression: missing /",InvalidLHSInAssignment:"Invalid left-hand side in assignment",InvalidLHSInForIn:"Invalid left-hand side in for-in",InvalidLHSInForLoop:"Invalid left-hand side in for-loop",MultipleDefaultsInSwitch:"More than one default clause in switch statement",NoCatchOrFinally:"Missing catch or finally after try",UnknownLabel:"Undefined label '%0'",Redeclaration:"%0 '%1' has already been declared",IllegalContinue:"Illegal continue statement",IllegalBreak:"Illegal break statement",IllegalReturn:"Illegal return statement",StrictModeWith:"Strict mode code may not include a with statement",StrictCatchVariable:"Catch variable may not be eval or arguments in strict mode",StrictVarName:"Variable name may not be eval or arguments in strict mode",StrictParamName:"Parameter name eval or arguments is not allowed in strict mode",StrictParamDupe:"Strict mode function may not have duplicate parameter names",StrictFunctionName:"Function name may not be eval or arguments in strict mode",StrictOctalLiteral:"Octal literals are not allowed in strict mode.",StrictDelete:"Delete of an unqualified identifier in strict mode.",StrictLHSAssignment:"Assignment to eval or arguments is not allowed in strict mode",StrictLHSPostfix:"Postfix increment/decrement may not have eval or arguments operand in strict mode",StrictLHSPrefix:"Prefix increment/decrement may not have eval or arguments operand in strict mode",StrictReservedWord:"Use of future reserved word in strict mode",TemplateOctalLiteral:"Octal literals are not allowed in template strings.",ParameterAfterRestParameter:"Rest parameter must be last formal parameter",DefaultRestParameter:"Unexpected token =",ObjectPatternAsRestParameter:"Unexpected token {",DuplicateProtoProperty:"Duplicate __proto__ fields are not allowed in object literals",ConstructorSpecialMethod:"Class constructor may not be an accessor",DuplicateConstructor:"A class may only have one constructor",StaticPrototype:"Classes may not have static property named prototype",MissingFromClause:"Unexpected token",NoAsAfterImportNamespace:"Unexpected token",InvalidModuleSpecifier:"Unexpected token",IllegalImportDeclaration:"Unexpected token",IllegalExportDeclaration:"Unexpected token",DuplicateBinding:"Duplicate binding %0"},it={NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,NonAsciiIdentifierPart:/[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/},$.prototype=_.prototype={processComment:function(){var e,u,t,n,i,r,a=Bt.bottomRightStack,s=a[a.length-1];if(!(this.type===ut.Program&&this.body.length>0)){if(this.type===ut.BlockStatement&&0===this.body.length){for(u=[],i=Bt.leadingComments.length-1;i>=0;--i)r=Bt.leadingComments[i],this.range[1]>=r.range[1]&&(u.unshift(r),Bt.leadingComments.splice(i,1),Bt.trailingComments.splice(i,1));if(u.length)return void(this.innerComments=u)}if(Bt.trailingComments.length>0){for(n=[],i=Bt.trailingComments.length-1;i>=0;--i)r=Bt.trailingComments[i],
r.range[0]>=this.range[1]&&(n.unshift(r),Bt.trailingComments.splice(i,1));Bt.trailingComments=[]}else s&&s.trailingComments&&s.trailingComments[0].range[0]>=this.range[1]&&(n=s.trailingComments,delete s.trailingComments);for(;s&&s.range[0]>=this.range[0];)e=a.pop(),s=a[a.length-1];if(e){if(e.leadingComments){for(t=[],i=e.leadingComments.length-1;i>=0;--i)r=e.leadingComments[i],r.range[1]<=this.range[0]&&(t.unshift(r),e.leadingComments.splice(i,1));e.leadingComments.length||(e.leadingComments=void 0)}}else if(Bt.leadingComments.length>0)for(t=[],i=Bt.leadingComments.length-1;i>=0;--i)r=Bt.leadingComments[i],r.range[1]<=this.range[0]&&(t.unshift(r),Bt.leadingComments.splice(i,1));t&&t.length>0&&(this.leadingComments=t),n&&n.length>0&&(this.trailingComments=n),a.push(this)}},finish:function(){Bt.range&&(this.range[1]=ct),Bt.loc&&(this.loc.end={line:ft,column:ct-ht},Bt.source&&(this.loc.source=Bt.source)),Bt.attachComment&&this.processComment()},finishArrayExpression:function(e){return this.type=ut.ArrayExpression,this.elements=e,this.finish(),this},finishArrayPattern:function(e){return this.type=ut.ArrayPattern,this.elements=e,this.finish(),this},finishArrowFunctionExpression:function(e,u,t,n){return this.type=ut.ArrowFunctionExpression,this.id=null,this.params=e,this.defaults=u,this.body=t,this.generator=!1,this.expression=n,this.finish(),this},finishAssignmentExpression:function(e,u,t){return this.type=ut.AssignmentExpression,this.operator=e,this.left=u,this.right=t,this.finish(),this},finishAssignmentPattern:function(e,u){return this.type=ut.AssignmentPattern,this.left=e,this.right=u,this.finish(),this},finishBinaryExpression:function(e,u,t){return this.type="||"===e||"&&"===e?ut.LogicalExpression:ut.BinaryExpression,this.operator=e,this.left=u,this.right=t,this.finish(),this},finishBlockStatement:function(e){return this.type=ut.BlockStatement,this.body=e,this.finish(),this},finishBreakStatement:function(e){return this.type=ut.BreakStatement,this.label=e,this.finish(),this},finishCallExpression:function(e,u){return this.type=ut.CallExpression,this.callee=e,this.arguments=u,this.finish(),this},finishCatchClause:function(e,u){return this.type=ut.CatchClause,this.param=e,this.body=u,this.finish(),this},finishClassBody:function(e){return this.type=ut.ClassBody,this.body=e,this.finish(),this},finishClassDeclaration:function(e,u,t){return this.type=ut.ClassDeclaration,this.id=e,this.superClass=u,this.body=t,this.finish(),this},finishClassExpression:function(e,u,t){return this.type=ut.ClassExpression,this.id=e,this.superClass=u,this.body=t,this.finish(),this},finishConditionalExpression:function(e,u,t){return this.type=ut.ConditionalExpression,this.test=e,this.consequent=u,this.alternate=t,this.finish(),this},finishContinueStatement:function(e){return this.type=ut.ContinueStatement,this.label=e,this.finish(),this},finishDebuggerStatement:function(){return this.type=ut.DebuggerStatement,this.finish(),this},finishDoWhileStatement:function(e,u){return this.type=ut.DoWhileStatement,this.body=e,this.test=u,this.finish(),this},finishEmptyStatement:function(){return this.type=ut.EmptyStatement,this.finish(),this},finishExpressionStatement:function(e){return this.type=ut.ExpressionStatement,this.expression=e,this.finish(),this},finishForStatement:function(e,u,t,n){return this.type=ut.ForStatement,this.init=e,this.test=u,this.update=t,this.body=n,this.finish(),this},finishForOfStatement:function(e,u,t){return this.type=ut.ForOfStatement,this.left=e,this.right=u,this.body=t,this.finish(),this},finishForInStatement:function(e,u,t){return this.type=ut.ForInStatement,this.left=e,this.right=u,this.body=t,this.each=!1,this.finish(),this},finishFunctionDeclaration:function(e,u,t,n,i){return this.type=ut.FunctionDeclaration,this.id=e,this.params=u,this.defaults=t,this.body=n,this.generator=i,this.expression=!1,this.finish(),this},finishFunctionExpression:function(e,u,t,n,i){return this.type=ut.FunctionExpression,this.id=e,this.params=u,this.defaults=t,this.body=n,this.generator=i,this.expression=!1,this.finish(),this},finishIdentifier:function(e){return this.type=ut.Identifier,this.name=e,this.finish(),this},finishIfStatement:function(e,u,t){return this.type=ut.IfStatement,this.test=e,this.consequent=u,this.alternate=t,this.finish(),this},finishLabeledStatement:function(e,u){return this.type=ut.LabeledStatement,this.label=e,this.body=u,this.finish(),this},finishLiteral:function(e){return this.type=ut.Literal,this.value=e.value,this.raw=rt.slice(e.start,e.end),e.regex&&(this.regex=e.regex),this.finish(),this},finishMemberExpression:function(e,u,t){return this.type=ut.MemberExpression,this.computed="["===e,this.object=u,this.property=t,this.finish(),this},finishMetaProperty:function(e,u){return this.type=ut.MetaProperty,this.meta=e,this.property=u,this.finish(),this},finishNewExpression:function(e,u){return this.type=ut.NewExpression,this.callee=e,this.arguments=u,this.finish(),this},finishObjectExpression:function(e){return this.type=ut.ObjectExpression,this.properties=e,this.finish(),this},finishObjectPattern:function(e){return this.type=ut.ObjectPattern,this.properties=e,this.finish(),this},finishPostfixExpression:function(e,u){return this.type=ut.UpdateExpression,this.operator=e,this.argument=u,this.prefix=!1,this.finish(),this},finishProgram:function(e,u){return this.type=ut.Program,this.body=e,this.sourceType=u,this.finish(),this},finishProperty:function(e,u,t,n,i,r){return this.type=ut.Property,this.key=u,this.computed=t,this.value=n,this.kind=e,this.method=i,this.shorthand=r,this.finish(),this},finishRestElement:function(e){return this.type=ut.RestElement,this.argument=e,this.finish(),this},finishReturnStatement:function(e){return this.type=ut.ReturnStatement,this.argument=e,this.finish(),this},finishSequenceExpression:function(e){return this.type=ut.SequenceExpression,this.expressions=e,this.finish(),this},finishSpreadElement:function(e){return this.type=ut.SpreadElement,this.argument=e,this.finish(),this},finishSwitchCase:function(e,u){return this.type=ut.SwitchCase,this.test=e,this.consequent=u,this.finish(),this},finishSuper:function(){return this.type=ut.Super,this.finish(),this},finishSwitchStatement:function(e,u){return this.type=ut.SwitchStatement,this.discriminant=e,this.cases=u,this.finish(),this},finishTaggedTemplateExpression:function(e,u){return this.type=ut.TaggedTemplateExpression,this.tag=e,this.quasi=u,this.finish(),this},finishTemplateElement:function(e,u){return this.type=ut.TemplateElement,this.value=e,this.tail=u,this.finish(),this},finishTemplateLiteral:function(e,u){return this.type=ut.TemplateLiteral,this.quasis=e,this.expressions=u,this.finish(),this},finishThisExpression:function(){return this.type=ut.ThisExpression,this.finish(),this},finishThrowStatement:function(e){return this.type=ut.ThrowStatement,this.argument=e,this.finish(),this},finishTryStatement:function(e,u,t){return this.type=ut.TryStatement,this.block=e,this.guardedHandlers=[],this.handlers=u?[u]:[],this.handler=u,this.finalizer=t,this.finish(),this},finishUnaryExpression:function(e,u){return this.type="++"===e||"--"===e?ut.UpdateExpression:ut.UnaryExpression,this.operator=e,this.argument=u,this.prefix=!0,this.finish(),this},finishVariableDeclaration:function(e){return this.type=ut.VariableDeclaration,this.declarations=e,this.kind="var",this.finish(),this},finishLexicalDeclaration:function(e,u){return this.type=ut.VariableDeclaration,this.declarations=e,this.kind=u,this.finish(),this},finishVariableDeclarator:function(e,u){return this.type=ut.VariableDeclarator,this.id=e,this.init=u,this.finish(),this},finishWhileStatement:function(e,u){return this.type=ut.WhileStatement,this.test=e,this.body=u,this.finish(),this},finishWithStatement:function(e,u){return this.type=ut.WithStatement,this.object=e,this.body=u,this.finish(),this},finishExportSpecifier:function(e,u){return this.type=ut.ExportSpecifier,this.exported=u||e,this.local=e,this.finish(),this},finishImportDefaultSpecifier:function(e){return this.type=ut.ImportDefaultSpecifier,this.local=e,this.finish(),this},finishImportNamespaceSpecifier:function(e){return this.type=ut.ImportNamespaceSpecifier,this.local=e,this.finish(),this},finishExportNamedDeclaration:function(e,u,t){return this.type=ut.ExportNamedDeclaration,this.declaration=e,this.specifiers=u,this.source=t,this.finish(),this},finishExportDefaultDeclaration:function(e){return this.type=ut.ExportDefaultDeclaration,this.declaration=e,this.finish(),this},finishExportAllDeclaration:function(e){return this.type=ut.ExportAllDeclaration,this.source=e,this.finish(),this},finishImportSpecifier:function(e,u){return this.type=ut.ImportSpecifier,this.local=e||u,this.imported=u,this.finish(),this},finishImportDeclaration:function(e,u){return this.type=ut.ImportDeclaration,this.specifiers=e,this.source=u,this.finish(),this},finishYieldExpression:function(e,u){return this.type=ut.YieldExpression,this.argument=e,this.delegate=u,this.finish(),this}},e.version="2.7.2",e.tokenize=Xu,e.parse=Ju,e.Syntax=function(){var e,u={};"function"==typeof Object.create&&(u=Object.create(null));for(e in ut)ut.hasOwnProperty(e)&&(u[e]=ut[e]);return"function"==typeof Object.freeze&&Object.freeze(u),u}()})});
$rmod.main("/char-props@0.1.5","lib/charProps");
$rmod.dep("/$/marko","char-props","0.1.5");
$rmod.def("/char-props@0.1.5/lib/charProps",function(n,t,r,i,e){function o(n){this.input=n;for(var t,r,i=n.split("\n"),e=0,o=i.length,u=0,a={length:o};o>e;e++)t=i[e],r=u+t.length+1,a[e]={start:u,end:r},u=r;this.lineMap=a}function u(n){var t=new o(n);return t}o.prototype={lineAt:function(n,t){t=t||{};for(var r,i=this.lineMap,e=t.minLine||0,o=i.length;o>e&&(r=i[e],!(n<r.end));e++);return e},columnAt:function(n){var t,r=this.input,i=n-1;if(0>n)return 0;for(;i>=0&&(t=r.charAt(i),"\n"!==t);i--);var e=n-i-1;return e},indexAt:function(n){var t=n.line,r=n.column,i=this.lineMap,e=i[t],o=e.start,u=o+r;return u},charAt:function(n){var t=this.indexAt(n),r=this.input,i=r.charAt(t);return i}},u.Indexer=o,r.exports=u});
$rmod.def("/raptor-util@1.0.10/forEachEntry",function(r,o,n,t,a){n.exports=function(r,o,n){for(var t in r)r.hasOwnProperty(t)&&o.call(n,t,r[t])}});
$rmod.main("/property-handlers@1.0.1","lib/index");
$rmod.dep("/$/marko","property-handlers","1.0.1");
$rmod.def("/property-handlers@1.0.1/lib/index",function(r,e,o,n,t){function i(r){return r.replace(/-([a-z])/g,function(r,e){return e.toUpperCase()})}o.exports=function(r,e,o){function n(r,e){if(e){if(e.__propertyHandlers)throw e;r+=". Cause: "+(e.stack||e)}t&&(r="Error while handling properties for "+t+": "+r);var o=new Error(r);throw o.__propertyHandlers=!0,o}var t;null!=o&&(t="string"==typeof o?o:o.path),r||n('"config" argument is required'),"object"!=typeof r&&n("object expected");for(var p in r)if(r.hasOwnProperty(p)){var a=r[p],l=i(p),c=e[l],f=!1;c||(c=e["*"],f=!0),c||n('Invalid option of "'+l+'". Allowed: '+Object.keys(e).join(", "));try{f?c.call(e,p,a)===!1&&n("Invalid option: "+p):c.call(e,a)}catch(d){n('Error while applying option of "'+p+'"',d)}}if(e._end)try{e._end()}catch(d){n("Error after applying properties",d)}}});
$rmod.main("/try-require@1.2.1","index");
$rmod.dep("/$/marko","try-require","1.2.1");
$rmod.def("/try-require@1.2.1/index",function(r,t,e,n,u){"use strict";var o=null,l=function(t,e){var n,u=e||r;try{n=u.resolve(t),o=null}catch(l){o=l}return n?u(n):void 0},c=function(t,e){var n,u=e||r;try{n=u.resolve(t),o=null}catch(l){o=l}return n};l.resolve=c,l.lastError=function(){return o},e.exports=l});
$rmod.main("/raptor-util@1.0.10","raptor-util");
$rmod.def("/raptor-util@1.0.10/tryRequire",function(r,t,e,o,i){e.exports=function(r,t){var e;try{e=t.resolve(r)}catch(o){}return e?t(e):void 0}});
$rmod.def("/raptor-util@1.0.10/makeClass",function(t,e,r,o,n){var i=t("./inherit");r.exports=function(t){var e;if("function"==typeof t)e=t.$super;else{var r=t;t=r.$init||function(){},e=r.$super,delete r.$super,delete r.$init,t.prototype=r}e&&i(t,e);var o=t.prototype;return o.constructor=t,t}});
$rmod.def("/raptor-util@1.0.10/makeEnum",function(n,t,r,o,e){var a=n("./makeClass"),i=n("./extend"),u=n("./forEachEntry");r.exports=function(n,t){function r(n,r){var o=c++;return i(t[n]=new r,{ordinal:o,compareTo:function(n){return o-n.ordinal},name:n})}function o(){}t=t?a(t):function(){};var e=t.prototype,c=0;return Array.isArray(n)?n.forEach(function(n){r(n,t)}):n&&(o.prototype=e,u(n,function(n,e){t.apply(r(n,o),e||[])})),t.valueOf=function(n){return t[n]},e.toString==Object.prototype.toString&&(e.toString=function(){return this.name}),t}});
$rmod.def("/raptor-util@1.0.10/forEach",function(o,r,f,c,n){f.exports=function(o,r,f){null!=o&&(o.forEach?o:[o]).forEach(r,f)}});
$rmod.def("/raptor-util@1.0.10/attrs",function(r,t,a,n,o){var e=r("./attr");a.exports=function(r){var t="";for(var a in r)r.hasOwnProperty(a)&&(t+=e(a,r[a]));return t}});
$rmod.def("/raptor-util@1.0.10/toArray",function(r,t,l,n,i){var o=[].slice;l.exports=function(r){return null==r||Array.isArray(r)?r:"string"==typeof r?r.split(""):r.length?o.call(r,0):[r]}});
$rmod.def("/raptor-util@1.0.10/raptor-util",function(r,t,e,a,m){e.exports={tryRequire:r("./tryRequire"),inherit:r("./inherit"),makeClass:r("./makeClass"),makeEnum:r("./makeEnum"),extend:r("./extend"),forEachEntry:r("./forEachEntry"),forEach:r("./forEach"),createError:r("./createError"),arrayFromArguments:r("./arrayFromArguments"),escapeXml:r("./escapeXml"),escapeXmlAttr:r("./escapeXml").attr,attr:r("./attr"),attrs:r("./attrs"),isObjectEmpty:r("./isObjectEmpty"),toArray:r("./toArray")}});
$rmod.main("/raptor-regexp@1.0.1","lib/raptor-regexp");
$rmod.dep("/$/marko","raptor-regexp","1.0.1");
$rmod.def("/raptor-regexp@1.0.1/lib/raptor-regexp",function(e,r,n,p,t){var a={"*":".*?","?":".?"};n.exports={escape:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},simple:function(e){var r=this;return new RegExp("^"+e.replace(/[\*\?]|[^\*\?]*/g,function(e){return a[e]||r.escape(e)})+"$")}}});
$rmod.def("/marko@3.0.0/taglibs/core/marko",{"<assign>":{"code-generator":"./assign-tag"},"<else>":{"node-factory":"./else-tag"},"<else-if>":{"node-factory":"./else-if-tag"},"<for>":{"code-generator":"./for-tag"},"<if>":{"node-factory":"./if-tag"},"<include>":{"code-generator":"./include-tag"},"<include-text>":{"code-generator":"./include-text-tag"},"<invoke>":{"code-generator":"./invoke-tag"},"<macro>":{"code-generator":"./macro-tag"},"<macro-body>":{"code-generator":"./macro-body-tag"},"<pre>":{"preserve-whitespace":!0},"<script>":{"preserve-whitespace":!0,"@marko-init":"boolean","@*":{ignore:!0}},"<style>":{"preserve-whitespace":!0},"<textarea>":{"preserve-whitespace":!0},"<unless>":{"node-factory":"./unless-tag"},"<var>":{"node-factory":"./var-tag"},"<while>":{"code-generator":"./while-tag"},"<*>":{"@if":"argument","@else-if":"argument","@else":"argument","@for":"argument","@while":"argument",transformer:{path:"./core-transformer",priority:0}}});
$rmod.def("/marko@3.0.0/taglibs/layout/marko",{"<layout-use>":{"@__template":"template","@__data":"template","@*":{"remove-dashes":!0,type:"string"},renderer:"./use-tag","body-function":"getContent(__layoutHelper)",transformer:"./use-tag-transformer.js"},"<layout-put>":{"@into":"string","@value":"string",renderer:"./put-tag","import-var":{layout:"__layoutHelper"}},"<layout-placeholder>":{"@name":"string",renderer:"./placeholder-tag","import-var":{content:"data.layoutContent"}}});
$rmod.def("/marko@3.0.0/taglibs/html/marko",{"taglib-id":"marko-html","<html-comment>":{renderer:"./html-comment-tag.js"}});
$rmod.def("/marko@3.0.0/taglibs/async/marko",{"<async-fragment>":{renderer:"./async-fragment-tag","@data-provider":"expression","@arg":{type:"expression","preserve-name":!0},"@arg-*":{pattern:!0,type:"string","preserve-name":!0},"@var":"identifier","@method":"string","@timeout":"integer","@timeout-message":"string","@error-message":"string","@placeholder":"string","@renderTimeout":"function","@renderError":"function","@renderPlaceholder":"function","@name":{type:"string",description:"Name of async fragment"},"@_name":"string","@client-reorder":{type:"boolean",description:"Use JavaScript on client to move async fragment into the proper place."},"@scope":{type:"expression",description:"The value of 'this' when invoking the data provider function (N/A with promises)"},"@show-after":{type:"string"},vars:[{"name-from-attribute":"var"}],transformer:"./async-fragment-tag-transformer"},"<async-fragments>":{renderer:"./async-fragments-tag"},"<async-fragment-placeholder>":{transformer:"./async-fragment-nested-tag-transformer"},"<async-fragment-timeout>":{transformer:"./async-fragment-nested-tag-transformer"},"<async-fragment-error>":{transformer:"./async-fragment-nested-tag-transformer"}});
$rmod.def("/marko@3.0.0/taglibs/cache/default-cache-manager",function(n,r,e,t,u){function a(){var n={};return{get:function(r,e,t){var u=n[r];if(void 0!==u)return t(null,u);var a=e.builder;a(function(e,u){return e?t(e):(void 0===u&&(u=null),n[r]=u,void t(null,u))})}}}var i={},o={getCache:function(n){return i[n]||(i[n]=a())}};e.exports=o});
$rmod.def("/marko@3.0.0/taglibs/cache/cached-fragment-tag-transformer",function(a,e,t,r,c){var n=a.resolve("./default-cache-manager");t.exports=function(a,e){if(!a.hasAttribute("cache-manager")){var t=e.getRequirePath(n),r=e.importModule("__defaultCacheManager",t);a.setAttributeValue("cache-manager",r)}}});
$rmod.def("/marko@3.0.0/taglibs/cache/cached-fragment-tag",function(e,r,c,n,a){"use strict";c.exports={render:function(e,r){var c=e.cacheKey;if(!c)throw new Error("cache-key is required for <cached-fragment>");var n=e.cacheManager,a=n.getCache(e.cacheName||"marko/cached-fragment"),t=r.beginAsync();a.get(c,{builder:function(c){var n=r.captureString(function(){e.renderBody&&e.renderBody(r)});c(null,n)}},function(e,r){return e?t.error(e):void t.end(r)})}}});
$rmod.def("/marko@3.0.0/taglibs/cache/marko",{"<cached-fragment>":{renderer:"./cached-fragment-tag","@cache-key":"string","@cache-name":"string","@cache-manager":"string",transformer:"./cached-fragment-tag-transformer.js"}});
$rmod.def("/marko-prettyprint@1.0.3/src/index", function(require, exports, module, __filename, __dirname) { 'use strict';

const SYNTAX_CONCISE = 1;
const SYNTAX_HTML = 2;

var markoCompiler = require('/$/marko/compiler'/*'marko/compiler'*/);

function rtrim(s) {
    return s && s.replace(/\s\s*$/,'');
}

function trimLinesStart(lines) {
    var firstNonEmptyLine = -1;
    for (var i=0; i<lines.length; i++) {
        if (lines[i].trim()) {
            firstNonEmptyLine = i;
            break;
        }
    }

    if (firstNonEmptyLine > 0) {
        lines = lines.slice(firstNonEmptyLine);
    }

    return lines;
}

function trimLinesEnd(lines) {
    var firstNonEmptyLine = -1;
    for (var i=lines.length-1; i>=0; i--) {
        if (lines[i].trim()) {
            firstNonEmptyLine = i;
            break;
        }
    }

    if (firstNonEmptyLine < lines.length-1) {
        lines = lines.slice(0, firstNonEmptyLine + 1);
    }

    return lines;
}

function getBodyText(el) {
    var children = el.body.items;
    var text = '';
    for (var i=0; i<children.length; i++) {
        let child = children[i];
        if (child.type !== 'Text') {
            return null;
        }
        text += child.argument.value;
    }
    return text;
}

function hasLineBreaks(str) {
    return /\n/.test(str);
}

module.exports = function prettyPrint(ast, options) {
    options = options || {};

    if (typeof ast === 'string') {
        var filename = options.filename;
        if (!filename) {
            throw new Error('The "filename" option is required when String source is provided');
        }
        ast = markoCompiler.parseRaw(ast, filename);
    }

    // console.log(JSON.stringify(ast, null, 4));

    var src = '';
    var indent = '    ';
    var currentIndent = '';
    var syntax = options && options.syntax === 'concise' ?
        SYNTAX_CONCISE :
        SYNTAX_HTML;

    var isConciseSyntax = syntax === SYNTAX_CONCISE;

    var bufferedText = '';

    function writeLineIndent() {
        src += currentIndent;
    }

    function write(str) {
        src += str;
    }

    function incIndent() {
        currentIndent += indent;
    }

    function decIndent() {
        currentIndent = currentIndent.substring(indent.length);
    }

    function indentLines(lines) {
        let blockIndentation = null;
        return lines.map((line) => {
            if (blockIndentation == null) {
                blockIndentation = line.match(/^\s*/)[0];
            }

            if (line.startsWith(blockIndentation)) {
                line = line.substring(blockIndentation.length);
                line = currentIndent + rtrim(line);
            } else {
                line = currentIndent + line.trim();
            }
            return line;
        });
    }

    function indentCommentLines(lines) {
        let blockIndentation = null;

        var indentedLines = [];

        lines.forEach((line, i) => {
            if (line.trim() === '') {
                return;
            }

            if (blockIndentation == null) {
                blockIndentation = line.match(/^\s*/)[0];
                if (!blockIndentation) {
                    blockIndentation = null;
                }
            }

            if (line.startsWith(blockIndentation)) {
                line = line.substring(blockIndentation.length);
                line = currentIndent + rtrim(line);
            } else {
                line = currentIndent + line.trim();
            }
            indentedLines.push(line);
        });

        return indentedLines;
    }

    function flushLines(lines) {
        lines = trimLinesStart(lines);
        lines = trimLinesEnd(lines);

        if (lines.length === 0) {
            return;
        }

        if (isConciseSyntax || currentIndent === '') {
            if (lines.length > 1) {
                lines = indentLines(lines);
                write(currentIndent + '---\n' + lines.join('\n') + '\n' + currentIndent + '---');
            } else {
                let trimmed = lines[0].trim();
                if (trimmed.charAt(0) === '<') {
                    // The line does not need to be prefixed since it starts with an opening angle bracket
                    write(currentIndent + trimmed);
                } else {
                    write(currentIndent + '- ' + trimmed);
                }
            }
        } else {
            if (lines.length > 1) {
                lines = indentLines(lines);
                write(lines.join('\n'));
            } else {
                write(currentIndent + lines[0].trim());
            }
        }

        write('\n');
    }

    function flushBufferedText() {
        // bufferedText = bufferedText.trim();

        if (!bufferedText) {
            return;
        }

        var lines = bufferedText.split(/\n|\r\n/);

        var i=0;

        if (isConciseSyntax) {
            // In concise mode we don't want to bother prefixing lines that start with an opening HTML bracket.
            // This would be the case for HTML comments, HTML doctype and a declaration
            while(lines.length && i < lines.length) {
                var trimmed = lines[i].trim();
                if (trimmed.charAt(0) === '<') {
                    if (i > 0) {
                        flushLines(lines.slice(0, i));
                    }

                    write(currentIndent + trimmed + '\n');

                    lines = lines.slice(i+1);
                    i=0;
                } else {
                    i++;
                }
            }
        }

        flushLines(lines);

        bufferedText = '';
    }

    function printHtmlElement(node) {
        flushBufferedText();


        var col = 0;

        writeLineIndent();
        col += currentIndent.length;

        if (!isConciseSyntax) {
            write('<');
            col++;
        }

        write(node.tagName);
        col += node.tagName.length;

        if (node.rawShorthandId) {
            write('#' + node.rawShorthandId);
            col += node.rawShorthandId.length + 1;
        }

        if (node.rawShorthandClassNames) {
            node.rawShorthandClassNames.forEach((className) => {
                write('.' + className);
                col += className.length + 1;
            });
        }

        if (node.argument) {
            write('(' + node.argument + ')');
            col += node.argument.length + 2;
        }

        col++; // Allow for a space after the tag name

        var multilineAttrs = false;

        var attrs = node.getAttributes();
        var attrsStr = '';

        attrs.forEach((attr, i) => {

            var attrStr = '';

            if (attr.name) {
                attrStr += attr.name;
                var attrValue = attr.value;
                if (attrValue) {
                    if (attrValue.isCompoundExpression()) {
                        attrStr += '=(' + attrValue + ')';
                    }else {
                        attrStr += '=' + attrValue;
                    }

                } else if (attr.argument) {
                    attrStr += '(' + attr.argument + ')';
                }
            } else {
                attrStr += '${' + attr.value  + '}';
            }

            if (i !== 0 && col + attrStr.length > 80 && attrStr.length < (80 - currentIndent.length + indent.length)) {
                attrsStr += '\n' + currentIndent + indent + attrStr;
                col = currentIndent.length + indent.length + attrStr.length;
                multilineAttrs = true;
            } else {
                if (attrsStr.length) {
                    attrStr = ' ' + attrStr;
                }
                attrsStr += attrStr;
                col += attrStr.length;
            }
        });

        if (attrsStr) {
            write(' ');

            if (multilineAttrs && isConciseSyntax) {
                write('[ ');
                col += 2;
            }

            write(attrsStr);

            if (multilineAttrs && isConciseSyntax) {
                write(' ]');
                col += 2;
            }
        }

        var hasBody = node.body && node.body.length;
        if (!isConciseSyntax) {
            if (hasBody) {
                write('>');
                col += 1;
            } else {
                write('/>');
            }
        }

        if (hasBody) {
            let bodyText = getBodyText(node);
            if (bodyText && !hasLineBreaks(bodyText)) {
                let endCol = col + bodyText.length;
                if (!isConciseSyntax) {
                    endCol += ('</' + node.tagName + '>').length;
                }

                if (bodyText && !hasLineBreaks(bodyText) && endCol < 80) {
                    if (isConciseSyntax) {
                        write(' - ' + bodyText + '\n');
                    } else {
                        write(bodyText + '</' + node.tagName + '>\n');
                    }

                    return;
                }
            }
        }

        write('\n');

        if (hasBody && multilineAttrs) {
            write('\n'); // Add one more extra spacing line if the element has multiline attributes
        }

        if (hasBody) {
            incIndent();

            var bodyText = getBodyText(node);
            if (bodyText && !hasLineBreaks(bodyText)) {

            }

            node.body.forEach((child) => {
                printNode(child);
            });

            flushBufferedText();

            decIndent();

            if (multilineAttrs && syntax !== SYNTAX_CONCISE) {
                write('\n'); // Keep the spacing symmetrical
            }
        }

        if (hasBody && syntax === SYNTAX_HTML) {
            writeLineIndent();
            write('</');
            write(node.tagName);
            write('>\n');
        }
    }

    function printText(node) {
        bufferedText += node.argument.value;
    }

    function isInlineComment(node) {
        if (bufferedText && !bufferedText.endsWith('\n')) {
            return true;
        }

        var nextSibling = node.nextSibling;
        if (!nextSibling) {
            return false;
        }

        if (nextSibling.type !== 'Text') {
            return false;
        }

        var nextSiblingText = nextSibling.argument.value;
        if (nextSiblingText.startsWith('\n') || nextSiblingText.startsWith('\r\n')) {
            return false;
        } else {
            return true;
        }
    }

    function printHtmlComment(node) {
        var comment = node.comment.value;

        if (isInlineComment(comment)) {
            bufferedText += '<!--' + comment + '-->';
        } else {
            flushBufferedText();
            var lines = comment.split(/\n|\r\n/);
            if (lines.length === 1) {
                if (isConciseSyntax) {
                    write(currentIndent + '// ' + comment.trim());
                } else {
                    write(currentIndent + '<!-- ' + comment.trim() + '-->');
                }

            } else {
                write(currentIndent + '<!--\n' + indentCommentLines(lines).join('\n') + '\n' + currentIndent + '-->');
            }
            write('\n');
        }

    }

    function printDocumentType(node) {
        flushBufferedText();
        var doctype = node.documentType.value;
        write(currentIndent + '<!' + doctype.trim() + '>\n');
    }

    function printDeclaration(node) {
        flushBufferedText();
        var declaration = node.declaration.value;
        write(currentIndent + '<?' + declaration.trim() + '?>\n');
    }

    function printNode(node, isRoot) {
        switch (node.type) {
            case 'HtmlElement':
                printHtmlElement(node);
                break;
            case 'Text':
                printText(node);
                break;
            case 'HtmlComment':
                printHtmlComment(node);
                break;
            case 'DocumentType':
                printDocumentType(node);
                break;
            case 'Declaration':
                printDeclaration(node);
                break;
            default:
                throw new Error('Unsupported node: ' + node);
        }
    }

    ast.body.forEach((child) => {
        printNode(child);
    });

    flushBufferedText();

    return src;
};
});
$rmod.main("/raptor-loader@1.0.5","lib/raptor-loader");
$rmod.dep("","raptor-loader","1.0.5");
!function(a){a._0={js:["/static/marko-try-online-async-59003230.js"]}}(window.$rloaderMeta||(window.$rloaderMeta={}));
$rmod.dep("","raptor-util","1.0.10");
$rmod.def("/raptor-loader@1.0.5/lib/resource-loader",function(e,n,t,r,o){function a(e,n){var t=document.createElement(e);return n&&u(t,n),t}function c(e){null==i&&(i=document.getElementsByTagName("head")[0]),i.appendChild(e)}var i,u=e("raptor-util/extend");n.js=function(e,n,t){function r(){i===!1&&(i=!0,n())}function o(e){i===!1&&(i=!0,n(e||"unknown error"))}t=t||{};var i=!1;u(t,{type:"text/javascript",src:e,onreadystatechange:function(){("complete"==d.readyState||"loaded"==d.readyState)&&r()},onload:r,onerror:o});var d=a("script",t);if(d.addEventListener)try{d.addEventListener("load",function(){r()})}catch(l){}c(d)},n.css=function(e,n,t){function r(){p.onload=null,p.onreadystatechange=null,p.onerror=null}function o(){for(var n=document.styleSheets,t=0,r=n.length;r>t;t++)if(n[t].href===e)return!0;return!1}function i(){s===!1&&(s=!0,r(),n())}function d(){if(s===!1){if(!o()&&f--)return window.setTimeout(d,10);i()}}function l(e){s===!1&&(s=!0,r(),n(e||"unknown error"))}var f=20,s=!1,p=a("link");u(p,{type:"text/css",rel:"stylesheet",href:e}),t&&u(p,t),"Microsoft Internet Explorer"===navigator.appName?(p.onload=i,p.onreadystatechange=function(){var e=this.readyState;("loaded"===e||"complete"===e)&&i()}):d(),p.onerror=l,c(p)}});
$rmod.dep("","events","1.1.0");
$rmod.dep("/$/lasso/$/lasso-require","events","1.1.0");
$rmod.dep("/$/lasso/$/lasso-require","raptor-loader","1.0.5");
$rmod.def("/raptor-loader@1.0.5/lib/raptor-loader",function(n,e,o,t,r){function i(n,e){if(!d[e]){d[e]=!0;var o,t=setTimeout(function(){o("Timeout after "+s+"ms")},s);o=function(n){d[e]&&(clearTimeout(t),delete d[e],n?m[e]=n:l[e]=!0,v.emit(e,n,e))},f[n](e,o)}}function a(n,e){function o(){a.length?e("Failed: "+a.join(", ")):e()}function t(n,e){n&&a.push(e+" ("+n+")"),0===--u&&o()}function r(e){var o=n[e];if(o)for(var r=0,f=o.length;f>r;r++){var c=o[r];m[c]?a.push(c+" ("+m[c]+")"):l[c]||(u++,v.once(c,t),i(e,c))}}var a=[],u=0;r("css"),r("js"),0===u&&o()}function u(e,o){var t=window.$rloaderMeta,r=t?t[e]:null;if(!r)throw new Error('Loader metadata missing for "'+e+'"');var i,u=n.runtime;u&&(i=u.pending()),a(r,function(n,e){i&&i.done(n),o(n,e)})}var f=(n("process"),n("./resource-loader")),c=n("events").EventEmitter,s=3e3,d={},l={},m={},v=new c;e.setTimeout=function(n){s=n},e.load=a,e.async=u});
$rmod.def("/src/components/app-try-marko/layout-default.marko",function(t,o,e,a,n){function l(o){var e=(o.s,o.e,o.ne,o.x,o.t),a=e(t("/$/marko/taglibs/layout/placeholder-tag"));return function(t,o){o.w('<div class="cols-ctr"><div class="mto-col-input"><div class="mto-tile mto-tile-template"><h2>Marko Template '),a({name:"syntax-chooser",content:t.layoutContent},o),o.w("</h2>"),a({name:"template",content:t.layoutContent},o),o.w('</div><div class="mto-tile mto-tile-mto-data"><h2>Data</h2>'),a({name:"data",content:t.layoutContent},o),o.w('</div><div class="mto-tile mto-tile-mto-options"><h2>Options</h2>'),a({name:"options",content:t.layoutContent},o),o.w('</div></div><div class="mto-col-output"><div class="mto-tile mto-tile-output"><h2>HTML Output</h2>'),a({name:"output",content:t.layoutContent},o),o.w('</div><div class="mto-tile mto-tile-compiled"><h2>Compiled Template</h2>'),a({name:"compiled",content:t.layoutContent},o),o.w('</div></div></div><div style="clear: both"></div>')}}(e.exports=t("/$/marko").c(a)).c(l)});
$rmod.main("/src/components/app-marko-try-online-errors","index");
$rmod.def("/src/components/app-marko-try-online-errors/errors-template.marko",function(r,s,e,n,o){function a(r){var s=(r.s,r.e,r.ne,r.x),e=r.f;return function(r,n){n.w('<div class="errors">'),e(r.errors,function(r){n.w('<div class="error"><span class="icon">✘</span><pre class="message">'+s(r.message)+"\n</pre></div>")}),n.w("</div>")}}(e.exports=r("/$/marko").c(n)).c(a)});
$rmod.def("/src/util/dom-util",function(n,t,d,e,i){t.appendHtml=function(n,t){n.insertAdjacentHTML("beforeEnd",t)}});
$rmod.def("/src/components/app-marko-try-online-errors/template.marko",function(e,r,t,o,n){function i(r){var t={name:"/src/components/app-marko-try-online-errors/index",def:function(){return e("./index")}},o=e("/$/marko-widgets"),n=o.attrs,i=(r.s,r.e,r.ne,r.x,r.t),a=i(e("/$/marko-widgets/taglib/widget-tag")),d=r.a,s=r.as;return function(e,r){a({type:t,_cfg:e.widgetConfig,_state:e.widgetState,_props:e.widgetProps,_body:e.widgetBody,renderBody:function(e,r){e.w('<div class="errors-container"'+d("id",r.id)+s(n(r))+"></div>")}},r)}}(t.exports=e("/$/marko").c(o)).c(i)});
$rmod.def("/src/components/app-marko-try-online-errors/index",function(r,e,s,t,o){var n=r("./errors-template.marko"),i=r("/src/util/dom-util").appendHtml,a=r("/$/dom-classes").remove,d=r("/$/dom-classes").add;s.exports=r("/$/marko-widgets").defineComponent({template:r("./template.marko"),getTemplateData:function(){return{}},setErrors:function(r){this.el.innerHTML="",r&&r.length?this.addErrors(r):(this._hasErrors=!1,d(this.el,"hidden"))},clearErrors:function(){this.setErrors(null)},hasErrors:function(){return this._hasErrors},addErrors:function(r){if(r&&r.length){this._hasErrors=!0;var e=n.renderSync({errors:r});i(this.el,e),a(this.el,"hidden")}}})});
$rmod.def("/src/components/app-try-marko/template.marko",function(t,e,o,a,n){function d(e){var o={name:"/src/components/app-try-marko/index",def:function(){return t("./index")}},a=t("/$/marko-widgets"),n=a.attrs,d=e.l,i=d(t.resolve("./layout-default.marko")),r=t("/$/marko-widgets/taglib/helpers/widgetArgs"),l=r.cleanup,s=(e.s,e.e,e.ne,e.x,e.t),c=s(t("/$/marko-widgets/taglib/widget-tag")),u=e.ca,m=e.a,p=e.as,y=s(t("/$/marko/taglibs/layout/use-tag")),g=s(t("/$/marko/taglibs/layout/put-tag")),h=e.xa,f=s(t("../app-codemirror")),k=s(t("../app-marko-try-online-errors"));return function(t,e){c({type:o,_cfg:t.widgetConfig,_state:t.widgetState,_props:t.widgetProps,_body:t.widgetBody,renderBody:function(e,o){e.w("<div"+u(["app-try-marko-inline",t.inline&&"inline"])+m("id",o.id)+p(n(o))+">"),y({__template:i,getContent:function(a){g({into:"syntax-chooser",layout:a,renderBody:function(e){e.w('<span class="syntax-chooser"><span class="button-group"><button type="button"'+u("html"===t.syntax&&"active")+m("id",o.elId("htmlSyntaxButton"))+' data-w-onclick="handleHtmlSyntxButtonClick|'+h(o.id)+'">HTML Syntax</button><button type="button"'+u("concise"===t.syntax&&"active")+m("id",o.elId("conciseSyntaxButton"))+' data-w-onclick="handleConciseSyntxButtonClick|'+h(o.id)+'">Concise Syntax</button></span></span>')}},e),g({into:"template",layout:a,renderBody:function(e){t.templateNav.renderBody(e),r(e,o.id,"templateEditor",["change","handleTemplateEditorChange"]),f({mode:"Marko",autoResize:!0,theme:"default",code:t.templateCode},e),l(e),r(e,o.id,"templateErrors"),k({},e),l(e)}},e),g({into:"data",layout:a,renderBody:function(e){r(e,o.id,"dataEditor",["change","handleDataEditorChange"]),f({mode:"javascript",theme:"default",autoResize:!0,code:t.dataCode},e),l(e),r(e,o.id,"dataErrors"),k({},e),l(e)}},e),g({into:"options",layout:a,renderBody:function(t){r(t,o.id,"optionsEditor",["change","handleOptionsEditorChange"]),f({mode:"javascript",theme:"default",autoResize:!0},t),l(t),r(t,o.id,"optionsErrors"),k({},t),l(t)}},e),g({into:"output",layout:a,renderBody:function(e){r(e,o.id,"outputEditor"),f({mode:"htmlmixed",autoResize:!0,readOnly:!0,autoFormat:!0,theme:"default",code:t.htmlCode},e),l(e),t.inline||e.w('<div class="mto-html-viewer"'+m("id",o.elId("htmlViewer"))+"></div>")}},e),g({into:"compiled",layout:a,renderBody:function(e){r(e,o.id,"compiledEditor"),f({mode:"javascript",autoResize:!0,readOnly:!0,theme:"default",code:t.compiledCode},e),l(e)}},e)}},e),e.w('<div style="clear: both"></div></div>')}},e)}}(o.exports=t("/$/marko").c(a)).c(d)});
$rmod.def("/src/components/app-try-marko/index",function(require,exports,module,__filename,__dirname){function loadCompiler(t){compilerAsyncValue||(compilerAsyncValue=new AsyncValue,require("raptor-loader").async("_0",function(){var t=require("/$/marko/compiler");t.registerTaglib(require.resolve("./test-taglib/marko.json")),compilerAsyncValue.resolve(t)})),compilerAsyncValue.done(t)}function compileAndLoadTemplate(templateSrc,path,compileOptions,callback){loadCompiler(function(err,compiler){if(err)throw err;try{compiler.compile(templateSrc,path,compileOptions,function(err,compiledSrc){if(err)return callback(err);var wrappedSource="(function(require, exports, module, __filename, __dirname) { "+compiledSrc+" })",factoryFunc=eval(wrappedSource),templateExports={},templateModule={require:require,exports:templateExports,id:"/template.marko"};factoryFunc(require,templateExports,templateModule,"/template.marko","/"),callback(null,templateModule.exports,compiledSrc)})}catch(e){window.console&&console.error(e),callback(e)}})}var AsyncValue=require("/$/raptor-async/AsyncValue"),compilerAsyncValue=null,removeClass=require("/$/dom-classes").remove,addClass=require("/$/dom-classes").add,markoPrettyprint=require("/$/marko-prettyprint");module.exports=require("/$/marko-widgets").defineComponent({template:require("./template.marko"),getWidgetConfig:function(t){return{inline:t.inline===!0,syntax:t.syntax||"html"}},getTemplateData:function(t,e){var i=e["template-nav"],r=e.dataCode,a=e.templateCode,o=e.compiledCode,n=e.htmlCode,d=e.syntax||"html";return{templateNav:i,dataCode:r,templateCode:a,compiledCode:o,htmlCode:n,inline:e.inline===!0,syntax:d}},init:function(t){this.autoRender=!0,this.compileRequired=!0,this.renderRequired=!0,this.inline=t.inline===!0,this.syntax=t.syntax||"html",this.editorsState={data:null,options:null,dataModified:!0,optionsModified:!0},this.halt=!1},setCode:function(t){var e=t.showOptions===!0;e?this.getWidget("optionsEditor").show():this.getWidget("optionsEditor").hide();var i=t.template,r=t.data,a=t.compilerOptions,o=t.autoFormat===!0,n=t.syntax;n!==this.syntax&&(i=markoPrettyprint(i,{syntax:this.syntax,filename:"template.marko"})),this.getWidget("outputEditor").setAutoFormat(o),this.halt=!0,this.getWidget("dataEditor").setValue(r||"{\n}"),a&&this.getWidget("optionsEditor").setValue(a),this.compilerOptions=a,this.getWidget("templateEditor").setValue(i),this.halt=!1,this.update()},setSyntax:function(t){this.syntax!==t&&(this.syntax=t,removeClass(this.getEl("htmlSyntaxButton"),"active"),removeClass(this.getEl("conciseSyntaxButton"),"active"),"html"===t?addClass(this.getEl("htmlSyntaxButton"),"active"):addClass(this.getEl("conciseSyntaxButton"),"active"));var e=this.getWidget("templateEditor").getValue();e=markoPrettyprint(e,{syntax:this.syntax,filename:"template.marko"}),this.getWidget("templateEditor").setValue(e)},handleEditorException:function(t,e){var i=e.errors;i||(i=[{message:e.toString()}]),t.addErrors(i)},compileTemplate:function(){if(this.compileRequired){this.getWidget("templateErrors").clearErrors();var t=this.getWidget("templateEditor").getValue(),e="/template.marko",i=this.compilerOptions?this.editorsState.optionsData:null,r=this;compileAndLoadTemplate(t,e,i,function(t,e,i){return t?void r.handleEditorException(r.getWidget("templateErrors"),t):(r.loadedTemplate=e,r.getWidget("compiledEditor").setValue(i),void(r.compileRequired=!1))})}},renderTemplate:function(){if(this.renderRequired){var t=this.editorsState.templateData,e=this;try{this.loadedTemplate.render(t,function(t,i){return t?(this.handleEditorException(e.getWidget("templateErrors"),t),void(e.getEl("htmlViewer").innerHTML="")):(e.getWidget("outputEditor").setValue(i),void e.updateHTMLViewer(i))})}catch(i){this.handleEditorException(this.getWidget("templateErrors"),i),this.updateHTMLViewer("")}this.renderRequired=!1}},updateHTMLViewer:function(t){this.inline||(this.getEl("htmlViewer").innerHTML=t)},updateJSON:function(targetProp,modifiedProp,editor,errors){if(this.editorsState[modifiedProp]){this.editorsState[targetProp]=null,errors.clearErrors();var jsonData=editor.getValue(),data;if(""===jsonData.trim())data={};else try{data=eval("("+jsonData+")"),this.editorsState[targetProp]=data}catch(e){this.handleEditorException(errors,e)}this.editorsState[modifiedProp]=!1}},update:function(){if(!this.halt){var t=this;loadCompiler(function(){t.editorsState.dataModified&&t.getWidget("templateErrors").clearErrors(),t.updateJSON("optionsData","optionsModified",t.getWidget("optionsEditor"),t.getWidget("optionsErrors")),t.compileTemplate(),t.updateJSON("templateData","dataModified",t.getWidget("dataEditor"),t.getWidget("dataErrors")),t.renderTemplate()})}},handleTemplateEditorChange:function(){this.compileRequired=!0,this.renderRequired=!0,this.autoRender&&this.update()},handleDataEditorChange:function(){this.editorsState.dataModified=!0,this.renderRequired=!0,this.autoRender&&this.update()},handleOptionsEditorChange:function(){this.editorsState.optionsModified=!0,this.renderRequired=!0,this.compileRequired=!0,this.autoRender&&this.update()},handleHtmlSyntxButtonClick:function(){this.setSyntax("html")},handleConciseSyntxButtonClick:function(){this.setSyntax("concise")}})});
$rmod.def("/src/components/app-try-marko-app/template.marko",function(t,a,e,i,o){function d(a){var e={name:"/src/components/app-try-marko-app/index",def:function(){return t("./index")}},i=t("/$/marko-widgets"),o=i.attrs,d=t("/$/marko-widgets/taglib/helpers/widgetArgs"),n=d.cleanup,s=(a.s,a.e,a.ne,a.x),r=a.t,c=r(t("/$/marko-widgets/taglib/widget-tag")),l=a.a,m=a.as,p=a.f,g=a.xa,u=r(t("../app-try-marko"),0,0,1),w=r(null,"template-nav",0);return function(t,a){c({type:e,_cfg:t.widgetConfig,_state:t.widgetState,_props:t.widgetProps,_body:t.widgetBody,renderBody:function(a,e){a.w('<div class="mto"'+l("id",e.id)+m(o(e))+'><div class="mto-categories">'),p(t.samples.categories,function(t){a.w('<button type="button" class="mto-btn mto-category-btn"'+l("data-cat-id",t.id)+l("id",e.elId("categoryButton"+t.id))+' data-w-onclick="handleCategoryClick|'+g(e.id)+'">'+s(t.name)+"</button>")}),a.w('<a href="/"><img src="/images/logo.png" width="100" height="100" alt="Marko"></a></div><div class="try-marko-container">'),d(a,e.id,"tryMarko"),u({},a,0,function(a,i){w({renderBody:function(a){a.w('<div class="mto-sample-navs"'+l("id",e.elId("sampleNavs"))+">"),p(t.samples.categories,function(t){a.w('<div class="mto-sample-nav"'+l("data-cat-id",t.id)+l("id",e.elId("categoryNav"+t.id))+">"),p(t.samples,function(t){a.w('<button type="button"'+l("data-sample-id",t.id)+' class="mto-btn mto-sample-btn"'+l("id",e.elId("sampleButton"+t.id))+' data-w-onclick="handleSampleButtonClick|'+g(e.id)+'">'+s(t.name)+"</button>")}),a.w("</div>")}),a.w("</div>")}},a,i)}),n(a),a.w("</div></div>")}},a)}}(e.exports=t("/$/marko").c(i)).c(d)});
$rmod.def("/src/components/app-try-marko-app/index",function(t,e,a,s,n){function i(t,e){var a=t.name,s=e.name;return(a+"_"+s).replace(/\W+/g,"_")}var o=t("/$/dom-classes").remove,r=t("/$/dom-classes").add,l=t("./samples-loader").load();"undefined"!=typeof window&&(window.testTemplate=t("./include-target.marko"),window.layoutTemplate=t("./layout-use-target.marko")),a.exports=t("/$/marko-widgets").defineComponent({template:t("./template.marko"),getWidgetConfig:function(){return{samples:l}},getTemplateData:function(){var t=null;return{samples:l,theme:t}},init:function(t){this.currentCategoryId=null,this.currentSampleId=null;var e=t.samples,a=this.samplesById={},s=this.categoriesById={},n=this.samplesByName={};if(this.changeHash=!0,e.categories.forEach(function(t){s[t.id]=t,t.samples.forEach(function(e){e.category=t,a[e.id]=e,e.uniqueName=i(t,e),n[e.uniqueName]=e})}),document.location.hash){var o=n[document.location.hash.substring(1)];o?this.showSample(o.id):this.showCategory(e.categories[0].id)}else this.changeHash=!1,this.showCategory(e.categories[0].id),this.changeHash=!0;var r=this;window.addEventListener("hashchange",function(){var t=n[document.location.hash.substring(1)];t&&r.showSample(t.id)},!1)},showCategory:function(t){var e=this.categoriesById[t];e&&0!==e.samples.length&&this.showSample(e.samples[0].id)},showSample:function(t){if(this.currentSampleId!==t){var e=this.samplesById[t];if(e){this.currentSample=e;var a=e.category.id;if(this.currentCategoryId!==a){null!=this.currentCategoryId&&(o(this.getCategoryButtonEl(this.currentCategoryId),"mto-btn-active"),o(this.getCategoryNavEl(this.currentCategoryId),"mto-sample-nav-active")),this.currentCategoryId=a,r(this.getCategoryButtonEl(this.currentCategoryId),"mto-btn-active"),r(this.getCategoryNavEl(this.currentCategoryId),"mto-sample-nav-active");var s=this.categoriesById[a];null==t&&s.samples.length&&(t=s.samples[0].id),1===s.samples.length?r(this.getEl("sampleNavs"),"hidden"):o(this.getEl("sampleNavs"),"hidden")}null!=this.currentSampleId&&o(this.getSampleButtonEl(this.currentSampleId),"mto-btn-active"),this.currentSampleId=t,r(this.getSampleButtonEl(this.currentSampleId),"mto-btn-active");var n=e.options;this.getWidget("tryMarko").setCode({template:e.template,data:e.data,options:e.options,autoFormat:e.autoFormat===!0,compilerOptions:n,syntax:e.syntax}),this.changeHash!==!1&&(document.location.hash=e.uniqueName)}}},getCategoryNavEl:function(t){return this.getEl("categoryNav"+t)},getCategoryButtonEl:function(t){return this.getEl("categoryButton"+t)},getSampleButtonEl:function(t){return this.getEl("sampleButton"+t)},handleCategoryClick:function(t,e){var a=e.getAttribute("data-cat-id");null!=a&&(a=parseInt(a,10),this.showCategory(a))},handleSampleButtonClick:function(t,e){var a=e.getAttribute("data-sample-id");null!=a&&(a=parseInt(a,10),this.showSample(a))}})});