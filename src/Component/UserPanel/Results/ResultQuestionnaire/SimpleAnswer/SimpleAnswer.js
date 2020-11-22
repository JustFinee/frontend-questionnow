import React from 'react';
import "./SimpleAnswer.css";

const SimpleAnswer = (props) => {
    return(
        <div className="SimpleAnswer">
            {props.answerNumber}. {props.value}
        </div>
    )
}

export default SimpleAnswer;