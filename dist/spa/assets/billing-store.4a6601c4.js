import{forageGetItem as s}from"./storeforage.a42897fd.js";import{S as a,ci as n}from"./index.a3c3c2fc.js";const o=await s(a.LGA_WARD_STREET)||{},m=n("billingStore",{state:()=>({billingDetails:o.billingDetails}),getters:{},actions:{async updateBilling({type:e,data:l}){var t;const i={billingDetail:()=>{this.billingDetails=l}};(t=i[e])==null||t.call(i)}}});export{m as u};
