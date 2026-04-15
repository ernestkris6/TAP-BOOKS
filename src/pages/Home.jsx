import React from 'react'
import HeroSection from '../ui/HeroSection'
import Writing from '../ui/Writing'
import BestSelling from '../ui/BestSelling'
import Signature from '../ui/Signature'
import Events from '../ui/Events'

export default function Home() {
  return (
    <div>
        <HeroSection />
        <Writing />
        <BestSelling />
        <Signature />
        <Events />
    </div>
  )
}
