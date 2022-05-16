import React, { useContext } from "react"
import { StylesContext } from "../../HomePage";
import styles from './FAQ.module.scss'

export default function FAQ() {

  return (
    <>
      <div className={styles.faqContainer}>
        <div className={styles.faqHeading}>
          <h3>FAQs</h3>
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
        </div>
        <section className={styles.faqSection}>
          <div className={styles.faqNote}>
            <h2> What is Blackjac Crusher? </h2>
            <p> Blackjack Crusher is the best Blackjack Training software & community. Have high level conversations with Blackjack Pros, regarding different ways to beat the game and to hone your skills in our discord channel. </p>
          </div>
          <div className={styles.faqNote}>
            <h2> Can I request for additional features? </h2>
            <p> Aboslutly! Join our discord channel where you can engage in converesations with our developers and request additional features that can be made to the app. </p>
          </div>
          <div className={styles.faqNote}>
            <h2> Is  Blackjack Crusher Mobile Friendly? </h2>
            <p> Blackjack Crusher is a Progress Web App! Meaning not only is it a mobile friendly app but if you add the home to your home screen and launch it from there, you'll be able to use it as a native mobile app. </p>
          </div>
          <div className={styles.faqNote}>
            <h2> Are all the charts & deviations included? </h2>
            <p> All charts & deviations are included! Not only that but you can select different game modes to focus on a particular area and master that area just by constant repitiion. </p>
          </div>
          <div className={styles.faqNote}>
            <h2> I'M A BEGINNER, IS THIS RIGHT FOR ME?</h2>
            <p> Every beginner has to start somewhere. Unfortunately, many start in the wrong place. With so much misinformation out there, most beginners flounder around for years, stuck in the land of confusion and inaction. With our community & instrutions guide inside the app, you'll have the proper guidance to quickly master counting and start generating some cold hard cash. </p>
          </div>
          <div className={styles.faqNote}>
            <h2> I'M AN INTERMEDIATE, IS THIS RIGHT FOR ME? </h2>
            <p> With tons of customaziations, being mobile friendly and different counting systems to chose from, Blackjack Crusher was designed to not only teach beginners how to count cards, but for intermediate and advanced players to take there skills and keep them at a high level. </p>
          </div>
        </section>
      </div>
    </>
  )
}