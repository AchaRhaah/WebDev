import { createStore } from 'redux'
import { rootReducer } from './rootReducer'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'

export const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})))