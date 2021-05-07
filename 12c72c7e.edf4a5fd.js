(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{192:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},j=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,i=O(e,["components","mdxType","originalType","parentName"]),j=u(a),o=n,m=j["".concat(b,".").concat(o)]||j[o]||p[o]||l;return a?r.a.createElement(m,c(c({ref:t},i),{},{components:a})):r.a.createElement(m,c({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=o;var c={};for(var O in t)hasOwnProperty.call(t,O)&&(c[O]=t[O]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var i=2;i<l;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),l=(a(0),a(192)),b={id:"averageexzero",title:"AVERAGEEXZERO"},c={unversionedId:"references/formulas/averageexzero",id:"references/formulas/averageexzero",isDocsHomePage:!1,title:"AVERAGEEXZERO",description:"The AVERAGEEXZERO function returns the average (arithmetic mean) of its arguments excluding zeros, which can be numbers or node references.",source:"@site/docs/references/formulas/averageexzero.mdx",slug:"/references/formulas/averageexzero",permalink:"/references/formulas/averageexzero",version:"current",sidebar:"functionSideBar",previous:{title:"AVERAGE",permalink:"/references/formulas/average"},next:{title:"AVERAGEEXNEG",permalink:"/references/formulas/averageexneg"}},O=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],i={rightToc:O};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"AVERAGEEXZERO")," function returns the average (arithmetic mean) of its arguments excluding zeros, which can be numbers or node references."),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"AVERAGEEXZERO (value1,[value2]....)\n")),Object(l.b)("h2",{id:"arguments"},"Arguments"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"value1")," \u2013 The first node or number to be averaged. This is a required argument."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"value2, \u2026"),"  \u2013 The additional nodes or numbers to be averaged. These are optional arguments."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("p",null,"Consider sales of a particular product across different regions East, South, Central and West to be as follows.\nAssume if sales for a particular period is zero, the product was withdrawn from the market and hence that region need not be considered when calculating average sales.",Object(l.b)("br",{parentName:"p"}),"\n","The average sales is also shown in the table. "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Region"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Jan"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Feb"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Mar"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Apr"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"May"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Jun"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Jul"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Aug"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Sep"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Oct"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Nov"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dec"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"East"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"125"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"150"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"120"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"125"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"South"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"150"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"200"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"200"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"175"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"175"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"150"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"150"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"125"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"125"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"175")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Central"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"125"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"150"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"150"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"200"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"200"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"175")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"West"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"150"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"125"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"125"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"175"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"200"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"175"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"175"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"125"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Average Sales"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"137.5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"156.25"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"131.25"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"150"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"165"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"150"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"156.33"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"150"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"162.5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"175")))),Object(l.b)("p",null,"The average sales should be defined as "),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"AVERAGEEXZERO (East, South, Central, West).\n")),Object(l.b)("h2",{id:"excel-equivalent"},"Excel Equivalent"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://support.office.com/en-us/article/AVERAGE-function-047BAC88-D466-426C-A32B-8F33EB960CF6"}),"AVERAGE")))}u.isMDXComponent=!0}}]);