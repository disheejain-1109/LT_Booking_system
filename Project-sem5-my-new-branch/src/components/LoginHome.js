import React,{useState,useEffect} from 'react';
import { useFirebase } from '../config/firebase';
import {auth, googleProvider} from '../config/firebase';
import {onAuthStateChanged, signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import "./LoginHome.css";


export default function Dishee() {

const firebase = useFirebase();
const navigate = useNavigate();


 const signingoogle = async()=>{
  try{
    let res= await signInWithPopup(auth,googleProvider);
   let email= res.user.email;
   if(!email.endsWith("lnmiit.ac.in"))
   {
     auth.signOut();
    console.log(email);
    navigate("/feedback");
  } 
  navigate("/home");
   console.log("success"); 

 







    // await signInWithPopup(auth,googleProvider);
    // console.log("success");
  
  }
  catch(err){
    console.error(err);
  }
 }
  return (
    <div className='bg'>
        <>
        {/* <link rel="stylesheet" href="Dishee.css" /> */}
        <div className="login_container">
 
    <div  id="leftText">
        <img id='logoFront'src=".\images\lnmiit_logo.png" alt="lnm logo" />
        <div className="text ">
        <h5 className='dark' id='text1'>Welcome to</h5>
        <h6 className='dark' id='text2'>LNMIIT-<span id='slide'>LT Booking </span></h6>
        <p className='dark'  id='text3'>Excellence our motto discipline our way</p>
        </div>
    </div>
    <div className='log'     id="signIn">
    <img id='icon'
        src="https://static.vecteezy.com/system/resources/thumbnails/007/407/996/small/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg"
        alt="icon"
      />
      {/* <h1 id='login'>Login</h1> */}
      <h1 id='login'>Login</h1>
      
      <button id='sign'  onClick={signingoogle}><img id='google' src=".\images\google.jpg" alt="google img" /> Sign in with Google</button>
    </div>
    
    </div>

        </>
      
    </div>
  );
};