(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{211:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return c})),r.d(e,"metadata",(function(){return s})),r.d(e,"rightToc",(function(){return u})),r.d(e,"default",(function(){return p}));var n=r(1),o=r(9),i=(r(0),r(247)),a=r(248),c={id:"view-history",title:"View History"},s={id:"planning/others/view-history",title:"View History",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/planning/others/view-history.mdx",permalink:"/docs/planning/others/view-history"},u=[],l={rightToc:u};function p(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Using the View History option, you will be able to view the allocation\nand change history. 'Reset all' would delete all the allocation\nadjustments made to the series. 'Restore to this step' traces back to\nthe selected step (see Figure below)."),Object(i.b)("img",{alt:"View History",src:Object(a.a)("/doc-images//pl38.png")}))}p.isMDXComponent=!0},247:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=o.a.createContext({}),l=function(t){var e=o.a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):c({},e,{},t)),r},p=function(t){var e=l(t.components);return o.a.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},y=Object(n.forwardRef)((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,a=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(r),y=n,d=p["".concat(a,".").concat(y)]||p[y]||f[y]||i;return r?o.a.createElement(d,c({ref:e},u,{components:r})):o.a.createElement(d,c({ref:e},u))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,a=new Array(i);a[0]=y;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},248:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(252);var n=r(249);function o(t){var e=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===e?"/":e;if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?r+t.slice(1):r+t}},249:function(t,e,r){"use strict";var n=r(0),o=r(48);e.a=function(){return Object(n.useContext)(o.a)}},250:function(t,e,r){var n=r(66),o=r(23);t.exports=function(t,e,r){if(n(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},251:function(t,e,r){var n=r(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,!"/./"[t](e)}catch(o){}}return!0}},252:function(t,e,r){"use strict";var n=r(17),o=r(34),i=r(250),a="".startsWith;n(n.P+n.F*r(251)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return a?a.call(e,n,r):e.slice(r,r+n.length)===n}})}}]);