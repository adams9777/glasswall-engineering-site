(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{163:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),l=r(9),a=(r(0),r(207)),o={title:"Set-up of CI/CD for GitHub Repository",sidebar_label:"CI/CD Setup"},i={id:"guides/ci-cd-pipeline",isDocsHomePage:!1,title:"Set-up of CI/CD for GitHub Repository",description:"This guide will walk through the steps to set-up and create a CI/CD pipeline for your GitHub Repository",source:"@site/docs/guides/ci-cd-pipeline.md",permalink:"/docs/guides/ci-cd-pipeline",sidebar_label:"CI/CD Setup",sidebar:"someSidebar",previous:{title:"Security At Glasswall",permalink:"/docs/GW_Security/Security_Main"}},c=[{value:"Steps",id:"steps",children:[{value:"Branch Policy",id:"branch-policy",children:[]},{value:"Repo Security",id:"repo-security",children:[]},{value:"Gated Build",id:"gated-build",children:[]},{value:"Setting Up Serverless Framework",id:"setting-up-serverless-framework",children:[]},{value:"CI Build",id:"ci-build",children:[]},{value:"Deploy Build",id:"deploy-build",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,r=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This guide will walk through the steps to set-up and create a CI/CD pipeline for your GitHub Repository"),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/CI-CD.png",alt:null}))),Object(a.b)("h2",{id:"steps"},"Steps"),Object(a.b)("h3",{id:"branch-policy"},"Branch Policy"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"On the GitHub repo, create a new branch from 'master' called 'develop'"),Object(a.b)("li",{parentName:"ol"},"Go to Settings > Branches, select 'develop' from the drop down list to make it the default branch, click update"),Object(a.b)("li",{parentName:"ol"},"Under 'Branch protection rules', click 'Add rule'"),Object(a.b)("li",{parentName:"ol"},"Add 'master' for 'Branch name pattern', check 'Restrict who can push to matching branches' and save."),Object(a.b)("li",{parentName:"ol"},"Add new branch protection rule for 'develop', with the following settings:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Require pull request reviews before merging"),Object(a.b)("li",{parentName:"ul"},"Require status checks to pass before merging"),Object(a.b)("li",{parentName:"ul"},"Require branches to be up to date before merging")))),Object(a.b)("h3",{id:"repo-security"},"Repo Security"),Object(a.b)("p",null,"Next we need to add in the 'Glasswall-Github' user as an Admin of the repo so that we can perform branch merges from the actions, and use submodules."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"On the GitHub repo, go to Settings > Manage access > Invite teams or people"),Object(a.b)("li",{parentName:"ol"},"Search for 'Glasswall-Github' and select the Admin role."),Object(a.b)("li",{parentName:"ol"},"Go to to Settings > Secrets > Add a new secret"),Object(a.b)("li",{parentName:"ol"},"Name the secret 'TOKEN_GITHUB' and use the Personal Access Token which can be given to you by IT Support, as the value.")),Object(a.b)("h3",{id:"gated-build"},"Gated Build"),Object(a.b)("p",null,"Next step is to set-up a Gated build which will build our code and run tests on pull requests"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"On the GitHub repo, go to Actions > New workflow > set up a workflow yourself"),Object(a.b)("li",{parentName:"ol"},"Name the file 'gated.yml'"),Object(a.b)("li",{parentName:"ol"},"Copy the Gated file code from the Rebuild repo into the new file"),Object(a.b)("li",{parentName:"ol"},"Make any changes specific to your project (build steps, tests used)"),Object(a.b)("li",{parentName:"ol"},"Start commit > create new branch and start a pull request")),Object(a.b)("h3",{id:"setting-up-serverless-framework"},"Setting Up Serverless Framework"),Object(a.b)("p",null,"Next step is to install the Serverless Framework and complete the template. More in-depth guides can be found here: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.serverless.com/framework/docs/"}),"https://www.serverless.com/framework/docs/")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"If running serverless for the first time, install to your machine by running: ",Object(a.b)("inlineCode",{parentName:"li"},"npm install -g serverless")," or ",Object(a.b)("inlineCode",{parentName:"li"},"choco install serverless")),Object(a.b)("li",{parentName:"ol"},"Create the template by running : ",Object(a.b)("inlineCode",{parentName:"li"},"serverless create --template <template name>"),", you can get a list of available templates by running ",Object(a.b)("inlineCode",{parentName:"li"},"serverless create --help")),Object(a.b)("li",{parentName:"ol"},"Update build.sh and build.cmd files with the correct output location and project location"),Object(a.b)("li",{parentName:"ol"},"Complete serverless.yml with the details of your project"),Object(a.b)("li",{parentName:"ol"},"Commit changes")),Object(a.b)("p",null,"You may experience an issue with executing the build.sh file in the CI or CD builds. To fix this you will need to mark the sh file executable:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"cd to the sh file location"),Object(a.b)("li",{parentName:"ol"},"run: ",Object(a.b)("inlineCode",{parentName:"li"},"git update-index --add --chmod=+x build.sh")),Object(a.b)("li",{parentName:"ol"},"commit: ",Object(a.b)("inlineCode",{parentName:"li"},"git commit -m 'Make build.sh executable'"))),Object(a.b)("h3",{id:"ci-build"},"CI Build"),Object(a.b)("p",null,"Next step is to set-up a CI build which will deploy our code to a QA environment, run tests, and merge to the master branch if successful."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"On the GitHub repo, go to Actions > New workflow > set up a workflow yourself"),Object(a.b)("li",{parentName:"ol"},"Name the file 'ci.yml'"),Object(a.b)("li",{parentName:"ol"},"Copy the CI file template code into the new file"),Object(a.b)("li",{parentName:"ol"},"Make any changes specific to your project (deployment, environment, build steps, tests used)"),Object(a.b)("li",{parentName:"ol"},"Add any needed secrets (Access Ids and key) to the repo settings."),Object(a.b)("li",{parentName:"ol"},"Start commit > create new branch and start a pull request")),Object(a.b)("h3",{id:"deploy-build"},"Deploy Build"),Object(a.b)("p",null,"Next step is to set-up a Deploy build which will deploy our code to a Stage environment, run tests, and deploy to product if successful."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"On the GitHub repo, go to Actions > New workflow > set up a workflow yourself"),Object(a.b)("li",{parentName:"ol"},"Name the file 'deploy.yml'"),Object(a.b)("li",{parentName:"ol"},"Copy the Deploy file template code into the new file"),Object(a.b)("li",{parentName:"ol"},"Make any changes specific to your project (deployment, environment, build steps, tests used)"),Object(a.b)("li",{parentName:"ol"},"Add any needed secrets (Access Ids and key) to the repo settings."),Object(a.b)("li",{parentName:"ol"},"Start commit > create new branch and start a pull request")))}p.isMDXComponent=!0},207:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),l=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=l.a.createContext({}),p=function(e){var t=l.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||a;return r?l.a.createElement(m,i(i({ref:t},s),{},{components:r})):l.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);