import React, { useContext } from "react"
import { Link } from "react-router-dom"
import styles from './Header.module.scss'
import { StylesContext } from "../../HomePage";


export default function Header() {
  const { btn, typography} = useContext(StylesContext)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__textBox}>
          <h1 className={styles.headingPrimary}>
            <span className={styles.headingPrimaryMain}>Blackjack Crusher</span>
            <span className={styles.headingPrimarySub}>The Best Blackjack Training App & Community</span>
          </h1>
          <Link className={`${btn.btn} ${btn.btnWhite}`} to='/signup'>Yes! Give Me Access!</Link>
        </div>
      </header>
    </>
  )
}
