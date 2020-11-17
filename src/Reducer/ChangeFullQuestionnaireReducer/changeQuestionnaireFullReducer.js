const initialState =
    {
        "questionnaire" : [],
        "error": false
    }

const changeQuestionnaireFullReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_QUESTIONNAIRE_FULL_SUCCESS':
            return {
                "questionnaire": action.questionnaire,
                "error": false
            }

        case 'CHANGE_QUESTIONNAIRE_FULL_ERROR':
            return {...initialState, "error": action.error}
        default:
            return state;

    }
}

export default changeQuestionnaireFullReducer;