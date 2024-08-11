import { ShoppingCartOutlined } from '@ant-design/icons'
import { Badge, Button, Popover } from 'antd'
import React, { useState } from 'react'
import CustomPopverContent from '../../../components/CustomPopoverContent'
import CartItem from '../../../components/CartItem'

const carts = [
  {
    id: '1',
    image: 'https://react.spruko.com/velvet-ts/preview/assets/1-DUdw8XwZ.png',
    title: 'Product 1',
    price: 100,
    originalPrice: 120,
    quantity: 1,
  },
  {
    id: '2',
    image: 'https://react.spruko.com/velvet-ts/preview/assets/1-DUdw8XwZ.png',
    title: 'Product 2',
    price: 200,
    originalPrice: 220,
    quantity: 2,
  },
  {
    id: '2',
    image: 'https://react.spruko.com/velvet-ts/preview/assets/1-DUdw8XwZ.png',
    title: 'Product 2',
    price: 200,
    originalPrice: 220,
    quantity: 2,
  },
  {
    id: '2',
    image: 'https://react.spruko.com/velvet-ts/preview/assets/1-DUdw8XwZ.png',
    title: 'Product 2',
    price: 200,
    originalPrice: 220,
    quantity: 2,
  },
]

const HeaderCart = () => {
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
          type="success"
          title="Cart Items"
          label={`${carts.length} items`}
          body={carts.map((cart, index) => (
            <CartItem key={index} {...cart} onRemove={() => {}} />
          ))}
          footer={
            <Button type="primary" block size="large">
              Checkout
            </Button>
          }
        />
      }
      trigger="click"
      open={open}
      onOpenChange={handleOpen}
      getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
    >
      <Badge count={5} offset={[-10, 10]} size="small">
        <ShoppingCartOutlined className="header__link-icon" />
      </Badge>
    </Popover>
  )
}

export default HeaderCart
