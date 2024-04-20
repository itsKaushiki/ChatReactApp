import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCeBWyRgguJv-2VpxA3Hw7Qvndmcq2sp2A",
  authDomain: "chat-b732a.firebaseapp.com",
  projectId: "chat-b732a",
  storageBucket: "chat-b732a.appspot.com",
  messagingSenderId: "519048376270",
  appId: "1:519048376270:web:2dfe7c959efdf2c998459f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()