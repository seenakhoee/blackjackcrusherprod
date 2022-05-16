import React, { useContext } from "react"
import { StylesContext } from "../../HomePage";
import styles from './Discord.module.scss'

export default function Discord() {

  return (
    <>
      <section className={styles.supportSection}>
        <div className={styles.techSupport}>
          <div>
            <h1> Join A Fun & Supportive Community! </h1>
            <p> Any questions you may have regarding the app, the math and any shop related questions can be discussed in our large & active community on discord.</p>
          </div>
          <div>
            <h1> Feature Request </h1>
            <p> Our goal is to provide the best training Blackjack Training app available. With that in mind, join our discord community to request features you would like on the app!</p>
          </div>
        </div>
        <div className={styles.discordWidget}>
          <iframe src="https://discord.com/widget?id=967855670252675112&theme=dark" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
      </section>
    </>
  )
}