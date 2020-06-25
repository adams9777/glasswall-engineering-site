(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{177:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return r})),a.d(t,"default",(function(){return p}));var n=a(2),s=a(9),l=(a(0),a(207)),i={title:"File Analysis - Using Postman",sidebar_label:"Using Postman"},o={id:"guides/file-analyse-cloud-using-postman",isDocsHomePage:!1,title:"File Analysis - Using Postman",description:"Glasswall regenerates clean, safe and visually identical files in milliseconds, securing your organisation without compromise.",source:"@site/docs/guides/file-analyse-cloud-using-postman.md",permalink:"/docs/guides/file-analyse-cloud-using-postman",sidebar_label:"Using Postman"},r=[{value:"API Key",id:"api-key",children:[]},{value:"Postman --- API Development",id:"postman-----api-development",children:[]},{value:"Analyse a File",id:"analyse-a-file",children:[]}],c={rightToc:r};function p(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Glasswall regenerates clean, safe and visually identical files in milliseconds, securing your organisation without compromise."),Object(l.b)("p",null,"Glasswall's award winning d-FIRST SDK is now available as a cloud API File Analyse. If you are looking for an easy way to make your first request to the API, you are in luck as, this guide walks through making a request using Postman."),Object(l.b)("h2",{id:"api-key"},"API Key"),Object(l.b)("p",null,"Before we begin, we will need a valid Glasswall Cloud API key. If you are reading this you may already have one. If not, trial keys are free so please get in touch:\xa0",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://glasswallsolutions.com/contact/"}),"https://glasswallsolutions.com/contact/")," or visit ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://glasswall-store.com/"}),"https://glasswall-store.com/")," to make a purchase."),Object(l.b)("h2",{id:"postman-----api-development"},"Postman --- API Development"),Object(l.b)("p",null,"In this guide we will be using Postman to make requests. Not to worry if you haven't used it before, it's free and easy to use. Let's download the Postman App and get on to writing our first request:\xa0",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postman.com/"}),"https://www.postman.com/")),Object(l.b)("h2",{id:"analyse-a-file"},"Analyse a File"),Object(l.b)("p",null,"With Postman open, let's start by clicking 'New' then 'Request'."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/guides/postman-analysis/Analysis_Postman_2.png",alt:null}))),Object(l.b)("p",null,"This will open a new request for us to populate."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/guides/postman-analysis/Analysis_Postman_3.png",alt:null}))),Object(l.b)("p",null,"Using the drop down on the left, change from a GET request to a POST request. And then input the Analyse Cloud API Direct Endpoint:\xa0",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://24dyhnzh5h.execute-api.eu-west-2.amazonaws.com/Beta/az/fileanalysis/analyse"}),"https://24dyhnzh5h.execute-api.eu-west-2.amazonaws.com/Beta/az/fileanalysis/analyse")),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/guides/postman-analysis/Analysis_Postman_4.png",alt:null}))),Object(l.b)("p",null,"Now it's time to input the headers. Select 'Headers' in the ribbon and enter the following key/value pairs:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{})," Accept : */*\n Content-Type : Multipart/form-data\n x-api-key :\xa0Your Glasswall Cloud API Key\n")),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/guides/postman-analysis/Analysis_Postman_5.png",alt:null}))),Object(l.b)("p",null,"The final part of the request is to select the file to process. Click 'Body' and enter the key 'file'. Hover over the right-hand side of the field and wait for the drop down to appear. Select 'File'."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/guides/postman-analysis/Analysis_Postman_6.png",alt:null}))),Object(l.b)("p",null,"We're getting there... Let's find our test files. The API currently supports a maximum file size of 10MB. The supported file types are: Binary Office, Office XML, PDF, PNG, JPG and GIF."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/guides/postman-analysis/Analysis_Postman_7.png",alt:null}))),Object(l.b)("p",null,"Back to Postman, click the 'VALUE' field and then use file explorer to locate your test file."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/guides/postman-analysis/Analysis_Postman_8.png",alt:null}))),Object(l.b)("p",null,"Nice! We have setup our first request. Let's hit 'Send' and look at the response."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/guides/postman-analysis/Analysis_Postman_9.png",alt:null}))),Object(l.b)("p",null,"Congratulations! You have made your first request to the Glasswall API."),Object(l.b)("p",null,"What does the response tell us? The Analyse Cloud API processes a file and returns an analysis report detailing:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Content items: Structures within the file."),Object(l.b)("li",{parentName:"ul"},"Remedy items: Structures that deviated from the file types specification that Glasswall will repair."),Object(l.b)("li",{parentName:"ul"},"Sanitisation Items: Active Content within the file that Glasswall will remove."),Object(l.b)("li",{parentName:"ul"},"It also includes Issue Items, deviations from the file type specification that cannot be repaired, or content that does not apply to the specified content management policy.")),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/guides/postman-analysis/Analysis_Postman_10.png",alt:null}))),Object(l.b)("p",null,"For more information, please see our Swagger documentation below:"),Object(l.b)("p",null,"Swagger for Glasswall's Analyse API:\xa0",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://filetrust.github.io/product-saas-analyse/#/"}),"https://filetrust.github.io/product-saas-analyse/")),Object(l.b)("p",null,"If you like what you see and would like to learn more. Please get in touch."))}p.isMDXComponent=!0},207:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),s=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=s.a.createContext({}),p=function(e){var t=s.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},m=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||l;return a?s.a.createElement(d,o(o({ref:t},c),{},{components:a})):s.a.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);