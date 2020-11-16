import React from 'react';
import "./questionnaireTittle.css";

const questionnaireTittle = (props) => {
    return(
        <h1 className="QuestionnaireTittle">{props.tittle}</h1>
    )
}

export default questionnaireTittle;