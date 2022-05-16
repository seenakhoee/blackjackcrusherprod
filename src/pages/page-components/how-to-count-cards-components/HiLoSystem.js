import React from "react"
import styles from './WhatIsCardCounting.module.scss'
import img1 from './images/howToCount1.svg'
import img2 from './images/howToCount2.svg'
import img3 from './images/howToCount3.svg'
import img4 from './images/howToCount4.svg'

export default function HiLoSystem() {
  return (
    <>
      <section className={styles.section}>

        <div className={styles.customRow}>
          <div class={styles.card}>
            <div className={styles.customCard}>
              <div class="u-center-text">
                <h2 className={styles.headingSecondary}>The Most Popular Card Counting System - Hi-Lo</h2>
              </div>
              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>The Hi-Lo system breaks cards into three camps, each with a specific value:</p>
                <div className={styles.table}>
                  <div className={styles.row}>
                    <p className={styles.pTable}>Value System</p>
                    <p className={styles.pTable}>Card Types</p>
                    <p className={styles.pTable}>Value</p>
                  </div>
                  <div className={styles.row}>
                    <p className={styles.pTable}>High Cards</p>
                    <p className={styles.pTable}>10, J, Q, K, A</p>
                    <p className={styles.pTable}>-1</p>
                  </div>
                  <div className={styles.row}>
                    <p className={styles.pTable}>Neutral Cards</p>
                    <p className={styles.pTable}>7, 8, 9</p>
                    <p className={styles.pTable}>0</p>
                  </div>
                  <div className={styles.row}>
                    <p className={styles.pTable}>Low Cards</p>
                    <p className={styles.pTable}>2, 3, 4, 5, 6</p>
                    <p className={styles.pTable}>1</p>
                  </div>
                </div>
              </div>

              <div className={styles.customCard__details}>
                <p className={styles.paragraph}>High cards are good for players, but they get a -1 value because the fewer high cards are left in the deck, the more a player’s advantage decreases. Low cards are beneficial to the dealer, which is why they get a +1 value. 7s, 8s, and 9s don’t benefit the dealer or the player, so they get a value of 0.</p>

                <p className={styles.paragraph}>The Hi-Lo strategy is called a ‘balanced’ counting system because of the combination of High, Neutral, and Low cards in a deck equal to zero.</p>

                <p className={styles.paragraph}>Using these metrics, the Hi-Lo system requires you to calculate a running total of all cards played in the game, including the dealer and other players’ hands. This is called the ‘running count’. Let’s run through an example of Classic Blackjack to explain:</p>

                <ul>
                  <li>1. Hi-Lo strategy begins once the dealer introduces a new shoe to the table. At this point, the running count is 0, because no cards have been dealt yet.</li>
                  <li>2. Depending on the blackjack game, the cards will be dealt in a particular order around the table. From here, you must look at the cards dealt so far and calculate the ‘running count’.</li>
                </ul>

                <img src={img1} />
                <ul>
                  <li>1. Based on the cards in the picture and Hi-Lo’s metrics, we know Player 1’s hand equals 0, and the same goes for Player 2. Player 3 has a Jack and an Ace, which equals -2. This gives us a running count of -2 so far.</li>
                  <li>2. As players make more moves in the game, you should add these cards to your running count.</li>
                  <li>3. Let’s say Players 1 and 2 decide to hit. Player 1 receives a 6, which brings the running count to -1 but Player 2 is dealt a 4, which also has a value of +1. Player 3 stands. This brings your current running total to 0.</li>
                </ul>
                <img src={img2} />
                <p className={styles.paragraph}>Now we’ll add the dealer’s cards. The dealer has a 5 up-card and turns their hole card, which is a King. Added together, these have a value of 0, meaning our running count remains unchanged.</p>
                <img src={img3} />
                <p className={styles.paragraph}>The dealer decides to hit and deals themself a 4. This is a low card, worth -1. The dealer stands, which gives you a running total of -1 by the end of the round.</p>
                <img src={img4} />
                <p className={styles.paragraph}>As the running count increases in blackjack, so does the player’s advantage. This is when you should increase your bets. As the running count decreases, the casino has the advantage. You should lower your bets to minimize your losses.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
