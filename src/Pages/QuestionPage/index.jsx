import Question from "./Question"
import React, { useState, useEffect, useContext } from "react";
import styles from "./QuestionPage.module.css"
import {useParams}from 'react-router-dom'


export default function QuestionPage() {
    const [questions, setQuestions] = useState([]);
    const [numAcertos, setNumAcertos] = useState(0);
    
    function atualizaContador(){
        setNumAcertos(prevState => prevState + 1)
    }
    function atualizaLista(){

    }

    const {quantidade} = useParams();
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
        <section className={styles.questionPage}>
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
                            atualizaContador = {atualizaContador}
                        />
                    ))
                    }


                </div>

            </div>

            <div className={styles.infoContainer}>
                <ul className={styles.questionList}>
                    {
                        questions.map((element, index) => {
                            return <li onClick={e => console.log(e)} key={index}><span>{index + 1}</span></li>
                        })
                    }

                </ul>
                <div className={styles.relatorioContainer}>
                    <span>Contador:<span >{numAcertos}</span> / {questions.length}</span>
                </div>
            </div>
        </section>
    )
}