"use strict";(self.webpackChunkpicocss_storybook=self.webpackChunkpicocss_storybook||[]).push([[384],{"./stories/Header.stories.js":(v,e,t)=>{t.r(e),t.d(e,{LoggedIn:()=>d,LoggedOut:()=>r,__namedExportsOrder:()=>s,default:()=>l});var n=t("./stories/Header.js");const l={title:"Example/Header",tags:["autodocs"],render:function(a){return(0,n.createHeader)(a)},parameters:{layout:"fullscreen"},argTypes:{onLogin:{action:"onLogin"},onLogout:{action:"onLogout"},onCreateAccount:{action:"onCreateAccount"}}};var d={args:{user:{name:"Jane Doe"}}},r={};const s=["LoggedIn","LoggedOut"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/button.css":(v,e,t)=>{t.r(e),t.d(e,{default:()=>a});var n=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=t.n(n),d=t("./node_modules/css-loader/dist/runtime/api.js"),r=t.n(d),s=r()(l());s.push([v.id,`.storybook-button {
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
`,""]);const a=s},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/header.css":(v,e,t)=>{t.r(e),t.d(e,{default:()=>a});var n=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=t.n(n),d=t("./node_modules/css-loader/dist/runtime/api.js"),r=t.n(d),s=r()(l());s.push([v.id,`.storybook-header {
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
`,""]);const a=s},"./stories/Button.js":(v,e,t)=>{t.r(e),t.d(e,{createButton:()=>f});var n=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=t.n(n),d=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),r=t.n(d),s=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),a=t.n(s),j=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),S=t.n(j),T=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(T),b=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=t.n(b),i=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/button.css"),o={};o.styleTagTransform=L(),o.setAttributes=S(),o.insert=a().bind(null,"head"),o.domAPI=r(),o.insertStyleElement=p();var D=l()(i.default,o);const M=i.default&&i.default.locals?i.default.locals:void 0;var f=function(m){var c=m.primary,E=c===void 0?!1:c,A=m.size,P=A===void 0?"medium":A,C=m.backgroundColor,h=m.label,g=m.onClick,u=document.createElement("button");u.type="button",u.innerText=h,u.addEventListener("click",g);var y=E?"storybook-button--primary":"storybook-button--secondary";return u.className=["storybook-button","storybook-button--".concat(P),y].join(" "),u.style.backgroundColor=C,u}},"./stories/Header.js":(v,e,t)=>{t.r(e),t.d(e,{createHeader:()=>m});var n=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=t.n(n),d=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),r=t.n(d),s=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),a=t.n(s),j=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),S=t.n(j),T=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(T),b=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=t.n(b),i=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/header.css"),o={};o.styleTagTransform=L(),o.setAttributes=S(),o.insert=a().bind(null,"head"),o.domAPI=r(),o.insertStyleElement=p();var D=l()(i.default,o);const M=i.default&&i.default.locals?i.default.locals:void 0;var f=t("./stories/Button.js"),m=function(c){var E=c.user,A=c.onLogout,P=c.onLogin,C=c.onCreateAccount,h=document.createElement("header"),g=document.createElement("div");g.className="storybook-header";var u=`<div>
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
          fill="#FFF" />
        <path
          d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
          fill="#555AB9" />
        <path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8" />
      </g>
    </svg>
    <h1>Acme</h1>
  </div>`;g.insertAdjacentHTML("afterbegin",u);var y=document.createElement("div");if(E){var O='<span class="welcome">Welcome, <b>'.concat(E.name,"</b>!</span>");y.innerHTML=O,y.appendChild((0,f.createButton)({size:"small",label:"Log out",onClick:A}))}else y.appendChild((0,f.createButton)({size:"small",label:"Log in",onClick:P})),y.appendChild((0,f.createButton)({size:"small",label:"Sign up",onClick:C,primary:!0}));return g.appendChild(y),h.appendChild(g),h}}}]);
