import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/service/Service'
import Portofolio from './components/portofolio/Portofolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contacte'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <About/>
      <Experience/>
      <Service/>
      <Portofolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App