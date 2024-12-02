import { useEffect, useState, useRef, lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from 'react-router-dom'
import { Layout, Spin } from 'antd'
import Sidebar from '../components/sildebar/sidebar'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import { checkActionPermission } from '../../permissions'
import BreadcrumbRouter from '../components/sildebar/breadcrumb'
import Spinner from '../page/default/load'
import ViewTest from '../page/test/viewTest'
import Home from '../page/home/home'
import Login from '../auth/login'
import decodeJWT from '../../utils/decode-JWT'


const DeliveryList = lazy(() => import('../page/material/deliveryList'))
const WaitingIqcStockIn = lazy(
  () => import('../page/material/waitingIqcStockIn'),
)

const StockOutRequest = lazy(() => import('../page/material/stockOutRequest'))
const UserManagement = lazy(() => import('../page/system/userManagement'))
const RoleManagement = lazy(() => import('../page/system/roleManagement'))
const ProfileUserId = lazy(() => import('../page/system/profileUserId'))
const MenuTechnique = lazy(() => import('../page/system/menuTechnique'))
const RootMenuTechnique = lazy(() => import('../page/system/rootMenuTechnique'))

const { Content } = Layout

const UserRouter = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userPermissions, setUserPermissions] = useState([])
  const [isMobile, setIsMobile] = useState(false)
  const [menuSettingItems, setMenuSettingItems] = useState([])
  const [rootMenu, setRootMenu] = useState([])
  useEffect(() => {
    const token = localStorage.getItem('roles_menu');
    const data = decodeJWT(token);
    setMenuSettingItems(data.data[0].menu || [])
    setRootMenu(data.data[1].rootMenu || [])
  }, []);

  return (
    <Routes>
      <Route path="u/login" element={<Login />} />
      <Route
        path="/*"
        element={
          <Layout className="h-[calc(100vh-30px)]">
            <Sidebar permissions={userPermissions} rootMenu={rootMenu} menuSettingItems={menuSettingItems} />
            <Layout>
              <Content className="bg-slate-50">
                <Suspense fallback={<Spinner />}>
                  <BreadcrumbRouter />
                  <Routes>
                    <Route
                      path="u/warehouse/material/delivery-list"
                      element={
                        checkActionPermission(userPermissions, '', '') ? (
                          <DeliveryList
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        ) : (
                          <DeliveryList
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        )
                      }
                    />
                    <Route
                      path="u/warehouse/material/waiting-iqc-stock-in/:id"
                      element={
                        checkActionPermission(userPermissions, '', '') ? (
                          <WaitingIqcStockIn
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        ) : (
                          <WaitingIqcStockIn
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        )
                      }
                    />
                    <Route
                      path="u/warehouse/material/stock-out-request"
                      element={
                        checkActionPermission(userPermissions, '', '') ? (
                          <StockOutRequest
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        ) : (
                          <StockOutRequest
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        )
                      }
                    />
                    <Route
                      path="u/system_settings/users/user-management"
                      element={
                        checkActionPermission(userPermissions, '', '') ? (
                          <UserManagement
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        ) : (
                          <UserManagement
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        )
                      }
                    />
                    <Route
                      path="u/system_settings/users/user-management/profile/:id/:name"
                      element={
                        checkActionPermission(userPermissions, '', '') ? (
                          <ProfileUserId
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        ) : (
                          <ProfileUserId
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        )
                      }
                    />
                    <Route
                      path="u/system_settings/users/role-management"
                      element={
                        checkActionPermission(userPermissions, '', '') ? (
                          <RoleManagement
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        ) : (
                          <RoleManagement
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        )
                      }
                    />
                    <Route
                      path="u/system_settings/technique/menu-items"
                      element={
                        checkActionPermission(userPermissions, '', '') ? (
                          <MenuTechnique
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        ) : (
                          <MenuTechnique
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        )
                      }
                    />
                    <Route
                      path="u/system_settings/technique/root-menu"
                      element={
                        checkActionPermission(userPermissions, '', '') ? (
                          <RootMenuTechnique
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        ) : (
                          <RootMenuTechnique
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        )
                      }
                    />
                    <Route
                      path=""
                      element={
                        checkActionPermission(userPermissions, '', '') ? (
                          <Home
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        ) : (
                          <Home
                            permissions={userPermissions}
                            isMobile={isMobile}
                          />
                        )
                      }
                    />
                  </Routes>
                </Suspense>
              </Content>
            </Layout>
          </Layout>
        }
      />
    </Routes>
  )
}

const App = () => (
  <Router>
    <UserRouter />
  </Router>
)

export default App
