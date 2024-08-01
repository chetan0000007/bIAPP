import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'
import rootReducer from './reducers';

console.log('rootReducer:', rootReducer);  // Add this line
console.log('thunk:', thunk);  // Add this line

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
