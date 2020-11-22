import React from 'react';
import "./FullQuestionnaire.css";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {questionnaireFullBegin} from "../../../Action/QuestionnaireFullAction/questionnaireFullAction";
import Loader from 'react-loader-spinner';
import QuestionnaireTittle from "../../UI/Questionnaire/QuestionnaireTittle/questionnaireTittle";
import Question from "../../UI/Questionnaire/Question/question";
import AddQuestion from "../../UI/Questionnaire/Question/AddQuestion/AddQuestion";
import {
    changeFullQuestionnaireBegin,
    deleteFullQuestionnaireBegin
} from "../../../Action/ChangeFullQuestionnaireAction/changeFullQuestionnaireAction";

const FullQuestionnaire = (props) => {
    const dispatch = useDispatch();
    const questionnaireId = props.match.params['id'];
    const [isQuestionnaireChanged, setIsQuestionnaireChanged] = useState(false);
    const [questionnaireIsLoad, setQuestionnaireIsLoad] = useState(false);
    const [isAddingQuestion, setIsAddingQuestion] = useState(false);
    const userId = useSelector(state => state.login.userId);
    const questionnaire = useSelector(state => state.fullQuestionnaire.questionnaire);
    const token = useSelector(state => state.login.token);
    let mappedQuestionnaire = [];

    useEffect(() => {
        questionnaireFullBegin(dispatch, setQuestionnaireIsLoad, token, userId, questionnaireId)
    }, []);

    if (questionnaireIsLoad && questionnaire.hasOwnProperty("questionList") && questionnaire.questionList.length > 0) {
        mappedQuestionnaire = questionnaire.questionList.map(question => <Question
                key={question.questionNumber}
                questionId={question.questionId}
                value={question.value}
                answerList={question.answerList}
                questionNumber={question.questionNumber}
                isChanged={setIsQuestionnaireChanged}
            />
        )
    }

    const changeQuestionnaire = () => {
        changeFullQuestionnaireBegin(dispatch,userId,token,questionnaire);
        setIsQuestionnaireChanged(false)
    }

    const removeQuestionnaire = () => {
        deleteFullQuestionnaireBegin(dispatch,userId,token,questionnaireId,props.history);
    }

    const addQuestion = () => {
        setIsAddingQuestion(true)
    }

    return (
        <div className="FullQuestionnaire">
            {questionnaireIsLoad
                ?
                <>{isAddingQuestion ? <AddQuestion isChanged={setIsQuestionnaireChanged} isAdded={setIsAddingQuestion}/> :
                    <div className="ButtonsForChangeQuestionnaire">
                        <button className="ChangeQuestionnaireButton" disabled={!isQuestionnaireChanged} onClick={changeQuestionnaire}>Save changes</button>
                        <button className="ChangeQuestionnaireButton"  onClick={removeQuestionnaire}>Remove Questionnaire</button>
                        <button className="ChangeQuestionnaireButton"  onClick={addQuestion}>Add Question</button>
                    </div>
                }
                    <QuestionnaireTittle tittle ={questionnaire.name} isChanged={setIsQuestionnaireChanged}/>
                    <div className="QuestionContent">{mappedQuestionnaire}</div>
                </>
                : <div className="Loader"><Loader type="TailSpin" color="rgb(55, 81, 94)" height="4rem" width="50"/></div>}
        </div>
    )
}

export default FullQuestionnaire;