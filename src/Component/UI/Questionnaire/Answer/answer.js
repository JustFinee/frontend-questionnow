import React, {useState} from 'react';
import "./Answer.css";
import {useDispatch, useSelector} from "react-redux";
import {questionnaireFullSuccess} from "../../../../Action/QuestionnaireFullAction/questionnaireFullAction";
import ChangeInput from "../../ChangeInput/changeInput";

const Answer = (props) => {
    const dispatch = useDispatch();
    const questionnaire = useSelector(state => state.fullQuestionnaire.questionnaire);
    const [isAnswerChanging, setIsAnswerChanging] = useState(false);
    const [inputAnswerChange, setInputAnswerChange] = useState(props.value);

    const changeAnswerHandler = () => {
        if (isAnswerChanging === false)
            setIsAnswerChanging(true);
    }

    const changeAnswerInQuestion = () => {
        const questionList = [...questionnaire.questionList];
        const questionChange = questionList.find(question => question.questionId === props.questionId)
        const answerList = [...questionChange.answerList];
        const answerChanged = answerList.find(answerItem => answerItem.answerId === props.answerId)
        answerChanged.value = inputAnswerChange;

        return {
            ...questionnaire,
            questionList: questionList
        }

    }

    const saveInput = (e) => {
        e.preventDefault();
        const questionnaireChanged = changeAnswerInQuestion();
        dispatch(questionnaireFullSuccess(questionnaireChanged));
        setIsAnswerChanging(false);
    }

    const deleteAnswer = () => {

        const questionList = [...questionnaire.questionList];
        const specificQuestion = questionList.find(question => question.questionId === props.questionId);
        const answerList = [...specificQuestion.answerList];
        const changedAnswerList = answerList.filter(answerItem => answerItem.answerId !== props.answerId);
        specificQuestion.answerList = changedAnswerList

        dispatch(questionnaireFullSuccess({
            ...questionnaire,
            "questionList": questionList

        }))
    }

    return (
        <>
            {isAnswerChanging ? <ChangeInput value={inputAnswerChange} handler={setInputAnswerChange} saveHandler={saveInput}/>
                : <>
                    <h4 className="AnswerContent" onClick={changeAnswerHandler}>{props.value}</h4>
                    <button onClick={deleteAnswer}>Delete</button>
                </>}
        </>
    )
}

export default Answer;