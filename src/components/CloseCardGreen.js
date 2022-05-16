export default function CloseCardGreen(props) {
    return (
        <li className="closeCards green">
            <p>Pergunta {props.index + 1}</p>
            <ion-icon name="checkmark-circle-sharp"></ion-icon>
        </li>
    );
}