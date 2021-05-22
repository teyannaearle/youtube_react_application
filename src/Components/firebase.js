import firebase from "firebase";

const firebaseConfig = {
  authDomain: "react--314117.firebaseapp.com",
  databaseURL: "https://react--314117-ca55d.firebaseio.com",
  projectId: "react-youtube-314117",
  storageBucket: "react-youtube-314117.appspot.com",
  messagingSenderId: "598002141458",
  appId: "1:598002141458:web:1b06dc0ba0339e9e108bcb",
  measurementId: "G-HJE3XG0DSH",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
