import React from 'react'
import './_sidebar.scss'
import { useAppDispatch } from '../../hooks/redux.hook'
import { toggleSideBar } from '../../store/reducers/appConfig.reducer'
// import NavList from '../../components/NavList'

// const navs: NavItem[] = [
//   {
//     title: 'Dashboard',
//     icon: <DeleteFilled />,
//     link: null,
//     children: [
//       {
//         title: 'Dashboard 1',
//         link: '/dashboard',
//       },
//       {
//         title: 'Dashboard 2',
//         link: null,
//         children: [
//           {
//             title: 'Dashboard 2.1',
//             link: '/dashboard/2.1',
//           },
//           {
//             title: 'Dashboard 2.2',
//             link: '/dashboard/2.2',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: 'User',
//     icon: <DeleteFilled />,
//     link: '/user',
//   },
//   {
//     title: 'Product',
//     icon: <DeleteFilled />,
//     link: '/product',
//   },
//   {
//     title: 'Order',
//     icon: <DeleteFilled />,
//     link: '/order',
//   },
//   {
//     title: 'Setting',
//     icon: <DeleteFilled />,
//     link: '/setting',
//   },
//   {
//     title: 'Profile',
//     icon: <DeleteFilled />,
//     link: '/profile',
//   },
//   {
//     title: 'Logout',
//     icon: <DeleteFilled />,
//     link: '/logout',
//   },
// ]

const Sidebar = () => {
  const dispatch = useAppDispatch()

  const handleToggleSidebar = () => {
    dispatch(toggleSideBar())
  }
  return (
    <>
      <aside className="sidebar">
        <p>Sidebar</p>
        {/* <NavList navs={navs} /> */}
      </aside>
      <div className="sidebar__overlay overlay" onClick={handleToggleSidebar}></div>
    </>
  )
}

export default Sidebar
