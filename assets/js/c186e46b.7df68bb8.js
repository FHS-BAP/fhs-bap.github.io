"use strict";(self.webpackChunkfhsdocs=self.webpackChunkfhsdocs||[]).push([[714],{1976:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var i=n(6540),a=n(776),s=n(6025);function r(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}var c=n(4146);function u(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var h=i.createContext();var p={initialChunks:{}},x="PENDING",m="REJECTED";var g=function(e){return e};function f(e){var t=e.defaultResolveComponent,n=void 0===t?g:t,a=e.render,s=e.onLoad;function f(e,t){void 0===t&&(t={});var g=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),f={};function y(e){return t.cacheKey?t.cacheKey(e):g.resolve?g.resolve(e):"static"}function b(e,i,a){var s=t.resolveComponent?t.resolveComponent(e,i):n(e);return c(a,s,{preload:!0}),s}var v,j,N=function(e){var t=y(e),n=f[t];return n&&n.status!==m||((n=g.requireAsync(e)).status=x,f[t]=n,n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:g.resolve(e),chunkName:g.chunkName(e),error:t?t.message:t}),n.status=m}))),n},w=function(e){var n,i;function c(n){var i;return(i=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:y(n)},u(!n.__chunkExtractor||g.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(g.requireAsync(n).catch((function(){return null})),i.loadSync(),n.__chunkExtractor.addChunk(g.chunkName(n))),l(i)):(!1!==t.ssr&&(g.isReady&&g.isReady(n)||g.chunkName&&p.initialChunks[g.chunkName(n)])&&i.loadSync(),i)}i=e,(n=c).prototype=Object.create(i.prototype),n.prototype.constructor=n,d(n,i),c.getDerivedStateFromProps=function(e,t){var n=y(e);return o({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var h=c.prototype;return h.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===m&&this.setCache(),this.state.loading&&this.loadAsync()},h.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},h.componentWillUnmount=function(){this.mounted=!1},h.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},h.getCacheKey=function(){return y(this.props)},h.getCache=function(){return f[this.getCacheKey()]},h.setCache=function(e){void 0===e&&(e=void 0),f[this.getCacheKey()]=e},h.triggerOnLoad=function(){var e=this;s&&setTimeout((function(){s(e.state.result,e.props)}))},h.loadSync=function(){if(this.state.loading)try{var e=b(g.requireSync(this.props),this.props,S);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:g.resolve(this.props),chunkName:g.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},h.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=b(t,e.props,S);e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},h.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,r(e,["__chunkExtractor","forwardedRef"]));return N(t)},h.render=function(){var e=this.props,n=e.forwardedRef,i=e.fallback,s=(e.__chunkExtractor,r(e,["forwardedRef","fallback","__chunkExtractor"])),l=this.state,d=l.error,c=l.loading,u=l.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===x)throw this.loadAsync();if(d)throw d;var h=i||t.fallback||null;return c?h:a({fallback:h,result:u,options:t,props:o({},s,{ref:n})})},c}(i.Component),_=(j=function(e){return i.createElement(h.Consumer,null,(function(t){return i.createElement(v,Object.assign({__chunkExtractor:t},e))}))},(v=w).displayName&&(j.displayName=v.displayName+"WithChunkExtractor"),j),S=i.forwardRef((function(e,t){return i.createElement(_,Object.assign({forwardedRef:t},e))}));return S.displayName="Loadable",S.preload=function(e){S.load(e)},S.load=function(e){return N(e)},S}return{loadable:f,lazy:function(e,t){return f(e,o({},t,{suspense:!0}))}}}var y=f({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return i.createElement(t,n)}}),b=y.loadable,v=y.lazy,j=f({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),N=j.loadable,w=j.lazy;var _=b;_.lib=N,v.lib=w;const S=_;var k=n(4848);const A=S((()=>Promise.all([n.e(1869),n.e(5829),n.e(5453)]).then(n.bind(n,5453))));function C(){return(0,k.jsx)("div",{children:(0,k.jsx)(A,{})})}function R(){return(0,k.jsx)("div",{title:"Overview",description:"FHS-BAP Data",children:(0,k.jsx)("div",{style:{position:"absolute",top:"calc(100px + 1rem)",left:"0",width:"100vw"},children:(0,k.jsxs)("div",{style:{backgroundColor:"none",paddingTop:"0px",display:"flex",margin:"0 auto"},children:[(0,k.jsx)("video",{style:{width:"100%",height:"100%",objectFit:"cover"},noControls:!0,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,preload:!0,disablePictureInPicture:!0,controlsList:"nodownload",src:(0,s.A)("img/banner/endless_tide.mp4")}),(0,k.jsx)("div",{style:{display:"flex",justifyContent:"center",position:"absolute",top:"120px",left:"calc(50% - 300px)",width:"600px",fontFamily:"Arial Black",fontSize:"3rem"},children:(0,k.jsx)("div",{className:"rainbowFonts",style:{paddingTop:"120px",fontSize:"42px"},children:"Overview FHS-BAP Data"})})]})})})}function B(){return(0,k.jsx)("div",{title:"Overview",description:"FHS-BAP",children:(0,k.jsx)("div",{style:{position:"absolute",top:"calc(480px + 1rem)",left:"0",width:"100vw",backgroundColor:"black",paddingBottom:"10px"},children:(0,k.jsx)("div",{className:"theme-admonition theme-admonition-tip \r admonition_o5H7 alert alert--success",style:{position:"relative",maxWidth:"960px",margin:"0 auto",paddingTop:"10px",paddingBottom:"0px",paddingLeft:"25px",paddingRight:"25px",border:"1px solid silver",borderRadius:"10px",boxSizing:"border-box",textAlign:"left",top:"10px"},children:(0,k.jsxs)("ul",{style:{listStyleType:"disc",padding:0},children:[(0,k.jsx)("li",{children:"Since 1948, the Framingham Heart Study (FHS), under the direction of the National Heart, Lung, and Blood Institute (NHLBI), formerly known as the National Heart Institute, has been committed to identifying the common factors or characteristics that contribute to cardiovascular disease (CVD) over a long period of time in three generations of participants. Since 1971, the Boston University Aram V. Chobanian & Edward Avedisian School of Medicine (BUMC) has served as NHLBI contractor and academic partner for the study. In 2020, the BUMC received an infrastructure grant from the National Institute on Aging (NIA) to establish the FHS Brain Aging Program (FHS-BAP). Since its inception, the FHS-BAP Data Core has played a crucial role in strengthening the data infrastructure necessary for studying brain aging, cognitive decline, Alzheimer\u2019s disease (AD), and all causes of dementia."}),(0,k.jsx)("li",{children:"Our strategy for managing and sharing FHS data for AD research covers a wide range of information, including legacy data like demographics and risk factors, lab biomarkers, NP assessments, and Brain MRI/PET data. We also incorporate new clinical data and digital markers. Upholding FAIR principles, we ensure data integrity and accessibility. Through collaboration with FHS-BAP internal cores, contract staff, and external teams, we facilitate the collection, auditing, and sharing of curated datasets for analysis."})]})})})})}function H(){const[e,t]=(0,i.useState)(0);function n(n){const i=(e+n+10)%10;t(i),a(i)}function a(t){void 0===t&&(t=e);const n=document.getElementsByClassName("mySlides"),i=document.getElementsByClassName("dot");for(let e=0;e<n.length;e++)n[e].style.display="none";for(let e=0;e<i.length;e++)i[e].className=i[e].className.replace(" active","");n[t].style.display="block",i[t].className+=" active"}return(0,i.useEffect)((()=>{a()}),[]),(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)("div",{className:"slideshowcontainer",style:{height:"610px",border:"1px solid #c0c0c0",overflow:"hidden"},children:[[...Array(10)].map(((e,t)=>(0,k.jsxs)("div",{className:"mySlides fade",children:[(0,k.jsxs)("div",{className:"numbertext",children:[t+1," / 10"]}),(0,k.jsx)("img",{src:`/img/slideshow/slide${t+1}.jpg`,style:{width:"100%"},alt:`Slide ${t+1}`})]},t))),(0,k.jsx)("a",{className:"prev",onClick:()=>n(-1),children:"\u276e"}),(0,k.jsx)("a",{className:"next",onClick:()=>n(1),children:"\u276f"}),(0,k.jsx)("div",{style:{textAlign:"center"},children:[...Array(10)].map(((n,i)=>(0,k.jsx)("span",{className:"dot "+(e===i?"active":""),onClick:()=>{return t((e=i+1)-1),void a(e-1);var e}},i)))})]})})}function E(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),(0,k.jsx)("div",{style:{maxWidth:"1000px",minHeight:"600px",border:"1px solid silver",borderRadius:"10px",boxSizing:"border-box",margin:"0 auto",display:"block",backgroundColor:"#99e1ff",paddingTop:"30px",paddingBottom:"20px"},children:(0,k.jsx)(C,{})}),(0,k.jsx)("br",{})]})}function T(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),(0,k.jsxs)("div",{style:{maxWidth:"1000px",minHeight:"800px",border:"1px solid silver",borderRadius:"10px",boxSizing:"border-box",margin:"0 auto",display:"block",backgroundColor:"#edcd37",paddingTop:"30px",paddingBottom:"20px"},children:[(0,k.jsx)("p",{style:{fontSize:"38px",paddingLeft:"5px",paddingRight:"5px",fontFamily:"Arial Black",color:"#511252",paddingTop:"30px",paddingBottom:"10px",textAlign:"center"},children:"FHS-BAP Data"}),(0,k.jsx)("div",{style:{width:"800px",color:"black",border:"0px solid silver",paddingTop:"10px",paddingBottom:"10px",margin:"0 auto"},children:(0,k.jsx)("p",{children:"FHS data ranges from simple demographic and self-reporting data points to more complex multi-omic and digital data. In addition to these structured data, FHS has also been gathering unstructured data, especially in recent years."})}),(0,k.jsx)("h1",{style:{textAlign:"center",color:"#b84a5b",paddingTop:"50px",paddingBottom:"20px"},children:"Structured data"}),(0,k.jsx)("div",{className:"aboutus_container4",style:{paddingLeft:"20px",paddingRight:"20px"},children:(0,k.jsxs)("div",{className:"row",children:[(0,k.jsx)("div",{className:"aboutus_column4",children:(0,k.jsxs)("div",{className:"aboutus_card",children:[(0,k.jsx)("img",{src:"/img/fhs/stru1_pheno.png",alt:"Team member",style:{width:"100%"}}),(0,k.jsxs)("div",{className:"aboutus_container1",style:{minHeight:"140px"},children:[(0,k.jsx)("h3",{children:"Phenotypic Data"}),(0,k.jsx)("p",{style:{fontSize:"12px",paddingLeft:"5px",paddingRight:"5px",textAlign:"left"},children:"The structured phenotypic data are commonly used data such as demographic, self-reported responses to questionnaires, clinical outcomes, lab test results, etc."})]})]})}),(0,k.jsx)("div",{className:"aboutus_column4",children:(0,k.jsxs)("div",{className:"aboutus_card",children:[(0,k.jsx)("img",{src:"/img/fhs/stru2_gene.png",alt:"Team member",style:{width:"100%"}}),(0,k.jsxs)("div",{className:"aboutus_container1",style:{minHeight:"140px"},children:[(0,k.jsx)("h3",{children:"Genetic Data"}),(0,k.jsx)("p",{style:{fontSize:"12px",paddingLeft:"5px",paddingRight:"5px",textAlign:"left"},children:"DNA has been collected from blood and immortalized cell lines from Original Cohort, Offspring Cohort and the Third Generation Cohort (over 9,300 participants)."})]})]})}),(0,k.jsx)("div",{className:"aboutus_column4",children:(0,k.jsxs)("div",{className:"aboutus_card",children:[(0,k.jsx)("img",{src:"/img/fhs/stru3_omics.png",alt:"Team member",style:{width:"100%"}}),(0,k.jsxs)("div",{className:"aboutus_container1",style:{minHeight:"140px"},children:[(0,k.jsx)("h3",{children:"Multi-omic"}),(0,k.jsxs)("p",{style:{fontSize:"12px",paddingLeft:"5px",paddingRight:"5px",textAlign:"left"},children:["Many of the multi-omic datasets comes under the SABRe projects \u2013 to identify the biomarker signatures of metabolic risk factors.",(0,k.jsx)("br",{}),"\xa0 "]})]})]})}),(0,k.jsx)("div",{className:"aboutus_column4",children:(0,k.jsxs)("div",{className:"aboutus_card",children:[(0,k.jsx)("img",{src:"/img/fhs/stru4_digital.png",alt:"Team member",style:{width:"100%"}}),(0,k.jsxs)("div",{className:"aboutus_container1",style:{minHeight:"140px"},children:[(0,k.jsx)("h3",{children:"Digital"}),(0,k.jsxs)("p",{style:{fontSize:"12px",paddingLeft:"5px",paddingRight:"5px",textAlign:"left"},children:["Unlike their unstructured counterparts, these digital data points are derived based on preset algorithms.",(0,k.jsx)("br",{}),"\xa0"]})]})]})})]})}),(0,k.jsx)("h1",{style:{textAlign:"center",color:"#b84a5b",paddingTop:"50px",paddingBottom:"20px"},children:"Unstructured data"}),(0,k.jsx)("div",{className:"aboutus_container3",style:{paddingLeft:"20px",paddingRight:"20px"},children:(0,k.jsxs)("div",{className:"row",children:[(0,k.jsx)("div",{className:"aboutus_column3",children:(0,k.jsxs)("div",{className:"aboutus_card",children:[(0,k.jsx)("img",{src:(0,s.A)("img/fhs/us1_voice.png"),alt:"news 1",style:{width:"100%"}}),(0,k.jsxs)("div",{className:"aboutus_container1",style:{minHeight:"120px"},children:[(0,k.jsx)("h3",{children:"Voice Data"}),(0,k.jsx)("p",{style:{fontSize:"12px",paddingLeft:"5px",paddingRight:"5px",textAlign:"left"},children:"Voice recording of neuropsychological assessment began in 2005, including raw voice recording, censored voice recording, and transcriptions."})]})]})}),(0,k.jsx)("div",{className:"aboutus_column3",children:(0,k.jsxs)("div",{className:"aboutus_card",children:[(0,k.jsx)("img",{src:(0,s.A)("img/fhs/us2_image.png"),alt:"news 2",style:{width:"100%"}}),(0,k.jsxs)("div",{className:"aboutus_container1",style:{minHeight:"120px"},children:[(0,k.jsx)("h3",{children:"Image Data"}),(0,k.jsxs)("p",{style:{fontSize:"12px",paddingLeft:"5px",paddingRight:"5px",textAlign:"left"},children:["Image Data including Raw MRI brain scans (format DICOM) since 2002, and limited sample of the PET/Tau Scans. ",(0,k.jsx)("br",{}),"\xa0"]})]})]})}),(0,k.jsx)("div",{className:"aboutus_column3",children:(0,k.jsxs)("div",{className:"aboutus_card",children:[(0,k.jsx)("img",{src:(0,s.A)("img/fhs/us3_dpen.png"),alt:"news 3",style:{width:"100%"}}),(0,k.jsxs)("div",{className:"aboutus_container1",style:{minHeight:"120px"},children:[(0,k.jsx)("h3",{children:"Digital Pen"}),(0,k.jsxs)("p",{style:{fontSize:"12px",paddingLeft:"5px",paddingRight:"5px",textAlign:"left"},children:["Including real-time pen motion recording during the digital clock drawing test, and other neuropsychological tests. ",(0,k.jsx)("br",{}),"\xa0"]})]})]})})]})}),(0,k.jsx)("div",{style:{minHeight:"30px",minWidth:"50px",margin:"0 auto"},children:(0,k.jsx)("center",{children:(0,k.jsx)("p",{children:(0,k.jsx)("button",{className:"aboutus_button",children:(0,k.jsx)("a",{style:{fontSize:"20px"},target:"_blank",href:"/docs/intro",children:"Read More"})})})})})]}),(0,k.jsx)("br",{})]})}const O=()=>(0,k.jsxs)(a.A,{children:[(0,k.jsx)(R,{}),(0,k.jsx)(B,{}),(0,k.jsx)("div",{style:{position:"relative",paddingTop:"800px"},children:(0,k.jsx)(H,{})}),(0,k.jsx)("div",{children:(0,k.jsx)(E,{})}),(0,k.jsx)("div",{children:(0,k.jsx)(T,{})}),(0,k.jsx)("br",{}),(0,k.jsx)("hr",{}),(0,k.jsx)("br",{})]})}}]);