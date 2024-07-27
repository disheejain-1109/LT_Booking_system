// Import the functions you need from the SDKs you need
import React,{createContext,useContext,useEffect,useState} from "react";
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,onAuthStateChanged,signInWithPopup} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const FirebaseContext= createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBDwrcBsK4-cqfHRLy0jyB5I90dlaNhAI4",
  authDomain: "lt-booking-a7a32.firebaseapp.com",
  projectId: "lt-booking-a7a32",
  storageBucket: "lt-booking-a7a32.appspot.com",
  messagingSenderId: "890817475975",
  appId: "1:890817475975:web:8c30f481f6e1651e054f22"
};

export const useFirebase= () => useContext(FirebaseContext);



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const FirebaseProvider = (props) => {

  const[user,setUser] =useState(null);

  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          if(user) setUser(user);
          else setUser(null);
      });
  } , []);

const signinWithGoogle = () => signInWithPopup(auth,googleProvider);

const isLoggedIn = user ? true : false;

return<FirebaseContext.Provider value={{signinWithGoogle,user, isLoggedIn}}>{props.children}</FirebaseContext.Provider>

};

// const analytics = getAnalytics(app);