import { useState } from 'react';
import { Menu, Button, Input, Table, Space, Checkbox } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';


function TableRoleManagement({
  data,
  loading,
  handleCheck,
  gridRef,
  setKeyPath,
  checkedPath,
  setCheckedPath,
}) {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [userInfo, setUserInfo] = useState({
    groupName: '',
    note: '',
  });

  // Sample data for groups
  const sampleGroups = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Editor' },
    { id: 3, name: 'Viewer' },
  ];

  const sampleUsers = [
    { id: 5441, user_id: 17696, login: "VW12403433", name: "BÙI QUỲNH HƯƠNG", language: "vi", active: true },
    { id: 5440, user_id: 17695, login: "VW12403432", name: "LỮ ĐÌNH ANH", language: "vi", active: false },
    { id: 5439, user_id: 17694, login: "VW12403431", name: "NÔNG HOÀNG YẾN", language: "vi", active: false },
    { id: 5438, user_id: 17691, login: "VW12403428", name: "LÊ TÙNG DUY", language: "vi", active: true },
    { id: 5437, user_id: 17693, login: "VW12403430", name: "TRIỆU THÙY LINH", language: "vi", active: false },
    { id: 5436, user_id: 17692, login: "VW12403429", name: "HOÀNG NHƯ TỈNH", language: "vi", active: false },
    { id: 5435, user_id: 17690, login: "VW12403427", name: "NGUYỄN TRỌNG LUÂN", language: "vi", active: false },
    { id: 5434, user_id: 17689, login: "VW12403426", name: "TRƯƠNG NGỌC VŨ", language: "vi", active: false },
    { id: 5433, user_id: 17688, login: "VW12403425", name: "NÔNG VĂN DOÃN", language: "vi", active: false },
    { id: 5432, user_id: 17687, login: "VW12403424", name: "PHẠM THU TRANG", language: "vi", active: false }
  ];

  const samplePermissions = [
    { id: 92, permission: 'Bảng công tổng hợp', view: true, edit: false, create: false, delete: false },
    { id: 90, permission: 'Bảng lương cá nhân', view: true, edit: false, create: false, delete: false },
    { id: 77, permission: 'Dữ liệu công theo tháng', view: true, edit: false, create: false, delete: false },
    { id: 75, permission: 'Công việc', view: true, edit: false, create: false, delete: false },
    { id: 74, permission: 'Thông báo', view: false, edit: false, create: false, delete: false },
    { id: 76, permission: 'Chấm công', view: true, edit: false, create: false, delete: false },
    { id: 73, permission: 'Home', view: true, edit: false, create: false, delete: false }
  ];

  const handleGroupClick = (groupId) => {
    setSelectedGroup(groupId);
    const group = sampleGroups.find(group => group.id === groupId);
    setUserInfo({
      groupName: group.name,
      note: `Notes for ${group.name}`,
    });
  };

  const handleSaveChanges = () => {
    console.log('Save changes', userInfo);
  };

  const handlePermissionChange = (permissionId, field) => {
    const updatedPermissions = samplePermissions.map(permission =>
      permission.id === permissionId
        ? { ...permission, [field]: !permission[field] }
        : permission
    );
  };

  const userColumns = [
    { title: 'Tên Người Dùng', dataIndex: 'name', key: 'name' },
    { title: 'Login', dataIndex: 'login', key: 'login' },
    { title: 'Ngôn ngữ', dataIndex: 'language', key: 'language' },
    { title: 'Ngày Tạo', dataIndex: 'create_date', key: 'create_date' },
    { title: 'Trạng Thái', dataIndex: 'active', key: 'active', render: (active) => (active ? 'Active' : 'Inactive') },
  ];

  const permissionColumns = [
    { title: 'Permission', dataIndex: 'permission', key: 'permission' },
    { 
      title: 'View', 
      dataIndex: 'view', 
      key: 'view', 
      render: (view, record) => (
        <Checkbox
          checked={view}
          onChange={() => handlePermissionChange(record.id, 'view')}
        />
      ) 
    },
    { 
      title: 'Edit', 
      dataIndex: 'edit', 
      key: 'edit', 
      render: (edit, record) => (
        <Checkbox
          checked={edit}
          onChange={() => handlePermissionChange(record.id, 'edit')}
        />
      ) 
    },
    { 
      title: 'Create', 
      dataIndex: 'create', 
      key: 'create', 
      render: (create, record) => (
        <Checkbox
          checked={create}
          onChange={() => handlePermissionChange(record.id, 'create')}
        />
      ) 
    },
    { 
      title: 'Delete', 
      dataIndex: 'delete', 
      key: 'delete', 
      render: (deletePermission, record) => (
        <Checkbox
          checked={deletePermission}
          onChange={() => handlePermissionChange(record.id, 'delete')}
        />
      ) 
    },
  ];

  return (
    <div className="w-full gap-3 h-full flex items-center justify-center">
      <div className="w-1/4 h-full flex flex-col bg-white border rounded-lg overflow-hidden pb-10">
        <div className="font-medium text-xs mb-4 text-gray-700 uppercase p-3">NHÓM NGƯỜI DÙNG</div>
        <Menu
          mode="inline"
          selectedKeys={[selectedGroup?.toString()]}
          onClick={(e) => handleGroupClick(Number(e.key))}
        >
          {sampleGroups.map(group => (
            <Menu.Item key={group.id} icon={<UsergroupAddOutlined />}>
              {group.name}
            </Menu.Item>
          ))}
        </Menu>
      </div>

      <div className="w-10/12 h-full flex flex-col border bg-white p-3 rounded-lg  overflow-auto  scroll-container pb-10">
        <div className="font-medium text-xs mb-4">NGƯỜI DÙNG</div>
        
        <div className="mb-4">
          <Input
            value={userInfo.groupName}
            onChange={(e) => setUserInfo({ ...userInfo, groupName: e.target.value })}
            placeholder="Nhập tên nhóm"
            className="w-full mb-2"
          />
          <Input.TextArea
            value={userInfo.note}
            onChange={(e) => setUserInfo({ ...userInfo, note: e.target.value })}
            placeholder="Ghi chú"
            rows={4}
          />
        </div>

        <div className="mb-4" >
          <div className="font-medium text-xs mb-2">Quyền Truy Cập</div>
          <Table
            dataSource={samplePermissions}
            columns={permissionColumns}
            pagination={false}
            rowKey="id"
          />
        </div>

        <div className="mb-4" >
          <div className="font-medium text-xs mb-2">Danh Sách Người Dùng</div>
          <Table
            dataSource={sampleUsers.filter(user => user.group === userInfo.groupName)}
            columns={userColumns}
            pagination={false}
            rowKey="id"
          />
        </div>

      
      </div>
    </div>
  );
}

export default TableRoleManagement;
