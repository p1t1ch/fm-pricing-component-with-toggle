import React from 'react'

interface PriceCardProps extends React.HTMLProps<HTMLDivElement> {
  name: string
  price: number
  monthlyPrice: number
  storageSize: number
  usersCount: number
  sendupSize: number
  isMonthlyPricing: boolean
  theme?: 'default' | 'best'
}

function PriceCard({
  name,
  price,
  monthlyPrice,
  storageSize,
  usersCount,
  sendupSize,
  isMonthlyPricing,
  theme = 'default',
  className = '',
  ...props
}: PriceCardProps) {
  return (
    <article
      className={`${
        theme === 'best' ? 'bg-gradient-to-br from-gradient-start to-gradient-end' : 'bg-white'
      } ${className}`}
      {...props}
    >
      <div>{name}</div>
      <div>$ {isMonthlyPricing ? monthlyPrice : price}</div>
      <ul>
        <li>{storageSize >= 1000 ? `${storageSize / 1000} TB` : `${storageSize} GB`} Storage</li>
        <li>{usersCount} Users Allowed</li>
        <li>Send up to {sendupSize} GB</li>
      </ul>
      <a href="/">Learn more</a>
    </article>
  )
}

export default PriceCard
