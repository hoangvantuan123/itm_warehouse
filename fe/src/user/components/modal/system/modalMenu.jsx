import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal, Typography, Button, Table, Tag, Select, message ,Drawer} from 'antd'

const { Title } = Typography;
const { Option } = Select;

export default function ModalMenu({
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
      title: 'Label',
      dataIndex: 'Label',
      key: 'Label',
      sorter: (a, b) => a.Label.localeCompare(b.Label),
    },
    {
      title: 'Link',
      dataIndex: 'Link',
      key: 'Link',
      sorter: (a, b) => a.Link.localeCompare(b.Link),
    },
    {
      title: 'Key',
      dataIndex: 'Key',
      key: 'Key',
      sorter: (a, b) => a.Key.localeCompare(b.Key),
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
