import axios from 'axios';


export const addAnswerBegin = (dispatch, token, userId, questionnaireId, questionId,handler, answer,history) => {
    axios.post("http://localhost:8080/addAnswer?userId=" + userId + "&questionnaireId=" + questionnaireId + "&questionId=" + questionId, {
        "value": answer.value,
        "answerNumber": answer.answerNumber,
        "nextQuestionNumber": answer.nextQuestionNumber
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => {
            handler(false);
            dispatch(addAnswerSuccess(res.data))
        }
    )
        .catch(error => console.log(error))

}

export const addAnswerSuccess = (answerData) => {

    return {
        type: "ADD_ANSWER_SUCCES",
        "answer": answerData.value,
        "answerNumber": answerData.answerNumber,
        "nextQuestionNumber": answerData.nextQuestionNumber,
    }
}

export const addAnswerError = (error) => {
    return {
        type: "ADD_ANSWER_ERROR",
        userData: error
    }
}
