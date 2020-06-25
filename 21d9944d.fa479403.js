(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(2),o=a(9),n=(a(0),a(207)),s={title:"AWS Custom Authorizer - API Authorization and Access Proposal \u2013 2 Step solution (recommended)"},i={id:"guides/aws-customer-authoriser-api-authorisation-and-access",isDocsHomePage:!1,title:"AWS Custom Authorizer - API Authorization and Access Proposal \u2013 2 Step solution (recommended)",description:"Background and Problem",source:"@site/docs/guides/aws-customer-authoriser-api-authorisation-and-access.md",permalink:"/docs/guides/aws-customer-authoriser-api-authorisation-and-access"},c=[{value:"Useful resources",id:"useful-resources",children:[]},{value:"User Purchases a product from store:",id:"user-purchases-a-product-from-store",children:[]},{value:"User generates JWT using the access credentials emails to them",id:"user-generates-jwt-using-the-access-credentials-emails-to-them",children:[]},{value:"User invokes the product API endpoint",id:"user-invokes-the-product-api-endpoint",children:[]}],l={rightToc:c};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"background-and-problem"},"Background and Problem"),Object(n.b)("p",null,"Currently, we are using AWS API Gateway usage plans for gaining access to a hosted amazon resource we offer. This approach has negative implications which is why I have produced this solution which is the more secure and recommended way of authenticating a user to gain access to an API."),Object(n.b)("p",null,"Some of the main disadvantages to the current way which we are authenticating users to access our APIs and invoke our products are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"It is not the recommended approach by AWS. ",'"',"Don","'","t rely on API keys as your only means of authentication and authorization for your APIs",'"'," (AWS)."),Object(n.b)("li",{parentName:"ul"},"If a single user gets access to a valid API key which is used across multiple APIs then the user can have access to multiple APIs."),Object(n.b)("li",{parentName:"ul"},"We are currently relying on usage plans which allows for a throttle and quota to be set, but this is not a viable and long-lasting solution as the quota will auto renew. The problem here is if a user purchases 50 credits and gets an API key, then they will have 50 credits for life and not one off!")),Object(n.b)("h1",{id:"solution-overview"},"Solution Overview"),Object(n.b)("p",null,"This document will provide a solution which can be used across all products for customers accessing our products which are hosted on AWS in a safe and secure way."),Object(n.b)("p",null,"After carrying out extensive research, I have learnt about a very common and effective approach that will enable us to be able to maintain user access in a centralised location (DB) and will eliminate the blockers we face with usage plans, the main being the lack of capability to have a one of API key. As the quota works on a monthly basis."),Object(n.b)("p",null,"The AWS services this solution will make use of are as follows:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"S3"),Object(n.b)("li",{parentName:"ul"},"Lambda"),Object(n.b)("li",{parentName:"ul"},"API Gateway ",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Lambda Authorizer"))),Object(n.b)("li",{parentName:"ul"},"SES"),Object(n.b)("li",{parentName:"ul"},"DynamoDB (can be Amazon ElastiCache or DynamoDB, Google Cloud Datastore, etc.)")),Object(n.b)("h2",{id:"useful-resources"},"Useful resources"),Object(n.b)("p",null,"Here are some of the resources which I extracted and found very useful from my research:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=-0EG17oVxV0&feature=youtu.be"}),"https://www.youtube.com/watch?v=-0EG17oVxV0","&","feature=youtu.be")," \u2013 A brief video from AWS showing a way of authorizing with JWT. Similar to my suggestion below, but my suggestion is custom to our needs."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://serverless.com/blog/strategies-implementing-user-authentication-serverless-applications/"}),"https://serverless.com/blog/strategies-implementing-user-authentication-serverless-applications/")," - Very good article from an architect at serverless which talks about the pros and cons of DB and JSON Web Tokens."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html"}),"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html")," - This is on the AWS documentation which talks about usage plans and states how it is not recommended as an only means of authorisation")),Object(n.b)("h1",{id:"user-flows"},"User Flows"),Object(n.b)("p",null,"Below are 3 flows which present how this new form of authorisation works:"),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/filetrust/glasswall-engineering-site/blob/master/docs/guides/img/custom-authorizer-flow1-purchase-from-store.png",alt:"custom-authorizer-flow1"}))),Object(n.b)("h2",{id:"user-purchases-a-product-from-store"},"User Purchases a product from store:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"User purchases a product from Shopify."),Object(n.b)("li",{parentName:"ol"},"An event gets triggered from Zapier which gets the username/email/product/quantity(credits) invokes an API with these details."),Object(n.b)("li",{parentName:"ol"},"The Lambda adds or updates an entry with the information retrieved from the users purchase. The table will include details such as user access credentials (identifiers that we generate), products (each product listed), products credits (credits for each product to keep track of how many the user purchased)."),Object(n.b)("li",{parentName:"ol"},"Amazon SES is invoked with access credentials which the user will need to generate a temporary JWT."),Object(n.b)("li",{parentName:"ol"},"User receives an email.")),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/filetrust/glasswall-engineering-site/blob/master/docs/guides/img/custom-authorizer-flow2-generate-token-from-access-credentials.png",alt:"custom-authorizer-flow2"}))),Object(n.b)("h2",{id:"user-generates-jwt-using-the-access-credentials-emails-to-them"},"User generates JWT using the access credentials emails to them"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"The user invokes the API the generate the JWT providing the access credentials as query string parameters."),Object(n.b)("li",{parentName:"ol"},"The Lambda query","'","s the database to get the user information based on the credentials provided."),Object(n.b)("li",{parentName:"ol"},"The Lambda creates the JWT."),Object(n.b)("li",{parentName:"ol"},"The JWT is returned to the user as a JSON response.")),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/filetrust/glasswall-engineering-site/blob/master/docs/guides/img/custom-authorizer-flow3-lambda-authoriser.png",alt:"custom-authorizer-flow3"}))),Object(n.b)("h2",{id:"user-invokes-the-product-api-endpoint"},"User invokes the product API endpoint"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"The user invokes the product API endpoint sending through the JWT as a header (the same way x-api-key is provided)."),Object(n.b)("li",{parentName:"ol"},"The Lambda will then validate the token:"),Object(n.b)("li",{parentName:"ol"},"Decode JWT"),Object(n.b)("li",{parentName:"ol"},"Query DB to see if the user has permission and credits to access the API endpoint."),Object(n.b)("li",{parentName:"ol"},"If the token is valid, a policy is created which is set to execute::allow, otherwise execute::deny."),Object(n.b)("li",{parentName:"ol"},"Then, the flow will either continue to execute the product Lambda, or deny the user access and not execute the product Lambda.")),Object(n.b)("h1",{id:"advantages-of-this-approach"},"Advantages of this approach:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Centralized authentication solution to be used across all application",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"If our authentication approach changes, it will require a change only in a single location"),Object(n.b)("li",{parentName:"ul"},"We can make use of JWT tokens with a short expiry time to ensure better security"),Object(n.b)("li",{parentName:"ul"},"We will maintain a database with all data relevant to us (e.g. credits available)",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"This also accommodates for scenarios where the user invoked an API in error or one of our APIs returning an error (caused by code). We will be able to quickly modify the available credits for the customer")))))))}u.isMDXComponent=!0},207:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return d}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(a),p=r,d=h["".concat(s,".").concat(p)]||h[p]||b[p]||n;return a?o.a.createElement(d,i(i({ref:t},l),{},{components:a})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<n;l++)s[l]=a[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);