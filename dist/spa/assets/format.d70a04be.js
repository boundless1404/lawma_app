import{u as $,a as w}from"./QCard.567eb8ba.js";import{bV as h,c,h as g,g as k,bY as T,c3 as M,c4 as R,r as L,c5 as E,bU as A,c2 as H,aI as Q,c6 as V,w as C,c7 as z,o as D,aF as I,c8 as P,aK as U,c9 as j,ca as K}from"./index.e813c677.js";const F={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},x={xs:2,sm:4,md:8,lg:16,xl:24};var W=h({name:"QSeparator",props:{...$,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=k(),a=w(e,t.proxy.$q),l=c(()=>e.vertical===!0?"vertical":"horizontal"),o=c(()=>` q-separator--${l.value}`),v=c(()=>e.inset!==!1?`${o.value}-${F[e.inset]}`:""),f=c(()=>`q-separator${o.value}${v.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(a.value===!0?" q-separator--dark":"")),s=c(()=>{const r={};if(e.size!==void 0&&(r[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const m=e.spaced===!0?`${x.md}px`:e.spaced in x?`${x[e.spaced]}px`:e.spaced,u=e.vertical===!0?["Left","Right"]:["Top","Bottom"];r[`margin${u[0]}`]=r[`margin${u[1]}`]=m}return r});return()=>g("hr",{class:f.value,style:s.value,"aria-orientation":l.value})}}),Y=h({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const a=c(()=>parseInt(e.lines,10)),l=c(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),o=c(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>g("div",{style:o.value,class:l.value},T(t.default))}}),G=h({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const a=c(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>g("div",{class:a.value},T(t.default))}}),J=h({name:"QItem",props:{...$,...M,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:a}){const{proxy:{$q:l}}=k(),o=w(e,l),{hasLink:v,linkAttrs:f,linkClass:s,linkTag:r,navigateOnClick:m}=R(),u=L(null),b=L(null),q=c(()=>e.clickable===!0||v.value===!0||e.tag==="label"),d=c(()=>e.disable!==!0&&q.value===!0),y=c(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(v.value===!0&&e.active===null?s.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(d.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),B=c(()=>{if(e.insetLevel===void 0)return null;const i=l.lang.rtl===!0?"Right":"Left";return{["padding"+i]:16+e.insetLevel*56+"px"}});function S(i){d.value===!0&&(b.value!==null&&(i.qKeyEvent!==!0&&document.activeElement===u.value?b.value.focus():document.activeElement===b.value&&u.value.focus()),m(i))}function _(i){if(d.value===!0&&E(i,[13,32])===!0){A(i),i.qKeyEvent=!0;const p=new MouseEvent("click",i);p.qKeyEvent=!0,u.value.dispatchEvent(p)}a("keyup",i)}function n(){const i=H(t.default,[]);return d.value===!0&&i.unshift(g("div",{class:"q-focus-helper",tabindex:-1,ref:b})),i}return()=>{const i={ref:u,class:y.value,style:B.value,role:"listitem",onClick:S,onKeyup:_};return d.value===!0?(i.tabindex=e.tabindex||"0",Object.assign(i,f.value)):q.value===!0&&(i["aria-disabled"]="true"),g(r.value,i,n())}}}),X=h({name:"QList",props:{...$,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const a=k(),l=w(e,a.proxy.$q),o=c(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>g(e.tag,{class:o.value},T(t.default))}});function Z(e,t,a){let l;function o(){l!==void 0&&(V.remove(l),l=void 0)}return Q(()=>{e.value===!0&&o()}),{removeFromHistory:o,addToHistory(){l={condition:()=>a.value===!0,handler:t},V.add(l)}}}const ee={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},te=["beforeShow","show","beforeHide","hide"];function ae({showing:e,canShow:t,hideOnRouteChange:a,handleShow:l,handleHide:o,processOnMount:v}){const f=k(),{props:s,emit:r,proxy:m}=f;let u;function b(n){e.value===!0?y(n):q(n)}function q(n){if(s.disable===!0||n!==void 0&&n.qAnchorHandled===!0||t!==void 0&&t(n)!==!0)return;const i=s["onUpdate:modelValue"]!==void 0;i===!0&&(r("update:modelValue",!0),u=n,I(()=>{u===n&&(u=void 0)})),(s.modelValue===null||i===!1)&&d(n)}function d(n){e.value!==!0&&(e.value=!0,r("beforeShow",n),l!==void 0?l(n):r("show",n))}function y(n){if(s.disable===!0)return;const i=s["onUpdate:modelValue"]!==void 0;i===!0&&(r("update:modelValue",!1),u=n,I(()=>{u===n&&(u=void 0)})),(s.modelValue===null||i===!1)&&B(n)}function B(n){e.value!==!1&&(e.value=!1,r("beforeHide",n),o!==void 0?o(n):r("hide",n))}function S(n){s.disable===!0&&n===!0?s["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!1):n===!0!==e.value&&(n===!0?d:B)(u)}C(()=>s.modelValue,S),a!==void 0&&z(f)===!0&&C(()=>m.$route.fullPath,()=>{a.value===!0&&e.value===!0&&y()}),v===!0&&D(()=>{S(s.modelValue)});const _={show:q,hide:y,toggle:b};return Object.assign(m,_),_}function le(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,P(t))}}}function ne(){let e=null;const t=k();function a(){e!==null&&(clearTimeout(e),e=null)}return U(a),Q(a),{removeTimeout:a,registerTimeout(l,o){a(),j(t)===!1&&(e=setTimeout(l,o))}}}function ie(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),K.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function oe(e,t,a){return a<=t?t:Math.min(a,Math.max(t,e))}function ue(e,t,a){if(a<=t)return t;const l=a-t+1;let o=t+(e-t)%l;return o<t&&(o=l+o),o===0?0:o}function se(e,t=2,a="0"){if(e==null)return e;const l=""+e;return l.length>=t?l:new Array(t-l.length+1).join(a)+l}export{W as Q,te as a,ne as b,ie as c,ae as d,Z as e,le as f,oe as g,X as h,J as i,G as j,Y as k,ue as n,se as p,ee as u};