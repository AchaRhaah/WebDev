import React from 'react'
import { useSelector } from 'react-redux'
import handleCart from "../redux/reducers/handleCart";

export default function Cart() {
  const state = useSelector((state) => state.handleCart);
//   console.log(state);

  return (
    <>
          {state.map((product) => {
              return(
              <h1>{ product.price}</h1>)
      })}
    </>
  );
}
