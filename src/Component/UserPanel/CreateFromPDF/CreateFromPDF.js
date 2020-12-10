import React, {useState} from "react";
import "./CreateFromPDF.css"
import axios from "axios"
import {useSelector} from "react-redux";
import Loader from 'react-loader-spinner';

const CreateFromPDF = (props) => {
    const token = useSelector(state => state.login.token);
    const userId = useSelector(state => state.login.userId);
    const [loading, setLoading] = useState(false);


    const changeHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        sendRequest(e.target.files[0])
    }

    const sendRequest = (file) => {
        let formData = new FormData();
        formData.append('file', file);
        axios.post("http://localhost:8080/createQuestionnaireFromPdf?userId=" + userId,
            formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(
                setTimeout(() => {
                    props.history.push("/user/questionnaires")
                }, 2000))
    }

    return (
        <div className="Load">
            {loading ? <div className="Loader"><Loader type="TailSpin" color="rgb(55, 81, 94)" height="4rem" width="50"/></div> : <>
                <h1>Load your PDF file</h1>
                <input type="file" onChange={(e) => changeHandler(e)}/>
            </>}

        </div>
    )
}
export default CreateFromPDF;