import{S as e,ci as a}from"./index.1ba8881a.js";import{forageGetItem as r,forageSetItem as s}from"./storeforage.f2a38968.js";const t=r(e.AUTH_USER_DATA)||{};t.token="this is the token";const h=a("auth",{state:()=>({token:t.token,userData:t.userData,profile:t.profile}),getters:{getToken(){return this.token}},actions:{async handleAuthToken(o){this.token=o,await s(e.AUTH_USER_DATA,{...this.$state},n=>{})}}});export{h as u};