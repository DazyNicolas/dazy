import React from 'react'
import {BsFacebook} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/dazy.nico.9">
            <BsFacebook className='header__social-icon'/>
        </a>
        <a href="https://github.com/DazyNicolas/dazy">
            <AiFillGithub className='header__social-icon'/>
        </a>
        <a href="https://github.com/DazyNicolas/dazy">
            <AiFillLinkedin className='header__social-icon'/>
        </a>
    </div>
  )
}

export default HeaderSocials