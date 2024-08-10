import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ThemeProvider from './components/ThemeProvider'
import { LocalStorageKeys } from './constants/localStorageKeys'
import AppRoutes from './routes'
import { store } from './store'
import { login } from './store/reducers/auth.reducer'
import ThemeConfig from './common/ThemeConfig'
import ScrollToTop from './components/ScrollToTop'
import { updateThemeConfig } from './store/reducers/appConfig.reducer'
import SettingDrawer from './components/SettingDrawer'

const isAuthenticated = !!localStorage.getItem(LocalStorageKeys.IsAuthenticated)
const user = localStorage.getItem(LocalStorageKeys.User)
const appConfig = localStorage.getItem(LocalStorageKeys.AppConfig)

if (isAuthenticated && user) {
  store.dispatch(login(JSON.parse(user)))
}

if (appConfig) {
  store.dispatch(updateThemeConfig(JSON.parse(appConfig)))
}

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ThemeConfig />
        <SettingDrawer />
        <ScrollToTop />
        <ToastContainer />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  )
}

export default App
