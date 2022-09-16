import Question from "../../Components/ListQuestion/Question"
import React, { useState, useEffect } from "react";
import styles from "./QuestionPage.module.css"
import {Link} from 'react-router-dom';

export default function QuestionPage() {

    const [questions, setQuestions] = useState([]);
    var quantidade = 5;
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
                { 
                    <Question
                        category={questions[1].category}
                        difficulty={questions[1].difficulty}
                        question={questions[1].question}
                        answers={questions[1].answers}
                    />
                } 
                </div>
                <div className={styles.controlesContainer}>
                    <button className={styles.confirmar}>Confirmar</button>
                    <div>
                        <button className={styles.anterior}>Anterior</button>
                        <button className={styles.proxima}>Próxima</button>
                    </div>
                </div>
            </div>

            <div className={styles.infoContainer}>
                <ul className={styles.questionList}>
                    <li>
                        <a href="">1</a>
                    </li>
                </ul>
                <div className={styles.relatorioContainer}>
                    <span>Contador: 1 / 1</span>
                </div>
            </div>
        </section>
    )
}