import { useState, useEffect } from 'react'
import { Menu, Button, Input, Table, Space, Checkbox, Layout } from 'antd'
import { FolderOutlined } from '@ant-design/icons'
import BG from '../../../../assets/defaultLogo.png'
import ModalRootMenu from '../../modal/system/modalRootMenu'
import ModalUsers from '../../modal/system/modalUsers'
import ModalMenu from '../../modal/system/modalMenu'
import { getPaginatedRoles } from '../../../../features/system/getPaginatedRoles'
const { Header, Content, Footer } = Layout

function ViewRoleManagement({  groups }) {
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [openView, setOpenView] = useState(false)
  const [userInfo, setUserInfo] = useState({
    groupName: '',
    note: '',
  })
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page1, setPage1] = useState(1);
  const [limit1, setLimit1] = useState(50);
  const [openModel1 , setOpenModel1] = useState(false)
  const [openModel2 , setOpenModel2] = useState(false)
  const [openModel3 , setOpenModel3] = useState(false)
  const [data1 , setData1] = useState([])

  const fetchData1 = async () => {
    setLoading(true);
    try {
        const response = await getPaginatedRoles(selectedGroup, 'rootmenu' , page1,limit1 );
        if (response.success) {
          setData1(response.data);
        } 
    } catch (error) {
      setError(error.message || 'Đã xảy ra lỗi');
      setData1([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData1();
  }, [selectedGroup]);
  const handleAddRow1 = () => {
    setOpenModel1(true)
  }
  const closeModal1 = () => {
    setOpenModel1(false)
  }
  const handleAddRow2 = () => {
    setOpenModel2(true)
  }
  const closeModal2 = () => {
    setOpenModel2(false)
  }
  const handleAddRow3 = () => {
    setOpenModel3(true)
  }
  const closeModal3 = () => {
    setOpenModel3(false)
  }

  const sampleUsers = [
    {
      id: 5441,
      user_id: 17696,
      login: 'VW12403433',
      name: 'BÙI QUỲNH HƯƠNG',
      language: 'vi',
      active: true,
    },
    {
      id: 5440,
      user_id: 17695,
      login: 'VW12403432',
      name: 'LỮ ĐÌNH ANH',
      language: 'vi',
      active: false,
    },
    {
      id: 5439,
      user_id: 17694,
      login: 'VW12403431',
      name: 'NÔNG HOÀNG YẾN',
      language: 'vi',
      active: false,
    },
    {
      id: 5438,
      user_id: 17691,
      login: 'VW12403428',
      name: 'LÊ TÙNG DUY',
      language: 'vi',
      active: true,
    },
    {
      id: 5437,
      user_id: 17693,
      login: 'VW12403430',
      name: 'TRIỆU THÙY LINH',
      language: 'vi',
      active: false,
    },
    {
      id: 5436,
      user_id: 17692,
      login: 'VW12403429',
      name: 'HOÀNG NHƯ TỈNH',
      language: 'vi',
      active: false,
    },
    {
      id: 5435,
      user_id: 17690,
      login: 'VW12403427',
      name: 'NGUYỄN TRỌNG LUÂN',
      language: 'vi',
      active: false,
    },
    {
      id: 5434,
      user_id: 17689,
      login: 'VW12403426',
      name: 'TRƯƠNG NGỌC VŨ',
      language: 'vi',
      active: false,
    },
    {
      id: 5433,
      user_id: 17688,
      login: 'VW12403425',
      name: 'NÔNG VĂN DOÃN',
      language: 'vi',
      active: false,
    },
    {
      id: 5432,
      user_id: 17687,
      login: 'VW12403424',
      name: 'PHẠM THU TRANG',
      language: 'vi',
      active: false,
    },
  ]

  const samplePermissions = [
    {
      id: 92,
      permission: 'Bảng công tổng hợp',
      view: true,
      edit: false,
      create: false,
      delete: false,
    },
    {
      id: 90,
      permission: 'Bảng lương cá nhân',
      view: true,
      edit: false,
      create: false,
      delete: false,
    },
    {
      id: 77,
      permission: 'Dữ liệu công theo tháng',
      view: true,
      edit: false,
      create: false,
      delete: false,
    },
    {
      id: 75,
      permission: 'Công việc',
      view: true,
      edit: false,
      create: false,
      delete: false,
    },
    {
      id: 74,
      permission: 'Thông báo',
      view: false,
      edit: false,
      create: false,
      delete: false,
    },
    {
      id: 76,
      permission: 'Chấm công',
      view: true,
      edit: false,
      create: false,
      delete: false,
    },
    {
      id: 73,
      permission: 'Home',
      view: true,
      edit: false,
      create: false,
      delete: false,
    },
  ]

  const handleGroupClick = (groupId) => {
    setSelectedGroup(groupId)
    setOpenView(true)
    const group = groups.find((group) => group.Id === groupId)
    setUserInfo({
      groupName: group.Name,
      note: `${group.Comment}`,
    })
  }

  const handleSaveChanges = () => {
    console.log('Save changes', userInfo)
  }

  const handlePermissionChange = (permissionId, field) => {
    const updatedPermissions = samplePermissions.map((permission) =>
      permission.id === permissionId
        ? { ...permission, [field]: !permission[field] }
        : permission,
    )
  }

  const userColumns = [
    { title: 'Tên Người Dùng', dataIndex: 'name', key: 'name' },
    { title: 'Login', dataIndex: 'login', key: 'login' },
    { title: 'Ngôn ngữ', dataIndex: 'language', key: 'language' },
    { title: 'Ngày Tạo', dataIndex: 'create_date', key: 'create_date' },
    {
      title: 'Trạng Thái',
      dataIndex: 'active',
      key: 'active',
      render: (active) => (active ? 'Active' : 'Inactive'),
    },
  ]

  const permissionColumns1 = [
    { title: 'Name', dataIndex: 'Name', key: 'Name' },
    {
      title: 'View',
      dataIndex: 'View',
      key: 'View',
      render: (view, record) => (
        <Checkbox
          checked={view}
          onChange={() => handlePermissionChange(record.Id, 'View')}
        />
      ),
    },
    {
      title: 'Edit',
      dataIndex: 'Edit',
      key: 'Edit',
      render: (edit, record) => (
        <Checkbox
          checked={edit}
          onChange={() => handlePermissionChange(record.Id, 'Edit')}
        />
      ),
    },
    {
      title: 'Create',
      dataIndex: 'Create',
      key: 'Create',
      render: (create, record) => (
        <Checkbox
          checked={create}
          onChange={() => handlePermissionChange(record.Id, 'Create')}
        />
      ),
    },
    {
      title: 'Delete',
      dataIndex: 'Delete',
      key: 'Delete',
      render: (deletePermission, record) => (
        <Checkbox
          checked={deletePermission}
          onChange={() => handlePermissionChange(record.Id, 'Delete')}
        />
      ),
    },
  ]

  return (
    <div className="w-full gap-3 h-full flex items-center justify-center">
      <div className="w-1/4 h-full flex flex-col bg-white border rounded-lg overflow-hidden pb-10">
        <div className="font-medium text-xs mb-4 text-gray-700 uppercase p-3">
          NHÓM NGƯỜI DÙNG
        </div>
        <Menu
          mode="inline"
          selectedKeys={[selectedGroup?.toString()]}
          onClick={(e) => handleGroupClick(Number(e.key))}
          className=" border-none border-r-0"
        >
          {groups.map((group) => (
            <Menu.Item key={group?.Id} icon={<FolderOutlined />}>
              {group?.Name}
            </Menu.Item>
          ))}
        </Menu>
      </div>

      <div className="w-10/12 h-full flex flex-col border bg-white p-3 rounded-lg  overflow-auto  scroll-container pb-10">
        <div className="font-medium text-xs mb-4">NGƯỜI DÙNG</div>

        {openView ? (
          <>
            {' '}
            <div className="mb-4">
              <Input
                value={userInfo.groupName}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, groupName: e.target.value })
                }
                placeholder="Nhập tên nhóm"
                className="w-full mb-2"
              />
              <Input.TextArea
                value={userInfo.note}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, note: e.target.value })
                }
                placeholder="Ghi chú"
                rows={4}
              />
            </div>
            <div className="mb-4">
              <div className="font-medium text-xs mb-2">Quyền Truy Nhóm Menu</div>
              <Table
                dataSource={data1}
                columns={permissionColumns1}
                pagination={false}
                rowKey="id"
                size="small"
                bordered
                footer={() => (
                  <span
                    type="primary"
                    onClick={handleAddRow1}
                    className="mt-2 max-w-md cursor-pointer text-pretty text-base text-indigo-500"
                    size="large"
                  >
                   Add Row
                  </span>
                )}
              />
            </div>
            <div className="mb-4">
              <div className="font-medium text-xs mb-2">Quyền Truy Cập Menu</div>
              <Table
                dataSource={samplePermissions}
                columns={permissionColumns1}
                pagination={false}
                rowKey="id"
                size="small"
                bordered
                footer={() => (
                  <span
                    type="primary"
                    className="mt-2 max-w-md cursor-pointer text-pretty text-base text-indigo-500"
                    size="small"
                    onClick={handleAddRow2}
                  >
                   Add Row
                  </span>
                )}
              />
            </div>
            <div className="mb-4">
              <div className="font-medium text-xs mb-2">
                Danh Sách Người Dùng
              </div>
              <Table
                dataSource={sampleUsers.filter(
                  (user) => user.group === userInfo.groupName,
                )}
                columns={userColumns}
                pagination={false}
                rowKey="id"
                size="small"
                bordered
                footer={() => (
                  <span
                    type="primary"
                    className="mt-2 max-w-md cursor-pointer text-pretty text-base text-indigo-500"
                    size="large"
                    onClick={handleAddRow3}
                  >
                   Add Row
                  </span>
                )}
              />
            </div>
          </>
        ) : (
          <>
            {' '}
            <Content className="flex flex-col  justify-center items-center px-4">
              <div className="text-center">
                <img
                  src={BG}
                  className=" w-96 opacity-45 h-auto mb-10"
                  alt="Background"
                />
              </div>
            </Content>
          </>
        )}
        <ModalRootMenu  isOpen={openModel1}
        onClose={closeModal1} groupId={selectedGroup}/>
         <ModalMenu  isOpen={openModel2}
        onClose={closeModal2} groupId={selectedGroup}/>
        <ModalUsers  isOpen={openModel3}
        onClose={closeModal3}  groupId={selectedGroup} />
       
      </div>
    </div>
  )
}

export default ViewRoleManagement
