import { useParams, useLocation } from 'react-router-dom'
import React, { useContext } from 'react'
import MyContext from '../../../contexts/myContext.js'





export default function RelatorioHistorico() {
    const [relatoriosGuardados, setRelatoriosGuardados] = useContext(MyContext);
    let posicao = useParams().id;
   let relatorioDados = relatoriosGuardados[posicao];

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