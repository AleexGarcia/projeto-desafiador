import Question from "../../Components/ListQuestion/Question"
import React, { useState, useEffect } from "react";
import "./QuestionPage.css"


export default function QuestionPage() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {

        async function recebeQuestoes() {
            try {
                const response = await fetch("https://opentdb.com/api.php?amount=5");
                const data = await response.json();
                const dataResults = data.results;
                console.log(dataResults)
                setQuestions(dataResults.forEach(element => {
                    let newQuestion = {
                        category: element.category,
                        difficulty: element.difficulty,
                        question: element.question.replace('&#039;', '\''),
                        correct_answer: element.correct_answer,
                        incorrect_answers: element.incorrect_answers,
                        answers: element.incorrect_answers.concat(element.correct_answer)
                    }
                    return newQuestion
                }));
            } catch (error) {
                console.log(error);
            }
        }

        recebeQuestoes()

    }, []);

    return (

        <div className="taskContainer">
          <Question
             category='Matematica'
             difficulty='Facil'
             question='Quanto é 1 + 1 ?'
             answers= {[1,2,3,4]}
          />
         

        </div>
    )
}