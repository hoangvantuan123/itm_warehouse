import{a as e,aK as a}from"./index-BWL2-FO5.js";import{a as t}from"./tokenService-RV9uH5MW.js";const c=async()=>{try{const s=t();return{success:!0,data:(await e.get(`${a}/mssql/system-users/itm-root-menu-all`,{params:{},headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"}})).data}}catch(s){return{success:!1,message:s.response?s.response.data.message||"Có lỗi xảy ra":"Không thể kết nối tới server"}}};export{c as G};