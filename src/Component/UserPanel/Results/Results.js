import React, {useEffect, useState} from 'react';
import "./Results.css";
import {useDispatch, useSelector} from "react-redux";
import {questionnaireShortBegin} from "../../../Action/QuestionnaireShortAction/questionnaireShortAction";
import QuestionnaireShort from "../MyQuestionnaire/QuestionnaireShort/QuestionnaireShort";
import Loader from "react-loader-spinner";

const Results = () => {

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
            name={quest.name}
            result={true}
        />)
    }

    return (
        <div className="Results">
            <h1>Results</h1>
            <div className="Questionnaires">
                {isQuestionnaireLoaded ? <div>{shortQuestionnaires}</div>
                    : <div className="Loader"><Loader type="TailSpin" color="rgb(55, 81, 94)" height="4rem" width="50"/></div>}
            </div>
        </div>
    )
}

export default Results;