import{bV as H,h as n,bY as he,c2 as Tt,c0 as je,g as W,c as d,r as N,w as O,aH as Qe,o as Ge,aG as xt,aK as Lt,aI as ze,cc as Bt,cd as Ee,c1 as He,cv as At,cw as $t,c7 as Et,c6 as Oe,cy as we,cz as Fe,cA as Ot,aF as We,cB as Ft,cn as G,cj as ae,d as re,aQ as Ue,ac as Ie,bj as Ke,U as Dt,W as Je,af as Vt,aX as Xe,ck as A,S as Ye,ci as Mt,bK as Nt,c5 as jt}from"./index.ed6ac60f.js";import{a as Qt,Q as Gt}from"./QList.403491f3.js";import{u as _e,a as Pe,Q as zt}from"./QCard.f7564384.js";import{n as Ht,o as Wt,q as Ze,Q as Ut,t as It,w as Kt}from"./PropertySubscription.handler.7c968d7b.js";import{Q as ye}from"./QCheckbox.bfca5131.js";import{Q as Jt}from"./QBadge.c62ff391.js";import{forageGetItem as Xt,forageSetItem as Yt}from"./storeforage.994c5aeb.js";import{E as Se}from"./index.8a3139b3.js";import{api as j}from"./axios.55c0c053.js";import{U as Q}from"./urlPaths.enum.9088486d.js";var Zt=H({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:t,emit:l}){const s=W(),{proxy:{$q:o}}=s,f=u=>{l("click",u)};return()=>{if(e.props===void 0)return n("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:f},he(t.default));let u,c;const v=s.vnode.key;if(v){if(u=e.props.colsMap[v],u===void 0)return}else u=e.props.col;if(u.sortable===!0){const r=u.align==="right"?"unshift":"push";c=Tt(t.default,[]),c[r](n(je,{class:u.__iconClass,name:o.iconSet.table.arrowUp}))}else c=he(t.default);const y={class:u.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:u.headerStyle,onClick:r=>{u.sortable===!0&&e.props.sort(u),f(r)}};return n("th",y,c)}}});const ea=["horizontal","vertical","cell","none"];var ta=H({name:"QMarkupTable",props:{..._e,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>ea.includes(e)}},setup(e,{slots:t}){const l=W(),s=Pe(e,l.proxy.$q),o=d(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(s.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>n("div",{class:o.value},[n("table",{class:"q-table"},he(t.default))])}});function et(e,t){return n("div",e,[n("table",{class:"q-table"},t)])}const aa={list:Qt,table:ta},la=["list","table","__qtable"];var ra=H({name:"QVirtualScroll",props:{...Ht,type:{type:String,default:"list",validator:e=>la.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:t,attrs:l}){let s;const o=N(null),f=d(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:u,localResetVirtualScroll:c,padVirtualScroll:v,onVirtualScrollEvt:y}=Wt({virtualScrollLength:f,getVirtualScrollTarget:q,getVirtualScrollEl:P}),r=d(()=>{if(f.value===0)return[];const L=(B,k)=>({index:u.value.from+k,item:B});return e.itemsFn===void 0?e.items.slice(u.value.from,u.value.to).map(L):e.itemsFn(u.value.from,u.value.to-u.value.from).map(L)}),b=d(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),_=d(()=>e.scrollTarget!==void 0?{}:{tabindex:0});O(f,()=>{c()}),O(()=>e.scrollTarget,()=>{S(),w()});function P(){return o.value.$el||o.value}function q(){return s}function w(){s=Bt(P(),e.scrollTarget),s.addEventListener("scroll",y,Ee.passive)}function S(){s!==void 0&&(s.removeEventListener("scroll",y,Ee.passive),s=void 0)}function x(){let L=v(e.type==="list"?"div":"tbody",r.value.map(t.default));return t.before!==void 0&&(L=t.before().concat(L)),He(t.after,L)}return Qe(()=>{c()}),Ge(()=>{w()}),xt(()=>{w()}),Lt(()=>{S()}),ze(()=>{S()}),()=>{if(t.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?et({ref:o,class:"q-table__middle "+b.value},x()):n(aa[e.type],{...l,ref:o,class:[l.class,b.value],..._.value},x)}}});const oa={xs:2,sm:4,md:6,lg:10,xl:14};function De(e,t,l){return{transform:t===!0?`translateX(${l.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var na=H({name:"QLinearProgress",props:{..._e,...At,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:t}){const{proxy:l}=W(),s=Pe(e,l.$q),o=$t(e,oa),f=d(()=>e.indeterminate===!0||e.query===!0),u=d(()=>e.reverse!==e.query),c=d(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),v=d(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),y=d(()=>De(e.buffer!==void 0?e.buffer:1,u.value,l.$q)),r=d(()=>`with${e.instantFeedback===!0?"out":""}-transition`),b=d(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${r.value} q-linear-progress__track--${s.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),_=d(()=>De(f.value===!0?1:e.value,u.value,l.$q)),P=d(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${r.value} q-linear-progress__model--${f.value===!0?"in":""}determinate`),q=d(()=>({width:`${e.value*100}%`})),w=d(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${r.value}`);return()=>{const S=[n("div",{class:b.value,style:y.value}),n("div",{class:P.value,style:_.value})];return e.stripe===!0&&f.value===!1&&S.push(n("div",{class:w.value,style:q.value})),n("div",{class:v.value,style:c.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},He(t.default,S))}}});let z=0;const sa={fullscreen:Boolean,noRouteFullscreenExit:Boolean},ia=["update:fullscreen","fullscreen"];function ua(){const e=W(),{props:t,emit:l,proxy:s}=e;let o,f,u;const c=N(!1);Et(e)===!0&&O(()=>s.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&r()}),O(()=>t.fullscreen,b=>{c.value!==b&&v()}),O(c,b=>{l("update:fullscreen",b),l("fullscreen",b)});function v(){c.value===!0?r():y()}function y(){c.value!==!0&&(c.value=!0,u=s.$el.parentNode,u.replaceChild(f,s.$el),document.body.appendChild(s.$el),z++,z===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:r},Oe.add(o))}function r(){c.value===!0&&(o!==void 0&&(Oe.remove(o),o=void 0),u.replaceChild(s.$el,f),c.value=!1,z=Math.max(0,z-1),z===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),s.$el.scrollIntoView!==void 0&&setTimeout(()=>{s.$el.scrollIntoView()})))}return Qe(()=>{f=document.createElement("span")}),Ge(()=>{t.fullscreen===!0&&y()}),ze(r),Object.assign(s,{toggleFullscreen:v,setFullscreen:y,exitFullscreen:r}),{inFullscreen:c,toggleFullscreen:v}}function ca(e,t){return new Date(e)-new Date(t)}const da={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function va(e,t,l,s){const o=d(()=>{const{sortBy:c}=t.value;return c&&l.value.find(v=>v.name===c)||null}),f=d(()=>e.sortMethod!==void 0?e.sortMethod:(c,v,y)=>{const r=l.value.find(P=>P.name===v);if(r===void 0||r.field===void 0)return c;const b=y===!0?-1:1,_=typeof r.field=="function"?P=>r.field(P):P=>P[r.field];return c.sort((P,q)=>{let w=_(P),S=_(q);return r.rawSort!==void 0?r.rawSort(w,S,P,q)*b:w==null?-1*b:S==null?1*b:r.sort!==void 0?r.sort(w,S,P,q)*b:we(w)===!0&&we(S)===!0?(w-S)*b:Fe(w)===!0&&Fe(S)===!0?ca(w,S)*b:typeof w=="boolean"&&typeof S=="boolean"?(w-S)*b:([w,S]=[w,S].map(x=>(x+"").toLocaleString().toLowerCase()),w<S?-1*b:w===S?0:b)})});function u(c){let v=e.columnSortOrder;if(Ot(c)===!0)c.sortOrder&&(v=c.sortOrder),c=c.name;else{const b=l.value.find(_=>_.name===c);b!==void 0&&b.sortOrder&&(v=b.sortOrder)}let{sortBy:y,descending:r}=t.value;y!==c?(y=c,r=v==="da"):e.binaryStateSort===!0?r=!r:r===!0?v==="ad"?y=null:r=!1:v==="ad"?r=!0:y=null,s({sortBy:y,descending:r,page:1})}return{columnToSort:o,computedSortMethod:f,sort:u}}const fa={filter:[String,Object],filterMethod:Function};function ga(e,t){const l=d(()=>e.filterMethod!==void 0?e.filterMethod:(s,o,f,u)=>{const c=o?o.toLowerCase():"";return s.filter(v=>f.some(y=>{const r=u(y,v)+"";return(r==="undefined"||r==="null"?"":r.toLowerCase()).indexOf(c)!==-1}))});return O(()=>e.filter,()=>{We(()=>{t({page:1},!0)})},{deep:!0}),{computedFilterMethod:l}}function ba(e,t){for(const l in t)if(t[l]!==e[l])return!1;return!0}function Ve(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const ma={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function ya(e,t){const{props:l,emit:s}=e,o=N(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:l.rowsPerPageOptions.length!==0?l.rowsPerPageOptions[0]:5},l.pagination)),f=d(()=>{const r=l["onUpdate:pagination"]!==void 0?{...o.value,...l.pagination}:o.value;return Ve(r)}),u=d(()=>f.value.rowsNumber!==void 0);function c(r){v({pagination:r,filter:l.filter})}function v(r={}){We(()=>{s("request",{pagination:r.pagination||f.value,filter:r.filter||l.filter,getCellValue:t})})}function y(r,b){const _=Ve({...f.value,...r});if(ba(f.value,_)===!0){u.value===!0&&b===!0&&c(_);return}if(u.value===!0){c(_);return}l.pagination!==void 0&&l["onUpdate:pagination"]!==void 0?s("update:pagination",_):o.value=_}return{innerPagination:o,computedPagination:f,isServerSide:u,requestServerInteraction:v,setPagination:y}}function Sa(e,t,l,s,o,f){const{props:u,emit:c,proxy:{$q:v}}=e,y=d(()=>s.value===!0?l.value.rowsNumber||0:f.value),r=d(()=>{const{page:k,rowsPerPage:R}=l.value;return(k-1)*R}),b=d(()=>{const{page:k,rowsPerPage:R}=l.value;return k*R}),_=d(()=>l.value.page===1),P=d(()=>l.value.rowsPerPage===0?1:Math.max(1,Math.ceil(y.value/l.value.rowsPerPage))),q=d(()=>b.value===0?!0:l.value.page>=P.value),w=d(()=>(u.rowsPerPageOptions.includes(t.value.rowsPerPage)?u.rowsPerPageOptions:[t.value.rowsPerPage].concat(u.rowsPerPageOptions)).map(R=>({label:R===0?v.lang.table.allRows:""+R,value:R})));O(P,(k,R)=>{if(k===R)return;const U=l.value.page;k&&!U?o({page:1}):k<U&&o({page:k})});function S(){o({page:1})}function x(){const{page:k}=l.value;k>1&&o({page:k-1})}function L(){const{page:k,rowsPerPage:R}=l.value;b.value>0&&k*R<y.value&&o({page:k+1})}function B(){o({page:P.value})}return u["onUpdate:pagination"]!==void 0&&c("update:pagination",{...l.value}),{firstRowIndex:r,lastRowIndex:b,isFirstPage:_,isLastPage:q,pagesNumber:P,computedRowsPerPageOptions:w,computedRowsNumber:y,firstPage:S,prevPage:x,nextPage:L,lastPage:B}}const ha={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},wa=["update:selected","selection"];function _a(e,t,l,s){const o=d(()=>{const q={};return e.selected.map(s.value).forEach(w=>{q[w]=!0}),q}),f=d(()=>e.selection!=="none"),u=d(()=>e.selection==="single"),c=d(()=>e.selection==="multiple"),v=d(()=>l.value.length!==0&&l.value.every(q=>o.value[s.value(q)]===!0)),y=d(()=>v.value!==!0&&l.value.some(q=>o.value[s.value(q)]===!0)),r=d(()=>e.selected.length);function b(q){return o.value[q]===!0}function _(){t("update:selected",[])}function P(q,w,S,x){t("selection",{rows:w,added:S,keys:q,evt:x});const L=u.value===!0?S===!0?w:[]:S===!0?e.selected.concat(w):e.selected.filter(B=>q.includes(s.value(B))===!1);t("update:selected",L)}return{hasSelectionMode:f,singleSelection:u,multipleSelection:c,allRowsSelected:v,someRowsSelected:y,rowsSelectedNumber:r,isRowSelected:b,clearSelection:_,updateSelection:P}}function Me(e){return Array.isArray(e)?e.slice():[]}const Pa={expanded:Array},qa=["update:expanded"];function Ca(e,t){const l=N(Me(e.expanded));O(()=>e.expanded,u=>{l.value=Me(u)});function s(u){return l.value.includes(u)}function o(u){e.expanded!==void 0?t("update:expanded",u):l.value=u}function f(u,c){const v=l.value.slice(),y=v.indexOf(u);c===!0?y===-1&&(v.push(u),o(v)):y!==-1&&(v.splice(y,1),o(v))}return{isRowExpanded:s,setExpanded:o,updateExpanded:f}}const pa={visibleColumns:Array};function ka(e,t,l){const s=d(()=>{if(e.columns!==void 0)return e.columns;const c=e.rows[0];return c!==void 0?Object.keys(c).map(v=>({name:v,label:v.toUpperCase(),field:v,align:we(c[v])?"right":"left",sortable:!0})):[]}),o=d(()=>{const{sortBy:c,descending:v}=t.value;return(e.visibleColumns!==void 0?s.value.filter(r=>r.required===!0||e.visibleColumns.includes(r.name)===!0):s.value).map(r=>{const b=r.align||"right",_=`text-${b}`;return{...r,align:b,__iconClass:`q-table__sort-icon q-table__sort-icon--${b}`,__thClass:_+(r.headerClasses!==void 0?" "+r.headerClasses:"")+(r.sortable===!0?" sortable":"")+(r.name===c?` sorted ${v===!0?"sort-desc":""}`:""),__tdStyle:r.style!==void 0?typeof r.style!="function"?()=>r.style:r.style:()=>null,__tdClass:r.classes!==void 0?typeof r.classes!="function"?()=>_+" "+r.classes:P=>_+" "+r.classes(P):()=>_}})}),f=d(()=>{const c={};return o.value.forEach(v=>{c[v.name]=v}),c}),u=d(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(l.value===!0?1:0));return{colList:s,computedCols:o,computedColsMap:f,computedColspan:u}}const le="q-table__bottom row items-center",tt={};Ze.forEach(e=>{tt[e]={}});var Ha=H({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...tt,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,..._e,...sa,...pa,...fa,...ma,...Pa,...ha,...da},emits:["request","virtualScroll",...ia,...qa,...wa],setup(e,{slots:t,emit:l}){const s=W(),{proxy:{$q:o}}=s,f=Pe(e,o),{inFullscreen:u,toggleFullscreen:c}=ua(),v=d(()=>typeof e.rowKey=="function"?e.rowKey:a=>a[e.rowKey]),y=N(null),r=N(null),b=d(()=>e.grid!==!0&&e.virtualScroll===!0),_=d(()=>" q-table__card"+(f.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),P=d(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":_.value)+(f.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(u.value===!0?" fullscreen scroll":"")),q=d(()=>P.value+(e.loading===!0?" q-table--loading":""));O(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+P.value,()=>{b.value===!0&&r.value!==null&&r.value.reset()});const{innerPagination:w,computedPagination:S,isServerSide:x,requestServerInteraction:L,setPagination:B}=ya(s,V),{computedFilterMethod:k}=ga(e,B),{isRowExpanded:R,setExpanded:U,updateExpanded:lt}=Ca(e,l),oe=d(()=>{let a=e.rows;if(x.value===!0||a.length===0)return a;const{sortBy:i,descending:g}=S.value;return e.filter&&(a=k.value(a,e.filter,$.value,V)),it.value!==null&&(a=ut.value(e.rows===a?a.slice():a,i,g)),a}),qe=d(()=>oe.value.length),F=d(()=>{let a=oe.value;if(x.value===!0)return a;const{rowsPerPage:i}=S.value;return i!==0&&(K.value===0&&e.rows!==a?a.length>J.value&&(a=a.slice(0,J.value)):a=a.slice(K.value,J.value)),a}),{hasSelectionMode:D,singleSelection:rt,multipleSelection:Ce,allRowsSelected:ot,someRowsSelected:pe,rowsSelectedNumber:ne,isRowSelected:se,clearSelection:nt,updateSelection:I}=_a(e,l,F,v),{colList:st,computedCols:$,computedColsMap:ke,computedColspan:Re}=ka(e,S,D),{columnToSort:it,computedSortMethod:ut,sort:ie}=va(e,S,st,B),{firstRowIndex:K,lastRowIndex:J,isFirstPage:ue,isLastPage:ce,pagesNumber:X,computedRowsPerPageOptions:ct,computedRowsNumber:Y,firstPage:de,prevPage:ve,nextPage:fe,lastPage:ge}=Sa(s,w,S,x,B,qe),dt=d(()=>F.value.length===0),vt=d(()=>{const a={};return Ze.forEach(i=>{a[i]=e[i]}),a.virtualScrollItemSize===void 0&&(a.virtualScrollItemSize=e.dense===!0?28:48),a});function ft(){b.value===!0&&r.value.reset()}function gt(){if(e.grid===!0)return kt();const a=e.hideHeader!==!0?Ae:null;if(b.value===!0){const g=t["top-row"],m=t["bottom-row"],h={default:p=>xe(p.item,t.body,p.index)};if(g!==void 0){const p=n("tbody",g({cols:$.value}));h.before=a===null?()=>p:()=>[a()].concat(p)}else a!==null&&(h.before=a);return m!==void 0&&(h.after=()=>n("tbody",m({cols:$.value}))),n(ra,{ref:r,class:e.tableClass,style:e.tableStyle,...vt.value,scrollTarget:e.virtualScrollTarget,items:F.value,type:"__qtable",tableColspan:Re.value,onVirtualScroll:mt},h)}const i=[yt()];return a!==null&&i.unshift(a()),et({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},i)}function bt(a,i){if(r.value!==null){r.value.scrollTo(a,i);return}a=parseInt(a,10);const g=y.value.querySelector(`tbody tr:nth-of-type(${a+1})`);if(g!==null){const m=y.value.querySelector(".q-table__middle.scroll"),h=g.offsetTop-e.virtualScrollStickySizeStart,p=h<m.scrollTop?"decrease":"increase";m.scrollTop=h,l("virtualScroll",{index:a,from:0,to:w.value.rowsPerPage-1,direction:p})}}function mt(a){l("virtualScroll",a)}function Te(){return[n(na,{class:"q-table__linear-progress",color:e.color,dark:f.value,indeterminate:!0,trackColor:"transparent"})]}function xe(a,i,g){const m=v.value(a),h=se(m);if(i!==void 0)return i(Le({key:m,row:a,pageIndex:g,__trClass:h?"selected":""}));const p=t["body-cell"],C=$.value.map(T=>{const ee=t[`body-cell-${T.name}`],te=ee!==void 0?ee:p;return te!==void 0?te(St({key:m,row:a,pageIndex:g,col:T})):n("td",{class:T.__tdClass(a),style:T.__tdStyle(a)},V(T,a))});if(D.value===!0){const T=t["body-selection"],ee=T!==void 0?T(ht({key:m,row:a,pageIndex:g})):[n(ye,{modelValue:h,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(te,Rt)=>{I([m],[a],te,Rt)}})];C.unshift(n("td",{class:"q-table--col-auto-width"},ee))}const E={key:m,class:{selected:h}};return e.onRowClick!==void 0&&(E.class["cursor-pointer"]=!0,E.onClick=T=>{l("RowClick",T,a,g)}),e.onRowDblclick!==void 0&&(E.class["cursor-pointer"]=!0,E.onDblclick=T=>{l("RowDblclick",T,a,g)}),e.onRowContextmenu!==void 0&&(E.class["cursor-pointer"]=!0,E.onContextmenu=T=>{l("RowContextmenu",T,a,g)}),n("tr",E,C)}function yt(){const a=t.body,i=t["top-row"],g=t["bottom-row"];let m=F.value.map((h,p)=>xe(h,a,p));return i!==void 0&&(m=i({cols:$.value}).concat(m)),g!==void 0&&(m=m.concat(g({cols:$.value}))),n("tbody",m)}function Le(a){return be(a),a.cols=a.cols.map(i=>G({...i},"value",()=>V(i,a.row))),a}function St(a){return be(a),G(a,"value",()=>V(a.col,a.row)),a}function ht(a){return be(a),a}function be(a){Object.assign(a,{cols:$.value,colsMap:ke.value,sort:ie,rowIndex:K.value+a.pageIndex,color:e.color,dark:f.value,dense:e.dense}),D.value===!0&&G(a,"selected",()=>se(a.key),(i,g)=>{I([a.key],[a.row],i,g)}),G(a,"expand",()=>R(a.key),i=>{lt(a.key,i)})}function V(a,i){const g=typeof a.field=="function"?a.field(i):i[a.field];return a.format!==void 0?a.format(g,i):g}const M=d(()=>({pagination:S.value,pagesNumber:X.value,isFirstPage:ue.value,isLastPage:ce.value,firstPage:de,prevPage:ve,nextPage:fe,lastPage:ge,inFullscreen:u.value,toggleFullscreen:c}));function wt(){const a=t.top,i=t["top-left"],g=t["top-right"],m=t["top-selection"],h=D.value===!0&&m!==void 0&&ne.value>0,p="q-table__top relative-position row items-center";if(a!==void 0)return n("div",{class:p},[a(M.value)]);let C;if(h===!0?C=m(M.value).slice():(C=[],i!==void 0?C.push(n("div",{class:"q-table__control"},[i(M.value)])):e.title&&C.push(n("div",{class:"q-table__control"},[n("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(C.push(n("div",{class:"q-table__separator col"})),C.push(n("div",{class:"q-table__control"},[g(M.value)]))),C.length!==0)return n("div",{class:p},C)}const Be=d(()=>pe.value===!0?null:ot.value);function Ae(){const a=_t();return e.loading===!0&&t.loading===void 0&&a.push(n("tr",{class:"q-table__progress"},[n("th",{class:"relative-position",colspan:Re.value},Te())])),n("thead",a)}function _t(){const a=t.header,i=t["header-cell"];if(a!==void 0)return a(me({header:!0})).slice();const g=$.value.map(m=>{const h=t[`header-cell-${m.name}`],p=h!==void 0?h:i,C=me({col:m});return p!==void 0?p(C):n(Zt,{key:m.name,props:C},()=>m.label)});if(rt.value===!0&&e.grid!==!0)g.unshift(n("th",{class:"q-table--col-auto-width"}," "));else if(Ce.value===!0){const m=t["header-selection"],h=m!==void 0?m(me({})):[n(ye,{color:e.color,modelValue:Be.value,dark:f.value,dense:e.dense,"onUpdate:modelValue":$e})];g.unshift(n("th",{class:"q-table--col-auto-width"},h))}return[n("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function me(a){return Object.assign(a,{cols:$.value,sort:ie,colsMap:ke.value,color:e.color,dark:f.value,dense:e.dense}),Ce.value===!0&&G(a,"selected",()=>Be.value,$e),a}function $e(a){pe.value===!0&&(a=!1),I(F.value.map(v.value),F.value,a)}const Z=d(()=>{const a=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?a.reverse():a});function Pt(){if(e.hideBottom===!0)return;if(dt.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,m=t["no-data"],h=m!==void 0?[m({message:g,icon:o.iconSet.table.warning,filter:e.filter})]:[n(je,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),g];return n("div",{class:le+" q-table__bottom--nodata"},h)}const a=t.bottom;if(a!==void 0)return n("div",{class:le},[a(M.value)]);const i=e.hideSelectedBanner!==!0&&D.value===!0&&ne.value>0?[n("div",{class:"q-table__control"},[n("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(ne.value)])])]:[];if(e.hidePagination!==!0)return n("div",{class:le+" justify-end"},Ct(i));if(i.length!==0)return n("div",{class:le},i)}function qt(a){B({page:1,rowsPerPage:a.value})}function Ct(a){let i;const{rowsPerPage:g}=S.value,m=e.paginationLabel||o.lang.table.pagination,h=t.pagination,p=e.rowsPerPageOptions.length>1;if(a.push(n("div",{class:"q-table__separator col"})),p===!0&&a.push(n("div",{class:"q-table__control"},[n("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),n(Ut,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:ct.value,displayValue:g===0?o.lang.table.allRows:g,dark:f.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":qt})])),h!==void 0)i=h(M.value);else if(i=[n("span",g!==0?{class:"q-table__bottom-item"}:{},[g?m(K.value+1,Math.min(J.value,Y.value),Y.value):m(1,qe.value,Y.value)])],g!==0&&X.value>1){const C={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(C.size="sm"),X.value>2&&i.push(n(ae,{key:"pgFirst",...C,icon:Z.value[0],disable:ue.value,onClick:de})),i.push(n(ae,{key:"pgPrev",...C,icon:Z.value[1],disable:ue.value,onClick:ve}),n(ae,{key:"pgNext",...C,icon:Z.value[2],disable:ce.value,onClick:fe})),X.value>2&&i.push(n(ae,{key:"pgLast",...C,icon:Z.value[3],disable:ce.value,onClick:ge}))}return a.push(n("div",{class:"q-table__control"},i)),a}function pt(){const a=e.gridHeader===!0?[n("table",{class:"q-table"},[Ae()])]:e.loading===!0&&t.loading===void 0?Te():void 0;return n("div",{class:"q-table__middle"},a)}function kt(){const a=t.item!==void 0?t.item:i=>{const g=i.cols.map(h=>n("div",{class:"q-table__grid-item-row"},[n("div",{class:"q-table__grid-item-title"},[h.label]),n("div",{class:"q-table__grid-item-value"},[h.value])]));if(D.value===!0){const h=t["body-selection"],p=h!==void 0?h(i):[n(ye,{modelValue:i.selected,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(C,E)=>{I([i.key],[i.row],C,E)}})];g.unshift(n("div",{class:"q-table__grid-item-row"},p),n(Gt,{dark:f.value}))}const m={class:["q-table__grid-item-card"+_.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(m.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(m.onClick=h=>{l("RowClick",h,i.row,i.pageIndex)}),e.onRowDblclick!==void 0&&(m.onDblclick=h=>{l("RowDblclick",h,i.row,i.pageIndex)})),n("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(i.selected===!0?" q-table__grid-item--selected":"")},[n("div",m,g)])};return n("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},F.value.map((i,g)=>a(Le({key:v.value(i),row:i,pageIndex:g}))))}return Object.assign(s.proxy,{requestServerInteraction:L,setPagination:B,firstPage:de,prevPage:ve,nextPage:fe,lastPage:ge,isRowSelected:se,clearSelection:nt,isRowExpanded:R,setExpanded:U,sort:ie,resetVirtualScroll:ft,scrollTo:bt,getCellValue:V}),Ft(s.proxy,{filteredSortedRows:()=>oe.value,computedRows:()=>F.value,computedRowsNumber:()=>Y.value}),()=>{const a=[wt()],i={ref:y,class:q.value};return e.grid===!0?a.push(pt()):Object.assign(i,{class:[i.class,e.cardClass],style:e.cardStyle}),a.push(gt(),Pt()),e.loading===!0&&t.loading!==void 0&&a.push(t.loading()),n("div",i,a)}}});const Wa=re({__name:"TitleBadge",props:{bgColor:{default:"secondary"},color:{default:"dark"},borderColor:{default:"secondary"},titleHeading:{default:"Lawma App"},headerTextSize:{default:"h5"}},setup(e){return re({name:"title-badge"}),(t,l)=>(Ue(),Ie(Jt,{class:Dt(`text-${t.headerTextSize} bg-${t.bgColor}`),style:Je({padding:"0.5rem",color:t.$getColor(t.color),border:`0.1rem solid ${t.$getColor("secondary")}`,borderRadius:"12px"})},{default:Ke(()=>[Vt("div",null,[Xe(t.$slots,"default")])]),_:3},8,["class","style"]))}}),Ua=1e4,Ia={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},Ka=["2022","2023","2024","2025","2026","2027","2028","2029","2030"];async function Ra(e){const t=await j.post(Q.LGA,e);if(t.status===201)return t.data;throw new Error("Post LGA failed",{cause:t.data})}async function Ta(e){const t=await j.post(Q.LGA_WARD,e);if(t.status===201)return t.data;throw new Error("Post LGA Ward failed",{cause:t.data})}async function xa(e){const t=await j.post(Q.STREET,e);if(t.status===201)return t.data;throw new Error("Post Street failed",{cause:t.data})}async function La({name:e}={}){return(await j.get(Q.LGA,{params:{name:e}})).data}async function Ba({name:e,lgaId:t}={}){return(await j.get(Q.LGA_WARD,{params:{name:e,lgaId:t}})).data}async function Aa({name:e,lgaWardId:t}={}){return(await j.get(Q.STREET,{params:{name:e,lgaWardId:t}})).data}class $a{static async handlePostLga(t,{onSuccess:l,onError:s}={}){t.on(Se.POST_LGA,async o=>{try{await Ra(o),l&&l(),A.create({message:"Process was successful",color:"positive"})}catch(f){s&&s(f),A.create({message:"Post LGA failed",color:"negative",icon:"warning",timeout:5e3})}})}static async getLgas(t={}){try{return await La(t)}catch{A.create({message:"Failed to fetch L.G.A.",color:"negative",icon:"warning",timeout:5e3})}}static async handlePostLgaWard(t,{onSuccess:l,onError:s}={}){t.on(Se.POST_LGA_WARD,async o=>{try{await Ta(o),l&&l(),A.create({message:"Process was successful",color:"positive",textColor:"white",position:"top"})}catch(f){s&&s(f),A.create({message:"Post LGA failed",color:"negative",icon:"warning",timeout:5e3})}})}static getLgaWards(t={}){try{return Ba(t)}catch{A.create({message:"Failed to fetch L.G.A.",color:"negative",icon:"warning",timeout:5e3})}}static handlePostStreet(t,{onSuccess:l,onError:s}={}){t.on(Se.POST_STREET,async o=>{try{await xa(o),await at().fetchServerData({type:"street"}),l&&l(),A.create({message:"Process was successful",color:"positive",textColor:"white",position:"top"})}catch(f){s&&s(f),A.create({message:"Post LGA failed",color:"negative",textColor:"white",position:"top"})}})}static getStreets(t={}){try{return Aa(t)}catch{A.create({message:"Failed to fetch L.G.A.",color:"negative",textColor:"white",position:"top",icon:"warning",timeout:5e3})}}}const Ea=await Xt(Ye.LGA_WARD_STREET)||{},at=Mt("lgaWardStreet",{state:()=>({streets:Ea.streets}),getters:{},actions:{async fetchServerData({type:e}){const l={street:async()=>{const s=await $a.getStreets();this.streets=s}}[e];l==null||l()}}});at().$subscribe(async(e,t)=>{await Yt(Ye.LGA_WARD_STREET,{...t},l=>{console.log(`Encountered error while updating ${e.storeId} store.`,l==null?void 0:l.message)})});function Ja({type:e="positive",message:t}={}){A.create({message:t||e==="negative"?"Process failed":"Process was successful",type:e,timeout:e==="positive"?300:5e3})}const Xa=re({__name:"DialogCard",props:{width:{default:"100%"},height:{default:"100%"},bgColor:{default:"accent"},maxWidth:{default:"80rem"}},setup(e){return re({name:"dialog-card"}),(t,l)=>(Ue(),Ie(zt,{style:Je({width:t.width,maxWidth:t.maxWidth,height:t.height,backgroundColor:t.$getColor(t.bgColor)})},{default:Ke(()=>[Xe(t.$slots,"default")]),_:3},8,["style"]))}});function Ne(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var Ya=Nt({name:"close-popup",beforeMount(e,{value:t}){const l={depth:Ne(t),handler(s){l.depth!==0&&setTimeout(()=>{const o=It(e);o!==void 0&&Kt(o,s,l.depth)})},handlerKey(s){jt(s,13)===!0&&l.handler(s)}};e.__qclosepopup=l,e.addEventListener("click",l.handler),e.addEventListener("keyup",l.handlerKey)},updated(e,{value:t,oldValue:l}){t!==l&&(e.__qclosepopup.depth=Ne(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{Ya as C,$a as L,Ha as Q,Wa as _,Ja as a,Xa as b,Zt as c,Ua as l,Ia as m,at as u,Ka as y};
