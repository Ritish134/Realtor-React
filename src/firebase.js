// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOcXqg9fIHi7zYBE5IBaF7nKYFfAm62H0",
  authDomain: "realtor-clone-react-6c493.firebaseapp.com",
  projectId: "realtor-clone-react-6c493",
  storageBucket: "realtor-clone-react-6c493.appspot.com",
  messagingSenderId: "462652288570",
  appId: "1:462652288570:web:069de1195325dc8d388f03"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db =getFirestore()