import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { Link ,useLocation, useHistory} from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import "./Login.css"
const auth = getAuth();


const Login = () => {
    
     const [error,setError]=useState('');//--------------------error messeges
     const [email,setEmail] =useState('');//-------------------email state
     const [password,setPassword] =useState('');//-------------password state
     const [success,setSuccess]=useState('') //---------------login success mgs

    const{googleSignin,setUser,user,setIsloading} =UseAuth(); //---------------google signin----//
    console.log(user)
    const location = useLocation()
    const history = useHistory()

    //---------redirect route google sign in----------------------------
    const Redirect_uri= location.state?.from || '/Home'
    const googleRedirectLogin=()=>{
        googleSignin()
        .then((result) => {
            history.push(Redirect_uri)
          }).finally(()=>{
            setIsloading(false);
          })
    }

//---------redirect route Email password  login----------------------------
    const Redirect = location.state?.from || '/Home';
    const passwordRedirectLogin=(e)=>{
      e.preventDefault()
      setIsloading(true)
      passworLoginHndler()
      .then((result) => {
        const user = result.user;
        // setUser({user});
        history.push(Redirect)
       setSuccess('Successfully loged in')
     }).finally(()=>{ setIsloading(false)})
      .catch((error) => {
      setError(error.message)
        });
    }



    // ------------------loginHandler======================
   const passworLoginHndler=(e)=>{
    
    setIsloading(true)
      return  signInWithEmailAndPassword(auth, email, password)     
    }

    //---------------email handler-------------------//
    const emailHandler= (e)=>{
        const email =(e.target.value);
        setEmail(email);
    }
    //-------------password handler------------------//
    const passwordHandler=(e) =>{
        const password = e.target.value;
        setPassword(password);
    }
  
    //---------redirect route----------------------------
   


    return (
        <div className="login-background">
            <div className="text-center d-flex justify-content-center">
         
            <form onSubmit={passwordRedirectLogin}  className="login-form">              
             <h2><i className="fas fa-user"></i> Please Login</h2>
                
                <label htmlFor="email" ></label>
                <input onChange={emailHandler} type="email" placeholder="Email"/> <br />
                
                <label htmlFor="password"></label>
                <input onChange={passwordHandler} type="password" placeholder="Password"/> <br />
                
                <input  className="sub-btn" type="submit" value="Login"/> <br />
                {
                user.email?<span className="text-success">{success}</span>
                :
                <span className="text-danger">{error}</span>
              }
            <br />
            </form>
           
            </div>
             <p className="new-accunt-sugg">Haven't account? please  Create an Account<Link to="/Registration" className="signup-btn">Signup</Link></p>
                <h2 className="mt-4 pt-4">--------------or--------------</h2>

            <button className="provider" onClick={googleRedirectLogin}> Login With <i className="fab fa-google text-danger fs-4"></i>oogle</button> <br />
          
        </div>
    );
};

export default Login;