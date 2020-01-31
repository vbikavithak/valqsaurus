(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),o=(n(0),n(199)),i={id:"pv",title:"PV"},c={id:"references/formulas/pv",title:"PV",description:"The PV function returns the present value of an investment based on periodic, constant payments and a constant interest rate.",source:"@site/docs/references/formulas/pv.mdx",permalink:"/docs/references/formulas/pv",sidebar:"functionSideBar",previous:{title:"FV",permalink:"/docs/references/formulas/fv"},next:{title:"CUMIPMT",permalink:"/docs/references/formulas/cumipmt"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],l={rightToc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The PV function returns the present value of an investment based on periodic, constant payments and a constant interest rate."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"PV (Rate, Nper, ","[Pmt]",", FV, ","[Type]",")"),Object(o.b)("h2",{id:"arguments"},"Arguments"),Object(o.b)("p",null,"Rate \u2013 The interest rate per period. "),Object(o.b)("p",null,"Nper \u2013 The total number of periods."),Object(o.b)("p",null,"Pmt \u2013 Equal payments paid out each period during the course of the investment term. This is an optional argument."),Object(o.b)("p",null,"FV  \u2013  The future value of investment. Cash outflows are considered as negative and cash inflows as positive."),Object(o.b)("p",null,"Type \u2013 Indicates when the payments are made. Type is zero if payments are made at the end of the period and non-zero if payments are made at the start of the period. This is an optional argument and when omitted, it is considered to be zero."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Consider a series of $2000 payments made at the end of each year for 6 years. The objective is to calculate the present value where the interest rate is 5%.  "),Object(o.b)("p",null,"To calculate the present value, the formula should bePV (Interest Rate, Number of Periods, PMT,0,0).\nThe present value is calculated to be $10,151.38."),Object(o.b)("h2",{id:"excel-equivalent"},"Excel Equivalent"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://support.office.com/en-us/article/PV-function-23879D31-0E02-4321-BE01-DA16E8168CBD"}),"PV")))}s.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);