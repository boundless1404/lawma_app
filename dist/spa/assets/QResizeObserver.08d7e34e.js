import{r as g,cg as z,o as c,bV as y,aI as f,bM as w,aF as v,h as R,g as O,cd as b}from"./index.5b1aa9bb.js";function x(){const r=g(!z.value);return r.value===!1&&c(()=>{r.value=!0}),r}const m=typeof ResizeObserver<"u",h=m===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var L=y({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(r,{emit:p}){let i=null,t,o={width:-1,height:-1};function s(e){e===!0||r.debounce===0||r.debounce==="0"?u():i===null&&(i=setTimeout(u,r.debounce))}function u(){if(i!==null&&(clearTimeout(i),i=null),t){const{offsetWidth:e,offsetHeight:n}=t;(e!==o.width||n!==o.height)&&(o={width:e,height:n},p("resize",o))}}const{proxy:l}=O();if(l.trigger=s,m===!0){let e;const n=a=>{t=l.$el.parentNode,t?(e=new ResizeObserver(s),e.observe(t),u()):a!==!0&&v(()=>{n(!0)})};return c(()=>{n()}),f(()=>{i!==null&&clearTimeout(i),e!==void 0&&(e.disconnect!==void 0?e.disconnect():t&&e.unobserve(t))}),w}else{let a=function(){i!==null&&(clearTimeout(i),i=null),n!==void 0&&(n.removeEventListener!==void 0&&n.removeEventListener("resize",s,b.passive),n=void 0)},d=function(){a(),t&&t.contentDocument&&(n=t.contentDocument.defaultView,n.addEventListener("resize",s,b.passive),u())};const e=x();let n;return c(()=>{v(()=>{t=l.$el,t&&d()})}),f(a),()=>{if(e.value===!0)return R("object",{style:h.style,tabindex:-1,type:"text/html",data:h.url,"aria-hidden":"true",onLoad:d})}}}});export{L as Q};
