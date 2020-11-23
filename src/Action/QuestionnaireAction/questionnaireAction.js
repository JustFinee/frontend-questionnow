import axios from 'axios';


export const questionnaireBegin = (dispatch,unicKey,setQuestionnaireLoaded) => {

    axios.get("http://localhost:8080/getStartQuestionnaire?unicKey="+unicKey).then(res => {

            dispatch(questionnaireSuccess(res.data))
            setQuestionnaireLoaded(true);
        }
    )
        .catch(error => {
            dispatch(questionnaireError(error));
        })
}

export const loadNextQuestionBegin = (dispatch,answerNumber,nextQuestionNumber,questionnaireId, questionId) => {
    axios.get("http://localhost:8080/getNextQuestion?questionnaireId="+questionnaireId+"&questionNumber="+nextQuestionNumber+"&questionId="+questionId+"&answerNumber="+answerNumber)
        .then(res=> {
            dispatch(loadNextQuestionSuccess(res.data))
        })
}

export const lastQuestion = (answerNumber,questionId,setQuestionnaireEnded) =>{
    axios.put("http://localhost:8080/addCounter?questionId="+questionId+"&answerNumber="+answerNumber)
        .then(setQuestionnaireEnded(true))
}

export const questionnaireSuccess = (questionnaire) => {
    return {
        type: "QUESTIONNAIRE_SUCCESS",
        questionnaire: questionnaire
    }
}

export const questionnaireError= (error) => {
    return {
        type: "QUESTIONNAIRE_ERROR",
        userData: error
    }
}

export const loadNextQuestionSuccess = (question) => {
    return {
        type: "LOAD_NEXT_QUESTION_SUCCESS",
        question: question
    }
}