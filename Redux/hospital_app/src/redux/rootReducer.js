import { appointmentReducer } from './patient/patientReducers'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    appointment: appointmentReducer
})