// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "webora-ai-850d9.firebaseapp.com",
  projectId: "webora-ai-850d9",
  storageBucket: "webora-ai-850d9.firebasestorage.app",
  messagingSenderId: "658592843469",
  appId: "1:658592843469:web:84266ee8a9464425b18b84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider }