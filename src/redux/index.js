import { combineReducers } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import auth from './auth/reducers';
import trips from './trip/reducers';
import logger from 'redux-logger'
const rootReducer = combineReducers({
    auth,
    trips
});

let store = createStore(rootReducer,applyMiddleware(logger));
 
export default store;  