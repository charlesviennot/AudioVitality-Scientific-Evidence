import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH8IZPuTNKNC7pMu6wulxRjpCQBIhRT8I",
  authDomain: "scientific-deck.firebaseapp.com",
  projectId: "scientific-deck",
  storageBucket: "scientific-deck.firebasestorage.app",
  messagingSenderId: "66166130746",
  appId: "1:66166130746:web:06174fcacb88c31a2f0d03",
  measurementId: "G-C9DL447K9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Analytics
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
