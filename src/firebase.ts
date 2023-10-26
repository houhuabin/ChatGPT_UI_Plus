// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//console.log(process.env.REACT_APP_FIREBASE_API_KEY + " process.env.REACT_APP_FIREBASE_API_KEY");
const firebaseConfig = {
  apiKey: "AIzaSyDj4kN0a7dhZGbjSKqQFXi4A-nvVfGE5r8",
  authDomain: "chatgpt-ui-130ee.firebaseapp.com",
  projectId: "chatgpt-ui-130ee",
  storageBucket: "chatgpt-ui-130ee.appspot.com",
  messagingSenderId: "587815761354",
  appId: "1:587815761354:web:9817f42ab935f68f294b33",
  measurementId: "G-RFNX3HTB3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const initFirebase = () => {
  return app;
}