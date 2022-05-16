import React, { useContext } from "react"
import { StylesContext } from "../../HomePage";
import styles from './Tours.module.scss'
import { Link } from "react-router-dom"

export default function Tours() {
  const {typography} = useContext(StylesContext)

  return (
    <>
      <section class="section-tours" id="section-tours">
        <div class="u-center-text u-margin-bottom-big">
          <h2 className={typography.headingSecondary}>Most popular tours</h2>
        </div>

        <div className={styles.customRow}>
          <div class={styles.customCard}>

          </div>
        </div>

        <div class="u-center-text u-margin-top-huge">
          <Link to='/signup' className={`${styles.btn} ${styles.btnOrange}`}>Join Now!</Link>
        </div>
      </section>
    </>
  )
}