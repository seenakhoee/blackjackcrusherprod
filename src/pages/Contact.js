import React from "react"
import NavBar from './NavBar'
import Navigation from "./page-components/homepage-components/Navigation"
import Footer from './page-components/homepage-components/Footer'
import FadeIn from './FadeIn.module.scss'

import './css/index.scss'

import styles from './Contact.module.scss'

export default function Contact() {
  return (
    <>
      <Navigation />
      <NavBar />

      {/* Main resourse - https://www.onlinegambling.com/blackjack/how-to-count-cards/ */}

      <main className={`${styles.main} ${FadeIn.fadeIn}`}>
        <div className={styles.email}>
          <h2> Where to find me </h2>
          <p> I'm always hanging out on <a href="https://discord.com/invite/XXNUqhHmAp">Discord</a> talking blackjack, sports and other fun activities. You can find me there and join our conversations, ask any questions you have about the app and even provide feature requests which I am more than happy to implement!</p>
          {/* <p> If you prefer to contact me via email, contact me at support@blackjackcrusher.com </p> */}
        </div>
        <div className={styles.discordWidget}>
          <iframe src="https://discord.com/widget?id=967855670252675112&theme=dark"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
          </iframe>
        </div>
      </main>

      <Footer />
    </>
  )
}
