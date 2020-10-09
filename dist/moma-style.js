!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.momaStyle=t():e.momaStyle=t()}(this,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){
/*!
 * modernizr v3.5.0
 * Build https://modernizr.com/download?-cssfilters-cssmask-flexbox-touchevents-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */
!function(e,t,n){var o=[],i=[],r={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){i.push({name:e,fn:t,options:n})},addAsyncTest:function(e){i.push({name:null,fn:e})}},s=function(){};function a(e,t){return typeof e===t}s.prototype=r,s=new s;var l=t.documentElement,c="svg"===l.nodeName.toLowerCase();var d=r._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];function u(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):c?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}
/*!
  {
  "name": "CSS Supports",
  "property": "supports",
  "caniuse": "css-featurequeries",
  "tags": ["css"],
  "builderAliases": ["css_supports"],
  "notes": [{
    "name": "W3 Spec",
    "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/648"
  },{
    "name": "W3 Info",
    "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
  }]
  }
  !*/r._prefixes=d;var f="CSS"in e&&"supports"in e.CSS,p="supportsCSS"in e;function h(e,n,o,i){var r,s,a,d,f="modernizr",p=u("div"),h=function(){var e=t.body;return e||((e=u(c?"svg":"body")).fake=!0),e}();if(parseInt(o,10))for(;o--;)(a=u("div")).id=i?i[o]:f+(o+1),p.appendChild(a);return(r=u("style")).type="text/css",r.id="s"+f,(h.fake?h:p).appendChild(r),h.appendChild(p),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(t.createTextNode(e)),p.id=f,h.fake&&(h.style.background="",h.style.overflow="hidden",d=l.style.overflow,l.style.overflow="hidden",l.appendChild(h)),s=n(p,e),h.fake?(h.parentNode.removeChild(h),l.style.overflow=d,l.offsetHeight):p.parentNode.removeChild(p),!!s}s.addTest("supports",f||p);var m=r.testStyles=h;
/*!
  {
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse" : "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
  }
  !*/s.addTest("touchevents",(function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var o=["@media (",d.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,(function(e){n=9===e.offsetTop}))}return n}));var y=r._config.usePrefixes?"Moz O ms Webkit".split(" "):[];r._cssomPrefixes=y;var g=r._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];function b(e,t){return function(){return e.apply(t,arguments)}}r._domPrefixes=g;var w={elem:u("modernizr")};s._q.push((function(){delete w.elem}));var v={style:w.elem.style};function x(e){return e.replace(/([A-Z])/g,(function(e,t){return"-"+t.toLowerCase()})).replace(/^ms-/,"-ms-")}function S(t,n){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(x(t[o]),n))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+x(t[o])+":"+n+")");return h("@supports ("+(i=i.join(" or "))+") { #modernizr { position: absolute; } }",(function(t){return"absolute"==function(t,n,o){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var r=e.console;if(null!==i)o&&(i=i.getPropertyValue(o));else if(r)r[r.error?"error":"log"].call(r,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else i=!n&&t.currentStyle&&t.currentStyle[o];return i}(t,null,"position")}))}}function C(e,t,n,o,i){var r=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+y.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?function(e,t,n,o){if(o=!a(o,"undefined")&&o,!a(n,"undefined")){var i=S(e,n);if(!a(i,"undefined"))return i}for(var r,s,l,c,d,f=["modernizr","tspan","samp"];!v.style&&f.length;)r=!0,v.modElem=u(f.shift()),v.style=v.modElem.style;function p(){r&&(delete v.style,delete v.modElem)}for(l=e.length,s=0;s<l;s++)if(c=e[s],d=v.style[c],~(""+c).indexOf("-")&&(c=c.replace(/([a-z])-([a-z])/g,(function(e,t,n){return t+n.toUpperCase()})).replace(/^-/,"")),void 0!==v.style[c]){if(o||a(n,"undefined"))return p(),"pfx"!=t||c;try{v.style[c]=n}catch(e){}if(v.style[c]!=d)return p(),"pfx"!=t||c}return p(),!1}(s,t,o,i):function(e,t,n){var o;for(var i in e)if(e[i]in t)return!1===n?e[i]:a(o=t[e[i]],"function")?b(o,n||t):o;return!1}(s=(e+" "+g.join(r+" ")+r).split(" "),t,n)}function T(e,t,n){return C(e,void 0,void 0,t,n)}s._q.unshift((function(){delete v.style})),r.testAllProps=C,r.testAllProps=T,
/*!
  {
  "name": "CSS Filters",
  "property": "cssfilters",
  "caniuse": "css-filters",
  "polyfills": ["polyfilter"],
  "tags": ["css"],
  "builderAliases": ["css_filters"],
  "notes": [{
    "name": "MDN article on CSS filters",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
  }]
  }
  !*/
s.addTest("cssfilters",(function(){if(s.supports)return T("filter","blur(2px)");var e=u("a");return e.style.cssText=d.join("filter:blur(2px); "),!!e.style.length&&(void 0===t.documentMode||t.documentMode>9)})),
/*!
  {
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]
  }
  !*/
s.addTest("flexbox",T("flexBasis","1px",!0)),
/*!
  {
  "name": "CSS Mask",
  "caniuse": "css-masks",
  "property": "cssmask",
  "tags": ["css"],
  "builderAliases": ["css_mask"],
  "notes": [
    {
      "name": "Webkit blog on CSS Masks",
      "href": "https://webkit.org/blog/181/css-masks/"
    },
    {
      "name": "Safari Docs",
      "href": "https://developer.apple.com/library/safari/#documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Masks/Masks.html"
    },
    {
      "name": "CSS SVG mask",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/mask"
    },
    {
      "name": "Combine with clippaths for awesomeness",
      "href": "https://generic.cx/for/webkit/test.html"
    }
  ]
  }
  !*/
s.addTest("cssmask",T("maskRepeat","repeat-x",!0));
/*!
  {
  "name": "CSS Custom Properties",
  "property": "csscustomproperties",
  "caniuse": "css-variables",
  "tags": ["css"],
  "builderAliases": ["css_customproperties"],
  "notes": [{
    "name": "MDN",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/--*"
  },{
    "name": "W3 Spec",
    "href": "https://drafts.csswg.org/css-variables/"
  }]
  }
  !*/
var E=e.CSS&&e.CSS.supports.bind(e.CSS)||e.supportsCSS;s.addTest("customproperties",!!E&&(E("--f:0")||E("--f",0))),function(){var e,t,n,r,l,c;for(var d in i)if(i.hasOwnProperty(d)){if(e=[],(t=i[d]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=a(t.fn,"function")?t.fn():t.fn,l=0;l<e.length;l++)1===(c=e[l].split(".")).length?s[c[0]]=r:(!s[c[0]]||s[c[0]]instanceof Boolean||(s[c[0]]=new Boolean(s[c[0]])),s[c[0]][c[1]]=r),o.push((r?"":"no-")+c.join("-"))}}(),function(e){var t=l.className,n=s._config.classPrefix||"";if(c&&(t=t.baseVal),s._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}s._config.enableClasses&&(t+=" "+n+e.join(" "+n),c?l.className.baseVal=t:l.className=t)}(o),delete r.addTest,delete r.addAsyncTest;for(var M=0;M<s._q.length;M++)s._q[M]();e.Modernizr=s}(window,document)},function(e,t,n){var o,i,r;i=[],void 0===(r="function"==typeof(o=()=>{let e,t,n;const o={sel:[],el:[]};let i=!1,r=!1;function s(){}function a(e,t){Array.prototype.forEach.call(e,t)}function l(){this.reset()}function c(e){return t.some(t=>t.start<e&&e<t.end)}function d(e,o,i){if(0===i)e.style.whiteSpace=o,n=0,t=[],function e(o,i){if(o.nodeType===o.ELEMENT_NODE)if("nowrap"===window.getComputedStyle(o).whiteSpace){const e=o.outerHTML.length;t.push({start:n,end:n+e}),n+=e}else a(o.childNodes,t=>{e(t,!0)}),i&&(n+=o.outerHTML.length-o.innerHTML.length);else o.nodeType===o.COMMENT_NODE?n+=o.length+7:o.nodeType===o.PROCESSING_INSTRUCTION_NODE?n+=o.length+2:n+=o.length}(e,!1),e.style.whiteSpace="nowrap";else{const e=[];t.forEach(t=>{t.start>i&&e.push({start:t.start-i,end:t.end-i})}),t=e}}function u(e,t,n){const o=(t=t.trim()).split(" ").length;if(t+=" ",o<2)return t;const i=document.createElement("span");i.innerHTML=t,e.appendChild(i);const r=i.offsetWidth;i.parentNode.removeChild(i);const s=Math.floor((n-r)/(o-1));i.style.wordSpacing=s+"px",i.setAttribute("data-owner","balance-text-justify");const a=document.createElement("div");return a.appendChild(i),a.innerHTML}function f(t,n){const o=/([^\S\u00a0]|-|\u2014|\u2013|\u00ad)(?![^<]*>)/g;let i;if(!e)for(e=[],i=o.exec(t);null!==i;)c(i.index)||e.push(i.index),i=o.exec(t);return-1!==e.indexOf(n)}function p(e,t){return 0===t||t===e.length||f(e,t-1)&&!f(e,t)}function h(e,t,n,o,i,r,s){let a;if(t&&"string"==typeof t)for(;;){for(;!p(t,r);)r+=i;if(e.innerHTML=t.substr(0,r),a=e.offsetWidth,i<0){if(a<=o||a<=0||0===r)break}else if(o<=a||n<=a||r===t.length)break;r+=i}s.index=r,s.width=a}function m(e){return e?"string"==typeof e?document.querySelectorAll(e):e.tagName&&e.querySelectorAll?[e]:e:[]}function y(t){a(m(t),t=>{!function(e){let t=e.querySelectorAll('br[data-owner="balance-text-hyphen"]');a(t,e=>{e.outerHTML=""}),t=e.querySelectorAll('br[data-owner="balance-text"]'),a(t,e=>{e.outerHTML=" "});let n=e.querySelectorAll('span[data-owner="balance-text-softhyphen"]');if(n.length>0&&a(n,e=>{const t=document.createTextNode("­");e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e)}),n=e.querySelectorAll('span[data-owner="balance-text-justify"]'),n.length>0){let t="";a(n,e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e.innerHTML=t}}(t);const n=t.style.whiteSpace,o=t.style.float,i=t.style.display,r=t.style.position,s=t.style.lineHeight;t.style.lineHeight="normal";const c=t.offsetWidth,f=t.offsetHeight;t.style.whiteSpace="nowrap",t.style.float="none",t.style.display="inline",t.style.position="static";let p=t.offsetWidth;const m=t.offsetHeight,y="pre-wrap"===n?0:function(e,t){const n=document.createElement("div");n.style.display="block",n.style.position="absolute",n.style.bottom=0,n.style.right=0,n.style.width=0,n.style.height=0,n.style.margin=0,n.style.padding=0,n.style.visibility="hidden",n.style.overflow="hidden";const o=document.createElement("span");o.style.fontSize="2000px",o.innerHTML="&nbsp;",n.appendChild(o),e.appendChild(n);const i=o.getBoundingClientRect();return n.parentNode.removeChild(n),t/(i.height/i.width)}(t,m);if(c>0&&p>c&&p<5e3){let o=t.innerHTML,i="",r="";const s=function(e){return"justify"===(e.currentStyle||window.getComputedStyle(e,null)).textAlign}(t);let a,g,b,w,v,x,S,C=Math.round(f/m),T=0;for(;C>1;)e=null,d(t,n,T),a=Math.round((p+y)/C-y),g=Math.round((o.length+1)/C)-1,b=new l,h(t,o,c,a,-1,g,b),w=new l,g=b.index,h(t,o,c,a,1,g,w),b.reset(),g=w.index,h(t,o,c,a,-1,g,b),v=0===b.index?w.index:c<w.width||b.index===w.index||Math.abs(a-b.width)<Math.abs(w.width-a)?b.index:w.index,r=o.substr(0,v).replace(/\s$/,""),S=Boolean(r.match(/\u00ad$/)),S&&(r=r.replace(/\u00ad$/,'<span data-owner="balance-text-softhyphen">-</span>')),s?i+=u(t,r,c):(i+=r,x=S||Boolean(r.match(/(-|\u2014|\u2013)$/)),i+=x?'<br data-owner="balance-text-hyphen" />':'<br data-owner="balance-text" />'),o=o.substr(v),T=v,C--,t.innerHTML=o,p=t.offsetWidth;t.innerHTML=s?i+u(t,o,c):i+o}t.style.whiteSpace=n,t.style.float=o,t.style.display=i,t.style.position=r,t.style.lineHeight=s})}function g(){const e=m(o.sel.join(","));y(Array.prototype.concat.apply(o.el,e))}function b(){var e;i||(e=g,"loading"!==document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",()=>{"loading"!==document.readyState&&e()}),window.addEventListener("load",g),window.addEventListener("resize",function(e,t,n,...o){let i;return function(){const r=this;i?clearTimeout(i):n&&e.apply(r,o),i=setTimeout((function(){n||e.apply(r,o),i=null}),t||100)}}(g)),i=!0)}function w(e,t){e?t&&!0===t.watch?function(e){"string"==typeof e?o.sel.push(e):a(m(e),e=>{o.el.push(e)}),b(),g()}(e):t&&!1===t.watch?function(e){"string"==typeof e?o.sel=o.sel.filter(t=>t!==e):(e=m(e),o.el=o.el.filter(t=>-1===e.indexOf(t)))}(e):y(e):r||(o.sel.push(".balance-text"),b(),r=!0)}return l.prototype.reset=function(){this.index=0,this.width=0},w.updateWatched=g,function(){if("undefined"==typeof window)return!1;const{style:e}=document.documentElement;return e.textWrap||e.WebkitTextWrap||e.MozTextWrap||e.MsTextWrap}()?(s.updateWatched=s,s):w})?o.apply(t,i):o)||(e.exports=r)},function(e,t,n){"use strict";n.r(t),n.d(t,"MoMAStyle",(function(){return L})),n.d(t,"MoMABalanceText",(function(){return d})),n.d(t,"Focus",(function(){return f})),n.d(t,"Viewporter",(function(){return v})),n.d(t,"AccentColor",(function(){return T})),n.d(t,"Modernizr",(function(){return M.a})),n.d(t,"Util",(function(){return o}));var o={};n.r(o),n.d(o,"IsMobileOrTablet",(function(){return i})),n.d(o,"DocumentReady",(function(){return r})),n.d(o,"WindowHasSize",(function(){return s})),n.d(o,"GetElementsList",(function(){return a}));const i=()=>{const e=/iOS|iPhone|iPad/g.test(navigator.userAgent);return/Android/g.test(navigator.userAgent)||e},r=e=>{"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e)},s=()=>window.innerHeight>0&&window.innerWidth>0,a=e=>{if(!e)return[];if("string"==typeof e)return document.querySelectorAll(e);if(e.tagName&&e.querySelectorAll)return[e];let t=[].slice.call(e);return t=t.filter(e=>0!==e.getBoundingClientRect().height),t};var l=n(1),c=n.n(l);class d{constructor(e){this.className=e||"balance-text",this.resizeTimer=null,this.rotateTimer=null,this.styleSheetCreated=document.querySelectorAll('style[data-owner="balance-text"]').length>0,this.styleSheetCreated||this.createStyleSheet()}initInteraction(){window.addEventListener("load",()=>{s()&&this.balance()}),window.addEventListener("resize",()=>{!i()&&s()&&(clearTimeout(this.resizeTimer),this.resizeTimer=this.balanceWithDelay(100))}),window.addEventListener("orientationchange",()=>{s()&&(clearTimeout(this.rotateTimer),this.rotateTimer=this.balanceWithDelay(100))})}createStyleSheet(e){let t=document.createElement("style");t.setAttribute("type","text/css"),t.setAttribute("data-owner","balance-text"),t.innerHTML="\n      .balance-text\\:measure {\n        -webkit-box-orient: inline-axis !important;\n        -webkit-line-clamp: none        !important;\n        border:             none        !important;\n        box-sizing:         border-box  !important;\n        height:             auto        !important;\n        margin:             initial     !important;\n        max-height:         initial     !important;\n        max-width:          initial     !important;\n        min-height:         initial     !important;\n        min-width:          initial     !important;\n        overflow:           visible     !important;\n        padding:            initial     !important;\n        transform:          none        !important;\n        width:              auto        !important;\n      }\n      .balance-text\\:measure:after,\n      .balance-text\\:measure:before {\n        display: none !important;\n      }\n      .balance-text\\:hold {\n        display: none !important;\n      }\n    ",e&&(t.onload=e),document.head.appendChild(t),this.styleSheetCreated=!0}balance(e){if(e||(e="."+this.className),this.styleSheetCreated){let t=a(e);t.forEach(e=>{e.setAttribute("data-inline-css",e.style.cssText),e.style.cssText="",e.innerHTML=e.innerHTML.replace(/\u00ad/g,'<span data-owner="balance-text-placeholder-softhyphen"></span>'),e.classList.add("balance-text:measure")}),c()(t),t.forEach(e=>{e.classList.remove("balance-text:measure"),e.innerHTML=e.innerHTML.replace(/<span data-owner='balance-text-placeholder-softhyphen'><\/span>/g,"&shy;"),e.style.cssText=e.getAttribute("data-inline-css"),e.removeAttribute("data-inline-css")}),[].slice.call(document.getElementsByClassName("balance-text:hold")).forEach(e=>e.classList.remove("balance-text:hold"))}else this.createStyleSheet(()=>{this.balance(e)})}balanceWithDelay(e,t){return setTimeout(()=>{this.balance(t)},e||250)}toggleBalanceTextClass(e){return this.shouldBalanceText(e)?this.className:""}shouldBalanceText(e){return null!==e.replace(/(^\s)|(\s$)/,"").replace(/<nobr>.*<\/nobr>/,"!!nobr!!").match(/(.*(\s|-|–|—|&ndash;|&mdash;).*){2,}/)}}var u=9;class f{constructor(){p(),h()}}const p=()=>{document.body.addEventListener("keydown",e=>{e.which==u&&document.documentElement.classList.add("show-focus")})},h=()=>{document.body.addEventListener("click",e=>{0==e.clientX&&0==e.clientY||document.documentElement.classList.remove("show-focus")})},m=e=>{const t=document.createElement("div");t.style.cssText=e,document.documentElement.insertBefore(t,document.documentElement.firstChild);const n={width:t.offsetWidth,height:t.offsetHeight};return document.documentElement.removeChild(t),n},y=(e,t)=>{document.documentElement.style.setProperty(e," "+t/10+"rem")},g=()=>{const e=m("position: fixed; top: 0; bottom: 0;").height,t=window.innerHeight,n=m("position: fixed; top: 0; height: 100vh").height-Math.min(e,t);y("--vh-offset",n),setTimeout(()=>{window.dispatchEvent(new Event("updatedVHOffset"))},100)},b=()=>{const e=window.innerHeight;y("--visible-height",e),setTimeout(()=>{window.dispatchEvent(new Event("updatedVisibleHeight"))},100)},w=()=>{const e=m("position: fixed; top: 0; width: 100%; height: 200vh;").width,t=window.innerWidth-e;y("--scrollbar-width",t)};class v{constructor(){document.addEventListener("DOMContentLoaded",()=>{w(),b(),g()}),window.addEventListener("load",()=>{setTimeout(b,500),setTimeout(g,500)}),this.orientationChanged=!1,window.addEventListener("orientationchange",()=>{this.orientationChanged=!0,setTimeout(()=>this.orientationChanged=!1,750)}),window.addEventListener("resize",()=>{w(),b(),this.orientationChanged&&g()})}}const x={0:"accent-color--january",1:"accent-color--february",2:"accent-color--march",3:"accent-color--april",4:"accent-color--may",5:"accent-color--june",6:"accent-color--july",7:"accent-color--august",8:"accent-color--september",9:"accent-color--october",10:"accent-color--november",11:"accent-color--december"},S="sessionHighlightColor",C=/accent-color--\S+/;class T{constructor(){this.colorKey=null,this.sessionColorIsSet()?this.getSessionColor():this.setRandomSessionColor(),this.applySessionColor()}sessionColorIsSet(){return e=S,document.cookie.indexOf(e)>-1;var e}getSessionColor(){const e=new RegExp(`(?:(?:^|.*;\\s*)${S}\\s*\\=\\s*([^;]*).*$)|^.*$`),t=document.cookie.replace(e,"$1");this.colorKey=parseInt(t)}setRandomSessionColor(){const e=Object.keys(x).length-1;this.colorKey=((e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e))(0,e),document.cookie=`${S}=${this.colorKey}; path=/;`}applySessionColor(){const e=document.documentElement.classList;e.forEach(t=>{C.test(t)&&e.remove(t)}),e.add(x[this.colorKey])}}var E=n(0),M=n.n(E);class L{constructor(){this.viewporter=new v,this.focus=new f,this.accentColor=new T,this.balanceText=new d,this.balanceText.initInteraction()}}}])}));