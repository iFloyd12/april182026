'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar({ coupleNames }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'story', 'details', 'rsvp']
      const scrollPos = window.scrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const initials = coupleNames.split(' & ').map(n => n[0]).join(' & ')

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>{initials}</div>
        <button 
          className={styles.mobileToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`${styles.navMenu} ${menuOpen ? styles.active : ''}`}>
          <li><a href="#home" className={activeSection === 'home' ? styles.active : ''}>Home</a></li>
          <li><a href="#story" className={activeSection === 'story' ? styles.active : ''}>Our Story</a></li>
          <li><a href="#details" className={activeSection === 'details' ? styles.active : ''}>Details</a></li>
          <li><a href="#rsvp" className={activeSection === 'rsvp' ? styles.active : ''}>RSVP</a></li>
        </ul>
      </div>
    </nav>
  )
}