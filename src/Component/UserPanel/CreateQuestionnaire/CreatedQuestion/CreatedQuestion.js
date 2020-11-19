import React from "react";
import CreatedAnswer from "../CreatedAnswer/CreatedAnswer"
import "./CreatedQuestion.css";

const CreatedQuestion = (props) => {

    const mappedAnswers = props.answerList.map(answer => <CreatedAnswer
    answerNumber={answer.answerNumber}
    value={answer.value}
    nextQuestionNumber={answer.nextQuestionNumber}
    />)

    return(
        <div className="QuestionCreated">
            <p className="QuestionValue">Question: {props.value}</p>
            <p className="QuestionProperty">Number of question: {props.questionNumber}</p>

            <div>
                {mappedAnswers}
            </div>
        </div>
    )
}

export default CreatedQuestion;