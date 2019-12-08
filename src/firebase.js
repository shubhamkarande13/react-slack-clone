import firebase from firebase/app;
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyBNlqK4HR6NlPKYbSPQ3pCn3yF5-Zy0oQs",
    authDomain: "react-slack-clone-e0d57.firebaseapp.com",
    databaseURL: "https://react-slack-clone-e0d57.firebaseio.com",
    projectId: "react-slack-clone-e0d57",
    storageBucket: "react-slack-clone-e0d57.appspot.com",
    messagingSenderId: "698306519945",
    appId: "1:698306519945:web:eda609a164295dd6bab758",
    measurementId: "G-Z5HTS35Z76"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase;