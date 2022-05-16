import React from "react"
import gorillaLogo from '../../css/img/gorilla-green-logo.png'
import greenBlueGorillaLogoSmall from '../../css/img/gorilla-green-blue-small.png'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <footer class="footer">
        <div class="footer__logo-box">
          <img srcSet={greenBlueGorillaLogoSmall} />
        </div>
        <div class="custom-row">
          <div class="col-1-of-2">
            <div class="footer__navigation">
              <ul class="footer__list">
                {/* <li class="footer__item"><Link to='/contact' class="footer__link">About</Link></li> */}
                <li class="footer__item"><Link to='/contact' class="footer__link">Contact Us</Link></li>
                <li class="footer__item"><Link to='/terms-of-use' class="footer__link">Terms of Use</Link></li>
                <li class="footer__item"><Link to='/privacy-policy' class="footer__link">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div class="col-1-of-2">
            <p class="footer__copyright">
              <Link to="/" class="footer__link"> Blackjack Crusher</Link>
              <p>The Best Blackjack Card Counting Training Software </p>
              Copyright &copy; Blackjack Crusher 2022
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}