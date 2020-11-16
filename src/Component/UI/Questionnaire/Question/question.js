import React from 'react';
import "./Question.css";
import Answer from "../Answer/answer";

const question = (props) => {

    const answers = props.answerList.map(answer => <Answer key={answer.answerNumber} value={answer.value}/>)

    return (
        <>
            <h2 className="Question">{props.value}</h2>
            <div className="Answer">{answers}</div>
        </>
    )
}

export default question;