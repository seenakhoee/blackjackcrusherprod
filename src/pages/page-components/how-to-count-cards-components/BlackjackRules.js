import React from "react"
import styles from './WhatIsCardCounting.module.scss'
//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function HowMuchToBet() {
  return (
    <>
      <section className={styles.sectionLast}>

        <div className={styles.customRow}>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h2 className={styles.headingSecondary}>Understand Basic Blackjack Rules</h2>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>The type of blackjack game you play can heavily influence your odds of winning at 21. Some games, like Blackjack Switch, see the dealer push on 22, which decreases a player’s expected return in the game by nearly 7%. Here are just a few ‘good’ blackjack rules players should look out for:</p>

                <ul>
                  <li>1. Double down after splitting pairs</li>
                  <li>2. Re-split aces</li>
                  <li>3. Players can join a game mid-shoe</li>
                </ul>

                <div className={styles.seafoamGreen}>
                  <p className={styles.paragraph}>There you have it. That is everything you need to build your foundation and start your card counting journey. Enjoy this ride. The green felt will take you places you can't even imagine!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
