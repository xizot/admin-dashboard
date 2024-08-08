export const ThemeMode = {
  Light: 'light',
  Dark: 'dark'
}

export type ThemeModeType = typeof ThemeMode[keyof typeof ThemeMode];