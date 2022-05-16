import React from "react";
import CloseCards from "./CloseCards";

function Selectors(props) {
    return (
        <div onClick={props.click} className={props.color}>
            <h4>{props.text}</h4>
        </div>
    );
}

export default function BackCard(props) {
    //UI
    return(
        <li className='back'>
            <p>{props.answer}</p> 
            <Selectors click={() => props.setShowFlashCard("4")} color ="incorrect" text="Não lembrei"/>
            <Selectors click={() => props.setShowFlashCard("5")} color ="neutral" text="Quase não lembrei"/>
            <Selectors click={() => props.setShowFlashCard("6")} color ="correct" text="Zap!"/> 
        </li>
    );
}