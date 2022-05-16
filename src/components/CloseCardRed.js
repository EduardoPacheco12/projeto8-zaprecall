export default function CloseCardRed(props) {
    return (
        <li className="closeCards red">
            <p>Pergunta {props.index + 1}</p>
            <ion-icon name="close-circle-sharp"></ion-icon>
        </li>
    );
}