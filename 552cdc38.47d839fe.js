(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),s=(a(0),a(185)),o=a(186),r=a(188),c=a(190),l=(a(54),{id:"analyze_overview",title:"Analyze Tab",sidebar_label:"Analyze Tab"}),b={unversionedId:"analysis/analyze_overview",id:"analysis/analyze_overview",isDocsHomePage:!1,title:"Analyze Tab",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/analysis/analyze_overview.mdx",slug:"/analysis/analyze_overview",permalink:"/analysis/analyze_overview",version:"current",sidebar_label:"Analyze Tab",sidebar:"sideBar",previous:{title:"Support for Touch Devices",permalink:"/simulation/touch-support"},next:{title:"Variance Analysis",permalink:"/analysis/variance_analysis"}},u=[],y={rightToc:u};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},y,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Run advanced analysis on your data model and evaluate your business performance to take actions using ValQ\u2019s Analyze tab."),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)(c.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Analyze Tab",src:Object(o.a)("/doc-images/analyze/analyze-tab.png")})),Object(s.b)("p",null,"Analyze tab and the 3 types of analysis")),Object(s.b)("p",null,"Below are the 3 types of analysis that you can perform:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)(r.a,{to:Object(o.a)("analysis/variance_analysis"),mdxType:"Link"},"Variance Analysis"),": Compare multiple series/scenario to calculate the absolute and percentage variance for each node in the model.")),Object(s.b)("div",{class:"center"},Object(s.b)(c.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Variance Analysis",src:Object(o.a)("/doc-images/analyze/var-analysis.png")}))),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},Object(s.b)(r.a,{to:Object(o.a)("analysis/attribution-analysis"),mdxType:"Link"},"Attribution Analysis"),": Evaluate the simulation impact of various input nodes and it's cumulative effect on the Key Performance Indicator.")),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)(c.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Analyze Analysis",src:Object(o.a)("/doc-images/analyze/aaa-2-attr.png")}))),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},Object(s.b)(r.a,{to:Object(o.a)("analysis/sensitivity-analysis"),mdxType:"Link"},"Sensitivity Analysis"),": Identify and analyze how the output node gets affected in response to deviation in a value driver represented by way of a tornado chart.")),Object(s.b)("div",{class:"center"},Object(s.b)(c.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Sensitivity Analysis",src:Object(o.a)("/doc-images/analyze/sa-chart.png")}))))}d.isMDXComponent=!0},188:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(10),o=a(187),r=a(8),c=Object(n.createContext)({collectLink:function(){}}),l=a(186),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a};t.a=function(e){var t,a,u,y=e.isNavLink,d=e.to,p=e.href,v=e.activeClassName,m=e.isActive,O=e["data-noBrokenLinkCheck"],f=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),j=Object(l.b)().withBaseUrl,h=Object(n.useContext)(c),g=d||p,w=Object(o.a)(g),z=null==g?void 0:g.replace("pathname://",""),A=void 0!==z?function(e){return e.startsWith("/")}(a=z)?j(a):a:void 0,k=Object(n.useRef)(!1),x=y?s.e:s.c,T=r.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!T&&w&&window.docusaurus.prefetch(A),function(){T&&u&&u.disconnect()}}),[A,T,w]);var _=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,L=!A||!w||_;return A&&w&&!_&&!O&&h.collectLink(A),L?i.a.createElement("a",Object.assign({href:A},g&&!w&&{target:"_blank",rel:"noopener noreferrer"},f)):i.a.createElement(x,Object.assign({},f,{onMouseEnter:function(){k.current||(window.docusaurus.preload(A),k.current=!0)},innerRef:function(e){var t,a;T&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(A)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:A||""},y&&{isActive:m,activeClassName:v}))}}}]);