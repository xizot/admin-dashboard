import { BellOutlined } from '@ant-design/icons'
import { Badge, Button, Popover } from 'antd'
import React, { useState } from 'react'
import CustomPopverContent from '../../../components/CustomPopoverContent'

const HeaderNotification = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = (newOpen: boolean) => {
    setOpen(newOpen)
  }

  // const handleClose = () => {
  //   setOpen(false)
  // }

  return (
    <Popover
      overlayClassName="no-padding"
      arrow={false}
      content={
        <CustomPopverContent
          title="Notifications"
          body={<></>}
          footer={
            <Button type="primary" block size="large">
              View All
            </Button>
          }
        />
      }
      trigger="click"
      open={open}
      onOpenChange={handleOpen}
      getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
    >
      <Badge count={5} offset={[-10, 10]} size="small" color="#49b6f5">
        <BellOutlined className="header__link-icon" />
      </Badge>
    </Popover>
  )
}

export default HeaderNotification
