import React from 'react'
import './experience.css'
import {BsFillCartCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>Quelles compétences j'ai </h5>
      <h2>Mes Experiences</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
            <h3>Compétence  Front-End</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsFillCartCheckFill className="experience__details-icon" />
               <div>
                  <h4>HTML</h4>
                  <small className='text-light skill-bar'>
                    <span className='skill-per'>
                        <span className='tooltip'>80%</span>
                    </span>
                  </small>
               </div>
              </article>
              <article className='experience__details'>
                <BsFillCartCheckFill className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light skill-bar'>
                    <span className='skill-per css'>
                        <span className='tooltip'>70%</span>
                    </span>
                  </small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillCartCheckFill className="experience__details-icon" />
                <div>
                <h4>JavaScript</h4>
                <small className='text-light skill-bar'>
                    <span className='skill-per javascript'>
                        <span className='tooltip'>50%</span>
                    </span>
                  </small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillCartCheckFill className="experience__details-icon" />
               <div>
               <h4>Bootstrap</h4>
               <small className='text-light skill-bar'>
                    <span className='skill-per bootstrap'>
                        <span className='tooltip'>60%</span>
                    </span>
                  </small>
               </div>
              </article>
              <article className='experience__details'>
                <BsFillCartCheckFill className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                  <small className='text-light skill-bar'>
                    <span className='skill-per react'>
                        <span className='tooltip'>40%</span>
                    </span>
                  </small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillCartCheckFill className="experience__details-icon" />
               <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>
                    <span className='skill-per tailwind'>En attente</span>
                  </small>
               </div>
              </article>
            </div>
        </div>

{/*END OF FRONTEND*/}

        <div className="experience__backend">
        <h3>Compétence  Back-End/Framework</h3>
            <div className="experience__content">
              
              <article className='experience__details'>
                <BsFillCartCheckFill className="experience__details-icon" />
               <div>
                 <h4>PHP</h4>
                 <small className='text-light skill-bar'>
                    <span className='skill-per php'>
                        <span className='tooltip'>40%</span>
                    </span>
                  </small>
               </div>
              </article>
              <article className='experience__details'>
                <BsFillCartCheckFill className="experience__details-icon" />
               <div>
               <h4>MySQL</h4>
               <small className='text-light skill-bar'>
                    <span className='skill-per mysql'>
                        <span className='tooltip'>50%</span>
                    </span>
                  </small>
               </div>
              </article>
              <article className='experience__details'>
                <BsFillCartCheckFill className="experience__details-icon" />
               <div>
               <h4>Laravel</h4>
               <small className='text-light skill-bar'>
                    <span className='skill-per laravel'>
                        <span className='tooltip'>50%</span>
                    </span>
                  </small>
               </div>
              </article>
              <article className='experience__details'>
                <BsFillCartCheckFill className="experience__details-icon" />
               <div>
               <h4>Symfony</h4>
               <small className='text-light skill-bar'>
                    <span className='skill-per symfony'>
                        <span className='tooltip'>50%</span>
                    </span>
                  </small>
               </div>
              </article>

              <article className='experience__details'>
                <BsFillCartCheckFill className="experience__details-icon"  />
              <div>
                 <h4>Node js</h4>
                <small className='text-light'>Moyen</small>
              </div>
              </article>
              <article className='experience__details'>
                <BsFillCartCheckFill className="experience__details-icon" />
               <div>
               <h4>MongoDB</h4>
                <small className='text-light'>En attente</small>
               </div>
              </article>
            </div>
        </div>

      </div>
    </section>
  )
}

export default experience