import { authConstants } from "../constants";
import jwt_decode from "jwt-decode";
const initState = {
    token: null,
    user: {
        name: '',
        email: '',
        picture: '',
    },
    authenticate: false,
    authenticating: false,
    registerErrors: [],
    loginErrors: [],
    loading: false,
    error: null,
    message: '',
};

const verifyToken = (token) => {
    const decodeToken = jwt_decode(token);
    const expiresIn = new Date(decodeToken.exp * 1000);
    if (new Date() > expiresIn) {
        localStorage.removeItem('token');
    } else {
        return decodeToken;
    }
}

const token = localStorage.getItem('token');
if (token) {
    const decodeed = verifyToken(token);
    initState.token = token;
    initState.user = decodeed;
}


// if (token) {
//     const decodeToken = jwt_decode(token);
//     console.log("MyToken", decodeToken);

//     const expiresIn = new Date(decodeToken.exp * 1000);
//     if (new Date() > expiresIn) {
//         localStorage.removeItem('token');
//     } else {
//         initState.token = token;
//         initState.user = decodeToken;
//     }
// }

export default (state = initState, action) => {
    switch (action.type) {
        case authConstants.SIGNUP_REQUEST:
            break;
        case authConstants.SIGNUP_SUCCESS:
            break;
        case authConstants.SIGNUP_FAILURE:
            state = {
                ...state,
                registerErrors: action.payload
            };
            break;
        case authConstants.SET_TOKEN:
            const decodeed = verifyToken(action.payload);
            state = {
                ...state, token: action.payload, user: decodeed
            };
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = { ...state, token: '', user: '' };
            break;

        case authConstants.LOGIN_REQUEST:
            state = { ...state, authenticating: true };
            break;

        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state, user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
            };
            break;

        case authConstants.LOGIN_FAILURE:
            state = { ...state, loginErrors: action.payload.error };
            break;
    }
    return state;
}
