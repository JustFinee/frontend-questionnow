import axios from 'axios';


export const questionnaireFullBegin = (dispatch, setIsQuestionnaireLoaded,token, userId,questionnaireId) => {

    axios.get("http://localhost:8080/getUserQuestionnaire?userId="+userId+"&questionnaireId="+questionnaireId, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    }).then(res => {
            setIsQuestionnaireLoaded(true);
            dispatch(questionnaireFullSuccess(res.data))
        }
    )
        .catch(error => {
            dispatch(questionnaireFullError(error));
        })
}

export const questionnaireFullSuccess = (questionnaire) => {
    return {
        type: "QUESTIONNAIRE_FULL_SUCCES",
        questionnaire: questionnaire
    }
}

export const questionnaireFullError= (error) => {
    return {
        type: "QUESTIONNAIRE_FULL_ERROR",
        userData: error
    }
}