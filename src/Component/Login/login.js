import React from "react";
import "./login.css";
import Input from "../UI/Input/input";
import Button from "../UI/Button/button";

const login = () => {
    return (
        <div className="LoginForm">
            <h2>Sign in</h2>
            <form>
                <Input type="text" name="email" placeholder="Your email"/>
                <Input type="text" name="password" placeholder="Your password"/>
                <Button type="submit" text="Sign in"/>
            </form>
            <h3>You don't have account? Quick SIGN UP here</h3>
        </div>
    )
}

export default login;