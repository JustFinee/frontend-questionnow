import React from 'react';
import "./NavigationItem.css";
import {NavLink} from "react-router-dom";

const NavigationItem = (props) => {
    return (
        <li className="NavItem">
            <NavLink to={props.link}>
                {props.text}
            </NavLink>
        </li>
    )
}

export default NavigationItem;