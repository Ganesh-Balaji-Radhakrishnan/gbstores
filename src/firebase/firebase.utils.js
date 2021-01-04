import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyA4QsXL2RuFxmybH8IFied4vQvrEMRLQIg",
    authDomain: "gbstores-d77ae.firebaseapp.com",
    projectId: "gbstores-d77ae",
    storageBucket: "gbstores-d77ae.appspot.com",
    messagingSenderId: "1017078045953",
    appId: "1:1017078045953:web:0d0a0c7be35e4429b5cf00"
}

firebase.initializeApp(config)

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
  };
  

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle  = () => auth.signInWithPopup(provider)

export default firebase