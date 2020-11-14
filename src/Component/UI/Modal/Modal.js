import React from 'react';
import "./Modal.css";
import Button from "../Button/button";
import { useHistory } from "react-router-dom";


const Modal = (props) => {
    const history = useHistory();
    const buttonHandler = () => {
        history.push("/login")
    }

    return (
        <div className="Modal">
            <h2>Welcome</h2>
            <h3>{props.name} !</h3>
            <p>Now you can login to your account using email: {props.email}</p>
            <Button type="submit" text="Sign in" handler={buttonHandler}/>
        </div>
    )
}

export default Modal;