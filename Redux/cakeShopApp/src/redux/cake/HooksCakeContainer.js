import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../cake/cakeActions";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes-{numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
}

export default HooksCakeContainer;
