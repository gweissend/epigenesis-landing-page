import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCMVfGYBUVV6wYXo9htGtozFCLezDto7Zo",
    authDomain: "genesis-c9277.firebaseapp.com",
    projectId: "genesis-c9277",
    storageBucket: "genesis-c9277.appspot.com",
    messagingSenderId: "695681879803",
    appId: "1:695681879803:web:c0152b4b3cc7913fa3aa5e",
    measurementId: "G-Z4VSV93RSK"
  };
  
  //init firebase

  initializeApp(firebaseConfig)

  // init firestore
  const db = getFirestore()

  export { db }