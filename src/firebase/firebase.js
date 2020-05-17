import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { database as default, firebase, googleProvider };

// database.ref('expenses').on('child_removed', (ss) => {
//     console.log(ss.key, ss.val());
// });

// database.ref('expenses').on('child_changed', (ss) => {
//     console.log(ss.key, ss.val());
// });

// database.ref('expenses').on('child_added', (ss) => {
//     console.log(ss.key, ss.val());
// });

// database.ref('expenses').once('value')
//   .then((ss) => {
//     const expenses = [];

//     ss.forEach((childSS) => { 
//         expenses.push({
//           id: childSS.key,
//           ...childSS.val()
//         }) 
//     });

//     console.log(expenses);
//   });

//   database.ref('expenses').on('value', (ss) => {
//     const expenses = [];

//     ss.forEach((childSS) => { 
//         expenses.push({
//           id: childSS.key,
//           ...childSS.val()
//         }) 
//     });

//     console.log(expenses);
//   })

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
// });

