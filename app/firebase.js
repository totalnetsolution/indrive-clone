import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAGHAhHyLzoTzg5VUmQCLMgDUlQNJHqOXE",
    authDomain: "react-native-indrive-clone.firebaseapp.com",
    projectId: "react-native-indrive-clone",
    storageBucket: "react-native-indrive-clone.firebasestorage.app",
    messagingSenderId: "229859832079",
    appId: "1:229859832079:android:26995d67416eb9494cce7a"
  };

  const app = initializeApp(firebaseConfig);

  
  export const auth = getAuth(app);
  export const db = getFirestore(app);