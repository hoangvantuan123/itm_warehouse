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

const DeliveryList = lazy(() => import('../page/material/deliveryList'))
const WaitingIqcStockIn = lazy(
  () => import('../page/material/waitingIqcStockIn'),
)

const { Content } = Layout

const UserRouter = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userPermissions, setUserPermissions] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Layout className="h-[calc(100vh-30px)]">
            <Sidebar permissions={userPermissions} />
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
                      path="u/warehouse/material/waiting-iqc-stock-in"
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
