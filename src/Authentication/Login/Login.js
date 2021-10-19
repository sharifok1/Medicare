import { getAuth, signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { Link ,useLocation, useHistory} from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import "./Login.css"
const auth = getAuth();


const Login = () => {
    
     const [error,setError]=useState('');
     const [email,setEmail] =useState('');
     const [password,setPassword] =useState('');
     const [user,setUser]=useState({});
     const [success,setSuccess]=useState('')
    const{googleSignin} =UseAuth()
    const location = useLocation()
    const history = useHistory()
    const Redirect_uri= location.state?.from || '/Home'
    const googleLoginHandler=()=>{
        googleSignin()
        .then((result) => {
            history.push(Redirect_uri)
          })
    }
   
    // loginHandler======================//

   const loginHandler=(e)=>{
   
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
           const user = result.user;
           setUser(user);
          console.log(user);
          setSuccess('Successfully loged in')
        })
        .catch((error) => {
          setError(error.message)
            });
    }
    const emailHandler= (e)=>{
        const email =(e.target.value);
        setEmail(email);
    }
    //password handler==============================//
    const passwordHandler=e =>{
        const password = e.target.value;
        setPassword(password);
    }
    //onAuth state change==============================//
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser({user})
            } else {
                setUser()
            }
          });
    },[])


    return (
        <div className="login-background">
            <div className="text-center d-flex justify-content-center">
            <form onSubmit={loginHandler}  className="login-form">
               
             <h2><i class="fas fa-user"></i> Please Login</h2>
                
                <label htmlFor="email" ></label>
                <input onChange={emailHandler} type="email" placeholder="Email"/> <br />
                
                <label htmlFor="password"></label>
                <input onChange={passwordHandler} type="password" placeholder="Password"/> <br />
                
                <input className="sub-btn" type="submit" value="Login"/> <br />
                {
                user?<span className="text-success">{success}</span>
                :
                <span className="text-danger">{error}</span>
              }
            <br />
            </form>
           
            </div>
             <p className="new-accunt-sugg">Haven't account? please  Create an Account<Link to="/Registration" className="signup-btn">Signup</Link></p>
                <h2 className="mt-4 pt-4">--------------or--------------</h2>

            <button className="provider" onClick={googleLoginHandler}> Login With <i class="fab fa-google text-danger fs-4"></i>oogle</button> <br />
          
        </div>
    );
};

export default Login;