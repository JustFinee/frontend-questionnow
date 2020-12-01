import React from 'react';
import "./navigation.css";
import "./NavigationItem/NavigationItem"
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = () => {

    const nav = [
        {"text": "My questionnaires", "link": "/user/questionnaires"},
        {"text": "Create questionnaire", "link": "/user/createQuestionnaires"},
        {"text": "Results", "link": "/user/results"}
    ]

    const navMap = nav.map(item => (
        <NavigationItem key={item.text} text={item.text} link={item.link}/>
    ));

    return (
        <ul className="Nav">
            {navMap}
        </ul>

    )
}

export default Navigation;