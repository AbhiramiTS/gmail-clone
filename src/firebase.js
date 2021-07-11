import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD2_msmlr0Swqkc-5Gq02Omqp0PKsLZjco",
    authDomain: "clone-8d05f.firebaseapp.com",
    projectId: "clone-8d05f",
    storageBucket: "clone-8d05f.appspot.com",
    messagingSenderId: "590695240610",
    appId: "1:590695240610:web:bb5b9ca0ac7c4dd88618fb",
    measurementId: "G-5JFZFD62JN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };
  