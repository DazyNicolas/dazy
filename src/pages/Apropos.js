import React from 'react';
import Navigation from '../components/Navigation';
import Monprofil from "../assets/img/maki.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLanguage, faLocation} from '@fortawesome/free-solid-svg-icons';
import { faCreativeCommons } from '@fortawesome/free-brands-svg-icons';
import Social from '../components/Social';


const Apropos = () => {
    return (
        <div>
            <Navigation/>
           <div className='group-about'>
            <div className='left-about'>
                <div className="about-title">
                <h1>Tout a savoir sur moi</h1>
                <p> Né le 20 avril 1992 Madagascar. Après quatre ans d’études en Droit, 
                    en découvrent l'informatique et la pension en langage informatique, 
                    j'ai décidé de suivre une formation en informatique bureautique, ainsi qu'une formation en langage informatique.
                    Et je veux en savoir plus sur le domaine du développement web.</p>
                </div>

                <ul className='all-info'>
                <li>
                     <h1>Origine</h1>
                     <FontAwesomeIcon className='info-icon'  icon={faLocation}/>
                    <div className='content'>
                        <p>Madagascar</p>
                        <p>Fianarantsoa</p>
                    </div>
                    </li>
                    <li>
                     <h1>Langue</h1>
                     <FontAwesomeIcon className='info-icon'  icon={faLanguage}/>
                    <div className='content'>
                        <p>Malagasy</p>
                        <p>Français</p>
                    </div>
                    </li>
                    <li>
                     <h1>Pastemps</h1>
                     <FontAwesomeIcon className='info-icon'  icon={faCreativeCommons}/>
                    <div className='content'>
                        <p>Music</p>
                        <p>Cuisiné</p>
                    </div>
                    </li>
                 
                </ul>
                
            </div>

            <div className='right-about'>
                <img src={Monprofil} alt=""/>
                 
            </div>
            <Social/> 
           </div>
        </div>
    );
};

export default Apropos;