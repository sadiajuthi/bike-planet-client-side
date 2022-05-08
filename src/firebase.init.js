// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTPRDhQJ-p9qVKFWNUESclwkLBLYNZq1A",
    authDomain: "bike-planet.firebaseapp.com",
    projectId: "bike-planet",
    storageBucket: "bike-planet.appspot.com",
    messagingSenderId: "399014127689",
    appId: "1:399014127689:web:fbab70d09660ba2079f798"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;