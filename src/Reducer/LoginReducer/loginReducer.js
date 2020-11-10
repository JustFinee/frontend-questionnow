const initialState =
    {
        "isAuthenticated": false,
        "userName": "",
        "userId": "",
        "token": ""
    }

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCES':
            return {
                "isAuthenticated": true,
                "userName": action.userData.name,
                "userId": action.userData.id,
                "token": action.userData.token
            }

        case 'LOGIN_ERROR':
            return initialState;
        default:
            return state;

    }


}

export default loginReducer;