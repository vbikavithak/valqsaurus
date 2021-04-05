(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{128:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),i=(t(0),t(190)),o={id:"current_series_id",title:"CURRENT_SERIES_ID"},s={unversionedId:"references/formulas/current_series_id",id:"references/formulas/current_series_id",isDocsHomePage:!1,title:"CURRENT_SERIES_ID",description:"Syntax",source:"@site/docs/references/formulas/current_series_id.mdx",slug:"/references/formulas/current_series_id",permalink:"/references/formulas/current_series_id",version:"current",sidebar:"functionSideBar",previous:{title:"CURRENT_SERIES",permalink:"/references/formulas/current_series"},next:{title:"CURRENT_PERIOD_INDEX",permalink:"/references/formulas/current_period_index"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],u={rightToc:c};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"CURRENT_SERIES_ID == 'series'? value1:value2\n")),Object(i.b)("h2",{id:"arguments"},"Arguments"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"series")," - Refers to the series label ie, Forecast, Budget etc."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"value1")," \u2013 The value that should be assigned to the series mentioned in the argument list. If series is mentioned as Forecast, value1 is assigned as the series Forecast."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"value2")," \u2013 The value that should be assigned to the series other than the one mentioned in the argument list. If series is mentioned as Forecast, value1 is assigned as the series Comparison."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"Consider a scenario where you want to assign 100 as the monthly Forecast value and 85 as the monthly Budget value."),Object(i.b)("p",null,"This can be achieved by using the formula "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"CURRENT_SERIES_ID == 'Forecast'? 100:85.\n")))}l.isMDXComponent=!0},190:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),b=n,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return t?a.a.createElement(f,s(s({ref:r},u),{},{components:t})):a.a.createElement(f,s({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);