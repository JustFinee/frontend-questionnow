import React, {useState} from "react";
import "./login.css";
import Input from "../UI/Input/input";
import Button from "../UI/Button/button";
import * as loginAction from "../../Action/LoginAction/loginAction";
import {useDispatch} from 'react-redux';
import {useSelector} from "react-redux";
import TextError from "../UI/ErrorText/ErrorText";
import {Link} from "react-router-dom";


const Login = () => {

    const dispatch = useDispatch();
    const [inputEmailState, setInputEmailState] = useState('');
    const [inputPasswordState, setInputPasswordState] = useState('');
    const errorMessage = useSelector(state => state.login.errorLogin);

    const buttonHandler = (e) => {
        e.preventDefault();
        loginAction.LoginBegin(dispatch, {"email": inputEmailState, "password": inputPasswordState});
    }

    return (
        <div className="LoginForm">
            <h2>Sign in</h2>
            <form>
                <Input type="text" name="email" placeholder="Your email" value={inputEmailState}
                       handler={setInputEmailState}/>
                <Input type="password" name="password" placeholder="Your password" value={inputPasswordState}
                       handler={setInputPasswordState}/>
                {errorMessage ? <TextError errorMessage={errorMessage}/> : <TextError errorMessage=""/>}
                <Button type="submit" text="Sign in" handler={buttonHandler}/>
            </form>

            <h3>You don't have account? Quick
                <Link to={"/register"}> SIGN UP </Link>
                here</h3>
        </div>
    )
}

export default Login;