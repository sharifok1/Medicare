import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';


const Registration = () => {
    const{googleSignin}=UseAuth()
    return (
        <div>
             <div className="login-background">
            <div className="text-center d-flex justify-content-center">
            <form action="" className="login-form">
                <h2>Please Signup</h2>
                <input type="Frirs-Name" placeholder="Frist-Name"/> <br />
                <input type="Last-name" placeholder="Last-Nmae"/> <br />
                <input type="email" placeholder="Email"/> <br />  
                <input type="password" placeholder="Password"/> <br />               
                <input type="password" placeholder="retype-Password"/> <br />
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