import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faCartShopping} from '@fortawesome/free-solid-svg-icons';


function Cartwidget(){
    return(
        <div className="Cart">
        
        <FontAwesomeIcon icon={faCartShopping}/> 
        <span>3</span>
        </div>
    );

}


export default Cartwidget;