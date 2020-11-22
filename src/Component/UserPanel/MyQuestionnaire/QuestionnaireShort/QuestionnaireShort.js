import React from 'react';
import "./QuestionnaireShort.css";
import {Link} from "react-router-dom";

const QuestionnaireShort = (props) => {

    let questionnaires = null;
    if (!props.result) {
        questionnaires = (
            <div className="QuestionnaireShort">
                <Link to={"/user/questionnaires/" + props.id}>
                    {props.name}
                </Link>
            </div>
        )
    } else {
        questionnaires = (
            <div className="QuestionnaireShort">
                <Link to={"/user/results/" + props.id}>
                    {props.name}
                </Link>
            </div>
        )
    }

    return (
        <>
            {questionnaires}
        </>
    )
}

export default QuestionnaireShort;