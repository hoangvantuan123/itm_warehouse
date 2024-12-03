import { Card, Col, Row, Typography, QRCode } from "antd";
import Barcode from "react-barcode";



const LabelItem = ({label}) => {

    console.log("label",label)

    const labelData = {
        code: label?.ITEMCD,
        lot: label?.LOTNO,
        qty: label?.QTY,
        dc: label?.DATECODE,
        reel: label?.REELNO,
        userId: label?.USER_ID,
        barcodeData: label?.LOT_ID,
    };

    return (

        <div
            className="label-item w-auto h-auto p-2 pt-2 justify-center "
        >
            <div className="flex flex-col justify-center items-center ">

                <Barcode
                    value={labelData.barcodeData}
                    width={1}
                    height={20}
                    displayValue={false}
                    margin={0}
                />
                <h4 className="text-[8px]">{labelData.barcodeData}</h4>
            </div>


            <div className=" flex gap-3 justify-center items-center">
                <div className="">
                    <h4 className="text-[8px]">Code: {labelData.code}</h4>
                    <h4 className="text-[8px]">DC: 2400</h4>
                </div>
                <div className="">
                    <h4 className="text-[8px]">Lot: {labelData.lot}</h4>
                    <h4 className="text-[8px]">Reel: {labelData.reel}</h4>
                </div>
                <div className="">
                    <h4 className="text-[8px]">Qty: {labelData.qty} </h4>
                    <h4 className="text-[8px]">UserID: {labelData.userId}</h4>
                </div>

                <div className="">
                    <QRCode type="svg" value={labelData.barcodeData} size={28} bordered={false} />
                </div>
            </div>
        </div>
    )
};

export default LabelItem;