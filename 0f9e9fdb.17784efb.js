(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{191:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),l=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||o;return t?i.a.createElement(m,c(c({ref:n},s),{},{components:t})):i.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},192:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return a}));var r=t(22),i=t(193);function o(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,c=void 0!==a&&a,u=o.absolute,s=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(i.b)(t))return t;if(c)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+l:l}(o,t,e,n)}}}function a(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},193:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}))},195:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0),i=t.n(r),o=function(e){return i.a.createElement("div",null,i.a.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},i.a.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:e.video,width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen"})))}},70:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(7),o=(t(0),t(191)),a=(t(192),t(195)),c={id:"scenario-planning",title:"Scenario Planning",sidebar_label:"Scenario Planning & What-if Analysis"},u={unversionedId:"how_to_videos/simulate/scenario-planning",id:"how_to_videos/simulate/scenario-planning",isDocsHomePage:!1,title:"Scenario Planning",description:"Create, copy, edit & compare multiple scenarios where each simulation on individual nodes helps you perform seamless and realtime 'What-if' analysis",source:"@site/docs/how_to_videos/simulate/scenario-planning.mdx",slug:"/how_to_videos/simulate/scenario-planning",permalink:"/docs/how_to_videos/simulate/scenario-planning",version:"current",sidebar_label:"Scenario Planning & What-if Analysis",sidebar:"sideBar",previous:{title:"Introduction",permalink:"/docs/how_to_videos/simulate/intro"},next:{title:"Sub Models",permalink:"/docs/how_to_videos/simulate/sub-models"}},s=[],l={rightToc:s};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Create, copy, edit & compare multiple scenarios where each simulation on individual nodes helps you perform seamless and realtime 'What-if' analysis"),Object(o.b)(a.a,{video:"https://player.vimeo.com/video/439241500",responsive:!0,mdxType:"Vimeo"}))}p.isMDXComponent=!0}}]);