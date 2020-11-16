const initialState =
    {
        "isAuthenticated": false,
        "userName": "",
        "userId": "",
        "token": "",
        "errorLogin": false
    }

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCES':
            return {
                "isAuthenticated": true,
                "userName": action.userData.name,
                "userId": action.userData.id,
                "token": action.userData.token,
                "errorLogin": false
            }
        case 'LOGIN_ERROR':
            return {...initialState, "errorLogin": action.error}
        case 'LOG_OUT':
            return initialState;

        default:
            return state;

    }


}

export default loginReducer;