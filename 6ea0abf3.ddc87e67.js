(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(191)),a=(n(192),n(195)),c={id:"modelling-basics",title:"Modelling basics",sidebar_label:"Basics"},l={unversionedId:"how_to_videos/model/modelling-basics",id:"how_to_videos/model/modelling-basics",isDocsHomePage:!1,title:"Modelling basics",description:"Modelling basics",source:"@site/docs/how_to_videos/model/modelling-basics.mdx",slug:"/how_to_videos/model/modelling-basics",permalink:"/docs/how_to_videos/model/modelling-basics",version:"current",sidebar_label:"Basics",sidebar:"sideBar",previous:{title:"Get Started",permalink:"/docs/how_to_videos/get-started"},next:{title:"Nodes",permalink:"/docs/how_to_videos/model/nodes"}},s=[{value:"Modelling basics",id:"modelling-basics",children:[]},{value:"Model Conversion",id:"model-conversion",children:[]}],d={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"modelling-basics"},"Modelling basics"),Object(i.b)("p",null,"Learn how to activate ValQ visual using your data and understand about the different types of ",Object(i.b)("strong",{parentName:"p"},"Value Driver Tree")," models."),Object(i.b)(a.a,{video:"https://player.vimeo.com/video/438788150",responsive:!0,mdxType:"Vimeo"}),Object(i.b)("h2",{id:"model-conversion"},"Model Conversion"),Object(i.b)("p",null,"Learn how to instantly convert a Simple Model into an Advanced Model"),Object(i.b)(a.a,{video:"https://player.vimeo.com/video/438794608",responsive:!0,mdxType:"Vimeo"}))}u.isMDXComponent=!0},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,b=u["".concat(a,".").concat(f)]||u[f]||p[f]||i;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},192:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(22),o=n(193);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+d:d}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},193:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n.n(r),i=function(e){return o.a.createElement("div",null,o.a.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},o.a.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:e.video,width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen"})))}}}]);