(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9536:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(8383)}])},6410:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(4246);s(7378);var a=s(4680),n=s.n(a);function i(e){let{small:t,children:s}=e;return(0,r.jsx)("div",{className:n().wrapper,children:(0,r.jsx)("div",{className:[n().grid,t?n().grid__small:null].join(" "),children:s})})}},3877:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var r=s(4246),a=s(4419),n=s.n(a),i=s(1281);let l=e=>{let{id:t,pathname:s,pageState:a,showPostGrid:l}=e;return(0,r.jsxs)("div",{className:n().post,children:[(0,r.jsxs)("h2",{children:["I am the post ",t]}),(0,r.jsxs)("h3",{children:["my pathname is: ",s]}),a&&(0,r.jsxs)("h3",{children:["Initial page state is preserved and is: ",a]}),l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Go to another post staying in contextual navigation:"}),(0,r.jsx)(i.Z,{small:!0})]})]})}},1281:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var r=s(4246),a=s(6410),n=s(1447),i=s(5719);let l=[1,2,3,4,5,6,7,8,9];function d(e){let{small:t}=e,{makeContextualHref:s}=(0,i.K)();return(0,r.jsx)(a.Z,{small:t,children:l.map((e,t)=>(0,r.jsx)(n.Z,{href:s({postId:e}),as:"/post/".concat(e),children:e},t))})}},1447:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var r=s(4246);s(7378);var a=s(9894),n=s.n(a),i=s(6585),l=s.n(i);function d(e){let{href:t,as:s,style:a,children:i}=e;return(0,r.jsx)(n(),{className:l().postCard,href:t,as:s,style:a,children:i})}},8383:(e,t,s)=>{"use strict";s.r(t),s.d(t,{backgroundColors:()=>x,default:()=>g});var r=s(4246),a=s(2186),n=s.n(a),i=s(6677),l=s(1403),d=s.n(l),o=s(3877),c=s(1281),u=s(6410),p=s(1447);let _=()=>(0,r.jsx)(u.Z,{children:Object.entries(x).map((e,t)=>{let[s,a]=e;return(0,r.jsxs)(p.Z,{href:"/?state=".concat(s),style:{backgroundColor:a},children:["Initial State: ",s]},t)})});var h=s(5719);let x={1:"#9b55b7",2:"#e77e22",3:"#2c97dd"};d().setAppElement("#__next");let g=()=>{let e=(0,i.useRouter)(),t=Array.isArray(e.query.state)?void 0:e.query.state,s=Array.isArray(e.query.postId)?void 0:e.query.postId,{returnHref:a}=(0,h.K)();return(0,r.jsx)("div",{className:n().background,style:{backgroundColor:x[t]},children:(0,r.jsxs)("div",{className:n().content,children:[(0,r.jsx)(d(),{isOpen:!!e.query.postId,onRequestClose:()=>e.push(a),contentLabel:"Post modal",style:{overlay:{backgroundColor:"rgba(255, 255, 255, 0.3)"}},children:(0,r.jsx)(o.Z,{id:s,pathname:e.pathname,pageState:t,showPostGrid:!0})}),(0,r.jsx)("h2",{children:"Set initial page state:"}),(0,r.jsx)(_,{}),(0,r.jsx)("h2",{children:"...then start contextual navigation!"}),(0,r.jsx)(c.Z,{})]})})}},4680:e=>{e.exports={wrapper:"Grid_wrapper__cPDnC",grid:"Grid_grid__b07fb",grid__small:"Grid_grid__small__B7aif"}},6585:e=>{e.exports={postCard:"SquaredLink_postCard__5InMa"}},4419:e=>{e.exports={post:"styles_post__EyY1p"}},2186:e=>{e.exports={background:"_background__ZUFcy",content:"_content__k4QeO"}},5719:(e,t,s)=>{"use strict";s.d(t,{K:()=>i});var r=s(7378),a=s(6677);let n="_UCR_return_href";function i(){let e=(0,a.useRouter)(),t="string"==typeof e.query[n]?e.query[n]:void 0,s=Object.assign({},e.query);delete s[n];let i=null!=t?t:e.asPath,l=JSON.stringify(s),d=(0,r.useCallback)(t=>e.pathname+"?"+new URLSearchParams(Object.assign(Object.assign(Object.assign({},e.query),t),{[n]:i})).toString(),[l,i]);return{returnHref:i,makeContextualHref:d}}}},e=>{var t=t=>e(e.s=t);e.O(0,[827,403,888,774,179],()=>t(9536)),_N_E=e.O()}]);