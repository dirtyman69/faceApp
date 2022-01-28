import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import dotenv from 'dotenv'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

dotenv.config()

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "faceapp-19acb.firebaseapp.com",
  projectId: "faceapp-19acb",
  storageBucket: "faceapp-19acb.appspot.com",
  messagingSenderId: process.env.VUE_APP_MESSAGINGSNDERID,
  appId: process.env.VUE_APP_APPID,
  measurementId: process.env.VUE_APP_MEASUREMWNTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).mount('#app')
