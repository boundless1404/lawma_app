import{Q as B}from"./QBadge.95feb921.js";import{b as P,Q as k}from"./QCard.567eb8ba.js";import{Q}from"./QPage.9da907d5.js";import{d as w,b$ as x,c as C,o as A,aQ as t,ac as T,bj as d,ae as s,aW as y,W as U,F as f,U as S,f as h,af as p,X as r,al as j}from"./index.e813c677.js";import{u as b}from"./billing-store.0a570296.js";import"./storeforage.7592d9ac.js";const D=w({__name:"PrintPage",setup(E){const N=b(),{billingDetails:l}=x(N),_=C(()=>{var g;if(l!=null&&l.value){const i=l.value.length,c=[];for(let a=0;a<i;){let o=a;const u=a+4>i?i:a+4,e=[];for(let n=0;n<u;){const m=o+2>u?u:o+2,v=(g=l.value)==null?void 0:g.slice(o,m);n=o=m,e.push(v)}a=u,c.push(e)}return c}else return[]});return console.log("this is the billing details: ",l),A(()=>{}),(g,i)=>(t(),T(Q,null,{default:d(()=>[(t(!0),s(f,null,y(_.value,(c,a)=>(t(),s("div",{key:a,class:"flex column justify-between q-pa-md q-gutter-lg",style:U({pageBreakAfter:"always",page:`${a}`})},[(t(!0),s(f,null,y(c,(o,u)=>(t(),s("div",{key:u,class:S(`flex row ${o.length>1?"justify-around":"justify-start"}`)},[(t(!0),s(f,null,y(o,e=>(t(),s("div",{key:e.PropertySubscriptionId},[h(k,{style:{width:"40vw",height:"30vh",marginTop:"4rem"}},{default:d(()=>[h(P,null,{default:d(()=>[p("p",null,r(e.propertyName)+" of "+r(e.streetNumber)+" "+r(e.streetName),1),p("div",null,[h(B,{color:"primary"},{default:d(()=>[j("Billing Details")]),_:1}),(t(!0),s(f,null,y(e.propertyUnits,(n,m)=>(t(),s("p",{key:m}," Property: "+r(n.propertyType)+" | Units: "+r(n.propertyUnits)+" | Amount: N"+r(Number(n.propertyTypeUnitPrice)*Number(n.propertyUnits)),1))),128)),p("p",null,"Arrears: N"+r(e.arrears||0),1),p("p",null,"Last Payment: N"+r(e.lastPayment||0),1),p("p",null,"Total: N"+r(e.totalBilling||0),1)])]),_:2},1024)]),_:2},1024)]))),128))],2))),128))],4))),128))]),_:1}))}});export{D as default};
