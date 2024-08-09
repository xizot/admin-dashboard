import {
  AppstoreOutlined,
  BellOutlined,
  FullscreenOutlined,
  GlobalOutlined,
  MenuOutlined,
  MoonOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  SunOutlined,
  UngroupOutlined,
} from '@ant-design/icons'
import { Input } from 'antd'
import { ThemeMode } from '../../constants/themeMode'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { toggleThemeMode } from '../../store/reducers/theme.reducer'
import './_header.scss'
import { toggleSideBar } from '../../store/reducers/appConfig.reducer'

const Header = () => {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector((state) => state.theme.themeMode)

  const handleToggleTheme = () => {
    dispatch(toggleThemeMode())
  }

  const handleToggleSidebar = () => {
    dispatch(toggleSideBar())
  }

  return (
    <header className="header">
      <div className="header__main-content">
        <div className="header__left">
          <div className="header__element">
            <MenuOutlined
              className="header__link-icon"
              onClick={handleToggleSidebar}
            />
          </div>
          <div className="header__element">
            <Input.Search
              placeholder="input search text"
              allowClear
              style={{ width: 300 }}
            />
          </div>
        </div>
        <div className="header__right">
          <div className="header__element">
            <GlobalOutlined className="header__link-icon" />
          </div>
          <div className="header__element">
            {themeMode === ThemeMode.Dark ? (
              <SunOutlined
                className="header__link-icon"
                onClick={handleToggleTheme}
              />
            ) : (
              <MoonOutlined
                className="header__link-icon"
                onClick={handleToggleTheme}
              />
            )}
          </div>
          <div className="header__element">
            <ShoppingCartOutlined className="header__link-icon" />
          </div>
          <div className="header__element">
            <BellOutlined className="header__link-icon" />
          </div>
          <div className="header__element">
            <AppstoreOutlined className="header__link-icon" />
          </div>
          <div className="header__element">
            <FullscreenOutlined className="header__link-icon" />
          </div>
          <div className="header__element">
            <UngroupOutlined className="header__link-icon" />
          </div>
          <div className="header__element user-profile">
            <div>
              <p>Harry Jones</p>
            </div>
          </div>
          <div className="header__element">
            <SettingOutlined spin className="header__link-icon" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
