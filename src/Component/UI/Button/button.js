import React from 'react';
import "./button.css";

const button = (props) => {
    return (
        <button className="Button" type={props.type}>{props.text}</button>
    )
}

export default button;