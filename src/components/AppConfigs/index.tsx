import { ThemeMode } from '../../constants/themeMode'
import { useAppSelector } from '../../hooks/redux.hook'

const AppConfigs = () => {
  const { openSideBar } = useAppSelector((state) => state.appConfig)
  const themeMode = useAppSelector((state) => state.theme.themeMode)

  const isDarkMode = themeMode === ThemeMode.Dark
  document.body.setAttribute('data-theme', isDarkMode ? 'dark' : '')
  document.body.setAttribute('data-menu-styles', 'dark')
  document.body.setAttribute('data-show-sidebar', openSideBar ? 'show' : '')

  return null
}

export default AppConfigs
