import React from "react"
import styles from './InstructionsComponents.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function KeepingTheCount() {
  return (
    <>
      <section>
        <div>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h1 className={styles.headingSecondary}>Master Keeping The Count</h1>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>One of the key settings that helps you practice keeping the count is in the game setup, there is an configuration option "Ask For Count Ever". I strongly recommend practicing with the different options provided in that field.</p>

                <p className={styles.paragraph}>Another great way to sharped your skills when it comes to keeping the count is practicing on an 8 deck shoe with quality penetration. These are both adjustable in the game settings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
