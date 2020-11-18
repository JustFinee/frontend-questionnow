export const changeFullQuestionnaireSuccess = (questionnaire) => {
    return {
        type: "CHANGE_QUESTIONNAIRE_FULL_SUCCESS",
        questionnaire: questionnaire
    }
}

export const changeFullQuestionnaireError= (error) => {
    return {
        type: "CHANGE_QUESTIONNAIRE_FULL_ERROR",
        userData: error
    }
}