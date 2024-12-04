
import { ArrowLeftIcon } from '../../icons'
import TableStockOUtFiFoA from './tableStockOutFiFoA'

function TableTransferStockOutFiFo({
  sampleTableA,
  sampleTableB,
  setSelection,
  selection
}) {
  return (
    <div className="w-full gap-1 h-full flex items-center justify-center">
      <div className="w-[65%] h-full flex flex-col border bg-white rounded-lg overflow-hidden pb-7">
        <div className=" font-medium text-xs  p-2 ">B</div>
      </div>
      <div className="px-4 flex flex-col p-3  bg-[#eee] rounded-lg items-center justify-center">
        <ArrowLeftIcon />
      </div>
      <div className="w-[35%] h-full flex flex-col border bg-white rounded-lg overflow-hidden pb-7">
        <div className=" font-medium text-xs p-2">A</div>
        <TableStockOUtFiFoA data={sampleTableA} />
      </div>
    </div>
  )
}

export default TableTransferStockOutFiFo
