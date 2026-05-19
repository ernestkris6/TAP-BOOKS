import React from 'react'
import ContactHero from '../ui/Contactcomponent/ContactHero'
import ContactConvo from '../ui/Contactcomponent/ContactConvo'
import ContactCta from '../ui/Contactcomponent/ContactCta'
import ContactForm from '../ui/Contactcomponent/ContactForm'

export default function Contact() {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <ContactConvo />
      <ContactCta />
    </div>
  )
}
