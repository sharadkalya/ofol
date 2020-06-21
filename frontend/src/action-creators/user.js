import { USER_REGISTRATION_IN_PROGRESS, USER_REGISTRATION_SUCCESS, USER_REGISTRATION_FAILED } from "../actions";

export const registerUser = (details) => {
    return (dispatch) => {
        dispatch({
            type: USER_REGISTRATION_IN_PROGRESS
        })

        fetch('/register', {
            headers: {
                'Content-Type': 'application/json'
              },
            method: 'POST',
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(res => {
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
            })
            .catch((error) => {
                dispatch({
                    type: USER_REGISTRATION_FAILED,
                    payload: error
                });
            });
    };
}
