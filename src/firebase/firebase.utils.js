import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC0iABKCjwcC9X773qn5ob729xizIErohA",
  authDomain: "ecomm-db-ea412.firebaseapp.com",
  projectId: "ecomm-db-ea412",
  storageBucket: "ecomm-db-ea412.appspot.com",
  messagingSenderId: "861602957413",
  appId: "1:861602957413:web:8058a0730b0e54eab15e8c",
  measurementId: "G-RD8QXPNRHX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setting up google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
