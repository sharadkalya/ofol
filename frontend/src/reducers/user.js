import * as actions from "../actions";

const INITIAL_STATE = {
    error: null,
    fetchingUser: false,
    isAuthenticated: false,
    userData: null
};

const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.LOGIN_USER: return {
            isAuthenticated: Boolean(localStorage.getItem('isAuthenticated'))
        };

        case actions.LOGOUT:
            localStorage.removeItem('isAuthenticated');
            return {
                isAuthenticated: false
            };

        case actions.USER_REGISTRATION_IN_PROGRESS: return {
            ...state,
            fetchingUser: true
        };

        case actions.USER_REGISTRATION_FAILED: return {
            ...state,
            error: action.payload,
            fetchingUser: false
        };

        case actions.USER_REGISTRATION_SUCCESS:
            localStorage.setItem('isAuthenticated', true);
            return {
                ...state,
                fetchingUser: false,
                isAuthenticated: true,
                userData: action.payload
            };

        default: return state;
    }
};

export default user;
