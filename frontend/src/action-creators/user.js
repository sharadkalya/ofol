import * as actions from "../actions";
import * as endpoints from '../endpoints';
import { postData } from '../repositories/fetch';

const loginRegister = (details, url, history) => {
    return async (dispatch) => {
        dispatch({
            type: actions.USER_REGISTRATION_IN_PROGRESS
        });

        try {
            const res = await postData(url, {
                body: details
            });
            if (res.error) {
                dispatch({
                    payload: res.error,
                    type: actions.USER_REGISTRATION_FAILED
                });
            } else {
                dispatch({
                    payload: res,
                    type: actions.USER_REGISTRATION_SUCCESS
                });
                history.replace('/');
            }
        } catch (error) {
            dispatch({
                payload: error,
                type: actions.USER_REGISTRATION_FAILED
            });
        }
    };
};

export const loginUser = (details, history) => {
    return dispatch => loginRegister(details, endpoints.login, history)(dispatch);
};

export const registerUser = (details, history) => {
    return dispatch => loginRegister(details, endpoints.register, history)(dispatch);
};

export const logout = () => {
    return {
        type: actions.LOGOUT
    };
};

export const existingUserLogin = () => {
    return {
        type: actions.LOGIN_USER
    };
};
