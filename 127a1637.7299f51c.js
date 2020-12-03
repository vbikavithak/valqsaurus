(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{194:function(e,t,l){"use strict";var a=l(0),n=l.n(a),i=l(10),o=l(193),b=l(11),c=Object(a.createContext)({collectLink:function(){}}),s=l(192),r=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(l[a[n]]=e[a[n]])}return l};t.a=function(e){var t,l,u,O=e.isNavLink,m=e.to,d=e.href,j=e.activeClassName,p=e.isActive,g=e["data-noBrokenLinkCheck"],v=r(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),h=Object(s.b)().withBaseUrl,f=Object(a.useContext)(c),y=m||d,w=Object(o.a)(y),V=null==y?void 0:y.replace("pathname://",""),Q=void 0!==V?function(e){return e.startsWith("/")}(l=V)?h(l):l:void 0,x=Object(a.useRef)(!1),N=O?i.e:i.c,k=b.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!k&&w&&window.docusaurus.prefetch(Q),function(){k&&u&&u.disconnect()}}),[Q,k,w]);var A=null!==(t=null==Q?void 0:Q.startsWith("#"))&&void 0!==t&&t,I=!Q||!w||A;return Q&&w&&!A&&!g&&f.collectLink(Q),I?n.a.createElement("a",Object.assign({href:Q},y&&!w&&{target:"_blank",rel:"noopener noreferrer"},v)):n.a.createElement(N,Object.assign({},v,{onMouseEnter:function(){x.current||(window.docusaurus.preload(Q),x.current=!0)},innerRef:function(e){var t,l;k&&e&&w&&(t=e,l=function(){window.docusaurus.prefetch(Q)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),l())}))}))).observe(t))},to:Q||""},O&&{isActive:p,activeClassName:j}))}},71:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return c})),l.d(t,"metadata",(function(){return s})),l.d(t,"rightToc",(function(){return r})),l.d(t,"default",(function(){return O}));var a=l(3),n=l(7),i=(l(0),l(191)),o=l(192),b=(l(194),l(196)),c=(l(53),{id:"install",title:"How to install ValQ?",sidebar_label:"Installing ValQ"}),s={unversionedId:"intro/install",id:"intro/install",isDocsHomePage:!1,title:"How to install ValQ?",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/intro/install.mdx",slug:"/intro/install",permalink:"/docs/intro/install",version:"current",sidebar_label:"Installing ValQ",sidebar:"sideBar",previous:{title:"ValQ Editions",permalink:"/docs/intro/versions"},next:{title:"Using ValQ - An Example",permalink:"/docs/intro/model"}},r=[{value:"Get ValQ",id:"get-valq",children:[{value:"1. Import a visual from a file",id:"1-import-a-visual-from-a-file",children:[]},{value:"2. Get more visuals - AppSource",id:"2-get-more-visuals---appsource",children:[]},{value:"3. Get more visuals - My organization",id:"3-get-more-visuals---my-organization",children:[]}]},{value:"Launch ValQ",id:"launch-valq",children:[]}],u={rightToc:r};function O(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this section, you will:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Learn how to ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#get-valq"}),"install")," ValQ on Power BI Desktop"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#launch-valq"}),"Launch")," ValQ")),Object(i.b)("h2",{id:"get-valq"},"Get ValQ"),Object(i.b)("p",null,"You can use any of the following three ways to get ValQ added to Microsoft Power BI:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#1-import-a-visual-from-a-file"}),"Import a visual from a file")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#2-get-more-visuals---appsource"}),"Get more visuals - AppSource")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#3-get-more-visuals---my-organization"}),"Get more visuals - My organization"))),Object(i.b)("h3",{id:"1-import-a-visual-from-a-file"},"1. Import a visual from a file"),Object(i.b)("div",{style:{textAlign:"justify"}},"Import a visual from a file option is used when you have ValQ as a .pbiviz file in your local machine. ",Object(i.b)("br",null)," ",Object(i.b)("br",null),"1. a) To get started, click on the ellipses under the Visualizations pane and choose Import a visual from a file option as shown in the image below.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install2.png")})))," ",Object(i.b)("br",null),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"b) Now select the ",Object(i.b)("inlineCode",{parentName:"li"},".pbiviz")," file available in your local desktop to import ValQ into Power BI.",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install5.png")})))," ",Object(i.b)("br",null),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"c) Once the file gets imported, you will see the message as shown below. Click OK.",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install6.png")})))," ",Object(i.b)("br",null),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"d) You have successfully added ValQ to Microsoft Power BI. You will now be able to see ValQ now under the Visualizations pane.",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install7.png")}))),Object(i.b)("h3",{id:"2-get-more-visuals---appsource"},"2. Get more visuals - AppSource"),Object(i.b)("p",null,"Get more visuals option can be used to download ValQ from the AppSource marketplace."),Object(i.b)("div",{style:{textAlign:"justify"}},"2. a) To get started, click on the ellipses under the Visualizations pane and choose Get more visuals option.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install3.png")})))," ",Object(i.b)("br",null),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"b) If you have not signed in to Microsoft Power BI already, you would be prompted to sign in to access the marketplace.",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install8.png")})))," ",Object(i.b)("br",null),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"c) Simply search for ValQ in the search bar and add the visual to Power BI by clicking Add button.",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install9.png")})))," ",Object(i.b)("br",null),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"d) Once the file gets imported, you will see the message as shown below. Click OK.",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install6.png")})))," ",Object(i.b)("br",null),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"e) You have successfully added ValQ to Microsoft Power BI. You will now be able to see ValQ now under the Visualizations pane.",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install4.png")}))),Object(i.b)("h3",{id:"3-get-more-visuals---my-organization"},"3. Get more visuals - My organization"),Object(i.b)("p",null,"Get more visuals option can also be used to download ValQ when the visual is a part of My organization marketplace."),Object(i.b)("div",{style:{textAlign:"justify"}},"3. a) To get started, click on the ellipses under the Visualizations pane and choose Get more visuals option.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install3.png")})))," ",Object(i.b)("br",null),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"b) If you have not signed in to Microsoft Power BI already, you would be prompted to sign in to access the marketplace.",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install8.png")})))," ",Object(i.b)("br",null),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"c) Switch to My organization tab to identify the ValQ visual and click Add to get ValQ. ",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install12.png")})))," ",Object(i.b)("br",null),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note ",Object(i.b)("br",null),"\nValQ will be available here only if the administrator from your organization has enabled ValQ")),Object(i.b)("br",null),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"d) Once the file gets imported, you will see the message as shown below. Click OK.",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install6.png")}))),Object(i.b)("br",null),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"e) You have successfully added ValQ to Microsoft Power BI. You will now be able to see ValQ now under the Visualizations pane.",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install4.png")})))," ",Object(i.b)("h2",{id:"launch-valq"},"Launch ValQ"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To begin, click on the ValQ icon. You will see ValQ visual on the canvas."),Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install13.png")}))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Expand the visual to fit the screen. You can now start using ValQ by assigning value to the visual."),Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install14.png")})))))}O.isMDXComponent=!0}}]);