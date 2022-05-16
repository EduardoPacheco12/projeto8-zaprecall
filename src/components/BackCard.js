import React from "react";

function Selectors(props) {
    return (
        <div onClick={props.click} className={props.state}>
            <h4>{props.text}</h4>
        </div>
    );
}

export default function BackCard(props) {
    //lógica
    
    //UI
    return(
        <li className='back'>
            <p>{props.answer}</p> 
            <Selectors click={() => {props.setShowFlashCard("4"); props.setDeckRespondido([...props.deckRespondido,{nome:"close-circle-sharp", color:"red"}])}}   state = "incorrect"   text="Não lembrei"/>
            <Selectors click={() => {props.setShowFlashCard("5"); props.setDeckRespondido([...props.deckRespondido, {nome:"help-circle-sharp", color:"yellow"}])}} state ="neutral"  text="Quase não lembrei"/>
            <Selectors click={() => {props.setShowFlashCard("6"); props.setDeckRespondido([...props.deckRespondido,{nome:"checkmark-circle-sharp", color:"green" }])}} state ="correct" text="Zap!"/> 
        </li>
    );
}
