import React from 'react';
import BackCard from './BackCard';
import CloseCardRed from './CloseCardRed';
import CloseCardYellow from './CloseCardYellow';
import CloseCardGreen from './CloseCardGreen';
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
            <BackCard answer={props.answer} setShowFlashCard={setShowFlashCard}/>
        );
    } 

    if (showFlashCard === "4") {
        return (
            <CloseCardRed index={props.index} />
        );
    } 
    
    if (showFlashCard === "5") {
        return (
            <CloseCardYellow index={props.index} />
        );
    }
    
    if(showFlashCard === "6") {
        return (
            <CloseCardGreen index={props.index} />
        );
    }
}