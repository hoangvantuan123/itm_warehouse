import{j as t,B as te,r as n,G as x,D as fe,C as ne,f as ke,F as U,b as Xe,c as O,I as Z,T as de,a as re,H as ae,E as ce,u as Ke,i as He,e as Ge,s as ge,g as Ve}from"./index-ayyTO2Yu.js";import{R as Ne}from"./SaveOutlined-Bl2C5slq.js";import{R as Je}from"./DeleteOutlined-D40cpE60.js";import{R as Ze}from"./UploadOutlined-BW7lOCVG.js";import{a as we,A as Re}from"./index-D2oIM98g.js";import{d as et}from"./index-D3q4azbu.js";import{L as tt,S as nt}from"./successSubmit-D7Jv6sVO.js";import{C as xe}from"./index-CelGP5ee.js";import{M as lt}from"./modalWaiting-B4RZtkJr.js";import{a as me}from"./tokenService-CcOQ_w6w.js";import{E as ot}from"./errorPage-BP3M4LUO.js";import{R as it}from"./FilterOutlined-CWq-eo3k.js";import"./ExclamationCircleOutlined-DlelRtt7.js";function rt({status:l,handleSubmit:s,handleDelete:i,handleRestFrom:m,handleUploadExcel:h}){return t.jsxs("div",{className:"flex items-center gap-2",children:[l?t.jsx(t.Fragment,{children:t.jsx("span",{className:"inline-flex items-center justify-center rounded-lg w-20 bg-emerald-100 px-5 py-[6px] text-emerald-700",children:t.jsx("p",{className:"whitespace-nowrap text-sm",children:"LIVE"})})}):t.jsx(t.Fragment,{children:t.jsx("span",{className:"inline-flex items-center justify-center rounded-lg w-20 bg-red-100 px-5 py-[6px] text-red-700",children:t.jsx("p",{className:"whitespace-nowrap text-sm",children:"OFF"})})}),t.jsx(te,{type:"primary",icon:t.jsx(Ne,{}),size:"middle",className:"uppercase",onClick:s,style:{backgroundColor:"#52c41a",borderColor:"#52c41a"},children:"Save"},"Save"),t.jsx(te,{type:"primary",icon:t.jsx(Je,{}),size:"middle",onClick:i,className:"uppercase text-white",style:{backgroundColor:"#ff4d4f",borderColor:"#ff4d4f"},children:"Row Delete"},"Row Delete"),t.jsx(te,{type:"default",icon:t.jsx(Ne,{}),size:"middle",className:"uppercase",color:"default",variant:"filled",onClick:m,style:{backgroundColor:"#f0f0f0",borderColor:"#d9d9d9"},children:"Reset"},"Reset"),t.jsx(te,{type:"default",icon:t.jsx(Ze,{}),size:"middle",className:"uppercase",color:"default",variant:"filled",onClick:h,style:{backgroundColor:"#ffa500",borderColor:"#ffa500"},children:"Excel Upload"},"Excel Upload")]})}function at({data:l,selection:s,setSelection:i}){const[m,h]=n.useState([]),[q,E]=n.useState(!1),$=n.useCallback(()=>E(!1),[]),Q=n.useMemo(()=>[{title:"WHName"},{title:"ItemNo"},{title:"LotNo"},{title:"LotNoFull"},{title:"Qty"},{title:"DateCode"},{title:"ReelNo"},{title:"Barcode"},{title:"CreateDate"},{title:"RegDate"},{title:"YYWW"},{title:"YYMM"},{title:"YYMMDD"},{title:"InvoiceNo"},{title:"DateIn"}],[]),[y,M]=n.useState(Q),b=n.useCallback((f,j)=>{const B=y.indexOf(f);if(B!==-1){const v={...f,width:j},A=[...y];A.splice(B,1,v),M(A)}},[y]),X=n.useCallback(([f,j])=>{const B=m[j]||{},{WHName:v="",ItemNo:A="",LotNo:K="",LotNoFull:C="",Qty:c="",DateCode:S="",ReelNo:D="",Barcode:I="",CreateDate:L="",RegDate:H="",YYWW:G="",YYMM:d="",YYMMDD:z="",InvoiceNo:W="",DateIn:N=""}=B,u=F=>F!=null?String(F):"",V={0:{kind:x.Text,data:u(v)},1:{kind:x.Text,data:u(A)},2:{kind:x.Text,data:u(K)},3:{kind:x.Text,data:u(C)},4:{kind:x.Text,data:u(c)},5:{kind:x.Text,data:u(S)},6:{kind:x.Text,data:u(D)},7:{kind:x.Text,data:u(I)},8:{kind:x.Text,data:u(L)},9:{kind:x.Text,data:u(H)},10:{kind:x.Text,data:u(G)},11:{kind:x.Text,data:u(d)},12:{kind:x.Text,data:u(z)},13:{kind:x.Text,data:u(W)},14:{kind:x.Text,data:u(N)}};if(V.hasOwnProperty(f)){const{kind:F,data:P}=V[f];return{kind:F,data:P,displayData:P}}return{kind:x.Text,data:"",displayData:""}},[m]),[Y,w]=n.useState(void 0);return n.useCallback(f=>{console.log("cell",f),w(f)},[]),n.useEffect(()=>{h(l)},[l]),t.jsx("div",{className:"w-full h-full border-t border-b overflow-hidden scroll-container ",children:t.jsx(fe,{columns:y,getCellContent:X,rows:m.length,showSearch:q,getCellsForSelection:!0,onSearchClose:$,width:"100%",height:"100%",rowMarkers:"both",useRef:n.useRef,onColumnResize:b,smoothScrollY:!0,smoothScrollX:!0,rowSelect:"multi",gridSelection:s,onGridSelectionChange:i,getRowThemeOverride:f=>f%2===0?void 0:{bgCell:"#FBFBFB"}})})}function mt({data:l}){const[s,i]=n.useState([]),[m,h]=n.useState(!1),q=n.useCallback(()=>h(!1),[]),[E,$]=n.useState(null);n.useState([]);const[Q,y]=n.useState(!1),[M,b]=n.useState(null),[X,Y]=n.useState({columns:ne.empty(),rows:ne.empty()}),w=n.useMemo(()=>[{title:"ItemNo"},{title:"TotalQty"},{title:"OkQty"},{title:"RemainQty"}],[]),[f,j]=n.useState(w),B=n.useCallback((c,S)=>{const D=f.indexOf(c);if(D!==-1){const I={...c,width:S},L=[...f];L.splice(D,1,I),j(L)}},[f]),v=n.useCallback(([c,S])=>{const D=s[S]||{},{ItemNo:I="",TotalQty:L="",OkQty:H="",RemainQty:G=""}=D,d=W=>W!=null?String(W):"",z={0:{kind:x.Text,data:d(I)},1:{kind:x.Text,data:d(L)},2:{kind:x.Text,data:d(H)},3:{kind:x.Text,data:d(G)}};if(z.hasOwnProperty(c)){const{kind:W,data:N}=z[c];return{kind:W,data:N,displayData:N}}return{kind:x.Text,data:"",displayData:""}},[s]),[A,K]=n.useState(void 0);n.useCallback(c=>{console.log("cell",c),K(c)},[]),n.useEffect(()=>{i(l)},[l]);const C=(c,S)=>{let D;if(c[0]!==-1){console.log("Ignoring click on cell, cell[0] is neither -1 nor 1");return}if(c[0]===-1?(D=c[1],y(!0)):(D=c[0],y(!1)),M&&M[0]===c[0]&&M[1]===c[1]){console.log("Click again on the same cell, deactivating."),b(null),$(null);return}if(D>=0&&D<s.length){const I=s[D];$(I),b(c)}else console.log("Invalid row index:",D)};return t.jsx("div",{className:"w-full h-full border-t border-b overflow-hidden scroll-container ",children:t.jsx(fe,{columns:f,getCellContent:v,rows:s.length,showSearch:m,getCellsForSelection:!0,onSearchClose:q,width:"100%",height:"100%",rowMarkers:"both",useRef:n.useRef,onColumnResize:B,smoothScrollY:!0,smoothScrollX:!0,onCellClicked:C,rowSelect:"single",gridSelection:X,onGridSelectionChange:Y,getRowThemeOverride:c=>c%2===0?void 0:{bgCell:"#FBFBFB"}})})}function st({sampleTableA:l,sampleTableB:s,setSelection:i,selection:m}){return t.jsxs("div",{className:"w-full gap-1 h-full flex items-center justify-center",children:[t.jsxs("div",{className:"w-[65%] h-full flex flex-col border bg-white rounded-lg overflow-hidden pb-7",children:[t.jsx("div",{className:" text-xs font-medium flex items-center gap-2 p-2 text-blue-600 uppercase ",children:"THÔNG TIN BAROCODE"}),t.jsx(at,{selection:m,data:s,setSelection:i})]}),t.jsx("div",{className:"px-4 flex flex-col p-3  bg-[#eee] rounded-lg items-center justify-center",children:t.jsx(we,{})}),t.jsxs("div",{className:"w-[35%] h-full flex flex-col border bg-white rounded-lg overflow-hidden pb-7",children:[t.jsx("div",{className:"text-xs font-medium flex items-center gap-2 p-2 text-blue-600 uppercase",children:"THÔNG ĐƠN HÀNG"}),t.jsx(mt,{data:l})]})]})}ke.locale("vi");const{Title:ue}=de;function pt({filteredData:l,handleCheckBarcode:s,inputBarCode:i,setInputBarCode:m,YYWW:h,YYYYMM:q}){const[E]=n.useState(ke()),$=M=>{const b=M.format("dddd");return`${b.charAt(0).toUpperCase()+b.slice(1)}, ${M.format("DD/MM/YYYY")}`},Q=M=>{m(M.target.value)},y=()=>{i&&s(i)};return t.jsx("div",{className:"flex items-center gap-2",children:t.jsx(U,{layout:"vertical",children:t.jsxs(Xe,{className:"gap-4 flex items-center",children:[t.jsx(O,{children:t.jsx(U.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"Date"}),className:"mb-0",children:t.jsx(Z,{value:$(E),size:"small",className:"text-sm p-2",readOnly:!0})})}),t.jsx(O,{children:t.jsx(U.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"Barcode"}),tooltip:"Dùng để nhập mã vạch",className:"mb-0",children:t.jsx(Z,{value:i,onChange:Q,onPressEnter:y,placeholder:"Barcode",size:"small",className:"text-sm p-2  w-72"})})}),t.jsx(O,{children:t.jsx(U.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"Delivery No"}),className:"mb-0",children:t.jsx(Z,{value:l==null?void 0:l.DelvMngNo,size:"small",className:"text-sm p-2",readOnly:!0})})}),t.jsx(O,{children:t.jsx(U.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"Biz Unit"}),className:"mb-0",children:t.jsx(Z,{value:l==null?void 0:l.BizUnit,size:"small",className:"text-sm p-2",readOnly:!0})})}),t.jsx(O,{children:t.jsx(U.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"Purchase Type"}),className:"mb-0",children:t.jsx(Z,{value:l==null?void 0:l.PurchaseType,size:"small",className:"text-sm p-2",readOnly:!0})})}),t.jsx(O,{children:t.jsx(U.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"YYWW"}),className:"mb-0",children:t.jsx(ue,{level:3,className:"text-gray-800",children:h||"YYWW"})})}),t.jsx(O,{children:t.jsx(U.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"YYYYMM"}),className:"mb-0",children:t.jsx(ue,{level:3,className:"text-gray-800",children:q||"YYYYMM"})})})]})})})}const ht=l=>`
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
    `,ct={xmlFlags:2,serviceSeq:60010001,workingTag:"",companySeq:1,languageSeq:6,userSeq:0,pgmSeq:1036085},gt=l=>{const s=me(),i={...ct,...l},h={xmlDocument:ht(i),xmlFlags:i.xmlFlags,serviceSeq:i.serviceSeq,workingTag:i.workingTag,companySeq:i.companySeq,languageSeq:i.languageSeq,userSeq:i.userSeq,pgmSeq:i.pgmSeq};return re.post(`${ae}/mssql/stock-in/smaterial-qr-check-web`,h,{headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"}}).then(q=>{if(q.status===200||q.status===201)return q.data;throw new Error("Error from API: "+q.data.message)}).catch(q=>{const E=q.response?q.response.data.message||"Error from API":"Unknown error occurred";throw new Error(E)})},Nt=async(l,s)=>{try{const i=`${ae}/mssql/stock-in/itm-sug-get-active-delivery-item`,m=me(),h=await re.get(i,{params:{deliverySeq:l,purchaseType:s},headers:{Authorization:`Bearer ${m}`,"Content-Type":"application/json"}});return h.status===200?{success:!0,data:h.data.data}:{success:!1,message:ce.ERROR}}catch(i){return{success:!1,message:i.response?i.response.data.message:ce.ERROR}}},xt={xmlFlags:2,serviceSeq:2639,workingTag:"",companySeq:1,languageSeq:6,userSeq:0,pgmSeq:1036085},ut=async(l,s)=>{try{const i=me(),m={...xt,dataSave:l,xmlDocument:{xmlForCloseCheck:s.closeCheckXML,xmlForCloseItemCheck:s.closeItemCheckXML,xmlForMasterCheck:s.masterCheckXML,xmlForSheetCheck:s.sheetCheckXML,xmlForLotNoMasterCheck:s.sheetLotNoMasterCheckXML}},h=await re.post(`${ae}/mssql/stock-in/check-all-procedures-stock-in`,m,{headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"}});if(h.status>=200&&h.status<300)return h.data;throw new Error("Unexpected response status: "+h.status)}catch(i){let m="Unknown error occurred";throw i.response?m=i.response.data.message||`API error with status ${i.response.status}`:i.request?m="No response received from the server":m=i.message,new Error(m)}},{Title:ft}=de;function St({permissions:l,isMobile:s}){const{t:i}=Ke(),{id:m}=He(),h=n.useRef(null);n.useRef(null);const[q,E]=n.useState(!0),$=Ge();n.useRef(null);const[Q,y]=n.useState(null),[M,b]=n.useState(null),[X,Y]=n.useState(null),[w,f]=n.useState(!1),[j,B]=n.useState([]),v=n.useRef(""),A=n.useRef(j),[K,C]=n.useState(!1),[c,S]=n.useState(!1),[D,I]=n.useState(!1),[L,H]=n.useState(!1),[G,d]=n.useState(null),[z,W]=n.useState(null),[N,u]=n.useState([]),V=n.useRef(N),[F,P]=n.useState(!1),[a,Ce]=n.useState(null),[De,qe]=n.useState(null),[Ie,ye]=n.useState(null),Me="TEST_ACCESS_KEY",[le,ve]=n.useState({columns:ne.empty(),rows:ne.empty()}),[kt,Te]=n.useState(!1),[be,J]=n.useState(!0);n.useState(!0),n.useEffect(()=>{const e=localStorage.getItem("detailsStateIqc");Te(e==="open")},[]);const je=n.useCallback(e=>{const o=new Date(e),r=o.getFullYear(),p=String(o.getMonth()+1).padStart(2,"0"),k=String(o.getDate()).padStart(2,"0");return`${r}${p}${k}`},[])(new Date),oe=async(e,o)=>{try{E(!0);const r=await Nt(e,o);B((r==null?void 0:r.data)||[])}catch{B([])}finally{E(!1)}},Be=e=>{try{let o=e.replace(/-/g,"+").replace(/_/g,"/");const r=o.length%4===0?"":"=".repeat(4-o.length%4);return o+r}catch{throw new Error("Invalid Base64 URL")}},Ee=e=>{try{const o=Be(e),p=xe.AES.decrypt(o,Me).toString(xe.enc.Utf8);return JSON.parse(p)}catch{return $("/u/warehouse/material/delivery-list"),S(!0),null}};n.useEffect(()=>{if(m){const e=Ee(m);e&&(Ce(e),oe(e==null?void 0:e.DelvNo,e==null?void 0:e.PurchaseType))}},[m]),n.useEffect(()=>{const e=k=>{if(k.key==="Enter"&&v.current.trim()){const g=v.current.trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9/-]/g,"");pe(g),y(g),v.current=""}else if(k.key.length===1){const g=k.key.normalize("NFD").replace(/[\u0300-\u036f]/g,"");/^[a-zA-Z0-9/-]$/.test(g)&&(v.current+=g)}},o=()=>P(!0),r=()=>P(!1),p=()=>P(!0);return window.addEventListener("keypress",e),window.addEventListener("focus",o),window.addEventListener("blur",r),document.addEventListener("click",p),()=>{window.removeEventListener("keypress",e),window.removeEventListener("focus",o),window.removeEventListener("blur",r),document.removeEventListener("click",p)}},[]);const se=n.useCallback((e,o)=>{var k,g;const r=(k=e==null?void 0:e.LotNoFull)==null?void 0:k.trim().toLowerCase(),p=(g=e==null?void 0:e.Barcode)==null?void 0:g.trim().toLowerCase();u(T=>{if(!T.some(_=>{var R,ee;return((R=_.LotNoFull)==null?void 0:R.trim().toLowerCase())===r&&((ee=_.Barcode)==null?void 0:ee.trim().toLowerCase())===p})){const _=[...T,{SMImpKind:e==null?void 0:e.SMImpKind,ItemNo:e==null?void 0:e.ItemNo,LotNo:e==null?void 0:e.LotNo,Qty:e==null?void 0:e.Qty,DateCode:e==null?void 0:e.DateCode,ReelNo:e==null?void 0:e.ReelNo,Barcode:e==null?void 0:e.Barcode,ItemSeq:e==null?void 0:e.ItemSeq,WHSeq:e==null?void 0:e.WHSeq,WHName:e==null?void 0:e.WHName,CreateDate:e==null?void 0:e.CreateDate,RegDate:e==null?void 0:e.RegDate,YYWW:e==null?void 0:e.YYWW,YYMM:e==null?void 0:e.YYMM,YYMMDD:e==null?void 0:e.YYMMDD,InvoiceNo:e==null?void 0:e.InvoiceNo,PermitSerl:e==null?void 0:e.PermitSerl,PermitSeq:e==null?void 0:e.PermitSeq,EmpSeq:e==null?void 0:e.EmpSeq,EmpName:e==null?void 0:e.EmpName,DeptSeq:e==null?void 0:e.DeptSeq,DeptName:e==null?void 0:e.DeptName,CurrSeq:e==null?void 0:e.CurrSeq,CurrName:e==null?void 0:e.CurrName,ExRate:e==null?void 0:e.ExRate,Price:e==null?void 0:e.Price,CurAmt:e==null?void 0:e.CurAmt,DomPrice:e==null?void 0:e.DomPrice,DomAmt:e==null?void 0:e.DomAmt,LotNoFull:e==null?void 0:e.LotNoFull,StdUnitSeq:e==null?void 0:e.StdUnitSeq,STDUnitName:e==null?void 0:e.STDUnitName,UnitSeq:e==null?void 0:e.UnitSeq,UnitName:e==null?void 0:e.UnitName,CustSeq:e==null?void 0:e.CustSeq,CustName:e==null?void 0:e.CustName,ItemName:e==null?void 0:e.ItemName,Spec:e==null?void 0:e.Spec,DateIn:e==null?void 0:e.DateIn,StdQty:e==null?void 0:e.StdQty,FromAmt:e==null?void 0:e.FromAmt,FromVAT:e==null?void 0:e.FromVAT,BizUnit:e==null?void 0:e.BizUnit,SMImpKindName:e==null?void 0:e.SMImpKindName,PermitNo:e==null?void 0:e.PermitNo}];return o(),_}return T})},[]),ie=n.useCallback(et(async(e,o)=>{const r=await gt(e);if(r.success){const p=r.data[0];ge.success(o),b(null),C(!1),y(null),qe(p==null?void 0:p.YYWW),ye(p==null?void 0:p.YYMM),se(p,()=>{B(k=>k.map(g=>g.ItemNo===e.itemNo?{...g,OkQty:g.OkQty+e.qty,RemainQty:g.RemainQty-e.qty}:g))})}else C(!0),d(r==null?void 0:r.message)},100),[se]),pe=n.useCallback(e=>{const o=A.current,r=V.current;h.current.postMessage({type:"CHECK_BARCODE",barcode:e,tableData:o,tableScanHistory:r})},[]);n.useEffect(()=>(h.current=new Worker(new URL("/assets/workerWatingIqcStockIn-DB-4dmgh.js",import.meta.url)),h.current.onmessage=async e=>{const{success:o,message:r,data:p}=e.data;if(o){if(p){const{itemNo:k,qty:g,lot:T,dc:he,reel:_,barcode:R,permitSerl:ee,permitSeq:_e}=p,Qe={workingTag:"A",idx_no:"1",status:"0",dataSeq:"1",selected:"1",permitSeq:_e,permitSerl:ee,bizUnit:a==null?void 0:a.BizUnit,bizUnitName:a==null?void 0:a.BizUnitName,sMImpKind:a==null?void 0:a.ImpType,sMImpKindName:a==null?void 0:a.PurchaseType,itemNo:k,lotNo:T,qty:g,dateCode:he,reelNo:_,barcode:R};ie(Qe,r)}}else C(!0),d(r)},()=>{h.current.terminate(),ie.cancel()}),[a,ie]),n.useEffect(()=>{A.current=j,V.current=N},[j,N]);const $e=e=>{v.current=e.target.value,y(e.target.value)},Se=e=>`
          <DataBlock1>
              <WorkingTag>A</WorkingTag>
              <IDX_NO>1</IDX_NO>
              <Status>0</Status>
              <DataSeq>1</DataSeq>
              <Selected>1</Selected>
              <TABLE_NAME>DataBlock1</TABLE_NAME>
              <IsChangedMst>1</IsChangedMst>
              <BizUnit>${e.BizUnit}</BizUnit>
              <Date>${je}</Date>
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
      `,Le=(e,o)=>`
  <DataBlock2>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>${o+1}</IDX_NO>
    <DataSeq>${o+1}</DataSeq>
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
`,Ue=(e,o)=>`
    <DataBlock2>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>${o+1}</IDX_NO>
    <DataSeq>${o+1}</DataSeq>
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

`,Ye=(e,o)=>`
   <DataBlock1>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>${o+1}</IDX_NO>
    <DataSeq>${o+1}</DataSeq>
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
`,We=n.useCallback(async e=>{if(!be)return;if(J(!1),e.preventDefault(),f(!0),Y(null),I(!0),N.length===0){f(!1),C(!0),I(!1),Y(null),d("Chưa có dữ liệu để gửi. Vui lòng quét dữ liệu trước khi gửi.");return}const o=Se(a),r=N.map(Le).join(`
`),p=Ae(N),k=N.map(Ue).join(`
`),g=N.map(Ye).join(`
`);try{const T=await ut(N,{closeCheckXML:o,closeItemCheckXML:r,masterCheckXML:p,sheetCheckXML:k,sheetLotNoMasterCheckXML:g});Y(T),T.success?($("/u/warehouse/material/delivery-list"),I(!1),u([]),J(!0),oe(a==null?void 0:a.DelvNo,a==null?void 0:a.PurchaseType)):(I(!1),C(!0),d(T.message),J(!0))}catch(T){I(!1),Y({error:T.message}),C(!0),d(T.message),J(!0)}finally{f(!1),J(!0)}},[a,N]),Oe=()=>{const e=le.rows.items;let o=[];return e.forEach(r=>{const p=r[0],k=r[1]-1;for(let g=p;g<=k;g++)o.push(g)}),o},ze=n.useCallback(async e=>{e.preventDefault();const o=Oe();if(o.length===0){C(!0),d("Vui lòng chọn ít nhất một hàng để xóa.");return}if(N.length===0){C(!0),d("Không có dữ liệu nào để xóa.");return}const r=N.filter((p,k)=>!o.includes(k));u(r)},[N,le]),Fe=n.useCallback(async e=>{if(e.preventDefault(),N.length===0){C(!0),d("Không có dữ liệu để reset! Vui lòng quét dữ liệu trước.");return}u([]),oe(a==null?void 0:a.DelvNo,a==null?void 0:a.PurchaseType),ge.success("Reset form thành công!")},[a,N]),Pe=n.useCallback(async e=>{e.preventDefault(),C(!0),d("Chức năng đang trong quá trình phát triển?")},[]);return t.jsxs(t.Fragment,{children:[t.jsx(Ve,{children:t.jsxs("title",{children:["ITM - ",i("Waiting Iqc Stock In")]})}),t.jsx("div",{className:"bg-slate-50 p-3 h-screen overflow-hidden",children:t.jsxs("div",{className:"flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full",children:[t.jsxs("div",{className:"col-start-1 col-end-5 row-start-1 w-full rounded-lg ",children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx(ft,{level:4,className:"mt-2 uppercase opacity-85",children:"Waiting Iqc Stock In"}),t.jsx(rt,{status:F,handleSubmit:We,handleDelete:ze,handleRestFrom:Fe,handleUploadExcel:Pe})]}),t.jsxs("details",{className:"group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white",open:!0,children:[t.jsxs("summary",{className:"flex cursor-pointer items-center justify-between gap-1.5 text-gray-900",children:[t.jsxs("h2",{className:"text-xs font-medium flex items-center gap-2 text-blue-600 uppercase",children:[t.jsx(it,{}),i("Điều kiện truy vấn")]}),t.jsx("span",{className:"relative size-5 shrink-0",children:t.jsx(Re,{})})]}),t.jsx("div",{className:"flex p-2 gap-4",children:t.jsx(pt,{handleCheckBarcode:pe,inputBarCode:M,setInputBarCode:b,filteredData:a,YYWW:De,YYYYMM:Ie,bufferRef:v,handleInputChange:$e})})]})]}),t.jsx("div",{className:"col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto",children:t.jsx(st,{sampleTableA:j,sampleTableB:N,setSelection:ve,selection:le})})]})}),t.jsx(lt,{modal2Open:K,setModal2Open:C,error:G}),t.jsx(tt,{setModal4Open:I,modal4Open:D}),t.jsx(nt,{setModal5Open:H,modal5Open:L,successMessage:z}),t.jsx(ot,{modal3Open:c,setModal3Open:S,pathRouter:"/u/warehouse/material/delivery-list"})]})}export{St as default};
