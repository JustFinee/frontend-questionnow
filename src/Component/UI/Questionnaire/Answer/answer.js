import React from 'react';
import "./Answer.css";

const answer = (props) => {
    return(
        <h4 className="AnswerContent">{props.value}</h4>
    )
}

export default answer;