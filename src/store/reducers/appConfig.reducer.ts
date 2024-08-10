import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'
import { LocalStorageKeys } from '../../constants/localStorageKeys'
import { HeaderPosition, MenuPosition, NavigationStyle, PageStyle, ThemeConfig, ThemeMode } from '../../constants/themeConfig'

type AppState = {
  openSideBar: boolean
  openSettingDrawer: boolean
  themeConfig: ThemeConfig
}

const initialState: AppState = {
  openSideBar: true,
  openSettingDrawer: false,
  themeConfig: {
    themeMode: ThemeMode.Dark,
    navLayout: NavigationStyle.Vertical,
    pageStyle: PageStyle.Regular,
    menuPosition: MenuPosition.Fixed,
    headerPosition: HeaderPosition.Fixed,
  },
}

const saveThemeConfigToLocalStorage = (state: any) => {
  localStorage.setItem(LocalStorageKeys.AppConfig, JSON.stringify(state))
}

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    toggleSideBar(state) {
      state.openSideBar = !state.openSideBar
      saveThemeConfigToLocalStorage(state.themeConfig)
    },
    toggleThemeMode(state) {
      state.themeConfig.themeMode = state.themeConfig.themeMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light
      saveThemeConfigToLocalStorage(state.themeConfig)
    },
    openSettingDrawer(state) {
      state.openSettingDrawer = true
      saveThemeConfigToLocalStorage(state.themeConfig)
    },
    closeSettingDrawer(state) {
      state.openSettingDrawer = false
      saveThemeConfigToLocalStorage(state.themeConfig)
    },
    updateThemeConfig(state, action: PayloadAction<ThemeConfig & { openSettingDrawer?: boolean }>) {
      const { openSettingDrawer, ...rest } = action.payload
      state.themeConfig = _.merge(state.themeConfig, rest)
      if (!_.isNil(openSettingDrawer)) {
        state.openSettingDrawer = openSettingDrawer
      }
      saveThemeConfigToLocalStorage(state.themeConfig)
    },
    updateThemeConfigItem(state, action: PayloadAction<{ id: keyof ThemeConfig; value: string }>) {
      const { id, value } = action.payload
      state.themeConfig[id] = value
      saveThemeConfigToLocalStorage(state.themeConfig)
    },
    resetThemeConfig(state) {
      state.themeConfig = initialState.themeConfig
      saveThemeConfigToLocalStorage(state.themeConfig)
    },
  },
})

export const { toggleSideBar, resetThemeConfig, openSettingDrawer, closeSettingDrawer, updateThemeConfig, updateThemeConfigItem, toggleThemeMode } =
  appConfigSlice.actions
export default appConfigSlice.reducer
