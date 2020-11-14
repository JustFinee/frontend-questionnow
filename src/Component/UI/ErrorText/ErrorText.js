import React from 'react';
import "./ErrorText.css"

const errorText = (props) =>{
    return(
    <p className="Error">{props.errorMessage}</p>
    )
}

export default errorText;