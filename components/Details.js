import styles from './Details.module.css'

export default function Details({ config }) {
  return (
    <section id="details" className={styles.detailsSection}>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsHeader}>
          <h1>Wedding Details</h1>
        </div>

        <div className={styles.detailsGrid}>
          <div className={styles.detailCard}>
            <div className={styles.detailIcon}>⛪</div>
            <h3>Ceremony</h3>
            <div className={styles.time}>3:00 PM</div>
            <p>{config.ceremony_venue}</p>
            <p dangerouslySetInnerHTML={{ 
              __html: config.ceremony_address.replace(/\n/g, '<br>') 
            }} />
          </div>

          <div className={styles.detailCard}>
            <div className={styles.detailIcon}>🥂</div>
            <h3>Reception</h3>
            <div className={styles.time}>5:00 PM</div>
            <p>{config.reception_venue}</p>
            <p dangerouslySetInnerHTML={{ 
              __html: config.reception_address.replace(/\n/g, '<br>') 
            }} />
          </div>
        </div>

        <div className={styles.scheduleSection}>
          <h2>Schedule of Events</h2>
          <div className={styles.scheduleItem}>
            <span className={styles.time}>3:00 PM</span>
            <span className={styles.event}>Ceremony Begins</span>
          </div>
          <div className={styles.scheduleItem}>
            <span className={styles.time}>4:00 PM</span>
            <span className={styles.event}>Cocktail Hour</span>
          </div>
          <div className={styles.scheduleItem}>
            <span className={styles.time}>5:00 PM</span>
            <span className={styles.event}>Reception & Dinner</span>
          </div>
          <div className={styles.scheduleItem}>
            <span className={styles.time}>7:00 PM</span>
            <span className={styles.event}>First Dance</span>
          </div>
          <div className={styles.scheduleItem}>
            <span className={styles.time}>8:00 PM</span>
            <span className={styles.event}>Dancing & Celebration</span>
          </div>
        </div>
      </div>
    </section>
  )
}