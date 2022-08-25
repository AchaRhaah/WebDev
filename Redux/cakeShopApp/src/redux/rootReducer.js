import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import icecreamReducer from './icecream/iceCreamReducer'

const rootReducers = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})
export default rootReducers;