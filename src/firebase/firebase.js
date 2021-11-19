import * as firebase from "firebase"
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvdGevv8VSF6gUEgyGaMz4mrEPvH0xHAk",
    authDomain: "signal-9abae.firebaseapp.com",
    projectId: "signal-9abae",
    storageBucket: "signal-9abae.appspot.com",
    messagingSenderId: "928488165032",
    appId: "1:928488165032:web:40b974c776d2493a2b7c9d"
  };


let app

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }