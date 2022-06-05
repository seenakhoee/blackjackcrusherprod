import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory, useEffect } from "react-router-dom"
import firebase from "firebase/app"
import "firebase/firestore";
import styles from './Login.module.scss'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(styles.preloader)
      await signup(emailRef.current.value, passwordRef.current.value)
      // history.push("/")

      async function createSub() {

        const db = firebase.firestore();

        const collectionRef = db.collection(
          `customers/${firebase.auth().currentUser.uid}/checkout_sessions`
        )

        // once the document is created a cloud function is triggered.
        // the cloud function creates the stripe checkout url
        // and it will put it in the same document created.
        const docRef = await collectionRef.add({
          price: 'price_1L77AoCXWedlGQZAM0QjL8Ai',
          success_url: `${window.location.origin}/blackjack`,
          cancel_url: window.location.origin,
        });

        // listening to the document for any changes. Will use onSnapshot for that.
        docRef.onSnapshot((snap) => {
          const { error, url } = snap.data();

          if (error) {
            console.error(`An error occured: ${error.message}`);
            setLoading('')
          }

          if (url) {
            window.location.assign(url);
          }
        });
      }

      createSub()

    } catch {
      setError("Failed to create an account")
      setLoading('')
    }
  }

  return (
    <>
      <div className={loading}></div>
      <Container
        className="d-flex align-items-center justify-content-center"
      >
        <section className={styles.sectionBook}>
          <div className={`${styles.removeGutter} row`}>
            <div className={styles.book}>
              <div className={styles.book__form}>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>

                  <div className={`${styles.center__button} u-margin-bottom-medium`}>
                    <h2 class="heading-secondary text-center">Sign up!</h2>
                  </div>

                  <div class="form__group">
                    <input type="email" class="form__input" className={`${styles.form__inputwidth} form__input`} placeholder="Email address" id="email" required ref={emailRef} />
                    <label for="email" class="form__label">Email address</label>
                  </div>

                  <div class="form__group">
                    <input type="password" className={`${styles.form__inputwidth} form__input`} placeholder="Password" id="name" required ref={passwordRef} />
                    <label for="name" class="form__label">Password</label>
                  </div>

                  <div class="form__group">
                    <input type="password" className={`${styles.form__inputwidth} form__input`} placeholder="Password" id="name" required ref={passwordConfirmRef} />
                    <label for="name" class="form__label">Password</label>
                  </div>

                  <div className={styles.center__button}>
                    <button className={`${styles.btn} ${styles.btnGreen}`} type="submit">Sign Up</button>
                  </div>
                  <div className="w-100 text-center" style={{ fontSize: "16px", marginTop: '20px' }}>
                    Already have an account? <Link to="/login">Log In</Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}
