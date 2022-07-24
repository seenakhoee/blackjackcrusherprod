import React from "react"
import styles from './HowMuchCanYouMakeSection.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function HowMuchCanYouMakeSection() {
  return (
    <>
      <section className={styles.sectionWhatIsCC}>

        <div className={styles.customRow}>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h2 className={styles.headingSecondary}>How Much Can You Make</h2>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>The goal of this section is to give you a realistic expectation on how much you can really make counting cards given.
                </p>

                <p className={styles.paragraph}>There are many factors that goes into figuring out how much you can make hourly.
                </p>

                <p className={styles.paragraph}>1. Number of Decks</p>
                <p className={styles.paragraph}>2. Penetration depth (Dealer Cut)</p>
                <p className={styles.paragraph}>3. Rounder Per Hour</p>

                <p className={styles.paragraph}>The tables rules are important but not as nearly as important as the 3 mentioned above however they are an important piece in determining how much is the possibly theoretically hourly EV earnings. Rules such as the following.
                </p>

                <p className={styles.paragraph}>1. DAS</p>
                <p className={styles.paragraph}>2. Double Any 2 Cards</p>
                <p className={styles.paragraph}>3. Late Surrender</p>
                <p className={styles.paragraph}>4. Re-split Aces</p>


                <p className={styles.paragraph}>In order to figure out the actual hourly ev for certain conditions, it's essentail to input different variables in simulators to figure out the possible earnings.
                </p>

                <p className={styles.paragraph}>I strongly recommend the web based simulator here, Card Crusher Simulator to figure out your hourly EV Earnings
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
