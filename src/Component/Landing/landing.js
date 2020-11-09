import React from "react";
import "./landing.css"
import Login from "../Login/login"
import LogoText from "../UI/LogoText/logoText"

const landing = () => {
    return (
        <div className="Landing">
            <div className="Image">

            </div>

            <div className="Login">
                <Login/>
            </div>
        </div>
    )
}

export default landing;