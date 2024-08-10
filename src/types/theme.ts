import { HeaderPosition, MenuPosition, NavigationStyle, PageStyle } from '../constants/themeConfig'

export type ThemeOption = {
  name: string
  value: string
}

export type ThemeCategory = {
  id: string
  name: string
  options: ThemeOption[]
}

export type NavigationStyle = (typeof NavigationStyle)[keyof typeof NavigationStyle]
export type HeaderPosition = (typeof HeaderPosition)[keyof typeof HeaderPosition]
export type MenuPosition = (typeof MenuPosition)[keyof typeof MenuPosition]
export type PageStyle = (typeof PageStyle)[keyof typeof PageStyle]
