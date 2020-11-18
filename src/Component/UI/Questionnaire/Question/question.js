import React from 'react';
import "./Question.css";
import Answer from "../Answer/answer";
import ChangeInput from '../../ChangeInput/changeInput'
import AddAnswer from "../Answer/AddAnswer/AddAnswer";
import {useState} from 'react';
import {useDispatch, useSelector, useStore} from "react-redux";
import {questionnaireFullSuccess} from "../../../../Action/QuestionnaireFullAction/questionnaireFullAction";

const Question = (props) => {
    const dispatch = useDispatch();
    const questionnaire = useSelector(state => state.fullQuestionnaire.questionnaire);

    const [isChanging, setIsChanging] = useState(false);
    const [isAddingAnswer, setIsAddingAnswer] = useState(false);
    const [inputQuestionChange, setInputQuestionChange] = useState(props.value);

    const changeQuestionHandler = () => {
        if (isChanging === false)
            setIsChanging(true);
    }

    const changeQuestionInQuestionnaire = () => {
        const questionList = [...questionnaire.questionList];
        const questionChange = questionList.find(question => question.questionId === props.questionId)
        questionChange.value = inputQuestionChange;
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
        props.isChanged(true);
    }

    const deleteQuestion = () => {
        const questionList = [...questionnaire.questionList];
        const changedQuestionList = questionList.filter(question => question.questionId !== props.questionId);
        dispatch(questionnaireFullSuccess({
            ...questionnaire,
            "questionList": changedQuestionList
        }))
        props.isChanged(true);
    }

    const addAnswer = () => {
        setIsAddingAnswer(true)
    }

    const answers = props.answerList.map(answer => <Answer key={answer.answerNumber}
                                                           answerId={answer.answerId}
                                                           questionId={props.questionId}
                                                           value={answer.value}
                                                           answerNumber={answer.answerNumber}
                                                           nextQuestionNumber ={answer.nextQuestionNumber}
                                                           isChanged={props.isChanged}
    />)

    return (
        <>
            {isChanging ?
                <ChangeInput value={inputQuestionChange} handler={setInputQuestionChange} saveHandler={saveInput}/>
                : <div className="QuestionWithDeleteButton">
                    <h2 className="Question" onClick={changeQuestionHandler}>{props.value}</h2>
                    <p className="QuestionData">Question numer: {props.questionNumber}</p>
                    <button className="DeleteQuestion" onClick={deleteQuestion}>Delete Question</button>
                </div>}

            {isAddingAnswer ? <AddAnswer handler={setIsAddingAnswer} questionId={props.questionId}/>
                : <div className="AnswerWithAddButton">
                    <div className="Answer">{answers}</div>
                    <div className="AddButton">
                        <button className="AddAnswerButton" type="submit" onClick={addAnswer}>Add Answer</button>
                    </div>
                </div>
            }

        </>
    )
}

export default Question;