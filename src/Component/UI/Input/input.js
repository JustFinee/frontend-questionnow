import React from 'react';
import "./input.css";

const input = (props) => {
    return (
        <div className="InputField">
            <label>{props.name}</label>
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={e=>props.handler(e.target.value)}
            />

        </div>

    )
}

export default input;