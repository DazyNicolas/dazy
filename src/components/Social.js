import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'



const Social = () => {
    return (
        
             <div className='social'>
                <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook}/>
                </a>
                        
               <a href="https://twitter.com">
               <FontAwesomeIcon icon={faTwitter}/>
               </a>
               
                <a href='https://wathsapp.com'>
                 <FontAwesomeIcon icon={faWhatsapp}/>
                </a>        
             </div>
        
    );
};

export default Social;