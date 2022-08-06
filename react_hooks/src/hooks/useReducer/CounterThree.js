import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>count - {count}</h2>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      <div>
        <h2>Count two: {count2}</h2>
        <button onClick={() => dispatch2("increment")}>increment</button>
        <button onClick={() => dispatch2("decrement")}>decrement</button>
        <button onClick={() => dispatch2("reset")}>reset</button>
      </div>
    </div>
  );
};

export default CounterThree;
