import { createStore } from 'redux';
import rootReducers from './rootReducer';
import cakeReducer from './cake/cakeReducer'
const store = createStore(rootReducers);

export default store