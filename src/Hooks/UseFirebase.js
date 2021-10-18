import { useEffect, useState } from 'react';
import {getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";
import firebaseInitialization from '../Authentication/Firebase/Firebase.Initialize';
firebaseInitialization();

const UseFirebase = () => {

    const [user,setUser]=useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // google signin Handleer===========================//
    const googleSignin=()=>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setUser(user)
          }).catch((error) => {
          });
    }
    //signout handler===================================//
    const logOut=()=>{      
        signOut(auth).then(() => {
            setUser({})
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }
    // on Auth state change//
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }
        })
    },[])
    return (
            {
                googleSignin,
                user,
                logOut,
            }
    );
};

export default UseFirebase;