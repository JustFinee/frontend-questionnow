import React, {useState} from 'react';
import Input from "../UI/Input/input";
import Button from "../UI/Button/button";
import {Link} from "react-router-dom";
import "../Login/login.css"
import axios from 'axios';
import checkValidity from "./checkValidity";
import TextError from "../UI/ErrorText/ErrorText";

const Register = () => {
    const [inputNameState, setInputNameState] = useState('');
    const [inputEmailState, setInputEmailState] = useState('');
    const [inputPasswordState, setInputPasswordState] = useState('');
    const [inputNameErrorState, setNameErrorState] = useState(false);
    const [inputEmailErrorState, setEmailErrorState] = useState(false);
    const [inputPasswordErrorState, setPasswordErrorState] = useState(false);
    const [isRegisterSuccessState, setRegisterSuccessState] = useState('');
    const [registerErrorState, setRegisterErrorState] = useState(false);


    const buttonHandler = (e) => {
        e.preventDefault();
        checkValidity(inputNameState, setNameErrorState, inputEmailState, setEmailErrorState, inputPasswordState, setPasswordErrorState);
        if (!inputNameErrorState && !inputEmailErrorState && !inputPasswordErrorState) {
            register();
        }

    }

    const register = () => {
        axios.post("http://localhost:8080/users/signup", {
            headers: {
                accept: 'application/json',
            },
            name: inputNameState,
            email: inputEmailState,
            password: inputPasswordState
        }).then(res => setRegisterSuccessState(true))
            .catch(error => setRegisterErrorState(error.request.responseText));
    }

    return (
        <div className="LoginForm">
            <h2>Sign up</h2>
            <form>
                <Input type="text" name="name" placeholder="Your name" value={inputNameState}
                       handler={setInputNameState}/>
                {inputNameErrorState ? <TextError errorMessage={inputNameErrorState}/> : <TextError errorMessage=""/>}
                <Input type="text" name="email" placeholder="Your email" value={inputEmailState}
                       handler={setInputEmailState}/>
                {inputEmailErrorState ? <TextError errorMessage={inputEmailErrorState}/> : <TextError errorMessage=""/>}
                <Input type="password" name="password" placeholder="Your password" value={inputPasswordState}
                       handler={setInputPasswordState}/>
                {inputPasswordErrorState ? <TextError errorMessage={inputPasswordErrorState}/> :
                    <TextError errorMessage=""/>}
                <Button type="submit" text="Sign up" handler={buttonHandler}/>
            </form>

            {registerErrorState ? <TextError errorMessage={registerErrorState}/> :
                <TextError errorMessage=""/>}

            <h3>You already have account? Quick
                <Link to={"/login"}> SIGN IN </Link>
                here</h3>
        </div>
    )
}


export default Register;