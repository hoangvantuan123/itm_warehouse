import { useLocation } from 'react-router-dom'
import { Dropdown, Menu } from 'antd'

export default function BreadcrumbRouter({ menuTransForm, rootMenu }) {
  const location = useLocation()
  const currentPath = location.pathname

  const findRoute = (path, menus) => {
    for (const menu of menus) {
      if (menu.MenuLink === path) {
        return [menu]
      }
      if (menu.subMenu) {
        const subRoute = findRoute(path, menu.subMenu)
        if (subRoute) {
          return [menu, ...subRoute]
        }
      }
    }
    return null
  }

  const breadcrumbItems = currentPath
    .split('/')
    .filter((part) => part)
    .reduce((breadcrumbs, part, index, array) => {
      const path = '/' + array.slice(0, index + 1).join('/')
      const matchedRoute =
        findRoute(path, rootMenu) || findRoute(path, menuTransForm)

      if (matchedRoute) {
        breadcrumbs.push({
          path: matchedRoute[matchedRoute.length - 1].MenuLink,
          breadcrumbName: matchedRoute[matchedRoute.length - 1].MenuLabel,
          subMenu: matchedRoute[matchedRoute.length - 1].subMenu || null,
        })
      }
      return breadcrumbs
    }, [])

  breadcrumbItems.unshift({
    path: '/wms/u/home',
    breadcrumbName: (
      <>
        <span>HOME</span>
      </>
    ),
    subMenu: null,
  })

  const renderSubMenu = (subMenu) => {
    if (!subMenu) return null

    return (
      <Menu>
        {subMenu.map((item) => (
          <Menu.Item key={item.MenuKey}>
            <a className=" uppercase" href={item.MenuLink}>
              {item.MenuLabel}
            </a>
          </Menu.Item>
        ))}
      </Menu>
    )
  }

  return (
    <div className="p-2 uppercase text-xs bg-white border-b">
      {breadcrumbItems.map((item, index) => (
        <span key={item.path} className=" uppercase">
          {index > 0 && <span> / </span>}
          {item.subMenu ? (
            <Dropdown
              overlay={renderSubMenu(item.subMenu)}
              trigger={['click', 'hover']}
            >
              <a className=" uppercase" href={item.path}>
                {item.breadcrumbName}
              </a>
            </Dropdown>
          ) : (
            <a className=" uppercase" href={item.path}>
              {item.breadcrumbName}
            </a>
          )}
        </span>
      ))}
    </div>
  )
}
