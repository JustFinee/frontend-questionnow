import React from "react";
import "./PresentingQuestion.css"
import PresentingAnswer from "../PresentingAnswer/PresentingAnswer";
import {useState,useEffect} from "react"

const PresentingQuestion =(props) => {

    const [checkedAnswer,setCheckedAnswer] = useState("");

    const answers = props.question.answerList.map( answer => <PresentingAnswer
        value={answer.value}
        answerNumber={answer.answerNumber}
        nextQuestionNumber={answer.nextQuestionNumber}
        setCheckedAnswer={setCheckedAnswer}
    />)

    useEffect( () => {
        if(checkedAnswer!==""){
            props.loadNextQuestion({...checkedAnswer,questionId: props.question.questionId})
            setCheckedAnswer("");
        }

    },[checkedAnswer])

    return(
        <div className="PresentingQuestion">
            <h2>{props.question.value}</h2>
            {answers}
        </div>
    )
}

export default PresentingQuestion;