  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDuOpzxQG1ltloLAj0zSqhGP2PubHqbAkA",
    authDomain: "portfolio-chaloemchai.firebaseapp.com",
    projectId: "portfolio-chaloemchai",
    storageBucket: "portfolio-chaloemchai.appspot.com",
    messagingSenderId: "266406307191",
    appId: "1:266406307191:web:999c240a5c023ed9c86d72",
    measurementId: "G-GWYQY52ZC6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.firestore()