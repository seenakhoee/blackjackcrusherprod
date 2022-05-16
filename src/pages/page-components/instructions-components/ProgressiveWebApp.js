import React from "react"
import styles from './InstructionsComponents.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function ProgressiveWebApp() {
  return (
    <>
      <section>
        <div>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h1 className={styles.headingSecondary}>Native Mobile App Version Setup</h1>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>Table max blackjack is available on all devices!</p>

                <p className={styles.paragraph}> To experience the native app versoin of this software, after launching Table Max Blackjack, simply add the app to your home screen then your all setup. Now when you launch the app from the home screen you'll be using the native app version </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
