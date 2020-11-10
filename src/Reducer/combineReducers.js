import { combineReducers } from 'redux';
import loginReducer from "./LoginReducer/loginReducer";

const rootReducer = combineReducers({
    login : loginReducer
});

export default rootReducer;