import React from "react";
import Navigation from "../components/Navigation";
import Social from "../components/Social";
import Monprofil from "../assets/img/maki.jpg";
import Myboutton from "../components/Myboutton";

import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="homepages">
        <div className=" container  container-flex1">
          <div className="content-left">
            <h1> Salama, Je m'appel <strong>Dazy Exelle</strong>  </h1>

            <p>Je suis un concepteur Web Desingner et Developer</p>

            <h2>Full autodidacte</h2>
            <NavLink to="/apropos">
             <Myboutton/>
            </NavLink>
          </div>

          <div className="content-right">
            <img src={Monprofil} alt="" />
          </div>
        </div>
      
      </div>
      <Social/>
     
    </div>
  );
};

export default Home;
