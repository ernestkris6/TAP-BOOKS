import React from 'react'
import HeroSection from '../ui/Homecomponents/HeroSection'
import Writing from '../ui/Homecomponents/Writing'
import BestSelling from '../ui/Homecomponents/BestSelling'
import Signature from '../ui/Homecomponents/Signature'
import Events from '../ui/Homecomponents/Events'

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
