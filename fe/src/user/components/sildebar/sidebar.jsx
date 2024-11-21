import { Layout, Menu, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SidebarContent from './styled/toggleSidebar'
import Logo from '../../../assets/192.png'
import { useTranslation } from 'react-i18next'
import { SettingOutlined, SearchOutlined, AppstoreOutlined, AppstoreAddOutlined, UserOutlined, InboxOutlined } from '@ant-design/icons';
import { SettingIcon, FileMenuIcon, LogoutIcon } from './icon'
const { Sider, Footer } = Layout
const { SubMenu } = Menu
const { Title, Text } = Typography
const menuStyle = {
  borderInlineEnd: 'none',
}
import './static/css/scroll_container.css';

const menuItems = [
  {
    key: "warehouse",
    label: "QUẢN LÝ KHO HÀNG",
    icon: <InboxOutlined style={{ fontSize: '20px' }} />,
    link: "/u/warehouse",
    utilities: true
  },
  {
    key: "add",
    label: "ADD",
    icon: <InboxOutlined style={{ fontSize: '20px' }} />,
    link: "/u/add",
    utilities: true
  }
];

const menuSettingItems = [
  {
    key: "gen-info",
    label: "THÔNG TIN NHÂN SỰ",
    icon: <SettingIcon />,
    subMenu: [
      {
        key: "gen-info-1-2",
        label: "ĐĂNG KÝ NHÂN VIÊN MỚI",
        link: "/u/action=gen-info-1-2/from=view"
      },
      {
        key: "gen-info-advanced",
        label: "THÔNG TIN NÂNG CAO",
        subMenu: [
          {
            key: "advanced-1",
            label: "TÙY CHỈNH 1",
            link: "/u/advanced-1"
          },
          {
            key: "advanced-2",
            label: "TÙY CHỈNH 2",
            link: "/u/advanced-2"
          }
        ]
      }
    ]
  },
  {
    key: "warehouse",
    label: "QUẢN LÝ KHO HÀNG",
    icon: <InboxOutlined style={{ fontSize: '20px' }} />,
    link: "/u/warehouse"
  },
  {
    key: "add",
    label: "ADD",
    icon: <InboxOutlined style={{ fontSize: '20px' }} />,
    link: "/u/add"
  }
];



const Sidebar = ({ permissions }) => {
  const location = useLocation()
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))

  const userNameLogin = userFromLocalStorage?.login || 'none'
  const [collapsed, setCollapsed] = useState(() => {
    const savedState = localStorage.getItem('COLLAPSED_STATE')
    return savedState ? JSON.parse(savedState) : false
  })
  const [isMobile, setIsMobile] = useState(false)
  const [menu, setMenu] = useState(true)
  const [isMenu, setIsMenu] = useState(null)

  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState(
    sessionStorage.getItem('current_action_phone'),
  )
  const [currentAction, setCurrentAction] = useState(
    sessionStorage.getItem('current_action'),
  )

  const toggleSidebar = () => {
    setCollapsed(prevState => {
      const newState = !prevState
      localStorage.setItem('COLLAPSED_STATE', JSON.stringify(newState))
      return newState
    })
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (location.pathname === '/u/login') {
    return null
  }
  const handleOnClickMenuItem = (e) => {
    sessionStorage.setItem('current_action', e.key)
    setCurrentAction(e.key)
  }

  const handleOnClickMenuItemPhone = (e) => {
    sessionStorage.setItem('current_action_phone', e)
    setActiveTab(e)
  }
  const handleOnClickMenu = () => {
    setMenu(!menu)
  }

  return (
    <>
      {!isMobile ? (
        <div className='flex'>
          <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
            <div>
              <div className="inline-flex size-16 items-center justify-center">
                <img src={Logo} className=" w-10 cursor-pointer   border rounded-lg h-auto  " />
              </div>

              <div className="border-t border-gray-100">
                <div className="px-2">
                  <div className="py-4">
                    <a
                      onClick={handleOnClickMenu}
                      className="group relative flex justify-center rounded px-2 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <AppstoreAddOutlined style={{ fontSize: '20px' }} />
                    </a>
                  </div>

                  <ul className="space-y-1 border-t border-gray-100 pt-4">
                    {menuItems.map(item =>
                      item.utilities ? (
                        <li key={item.key}>
                          <a

                            className="group relative flex justify-center  rounded-lg px-2 py-2 border mb-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          >
                            {item.icon}
                          </a>
                        </li>
                      ) : null
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
              <form action="#">
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <LogoutIcon />

                  <span
                    className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                  >
                    Logout
                  </span>
                </button>
              </form>
            </div>
          </div>
          {menu && <Sider
            width={250}
            theme="light"
            className="p-1 border-r h-screen overflow-auto scroll-container"
          >
            <SidebarContent collapsed={collapsed} toggleSidebar={handleOnClickMenu} />
            <div className='mb-5'></div>
            <Title level={5} className="opacity-80">MENU 1</Title>
            <Menu
              style={menuStyle}
              mode="inline"
              defaultSelectedKeys={[`${currentAction}`]}
              className="border-r-0"
              onClick={(e) => handleOnClickMenuItem(e)}
            >
              {menuItems.map(item => (
                <Menu.Item key={item.key}>
                  <Link onClick={() => setIsMenu(item.key)} className="flex items-center justify-start">
                    {item.icon}
                    <span className="ml-3">{t(item.label)}</span>
                  </Link>
                </Menu.Item>
              ))}
            </Menu>

          </Sider>}

          {isMenu !== null && <Sider
            width={250}
            theme="light"
            collapsed={collapsed}
            onCollapse={toggleSidebar}
            className="p-1 border-r h-screen overflow-auto scroll-container"
          >
            <SidebarContent collapsed={collapsed} toggleSidebar={toggleSidebar} />
            <div className='mb-5'></div>
            <Title level={5} className="opacity-80">{isMenu}</Title>
            <Menu
              style={menuStyle}
              mode="inline"
              defaultSelectedKeys={[`${currentAction}`]}
              className="border-r-0"
              onClick={(e) => handleOnClickMenuItem(e)}
            >
              <Menu
                style={menuStyle}
                mode="inline"
                defaultSelectedKeys={[`${currentAction}`]}
                className="border-r-0"
                onClick={(e) => handleOnClickMenuItem(e)}
              >
                {menuSettingItems.map(item => (
                  item.key === isMenu ? (
                    <Menu.Item key={item.key} >
                      <Link
                        onClick={() => setIsMenu(item.key)}
                        className="flex items-center justify-start"
                      >
                        {item.icon}
                        <span className="ml-3">{t(item.label)}</span>
                      </Link>
                    </Menu.Item>
                  ) : null
                ))}
              </Menu>


            </Menu>

          </Sider>}

        </div>
      ) : (
        <Footer className="fixed bottom-0 z-50 w-full bg-white border-t-[1px] border-b-0 pt-3 pb-7 p-0">
          <div className="flex justify-around w-full space-x-4">
            {[
              { key: 'work', icon: <SettingOutlined />, label: 'Làm việc', router: 'action=work-1-1/from=view' },
              { key: 'search', icon: <SearchOutlined />, label: 'Tra cứu', router: 'action=lookup-1-1/from=view' },
              { key: 'materials', icon: <AppstoreOutlined />, label: 'Vật liệu', router: 'action=material-1-1/from=view' },
              { key: 'user', icon: <UserOutlined />, label: 'Cá nhân', router: 'action=user' }
            ].map(({ key, icon, label, router }) => (
              <div key={key} className="flex-1 text-center">
                <Link
                  to={`/u/${router}`}
                  className="flex flex-col items-center"
                  onClick={() => handleOnClickMenuItemPhone(key)}
                >
                  <div
                    className={`text-2xl ${activeTab === key ? 'text-blue-500' : 'text-gray-400 opacity-70'}`}
                    style={{ fontSize: '23px' }}
                  >
                    {icon}
                  </div>
                  <span
                    className={`mt-1 text-[10px] ${activeTab === key ? 'text-blue-500' : 'text-gray-500 opacity-70'}`}
                  >
                    {t(label)}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </Footer>

      )}
    </>
  )
}

export default Sidebar
