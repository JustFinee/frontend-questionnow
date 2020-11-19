import React from 'react';
import "./questionnaireTittle.css";
import ChangeInput from '../../ChangeInput/changeInput'
import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {questionnaireFullSuccess} from "../../../../Action/QuestionnaireFullAction/questionnaireFullAction";


const QuestionnaireTittle = (props) => {
    const dispatch = useDispatch();
    const questionnaire = useSelector(state => state.fullQuestionnaire.questionnaire);
    const [isChanging, setIsChanging] = useState(false);
    const [inputChange, setInputChange] = useState(props.tittle);

    const changeTittleHandler = () => {
        if (isChanging === false)
            setIsChanging(true);
    }

    const changeTittleInQuestionnaire = () => {
        return {
            ...questionnaire,
            "name": inputChange
        }
    }

    const saveInput = (e) => {
        e.preventDefault();
        const questionnaireChanged = changeTittleInQuestionnaire();
        dispatch(questionnaireFullSuccess(questionnaireChanged));
        setIsChanging(false);
        if (props.isChanged !== undefined)
            props.isChanged(true);
        if (props.changeTittleCreation !== undefined)
            props.changeTittleCreation(inputChange)
    }


    return (
        <div className="QuestionnaireTittle" onClick={changeTittleHandler}>
            {isChanging ? <ChangeInput value={inputChange} handler={setInputChange} saveHandler={saveInput}/>
                : <h1>{props.tittle}</h1>}
        </div>

    )
}

export default QuestionnaireTittle;