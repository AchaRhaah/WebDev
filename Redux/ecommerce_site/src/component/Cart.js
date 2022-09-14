import React, { useState } from "react";
import { useSelector } from "react-redux";
import handleCart from "../redux/reducers/handleCart";

export default function Cart() {
  const state = useSelector((state) => state.handleCart);

  const HandleButton = (prod) => {
    const [prodQty, setQty] = useState(prod.qty);
    console.log(prodQty);
  };

  return (
    <>
      {state.map((product) => {


        const getTotal = () => {
          let total = 0;
          for (let i = 0; i <= state.length - 1; i++) {
            // console.log(product.price)
            total += product.price;
          }
          return total
        };
        // {console.log(getTotal())}
        return (
          <div className="d-flex mx-auto">
            <div className="col-md-5">
              <img
                src={product.image}
                alt={product.title}
                height="300px"
                width="340px"
              />
            </div>
            <div className="col-md-6">
              <h6 className="display-5 fw-bold">{product.title}</h6>
              <h3 className="display-6 ">
                {product.qty} &times; $ {product.price} = {product.price}
              </h3>
              <button
                onClick={() => HandleButton(product)}
                className="btn btn-outline-dark me-4"
              >
                <i className="fa fa-minus"></i>
              </button>
              <h1>total = {getTotal() }</h1>
              {/* <button
                onclick={() => handleButton(product)}
                className="btn btn-outline-dark"
              >
                <i className="fa fa-plus"></i>
              </button> */}
            </div>
          </div>
        );
      })}
      <br />
      <br />
    </>
  );
}
