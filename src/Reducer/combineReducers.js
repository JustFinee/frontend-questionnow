import { combineReducers } from 'redux';
import loginReducer from "./LoginReducer/loginReducer";
import questionnaireShortReducer from "./QuestionnaireShortReducer/questionnaireReducer";
import questionnaireFullReducer from "./QuestionnaireFullReducer/questionnaireFullReducer"
import changeQuestionnaireFullReducer from "./ChangeFullQuestionnaireReducer/changeQuestionnaireFullReducer"


const rootReducer = combineReducers({
    login : loginReducer,
    shortQuestionnaire : questionnaireShortReducer,
    fullQuestionnaire : questionnaireFullReducer,
    changeQuestionnaire : changeQuestionnaireFullReducer

});

export default rootReducer;