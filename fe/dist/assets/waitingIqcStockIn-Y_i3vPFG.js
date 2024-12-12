import{j as t,B as w,r as n,G as N,D as ue,C as ne,f as de,F as A,b as He,c as O,I as Z,T as fe,a as re,H as ae,e as ke,M as Ke,E as ce,u as Ge,i as Ve,s as he,g as Je}from"./index-Bnb57sCX.js";import{R as ge}from"./SaveOutlined-CS-qQl8S.js";import{R as Ze}from"./DeleteOutlined-BWRbizUP.js";import{R as we,L as Re,S as et}from"./successSubmit-BJbcXQ3e.js";import{a as tt,A as nt}from"./index-CPHTBLOx.js";import{d as Ce}from"./index-CWNmofF7.js";import{C as Ne}from"./index-BTOq29qs.js";import{R as lt,M as it}from"./modalWaiting-CzwUkRd4.js";import{R as ot}from"./FilterOutlined-B-epXwC3.js";function rt({status:l,handleSubmit:o,handleDelete:m,handleRestFrom:r,handleUploadExcel:c}){return t.jsxs("div",{className:"flex items-center gap-2",children:[l?t.jsx(t.Fragment,{children:t.jsx("span",{className:"inline-flex items-center justify-center rounded-lg w-20 bg-emerald-100 px-5 py-[6px] text-emerald-700",children:t.jsx("p",{className:"whitespace-nowrap text-sm",children:"LIVE"})})}):t.jsx(t.Fragment,{children:t.jsx("span",{className:"inline-flex items-center justify-center rounded-lg w-20 bg-red-100 px-5 py-[6px] text-red-700",children:t.jsx("p",{className:"whitespace-nowrap text-sm",children:"OFF"})})}),t.jsx(w,{type:"primary",icon:t.jsx(ge,{}),size:"middle",className:"uppercase",onClick:o,style:{backgroundColor:"#52c41a",borderColor:"#52c41a"},children:"Save"},"Save"),t.jsx(w,{type:"primary",icon:t.jsx(Ze,{}),size:"middle",onClick:m,className:"uppercase text-white",style:{backgroundColor:"#ff4d4f",borderColor:"#ff4d4f"},children:"Row Delete"},"Row Delete"),t.jsx(w,{type:"default",icon:t.jsx(ge,{}),size:"middle",className:"uppercase",color:"default",variant:"filled",onClick:r,style:{backgroundColor:"#f0f0f0",borderColor:"#d9d9d9"},children:"Reset"},"Reset"),t.jsx(w,{type:"default",icon:t.jsx(we,{}),size:"middle",className:"uppercase",color:"default",variant:"filled",onClick:c,style:{backgroundColor:"#ffa500",borderColor:"#ffa500"},children:"Excel Upload"},"Excel Upload")]})}function at({data:l,selection:o,setSelection:m}){const[r,c]=n.useState([]),[$,U]=n.useState(!1),B=n.useCallback(()=>U(!1),[]),Q=n.useMemo(()=>[{title:"WHName"},{title:"ItemNo"},{title:"LotNo"},{title:"LotNoFull"},{title:"Qty"},{title:"DateCode"},{title:"ReelNo"},{title:"Barcode"},{title:"CreateDate"},{title:"RegDate"},{title:"YYWW"},{title:"YYMM"},{title:"YYMMDD"},{title:"InvoiceNo"},{title:"DateIn"}],[]),[y,I]=n.useState(Q),T=n.useCallback((u,j)=>{const b=y.indexOf(u);if(b!==-1){const M={...u,width:j},S=[...y];S.splice(b,1,M),I(S)}},[y]),X=n.useCallback(([u,j])=>{const b=r[j]||{},{WHName:M="",ItemNo:S="",LotNo:H="",LotNoFull:C="",Qty:h="",DateCode:E="",ReelNo:D="",Barcode:q="",CreateDate:L="",RegDate:K="",YYWW:G="",YYMM:k="",YYMMDD:F="",InvoiceNo:W="",DateIn:g=""}=b,x=z=>z!=null?String(z):"",V={0:{kind:N.Text,data:x(M)},1:{kind:N.Text,data:x(S)},2:{kind:N.Text,data:x(H)},3:{kind:N.Text,data:x(C)},4:{kind:N.Text,data:x(h)},5:{kind:N.Text,data:x(E)},6:{kind:N.Text,data:x(D)},7:{kind:N.Text,data:x(q)},8:{kind:N.Text,data:x(L)},9:{kind:N.Text,data:x(K)},10:{kind:N.Text,data:x(G)},11:{kind:N.Text,data:x(k)},12:{kind:N.Text,data:x(F)},13:{kind:N.Text,data:x(W)},14:{kind:N.Text,data:x(g)}};if(V.hasOwnProperty(u)){const{kind:z,data:P}=V[u];return{kind:z,data:P,displayData:P}}return{kind:N.Text,data:"",displayData:""}},[r]),[Y,R]=n.useState(void 0);return n.useCallback(u=>{console.log("cell",u),R(u)},[]),n.useEffect(()=>{c(l)},[l]),t.jsx("div",{className:"w-full h-full border-t border-b overflow-hidden scroll-container ",children:t.jsx(ue,{columns:y,getCellContent:X,rows:r.length,showSearch:$,getCellsForSelection:!0,onSearchClose:B,width:"100%",height:"100%",rowMarkers:"both",useRef:n.useRef,onColumnResize:T,smoothScrollY:!0,smoothScrollX:!0,rowSelect:"multi",gridSelection:o,onGridSelectionChange:m,getRowThemeOverride:u=>u%2===0?void 0:{bgCell:"#FBFBFB"}})})}function mt({data:l}){const[o,m]=n.useState([]),[r,c]=n.useState(!1),$=n.useCallback(()=>c(!1),[]),[U,B]=n.useState(null);n.useState([]);const[Q,y]=n.useState(!1),[I,T]=n.useState(null),[X,Y]=n.useState({columns:ne.empty(),rows:ne.empty()}),R=n.useMemo(()=>[{title:"ItemNo"},{title:"TotalQty"},{title:"OkQty"},{title:"RemainQty"}],[]),[u,j]=n.useState(R),b=n.useCallback((h,E)=>{const D=u.indexOf(h);if(D!==-1){const q={...h,width:E},L=[...u];L.splice(D,1,q),j(L)}},[u]),M=n.useCallback(([h,E])=>{const D=o[E]||{},{ItemNo:q="",TotalQty:L="",OkQty:K="",RemainQty:G=""}=D,k=W=>W!=null?String(W):"",F={0:{kind:N.Text,data:k(q)},1:{kind:N.Text,data:k(L)},2:{kind:N.Text,data:k(K)},3:{kind:N.Text,data:k(G)}};if(F.hasOwnProperty(h)){const{kind:W,data:g}=F[h];return{kind:W,data:g,displayData:g}}return{kind:N.Text,data:"",displayData:""}},[o]),[S,H]=n.useState(void 0);n.useCallback(h=>{console.log("cell",h),H(h)},[]),n.useEffect(()=>{m(l)},[l]);const C=(h,E)=>{let D;if(h[0]!==-1){console.log("Ignoring click on cell, cell[0] is neither -1 nor 1");return}if(h[0]===-1?(D=h[1],y(!0)):(D=h[0],y(!1)),I&&I[0]===h[0]&&I[1]===h[1]){console.log("Click again on the same cell, deactivating."),T(null),B(null);return}if(D>=0&&D<o.length){const q=o[D];B(q),T(h)}else console.log("Invalid row index:",D)};return t.jsx("div",{className:"w-full h-full border-t border-b overflow-hidden scroll-container ",children:t.jsx(ue,{columns:u,getCellContent:M,rows:o.length,showSearch:r,getCellsForSelection:!0,onSearchClose:$,width:"100%",height:"100%",rowMarkers:"both",useRef:n.useRef,onColumnResize:b,smoothScrollY:!0,smoothScrollX:!0,onCellClicked:C,rowSelect:"single",gridSelection:X,onGridSelectionChange:Y,getRowThemeOverride:h=>h%2===0?void 0:{bgCell:"#FBFBFB"}})})}function st({sampleTableA:l,sampleTableB:o,setSelection:m,selection:r}){return t.jsxs("div",{className:"w-full gap-1 h-full flex items-center justify-center",children:[t.jsxs("div",{className:"w-[65%] h-full flex flex-col border bg-white rounded-lg overflow-hidden pb-7",children:[t.jsx("div",{className:" text-xs font-medium flex items-center gap-2 p-2 text-blue-600 uppercase ",children:"THÔNG TIN BAROCODE"}),t.jsx(at,{selection:r,data:o,setSelection:m})]}),t.jsx("div",{className:"px-4 flex flex-col p-3  bg-[#eee] rounded-lg items-center justify-center",children:t.jsx(tt,{})}),t.jsxs("div",{className:"w-[35%] h-full flex flex-col border bg-white rounded-lg overflow-hidden pb-7",children:[t.jsx("div",{className:"text-xs font-medium flex items-center gap-2 p-2 text-blue-600 uppercase",children:"THÔNG ĐƠN HÀNG"}),t.jsx(mt,{data:l})]})]})}de.locale("vi");const{Title:xe}=fe;function pt({filteredData:l,handleCheckBarcode:o,inputBarCode:m,setInputBarCode:r,YYWW:c,YYYYMM:$}){const[U]=n.useState(de()),B=I=>{const T=I.format("dddd");return`${T.charAt(0).toUpperCase()+T.slice(1)}, ${I.format("DD/MM/YYYY")}`},Q=Ce(I=>{r(I.target.value)},100),y=()=>{m&&o(m)};return t.jsx("div",{className:"flex items-center gap-2",children:t.jsx(A,{layout:"vertical",children:t.jsxs(He,{className:"gap-4 flex items-center",children:[t.jsx(O,{children:t.jsx(A.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"Date"}),className:"mb-0",children:t.jsx(Z,{value:B(U),size:"small",className:"text-sm p-2",readOnly:!0})})}),t.jsx(O,{children:t.jsx(A.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"Barcode"}),tooltip:"Dùng để nhập mã vạch",className:"mb-0",children:t.jsx(Z,{value:m,onChange:Q,onPressEnter:y,placeholder:"Barcode",size:"small",className:"text-sm p-2  w-72"})})}),t.jsx(O,{children:t.jsx(A.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"Delivery No"}),className:"mb-0",children:t.jsx(Z,{value:l==null?void 0:l.DelvMngNo,size:"small",className:"text-sm p-2",readOnly:!0})})}),t.jsx(O,{children:t.jsx(A.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"Biz Unit"}),className:"mb-0",children:t.jsx(Z,{value:l==null?void 0:l.BizUnit,size:"small",className:"text-sm p-2",readOnly:!0})})}),t.jsx(O,{children:t.jsx(A.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"Purchase Type"}),className:"mb-0",children:t.jsx(Z,{value:l==null?void 0:l.PurchaseType,size:"small",className:"text-sm p-2",readOnly:!0})})}),t.jsx(O,{children:t.jsx(A.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"YYWW"}),className:"mb-0",children:t.jsx(xe,{level:3,className:"text-gray-800",children:c||"YYWW"})})}),t.jsx(O,{children:t.jsx(A.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"YYYYMM"}),className:"mb-0",children:t.jsx(xe,{level:3,className:"text-gray-800",children:$||"YYYYMM"})})})]})})})}const ct=l=>`
        <DataBlock1>
            <WorkingTag>${l.workingTag}</WorkingTag>
            <IDX_NO>${l.idx_no}</IDX_NO>
            <Status>${l.status}</Status>
            <DataSeq>${l.dataSeq}</DataSeq>
            <Selected>${l.selected}</Selected>
            <TABLE_NAME>DataBlock1</TABLE_NAME>
            
            <PermitSeq>${l.permitSeq}</PermitSeq>
            <PermitSerl>${l.permitSerl}</PermitSerl>
    
            <BizUnit>${l.bizUnit}</BizUnit>
            <BizUnitName>${l.bizUnitName}</BizUnitName>
            <SMImpKind>${l.sMImpKind}</SMImpKind>
            <SMImpKindName>${l.sMImpKindName}</SMImpKindName>
            <ItemNo>${l.itemNo}</ItemNo>
            <LotNo>${l.lotNo}</LotNo>
            <Qty>${l.qty}</Qty>
            <DateCode>${l.dateCode}</DateCode>
            <ReelNo>${l.reelNo}</ReelNo>
            <Barcode>${l.barcode}</Barcode>
        </DataBlock1>
    `,ht={xmlFlags:2,serviceSeq:60010001,workingTag:"",companySeq:1,languageSeq:6,userSeq:3106,pgmSeq:1036085},gt=l=>{const o={...ht,...l},r={xmlDocument:ct(o),xmlFlags:o.xmlFlags,serviceSeq:o.serviceSeq,workingTag:o.workingTag,companySeq:o.companySeq,languageSeq:o.languageSeq,userSeq:o.userSeq,pgmSeq:o.pgmSeq};return re.post(`${ae}/mssql/stock-in/smaterial-qr-check-web`,r,{headers:{"Content-Type":"application/json"}}).then(c=>{if(c.status===200||c.status===201)return c.data;throw new Error("Error from API: "+c.data.message)}).catch(c=>{const $=c.response?c.response.data.message||"Error from API":"Unknown error occurred";throw new Error($)})};function Nt({modal3Open:l,setModal3Open:o,pathRouter:m}){const r=ke(),c=()=>{r(m)};return t.jsx(Ke,{centered:!0,open:l,closable:!1,footer:null,children:t.jsxs("div",{className:"items-center justify-center flex flex-col",children:[t.jsx(lt,{className:"text-4xl mb-2 text-red-500"}),t.jsx("p",{className:"mt-10 text-lg",children:"Chưa có thông tin nào để thực hiện."}),t.jsx(w,{className:"mt-5",type:"primary",onClick:()=>c(),children:"Quay lại"})]})})}const xt=async(l,o)=>{try{const m=`${ae}/mssql/stock-in/itm-sug-get-active-delivery-item`,r=await re.get(m,{params:{deliverySeq:l,purchaseType:o},headers:{"Content-Type":"application/json"}});return r.status===200?{success:!0,data:r.data.data}:{success:!1,message:ce.ERROR}}catch(m){return{success:!1,message:m.response?m.response.data.message:ce.ERROR}}},ut={xmlFlags:2,serviceSeq:2639,workingTag:"",companySeq:1,languageSeq:6,userSeq:3106,pgmSeq:1036085},dt=async(l,o)=>{try{const m={...ut,dataSave:l,xmlDocument:{xmlForCloseCheck:o.closeCheckXML,xmlForCloseItemCheck:o.closeItemCheckXML,xmlForMasterCheck:o.masterCheckXML,xmlForSheetCheck:o.sheetCheckXML,xmlForLotNoMasterCheck:o.sheetLotNoMasterCheckXML}},r=await re.post(`${ae}/mssql/stock-in/check-all-procedures-stock-in`,m,{headers:{"Content-Type":"application/json"}});if(r.status>=200&&r.status<300)return r.data;throw new Error("Unexpected response status: "+r.status)}catch(m){let r="Unknown error occurred";throw m.response?r=m.response.data.message||`API error with status ${m.response.status}`:m.request?r="No response received from the server":r=m.message,new Error(r)}},{Title:ft}=fe;function Bt({permissions:l,isMobile:o}){const{t:m}=Ge(),{id:r}=Ve(),c=n.useRef(null);n.useRef(null);const[$,U]=n.useState(!0),B=ke();n.useRef(null);const[Q,y]=n.useState(null),[I,T]=n.useState(null),[X,Y]=n.useState(null),[R,u]=n.useState(!1),[j,b]=n.useState([]),M=n.useRef(""),S=n.useRef(j),[H,C]=n.useState(!1),[h,E]=n.useState(!1),[D,q]=n.useState(!1),[L,K]=n.useState(!1),[G,k]=n.useState(null),[F,W]=n.useState(null),[g,x]=n.useState([]),V=n.useRef(g),[z,P]=n.useState(!1),[s,De]=n.useState(null),[qe,ye]=n.useState(null),[Ie,Me]=n.useState(null),ve="TEST_ACCESS_KEY",[le,Te]=n.useState({columns:ne.empty(),rows:ne.empty()}),[kt,je]=n.useState(!1),[be,J]=n.useState(!0);n.useEffect(()=>{const e=localStorage.getItem("detailsStateIqc");je(e==="open")},[]);const Be=n.useCallback(e=>{const i=new Date(e),a=i.getFullYear(),p=String(i.getMonth()+1).padStart(2,"0"),f=String(i.getDate()).padStart(2,"0");return`${a}${p}${f}`},[])(new Date),ie=async(e,i)=>{try{U(!0);const a=await xt(e,i);b((a==null?void 0:a.data)||[])}catch{b([])}finally{U(!1)}},Ee=e=>{try{let i=e.replace(/-/g,"+").replace(/_/g,"/");const a=i.length%4===0?"":"=".repeat(4-i.length%4);return i+a}catch{throw new Error("Invalid Base64 URL")}},$e=e=>{try{const i=Ee(e),p=Ne.AES.decrypt(i,ve).toString(Ne.enc.Utf8);return JSON.parse(p)}catch{return B("/u/warehouse/material/delivery-list"),E(!0),null}};n.useEffect(()=>{if(r){const e=$e(r);e&&(De(e),ie(e==null?void 0:e.DelvNo,e==null?void 0:e.PurchaseType))}},[r]),n.useEffect(()=>{const e=f=>{if(f.key==="Enter"&&M.current.trim()){const d=M.current.trim();se(d),y(d),M.current=""}else f.key.length===1&&(M.current+=f.key)},i=()=>P(!0),a=()=>P(!1),p=()=>P(!0);return window.addEventListener("keypress",e),window.addEventListener("focus",i),window.addEventListener("blur",a),document.addEventListener("click",p),()=>{window.removeEventListener("keypress",e),window.removeEventListener("focus",i),window.removeEventListener("blur",a),document.removeEventListener("click",p)}},[]);const me=n.useCallback((e,i)=>{var f,d;const a=(f=e==null?void 0:e.LotNoFull)==null?void 0:f.trim().toLowerCase(),p=(d=e==null?void 0:e.Barcode)==null?void 0:d.trim().toLowerCase();x(v=>{if(!v.some(_=>{var ee,te;return((ee=_.LotNoFull)==null?void 0:ee.trim().toLowerCase())===a&&((te=_.Barcode)==null?void 0:te.trim().toLowerCase())===p})){const _=[...v,{SMImpKind:e==null?void 0:e.SMImpKind,ItemNo:e==null?void 0:e.ItemNo,LotNo:e==null?void 0:e.LotNo,Qty:e==null?void 0:e.Qty,DateCode:e==null?void 0:e.DateCode,ReelNo:e==null?void 0:e.ReelNo,Barcode:e==null?void 0:e.Barcode,ItemSeq:e==null?void 0:e.ItemSeq,WHSeq:e==null?void 0:e.WHSeq,WHName:e==null?void 0:e.WHName,CreateDate:e==null?void 0:e.CreateDate,RegDate:e==null?void 0:e.RegDate,YYWW:e==null?void 0:e.YYWW,YYMM:e==null?void 0:e.YYMM,YYMMDD:e==null?void 0:e.YYMMDD,InvoiceNo:e==null?void 0:e.InvoiceNo,PermitSerl:e==null?void 0:e.PermitSerl,PermitSeq:e==null?void 0:e.PermitSeq,EmpSeq:e==null?void 0:e.EmpSeq,EmpName:e==null?void 0:e.EmpName,DeptSeq:e==null?void 0:e.DeptSeq,DeptName:e==null?void 0:e.DeptName,CurrSeq:e==null?void 0:e.CurrSeq,CurrName:e==null?void 0:e.CurrName,ExRate:e==null?void 0:e.ExRate,Price:e==null?void 0:e.Price,CurAmt:e==null?void 0:e.CurAmt,DomPrice:e==null?void 0:e.DomPrice,DomAmt:e==null?void 0:e.DomAmt,LotNoFull:e==null?void 0:e.LotNoFull,StdUnitSeq:e==null?void 0:e.StdUnitSeq,STDUnitName:e==null?void 0:e.STDUnitName,UnitSeq:e==null?void 0:e.UnitSeq,UnitName:e==null?void 0:e.UnitName,CustSeq:e==null?void 0:e.CustSeq,CustName:e==null?void 0:e.CustName,ItemName:e==null?void 0:e.ItemName,Spec:e==null?void 0:e.Spec,DateIn:e==null?void 0:e.DateIn,StdQty:e==null?void 0:e.StdQty,FromAmt:e==null?void 0:e.FromAmt,FromVAT:e==null?void 0:e.FromVAT,BizUnit:e==null?void 0:e.BizUnit,SMImpKindName:e==null?void 0:e.SMImpKindName,PermitNo:e==null?void 0:e.PermitNo}];return i(),_}return v})},[]),oe=n.useCallback(Ce(async(e,i)=>{const a=await gt(e);if(a.success){const p=a.data[0];he.success(i),T(null),C(!1),y(null),ye(p==null?void 0:p.YYWW),Me(p==null?void 0:p.YYMM),me(p,()=>{b(f=>f.map(d=>d.ItemNo===e.itemNo?{...d,OkQty:d.OkQty+e.qty,RemainQty:d.RemainQty-e.qty}:d))})}else C(!0),k(a==null?void 0:a.message)},100),[me]),se=n.useCallback(e=>{const i=S.current,a=V.current;c.current.postMessage({type:"CHECK_BARCODE",barcode:e,tableData:i,tableScanHistory:a})},[]);n.useEffect(()=>(c.current=new Worker(new URL("/assets/workerWatingIqcStockIn-DB-4dmgh.js",import.meta.url)),c.current.onmessage=async e=>{const{success:i,message:a,data:p}=e.data;if(i){if(p){const{itemNo:f,qty:d,lot:v,dc:pe,reel:_,barcode:ee,permitSerl:te,permitSeq:Qe}=p,Xe={workingTag:"A",idx_no:"1",status:"0",dataSeq:"1",selected:"1",permitSeq:Qe,permitSerl:te,bizUnit:s==null?void 0:s.BizUnit,bizUnitName:s==null?void 0:s.BizUnitName,sMImpKind:s==null?void 0:s.ImpType,sMImpKindName:s==null?void 0:s.PurchaseType,itemNo:f,lotNo:v,qty:d,dateCode:pe,reelNo:_,barcode:ee};oe(Xe,a)}}else C(!0),k(a)},()=>{c.current.terminate(),oe.cancel()}),[s,oe]),n.useEffect(()=>{S.current=j,V.current=g},[j,g]);const Se=e=>{M.current=e.target.value,y(e.target.value)},Le=e=>`
          <DataBlock1>
              <WorkingTag>A</WorkingTag>
              <IDX_NO>1</IDX_NO>
              <Status>0</Status>
              <DataSeq>1</DataSeq>
              <Selected>1</Selected>
              <TABLE_NAME>DataBlock1</TABLE_NAME>
              <IsChangedMst>1</IsChangedMst>
              <BizUnit>${e.BizUnit}</BizUnit>
              <Date>${Be}</Date>
              <DeptSeq>${e.DeptSeq}</DeptSeq>
              <ServiceSeq>4492</ServiceSeq> 
              <MethodSeq>2</MethodSeq>
              <DtlUnitSeq>1</DtlUnitSeq>
          </DataBlock1>
      `,Ae=e=>`
          <DataBlock1>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>1</IDX_NO>
    <Status>0</Status>
    <DataSeq>1</DataSeq>
    <Selected>1</Selected>
    <TABLE_NAME>DataBlock1</TABLE_NAME>
    <IsChangedMst>1</IsChangedMst>
    <DelvNo /> 
    <BLNo /> 
    <BizUnit>${e[0].BizUnit}</BizUnit> 
    <BizUnitName>${e[0].BizUnitName}</BizUnitName>
    <SMImpKind>${e[0].SMImpKind}</SMImpKind>
    <SMImpKindName>${e[0].SMImpKindName}</SMImpKindName> 
    <CustSeq>${e[0].CustSeq}</CustSeq> 
    <CustName>${e[0].CustName}</CustName> 
    <PermitNo>${e[0].PermitNo}</PermitNo>
    <DelvSeq>0</DelvSeq> 
    <DelvDate>${e[0].DateIn}</DelvDate>
    <EmpSeq>${e[0].EmpSeq}</EmpSeq>
    <EmpName>${e[0].EmpName}</EmpName>
    <DeptSeq>${e[0].DeptSeq}</DeptSeq>
    <DeptName>${e[0].DeptName}</DeptName>
    <CurrSeq>${e[0].CurrSeq}</CurrSeq>
    <CurrName>${e[0].CurrName}</CurrName>
    <ExRate>${e[0].ExRate}</ExRate>
    <Remark>${e[0].InvoiceNo}</Remark>
    <IsPJT>0</IsPJT>
  </DataBlock1>
      `,Ue=(e,i)=>`
  <DataBlock2>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>${i+1}</IDX_NO>
    <DataSeq>${i+1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <TABLE_NAME>DataBlock2</TABLE_NAME>
    <ServiceSeq>4492</ServiceSeq> 
    <MethodSeq>2</MethodSeq>
    <BizUnit>${e==null?void 0:e.BizUnit}</BizUnit> 
    <Date>${e==null?void 0:e.DateIn}</Date>
    <DeptSeq>${e==null?void 0:e.DeptSeq}</DeptSeq> 
    <BizUnitOld>${e==null?void 0:e.BizUnit}</BizUnitOld>
    <DateOld>${e==null?void 0:e.DateIn}</DateOld> 
    <DeptSeqOld>${e==null?void 0:e.DeptSeq}</DeptSeqOld> 
  </DataBlock2>
`,Ye=(e,i)=>`
    <DataBlock2>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>${i+1}</IDX_NO>
    <DataSeq>${i+1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <PJTSeq>0</PJTSeq>
    <WBSSeq>0</WBSSeq>
    <ItemName>${e==null?void 0:e.ItemName}</ItemName>
    <ItemNo>${e==null?void 0:e.ItemNo}</ItemNo>
    <Spec>${e==null?void 0:e.Spec}</Spec>
    <MakerName />
    <MakerSeq>0</MakerSeq>
    <UnitName>${e==null?void 0:e.UnitName}</UnitName>
    <Qty>${e==null?void 0:e.Qty}</Qty>
    <Price>${e==null?void 0:e.Price}</Price>
    <CurAmt>${e==null?void 0:e.CurAmt}</CurAmt>
    <DomAmt>${e==null?void 0:e.DomAmt}</DomAmt>
    <WHName>${e==null?void 0:e.WHName}</WHName>
    <LotNo>${e==null?void 0:e.LotNo}</LotNo>
    <FromSerlNo />
    <ToSerlNo />
    <ProdDate />
    <STDUnitName>${e==null?void 0:e.STDUnitName}</STDUnitName>
    <STDQty>${e==null?void 0:e.StdQty}</STDQty>
    <DelvSerl />
    <ItemSeq>${e==null?void 0:e.ItemSeq}</ItemSeq>
    <UnitSeq>${e==null?void 0:e.UnitSeq}</UnitSeq>
    <STDUnitSeq>${e==null?void 0:e.StdUnitSeq}</STDUnitSeq>
    <AccName />
    <OppAccName />
    <WHSeq>${e==null?void 0:e.WHSeq}</WHSeq>
    <IsQtyChange />
    <Remark />
    <Memo1 />
    <Memo2 />
    <Memo3 />
    <Memo4 />
    <Memo5 />
    <Memo6 />
    <Memo7>0</Memo7>
    <Memo8>0</Memo8>
    <TABLE_NAME>DataBlock2</TABLE_NAME>
    <BizUnit>${e==null?void 0:e.BizUnit}</BizUnit>
    <DelvDate>${e==null?void 0:e.DateIn}</DelvDate>
    <DelvSeq></DelvSeq>
  </DataBlock2>

`,We=(e,i)=>`
   <DataBlock1>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>${i+1}</IDX_NO>
    <DataSeq>${i+1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected> 
    <Spec>${e==null?void 0:e.Spec}</Spec>
    <CustSeq>${e==null?void 0:e.CustSeq}</CustSeq>
    <Qty>${e==null?void 0:e.Qty}</Qty>
    <LotNo>${e==null?void 0:e.LotNoFull}</LotNo>
    <CreateDate>${e==null?void 0:e.CreateDate}</CreateDate>
    <ItemSeq>${e==null?void 0:e.ItemSeq}</ItemSeq>
    <UnitSeq>${e==null?void 0:e.UnitSeq}</UnitSeq>
    <ItemSeqOld>0</ItemSeqOld>
    <LotNoOLD/>
    <TABLE_NAME>DataBlock1</TABLE_NAME> 
    <RegDate>${e==null?void 0:e.RegDate}</RegDate>
    <InNo>${e==null?void 0:e.InvoiceNo}</InNo>
    <SupplyCustSeq>${e==null?void 0:e.CustSeq} </SupplyCustSeq>
  </DataBlock1>
`,Oe=n.useCallback(async e=>{if(!be)return;if(J(!1),e.preventDefault(),u(!0),Y(null),q(!0),g.length===0){u(!1),C(!0),q(!1),Y(null),k("Chưa có dữ liệu để gửi. Vui lòng quét dữ liệu trước khi gửi.");return}const i=Le(s),a=g.map(Ue).join(`
`),p=Ae(g),f=g.map(Ye).join(`
`),d=g.map(We).join(`
`);try{const v=await dt(g,{closeCheckXML:i,closeItemCheckXML:a,masterCheckXML:p,sheetCheckXML:f,sheetLotNoMasterCheckXML:d});Y(v),v.success?(B("/u/warehouse/material/delivery-list"),q(!1),x([]),J(!0),ie(s==null?void 0:s.DelvNo,s==null?void 0:s.PurchaseType)):(q(!1),C(!0),k(v.message),J(!0))}catch(v){q(!1),Y({error:v.message}),C(!0),k(v.message),J(!0)}finally{u(!1),J(!0)}},[s,g]),Fe=()=>{const e=le.rows.items;let i=[];return e.forEach(a=>{const p=a[0],f=a[1]-1;for(let d=p;d<=f;d++)i.push(d)}),i},ze=n.useCallback(async e=>{e.preventDefault();const i=Fe();if(i.length===0){C(!0),k("Vui lòng chọn ít nhất một hàng để xóa.");return}if(g.length===0){C(!0),k("Không có dữ liệu nào để xóa.");return}const a=g.filter((p,f)=>!i.includes(f));x(a)},[g,le]),Pe=n.useCallback(async e=>{if(e.preventDefault(),g.length===0){C(!0),k("Không có dữ liệu để reset! Vui lòng quét dữ liệu trước.");return}x([]),ie(s==null?void 0:s.DelvNo,s==null?void 0:s.PurchaseType),he.success("Reset form thành công!")},[s,g]),_e=n.useCallback(async e=>{e.preventDefault(),C(!0),k("Chức năng đang trong quá trình phát triển?")},[]);return t.jsxs(t.Fragment,{children:[t.jsx(Je,{children:t.jsxs("title",{children:["ITM - ",m("Waiting Iqc Stock In")]})}),t.jsx("div",{className:"bg-slate-50 p-3 h-screen overflow-hidden",children:t.jsxs("div",{className:"flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full",children:[t.jsxs("div",{className:"col-start-1 col-end-5 row-start-1 w-full rounded-lg ",children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx(ft,{level:4,className:"mt-2 uppercase opacity-85",children:"Waiting Iqc Stock In"}),t.jsx(rt,{status:z,handleSubmit:Oe,handleDelete:ze,handleRestFrom:Pe,handleUploadExcel:_e})]}),t.jsxs("details",{className:"group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white",open:!0,children:[t.jsxs("summary",{className:"flex cursor-pointer items-center justify-between gap-1.5 text-gray-900",children:[t.jsxs("h2",{className:"text-xs font-medium flex items-center gap-2 text-blue-600 uppercase",children:[t.jsx(ot,{}),m("Điều kiện truy vấn")]}),t.jsx("span",{className:"relative size-5 shrink-0",children:t.jsx(nt,{})})]}),t.jsx("div",{className:"flex p-2 gap-4",children:t.jsx(pt,{handleCheckBarcode:se,inputBarCode:I,setInputBarCode:T,filteredData:s,YYWW:qe,YYYYMM:Ie,bufferRef:M,handleInputChange:Se})})]})]}),t.jsx("div",{className:"col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto",children:t.jsx(st,{sampleTableA:j,sampleTableB:g,setSelection:Te,selection:le})})]})}),t.jsx(it,{modal2Open:H,setModal2Open:C,error:G}),t.jsx(Re,{setModal4Open:q,modal4Open:D}),t.jsx(et,{setModal5Open:K,modal5Open:L,successMessage:F}),t.jsx(Nt,{modal3Open:h,setModal3Open:E,pathRouter:"/u/warehouse/material/delivery-list"})]})}export{Bt as default};
