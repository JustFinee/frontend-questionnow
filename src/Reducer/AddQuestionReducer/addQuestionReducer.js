const initialState =
    {
        "question":"",
        "questionNumber": "",
        "answerList": "",
        "error": false
    }

const addQuestionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_QUESTION_SUCCES':
            return {
                "question":action.value,
                "questionNumber": action.questionNumber,
                "answerList": action.answerList,
                "error": false
            }

        case 'ADD_QUESTION_SUCCES_ERROR':
            return {...initialState, "error": action.error}
        default:
            return state;

    }
}

export default addQuestionReducer;