import React from 'react';
import "./UserPanel.css";
import Navigation from "./Navigation/navigation";
import Welcome from "../UI/Welcome/welcome";
import {useSelector} from "react-redux";


const UserPanel = () => {
    const userName = useSelector(state => state.login.userName);
    return (
        <>
            <div className="LeftSide">
            <div className="Welcome">
                <Welcome name={userName}/>
            </div>
            <div className="Navigation">
                <Navigation/>
            </div>
        </div>
            </>
    )
}

export default UserPanel;