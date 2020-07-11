import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC2VBRWmYSmItq-CLRYnvSakufUsOMVdNc",
  authDomain: "instagram-clone-ee5c2.firebaseapp.com",
  databaseURL: "https://instagram-clone-ee5c2.firebaseio.com",
  projectId: "instagram-clone-ee5c2",
  storageBucket: "instagram-clone-ee5c2.appspot.com",
  messagingSenderId: "510957695911",
  appId: "1:510957695911:web:d6d2ae2264471f1a0d3c82",
  measurementId: "G-F7BGQS38K0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// export default firebaseConfig