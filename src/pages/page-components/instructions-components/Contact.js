import React from "react"
import styles from './InstructionsComponents.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function Contact() {
  return (
    <>
      <section>
        <div>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h1 className={styles.headingSecondary}>Contact Me</h1>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>You can either find me on discord where you can send me direct message or feel free to email me at ********@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
