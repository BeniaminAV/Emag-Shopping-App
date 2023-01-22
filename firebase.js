import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmpy1Yn78aG8DFm69f2bCFuLe9hYBaVVM",
  authDomain: "emag-fa89d.firebaseapp.com",
  projectId: "emag-fa89d",
  storageBucket: "emag-fa89d.appspot.com",
  messagingSenderId: "180636185868",
  appId: "1:180636185868:web:206884f29ea9bd6f358529"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const database = app.firestore();

export default database;
