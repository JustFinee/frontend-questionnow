import axios from 'axios';
import {
    questionnaireFullBegin,
    questionnaireFullError,
    questionnaireFullSuccess
} from "../QuestionnaireFullAction/questionnaireFullAction";


export const addQuestionBegin = (dispatch, token, userId, questionnaireId,handler, question,history, isAdded) => {
    axios.post("http://localhost:8080/createQuestion?userId=" + userId + "&questionnaireId=" + questionnaireId, {
        "value": question.value,
        "questionNumber": question.questionNumber,
        "answerList": question.answerList
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => {
        dispatch(addQuestionSuccess(res.data))
        updateQuestionnaire(userId,token,questionnaireId,dispatch)
        isAdded(false);
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

export const addQuestionSuccess = (questionData) => {

    return {
        type: "ADD_QUESTION_SUCCES",
        "question": questionData.value,
        "questionNumber": questionData.questionNumber,
        "answerList": questionData.answerList,
    }
}

export const addQuestionError = (error) => {
    return {
        type: "ADD_QUESTION_ERROR",
        error: error
    }
}
