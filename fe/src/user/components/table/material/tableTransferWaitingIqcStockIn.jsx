
import { ArrowLeftIcon } from '../../icons'
import TableTransferWaitingIqcStockInBarcode from './tableTransferWaitingIqcStockInBarcode'
import TableTransferWaitingIqcStockInOrder from './tableTransferWaitingIqcStockInOrder'

function TableTransferWaitingIqcStockIn({
  sampleTableA,
  sampleTableB,
  setSelection, 
  selection
}) {
  return (
    <div className="w-full gap-1 h-full flex items-center justify-center">
      <div className="w-[65%] h-full flex flex-col border bg-white rounded-lg overflow-hidden pb-7">
        <div className=" font-medium text-xs  p-2 ">THÔNG TIN BAROCODE</div>
        <TableTransferWaitingIqcStockInBarcode  selection={selection}  data={sampleTableB} setSelection={setSelection}/>
      </div>
      <div className="px-4 flex flex-col p-3  bg-[#eee] rounded-lg items-center justify-center">
        <ArrowLeftIcon />
      </div>
      <div className="w-[35%] h-full flex flex-col border bg-white rounded-lg overflow-hidden pb-7">
        <div className=" font-medium text-xs p-2">THÔNG ĐƠN HÀNG</div>
        <TableTransferWaitingIqcStockInOrder  data={sampleTableA}/>
      </div>
    </div>
  )
}

export default TableTransferWaitingIqcStockIn
