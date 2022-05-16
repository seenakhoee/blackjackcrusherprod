import React, { useContext } from "react"
import { StylesContext } from "../../HomePage";
import CheckMark from './check-mark-green.png'
import styles from './Features.module.scss'

export default function Features() {
  const { btn, typography } = useContext(StylesContext)

  return (
    <>
      <section className={`section-features ${styles.features}`}>
        <div className={styles.headerFeature}>
          <h1> Master the game of Blackjack </h1>
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.checkMarkContainer}>
            <img src={CheckMark} />
            <p><span>Mobile & Web based Training drill</span> with various different <span>game modes</span></p>
          </div>
          <div className={styles.checkMarkContainer}>
            <img src={CheckMark} />
            <p><span>Card Crusher</span> Simulate different game conditions and figure out the optimal <span>bet spread given your bankroll</span></p>
          </div>
          <div className={styles.checkMarkContainer}>
            <img src={CheckMark} />
            <p><span>Active community</span> to talk blackjack, answer questions and also to discuss different features to add to the app!</p>
          </div>
          <div className={styles.checkMarkContainer}>
            <img src={CheckMark} />
            <p><span>Strategy charts</span> with over <span>100 deviations</span> that are <span>mobile friendly</span> to use at the casino's or whenever needed!</p>
          </div>
          <div className={styles.checkMarkContainer}>
            <img src={CheckMark} />
            <p><span>Flashcard charts</span> another type of effective traning to help memorize deviations</p>
          </div>
          <div className={styles.checkMarkContainer}>
            <img src={CheckMark} />
            <p><span>Web app + progressive web app</span> to experience high quality smooth <span>native app experience</span></p>
          </div>
          <div className={styles.checkMarkContainer}>
            <img src={CheckMark} />
            <p><span>Customizable game play settings</span> for both simulations & training mode to match the casino game conditions you are playing at</p>
          </div>
          <div className={styles.checkMarkContainer}>
            <img src={CheckMark} />
            <p class="feature-box__text">Strategy charts with <span>all playing deviations</span></p>
          </div>
        </div>
      </section>
    </>
  )
}