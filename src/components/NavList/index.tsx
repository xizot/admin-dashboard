import { NavItem } from '../../types/nav'

type NavListProps = {
  navs: NavItem[]
}

const NavList = ({ navs }: NavListProps) => {
  return (
    <ul className="sidebar__nav" style={{ paddingLeft: '1rem' }}>
      {navs.map((nav, index) => (
        <li key={index} className="sidebar__nav-item" style={{ paddingLeft: '1rem' }}>
          <a className="sidebar__nav-link">
            {nav.icon}
            <span>{nav.title}</span>
          </a>
          {nav.children && <NavList navs={nav.children} />}
        </li>
      ))}
    </ul>
  )
}
export default NavList
