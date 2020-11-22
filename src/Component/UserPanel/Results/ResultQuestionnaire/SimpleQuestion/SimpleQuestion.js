import React from 'react';
import "./SimpleQuestion.css"
import SimpleAnswer from "../SimpleAnswer/SimpleAnswer"
const SimpleQuestion = (props) => {

      const mappedAnswers = props.answerList.map(question => <SimpleAnswer
                key={question.questionNumber}
                value={question.value}
                answerNumber={question.answerNumber}
            />
        )


    return(
        <div className="SimpleQuestion">
            {props.questionNumber}. {props.value}
            {mappedAnswers}
        </div>
    )
}

export default SimpleQuestion;