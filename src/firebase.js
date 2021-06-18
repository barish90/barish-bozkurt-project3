import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

  const firebaseConfig = {
    apiKey: "AIzaSyDPZFP_czbrr_DFvgpgR-zoD5-48-Tlu88",
    authDomain: "tree-planter-ed95e.firebaseapp.com",
    projectId: "tree-planter-ed95e",
    storageBucket: "tree-planter-ed95e.appspot.com",
    messagingSenderId: "588774620433",
    appId: "1:588774620433:web:da76f950f72bb6b58a60b0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase