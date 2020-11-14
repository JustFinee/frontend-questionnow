import React from "react";
import "./logoText.css";
const logoText = (props) => {
    return(
        <h1 className="LogoText">{props.text}</h1>
    )
}

export default logoText;