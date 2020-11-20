import React from 'react';
import "./ChangeFullQuestionInput.css"

const ChangeFullQuestionInput = (props) => {

    const changingQuestion = <div className="ChangingFullQuestion">
        <label>Question:</label>
        <input type="text" onChange={e => props.questionValue(e.target.value)}></input>
        <label>Question number:</label>
        <input className="InputNumber" type="number" onChange={e => props.questionNumber(e.target.value)}></input>
        <button onClick={() => {
            props.save(false);
            props.modifyQuestion()
        }}>Save Question
        </button>
    </div>


    const addQuestion = (
        <div className="ChangingFullQuestion">
            <label>Question:</label>
            <input type="text" onChange={e => props.qV(e.target.value)}></input>
            <label>Question number:</label>
            <input className="InputNumber" onChange={e => props.qN(e.target.value)} type="number"></input>
            <button onClick={() => {
                props.save(false);
                props.saveQuestion()
            }}>Save Question
            </button>
        </div>
    )

    return (
        <>
            {props.addQuestion ? addQuestion
                : changingQuestion
            }
        </>

    )
}


export default ChangeFullQuestionInput;