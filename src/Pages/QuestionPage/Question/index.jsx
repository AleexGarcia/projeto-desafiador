import style from './Question.module.css'
import React from 'react';

export default function Question(props) {
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
                    <li className={style.answers} key={index}>
                        <input value={alternativa} type="radio" name={`Question:${props.id}`} id={`${props.id}:${index}`} />
                        <label htmlFor={`${props.id}:${index}`}>{alternativa}</label>
                    </li>)}
            </ul>
            <button
                onClick={(e) => {
                 let ListaRespostas = e.target.previousSibling.childNodes;
                 ListaRespostas.forEach(li =>{
                   if(li.firstChild.checked){
                        if(li.firstChild.value === props.correct_answer ){
                           props.atualizaContador();
                           e.target.textContent = 'Acertou';
                        }else{
                            e.target.textContent = 'Errou';
                        }
                        ListaRespostas.forEach(li =>{
                            li.firstChild.disabled = true;
                        })
                   }

                 })
                 
                }}
                className={style.confirmar}
                >Confirmar
            </button>
        </li>
    )
}

