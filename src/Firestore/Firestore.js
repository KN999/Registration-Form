import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDDjTRdQ08xrAyWrIrLbf2gafbfP4wl1XQ",
    authDomain: "registration-form-ad20a.firebaseapp.com",
    databaseURL: "https://registration-form-ad20a.firebaseio.com",
    projectId: "registration-form-ad20a",
    storageBucket: "registration-form-ad20a.appspot.com",
    messagingSenderId: "766278655828",
    appId: "1:766278655828:web:4469ddda4ea41d8d3932c1",
    measurementId: "G-M3HSRWN6N9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;