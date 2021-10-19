import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import firebaseInitialization from '../Firebase/Firebase.Initialize';
firebaseInitialization()
const auth = getAuth();
const Registration = () => {
    const{googleSignin}=UseAuth()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    // ===================onsubmit/registration handler///
    const registrationHandler=(e)=>{
        e.preventDefault()
        console.log(email,password);   
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
        const user = result.user;
        console.log(user)
  })
  .catch((error) => {
    
  });

    }
    // email handler//-------------------------//
    const emailHandler= (e)=>{
        const email =(e.target.value);
        setEmail(email);
    }
    //password handler==============================//
    const passwordHandler=e =>{
        const password = e.target.value;
        setPassword(password);
    }
    

    return (
        <div>
             <div className="login-background">
            <div className="text-center d-flex justify-content-center">
            
            <form className="login-form" onSubmit={registrationHandler}>
                <h2>Please Signup</h2>
                <input type="Frirs-Name" placeholder="Frist-Name"/> <br />
                <input type="Last-name" placeholder="Last-Nmae"/> <br />
                <input onChange={emailHandler} type="email" placeholder="Email" required/> <br />  
                <input onChange={passwordHandler} type="password" placeholder="Password" required /> <br />               
                <input type="password" placeholder="retype-Password" required/> <br />
                <input className="sub-btn" type="submit" value="SignUp"/>
            </form>

            </div>
             <p className="new-accunt-sugg">Already Have an account? please login<Link to="/Login" className="signup-btn">Login</Link></p>
                <h2 className="mt-4 pt-4">--------------or--------------</h2>

            <button className="provider" onClick={googleSignin}>Login With google</button> <br />
            <button className="provider" onClick={googleSignin}>Login With Facebok</button>

        </div>
        </div>
    );
};

export default Registration;