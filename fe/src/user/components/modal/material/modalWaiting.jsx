import { Modal, Button, Select, Input } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
export default function ModalWaiting({
  modal2Open,
  setModal2Open,
  error,
  resetTable, 
  setKeyPath
}) {
  const handelOnCancel = () => {
    setModal2Open(false)
    resetTable()
    setKeyPath(null)
  }
  return (
    <Modal
      centered
      open={modal2Open}
      onOk={() => setModal2Open(false)}
      onCancel={handelOnCancel}
      closable={false}
      footer={false}
    >
      <div className="items-center justify-center flex flex-col">
        <ExclamationCircleOutlined className=" text-4xl mb-2 text-red-500" />
        <p className="mt-10 text-lg">{error}</p>
      </div>
    </Modal>
  )
}
