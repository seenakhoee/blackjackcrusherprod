import React from "react"
import NavBar from './NavBar'
import Navigation from "./page-components/homepage-components/Navigation"
import Footer from './page-components/homepage-components/Footer'
import WhatItTakes from './page-components/what-it-takes/WhatItTakesSection'
import Fundamentals from './page-components/what-it-takes/Fundamentals'
import MemorizingCharts from "./page-components/what-it-takes/MemorizingCharts"
import SpreadCalculator from "./page-components/what-it-takes/SpreadCalculator"
import Bankroll from "./page-components/what-it-takes/Bankroll"
import Variance from "./page-components/what-it-takes/Variance"
import QuickOnFeet from "./page-components/what-it-takes/QuickOnFeet"
import Conclusion from "./page-components/what-it-takes/Conclusion"

import FadeIn from './FadeIn.module.scss'

import './css/index.scss'

import styles from './HowToCountCards.module.scss'

import btn from './css/components/Button.module.scss';
import typography from './css/base/Typography.module.scss';

//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function HowToCountCards() {
  return (
    <>
      <Navigation />
      <NavBar />

      {/* Main resourse - https://www.onlinegambling.com/blackjack/how-to-count-cards/ */}

      <main className={`${styles.main} ${FadeIn.fadeIn}`}>
        <WhatItTakes />
        <Fundamentals />
        <MemorizingCharts />
        <SpreadCalculator />
        <Bankroll />
        <Variance />
        <QuickOnFeet />
        <Conclusion />


      </main>

      <Footer />
    </>
  )
}
