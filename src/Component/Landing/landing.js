import React from "react";
import "./landing.css";
import Login from "../Login/login";
import Register from "../Register/Register";
import UserPanel from "../UserPanel/UserPanel";
import {useSelector} from "react-redux";
import {Route} from "react-router-dom";
import {Redirect} from "react-router-dom";

const Landing = () => {
    const isAuthenticated = useSelector(state => state.login.isAuthenticated);
    const notAuthenticated = [
        <Route key="login" path="/login" exact component={Login}/>,
        <Route key="register" path="/register" exact component={Register}/>,
    ]

    const authenticated = <Route path="/user" component={UserPanel}/>


    return (
        <div className="Landing">
            {isAuthenticated ? <Redirect to="/user/questionnaires"/> : <Redirect to="/login"/>}
            {isAuthenticated ? <div className="UserPanel">
                    {authenticated}
                </div> :
                <>
                    <div className="Image"></div>
                    <div className="LoginRegister">
                        {notAuthenticated}
                    </div>
                </>}

        </div>
    )
}

export default Landing;