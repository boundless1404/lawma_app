import{api as i}from"./axios.176a46be.js";async function o(t,r="get",s={}){const e=await i[r](t,s!=null&&s.body?s.body:{params:s==null?void 0:s.params}),n=e.status;if(![200,201,204].includes(n))throw new Error("Request failed",{cause:e.data});return e.data}export{o as r};
