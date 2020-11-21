import loginReducer from "../LoginReducer/loginReducer";

const initialState =
    {
        "questionnaire" : {},
        "error": false
    }

const saveQuestionnaireReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_QUESTIONNAIRE_SUCCES':
            return {
                "questionnaire": action.questionnaire,
                "error": false
            }

        case 'SAVE_QUESTIONNAIRE_ERROR':
            return {...initialState, "error": action.error}
        default:
            return state;

    }
}

export default saveQuestionnaireReducer;