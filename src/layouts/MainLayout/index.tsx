import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import './_mainLayout.scss'
import MainLayoutBreadcrumb from './MainLayoutBreadcrumb'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <Sidebar />
      <MainLayoutBreadcrumb />
      <main className="main-layout__content">
        <div className="container-fluid">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
