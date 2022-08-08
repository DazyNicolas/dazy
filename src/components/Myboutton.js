import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

const Myboutton = () => {
  return (
    <div>
      <div className="mybutton">
      <button className="cotent-button">Commencer</button>
      <FontAwesomeIcon icon={faRightLong}/>
      </div>
      
    </div>
  );
};

export default Myboutton;
