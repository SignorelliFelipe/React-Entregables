import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUMy6ydkfd98MbrSfUFH7lwR7rJv9x0qI",
  authDomain: "bookwave-felipe-234f0.firebaseapp.com",
  projectId: "bookwave-felipe-234f0",
  storageBucket: "bookwave-felipe-234f0.firebasestorage.app",
  messagingSenderId: "719371732859",
  appId: "1:719371732859:web:17d35ecd18d6724eeddfde"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);