import React from 'react';
import "./QuestionnaireShort.css";
import {Link} from "react-router-dom";

const QuestionnaireShort = (props) => {
    return (
        <div className="QuestionnaireShort">
            <Link to={"/user/questionnaires/"+props.id}>
                {props.name}
            </Link>
        </div>
    )
}

export default QuestionnaireShort;