import React, { useContext } from "react"
import { StylesContext } from "../../HomePage";
import styles from './Pricing.module.scss'
import { Link } from "react-router-dom"
import coinImg from './enterprise-coin.png'
export default function Pricing() {
  const { typography } = useContext(StylesContext)

  return (
    <>
      <div className={styles.pricingContainer}>
        <section className={`${styles.pricingSection} ${styles.card} ${styles.container}`}>
          <div className={styles.limitedTimeOffer}>
            <p>Limited Time Offer</p>
            <p>7 Day Free Trial!<span></span></p>
            {/* <p>Offer Ends May 31st!</p> */}
          </div>
          <div className={`${styles.card__container}`}>
            <article className={`${styles.card__content} ${styles.grid}`}>
              <div className={styles.card__pricing}>
                <div className={styles.card__pricingNumber}>
                  <span className={styles.card__pricingSymbol}>$</span>
                  19
                </div>
                <span className={styles.card__pricingMonth}>/month</span>
              </div>

              <header className={styles.header}>
                <div className={`${styles.card__headerCircle} ${styles.grid}`}>
                  <img src={coinImg} alt="" className={styles.card__headerImg} />
                </div>

                <span className={styles.card__headerSubtitle}>
                  Professional Blackjack
                  <br />
                  Training Software
                </span>
                <h1 className={styles.card__headerTitle}>Blackjack Crusher</h1>
              </header>

              <ul className={`${styles.card__list} ${styles.grid}`}>
                <li className={styles.card__listItem}>
                  <i className={`uil uil-check ${styles.card__listIcon}`}></i>
                  <p className={styles.card__listDescription}>Variaty of different training drills & charts with over 100 deviations available!</p>
                </li>
                <li className={styles.card__listItem}>
                  <i className={`uil uil-check ${styles.card__listIcon}`}></i>
                  <p className={styles.card__listDescription}>Game Mode Training to solidify the correct decision for certain type of playing hands</p>
                </li>
                <li className={styles.card__listItem}>
                  <i className={`uil uil-check ${styles.card__listIcon}`}></i>
                  <p className={styles.card__listDescription}>Customize the game condition such as table rules, deck penetration, how often to ask for count & more!</p>
                </li>
                <li className={styles.card__listItem}>
                  <i className={`uil uil-check ${styles.card__listIcon}`}></i>
                  <p className={styles.card__listDescription}>Simulate up to a million hands per session with the desired table rules </p>
                </li>
                <li className={styles.card__listItem}>
                  <i className={`uil uil-check ${styles.card__listIcon}`}></i>
                  <p className={styles.card__listDescription}>Flashcard chart drills to help memorize over 100 deviations! </p>
                </li>
                <li className={styles.card__listItem}>
                  <i className={`uil uil-check ${styles.card__listIcon}`}></i>
                  <p className={styles.card__listDescription}>Practice on the web & at the leisure of your mobile phone anytime! Any place!</p>
                </li>
                <li className={styles.card__listItem}>
                  <i className={`uil uil-check ${styles.card__listIcon}`}></i>
                  <p className={styles.card__listDescription}>Active, fun & supportive community on discord talking blackjack, sports and offering feature requests!</p>
                </li>
              </ul>

              <button className={styles.card__button}>Become A Member!</button>
            </article>
          </div>
        </section>
      </div>
    </>
  )
}