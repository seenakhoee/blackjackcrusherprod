import React from "react"
import styles from './WhatItTakesSection.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function MemorizingCharts() {
  return (
    <>
      <section className={styles.section}>

        <div className={styles.customRow}>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h2 className={styles.headingSecondary}>Memorizing The Charts
                </h2>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>A perfect game is a must.
                </p>

                <p className={styles.paragraph}>You need to have a perfect game meaning memorize the entire basic strategy chart. To add some extra EV to your hourly earnings, then memorizing the deviations charts will come in handy.</p>

                <p className={styles.paragraph}>The charts for all games are available at BlackjackCrusher, along with flashcard charts to help you really engrain them to memory.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
