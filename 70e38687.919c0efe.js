(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{157:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(9),i=(r(0),r(202)),o={id:"current_series_id",title:"CURRENT_SERIES_ID"},c={id:"references/formulas/current_series_id",title:"CURRENT_SERIES_ID",description:"## Syntax",source:"@site/docs/references/formulas/current_series_id.mdx",permalink:"/docs/references/formulas/current_series_id",sidebar:"functionSideBar",previous:{title:"CURRENT_SERIES",permalink:"/docs/references/formulas/current_series"},next:{title:"CURRENT_PERIOD_INDEX",permalink:"/docs/references/formulas/current_period_index"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],u={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"CURRENT_SERIES_ID == 'series'? value1:value2\n")),Object(i.b)("h2",{id:"arguments"},"Arguments"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"series")," - Refers to the series label ie, Forecast, Budget etc."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"value1")," \u2013 The value that should be assigned to the series mentioned in the argument list. If series is mentioned as Forecast, value1 is assigned as the series Forecast."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"value2")," \u2013 The value that should be assigned to the series other than the one mentioned in the argument list. If series is mentioned as Forecast, value1 is assigned as the series Comparison."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"Consider a scenario where you want to assign 100 as the monthly Forecast value and 85 as the monthly Budget value."),Object(i.b)("p",null,"This can be achieved by using the formula "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"CURRENT_SERIES_ID == 'Forecast'? 100:85.\n")))}l.isMDXComponent=!0},202:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return r?a.a.createElement(f,c({ref:t},u,{components:r})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);