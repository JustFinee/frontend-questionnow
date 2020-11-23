import './App.css';
import Landing from "./Component/Landing/landing"
import LogoText from "./Component/UI/LogoText/logoText";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Questionnaire from "./Component/Questionnaire/Questionnaire";

const App = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <LogoText text="Questionnow"/>
                <div className="blur"></div>
                <Switch>
                    <Route path="/resolveQuestionnaire/:unicKey" exact component={Questionnaire}/>
                    <Route path="/" component={Landing}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
export default App;
