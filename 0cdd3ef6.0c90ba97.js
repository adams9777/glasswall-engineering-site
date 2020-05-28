(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),i=(r(0),r(199)),o={title:"File Type Detection - How it works",sidebar_label:"How it works"},c={id:"guides/file-type-detection-how-it-works",title:"File Type Detection - How it works",description:"How File Type Detection Works?",source:"@site/docs/guides/file-type-detection-how-it-works.md",permalink:"/docs/guides/file-type-detection-how-it-works",sidebar_label:"How it works"},l=[{value:"How File Type Detection Works?",id:"how-file-type-detection-works",children:[]},{value:"Consuming the API",id:"consuming-the-api",children:[]},{value:"Support and Feedback",id:"support-and-feedback",children:[]},{value:"FAQs",id:"faqs",children:[]}],b={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"how-file-type-detection-works"},"How File Type Detection Works?"),Object(i.b)("p",null,"Along with an API key, users upload files they want to verify. Keys are purchased based on required file volume. The file is analysed by our cloud service with the result returned via a JSON. All uploaded files are immediately destroyed, ensuring complete protection of your data."),Object(i.b)("p",null,"Here are all the different types of files the Glasswall Rebuild engine detects using the internal structure of files:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"File Types"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"File Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PDF"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adobe Portable Document")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JPG GIF PNG EMF WMF TIFF GeoTIFF BMP"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Images")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOC DOT"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MS Word 97-2003")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XLS XLT"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MS Excel 97-2003")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PPT POT"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MS PowerPoint 97-2003")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOCX DOCM DOTX DOTM"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MS Word 2003 & later")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XLSX XLAM XLSM XLTX XLTM"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MS Excel 2003 & later")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XPPTX POTX POTM PPTM PPSX PPAM PPSM"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MS PowerPoint 2003 & later")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WAV MP3"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Audio")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MPG MP4"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Video")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PE DLL MUI EXE MACH-O COFF ELF"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Portable executables")))),Object(i.b)("h3",{id:"consuming-the-api"},"Consuming the API"),Object(i.b)("p",null,"Once you have your API key by email, use this web UI ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://filetrust.github.io/product-file-type-detection/#/drop"}),"https://filetrust.github.io/product-file-type-detection/#/drop")," or this Swagger UI ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://filetrust.github.io/product-file-type-detection/#/default/post_api_FileTypeDetection"}),"https://filetrust.github.io/product-file-type-detection/#/default/post_api_FileTypeDetection")," (shown in the video below) to start the service and test your files:"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.youtube.com/watch?v=pEvt85P7Y9Y"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"http://img.youtube.com/vi/pEvt85P7Y9Y/0.jpg",alt:null})))),Object(i.b)("h3",{id:"support-and-feedback"},"Support and Feedback"),Object(i.b)("p",null,"Please use the product-file-type-detection GitHub repo which also contains the Swagger UI code. Open an Issue with any bugs/issues that you discover or provide feedback on how we can make this service better."),Object(i.b)("h3",{id:"faqs"},"FAQs"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Question:")," Where can I access the API?"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Answer:")," Check out our swagger page that provides documentation on the API itself"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Question:")," How can I upload multiple files for file type detection?"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Answer:")," Try out our file type detection drop site. You can upload multiple files at once. By default our site uses the public key with which activity is limited. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://filetrust.github.io/product-file-type-detection/#/drop"}),"https://filetrust.github.io/product-file-type-detection/#/drop")))}p.isMDXComponent=!0},199:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,O=u["".concat(o,".").concat(s)]||u[s]||d[s]||i;return r?a.a.createElement(O,c(c({ref:t},b),{},{components:r})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<i;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);