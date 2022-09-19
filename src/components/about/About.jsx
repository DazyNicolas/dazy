import React from 'react'
import './about.css'
import Dazy1 from '../../assets/test.jpg'
import {FaAward} from 'react-icons/fa'
import {RiUserSearchLine} from 'react-icons/ri'
import {AiFillFolderOpen} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
        <h5>Voir plus sur moi</h5>
        <h2>A-propos de moi</h2>

        <div className="container about__container">
          <div className="about__dazy">
              <div className="about__dazy-image">
                <img src={Dazy1} alt='dazy'/>
              </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>Full autodidact</small>
              </article>
              <article className='about__card'>
                <RiUserSearchLine className='about_icon'/>
                <h5>Clients</h5>
                <small>Soyez mon premier client</small>
              </article>
              <article className='about__card'>
                <AiFillFolderOpen className='about_icon'/>
                <h5>Projet</h5>
                <small>Soyez le premier</small>
              </article>
            </div>

            <p>Né le 20 avril 1992 à Madagascar. Après quatre ans d’études en Droit, en découvrent l'informatique et la pension en langage informatique, j'ai décidé de suivre une formation en informatique bureautique, ainsi qu'une formation en langage informatique. Et je veux en savoir plus sur le domaine du développement web.</p>

            <a href='#contact' className='btn btn-primary'>Parlons</a>

          </div>
        </div>
    </section>
  )
}

export default about