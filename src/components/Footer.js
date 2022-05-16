import feliz from '../assets/img/party.png';
import triste from '../assets/img/sad.png'

export default function Footer(props) {
    //lógica
    let contador = 0;
    if(props.tamanho == 8) {
        for(let i = 0; i < props.tamanho; i++) {
            if(props.deckRespondido[i].nome == "close-circle-sharp") {
                contador += 1;
            }
        }
    }

    //UI
    if(props.tamanho < 8) {
        return (
            <footer className="footerPequeno">
                <p>{props.tamanho}/8 CONCLUÍDOS</p>
                <div>
                    {props.deckRespondido.map((icon, index) =><ion-icon key={index} name={icon.nome}></ion-icon> )}
                </div>
            </footer>
        );
    }

    if (props.tamanho == 8) {
        if(contador === 0) {
            return (
                <footer className="footerGrande">
                    <span>
                        <img src={feliz} alt="emoji de festa" />
                        <h3>Parabéns</h3>
                    </span>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                    <p>8/8 CONCLUÍDOS</p>
                    <div>
                        {props.deckRespondido.map((icon, index) =><ion-icon key={index} name={icon.nome}></ion-icon> )}
                    </div>
                </footer>
            );
        } else {
            return (
                <footer className="footerGrande">
                    <span>
                        <img src={triste} alt="emoji triste" />
                        <h3>Putz...</h3>
                    </span>
                    <p>Ainda faltam alguns...Mas não desanime!</p>
                    <p>8/8 CONCLUÍDOS</p>
                    <div>
                        {props.deckRespondido.map((icon, index) =><ion-icon key={index} name={icon.nome}></ion-icon> )}
                    </div>
                </footer>
            );
        }   
    }
}