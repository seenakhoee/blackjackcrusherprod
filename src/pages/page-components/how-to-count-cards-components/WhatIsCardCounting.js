import React from "react"
import styles from './WhatIsCardCounting.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function WhatIsCardCounting() {
  return (
    <>
      <section className={styles.sectionWhatIsCC}>

        <div className={styles.customRow}>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h2 className={styles.headingSecondary}>What Is Card Counting</h2>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>Card counting is one of the best strategies for winning at blackjack. Our guide breaks down how to count cards into simple steps that anyone can follow. </p>

                <p className={styles.paragraph}>Card reading helps players determine who will have the probable advantage in the next hand in blackjack by keeping a tally of low and high-value cards in the game.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
