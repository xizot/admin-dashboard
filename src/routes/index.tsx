import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { useAppSelector } from '../hooks/redux.hook'
import Login from '../pages/Login'
import Home from '../pages/Home'

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<>Test</>} />
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<>Profile</>} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

