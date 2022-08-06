import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Mylocalisation from "../components/Mylocalisation";
import Navigation from "../components/Navigation";
import InputFild from "../components/InputFild";
import emailjs from "emailjs-com";
import TextareaFild from "../components/TextareaFild";

const Contact = () => {
  const [values, setValues] = useState({
    name:'',
    user_email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  console.log(values);

  const handleSubmit = (e) =>{
    e.preventDefault();
    emailjs.send('service_qtt1uq7', 'template_6g159kq', values, 'pwvqK1DKdsuzG6cEZ').then(response => {
      console.log('SUCCESS', response);
      setValues({
        name: '',
        user_email:'',
        message:'',
      });
      setStatus('SUCCESS');
    }, error => {
      console.log('FAILD..', error)
    });
  }

  useEffect(()=>{
    if(status === 'SUCCESS'){
      setTimeout(()=>{
        setStatus('')
      }, 3000)
    }
  }, [status])
  
  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  
  return (
    <div>
      <Navigation />
      <div className="mycontact container">
        <div className="tite-contact">
          <h1>Rester en contact</h1>
        </div>
        <div className="localisation">
          <Mylocalisation />

          <div className="contact-content">
            <div className="left-contact">
              <h2>Contact rapide</h2>
              <div className="contact-rapide">
                <ul className="card">
                  <li>
                    <FontAwesomeIcon className="icon" icon={faPhone} />
                    <p>+261 347402412</p>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                    <p>dazyexelle@gmail.com</p>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faLocationDot} />
                    <p>Fianarantsoa-Madagascar</p>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faPhone} />
                    <p>+261 347402412</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rigth-contact">
              <h2>Envoyer un message</h2>
              { status && renderAlert()}
              <div className="formulaire">
                <form onSubmit={handleSubmit}>
                  <InputFild
                    handleChange={handleChange}
                    label="Nom"
                    name="name"
                    type="text"
                    placeholder="votre nom"
                  />
                  <InputFild
                    handleChange={handleChange}
                    label="E-mail"
                    name="user_email"
                    type="email"
                    placeholder="votre adress email"
                  />
                  <TextareaFild
                    handleChange={handleChange}
                    label="Votre message"
                    name="message"
                    placeholder="Ecrire votre message"
                  />
                  <button type="submit" className="btn-send">Envoyer</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderAlert = () => (
  <div className="alertmessage">
    <p>votre message a été envoyé avec succès</p>
  </div>
)
export default Contact;
