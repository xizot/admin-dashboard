import React from 'react'
import './_cartItem.scss'
import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

type CartItemProps = {
  id: string
  image: string
  title: string
  price: number
  originalPrice: number
  quantity: number
  onRemove: () => void
}

const CartItem = ({ image, title, price, originalPrice, quantity, onRemove }: CartItemProps) => {
  return (
    <div className="cart-item">
      <div className="cart-item__image avatar avatar-xl bd-gray-200">
        <img src={image} alt={title} />
      </div>
      <div className="cart-item__content">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__quantity">Quantity: {quantity}</p>
        <div className="cart-item__price">
          <p className="cart-item__price--current">${price}</p>
          <p className="cart-item__price--original">${originalPrice}</p>
        </div>
      </div>
      <Button type="text" icon={<DeleteOutlined />} className="cart-item__remove" onClick={onRemove}></Button>
    </div>
  )
}

export default CartItem
