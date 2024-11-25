import { Modal, Button, Select, Input } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';
export default function ModalWaitingIqcStockIn({
    modal2Open, setModal2Open, error
}) {


    return (
        <Modal
            centered
            open={modal2Open}
            onOk={() => setModal2Open(false)}
            onCancel={() => setModal2Open(false)}
            closable={false}
        >
            <div className="items-center justify-center flex flex-col">

                <ExclamationCircleOutlined className=' text-4xl mb-2 text-red-500' />
                <p>{error}</p>
            </div>
        </Modal>
    )
}
