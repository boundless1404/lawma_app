import{u as c,a as u}from"./QCard.e7e1ea28.js";import{bV as d,c as t,h as m,g as v,bY as f}from"./index.1ba8881a.js";const b={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},o={xs:2,sm:4,md:8,lg:16,xl:24};var x=d({name:"QSeparator",props:{...c,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const i=v(),n=u(e,i.proxy.$q),a=t(()=>e.vertical===!0?"vertical":"horizontal"),s=t(()=>` q-separator--${a.value}`),g=t(()=>e.inset!==!1?`${s.value}-${b[e.inset]}`:""),$=t(()=>`q-separator${s.value}${g.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),q=t(()=>{const r={};if(e.size!==void 0&&(r[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const h=e.spaced===!0?`${o.md}px`:e.spaced in o?`${o[e.spaced]}px`:e.spaced,l=e.vertical===!0?["Left","Right"]:["Top","Bottom"];r[`margin${l[0]}`]=r[`margin${l[1]}`]=h}return r});return()=>m("hr",{class:$.value,style:q.value,"aria-orientation":a.value})}}),k=d({name:"QList",props:{...c,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:i}){const n=v(),a=u(e,n.proxy.$q),s=t(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(a.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>m(e.tag,{class:s.value},f(i.default))}});export{x as Q,k as a};
