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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;