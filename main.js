!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=document.createElement("button"),this.element.classList.add("btn"),this.element.type="submit",this.element.textContent="Click to toggle popover"}var t,n,o;return t=e,(n=[{key:"renderButton",value:function(e){e.appendChild(this.element)}}])&&i(t.prototype,n),o&&i(t,o),e}();function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=document.createElement("div"),this.element.classList.add("tooltip"),this.title=document.createElement("h2"),this.text=document.createElement("p"),this.title.classList.add("tooltip-title"),this.text.classList.add("tooltip-text"),this.text.textContent="And here's some amazing content. It's very engaging. Right?",this.title.textContent="Popover title",this.element.appendChild(this.title),this.element.appendChild(this.text)}var t,n,i;return t=e,(n=[{key:"onButton",value:function(e){e.preventDefault(),this.element.classList.toggle("active")}}])&&r(t.prototype,n),i&&r(t,i),e}(),a=new o,u=new l,c=document.createElement("div");c.classList.add("container"),document.body.appendChild(c),document.body.appendChild(u.element),c.appendChild(a.element),a.element.addEventListener("click",(function(e){return u.onButton(e)}))}]);
//# sourceMappingURL=main.js.map