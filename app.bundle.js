!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(o).concat([r]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];null!=s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var i,r,o={},s=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),c=null,d=0,l=[],u=n(4);function p(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=o[i.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(b(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(b(i.parts[s],e));o[i.id]={id:i.id,refs:1,parts:a}}}}function h(t,e){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function f(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=l[l.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(t.insertAt.before,n);n.insertBefore(e,r)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return g(e,t.attrs),f(t,e),e}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,i,r,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var s=d++;n=c||(c=v(e)),i=x.bind(null,n,s,!1),r=x.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),f(t,e),e}(e),i=function(t,e,n){var i=n.css,r=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=u(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),r=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),i=function(t,e){var n=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){m(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return p(n,e),function(t){for(var i=[],r=0;r<n.length;r++){var s=n[r];(a=o[s.id]).refs--,i.push(a)}t&&p(h(t,e),e);for(r=0;r<i.length;r++){var a;if(0===(a=i[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var y,w=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function x(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e,n){var i=n(3);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".main {\n    width: 100%;\n    height: 80%;\n    margin-top: 5%;\n    overflow: hidden;\n}\n.containers {\n    display: flex;\n    justify-content: flex-start;\n    overflow: hidden;\n    height: 90%;\n    transition: all 1s;\n    transform: scale(0.98);\n}\n.active {\n    transform: scale(1);\n}\na {\n    text-decoration: none;\n    background-color: blue;\n    font-size: 1.2rem;\n    color: white;\n    font-weight: 600;\n}\n.channelTitle{\n    font-size: 1.2rem;\n    font-weight: 500;\n}\nimg {\n    margin-top: 20px;\n    height: 250px;\n    width: 100%;\n    \n}\n.clipBox {\n    display:flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    overflow: hidden;\n    text-align: center;\n    min-width: 400px;\n    background-color: white;\n    border-radius: 4%;\n}\n.buttonNavPrev {\n    border-radius: 50%;\n    height: 3rem;\n    width: 3rem;\n    font-size: 1rem;\n    color: white;\n    background-color: rgb(7, 34, 155);\n    outline: 0;\n}\n.buttonNavNext {\n    margin-left: 5%;\n    border-radius: 50%;\n    height: 3rem;\n    width: 3rem;\n    font-size: 1rem;\n    color:white;\n    background-color: rgb(7, 34, 155);\n    outline: 0;\n}\n",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"body{\n    margin:0;\n    width: 100%;\n    box-sizing: border-box;\n    background-color: rgba(173, 172, 172, 0.836);\n}\n#header {\n    text-align: center;\n}\n#nav {\n    text-align: center;\n    margin-top: 5%;\n}\n#input {\n    width: 50%;\n    height: 3rem;\n    font-size: 1.5rem;\n    border: 5px solid rgb(7, 34, 155);\n    border-top-left-radius: 1rem;\n    border-bottom-left-radius: 1rem;\n    outline: 0;\n}\n#description {\n    overflow: hidden;\n    margin-top: 5%;\n}\n.button {\n    color: white;\n    height: 3.7rem;\n    font-size: 1.5rem;\n    background-color: rgb(7, 34, 155);\n    border: 5px solid  rgb(7, 34, 155);\n    border-top-right-radius: 1rem;\n    border-bottom-right-radius: 1rem;\n    outline: 0;\n    \n}\n@media (max-width: 500px) {\n    img {\n        height: 200px;\n    }\n    .clipBox{\n        min-width: 100%;\n        padding-left:5%;\n        padding-right:5%;\n    }\n    #header {\n        height: 10%;\n    }\n    #input {\n        height: 100%;\n        font-size: 1rem;\n        border: 3px solid rgb(7, 34, 155);\n    }\n    .button {\n        color: white;\n        height: 100%;\n        font-size: 1rem;\n        border: 3px solid  rgb(7, 34, 155);\n        \n    }\n}\n@media (min-width: 501px) and (max-width: 1023px) {\n    .clipBox{\n        min-width: 40%;\n        padding-left:3%;\n        padding-right:3%;\n    }\n    .clipBox:not(:last-of-type){\n        margin-left:5%;\n        margin-right:5%;\n    }\n    #header {\n        height: 10%;\n    }\n    #input {\n        height: 100%;\n        font-size: 1rem;\n        border: 3px solid rgb(7, 34, 155);\n    }\n    .button {\n        color: white;\n        height: 100%;\n        font-size: 1rem;\n        border: 3px solid  rgb(7, 34, 155);\n        transform: translateX(-5px);\n        \n    }\n}\n@media (min-width: 1024px) {\n    .clipBox{\n        min-width: 29%;\n    }\n    .clipBox:not(:last-of-type){\n        margin-left: 2.17%;\n        margin-right: 2.17%;\n    }\n    #header {\n        height: 13%;\n    }\n}\n@media (min-width: 1500px) {\n    .clipBox{\n        min-width: 21%;\n    }\n    .clipBox:not(:last-of-type){\n        margin-left:2%;\n        margin-right:2%;\n    }\n    #header {\n        height: 15%;\n    }\n}\n",""])},function(t,e,n){"use strict";n.r(e);class i{constructor(t){this.state=t}static extractClipNames(t){return t.items.map(t=>t.snippet.title)}async getClipNames(){const{url:t}=this.state,e=await fetch(t),n=await e.json();return i.extractClipNames(n)}static extractClipDescriptions(t){return t.items.map(t=>t.snippet.description)}async getClipDescriptions(){const{url:t}=this.state,e=await fetch(t),n=await e.json();return i.extractClipDescriptions(n)}static extractClipPublishing(t){return t.items.map(t=>t.snippet.publishedAt)}async getClipPublishings(){const{url:t}=this.state,e=await fetch(t),n=await e.json();return i.extractClipPublishing(n)}static extractClipChannelTitle(t){return t.items.map(t=>t.snippet.channelTitle)}async getClipChannelTitle(){const{url:t}=this.state,e=await fetch(t),n=await e.json();return i.extractClipChannelTitle(n)}static extractClipID(t){return t.items.map(t=>t.id.videoId).join(",")}async getClipID(){const{url:t}=this.state,e=await fetch(t),n=await e.json();return i.extractClipID(n)}}n(2);var r=class{constructor(t,e,n,i,r,o,s,a){this.titles=t,this.descriptions=e,this.published=n,this.channelTitle=i,this.views=r,this.img=o,this.id=s,this.search=a}render(){const t=document.createElement("div");t.classList.add("container"),t.classList.add("clipBox"),document.getElementById("containers").appendChild(t);const e=document.createElement("img");e.src=this.img.shift(),document.querySelector(".container").appendChild(e);const n=document.createElement("a"),i=this.id.shift();n.setAttribute("href",`https://www.youtube.com/watch?v=${i}`),n.innerHTML=this.titles.shift(),document.querySelector(".container").appendChild(n);const r=document.createElement("i");r.classList.add("fas"),r.classList.add("fa-address-card");const o=document.createElement("div");o.classList.add("videoChannel"),o.classList.add("channelTitle"),o.innerHTML=this.channelTitle.shift(),document.querySelector(".container").appendChild(o),document.querySelector(".videoChannel").appendChild(r),o.classList.remove("videoChannel");const s=document.createElement("i");s.classList.add("fas"),s.classList.add("fa-calendar");const a=document.createElement("div");a.classList.add("videoPublish"),a.innerHTML=this.published.shift().slice(0,10),document.querySelector(".container").appendChild(a),document.querySelector(".videoPublish").appendChild(s),a.classList.remove("videoPublish");const c=document.createElement("i");c.classList.add("fas"),c.classList.add("fa-eye");const d=document.createElement("div");d.classList.add("videoViews"),d.innerHTML=this.views.shift(),document.querySelector(".container").appendChild(d),document.querySelector(".videoViews").appendChild(c),d.classList.remove("videoViews");const l=document.createElement("div");l.innerHTML=this.descriptions.shift(),l.setAttribute("id","description"),document.querySelector(".container").appendChild(l),t.classList.remove("container"),this.render1(),document.getElementById("nav").style.display="block"}render1(){document.getElementById("containers").childElementCount<15&&this.render()}};class o{constructor(t){this.state=t}static extractClipViews(t){return t.items.map(t=>t.statistics.viewCount)}async getClipViews(){const{url2:t}=this.state,e=await fetch(t),n=await e.json();return o.extractClipViews(n)}static extractClipImg(t){return t.items.map(t=>t.snippet.thumbnails.high.url)}async getClipImg(){const{url2:t}=this.state,e=await fetch(t),n=await e.json();return o.extractClipImg(n)}static extractClipsId(t){return t.items.map(t=>t.id)}async getClipsId(){const{url2:t}=this.state,e=await fetch(t),n=await e.json();return o.extractClipsId(n)}}class s{constructor(t){this.apiKey="AIzaSyD44tZnmbDtAXNJoOvc6p4Gi-TktRkswy4",this.search=t,this.state={url:`https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&type=video&part=snippet&maxResults=15&q=${this.search}`}}async start(){const t=new i(this.state),e=await t.getClipNames(),n=await t.getClipDescriptions(),s=await t.getClipPublishings(),a=await t.getClipChannelTitle(),c=await t.getClipID(),d={url2:`https://www.googleapis.com/youtube/v3/videos?key=${this.apiKey}&id=${c}&part=snippet,statistics`},l=new o(d),u=await l.getClipViews(),p=await l.getClipImg(),h=await l.getClipsId();new r(e,n,s,a,u,p,h).render()}}n(5);const a=document.createElement("meta");a.setAttribute("name","viewport"),a.setAttribute("content","width=device-width, initial-scale=1.0"),document.head.appendChild(a);const c=document.createElement("link");c.setAttribute("rel","stylesheet"),c.setAttribute("href","https://use.fontawesome.com/releases/v5.8.2/css/all.css"),document.head.appendChild(c);const d=document.createElement("div");d.setAttribute("id","header"),document.body.appendChild(d);const l=document.createElement("input");l.setAttribute("id","input"),l.setAttribute("placeholder"," Enter your search request here..."),document.getElementById("header").appendChild(l);const u=document.createElement("button");u.classList.add("button"),u.innerHTML="Search",document.getElementById("header").appendChild(u);const p=document.createElement("div");p.classList.add("main"),p.setAttribute("id","main"),document.body.appendChild(p);const h=document.createElement("div");function f(){if(document.getElementById("containers").firstChild){for(;document.getElementById("containers").firstChild;)document.getElementById("containers").removeChild(document.getElementById("containers").firstChild);new s(l.value).start()}else{new s(l.value).start()}}h.classList.add("containers"),h.setAttribute("id","containers"),document.getElementById("main").appendChild(h),u.addEventListener("click",f),document.addEventListener("keydown",t=>{13===t.keyCode&&f()});const m=document.getElementById("containers");let v,g,b=!1;m.addEventListener("mousedown",t=>{b=!0,m.classList.add("active"),v=t.pageX,g=m.scrollLeft}),m.addEventListener("touchstart",t=>{b=!0,m.classList.add("active"),v=t.changedTouches[0].pageX-m.offsetLeft,g=m.scrollLeft}),m.addEventListener("mouseleave",()=>{b=!1,m.classList.remove("active")}),m.addEventListener("mouseup",()=>{b=!1,m.classList.remove("active")}),m.addEventListener("touchend",()=>{b=!1,m.classList.remove("active")}),m.addEventListener("mousemove",t=>{if(!b)return;t.preventDefault();const e=t.pageX-v;m.scrollLeft=g-e}),m.addEventListener("touchmove",t=>{if(!b)return;t.preventDefault();const e=t.changedTouches[0].pageX-m.offsetLeft-v;m.scrollLeft=g-e});const y=document.createElement("div");y.setAttribute("id","nav"),document.body.appendChild(y),document.getElementById("nav").style.display="none";const w=document.createElement("button");w.classList.add("buttonNavPrev"),w.innerHTML="Prev",document.getElementById("nav").appendChild(w);const x=document.createElement("button");x.classList.add("buttonNavNext"),x.innerHTML="Next",document.getElementById("nav").appendChild(x),document.getElementById("nav").firstChild.addEventListener("mousedown",function(){const t=Date.now(),e=setInterval(()=>{Date.now()-t>2e3?clearInterval(e):m.scrollLeft-=document.body.clientWidth/200},10)}),document.getElementById("nav").lastChild.addEventListener("mousedown",function(){const t=Date.now(),e=setInterval(()=>{Date.now()-t>2e3?clearInterval(e):m.scrollLeft+=document.body.clientWidth/200},10)})}]);
//# sourceMappingURL=app.bundle.js.map
