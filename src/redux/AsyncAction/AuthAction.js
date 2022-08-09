
import axiosIntance from "../../helpers/axiosIntance";
import { authConstants } from "../constants";

// export const postRegister = (state) => {
//     return async (dispatch) => {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         };
//         dispatch({ type: SET_LOADER });
//         try {
//             const { data } = await axios.post('/register', state, config);
//             dispatch({ type: CLOSE_LOADER });
//             localStorage.setItem('myToken', data.token);
//             dispatch({ type: SET_TOKEN, payload: data.token });
//         } catch (error) {
//             dispatch({ type: CLOSE_LOADER });
//             dispatch({
//                 type: REGISTER_ERRORS,
//                 payload: error.response.data.errors,
//             });
//         }
//     };
// };


export const postRegister = (state) => {
    return async (dispatch) => {
        try {
            dispatch({ type: authConstants.SIGNUP_REQUEST });
            const res = await axiosIntance.post('/register', state);
            console.log("Regres", res);

            if (res.status === 201) {
                dispatch({ type: authConstants.SIGNUP_SUCCESS });
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                console.log(res.data.user)
                dispatch({ type: authConstants.SET_TOKEN, payload: res.data.token });
            }
            if (res.status === 400) {
                dispatch({
                    type: authConstants.SIGNUP_FAILURE,
                    payload: res.data.errors
                })
            }
            else {
                dispatch({
                    type: authConstants.SIGNUP_FAILURE, payload: res.data.errors
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const postLogin = (state) => {
    return async (dispatch) => {
        try {
            dispatch({ type: authConstants.LOGIN_REQUEST });
            const res = await axiosIntance.post('/login', state);
            // console.log("Loginres", res);

            if (res.status === 200) {
                const { token, user } = res.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                dispatch({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: { token, user }
                });
            } else {
                if (res.status === 400) {
                    const error = res;
                    console.log("Error", error)
                    dispatch({
                        type: authConstants.LOGIN_FAILURE,
                        payload: { error }
                    });
                }
            }

        } catch (e) {
            console.log(e);
        }
    }
}