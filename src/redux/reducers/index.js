import { combineReducers } from 'redux';
import auth from './auth';
import trips from './trips';
import expenses from './expenses';
import expense from './expense';
import personen from './personen';
export default combineReducers({
    auth,
    trips,
    expenses,
    expense,
    personen
});
