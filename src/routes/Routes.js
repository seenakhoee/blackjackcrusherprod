import React from "react"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Signup from "../pages/Signup"
import HowToCountCards from "../pages/HowToCountCards"
import WhatItTakes from "../pages/WhatItTakes"
import HowMuchCanYouMake from "../pages/HowMuchCanYouMake"


import Login from "../pages/Login"
import Contact from "../pages/Contact"
import TermsOfUse from "../pages/TermsOfUse"
import PrivacyPolicy from "../pages/PrivacyPolicy"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "../pages/ForgotPassword"
import UpdateProfile from "../pages/UpdateProfile"
import Blackjack from '../game-components/Blackjack.js';
import Instructions from '../pages/Instructions'
import Simulations from '../simulator-components/Simulations.js'
import SimResult from '../simulator-components/SimResult.js'
import PageNotFound from '../pages/PageNotFound.js'

import AppPrivateRoute from "./AppPrivateRoute"

// import { game } from '../game-components/GameSetup';

import styles from './Routes.module.scss'

function Routes() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <>
            <div className={styles.pagesContainer}>
              <AppPrivateRoute path="/update-profile" component={UpdateProfile} />
              <AppPrivateRoute path="/instructions" component={Instructions} />
              <AppPrivateRoute path="/simulations" component={Simulations} />
              <AppPrivateRoute path="/simresult/:id" component={SimResult} />
              <Route exact path="/" component={HomePage} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/contact" component={Contact} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="/terms-of-use" component={TermsOfUse} />
              <Route exact path="/how-to-count-cards" component={HowToCountCards} />
              <Route exact path="/what-it-takes" component={WhatItTakes} />
              <Route exact path="/how-much-can-you-make" component={HowMuchCanYouMake} />


              {/* <Route component={PageNotFound}>
                <PageNotFound />
              </Route> */}
            </div>
            <AppPrivateRoute path="/blackjack" component={Blackjack} />
          </>
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default Routes
