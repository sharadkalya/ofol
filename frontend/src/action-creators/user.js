import { USER_REGISTRATION_IN_PROGRESS, USER_REGISTRATION_SUCCESS, USER_REGISTRATION_FAILED, LOGIN_USER } from "../actions";
import * as endpoints from '../endpoints';

const loginRegister = (details, URL, history) => {
    return (dispatch) => {
        dispatch({
            type: USER_REGISTRATION_IN_PROGRESS
        });

        fetch(URL, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(res => {
                setTimeout(() => {
                    if (res.error) {
                        dispatch({
                            type: USER_REGISTRATION_FAILED,
                            payload: res.error
                        });
                    } else {
                        dispatch({
                            type: USER_REGISTRATION_SUCCESS,
                            payload: res
                        });
                        history.replace('/');
                    }
                }, 1000);
            })
            .catch((error) => {
                dispatch({
                    type: USER_REGISTRATION_FAILED,
                    payload: error
                });
            });
    };
};


export const loginUser = (details, history) => {
    return dispatch => loginRegister(details, endpoints.login, history)(dispatch);
};

export const registerUser = (details, history) => {
    return dispatch => loginRegister(details, endpoints.register, history)(dispatch);
};

export const existingUserLogin = () => {
    return {
        type: LOGIN_USER
    };
};
