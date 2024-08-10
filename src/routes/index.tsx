import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { useAppSelector } from '../hooks/redux.hook'
import MainLayoutBreadcrumb from '../layouts/MainLayout'
import { lazy } from 'react'
const LoginPage = lazy(() => import('../pages/Login'))
const HomePage = lazy(() => import('../pages/Home'))

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  return (
    <BrowserRouter>
      <MainLayoutBreadcrumb>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<>Test</>} />
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/profile" element={<>Profile</>} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </MainLayoutBreadcrumb>
    </BrowserRouter>
  )
}

export default AppRoutes
