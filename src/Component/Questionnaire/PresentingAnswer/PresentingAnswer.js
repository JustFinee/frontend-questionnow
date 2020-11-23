import React from "react";
import "./PresentingAnswer.css"


const PresentingAnswer = (props) => {

    return (
        <div className="PresentingAnswer">
            <h3>{props.answerNumber}. {props.value}</h3>
            <label className="CheckBoxAnswer">
                <input checked={false} type="checkbox" onChange={e=> props.setCheckedAnswer({"answerNumber": props.answerNumber, "nextQuestionNumber":props.nextQuestionNumber})} n/>
                <span></span>
            </label>
        </div>
    )
}

export default PresentingAnswer;