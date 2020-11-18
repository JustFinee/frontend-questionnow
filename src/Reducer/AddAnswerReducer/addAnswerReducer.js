const initialState =
    {
        "answer":"",
        "answerNumber": "",
        "nextQuestionNumber": "",
        "error": false
    }

const addAnswerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ANSWER_SUCCES':
            return {
                "answer":action.answer,
                "answerNumber": action.answerNumber,
                "nextQuestionNumber": action.nextQuestionNumber,
                "error": false
            }

        case 'ADD_ANSWER_SUCCES_ERROR':
            return {...initialState, "error": action.error}
        default:
            return state;

    }
}

export default addAnswerReducer;