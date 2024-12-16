import{j as e,L as s}from"./index-68c3dad0.js";import"./swiper-react-c256c2bb.js";import{F as u}from"./Footer3-70d2c3ea.js";import"./index-4958fdaa.js";import{F as r}from"./FormInput-12be8d88.js";import{o as h,c as p,a as l,u as g}from"./yup-97ea62cb.js";import{i as d,a as c}from"./img-2-9275dc86.js";import{i as j}from"./img-4-7f039668.js";import{i as v}from"./3-9123c53f.js";import{a as f,i as N}from"./4-c1154e8c.js";import{b}from"./6-03e87ae2.js";import{p as y,T as o}from"./tippy-47897b66.js";import{b as w}from"./blog-3-1599c529.js";import{b as q}from"./blog-2-731e0c8e.js";import"./logo-dark-a7523ff3.js";const k=()=>{const n=h(p().shape({name:l().required("Please enter Name"),email:l().required("Please enter Email").email("Please enter valid Email"),subject:l().required("Please enter Subject"),message:l().required("Please enter Message")})),m=g({defaultValues:{},resolver:n}),{handleSubmit:x,register:a,control:t,formState:{errors:i}}=m;return e.jsx("div",{className:"mt-14",children:e.jsxs("div",{className:"border bg-white rounded p-6",children:[e.jsx("h1",{children:"Post a comment"}),e.jsx("form",{onSubmit:x(()=>{}),children:e.jsxs("div",{className:"flex flex-col gap-5 mt-5",children:[e.jsxs("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-5",children:[e.jsx(r,{type:"text",name:"name",className:"rounded border-gray-300 focus:border-gray-400 focus:ring-0 w-full text-sm",placeholder:"Name",register:a,errors:i,control:t}),e.jsx(r,{type:"email",name:"email",className:"rounded border-gray-300 focus:border-gray-400 focus:ring-0 w-full text-sm",placeholder:"Email",register:a,errors:i,control:t})]}),e.jsx(r,{type:"text",name:"subject",className:"rounded border-gray-300 focus:border-gray-400 focus:ring-0 w-full text-sm",placeholder:"Subject",containerClass:"w-full",register:a,errors:i,control:t}),e.jsx(r,{type:"textarea",name:"message",className:"rounded border-gray-300 focus:border-gray-400 focus:ring-0 w-full text-sm",placeholder:"Message",rows:5,register:a,errors:i,control:t}),e.jsx("button",{className:"flex",type:"submit",children:e.jsx("span",{className:"bg-black/70 text-white rounded-md text-sm font-semibold flex-none shadow shadow-black hover:shadow-lg hover:shadow-black/30 focus:shadow-none focus:outline focus:outline-black/50 px-5 py-3",children:"Submit"})})]})})]})})},S=()=>e.jsx("section",{className:"lg:py-24 py-14",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h1",{className:"tracking-wider",children:"Comments"}),e.jsx("span",{className:"bg-gray-200 px-2 rounded-md",children:"3"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex gap-3 my-6",children:[e.jsx("img",{src:j,className:"h-11 w-11 rounded-md"}),e.jsxs("div",{children:[e.jsx("h6",{className:"text-sm mb-1",children:"Sansa Stark"}),e.jsx("p",{className:"text-sm text-gray-500",children:"2 days ago"}),e.jsx("p",{className:"text-sm/relaxed tracking-wider text-gray-600 mt-2",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."}),e.jsxs(s,{to:"",className:"text-primary text-sm",children:[e.jsx("i",{className:"fa-regular fa-comment me-1"})," Reply"]}),e.jsxs("div",{className:"flex gap-3 my-6",children:[e.jsx("img",{src:d,className:"h-11 w-11 rounded-md"}),e.jsxs("div",{children:[e.jsx("h6",{className:"text-sm mb-1",children:"Cersei Lannister"}),e.jsx("p",{className:"text-sm text-gray-500",children:"1 days ago"}),e.jsx("p",{className:"text-sm/relaxed tracking-wider text-gray-600 mt-2",children:"Itaque earum rerum hic tenetur sapiente delectus aut reiciendis voluptatibus maiores alias consequatur aut perferendis"}),e.jsxs(s,{to:"",className:"text-primary text-sm",children:[e.jsx("i",{className:"fa-regular fa-comment me-1"})," Reply"]})]})]})]})]}),e.jsx("div",{className:"border-b"}),e.jsxs("div",{className:"flex gap-3 my-6",children:[e.jsx("img",{src:c,className:"h-11 w-11 rounded-md"}),e.jsxs("div",{children:[e.jsx("h6",{className:"text-sm mb-1",children:"Sansa Stark"}),e.jsx("p",{className:"text-sm text-gray-500",children:"2 days ago"}),e.jsx("p",{className:"text-sm/relaxed tracking-wider text-gray-600 mt-2",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."}),e.jsxs("a",{href:"",className:"text-primary text-sm",children:[e.jsx("i",{className:"fa-regular fa-comment me-1"})," Reply"]})]})]})]}),e.jsx(k,{})]})}),L=()=>e.jsx("section",{className:"pt-20",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"py-14",children:e.jsxs("div",{className:"flex flex-wrap items-center gap-2 bg-gray-100 py-2 px-3",children:[e.jsx(s,{to:"",className:"transition-all hover:text-primary",children:"Home"})," ","/",e.jsx(s,{to:"",className:"transition-all hover:text-primary",children:"Blog"})," ","/",e.jsx("p",{className:"text-gray-500",children:"Announcing-the-free-upgrade"})]})}),e.jsxs("div",{className:"lg:w-4/5",children:[e.jsx("span",{className:"bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2",children:e.jsx("a",{href:"#",children:"Announcement"})}),e.jsx("h1",{className:"lg:text-5xl/snug text-3xl/snug mt-3",children:"Announcing the free upgrae for the subscribed plans"})]}),e.jsx("div",{className:"mb-8",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mt-7",children:[e.jsx("img",{src:d,alt:"avatar",className:"h-11 w-11 rounded-full"}),e.jsxs("div",{children:[e.jsx("h6",{className:"text-sm transition-all hover:text-primary",children:e.jsx("a",{href:"#",children:"Emily Blunt"})}),e.jsx("p",{className:"text-sm text-gray-500",children:"11 Mar, 2020 · 3 min read"})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"SHARE:"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("span",{children:e.jsx(s,{to:"",children:e.jsxs("svg",{className:"w-5 h-5 text-blue-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[" ",e.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})," "]})})}),e.jsx("span",{children:e.jsx(s,{to:"",children:e.jsxs("svg",{className:"w-5 h-5 text-teal-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[" ",e.jsx("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})," "]})})}),e.jsx("span",{children:e.jsx(s,{to:"",children:e.jsxs("svg",{className:"w-5 h-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[" ",e.jsx("rect",{x:2,y:2,width:20,height:20,rx:5,ry:5})," ",e.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"})," ",e.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})," "]})})})]})]})]})})]})}),A=[v,f,N,b],C=()=>e.jsx("section",{children:e.jsxs("div",{className:"container",children:[e.jsx("p",{className:"text-sm/relaxed tracking-wider text-gray-600 mb-5",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex, distinctio eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed dicta maiores, eos culpa."}),e.jsx("p",{className:"text-sm/relaxed tracking-wider text-gray-600 mb-6",children:"Voluptatum animi, voluptate sint aperiam facere a nam, ex reiciendis eum nemo ipsum nobis, rem illum cupiditate at quaerat amet qui recusandae hic, atque laboriosam perspiciatis? Esse quidem minima, voluptas necessitatibus, officia culpa quo nulla, cupiditate iste vel unde magni."}),e.jsxs("div",{children:[e.jsx("img",{src:y,className:"rounded-md"}),e.jsx("p",{className:"text-xs text-gray-500 mt-2 text-center",children:"The image caption referencing the above image"})]}),e.jsx("h1",{className:"text-xl mb-3 mt-10",children:"Itaque earum rerum hic tenetur sapiente delectu"}),e.jsx("p",{className:"text-sm/relaxed tracking-wider text-gray-600 mb-6",children:"Sed ut perspiciatis unde omnis iste natus the error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus."}),e.jsxs("div",{className:"bg-gray-100 p-8 mb-6",children:[e.jsx("h5",{className:"text-base sm:text-lg font-normal text-gray-600 mb-3",children:"Perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beataevitae dicta sunt explicabo tempore cum soluta."}),e.jsxs("p",{className:"text-gray-500 font-light text-sm",children:[e.jsx("i",{className:"fa-solid fa-minus me-2"})," Christian Hall"]})]}),e.jsx("p",{className:"text-sm/relaxed tracking-wider text-gray-600 mb-5",children:"At vero eos et accusamus et iusto odio dignissimos ducimus that qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate provident similique sunt in culpa qui officia deserunt mollitia animi id est laborum et fuga."}),e.jsx("p",{className:"text-sm/relaxed tracking-wider text-gray-600 mb-5",children:"Itaque earum rerum hic tenetur sapiente delectu aut reiciendis voluptatibus maiores alias consequ perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatisquasi architecto beatae vitae dicta sunt explicabo."}),e.jsx("p",{className:"text-sm/relaxed tracking-wider text-gray-600 mb-5",children:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate lit esse quam nihil molestiae consequatur eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est vel illum qui dolorem eum fugiat quo voluptas aperiam, eaque ipsa quae ab illo inventore."}),e.jsx("div",{children:e.jsx("div",{className:"grid sm:grid-cols-2 grid-cols-1 gap-8 my-10",children:(A||[]).map((n,m)=>e.jsx("div",{children:e.jsx("img",{src:n,className:"rounded"})},m))})}),e.jsx("h6",{className:"text-sm/relaxed tracking-wider mb-3",children:"Conclusion"}),e.jsx("p",{className:"text-sm/relaxed tracking-wider text-gray-600 mb-5",children:"Itaque earum rerum hic tenetur sapiente delectus aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat qui dolorem ipsum quia dolor sit amet consectetur velitsedquia non numquam eius modi tempora incidunt."}),e.jsx("p",{className:"text-sm/relaxed tracking-wider text-gray-600 mb-5",children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("p",{className:"text-sm tracking-wider text-gray-600",children:[e.jsx("i",{className:"fa-solid fa-minus me-3"}),"Dream places"]}),e.jsxs("p",{className:"text-sm tracking-wider text-gray-600",children:[e.jsx("i",{className:"fa-solid fa-minus me-3"}),"Walking/Hiking tours"]}),e.jsxs("p",{className:"text-sm tracking-wider text-gray-600",children:[e.jsx("i",{className:"fa-solid fa-minus me-3"}),"Tennis lessons with expert coaches"]}),e.jsxs("p",{className:"text-sm tracking-wider text-gray-600",children:[e.jsx("i",{className:"fa-solid fa-minus me-3"}),"Sailing adventures"]})]}),e.jsxs("div",{className:"flex flex-wrap sm:gap-2 gap-5 mt-10",children:[e.jsx("div",{children:e.jsx(s,{to:"",className:"text-xs bg-gray-200 rounded-md font-medium transition-all hover:shadow-md hover:bg-gray-300/80 focus:bg-gray-300/80 py-2 px-4",children:"Startup"})}),e.jsx("div",{children:e.jsx(s,{to:"",className:"text-xs bg-gray-200 rounded-md font-medium transition-all hover:shadow-md hover:bg-gray-300/80 focus:bg-gray-300/80 py-2 px-4",children:"Website Design"})}),e.jsx("div",{children:e.jsx(s,{to:"",className:"text-xs bg-gray-200 rounded-md font-medium transition-all hover:shadow-md hover:bg-gray-300/80 focus:bg-gray-300/80 py-2 px-4",children:"Website Development"})}),e.jsx("div",{children:e.jsx(s,{to:"",className:"text-xs bg-gray-200 rounded-md font-medium transition-all hover:shadow-md hover:bg-gray-300/80 focus:bg-gray-300/80 py-2 px-4",children:"Tailwind"})})]}),e.jsxs("div",{className:"flex gap-2 mt-8 mb-14",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"SHARE:"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("span",{children:e.jsx(s,{to:"",children:e.jsxs("svg",{className:"w-5 h-5 text-blue-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[" ",e.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})," "]})})}),e.jsx("span",{children:e.jsx(s,{to:"",children:e.jsxs("svg",{className:"w-5 h-5 text-teal-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[" ",e.jsx("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})," "]})})}),e.jsx("span",{children:e.jsx(s,{to:"",children:e.jsxs("svg",{className:"w-5 h-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[" ",e.jsx("rect",{x:2,y:2,width:20,height:20,rx:5,ry:5})," ",e.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"})," ",e.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})," "]})})})]})]})]})}),P=()=>e.jsx("section",{children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"border-t mb-5"}),e.jsxs("div",{className:"grid md:grid-cols-4 grid-cols-1 items-center",children:[e.jsx("div",{children:e.jsx("div",{children:e.jsx("div",{className:"flex items-center justify-start",children:e.jsx(o,{className:"!bg-transparent",arrow:!1,content:e.jsxs("div",{className:"bg-white shadow-lg rounded-md transition-all z-50 p-4 pb-1 w-72",role:"tooltip",children:[e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsx("img",{src:w,className:"w-16 rounded"}),e.jsxs("div",{children:[e.jsx("h6",{className:"text-sm text-gray-700",children:"Introducing new blazzing fast user interface"}),e.jsx("p",{className:"text-sm text-gray-500",children:"by Emily Blunt"})]})]}),e.jsx("div",{className:"bg-white w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]","data-fc-arrow":!0})]}),children:e.jsxs("button",{className:"border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-500 hover:shadow-lg py-2 px-5","data-fc-placement":"top","data-fc-type":"tooltip",children:[" ",e.jsx("i",{className:"fa-solid fa-arrow-left me-2"}),"Prev Post"]})})})})}),e.jsx("div",{className:"col-span-2",children:e.jsx("div",{className:"my-5 md:my-0",children:e.jsxs("div",{className:"flex md:justify-center justify-start items-center gap-4",children:[e.jsx("img",{src:c,className:"h-12 w-12 rounded-full"}),e.jsxs("div",{children:[e.jsx("h6",{className:"text-sm transition-all hover:text-primary",children:e.jsx(s,{to:"",children:"Emily Blunt"})}),e.jsx("p",{className:"text-sm text-gray-500",children:"I write about the latest trend in web design and development."})]})]})})}),e.jsx("div",{className:"flex items-center md:justify-end justify-start",children:e.jsx(o,{className:"!bg-transparent",arrow:!1,content:e.jsxs("div",{className:"bg-white shadow-lg rounded-md transition-all z-50 p-4 w-72",role:"tooltip",children:[e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsx("img",{src:q,className:"w-16 rounded"}),e.jsxs("div",{children:[e.jsx("h6",{className:"text-sm text-gray-700",children:"What you should know before..."}),e.jsx("p",{className:"text-sm text-gray-500",children:"by Emily Blunt"})]})]}),e.jsx("div",{className:"bg-white w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]","data-fc-arrow":!0})]}),children:e.jsxs("button",{className:"border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-500 hover:shadow-lg py-2 px-5","data-fc-placement":"top","data-fc-type":"tooltip",children:["Next Post ",e.jsx("i",{className:"fa-solid fa-arrow-right ms-2"})]})})})]}),e.jsx("div",{className:"border-b mt-5"})]})}),G=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"text-gray-700",children:[e.jsx(L,{}),e.jsx(C,{}),e.jsx(P,{}),e.jsx(S,{}),e.jsx(u,{})]})});export{G as default};
