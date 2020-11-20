import React from "react";
import CreatedAnswer from "../CreatedAnswer/CreatedAnswer"
import "./CreatedQuestion.css";
import ChangeFullQuestionInput from "./ChangeFullQuestionInput/ChangeFullQuestionInput";
import {useState} from "react";

const CreatedQuestion = (props) => {

    const [questionChange, setQuestionChange] = useState(false);
    const [questionValueInput, setQuestionValueInput] = useState(props.value);
    const [questionNumberInput, setQuestionNumberInput] = useState(props.questionNumber);
    const mappedAnswers = props.answerList.map(answer => <CreatedAnswer
        answerNumber={answer.answerNumber}
        value={answer.value}
        nextQuestionNumber={answer.nextQuestionNumber}
    />)

    const modifyQuestion = () => {
        const question = props.questionList.find(que => que.questionNumber === props.questionNumber);
        question.value = questionValueInput;
        question.questionNumber = questionNumberInput;
        props.setQuestionList(props.questionList);
    }

    return (
        <div className="QuestionCreated">
            {questionChange ? <ChangeFullQuestionInput modifyQuestion={modifyQuestion} questionValue={setQuestionValueInput} questionNumber={setQuestionNumberInput} save={setQuestionChange}/> :
                <>
                    <p className="QuestionValue">Question: {questionValueInput}</p>
                    <p className="QuestionProperty">Number of question: {questionNumberInput}</p>
                    <label className="ChangeFullQuestion" onClick={ () => setQuestionChange(true)}>Change Question</label>
                </>}
            <div>
                {mappedAnswers}
            </div>
        </div>
    )
}

export default CreatedQuestion;