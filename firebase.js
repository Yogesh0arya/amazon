import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC5du0PmiIAuxx6ZuyrdJSN9SopDxI0t-U",
    authDomain: "fir-270af.firebaseapp.com",
    projectId: "fir-270af",
    storageBucket: "fir-270af.appspot.com",
    messagingSenderId: "1083936895835",
    appId: "1:1083936895835:web:3e9b4074e8472c2547e07e"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export default db;