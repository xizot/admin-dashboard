import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ThemeProvider from './components/ThemeProvider'
import { LocalStorageKeys } from './constants/localStorageKeys'
import AppRoutes from './routes'
import { store } from './store'
import { login } from './store/reducers/auth.reducer'
import { setTheme } from './store/reducers/theme.reducer'
import AppConfigs from './components/AppConfigs'
import ScrollToTop from './components/ScrollToTop'

const isAuthenticated = !!localStorage.getItem(LocalStorageKeys.IsAuthenticated)
const user = localStorage.getItem(LocalStorageKeys.User)
const themeMode = localStorage.getItem(LocalStorageKeys.ThemeMode)

if (isAuthenticated && user) {
  store.dispatch(login(JSON.parse(user)))
}

if (themeMode) {
  store.dispatch(setTheme(themeMode))
}

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ScrollToTop />
        <AppConfigs />
        <ToastContainer />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  )
}

export default App
