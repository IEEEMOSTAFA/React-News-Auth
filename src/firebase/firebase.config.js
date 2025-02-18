// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// console.log('inside firebase config',import.meta.env.VITE_PASS)
const firebaseConfig = {
  apiKey:import.meta.env.VITEE_APIKEY,
  authDomain:import.meta.env.VITEE_AUTHDOMAIN,
  projectId:import.meta.env.VITEE_PROJECTID,
  storageBucket:import.meta.env.VITEE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITEE_MESSAGINGSENDERID,
  appId:import.meta.env.VITEE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

