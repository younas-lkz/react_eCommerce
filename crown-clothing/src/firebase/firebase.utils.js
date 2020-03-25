import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAgOgKHAjDG5R4ALRMCVvdLwBgs-1VTGYw",
  authDomain: "crwn-db-17620.firebaseapp.com",
  databaseURL: "https://crwn-db-17620.firebaseio.com",
  projectId: "crwn-db-17620",
  storageBucket: "crwn-db-17620.appspot.com",
  messagingSenderId: "674317440094",
  appId: "1:674317440094:web:979d0cc8947424f36550cf",
  measurementId: "G-D8HTRHSLGY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;