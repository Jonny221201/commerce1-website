import React from 'react';
import { NavLink } from 'react-router-dom';
import './logIn.css';


const Login  = () => {

    return (
        
        
        <div className="loginContainer">

        <div className="loginPosition">
            <h1>Log In <NavLink to='/'> <i class="fas fa-times icon"></i> </NavLink></h1>
           
            <form action="" >
            <div className="loginInfo">


             <div className="inputText">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
        </div>


        <p className="Para"> or register using any of these below </p>

           <div className="icons">
           <a href="#" className="fa fa-google "></a>
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter "></a>
           
        </div>


        <div className="submitBtn">
        <a className="forgot" href="#">Forgot your password ?</a>
        <button>Log in</button>
        </div>


        </div>
        </form>   
        
        </div>
        </div>
    );
    
}
export default Login;