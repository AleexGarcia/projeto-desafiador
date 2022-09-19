import { useParams, useLocation } from 'react-router-dom'

export default function Relatorio() {

    let relatorio = useLocation().state;

    return (
        <div>
            <div>
                <span>n° de acertos = {relatorio.numAcertos}/{relatorio.bancoDeQuestoes.length}</span>
            </div>
            <ul>
                {relatorio.bancoDeQuestoes.map((question,index) => (
                    <li key={index}>
                        <p>{index + 1}. {question.question}</p>
                        <p>Resposta correta: {question.correct_answer}</p>
                        <p>Resposta marcada: {relatorio.respostas.respostas[index]}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}