import React from 'react';
import "./UserPanel.css";
import Navigation from "./Navigation/navigation";
import Welcome from "../UI/Welcome/welcome";
import MyQuestionnaire from "./MyQuestionnaire/MyQuestionnaire";
import FullQuestionnaire from "./FullQuestionnaire/FullQuestionnaire";
import {useDispatch, useSelector} from "react-redux";
import {Route} from "react-router-dom";
import Button from "../UI/Button/button";
import {Redirect} from "react-router-dom";
import {logout} from "../../Action/LoginAction/loginAction";


const UserPanel = (props) => {
    const userName = useSelector(state => state.login.userName);
    const dispatch = useDispatch();

    const logOut = (e) => {
        e.preventDefault();
        dispatch(logout());
        props.history.push("/login");

    }
    return (
        <>
            <div className="LeftSide">
                <div className="Welcome">
                    <Welcome name={userName}/>
                </div>
                <div className="Navigation">
                    <Navigation/>
                </div>
                <div className="LogOut">
                    <Button type="submit" text="Log out" handler={logOut}/>
                </div>
            </div>
            <div className="RightSide">
                <Route path="/user/questionnaires" exact component={MyQuestionnaire}/>
                <Route path="/user/questionnaires/:id" component={FullQuestionnaire}/>
            </div>

        </>
    )
}

export default UserPanel;