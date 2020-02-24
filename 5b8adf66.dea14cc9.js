(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(1),o=n(9),i=(n(0),n(291)),r={title:"A step-by-step guide to single-spa",author:"Joel Denning",authorURL:"https://twitter.com/Joelbdenning",authorImageURL:"https://pbs.twimg.com/profile_images/716746867451625472/2NMyKAd1_400x400.jpg"},l=[{value:"Step One: choose a module loader.",id:"step-one-choose-a-module-loader",children:[]},{value:"Step Two: create a brand new html file",id:"step-two-create-a-brand-new-html-file",children:[]},{value:"Step Three: register an \u201capplication\u201d",id:"step-three-register-an-application",children:[]},{value:"Step Four: create \u201c.app.js\u201d file",id:"step-four-create-appjs-file",children:[{value:"Getting all of those frameworks to work together.",id:"getting-all-of-those-frameworks-to-work-together",children:[]}]},{value:"Step Five: test it out!",id:"step-five-test-it-out",children:[]}],s={rightToc:l},p="wrapper";function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(p,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Running Angular 1, React, Angular 2, and Vue.js side by side sounds pretty cool. And it seems appealing to have multiple applications coexisting on the same page, each lazily loaded."),Object(i.b)("p",null,"But using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/"}),"single-spa")," for the first time can be tricky because you\u2019ll come across terms like \u201capplication lifecycles\u201d, \u201croot application\u201d, \u201cloading function\u201d, \u201cchild application\u201d, and \u201cactivity function.\u201d"),Object(i.b)("p",null,"This blog post will take you through setting things up and what choices you have when using single-spa. It\u2019s based on what I\u2019ve seen at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/canopy-tax"}),"Canopy Tax")," where we went from an Angular 1 monolith to an Angular 1, React, and Svelte polyglot."),Object(i.b)("p",null,"If you\u2019d like to jump straight to a fully working, self contained code example, check out this ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/joeldenning/simple-single-spa-webpack-example"}),"webpack single-spa starter project"),"."),Object(i.b)("h2",{id:"step-one-choose-a-module-loader"},"Step One: choose a module loader."),Object(i.b)("p",null,"Your module loader / bundler is the library you\u2019ll use to lazy load code. I recommend either ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/"}),"Webpack")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://jspm.io/"}),"JSPM"),", if you\u2019re starting from scratch."),Object(i.b)("p",null,"If you go with Webpack, try to use Webpack 2 if you can, since it has ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/guides/migrating/#code-splitting-with-es2015"}),"support for promise-based lazy loading"),". This will make things easier for you later on, since single-spa requires that your ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md#loading-function"}),"loading functions")," return promises. If you can\u2019t use Webpack 2, getting single-spa to lazy load your code with Webpack 1 will require some boilerplate code."),Object(i.b)("p",null,"JSPM/SystemJS has worse documentation than Webpack, but is a great solution for module loading if you can get past that. I recommend using jspm@0.17\u200a\u2014\u200ait\u2019s still in beta but has been worked on for over a year and at Canopy we find it stable enough to use in production."),Object(i.b)("p",null,"If you\u2019re struggling to decide between the two, then ask yourself the following: Do I want multiple completely separate bundles? If you don\u2019t, I recommend Webpack because it has better docs, a larger community, and fewer gotchas. Otherwise, I\u2019d go with JSPM, since Webpack has no plans to support dynamic runtime loading ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/TheLarkInn/status/789968589419745280"}),"(See tweet below from Mr. Larkin, himself)"),"."),Object(i.b)("h2",{id:"step-two-create-a-brand-new-html-file"},"Step Two: create a brand new html file"),Object(i.b)("p",null,"The next step is to create what single-spa calls your ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md"}),"\u201croot application.\u201d")," Really your root application is just the stuff that initializes single-spa, and it starts with an html file."),Object(i.b)("p",null,"Even if you\u2019ve got an existing project that already has it\u2019s own html file, I recommend starting fresh with a new html file. That way, there is a clear distinction between what is in your root application (shared between all apps) and what is in a child application (not shared with everything)."),Object(i.b)("p",null,"You\u2019ll want to keep your root application as small as possible, since it\u2019s sort of the master controller of everything and could become a bottleneck. You don\u2019t want to be constantly changing both the root application and the child applications."),Object(i.b)("p",null,"So for now, just have a ",Object(i.b)("inlineCode",{parentName:"p"},"<script>")," to a single javascript file (root-application.js), which will be explained in Step Three."),Object(i.b)("p",null,"Since Webpack is probably the more common use case, my code examples from here on will assume that you\u2019re using Webpack 2. The equivalent Webpack 1 or JSPM code has all the same concepts and only some minor code differences."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width" />\n    <title>A single-spa application</title>\n  </head>\n  <body>\n    <div id="cool-app"></div>\n    <script src="root-application.js"><\/script>\n  </body>\n</html>\n')),Object(i.b)("h2",{id:"step-three-register-an-application"},"Step Three: register an \u201capplication\u201d"),Object(i.b)("p",null,"Now it\u2019s time to finish up your root application by writing your \u201croot-application.js\u201d file. The primary purpose of root-application.js is to call ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md#declaring-child-applications"}),"singleSpa.registerApplication(..)")," for each of the applications that will be managed by single-spa."),Object(i.b)("p",null,"If you\u2019re into analogies, you can think of single-spa as the operating system for your single page application, managing which \u201cprocesses\u201d (or \u201cchild applications\u201d) are running at any given time. At any moment, some of the child applications will be active on the DOM and others will not. As the user navigates throughout the app, some applications will be unmounting from the DOM and others will be mounting to the DOM."),Object(i.b)("p",null,"Another way to look at it is that single-spa is a master router on top of your other routers."),Object(i.b)("p",null,"To do this, first ",Object(i.b)("inlineCode",{parentName:"p"},"npm install single-spa")," and then call the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md#declaring-child-applications"}),"registerApplication")," function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import {registerApplication, start} from 'single-spa';\n\n// Register your first application with single-spa. More apps will be registered as you create them\nregisterApplication('cool-app', loadCoolApp, isCoolAppActive);\n\n// Tell single-spa that you're ready for it to mount your application to the DOM\nstart();\n\n// This is a \"loading function\"\nfunction loadCoolApp() {\n  return import('./cool-app/cool.app.js');\n}\n\n// This is an \"activity function\"\nfunction isCoolAppActive() {\n  return window.location.hash.startsWith('#/cool');\n}\n")),Object(i.b)("p",null,"Because single-spa is ",Object(i.b)("em",{parentName:"p"},"so very")," cool, we\u2019ve created an app called \u201ccool-app\u201d that will be lazy loaded and mounted to the DOM whenever the url hash starts with ",Object(i.b)("inlineCode",{parentName:"p"},"#/cool"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"loadCoolApp")," function is what single-spa calls a loading function. Inside of it, the ",Object(i.b)("inlineCode",{parentName:"p"},"import")," introduces a code splitting point\u200a\u2014\u200aWebpack will create separate code chunks that will be lazy loaded by single-spa."),Object(i.b)("p",null,"For your specific project, you probably won\u2019t have a hash prefix of \u201ccool\u201d, but I recommend establishing some kind of convention that makes it easy to determine which apps are active. This will simplify the maintenance of your activity functions, as you add more and more child applications."),Object(i.b)("p",null,"If you\u2019re going to start out with just one child application, then it might make sense to implement the activity function as ",Object(i.b)("inlineCode",{parentName:"p"},"() => true"),". You can worry about getting fancier once you have more than one application."),Object(i.b)("p",null,"The last thing is to call ",Object(i.b)("inlineCode",{parentName:"p"},"start()"),". This is something you ",Object(i.b)("strong",{parentName:"p"},"must do for things to work.")," The purpose is to give control over timing and performance. But until that is a concern, ",Object(i.b)("inlineCode",{parentName:"p"},"start")," is just one of those things you do, and then maybe ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/single-spa-api.md#start"}),"read about it")," later if you ever need to."),Object(i.b)("h2",{id:"step-four-create-appjs-file"},"Step Four: create \u201c.app.js\u201d file"),Object(i.b)("p",null,"When you open up your index.html file in the browser, you\u2019ll now see\u2026.. a blank screen! We\u2019re really close, but there\u2019s one crucial step left: building your app.js file."),Object(i.b)("p",null,"After that, you\u2019ll have everything working for your first single-spa application."),Object(i.b)("p",null,"An app.js file is a configuration file that you create for each child application. It is the code that is lazy loaded when your activity function returns true."),Object(i.b)("p",null,"There are three things that you need to implement in the app.js file:"),Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("a",{href:"",target:"_blank",rel:"noopener noreferrer"},"A bootstrap lifecycle")),Object(i.b)("li",null,Object(i.b)("a",{href:"",target:"_blank",rel:"noopener noreferrer"},"A mount lifecycle")),Object(i.b)("li",null,Object(i.b)("a",{href:"",target:"_blank",rel:"noopener noreferrer"},"An unmount lifecycle"))),Object(i.b)("p",null,"A \u201clifecycle\u201d is a function or array of functions that will be called by single-spa; you export these from the app.js file. Each function must return a Promise so that single-spa knows when it is completed."),Object(i.b)("p",null,"Here is a simple example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// single-spa will import this file and call the exported lifecyle functions\n\nlet user;\n\nexport function bootstrap() {\n  return fetch('/api/users/0')\n    .then(response => response.json())\n    .then(json => (user = json));\n}\n\nexport function mount() {\n  /* This is normally where you would have your framework-specific code like\n   * ReactDOM.render or angular.bootstrap(). The fact that you can put *anything*\n   * into this function is what makes single-spa so powerful -- any framework\n   * can implement a \"mount\" and \"unmount\" to become a single-spa application.\n   */\n  return Promise.resolve().then(() => {\n    document.getElementById('user-app').innerHTML = `\n        <div>\n          Hello ${user.name}!\n        <div>\n      `;\n  });\n}\n\nexport function unmount() {\n  /* Real world use cases would be something like ReactDOM.unmountComponentAtNode()\n   * or vue.$destroy()\n   */\n  return Promise.resolve().then(() => {\n    document.getElementById('user-app').innerHTML = '';\n  });\n}\n")),Object(i.b)("p",null,"At this point, you might be seeing the ",Object(i.b)("inlineCode",{parentName:"p"},"document.getElementById")," and ",Object(i.b)("inlineCode",{parentName:"p"},"innerHTML =")," and worry that you\u2019ve been duped\u200a\u2014\u200amaybe single-spa is really just a poor excuse for a ui component framework."),Object(i.b)("p",null,"And really, don\u2019t we already have a lot of different ways to write UI components?"),Object(i.b)("h3",{id:"getting-all-of-those-frameworks-to-work-together"},"Getting all of those frameworks to work together."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Using multiple frameworks")," is where single-spa really shines. It is not a ui framework itself, but a framework for using other frameworks."),Object(i.b)("p",null,"Each child application can be written in any framework, so long as it implements application lifecycle functions. Then the mini-apps cooperate to form the entire single page application."),Object(i.b)("p",null,"So going back to our previous example, we could choose to write our \u201ccool.app.js\u201d as an Angular 1 app, and choose something else for future apps:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import singleSpaAngularJS from 'single-spa-angularjs';\nimport angular from 'angular';\nimport './app.module.js';\nimport './routes.js';\n\nconst domElementGetter = () => document.getElementById('cool-app');\n\nconst angularLifecycles = singleSpaAngularJS({\n  angular,\n  domElementGetter,\n  mainAngularModule: 'single-spa-app',\n  uiRouter: true,\n  preserveGlobal: true,\n});\n\nexport const bootstrap = [\n  aboutToBootstrap,\n  angularLifecycles.bootstrap,\n  doneBootstrapping,\n];\n\nexport const mount = [angularLifecycles.mount];\n\nexport const unmount = [angularLifecycles.unmount];\n\nfunction aboutToBootstrap() {\n  console.log('about to bootstrapping');\n  return Promise.resolve();\n}\n\nfunction doneBootstrap() {\n  console.log('finished bootstrapping');\n  return Promise.resolve();\n}\n")),Object(i.b)("p",null,"In this example, we use a helper library called ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-angularjs"}),"single-spa-angularjs")," which abstracts away the specifics of initializing Angular 1 apps. This blogpost doesn\u2019t show you the ",Object(i.b)("inlineCode",{parentName:"p"},"app.module.js")," or ",Object(i.b)("inlineCode",{parentName:"p"},"routes.js")," files, but you can see an example implementation ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-examples/tree/master/src/angularJS"}),"here"),"."),Object(i.b)("p",null,"The pattern is to call ",Object(i.b)("inlineCode",{parentName:"p"},"singleSpaAngularJS")," at the very beginning, which returns ",Object(i.b)("inlineCode",{parentName:"p"},"bootstrap"),", ",Object(i.b)("inlineCode",{parentName:"p"},"mount"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"unmount")," lifecycle functions for you."),Object(i.b)("p",null,"You might notice that this time the lifecycles are exported as arrays of functions instead of just functions\u200a\u2014\u200ayou can choose whichever works best for you."),Object(i.b)("p",null,"The advantage of exporting an array of functions is that you can add in your own custom behavior (like ",Object(i.b)("inlineCode",{parentName:"p"},"aboutToBootstrap")," and ",Object(i.b)("inlineCode",{parentName:"p"},"doneBootstrap"),") that will run before or after the Angular 1 lifecycles. When you export an array, each item in the array must be a function that returns a promise. Single-spa will wait for each promise to resolve, in order, before calling the next function in the array."),Object(i.b)("p",null,"To learn more about single-spa helper libraries, check out these github projects:"),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)("a",{href:"https://github.com/single-spa/single-spa-angularjs",target:"_blank",rel:"noopener noreferrer"},"single-spa-angularjs")),Object(i.b)("li",null,Object(i.b)("a",{href:"https://github.com/single-spa/single-spa-angular",target:"_blank",rel:"noopener noreferrer"},"single-spa-angular")),Object(i.b)("li",null,Object(i.b)("a",{href:"https://github.com/single-spa/single-spa-react",target:"_blank",rel:"noopener noreferrer"},"single-spa-react")),Object(i.b)("li",null,Object(i.b)("a",{href:"https://github.com/single-spa/single-spa-vue",target:"_blank",rel:"noopener noreferrer"},"single-spa-vue")),Object(i.b)("li",null,Object(i.b)("a",{href:"https://github.com/single-spa/single-spa-svelte",target:"_blank",rel:"noopener noreferrer"},"single-spa-svelte")),Object(i.b)("li",null,Object(i.b)("a",{href:"https://github.com/single-spa/single-spa-preact",target:"_blank",rel:"noopener noreferrer"},"single-spa-preact"))),Object(i.b)("p",null,"You can also see a fully working example of an angular app coexisting with other apps at the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-examples"}),"single-spa-examples")," repo or the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://single-spa.surge.sh/"}),"live demo"),"."),Object(i.b)("h2",{id:"step-five-test-it-out"},"Step Five: test it out!"),Object(i.b)("p",null,"Refresh your page and you should now have a functioning single-spa application!"),Object(i.b)("p",null,"Try navigating to a url that your child app is active for (",Object(i.b)("inlineCode",{parentName:"p"},"#/cool"),") and then navigating away from it. When you do so, the page will not refresh but you should see your application mount itself to the DOM and then unmount."),Object(i.b)("p",null,"If you run into problems, try to narrow down whether the problem is in the root application or in the child application. Is your root application being executed? Are the declareChildApplication calls being made? Have you called ",Object(i.b)("inlineCode",{parentName:"p"},"start()"),"? Is there a network request to download the code for your child application? Is your child application's ",Object(i.b)("inlineCode",{parentName:"p"},"bootstrap")," lifecycle being called? What about ",Object(i.b)("inlineCode",{parentName:"p"},"mount"),"?"),Object(i.b)("img",{src:"https://cdn-images-1.medium.com/max/1600/1*WMFuo-hz-Q31UVbTHAx4lw.png",alt:"cdn-images-1"}),Object(i.b)("p",null,"It may be helpful to add a navigation menu, so you can verify everything mounts and unmounts to the DOM correctly. If you want to level up your single-spa skills even more, make the navigation menu an entire child application whose activity function is ",Object(i.b)("inlineCode",{parentName:"p"},"() => true"),". An example that does just that is found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-examples/blob/master/src/single-spa-examples.js#L3"}),"here")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-examples/blob/master/src/navbar/navbar.app.js"}),"here"),"."),Object(i.b)("p",null,"While you are verifying that everything is working, keep in mind that each application goes through five phases:"),Object(i.b)("img",{src:"https://cdn-images-1.medium.com/max/1600/1*utKlcxBkDXfQAQR52B0hAA.png",alt:"an applications's lifecycle"}),Object(i.b)("p",null,"Conclusion"),Object(i.b)("p",null,"As you get your feet wet, you\u2019ll probably run into some (hopefully small) hiccups setting things up. When this tutorial is not enough, there are other resources on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa"}),"Github")," and here in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"docs/building-applications.html"}),"docs"),"."),Object(i.b)("p",null,"Single-spa is still a relatively new thing, and we\u2019d love to hear your feedback and questions. We welcome contributions from everyone."),Object(i.b)("p",null,"If you\u2019re excited about the possibilities, feel free to contact me on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/Joelbdenning"}),"twitter (@joelbdenning)"),". And if you are not excited, then still feel free to contact me, but only after you leave some nasty comments :)"))}c.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a),i=o.a.createContext({}),r=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=r(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),c=r(n),u=a,b=c[l+"."+u]||c[u]||p[u]||i;return n?o.a.createElement(b,Object.assign({},{ref:t},s,{components:n})):o.a.createElement(b,Object.assign({},{ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);