import React, {useState,useEffect } from 'react'
import './portofolio.css'
import IMG1 from '../../assets/image-1.jpg'
import { urlFor, client } from '../../clients'


const Portofolio = () => {

  const [portofolios, setPortofolios] = useState([]);
      useEffect(() => {
        const query = '*[_type == "portofolios"]';

        client.fetch(query).then((data)=>setPortofolios(data));
        
      },[]);


  return (
    <section id='portofolio'>
      <h5>Mes travaux récents</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
       {
        portofolios.map((portofolio, index) => {
          return (
            <article className="portofolio__item" key={portofolio.index}>
            <div className="portofolio__item-image">
              <img src={urlFor(portofolio.image)} alt={portofolio.title} />
            </div>
            <h3>{portofolio.title}</h3>
          <div className="portofolio__item-cta">
            <a href={portofolio.github} className='btn' target='_blank'>Github</a>
            <a href={portofolio.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
          )
        }) 

        
       }
      </div>

    </section>
  )
}

export default Portofolio