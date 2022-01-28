import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
// import dotenv from 'dotenv'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// dotenv.config()

// const doten = require('dotenv');
// const result = doten.config();
// console.log(result.parsed);

const firebaseConfig = {
  apiKey: "AAIzaSyBbZCPQ6Cm65kGVBJMSBkFOcF6ew2ht_5k",
  authDomain: "faceapp-19acb.firebaseapp.com",
  projectId: "faceapp-19acb",
  storageBucket: "faceapp-19acb.appspot.com",
  messagingSenderId: "1014726553856",
  appId: "1:1014726553856:web:dc92fcee382d8c559443e5",
  measurementId: "G-VHR5V057E6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).mount('#app')


