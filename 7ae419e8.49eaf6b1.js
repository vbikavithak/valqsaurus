(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{134:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),o=(r(0),r(191)),i=(r(192),r(195)),s={id:"data-series",title:"Data Series",sidebar_label:"Data Series"},c={unversionedId:"how_to_videos/model/data-series",id:"how_to_videos/model/data-series",isDocsHomePage:!1,title:"Data Series",description:"Data Series Manager",source:"@site/docs/how_to_videos/model/data-series.mdx",slug:"/how_to_videos/model/data-series",permalink:"/docs/how_to_videos/model/data-series",version:"current",sidebar_label:"Data Series",sidebar:"sideBar",previous:{title:"General",permalink:"/docs/how_to_videos/model/general"},next:{title:"Create a New Data Series",permalink:"/docs/how_to_videos/plan/data-series"}},u=[{value:"Data Series Manager",id:"data-series-manager",children:[]},{value:"Customize Time Aggregation Labels",id:"customize-time-aggregation-labels",children:[]}],l={rightToc:u};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"data-series-manager"},"Data Series Manager"),Object(o.b)("p",null,"Users can view, manage and customize data series for better synchronization of data source values and time period labels"),Object(o.b)(i.a,{video:"https://player.vimeo.com/video/439172908",responsive:!0,mdxType:"Vimeo"}),Object(o.b)("h2",{id:"customize-time-aggregation-labels"},"Customize Time Aggregation Labels"),Object(o.b)("p",null,"Allows you to override and customize labels of Time Aggregations which appears on navigation panel & node pop-up screen"),Object(o.b)(i.a,{video:"https://player.vimeo.com/video/439200422",responsive:!0,mdxType:"Vimeo"}))}d.isMDXComponent=!0},191:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return r?a.a.createElement(m,s(s({ref:t},u),{},{components:r})):a.a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},192:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(22),a=r(193);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,s=void 0!==i&&i,c=o.absolute,u=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(s)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+l:l}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},193:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},195:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0),a=r.n(n),o=function(e){return a.a.createElement("div",null,a.a.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},a.a.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:e.video,width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen"})))}}}]);