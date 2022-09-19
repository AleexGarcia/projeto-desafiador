import Question from "./Question"
import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form'
import styles from "./QuestionPage.module.css"
import { useParams, useNavigate } from 'react-router-dom'


export default function QuestionPage() {
    const [questions, setQuestions] = useState([]);
    const [numAcertos, setNumAcertos] = useState(0);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const [mensagem, setMensagem] = useState('');
    function atualizaContador() {
        setNumAcertos(prevState => prevState + 1)
    }
   
    const onSubmit = (inputsValue) => {
        
        if (inputsValue.questao.every(element => element != null)) {
            let bancoDeQuestoes = questions.map((question, index) => {
                let questoes = {
                    question: question.question,
                    correct_answer: question.correct_answer,
                    resultado: question.correct_answer == inputsValue.questao[index] ? 'Acertou' : 'Errou'
                }
                return questoes
            })
            let respostas = inputsValue;
            navigate('../../../relatorio', { state: { bancoDeQuestoes, respostas }, replace: true })
        }else{
            
            setMensagem ('Deve responder todas as questões');
        }


    }

    const { quantidade } = useParams();
    useEffect(() => {

        async function recebeQuestoes() {
            try {
                const response = await fetch(`https://opentdb.com/api.php?amount=${quantidade}`);
                const data = await response.json();
                const dataResults = data.results;
                setQuestions(dataResults.map(element => {
                    let newQuestion;
                    return  newQuestion = {
                        category: element.category,
                        difficulty: element.difficulty,
                        question: element.question,
                        correct_answer: element.correct_answer,
                        incorrect_answers: element.incorrect_answers,
                        answers: element.incorrect_answers.concat(element.correct_answer)

                    }                    
                }))
            } catch (error) {
                console.log(error);
            }
        }

        recebeQuestoes()

    }, []);

    return (
        <section >
            <form onSubmit={handleSubmit(onSubmit)} className={styles.questionPage}>

                <div>
                    <div className={styles.taskContainer}>

                        {questions.map((question, index) => (
                            <Question
                                key={index}
                                id={index}
                                category={question.category}
                                difficulty={question.difficulty}
                                question={question.question}
                                answers={question.answers}
                                correct_answer={question.correct_answer}
                                incorrect_answers={question.incorrect_answers}
                                atualizaContador={atualizaContador}
                                register={register}
                            />
                        ))
                        }
                    </div>
                    <button 
                    className={styles.botao}
                     type="submit">Finalizar</button>
                     
                     <span className={styles.mensagem}>{mensagem}</span>
                </div>

                <div className={styles.infoContainer}>
                    <ul className={styles.questionList}>
                        {
                            questions.map((element, index) => {
                                return <li key={index}><span>{index + 1}</span></li>
                            })
                        }

                    </ul>
                    <div className={styles.relatorioContainer}>
                        <span>Contador:<span >{numAcertos}</span> / {questions.length}</span>
                    </div>
                </div>
            </form>
        </section>
    )
}