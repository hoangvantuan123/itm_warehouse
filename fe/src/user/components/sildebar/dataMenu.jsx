import { InboxOutlined } from '@ant-design/icons'

/*

  1. **Quy ước đặt tên router**:
     - **Định dạng đường dẫn**: Sử dụng dạng `/u/{chức năng}/{mô-đun}/{hoạt-động}`, trong đó:
       - `{chức năng}`: Là tên chung của tính năng, ví dụ: `warehouse`, `material`, `kitting`, `add`.
       - `{mô-đun}`: Là tên chi tiết của mô-đun hoặc hành động con bên trong chức năng, ví dụ: `barcode-print`, `delivery-list`, v.v.
       - `{hoạt-động}`: Là các hoạt động mà người dùng thực hiện trong từng mô-đun (nếu cần thiết).

     2. **Phân loại view**:
        - **View hiển thị** (Display view): Là các view mà người dùng chỉ có thể xem thông tin, không cần nhập liệu, ví dụ: `delivery-list`, `waiting-iqc-stock-in`, v.v.
        - **View nhập liệu** (Input view): Là các view yêu cầu người dùng nhập thông tin hoặc thao tác dữ liệu, ví dụ: `barcode-print`, `stock-out-request`, v.v.

     3. **Ví dụ**:
        - `/u/warehouse/barcode-print`: Đây là một view nhập liệu (như in mã vạch).
        - `/u/material/delivery-list`: Đây là một view hiển thị (danh sách giao hàng).

*/

export const menuItems = [
  {
    key: 'warehouse',
    label: 'QUẢN LÝ KHO HÀNG',
    icon: <InboxOutlined style={{ fontSize: '20px' }} />,
    link: '/u/warehouse',
    utilities: true,
  },
  {
    key: 'add',
    label: 'ADD',
    icon: <InboxOutlined style={{ fontSize: '20px' }} />,
    link: '/u/add',
    utilities: true,
  },
]

export const menuSettingItems = [
  {
    id: 2,
    key: 'warehouse',
    label: 'WAREHOUSESING',
    icon: <InboxOutlined style={{ fontSize: '20px' }} />,
    link: '/u/warehousesing',
    type: 'submenu',
    subMenu: [
      {
        key: 'warehousesing-1-1',
        label: 'BARCODE PRINT',
        link: '/u/warehouse/barcode-print',
      },
      {
        key: 'warehousesing-1-2',
        label: 'BARCODE CHANGE',
        link: '/u/warehouse/barcode-change',
      },
      {
        key: 'warehousesing-1-3',
        label: 'BARCODE CONFIRM',
        link: '/u/warehouse/barcode-confirm',
      },
    ],
  },
  {
    id: 3,
    key: 'warehouse',
    label: 'KITTING',
    icon: <InboxOutlined style={{ fontSize: '20px' }} />,
    link: '/u/kitting',
    type: 'menu',
  },
  {
    id: 5,
    key: 'warehouse',
    label: 'MATERIAL',
    icon: <InboxOutlined style={{ fontSize: '20px' }} />,
    link: '/u/material',
    type: 'submenu',
    subMenu: [
      {
        key: 'material-1-1',
        label: 'DELIVERY LIST',
        link: '/u/material/delivery-list',
      },
      {
        key: 'material-1-2',
        label: 'WAITING IQC STOCK IN',
        link: '/u/material/waiting-iqc-stock-in',
      },
      {
        key: 'material-1-3',
        label: 'WAITING IQC STOCK STATUS',
        link: '/u/material/waiting-iqc-stock-status',
      },
      {
        key: 'material-1-4',
        label: 'STOCK OUT REQUEST',
        link: '/u/material/stock-out-request',
      },
      {
        key: 'material-1-5',
        label: 'STOCK OUT (FIFO)',
        link: '/u/material/stock-out-fifo',
      },
      {
        key: 'material-1-6',
        label: 'MATERIAL STOCK IN',
        link: '/u/material/material-stock-in',
      },
      {
        key: 'material-1-7',
        label: 'CONVERT YYYYMM',
        link: '/u/material/convert-yyyy-mm',
      },
      {
        key: 'material-1-8',
        label: 'MATERIAL STOCK IN (BULKID)',
        link: '/u/material/material-stock-in-bulkid',
      },
    ],
  },
  {
    id: 4,
    key: 'add2',
    label: 'ADD',
    icon: <InboxOutlined style={{ fontSize: '20px' }} />,
    link: '/u/add',
    type: 'menu',
  },
]
