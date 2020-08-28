import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCUyPX2Ndi_J48Kh3M5PSP1hhab4QJTuJs",
  authDomain: "portfolio-b2f11.firebaseapp.com",
  databaseURL: "https://portfolio-b2f11.firebaseio.com",
  projectId: "portfolio-b2f11",
  storageBucket: "portfolio-b2f11.appspot.com",
  messagingSenderId: "833473212353",
  appId: "1:833473212353:web:487d7eef291fa137848940",
  measurementId: "G-JB0TTS9MQP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
