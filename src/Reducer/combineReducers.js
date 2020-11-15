import { combineReducers } from 'redux';
import loginReducer from "./LoginReducer/loginReducer";
import questionnaireShortReducer from "./QuestionnaireShortReducer/questionnaireReducer";


const rootReducer = combineReducers({
    login : loginReducer,
    shortQuestionnaire : questionnaireShortReducer

});

export default rootReducer;