import React from "react";
import "./CreatedAnswer.css";
import {useState} from "react"
import ChangeFullAnswerInput from "./ChangeFullAnswerInput/ChangeFullAnswerInput";

const CreatedAnswer = (props) => {
    const [answerChange, setAnswerChange] = useState(false);
    const [answerValueInput, setAnswerValueInput] = useState(props.value);
    const [answerNumberInput, setAnswerNumberInput] = useState(props.answerNumber);
    const [answerNextQuestionInput, setAnswerNextQuestionInput] = useState(props.nextQuestionNumber);


    return (
        <div className="AnswerCreated">
            {answerChange ? <ChangeFullAnswerInput save={setAnswerChange} answerValue={setAnswerValueInput} answerNumber={setAnswerNumberInput} nextQuestionNumber={setAnswerNextQuestionInput}/> :
                <>
                    <p className="AnswerValue">Answer: {answerValueInput}</p>
                    <p>Answer Number: {answerNumberInput}</p>
                    <p>Next Question number: {answerNextQuestionInput}</p>
                    <label className="ChangeFullAnswer Label" onClick={ () => setAnswerChange(true)}>Change Answer</label>
                </>}
        </div>
    )
}

export default CreatedAnswer;