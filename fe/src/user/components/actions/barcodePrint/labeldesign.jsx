import { Card, Col, Row, Typography, QRCode } from "antd";
import Barcode from "react-barcode";



const  LabelItem = () => {

    const labelData = {
        code: 'AAAAA',
        lot: '206',
        qty: '1000',
        dc: '202202',
        reel: '2.0',
        userId: 'PSG',
        barcodeData: 'AAAAA/206/1000/202202/2.0',
    };

        return (

            <div
                className=" w-auto h-auto p-2 pt-2 justify-center"

            >
                <div className="flex  flex-col justify-center items-center ">

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
                        <h4 className="text-[8px]">Code: DI0992</h4>
                        <h4 className="text-[8px]">DC: 2400</h4>
                    </div>
                    <div className="">
                        <h4 className="text-[8px]">Lot: RU33862628</h4>
                        <h4 className="text-[8px]">Rell: 6782</h4>
                    </div>
                    <div className="">
                        <h4 className="text-[8px]">Qty: 15000 </h4>
                        <h4 className="text-[8px]">UserID: Vm1234567</h4>
                    </div>

                    <div className="">
                        <QRCode type="svg" value={labelData.barcodeData} size={28} bordered= {false} />
                    </div>
                </div>
            </div>


        )

};

export default LabelItem;