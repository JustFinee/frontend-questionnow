import React from "react";
import "./landing.css";
import Login from "../Login/login";
import Register from "../Register/Register";
import UserPanel from "../UserPanel/UserPanel";
import {useDispatch, useSelector} from "react-redux";
import {Route} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {loginSuccess} from "../../Action/LoginAction/loginAction";

const Landing = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.login.isAuthenticated);
    const notAuthenticated = [
        <Route key="login" path="/login" exact component={Login}/>,
        <Route key="register" path="/register" exact component={Register}/>,
    ]

    const authenticated = <Route path="/user" component={UserPanel}/>

    if (localStorage.getItem('name')!==null){
        dispatch(loginSuccess({
            "name": localStorage.getItem('name'),
            "token": localStorage.getItem('token'),
            "id": localStorage.getItem('id')
            }

        ))
    }


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