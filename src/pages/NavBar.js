import React, { useContext } from "react"
import { Link } from "react-router-dom"
import styles from './page-components/homepage-components/Header.module.scss'
import gorillaLogo from './css/img/gorilla-green-logo.png'
import greenBlueGorillaLogoSmall from './css/img/gorilla-green-blue-small.png'

export default function NavBar({ staticNav }) {

  return (
    <>
      <div className={`${styles.fixed} ${staticNav}`}>
        <div className={styles.headerThin}>
          <Link className={styles.navLinkLeft} to="/">
            <div className={styles.leftSideNav}>
              <img src={greenBlueGorillaLogoSmall} className={styles.header__logo} />
              <div className={styles.textLogo}>
                <h2> BLACKJACK </h2>
                <h2> CRUSHER </h2>
              </div>
            </div>
          </Link>
          <div className={styles.rightSideNav}>
            {/* <Link className={styles.navLinkCountCards} to="/how-to-count-cards">
              <h2 >How To Count Cards</h2>
            </Link> */}
            <Link className={styles.navLinkCardCrusher} to="/simulations">
              <h2 >Card Crusher</h2> <h2>Simulator</h2>
            </Link>
            <a href="https://blackjackcrusher.com/blackjack" className={`${styles.btn} ${styles.btnGreen}`}>
              Launch <br></br>Blackjack Crusher
            </a>
          </div>
        </div>
        <div className={styles.howToCountBar}>
          <Link className={styles.mobileLink} to="/how-to-count-cards">
            <h2>How To Count Cards</h2>
          </Link>
          <Link className={styles.mobileLink} to="/how-much-can-you-make">
            <h2>How Much Can You Make</h2>
          </Link>
          <Link className={styles.mobileLink} to="/what-it-takes">
            <h2>What It Takes</h2>
          </Link>
        </div>
      </div>
    </>
  )
}
