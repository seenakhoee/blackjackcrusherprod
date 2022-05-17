import React, { useRef, useState } from "react"
import { Form, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import NavBar from './NavBar'
import btn from './css/components/Button.module.scss';
import typography from './css/base/Typography.module.scss';
import styles from './UpdateProfile.module.scss'
import fadeIn from './FadeIn.module.scss'
import Navigation from "./page-components/homepage-components/Navigation"

const firebase = require("firebase");
// Required for side-effects
require("firebase/functions");


export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function openCustomerPortal() {
    setLoading(styles.preloader)
    firebase.functions().httpsCallable('ext-firestore-stripe-payments-createPortalLink')({ returnUrl: window.location.origin })
      .then((result) => {
        console.log(result, 'result')
        window.location.assign(result.data.url);
      })
      .catch((err) => {
        setLoading('')
      })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(styles.preloader)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        setLoading('')
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading('')
      })
  }

  return (
    <>
      <Navigation />
      <NavBar />
      <div className={loading}></div>
      <div className={`${styles.container} ${fadeIn.fadeIn}`}>
        <div className={styles.section}>
          <div className={styles.description}>
            <h2 className={typography.headingSecondary}>Profile Settings</h2>
            <p> Update your email address or password </p>
            {error && <Alert className={styles.alertWidth} variant="danger">{error}</Alert>}
          </div>
          <div className={styles.info}>
            <form onSubmit={handleSubmit}>
              <p>Email</p>
              <input
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
                class="form__input"
              />
              <p>Password</p>
              <input
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
                class="form__input"
              />
              <p>Password Confirmation</p>
              <input
                type="password"
                class="form__input"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
              <button disabled={loading} className={`${btn.btn} ${btn.btnGreen}`} type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
        <hr></hr>
        <div className={styles.section}>
          <div className={styles.description}>
            <h2 className={typography.headingSecondary}>Membership Information</h2>
            <p>Update your subscription</p>
          </div>
          <div className={styles.info}>
            <h2>Subscription</h2>
            <p>$19.00 a month</p>

            <h2>Member since</h2>
            <p>Date</p>

            <button className={`${btn.btn} ${btn.btnGreen}`} type="submit" onClick={() => openCustomerPortal()}>
              Update Billing Info
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
