import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { useAppSelector } from '../hooks/redux.hook'
import MainLayout from '../layouts/MainLayout'
import { lazy } from 'react'
const LoginPage = lazy(() => import('../pages/LoginPage'))
const HomePage = lazy(() => import('../pages/HomePage'))

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<>Test</>} />
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/profile" element={<>Profile</>} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default AppRoutes
