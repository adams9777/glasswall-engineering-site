(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{186:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),i=r(9),a=(r(0),r(199)),o={title:"Rebuild API",sidebar_label:"Overview"},s={id:"product-descriptions/product-overview",title:"Rebuild API",description:"The Rebuild API provides developers the pathway to obtaining safe and secure files. It combines the battle hardened capabilities of our Rebuild SDK with the scalability and performance of a cloud solution.",source:"@site/docs/product-descriptions/product-overview.md",permalink:"/docs/product-descriptions/product-overview",sidebar_label:"Overview",sidebar:"someSidebar",next:{title:"Rebuild API - Under the Hood",permalink:"/docs/guides/file-rebuild-how-it-works"}},c=[],l={rightToc:c};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Rebuild API provides developers the pathway to obtaining safe and secure files. It combines the battle hardened capabilities of our Rebuild SDK with the scalability and performance of a cloud solution."),Object(a.b)("p",null,"The simplest way to start using is to purchase credentials from our ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://glasswall-store.com/"}),"store")," and go to one of our quickstarts (",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://engineering.glasswallsolutions.com/docs/products/cloud-sdk/rebuild/rebuild-quickstart"}),"Rebuild"),")."),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Before you integrate Rebuild into your solution, be aware that file in the HTTP body only supports files up to 6MB due to a limitation in the request payload to AWS Lambda. If your use case deals with larger files, please use the input URL based pathway which currently supports files up to 30MB"))),Object(a.b)("p",null,"The Rebuild API resources come in 2 general pathways: Direct File & Secured URL."),Object(a.b)("p",null,"For direct file, the binary data of the file is posted in the body of the http request where it is processed by and the result returned."),Object(a.b)("p",null,"The limitation of this pathway is from the serverless computing platform we are using - AWS Lambda has a maximum payload of 6mb, if your use case deals with files within this limit then this is a great way to quickly get files rebuilt to known good."),Object(a.b)("p",null,"If you know that this limit is too restrictive then the pathway for you is to pass a secured URL which supports files up to 30MB. An example of this is a signed S3 url, this provides time limited access to a file (see our FAQ section for the permissions required)."),Object(a.b)("p",null,"The rebuilt files are placed in an output storage location accessed by a secured URL. "))}u.isMDXComponent=!0},199:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return r?i.a.createElement(f,s(s({ref:t},l),{},{components:r})):i.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);