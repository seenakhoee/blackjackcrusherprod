import React from "react"
import NavBar from './NavBar'
import Navigation from "./page-components/homepage-components/Navigation"
import Footer from './page-components/homepage-components/Footer'
import WhatIsCardCounting from './page-components/how-to-count-cards-components/WhatIsCardCounting'
import HowDoesCardCountingWork from './page-components/how-to-count-cards-components/HowDoesCardCountingWork'
import BasicBlackjackCCStrategy from './page-components/how-to-count-cards-components/BasicBlackjackCCStrategy'
import HiLoSystem from './page-components/how-to-count-cards-components/HiLoSystem'
import TrueCount from './page-components/how-to-count-cards-components/TrueCount'
import HowMuchToBet from './page-components/how-to-count-cards-components/HowMuchToBet'
import TipsForMastingCardCounting from './page-components/how-to-count-cards-components/TipsForMasteringCardCounting'
import LearnBasicStrategy from './page-components/how-to-count-cards-components/LearnBasicStrategy'
import BlackjackRules from './page-components/how-to-count-cards-components/BlackjackRules'
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
        <WhatIsCardCounting />
        <HowDoesCardCountingWork />
        {/* <BasicBlackjackCCStrategy /> */}
        <HiLoSystem />
        <TrueCount />
        <HowMuchToBet />
        {/* {/* <TipsForMastingCardCounting /> */}
        <LearnBasicStrategy />
        <BlackjackRules />
      </main>

      <Footer />
    </>
  )
}
