import axios from 'axios';

export const LoginBegin = (dispatch, userData, setLoginBeginState) => {
    axios.post("http://localhost:8080/users/signIn", {
        headers: {
            accept: 'application/json',
        },
        email: userData.email,
        password: userData.password
    }).then(res => {
        setLoginBeginState(false)
        dispatch(loginSuccess({
            "name": res.headers['name'],
            "token": res.headers['token'],
            "id": res.headers['id']
        }))
    })
        .catch(error => {
            setLoginBeginState(false);
            dispatch(loginError(error.request.responseText));
        })


}

export const loginSuccess = (userData) => {
    return {
        type: "LOGIN_SUCCES",
        userData: userData
    }


}

export const loginError = (error) => {
    return {
        type: "LOGIN_ERROR",
        error: error
    }
}