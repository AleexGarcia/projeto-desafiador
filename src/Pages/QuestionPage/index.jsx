import Question from "./Question"
import React, { useState, useEffect } from "react";
import styles from "./QuestionPage.module.css"
import { Link } from 'react-router-dom';

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
                    {questions.map((question, index) => (
                        <Question
                            key={index}
                            id={index}
                            category={question.category}
                            difficulty={question.difficulty}
                            question={question.question}
                            answers={question.answers}
                        />
                    ))
                    }
                </div>

            </div>

            <div className={styles.infoContainer}>
                <ul className={styles.questionList}>
                    {
                        questions.map((element, index) => {
                            return <li onClick={e => console.log(e)} key={index}><Link to={element}>{index + 1}</Link></li>
                        })
                    }

                </ul>
                <div className={styles.relatorioContainer}>
                    <span>Contador: 0 / {questions.length}</span>
                </div>
            </div>
        </section>
    )
}