import{H as l,a as E,E as a}from"./index-BJY6kUZk.js";const i=async(t,r,o,c,n,p,R,u,m)=>{try{const s=`${l}/mssql/code-help-combo-query`,e=await E.get(s,{params:{workingTag:t,languageSeq:r,codeHelpSeq:o,companySeq:c,keyword:n,param1:p,param2:R,param3:u,param4:m},headers:{"Content-Type":"application/json"}});return e.status===200?{success:!0,data:e.data.data}:{success:!1,message:a.ERROR}}catch(s){return{success:!1,message:s.response?s.response.data.message:a.ERROR}}};export{i as G};
