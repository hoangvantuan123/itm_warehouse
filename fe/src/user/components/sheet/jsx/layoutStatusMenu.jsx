import {
  SearchOutlined,
  ReloadOutlined,
  SettingOutlined,
} from '@ant-design/icons'

const LayoutStatusMenuSheet = ({
  showMenu,
  handleSort,
  cols,
  setShowSearch,
  setShowMenu,
  showDrawer,
  handleReset,
}) => {
  if (showMenu === null) return null

  return (
    <ul className="space-y-1">
      <li>
        <a
          onClick={() => {
            setShowSearch(true)
            setShowMenu(null)
          }}
          className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <SearchOutlined />
          <span className="text-[13px] font-medium"> Tìm kiếm </span>
        </a>
      </li>
      <li>
        <a
          onClick={handleReset}
          className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <ReloadOutlined />
          <span className="text-[13px] font-medium"> Rest Sheet </span>
        </a>
      </li>
      <li>
        <a
          onClick={showDrawer}
          className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <SettingOutlined />
          <span className="text-[13px] font-medium"> Cài đặt Sheet </span>
        </a>
      </li>
    </ul>
  )
}

export default LayoutStatusMenuSheet
