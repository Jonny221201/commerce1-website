
import React from 'react';
import Categories from './categories';
import './content.css';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import city from './images/city.svg';
import service from './images/service.svg';


function Content() {
    return (
      
        <div className="Content">      
      
            <div className="header">
            <h1 className='head'> Welcome to  <span className='logoC'> Needs </span> </h1>
            <p className='paragr'>The number one website to find your needs</p>
            <div className="searchBar">
             <input className="inputPlace" type="text" placeholder="Restaurants, Carwash ...." />
             <i className="fas fa-search searchIcon"></i>
           
        </div>
       <div className='imageContainer'> 
       <img className='serviceImage' src={service} alt='service' /> 
       <img className='mobileImage' src={city} alt='city' />
       </div>
        </div>

           
        <Categories />
        <About />
        <Contact />
        <Footer />
        </div>
   
    )
}

export default Content