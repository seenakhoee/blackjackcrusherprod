import React from "react"
import styles from './WhatItTakesSection.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function Fundamentals() {
  return (
    <>
      <section className={styles.section}>

        <div className={styles.customRow}>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h2 className={styles.headingSecondary}>Fundamental understanding of the game
                </h2>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>It’s important to understand the concept of variance.
                </p>

                <p className={styles.paragraph}>One of the best ways to understand variance & the swings of the game, it's best to run simulations over and over again to see possible results for a different set number of hands.

                </p>

                <p className={styles.paragraph}>This will give you perspective to see a lot of possible results. I strongly recommend Card Crusher Simulator, a web based simulator you can run anytime to run simulations to help broaden your understanding of variance.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
