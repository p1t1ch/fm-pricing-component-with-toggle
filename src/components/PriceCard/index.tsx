import React from 'react'

interface PriceCardProps extends React.HTMLProps<HTMLDivElement> {
  name: string
  price: number
  annualyPrice: number
  storageSize: number
  usersCount: number
  sendupSize: number
  isMonthlyPricing: boolean
  theme?: 'default' | 'best'
  position?: 'left' | 'right' | 'center'
}

function PriceCard({
  name,
  price,
  annualyPrice,
  storageSize,
  usersCount,
  sendupSize,
  isMonthlyPricing,
  theme = 'default',
  position = 'center',
  className = '',
  ...props
}: PriceCardProps) {
  return (
    <article
      className={`text-center shadow p-8 rounded-plan ${
        theme === 'best' ? 'gradient lg:py-14 text-white' : 'bg-white'
      } ${position === 'left' ? 'lg:rounded-r-none' : position === 'right' ? 'lg:rounded-l-none' : ''} ${className}`}
      {...props}
    >
      <div className="text-lg mb-6">{name}</div>
      <div
        className={`flex items-center justify-center text-7xl mb-8 ${
          theme === 'best' ? 'text-white' : 'text-neutral-blue-grayish-dark'
        }`}
      >
        <span className="text-dollar mr-2">$</span>
        <span>{isMonthlyPricing ? price : annualyPrice}</span>
      </div>
      <ul
        className={`mb-8 border-t ${
          theme === 'best' ? 'border-white' : 'border-neutral-blue-grayish'
        } border-opacity-25`}
      >
        <li
          className={`py-3 border-b ${
            theme === 'best' ? 'border-white' : 'border-neutral-blue-grayish'
          } border-opacity-25`}
        >
          {storageSize >= 1000 ? `${storageSize / 1000} TB` : `${storageSize} GB`} Storage
        </li>
        <li
          className={`py-3 border-b ${
            theme === 'best' ? 'border-white' : 'border-neutral-blue-grayish'
          } border-opacity-25`}
        >
          {usersCount} Users Allowed
        </li>
        <li
          className={`py-3 border-b ${
            theme === 'best' ? 'border-white' : 'border-neutral-blue-grayish'
          } border-opacity-25`}
        >
          Send up to {sendupSize} GB
        </li>
      </ul>
      <a
        href="/"
        className={`flex items-center justify-center h-11 px-6 text-button tracking-widest uppercase rounded-md border border-transparent hover:bg-transparent focus-visible:bg-transparent ${
          theme === 'best'
            ? 'text-neutral-blue bg-white hover:text-white focus-visible:text-white hover:border-white focus-visible:border-white'
            : 'text-white gradient hover:text-neutral-blue focus-visible:text-neutral-blue hover:border-neutral-blue focus-visible:border-neutral-blue hover:bg-none focus-visible:bg-none'
        }`}
      >
        Learn more
      </a>
    </article>
  )
}

export default PriceCard
