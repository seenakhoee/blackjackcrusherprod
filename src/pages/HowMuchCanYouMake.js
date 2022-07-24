import React from "react"
import NavBar from './NavBar'
import Navigation from "./page-components/homepage-components/Navigation"
import Footer from './page-components/homepage-components/Footer'
import HowMuchCanYouMakeSection from './page-components/how-much-can-you-make/HowMuchCanYouMakeSection'
import EarningsConclusion from "./page-components/how-much-can-you-make/EarningsConclusion"

import FadeIn from './FadeIn.module.scss'

import './css/index.scss'

import styles from './HowMuchCanYouMake.module.scss'

import btn from './css/components/Button.module.scss';
import typography from './css/base/Typography.module.scss';

//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function HowMuchCanYouMake() {
  return (
    <>
      <Navigation />
      <NavBar />

      {/* Main resourse - https://www.onlinegambling.com/blackjack/how-to-count-cards/ */}

      <main className={`${styles.main} ${FadeIn.fadeIn}`}>
        <HowMuchCanYouMakeSection />
        <EarningsConclusion />


      </main>

      <Footer />
    </>
  )
}
