import{c as k}from"./create-element-if-not-defined-85213de5.js";function y(h){let{swiper:a,extendParams:x,on:r,emit:c}=h;x({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,prevEl:null};const l=i=>(Array.isArray(i)?i:[i]).filter(n=>!!n);function m(i){let n;return i&&typeof i=="string"&&a.isElement&&(n=a.el.querySelector(i),n)?n:(i&&(typeof i=="string"&&(n=[...document.querySelectorAll(i)]),a.params.uniqueNavElements&&typeof i=="string"&&n.length>1&&a.el.querySelectorAll(i).length===1&&(n=a.el.querySelector(i))),i&&!n?i:n)}function p(i,n){const t=a.params.navigation;i=l(i),i.forEach(e=>{e&&(e.classList[n?"add":"remove"](...t.disabledClass.split(" ")),e.tagName==="BUTTON"&&(e.disabled=n),a.params.watchOverflow&&a.enabled&&e.classList[a.isLocked?"add":"remove"](t.lockClass))})}function d(){const{nextEl:i,prevEl:n}=a.navigation;if(a.params.loop){p(n,!1),p(i,!1);return}p(n,a.isBeginning&&!a.params.rewind),p(i,a.isEnd&&!a.params.rewind)}function u(i){i.preventDefault(),!(a.isBeginning&&!a.params.loop&&!a.params.rewind)&&(a.slidePrev(),c("navigationPrev"))}function E(i){i.preventDefault(),!(a.isEnd&&!a.params.loop&&!a.params.rewind)&&(a.slideNext(),c("navigationNext"))}function g(){const i=a.params.navigation;if(a.params.navigation=k(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(i.nextEl||i.prevEl))return;let n=m(i.nextEl),t=m(i.prevEl);Object.assign(a.navigation,{nextEl:n,prevEl:t}),n=l(n),t=l(t);const e=(s,o)=>{s&&s.addEventListener("click",o==="next"?E:u),!a.enabled&&s&&s.classList.add(...i.lockClass.split(" "))};n.forEach(s=>e(s,"next")),t.forEach(s=>e(s,"prev"))}function v(){let{nextEl:i,prevEl:n}=a.navigation;i=l(i),n=l(n);const t=(e,s)=>{e.removeEventListener("click",s==="next"?E:u),e.classList.remove(...a.params.navigation.disabledClass.split(" "))};i.forEach(e=>t(e,"next")),n.forEach(e=>t(e,"prev"))}r("init",()=>{a.params.navigation.enabled===!1?b():(g(),d())}),r("toEdge fromEdge lock unlock",()=>{d()}),r("destroy",()=>{v()}),r("enable disable",()=>{let{nextEl:i,prevEl:n}=a.navigation;i=l(i),n=l(n),[...i,...n].filter(t=>!!t).forEach(t=>t.classList[a.enabled?"remove":"add"](a.params.navigation.lockClass))}),r("click",(i,n)=>{let{nextEl:t,prevEl:e}=a.navigation;t=l(t),e=l(e);const s=n.target;if(a.params.navigation.hideOnClick&&!e.includes(s)&&!t.includes(s)){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===s||a.pagination.el.contains(s)))return;let o;t.length?o=t[0].classList.contains(a.params.navigation.hiddenClass):e.length&&(o=e[0].classList.contains(a.params.navigation.hiddenClass)),c(o===!0?"navigationShow":"navigationHide"),[...t,...e].filter(f=>!!f).forEach(f=>f.classList.toggle(a.params.navigation.hiddenClass))}});const C=()=>{a.el.classList.remove(...a.params.navigation.navigationDisabledClass.split(" ")),g(),d()},b=()=>{a.el.classList.add(...a.params.navigation.navigationDisabledClass.split(" ")),v()};Object.assign(a.navigation,{enable:C,disable:b,update:d,init:g,destroy:v})}export{y as N};
