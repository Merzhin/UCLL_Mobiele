import { combineReducers } from 'redux';
import auth from './auth';
import trips from './trips';
import expenses from './expenses';
import expense from './expense';
import personen from './personen';
import { currenciesConversionReducer, USD, JPY, EUR, GBP } from './currenciesConversionReducer';

export default combineReducers({
    auth,
    trips,
    expenses,
    expense,
    personen,
    currenciesConversionReducer,
    USD:USD, 
    JPY:JPY, 
    EUR:EUR, 
    GBP:GBP
});
