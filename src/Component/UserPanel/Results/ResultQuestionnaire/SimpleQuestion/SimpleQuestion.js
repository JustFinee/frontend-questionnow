import React from 'react';
import "./SimpleQuestion.css"
import SimpleAnswer from "../SimpleAnswer/SimpleAnswer"
import {PieChart} from 'react-minimal-pie-chart';

const SimpleQuestion = (props) => {

    const colors=["#E38627","#C13C37","#6A2135","#511a28"]
    const data = [];
    const mappedAnswers = props.answerList.map(question => <SimpleAnswer
            key={question.questionNumber}
            value={question.value}
            answerNumber={question.answerNumber}
            counter={question.counter}
            color={colors[question.answerNumber-1]}
        />
    )
    const defaultLabelStyle = {
        fontSize: '0.3rem',
        fontFamily: 'sans-serif',
    };

    props.answerList.map(answer => data.push({
        "tittle": answer.answerNumber,
        "value": answer.counter,
        "color":colors[answer.answerNumber-1]
    }))


    return (
        <div className="SimpleQuestion">
            {props.questionNumber}. {props.value}
            {mappedAnswers}

            <div className="PieChart">
                <PieChart data={data}

                          label={({ dataEntry }) => dataEntry.value>0 ? Math.round(dataEntry.percentage) + '%' : null}
                          labelStyle={{
                              ...defaultLabelStyle,
                          }}
                          radius={50}
                          labelPosition={110}
                          radius={30}


                />
            </div>
        </div>
    )
}

export default SimpleQuestion;