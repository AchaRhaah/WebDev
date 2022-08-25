import { applyMiddleware, createStore } from 'redux';
import rootReducers from './rootReducer';
import logger from 'redux-logger'
import cakeReducer from './cake/cakeReducer'

const store = createStore(rootReducers, applyMiddleware(logger));

export default store