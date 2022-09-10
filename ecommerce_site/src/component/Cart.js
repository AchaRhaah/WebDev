import React, { useState } from "react";
import { useSelector } from "react-redux";
// import handleCart from "../redux/reducers/handleCart";

export default function Cart() {
  const state = useSelector((state) => state.handleCart);
  const [prodQty, setProdQty] = useState(3);

  const handleButton = (prod) => {
    setProdQty((prevQty) => prevQty + 1);
    console.log(prodQty);
  };

  return (
    <>
      {state.map((product) => {
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
                {prodQty} &times; $ {product.price} = {product.price}
              </h3>
              <button
                onClick={handleButton}
                className="btn btn-outline-dark me-4"
              >
                <i className="fa fa-minus"></i>
              </button>
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