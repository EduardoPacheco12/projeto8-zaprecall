import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import React from "react";

export default function OpenCards(props) {
    //lógica
    const [showAnswer, setShowAnswer] = React.useState(false);
    //UI
    return(
        <li className="openCards">
            {!showAnswer ? <FrontCard question={props.question} setShowAnswer={setShowAnswer}/> : <BackCard answer={props.answer} />}
        </li> 
    );
}