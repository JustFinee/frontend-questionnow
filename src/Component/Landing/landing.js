import React from "react";
import "./landing.css";
import Login from "../Login/login";
import Register from "../Register/Register";
import {useSelector} from "react-redux";
import {Route} from "react-router-dom";


const Landing = () => {
    const isAuthenticated = useSelector(state => state.login.isAuthenticated);
    const notAuthenticated = [
        <Route path="/login" exact component={Login}/>,
        <Route path="/register" exact component={Register}/>,
    ]

    return (
        <div className="Landing">
            <div className="Image"></div>
            <div className="LoginRegister">
            {isAuthenticated ? null : notAuthenticated}
            </div>

        </div>
    )
}

export default Landing;