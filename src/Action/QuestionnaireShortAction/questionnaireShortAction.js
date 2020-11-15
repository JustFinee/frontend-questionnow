import axios from 'axios';


export const questionnaireShortBegin = (dispatch, setIsQuestionnaireLoaded,token, userId) => {

    axios.get("http://localhost:8080/getAllUserQuestionnaires?userId=" + userId, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    }).then(res => {
            setIsQuestionnaireLoaded(true);
            dispatch(questionnaireShortSuccess(res.data))
        }
    )
        .catch(error => {
            dispatch(questionnaireShortError(error.request.responseText));
        })
}

export const questionnaireShortSuccess = (questionnaires) => {
    return {
        type: "QUESTIONNAIRE_SHORT_SUCCES",
        questionnaires: questionnaires
    }
}

export const questionnaireShortError= (error) => {
    return {
        type: "QUESTIONNAIRE_SHORT_ERROR",
        userData: error
    }
}