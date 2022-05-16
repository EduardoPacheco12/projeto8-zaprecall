export default function CloseCards(props) {
    return(
        <li className="closeCards">
            <p>Pergunta {props.index + 1}</p>
            <ion-icon onClick={() => props.setShowFlashCard(true)} name="play-outline"></ion-icon>
        </li>
    );
}