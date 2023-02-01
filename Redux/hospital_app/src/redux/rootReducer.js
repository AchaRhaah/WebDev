import { appointmentReducer } from './patient/patientReducers'
import { combineReducers } from 'redux'
import { firestoreReducer  } from 'redux-firestore'

export const rootReducer = combineReducers({
    appointment: appointmentReducer,
    firestore: firestoreReducer
})