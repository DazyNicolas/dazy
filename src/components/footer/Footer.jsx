import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer id='footer'>

      <a href='#' className='footer__logo'>Dazy Exelle</a>

      <ul className='permalinks'>
        <li><a href='#'>Accueil</a></li>
        <li><a href='#about'>A-propos</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#service'>Services</a></li>
        <li><a href='#portofolio'>Portofolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href="https://www.facebook.com/dazy.nico.9">
          <BsFacebook/>
        </a>
        <a href="https://www.facebook.com/dazy.nico.9">
          <FiInstagram/>
        </a>
        <a href="https://www.facebook.com/dazy.nico.9">
          <AiOutlineTwitter/>
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Dazy Exelle, Tous les droits son réserveé.</small>
      </div>

    </footer>
  )
}

export default Footer