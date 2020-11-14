import './App.css';
import Landing from "./Component/Landing/landing"
import LogoText from "./Component/UI/LogoText/logoText";
import React from "react";
import {BrowserRouter} from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>
        <div className="App">
            <LogoText/>
            <div className="blur"></div>
            <Landing/>
        </div>
        </BrowserRouter>
    );
}
export default App;
