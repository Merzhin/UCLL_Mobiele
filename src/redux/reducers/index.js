import { combineReducers } from 'redux';
import trips from './trips';
import expenses from './expenses';
import expense from './expense';
import personen from './personen';
import selectedCurrency  from './selectedCurrency';
import allCurrencies from './allCurrencies';
import moneyTransfers from './moneyTransfers';
import categories from './categories';
import users from './users';

export default combineReducers({
    trips,
    expenses,
    expense,
    personen,
    selectedCurrency,
    allCurrencies,
    moneyTransfers,
    categories,
    users
});
