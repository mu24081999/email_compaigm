import{j as s,r}from"./index-df7e93fe.js";const N=({name:d,placeholder:i,refCallback:e,errors:h,register:x,className:t})=>{const[c,j]=r.useState(!1);return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"flex items-center",children:[s.jsx("input",{type:c?"text":"password",placeholder:i,name:d,id:d,ref:u=>{e&&e(u)},className:`${t} ${h&&h[d]?"border-red-500 text-red-700 -me-px":""}`,...x?x(d):{},autoComplete:d}),s.jsx("span",{className:"flex items-center bg-slate-500/5 px-3 h-[42px] w-[50px] py-1 border rounded-e -ms-px dark:border-white/10 dark:bg-white/5",onClick:()=>{j(!c)},children:s.jsx("i",{className:`${c?"fa-solid fa-eye":"fa-solid fa-eye-slash"}`})})]})})},v=({label:d,type:i,name:e,placeholder:h,register:x,errors:t,className:c,labelClassName:j,labelContainerClassName:u,containerClass:a,refCallback:l,children:m,rows:p,...o})=>{const f=i==="textarea"?"textarea":i==="select"?"select":"input";return s.jsx(s.Fragment,{children:i==="hidden"?s.jsx("input",{type:i,name:e,...x?x(e):{},...o}):s.jsx(s.Fragment,{children:i==="password"?s.jsx(s.Fragment,{children:s.jsxs("div",{className:a??"",children:[d&&s.jsxs("div",{className:u??"",children:[s.jsx("label",{className:j??"",htmlFor:e,children:d}),m]}),s.jsx(N,{name:e,placeholder:h,refCallback:l,errors:t,register:x,className:c}),t&&t[e]&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3",children:s.jsx("i",{className:"fa-solid fa-circle-exclamation text-xl text-red-500"})}),s.jsxs("p",{className:"text-xs text-red-600 mt-2",children:[" ",t[e].message]})]})]})}):s.jsx(s.Fragment,{children:i==="textarea"?s.jsx(s.Fragment,{children:s.jsxs("div",{className:`${a??""} relative`,children:[d?s.jsx("label",{className:j??"",htmlFor:e,children:d}):null,s.jsx(f,{placeholder:h,name:e,id:e,rows:p,ref:n=>{l&&l(n)},className:`${c} ${t&&t[e]?"border-red-500 focus:border-red-500 text-red-700  pe-10":""}`,...x?x(e):{},...o,autoComplete:e,children:t&&t[e]&&s.jsx("div",{className:"absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3",children:s.jsx("i",{className:"fa-solid fa-circle-exclamation text-red-500"})})}),t&&t[e]&&s.jsx("p",{className:"text-xs text-red-600 mt-2",children:t[e].message})]})}):s.jsx(s.Fragment,{children:i==="select"?s.jsx(s.Fragment,{children:s.jsxs("div",{className:`${a??""} relative`,children:[d&&s.jsx("label",{className:j??"",htmlFor:e,children:d}),s.jsx(f,{name:e,id:e,ref:n=>{l&&l(n)},className:c,...x?x(e):{},...o,autoComplete:e,children:m})]})}):s.jsx(s.Fragment,{children:i==="checkbox"||i==="radio"?s.jsx(s.Fragment,{children:s.jsx("div",{className:a??"",children:s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("input",{type:i,name:e,id:e,ref:n=>{l&&l(n)},className:`${c} ${t&&t[e]?"border-red-500 focus:border-red-500 text-red-700  pe-10":""}`,...x?x(e):{},...o}),s.jsx("label",{className:j??"",htmlFor:e,children:d})]})})}):s.jsx(s.Fragment,{children:s.jsxs("div",{className:a??"",children:[d&&s.jsx("label",{className:j??"",htmlFor:e,children:d}),s.jsxs("div",{className:"relative w-full",children:[s.jsx("input",{type:i,placeholder:h,name:e,id:e,ref:n=>{l&&l(n)},className:`${c} ${t&&t[e]?"border-red-500 focus:border-red-500 text-red-700  pe-10":""}`,...x?x(e):{},...o,autoComplete:e}),t&&t[e]&&s.jsx("div",{className:"absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3",children:s.jsx("i",{className:"fa-solid fa-circle-exclamation text-red-500"})})]}),t&&t[e]&&s.jsx("p",{className:"text-xs text-red-600 mt-2",children:t[e].message}),m||null]})})})})})})})};export{v as F};
