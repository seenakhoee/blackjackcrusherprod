import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import firebase from "firebase/app"
import "firebase/firestore";

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [userSubscriptionStatus, setUserSubscriptionStatus] = useState()
  const [userStripeLink, setUserStripeLink] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  async function getUserSubscriptionStatus() {
  //checking if user has paid - retring subscription status
    const db = firebase.firestore();

    const collectionRef = db.collection(
      `customers/${firebase.auth().currentUser.uid}/subscriptions`
    )

    let status = await collectionRef.where("status", "in", ["trialing", "active", "past_due", "unpaid"]).get()

    if(status.docs[0]) {
      setUserSubscriptionStatus(status.docs[0].data().status)
    }
  }

  async function getStripeCheckoutURL() {
    const db = firebase.firestore();

    const collectionRef = db.collection(
      `customers/${firebase.auth().currentUser.uid}/checkout_sessions`
    )

    let status = await collectionRef.get()

    setUserStripeLink(status.docs[0].data().url)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {

      setCurrentUser(user)

      if(user){
        await getUserSubscriptionStatus()
        await getStripeCheckoutURL()
      }

      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    userSubscriptionStatus,
    userStripeLink,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
