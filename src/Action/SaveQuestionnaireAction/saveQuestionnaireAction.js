import axios from 'axios';


export const saveQuestionnaireBegin = (dispatch, questionnaire,token, userId,history) => {

    axios.post("http://localhost:8080/saveQuestionnaire?userId=" + userId,{
        ...questionnaire
    }, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    }).then(res => {
            dispatch(saveQuestionnaireSuccess(res.data))
            history.push("/user/questionnaires")
        }
    )
        .catch(error => {
            dispatch(saveQuestionnaireError(error.request.responseText));
        })
}

export const saveQuestionnaireSuccess = (questionnaire) => {
    return {
        type: "SAVE_QUESTIONNAIRE_SUCCES",
        questionnaire: questionnaire
    }
}

export const saveQuestionnaireError= (error) => {
    return {
        type: "SAVE_QUESTIONNAIRE_ERROR",
        error: error
    }
}