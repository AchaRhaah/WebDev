import React, { useReducer } from "react";
const initialState = {
    firstCount: 0,
    secondCounter: 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };

    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>count - {count.firstCount}</h2>
      <h2>count - {count.secondCounter}</h2>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 2 })}>
        increment2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 2 })}>
        decrement2
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CounterTwo;
