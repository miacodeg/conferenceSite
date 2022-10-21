
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCQoexxyoMjn6sWeTMZQAa-UnmR29E1yZU",
  authDomain: "conference-ab26d.firebaseapp.com",
  databaseURL: "https://conference-ab26d-default-rtdb.firebaseio.com",
  projectId: "conference-ab26d",
  storageBucket: "conference-ab26d.appspot.com",
  messagingSenderId: "479712284243",
  appId: "1:479712284243:web:b98ac4de84a31f5b7a80a6",
  measurementId: "G-QED5JR7VG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)