import{forageGetItem as s}from"./storeforage.9751bfd5.js";import{S as a,ci as n}from"./index.5b1aa9bb.js";const o=await s(a.LGA_WARD_STREET)||{},m=n("billingStore",{state:()=>({billingDetails:o.billingDetails}),getters:{},actions:{async updateBilling({type:e,data:l}){var t;const i={billingDetail:()=>{this.billingDetails=l}};(t=i[e])==null||t.call(i)}}});export{m as u};
