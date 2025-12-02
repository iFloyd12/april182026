import styles from './Story.module.css'

export default function Story({ config }) {
  return (
    <section id="story" className={styles.storySection}>
      <div className={styles.storyContainer}>
        <div className={styles.storyHeader}>
          <h1>Our Love Story</h1>
          <p>{config.story_intro}</p>
        </div>

        <div className={styles.storyTimeline}>
          <div className={styles.storyItem}>
            <div className={styles.storyImageBox}>☕</div>
            <div className={styles.storyText}>
              <div className={styles.storyDate}>Spring 2019</div>
              <h2>How We Met</h2>
              <p>{config.how_we_met_text}</p>
            </div>
          </div>

          <div className={styles.storyItem}>
            <div className={styles.storyImageBox}>❤️</div>
            <div className={styles.storyText}>
              <div className={styles.storyDate}>Summer 2020</div>
              <h2>First Date</h2>
              <p>Our first official date was a picnic in the park. James brought homemade sandwiches, and Emma surprised him with his favorite dessert. We watched the sunset and knew this was the beginning of something special.</p>
            </div>
          </div>

          <div className={styles.storyItem}>
            <div className={styles.storyImageBox}>💍</div>
            <div className={styles.storyText}>
              <div className={styles.storyDate}>Winter 2023</div>
              <h2>The Proposal</h2>
              <p>{config.proposal_text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}