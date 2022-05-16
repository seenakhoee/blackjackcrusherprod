import React from "react"
import styles from './WhatIsCardCounting.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function TrueCount() {
  return (
    <>
      <section className={styles.section}>

        <div className={styles.customRow}>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h2 className={styles.headingSecondary}>What is ‘True Count’ in Blackjack?</h2>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>Card counting may sound easy so far, but online casinos complicate the system by adding more decks to the game. This makes it harder to identify the concentration of high and low cards left in the shoe. Players will struggle to make accurate bets on their running count because their advantage in six or 8-deck blackjack games is skewed compared to single-deck 21.</p>

                <p className={styles.paragraph}>This calls for another step in the Hi-Lo system: the ‘true count’. This calculation tells the player their advantage at any point in a multi-deck blackjack game. To convert your running count into the true count, simply divide your running count by the number of decks remaining in the game, rounded to the nearest half-deck.</p>

                <div className={styles.seafoamGreen}>
                  <p className={styles.paragraph}><span className={styles.bold}>True count = </span>running count / decks remaining</p>
                </div>
              <p className={styles.paragraph}>Let’s look at another example:</p>
              <p className={styles.paragraph}>You’re in an 8-deck blackjack game, with a running count of +7 so far. You realize there are roughly four decks left in the shoe, which gives you a true count of +1.75, or 2 when rounded up.</p>
              <p className={styles.paragraph}>As the true count increases, so does your advantage. Players should bet proportionally more as their advantage increases and decrease their wagers to as little as possible when the house has the advantage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
