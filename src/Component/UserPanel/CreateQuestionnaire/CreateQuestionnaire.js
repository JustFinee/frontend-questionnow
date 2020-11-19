import React from "react";
import "./CreateQuestionnaire.css";
import QuestionnaireTittle from "../../UI/Questionnaire/QuestionnaireTittle/questionnaireTittle";
import {useState} from "react"
import CreatedQuestion from "./CreatedQuestion/CreatedQuestion";

const CreateQuestionnaire = () => {
    const [tittle, setTittle] = useState("Tittle");
    const answerList = [
        {
            "value": "Answer 1",
            "answerNumber":1,
            "nextQuestionNumber": null
        }
    ]
    const questionListInit = [
        {
            "value": "Question 1",
            "questionNumber":1,
            "answerList": answerList
        }
    ]

    const [questionList, setQuestionList] = useState(questionListInit);

    const mappedQuestion = questionList.map(question => <CreatedQuestion
        key={question.questionNumber}
        value={question.value}
        questionNumber={question.questionNumber}
        answerList={answerList}
        />
    )


    return (
        <div className="CreateQuestionnaire">
            <h1>Create Questionnaire</h1>
            <QuestionnaireTittle tittle={tittle} changeTittleCreation={setTittle}/>
            <div className="CreatedQuestionnaire">

                {mappedQuestion}
            </div>
        </div>
)
}

export default CreateQuestionnaire;