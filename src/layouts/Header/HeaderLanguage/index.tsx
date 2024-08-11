import { GlobalOutlined } from '@ant-design/icons'
import { Popover } from 'antd'
import React, { useState } from 'react'
import HeaderLanguageContent from '../HeaderLanguageContent'

function HeaderLanguage() {
  const [open, setOpen] = useState(false)

  const handleOpen = (newOpen: boolean) => {
    setOpen(newOpen)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Popover
      overlayClassName="header-language no-padding"
      arrow={false}
      content={<HeaderLanguageContent onClose={handleClose} />}
      trigger="click"
      open={open}
      onOpenChange={handleOpen}
      getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
    >
      <GlobalOutlined className="header__link-icon" />
    </Popover>
  )
}

export default HeaderLanguage
