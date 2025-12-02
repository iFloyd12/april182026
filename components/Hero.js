import styles from './Hero.module.css'

export default function Hero({ config }) {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
         <div className={styles.wrapper}>
        <p className={styles.line}>Scroll down <span className={styles.arrow}>↓</span></p>
        <p className={styles.line}>for the wedding</p>
        <p className={styles.line}>details</p>

        <div className={styles.strokes}>
            <span></span>
            <span></span>
        </div>
    </div>
        <div className={styles.heroSubtitle}>Together With Their Families</div>
        <h1 className={styles.heroTitle}>{config.couple_names}</h1>
        <div className={styles.heroDivider}></div>
        <div className={styles.heroDate}>{config.wedding_date}</div>
        <div className={styles.heroLocation}>{config.wedding_location}</div>
      </div>
    </section>
  )
}