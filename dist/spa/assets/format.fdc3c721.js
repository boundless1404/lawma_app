import{bV as _,c as d,h as p,bY as I,c3 as L,c4 as E,r as w,c5 as M,bU as R,c2 as A,g as B,aI as C,c6 as x,w as T,c7 as H,o as P,aF as V,c8 as Q,aK as U,c9 as K,ca as j}from"./index.1ba8881a.js";import{u as D,a as F}from"./QCard.e7e1ea28.js";var z=_({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const l=d(()=>parseInt(e.lines,10)),u=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),o=d(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>p("div",{style:o.value,class:u.value},I(t.default))}}),O=_({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const l=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>p("div",{class:l.value},I(t.default))}}),W=_({name:"QItem",props:{...D,...L,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:l}){const{proxy:{$q:u}}=B(),o=F(e,u),{hasLink:b,linkAttrs:y,linkClass:i,linkTag:s,navigateOnClick:q}=E(),r=w(null),f=w(null),v=d(()=>e.clickable===!0||b.value===!0||e.tag==="label"),c=d(()=>e.disable!==!0&&v.value===!0),m=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(b.value===!0&&e.active===null?i.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(c.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),g=d(()=>{if(e.insetLevel===void 0)return null;const n=u.lang.rtl===!0?"Right":"Left";return{["padding"+n]:16+e.insetLevel*56+"px"}});function h(n){c.value===!0&&(f.value!==null&&(n.qKeyEvent!==!0&&document.activeElement===r.value?f.value.focus():document.activeElement===f.value&&r.value.focus()),q(n))}function k(n){if(c.value===!0&&M(n,[13,32])===!0){R(n),n.qKeyEvent=!0;const S=new MouseEvent("click",n);S.qKeyEvent=!0,r.value.dispatchEvent(S)}l("keyup",n)}function a(){const n=A(t.default,[]);return c.value===!0&&n.unshift(p("div",{class:"q-focus-helper",tabindex:-1,ref:f})),n}return()=>{const n={ref:r,class:m.value,style:g.value,role:"listitem",onClick:h,onKeyup:k};return c.value===!0?(n.tabindex=e.tabindex||"0",Object.assign(n,y.value)):v.value===!0&&(n["aria-disabled"]="true"),p(s.value,n,a())}}});function Y(e,t,l){let u;function o(){u!==void 0&&(x.remove(u),u=void 0)}return C(()=>{e.value===!0&&o()}),{removeFromHistory:o,addToHistory(){u={condition:()=>l.value===!0,handler:t},x.add(u)}}}const G={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},J=["beforeShow","show","beforeHide","hide"];function X({showing:e,canShow:t,hideOnRouteChange:l,handleShow:u,handleHide:o,processOnMount:b}){const y=B(),{props:i,emit:s,proxy:q}=y;let r;function f(a){e.value===!0?m(a):v(a)}function v(a){if(i.disable===!0||a!==void 0&&a.qAnchorHandled===!0||t!==void 0&&t(a)!==!0)return;const n=i["onUpdate:modelValue"]!==void 0;n===!0&&(s("update:modelValue",!0),r=a,V(()=>{r===a&&(r=void 0)})),(i.modelValue===null||n===!1)&&c(a)}function c(a){e.value!==!0&&(e.value=!0,s("beforeShow",a),u!==void 0?u(a):s("show",a))}function m(a){if(i.disable===!0)return;const n=i["onUpdate:modelValue"]!==void 0;n===!0&&(s("update:modelValue",!1),r=a,V(()=>{r===a&&(r=void 0)})),(i.modelValue===null||n===!1)&&g(a)}function g(a){e.value!==!1&&(e.value=!1,s("beforeHide",a),o!==void 0?o(a):s("hide",a))}function h(a){i.disable===!0&&a===!0?i["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!1):a===!0!==e.value&&(a===!0?c:g)(r)}T(()=>i.modelValue,h),l!==void 0&&H(y)===!0&&T(()=>q.$route.fullPath,()=>{l.value===!0&&e.value===!0&&m()}),b===!0&&P(()=>{h(i.modelValue)});const k={show:v,hide:m,toggle:f};return Object.assign(q,k),k}function Z(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Q(t))}}}function ee(){let e=null;const t=B();function l(){e!==null&&(clearTimeout(e),e=null)}return U(l),C(l),{removeTimeout:l,registerTimeout(u,o){l(),K(t)===!1&&(e=setTimeout(u,o))}}}function te(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),j.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function ae(e,t,l){return l<=t?t:Math.min(l,Math.max(t,e))}function le(e,t,l){if(l<=t)return t;const u=l-t+1;let o=t+(e-t)%u;return o<t&&(o=u+o),o===0?0:o}function ne(e,t=2,l="0"){if(e==null)return e;const u=""+e;return u.length>=t?u:new Array(t-u.length+1).join(l)+u}export{W as Q,J as a,ee as b,te as c,X as d,Y as e,Z as f,ae as g,O as h,z as i,le as n,ne as p,G as u};
