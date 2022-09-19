import React from 'react'

import CV from '../../assets/Dazy-Exelle-cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Télecharger mon CV </a>
        <a href='#contact' className='btn btn-primary'> Rester en contacté</a>
    </div>
  )
}

export default CTA