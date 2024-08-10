import { useAppSelector } from '../../hooks/redux.hook'

const ThemeConfig = () => {
  const { openSideBar } = useAppSelector((state) => state.appConfig)
  const { themeMode, headerPosition, menuPosition, navLayout, pageStyle } = useAppSelector((state) => state.appConfig.themeConfig)

  document.documentElement.setAttribute('data-theme-mode', themeMode)
  document.documentElement.setAttribute('data-page-style', pageStyle)
  document.documentElement.setAttribute('data-header-position', headerPosition)
  document.documentElement.setAttribute('data-menu-position', menuPosition)
  document.documentElement.setAttribute('data-nav-layout', navLayout)
  document.documentElement.setAttribute('data-menu-style', 'dark')
  document.documentElement.setAttribute('data-show-sidebar', openSideBar ? 'show' : 'hide')

  return null
}

export default ThemeConfig
