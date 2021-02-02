import React from 'react'

interface PricingPlans extends React.HTMLProps<HTMLUListElement> {
  children: React.ReactNode
}

function PricingPlans({ children, className = '', ...props }: PricingPlans) {
  return (
    <ul className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0 items-center ${className}`} {...props}>
      {React.Children.map(children, (child, index) => (
        <li
          className={`${
            index === 0
              ? 'md:order-1 lg:order-none'
              : index === 1
              ? 'md:col-span-full lg:col-span-1'
              : 'md:order-2 lg:order-none'
          }`}
        >
          {child}
        </li>
      ))}
    </ul>
  )
}

export default PricingPlans
