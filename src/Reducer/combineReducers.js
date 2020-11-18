import { combineReducers } from 'redux';
import loginReducer from "./LoginReducer/loginReducer";
import questionnaireShortReducer from "./QuestionnaireShortReducer/questionnaireReducer";
import questionnaireFullReducer from "./QuestionnaireFullReducer/questionnaireFullReducer"
import changeQuestionnaireFullReducer from "./ChangeFullQuestionnaireReducer/changeQuestionnaireFullReducer"
import addAnswerReducer from "./AddAnswerReducer/addAnswerReducer";


const rootReducer = combineReducers({
    login : loginReducer,
    shortQuestionnaire : questionnaireShortReducer,
    fullQuestionnaire : questionnaireFullReducer,
    changeQuestionnaire : changeQuestionnaireFullReducer,
    addAnswer : addAnswerReducer

});

export default rootReducer;