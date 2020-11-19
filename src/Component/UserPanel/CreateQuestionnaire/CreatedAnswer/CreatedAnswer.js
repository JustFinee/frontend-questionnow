import React from "react";
import "./CreatedAnswer.css";

const CreatedAnswer = (props) => {
    return (
        <div className="AnswerCreated">
            <p className="AnswerValue">Answer: {props.value}</p>
            <p>Answer Number: {props.answerNumber}</p>
            <p>Next Question number: {props.nextQuestionNumber}</p>
        </div>
    )
}

export default CreatedAnswer;