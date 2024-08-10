import React from 'react'
import { ConfigProvider } from 'antd'

type ThemeProviderProps = {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ConfigProvider
      theme={{
        cssVar: {
          prefix: 'custom',
        },
        token: {
          colorPrimary: '#8e54e9',
        },
        components: {
          Button: {
            colorPrimary: 'var(--primary-color)',
            colorError: 'var(--error-color)',
          },
          Typography: {
            colorText: 'var(--default-text-color)',
          },
        },
      }}
    >
      <div>{children}</div>
    </ConfigProvider>
  )
}

export default ThemeProvider
