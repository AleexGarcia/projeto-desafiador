import style from './Question.module.css'
import React,{useState} from 'react';

export default function Question(props) {
    const [resultado, setResultado] = useState('')
    return (

        <li className={style.item}>
            <div className={style.item__info}>
                <span>{props.category}</span>
                <span>Difficulty: {props.difficulty}</span>
            </div>
            <p className={style.item__question}>{props.id + 1} - {props.question}</p>

            <ul
                className={style.item__answers}
            >
                {props.answers.sort().map((alternativa, index) =>
                    <li className={style.answers} key={index} >
                        <input
                            value={alternativa} 
                            type="radio"
                            {...props.register(`questao.${props.id}`)}
                            name={`questao.${props.id}`}
                            id={`${props.id}_${index}`}
                        />
                        <label htmlFor={`${props.id}_${index}`}>{alternativa}</label>
                    </li>)}
            </ul>
            <button
                type='button'
                onClick={(e) => {
                    let ListaRespostas = e.target.previousSibling.childNodes;
                    ListaRespostas.forEach(li => {
                        if (li.firstChild.checked) {
                            if (li.firstChild.value === props.correct_answer) {
                                props.atualizaContador();
                                setResultado('Acertou!!!')
                                e.target.style.display = 'none'
                                
                            } else {
                                e.target.style.display = 'none'
                                setResultado('Errou!!!')

                            }
                            ListaRespostas.forEach(li => {
                                li.firstChild.disabled = true;
                            })

                        }

                    })

                }}
                className={style.confirmar}
            >Confirmar
            </button>
            <span className={style.mensagem}>{resultado}</span>
        </li>

    )
}

