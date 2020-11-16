import { combineReducers } from 'redux';
import loginReducer from "./LoginReducer/loginReducer";
import questionnaireShortReducer from "./QuestionnaireShortReducer/questionnaireReducer";
import questionnaireFullReducer from "./QuestionnaireFullReducer/questionnaireFullReducer"


const rootReducer = combineReducers({
    login : loginReducer,
    shortQuestionnaire : questionnaireShortReducer,
    fullQuestionnaire : questionnaireFullReducer

});

export default rootReducer;