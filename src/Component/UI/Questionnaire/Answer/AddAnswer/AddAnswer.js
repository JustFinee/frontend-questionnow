import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import "./AddAnswer.css";
import {useDispatch, useSelector} from "react-redux";
import {addAnswerBegin} from "../../../../../Action/AddAnswerAction/addAnswerAction";

const AddAnswer = (props) => {
    const history = useHistory();
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("id");
    const questionnaireId = useSelector(state => state.fullQuestionnaire.questionnaire.questionnaireId);
    const dispatch = useDispatch();
    const [inputAnswer, setInputAnswer] = useState("");
    const [inputAnswerNumber, setInputAnswerNumber] = useState("");
    const [inputAnswerNextQuestion, setInputAnswerNextQuestion] = useState("");

    const addAnswer = (e) => {
        e.preventDefault();
        addAnswerBegin(dispatch,token,userId,questionnaireId,props.questionId,props.handler,{
            "value": inputAnswer,
            "answerNumber":inputAnswerNumber,
            "nextQuestionNumber": inputAnswerNextQuestion
        },history)

    }
    return (
        <div className="AddAnswerModal">
            <h2>Add Answer</h2>
            <form>
                <label>Answer: </label>
                <input value={inputAnswer} className="Big" type="text" onChange={e=> setInputAnswer(e.target.value)}/>
                <label>Answer number: </label>
                <input value={inputAnswerNumber} className="Small" type="number" onChange={e=> setInputAnswerNumber(e.target.value)}/>
                <label>Next question number: </label>
                <input value={inputAnswerNextQuestion} className="Small" type="number" onChange={e=> setInputAnswerNextQuestion(e.target.value)}/>
                <button className="AddAnswerButton InModal" onClick={addAnswer}>Add Answer</button>
            </form>
        </div>
    )
}

export default AddAnswer;