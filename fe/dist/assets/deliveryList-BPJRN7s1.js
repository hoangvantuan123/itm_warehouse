import{j as e,B as J,R as se,r as t,H as ae,a as le,F as b,b as ne,C as Q,I as ie,u as re,c as oe,d as ce,T as de,s as H,e as ue}from"./index-BPn8KAXb.js";import{A as me}from"./index-BYE3Spul.js";import{d as V}from"./dayjs.min-CHExSrHM.js";import{R as pe}from"./SaveOutlined-B0ZBxW30.js";import{C as X,G as l,D as xe,a as he}from"./index-B6W0O72N.js";import{R as fe}from"./moment-BmXhaOu0.js";import{D as W,G as ye,s as ge}from"./getCodeHelpCombo-DF_YIyZk.js";import{E as Z}from"./constants-BUjU6TAr.js";import{S as De}from"./index-CL66vMT2.js";import{l as Se}from"./lodash-80n_6iVG.js";import"./vi-DiGLW6k_.js";import{R as Ce}from"./FilterOutlined-BWMss98U.js";import"./DownOutlined-DX8qeNnK.js";function Ne({fetchData:d,nextPageStockIn:p}){return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(J,{type:"default",icon:e.jsx(pe,{}),size:"middle",className:"uppercase",color:"default",variant:"filled",style:{backgroundColor:"#f0f0f0",borderColor:"#d9d9d9"},onClick:p,children:"STOCK IN (IQC)"},"Reset"),e.jsx(J,{type:"primary",icon:e.jsx(se,{}),size:"middle",className:"uppercase",onClick:d,children:"SEARCH"},"Save")]})}function ve({data:d,onCellClicked:p,gridData:o,setGridData:x}){const[u,m]=t.useState(!1),R=t.useCallback(()=>m(!1),[]),[S,y]=t.useState({columns:X.empty(),rows:X.empty()}),g=t.useMemo(()=>[{title:"DelvNo"},{title:"DelvMngNo"},{title:"ImpType"},{title:"TotalQty"},{title:"OkQty"},{title:"RemainQty"},{title:"DelvDate"},{title:"CustSeq"},{title:"CustNm"},{title:"DomOrImp"},{title:"PurchaseType"},{title:"BizUnitName"},{title:"BizUnit"},{title:"EmpSeq"},{title:"EmpName"},{title:"DeptSeq"},{title:"DeptName"},{title:"CurrSeq"},{title:"CurrName"},{title:"ExRate"}],[]),[h,C]=t.useState(g),n=t.useCallback((r,N)=>{const D=h.indexOf(r);if(D!==-1){const v={...r,width:N},f=[...h];f.splice(D,1,v),C(f)}},[h]),U=t.useCallback(([r,N])=>{const D=o[N]||{},{DelvNo:v="",DelvMngNo:f="",ImpType:k="",TotalQty:F="",OkQty:L="",RemainQty:I="",DelvDate:K="",CustSeq:M="",CustNm:j="",DomOrImp:q="",PurchaseType:$="",BizUnitName:z="",BizUnit:T="",EmpSeq:Y="",EmpName:A="",DeptSeq:O="",DeptName:w="",CurrSeq:G="",CurrName:_="",ExRate:i=""}=D,s=a=>a!=null?String(a):"",c={0:{kind:l.Text,data:s(v)},1:{kind:l.Text,data:s(f)},2:{kind:l.Text,data:s(k)},3:{kind:l.Text,data:s(F)},4:{kind:l.Text,data:s(L)},5:{kind:l.Text,data:s(I)},6:{kind:l.Text,data:s(K)},7:{kind:l.Text,data:s(M)},8:{kind:l.Text,data:s(j)},9:{kind:l.Text,data:s(q)},10:{kind:l.Text,data:s($)},11:{kind:l.Text,data:s(z)},12:{kind:l.Text,data:s(T)},13:{kind:l.Text,data:s(Y)},14:{kind:l.Text,data:s(A)},15:{kind:l.Text,data:s(O)},16:{kind:l.Text,data:s(w)},17:{kind:l.Text,data:s(G)},18:{kind:l.Text,data:s(_)},19:{kind:l.Text,data:s(i)}};if(c.hasOwnProperty(r)){const{kind:a,data:B}=c[r];return{kind:a,data:B,displayData:B}}return{kind:l.Text,data:"",displayData:""}},[o]),[E,P]=t.useState(void 0);return t.useCallback(r=>{console.log("cell",r),P(r)},[]),t.useEffect(()=>{x(d)},[d]),e.jsx("div",{className:"w-full gap-1 h-full flex items-center justify-center pb-8",children:e.jsxs("div",{className:"w-full h-full flex flex-col border bg-white rounded-lg overflow-hidden ",children:[e.jsxs("h2",{className:"text-xs font-medium flex items-center gap-2 p-2 text-blue-600 uppercase",children:[e.jsx(fe,{}),"DATA SHEET"]}),e.jsx(xe,{columns:h,getCellContent:U,rows:o.length,showSearch:u,getCellsForSelection:!0,onSearchClose:R,width:"100%",height:"100%",rowMarkers:"both",useRef:t.useRef,onColumnResize:n,smoothScrollY:!0,smoothScrollX:!0,onCellClicked:p,rowSelect:"single",gridSelection:S,onGridSelectionChange:y,getRowThemeOverride:r=>r%2===0?void 0:{bgCell:"#FBFBFB"}})]})})}const ke=async(d,p,o,x)=>{try{const u=`${ae}/mssql/deliverry-list/itm-sug-get-active-delivery-web`,m=await le.get(u,{params:{fromDate:d,toDate:p,deliveryNo:o,delivbizUniteryNo:x},headers:{"Content-Type":"application/json"}});return m.status===200?{success:!0,data:m.data.data}:{success:!1,message:Z.ERROR}}catch(u){return{success:!1,message:u.response?u.response.data.message:Z.ERROR}}};function je({formData:d,setFormData:p,setDeliveryNo:o,setToDate:x,toDate:u,deliveryNo:m,bizUnit:R,setBizUnit:S,dataUnit:y}){const g=n=>{p(n)},h=n=>{x(n)},C=n=>{S(n)};return e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(b,{layout:"vertical",children:e.jsxs(ne,{className:"gap-4 flex items-center ",children:[e.jsx(Q,{children:e.jsx(b.Item,{label:e.jsx("span",{className:"uppercase text-[10px]",children:"Date 1"}),className:"mb-0",children:e.jsx(W,{className:"w-full text-sm p-2",value:d,onChange:g})})}),e.jsx(Q,{children:e.jsx(b.Item,{label:e.jsx("span",{className:"uppercase text-[10px]",children:"Date 2"}),className:"mb-0",children:e.jsx(W,{className:"w-full text-sm p-2",value:u,onChange:h,format:"YYYY-MM-DD"})})}),e.jsx(Q,{children:e.jsx(b.Item,{label:e.jsx("span",{className:"uppercase text-[10px]",children:"Delivery No"}),className:"mb-0",children:e.jsx(ie,{placeholder:"",value:m,size:"small",onChange:n=>o(n.target.value),className:" text-sm p-2"})})}),e.jsx(Q,{children:e.jsx(b.Item,{label:e.jsx("span",{className:"uppercase text-[10px]",children:"Acc Unit"}),className:"mb-0",children:e.jsx(De,{id:"typeSelect",defaultValue:"All",size:"large",style:{width:190},onChange:C,options:y==null?void 0:y.map(n=>({label:n==null?void 0:n.AccUnitName,value:n==null?void 0:n.BizUnit}))})})})]})})})}const{Title:Te,Text:Fe}=de;function Le({permissions:d,isMobile:p}){const{t:o}=re();t.useRef(null);const x=oe(),[u,m]=t.useState(!1),[R,S]=t.useState(!1),[y,g]=t.useState([]),[h,C]=t.useState([]),[n,U]=t.useState(V().startOf("month")),[E,P]=t.useState(V()),[r,N]=t.useState(""),[D,v]=t.useState(4);t.useState(null);const[f,k]=t.useState(null),[F,L]=t.useState(!1),I=t.useCallback(i=>i.format("YYYYMMDD"),[]),[K,M]=t.useState(!1),[j,q]=t.useState(null),[$,z]=t.useState(null);t.useState([]);const[T,Y]=t.useState([]),A=async()=>{m(!0);const i=H.loading("Đang tải dữ liệu, vui lòng chờ...",0);try{const s=await ke(n?I(n):"",E?I(E):"",r,D),c=(s==null?void 0:s.data)||[];g(c),i(),H.success("Tải dữ liệu thành công!")}catch{g([]),i(),ge.destroy(),H.error("Có lỗi xảy ra khi tải dữ liệu.")}finally{m(!1)}},O=t.useCallback(async()=>{S(!0);try{const i=await ye("",6,10003,1,"%","","","","");C((i==null?void 0:i.data)||[])}catch{C([])}finally{S(!1)}},[]),w=t.useMemo(()=>Se.debounce(O,100),[O]),G=t.useCallback(()=>{f&&x(`/u/warehouse/material/waiting-iqc-stock-in/${f}`)},[f,x]),_=(i,s)=>{let c;if(i[0]===-1){if(i[0]===-1?(c=i[1],M(!0)):(c=i[0],M(!1)),j&&j[0]===i[0]&&j[1]===i[1]){k(null),q(null),z(null);return}if(c>=0&&c<T.length){const a=T[c],B={DelvNo:a.DelvNo,DelvMngNo:a.DelvMngNo,ImpType:a.ImpType,TotalQty:a.TotalQty,OkQty:a.OkQty,RemainQty:a.RemainQty,DelvDate:a.DelvDate,CustSeq:a.CustSeq,CustNm:a.CustNm,DomOrImp:a.DomOrImp,PurchaseType:a.PurchaseType,BizUnitName:a.BizUnitName,BizUnit:a.BizUnit,EmpSeq:a.EmpSeq,EmpName:a.EmpName,DeptSeq:a.DeptSeq,DeptName:a.DeptName,CurrSeq:a.CurrSeq,CurrName:a.CurrName,ExRate:a.ExRate},ee=he.AES.encrypt(JSON.stringify(B),"TEST_ACCESS_KEY").toString(),te=ue(ee);k(te),z(a),q(i)}}};return t.useEffect(()=>{A()},[]),t.useEffect(()=>(w(),()=>{w.cancel()}),[w]),e.jsxs(e.Fragment,{children:[e.jsx(ce,{children:e.jsxs("title",{children:["ITM - ",o("Delivery List")]})}),e.jsx("div",{className:"bg-slate-50 p-3 h-screen overflow-hidden",children:e.jsxs("div",{className:"flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full",children:[e.jsxs("div",{className:"col-start-1 col-end-5 row-start-1 w-full rounded-lg ",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(Te,{level:4,className:"mt-2 uppercase opacity-85 ",children:o("Delivery List")}),e.jsx(Ne,{fetchData:A,nextPageStockIn:G})]}),e.jsxs("details",{className:"group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white",open:!0,children:[e.jsxs("summary",{className:"flex cursor-pointer items-center justify-between gap-1.5 text-gray-900",children:[e.jsxs("h2",{className:"text-xs font-medium flex items-center gap-2 text-blue-600 uppercase",children:[e.jsx(Ce,{}),o("Điều kiện truy vấn")]}),e.jsx("span",{className:"relative size-5 shrink-0",children:e.jsx(me,{})})]}),e.jsx("div",{className:"flex p-2 gap-4",children:e.jsx(je,{formData:n,setFormData:U,setDeliveryNo:N,setToDate:P,toDate:E,deliveryNo:r,bizUnit:D,setBizUnit:v,dataUnit:h})})]})]}),e.jsx("div",{className:"col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto",children:e.jsx(ve,{data:y,setCheckedPath:L,checkedPath:F,setKeyPath:k,loading:R,setData:g,onCellClicked:_,setGridData:Y,gridData:T})})]})})]})}export{Le as default};
