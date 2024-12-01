import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal, Typography, Button, Table, Tag, Select, message , Drawer} from 'antd'

const { Title } = Typography;
const { Option } = Select;

export default function ModalUsers({
  isOpen,
  onClose,
}) {

  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [total, setTotal] = useState(0);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
const [data, setData] = useState([])
  const fetchData = async () => {
    setLoading(true);
    try {
   
    } catch (error) {
      setError(error.message || 'Đã xảy ra lỗi');
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) fetchData();
  }, [isOpen, page, limit]);

  const handleTableChange = (pagination) => {
    setPage(pagination.current);
    setLimit(pagination.pageSize);
  };

  const handleFinish = async () => {
    try {
     
    } catch {
      message.error('Lỗi khi thêm người dùng!');
    }
  };



  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Đăng nhập',
      dataIndex: 'login',
      key: 'login',
      sorter: (a, b) => a.login.localeCompare(b.login),
    },
    {
      title: 'Ngôn ngữ',
      dataIndex: 'language',
      key: 'language',
      sorter: (a, b) => a.language.localeCompare(b.language),
    }
 
  ];

  return (
<Drawer   styles={{
            wrapper: {
              borderRadius: '16px 16px 0 0',
              overflow: 'hidden'
            }
          }}  placement="bottom" open={isOpen} closable={false} onCancel={onClose} height="97%" footer={[
        <Button key="cancel" onClick={onClose} style={{ backgroundColor: '#f5f5f5', borderColor: '#d9d9d9' }}
        >
          Thoát
        </Button>,
        <Button key="submit" type="primary" onClick={handleFinish} style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}
        >
          Lưu
        </Button>,
      ]}
    >
         <div className="font-medium text-xs mb-4">DATA ROOT MENU</div>

        <Table rowSelection={{
          selectedRowKeys,
          onChange: setSelectedRowKeys,
          selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE],
        }} size="small"
        bordered columns={columns} dataSource={data} rowKey="id" className="cursor-pointer pb-0 "   loading={loading}
      />

</Drawer>
  );
}
