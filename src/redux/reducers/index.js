import { combineReducers } from 'redux';
import auth from './auth';
import trips from './trips';

export default combineReducers({
    auth,
    trips
});
