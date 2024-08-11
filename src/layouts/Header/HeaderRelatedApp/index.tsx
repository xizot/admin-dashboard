import { AppstoreOutlined, CalendarOutlined, MailOutlined, PhoneOutlined, SettingOutlined, UserOutlined, WechatOutlined } from '@ant-design/icons'
import { Col, Drawer, Row } from 'antd'
import React, { useState } from 'react'
import RelatedAppItem from '../../../components/RelatedAppItem'

const relatedAppItems = [
  {
    icon: <CalendarOutlined />,
    title: 'Calendar',
    link: '',
    className: 'bg-success-transparent',
  },
  {
    icon: <MailOutlined />,
    title: 'Mail',
    link: '',
    className: 'bg-info-transparent',
  },
  {
    icon: <UserOutlined />,
    title: 'Profile',
    link: '',
    className: 'bg-warning-transparent',
  },
  {
    icon: <WechatOutlined />,
    title: 'Chat',
    link: '',
    className: 'bg-pink-transparent',
  },
  {
    icon: <PhoneOutlined />,
    title: 'Contacts',
    link: '',
    className: 'bg-secondary-transparent',
  },
  {
    icon: <SettingOutlined />,
    title: 'Settings',
    link: '',
    className: 'bg-teal-transparent',
  },
]

const HeaderRelatedApp = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="header-related-app">
      <AppstoreOutlined className="header__link-icon" onClick={handleOpen} />
      <Drawer className="white-drawer" open={open} onClose={handleClose} title="Related App">
        <Row gutter={[16, 16]}>
          {relatedAppItems.map((item, index) => (
            <Col key={index} span={12}>
              <RelatedAppItem {...item} />
            </Col>
          ))}
        </Row>
      </Drawer>
    </div>
  )
}

export default HeaderRelatedApp
