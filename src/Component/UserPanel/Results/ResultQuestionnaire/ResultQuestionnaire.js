import React, {useEffect, useState} from 'react';
import "./ResultQuestionnaire.css";
import {useDispatch, useSelector} from "react-redux";
import {questionnaireFullBegin} from "../../../../Action/QuestionnaireFullAction/questionnaireFullAction";
import Loader from "react-loader-spinner";
import Question from "../../../UI/Questionnaire/Question/question";
import QuestionnaireTittle from "../../../UI/Questionnaire/QuestionnaireTittle/questionnaireTittle";
import SimpleQuestion from "./SimpleQuestion/SimpleQuestion";

const ResultQuestionnaire = (props) => {

    const dispatch = useDispatch();
    const questionnaireId = props.match.params['id'];
    const [questionnaireIsLoad, setQuestionnaireIsLoad] = useState(false);
    const userId = useSelector(state => state.login.userId);
    const questionnaire = useSelector(state => state.fullQuestionnaire.questionnaire);
    const token = useSelector(state => state.login.token);
    let mappedQuestionnaire = [];

    useEffect(() => {
        questionnaireFullBegin(dispatch, setQuestionnaireIsLoad, token, userId, questionnaireId)
    }, []);

    if (questionnaireIsLoad && questionnaire.hasOwnProperty("questionList") && questionnaire.questionList.length > 0) {
        mappedQuestionnaire = questionnaire.questionList.map(question => <SimpleQuestion
                key={question.questionNumber}
                questionId={question.questionId}
                value={question.value}
                answerList={question.answerList}
                questionNumber={question.questionNumber}
            />
        )
    }

    return (
        <div className="ResultQuestionnaire">
            {questionnaireIsLoad ?
                <div className="FullResult">
                    <h2 className="SimpleTittle">{questionnaire.name}</h2>
                    <div className="SimpleQuestions">
                        {mappedQuestionnaire}
                    </div>

                </div>
                :
                <div className="Loader"><Loader type="TailSpin" color="rgb(55, 81, 94)" height="4rem" width="50"/></div>
            }
        </div>
    )
}

export default ResultQuestionnaire;