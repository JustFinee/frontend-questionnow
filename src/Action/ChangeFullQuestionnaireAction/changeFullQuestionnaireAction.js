import axios from "axios";

export const changeFullQuestionnaireBegin = (dispatch, userId, token, questionnaire) => {
    console.log(questionnaire)
    axios.put("http://localhost:8080/changeQuestionnaire?userId=" + userId, {
        ...questionnaire
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => dispatch(changeFullQuestionnaireSuccess(res.data)))
        .catch(error => dispatch(changeFullQuestionnaireError(error)))
}

export const deleteFullQuestionnaireBegin = (dispatch, userId, token, questionnaireId, history) => {
    axios.delete("http://localhost:8080/deleteQuestionnaire?userId=" + userId + "&questionnaireId=" + questionnaireId, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(() => {
            dispatch(deleteFullQuestionnaireSuccess())
        history.push("/user/questionnaires")
        }
    )
        .catch(error => dispatch(changeFullQuestionnaireError(error)))
}


export const changeFullQuestionnaireSuccess = (questionnaire) => {
    return {
        type: "CHANGE_QUESTIONNAIRE_FULL_SUCCESS",
        questionnaire: questionnaire
    }
}

export const deleteFullQuestionnaireSuccess = () => {
    return {
        type: "DELETE_QUESTIONNAIRE_FULL_SUCCESS",
        questionnaire: ""
    }
}

export const changeFullQuestionnaireError = (error) => {
    return {
        type: "CHANGE_QUESTIONNAIRE_FULL_ERROR",
        userData: error
    }
}