import{j as r}from"./index.14fc9cfe.js";class _{constructor(){this.__stack={}}on(t,s,i){return(this.__stack[t]||(this.__stack[t]=[])).push({fn:s,ctx:i}),this}once(t,s,i){const e=(...o)=>{this.off(t,e),s.apply(i,o)};return e.__callback=s,this.on(t,e,i)}emit(t){const s=this.__stack[t];if(s!==void 0){const i=[].slice.call(arguments,1);s.forEach(e=>{e.fn.apply(e.ctx,i)})}return this}off(t,s){const i=this.__stack[t];if(i===void 0)return this;if(s===void 0)return delete this.__stack[t],this;const e=i.filter(o=>o.fn!==s&&o.fn.__callback!==s);return e.length!==0?this.__stack[t]=e:delete this.__stack[t],this}}var h=r(({app:n})=>{const t=new _;n.provide("eventBus",t)});export{h as default};
