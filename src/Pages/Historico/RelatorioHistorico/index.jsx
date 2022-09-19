import { useParams, useLocation,useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import MyContext from '../../../contexts/myContext.js'
import styles from './RelatorioHistorico.module.css'

export default function RelatorioHistorico() {
    const [relatoriosGuardados, setRelatoriosGuardados] = useContext(MyContext);
    let posicao = useParams().id;
    let relatorioDados = relatoriosGuardados[posicao];
    let navigate = useNavigate();
    let numAcertos = 0;

    relatorioDados.bancoDeQuestoes.forEach((questao) => {
        if (questao.resultado === 'Acertou') {
            numAcertos = numAcertos + 1
        }
    })

    return (
        <section className={styles.container}>
            <div >
                <span>n° de acertos = {numAcertos} / {relatorioDados.bancoDeQuestoes.length}</span>
                <button 
                onClick={()=> navigate(-1)}
                className={styles.botao}>Voltar</button>
            </div>
            <ul className={styles.list}>
                {relatorioDados.bancoDeQuestoes.map((question, index) => (
                    <li key={index}>
                        <p>{index + 1}. <span dangerouslySetInnerHTML={{ __html: question.question }} /></p>
                        <p>Alternativa correta:<span dangerouslySetInnerHTML={{ __html: question.correct_answer }} /></p>
                        <p>Alternativa escolhida: <span dangerouslySetInnerHTML={{ __html: relatorioDados.respostas.questao[index] }} /></p>
                        <p>{question.resultado}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}