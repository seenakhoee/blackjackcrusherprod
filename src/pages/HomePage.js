import React, { useState } from "react"
import Navigation from './page-components/homepage-components/Navigation'
import DeckOfCards from './page-components/homepage-components/DeckOfCards'
import Header from './page-components/homepage-components/Header'
import About from './page-components/homepage-components/About'
import Features from './page-components/homepage-components/Features'
import Pricing from './page-components/homepage-components/Pricing'
import Discord from './page-components/homepage-components/Discord'
import FAQ from './page-components/homepage-components/FAQ'
import Tours from './page-components/homepage-components/Tours'
import Book from './page-components/homepage-components/Book'
import Footer from './page-components/homepage-components/Footer'
import Popup from './page-components/homepage-components/Popup'
import NavBar from './NavBar'
import fadeIn from './FadeIn.module.scss'

import './css/index.scss'

import btn from './css/components/Button.module.scss';
import typography from './css/base/Typography.module.scss';

//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export const StylesContext = React.createContext()

const styles = {
  btn,
  typography
}

export default function HomePage() {
  return (
    <>
      <StylesContext.Provider value={styles}>
        <Navigation />
        <NavBar />
        <div className={fadeIn.fadeIn}>
          <></>
          <DeckOfCards />
          {/* <Header /> */}
          <main>
            <About />
            <Features />
            <Discord />
            <Pricing />
            <FAQ />
            {/* <Tours /> */}
            {/* <Book /> */}
          </main>

          <Footer />
        </div>
        {/* <Popup/> */}
      </StylesContext.Provider>
    </>
  )
}
