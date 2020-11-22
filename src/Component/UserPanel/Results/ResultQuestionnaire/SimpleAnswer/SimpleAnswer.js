import React from 'react';
import "./SimpleAnswer.css";

const SimpleAnswer = (props) => {
    return(
        <div className="SimpleAnswer">
            {props.answerNumber}. {props.value}
            <span className="AnswerColor" style={{backgroundColor: props.color}}></span>
            <p>Counted answers: {props.counter}</p>
        </div>
    )
}

export default SimpleAnswer;