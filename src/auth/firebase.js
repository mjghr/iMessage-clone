import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA6x9RBCfltP3Qh-7dUAKmRoq5iCZcHT0",
  authDomain: "imessage-clone-mjghr.firebaseapp.com",
  databaseURL: "https://imessage-clone-mjghr.firebaseio.com",
  projectId: "imessage-clone-mjghr",
  storageBucket: "imessage-clone-mjghr.appspot.com",
  messagingSenderId: "611105714446",
  appId: "1:611105714446:web:b880f9f264a8faf01fa75f",
  measurementId: "G-FQGNBH4R7W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export { auth, provider, facebookProvider, githubProvider };
export default db;
