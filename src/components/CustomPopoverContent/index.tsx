import { Row } from 'antd'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import './_customPopoverContent.scss'

type CustomPopverContentProps = {
  title: string
  label?: string
  body: React.ReactNode
  footer: React.ReactNode
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
}

const getClassByType = (type: string) => {
  switch (type) {
    case 'primary':
      return 'bg-primary-transparent'
    case 'success':
      return 'bg-success-transparent'
    case 'warning':
      return 'bg-warning-transparent'
    case 'danger':
      return 'bg-danger-transparent'
    case 'info':
      return 'bg-info-transparent'
    case 'pink':
      return 'bg-pink-transparent'
    case 'secondary':
      return 'bg-secondary-transparent'
    case 'teal':
      return 'bg-teal-transparent'
    default:
      return 'bg-default-transparent'
  }
}
const CustomPopverContent = ({ title, label, body, footer, type }: CustomPopverContentProps) => {
  return (
    <div className="custom-popover-content">
      <div className="custom-popover-content__header">
        <h3 className="text-default">{title}</h3>
        {label && <span className={`${getClassByType(type as string)} custom-popover-content__label`}>{label}</span>}
      </div>
      <PerfectScrollbar>
        <div className="custom-popover-content__body">{body}</div>
      </PerfectScrollbar>
      <Row className="custom-popover-content__footer">{footer}</Row>
    </div>
  )
}

export default CustomPopverContent
