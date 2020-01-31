(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),o=(n(0),n(199)),i={id:"ipmt",title:"IPMT"},c={id:"references/formulas/ipmt",title:"IPMT",description:"The IPMT function returns the interest payment for a given period for an investment, based on periodic, constant payments and a constant interest rate.",source:"@site/docs/references/formulas/ipmt.mdx",permalink:"/docs/references/formulas/ipmt",sidebar:"functionSideBar",previous:{title:"PMT",permalink:"/docs/references/formulas/pmt"},next:{title:"FV",permalink:"/docs/references/formulas/fv"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The IPMT function returns the interest payment for a given period for an investment, based on periodic, constant payments and a constant interest rate."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"IPMT (Rate, Per, Nper, PV, ","[FV]",", ","[Type]",")"),Object(o.b)("h2",{id:"arguments"},"Arguments"),Object(o.b)("p",null,"Rate \u2013 The interest rate per period. "),Object(o.b)("p",null,"Per \u2013 The period for which you want to find the interest and must be in the range 1 to Nper."),Object(o.b)("p",null,"Nper \u2013 The total number of periods."),Object(o.b)("p",null,"PV  \u2013  The present value or initial investment. Cash outflows are considered as negative and cash inflows as positive."),Object(o.b)("p",null,"FV \u2013 The future or residual value. This is an optional argument and if omitted, it is considered to be zero."),Object(o.b)("p",null,"Type \u2013 Indicates when the payments are made. Type is zero if payments are made at the end of the period and non-zero if payments are made at the start of the period. This is an optional argument and when omitted, it is considered to be zero."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Consider a $10,000 loan at an annual rate of 10% that is to be paid off in 3 years. All payments are made at the beginning of the month."),Object(o.b)("p",null,"To calculate the interest payment for a specified period, say 8, the formula should be IPMT (Rate/12, Period, Number of Years*12, Loan Amount, 0, 1).\nIPMT is calculated to be $68.45."),Object(o.b)("h2",{id:"excel-equivalent"},"Excel Equivalent"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://support.office.com/en-us/article/IPMT-function-5CCE0AD6-8402-4A41-8D29-61A0B054CB6F"}),"IPMT")))}s.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return n?a.a.createElement(m,c({ref:t},p,{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);