(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return h}));var o=a(1),n=a(9),i=(a(0),a(247)),r=a(248),s=(a(253),a(255)),b=(a(118),{id:"time_series",title:"Time Series Forecasting"}),c={id:"planning/time_series",title:"Time Series Forecasting",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/planning/time_series.mdx",permalink:"/docs/planning/time_series",sidebar:"sideBar",previous:{title:"Plan Features",permalink:"/docs/planning/plan_features"},next:{title:"Sample Business Cases",permalink:"/docs/planning/business_cases"}},l=[{value:"Forecast options",id:"forecast-options",children:[]},{value:"Advanced options",id:"advanced-options",children:[{value:"1. Auto Forecast",id:"1-auto-forecast",children:[]},{value:"2. Linear Trend",id:"2-linear-trend",children:[]},{value:"3. Moving Average",id:"3-moving-average",children:[]},{value:"4. Weighted Moving Average",id:"4-weighted-moving-average",children:[]}]}],d={rightToc:l};function h(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{style:{textAlign:"justify"}},'ValQ has in-built Time Series Forecasting capabilities that allow you to make a forecast based on past data collected over a while. To access this powerful feature, all you have to do is click on the "Auto Forecast" button as shown below.')," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/plan11.png")}))),Object(i.b)("h2",{id:"forecast-options"},"Forecast options"),Object(i.b)("div",{style:{textAlign:"justify"}},"Clicking on Auto Forecast will give you the options to configure time series forecasting that make predictions designed to suit your needs.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf1.png")})))," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"justify"},className:"table-center"},Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Options"),Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"1"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Target Node"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Node for which forecast is done")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"2"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Target Period"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Period for which forecast is done")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"3"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Forecast Basis"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Criteria based on which forecast is performed")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"4"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Past Data Series & Weights"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Choose the past data series here and its weights are given in descending order")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"5"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Source Periods"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Choose the duration of past data considered for the forecast")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"6"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Add Growth"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Growth component can be added here on absolute or percentage terms")))))," ",Object(i.b)("br",null),Object(i.b)("h2",{id:"advanced-options"},"Advanced options"),Object(i.b)("div",{style:{textAlign:"justify"}},"Advanced options lets you choose the Forecasting Method, Distribution Method after configuring the Target and Forecast Basis options.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf2.png")})))," ",Object(i.b)("br",null),Object(i.b)("h3",{id:"1-auto-forecast"},"1. Auto Forecast"),Object(i.b)("div",{style:{textAlign:"justify"}},"Auto Forecast option automatically predicts Target Node for the Target Period based on Past Data Series & Weights and Source Periods. Growth can be added as an absolute value or percentage growth when needed. This option does not need the Distribution Method as ValQ performs time series forecasting automatically.")," ",Object(i.b)("br",null),Object(i.b)("p",null,"Let's understand how ValQ performs time series forecasting with examples to predict 2020 results."),Object(i.b)("h4",{id:"example-1-auto-forecast-with-no-growth"},"Example 1: Auto Forecast with No Growth"),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Configuration for Forecasting")),Object(i.b)("div",{style:{textAlign:"justify"}},"In the below example, forecasting is done for node 'Overall Result' for the year 2020 based on 2019 actuals data with weight as 1 and growth not incorporated.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf3.1.png")})))," ",Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Preview of Forecast Results")),Object(i.b)("div",{style:{textAlign:"justify"}},"The below Figure shows the results of Auto Forecasting as per the above configuration with three choices of forecast i.e. Optimized, Balanced and Conservative. Notice that the Net Growth of Conservative is 0.00% as we didn't add growth in the Forecast Basis option.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf3.2.png")}))),Object(i.b)("h4",{id:"example-2-auto-forecast-with-growth-component"},"Example 2: Auto Forecast with Growth Component"),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Configuration for Forecasting")),Object(i.b)("div",{style:{textAlign:"justify"}},"Here's another example where forecasting is done for node 'Overall Result' for the year 2020 based on 2019 and 2018 actuals with weight as 2 and 1 respectively and 10% growth. Auto Forecast is the Forecast Method applied in this example.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf4.1.png")})))," ",Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Preview of Forecast Results")),Object(i.b)("div",{style:{textAlign:"justify"}},"The below Figure shows the results of Auto Forecasting as per the above configuration with three choices of forecast i.e. Optimized, Balanced and Conservative. Notice that the Net Growth of Conservative is 10% as we have added a 10% growth in the Forecast Basis option.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf4.2.png")})))," ",Object(i.b)("br",null),Object(i.b)("h3",{id:"2-linear-trend"},"2. Linear Trend"),Object(i.b)("div",{style:{textAlign:"justify"}},"Linear Trend method applies Linear Regression to predicts Target Node for the Target Period based on Past Data Series & Weights and Source Periods. Growth can be added as an absolute value or percentage growth when needed and the Distribution Method can be selected as Match or M2M(+1)."),Object(i.b)("h4",{id:"example-3-linear-trend-forecast-with-growth-component-and-distribution-method-as-match"},"Example 3: Linear Trend Forecast with Growth Component and Distribution Method as Match"),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Configuration for Forecasting")),Object(i.b)("div",{style:{textAlign:"justify"}},"In this example forecasting is done for node 'Overall Result' for the year 2020 based on 2019 and 2018 full year actuals with weight as 2 and 1 respectively and 10% growth. The Forecast Method applied in this example is the Linear Trend with 'Match' as the Distribution Method.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf8.1.png")})))," ",Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Preview of Forecast Results")),Object(i.b)("div",{style:{textAlign:"justify"}},"The below Figure shows the results of forecasting done based on the above configuration. The total for 2020 is predicted by applying the Linear Trend method and Match distributes the total to its periods based on the distribution of only recent Past Series Data selected with weight in Forecast Basis, here 2019 actuals with weight as 2.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf8.2.png")}))),Object(i.b)("h4",{id:"example-4-linear-trend-forecast-with-growth-component-and-distribution-method-as-m2m"},"Example 4: Linear Trend Forecast with Growth Component and Distribution Method as M2M"),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Configuration for Forecasting")),Object(i.b)("div",{style:{textAlign:"justify"}},"Here's another example where forecasting is done for node 'Overall Result' for the year 2020 based on 2019 and 2018 full year actuals with weight as 2 and 1 respectively and 10% growth. The Forecast Method applied in this example is the Linear Trend with 'M2M' as the Distribution Method.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf7.1.png")})))," ",Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Preview of Forecast Results")),Object(i.b)("div",{style:{textAlign:"justify"}},"The below Figure shows the results of forecasting done based on the above configuration. The total for 2020 is predicted by applying the Linear Trend method and M2M distributes the total to its periods based on the distribution of all Past Series Data selected with weights in Forecast Basis.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf7.2.png")})))," ",Object(i.b)("br",null),Object(i.b)("p",null,"Note that the distribution of 2020 period values is the only difference between the above two examples because of the change in the\nDistribution Method. "),Object(i.b)("h3",{id:"3-moving-average"},"3. Moving Average"),Object(i.b)("div",{style:{textAlign:"justify"}},"Moving Average method computes forecast results of Target Node for the Target Period based on Past Data Series & Weights and Source Periods. This method predicts by calculating the Moving Average of Past Data Series period values. Growth can be added as an absolute value or percentage growth when needed and the Distribution Method can be selected as Match or M2M(+1)."),Object(i.b)("h4",{id:"example-5-moving-average-forecast-without-growth-component-and-distribution-method-as-m2m"},"Example 5: Moving Average Forecast without Growth Component and Distribution Method as M2M"),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Configuration for Forecasting")),Object(i.b)("div",{style:{textAlign:"justify"}},"In this example forecasting is done for node 'Overall Result' for the year 2020 based on Jul - Dec period values of 2019 and 2018 actuals with weight as 1 for both and no growth. The Forecast Method applied in this example is the Moving Average with M2M as the Distribution Method.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf5.1.png")})))," ",Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Preview of Forecast Results")),Object(i.b)("div",{style:{textAlign:"justify"}},"The below Figure shows the results of forecasting done based on the above configuration. The total for 2020 is predicted by applying the Moving Average method and M2M distributes the total to its periods based on the distribution of all Past Series Data selected with weights in Forecast Basis.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf5.2.png")})))," ",Object(i.b)("br",null),Object(i.b)("h3",{id:"4-weighted-moving-average"},"4. Weighted Moving Average"),Object(i.b)("div",{style:{textAlign:"justify"}},"Weighted Moving Average method computes forecast results of Target Node for the Target Period based on Past Data Series & Weights and Source Periods. This method predicts by calculating the Weighted Moving Average of Past Data Series period values with weights applied to it. Growth can be added as an absolute value or percentage growth when needed and the Distribution Method can be selected as Match or M2M(+1)."),Object(i.b)("h4",{id:"example-6-weighted-moving-average-forecast-without-growth-component-and-distribution-method-as-m2m"},"Example 6: Weighted Moving Average Forecast without Growth Component and Distribution Method as M2M"),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Configuration for Forecasting")),Object(i.b)("div",{style:{textAlign:"justify"}},"In this example forecasting is done for node 'Overall Result' for the year 2020 based on Jul - Dec period values of 2019 and 2018 actuals with weight as 2 for Oct-Dec and 1 for Jul-Sep and no growth. The Forecast Method applied in this example is the Weighted Moving Average with M2M as the Distribution Method.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf6.1.png")})))," ",Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Preview of Forecast Results")),Object(i.b)("div",{style:{textAlign:"justify"}},"The below Figure shows the results of forecasting done based on the above configuration. The total for 2020 is predicted by applying the Weighted Moving Average method and M2M distributes the total to its periods based on the distribution of all Past Series Data selected with weights in Forecast Basis.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf6.2.png")})))," ",Object(i.b)("br",null))}h.isMDXComponent=!0},253:function(e,t,a){"use strict";var o=a(1),n=a(0),i=a.n(n),r=a(35),s=/^\/(?!\/)/;t.a=function(e){var t,a=e.to,b=e.href,c=a||b,l=s.test(c),d=Object(n.useRef)(!1),h="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(n.useEffect)((function(){return!h&&l&&window.docusaurus.prefetch(c),function(){h&&t&&t.disconnect()}}),[c,h,l]),c&&l?i.a.createElement(r.b,Object(o.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(c),d.current=!0)},innerRef:function(e){var a,o;h&&e&&l&&(a=e,o=function(){window.docusaurus.prefetch(c)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),o())}))}))).observe(a))},to:c})):i.a.createElement("a",Object(o.a)({},e,{href:c}))}}}]);