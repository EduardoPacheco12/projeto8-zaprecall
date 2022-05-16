import seta from '../assets/img/setinha.png';

export default function FrontCard(props) {
    return(
        <div className='front'>
            <p>{props.question}</p>
            <img onClick={() => props.setShowAnswer(true)} src={seta} alt="setinha" /> 
        </div>
    );
}