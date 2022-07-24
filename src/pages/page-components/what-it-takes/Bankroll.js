import React from "react"
import styles from './WhatItTakesSection.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function Bankroll() {
  return (
    <>
      <section className={styles.section}>

        <div className={styles.customRow}>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h2 className={styles.headingSecondary}>Bankroll
                </h2>

              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>A bankroll is essential.
                </p>

                <p className={styles.paragraph}>Without a bankroll you can’t play the game. With this being said its best to keep your risk low to always keep a bankroll available at all times.
                </p>

                <p className={styles.paragraph}>Simulators such as Card Crusher simulator can help evaluate your risk on different types of bet spreads and bankrolls.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
