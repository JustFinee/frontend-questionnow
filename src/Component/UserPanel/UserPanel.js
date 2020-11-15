import React from 'react';
import "./UserPanel.css";
import Navigation from "./Navigation/navigation";
import Welcome from "../UI/Welcome/welcome";
import MyQuestionnaire from "./MyQuestionnaire/MyQuestionnaire";
import {useSelector} from "react-redux";
import {Route} from "react-router-dom";


const UserPanel = () => {
    const userName = useSelector(state => state.login.userName);
    return (
        <>
            <div className="LeftSide">
                <div className="Welcome">
                    <Welcome name={userName}/>
                </div>
                <div className="Navigation">
                    <Navigation/>
                </div>
            </div>
            <div className="RightSide">
                <Route path="/user/questionnaires" exact component={MyQuestionnaire}/>
            </div>

        </>
    )
}

export default UserPanel;