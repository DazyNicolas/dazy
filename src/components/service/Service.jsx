import React from 'react'
import './service.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Service = () => {
  return (
    <section id='service'>
      <h5>Ce que j'offre</h5>
      <h2>Services</h2>
      <div className="container services__container">

      <article className="service">
          <div className="service__head">
            <h3>CONCEPTION UI/UX</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Mise en place de l'interaction de l'utilisateur.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Amelioration de l'experience utilisateur.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Mise en place les besoins des utilisateurs.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Traitement de la disposition graphique de site web</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Concepetion de tous les elements visuels et interactifs de la page</p>
            </li>
          </ul>
      </article>

      {/* END OF UI/UX DESING */}

      <article className="service">
          <div className="service__head">
            <h3> développement web </h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Création de votre site web.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Animaton de votre site web.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Integrateur de maquette web</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Rendre votre site web dynamiquee et adaptable.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
      </article>

      {/** EN OF DEVELOPENT WEB */}

      <article className="service">
          <div className="service__head">
            <h3>Création de contenu</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Optimisé votre contenue web.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Structuré plus claire votre contenue web.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
      </article>
{/** END OF CREATE CONTENT */}
      </div>  
    </section>
  )
}

export default Service