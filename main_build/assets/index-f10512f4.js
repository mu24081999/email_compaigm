import{r,j as e}from"./index-7eb7df4a.js";import{w as c}from"./white-wave-ae4a4ecd.js";import{s as g,a as h,e as b,n as j,t as v,F as w,b as y}from"./9-32a8de11.js";import{F as N}from"./Footer-4eac7f12.js";import{P as C}from"./PricingCards-07b32fdc.js";import{F as S}from"./FeedBack-05c4492d.js";import{S as k,a as F}from"./swiper-react-5b4bb3d8.js";import"./index-4961a07a.js";import{A as E}from"./autoplay-f1d1bc39.js";import{o as A,t as M,a as I,f as B,b as L}from"./5-2d54799d.js";import{F as m}from"./FormInput-7ff5279b.js";import{c as D}from"./contact-9781f1c4.js";import"./data-b45baab1.js";import"./img-2-9275dc86.js";import"./logo-d09d6c63.js";import"./navigation-88e596d0.js";import"./create-element-if-not-defined-267b7e2f.js";const o=e.jsxs("svg",{className:"w-5 h-5 text-green-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[" ",e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"})," ",e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})," "]}),O=()=>{const[d,i]=r.useState(!1),[a,x]=r.useState({name:"",email:""}),[P,l]=r.useState("");console.log("🚀 ~ Hero ~ formData:",a);const u=async t=>{t.preventDefault();try{i(!0);const s=await D(a.name,a.email,"Subscription Request");i(!1),l(s.message||"Form submitted successfully!")}catch{l("null")}},n=t=>{const{name:s,value:p}=t.target;x(f=>({...f,[s]:p}))};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pt-36 sm:pb-96 pb-80 relative bg-gradient-to-t from-slate-500/10",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"text-center lg:w-11/12 mx-auto",children:e.jsxs("div",{children:[e.jsxs("h1",{className:"text-3xl/tight sm:text-4xl/tight lg:text-[45px] font-semibold mb-5",children:["Ultimate Solution For Startup's & Agency Owners Email, SMS & Phone ",e.jsx("span",{className:"relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0",children:"Communication"})," ","All-In One Platform"]}),e.jsxs("form",{className:"flex flex-wrap items-center justify-center gap-2 mt-12",onSubmit:u,children:[e.jsx(m,{name:"name",className:"w-full rounded border-gray-300 focus:border-gray-400 focus:ring-0 bg-white py-2 px-4",containerClass:"flex items-center",placeholder:"Your Name",onChange:n}),e.jsx(m,{name:"email",className:"w-full rounded border-gray-300 focus:border-gray-400 focus:ring-0 bg-white py-2 px-4",containerClass:"flex items-center",placeholder:"Your Email",onChange:n}),d?e.jsxs("button",{disabled:!0,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center",children:[e.jsxs("svg",{"aria-hidden":"true",role:"status",className:"inline mr-3 w-4 h-4 text-white animate-spin",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),e.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})]}),"Loading..."]}):e.jsx("button",{type:"submit",className:"py-2 px-4 rounded text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50",children:"Sign Up"})]}),e.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-5 mt-5",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[o,e.jsx("p",{className:"text-sm text-gray-700",children:"⁠Instant Activation"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[o,e.jsx("p",{className:"text-sm text-gray-700",children:"⁠Easy Onboarding"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[o,e.jsx("p",{className:"text-sm text-gray-700",children:"⁠Quick Setup"})]})]})]})})})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"relative sm:-mt-80 -mt-64",children:[e.jsxs("div",{className:"hidden sm:block",children:[e.jsx("div",{className:"after:w-24 after:h-24 after:absolute after:-top-10 after:end-10 after:bg-[url('@/assets/images/pattern/dot5.svg')]"}),e.jsx("div",{className:"before:w-24 before:h-24 before:absolute before:-bottom-10 before:start-10 before:bg-[url('@/assets/images/pattern/dot2.svg')]"})]}),e.jsx("div",{id:"swiper_one",className:"swiper border-[10px] border-white bg-white shadow-lg rounded-md w-5/6","data-aos":"fade-up","data-aos-duration":"2000",children:e.jsx(k,{modules:[E],autoplay:{delay:2500,disableOnInteraction:!1},spaceBetween:30,loop:!0,children:[A,M,I,B,L,g,h,b,j,v].map((t,s)=>e.jsx(F,{children:e.jsx("img",{src:t,alt:"saas1",className:"rounded-md"})},s))})})]})})]})},ee=()=>e.jsxs("div",{className:"text-gray-800",children:[e.jsx(O,{}),e.jsx(w,{}),e.jsx(S,{}),e.jsxs("section",{className:"bg-gradient-to-r from-gray-100/70 to-gray-100 relative py-16 sm:py-24",children:[e.jsx("div",{className:"absolute top-0 inset-x-0 hidden sm:block",children:e.jsx("img",{src:c,alt:"svg",className:"w-full -scale-x-100"})}),e.jsx("div",{className:"py-5",children:e.jsx(C,{})}),e.jsx("div",{className:"absolute bottom-0 inset-x-0 hidden sm:block",children:e.jsx("img",{src:c,alt:"svg",className:"w-full scale-x-100 -scale-y-100"})})]}),e.jsx(y,{}),e.jsx(N,{})]});export{ee as default};
