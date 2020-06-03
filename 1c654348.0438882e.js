(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var i=r(2),n=r(9),a=(r(0),r(200)),o={title:"Architecture of Rebuild",sidebar_label:"Architecture"},l={id:"products/cloud-sdk/architecture/rebuild-architecture",title:"Architecture of Rebuild",description:"File in Http Request multipart/form-data",source:"@site/docs/products/cloud-sdk/architecture/rebuild-architecture.md",permalink:"/glasswall-engineering-site/docs/products/cloud-sdk/architecture/rebuild-architecture",sidebar_label:"Architecture",sidebar:"someSidebar",previous:{title:"Quickstart - Rebuild",permalink:"/glasswall-engineering-site/docs/products/cloud-sdk/rebuild/rebuild-quickstart"},next:{title:"Rebuild API",permalink:"/glasswall-engineering-site/docs/products/cloud-sdk/rebuild/rebuild-api"}},u=[{value:"File in Http Request multipart/form-data",id:"file-in-http-request-multipartform-data",children:[]},{value:"File in via authenticated URLs",id:"file-in-via-authenticated-urls",children:[]}],c={rightToc:u};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"file-in-http-request-multipartform-data"},"File in Http Request multipart/form-data"),Object(a.b)("p",null,"This pathway allows for files up to 6mb to be posted to the API within the request body. As you can see, the moving parts are minimal - the file is rebuilt by a single lambda function that calls the Rebuild SDK natively."),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/Rebuild-File-Architecture.png",alt:"Figure1"}))),Object(a.b)("p",null,"This sequence diagram shows what is occuring within the Rebuild lambda function, we first make sure it is a supported type. Then, we run an analysis of the file - anlysis reports allow us to see information on the structure of the file and of interest to us here are issues. If there are no issues then a Rebuild of the file is possible, the rebuild file is returned in memory and passed back to the requestor in a binary response body."),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/Rebuild-File-Sequence.png",alt:"Figure2"}))),Object(a.b)("p",null,"This is a great way to quickly get file-in, file-out but because we can't have a payload to the lambda function larger than ",Object(a.b)("strong",{parentName:"p"},"6mb")," we need a second pathway."),Object(a.b)("h3",{id:"file-in-via-authenticated-urls"},"File in via authenticated URLs"),Object(a.b)("p",null,"This second pathway allows a much larger size of file to be processed, by taking two urls:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"one for input which needs to point to a file and have permission to make a GET request."),Object(a.b)("li",{parentName:"ul"},"one for output which needs to be able to accept a POST request to store the file.")),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/Rebuild-S3-Architecture.png",alt:"Figure3"}))),Object(a.b)("p",null,"An example use case would be having the file in an S3 bucket and utilising the Pre-Signed URL's to provide just enough permissions to get the file, and a Pre-Signed URL with enough permissions to put the file into a bucket in S3."),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/Rebuild-URL-Sequence.png",alt:"Figure4"}))),Object(a.b)("p",null,"This pathway has advantages in that the caller retains control of the security of the file, the API simply has the file in memory to do the processing and writes it back to the callers domain. Future use cases will start to require us to start writing file to our storage but for these calls - its cleaner this way."))}s.isMDXComponent=!0},200:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var i=r(0),n=r.n(i);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),s=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=i,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return r?n.a.createElement(f,l(l({ref:t},c),{},{components:r})):n.a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);