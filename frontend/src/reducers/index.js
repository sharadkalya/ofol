import { combineReducers } from 'redux'

import appState from './appState';
import user from './user';

export default combineReducers({
    appState,
    user
});
