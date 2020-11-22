import React from 'react';
import "./MyQuestionnaire.css";
import QuestionnaireShort from "./QuestionnaireShort/QuestionnaireShort";
import {useState, useEffect} from "react";
import {useDispatch, useSelector, useStore} from "react-redux";
import Loader from 'react-loader-spinner';
import "../../../Action/QuestionnaireShortAction/questionnaireShortAction";
import {questionnaireShortBegin} from "../../../Action/QuestionnaireShortAction/questionnaireShortAction";

const MyQuestionnaire = (props) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.login.token);
    const userId = useSelector(state => state.login.userId);
    const questionnaires = useSelector(state => state.shortQuestionnaire.questionnaires);
    const [isQuestionnaireLoaded, setIsQuestionnaireLoaded] = useState(false);
    let shortQuestionnaires = [];

   useEffect(() => {
       questionnaireShortBegin(dispatch,setIsQuestionnaireLoaded,token,userId)
        }, []
    )

    if (isQuestionnaireLoaded){
        shortQuestionnaires = questionnaires.map( quest => <QuestionnaireShort
            key={quest.questionnaireDtoId}
            id={quest.questionnaireDtoId}
            name={quest.name}/>)
    }


    return (
        <div className={"MyQuestionnaire"}>
            <h1>My Questionnaires</h1>
            <div className="Questionnaires">
            {isQuestionnaireLoaded ? <div>{shortQuestionnaires}</div>
                : <div className="Loader"><Loader type="TailSpin" color="rgb(55, 81, 94)" height="4rem" width="50"/></div>}
            </div>
        </div>
    )
}

export default MyQuestionnaire;