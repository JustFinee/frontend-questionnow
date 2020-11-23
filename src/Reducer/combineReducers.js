import { combineReducers } from 'redux';
import loginReducer from "./LoginReducer/loginReducer";
import questionnaireShortReducer from "./QuestionnaireShortReducer/questionnaireReducer";
import questionnaireFullReducer from "./QuestionnaireFullReducer/questionnaireFullReducer"
import changeQuestionnaireFullReducer from "./ChangeFullQuestionnaireReducer/changeQuestionnaireFullReducer"
import addAnswerReducer from "./AddAnswerReducer/addAnswerReducer";
import addQuestionReducer from "./AddQuestionReducer/addQuestionReducer";
import saveQuestionnaireReducer from "./SaveQuestionnaireReducer/saveQuestionnaireReducer";
import questionnaireReducer from "./QuestionnaireReducer/questionnaireReducer";


const rootReducer = combineReducers({
    login : loginReducer,
    shortQuestionnaire : questionnaireShortReducer,
    fullQuestionnaire : questionnaireFullReducer,
    changeQuestionnaire : changeQuestionnaireFullReducer,
    addAnswer : addAnswerReducer,
    addQuestion: addQuestionReducer,
    saveQuestionnaire : saveQuestionnaireReducer,
    questionnaire: questionnaireReducer

});

export default rootReducer;