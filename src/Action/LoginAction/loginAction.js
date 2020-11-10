import axios from 'axios';

export const LoginBegin = (dispatch) => {
    axios.post("http://localhost:8080/users/signIn", {
        headers: {
            accept: 'application/json',
        },
        email: "bartek",
        password: "123"
    }).then(res => dispatch(login({
        "name": res.headers['name'],
        "token": res.headers['token'],
        "id": res.headers['id']
    })))
        .catch(error => console.log(error));


}

export const login = (userData) => {

    return {
        type: "LOGIN_SUCCES",
        userData: userData
    }
}
