"use strict";(self.webpackChunkpicocss_storybook=self.webpackChunkpicocss_storybook||[]).push([[303],{"./stories/Button.stories.js":(g,a,t)=>{t.r(a),t.d(a,{Large:()=>E,Primary:()=>v,Secondary:()=>p,Small:()=>j,__namedExportsOrder:()=>O,default:()=>f});var u=t("./stories/Button.js");function m(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function c(e){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{},s=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(o).filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable}))),s.forEach(function(n){m(e,n,o[n])})}return e}function y(e,r){if(e==null)return{};var o=i(e,r),s,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)s=l[n],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}function i(e,r){if(e==null)return{};var o={},s=Object.keys(e),n,l;for(l=0;l<s.length;l++)n=s[l],!(r.indexOf(n)>=0)&&(o[n]=e[n]);return o}const f={title:"Example/Button",tags:["autodocs"],render:function(e){var r=e.label,o=y(e,["label"]);return(0,u.createButton)(c({label:r},o))},argTypes:{backgroundColor:{control:"color"},label:{control:"text"},onClick:{action:"onClick"},primary:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]}}};var v={args:{primary:!0,label:"Button"}},p={args:{label:"Button"}},E={args:{size:"large",label:"Button"}},j={args:{size:"small",label:"Button"}};const O=["Primary","Secondary","Large","Small"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/button.css":(g,a,t)=>{t.r(a),t.d(a,{default:()=>f});var u=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=t.n(u),c=t("./node_modules/css-loader/dist/runtime/api.js"),y=t.n(c),i=y()(m());i.push([g.id,`.storybook-button {
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
`,""]);const f=i},"./stories/Button.js":(g,a,t)=>{t.r(a),t.d(a,{createButton:()=>l});var u=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=t.n(u),c=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),y=t.n(c),i=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),f=t.n(i),v=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),p=t.n(v),E=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),j=t.n(E),O=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),e=t.n(O),r=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/button.css"),o={};o.styleTagTransform=e(),o.setAttributes=p(),o.insert=f().bind(null,"head"),o.domAPI=y(),o.insertStyleElement=j();var s=m()(r.default,o);const n=r.default&&r.default.locals?r.default.locals:void 0;var l=function(b){var S=b.primary,T=S===void 0?!1:S,P=b.size,_=P===void 0?"medium":P,A=b.backgroundColor,B=b.label,h=b.onClick,d=document.createElement("button");d.type="button",d.innerText=B,d.addEventListener("click",h);var C=T?"storybook-button--primary":"storybook-button--secondary";return d.className=["storybook-button","storybook-button--".concat(_),C].join(" "),d.style.backgroundColor=A,d}}}]);
