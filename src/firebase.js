import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNVrAhaawn5--ve_9SBbd664OExY9L3mQ",
  authDomain: "compliance-project-49ca3.firebaseapp.com",
  projectId: "compliance-project-49ca3",
  storageBucket: "compliance-project-49ca3.firebasestorage.app",
  messagingSenderId: "168568905817",
  appId: "1:168568905817:web:4aba5e4031e7a336b29148",
  measurementId: "G-BL5VY94F2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
