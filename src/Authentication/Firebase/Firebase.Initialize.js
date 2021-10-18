import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Cofig";

const firebaseInitialization =()=>{
    initializeApp(firebaseConfig);
}

export default firebaseInitialization;