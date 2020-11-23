const initialState =
    {
        "questionnaire": {},
        "error": false
    }

const questionnaireReducer = (state = initialState, action) => {
    console.log("jestem w reducerze")
    switch (action.type) {
        case 'QUESTIONNAIRE_SUCCESS':
            return {
                "questionnaire": action.questionnaire,
                "error": false
            }

        case 'QUESTIONNAIRE_ERROR':
            return {...initialState, "error": action.error}

        case 'LOAD_NEXT_QUESTION_SUCCESS':
            return {
                "questionnaire": {...state.questionnaire, firstQuestion: action.question},
                "error": false
            }
        default:
            return state;

    }
}

export default questionnaireReducer;