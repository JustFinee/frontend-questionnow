import React from 'react';

const checkValidity = (inputNameState,setNameErrorState,inputEmailState,setEmailErrorState,inputPasswordState,setPasswordErrorState) => {

    if (inputNameState.length <3 || inputNameState.length>10) setNameErrorState("Name should be between 3 and 10 characters")
    else setNameErrorState(false);

    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(inputEmailState)) setEmailErrorState("This email does not look properly")
    else setEmailErrorState(false);

    console.log(inputPasswordState)
    if (inputPasswordState.length < 6 || inputPasswordState.length >15) setPasswordErrorState("Password should be between 6 and 15 characters")
    else setPasswordErrorState(false);

}

export default checkValidity;