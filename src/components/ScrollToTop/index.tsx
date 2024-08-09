import { ArrowUpOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import './_scrollToTop.scss'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setIsVisible(window.scrollY > 200)
    })
    return () => {
      document.removeEventListener('scroll', () => {})
    }
  }, [])

  if (!isVisible) {
    return null
  }
  return (
    <div className="scroll-to-top">
      <Button
        shape="circle"
        icon={<ArrowUpOutlined />}
        onClick={handleScrollToTop}
      />
    </div>
  )
}

export default ScrollToTop
