!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=14)}([function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function u(e,n){for(var t={},o=[],r=0;r<e.length;r++){var i=e[r],u=n.base?i[0]+n.base:i[0],s=t[u]||0,d="".concat(u," ").concat(s);t[u]=s+1;var l=c(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:d,updater:b(f,n),references:1}),o.push(d)}return o}function s(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function f(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,m=0;function b(e,n){var t,o,r;if(n.singleton){var i=m++;t=h||(h=s(n)),o=f.bind(null,t,i,!1),r=f.bind(null,t,i,!0)}else t=s(n),o=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=c(t[o]);a[r].references--}for(var i=u(e,n),s=0;s<t.length;s++){var d=c(t[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=i}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([r]).join("\n")}var a,c,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);o&&r[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},,,,,,,,,,,,,function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(n,"__esModule",{value:!0}),n.RandomMetaphor=void 0,t(15);var r,i=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.rootNode=n;var t=document.createElement("button");t.id="button",t.innerHTML="New Metaphor",t.className="tch-btn-header-secondary",this.itemContainer=document.createElement("h1"),this.itemContainer.id="itemcontainer",this.itemContainer.className="container",this.rootNode.appendChild(t),this.rootNode.parentNode.appendChild(this.itemContainer),t.addEventListener("click",this.buttonClicked,!1),this.METAPHORS=["all the world's a stage","music to my ears","rings a bell","up in the air","broke the bank","a piece of cake","not my cup of tea","heart of stone","strength of an ox","stab me in the back","face the music","break the ice","the black sheep","weighing on my mind","spill the beans","give someone a hand","hit him hard","eaten up","at the back of my mind","took an unexpected direction","time is money","a fish out of water","conscience is a man's compass","cold feet","night owl","beat a dead horse","early bird","couch potato","heart of a lion","heart of gold","light up the room"],this.init()}var n,t,r;return n=e,(t=[{key:"init",value:function(){this.pickItem(this.METAPHORS[Math.floor(Math.random()*this.METAPHORS.length)])}},{key:"pickItem",value:function(e){document.getElementById("itemcontainer").innerHTML=e}},{key:"buttonClicked",value:function(){!function(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),o=[e[t],e[n]];e[n]=o[0],e[t]=o[1]}}(window.rand.METAPHORS),window.rand.pickItem(window.rand.METAPHORS[0])}}])&&o(n.prototype,t),r&&o(n,r),e}();n.RandomMetaphor=i,window.randommetaphorinit=function(){r=new i(document.getElementById("randommetaphor")),window.rand=r}},function(e,n,t){var o=t(0),r=t(16);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:("head","head"),injectType:"singletonStyleTag",singleton:!0};o(r,i);e.exports=r.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,".container {\n   width: 100%;\n   font-family: 'Helvetica';\n   text-transform: uppercase;\n}\n\n.tch-btn-header-secondary {\n   min-width: 140px;\n   padding-left: 30px !important;\n   padding-right: 30px !important;\n   max-width: 570px;\n   color: white;\n   background-color: #fff;\n   border: 1px solid #a9a9a9;\n   padding: 8px 20px 7px 20px !important;\n   font-size: 12px;\n   line-height: 1.72222;\n   border-radius: 3px;\n   font-weight: 600 !important;\n   display: inline-block;\n   cursor: pointer;\n   font-weight: 600;\n   border-radius: 30px !important;\n   text-align: center;\n   padding: 8px 20px 7px 20px !important;\n   font-size: 12px;\n   line-height: 1.72222;\n   border-radius: 3px;\n   font-weight: 600 !important;\n   display: inline-block;\n   cursor: pointer;\n   font-weight: 600;\n   border-radius: 30px !important;\n   text-align: center;\n   border-color: #e1e3e4;\n   color: #0f8d82;\n}\n",""]),e.exports=n}]);