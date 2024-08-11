import React from 'react'
import './_relatedAppItem.scss'

type RelatedAppItemProps = {
  icon: React.ReactNode
  title: string
  link: string
  className?: string
}

const RelatedAppItem = ({ icon, title, className = '' }: RelatedAppItemProps) => {
  return (
    <div className="related-app-item card border">
      <div className={`related-app-item__icon avatar ${className}`}>{icon}</div>
      <p className="related-app-item__title text-default ">{title}</p>
    </div>
  )
}

export default RelatedAppItem
