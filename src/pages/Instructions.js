import React from "react"
import NavBar from './NavBar'
import Navigation from "./page-components/homepage-components/Navigation"
import Footer from './page-components/homepage-components/Footer'
import Contents from './page-components/instructions-components/Contents'
import FadeIn from './FadeIn.module.scss'
import MemorizeDeviations from './page-components/instructions-components/MemorizeDeviations'
import KeepingTheCount from './page-components/instructions-components/KeepingTheCount'
import CustomGameConditions from './page-components/instructions-components/CustomGameConditions'
import InstructionsIntro from './page-components/instructions-components/InstructionsIntro'
import ProgressiveWebApp from './page-components/instructions-components/ProgressiveWebApp'
import Community from './page-components/instructions-components/Community'
import FeatureRequest from './page-components/instructions-components/FeatureRequest'
import Contact from './page-components/instructions-components/Contact'

import './css/index.scss'

import styles from './Instructions.module.scss'

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
        <div>
          <div className={`${styles.fixed}`}>
            <Contents />
          </div>
          <div className={styles.instructions}>
            <InstructionsIntro />
            <ProgressiveWebApp />
            <KeepingTheCount />
            <MemorizeDeviations />
            <CustomGameConditions />
            <Community />
            <FeatureRequest />
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
