import React from 'react'
import './contacte.css'
import{BiEnvelope} from 'react-icons/bi'
import{RiMessengerLine} from 'react-icons/ri'
import{FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contacte = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s4znftj', 'template_t9ao4bf', form.current, 'tXnkHmavxyjWAf_ur')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Entrer en contact</h5>
      <h2>Contact moi</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
               <BiEnvelope className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>dazyexelle@gmail.com</h5>
              <a href='mailto:dazyexelle@gmail.com'>Envoyer un message</a>
          </article>
          <article className="contact__option">
               <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Dazy Exelle</h5>
              <a href='https://m.me/dazy.nico.9'>Envoyer un message</a>
          </article>
          <article className="contact__option">
               <FaWhatsapp className='contact__option-icon'/>
              <h4>Dazy Exelle</h4>
              <h5>+261347402412</h5>
              <a href='https://wa.me/+261347402412'>Envoyer un message</a>
          </article>
        </div>

        {/** END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Votre nom complet' required />
          <input type="email" name='email' placeholder='Votre adress email' required />
          <textarea type="text" name='message' rows="7" placeholder='Votre message ici' required ></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer le message </button>
        </form>
      </div>
    </section>
  )
}

export default Contacte