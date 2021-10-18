import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import "./Login.css"


const Login = () => {
    const{googleSignin} =UseAuth()
    return (
        <div className="login-background">
            <div className="text-center d-flex justify-content-center">
            <form action="" className="login-form">
                <h2>Please Login</h2>
                <label htmlFor="email" ></label>
                <input type="email" placeholder="Email"/> <br />
                <label htmlFor="password"></label>
                <input type="password" placeholder="Password"/> <br />
                <input className="sub-btn" type="submit" value="Login"/>
            </form>
            </div>
             <p className="new-accunt-sugg">Haven't account? please  Create an Account<Link to="/Registration" className="signup-btn">Signup</Link></p>
                <h2 className="mt-4 pt-4">--------------or--------------</h2>

            <button className="provider" onClick={googleSignin}>Login With google</button> <br />
            <button className="provider" onClick={googleSignin}>Login With Facebok</button>

        </div>
    );
};

export default Login;