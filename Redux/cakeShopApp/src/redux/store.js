import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from './rootReducer';
import logger from 'redux-logger'
import cakeReducer from './cake/cakeReducer'

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(logger)));

export default store