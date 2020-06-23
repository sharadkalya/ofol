import { USER_REGISTRATION_IN_PROGRESS, USER_REGISTRATION_SUCCESS, USER_REGISTRATION_FAILED } from "../actions";
import * as endpoints from '../endpoints';

const loginRegister = (details, URL) => {
    return (dispatch) => {
        dispatch({
            type: USER_REGISTRATION_IN_PROGRESS
        })

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
                    console.log('stop loader');
                    if (res.error) {
                        dispatch({
                            type: USER_REGISTRATION_FAILED,
                            payload: res.error
                        })
                    } else {
                        dispatch({
                            type: USER_REGISTRATION_SUCCESS,
                            payload: res
                        });
                    }

                }, 3000);
            })
            .catch((error) => {
                dispatch({
                    type: USER_REGISTRATION_FAILED,
                    payload: error
                });
            });
    };
};


export const loginUser = (details) => {
    return dispatch => loginRegister(details, endpoints.login)(dispatch);
};

export const registerUser = (details) => {
    return dispatch => loginRegister(details, endpoints.register)(dispatch);
};
