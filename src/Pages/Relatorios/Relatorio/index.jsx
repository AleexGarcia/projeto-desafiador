import { useParams, useLocation } from 'react-router-dom'
import React, { useState } from "react";

export default function Relatorio() {

    let relatorio = useLocation().state;
    let numAcertos = 0

    relatorio.bancoDeQuestoes.forEach((questao) => {
        if (questao.resultado === 'Acertou') {
            numAcertos = numAcertos + 1
        }
    })
    
    return (
        <div>
            <div>
                <span>n° de acertos = {numAcertos} / {relatorio.bancoDeQuestoes.length}</span>
            </div>
            <ul>
                {relatorio.bancoDeQuestoes.map((question, index) => (
                    <li key={index}>
                        <p>{index + 1}. {question.question}</p>
                        <p>Alternativa correta: {question.correct_answer}</p>
                        <p>Alternativa escolhida: {relatorio.respostas.questao[index]}</p>
                        <p>{question.resultado}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}