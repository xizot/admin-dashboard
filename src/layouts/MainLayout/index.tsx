import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import './_mainLayout.scss'
import BreadCrumb from '../../components/Breadcrumb'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <Header />
      <Sidebar />
      <BreadCrumb />
      <main className="main-layout__content">
        <div className="container-fluid">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
