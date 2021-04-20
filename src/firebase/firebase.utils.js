import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyChamSLjZz4QSHNLMt-me-r5YnRpalO6FE",
  authDomain: "crwn-db-20230.firebaseapp.com",
  projectId: "crwn-db-20230",
  storageBucket: "crwn-db-20230.appspot.com",
  messagingSenderId: "458999543053",
  appId: "1:458999543053:web:1280ff5c49fa47e50b6c44",
  measurementId: "G-4CZK044G6K"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase