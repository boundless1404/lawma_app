import{b as v,Q as x}from"./QCard.d54994a6.js";import{Q as C}from"./QPage.a3a75fb8.js";import{cJ as S,d as b,c0 as A,c as I,o as Q,aQ as t,ac as T,bj as _,ae as o,aW as y,W as w,F as h,U as P,f as g,af as u,X as r,aT as U,aR as j}from"./index.1280a497.js";import{u as W}from"./billing-store.dad8f955.js";import"./storeforage.79224312.js";const E=i=>(U("data-v-31f1a2a3"),i=i(),j(),i),L=E(()=>u("p",{style:{"font-weight":"800"}},"Billing Details",-1)),R=b({__name:"PrintPage",setup(i){const k=W(),{billingDetails:p}=A(k),N=I(()=>{var f;if(p!=null&&p.value){const c=p.value.length,d=[];for(let a=0;a<c;){let s=a;const n=a+4>c?c:a+4,e=[];for(let l=0;l<n;){const m=s+2>n?n:s+2,B=(f=p.value)==null?void 0:f.slice(s,m);l=s=m,e.push(B)}a=n,d.push(e)}return d}else return[]});return console.log("this is the billing details: ",p),Q(()=>{}),(f,c)=>(t(),T(C,{class:"print-page"},{default:_(()=>[(t(!0),o(h,null,y(N.value,(d,a)=>(t(),o("div",{key:a,class:"flex column justify-between q-pa-md q-gutter-lg",style:w({pageBreakAfter:"always",page:`${a}`})},[(t(!0),o(h,null,y(d,(s,n)=>(t(),o("div",{key:n,class:P(`flex row ${s.length>1?"justify-around":""}`),style:w({...s.length>1?{}:{marginRight:"3vw"}})},[(t(!0),o(h,null,y(s,e=>(t(),o("div",{key:e.PropertySubscriptionId},[g(x,{style:{width:"46vw",height:"auto",marginTop:"0.2vh",wordWrap:"break-word",wordBreak:"break-all",overflowWrap:"break-word",hyphens:"auto"}},{default:_(()=>[g(v,{class:"flex row justify-evenly",style:{width:"100%",height:"4rem","margin-bottom":"1.5rem"}}),g(v,{class:P(`billing-details ${n%2>0?"odd-row":""} `),style:{width:"50vw",height:"36vh"}},{default:_(()=>[u("p",null,r(e.propertyName)+" of "+r(e.streetNumber)+" "+r(e.streetName),1),u("div",null,[L,(t(!0),o(h,null,y(e.propertyUnits,(l,m)=>(t(),o("p",{key:m}," Property: "+r(l.propertyType)+" | Units: "+r(l.propertyUnits)+" | Amount: N"+r(Number(l.propertyTypeUnitPrice)*Number(l.propertyUnits)),1))),128)),u("p",null,"Arrears: N"+r(e.arrears||0),1),u("p",null,"Last Payment: N"+r(e.lastPayment||0),1),u("p",null,"Total: N"+r(e.totalBilling||0),1)])]),_:2},1032,["class"])]),_:2},1024)]))),128))],6))),128))],4))),128))]),_:1}))}});var D=S(R,[["__scopeId","data-v-31f1a2a3"]]);export{D as default};
