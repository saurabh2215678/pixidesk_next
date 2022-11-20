// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// console.log(process.env.APIKEY);
console.log('line 10');
// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID,
//   measurementId: process.env.MEASUREMENTID
// };
const firebaseConfig = {
  apiKey: "AIzaSyAKBz4X7VrhM20yQA9uk7DrF4VzjYnL_TU",
  authDomain: "pixidesk-4637f.firebaseapp.com",
  projectId: "pixidesk-4637f",
  storageBucket: "pixidesk-4637f.appspot.com",
  messagingSenderId: "170405136857",
  appId: "1:170405136857:web:eb0c195312ad7c35dcf1c8",
  measurementId: "G-CX49LVSG0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
