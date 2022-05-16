import React from "react"
import styles from './InstructionsComponents.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function FeatureRequest() {
  return (
    <>
      <section>
        <div>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h1 className={styles.headingSecondary}>Request Additional Features</h1>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>I'm always open to ideas. If you would like any additional features added to the software, or have any ideas feel free to contact me on discord. We have a feature request channel in our discord server where you can request features and I'll respond</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
