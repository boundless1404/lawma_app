import{P as C,Q as _,b as $,c as E,d as k}from"./PropertyType.model.6ebd1123.js";import{i as U,P as v,Q as B}from"./PropertySubscription.handler.4e71fdc4.js";import{Q as O,b as f}from"./QCard.e8f49576.js";import{d as j,E as b,Q as q,e as P}from"./index.8e60f3a8.js";import{d as M,r as d,i as R,C as F,c as I,w as N,aI as Y,o as x,aQ as H,ac as W,bj as i,af as r,f as t,W as y,O as z,bH as g,cj as A}from"./index.14fc9cfe.js";import{Q as D}from"./QPage.16adb6f9.js";import{c as T,i as G}from"./utils.01331f21.js";import"./QResizeObserver.22689ac6.js";import"./format.1c183612.js";import"./touch.3df10340.js";import"./urlPaths.enum.9088486d.js";import"./axios.bec32203.js";import"./storeforage.be186310.js";import"./default.request.0785e669.js";const J={class:"row justify-between items-center"},K={class:"q-mt-xl",style:{"margin-top":"15vh"}},L={class:"q-mt-lg",style:{height:"70vh"}},X={class:"q-gutter-md"},Z={class:"flex row justify-center"},ve=M({__name:"SettingsPage",setup(ee){const s=d("Property Types"),u=d([]),h=d(),m=d(),p=R("eventBus"),n=U();let c;const o=F(new C),Q=I(()=>u.value.map(a=>({label:`${a.name} - ${a.unitPrice}`,value:a.id})));j(async()=>{await o.validate()});function V(){var a;G(o)||(a=h.value)==null||a.validate(),n.loading.show({message:"Submitting ..."}),p.emit(b.POST_PROPERTY_TYPE,o),c=setTimeout(()=>{n.loading.hide()},2e3)}function w(){o.clearValues(),T({loader:n.loading,timer:c})}function S(){T({loader:n.loading,timer:c})}return N(m,a=>{if(a){const e=u.value.find(l=>l.id===a);e&&(o.id=e.id,o.name=e.name,o.unitPrice=e.unitPrice)}else o.id=void 0,o.name="",o.unitPrice=0}),Y(()=>{p.off(b.POST_PROPERTY_TYPE)}),x(async()=>{u.value=await v.getPropertyTypes(),v.handlePostPropertyType(p,{onSuccess:w,onError:S})}),(a,e)=>(H(),W(D,null,{default:i(()=>[r("div",{style:y({backgroundColor:`${a.$getColor("light-page")}`,height:"100vh",padding:"0 1rem",width:"100%"})},[r("div",J,[r("div",K,[t($,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l),dense:"","active-color":"dark","active-bg-color":"secondary"},{default:i(()=>[t(_,{name:"Property Types",icon:"home",label:"Property Types",style:{width:"15rem"}},null,8,["name","label"])]),_:1},8,["modelValue"])])]),r("div",L,[t(k,{modelValue:s.value,"onUpdate:modelValue":e[5]||(e[5]=l=>s.value=l),style:{"background-color":"inherit",height:"100%"}},{default:i(()=>[t(E,{name:"Property Types"},{default:i(()=>[r("div",null,[r("div",{style:y({width:"15rem",backgroundColor:`${a.$getColor("accent")}`,padding:"1rem",borderRadius:"0.4rem",boxShadow:""})},[r("div",{style:y({borderColor:`${a.$getColor("primary")}`,borderWidth:"0.1rem",borderStyle:"solid"})},[t(B,{class:"bg-secondary",label:"Property Type",modelValue:m.value,"onUpdate:modelValue":e[1]||(e[1]=l=>m.value=l),options:Q.value,"emit-value":"","map-options":"",clearable:""},null,8,["modelValue","options"])],4)],4),t(O,{rounded:"",class:"bg-accent q-mt-lg"},{default:i(()=>[t(f),r("div",null,[r("div",null,[t(f,null,{default:i(()=>[t(z(q),{onSubmit:e[4]||(e[4]=g(()=>{},["prevent"])),style:{width:"50vh",margin:"auto"}},{default:i(()=>[r("div",X,[t(P,{label:"Name",type:"text",modelValue:o.name,"onUpdate:modelValue":e[2]||(e[2]=l=>o.name=l),filled:"",outlined:"",color:"secondary","label-color":"dark",rules:[()=>a.$validateField(o,"name")]},null,8,["modelValue","rules"]),t(P,{label:"Unit Price",type:"number",modelValue:o.unitPrice,"onUpdate:modelValue":e[3]||(e[3]=l=>o.unitPrice=l),filled:"",outlined:"",color:"secondary","label-color":"dark",rules:[()=>a.$validateField(o,"unitPrice")]},null,8,["modelValue","rules"])]),r("div",Z,[t(A,{style:{width:"40%"},label:"submit",type:"submit",color:"primary",rounded:"",onClick:g(V,["prevent"])})])]),_:1})]),_:1})])])]),_:1})])]),_:1},8,["name"])]),_:1},8,["modelValue"])])],4)]),_:1}))}});export{ve as default};
