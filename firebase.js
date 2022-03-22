// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB2ekpQ2rXnMlvQBNl3_LypI_rCEx1Y6Pw',
  authDomain: 'social-media-demo-9c836.firebaseapp.com',
  projectId: 'social-media-demo-9c836',
  storageBucket: 'social-media-demo-9c836.appspot.com',
  messagingSenderId: '67325043806',
  appId: '1:67325043806:web:a5d81a34734528820c00cf',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage };
