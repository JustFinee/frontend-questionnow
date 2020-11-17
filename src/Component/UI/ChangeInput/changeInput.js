import React from 'react';
import "./changeInput.css";

const changeInput = (props) => {
    return (
        <div className="ChangeInput">
            <textarea
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={e => props.handler(e.target.value)}
            />
            <button type="submit" onClick={e => props.saveHandler(e)}
            >Save
            </button>
        </div>

    )
}

export default changeInput;