import{Q as n}from"./QBadge.9f47bfcd.js";import{d as r,aQ as i,ac as l,bj as m,W as p,al as u,S as s,ci as d}from"./index.1a32d67c.js";import{forageGetItem as c,forageSetItem as g}from"./storeforage.28380509.js";const S=r({__name:"LawmaAppBadge",props:{color:{type:String,default:"dark"}},setup(e){return r({name:"LawmaAppBadge"}),(t,o)=>(i(),l(n,{class:"text-body1 text-bold",style:p({border:`0.1rem solid  ${t.$getColor(e.color)}`,backgroundColor:"transparent",padding:"1rem 0.5rem",color:t.$getColor(e.color),cursor:"pointer"}),onClick:o[0]||(o[0]=h=>t.$router.push({path:"/auth/signin"}))},{default:m(()=>[u("Lawma App")]),_:1},8,["style"]))}}),a=c(s.AUTH_USER_DATA)||{};a.token="this is the token";const T=d("auth",{state:()=>({token:a.token,userData:a.userData,profile:a.profile}),getters:{getToken(){return this.token}},actions:{async handleAuthToken(e){this.token=e,await g(s.AUTH_USER_DATA,{...this.$state},t=>{})}}});export{S as _,T as u};
