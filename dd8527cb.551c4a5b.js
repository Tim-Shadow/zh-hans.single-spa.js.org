(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{261:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return l}));var n=t(1),i=t(9),r=(t(0),t(291)),s={id:"create-single-spa",title:"create-single-spa",sidebar_label:"create-single-spa"},c=[{value:"Installation and Usage",id:"installation-and-usage",children:[]},{value:"Project types",id:"project-types",children:[]},{value:"create-single-spa",id:"create-single-spa",children:[]},{value:"generator-single-spa",id:"generator-single-spa",children:[]},{value:"webpack-config-single-spa",id:"webpack-config-single-spa",children:[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"webpack-config-single-spa-react",id:"webpack-config-single-spa-react",children:[{value:"Installation",id:"installation-1",children:[]},{value:"Usage",id:"usage-1",children:[]}]}],o={rightToc:c},p="wrapper";function l(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)(p,Object(n.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Single-spa offers a CLI for those who prefer autogenerated and managed configurations for webpack, babel, jest, etc. You do not have to use the CLI in order to use single-spa."),Object(r.b)("p",null,"The CLI is called ",Object(r.b)("inlineCode",{parentName:"p"},"create-single-spa")," (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/"}),"Github link"),"). It is intended for the creation of new projects and for updating projects that were created via ",Object(r.b)("inlineCode",{parentName:"p"},"create-single-spa"),", but it is not intended for migrating pre-existing codebases to single-spa."),Object(r.b)("h2",{id:"installation-and-usage"},"Installation and Usage"),Object(r.b)("p",null,"If you wish to have create-single-spa globally available, run the following in a terminal"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install --global create-single-spa\n\n# or\nyarn global add create-single-spa\n")),Object(r.b)("p",null,"Alternatively, you may use create-single-spa without global installation:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm init single-spa\n\n# or\nnpx create-single-spa\n\n# or \nyarn create single-spa\n")),Object(r.b)("p",null,"This will open up a CLI prompt asking you what kind of project you want to create or update. create-single-spa ",Object(r.b)("strong",{parentName:"p"},"installs into the current directory"),", so be sure to create an empty directory if you're starting from scratch."),Object(r.b)("h2",{id:"project-types"},"Project types"),Object(r.b)("p",null,"create-single-spa asks you if you'd like to create a single-spa application, a utility module, or a root-config. All three module types assume that you are using the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/recommended-setup"}),"recommended setup"),"."),Object(r.b)("p",null,"If you select that you'd like to create a single-spa application, you will be prompted for which framework you'd like to choose. React is implemented with premade configurations for babel + webpack + jest. Angular is implemented with Angular CLI and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:""}),"single-spa-angular"),". Vue is implemented with Vue CLI and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/ecosystem/ecosystem-vue#vue-cli"}),"vue-cli-plugin-single-spa"),"."),Object(r.b)("h1",{id:"npm-packages"},"NPM packages"),Object(r.b)("p",null,"Within the create-single-spa repo, there are several NPM packages. The following sections document each package:"),Object(r.b)("h2",{id:"create-single-spa"},"create-single-spa"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/create-single-spa"}),"Github project")),Object(r.b)("p",null,"The core CLI, which invokes ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#generator-single-spa"}),"generator-single-spa"),"."),Object(r.b)("h2",{id:"generator-single-spa"},"generator-single-spa"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/generator-single-spa"}),"Github project")),Object(r.b)("p",null,"A ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://yeoman.io/"}),"Yeoman generator")," that prompts the user and then creates files. This is primarily invoked via the create-single-spa CLI, but can also be ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://yeoman.io/authoring/composability.html"}),"composed")," if you'd like to customize it."),Object(r.b)("h2",{id:"webpack-config-single-spa"},"webpack-config-single-spa"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa"}),"Github project")),Object(r.b)("p",null,"A shareable, customizable webpack config that is used for utility modules and React single-spa applications."),Object(r.b)("h3",{id:"installation"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev webpack-config-single-spa webpack-merge\n\nyarn add --dev webpack-config-single-spa webpack-merge\n")),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const webpackMerge = require('webpack-merge');\nconst singleSpaDefaults = require('webpack-config-single-spa');\n\nmodule.exports = webpackConfigEnv => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: 'name-of-company',\n    // The name of the current project. This usually matches the git repo's name\n    projectName: 'name-of-project',\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n  })\n\n  return webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you'd like to by adding to this object\n  })\n}\n")),Object(r.b)("h2",{id:"webpack-config-single-spa-react"},"webpack-config-single-spa-react"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-react"}),"Github project")),Object(r.b)("p",null,"A shareable, customizable webpack config that adds react-specific configuration to ",Object(r.b)("inlineCode",{parentName:"p"},"webpack-config-single-spa"),"."),Object(r.b)("h3",{id:"installation-1"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev webpack-config-single-spa-react webpack-merge\n\nyarn add --dev webpack-config-single-spa-react webpack-merge\n")),Object(r.b)("h3",{id:"usage-1"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const webpackMerge = require('webpack-merge');\nconst singleSpaDefaults = require('webpack-config-single-spa');\n\nmodule.exports = webpackConfigEnv => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: 'name-of-company',\n    // The name of the current project. This usually matches the git repo's name\n    projectName: 'name-of-project',\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n  })\n\n  return webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you'd like to by adding to this object\n  })\n}\n")))}l.isMDXComponent=!0},291:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return b}));var n=t(0),i=t.n(n),r=i.a.createContext({}),s=function(e){var a=i.a.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):Object.assign({},a,e)),t},c=function(e){var a=s(e.components);return i.a.createElement(r.Provider,{value:a},e.children)};var o="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},l=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,o=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===a.indexOf(n)&&(t[n]=e[n]);return t}(e,["components","mdxType","originalType","parentName"]),l=s(t),b=n,g=l[c+"."+b]||l[b]||p[b]||r;return t?i.a.createElement(g,Object.assign({},{ref:a},o,{components:t})):i.a.createElement(g,Object.assign({},{ref:a},o))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,s=new Array(r);s[0]=l;var c={};for(var p in a)hasOwnProperty.call(a,p)&&(c[p]=a[p]);c.originalType=e,c[o]="string"==typeof e?e:n,s[1]=c;for(var b=2;b<r;b++)s[b]=t[b];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"}}]);