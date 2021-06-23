
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBwRXKdaySEsAEB4Cv9UDwUnLbqE28Imsg",
  authDomain: "my-first-c8ebf.firebaseapp.com",
  projectId: "my-first-c8ebf",
  storageBucket: "my-first-c8ebf.appspot.com",
  messagingSenderId: "769932820497",
  appId: "1:769932820497:web:da026513c80eb5653df1b0"
};

//init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
let timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, timestamp, projectAuth}
