import{b as o,Q as c}from"./QCard.e8f49576.js";import{Q as _}from"./QPage.16adb6f9.js";import{U as x}from"./urlPaths.enum.9088486d.js";import{r as b}from"./default.request.0785e669.js";import{d as C,r as d,w as v,o as w,aY as $,aQ as k,ac as M,bj as e,af as a,f as t,al as l,X as i,W as n}from"./index.14fc9cfe.js";import"./axios.bec32203.js";import"./storeforage.be186310.js";class u{static async getDashboardMetrics(){return await b(x.DASHBOARD_METRICS,"get")}}const D={class:"flex column justify-evenly q-gutter-lg q-mb-xl",style:{width:"99.6%"}},q={class:"flex row justify-evenly",style:{height:"10rem",width:"100%"}},B={style:{"max-height":"max-content",width:"33%"}},A={style:{"max-height":"max-content",width:"33%"}},N={style:{"max-height":"max-content",width:"33%"}},P={class:"flex row justify-around",style:{width:"100%"}},Q={style:{width:"99%"}},S={class:"flex row justify-around",style:{height:"9rem",width:"100%"}},j={style:{width:"49.5%"}},T={style:{width:"49.5%"}},z=C({__name:"DashboardPage",setup(m){const r=d({streetCount:0,subscriberCount:0,properitesCount:0,totalBillings:0,totalPayments:0,billingAcrossMonths:[],paymentsAcrossMonths:[]}),h=d(1),f=d({chart:{id:"chart"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}}),g=d([{name:"Payments",data:[4e4,5e4,6e4,2e4,8e4,9e4,1e5,11e4,12e4,13e4,14e4,15e4]},{name:"Billings",data:[2e4,3e4,4e4,5e4,6e4,7e4,8e4,9e4,1e5,11e4,12e4,13e4]}]);return v(h,async s=>{if(s>1&&s<3)try{r.value=await u.getDashboardMetrics()}catch{console.log("Could not fetch dashboard metrics")}}),w(async()=>{try{r.value=await u.getDashboardMetrics()}catch{h.value<3?h.value++:console.log("Could not fetch dashboard metrics")}}),(s,y)=>{const p=$("apexchart");return k(),M(_,null,{default:e(()=>[a("div",{style:n({backgroundColor:`${s.$getColor("light-page")}`,padding:"3rem 1rem",width:"100%"})},[a("div",D,[a("div",q,[a("div",B,[t(c,{class:"q-pa-sm flex column flex-center",style:n({height:"9rem",width:"100%",backgroundColor:`${s.$getColor("accent")}`})},{default:e(()=>[t(o,{class:"text-h6",style:{display:"block"}},{default:e(()=>[l(i(r.value.subscriberCount),1)]),_:1}),t(o,{class:"text-h6 text-bolder"},{default:e(()=>[l("Number of subscribers")]),_:1})]),_:1},8,["style"])]),a("div",A,[t(c,{class:"q-pa-sm flex column flex-center",style:n({height:"9rem",width:"100%",backgroundColor:`${s.$getColor("accent")}`})},{default:e(()=>[t(o,{class:"text-h6"},{default:e(()=>[l(i(r.value.streetCount),1)]),_:1}),t(o,{class:"text-h6 text-bolder"},{default:e(()=>[l(" Number of street")]),_:1})]),_:1},8,["style"])]),a("div",N,[t(c,{class:"q-pa-sm flex column flex-center",style:n({height:"9rem",width:"100%",backgroundColor:`${s.$getColor("accent")}`})},{default:e(()=>[t(o,{class:"text-h6"},{default:e(()=>[l(i(r.value.properitesCount),1)]),_:1}),t(o,{class:"text-h6 text-bolder"},{default:e(()=>[l("Number of properties ")]),_:1})]),_:1},8,["style"])])]),a("div",P,[a("div",Q,[t(c,{style:n({height:"24rem",backgroundColor:`${s.$getColor("accent")}`})},{default:e(()=>[t(p,{type:"line",height:"360",options:f.value,series:g.value},null,8,["options","series"])]),_:1},8,["style"])])]),a("div",S,[a("div",j,[t(c,{class:"q-pa-sm flex column flex-center",style:n({height:"9rem",width:"100%",backgroundColor:`${s.$getColor("accent")}`})},{default:e(()=>[t(o,{class:"text-h6"},{default:e(()=>[l(i(r.value.totalBillings),1)]),_:1}),t(o,{class:"text-h6 text-bolder"},{default:e(()=>[l(" Total Billings for month")]),_:1})]),_:1},8,["style"])]),a("div",T,[t(c,{class:"q-pa-sm flex column flex-center",style:n({height:"9rem",width:"100%",backgroundColor:`${s.$getColor("accent")}`})},{default:e(()=>[t(o,{class:"text-h6"},{default:e(()=>[l(i(r.value.totalPayments),1)]),_:1}),t(o,{class:"text-h6 text-bolder"},{default:e(()=>[l(" Total Payments for month")]),_:1})]),_:1},8,["style"])])])])],4)]),_:1})}}});export{z as default};