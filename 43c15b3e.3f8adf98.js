(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),s=(n(0),n(199)),i={},l={id:"processes/cloud_products_testing",title:"cloud_products_testing",description:"Glasswall Cloud SDK Test Approach",source:"@site/docs/processes/cloud_products_testing.md",permalink:"/glasswall-engineering-site/docs/processes/cloud_products_testing"},c=[{value:"Glasswall Cloud SDK Test Approach",id:"glasswall-cloud-sdk-test-approach",children:[]}],o={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"glasswall-cloud-sdk-test-approach"},"Glasswall Cloud SDK Test Approach"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Introduction")),Object(s.b)("p",null,"This test approach document describes the approach, process, workflows and methodologies used to plan, organize, execute and manage testing of the Cloud SDK products."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"In Scope")),Object(s.b)("p",null,"The test scope includes:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Testing of all functional, performance ","&"," security requirements"),Object(s.b)("li",{parentName:"ul"},"Quality requirements for customer onboarding")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Out of Scope")),Object(s.b)("p",null,"The test scope excludes:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Testing of disaster recovery")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Quality Objectives")),Object(s.b)("p",null,"The objective of testing the Cloud SDK is to confirm that the product meets the full requirements including non-functional and satisfies the use case scenarios as well as maintaining the quality of the products. When using the products, the user should find that the project has met or exceeded all their expectations."),Object(s.b)("p",null,"Any changes, additions, or deletions to the requirements should be documented and tested at the highest level of quality possible."),Object(s.b)("p",null,"Identify and expose all issues and associated risks, communicate all known issues to the project squad/team and ensure that all issues are addressed before release."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Roles and Responsibilities")),Object(s.b)("p",null,"Product owner"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Develop Use cases and requirements"),Object(s.b)("li",{parentName:"ul"},"Products availability on the store with required details")),Object(s.b)("p",null,"Developer"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Develop the products"),Object(s.b)("li",{parentName:"ul"},"Conduct Unit ","&"," integration testing"),Object(s.b)("li",{parentName:"ul"},"Provide test environment"),Object(s.b)("li",{parentName:"ul"},"Support test team")),Object(s.b)("p",null,"QA"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Support testing activities as Customer Advocates"),Object(s.b)("li",{parentName:"ul"},"End to End functional testing of each product"),Object(s.b)("li",{parentName:"ul"},"Performance testing of each product"),Object(s.b)("li",{parentName:"ul"},"Usability ","&"," Customer acceptance test for each product representing end users."),Object(s.b)("li",{parentName:"ul"},"Identify dependencies for ","&"," between test scripts and request support for testing ","&"," user accounts set up or data etc...")),Object(s.b)("p",null,"InfoSec ",Object(s.b)("strong",{parentName:"p"},":")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Support security testing of the products")),Object(s.b)("p",null,"SRE:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Products ","&"," platform monitoring in Production")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Test Execution")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Unit ","&"," Integration Tests")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Unit Testing is conducted by the Developer during code development process to ensure that proper functionality and code coverage have been achieved both during coding and in preparation for acceptance into the QA environment"),Object(s.b)("li",{parentName:"ul"},"Integration testing conducted to check the functions integration with external services")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Smoke Tests")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Automated smoke tests will be added to verify the major functionality at a high level ","&"," determine if further testing is possible at every code deploy"),Object(s.b)("li",{parentName:"ul"},"Testing will be suspended on the affected release when smoke tests fails ","&"," resumed when all smoke tests have passed")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"End to End Functional Acceptance Tests")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Integration tests which will simulate an entire workflow, request/response cycle making http requests against deployed API ","&"," checking response, exercising the functions to ensure that everything work as expected etc...")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"These tests will include the critical path scenarios targeted on features and functionalities of the products from a user perspective")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The critical paths for each product should be clearly defined from file submission through to receipt of protected file")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The tests scenarios to validate the paths will be defined ","&"," automated in collaboration with the developer")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The tests should aim at identifying:"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Configuration issues: Testing access, limits, functions have the right IAM permissions, the S3 events are received ","&"," saved to the correct buckets etc."),Object(s.b)("li",{parentName:"ul"},"Technical workflow issues: Testing for timeouts, that requests are being parsed ","&"," used as expected ","&"," successful responses and errors are handled correctly"),Object(s.b)("li",{parentName:"ul"},"Business logic issues: Testing that the business logic rules of the products are followed"),Object(s.b)("li",{parentName:"ul"},"Integration issues: Testing incoming request structure is read correctly ","&"," the orders are stored correctly to the database etc."))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Testing will be suspended ","&"," resumed to accommodate any critical scope change that impacts the critical paths"))),Object(s.b)("p",null,"The various tests used will be run as a regression testing during the repeated cycles of identifying bugs and taking receipt of new builds containing bug fix code changes"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Usability, UI ","&"," Customer Acceptance Tests")),Object(s.b)("p",null,"These tests will include browser automated tests ","&"," manual tests covering the user flow and should aim at ensuring:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A potential customer can successfully view, try, purchase, ","&"," receive the best experience possible using different order and product scenarios"),Object(s.b)("li",{parentName:"ul"},"The customer can easily consume the products with none or minimum support"),Object(s.b)("li",{parentName:"ul"},"All necessary setup instructions, file limitations, requirements, support etc. are clearly visible"),Object(s.b)("li",{parentName:"ul"},"The user journey is as expected on a mobile device (Android, Apple phones, tablets)"),Object(s.b)("li",{parentName:"ul"},"The user journey is successful across main browser types"),Object(s.b)("li",{parentName:"ul"},"The user journey is as expected from different locations ","&"," correct currency applied (UK ","&"," US)"),Object(s.b)("li",{parentName:"ul"},"The correct purchased credits or file quantity is fulfilled"),Object(s.b)("li",{parentName:"ul"},"The order processing is as expected, statuses are accurately updated, the available payment methods can be used etc."),Object(s.b)("li",{parentName:"ul"},"The order is fulfilled in the expected timings defined for each product, with the required customer interaction /communication steps"),Object(s.b)("li",{parentName:"ul"},"The billing system works ","&"," plan selections, upgrade, downgrades ","&"," cancellations can be handled smoothly")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Performance ","&"," Load Tests")),Object(s.b)("p",null,"These tests will aim at checking:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The functions execution limits ","&"," the performance of the system"),Object(s.b)("li",{parentName:"ul"},"The system","'","s ability to handle concurrent executions ","&"," different amount of traffic load"),Object(s.b)("li",{parentName:"ul"},"High availability ","&"," the response time, slowness ","&"," error rate")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Security Analysis")),Object(s.b)("p",null,"The system will be security monitored to ensure:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The security of the data, the functions and their dependencies to uncover any vulnerabilities"),Object(s.b)("li",{parentName:"ul"},"Access is assigned on least privilege principle"),Object(s.b)("li",{parentName:"ul"},"Security tagging is applied on all assets"),Object(s.b)("li",{parentName:"ul"},"All accounts are monitored for malicious indicators"),Object(s.b)("li",{parentName:"ul"},"Continuous internal penetration testing of GW AWS assets")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Production Monitoring")),Object(s.b)("p",null,"Monitoring in |Production will aim at measuring:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Latency: The latency of the successful ","&"," failed requests"),Object(s.b)("li",{parentName:"ul"},"Traffic: How much demand is being placed on the system"),Object(s.b)("li",{parentName:"ul"},"Errors: The rate of requests that fail either implicitly or explicitly but coupled with wrong content or by policy"),Object(s.b)("li",{parentName:"ul"},"Saturation: How full the system is, a measure of the system fraction, emphasizing the resources that are most constrained")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Bug Reporting")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The test results, issues ","&"," any major dependencies will be reported immediately at each test run via Jira or other incoming issues/bugs will be tracked in GitHub")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The bug Severity levels for the products should be defined ","&"," correctly assigned to each bug when raised while the priority will be assigned at triage as per the current bug priority level set in the Azure DevOps wiki."))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Test Completeness")),Object(s.b)("p",null,"Testing for each product will be considered complete when the following conditions have been met:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The product is stable ","&"," meets functional requirements, testing is complete"),Object(s.b)("li",{parentName:"ul"},"The user journey on purchasing of the product on the store is as defined"),Object(s.b)("li",{parentName:"ul"},"Script execution of all test cases in all areas passed."),Object(s.b)("li",{parentName:"ul"},"Automated test cases in all areas passed."),Object(s.b)("li",{parentName:"ul"},"All priority 1 and 2 bugs resolved and closed."),Object(s.b)("li",{parentName:"ul"},"The product","'","s functions can handle the required load ","&"," meet the expected performance level"),Object(s.b)("li",{parentName:"ul"},"The product has been scanned for security vulnerabilities meet expected level of security")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Other Considerations:")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"QA environment should be an exact replica of the production environment")))}u.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||s;return n?a.a.createElement(m,l(l({ref:t},o),{},{components:n})):a.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<s;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);