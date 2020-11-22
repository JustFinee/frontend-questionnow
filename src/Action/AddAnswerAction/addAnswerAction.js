import axios from 'axios';
import {
    questionnaireFullError,
    questionnaireFullSuccess
} from "../QuestionnaireFullAction/questionnaireFullAction";


export const addAnswerBegin = (dispatch, token, userId, questionnaireId, questionId,handler, answer,history) => {
    console.log("jestem w poscie")
    axios.post("http://localhost:8080/addAnswer?userId=" + userId + "&questionnaireId=" + questionnaireId + "&questionId=" + questionId, {
        "value": answer.value,
        "answerNumber": answer.answerNumber,
        "nextQuestionNumber": answer.nextQuestionNumber
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => {


        dispatch(addAnswerSuccess(res.data))
        updateQuestionnaire(userId,token,questionnaireId,dispatch)
        handler(false);
        }
    )
        .catch(error => console.log(error))

}

const updateQuestionnaire = (userId,token,questionnaireId,dispatch) => {
    axios.get("http://localhost:8080/getUserQuestionnaire?userId="+userId+"&questionnaireId="+questionnaireId, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    }).then(res => {
            dispatch(questionnaireFullSuccess(res.data))
        }
    )
        .catch(error => {
            dispatch(questionnaireFullError(error));
        })
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
