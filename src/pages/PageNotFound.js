import React, { useState } from "react"
import NavBar from './NavBar'
import styles from './PageNotFound.module.scss'

export default function PageNotFound() {
  return (
    <>
      <div className={styles.pageNotFoundContainer}>
        Page Not Found
      </div>
    </>
  )
}
