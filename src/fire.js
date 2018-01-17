import firebase from 'firebase';

var config = {
   apiKey: "AIzaSyBgFCH34wekGSE6xgx2zQeJNJpqxQQEzt8",
   authDomain: "react-firebase-app-34c8d.firebaseapp.com",
   databaseURL: "https://react-firebase-app-34c8d.firebaseio.com",
   projectId: "react-firebase-app-34c8d",
   storageBucket: "react-firebase-app-34c8d.appspot.com",
   messagingSenderId: "762401672092"
 };
var fire = firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default fire;
