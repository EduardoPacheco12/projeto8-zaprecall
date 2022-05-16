import logo from '../assets/img/logo.png';

export default function HomeScreen({setInit}) {
    //lógica

    
    //UI
    return(
        <div className="home">
            <img src={logo} alt="Ícone do Zap Recall" />
            <h1>Zap Recall</h1>
            <button onClick={() => setInit(true)}><p>Iniciar Recall!</p></button>
        </div>
    );
}