import './App.css';
import Landing from "./Component/Landing/landing"
import LogoText from "./Component/UI/LogoText/logoText";
import React from "react";

const app = () => {
    return (
        <div className="App">
            <LogoText/>
            <div className="blur"></div>
            <Landing/>


        </div>
    );
}

export default app;
