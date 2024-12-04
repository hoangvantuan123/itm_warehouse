import { useState } from 'react'
import { Button, Dropdown, message } from 'antd';
import { SaveOutlined, PlusOutlined, FileDoneOutlined , DeleteOutlined} from '@ant-design/icons'

export default function RootMenuManagementActions({ openModal, handleDeleteDataSheet }) {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === '1') {
      handleDeleteDataSheet()
    } else {
      message.info(`Đang phát triển`);
    }
  };
  const items = [
 
    {
      label: 'Xóa',
      key: '1',
      icon: <DeleteOutlined />,
      danger: true,
    },

  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div className="flex items-center gap-2">
      <Dropdown.Button menu={menuProps}  >
        <span className="uppercase">
          Actions
        </span>
      </Dropdown.Button>

<Button
        key="Reset"
        icon={<FileDoneOutlined />}
        size="middle"
        className="uppercase"
        type="default"
      >
        Open
      </Button>
     
      <Button
        key="Save"
        type="primary"
        icon={<PlusOutlined />}
        size="middle"
        onClick={openModal}
        style={{ backgroundColor: '#4F46E5', borderColor: '#4F46E5' }}
      >
        ADD ROOT MENU
      </Button>
    </div>
  )
}
