function Selectors(props) {
    return (
        <div className={props.color}>
            <h4>{props.text}</h4>
        </div>
    );
}

export default function BackCard(props) {
    return(
        <div className='back'>
            <p>{props.answer}</p> 
            <Selectors color ="red" text="Não lembrei"/>
            <Selectors color ="yellow" text="Quase não lembrei"/>
            <Selectors color ="green" text="Zap!"/> 
        </div>
    );
}