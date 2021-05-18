import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCp-47JeQ75Y8OJ2yGWwwdKYLhOE4kO70k",
  authDomain: "linkedin-clone-f9c36.firebaseapp.com",
  projectId: "linkedin-clone-f9c36",
  storageBucket: "linkedin-clone-f9c36.appspot.com",
  messagingSenderId: "819206609278",
  appId: "1:819206609278:web:f20d4b2ecfc109e34f7b2f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
