!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}({3:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.Anyrandomizer=void 0;var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.rootNode=t;var n=document.createElement("button");n.id="button",n.innerHTML="Refresh";var r=document.createElement("input");r.id="items",r.type="text",r.value="a,b,c",this.itemsInput=this.rootNode.appendChild(r),this.rootNode.appendChild(n),n.addEventListener("click",this.buttonClicked,!1),this.init()}var t,n,o;return t=e,(n=[{key:"init",value:function(){var e=document.getElementById("items").value.split(",");this.createItems(e)}},{key:"createItems",value:function(e){var t=this;e.forEach((function(e){var n=document.createElement("div");n.className="item",n.innerHTML=e,t.rootNode.appendChild(n)}))}},{key:"deleteItems",value:function(){for(var e=document.getElementsByClassName("item"),t=e.length,n=0;n<t;n++)e[0].remove()}},{key:"buttonClicked",value:function(){this.deleteItems();var e=document.getElementById("items").value.split(",");console.log(e),function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}}(e),console.log(e),this.createItems(e)}}])&&r(t.prototype,n),o&&r(t,o),e}();t.Anyrandomizer=o,window.addEventListener("load",(function(){new o(document.getElementById("anyrandomizer"))}))}});