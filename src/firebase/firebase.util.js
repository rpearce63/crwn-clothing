import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBG91_lOV2ekvlRJuYQgQkIXE2Evd_Z2As",
  authDomain: "crwn-db-2322e.firebaseapp.com",
  databaseURL: "https://crwn-db-2322e.firebaseio.com",
  projectId: "crwn-db-2322e",
  storageBucket: "crwn-db-2322e.appspot.com",
  messagingSenderId: "884829288250",
  appId: "1:884829288250:web:44cceed94fc7515403c203",
  measurementId: "G-CHP993W9GQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;