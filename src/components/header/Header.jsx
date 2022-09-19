import React from 'react'
import './header.css'
import CTA from './CTA'
import Dazy from '../../assets/Dazy.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
     <div className="container header__container">
          <h5>Tongasoa,izaho dia </h5>
          <h1>Dazy Exelle</h1>
          <h5>Développeur Front End</h5>
          <CTA/>
          <HeaderSocials/>
          <div className='dazy'>
            <img src={Dazy} alt="Dazy Exele"/>
          </div>

          <a href='#footer' className='scroll__down'>défiler vers le bas</a>
     </div>
    </header>
  )
}

export default Header