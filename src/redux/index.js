import { combineReducers, createStore } from 'redux';
import auth from './auth/reducers';
import trips from './trip/reducers';

const rootReducer = combineReducers({
    auth,
    trips
});

let store = createStore(rootReducer);
 
export default store;
