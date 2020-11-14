import axios from 'axios';

export const LoginBegin = (dispatch,userData) => {
    axios.post("http://localhost:8080/users/signIn", {
        headers: {
            accept: 'application/json',
        },
        email: userData.email,
        password: userData.password
    }).then(res => dispatch(loginSucces({
        "name": res.headers['name'],
        "token": res.headers['token'],
        "id": res.headers['id']
    })))
        .catch(error =>  dispatch(loginError(error.request.responseText)))


}

export const loginSucces = (userData) => {
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