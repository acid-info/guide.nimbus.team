"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[7444],{87527:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PageCard=void 0;const i=a(70655),n=a(31665),r=i.__importDefault(a(19372)),o=i.__importDefault(a(86010)),s=i.__importDefault(a(67294));a(69190);t.PageCard=e=>{let{title:t,description:a,icon:i=s.default.createElement(n.FolderIcon,{color:"primary"}),target:l="_self",...c}=e;return s.default.createElement(r.default,{target:l,...c,className:(0,o.default)(c.className,"mdx-page-card")},s.default.createElement("div",{className:"mdx-page-card__icon"},i),s.default.createElement("div",{className:"mdx-page-card__inner"},s.default.createElement(n.Typography,{className:"mdx-page-card__title",component:"span",variant:"body1"},t),!!a&&s.default.createElement(n.Typography,{className:"mdx-page-card__description",component:"span",variant:"body2"},a)))}},48190:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});a(70655).__exportStar(a(87527),t)},22006:(e,t,a)=>{const i=a(70655),n=a(67176),r=i.__importDefault(a(27333)),o=a(65933),s=i.__importDefault(a(67294)),l=a(48190);function c(e){let{item:t}=e;const a=(0,o.findFirstCategoryLink)(t);return a?s.default.createElement(l.PageCard,{href:a,title:t.label,description:t.description??(0,n.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;(0,r.default)(t.href);const a=(0,o.useDocById)(t.docId??void 0);return s.default.createElement(l.PageCard,{href:t.href,title:t.label,description:t.description??(null==a?void 0:a.description)})}t.Z=function(e){let{item:t}=e;switch(t.type){case"link":return s.default.createElement(d,{item:t});case"category":return s.default.createElement(c,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},8290:(e,t,a)=>{const i=a(70655),n=i.__importDefault(a(64299)),r=i.__importDefault(a(86010)),o=i.__importDefault(a(67294)),s=i.__importDefault(a(94368));t.Z=function(e){return console.log(e),o.default.createElement(n.default,{...e,className:(0,r.default)(e.className,"doc-card-list",s.default.root)})}},64299:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var i=a(67294),n=a(86010),r=a(52554),o=a(22006);function s(e){let{className:t}=e;const a=(0,r.jA)();return i.createElement(l,{items:a.items,className:t})}function l(e){const{items:t,className:a}=e;if(!t)return i.createElement(s,e);const l=(0,r.MN)(t);return i.createElement("section",{className:(0,n.default)("row",a)},l.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(o.Z,{item:e})))))}},3966:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=a(87462),n=(a(67294),a(3905)),r=a(8290);const o={title:"Overview",sidebar_position:0},s="Typography",l={unversionedId:"visual-language/typography/overview",id:"visual-language/typography/overview",title:"Overview",description:"Typography is a fundamental element in our design philosophy, where the message takes precedence over fonts. We prioritize accessibility, simplicity, and functionality, relying on default typefaces across various operating systems and devices for consistency. Our inspiration from underground culture and the DIY ethos shapes a brand accessible and reproducible by all, regardless of tools or location. Our approach emphasizes readability, addressing contrast, tracking, leading, and dynamic text for all users, including those with visual impairments. Typeface selection aligns with these principles, prioritizing accessibility, simplicity, and functionality through default system fonts, ensuring cross-platform compatibility and maintaining a neutral and dependable brand presentation. Typography, in our view, is the art of balancing typeface, size, style, and spacing to optimize readability, reflecting our dedication to content accessibility and a consistent, reliable message.",source:"@site/docs/visual-language/typography/overview.mdx",sourceDirName:"visual-language/typography",slug:"/visual-language/typography/overview",permalink:"/visual-language/typography/overview",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"main",previous:{title:"Color",permalink:"/visual-language/color"},next:{title:"Web Environments",permalink:"/visual-language/typography/web-environment"}},c={},d=[],p={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"typography"},"Typography"),(0,n.kt)("p",null,"Typography is a fundamental element in our design philosophy, where the message takes precedence over fonts. We prioritize accessibility, simplicity, and functionality, relying on default typefaces across various operating systems and devices for consistency. Our inspiration from underground culture and the DIY ethos shapes a brand accessible and reproducible by all, regardless of tools or location. Our approach emphasizes readability, addressing contrast, tracking, leading, and dynamic text for all users, including those with visual impairments. Typeface selection aligns with these principles, prioritizing accessibility, simplicity, and functionality through default system fonts, ensuring cross-platform compatibility and maintaining a neutral and dependable brand presentation. Typography, in our view, is the art of balancing typeface, size, style, and spacing to optimize readability, reflecting our dedication to content accessibility and a consistent, reliable message."),(0,n.kt)(r.Z,{className:"DocCardList--no-overview",mdxType:"DocCardList"}))}u.isMDXComponent=!0},94368:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const i={root:"root_XLvh"}},69190:(e,t,a)=>{a.r(t)}}]);