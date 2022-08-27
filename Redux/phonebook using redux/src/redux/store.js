import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './contactReducer';
const store = createStore(contactReducer, composeWithDevTools());
export default store;