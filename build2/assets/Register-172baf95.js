import{j as e,L as t}from"./index-c4d3113b.js";import{A as s}from"./AuthLayout-55c9bcc6.js";import"./swiper-react-8190c01c.js";import"./index-7208bf7f.js";import{F as a}from"./FormInput-4ac317de.js";import{V as l}from"./VerticalForm-3e846b66.js";import{o,c as m,a as r}from"./yup-dcce31ea.js";import"./pagination-42e8eb40.js";import"./create-element-if-not-defined-85213de5.js";import"./autoplay-b7625e3b.js";import"./logo-dark-a7523ff3.js";const n=o(m().shape({fullname:r().required("Please enter Fullname"),email:r().required("Please enter Email").email("Please enter valid Email"),password:r().required("Please enter Password")})),i=()=>e.jsx("div",{className:"w-full text-center",children:e.jsxs("p",{className:"text-gray-500 leading-6 text-base",children:["Already have an account?"," ",e.jsx(t,{to:"/pages/account/login",className:"text-primary font-semibold ms-1",children:"Log In"})]})}),j=()=>e.jsx(s,{authTitle:"Create Your Account",helpText:"Don't have an account? Create your account, it takes less than a minute.",bottomLinks:e.jsx(i,{}),children:e.jsxs(l,{onSubmit:()=>{},resolver:n,children:[e.jsx(a,{name:"fullname",type:"text",label:"Your Name",labelClassName:"block text-sm font-medium mb-1 text-gray-600",className:"py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0",containerClass:"mb-4",placeholder:"Your Name",required:!0}),e.jsx(a,{name:"email",type:"email",label:"Email",labelClassName:"block text-sm font-medium mb-1 text-gray-600",className:"py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0",containerClass:"mb-4",placeholder:"Your Email",required:!0}),e.jsx(a,{label:"Password",type:"password",name:"password",placeholder:"Enter your password",className:"py-2 px-4 leading-6 block w-full border-gray-300 rounded rounded-e-none text-sm focus:border-gray-300 focus:ring-0",containerClass:"mb-4",labelClassName:"block text-sm font-medium mb-1 text-gray-600",labelContainerClassName:"flex justify-between items-center mb-0",required:!0}),e.jsx("div",{className:"mb-0 text-center",children:e.jsx("button",{className:"w-full bg-primary text-white font-medium leading-6 text-center align-middle select-none py-2 px-4 text-base rounded-md transition-all hover:shadow-lg hover:shadow-primary/30",type:"submit",children:"Register"})})]})});export{j as default};
