import { USER_REGISTRATION_IN_PROGRESS, USER_REGISTRATION_FAILED, USER_REGISTRATION_SUCCESS } from "../actions";

const INITIAL_STATE = {
    error: null,
    fetchingUser: false,
    isAuthenticated: false,
    userData: null
}

const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_REGISTRATION_IN_PROGRESS: return {
            ...state,
            fetchingUser: true
        };

        case USER_REGISTRATION_FAILED: return {
            ...state,
            error: action.payload,
            fetchingUser: false
        };

        case USER_REGISTRATION_SUCCESS: return {
            ...state,
            fetchingUser: false,
            isAuthenticated: true,
            userData: action.payload
        };

        default: return state;
    }
}

export default user;
