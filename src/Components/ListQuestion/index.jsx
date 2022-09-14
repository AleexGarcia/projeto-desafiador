import Question from "./Question";
import React, { useState, useEffect } from "react";

export default function ListQuestion() {

    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5')
            .then(response => response.json())
            .then(data => setQuestions(data.results))
    }, [])
    console.log(questions)

    return (
        <ul>
            {questions.map((question, index) => (
                <Question
                    category={question.category}
                    difficulty={question.difficulty}
                    question={question.question}
                    correct_answer= {question.correct_answer}
                    incorrect_answers={question.incorrect_answers}
                    key={index}
                />
            ))


            }
        </ul>
    )
}

