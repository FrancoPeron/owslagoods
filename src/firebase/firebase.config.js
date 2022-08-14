// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU7OpEal_DvD-BNXAtUfPAeO9j7fMOokQ",
  authDomain: "owslagoods-fbf3b.firebaseapp.com",
  projectId: "owslagoods-fbf3b",
  storageBucket: "owslagoods-fbf3b.appspot.com",
  messagingSenderId: "1039513560097",
  appId: "1:1039513560097:web:f8c047106409b73f26af60",
  measurementId: "G-8Q1BXBPLBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)
export const storage = getStorage(app);