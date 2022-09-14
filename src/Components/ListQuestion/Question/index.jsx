import style from './Question.module.css'
export default function Question(props) {

    return (
        <li className={style.item}>
            <div className={style.item__info}>
                <span>{props.category}</span>
                <span>Difficulty: {props.difficulty}</span>
            </div>
            <p className={style.item__question}>{props.question}</p>
            <ul
                className={style.item__answers}
                onClick={e => console.log(e.target.textContent)}
            >
                {props.answers.sort().map((alternativa, index) =>
                    <li className={style.answers} key={index}>
                        <input type="radio" name={`Question: ${props.id}`} id={`Question:${props.id}altenativa:${index}`} />
                        <label htmlFor={`Question:${props.id}altenativa:${index}`}>{alternativa}</label>
                    </li>)}
            </ul>
        </li>
    )
}

