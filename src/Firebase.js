import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV6bMcPMhOjQBRV-JjSvwa2gSSVBUO6xc",
  authDomain: "admin-panel-58fcd.firebaseapp.com",
  databaseURL: "https://admin-panel-58fcd-default-rtdb.firebaseio.com",
  projectId: "admin-panel-58fcd",
  storageBucket: "admin-panel-58fcd.appspot.com",
  messagingSenderId: "612717970418",
  appId: "1:612717970418:web:93c14bf92baaecfd07616b"
};

const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();