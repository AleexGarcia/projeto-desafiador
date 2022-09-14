
export default function Question(props) {

    return (
        <li>
            <p>{props.category}</p>
            <p>{props.difficulty}</p>
            <p>{props.question}</p>
            <ul>
                <li>{props.correct_answer}</li>
                {props.incorrect_answers.map((alternativa,index) => <li key={index}>{alternativa}</li> )}
            </ul>
        </li>
    )
}

