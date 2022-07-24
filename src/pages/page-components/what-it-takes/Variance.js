import React from "react"
import styles from './WhatItTakesSection.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function Variance() {
  return (
    <>
      <section className={styles.section}>

        <div className={styles.customRow}>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h2 className={styles.headingSecondary}>The Ability To Handle The Variance
                </h2>

              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>Let's make one thing clear, this game has insane variance.
                </p>

                <p className={styles.paragraph}>The swings will blow your mind.
                </p>

                <p className={styles.paragraph}>You’ll need to be able to play countless hours of consistent losing sessions and still remain confident. This might be the hardest part of the entire process. Because everyone goes through losing periods, however if you can weather the storm during those periods, you’ll soon climb out and start making some serious profits.
                </p>

                <p className={styles.paragraph}>It’s all about being able to just handle the variance that comes with this game.

                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
