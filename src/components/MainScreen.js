import logo from '../assets/img/logo-pequeno.png';
import Cards from './Cards';

export default function MainScreen() {
    //lógica
    const questions = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4"];

    //UI
    return(
        <div className='main'>
            <header>
                <img src={logo} alt="" />
                <h1>ZapRecall</h1>
            </header>
            <ul className="conteudo">
                {questions.map(question => <Cards pergunta={question}/>)}
            </ul>
            <footer>
                <p>0/4 CONCLUÍDOS</p>
            </footer>
        </div>
    );  
}