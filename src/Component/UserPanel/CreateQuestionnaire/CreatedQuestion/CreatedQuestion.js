import React from "react";
import CreatedAnswer from "../CreatedAnswer/CreatedAnswer"
import "./CreatedQuestion.css";
import ChangeFullQuestionInput from "./ChangeFullQuestionInput/ChangeFullQuestionInput";
import ChangeFullAnswerInput from "../CreatedAnswer/ChangeFullAnswerInput/ChangeFullAnswerInput";
import {useState} from "react";

const CreatedQuestion = (props) => {

    const [questionChange, setQuestionChange] = useState(false);
    const [isAnswerAdding, setIsAnswerAdding] = useState(false);
    const [isAnswerDeleting, setIsAnswerDeleting] = useState(false);
    const [answerValue, setAnswerValue] = useState("");
    const [answerNumber, setAnswerNumber] = useState("");
    const [answerNextQuestionNumber, setNextQuestionNumber] = useState("");
    const [questionValueInput, setQuestionValueInput] = useState(props.value);
    const [questionNumberInput, setQuestionNumberInput] = useState(props.questionNumber);


    const modifyQuestion = () => {
        const question = props.questionList.find(que => que.questionNumber === props.questionNumber);
        question.value = questionValueInput;
        question.questionNumber = questionNumberInput;
        props.setQuestionList(props.questionList);
    }

    const addAnswer = () => {
        const changedAnswerList = props.answerList;
        changedAnswerList.push({
            "value": answerValue,
            "answerNumber": answerNumber,
            "nextQuestionNumber": answerNextQuestionNumber
        })

    }


    const mappedAnswers = props.answerList.map(answer => <CreatedAnswer
        answerNumber={answer.answerNumber}
        value={answer.value}
        nextQuestionNumber={answer.nextQuestionNumber}
        setIsAnswerDeleting={setIsAnswerDeleting}
    />)

    return (
        <div className="QuestionCreated">
            {questionChange ?
                <ChangeFullQuestionInput modifyQuestion={modifyQuestion} questionValue={setQuestionValueInput}
                                         questionNumber={setQuestionNumberInput} save={setQuestionChange}/> :
                <>
                    <p className="QuestionValue">Question: {questionValueInput}</p>
                    <p className="QuestionProperty">Number of question: {questionNumberInput}</p>
                    <label className="ChangeFullQuestion Label" onClick={() => setQuestionChange(true)}>Change
                        Question</label>
                </>}
            <div className="Answers">
                {mappedAnswers}


                {isAnswerAdding ?
                    <ChangeFullAnswerInput saveAnswer={addAnswer} addAnswer={true} save={setIsAnswerAdding}
                                           aV={setAnswerValue} aN={setAnswerNumber} aNQ={setNextQuestionNumber}/>
                    : <button className="AddQuestion Hover" onClick={() => setIsAnswerAdding(true)}>Add answer</button>}
            </div>
        </div>
    )
}

export default CreatedQuestion;