import React, {useState} from "react";
import "./login.css";
import Input from "../UI/Input/input";
import Button from "../UI/Button/button";
import * as loginAction from "../../Action/LoginAction/loginAction";
import {useDispatch} from 'react-redux';
import {useSelector} from "react-redux";
import TextError from "../UI/ErrorText/ErrorText";
import {Link} from "react-router-dom";
import Loader from "react-loader-spinner";


const Login = () => {
    const dispatch = useDispatch();
    const [inputEmailState, setInputEmailState] = useState('');
    const [inputPasswordState, setInputPasswordState] = useState('');
    const [loginBeginState, setLoginBeginState] = useState(false);
    const errorMessage = useSelector(state => state.login.errorLogin);

    const buttonHandler = (e) => {
        e.preventDefault();
        setLoginBeginState(true);
        loginAction.LoginBegin(dispatch, {
            "email": inputEmailState,
            "password": inputPasswordState
        }, setLoginBeginState);


    }

    return (
        <div className="LoginForm">
            <h2>Sign in</h2>
            <form>
                <Input type="text" name="email" placeholder="Your email" value={inputEmailState}
                       handler={setInputEmailState}/>
                <Input type="password" name="password" placeholder="Your password" value={inputPasswordState}
                       handler={setInputPasswordState}/>
                <Button type="submit" text="Sign in" handler={buttonHandler}/>
            </form>
            {errorMessage ? <TextError errorMessage={errorMessage}/> : <TextError errorMessage=""/>}
            <h3>You don't have account? Quick
                <Link to={"/register"}> SIGN UP </Link>
                here</h3>
            {loginBeginState ? <Loader type="TailSpin" color="rgb(55, 81, 94)" height="4rem" width="50"/> : null}
        </div>
    )
}

export default Login;