import React from 'react';
import "./welcome.css"

const welcome = (props) => {
    return (
        <div className="WelcomeUser">
            <h2>Hello </h2>
            <h3>{props.name}</h3>
        </div>
    )
}

export default welcome;