import{r as _,c as l,h as n,cC as j,bP as z,bL as F,cB as Q,g as R,bX as V,J as d,bK as D,co as K}from"./index.14ba04fe.js";import{a as L,u as M}from"./use-dark.942f5e32.js";import{m as N,q as H}from"./index.1589e600.js";function J(a,f){const e=_(null),c=l(()=>a.disable===!0?null:n("span",{ref:e,class:"no-outline",tabindex:-1}));function i(r){const u=f.value;r!==void 0&&r.type.indexOf("key")===0?u!==null&&document.activeElement!==u&&u.contains(document.activeElement)===!0&&u.focus():e.value!==null&&(r===void 0||u!==null&&u.contains(r.target)===!0)&&e.value.focus()}return{refocusTargetEl:c,refocusTarget:i}}var X={xs:30,sm:35,md:40,lg:50,xl:60};const G={...M,...Q,...N,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:a=>a==="tf"||a==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},U=["update:modelValue"];function W(a,f){const{props:e,slots:c,emit:i,proxy:r}=R(),{$q:u}=r,q=L(e,u),k=_(null),{refocusTargetEl:h,refocusTarget:I}=J(e,k),C=j(e,X),v=l(()=>e.val!==void 0&&Array.isArray(e.modelValue)),m=l(()=>{const t=d(e.val);return v.value===!0?e.modelValue.findIndex(s=>d(s)===t):-1}),o=l(()=>v.value===!0?m.value>-1:d(e.modelValue)===d(e.trueValue)),b=l(()=>v.value===!0?m.value===-1:d(e.modelValue)===d(e.falseValue)),x=l(()=>o.value===!1&&b.value===!1),y=l(()=>e.disable===!0?-1:e.tabindex||0),S=l(()=>`q-${a} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(q.value===!0?` q-${a}--dark`:"")+(e.dense===!0?` q-${a}--dense`:"")+(e.leftLabel===!0?" reverse":"")),$=l(()=>{const t=o.value===!0?"truthy":b.value===!0?"falsy":"indet",s=e.color!==void 0&&(e.keepColor===!0||(a==="toggle"?o.value===!0:b.value!==!0))?` text-${e.color}`:"";return`q-${a}__inner relative-position non-selectable q-${a}__inner--${t}${s}`}),w=l(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{".checked":o.value,"^checked":o.value===!0?"checked":void 0,name:e.name,value:v.value===!0?e.val:e.trueValue}),t}),B=H(w),O=l(()=>{const t={tabindex:y.value,role:a==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":x.value===!0?"mixed":o.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function g(t){t!==void 0&&(V(t),I(t)),e.disable!==!0&&i("update:modelValue",P(),t)}function P(){if(v.value===!0){if(o.value===!0){const t=e.modelValue.slice();return t.splice(m.value,1),t}return e.modelValue.concat([e.val])}if(o.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(b.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function T(t){(t.keyCode===13||t.keyCode===32)&&V(t)}function A(t){(t.keyCode===13||t.keyCode===32)&&g(t)}const E=f(o,x);return Object.assign(r,{toggle:g}),()=>{const t=E();e.disable!==!0&&B(t,"unshift",` q-${a}__native absolute q-ma-none q-pa-none`);const s=[n("div",{class:$.value,style:C.value,"aria-hidden":"true"},t)];h.value!==null&&s.push(h.value);const p=e.label!==void 0?z(c.default,[e.label]):F(c.default);return p!==void 0&&s.push(n("div",{class:`q-${a}__label q-anchor--skip`},p)),n("div",{ref:k,class:S.value,...O.value,onClick:g,onKeydown:T,onKeyup:A},s)}}const Y=n("div",{key:"svg",class:"q-checkbox__bg absolute"},[n("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[n("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),n("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var ae=D({name:"QCheckbox",props:G,emits:U,setup(a){function f(e,c){const i=l(()=>(e.value===!0?a.checkedIcon:c.value===!0?a.indeterminateIcon:a.uncheckedIcon)||null);return()=>i.value!==null?[n("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[n(K,{class:"q-checkbox__icon",name:i.value})])]:[Y]}return W("checkbox",f)}});export{ae as Q,U as a,W as b,G as u};
