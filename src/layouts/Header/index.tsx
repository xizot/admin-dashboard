import { FullscreenExitOutlined, FullscreenOutlined, MenuOutlined, MoonOutlined, SunOutlined, WechatOutlined } from '@ant-design/icons'
import { ThemeMode } from '../../constants/themeConfig'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { toggleSideBar, toggleThemeMode } from '../../store/reducers/appConfig.reducer'
import './_header.scss'
import HeaderSearch from './HeaderSearch'
import useFullScreen from '../../hooks/useFullScreen.hook'
import HeaderRelatedApp from './HeaderRelatedApp'
import HeaderSetting from './HeaderSetting'
import HeaderLanguage from './HeaderLanguage'
import HeaderCart from './HeaderCart'
import HeaderNotification from './HeaderNotification'
import HeaderProfile from './HeaderProfile'

const Header = () => {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector((state) => state.appConfig.themeConfig.themeMode)
  const { isFullScreen, toggleFullScreen } = useFullScreen()

  const handleToggleTheme = () => {
    dispatch(toggleThemeMode())
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
            <HeaderLanguage />
          </div>
          <div className="header__element">
            {themeMode === ThemeMode.Dark ? (
              <SunOutlined className="header__link-icon" onClick={handleToggleTheme} />
            ) : (
              <MoonOutlined className="header__link-icon" onClick={handleToggleTheme} />
            )}
          </div>
          <div className="header__element desktop-only">
            <HeaderCart />
          </div>
          <div className="header__element desktop-only">
            <HeaderNotification />
          </div>
          <div className="header__element desktop-only">
            <HeaderRelatedApp />
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
            <HeaderProfile />
          </div>
          <div className="header__element">
            <HeaderSetting />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
