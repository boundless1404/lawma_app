import{b as v,Q as C}from"./QCard.57086d01.js";import{Q as I}from"./QPage.b4adb419.js";import{cJ as A,d as Q,cK as T,c0 as U,c as w,o as R,aQ as r,ac as j,bj as f,ae as o,aW as h,W as k,F as _,U as P,f as g,af as c,X as t,aT as W,aR as E}from"./index.be2a11c2.js";import{u as L}from"./billing-store.1d8e4d4d.js";import"./storeforage.e75914af.js";const $=i=>(W("data-v-3a7b2a11"),i=i(),E(),i),q=$(()=>c("p",{style:{"font-weight":"800"}},"Billing Details",-1)),z=Q({__name:"PrintPage",setup(i){const N=T(),B=L(),{billingDetails:p}=U(B),S=w(()=>{var u;if(p!=null&&p.value){const d=p.value.length,m=[];for(let a=0;a<d;){let s=a;const n=a+4>d?d:a+4,e=[];for(let l=0;l<n;){const y=s+2>n?n:s+2,x=(u=p.value)==null?void 0:u.slice(s,y);l=s=y,e.push(x)}a=n,m.push(e)}return m}else return[]}),b=w(()=>{var u;return(u=N.params)==null?void 0:u.datestring});return console.log("this is the billing details: ",p),R(()=>{}),(u,d)=>(r(),j(I,{class:"print-page"},{default:f(()=>[(r(!0),o(_,null,h(S.value,(m,a)=>(r(),o("div",{key:a,class:"flex column justify-between q-pa-md q-gutter-lg",style:k({pageBreakAfter:"always",page:`${a}`})},[(r(!0),o(_,null,h(m,(s,n)=>(r(),o("div",{key:n,class:P(`flex row ${s.length>1?"justify-around":""}`),style:k({...s.length>1?{}:{marginRight:"3vw"}})},[(r(!0),o(_,null,h(s,e=>(r(),o("div",{key:e.propertySubscriptionId},[g(C,{style:{width:"46vw",height:"auto",marginTop:"0.2vh",wordWrap:"break-word",wordBreak:"break-all",overflowWrap:"break-word",hyphens:"auto"}},{default:f(()=>[g(v,{class:"flex row justify-evenly",style:{width:"100%",height:"4rem","margin-bottom":"1.5rem"}}),g(v,{class:P(`billing-details ${n%2>0?"odd-row":""} `),style:{width:"50vw",height:"36vh"}},{default:f(()=>[c("p",null," GRS-"+t(e.propertySubscriptionId)+" | "+t(e.propertyName)+" of "+t(e.streetNumber)+" "+t(e.streetName)+" | "+t(b.value),1),c("div",null,[q,(r(!0),o(_,null,h(e.propertyUnits,(l,y)=>(r(),o("p",{key:y}," Property: "+t(l.propertyType)+" | Units: "+t(l.propertyUnits)+" | Amount: N"+t(Number(l.propertyTypeUnitPrice)*Number(l.propertyUnits)),1))),128)),c("p",null,"Arrears: N"+t(e.arrears||0),1),c("p",null,"Last Payment: N"+t(e.lastPayment||0),1),c("p",null,"Total: N"+t(e.totalBilling||0),1)])]),_:2},1032,["class"])]),_:2},1024)]))),128))],6))),128))],4))),128))]),_:1}))}});var K=A(z,[["__scopeId","data-v-3a7b2a11"]]);export{K as default};
