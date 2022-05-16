export default function CloseCards(props) {
    //UI
    return(
        <li className="closeCards">
            <p>Pergunta {props.index + 1}</p>
            <ion-icon onClick={() => props.setShowFlashCard("2")} name="play-outline"></ion-icon>
        </li>
    );
}