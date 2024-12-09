import{j as t,B as Z,r as n,f as Xe,F as A,b as Ke,C as O,I as J,T as de,a as ie,H as re,c as ue,M as Ge,u as Ve,g as Je,s as he,d as Ze}from"./index-BWL2-FO5.js";import"./vi-CpZCkChj.js";import{R as ce}from"./SaveOutlined-DRwSIQLv.js";import{R as we}from"./DeleteOutlined-B7vfXHBU.js";import{R as Re,a as et,M as tt,L as nt,S as lt}from"./successSubmit-B6REqyco.js";import{a as ot,A as it}from"./index-DVC9OT9a.js";import{G as N,D as fe,C as te,a as ge}from"./index-CfwZ70iB.js";import{d as ke}from"./index-CB3PMu5P.js";import{a as rt,d as De}from"./dayjs.min-Ci9Ys7Dw.js";import{E as Ne}from"./constants-BUjU6TAr.js";import{R as at}from"./FilterOutlined-BKiALH9_.js";import"./CheckCircleTwoTone-LiT1d5CW.js";function mt({status:l,handleSubmit:r,handleDelete:a,handleRestFrom:i,handleUploadExcel:p}){return t.jsxs("div",{className:"flex items-center gap-2",children:[l?t.jsx(t.Fragment,{children:t.jsx("span",{className:"inline-flex items-center justify-center rounded-lg w-20 bg-emerald-100 px-5 py-[6px] text-emerald-700",children:t.jsx("p",{className:"whitespace-nowrap text-sm",children:"LIVE"})})}):t.jsx(t.Fragment,{children:t.jsx("span",{className:"inline-flex items-center justify-center rounded-lg w-20 bg-red-100 px-5 py-[6px] text-red-700",children:t.jsx("p",{className:"whitespace-nowrap text-sm",children:"OFF"})})}),t.jsx(Z,{type:"primary",icon:t.jsx(ce,{}),size:"middle",className:"uppercase",onClick:r,style:{backgroundColor:"#52c41a",borderColor:"#52c41a"},children:"Save"},"Save"),t.jsx(Z,{type:"primary",icon:t.jsx(we,{}),size:"middle",onClick:a,className:"uppercase text-white",style:{backgroundColor:"#ff4d4f",borderColor:"#ff4d4f"},children:"Row Delete"},"Row Delete"),t.jsx(Z,{type:"default",icon:t.jsx(ce,{}),size:"middle",className:"uppercase",color:"default",variant:"filled",onClick:i,style:{backgroundColor:"#f0f0f0",borderColor:"#d9d9d9"},children:"Reset"},"Reset"),t.jsx(Z,{type:"default",icon:t.jsx(Re,{}),size:"middle",className:"uppercase",color:"default",variant:"filled",onClick:p,style:{backgroundColor:"#ffa500",borderColor:"#ffa500"},children:"Excel Upload"},"Excel Upload")]})}function st({data:l,selection:r,setSelection:a}){const[i,p]=n.useState([]),[j,D]=n.useState(!1),$=n.useCallback(()=>D(!1),[]),Q=n.useMemo(()=>[{title:"WHName"},{title:"ItemNo"},{title:"LotNo"},{title:"LotNoFull"},{title:"Qty"},{title:"DateCode"},{title:"ReelNo"},{title:"Barcode"},{title:"CreateDate"},{title:"RegDate"},{title:"YYWW"},{title:"YYMM"},{title:"YYMMDD"},{title:"InvoiceNo"},{title:"DateIn"}],[]),[q,I]=n.useState(Q),b=n.useCallback((d,B)=>{const E=q.indexOf(d);if(E!==-1){const T={...d,width:B},L=[...q];L.splice(E,1,T),I(L)}},[q]),X=n.useCallback(([d,B])=>{const E=i[B]||{},{WHName:T="",ItemNo:L="",LotNo:K="",LotNoFull:C="",Qty:c="",DateCode:Y="",ReelNo:y="",Barcode:M="",CreateDate:S="",RegDate:W="",YYWW:G="",YYMM:k="",YYMMDD:F="",InvoiceNo:_="",DateIn:g=""}=E,x=z=>z!=null?String(z):"",V={0:{kind:N.Text,data:x(T)},1:{kind:N.Text,data:x(L)},2:{kind:N.Text,data:x(K)},3:{kind:N.Text,data:x(C)},4:{kind:N.Text,data:x(c)},5:{kind:N.Text,data:x(Y)},6:{kind:N.Text,data:x(y)},7:{kind:N.Text,data:x(M)},8:{kind:N.Text,data:x(S)},9:{kind:N.Text,data:x(W)},10:{kind:N.Text,data:x(G)},11:{kind:N.Text,data:x(k)},12:{kind:N.Text,data:x(F)},13:{kind:N.Text,data:x(_)},14:{kind:N.Text,data:x(g)}};if(V.hasOwnProperty(d)){const{kind:z,data:P}=V[d];return{kind:z,data:P,displayData:P}}return{kind:N.Text,data:"",displayData:""}},[i]),[U,w]=n.useState(void 0);return n.useCallback(d=>{console.log("cell",d),w(d)},[]),n.useEffect(()=>{p(l)},[l]),t.jsx("div",{className:"w-full h-full border-t border-b overflow-hidden scroll-container ",children:t.jsx(fe,{columns:q,getCellContent:X,rows:i.length,showSearch:j,getCellsForSelection:!0,onSearchClose:$,width:"100%",height:"100%",rowMarkers:"both",useRef:n.useRef,onColumnResize:b,smoothScrollY:!0,smoothScrollX:!0,rowSelect:"multi",gridSelection:r,onGridSelectionChange:a,getRowThemeOverride:d=>d%2===0?void 0:{bgCell:"#FBFBFB"}})})}function pt({data:l}){const[r,a]=n.useState([]),[i,p]=n.useState(!1),j=n.useCallback(()=>p(!1),[]),[D,$]=n.useState(null);n.useState([]);const[Q,q]=n.useState(!1),[I,b]=n.useState(null),[X,U]=n.useState({columns:te.empty(),rows:te.empty()}),w=n.useMemo(()=>[{title:"ItemNo"},{title:"TotalQty"},{title:"OkQty"},{title:"RemainQty"}],[]),[d,B]=n.useState(w),E=n.useCallback((c,Y)=>{const y=d.indexOf(c);if(y!==-1){const M={...c,width:Y},S=[...d];S.splice(y,1,M),B(S)}},[d]),T=n.useCallback(([c,Y])=>{const y=r[Y]||{},{ItemNo:M="",TotalQty:S="",OkQty:W="",RemainQty:G=""}=y,k=_=>_!=null?String(_):"",F={0:{kind:N.Text,data:k(M)},1:{kind:N.Text,data:k(S)},2:{kind:N.Text,data:k(W)},3:{kind:N.Text,data:k(G)}};if(F.hasOwnProperty(c)){const{kind:_,data:g}=F[c];return{kind:_,data:g,displayData:g}}return{kind:N.Text,data:"",displayData:""}},[r]),[L,K]=n.useState(void 0);n.useCallback(c=>{console.log("cell",c),K(c)},[]),n.useEffect(()=>{a(l)},[l]);const C=(c,Y)=>{let y;if(c[0]!==-1){console.log("Ignoring click on cell, cell[0] is neither -1 nor 1");return}if(c[0]===-1?(y=c[1],q(!0)):(y=c[0],q(!1)),I&&I[0]===c[0]&&I[1]===c[1]){console.log("Click again on the same cell, deactivating."),b(null),$(null);return}if(y>=0&&y<r.length){const M=r[y];$(M),b(c)}else console.log("Invalid row index:",y)};return t.jsx("div",{className:"w-full h-full border-t border-b overflow-hidden scroll-container ",children:t.jsx(fe,{columns:d,getCellContent:T,rows:r.length,showSearch:i,getCellsForSelection:!0,onSearchClose:j,width:"100%",height:"100%",rowMarkers:"both",useRef:n.useRef,onColumnResize:E,smoothScrollY:!0,smoothScrollX:!0,onCellClicked:C,rowSelect:"single",gridSelection:X,onGridSelectionChange:U,getRowThemeOverride:c=>c%2===0?void 0:{bgCell:"#FBFBFB"}})})}function ht({sampleTableA:l,sampleTableB:r,setSelection:a,selection:i}){return t.jsxs("div",{className:"w-full gap-1 h-full flex items-center justify-center",children:[t.jsxs("div",{className:"w-[65%] h-full flex flex-col border bg-white rounded-lg overflow-hidden pb-7",children:[t.jsx("div",{className:" text-xs font-medium flex items-center gap-2 p-2 text-blue-600 uppercase ",children:"THÔNG TIN BAROCODE"}),t.jsx(st,{selection:i,data:r,setSelection:a})]}),t.jsx("div",{className:"px-4 flex flex-col p-3  bg-[#eee] rounded-lg items-center justify-center",children:t.jsx(ot,{})}),t.jsxs("div",{className:"w-[35%] h-full flex flex-col border bg-white rounded-lg overflow-hidden pb-7",children:[t.jsx("div",{className:"text-xs font-medium flex items-center gap-2 p-2 text-blue-600 uppercase",children:"THÔNG ĐƠN HÀNG"}),t.jsx(pt,{data:l})]})]})}var ct={exports:{}};(function(l,r){(function(a,i){l.exports=i(rt)})(Xe,function(a){function i(D){return D&&typeof D=="object"&&"default"in D?D:{default:D}}var p=i(a),j={name:"vi",weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),weekStart:1,weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),ordinal:function(D){return D},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"}};return p.default.locale(j,null,!0),j})})(ct);De.locale("vi");const{Title:xe}=de;function gt({filteredData:l,handleCheckBarcode:r,inputBarCode:a,setInputBarCode:i,YYWW:p,YYYYMM:j}){const[D]=n.useState(De()),$=I=>{const b=I.format("dddd");return`${b.charAt(0).toUpperCase()+b.slice(1)}, ${I.format("DD/MM/YYYY")}`},Q=ke(I=>{i(I.target.value)},100),q=()=>{a&&r(a)};return t.jsx("div",{className:"flex items-center gap-2",children:t.jsx(A,{layout:"vertical",children:t.jsxs(Ke,{className:"gap-4 flex items-center",children:[t.jsx(O,{children:t.jsx(A.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"Date"}),className:"mb-0",children:t.jsx(J,{value:$(D),size:"small",className:"text-sm p-2",readOnly:!0})})}),t.jsx(O,{children:t.jsx(A.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"MAT Barcode"}),tooltip:"MAT Barcode",className:"mb-0",children:t.jsx(J,{value:a,onChange:Q,onPressEnter:q,placeholder:"Input Barcode",size:"small",className:"text-sm p-2  w-72"})})}),t.jsx(O,{children:t.jsx(A.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"Delivery No"}),className:"mb-0",children:t.jsx(J,{value:l==null?void 0:l.DelvMngNo,size:"small",className:"text-sm p-2",readOnly:!0})})}),t.jsx(O,{children:t.jsx(A.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"Biz Unit"}),className:"mb-0",children:t.jsx(J,{value:l==null?void 0:l.BizUnit,size:"small",className:"text-sm p-2",readOnly:!0})})}),t.jsx(O,{children:t.jsx(A.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"Purchase Type"}),className:"mb-0",children:t.jsx(J,{value:l==null?void 0:l.PurchaseType,size:"small",className:"text-sm p-2",readOnly:!0})})}),t.jsx(O,{children:t.jsx(A.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"YYWW"}),className:"mb-0",children:t.jsx(xe,{level:3,className:"text-gray-800",children:p||"YYWW"})})}),t.jsx(O,{children:t.jsx(A.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"YYYYMM"}),className:"mb-0",children:t.jsx(xe,{level:3,className:"text-gray-800",children:j||"YYYYMM"})})})]})})})}const Nt=l=>`
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
    `,xt={xmlFlags:2,serviceSeq:60010001,workingTag:"",companySeq:1,languageSeq:6,userSeq:3106,pgmSeq:1036085},dt=l=>{const r={...xt,...l},i={xmlDocument:Nt(r),xmlFlags:r.xmlFlags,serviceSeq:r.serviceSeq,workingTag:r.workingTag,companySeq:r.companySeq,languageSeq:r.languageSeq,userSeq:r.userSeq,pgmSeq:r.pgmSeq};return ie.post(`${re}/mssql/stock-in/smaterial-qr-check-web`,i,{headers:{"Content-Type":"application/json"}}).then(p=>{if(p.status===200||p.status===201)return p.data;throw new Error("Error from API: "+p.data.message)}).catch(p=>{const j=p.response?p.response.data.message||"Error from API":"Unknown error occurred";throw new Error(j)})};function ut({modal3Open:l,setModal3Open:r,pathRouter:a}){const i=ue(),p=()=>{i(a)};return t.jsx(Ge,{centered:!0,open:l,closable:!1,footer:null,children:t.jsxs("div",{className:"items-center justify-center flex flex-col",children:[t.jsx(et,{className:"text-4xl mb-2 text-red-500"}),t.jsx("p",{className:"mt-10 text-lg",children:"Chưa có thông tin nào để thực hiện."}),t.jsx(Z,{className:"mt-5",type:"primary",onClick:()=>p(),children:"Quay lại"})]})})}const ft=async(l,r)=>{try{const a=`${re}/mssql/stock-in/itm-sug-get-active-delivery-item`,i=await ie.get(a,{params:{deliverySeq:l,purchaseType:r},headers:{"Content-Type":"application/json"}});return i.status===200?{success:!0,data:i.data.data}:{success:!1,message:Ne.ERROR}}catch(a){return{success:!1,message:a.response?a.response.data.message:Ne.ERROR}}},kt={xmlFlags:2,serviceSeq:2639,workingTag:"",companySeq:1,languageSeq:6,userSeq:3106,pgmSeq:1036085},Dt=async(l,r)=>{try{const a={...kt,dataSave:l,xmlDocument:{xmlForCloseCheck:r.closeCheckXML,xmlForCloseItemCheck:r.closeItemCheckXML,xmlForMasterCheck:r.masterCheckXML,xmlForSheetCheck:r.sheetCheckXML,xmlForLotNoMasterCheck:r.sheetLotNoMasterCheckXML}},i=await ie.post(`${re}/mssql/stock-in/check-all-procedures-stock-in`,a,{headers:{"Content-Type":"application/json"}});if(i.status>=200&&i.status<300)return i.data;throw new Error("Unexpected response status: "+i.status)}catch(a){let i="Unknown error occurred";throw a.response?i=a.response.data.message||`API error with status ${a.response.status}`:a.request?i="No response received from the server":i=a.message,new Error(i)}},{Title:Ct}=de;function St({permissions:l,isMobile:r}){const{t:a}=Ve(),{id:i}=Je(),p=n.useRef(null);n.useRef(null);const[j,D]=n.useState(!0),$=ue();n.useRef(null);const[Q,q]=n.useState(null),[I,b]=n.useState(null),[X,U]=n.useState(null),[w,d]=n.useState(!1),[B,E]=n.useState([]),T=n.useRef(""),L=n.useRef(B),[K,C]=n.useState(!1),[c,Y]=n.useState(!1),[y,M]=n.useState(!1),[S,W]=n.useState(!1),[G,k]=n.useState(null),[F,_]=n.useState(null),[g,x]=n.useState([]),V=n.useRef(g),[z,P]=n.useState(!1),[s,Ce]=n.useState(null),[ye,Me]=n.useState(null),[qe,Ie]=n.useState(null),Te="TEST_ACCESS_KEY",[ne,ve]=n.useState({columns:te.empty(),rows:te.empty()}),[je,ae]=n.useState(!1);n.useEffect(()=>{const e=localStorage.getItem("detailsStateIqc");ae(e==="open")},[]);const be=e=>{const o=e.target.open;ae(o),localStorage.setItem("detailsStateIqc",o?"open":"closed")},Be=n.useCallback(e=>{const o=new Date(e),m=o.getFullYear(),h=String(o.getMonth()+1).padStart(2,"0"),f=String(o.getDate()).padStart(2,"0");return`${m}${h}${f}`},[])(new Date),le=async(e,o)=>{try{D(!0);const m=await ft(e,o);E((m==null?void 0:m.data)||[])}catch{E([])}finally{D(!1)}},Ee=e=>{try{let o=e.replace(/-/g,"+").replace(/_/g,"/");const m=o.length%4===0?"":"=".repeat(4-o.length%4);return o+m}catch{throw new Error("Invalid Base64 URL")}},Ye=e=>{try{const o=Ee(e),h=ge.AES.decrypt(o,Te).toString(ge.enc.Utf8);return JSON.parse(h)}catch{return $("/u/warehouse/material/delivery-list"),Y(!0),null}};n.useEffect(()=>{if(i){const e=Ye(i);e&&(Ce(e),le(e==null?void 0:e.DelvNo,e==null?void 0:e.PurchaseType))}},[i]),n.useEffect(()=>{const e=f=>{if(f.key==="Enter"&&T.current.trim()){const u=T.current.trim();se(u),q(u),T.current=""}else f.key.length===1&&(T.current+=f.key)},o=()=>P(!0),m=()=>P(!1),h=()=>P(!0);return window.addEventListener("keypress",e),window.addEventListener("focus",o),window.addEventListener("blur",m),document.addEventListener("click",h),()=>{window.removeEventListener("keypress",e),window.removeEventListener("focus",o),window.removeEventListener("blur",m),document.removeEventListener("click",h)}},[]);const me=n.useCallback((e,o)=>{var f,u;const m=(f=e==null?void 0:e.LotNoFull)==null?void 0:f.trim().toLowerCase(),h=(u=e==null?void 0:e.Barcode)==null?void 0:u.trim().toLowerCase();x(v=>{if(!v.some(H=>{var R,ee;return((R=H.LotNoFull)==null?void 0:R.trim().toLowerCase())===m&&((ee=H.Barcode)==null?void 0:ee.trim().toLowerCase())===h})){const H=[...v,{SMImpKind:e==null?void 0:e.SMImpKind,ItemNo:e==null?void 0:e.ItemNo,LotNo:e==null?void 0:e.LotNo,Qty:e==null?void 0:e.Qty,DateCode:e==null?void 0:e.DateCode,ReelNo:e==null?void 0:e.ReelNo,Barcode:e==null?void 0:e.Barcode,ItemSeq:e==null?void 0:e.ItemSeq,WHSeq:e==null?void 0:e.WHSeq,WHName:e==null?void 0:e.WHName,CreateDate:e==null?void 0:e.CreateDate,RegDate:e==null?void 0:e.RegDate,YYWW:e==null?void 0:e.YYWW,YYMM:e==null?void 0:e.YYMM,YYMMDD:e==null?void 0:e.YYMMDD,InvoiceNo:e==null?void 0:e.InvoiceNo,PermitSerl:e==null?void 0:e.PermitSerl,PermitSeq:e==null?void 0:e.PermitSeq,EmpSeq:e==null?void 0:e.EmpSeq,EmpName:e==null?void 0:e.EmpName,DeptSeq:e==null?void 0:e.DeptSeq,DeptName:e==null?void 0:e.DeptName,CurrSeq:e==null?void 0:e.CurrSeq,CurrName:e==null?void 0:e.CurrName,ExRate:e==null?void 0:e.ExRate,Price:e==null?void 0:e.Price,CurAmt:e==null?void 0:e.CurAmt,DomPrice:e==null?void 0:e.DomPrice,DomAmt:e==null?void 0:e.DomAmt,LotNoFull:e==null?void 0:e.LotNoFull,StdUnitSeq:e==null?void 0:e.StdUnitSeq,STDUnitName:e==null?void 0:e.STDUnitName,UnitSeq:e==null?void 0:e.UnitSeq,UnitName:e==null?void 0:e.UnitName,CustSeq:e==null?void 0:e.CustSeq,CustName:e==null?void 0:e.CustName,ItemName:e==null?void 0:e.ItemName,Spec:e==null?void 0:e.Spec,DateIn:e==null?void 0:e.DateIn,StdQty:e==null?void 0:e.StdQty,FromAmt:e==null?void 0:e.FromAmt,FromVAT:e==null?void 0:e.FromVAT,BizUnit:e==null?void 0:e.BizUnit,SMImpKindName:e==null?void 0:e.SMImpKindName,PermitNo:e==null?void 0:e.PermitNo}];return o(),H}return v})},[]),oe=n.useCallback(ke(async(e,o)=>{const m=await dt(e);if(m.success){const h=m.data[0];he.success(o),b(null),C(!1),q(null),Me(h==null?void 0:h.YYWW),Ie(h==null?void 0:h.YYMM),me(h,()=>{E(f=>f.map(u=>u.ItemNo===e.itemNo?{...u,OkQty:u.OkQty+e.qty,RemainQty:u.RemainQty-e.qty}:u))})}else C(!0),k(m==null?void 0:m.message)},100),[me]),se=n.useCallback(e=>{const o=L.current,m=V.current;p.current.postMessage({type:"CHECK_BARCODE",barcode:e,tableData:o,tableScanHistory:m})},[]);n.useEffect(()=>(p.current=new Worker(new URL("/assets/workerWatingIqcStockIn-DB-4dmgh.js",import.meta.url)),p.current.onmessage=async e=>{const{success:o,message:m,data:h}=e.data;if(o){if(h){const{itemNo:f,qty:u,lot:v,dc:pe,reel:H,barcode:R,permitSerl:ee,permitSeq:He}=h,Qe={workingTag:"A",idx_no:"1",status:"0",dataSeq:"1",selected:"1",permitSeq:He,permitSerl:ee,bizUnit:s==null?void 0:s.BizUnit,bizUnitName:s==null?void 0:s.BizUnitName,sMImpKind:s==null?void 0:s.ImpType,sMImpKindName:s==null?void 0:s.PurchaseType,itemNo:f,lotNo:v,qty:u,dateCode:pe,reelNo:H,barcode:R};oe(Qe,m)}}else C(!0),k(m)},()=>{p.current.terminate(),oe.cancel()}),[s,oe]),n.useEffect(()=>{L.current=B,V.current=g},[B,g]);const $e=e=>{T.current=e.target.value,q(e.target.value)},Le=e=>`
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
      `,Se=e=>`
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
      `,_e=(e,o)=>`
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
`,Ae=(e,o)=>`
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

`,Ue=(e,o)=>`
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
`,Oe=n.useCallback(async e=>{if(e.preventDefault(),d(!0),U(null),M(!0),g.length===0){d(!1),C(!0),M(!1),U(null),k("Chưa có dữ liệu để gửi. Vui lòng quét dữ liệu trước khi gửi.");return}const o=Le(s),m=g.map(_e).join(`
`),h=Se(g),f=g.map(Ae).join(`
`),u=g.map(Ue).join(`
`);try{const v=await Dt(g,{closeCheckXML:o,closeItemCheckXML:m,masterCheckXML:h,sheetCheckXML:f,sheetLotNoMasterCheckXML:u});U(v),v.success?(M(!1),W(!0),_("Tất cả các dữ liệu đã được thực thi thành công!"),x([]),le(s==null?void 0:s.DelvNo,s==null?void 0:s.PurchaseType)):(M(!1),C(!0),k(v.message))}catch(v){M(!1),U({error:v.message}),C(!0),k(v.message)}finally{d(!1)}},[s,g]),We=()=>{const e=ne.rows.items;let o=[];return e.forEach(m=>{const h=m[0],f=m[1]-1;for(let u=h;u<=f;u++)o.push(u)}),o},Fe=n.useCallback(async e=>{e.preventDefault();const o=We();if(o.length===0){C(!0),k("Vui lòng chọn ít nhất một hàng để xóa.");return}if(g.length===0){C(!0),k("Không có dữ liệu nào để xóa.");return}const m=g.filter((h,f)=>!o.includes(f));x(m)},[g,ne]),ze=n.useCallback(async e=>{if(e.preventDefault(),g.length===0){C(!0),k("Không có dữ liệu để reset! Vui lòng quét dữ liệu trước.");return}x([]),le(s==null?void 0:s.DelvNo,s==null?void 0:s.PurchaseType),he.success("Reset form thành công!")},[s,g]),Pe=n.useCallback(async e=>{e.preventDefault(),C(!0),k("Chức năng đang trong quá trình phát triển?")},[]);return t.jsxs(t.Fragment,{children:[t.jsx(Ze,{children:t.jsxs("title",{children:["ITM - ",a("Waiting Iqc Stock In")]})}),t.jsx("div",{className:"bg-slate-50 p-3 h-screen overflow-hidden",children:t.jsxs("div",{className:"flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full",children:[t.jsxs("div",{className:"col-start-1 col-end-5 row-start-1 w-full rounded-lg ",children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx(Ct,{level:4,className:"mt-2 uppercase opacity-85",children:"Waiting Iqc Stock In"}),t.jsx(mt,{status:z,handleSubmit:Oe,handleDelete:Fe,handleRestFrom:ze,handleUploadExcel:Pe})]}),t.jsxs("details",{className:"group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white",open:je,onToggle:be,children:[t.jsxs("summary",{className:"flex cursor-pointer items-center justify-between gap-1.5 text-gray-900",children:[t.jsxs("h2",{className:"text-xs font-medium flex items-center gap-2 text-blue-600 uppercase",children:[t.jsx(at,{}),a("Điều kiện truy vấn")]}),t.jsx("span",{className:"relative size-5 shrink-0",children:t.jsx(it,{})})]}),t.jsx("div",{className:"flex p-2 gap-4",children:t.jsx(gt,{handleCheckBarcode:se,inputBarCode:I,setInputBarCode:b,filteredData:s,YYWW:ye,YYYYMM:qe,bufferRef:T,handleInputChange:$e})})]})]}),t.jsx("div",{className:"col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto",children:t.jsx(ht,{sampleTableA:B,sampleTableB:g,setSelection:ve,selection:ne})})]})}),t.jsx(tt,{modal2Open:K,setModal2Open:C,error:G}),t.jsx(nt,{setModal4Open:M,modal4Open:y}),t.jsx(lt,{setModal5Open:W,modal5Open:S,successMessage:F}),t.jsx(ut,{modal3Open:c,setModal3Open:Y,pathRouter:"/u/warehouse/material/delivery-list"})]})}export{St as default};