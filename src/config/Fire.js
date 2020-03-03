import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBbB_i5vRtTL69ByXLdHcJoen8vCLCvFQY",
  authDomain: "project-joke-6bbc1.firebaseapp.com",
  databaseURL: "https://project-joke-6bbc1.firebaseio.com",
  projectId: "project-joke-6bbc1",
  storageBucket: "project-joke-6bbc1.appspot.com",
  messagingSenderId: "816301947427",
  appId: "1:816301947427:web:e0e5ff1c6ed3bc189b4f96",
  measurementId: "G-EH1FH88W1E"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
