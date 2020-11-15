import loginReducer from "../LoginReducer/loginReducer";

const initialState =
    {
        "questionnaires" : [],
        "errorLogin": false
    }

const questionnaireShortReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'QUESTIONNAIRE_SHORT_SUCCES':
            return {
                "questionnaires": action.questionnaires,
                "errorLogin": false
            }

        case 'QUESTIONNAIRE_SHORT_ERROR':
            return {...initialState, "errorLogin": action.error}
        default:
            return state;

    }
}

export default questionnaireShortReducer;