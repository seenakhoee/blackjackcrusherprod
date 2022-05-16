import React from "react"
import styles from './WhatIsCardCounting.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function BasicBlackjackCCStrategy() {
  return (
    <>
      <section className={styles.section}>

        <div className={styles.customRow}>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h2 className={styles.headingSecondary}>How Does Card Counting Work?</h2>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>Card counting helps players realize their edge. Then increase their bets at the right time to maximize their earnings.</p>

                <ul>
                  <li>Step 1. A player assigns a negative, positive, or zero value to the cards.</li>
                  <li>Step 2. They maintain a ‘running count’ based on the cards dealt in the game.</li>
                  <li>Step 3. Convert the 'running count' into the 'true count'. Once the  feel confident of the ‘true count’, a player can alter their bets depending on their advantage.</li>
                  <li>Step 4. Change your bets based on the true count.</li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
