!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty;function i(e,t){return Array.isArray(e)?function(e,t){for(var n,r="",o="",a=Array.isArray(t),l=0;l<e.length;l++)(n=i(e[l]))&&(a&&t[l]&&(n=c(n)),r=r+o+n,o=" ");return r}(e,t):e&&"object"==typeof e?function(e){var t="",n="";for(var i in e)i&&e[i]&&r.call(e,i)&&(t=t+n+i,n=" ");return t}(e):e||""}function o(e){if(!e)return"";if("object"==typeof e){var t="";for(var n in e)r.call(e,n)&&(t=t+n+":"+e[n]+";");return t}return e+""}function a(e,t,n,r){if(!1===t||null==t||!t&&("class"===e||"style"===e))return"";if(!0===t)return" "+(r?e:e+'="'+e+'"');var i=typeof t;return"object"!==i&&"function"!==i||"function"!=typeof t.toJSON||(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),n||-1===t.indexOf('"'))?(n&&(t=c(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"}t.merge=function e(t,n){if(1===arguments.length){for(var r=t[0],i=1;i<t.length;i++)r=e(r,t[i]);return r}for(var a in n)if("class"===a){var l=t[a]||[];t[a]=(Array.isArray(l)?l:[l]).concat(n[a]||[])}else if("style"===a){l=(l=o(t[a]))&&";"!==l[l.length-1]?l+";":l;var c=o(n[a]);c=c&&";"!==c[c.length-1]?c+";":c,t[a]=l+c}else t[a]=n[a];return t},t.classes=i,t.style=o,t.attr=a,t.attrs=function(e,t){var n="";for(var l in e)if(r.call(e,l)){var c=e[l];if("class"===l){c=i(c),n=a(l,c,!1,t)+n;continue}"style"===l&&(c=o(c)),n+=a(l,c,!1,t)}return n};var l=/["&<>]/;function c(e){var t=""+e,n=l.exec(t);if(!n)return e;var r,i,o,a="";for(r=n.index,i=0;r<t.length;r++){switch(t.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}i!==r&&(a+=t.substring(i,r)),i=r+1,a+=o}return i!==r?a+t.substring(i,r):a}t.escape=c,t.rethrow=function e(t,r,i,o){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&r||o))throw t.message+=" on line "+i,t;try{o=o||n(7).readFileSync(r,"utf8")}catch(n){e(t,null,i)}var a=3,l=o.split("\n"),c=Math.max(i-a,0),s=Math.min(l.length,i+a);a=l.slice(c,s).map((function(e,t){var n=t+c+1;return(n==i?"  > ":"    ")+n+"| "+e})).join("\n");throw t.path=r,t.message=(r||"Pug")+":"+i+"\n"+a+"\n\n"+t.message,t}},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(6)},function(e,t,n){},function(e,t,n){var r=n(4),i=n(5);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],s=n[c]||0,u="".concat(c," ").concat(s);n[c]=s+1;var f=l(u),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:u,updater:g(d,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,f=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function v(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function g(e,t){var n,r,i;if(t.singleton){var o=h++;n=p||(p=s(t)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=s(t),r=v.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=l(n[r]);a[i].references--}for(var o=c(e,t),s=0;s<n.length;s++){var u=l(n[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=o}}}},function(e,t,n){},function(e,t,n){n(0);e.exports=function(e){var t,r="";return r=r+'<!DOCTYPE html><!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body></body><div class="colorsandtype">'+(null==(t=n(8).call(this,e))?"":t)+'<div class="colors"><div class="Rectangle1"></div><div class="Rectangle2"></div><div class="Rectangle3"></div><div class="Rectangle4"></div><div class="Rectangle5"></div><div class="Rectangle6"></div><div class="Rectangle7"></div></div></div></html>'}},function(e,t){},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<div class="emblem"><div class="emblem__circle"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M24 48C10.7647 48 0 37.2353 0 24C0 10.7647 10.7647 0 24 0C37.2353 0 48 10.7647 48 24C48 37.2353 37.2353 48 24 48ZM24 2.82353C12.3176 2.82353 2.82353 12.3176 2.82353 24C2.82353 35.6824 12.3176 45.1765 24 45.1765C35.6824 45.1765 45.1765 35.6824 45.1765 24C45.1765 12.3176 35.6824 2.82353 24 2.82353Z" fill="#1F2041" fill-opacity="0.25"/>\n</svg></div><div class="emblem__left"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M12.9989 14.4712C12.2224 14.4712 11.5871 13.8359 11.5871 13.0594C11.5871 7.6241 7.14003 3.17705 1.70473 3.17705C0.928263 3.17705 0.292969 2.54175 0.292969 1.76528C0.292969 0.98881 0.928263 0.353516 1.70473 0.353516C8.72826 0.353516 14.4106 6.03587 14.4106 13.0594C14.4106 13.8359 13.7753 14.4712 12.9989 14.4712Z" fill="#1F2041" fill-opacity="0.25"/>\n</svg></div><div class="emblem__right"><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M11.7068 1.76528C11.7068 2.54175 11.0715 3.17704 10.295 3.17704C6.9421 3.17704 3.9421 4.87116 2.17739 7.44763C1.78915 6.4594 1.33033 5.54175 0.765625 4.69469C3.09504 2.01234 6.51857 0.353516 10.295 0.353516C11.0715 0.353516 11.7068 0.98881 11.7068 1.76528Z" fill="#1F2041" fill-opacity="0.25"/>\n</svg></div></div>'}}]);