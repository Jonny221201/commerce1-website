import React from 'react'
import './signUp.css';
import { NavLink } from 'react-router-dom';


const Signup = () => {
    return (

        <div className="loginContainer">
<div className="loginPosition">
    <h1>Create your account <NavLink to='/'><i class="fas fa-times icon2"></i></NavLink></h1>
    <form action="" >
    <div className="loginInfo">
     <div className="inputText">
    <input type="text" placeholder="Name" required />
    <input type="email" placeholder="Email" required />
    <input type="password" placeholder="Password" required />
</div>
    <p className="Para"> or register using any of these below </p>
   <div class="icons">
    
    <a href="#" className="fa fa-google "></a>
    <a href="#" className="fa fa-facebook"></a>
    <a href="#" className="fa fa-twitter "></a>
</div>
<div className="signUpBtn">

<button>Sign Up</button>
</div>
</div>
</form>   

</div>
</div>
    );
}

export default Signup;
