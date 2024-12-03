import { useState } from 'react';
import { Button, Dropdown, message } from 'antd';
import {
  SaveOutlined,
  FileDoneOutlined,
  LockOutlined,
  UnlockOutlined,
  SearchOutlined,
  DeleteOutlined, UserOutlined
} from '@ant-design/icons';

export default function UserManagementActions({ handleSearch, handleUpdatePassUsers }) {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === '1') {
      handleUpdatePassUsers();
    } else {
      message.info(`Đang phát triển`);
    }
  };
  const items = [
    {
      label: 'Đặt lại mật khẩu mặc định',
      key: '1',
      icon: <LockOutlined />,
    },
    {
      label: ' Lưu trữ',
      key: '2',
      icon: <SaveOutlined />,
    },
    {
      label: 'Bỏ lưu trữ',
      key: '3',
      icon: <UnlockOutlined />,
    },
    {
      label: 'Xóa',
      key: '4',
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
        icon={<SearchOutlined />}
        size="middle"
        onClick={handleSearch}
        className="uppercase"
      >
        SEARCH
      </Button>
    </div>
  )
}




