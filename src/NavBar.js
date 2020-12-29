
import React from 'react';
import { NavLink} from 'react-router-dom';
import Content from "./content"
import './App.css';




function NavBar() {
    return (
  
        <div className="home">
  
            <nav>
           
    <div className="logo" style={{color:"#ff694b"}}>Needs</div>
    <i className="fas fa-bars menu"></i>
  
                <ul className="nav-links">
              
                    <li>Home</li>
    
             
    <li> Categories</li> 
   
   

   
                
                    <li>About</li>
                 
                  
                    <li>Contact</li>
                  
               
                    </ul>
               <ul className='nav-links1'>
                 
                    <li id="logIn"><NavLink to='./login'>Log in  </NavLink></li>
                  
                
                    <li id="signUp"> <NavLink to='./signup'>Sign up </NavLink></li>
                   
                    </ul>       
       
                    
                
               
            </nav>
            <Content />
            </div>
       
     
    )
}

export default NavBar