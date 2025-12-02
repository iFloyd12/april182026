'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Story from '../components/Story'
import Details from '../components/Details'
import RSVP from '../components/RSVP'

export default function Home() {
  const [config, setConfig] = useState({
    couple_names: "Ellaine & Floyd",
    wedding_date: "April 24, 2026",
    wedding_location: "Santorini, Greece",
    story_intro: "Every love story is beautiful, but ours is our favorite",
    how_we_met_text: "We met on a rainy Tuesday afternoon at our favorite coffee shop...",
    proposal_text: "On a beautiful sunset evening overlooking the ocean...",
    ceremony_venue: "Sunset Cliffs Resort",
    ceremony_address: "123 Ocean View Drive\nSantorini, Greece",
    reception_venue: "Grand Ballroom",
    reception_address: "456 Celebration Avenue\nSantorini, Greece",
  })

  return (
    <>
      <Navbar coupleNames={config.couple_names} />
      <Hero config={config} />
      <Story config={config} />
      <Details config={config} />
      <RSVP />
    </>
  )
}