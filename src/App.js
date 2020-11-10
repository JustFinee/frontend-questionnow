import './App.css';
import Landing from "./Component/Landing/landing"
import LogoText from "./Component/UI/LogoText/logoText";
import React from "react";
import * as loginAction from "./Action/LoginAction/loginAction";
import {useDispatch} from 'react-redux';


const App = () => {
    const dispatch = useDispatch();
    loginAction.LoginBegin(dispatch);
    return (
        <div className="App">
            <LogoText/>
            <div className="blur"></div>
            <Landing/>


        </div>
    );
}

export default App;
