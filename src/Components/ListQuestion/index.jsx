import './listQuestions.css'
import Question from "./Question";
import React, { useState, useEffect } from "react";

export default function ListQuestion() {

    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        async function recebeQuestoes() {
            const response = await fetch('https://opentdb.com/api.php?amount=3');
            const data = await response.json();
            const dataResults = await data.results;
           
            dataResults.forEach(element => {
                let newQuestion = {
                    category: element.category,
                    type: element.type,
                    difficulty: element.difficulty,
                    question: element.question,
                    correct_answer: element.correct_answer,
                    incorrect_answers: element.incorrect_answers,
                    answers: element.incorrect_answers.concat(element.correct_answer)
                }
                setQuestions(prevState => [...prevState, newQuestion]);
            });
        }
        recebeQuestoes()
    }, [])


    return (
        <ul className="listQuestions">
            {questions.map((question, index) => (
                <Question
                    category={question.category}
                    difficulty={question.difficulty}
                    question={question.question}
                    answers={question.answers}
                    key={index}
                />
            ))


            }
        </ul>
    )
}

