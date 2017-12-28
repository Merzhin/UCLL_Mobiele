import { combineReducers } from 'redux';
import auth from './auth';
import trips from './trips';
import expenses from './expenses';
export default combineReducers({
    auth,
    trips,
    expenses
});
