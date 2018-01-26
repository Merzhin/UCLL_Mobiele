import { combineReducers } from 'redux';
import trips from './trips';
import expenses from './expenses';
import expense from './expense';
import personen from './personen';
import selectedCurrency  from './selectedCurrency';
import updateCurrency  from './updateCurrency';
import allCurrencies from './allCurrencies';
import moneyTransfers from './moneyTransfers';

export default combineReducers({
    trips,
    expenses,
    expense,
    personen,
    updateCurrency,
    selectedCurrency,
    allCurrencies,
    moneyTransfers
});
