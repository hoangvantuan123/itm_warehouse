import { Modal, Button } from 'antd'
export default function ModalHelpMenu({ openHelp, setOpenHelp }) {

    return (
        <Modal open={openHelp} closable={false} footer={null} centered={true}
        >
            <p>
                Môi trường của bạn không hỗ trợ các tính năng cần thiết. Vui lòng sử dụng môi trường hiện đại hơn để tiếp tục.
            </p>


            <div className="flex justify-end gap-4 ">
                <Button onClick={() => setOpenHelp(false)} >Cancel</Button>
                <Button type="primary" >
                    Save
                </Button>
            </div>
        </Modal>
    )
}
