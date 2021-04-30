 import firebase from 'firebase';
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAQ268B6WvMMexK3vcOZ9WDkbKdY8OfdYk",
    authDomain: "login-netflix.firebaseapp.com",
    projectId: "login-netflix",
    storageBucket: "login-netflix.appspot.com",
    messagingSenderId: "522127095042",
    appId: "1:522127095042:web:d6e069f8053dc69f563e1b"
  };
  // Initialize Firebase
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;