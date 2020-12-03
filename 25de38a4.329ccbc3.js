(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{191:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return b}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var r=a.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=s(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=t,b=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return n?a.a.createElement(b,i(i({ref:r},l),{},{components:n})):a.a.createElement(b,i({ref:r},l))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return i})),n.d(r,"rightToc",(function(){return u})),n.d(r,"default",(function(){return s}));var t=n(3),a=n(7),o=(n(0),n(191)),c={id:"getcurrentrange",title:"GETCURRENTRANGE"},i={unversionedId:"references/formulas/getcurrentrange",id:"references/formulas/getcurrentrange",isDocsHomePage:!1,title:"GETCURRENTRANGE",description:"The GETCURRENTRANGE funtion returns a range of value based on active period and period selection.",source:"@site/docs/references/formulas/getcurrentrange.mdx",slug:"/references/formulas/getcurrentrange",permalink:"/docs/references/formulas/getcurrentrange",version:"current",sidebar:"functionSideBar",previous:{title:"GETROWVALUE",permalink:"/docs/references/formulas/getrowvalue"},next:{title:"findByID",permalink:"/docs/references/formulas/findbyid"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:u};function s(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The GETCURRENTRANGE funtion returns a range of value based on active period and period selection."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"DS.(SERIES).GETCURRENTRANGE()"),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Consider a scenario where you want the sum of baseline sales to change based on the selections in the\nNavigation Panel -(Simulation Period and Value Display)."),Object(o.b)("p",null,"This can be achieved by using the formula\nSUM(DS.Baseline.GETCURRENTRANGE())"))}s.isMDXComponent=!0}}]);