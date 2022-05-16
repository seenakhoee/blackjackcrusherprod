import React, { useContext } from "react"
import { StylesContext } from "../../HomePage";

export default function Book() {

  const { btn, typography} = useContext(StylesContext)
  return (
    <>
      <section class="section-book">
        <div class="custom-row">
          <div class="book">
            <div class="book__form">
              <form action="#" class="form">
                <div class="u-margin-bottom-medium">
                  <h2 class="heading-secondary">Become A Member & Get Access Today!</h2>
                </div>

                <div class="form__group">
                  <input type="email" class="form__input" placeholder="Email address" id="email" required />
                  <label for="email" class="form__label">Email address</label>
                </div>

                <div class="form__group">
                  <input type="text" class="form__input" placeholder="Password" id="name" required />
                  <label for="name" class="form__label">Password</label>
                </div>

                <div class="form__group">
                  <button className={`${btn.btn} ${btn.btnGreen}`}>Create Account &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}