import React from "react"
import styles from './WhatIsCardCounting.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function HowMuchToBet() {
  return (
    <>
      <section className={styles.section}>

        <div className={styles.customRow}>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h2 className={styles.headingSecondary}>How Much Should I Bet When Counting Cards?</h2>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>Betting styles and sizes in card counting depend on a variety of factors: bankroll size, a player’s appetite for risk, blackjack rules, and betting strategies. Older gambling guides recommend specific betting patterns in card counting, but many casinos are aware of these already and use them to fish out card counters.</p>

                <p className={styles.paragraph}>Here’s a simple equation many players use to determine how much they should bet when card counting:</p>

                <div className={styles.seafoamGreen}>
                  <p className={styles.paragraph}><span className={styles.bold}>Betting amount = </span>true count – 1 betting unit</p>
                </div>
              <p className={styles.paragraph}>If you had 1 betting unit worth $10 and a true count of +3, then your betting amount would be $20. This is because 3 – 1 = 2, and 2 betting units equals $20.</p>
              <p className={styles.paragraph}>This system is basic, but it helps you bet proportionately and stay within your betting limits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
