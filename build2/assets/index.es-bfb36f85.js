import{r,j as w}from"./index-9688397a.js";function le(e){if(!e||typeof window>"u")return;const t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}var o=function(){return o=Object.assign||function(t){for(var n,s=1,c=arguments.length;s<c;s++){n=arguments[s];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},o.apply(this,arguments)};le(`@keyframes blink {
  50% {
    opacity: 1;
  }
}`);var de=function(e){var t=e.sentences,n=e.startDelay,s=n===void 0?0:n,c=e.cursorDelay,u=c===void 0?s:c,S=e.className,x=S===void 0?"":S,R=e.cursorClassName,ne=R===void 0?"":R,b=e.cursorColor,_=b===void 0?"":b,C=e.cursorBlinkSpeed,D=C===void 0?700:C,N=e.showCursor,j=N===void 0?!0:N,k=e.hideCursorOnFinish,se=k===void 0?!1:k,E=e.cursorSmooth,F=E===void 0?!1:E,O=e.typingSpeed,m=O===void 0?80:O,I=e.deletingSpeed,L=I===void 0?30:I,B=e.pauseTime,v=B===void 0?1e3:B,M=e.loop,W=M===void 0?!0:M,q=e.style,ue=q===void 0?{}:q,A=e.defaultText,ie=A===void 0?"":A,G=e.onTypeFinish,H=G===void 0?function(){}:G,P=r.useState(ie),p=P[0],oe=P[1],$=r.useState(!1),z=$[0],J=$[1],K=r.useState(0),Q=K[0],ce=K[1],U=r.useState(m),V=U[0],X=U[1],y=r.useRef(!1),i=r.useRef(p),a=r.useRef(z),h=r.useRef(Q),g=r.useRef(V),T=r.useRef(0),Y=r.useRef(0),Z=r.useRef(0),ee=r.useRef(0),l=r.useRef(!1),re=r.useRef(!1);i.current=p,a.current=z,h.current=Q,g.current=V,r.useEffect(function(){return y.current=!0,function(){y.current=!1,clearTimeout(T.current),clearTimeout(Y.current),clearTimeout(Z.current),clearTimeout(ee.current)}},[]);var f=r.useCallback(function(){var te=h.current%t.length,d=t[te];oe(a.current?d.substring(0,i.current.length-1):d.substring(0,i.current.length+1)),!a.current&&i.current===d&&!l.current?(l.current=!0,Y.current=window.setTimeout(function(){J(!0),X(L),l.current=!1},v)):a.current&&i.current===""&&(J(!1),X(m),ce(h.current+1)),W||te!==t.length-1||i.current.length!==d.length?l.current?Z.current=window.setTimeout(function(){T.current=window.setTimeout(f,g.current)},v):T.current=window.setTimeout(f,g.current):(re.current=!0,H())},[L,W,v,m,t,H]);r.useEffect(function(){ee.current=window.setTimeout(function(){y.current&&f()},s)},[f,s]);var ae=r.useMemo(function(){return{opacity:0,visibility:j?"visible":"hidden",color:_,animation:"blink ".concat(D,"ms ").concat(F?"":"steps(1)"," infinite"),animationDelay:"".concat(u,"ms")}},[D,_,u,F,j]);return w.jsxs("span",o({style:ue},{children:[w.jsx("span",o({className:x},{children:p})),!(re.current&&se)&&w.jsx("span",o({className:"typist-cursor ".concat("".concat(ne," ").concat(x)),style:ae},{children:"|"}))]}))};export{de as T};
