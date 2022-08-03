import React from 'react';
import Navigation from '../components/Navigation';
import Social from '../components/Social';
import Monprofil from "../assets/img/maki.jpg"
import Myboutton from '../components/Myboutton';
import {NavLink} from "react-router-dom"


const Home = () => {
    return (
        <div>
            <Navigation/>
            <div className='homepages'>
                   <div className=' container  container-flex'>
                    <div className='content-left'>
                    <h1> Salama, Je m'appel Dazy Exelle </h1>
                    
                    <p>Je suis un concepteur Web Desingner et Developer</p>
                    </div>
                   
                   <div className='content-right'>
                     <img src={Monprofil} alt="" />
                   </div>
                   <NavLink  to="/commencer" className='mybouton'>
                       <Myboutton/>
                   </NavLink>
                 
                   </div>
                   <Social/>  
            </div>
            
        </div>
    );
};

export default Home;