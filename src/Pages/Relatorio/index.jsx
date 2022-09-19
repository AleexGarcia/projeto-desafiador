import { useParams, useLocation } from 'react-router-dom'
import React, { useState, useContext } from "react";
import MyContext from '../../contexts/myContext';



export default function Relatorio() {

    let relatorioDados = useLocation().state;
    let vetorDados = [relatorioDados];
    const [relatoriosGuardados, setRelatoriosGuardados] = useContext(MyContext);

    if (relatoriosGuardados != '') {

        localStorage.setItem("relatorios", JSON.stringify((relatoriosGuardados.concat(vetorDados))));

    } else {
        localStorage.setItem("relatorios", JSON.stringify(vetorDados));
    }

    let numAcertos = 0;

    relatorioDados.bancoDeQuestoes.forEach((questao) => {
        if (questao.resultado === 'Acertou') {
            numAcertos = numAcertos + 1
        }
    })

    return (
        <div>
            <div>
                <span>n° de acertos = {numAcertos} / {relatorioDados.bancoDeQuestoes.length}</span>
            </div>
            <ul>
                {relatorioDados.bancoDeQuestoes.map((question, index) => (
                    <li key={index}>
                        <p>{index + 1}. {question.question}</p>
                        <p>Alternativa correta: {question.correct_answer}</p>
                        <p>Alternativa escolhida: {relatorioDados.respostas.questao[index]}</p>
                        <p>{question.resultado}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}