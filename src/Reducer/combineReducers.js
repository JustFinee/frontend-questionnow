import { combineReducers } from 'redux';
import loginReducer from "./LoginReducer/loginReducer";
import questionnaireShortReducer from "./QuestionnaireShortReducer/questionnaireReducer";
import questionnaireFullReducer from "./QuestionnaireFullReducer/questionnaireFullReducer"
import changeQuestionnaireFullReducer from "./ChangeFullQuestionnaireReducer/changeQuestionnaireFullReducer"
import addAnswerReducer from "./AddAnswerReducer/addAnswerReducer";
import addQuestionReducer from "./AddQuestionReducer/addQuestionReducer";
import saveQuestionnaireReducer from "./SaveQuestionnaireReducer/saveQuestionnaireReducer";


const rootReducer = combineReducers({
    login : loginReducer,
    shortQuestionnaire : questionnaireShortReducer,
    fullQuestionnaire : questionnaireFullReducer,
    changeQuestionnaire : changeQuestionnaireFullReducer,
    addAnswer : addAnswerReducer,
    addQuestion: addQuestionReducer,
    saveQuestionnaire : saveQuestionnaireReducer

});

export default rootReducer;