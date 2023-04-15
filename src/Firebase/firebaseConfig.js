import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAAVBP7eiikoZNBxR1wSDgVoMlnCjTyuIY",
  authDomain: "holistica-store.firebaseapp.com",
  projectId: "holistica-store",
  storageBucket: "holistica-store.appspot.com",
  messagingSenderId: "950683859807",
  appId: "1:950683859807:web:1871886c86cddbaef354ea"
};

const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const db = getFirestore(app)
