import React from 'react'
import './_sidebar.scss'
import { useAppDispatch } from '../../hooks/redux.hook'
import { toggleSideBar } from '../../store/reducers/appConfig.reducer'

const Sidebar = () => {
  const dispatch = useAppDispatch()

  const handleToggleSidebar = () => {
    dispatch(toggleSideBar())
  }
  return (
    <>
      <aside className="sidebar">
        <p>Sidebar</p>
      </aside>
      <div className="sidebar__overlay overlay" onClick={handleToggleSidebar}></div>
    </>
  )
}

export default Sidebar
