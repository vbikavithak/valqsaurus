(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{138:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),o=(r(0),r(199)),i={id:"range",title:"RANGE"},c={id:"references/formulas/range",title:"RANGE",description:"The RANGE function refers to the values of a node between the specified start and end periods.",source:"@site/docs/references/formulas/range.mdx",permalink:"/docs/references/formulas/range",sidebar:"functionSideBar",previous:{title:"RATE",permalink:"/docs/references/formulas/rate"},next:{title:"LASTNPERIODS",permalink:"/docs/references/formulas/lastnperiods"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The RANGE function refers to the values of a node between the specified start and end periods."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("p",null,".Range (start_index,end_index)"),Object(o.b)("h2",{id:"arguments"},"Arguments"),Object(o.b)("p",null,"start_index \u2013 The starting periods\u2019 index."),Object(o.b)("p",null,"end_index \u2013 The ending periods\u2019 index."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Consider a scenario where the salesperson gets a bonus of 20% if the total sales for the first quarter is greater than the target."),Object(o.b)("p",null,"To achieve this, the formula should be IF (Total Sales.Range(1,3)>Target, Total Sales*0.2,0)."))}u.isMDXComponent=!0},199:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return r?a.a.createElement(b,c({ref:t},s,{components:r})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);