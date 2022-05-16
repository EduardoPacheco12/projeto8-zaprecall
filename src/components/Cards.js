import React from 'react';
import BackCard from './BackCard';
import CloseCards from './CloseCards';
import FrontCard from './FrontCard';

export default function Cards(props) {
    //lógica
    const [showFlashCard, setShowFlashCard] = React.useState("1");
    //UI
    if (showFlashCard === "1") {
        return (
            <CloseCards index={props.index} setShowFlashCard={setShowFlashCard}/>
        );
        
    } 

    if (showFlashCard === "2") {
        return (
            <FrontCard question={props.question} setShowFlashCard={setShowFlashCard}/>
        )
    }

    if (showFlashCard === "3") {
        return (
            <BackCard setDeckRespondido={props.setDeckRespondido} deckRespondido={props.deckRespondido} answer={props.answer} setShowFlashCard={setShowFlashCard}/>
        );
    } 

    if (showFlashCard === "4") {
        return (
            <li className="closeCards red">
                <p>Pergunta {props.index + 1}</p>
                <ion-icon name="close-circle-sharp"></ion-icon>
            </li>
        );
    } 
    
    if (showFlashCard === "5") {
        return (
            <li className="closeCards yellow">
                <p>Pergunta {props.index + 1}</p>
                <ion-icon name="help-circle-sharp"></ion-icon>
            </li>
        );
        
    }
    
    if(showFlashCard === "6") {
        return (
            <li className="closeCards green">
                <p>Pergunta {props.index + 1}</p>
                <ion-icon name="checkmark-circle-sharp"></ion-icon>
            </li>
        );
        
    }
}