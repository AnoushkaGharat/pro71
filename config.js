import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyD7ygsUttNtcQ6noWhI4odySK9LTQr2aPo",
    authDomain: "pro-71-93da8.firebaseapp.com",
    projectId: "pro-71-93da8",
    storageBucket: "pro-71-93da8.appspot.com",
    messagingSenderId: "268947139115",
    appId: "1:268947139115:web:4f1f813a8627168390586e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
