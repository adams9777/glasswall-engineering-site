(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),l=n(9),i=(n(0),n(200)),r={title:"File Analyse using AWS Serverless Application Model (SAM)"},o={id:"guides/file-analyse-using-aws-sam",title:"File Analyse using AWS Serverless Application Model (SAM)",description:"Background",source:"@site/docs/guides/file-analyse-using-aws-sam.md",permalink:"/glasswall-engineering-site/docs/guides/file-analyse-using-aws-sam"},s=[{value:"Background",id:"background",children:[]},{value:"Solution Overview",id:"solution-overview",children:[]},{value:"Endpoints",id:"endpoints",children:[{value:"/api/Analyse/base64",id:"apianalysebase64",children:[]},{value:"/api/Analyse/sas",id:"apianalysesas",children:[]}]},{value:"Deployment Option 1 - Visual studio",id:"deployment-option-1---visual-studio",children:[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Steps:",id:"steps",children:[]}]},{value:"Deployment Option - 2: Manually create cloud formation",id:"deployment-option---2-manually-create-cloud-formation",children:[{value:"Pre-requisites",id:"pre-requisites-1",children:[]},{value:"Steps:",id:"steps-1",children:[]}]}],c={rightToc:s};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"background"},"Background"),Object(i.b)("p",null,"The File Analyse Product leverages azure serverless functions, with an AWS gateway api\nredirecting requests and limiting usage. The purpose of this exercise was to convert the\nazure components to AWS counterpart Lambda\u2019s."),Object(i.b)("h2",{id:"solution-overview"},"Solution Overview"),Object(i.b)("p",null,"The Azure Function relies on a multipart binary file being in the body of the request, however\nthis does not work as expected on a deployed Lambda, since decoding of the incoming\nlambda request seems to lose the content when received by the code. Two endpoints have\nbeen produced to allow for alternative mechanisms for file analyse :"),Object(i.b)("p",null,"The following endpoints can be reused by other products, provided they have a way of\nconverting a file to base64 or providing a URL to a file. A good way of using the API would\nbe by leveraging the s3 file upload product. Refer to the S3 File Upload Product\ndocumentation to find out how to generate read SAS tokens that can be used on this API"),Object(i.b)("h2",{id:"endpoints"},"Endpoints"),Object(i.b)("h3",{id:"apianalysebase64"},"/api/Analyse/base64"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example Workflow Diagram:",Object(i.b)("img",Object(a.a)({parentName:"strong"},{src:"/img/docs/guides/Figure6.png",alt:"Figure6"})))),Object(i.b)("p",null,"  This endpoint allows a client service to send a base64 encoding of a file in the body. A\nlimitation of this however, is that you cannot send a file larger than lambda\u2019s maximum\nrequest size of 6MB."),Object(i.b)("p",null,"  ",Object(i.b)("strong",{parentName:"p"},"Example Request Generated by Postman:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"curl --location --request POST '[API GATEWAY URL]/api/Analyse/base64' \\\n --header 'Content-Type: application/json' \\\n --data-raw '{\n \"Base64\": \u201c[YOUR BASE64 GOES HERE]\u201d\n }\u2019\n")),Object(i.b)("p",null,"  This endpoint does the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Decodes the base64 file",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If it is unsuccessful it returns BAD REQUEST"),Object(i.b)("li",{parentName:"ul"},"If it is successful then it will send the file to the core engine."))),Object(i.b)("li",{parentName:"ul"},"Default content management rules are applied."),Object(i.b)("li",{parentName:"ul"},"The core engine will then analyse",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If successful the XML analysis report will be returned in an OK response."),Object(i.b)("li",{parentName:"ul"},"Otherwise an internal server error will occur")))),Object(i.b)("h3",{id:"apianalysesas"},"/api/Analyse/sas"),Object(i.b)("p",null,"  ",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/docs/guides/Figure7.png",alt:"Figure7"}))),Object(i.b)("p",null,"  This endpoint allows a client to send a SAS url to a file to be downloaded and have its\ncontents analysed. An added benefit of this is the benefit of being able to upload files over\nthe 6MB size threshold."),Object(i.b)("p",null,"  ",Object(i.b)("strong",{parentName:"p"},"Example Request Generated by Postman:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"  curl --location --request POST '[API GATEWAY URL]/api/Analyse/sas' \\\n  --header 'Content-Type: application/json' \\\n         --data-raw '{\n  \"SasUrl\": \"[YUR SAS URL GOES HERE]\"\n  }'\n")),Object(i.b)("p",null,"  Example:"),Object(i.b)("p",null,"  ",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/docs/guides/Figure8.png",alt:"Figure8"}))),Object(i.b)("p",null,"  This endpoint does the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Downloads the file found at SasUrl using a GET request."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If it is unsuccessful it returns BAD REQUEST"),Object(i.b)("li",{parentName:"ul"},"If it is successful then it will send the file to the core engine."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Default content management rules are applied"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The core engine will then analyse",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If successful the XML analysis report will be returned in an OK response."),Object(i.b)("li",{parentName:"ul"},"Otherwise an internal server error will occur")))))),Object(i.b)("h2",{id:"deployment-option-1---visual-studio"},"Deployment Option 1 - Visual studio"),Object(i.b)("h3",{id:"pre-requisites"},"Pre-requisites"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Visual Studio 2017 or 2019 installed."),Object(i.b)("li",{parentName:"ol"},"AWS Toolkit extension for Visual Studio"),Object(i.b)("li",{parentName:"ol"},"AWS SAM CLI"),Object(i.b)("li",{parentName:"ol"},"Credentials configured for AWS")),Object(i.b)("h3",{id:"steps"},"Steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Clone repo ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/filetrust/cloud-serverless-sdk"}),"https://github.com/filetrust/cloud-serverless-sdk")),Object(i.b)("li",{parentName:"ol"},"Open .sln file Glasswall.CloudSdk.AWS"),Object(i.b)("li",{parentName:"ol"},"Right click on project Glasswall.Cloudsdk.AWS.Analyse"),Object(i.b)("li",{parentName:"ol"},"Click publish to AWS lambda"),Object(i.b)("li",{parentName:"ol"},"For options:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Account profile: Choose one that has permissions to create a cloud formation."),Object(i.b)("li",{parentName:"ol"},"Region: Where the lambda will run"),Object(i.b)("li",{parentName:"ol"},"Stack name: This will be what the name of the stack the cloud formation will\nuse, resources will use this in their name."),Object(i.b)("li",{parentName:"ol"},"S3 bucket: The bucket where the source code will be zipped and uploaded\ntoo")))),Object(i.b)("h2",{id:"deployment-option---2-manually-create-cloud-formation"},"Deployment Option - 2: Manually create cloud formation"),Object(i.b)("h3",{id:"pre-requisites-1"},"Pre-requisites"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"An aws account"),Object(i.b)("li",{parentName:"ol"},"Permissions to create cloud formations")),Object(i.b)("h3",{id:"steps-1"},"Steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a bucket for the deployed code.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Upload Deployment zip into bucket, take note of the name")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Edit serverless.template file, update the codeuri field to reflect the location of the\ndeployment."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Format example: s3://nameofbucket/nameoffolder/nameof.zip"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log on to aws")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Navigate to AWS CloudFormation")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a stack\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/docs/guides/Figure9.png",alt:"Figure9"})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select serverless.template from disk\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/docs/guides/Figure10.png",alt:"Figure10"})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Enter a name for the stack")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click next until end and finish"))))}b.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),b=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||i;return n?l.a.createElement(m,o(o({ref:t},c),{},{components:n})):l.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);