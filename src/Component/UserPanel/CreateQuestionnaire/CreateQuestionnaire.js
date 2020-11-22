import React from "react";
import "./CreateQuestionnaire.css";
import QuestionnaireTittle from "../../UI/Questionnaire/QuestionnaireTittle/questionnaireTittle";
import {useState} from "react"
import CreatedQuestion from "./CreatedQuestion/CreatedQuestion";
import ChangeFullQuestionInput from "./CreatedQuestion/ChangeFullQuestionInput/ChangeFullQuestionInput";
import {saveQuestionnaireBegin} from "../../../Action/SaveQuestionnaireAction/saveQuestionnaireAction";
import {useDispatch, useSelector} from "react-redux";

const CreateQuestionnaire = (props) => {
    const [tittle, setTittle] = useState("Example tittle of questionnaire");
    const token = useSelector(state => state.login.token);
    const userId = useSelector(state => state.login.userId);
    const [isQuestionAdding, setIsQuestionAdding] = useState(false);
    const [questionValue, setQuestionValue] = useState("");
    const [questionNumber, setQuestionNumber] = useState("");
    const dispatch = useDispatch();

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
        answerList={question.answerList}
        setQuestionList={setQuestionList}
        questionList = {questionList}
        questionnaire = {questionnaire}
        setAnswerList = {setAnswerList}
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

    const saveQuestionnaire = () => {
        questionnaire.name=tittle;
        saveQuestionnaireBegin(dispatch,questionnaire,token,userId,props.history);
    }



    return (
        <div className="CreateQuestionnaire">
            <h1 className="CreateQuestionnaireStart">Create Questionnaire</h1>
            <QuestionnaireTittle tittle={tittle} changeTittleCreation={setTittle}/>
            <div className="CreatedQuestionnaire">


                {mappedQuestion}
                {isQuestionAdding ? <ChangeFullQuestionInput saveQuestion={addQuestion} addQuestion={true} save={setIsQuestionAdding} qV={setQuestionValue} qN={setQuestionNumber}/>
                : <button className="AddQuestion Hover" onClick={() =>setIsQuestionAdding(true)}>Add question</button>}
                <button className="SaveQuestionnaire Hover" onClick={() =>saveQuestionnaire()}>Save questionnaire</button>
            </div>

        </div>
)
}

export default CreateQuestionnaire;