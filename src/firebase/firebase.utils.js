import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";




const config={
    apiKey: "AIzaSyDE_75TOqSuvEBh7EJUy8qI6cjGeVNjiEY",
    authDomain: "mykart-db-9fac4.firebaseapp.com",
    projectId: "mykart-db-9fac4",
    storageBucket: "mykart-db-9fac4.appspot.com",
    messagingSenderId: "896109779273",
    appId: "1:896109779273:web:b30e5bf9215c69e39aa298",
    measurementId: "G-E7G6ZP485C"
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore=firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle=()=> auth.signInWithPopup(provider);


  export default firebase;