import React from "react"
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
      <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation__item">
              <Link to='/blackjack' class="navigation__link">
                Blackjack Crusher
              </Link>
            </li>
            <li class="navigation__item">
              <Link to='/simulations' class="navigation__link">
                Card Crusher Simulator
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
