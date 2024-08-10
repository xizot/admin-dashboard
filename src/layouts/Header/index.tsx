import {
  AppstoreOutlined,
  BellOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  GlobalOutlined,
  MenuOutlined,
  MoonOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  SunOutlined,
  WechatOutlined,
} from '@ant-design/icons'
import { ThemeMode } from '../../constants/themeConfig'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { openSettingDrawer, toggleSideBar, toggleThemeMode } from '../../store/reducers/appConfig.reducer'
import './_header.scss'
import HeaderSearch from './HeaderSearch'
import useFullScreen from '../../hooks/useFullScreen.hook'

const Header = () => {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector((state) => state.appConfig.themeConfig.themeMode)
  const { isFullScreen, toggleFullScreen } = useFullScreen()

  const handleToggleTheme = () => {
    dispatch(toggleThemeMode())
  }

  const handleOpenSettingDrawer = () => {
    dispatch(openSettingDrawer())
  }

  const handleToggleSidebar = () => {
    dispatch(toggleSideBar())
  }

  return (
    <header className="header">
      <div className="header__main-content container-fluid">
        <div className="header__left">
          <div className="header__element icon-open-menu">
            <MenuOutlined className="header__link-icon" onClick={handleToggleSidebar} />
          </div>
          <div className="header__element">
            <HeaderSearch />
          </div>
        </div>
        <div className="header__right">
          <div className="header__element">
            <GlobalOutlined className="header__link-icon" />
          </div>
          <div className="header__element">
            {themeMode === ThemeMode.Dark ? (
              <SunOutlined className="header__link-icon" onClick={handleToggleTheme} />
            ) : (
              <MoonOutlined className="header__link-icon" onClick={handleToggleTheme} />
            )}
          </div>
          <div className="header__element desktop-only">
            <ShoppingCartOutlined className="header__link-icon" />
          </div>
          <div className="header__element desktop-only">
            <BellOutlined className="header__link-icon" />
          </div>
          <div className="header__element desktop-only">
            <AppstoreOutlined className="header__link-icon" />
          </div>
          <div className="header__element desktop-only">
            {isFullScreen ? (
              <FullscreenExitOutlined className="header__link-icon" onClick={toggleFullScreen} />
            ) : (
              <FullscreenOutlined className="header__link-icon" onClick={toggleFullScreen} />
            )}
          </div>
          <div className="header__element desktop-only">
            <WechatOutlined className="header__link-icon" />
          </div>
          <div className="header__element user-profile">
            <div>
              <p>Harry Jones</p>
            </div>
          </div>
          <div className="header__element">
            <SettingOutlined spin className="header__link-icon" onClick={handleOpenSettingDrawer} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
