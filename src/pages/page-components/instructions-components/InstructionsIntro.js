import React from "react"
import styles from './InstructionsComponents.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function InstructionsIntro() {
  return (
    <>
      <section>
        <div>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h1 className={styles.headingSecondary}>Instructions and Guides</h1>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>Here you'll find different ways to custome the app & all of the settings available, pro tips & guides on how to learn faster and also how to join our community, ask for additional features to be added to the software & different ways to contact me.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
