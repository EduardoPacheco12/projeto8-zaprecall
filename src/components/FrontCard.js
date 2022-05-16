import React from "react";
import seta from '../assets/img/setinha.png';

export default function FrontCard(props) {
    //lógica
   
    //UI
    return(
        <li className="front">
            <p>{props.question}</p>
            <img onClick={() => props.setShowFlashCard("3")} src={seta} alt="setinha" /> 
        </li> 
    );
}