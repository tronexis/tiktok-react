import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj0ljB14srdGobsOPblWjQ3joIsLH0GrU",
  authDomain: "tiktok-react-f266d.firebaseapp.com",
  projectId: "tiktok-react-f266d",
  storageBucket: "tiktok-react-f266d.appspot.com",
  messagingSenderId: "329111406293",
  appId: "1:329111406293:web:96d3cc9878f0e197fd845c",
  measurementId: "G-PXH21WRVWR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;