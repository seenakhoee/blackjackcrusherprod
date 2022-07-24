import React from "react"
import styles from './WhatItTakesSection.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function SpreadCalculator() {
  return (
    <>
      <section className={styles.section}>

        <div className={styles.customRow}>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h2 className={styles.headingSecondary}>Bet Spread Simulator

                </h2>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>To ensure you have a winning bet spread and to know how much the bet spread can theoretically make an hour, bet spread calculators or simulators are essential.
                </p>

                <p className={styles.paragraph}>Check out Card Crusher Simulator for a powerful web based simulator.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
