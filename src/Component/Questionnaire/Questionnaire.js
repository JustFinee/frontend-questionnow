import React from "react";
import "./Questionnaire.css";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom"
import {useEffect, useState} from "react";
import {
    questionnaireBegin,
    loadNextQuestionBegin,
    lastQuestion
} from "../../Action/QuestionnaireAction/questionnaireAction";
import Loader from "react-loader-spinner";
import PresentingQuestion from "./PresentingQuestion/PresentingQuestion";

const Questionnaire = (props) => {
    const dispatch = useDispatch();
    const unicKey = props.match.params['unicKey'];
    const [isQuestionnaireLoaded, setIsQuestionnaireLoaded] = useState(false);
    const [questionnaireEnded, setQuestionnaireEnded] = useState(false);
    const questionnaire = useSelector(state => state.questionnaire.questionnaire);
    const [loadNextQuestion,setLoadNextQuestion] = useState("");
    let question;

    useEffect(() => {
        questionnaireBegin(dispatch, unicKey, setIsQuestionnaireLoaded)
    }, [])

    useEffect(() => {
       if (loadNextQuestion!=="")
       {
           if(loadNextQuestion.nextQuestionNumber!==null) {
               loadNextQuestionBegin(dispatch, loadNextQuestion.answerNumber, loadNextQuestion.nextQuestionNumber, questionnaire.questionnaireDtoId, loadNextQuestion.questionId);
               setLoadNextQuestion("")
           }
           else {
               lastQuestion(loadNextQuestion.answerNumber,loadNextQuestion.questionId,setQuestionnaireEnded)
           }
       }
    }, [loadNextQuestion])

    if (questionnaire.hasOwnProperty("firstQuestion")) {
        question = questionnaire.firstQuestion;
    }


    return (
        <div className="ResolveQuestionnaire">
            {questionnaireEnded ? <div className="TheEnd">
                <h1 >Thank you for your answers !  </h1>
                <h1 >Questionnaire has been sent to owner.</h1>
                <h1 >You can close this window</h1>
                <h3>Maybe you want create your own questionnaire? Register account
                    <Link to="/register"> HERE </Link>
                </h3>
                </div>
                : <>{isQuestionnaireLoaded ? <div className="QuestionnaireContent">
                        <h1>{questionnaire.name}</h1>
                        <PresentingQuestion question={question} loadNextQuestion={setLoadNextQuestion}/>
                    </div>
                    : <div className="Loader"><Loader type="TailSpin" color="rgb(55, 81, 94)" height="4rem" width="50"/>
                    </div>} </>



            }
        </div>
    )
}

export default Questionnaire;