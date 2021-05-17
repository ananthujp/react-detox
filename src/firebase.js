import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA8D4pPtEKqHq843sik8zSO8trQN7-qyNQ",
    authDomain: "covid19-db-fb09c.firebaseapp.com",
    projectId: "covid19-db-fb09c",
    storageBucket: "covid19-db-fb09c.appspot.com",
    messagingSenderId: "810278700352",
    appId: "1:810278700352:web:60968dc59a2be70669e6a5",
    measurementId: "G-F6HHJ2TH2Y"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth =firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;