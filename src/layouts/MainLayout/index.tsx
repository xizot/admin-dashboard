import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import './_mainLayout.scss'
import SettingDrawer from '../../components/SettingDrawer'
import MainLayoutBreadcrumb from './MainLayoutBreadcrumb'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <Header />
      <Sidebar />
      <MainLayoutBreadcrumb />
      <main className="main-layout__content">
        <div className="container-fluid">{children}</div>
      </main>
      <SettingDrawer />
      <Footer />
    </div>
  )
}

export default MainLayout
