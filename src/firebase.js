import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpQJcRTSofaP-phws1ud7uYKLwRYXc2q4",
  authDomain: "clone-app-3d769.firebaseapp.com",
  databaseURL: "https://clone-app-3d769.firebaseio.com",
  projectId: "clone-app-3d769",
  storageBucket: "clone-app-3d769.appspot.com",
  messagingSenderId: "913835589085",
  appId: "1:913835589085:web:9a565b21918d7d6c7fca34",
  measurementId: "G-TMJ7TN6X6R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
