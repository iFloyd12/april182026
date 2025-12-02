'use client'

import { useState } from 'react'
import styles from './RSVP.module.css'

export default function RSVP() {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [attendanceText, setAttendanceText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const attendance = e.target.attendance.value
    const text = attendance === 'yes' 
      ? 'We cannot wait to celebrate with you!' 
      : 'We will miss you at our celebration.'
    
    setAttendanceText(text)
    setShowConfirmation(true)
    e.target.reset()
  }

  return (
    <section id="rsvp" className={styles.rsvpSection}>
      <div className={styles.rsvpContainer}>
        <h1>Join Our Celebration</h1>
        <p>We would be honored to have you celebrate with us. Please RSVP by September 1, 2024.</p>

        <form className={styles.rsvpForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="fullname">Full Name *</label>
            <input type="text" id="fullname" name="fullname" required placeholder="Enter your full name" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" required placeholder="your@email.com" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="guests">Number of Guests *</label>
            <select id="guests" name="guests" required>
              <option value="">Select number of guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="attendance">Will You Attend? *</label>
            <select id="attendance" name="attendance" required>
              <option value="">Please select</option>
              <option value="yes">Joyfully Accepts</option>
              <option value="no">Regretfully Declines</option>
            </select>
          </div>

          <button type="submit" className={styles.submitBtn}>Submit RSVP</button>
        </form>
      </div>

      {showConfirmation && (
        <>
          <div className={styles.backdrop} onClick={() => setShowConfirmation(false)}></div>
          <div className={styles.confirmationModal}>
            <h3>Thank You!</h3>
            <p>{attendanceText}</p>
            <button onClick={() => setShowConfirmation(false)}>Close</button>
          </div>
        </>
      )}
    </section>
  )
}