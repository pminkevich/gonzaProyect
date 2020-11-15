import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBMUeiKwA3K5vcOOhXAi4tpdrrrfG9FQc0",
  authDomain: "gonzaapp-78b0a.firebaseapp.com",
  databaseURL: "https://gonzaapp-78b0a.firebaseio.com",
  projectId: "gonzaapp-78b0a",
  storageBucket: "gonzaapp-78b0a.appspot.com",
  messagingSenderId: "99358182408",
  appId: "1:99358182408:web:c2857ef49dfbfda38255bd"
};

const firebaseApp = app.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();