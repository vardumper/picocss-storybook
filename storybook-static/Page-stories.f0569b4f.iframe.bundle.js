(self.webpackChunkpicocss_storybook=self.webpackChunkpicocss_storybook||[]).push([[226],{"./stories/Page.stories.js":(y,s,t)=>{"use strict";t.r(s),t.d(s,{LoggedIn:()=>x,LoggedOut:()=>C,__namedExportsOrder:()=>E,default:()=>H});var a=t("./node_modules/@storybook/test/dist/index.mjs"),v=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=t.n(v),h=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),u=t.n(h),p=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),O=t.n(p),L=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=t.n(L),I=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),R=t.n(I),W=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),b=t.n(W),i=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/page.css"),T={};T.styleTagTransform=b(),T.setAttributes=M(),T.insert=O().bind(null,"head"),T.domAPI=u(),T.insertStyleElement=R();var k=f()(i.default,T);const D=i.default&&i.default.locals?i.default.locals:void 0;var j=t("./stories/Header.js"),A=function(){var l=document.createElement("article"),d=null,c=null,r=function(){var n=document.getElementsByTagName("article")[0];n.replaceChild(g(),n.firstChild)},e=function(){d={name:"Jane Doe"},r()},m=function(){d=null,r()},o=function(){d={name:"Jane Doe"},r()},g=function(){return(0,j.createHeader)({onLogin:e,onLogout:m,onCreateAccount:o,user:d})};c=g(),l.appendChild(c);var S=`
  <section class="storybook-page">
    <h2>Pages in Storybook</h2>
    <p>
      We recommend building UIs with a
      <a
        href="https://blog.hichroma.com/component-driven-development-ce1109d56c8e"
        target="_blank"
        rel="noopener noreferrer">
        <strong>component-driven</strong>
      </a>
      process starting with atomic components and ending with pages.
    </p>
    <p>
      Render pages with mock data. This makes it easy to build and review page states without
      needing to navigate to them in your app. Here are some handy patterns for managing page data
      in Storybook:
    </p>
    <ul>
      <li>
        Use a higher-level connected component. Storybook helps you compose such data from the
        "args" of child component stories
      </li>
      <li>
        Assemble data in the page component from your services. You can mock these services out
        using Storybook.
      </li>
    </ul>
    <p>
      Get a guided tutorial on component-driven development at
      <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
        Storybook tutorials
      </a>
      . Read more in the
      <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a>
      .
    </p>
    <div class="tip-wrapper">
      <span class="tip">Tip</span>
      Adjust the width of the canvas with the
      <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path
            d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0
            01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0
            010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
            id="a"
            fill="#999" />
        </g>
      </svg>
      Viewports addon in the toolbar
    </div>
  </section>
`;return l.insertAdjacentHTML("beforeend",S),l};function P(l,d,c,r,e,m,o){try{var g=l[m](o),S=g.value}catch(n){c(n);return}g.done?d(S):Promise.resolve(S).then(r,e)}function B(l){return function(){var d=this,c=arguments;return new Promise(function(r,e){var m=l.apply(d,c);function o(S){P(m,r,e,o,g,"next",S)}function g(S){P(m,r,e,o,g,"throw",S)}o(void 0)})}}function z(l,d){var c,r,e,m,o={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]};return m={next:g(0),throw:g(1),return:g(2)},typeof Symbol=="function"&&(m[Symbol.iterator]=function(){return this}),m;function g(n){return function(U){return S([n,U])}}function S(n){if(c)throw new TypeError("Generator is already executing.");for(;o;)try{if(c=1,r&&(e=n[0]&2?r.return:n[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,n[1])).done)return e;switch(r=0,e&&(n=[n[0]&2,e.value]),n[0]){case 0:case 1:e=n;break;case 4:return o.label++,{value:n[1],done:!1};case 5:o.label++,r=n[1],n=[0];continue;case 7:n=o.ops.pop(),o.trys.pop();continue;default:if(e=o.trys,!(e=e.length>0&&e[e.length-1])&&(n[0]===6||n[0]===2)){o=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){o.label=n[1];break}if(n[0]===6&&o.label<e[1]){o.label=e[1],e=n;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(n);break}e[2]&&o.ops.pop(),o.trys.pop();continue}n=d.call(l,o)}catch(U){n=[6,U],r=0}finally{c=e=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}}const H={title:"Example/Page",render:function(){return A()},parameters:{layout:"fullscreen"}};var C={},x={play:function(){var l=B(function(d){var c,r,e,m;return z(this,function(o){switch(o.label){case 0:return c=d.canvasElement,r=(0,a.within)(c),e=r.getByRole("button",{name:/Log in/i}),[4,(0,a.expect)(e).toBeInTheDocument()];case 1:return o.sent(),[4,a.userEvent.click(e)];case 2:return o.sent(),[4,(0,a.expect)(e).not.toBeInTheDocument()];case 3:return o.sent(),m=r.getByRole("button",{name:/Log out/i}),[4,(0,a.expect)(m).toBeInTheDocument()];case 4:return o.sent(),[2]}})});return function(d){return l.apply(this,arguments)}}()};const E=["LoggedOut","LoggedIn"]},"./node_modules/@storybook/instrumenter/dist sync recursive":y=>{function s(t){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}s.keys=()=>[],s.resolve=s,s.id="./node_modules/@storybook/instrumenter/dist sync recursive",y.exports=s},"./node_modules/@storybook/test/dist sync recursive":y=>{function s(t){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}s.keys=()=>[],s.resolve=s,s.id="./node_modules/@storybook/test/dist sync recursive",y.exports=s},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/button.css":(y,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>p});var a=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=t.n(a),f=t("./node_modules/css-loader/dist/runtime/api.js"),h=t.n(f),u=h()(v());u.push([y.id,`.storybook-button {
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
`,""]);const p=u},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/header.css":(y,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>p});var a=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=t.n(a),f=t("./node_modules/css-loader/dist/runtime/api.js"),h=t.n(f),u=h()(v());u.push([y.id,`.storybook-header {
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
`,""]);const p=u},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/page.css":(y,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>p});var a=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=t.n(a),f=t("./node_modules/css-loader/dist/runtime/api.js"),h=t.n(f),u=h()(v());u.push([y.id,`.storybook-page {
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
`,""]);const p=u},"./stories/Button.js":(y,s,t)=>{"use strict";t.r(s),t.d(s,{createButton:()=>D});var a=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=t.n(a),f=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),h=t.n(f),u=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),p=t.n(u),O=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),L=t.n(O),M=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),I=t.n(M),R=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=t.n(R),b=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/button.css"),i={};i.styleTagTransform=W(),i.setAttributes=L(),i.insert=p().bind(null,"head"),i.domAPI=h(),i.insertStyleElement=I();var T=v()(b.default,i);const k=b.default&&b.default.locals?b.default.locals:void 0;var D=function(j){var A=j.primary,P=A===void 0?!1:A,B=j.size,z=B===void 0?"medium":B,H=j.backgroundColor,C=j.label,x=j.onClick,E=document.createElement("button");E.type="button",E.innerText=C,E.addEventListener("click",x);var l=P?"storybook-button--primary":"storybook-button--secondary";return E.className=["storybook-button","storybook-button--".concat(z),l].join(" "),E.style.backgroundColor=H,E}},"./stories/Header.js":(y,s,t)=>{"use strict";t.r(s),t.d(s,{createHeader:()=>j});var a=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=t.n(a),f=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),h=t.n(f),u=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),p=t.n(u),O=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),L=t.n(O),M=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),I=t.n(M),R=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=t.n(R),b=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/header.css"),i={};i.styleTagTransform=W(),i.setAttributes=L(),i.insert=p().bind(null,"head"),i.domAPI=h(),i.insertStyleElement=I();var T=v()(b.default,i);const k=b.default&&b.default.locals?b.default.locals:void 0;var D=t("./stories/Button.js"),j=function(A){var P=A.user,B=A.onLogout,z=A.onLogin,H=A.onCreateAccount,C=document.createElement("header"),x=document.createElement("div");x.className="storybook-header";var E=`<div>
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
  </div>`;x.insertAdjacentHTML("afterbegin",E);var l=document.createElement("div");if(P){var d='<span class="welcome">Welcome, <b>'.concat(P.name,"</b>!</span>");l.innerHTML=d,l.appendChild((0,D.createButton)({size:"small",label:"Log out",onClick:B}))}else l.appendChild((0,D.createButton)({size:"small",label:"Log in",onClick:z})),l.appendChild((0,D.createButton)({size:"small",label:"Sign up",onClick:H,primary:!0}));return x.appendChild(l),C.appendChild(x),C}}}]);
