import firebase from "firebase/app"
import "firebase/firestore";
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBh_ItQqXQ1Vr73PxkcFTMF2QZD51LhkI0",
  authDomain: "blackjack-crusher.firebaseapp.com",
  projectId: "blackjack-crusher",
  storageBucket: "blackjack-crusher.appspot.com",
  messagingSenderId: "703088305831",
  appId: "1:703088305831:web:034f157f069af749be5d82"
})

export const auth = app.auth()
export default app
