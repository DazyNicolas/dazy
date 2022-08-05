import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Mylocalisation from '../components/Mylocalisation';
import Navigation from '../components/Navigation';
import InputFild from '../components/InputFild';


const Contact = () => {
    return (
        <div>
            <Navigation/>
            <div className='mycontact container'>
                <div className='tite-contact'>
                        <h1>Rester en contact</h1>

                </div>
                <div className='localisation'>
                             <Mylocalisation />

                    <div className='contact-content'>
                    <div className='left-contact'>
                        <h2>Contact rapide</h2>
                        <div className='contact-rapide'>
                            <ul className='card'>
                                <li>
                                <FontAwesomeIcon className='icon' icon={faPhone}/>
                                <p>+261 347402412</p>
                                </li>
                                <li>
                                <FontAwesomeIcon className='icon' icon={faEnvelope}/>
                                <p>dazyexelle@gmail.com</p>
                                </li>
                                <li>
                                <FontAwesomeIcon className='icon' icon={faLocationDot}/>
                                <p>Fianarantsoa-Madagascar</p>
                                </li>
                                <li>
                                <FontAwesomeIcon className='icon' icon={faPhone}/>
                                 <p>+261 347402412</p> 
                                </li>
                            
                            </ul>
                        </div>
                    </div>

                   <InputFild/>
                </div>
                </div>
              
            </div>
        </div>
    );
};

export default Contact;