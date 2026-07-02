import React from 'react'
import AboutHero from '../ui/Aboutcomponents/AboutHero'
import AboutMission from '../ui/Aboutcomponents/AboutMission'
import AboutReaders from '../ui/Aboutcomponents/AboutReaders'
import AboutCta from '../ui/Aboutcomponents/AboutCta'
import AboutProcess from '../ui/Aboutcomponents/AboutProcess'

export default function About() {
  return (
    <div>
      <AboutHero />
      <AboutMission />
      <AboutProcess />
      <AboutReaders />
      <AboutCta />
    </div>
  )
}
