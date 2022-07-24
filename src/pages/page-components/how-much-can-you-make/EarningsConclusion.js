import React from "react"
import styles from './HowMuchCanYouMakeSection.module.scss'

//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function EarningsConclusion() {
  return (
    <>
      <section className={styles.sectionLast}>

        <div className={styles.customRow}>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div className={styles.customCard__details}>

                <div className={styles.seafoamGreen}>
                  <p className={styles.paragraph}>I strongly recommend the web based simulator here, Card Crusher Simulator to figure out your hourly EV Earnings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
