import { createStore } from 'redux'
import { rootReducer } from './rootReducer'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

export const store = createStore(rootReducer, applyMiddleware(thunk))