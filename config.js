import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBatwdfjot-_buvYqa-HR6h-Z-UmW-VHgg",
    authDomain: "localproblems-dbd4d.firebaseapp.com",
    projectId: "localproblems-dbd4d",
    storageBucket: "localproblems-dbd4d.appspot.com",
    messagingSenderId: "71284987907",
    appId: "1:71284987907:web:6a885bffd22474ee1f5636"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;