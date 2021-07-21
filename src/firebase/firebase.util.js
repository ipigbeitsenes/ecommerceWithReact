import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyBigcylcO0EBA4f--YuGhEubzjlXj-eDDU",
    authDomain: "crwnn-db-e1be2.firebaseapp.com",
    projectId: "crwnn-db-e1be2",
    storageBucket: "crwnn-db-e1be2.appspot.com",
    messagingSenderId: "616990756453",
    appId: "1:616990756453:web:61d0c9575418e377fa008c"
  };


  firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();
 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt: 'select_account'});

 export const signInWithGoogle = () => auth.signInWithPopup(provider);
 export default firebase;