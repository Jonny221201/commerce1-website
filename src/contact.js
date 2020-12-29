import React from 'react';
import './contact.css';
import Footer from './footer'

const Contact = () => {
    return(
        <div className='contactHolder'>
            <h1 className='contactHead'>Contact <span className='logoContact'> Needs </span></h1>
            <div className='contactFlex'>
            <div className='contactContainer'><i className="far fa-envelope"></i><p>abdulaziz221201@gmail.com<br /><br />
            abdulaziz221201@mail.ru</p></div>
            <div className='contactContainer'><i className="fas fa-phone-alt"></i><p>+998 97 443 00 26</p><br/><p>+998 93 003 33 71</p></div>
            <div className='contactContainer'><i className="fab fa-telegram-plane"></i><p> @abdulaziz_2212</p></div>
            <div className='contactContainer'><i className="fab fa-instagram"></i><p> @abdulaziz_221201</p></div>
           
            </div>
       
           

        </div>
    )
}

export default Contact; 