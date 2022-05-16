import React from "react"
import styles from './InstructionsComponents.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function CustomGameConditions() {
  return (
    <>
      <section>
        <div>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h1 className={styles.headingSecondary}>Customize The Game Conditions</h1>
              </div>
              <div className={styles.customCard__details}>
              <ul>
                <li>Ask For Count</li>
                <li>Counting System</li>
                <li>Hit 17 or S17</li>
                <li>Number Of Decks</li>
                <li>Double After Split or No Double After Split</li>
                <li>Surrender or No Surrender</li>
                <li>Deviations</li>
                <li>Deck Penetration</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
