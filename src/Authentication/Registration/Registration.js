import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import firebaseInitialization from '../Firebase/Firebase.Initialize';
firebaseInitialization()
const auth = getAuth();
const Registration = () => {
    const{googleSignin}=UseAuth()
    const [email,setEmail]=useState('') //----------email
    const [password,setPassword]=useState('') //----password
    const [error,setError]=useState('') //----------Error
    const [success,setSuccess]=useState('')//--------Success
    const [firstName,setFirstName]=useState('')//---------1st Nmae
    const [lastName,setLastName]=useState('')//---------last Nmae

    console.log(firstName,lastName)
    // username update handelar--------------
    const setUserName = ()=>{
        updateProfile(auth.currentUser,
            { displayName:firstName,firstName:firstName, lastNmae: lastName })
            .then(result =>{

            })
    }
    //================First Name====================
    const firstNameHandler =(e)=>{
        const name1 =(e.target.value);
        setFirstName(name1);
    }
    //================Last Name====================
    const lastNameHandler =(e)=>{
        const name2 =(e.target.value);
        setLastName(name2);
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

        // ==========================================onsubmit/registration handler///
        const registrationHandler=(e)=>{
            e.preventDefault()
            console.log('email:',email, 'password:',password)
            if(password.length<6){
                return setError('Your Password should be at least 6 characters long');
            }
            if(!/(?=(.*[A-Z]){2})/.test(password)){
               return setError('Password must contain 2 upper case')
            }
            createUserWithEmailAndPassword(auth, email, password)
            .then((result)=>{
                setSuccess('Registration Successful');
                setUserName();
            }).catch(error=>{
                setError(error.message);
            })
        }
    

    return (
        <div>
             <div className="login-background">
            <div className="text-center d-flex justify-content-center">
            
            <form className="login-form" onSubmit={registrationHandler}>
                <h2><i className="fas fa-user-plus"></i> Please Signup</h2>
                <label htmlFor="Frist-Name"></label>
                <input onChange={firstNameHandler} type="Frirs-Name" placeholder="Frist-Name" id="Frist-Name"/> <br />
               
                <label htmlFor="Last-Nmae"></label>
                <input onChange={lastNameHandler} type="Last-name" placeholder="Last-Nmae" id="Last-Nmae"/> <br />
                
                <label htmlFor="email"></label>
                <input onChange={emailHandler} type="email" placeholder="Email" id="email" required/> <br />  
                
                <label htmlFor="password"></label>
                <input onChange={passwordHandler} type="password" placeholder="Password" id="password" required /> <br />               
                <input type="password" placeholder="retype-Password" required/> <br />
                <small className="text-danger">{error}</small> <br />
                <span className="text-success">{success}</span> <br />
                <label htmlFor="signUp"></label>
                <input className="sub-btn" type="submit" value="SignUp" id="signUp"/>
            </form>

            </div>
             <p className="new-accunt-sugg">Already Have an account? please login<Link to="/Login" className="signup-btn">Login</Link></p>
                <h2 className="mt-4 pt-4">--------------or--------------</h2>

            <button className="provider" onClick={googleSignin}>Login With <i className="fab fa-google text-danger fs-4"></i>oogle</button> <br />

        </div>
        </div>
    );
};

export default Registration;