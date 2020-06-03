(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(2),a=n(9),l=(n(0),n(200)),r={title:"File Type Detection using AWS Serverless Application Model (SAM)"},o={id:"guides/file-type-detection-using-aws-sam",title:"File Type Detection using AWS Serverless Application Model (SAM)",description:"Background",source:"@site/docs/guides/file-type-detection-using-aws-sam.md",permalink:"/glasswall-engineering-site/docs/guides/file-type-detection-using-aws-sam"},c=[{value:"Background",id:"background",children:[]},{value:"Solution Overview",id:"solution-overview",children:[]},{value:"Endpoints",id:"endpoints",children:[{value:"/api/FileTypeDetection/base64",id:"apifiletypedetectionbase64",children:[]},{value:"/api/FileTypeDetection/sas",id:"apifiletypedetectionsas",children:[]}]},{value:"Deployment Option 1 - Using Visual Studio IDE",id:"deployment-option-1---using-visual-studio-ide",children:[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Steps:",id:"steps",children:[]}]},{value:"Deployment Option - 2: Manually create cloud formation",id:"deployment-option---2-manually-create-cloud-formation",children:[{value:"Pre-requisites",id:"pre-requisites-1",children:[]},{value:"Steps",id:"steps-1",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"background"},"Background"),Object(l.b)("p",null,"The File Type Detection Product leverages azure serverless functions, with an AWS\ngateway api redirecting requests and limiting usage. The purpose of this exercise was to\nconvert the azure components to AWS counterpart Lambda\u2019s."),Object(l.b)("h2",{id:"solution-overview"},"Solution Overview"),Object(l.b)("p",null,"The Azure Function relies on a multipart binary file being in the body of the request, however\nthis does not work as expected on a deployed Lambda, since decoding of the incoming\nlambda request seems to lose the content when received by the code. Two endpoints have\nbeen produced to allow for alternative mechanisms for file type detection:"),Object(l.b)("p",null,"The following endpoints can be reused by other products, provided they have a way of\nconverting a file to base64 or providing a URL to a file. A good way of using the API would\nbe by leveraging the s3 file upload product. Refer to the S3 File Upload Product\ndocumentation to find out how to generate read SAS tokens that can be used on this API"),Object(l.b)("h2",{id:"endpoints"},"Endpoints"),Object(l.b)("h3",{id:"apifiletypedetectionbase64"},"/api/FileTypeDetection/base64"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example Workflow Diagram:")),Object(l.b)("p",null,Object(l.b)("img",Object(i.a)({parentName:"p"},{src:"/img/docs/guides/Figure1.png",alt:"Figure1"}))),Object(l.b)("p",null,"This endpoint allows a client service to send a base64 encoding of a file in the body. A\nlimitation of this however, is that you cannot send a file larger than lambda\u2019s maximum\nrequest size of 6MB."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example Request Generated by Postman:")),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),"curl --location --request POST '[API GATEWAY URL]/api/FileTypeDetection/base64' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n\"Base64\": \u201c[YOUR BASE64 GOES HERE]\u201d\n}\u2019\n")),Object(l.b)("p",null,"This endpoint does the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Decodes the base64 file",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"If it is unsuccessful it returns BAD REQUEST"),Object(l.b)("li",{parentName:"ul"},"If it is successful then it will send the file to the core engine."))),Object(l.b)("li",{parentName:"ul"},"The core engine will then try and determine the file type")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"If successful the file type will be returned in an OK response in JSON format"),Object(l.b)("li",{parentName:"ul"},"Otherwise Unknown will be returned instead.")),Object(l.b)("h3",{id:"apifiletypedetectionsas"},"/api/FileTypeDetection/sas"),Object(l.b)("p",null,Object(l.b)("img",Object(i.a)({parentName:"p"},{src:"/img/docs/guides/Figure2.png",alt:"Figure2"}))),Object(l.b)("p",null,"This endpoint allows a client to send a SAS url to a file to be downloaded and have its file\ntype detected. An added benefit of this is the benefit of being able to upload files over the\n6MB size threshold."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example Request Generated by Postman:")),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),"curl --location --request POST '[API GATEWAY URL]/api/FileTypeDetection/sas' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n\"SasUrl\": \"[YUR SAS URL GOES HERE]\"\n}'\n")),Object(l.b)("p",null,"This endpoint does the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Downloads the file found at SasUrl using a GET request.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"If it is unsuccessful it returns BAD REQUEST"),Object(l.b)("li",{parentName:"ul"},"If it is successful then it will send the file to the core engine."))),Object(l.b)("li",{parentName:"ul"},"The core engine will then try and determine the file type",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"If successful the file type will be returned in an OK response in JSON format"),Object(l.b)("li",{parentName:"ul"},"Otherwise Unknown will be returned instead.")))),Object(l.b)("h2",{id:"deployment-option-1---using-visual-studio-ide"},"Deployment Option 1 - Using Visual Studio IDE"),Object(l.b)("h3",{id:"pre-requisites"},"Pre-requisites"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Visual Studio 2017 or 2019 installed."),Object(l.b)("li",{parentName:"ol"},"AWS Toolkit extension for Visual Studio"),Object(l.b)("li",{parentName:"ol"},"AWS SAM CLI"),Object(l.b)("li",{parentName:"ol"},"Credentials configured for AWS"),Object(l.b)("li",{parentName:"ol"},"Permissions to access repo: cloud-serverless-sdk")),Object(l.b)("h3",{id:"steps"},"Steps:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Clone repo ",Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/filetrust/cloud-serverless-sdk"}),"https://github.com/filetrust/cloud-serverless-sdk")),Object(l.b)("li",{parentName:"ol"},"Open .sln file Glasswall.CloudSdk.AWS"),Object(l.b)("li",{parentName:"ol"},"Right click on project Glasswall.Cloudsdk.AWS.FileTypeDetection"),Object(l.b)("li",{parentName:"ol"},"Click publish to AWS lambda"),Object(l.b)("li",{parentName:"ol"},"For options:",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"Account profile: Choose one that has permissions to create a cloud formation."),Object(l.b)("li",{parentName:"ol"},"Region: Where the lambda will run"),Object(l.b)("li",{parentName:"ol"},"Stack name: This will be what the name of the stack the cloud formation will use, resources will use this in their name."),Object(l.b)("li",{parentName:"ol"},"S3 bucket: The bucket where the source code will be zipped and uploaded too")))),Object(l.b)("h2",{id:"deployment-option---2-manually-create-cloud-formation"},"Deployment Option - 2: Manually create cloud formation"),Object(l.b)("h3",{id:"pre-requisites-1"},"Pre-requisites"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"An aws account"),Object(l.b)("li",{parentName:"ol"},"Permissions to create cloud formations")),Object(l.b)("h3",{id:"steps-1"},"Steps"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Create a bucket for the deployed code.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Upload Deployment zip into bucket, take note of the name")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Edit serverless.template file, update the codeuri field to reflect the location of the deployment."),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Format example: s3://nameofbucket/nameoffolder/nameof.zip"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Log on to aws")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Navigate to AWS CloudFormation")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Create a stack"),Object(l.b)("p",{parentName:"li"},Object(l.b)("img",Object(i.a)({parentName:"p"},{src:"/img/docs/guides/Figure3.png",alt:"Figure3"})))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Select serverless.template from disk"),Object(l.b)("p",{parentName:"li"},Object(l.b)("img",Object(i.a)({parentName:"p"},{src:"/img/docs/guides/Figure4.png",alt:"Figure4"})))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Enter a name for the stack")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click next until end and finish")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Success should look like this:"),Object(l.b)("p",{parentName:"li"},Object(l.b)("img",Object(i.a)({parentName:"p"},{src:"/img/docs/guides/Figure5.png",alt:"Figure5"}))))))}p.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=i,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||l;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);