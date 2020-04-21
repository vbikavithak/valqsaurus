(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(202)),i=n(204),s={id:"workspace-in-valq",title:"Workspace in ValQ"},c={id:"general/workspace-in-valq",title:"Workspace in ValQ",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/general/workspace-in-valq.mdx",permalink:"/docs/general/workspace-in-valq",sidebar:"sideBar",previous:{title:"Saving and Opening Scenarios",permalink:"/docs/general/saving-opening-scenarios"},next:{title:"ValQ in Power BI",permalink:"/docs/general/valq-in-powerbi"}},l=[{value:"Creating a workspace",id:"creating-a-workspace",children:[]},{value:"Inviting other users to the workspace",id:"inviting-other-users-to-the-workspace",children:[]},{value:"Assigning roles to the workspace users",id:"assigning-roles-to-the-workspace-users",children:[]},{value:"Choosing a workspace",id:"choosing-a-workspace",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Workspace is an account provisioned for the users of ValQ.\nValQ workspaces underpin the per-user licensing model, wherein you can effectively manage your workspaces' licensing & user community by tracking, adding/removing users, and assigning roles.\nIt also allows these users to collaborate on their ValQ models."),Object(a.b)("p",null,"You can visit ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://valq.com/pricing/"}),"https://valq.com/pricing/")," to know more about our licensing options."),Object(a.b)("p",null,"You can setup and manage your workspace by following the below\ninstructions."),Object(a.b)("h2",{id:"creating-a-workspace"},"Creating a workspace"),Object(a.b)("p",null,"You can create a workspace at ValQ.com website by signing up for the Free Trial or purchasing ValQ from the shop.\nAt this point, you should also specify the number of users you plan to\nadd to this workspace. The workspace name given here cannot be modified."),Object(a.b)("img",{alt:"",src:Object(i.a)("/doc-images//W.1.png")}),Object(a.b)("p",null,"Upon creation, you will be assigned as the workspace admin by default,\nand a link to the workspace admin console is shared to your e-mail\naddress. As an admin, you can invite other users to the workspace\nfor collaboration. Workspace members can utilize ValQ features, as per the pricing plan selected."),Object(a.b)("img",{alt:"",src:Object(i.a)("/doc-images//W.2.png")}),Object(a.b)("h2",{id:"inviting-other-users-to-the-workspace"},"Inviting other users to the workspace"),Object(a.b)("p",null,"You can invite other users to the workspace from the Admin Console.\nAfter signing up and logging in at the admin portal, you can go to the\n'User Manager' section, click 'Add Members' and fill in the users' email\naddress to extend the invitation to the workspace. The invited members\nwould receive an email notification. The members can sign into ValQ\nusing the 'Login' button."),Object(a.b)("img",{alt:"",src:Object(i.a)("/doc-images//W.4.png")}),Object(a.b)("h2",{id:"assigning-roles-to-the-workspace-users"},"Assigning roles to the workspace users"),Object(a.b)("p",null,"As an admin, you can choose between 'Member' and 'Admin' as roles for\nthe users in the workspace. You can also remove any users, if needed.\nThis is available at the 'User Manager' section in the admin console."),Object(a.b)("img",{alt:"",src:Object(i.a)("/doc-images//W.5.png")}),Object(a.b)("h2",{id:"choosing-a-workspace"},"Choosing a workspace"),Object(a.b)("p",null,"If you have access to multiple workspaces, you can choose\nbetween these workspaces while logging in at the ValQ custom visual."),Object(a.b)("p",null,"If you are an admin managing different workspaces, you can also choose\nbetween workspaces during the login. Additionally, you can select or\nswitch between these workspaces at the profile dropdown within Admin\nConsole."),Object(a.b)("img",{alt:"",src:Object(i.a)("/doc-images//W.6.png")}))}p.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(i,".").concat(d)]||p[d]||g[d]||a;return n?o.a.createElement(h,s({ref:t},l,{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},203:function(e,t,n){"use strict";var r=n(0),o=n(48);t.a=function(){return Object(r.useContext)(o.a)}},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(207);var r=n(203);function o(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},205:function(e,t,n){var r=n(66),o=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},206:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(o){}}return!0}},207:function(e,t,n){"use strict";var r=n(17),o=n(34),a=n(205),i="".startsWith;r(r.P+r.F*n(206)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,n):t.slice(n,n+r.length)===r}})}}]);