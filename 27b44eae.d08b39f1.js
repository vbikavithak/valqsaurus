(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return m}));var o=a(1),n=a(9),r=(a(0),a(248)),c=a(249),l=(a(254),a(256)),b=(a(118),{id:"storage-collaboration",title:"Storage and Collaboration"}),i={id:"storage/storage-collaboration",title:"Storage and Collaboration",description:'import useBaseUrl from "@docusaurus/useBaseUrl"; // Add to the top of the file below the front matter.',source:"@site/docs/storage/storage-collaboration.mdx",permalink:"/docs/storage/storage-collaboration",sidebar:"sideBar",previous:{title:"Attribution Analysis",permalink:"/docs/analysis/attribution-analysis"},next:{title:"List of Formulas and Functions",permalink:"/docs/faq/formula-list"}},s=[{value:"Uploading the ValQ Model",id:"uploading-the-valq-model",children:[]},{value:"Commenting at a Node level",id:"commenting-at-a-node-level",children:[]},{value:"History Log",id:"history-log",children:[]},{value:"Collaboration",id:"collaboration",children:[]},{value:"Export Data To Web",id:"export-data-to-web",children:[{value:"Create a Web Data Source URL",id:"create-a-web-data-source-url",children:[]},{value:"Example (Import data from Web datasource URL in Power BI)",id:"example-import-data-from-web-datasource-url-in-power-bi",children:[]}]},{value:"Live Syncing Simulations with the Export file",id:"live-syncing-simulations-with-the-export-file",children:[]}],d={rightToc:s};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This houses a group of capabilities for you to upload, save & store,\naudit, comment, and collaborate on your model. You can also export\nand/or run further analysis on the baseline, comparison, and the\nsimulated data series of the ValQ model."),Object(r.b)("h2",{id:"uploading-the-valq-model"},"Uploading the ValQ Model"),Object(r.b)("p",null,"After logging in to the relevant workspace, you can see the 'Upload'\nbutton and your profile icon at the bezel."),Object(r.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC5.1.png")}),Object(r.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC5.2.png")}),"In the screenshot model, lets assume you delete a node `Ryan Smith`",Object(r.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC5.3.png")}),"Lets also assume you simulate on the node `Chris Morris`",Object(r.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC5.4.png")}),"You can save these changes at the workspace by clicking 'Upload' near your profile icon, naming your model, and clicking 'upload' at the popup window.",Object(r.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC5.5.png")}),"Once your model is uploaded, you can see additional icons at the bezel such as Save, Comments, and additional options having Exporting, History log, & Settings.",Object(r.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC5.6.png")}),Object(r.b)("h2",{id:"commenting-at-a-node-level"},"Commenting at a Node level"),Object(r.b)("p",null,"You can comment on the changes you have made by clicking the 'Comment'\nicon on top of the node. After posting, your comment is saved alongside\nyour username and time log."),Object(r.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC5.7.png")}),Object(r.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC5.8.png")}),Object(r.b)("p",null,"Alternatively, you can check the comment log for the entire model by\nclicking 'Comments' icon at the bezel. Comments are displayed at a\nScenario-Node level."),Object(r.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC5.10.png")}),Object(r.b)("h2",{id:"history-log"},"History Log"),Object(r.b)("p",null,"As you go to additional options and click 'History Log', you can see the\nmodel and scenario level changes made in a chronological order. This\nfeature helps with auditing the ValQ model."),Object(r.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC5.9.png")}),Object(r.b)("h2",{id:"collaboration"},"Collaboration"),Object(r.b)("p",null,"Collaboration helps to share your model changes, simulations, and comments to all the users under the same workspace.\nYou have to Save your model before collaborating with other users.\nAssuming a wokspace 'Member' simulates on the existing scenario, creates a new scenario, deletes\nanother node, comments on the changes made, and saves the model."),Object(r.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC5.11.png")}),Object(r.b)("p",null,"Collaboration in ValQ lets you view the member's changes, simulations, and comments."),Object(r.b)("p",null,"The changes at a Model/Scenario level are captured at the History Log.\nThe comments between the users are displayed at a Node-Scenario level\nunder the 'Comments' icon."),Object(r.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC5.12.png")}),Object(r.b)("h2",{id:"export-data-to-web"},"Export Data To Web"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Export As Datasource"),"\xa0feature allows the ",Object(r.b)("em",{parentName:"p"},"Data Series")," (Baseline, Comparison, Historical, and Planning Series) and ",Object(r.b)("em",{parentName:"p"},"Scenarios")," of a ValQ model to be made available in a JSON format on the web. This Web URL will be a protected resource and an authorization key will be needed to access the JSON data. This feature can be used in some use cases like:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Writing back the data from ValQ to a source system by reading the JSON"),Object(r.b)("li",{parentName:"ul"},"Import the data back to the Power BI report (Using Power BI's \"",Object(r.b)("em",{parentName:"li"},"Get Data from Web"),'" feature)')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: The authorization key will be generated and will be available only to the report admins.")),Object(r.b)("h3",{id:"create-a-web-data-source-url"},"Create a Web Data Source URL"),Object(r.b)("p",null,"In order to export the data as Datasource, please follow the below steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Save the ValQ Model to a workspace, by clicking on the ",Object(r.b)("strong",{parentName:"li"},"Upload")," label.")),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)(l.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Upload Valq Model",src:Object(c.a)("/doc-images/web-datasource/upload-model.png")}))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Upload Model to Workspace")),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)(l.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Upload Popup Screen",src:Object(c.a)("/doc-images/web-datasource/upload-popup.png")}))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Upload Popup Screen")),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)(l.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Model Uploaded",src:Object(c.a)("/doc-images/web-datasource/model-uploaded.png")}))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Model uploded to the Workspace")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Click on the 3 dots\xa0",Object(r.b)("inlineCode",{parentName:"li"},"..."),"\xa0and select\xa0",Object(r.b)("strong",{parentName:"li"},'"Export as datasource"'))),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)(l.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Export as Datasource",src:Object(c.a)("/doc-images/web-datasource/export-as-datasource.png")}))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Export as datasource")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Select the\xa0",Object(r.b)("strong",{parentName:"li"},"Series"),"\xa0and\xa0",Object(r.b)("strong",{parentName:"li"},"Scenarios"),"\xa0names that you want to export")),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)(l.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Create Web Datasource",src:Object(c.a)("/doc-images/web-datasource/create-web-datasource.png")}))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Create a Web datasource")),Object(r.b)("p",null,"Following are the options available in the\xa0",Object(r.b)("em",{parentName:"p"},"Export format"),"\xa0screen:"),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)(l.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Export Format",src:Object(c.a)("/doc-images/web-datasource/export-format.png")}))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Export format")),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Export format"),": Select the export format as\xa0",Object(r.b)("em",{parentName:"li"},"Tree structure"),"\xa0or\xa0",Object(r.b)("em",{parentName:"li"},"Flat structure")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Customization"),": Select the\xa0",Object(r.b)("em",{parentName:"li"},"Export level of the\xa0Nodes"),"\xa0that decides the hierarchy of the Model Nodes"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Edit Column Names"),": Edit and rename the\xa0",Object(r.b)("em",{parentName:"li"},"Column names"),"\xa0by clicking on the editor icon"),Object(r.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ",Object(r.b)("strong",{parentName:"li"},"Export only leaf nodes"),": Check the tick box to export just the last Node of the Model."),Object(r.b)("li",{parentName:"ul"},"Copy and save the\xa0",Object(r.b)("strong",{parentName:"li"},"Web URL"),"\xa0and\xa0",Object(r.b)("strong",{parentName:"li"},"HTTP request header parameters"),".")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: The above\xa0Web URL\xa0and\xa0HTTP request\xa0ids are auto-generated.")),Object(r.b)("h3",{id:"example-import-data-from-web-datasource-url-in-power-bi"},"Example (Import data from Web datasource URL in Power BI)"),Object(r.b)("p",null,"In the below example, we'll show how the URL can be consumed in a Power BI report using ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/power-bi/connect-data/desktop-connect-to-web-by-example"}),"Get Data by Web Connector"),"."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to\xa0",Object(r.b)("strong",{parentName:"li"},"Get Data > Web"))),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)(l.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Get Data by Web Connector",src:Object(c.a)("/doc-images/web-datasource/get-data-web.png")}))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Get Data by Web Connector")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Select the\xa0",Object(r.b)("em",{parentName:"li"},"Advanced"),"\xa0option")),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)(l.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"web-url-http-request",src:Object(c.a)("/doc-images/web-datasource/web-url-http-request.png")}))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Web URL and HTTP request fields")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Enter the Web URL and HTTP request header parameters obtained in the above ",Object(r.b)("strong",{parentName:"li"},"export format")," section.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: Enter ",Object(r.b)("strong",{parentName:"p"},"Authorization")," in the HTTP header field")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click\xa0",Object(r.b)("em",{parentName:"li"},"OK"),"."),Object(r.b)("li",{parentName:"ul"},"This pops up an excelsheet preview of the web datasource to be imported.")),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)(l.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"preview-of-data",src:Object(c.a)("/doc-images/web-datasource/preview-of-data.png")}))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Preview of the data to be imported")),Object(r.b)("p",null,"You may click ",Object(r.b)("strong",{parentName:"p"},"Load")," to continue loading the data or ",Object(r.b)("strong",{parentName:"p"},"Transform Data")," to further configure the data that will be imported from the web datasource."),Object(r.b)("h2",{id:"live-syncing-simulations-with-the-export-file"},"Live Syncing Simulations with the Export file"),Object(r.b)("p",null,"You can run further simulations to the scenarios and instantly synchronize the new scenario data with\nthe export file by refreshing the data query within 'Queries &\nConnections'."),Object(r.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC.11.png")}))}m.isMDXComponent=!0},254:function(e,t,a){"use strict";var o=a(1),n=a(0),r=a.n(n),c=a(35),l=/^\/(?!\/)/;t.a=function(e){var t,a=e.to,b=e.href,i=a||b,s=l.test(i),d=Object(n.useRef)(!1),m="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(n.useEffect)((function(){return!m&&s&&window.docusaurus.prefetch(i),function(){m&&t&&t.disconnect()}}),[i,m,s]),i&&s?r.a.createElement(c.b,Object(o.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(i),d.current=!0)},innerRef:function(e){var a,o;m&&e&&s&&(a=e,o=function(){window.docusaurus.prefetch(i)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),o())}))}))).observe(a))},to:i})):r.a.createElement("a",Object(o.a)({},e,{href:i}))}}}]);