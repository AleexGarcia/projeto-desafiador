import { useParams, useLocation, useNavigate } from 'react-router-dom'
import React, { useState, useContext } from "react";
import MyContext from '../../contexts/myContext';
import styles from './Relatorio.module.css'


export default function Relatorio() {
    let navigate = useNavigate();
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
        <section className={styles.container}>
            <div>
                <span>n° de acertos = {numAcertos} / {relatorioDados.bancoDeQuestoes.length}</span>
                <button
                    onClick={() => {
                        navigate('/', { replace: true })
                        location.reload()
                    }}
                    className={styles.botao}>
                    Pagina Inicial
                </button>
            </div>
            <ul className={styles.list}>
                {relatorioDados.bancoDeQuestoes.map((question, index) => (
                    <li key={index}>
                        <p>{index + 1}. <span dangerouslySetInnerHTML={{ __html: question.question }} /></p>
                        <p>Alternativa correta: <span dangerouslySetInnerHTML={{ __html: question.correct_answer }} /></p>
                        <p>Alternativa escolhida: <span dangerouslySetInnerHTML={{ __html: relatorioDados.respostas.questao[index] }} /></p>
                        <p>{question.resultado}</p>
                    </li>
                    
                ))}
            </ul>
        </section>

    )
}
