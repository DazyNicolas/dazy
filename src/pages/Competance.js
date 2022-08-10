import React from 'react';
import Navigation from '../components/Navigation';
import MycvFile from '../components/MycvFile';

const Competance = () => {
    return (
        <div>
            <Navigation/>
            <div className='Mycompetence container'>
                <div className='title-competence'>
                 <h1>Mes Compétances</h1>
                 <p>Des compétences à votre service</p>
                </div>
            <div className='content-competence'>
                <div className='left-conpetence'>
                    <h2>Compétences Complementaire</h2>
                    <ul>
                        <li>
                            <div data-content="Framework Laravel" className='barlaravel'></div>
                        </li>
                        <li>
                            <div data-content="Framework Symfony" className='barsymfony'></div>
                        </li>
                        <li>
                            <div data-content="Librairie Bootstrap" className='barstrap'></div>
                        </li>
                        <li>
                            <div data-content="Librairie React" className='barract'></div>
                        </li>
                        <li>
                            <div data-content="Position Autodidacte" className='barauto'></div>
                        </li>
                        
                    </ul>
                    <h2>Autre</h2>

                    
                    <ul>
                        <li>
                            <div data-content="GitHub" className='bargithub'></div>
                        </li>
                        <li>
                            <div data-content="MysQl" className='barmysql'></div>
                        </li>
                       
                    </ul>
                    <hr/>
                    <div className='bottom-text'>
                       <p>“N'importe quel idiot peut écrire du code qu'un ordinateur peut comprendre.
                          Les bons programmeurs écrivent du code que les humains peuvent comprendre.” - Martin Fowler.
                        </p>

                        <MycvFile/>
                     </div>

                </div>
                <div className='right-competence'>
                    <h2>Compétences en développement</h2>
                    <ul>
                        <li>
                            <div data-content="HTML" className='barhtml'></div>
                        </li>
                        <li>
                            <div data-content="CSS" className='barcss'></div>
                        </li>
                        <li>
                            <div data-content="JavaScript" className='barjs'></div>
                        </li>
                        <li>
                            <div data-content="Jquery" className='barjq'></div>
                        </li>
                        <li>
                            <div data-content="PHP" className='barphp'></div>
                        </li>
                    </ul>

                    <h2>Compétences en web desing</h2>
                    <ul>
                        <li>
                            <div data-content="Figma" className='barfigma'></div>
                        </li>
                        <li>
                            <div data-content="AdobXd" className='barxd'></div>
                        </li>
                    </ul>

                    <hr/>

                    <div className='bottom-text'>
                            <p>
                            Je suis ouvert à toute proposition que vous me proposerez, je suis impatient d'intégrer votre entreprise.
                            Partager mes compétences au cours de ma formation et de mes recherches personnelles et aller au-delà de mes limites dans mon travail.
                            </p>
                            <strong>
                            Si vous avez besoin d'aide, n'hésitez pas à me contacter, j'ai hâte de vous aider et d'élargir mes compétences.
                            </strong>
                    </div>
            

                </div>
                
            </div>
            
            </div>
        </div>
    );
};

export default Competance;