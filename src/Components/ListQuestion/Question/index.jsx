import style from './Question.module.css'
export default function Question(props) {

    return (
        <li className={style.item}>
            <div className={style.item__info}>
                <span>{props.category}</span>
                <span>Difficulty: {props.difficulty}</span>
            </div>
                 <p className={style.item__question}>{props.question}</p>
            <ul className={style.item__answers}>
                {props.answers.sort().map((alternativa, index) => <li className={style.answers} key={index}>{alternativa}</li>)}
            </ul>
        </li>
    )
}

