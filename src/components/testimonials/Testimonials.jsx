import React from 'react'
import './testimonials.css'
import AVATAR from '../../assets/maki.jpg'
import AVATAR1 from '../../assets/maki1.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [

  {
    avatar:AVATAR,
    name: 'Dazy Exelle',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi officia, illo suscipit dolores ullam aliquam? Facere, beatae ex, repellendus consectetur maxime deleniti nisi, quasi et fugiat laudantium quaerat corporis praesentium!'
  },
  {
    avatar:AVATAR1,
    name: 'Dazy Exelle',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi officia, illo suscipit dolores ullam aliquam? Facere, beatae ex, repellendus consectetur maxime deleniti nisi, quasi et fugiat laudantium quaerat corporis praesentium!'
  },
  {
    avatar:AVATAR,
    name: 'Dazy Exelle',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi officia, illo suscipit dolores ullam aliquam? Facere, beatae ex, repellendus consectetur maxime deleniti nisi, quasi et fugiat laudantium quaerat corporis praesentium!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Avis du client</h5>
      <h2>Témoignages</h2>
       <Swiper className="container testimonials__container"
       // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        
       
       >

        
         {
          data.map (({avatar, name , review}, index) =>{
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <samll className='client__review'>{review}</samll>
            </SwiperSlide>
            )
          })
         }
       
        </Swiper>   
    </section>
  )
}

export default Testimonials