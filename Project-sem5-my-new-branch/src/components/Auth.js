import { useState } from 'react';
import {auth, googleProvider} from '../config/firebase';
import {createUserWithEmailAndPassword,signInWithPopup,signOut} from 'firebase/auth';

export const Auth = ()=> {
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState(""); 
     
    const signIn = async () =>{
        try{
        await createUserWithEmailAndPassword(auth,Email,Password);
        } catch (err) {
            console.error(err);
        }
    };
    const signInwithGooge = async () =>{
        try{
        await signInWithPopup(auth,googleProvider);
        } catch (err) {
            console.error(err);
        }
    };
    const logOut = async () =>{
        try{
        await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    };
   return (
        <div>
            <input placeholder="Email..." onChange={(e) => setEmail(e.target.value)}   />
            <input placeholder="Password..." type='password'  
            onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={signIn}>Sign In</button>
            <button onClick={signInwithGooge}>Sign In With Google</button>
            <button onClick={logOut}>Signout</button>
        </div>
   );
};
