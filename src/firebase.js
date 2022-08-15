import firebase from "firebase/app"
import "firebase/firestore";
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBh_ItQqXQ1Vr73PxkcFTMF2QZD51LhkI0",
  authDomain: "blackjack-crusher.firebaseapp.com",
  projectId: "blackjack-crusher",
  storageBucket: "blackjack-crusher.appspot.com",
  messagingSenderId: "703088305831",
  appId: "1:703088305831:web:034f157f069af749be5d82",
  measurementId: "G-T8Z1RZZL4H"
})

export const auth = app.auth()
// const analytics = firebase.analytics()
export default app
