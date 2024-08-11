export type NavItem = {
  title: string
  icon?: React.ReactNode
  link: string | null
  children?: NavItem[]
}
