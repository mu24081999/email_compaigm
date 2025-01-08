import{r as o,j as e}from"./index-9688397a.js";const u=()=>{var n,x,m,d;o.useState(!1);const[a,g]=o.useState({starter:{name:"Starter",yearly_price:9,description:"Essential tools to kickstart your journey with basic features for small teams.",monthly_price:14,yearly_discount_percentage:30,original_amount:14,discount_price:0,discount_amount:0,benefits:["Common-Box","1500 Contact Uploads","10,000 Emails Monthly","Unlimited Emails Annually","Unlimited Email Warm-ups","5 Email Templates","5 Email Sequences","50 Email Validation Credits","1 Free Virtual Mobile Number","Free 100 Minutes Calling","Make & Recieve Calls","Free Call Logs & Recording","SMS Marketing","24/7 Email Support"]},professional:{name:"Professional",yearly_price:30,monthly_price:45,yearly_discount_percentage:0,description:"Advanced features tailored for growing businesses to optimize workflows and boost productivity.",original_amount:45,discount_price:0,discount_amount:0,benefits:["Common-Box","10,000 Contacts Uploads","50,000 Emails Monthly","Unlimited Emails Annually","Unlimited Email Warm-ups","20 Email Templates","20 Email Sequences","250 Email Validation Credits","2 Free Virtual Mobile Number","Free 200 Minutes Calling","Make & Recieve Calls","Free Call Logs & Recording","SMS Marketing","24/7 Email Support"]},agency:{name:"Agency",yearly_price:55,monthly_price:75,description:"Comprehensive solutions designed for agencies managing multiple clients and teams seamlessly",yearly_discount_percentage:0,original_amount:75,discount_price:0,discount_amount:0,benefits:["Common-Box","100,000 Contacts Uploads","20,000 Emails Monthly","Unlimited Emails Annually","Unlimited Email Warm-ups","Unlimited Email Templates","Unlimited Email Sequences","500 Email Validation Credits","3 Free Virtual Mobile Number","Free 400 Minutes Calling","Make & Recieve Calls","Free Call Logs & Recording","SMS Marketing","24/7 Email Support"]}});console.log("🚀 ~ PricingCards ~ pricing:",a);function f(l,r){return(l*((100-r)/100)).toFixed(2)}const p=l=>{const r=l.target.checked;g(s=>{const i=t=>{if(r){const c=f(t.original_amount,25),h=parseFloat((c*12).toFixed(2)),j=parseFloat(((t.original_amount-c)*12).toFixed(2));return{...t,monthly_price:c,yearly_price:h,discount_amount:j}}return{...t,monthly_price:t.original_amount,yearly_price:0,discount_amount:0}};return{...s,starter:i(s.starter),professional:i(s.professional),agency:i(s.agency)}})};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"lg:px-20 relative",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"text-xs bg-primary/10 text-primary/90 rounded-full px-2 py-1",children:"Plans"}),e.jsx("h1",{className:"text-3xl/tight font-medium mb-4",children:"Pricing"}),e.jsxs("p",{className:"text-gray-500",children:["Pricing that ",e.jsx("span",{className:"text-primary",children:"works "})," for everyone"]})]}),e.jsx("div",{className:"flex justify-center my-5",children:e.jsxs("label",{className:"inline-flex gap-3 items-center cursor-pointer",children:[e.jsx("span",{className:"ms-3 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Monthly"}),e.jsx("input",{type:"checkbox",value:"",className:"sr-only peer",onChange:p}),e.jsx("div",{className:"relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"}),e.jsx("span",{className:" text-sm font-medium text-gray-900 dark:text-gray-300",children:"Yearly"})]})}),e.jsxs("div",{className:"grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 mt-10",children:[e.jsx("div",{"data-aos":"fade-up","data-aos-duration":"500",children:e.jsx("div",{className:"transition-all duration-300 pointer-events-auto hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] hover:-translate-y-1",children:e.jsxs("div",{className:"border border-gray-300 bg-white rounded w-full h-full text-center p-5",children:[e.jsx("span",{className:"text-lg text-primary",children:"Starter"}),e.jsxs("h1",{className:"text-3xl/tight font-semibold mt-3",children:[e.jsx("sup",{className:"text-gray-500 text-sm font-normal",children:"$"})," ",(n=a==null?void 0:a.starter)==null?void 0:n.monthly_price,e.jsx("sub",{className:"text-gray-500 text-sm font-normal",children:"/month"})]}),e.jsx("div",{className:"border-b border-gray-200 w-full my-7"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-times text-red-500 text-lg"}),"Free Credit"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Common-Box"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"100 Contact Uploads"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"1000 Emails"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"5 Email Accounts"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"1 Email Sequences"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"11 Email Templates"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-times text-red-500 text-lg"}),"Email Validation Credits"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Advance Email Analytics"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-times text-red-500 text-lg"}),"Virtual Mobile Number"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-times text-red-500 text-lg"}),"Calling Minutes"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-times text-red-500 text-lg"}),"Make & Recieve Calls"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-times text-red-500 text-lg"}),"Call Logs & Recording"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-times text-red-500 text-lg"}),"SMS Marketing"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Standard Email Support"]})]}),e.jsx("div",{className:"flex mt-[20px]",children:e.jsx("a",{href:"https://app.senderside.com/sign-up",className:"bg-primary/10 text-primary/90 w-full py-3 rounded-lg border border-transparent hover:border hover:border-primary/20 transition-all duration-300",children:"Purchase Now"})})]})]})})}),e.jsx("div",{"data-aos":"fade-up","data-aos-duration":"500",children:e.jsx("div",{className:"transition-all duration-300 pointer-events-auto hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] hover:-translate-y-1",children:e.jsxs("div",{className:"border border-gray-300 bg-white rounded w-full h-full text-center p-5",children:[e.jsx("span",{className:"text-lg text-primary",children:"Starter"}),e.jsxs("h1",{className:"text-3xl/tight font-semibold mt-3",children:[e.jsx("sup",{className:"text-gray-500 text-sm font-normal",children:"$"})," ",(x=a==null?void 0:a.starter)==null?void 0:x.monthly_price,e.jsx("sub",{className:"text-gray-500 text-sm font-normal",children:"/month"})]}),e.jsx("div",{className:"border-b border-gray-200 w-full my-7"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"$7 Free Credit"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Common-Box"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"1,500 Contact Uploads"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"10,000 Emails Per Month"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Unlimited Email Accounts"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"5 Email Sequences"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"5 Email Templates"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Email Validation Credits"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Advance Email Analytics"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Virtual Mobile Number"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Calling Minutes"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Make & Recieve Calls"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Call Logs & Recording"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"SMS Marketing"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"24/7 Email Support"]})]}),e.jsx("div",{className:"flex mt-[20px]",children:e.jsx("a",{href:"https://app.senderside.com/sign-up",className:"bg-primary/10 text-primary/90 w-full py-3 rounded-lg border border-transparent hover:border hover:border-primary/20 transition-all duration-300",children:"Purchase Now"})})]})]})})}),e.jsx("div",{"data-aos":"fade-up","data-aos-duration":"700",children:e.jsx("div",{className:"border border-black  shadow-2xl transition-all duration-300 pointer-events-auto hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] hover:-translate-y-1 ",children:e.jsxs("div",{className:"border border-gray-300 bg-white rounded w-full h-full text-center p-5",children:[e.jsx("span",{className:"text-lg text-primary",children:"Professional"}),e.jsxs("h1",{className:"text-3xl/tight font-semibold mt-3",children:[e.jsx("sup",{className:"text-gray-500 text-sm font-normal",children:"$"})," ",(m=a==null?void 0:a.professional)==null?void 0:m.monthly_price," ",e.jsx("sub",{className:"text-gray-500 text-sm font-normal",children:"/month"})]}),e.jsx("div",{className:"border-b border-gray-200 w-full my-7"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"$17 Free Credit"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Common-Box"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"10,000 Contact Uploads"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"50,000 Emails Per Month"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Unlimited Email Accounts"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"20 Email Sequences"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"20 Email Templates"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Email Validation Credits"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Advance Email Analytics"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Virtual Mobile Number"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Calling Minutes"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Make & Recieve Calls"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Call Logs & Recording"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"SMS Marketing"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"24/7 Email Support"]})]}),e.jsx("div",{className:"flex mt-[20px]",children:e.jsx("a",{href:"https://app.senderside.com/sign-up",className:"bg-primary/10 text-primary/90 w-full py-3 rounded-lg border border-transparent hover:border hover:border-primary/20 transition-all duration-300",children:"Purchase Now"})})]})]})})}),e.jsx("div",{"data-aos":"fade-up","data-aos-duration":"900",children:e.jsx("div",{className:"transition-all duration-300 pointer-events-auto hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] hover:-translate-y-1",children:e.jsxs("div",{className:"border border-gray-300 bg-white rounded w-full h-full text-center p-5",children:[e.jsx("span",{className:"text-lg text-primary",children:"Agency"}),e.jsxs("h1",{className:"text-3xl/tight font-semibold mt-3",children:[e.jsx("sup",{className:"text-gray-500 text-sm font-normal",children:"$"})," ",(d=a==null?void 0:a.agency)==null?void 0:d.monthly_price," ",e.jsx("sub",{className:"text-gray-500 text-sm font-normal",children:"/month"})]}),e.jsx("div",{className:"border-b border-gray-200 w-full my-7"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"$33 Free Credit"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Common-Box"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"20,000 Contact Uploads"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"100,000 Emails Per Month"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Unlimited Email Accounts"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Unlimited Email Sequences"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Unlimited Email Templates"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Email Validation Credits"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Advance Email Analytics"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Virtual Mobile Number"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Calling Minutes"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Make & Recieve Calls"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"Call Logs & Recording"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"SMS Marketing"]}),e.jsxs("p",{className:"flex items-center text-gray-600 gap-4",children:[e.jsx("i",{className:"fa-solid fa-check text-green-500 text-lg"}),"24/7 Email Support"]})]}),e.jsx("div",{className:"flex mt-[20px]",children:e.jsx("a",{href:"https://app.senderside.com/sign-up",className:"bg-primary/10 text-primary/90 w-full py-3 rounded-lg border border-transparent hover:border hover:border-primary/20 transition-all duration-300",children:"Purchase Now"})})]})]})})})]})]})})};export{u as P};
