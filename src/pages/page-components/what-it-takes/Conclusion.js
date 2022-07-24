import React from "react"
import styles from './WhatItTakesSection.module.scss'

//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function Conclusion() {
  return (
    <>
      <section className={styles.sectionLast}>

        <div className={styles.customRow}>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h2 className={styles.headingSecondary}>Understand Basic Blackjack Rules</h2>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>Those are the main skills and intangibles needed to crush the game of Blackjack!
                </p>

                <div className={styles.seafoamGreen}>
                  <p className={styles.paragraph}>Good luck at the tables and take that money!
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
