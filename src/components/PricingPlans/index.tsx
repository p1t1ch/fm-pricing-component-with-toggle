import React from 'react'

interface PricingPlans extends React.HTMLProps<HTMLUListElement> {
  children: React.ReactNode
}

function PricingPlans({ children, className = '', ...props }: PricingPlans) {
  return (
    <ul className={`grid grid-cols-3 items-center ${className}`} {...props}>
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ul>
  )
}

export default PricingPlans
