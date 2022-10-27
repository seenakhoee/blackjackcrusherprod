import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import firebase from "firebase/app"
import "firebase/firestore";
import { game, runGame } from '../game-components/GameSetup';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser, userSubscriptionStatus, userStripeLink } = useAuth()

  function isActive() {
    return currentUser && (userSubscriptionStatus !== 'active') ? true : false
  }

  return (

    <Route
      {...rest}
      render={props => {
        if (!currentUser) {
          return <Redirect to="/login" />
        }
        // if logged & paid return app
        if (userSubscriptionStatus === 'trialing' || userSubscriptionStatus === 'active') {

          game.resetState()
          return <Component game={game} {...props} {...rest} />
        }

        //if logged & not paid - redirect to stripe url
        if (userSubscriptionStatus !== 'trialing' || userSubscriptionStatus !== 'active') {
          window.location.assign(userStripeLink);
        }
      }}
    ></Route>

  )
}
