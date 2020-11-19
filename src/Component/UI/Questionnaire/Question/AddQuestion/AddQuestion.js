import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import "./AddQuestion.css";
import {useDispatch, useSelector} from "react-redux";
import {addQuestionBegin} from "../../../../../Action/AddQuestionAction/addQuestionAction";

const AddAnswer = (props) => {
    const history = useHistory();
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("id");
    const questionnaireId = useSelector(state => state.fullQuestionnaire.questionnaire.questionnaireId);
    const dispatch = useDispatch();
    const [inputQuestion, setInputQuestion] = useState("");
    const [inputQuestionNumber, setInputQuestionNumber] = useState("");
    const answerList =
        [{
            "value" : "Answer 1",
            "answerNumber": 1,
            "nextQuestionNumber": 2
        }]


    const addQuestion = (e) => {
        e.preventDefault();
        addQuestionBegin(dispatch,token,userId,questionnaireId,props.isChanged,{
            "value": inputQuestion,
            "questionNumber":inputQuestionNumber,
            "nextQuestionNumber": inputQuestionNumber,
            "answerList": answerList
        },history, props.isAdded)

    }
    return (
        <div className="AddQuestionModal">
            <h2>Add Question</h2>
            <form>
                <label>Question: </label>
                <input value={inputQuestion} className="Big" type="text" onChange={e=> setInputQuestion(e.target.value)}/>
                <label>Question number: </label>
                <input value={inputQuestionNumber} className="Small" type="number" onChange={e=> setInputQuestionNumber(e.target.value)}/>
                <button className="AddAnswerButton InModal" onClick={addQuestion}>Add Question</button>
            </form>
        </div>
    )
}

export default AddAnswer;