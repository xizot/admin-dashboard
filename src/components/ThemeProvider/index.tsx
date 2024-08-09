import React from 'react'
import { getCurrentTheme } from '../../helpers/theme.helper'
import { ConfigProvider } from 'antd'
import { useAppSelector } from '../../hooks/redux.hook'

type ThemeProviderProps = {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeMode = useAppSelector((state) => state.theme).themeMode
  return (
    <ConfigProvider theme={getCurrentTheme(themeMode)}>
      <div>{children}</div>
    </ConfigProvider>
  )
}

export default ThemeProvider
