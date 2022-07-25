// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-vV_7IA9hJzs7l6SdakMpFMiaNRT9SiY",
  authDomain: "owslagoods-hq.firebaseapp.com",
  projectId: "owslagoods-hq",
  storageBucket: "owslagoods-hq.appspot.com",
  messagingSenderId: "349086854597",
  appId: "1:349086854597:web:9c2f7fe8cd9fb601232fac",
  storageBucket: 'gs://owslagoods-hq.appspot.com'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app);