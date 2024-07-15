import{Q as at}from"./QBadge.9f47bfcd.js";import{bK as Z,c as v,h as B,bL as he,i as Me,bM as P,r as O,w,aI as Le,bN as rt,bO as Pe,g as $e,bP as nt,bQ as V,bR as ot,bS as lt,bT as j,bU as ie,bV as ke,bW as ue,bX as me,bY as se,bZ as it,o as De,aF as _e,bl as ut,b_ as Ce,aG as st,aK as ct,a as dt,d as ft,b$ as vt,c0 as mt,aY as ht,aQ as ce,ac as qe,bj as g,f as y,W as xe,al as z,X as yt,ae as bt,c1 as N,af as Ve}from"./index.1a32d67c.js";import{Q as pt}from"./QResizeObserver.064d12f3.js";import{u as gt,a as wt,Q as kt,b as _t}from"./QCard.47a63b11.js";import{Q as Ct,a as qt}from"./QList.38f1e513.js";import{c as xt,u as Tt,a as At,b as Ot,d as St,e as Bt,f as Et,g as X,Q as Y,h as U,i as K}from"./format.9d4e2859.js";import{g as Te,s as Ae}from"./touch.3df10340.js";import{Q as Qt,a as Mt}from"./QLayout.6ada0e98.js";import{g as Lt}from"./get-css-var.23548d6a.js";import{u as Pt,_ as $t}from"./auth-store.dc7429ac.js";import"./storeforage.28380509.js";var Dt=Z({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const r=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>B("div",{class:r.value},he(n.default))}}),Vt=Z({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const r=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>B("div",{class:r.value,role:"toolbar"},he(n.default))}}),zt=Z({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:r}){const{proxy:{$q:u}}=$e(),t=Me(Pe,P);if(t===P)return console.error("QHeader needs to be child of QLayout"),P;const a=O(parseInt(e.heightHint,10)),l=O(!0),c=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||u.platform.is.ios&&t.isContainer.value===!0),m=v(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return l.value===!0?a.value:0;const d=a.value-t.scroll.value.position;return d>0?d:0}),s=v(()=>e.modelValue!==!0||c.value===!0&&l.value!==!0),i=v(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),_=v(()=>"q-header q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),k=v(()=>{const d=t.rows.value.top,T={};return d[0]==="l"&&t.left.space===!0&&(T[u.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(T[u.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),T});function b(d,T){t.update("header",d,T)}function h(d,T){d.value!==T&&(d.value=T)}function A({height:d}){h(a,d),b("size",d)}function C(d){i.value===!0&&h(l,!0),r("focusin",d)}w(()=>e.modelValue,d=>{b("space",d),h(l,!0),t.animate()}),w(m,d=>{b("offset",d)}),w(()=>e.reveal,d=>{d===!1&&h(l,e.modelValue)}),w(l,d=>{t.animate(),r("reveal",d)}),w(t.scroll,d=>{e.reveal===!0&&h(l,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const p={};return t.instances.header=p,e.modelValue===!0&&b("size",a.value),b("space",e.modelValue),b("offset",m.value),Le(()=>{t.instances.header===p&&(t.instances.header=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const d=rt(n.default,[]);return e.elevated===!0&&d.push(B("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(B(pt,{debounce:0,onResize:A})),B("header",{class:_.value,style:k.value,onFocusin:C},d)}}});function de(e,n,r){const u=me(e);let t,a=u.left-n.event.x,l=u.top-n.event.y,c=Math.abs(a),m=Math.abs(l);const s=n.direction;s.horizontal===!0&&s.vertical!==!0?t=a<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?t=l<0?"up":"down":s.up===!0&&l<0?(t="up",c>m&&(s.left===!0&&a<0?t="left":s.right===!0&&a>0&&(t="right"))):s.down===!0&&l>0?(t="down",c>m&&(s.left===!0&&a<0?t="left":s.right===!0&&a>0&&(t="right"))):s.left===!0&&a<0?(t="left",c<m&&(s.up===!0&&l<0?t="up":s.down===!0&&l>0&&(t="down"))):s.right===!0&&a>0&&(t="right",c<m&&(s.up===!0&&l<0?t="up":s.down===!0&&l>0&&(t="down")));let i=!1;if(t===void 0&&r===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,i=!0,t==="left"||t==="right"?(u.left-=a,c=0,a=0):(u.top-=l,m=0,l=0)}return{synthetic:i,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:u,direction:t,isFirst:n.event.isFirst,isFinal:r===!0,duration:Date.now()-n.event.time,distance:{x:c,y:m},offset:{x:a,y:l},delta:{x:u.left-n.event.lastX,y:u.top-n.event.lastY}}}}let Ft=0;var fe=nt({name:"touch-pan",beforeMount(e,{value:n,modifiers:r}){if(r.mouse!==!0&&V.has.touch!==!0)return;function u(a,l){r.mouse===!0&&l===!0?it(a):(r.stop===!0&&ue(a),r.prevent===!0&&ke(a))}const t={uid:"qvtp_"+Ft++,handler:n,modifiers:r,direction:Te(r),noop:ot,mouseStart(a){Ae(a,t)&&lt(a)&&(j(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Ae(a,t)){const l=a.target;j(t,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","passiveCapture"],[l,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,l){if(V.is.firefox===!0&&ie(e,!0),t.lastEvt=a,l===!0||r.stop===!0){if(t.direction.all!==!0&&(l!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const s=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&ke(s),a.cancelBubble===!0&&ue(s),Object.assign(s,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:s}}ue(a)}const{left:c,top:m}=me(a);t.event={x:c,y:m,time:Date.now(),mouse:l===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:c,lastY:m}},move(a){if(t.event===void 0)return;const l=me(a),c=l.left-t.event.x,m=l.top-t.event.y;if(c===0&&m===0)return;t.lastEvt=a;const s=t.event.mouse===!0,i=()=>{u(a,s);let b;r.preserveCursor!==!0&&r.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),xt(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),s===!0){const A=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{A(),h()},50):A()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&u(a,t.event.mouse);const{payload:b,synthetic:h}=de(a,t,!1);b!==void 0&&(t.handler(b)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=b.position.left,t.event.lastY=b.position.top,t.event.lastDir=h===!0?void 0:b.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||s===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(a);return}const _=Math.abs(c),k=Math.abs(m);_!==k&&(t.direction.horizontal===!0&&_>k||t.direction.vertical===!0&&_<k||t.direction.up===!0&&_<k&&m<0||t.direction.down===!0&&_<k&&m>0||t.direction.left===!0&&_>k&&c<0||t.direction.right===!0&&_>k&&c>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,l){if(t.event!==void 0){if(se(t,"temp"),V.is.firefox===!0&&ie(e,!1),l===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(de(a===void 0?t.lastEvt:a,t).payload);const{payload:c}=de(a===void 0?t.lastEvt:a,t,!0),m=()=>{t.handler(c)};t.styleCleanup!==void 0?t.styleCleanup(m):m()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,r.mouse===!0){const a=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";j(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}V.has.touch===!0&&j(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const r=e.__qtouchpan;r!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&r.end(),r.handler=n.value),r.direction=Te(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),se(n,"main"),se(n,"temp"),V.is.firefox===!0&&ie(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});const Oe=150;var Ht=Z({name:"QDrawer",inheritAttrs:!1,props:{...Tt,...gt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...At,"onLayout","miniState"],setup(e,{slots:n,emit:r,attrs:u}){const t=$e(),{proxy:{$q:a}}=t,l=wt(e,a),{preventBodyScroll:c}=Et(),{registerTimeout:m,removeTimeout:s}=Ot(),i=Me(Pe,P);if(i===P)return console.error("QDrawer needs to be child of QLayout"),P;let _,k=null,b;const h=O(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),A=v(()=>e.mini===!0&&h.value!==!0),C=v(()=>A.value===!0?e.miniWidth:e.width),p=O(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),d=v(()=>e.persistent!==!0&&(h.value===!0||Ie.value===!0));function T(o,f){if(Fe(),o!==!1&&i.animate(),x(0),h.value===!0){const q=i.instances[W.value];q!==void 0&&q.belowBreakpoint===!0&&q.hide(!1),E(1),i.isContainer.value!==!0&&c(!0)}else E(0),o!==!1&&ne(!1);m(()=>{o!==!1&&ne(!0),f!==!0&&r("show",o)},Oe)}function ye(o,f){He(),o!==!1&&i.animate(),E(0),x(M.value*C.value),oe(),f!==!0?m(()=>{r("hide",o)},Oe):s()}const{show:J,hide:$}=St({showing:p,hideOnRouteChange:d,handleShow:T,handleHide:ye}),{addToHistory:Fe,removeFromHistory:He}=Bt(p,$,d),I={belowBreakpoint:h,hide:$},S=v(()=>e.side==="right"),M=v(()=>(a.lang.rtl===!0?-1:1)*(S.value===!0?1:-1)),be=O(0),L=O(!1),ee=O(!1),pe=O(C.value*M.value),W=v(()=>S.value===!0?"left":"right"),te=v(()=>p.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:C.value:0),ae=v(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(S.value?"R":"L")>-1||a.platform.is.ios===!0&&i.isContainer.value===!0),D=v(()=>e.overlay===!1&&p.value===!0&&h.value===!1),Ie=v(()=>e.overlay===!0&&p.value===!0&&h.value===!1),We=v(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&L.value===!1?" hidden":"")),Re=v(()=>({backgroundColor:`rgba(0,0,0,${be.value*.4})`})),ge=v(()=>S.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),je=v(()=>S.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),Ne=v(()=>{const o={};return i.header.space===!0&&ge.value===!1&&(ae.value===!0?o.top=`${i.header.offset}px`:i.header.space===!0&&(o.top=`${i.header.size}px`)),i.footer.space===!0&&je.value===!1&&(ae.value===!0?o.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(o.bottom=`${i.footer.size}px`)),o}),Xe=v(()=>{const o={width:`${C.value}px`,transform:`translateX(${pe.value}px)`};return h.value===!0?o:Object.assign(o,Ne.value)}),Ye=v(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),Ue=v(()=>`q-drawer q-drawer--${e.side}`+(ee.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(l.value===!0?" q-drawer--dark q-dark":"")+(L.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${A.value===!0?"mini":"standard"}`+(ae.value===!0||D.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ge.value===!0?" q-drawer--top-padding":""))),Ke=v(()=>{const o=a.lang.rtl===!0?e.side:W.value;return[[fe,et,void 0,{[o]:!0,mouse:!0}]]}),Ge=v(()=>{const o=a.lang.rtl===!0?W.value:e.side;return[[fe,we,void 0,{[o]:!0,mouse:!0}]]}),Ze=v(()=>{const o=a.lang.rtl===!0?W.value:e.side;return[[fe,we,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function re(){tt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}w(h,o=>{o===!0?(_=p.value,p.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&_!==!1&&(p.value===!0?(x(0),E(0),oe()):J(!1))}),w(()=>e.side,(o,f)=>{i.instances[f]===I&&(i.instances[f]=void 0,i[f].space=!1,i[f].offset=0),i.instances[o]=I,i[o].size=C.value,i[o].space=D.value,i[o].offset=te.value}),w(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&re()}),w(()=>e.behavior+e.breakpoint,re),w(i.isContainer,o=>{p.value===!0&&c(o!==!0),o===!0&&re()}),w(i.scrollbarWidth,()=>{x(p.value===!0?0:void 0)}),w(te,o=>{Q("offset",o)}),w(D,o=>{r("onLayout",o),Q("space",o)}),w(S,()=>{x()}),w(C,o=>{x(),le(e.miniToOverlay,o)}),w(()=>e.miniToOverlay,o=>{le(o,C.value)}),w(()=>a.lang.rtl,()=>{x()}),w(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Je(),i.animate())}),w(A,o=>{r("miniState",o)});function x(o){o===void 0?_e(()=>{o=p.value===!0?0:C.value,x(M.value*o)}):(i.isContainer.value===!0&&S.value===!0&&(h.value===!0||Math.abs(o)===C.value)&&(o+=M.value*i.scrollbarWidth.value),pe.value=o)}function E(o){be.value=o}function ne(o){const f=o===!0?"remove":i.isContainer.value!==!0?"add":"";f!==""&&document.body.classList[f]("q-body--drawer-toggle")}function Je(){k!==null&&clearTimeout(k),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ee.value=!0,k=setTimeout(()=>{k=null,ee.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function et(o){if(p.value!==!1)return;const f=C.value,q=X(o.distance.x,0,f);if(o.isFinal===!0){q>=Math.min(75,f)===!0?J():(i.animate(),E(0),x(M.value*f)),L.value=!1;return}x((a.lang.rtl===!0?S.value!==!0:S.value)?Math.max(f-q,0):Math.min(0,q-f)),E(X(q/f,0,1)),o.isFirst===!0&&(L.value=!0)}function we(o){if(p.value!==!0)return;const f=C.value,q=o.direction===e.side,R=(a.lang.rtl===!0?q!==!0:q)?X(o.distance.x,0,f):0;if(o.isFinal===!0){Math.abs(R)<Math.min(75,f)===!0?(i.animate(),E(1),x(0)):$(),L.value=!1;return}x(M.value*R),E(X(1-R/f,0,1)),o.isFirst===!0&&(L.value=!0)}function oe(){c(!1),ne(!0)}function Q(o,f){i.update(e.side,o,f)}function tt(o,f){o.value!==f&&(o.value=f)}function le(o,f){Q("size",o===!0?e.miniWidth:f)}return i.instances[e.side]=I,le(e.miniToOverlay,C.value),Q("space",D.value),Q("offset",te.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),De(()=>{r("onLayout",D.value),r("miniState",A.value),_=e.showIfAbove===!0;const o=()=>{(p.value===!0?T:ye)(!1,!0)};if(i.totalWidth.value!==0){_e(o);return}b=w(i.totalWidth,()=>{b(),b=void 0,p.value===!1&&e.showIfAbove===!0&&h.value===!1?J(!1):o()})}),Le(()=>{b!==void 0&&b(),k!==null&&(clearTimeout(k),k=null),p.value===!0&&oe(),i.instances[e.side]===I&&(i.instances[e.side]=void 0,Q("size",0),Q("offset",0),Q("space",!1))}),()=>{const o=[];h.value===!0&&(e.noSwipeOpen===!1&&o.push(ut(B("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ke.value)),o.push(Ce("div",{ref:"backdrop",class:We.value,style:Re.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>Ze.value)));const f=A.value===!0&&n.mini!==void 0,q=[B("div",{...u,key:""+f,class:[Ye.value,u.class]},f===!0?n.mini():he(n.default))];return e.elevated===!0&&p.value===!0&&q.push(B("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Ce("aside",{ref:"content",class:Ue.value,style:Xe.value},q,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>Ge.value)),B("div",{class:"q-drawer-container"},o)}}});const It=Object.prototype.toString,ve=Object.prototype.hasOwnProperty,Wt=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(e=>"[object "+e+"]"));function Se(e){if(e!==Object(e)||Wt.has(It.call(e))===!0||e.constructor&&ve.call(e,"constructor")===!1&&ve.call(e.constructor.prototype,"isPrototypeOf")===!1)return!1;let n;for(n in e);return n===void 0||ve.call(e,n)}function ze(){let e,n,r,u,t,a,l=arguments[0]||{},c=1,m=!1;const s=arguments.length;for(typeof l=="boolean"&&(m=l,l=arguments[1]||{},c=2),Object(l)!==l&&typeof l!="function"&&(l={}),s===c&&(l=this,c--);c<s;c++)if((e=arguments[c])!==null)for(n in e)r=l[n],u=e[n],l!==u&&(m===!0&&u&&((t=Array.isArray(u))||Se(u)===!0)?(t===!0?a=Array.isArray(r)===!0?r:[]:a=Se(r)===!0?r:{},l[n]=ze(m,a,u)):u!==void 0&&(l[n]=u));return l}let G=null,Be;const H=[];function Rt(e){e.title&&(e.title=e.titleTemplate?e.titleTemplate(e.title):e.title,delete e.titleTemplate),[["meta","content"],["link","href"]].forEach(n=>{const r=e[n[0]],u=n[1];for(const t in r){const a=r[t];a.template&&(Object.keys(a).length===1?delete r[t]:(a[u]=a.template(a[u]||""),delete a.template))}})}function jt(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!0;for(const r in e)if(e[r]!==n[r])return!0}function Ee(e){return["class","style"].includes(e)===!1}function Qe(e){return["lang","dir"].includes(e)===!1}function Nt(e,n){const r={},u={};return e===void 0?{add:n,remove:u}:(e.title!==n.title&&(r.title=n.title),["meta","link","script","htmlAttr","bodyAttr"].forEach(t=>{const a=e[t],l=n[t];if(u[t]=[],a==null){r[t]=l;return}r[t]={};for(const c in a)l.hasOwnProperty(c)===!1&&u[t].push(c);for(const c in l)a.hasOwnProperty(c)===!1?r[t][c]=l[c]:jt(a[c],l[c])===!0&&(u[t].push(c),r[t][c]=l[c])}),{add:r,remove:u})}function Xt({add:e,remove:n}){e.title&&(document.title=e.title),Object.keys(n).length!==0&&(["meta","link","script"].forEach(r=>{n[r].forEach(u=>{document.head.querySelector(`${r}[data-qmeta="${u}"]`).remove()})}),n.htmlAttr.filter(Qe).forEach(r=>{document.documentElement.removeAttribute(r)}),n.bodyAttr.filter(Ee).forEach(r=>{document.body.removeAttribute(r)})),["meta","link","script"].forEach(r=>{const u=e[r];for(const t in u){const a=document.createElement(r);for(const l in u[t])l!=="innerHTML"&&a.setAttribute(l,u[t][l]);a.setAttribute("data-qmeta",t),r==="script"&&(a.innerHTML=u[t].innerHTML||""),document.head.appendChild(a)}}),Object.keys(e.htmlAttr).filter(Qe).forEach(r=>{document.documentElement.setAttribute(r,e.htmlAttr[r]||"")}),Object.keys(e.bodyAttr).filter(Ee).forEach(r=>{document.body.setAttribute(r,e.bodyAttr[r]||"")})}function Yt(){G=null;const e={title:"",titleTemplate:null,meta:{},link:{},script:{},htmlAttr:{},bodyAttr:{}};for(let n=0;n<H.length;n++){const{active:r,val:u}=H[n];r===!0&&ze(!0,e,u)}Rt(e),Xt(Nt(Be,e)),Be=e}function F(){G!==null&&clearTimeout(G),G=setTimeout(Yt,50)}function Ut(e){{const n={active:!0};if(typeof e=="function"){const r=v(e);n.val=r.value,w(r,u=>{n.val=u,n.active===!0&&F()})}else n.val=e;H.push(n),F(),st(()=>{n.active=!0,F()}),ct(()=>{n.active=!1,F()}),dt(()=>{H.splice(H.indexOf(n),1),F()})}}const Kt={key:1},Gt=Ve("div",null,"Your logo here",-1),Zt={style:{"overflow-y":"hidden"}},da=ft({__name:"AuthenticatedLayout",setup(e){const n=O(!0),r=vt(),u=O("Dashboard"),t=Pt(),{token:a}=mt(t),l=v(()=>r.currentRoute.value.path);function c(){let s=r.currentRoute.value.path;return s=s.replace("/","").split("-").join(" "),s=s.charAt(0).toUpperCase()+s.slice(1),u.value=s,s}function m(s){return Lt(s)}return Ut(()=>({title:c()})),De(()=>{console.log("Here is tht token value on mount",a)}),(s,i)=>{const _=ht("router-view");return ce(),qe(Qt,{view:"lHh LpR fFf"},{default:g(()=>[y(zt,{bordered:"",class:"text-dark",style:xe({backgroundColor:s.$getColor("light-page")})},{default:g(()=>[y(Vt,{style:{height:"6rem"}},{default:g(()=>[y(Dt,{class:"row justify-between"},{default:g(()=>[u.value?(ce(),qe(at,{key:0,class:"text-h6 bg-accent",style:xe({padding:"0.5rem",color:m("dark"),border:`0.1rem solid ${m("secondary")}`,borderRadius:"12px"})},{default:g(()=>[z(yt(u.value),1)]),_:1},8,["style"])):(ce(),bt("div",Kt)),y($t)]),_:1})]),_:1})]),_:1},8,["style"]),y(Ht,{class:"bg-accent","show-if-above":"",modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=k=>n.value=k),side:"left",bordered:"",persistent:"",width:240},{default:g(()=>[y(kt,{style:{"background-color":"inherit"}},{default:g(()=>[y(_t,{class:"text-center flex flex-center",style:{height:"25vh"}},{default:g(()=>[Gt]),_:1})]),_:1}),y(Ct),y(qt,{class:"q-mt-sm"},{default:g(()=>[y(Y,{to:"/dashboard","active-class":l.value==="/dashboard"?"bg-secondary text-black":""},{default:g(()=>[y(N,{name:"dashboard",style:{height:"3.5rem",width:"3.5rem"}}),y(U,null,{default:g(()=>[y(K,null,{default:g(()=>[z("Dashboard")]),_:1})]),_:1})]),_:1},8,["active-class"]),y(Y,{to:"properties-billings","active-class":l.value==="/properties-billings"?"bg-secondary text-black":""},{default:g(()=>[y(N,{name:"house",style:{height:"3.5rem",width:"3.5rem"}}),y(U,null,{default:g(()=>[y(K,null,{default:g(()=>[z("Properties And Billings ")]),_:1})]),_:1})]),_:1},8,["active-class"]),y(Y,{to:"/payments","active-class":l.value==="/payments"?"bg-secondary text-black":""},{default:g(()=>[y(N,{name:"money",style:{height:"3.5rem",width:"3.5rem"}}),y(U,null,{default:g(()=>[y(K,null,{default:g(()=>[z("Payments")]),_:1})]),_:1})]),_:1},8,["active-class"]),y(Y,{to:"/settings","active-class":l.value==="/settings"?"bg-secondary text-black":""},{default:g(()=>[y(N,{name:"money",style:{height:"3.5rem",width:"3.5rem"}}),y(U,null,{default:g(()=>[y(K,null,{default:g(()=>[z("Settings")]),_:1})]),_:1})]),_:1},8,["active-class"])]),_:1})]),_:1},8,["modelValue"]),y(Mt,null,{default:g(()=>[Ve("div",Zt,[y(_)])]),_:1})]),_:1})}}});export{da as default};
