import{j as A,k as u,l as n,S as r}from"./index.1a32d67c.js";const g=async(a,e)=>{try{return await u.getItem(a)}catch(t){e==null||e(t)}},c=async(a,e,t)=>{try{const o=JSON.stringify(e);await u.setItem(a,o)}catch(o){console.log("this is the error from storeforage: ",o),t==null||t(o)}},T=(a,e)=>a.state.value[e];var _=A(async({app:a,redirect:e,router:t})=>{a.provide("localforage",n);const o=await g(r.AUTH_USER_DATA);o||(console.log("no authUserData found, initializing authUserData"),await n.setItem(r.AUTH_USER_DATA,o));const s=await g(r.LGA_WARD_STREET);s||(console.log("Initializing lgaWardStreet: ",s),await n.setItem(r.LGA_WARD_STREET,s)),console.log("this is the current route ",t.currentRoute.value.path),t.beforeEach(async(h,S,f)=>{if(["/auth/signin"].includes(h.path))f();else{const i=JSON.parse(await g(r.AUTH_USER_DATA));i!=null&&i.token?f():e("/auth/signin")}})});export{_ as default,g as forageGetItem,c as forageSetItem,T as getStoreState};
