import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Mylocalisation from '../components/Mylocalisation';
import Navigation from '../components/Navigation';


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

                    <div className='rigth-contact'>
                        <h2>Envoyer un message</h2>
                        
                        <div className='formulaire'>
                            <form>
                                <div className='group-input'>
                                    <label>Nom : </label>
                                    
                                    <input type="text" name="name" />
                                   
                                </div>
                                <div className='group-input'>
                                    <label> Email : </label>
                                   
                                    <input type="text" name="name" />
                                   
                                </div>
                                <div className='group-input'>
                                    <label>Objet :</label>
                                    
                                    <input type="text" name="name" />
                                    
                                </div>
                                <div className='group-input'>
                                    <label>Message :</label>
                                    
                                    <textarea type="text" name="name" />
                                    
                                </div>
                           
                            
                            <input className='btn-send' type="submit" value="Envoyer" />
                            </form>
                        </div>
                    </div>
                </div>
                </div>
              
            </div>
        </div>
    );
};

export default Contact;