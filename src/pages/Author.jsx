import React from 'react'
import AuthorHero from '../ui/Authorcomponent/AuthorHero'
import TeamMembers from '../ui/Authorcomponent/TeamMembers'
import OurCulture from '../ui/Authorcomponent/OurCulture'
import JoinUs from '../ui/Authorcomponent/JoinUs'

export default function Author() {
  return (
    <div>
      <AuthorHero />
      <TeamMembers />
      <OurCulture />
      <JoinUs />
    </div>
  )
}
