import{r as n,j as e,L as i}from"./index-c4d3113b.js";import{F as u}from"./Footer-7cc9d06b.js";import"./swiper-react-8190c01c.js";import"./index-7208bf7f.js";import{L as g,Z as h,T as x}from"./lg-thumbnail-f59e24dd.js";import{i as j}from"./3-9123c53f.js";import{a as f,i as v}from"./4-c1154e8c.js";import{b as N}from"./6-03e87ae2.js";import"./logo-d09d6c63.js";const b=({galleryItems:r})=>{const[c,m]=n.useState(r),[t,p]=n.useState("all"),s=a=>{p(a),setTimeout(()=>{const o=a==="all"?r:r.filter(d=>{var l;return(l=d.category)==null?void 0:l.includes(a)});m(o)},300)};return e.jsx("section",{className:"py-20 relative",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{children:e.jsxs("ul",{className:"filter-options flex flex-wrap justify-center gap-2",children:[e.jsx("li",{className:`inline-block ${t==="all"?"active":""}`,onClick:()=>s("all"),"data-group":"all",children:e.jsx(i,{to:"",children:"All"})}),e.jsx("li",{className:`inline-block ${t==="web"?"active":""}`,onClick:()=>s("web"),"data-group":"web-design",children:e.jsx(i,{to:"",children:"Web Design"})}),e.jsx("li",{className:`inline-block ${t==="graphic"?"active":""}`,onClick:()=>s("graphic"),"data-group":"graphic-design",children:e.jsx(i,{to:"",children:"Graphic Design"})}),e.jsx("li",{className:`inline-block ${t==="illustrator"?"active":""}`,onClick:()=>s("illustrator"),"data-group":"illustrator",children:e.jsx(i,{to:"",children:"Illustrator"})}),e.jsx("li",{className:`inline-block ${t==="photography"?"active":""}`,onClick:()=>s("photography"),"data-group":"photography",children:e.jsx(i,{to:"",children:"Photography"})})]})}),e.jsx("div",{id:"gallery-wrapper",className:"md:flex justify-center mx-auto mt-6",children:e.jsx(g,{plugins:[h,x],mode:"lg-fade",speed:500,children:(c||[]).map((a,o)=>e.jsx("a",{href:a.image.src,className:"lg:w-1/3 md:w-1/2 p-2 picture-item inline-block","data-groups":'["web-design"]',children:e.jsx("div",{children:e.jsxs("div",{className:"border p-2 rounded shadow",children:[e.jsx("div",{className:"overflow-hidden",children:e.jsx(i,{className:"image-popup",title:a.image.caption,to:"",children:e.jsx("img",{src:a.image.src,className:"transition-all duration-500 origin-center hover:scale-[1.1]"})})}),e.jsx("h5",{className:"text-base font-medium mt-6",children:a.title}),e.jsx("p",{className:"text-slate-400 mt-2",children:a.description})]})})},o))})}),e.jsx("div",{className:"flex items-center justify-center mt-20",children:e.jsxs(i,{to:"",className:"py-3 px-6 rounded text-white bg-primary transition-all duration-500 hover:shadow-lg hover:shadow-primary/25 focus:outline focus:outline-primary/50",children:[e.jsx("i",{className:"fa-solid fa-arrows-rotate me-2"})," Load More"]})})]})})},y=()=>e.jsx("section",{className:"pt-36 pb-24 bg-slate-100",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"text-center max-w-2xl mx-auto",children:[e.jsx("h2",{className:"md:text-5xl/tight text-3xl font-semibold mb-5",children:"Portfolio Grid"}),e.jsx("p",{className:"lg:text-lg text-slate-500 leading-7",children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur ratione voluptatem sequi nesciunt."})]})})}),w=""+new URL("1-bb9441c2.jpg",import.meta.url).href,k=""+new URL("7-38aa53e8.jpg",import.meta.url).href,q=[{image:{src:w,caption:"Smart Desk v2.0"},title:"Smart Desk v2.0",description:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur",category:["web"]},{image:{src:k,caption:"Task Manager"},title:"Task Manager",description:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur",category:["graphic"]},{image:{src:j,caption:"Portfolio Manager"},title:"Portfolio Manager",description:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur",category:["web","photography"]},{image:{src:f,caption:"Smart Office v2.0"},title:"Smart Office v2.0",description:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur",category:["illustrator"]},{image:{src:v,caption:"Online Conference"},title:"Online Conference",description:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur",category:["web","photography"]},{image:{src:N,caption:"Virtual Receptionist"},title:"Virtual Receptionist",description:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur",category:["graphic"]}],D=()=>e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx(b,{galleryItems:q}),e.jsx(u,{})]});export{D as default};
