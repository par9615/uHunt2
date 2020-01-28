import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';


let store = createStore(combineReducers(reducers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;