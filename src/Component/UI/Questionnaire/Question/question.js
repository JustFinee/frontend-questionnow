import React from 'react';
import "./Question.css";
import Answer from "../Answer/answer";
import ChangeInput from '../../ChangeInput/changeInput'
import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {questionnaireFullSuccess} from "../../../../Action/QuestionnaireFullAction/questionnaireFullAction";

const Question = (props) => {
    const dispatch = useDispatch();
    const questionnaire = useSelector(state => state.fullQuestionnaire.questionnaire);
    const [isChanging, setIsChanging] = useState(false);
    const [inputChange, setInputChange] = useState(props.value);

    const changeQuestionHandler = () => {
        if (isChanging === false)
            setIsChanging(true);
    }

    const changeQuestionInQuestionnaire = () => {
        const questionList = [...questionnaire.questionList];
        const questionChange = questionList.find(question => question.questionId===props.questionId)
        questionChange.value = inputChange;
        const changedQuestionList = {...questionnaire.questionList, questionChange};

        return {
            ...questionnaire,
            changedQuestionList
        }
    }

    const saveInput = (e) => {
        e.preventDefault();
        const questionnaireChanged = changeQuestionInQuestionnaire();
        dispatch(questionnaireFullSuccess(questionnaireChanged));
        setIsChanging(false);
    }

    const deleteQuestion = () => {
        const questionList = [...questionnaire.questionList];
        const changedQuestionList = questionList.filter(question => question.questionId !==props.questionId);
        dispatch(questionnaireFullSuccess({
            ...questionnaire,
            "questionList" : changedQuestionList
        }))
    }

    const answers = props.answerList.map(answer => <Answer key={answer.answerNumber} answerId={answer.answerId} questionId={props.questionId} value={answer.value}/>)

    return (
        <>
            {isChanging ?
                <ChangeInput value={inputChange} handler={setInputChange} saveHandler={saveInput}/>
                : <>
                    <h2 className="Question" onClick={changeQuestionHandler}>{props.value}</h2>
                    <button onClick={deleteQuestion}>Delete</button>
                </>}
            <div className="Answer">{answers}</div>
        </>
    )
}

export default Question;