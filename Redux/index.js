const BUY_CAKE = "BUY_CAKE";
// action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

// reducers

// (previousState, action) => newstate

const initialState = {
  numOfCakes: 10,
};
const reducer = (state, action) => {
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
