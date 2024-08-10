import { Input } from 'antd'
import React from 'react'
import './_headerSearch.scss'

const HeaderSearch = () => {
  return (
    <div className="header-search">
      <Input.Search className="desktop-only" placeholder="input search text" allowClear style={{ width: 300 }} />
    </div>
  )
}

export default HeaderSearch
