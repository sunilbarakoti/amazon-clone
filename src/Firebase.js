/* 
    Google firebase setup for the authentication and app deployment.
*/

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "******************************",
    authDomain: "******************************",
    databaseURL: "******************************",
    projectId: "******************************",
    storageBucket: "******************************",
    messagingSenderId: "******************************",
    appId: "******************************",
    measurementId: "******************************"

});

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };