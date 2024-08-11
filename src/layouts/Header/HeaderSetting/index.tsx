import { SettingOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import SettingDrawer from '../../../components/SettingDrawer'

const HeaderSetting = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <SettingOutlined spin className="header__link-icon" onClick={handleOpen} />
      <SettingDrawer open={open} onClose={handleClose} />
    </div>
  )
}

export default HeaderSetting
