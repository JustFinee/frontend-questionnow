const initialState =
    {
        "questionnaire" : [],
        "error": false
    }

const questionnaireFullReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'QUESTIONNAIRE_FULL_SUCCES':
            return {
                "questionnaire": action.questionnaire,
                "error": false
            }

        case 'QUESTIONNAIRE_FULL_ERROR':
            return {...initialState, "error": action.error}
        default:
            return state;

    }
}

export default questionnaireFullReducer;