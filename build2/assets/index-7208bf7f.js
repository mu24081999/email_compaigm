import{r as c,j as u}from"./index-c4d3113b.js";function i(s,t){const e=c.useRef(t);e.current=t,c.useEffect(()=>{const n=o=>{!s.current.contains(o.target)&&e.current&&e.current(o)};return document.addEventListener("mousedown",n,!0),()=>{document.removeEventListener("mousedown",n,!0)}},[e,s])}const d=c.createContext(!1),C=({children:s,as:t="button",classNames:e})=>{const{isOpen:n,handleDropdown:o,handleKeyPress:l}=c.useContext(d),a=t,r=c.useRef();return i(r,()=>{o(!1)}),u.jsx(a,{ref:r,className:`${e||""} ${n?"open":""}`,onClick:o,onKeyDown:l,children:s})},f=({children:s,as:t="div",classNames:e,placement:n})=>{const{isOpen:o,handleDropdown:l}=c.useContext(d),a=t,r=n==="start"?"start-0":n==="end"?"end-0":null;return u.jsx(a,{className:`${e?e+" ":""} ${r?r+" ":""} ${o?"open ":"hidden "}`,onClick:l,children:s})},x=({children:s})=>{const[t,e]=c.useState(!1),n=l=>{e(l===!1?l:!t)},o=l=>{l.key==="Escape"&&n(!1)};return u.jsx(d.Provider,{value:{isOpen:t,handleDropdown:n,handleKeyPress:o},children:s})};Object.assign(x,{Toggle:C,Menu:f});const p=c.createContext(!1),g=({children:s,as:t="button",className:e,openClass:n})=>{const{open:o,handleCollapse:l}=c.useContext(p),a=t;return u.jsx(a,{className:`${e}${o?" open fc-col-open ":" fc-col-close "}${o&&n?n:""}`,onClick:l,children:s})},h=({children:s,as:t="div",className:e})=>{var r;const{open:n}=c.useContext(p),o=c.useRef(null),l=n?((r=o.current)==null?void 0:r.scrollHeight)??"auto":0,a=t;return u.jsx(a,{ref:o,className:`transition-all overflow-hidden ${e??""}`,style:{height:l},children:s})},w=({children:s,open:t,toggleCollapse:e})=>{const[n,o]=c.useState(!1),l=()=>{o(!n)};return u.jsx(p.Provider,{value:{open:t??n,handleCollapse:e??l},children:s})},j=Object.assign(w,{Toggle:g,Menu:h});export{j as F};
