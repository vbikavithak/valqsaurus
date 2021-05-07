(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{195:function(e,t,a){"use strict";var n=a(0),o=a.n(n),c=a(10),i=a(194),l=a(8),b=Object(n.createContext)({collectLink:function(){}}),r=a(193),s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a};t.a=function(e){var t,a,d,p=e.isNavLink,u=e.to,m=e.href,h=e.activeClassName,O=e.isActive,j=e["data-noBrokenLinkCheck"],v=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),g=Object(r.b)().withBaseUrl,w=Object(n.useContext)(b),N=u||m,f=Object(i.a)(N),T=null==N?void 0:N.replace("pathname://",""),y=void 0!==T?function(e){return e.startsWith("/")}(a=T)?g(a):a:void 0,x=Object(n.useRef)(!1),k=p?c.e:c.c,C=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!C&&f&&window.docusaurus.prefetch(y),function(){C&&d&&d.disconnect()}}),[y,C,f]);var S=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,D=!y||!f||S;return y&&f&&!S&&!j&&w.collectLink(y),D?o.a.createElement("a",Object.assign({href:y},N&&!f&&{target:"_blank",rel:"noopener noreferrer"},v)):o.a.createElement(k,Object.assign({},v,{onMouseEnter:function(){x.current||(window.docusaurus.preload(y),x.current=!0)},innerRef:function(e){var t,a;C&&e&&f&&(t=e,a=function(){window.docusaurus.prefetch(y)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:y||""},p&&{isActive:O,activeClassName:h}))}},69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),c=(a(0),a(192)),i=a(193),l=(a(195),a(197)),b={id:"touch-support",title:"Support for Touch Devices",sidebar_label:"Support for Touch Devices"},r={unversionedId:"simulation/touch-support",id:"simulation/touch-support",isDocsHomePage:!1,title:"Support for Touch Devices",description:"ValQ now provides optimized touch support and makes interacting with models easier for end-users on mobile and touch-screen devices.",source:"@site/docs/simulation/touch-support.md",slug:"/simulation/touch-support",permalink:"/simulation/touch-support",version:"current",sidebar_label:"Support for Touch Devices",sidebar:"sideBar",previous:{title:"Table View",permalink:"/simulation/tableview"},next:{title:"Analyze Tab",permalink:"/analysis/analyze_overview"}},s=[{value:"ValQ features optimized for touch support",id:"valq-features-optimized-for-touch-support",children:[]},{value:"<strong>Navigation Panel</strong>",id:"navigation-panel",children:[{value:"Switch between Desktop and Touch-friendly version",id:"switch-between-desktop-and-touch-friendly-version",children:[]}]},{value:"Table/Tree view",id:"tabletree-view",children:[{value:"Search",id:"search",children:[]},{value:"Go-to-level",id:"go-to-level",children:[]},{value:"Node slider",id:"node-slider",children:[]},{value:"Comment",id:"comment",children:[]},{value:"Node details",id:"node-details",children:[]}]}],d={rightToc:s};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"ValQ now provides optimized touch support and makes interacting with models easier for end-users on mobile and touch-screen devices."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"ValQ will automatically detect the touch device and enable the touch features."),Object(c.b)("li",{parentName:"ul"},"You can also enable/disable the touch support functionality and switch back to general Desktop ValQ features.")),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ touch support default view",src:Object(i.a)("/doc-images/simulate_tab/touch-support/default-valq-view.png"),height:"450"})),Object(c.b)("p",null,"ValQ touch support default view")),Object(c.b)("h2",{id:"valq-features-optimized-for-touch-support"},"ValQ features optimized for touch support"),Object(c.b)("p",null,"The default touch-enabled ValQ visual screen has unique touch features both in the ",Object(c.b)("strong",{parentName:"p"},"Navigation Panel")," on the left and in the ",Object(c.b)("strong",{parentName:"p"},"Canvas (table/tree) view")," on the right."),Object(c.b)("h2",{id:"navigation-panel"},Object(c.b)("strong",{parentName:"h2"},"Navigation Panel")),Object(c.b)("p",null,"The ",Object(c.b)("em",{parentName:"p"},"Scenarios")," section is expanded by default, while all other components are collapsed. The ",Object(c.b)("strong",{parentName:"p"},"Compare Scenarios")," feature is now a button."),Object(c.b)("h3",{id:"switch-between-desktop-and-touch-friendly-version"},"Switch between Desktop and Touch-friendly version"),Object(c.b)("p",null,"You can switch between ",Object(c.b)("em",{parentName:"p"},"Desktop")," and ",Object(c.b)("em",{parentName:"p"},"Touch-enabled devices")," mode with a tap on the ",Object(c.b)("strong",{parentName:"p"},"Switch to desktop version")," button. The button is available at the top in the Navigation panel."),Object(c.b)("h2",{id:"tabletree-view"},"Table/Tree view"),Object(c.b)("p",null,"The visual has a ",Object(c.b)("em",{parentName:"p"},"Pinch and Zoom")," feature for easier accessibility. The ValQ model is visualized both in the table view and tree view."),Object(c.b)("p",null," ",Object(c.b)("strong",{parentName:"p"},"Default Canvas Touch Bar options")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#search"}),"Search")," a node in the model.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#go-to-level"}),"Go-to-level")," selection that displays the node hierarchy."),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Default Canvas Tree view",src:Object(i.a)("/doc-images/simulate_tab/touch-support/default-tree-view.png"),height:"450"})),Object(c.b)("p",null,"Default Canvas Tree view")),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Default Canvas Table view",src:Object(i.a)("/doc-images/simulate_tab/touch-support/default-table-view.png"),height:"450"})),Object(c.b)("p",null,"Default Canvas Table view")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Node selection Touch Bar options")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Delete")," - Deletes the simulated value and restores the original value of the node.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#node-slider"}),"Node Slider")," - Simulates a node.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Month wise simulations"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#comment"}),"Comments")," on the node from the users who share the model.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Plan series")," - Shortcut icon to create Planning series.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#node-details"}),"Node details")," such as ",Object(c.b)("em",{parentName:"p"},"Node description, Simulation impact and variances, Line and column chart"),", and ",Object(c.b)("em",{parentName:"p"},"Waterfall chart"),"."),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Node Touch Bar menu Tree view",src:Object(i.a)("/doc-images/simulate_tab/touch-support/node-tree-view.png"),height:"450"})),Object(c.b)("p",null,"Node Touch Bar menu Tree view")))),Object(c.b)("h3",{id:"search"},"Search"),Object(c.b)("p",null,"The Mac-style spotlight search allows you to search a node in the model. Tap on ",Object(c.b)("em",{parentName:"p"},"Search")," and start typing the node's name:"),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"",src:Object(i.a)("/doc-images/simulate_tab/touch-support/search-mac-spotlight.png"),height:"450"})),Object(c.b)("p",null,"Type the name of the node in the search box")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"In the ",Object(c.b)("em",{parentName:"li"},"Tree")," view, the ",Object(c.b)("em",{parentName:"li"},"Copper Sold")," node is selected and the model is expanded up to the selected node level.")),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"",src:Object(i.a)("/doc-images/simulate_tab/touch-support/node-selected-tree-view.png"),height:"450"})),Object(c.b)("p",null,"The searched node is selected in tree view")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"In the ",Object(c.b)("em",{parentName:"li"},"Table")," view, just the searched node is displayed.")),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"",src:Object(i.a)("/doc-images/simulate_tab/touch-support/node-selected-table-view.png"),height:"450"})),Object(c.b)("p",null,"Node searched in table view")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The selected node is not expanded to show the child nodes by default, in both the tree/table views."))),Object(c.b)("h3",{id:"go-to-level"},"Go-to-level"),Object(c.b)("p",null,"The ",Object(c.b)("em",{parentName:"p"},"Go-to-level")," option helps in expanding the node-level hierarchy in a model.\nTree/table view are inter-linked and get auto-updated on each selection."),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Node-level hierarchy Tree view",src:Object(i.a)("/doc-images/simulate_tab/touch-support/node-go-to-level.png"),height:"450"})),Object(c.b)("p",null,"Node-level hierarchy Tree view")),Object(c.b)("p",null,"In a ",Object(c.b)("em",{parentName:"p"},"Table")," view, you can tap on the plus(+)/minus(-) symbol next to each node to expand/collapse the node hierarchy."),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Table view of node-level hierarchy",src:Object(i.a)("/doc-images/simulate_tab/touch-support/go-to-level-table-view.png"),height:"450"})),Object(c.b)("p",null,"Node-level hierarchy expansion in Table view")),Object(c.b)("h3",{id:"node-slider"},"Node slider"),Object(c.b)("p",null,"Simulating a node comes in handy with the improved slider.\nTap and select a node (",Object(c.b)("em",{parentName:"p"},"Copper Price"),") to enable the slider. In the below screenshot the node is simulated by 6% by moving the slider."),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"",src:Object(i.a)("/doc-images/simulate_tab/touch-support/node-slidebar.png"),height:"450"})),Object(c.b)("p",null,"Copper Price node simulated by 6% in tree view")),Object(c.b)("p",null,"The same node simulation(6% better) in the ",Object(c.b)("em",{parentName:"p"},"Table")," view:"),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"",src:Object(i.a)("/doc-images/simulate_tab/touch-support/node-simulation-table-view.png"),height:"450"})),Object(c.b)("p",null,"Node search and simulation in table view")),Object(c.b)("h3",{id:"comment"},"Comment"),Object(c.b)("p",null,"Commenting is allowed by the users on the Planning series and shared scenarios."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"To enter new comments, click on the comments icon from the\xa0Plan\xa0and\xa0Simulate\xa0tabs respectively.\nYou can also edit/delete the comments owned by you.")),Object(c.b)("p",null,"In the ",Object(c.b)("strong",{parentName:"p"},"Simulate")," tab, tap on a node and then tap the ",Object(c.b)("strong",{parentName:"p"},"Comments")," icon in the Touch Bar menu."),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Enter node comment",src:Object(i.a)("/doc-images/simulate_tab/touch-support/enter-node-comment.png"),height:"450"})),Object(c.b)("p",null,"Type a new comment on the node")),Object(c.b)("h3",{id:"node-details"},"Node details"),Object(c.b)("p",null,"Select a node either in ",Object(c.b)("em",{parentName:"p"},"Tree/Table")," view and tap ",Object(c.b)("em",{parentName:"p"},"details")," to view the node details."),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"",src:Object(i.a)("/doc-images/simulate_tab/touch-support/node-details-icon.png"),height:"450"})),Object(c.b)("p",null,"Node details icon in tree view")),Object(c.b)("p",null,"A detailed node's information screen is displayed:"),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"",src:Object(i.a)("/doc-images/simulate_tab/touch-support/node-details.png"),height:"450"})),Object(c.b)("p",null,"Node Details")),Object(c.b)("p",null,"Tap close(x) at the top right corner to exit out of the ",Object(c.b)("em",{parentName:"p"},"node details")," screen."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"To switch between the node menu and the default touch-enabled ValQ screen, click anywhere on the Canvas."))))}p.isMDXComponent=!0}}]);