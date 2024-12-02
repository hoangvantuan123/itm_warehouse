import { Card, Col, Row, Typography, QRCode } from "antd";
import Barcode from "react-barcode";

const { Text } = Typography;


const LabelItem = ({ labelData1, btnPrint }) => {

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
        <Card
            style={{
                width: "10cm",
                height: "5cm", // Tăng chiều cao của card để có không gian cho tất cả nội dung
                padding: 0,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}
        >
            {/* Barcode */}
            <Row justify="center" style={{ marginBottom: 5 }}>
                <Col>
                    <Barcode
                        value={labelData.barcodeData}
                        width={1}
                        height={40} // Tăng chiều cao barcode nếu cần
                        displayValue={false}
                    />
                </Col>
            </Row>

            {/* Barcode Text */}
            <Row justify="center" style={{ marginBottom: 5 }}>
                <Col>
                    <Text style={{ fontSize: "8px" }} strong>
                        {labelData.barcodeData}
                    </Text>
                </Col>
            </Row>

            {/* Information Rows */}
            <Row justify="start" style={{ fontSize: "8px" }}>
                <Col span={12}>
                    <Row justify="start">
                        <Col span={12}>
                            <Text strong>Code: {labelData.code}</Text>
                        </Col>
                        <Col span={12}>
                            <Text strong>Qty: {labelData.qty}</Text>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col span={12}>
                            <Text strong>Lot: {labelData.lot}</Text>
                        </Col>
                        <Col span={12}>
                            <Text strong>DC: {labelData.dc}</Text>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col span={12}>
                            <Text strong>Reel: {labelData.reel}</Text>
                        </Col>
                        <Col span={12}>
                            <Text strong>UserID: {labelData.userId}</Text>
                        </Col>
                    </Row>
                </Col>

                {/* QR Code */}
                
            </Row>
        </Card>


    )
};

export default LabelItem;