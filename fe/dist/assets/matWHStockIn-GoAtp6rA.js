import{j as t,B as ne,r as a,G as i,D as le,f as V,F as X,b as ie,c as re,I as ce,M as oe,H as G,a as J,E as K,u as me,e as ue,i as de,C as P,g as Se,T as pe}from"./index-BRdHSrU3.js";import{R as he}from"./SaveOutlined-i11tk4Wt.js";import"./index-BDn69Ycw.js";import{L as xe,S as ge}from"./successSubmit-Bn39uEys.js";import{A as De}from"./index-BZXw2AV1.js";import{C as Y}from"./index-BEDMd2lo.js";import{R as Ie}from"./ExclamationCircleOutlined-Cj092FXG.js";import{E as fe}from"./errorPage-CLsPLwyl.js";import{a as Ne}from"./tokenService-BioOSVnB.js";import{R as ke}from"./FilterOutlined-C28rl2Mj.js";function Oe({status:m,handleSubmit:o}){return t.jsxs("div",{className:"flex items-center gap-2",children:[m?t.jsx(t.Fragment,{children:t.jsx("span",{className:"inline-flex items-center justify-center rounded-lg w-20 bg-emerald-100 px-5 py-[6px] text-emerald-700",children:t.jsx("p",{className:"whitespace-nowrap text-sm",children:"LIVE"})})}):t.jsx(t.Fragment,{children:t.jsx("span",{className:"inline-flex items-center justify-center rounded-lg w-20 bg-red-100 px-5 py-[6px] text-red-700",children:t.jsx("p",{className:"whitespace-nowrap text-sm",children:"OFF"})})}),t.jsx(ne,{type:"primary",icon:t.jsx(he,{}),size:"middle",className:"uppercase",onClick:o,style:{backgroundColor:"#52c41a",borderColor:"#52c41a"},children:"Save"},"Save")]})}function qe({data:m}){const[o,l]=a.useState(!1),c=a.useCallback(()=>l(!1),[]),u=a.useMemo(()=>[{title:"InOutDate"},{title:"WaitWhName"},{title:"WaitWhSeq"},{title:"MatWhName"},{title:"MatWhSeq"},{title:"BizUnitName"},{title:"BizUnit"},{title:"ItemSeq"},{title:"ItemNo"},{title:"ItemName"},{title:"Spec"},{title:"UnitSeq"},{title:"UnitName"},{title:"Qty"},{title:"LotNo"},{title:"RegDate"},{title:"EmpSeq"},{title:"EmpName"},{title:"DeptSeq"},{title:"DeptName"}],[]),[x,y]=a.useState(u),L=a.useCallback((r,S)=>{const D=x.indexOf(r);if(D!==-1){const p={...r,width:S},I=[...x];I.splice(D,1,p),y(I)}},[x]),g=a.useCallback(([r,S])=>{const D=m[S]||{},{InOutDate:p="",WaitWhName:I="",WaitWhSeq:W="",MatWhName:M="",MatWhSeq:h="",BizUnitName:j="",BizUnit:C="",ItemSeq:$="",ItemNo:O="",ItemName:U="",Spec:b="",UnitSeq:v="",UnitName:F="",Qty:A="",LotNo:R="",RegDate:w="",EmpSeq:z="",EmpName:T="",DeptSeq:H="",DeptName:Q=""}=D,n=f=>f!=null?String(f):"",E={0:{kind:i.Text,data:n(p)},1:{kind:i.Text,data:n(I)},2:{kind:i.Text,data:n(W)},3:{kind:i.Text,data:n(M)},4:{kind:i.Text,data:n(h)},5:{kind:i.Text,data:n(j)},6:{kind:i.Text,data:n(C)},7:{kind:i.Text,data:n($)},8:{kind:i.Text,data:n(O)},9:{kind:i.Text,data:n(U)},10:{kind:i.Text,data:n(b)},11:{kind:i.Text,data:n(v)},12:{kind:i.Text,data:n(F)},13:{kind:i.Text,data:n(A)},14:{kind:i.Text,data:n(R)},15:{kind:i.Text,data:n(w)},16:{kind:i.Text,data:n(z)},17:{kind:i.Text,data:n(T)},18:{kind:i.Text,data:n(H)},19:{kind:i.Text,data:n(Q)}};if(E.hasOwnProperty(r)){const{kind:f,data:B}=E[r];return{kind:f,data:B,displayData:B}}return{kind:i.Text,data:"",displayData:""}},[m]),[Z,k]=a.useState(void 0);return a.useCallback(r=>{console.log("cell",r),k(r)},[]),t.jsx("div",{className:"w-full h-full border-t border-b overflow-hidden scroll-container ",children:t.jsx(le,{columns:x,getCellContent:g,rows:m.length,showSearch:o,getCellsForSelection:!0,onSearchClose:c,width:"100%",height:"100%",rowMarkers:"both",useRef:a.useRef,onColumnResize:L,smoothScrollY:!0,smoothScrollX:!0,rowSelect:"multi"})})}V.locale("vi");function ye({filteredData:m}){const[o]=a.useState(V()),l=c=>{const u=c.format("dddd");return`${u.charAt(0).toUpperCase()+u.slice(1)}, ${c.format("DD/MM/YYYY")}`};return t.jsx("div",{className:"flex items-center gap-2",children:t.jsx(X,{layout:"vertical",children:t.jsx(ie,{className:"gap-4 flex items-center",children:t.jsx(re,{children:t.jsx(X.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"Date"}),className:"mb-0",children:t.jsx(ce,{value:l(o),size:"small",className:"text-sm p-2",readOnly:!0})})})})})})}function We({modal2Open:m,setModal2Open:o,error:l}){return t.jsx(oe,{centered:!0,open:m,onOk:()=>o(!1),onCancel:()=>o(!1),closable:!1,footer:!1,children:t.jsxs("div",{className:"items-center justify-center flex flex-col",children:[t.jsx(Ie,{className:" text-4xl mb-2 text-red-500"}),t.jsx("p",{className:"mt-10 text-lg",children:l})]})})}const Ce=async(m,o)=>{try{const l=`${G}/mssql/stock-in/itm-spd-mat-wh-stockin-list`,c=await J.get(l,{params:{blSeq:m,blSerl:o},headers:{"Content-Type":"application/json"}});return c.status===200?{success:!0,data:c.data.data}:{success:!1,message:K.ERROR}}catch(l){return{success:!1,message:l.response?l.response.data.message:K.ERROR}}},Te={xmlFlags:2,serviceSeq:2639,workingTag:"",languageSeq:6,pgmSeq:5484},Ee=async(m,o)=>{try{const l=Ne(),c={...Te,dataSave:m,xmlDocument:{xmlSCOMCloseCheckWEB:o.xmlSCOMCloseCheckWEB,xmlSCOMCloseItemCheckWEB:o.xmlSCOMCloseItemCheckWEB,xmlInOutDailyCheckWEB:o.xmlInOutDailyCheckWEB,xmlInOutDailyItemCheckWEB:o.xmlInOutDailyItemCheckWEB}},u=await J.post(`${G}/mssql/stock-in/check-all-procedures-mat-wh-stock-in`,c,{headers:{Authorization:`Bearer ${l}`,"Content-Type":"application/json"}});if(u.status>=200&&u.status<300)return u.data;throw new Error("Unexpected response status: "+u.status)}catch(l){let c="Unknown error occurred";throw l.response?c=l.response.data.message||`API error with status ${l.response.status}`:l.request?c="No response received from the server":c=l.message,new Error(c)}},{Title:Be}=pe;function He({permissions:m,isMobile:o}){const{t:l}=me(),c=ue(),{id:u}=de(),[x,y]=a.useState(!0);a.useRef(null);const[L,g]=a.useState(null),[Z,k]=a.useState(!1),[r,S]=a.useState([]);a.useRef(""),a.useRef(r);const[D,p]=a.useState(!1),[I,W]=a.useState(!1),[M,h]=a.useState(!1),[j,C]=a.useState(!1),[$,O]=a.useState(null),[U,b]=a.useState(null),[v,F]=a.useState(!1),[A,R]=a.useState(null),w="TEST_ACCESS_KEY";a.useState({columns:P.empty(),rows:P.empty()});const[z,T]=a.useState(!1);a.useEffect(()=>{const e=localStorage.getItem("detailsStateMatWH");T(e==="open")},[]);const H=e=>{const s=e.target.open;T(s),localStorage.setItem("detailsStateMatWH",s?"open":"closed")};a.useCallback(e=>{const s=new Date(e),d=s.getFullYear(),q=String(s.getMonth()+1).padStart(2,"0"),_=String(s.getDate()).padStart(2,"0");return`${d}${q}${_}`},[])(new Date);const n=e=>{try{let s=e.replace(/-/g,"+").replace(/_/g,"/");const d=s.length%4===0?"":"=".repeat(4-s.length%4);return s+d}catch{throw new Error("Invalid Base64 URL")}},E=async(e,s)=>{try{y(!0);const d=await Ce(e,s);S((d==null?void 0:d.data)||[])}catch{S([])}finally{y(!1)}},f=e=>{try{const s=n(e),q=Y.AES.decrypt(s,w).toString(Y.enc.Utf8);return JSON.parse(q)}catch{return c("/u/warehouse/material/waiting-iqc-status"),W(!0),null}};a.useEffect(()=>{if(u){const e=f(u);e&&(R(e),E(e==null?void 0:e.BLSeq,e==null?void 0:e.BLSerl))}},[u]);const B=e=>`
          <DataBlock1>
              <WorkingTag>A</WorkingTag>
              <IDX_NO>1</IDX_NO>
              <Status>0</Status>
              <DataSeq>1</DataSeq>
              <Selected>1</Selected>
              <TABLE_NAME>DataBlock1</TABLE_NAME>
              <IsChangedMst>1</IsChangedMst>
              <BizUnit>${e.BizUnit}</BizUnit>
              <Date>${e.InOutDate}</Date>
              <ServiceSeq>2669</ServiceSeq>
              <MethodSeq>2</MethodSeq>
              <DtlUnitSeq>1</DtlUnitSeq>
          </DataBlock1>
      `,ee=(e,s)=>`
  <DataBlock2>
   <WorkingTag>A</WorkingTag>
    <IDX_NO>${s+1}</IDX_NO>
    <DataSeq>${s+1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <ItemSeq>${e.ItemSeq}</ItemSeq>
    <ServiceSeq>2669</ServiceSeq>
    <MethodSeq>0</MethodSeq>
    <BizUnit>${e.BizUnit}</BizUnit>
    <Date>${e.InOutDate}</Date>
    <DeptSeq>${e.DeptSeq}</DeptSeq>
    <BizUnitOld>${e.BizUnit}</BizUnitOld>
    <DateOld>${e.InOutDate}</DateOld>
    <DeptSeqOld>${e.DeptSeq}</DeptSeqOld>
  </DataBlock2>
`,te=e=>`
        <DataBlock1>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>1</IDX_NO>
    <Status>0</Status>
    <DataSeq>1</DataSeq>
    <Selected>1</Selected>
    <TABLE_NAME>DataBlock1</TABLE_NAME>
    <IsChangedMst>0</IsChangedMst>
    <InOutSeq>0</InOutSeq>
    <InOutNo />
    <InOutType>82</InOutType>
    <InOutDetailType>0</InOutDetailType>
    <IsTrans>0</IsTrans>
    <IsCompleted>1</IsCompleted>
    <CompleteDeptSeq>${e.DeptSeq}</CompleteDeptSeq>
    <CompleteEmpSeq>${e.EmpSeq}</CompleteEmpSeq>
    <CompleteDate>${e.InOutDate}</CompleteDate>
    <ReqBizUnit>${e.BizUnit}</ReqBizUnit>
    <ReqBizUnitName>${e.BizUnitName}</ReqBizUnitName>
    <InWHSeq>${e.MatWhSeq}</InWHSeq>
    <InWHName>${e.MatWhName}</InWHName>
    <InOutDate>${e.InOutDate}</InOutDate>
    <BizUnit>${e.BizUnit}</BizUnit>
    <BizUnitName>${e.BizUnitName}</BizUnitName>
    <OutWHSeq>${e.WaitWhSeq}</OutWHSeq>
    <OutWHName>${e.WaitWhName}</OutWHName>
    <DeptSeq>${e.DeptSeq}</DeptSeq>
    <DeptName>${e.DeptName}</DeptName>
    <EmpSeq>${e.EmpSeq}</EmpSeq>
    <EmpName>${e.EmpName}</EmpName>
    <Remark />
    <Memo />
  </DataBlock1>
    `,ae=(e,s)=>`
  <DataBlock2>
   <WorkingTag>A</WorkingTag>
     <IDX_NO>${s+1}</IDX_NO>
    <DataSeq>${s+1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <InOutSerl>0</InOutSerl>
    <InOutKind>8023008</InOutKind>
    <ItemName>${e.ItemName}</ItemName>
    <ItemNo>${e.ItemNo}</ItemNo>
    <Spec>${e.Spec}</Spec>
    <ItemSeq>${e.ItemSeq}</ItemSeq>
    <UnitName>${e.UnitName}</UnitName>
    <UnitSeq>${e.UnitSeq}</UnitSeq>
    <Qty>${e.Qty}</Qty>
    <InOutDetailKindName>Sản phẩm bình thường</InOutDetailKindName>
    <InOutDetailKind>8012001</InOutDetailKind>
    <STDUnitName>${e.UnitName}</STDUnitName>
    <STDQty>${e.Qty}</STDQty>
    <SerialNo />
    <LotNo>${e.LotNo}</LotNo>
    <InOutRemark>WEB</InOutRemark>
    <InWHName>${e.MatWhName}</InWHName>
    <InWHSeq>${e.MatWhSeq}</InWHSeq>
    <OutWHName>${e.WaitWhName}</OutWHName>
    <OutWHSeq>${e.WaitWhSeq}</OutWHSeq>
    <Price>0</Price>
    <Amt>0</Amt>
    <EtcOutAmt>0</EtcOutAmt>
    <EtcOutVAT>0</EtcOutVAT>
    <OriQty>0</OriQty>
    <OriSTDQty>0</OriSTDQty>
    <TABLE_NAME>DataBlock2</TABLE_NAME>
    <InOutSeq></InOutSeq>
    <InOutType>82</InOutType>
  </DataBlock2>
`,se=a.useCallback(async e=>{if(e.preventDefault(),k(!0),g(null),h(!0),r.length===0){k(!1),p(!0),h(!1),g(null),O("Chưa có dữ liệu để gửi. Vui lòng quét dữ liệu trước khi gửi.");return}const s=B(r[0]),d=r.map(ee).join(`
`),q=te(r[0]),_=r.map(ae).join(`
`);try{const N=await Ee(r,{xmlSCOMCloseCheckWEB:s,xmlSCOMCloseItemCheckWEB:d,xmlInOutDailyCheckWEB:q,xmlInOutDailyItemCheckWEB:_});g(N),N.success?(c("/u/warehouse/material/waiting-iqc-status"),h(!1),C(!0),b("Tất cả các dữ liệu đã được thực thi thành công!"),S([])):(h(!1),p(!0),O(N.message))}catch(N){h(!1),g({error:N.message}),p(!0),O(N.message)}finally{k(!1)}},[r]);return t.jsxs(t.Fragment,{children:[t.jsx(Se,{children:t.jsxs("title",{children:["ITM - ",l("Material WH Stock In")]})}),t.jsx("div",{className:"bg-slate-50 p-3 h-screen overflow-hidden",children:t.jsxs("div",{className:"flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full",children:[t.jsxs("div",{className:"col-start-1 col-end-5 row-start-1 w-full rounded-lg ",children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx(Be,{level:4,className:"mt-2 uppercase opacity-85",children:"Material WH Stock In"}),t.jsx(Oe,{status:v,handleSubmit:se})]}),t.jsxs("details",{className:"group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white",open:z,onToggle:H,children:[t.jsxs("summary",{className:"flex cursor-pointer items-center justify-between gap-1.5 text-gray-900",children:[t.jsxs("h2",{className:"text-xs font-medium flex items-center gap-2 text-blue-600",children:[t.jsx(ke,{}),l("Điều kiện truy vấn")]}),t.jsx("span",{className:"relative size-5 shrink-0",children:t.jsx(De,{})})]}),t.jsx("div",{className:"flex p-2 gap-4",children:t.jsx(ye,{filteredData:A})})]})]}),t.jsx("div",{className:"col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto",children:t.jsx(qe,{data:r,loading:x,setData:S})})]})}),t.jsx(We,{modal2Open:D,setModal2Open:p,error:$}),t.jsx(xe,{setModal4Open:h,modal4Open:M}),t.jsx(ge,{setModal5Open:C,modal5Open:j,successMessage:U}),t.jsx(fe,{modal3Open:I,setModal3Open:W,pathRouter:"/u/warehouse/material/waiting-iqc-status"})]})}export{He as default};
