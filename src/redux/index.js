import { combineReducers } from 'redux';
import { createStore } from 'redux';
import auth from './auth/reducers';

const rootReducer = combineReducers({
    auth
});

let store = createStore(rootReducer);
 
export default store;