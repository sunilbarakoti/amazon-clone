/* 
    Google firebase setup for the authentication and app deployment.
*/

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAnQVRca293sXRdkjTCoZt1vK7JE57AL9Q",
    authDomain: "e-commerce-93aba.firebaseapp.com",
    databaseURL: "https://e-commerce-93aba.firebaseio.com",
    projectId: "e-commerce-93aba",
    storageBucket: "e-commerce-93aba.appspot.com",
    messagingSenderId: "165911730009",
    appId: "1:165911730009:web:f190a8296c18cc1fd0de48",
    measurementId: "G-032VRL2EE5"

});

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };