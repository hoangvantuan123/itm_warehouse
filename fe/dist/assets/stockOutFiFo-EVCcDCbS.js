import{j as t,B as ee,r as n,f as Se,F as te,b as Xe,c as le,I as de,a9 as he,C as ne,G as g,D as xe,H as ae,a as se,E as pe,u as ze,e as Ge,i as Ye,l as Ke,s as ge,g as Ve,T as Je}from"./index-BRdHSrU3.js";import{a as Ze,A as Re}from"./index-BZXw2AV1.js";import{C as ke}from"./index-BEDMd2lo.js";import{R as fe}from"./SaveOutlined-i11tk4Wt.js";import{R as et}from"./DeleteOutlined-BKKxyFYc.js";import{R as tt}from"./UploadOutlined-CteKYGfB.js";import{L as nt,S as ot}from"./successSubmit-Bn39uEys.js";import"./index-BDn69Ycw.js";import{a as ie}from"./tokenService-BioOSVnB.js";import{M as rt}from"./modalWaiting-CcQk9_dv.js";import{R as lt}from"./FileTextOutlined-BWpvRVAX.js";import"./ExclamationCircleOutlined-Cj092FXG.js";function at({status:o,handleSubmit:s,handleDelete:h,handleRestFrom:i,handleUploadExcel:p}){return t.jsxs("div",{className:"flex items-center gap-2",children:[o?t.jsx(t.Fragment,{children:t.jsx("span",{className:"inline-flex items-center justify-center rounded-lg w-20 bg-emerald-100 px-5 py-[6px] text-emerald-700",children:t.jsx("p",{className:"whitespace-nowrap text-sm",children:"LIVE"})})}):t.jsx(t.Fragment,{children:t.jsx("span",{className:"inline-flex items-center justify-center rounded-lg w-20 bg-red-100 px-5 py-[6px] text-red-700",children:t.jsx("p",{className:"whitespace-nowrap text-sm",children:"OFF"})})}),t.jsx(ee,{type:"primary",icon:t.jsx(fe,{}),size:"middle",className:"uppercase",onClick:s,style:{backgroundColor:"#52c41a",borderColor:"#52c41a"},children:"Save"},"Save"),t.jsx(ee,{type:"primary",icon:t.jsx(et,{}),size:"middle",onClick:h,className:"uppercase text-white",style:{backgroundColor:"#ff4d4f",borderColor:"#ff4d4f"},children:"Row Delete"},"Row Delete"),t.jsx(ee,{type:"default",icon:t.jsx(fe,{}),size:"middle",className:"uppercase",color:"default",variant:"filled",onClick:i,style:{backgroundColor:"#f0f0f0",borderColor:"#d9d9d9"},children:"Reset"},"Reset"),t.jsx(ee,{type:"default",icon:t.jsx(tt,{}),size:"middle",className:"uppercase",color:"default",variant:"filled",onClick:p,style:{backgroundColor:"#ffa500",borderColor:"#ffa500"},children:"Excel Upload"},"Excel Upload")]})}Se.locale("vi");function st({filteredData:o,handleCheckBarcode:s,inputBarCode:h,setInputBarCode:i,setCheckValueIsStop:p}){const[c]=n.useState(Se()),[w,F]=n.useState(o==null?void 0:o.IsStop),_=S=>{const I=S.format("dddd");return`${I.charAt(0).toUpperCase()+I.slice(1)}, ${S.format("DD/MM/YYYY")}`},b=S=>{i(S.target.value)},$=()=>{h&&s(h)},N=S=>{F(S.target.checked);const I=S.target.checked?1:0;p(I)};return t.jsx("div",{className:"flex items-center gap-2",children:t.jsxs(te,{layout:"vertical",onKeyDown:S=>{S.key==="Enter"&&S.preventDefault()},children:[" ",t.jsxs(Xe,{className:"gap-4 flex items-center",children:[t.jsx(le,{children:t.jsx(te.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"Date"}),className:"mb-0",children:t.jsx(de,{value:_(c),size:"small",className:"text-sm p-2",readOnly:!0})})}),t.jsx(le,{children:t.jsx(te.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"Barcode"}),tooltip:"Dùng để nhập mã vạch",className:"mb-0",children:t.jsx(de,{value:h,onChange:b,onPressEnter:$,placeholder:"Barcode",size:"small",className:"text-sm p-2  w-80"})})}),t.jsx(le,{children:t.jsx(te.Item,{label:t.jsx("span",{className:"uppercase text-[10px]",children:"Trạng thái Y/N"}),className:"mb-0",children:(o==null?void 0:o.IsStop)===!0?t.jsx(t.Fragment,{children:t.jsx(he,{onChange:N,children:t.jsx("span",{className:"uppercase",children:"Đơn hàng hoàn thành"})})}):t.jsxs(t.Fragment,{children:[" ",t.jsx(he,{onChange:N,children:w?t.jsx("span",{className:" uppercase",children:"Đơn hàng hoàn thành"}):t.jsx("span",{className:"uppercase",children:"Đơn hàng chưa hoàn thành"})})]})})})]})]})})}function it({data:o}){const[s,h]=n.useState([]),[i,p]=n.useState(!1),c=n.useCallback(()=>p(!1),[]),[w,F]=n.useState(null);n.useState([]);const[_,b]=n.useState(!1),[$,N]=n.useState(null),[S,I]=n.useState({columns:ne.empty(),rows:ne.empty()}),v=n.useMemo(()=>[{title:"ItemNo"},{title:"RemainQty"},{title:"OutQty"},{title:"Qty1"},{title:"ItemName"},{title:"Spec"},{title:"UnitName"}],[]),[x,B]=n.useState(v),L=n.useCallback((r,E)=>{const u=x.indexOf(r);if(u!==-1){const k={...r,width:E},j=[...x];j.splice(u,1,k),B(j)}},[x]),P=n.useCallback(([r,E])=>{const u=s[E]||{},{ItemNo:k="",RemainQty:j="",OutQty:z="",Qty1:d="",ItemName:M="",Spec:H="",UnitName:G=""}=u,y=A=>A!=null?String(A):"",C={0:{kind:g.Text,data:y(k)},1:{kind:g.Text,data:y(j)},2:{kind:g.Text,data:y(z)},3:{kind:g.Text,data:y(d)},4:{kind:g.Text,data:y(M)},5:{kind:g.Text,data:y(H)},6:{kind:g.Text,data:y(G)}};if(C.hasOwnProperty(r)){const{kind:A,data:U}=C[r];return{kind:A,data:U,displayData:U}}return{kind:g.Text,data:"",displayData:""}},[s]),[D,X]=n.useState(void 0);n.useCallback(r=>{console.log("cell",r),X(r)},[]),n.useEffect(()=>{h(o)},[o]);const T=(r,E)=>{let u;if(r[0]!==-1){console.log("Ignoring click on cell, cell[0] is neither -1 nor 1");return}if(r[0]===-1?(u=r[1],b(!0)):(u=r[0],b(!1)),$&&$[0]===r[0]&&$[1]===r[1]){console.log("Click again on the same cell, deactivating."),N(null),F(null);return}if(u>=0&&u<s.length){const k=s[u];F(k),N(r)}else console.log("Invalid row index:",u)};return t.jsx("div",{className:"w-full h-full border-t border-b overflow-hidden scroll-container ",children:t.jsx(xe,{columns:x,getCellContent:P,rows:s.length,showSearch:i,getCellsForSelection:!0,onSearchClose:c,width:"100%",height:"100%",rowMarkers:"both",useRef:n.useRef,onColumnResize:L,smoothScrollY:!0,smoothScrollX:!0,onCellClicked:T,rowSelect:"single",gridSelection:S,onGridSelectionChange:I,getRowThemeOverride:r=>r%2===0?void 0:{bgCell:"#FBFBFB"}})})}function ct({data:o,selection:s,setSelection:h}){const[i,p]=n.useState([]),[c,w]=n.useState(!1),F=n.useCallback(()=>w(!1),[]),[_,b]=n.useState(null);n.useState([]);const[$,N]=n.useState(!1),[S,I]=n.useState(null),v=n.useMemo(()=>[{title:"FactUnitName"},{title:"InWHName"},{title:"OutWHName"},{title:"Qty"},{title:"ReqQty"},{title:"DateCode"},{title:"ReelNo"},{title:"StockOutDate"},{title:"LotNo"},{title:"LotNoFull"},{title:"Barcode"}],[]),[x,B]=n.useState(v),L=n.useCallback((r,E)=>{const u=x.indexOf(r);if(u!==-1){const k={...r,width:E},j=[...x];j.splice(u,1,k),B(j)}},[x]),P=n.useCallback(([r,E])=>{const u=i[E]||{},{FactUnitName:k="",InWHName:j="",OutWHName:z="",ItemNo:d="",Qty:M="",ReqQty:H="",DateCode:G="",ReelNo:y="",StockOutDate:C="",LotNo:A="",LotNoFull:U="",Barcode:oe=""}=u,O=Y=>Y!=null?String(Y):"",V={0:{kind:g.Text,data:O(k)},1:{kind:g.Text,data:O(j)},2:{kind:g.Text,data:O(z)},3:{kind:g.Text,data:O(d)},4:{kind:g.Text,data:O(M)},5:{kind:g.Text,data:O(H)},6:{kind:g.Text,data:O(G)},7:{kind:g.Text,data:O(y)},8:{kind:g.Text,data:O(C)},9:{kind:g.Text,data:O(A)},10:{kind:g.Text,data:O(U)},11:{kind:g.Text,data:O(oe)}};if(V.hasOwnProperty(r)){const{kind:Y,data:K}=V[r];return{kind:Y,data:K,displayData:K}}return{kind:g.Text,data:"",displayData:""}},[i]),[D,X]=n.useState(void 0);n.useCallback(r=>{console.log("cell",r),X(r)},[]),n.useEffect(()=>{p(o)},[o]);const T=(r,E)=>{let u;if(r[0]!==-1){console.log("Ignoring click on cell, cell[0] is neither -1 nor 1");return}if(r[0]===-1?(u=r[1],N(!0)):(u=r[0],N(!1)),S&&S[0]===r[0]&&S[1]===r[1]){console.log("Click again on the same cell, deactivating."),I(null),b(null);return}if(u>=0&&u<i.length){const k=i[u];b(k),I(r)}else console.log("Invalid row index:",u)};return t.jsx("div",{className:"w-full h-full border-t border-b overflow-hidden scroll-container ",children:t.jsx(xe,{columns:x,getCellContent:P,rows:i.length,showSearch:c,getCellsForSelection:!0,onSearchClose:F,width:"100%",height:"100%",rowMarkers:"both",useRef:n.useRef,onColumnResize:L,smoothScrollY:!0,smoothScrollX:!0,onCellClicked:T,rowSelect:"single",gridSelection:s,onGridSelectionChange:h,getRowThemeOverride:r=>r%2===0?void 0:{bgCell:"#FBFBFB"}})})}function ut({sampleTableA:o,sampleTableB:s,setSelection:h,selection:i}){return t.jsxs("div",{className:"w-full gap-1 h-full flex items-center justify-center",children:[t.jsxs("div",{className:"w-[55%] h-full flex flex-col border bg-white rounded-lg overflow-hidden pb-7",children:[t.jsx("div",{className:" text-xs font-medium flex items-center gap-2 p-2 text-blue-600 uppercase ",children:"B"}),t.jsx(ct,{data:s,setSelection:h,selection:i})]}),t.jsx("div",{className:"px-4 flex flex-col p-3  bg-[#eee] rounded-lg items-center justify-center",children:t.jsx(Ze,{})}),t.jsxs("div",{className:"w-[45%] h-full flex flex-col border bg-white rounded-lg overflow-hidden pb-7",children:[t.jsx("div",{className:" text-xs font-medium flex items-center gap-2 p-2 text-blue-600 uppercase ",children:"A"}),t.jsx(it,{data:o})]})]})}const mt=async o=>{try{const s=`${ae}/mssql/stock-out/itm-spd-mm-out-req-item-list`,h=ie(),i=await se.get(s,{params:{outReqSeq:o},headers:{Authorization:`Bearer ${h}`,"Content-Type":"application/json"}});return i.status===200?{success:!0,data:i.data.data}:{success:!1,message:pe.ERROR}}catch(s){return{success:!1,message:s.response?s.response.data.message:pe.ERROR}}},dt=o=>`
        <DataBlock1>
          <WorkingTag>${o.WorkingTag}</WorkingTag>
          <IDX_NO>1</IDX_NO>
          <Status>0</Status>
          <DataSeq>1</DataSeq>
          <Selected>1</Selected>
          <TABLE_NAME>DataBlock1</TABLE_NAME>
          <OutReqSeq>${o.OutReqSeq}</OutReqSeq>
          <OutReqItemSerl>${o.OutReqItemSerl}</OutReqItemSerl>
          <WorkOrderSeq>${o.WorkOrderSeq}</WorkOrderSeq>
          <WorkOrderSerl>${o.WorkOrderSerl}</WorkOrderSerl>
          <FactUnit>${o.FactUnit}</FactUnit>
          <FactUnitName>${o.FactUnitName}</FactUnitName>
          <InWHSeq>${o.InWHSeq}</InWHSeq>
          <InWHName>${o.InWHName}</InWHName>>
          <OutWHSeq>${o.OutWHSeq}</OutWHSeq>
          <OutWHName>${o.OutWHName}</OutWHName>
          <ItemSeq>${o.ItemSeq}</ItemSeq>
          <UnitSeq>${o.UnitSeq}</UnitSeq>
          <ItemNo>${o.ItemNo}</ItemNo>
          <LotNo>${o.LotNo}</LotNo>
          <Qty>${o.Qty}</Qty>
          <DateCode>${o.DateCode}</DateCode>
          <ReelNo>${o.ReelNo}</ReelNo>
          <Barcode>${o.Barcode}</Barcode>
        </DataBlock1>
    `,ht={xmlFlags:2,serviceSeq:60010002,workingTag:"",languageSeq:6,pgmSeq:1036085},pt=o=>{const s={...ht,...o},h=ie(),p={xmlDocument:dt(s),xmlFlags:s.xmlFlags,serviceSeq:s.serviceSeq,workingTag:s.workingTag,languageSeq:s.languageSeq,pgmSeq:s.pgmSeq};return se.post(`${ae}/mssql/stock-out/smaterial-qr-check-stock-out-web`,p,{headers:{Authorization:`Bearer ${h}`,"Content-Type":"application/json"}}).then(c=>{if(c.status===200||c.status===201)return c.data;throw new Error("Error from API: "+c.data.message)}).catch(c=>{const w=c.response?c.response.data.message||"Error from API":"Unknown error occurred";throw new Error(w)})},gt={xmlFlags:2,serviceSeq:2639,workingTag:"",languageSeq:6,pgmSeq:1036085},kt=async(o,s,h,i)=>{try{const p=ie(),c={...gt,checkValueIsStop:o,outReqSeq:s,dataSave:h,xmlDocument:{xmlSCOMCloseCheckWEB:i.xmlSCOMCloseCheckWEB,xmlSCOMCloseItemCheckWEB:i.xmlSCOMCloseItemCheckWEB,xmlSPDMMOutProcCheckWEB:i.xmlSPDMMOutProcCheckWEB,xmlSPDMMOutProcItemCheckWEB:i.xmlSPDMMOutProcItemCheckWEB}},w=await se.post(`${ae}/mssql/stock-out/check-all-procedures-stock-out-fifo`,c,{headers:{Authorization:`Bearer ${p}`,"Content-Type":"application/json"}});if(w.status>=200&&w.status<300)return w.data;throw new Error("Unexpected response status: "+w.status)}catch(p){let c="Unknown error occurred";throw p.response?c=p.response.data.message||`API error with status ${p.response.status}`:p.request?c="No response received from the server":c=p.message,new Error(c)}},{Title:ft,Text:Tt}=Je;function Ft({permissions:o,isMobile:s}){const{t:h}=ze(),i=Ge(),{id:p}=Ye(),c=n.useRef(null),[w,F]=n.useState(null),[_,b]=n.useState(null),[$,N]=n.useState(null),[S,I]=n.useState(!1),v=n.useRef(""),[x,B]=n.useState([]),L=n.useRef(x),[P,D]=n.useState(!1);n.useState(!1);const[X,T]=n.useState(!1),[r,E]=n.useState(!1),[u,k]=n.useState(null),[j,z]=n.useState(null),[d,M]=n.useState([]),H=n.useRef(d),[G,y]=n.useState(!1),[C,A]=n.useState(null),[U,oe]=n.useState(C!=null&&C.IsStop?1:0),[O,V]=n.useState({columns:ne.empty(),rows:ne.empty()}),[Y,K]=n.useState(!1),[qe,Oe]=n.useState(!0),[St,Ce]=n.useState(!1),Ne="TEST_ACCESS_KEY";n.useEffect(()=>{const e=localStorage.getItem("detailsStateStockOutFiFo");Ce(e==="open")},[]);const Ie=e=>{try{let l=e.replace(/-/g,"+").replace(/_/g,"/");const m=l.length%4===0?"":"=".repeat(4-l.length%4);return l+m}catch{throw new Error("Invalid Base64 URL")}},ye=e=>{try{const l=Ie(e),q=ke.AES.decrypt(l,Ne).toString(ke.enc.Utf8);return JSON.parse(q)}catch{return i("/u/warehouse/material/stock-out-request"),null}},ce=async e=>{try{K(!0);const l=await mt(e);B((l==null?void 0:l.data)||[])}catch{B([])}finally{K(!1)}};n.useEffect(()=>{if(p){const e=ye(p);e&&(A(e),ce(e==null?void 0:e.OutReqSeq))}},[p]);const we=n.useCallback((e,l)=>{var f,a;const m=(f=e==null?void 0:e.LotNoFull)==null?void 0:f.trim().toLowerCase(),q=(a=e==null?void 0:e.Barcode)==null?void 0:a.trim().toLowerCase();M(W=>{if(!W.some(Q=>{var Z,R;return((Z=Q.LotNoFull)==null?void 0:Z.trim().toLowerCase())===m&&((R=Q.Barcode)==null?void 0:R.trim().toLowerCase())===q})){const Q=[...W,{OutReqSeq:e==null?void 0:e.OutReqSeq,OutReqItemSerl:e==null?void 0:e.OutReqItemSerl,WorkOrderSeq:e==null?void 0:e.WorkOrderSeq,WorkOrderSerl:e==null?void 0:e.WorkOrderSerl,FactUnit:e==null?void 0:e.FactUnit,FactUnitName:e==null?void 0:e.FactUnitName,InWHSeq:e==null?void 0:e.InWHSeq,InWHName:e==null?void 0:e.InWHName,OutWHSeq:e==null?void 0:e.OutWHSeq,OutWHName:e==null?void 0:e.OutWHName,ItemSeq:e==null?void 0:e.ItemSeq,UnitSeq:e==null?void 0:e.UnitSeq,ItemNo:e==null?void 0:e.ItemNo,LotNo:e==null?void 0:e.LotNo,Qty:e==null?void 0:e.Qty,DateCode:e==null?void 0:e.DateCode,ReelNo:e==null?void 0:e.ReelNo,Barcode:e==null?void 0:e.Barcode,StockOutDate:e==null?void 0:e.StockOutDate,LotNoFull:e==null?void 0:e.LotNoFull,ReqQty:e==null?void 0:e.ReqQty,EmpSeq:e==null?void 0:e.EmpSeq}];return l(),Q}return W})},[]),ue=n.useCallback(e=>{const l=L.current,m=H.current;c.current.postMessage({type:"CHECK_BARCODE",barcode:e,tableData:l,tableScanHistory:m})},[]);n.useEffect(()=>{const e=f=>{if(f.key==="Enter"&&v.current.trim()){const a=v.current.trim();ue(a),F(a),v.current=""}else f.key.length===1&&(v.current+=f.key)},l=()=>y(!0),m=()=>y(!1),q=()=>y(!0);return window.addEventListener("keypress",e),window.addEventListener("focus",l),window.addEventListener("blur",m),document.addEventListener("click",q),()=>{window.removeEventListener("keypress",e),window.removeEventListener("focus",l),window.removeEventListener("blur",m),document.removeEventListener("click",q)}},[]);const re=n.useCallback(Ke.debounce(async(e,l)=>{const m=await pt(e);if(m.success){const q=m.data[0];ge.success(l),b(null),D(!1),F(null),we(q,()=>{B(f=>f.map(a=>a.ItemNo===e.ItemNo?{...a,OutQty:a.OutQty+e.Qty,RemainQty:a.RemainQty-e.Qty}:a))})}else D(!0),k(m==null?void 0:m.message)},100),[]);n.useEffect(()=>(c.current=new Worker(new URL("/assets/workeStockOutFiFo-DVmTYmS-.js",import.meta.url)),c.current.onmessage=async e=>{const{success:l,message:m,data:q}=e.data;if(l){if(q){const{itemNo:f,qty:a,lot:W,dc:J,reel:Q,barcode:Z,UnitSeq:R,ItemSeq:ve,OutWHName:Be,OutWHSeq:Me,InWHName:Ae,InWHSeq:$e,FactUnitName:Ue,FactUnit:Le,WorkOrderSerl:He,WorkOrderSeq:Qe,OutReqItemSerl:_e,OutReqSeq:Pe}=q;re({WorkingTag:"A",Idx_no:"1",Status:"0",DataSeq:"1",Selected:"1",OutReqSeq:Pe,OutReqItemSerl:_e,WorkOrderSeq:Qe,WorkOrderSerl:He,FactUnit:Le,FactUnitName:Ue,InWHSeq:$e,InWHName:Ae,OutWHSeq:Me,OutWHName:Be,ItemSeq:ve,UnitSeq:R,ItemNo:f,LotNo:W,Qty:a,DateCode:J,ReelNo:Q,Barcode:Z},m)}}else D(!0),k(m)},()=>{c.current.terminate(),re.cancel()}),[C,re]),n.useEffect(()=>{L.current=x,H.current=d},[x,d]);const De=e=>`
          <DataBlock1>
              <WorkingTag>A</WorkingTag>
              <IDX_NO>1</IDX_NO>
              <Status>0</Status>
              <DataSeq>1</DataSeq>
              <Selected>1</Selected>
              <TABLE_NAME>DataBlock1</TABLE_NAME>
              <IsChangedMst>1</IsChangedMst>
              <FactUnit>${e.FactUnit}</FactUnit>
              <Date>${e.StockOutDate}</Date>
              <ServiceSeq>3032</ServiceSeq>
              <MethodSeq>2</MethodSeq>
              <DtlUnitSeq>1</DtlUnitSeq>
          </DataBlock1>
      `,Ee=(e,l)=>`
  <DataBlock2>
   <WorkingTag>A</WorkingTag>
    <IDX_NO>${l+1}</IDX_NO>
    <DataSeq>${l+1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <ItemSeq>${e.ItemSeq}</ItemSeq>
    <FactUnit>${e.FactUnit}</FactUnit>
    <TABLE_NAME>DataBlock2</TABLE_NAME>
    <FactUnitOld>1</FactUnitOld>
    <DateOld>${e.StockOutDate}</DateOld>
    <ServiceSeq>3032</ServiceSeq>
    <MethodSeq>2</MethodSeq>
    <Date>${e.StockOutDate}</Date>
  </DataBlock2>
`,We=e=>`
        <DataBlock1>
            <WorkingTag>A</WorkingTag>
    <IDX_NO>1</IDX_NO>
    <Status>0</Status>
    <DataSeq>1</DataSeq>
    <Selected>1</Selected>
    <TABLE_NAME>DataBlock1</TABLE_NAME>
    <IsChangedMst>1</IsChangedMst>
    <UseType>6044001</UseType>
    <IsOutSide>0</IsOutSide>
    <OutWHSeq />
    <InWHSeq>${e.InWHSeq}</InWHSeq>
    <MatOutSeq>0</MatOutSeq>
    <FactUnit>${e.FactUnit}</FactUnit>
    <MatOutNo />
    <MatOutDate>${e.StockOutDate}</MatOutDate>
    <EmpSeq>${e.EmpSeq}</EmpSeq>
    <MatOutType />
    <Remark />
        </DataBlock1>
    `,je=(e,l)=>`
  <DataBlock3>
   <WorkingTag>A</WorkingTag>
     <IDX_NO>${l+1}</IDX_NO>
    <DataSeq>${l+1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <ReqQty>${e.ReqQty}</ReqQty>
    <Qty>${e.Qty}</Qty>
    <StdUnitQty>0</StdUnitQty>
    <Remark />
    <ItemLotNo>${e.LotNoFull}</ItemLotNo>
    <SerialNoFrom />
    <MatOutSeq></MatOutSeq>
    <OutItemSerl>0</OutItemSerl>
    <ItemSeq>${e.ItemSeq}</ItemSeq>
    <OutWHSeq>${e.OutWHSeq}</OutWHSeq>
    <InWHSeq>${e.InWHSeq}</InWHSeq>
    <UnitSeq>${e.UnitSeq}</UnitSeq>
    <WorkOrderSeq>${e.WorkOrderSeq}</WorkOrderSeq>
    <ConsgnmtCustSeq>0</ConsgnmtCustSeq>
    <OutReqSeq>${e.OutReqSeq}</OutReqSeq>
    <OutReqItemSerl>${e.OutReqItemSerl}</OutReqItemSerl>
    <PJTSeq>0</PJTSeq>
    <WBSSeq>0</WBSSeq>
    <WorkOrderSerl>${e.WorkOrderSerl}</WorkOrderSerl>
    <AlterRate>0</AlterRate>
    <TABLE_NAME>DataBlock3</TABLE_NAME>
  </DataBlock3>
`,be=n.useCallback(async e=>{if(!qe)return;if(e.preventDefault(),I(!0),N(null),T(!0),Oe(!1),d.length===0){I(!1),D(!0),T(!1),N(null),k("Chưa có dữ liệu để gửi. Vui lòng quét dữ liệu trước khi gửi.");return}const l=De(d[0]),m=d.map(Ee).join(`
`),q=We(d[0]),f=d.map(je).join(`
`);try{const a=await kt(U,C==null?void 0:C.OutReqSeq,d,{xmlSCOMCloseCheckWEB:l,xmlSCOMCloseItemCheckWEB:m,xmlSPDMMOutProcCheckWEB:q,xmlSPDMMOutProcItemCheckWEB:f});N(a),a.success?(i("/u/warehouse/material/stock-out-request"),T(!1),E(!0),z("Tất cả các dữ liệu đã được thực thi thành công!"),me(),M([])):(T(!1),D(!0),k(a.message))}catch(a){T(!1),N({error:a.message}),D(!0),k(a.message)}finally{I(!1)}},[C,d,U]),me=n.useCallback(async e=>{if(d.length===0){D(!0),k("Không có dữ liệu để reset! Vui lòng quét dữ liệu trước.");return}M([]),ce(x==null?void 0:x.OutReqSeq),ge.success("Reset form thành công!")},[C,d]),Te=()=>{const e=O.rows.items;let l=[];return e.forEach(m=>{const q=m[0],f=m[1]-1;for(let a=q;a<=f;a++)l.push(a)}),l},Fe=n.useCallback(async e=>{e.preventDefault();const l=Te();if(l.length===0){D(!0),k("Vui lòng chọn ít nhất một hàng để xóa.");return}if(d.length===0){D(!0),k("Không có dữ liệu nào để xóa.");return}const m=l.map(f=>{var a,W;return{ItemNo:(a=d[f])==null?void 0:a.ItemNo,Qty:(W=d[f])==null?void 0:W.Qty}}),q=d.filter((f,a)=>!l.includes(a));M(q),B(f=>f.map(a=>{const W=m.find(J=>J.ItemNo===a.ItemNo);return W?{...a,OutQty:a.OutQty-W.Qty,RemainQty:a.RemainQty+W.Qty}:a}))},[d,O,B]);return t.jsxs(t.Fragment,{children:[t.jsx(Ve,{children:t.jsxs("title",{children:["ITM - ",h("Stock Out Request")]})}),t.jsxs("div",{className:"bg-slate-50 p-3 h-screen overflow-hidden",children:[t.jsxs("div",{className:"flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full",children:[t.jsxs("div",{className:"col-start-1 col-end-5 row-start-1 w-full rounded-lg ",children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx(ft,{level:4,className:"mt-2 uppercase opacity-85 ",children:h("Stock Out FIFO")}),t.jsx(at,{status:G,handleSubmit:be,handleRestFrom:me,handleDelete:Fe})]}),t.jsxs("details",{className:"group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white",open:!0,children:[t.jsxs("summary",{className:"flex cursor-pointer items-center justify-between gap-1.5 text-gray-900",children:[t.jsxs("h2",{className:"text-xs font-medium flex items-center gap-2 text-blue-600 uppercase",children:[t.jsx(lt,{}),h("Giá trị")]}),t.jsx("span",{className:"relative size-5 shrink-0",children:t.jsx(Re,{})})]}),t.jsx("div",{className:"flex p-2 gap-4",children:t.jsx(st,{filteredData:C,handleCheckBarcode:ue,inputBarCode:_,setInputBarCode:b,setCheckValueIsStop:oe})})]})]}),t.jsx("div",{className:"col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg",children:t.jsx(ut,{sampleTableA:x,sampleTableB:d,setSelection:V,selection:O})})]}),t.jsx(rt,{modal2Open:P,setModal2Open:D,error:u}),t.jsx(nt,{setModal4Open:T,modal4Open:X}),t.jsx(ot,{setModal5Open:E,modal5Open:r,successMessage:j})]})]})}export{Ft as default};
