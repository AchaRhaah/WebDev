const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
// // action are javaScript object with a type property
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// {
//   type: BUY_CAKE,
//   info: 'First redux action'
// }
// action creator is a function that returns an action

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
function buyIcecream() {
  return {
    type: BUY_ICECREAM,
  };
}

// A reducer is a function that accepts
// state and action as arguements, and returns the next state of the application
// eg (previousState, action) => newState

const initialStateOfCake = {
  numOfCakes: 10,
};
const initialStateOfIceCream = {
  numberOfIceCreame: 20,
};

const cakeReducer = (state = initialStateOfCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};
const iceCreameReducer = (state = initialStateOfIceCream, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCreame: state.numberOfIceCreame - 1,
      };
    default:
      return state;
  }
};


const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCreame: iceCreameReducer
})
const store = createStore(rootReducers, applyMiddleware(logger));
console.log("Initial state", store.getState())
const unsubscribe = store.subscribe(() => {});
// store.subscribe(() => console.log("updated state", store.getState()));
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
store.dispatch(buyIcecream())
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

// unsubscribe()
// console.log("***initial state", store.getState());
