
import { Button} from 'antd'
import { SearchOutlined, PrinterOutlined } from '@ant-design/icons'


export default function BarcodePrintAction({
  onFinish,
  onClickPrint,
}) {


  return (
    <div className="mt-1 flex items-center gap-2">
      <Button
        icon={<PrinterOutlined />}
        onClick={onClickPrint}
        type="primary"
        size="middle"

        color="default"
        variant="filled"
        style={{ backgroundColor: '#f0f0f0', borderColor: '#d9d9d9' }}
      >
        PRINT
      </Button>

      <Button
        icon={<SearchOutlined />}
        type="primary"
        size="middle"
        onClick={onFinish}
      >
        SEARCH
      </Button>
    </div>
  )
}
