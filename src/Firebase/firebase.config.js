// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo-R1b8ljPsbwTpegx_q3GALsd174MhtM",
  authDomain: "event-management-c2399.firebaseapp.com",
  projectId: "event-management-c2399",
  storageBucket: "event-management-c2399.appspot.com",
  messagingSenderId: "254442282915",
  appId: "1:254442282915:web:4d28dff7501e1d97c90416"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);