import React, { useEffect } from 'react'
import './header.css'
import CTA from './CTA'
import Dazy from '../../assets/dazy-profil.png'
import DazyLogo from '../../assets/img-logo.jpg'
import HeaderSocials from './HeaderSocials'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { RiContactsLine } from 'react-icons/ri'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {animateScroll as scroll} from 'react-scroll'
import { useState } from 'react'


const Header = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const heandleScroll = () => {
      setSticky(window.scrollY > 100);

    }

    window.addEventListener('scroll', heandleScroll);
    return () => window.removeEventListener('scroll', heandleScroll)

  });


  const [sideBar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sideBar)

  const toggleHome = () => {
    scroll.scrollToTop();
  };
 

  return (
    <header>
      <div className={`${sticky ? "sticky " : "all__nav"}` }>
      <nav className='nav__container container '>
        <div className='dazy__logo'>
        <LinkS href='/'>
          <img src={DazyLogo} alt=''/>
          <span>DAZY</span>
        </LinkS>
        </div>
        
        <ul className={sideBar ? 'nav-menu active' : 'nav-menu'}>
          <li className='navbar-toggle'>
            <AiOutlineClose onClick={showSidebar}/>
          </li>
          <li>
            <LinkS to='/' onClick={toggleHome} className='navbar__link' ><AiOutlineHome className='navbar__icon' /> Accueil</LinkS>
          </li>
          <li>
          <LinkS to='about' onClick={showSidebar} className='navbar__link'  ><AiOutlineUser className='navbar__icon' /> A-propos</LinkS>
           
          </li>
          <li>
            <LinkS to='experience' onClick={showSidebar} className='navbar__link'  ><BiBook className='navbar__icon' /> Experience</LinkS>
           
          </li>
          <li>
            <LinkS to='service' onClick={showSidebar}  className='navbar__link' ><RiServiceLine className='navbar__icon' /> Service</LinkS>
          </li>
          <li>
            <LinkS to='contact' onClick={showSidebar} className='navbar__link'  ><RiContactsLine className='navbar__icon' /> Contact</LinkS>
          </li>
        </ul>

        <div className='navBar'>
            <FaBars onClick={showSidebar}/>
        </div>
      </nav>
      </div>
      
      <div className="container header__container">
        <div className='header__content'>
          <h5>SALUT !</h5>
          <h1> Je suis Dazy </h1>
          <h4>Développeur Front End & DESIGNER</h4>
          <h5>Full autodidact</h5>
         

          <CTA/>

          <HeaderSocials />
        </div>
         
          <div className='dazy'>
            <img src={Dazy} alt="Dazy Exele" />
          </div>

          <a href='#contact' className='scroll__down'> Rester en contacté</a>
      </div>

      
    </header>
  )
}

export default Header