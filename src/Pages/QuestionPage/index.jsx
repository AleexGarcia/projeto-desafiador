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

    function atualizaContador() {
        setNumAcertos(prevState => prevState + 1)
    }
    function atualizaLista() {

    }
    const onSubmit = (inputsValue) => {
        console.log(inputsValue)

       let bancoDeQuestoes = questions.map((question, index) => {
                let questoes = {
                    question: question.question,
                    correct_answer: question.correct_answer,
                    resultado: question.correct_answer == inputsValue.questao[index] ? 'Acertou' : 'Errou'
                }
                return questoes
            })
        let respostas = inputsValue;
         
         navigate('../../../relatorio', { state:{bancoDeQuestoes,respostas} , replace: true })
    }

    const { quantidade } = useParams();
    useEffect(() => {

        async function recebeQuestoes() {
            try {
                const response = await fetch(`https://opentdb.com/api.php?amount=${quantidade}`);
                const data = await response.json();
                const dataResults = data.results;
                dataResults.map(element => {
                    let newQuestion = {
                        category: element.category,
                        difficulty: element.difficulty,
                        question: element.question.replace('&#039;', '\''),
                        correct_answer: element.correct_answer,
                        incorrect_answers: element.incorrect_answers,
                        answers: element.incorrect_answers.concat(element.correct_answer)

                    }
                    setQuestions(prevState => [...prevState, newQuestion])
                });
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
                                register = {register}
                            />
                        ))
                        }
                    </div>
                    <button type="submit">Finalizar</button>
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