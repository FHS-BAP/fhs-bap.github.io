"use strict";(self.webpackChunkfhsdocs=self.webpackChunkfhsdocs||[]).push([[3249],{4242:(e,t,n)=>{n.d(t,{A:()=>d});n(6540);var s=n(4164),r=n(776),a=n(4581),i=n(5983),l=n(7963),o=n(4848);function c(e){let{sidebar:t}=e;const n=(0,a.l)();return t?.items.length?"mobile"===n?(0,o.jsx)(l.A,{sidebar:t}):(0,o.jsx)(i.A,{sidebar:t}):null}function d(e){const{sidebar:t,toc:n,children:a,...i}=e,l=t&&t.items.length>0;return(0,o.jsx)(r.A,{...i,children:(0,o.jsx)("div",{className:"container margin-vert--lg",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)(c,{sidebar:t}),(0,o.jsx)("main",{className:(0,s.A)("col",{"col--7":l,"col--9 col--offset-1":!l}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),n&&(0,o.jsx)("div",{className:"col col--2",children:n})]})})})}},8258:(e,t,n)=>{n.d(t,{A:()=>H});n(6540);var s=n(4164),r=n(7131),a=n(6025),i=n(4848);function l(e){let{children:t,className:n}=e;const{frontMatter:s,assets:l,metadata:{description:o}}=(0,r.e)(),{withBaseUrl:c}=(0,a.h)(),d=l.image??s.image,m=s.keywords??[];return(0,i.jsxs)("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[o&&(0,i.jsx)("meta",{itemProp:"description",content:o}),d&&(0,i.jsx)("link",{itemProp:"image",href:c(d,{absolute:!0})}),m.length>0&&(0,i.jsx)("meta",{itemProp:"keywords",content:m.join(",")}),t]})}var o=n(8774);const c={title:"title_f1Hy"};function d(e){let{className:t}=e;const{metadata:n,isBlogPostPage:a}=(0,r.e)(),{permalink:l,title:d}=n,m=a?"h1":"h2";return(0,i.jsx)(m,{className:(0,s.A)(c.title,t),itemProp:"headline",children:a?d:(0,i.jsx)(o.A,{itemProp:"url",to:l,children:d})})}var m=n(1312),u=n(5846);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,m.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,i.jsx)(i.Fragment,{children:n(t)})}function x(e){let{date:t,formattedDate:n}=e;return(0,i.jsx)("time",{dateTime:t,itemProp:"datePublished",children:n})}function p(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function f(e){let{className:t}=e;const{metadata:n}=(0,r.e)(),{date:a,formattedDate:l,readingTime:o}=n;return(0,i.jsxs)("div",{className:(0,s.A)(h.container,"margin-vert--md",t),children:[(0,i.jsx)(x,{date:a,formattedDate:l}),void 0!==o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p,{}),(0,i.jsx)(g,{readingTime:o})]})]})}function v(e){return e.href?(0,i.jsx)(o.A,{...e}):(0,i.jsx)(i.Fragment,{children:e.children})}function b(e){let{author:t,className:n}=e;const{name:r,title:a,url:l,imageURL:o,email:c}=t,d=l||c&&`mailto:${c}`||void 0;return(0,i.jsxs)("div",{className:(0,s.A)("avatar margin-bottom--sm",n),children:[o&&(0,i.jsx)(v,{href:d,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:"avatar__photo",src:o,alt:r,itemProp:"image"})}),r&&(0,i.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,i.jsx)("div",{className:"avatar__name",children:(0,i.jsx)(v,{href:d,itemProp:"url",children:(0,i.jsx)("span",{itemProp:"name",children:r})})}),a&&(0,i.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:a})]})]})}const j={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:n},assets:a}=(0,r.e)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t}));return(0,i.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",l?j.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,i.jsx)("div",{className:(0,s.A)(!l&&"col col--6",l?j.imageOnlyAuthorCol:j.authorCol),children:(0,i.jsx)(b,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(d,{}),(0,i.jsx)(f,{}),(0,i.jsx)(A,{})]})}var _=n(440),k=n(1823);function P(e){let{children:t,className:n}=e;const{isBlogPostPage:a}=(0,r.e)();return(0,i.jsx)("div",{id:a?_.blogPostContainerID:void 0,className:(0,s.A)("markdown",n),itemProp:"articleBody",children:(0,i.jsx)(k.A,{children:t})})}var L=n(1943),C=n(2053);function y(){return(0,i.jsx)("b",{children:(0,i.jsx)(m.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function I(e){const{blogPostTitle:t,...n}=e;return(0,i.jsx)(o.A,{"aria-label":(0,m.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,i.jsx)(y,{})})}const T={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function w(){const{metadata:e,isBlogPostPage:t}=(0,r.e)(),{tags:n,title:a,editUrl:l,hasTruncateMarker:o}=e,c=!t&&o,d=n.length>0;return d||c||l?(0,i.jsxs)("footer",{className:(0,s.A)("row docusaurus-mt-lg",t&&T.blogPostFooterDetailsFull),children:[d&&(0,i.jsx)("div",{className:(0,s.A)("col",{"col--9":c}),children:(0,i.jsx)(C.A,{tags:n})}),t&&l&&(0,i.jsx)("div",{className:"col margin-top--sm",children:(0,i.jsx)(L.A,{editUrl:l})}),c&&(0,i.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":d}),children:(0,i.jsx)(I,{blogPostTitle:a,to:e.permalink})})]}):null}function H(e){let{children:t,className:n}=e;const a=function(){const{isBlogPostPage:e}=(0,r.e)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(l,{className:(0,s.A)(a,n),children:[(0,i.jsx)(N,{}),(0,i.jsx)(P,{children:t}),(0,i.jsx)(w,{})]})}},4029:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(6540);var s=n(4164),r=n(1003),a=n(7559),i=n(7131),l=n(4242),o=n(8258),c=n(1312),d=n(9022),m=n(4848);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.A,{...n,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,m.jsx)(d.A,{...t,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,i.e)(),{title:n,description:s,date:a,tags:l,authors:o,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(r.be,{title:n,description:s,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:a}),o.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var g=n(7763),x=n(996);function p(e){let{sidebar:t,children:n}=e;const{metadata:s,toc:r}=(0,i.e)(),{nextItem:a,prevItem:c,frontMatter:d,unlisted:h}=s,{hide_table_of_contents:p,toc_min_heading_level:f,toc_max_heading_level:v}=d;return(0,m.jsxs)(l.A,{sidebar:t,toc:!p&&r.length>0?(0,m.jsx)(g.A,{toc:r,minHeadingLevel:f,maxHeadingLevel:v}):void 0,children:[h&&(0,m.jsx)(x.A,{}),(0,m.jsx)(o.A,{children:n}),(a||c)&&(0,m.jsx)(u,{nextItem:a,prevItem:c})]})}function f(e){const t=e.content;return(0,m.jsx)(i.i,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(r.e3,{className:(0,s.A)(a.G.wrapper.blogPages,a.G.page.blogPostPage),children:[(0,m.jsx)(h,{}),(0,m.jsx)(p,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},7763:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var s=n(4164),r=n(5195);const a={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var i=n(4848);const l="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,s.A)(a.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(r.A,{...n,linkClassName:l,linkActiveClassName:o})})}},5195:(e,t,n)=>{n.d(t,{A:()=>x});var s=n(6540),r=n(6342);function a(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):s.push(r)})),s}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>l(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:r,minHeadingLevel:a,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let r=t;r<=n;r+=1)s.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:i}),c=o(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var m=n(8774),u=n(4848);function h(e){let{toc:t,className:n,linkClassName:s,isChild:r}=e;return t.length?(0,u.jsx)("ul",{className:r?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const g=s.memo(h);function x(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:m,...h}=e;const x=(0,r.p)(),p=c??x.tableOfContents.minHeadingLevel,f=m??x.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,s.useMemo)((()=>i({toc:a(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:p,maxHeadingLevel:f});return d((0,s.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:p,maxHeadingLevel:f}}),[l,o,p,f])),(0,u.jsx)(g,{toc:v,className:n,linkClassName:l,...h})}},996:(e,t,n)=>{n.d(t,{A:()=>h});n(6540);var s=n(4164),r=n(1312),a=n(5260),i=n(4848);function l(){return(0,i.jsx)(r.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,i.jsx)(r.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,i.jsx)(a.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(7559),m=n(7293);function u(e){let{className:t}=e;return(0,i.jsx)(m.A,{type:"caution",title:(0,i.jsx)(l,{}),className:(0,s.A)(t,d.G.common.unlistedBanner),children:(0,i.jsx)(o,{})})}function h(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(u,{...e})]})}},7131:(e,t,n)=>{n.d(t,{e:()=>o,i:()=>l});var s=n(6540),r=n(9532),a=n(4848);const i=s.createContext(null);function l(e){let{children:t,content:n,isBlogPostPage:r=!1}=e;const l=function(e){let{content:t,isBlogPostPage:n}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:r});return(0,a.jsx)(i.Provider,{value:l,children:t})}function o(){const e=(0,s.useContext)(i);if(null===e)throw new r.dV("BlogPostProvider");return e}},5846:(e,t,n)=>{n.d(t,{W:()=>c});var s=n(6540),r=n(4586);const a=["zero","one","two","few","many","other"];function i(e){return a.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const r=n.select(t),a=n.pluralForms.indexOf(r);return s[Math.min(a,s.length-1)]}(n,t,e)}}},5983:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var s=n(4164),r=n(8774),a=n(1312);const i={sidebar:"sidebar_brwN",sidebarHeader:"sidebarHeader_yTb0",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm"};var l=n(4848);function o(e){let{sidebar:t}=e,n=null;return(0,l.jsx)("aside",{className:"col col--3",children:(0,l.jsxs)("nav",{className:(0,s.A)(i.sidebar,"thin-scrollbar"),"aria-label":(0,a.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,l.jsx)("div",{className:(0,s.A)(i.sidebarHeader,"margin-bottom--md"),children:t.title}),(0,l.jsx)("ul",{className:(0,s.A)(i.sidebarItemList,"clean-list"),children:t.items.map((e=>{const t=e.permalink.split("/")[2],s=n!==t&&(0,l.jsx)("h5",{className:i.sidebarItemTitle,children:t});return n=t,(0,l.jsxs)(l.Fragment,{children:[s,(0,l.jsx)("li",{className:i.sidebarItem,children:(0,l.jsx)(r.A,{isNavLink:!0,to:e.permalink,className:i.sidebarItemLink,activeClassName:i.sidebarItemLinkActive,children:e.title})},e.permalink)]})}))})]})})}},7963:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var s=n(8774),r=n(5600);const a={sidebarItemTitle:"sidebarItemTitle_z3uL"};var i=n(4848);function l(e){let{sidebar:t}=e,n=null;return(0,i.jsx)("ul",{className:"menu__list blog-menu__list",children:t.items.map((e=>{const t=e.permalink.split("/")[2],r=n!==t&&(0,i.jsx)("h5",{className:a.sidebarItemTitle,children:t});return n=t,(0,i.jsxs)(i.Fragment,{children:[r,(0,i.jsx)("li",{className:"menu__list-item",children:(0,i.jsx)(s.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)]})}))})}function o(e){return(0,i.jsx)(r.GX,{component:l,props:e})}},4606:(e,t,n)=>{n.d(t,{A:()=>d});var s=n(6540),r=n(1432),a=n(8774),i=n(4848);const l="md ";function o(e){return"string"==typeof e.children&&e.children.startsWith(l)?(0,i.jsx)(c,{...e,children:e.children.slice(l.length)}):(0,i.jsx)("code",{...e})}const c=s.memo((function(e){const t=function(e){const t=/(?<link>\[(?<text>[^\]]+)?\]\((?<url>[^)]+)\))/g,n=/\[[^\]]+?\]\([^)]+\)/g,r=[];let l;for(;null!==(l=t.exec(e));){const e=l.groups.link,t=l.groups.text,n=l.groups.url;if(n.endsWith(".md")||n.endsWith(".mdx"))throw new Error("Markdown links inside code blocks can't link using a filename extensions. Problematic link: "+e);r.push({link:e,text:t,url:n})}return e.split(n).map(((e,t)=>(0,i.jsxs)(s.Fragment,{children:[e,r[t]?(0,i.jsx)(a.A,{to:r[t].url,children:r[t].text}):null]},t)))}(e.children);return(0,i.jsx)("code",{...e,children:t})}));function d(e){return s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,i.jsx)(o,{...e}):(0,i.jsx)(r.A,{...e})}}}]);