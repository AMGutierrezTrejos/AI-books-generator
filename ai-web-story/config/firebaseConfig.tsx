// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-kids-book.firebaseapp.com",
  projectId: "ai-kids-book",
  storageBucket: "ai-kids-book.appspot.com",
  messagingSenderId: "703813625538",
  appId: "1:703813625538:web:f40918a5bd8e3d99ca7d5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage=getStorage(app)