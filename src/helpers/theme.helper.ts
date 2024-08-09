import { ThemeConfig } from 'antd'
import { ThemeMode, ThemeModeType } from '../constants/themeMode'

const customDarkTheme: ThemeConfig = {
  token: {
    colorPrimary: '#8e54e9',
  },
}

const customLightTheme: ThemeConfig = {
  cssVar: true,
  token: {
    colorPrimary: '#8e54e9',
  },
  components: {},
}

export const getCurrentTheme = (themeMode: ThemeModeType): ThemeConfig => {
  return themeMode === ThemeMode.Dark ? customLightTheme : customDarkTheme
}
