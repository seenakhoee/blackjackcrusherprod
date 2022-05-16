import React, { useContext } from "react"
import { StylesContext } from "../../HomePage";
import iphoneBlackjack from './iphoneHp2.png';
import macbookProBlackjack from './macbookproHp.png'
import iPadhp from './ipadHp.png'
import styles from './About.module.scss'

export default function About() {
  const { btn, typography } = useContext(StylesContext)

  return (
    <>
      <section className={styles.about}>
        <div class="u-center-text u-margin-bottom-big">
          <h2 className={typography.headingSecondary}>Learn Card Counting and Bring Down The House</h2>
        </div>

        <div className={styles.container}>
          <div className={styles.description}>
            <div>
              <h1>Training modes, simulator & an active community & more!</h1>
              <p>Blackjack Crusher is a complete blackjack card counting training app designed to help you develop elite skills & to beat the game for big profits.</p>
            </div>

            <div>
              <h1>Compatibale on All devices!</h1>
              <p>To get the native mobile app experience, save the software entire your homepage. That's it! For the web based version, simply log in to the members area and start sharpening your skills.</p>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div class={styles.composition}>
              <img
                className={`${styles.ipadSize} composition__photo composition__photo--p1`}
                src={iPadhp}
              />

              <img
                className={`${styles.macBookProSize} composition__photo composition__photo--p2`}
                src={macbookProBlackjack}
              />

              <img
                className={`${styles.iphoneSize} composition__photo composition__photo--p3`}
                src={iphoneBlackjack}
              />

              {/* <!--
                            <img src="img/nat-1-large.jpg" alt="Photo 1" class="composition__photo composition__photo--p1">
                            <img src="img/nat-2-large.jpg" alt="Photo 2" class="composition__photo composition__photo--p2">
                            <img src="img/nat-3-large.jpg" alt="Photo 3" class="composition__photo composition__photo--p3">
                             */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}