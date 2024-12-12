import { QRCode } from 'antd'
import Barcode from 'react-barcode'

const LabelItem = ({ label, dataSize }) => {
  const labelData = {
    code: label?.ITEMCD,
    lot: label?.LOTNO,
    qty: label?.QTY,
    dc: label?.DATECODE,
    reel: label?.REELNO,
    userId: label?.USER_ID,
    barcodeData: label?.LOT_ID,
  }

  const size = {
    barCodePosX: Number(dataSize?.barCodePosX),
    barCodePosY: Number(dataSize?.barCodePosY),
    barCodeSizeX: Number(dataSize?.barCodeSizeX),
    barCodeSizeY: Number(dataSize?.barCodeSizeY),
    QrPosX: Number(dataSize?.QrPosX),
    QrPosY: Number(dataSize?.QrPosY),
    QrSizeX: Number(dataSize?.QrSizeX),
    QrSizeY: Number(dataSize?.QrSizeY),
    paperSizeX: Number(dataSize?.paperSizeX),
    paperSizeY: Number(dataSize?.paperSizeY),
  }

  return (
    <div className="grid grid-cols-4 gap-0 w-auto h-auto  justify-center border">
      <div className="flex flex-col justify-center items-center mt-1 col-span-4 ">
        <Barcode
          value={labelData.barcodeData}
          width={size.barCodeSizeX}
          height={size.barCodeSizeY}
          displayValue={false}
          margin={0}
        />
        <h4 className="text-[8px]">{labelData.barcodeData}</h4>
      </div>

      <div className=" grid justify-center items-center">
        <h4 className="text-[8px]">Code: {labelData.code}</h4>
        <h4 className="text-[8px]">DC: {labelData.dc}</h4>
      </div>
      <div className=" grid justify-center items-center">
        <h4 className="text-[8px]">Lot: {labelData.lot}</h4>
        <h4 className="text-[8px]">Reel: {labelData.reel}</h4>
      </div>
      <div className=" grid justify-center items-center">
        <h4 className="text-[8px]">Qty: {labelData.qty}</h4>
        <h4 className="text-[8px]">UserID: {labelData.userId}</h4>
      </div>

      <div className="grid grid-cols-1 gap-1 justify-center items-center ">
        <div className="flex justify-center items-center">
          <QRCode
            type="svg"
            value={labelData.barcodeData}
            size={size.QrSizeX}
            bordered={false}
          />
        </div>
      </div>
    </div>
  )
}

export default LabelItem
