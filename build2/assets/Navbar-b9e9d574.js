import{r as i,u as N,j as s,R as j,L as p,c as D}from"./index-df7e93fe.js";import{P}from"./PopoverLayout-4272c198.js";import{l as k}from"./logo-d09d6c63.js";import{u as U,O as H}from"./OffcanvasLayout-5f4c9de6.js";import"./index-c19a5acf.js";import"./swiper-react-81e44bd0.js";function b(){const[e,n]=i.useState(!1),a=N();return i.useEffect(()=>{["/pages/blogs/list"].includes(a.pathname)||n(!0)},[a.pathname]),{isDark:e}}const z=({open:e,children:n,classNames:a,as:l="div"})=>{var r;const c=i.useRef(null),d=e?((r=c.current)==null?void 0:r.scrollHeight)??0:0,o=l;return s.jsx(o,{ref:c,className:`transition-all overflow-hidden ${a||""}`,style:{height:d},children:n})},_=[{key:"home",label:"Home",url:"/",isTitle:!1},{key:"contact-us",label:"Contact us",url:"/contact-us",isTitle:!1},{key:"privacy-policy",label:"Privacy Policy",url:"/privacy-policy",isTitle:!1}],q=[{key:"home",label:"Home",url:"/",isTitle:!0},{key:"contact-us",label:"Contact us",url:"/contact-us",isTitle:!1},{key:"privacy-policy",label:"Privacy Policy",url:"/privacy-policy",isTitle:!1}],W=()=>_,B=()=>q,w=(e,n)=>{let a=[];const l=y(e,n.parentKey);return l&&(a.push(l.key),l.parentKey&&(a=[...a,...w(e,l)])),a},C=(e,n)=>{if(e instanceof Array)for(const a of e){const l=C(a,n);if(l)return l}else{if(e.url==n)return e;if(e.children!=null){for(const a of e.children)if(a.url==n)return a}}},y=(e,n)=>{if(e&&n)for(let a=0;a<e.length;a++){if(e[a].key===n)return e[a];const l=y(e[a].children,n);if(l)return l}return null},$=({item:e,activeMenuItems:n,toggleMenu:a})=>{const[l,c]=i.useState(n.includes(e.key)),{isDark:d}=b();i.useEffect(()=>{c(n.includes(e.key))},[n,e]);const o=()=>{const t=!l;return c(t),a&&a(e,t),!1},r=()=>s.jsxs(s.Fragment,{children:[s.jsxs(p,{to:"",className:`nav-link flex justify-between ${n.includes(e.key)?"active":""}`,"aria-expanded":l,onClick:o,"data-menu-key":e.key,style:{color:e.isTitle&&!d?"#f3f4f6":""},children:[s.jsxs("span",{className:"menu-text",children:[" ",e.label]}),!e.badge&&s.jsx("span",{className:"fa-solid fa-angle-down ms-2 align-middle"})]}),e.isDivider&&s.jsx("hr",{className:"-mx-2 my-2"})]});return s.jsx(P,{toggler:s.jsx(r,{}),placement:e.parentKey?"right-start":"bottom-start",togglerClass:"w-full nav-item after:absolute hover:after:-bottom-10 after:inset-0",children:s.jsx("ul",{className:`nav-link ${l?"active":""} origin-center -mt-0 transition-all bg-white rounded-lg shadow-lg border p-2 w-48 space-y-1.5 absolute`,children:(e.children||[]).map((t,f)=>s.jsx(j.Fragment,{children:t.children?s.jsx($,{item:t,toggleMenu:a,activeMenuItems:n,subMenuClassNames:"sub-menu",linkClassName:n.includes(t.key)?"active":""}):s.jsx(E,{item:t,className:"nav-item",linkClassName:n.includes(t.key)?"active":""})},f))})})},E=({item:e,className:n,linkClassName:a})=>s.jsx("li",{className:n,children:s.jsx(K,{item:e,className:a})}),K=({item:e,className:n})=>{const{isDark:a}=b();return s.jsx(p,{className:`nav-link side-nav-link-ref ${n}`,to:e.url,target:e.target,"data-menu-key":e.key,style:{color:e.isTitle&&!a?"#f3f4f6":""},children:e.icon?s.jsxs("div",{className:"flex items-center -ms-1.5",children:[s.jsx("span",{className:"bg-blue-600/10 flex justify-center items-center w-8 h-8 shadow rounded me-3",children:e.icon}),s.jsx("div",{className:"flex-grow-1",children:e.label})]}):s.jsx("div",{className:"flex flex-wrap justify-between",children:e.label})})},Q=({menuItems:e})=>{const[n,a]=i.useState([]),l=N(),c=i.useRef(null),d=(r,t)=>{t&&a([r.key])},o=i.useCallback(()=>{var f;const r=(f=l==null?void 0:l.pathname)==null?void 0:f.replaceAll("",""),t=C(e,r);if(t){const h=y(e,t.key);h&&a([h.key,...w(e,h)])}},[l.pathname,e]);return i.useEffect(()=>{e&&e.length>0&&o()},[o,e]),s.jsx("ul",{className:"navbar-nav flex gap-x-3 items-center justify-center",ref:c,id:"main-side-menu",children:(e||[]).map((r,t)=>s.jsx(j.Fragment,{children:r.children?s.jsx($,{item:r,toggleMenu:d,activeMenuItems:n,linkClassName:"nav-link",subMenuClassNames:""}):s.jsx(E,{item:r,linkClassName:`${n.includes(r.key)?"active":""}`,className:"nav-item"})},t))})},O=({item:e,linkClassName:n,subMenuClassNames:a,activeMenuItems:l,toggleMenu:c})=>{const[d,o]=i.useState(l.includes(e.key));i.useEffect(()=>{o(l.includes(e.key))},[l,e]);const r=()=>{const t=!d;return o(t),c&&c(e,t),!1};return s.jsxs("li",{className:"nav-item",children:[s.jsxs("div",{className:`${n} ${l.includes(e.key)?"active":""}`,"aria-expanded":d,"data-menu-key":e.key,onClick:r,children:[e.label,!e.badge&&s.jsx("span",{className:"fa-solid fa-angle-down ms-auto  align-middle"})]}),s.jsx(z,{open:d,as:"ul",classNames:a+" sub-menu",children:(e.children||[]).map((t,f)=>s.jsx(j.Fragment,{children:t.children?s.jsx(O,{item:t,toggleMenu:c,activeMenuItems:l,subMenuClassNames:"sub-menu",linkClassName:l.includes(t.key)?"active":""}):s.jsx(S,{item:t,className:"ms-3 nav-item",linkClassName:l.includes(t.key)?"active":""})},f))})]})},S=({item:e,className:n,linkClassName:a})=>s.jsx("li",{className:`${n}`,children:s.jsx(V,{item:e,className:a})}),V=({item:e,className:n})=>s.jsx(p,{to:e.url,target:e.target,className:`nav-link side-nav-link-ref  ${n}`,"data-menu-key":e.key,children:e.icon?s.jsxs("div",{className:"flex items-center -ms-1.5",children:[s.jsx("span",{className:"bg-blue-600/10 flex justify-center items-center w-8 h-8 shadow rounded me-3",children:e.icon}),s.jsx("div",{className:"flex-grow-1",children:e.label})]}):s.jsx("div",{className:"flex flex-wrap justify-between",children:e.label})}),Y=({menuItems:e})=>{const n=N(),a=i.useRef(null),[l,c]=i.useState([]),d=(r,t)=>{t&&c([r.key])},o=i.useCallback(()=>{var f;const r=(f=n==null?void 0:n.pathname)==null?void 0:f.replaceAll("",""),t=C(e,r);if(t){const h=y(e,t.key);h&&c([h.key,...w(e,h)]),setTimeout(function(){const u=document.querySelector(`#right-menu a[href="${r}"]`);if(u!=null){const x=document.querySelector("#right-menu"),m=u.offsetTop-150;T(x,100,600),x&&m>100&&T(x,m,600)}},200);const R=(u,x,m,g)=>(u/=g/2,u<1?m/2*u*u+x:(u--,-m/2*(u*(u-2)-1)+x)),T=(u,x,m)=>{const g=u.scrollTop,F=x-g,L=20;let v=0;const M=function(){v+=L;const A=R(v,g,F,m);u.scrollTop=A,v<m&&setTimeout(M,L)};M()}}},[n.pathname,e]);return i.useEffect(()=>{e&&e.length>0&&o()},[o,e]),s.jsx(s.Fragment,{children:s.jsx("ul",{className:"navbar-nav flex flex-col gap-2 menu",ref:a,id:"main-side-menu",children:(e||[]).map((r,t)=>s.jsx(j.Fragment,{children:r.isTitle?s.jsx("li",{className:"nav-item",children:r.label}):s.jsx(s.Fragment,{children:r.children?s.jsx(O,{item:r,toggleMenu:d,subMenuClassNames:"space-y-2",activeMenuItems:l,linkClassName:"nav-link"}):s.jsx(S,{item:r,linkClassName:`${l.includes(r.key)?"active":""}`,className:"nav-item"})})},t))})})},se=()=>{const[e,n,a,l]=U(!1),{settings:c}=D(),{isDark:d}=b(),o=c.topbar.theme==="light";return i.useEffect(()=>{const r=document.getElementById("navbar");document.addEventListener("scroll",t=>{t.preventDefault(),r&&(window.pageYOffset>=80?r.classList.add("nav-sticky"):r.classList.remove("nav-sticky"))})},[]),s.jsxs(s.Fragment,{children:[s.jsx("header",{id:"navbar",className:`${o?"light":"dark"} fixed top-0 inset-x-0 flex items-center z-40 w-full lg:bg-transparent bg-white transition-all py-5`,children:s.jsx("div",{className:"container",children:s.jsxs("nav",{className:"flex items-center",children:[s.jsx(p,{to:"/",children:s.jsx("img",{src:d?k:k,className:"h-14",alt:"Logo"})}),s.jsx("div",{className:"lg:block sm:hidden  ms-auto",children:s.jsx(Q,{menuItems:B()})}),s.jsxs("div",{className:"sm:hidden lg:flex gap-3 items-center ms-3",children:[s.jsx("a",{href:"https://app.senderside.com/sign-in",className:"border w-20 p-3 rounded flex items-center justify-center text-sm",style:{color:"black"},children:"Login"}),s.jsx("a",{href:"https://app.senderside.com/sign-up",className:"bg-primary w-full text-white p-3 rounded flex items-center justify-center text-sm",children:"Sign Up"})]}),s.jsx("div",{className:"lg:hidden flex items-center ms-auto px-2.5",children:s.jsx("button",{type:"button",onClick:n,children:s.jsx("i",{className:"fa-solid fa-bars text-2xl text-gray-500"})})})]})})}),s.jsx(H,{placement:"end",sizeClassName:"w-[447px] bg-white border-s",open:e,toggleOffcanvas:l,children:s.jsxs("div",{className:"flex flex-col h-[100vh] divide-y-2 divide-gray-200",children:[s.jsxs("div",{className:"p-6 flex items-center justify-between",children:[s.jsx(p,{to:"/",children:s.jsx("img",{src:k,className:"h-14",alt:"Logo"})}),s.jsx("button",{className:"flex items-center px-2",onClick:l,children:s.jsx("i",{className:"fa-solid fa-xmark text-xl"})})]}),s.jsx("div",{className:"p-6 overflow-scroll h-full",id:"right-menu",children:s.jsx(Y,{menuItems:W()})}),s.jsx("div",{className:"p-6 flex items-center justify-center",children:s.jsx("a",{href:"https://app.senderside.com/sign-up",className:"bg-primary w-full text-white p-3 rounded flex items-center justify-center text-sm",children:"Sign Up"})})]})})]})};export{se as default};
