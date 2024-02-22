(self.webpackChunkpicocss_storybook=self.webpackChunkpicocss_storybook||[]).push([[226],{"./stories/Page.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:()=>LoggedIn,LoggedOut:()=>LoggedOut,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Page_stories});var dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),page=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./stories/page.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(page.A,options),page.A&&page.A.locals&&page.A.locals;var Header=__webpack_require__("./stories/Header.js"),createPage=function(){var article=document.createElement("article"),user=null,header=null,rerenderHeader=function(){var wrapper=document.getElementsByTagName("article")[0];wrapper.replaceChild(createHeaderElement(),wrapper.firstChild)},onLogin=function(){user={name:"Jane Doe"},rerenderHeader()},onLogout=function(){user=null,rerenderHeader()},onCreateAccount=function(){user={name:"Jane Doe"},rerenderHeader()},createHeaderElement=function(){return(0,Header.I)({onLogin:onLogin,onLogout:onLogout,onCreateAccount:onCreateAccount,user:user})};return header=createHeaderElement(),article.appendChild(header),article.insertAdjacentHTML("beforeend",'\n  <section class="storybook-page">\n    <h2>Pages in Storybook</h2>\n    <p>\n      We recommend building UIs with a\n      <a\n        href="https://blog.hichroma.com/component-driven-development-ce1109d56c8e"\n        target="_blank"\n        rel="noopener noreferrer">\n        <strong>component-driven</strong>\n      </a>\n      process starting with atomic components and ending with pages.\n    </p>\n    <p>\n      Render pages with mock data. This makes it easy to build and review page states without\n      needing to navigate to them in your app. Here are some handy patterns for managing page data\n      in Storybook:\n    </p>\n    <ul>\n      <li>\n        Use a higher-level connected component. Storybook helps you compose such data from the\n        "args" of child component stories\n      </li>\n      <li>\n        Assemble data in the page component from your services. You can mock these services out\n        using Storybook.\n      </li>\n    </ul>\n    <p>\n      Get a guided tutorial on component-driven development at\n      <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">\n        Storybook tutorials\n      </a>\n      . Read more in the\n      <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a>\n      .\n    </p>\n    <div class="tip-wrapper">\n      <span class="tip">Tip</span>\n      Adjust the width of the canvas with the\n      <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">\n        <g fill="none" fillRule="evenodd">\n          <path\n            d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0\n            01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0\n            010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"\n            id="a"\n            fill="#999" />\n        </g>\n      </svg>\n      Viewports addon in the toolbar\n    </div>\n  </section>\n'),article};function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error);return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self1=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self1,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=(t=_.trys).length>0&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}let Page_stories={title:"Example/Page",render:function(){return createPage()},parameters:{layout:"fullscreen"}};var LoggedOut={},LoggedIn={play:function(){var _ref=_async_to_generator(function(param){var canvasElement,canvas,loginButton,logoutButton;return _ts_generator(this,function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,loginButton=(canvas=(0,dist.ux)(canvasElement)).getByRole("button",{name:/Log in/i}),[4,(0,dist.E3)(loginButton).toBeInTheDocument()];case 1:return _state.sent(),[4,dist.Q4.click(loginButton)];case 2:return _state.sent(),[4,(0,dist.E3)(loginButton).not.toBeInTheDocument()];case 3:return _state.sent(),logoutButton=canvas.getByRole("button",{name:/Log out/i}),[4,(0,dist.E3)(logoutButton).toBeInTheDocument()];case 4:return _state.sent(),[2]}})});return function(_){return _ref.apply(this,arguments)}}()};LoggedOut.parameters={...LoggedOut.parameters,docs:{...LoggedOut.parameters?.docs,source:{originalSource:"{}",...LoggedOut.parameters?.docs?.source}}},LoggedIn.parameters={...LoggedIn.parameters,docs:{...LoggedIn.parameters?.docs,source:{originalSource:"{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const loginButton = canvas.getByRole('button', {\n      name: /Log in/i\n    });\n    await expect(loginButton).toBeInTheDocument();\n    await userEvent.click(loginButton);\n    await expect(loginButton).not.toBeInTheDocument();\n    const logoutButton = canvas.getByRole('button', {\n      name: /Log out/i\n    });\n    await expect(logoutButton).toBeInTheDocument();\n  }\n}",...LoggedIn.parameters?.docs?.source}}};let __namedExportsOrder=["LoggedOut","LoggedIn"]},"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./stories/button.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.storybook-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.storybook-button--primary {
  color: white;
  background-color: #1ea7fd;
}
.storybook-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.storybook-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
`,"",{version:3,sources:["webpack://./stories/button.css"],names:[],mappings:"AAAA;EACE,0EAA0E;EAC1E,gBAAgB;EAChB,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,6BAA6B;EAC7B,qDAAqD;AACvD;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB",sourcesContent:[".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n"],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./stories/header.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.storybook-header {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.storybook-header svg {
  display: inline-block;
  vertical-align: top;
}

.storybook-header h1 {
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
}

.storybook-header button + button {
  margin-left: 10px;
}

.storybook-header .welcome {
  color: #333;
  font-size: 14px;
  margin-right: 10px;
}
`,"",{version:3,sources:["webpack://./stories/header.css"],names:[],mappings:"AAAA;EACE,0EAA0E;EAC1E,2CAA2C;EAC3C,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB",sourcesContent:[".storybook-header {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.storybook-header svg {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header h1 {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header button + button {\n  margin-left: 10px;\n}\n\n.storybook-header .welcome {\n  color: #333;\n  font-size: 14px;\n  margin-right: 10px;\n}\n"],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./stories/page.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.storybook-page {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 24px;
  padding: 48px 20px;
  margin: 0 auto;
  max-width: 600px;
  color: #333;
}

.storybook-page h2 {
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  margin: 0 0 4px;
  display: inline-block;
  vertical-align: top;
}

.storybook-page p {
  margin: 1em 0;
}

.storybook-page a {
  text-decoration: none;
  color: #1ea7fd;
}

.storybook-page ul {
  padding-left: 30px;
  margin: 1em 0;
}

.storybook-page li {
  margin-bottom: 8px;
}

.storybook-page .tip {
  display: inline-block;
  border-radius: 1em;
  font-size: 11px;
  line-height: 12px;
  font-weight: 700;
  background: #e7fdd8;
  color: #66bf3c;
  padding: 4px 12px;
  margin-right: 10px;
  vertical-align: top;
}

.storybook-page .tip-wrapper {
  font-size: 13px;
  line-height: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.storybook-page .tip-wrapper svg {
  display: inline-block;
  height: 12px;
  width: 12px;
  margin-right: 4px;
  vertical-align: top;
  margin-top: 3px;
}

.storybook-page .tip-wrapper svg path {
  fill: #1ea7fd;
}
`,"",{version:3,sources:["webpack://./stories/page.css"],names:[],mappings:"AAAA;EACE,0EAA0E;EAC1E,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,eAAe;EACf,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf",sourcesContent:[".storybook-page {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\n.storybook-page h2 {\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-page p {\n  margin: 1em 0;\n}\n\n.storybook-page a {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\n.storybook-page ul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\n.storybook-page li {\n  margin-bottom: 8px;\n}\n\n.storybook-page .tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.storybook-page .tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.storybook-page .tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.storybook-page .tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n"],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./stories/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>createButton});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),cjs_ruleSet_1_rules_10_use_1_stories_button=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./stories/button.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(cjs_ruleSet_1_rules_10_use_1_stories_button.A,options),cjs_ruleSet_1_rules_10_use_1_stories_button.A&&cjs_ruleSet_1_rules_10_use_1_stories_button.A.locals&&cjs_ruleSet_1_rules_10_use_1_stories_button.A.locals;var createButton=function(param){var _param_primary=param.primary,_param_size=param.size,backgroundColor=param.backgroundColor,label=param.label,onClick=param.onClick,btn=document.createElement("button");return btn.type="button",btn.innerText=label,btn.addEventListener("click",onClick),btn.className=["storybook-button","storybook-button--".concat(void 0===_param_size?"medium":_param_size),void 0!==_param_primary&&_param_primary?"storybook-button--primary":"storybook-button--secondary"].join(" "),btn.style.backgroundColor=backgroundColor,btn}},"./stories/Header.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>createHeader});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),header=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./stories/header.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(header.A,options),header.A&&header.A.locals&&header.A.locals;var Button=__webpack_require__("./stories/Button.js"),createHeader=function(param){var user=param.user,onLogout=param.onLogout,onLogin=param.onLogin,onCreateAccount=param.onCreateAccount,header=document.createElement("header"),wrapper=document.createElement("div");wrapper.className="storybook-header",wrapper.insertAdjacentHTML("afterbegin",'<div>\n    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n      <g fill="none" fillRule="evenodd">\n        <path\n          d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"\n          fill="#FFF" />\n        <path\n          d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"\n          fill="#555AB9" />\n        <path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8" />\n      </g>\n    </svg>\n    <h1>Acme</h1>\n  </div>');var account=document.createElement("div");if(user){var welcomeMessage='<span class="welcome">Welcome, <b>'.concat(user.name,"</b>!</span>");account.innerHTML=welcomeMessage,account.appendChild((0,Button.T)({size:"small",label:"Log out",onClick:onLogout}))}else account.appendChild((0,Button.T)({size:"small",label:"Log in",onClick:onLogin})),account.appendChild((0,Button.T)({size:"small",label:"Sign up",onClick:onCreateAccount,primary:!0}));return wrapper.appendChild(account),header.appendChild(wrapper),header}}}]);
//# sourceMappingURL=Page-stories.d512798b.iframe.bundle.js.map