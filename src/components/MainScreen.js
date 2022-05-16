import React from 'react';
import Cards from './Cards';
import Footer from './Footer';
import logo from '../assets/img/logo-pequeno.png';

export default function MainScreen() {
    //lógica
    const frontBackCards = [
        {
            front: "O que é JSX?",
            back: "Uma extensão de linguagem do JavaScript"
        },
        {
            front: "O React é __",
            back: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            front: "Componentes devem iniciar com __",
            back: "letra maiúscula"
        },
        {
            front: "Podemos colocar __ dentro do JSX",
            back: "expressões"
        },
        {
            front: "O ReactDOM nos ajuda __",
            back: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            front: "Usamos o npm para __",
            back: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            front: "Usamos props para __",
            back: "passar diferentes informações para componentes"
        },
        {
            front: "Usamos estado (state) para __",
            back: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ];
    function shuffleArray() {
        for (let i = frontBackCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [frontBackCards[i], frontBackCards[j]] = [frontBackCards[j], frontBackCards[i]];
        }
        return frontBackCards;
    }
    const[deck, setDeck] = React.useState(shuffleArray);
    const[deckRespondido, setDeckRespondido] = React.useState([]);
    //UI
    return(
        <div className='main'>
            <header>
                <img src={logo} alt="Ícone do Zap Recall" />
                <h1>ZapRecall</h1>
            </header>
            <ul className="conteudo">
                {deck.map((question, index) => <Cards setDeckRespondido={setDeckRespondido} deckRespondido={deckRespondido} key={index} index={index} question={question.front} answer={question.back}/> )}
            </ul>
            <Footer tamanho={deckRespondido.length} deckRespondido={deckRespondido}/>
        </div>
    );  
}


