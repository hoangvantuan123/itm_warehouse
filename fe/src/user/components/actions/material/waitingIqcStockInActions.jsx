import { useState } from 'react';
import { Card, Input, Button, DatePicker, Space, Typography } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

export default function WaitingIqcStockInActions() {
  const [yyww, setYyww] = useState(null);
  const [yyyymm, setYyyymm] = useState(null);

  return (
    <div className="mt-1">
      {/* Card 1 */}
      <Card className="mb-2 p-2 shadow-sm" size="small">
        <div className="flex gap-2">
          <Space direction="vertical" size={8}>
            <Typography.Text>YYWW</Typography.Text>
            <Input
              placeholder="Enter YYWW"
              value={yyww}
              onChange={(e) => setYyww(e.target.value)}
            />
          </Space>
          <Space direction="vertical" size={8}>
            <Typography.Text>YYYYMM</Typography.Text>
            <Input
              placeholder="Enter YYYYMM"
              value={yyyymm}
              onChange={(e) => setYyyymm(e.target.value)}
            />
          </Space>
        </div>

        <div className="flex gap-2 justify-end mt-3">
          {['Save', 'Row Delete', 'Reset', 'Excel Upload'].map((label) => (
            <Button
              key={label}
              type={label === 'Save' ? 'primary' : 'default'}
              icon={<SaveOutlined />}
              size="middle"
              className="uppercase"
            >
              {label}
            </Button>
          ))}
        </div>
      </Card>
      <Card className="mb-2 p-2 shadow-sm" size="small">
        <div className="flex gap-2">
          <Space direction="vertical" size={8}>
            <Typography.Text>DATE</Typography.Text>
            <DatePicker className="w-full" />
          </Space>
          <Space direction="vertical" size={8}>
            <Typography.Text>PURCHASE TYPE</Typography.Text>
            <Input className="w-full bg-blue-50" />

          </Space>
          <Space direction="vertical" size={8}>
            <Typography.Text>DELIVERY NO</Typography.Text>
            <Input className="w-full bg-blue-50" />
          </Space>
          <Space direction="vertical" size={8}>
            <Typography.Text className="text-red-500">MAT BARCODE</Typography.Text>
            <Input className="w-full bg-blue-50" />

          </Space>
          <Space direction="vertical" size={8}>
            <Typography.Text>ACC UNIT</Typography.Text>
            <Input className="w-full bg-blue-50" />
          </Space>
          <Space direction="vertical" size={8}>
            <Typography.Text>WH NAME</Typography.Text>
            <Input className="w-full bg-blue-50" />
          </Space>
        </div>
      </Card>
    </div>
  );
}
