import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  // game proped past via rest param for Blackjack component

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} {...rest} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}
