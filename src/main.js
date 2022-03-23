import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbyf0T9mybuwPouakqJ0hzk7X4nigEALk",
  authDomain: "semanatec-12cd7.firebaseapp.com",
  projectId: "semanatec-12cd7",
  storageBucket: "semanatec-12cd7.appspot.com",
  messagingSenderId: "883476899634",
  appId: "1:883476899634:web:29f384190ae1d5067f992b"
};

// Initialize Firebase
const app2 = initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')