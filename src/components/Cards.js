import React from 'react';
import CloseCards from './CloseCards';
import OpenCards from './OpenCards';

export default function Cards(props) {
    //lógica
    const [showFlashCard, setShowFlashCard] = React.useState(false);
    //UI
    return (
        <>  
            { !showFlashCard ? <CloseCards index={props.index} setShowFlashCard={setShowFlashCard}/> : <OpenCards question={props.question} answer={props.answer}/>}
        </>  
    );
}