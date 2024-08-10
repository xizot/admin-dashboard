export const ThemeMode = {
  Light: 'light',
  Dark: 'dark',
}

export const NavigationStyle = {
  Vertical: 'vertical',
  Horizontal: 'horizontal',
}

export const HeaderPosition = {
  Fixed: 'fixed',
  Scrollable: 'scrollable',
  Rounded: 'rounded',
}

export const MenuPosition = {
  Fixed: 'fixed',
  Scrollable: 'scrollable',
}

export const PageStyle = {
  Regular: 'regular',
  Classic: 'classic',
}

export const themeConfigs = {
  themeMode: {
    name: 'Theme Color Mode',
    id: 'themeMode',
    options: [
      {
        name: 'Dark',
        value: ThemeMode.Dark,
      },
      {
        name: 'Light',
        value: ThemeMode.Light,
      },
    ],
  },
  navLayout: {
    name: 'Navigation Styles',
    id: 'navLayout',
    options: [
      {
        name: 'Vertical',
        value: NavigationStyle.Vertical,
      },
      {
        name: 'Horizontal',
        value: NavigationStyle.Horizontal,
      },
    ],
  },
  pageStyle: {
    name: 'Page Styles',
    id: 'pageStyle',
    options: [
      {
        name: 'Regular',
        value: PageStyle.Regular,
      },
      {
        name: 'Classic',
        value: PageStyle.Classic,
      },
    ],
  },
  menuPosition: {
    name: 'Menu Position',
    id: 'menuPosition',
    options: [
      {
        name: 'Fixed',
        value: MenuPosition.Fixed,
      },
      {
        name: 'Scrollable',
        value: MenuPosition.Scrollable,
      },
    ],
  },
  headerPosition: {
    name: 'Header Position',
    id: 'headerPosition',
    options: [
      {
        name: 'Fixed',
        value: HeaderPosition.Fixed,
      },
      {
        name: 'Scrollable',
        value: HeaderPosition.Scrollable,
      },
      // {
      //   name: 'Rounded',
      //   value: HeaderPosition.Rounded,
      // },
    ],
  },
}

export type ThemeConfig = { [_ in keyof typeof themeConfigs]: string }
