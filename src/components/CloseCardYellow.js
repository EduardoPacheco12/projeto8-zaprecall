export default function CloseCardYellow(props) {
    return (
        <li className="closeCards yellow">
            <p>Pergunta {props.index + 1}</p>
            <ion-icon name="help-circle-sharp"></ion-icon>
        </li>
    );
}