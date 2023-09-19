import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0Y9GnykQt6l_Mq2kqA461_ynGEO237jY",
  authDomain: "foodapp1-d328d.firebaseapp.com",
  projectId: "foodapp1-d328d",
  storageBucket: "foodapp1-d328d.appspot.com",
  messagingSenderId: "191258085452",
  appId: "1:191258085452:web:9b014a00f0d34a539c0ce9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export{db,storage};