import React from 'react';
import "./ChangeFullAnswerInput.css"

const ChangeFullAnswerInput = (props) => {


    const changingAnswer = (
        <div className="ChangingFullAnswer">
            <label>Answer:</label>
            <input type="text" onChange={e => props.answerValue(e.target.value)}></input>
            <label>Answer number:</label>
            <input className="InputNumber" type="number" onChange={e => props.answerNumber(e.target.value)}></input>
            <label>Next question number:</label>
            <input className="InputNumber" type="number"
                   onChange={e => props.nextQuestionNumber(e.target.value)}></input>
            <button onClick={() => props.save(false)}>Save Answer</button>
        </div>
    )

    const addAnswer = (
        <div className="ChangingFullAnswer">
            <label>Answer:</label>
            <input type="text" onChange={e => props.aV(e.target.value)}></input>
            <label>Question number:</label>
            <input className="InputNumber" onChange={e => props.aN(e.target.value)} type="number"></input>
            <label>Next question number:</label>
            <input className="InputNumber" type="number" onChange={e => props.aNQ(e.target.value)}></input>
            <button onClick={() => {
                props.save(false);
                props.saveAnswer()
            }}>Save answer
            </button>
        </div>
    )

    return (
        <>
            {props.addAnswer ? addAnswer
                : changingAnswer
            }
        </>
    )
}

export default ChangeFullAnswerInput;