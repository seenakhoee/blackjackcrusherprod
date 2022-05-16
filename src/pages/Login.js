import React, { useRef, useState } from "react"
import { Form, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import styles from './Login.module.scss'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)

      // history.push("/blackjack")

      window.location.assign('https://blackjackcrusher.com/blackjack');

    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
      >
        <section className={styles.sectionBook}>
          <div className={`${styles.removeGutter} row`}>
            <div className={styles.book}>
              <div className={styles.book__form}>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <div class="u-margin-bottom-medium">
                    <h2 class="heading-secondary">Sign into your account</h2>
                  </div>

                  <div class="form__group">
                    <input type="email" class="form__input" className={`${styles.form__inputwidth} form__input`} placeholder="Email address" id="email" required ref={emailRef} />
                    <label for="email" class="form__label">Email address</label>
                  </div>

                  <div class="form__group">
                    <input type="password" className={`${styles.form__inputwidth} form__input`} placeholder="Password" id="name" required ref={passwordRef} />
                    <label for="name" class="form__label">Password</label>
                  </div>

                  <div className={styles.center__button}>
                    <button className={`${styles.btn} ${styles.btnGreen}`} type="submit">Sign In</button>
                  </div>
                  <div className="text-center" style={{ fontSize: "16px", marginTop: '20px' }}>
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </div>
                  <div className="w-100 text-center mt-2" style={{ fontSize: "16px" }}>
                    Need an account? <Link to="/signup">Sign Up</Link>
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
