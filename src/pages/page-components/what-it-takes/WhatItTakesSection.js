import React from "react"
import styles from './WhatItTakesSection.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function WhatItTakesSection() {
  return (
    <>
      <section className={styles.sectionWhatIsCC}>

        <div className={styles.customRow}>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h2 className={styles.headingSecondary}>What It Takes</h2>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>The goal of this section is to help you understand what it takes to be a successful card counter and amass large sums of money from the casinos. </p>

                <p className={styles.paragraph}>Let's make one thing clear. Counting cards is actually really easy!</p>

                <p className={styles.paragraph}>It’s far easier than lets say playing No Limit Holdem, on top of being a relatively easy hustle, you can theoretically amass more money than other forms of advantage play such as poker!</p>

                <p className={styles.paragraph}>On top of that to many, including myself, it's more fun than poker!
                </p>

                <p className={styles.paragraph}>Now that we know that you don’t need to be some crazy math wiz to be able to count cards, let's understand skills and also tangibles that are essential to be successful at this craft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
