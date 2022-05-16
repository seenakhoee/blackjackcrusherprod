import React from "react"
import styles from './WhatIsCardCounting.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function LearnBasicStrategy() {
  return (
    <>
      <section className={styles.section}>

        <div className={styles.customRow}>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h2 className={styles.headingSecondary}>Learn Basic Blackjack Strategy</h2>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}><span className={styles.bold}>Don’t even consider card counting at the casino if you haven’t already memorized basic strategy.</span> It’s impossible to win at blackjack by card counting alone, and basic strategy gives the statistically best move for players for any hand scenario in 21.</p>

                <p className={styles.paragraph}>With basic strategy, players decrease the casino’s 2% edge to 0.5%. Card counting only gives players a 1% profit margin, meaning any benefit is immediately lost if gamblers forego basic blackjack strategy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
