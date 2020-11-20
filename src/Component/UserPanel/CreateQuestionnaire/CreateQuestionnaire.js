import React from "react";
import "./CreateQuestionnaire.css";
import QuestionnaireTittle from "../../UI/Questionnaire/QuestionnaireTittle/questionnaireTittle";
import {useState} from "react"
import CreatedQuestion from "./CreatedQuestion/CreatedQuestion";
import ChangeFullQuestionInput from "./CreatedQuestion/ChangeFullQuestionInput/ChangeFullQuestionInput";

const CreateQuestionnaire = () => {
    const [tittle, setTittle] = useState("Tittle");
    const [isQuestionAdding, setIsQuestionAdding] = useState(false);
    const [questionValue, setQuestionValue] = useState("");
    const [questionNumber, setQuestionNumber] = useState("");

    const answerListInit = [
        {
            "value": "Answer 1",
            "answerNumber":1,
            "nextQuestionNumber": null
        }
    ]
    const [answerList, setAnswerList] = useState(answerListInit);
    const questionListInit = [
        {
            "value": "Question 1",
            "questionNumber":1,
            "answerList": answerList
        }
    ]

    const [questionList, setQuestionList] = useState(questionListInit);

    const [questionnaire,setQuestionnaire] = useState({
        "name" : tittle,
        "questionList": questionList
    })


    const mappedQuestion = questionList.map(question => <CreatedQuestion
        key={question.questionNumber}
        value={question.value}
        questionNumber={question.questionNumber}
        answerList={answerList}
        setQuestionList={setQuestionList}
        questionList = {questionList}
        questionnaire = {questionnaire}
        />
    )

    const addQuestion = () => {
        const changedQuestionList = questionList;
        changedQuestionList.push({
            "value": questionValue,
            "questionNumber":questionNumber,
            "answerList": answerListInit
        })
        setQuestionList(changedQuestionList)
    }



    return (
        <div className="CreateQuestionnaire">
            <h1>Create Questionnaire</h1>
            <QuestionnaireTittle tittle={tittle} changeTittleCreation={setTittle}/>
            <div className="CreatedQuestionnaire">
                {mappedQuestion}
                {isQuestionAdding ? <ChangeFullQuestionInput saveQuestion={addQuestion} addQuestion={true} save={setIsQuestionAdding} qV={setQuestionValue} qN={setQuestionNumber}/>
                : <button className="AddQuestion" onClick={() =>setIsQuestionAdding(true)}>Add question</button>}

            </div>
        </div>
)
}

export default CreateQuestionnaire;