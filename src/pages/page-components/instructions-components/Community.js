import React from "react"
import styles from './InstructionsComponents.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function Community() {
  return (
    <>
      <section>
        <div>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h1 className={styles.headingSecondary}>Join our discord chat!</h1>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>If you have any questions regarding strategy, questions about game conditions or just want to talk about ap releated stuff and have a good time, join our discord chat.</p>

              <div className={styles.discordWidget}>
                <iframe src="https://discord.com/widget?id=967855670252675112&theme=dark" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
