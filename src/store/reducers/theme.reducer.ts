import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LocalStorageKeys } from '../../constants/localStorageKeys'
import { ThemeMode, ThemeModeType } from '../../constants/themeMode'

type ThemeState = {
  themeMode: ThemeModeType;
}

const initialState: ThemeState = {
  themeMode: ThemeMode.Light,
}

const localStorageThemeMode = (mode: ThemeModeType) => {
  localStorage.setItem(LocalStorageKeys.ThemeMode, mode)
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleThemeMode(state) {
      const newTheme: string = state.themeMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light
      state.themeMode = newTheme
      localStorageThemeMode(newTheme)
    },
    setTheme(state, action: PayloadAction<ThemeModeType>) {
      state.themeMode = action.payload
      localStorageThemeMode(action.payload)
    }
  },
})

export const { toggleThemeMode, setTheme } = themeSlice.actions
export default themeSlice.reducer
