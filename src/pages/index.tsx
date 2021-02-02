import React, { useState } from 'react'
import Seo from '@/components/Seo'
import Toggle from 'react-toggle'
import PriceCard from '@/components/PriceCard'
import PricingPlans from '@/components/PricingPlans'
import 'react-toggle/style.css'
import '@/styles/toggle.css'

function IndexPage() {
  const [isMonthlyPricing, setIsMonthlyPricing] = useState(true)

  return (
    <main>
      <Seo title="Frontend Mentor: Pricing component with toggle" />
      <section>
        <h1>Our pricing</h1>
        <div>
          <label htmlFor="pricing-type">Annualy</label>
          <div id="toggle-label" className="sr-only">
            Choose monthly pricing
          </div>
          <Toggle
            checked={isMonthlyPricing}
            icons={false}
            id="pricing-type"
            aria-labelledby="toggle-label"
            onChange={() => setIsMonthlyPricing(!isMonthlyPricing)}
          />
          <label htmlFor="pricing-type">Monthly</label>
        </div>
      </section>
      <section>
        <h2 className="sr-only">Pricing plans</h2>
        <PricingPlans>
          <PriceCard
            name="Basic"
            price={19.99}
            annualyPrice={199.99}
            storageSize={500}
            usersCount={2}
            sendupSize={3}
            isMonthlyPricing={isMonthlyPricing}
          />
          <PriceCard
            name="Professional"
            price={24.99}
            annualyPrice={249.99}
            storageSize={1000}
            usersCount={5}
            sendupSize={10}
            theme="best"
            isMonthlyPricing={isMonthlyPricing}
          />
          <PriceCard
            name="Basic"
            price={39.99}
            annualyPrice={399.99}
            storageSize={2000}
            usersCount={10}
            sendupSize={20}
            isMonthlyPricing={isMonthlyPricing}
          />
        </PricingPlans>
      </section>
    </main>
  )
}

export default IndexPage
