import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyARpNNPyNbkTO3EUuKK_4E8PuHDuqjIJog",
    authDomain: "doner-stars.firebaseapp.com",
    databaseURL: "https://doner-stars.firebaseio.com",
    projectId: "doner-stars",
    storageBucket: "doner-stars.appspot.com",
    messagingSenderId: "583946770392",
    appId: "1:583946770392:web:3e9cfde151f18b3f3144ad"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(config);

// const databaseRef = firebase.database().ref();
const db = firebaseApp.firestore();

// export const shopsRef = databaseRef.child("shops");
export {db};