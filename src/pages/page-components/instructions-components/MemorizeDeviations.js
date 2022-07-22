import React from "react"
import styles from './InstructionsComponents.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function MemorizeDeviations() {
  return (
    <>
      <section>
        <div>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h1 className={styles.headingSecondary}>Best Way To Memorize Basic Deviations</h1>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>Flashcard Charts</p>
                <p className={styles.paragraph}>There is a Fashcard Chart. When you intially open the chart, all the boxes are blank with no values. A good practice to memorize devations is to think of the deviation, then click on the box to see if you are correct. Doing this over and over again will help tremendously!</p>

                <p className={styles.paragraph}>Game Mode</p>
                <p className={styles.paragraph}>With game modes, you are able to pick an area to focus on. For example just soft hands, or just pairs. Then you will be dealt only those type of hands. Once dealt a random running count will be provided. Your job is to convert the running count to a true count, then figure our the correct play for that situation. The ultimate way to memorize deviations is with this practice!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
