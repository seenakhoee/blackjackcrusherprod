import React from "react"
import styles from './WhatItTakesSection.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function QuickOnFeet() {
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
                <p className={styles.paragraph}>There will always be other players that are annoying, shoot lines like “don’t go to 2 spots, you're messing up the flow of the cards” or pit bosses asking you personal and uncomfortable questions.
                </p>

                <p className={styles.paragraph}>You’ll need the ability to have thick skin, even better stay composed and answer back with witty comebacks.
                </p>

                <p className={styles.paragraph}>It's important to stay level headed so you don’t cost yourself EV while playing.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
