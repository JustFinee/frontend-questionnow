import React from 'react';
import "./button.css";

const button = (props) => {
    return (
        <button
            className="Button"
            type={props.type}
            onClick={e => props.handler(e)}
        >{props.text} </button>
    )
}

export default button;