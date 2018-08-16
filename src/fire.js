import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDSTjPHe-fUgx9pFjUJivt_UIRGYKybh18",
    authDomain: "project3-c42d2.firebaseapp.com",
    databaseURL: "https://project3-c42d2.firebaseio.com",
    projectId: "project3-c42d2",
    storageBucket: "project3-c42d2.appspot.com",
    messagingSenderId: "512720013324"
  };
firebase.initializeApp(config);
var fire = firebase.initializeApp(config);
export default fire;
